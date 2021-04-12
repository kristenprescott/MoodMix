export default function SelectGenre(props) {
  const selectGenreChanged = (e) => {
    props.changed(e.target.value);

    // console.log("CHILD selected genre: ", e.target.value);
  };

  return (
    <div className="flex-container flex-col select-genre dropdownMenu">
      <h1 className="select title">Choose a genre:</h1>
      <select
        value={props.selectedValue}
        onChange={selectGenreChanged}
        className="select"
      >
        {props.data &&
          props.data.map((item, i) => (
            <option key={i} value={item} className="option">
              {item}
            </option>
          ))}
      </select>
    </div>
  );
}
