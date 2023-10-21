// signup.js

// Function to validate the form
function validateForm() {
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const confirmPassword = document.querySelector('input[name="confirmPassword"]').value;

    // Check if the password and confirm password match
    if (password !== confirmPassword) {
        document.querySelector('.error.error-txt#passwordError').style.display = 'block';
        return false;
    }

    // Store user data in local storage
    const user = {
        email: email,
        password: password,
    };

    // Check if local storage is available
    if (typeof(Storage) !== "undefined") {
        // Retrieve existing users or initialize an empty array
        let users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Add the new user
        users.push(user);

        // Store the updated users in local storage
        localStorage.setItem('users', JSON.stringify(users));
    }

    return true;
}
