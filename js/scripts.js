/** Used for toggling the descriptions on the Gear page **/

function toggle1(divId) {
    $("#" + divId).toggleClass("hidden", false);
    $("#" + "choice1").toggleClass("selected", true);
    $("#" + "innov2").toggleClass("hidden", true);
    $("#" + "innov3").toggleClass("hidden", true);
    $("#" + "innov4").toggleClass("hidden", true);
    $("#" + "choice2").toggleClass("selected", false);
    $("#" + "choice3").toggleClass("selected", false);
    $("#" + "choice4").toggleClass("selected", false);
}

function toggle2(divId) {
    $("#" + divId).toggleClass("hidden", false);
    $("#" + "choice2").toggleClass("selected", true);
    $("#" + "innov1").toggleClass("hidden", true);
    $("#" + "innov3").toggleClass("hidden", true);
    $("#" + "innov4").toggleClass("hidden", true);
    $("#" + "choice1").toggleClass("selected", false);
    $("#" + "choice3").toggleClass("selected", false);
    $("#" + "choice4").toggleClass("selected", false);
}

function toggle3(divId) {
    $("#" + divId).toggleClass("hidden", false);
    $("#" + "choice3").toggleClass("selected", true);
    $("#" + "innov1").toggleClass("hidden", true);
    $("#" + "innov2").toggleClass("hidden", true);
    $("#" + "innov4").toggleClass("hidden", true);
    $("#" + "choice1").toggleClass("selected", false);
    $("#" + "choice2").toggleClass("selected", false);
    $("#" + "choice4").toggleClass("selected", false);
}

function toggle4(divId) {
    $("#" + divId).toggleClass("hidden", false);
    $("#" + "choice4").toggleClass("selected", true);
    $("#" + "innov1").toggleClass("hidden", true);
    $("#" + "innov2").toggleClass("hidden", true);
    $("#" + "innov3").toggleClass("hidden", true);
    $("#" + "choice1").toggleClass("selected", false);
    $("#" + "choice2").toggleClass("selected", false);
    $("#" + "choice3").toggleClass("selected", false);
}

/** Gallery Stuff **/

$(document).ready(function(){
    var th = document.getElementById('thumbnails');
    
    th.addEventListener('click', function(e) {
        var t = e.target, new_src = t.parentNode.href, 
            large = document.getElementById('large'),
            cl = large.classList,
            lgwrap = document.getElementById('lg-wrap');
        lgwrap.style.backgroundImage = 'url(' +large.src + ')';
        if(cl) cl.add('hideme');
        window.setTimeout(function(){
            large.src = new_src;
            if(cl) cl.remove('hideme');
        }, 50);
        e.preventDefault();
    }, false);
});