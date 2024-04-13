/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from "@iconify/react";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isSelected, setIsSelected] = useState('es');

  const handleChangeLanguage = (lenguage) => {
    i18n.changeLanguage(lenguage);
    setIsSelected(lenguage);
  };

  return (
    <div className={`fixed top-20 right-1 p-3 rounded-full z-index`}>
      <Icon className={`my-5 cursor-pointer ${isSelected == 'es' ? 'bg-[#33ff00]' : ''}`} onClick={() => handleChangeLanguage('es')} icon='circle-flags:es-variant' width={30} />
      <Icon className={`my-5 cursor-pointer  ${isSelected == 'en' ? 'bg-[#33ff00]' : ''}`} onClick={() => handleChangeLanguage('en')} icon='circle-flags:us-um' width={30} />
    </div>
  );
};
