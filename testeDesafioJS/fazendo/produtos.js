export let produtos = [
    {
      "codProduto"   : 1,
      "descProduto"    : "Caneta esferográfica",
      "precoProduto" : 0.80,  
      "qtdEstoqueProd" : 10, 
    },
    
    {
      "codProduto"   : 2,
      "descProduto"    : "Cola Print",
      "precoProduto" : 3.65, 
      "qtdEstoqueProd" : 50,   
    },  
    
]


export function semDisplay() {
        
  let divMae = document.getElementById("clientes")
  divMae.style.display = "none";

        
  divMae = document.getElementById("produtos")
  divMae.style.display = "none";

        
  divMae = document.getElementById("pedido_cliente")
  divMae.style.display = "none";

}



//teste  PRECISA DESSA PARTE??? FUNCIONOU MESMO SEM 
export function comDisplay() {

  let divPai = document.getElementById("clientes")
  divPai.style.display = "none";

  divPai = document.getElementById("produtos")
  divPai.style.display = "none"

  divPai = document.getElementById("pedido_cliente")
  divPai.style.display = "none"
}