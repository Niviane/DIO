alert("teste");
//console.log("oi");
function soma (x1, x2){
    return x1+x2;
}

//alert (soma(5,3));

function clicou(){
    //alert("Obrigada por clicar");
    document.getElementById("agradecimento").innerHTML = "<b> Obrigada por clicar.</b>";
}

function redirecionar(){
    //window.open("https://web.digitalinnovation.one/home");
    window.location.href = "https://www.itau.com.br";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b> Obrigada por passar o mouse.</b>";
    elemento.innerHTML = "<b> Obrigada por passar o mouse.</b>";
}

function voltar(elemento){
    //document.getElementById("voltar").innerHTML = "<b> Passa o mouse aqui.</b>";
    elemento.innerHTML = "<b> Passa o mouse aqui.</b>";
}

function load(elemento){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}