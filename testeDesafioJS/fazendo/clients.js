export let  clientes = [
    {
      "codCliente"   : 0,
      "nomeCliente"  : "Donald Blake",
      "dataCadCli" :"12/10/2010",
    },
    
    {
      "codCliente"   : 1,
      "nomeCliente"  : "Bruce Wayne",
      "dataCadCli" :"01/08/2017",
    },
    {
      "codCliente"   : 2,
      "nomeCliente"  : "Diana",
      "dataCadCli" :"02/05/2020",
    },            
] 

export let contadorClientes = 0;

//BOTÃO PARA VER O CLIENTE SEGUINTE
export function proxCliente() {   
  let btnProx = document.querySelector("#proximoBotaoCliente")
  btnProx.addEventListener('click', function(){
  adicionando = false
    
  if(contadorClientes < clientes.length -1) {
      contadorClientes += 1;
      let Input1 = document.querySelector("#primeiroInputCliente")
      Input1.value = clientes[contadorClientes]['codCliente']
      let Input2 = document.querySelector("#segundoInputCliente")
      Input2.value = clientes[contadorClientes]['nomeCliente']
      let Input3 = document.querySelector("#terceiroInputCliente")
      Input3.value = clientes[contadorClientes]['dataCadCli']
    } else {
        alert("Não existe mais clientes cadastrados!!")
    }
  })  
} 

//BOTÃO PARA VER O CLIENTE ANTERIOR
export function anterCliente() {
  let btnAnterior = document.querySelector("#anteriorBotaoCliente")
  btnAnterior.addEventListener('click', function(){
    
    if(contadorClientes > 0){
      adicionando = false
      contadorClientes -= 1;
      let Input1 = document.querySelector("#primeiroInputCliente")
      Input1.value = clientes[contadorClientes]['codCliente']
      let Input2 = document.querySelector("#segundoInputCliente")
      Input2.value = clientes[contadorClientes]['nomeCliente']
      let Input3 = document.querySelector("#terceiroInputCliente")
      Input3.value = clientes[contadorClientes]['dataCadCli']
    } else {
        alert("Fim de clientes cadastrados!!")
    }
  })
}

//CLIENTES ABRE COM O PRIMEIRO REGISTRO VISÍVEL
export function valorInicial(){
  adicionando = false
  let Input1 = document.querySelector("#primeiroInputCliente")
  Input1.value = clientes[0]['codCliente']
  let Input2 = document.querySelector("#segundoInputCliente")
  Input2.value = clientes[0]['nomeCliente']
  let Input3 = document.querySelector("#terceiroInputCliente")
  Input3.value = clientes[0]['dataCadCli']
}

//BOTÃO PARA ADICIONAR NOVO CLIENTE
let adicionando = false

export function novoCliente(){
  let novoCliente = document.querySelector("#novoBotaoCliente")
  novoCliente.addEventListener('click', function(){

    adicionando = true
    let Input1 = document.querySelector("#primeiroInputCliente")
    Input1.value = clientes.length
    let Input2 = document.querySelector("#segundoInputCliente")
    Input2.value = ""
    let Input3 = document.querySelector("#terceiroInputCliente")
    Input3.value = new Date().toLocaleString("pt-br", {year:"numeric", month:"2-digit", day:"2-digit"})
    contadorClientes = clientes.length 
  })  
}

//BOTÃO PARA SALVAR CLIENTE ADICIONADO
export function salvarCliente(){  
    let salvarCliente = document.querySelector("#salvarNovoCliente")

    salvarCliente.addEventListener('click', function(){
    if(adicionando === true){
      let Input1 = document.querySelector("#primeiroInputCliente")
      let Input2 = document.querySelector("#segundoInputCliente")
      let Input3 = document.querySelector("#terceiroInputCliente")

      clientes.push({
        "codCliente"   : Input1.value,
        "nomeCliente"  : Input2.value,
        "dataCadCli" : Input3.value,      
      })
      adicionando = false
      alert('Novo cliente foi salvo.')
    } else {
      alert("Esse cliente já existe no cadastro")
    }
  })
}