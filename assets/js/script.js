var fname = document.getElementById('fname')
var lname = document.getElementById('lname')
var email = document.getElementById('email')
var ccn = document.getElementById('ccn')
var cvv = document.getElementById('cvv')
var exp = document.getElementById('exp')
var pass = document.getElementById('pass')


var ps = document.getElementsById('ps')
console.log(ps)

document.getElementById('checkout').addEventListener('click', () => {
    alert('X')
    ps.style.display='block'
})

// function checkout(){
//     alert("Purchase Successful")
// }