import { Link } from "react-router-dom";
import "../../App.css";

export default function Tracklist(props) {
  return (
    <div className="component-container Tracklist-container">
      <h3 className="Title">Tracklist:</h3>
      <div className="flex-container flex-row details-wrapper">
        {props.tracks.map((track, i) => (
          <Link className="grid-container" key={i} to="/track/:id">
            <div
              onClick={() => props.handleTrackClick(track)}
              className="card-container grid-container details-container"
            >
              <div className="track-detail tracklist-wrapper details">
                <label className="sub-title">Artist:</label>
                <div className="track-artist sub-detail">
                  {track.artists[0].name} -{" "}
                </div>
              </div>

              <div className="track-detail tracklist-wrapper details">
                <label className="sub-title">Title:</label>
                <div className="track-title sub-detail">{track.name}</div>
              </div>

              <div className="track-detail tracklist-wrapper details">
                <label className="sub-title">Album</label>
                <div className="track-album sub-detail">{track.album.name}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
