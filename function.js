
function myage(){
    let age =prompt("ใส่อายุดิ");
    if(age>=25){
    alert(age + " Adult age")
    console.log(age);
    document.getElementById("hContent1").innerHTML="Adult age "+age;
    }
    else if(age>=18 && age<25){
        alert(age + " Teeanage")
    console.log(age);
    document.getElementById("hContent1").innerHTML="Teeanage  "+age;
    }
    
    else if(age <18){
        alert(age + " Children")
    console.log(age);
    document.getElementById("hContent1").innerHTML="Children "+age;
    }
    else{
        
            alert("error")
        console.log(age);
        document.getElementById("hContent1").innerHTML="error";
    }
}
myage();




function myhalo(){
    console.log("เวิลลลลลล");
    document.getElementById("hContent2").innerHTML="เวิลลลลลล";
}
myhalo();