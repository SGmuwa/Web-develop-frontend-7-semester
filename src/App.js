import React from 'react';
import './App.css';
import FirstComponent from "./components/FirstComponent";
import ListComponent from "./components/ListComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ListComponent />
        <FirstComponent />
      </header>
    </div>
  );
}

export default App;
