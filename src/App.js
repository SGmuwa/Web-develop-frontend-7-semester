import React from 'react';
import './App.css';

function App() {
  let myData;
  fetch('http://api.localhost/get_items')
  .then(response => response.json())
  .then((jsonData) => {
    // jsonData is parsed json object received from url
    myData = jsonData
  })
  .catch((error) => {
    // handle your errors here
    console.error(error)
  })
  console.log(myData);
  const SimpleList = () => (
    <ul>
      {['a', 'b', 'c'].map(function(item) {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
  return (
    <div className="App">
      <header className="App-header">
        {SimpleList()}
      </header>
    </div>
  );
}

export default App;
