function saveImage(imgSrc){
    sessionStorage.setItem('imgSrc', imgSrc)
    location.href='buy.html';
}

// console.log(document.querySelector("div.container.my-5 > div > div:nth-child(1) > div > img").src)

document.getElementById("buyBtn").addEventListener("click", function(){
    window.location.href = "buy.html"
    
})

// if(window.location.pathname === '/buy.html'){
//     document.querySelector('body > div.container.my-5 > div > div > img').src = window.sessionStorage.getItem('imgSrc')
// }