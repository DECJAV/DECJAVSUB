document.addEventListener("DOMContentLoaded", function() {
    console.log("Página de videos cargada correctamente");
});
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('search');
    const videos = document.querySelectorAll('iframe'); // Si tienes varios videos

    searchInput.addEventListener('keyup', function(event) {
        const query = event.target.value.toLowerCase();

        videos.forEach(video => {
            if (video.src.toLowerCase().includes(query)) {
                video.style.display = "block"; // Muestra el video si coincide
            } else {
                video.style.display = "none"; // Oculta el video si no coincide
            
// Abre el modal correspondiente al género
function openGenre(genre) {
    document.getElementById('modal-' + genre).style.display = 'block';
}

// Cierra el modal correspondiente al género
function closeGenre(genre) {
    document.getElementById('modal-' + genre).style.display = 'none';
            }
const itemsPerPage = 16; // Número de videos por página
    let currentPage = 1; // Página inicial

    const videoContainer = document.getElementById("video-container");
    const videos = Array.from(videoContainer.children);
    const totalPages = Math.ceil(videos.length / itemsPerPage);

    const pageNumberDisplay = document.getElementById("pageNumber");
    const prevButton = document.getElementById("prevPage");
    const nextButton = document.getElementById("nextPage");

    // Función para mostrar los videos de la página actual
    function showPage(page) {
        videoContainer.innerHTML = ""; // Vaciar el contenedor

        // Determinar el índice de inicio y fin
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        // Agregar los videos correspondientes a la página
        const videosToShow = videos.slice(start, end);
        videosToShow.forEach(video => videoContainer.appendChild(video));

        // Actualizar el número de página en la interfaz
        pageNumberDisplay.textContent = page;

        // Habilitar o deshabilitar botones según la página actual
        prevButton.disabled = page === 1;
        nextButton.disabled = page === totalPages;
    }

    // Eventos de los botones de paginación
    prevButton.addEventListener("click", function() {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    nextButton.addEventListener("click", function() {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    // Mostrar la primera página al cargar
    showPage(currentPage);
}


        };
    });
});
