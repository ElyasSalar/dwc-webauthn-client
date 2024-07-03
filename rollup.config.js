import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'esm',
        entryFileNames: 'bundle/[name].js',
        preferConst: true,
      },
      {
        dir: 'dist',
        format: 'esm',
        entryFileNames: 'bundle/[name].min.js',
        plugins: [terser()],
      },
    ],
    plugins: [
      typescript({ tsconfig: './tsconfig.json' }),
      nodeResolve(),
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'umd',
      name: 'dwcWebAuthn',
      entryFileNames: 'bundle/[name].es5.umd.min.js',
      plugins: [terser()],
    },
    plugins: [
      typescript({ tsconfig: './tsconfig.es5.json' }),
      nodeResolve(),
    ],
  },
];
