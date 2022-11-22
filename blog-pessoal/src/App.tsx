import React from 'react';
import './App.css';
import { Title } from './components/Title/Title';
import { Text } from './components/Text';

function App() {
  const nome = 'Herbert';
  return (
    <>
      <Title nome={nome} />
      <Text />
    </>
  );
}

export default App  ;