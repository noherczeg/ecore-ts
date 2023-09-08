import { EModelElement } from './EModelElement';
import { EObject } from './EObject';
import { EClass } from './EClass';
import { EDataType } from './EDataType';
import { EPackage } from './EPackage';

export interface EFactory extends EModelElement {
  ePackage: EPackage;
  create(eClass: EClass): EObject;
  createFromString(eDataType: EDataType, literalValue: string): object;
  convertToString(eDataType: EDataType, instanceValue: any): string;
  getEPackage(): EPackage;
  setEPackage(value: EPackage): void;
}
