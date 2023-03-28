class BaseCalculator {
  constructor() {
    this.lastResult = null;
    this.input = document.getElementById("input");
    this.result = document.getElementById("result");
    this.actions = []; // Liste pour stocker les actions
    this.results = []; // Liste pour stocker les résultats
  }

  calcul(value) {
    if (this.lastResult !== null) {
      this.input.value = "";
      this.lastResult = null;
    }
    this.input.value += value;
    this.actions.push(value); // Ajouter l'action à la liste
  }

  clearInput() {
    this.input.value = "";
    this.lastResult = null;
    this.actions = []; // Vider la liste des actions
    this.results = []; // Vider la liste des résultats
  }

  resultat() {
    if (this.input.value === "") {
      this.result.value = "no calcul"; // Afficher "no calcul" si l'entrée est vide
      return;
    }
    var result = eval(this.input.value);
    const expression = this.input.value;
    this.lastResult = result;
    this.actions.push("=");
    this.results.push(result);
    this.result.value = expression + " = " + result; // Afficher le calcul et le résultat dans "result"
    this.input.value = "";
  }


  undo() {
    if (this.actions.length > 0) {
      const lastAction = this.actions.pop();

      if (lastAction === "=") {// Récupérer le dernier résultat
        const lastResult = this.results.pop(); 

        if (this.actions.length === 0) { // Si la liste des actions est vide, afficher le dernier résultat
          this.result.value = lastResult;
        } 

        else { // Sinon, reconstruire le calcul en utilisant la liste des actions
          let currentInput = "";
          for (let i = this.actions.length - 1; i >= 0; i--) {
            if (this.actions[i] === "=") {
              break;
            }
            currentInput = this.actions[i] + currentInput;
          }
          this.result.value = ""; // Effacer le résultat affiché
          this.input.value = currentInput; // Afficher le calcul reconstruit
          this.lastResult = null;
        }
      } else {
        this.input.value = this.input.value.slice(0, -1);
      }
    }
  }
}


const baseCalculator = new BaseCalculator();




// Pour que ça marche aussi avec les touches du clavier : 

document.addEventListener("keydown", (event) => {
            const key = event.key;
            if (/[0-9+\-*/().]/.test(key)) {
                event.preventDefault();
                baseCalculator.calcul(key);
            } else if (key === "Enter") {
                event.preventDefault();
                baseCalculator.resultat();
            } else if (key === "Backspace") {
                event.preventDefault();
                baseCalculator.undo();
            }
        });