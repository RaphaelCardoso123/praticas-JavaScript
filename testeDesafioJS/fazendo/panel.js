import {clientes, } from './clientes.js'
import {produtos, semDisplay} from './produtos.js'

const btn_fechar = document.querySelector("#btn_fechar")
    clientes.push("adicionando")
    
    btn_fechar.addEventListener("click", function(){
        
        let divMae = document.getElementById("clientes")
        divMae.style.display = "block";    //divMae.style.display = "none"; p/ ver o botão fechar funcionando

 })

 semDisplay() //comentar para ver o botão fechar funcionando


 const btn_fechar_prod = document.querySelector("#btn_fechar_prod")
 clientes.push("adicionando")
 
 btn_fechar_prod.addEventListener("click", function(){
     
     let divMae = document.getElementById("produtos")
     divMae.style.display = "block";  //divMae.style.display = "none"; p/ ver o botão fechar funcionando

})

const btn_fechar_ped = document.querySelector("#btn_fechar_ped")
clientes.push("adicionando")

btn_fechar_ped.addEventListener("click", function(){
    
    let divMae = document.getElementById("pedido_cliente")
    divMae.style.display = "block"; //divMae.style.display = "none"; p/ ver o botão fechar funcionando

})






//fazer a msm lógica só que para chamar os ids de clientes, produtos e pedidos