const quizData = [
    {
        question: "what does HTML stand fro?",
        options: [
            "Hypertext Markup Language",
            "Hyper Transfer Markup Language",
            "Hypertext Machine Language",
            "Hyperlink and Text Markup Language",
        ],
        correct: 0,
        selectedOption:null,

    },
    {
        question:
            "Which Css property is used to control the spacing between elements?",
            options: ["margin", "padding", "spacing", "boarder-spacing"],
        correct: 1,
        selectedOption:null,


    },
    {
        question:
            "what is the javascript function used to select an HTML element by its id?",
        options: [
            "document.query",
            "getElementById",
            "selectElement",
            "findElementById",
        ],
        correct: 1,
        selectedOption:null,

    },
    {
        question:
            "In React.js, which hook is used to perform side effects in a function component?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        correct: 0,
        selectedOption:null,

    },
    {
        question: "Which HTML tag is used to create an ordered list?",
        options: ["<ul>", "<li>", "<ol>", "<dl>"],
        correct: 2,
        selectedOption:null,

    },
];

//step 2: JavaScript Initialization & target the strode data

const answerElm = document.querySelectorAll(".answer");

const [questionElm, options_0, options_1, options_2, options_3] = document.querySelectorAll(" #question, #option_0 , #option_1 , #option_2, #option_3");

const submitBtn = document.querySelector("#submit");

var quizIndex = 0;

var quiz = 0;

// questions
document.querySelector("#question").innerText = quizData[quizIndex].question;
// options
options_0.innerText = quizData[quizIndex].options[0];
options_1.innerText = quizData[quizIndex].options[1];
options_2.innerText = quizData[quizIndex].options[2];
options_3.innerText = quizData[quizIndex].options[3];



// Currentquiz++ = Currentquiz + 1;

const handleSubmit = () => {
    quizIndex++;
    // question
    document.querySelector("#question").innerText = quizData[quizIndex].question;

    // answer
    options_0.innerText = quizData[quizIndex].options[0];
    options_1.innerText = quizData[quizIndex].options[1];
    options_2.innerText = quizData[quizIndex].options[2];
    options_3.innerText = quizData[quizIndex].options[3];


}

submitBtn.addEventListener("click", handleSubmit);

const optionclick = () => {
let answerElement = Array.from(answerElm);
return answerElement.findIndex((Elem) => Elem.checked);
};

submitBtn.addEventListener("click" , () => {
  quizData[quizIndex].selectedOption = optionclick();
    // console.log(quizData[quizIndex].selectedOption);
    console.log(quizData);
});





// console.log(quizData);