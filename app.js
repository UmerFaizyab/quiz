var questionShow = document.getElementById('questionShow')
var optShow = document.getElementById('optShow')
var qnow = document.getElementById('qnow')
var totalShow = document.getElementById('totalShow')
var mainhead = document.getElementById('mainhead')
var buton = document.getElementById('buton')
var questions = [
    {
        question: "RAM stands for",
        options: ["ROM", "two", "three", "four"],
        correct: "ROM",
    },
    {
        question: "ROM  for",
        options: ["RAM", "two", "three", "four"],
        correct: "RAM",
    },
    {
        question: "ROM  for",
        options: ["RAM", "two", "three", "four"],
        correct: "RAM",
    },
    {
        question: "ROM  for",
        options: ["RAM", "two", "three", "four"],
        correct: "RAM",
    },
    {
        question: "ROM  for",
        options: ["RAM", "two", "three", "four"],
        correct: "RAM",
    },
    {
        question: "ROM  for",
        options: ["RAM", "two", "three", "four"],
        correct: "RAM",
    },
    {
        question: "ROM  for",
        options: ["RAM", "two", "three", "four"],
        correct: "RAM",
    },
    {
        question: "cpu stands for",
        options: ["CPU", "three", "three", "four"],
        correct: "CPU",
    }
]
var correctAns = 0 
var qNumber = 0
var totalq = questions.length
function displayQu() {
    questionShow.innerHTML = questions[qNumber].question
    for (var i = 0; i < questions[qNumber].options.length; i++) {

        optShow.innerHTML += `<div class="col-md-6 text-center my-1" onclick=next("${questions[qNumber].options[i]}","${questions[qNumber].correct}") >
        <p class=" rounded-pill fs-3 pt-2 pb-2 shadow hov" style="background-color: #a8dadc;">
        ${questions[qNumber].options[i]}</p>
        </div>`
    }
    qnow.innerHTML = qNumber + 1;
    totalShow.innerHTML = "/" + totalq
}

displayQu();
function next(first,second) {
    console.log(first)
    console.log(second)
    if(first==second){
        correctAns = correctAns + 1;
    }
    console.log(correctAns)
    if((qNumber+1) == totalq){
        var per = ((correctAns/totalq)*100).toFixed(2)+"%";
        questionShow.innerHTML = per;
        optShow.innerHTML = "";   
        mainhead.innerHTML = `<div class="fs-2 ms-3 mt-1 fw-bold text-white text-center" >RESULT</div>`; 
        buton.innerHTML = ""
        // alert(correctAns)
    }
    else{
        questionShow.innerHTML = "";
        optShow.innerHTML = "";
        qNumber++;
        displayQu()    
    }

}
function next12(){
    questionShow.innerHTML = "";
    optShow.innerHTML = "";
    qNumber++;
    displayQu()

}






// function check(opt){
//     console.log(opt)
//     if(opt == "RAM"){
//         correctAns++;
//     }
//     next()
//     console.log(correctAns)
// }

var arr = ['umer faizya']
console.log(arr[0])