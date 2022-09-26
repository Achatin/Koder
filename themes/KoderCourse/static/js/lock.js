function lock() {
    let pass = prompt("Zadaj heslo", "");
    if (pass === "pico-8") {
      location.replace("./lekcia2")
    } else {
      alert("Nesprávne heslo 😨")
    }
}