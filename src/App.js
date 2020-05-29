import React from 'react';
import './hamburgers.css';
import './App.scss';
/* Sections*/
import Header from './components/landingpage_sections/header.js';
import Banner from './components/landingpage_sections/banner.js';
import Main from './components/landingpage_sections/main.js';
import Bottom from './components/landingpage_sections/bottom.js';
import Bottom2 from './components/landingpage_sections/bottom2.js';
import Bottom3 from './components/landingpage_sections/bottom3.js';
import Bottom4 from './components/landingpage_sections/bottom4.js';
import Bottom5 from './components/landingpage_sections/bottom5.js';
import Footer from './components/landingpage_sections/footer.js';

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
