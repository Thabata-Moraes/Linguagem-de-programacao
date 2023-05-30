async function pesquisarOMDB(){
    const titulo = document.getElementById('titulo').value
    const filme = await fetch(`https://www.omdbapi.com/?t=${titulo}&apikey=10069c5`)
    .then(resp => {
        return resp.json() // converte a resposta em formato json
    })
    .catch(error => alert('Erro ao se conectar com a API', error))
    document.getElementById('title').innerHTML = filme.Title
    document.getElementById('year').innerHTML = filme.Year
    document.getElementById('rated').innerHTML = filme.Rated
    document.getElementById('released').innerHTML = filme.Released

}