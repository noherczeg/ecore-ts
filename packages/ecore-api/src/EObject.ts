import { EStructuralFeature } from './EStructuralFeature';
import { EReference } from './EReference';

export interface EObject {
  // eClass(): EClass;
  // eIsProxy(): boolean;
  // eResource(): any; // EResource ???
  eContainer(): EObject | undefined;
  eContainingFeature(): EStructuralFeature | undefined;
  eContainmentFeature(): EReference | undefined;
  eAllContents(): EObject[];
  eContents(): EObject[];
  eCrossReferences(): EObject[];
  // eGet(feature: EStructuralFeature): any;
  // eGet(feature: EStructuralFeature, resolve: boolean): any;
  // eInvoke(operation: EOperation, args: any[]): any;
  // eSet(feature: EStructuralFeature, newValue: any): void;
  // eIsSet(feature: EStructuralFeature): boolean;
  // eUnset(feature: EStructuralFeature): void;
}
