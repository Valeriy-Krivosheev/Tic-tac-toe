const area = document.querySelector('.area');
let move = 0;
const contentWrap = document.getElementById('content');
const modalResult = document.getElementById('modal-result')
const overlay = document.getElementById('overlay')
const btnClose = document.getElementById('close-modal')

area.addEventListener('click', e => {
    if (e.target.className = 'area__box') {
        if (move % 2 === 0) {
            e.target.innerHTML = 'X';
            e.target.disabled = true;

        } else {
            e.target.innerHTML = '0';
            e.target.disabled = true;
        }
        move++
        check()
    }
});

function check() {
    const boxes = document.querySelectorAll('.area__box');
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < arr.length; i++) {
        if (
            boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X'
        ) {
           
            prepareResult('Крестики')
        } else if (
            boxes[arr[i][0]].innerHTML == '0' && boxes[arr[i][1]].innerHTML == '0' && boxes[arr[i][2]].innerHTML == '0'
        ) {
            prepareResult('Нолики')
        } else if (move == 9) { 
            noWinner('Ничья')
        }
    }
}
const prepareResult = winner => {
    contentWrap.innerHTML = `Победили ${winner}!`;
    modalResult.style.display = 'block'
}
const noWinner = winner => {
    contentWrap.innerHTML = `Это ${winner}!`;
    modalResult.style.display = 'block'
}


const clodeModal = () => {
    modalResult.style.display = 'none';
    location.reload();
}
overlay.addEventListener('click', clodeModal)
btnClose.addEventListener('click', clodeModal)