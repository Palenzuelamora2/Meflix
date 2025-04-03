/**
 * CARD DE IMAGENES
 */
function mostrarImagenes(peliculas) {
    const contenedorcards = document.getElementById("card");

    // Limpiar el contenedor antes de agregar nuevas películas
    contenedorcards.innerHTML = "";

    // Iterar solo sobre las primeras 24 películas
    peliculas.slice(0, 30).forEach(pelicula => {  // Esto limita a 24 películas
        const cards = document.createElement("div");
        cards.className = "card tarjeta";
        
        // Crear la imagen y agregarla a la card
        const img = document.createElement("img");
        img.src = pelicula.imagen;
        img.alt = pelicula.titulo;

        // Crear el contenedor de los detalles (título y descripción)
        const detalles = document.createElement("div");
        detalles.className = "detalles";
        detalles.innerHTML = `
            <p style="font-size: 15px;">${pelicula.titulo}<br>
            Duracion: ${pelicula.duracion} min<br>
            <p style="font-size: 12px; text-align: justify;">${pelicula.descripcion}</p>
            <p style="width: 100px; font-size: 25px;">
                <i class="bi bi-play-circle-fill icon"></i>
                <i class="bi bi-pause-circle-fill icon"></i>
                <i class="bi bi-star-fill icon"></i>
            </p>
            <button onclick="window.location.href='detalle.html'">VER PELÍCULA</button>

        `;

        // Añadir la imagen y los detalles a la card
        cards.appendChild(img);
        cards.appendChild(detalles);

        // Agregar la card al contenedor principal
        contenedorcards.appendChild(cards);
    });
}

function cargarPeliculasIniciales() {
    fetch("peliculas.json")
    .then((response) => {
        return response.json();  // Parsear la respuesta JSON
    })
    .then((data) => {
        mostrarImagenes(data);  // Mostrar todas las películas
    })
    .catch((error) => {
        console.error(error);
    });
}

// Cargar 24 películas al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    cargarPeliculasIniciales();  // Llamar a la función para cargar las 24 primeras películas
});

//-------------------------------------------------------------------------------------------

/**
 * PELICULAS PRIMER PLANO.
 */

function primerPlano(){
    fetch("peliculas.json")
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        if(data.length > 0){
            mostrarImagenes(data);
        }else{
            alert("No hay más películas");
        }

    })
}

const btn_primerPlano = document.querySelector(".primer_plano");
btn_primerPlano.addEventListener("click" , () =>{
    primerPlano();
})





//-------------------------------------------------------------------------------------------


/**
 * PELICULAS ACCION
 */
function mostrarAccion(){
    fetch("peliculas.json")
    .then((response) => {
        return response.json();  // Parsear la respuesta JSON
    })
    .then((data) => {
        const peliculas_accion = data.filter(pelicula => pelicula.genero === "Accion");
        if (peliculas_accion.length > 0) {
            mostrarImagenes(peliculas_accion); // Llamar a la función con las películas filtradas de acción
        } else {
            console.log("No hay películas de acción.");
        }
    })
    .catch((error) => {
        console.error(error);
    });
}

// Agregar el evento al botón de acción
const btn_accion = document.querySelector(".accion");
btn_accion.addEventListener("click", () => {
    mostrarAccion();  // Mostrar las películas de acción cuando se hace clic en el botón
});


//-----------------------------------------------------------------------------

/**
 * PELICULAS AVENTURA
 */

function mostrarAventura(){
    fetch("peliculas.json")
    .then((response) => {
        return response.json();
    })
    .then((data) =>{
        const peliculas_aventura = data.filter(pelicula => pelicula.genero === "Aventura");
        if(peliculas_aventura.length > 0){
            mostrarImagenes(peliculas_aventura);
        } else{
            console.log("No hay películas de aventura");
        }
    })
    .catch((error) => {
        console.error(error);
    })
}

const btn_aventura = document.querySelector(".aventura");
btn_aventura.addEventListener("click" , () =>{
    mostrarAventura();
})


//-----------------------------------------------------------------------------

/**
 * PELICULAS COMEDIA
 */

function mostrarComedia(){
    fetch("peliculas.json")
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        const peliculas_comedia = data.filter(pelicula => pelicula.genero === "Comedia");
        if(peliculas_comedia.length > 0){
            mostrarImagenes(peliculas_comedia)
        } else{
            console.log("No hay películas de comedia");
        }
    })
    .catch((error) =>{
        console.error(error);
    })
}

const btn_comedia = document.querySelector(".comedia");
btn_comedia.addEventListener("click" , ()=>{
    mostrarComedia();
})


//-----------------------------------------------------------------------------


/**
 * PELICULAS CIENCIA FICCION
 */

function mostrarFiccion(){
    fetch("peliculas.json")
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        const peliculas_ficcion = data.filter(pelicula => pelicula.genero === "Ciencia ficcion");
        if(peliculas_ficcion.length > 0){
            mostrarImagenes(peliculas_ficcion);
        }else{
            console.log("No hay películas de ciencia ficción");
        }
    })
    .catch((error) =>{
        console.error(error);
    })
}

const btn_ficcion = document.querySelector(".ficcion");
btn_ficcion.addEventListener("click" , () =>{
    mostrarFiccion();
})


//-----------------------------------------------------------------------------

/**
 * DOCUMENTALES
 */

function mostrarDocumental(){
    fetch("peliculas.json")
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        const documentales = data.filter(pelicula => pelicula.genero === "Documental");
        if(documentales.length > 0){
            mostrarImagenes(documentales);
        }else{
            console.log("No hay documentales");
        }
    })
    .catch((error) =>{
        console.error(error);
    })
}

const btn_documental = document.querySelector(".documentales");
btn_documental.addEventListener("click" , () =>{
    mostrarDocumental();
})

//-----------------------------------------------------------------------------

/**
 * PELICULAS TERROR.
 */

function mostrarTerror(){
    fetch("peliculas.json")
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        const peliculas_terror = data.filter(pelicula => pelicula.genero === "Terror");
        if(peliculas_terror.length > 0){
            mostrarImagenes(peliculas_terror);
        }else{
            console.log("No hay películas de terror");
        }
    })
    .catch((error) =>{
        console.error(error);
    })
}

const btn_terror = document.querySelector(".terror");
btn_terror.addEventListener("click" , () =>{
    mostrarTerror();
})