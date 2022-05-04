import React from "react";

export default function Menu(props){
    return (
        <nav className="menu">
            <a className="menu__item" href="/">Главная</a>
            <a className="menu__item" href="/drift">Дрифт-такси</a>
            <a className="menu__item" href="/timeattack">Time Attack</a>
            <a className="menu__item" href="/forza">Forza Karting</a>
        </nav>
    );
}
