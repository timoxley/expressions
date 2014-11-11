"use strict"

var fs = require('fs')

var ExpressionsDot = /Expressions\./gm
var functionNames = /##\s(\w+)\(.+/gm
var functionNamesLinks = /\[(\w+)\([a-z]*\)\]/gm
var expressionsHref = /\(#expressions/gm

var result = fs.readFileSync(process.argv[2], 'utf8')
.replace(ExpressionsDot, '')
.replace(functionNames, '### $1')
.replace(functionNamesLinks, '[$1]')
.replace(expressionsHref, '(#')

process.stdout.write(result)
