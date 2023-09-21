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

export type HINT = 'process-as-e-package' | 'no-idea';

export interface Loader {
  getEObjects(): EObject[];
  getEPackages(): EPackage[];
  getEClassifiers(): EClassifier[];
  getEDataTypes(): EDataType[];
  getEClasses(): EClass[];
  getEEnums(): EEnum[];
  getEEnumLiterals(): EEnumLiteral[];
  getEStructuralFeatures(): EStructuralFeature[];
  getETypedElements(): ETypedElement[];
  getEAttributes(): EAttribute[];
  processModel(obj: any, parent?: EPackage, hint?: HINT): EPackage[];
  processClassifiers(classifiers: any[], parent: EPackage, hint?: HINT): EClassifier[];
  processEEnumLiterals(eEnumLiterals: any[], parent: EEnum, hint?: HINT): EEnumLiteral[];
  processStructuralFeatures(structuralFeatures: any[], parent: EClass, hint?: HINT): EStructuralFeature[];
}
