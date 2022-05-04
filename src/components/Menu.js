import React from "react";

export default function Menu(props) {
    return (
        <nav className="menu">
            <a className="menu__item" href="/ra-34_react_router1/">Главная</a>
            <a className="menu__item" href="/ra-34_react_router1/drift">Дрифт-такси</a>
            <a className="menu__item" href="/ra-34_react_router1/timeattack">Time Attack</a>
            <a className="menu__item" href="/ra-34_react_router1/forza">Forza Karting</a>
        </nav>
    );
}
