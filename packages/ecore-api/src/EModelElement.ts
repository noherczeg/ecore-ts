import { EObject } from './EObject';
import { EAnnotation } from './EAnnotation';

export interface EModelElement extends EObject {
  getEAnnotation(source: string): EAnnotation | undefined;
  getEAnnotations(): EAnnotation[];
}
