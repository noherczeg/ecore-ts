import { EDataType } from '@ecore-ts/ecore-api';
import { EDataTypeImpl } from './EDataTypeImpl';
import { Loader } from './Loader';

export class AbstractLoader {
  protected refMap: Map<string, any> = new Map<string, any>();
  protected readonly primitiveECoreTypes = [
    'http://www.eclipse.org/emf/2002/Ecore#//Boolean',
    'http://www.eclipse.org/emf/2002/Ecore#//EBoolean',
    'http://www.eclipse.org/emf/2002/Ecore#//Byte',
    'http://www.eclipse.org/emf/2002/Ecore#//EByte',
    'http://www.eclipse.org/emf/2002/Ecore#//Char',
    'http://www.eclipse.org/emf/2002/Ecore#//EChar',
    'http://www.eclipse.org/emf/2002/Ecore#//Double',
    'http://www.eclipse.org/emf/2002/Ecore#//EDouble',
    'http://www.eclipse.org/emf/2002/Ecore#//Float',
    'http://www.eclipse.org/emf/2002/Ecore#//EFloat',
    'http://www.eclipse.org/emf/2002/Ecore#//Int',
    'http://www.eclipse.org/emf/2002/Ecore#//EInt',
    'http://www.eclipse.org/emf/2002/Ecore#//Long',
    'http://www.eclipse.org/emf/2002/Ecore#//ELong',
    'http://www.eclipse.org/emf/2002/Ecore#//Short',
    'http://www.eclipse.org/emf/2002/Ecore#//EShort',
    'http://www.eclipse.org/emf/2002/Ecore#//String',
    'http://www.eclipse.org/emf/2002/Ecore#//EString',
    'http://www.eclipse.org/emf/2002/Ecore#//Date',
    'http://www.eclipse.org/emf/2002/Ecore#//EDate',
    'http://www.eclipse.org/emf/2002/Ecore#//BigInteger',
    'http://www.eclipse.org/emf/2002/Ecore#//EBigInteger',
    'http://www.eclipse.org/emf/2002/Ecore#//BigDecimal',
    'http://www.eclipse.org/emf/2002/Ecore#//EBigDecimal',
    'http://www.eclipse.org/emf/2002/Ecore#//EEList',
  ];

  protected generateECorePrimitiveDataTypes(loader: Loader): EDataType[] {
    const res = this.primitiveECoreTypes.map(
      (t) =>
        new EDataTypeImpl(
          loader,
          undefined,
          {
            name: t.substring(t.lastIndexOf('//') + 2),
          },
          t,
        ),
    );

    for (const r of res) {
      this.refMap.set(r.get$Ref(), r);
    }

    return res;
  }
}
