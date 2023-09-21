import { EObject } from '@ecore-ts/ecore-api';

export interface LoaderExtras {
  get$raw(): any;
  get$Ref(): string;
  get$Parent(): EObject;
}
