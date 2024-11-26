function requestFlyer() {
  const count = document.getElementById("materials-form-count");
  const email = document.getElementById("materials-form-email");
  const name = document.getElementById("materials-form-name");
  const more = document.getElementById("materials-form-textarea");

  const error = document.getElementById("materials-form-error");

  if (!error) return;

  if (!count || !email || !name || !more) return;

  if (!count.value) {
    error.innerHTML = "Bitte geben Sie die Anzahl der Flyer an.";
    setTimeout(() => {
      error.innerHTML = "";
    }, 3000);
    return;
  }
  if (!email.value) {
    error.innerHTML = "Bitte geben Sie Ihre E-Mail-Adresse an.";
    setTimeout(() => {
      error.innerHTML = "";
    }, 3000);
    return;
  }
  if (!name.value) {
    error.innerHTML = "Bitte geben Sie Ihren Schul-Namen an.";
    setTimeout(() => {
      error.innerHTML = "";
    }, 3000);
    return;
  }

  const data = {
    count: count.value,
    email: email.value,
    name: name.value,
    more: more.value,
  };
  fetch("https://payments.find-a.app/schule/flyer", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (!data.processable) {
        error.innerHTML =
          "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.";
        setTimeout(() => {
          error.innerHTML = "";
        }, 3000);
        return;
      }

      count.value = "";
      email.value = "";
      name.value = "";
      more.value = "";

      alert(
        "Ihre Anfrage wurde erfolgreich versendet. Wir werden uns in Kürze bei Ihnen melden."
      );
      return;
    })
    .catch((err) => {
      console.log(err);
      error.innerHTML =
        "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.";
      setTimeout(() => {
        error.innerHTML = "";
      }, 3000);
      return;
    });
}
