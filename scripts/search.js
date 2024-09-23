document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('input[type="text"]');
    const searchButton = document.querySelector('button');
    const videos = document.querySelectorAll('.video');

    // Función para realizar la búsqueda
    function searchVideos() {
        const searchQuery = searchInput.value.toLowerCase();

        videos.forEach(video => {
            const title = video.getAttribute('data-title').toLowerCase();
            if (title.includes(searchQuery)) {
                video.style.display = 'block';
            } else {
                video.style.display = 'none';
            }
        });
    }

    // Escuchar el evento de clic en el botón de búsqueda
    searchButton.addEventListener('click', function () {
        searchVideos();
    });

    // Escuchar la tecla "Enter" en el campo de búsqueda
    searchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault(); // Previene que se recargue la página al presionar Enter
            searchVideos();
        }
    });
});
