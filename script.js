// script.js

document.addEventListener('DOMContentLoaded', function () {
    const dayNightToggle = document.getElementById('day-night-toggle');
    const filmToggle = document.getElementById('film-toggle');

    const filmDayState = document.getElementById('film-day');
    const filmNightState = document.getElementById('film-night');
    const noFilmDayState = document.getElementById('no-film-day');
    const noFilmNightState = document.getElementById('no-film-night');

    // Function to show the correct video state based on toggles
    function updateVideoState() {
        // Get Day/Night and Film On/Off states
        const isDay = !dayNightToggle.checked;  // Day is unchecked, Night is checked
        const isFilmOn = filmToggle.checked;

        // Hide all video states
        filmDayState.classList.remove('active');
        filmNightState.classList.remove('active');
        noFilmDayState.classList.remove('active');
        noFilmNightState.classList.remove('active');

        // Show the appropriate video state based on toggles
        if (isFilmOn && isDay) {
            filmDayState.classList.add('active');
        } else if (isFilmOn && !isDay) {
            filmNightState.classList.add('active');
        } else if (!isFilmOn && isDay) {
            noFilmDayState.classList.add('active');
        } else if (!isFilmOn && !isDay) {
            noFilmNightState.classList.add('active');
        }
    }

    // Update the state on toggle change
    dayNightToggle.addEventListener('change', updateVideoState);
    filmToggle.addEventListener('change', updateVideoState);

    // Initial state update
    updateVideoState();
});
