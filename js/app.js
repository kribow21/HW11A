var container = document.getElementById('box');
var text = document.createElement('h3');
function appear(){
    container.prepend(text);
    text.innerText="Korea is on my top destination list"
}

let button = document.getElementById('btn');
button.addEventListener("click", appear);

function addStyle(){
    image.style.border="10px solid orange";
}
let image = document.getElementById('koreaImg');
image.addEventListener("mouseover", addStyle);






var newImg = document.createElement('img');
var imgBox = document.getElementById('imgBox');

function temp(e){
console.log(e);
if (e.key == " "){
let temp = imgBox.append(newImg);
newImg.setAttribute("src", "https://images.unsplash.com/photo-1590301157890-4810ed352733")
}
}
var input = document.getElementById('userInput');
input.addEventListener("keydown", temp);