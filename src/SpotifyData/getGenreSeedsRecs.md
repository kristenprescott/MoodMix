EXAMPLE DATA:

GET RECOMMENDATIONS:
GET https://api.spotify.com/v1/recommendations
INPUT:
seed_genres: classical,country,rap,rock,pop
min_acousticness:0.3
max_acousticness: 0.8
target_acousticness: 0.5
min_danceability: 0.3
max_danceability: 0.8
target_danceability: 0.5
min_energy: 0.3
max_energy: 0.8
target_energy: 0.5
min_key: 0
max_key: 2
target_key: 1
min_mode: 1
max_mode: 0
target_mode: 0
min_popularity: 30
max_popularity: 90
target_popularity: 50
min_tempo: 100
max_tempo: 150
target_tempo: 130
min_valence: 0.3
max_valence: 0.8
target_valence: 0.5

REQUEST:
curl -X "GET" "https://api.spotify.com/v1/recommendations?market=US&seed_genres=classical%2Ccountry%2Crap%2Crock%2Cpop&min_acousticness=0.3&max_acousticness=0.8&target_acousticness=0.5&min_danceability=0.3&max_danceability=0.8&target_danceability=0.5&min_energy=0.3&max_energy=0.8&target_energy=0.5&min_key=0&max_key=2&target_key=1&min_mode=1&max_mode=0&target_mode=0&min_popularity=30&max_popularity=90&target_popularity=50&min_tempo=100&max_tempo=150&target_tempo=130&min_valence=0.3&max_valence=0.8&target_valence=0.5" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQAQvwjCAAQjrmV_7wjk08sCKNbzBVjZuLi0jMKxz7lEOll6t0GAwnA0BAkB_Q9xFpxuYEdSDs7FglFDzhTmESt9-76Vh81BTx1V8MBNC_WTMcbu2eEDP0goYdLjulMrUxOVbpFw8SvP7LC_TaF0YwYvgU1mDLoSOgSvUkdBC9XwF5ZzEjRhSeJ9mXDwhcH09otYKj1wsZESk6M"

INPUT FOR MOCK JSON DATA:
curl -X "GET" "https://api.spotify.com/v1/recommendations?limit=10&market=ES&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQAQvwjCAAQjrmV_7wjk08sCKNbzBVjZuLi0jMKxz7lEOll6t0GAwnA0BAkB_Q9xFpxuYEdSDs7FglFDzhTmESt9-76Vh81BTx1V8MBNC_WTMcbu2eEDP0goYdLjulMrUxOVbpFw8SvP7LC_TaF0YwYvgU1mDLoSOgSvUkdBC9XwF5ZzEjRhSeJ9mXDwhcH09otYKj1wsZESk6M"
