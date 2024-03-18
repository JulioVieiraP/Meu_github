document.addEventListener("DOMContentLoaded", function(){
    const avatar = document.getElementById('avatar')
    const perfilName = document.getElementById('perfil-name')
    const perfilUserName = document.getElementById('perfil-username')
    const repositórios = document.getElementById('Repositórios')
    const seguidores = document.getElementById('seguidores')
    const seguindo = document.getElementById('seguindo')
    const link = document.getElementById('link')

    fetch('https://api.github.com/users/JulioVieiraP')
    .then(function (resposta) {
        return resposta.json()
    })
    .then(function(json) {
        avatar.src = json.avatar_url
        perfilName.innerText = json.name
        perfilUserName.innerText= json.login
        repositórios.innerText  = json.public_repos
        seguidores.innerText = json.followers
        seguindo.innerText = json.following
        link.href = json.html_url
    })
    .catch(function(error){
        alert("Aconteceu um error volte novamente outra hora")
    })
})