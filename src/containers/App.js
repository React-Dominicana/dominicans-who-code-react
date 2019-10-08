// Helpers
import React, { memo } from 'react'
import { DominicansWhoCodesList } from './DominicansWhoCodesList'

import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { PageInfo } from '../components/layout/PageInfo'

export const App = memo(() => {
  return (
    <div className="App">
      <Header />
      <PageInfo />
      <DominicansWhoCodesList />
      <Footer />
    </div>
  );
});
