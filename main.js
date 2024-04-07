const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "+SNdd9uSkoLvQ20IXNSFcw==QFM4g5TKIJAuw1MV";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke(){
    try {
        jokeEl.innerText = "Updating..."
    btnEl.disabled = true;
    btnEl.innerText = "Loading..."

    const response = await fetch(apiURL, options);
    const data = await response.json();
    jokeEl.innerText = data[0].joke;

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke"
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later";
        btnEl.disabled = true;
        btnEl.innerText = "Tell me a Joke"
    }
    
    
}

btnEl.addEventListener("click", getJoke)