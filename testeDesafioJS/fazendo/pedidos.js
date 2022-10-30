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
        alert("Produto inexistente!!!")        
    })    
}

//-----------------------------------------------------------------------


////teste

// export function addProd() {
//     let table = document.querySelector("table");
//     let test = table.insertRow(table.length - 1);
//     test.classList.add("line");

//     let item = test.insertCell(0);
//     let descricao = test.insertCell(1);
//     let preco = test.insertCell(2);
//     let qtd = test.insertCell(3);
//     let sub_total = test.insertCell(4);

//     let form_pedido = document.forms[2];
//     item.innerHTML = form_pedido[2].value;
//     descricao.innerHTML = form_pedido[3].value;
//     preco.innerHTML = form_pedido[4].value;
//     qtd.innerHTML = form_pedido[5].value;
//     sub_total.innerHTML = (Number(form_pedido[5].value) * Number(preco.innerHTML)).toFixed(2);

//     let totFinal = document.getElementById("valorTotalInput");
//     valorFinal.innerHTML = (Number(valorFinal.innerHTML) + Number(sub_total.innerHTML)).toFixed(2);
// }
