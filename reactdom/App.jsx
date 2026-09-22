const container = document.getElementById("container");
console.log(container);
 const root=ReactDOM.createRoot(container);
///
// const h2= React.createElement('h2',{style:{color:'red'}},'welocome to react js');
// const h1=React.createElement('h1',{style:{color:'red'}},'working on react ');
 //
 
 
// const img=React.createElement('img',{src:'https://picsum.photos/200 ',style:{height:'200',width:'200'}});
 //const div=React.createElement('div',{},img,h1,h2);
 const h1=<h1>welcome to react</h1>;
  const img=<img src="https://picsum.photos/200" height={200} width={200}></img>;
  
 const h3=<h3>RESUME BUILDER</h3>
  const div11=[h1,img,h3];
  const div1=
  <>
 <div style={{border:'2px solid red ,height:'300',width:'400'}}>
     {h3}
     {div}
     </div>
     </>
 root.render(div);

 
