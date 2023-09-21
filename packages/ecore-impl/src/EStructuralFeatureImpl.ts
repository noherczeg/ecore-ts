import { EStructuralFeature } from '@ecore-ts/ecore-api';
import { ETypedElementImpl } from './ETypedElementImpl';
import { Loader } from './Loader';

export class EStructuralFeatureImpl extends ETypedElementImpl implements EStructuralFeature {
  constructor(loader: Loader, parent: any, obj: any, ref: string) {
    super(loader, parent, obj, ref);
  }
}
