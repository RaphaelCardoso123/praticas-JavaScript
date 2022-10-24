window.onload = function() {
    const btnLogin = document.querySelector("#loginEnter")
    const txtUser = document.querySelector("#user")
    const txtpassword = document.querySelector("#password")


    const users = [
            {
              "user" : "Master",
              "pws"  : "12345"
            },
            
            {
              "user" : "Marcelo",
              "pws"  : "senha"
            }
    ] 


    btnLogin.addEventListener('click', function() {
        //registro foi uma váriavel qualquer que criei aqui.
        let autenticar = false
        for(let registro of users) {
          console.log(registro)
          if(registro.user === txtUser.value && registro.pws === txtpassword.value) {
            window.location.href = './panel.html'
            autenticar = true
           }

        }
        if(autenticar == false) {
            alert("Usuário ou senha incorreta!!! Tente novamente.")
          } 
    })
}