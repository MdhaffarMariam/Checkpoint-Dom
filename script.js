console.log(document)

var plus_btns = document.querySelectorAll(".plus")
var prices = document.querySelectorAll(".price")
var unitprice=document.querySelectorAll(".unitPrice")
var total =document.querySelector("#total")
var love =document.querySelectorAll(".like")
var minus_btns = document.querySelectorAll(".minus")
var del = document.querySelectorAll(".delete")


function inc(e) {
var cible= e.target
console.log(cible)
var div = cible.parentElement
// console.log(div)
var p = div.querySelector("p")
// console.log(p)
var value = Number(p.innerHTML)
value++
p.innerHTML=value
var td = div.parentElement;
var tr = td.parentElement;
// console.log(tr);
var unit_price = tr.querySelector(".unitPrice");
var up = Number(unit_price.innerHTML);
var price = tr.querySelector(".price");
price.innerHTML = value * up;
sum()}


for (let i = 0; i < plus_btns.length; i++) {
    plus_btns[i].addEventListener("click",inc);}

        


function din(e){
var cible = e.target
console.log(cible)
var div =cible.parentElement
var p =div.querySelector("p")
var value = Number (p.innerHTML)
if (value>0) {
    value--
p.innerHTML=value
}
var td = div.parentElement;
console.log(td);
var tr = td.parentElement;
console.log(tr);
var unit_price = tr.querySelector(".unitPrice");
var up = Number(unit_price.innerHTML);
var price = tr.querySelector(".price");
price.innerHTML = value * up;
sum()
console.log(sum)
}
for (let i = 0; i < minus_btns.length; i++) {
   minus_btns[i].addEventListener("click",din);
    
}



function delet(e){
    var cible =e.target
    console.log(cible)
    var divdelete = cible.parentElement
    var td = divdelete.parentElement;
    console.log(td);
    var tr = td.parentElement.parentElement;
console.log(tr);
var price=tr.querySelector(".price")
price.innerHTML = 0;
 tr.remove();
 sum()
    
    }

    for (let i = 0; i < del.length; i++) {
        del[i].addEventListener("click",delet);       
} 


function sum() {
    var somme = 0;
        for (let i = 0; i < prices.length; i++) {
            somme += Number(prices[i].innerHTML);
        }
    total.innerHTML=somme ;}


function changeColor(e) {
    cible=e.target
   if ( cible.style.color != 'red'){
    cible.style.color='red'
   }
   else {cible.style.color='gray'}

}
for (let i = 0; i < love.length; i++) {
love[i].addEventListener("click",changeColor);
    
}
