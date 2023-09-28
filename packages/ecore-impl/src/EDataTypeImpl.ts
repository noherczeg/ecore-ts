import { EDataType } from '@ecore-ts/ecore-api';
import { EClassifierImpl } from './EClassifierImpl';
import { Loader } from './Loader';

export class EDataTypeImpl extends EClassifierImpl implements EDataType {
  protected serializable: boolean;

  constructor(loader: Loader, parent: any, obj: any, ref: string) {
    super(loader, parent, obj, ref);
    this.serializable = obj.serializable !== undefined ? obj.serializable : true; // https://download.eclipse.org/modeling/emf/emf/javadoc/2.6.0/org/eclipse/emf/ecore/EDataType.html
  }

  public static isObjectEDataType(obj: any): boolean {
    return obj?.eClass && obj.eClass === 'http://www.eclipse.org/emf/2002/Ecore#//EDataType';
  }

  isSerializable(): boolean {
    return this.serializable;
  }

  setSerializable(value: boolean): void {
    this.serializable = value;
  }
}
