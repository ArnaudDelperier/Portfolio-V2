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
                    <GitHub className="icon"/>
                    <LinkedIn className="icon"/>
                    <Twitter className="icon"/>
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
