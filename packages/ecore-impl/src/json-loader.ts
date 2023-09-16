import { EClass, EClassifier, EEnum, EEnumLiteral, EObject, EPackage } from '@ecore-ts/ecore-api';
import { HINT, Loader } from './loader';
import { EPackageImpl } from './EPackageImpl';
import { EClassImpl } from './EClassImpl';
import { EEnumImpl } from './EEnumImpl';
import { EEnumLiteralImpl } from './EEnumLiteralImpl';

export class JsonLoader implements Loader {
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
  }

  processModel(obj: any, parent?: any, hint?: HINT): EPackage[] {
    const ePackages: EPackage[] = [];
    try {
      const parsed = typeof obj === 'string' ? JSON.parse(obj) : obj;
      const entries = Array.isArray(parsed) ? parsed : [parsed];

      for (const entry of entries) {
        if (
          EPackageImpl.isObjectEPackage(entry) ||
          (parent instanceof EPackageImpl && hint === 'process-as-e-package')
        ) {
          const ePackage = new EPackageImpl(this, parent, entry);
          ePackages.push(ePackage);
          this.eObjects.push(ePackage);
          this.ePackages.push(ePackage);

          if (Array.isArray(entry.eSubpackages)) {
            this.processModel(entry.eSubpackages, ePackage, 'process-as-e-package');
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
    return ePackages;
  }

  processClassifiers(classifiers: object[], parent?: EPackage, hint?: HINT): EClassifier[] {
    const eClassifiers: EClassifier[] = [];
    for (const classifier of classifiers) {
      if (EClassImpl.isObjectEClass(classifier)) {
        const eClass = new EClassImpl(this, parent, classifier);
        eClassifiers.push(eClass);
        this.eObjects.push(eClass);
        this.eClassifiers.push(eClass);
        this.eClasses.push(eClass);
      } else if (EEnumImpl.isObjectEClass(classifier)) {
        const eEnum = new EEnumImpl(this, parent, classifier);
        this.eObjects.push(eEnum);
        this.eClassifiers.push(eEnum);
        this.eEnums.push(eEnum);
      }
    }
    return eClassifiers;
  }

  processEEnumLiterals(eEnumLiterals: object[], parent?: EEnum, hint?: HINT): EEnumLiteral[] {
    const literals: EEnumLiteral[] = [];
    for (const eEnumLiteral of eEnumLiterals) {
      const literal = new EEnumLiteralImpl(this, parent, eEnumLiteral);
      this.eObjects.push(literal);
      this.eEnumLiterals.push(literal);
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
