import React from "react";
import DictionaryApp from "./components/DictionaryApp";
import "./App.css";

const dictionaryData = {
  // Przykładowe definicje słów
  "apple": "A fruit that grows on trees and is often red or green.",
  "computer": "An electronic device for storing and processing data.",
  // Dodaj więcej definicji tutaj
};

const App = () => {
  return (
    <div className="app">
      <DictionaryApp dictionaryData={dictionaryData} />
    </div>
  );
};

export default App;