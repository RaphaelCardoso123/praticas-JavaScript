export function pedidoDados(clientesLista) {
    let pedidoDados = document.querySelector("#codInputPedido")
    pedidoDados.addEventListener('focusout', function(){
        for(let itemLista of clientesLista){
            if(itemLista['codCliente'] == pedidoDados.value) {
                document.querySelector("#codInputNomePedido").value = itemLista['nomeCliente']
                return
            } 
        }
        alert("Código não existente")        
    })    
}

//-----------------------------------------------------------------------
export function pedDados(cliLista) {
    let pedDados = document.querySelector("#localizarProdPrimeiro")
    pedDados.addEventListener('focusout', function(){
        for(let itemList of cliLista){
            console.log(cliLista)
            if(itemList['codProduto'] == pedDados.value) {
                document.querySelector("#localizarProdSegundo").value = itemList['descProduto']
                document.querySelector("#localizarProdTerceiro").value = itemList['precoProduto']
                return
            } 
        }
        alert("falha!")        
    })    
}

//-----------------------------------------------------------------------
 //(botão lançar item pedidos) -> id="lancarPedido"
 //(table) -> id="tableLista"
