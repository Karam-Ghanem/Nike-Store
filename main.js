let heart_header = document.querySelector(".fa-heart")
let hearts = document.querySelectorAll(".fa-heart")
let numOfHearts =document.querySelector(".icons .h")
let buy = document.querySelectorAll(".products_text a")
let numOfpurchases =document.querySelector(".icons .p")
let cart_shopping=document.querySelector(".fa-cart-shopping")

// numOfHearts.innerHTML = window.sessionStorage.getItem("numOfHearts")
// numOfpurchases.innerHTML = window.sessionStorage.getItem("numOfpurchases")


// numOfHearts.style.color=window.sessionStorage.getItem("numOfHearts_color")
// heart_header.style.color=window.sessionStorage.getItem("heart_header_color")


// numOfpurchases.style.color=window.sessionStorage.getItem("numOfpurchases_color")
// cart_shopping.style.color=window.sessionStorage.getItem("cart_shopping_color")






function main(){
    hearts.forEach(heart=>{
        heart.addEventListener("click",function(e){
            clickOnHeart(e)
        })
    })


    buy.forEach(shoes=>{
        shoes.addEventListener("click",function(e){
            clickOnAddToCart(e)
        })
    })



}

main()

function clickOnHeart(e){
    e.target.parentElement.parentElement.classList.toggle("licked")
    if(e.target.parentElement.parentElement.classList.contains("licked")){
        numOfHearts.innerHTML++
        window.sessionStorage.setItem("numOfHearts",numOfHearts.innerHTML)
    }
    else{
        numOfHearts.innerHTML--
        window.sessionStorage.setItem("numOfHearts",numOfHearts.innerHTML)
    }


    if(numOfHearts.innerHTML>0){
        heart_header.style.color=`#c72092`
        numOfHearts.style.color=`#c72092`

    }
    else{
        heart_header.style.color=`#333`
        numOfHearts.style.color=`#333`
    }
    window.sessionStorage.setItem("heart_header_color",heart_header.style.color)
    window.sessionStorage.setItem("numOfHearts_color",numOfHearts.style.color)
}


function clickOnAddToCart(e){
    e.preventDefault()    
    if(e.target.classList.contains("added")){
        e.target.innerHTML="Add To Cart"
        numOfpurchases.innerHTML--
        // window.sessionStorage.setItem("numOfpurchases",numOfpurchases.innerHTML)

    }
    else{
        e.target.innerHTML="Delete From Cart"
        numOfpurchases.innerHTML++
        // window.sessionStorage.setItem("numOfpurchases",numOfpurchases.innerHTML)
    }



    if(numOfpurchases.innerHTML>0){
        cart_shopping.style.color=`#c72092`
        numOfpurchases.style.color=`#c72092`

    }
    else{
        cart_shopping.style.color=`#333`
        numOfpurchases.style.color=`#333`
    }
    // window.sessionStorage.setItem("cart_shopping_color",cart_shopping.style.color)
    // window.sessionStorage.setItem("numOfHearts_color",numOfHearts.style.color)


    e.target.classList.toggle("added")

}