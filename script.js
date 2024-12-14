let starAll = document.querySelectorAll('.star');
let count = document.querySelector('#count');
starAll.forEach((star) => {
    star.addEventListener("click", (e) => {
        let starNum = e.target.dataset.index;
        for (let i = 0; i < 5; i++) {
            starAll[i].classList.remove('star-filled');
        }
        for (let i = 0; i < starNum; i++) {
            starAll[i].classList.add('star-filled');
        }
        count.textContent = starNum;
    })
})
starAll.forEach((star) => {
    star.addEventListener("mouseover", (e) => {
        let starNum = e.target.dataset.index;
        for (let i = 0; i < 5; i++) {
            starAll[i].classList.remove('star-filled');
        }
        for (let i = 0; i < starNum; i++) {
            starAll[i].classList.add('star-filled');
        }
    })
})
