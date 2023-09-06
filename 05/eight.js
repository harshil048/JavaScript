const arr = [1, 2, 3, 5, 6];

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0 <-- accumulator value)

const sum = arr.reduce((accumulator, current) => (
    accumulator + current
), 0);
console.log(sum);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const total = shoppingCart.reduce( (acc,curr)=>(
    acc + curr.price
),0);

console.log(total);
