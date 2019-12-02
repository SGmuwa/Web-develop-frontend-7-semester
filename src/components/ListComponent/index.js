import React from "react";

function UpdateJsonData()
{
  fetch('http://api.localhost/get_items')
  .then(response => response.json())
  .then((jsonData) => {
    // jsonData is parsed json object received from url
    console.log(jsonData);
    jsonList = jsonData
  })
  .catch((error) => {
    // handle your errors here
    console.error(error)
  })
}

var jsonList = null;

class ListComponent extends React.Component {

  updateState() {
    console.log("hello");
    UpdateJsonData();
  }

  render() {
    return <div><h1 onClick={this.updateState}>{jsonList}</h1><p onClick={this.updateState}>hello</p></div>;
  }
}

export default ListComponent;

/*
const SimpleList = () => (
    <ul>
      {['a', 'b', 'c'].map(function(item) {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
*/