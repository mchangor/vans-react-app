import React, {Component} from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import ListComponents from "./components/ListComponent";
import AddComponentForm from "./components/AddComponentForm";
import DetailsComponent from "./components/DetailsComponent"

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className={"App-header"}>
                    <Route path="/list" component={ListComponents}/>
                    <Route path="/add" component={AddComponentForm}/>
                    <Route path="/details/:componentId" component={DetailsComponent}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

