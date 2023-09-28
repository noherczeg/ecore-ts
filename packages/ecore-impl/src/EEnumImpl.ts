import { EEnum, EEnumLiteral } from '@ecore-ts/ecore-api';
import { EDataTypeImpl } from './EDataTypeImpl';
import { Loader } from './Loader';

export class EEnumImpl extends EDataTypeImpl implements EEnum {
  protected eLiterals: EEnumLiteral[] = [];

  constructor(loader: Loader, parent: any, obj: any, ref: string) {
    super(loader, parent, obj, ref);

    if (Array.isArray(obj.eLiterals)) {
      this.eLiterals = loader.processEEnumLiterals(obj.eLiterals, this);
    }
  }

  public static isObjectEEnum(obj: any): boolean {
    return obj?.eClass && obj.eClass === 'http://www.eclipse.org/emf/2002/Ecore#//EEnum';
  }

  getEEnumLiteral(name: string): EEnumLiteral | undefined;
  getEEnumLiteral(value: number): EEnumLiteral | undefined;
  getEEnumLiteral(name: string | number): EEnumLiteral | undefined {
    if (typeof name === 'string') {
      return this.eLiterals.find((l) => l.getLiteral() === name);
    } else {
      return this.eLiterals.find((l) => l.getValue() === name);
    }
  }

  getEEnumLiteralByLiteral(literal: string): EEnumLiteral | undefined {
    return this.eLiterals.find((l) => l.getLiteral() === literal);
  }

  getELiterals(): EEnumLiteral[] {
    return this.eLiterals;
  }
}
