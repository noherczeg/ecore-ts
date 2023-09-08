import { EClassifier } from './EClassifier';
import { ETypeParameter } from './ETypeParameter';

export interface EGenericType {
  eUpperBound?: EGenericType;
  eLowerBound?: EGenericType;
  eTypeArguments: EGenericType[];
  eTypeParameter?: ETypeParameter;
  eRawType: EClassifier;
  eClassifier?: EClassifier;
  getEClassifier(): EClassifier;
  getELowerBound(): EGenericType;
  getERawType(): EClassifier;
  getETypeArguments(): EGenericType[];
  getETypeParameter(): ETypeParameter;
  getEUpperBound(): EGenericType;
  isInstance(object: any): boolean;
  setEClassifier(value: EClassifier): void;
  setELowerBound(value: EGenericType): void;
  setETypeParameter(value: ETypeParameter): void;
  setEUpperBound(value: EGenericType): void;
}
