import React from "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {

    
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#home">Accueil</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#projects">Projets</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
