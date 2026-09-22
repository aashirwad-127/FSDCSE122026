const container = document.getElementById("container");
console.log(container);
 const root=ReactDOM.createRoot(container);
const h2= React.createElement('h2',{style:{color:'red'}},'welocome to react js');
 const h1=React.createElement('h1',{style:{color:'red'}},'working on react ');
 
 
 const img=React.createElement('img',{src:'https://picsum.photos/200 ',style:{height:'200',width:'200'}});
 const div=React.createElement('div',{},img,h1,h2);
 root.render(div);

 
