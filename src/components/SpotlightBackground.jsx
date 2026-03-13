import { useEffect, useRef } from "react";
import "./SpotlightBackground.css";

function SpotlightBackground() {
    const bgRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (bgRef.current) {
                // Kan-updatiw l-position dyal l-mouse f-l-page kamla
                bgRef.current.style.setProperty("--mouse-x", `${e.clientX}px`);
                bgRef.current.style.setProperty("--mouse-y", `${e.clientY}px`);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div ref={bgRef} className="global-spotlight">
            <div className="pixel-grid"></div>
        </div>
    );
}

export default SpotlightBackground;