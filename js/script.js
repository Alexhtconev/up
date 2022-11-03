const clientValue = document.querySelector('.buy__input-ammount'),
      buttonDeposit = document.querySelector('.depositBtn');

let val = '';
buttonDeposit.disabled = true;

buttonDeposit.innerHTML = 'DEPOSIT';
function inputValue() {
    clientValue.addEventListener('click', () => {
        clientValue.value = '';
    });
    clientValue.addEventListener('input', () => {
        val = clientValue.value;
        buttonDeposit.dataset.amount = `${val}.00`;
        buttonDeposit.innerHTML = `DEPOSIT $${val}`;
        if(buttonDeposit.dataset.amount !== '00.00') {
            buttonDeposit.disabled = false;
            changeColor();
        }
    });
}
inputValue();

function changeColor() {
    if(val > 0) {
        buttonDeposit.style.cssText = `
        background-color: #F23D91;
        color: black;
        `;

    } else {
        buttonDeposit.style.cssText = `
        color: white;
        background-color: #09D1AB;
        `;
    }
}


