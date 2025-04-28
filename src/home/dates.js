const date = new Date();
date.setDate(date.getDate() + (4 - date.getDay()))

document.getElementById("video-con").innerHTML = date.toLocaleDateString("de-DE", { month: "2-digit", "year": "numeric", day: "2-digit"}) + ", 16 Uhr";

