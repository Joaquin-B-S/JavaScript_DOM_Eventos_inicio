// Seleccionar contenido

// Query Selector
const titulo = document.querySelector("h1");
titulo.textContent = "Hola desde JavaScript";
// Agregar clase al elemento
titulo.classList.add("text-center");
// Agregar estilo al elemento
titulo.style.color = "red";

// Mostrar contenido en consola
console.log(titulo);

// Query Selector All
const enlaces = document.querySelectorAll("a");
enlaces.forEach((enlace) => {
    enlace.textContent = "Nuevo enlace";
    enlace.classList.add("text-decoration-none");
});
// Agregar evento a un elemento
const boton = document.querySelector("#boton");
boton.addEventListener("click", () => {
    alert("Hola desde el botón");
});
// Agregar evento a un elemento con parámetro
const boton2 = document.querySelector("#boton2");
boton2.addEventListener("click", (e) => {
    e.preventDefault(); // Evitar el comportamiento por defecto del enlace
    alert("Hola desde el botón 2");
});

// Get Element By Id
const titulo2 = document.getElementById("titulo2");
titulo2.textContent = "Hola desde JavaScript con getElementById";
// Agregar clase al elemento
titulo2.classList.add("text-center");
// Agregar estilo al elemento
titulo2.style.color = "blue";
// Mostrar contenido en consola
console.log(titulo2);

// Crear un elemento
const nuevoElemento = document.createElement("p");
nuevoElemento.textContent = "Este es un nuevo párrafo creado desde JavaScript.";
// Agregar el nuevo elemento al DOM
const contenedor = document.querySelector("#contenedor");
contenedor.appendChild(nuevoElemento);
// Eliminar un elemento
const elementoAEliminar = document.querySelector("#elemento-a-eliminar");
if (elementoAEliminar) {
    elementoAEliminar.remove();
}
// Modificar el contenido de un elemento
const elementoAModificar = document.querySelector("#elemento-a-modificar");
if (elementoAModificar) {
    elementoAModificar.textContent =
        "Este contenido ha sido modificado desde JavaScript.";
}

// Eventos
// Evento de mouseover
const elementoHover = document.querySelector("#elemento-hover");
elementoHover.addEventListener("mouseover", () => {
    elementoHover.style.backgroundColor = "lightblue";
});
// Evento de mouseout
elementoHover.addEventListener("mouseout", () => {
    elementoHover.style.backgroundColor = "";
});
// Evento de cambio de valor en un input
const inputTexto = document.querySelector("#input-texto");
inputTexto.addEventListener("input", (e) => {
    console.log("Valor del input:", e.target.value);
});
// Evento de envío de formulario
const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Evitar el envío del formulario
    const datos = new FormData(formulario);
    console.log("Datos del formulario:", Object.fromEntries(datos.entries()));
});
// Evento de cambio de selección en un select
const selectOpciones = document.querySelector("#select-opciones");
selectOpciones.addEventListener("change", (e) => {
    console.log("Opción seleccionada:", e.target.value);
});
// Evento de teclado
const inputTeclado = document.querySelector("#input-teclado");
inputTeclado.addEventListener("keydown", (e) => {
    console.log("Tecla presionada:", e.key);
});
// Evento de doble clic
const elementoDobleClick = document.querySelector("#elemento-doble-click");
elementoDobleClick.addEventListener("dblclick", () => {
    alert("¡Has hecho doble clic en este elemento!");
});
// Evento de cambio de tamaño de ventana
window.addEventListener("resize", () => {
    console.log(
        "Tamaño de ventana cambiado:",
        window.innerWidth,
        "x",
        window.innerHeight
    );
});
// Evento de scroll
window.addEventListener("scroll", () => {
    console.log("Posición de scroll:", window.scrollY);
});
// Evento de carga de la página
window.addEventListener("load", () => {
    console.log("Página cargada completamente");
});
// Evento de enfoque en un input
const inputEnfoque = document.querySelector("#input-enfoque");
inputEnfoque.addEventListener("focus", () => {
    console.log("Input enfocado");
});
// Evento de desenfoque en un input
inputEnfoque.addEventListener("blur", () => {
    console.log("Input desenfocado");
});
