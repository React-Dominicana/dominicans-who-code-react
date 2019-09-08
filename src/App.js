import React, {memo} from 'react';
import DominicansWhoCodesList from './components/DominicansWhoCodesList'

import './App.css'
import Header from './components/layout/Header';

const App = memo(() => {
  return (
    <div className="App">
      <Header />
      <DominicansWhoCodesList />
    </div>
  );
});

export default App
