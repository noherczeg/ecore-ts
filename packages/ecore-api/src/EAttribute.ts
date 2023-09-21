import { EStructuralFeature } from './EStructuralFeature';
import { EDataType } from './EDataType';

export interface EAttribute extends EStructuralFeature {
  getEAttributeType(): EDataType;
  isID(): boolean;
  setID(value: boolean): void;
}
