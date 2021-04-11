// import { useState } from "react";

export default function SelectGenre(props) {
  // hooks
  // const [selectedValue, setSelectedValue] = useState("");

  const selectGenreChanged = (e) => {
    props.changed(e.target.value);
    // console.log("genre select options: ", e.target);
    console.log("selected genre: ", e.target.value);
  };

  return (
    <div>
      <h1>Choose a genre:</h1>
      <select value={props.selectedValue} onChange={selectGenreChanged}>
        {props.data &&
          props.data.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
      </select>
      {/* <p>{selectedValue}</p> */}
    </div>
  );
}
