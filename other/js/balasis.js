(function() {

 document.addEventListener("DOMContentLoaded",function(){

//Declaring variables for the intervalObj and for the moving bar itself
let jjCountDownInterval;
let jjQuizLoadingBorderBarMoving=document.getElementById("jjQuizLoadingBorderBarMoving");

//current Variables that we need in order to compare the given answer with the correct one.
let jjquestionPickedd;
let jjCorrectAnswer;
let jjQuiztimer;
//here it will be given a +1 each time player answers wrong. If 3 answers quiz gets aborted.
let jjHelperSolverCounter=1;
let jjHelperHideOneCounter=1;
//bind event Listeners to start the quiz, reset the quiz , and confirm the choice.
document.getElementById('jjStartCountDown').addEventListener('click',function(){
    jjStartTimer(60);
})
document.getElementById('jjResetCountDown').addEventListener('click',function(){
    jjResetTimer();
})
document.getElementById('jjConfirmChoice').addEventListener('click',function(){
    jjConfirmChoice();
})
document.getElementById('jjMiniQuizContentMiddleHelper1').addEventListener('click',function(){
    jjHelperSolver();
})
document.getElementById('jjMiniQuizContentMiddleHelper2').addEventListener('click',function(){
    jjHelperHideOne();
})


let jjquizDataCopy;
//This function starts the timer and loads for the first time the content(options,questions e.t.c). The rest of the times
//content is given from the jjConfirmChoice function 
//(I make a copy of the content in order to manage it better...the copy gets destroyed in the end of each quiz)
function jjStartTimer(timer){
    
    jjQuiztimer=timer;
    jjquizDataCopy=jjquizData;
    jjquestionPickedd=jjgiveMeRandom(0,jjquizDataCopy.length-1);
    
    
    
    document.getElementById("jjQuizQuestionPlaceholder").textContent=jjquizDataCopy[jjquestionPickedd].question;


    document.getElementById("jjOption1").value=jjquizDataCopy[jjquestionPickedd].options[0];
    document.getElementById("jjOption1Label").textContent=jjquizDataCopy[jjquestionPickedd].options[0];


    document.getElementById("jjOption2").value=jjquizDataCopy[jjquestionPickedd].options[1];
    document.getElementById("jjOption2Label").textContent=jjquizDataCopy[jjquestionPickedd].options[1];


    document.getElementById("jjOption3").value=jjquizDataCopy[jjquestionPickedd].options[2];
    document.getElementById("jjOption3Label").textContent=jjquizDataCopy[jjquestionPickedd].options[2];


    document.getElementById("jjQuizImgPlaceHolder").setAttribute("src",jjquizDataCopy[jjquestionPickedd].imageUrl);

    jjCorrectAnswer=jjquizDataCopy[jjquestionPickedd].correctAnswer;




    jjCountDownInterval=setInterval(function(){
    jjQuiztimer=jjQuiztimer-1;
    document.getElementById("jjQuizLoadingBorderBarMovingTimer").textContent=jjQuiztimer;
    jjQuizLoadingBorderBarMoving.classList.add("jjAddAnimationForBar");

        if (jjQuiztimer==0 || jjQuiztimer==NaN){      
            clearInterval(jjCountDownInterval);
            jjQuizLoadingBorderBarMoving.classList.remove("jjAddAnimationForBar");
        }
    }   ,1000)
}


//this function resets just the timer...its being called by the else 
//cases that quiz fail
function jjResetTimer(){
    clearInterval(jjCountDownInterval);
    jjQuizLoadingBorderBarMoving.classList.remove("jjAddAnimationForBar");
};


//this function gives instant answer to one of the questions..can be used only once
function jjHelperSolver(){
    if (jjHelperSolverCounter==1){
    let jjTakejjOptionsInputs=document.querySelectorAll('input[name="jjOptions"]');
    jjTakejjOptionsInputs.forEach(function(radioButton) {
       
        if (radioButton.value === jjCorrectAnswer) {
            radioButton.checked=true;
            jjConfirmChoice();
            jjHelperSolverCounter=jjHelperSolverCounter-1;
            document.getElementById("jjMiniQuizContentMiddleHelper1").style.transform='scale(0.80)';        
        }
    });
    }

}

//this function removes an wrong option..can be used only once
let jjHiddenToBeSeen;
let jjflagToSeeIfOn;
function jjHelperHideOne(){
    if (jjHelperHideOneCounter==1){
        let jjTakejjOptionsInputs=document.querySelectorAll('input[name="jjOptions"]');


        let shuffledInputs = Array.from(jjTakejjOptionsInputs);
        shuffledInputs.sort(() => Math.random() - 0.5);



        shuffledInputs.forEach(function(radioButton) {
           if(jjflagToSeeIfOn!==true){
            if (radioButton.value !== jjCorrectAnswer) {

                let jjFindTheLabel=radioButton.id+"Label";
                
               document.getElementById(jjFindTheLabel).style.display="none";

                jjHelperHideOneCounter=jjHelperHideOneCounter-1;
                document.getElementById("jjMiniQuizContentMiddleHelper2").style.transform='scale(0.80)';
                    jjflagToSeeIfOn=true;
                    jjHiddenToBeSeen=jjFindTheLabel;
                   
            }
        }
    });

        
 }
}


function jjConfirmChoice(){
   if (jjflagToSeeIfOn){
    document.getElementById(jjHiddenToBeSeen).style.display="flex"
}


   if(document.querySelector('input[name="jjOptions"]:checked').value==jjCorrectAnswer){
        //we remove the question from the copy...
        jjquizDataCopy.splice(jjquestionPickedd,1);
        console.log(jjquizDataCopy)

        if (jjquizDataCopy.length!==0){
            
                                    jjquestionPickedd=jjgiveMeRandom(0,jjquizDataCopy.length-1);

                                    console.log(jjquestionPickedd +"so I choose:");

                                        //Loading the next question...
                                                jjCorrectAnswer=jjquizDataCopy[jjquestionPickedd].correctAnswer;
                                        document.getElementById("jjQuizQuestionPlaceholder").textContent=jjquizDataCopy[jjquestionPickedd].question;


                                        document.getElementById("jjOption1").value=jjquizDataCopy[jjquestionPickedd].options[0];
                                        document.getElementById("jjOption1Label").textContent=jjquizDataCopy[jjquestionPickedd].options[0];


                                        document.getElementById("jjOption2").value=jjquizDataCopy[jjquestionPickedd].options[1];
                                        document.getElementById("jjOption2Label").textContent=jjquizDataCopy[jjquestionPickedd].options[1];


                                        document.getElementById("jjOption3").value=jjquizDataCopy[jjquestionPickedd].options[2];
                                        document.getElementById("jjOption3Label").textContent=jjquizDataCopy[jjquestionPickedd].options[2];


                                        document.getElementById("jjQuizImgPlaceHolder").setAttribute("src",jjquizDataCopy[jjquestionPickedd].imageUrl);

                                        document.querySelectorAll('input[name="jjOptions"]').forEach(function(radioButton){
                                            radioButton.checked=false;
                                                                                                                            })


                            }else{
            
                                        console.log("We have a winner");
                                        jjResetTimer();
                                        
                                        let jjassisted;
                                                            if ((jjHelperSolverCounter == 0) || (jjHelperHideOneCounter == 0)){
                                                                jjassisted="Yes";
                                                            }else{
                                                                jjassisted="No";
                                                            }


                                                            if (localStorage.getItem("jjQuizScores") == null) {
                                                               
                                                            
                                                                let now = new Date();
                                                                let jjFormattedDateTime = now.toLocaleString('en-GB', {
                                                                    day: '2-digit',
                                                                    month: '2-digit',
                                                                    year: '2-digit',
                                                                    hour: '2-digit',
                                                                    minute: '2-digit'
                                                                });
                                                            
                                                                let jjQuizScores = [
                                                                    {
                                                                        time: jjQuiztimer,
                                                                        assisted: jjassisted,
                                                                        datetime: jjFormattedDateTime
                                                                    }
                                                                ];
                                                            
                                                                let jjQuizScoresStringified = JSON.stringify(jjQuizScores);
                                                                localStorage.setItem('jjQuizScores', jjQuizScoresStringified);
                                                                jjResetTheWholeQuiz();
                                                            } else {
                                                                let jjGetTheScoreTable = JSON.parse(localStorage.getItem("jjQuizScores"));
                                                            
                                                                let now = new Date();
                                                                let jjFormattedDateTime = now.toLocaleString('en-GB', {
                                                                    day: '2-digit',
                                                                    month: '2-digit',
                                                                    year: '2-digit',
                                                                    hour: '2-digit',
                                                                    minute: '2-digit'
                                                                });
                                                            
                                                                jjGetTheScoreTable.push({
                                                                    time: jjQuiztimer,
                                                                    assisted: jjassisted,
                                                                    datetime: jjFormattedDateTime
                                                                });
                                                            
                                                                // Sorting the array based on the "time"
                                                                jjGetTheScoreTable.sort((a, b) => b.time - a.time);
                                                            
                                                                // Keeping only the first 10 elements
                                                                jjGetTheScoreTable = jjGetTheScoreTable.slice(0, 10);
                                                            
                                                                // Update the localStorage
                                                                localStorage.setItem('jjQuizScores', JSON.stringify(jjGetTheScoreTable));
                                                                jjResetTheWholeQuiz();
                                                            }
                                                            
                                                            
            

            
                                }


    }else{
        jjResetTheWholeQuiz();
    }


}


function jjResetTheWholeQuiz(){
    document.querySelectorAll('input[name="jjOptions"]').forEach(function(radioButton){
        radioButton.checked=false; })
        jjHelperSolverCounter=1;
        jjHelperHideOneCounter=1;
        document.getElementById("jjMiniQuizContentMiddleHelper1").style.transform='scale(1)'; 
        document.getElementById("jjMiniQuizContentMiddleHelper2").style.transform='scale(1)';



    console.log('Game Over');       //Reset
            
     jjquestionPickedd=undefined;
     jjCorrectAnswer=undefined;
     jjResetTimer();
     jjQuiztimer=undefined;
     document.getElementById("jjQuizLoadingBorderBarMovingTimer").textContent=jjQuiztimer;
     document.getElementById("jjQuizQuestionPlaceholder").textContent=undefined;
     document.getElementById("jjOption1").value=undefined;
     document.getElementById("jjOption1Label").textContent=undefined;     
     document.getElementById("jjOption2").value=undefined;
     document.getElementById("jjOption2Label").textContent=undefined;   
     document.getElementById("jjOption3").value=undefined;
     document.getElementById("jjOption3Label").textContent=undefined;
     document.getElementById("jjQuizImgPlaceHolder").setAttribute("src",undefined);

     setTimeout(function(){ 
        document.getElementById("jjQuizImgPlaceHolder").setAttribute("src",undefined);
           },3000);
}





function jjgiveMeRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//we create a copy so we can remove one by one and recheck during the exam
//so we avoid dublicate questions and make them appear in a random manner


const jjquizData = [
    {
        question: "What is the scientific name for mantises?",
        options: ["Mantodea", "Orthoptera", "Arachnida"],
        correctAnswer: "Mantodea",
        imageUrl: "url_for_question_1_image"
    },
    {
        question: "How many mantis species are there?",
        options: ["Approximately 2,000", "Approximately 3,500", "Approximately 5,000"],
        correctAnswer: "Approximately 2,000",
        imageUrl: "url_for_question_2_image"
    },
    {
        question: "What is the primary diet of mantises?",
        options: ["Plants", "Other Insects", "Nectar"],
        correctAnswer: "Other Insects",
        imageUrl: "url_for_question_3_image"
    },
    {
        question: "Which continent has the greatest diversity of mantis species?",
        options: ["Africa", "Asia", "North America"],
        correctAnswer: "Africa",
        imageUrl: "url_for_question_4_image"
    },
    {
        question: "How do mantises primarily catch their prey?",
        options: ["Ambush", "Chasing", "Stinging"],
        correctAnswer: "Ambush",
        imageUrl: "url_for_question_5_image"
    },
    {
        question: "What is the lifespan of an average mantis?",
        options: ["Few Weeks", "Few Months", "Few Years"],
        correctAnswer: "Few Months",
        imageUrl: "url_for_question_6_image"
    },
    {
        question: "What is the purpose of a mantis's distinctive posture with raised forelegs?",
        options: ["Attracting Mates", "Camouflage", "Capturing Prey"],
        correctAnswer: "Capturing Prey",
        imageUrl: "url_for_question_7_image"
    },
    {
        question: "Do mantises undergo metamorphosis?",
        options: ["Yes", "No", "Sometimes"],
        correctAnswer: "Yes",
        imageUrl: "url_for_question_8_image"
    },
    {
        question: "Which sense is particularly well-developed in mantises?",
        options: ["Hearing", "Sight", "Taste"],
        correctAnswer: "Sight",
        imageUrl: "url_for_question_9_image"
    },
    {
        question: "What is the purpose of the mantis's unique head movement?",
        options: ["Balance", "Communication", "Hunting Strategy"],
        correctAnswer: "Hunting Strategy",
        imageUrl: "url_for_question_10_image"
    }
];



})














})();