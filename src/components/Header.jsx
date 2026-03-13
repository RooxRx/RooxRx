import "./Header.css"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Increased threshold slightly for a smoother transition feel
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={scrolled ? "header scroll" : "header"}>
            <div className="logo">
                <h1><span>R</span>ayan</h1>
            </div>

            <nav>
                <ul className="links">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#serv">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <ul className="icons">
                <li><a href="https://www.instagram.com/rayan_roox/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
        </header>
    )
}

export default Header