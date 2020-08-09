var questionsArray = [
    {
        question: "Which is the national bird of Pakistan ?",
        answer: "Chakor",
        options:[
            "Pigeon",
            "Chakor",
            "Markhor",
            "Parrot"
        ]
    },
    {
        question: "Which of the following is not Olympic Sport ?",
        answer: "Cricket",
        options: [
            "Swimming",
            "Badminton",
            "Fencing",
            "Cricket"
        ]
    },
    {
        question: "How many points are in badminton Game ?",
        answer: "21",
        options: [
            "21",
            "14",
            "25",
            "30",
        ]
    },
]

function showQuestion(e){

    //for showing the question
    var questionElement = document.getElementById("questionElement")
    questionElement.innerHTML = questionsArray[e].question;


    //for showing the options
    var optionElement = document.getElementsByClassName("optionElement")
    for ( i=0; i < optionElement.length; i++ ){
        optionElement[i].innerHTML = questionsArray[e].options[i];
    }
}



var questionCount = 0;
var score = 0;
function showNextQuestion(e){
    
    validate(questionCount)
    questionCount++;
    if(questionCount <= questionsArray.length-1){
        showQuestion(questionCount)
    }
    // showQuestion(questionCount)
    removeActiveClass()
    setResult()
    
}


function putActiveClass(e){
    removeActiveClass()
  e.classList.add("active")
}

function removeActiveClass(){
    var active = document.getElementsByClassName("active")
    for(i=0; i< active.length ; i++){
        active[i].classList.remove("active")
    }
}

function validate(e){
    var active = document.getElementsByClassName("active")
    if(active[0].innerHTML == questionsArray[e].answer){
        score +=10;
        console.log(score)
    }
}
function showResult(){
    document.getElementById("result") = sessionStorage.getItem("userscore");
}
function setResult(){
    if(questionCount == questionsArray.length){
        window.location.href = "result.html";
    }
    var result = document.getElementById("result");
    sessionStorage.setItem("userscore", score);
}

function renderResult(){
    var a = sessionStorage.getItem("userscore");
    result.innerHTML = "You scored "+ a +" out of 30";

}






