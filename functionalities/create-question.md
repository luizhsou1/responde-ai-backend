# Cadastrar Questão

## Fluxo básico

1. Recebe uma requisição do tipo **POST** na rota **/api/questions**
2. Espera receber **appId**, **tokenOrigin**, **description**, **alternatives**, sendo o último uma lista com vários objetos contendo atributo **text**
3. **Cria** uma questão com os valores passados no corpo da requisição
4. **Notifica** todos os tokens previamente cadastrados para que respondam a nova questão
5. Retorna **201** e a questão criada

## Exemplo de uma requisição

POST .../api/questions
{
"appId": "123",
"tokenOrigin": "XPTO",
"description": "Qual melhor linguagem para começar a programar?",
"alternatives": [
{
"text": "Java"
},
{
"text": "Javascript"
},
{
"text": "Python"
},
{
"text": "C"
},
{
"text": "Go"
},
{
"text": "PHP"
},
{
"text": "Haskell"
}
]
}
