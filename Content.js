


document.addEventListener('mouseup', event => {  
    if(window.getSelection().toString().length){
       let exactText = window.getSelection().toString();    
       text = exactText;
/*
       if (exactText !== ""){
        document.getElementById("translate").innerHTML=exactText;
 
       }
       else{
        document.getElementById("translate").innerHTML="exactText";
       }
 */
       console.log(exactText);    
    }
});


