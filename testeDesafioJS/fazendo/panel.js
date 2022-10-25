import {clientes, valorInicial, contadorClientes, proxCliente, anterCliente, novoCliente, salvarCliente} from './clients.js'
import {semDisplay} from './produtos.js'

semDisplay()
valorInicial()
const btn_fechar = document.querySelector("#btn_fechar")   
    btn_fechar.addEventListener("click", function(){
        
    let divMae = document.getElementById("clientes")
    divMae.style.display = "none";    
 })


 const btn_fechar_prod = document.querySelector("#btn_fechar_prod")
    btn_fechar_prod.addEventListener("click", function(){
     
    let divMae = document.getElementById("produtos")
    divMae.style.display = "none";  
})


const btn_fechar_ped = document.querySelector("#btn_fechar_ped")
    btn_fechar_ped.addEventListener("click", function(){
    
    let divMae = document.getElementById("pedido_cliente")
    divMae.style.display = "none"; 
})


const li_clientes = document.querySelector("#li_clientes")

    li_clientes.addEventListener("click", function(){
    semDisplay()    
    let divPai = document.getElementById("clientes")
    divPai.style.display = "block";   
 })


 const li_produtos = document.querySelector("#li_produtos")  
    li_produtos.addEventListener("click", function(){
    semDisplay()    
    let divPai = document.getElementById("produtos")
    divPai.style.display = "block";   
  })


const li_pedidos = document.querySelector("#li_pedidos")  
    li_pedidos.addEventListener("click", function(){
    semDisplay()      
    let divPai = document.getElementById("pedido_cliente")
    divPai.style.display = "block";   
   })


//------------------------------- CLIENTES -----------------------------------
proxCliente()
anterCliente()
novoCliente()
salvarCliente()


