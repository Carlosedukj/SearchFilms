// Key API = d77654c8

// Capturando os elementos.

const searchFilms = document.getElementById("search");
const errorMessage = document.getElementById("error-message");
const nameFilms = document.getElementById("name-films");
const cardFilms = document.getElementById("card-films");

// Função assíncrona para buscar filmes na API
async function searchMovies() {

    // 1. Limpa os resultados anteriores
  cardFilms.innerHTML = ""       // Remove os cards antigos
  errorMessage.textContent = ""  // Limpa mensagem de erro

  // 2. Validação: verifica se o input está vazio
  if (nameFilms.value === "") {
    errorMessage.textContent = "Digite um filme" // Mostra mensagem de erro
    return // Para a execução da função
  }

  // Pega o valor digitado pelo usuário
  const films = nameFilms.value

  // 3. Tenta executar a requisição
  try {
    // Faz a requisição para a API OMDb com o nome do filme
    const response = await fetch(`https://www.omdbapi.com/?s=${films}&apikey=d77654c8`)
    
    // Converte a resposta para JSON
    const data = await response.json()

    // 4. Verifica se a API encontrou resultados
    if (data.Response === "False") {
      errorMessage.textContent = "Filme não encontrado" // Mostra erro
      return // Para a execução
    }

    // 5. Percorre a lista de filmes retornados
    data.Search.forEach((film) => {

      // Cria um card (div) para cada filme
      const card = document.createElement("div")

      // Define o conteúdo do card com dados do filme
      card.innerHTML = 
      `
        <img src="${film.Poster}" alt="${film.Title}"> 
        <h3>${film.Title}</h3>                        
        <p>Ano: ${film.Year}</p>                            
      `

      // Adiciona o card na tela
      cardFilms.appendChild(card)
    })

  } catch (erro) {
    // Caso aconteça algum erro na requisição
    errorMessage.textContent = "Erro ao buscar filmes. Tente novamente."
  }
  
}

searchFilms.addEventListener("click", function() {
  if (nameFilms.classList.contains("active")) {
    searchMovies()
  } else {
    nameFilms.classList.toggle("active")
    nameFilms.focus()
  }
})

nameFilms.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    searchMovies()
  }
})