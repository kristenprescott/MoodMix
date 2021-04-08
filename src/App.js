import "./App.css";
// import Navbar from "./Components/Navbar";
// import Home from "./Home";
import DropdownMenu from "./Components/DropdownMenu";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import Sliders from "./Components/Sliders";
// import { Credentials } from "./Components/Credentials";
// import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
// import { useState } from "react";

// Save the Component, key and path in an array of objects for each Route
// You could write all routes by hand but I'm lazy annd this lets me use
// the map method to just loop over them and make my routes
// SWITCH is used so that it only ever matches one route at a time
// If you don't want to use react router just rewrite the app component to not use it

// mock API data:
const jsonData = {
  audio_features: [
    {
      danceability: 0.366,
      energy: 0.963,
      key: 11,
      loudness: -5.301,
      mode: 0,
      speechiness: 0.142,
      acousticness: 0.000273,
      instrumentalness: 0.0122,
      liveness: 0.115,
      valence: 0.211,
      tempo: 137.114,
      type: "audio_features",
      id: "7ouMYWpwJ422jRcDASZB7P",
      uri: "spotify:track:7ouMYWpwJ422jRcDASZB7P",
      track_href: "https://api.spotify.com/v1/tracks/7ouMYWpwJ422jRcDASZB7P",
      analysis_url:
        "https://api.spotify.com/v1/audio-analysis/7ouMYWpwJ422jRcDASZB7P",
      duration_ms: 366213,
      time_signature: 4,
    },
    {
      danceability: 0.602,
      energy: 0.905,
      key: 2,
      loudness: -4.046,
      mode: 1,
      speechiness: 0.0775,
      acousticness: 0.000202,
      instrumentalness: 0.064,
      liveness: 0.117,
      valence: 0.411,
      tempo: 128.019,
      type: "audio_features",
      id: "4VqPOruhp5EdPBeR92t6lQ",
      uri: "spotify:track:4VqPOruhp5EdPBeR92t6lQ",
      track_href: "https://api.spotify.com/v1/tracks/4VqPOruhp5EdPBeR92t6lQ",
      analysis_url:
        "https://api.spotify.com/v1/audio-analysis/4VqPOruhp5EdPBeR92t6lQ",
      duration_ms: 304840,
      time_signature: 4,
    },
    {
      danceability: 0.585,
      energy: 0.842,
      key: 9,
      loudness: -5.883,
      mode: 0,
      speechiness: 0.0556,
      acousticness: 0.00242,
      instrumentalness: 0.00686,
      liveness: 0.0866,
      valence: 0.428,
      tempo: 118.211,
      type: "audio_features",
      id: "2takcwOaAZWiXQijPHIx7B",
      uri: "spotify:track:2takcwOaAZWiXQijPHIx7B",
      track_href: "https://api.spotify.com/v1/tracks/2takcwOaAZWiXQijPHIx7B",
      analysis_url:
        "https://api.spotify.com/v1/audio-analysis/2takcwOaAZWiXQijPHIx7B",
      duration_ms: 237040,
      time_signature: 4,
    },
  ],
};

// curl -X "GET" "https://api.spotify.com/v1/audio-features?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQDrZjH99c9VEGC3yXIobNNBpZ_tEzvL2uHwz58lb2HAv63w22es5peo_riwSJfrnYcSJlOQSMzbTn1No-_IpPpmhFKk6M2YQuF93Hg_bnUFpdLbH4MiXoCNY1Q4sXlMpoRcmbSO3Hdu_p6NJ_xT0WS3vfQt"

// API Reference	Get Audio Features for Several Tracks:
// https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-several-audio-features
// Endpoint:	https://api.spotify.com/v1/audio-features
// HTTP Method:	GET
// OAuth:	Required

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

export default function App() {
  // array of object data to pass to pass to our dropdown menu
  // these will be placeholders for future API data to ensure our state is funcitoning correctly
  const data = [
    { value: 1, name: "A" },
    { value: 2, name: "B" },
    { value: 3, name: "C" },
  ];

  // // api credentials:
  // const spotify = Credentials();

  // // hooks:
  // const [token, setToken] = useState("");

  // // fetch requests:
  // axios("https://accounts.spotify.com/api/token", {
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //       Authorization:
  //         "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
  //     },
  //     data: "grant_type=client_credentials",
  //     method: "POST",
  //   }).then((tokenResponse) => {
  //     setToken(tokenResponse.data.access_token);

  return (
    <div className="App">
      <Navbar />
      <div className="selections">
        <div className="searchbar-container">
          <Searchbar data={jsonData} />
        </div>
        <div className="flex-center dropdown-container">
          <DropdownMenu options={data} />
          <DropdownMenu options={data} />
          <DropdownMenu options={data} />

          <button
            type="submit"
            value="Submit"
            // onSubmit={handleSubmit}
            className="btn search-btn"
          >
            Search
          </button>
        </div>
      </div>

      <div className="sliders-container">
        <Sliders audioFeatures={jsonData} />
      </div>
    </div>

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
  );
}
