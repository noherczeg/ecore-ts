import { EAnnotation, EModelElement } from '@ecore-ts/ecore-api';
import { EObjectImpl } from './EObjectImpl';

export class EModelElementImpl extends EObjectImpl implements EModelElement {
  protected eAnnotations: EAnnotation[] = [];

  getEAnnotation(source: string): EAnnotation | undefined {
    return undefined;
  }

  getEAnnotations(): EAnnotation[] {
    return this.eAnnotations;
  }
}
