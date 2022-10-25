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









