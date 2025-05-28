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
