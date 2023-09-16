import { ENamedElement } from './ENamedElement';
import { EEnum } from './EEnum';

export interface EEnumLiteral extends ENamedElement {
  getEEnum(): EEnum;
  getLiteral(): string;
  getValue(): number;
  setLiteral(value: string): void;
  setValue(value: number): void;
}
