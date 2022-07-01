const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "tushar" && password === "sysadmin") {
        window.location.href="https://iptv-world.github.io/core/test/";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
