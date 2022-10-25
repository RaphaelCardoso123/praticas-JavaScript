import {clientes, } from './clientes.js'
import {comDisplay, produtos, semDisplay} from './produtos.js'

const btn_fechar = document.querySelector("#btn_fechar")
    clientes.push("adicionando")//posso apagar era só um teste!!!???
    
    btn_fechar.addEventListener("click", function(){
        
        let divMae = document.getElementById("clientes")
        divMae.style.display = "none";    //(block)
 })


 const btn_fechar_prod = document.querySelector("#btn_fechar_prod")
 clientes.push("adicionando")//posso apagar era só um teste!!!???
 
 btn_fechar_prod.addEventListener("click", function(){
     
     let divMae = document.getElementById("produtos")
     divMae.style.display = "none";  //(block)
})


const btn_fechar_ped = document.querySelector("#btn_fechar_ped")
clientes.push("adicionando") //posso apagar era só um teste!!!???

btn_fechar_ped.addEventListener("click", function(){
    
    let divMae = document.getElementById("pedido_cliente")
    divMae.style.display = "none"; //(block)
})

 semDisplay() //comentar para ver o botão fechar funcionando




//fazer a msm lógica só que para chamar os ids de clientes, produtos e pedidos



//quando clica em pedido primeiro as tabelas saem com css esperado, caso contrario sai sem o css configurado
//teste ok50%
const li_clientes = document.querySelector("#li_clientes")  
li_clientes.addEventListener("click", function(){
        
        let divPai = document.getElementById("clientes")
        divPai.style.display = "block";   
 })


 const li_produtos = document.querySelector("#li_produtos")  
 li_produtos.addEventListener("click", function(){
         
         let divPai = document.getElementById("produtos")
         divPai.style.display = "block";   
  })


  const li_pedidos = document.querySelector("#li_pedidos")  
  li_pedidos.addEventListener("click", function(){
          
          let divPai = document.getElementById("pedido_cliente")
          divPai.style.display = "block";   
   })

 comDisplay()






   //teste
//    const lado_esquerdo = document.querySelectorAll("#lado_esquerdo")

//    let janelaAberta = []
//    lado_esquerdo.forEach(item => {
//     item.addEventListener('click', function() {
//         if(janelaAberta.length != 0) {
//             let fecharJanela = document.querySelector('#${janelaAberta[0]}')
//             fecharJanela.classList.add('fechar')
//             janelaAberta = []
//         }
//         let janela = document.querySelector('#${item.dataset.janela}')
//         janela.classList.remove('fechar')
//         janelaAberta.push(item.dataset.janela)
//     });
//    })