import { useState } from "react";
import { invoke } from "@xiao/api";

function App() {
    const [name, setName] = useState("");
    const [greeting, setGreeting] = useState("");

    async function greet() {
        setGreeting(await invoke<string>("greet", { name }));
    }

    return (
        <main className="container">
            <h1>Welcome to xiao</h1>
            <p>Qt WebEngine, Rust and React.</p>

            <form
                className="row"
                onSubmit={(e) => {
                    e.preventDefault();
                    greet();
                }}
            >
                <input onChange={(e) => setName(e.currentTarget.value)} placeholder="Enter a name..." />
                <button type="submit">Greet</button>
            </form>
            <p>{greeting}</p>
        </main>
    );
}

export default App;
