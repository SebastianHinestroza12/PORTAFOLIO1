/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from "@iconify/react";
import { Flex, Box, Divider } from '@chakra-ui/react'

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const isSelected = localStorage.getItem('selectedLanguage');

  useEffect(() => {
    if (!isSelected) {
      localStorage.setItem('selectedLanguage', 'en');
    }
  }, [isSelected]);

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('selectedLanguage', language);
  };

  return (
    <Flex flexDirection={{ base: 'row', md: 'column' }} position={{ base: 'static', md: 'fixed' }} top={20} right={1} p={3} zIndex={1}>
      <Box marginRight={{ base: 7, md: 0 }}>
        <Icon className="my-3 cursor-pointer hover:scale-110" onClick={() => handleChangeLanguage('es')} icon="circle-flags:es-variant" width={30} />
        <Divider borderWidth="thin" borderColor={isSelected === 'es' ? '#FFA500' : '#919294'} />
      </Box>
      <Box>
        <Icon className="my-3 cursor-pointer hover:scale-110" onClick={() => handleChangeLanguage('en')} icon="circle-flags:us-um" width={30} />
        <Divider borderWidth="thin" borderColor={isSelected === 'en' ? '#FFA500' : '#919294'} />
      </Box>
    </Flex>
  );
};
