

//dom busca un elemento
//let container = document.querySelector(".container");
//console.log(container) 

//buscar varios elementos list de nodos
//let links=document.querySelectorAll("a");
//console.log(links)
/*let links=document.querySelectorAll("a")

links.forEach(function(link){
    console.log(link)
})
*/
/*
let celdas=document.querySelectorAll("td")
celdas.forEach(function(td){
    td.addEventListener("click",function(){
        console.log(this)
    })
});
*/
/*
let links= document.querySelectorAll(".close")

links.forEach(function(links){
    links.addEventListener("click", function(){
        console.log("click")
    })

})
*/

//recorrerlos
let links= document.querySelectorAll(".close");

links.forEach(function(link){
    //agregar un evento click a cada uno de ellos
    link.addEventListener("click",function(ev){
        ev.preventDefault()
        
       // let content=document.querySelector(".content")


        let content=document.querySelector(".content")

        content.classList.remove("animate__fadeInDown")
        content.classList.remove('animate__animated')

        content.classList.add("animate__fadeOutDown")
        content.classList.add('animate__animated')

        setTimeout(function(){
            location.href="../";
        },600); /* saca la animacion controla el tiempo*/


       /* setInterval(() => {
            
        }, interval);   pasa a cada xtiempo*/

        return false;

   })
})
//content.classList.add("fadeInDown")

/* quitar y agregar clases
let iconos= document.querySelectorAll("i");
iconos.forEach(function(iconos){
    iconos.classList.remove("fa-star")
})
*/