prompt("What is the name of boy");
prompt("What is the name of girl");
var n = Math.random();
n = Math.floor(n*100 +1);
if(n>70){
    alert("great match, You are good to go");
}
if(n>30 && n<=70){
    alert("You can continue");

}
if(n<=30){
    alert("Cant say anything");
}
