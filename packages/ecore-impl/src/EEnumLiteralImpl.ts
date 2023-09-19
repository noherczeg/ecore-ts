import { EEnum, EEnumLiteral } from '@ecore-ts/ecore-api';
import { ENamedElementImpl } from './ENamedElementImpl';
import { Loader } from './Loader';

export class EEnumLiteralImpl extends ENamedElementImpl implements EEnumLiteral {
  protected eEnum: EEnum;
  protected literal: string;
  protected value: number;

  constructor(loader: Loader, parent: any, obj: any, ref: string) {
    super(loader, parent, obj, ref);
    this.eEnum = parent;
    this.literal = obj.name;
    this.value = obj.value || 0;
  }

  getEEnum(): EEnum {
    return this.eEnum;
  }

  getLiteral(): string {
    return this.literal;
  }

  getValue(): number {
    return this.value;
  }

  setLiteral(value: string): void {
    this.literal = value;
  }

  setValue(value: number): void {
    this.value = value;
  }
}
