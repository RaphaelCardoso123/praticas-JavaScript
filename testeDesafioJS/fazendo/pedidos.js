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

function addProd(Item, descricao, preco, qnt, subTotal) {
    let tr = document.createElement('tr')
        let td = document.createElement('td')
        td.textContent = Item
        tr.appendChild(td)
        td = document.createElement('td')
        td.textContent = descricao
        tr.appendChild(td)
        td = document.createElement('td')
        td.textContent = preco
        tr.appendChild(td)
        td = document.createElement('td')
        td.textContent = qnt
        tr.appendChild(td)
        td = document.createElement('td')
        td.textContent = subTotal
        td.setAttribute('class', 'subTotal')
        tr.appendChild(td)
    document.querySelector('tbody').appendChild(tr)
}

function somaTotal(){
    let subTotais = document.querySelectorAll('.subTotal')
    let valorTotal = 0
    for(let item of subTotais){
        valorTotal += Number(item.textContent)
    }
    return valorTotal
}

export function inserePedido(listaProdutos){
   let itensAdicionado = []
    document.querySelector('#lancarPedido').addEventListener('click', function(){
        
        let item = document.querySelector('#localizarProdPrimeiro').value
        let descricao = document.querySelector('#localizarProdSegundo').value
        let preco = document.querySelector('#localizarProdTerceiro').value
        let qnt = document.querySelector('#localizarProdQuarto').value
        
        if(itensAdicionado.includes(item) === false){
            if(qnt <= listaProdutos[item]['qtdEstoqueProd']){
                let subTotal = Number(qnt)*Number(preco)
                addProd(item, descricao, preco, qnt, subTotal)   
                document.querySelector('#valorTotalResultado').value = somaTotal()
                itensAdicionado.push(item)
                
            }
            else{
                alert('Não existe essa quantidade no estoque')
            }
        }
        else{
            alert('Esse item já foi adicionado na lista')
        }       
    })  
}


