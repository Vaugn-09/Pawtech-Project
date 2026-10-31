const authForms = document.querySelectorAll("#login-form, #signup-form");
const loadingScreen = document.querySelector("#auth-loading");

authForms.forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const submitButton = form.querySelector('button[type="submit"]');
        if (!submitButton || !loadingScreen) {
            throw new Error("The authentication loading UI is missing.");
        }

        loadingScreen.hidden = false;
        loadingScreen.setAttribute("aria-hidden", "false");
        submitButton.disabled = true;

        window.setTimeout(() => {
            window.location.assign("dashboard.html");
        }, 900);
    });
});
