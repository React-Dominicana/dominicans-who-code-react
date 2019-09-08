import React, {memo} from 'react';
import DominicansWhoCodesList from './components/DominicansWhoCodesList'

import './App.css'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const App = memo(() => {
  return (
    <div className="App">
      <Header />
      <DominicansWhoCodesList />
      <Footer />
    </div>
  );
});

export default App
