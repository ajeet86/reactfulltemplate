import React from 'react';
//import logo from './assets/abc.jpg';
import './App.css';
import Header from './components/Header';
import Mideheader from './components/Meadheader';
import Footer from "./components/Footer";
import Section from "./components/Section";
import FooterUpper from "./components/FooterUpper";

function App() {
  return (
    <div className="App">
       <Header />
       <Mideheader />
       <Section />
       <FooterUpper />
       <Footer />
     </div>
	 
    
  );
}

export default App;
