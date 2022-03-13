

const listagemPokemon = document.querySelectorAll('.pokemon') 
const PokemonCard = document.querySelectorAll('.cartao-pokemon')

listagemPokemon.forEach(pokemon => {
   
pokemon.addEventListener('click', () =>{

        //fecha o cartao ativo
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const selecaoPokemonAtivo = document.querySelector('.ativo')
        selecaoPokemonAtivo.classList.remove('ativo')


        const idPokemonSelecionado = pokemon.attributes.id.value
        
        //abre o cartao selecionado
        const cartaoPokemonParaAbrir = document.getElementById('cartao-'+ idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const selecaoPokemonAtivar = document.getElementById(idPokemonSelecionado)
        selecaoPokemonAtivar.classList.add('ativo')
        


    })



})

















