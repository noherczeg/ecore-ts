import { ENamedElement } from './ENamedElement';
import { EFactory } from './EFactory';
import { EClassifier } from './EClassifier';

export interface EPackage extends ENamedElement {
  getEClassifier(name: string): EClassifier | undefined;
  getEClassifiers(): EClassifier[];
  getEFactoryInstance(): EFactory | undefined;
  getESubpackages(): EPackage[];
  getESuperPackage(): EPackage | undefined;
  getNsPrefix(): string;
  getNsURI(): string;
  setEFactoryInstance(value: EFactory): void;
  setNsPrefix(value: string): void;
  setNsURI(value: string): void;
}
