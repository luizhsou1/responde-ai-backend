# Registrar Token do Firebase Cloud Messaging

## Fluxo básico

1. Recebe uma requisição do tipo **POST** na rota **/api/fcms**
2. Espera receber **token** no corpo da requisição
3. **Registra** token criado para usar futuramente
4. Retorna **201** e o token criado

## Exemplo de uma requisição

POST .../api/fcms
{
"token": "XPTO"
}
