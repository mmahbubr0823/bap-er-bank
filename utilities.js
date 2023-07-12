function getFieldValue(fieldId){
    const fieldValue = document.getElementById(fieldId);
    const fieldValueString =fieldValue.value;
    const neatValue = parseFloat(fieldValueString);
    fieldValue.value = '';
    return neatValue;
}
function getElementValue(elementId){
    const elementValue = document.getElementById(elementId);
    const elementValueString =elementValue.innerText;
    const previousValue = parseFloat(elementValueString);
    return previousValue;
}
function setValue(elementId, newValue){
    const elementValue = document.getElementById(elementId);
    elementValue.innerText = newValue;
}

document.getElementById('btn-deposit').addEventListener('click', function(){
   const fieldValueTotal = getFieldValue('deposit-field');
   const elementValueTotal = getElementValue('deposit');
   const depositTotal = fieldValueTotal + elementValueTotal;
   setValue('deposit', depositTotal);

   const previousBalanceTotal = getElementValue('balance')
   const newBalanceTotal = previousBalanceTotal + fieldValueTotal;
   setValue('balance', newBalanceTotal);
})

document.getElementById('btn-withdraw').addEventListener('click', function(){
   const fieldValueTotal = getFieldValue('withdraw-field');
   const elementValueTotal = getElementValue('withdraw');
   const withdrawTotal = fieldValueTotal + elementValueTotal;
   setValue('withdraw', withdrawTotal);

   const previousBalanceTotal = getElementValue('balance')
   const newBalanceTotal = previousBalanceTotal - fieldValueTotal;
   setValue('balance', newBalanceTotal);
})