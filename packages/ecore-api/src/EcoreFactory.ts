import { EAnnotation } from './EAnnotation';
import { EAttribute } from './EAttribute';
import { EClass } from './EClass';
import { EDataType } from './EDataType';
import { EEnum } from './EEnum';
import { EEnumLiteral } from './EEnumLiteral';
import { EFactory } from './EFactory';
import { EGenericType } from './EGenericType';
import { EObject } from './EObject';
import { EOperation } from './EOperation';
import { EPackage } from './EPackage';
import { EParameter } from './EParameter';
import { EReference } from './EReference';
import { ETypeParameter } from './ETypeParameter';
import { EcorePackage } from './EcorePackage';

export interface EcoreFactory {
  createEAnnotation(): EAnnotation;
  createEAttribute(): EAttribute;
  createEClass(): EClass;
  createEDataType(): EDataType;
  createEEnum(): EEnum;
  createEEnumLiteral(): EEnumLiteral;
  createEFactory(): EFactory;
  createEGenericType(): EGenericType;
  createEObject(): EObject;
  createEOperation(): EOperation;
  createEPackage(): EPackage;
  createEParameter(): EParameter;
  createEReference(): EReference;
  createETypeParameter(): ETypeParameter;
  getEcorePackage(): EcorePackage;
}
