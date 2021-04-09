// import { useState } from "react";
import "../../App.css";

export default function DropdownMenu(props) {
  // hooks:
  // NOTE: we will also now remove all state-related calls...
  // const [selectedValue, setSelectedValue] = useState("");
  // const [pValue, setPValue] = useState("");

  // event handlers:
  // state now manages selectedGenre in addition to the array of genres:
  // it recieves an event and calls the method recieved from the App component
  // NOTE: we will also now remove all state-related calls
  const dropdownChanged = (e) => {
    props.changed(e.target.value);
  };

  return (
    <div className="menu">
      {/* <div>
        <h1>Track name:</h1>
        <h2 value={pValue} onChange={(e) => setPValue(e.target.tracks)}>
          {props.seedGenreRecs &&
            props.seedGenreRecs.map((item, i) => (
              <p key={i} value={item.tracks.name}>
                {item.tracks}
              </p>
            ))}
        </h2>
      </div> */}
      <select
        className="menu-item select"
        value={props.selectedValue}
        onChange={dropdownChanged}
      >
        {props.options &&
          props.options.map((item, i) => (
            <option className="menu-selection option" key={i} value={item.id}>
              {item.name}
            </option>
          ))}
      </select>
      {/* NOTE: we will also now remove all state-related calls... */}
      {/* <p>{selectedValue}</p> */}
    </div>
  );
}
