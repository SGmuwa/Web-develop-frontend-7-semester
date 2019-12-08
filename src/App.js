import React from 'react';
import './css/App.css';
import ListComponent from "./components/ListComponent";
import Form from "./components/FormComponent";

class App extends React.Component{

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <ListComponent />
                </header>
            </div>
        );
    }

}

export default App;
