import "../../App.css";

export default function DropdownMenu(props) {
  // event handlers:
  // state now manages selectedGenre in addition to the array of genres:
  // it recieves an event and calls the method recieved from the App component
  // NOTE: we will also now remove all state-related calls
  const dropdownChanged = (e) => {
    // e.preventDefault();
    props.changed(e.target.value);
    // console.log("dropdown changed - event: ", e);
    // console.log("dropdown changed to: ", e.target.value);
    // console.log("dropdown target: ", e.target);
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
            <option key={i} value={item.id} className="menu-selection option">
              {item.name}
            </option>
          ))}
      </select>
    </div>
  );
}
