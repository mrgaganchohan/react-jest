import React, { Component } from 'react';

import Ticket from './Ticket';
import Footer from './Footer';

export default function App() {
  return (
    <div className='App'>
      <Ticket name={'Super Bowl Tickets'} />
      <Footer />
    </div>
  );
}
