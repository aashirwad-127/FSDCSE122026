/*const root=document.getElementById('container')
const button=document.getElementById('btn')

/*const h2=document.createElement('h2');
h2.innerHTML='RESUME BUILDER';
const loader=document.createElement('h1');
 loader.innerHTML='Building....'
const img=document.createElement('img')
function buildResume(){
    try{
                 root.appendChild(loader)

        setTimeout(()=>{

         root.appendChild(h2);

        img.src='';
        img.setAttribute('height',100);
        img.setAttribute('width',100);
        root.appendChild(img);
        loader.remove()
        },2000)
       

    
}catch(e){
        console.log(e);
        loader.innerHTML='error in building resume';
    }
    finally{
      console.log("all resouces closed");
      
    }


}
button.addEventListener('click',buildResume);*/
const root = document.getElementById("container");
const btn = document.getElementById("btn");

console.log(root);

const h2 = document.createElement("h2");
h2.innerText = "RESUME";

const loader = document.createElement("h2");
root.appendChild(loader);

const table = document.createElement("table");
const img = document.createElement("img");

function buildResume() {
    try {
        loader.innerText = "Building...";

        table.setAttribute("cellpadding", "15");
        table.setAttribute("width", "600");
        table.style.borderCollapse = "collapse";

        const row1 = document.createElement("tr");
        const row2 = document.createElement("tr");
        const row3 = document.createElement("tr");
        const row4 = document.createElement("tr");

        const left1 = document.createElement("td");
        const right1 = document.createElement("td");

        const left2 = document.createElement("td");
        const right2 = document.createElement("td");

        const left3 = document.createElement("td");
        const right3 = document.createElement("td");

        const left4 = document.createElement("td");
        const right4 = document.createElement("td");

        img.src = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200";
        img.width = 100;
        img.height = 100;
        img.style.borderRadius = "50%";

        left1.appendChild(img);

        right1.innerText = "Aashirwad Kumar";

        left2.innerText = "Skill";
        right2.innerText = "CSE";

        left3.innerText = "Stream";
        right3.innerText = "B.Tech";

        left4.innerText = "Qualification";
        right4.innerText = "AI Engineer";

        row1.appendChild(left1);
        row1.appendChild(right1);

        row2.appendChild(left2);
        row2.appendChild(right2);

        row3.appendChild(left3);
        row3.appendChild(right3);

        row4.appendChild(left4);
        row4.appendChild(right4);

        table.appendChild(row1);
        table.appendChild(row2);
        table.appendChild(row3);
        table.appendChild(row4);

        const cells = table.querySelectorAll("td");

        cells.forEach(function (cell) {
            cell.style.border = "1px solid black";
        });

        root.appendChild(h2);
        root.appendChild(table);

        loader.innerText = "Resume Built Successfully";

    } catch (error) {
        console.log(error);
        loader.innerText = "Error in building resume";
    }
}

btn.addEventListener("click", buildResume);