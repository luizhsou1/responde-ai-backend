# Atualizar Questão Específica

## Fluxo básico

1. Recebe uma requisição do tipo **PUT** na rota **/api/questions**
2. Espera receber **appId**, **tokenOrigin**, **description**, **alternatives**, sendo o último uma lista com vários objetos contendo atributo **text**
3. **Atualiza** uma questão com os valores passados no corpo da requisição
4. Retorna **200** e a questão modificada

## Exemplo de uma requisição

PUT .../api/questions
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
"text": "PHP"
},
{
"text": "Haskell"
},
{
"text": "Ruby"
}
]
}
