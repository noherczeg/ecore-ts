import { ETypedElement } from './ETypedElement';
import { EParameter } from './EParameter';
import { EClassifier } from './EClassifier';
import { EClass } from './EClass';
import { ETypeParameter } from './ETypeParameter';
import { EGenericType } from './EGenericType';

export interface EOperation extends ETypedElement {
  eParameters: EParameter[];
  eExceptions: EClassifier[];
  eContainingClass: EClass;
  eTypeParameters: ETypeParameter[];
  eGenericExceptions: EGenericType[];
  getEContainingClass(): EClass;
  getEExceptions(): EClassifier[];
  getEGenericExceptions(): EGenericType[];
  getEParameters(): EParameter[];
  getETypeParameters(): ETypeParameter[];
  getOperationID(): number;
  isOverrideOf(someOperation: EOperation): boolean;
}
