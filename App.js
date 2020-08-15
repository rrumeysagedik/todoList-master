import React from 'react';
import {Provider} from 'react-redux';

import {createStore, applyMiddleware} from 'redux';
import configure from './src/Redux/configure';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src/Navigation';

function App() {
  const store = createStore(configure, {}, applyMiddleware());
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Provider>

    
  );

}

export default App;
