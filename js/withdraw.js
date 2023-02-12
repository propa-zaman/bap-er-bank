
// step-1: add event listner to the withdarw button
document.getElementById('btn-withdraw').addEventListener('click', function(){

    // step-2: get the withdraw value from the input field
    const userWithdraw = document.getElementById('user-withdraw');
    const newWithdrawAmmountString = userWithdraw.value;
    const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);
    if(isNaN(newWithdrawAmmount)){
        alert('please provide a valid number');
        return;
    }

    // step-3: get the withdraw total ammount
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmmount;
    // step-4: set the withdraw total
    withdrawTotal.innerText = currentWithdrawTotal;

    // step-5: get the previous balance total
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // if(newWithdrawAmmount > previousBalanceTotal{
    //     alert('Bap er bank e eto taka nai');
    //     return;
    // })

    // step-6: calculate new balance total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmmount;
    // set the balance total
    balanceTotal.innerText = newBalanceTotal;


      // step-7: clear the input field
      userWithdraw.value = '';

    
})