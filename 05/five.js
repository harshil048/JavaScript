const arr = [1,2,4,5,6,546];

arr.forEach( function (val) {
    console.log(val);
} )

arr.forEach( (val) => {
    console.log(val);
} )

function printMe(val){
    console.log(val);
}

arr.forEach(printMe);

arr.forEach( (item,index,arr) => {
    console.log(item,index,arr);
    console.log(index);

} )

const arr1 = [
    {  
        name: "JavaScript",
        file: "js"
    },
    {
        name: "C++",
        file: "cpp"
    },
    {
        name: "JAVA",
        file: "java"
    }
]

arr1.forEach( (it,idx,arr) => {
    console.log(it.name);
    console.log(it.file);

    // console.log(arr);
} )