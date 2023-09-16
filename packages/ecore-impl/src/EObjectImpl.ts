import { EObject, EReference, EStructuralFeature } from '@ecore-ts/ecore-api';
import { Loader } from './loader';

export class EObjectImpl implements EObject {
  protected loader: Loader;

  constructor(loader: Loader) {
    this.loader = loader;
  }

  eAllContents(): EObject[] {
    return [];
  }

  eContainer(): EObject | undefined {
    return undefined;
  }

  eContainingFeature(): EStructuralFeature | undefined {
    return undefined;
  }

  eContainmentFeature(): EReference | undefined {
    return undefined;
  }

  eContents(): EObject[] {
    return [];
  }

  eCrossReferences(): EObject[] {
    return [];
  }
}
