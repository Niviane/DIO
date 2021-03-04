console.log("início da divisao");
//limit = parseInt(gets());
limit = prompt("Informe a qtd de cálculos ");
for (let i = 0; i < limit; i++) {
    //let line = gets().split(" ");
    //let X = parseInt(line[0]);
    //let Y = parseInt(line[1]);
    let X = prompt("Informe o dividendo ");
    let Y = prompt("Informe o divisor ");
    if (Y == 0) {
        console.log("divisao impossivel");
    } else {
        let divisao = parseFloat(X / Y).toFixed(1); 
        console.log(divisao);
    }
}
console.log("fim da divisao");