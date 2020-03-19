
document.getElementById("button-count").addEventListener('click', calcBankDeposit);

function calcBankDeposit() {
    let inputamount = +document.getElementById('initialamount').value;
    let inputtopupamount = +document.getElementById('topupamount').value;
    let inputpercent = +document.getElementById('percent').value;
    let inputdate = +document.getElementById('date').value;
     
    if (inputamount <=  0 || isNaN(inputamount)){
        showMistake();
        console.log('mistake');
        return NaN;

    }else if (inputtopupamount <= 0 || isNaN(inputamount)) {
        showMistake();
        console.log('mistake');
        return NaN;
    }else if (inputpercent < 1 || inputpercent > 100) {
        showMistake();
        console.log('mistake');
        return NaN;
    }else if (inputdate <= 0 || isNaN(inputdate)) {
        showMistake();
        console.log('mistake'); 
        return NaN;
    } else {
        for (let i = 0; i < inputdate / 30; i++) {
            
            inputamount *= 1 + inputpercent * 30 / 100 * 360;
            inputamount += inputtopupamount;
          }
        //   return inputamount;
        //   console.log(inputamount);
          alert(inputamount);
    }
    
}

function showMistake () {
    document.getElementById('error').style.display="block";
}

