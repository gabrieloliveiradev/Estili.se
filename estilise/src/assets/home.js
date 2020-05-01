function scroll() {
    let scrollTop = window.pageYOffset;
    if (scrollTop > 30) {
            document.getElementById('nav_bar').id = 'depois'
    } else {
            document.getElementById('nav_bar_depois').id = 'antes'
    }
}

$('nav a').click(function(e){
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top,
    menuHeight = $('nav').innerHeight();
    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 500);
});