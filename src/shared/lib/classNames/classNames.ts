// ? custom classNames func

type Mods = Record<string, boolean | string>

export const classNames = (cls: string, mods: Mods = {}, additional: string[] = []):string => [
  cls,
  ...additional.filter(Boolean), // ? фильтрация, так как могут прилетать undefined
  ...Object.entries(mods)
    .filter(([className, value]) => Boolean(value))
    .map(([className, value]) => className),
]
  .join(' ');
