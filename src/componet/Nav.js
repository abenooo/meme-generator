import React from "react";

export default function Nav() {
    return (
        <div>
            <nav>
                <header className="header">
                    <img
                        src="./images/logo.jpg"
                        className="header--image"
                    />
                    <h2 className="header--title">Meme Generator</h2>
                    <h4 className="header--project">React Course - Project 3</h4>
                </header>
            </nav>
        </div>
    )
}