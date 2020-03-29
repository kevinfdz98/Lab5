


function object(){
        document.getElementById("submitBtn").addEventListener('click', (event) => {
            event.preventDefault(); 
            console.log("I prevented the default"); 

            let gObject = document.getElementById("groceryObj").value;
            console.log(gObject);
            if(gObject === "")
            {
                alert("Not sure what you are looking for..."); 
            }
            else{
                let list = document.getElementById("shoppingList"); 
                console.log(list); 

                list.innerHTML += (`<div class = "results">`+ `<li>` + `<h4>` +gObject + `</h4>` +
                `<button id = "checkBttn" class="addBtn checkBttn"> CHECK </button>` +
                `<button id = "deleteBttn" class="addBtn deleteBttn"> DELETE </button>`  
                + `</li>` + `</div>`)  ;    
                console.log(list);   
            }
            document.getElementById("groceryObj").value = "";  
        })
}

function eventDelegation(){
    let section = document.querySelector('ul'); 

    section.addEventListener( 'click', (event) => {
        if (event.target.matches('.checkBttn')){
            console.log("You clicked on the check bttn");
           let objectText =  event.target.parentNode.querySelector("h4");
           console.log(objectText);
           
           if(objectText.style.textDecorationLine == "line-through")
           {
               console.log("here"); 
               objectText.style.textDecorationLine = "none";
           }
           else{
               console.log("here you cross the object")
               objectText.style.textDecorationLine = "line-through";
           }
        }

        if(event.target.matches('.deleteBttn')){
            console.log("You clicked on the delete bttn");
            event.target.parentNode.parentNode.remove();
            
            
        }
    })
}


function init(){
    object();
    eventDelegation(); 
}





///////////////////////
init(); 
