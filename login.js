function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Recuperamos el email y la contraseña del almacenamiento local.
    var registeredEmail = localStorage.getItem('email');
    var registeredPassword = localStorage.getItem('password');

    // Comprobamos si el email y la contraseña ingresados coinciden con los registrados.
    if(email === registeredEmail && password === registeredPassword) {
        alert('Ingreso exitoso');
        // Aquí deberías redirigir al usuario a su página de inicio o similar
    } else {
        alert('Correo o contraseña incorrecta');
    }
}
