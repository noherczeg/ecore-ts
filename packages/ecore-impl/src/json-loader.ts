import { EObject, EPackage } from '@ecore-ts/ecore-api';
import { EPackageImpl } from './EPackageImpl';
import { Loader } from './loader';

export class JsonLoader implements Loader {
  private eObjects: EObject[] = [];
  private ePackages: EPackage[] = [];

  constructor(model: string) {
    const parsed = JSON.parse(model);
    const safe = Array.isArray(parsed) ? parsed : [parsed];
    this.processModel(safe);
  }

  processModel(obj: any, parent?: any): void {
    try {
      const parsed = typeof obj === 'string' ? JSON.parse(obj) : obj;
      const entries = Array.isArray(parsed) ? parsed : [parsed];

      for (const entry of entries) {
        if (EPackageImpl.isObjectEPackage(entry)) {
          const ePackage = new EPackageImpl(this, parent, entry);
          this.eObjects.push(ePackage);
          this.ePackages.push(ePackage);

          if (Array.isArray(entry.eSubpackages)) {
            this.processModel(entry.eSubpackages, ePackage);
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  getEObjects(): EObject[] {
    return this.eObjects;
  }

  getEPackages(): EPackage[] {
    return this.ePackages;
  }
}
