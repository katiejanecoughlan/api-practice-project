const API_KEY = "IoXZP7iy1_bWkN--LzjwECapZCU";
const API_URL = "IoXZP7iy1_bWkN--LzjwECapZCU";
cont resultsModal = new bootstrap.Modal(document.getElementById("resultsModeal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        console.log(data);
    }
}