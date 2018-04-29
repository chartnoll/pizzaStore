import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OrderForm from './components/OrderForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to NewAgePizza.com</h1>
        </header>
        <OrderForm />
      </div>
    );
  }
}

export default App;
