function criaCartao(categoria, pergunta, resposta) {
      let container = document.getElementById('container')
      let cartao = document.createElement('artclice')
      cartao.className = 'cartao'

      cartao.innerHTML = `
      <article class="cartao">
        <div class="cartao__conteudo">
            <h3>Programação</h3>
            <div class="cartao__conteudo__pergunta">
            </p>O que é CSS</p>
            </div>
            <div class="cartao__conteudo__resposta">
            </p>O CSS é uma linguagem de estilização</p>
            </div>
        </div>
    </article>
    `

let respostaEstavisivel = false

function viraCartao() {
      respostaEstavisivel = ! respostaEstavisivel
      cartao.classList.toggle('active', respostaEstavisivel)
}
cartao.addEventListener('click', viraCartao
)


    container.appendChild(cartao)
}