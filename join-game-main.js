//Don't Edit Anything From Below Or else it will no longer work
var key = "10H84-45H83-Z1MH2-D4QN9-G38MK";
var EnterYourkey;
var authenticate = false;
var save;
var GameTitle;
var GameInstruction;
var recaptha;
var captcha;
var Question3
var allowsavetousename;
var HintForQuestion1;
var HintForQuestion2;
var HintForQuestion3;
var requirepassword;
var errorsolverlogdisplay;
var Question1
var Question2
var xp = d.getElementById("name");
var xo = d.getElementById("coupon");
var d = document;
var noname;
var game = d;
var chkbox = d.getElementById("saveinbr")
var displaysavealert;
window.onload = function hy() {
  game.title = GameTitle
  const f = localStorage.getItem("pointsname")
  if (f) {
    d.getElementById("localstorgesavpoints").className = 'btn btn-danger mx-1'

    if (requirepassword == true) {
      d.getElementById("localstorgesavpoints").className = 'btn btn-danger mx-1'
    }
    else {
      if (recaptha == true) {
        d.getElementById("localstorgesavpoints").className = 'btn btn-danger mx-1'
        d.getElementById("aaaaaaaaa").style.marginTop = ""

      } else {
        d.getElementById("localstorgesavpoints").className = 'btn btn-danger mymymymymyym mx-1'
      }

    }
  } else {
    d.getElementById("aaaaaaaaa").style.marginTop = ""
    d.getElementById("localstorgesavpoints").className = 'btn btn-danger hide'
  }
  d.getElementById("insrtuc").innerHTML = GameInstruction
  if (requirepassword == true) {
    d.getElementById("dhujtjtfhyf").style.display = "block"
    d.getElementById("onyforrcpaec").className = "btn btn-danger hide"
  }
  d.getElementById("hellhint").innerHTML = HintForQuestion3
  d.getElementById("mainhint").innerHTML = HintForQuestion2
  d.getElementById("q3q3").innerHTML = Question3.toUpperCase()
  d.getElementById("q2q2").innerHTML = Question2.toUpperCase()
  d.getElementById("firw").innerHTML = Question1.toUpperCase()
  d.getElementById("hint2").innerHTML = HintForQuestion1
  d.getElementById("hepmemememememem").title = "Correct Attempts: 0"
  d.getElementById("qatempts").title = "Incorrect Attempts: 0"
  const name = localStorage.getItem('name');
  d.getElementById("passname").innerHTML = logincode
  d.getElementById("passname").title = "Password: " + logincode

  if (typeof (Storage) == "undefined") {
    d.getElementById("ocala").innerHTML = "False"
    d.getElementById("ocala").title = "Localstorage Is supported: " + "False"
  } else {
    d.getElementById("ocala").innerHTML = "True"
    d.getElementById("ocala").title = "Localstorage Is supported: " + "True"
  }

  if (EnterYourkey == key) { } else {
    location.href = "key-error.html"
  }

  if (recaptha == false) {
    recaptha = false;
    d.getElementById("onyforrcpaec").style.display = ""
    d.getElementById("aaaaaaaaa").style.display = "none"
    d.getElementById("recpa").style.display = "none"
    d.getElementById("rc").style.display = "none"
  }
  if (recaptha == true) {

    generateCaptcha()
  }
  if (errorsolverlogdisplay == false) {
    d.getElementById("tobehiddennow").style.display = "none"
    d.getElementById("f").title = "Loading Game!"
  }
  if (game.title == "") {
    if (errorsolverlogdisplay == true) {
      document.getElementById("mainididididid").style.display = "block"
      document.getElementById("errorsdiplay3").style.display = "block"
    }
    game.title = "Untitled Game"
  };
  if (noname == "") {
    if (errorsolverlogdisplay == true) {
      document.getElementById("mainididididid").style.display = "block"
      document.getElementById("errorsdiplay2").style.display = "block"
    }
    noname = "Untitled Game"
  };
  if (requirepassword == true, recaptha == true) {
    if (errorsolverlogdisplay == true) {
      document.getElementById("mainididididid").style.display = "block"
      document.getElementById("errorsdiplay1").style.display = "block"
    }
    recaptha = false
  };
  $(function () {
    setTimeout(function () { $("#g").show(700); }, 5000)
    setTimeout(function () { $("#f").fadeOut(700); }, 5000)

  })
  if (allowsavetousename == false) {
    d.getElementById("mom").style.display = "none"
    d.getElementById("dad").style.display = "none"
    d.getElementById("something").style.display = "block"
  }
  if (allowsavetousename == true) {
    if (recaptha == true) {
      generateCaptcha()

      d.getElementById("tdoddo").className = "my-2"
    }
    d.getElementById("mom").style.display = "block"
    d.getElementById("dad").style.display = "block"
    d.getElementById("something").style.display = "none"

  }
  else {
    // d.getElementById("tdoddo").className = "text-center"
    d.getElementById("aaaaaaaaa").className = "btn btn-danger my-7"
    d.getElementById("rc").style.display = "none"
    d.getElementById("recpa").style.display = "none"
    recaptha = false;
    allowsavetousename = true;

  };
  if (requirepassword == false) {


    d.getElementById("joinfucntionfjfbf").className = "text-center text-center my-3 mb-3"
    d.getElementById("bypass").style.display = "none"
    d.getElementById("b").style.display = "none"
    d.getElementById("aaaaaaaaa").style.display = "treu"
  }
  else {
    d.getElementById("rc").style.display = "none"
    d.getElementById("aaaaaaaaa").style.display = "none"

    d.getElementById("recpa").style.display = "none"
  }
  if (game.title == "") {
    game.title = noname
    d.getElementById("teach").innerHTML = game.title;
  }
  else {
    d.getElementById("teach").innerHTML = game.title;
  };
  if (typeof (Storage) == "undefined") {
    save = false
    d.getElementById("dad").style.display = "none"
    d.getElementById("mom").style.display = "none"
    d.getElementById("joinfucntionfjfbf").className = "text-center my-2 mb-3"
    d.getElementById("something").style.display = "none"
    d.getElementById("local").style.display = "block"
  } else {
    if (allowsavetousename == false) {
      if (name) {
        localStorage.removeItem("name")
        save = false
        d.getElementById("dad").style.display = "none"
        d.getElementById("mom").style.display = "none"
        if (displaysavealert == false) {
          d.getElementById("joinfucntionfjfbf").className = "text-center my-6 mb-3"
          d.getElementById("something").style.display = "none"

        }
        else {
          d.getElementById("something").style.display = "block"
        }
        document.getElementById("new").title = "Enter Name To Clear"
        document.getElementById("new").className = "input-group-text no"
        document.getElementById("hec").title = "Enter Name To Clear"
        document.getElementById("hec").className = "bi bi-eraser no"
        save = false
        document.getElementById("coupon").disabled = true;
      }
      else {
        save = false
        d.getElementById("dad").style.display = "none"
        d.getElementById("mom").style.display = "none"
        if (displaysavealert == false) {
          d.getElementById("joinfucntionfjfbf").className = "text-center my-6 mb-3"
          d.getElementById("something").style.display = "none"

        }
        else {
          d.getElementById("something").style.display = "block"
        }
      }
    };
  }
  if (requirepassword == false) {
    d.getElementById("joinfucntionfjfbf").className = "text-center text-center my-3 mb-3"
    d.getElementById("bypass").style.display = "none"
    d.getElementById("b").style.display = "none"
    d.getElementById("aaaaaaaaa").style.display = "treu"
  }
  else {
    d.getElementById("recpa").style.display = "none"
    d.getElementById("rc").style.display = "none"
    d.getElementById("aaaaaaaaa").style.display = "none"

  }
  d.getElementById("saveinbr").className = "form-check-input disabled";


  if (name) {

    var bewd = d.getElementById("hec")//svg
    var ncls = d.getElementById("new")
    var nmys = d.getElementById("hec")
    ncls.className = "input-group-text no"
    ncls.title = "No Need To Clear Name"
    nmys.className = "bi bi-eraser no"
    nmys.title = "No Need To Clear Name"
    save = true
    nmys.onclick = ""
    ncls.onclick = ""
    d.getElementById("name").disabled = true;
    d.getElementById("coupon").disabled = false;
    d.getElementById("mom").style.display = "block"
    d.getElementById("dad").style.display = "none"
    d.getElementById("name").value = name
  } else {
    d.getElementById("new").title = "Enter Name To Clear"
    d.getElementById("new").className = "input-group-text no"
    d.getElementById("hec").title = "Enter Name To Clear"
    d.getElementById("hec").className = "bi bi-eraser no"
    save = false
    d.getElementById("coupon").disabled = true;
    d.getElementById("mom").style.display = "none"
  }
  d.getElementById("saveinbr").disabled = true

  d.getElementById("b").className = "btn btn-danger disabled"
  var bewd = d.getElementById("hec")//svg
  var cls = d.getElementById("cls")

  bewd.title = "Enter Code To Clear"
  bewd.className = "bi bi-eraser no"
  cls.className = "input-group-text no"
  cls.title = "Enter Code To Clear"
  // d.getElementById("q1").style.display = "none"

}
function hell() {
  document.getElementById('aaaaaaaaa').className = 'btn btn-danger'
}
function lol() {
  var jik = document.getElementById("coupon");
  var cls = document.getElementById("cls")
  var mys = document.getElementById("my")
  if (jik.value == "") {
    document.getElementById("b").className = "btn btn-danger disabled";
    document.getElementById("Invalid").style.display = ("none")
    cls.className = "input-group-text no"
    cls.title = "Enter Code To Clear"
    mys.className = "bi bi-eraser no"
    mys.title = "Enter Code To Clear"
  }

  else {
    document.getElementById("b").className = "btn btn-danger ";
    document.getElementById("Invalid").style.display = ("none")
    cls.className = "input-group-text yes"
    cls.title = "Clear Code"
    mys.className = "bi bi-eraser yes"
    mys.title = "Enter Code To Clear"
  }
}
function ap() {
}
function i() {
  var x = document.getElementById("coupon")
  x.value = '';
  document.getElementById("b").className = "btn btn-danger disabled";
  document.getElementById("Invalid").style.display = ("none")
  cls.className = "input-group-text no"
  cls.title = "Enter Code To Clear"

}
function j() {
  document.getElementById("Invalid").style.display = ("none")

}
function chk() {
  var xp = document.getElementById("name")
  var xo = document.getElementById("coupon")
  var x = d.getElementById("coupon")
  var mys = d.getElementById("my")
  var cls = d.getElementById("cls")
  var aud = new Audio("./sounds/start.wav");
  if (xp.value == "") {
    var baud = new Audio("./sounds/wrong.wav");
    baud.addEventListener("canplay", _evt => { baud.play(); });
    d.getElementById("Invalido").style.display = "block";
    xo.value = ""
    xp.value = ""
  }
  else {
    if (x.value == logincode) {
      sessionStorage.setItem("helloworld", d.getElementById("name").value)
      document.getElementById("name").disabled = true;
      document.getElementById("coupon").disabled = true;
      d.getElementById("b").href = "#join=True&Home=False&play=False"
      d.getElementById("Invalid").style.display = ("none")
      d.getElementById("loggedin").style.display = "block"
      aud.addEventListener("canplay", _evt => { aud.play(); });
      d.getElementById("rmyname").innerHTML = document.getElementById("name").value
      d.getElementById("someid").title = "Welcome " + document.getElementById("name").value
      xo.value = ""
      d.getElementById("mynameis").innerHTML = document.getElementById("name").value
      d.getElementById("mynameis").innerHTML = document.getElementById("name").value
      d.getElementById("b").href = "#join=true&Home=True"
      d.getElementById("loginmodalandconfig").style.display = "none"
      d.getElementById("op").style = "block"

      hello()
      fill()
    }
    else {

      d.getElementById("loggedin").style.display = "none"
      x.value = ""
      var baud = new Audio("./sounds/wrong.wav");
      baud.addEventListener("canplay", _evt => { baud.play(); });
      cls.className = "input-group-text no"
      cls.title = "Enter Code To Clear"
      mys.className = "bi bi-eraser no"
      mys.title = "Enter Code To Clear"
      document.getElementById("Invalid").style.display = ("block")
      if (d.getElementById("Invalid").style.display = "block") {
        $(function () {
          setTimeout(function () { $("#Invalid").fadeOut(1000); }, 3000)
        })
      }
      document.getElementById("b").className = "btn btn-danger disabled";
      d.getElementById("b").href = "#join=False&Home=True&play=False"
    }
  }

}
function myme() {
  var njik = document.getElementById("name");
  var ncls = document.getElementById("new")
  var nmys = document.getElementById("hec")
  if (njik.value == "") {
    dd()
    d.getElementById("saveinbr").disabled = true
    ncls.className = "input-group-text no"
    ncls.title = "Enter Name To Clear"
    nmys.className = "bi bi-eraser no"
    nmys.title = "Enter Name To Clear"
    document.getElementById("coupon").disabled = true;
    document.getElementById("saveinbr").className = "form-check-input";
    // d.getElementById("aaaaaaaaa").className = "btn btn-danger disabled"
  }
  else {
    // d.getElementById("aaaaaaaaa").className = "btn btn-danger"
    d.getElementById("saveinbr").disabled = false;
    document.getElementById("saveinbr").className = "form-check-input disabled";
    ncls.className = "input-group-text yes"
    ncls.title = "Clear Name"
    nmys.className = "bi bi-eraser yes"
    nmys.title = "Clear Name"
    document.getElementById("coupon").disabled = false;
  }
}
function mymed() {
  var njik = document.getElementById("name");
  var ncls = document.getElementById("new")
  var nmys = document.getElementById("hec")
  if (njik.value == "") {
    dd()
    d.getElementById("saveinbr").disabled = true
    ncls.className = "input-group-text no"
    ncls.title = "Enter Name To Clear"
    nmys.className = "bi bi-eraser no"
    nmys.title = "Enter Name To Clear"
    document.getElementById("aaaaaaaaa").className = "btn btn-danger disabled my-7";
    document.getElementById("saveinbr").className = "form-check-input";
  }
  else {
    d.getElementById("saveinbr").className = "form-check-input";
    document.getElementById("saveinbr").className = "form-check-input disabled";
    ncls.className = "input-group-text yes"
    ncls.title = "Clear Name"
    nmys.className = "bi bi-eraser yes"
    nmys.title = "Clear Name"
    document.getElementById("aaaaaaaaa").className = "btn btn-danger my-7";
  }
}
function c() {
  document.getElementById("saveinbr").className = "form-check-input disabled";

  d.getElementById("saveinbr").disabled = true
  var ncls = document.getElementById("new")
  var nmys = document.getElementById("hec")
  var ncls = document.getElementById("new")
  var xd = document.getElementById("name")
  xd.value = '';
  ncls.className = "input-group-text no"
  ncls.title = "Enter Name To Clear"
  nmys.className = "input-group-text no"
  nmys.title = "Enter Name To Clear"
  document.getElementById("coupon").disabled = true;
}
function dd() {
  console.clear()
}
function runnocode() {
  var baud = new Audio("./sounds/wrong.wav");
  var input = document.getElementById("inputText").value;
  if (recaptha = true) {
    if (document.getElementById("inputText").value == captcha) {
      if (d.getElementById("name").value == "") {
        baud.addEventListener("canplay", _evt => { baud.play(); });
        d.getElementById("Invalido").style.display = "block"
        d.getElementById("cp").style.display = "none"

      }
      else {

        d.getElementById("cp").style.display = "none"
        d.getElementById("Invalido").style.display = "none"

        d.getElementById("loggedin").style.display = "block"
        hello()
        d.getElementById("rmyname").innerHTML = d.getElementById("name").value

        var aud = new Audio("./sounds/start.wav");
        aud.addEventListener("canplay", _evt => { aud.play(); });
        d.getElementById("loginmodalandconfig").style.display = "none"
        d.getElementById("op").style = "block"
        d.getElementById("someid").title = "Welcome " + document.getElementById("name").value
        d.getElementById("mynameis").innerHTML = d.getElementById("name").value
      }
    }
    else {
      d.getElementById("inputText").value = ""
      baud.addEventListener("canplay", _evt => { baud.play(); });
      d.getElementById("cp").style.display = "block"
      d.getElementById("Invalido").style.display = "none"

    }
  }
  else {
    d.getElementById("cp").style.display = "none"
    if (d.getElementById("name").value == "") {
      baud.addEventListener("canplay", _evt => { baud.play(); });
      d.getElementById("Invalido").style.display = "block"
    }
    else {
      d.getElementById("Invalido").style.display = "none"
      d.getElementById("loggedin").style.display = "block"
      hello()

      d.getElementById("rmyname").innerHTML = d.getElementById("name").value
      var aud = new Audio("./sounds/start.wav");
      aud.addEventListener("canplay", _evt => { aud.play(); });
      d.getElementById("loginmodalandconfig").style.display = "none"
      d.getElementById("op").style = "block"
      d.getElementById("mynameis").innerHTML = document.getElementById("name").value
      d.getElementById("someid").title = "Welcome " + document.getElementById("name").value



    }
  }

}
function hello() {
  if (d.getElementById("loggedin").style.display = "block") {
    $(function () {
      setTimeout(function () { $("#loggedin").fadeOut(1000); }, 1000)
    })
  }
}
function saveinbrowser() {
  var mys = d.getElementById("my")
  var cls = d.getElementById("cls")
  cls.className = "input-group-text no"
  cls.title = "Enter Code To Clear"
  mys.className = "bi bi-eraser no"
  mys.title = "Enter Code To Clear"
  var nmys = document.getElementById("hec")
  var ncls = document.getElementById("new")
  ncls.className = "input-group-text no"
  ncls.title = "No Need To Clear Name"
  nmys.className = "bi bi-eraser no"
  nmys.title = "No Need To Clear Name"
  nmys.onclick = ""
  ncls.onclick = ""
  var tosvae = document.getElementById("name").value
  localStorage.setItem("name", tosvae)
  save = true
  document.getElementById("name").disabled = true;
  d.getElementById("ft").style.display = "block"
  d.getElementById("dad").style.display = "none"
  lol()
}
function delbrowser() {
  var nmys = document.getElementById("hec")
  var ncls = document.getElementById("new")
  ncls.className = "input-group-text no"
  ncls.title = "Enter Name To Clear"
  nmys.className = "bi bi-eraser no"
  nmys.title = "Enter Name To Clear"
  nmys.onclick = c
  ncls.onclick = c
  document.getElementById("name").value = ""
  save = false
  localStorage.removeItem("name")
  document.getElementById("name").disabled = false;
  document.getElementById("coupon").disabled = true;
  d.getElementById("ftt").style.display = "block"
  d.getElementById("mom").style.display = "none"

}


function generateCaptcha() {
  var a = Math.floor((Math.random() * 10));
  var b = Math.floor((Math.random() * 10));
  var c = Math.floor((Math.random() * 10));
  var d = Math.floor((Math.random() * 10));

  captcha = a.toString() + b.toString() + c.toString() + d.toString();
  document.getElementById("inputText").placeholder = "Type " + captcha + " in the box";
}
function fill() {
  d.getElementById("mynameisdd").innerHTML = document.getElementById("name").value
  d.getElementById("dsomeidd").title = "Welcome " + document.getElementById("name").value
  d.getElementById("dddd").title = "Welcome " + document.getElementById("name").value
  d.getElementById("hellonamenamsnsn").innerHTML = document.getElementById("name").value
  d.getElementById("mynameisd").innerHTML = document.getElementById("name").value
  d.getElementById("dsomeid").title = "Welcome " + document.getElementById("name").value
  d.getElementById("byehlllelel").innerHTML = d.getElementById("name").value
  d.getElementById("analyticname").innerHTML = document.getElementById("name").value
  d.getElementById("analyticname").title = "Username: " + document.getElementById("name").value
  d.getElementById("hvfbtvbgvhbvbhvbhtbtbfbrjfr").title = "Welcome " + document.getElementById("name").value

  const name = localStorage.getItem('name');
  if (name) {
    d.getElementById("sfgty").innerHTML = "True"
    d.getElementById("sfgty").title = "Username Is saved: " + "True"
  } else {
    d.getElementById("sfgty").innerHTML = "False"
    d.getElementById("sfgty").title = "Username Is saved: " + "False"
  }
  d.getElementById("passname").innerHTML = logincode
  d.getElementById("passname").title = "Password: " + logincode
}
function bhbbhbbhbbhbbh() {
  var baud = new Audio("./sounds/wrong.wav");
  if (d.getElementById("name").value == "") {
    baud.addEventListener("canplay", _evt => { baud.play(); });
    d.getElementById("Invalido").style.display = "block"
  }
  else {
    d.getElementById("Invalido").style.display = "none"
    d.getElementById("loggedin").style.display = "block"
    hello()

    d.getElementById("rmyname").innerHTML = d.getElementById("name").value
    var aud = new Audio("./sounds/start.wav");
    aud.addEventListener("canplay", _evt => { aud.play(); });
    d.getElementById("loginmodalandconfig").style.display = "none"
    d.getElementById("op").style = "block"
    d.getElementById("mynameis").innerHTML = document.getElementById("name").value
    d.getElementById("someid").title = "Welcome " + document.getElementById("name").value
  }
}
