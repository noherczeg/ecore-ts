import { EModelElement } from './EModelElement';

export interface ENamedElement extends EModelElement {
  name: string;
  getName(): string;
  setName(value: string): void;
}
