var FirstProduct = parseInt(prompt("Введіть кількість першого товару", "0"))
var SecondProduct = parseInt(prompt("Введіть кількість другого товару", "0"))
var FirstPrice = parseFloat(prompt("Введіть вартість першого товару", "1"))
var SecondPrice = parseFloat(prompt("Введіть вартість другого товару", "1"))
var PriceFirstProduct = FirstPrice * FirstProduct
var PriceSecondProduct = SecondPrice * SecondProduct
var TotalPrice = PriceFirstProduct + PriceSecondProduct
document.write("Вартість першого товару становить" +PriceFirstProduct +"</br>")
document.write("Вартість другого товару становить" +PriceSecondProduct +"</br>");
document.write("Загальна вартість покупки становить" +TotalPrice )