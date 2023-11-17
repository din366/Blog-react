import {BuildOptions} from "./types/config";
import type { Configuration as DevServerConfiguration} from 'webpack-dev-server';

export const buildDevServer = (options: BuildOptions): DevServerConfiguration  => {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true, // ? Чтобы не появлялась ошибка при прямом заходе на дочернюю страницу, т.е.
    // ? site.com/about, иначе будет работать только при переходах с главной страницы
  }
}