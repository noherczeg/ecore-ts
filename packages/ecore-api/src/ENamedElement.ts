import { EModelElement } from './EModelElement';

export interface ENamedElement extends EModelElement {
  getName(): string;
  setName(value: string): void;
}
