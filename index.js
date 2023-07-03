let x = document.getElementsByClassName("nav_item");
let y = document.getElementsByClassName("music_item");

    for(let i of x){
        i.addEventListener('click', function(){
            for(let j of x){
                j.style.backgroundColor = "rgb(0, 0, 0)";
                j.style.color = "rgb(255, 255, 255)";
                j.style.fontSize = "1rem";  
            }
            i.style.color = "rgb(0, 0, 0)";
            i.style.backgroundColor = "rgb(255, 255, 255)";        
        });     
    }

    for(let i of y){
        i.addEventListener('click', function(){
            for(let j of y){
                j.style.backgroundColor = "rgb(0, 0, 0)";
                j.style.color = "rgb(255, 255, 255)";
                j.style.fontSize = "1rem";  
            }
            i.style.color = "rgb(0, 0, 0)";
            i.style.backgroundColor = "rgb(255, 255, 255)";        
        });     
    }

    function toggle(){
        alert("Comming Soon !")
    }
