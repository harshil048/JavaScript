// for

for(let i=1; i<10; i++){
   // console.log(i);
    if(i === 5){
        //console.log("5 is best Number");
    }
}

for(let i=0; i<=10; i++){
    //console.log(`Outer loop value: ${i}`);
    for(let j=0; j<=10; j++){
        // console.log(`Inner loop value: ${j} and outer loop ${i}`);
        //console.log(i + ' * ' + j + ' = ' + i*j);
    }
}

let myArr = ["flash", "bamtman", "superman"];

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}

for (let i = 1; i <= 20; i++) {
    if(i === 5){
        break;
    }
    console.log(i);
}

for (let i = 1; i <= 20; i++) {
    if(i === 5){
        console.log("detect 5");
        continue;
    }
    console.log(i);
}