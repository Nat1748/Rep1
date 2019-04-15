var year = +prompt("Вкажіть рік", "0000")
function isCentury(year){
return year % 100 === 0;
}
if(isCentury(year)) {
    let c = parseInt(year / 100);
document.write("вказаний рік це століття" + c);
} 
else{
    let d = parseInt(year / 100) + 1;
    document.write("вказаний рік це століття" + d);
}