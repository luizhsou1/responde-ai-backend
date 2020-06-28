# Cadastrar Questão

> ## Fluxo básico

1. Recebe uma requisição do tipo **POST** na rota **/api/questions**
2. Espera receber **appId**, **description**, **alternatives**, sendo o último uma lista com vários objetos contendo atributo **text**
3. **Cria** uma conta questão com os valores passados no corpo da requisição
4. Retorna **201** e a questão criada

> ## Exemplo de uma requisição

POST .../api/questions
{
  "appId": "123",
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
    }
  ]
}