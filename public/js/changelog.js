// https://api.github.com/repos/im-ashey/website/commits

function renderChanges() {
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
