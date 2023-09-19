import { EClassifier, EPackage, ETypeParameter } from '@ecore-ts/ecore-api';
import { ENamedElementImpl } from './ENamedElementImpl';
import { Loader } from './Loader';

export class EClassifierImpl extends ENamedElementImpl implements EClassifier {
  protected defaultValue = null;
  protected ePackage: EPackage;
  protected eTypeParameters: ETypeParameter[] = [];
  protected instanceClass: any;
  protected instanceClassName: string;

  constructor(loader: Loader, parent: any, obj: any, ref: string) {
    super(loader, parent, obj, ref);
    this.ePackage = parent as EPackage;
    this.instanceClassName = obj.name;
  }

  getClassifierID(): number {
    return 0;
  }

  getDefaultValue(): any {
    return this.defaultValue;
  }

  getEPackage(): EPackage {
    return this.ePackage;
  }

  getETypeParameters(): ETypeParameter[] {
    return this.eTypeParameters;
  }

  getInstanceClass(): any {
    return this.instanceClass;
  }

  getInstanceClassName(): string {
    return this.instanceClassName;
  }

  getInstanceTypeName(): string {
    return '';
  }

  isInstance(): boolean {
    return false;
  }

  isInstanceObject(object: object): boolean {
    return false;
  }

  setInstanceClass(value: any): void {}

  setInstanceClassName(value: string): void {}

  setInstanceTypeName(value: string): void {}
}
