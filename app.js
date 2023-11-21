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

function calculate(name, yob) {
  const age = new Date().getFullYear() - yob;
  console.log(`${name} is ${age} years old`);
  return age;
}
console.log(new Date());
console.log(calculate("Ahmet", 1990));
const ismetAge = calculate("Ismet", 1890);
console.log("Ismet's Age:", ismetAge);

function add(num1, num2) {
  return num1 + num2;
}

const result1 = add(3, 5);
const result2 = add(5, 9);

console.log(result1, result2);
