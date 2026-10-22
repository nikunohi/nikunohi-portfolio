document.addEventListener('DOMContentLoaded', function () {

    var lightbox = document.getElementById('img5');
    var iframe = lightbox.querySelector('iframe');

    if (!lightbox || !iframe) {
        console.log('not found');
        return;
    }

    var youtubeSrc = iframe.src;

    window.addEventListener('hashchange', function () {
        if (window.location.hash !== '#img5') {
            iframe.src = '';
            iframe.src = youtubeSrc;
            console.log('YouTube video stopped');
        }
    });
});