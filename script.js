const quizData = [
    {
        question: 'how old is chuks?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct:'c'
    }, {
        question : 'what is the most used programming language in 2019?',
        a: 'java',
        b: 'c#',
        c: 'python',
        d: 'javaScript',
        correct: 'd'
    }, {
        question: 'who is the president of NIGERIA?',
        a: 'flourin pop',
        b: 'donald trump',
        c: 'Bros Chuks',
        d: 'mihak dadjf',
        coreect: 'c'
    }, {
        question: 'what year was JavaSript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'd'
    }, {
        question: 'what does HTML stand for?',
        a: 'hypertext markup language',
        b: 'cascading style sheet',
        c: 'jason object Notation',
        d: 'none of the above',
        correct: 'd'
    }
];

const answerE1 = document.querySelectorAll('.answer');

const questionE1 = document.getElementById('question');
const a_textE1 = document.getElementById('a_text');
const b_textE1 = document.getElementById('b_text');
const c_textE1 = document.getElementById('c_text');
const d_textE1 = document.getElementById('d_text');
const submitE1 = document.getElementById('submit');

const contain = document.getElementById('container');
let currentQuiz = 0;
let score = 0;


function loadQuiz () {
    deSelect();
    const currentQuizData = quizData[currentQuiz];

    questionE1.innerHTML = currentQuizData.question;
    a_textE1.innerHTML = currentQuizData.a;
    b_textE1.innerHTML = currentQuizData.b;
    c_textE1.innerHTML = currentQuizData.c;
    d_textE1.innerHTML = currentQuizData.d;
}


function selectAns() {
    let answer = undefined;
    answerE1.forEach((answer1) => {
        if(answer1.checked){
            answer = answer1.id;

        }
    })
        return answer;
        

}

function deSelect () {
    answerE1.forEach((answer1) => {
        answer1.checked = false;
    });

}


submitE1.addEventListener('click', () => {
    const ans = selectAns();

    if (ans) {

        if(ans === quizData[currentQuiz].correct){
            score++;

        }
        currentQuiz++;

        if(currentQuiz < quizData.length){
            currentQuiz++;
            loadQuiz()
        }else {
            contain.innerHTML = `
            <h2> Weldone smart kid your scores ${score}/${quizData.length}</h2>
            <button onClick="location.reload()"> reload </button>
            `
        }
    }

})

loadQuiz();