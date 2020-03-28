// Type String Literals
function onDemo(shapePara) {
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
function onDemo1(paraValue) {
    console.log(paraValue);
}
onDemo1("Kishor Naik");
// Use Function type as CallBack Function
function demoFunctionType(numValue1, numValue2, funcOps) {
    var resultValue = funcOps(numValue1, numValue2);
    return resultValue * 12;
}
var result = demoFunctionType(2, 2, function (leNumValue1, leNUmValue2) {
    return leNumValue1 + leNUmValue2;
});
console.log(result);
