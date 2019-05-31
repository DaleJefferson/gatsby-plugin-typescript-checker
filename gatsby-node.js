const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

exports.onCreateWebpackConfig = ({ stage, actions }, options) => {
  if (stage != 'develop') {
    return
  }

  actions.setWebpackConfig({
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        async: false,
        silent: true,
        formatter: 'codeframe',
        ...options,
      }),
    ],
  })
}
