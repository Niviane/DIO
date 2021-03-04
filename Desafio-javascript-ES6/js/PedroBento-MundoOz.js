var entrada = [];

for ( let i = 0; ; i++ ) {
   let linha = gets();
    
    if ( linha == "")
      break;
    
    entrada.push(linha);
    //console.log(entrada[i]);
}
let unique = [...new Set(entrada.map(item => item))];
console.log(unique.length);