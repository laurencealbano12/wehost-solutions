import React from 'react';
import './hamburgers.css';
import './App.scss';
/* Sections*/
import Header from './components/header.js';
import Banner from './components/banner.js';
import Main from './components/main.js';
import Bottom from './components/bottom.js';
import Bottom2 from './components/bottom2.js';
import Bottom3 from './components/bottom3.js';
import Bottom4 from './components/bottom4.js';
import Bottom5 from './components/bottom5.js';
import Footer from './components/footer.js';

function App() {

  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Main/>
      <Bottom/>
      <Bottom2/>
      <Bottom3/>
      <Bottom4/>
      <Bottom5/>
      <Footer/>
    </div>
  );
}

export default App;
