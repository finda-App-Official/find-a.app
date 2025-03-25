document.getElementById("stellen-count-1").addEventListener("change", (ev) => {
  let value = document.getElementById("stellen-count-1").value;
  if (parseInt(value) < 1) {
    return (document.getElementById("stellen-count-1").value = 1);
  }

  let gesamt = document.getElementById("preis-1");
  let premium = document.getElementById("premium-1").checked;
  let dauer = document.getElementById("dauer-1").value;

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
document.getElementById("dauer-1").addEventListener("change", (ev) => {
  let input = document.getElementById("stellen-count-1").value;
  let premium = document.getElementById("premium-1").checked;
  let gesamt = document.getElementById("preis-1");
  let value = document.getElementById("dauer-1").value;
  if (value === "6") {
    document.getElementById("chooser-stellen-preis").innerHTML =
      "Anzahl Stellen (6€/Stelle)";
    let gesamtCalc = input * 6 * 6;

    if (premium) {
      gesamt.innerHTML = gesamtCalc * 1.5;
    } else {
      gesamt.innerHTML = gesamtCalc;
    }
  } else if (value === "12") {
    document.getElementById("chooser-stellen-preis").innerHTML =
      "Anzahl Stellen (5,50€/Stelle)";
    let gesamtCalc = input * 5.5 * 12;
    if (premium) {
      gesamt.innerHTML = gesamtCalc * 1.5;
    } else {
      gesamt.innerHTML = gesamtCalc;
    }
  }
});
document.getElementById("premium-1").addEventListener("change", (ev) => {
  let value = document.getElementById("premium-1").checked;
  let gesamtValue = document.getElementById("preis-1").innerHTML;
  if (value) {
    document.getElementById("preis-1").innerHTML = parseInt(gesamtValue) * 1.5;
  } else {
    document.getElementById("preis-1").innerHTML = parseInt(gesamtValue) / 1.5;
  }
});
document.getElementById("dauer-2").addEventListener("change", (ev) => {
  let gesamt = document.getElementById("preis-2");
  let value = document.getElementById("dauer-2").value;
  if (value === "6") {
    gesamt.innerHTML = "540";
  } else if (value === "12") {
    gesamt.innerHTML = "999";
  }
});
document.getElementById("premium-2").addEventListener("click", (ev) => {
  ev.preventDefault();
  document.getElementById("premium-2").checked = true;
});
function Buchen() {
  window.location.href = "https://web.find-a.app";
}

function openDialog(id) {
  let content = document.getElementById(`content-${id}`);
  let extend = document.getElementById(`extend-${id}`);
  let text = document.getElementById(`extendt-${id}`);

  if (extend.style.display === "none") {
    text.style.display = "none";
    extend.style.display = "flex";
    extend.animate([{ height: "0%" }, { height: "calc(100% - 61px)" }], {
      duration: 200,
    });
    setTimeout(() => {
      text.style.display = "block";
      text.style.opacity = "0";
      text.animate([{ opacity: "0" }, { opacity: "1" }], {
        duration: 200,
        fill: "forwards",
      });
    }, 100);
  } else {
    text.style.display = "none";
    extend.animate([{ height: "calc(100% -  61px)" }, { height: "0%" }], {
      duration: 200,
    });
    setTimeout(() => {
      extend.style.display = "none";
      text.style.display = "none";
    }, 210);
  }
}
