import { EObject, EPackage } from '@ecore-ts/ecore-api';

export interface Loader {
  processModel(obj: any): void;
  getEObjects(): EObject[];
  getEPackages(): EPackage[];
}
