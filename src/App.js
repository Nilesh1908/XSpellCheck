import React, { useState } from "react";
import './App.css';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};


function App() {

  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleChange = (e) => {
    const inputText = e.target.value
    setText(inputText)
    const words = inputText.split("/\s+/");

    const wrongword = words.find((word) => {
      if(!word) return false;
      const cleanedword = word.replace(/[.,!?;:]/g, "");
      return customDictionary.hasOwnProperty(cleanedword.toLowerCase());
    });

    if(wrongword){
      const cleanedword = wrongword.replace(/[.,!?;:]/g, "");
      const correction = customDictionary[cleanedword.toLowerCase()];
      setSuggestion(`Did you mean ${correction}?`);
    }else {
      setSuggestion("");
    }
};

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h2>XSpell Check and Auto Corrcction</h2>
      <textarea
        rows="5"
        cols="60"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
        style={{ fontSize: "16px", padding: "10px" }}
      />
      <div style={{ marginTop: "10px", color: "black", fontWeight: "bold" }}>
        {suggestion}
      </div>
    </div>
  );
}

export default App;
