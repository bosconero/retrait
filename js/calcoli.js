function controllo() {
if(document.getElementById('rck').value==''){
alert("ATTENTION:"+"\n"+"\n"+ "Inserez la resistance cubique du beton en N/cm2") ;
document.getElementById('rck').focus();
} else{
controllo5()}
}
function controllo5(){
var cespo=document.getElementById('classesp').value;
var rck=document.getElementById('rck').value;
if(cespo=='XC1' && rck < 30){
alert("ATTENTION:"+"\n"+"\n"+ " Resistance infèrieur a 30 N/cm2, classe de résistance minimal admis pour XC1");
document.getElementById('rck').value='';
document.getElementById('rck').focus();

}else if (cespo=='XC2' && rck < 30){
alert("ATTENTION:"+"\n"+"\n"+ " Resistance infèrieur a 30 N/cm2, classe de résistance minimal admis pour XC2");
document.getElementById('rck').value='';
document.getElementById('rck').focus();
}else if (cespo=='XC3' && rck < 35) {
alert("ATTENTION: "+"\n"+"\n"+ "Resistance infèrieur a 35 N/cm2, classe de résistance minimal admis pour");
document.getElementById('rck').value='';
document.getElementById('rck').focus();
}else if(cespo=='XC4' && rck < 40){
alert("ATTENTION:"+"\n"+"\n"+ " Resistance infèrieur a 40 N/cm2, classe de résistance minimal admis pour XC4");
document.getElementById('rck').value='';
document.getElementById('rck').focus();
}else if(cespo=='XF3' && rck < 30){
alert("ATTENTION:"+"\n"+"\n"+ " Resistance infèrieur a 30 N/cm2, classe de résistance minimal admis pour XF3");
document.getElementById('rck').value='';
document.getElementById('rck').focus();
}else if (cespo=='XF4' && rck < 35){
alert("ATTENTION:"+"\n"+"\n"+ " Resistance infèrieur a 35 N/cm2, classe de résistance minimal admis pour XF4");
document.getElementById('rck').value='';
document.getElementById('rck').focus();
} 
else {controllo1()

}
}

function controllo1(){
if(document.getElementById('digiucont').value==''){
alert("Inserez la distance des joints de retrait." );
document.getElementById('digiucont').focus();
} else{
controllo2()}
}
function controllo2(){
if(document.getElementById('umidita').value==''){
alert("Inserez l'humidité relative") ;
document.getElementById('umidita').focus();
} else{
controllo3()}
}
function controllo3(){
if(document.getElementById('spesspav').value==''){
alert("Inserez l'epaisseur de la dalle ") ;
document.getElementById('spesspav').focus();
} else{
ritiro()}
}

function ritiro(){
document.getElementById('pinserimento').style.display="none";
document.getElementById('risultati').style.display="block";
var rck=document.getElementById('rck').value;
var distcont=document.getElementById('digiucont').value;
var umrel=document.getElementById('umidita').value;
var spess=document.getElementById('spesspav').value;
var cespo=document.getElementById('classesp').value;
var tgetto=document.getElementById('tipogetto').value;
if(document.getElementById('barriera').checked){
var strato="oui";
}else{
var strato="no";
}


if (tgetto=="direct" && cespo=='XC1'){
var srit=700;}
if (tgetto=="direct" && cespo=='XC2'){
srit=700;}
if (tgetto=="direct" && cespo=='XC3'){
srit=650;}
if (tgetto=="direct" && cespo=='XC4'){
srit=600;}
if (tgetto=="direct" && cespo=='XF3'){
srit=600;}
if (tgetto=="direct" && cespo=='XF4'){
srit=550;}
if (tgetto=="avec pompe" && cespo=='XC1'){
srit=800;}
if (tgetto=="avec pompe" && cespo=='XC2'){
srit=800;}
if (tgetto=="avec pompe" && cespo=='XC3'){
srit=750;}
if (tgetto=="avec pompe" && cespo=='XC4'){
srit=700;}
if (tgetto=="avec pompe" && cespo=='XF3'){
srit=700;}
if (tgetto=="avec pompe" && cespo=='XF4'){
srit=650;}

if(umrel<40){
umi=1.15;
}else if (umrel==40) {
umi=1.1 ;
}else if (umrel>40 && umrel<60){
umi=1.1-((umrel-40)*0.01);
}else if(umrel>=60 && umrel<80) {
umi=0.9-((umrel-60)*0.02);
}else if(umrel>80){
umi=0.45;
}
if(cespo=='XC1'){ var ac=0.6; }
if(cespo=='XC2'){ var ac=0.6; }
if(cespo=='XC3'){ var ac=0.55; }
if(cespo=='XC4'){ var ac=0.5; }
if(cespo=='XF3'){ var ac=0.5; }
if(cespo=='XF4'){ var ac=0.5; }

var spep=(100*spess)/50;

if (spep==5){
var fitt=1;
}else if (spep>5 && spep<=10){
var fitt=1-((spep-5)*0.03);
}else if(spep>10 && spep<=20){
var fitt=0.85-((spep-10)*0.02);
}else if(spep>20 && spep<=40){
var fitt=0.65-((spep-20)*0.01);
}else if(spep>40 && spep<=50){
var fitt=0.45-((spep-40)*0.005)
}

var ritirolastrax=((fitt*umi*srit)/1000)*distcont;
var ritirolastray=Math.round(ritirolastrax*100)/100;
if (strato=="oui"){
var ritirostrato=ritirolastray*12/100;
}else{
ritirostrato=0;}

ritirolastraz=ritirolastray+ritirostrato;
ritirolastra=Math.round(ritirolastraz*100)/100;
var boxalert=document.getElementById('boxalert');
boxalert.innerHTML="Le retrait theorique du béton jeune pour les joints de retrait scie tous les  <span style='font-weight:bold;color:#ff2200;'>"+distcont+" ml </span> il sera de <br /> <span style='font:bold 20px arial;color:#ff2200;display:block;width:100%;text-align:center;'>"+ritirolastra+" mm </span>";
var alertd=document.getElementById('alert2');
if (ritirolastra>1.7){
alert("Les retrait theorique est de "+ritirolastra+"\n"+"\n"+"RECALCULER LA DISTANCE DES JOINTS DE RETRAIT JUSQU'AU OBTENIR UN RETRAIT DE NE PAS PLUS DE 1.7 mm");
fineintro();
document.getElementById('digiucont').value='';
document.getElementById('digiucont').focus();
}
var modelast=5700*Math.sqrt(rck);     
var modelas=Math.round(modelast);         // modulo elastico calcestruzzo
var rck2=Math.pow(rck,2)   ;
var resistrazionex=0.27*Math.pow(rck2,1/3);  
var resistrazione=Math.round(resistrazionex*100)/100;   //resistenza a trazione
var fattrit=(fitt*umi*srit)/1000000; //d4
var sollmediatrazionex=(fattrit*modelas*(100*spess))/1500; 
var sollmediatrazione=Math.round(sollmediatrazionex*100)/100;//sollecitazione media a trazione
moduloelastico.innerHTML="Module d'élasticité du beton : <span style='font:bold 16px; color:#ff2200;'>"+modelas+" N/mm<sup>2</sup> </span>";
resistenzaatrazione.innerHTML="Résistance en traction : <span style='font:bold 16px; color:#ff2200;'>"+resistrazione+" N/mm<sup>2</sup></span>";
resistenzamediaatrazione.innerHTML="Traction moyenne contrainte : <span style='font:bold 16px; color:#ff2200;'>"+sollmediatrazione+" N/mm<sup>2</sup></span>";


}
function init(){
document.getElementById('intro').style.display="block";
document.getElementById('risultati').style.display="none";
document.getElementById('pinserimento').style.display="none";
}
function fineintro(){
document.getElementById('intro').style.display="none";
document.getElementById('pinserimento').style.display="block";
document.getElementById('risultati').style.display="none";
}
function esci(){
 navigator.app.exitApp();
}
function ripeti(){
window.location="index.html";
}
function gocalcolo(){
 window.location = "retrait.html";

}
function inviamail(){
var pac=document.getElementById('classesp').value;
var contr=document.getElementById('digiucont').value;
var getto=document.getElementById('tipogetto').value;
var cls=document.getElementById('rck').value;
var spessore=document.getElementById('spesspav').value;
if(document.getElementById('barriera').checked){
var strimp="oui";
}else{
var strimp="no";
}


var mess="DONN&Eacute;E DE CALCUL %0d%0a -------------------------%0d%0a%0d%0a Classe d'exposition du beton: "+pac+"%0d%0aResistance du beton    : "+cls+" N/mmq%0d%0aEpaisseur du plancher   : "+spessore+" cm%0d%0aDistance entre les joints de retrait: "+contr+" ml%0d%0aCoulage             : "+getto+"%0d%0asubstrat imperméable :"+strimp+"%0d%0a%0d%0a%0d%0aRESULTATS%0d%0a----------------------%0d%0aLe retrait theorique de la dalle en beton jeune est de "+ritirolastra+" mm.;%0d%0a" ;
var oggetto="Calcul du retrait du plancher en béton jeune. Chantier de"  ;
document.location.href = "mailto:?"+"Subject=" + oggetto + "&Body=" + mess; 
}
