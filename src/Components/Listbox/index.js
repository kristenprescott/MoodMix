import "../../App.css";

const Listbox = (props) => {
  // event handlers:
  const clicked = (e) => {
    e.preventDefault();

    console.log(e.target, e.target.id);
    props.clicked(e.target.id);
  };

  return (
    <div>
      {props.items &&
        props.items.map((item, i) => (
          <button key={i} onClick={clicked} id={item.track.id}>
            {item.track.name}
          </button>
        ))}
    </div>
  );
};

export default Listbox;
