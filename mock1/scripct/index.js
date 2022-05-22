function storedata(e){
    event.preventDefault();
    let form =document.getElementById("student_data");
    let name=form.name.value;
    let cource=form.cource.value;
    let unit=form.unit.value;
    let image=form.image.value;
    let batch=form.batch.value;

    var p=new student(name,cource,unit,image,batch);
    var data=JSON.parse(localStorage.getItem("students"))||[];
    data.push(p);
    localStorage.setItem("students",JSON.stringify(data));
    // console.log(p)
    location.reload()

}
function student(a,b,c,d,e)
{
    this.name=a;
    this.cource=b;
    this.unit=c;
    this.image=d;
    this.batch=`Ft-web${e}`;
}
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