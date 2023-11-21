console.log("FUNC DECLARATION");

function yazdirMerhaba() {
  console.log("Hello World");
}

yazdirMerhaba();
yazdirMerhaba();
yazdirMerhaba();

function yazdirParametre(message, year = "") {
  console.log(message, year);
}
yazdirParametre("Hello", "2024");
yazdirParametre("Salut", "2025");
yazdirParametre("Hola", "2026");
yazdirParametre("Hallo");
