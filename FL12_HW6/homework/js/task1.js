const a = parseFloat(prompt('Please enter value a'));
const b = parseFloat(prompt('Please enter value b'));
const c = parseFloat(prompt('Please enter value c'));
const zero = 0;
const four = 4;
const two = 2;
let d = b * b - four * a * c;
if (d === zero) {
    alert('x = 0')
} else if (d < zero) {
    alert(`No solution`)
} else if (d > 0) {
    let x1 = (-b - Math.sqrt(d)) / two * a;
    let x2 = (-b + Math.sqrt(d)) / two * a;
    alert(`x1 = ${Math.floor(x1)} and x2 = ${Math.floor(x2)}`);
} else {
    alert('invalid data')
}