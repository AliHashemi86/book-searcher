import React, { useState, useEffect } from "react";
import "./Result.css";

export default function Result(props) {
  const [books, setBooks] = useState([]);
  const { result, setResult } = props;

  const sortByAlphabet = () => {
    function compare(a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    }

    const newResult = [...result];
    newResult.sort(compare);

    setResult(newResult);
  };

  const sortByDate = () => {
    function compare(a, b) {
      if (a.publish_year > b.publish_year) {
        return -1;
      }
      if (a.publish_year < b.publish_year) {
        return 1;
      }
      return 0;
    }
    const newResult = [...result];
    newResult.sort(compare);

    setResult(newResult);
  };

  useEffect(() => {
    const list = result.map((book) => {
      return (
        <div className="result" key={book.key}>
          <img
            alt={book.image}
            className="img"
            src={`https://covers.openlibrary.org/b/isbn/${
              book.isbn && book.isbn[0]
            }-M.jpg`}
          />

          <div className="text">
            <p id="title">{book.title}</p>
            <div clasName="writerDate"></div>
            <p id="writer">by {book.author_name && book.author_name[0]}</p>
            <p id="date">
              Published in {book.publish_year && book.publish_year[0]}
            </p>
          </div>
          <div className="favoriteOnline">
            <button id="favorite">⭐️ Add to Favorite</button>
            <button id="online">📖 Read Online</button>
          </div>
        </div>
      );
    });
    setBooks(list);
  }, [result]);

  return (
    <>
      <div className="sort">
        <button id="sortAlphabet" onClick={sortByAlphabet}>
          Sort by Book Title
        </button>
        <button id="sortDate" onClick={sortByDate}>
          Sort by Published Date
        </button>
      </div>
      <div title="result">{result.length > 0 && books}</div>
    </>
  );
}
