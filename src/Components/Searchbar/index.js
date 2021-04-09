import { useState } from "react";
import "./Searchbar.css";

export default function Searchbar(props) {
  // hooks:
  const [searchTerm, setSearchTerm] = useState("");

  // event handlers:
  const handleInput = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted ", searchTerm);

    // // fetch requests:
    // fetch("https://api.spotify.com/v1/search?q=Muse&type=artist").then(
    //   (res) => {
    //     console.log(res);
    //   }
    // );

    setSearchTerm("");
  };
  return (
    <div className="search-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="searchbar-container">
          <input
            name="searchbar"
            className="searchbar"
            type="text"
            autoComplete="off"
            placeholder="search..."
            onChange={handleInput}
            value={searchTerm}
          ></input>
        </div>

        <div className="btn-container search-btn-container">
          <button
            type="submit"
            value="Submit"
            onSubmit={handleSubmit}
            className="btn search-btn"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
