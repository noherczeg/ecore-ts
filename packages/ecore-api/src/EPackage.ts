import { ENamedElement } from './ENamedElement';
import { EFactory } from './EFactory';
import { EClassifier } from './EClassifier';

export interface EPackage extends ENamedElement {
  nsURI: string;
  nsPrefix: string;
  eSubPackages: EPackage[];
  eSuperPackage: EPackage;
  eFactoryInstance: EFactory;
  eClassifiers: EClassifier[];
  getEClassifier(name: string): EClassifier;
  getEClassifiers(): EClassifier[];
  getEFactoryInstance(): EFactory;
  getESubpackages(): EPackage[];
  getESuperPackage(): EPackage;
  getNsPrefix(): string;
  getNsURI(): string;
  setEFactoryInstance(value: EFactory): void;
  setNsPrefix(value: string): void;
  setNsURI(value: string): void;
}
