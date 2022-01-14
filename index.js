
let input =document.getElementById("input")
let output = document.getElementById("output")
function showkeys(data){
  
    if(data==="⬅"){
        output.innerHTML = output.innerHTML.substring(0,output.innerHTML.length-1)
    }else{
        output.innerHTML += data  
    }
    
}

function choose(e) {
    
    e.classList.add("selected");
   setTimeout(()=>{
       e.classList.remove("selected")
   },300)
}

