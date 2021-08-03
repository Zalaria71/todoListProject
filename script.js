let input = document.forms["form"]["todo"];
let btn = document.getElementById("add");
let list = document.getElementById("list");
let number = document.getElementById("number");
var cross = document.querySelectorAll('.cross');
let i = 0;
k=0;
number.innerHTML = i;
btn.onclick = function(event){
    list.innerHTML += `<li class="mession">
    <span class="circle"></span><p>${input.value}</p><i class="cross"><img src="images/icon-cross.svg" alt=""></i>
    </li>` ;
    input.value = ""; 
    number.innerHTML = ++i; 
}
list.addEventListener("click",function(event){
  console.log(event.target)
    if(event.target.tagName === "IMG"){
      father = event.target.parentElement;
      father.parentElement.remove();
    number.innerHTML = --i; 
    }
    else if(event.target.tagName === "SPAN"){
      event.target.innerHTML = `<i class="check"><img src="images/icon-check.svg" alt=""></i>`
      event.target.classList.add("checked");
      father = event.target.parentElement;
      father.parentElement.classList.add("check");
    }
      
})
let all = document.getElementById('all');
let active = document.getElementById('active');
let completed = document.getElementById('completed');
let clear = document.getElementById('clear');
all.addEventListener("click" , function(event){
  event.preventDefault();
   let messions = document.querySelectorAll(".mession");
   for (let j = 0; j < messions.length; j++) {
     messions[j].style.display="flex";
     
   } 
   })
   active.addEventListener("click" , function(event){
    event.preventDefault();
     let messions = document.querySelectorAll(".mession span");
     for(j=0;j<messions.length;j++){
       if(messions[j].classList.contains("checked"))
       messions[j].parentElement.style.display = "none";
       else
          messions[j].parentElement.style.display = "flex"; 
       }})

completed.addEventListener("click", function(event){
  event.preventDefault();
  let messions = document.querySelectorAll(".mession span");
  for(j=0;j<messions.length;j++){
    if(messions[j].classList.contains("checked"))
    messions[j].parentElement.style.display = "flex";
    else{
       messions[j].parentElement.style.display = "none"; 
    }
  }
})
clear.addEventListener("click",function(event){
  event.preventDefault();
 
  let messions = document.querySelectorAll(".mession span");
  for (let j = 0; j < messions.length; j++) {
    if(messions[j].classList.contains("checked")){
      messions[j].parentElement.remove();
      k++;
    }
    
  } 

number.innerHTML = i-k; 
})
// theme


let theme = document.getElementById("theme");
let icon = document.querySelector("#theme img");
console.log(icon);
var z = 0;
theme.addEventListener("click" , function(event){
  event.preventDefault();
  if(z%2 == 0){
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        icon.setAttribute("src","images/icon-moon.svg");
        
        
  }
  else{
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    icon.setAttribute("src","images/icon-sun.svg");

    
  }
  ++z;
})
