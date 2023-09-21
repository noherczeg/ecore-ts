import { ENamedElement } from './ENamedElement';
import { EClassifier } from './EClassifier';
import { EGenericType } from './EGenericType';

export interface ETypedElement extends ENamedElement {
  getEGenericType(): EGenericType | undefined;
  getEType(): EClassifier | undefined;
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
