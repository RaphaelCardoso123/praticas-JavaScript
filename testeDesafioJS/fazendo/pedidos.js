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