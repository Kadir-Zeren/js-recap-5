// console.log("FUNC DECLARATION");

// function yazdirMerhaba() {
//   console.log("Hello World");
// }

// yazdirMerhaba();
// yazdirMerhaba();
// yazdirMerhaba();

// function yazdirParametre(message, year = "") {
//   console.log(message, year);
// }
// yazdirParametre("Hello", "2024");
// yazdirParametre("Salut", "2025");
// yazdirParametre("Hola", "2026");
// yazdirParametre("Hallo");

// function calculate(name, yob) {
//   const age = new Date().getFullYear() - yob;
//   console.log(`${name} is ${age} years old`);
//   return age;
// }
// console.log(new Date());
// console.log(calculate("Ahmet", 1990));
// const ismetAge = calculate("Ismet", 1890);
// console.log("Ismet's Age:", ismetAge);

// function add(num1, num2) {
//   return num1 + num2;
// }

// const result1 = add(3, 5);
// const result2 = add(5, 9);

// console.log(result1, result2);

// function isEvenOrOdd(num) {
//   let result;
//   if (num % 2 === 0) {
//     result = "EVEN";
//   } else {
//     result = "ODD";
//   }
//   return result;
// }

// const num = prompt("Please enter a number");
// console.log(`${num} is ${isEvenOrOdd(num)}`);

// console.log("FUNC EXPRESSION");

// const yazdir = function (message) {
//   console.log(message);
// };
// yazdir("Hallo 2023");

// let oddEven = function (number) {
//   return number % 2 === 0 ? "EVEN" : "ODD";
// };
// console.log(oddEven(5));
// console.log(oddEven(2)) ;

console.log("FUNK ARROW");

const kareAl = (num) => num * num;
const topla = (s1, s2) => s1 * s2;

console.log("Kare:", kareAl(4));
console.log("Topla:", topla(4, 5));

const findBiggest = (n1, n2, n3) => {
  let biggest = n1;

  if (n2 >= biggest) {
    biggest = n2;
  }
  if (n3 >= biggest) {
    biggest = n3;
  }
  return biggest;
};

console.log("Biggest:", findBiggest(1, 2, 3));

const findBiggestShort = (num1, num2, num3) => Math.max(num1, num2, num3);
console.log("Biggest:", findBiggestShort(1, 3, 2));
