const form = document.querySelector("form");
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");


    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please Give Valid Hight it is ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please Give Valid Weight it is ${weight}`;
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        results.innerHTML = `<span>BMI is :- ${bmi}</span><br>`;
        
        let state;
        if(bmi < 18.6){
            state = 'Under Weight';
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            state = 'Normal Range';
        }
        else{
            state = 'Over Weight';
        }
        results.appendChild(document.createTextNode(`So, It is ${state}`));
    }
})