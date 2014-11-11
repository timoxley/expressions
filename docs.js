"use strict"

var fs = require('fs')

var ExpressionsDot = /Expressions\./gm
var functionNames = /##\s(\w+)\(.+/gm

var result = fs.readFileSync(process.argv[2], 'utf8')
.replace(ExpressionsDot, '')
.replace(functionNames, '### $1')

process.stdout.write(result)
