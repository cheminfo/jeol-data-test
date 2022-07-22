export default {
  input: 'src/index.js',
  output: {
    format: 'cjs',
    file: 'lib/index.js',
  },
  external: ['url', 'path', 'filelist-utils']
};
