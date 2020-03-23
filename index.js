document.getElementById("button-count").addEventListener('click', calcBankDeposit);
//document.getElementById('balance');

function calcBankDeposit() {
    let inputamount = +document.getElementById('initialamount').value;
    let inputtopupamount = +document.getElementById('topupamount').value;
    let inputpercent = +document.getElementById('percent').value;
    let inputdate = +document.getElementById('date').value;
    let finalresult = inputamount;
    
     
    if (inputamount <= 0 || isNaN(inputamount)){
        showMistake('mistake');
        return NaN;
    }else if (inputtopupamount <= 0 || isNaN(inputamount)) {
        showMistake('mistake');
        return NaN;
    }else if (inputpercent < 1 || inputpercent > 100) {
        showMistake('mistake');
        return NaN;
    }else if (inputdate <= 0 || isNaN(inputdate)) {
        showMistake('mistake'); 
        return NaN;
    } else {
         showMistake('');
        let month = Math.floor(inputdate / 30);
        for (let i = 0; i < month; i++) {
          finalresult = finalresult + inputtopupamount + finalresult * inputpercent / 1200;
        }
        
         document.getElementById('result').innerHTML =finalresult;
         //alert(finalresult);
    }
    
}

function showMistake (text) {
    document.getElementById('result').innerHTML=text;
}

