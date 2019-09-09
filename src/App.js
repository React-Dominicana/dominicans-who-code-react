import React, {memo} from 'react';
import DominicansWhoCodesList from './components/DominicansWhoCodesList'

import './App.scss'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const App = memo(() => {
  return (
    <div className="App">
      <Header />
        <h1>{process.env.REACT_APP_PROJECT_NAME}</h1>
        <p>Dominican Developers 🇩🇴 who like to code and contribute to Open Source ❤️ </p>
      <DominicansWhoCodesList />
      <Footer />
    </div>
  );
});

export default App
