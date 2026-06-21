let div2 = document.querySelector(".slider");

let images = ['1.png', '2.png', '3.png'];
let i = 0; 
function btn1() {
    if (i <= 0) i = images.length;
    i--;

    return setImg();
    
}

function btn2() {
    if( i >= images.length-1) i = -1;
    i++;
    return setImg();
}
function btn3(){
    return setImg()
}
function setImg() {
    return slider_img.setAttribute('src', 'images/' + images[i])
}
