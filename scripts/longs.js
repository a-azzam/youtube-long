var id  = setInterval(function() {
    var elements = document.getElementsByClassName('ytd-rich-section-renderer');
    for (i = 0; i< elements.length; i++) {
        elements[i].parentNode.removeChild(elements[i]);
    }
}, 100);

setTimeout(function() {
    clearInterval(id);
}, 5000);
