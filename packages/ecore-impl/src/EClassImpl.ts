import { EAttribute, EClass, EGenericType, EOperation, EReference, EStructuralFeature } from '@ecore-ts/ecore-api';
import { EClassifierImpl } from './EClassifierImpl';
import { Loader } from './loader';

export class EClassImpl extends EClassifierImpl implements EClass {
  public static readonly E_CLASS = 'http://www.eclipse.org/emf/2002/Ecore#//EClass';

  protected abstract: boolean;
  protected interface: boolean;
  protected eSuperTypes: EClass[] = [];
  protected eAttributes: EAttribute[] = [];

  constructor(loader: Loader, parent: any, obj: any) {
    super(loader, parent, obj);
    this.abstract = obj.abstract;
    this.interface = obj.interface;
  }

  public static isObjectEClass(obj: any): boolean {
    return obj?.eClass && obj.eClass === EClassImpl.E_CLASS;
  }

  getEAllAttributes(): EAttribute[] {
    return this.eAttributes;
  }

  getEAllContainments(): EReference[] {
    return [];
  }

  getEAllGenericSuperTypes(): EGenericType[] {
    return [];
  }

  getEAllOperations(): EOperation[] {
    return [];
  }

  getEAllReferences(): EReference[] {
    return [];
  }

  getEAllStructuredFeatures(): EStructuralFeature[] {
    return [];
  }

  getEAllSuperTypes(): EClass[] {
    return this.eSuperTypes;
  }

  getEAttributes(): EAttribute[] {
    return this.eAttributes;
  }

  getEGenericSuperTypes(): EGenericType[] {
    return [];
  }

  getEIDAttribute(): EAttribute | undefined {
    return undefined;
  }

  getEOperation(operationID: number): EOperation | undefined {
    return undefined;
  }

  getEOperations(): EOperation[] {
    return [];
  }

  getEReferences(): EReference[] {
    return [];
  }

  getEStructuralFeature(featureID: number): EStructuralFeature | undefined;
  getEStructuralFeature(featureName: string): EStructuralFeature | undefined;
  getEStructuralFeature(featureID: number | string): EStructuralFeature | undefined {
    return undefined;
  }

  getEStructuredFeature(featureID: number): EStructuralFeature | undefined;
  getEStructuredFeature(featureName: string): EStructuralFeature | undefined;
  getEStructuredFeature(featureID: number | string): EStructuralFeature | undefined {
    return undefined;
  }

  getEStructuredFeatures(): EStructuralFeature[] {
    return [];
  }

  getESuperTypes(): EClass[] {
    return this.eSuperTypes;
  }

  getFeatureCount(): number {
    return 0;
  }

  getFeatureID(feature: EStructuralFeature): number {
    return 0;
  }

  getFeatureType(feature: EStructuralFeature): EGenericType | undefined {
    return undefined;
  }

  getOperationCount(): number {
    return 0;
  }

  getOperationID(operation: EOperation): number {
    return 0;
  }

  getOverride(operation: EOperation): EOperation | undefined {
    return undefined;
  }

  isAbstract(): boolean {
    return this.abstract;
  }

  isInterface(): boolean {
    return this.interface;
  }

  isSuperTypeOf(someClass: EClass): boolean {
    return false;
  }

  setAbstract(value: boolean): void {}

  setInterface(value: boolean): void {}
}
