import './App.css';
import React from "react";
import HomePage from "./components/pages/HomePage";
import DriftPage from "./components/pages/DriftPage";
import TimeAttackPage from "./components/pages/TimeAttackPage";
import ForzaPage from "./components/pages/ForzaPage";
import Menu from "./components/Menu";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import '../src/css/main.css';

function App() {
    return (
        <BrowserRouter>
            <Menu/>
            <div className="page">
                <Routes>
                    <Route path="/ra-34_react_router1/" exact element={<HomePage/>}/> // In V6, you can't use the 'component' prop anymore.
                    It was replaced in favor of element :(
                    <Route path="/ra-34_react_router1/drift" element={<DriftPage/>}/>
                    <Route path="/ra-34_react_router1/timeattack" element={<TimeAttackPage/>}/>
                    <Route path="/ra-34_react_router1/forza" element={<ForzaPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
