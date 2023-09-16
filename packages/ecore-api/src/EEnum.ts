import { EDataType } from './EDataType';
import { EEnumLiteral } from './EEnumLiteral';

export interface EEnum extends EDataType {
  getEEnumLiteral(name: string): EEnumLiteral | undefined;
  getEEnumLiteral(value: number): EEnumLiteral | undefined;
  getEEnumLiteralByLiteral(literal: string): EEnumLiteral | undefined;
  getELiterals(): EEnumLiteral[];
}
