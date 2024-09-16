const backgroundImg = document.querySelector("#backgroundImg")
const buttonAbra = document.querySelector("#btnAbra");
const buttonKadabra = document.querySelector("#btnKadabra")
const buttonAlakazam = document.querySelector("#btnAlakazam")
const body = document.querySelector("body");

backgroundImg.style.backgroundImage = "url('./src/images/abra-1.png')"

buttonAbra.addEventListener("click", () => {
    backgroundImg.style.backgroundImage = "url('./src/images/abra-1.png')";
    //agregamos la clase
   body.classList.add("transicion");
   
   //quitamos la clase
   setTimeout(() => body.classList.remove("transicion"),1500);
})

buttonKadabra.addEventListener("click", () => {
    
    backgroundImg.style.backgroundImage = "url('./src/images/kadabra-1.png')"
    //agregamos la clase
   body.classList.add("transicion");
   
   //quitamos la clase
   setTimeout(() => body.classList.remove("transicion"),1500);
})

buttonAlakazam.addEventListener("click", () => {
    backgroundImg.style.backgroundImage = "url('./src/images/alakazam-1.png')"
    //agregamos la clase
   body.classList.add("transicion");
   
   //quitamos la clase
   setTimeout(() => body.classList.remove("transicion"),1500);
})