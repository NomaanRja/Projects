let button = document.querySelectorAll(".button")
let body = document.querySelector("body")

button.forEach( (butt)=>{
   butt.addEventListener("click" ,function(e){
    console.log("hello i am working")
    console.log(e.target)
    if(e.target.id === 'grey'){
        body.style.background ="grey"
    }
    else if(e.target.id === 'white'){
        body.style.background ="white"
    }
   else if(e.target.id === 'blue'){
        body.style.background ="blue"
    }
    else if(e.target.id === 'yellow'){
        body.style.background ="yellow"
    }
    
   } )
})
