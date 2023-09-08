import { EDataType } from './EDataType';
import { EEnumLiteral } from './EEnumLiteral';

export interface EEnum extends EDataType {
  eLiterals: EEnumLiteral[];
  getEEnumLiteral(name: string): EEnumLiteral;
  getEEnumLiteral(value: number): EEnumLiteral;
  getEEnumLiteralByLiteral(literal: string): EEnumLiteral;
  getELiterals(): EEnumLiteral[];
}
