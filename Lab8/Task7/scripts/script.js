$( document ).ready(function(){
    $( "#imageToogle" ).click(function(){
        $( "#SnoopDog" ).toggle( {
            duration: 800,
            easing: "linear",
            queue: false
        });
    });
    $( "#imageSlideToogle" ).click(function(){
        $( "#SnoopDog" ).slideToggle( {
            duration: 800,
            easing: "linear",
            queue: false
        });
    });
    $( "#fadeToggle" ).click(function(){
        $( "#SnoopDog" ).fadeToggle( 1000, "linear");
    });
});