console.log(" ando 1 ");
var paralax = 5;
var quien = 0;

var menu_alto = document.getElementById("menuID");
var menu_alto1 = document.getElementById("menuID1");
var menu_alto2 = document.getElementById("menuID2");
var menu_alto3 = document.getElementById("menuID3");
var menu_alto4 = document.getElementById("menuID4");
var menu_alto5 = document.getElementById("menuID5");
var menu_alto6 = document.getElementById("menuID6");

var Ta1 = $("#a1").height();
var Ta3 = $("#a3").height();
var Ta6 = $("#a6").height();



var div_alto1 = $("#1").height();
var div_alto2 = $("#2").height();
var div_alto3 = $("#3").height();
var div_altoInt = $("#intermedioid").height();
var div12 =   div_alto2 + div_alto1;
var div123 =  div_alto3 + div_altoInt + div_alto2 + div_alto1;
var div12mas =  div_alto2 + div_alto1 + div_altoInt;
var altoVentana = window.innerHeight/3;
var n = window.pageYOffset;
var medirInferior = window.pageYOffset + window.innerHeight;
var recorridoMenu = 50 ;
var velocidadMenu = 10 ;
var velocidadMenuLi = 12;


/****************************  MENU  *************************************/


(function(){
 if (window.innerWidth<640){
    recorridoMenu = 180;
    velocidadMenu = 1;
}else if (window.innerWidth>640){
    recorridoMenu = 50;
    velocidadMenu = 10;
}    
var saleX = function(){
    document.getElementById('menuM').style.display="inline";
    document.getElementById('nav-links-mobile').style.display="none";
    document.getElementById('menuX').style.display="none";
    correArriba();
};   
var saleM = function(){
    document.getElementById('menuM').style.display="none";
    document.getElementById('nav-links-mobile').style.display="flex";
    document.getElementById('menuX').style.display="inline";
    disparar();
};
/************************* DISPARADOR DEL MENU *************/
 function disparar() {
  var cuenta0 = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (cuenta0 > 300) {
      clearInterval(id);    
    } else {
      cuenta0++;
        if(cuenta0 == 1){
            correAbajo();}
        if(cuenta0 == 30){
            correAbajo1();}
        if(cuenta0 == 40){
            correAbajo2();}
        if(cuenta0 == 50){
            correAbajo3();}
        if(cuenta0 == 60){
            correAbajo4();}
        if(cuenta0 == 70){
            correAbajo5();}
    }
  }
}   
/************************* el  setInterval llama al frame cada 10 mili segundos y el clear Intervale corta el set (que sino seria indefinido) *************/
function correAbajo() {

    
  var cuenta = 0;
  var id = setInterval(frame, velocidadMenu);
  function frame() {
    if (cuenta == recorridoMenu) {
      clearInterval(id);
    } else {
      cuenta++; 
      menu_alto.style.top = cuenta + 'px'; 
      menu_alto.style.opacity = cuenta/50;    
    }
  }
}   
function correAbajo1() {  
  var cuenta1 = -20;
  var cuentaOpa1 = 0;    
  var id1 = setInterval(frame, velocidadMenuLi);
  function frame() {
    if (cuenta1 > 0) {
      clearInterval(id1);
    } else {
      cuenta1++;
      cuentaOpa1 = cuentaOpa1 + 0.05;        
      menu_alto1.style.marginTop = cuenta1 + 'px';
      menu_alto1.style.opacity = cuentaOpa1;    
    }
  }
}
function correAbajo2() {  
  var cuenta2 = -20;
  var cuentaOpa2 = 0;    
  var id2 = setInterval(frame, velocidadMenuLi);
  function frame() {
    if (cuenta2 > 0) {
      clearInterval(id2);    
    } else {
      cuenta2++;
      cuentaOpa2 = cuentaOpa2 + 0.05;    
      menu_alto2.style.marginTop = cuenta2 + 'px';
      menu_alto2.style.opacity = cuentaOpa2;    
    }
  }
}
function correAbajo3() {  
  var cuenta3 = -20;
  var cuentaOpa3 = 0;    
  var id3 = setInterval(frame, velocidadMenuLi);
  function frame() {
    if (cuenta3 > 0) {
      clearInterval(id3);
    } else {
      cuenta3++;
      cuentaOpa3 = cuentaOpa3 + 0.05;    
      menu_alto3.style.marginTop = cuenta3 + 'px';
      menu_alto3.style.opacity = cuentaOpa3;
    }
  }
}
function correAbajo4() {  
  var cuenta4 = -20;
  var cuentaOpa4 = 0;
  var id4 = setInterval(frame, velocidadMenuLi);
  function frame() {
    if (cuenta4 > 0) {
      clearInterval(id4);
    } else {
      cuenta4++; 
      cuentaOpa4 = cuentaOpa4 + 0.05;     
      menu_alto4.style.marginTop = cuenta4 + 'px'; 
      menu_alto4.style.opacity = cuentaOpa4;    
    }
  }
}
function correAbajo5() {  
  var cuenta5 = -20; 
  var cuentaOpa5 = 0;    
  var id5 = setInterval(frame, velocidadMenuLi);
  function frame() {
    if (cuenta5 > 0) {
      clearInterval(id5);
    } else {
      cuenta5++;
      cuentaOpa5 = cuentaOpa5 + 0.05;    
      menu_alto5.style.marginTop = cuenta5 + 'px';
      menu_alto5.style.opacity = cuentaOpa5;     
    }
  }
}
function correArriba() {

    
  var cuenta = recorridoMenu;
  var id = setInterval(frame, velocidadMenu);
  function frame() {
    if (cuenta == 0) {
      clearInterval(id);
      menu_alto.style.opacity = 0;    
      menu_alto1.style.opacity = 0;    
      menu_alto2.style.opacity = 0;    
      menu_alto3.style.opacity = 0;    
      menu_alto4.style.opacity = 0;    
      menu_alto5.style.opacity = 0; 
    } else {
      cuenta--; 
       menu_alto.style.top = cuenta + 'px';    
       menu_alto.style.opacity = cuenta/50;    
    }
  }
}        
var botonM = document.getElementById('menuM');
var botonX = document.getElementById('menuX');
    
botonM.addEventListener("click", saleM);
botonX.addEventListener("click", saleX);
    
document.getElementById('menuM').style.display="inline";
document.getElementById('menuX').style.display="none";

}())
/**************************** FINAL MENU  *************************************/




/*************** verificaQuienes(); que el Efecto de quienes somo, siempre este vible cuando se actualize ***************************************/

function verificaQuienes(){
   if(n > (altoVentana)&& n < (div12-altoVentana)){
       carlitos =(medirInferior - div_alto1)/((div_alto1 +altoVentana) - div_alto1); 
        document.getElementById("2").style. opacity = carlitos;
   } 
}
verificaQuienes();
window.onscroll = function () {
    console.log("aca estoy");
    
    var medirInferior = window.pageYOffset + div_alto1;
    var resultado = medirInferior/div12;
    var n = window.pageYOffset;
    /**Formula de carlitos para el scroll**/
    var carlitos =0; 
    
/*************************************************************Efecto de home paralax**/
  
        var grupo = document.getElementById("grupo");
        grupo.style.top = (n/paralax) + "px";
        
/*************************************************************Efecto de Divisor paralax**/
        var subPrueba = document.getElementById("subPruebaX");
        subPrueba.style.top = ((n - ((div_alto2+250) + div_alto1))/paralax) + "px";
        
    
    /**************************************************************Efecto de quienes somos****/
    if( medirInferior  > div_alto1 && medirInferior < (div_alto1 +altoVentana) ){
         carlitos =(medirInferior - div_alto1)/((div_alto1 +altoVentana) - div_alto1); 
        document.getElementById("2").style. opacity = carlitos;
        
    }
    else if( n > div12-altoVentana){
          carlitos=(n - div12) / ((div12-altoVentana)-div12);  
          document.getElementById("2").style. opacity = carlitos;
        }
    
    /*******************************Efecto de servicios***************/
    var cubo1Ser = document.getElementById('cuboC');
    var cubo2Ser = document.getElementById('cuboPF');
    var cubo1Img = document.getElementById('cuboCF');
    var cubo2Img = document.getElementById('cuboP');
    var donCarlos = -((medirInferior-div12mas)/((div12mas-div123) ));
    var donCarlosN =( -(medirInferior-div12mas)/(div12mas-div123) )*10;
    var donCarlosP =( (medirInferior-div12mas)/(div12mas-div123) )*10;
    
    /*******************************texto 1***************/
    if(medirInferior > div12mas  && donCarlosN < 10){
        cubo1Ser.style.left = donCarlosN + '%';
        cubo1Ser.style.opacity = donCarlos; 
    }else{
        cubo1Ser.style.left = 10 + '%';
        cubo1Ser.style.opacity = 1;
    }
    
    /*******************************IMG 1***************/
    if(medirInferior > div12mas  && donCarlosP > (-10)){
        cubo1Img.style.opacity = donCarlos; 
    }else{
        cubo1Img.style.opacity = 1;
    }
    
    /*******************************texto 2***************/
    if(medirInferior > (div12mas+250) && donCarlosP > (-10)){
        cubo2Ser.style.left = donCarlosP + '%'; 
        cubo2Ser.style.opacity = donCarlos; 
    }else{
        cubo2Ser.style.left = -10 + '%';
        cubo2Ser.style.opacity = 1;
    }
    
    /*******************************IMG 2***************/
    if(medirInferior > (div12mas+250)  && donCarlosN < 10){
        cubo2Img.style.opacity = donCarlos;
    }else{
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
