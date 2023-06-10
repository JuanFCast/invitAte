// Constantes
const categorias = [
  { value: "", label: "" },
  { value: "Cumpleaños", label: "Cumpleaños" },
  { value: "Boda", label: "Boda" },
  { value: "Primera Comunion", label: "Primera Comunion" }
];

const eventos = [];

const formulario = document.querySelector("form");

// Obtener referencia al contenedor de eventos
const eventosContainer = document.querySelector(".eventos-container");
formulario.parentNode.insertBefore(eventosContainer, formulario.nextSibling);
eventosContainer.classList.add("eventos-container"); // Movido aquí
const formularioContainer = document.querySelector(".formulario-container");

formularioContainer.parentNode.insertBefore(eventosContainer, formularioContainer.nextSibling);
eventosContainer.classList.add("eventos-container");

// Obtener referencias a los elementos select e input
const categoriaSelect = document.getElementById("categoria");
const ubicacionInput = document.getElementById("ubicacion");

// Llenar el select con las opciones del arreglo
categorias.forEach((categoria) => {
  const option = document.createElement("option");
  option.value = categoria.value;
  option.textContent = categoria.label;
  categoriaSelect.appendChild(option);
});

// Para crear el evento (Cuando se presiona el botón submit)
formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  // Obtener valores del formulario
  const asunto = document.getElementById("asunto").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;
  const ubicacion = document.getElementById("ubicacion").value;
  const descripcion = document.getElementById("descripcion").value;
  const categoria = document.getElementById("categoria").value;

  // Crear objeto de evento
  const evento = {
    title: asunto,
    start: fecha,
    hora: hora,
    ubicacion: ubicacion,
    descripcion: descripcion,
    categoria: categoria
  };

  eventos.push(evento);

  // Mostrar el evento en el contenedor correspondiente
  mostrarEvento(evento);

  // Restablecer el formulario
  formulario.reset();
  localStorage.setItem("eventos", JSON.stringify(eventos));
});


function mostrarEvento(evento) {
  // Crear elemento de evento
  const eventoElement = document.createElement("div");
  eventoElement.classList.add("evento");

  // Crear título del evento
  const titulo = document.createElement("h3");
  const primeraPropiedad = evento[Object.keys(evento)[0]];
  titulo.textContent = primeraPropiedad;
  eventoElement.appendChild(titulo);

  // Crear lista de propiedades del evento
  const lista = document.createElement("ul");

  let isFirstProperty = true;
  for (const propiedad in evento) {
    if (!isFirstProperty) {
      const item = document.createElement("li");
      item.textContent = `${propiedad}: ${evento[propiedad]}`;
      lista.appendChild(item);
    }
    isFirstProperty = false;
  }

  eventoElement.appendChild(lista);

  // Insertar evento en el contenedor de eventos
  eventosContainer.appendChild(eventoElement);
}


//Guardar en el localStorage
