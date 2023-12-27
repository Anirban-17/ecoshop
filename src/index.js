import React from 'react';
import ReactDOM from 'react-dom/client';
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import App from './App';

const theme = extendTheme({
  colors: {
    brand: {
      1: '#658C4A',
      2: '#E7CEC0',
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
