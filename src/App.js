import './App.css';
import React from "react";
import Menu from "./components/Menu";
import {HashRouter as Router} from "react-router-dom";
import '../src/css/main.css';

function App() { // In V6, you can't use the 'component' prop anymore.It was replaced in favor of element :(
    return (
        <Router>
            <Menu/>
        </Router>
    );
}

export default App;
