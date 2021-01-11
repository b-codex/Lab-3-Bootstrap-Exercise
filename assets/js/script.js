var fname = document.getElementById('fname')
var lname = document.getElementById('lname')
var email = document.getElementById('email')
var ccn = document.getElementById('ccn')
var cvv = document.getElementById('cvv')
var exp = document.getElementById('exp')
var pass = document.getElementById('pass')



document.getElementById('checkout').addEventListener('click', () => {
    if (fname || lname || email || ccn || cvv || exp || pass !== "") {
        alert("Please Fill Out All Fields!!!")
    } else {
        alert("Purchase Successful!!!")
    }
})

// function checkout(){
//     alert("Purchase Successful")
// }