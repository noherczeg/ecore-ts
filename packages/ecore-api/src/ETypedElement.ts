import { ENamedElement } from './ENamedElement';
import { EClassifier } from './EClassifier';
import { EGenericType } from './EGenericType';

export interface ETypedElement extends ENamedElement {
  ordered: boolean;
  unique: boolean;
  lowerBound: number;
  upperBound: number;
  many: boolean;
  required: boolean;
  eType?: EClassifier;
  eGenericType?: EGenericType;
  getEGenericType(): EGenericType;
  getEType(): EClassifier;
  getLowerBound(): number;
  getUpperBound(): number;
  isMany(): boolean;
  isOrdered(): boolean;
  isRequired(): boolean;
  isUnique(): boolean;
  setEGenericType(value: EGenericType): void;
  setEType(value: EClassifier): void;
  setLowerBound(value: number): void;
  setOrdered(value: boolean): void;
  setUnique(value: boolean): void;
  setUpperBound(value: number): void;
}
