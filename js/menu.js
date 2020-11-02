var menu = $(".gnb");
var dim = $(".dim");
var openBtn = $(".menu-open");
var closeBtn = $(".menu-close");

openBtn.click(function(){
    menu.addClass("show");
    dim.addClass("show");
});
closeBtn.click(function(){
    menu.removeClass("show");
    dim.removeClass("show");
});
dim.click(function(){
    menu.removeClass("show");
    dim.removeClass("show");
})