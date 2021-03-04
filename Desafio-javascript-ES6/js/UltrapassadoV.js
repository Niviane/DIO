// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
let R = parseInt(gets());
let V = 0;
let qt = 1;

do {
  V = parseInt(gets());
} while (V <= R);

let i = R;

while (i <= V){
  R++;
  qt++;
  i+=R;
}

console.log(qt);