var aux = [];
let limite = 0;
let N = parseInt(gets()); //número de tartarugas
let V = gets().split(' '); //Velocidade

while (true)
{
  for ( let i = 0; i < V.length ; i++ ) {
    aux.push(parseInt(V[i]));
  }
  //console.log(aux);
  
  var max = Math.max(...aux);
  
  //console.log("max " + max);
  
  if (max >= 20){
    console.log(3);
  } else if (max >= 10){
    console.log(2);
  } else {
    console.log(1);
  };
    
  N = parseInt(gets()); 
  if (isNaN(N))
    break;
  V = gets().split(' '); 
  aux=[];
};

