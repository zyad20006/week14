let c=document.querySelector("div");

function down(){
    c.innerHTML-=1;
    if(c.innerHTML==="0"){
       clearInterval(counter)
       //location.href="https://elzero.org/" //law 3ez yero7 website 3ltol
   open("https://elzero.org/","_blank","width=400,height=400")
    }
}
let counter =setInterval(down,1000)