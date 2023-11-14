import webpack from "webpack";

export const buildLoaders = ():webpack.RuleSetRule[] => {
  const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    }

  // ? Если не используем в проекте ts - для реакта нужно дополнительно подключить babel-loader
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    typeScriptLoader,
    cssLoader,
  ]
}