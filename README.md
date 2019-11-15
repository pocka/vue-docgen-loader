# vue-docgen-loader

[![Current status of Test and Lint workflow](https://github.com/pocka/vue-docgen-loader/workflows/Test%20and%20Lint/badge.svg)](https://github.com/pocka/vue-docgen-loader/actions)
[![Current status of Publish package workflow](https://github.com/pocka/vue-docgen-loader/workflows/Publish%20package/badge.svg)](https://github.com/pocka/vue-docgen-loader/actions)

[![npm](https://img.shields.io/npm/v/vue-docgen-loader)](https://www.npmjs.com/package/vue-docgen-loader)
[![npm](https://img.shields.io/npm/dm/vue-docgen-loader)](https://www.npmjs.com/package/vue-docgen-loader)

This package allows parsing Vue component file with [vue-docgen-api](https://github.com/vue-styleguidist/vue-styleguidist/tree/dev/packages/vue-docgen-api) then injecting the result into the output file.

## Getting Started

First, install the loader and vue-docgen-api.

```sh
$ yarn add -D vue-docgen-loader vue-docgen-api
# or npm
# $ npm i -D vue-docgen-loader vue-docgen-api
```

Then add the loader to your webpack config file.
**Please make sure to run the loader at the last of the loader chain**.

```js
import MyComponent from './my-component.vue'

Vue.extend({
  // You can use the components as usual
  components: { MyComponent }
})
```

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        // You also can put this loader above, but I recommend to use
        // a separeted rule with enforce: 'post' for maintainability
        // and simplicity. For example, you can enable the loader only
        // for development build.
        test: /\.vue$/,
        use: 'vue-docgen-loader',
        enforce: 'post'
      },
      {
        // This rule is needed only when you want to apply the loader
        // for non-SFC components. Please make sure to use the loader
        // only for Vue components: in this sample, only files imported
        // with ?vue query will match.
        test: /\.js$/,
        resourceQuery: /vue/,
        use: 'vue-docgen-loader',
        enforce: 'post'
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
}
```

## Options

You can pass options for vue-docgen-api through `docgenOptions`.

```js
{
  test: /\.vue$/,
    loader: 'vue-docgen-loader',
    options: {
      docgenOptions: {
        // options for vue-docgen-api...
      }
    },
    enforce: 'post'
}
```

## Contributing

Please read our contributing guidelines.

[CONTRIBUTING](./CONTRIBUTING.md)
