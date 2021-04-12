import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Credentials } from "./Components/Credentials";
import SelectGenre from "./Components/SelectGenre";
import Navbar from "./Components/Navbar";
import axios from "axios";
import Tracklist from "./Components/Tracklist";
import TrackDetails from "./Components/TrackDetails";

const App = () => {
  // console.count("Render count: ");

  const spotifyIds = Credentials();

  // hooks:
  const [token, setToken] = useState("");
  // console.log("token!: ", token);
  const [genres, setGenres] = useState({ selectedGenre: "", genresList: [] });
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState([]);

  useEffect(() => {
    // GET API token:
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + btoa(spotifyIds.ClientId + ":" + spotifyIds.ClientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenRes) => {
      setToken(tokenRes.data.access_token);

      // GET/SET genres/ genre seeds:
      axios(
        "https://api.spotify.com/v1/recommendations/available-genre-seeds",
        {
          method: "GET",
          headers: { Authorization: "Bearer " + tokenRes.data.access_token },
        }
      ).then((genreRes) => {
        // setGenres(genreRes.data.genres);
        setGenres({
          selectedGenre: genres.selectedGenre,
          genresList: genreRes.data.genres,
        });
        // console.log("genres:", genres);
      });
    });
    //
  }, [genres.selectedGenre, spotifyIds.ClientId, spotifyIds.ClientSecret]);

  // app component method to set selected state
  const genreChanged = (value) => {
    setGenres({
      selectedGenre: value,
      genresList: genres.genresList,
    });
    console.log("genre value: ", value);
    console.log("token: ", token);
    // // GET/SET tracks:
    axios(
      `https://api.spotify.com/v1/recommendations?limit=10&seed_genres=${value}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    ).then((tracksRes) => {
      console.log("tracksRes: ", tracksRes);
      setTracks(tracksRes.data.tracks);
      console.log("tracks: ", tracksRes.data.tracks);
    });
  };

  const handleTrackClick = (track) => {
    setSelectedTrack(track);
    console.log(track);
  };

  return (
    <Router>
      <Navbar />
      <Route exact path="/">
        <SelectGenre
          data={genres.genresList}
          selectedValue={genres.selectedGenre}
          changed={genreChanged}
        />
        <Tracklist tracks={tracks} handleTrackClick={handleTrackClick} />
      </Route>

      <Route path="/track/:id">
        <TrackDetails selectedTrack={selectedTrack} />
      </Route>
    </Router>
  );
};

export default App;
