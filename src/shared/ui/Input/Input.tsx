import { classNames } from 'shared/lib/classNames/classNames';
import React, {
  InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

// ? забирает из типа все пропсы, исключая value и onChange
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
  className?: string,
  value?: string,
  onChange?: (value:string) => void,
  autofocus?: boolean,
}

const Input = memo((props:InputProps) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    autofocus,
    type = 'text',
    ...otherProps
  } = props;
  // ? реф для того, чтобы при открытии модалки автоматически ставился фокус на первый инпут (каретка будет стоять уже при помощи autofocus
  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value); // ? опционально, так как если в Input не будет передан onChange - функция вызвана не будет
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          {...otherProps}
        />
        {isFocused && <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }} />}

      </div>

    </div>
  );
});

export default Input;
