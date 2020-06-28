# Buscar Questão Específica

> ## Fluxo básico

1. Recebe uma requisição do tipo **GET** na rota **/api/questions/:appId**
2. No lugar de :appId espera receber a string criada pelo app mobile
3. Retorna **200** e a questão correspondente

> ## Exemplo de uma requisição

GET .../api/questions/123
