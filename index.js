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
function login(msg,error){
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
loginHandler("aashirwad","12345",login)
