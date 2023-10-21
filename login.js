// login.js

// Function to validate and log in the user
function login() {
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="loginPassword"]').value; // Use a unique name

    // Check if local storage is available
    if (typeof(Storage) !== "undefined") {
        // Retrieve users from local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Find a user with the provided email and password
        const user = users.find((u) => u.email === email && u.password === password);

        if (user) {
            // Successful login, redirect to the desired page (e.g., "todo.html")
            window.location.href = "todo.html";
        } else {
            // Display an error message for incorrect login
            alert("Invalid email or password. Please try again.");
        }
    } else {
        alert("Local storage is not supported by your browser. Please use a different browser to log in.");
    }
}
