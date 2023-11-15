// ? Декларация для того, чтобы ts понимал что делать с css файлами. Прописываем типизацию
declare module "*.scss" {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}