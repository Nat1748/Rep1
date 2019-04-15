var money = +prompt("Введіть кількість монет")
var bill = parseInt(money / 100)
var coin = money % 100
document.write(bill +"грн"+coin+"коп")