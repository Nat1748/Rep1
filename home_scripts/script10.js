var money = +prompt("Введіть кількість монет")
var bill = parseInt(money / 100)
var coin = money - bill * 100  Можна було використати остачу від ділення
document.write(bill +"грн"+coin+"коп")
