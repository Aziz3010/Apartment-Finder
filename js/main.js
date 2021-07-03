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


// go to section smoothly
$("#Navbar #Nav ul li a").click(function(e){

    let currentSection = $(e.target).attr("href")
    let sectionOffset = $(`${currentSection}`).offset().top;
    $("body , html").animate({scrollTop:sectionOffset},1500)

});