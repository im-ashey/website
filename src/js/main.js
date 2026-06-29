function renderFunStuff() {
    renderQuote();
}

function renderQuote() {
    // nerd
    fetch("../assets/other/quotes.json")
        .then((response) => response.json())
        .then((data) => {
            let quotenum = Math.floor(Math.random() * Object.keys(data).length);
            let quoteDom = document.getElementById("quote");
            console.log(data["quote." + quotenum]['url'])
            if (data["quote." + quotenum]["url"] != undefined) {
                    quoteDom.outerHTML = "<a id='quote'>";
                    quoteDom = document.getElementById("quote");
                    quoteDom.innerHTML =
                        `"${data["quote." + quotenum]["content"]}" - ${data["quote." + quotenum]["author"]}`;
                    quoteDom.href = `${data["quote." + quotenum]["url"]}`;

            } else {
                quoteDom.innerHTML =
                    `"${data["quote." + quotenum]["content"]}" - ${data["quote." + quotenum]["author"]}`;
            }
        })
        .catch((error) => console.error("something broke idk", error));
}
