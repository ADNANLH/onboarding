import React from 'react';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import './App.css'; // Optional: Your custom styles
import Multistep from './components/Multistep';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Multistep />
    </MantineProvider>
  );
}

export default App;
