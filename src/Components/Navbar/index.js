import "./style.css";
// import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
// import Searchbar from "../Searchbar";
// import DropdownMenu from "../DropdownMenu";

export default function Navbar() {
  //
  return (
    <nav className="Nav container">
      {/* <div className="container nav-container"> */}

      <div className="logo title nav-container">
        <img className="logo" src={logo} alt="spotify logo" width="150" />
        {/* <img className="logo" src="" alt="" width="150" /> */}
        <div className="moodmix">MoodMix</div>
        {/* <Link className="moodmix" to="/">
          MoodMix
        </Link> */}
      </div>

      {/* </div> */}

      <div className="container nav-container">
        {/* <Searchbar /> */}
        {/* <DropdownMenu /> */}
      </div>
    </nav>
  );
}
