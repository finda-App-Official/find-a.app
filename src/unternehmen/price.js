document
  .getElementById("content-item-stellen-count-1")
  .addEventListener("change", (ev) => {
    let value = document.getElementById("content-item-stellen-count-1").value;
    if (parseInt(value) < 1) {
      return (document.getElementById(
        "content-item-stellen-count-1"
      ).value = 1);
    }

    let gesamt = document.getElementById("gesamt-1");
    let premium = document.getElementById("premium-check-1").checked;
    let dauer = document.getElementById("content-dauer-select-1").value;

    if (dauer === "6") {
      let gesamtCalc = value * 6 * 6;
      if (premium) {
        gesamtCalc *= 1.5;
      }
      gesamt.innerHTML = gesamtCalc;
    } else if (dauer === "12") {
      let gesamtCalc = value * 5.5 * 12;
      if (premium) {
        gesamtCalc *= 1.5;
      }
      gesamt.innerHTML = gesamtCalc;
    }
  });
document
  .getElementById("content-dauer-select-1")
  .addEventListener("change", (ev) => {
    let input = document.getElementById("content-item-stellen-count-1").value;
    let premium = document.getElementById("premium-check-1").checked;
    let gesamt = document.getElementById("gesamt-1");
    let value = document.getElementById("content-dauer-select-1").value;
    if (value === "6") {
      document.getElementById("preis-1").innerHTML =
        "Anzahl Stellen (6€/Stelle)";
      let gesamtCalc = input * 6 * 6;

      if (premium) {
        gesamt.innerHTML = gesamtCalc * 1.5;
      } else {
        gesamt.innerHTML = gesamtCalc;
      }
    } else if (value === "12") {
      document.getElementById("preis-1").innerHTML =
        "Anzahl Stellen (5.50€/Stelle)";
      let gesamtCalc = input * 5.5 * 12;
      if (premium) {
        gesamt.innerHTML = gesamtCalc * 1.5;
      } else {
        gesamt.innerHTML = gesamtCalc;
      }
    }
  });
document.getElementById("premium-check-1").addEventListener("change", (ev) => {
  let value = document.getElementById("premium-check-1").checked;
  let gesamtValue = document.getElementById("gesamt-1").innerHTML;
  if (value) {
    document.getElementById("gesamt-1").innerHTML = parseInt(gesamtValue) * 1.5;
  } else {
    document.getElementById("gesamt-1").innerHTML = parseInt(gesamtValue) / 1.5;
  }
});
document
  .getElementById("content-dauer-select-2")
  .addEventListener("change", (ev) => {
    let gesamt = document.getElementById("gesamt-2");
    let value = document.getElementById("content-dauer-select-2").value;
    if (value === "6") {
      gesamt.innerHTML = "520";
    } else if (value === "12") {
      gesamt.innerHTML = "999";
    }
  });
document.getElementById("premium-check-2").addEventListener("click", (ev) => {
  document.getElementById("premium-check-2").checked = true;
});