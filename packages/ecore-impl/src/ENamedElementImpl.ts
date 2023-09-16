import { ENamedElement } from '@ecore-ts/ecore-api';
import { EModelElementImpl } from './EModelElementImpl';
import { Loader } from './loader';

export class ENamedElementImpl extends EModelElementImpl implements ENamedElement {
  protected name: string;

  constructor(loader: Loader, parent: any, obj: any) {
    super(loader);
    this.name = obj.name;
  }

  getName(): string {
    return this.name;
  }

  setName(value: string): void {
    this.name = value;
  }
}
