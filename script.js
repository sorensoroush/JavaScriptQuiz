answers = document.querySelectorAll('.answer')
answersButton = document.getElementById('see-answers')

const colorAnswers = () => {
    for ([index, answer] of answers.entries()) {
        switch (index) {
            case 1:
            case 6:
            case 10:
                answer.classList.add('correct')
                break
            default:
                answer.classList.add('incorrect')
                break
        }
    }
}

answersButton.addEventListener('click', colorAnswers)