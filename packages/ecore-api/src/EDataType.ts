import { EClassifier } from './EClassifier';

export interface EDataType extends EClassifier {
  isSerializable(): boolean;
  setSerializable(value: boolean): void;
}
