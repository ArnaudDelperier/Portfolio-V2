import "./topbar.scss"
import {Home, GitHub, LinkedIn, Twitter} from "@mui/icons-material"

export default function Topbar({ menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#home">
                        <Home className="home-btn"/>
                    </a>
                    <a href="https://github.com/ArnaudDelperier" target="_blank" rel="noreferrer">
                        <GitHub className="icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/arnaud-delperier/" target="_blank" rel="noreferrer">
                        <LinkedIn className="icon"/>
                    </a>
                    <a href="https://twitter.com/JinkoDev" target="_blank" rel="noreferrer">
                        <Twitter className="icon"/>
                    </a>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
