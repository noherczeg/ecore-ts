import { ENamedElement } from './ENamedElement';
import { EPackage } from './EPackage';
import { ETypeParameter } from './ETypeParameter';

export interface EClassifier extends ENamedElement {
  instanceClassName: string;
  instanceClass: any;
  defaultValue: object;
  ePackage: EPackage;
  eTypeParameters: ETypeParameter[];
  isInstanceObject(object: object): boolean;
  getClassifierID(): number;
  getDefaultValue(): any;
  getEPackage(): EPackage;
  getETypeParameters(): ETypeParameter[];
  getInstanceClass(): any;
  getInstanceClassName(): string;
  getInstanceTypeName(): string;
  isInstance(): boolean;
  setInstanceClass(value: any): void;
  setInstanceClassName(value: string): void;
  setInstanceTypeName(value: string): void;
}
