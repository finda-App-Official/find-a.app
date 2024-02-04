const tr = document.getElementById("tr-2");
const td1 = document.getElementById("td-1");
const td2 = document.getElementById("td-2");
const td3 = document.getElementById("td-3");
const thb1 = document.getElementById("thb-1");
const thb2 = document.getElementById("thb-2");
const thb3 = document.getElementById("thb-3");

function showInfo(num) {
  if (num === 1) {
    if (td1.checkVisibility()) {
      td1.classList.add("td-empty");
      thb1.classList.remove("th-button-active");
    } else {
      td1.classList.remove("td-empty");
      thb1.classList.add("th-button-active");
    }
  } else if (num === 2) {
    if (td2.checkVisibility()) {
      td2.classList.add("td-empty");
      thb2.classList.remove("th-button-active");
    } else {
      td2.classList.remove("td-empty");
      thb2.classList.add("th-button-active");
    }
  } else if (num === 3) {
    if (td3.checkVisibility()) {
      td3.classList.add("td-empty");
      thb3.classList.remove("th-button-active");
    } else {
      td3.classList.remove("td-empty");
      thb3.classList.add("th-button-active");
    }
  }
}
