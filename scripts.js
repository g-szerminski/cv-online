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

//var paragraphs = $('p, li').css('color', 'green');

/*$(".contact").click(function(){
    $(".address-card-o").after("<p>After</p> <p>link</p>");
    document.location.href="https://github.com/g-szerminski";
});

$("#adress").click(function(){
    $("#text").hide();
});
*/