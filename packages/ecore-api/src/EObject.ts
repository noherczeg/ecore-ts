import { EClass } from './EClass';
import { EStructuralFeature } from './EStructuralFeature';
import { EReference } from './EReference';
import { EOperation } from './EOperation';

export interface EObject {
  eClass(): EClass;
  eIsProxy(): boolean;
  eResource(): any; // EResource ???
  eContainer(): EObject;
  eContainingFeature(): EStructuralFeature;
  eContainmentFeature(): EReference;
  eAllContents(): EObject[];
  eContents(): EObject[];
  eCrossReferences(): EObject[];
  eGet(feature: EStructuralFeature): any;
  eGet(feature: EStructuralFeature, resolve: boolean): any;
  eInvoke(operation: EOperation, args: any[]): any;
  eSet(feature: EStructuralFeature, newValue: any): void;
  eIsSet(feature: EStructuralFeature): boolean;
  eUnset(feature: EStructuralFeature): void;
}
