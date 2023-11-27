import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ui/ThemeSwitcher';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string,
}

const Sidebar = ({ className }:SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !collapsed);
  };

  return (
    <div className={classNames(
      cls.Sidebar,
      { [cls.collapsed]: collapsed },
      [className],
    )}
    >
      <button type="button" onClick={onToggle}>{t('Изменить')}</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};

export default Sidebar;
