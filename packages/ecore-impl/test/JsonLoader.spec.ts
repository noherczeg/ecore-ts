import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { expect, describe, it } from 'vitest'
import { Loader } from '../src/loader';
import { JsonLoader } from '../src/JsonLoader';
import {EAttributeImpl} from "../src/EAttributeImpl";
import {EClassImpl} from "../src/EClassImpl";

describe('json-loader', () => {
  const jsonString = readFileSync(resolve('test/model/ui.json')).toString();
  const loader: Loader = new JsonLoader(jsonString);
  const eObjects = loader.getEObjects();
  const ePackages = loader.getEPackages();
  const eClassifiers = loader.getEClassifiers();
  const eClasses = loader.getEClasses();
  const eEnums = loader.getEEnums();
  const eEnumLiterals = loader.getEEnumLiterals();
  const eAttributes = loader.getEAttributes();

  it('eObjects', () => {
    expect(eObjects.length).toBe(363);
  });

  it('ePackages', () => {
    expect(ePackages.length).toBe(2);
  });

  it('eClassifiers', () => {
    expect(eClassifiers.length).toBe(145);
  });

  describe('eClasses', () => {
    it('loading', () => {
      expect(eClasses.length).toBe(92);
    });

    it('getESuperTypes', () => {
      const table = eClasses.find(e => e.getName() === 'Table');
      const superTypes = table.getESuperTypes();
      const super0 = superTypes[0];
      const super1 = superTypes[1];
      expect(superTypes.length).toBe(2);
      expect(super0.getName()).toBe('VisualElement');
      expect(super1.getName()).toBe('ReferenceTypedVisualElement');
    });

    it('getEAllSuperTypes', () => {
      const table = eClasses.find(e => e.getName() === 'Table');
      const superTypes = table.getEAllSuperTypes();
      expect(superTypes.length).toBe(4);
      const super0 = superTypes[0];
      const super1 = superTypes[1];
      const super2 = superTypes[2];
      const super3 = superTypes[3];
      expect(super0.getName()).toBe('VisualElement');
      expect(super1.getName()).toBe('ReferenceTypedVisualElement');
      expect(super2.getName()).toBe('NamedElement');
      expect(super3.getName()).toBe('LabeledElement');
    });
  });

  it('eEnums', () => {
    expect(eEnums.length).toBe(22);
  });

  it('eEnumLiterals', () => {
    expect(eEnumLiterals.length).toBe(102);
  });

  it('eAttributes', () => {
    expect(eAttributes.length).toBe(114);

    const name = eAttributes.find(a => (a as EAttributeImpl).get$Ref() === '//name') as EAttributeImpl;

    expect(name.getName()).toBe('name');
    expect(name.getLowerBound()).toBe(1);
    expect(name.getUpperBound()).toBe(1);

    const parent: EClassImpl = name.get$Parent() as EClassImpl;
    expect(parent.getName()).toBe('NamedElement');
    expect(parent.get$Ref()).toBe('//NamedElement');
  });
})
