import axios from 'axios';

document.addEventListener("onload", async () => {
    console.log("document loaded, executing request");
    const metrics = await axios("/");
    console.log(metrics);
});