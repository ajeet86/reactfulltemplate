import React from 'react';
import logo from './assets/abc.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	    <div className="App-logo">
			<img src={logo} className="App-logo" alt="logo" />
		</div>
        
        <p>
         please check it 
        </p>
		
		</header>
		
		 <container className="App-container">
			This is the container area
		</container>
		
		<footer className="App-footer-container" > is the footer containt area 
		</footer>
     </div>
    
  );
}

export default App;
