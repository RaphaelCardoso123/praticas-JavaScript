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

export let contadorProdutos = 0;

//FUNÇÃO PARA LIMPAR A TELA DO PANEL
export function semDisplay() {      
  let divMae = document.getElementById("clientes")
  divMae.style.display = "none";
     
  divMae = document.getElementById("produtos")
  divMae.style.display = "none";
        
  divMae = document.getElementById("pedido_cliente")
  divMae.style.display = "none";
}

//PRODUTOS ABRE COM O PRIMEIRO REGISTRO VISÍVEL
export function valorInicialProduto(){          
  let InputProd1 = document.querySelector("#primeiroInputProduto")
  InputProd1.value = produtos[0]['codProduto']

  let InputProd2 = document.querySelector("#segundoInputProduto")
  InputProd2.value = produtos[0]['descProduto']

  let InputProd3 = document.querySelector("#terceiroInputProduto")
  InputProd3.value = produtos[0]['precoProduto']

  let InputProd4 = document.querySelector("#quartoInputProduto")
  InputProd4.value = produtos[0]['qtdEstoqueProd']
}

//BOTÃO PARA VER O PRODUTO SEGUINTE
export function proxProduto(){
  let btnProxProd = document.querySelector("#proximoBotaoProduto")
  btnProxProd.addEventListener('click', function(){
            
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

//BOTÃO PARA ADICIONAR NOVO PRODUTO
let adicionandoProd = false
export function novoProduto() {
  let novoProduto = document.querySelector("#novoBotaoProduto")
  novoProduto.addEventListener('click', function() {

    adicionandoProd = true
    let InputProd1 = document.querySelector("#primeiroInputProduto")
    InputProd1.value = produtos.length

    let InputProd2 = document.querySelector("#segundoInputProduto")
    InputProd2.value = ""

    let InputProd3 = document.querySelector("#terceiroInputProduto")
    InputProd3.value = ""                     

    let InputProd4 = document.querySelector("#quartoInputProduto")
    InputProd4.value = ""                      
   
  })
}

//BOTÃO PARA SALVAR PRODUTO ADICIONADO
export function salvarProdutos() {
  let salvarProdutos = document.querySelector("#salvarNovoProduto")
  salvarProdutos.addEventListener('click', function() {
    if(adicionandoProd === true) {
      let InputProd1 = document.querySelector("#primeiroInputProduto")
      let InputProd2 = document.querySelector("#segundoInputProduto")
      let InputProd3 = document.querySelector("#terceiroInputProduto")
      let InputProd4 = document.querySelector("#quartoInputProduto")

      produtos.push({
        "codProduto" : InputProd1.value,
        "descProduto" : InputProd2.value,
        "precoProduto" : InputProd3.value,
        "qtdEstoqueProd" : InputProd4.value,
      })
      adicionandoProd = false
      alert("Novo produto foi salvo.")
    } else {
      alert("Esse produto já existe no cadastro")
    }
  })
}

