//async_await........
console.log("person1:shows ticket");
console.log("person2:shows ticket");

const preMovie=async()=>{

    const promiseWifeBriningTicks=new Promise((resolve ,reject)=>{
        setTimeout(()=>resolve("ticket"),3000)
    });
    const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));
    const getButter=new Promise((resolve,reject)=>resolve( `butter`));
    const getColdDrinks =new Promise((resolve,reject)=>resolve( `ColdDrinks`));
    const getCoke=new Promise((resolve,reject)=>resolve( `coke`));
    
    
    let ticket =await promiseWifeBriningTicks//await not run without async

        console.log("wife :I have the tics");
        console.log("husband :we shuold go in");
        console.log("wife :no i am hungary");

    let popcorn=await getPopcorn;

    console.log(`husband :i got some ${popcorn}`);
    console.log("husband :we shuold go in");
    console.log("wife :no i need butter on my popcorn");

    let butter= await getButter;

    console.log(`husband :i got some ${butter} on popcorn`);
    console.log("husband :anythimg else darling ?");
    console.log("wife :lets go we are getting late");
    console.log(`husband:thank you for the remainder *grins`);

    let ColdDrinks=await getColdDrinks;

    console.log(`husband : no i got some ${ColdDrinks} `);
    console.log("husband :anythimg else darling? You want coldDrinks ");
    console.log("wife :no,lets go we are getting late");
    console.log(`husband:thank you for the remainder *grins`);

    return ticket;
}
preMovie().then((m)=>console.log(`person3 shows ${m}`))

console.log("person4:shows ticket");
console.log("person5:shows ticket");