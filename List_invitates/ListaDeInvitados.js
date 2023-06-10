// Objeto para representar la lista de invitados
var listaInvitados = {
    nombre: "",
    participantes: [],

    crear: function (nombreLista) {
        this.nombre = nombreLista;
        document.getElementById("invitadosForm").style.display = "block";
        document.getElementById("listaInvitados").style.display = "block";
        document.getElementsByTagName("button")[0].disabled = true;
        document.getElementById("tituloLista").innerHTML = this.nombre;
    },

    agregarParticipante: function (participante) {
        this.participantes.push(participante);
        this.actualizarLista();
    },

    eliminarParticipante: function (index) {
        var participanteEliminado = this.participantes[index];
        this.participantes.splice(index, 1);

        // Elimina el participante del array participantesAgregados
        var indice = participantesAgregados.indexOf(participanteEliminado);
        if (indice !== -1) {
            participantesAgregados.splice(indice, 1);
        }

        this.actualizarLista();
    },

    actualizarLista: function () {
        var lista = document.getElementById("listaInvitados");
        lista.innerHTML = "";

        for (var i = 0; i < this.participantes.length; i++) {
            var nuevoParticipante = document.createElement("li");
            nuevoParticipante.innerHTML = this.participantes[i];

            var botonEliminar = document.createElement("button");
            botonEliminar.innerHTML = "Eliminar";
            botonEliminar.setAttribute("onclick", "listaInvitados.eliminarParticipante(" + i + ")");
            nuevoParticipante.appendChild(botonEliminar);

            lista.appendChild(nuevoParticipante);
        }
    }
};

//Objeto para guardar a los participantes que se van agregando a la lista
var participantesAgregados = [];


// Función para crear la lista de invitados
function crearLista() {
    var nombreLista = document.getElementById("nombreLista").value;
    listaInvitados.crear(nombreLista);

    // Mostrar el formulario y la lista de invitados
    document.getElementById("invitadosForm").style.display = "block";
    document.getElementById("listaInvitados").style.display = "block";

    // Mostrar el botón de enviar invitaciones
    document.getElementById("btnEnviarInvitaciones").style.display = "block";
}

// Función para agregar participantes a la lista
function agregarParticipantes() {
    var select = document.getElementById("participantes");

    for (var i = 0; i < select.options.length; i++) {
        var option = select.options[i];
        if (option.selected) {
            var nombreParticipante = option.value;

            if (participantesAgregados.includes(nombreParticipante)) {
                // El participante ya ha sido agregado, muestra un mensaje de error
                alert("El participante ya ha sido agregado a la lista.");
                continue; // Salta a la siguiente iteración del bucle
            }
            listaInvitados.agregarParticipante(option.value);
            participantesAgregados.push(option.value);
        }
    }

    select.selectedIndex = -1;
}

function enviarInvitaciones() {
    // Aquí puedes agregar la lógica para enviar las invitaciones

    alert("Se han enviado las invitaciones");
}
