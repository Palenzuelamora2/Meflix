/**
 * CARD DE IMAGENES
 */
function mostrarImagenes(series) {
    const contenedorcards = document.getElementById("card");

    // Limpiar el contenedor antes de agregar nuevas series
    contenedorcards.innerHTML = "";

    // Iterar solo sobre las primeras 24 series
    series.slice(0, 30).forEach(series => {  // Esto limita a 24 series
        const cards = document.createElement("div");
        cards.className = "card tarjeta";
        
        // Crear la imagen y agregarla a la card
        const img = document.createElement("img");
        img.src = series.imagen;
        img.alt = series.titulo;

        // Crear el contenedor de los detalles (título y descripción)
        const detalles = document.createElement("div");
        detalles.className = "detalles";
        detalles.innerHTML = `
            <p style="font-size: 15px;">${series.titulo}<br>
                                        ${series.temporadas}<br>
            <p style="font-size: 12px; text-align: justify;">${series.descripcion}</p>
            <p style="width: 100px; font-size: 25px;">
                <i class="bi bi-play-circle-fill icon"></i>
                <i class="bi bi-pause-circle-fill icon"></i>
                <i class="bi bi-star-fill icon"></i>
            </p>
           <button onclick="window.location.href='detalle_series.html'">VER EPISODIO</button>

        `;

        // Añadir la imagen y los detalles a la card
        cards.appendChild(img);
        cards.appendChild(detalles);

        // Agregar la card al contenedor principal
        contenedorcards.appendChild(cards);
    });
}

function cargarSeriesIniciales() {
    fetch("series.json")
    .then((response) => {
        return response.json();  // Parsear la respuesta JSON
    })
    .then((data) => {
        mostrarImagenes(data);  // Mostrar todas las series
    })
    .catch((error) => {
        console.error(error);
    });
}

// Cargar 24 series al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    cargarSeriesIniciales(); // Llamar a la función para cargar las 24 primeras series.
});


//-------------------------------------------------------------------------------------------

/**
 * SERIES PRIMER PLANO.
 */

function primerPlano(){
    fetch("series.json")
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        if(data.length > 0){
            mostrarImagenes(data);
        }else{
            alert("No hay más series");
        }

    })
}

const btn_primerPlano = document.querySelector(".primer_plano");
btn_primerPlano.addEventListener("click" , () =>{
    primerPlano();
})





//-------------------------------------------------------------------------------------------


/**
 * SERIES ACCION
 */
function mostrarAccion(){
    fetch("series.json")
    .then((response) => {
        return response.json();  // Parsear la respuesta JSON
    })
    .then((data) => {
        const series_accion = data.filter(serie => serie.genero === "Accion");
        if (series_accion.length > 0) {
            mostrarImagenes(series_accion); // Llamar a la función con las series filtradas de acción
        } else {
            console.log("No hay series de acción.");
        }
    })
    .catch((error) => {
        console.error(error);
    });
}

// Agregar el evento al botón de acción
const btn_accion = document.querySelector(".accion");
btn_accion.addEventListener("click", () => {
    mostrarAccion();  // Mostrar las series de acción cuando se hace clic en el botón
});


//-----------------------------------------------------------------------------

/**
 * SERIES AVENTURA
 */

function mostrarAventura(){
    fetch("series.json")
    .then((response) => {
        return response.json();
    })
    .then((data) =>{
        const series_aventura = data.filter(serie => serie.genero === "Aventura");
        if(series_aventura.length > 0){
            mostrarImagenes(series_aventura);
        } else{
            console.log("No hay series de aventura");
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
 * SERIES COMEDIA
 */

function mostrarComedia(){
    fetch("series.json")
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        const series_comedia = data.filter(serie => serie.genero === "Comedia");
        if(series_comedia.length > 0){
            mostrarImagenes(series_comedia)
        } else{
            console.log("No hay series de comedia");
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
 * SERIES CIENCIA FICCION
 */

function mostrarFiccion(){
    fetch("series.json")
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        const series_ficcion = data.filter(serie => serie.genero === "Ciencia Ficción");
        if(series_ficcion.length > 0){
            mostrarImagenes(series_ficcion);
        }else{
            console.log("No hay series de ciencia ficción");
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
    fetch("series.json")
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        const documentales = data.filter(serie => serie.genero === "Documentales");
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
 * SERIES TERROR.
 */

function mostrarTerror(){
    fetch("series.json")
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        const series_terror = data.filter(serie => serie.genero === "Terror");
        if(series_terror.length > 0){
            mostrarImagenes(series_terror);
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