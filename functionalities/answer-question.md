# Cadastrar Questão

## Fluxo básico

1. Recebe uma requisição do tipo **POST** na rota **/api/questions/:appId/answer**
2. Espera receber **idAlternative**, **token** no corpo da requisição
3. **Incrementa** em um a alternativa selecionado, caso token enviado já não tenha respondido aquela pergunta
4. Retorna **200** e a questão devidamente atualizada

## Exemplo de uma requisição

POST .../api/questions/123/answer
{
"idAlternative": "ANY_ID",
"token": "ANY_TOKEN"
}
