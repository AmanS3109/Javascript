if(!localStorage.getItem('counter')){
    localStorage.setItem('counter', 0)
}
//let counter = 0; //Declaring variable counter

function count(){ 
    let counter = localStorage.getItem('counter')
    counter++;
    document.querySelector('h1').innerHTML = counter;
    // if(counter % 10 == 0){
    //     alert(`Count is now ${counter}`);
    // }
    localStorage.setItem('counter', counter)
}
    document.addEventListener('DOMContentLoaded', function(){
        document.querySelector('h1').innerHTML = localStorage.getItem('counter');
        document.querySelector('button').onclick = count; 

       // setInterval(count, 1000) //Interval
    });

            //alert(counter); 
            // const heading = document.querySelector("h1"); 
            // if(heading.innerHTML === "Hello!"){
            //     heading.innerHTML = "GoodBYE!";
            // }else{
            //     heading.innerHTML = "Hello!"; //selecting query from html into js
            // }  