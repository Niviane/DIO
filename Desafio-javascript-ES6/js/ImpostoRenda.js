let SALARIO = parseFloat(gets());
let IMPOSTO = 0;

if (SALARIO <= 3000) {
  IMPOSTO = (SALARIO - 2000) * 0.08;
} else if (SALARIO <= 4500) {
  IMPOSTO = (1000 * 0.08) + ((SALARIO - 3000) * 0.18);
} else  { //if (SALARIO > 4500)
  IMPOSTO = (1000 * 0.08) + (1500 * 0.18) + ((SALARIO - 4500) * 0.28);
}

if (IMPOSTO <= 0) {
  console.log("Isento");
} else {
  console.log("R$ " + parseFloat(IMPOSTO).toFixed(2));
}