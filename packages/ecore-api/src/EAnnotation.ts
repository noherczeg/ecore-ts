import { EModelElement } from './EModelElement';
import { EObject } from './EObject';

export interface EAnnotation extends EModelElement {
  getSource(): string;
  getDetails(): Record<string, string>;
  getContents(): EObject[];
  getReferences(): EObject[];
  getEModelElement(): EModelElement;
  setEModelElement(value: EModelElement): void;
  setSource(value: string): void;
}
