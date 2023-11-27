import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => ({
  port: options.port,
  open: true,
  historyApiFallback: true,
  // ? Чтобы не появлялась ошибка при прямом заходе на дочернюю страницу, т.е.
  // ? site.com/about, иначе будет работать только при переходах с главной страницы
  hot: true, // ? горячая перезагрузка при изменении файлов проекта
});
