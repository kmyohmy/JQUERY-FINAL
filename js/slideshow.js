function move() {
    var currentslide= $('#container DIV.current');

    if ( currentslide.length == 0 ) currentslide= $('#container DIV:last');

    var nextslide;

    if (currentslide.next().length) {
        nextslide = currentslide.next()
    } else {
        nextslide  = $('#container DIV:first');
    }

    currentslide.addClass('last-current');

    nextslide.css({opacity: 0.0})
        .addClass('current')
        .animate({opacity: 1.0}, 1000, function() {
            currentslide.removeClass('currentlast-current');
        });
}

$( document ).ready(function() {
    
    $(function() {
        setInterval( "move()", 5000 );
    });
});