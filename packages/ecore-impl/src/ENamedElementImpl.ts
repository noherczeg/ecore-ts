import { ENamedElement } from '@ecore-ts/ecore-api';
import { EModelElementImpl } from './EModelElementImpl';
import { Loader } from './Loader';

export class ENamedElementImpl extends EModelElementImpl implements ENamedElement {
  protected name: string;

  constructor(loader: Loader, parent: any, obj: any, ref: string) {
    super(loader, parent, obj, ref);
    this.name = obj.name;
  }

  getName(): string {
    return this.name;
  }

  setName(value: string): void {
    this.name = value;
  }
}
