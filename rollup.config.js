import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

let targets = [
  { dest: 'dist/yuki-audio.js', format: 'umd' },
  { dest: 'dist/yuki-audio.common.js', format: 'cjs' },
  { dest: 'dist/yuki-audio.es5.js', format: 'es' }
]

export default {
  entry: 'src/index.js',
  plugins: [buble(), nodeResolve(), commonjs()],
  moduleName: 'yuki-audio',
  targets: targets
}
