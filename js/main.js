// open menu

$("#btnBox").click(function(){
    let navOffset = $("#nav").offset().top
    let joinBoxOffset = $(".joinBox").offset().top

    if(navOffset == 0 | joinBoxOffset == 0){
        $("#nav").slideDown(1000);
        $(".joinBox").slideDown(1000);
        $("#Navbar .joinBox").css("display","flex");

    }else{
        $("#nav").slideUp(1000);
        $(".joinBox").slideUp(1000);
    }
})
