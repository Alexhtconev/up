const clientValue = document.querySelector('.buy__ammount'),
      serverValue = document.querySelector('.current__ammount'),
      buttonDeposit = document.querySelector('.depositBtn');

let serv = 0;
buttonDeposit.innerHTML = 'DEPOSIT';
function inputValue() {
    clientValue.value = '0 USD';
    serverValue.value = `${serv} USD`;
    clientValue.addEventListener('click', () => {
        clientValue.value = '';
    });
    clientValue.addEventListener('input', () => {
        cleanUSD();
        let clientInputNumber = clientValue.value.replace(/\D/igm, '');
        serverValue.value = clientInputNumber * 5;
        serv = serverValue.value;
        changeColor();
        buttonDeposit.innerHTML = `DEPOSIT $${serverValue.value}`;
        serverValue.value += ' USD';
    });
}
inputValue();

function cleanUSD() {
    let value = clientValue.value;
    console.log(value);
    value = value.replace(/\D/igm, '');
    clientValue.value =  `${value} USD`;
}

function changeColor() {
    if(serv > 0) {
        buttonDeposit.style.cssText = `background-color: rgba(89, 75, 75, 1);
        background-image: linear-gradient(90deg, rgba(89, 75, 75, 1) 0%, rgba(242, 61, 145, 1) 60%);
        transition: all 0,5s;
        color: black;
        `

    } else {
        buttonDeposit.style.cssText = `background-color: rgba(114, 114, 114, 1);
        background-image: linear-gradient(126deg, rgba(114, 114, 114, 1) 0%, rgba(41, 53, 86, 1) 68%);
        border-radius: 5px;`;
    }
}


