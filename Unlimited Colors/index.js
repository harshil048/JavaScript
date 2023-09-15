const randomColor = ()=>{
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i=0; i< 6; i++){
        const randomValue = Math.round( Math.random() * 16);
        color += hex.charAt(randomValue);
    }
    document.body.style.backgroundColor = color;
}

let intervalId;
document.querySelector("#start").addEventListener('click',()=>{
    if(!intervalId) intervalId = setInterval(randomColor,100);
})
document.querySelector("#stop").addEventListener('click',()=>{
    clearInterval(intervalId);
    intervalId = null;
})