import './App.css';
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';

function App() {
  return (
    <div className="App">
        <div className='Header'><Header /></div>
        <div className='Body'>
          <Body />
        </div>
        <Footer />
    </div>
  );
}

export default App;