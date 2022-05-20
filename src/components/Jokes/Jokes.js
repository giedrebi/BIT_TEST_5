import {useEffect, useState} from "react";
import Joke from "../Joke/Joke";

function Jokes() {
    const [jokes, setJokes] = useState(); 
    
    useEffect(() => {
        fetch("https://v2.jokeapi.dev/joke/Programming?amount=10/")
        .then(response => response.json())
        .then(
            (data) => 
            setJokes(data))
        .catch((err) => this.setState(err));
    },[]);

    return (
        <ul style={{display: "flex", flexDirection: "column"}}>
            {jokes.map((joke) => (
            <Joke key={joke.id} joke ={joke.joke} setup={joke.setup} delivery={joke.delivery}/>
            ))}
        </ul>
    );
}

export default Jokes;