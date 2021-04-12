import { Link } from "react-router-dom";

export default function Tracklist(props) {
  return (
    <div className="component-container">
      <h3 className="Title">Tracklist:</h3>
      <div className="flex-container flex-row">
        {props.tracks.map((track, i) => (
          <Link key={i} to="/track/:id">
            <div
              onClick={() => props.handleTrackClick(track)}
              className=" grid-container details-container"
            >
              <div className="track-detail tracklist-wrapper">
                <label className="sub-title">Artist:</label>
                <div>{track.artists[0].name} - </div>
              </div>

              <div className="track-detail tracklist-wrapper">
                <label className="sub-title">Title:</label>
                <div>{track.name}</div>
              </div>

              <div className="track-detail tracklist-wrapper">
                <label className="sub-title">Album</label>
                <div>{track.album.name}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
