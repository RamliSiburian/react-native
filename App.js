import * as NB from 'native-base';
import React from 'react';
import Container from './Container';

export default function App() {
  return (
    <NB.NativeBaseProvider>
      <Container />
    </NB.NativeBaseProvider >
  )
}



