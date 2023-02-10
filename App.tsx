import React from 'react';
import { StatusBar } from 'react-native';
import { Home } from './src/screens/Home';

function App() {
  return (
    <>
      <Home />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </>
  );
}

export default App;
