import { EAnnotation, EModelElement } from '@ecore-ts/ecore-api';
import { EObjectImpl } from './EObjectImpl';

export class EModelElementImpl extends EObjectImpl implements EModelElement {
  getEAnnotation(source: string): EAnnotation {
    return undefined;
  }

  getEAnnotations(): EAnnotation[] {
    return [];
  }
}
