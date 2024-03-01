// cShape.addEventListener("click", changeShape);
// cColor.addEventListener("click", changeColor);



const cShape = document.getElementById("change-shape");
const cColor = document.getElementById("change-color");

var color = [
    "green",
    "black",
    "voilet",
    "blue",
    "yellow",
    "purple",
    "orange",
    "voilet",
  ];

  const getRandomNumber=(max) =>{
    return Math.floor((Math.random()*10)%max)+0;
  }

cColor.addEventListener('click',()=>{
const index=getRandomNumber(color.length)
document.getElementById('container').style.backgroundColor=color[index]
})
let flag=true;
const changeShape=()=>{
    const container=document.getElementById('container');
    const newDiv=document.createElement('div');
    if(flag==true)
    newDiv.classList.add('square')
    else
    newDiv.classList.add('tringle')
    flag=!flag
    container.innerHTML='';
    container.appendChild(newDiv);

}

cShape.addEventListener('click',changeShape)
changeShape();
   
