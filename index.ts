// Type String Literals

type shape = "circle" | "rectangle" | "triangle";

function onDemo(shapePara: shape) {

    if (shapePara === "circle") {
        console.log("Circle Draw");
    }
    else if (shapePara === "rectangle") {
        console.log("rectangle");
    }
    else if (shapePara === "triangle") {
        console.log("triangle");
    }

}

onDemo("rectangle");

// Type Literals
type typeName = string;

function onDemo1(paraValue: typeName) {
    console.log(paraValue);
}

onDemo1("Kishor Naik");


// function Type Literals (C# kind of Delegate)
type funcOperation = (numValue1: number, numValue2: number) => number;


// Use Function type as CallBack Function
function demoFunctionType(numValue1: number, numValue2: number, funcOps: funcOperation): number {

    let resultValue = funcOps(numValue1, numValue2);

    return resultValue * 12;
}

let result = demoFunctionType(2, 2, (leNumValue1, leNUmValue2) => {
    return leNumValue1 + leNUmValue2;
});

console.log(result);




