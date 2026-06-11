function renderFunStuff() {
    renderQuote();
    renderCounts();
}

function renderQuote() {
    // nerd
    fetch("../assets/other/quotes.json")
        .then((response) => response.json())
        .then((data) => {
            let quotenum = Math.floor(Math.random() * Object.keys(data).length);
            const quoteDom = document.getElementById("quote");
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

function renderCounts() {
    // 3ob0irevb5i4tq3xc5goz8f3v456svdmqen71pz8hg28urzq1
    // https://stats.ashey.me/api/v0/stats/total

    fetch('https://stats.ashey.me/api/v0/stats/total', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer 3ob0irevb5i4tq3xc5goz8f3v456svdmqen71pz8hg28urzq1",
    }
    })
    .then((response) => response.json())
    .then ((data) => {
        const counterDOM = document.querySelector('p#count')
        const hitCount = data['total']

        counterDOM.innerHTML = `this website has been visited ${hitCount} times`
    })

}