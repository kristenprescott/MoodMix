import { useState } from "react";
import "../../App.css";

export default function DropdownMenu(props) {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div className="menu">
      <select
        className="menu-item select"
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        {/* {data.map((item, i) => ( */}
        {props.options.map((item, i) => (
          // <option key={i} value={item.id}>
          <option className="menu-selection option" key={i} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      <p>{selectedValue}</p>
    </div>
  );
}
