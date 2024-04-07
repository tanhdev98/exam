const fraction = document.querySelectorAll('.fraction');
const answers = document.querySelectorAll('.answer');

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