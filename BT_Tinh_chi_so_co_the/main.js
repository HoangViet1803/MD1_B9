let weight = Number(prompt("Cân nặng của bạn:"));
let height = Number(prompt('Chiều cao của bạn (m):'));
let bmi = weight / (height**2);
if (bmi < 18.5) {
    alert('Underweight')
} else if (bmi >= 18.5 && bmi < 25) {
    alert('Normal')
} else if (bmi >= 25 && bmi < 30) {
    alert('Overweight')
} else {
    alert('Obese')
}