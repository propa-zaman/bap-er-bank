// step-1: add event listener to depsote button
document.getElementById('btn-deposite').addEventListener('click', function () {

    // step-2: get the deposite ammount form deposite input field
    const userDeposite = document.getElementById('user-deposite');
    const newDepositeAmmountString = userDeposite.value;
    const newDepositeAmmount = parseFloat(newDepositeAmmountString);
    console.log(typeof newDepositeAmmount)


    // step-3: get the deposite total ammount
    // for non-input element, use innerText
    const depositeTotal = document.getElementById('deposite-total');
    const previousDepositeTotalString = depositeTotal.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);

    const currentDepositeTotal = previousDepositeTotal + newDepositeAmmount;
    // set the deposite total
    depositeTotal.innerText = currentDepositeTotal;

    // step-4: get balance current total
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate the total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositeAmmount;

    // set the balance total
    balanceTotal.innerText = currentBalanceTotal;
    

    // step-7: clear the input field
    userDeposite.value = '';

})
