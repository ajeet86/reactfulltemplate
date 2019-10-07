import React from 'react';
//import logo from './assets/abc.jpg';
import './App.css';
import Header from './components/Header';
import Mideheader from './components/Meadheader';
import Footer from "./components/Footer";
import Section from "./components/Section";
import FooterUpper from "./components/FooterUpper";
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
       <Header />
       <Mideheader />
       <Section  name='ajeet' />
       <Counter />
       <FooterUpper />
       <Footer />
     </div>
	 
    
  );
}

export default App;
