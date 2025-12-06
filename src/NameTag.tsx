import { useEffect, useState } from "react";
import "./NameTag.css"

function NameTag() {
    let [name, setName] = useState("Setu\u00A0Marathe");
    const delayStep = 0.01;

    const [hovered, setHovered] = useState(false);

    const otherNames = [
        "Web\u00A0Dev",
        "CS\u00A0Student",
        "Game\u00A0Dev",
    ]

    let [nameIndex, setNameIndex] = useState(0);

    useEffect(() => {
        if (!hovered) {
            setName("Setu\u00A0Marathe");  
            return;
        }

        const interval = setInterval(() => {
            setNameIndex((nameIndex + 1) % otherNames.length);
            setName(otherNames[nameIndex])
        }, 400);

        return () => clearInterval(interval);

    }, [hovered])

    return (
        <div className="tag-holder" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <h1 className="fade-text" key={name}>
                    {name.split("").map((char, i) => (
                        <span key={i} style={{ animationDelay: `${i * delayStep}s`}} className="fade-text">
                            {char || " "}
                        </span>
                    )
                )}
            </h1>
        </div>
    )
}

export default NameTag;