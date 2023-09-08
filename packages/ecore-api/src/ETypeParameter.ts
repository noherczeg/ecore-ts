import { EGenericType } from './EGenericType';

export interface ETypeParameter {
  eGenericTypes: EGenericType[];
  eBounds: EGenericType[];
  getEBounds(): EGenericType[];
}
