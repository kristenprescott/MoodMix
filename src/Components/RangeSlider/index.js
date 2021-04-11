import "../../../src/App.css";
import "./Sliders.css";

export default function RangeSlider(props) {
  // console.log("range slider props ", props);

  const handleChange = (e) => {
    // console.log("target: ", e.target);
    console.log("CHILD", e.target.name, e.target.value);
    props.onRangeChange(e.target.value);
  };

  return (
    <div className="RangeSlider slider-component">
      <div className="sliders">
        {props.rangeData &&
          props.rangeData.map((range, i) => {
            return (
              <div className={range.className} key={i}>
                <label className="label range-label">{range.min_label}</label>
                <input
                  type="range"
                  step="0.1"
                  min="0.0"
                  max="1.0"
                  className="slider"
                  name={range.name}
                  id={range.id}
                  value={range.value}
                  onChange={handleChange}
                ></input>
                <label className="label range-label">{range.max_label}</label>
                <p>{range.value}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

// <div className="submit-btn-container submit-range-btn-container">
//   <button
//     type="submit"
//     // submit={() => {}}
//     className="submit-btn submit-range-btn"
//   >
//     Submit
//   </button>
// </div>;
