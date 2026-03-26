function checkPassword() {
    let password = document.getElementById("password").value;
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[@#$%^&*!]/.test(password)) strength++;

    let result = document.getElementById("result");
    let bar = document.getElementById("strength-bar");

    if (strength <= 2) {
        result.innerText = "Weak ❌";
        bar.style.width = "30%";
        bar.style.background = "red";
    } 
    else if (strength <= 4) {
        result.innerText = "Medium ⚠️";
        bar.style.width = "60%";
        bar.style.background = "orange";
    } 
    else {
        result.innerText = "Strong ✅";
        bar.style.width = "100%";
        bar.style.background = "green";
    }
}

function suggestPassword() {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const special = "@#$%^&*!";
    const all = uppercase + lowercase + numbers + special;

    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += special[Math.floor(Math.random() * special.length)];

    for (let i = 4; i < 14; i++) {
        password += all[Math.floor(Math.random() * all.length)];
    }

    password = password.split('').sort(() => Math.random() - 0.5).join('');

    document.getElementById("password").value = password;
    document.getElementById("password").type = "text";

    checkPassword();
}

function checkPassword() {
    let password = document.getElementById("password").value;
    let strength = 0;

    const lengthOK = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[@#$%^&*!]/.test(password);

    if (lengthOK) strength++;
    if (hasUpper) strength++;
    if (hasLower) strength++;
    if (hasNumber) strength++;
    if (hasSpecial) strength++;

    document.getElementById("c-length").className = lengthOK ? "valid" : "invalid";
    document.getElementById("c-upper").className = hasUpper ? "valid" : "invalid";
    document.getElementById("c-lower").className = hasLower ? "valid" : "invalid";
    document.getElementById("c-number").className = hasNumber ? "valid" : "invalid";
    document.getElementById("c-special").className = hasSpecial ? "valid" : "invalid";

    let result = document.getElementById("result");
    let bar = document.getElementById("strength-bar");

    if (strength <= 2) {
        result.innerText = "Weak ❌";
        bar.style.width = "25%";
        bar.style.background = "red";
    } else if (strength <= 4) {
        result.innerText = "Medium ⚠️";
        bar.style.width = "65%";
        bar.style.background = "orange";
    } else {
        result.innerText = "Strong ✅";
        bar.style.width = "100%";
        bar.style.background = "green";
    }
}