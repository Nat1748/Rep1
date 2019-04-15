var time = +prompt("Введіть n")
var hours = parseInt(time / 3600)
var mins = parseInt((time - hours * 3600) / 60) 
document.write("Годин" + hours + "Хвилин"+ mins)