function lock() {
    let pass = prompt("Zadaj heslo", "");
    let text;
    if (pass === "pico-8") {
      location.replace("./lekcia2")
    } else {
      alert("Nesprávne heslo 😨")
    }
}