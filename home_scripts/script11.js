var a = prompt("Введіть кількість монет","0")
var b = prompt("Введіть номенклатуру монети", "0")
var c = parseInt((a * b) / 100)
var d = a * b % 100
document.write(c +"грн"+ d +"коп")
