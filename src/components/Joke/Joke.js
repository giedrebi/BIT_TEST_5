function Joke({joke, setup, delivery}) {
    return (
        <div>
            <figure>
                <li>
                    <h3>{joke}</h3>
                <h3>{setup}</h3>
                <h3>{delivery}</h3>
                </li>
                
            </figure>
        </div>
    );
}

export default Joke;