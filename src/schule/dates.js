function getNextThursdayDate() {
  const today = new Date();
  const currentDay = today.getDay(); // Sonntag = 0, Montag = 1, ..., Donnerstag = 4, ...

  const skipThursday = true;
  if (currentDay === 4) {
    return "heute";
  } else {
    const daysUntilNextThursday = (4 - currentDay + 7) % 7;
    const nextThursday = new Date(today);
    nextThursday.setDate(today.getDate() + daysUntilNextThursday);
    if (skipThursday) {
      nextThursday.setDate(nextThursday.getDate() + 7);
    }
    return nextThursday.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }
}
document.getElementById("video-con").innerHTML = getNextThursdayDate();
