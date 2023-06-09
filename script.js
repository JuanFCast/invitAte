document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        displayErrorMessage("Las contraseñas no coinciden");
        return;
    }

    // Aquí puedes añadir el código para realizar el registro de usuario.

    // Restablecer los valores de los campos
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
    document.getElementById('confirm-password').value = "";
});

function displayErrorMessage(message) {
    var errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
}
