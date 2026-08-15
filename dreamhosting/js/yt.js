document.addEventListener('DOMContentLoaded', function () {

    var lightbox = document.getElementById('img1');
    var iframe = lightbox.querySelector('iframe');

    if (!lightbox || !iframe) {
        console.log('not found');
        return;
    }

    var youtubeSrc = iframe.src;

    window.addEventListener('hashchange', function () {
        if (window.location.hash !== '#img1') {
            iframe.src = '';
            iframe.src = youtubeSrc;
            console.log('YouTube video stopped');
        }
    });
});