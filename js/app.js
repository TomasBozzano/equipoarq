const menuMobile = document.getElementById("nav-links-mobile");
const menuOpen = document.getElementById("menuM");
const menuClosed = document.getElementById("menuX");

addEventListener("click", () => {
    if (menuMobile.style.display === "flex") {
        menuMobile.style.display = "none";
        menuOpen.style.display = "block";
        menuClosed.style.display = "none";
    } else {
        menuMobile.style.display = "flex";
        menuOpen.style.display = "none";
        menuClosed.style.display = "block";
    }
});
/*******************************Efecto de servicios***************/
var cubo1Ser = document.getElementById('cuboC');
var cubo2Ser = document.getElementById('cuboPF');
var cubo1Img = document.getElementById('cuboCF');
var cubo2Img = document.getElementById('cuboP');
var donCarlos = -((medirInferior - div12mas) / ((div12mas - div123)));
var donCarlosN = (-(medirInferior - div12mas) / (div12mas - div123)) * 10;
var donCarlosP = ((medirInferior - div12mas) / (div12mas - div123)) * 10;

/*******************************texto 1***************/
if (medirInferior > div12mas && donCarlosN < 10) {
    cubo1Ser.style.left = donCarlosN + '%';
    cubo1Ser.style.opacity = donCarlos;
} else {
    cubo1Ser.style.left = 10 + '%';
    cubo1Ser.style.opacity = 1;
}

/*******************************IMG 1***************/
if (medirInferior > div12mas && donCarlosP > (-10)) {
    cubo1Img.style.opacity = donCarlos;
} else {
    cubo1Img.style.opacity = 1;
}

/*******************************texto 2***************/
if (medirInferior > (div12mas + 250) && donCarlosP > (-10)) {
    cubo2Ser.style.left = donCarlosP + '%';
    cubo2Ser.style.opacity = donCarlos;
} else {
    cubo2Ser.style.left = -10 + '%';
    cubo2Ser.style.opacity = 1;
}

/*******************************IMG 2***************/
if (medirInferior > (div12mas + 250) && donCarlosN < 10) {
    cubo2Img.style.opacity = donCarlos;
} else {
    cubo2Img.style.opacity = 1;
}

   
/******************************************************************Efecto de trabajo**/
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

var cons = 2;
function slide_show(){

    var elemento = document.getElementById('galeria').getElementsByTagName('li');
    var elemento1 = document.getElementById('galeria1').getElementsByTagName('li');
    
for(var n=cons; n <= elemento.length; n++){		
 elemento[n].className = 'selected';
 elemento1[n].className = 'selected1';  
 for(var i = 0; i<elemento.length; i++){
  if(i!=cons){
   elemento[i].className = 'noselected';
  elemento1[i].className = 'noselected1';      
 
  }		
 }
  cons++;							
  break;
 }	
 if(cons >= elemento.length){
  cons = 0;		
 }
 return false;
}
window.onload = function(){
 setInterval(slide_show, 5000);
}



/**********************Reveal**************/

function irReveal1() {
    document.getElementById("reveal1").style.display = "inline";
    document.getElementById("reveal1-1").checked = true;
}
function irReveal2() {
    document.getElementById("reveal2").style.display = "inline";
    document.getElementById("reveal2-1").checked = true;
}
function irReveal3() {
    document.getElementById("reveal3").style.display = "inline";
    document.getElementById("reveal3-1").checked = true;
}
function irReveal4() {
    document.getElementById("reveal4").style.display = "inline";
    document.getElementById("reveal4-1").checked = true;
}
function irReveal5() {
    document.getElementById("reveal5").style.display = "inline";
    document.getElementById("reveal5-1").checked = true;
}
function irReveal6() {
    document.getElementById("reveal6").style.display = "inline";
    document.getElementById("reveal6-1").checked = true;
}

function irReveal7() {
    document.getElementById("reveal7").style.display = "inline";
    document.getElementById("reveal7-1").checked = true;
}
function irReveal8() {
    document.getElementById("reveal8").style.display = "inline";
    document.getElementById("reveal8-1").checked = true;
}
function irReveal9() {
    document.getElementById("reveal9").style.display = "inline";
    document.getElementById("reveal9-1").checked = true;
}


function fueraReveal1() {
    document.getElementById("reveal1").style.display = "none";
    document.getElementById("reveal2").style.display = "none";
    document.getElementById("reveal3").style.display = "none";
    document.getElementById("reveal4").style.display = "none";
    document.getElementById("reveal5").style.display = "none";
    document.getElementById("reveal6").style.display = "none";
    document.getElementById("reveal7").style.display = "none";
    document.getElementById("reveal8").style.display = "none";
    document.getElementById("reveal9").style.display = "none";
}

function publico1() {
    document.getElementById("reveal1-1").checked = true;
}   
