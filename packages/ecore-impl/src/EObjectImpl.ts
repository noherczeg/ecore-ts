import { EClass, EObject, EOperation, EReference, EStructuralFeature } from '@ecore-ts/ecore-api';
import { Loader } from './loader';

export class EObjectImpl implements EObject {
  protected loader: Loader;

  constructor(loader: Loader) {
    this.loader = loader;
  }

  eAllContents(): EObject[] {
    return [];
  }

  eClass(): EClass {
    return undefined;
  }

  eContainer(): EObject {
    return undefined;
  }

  eContainingFeature(): EStructuralFeature {
    return undefined;
  }

  eContainmentFeature(): EReference {
    return undefined;
  }

  eContents(): EObject[] {
    return [];
  }

  eCrossReferences(): EObject[] {
    return [];
  }

  eGet(feature: EStructuralFeature): any;
  eGet(feature: EStructuralFeature, resolve: boolean): any;
  eGet(feature: EStructuralFeature, resolve?: boolean): any {
  }

  eInvoke(operation: EOperation, args: any[]): any {
  }

  eIsProxy(): boolean {
    return false;
  }

  eIsSet(feature: EStructuralFeature): boolean {
    return false;
  }

  eResource(): any {
  }

  eSet(feature: EStructuralFeature, newValue: any): void {
  }

  eUnset(feature: EStructuralFeature): void {
  }

}
