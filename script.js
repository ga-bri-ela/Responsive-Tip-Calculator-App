//selectors
let billTotal = document.getElementById('total-bill');
let numberOfPeople = document.getElementById('number-of-people');
let tipAmountFinal = document.getElementById('tip-amount-final');
let totalAmountFinal = document.getElementById('total-amount-final');
let alert = document.getElementById('zero-alert');

//buttons
let tip5 = document.getElementById('tip-5');
let tip10 = document.getElementById('tip-10');
let tip15 = document.getElementById('tip-15');
let tip25 = document.getElementById('tip-25');
let tip50 = document.getElementById('tip-50');
let tipCustom = document.getElementById('custom-tip');
let resetButton = document.getElementById('reset-button');
let buttonArray = [tip5, tip10, tip15, tip25, tip50];

let isClicked = false;

buttonArray.forEach((button) => {
    button.addEventListener("click", () => {
         isClicked = true;
         button.style.backgroundColor = 'hsl(172, 67%, 45%)';
         button.style.color = 'hsl(183, 100%, 15%)';
         button.classList.add('selected');
         isClicked = true;
         buttonArray.forEach((button => {
            button.disabled = true;
            tipCustom.disabled = true;
         }));
       if(billTotal.value && numberOfPeople.value){
        calculator();
       };
});
});

tipCustom.addEventListener('input', () => {
    buttonArray.forEach((button => {
        button.disabled = true;
     }));
     isClicked = true;
     tipCustom.classList.add('selected');

     if(billTotal.value && numberOfPeople.value){
        calculator();
       };    
})

billTotal.addEventListener('input', () => {
    if(numberOfPeople.value && isClicked === true){
        calculator();
}});  

numberOfPeople.addEventListener('input', () => {
    if(billTotal.value && isClicked === true){
        fieldValidation();
      
}});

const calculator = () => {
        alert.style.visibility = 'hidden';
        numberOfPeople.classList.remove('error-style');

        let percentage = document.querySelector('.selected').value;
        let myBill = billTotal.value;
        let myPeople = numberOfPeople.value;
        let tipPerPerson = (((myBill/100)* percentage)/myPeople).toFixed(2);
        let totalPerPerson = (parseFloat(myBill/myPeople) + parseFloat(tipPerPerson)).toFixed(2);

        tipAmountFinal.innerText = `$${tipPerPerson}`;
        totalAmountFinal.innerText = `$${totalPerPerson}`;
    };

const reset = () => {
    billTotal.value = '';
    numberOfPeople.value = '';
    tipCustom.classList.remove('selected');
    tipCustom.disabled = false;
    isClicked = false;
    alert.style.visibility = 'hidden';
    numberOfPeople.classList.remove('error-style');
    buttonArray.forEach((button => {
        button.disabled = false;
     }));
     
};

const fieldValidation = () => {
    if(numberOfPeople.value ==='0' || numberOfPeople.value ===''){
        alert.style.visibility = 'visible';
        numberOfPeople.classList.add('error-style');
        tipAmountFinal.innerText = '$0.00';
        totalAmountFinal.innerText = '$0.00';
        return;
    } else{ 
        calculator();
    };
}

resetButton.addEventListener('click', reset());