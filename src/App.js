import React, {memo} from 'react';
import DominicansWhoCodesList from './components/DominicansWhoCodesList'

import './App.css'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const App = memo(() => {
  return (
    <div className="App">
      <Header />
      <h1>{process.env.REACT_APP_PROJECT_NAME}</h1>
      <p>Dominican Developers
        <span role="img" aria-label="">
          &nbsp;🇩🇴
        </span>
        who like to code and contribute to Open Source
        <span role="img" aria-label="">
          &nbsp;❤️
        </span>
      </p>
      <DominicansWhoCodesList />
      <Footer />
    </div>
  );
});

export default App
