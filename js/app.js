   
/******************************************************************Efecto de trabajo**/
var Ta1 = $("#a1").height();
var Ta3 = $("#a3").height();
var Ta6 = $("#a6").height();
var div_alto1 = $("#1").height();
var div_alto2 = $("#2").height();
var div_alto3 = $("#3").height();
var div_altoInt = $("#intermedioid").height();
var div123 =  div_alto3 + div_altoInt + div_alto2 + div_alto1;
var medirInferior = window.pageYOffset + window.innerHeight;

    if(medirInferior > div123 ){
        
        if(medirInferior > (div123)){
            $("#a1").addClass("anima1");
            $("#a2").addClass("anima2");
        }
        if(medirInferior > (div123+Ta1)){
            $("#a3").addClass("anima3");
            $("#a4").addClass("anima4");
            $("#a5").addClass("anima5");
        }
        if(medirInferior > (div123+Ta1+Ta3)){
            $("#a6").addClass("anima6");
            $("#a7").addClass("anima7");
            $("#a8").addClass("anima8");
            $("#a9").addClass("anima9");
            $("#a10").addClass("anima10"); 
        }      
        }else{
            $("#a1").removeClass("anima1");
            $("#a2").removeClass("anima2");
            $("#a3").removeClass("anima3");
            $("#a4").removeClass("anima4");
            $("#a5").removeClass("anima5");
            $("#a6").removeClass("anima6");
            $("#a7").removeClass("anima7");
            $("#a8").removeClass("anima8");
            $("#a9").removeClass("anima9");
            $("#a10").removeClass("anima10");
        }

/************************* Fin del paralax ***********************/



 /**********************Reveal**************/ 

function irReveal1(){
    document.getElementById("reveal1").style.display="inline";
    document.getElementById("reveal1-1").checked = true;
}
function irReveal2(){
    document.getElementById("reveal2").style.display="inline";
    document.getElementById("reveal2-1").checked = true;
}
function irReveal3(){
    document.getElementById("reveal3").style.display="inline";
    document.getElementById("reveal3-1").checked = true;
}
function irReveal4(){
    document.getElementById("reveal4").style.display="inline";
    document.getElementById("reveal4-1").checked = true;
}
function irReveal5(){
    document.getElementById("reveal5").style.display="inline";
    document.getElementById("reveal5-1").checked = true;
}
function irReveal6(){
    document.getElementById("reveal6").style.display="inline";
    document.getElementById("reveal6-1").checked = true;
}

function irReveal7(){
    document.getElementById("reveal7").style.display="inline";
    document.getElementById("reveal7-1").checked = true;
}
function irReveal8(){
    document.getElementById("reveal8").style.display="inline";
    document.getElementById("reveal8-1").checked = true;
}
function irReveal9(){
    document.getElementById("reveal9").style.display="inline";
    document.getElementById("reveal9-1").checked = true;
}


function fueraReveal1(){
    document.getElementById("reveal1").style.display="none";
    document.getElementById("reveal2").style.display="none";
    document.getElementById("reveal3").style.display="none";
    document.getElementById("reveal4").style.display="none";
    document.getElementById("reveal5").style.display="none";
    document.getElementById("reveal6").style.display="none";
    document.getElementById("reveal7").style.display="none";
    document.getElementById("reveal8").style.display="none";
    document.getElementById("reveal9").style.display="none";
}

function publico1(){
    document.getElementById("reveal1-1").checked = true;
}   
