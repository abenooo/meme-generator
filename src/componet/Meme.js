import React , {useState} from "react";
import memeData from "./memeData.js";
export default function Meme() {

// destruct array   
    const [count ,setCounter] = useState(0);
    function add(){
        // using New value of state
        // setCounter(count + 1)

        // using callback function store the previous 
        setCounter(setCount => setCount + 1)
    }
    function subtract(){
        setCounter(count - 1)
    }

    function getMemeImage() {
        const memesArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        
    }
    return (
        <main>
            <form className="form">
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
                    Get a new meme images 🖼
                </button>
              
            </form>
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