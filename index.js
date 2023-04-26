import getMetrics from "./getMetrics.js";

console.log(metrics);

document.addEventListener("DOMContentLoaded", async () => {
    const metrics = await getMetrics();

    const tiktokFollowers = document.getElementById("followers");
    tiktokFollowers.innerText = metrics[1];

    const tiktokLikes = document.getElementById("tiktokLikes");
    tiktokLikes.innerText = metrics[2];
});