$("#header").on('click', function(){
    $(this).animate({
            height:200,
            width:400,
            opacity: 0.5
        },
        {
            duration: 1000, //czas animacji
            easing: 'easeOutBounce', //typ animacji
            complete: function() { //funkcja zwrotna
                alert("koniec animacji");
            }
        }
    );
});

var paragraphs = $('p, li').css('color', 'red');