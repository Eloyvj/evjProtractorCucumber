'use strict'

var Helper = require('../../helper.js')

class PokeLista {
  constructor () {
    this.search = $('[ng-model="PokemonsController.filtro"]')
    this.rows = element.all(by.repeater('item in PokemonsController.pokemons|filter: PokemonsController.filtro'))
    this.helper = new Helper()
  }    

  visit () {
    return browser.get('/')
  }

  fillSearchField (nome) {
    this.helper.elementIsPresenceDom(this.search)
    return this.search.sendKeys(nome)
  }

  clickTabToSearch () {
    return browser.actions().sendKeys(protractor.Key.TAB).perform()
  }

  getResultText (nome) {
    this.helper.elementIsPresenceDom(this.rows.first())
    return this.rows.first().element(by.binding('item.name')).getText()         
  }

}
module.exports = PokeLista
