import { EClass, EClassifier, EEnum, EEnumLiteral, EObject, EPackage } from '@ecore-ts/ecore-api';
import { HINT, Loader } from './Loader';
import { EPackageImpl } from './EPackageImpl';
import { EClassImpl } from './EClassImpl';
import { EEnumImpl } from './EEnumImpl';
import { EEnumLiteralImpl } from './EEnumLiteralImpl';
import { LoaderExtras } from './LoaderExtras';

export class JsonLoader implements Loader {
  private refMap: Map<string, any> = new Map<string, any>();
  private eObjects: EObject[] = [];
  private ePackages: EPackage[] = [];
  private eClassifiers: EClassifier[] = [];
  private eClasses: EClass[] = [];
  private eEnums: EEnum[] = [];
  private eEnumLiterals: EEnumLiteral[] = [];

  constructor(model: string) {
    const parsed = JSON.parse(model);
    const safe = Array.isArray(parsed) ? parsed : [parsed];
    this.processModel(safe);
    this.processRefs();
  }

  processModel(obj: any, parent?: EPackage, hint?: HINT, refPrefix?: string): EPackage[] {
    const ePackages: EPackage[] = [];
    try {
      const parsed = typeof obj === 'string' ? JSON.parse(obj) : obj;
      const entries = Array.isArray(parsed) ? parsed : [parsed];

      for (const entry of entries) {
        if (
          EPackageImpl.isObjectEPackage(entry) ||
          (parent instanceof EPackageImpl && hint === 'process-as-e-package')
        ) {
          const refVal = this.concatRef(parent as EPackageImpl, entry.name);
          const ePackage = new EPackageImpl(this, parent, entry, refVal);
          ePackages.push(ePackage);
          this.eObjects.push(ePackage);
          this.ePackages.push(ePackage);
          this.refMap.set(refVal, ePackage);

          if (Array.isArray(entry.eSubpackages)) {
            this.processModel(entry.eSubpackages, ePackage, 'process-as-e-package', refVal);
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
    return ePackages;
  }

  private processRefs(): void {
    for (const eClass of this.getEClasses() as EClassImpl[]) {
      const raw = (eClass as LoaderExtras).get$raw();
      if (Array.isArray(raw.eSuperTypes)) {
        for (const superType of raw.eSuperTypes) {
          if (superType.$ref && EClassImpl.isObjectEClass(superType)) {
            const classifier = this.getEClassifierForRef(superType.$ref);
            if (classifier && classifier instanceof EClassImpl) {
              eClass.getESuperTypesDirect().push(classifier);
            }
          }
        }
      }
    }
  }

  private concatRef(input: LoaderExtras | undefined, suffix: string): string {
    if (input) {
      return input.get$Ref().endsWith('//') ? input.get$Ref() + suffix : input.get$Ref() + '/' + suffix;
    }
    return '//';
  }

  private getEClassifierForRef(ref: string): EClassifier | undefined {
    if (ref.startsWith('//')) {
      return this.refMap.get(ref);
    }
    return undefined;
  }

  processClassifiers(classifiers: any[], parent: EPackage, hint?: HINT): EClassifier[] {
    const eClassifiers: EClassifier[] = [];
    for (const classifier of classifiers) {
      const refVal = this.concatRef(parent as EPackageImpl, classifier.name);
      if (EClassImpl.isObjectEClass(classifier)) {
        const eClass = new EClassImpl(this, parent, classifier, refVal);
        this.eObjects.push(eClass);
        this.eClassifiers.push(eClass);
        this.eClasses.push(eClass);
        this.refMap.set(refVal, eClass);
        eClassifiers.push(eClass);
      } else if (EEnumImpl.isObjectEClass(classifier)) {
        const eEnum = new EEnumImpl(this, parent, classifier, refVal);
        this.eObjects.push(eEnum);
        this.eClassifiers.push(eEnum);
        this.eEnums.push(eEnum);
        this.refMap.set(refVal, eEnum);
        eClassifiers.push(eEnum);
      }
    }
    return eClassifiers;
  }

  processEEnumLiterals(eEnumLiterals: any[], parent: EEnum, hint?: HINT): EEnumLiteral[] {
    const literals: EEnumLiteral[] = [];
    for (const eEnumLiteral of eEnumLiterals) {
      const refVal = this.concatRef(parent as EEnumImpl, eEnumLiteral.name);
      const literal = new EEnumLiteralImpl(this, parent, eEnumLiteral, refVal);
      this.eObjects.push(literal);
      this.eEnumLiterals.push(literal);
      this.refMap.set(refVal, literal);
      literals.push(literal);
    }
    return literals;
  }

  getEObjects(): EObject[] {
    return this.eObjects;
  }

  getEPackages(): EPackage[] {
    return this.ePackages;
  }

  getEClasses(): EClass[] {
    return this.eClasses;
  }

  getEClassifiers(): EClassifier[] {
    return this.eClassifiers;
  }

  getEEnums(): EEnum[] {
    return this.eEnums;
  }

  getEEnumLiterals(): EEnumLiteral[] {
    return this.eEnumLiterals;
  }
}
