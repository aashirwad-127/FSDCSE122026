//console.log("helllo how are you all ")
/*let  a=34;
if(a>10){
   let  a=40;
    console.log("hi a inside the block :"+a);

}
console.log("heyy ... a is now outside the block "+ a)*/
/*function sum(a,b){
    return a+b;
}
console.log(sum(230,30))*/
/*const sum=(a,b)=>{return a +b};
console.log(sum(12,30));

const data=funcion(msg){
    return "hello ,i am using js"+msg;
};
console.log(data("and Node"))
//iif
// (()=>{console.log("hey..using and calling by iife")})();*/
// call back 
/*function sum(a,b){
    return a+b;

}
function sumwithMsg(clbk,msg){
    const result=clbk(2,6);
    console.log("hey ,your result="+result+"!!well done "+msg)}

// sumwithMsg(sum,"rahul")*/
/*function login(msg,error){
    if(error){
        console.log("error is "+error)
    }
    else{
        console.log(msg)
    }
}
function loginHandler(username,password,clbk){
    if(username=="aashirwad"&&password=="12345"){
        clbk("success",null);

    }else{
        clbk(null,"user name or password is incorrect")
    }
}
loginHandler("aashirwad","12345",login)*/
/*console.log("one")
console.log("two")
console.log("three")
*/
/*console.log("one")
setTimeout(()=>{
    console.log("two")
},1000)
console.log("three")*/
/*setTimeout(()=>{
    console.log("one")
    setTimeout(()=>{
    console.log("two")
    setTimeout(()=>{
    console.log("three")
    setTimeout(()=>{
    console.log("four")
    setTimeout(()=>{
    console.log("five")
    setTimeout(()=>{
    console.log("six")
    setTimeout(()=>{
    console.log("seven")
    
},100)
    
},100)
    
},100)
    
},100)
    
},100)
    
},100)
    
},100)*/
/*const mypromise=new Promise((resolve,reject)=>{
    const username="aashirwad";
    const password="12345";
    if(username=="aashirwad" && password=="12345"){
        resolve("success");

    }else{
        reject("username or password incorrect ")
    }
})
mypromise.then((msg)=>{
    console.log(msg)
}).catch((msg)=>{
    console.log(msg)
}).finally(()=>{
    console.log("all done")
})*/
/*  const mypromise=new Promise((resolve,reject)=>{
    const a=10;
    
    if(a%2==0){
        resolve("even");

    }else{
        reject("odd")
    }
})
mypromise.then((msg)=>{
    console.log(msg)
}).catch((msg)=>{
    console.log(msg)
}).finally(()=>{
    console.log("all done")
// })*/
/*const mypromise=new Promise((resolve,reject)=>{
    const username="aashirwad";
    const password="12345";
    if(username=="aashirwad" && password=="12345"){
        resolve("success");

    }else{
        reject("username or password incorrect ")
    }
})


async function handleData(){
    try{ 

      const ans=await mypromise
      if(ans="success"){
        const Tmypromise=new Promise((resolve,reject)=>{
    const username="aashirwad";
    const password="12345";
    if(username=="aashirwad" && password=="12345"){
        resolve("DELEVERD");

    }else{
        reject("NOT DELEVERD")
    }
})
Tmypromise.then((msg)=>{
    console.log(msg)
}).catch((msg)=>{
    console.log(msg)
}).finally(()=>{
    console.log("all done")
        
      }


    }catch(err){
        console.log(err)
    }
    finally{console.log("all done")

    }
}
handleData();*/
function orderReceive() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Order received");
        }, 1000);
    });
}

async function orderHandler() {
    try {
        const status = await orderReceive();
        console.log(status);
    } catch (err) {
        console.log(err);
    }
}

/*orderHandler();
orderReceive().then((msg)=>{
    console.log(msg)
}).catch((err)=>)*/
function orderPrepare() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Order Prepared");
        }, 1000);
    });
}

async function order1Handler() {
    try {
        const amn = await orderPrepare();
        console.log(amn);
    } catch (err) {
        console.log(err);
    }
}
function orderSpatch() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Order Spatch");
        }, 1000);
    });
}

async function order2Handler() {
    try {
        const akm = await orderSpatch();
        console.log(akm);
    } catch (err) {
        console.log(err);
    }
}
orderHandler();
order1Handler();
order2Handler();
