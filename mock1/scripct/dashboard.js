function append(){
    let data=JSON.parse(localStorage.getItem("students"))||[];
    let container=document.getElementById("container");
    container.innerHTML=null;
    data.forEach(function(el,index){
        let div=document.createElement("div");
       let img=document.createElement("img");
       img.src=el.image;
       let p=document.createElement("p");
       p.innerText=el.name;
       let p1=document.createElement("p");
       p1.innerText=el.batch;
       let p2=document.createElement("p");
       p2.innerText=el.cource;
       let p3=document.createElement("p");
       p3.innerText=el.unit;

       let btn=document.createElement("button");
       btn.innerText="Remove";
       btn.addEventListener("click",function(){
        remove(index);
       });


       div.append(img,p,p1,p2,p3,btn);
       container.append(div)
    });
   
}
append();
function remove(index){
    let data=JSON.parse(localStorage.getItem("students"))||[];

    let newData=data.filter(function(el,i){
        if(i===index)
        {
            let trash=JSON.parse(localStorage.getItem("trash"))||[];
            trash.push(el);
            localStorage.setItem("trash",JSON.stringify(trash));

        }
        else
        {
            return i!==index;
        }
    });
    localStorage.setItem("students",JSON.stringify(newData));
    append();
    location.reload();
   
}

// ---------------------------------------------------------------

function Calculte(){
    let navbar=document.getElementById("navbar");
    let data=JSON.parse(localStorage.getItem("students"))||[];
  let  obj={};

    for(let i=0; i<data.length; i++)
    {
        if(!obj[data[i].batch])
        {
            obj[data[i].batch] = 0;
        }
    }  
    

for(let i=0; i<data.length; i++)
    {
    obj[data[i].batch]  ++;
        
    }
    console.log(obj);
    arr=[]
    for(var key in obj)
    {
        arr.push(`${key}-${obj[key]}`);
       
       
    }
    console.log(arr)
    navbar.innerText=arr.join(" | ");
    
    
    
    
}
Calculte();
 





// var button=document.createElement("button");
// button.textContent="delete";
// button.addEventListener("click",function(){
//     Delete(elem.productID);
// })

// card.append(img,title,desc,catagory,price,button)

// products.append(card);
// });
// }
// display(cartlsdata);

// function Delete(id){
// cartlsdata=cartlsdata.filter(function(element){
// return element.productID != id;

// })
// display(cartlsdata);

// localStorage.setItem("masai-cart",JSON.stringify(cartlsdata));
// }