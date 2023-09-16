import { EClass, EClassifier, EEnum, EEnumLiteral, EObject, EPackage } from '@ecore-ts/ecore-api';

export type HINT = 'process-as-e-package' | 'no-idea';

export interface Loader {
  getEObjects(): EObject[];
  getEPackages(): EPackage[];
  getEClassifiers(): EClassifier[];
  getEClasses(): EClass[];
  getEEnums(): EEnum[];
  getEEnumLiterals(): EEnumLiteral[];
  processModel(obj: any, parent?: any, hint?: HINT): EPackage[];
  processClassifiers(classifiers: object[], parent?: EPackage, hint?: HINT): EClassifier[];
  processEEnumLiterals(eEnumLiterals: object[], parent?: EEnum, hint?: HINT): EEnumLiteral[];
}
