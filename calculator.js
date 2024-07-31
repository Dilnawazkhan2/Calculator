let displayValue = '';

function Display(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}
function deleteValue() {
    displayValue = displayValue.slice(0,-1);
    document.getElementById('display').value = displayValue;

}
function calculate() {  
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;  
}