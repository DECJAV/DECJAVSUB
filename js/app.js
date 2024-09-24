document.addEventListener("DOMContentLoaded", function() {
    console.log("Página de videos cargada correctamente");

    // Paginación
    const videosPerPage = 16;
    let currentPage = 1;
    const videos = document.querySelectorAll('.video'); // Selecciona todos los videos
    const totalPages = Math.ceil(videos.length / videosPerPage);

    function showPage(page) {
        const start = (page - 1) * videosPerPage;
        const end = start + videosPerPage;

        videos.forEach((video, index) => {
            if (index >= start && index < end) {
                video.style.display = 'block';
            } else {
                video.style.display = 'none';
            }
        });
    }

    function setupPagination() {
        document.getElementById('prevPage').addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                showPage(currentPage);
                document.getElementById('pageNumber').textContent = currentPage;
            }
        });

        document.getElementById('nextPage').addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                showPage(currentPage);
                document.getElementById('pageNumber').textContent = currentPage;
            }
        });
    }

    // Inicializar paginación
    showPage(currentPage);
    setupPagination();

    // Búsqueda de videos
    const searchInput = document.getElementById('search');
    const iframes = document.querySelectorAll('iframe'); // Si tienes varios iframes de video

    searchInput.addEventListener('keyup', function(event) {
        const query = event.target.value.toLowerCase();

        iframes.forEach(iframe => {
            if (iframe.src.toLowerCase().includes(query)) {
                iframe.style.display = 'block'; // Muestra el iframe si coincide
            } else {
                iframe.style.display = 'none'; // Oculta el iframe si no coincide
            }
        });
    });

    // Función para abrir el modal correspondiente al género
    function openGenre(genre) {
        document.getElementById('modal-' + genre).style.display = 'block';
    }

    // Función para cerrar el modal correspondiente al género
    function closeGenre(genre) {
        document.getElementById('modal-' + genre).style.display = 'none';
    }
});

