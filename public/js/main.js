let buttons = ["home", "about", "music", "webrings", "contact"];

function quote() {
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

function resizeIframe(obj) {
    // THANK YOU https://stackoverflow.com/a/9976309 !!!
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 5 + "px";
}

function resetNav() {
    for (let i = 0; i < buttons.length; i++) {
        document.getElementById(buttons[i]).style.fontWeight = "normal";
        document.getElementById(buttons[i]).style.textDecoration = "none";
    }
}

function changeFrame(page, button) {
    document.getElementById("page").src = page;
    resetNav();
    document.getElementById(button).style.fontWeight = "bold";
    document.getElementById(button).style.textDecoration = "underline";
}
