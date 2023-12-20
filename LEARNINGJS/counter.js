let counter = 0; //Declaring variable counter
function count(){ 
    counter++;
    document.querySelector('h1').innerHTML = counter;
    if(counter % 10 == 0){
        alert(`Count is now ${counter}`);
    }
}
    document.addEventListener('DOMContentLoaded', function(){
        document.querySelector('button').onclick = count; 
    });

            //alert(counter); 
            // const heading = document.querySelector("h1"); 
            // if(heading.innerHTML === "Hello!"){
            //     heading.innerHTML = "GoodBYE!";
            // }else{
            //     heading.innerHTML = "Hello!"; //selecting query from html into js
            // }  