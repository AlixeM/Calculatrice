var lastResult = null;

function calcul(value) {
  if (lastResult !== null) {
    document.getElementById("input").value = "";
    lastResult = null;
  }
  document.getElementById("input").value += value;
}

function clearInput() {
  document.getElementById("input").value = "";
  lastResult = null;
}

function resultat() {
  var input = document.getElementById("input").value;
  var result = eval(input);
  document.getElementById("result").value = input + " = " + result;
  document.getElementById("input").value = "";
  lastResult = result;
}



function surprise(){
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
