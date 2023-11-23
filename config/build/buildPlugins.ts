import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = ({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] => {

  return [
    new HtmlWebpackPlugin({
    template: paths.html
    }),

    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ // ? для компиляции css свойств в отдельные css файлы
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),

    // ? Для прокидывания глобальных переменных по проекту (например, для i18n переключение debug режима по переменной isDev)
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev), // ? также объявляем в декларации переменную src-app-types-global.d.ts
    })
  ]
}