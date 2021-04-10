// import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Credentials } from "./Components/Credentials";
import DropdownMenu from "./Components/DropdownMenu";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import Sliders from "./Components/Sliders";
import Listbox from "./Components/Listbox";
import Details from "./Components/Details";
import axios from "axios";
import "./App.css";

export default function App() {
  // // api credentials:
  const spotify = Credentials();

  console.count("RENDERING APP.JS");

  // HOOKS:
  const [token, setToken] = useState("");
  // console.log("token", token);
  const [genres, setGenres] = useState({ selectedGenre: "", listOfGenres: [] });
  const [playlist, setPlaylist] = useState({
    selectedPlaylist: "",
    listOfPlaylist: [],
  });
  const [tracks, setTracks] = useState({ selectedTrack: "", listOfTracks: [] });
  const [trackDetail, setTrackDetail] = useState(null);
  // const [seedGenreRecs, setSeedGenreRecs] = useState([]);

  useEffect(() => {
    // GET API token:
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      setToken(tokenResponse.data.access_token);

      //  GET genres:
      axios("https://api.spotify.com/v1/browse/categories", {
        method: "GET",
        headers: { Authorization: "Bearer " + tokenResponse.data.access_token },
      }).then((genreResponse) => {
        // setGenres(genreResponse.data.categories.items);
        // // state now manages selectedGenre in addition to the array of genres:
        setGenres({
          selectedGenre: genres.selectedGenre,
          listOfGenres: genreResponse.data.categories.items,
        });
      });

      // // GET seed genre recommendations:
      // axios(
      //   "https://api.spotify.com/v1/recommendations?market=US&seed_genres=classical%2Ccountry%2Crap%2Crock%2Cpop&min_acousticness=0.3",
      //   {
      //     method: "GET",
      //     headers: {
      //       Authorization: "Bearer " + tokenResponse.data.access_token,
      //       // Accept: "application/json",
      //       // "Content-Type": "application/json",
      //     },
      //   }
      // ).then((seedGenreRecsResponse) => {
      //   setSeedGenreRecs(seedGenreRecs.tracks);
      //   console.log("seedGenreRecsResponse: ", seedGenreRecsResponse);
      //   console.log(
      //     "seedGenreRecsResponse.data.tracks: ",
      //     seedGenreRecsResponse.data.tracks
      //   );
      //   console.log(
      //     "seedGenreRecsResponse.data.tracks[0].id: ",
      //     seedGenreRecsResponse.data.tracks[0].id
      //   );
      //   console.log(
      //     "seedGenreRecsResponse.data.tracks[0].name: ",
      //     seedGenreRecsResponse.data.tracks[0].name
      //   );
      // });

      //
    });
  }, [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret]);

  // EVENT HANDLERS:
  // genreChanged handles playlist update:
  const genreChanged = (value) => {
    setGenres({
      selectedGenre: value,
      listOfGenres: genres.listOfGenres,
    });
    //
    // GET playlists
    axios(
      `https://api.spotify.com/v1/browse/categories/${value}/playlists?limit=10`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    ).then((playlistResponse) => {
      setPlaylist({
        selectedPlaylist: playlist.selectedPlaylist,
        listOfPlaylist: playlistResponse.data.playlists.items,
      });
    });
  };

  const playlistChanged = (value) => {
    setPlaylist({
      selectedPlaylist: value,
      listOfPlaylist: playlist.listOfPlaylist,
    });
  };

  // click event triggers api call to get list of tracks for selected playlist
  // btn click populates a list of tracks and a clickable Listbox component
  const buttonClicked = (e) => {
    e.preventDefault();

    axios(
      `https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=10`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    ).then((tracksResponse) => {
      setTracks({
        selectedTrack: tracks.selectedTrack,
        listOfTracks: tracksResponse.data.items,
      });
    });
  };

  //handles listbox submit
  const listboxClicked = (value) => {
    const currentTracks = [...tracks.listOfTracks];
    const trackInfo = currentTracks.filter((t) => t.track.id === value);
    // when we click on the listbox item we get the selectedTrack id - we set it here as the id of the button
    // we then use the spread operator on the tracks state var to create a new list of tracks
    // then we use filter to find the track id that matched our buttons id
    // finally, we store track info in it's state var
    // (we will create one more component to hold this detail info)

    setTrackDetail(trackInfo[0].track);
  };

  // // sliders hooks:
  // const [acousticnessValue, setAcousticnessValue] = useState(5);
  // const [energyValue, setEnergyValue] = useState(5);
  // const [danceabilityValue, setDanceabilityValue] = useState(5);
  // const [instrumentalnessValue, setInstrumentalnessValue] = useState(5);
  // const [valenceValue, setValenceValue] = useState(5);
  const [rangeValue, setRangeValue] = useState(5);
  // const [genres, setGenres] = useState({ selectedGenre: "", listOfGenres: [] });

  const rangeData = [
    {
      name: "acousticness",
      min_label: "acoustic",
      max_label: "electric",
      className: "slider acousticness-slider",
      // rangeValue: { rangeValue },
      handleRangeChange: (e) => {
        setRangeValue(e.target.value);
      },
    },
    {
      name: "energy",
      min_label: "chill",
      max_label: "hype",
      className: "slider energy-slider",
      // rangeValue: { rangeValue },
      handleRangeChange: (e) => {
        setRangeValue(e.target.value);
      },
    },
    {
      name: "danceability",
      min_label: "offbeat",
      max_label: "dancey",
      className: "slider danceability-slider",
      // rangeValue: { rangeValue },
      handleRangeChange: (e) => {
        setRangeValue(e.target.value);
      },
    },
    {
      name: "instrumentalness",
      min_label: "verbose",
      max_label: "instrumental",
      className: "slider instrumentalness-slider",
      // rangeValue: { rangeValue },
      handleRangeChange: (e) => {
        setRangeValue(e.target.value);
      },
    },
    {
      name: "valence",
      min_label: "melancholy",
      max_label: "upbeat",
      className: "slider valence-slider",
      // rangeValue: { rangeValue },
      handleRangeValue: (e) => {
        setRangeValue(e.target.value);
      },
    },
  ];

  return (
    <div className="App">
      <Navbar />
      {/* <div>
        <h3>TRACK DATA</h3>
        <p>{seedGenreRecs}</p>
      </div> */}

      <div className="searchbar-container">
        <Searchbar data={() => {}} />
      </div>

      <div className="selections">
        <form onSubmit={buttonClicked}>
          <div className="flex-center dropdown-container">
            {/* <div className="dropdown">
              <DropdownMenu className="menu" seedGenreRecs={seedGenreRecs} />
            </div> */}

            <div className="dropdown">
              <DropdownMenu
                className="menu"
                options={genres.listOfGenres}
                selectedValue={genres.selectedGenre}
                changed={genreChanged}
              />
            </div>

            <div className="dropdown">
              <DropdownMenu
                className="menu"
                options={playlist.listOfPlaylist}
                selectedValue={playlist.selectedPlaylist}
                changed={playlistChanged}
              />
            </div>

            <div className="btn-container submit-btn-container">
              <button
                type="submit"
                // value="Submit"
                // onSubmit={handleSubmit}
                className="btn submit-btn"
              >
                Submit
              </button>
            </div>

            <Listbox items={tracks.listOfTracks} clicked={listboxClicked} />

            {/* we're passing our track object to the track Detail component using the spread operator */}
            {/* the properties of the track object are extracted for us this way */}
            {/* this allows us to use object destructuring in the component */}
            {trackDetail && <Details {...trackDetail} />}
          </div>
        </form>
      </div>
      {/* <form onRangeSubmit={() => {}}> */}
      <div className="sliders-container">
        <Sliders
          rangeData={rangeData}
          onRangeChange={(value) => {
            setRangeValue(value);
            // console.log("range value: ", value);
          }}
        />
      </div>
      {/* </form> */}
    </div>
  );
}
