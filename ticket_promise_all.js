//By using promise.all........
// console.log("person1:shows ticket");
// console.log("person2:shows ticket");

// const preMovie=async()=>{

//     const promiseWifeBriningTicks=new Promise((resolve ,reject)=>{
//         setTimeout(()=>resolve("ticket"),3000)
//     });
//     const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));
//     const getButter=new Promise((resolve,reject)=>resolve( `butter`));
//     const getColdDrinks =new Promise((resolve,reject)=>resolve( `ColdDrinks`));
//     const getCoke=new Promise((resolve,reject)=>resolve( `coke`));

//     let ticket=await promiseWifeBriningTicks;
//     let [popcorn,butter,ColdDrink,coke]=await Promise.all([getPopcorn,getButter,getColdDrinks,getCoke]);
//     console.log(`${popcorn},${butter},${ColdDrink},${coke}`)
//     return ticket;
// }
// preMovie().then((m)=>console.log(`person3 shows ${m}`))

// console.log("person4:shows ticket");
// console.log("person5:shows ticket");

console.log("person1:shows ticket");
console.log("person2:shows ticket");

const preMovie=async()=>{

    const promiseWifeBriningTicks=new Promise((resolve ,reject)=>{
        setTimeout(()=>reject("ticket"),3000)
    });

    let ticket
    try{
        ticket=await promiseWifeBriningTicks;
    }catch(e){
        ticket="sad face"
    }
    return ticket;
}
preMovie().then((m)=>console.log(`person3 shows ${m}`))

console.log("person4:shows ticket");
console.log("person5:shows ticket");