
let qt = 0;
let soma = 0;

for ( let i = 1; ; i++ ) {
    let N = parseFloat(gets());
    
    if ( N < 0 || N > 10 ) {
      console.log("nota invalida");
    } else {
      qt++;
      soma = soma + N;
    }
    if (qt == 2) {
      break;
    }
  //console.log(qt);  
}
console.log("media = " + parseFloat(soma/2).toFixed(2));