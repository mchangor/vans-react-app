import React, {Component} from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import ListComponents from "./components/ListComponents";
import AddComponentForm from "./components/AddComponentForm";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className={"App-header"}>
                    <Route path="/list" component={ListComponents}/>
                    <Route path="/add" component={AddComponentForm}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

