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
        
        for(let reg of users) {
            
                if(reg.user == txtUser.value && reg.pws == txtpassword.value) {
                    location.href = 'http://127.0.0.1:5500/testeApagar/panel.html'
                } else {
                    alert("Usuário ou senha incorreta!!! Tente novamente.")
                }
            
        }
    })
}
