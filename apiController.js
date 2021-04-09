export default function APIController() {
  // controller function:
  const APIController = (function () {
    // variables:
    const clientId = "2dbdf855504348138df7359ca55ff378";
    const clientSecret = "bc5aeca2cdb444dca887fc52dbdefc0a";

    // PRIVATE METHODS
    // get token:
    const _getToken = async () => {
      const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
        },
        body: "grant_type=client_credentials",
      });

      const data = await result.json();
      return data.access_token;
    };
    //

    // this APIController function is an iffy -
    // these () at the end here will cause this function to fire immediatly
  })();

  // // HOW IT WAS WRITTEN IN USEEFFECT IN APP.JS:
  // const APIController = (function () {
  //   // get token:
  //   const _getToken = async () => {
  //     const result = await fetch("https://accounts.spotify.com/api/token", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //         Authorization:
  //           "Basic " +
  //           btoa(
  //             process.env.REACT_APP_CLIENT_ID +
  //               ":" +
  //               process.env.REACT_APP_CLIENT_SECRET
  //           ),
  //       },
  //       body: "grant_type=client_credentials",
  //     });
  //     const data = await result.json();
  //     console.log(data.access_token);
  //     return data.access_token;
  //   };

  //   // this APIController function is an iffy -
  //   // these () at the end here will cause this function to fire immediatly
  // })();

  return (
    <div>
      <div>
        <h1>API CONTROLLER</h1>
      </div>
    </div>
  );
}

// const _getGenres = async (token) => {
//   const result = await fetch(
//     `https://api.spotify.com/v1/browse/categories?locale=sv_US`,
//     {
//       method: "GET",
//       headers: { Authorization: "Bearer " + token },
//     }
//   );

//   const data = await result.json();
//   return data.categories.items;
// };

// const _getPlaylistByGenre = async (token, genreId) => {
//   const limit = 10;

//   const result = await fetch(
//     `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
//     {
//       method: "GET",
//       headers: { Authorization: "Bearer " + token },
//     }
//   );

//   const data = await result.json();
//   return data.playlists.items;
// };

// const _getTracks = async (token, tracksEndPoint) => {
//   const limit = 10;

//   const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
//     method: "GET",
//     headers: { Authorization: "Bearer " + token },
//   });

//   const data = await result.json();
//   return data.items;
// };

// const _getTrack = async (token, trackEndPoint) => {
//   const result = await fetch(`${trackEndPoint}`, {
//     method: "GET",
//     headers: { Authorization: "Bearer " + token },
//   });

//   const data = await result.json();
//   return data;
// };

// return {
//   getToken() {
//     return _getToken();
//   },
//   getGenres(token) {
//     return _getGenres(token);
//   },
//   getPlaylistByGenre(token, genreId) {
//     return _getPlaylistByGenre(token, genreId);
//   },
//   getTracks(token, tracksEndPoint) {
//     return _getTracks(token, tracksEndPoint);
//   },
//   getTrack(token, trackEndPoint) {
//     return _getTrack(token, trackEndPoint);
//   },
// };
