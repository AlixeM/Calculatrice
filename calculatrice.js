var lastResult = null;

function calcul(value) {
  if (lastResult !== null) {
    document.getElementById("input").value = lastResult;
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
  document.getElementById("input").value = result;
  lastResult = result;
}
