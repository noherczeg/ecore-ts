import { EAttribute, EDataType } from '@ecore-ts/ecore-api';
import { EStructuralFeatureImpl } from './EStructuralFeatureImpl';
import { Loader } from './Loader';
import { EDataTypeImpl } from './EDataTypeImpl';

export class EAttributeImpl extends EStructuralFeatureImpl implements EAttribute {
  protected id: boolean;
  protected eAttributeType: EDataType;

  constructor(loader: Loader, parent: any, obj: any, ref: string) {
    super(loader, parent, obj, ref);
    this.id = obj.id !== undefined ? obj.id : false;
    this.eAttributeType =
      (loader.getEDataTypes() as EDataTypeImpl[]).find((d) => d.get$Ref() === obj?.eType?.$ref) ||
      (null as unknown as EDataType); // should never happen...
  }

  public static isObjectEAttribute(obj: any): boolean {
    return obj?.eClass && obj.eClass === 'http://www.eclipse.org/emf/2002/Ecore#//EAttribute';
  }

  getEAttributeType(): EDataType {
    return this.eAttributeType;
  }

  isID(): boolean {
    return this.id;
  }

  setID(value: boolean): void {
    this.id = value;
  }
}
