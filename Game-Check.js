var d = document;
var game = d;
cas = 0
was = 0
var devicestorage = localStorage
var Question3Answer
var Question2Answer
var Question1Answer
var baud = new Audio("./sounds/wrong.wav");
var aud = new Audio("./sounds/start.wav");
var body = d.getElementsByTagName('body')



history.pushState(null, null, document.URL);
window.addEventListener('popstate', function () {
    history.pushState(null, null, document.URL);
});
function exit() {
    var f = confirm("Are You Sure to Exit this game?")
    if (f == true) {
        window.location.href = 'exit.html'
    }
    else {
        // alert("You Have Succesfully Respawned!")
    }
}
function platfunc() {
    d.getElementById('xx').style.display = "block"

    d.getElementById('op').style.display = "none"
    var aud = new Audio("./sounds/start.wav");
    aud.addEventListener("canplay", _evt => { aud.play(); });
}
function chkq1ofgame() {
    var chkinput = d.getElementById("cq1").value
    if (chkinput == Question1Answer) {
        var aud = new Audio("./sounds/start.wav");

        aud.addEventListener("canplay", _evt => { aud.play(); });
        d.getElementById("chair1").style.display = "none"
        d.getElementById("yy").style.display = "block"
        d.getElementById("xx").style.display = "none"

        cas += 1
        hf()
    }
    else {
        var baud = new Audio("./sounds/wrong.wav");

        baud.addEventListener("canplay", _evt => { baud.play(); });
        d.getElementById("cq1").value = ""
        was += 1
        hk()
      alert("The Answer Is Incorrect")
    }
}
function hk() {
    d.getElementById("qatempts").innerHTML = was
    d.getElementById("qatempts").title = "Incorrect Attempts: " + was

} function hf() {
    d.getElementById("hepmemememememem").innerHTML = cas
    d.getElementById("hepmemememememem").title = "Correct Attempts: " + cas

}
function chkq2ofgame() {
    var chkinput = d.getElementById("cq2").value
    if (chkinput == Question2Answer) {
        var aud = new Audio("./sounds/start.wav");

        d.getElementById("chair2").style.display = "none"
        aud.addEventListener("canplay", _evt => { aud.play(); });
        d.getElementById("yy").style.display = "none"
        d.getElementById("zz").style.display = "block"
        cas += 1
        hf()
    }
    else {
        var baud = new Audio("./sounds/wrong.wav");

        baud.addEventListener("canplay", _evt => { baud.play(); });
        d.getElementById("cq2").value = ""

        was += 1
        hk()
            alert("The Answer Is Incorrect")

    }
}
function chkq3ofgame() {
    var chkinput = d.getElementById("cq3").value
    if (chkinput == Question3Answer) {
        var aud = new Audio("./sounds/start.wav");
        d.getElementById("noneneonenenoneien").style.display = "t"
        d.getElementById("chair3").style.display = "none"
        d.getElementById("zz").style.display = "none"
        aud.addEventListener("canplay", _evt => { aud.play(); });
        d.getElementById("yy").style.display = "none"
        d.getElementById("donegamefunction").style.display = "block"
        cas += 1
        hf()
        pushalltolocaltsotrage()
    }
    else {
        var baud = new Audio("./sounds/wrong.wav");

        baud.addEventListener("canplay", _evt => { baud.play(); });
        d.getElementById("cq3").value = ""
        was += 1
        hk()
            alert("The Answer Is Incorrect")

    }
}
function savetosessionstorgae() {
    sessionStorage.setItem("pointsname", d.getElementById("analyticname").innerHTML)
    sessionStorage.setItem("pointspassword", d.getElementById("passname").innerHTML)
    sessionStorage.setItem("pointscas", cas)
    sessionStorage.setItem("pointswas", was)
}
function pushtolocalstorage() {
    localStorage.setItem("pointspassword", sessionStorage.getItem("pointspassword"))
    localStorage.setItem("pointsname", sessionStorage.getItem("pointsname"))
    localStorage.setItem("pointscas", sessionStorage.getItem("pointscas"))
    localStorage.setItem("pointswas", sessionStorage.getItem("pointswas"))
    sessionStorage.removeItem("pointsname")
    sessionStorage.removeItem("pointscas")
    sessionStorage.removeItem("pointswas")
    sessionStorage.removeItem("pointspassword")
}

function pushalltolocaltsotrage() {
    localStorage.setItem("pointspassword", logincode)
    localStorage.setItem("pointsname", d.getElementById("analyticname").innerHTML)
    localStorage.setItem("pointscas", cas)
    localStorage.setItem("pointswas", was)
}
function mygamereplay() {
    var g = confirm("Are You Sure To Replay The Game. All The Points, Anaytics Will be reset!")
    if (g == true) {
        localStorage.removeItem("pointsname")
        localStorage.removeItem("pointscas")
        localStorage.removeItem("pointswas")
        localStorage.removeItem("pointspassword")
        location.href = 'index.html'
    }
    else {
        alert("You Are Now Safe!")
    }
}
