import { EAnnotation, EModelElement } from '@ecore-ts/ecore-api';
import { EObjectImpl } from './EObjectImpl';
import { Loader } from './Loader';

export class EModelElementImpl extends EObjectImpl implements EModelElement {
  protected eAnnotations: EAnnotation[] = [];

  constructor(loader: Loader, parent: any, obj: any, ref: string) {
    super(loader, parent, obj, ref);
  }

  getEAnnotation(source: string): EAnnotation | undefined {
    return undefined;
  }

  getEAnnotations(): EAnnotation[] {
    return this.eAnnotations;
  }
}
