import './App.css';
import React from "react";
import HomePage from "./components/pages/HomePage";
import DriftPage from "./components/pages/DriftPage";
import TimeAttackPage from "./components/pages/TimeAttackPage";
import ForzaPage from "./components/pages/ForzaPage";
import Menu from "./components/Menu";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import '../src/css/main.css';

function App() { // In V6, you can't use the 'component' prop anymore.It was replaced in favor of element :(
    console.log(process.env.PUBLIC_URL)
    return (
        <Router>
            <Menu/>
            <div className="page">
                <Routes>
                    <Route path="" exact element={<HomePage/>}/>
                    <Route path="drift" element={<DriftPage/>}/>
                    <Route path="timeattack" element={<TimeAttackPage/>}/>
                    <Route path="forza" element={<ForzaPage/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
