import Memoryfs from 'memory-fs'
import path from 'path'
import VueLoaderPlugin from 'vue-loader/lib/plugin'
import webpack from 'webpack'

export default fixture => {
  const compiler = webpack({
    context: __dirname,
    entry: `./${fixture}`,
    output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: [{ loader: 'vue-loader' }]
        },
        {
          test: /\.vue$/,
          enforce: 'post',
          loader: path.resolve(__dirname, '../src/index.js')
        },
        {
          test: /\.vue.js$/,
          enforce: 'post',
          loader: path.resolve(__dirname, '../src/index.js')
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  })

  compiler.outputFileSystem = new Memoryfs()

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err)
      }

      if (stats.hasErrors()) {
        return reject(new Error(stats.toJson().errors))
      }

      resolve(stats)
    })
  })
}
