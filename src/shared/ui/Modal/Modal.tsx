import { classNames } from 'shared/lib/classNames/classNames';
import React, {
  ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import Portal from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string,
  children?: ReactNode,
  isOpen?:boolean,
  onClose?: () => void,
}

const ANIMATION_DELAY = 300;

const Modal = ({
  className, children, isOpen, onClose,
}:ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const { theme } = useTheme();

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);
  // useCallback для того, чтобы сохранялись ссылки между открытиями/закрытиями, а не создавались новые
  // мемоизация значения функции
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);
  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => { // для очистки при удалении элемента
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
    [cls[theme]]: true,
  };

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam consequuntur iure, modi nobis officiis qui quod quos suscipit voluptates. Impedit porro reiciendis repellendus voluptatem. Architecto autem magni quasi voluptatibus?
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
