$(".toggle").click(function(){
    $("this").find(".toggleContainer").toggleClass("active");
    $("this").silbings(".toggle").removeClass("active");
});