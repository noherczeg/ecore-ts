import clear from 'rollup-plugin-clear';
import esbuild from 'rollup-plugin-esbuild';
import {dts} from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        sourcemap: true,
        file: 'dist/ecore-impl.mjs',
        format: 'module',
      },
    ],
    plugins: [
      clear({
        targets: ['dist'],
      }),
      esbuild({
        include: /\.[jt]sx?$/,
        exclude: /node_modules/,
        sourceMap: true,
        tsconfig: 'tsconfig.json',
      }),
    ],
  },
  {
    input: 'src/index.ts',
    output: [
      { file: 'dist/ecore-impl.d.ts', format: 'es' },
    ],
    plugins: [dts()],
  },
];
