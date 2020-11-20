import React from 'react';
import Header from '../Header';
import STYLES from './App.scss';
import Cards from '../Cards/Cards.jsx';

const getClassName = className => STYLES[className] || 'UNKNOWN';

const backgroundStyle = {
  background : "#9e9e9e33"
}

const App = () => (
  <div className={getClassName('App')}>
    <Header />
    <main className={getClassName('App__main')} style={backgroundStyle}>
      <Cards/>
    </main>
  </div>
);

export default App;
