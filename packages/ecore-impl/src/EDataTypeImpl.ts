import { EDataType } from '@ecore-ts/ecore-api';
import { EClassifierImpl } from './EClassifierImpl';
import { Loader } from './loader';

export class EDataTypeImpl extends EClassifierImpl implements EDataType {
  protected serializable: boolean;

  constructor(loader: Loader, parent: any, obj: any) {
    super(loader, parent, obj);
    this.serializable = false; // TODO check later...
  }
  isSerializable(): boolean {
    return this.serializable;
  }

  setSerializable(value: boolean): void {
    this.serializable = value;
  }
}
