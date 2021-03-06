// lightGallery
lightGallery(document.getElementById('gallery'), {
    plugins: [lgFullscreen, lgThumbnail, lgZoom],
    thumbnail: true,
    speed: 500
    //, appendSubHtmlTo: ".lg-item"
});

// justifiedGallery
$('#gallery').justifiedGallery({
    rowHeight : 220,
    lastRow : 'nojustify',
    margins : 3
});

if (window.matchMedia("(max-width: 703px)").matches) {
    $('#gallery').justifiedGallery({
        rowHeight : 520,
        lastRow : 'nojustify',
        margins : 3
    });
}