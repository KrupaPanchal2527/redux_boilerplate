import React from 'react';
import './App.css';

// components
import DemoComponent from './Components/demoComponent';

// import our store
import { store, persistedStore } from './Store'

// import Provider which will help us provide our state to each and every component
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <div className="App">
          <h1>We're working on it <span role="img" aria-label="construction">👷🏼‍♂️</span> </h1>
          <DemoComponent />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
