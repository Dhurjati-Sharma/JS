var d = document;
var Signature;
var game = d
function exit() {
    var f = confirm("Are You Sure to Exit this game?")
    if (f == true) {
        window.location.href = 'exit.html'
    }
    else {
    }
}
$(function () {
    setTimeout(function () { $("#f").fadeOut(300); }, 2000);
    setTimeout(function () { $("#g").show(300); }, 2000);
})
window.onload = function hj() {
    const hhihihihihihihh = localStorage.getItem("pointsname")
    if (hhihihihihihihh) {
        d.getElementById("name").innerHTML = localStorage.getItem("pointsname").toString()
        d.getElementById("cans").innerHTML = localStorage.getItem("pointscas").toString()
        d.getElementById("wans").innerHTML = localStorage.getItem("pointswas").toString()
    }
    else {
        location.href = 'index.html'
    }
    game.title = "Game Points"
    d.getElementById("sign").innerHTML = "@ " + Signature.toUpperCase();

}
function removefromlocalstorage() {
    var fgfgf = confirm("Are You Sure To Delete All The Points?")
    if (fgfgf == true) {
        localStorage.removeItem("pointsname")
        localStorage.removeItem("pointscas")
        localStorage.removeItem("pointswas")
        localStorage.removeItem("pointspassword")
        window.location.reload(true)
    }
    else {
        alert("Points Are Not Deleted!")
    }

}
