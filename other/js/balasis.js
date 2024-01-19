
/* 
















Dear examiner,

 I would like to notify you about the structure of this js in order to make it
it easier for you to examine it.This javascript file contains all the javascript needed for all the pages
that john balasis created . (Excluding any potential header and footer javascript which was iros ververakis job
and therefore  is in ververaki .js)


-Each pages' javascript start multiple identical comments that have the name of the page.

-Each page contains  immediately-invoked function expression (IIFE) 
 ->  (function(){ }) (); 
which is a measure in order to not let variables go global and affect other js scripts.

-The body of each page has an id. At the start of each page segement I check if the id
exists in order to execute the code for the according page. This way I manage to not let each
page javascript to interfere with anothers.
for example:
if (document.getElementById('jHomePageIdentifier') !== null){    }
which jHomePageIdentifier is the id of the body of the homepage.

-Also a listener to each one of these so the javascript runs after the elements are loaded
so theres no need to place the js file before the body tag. 
for example:
 document.addEventListener("DOMContentLoaded",function(){ }



*/








//=========================================Homepage==============================================//
//=========================================Homepage==============================================//
//=========================================Homepage==============================================//
//=========================================Homepage==============================================//
//=========================================Homepage==============================================//
//=========================================Homepage==============================================//
//=========================================Homepage==============================================//
(function() {



    document.addEventListener("DOMContentLoaded",function(){
 if (document.getElementById('jHomePageIdentifier') !== null){     
        
     

  

     
    const ReadMores=document.getElementsByClassName("jHomePageReadMore");
    const HomePageMiniHolder=document.getElementsByClassName("jHomePageMinimizerHolder");
    const HomePageMini=document.getElementsByClassName("jHomePageMinimizer");


    //the following is giving a listener to the "x" buttons that minimize the texts
    //in few words it does the followings:
    //1)removes jHomePageMenuItemAddHeight class which sets height to auto and therefore text gets hidden due to limited height that parent initially had.
    //2)displays to none so it hides the "x"
    //3)Scroll into view to the div that we have just click "x"
    //4)also removes another class jHomePageReadMoreWidthIt which was making the width of the header (h2) to be 100%..making the effect.
    //
    for(let e=0;e<HomePageMini.length;e++){
        HomePageMini[e].addEventListener("click",function(){            
            this.parentNode.parentNode.classList.remove("jHomePageMenuItemAddHeight");
            this.parentNode.parentNode.querySelector(".jHomePageMenuItemContent").classList.add("jHomePageMenuItemContentFog");
            this.parentNode.style.display="none"; 
            this.parentNode.parentNode.querySelector(".jHomePageReadMore").style.display="flex";
            this.parentNode.parentNode.scrollIntoView({ behavior: 'smooth' });
            this.parentNode.parentNode.querySelector("h2").parentNode.classList.remove("jHomePageReadMoreWidthIt");
        })
    }

    //The following is to expand the text view...include commands exactly the opposite from the "x" while first performs
    //the commands used for "x" in order to close any previous extended div text
    //In other words the ReadMore button has the same functionality as "x" and then it opens the next
    for(let k=0;k<ReadMores.length;k++){
        ReadMores[k].addEventListener("click",function(){
            for (let qq=0;qq<HomePageMini.length;qq++){
                
                HomePageMini[qq].parentNode.parentNode.classList.remove("jHomePageMenuItemAddHeight");
                HomePageMini[qq].parentNode.parentNode.querySelector(".jHomePageMenuItemContent").classList.add("jHomePageMenuItemContentFog");
                HomePageMini[qq].parentNode.style.display="none"; 
                HomePageMini[qq].parentNode.parentNode.querySelector(".jHomePageReadMore").style.display="flex";
                HomePageMini[qq].parentNode.parentNode.querySelector("h2").parentNode.classList.remove("jHomePageReadMoreWidthIt");
            }
            this.parentNode.parentNode.parentNode.classList.add("jHomePageMenuItemAddHeight");           
            this.parentNode.parentNode.parentNode.querySelector(".jHomePageMenuItemContent").classList.remove("jHomePageMenuItemContentFog");
            this.parentNode.parentNode.parentNode.querySelector(".jHomePageMinimizerHolder").style.display="flex";
            this.parentNode.parentNode.parentNode.scrollIntoView({ behavior: 'smooth' });
            this.style.display="none"; 
            this.parentNode.parentNode.parentNode.querySelector("h2").parentNode.classList.add("jHomePageReadMoreWidthIt");
        })
    }
      



            //IMG previewer
const jImg = document.getElementsByClassName('clickable-jImgBored');
const prev = document.getElementById('HomePageImgPreview');
const jImgIn = document.getElementById('HomePageImgPreviewIn');
// I add to each one of the images the listener
for (p=0;p<jImg.length;p++){
    jImg[p].addEventListener('click', handleImageClick);
}

//Here I get the src attribute of image and place it to my viewer
//in the same time I add also the event for it to close
//on the next click..that way you dont have to let it
//out leading to triggering with each click for no reason.
function handleImageClick(event) {
    event.stopPropagation();
    let getTheSrc=this.getAttribute('src');
    let getTheDescription=this.getAttribute('data-description');
    jImgIn.setAttribute("src",getTheSrc);

    document.getElementById("HomePageImgPreviewInDescription").innerHTML=getTheDescription;
    prev.style.display = 'block';
    document.addEventListener('click', handleOutsideClickOnce);

    function handleOutsideClickOnce() {
        jImgIn.setAttribute("src","#");
        document.getElementById("HomePageImgPreviewInDescription").innerHTML=" ";
        prev.style.display = 'none';
        document.removeEventListener('click', handleOutsideClickOnce);
    }
}



//Fun facts text triggering...
//Since we dont have a back end available and we only have
//few I am intending to use javascript variables for it..
//(Yea I know we could pull from text files using javascript but why
//bother only for a few lines...)
//We also haven't created a folder for txt's in our
//github repo structure.. ^^ so yea another excuse..
const JfunFactsArray=[
    "Fashion-forward Insects: Praying mantises are the undercover agents of the insect world, rocking incredible camouflage outfits to blend in with their surroundings. Talk about the ultimate fashionistas!",
    "Mantis Munchies: These nimble ninjas have mastered the art of surprise attacks, snatching their insect snacks with moves that would make a ninja jealous. Watch out, bugs – the mantis is coming for dinner!",
    "Mantis Matchmakers: When it comes to love, praying mantises have a quirky dating scene. Sometimes, the female gets a bit peckish after a romantic rendezvous. It's like a bizarre dinner date where dessert might be the date itself!",
    "Eye on the Prize: With eyes that can do a full 360-degree spin, mantises have eyes everywhere! They're like the insect version of your mom making sure you don't sneak cookies before dinner.",
    "Eggcellent Parenting: Moms-to-be in the mantis world create tiny egg cases called oothecas. It's like a mantis maternity ward, with each case holding the promise of future little bug-hunters.",
    "Mantis Makeovers: Praying mantises know how to shed their skin like pros. It's like their version of a spa day – molting to reveal a brand-new look. Move over, runway models; mantises are the true fashion chameleons!",
    "Ambidextrous Avengers: Mantises are the true multitaskers of the insect realm. They can catch prey with either hand – or, uh, foreleg. It's like having dual-wielding superheroes in the garden!",
    "Twist and Shout: Forget the exorcist  mantises are the head-spinning champs of the bug world. They can rotate their heads almost 180 degrees. It's like they're saying, 'What's up, bugs? I'm watching you!'",
    "Garden Guardians: If your garden had a superhero squad, mantises would be the first pick. They're like tiny green guardians, patrolling the plants and keeping pesky bugs in check. Gardeners, rejoice!"
      ];
     


document.getElementById("jChatMantisImg").addEventListener("click",jSendText);

let jRouletaExclude=[];
let jShowingTheEnd=false;
function jSendText(){
        //My first job is to generate a random number so I will use it to pick
        //one fun fact from the array....
        //A combination of math floor  to round the number and math random to pick a number between 0 and 1
        //and min max values form a random number....this way user won't see the same messages each time.
        //I use this random number to pick a random index from the JfunFactsArray array list 
        function Jjrandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
          }        

//I create an array and start fullfling and comparing each time...
    let jRouletaBegin=Jjrandom(0,8);
   
//This checks if the jRouletaExclude array is 8 or smaller. Each time I pick one from JfunFactsArray and add it to this
//array to use it..if it hits 8 it means we are done and the "else" is beiing triggered.
if (jRouletaExclude.length<=8){
// This while has as purpose to pick a random number that its not yet used...so it tells in a word:while the number  is already used go pick another random
    while(jRouletaExclude.includes(jRouletaBegin)){
        jRouletaBegin=Jjrandom(0,8);
    }
    jRouletaExclude.push(jRouletaBegin);    
    jNoSameGeneratorTwice=jRouletaBegin;    
    
    let jTimeNow=new Date();
    let jjjFixedday = jTimeNow.getDate().toString().padStart(2, '0');
    let jjjFixedmonth = (jTimeNow.getMonth() + 1).toString().padStart(2, '0');
    let jjjFixedyear = jTimeNow.getFullYear();
    
    let jDateNoww = jjjFixedday + "/" + jjjFixedmonth + "/" + jjjFixedyear;



    //get Date seems to have an issue of addings zeros when months or days are smaller than <10 so I add it manually
    //essentially this says that if hours are less than 10 then jAddThe zero (Which is the var for hours) is equal to 0 + hours..otherwise is just getHours();
    //to not get you tired I wont add more comments to similar getDate lines.
    let jAddTheZero=jTimeNow.getHours()<10?'0'+jTimeNow.getHours():jTimeNow.getHours();  

    let jAddTheZeroMinutes=jTimeNow.getMinutes()<10?'0'+jTimeNow.getMinutes():jTimeNow.getMinutes();   

    let jClockNow=jAddTheZero+":"+jAddTheZeroMinutes;  

    let jAmOrPmSign=jTimeNow.getHours()>=12?' PM' :' AM';    
    
    //Here I create some html by adding them into variables..later on I form a div out of them.
    //its the info that appears along with the text when you click on mantis ..
   let jFullTime="<p>"+jDateNoww +" at " +jClockNow +" "+ jAmOrPmSign+"</p>" ; 
   let jMantiseName="<p><b>Wordy Mantis</b></p>";
   let jNameAndDate=jMantiseName+" "+jFullTime;

   
   //Top div is ready...lets make the bottom now that holds the text
   let jTopDiv=document.createElement("div");
   jTopDiv.innerHTML=jNameAndDate;
   jTopDiv.setAttribute("class","jTopDiv");

   //Here it is...
   let jnewFunFact=document.createElement("p");
   jnewFunFact.setAttribute("class","jGeneratedChatMessage");
   jnewFunFact.textContent=JfunFactsArray[jNoSameGeneratorTwice];

   //Lets combine them since it will be on a div with column flex...
   let jProfileAndFunFactDiv=document.createElement("div");
   jProfileAndFunFactDiv.appendChild(jTopDiv);
   jProfileAndFunFactDiv.appendChild(jnewFunFact);
   jProfileAndFunFactDiv.setAttribute("class","jProfileAndFunFactDiv");

//Now lets create the last div that it will hold the profile Image(it will be
//on the background url in the css..we will just give it a class)
    let jProfileImageDiv=document.createElement("div");
    jProfileImageDiv.setAttribute("class","jGeneratedChatDivPic");

  //The Final that holds everything...
  let jnewFunFactDiv=document.createElement("div");
  jnewFunFactDiv.setAttribute("class","jGeneratedChatDiv");
  jnewFunFactDiv.appendChild(jProfileImageDiv);
  jnewFunFactDiv.appendChild(jProfileAndFunFactDiv);
   




    document.getElementById('jhomePageFunFactsText').appendChild(jnewFunFactDiv);

    
   document.getElementById("jhomePageFunFactsText").scrollTop=document.getElementById("jhomePageFunFactsText").scrollHeight;
    
}else{

            //after we have used all 8 sentences this else gets triggered which holds few commands similar to the previous with
            //the only difference that the text content will be a thanks for your time comment.

            //the jShowingTheEnd is a safety variable.I use to have a variable set into false
            // and become only true in the end of each big function. This way the same script wont get fired twice if the first one
            //is not over.
    if (jShowingTheEnd==false){
                      //I gate the date here
    let jTimeNow=new Date();


    let jDateNoww=jTimeNow.getDate().toString().padStart(2, '0')+":"+(jTimeNow.getMonth() + 1).toString().padStart(2, '0')+":"+jTimeNow.getFullYear();
    
    let jAddTheZero=jTimeNow.getHours()<10?'0'+jTimeNow.getHours():jTimeNow.getHours();

    let jAddTheZeroMinutes=jTimeNow.getMinutes()<10?'0'+jTimeNow.getMinutes():jTimeNow.getMinutes();

  
    let jClockNow=jAddTheZero+":"+jAddTheZeroMinutes;
    
    let jAmOrPmSign=jTimeNow.getHours()>=12?' PM' :' AM';
    
    
   let jFullTime="<p>"+jDateNoww +" at " +jClockNow +" "+ jAmOrPmSign+"</p>" ;
   //Adding the name and I will combine these two since it will go to the same div.
   let jMantiseName="<p><b>Wordy Mantis</b></p>";
   let jNameAndDate=jMantiseName+" "+jFullTime;

   
   //Top div is ready...lets make the bottom now that holds the text
   let jTopDiv=document.createElement("div");
   jTopDiv.innerHTML=jNameAndDate;
   jTopDiv.setAttribute("class","jTopDiv");

   //Here it is...
   let jnewFunFact=document.createElement("p");
   jnewFunFact.setAttribute("class","jGeneratedChatMessage");
   jnewFunFact.textContent="You read them all. Thanks for your time!";

   //Lets combine them since it will be on a div with column flex...
   let jProfileAndFunFactDiv=document.createElement("div");
   jProfileAndFunFactDiv.appendChild(jTopDiv);
   jProfileAndFunFactDiv.appendChild(jnewFunFact);
   jProfileAndFunFactDiv.setAttribute("class","jProfileAndFunFactDiv");

//Now lets create the last div that it will hold the profile Image(it will be
//on the background url in the css..we will just give it a class)
    let jProfileImageDiv=document.createElement("div");
    jProfileImageDiv.setAttribute("class","jGeneratedChatDivPic");

  //The Final that holds everything...
  let jnewFunFactDiv=document.createElement("div");
  jnewFunFactDiv.setAttribute("class","jGeneratedChatDiv");
  jnewFunFactDiv.appendChild(jProfileImageDiv);
  jnewFunFactDiv.appendChild(jProfileAndFunFactDiv);
   




    document.getElementById('jhomePageFunFactsText').appendChild(jnewFunFactDiv);
    jShowingTheEnd=true;  
  
   document.getElementById("jhomePageFunFactsText").scrollTop=document.getElementById("jhomePageFunFactsText").scrollHeight;
    




    }




}   
    
    
}





}



})})();








//=================================MiniQuiz the page with the questions and you have to choose out of 4 =============================================//
//=================================MiniQuiz the page with the questions and you have to choose out of 4 =============================================//
//=================================MiniQuiz the page with the questions and you have to choose out of 4 =============================================//
//=================================MiniQuiz the page with the questions and you have to choose out of 4 =============================================//
//=================================MiniQuiz the page with the questions and you have to choose out of 4 =============================================//
//=================================MiniQuiz the page with the questions and you have to choose out of 4 =============================================//
//=================================MiniQuiz the page with the questions and you have to choose out of 4 =============================================//
//=================================MiniQuiz the page with the questions and you have to choose out of 4 =============================================//
//=================================MiniQuiz the page with the questions and you have to choose out of 4 =============================================//



//As explained at top : 1)immediately-invoked function, 2)listener for on load ,3)check body's id enable javascript code and avoid conflicts between pages


(function() {

 document.addEventListener("DOMContentLoaded",function(){



 if (document.getElementById('jjMiniQuizBody')!==null){


//I made an array that holds the question,options,correct answer and the url for each image to be displayed


const jjquizData = [
    {
        question: "What is the scientific name for mantises?",
        options: ["Mantodea", "Orthoptera", "Arachnida", "Insecta"],
        correctAnswer: "Mantodea",
        imageUrl: "../images/Balasis/quizImages/mantodea.jpg"
    },
    {
        question: "How many mantis species are there?",
        options: ["Approximately 2,000", "Approximately 3,500", "Approximately 5,000", "Over 6,000"],
        correctAnswer: "Approximately 2,000",
        imageUrl: "../images/Balasis/quizImages/species.jpg"
    },
    {
        question: "What is the primary diet of mantises?",
        options: ["Plants", "Nectar", "Other Insects", "Small Vertebrates"],
        correctAnswer: "Other Insects",
        imageUrl: "../images/Balasis/quizImages/otherInsects.jpg"
    },
    {
        question: "Which continent has the greatest diversity of mantis species?",
        options: ["Africa", "Asia", "North America", "South America"],
        correctAnswer: "Africa",
        imageUrl: "../images/Balasis/quizImages/african.jpg"
    },
    {
        question: "How do mantises primarily catch their prey?",
        options: ["Ambush", "Chasing", "Stinging", "Jumping"],
        correctAnswer: "Ambush",
        imageUrl: "../images/Balasis/quizImages/ambush.jpg"
    },
    {
        question: "What is the lifespan of an average mantis?",
        options: ["Few Weeks", "Few Years", "Few Months", "Several Years"],
        correctAnswer: "Few Months",
        imageUrl: "../images/Balasis/quizImages/fewMonths.jpg"
    },
    {
        question: "What is the purpose of a mantis's distinctive posture with raised forelegs?",
        options: ["Attracting Mates", "Camouflage", "Capturing Prey", "Intimidation"],
        correctAnswer: "Capturing Prey",
        imageUrl: "../images/Balasis/quizImages/capturingPrey.jpg"
    },
    {
        question: "Do mantises undergo metamorphosis?",
        options: ["Sometimes", "No", "Yes", "Depends on Species"],
        correctAnswer: "Yes",
        imageUrl: "../images/Balasis/quizImages/metamorphosis.jpg"
    },
    {
        question: "Which sense is particularly well-developed in mantises?",
        options: ["Hearing", "Sight", "Taste", "Smell"],
        correctAnswer: "Sight",
        imageUrl: "../images/Balasis/quizImages/sight.jpg"
    },
    {
        question: "What is the purpose of the mantis's unique head movement?",
        options: ["Balance", "Communication", "Hunting Strategy", "Thermoregulation"],
        correctAnswer: "Hunting Strategy",
        imageUrl: "../images/Balasis/quizImages/huntingStrategy.jpg"
    }
];




    let jjquizDataCopy;
    let jjQuestionNumber=0;
let jjLockTillReset=1;
//Declaring variables for the intervalObj and for the moving bar itself
let jjCountDownInterval;
let jjQuizLoadingBorderBarMoving=document.getElementById("jjQuizLoadingBorderBarMoving");
let jjIntervalStillRun=false;
//current Variables that we need in order to compare the given answer with the correct one.
let jjquestionPickedd;
let jjCorrectAnswer;
let jjQuiztimer;
//here it will be given a +1 each time player answers wrong. If 3 answers quiz gets aborted.
let jjHelperSolverCounter=1;
let jjHelperHideOneCounter=1;
let jjStartingTableViewNoRecordsDisplay=false;
let jjGetTheScoreTable;
let jjassisted;
let jjProtectClickingSolverBeforeStart=false;
//bind event Listeners to start the quiz, reset the quiz , and confirm the choice.
document.getElementById('jjStartCountDown').addEventListener('click',function(){
    jjStartTimer(60);
})
document.getElementById('jjResetCountDown').addEventListener('click',function(){
    jjResetTheWholeQuiz();

})

document.getElementsByClassName('jjQuizOptionsInputs')

let jjQuizOptionsInputs = document.getElementsByClassName('jjQuizOptionsInputs');
for (let i = 0; i < jjQuizOptionsInputs.length; i++) {
    jjQuizOptionsInputs[i].addEventListener('click', function () {
        jjConfirmChoice();
        
    });
}


document.getElementById('jjMiniQuizContentMiddleHelper1').addEventListener('click',function(){
    jjHelperSolver();
})
document.getElementById('jjMiniQuizContentMiddleHelper2').addEventListener('click',function(){
    jjHelperHideOne();
})



//This function starts the timer and loads for the first time the content(options,questions e.t.c). The rest of the times
//content is given from the jjConfirmChoice function 
//(I make a copy of the content in order to manage it better...the copy gets destroyed in the end of each quiz)
function jjStartTimer(timer){
if (jjLockTillReset==1 && jjIntervalStillRun==false){
    jjProtectClickingSolverBeforeStart=true;
    jjIntervalStillRun=true;
    jjStartingTableViewNoRecordsDisplay=true;
    document.getElementById('jjMiniQuizAssistButtons').classList.add('jjanimationForDropDown');
    document.getElementById('jjQuizLoadingBorderBarMovingTimer').classList.add('jjQuizLoadingBorderBarMovingTimerName');
    setTimeout(function() {
        document.getElementById('jjScoreTable').style.display = 'none';
        document.getElementById('jjClearLocalStorageButton').style.display = 'none';
        document.getElementById('jjMiniQuizFrame').style.display = 'flex';
        document.getElementById("jjQuizLoadingBorderBarMovingTimer").textContent=jjQuestionNumber+"/10";
    }, 500);
    
    setTimeout(function() {
        document.getElementById('jjMiniQuizAssistButtons').classList.remove('jjanimationForDropDown');
        document.getElementById('jjStartCountDown').style.display="none";
        document.getElementById('jjMiniQuizContentMiddleHelper2').style.display="flex";
        document.getElementById('jjMiniQuizContentMiddleHelper1').style.display="flex";
        document.getElementById('jjResetCountDown').style.display='flex';
    }, 1000);


    

    if (document.getElementById('jjQuizLoadingBorderBarMoving').classList.contains('jjPauseTheQQloader')){
        document.getElementById('jjQuizLoadingBorderBarMoving').classList.remove('jjPauseTheQQloader');
    }
    
    jjQuiztimer=timer;

       // Ok I used google for this one...It seems like that I was creating a reference instead of a copy..which
       //was obvious couldn't think of it..so instead of jjquizDataCopy = jjquizData; i switch to jjquizDataCopy = [...jjquizData];
    if (!jjquizDataCopy || jjquizDataCopy.length === 0) {
        jjquizDataCopy = [...jjquizData];
    }

    //getting a random index number and then I push the content of the chosen array[index] into the divs
    jjquestionPickedd=jjgiveMeRandom(0,jjquizDataCopy.length-1);     
    document.getElementById("jjQuizQuestionPlaceholder").textContent=jjquizDataCopy[jjquestionPickedd].question;
    document.getElementById("jjOption1").value=jjquizDataCopy[jjquestionPickedd].options[0];
    document.getElementById("jjOption1Label").textContent=jjquizDataCopy[jjquestionPickedd].options[0];
    document.getElementById("jjOption2").value=jjquizDataCopy[jjquestionPickedd].options[1];
    document.getElementById("jjOption2Label").textContent=jjquizDataCopy[jjquestionPickedd].options[1];
    document.getElementById("jjOption3").value=jjquizDataCopy[jjquestionPickedd].options[2];
    document.getElementById("jjOption3Label").textContent=jjquizDataCopy[jjquestionPickedd].options[2];
    document.getElementById("jjOption4").value=jjquizDataCopy[jjquestionPickedd].options[3];
    document.getElementById("jjOption4Label").textContent=jjquizDataCopy[jjquestionPickedd].options[3];
    document.getElementById("jjQuizImgPlaceHolder").setAttribute("src",jjquizDataCopy[jjquestionPickedd].imageUrl);
        //updating correct answer variable as well in order to use it later on..
    jjCorrectAnswer=jjquizDataCopy[jjquestionPickedd].correctAnswer;

    //Ok here we have our timer...its a simple interval that does a -1...in case time hits zero
    //we add a class jjPauseTheQQloader that pause the animation of the div while also
    //add another class to the div with the correct answer to do the effect.(here is where the updated jjCorrectAnswer is used)
    jjCountDownInterval=setInterval(function(){
    jjQuiztimer=jjQuiztimer-1;
    
    jjQuizLoadingBorderBarMoving.classList.add("jjAddAnimationForBar");

        if (jjQuiztimer==0 || jjQuiztimer==NaN){      
                            jjLockTillReset=0;
                            document.getElementById('jjQuizLoadingBorderBarMoving').classList.add('jjPauseTheQQloader');
                            clearInterval(jjCountDownInterval);
                    
                            document.querySelectorAll('input[name="jjOptions"]').forEach(function(radioButton){
                                if (radioButton.value==jjCorrectAnswer){
                                let jjTheCorrect= radioButton.id+"Label";

                                    document.getElementById(jjTheCorrect).classList.add('jjQuizRightAnswerAnimationClass');

                                }
                            
                            });
        }
    }   ,1000)

}

}


//this function resets just the timer...its being called by the else 
//cases that quiz fail
function jjResetTimer(){
    clearInterval(jjCountDownInterval);
    jjIntervalStillRun=false;
    jjQuizLoadingBorderBarMoving.classList.remove("jjAddAnimationForBar");
};


//this function gives instant answer to one of the questions..can be used only once
function jjHelperSolver(){
   if (jjProtectClickingSolverBeforeStart){
    if (jjLockTillReset==1){
    //if (jjHelperSolverCounter==1){
    let jjTakejjOptionsInputs=document.querySelectorAll('input[name="jjOptions"]');

    jjTakejjOptionsInputs.forEach(function(radioButton) {
       
        if (radioButton.value === jjCorrectAnswer) {
            radioButton.checked=true;}
                         
        
    });
    document.getElementById("jjMiniQuizContentMiddleHelper1").style.transform='scale(0.80)';
    document.getElementById("jjMiniQuizContentMiddleHelper1").style.color="red";   
    if (jjHelperSolverCounter!==0){
        jjHelperSolverCounter=jjHelperSolverCounter-1;
        //THIS INITIALLY WOULD SET THE jjHelperSolverCounter TO 0 TO NOT BE REUSABLE.
        //but i thought that in order you would check the quiz without playing I reset it later on again to 1
        //so you can use it as infinitely as a cheat .
       }
    jjConfirmChoice();
           
   

    }
// }
    }
}



let jjHiddenToBeSeen;
let jjHiddenToBeSeen2;
let jjflagToSeeIfOn;
//this function removes two wrong options..can be used only once.
//I again use a random factor and then check if the div hold the right answer...
//if not then I hide it...,,jjLockTillReset is another
//safety variable to not be retriggered before the function end
//....also the jjHelperHideOneCounter is used so it wont be reusable...(becomes 0 from 1..)

function jjHelperHideOne(){
    if (jjLockTillReset==1){

    if (jjHelperHideOneCounter==1){
        let jjTakejjOptionsInputs=document.querySelectorAll('input[name="jjOptions"]');


        let shuffledInputs = Array.from(jjTakejjOptionsInputs);
        shuffledInputs.sort(() => Math.random() - 0.5);


        let jjUpToTwo=1;
        let jjLabelCounterToSaveIdToSecond=1;
        shuffledInputs.forEach(function(radioButton) {
            //ignore jjFlagToSeeIfOn ...was another safety that didnt work properly but decided to let it be..issue covered with jjLockTillReset
           if(jjflagToSeeIfOn!==true){
            if (radioButton.value !== jjCorrectAnswer) {

                if (jjLabelCounterToSaveIdToSecond==1){
                let jjFindTheLabel=radioButton.id+"Label";
            
               document.getElementById(jjFindTheLabel).style.display="none";
               jjHiddenToBeSeen=jjFindTheLabel;
               jjLabelCounterToSaveIdToSecond=jjLabelCounterToSaveIdToSecond-1;
                
            
               
            }else{
                    let jjFindTheLabel2=radioButton.id+"Label";            
                    document.getElementById(jjFindTheLabel2).style.display="none";
                    jjHiddenToBeSeen2=jjFindTheLabel2;

                 }
                
                    if (jjUpToTwo==0){     
                        jjflagToSeeIfOn=true;              
                jjHelperHideOneCounter=jjHelperHideOneCounter-1;
                document.getElementById("jjMiniQuizContentMiddleHelper2").style.transform='scale(0.80)'; 
                document.getElementById("jjMiniQuizContentMiddleHelper2").style.color="red";
                }
                jjUpToTwo=jjUpToTwo-1;

            }
        }
    });

        
 }

}
}


function jjConfirmChoice(){
   

   //I just check if the right answer is chosen..if yes then triggering the next one and replacing the context
   //Also something i forgot to mention is that jjHiddenToBeSeen is to recover the 2 divs
   //that have been hidden from jjHelperHideOne function.
    if (jjLockTillReset==1){


   if (jjflagToSeeIfOn){
    document.getElementById(jjHiddenToBeSeen).style.display="flex";
    document.getElementById(jjHiddenToBeSeen2).style.display="flex";
}


   if(document.querySelector('input[name="jjOptions"]:checked').value==jjCorrectAnswer){
        //we remove the question from the copy...
        jjQuestionNumber=jjQuestionNumber+1;
        document.getElementById("jjQuizLoadingBorderBarMovingTimer").textContent=jjQuestionNumber+"/10";
        jjquizDataCopy.splice(jjquestionPickedd,1);

        if (jjquizDataCopy.length!==0){
            
                                    jjquestionPickedd=jjgiveMeRandom(0,jjquizDataCopy.length-1);

                

                                        //Loading the next question...
                                                jjCorrectAnswer=jjquizDataCopy[jjquestionPickedd].correctAnswer;
                                        document.getElementById("jjQuizQuestionPlaceholder").textContent=jjquizDataCopy[jjquestionPickedd].question;


                                        document.getElementById("jjOption1").value=jjquizDataCopy[jjquestionPickedd].options[0];
                                        document.getElementById("jjOption1Label").textContent=jjquizDataCopy[jjquestionPickedd].options[0];


                                        document.getElementById("jjOption2").value=jjquizDataCopy[jjquestionPickedd].options[1];
                                        document.getElementById("jjOption2Label").textContent=jjquizDataCopy[jjquestionPickedd].options[1];


                                        document.getElementById("jjOption3").value=jjquizDataCopy[jjquestionPickedd].options[2];
                                        document.getElementById("jjOption3Label").textContent=jjquizDataCopy[jjquestionPickedd].options[2];

                                        document.getElementById("jjOption4").value=jjquizDataCopy[jjquestionPickedd].options[3];
                                        document.getElementById("jjOption4Label").textContent=jjquizDataCopy[jjquestionPickedd].options[3];

                                        document.getElementById("jjQuizImgPlaceHolder").setAttribute("src",jjquizDataCopy[jjquestionPickedd].imageUrl);

                                        document.querySelectorAll('input[name="jjOptions"]').forEach(function(radioButton){
                                            radioButton.checked=false;
                                                                                                                            })


                            }else{
            
                                        
                                        
                                    //here it gets if there are no more questions...check both "helpers" variables to check
                                    //if they are used or not..if yes then jjassisted becomes yes..and I use it later on on the
                                    //top 10 score table info
                                        
                                                            if ((jjHelperSolverCounter == 0) || (jjHelperHideOneCounter == 0)){
                                                                jjassisted="Yes";
                                                            }else{
                                                                jjassisted="No";
                                                            }

                                                            //Updating/creating the localStorage variable..used for ScoreTable...
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
                                                                
                                                                jjUpdateScoreTable();
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
                                                                
                                                                jjUpdateScoreTable();
                                                                jjResetTheWholeQuiz();
                                                            }
                                                            
                                                            
            

            
                                }


    }else{

        //the following code is when the user has chosen a wrong answer...it it calls the reset function and clear the timer e.t.c
        jjLockTillReset=0;
        document.getElementById('jjQuizLoadingBorderBarMoving').classList.add('jjPauseTheQQloader');
        clearInterval(jjCountDownInterval);

        document.querySelectorAll('input[name="jjOptions"]').forEach(function(radioButton){
            if (radioButton.value==jjCorrectAnswer){
               let jjTheCorrect= radioButton.id+"Label";
               document.getElementById(jjTheCorrect).classList.add('jjQuizRightAnswerAnimationClass');
            }
        
        });
       
          


    }

}
}



//updates the score table..this is getting triggered at the start on load..also when game end succesfully
//

function jjUpdateScoreTable() {
    let jjScoreTable = document.getElementById("jjScoreTable");

    // Deleting the current rows
    if (jjStartingTableViewNoRecordsDisplay == true) {
        while (jjScoreTable.rows.length > 1) {
            jjScoreTable.deleteRow(1);
        }
    }

    // Add new rows based on the updated score data
    if (localStorage.getItem("jjQuizScores") !== null) {
        jjGetTheScoreTable = JSON.parse(localStorage.getItem("jjQuizScores"));

        for (let i = 0; i < jjGetTheScoreTable.length; i++) {
            let row = jjScoreTable.insertRow(i + 1);

            let jjCellNumber = row.insertCell(0);
            let jjCellDate = row.insertCell(1);
            let jjCellTime = row.insertCell(2);
            let jjCellAssisted = row.insertCell(3);

            jjCellNumber.innerHTML = i + 1;
            jjCellDate.innerHTML = jjGetTheScoreTable[i].datetime;
            jjCellTime.innerHTML = jjGetTheScoreTable[i].time + "/60s";
            if (jjGetTheScoreTable[i].assisted=="Yes"){
                jjCellAssisted.innerHTML = "<div class='jjAssistedTableColorYes'>"+jjGetTheScoreTable[i].assisted+"</div>";
            }else{
                jjCellAssisted.innerHTML = "<div class='jjAssistedTableColorNo'>"+jjGetTheScoreTable[i].assisted+"</div>";
            }
            

        }
    } else {
        if (jjScoreTable.rows.length <= 1) {
            let jjMyNewRowTable = jjScoreTable.insertRow(1);
            jjMyNewRowTable.insertCell(0).innerHTML = "<i>No records</i>";
            jjMyNewRowTable.insertCell(1).innerHTML = "<i>No records</i>";
            jjMyNewRowTable.insertCell(2).innerHTML = "<i>No records</i>";
            jjMyNewRowTable.insertCell(3).innerHTML = "<i>No records</i>";
        }
    }
}




















//not much to explain in this one....reset all doms to starting state..(also variables)

function jjResetTheWholeQuiz(){
    jjProtectClickingSolverBeforeStart=false;
    jjQuestionNumber=0;

    document.getElementById('jjQuizLoadingBorderBarMovingTimer').classList.remove('jjQuizLoadingBorderBarMovingTimerName');

    document.getElementById('jjMiniQuizAssistButtons').classList.add('jjanimationForDropDown');
    setTimeout(function() {
        document.getElementById('jjMiniQuizFrame').style.display = 'none';
        document.getElementById('jjClearLocalStorageButton').style.display = 'flex';
        document.getElementById('jjScoreTable').style.display = 'table';
    }, 500);
    
    setTimeout(function() {
        document.getElementById('jjMiniQuizAssistButtons').classList.remove('jjanimationForDropDown');
        document.getElementById('jjStartCountDown').style.display="flex";
        document.getElementById('jjMiniQuizContentMiddleHelper2').style.display="none";
        document.getElementById('jjMiniQuizContentMiddleHelper1').style.display="none";
        document.getElementById('jjResetCountDown').style.display='none';
    }, 1000);

  
   
    jjLockTillReset=1;
    jjResetTimer();
    document.querySelectorAll('input[name="jjOptions"]').forEach(function(radioButton){
        radioButton.checked=false;
        let jjTheCorrect= radioButton.id+"Label";
        document.getElementById(jjTheCorrect).classList.remove('jjQuizRightAnswerAnimationClass');
    })
        jjHelperSolverCounter=1;
        jjHelperHideOneCounter=1;
        document.getElementById("jjMiniQuizContentMiddleHelper1").style.transform='scale(1)';
        document.getElementById("jjMiniQuizContentMiddleHelper1").style.color="";   
        document.getElementById("jjMiniQuizContentMiddleHelper2").style.transform='scale(1)';
        document.getElementById("jjMiniQuizContentMiddleHelper2").style.color="";

       

        
    

        //Just resetting variables to be reused..
      
        jjQuizLoadingBorderBarMoving=document.getElementById("jjQuizLoadingBorderBarMoving");
        jjCountDownInterval=undefined;
        jjquizDataCopy=undefined;

        jjquestionPickedd=undefined;
        jjCorrectAnswer=undefined;
        jjQuiztimer=undefined;
              
            
    if (jjflagToSeeIfOn){
    document.getElementById(jjHiddenToBeSeen).style.display="flex";
    document.getElementById(jjHiddenToBeSeen2).style.display="flex";
}
jjflagToSeeIfOn=false;
     document.getElementById("jjQuizLoadingBorderBarMovingTimer").textContent=jjQuiztimer;
     document.getElementById("jjQuizQuestionPlaceholder").textContent=undefined;
     document.getElementById("jjOption1").value=undefined;
     document.getElementById("jjOption1Label").textContent=undefined;     
     document.getElementById("jjOption2").value=undefined;
     document.getElementById("jjOption2Label").textContent=undefined;   
     document.getElementById("jjOption3").value=undefined;
     document.getElementById("jjOption3Label").textContent=undefined;
     document.getElementById("jjOption4").value=undefined;
     document.getElementById("jjOption4Label").textContent=undefined;  
     document.getElementById("jjQuizImgPlaceHolder").setAttribute("src",undefined);
         
}
// the initial call of local storage variable to show score table.
jjUpdateScoreTable();

//here its the clear Score table listener...it just removes the local storage variable and then updates the scoretable to be viewed(like a refresh)
document.getElementById('jjClearLocalStorageButton').addEventListener('click', function() {
  
    let jjKeyToRemove = 'jjQuizScores'; 
    localStorage.removeItem(jjKeyToRemove);
    jjUpdateScoreTable();
});




//a simple give me random number function..you have already seen where its used .
function jjgiveMeRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Ok here we go..the following is for the tutorial at the start of the onload page...

//all it actually does it its creating a div and adding a class to it with a very high z-index in order to be displayed
// on Top of everything else....

//Also there is a highlightElement function and remove highlight element.
//In order to create the highlightElement effect I add a div which covers the whole page
//with  background: rgba(0, 0, 0, 0.9); and Z-index z-index: 9900;   and then I add a class to the chosen to highlight element
// that has a pseudo::before with  z-index: 9950 !important; and absolute,  so it will show on top


function jjhighlightElement(jjselect, jjmessage) {
    const jjTargetIamBored = document.getElementById(jjselect);
        jjTargetIamBored.classList.add('jjexplainHighLight');
   
    const jjMessageDiv = document.createElement('div');
            jjMessageDiv.classList.add('jjhighlightMessage');
     jjMessageDiv.textContent = jjmessage;

  

    document.body.appendChild(jjMessageDiv);
   
            const jjNextButton = document.createElement('button');
    jjNextButton.textContent = 'Next';
         jjNextButton.id = 'jjNextButton';

    
          const jjCancelButton = document.createElement('button');
    jjCancelButton.textContent = 'Quit tutorial';
          jjCancelButton.id = 'jjCancelButton';
    
         jjMessageDiv.appendChild(jjCancelButton);
    jjMessageDiv.appendChild(jjNextButton);  
         jjNextButton.addEventListener('click', jjNextIt);
    jjCancelButton.addEventListener('click', jjCancel);
}

function jjremoveHighlightedItem() {
    const jjOverlay = document.querySelector('.jjexplainHighLight');
    if (jjOverlay) {
        jjOverlay.classList.remove('jjexplainHighLight');

        // Remove the message div
        const jjMessageDiv = document.querySelector('.jjhighlightMessage');
        if (jjMessageDiv) {
            document.body.removeChild(jjMessageDiv);
        }
    }
}



  function jjremoveHighlight() {
    const jjoverlay = document.querySelector('.jjwholeShadow');
    document.getElementById('jjMiniQuizBody').removeChild(jjoverlay);
    
    
     
    
  }


let jjControlHighlights=1;


//in order to control the tutorial I simply have a variable jjControlHighlights that depends on the number (using a switch) it will
//call the add or remove highlight function. The value of jjControlHighlights changes by jjNextIt function (scroll down to see it).
//while there is also a cancel function (check bellow again) that sets the jjControlHighlights to 0 and as you see in the case 0
//in the switch it exists the tutorial.
//default is never called I have it there for safety.
  function jjHighLightController(jjStep){
    switch(jjStep){
        case 0:
            document.getElementById('jjMiniQuizContentMiddleHelper1').style.display='';
            document.getElementById('jjMiniQuizContentMiddleHelper2').style.display='';
            document.getElementById('jjMiniQuizMain').style.pointerEvents='auto';
            jjremoveHighlightedItem();
            jjremoveHighlight();

                 break;

        case 1:
                jjremoveHighlightedItem();
                jjhighlightElement('jjQuizLoadingBorder', 'This is your timer ( highlighted green bar down)');
                break;

        case 2:jjremoveHighlightedItem();            
        jjhighlightElement('jjMiniQuizAssistButtons', 'Hit power On button(center one) to start playing. Right and left of it you will have two help buttons');
        document.getElementById('jjMiniQuizContentMiddleHelper1').style.display='flex';
        document.getElementById('jjMiniQuizContentMiddleHelper2').style.display='flex';
             break;
             case 3:jjremoveHighlightedItem();
             document.getElementById('jjMiniQuizContentMiddleHelper1').style.display='';
             document.getElementById('jjMiniQuizContentMiddleHelper2').style.display='';
             jjhighlightElement('jjScoreTable', 'The score table will keep your 10 fastest rounds.');
             break;
        default:
            document.getElementById('jjMiniQuizContentMiddleHelper1').style.display='';
            document.getElementById('jjMiniQuizContentMiddleHelper2').style.display='';
            document.getElementById('jjMiniQuizMain').style.pointerEvents='auto';
            jjremoveHighlightedItem();
            jjremoveHighlight();

            return;
        
    }
  }


//here is the initial call for the function to start...
jjGuidance();




  function jjGuidance(){
    let jjnumStep;

    document.getElementById('jjMiniQuizMain').style.pointerEvents='none';
    const jjshadowOver = document.createElement('div');
    jjshadowOver.classList.add('jjwholeShadow'); 
    document.getElementById('jjMiniQuizBody').appendChild(jjshadowOver);
    jjHighLightController(jjControlHighlights); 
  }

//this one just cancel the tutorial by setting jjControlHighlights to 0 and then it will exit from the switch inside the jjHighLightController function 
function jjCancel(){
    jjControlHighlights=0;
    jjHighLightController(jjControlHighlights);
} 

//it will add 1 and then call  the controller again.
function jjNextIt(){
    jjControlHighlights=jjControlHighlights+1;
    jjHighLightController(jjControlHighlights);
}  
 






}





})})();






//======================================            Behavior page        ================================================//
//======================================            Behavior page        ================================================//
//======================================            Behavior page        ================================================//
//======================================            Behavior page        ================================================//
//======================================            Behavior page        ================================================//
//======================================            Behavior page        ================================================//
//======================================            Behavior page        ================================================//
//======================================            Behavior page        ================================================//
//======================================            Behavior page        ================================================//
//======================================            Behavior page        ================================================//
//======================================            Behavior page        ================================================//
//======================================            Behavior page        ================================================//
//======================================            Behavior page        ================================================//
//======================================            Behavior page        ================================================//


//As explained at top : 1)immediately-invoked function, 2)listener for on load ,3)check body's id enable javascript code and avoid conflicts between pages


(function() {


    document.addEventListener("DOMContentLoaded",function(){
   
   
   
    if (document.getElementById('jjjBehaviorBody')!==null){
   
        //Although the start is about pages inside the book I need to mention that the bookItself
        //is being created by a combination of divs that have translateZ transforms    
   //for example: transform-origin: center center;
   //               transform:rotateY(0deg) rotateX(0deg) translateZ(4.5em);
   //after a lot of testing and combinations of margins I managed to "merge/connect" the divs to form
   //a box...(a side of book is missing but the angle of it is  not viewed on purpose)

   
        const jjjGPage1=document.getElementById('jjjGPage1');
        const jjjBehDaPages=document.getElementsByClassName('jjjBehRotateMePlease');
        const jjjBehbookTop=document.getElementsByClassName('jjjBehbookTop')[0];
        const jjjBehcardBottom=document.getElementsByClassName('jjjBehcardBottom')[0];


      
        const jjjRotate=document.getElementById('jjjRotate');

      
        let  jjjAllowPull=false;
        

        let jjjOffsetX, jjjOffsetY, jjjIsDragging ;

           
            //Ok this is the hardest part of this js file...I will do my best to explain.
            //first I take all the "pages" divs and add them a on click listener while passing
            //also the "this" to the function that is being called at the listener so I will know
            //which page triggers the function.

                      
            
            
                for (let i=0;i<jjjBehDaPages.length;i++){
              jjjBehDaPages[i].addEventListener('click',function(){
                //here is passing the this..
                 let WhoAsks=this;
                //and here i put it as parameter to jjjrotateit function.
                  jjjjrotateIt(WhoAsks);
                                      });
            
                                                     }
            
            
            let jjjjSafetyLoadPage=false;
                
               function jjjjrotateIt(asksWho){
               
                
            
            //Ok all "pages/divs" are from the css at the start transform rotated -180 deg Y,,,
            //ignore the safety load page...it is there to ensure that till one page end the page turn
            //animation no other will get triggered.(which could cause glitches in view)

            //first I check if the page is already rotated by checking if the class that includes the rotation is contained          
            
                  if (!asksWho.classList.contains("jjjBehClassRotateOrNot") && jjjjSafetyLoadPage==false){
                    //here I set the security on ..till this becomes false in the end of the function we wont have a retrigger
                    jjjjSafetyLoadPage=true;
                    //as a matter of fact I set a delay setting to the false...I ENSURED that the delay here is bigger than
                    //the animation Time of page to turn ..animation time <1200 ms
                    setTimeout(function(){ jjjjSafetyLoadPage=false; },1200);
            

                    //heres another important step....I set the page before and after the page to have the according indexes..
                    //for example if  page 3 is chosen then it will have z-index 30...the page 2 and 4 will have z-index 28
                    //while the rest of the pages 25..This way they will be viewed correctly as a book..otherwise they would overlap.
                    for (let i = 0; i < jjjBehDaPages.length; i++) {
                        jjjBehDaPages[i].style.zIndex = 25;
                      }
      
                      if(  asksWho.previousElementSibling !== null ){
                      asksWho.previousElementSibling.style.zIndex = 28;
                    }
            
                    if(asksWho.nextElementSibling !== null ){
                      asksWho.nextElementSibling.style.zIndex = 28;
                    }
                     
                      asksWho.style.zIndex = 30;
                     
                    asksWho.classList.add("jjjBehClassRotateOrNot");
            
            
                    //I hide pages rotated except from first ...the rotated page ofc not the back side..
                    for (let i = 0; i < jjjBehDaPages.length; i++) {
                      if (jjjBehDaPages[i].classList.contains('jjjBehClassRotateOrNot') && jjjBehDaPages[i].id!=="jjjGPage1"){
                        setTimeout(function(){
                          jjjBehDaPages[i].querySelector('.jjjCleanTheMess').classList.add('jjjDisplayThemNot');
                        },900);
                        
                      }else{
                        jjjBehDaPages[i].querySelector('.jjjCleanTheMess').classList.remove('jjjDisplayThemNot');
                      }            
            
                      }
            
                      document.getElementById('jjjClickOnTheBook').style.display="none";
                     
                  }else{

                    //here is the reverse turning....just removing the rotation class and also fixing the z-indexes again for the siblings pages
                    if (jjjjSafetyLoadPage==false){
                    jjjjSafetyLoadPage=true;
                    setTimeout(function(){ jjjjSafetyLoadPage=false; },1000);
                    for (let i = 0; i < jjjBehDaPages.length; i++) {
                        jjjBehDaPages[i].style.zIndex = 25;
                      }
                      if(  asksWho.previousElementSibling !== null ){
                      asksWho.previousElementSibling.style.zIndex = 28;
                    }
            
                    if(asksWho.nextElementSibling !== null ){
                      asksWho.nextElementSibling.style.zIndex = 28;
                    }
                     asksWho.style.zIndex = 30;
                     asksWho.querySelector('.jjjCleanTheMess').classList.remove('jjjDisplayThemNot');
                      asksWho.classList.remove("jjjBehClassRotateOrNot");           
            
                  }             
                      }
                }
            
            
                //this is needed in order to hide borders when the book is opened..I use borderd to create the illusion of the book closed and viwed by angle..
                jjjGPage1.addEventListener('click',()=>{
              if (jjjGPage1.classList.contains('jjjBehClassRotateOrNot')){
                jjjBehbookTop.style.borderTopColor="transparent";
                jjjBehcardBottom.style.borderTopColor="transparent";
              }else{
                setTimeout(function(){
                  jjjBehbookTop.style.borderTopColor="orange";
                jjjBehcardBottom.style.borderTopColor="orange";
            
                },900)
             
              }
            })




            //here are all the listeners for the buttons that rotate the book..

            document.getElementById('jjjSideBtn').addEventListener('click',function (){ jjjC_jjjSideBtn()} );
            document.getElementById('jjjBackBtn').addEventListener('click',function (){jjjC_jjjBackBtn()} );
            document.getElementById('jjjFrontBtn').addEventListener('click', function (){ jjjC_jjjFrontBtn()});
            document.getElementById('jjjResetBtn').addEventListener('click',function () {jjjC_jjjResetBtn()});
            document.getElementById('jjjReadBtn').addEventListener('click',function () {jjjC_jjjReadBtn()});
    
    
            const jjjC_book = document.getElementById('jjjBehflipper');
            let jjjC_rotation = 0;
            // each one of these functions simple rotate the div (parent one) that holds the book...
            
            function jjjC_jjjSideBtn() {

                jjjC_rotation = "rotateY(70deg) rotateX(-65deg) translateZ(4.5em)";
                jjjC_applyRotation(jjjC_rotation);

            }
        
            function jjjC_jjjBackBtn() {
                document.getElementById('jjjBookWrapper').classList.remove('jjjBookWrapperMoveRemove');
                jjjC_rotation = "rotateY(160deg) rotateX(-70deg) translateZ(4.5em)";
                jjjC_book.style.transform = jjjC_rotation;

            }
        //I have swapped front and read names in html..be aware..the read button is the front and front is the read..
            function jjjC_jjjFrontBtn() {

                jjjC_rotation = "rotateY(0deg) rotateX(-90deg) translateZ(4.5em)";
                jjjC_applyRotation(jjjC_rotation);


                if (!document.getElementById('jjjCleanTheMessFirst').parentNode.classList.contains('jjjBehClassRotateOrNot')){
                setTimeout(function(){ document.getElementById('jjjCleanTheMessFirst').click();},2000);
                
            }
            }
            function jjjC_jjjReadBtn() {
                jjjC_rotation = "rotateY(15deg) rotateX(-80deg) translateZ(4.5em)";
                jjjC_applyRotation(jjjC_rotation);
                
            }
        
          
        




                //This function is being called from all the above and rotates the book according to the value parameter given...
                //also adds a class to move the book to the position that it should be while rotation.
                //class holds the following : left:calc(50% + +10em);
                //                              transform:translateX(-50%) ;
            function jjjC_applyRotation(val) {
                document.getElementById('jjjBookWrapper').classList.add('jjjBookWrapperMoveRemove');
                jjjC_book.style.transform = val;
            }
            
        
           
        let jjjBookEnviroment=document.getElementById('jjjBookEnviroment');
        let jjjGetMeToBookEnviroment=document.getElementById('jjjGetMeToBookEnviroment');
        jjjGetMeToBookEnviroment.addEventListener('click',function(){
            jjjBehExtent();

        });
            //this function is executed when you press the button poping that enable the book view...
            //it simple adds and removes classes that make the initial button hide and the close button appear
            //while also configures the book to be in position.
        function jjjBehExtent(){
           
            document.getElementsByClassName('jjjjarrowTopBtnn')[0].classList.add('jjjjDisplayNotMeDude');
            document.getElementsByClassName('jjjjarrowOff')[0].classList.add('jjjjDisplayMeDude');
            document.getElementById('jjjChangeswitchIt').style.color="black";
            document.getElementById('jjjClickOnTheBook').style.display="flex";


           
            document.getElementById('jjjHandlerMenu').classList.add('jjjjDisplayMeDude');

            document.getElementById('jjjBehaviorMain').scrollIntoView({ behavior: 'smooth' });
           
            document.getElementById('jjjBookEnviromentTableEffect').classList.add('jjjBookEnviromentTableEffectAdd');
         
           jjjC_book.style.transform ="rotateY(0deg) rotateX(-90deg) translateZ(4.5em)";
             
           


            document.getElementsByClassName('jjjIneedOneMoreForEffect')[0].style.transform="rotateY(0deg) rotateX(0deg)";
            document.getElementsByClassName('jjjIneedOneMoreForEffect')[0].style.bottom="-16em";
            document.getElementById('jjjWelcomeText').style.marginTop="18em";
            setTimeout(function(){
            let jjjRotateMenuButtons= document.getElementsByClassName('jjjRotateMenuButtons');
            for (let i=0;i<jjjRotateMenuButtons.length;i++){
                jjjRotateMenuButtons[i].classList.add('jjjRotateMenuButtonsExtent')
            }
        },1480); 



            setTimeout(function(){
               jjjC_book.style.transform ="rotateY(15deg) rotateX(-80deg) translateZ(4.5em) translateX(-9.5em)";
            
            },2600);

         
            setTimeout(function(){
             
               
            },5000);
        }   

        //this function resets all the changes of the jjjBehExtent function...literally just resetting everything to the starting position.
        function jjjC_jjjResetBtn() {
            document.getElementById('jjjChangeswitchIt').style.color="orange";
           document.getElementById('jjjBookWrapper').classList.remove('jjjBookWrapperMoveRemove');
           
            document.getElementsByClassName('jjjjarrowOff')[0].classList.remove('jjjjDisplayMeDude');
            
           
            document.getElementsByClassName('jjjjarrowTopBtnn')[0].classList.remove('jjjjDisplayNotMeDude');


            jjjC_rotation = "rotateY(0deg) rotateX(-90deg) translateZ(4.5em)";
            //jjjC_book.classList.remove('jjjjvariemeTheeMou');
           // jjjC_applyRotation(jjjC_rotation);
            jjjC_book.style.transform =jjjC_rotation;
            //the delay function is there to move further the book after picked up to position ..
            setTimeout(function(){

            jjjC_rotation = "rotateY(0deg) rotateX(0deg) translateZ(4.5em)";
        

                //the reset also close the book so it must reset the zindexes of the pages..
            for (let i = 0; i < jjjBehDaPages.length; i++) {
                jjjBehDaPages[i].style.zIndex = 25;
                jjjBehDaPages[i].classList.remove('jjjBehClassRotateOrNot');
                setTimeout(function(){
                    jjjBehbookTop.style.borderTopColor="rgb(237, 185, 67)";
                  jjjBehcardBottom.style.borderTopColor="rgb(237, 185, 67)";
              
                  },900);
            }





            document.getElementById('jjjBookEnviromentTableEffect').classList.remove('jjjBookEnviromentTableEffectAdd');
         
           
           //jjjC_applyRotation(jjjC_rotation);
           jjjC_book.style.transform =jjjC_rotation;
            document.getElementsByClassName('jjjIneedOneMoreForEffect')[0].style.transform="rotateX(-90deg)";
            document.getElementsByClassName('jjjIneedOneMoreForEffect')[0].style.bottom="";
            document.getElementById('jjjWelcomeText').style.marginTop="initial";
            setTimeout(function(){
            let jjjRotateMenuButtons= document.getElementsByClassName('jjjRotateMenuButtons');
            for (let i=0;i<jjjRotateMenuButtons.length;i++){
                jjjRotateMenuButtons[i].classList.remove('jjjRotateMenuButtonsExtent')
            }
        },620); 



       




                 },2000)

                
            
        }

        





    }


    })})();




//============================================MiniGame cardGame=====================================================//
//============================================MiniGame cardGame=====================================================//
//============================================MiniGame cardGame=====================================================//
//============================================MiniGame cardGame=====================================================//
//============================================MiniGame cardGame=====================================================//
//============================================MiniGame cardGame=====================================================//
//============================================MiniGame cardGame=====================================================//
//============================================MiniGame cardGame=====================================================//
//============================================MiniGame cardGame=====================================================//


//As explained at top : 1)immediately-invoked function, 2)listener for on load ,3)check body's id enable javascript code and avoid conflicts between pages

    (function() {


    document.addEventListener("DOMContentLoaded",function(){

        if (document.getElementById('jjjjMiniGameIdentifier') !== null){    
       
       
       
       
       
          
       
       
       
       function jjjjGameSetUp(){
       
       
       
       
       // here I just declare a variable for all the cards and also set a starting array that holds the elements that I want to dispaly in them...
       // as you see its 3 times the same ....
       let jjjjcardItem=document.getElementsByClassName("jjjjcardItem");
       let jjjjCardclasses=Array(
       "Empusidae","Empusidae","Empusidae",
       "Mantidae","Mantidae","Mantidae",
       "Phyllocranidae","Phyllocranidae","Phyllocranidae",
       "Beauty","Beauty","Beauty",
       "AquaMantis","AquaMantis","AquaMantis",
       "funnySayings","funnySayings","funnySayings"
       );
       
       //here I get all the cards, pick a random value from the array and add it as a class to each card, then i remove the value from array.
       //this way I create sets of 3 ...so there will be the same class 3 times.
       //the jjjjCardclasses.length ensures that the random number exists in the array...
       for (p=0;p<jjjjcardItem.length;p++){
         let getit=jjjjCardclasses[Math.floor(Math.random() * jjjjCardclasses.length)];
       
         jjjjcardItem[p].classList.add(getit);
         jjjjCardclasses.splice(jjjjCardclasses.indexOf(getit),1);
       
       
       
        }
       
        //Also I have added a set that its a random funny saying...
       let jjjCardsFunnySayingsUrl=Array(
           "bamboo.jpg",
           "getALife.jpg",
           "iAmRightHere.jpg",
           "LetTheStressBegin.jpg",
           "meAlwaysRight.jpg",
           "ReallyFunny.jpg",
       );
       
       
       //... and in order to achieve it heres another random picker to pick an image and add it to the class funnySayings! (so there will be 3 funnySayings
       //with this image)
       let jjjjRandomFunny=jjjCardsFunnySayingsUrl[Math.floor(Math.random() * jjjCardsFunnySayingsUrl.length)];
       
       setTimeout(function(){
         let  jjjjQfunnySayings=document.getElementsByClassName('funnySayings');
           for (p=0;p<jjjjQfunnySayings.length;p++){
               jjjjQfunnySayings[p].querySelector('.jjjcardItemFront').style.backgroundImage="url(../images/Balasis/miniGame/funnySayings/"+jjjjRandomFunny;
           }
       
       },10);
       
       
       
       
       
       }
           
       
       //triggering the game set up
       jjjjGameSetUp();
       
       
       let jjjjgameEnded=false;
       
                
                //not much to explain here..same as the quiz I simple create localStorage items and keep the top 10...
       
               function jjjjSDisplayTopScores() {
                       
                   let jjjjSTopScores = JSON.parse(localStorage.getItem('jjjjSTopScores')) || [];
               
                  
                   let jjjjSTimeTable = document.getElementById('jjjjSTimeTable');
               
                  
                   jjjjSTimeTable.innerHTML = '<h5>Top 10 Times</h5>';
               
                  
                   jjjjSTopScores.forEach((jjjjSScore, index) => {
                       let jjjjSScoreElement = document.createElement('p');
                       jjjjSScoreElement.textContent = `${jjjjSScore} seconds`;
                       jjjjSTimeTable.appendChild(jjjjSScoreElement);
                   });
               }
       
       
               function jjjjclearJjjjSTopScores() {
                   if (localStorage.getItem('jjjjSTopScores')) {
                       localStorage.removeItem('jjjjSTopScores');
                   }
                    jjjjSDisplayTopScores();
               }
       
               jjjjSDisplayTopScores();
       
       
               let jjjScoresMiniGame=document.getElementById('jjjScoresMiniGame');
               let  jjjShowMiniGamee=document.getElementById('jjjShowMiniGame');
              jjjScoresMiniGame.addEventListener('click',function(){
               jjjjShowTheScores();
           });
       
        

           function jjjShowMiniGame(){
               if ( jjjjgameEnded==true){
                   jjjjResetMiniGameLet();
               }
       
               document.getElementById('jjjShowMiniGame').style.display="none";
               document.getElementById('jjjScoresMiniGame').style.display="flex";        
               document.getElementsByClassName('jjjjcardHolder')[0].style.display="grid";
               document.getElementById('jjjjTableFrame').style.display="none"; 
              document.getElementById('jjjjCardTimer').style.display="flex";
       
              
           }
       
       
               jjjShowMiniGamee.addEventListener('click',function(){
                   jjjShowMiniGame();
                   
               });
       
       
              
       
               function jjjjShowTheScores(){
                   if ( jjjjgameEnded==true){
                       jjjjResetMiniGameLet();
                   }
                   jjjjSDisplayTopScores();
                   document.getElementById('jjjjCardTimer').style.display="none";
                   document.getElementById('jjjScoresMiniGame').style.display="none";
                   document.getElementById('jjjShowMiniGame').style.display="flex";           
                   document.getElementsByClassName('jjjjcardHolder')[0].style.display="none";
                   document.getElementById('jjjjTableFrame').style.display="flex"; 
               }
       
       
       
            
              
               document.getElementById('jjjResetMiniGameTable').addEventListener('click',function(){
                   jjjjclearJjjjSTopScores();
               });
       
       
       
           let jjjjcardItems = document.getElementsByClassName('jjjjcardItem');
           let jjjCardiFlipped = [];
           let jjjjloadSafety=false;
           let jjjjtimerIsOn=false;
           let jjjjQuiztimer=0;
          
          
                   let jjjjQuiztimerMinutes=0;
       
       
       
       
       
               //I wanted to have a hover animation. Proble was that when using transform property in to the animation
                // and you change it later with javascript it doesnt react well..(delays e.t.c) so:

               //..this is a tricky one 
               //in each one of these I need to first add the clicked element to an array (jjjcardiflipped) then
               //disactivate his animation..then add the rotation...then check if matches or it has to be flipped again
               //and in case it doesnt match add back the animation with a delay though to have time for the flip to take place..again..
               //so setTimeout = animation time of flip...
       



           for (let i = 0; i < jjjjcardItems.length; i++) {
               jjjjcardItems[i].addEventListener('click', function (e) {
                   e.preventDefault();
               if (jjjjloadSafety==false){
                   jjjjloadSafety=true;
                   
       
                    //I checkhow many cards are flipped each time ..
                   if (jjjCardiFlipped.length === 0) {
       
                     
                    // at each flip I push the class item to an array and then compare the array items between them...
                    //if items are the same they remain open ..else they flip back..the flip back is getting triggered
                    //only when 3 cards are flipped..
                       jjjCardiFlipped.push(jjjjcardItems[i]);
                       if (jjjjtimerIsOn==false){
                       jjjjStartCardGameTimer();
                   }
       
                       for (let j = 0; j < jjjjcardItems.length; j++) {
                           if (jjjCardiFlipped.includes(jjjjcardItems[j])) {
                               jjjjcardItems[j].style.animationPlayState = 'paused';
                               jjjjcardItems[j].style.animationName = 'none';
                           } else {
                               jjjjcardItems[j].style.animationPlayState = '';
                               jjjjcardItems[j].style.animationName = 'jjjhoverAnimation';
                           }
                       }
       
                       setTimeout(function(){
                           jjjjcardItems[i].classList.add('jjjcardItemRotated');
                     },50);
       
                       
       
                       
                     } else if (jjjCardiFlipped.length === 1) {
                       jjjCardiFlipped.push(jjjjcardItems[i]);
       
                       for (let j = 0; j < jjjjcardItems.length; j++) {
                           if (jjjCardiFlipped.includes(jjjjcardItems[j])) {
                               jjjjcardItems[j].style.animationPlayState = 'paused';
                               jjjjcardItems[j].style.animationName = 'none';
                               
                           } else {
                               jjjjcardItems[j].style.animationPlayState = '';
                               jjjjcardItems[j].style.animationName = 'jjjhoverAnimation';
                           }
                       }
       
                       setTimeout(function(){
                       jjjjcardItems[i].classList.add('jjjcardItemRotated');
                     },50);
                       
                       if (jjjCardiFlipped[0].classList[1] === jjjCardiFlipped[1].classList[1]) {
                           
       
       
       
       
                       }
                       
                    
       
       
                     } else if ((jjjCardiFlipped.length === 2)  ) {
       
                       if (jjjCardiFlipped.length<3){
                      
       
                       jjjCardiFlipped.push(jjjjcardItems[i]);
       
       
                       for (let j = 0; j < jjjjcardItems.length; j++) {
                           if (jjjCardiFlipped.includes(jjjjcardItems[j])) {
                               jjjjcardItems[j].style.animationPlayState = 'paused';
                               jjjjcardItems[j].style.animationName = 'none';
                           } else {
                               jjjjcardItems[j].style.animationPlayState = '';
                               jjjjcardItems[j].style.animationName = 'jjjhoverAnimation';
                           }
                       }
       
                       setTimeout(function(){
                       jjjjcardItems[i].classList.add('jjjcardItemRotated');
       
                     },50);
       
                   
                       if (jjjCardiFlipped[0].classList[1] === jjjCardiFlipped[1].classList[1] &&
                           jjjCardiFlipped[1].classList[1] === jjjCardiFlipped[2].classList[1]) {
       
                           // Code to execute when cards match (for 3 cards)
                         //I add delay so the flip animation end first and then activate the commands for the 3 flipped cards that match...
       
                          
                           setTimeout(function(){ 
       
                           jjjCardiFlipped[0].classList.add('jjjcardItemRotatedRemoved');
                           jjjCardiFlipped[1].classList.add('jjjcardItemRotatedRemoved');                  
                           jjjCardiFlipped[2].classList.add('jjjcardItemRotatedRemoved');
                           let jjjjOnlyOnceCheck=true;
                           for (let j = 0; j < jjjjcardItems.length; j++) {
                               if (!jjjjcardItems[j].classList.contains('jjjcardItemRotatedRemoved')) {
                                   jjjjOnlyOnceCheck=false;                            
                               }
                           }
                           jjjjgameEnded=jjjjOnlyOnceCheck;
                         
       
                           setTimeout(function () {
                           if( document.getElementsByClassName('jjjjcardHolder')[0].classList.contains('jjjjcardHolderCorrect')){
                          document.getElementsByClassName('jjjjcardHolder')[0].classList.remove('jjjjcardHolderCorrect');
                                }
       
                        if( document.getElementsByClassName('jjjjcardHolder')[0].classList.contains('jjjjcardHolderFalse')){
                           document.getElementsByClassName('jjjjcardHolder')[0].classList.remove('jjjjcardHolderFalse');
                        }
       
                          document.getElementsByClassName('jjjjcardHolder')[0].classList.add('jjjjcardHolderCorrect');
       
       
                          setTimeout(function(){
                           if( document.getElementsByClassName('jjjjcardHolder')[0].classList.contains('jjjjcardHolderCorrect')){
                               document.getElementsByClassName('jjjjcardHolder')[0].classList.remove('jjjjcardHolderCorrect');
                                     }
            
                           },2100);
                       }, 500);
       
       
       
                               setTimeout(function(){
                                   jjjCardiFlipped = [];
                               },10);
                         
       
                     
                                },1500);
       
       
                       } else {
       
                           setTimeout(function () {
                               if( document.getElementsByClassName('jjjjcardHolder')[0].classList.contains('jjjjcardHolderCorrect')){
                                   document.getElementsByClassName('jjjjcardHolder')[0].classList.remove('jjjjcardHolderCorrect');
                                         }
                
                                 if( document.getElementsByClassName('jjjjcardHolder')[0].classList.contains('jjjjcardHolderFalse')){
                                    document.getElementsByClassName('jjjjcardHolder')[0].classList.remove('jjjjcardHolderFalse');
                                 }
                
                                   document.getElementsByClassName('jjjjcardHolder')[0].classList.add('jjjjcardHolderFalse');
                
                
                                   setTimeout(function(){
                                    if( document.getElementsByClassName('jjjjcardHolder')[0].classList.contains('jjjjcardHolderFalse')){
                                        document.getElementsByClassName('jjjjcardHolder')[0].classList.remove('jjjjcardHolderFalse');
                                              }
                     
                                    },2100);
           
                                   }, 500);
                         
       
                         
                           setTimeout(function () {
                             
       
                           
       
                              
                              
                               for (let j = 0; j < jjjjcardItems.length; j++) {
                                   if (jjjCardiFlipped.includes(jjjjcardItems[j])) {
                                       jjjjcardItems[j].style.animationPlayState = 'paused';
                                       jjjjcardItems[j].style.animationName = 'none';
                                   } else {
                                       jjjjcardItems[j].style.animationPlayState = '';
                                       jjjjcardItems[j].style.animationName = 'jjjhoverAnimation';
                                   }
                               }
       
                               setTimeout(function(){
                                   for (let j = 0; j < jjjCardiFlipped.length; j++) {
                                       jjjCardiFlipped[j].classList.remove('jjjcardItemRotated');
                                   }
                                   jjjCardiFlipped = [];
                               },50)
                               
       
       
                              
       
       
       
                           }, 1500);
       
                        
       
       
                       }
       
       
       
       
       
       
                 
       
       
       
       
       
                   }
                 
       
       
                     
       
                   }
       
       
       
                   setTimeout(function(){ 
                       jjjjloadSafety=false;
                   },20)
       
                   }
       
                   //this gets triggered in the end of the game if you won....
                   function jjjjSSaveTopScores(jjjjSScore) {              
                       let jjjjSTopScores = JSON.parse(localStorage.getItem('jjjjSTopScores')) || [];   
                       jjjjSTopScores.push(jjjjSScore);
                       jjjjSTopScores.sort((a, b) => b - a);
                       jjjjSTopScores = jjjjSTopScores.slice(0, 10);
                       localStorage.setItem('jjjjSTopScores', JSON.stringify(jjjjSTopScores));
                   }
       
                  
               
       
       
       
       
       
       
       
                    //a timer which I get the value in the end of the game ...
                   function jjjjStartCardGameTimer(){
       
                       jjjjtimerIsOn=true;
                       jjjjCountDownInterval=setInterval(function(){
       
                           if (jjjjQuiztimerMinutes == 0){
                               if (jjjjQuiztimer<10){
                                   jjjjQuiztimerShow="0"+jjjjQuiztimer;
                               }else{
                                   jjjjQuiztimerShow=jjjjQuiztimer;
                               }
                       
                       }else{
                           if (jjjjQuiztimer<10){
                               jjjjQuiztimerShow="0"+jjjjQuiztimer;
                           }else{
                               jjjjQuiztimerShow=jjjjQuiztimer;
                           }
       
                           jjjjQuiztimerShow=jjjjQuiztimerMinutes + " : " + jjjjQuiztimer;
                       }
                       
                           document.getElementById('jjjjCardTimerText').innerText=jjjjQuiztimerShow;
       
                           
                          
                           
                               if (jjjjgameEnded==true){      
                                                                 
                                 jjjjSSaveTopScores(jjjjQuiztimerShow);
                                 setTimeout(function(){
       
                                   setTimeout(function(){
                                   jjjjSDisplayTopScores() ; 
                               },20);
                                   jjjScoresMiniGame.click();
       
                                 },50)
                               
                                 clearInterval(jjjjCountDownInterval);    
                               
                                 
                              }
       
                              jjjjQuiztimer=jjjjQuiztimer+1;
       
                              if (jjjjQuiztimer==60){
                                jjjjQuiztimerMinutes=jjjjQuiztimerMinutes+1;
                                jjjjQuiztimer=0;       
                              }
       
                           }   ,1000);
                   }
                   
       
               });
           }
       
       
       
       
       
       
       
       
       
                        //just resetting all values to start..also the timer..
                        
                        function jjjjResetMiniGameLet() {
                            
                            if (typeof jjjjCountDownInterval !== 'undefined') {
                                clearInterval(jjjjCountDownInterval);
                            }
                        
                            //reset the array that I push the sets...
                            jjjCardiFlipped = [];
                        
                        //I remove all the setTimeouts delays...(in case there is a delay on so I can reset instantly);
                        //the command is just getting its windowSetTimeout one after another and 0 it..
                            let id = window.setTimeout(function() {}, 0);
                            while (id--) {
                                window.clearTimeout(id);
                            }
                            
                            //rest of commands is to reset timers and recalling the set classes to cards e.t.c
                            for (let i = 0; i < jjjjcardItems.length; i++) {
                                
                                
                        
                                
                                jjjjcardItems[i].removeAttribute('style');
                                jjjjcardItems[i].querySelector('.jjjcardItemFront').removeAttribute('style');
                                while (jjjjcardItems[i].classList.length > 1) {
                                    
                                    jjjjcardItems[i].classList.remove(jjjjcardItems[i].classList.item(1));
                                }
                            }


                            jjjjtimerIsOn=false;
                            jjjjQuiztimer=0;
                            jjjjQuiztimerMinutes=0;
                            jjjjQuiztimerShow=0;
                            jjjjgameEnded=false;
                    
                            document.getElementById('jjjjCardTimerText').innerText=jjjjQuiztimerShow;
                            jjjjGameSetUp();
                        }
       
       
       
       
       
       
                    document.getElementById('jjjResetMiniGame').addEventListener('click',function(){
                        jjjjResetMiniGameLet();
                    });    
       
       
    
       
       }
       
       
       })})();





//===================================================Species page===============================================//
//===================================================Species page===============================================//
//===================================================Species page===============================================//
//===================================================Species page===============================================//
//===================================================Species page===============================================//
//===================================================Species page===============================================//
//===================================================Species page===============================================//
//===================================================Species page===============================================//
//===================================================Species page===============================================//
//===================================================Species page===============================================//

//As explained at top : 1)immediately-invoked function, 2)listener for on load ,3)check body's id enable javascript code and avoid conflicts between pages


(function() {
   
    document.addEventListener("DOMContentLoaded",function(){
        if (document.getElementById('jSpSpeciesIdentifier') !== null){     
            


            //GrabElementsList
            const jSpbar=document.getElementsByClassName('jSpbar');
            const jSpSpeciesMenuAnchor=document.getElementsByClassName('jSpSpeciesMenuAnchor');
            const jSpSubSpeciesMenuContent=document.getElementsByClassName('jSpSubSpeciesMenuContent');
            const jSpItems=document.getElementsByClassName('jSpItems');
            const jSpSubSpeciesClassForFunction=document.getElementsByClassName('jSpSubSpeciesClassForFunction');






          //in order to create the chart bars I get the values from inside the divs and put them in a variable called "counter"
          //then I add the height of it and also at 1.5 em as base...
function jSpapplyStylesToBars() {
    for (let i = 0; i < jSpbar.length; i++) {
        let percentageElement = jSpbar[i].querySelector(".jSppercentage");
        let recognize = jSpbar[i].querySelector("label").innerHTML;

        let percentage = parseInt(percentageElement.innerHTML);

        percentageElement.style.height = "0";
        percentageElement.style.transition = "height 1s ease";

        function animateCounter(counter) {
            jSpbar[i].querySelector(".jSppercentage").textContent = counter + "%";
            jSpbar[i].querySelector(".jSppercentage").style.height = "calc(" + counter + "% + 1.5em)";
            //requestAnimationFrame executes a function before the next "repaint" of the browser...
            //so adding a delay to it you create an animation per 150 ms in our case..so it updates the height
            // of the bars per 150ms (By callying the function above..);()=> instant call..
            if (counter < percentage) {
                setTimeout(function(){
                    requestAnimationFrame(() => animateCounter(counter + 1));
                },150);
               
            }
        }



        // a simple switch in order to change the color of the bar depending on the inner html (therefore the name of the species)
        switch (recognize) {
            case "Mantidae":
                jSpbar[i].querySelector(".jSppercentage").style.backgroundColor = "rgb(82,112,31)";
                jSpbar[i].querySelector("label").style.color = "rgb(82,112,31)";
                animateCounter(0);
                break;
            case "Hymenopodidae":
                jSpbar[i].querySelector(".jSppercentage").style.backgroundColor = "rgb(237, 185, 67)";
                jSpbar[i].querySelector("label").style.color = "rgb(237, 185, 67)";
                animateCounter(0);
                break;
            case "Empusidae":
                jSpbar[i].querySelector(".jSppercentage").style.backgroundColor = "rgb(206,149,178)";
                jSpbar[i].querySelector("label").style.color = "rgb(206,149,178)";
                animateCounter(0);
                break;
            case "Liturgusidae":
                jSpbar[i].querySelector(".jSppercentage").style.backgroundColor = "rgb(173,182,117)";
                jSpbar[i].querySelector("label").style.color = "rgb(173,182,117)";
                animateCounter(0);
                break;
            case "Deroplatyidae":
                jSpbar[i].querySelector(".jSppercentage").style.backgroundColor = "rgb(244,99,35)";
                jSpbar[i].querySelector("label").style.color = "rgb(244,99,35)";
                animateCounter(0);
                break;
            case "Phyllocranidae":
                jSpbar[i].querySelector(".jSppercentage").style.backgroundColor = "rgb(225,197,149)";
                jSpbar[i].querySelector("label").style.color = "rgb(225,197,149)";
                animateCounter(0);
                break;
            case "Gonypetidae":
                jSpbar[i].querySelector(".jSppercentage").style.backgroundColor = "rgb(119,109,123)";
                jSpbar[i].querySelector("label").style.color = "rgb(119,109,123)";
                animateCounter(0);
                break;
            default:
                jSpbar[i].querySelector("label").style.color = "black";
        }

      

    }
}

//creating an IntersectionObserver...it takes two parameteres
//first is the object to be observeed which is the jSpchart(the whole chart container)
//second parameter is the observer itself..which we disconnect when the function is getting triggered..
//otherwise it would retrigger..and for the chart effect is not desirable behavior..

const jSkobserver = new IntersectionObserver((entries, jSkobserver) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
            jSpapplyStylesToBars();
            
            jSkobserver.disconnect();
        }
    });
}, { threshold: 1.0 }); 
//threshold is to set if you want to trigger when its fully visible (1.0) or maybe half of it (0.5) you can set a value from 0.0->1.0 ...(i think 0.1 is minimum)

const jSpchart = document.querySelector('.jSpchart');
if (jSpchart) {
    jSkobserver.observe(jSpchart);
}







            for (let i=0;i<jSpSpeciesMenuAnchor.length;i++){
                jSpSpeciesMenuAnchor[i].addEventListener('click',function(){
                    
                    let jSpICalled=this;
                    jSpChooseSpecies(jSpICalled);
                })
            }
            
            //this is just to choose the appropriate content depending on what you clicked...
            //in order to replace the content I cheat it a bit by playing with charAt and length...taking the last letter which is the number
            // and forming the right element id..
       
            function jSpChooseSpecies(jSpWhoCalled){
                let theElementToBeSeen=document.getElementById("jSpSubSpeciesMenu"+jSpWhoCalled.id.charAt(jSpWhoCalled.id.length - 1)  );
                let theElementToBeScaled=document.getElementById("jSPMainMenu"+jSpWhoCalled.id.charAt(jSpWhoCalled.id.length - 1)  );
                let parentDiv = document.getElementById('jSpSubSpeciesMenu0');
                let classToRemove = 'jSpInitiateDisplay';
                let children = parentDiv.children;
                for (let i = 0; i < children.length; i++) {
                children[i].classList.remove(classToRemove);
                }


            if (!theElementToBeSeen.classList.contains('jSpClassForChosenOne')){
                document.getElementById('jSPMainMenuFrameMantis').style.display="initial";
                for (let i=0;i<jSpSubSpeciesMenuContent.length;i++){
                    jSpSubSpeciesMenuContent[i].classList.remove('jSpClassForChosenOne');
                }
                for (let i=0;i<jSpItems.length;i++){
                    jSpItems[i].classList.remove('jSpClassForChosenOne');
                }
                for (let i=0;i<jSpSubSpeciesClassForFunction.length;i++){
                    jSpSubSpeciesClassForFunction[i].classList.remove('jSpSubSpeciesClassForFunctionScale');

                }



            

                theElementToBeSeen.classList.add('jSpClassForChosenOne');
             
                theElementToBeSeen.querySelector('.jSpSubSpeciesMenuContent').classList.add('jSpClassForChosenOne');
                theElementToBeSeen.querySelector('.jSpSubSpeciesMenuContent').scrollTop=0;
                theElementToBeScaled.classList.add('jSpSubSpeciesClassForFunctionScale');
                //here I switch the src attribute depending on the id chosen...(its the mantis you see on the top);
                switch(theElementToBeSeen.id){

                    case "jSpSubSpeciesMenu1":
                        document.getElementById('jSPMainMenuFrameMantis').setAttribute('src',
                        "../images/Balasis/Species/Mantidae.png");
                        break;
                    case "jSpSubSpeciesMenu2":
                        document.getElementById('jSPMainMenuFrameMantis').setAttribute('src',
                        "../images/Balasis/Species/Hymenopodidae.png");
                        break;
                        
                    case "jSpSubSpeciesMenu3":
                        document.getElementById('jSPMainMenuFrameMantis').setAttribute('src',
                        "../images/Balasis/Species/Empusidae.png");
                        break;
                    case "jSpSubSpeciesMenu4":
                        document.getElementById('jSPMainMenuFrameMantis').setAttribute('src',
                        "../images/Balasis/Species/Liturgusidae.png");
                        break;
                        
                    case "jSpSubSpeciesMenu5":
                    document.getElementById('jSPMainMenuFrameMantis').setAttribute('src',
                    "../images/Balasis/Species/Deroplatyidae.png");
                    break;

                    case "jSpSubSpeciesMenu6":
                    document.getElementById('jSPMainMenuFrameMantis').setAttribute('src',
                    "../images/Balasis/Species/Phyllocranidae.png");
                    break;

                    case "jSpSubSpeciesMenu7":
                    document.getElementById('jSPMainMenuFrameMantis').setAttribute('src',
                    "../images/Balasis/Species/Gonypetidae.png");
                    break;
                    default :
                        document.getElementById('jSPMainMenuFrameMantis').setAttribute('src',
                        "../images/Balasis/Species/mantisiumChatBoxReverse.png");


                }

            }else{


                for (let i=0;i<jSpSubSpeciesMenuContent.length;i++){
                    jSpSubSpeciesMenuContent[i].classList.remove('jSpClassForChosenOne');
                }
                for (let i=0;i<jSpItems.length;i++){
                    jSpItems[i].classList.remove('jSpClassForChosenOne');
                }
                for (let i=0;i<jSpSubSpeciesClassForFunction.length;i++){
                    jSpSubSpeciesClassForFunction[i].classList.remove('jSpSubSpeciesClassForFunctionScale');

                }
                document.getElementById('jSpSubSpeciesMenu0').classList.add('jSpClassForChosenOne');
                document.getElementById('jSpSubSpeciesMenuTitle0').classList.add('jSpClassForChosenOne');
                document.getElementById('jSpSubSpeciesMenuText0').classList.add('jSpClassForChosenOne');
                document.getElementById('jSPMainMenuFrameMantis').style.display="none";



            }

    }














            


        }
    })  })();

