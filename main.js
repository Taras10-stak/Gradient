function changeColor() {
    const kub1 = document.getElementById('kub1');
    const kub2 = document.getElementById('kub2');
    const colorInput1 = document.getElementById('color1');
    const colorInput2 = document.getElementById('color2');  

    const color1 = colorInput1.value;
    const color2 = colorInput2.value;
    
    kub1.style.backgroundColor = color1;
    kub2.style.backgroundColor = color2;
    
    document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}




