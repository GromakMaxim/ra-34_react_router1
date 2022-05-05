import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import TimeAttackPage from "./pages/TimeAttackPage";
import ForzaPage from "./pages/ForzaPage";
import DriftPage from "./pages/DriftPage";

export default function Menu(props) {
    return (
        <>
            <nav className="menu">
                <Link className="menu__item" to='/'> Главная </Link>
                <Link className="menu__item" to='/drift'> Дрифт-такси </Link>
                <Link className="menu__item" to='/timeattack'>Time Attack</Link>
                <Link className="menu__item" to='/forza'> Forza Karting </Link>
            </nav>

            <Routes>
                <Route exact path='/' element={<HomePage/>}/>

                <Route exact path='/drift' element={<DriftPage/>}/>

                <Route exact path='/timeattack' element={<TimeAttackPage/>}/>

                <Route exact path='/forza' element={<ForzaPage/>}/>
            </Routes>
        </>
    );
}
