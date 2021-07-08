# MoodMix

Web-app created with React that uses the Spotify API via the client-credentials-flow for server-to-server authentication to allow users to curate playlists based on genre and view song details for individual tracks.

[Demo](https://kristenprescott.github.io/MoodMix/#/)

---

## Description

|                                                                 Select Genre                                                                  |                                                                               Track Details                                                                                |                                                                                   Tracklist                                                                                    |
| :-------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![app view of dropdown menu to select a genre](https://res.cloudinary.com/dp1pjn2sy/image/upload/v1618207337/MoodMix/select-genre_fv0jgf.png) | ![track details view of app - album image, title, artist, and album title](https://res.cloudinary.com/dp1pjn2sy/image/upload/v1618207337/MoodMix/track-details_r4s2bw.png) | ![tracklist view showing list of different song titles, artists, and album titles](https://res.cloudinary.com/dp1pjn2sy/image/upload/v1618207337/MoodMix/tracklist_puk4bg.png) |

---

## Technologies Used

#### APIs:

- Spotify API using [client credentials flow](https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow) for OAuth

#### Languages:

- HTML
- CSS
- Javascript

#### Libraries/Frameworks:

- React
- Axios

---

## Getting Started

### Installation Instructions:

\*note: will need a Spotify premium account

1. [Fork/Clone Instructions](https://guides.github.com/activities/forking/)
2. Create a new app project at the [Spotify Developer Page](https://developer.spotify.com/dashboard/) - adjust the settings to add a redirect URI (`https://localhost:3000/callback` is common) and grab the Client details(both Client ID and Client Secret) for later use.
3. Create a file called `.env` at the root of the project directory; inside it, add these variables like so:
   ```
   REACT_APP_CLIENT_ID=<yourClientId>
   REACT_APP_CLIENT_SECRET=<yourClientSecret>
   ```
4. To run the app locally, open the root folder in the command line and type `yarn start`, then open `http://localhost:3000`
