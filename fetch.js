document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/comments";
    const cardsPerRow = 3;
    const cardsPerPage = 15;
    const cardRow = document.getElementById("card-row");

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < cardsPerPage; i += cardsPerRow) {
                const row = document.createElement("div");
                row.className = "card-row";

                for (let j = i; j < i + cardsPerRow && j < cardsPerPage; j++) {
                    const card = document.createElement("div");
                    card.className = "card";
                    card.innerHTML = `
                        <h2>Name: ${data[j].name}</h2>
                        <p>Email: ${data[j].email}</p>
                        <p>Comment: ${data[j].body}</p>
                    `;
                    row.appendChild(card);
                }

                cardRow.appendChild(row);
            }
        })
        .catch((error) => console.error("Error fetching data:", error));
});

document.getElementById('logoutButton').addEventListener('click', function() {
    // Perform logout actions, e.g., clearing user data or redirecting to a login page
    // For example, you can clear user data from local storage:
    localStorage.clear();

    // Redirect to the login page (change the URL as needed)
    window.location.href = "login.html";
});
