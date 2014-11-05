"use strict"

var inherits = require('inherits')
var moment = require('moment')

if (!hasTemplateBinding()) {
  require('templatebinding')
}

var ProtoExpressions = typeof PolymerExpressions !== 'undefined'
  ? PolymerExpressions
  : require('polymer-expressions')


var defaultExpressions;

module.exports = function() {
  return defaultExpressions = defaultExpressions || new Expressions()
}

module.exports.Expressions = Expressions

function Expressions() {
  if (!(this instanceof Expressions)) return new Expressions
  ProtoExpressions.call(this)
}

inherits(Expressions, ProtoExpressions)

Expressions.prototype.titlize =
Expressions.prototype.titleize = require('titlize')

Expressions.prototype.json = function(input) {
  return JSON.stringify(input, null, 2)
}

Expressions.prototype.log = function(data) {
  console.log(data)
  return data
}

Expressions.prototype.keys = function(data) {
  if (!data) return []
  return Object.keys(data)
}

Expressions.prototype.values = function(data) {
  if (!data) return []
  return Object.keys(data).map(function(key) {
    return data[key]
  })
}

Expressions.prototype.keyValue = function(data) {
  if (!data) return []
  return Object.keys(data).map(function(key) {
    return {
      key: key,
      value: data[key]
    }
  })
}

Expressions.prototype.date = function(date, format) {
  return moment(date).format(format)
}

Expressions.prototype.fromNow = function(date, format) {
  return moment(date).fromNow()
}

Expressions.prototype.calendar = function(date, format) {
  console.log('calendar', moment(date).calendar())
  return moment(date).calendar()
}

function hasTemplateBinding() {
  var t = document.createElement('template')
  return 'model' in t
}
