## Ketcher webpack minimizer bug

### How to reproduce

- run `npm install && npm run build`
- budle (`./dist/bundle.js`) size is 35mb+ and bytecode `Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlci..` is doubled

### Expected

Add custom minimizer:
- uncomment block in `webpack.config.js` file
```
optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
```
- run `npm install && npm run build`
- budle (`./dist/bundle.js`) size is **17mb+** and bytecode `Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlci..` is **NOT** doubled
