import { useState } from "react";

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
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <input
          name="searchbar"
          className="search-input"
          type="text"
          placeholder="search..."
          onChange={handleInput}
          value={searchTerm}
        ></input>
        <button
          type="submit"
          value="Submit"
          onSubmit={handleSubmit}
          className="btn submit-btn"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
