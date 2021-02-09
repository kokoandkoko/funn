function mygen(){
    
        let agee =prompt("ปีเกิด");
        if(agee>=2540 && agee<=2564){
            if(agee>=2553 && agee<=2564){
            console.log(agee+" alpha");
            document.getElementById("hContent").innerHTML=agee+" alpha gen";
        }
        else if (agee>=2540 && agee<=2553){
            console.log(agee+" genZ")
            document.getElementById("hContent").innerHTML=agee+" genZ";
        }
       
        }

        else if (agee>=2523 && agee<=2539){
            console.log(agee+" genY")
            document.getElementById("hContent").innerHTML=agee+" genY";
        }

        else if (agee>=2508 && agee<=2522){
            console.log(agee+" genX")
            document.getElementById("hContent").innerHTML=agee+" genX";
        }
        else if (agee>=2489 && agee<=2507){
            console.log(agee+" Baby Boomer")
            document.getElementById("hContent").innerHTML=agee+" Baby Boomer";
        }
        else if (agee>=2468 && agee<=2488){
            console.log(agee+" Silent Generation")
            document.getElementById("hContent").innerHTML=agee+" Silent Generation";
        }
        else if (agee>=2444 && agee<=2467){
            console.log(agee+" Greatest Generation")
            document.getElementById("hContent").innerHTML=agee+" Greatest Generation";
        }

        











        
        else{
            
                alert("Error")
            console.log("Error");
            document.getElementById("hContent").innerHTML="Error";
        }
    }




mygen();

function myhalooooo(){
    console.log("เวิลลลลลล");
    document.getElementById("hContent3").innerHTML="หวัดดี";
}
myhalooooo();
