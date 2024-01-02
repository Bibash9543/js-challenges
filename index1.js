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
//bmi calculator

function bmiCalculator (weight, height) {
    var bmi = weight/(height*height);
    return Math.round(bmi);
}

var bmi = bmiCalculator(63,1.8);
alert("your bmi is " + bmi);
if(bmi<18.5){
    alert("Your BMI is" + bmi + " " + "so you are underweight.")
}
if(bmi>=18.5 && bmi<=24.9){
    alert("Your BMI is" + bmi + " " + "so you are normal weight")
}
if(bmi>24.5){
    alert("Your BMI is" + bmi + " " + "so you are overweight.")
}

