const navDom = document.querySelectorAll("ul.nav")[0];
const navButtons = navDom['children']['length'];
let buttonList = [];

function getButtons() {
    for (i = 0; i < navButtons; i++) {
        buttonList.push(navDom['children'][i]['firstChild']['id'])
    }
}

function renderQuote() {
    // nerd
    fetch("../assets/other/quotes.json")
        .then((response) => response.json())
        .then((data) => {
            let quotenum = Math.floor(Math.random() * Object.keys(data).length);
            if (data["quote." + quotenum]["url"]) {
                document.getElementById("quote").outerHTML = "<a id='quote'>";
                document.getElementById("quote").innerHTML =
                    `"${data["quote." + quotenum]["content"]}" - ${data["quote." + quotenum]["author"]}`;
                document.getElementById("quote").href = `${data["quote." + quotenum]["url"]}`;
            } else {
                document.getElementById("quote").innerHTML =
                    `"${data["quote." + quotenum]["content"]}" - ${data["quote." + quotenum]["author"]}`;
            }
        })
        .catch((error) => console.error("something broke idk", error));
}

function renderPage(button) {
    getButtons();

    for (i = 0; i < buttonList.length; i++) {
        document.getElementById(buttonList[i].slice(0, buttonList[i].indexOf('-button'))).hidden = true
    }

    document.getElementById(button).hidden = false

    for (let i = 0; i < buttonList.length; i++) {
        document.getElementById(buttonList[i]).style.fontWeight = "normal";
        document.getElementById(buttonList[i]).style.textDecoration = "none";
    }
    document.getElementById(button + '-button').style.fontWeight = "bold";
    document.getElementById(button + '-button').style.textDecoration = "underline";
}

// https://api.github.com/repos/im-ashey/website/commits

function renderChangelog() {
    const commitsDom = document.getElementById("commits");

    fetch("https://api.github.com/repos/im-ashey/website/commits")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            for (commitNum = 0; commitNum < 10; commitNum++) {
                const newHtml = `
                <p>Author: ${data[commitNum]["commit"]["author"]["name"]}</p>
                <p>Commit: ${data[commitNum]["commit"]["message"]}</p>
                <p>Time: ${data[commitNum]["commit"]["author"]["date"]}</p>
                <p>SHA: ${data[commitNum]["sha"]}</p>
                <hr />
            `;
                commitsDom.insertAdjacentHTML("beforeend", newHtml);
            }
        });
}

// 43b7021aa792aeb3c66ecdb10846253d
// https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=im-ashey&api_key=43b7021aa792aeb3c66ecdb10846253d&format=json

function renderLastFM() {
    fetch("https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&limit=1&user=im-ash&api_key=43b7021aa792aeb3c66ecdb10846253d&format=json")
        .then((response) => response.json())
        .then((data) => {
            const name = data["recenttracks"]["track"][0]["name"];
            const artist = data["recenttracks"]["track"][0]["artist"]["#text"];
            const album = data["recenttracks"]["track"][0]["album"]["#text"];

            document.getElementById("lastfm").innerHTML = `"${name}" by "${artist}" on the "${album}" album.`;
        });
}

// thanks max
function renderStatus() {
    const username = "ash"; // change the username!!!
    const posts_url = "https://cafe.frizzbees.dev/get_posts/1?name=";
    const profile_url = "https://social.nekoweb.org/profile/?view=";
    const post_url = "https://social.nekoweb.org/post/?id=";
    (async () => {
        try {
            const request = await fetch(posts_url + username);
            let json = await request.json();
            json = json[0];

            timestamp = json["timestamp"] * 1000;
            time = new Date(timestamp).toUTCString();

            div = document.getElementById("nekocafe-status");

            div.innerHTML = `
                <p id="nekocafe-text"><a href="${post_url + json["id"]}">${json["post"]}</a></p>
                <p id="nekocafe-time">${time}</p>
            `; // make sure the height on the img fits your page!!!
        } catch (error) {
            console.error(error);
        }
    })();
}

var cssRoot = document.querySelector(":root");
let theme;

function checkTheme() {
    theme = localStorage.getItem("theme");

    if (theme == null) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setDark();
        } else {
            setLight();
        }
    } else {
        if (theme == "dark") {
            setDark();
        } else {
            setLight();
        }
    }
}

function setSavedTheme(input) {
    if (input == "dark") {
        localStorage.setItem("theme", "dark");
        location.reload();
    } else {
        localStorage.setItem("theme", "light");
        location.reload();
    }
}

function setLight() {
    cssRoot.style.setProperty("--bkg-color", "#FFFFFF");
    cssRoot.style.setProperty("--fnt-color", "#7f0000");
    cssRoot.style.setProperty("--lnk-color", "#df0000");
}

function setDark() {
    cssRoot.style.setProperty("--bkg-color", "#000000");
    cssRoot.style.setProperty("--fnt-color", "#007f00");
    cssRoot.style.setProperty("--lnk-color", "#00df00");
}