const quiz = [
    {
        question: "What is the most used programming language in 2021?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        question: "Who is the President of US?",
        ans1text: "Joe Biden",
        ans2text: "Donald Trump",
        ans3text: "Barack Obama",
        ans4text: "George Bush",
        answer: "Joe Biden",
    },{
        question: "What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",

    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        ans1text: "<script>",
        ans2text: "<scripting>",
        ans3text: "<JavaScript>",
        ans4text: "none of the above",
        answer: "<script>",

    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        ans1text: "msg('Hello world')",
        ans2text: "alert('Hello world')",
        ans3text: "msgBox('Hello world')",
        ans4text: "alertBox('Hello world')",
        answer: "alert('Hello world')",

    }   ,
    {
        question: "How do you create a function in JavaScript?",
        ans1text: "function myfunction()",
        ans2text: "function:myfunction()",
        ans3text: "function=myfunction()",
        ans4text: "function.myfunction()",
        answer: "function myfunction()",

    },
    {
        question: "How do you call a function named 'myFunction'?",
        ans1text: "myfunction()",
        ans2text: "call function myfunction()",
        ans3text: "call myfunction()",
        ans4text: "function.myfunction()",
        answer: "myfunction()",

    },
    {
        question: "How to write an IF statement in JavaScript?",
        ans1text: "if i=5 then",
        ans2text: "if i==5 then",
        ans3text: "if (i==5)",
        ans4text: "if i=5",
        answer: "if (i==5)",

    },{
        question: "Which event occurs when the user clicks on an HTML element?",
        ans1text: "onchange",
        ans2text: "onmouseclick",
        ans3text: "onmouseover",
        ans4text: "onclick",
        answer: "onclick",

    }

]
const ques=document.getElementById('Questiontag');
// console.log(ques);
// console.log(ques.textContent);
const opt1=document.getElementById('text_a');
const opt2=document.getElementById('text_b');
const opt3=document.getElementById('text_c');
const opt4=document.getElementById('text_d');
// console.log(opt1);
// console.log(opt1.textContent);

// console.log(opt2);
// console.log(opt2.textContent);

// console.log(opt3);
// console.log(opt3.textContent);

// console.log(opt4);
// console.log(opt4.textContent);




let currentQuestion=0;
let score=0;
// console.log(quiz[currentQuestion].question);
// console.log(quiz[currentQuestion].ans1text);
// console.log(quiz[currentQuestion].ans2text);
// console.log(quiz[currentQuestion].ans3text);
// console.log(quiz[currentQuestion].ans4text);

ques.textContent=quiz[currentQuestion].question;
opt1.textContent=quiz[currentQuestion].ans1text;
opt2.textContent=quiz[currentQuestion].ans2text;
opt3.textContent=quiz[currentQuestion].ans3text;
opt4.textContent=quiz[currentQuestion].ans4text;

const answerelement=document.querySelectorAll('.text');

// console.log("answerelement",answerelement);

const submit=document.getElementById('submit');

submit.addEventListener("click",()=>{
    const checkans=document.querySelector('input[type="radio"]:checked');
    // console.log(checkans);
    //console.log(checkans.nextElementSibling.textContent);
    if(checkans==null){
        alert("please enter option!!!");
    }
    else{
        if(checkans.nextElementSibling.textContent===quiz[currentQuestion].answer){
            score++;
        }

        currentQuestion++;
        }
        if(currentQuestion<quiz.length){
            ques.textContent=quiz[currentQuestion].question;
            opt1.textContent=quiz[currentQuestion].ans1text;
            opt2.textContent=quiz[currentQuestion].ans2text;
            opt3.textContent=quiz[currentQuestion].ans3text;
            opt4.textContent=quiz[currentQuestion].ans4text;
            checkans.checked=false;
        }
        else{
            alert('Your score is '+score+' out of '+quiz.length);
            location.reload();
        }
    
})