import {classNames} from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss';
import {useTranslation} from "react-i18next";
import React from "react";
import Button, {ThemeButton} from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string,
}

const LangSwitcher = ({className}:LangSwitcherProps) => {
  const {t, i18n} = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }

  return (
    <div>
      <Button
        className={classNames(cls.LangSwitcher,{},[className])}
        theme={ThemeButton.CLEAR}
        onClick={toggle}
      >
        {t('Язык')}
      </Button>
    </div>
  );
};

export default LangSwitcher;