console.log("person1:shows ticket");
console.log("person2:shows ticket");

const promiseWifeBriningTicks=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("ticket");
    },3000)
});

const getPopcorn=promiseWifeBriningTicks.then((t)=>{
    console.log("wife :I have the tics");
    console.log("husband :we shuold go in");
    console.log("wife :no i am hungary");
    return new Promise((resolve,reject)=>resolve(`${t} popcorn`));
});

const getButter=getPopcorn.then((t)=>{
    console.log("husband :i got some popcorn");
    console.log("husband :we shuold go in");
    console.log("wife :no i need butter on my popcorn");
    return new Promise((resolve,reject)=>resolve(`${t} butter`));
});
const getColdDrinks=getButter.then((t)=>{
    console.log("husband : no i got some ColdDrinks} ");
    console.log("husband :anythimg else darling? You want coldDrinks ");
    console.log("wife :no,lets go we are getting late");
    console.log(`husband:thank you for the remainder *grins`);
    return new Promise((resolve,reject)=>resolve(`${t} ColdDrink`));
});

getColdDrinks.then((t)=>{console.log(t)});


console.log("person4:shows ticket");
console.log("person5:shows ticket");