import "./Header.css"
import { useState, useEffect, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        const handleMouseMove = (e) => {
            if (!headerRef.current) return;
            const { left, top } = headerRef.current.getBoundingClientRect();
            // Kan-calculiw l-position dyal l-mouse b-nesba l-header
            headerRef.current.style.setProperty("--mouse-x", `${e.clientX - left}px`);
            headerRef.current.style.setProperty("--mouse-y", `${e.clientY - top}px`);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <header 
            ref={headerRef} 
            className={scrolled ? "header scroll" : "header"}
        >
            {/* Had l-div hiya li ghadi t-dir l-effect dyal pixels/light */}
            <div className="spotlight"></div>

            <div className="logo">
                <h1><span>R</span>ayan</h1>
            </div>

            <nav>
                <ul className="links">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">Some Shit</a></li>
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