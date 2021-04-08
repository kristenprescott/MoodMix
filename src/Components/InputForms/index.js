import { useState } from "react";
import DropdownMenu from "../DropdownMenu";

export default function Forms() {
  //
  // hooks:
  const [searchTerm, setSearchTerm] = useState({ name: "name" });

  // functions:
  const handleInput = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submitted ", searchTerm);

    // make a get request
    fetch("https://api.spotify.com/v1/search?q=Muse&type=artist").then(
      (res) => {
        console.log(res);
      }
    );

    // setSearchTerm("");
  };
  //??????????????????????????
  const [formData, setFormData] = useState({
    name: "name",
    age: "age",
  });

  const [submissions, setSubmissions] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmits = (e) => {
    // prevent default behavior (like reloading page)
    e.preventDefault();

    // set submissions
    setSubmissions([formData, ...submissions]);

    // check data, do some work etc
    console.log(formData);

    // clear form
    setFormData({
      name: "",
      age: "",
    });
  };

  return (
    <div className="forms">
      <nav>
        <div className="title-logo">
          <img src={logo} alt="spotify logo" width="150" />

          <Link className="moodmix" to="/">
            MoodMix
          </Link>
        </div>

        <div className="menu-form">
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              name="name"
              className="search-input"
              type="text"
              placeholder="search"
              onChange={handleInput}
              value={searchTerm}
            ></input>
          </form>

          <DropdownMenu />
        </div>
      </nav>

      <form onSubmit={handleSubmits}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
        ></input>
        <input type="submit" value="log me" />
      </form>

      {submissions.length
        ? submissions.map((item, i) => {
            <div key={i}>
              <h1>OH HAYYYY</h1>
              <p>Name: {item.name}</p>
              <p>Age: {item.age}</p>
            </div>;
          })
        : "You haven't submitted yet"}
    </div>
  );
}
