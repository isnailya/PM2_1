document.getElementById("button-count").addEventListener('click', calcBankDeposit);
function calcBankDeposit() {
    let inputamount = +document.getElementById('initialamount').value;
    let inputtopupamount = +document.getElementById('topupamount').value;
    let inputpercent = +document.getElementById('percent').value;
    let inputdate = +document.getElementById('date').value;
    let finalresult =+ inputamount;
     
    if (inputamount <= 0 || isNaN(inputamount)){
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
        let month = Math.trunc(inputdate / 30);
        for (let i = 0; i < month; i++) {
          finalresult = finalresult + inputtopupamount + ((finalresult + inputtopupamount) * inputpercent) / 100;
        }
        alert(Math.ceil(finalresult));
    }
    
}

function showMistake () {
    document.getElementById('error').style.display="block";
}

