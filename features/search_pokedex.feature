# language: pt
Funcionalidade: Lista pokedex
Consultar pokemons na lista.

# Funcional
  @pesquisa
  Cenário: Consultar pokemons por nome
  Dado que estou na tela de lista de pokemons
  Quando pesquisar o pokemon mewtow
  Então devo visualizar a lista atualizada com o pokemon correspondente

  