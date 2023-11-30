import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoaders(isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      // ? если dev - используем стандартный style-loader, иначе minicss
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // ? вместо 'style-loader' для компиляции css в отдельные от js файлы
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            // ? обрабатывать файлы только с расширением 'module.'. Чтобы глобальные стили не меняли название
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            // ? если dev сборка - оставлять читаемые классы, иначе преобразоывавать в 8-значный хеш
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };
}
