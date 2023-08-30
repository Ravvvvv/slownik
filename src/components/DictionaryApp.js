import React, { useState } from "react";

const DictionaryApp = ({ dictionaryData }) => {
  const [searchWord, setSearchWord] = useState("");
  const [definition, setDefinition] = useState(null);
  const [newWord, setNewWord] = useState("");
  const [newDefinition, setNewDefinition] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleSearch = () => {
    const foundDefinition = dictionaryData[searchWord];
    setDefinition(foundDefinition || "Definition not found.");
  };

  const handleAdd = () => {
    setIsAdding(true);
  };

  const handleSave = () => {
    if (newWord && newDefinition) {
      dictionaryData[newWord] = newDefinition;
      setNewWord("");
      setNewDefinition("");
      setIsAdding(false);
    }
  };

  return (
    <div className="dictionary-app">
      <h1>Pocket Dictionary</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter a word"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="definition-container">
        <h2>Definition:</h2>
        <p>{definition}</p>
      </div>
      {isAdding ? (
        <div className="add-word-container">
          <h2>Add New Word</h2>
          <input
            type="text"
            placeholder="Enter a new word"
            value={newWord}
            onChange={(e) => setNewWord(e.target.value)}
          />
          <textarea
            placeholder="Enter the definition"
            value={newDefinition}
            onChange={(e) => setNewDefinition(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <button onClick={handleAdd}>Add New Word</button>
      )}
    </div>
  );
};

export default DictionaryApp;