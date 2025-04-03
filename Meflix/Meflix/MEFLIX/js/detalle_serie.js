window.onload = function () {
    cargarPeliculasSimilares();
};
// FUNCION PARA OBTENER LAS PELICULAS DEL JSON
async function getMovieData(title) {
    try {
        const apiKey = "5946c981"; // 🔴 Reemplázalo con tu clave gratuita de OMDb
        const response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${apiKey}`);
        const data = await response.json();
        return data.Response === "True" ? data : null;
    } catch (error) {
        console.error("Error al obtener los datos de la película:", error);
        return null;
    }
}
//FUNCION PARA CARGAR LAS PELICULAS Y PINTARLAS
async function cargarPeliculasSimilares() {
    const similaresContainer = document.getElementById("similares");

    if (!similaresContainer) {
        console.error("El contenedor #similares no existe en el HTML.");
        return;
    }

    // ✅ Lista de películas similares (puedes cambiar los títulos)
    const peliculasSimilares = ["Dark", "Enola Holmes", "Black mirror", "The Umbrella Academy", "Alice in borderland", "la orden", "sabrina", "The Witcher","Prison Break"];

    for (const title of peliculasSimilares) {
        const movie = await getMovieData(title);

        if (movie) {
            const movieElement = document.createElement("div");
            movieElement.classList.add("similar-movie");

            movieElement.innerHTML = `
                <img src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/150x220'}" alt="${movie.Title} ">
            `;

            similaresContainer.appendChild(movieElement);
        }
    }

    const trailer = document.getElementById('trailer');

}


function playTrailer() {
    trailer.play();
}
function pauseTrailer() {
    trailer.pause();
}
// Esta función se ejecutará cuando se haga clic en un ícono
function cambiarColor(icon) {
    // Alterna la clase 'checked' en el ícono.
    icon.classList.toggle('checked');

    // Esta función es solo para agregar algo de estilo cuando el ícono esté marcado.
    function updateStyle() {
        const icons = document.querySelectorAll('.valoraciones li');
        icons.forEach(icon => {
            if (icon.classList.contains('checked')) {
                icon.style.color = '#28a745';  // Color verde cuando está marcado
            } else {
                icon.style.color = '';  // Color predeterminado (negro)
            }
        });
    }

    // Cada vez que se hace clic, se actualizan los estilos.
    document.querySelectorAll('.valoraciones li').forEach(icon => {
        icon.addEventListener('click', () => updateStyle());
    });

}
