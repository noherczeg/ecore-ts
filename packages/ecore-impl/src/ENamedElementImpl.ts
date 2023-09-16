import { ENamedElement } from '@ecore-ts/ecore-api';
import { EModelElementImpl } from './EModelElementImpl';
import { Loader } from './loader';

export class ENamedElementImpl extends EModelElementImpl implements ENamedElement {
  name: string;

  constructor(loader: Loader, name: string) {
    super(loader);
    this.name = name;
  }

  getName(): string {
    return '';
  }

  setName(value: string): void {}
}
