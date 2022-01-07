import "./home.scss"
import "../../arrow.scss"

export default function Home() {
    return (
        <div className="home" id="home">
            <div className="wrapper">
                <h1>Arnaud Delperier</h1>
                <p>Hello, passioné par l'informatique depuis l'enfance j'ai décidé de faire du développement mon métier. Je suis formé en tant que développeur web fullstack ainsi qu'en game design.</p>
                <div className="link-wrapper">
                    <a href="#projects"> {">>>"} Voir mes projets {"<<<"}</a>
                    <div className="horizontal-divider"/>
                    <a href="#contact"> {">>>"} Me contacter {"<<<"}</a>
                </div>
                <a href="#projects">
                    <div className="arrow arrow__down"></div>
                </a>
            </div>
        </div>
    )
}
