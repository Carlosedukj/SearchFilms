# Search Films

Um buscador de filmes que consome dados reais da API do OMDB. O usuário clica na lupa, digita o nome do filme e os resultados aparecem na tela com poster, título e ano de lançamento.

---

## Como usar

1. Clique na lupa para abrir o campo de busca
2. Digite o nome do filme
3. Pressione Enter ou clique na lupa novamente
4. Os resultados aparecem na tela automaticamente

---

## Funcionalidades

- Busca de filmes em tempo real via API
- Input com animação de expansão ao clicar na lupa
- Cards com poster, título e ano de cada filme
- Mensagem de erro quando o filme não é encontrado
- Validação de campo vazio
- Layout responsivo: grid no desktop, coluna única no mobile
- Limpeza automática dos resultados a cada nova busca

---

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- API OMDB

---

## O que aprendi construindo esse projeto

Esse foi meu quarto projeto e o primeiro consumindo uma API externa. Durante o desenvolvimento pratiquei:

- fetch para buscar dados de uma URL externa
- async/await para lidar com operações que demoram
- try/catch para tratar erros de requisição
- Manipulação de dados vindos de uma API real
- Criação dinâmica de cards com createElement e innerHTML
- Animação de input com classList.toggle e transition no CSS
- Evento keydown para buscar ao pressionar Enter
- Grid responsivo com media queries
- autocomplete off para melhor experiência do usuário


### Acesse o projeto
- Link: https://buscardor-de-filmes.netlify.app/
