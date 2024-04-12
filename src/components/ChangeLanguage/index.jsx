/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select, Box } from '@chakra-ui/react';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <Box>
      <Select onChange={handleChangeLanguage} >
        <option value='es'>Español</option>
        <option value='en'>Inglés</option>
      </Select>
    </Box>
  );
};
