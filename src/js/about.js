const username = "ash"; // change the username!!!
const posts_url = "https://cafe.frizzbees.dev/get_posts/1?name=";
const profile_url = "https://social.nekoweb.org/profile/?view=";
const post_url = "https://social.nekoweb.org/post/?id=";

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
                <p class="status" id="nekocafe-text"><a href="${post_url + json["id"]}">${json["post"]}</a></p>
                <p id="nekocafe-time">${time}</p>
            `; // make sure the height on the img fits your page!!!
        }
    } catch (error) {
        console.error(error);
    }
})();