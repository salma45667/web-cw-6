// هنا سوف تنشئ دالة calculate 
function calculate(){
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;


//Error Message (Alert)
if (height =="" || weight =="") {
  alert("قم بالتأكد من تعبئة جميع البيانات المطلوبة!");
  return; 
}

let BMI = weight / (height * height);
let status ="";

if (BMI < 18.5) {
    status = "انت تعانى من الوزن الزائد!"
} else if (BMI < 25 ) {
    status = "وزنك صحى";
} else if (BMI < 30) {
    status = "تعانى من زيادة فى الوزن";
} else {
    status = "تعانى من السمنة المفرطة";
}

BMI = BMI.toFixed(2); 
document.getElementById("result").innerHTML = BMI;
document.getElementsByClassName("comment")[0].innerHTML = status;
