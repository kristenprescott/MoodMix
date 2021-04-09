import { useState } from "react";
import "../../../src/App.css";
import "./Sliders.css";

export default function Sliders(props) {
  //   // audioFeatures:
  //   const [features, setFeatures] = useState([
  //     {
  //       danceability: "",
  //       energy: "",
  //       valence: "",
  //       tempo: "",
  //       mode: "",
  //     },
  //   ]);

  // sliders state:
  const [tempoValue, setTempoValue] = useState(5);
  const [energyValue, setEnergyValue] = useState(5);
  const [danceabilityValue, setDanceabilityValue] = useState(5);
  const [modeValue, setModeValue] = useState(5);
  const [valenceValue, setValenceValue] = useState(5);

  // event handlers:
  const handleTempo = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setTempoValue(e.target.value);
  };

  const handleEnergy = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setEnergyValue(e.target.value);
  };

  const handleDanceability = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setDanceabilityValue(e.target.value);
  };

  const handleMode = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setModeValue(e.target.value);
  };

  const handleValence = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setValenceValue(e.target.value);
  };

  return (
    <div className="slider-component">
      <div className="sliders-container">
        <div className="tempo-slider sliders">
          <label>tempo</label>
          <input
            className="slider"
            type="range"
            id="tempo"
            name="tempo"
            min="0"
            max="10"
            step="1"
            value={tempoValue}
            onChange={handleTempo}
          ></input>
          <output htmlFor="tempo"></output>
        </div>

        <div className="energy-slider sliders">
          <label>energy</label>
          <input
            className="slider"
            type="range"
            id="energy"
            name="energy"
            min="0"
            max="10"
            step="1"
            value={energyValue}
            onChange={handleEnergy}
          ></input>
        </div>

        <div className="danceability-slider sliders">
          <label>danceability</label>
          <input
            className="slider"
            type="range"
            id="danceability"
            name="danceability"
            min="0"
            max="10"
            step="1"
            value={danceabilityValue}
            onChange={handleDanceability}
          ></input>
        </div>

        <div className="mode-slider sliders">
          <label>mode</label>
          <input
            className="slider"
            type="range"
            id="mode"
            name="mode"
            min="0"
            max="10"
            step="1"
            value={modeValue}
            onChange={handleMode}
          ></input>
        </div>

        <div className="valence-slider sliders">
          <label>valence</label>
          <input
            className="slider"
            type="range"
            id="valence"
            name="valence"
            min="0"
            max="10"
            step="1"
            value={valenceValue}
            onChange={handleValence}
          ></input>
        </div>
      </div>
    </div>
  );
}
