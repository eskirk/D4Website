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