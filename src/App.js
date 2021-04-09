// import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
// import { Credentials } from "./Components/Credentials";
import "./App.css";
import DropdownMenu from "./Components/DropdownMenu";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import Sliders from "./Components/Sliders";
import { useState, useEffect } from "react";
import axios from "axios";

//#region ROUTING:
// Save the Component, key and path in an array of objects for each Route
// You could write all routes by hand but I'm lazy annd this lets me use
// the map method to just loop over them and make my routes
// SWITCH is used so that it only ever matches one route at a time
// If you don't want to use react router just rewrite the app component to not use it

// const routes = [
//   // {
//   //   Component: Navbar,
//   //   key: "MoodMix",
//   //   path: "/Navbar",
//   // },
//   {
//     Component: Home,
//     key: "Home",
//     path: "/Homepage",
//   },
// ];
//#endregion ROUTING

export default function App() {
  // // api credentials:
  // NOTE: currently storing these vars in .env and using them here -
  // *may* import credentials later and add Client_Id & Client_Secret as dependencies of useEffect():
  // will then replace process.env vars w:
  // spotify.ClientId spotify.ClientSecret
  // const spotify = Credentials();

  console.log("RENDERING APP.JS");

  // array of object data to pass to pass to our dropdown menu
  // these will be placeholders for future API data to ensure our state is funcitoning correctly
  const data = [
    { value: 1, name: "A" },
    { value: 2, name: "B" },
    { value: 3, name: "C" },
  ];

  // hooks:
  const [token, setToken] = useState("");
  console.log("token", token);

  const [seedGenreRec, setSeedGenreRec] = useState([]);
  // console.log("seedGenreRec: ", seedGenreRec);

  useEffect(() => {
    // GET API token:
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          btoa(
            process.env.REACT_APP_CLIENT_ID +
              ":" +
              process.env.REACT_APP_CLIENT_SECRET
          ),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      // console.log("tokenResponse: ", tokenResponse);
      // console.log("access_token: ", tokenResponse.data.access_token);
      setToken(tokenResponse.data.access_token);
      // GET seed genre recommendations:
      axios(
        "https://api.spotify.com/v1/recommendations?market=US&seed_genres=classical%2Ccountry%2Crap%2Crock%2Cpop&min_acousticness=0.3",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + tokenResponse.data.access_token,
            // Accept: "application/json",
            // "Content-Type": "application/json",
          },
        }
      ).then((seedGenreRecResponse) => {
        setSeedGenreRec(seedGenreRec.tracks);
        console.log("seedGenreRecResponse: ", seedGenreRecResponse);
        console.log(
          "seedGenreRecResponse.data.tracks: ",
          seedGenreRecResponse.data.tracks
        );
        console.log(
          "seedGenreRecResponse.data.tracks[0].id: ",
          seedGenreRecResponse.data.tracks[0].id
        );
      });

      //
    });
    //
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div>
        <h3>TRACK DATA</h3>
        <p>{seedGenreRec}</p>
      </div>

      <div className="selections">
        <div className="searchbar-container">
          <Searchbar data={() => {}} />
        </div>

        <form onSubmit={() => {}}>
          <div className="flex-center dropdown-container">
            <div className="dropdown">
              <DropdownMenu className="menu" options={data} />
            </div>
            <div className="dropdown">
              <DropdownMenu className="menu" options={data} />
            </div>
            <div className="dropdown">
              <DropdownMenu className="menu" options={data} />
            </div>

            <div className="btn-container submit-btn-container">
              <button
                type="submit"
                value="Submit"
                // onSubmit={handleSubmit}
                className="btn submit-btn"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="sliders-container">
        <Sliders audioFeatures={() => {}} />
      </div>
    </div>

    //#region ROUTING:
    // <Router>
    //   <nav>
    //     {routes.map((route) => (
    //       <Link key={route.key} to={route.path}>
    //         {route.key}
    //       </Link>
    //     ))}
    //   </nav>
    //   <Switch>
    //     {routes.map(({ key, Component, path }) => (
    //       <Route
    //         key={key}
    //         path={path}
    //         component={(props) => <Component {...props} page={key} />}
    //       />
    //     ))}
    //   </Switch>
    // </Router>
    //#endregion ROUTING
  );
}
