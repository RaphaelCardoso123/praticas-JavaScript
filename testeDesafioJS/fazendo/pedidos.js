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
// function InsereProduto() {
//     let tableLista = document.querySelector("#tableLista");
//     let linha = table.insertRow(tableLista.rows.length - 1);
//     linha.classList.add("line");

//     let item = linha.insertCell(0);
//     let desc = linha.insertCell(1);
//     let preco = linha.insertCell(2);
//     let qtd = linha.insertCell(3);
//     let sub_total = linha.insertCell(4);

//     let form_pedido = document.forms[2];
//     item.innerHTML = form_pedido[2].value;
//     desc.innerHTML = form_pedido[3].value;
//     preco.innerHTML = form_pedido[4].value;
//     qtd.innerHTML = form_pedido[5].value;
//     sub_total.innerHTML = (Number(form_pedido[5].value) * Number(preco.innerHTML)).toFixed(2);

//     let total = document.getElementById("total");
//     total.innerHTML = (Number(total.innerHTML) + Number(sub_total.innerHTML)).toFixed(2);
// }
