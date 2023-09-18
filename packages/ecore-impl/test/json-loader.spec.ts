import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { expect, describe, it } from 'vitest'
import {JsonLoader} from '../src/json-loader';
import { Loader } from '../src/loader';

describe('json-loader', () => {
  const jsonString = readFileSync(resolve('test/model/ui.json')).toString();
  const loader: Loader = new JsonLoader(jsonString);
  const eObjects = loader.getEObjects();
  const ePackages = loader.getEPackages();
  const eClassifiers = loader.getEClassifiers();
  const eClasses = loader.getEClasses();
  const eEnums = loader.getEEnums();
  const eEnumLiterals = loader.getEEnumLiterals();

  it('eObjects', () => {
    expect(eObjects.length).toBe(218);
  });

  it('ePackages', () => {
    expect(ePackages.length).toBe(2);
  });

  it('eClassifiers', () => {
    expect(eClassifiers.length).toBe(114);
  });

  it('eClasses', () => {
    expect(eClasses.length).toBe(92);
  });

  it('eEnums', () => {
    expect(eEnums.length).toBe(22);
  });

  it('eEnumLiterals', () => {
    expect(eEnumLiterals.length).toBe(102);
  });
})
