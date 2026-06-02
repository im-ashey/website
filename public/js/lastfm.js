// 43b7021aa792aeb3c66ecdb10846253d

// https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=im-ashey&api_key=43b7021aa792aeb3c66ecdb10846253d&format=json

let name;
let artist;
let album;
let image;

function getData() {
    fetch('https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&limit=1&user=im-ash&api_key=43b7021aa792aeb3c66ecdb10846253d&format=json')
    .then(response => response.json())
    .then(data => {
        name = data["recenttracks"]["track"][0]["name"]
        artist = data["recenttracks"]["track"][0]["artist"]["#text"]
        album = data["recenttracks"]["track"][0]["album"]["#text"]

        document.getElementById('lastfm').innerHTML = `"${name}" by "${artist}" on the "${album}" album.`
    })
}