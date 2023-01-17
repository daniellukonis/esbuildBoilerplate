// esbuild.config.js
const res = require('esbuild')
.build({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  minify: true,
  // format: 'cjs',
  sourcemap: true,
  outfile: 'dist/output.js',
  // external: ['react', 'react-dom'], 
})
.catch(() => ProcessingInstruction.exit(1))