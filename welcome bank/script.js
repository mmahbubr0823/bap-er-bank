// deposit part 

document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    const depositAmount = parseFloat(depositAmountString);
    console.log(depositAmount)

    const depositArea = document.getElementById('deposit');
    const depositAreaString = depositArea.innerText;
    const depositAreaAmount = parseFloat(depositAreaString);
    const depositTotal = depositAmount + depositAreaAmount;
    depositArea.innerText = depositTotal;

    const balanceArea = document.getElementById('balance');
    const balanceAreaString = balanceArea.innerText;
    const balanceAreaAmount = parseFloat(balanceAreaString);
    const balanceTotal = depositAmount + balanceAreaAmount;
    balanceArea.innerText = balanceTotal;



    depositField.value = '';
})


// withdra part 


document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);
    console.log(withdrawAmount)

    const withdrawArea = document.getElementById('withdraw');
    const withdrawAreaString = withdrawArea.innerText;
    const withdrawAreaAmount = parseFloat(withdrawAreaString);
    const withdrawTotal = withdrawAmount + withdrawAreaAmount;
    withdrawArea.innerText = withdrawTotal;

    const balanceArea = document.getElementById('balance');
    const balanceAreaString = balanceArea.innerText;
    const balanceAreaAmount = parseFloat(balanceAreaString);
    const balanceTotal = balanceAreaAmount - withdrawAmount;
    balanceArea.innerText = balanceTotal;



    withdrawField.value = '';
})