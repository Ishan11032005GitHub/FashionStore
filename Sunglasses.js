function displayAccessories(){
    let x=document.getElementById("ACCESSORIES");
    if(x.style.height=="0vh"){
    x.style.visibility="visible";
    x.style.height="100vh";
    x.style.transitionDuration="5s";
    document.getElementById("H").style.color="black";
    document.getElementById("H").style.transitionDelay="0.5s";
    document.getElementById("R1").style.color="black";
    document.getElementById("R1").style.transitionDelay="1s";
    document.getElementById("R2").style.color="black";
    document.getElementById("R2").style.transitionDelay="1.5s";
    document.getElementById("R3").style.color="black";
    document.getElementById("R3").style.transitionDelay="2s";
    document.getElementById("R4").style.color="black";
    document.getElementById("R4").style.transitionDelay="2.5s";
    document.getElementById("R5").style.color="black";
    document.getElementById("R5").style.transitionDelay="3s";
    document.getElementById("R6").style.color="black";
    document.getElementById("R6").style.transitionDelay="3.5s";
    document.getElementById("EXITACC").style.color="BLACK";
    document.getElementById("EXITACC").style.transitionDelay="0.3s";
    document.getElementById("PRODUCTS").innerHTML="&#8593; PRODUCTS";
    }
    else{
        donotDisplayAccessories();
    }
}
function donotDisplayAccessories(){
    let x=document.getElementById("ACCESSORIES");
    x.style.visibility="hidden";
    x.style.height="0vh";
    x.style.transitionDuration="10s";
    document.getElementById("H").style.color="transparent";
    document.getElementById("H").style.transitionDelay="3.5s";
    document.getElementById("EXITACC").style.color="transparent";
    document.getElementById("EXITACC").style.transitionDelay="3.8s";
    document.getElementById("R1").style.color="transparent";
    document.getElementById("R1").style.transitionDelay="3s";
    document.getElementById("R2").style.color="transparent";
    document.getElementById("R2").style.transitionDelay="2.5s";
    document.getElementById("R3").style.color="transparent";
    document.getElementById("R3").style.transitionDelay="2s";
    document.getElementById("R4").style.color="transparent";
    document.getElementById("R4").style.transitionDelay="1.5s";
    document.getElementById("R5").style.color="transparent";
    document.getElementById("R5").style.transitionDelay="1s";
    document.getElementById("R6").style.color="transparent";
    document.getElementById("R6").style.transitionDelay="0.5s";
    document.getElementById("PRODUCTS").innerHTML="&#8595; PRODUCTS";
}
function like1(){
    if(document.getElementById("LIKE1").style.backgroundColor==="white"){
        document.getElementById("LIKE1").style.backgroundColor="red";
        document.getElementById("LIKE1").style.color="white";
        addEventListener("click",addToFavourites());
    }
    else{
        document.getElementById("LIKE1").style.backgroundColor="white";
        document.getElementById("LIKE1").style.color="black";
    }
}
function like2(){
    if(document.getElementById("LIKE2").style.backgroundColor==="white"){
        document.getElementById("LIKE2").style.backgroundColor="red";
        document.getElementById("LIKE2").style.color="white";
        addEventListener("click",addToFavourites());
    }
    else{
        document.getElementById("LIKE2").style.backgroundColor="white";
        document.getElementById("LIKE2").style.color="black";
    }
}
function like3(){
    if(document.getElementById("LIKE3").style.backgroundColor==="white"){
        document.getElementById("LIKE3").style.backgroundColor="red";
        document.getElementById("LIKE3").style.color="white";
        addEventListener("click",addToFavourites());
    }
    else{
        document.getElementById("LIKE3").style.backgroundColor="white";
        document.getElementById("LIKE3").style.color="black";
    }
}
function addToCart1(){
    if(document.getElementById("ADDTOCART1").style.backgroundColor==="white"){
        document.getElementById("ADDTOCART1").innerHTML="&#10004;ADDED TO CART";
        document.getElementById("ADDTOCART1").style.backgroundColor="rgba(239, 247, 255, 0.1)";
    }
    else{
        document.getElementById("ADDTOCART1").innerHTML="&#128722;ADD TO CART";
        document.getElementById("ADDTOCART1").style.backgroundColor="white";
    }
}
function addToCart2(){
    if(document.getElementById("ADDTOCART2").style.backgroundColor==="white"){
        document.getElementById("ADDTOCART2").innerHTML="&#10004;ADDED TO CART";
        document.getElementById("ADDTOCART2").style.backgroundColor="rgba(239, 247, 255, 0.1)";
    }
    else{
        document.getElementById("ADDTOCART2").innerHTML="&#128722;ADD TO CART";
        document.getElementById("ADDTOCART2").style.backgroundColor="white";
    }
}
function addToCart3(){
    if(document.getElementById("ADDTOCART3").style.backgroundColor==="white"){
        document.getElementById("ADDTOCART3").innerHTML="&#10004;ADDED TO CART";
        document.getElementById("ADDTOCART3").style.backgroundColor="rgba(239, 247, 255, 0.1)";
    }
    else{
        document.getElementById("ADDTOCART3").innerHTML="&#128722;ADD TO CART";
        document.getElementById("ADDTOCART3").style.backgroundColor="white";
    }
}
function addToFavourites(){
    document.getElementById("addedToFavourites").style.bottom="0vh";
    document.getElementById("addedToFavourites").style.transitionDuration="0.5s";
}
function disapear(){
    document.getElementById("addedToFavourites").style.bottom="-8vh";
    document.getElementById("addedToFavourites").style.transitionDuration="0.5s";
}