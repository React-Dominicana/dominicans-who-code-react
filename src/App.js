import React, {memo} from 'react';
import DominicansWhoCodesList from './components/DominicansWhoCodesList'

import './App.css'

const App = memo(() => {
  return (
    <div className="App">
      <DominicansWhoCodesList />
    </div>
  );
});

export default App
