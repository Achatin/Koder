function lock(link) {
    let pass = prompt("Zadaj heslo", "");
    if (pass === "pico-8") {
      location.replace(link)
    } else {
      alert("Nesprávne heslo 😨")
    }
}

function lock_py(link) {
  let pass = prompt("Zadaj heslo", "");
  if (pass === "python") {
    location.replace(link)
  } else {
    alert("Nesprávne heslo 😨")
  }
}