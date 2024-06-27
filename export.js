function signIn(){
    let x=document.getElementById("opening-content");
    x.style.height="0vh";x.style.transitionDuration="5s";
    let y=document.getElementById("SIGNIN");
    y.style.height="110vh";
    y.style.color="white";
    document.querySelectorAll("input").borderColor="aliceblue";
    document.getElementById("SIGNIN").style.visibility="visible";
    y.style.transitionDuration="5s";
}
let isSignedin=0;
const email=document.getElementById("email");
const pass=document.getElementById("password");
const name=document.getElementById("username");
function collectInfo(){
    if(!(email.value) || !(pass.value) || !(name.value)){
        alert("Please enter your complete information");
        return;
    }
    document.getElementById("SIGNIN").innerHTML=`<div id="SIGNEDIN" style="color:black">Hello ${name.value},<br><br>` + `<span style="font-family:cursive;margin-top:10vh;">welcome to</span><br><br>` + `<span style="font-family:system-ui;color: hwb(269 0% 0%);margin-top:15vh;font-weight:900;">FASHION</span><span style="font-family:system-ui;color: hsl(224, 43%, 35%);margin-top:7.5vh;font-weight:900;">STORE</span></div>`;
    document.getElementById("SIGNIN").style.paddingTop="10vh";
    document.getElementById("SIGNIN").style.textAlign="CENTER";
    document.getElementById("SIGNIN").style.fontSize="3.5rem";
    document.getElementById("SIGNIN").style.color="BLACK";
    document.getElementById("SIGNIN").style.backgroundColor="WHITE";
    document.getElementById("SI").innerHTML="SIGN-OUT";
    document.getElementById("PRODUCTS").style.display="inline";
    document.getElementById("SI").addEventListener("click", signOut);
    isSignedin=1;
}
function signOut(){
    isSignedin=0;
    window.location.reload();
}
function exitSignIn(){
    document.getElementById("SIGNIN").style.visibility="hidden";
    let x=document.getElementById("opening-content");
    x.style.display="block";
    x.style.transitionDuration="5s";
    let y=document.getElementById("SIGNIN");
    y.style.height="0vh";
    y.style.color="transparent";
}
function displayMenu(){
    let x=document.getElementById("NAVITEMS");
    x.style.display="block";
}