// https://api.github.com/repos/im-ashey/website/commits

const commitsDom = document.getElementById("commits");

fetch("https://api.github.com/repos/im-ashey/website/commits")
    .then((response) => response.json())
    .then((data) => {
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