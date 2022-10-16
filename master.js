onload = function () {
  let Palabra_A_divinar = this.document.getElementById("Palabra_A_divinar");
  let Letra = this.document.getElementById("Letra");
  let Aciertos = this.document.getElementById("Aciertos");
  let Fallos = this.document.getElementById("Fallos");
  Palabra_A_divinar.focus();
  Palabra_A_divinar.onkeyup = function () {
    Aciertos.value = Palabra_A_divinar.value.replace(/[a-z]/gi, "-"); 
  };

  Letra.onkeyup = function () {
    String.prototype.reemplazarCaracter = function (index, caracter) {
      let caracteres = this.split("");
      caracteres[index] = caracter;
      return caracteres.join("");
    };
    var es_cierto = false;
    for (let i = 0; i <= Palabra_A_divinar.value.length; i++) {
      if (Letra.value == Palabra_A_divinar.value[i]) {
        Aciertos.value = Aciertos.value.reemplazarCaracter(i, Letra.value);
        es_cierto = true;
      }
    }
    if (!es_cierto) {
      Fallos.value = Fallos.value + Letra.value;
      let w = Fallos.value.length;
      if (w >= 6) {
        var x = document.createElement("div");
        x.textContent = "DIED";
        x.style.color = "red";
        x.style.fontSize = "100px";
        document.body.appendChild(x);
        location.reload();
      }
    }
  };
};


