import "../../App.css";

export default function TrackDetails(props) {
  console.log(props.selectedTrack);
  return (
    <div className="component-container flex-container flex-col track-details">
      <div className="card-container square-wrapper album-img">
        <img
          src={props.selectedTrack.album.images[0].url}
          className="square "
        />
      </div>
      <div className="sub-title track-name">{props.selectedTrack.name}</div>
      <div className="track-artist">
        by {props.selectedTrack.artists[0].name}
      </div>
      <div className="track-album">Album: {props.selectedTrack.album.name}</div>
    </div>
  );
}
