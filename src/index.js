const clone = require('clone')
const docgen = require('vue-docgen-api')
const loaderUtils = require('loader-utils')
const qs = require('querystring')

module.exports = function(content, map) {
  const queries = qs.parse(this.resourceQuery.slice(1))

  // When vue-loader takes an input file (foo.vue), it calls itself multiple times
  // with same file with different queries. If there is 'vue' query, the import is
  // the 'indirect' one.
  if ('vue' in queries) {
    this.callback(null, content, map)
    return
  }

  try {
    const options = clone(loaderUtils.getOptions(this)) || {}

    // We can't use docgen.parseSource because the loader runs *after* vue-loader.
    // Since what we get in `content` is the code transpiled by vue-loader, we need
    // to read file to get the source code.
    const info = docgen.parse(this.resourcePath, options.docgenOptions)

    // TODO: Use exported indentifier instead of fixed 'component'.
    const js =
      content +
      '\n' +
      `component.options.__docgenInfo = ${JSON.stringify(info)}\n`

    this.callback(null, js, map)
  } catch (e) {
    if (e instanceof Error) {
      e.message =
        '[vue-docgen-loader] failed to parse SFC with docgen-api: ' + e.message
    }
    this.emitWarning(e)
    this.callback(null, content, map)
  }
}
