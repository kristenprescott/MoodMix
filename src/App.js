import "./App.css";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Credentials } from "./Components/Credentials";
import RangeSlider from "./Components/RangeSlider";
import SelectGenre from "./Components/SelectGenre";
import Navbar from "./Components/Navbar";
import axios from "axios";

const routes = [
  // {
  //   Component: Home,
  //   key: "MoodMix",
  //   path: "/",
  // },
  // {
  //   Component: RangeSlider,
  //   key: "Mood",
  //   path: "/mood",
  // },
  // {
  //   Component: SelectGenre,
  //   key: "Select Genre",
  //   path: "/genre",
  // },
  // {
  //   Component: Playlist,
  //   key: "Playlist",
  //   path: "/mood/playlist",
  // },
];

const App = () => {
  console.count("Render count: ");

  const spotifyIds = Credentials();

  // range slider data:
  const acousticnessData = [
    {
      name: "acousticness",
      id: 0,
      type: "range",
      min_label: "acoustic",
      max_label: "electric",
      min: 0,
      max: 10,
      step: 0.1,
      className: "slider acousticness-slider",
    },
  ];
  const energyData = [
    {
      name: "energy",
      id: 1,
      type: "range",
      min_label: "chill",
      max_label: "hype",
      min: 0,
      max: 9,
      step: 0.1,
      className: "slider energy-slider",
    },
  ];
  const danceabilityData = [
    {
      name: "danceability",
      id: 2,
      type: "range",
      min_label: "offbeat",
      max_label: "dancey",
      min: 0,
      max: 9,
      step: 0.1,
      className: "slider danceability-slider",
    },
  ];
  const instrumentalnessData = [
    {
      name: "instrumentalness",
      id: 3,
      type: "range",
      min_label: "verbose",
      max_label: "instrumental",
      min: 0,
      max: 9,
      step: 0.1,
      className: "slider instrumentalness-slider",
    },
  ];
  const valenceData = [
    {
      name: "valence",
      id: 4,
      type: "range",
      min_label: "melancholy",
      max_label: "upbeat",
      min: 0,
      max: 9,
      step: 0.1,
      className: "slider valence-slider",
    },
  ];

  // hooks:
  const [token, setToken] = useState("");
  console.log("token: ", token);
  const [genres, setGenres] = useState({ selectedGenre: "", genresList: [] });
  // const [playlist, setPlaylist] = useState({selectPlaylist: '', playlistList: []}); <<--- 13:43
  // const [acousticness, setAcousticness] = useState(5);
  const [acousticness, setAcousticness] = useState({
    selectedAcousticness: "",
    acousticnessData: [],
  });
  // const [energy, setEnergy] = useState(5);
  const [energy, setEnergy] = useState({
    selectedEnergy: "",
    energyData: [{ selectedEnergy: "", energyData: [] }],
  });
  // const [danceability, setDanceability] = useState(5);
  const [danceability, setDanceability] = useState({
    selectedDanceability: "",
    danceabilityData: [],
  });
  // const [instrumentalness, setInstrumentalness] = useState(5);
  const [instrumentalness, setInstrumentalness] = useState({
    selectedInstrumentalness: "",
    instrumentalnessData: [],
  });
  // const [valence, setValence] = useState(5);
  const [valence, setValence] = useState({
    selectedValence: "",
    valenceData: [],
  });

  // const
  // // setting range states will look something like:
  //         setAcousticness({
  //           selectedAcousticness: acousticness.selectedAcousticness,
  //           // acousticnessData: genreRes.data.genres, <<--- unsure about genreRes when translating below
  //           acousticnessData: genreRes.data.acousticness,
  //         });

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
  };

  const acousticnessChanged = (value) => {
    setAcousticness({
      selectedAcousticness: value,
      acousticnessData: acousticness.acousticnessData,
    });
    console.log("APP: changed value acousticness: ", value);
  };
  const energyChanged = (value) => {
    setEnergy({
      selectedEnergy: value,
      energyData: energy.energyData,
    });
    console.log("APP: changed value energy: ", value);
  };
  const danceabilityChanged = (value) => {
    setDanceability({
      selectedDanceability: value,
      danceabilityData: danceability.danceabilityData,
    });
    console.log("APP: changed value danceability: ", value);
  };
  const instrumentalnessChanged = (value) => {
    setInstrumentalness({
      selectedInstrumentalness: value,
      instrumentalnessData: instrumentalness.instrumentalnessData,
    });
    console.log("APP: changed value instrumentalness: ", value);
  };
  const valenceChanged = (value) => {
    setValence({
      selectedValence: value,
      valenceData: valence.valenceData,
    });
    console.log("APP: changed value valence: ", value);
  };

  return (
    <Router>
      <Navbar />
      <form onSubmit={() => {}}>
        <RangeSlider
          rangeData={acousticnessData}
          selectedAcousticness={acousticness.selectedAcousticness}
          rangeChanged={acousticnessChanged}
        />
        {/* <RangeSlider rangeData={acousticness.acousticnessData} selectedValue={acousticness.selectedAcousticness} acousticnessChanged={acousticnessChanged} /> */}

        <RangeSlider
          rangeData={energyData}
          selectedEnergyData={energy.selectedEnergy}
          rangeChanged={energyChanged}
        />
        {/* <RangeSlider rangeData={energyData} /> */}

        <RangeSlider
          rangeData={danceabilityData}
          selectedRangeData={danceability.selectedDanceability}
          rangeChanged={danceabilityChanged}
        />
        {/* <RangeSlider rangeData={danceabilityData} /> */}

        <RangeSlider
          rangeData={instrumentalnessData}
          selectedRangeData={instrumentalness.selectedInstrumentalness}
          rangeChanged={instrumentalnessChanged}
        />
        {/* <RangeSlider rangeData={instrumentalnessData} /> */}

        <RangeSlider
          rangeData={valenceData}
          selectedRangeData={valence.selectedValence}
          rangeChanged={valenceChanged}
        />
        {/* <RangeSlider rangeData={valenceData} /> */}

        <SelectGenre
          data={genres.genresList}
          selectedValue={genres.selectedGenre}
          changed={genreChanged}
        />

        <button type="submit">Submit</button>
      </form>
    </Router>
  );
};

export default App;

// <Router>
//       <Nav />
//       <nav>
//         {/* {routes.map((route) => (
//           <Link key={route.key} to={route.path}>
//             {route.key}
//           </Link>
//         ))} */}
//       </nav>

//       <Switch>
//         <Route
//           exact
//           path="/"
//           render={() => <RangeSlider rangeData={rangeData} />}
//         />
//         {/* {routes.map(({ key, Component, path }) => (
//           <Route
//             key={key}
//             path={path}
//             component={(props) => <Component {...props} page={key} />}
//           />
//         ))} */}
//       </Switch>
//     </Router>
