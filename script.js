// All JS function in here
function addNewWEField(){
    // console.log("Adding new field");

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");

    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);

}

function addNewAQField(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");

    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);

}

// generate CV

function generateCV(){
    // console.log("going");
    let nameField=document.getElementById("nameField").value;

    let nameT1 = document.getElementById("nameT1");
    
    nameT1.innerHTML=nameField;


    document.getElementById("nameT2").innerHTML=nameField;

    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
    document.getElementById("ldT").innerHTML=document.getElementById("ldField").value;
    document.getElementById("ghT").innerHTML=document.getElementById("ghField").value;
  
    document.getElementById("summaryT").innerHTML=document.getElementById("sumField").value;

    // Work experienxe
    let wes=document.getElementsByClassName('weField');
    let str="";
    for (let e of wes){
        str=str+`<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML = str;

    // academic qualifiaction
    let aqs=document.getElementsByClassName('eqField');
    let str1="";
    for(let e of aqs){
        str1+=`<li> ${e.value} </li`;
    }

    document.getElementById("aqT").innerHTML=str1;

    // code for image

    let file = document.getElementById('imgField').files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);


    // set image
    reader.onloadend=function(){
        
        document.getElementById('imgT').src=reader.result;
    }

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";

}

// print CV
function printCV(){
    window.print();
}

