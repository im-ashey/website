// 43b7021aa792aeb3c66ecdb10846253d
// https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=im-ashey&api_key=43b7021aa792aeb3c66ecdb10846253d&format=json

fetch(
    "https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&limit=1&user=im-ash&api_key=43b7021aa792aeb3c66ecdb10846253d&format=json"
)
    .then((response) => response.json())
    .then((data) => {
        const name = data["recenttracks"]["track"][0]["name"];
        const artist = data["recenttracks"]["track"][0]["artist"]["#text"];
        const album = data["recenttracks"]["track"][0]["album"]["#text"];

        const lastFMDOM = document.getElementById("lastfm");

        if (lastFMDOM) {
            lastFMDOM.innerHTML = `"${name}" by "${artist}" on the "${album}" album.`;
        }
    })
    .catch((error) => console.error("something broke idk", error));