function run0() {
  document.calc.result.value += "0";
}
function run1() {
  document.calc.result.value += "1";
}

function run2() {
  document.calc.result.value += "2";
}

function run3() {
  document.calc.result.value += "3";
}

function run4() {
  document.calc.result.value += "4";
}

function run5() {
  document.calc.result.value += "5";
}

function run6() {
  document.calc.result.value += "6";
}

function run7() {
  document.calc.result.value += "7";
}

function run8() {
  document.calc.result.value += "8";
}

function run9() {
  document.calc.result.value += "9";
}

function runPlus() {
  document.calc.result.value += " + ";
}

function runMinus() {
  document.calc.result.value += " - ";
}

function runDivide() {
  document.calc.result.value += " / ";
}

function runMultiply() {
  document.calc.result.value += " * ";
}

function runClear() {
  document.calc.result.value = " ";
}

function runAnswer() {
  var answer = eval(document.calc.result.value)
  document.calc.result.value = answer;
}
