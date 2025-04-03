const tarjetas = document.getElementById("contenedor-cards");

function mostrarImagenes() {
    fetch("imagenes.json")  
        .then(response => response.json())  
        .then(data => {
            tarjetas.innerHTML = ""; 
            data.forEach(imagen => {
                const div = document.createElement("div");
                div.innerHTML = `
                    <img src="${imagen.url}" alt="${imagen.titulo}">
                `;
                tarjetas.appendChild(div);
            });
        })
        .catch(error => console.error("Error al cargar las imágenes:", error));
}

mostrarImagenes();