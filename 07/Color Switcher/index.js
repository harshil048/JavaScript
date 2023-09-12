const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

function changeColor(id){
    document.body.style.backgroundColor = id;
};

buttons.forEach((button)=>(
    button.addEventListener('click', function(e){
        let id = e.target.id;
        switch(id){
            case "grey":
                document.querySelector(".canvas").style.color = "black";
                changeColor(e.target.id);
                break;
            case "black":
                document.querySelector(".canvas").style.color = "white";
                changeColor(e.target.id);
                break;
            case "blue":
                document.querySelector(".canvas").style.color = "#66FF99";
                changeColor(e.target.id);
                break;
            case "yellow":
                document.querySelector(".canvas").style.color = "blue";
                changeColor(e.target.id);
                break;
        }
    })
));