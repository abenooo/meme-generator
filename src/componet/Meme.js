import React, { useState } from "react";
import memeData from "./memeData.js";
export default function Meme() {

    // // destruct array   
    const [count, setCounter] = useState(0);
    // // const [memeImage,setMemeImage] = useState("")
    // const [memeImage, setMemeImage] = useState("")
    function add() {
        // using New value of state
        // setCounter(count + 1)

        // using callback function store the previous 
        setCounter(setCount => setCount + 1)
    }
    function subtract() {
        setCounter(count - 1)
    }

    // function getMemeImage() {
    //     const memesArray = memeData.data.memes
    //     const randomNumber = Math.floor(Math.random() * memesArray.length);
    //     setMemeImage(memesArray[randomNumber].url)

    // }
    const [memeImage, setMemeImage] = React.useState("")
    /**
     * Challenge: Save the random meme URL in state
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */

    function getMemeImage() {
        const memesArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)

    }
    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImage} className="imgStyle" />

            <div className="counter">
                <button className="counter--minus" onClick={subtract}>–</button>
                <div className="counter--count">
                    <h1>{count}</h1>
                </div>
                <button className="counter--plus" onClick={add}>+</button>
            </div>
        </main>
    )
}