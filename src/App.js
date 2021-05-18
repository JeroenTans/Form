import React from 'react';
import './App.css';

function App() {
    const [nameValue, setNameValue] = React.useState("")
    const [ageValue, setAgeValue] = React.useState("")
    const [messageValue, setMessageValue] = React.useState("")
    const [allInfoValue, setAllInfoValue] = React.useState("")
  return (
      <form
          id="completeForm"
          onSubmitCapture={allInfoValue}
          onSubmit={(e)=> setAllInfoValue(e.target)}>
    <div className= "allBoxes">
        <div className="boxOne">
        <form className= "information">
            <fieldset className="fieldSetOne">
                <legend>Gegevens</legend>
                <label
                    htmlFor="name">Naam:
                    <input  type="text"
                            id="inputName"
                            value={nameValue}
                            onChange={(e)=> setNameValue(e.target.value)}
                    />
                    </label> <br/><br/>
                <label htmlFor="age">Leeftijd:
                    <input  type="text"
                            id="inputAge"
                            value={ageValue}
                            onChange={(e)=> setAgeValue(e.target.value)}
                    /></label>
            </fieldset>
        </form><br/>
        </div>
        <div className="boxTwo">
        <form className="review">
            <fieldset className= "fieldSetTwo">
                <legend>Jouw review</legend>
                <label htmlFor="howDidYou">Hoe heb je dit recept gevonden?</label><br/>
                <label htmlFor="options">
                    <select name="options" id="options">
                        <option value="nothing">Anders</option>
                        <option value="google">Google</option>
                        <option value="book">Kookboek</option>
                        <option value="friend">via via</option>
                        <option value="cantRemember">Kan ik mij niet herrineren</option>
                    </select><br/>
                </label><br/>
                <label htmlFor="feedback">Opmerkingen: </label><br/>
                <label htmlFor="inputField">
                    <textarea
                        name="input"
                        id="textBox"
                        rows="6"
                        placeholder="Wat vond je van het recept?"
                        value={messageValue}
                        onChange={(e)=> setMessageValue(e.target.value)}
                    >
                    </textarea>
                    <button id="buttonSend" type="submit">Versturen</button>
                </label><br/>
            </fieldset>
        </form>
        </div>
    </div>
      </form>

  );
}

export default App;
