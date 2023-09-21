import {
  EAttribute,
  EClass,
  EClassifier,
  EDataType,
  EEnum,
  EEnumLiteral,
  EObject,
  EPackage,
  EStructuralFeature,
  ETypedElement,
} from '@ecore-ts/ecore-api';
import { HINT, Loader } from './Loader';
import { EPackageImpl } from './EPackageImpl';
import { EClassImpl } from './EClassImpl';
import { EEnumImpl } from './EEnumImpl';
import { EEnumLiteralImpl } from './EEnumLiteralImpl';
import { LoaderExtras } from './LoaderExtras';
import { EAttributeImpl } from './EAttributeImpl';
import { AbstractLoader } from './AbstractLoader';

export class JsonLoader extends AbstractLoader implements Loader {
  private eObjects: EObject[] = [];
  private ePackages: EPackage[] = [];
  private eClassifiers: EClassifier[] = [];
  private eDataTypes: EDataType[] = [];
  private eClasses: EClass[] = [];
  private eEnums: EEnum[] = [];
  private eEnumLiterals: EEnumLiteral[] = [];
  private eStructuralFeatures: EStructuralFeature[] = [];
  private eTypedElements: ETypedElement[] = [];
  private eAttributes: EAttribute[] = [];

  constructor(model: string) {
    super();
    const parsed = JSON.parse(model);
    const safe = Array.isArray(parsed) ? parsed : [parsed];
    const eDataTypes = this.generateECorePrimitiveDataTypes(this);
    this.eObjects.push(...eDataTypes);
    this.eClassifiers.push(...eDataTypes);
    this.eDataTypes.push(...eDataTypes);
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

  processStructuralFeatures(structuralFeatures: any[], parent: EClass, hint?: HINT): EStructuralFeature[] {
    const eStructuralFeatures: EStructuralFeature[] = [];
    for (const structuralFeature of structuralFeatures) {
      const refVal = this.concatRef(parent.getEPackage() as EPackageImpl, structuralFeature.name);
      if (EAttributeImpl.isObjectEAttribute(structuralFeature)) {
        const eAttribute = new EAttributeImpl(this, parent, structuralFeature, refVal);
        this.eObjects.push(eAttribute);
        this.eTypedElements.push(eAttribute);
        this.eStructuralFeatures.push(eAttribute);
        this.eAttributes.push(eAttribute);
        this.refMap.set(refVal, eAttribute);
        eStructuralFeatures.push(eAttribute);
      }
    }
    return eStructuralFeatures;
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

  getEDataTypes(): EDataType[] {
    return this.eDataTypes;
  }

  getEEnums(): EEnum[] {
    return this.eEnums;
  }

  getEEnumLiterals(): EEnumLiteral[] {
    return this.eEnumLiterals;
  }

  getETypedElements(): ETypedElement[] {
    return this.eTypedElements;
  }

  getEStructuralFeatures(): EStructuralFeature[] {
    return this.eStructuralFeatures;
  }

  getEAttributes(): EAttribute[] {
    return this.eAttributes;
  }
}
