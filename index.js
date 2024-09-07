function Add(a, b){
    return a + b;
}

function Subtract(a, b){
    return a - b;
}

function Multiply(a, b){
    return a * b;
}

function Divide(a, b){
    if (b == 0){
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

function DivideByMod(a, b){
    if (b == 0){
        throw new Error("Cannot divide by zero");
    }
    return a % b;
}

module.exports = {
    Add,
    Subtract,
    Multiply,
    Divide, 
    DivideByMod
};