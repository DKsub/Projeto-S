const Verde = document.querySelector("#verde")
const Amarelo = document.querySelector("#amarelo")
const Vermelho = document.querySelector("#vermelho")

const Ligar = document.querySelector("#ligar")
const Desligar = document.querySelector("#desligar")

 var estado = 1
 var contador = 0

Ligar.addEventListener("click", () =>{
    estado = 1
})

Desligar.addEventListener("click", () =>{
    estado = 0
    contador = 1

    Vermelho.classList.remove("vermelhoAcesso")
    Amarelo.classList.remove("amareloAcesso")
    Verde.classList.remove("verdeAcesso")
})

 intervalo = setInterval(()=>{

  if(estado == 1){

  if(contador == 1){

    Verde.classList.remove("verdeAcesso")
    Vermelho.classList.add("vermelhoAcesso")
 
}else if(contador == 2){
    Vermelho.classList.remove("vermelhoAcesso")
    Amarelo.classList.add("amareloAcesso")

  } else if(contador == 3){

    Amarelo.classList.remove("amareloAcesso")
    Verde.classList.add("verdeAcesso")

    contador = 0
  }
    contador += 1
  }

}, 2000);

