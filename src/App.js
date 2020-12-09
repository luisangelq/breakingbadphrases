import { useState, useEffect } from "react";
import Phrase from "./components/Phrase";

function App() {

  const [phrase, savePhrase] = useState({})

  const consultApi = async () => {
    const api = await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
    const phrase = await api.json()
    savePhrase(phrase[0]);
  }

  useEffect(() => {
    consultApi()
  }, [])

  return (
    <div className="contentApp">
      <Phrase 
        phrase = {phrase}
      />
      <button className="buttonApp" onClick={consultApi}>Get phrase</button>
    </div>
  );
}

export default App;
