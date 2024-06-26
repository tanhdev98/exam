const fraction = document.querySelectorAll('.fraction');
const answers = document.querySelectorAll('.answer');
const btnCheck = document.querySelector('#btnCheck');
const btnReset = document.querySelector('#btnReset');
const answerGroups = document.querySelectorAll('.answerGroup');
const tipBtn = document.querySelectorAll('.tip');
const popupCloseBtn = document.querySelectorAll('.popup-close-btn');
const popupGroup = document.querySelector('.popupGroup ');

fraction.forEach(function (e) {
    let split = e.innerHTML.split("/");
    if (split.length === 2) {
        e.innerHTML = `<span class="top">${split[0]}</span>
        <span class="bottom">${split[1]}</span>`
    }
});


function toggleSelectClass(ansNumElement) {
    if (ansNumElement.classList.contains('select')) {
        ansNumElement.classList.remove('select');
    } else {
        const answerGroupElement = ansNumElement.closest('.answerGroup');
        const ansNumElements = answerGroupElement.querySelectorAll('.num');

        ansNumElements.forEach(function (element) {
            element.classList.remove('select');
        });

        ansNumElement.classList.add('select');
    }
}

function handleAnswerClick() {
    const ansNumElement = this.querySelector('.num');
    if (ansNumElement) {
        toggleSelectClass(ansNumElement);
    }
}

answers.forEach(function (answer) {
    answer.addEventListener('click', handleAnswerClick);
});

btnCheck.addEventListener('click', handleSubmit);

function handleSubmit() {
    tipBtn.forEach(tipBtn => {
        tipBtn.classList.add('active');
    });
    answerGroups.forEach((answerGroup, groupIndex) => {
        const answers = answerGroup.querySelectorAll('.answer');

        let isSelectChildOfAns = false;

        answers.forEach((answer, index) => {
            const isSelectChild = answer.querySelector('.select') !== null;

            const hasAnsClass = answer.classList.contains('ans');

            if (hasAnsClass && isSelectChild) {
                isSelectChildOfAns = true;
                answer.classList.add('true');
            } else {
                answer.classList.add('false');
            }
        });
    });
}

btnReset.addEventListener('click', handleReset);

function handleReset() {
    tipBtn.forEach(tipBtn => {
        tipBtn.classList.remove('active');
    });
    answerGroups.forEach((answerGroup, index) => {
        const answers = answerGroup.querySelectorAll('.answer');

        answers.forEach((answer) => {
            answer.classList.remove('false');
            answer.classList.remove('true');
            if (answer.querySelector('.select') !== null) {
                answer.querySelector('.select').classList.remove('select')
            }
        })
    })
}

popupCloseBtn.forEach(btn => {
    btn.addEventListener('click', handlePopupClose);
});

function handlePopupClose() {
    this.parentNode.style.display = 'none';
    popupGroup.classList.remove('active');
}

tipBtn.forEach((e) => {
    e.addEventListener('click', handlePopup);
});

function handlePopup() {
    const tipValue = this.getAttribute('data-tip');
    const popup = document.querySelector(`.popup[data-pop="${tipValue}"]`);

    popupGroup.classList.add('active');
    popup.style.display = 'block';
}