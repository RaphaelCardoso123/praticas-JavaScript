export let produtos = [
    {
      "codProduto"   : 0,
      "descProduto"    : "Caneta esferográfica",
      "precoProduto" : 0.80,  
      "qtdEstoqueProd" : 10, 
    },
    
    {
      "codProduto"   : 1,
      "descProduto"    : "Cola Print",
      "precoProduto" : 3.65, 
      "qtdEstoqueProd" : 50,   
    },  
    
]

//FUNÇÃO PARA LIMPAR A TELA PANEL
export function semDisplay() {
        
  let divMae = document.getElementById("clientes")
  divMae.style.display = "none";
     
  divMae = document.getElementById("produtos")
  divMae.style.display = "none";
        
  divMae = document.getElementById("pedido_cliente")
  divMae.style.display = "none";
}

//teste terça/tarde (valorInicial)
export function valorInicialProduto(){
  let adicionando = false

  let InputProd1 = document.querySelector("#primeiroInputProduto")
  InputProd1.value = produtos[0]['codProduto']

  let InputProd2 = document.querySelector("#segundoInputProduto")
  InputProd2.value = produtos[0]['descProduto']

  let InputProd3 = document.querySelector("#terceiroInputProduto")
  InputProd3.value = produtos[0]['precoProduto']

  let InputProd4 = document.querySelector("#quartoInputProduto")
  InputProd4.value = produtos[0]['qtdEstoqueProd']
}



            //PAREI AQUI ANTES DA REUNIAO
//fazer essa parte que está comentado abaixo

export let contadorProdutos = 0;
// export let contadorClientes = 0;
export function proxProduto(){
  let btnProxProd = document.querySelector("#proximoBotaoProduto")
  btnProxProd.addEventListener('click', function(){
  adicionando = false

  if(contadorProdutos < produtos.length -1) {
    contadorProdutos += 1;
    let InputProd1 = document.querySelector("#primeiroInputProduto")
    InputProd1.value = produtos[contadorProdutos]['codProduto']

    let InputProd2 = document.querySelector("#segundoInputProduto")
    InputProd2.value = produtos[contadorProdutos]['descProduto']

    let InputProd3 = document.querySelector("#terceiroInputProduto")
    InputProd3.value = produtos[contadorProdutos]['precoProduto']

    let InputProd4 = document.querySelector("#quartoInputProduto")
    InputProd4.value = produtos[contadorProdutos]['qtdEstoqueProd']

  } else {
    alert("Não existe mais produtos cadastrados!!")
  }
  })
}
  // export function proxCliente() { 
  //   let btnProx = document.querySelector("#proximoBotaoCliente")
  //   btnProx.addEventListener('click', function(){
  //     adicionando = false
  //     if(contadorClientes < clientes.length-1) {
  //     contadorClientes += 1;
  //     let Input1 = document.querySelector("#primeiroInputCliente")
  //       Input1.value = clientes[contadorClientes]['codCliente']
  //       let Input2 = document.querySelector("#segundoInputCliente")
  //       Input2.value = clientes[contadorClientes]['nomeCliente']
  //       let Input3 = document.querySelector("#terceiroInputCliente")
  //       Input3.value = clientes[contadorClientes]['dataCadCli']
  //     } else {
//         alert("Não existe mais clientes cadastrados!!")
//     }
//   })  
// } 








