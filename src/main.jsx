import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ChakraProvider, ColorModeScript, CSSReset } from '@chakra-ui/react';
import { I18nextProvider } from 'react-i18next';
import { theme } from './theme.js';
import i18n from './config/i18n.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider disableGlobalStyle>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <CSSReset />
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
