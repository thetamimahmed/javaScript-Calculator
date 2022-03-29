let calculatorScreen = document.getElementById('calculator-screen');
let inputButtons = document.getElementsByClassName('input');
for(const button of inputButtons){
    button.addEventListener('click', function(e){
        if(button.innerText == 'X'){
            calculatorScreen.value += '*';
        }
        else if(button.innerText == 'C'){
            calculatorScreen.value = '';
        }
        else if(button.innerText == '='){
            if(calculatorScreen.value == ''){
                calculatorScreen.value == '';
            }
            else{
                calculatorScreen.value = eval(calculatorScreen.value);
            }
        }
        else{
            calculatorScreen.value += button.innerText;
        }
    })
}
