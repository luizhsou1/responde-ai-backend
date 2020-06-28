# Deletar Questão Específica

## Fluxo básico

1. Recebe uma requisição do tipo **DELETE** na rota **/api/questions/:appId**
2. **remove** a questão equivalente ao :appId passado na url
3. Retorna **200**

## Exemplo de uma requisição

DELETE .../api/questions/123
