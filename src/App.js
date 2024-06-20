import React, { useState, useEffect } from "react";
import LokomotifList from "./components/LokomotifList";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import "./App.css";
import lokomotifData from "./data/lokomotif.json"; // Import data lokomotif

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filteredSuggestions = lokomotifData.filter((lokomotif) =>
        lokomotif.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Daftar Lokomotif Indonesia</h1>
        <h2 className="sub-header">
          Lokomotif yang masih berdinas baik di pulau Jawa maupun Sumatera
        </h2>
        <SearchBar onSearch={handleSearch} suggestions={suggestions} />
      </header>
      <main>
        <LokomotifList searchQuery={searchQuery} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
