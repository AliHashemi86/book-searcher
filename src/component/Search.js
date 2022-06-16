import React, { useState } from "react";
import "./Search.css";

const apiUrl = "https://openlibrary.org/search.json?title=";

export default function Search(props) {
  const [search, setSearch] = useState("");
  const { result, setResult } = props;

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = await fetch(`${apiUrl}${search}`);
    const response = await data.json();
    setResult(response.docs);
  };

  return (
    <div className="search">
      <h2>Green Book Search Engine</h2>
      <div className="container">Find Your Favorite Book</div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          value={search}
          onChange={handleChange}
          placeholder="type here"
        />
        <button id="button">Search</button>
      </form>
    </div>
  );
}
