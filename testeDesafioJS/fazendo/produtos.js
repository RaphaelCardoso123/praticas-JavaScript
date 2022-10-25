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
    
    {
      "codProduto"   : 2,
      "descProduto"    : "Caderno",
      "precoProduto" : 9.99, 
      "qtdEstoqueProd" : 20,   
    }, 
]

//FUNÇÃO PARA LIMPAR A TELA DO PANEL
export function semDisplay() {
        
  let divMae = document.getElementById("clientes")
  divMae.style.display = "none";
     
  divMae = document.getElementById("produtos")
  divMae.style.display = "none";
        
  divMae = document.getElementById("pedido_cliente")
  divMae.style.display = "none";
}

//teste terça/tarde 

//PRODUTOS ABRE COM O PRIMEIRO REGISTRO VISÍVEL
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


//teste terça/tarde 

//BOTÃO PARA VER O PRODUTO SEGUINTE
export let contadorProdutos = 0;

export function proxProduto(){
  let btnProxProd = document.querySelector("#proximoBotaoProduto")
  btnProxProd.addEventListener('click', function(){
  // adicionandoProd = false
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

//BOTÃO PARA VER O PRODUTO ANTERIOR
export function anterProduto() {
  let btnAnteriorProduto = document.querySelector("#anterBotaoProduto")
  btnAnteriorProduto.addEventListener('click', function() {
    if(contadorProdutos > 0) {
  //adicionandoProd = false
      contadorProdutos -= 1;
      let InputProd1 = document.querySelector("#primeiroInputProduto")
      InputProd1.value = produtos[contadorProdutos]['codProduto']
      let InputProd2 = document.querySelector("#segundoInputProduto")
      InputProd2.value = produtos[contadorProdutos]['descProduto']
      let InputProd3 = document.querySelector("#terceiroInputProduto")
      InputProd3.value = produtos[contadorProdutos]['precoProduto']
      let InputProd4 = document.querySelector("#quartoInputProduto")
      InputProd4.value = produtos[contadorProdutos]['qtdEstoqueProd']
    } else {
      alert("Fim de produtos cadastrados!!")
    }
  })
}

  // export function anterCliente() {

  //   let btnAnterior = document.querySelector("#anteriorBotaoCliente")
  //   btnAnterior.addEventListener('click', function(){
  //     if(contadorClientes > 0){
  //       adicionando = false
  //       contadorClientes -= 1;
  //       let Input1 = document.querySelector("#primeiroInputCliente")
  //       Input1.value = clientes[contadorClientes]['codCliente']
//       let Input2 = document.querySelector("#segundoInputCliente")
//       Input2.value = clientes[contadorClientes]['nomeCliente']
//       let Input3 = document.querySelector("#terceiroInputCliente")
//       Input3.value = clientes[contadorClientes]['dataCadCli']
//     } else {
//         alert("Fim de clientes cadastrados!!")
//     }
//   })
// }
