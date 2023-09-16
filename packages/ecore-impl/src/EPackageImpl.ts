import { EClassifier, EFactory, EPackage } from '@ecore-ts/ecore-api';
import { ENamedElementImpl } from './ENamedElementImpl';
import { Loader } from './loader';

export class EPackageImpl extends ENamedElementImpl implements EPackage {
  public static readonly E_CLASS = 'http://www.eclipse.org/emf/2002/Ecore#//EPackage';

  private readonly eClassifiers: EClassifier[] = [];
  private readonly eSubPackages: EPackage[] = [];
  private readonly eSuperPackage?: EPackage;
  private nsPrefix: string;
  private nsURI: string;

  constructor(loader: Loader, parent: any, obj: any) {
    super(loader, parent, obj);
    this.nsURI = obj.nsURI;
    this.nsPrefix = obj.nsPrefix;

    if (parent && EPackageImpl.isObjectEPackage(parent)) {
      this.eSuperPackage = parent;
    }

    if (Array.isArray(obj.eClassifiers)) {
      loader.processClassifiers(obj.eClassifiers, this);
    }
  }

  public static isObjectEPackage(obj: any): boolean {
    return obj?.eClass && obj.eClass === EPackageImpl.E_CLASS;
  }

  getEClassifier(name: string): EClassifier | undefined {
    return this.eClassifiers.find((c: EClassifier) => c.getName() === name);
  }

  getEClassifiers(): EClassifier[] {
    return [...this.eClassifiers];
  }

  getEFactoryInstance(): EFactory | undefined {
    return undefined;
  }

  getESubpackages(): EPackage[] {
    return [...this.eSubPackages];
  }

  getESuperPackage(): EPackage | undefined {
    return this.eSuperPackage;
  }

  getNsPrefix(): string {
    return this.nsPrefix;
  }

  getNsURI(): string {
    return this.nsURI;
  }

  setEFactoryInstance(value: EFactory): void {}

  setNsPrefix(value: string): void {
    this.nsPrefix = value;
  }

  setNsURI(value: string): void {
    this.nsURI = value;
  }
}
