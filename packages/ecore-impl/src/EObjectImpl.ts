import { EObject, EReference, EStructuralFeature } from '@ecore-ts/ecore-api';
import { Loader } from './Loader';
import { LoaderExtras } from './LoaderExtras';

export class EObjectImpl implements EObject, LoaderExtras {
  protected $loader: Loader;
  protected $raw: any;
  protected $parent: any;
  protected $ref: string;

  constructor(loader: Loader, parent: any, rawObj: any, ref: string) {
    this.$loader = loader;
    this.$parent = parent;
    this.$raw = rawObj;
    this.$ref = ref;
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

  get$raw(): any {
    return this.$raw;
  }

  get$Ref(): string {
    return this.$ref;
  }

  get$Parent(): EObject {
    return this.$parent;
  }
}
