import React from 'react';
import logo from './Assets/logo.png';
import Home from './Components/Home';
import HeaderBar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
      <header className="App-header">
        <HeaderBar> </HeaderBar>
      </header>
      <div>
        <Home/>
      </div>
    </div>
  );
}

export default App;
