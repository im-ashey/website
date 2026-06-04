const navDom = document.querySelectorAll("ul.nav")[0];
let navButtons: number = 0;
if (navDom) {
    navButtons = navDom["children"]["length"];
}
let buttonList: any[];

const items = ["bkg", "fnt", "lnk"];
const lightColors = ["#FFFFFF", "#7f0000", "#df0000"];
const darkColors = ["#000000", "#007f00", "#00df00"];

const cssRoot: HTMLElement | null = document.querySelector(":root");

const username = "ash"; // change the username!!!
const posts_url = "https://cafe.frizzbees.dev/get_posts/1?name=";
const profile_url = "https://social.nekoweb.org/profile/?view=";
const post_url = "https://social.nekoweb.org/post/?id=";

function getButtons() {
    buttonList.length = 0;
    for (let i = 0; i < navButtons; i++) {
        if (buttonList) {
            if (navDom && navDom["children"]) {
                buttonList.push(navDom["children"][i]["firstChild"]["id"]);
            }
            
        }
        
    }
}

function renderQuote() {
    // nerd
    fetch("../assets/other/quotes.json")
        .then((response) => response.json())
        .then((data) => {
            let quotenum = Math.floor(Math.random() * Object.keys(data).length);
            const quoteDom: HTMLAnchorElement | null = document.querySelector("a#quote");
            if (data["quote." + quotenum]["url"]) {
                if (quoteDom) {
                    quoteDom.outerHTML = "<a id='quote'>";
                    quoteDom.innerHTML =
                        `"${data["quote." + quotenum]["content"]}" - ${data["quote." + quotenum]["author"]}`;
                    quoteDom.href = `${data["quote." + quotenum]["url"]}`;
                }

            } else {
                if (quoteDom) {
                quoteDom.innerHTML =
                    `"${data["quote." + quotenum]["content"]}" - ${data["quote." + quotenum]["author"]}`;
                }
            }
        })
        .catch((error) => console.error("something broke idk", error));
}

function renderPage(button: string) {
    getButtons();
    let pageID: HTMLElement | null
    let buttomDom: HTMLElement | null

    for (let i = 0; i < buttonList.length; i++) {
        pageID = document.getElementById(buttonList[i].slice(0, buttonList[i].indexOf("-button")))
        if (pageID) {
            pageID.hidden = true;
        }
    }
    const pageDom = document.getElementById(button);

    if (pageDom) {
        pageDom.hidden = false;
    }

    for (let i = 0; i < buttonList.length; i++) {
        buttomDom = document.getElementById(buttonList[i]);
        if (buttomDom) {
            buttomDom.style.fontWeight = "normal";
            buttomDom.style.textDecoration = "none";
        }

    }
    buttomDom = document.getElementById(button + "-button");
    if (buttomDom) {
        buttomDom.style.fontWeight = "bold";
        buttomDom.style.textDecoration = "underline";
    }

}

// https://api.github.com/repos/im-ashey/website/commits

function renderChangelog() {
    const commitsDom = document.getElementById("commits");

    fetch("https://api.github.com/repos/im-ashey/website/commits")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            for (let commitNum = 0; commitNum < 10; commitNum++) {
                const newHtml = `
                <p>Author: ${data[commitNum]["commit"]["author"]["name"]}</p>
                <p>Commit: ${data[commitNum]["commit"]["message"]}</p>
                <p>Time: ${data[commitNum]["commit"]["author"]["date"]}</p>
                <p>SHA: ${data[commitNum]["sha"]}</p>
                <hr />
            `;
            if (commitsDom) {
                commitsDom.insertAdjacentHTML("beforeend", newHtml);
            }
            }
        });
}

// 43b7021aa792aeb3c66ecdb10846253d
// https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=im-ashey&api_key=43b7021aa792aeb3c66ecdb10846253d&format=json

function renderLastFM() {
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
}

// thanks max
function renderStatus() {
    (async () => {
        try {
            const request = await fetch(posts_url + username);
            let json = await request.json();
            json = json[0];

            const timestamp = json["timestamp"] * 1000;
            const time = new Date(timestamp).toUTCString();

            const div = document.getElementById("nekocafe-status");

            if (div) {
                div.innerHTML = `
                    <p id="nekocafe-text"><a href="${post_url + json["id"]}">${json["post"]}</a></p>
                    <p id="nekocafe-time">${time}</p>
                `; // make sure the height on the img fits your page!!!
            }
        } catch (error) {
            console.error(error);
        }
    })();
}

function checkTheme() {
    const theme = localStorage.getItem("theme");

    if (theme == null) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            renderTheme("dark");
        } else {
            renderTheme("light");
        }
    } else {
        if (theme == "dark") {
            renderTheme("dark");
        } else {
            renderTheme("light");
        }
    }
}

function setSavedTheme(input: string) {
    if (input == "dark") {
        localStorage.setItem("theme", "dark");
        checkTheme();
    } else {
        localStorage.setItem("theme", "light");
        checkTheme();
    }
}

function renderTheme(theme: string) {
    if (theme == "dark") {
        for (let i = 0; i < items.length; i++) {
            if (cssRoot) {
                cssRoot.style.setProperty("--" + `${items[i]}` + "-color", `${darkColors[i]}`);
            }
        }
    } else if (theme == "light") {
        for (let i = 0; i < items.length; i++) {
            if (cssRoot) {
                cssRoot.style.setProperty("--" + `${items[i]}` + "-color", `${lightColors[i]}`);
            }
        }
    } else {
        console.log("theme not defined!");
    }
}
