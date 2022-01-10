import { useState } from "react"

import "./projects.scss"
import "../../arrow.scss"

import projects from "../../data.js"

export default function Projects() {

    const [currentSlide, setCurrentSlide] = useState(0)

    const handleClick = (direction) => {
        direction === "left" 
            ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : currentSlide)
            : setCurrentSlide(currentSlide < projects.length-1 ? currentSlide+1 : currentSlide)
    }

    return (
        <div className="projects" id="projects">
            <h2 className="title">Projets</h2>
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {projects.map((p) => (
                    <div className="container" key={p.name}>
                        <a className="item" href={p.link !== "none" ? p.link : null} target="_blank" rel="noreferrer">
                            <div className="left">
                                <div className="left-container">
                                    <h2>{p.name}</h2>
                                    <p>{p.description}</p>
                                    <div className="tag-wrapper">
                                        {p.tags.map((tag) =>(
                                            <span key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <img src={p.image} alt="" />
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            <div className="arrow left" 
                 onClick={() => handleClick("left")}
                 style={currentSlide === 0 ? {display: "none"} : null}></div>
            <div className="arrow right" 
                 onClick={() => handleClick()}
                 style={currentSlide === projects.length-1 ? {display: "none"} : null}></div>
            <a href="#contact" className="arrow-down"> </a>
        </div>
    )
}
