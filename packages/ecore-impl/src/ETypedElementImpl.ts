import { ENamedElementImpl } from './ENamedElementImpl';
import { EClassifier, EGenericType, ETypedElement } from '@ecore-ts/ecore-api';
import { Loader } from './Loader';

export class ETypedElementImpl extends ENamedElementImpl implements ETypedElement {
  protected eGenericType?: EGenericType;
  protected eType?: EClassifier;
  protected lowerBound: number = 0;
  protected upperBound: number = 1;
  protected many: boolean = false;
  protected ordered: boolean = false;
  protected required: boolean = false;
  protected unique: boolean = false;

  constructor(loader: Loader, parent: any, obj: any, ref: string) {
    super(loader, parent, obj, ref);
    if (obj.lowerBound !== undefined) {
      this.lowerBound = obj.lowerBound;
    }
    if (obj.upperBound !== undefined) {
      this.upperBound = obj.upperBound;
    }
    if (obj.many !== undefined) {
      this.many = obj.many;
    }
    if (obj.ordered !== undefined) {
      this.ordered = obj.ordered;
    }
    if (obj.required !== undefined) {
      this.required = obj.required;
    }
    if (obj.unique !== undefined) {
      this.unique = obj.unique;
    }
  }

  getEGenericType(): EGenericType | undefined {
    return this.eGenericType;
  }

  getEType(): EClassifier | undefined {
    return this.eType;
  }

  getLowerBound(): number {
    return this.lowerBound;
  }

  getUpperBound(): number {
    return this.upperBound;
  }

  isMany(): boolean {
    return this.many;
  }

  isOrdered(): boolean {
    return this.ordered;
  }

  isRequired(): boolean {
    return this.required;
  }

  isUnique(): boolean {
    return this.unique;
  }

  setEGenericType(value: EGenericType): void {
    this.eGenericType = value;
  }

  setEType(value: EClassifier): void {
    this.eType = value;
  }

  setLowerBound(value: number): void {
    this.lowerBound = value;
  }

  setOrdered(value: boolean): void {
    this.ordered = value;
  }

  setUnique(value: boolean): void {
    this.unique = value;
  }

  setUpperBound(value: number): void {
    this.upperBound = value;
  }
}
