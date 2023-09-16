import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { expect, test } from 'vitest'
import {JsonLoader} from "../src/json-loader";
import { Loader } from '../src/loader';

test('EPackage parsing', () => {
  const jsonString = readFileSync(resolve('test/model/ui.json')).toString();
  const loader: Loader = new JsonLoader(jsonString);
  const eObjects = loader.getEObjects();
  const ePackages = loader.getEPackages();
  const eClassifiers = loader.getEClassifiers();
  const eClasses = loader.getEClasses();
  const eEnums = loader.getEEnums();
  const eEnumLiterals = loader.getEEnumLiterals();

  expect(eObjects.length).toBe(218);
  expect(ePackages.length).toBe(2);
  expect(eClassifiers.length).toBe(114);
  expect(eClasses.length).toBe(92);
  expect(eEnums.length).toBe(22);
  expect(eEnumLiterals.length).toBe(102);
})
