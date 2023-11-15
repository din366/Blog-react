import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = ({paths}: BuildOptions): webpack.WebpackPluginInstance[] => {

  return [
    new HtmlWebpackPlugin({
    template: paths.html
  }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ // ? для компиляции css свойств в отдельные css файлы
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    })
    ]
}