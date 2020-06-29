const messages = [
  'Responde uma perguntinha pra mim \u{1F97A}\u{1F97A}',
  'Me ajude a tirar essa dúvida hehe \u{1F609}',
  'A comunidade Responde Aí anseia por uma resposta sua \u{1F601}',
  'Hoje é dia de mais uma perguntinha \u{1F60A}',
  'Bora responder uma perguntinha rápida?? \u{1F92A}',
  'Olá meu/minha amigo(a) \u{1F917}, mais uma pergunta fresquinha haha',
  'A serenidade no olhar em saber que irá me ajudar em mais uma pergunta \u{1F60C}',
  'Sabe qual a novidade?? \u{1F631}\u{1F631}.. mais uma pergunta haha',
];

export const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];
