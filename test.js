
let checkEven = new Promise((resolve, reject) => {
    const num = 10;
    if(num % 2 === 0) {
        resolve("Even Number");
    } else {
       reject("Odd Number");
    }   
});

checkEven.then((message) => {
    console.log(message);
    console.log("This is resolved");
}).catch((error) => {
    console.log(error);
});
