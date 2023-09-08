import { EStructuralFeature } from './EStructuralFeature';
import { EAttribute } from './EAttribute';
import { EClass } from './EClass';

export interface EReference extends EStructuralFeature {
  containment: boolean;
  container: boolean;
  resolveProxies: boolean;
  eOpposite?: EReference;
  getEKeys(): EAttribute[];
  getEOpposite(): EReference;
  getEReferenceType(): EClass;
  isContainer(): boolean;
  isContainment(): boolean;
  isResolveProxies(): boolean;
  setContainment(value: boolean): void;
  setEOpposite(value: EReference): void;
  setResolveProxies(value: boolean): void;
}
