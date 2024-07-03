document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('registrationForm');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const address = document.getElementById('address');
    const dob = document.getElementById('dob');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const addressError = document.getElementById('addressError');
    const dobError = document.getElementById('dobError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    
    form.addEventListener('submit', function (event) {
        let isValid = true;
        
        // Name validation
        if (fullName.value.length < 5) {
            nameError.textContent = "Name must be at least 5 characters long.";
            nameError.style.display = "block";
            isValid = false;
        } else {
            nameError.style.display = "none";
        }
        
        // Email validation
        if (!email.value.includes('@')) {
            emailError.textContent = "Enter a valid email.";
            emailError.style.display = "block";
            isValid = false;
        } else {
            emailError.style.display = "none";
        }
        
        // Phone validation
        if (phone.value === '123456789' || !/^\d{10}$/.test(phone.value)) {
            phoneError.textContent = "Enter a valid 10-digit phone number.";
            phoneError.style.display = "block";
            isValid = false;
        } else {
            phoneError.style.display = "none";
        }

        // Address validation
        if (address.value.trim() === '') {
            addressError.textContent = "Address is required.";
            addressError.style.display = "block";
            isValid = false;
        } else {
            addressError.style.display = "none";
        }

        // Date of birth validation
        if (dob.value === '') {
            dobError.textContent = "Date of Birth is required.";
            dobError.style.display = "block";
            isValid = false;
        } else {
            dobError.style.display = "none";
        }
        
        // Password validation
        if (password.value.length < 8 || password.value.toLowerCase() === 'password' || password.value.toLowerCase() === fullName.value.toLowerCase()) {
            passwordError.textContent = "Password must be at least 8 characters long and cannot be 'password' or the user's name.";
            passwordError.style.display = "block";
            isValid = false;
        } else {
            passwordError.style.display = "none";
        }
        
        // Confirm password validation
        if (password.value !== confirmPassword.value) {
            confirmPasswordError.textContent = "Passwords do not match.";
            confirmPasswordError.style.display = "block";
            isValid = false;
        } else {
            confirmPasswordError.style.display = "none";
        }
        
        if (!isValid) {
            event.preventDefault();
        }
    });
});
