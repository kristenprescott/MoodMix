import { useState } from "react";

export default function RangeSlider(props) {
  // hooks:
  const [selectedValue, setSelectedValue] = useState([]);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);

    console.log("CHILD selected value: ", e.target.name, e.target.value);
  };

  return (
    <div className="slider-component">
      <h3>Choose your mood:</h3>
      <div value={selectedValue}>
        {props.rangeData.map((item) => (
          <div key={item.id} value={item.name}>
            <label>{item.min_label}</label>
            <input
              name={item.name}
              id={item.id}
              type={item.type}
              min={item.min}
              max={item.max}
              step={item.step}
              className={item.className}
              // value={item.value}
              onChange={handleChange}
            ></input>
            <label>{item.max_label}</label>
            <p>{selectedValue}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
