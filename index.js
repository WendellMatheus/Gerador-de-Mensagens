let cores = ["verde", "azul", "laranja", "roxo", "amarelo"];

let mensagens = ["A vida é como uma câmera. Foque no que é importante, capture bons momentos, desenvolva a vida a partir de negativos. E, se as coisas não derem certo, tire outra foto.",
 "Sem sonhos, a vida não tem brilho. Sem metas, os sonhos não têm alicerces. Sem prioridades, os sonhos não se tornam reais. Sonhe, trace metas, estabeleça prioridades e corra riscos para executar seus sonhos. Melhor é errar por tentar do que errar por omitir. (Augusto Cury)",
  "Tente uma, duas, três vezes e se possível tente a quarta, a quinta e quantas vezes for necessário. Só não desista nas primeiras tentativas, a persistência é amiga da conquista. Se você quer chegar aonde a maioria não chega, faça o que a maioria não faz. (Bill Gates)",
   "No que diz respeito ao empenho, compromisso, ao esforço, à dedicação, não existe meio termo. Ou você faz uma coisa bem feita ou não faz. (Ayrton Senna)",
 "Lembre-se que é enfrentando dificuldades que você fica forte. É superando seus limites que você cresce. Se você não venceu ontem, não se preocupe. Vencerá hoje."];

let btn = document.querySelector("button");
let mensagem = document.querySelector("p");

btn.addEventListener("click", () => {
    let randon = Math.floor(Math.random() * mensagens.length);
    mensagem.textContent = mensagens[randon];
});


