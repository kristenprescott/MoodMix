export default function TrackDetails(props) {
  console.log(props.selectedTrack);
  return (
    <div className="flex-container flex-col track-details">
      <img
        src={props.selectedTrack.album.images[0].url}
        className="album-image"
      />
      <div className="sub-title flex-child">{props.selectedTrack.name}</div>
      <div className="flex-child">by {props.selectedTrack.artists[0].name}</div>
      <div className="flex-child">Album: {props.selectedTrack.album.name}</div>
    </div>
  );
}
