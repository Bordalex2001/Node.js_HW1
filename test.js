import calculator from 'calculator_bordalex28';

console.log("Method Add(a, b): ", calculator.Add(2, 8));
console.log("Method Subtract(a, b): ", calculator.Subtract(8, 2)); 
console.log("Method Multiply(a, b): ", calculator.Multiply(2, 8)); 
console.log("Method Divide(a, b): ", calculator.Divide(8, 2));
console.log("Method DivideByMod(a, b): ", calculator.DivideByMod(8, 3)); 

try {
    console.log("Divide by zero: ", calculator.Divide(8, 0));
    console.log("Divide by zero (by mod): ", calculator.DivideByMod(8, 0));
} 
catch (error) {
    console.error(error.message);
}