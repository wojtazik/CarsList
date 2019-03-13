import React, { Component } from 'react';
import './scss/main.scss';
import Header from "./Components/Header/Header";
import List from "./Components/List/List";

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <List text="napis"/>
      </div>
    );
  }
}

export default App;
