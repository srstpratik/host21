function myFunction(){
    const element = document.body;
    element.classList.toggle("dark-mode"); 
    const button= document.querySelector("button");
    if (element.classList.contains("dark-mode")){
   button.textContent = "Light Mode";
    }else{
    button.textContent="Dark Mode";
    }
} 

const textchange = document.querySelector("#change");
const values = [" a chota sauji","a business man"];
let counter = 0;
setInterval(()=>{
    textchange.textContent = values[counter];
    counter = (counter+1)% values.length;
},3000);