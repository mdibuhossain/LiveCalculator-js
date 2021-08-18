const numberE = document.querySelectorAll('.numBtn');
const optE = document.querySelectorAll('.opt');
const dispOne = document.querySelector('#display-1');
const dispTwo = document.querySelector('#display-2');
const dispThree = document.querySelector('#display-3');
const equalBtn = document.querySelector('.equal');
const clearBtn = document.querySelector('.clrBtn');
const clearLastBtn = document.querySelector('.lastClr');

let dotBtn = false;
let dispOneTmp = '';
let dispTwoTmp = '';
let dispThreeTmp = '';
let result = null;
let lastOperation = '';


for (const num of numberE) {
    num.addEventListener('click', function (e) {
        if (e.target.innerText == '.' && !dotBtn) {
            dotBtn = true;
        }
        else if (e.target.innerText == '.' && dotBtn) {
            return;
        }
        dispTwoTmp += e.target.innerText;
        dispTwo.innerText = dispTwoTmp;
    })
}

for (const opera of optE) {
    opera.addEventListener('click', function (e) {
        if (!dispTwoTmp)
            return;
        const operatoinName = e.target.innerText;
        dotBtn = false;
        if (dispOneTmp && dispTwoTmp && lastOperation)
            mathOperation();
        else
            result = parseFloat(dispTwoTmp);
        clearVar(operatoinName);
        lastOperation = operatoinName;
    })
}

function clearVar(name = '') {
    dispOneTmp += dispTwoTmp + ' ' + name + ' ';
    dispOne.innerText = dispOneTmp;
    dispTwoTmp = '';
    dispTwo.innerText = '';
    dispThree.innerText = result;
}

function mathOperation() {
    if (lastOperation == 'X') {
        result = parseFloat(result) * parseFloat(dispTwoTmp);
    }
    else if (lastOperation == '+') {
        result = parseFloat(result) + parseFloat(dispTwoTmp);
    }
    else if (lastOperation == '-') {
        result = parseFloat(result) - parseFloat(dispTwoTmp);
    }
    else if (lastOperation == '/') {
        result = parseFloat(result) / parseFloat(dispTwoTmp);
    }
}

equalBtn.addEventListener('click', function () {
    if (!dispOneTmp || !dispTwoTmp) return;
    dotBtn = false;
    mathOperation();
    clearVar();
    dispTwo.innerText = result;
    dispThree.innerText = '';
    dispTwoTmp = result;
    dispOneTmp = '';
})

clearBtn.addEventListener('click', function () {
    dispOneTmp = '';
    dispOne.innerText = '0';
    dispTwoTmp = '';
    dispTwo.innerText = '0';
    dispThreeTmp = '';
    dispThree.innerText = '';
})

clearLastBtn.addEventListener('click', function () {
    dispTwoTmp = '';
    dispTwo.innerText = '';
})