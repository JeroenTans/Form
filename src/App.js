import React from 'react';
import './App.css';


function App() {
    const [nameValue, setNameValue] = React.useState("")
    const [ageValue, setAgeValue] = React.useState("")
    const [textValue, setTextValue] = React.useState("")
    const [optionValue, setOptionValue] = React.useState("")

    function sendForm(e) {
        console.log("Naam: " + nameValue);
        console.log("Leeftijd: " + ageValue);
        console.log("Referentie: " + optionValue);
        console.log("Opmerkingen: " + textValue);
        e.preventDefault();
    }

    return (
        <div>
            <form
            onSubmit={(e)=> sendForm(e)}
            >
            <fieldset className="gegevensContainer">
                <legend>Gegevens</legend>
                <label>Naam:
                    <input
                        type="text"
                        name={"name"}
                        placeholder={"Wat is je naam?"}
                        value={nameValue}
                        onChange={(e)=>setNameValue(e.target.value)}
                    />
                </label>
                <label>Leeftijd:
                    <input
                        type="number"
                        name={"age"}
                        placeholder="Wat is je leeftijd?"
                        value={ageValue}
                        onChange={(e)=>setAgeValue(e.target.value)}
                    />
                </label>
            </fieldset>
            <fieldset className="reviewContainer">
                <legend>Jouw review</legend>
                <label>Hoe heb je dit recept gevonden?</label>
                    <select
                        name="reference"
                        id="reference"
                        value={optionValue}
                        onChange={(e)=>setOptionValue(e.target.value)}
                    >
                        <option value="Google">Google</option>
                        <option value="Vriend">Vriend</option>
                        <option value="Advertentie">Advertentie</option>
                        <option value="Anders">Anders</option>
                    </select>
                <label>Opmerkingen:</label>
                <input
                    type="text"
                    name="message"
                    placeholder={"Wat vond je van het recept?"}
                    value={textValue}
                    onChange={(e)=>setTextValue(e.target.value)}
                >
                </input>
                <button
                    type="submit"

                >
                    Versturen</button>
            </fieldset>
            </form>
        </div>
    );
}

export default App;