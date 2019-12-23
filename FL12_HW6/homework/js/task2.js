const a = parseInt(prompt('Please enter value a'));
const b = parseInt(prompt('Please enter value b'));
const c = parseInt(prompt('Please enter value c'));
const zero = 0;
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert(`input values should be ONLY numbers`)
} else if (a === zero || b === zero || c === zero) {
    alert(`A triangle must have 3 sides with a positive definite length`)
} else if (a + b < c || a + c < b || b + c < a) {
    console.log(`Triangle doesn’t exist`)
} else if (a === b && b === c && a === c) {
    console.log(`Equilateral triangle`)
} else if (a === b && a !== c && c !== b || a === c && a !== b && c !== b || b === c && b !== a && c !== a) {
    console.log(`Isosceles triangle`)
} else if (a !== b && a !== c && b !== c) {
    console.log(`Scalene triangle`)
}