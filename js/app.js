const items = document.getElementsByClassName("item");

for(let i = 0; i < items.length; i++){

    const randomColor = () => {
        return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6,"0").toUpperCase();
    }

    items[i].style.backgroundColor=randomColor();
    items[i].textContent = items[i].textContent.toUpperCase();
}


function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

const sus_suspects = document.getElementsByClassName("potential-sus");

const sus_number = getRandomInt(sus_suspects.length);

/* FIXING THE SUS LOGO AND CORRESPONDING CONTAINER's CSS */

sus_suspects[sus_number].style.position="relative";

let img = document.createElement("img");
img.src = "./images/amogus.png";
img.style.width = "10%";
img.style.position = "absolute";
img.style.bottom = "10px";
img.style.right = "10px";

sus_suspects[sus_number].style.cursor = "pointer";
sus_suspects[sus_number].onclick = function() {
    window.location.href="./slideshow.html";
}

sus_suspects[sus_number].appendChild(img);