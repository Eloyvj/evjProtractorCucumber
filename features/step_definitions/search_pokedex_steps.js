'use strict'

let chai = require('chai')
let chaiAsPromised = require('chai-as-promised')
let chaiSorted = require('chai-sorted')
chai.use(chaiAsPromised)
chai.use(chaiSorted)
chai.should()

const PokeLista = require ('../page_objects/poke_list_po.js')
const Helper = require('../../helper.js')

module.exports = function () {
  const helper = new Helper()
  const pokeLista = new PokeLista()

this.Given(/^I am in pokemons list$/, {timeout: 60 * 1000}, function (callback) {
    pokeLista.visit()
    .then(callback)
  })

  this.When(/^I type name mewtow in search field$/, {timeout: 60 * 1000}, function (callback) {
    pokeLista.fillSearchField('Mewtwo')
    pokeLista.clickTabToSearch()
    .then(callback)
  })

  this.Then(/^I should see the updated list with searched pokemon$/, {timeout: 60 * 1000}, function (callback) {
    pokeLista.getResultText('Mewtwo').then(function (text) {
        console.log('RETORNO DO TEXTO ' + text)
        text.should.equal('Mewtwo')
    })
    .then(callback)
  })
} // end of step file
