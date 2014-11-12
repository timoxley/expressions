"use strict"

var inherits = require('inherits')
var moment = require('moment')
var slice = require('sliced')
var titleize = require('titlize')

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

/**
 * Convert to title-case.
 * Also converts underscores to spaces.
 * Usage:
 *
 * ```html
 * <!-- data = this_is_a_TITLE -->
 * {{data | titleize}} <!-- This is a Title -->
 * ```
 */

Expressions.prototype.titlize =
Expressions.prototype.titleize = function(str) {
  if (str == null) return ''

  str  = String(str)
  str = str.replace(/_/g, ' ')
  return titlize(str)
}

/**
 * Convert to pretty-printed json output.
 *
 * Usage:
 *
 * ```html
 * {{data | json}}
 * ```
 */

Expressions.prototype.json = function(input) {
  return JSON.stringify(input, null, 2)
}

/**
 * Log to console before returning input.
 *
 * Very useful for debugging.
 *
 * Usage:
 *
 * ```html
 * {{data | log}}
 * {{data | log('my data %s')}}
 * {{data | log('my data %s, %d', otherdata)}}
 * ```
 */

Expressions.prototype.log = function(data) {
  var args = slice(arguments)
  var tmp = args[0]
  args[0] = args[1]
  args[1] = tmp
  console.log.apply(console, args)
  return data
}

/**
 * Slice an array of data.
 *
 * Usage:
 *
 * ```html
 * {{items | slice}}
 * {{items | slice(2)}}
 * {{items | slice(2, 5)}}
 * ```
 */

Expressions.prototype.slice = function(data, start, end) {
  if (!data || !data.slice) return data
  var args = slice(arguments, 1)
  return data.slice.apply(data, args)
}

/**
 * Get array of keys from an Object.
 *
 * Usage:
 *
 * ```html
 * <template repeat="{{key in items | keys}}">
 *  {{key}}
 * </template>
 * ```
 */

Expressions.prototype.keys = function(data) {
  if (!data) return []
  return Object.keys(data)
}

/**
 * Get array of values from an Object.
 *
 * Usage:
 *
 * ```html
 * <template repeat="{{value in items | values}}">
 *  {{value}}
 * </template>
 * ```
 */

Expressions.prototype.values = function(data) {
  if (!data) return []
  return Object.keys(data).map(function(key) {
    return data[key]
  })
}

/**
 * Get array of keys and values from an Object.
 *
 * Usage:
 *
 * ```html
 * <template repeat="{{item in items | keyValue}}">
 *  {{item.key}} : {{item.value}}
 * </template>
 * ```
 */

Expressions.prototype.keyValue = function(data) {
  if (!data) return []
  return Object.keys(data).map(function(key) {
    return {
      key: key,
      value: data[key]
    }
  })
}

/**
 * Format a date using moment.js.
 *
 * Usage:
 *
 * ```html
 * {{item.date | date}}
 * {{item.date | date('LLL')}}
 * ```
 */
Expressions.prototype.date = function(date, format) {
  return moment(date).format(format)
}

/**
 * Get relative time from now.
 *
 * Usage:
 *
 * ```html
 * {{item.date | fromNow}} <!-- 2 weeks ago. -->
 * ```
 */

Expressions.prototype.fromNow = function(date) {
  return moment(date).fromNow()
}

/**
 * Get relative 'calendar' time.
 *
 * Usage:
 *
 * ```html
 * {{item.date | fromNow}} <!-- 2 weeks ago. -->
 * ```
 */

Expressions.prototype.calendar = function(date) {
  return moment(date).calendar()
}


function hasTemplateBinding() {
  var t = document.createElement('template')
  return 'model' in t
}
