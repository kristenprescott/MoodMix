import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./Navbar.css";
// import Searchbar from "../Searchbar";

export default function Navbar() {
  //
  return (
    <nav>
      <div className="title-logo">
        <img className="logo" src={logo} alt="spotify logo" width="150" />
        <Link className="moodmix" to="/">
          MoodMix
        </Link>
      </div>

      {/* <Searchbar /> */}
    </nav>
  );
}
