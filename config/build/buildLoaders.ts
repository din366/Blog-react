import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export const buildLoaders = (options: BuildOptions):webpack.RuleSetRule[] => {
  const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        // ? если dev - используем стандартный style-loader, иначе minicss
        options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // ? вместо 'style-loader' для компиляции css в отдельные от js файлы
        // Translates CSS into CommonJS
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: (resPath: string) => Boolean(resPath.includes('.module.')), // ? обрабатывать файлы только с расширением 'module.'. Чтобы глобальные стили не меняли название
              localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]' // ? если dev сборка - оставлять читаемые классы, иначе преобразоывавать в 8-значный хеш
            },
          }
        },
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