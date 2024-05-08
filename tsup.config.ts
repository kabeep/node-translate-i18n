import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['bin/cli.ts', 'src/index.ts'],
    format: ['esm'],
    outDir: 'dist',
    target: ['es2020'],
    bundle: true,
    clean: true,
    minify: false,
    splitting: false,
    cjsInterop: true,
});
