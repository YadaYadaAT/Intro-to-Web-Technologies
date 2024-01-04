

(function() {



    document.addEventListener("DOMContentLoaded",function(){
 if (document.getElementById('jHomePageIdentifier') !== null){     
        
        /*
        const imagesOfHomePageMenu=document.getElementsByClassName("jHomepageMenuImg");
        for (let i=0;i<imagesOfHomePageMenu.length;i++){
            if (imagesOfHomePageMenu[i].style.cssFloat=="right"){
                imagesOfHomePageMenu[i].classList.add("jAddPaddingLeftToImg");
               
            }else{
                imagesOfHomePageMenu[i].classList.add("jAddPaddingRightToImg");
            }
        }*/
    

   //Setting the listener to the ReadMores. Expanding the divs of their parents.

    const ReadMores=document.getElementsByClassName("jHomePageReadMore");
    const HomePageMiniHolder=document.getElementsByClassName("jHomePageMinimizerHolder");
    const HomePageMini=document.getElementsByClassName("jHomePageMinimizer");

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

  
//here
        //My first job is to generate a random number so I will use it to pick
        //one fun fact from the array....
        function Jjrandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
          }        

//I create an array and start fullfling and comparing each time...
    let jRouletaBegin=Jjrandom(0,8);
   

if (jRouletaExclude.length<=8){

    while(jRouletaExclude.includes(jRouletaBegin)){
        jRouletaBegin=Jjrandom(0,8);
    }
    jRouletaExclude.push(jRouletaBegin);
    
    jNoSameGeneratorTwice=jRouletaBegin;
    
    //I gate the date here
    let jTimeNow=new Date();
    let jDateNoww=jTimeNow.getDate()+":"+jTimeNow.getMonth()+":"+jTimeNow.getFullYear();

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

            ///LAST CREATION HERE IN  IF to tell him a thanks for reading
    if (jShowingTheEnd==false){
                      //I gate the date here
    let jTimeNow=new Date();
    let jDateNoww=jTimeNow.getDate()+":"+jTimeNow.getMonth()+":"+jTimeNow.getFullYear();
    
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
    




    }// the end of IF here




}   
    
    
}





}//The if to protect the page...



})})();



(function() {

 document.addEventListener("DOMContentLoaded",function(){



 if (document.getElementById('jjMiniQuizBody')!==null){






























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

       // Ok I used google for this one...It seems like that I was creating a refference instead of a copy..which
       //was obvious couldn't think of it..so instead of jjquizDataCopy = jjquizData; i switch to jjquizDataCopy = [...jjquizData];
    if (!jjquizDataCopy || jjquizDataCopy.length === 0) {
        jjquizDataCopy = [...jjquizData];
    }

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

    jjCorrectAnswer=jjquizDataCopy[jjquestionPickedd].correctAnswer;




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
        jjHelperSolverCounter=jjHelperSolverCounter-1;//I SET TO 0 so you can cheat the game to check it.
       }
    jjConfirmChoice();
           
   

    }
// }
    }
}


//this function removes an wrong option..can be used only once
let jjHiddenToBeSeen;
let jjHiddenToBeSeen2;
let jjflagToSeeIfOn;
function jjHelperHideOne(){
    if (jjLockTillReset==1){

    if (jjHelperHideOneCounter==1){
        let jjTakejjOptionsInputs=document.querySelectorAll('input[name="jjOptions"]');


        let shuffledInputs = Array.from(jjTakejjOptionsInputs);
        shuffledInputs.sort(() => Math.random() - 0.5);


        let jjUpToTwo=1;
        let jjLabelCounterToSaveIdToSecond=1;
        shuffledInputs.forEach(function(radioButton) {
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

       

        
    

        //Declaring variables for the intervalObj and for the moving bar itself
      
        jjQuizLoadingBorderBarMoving=document.getElementById("jjQuizLoadingBorderBarMoving");
        
        //current Variables that we need in order to compare the given answer with the correct one.
        jjCountDownInterval=undefined;
        jjquizDataCopy=undefined;

        jjquestionPickedd=undefined;
        jjCorrectAnswer=undefined;
        jjQuiztimer=undefined;
        //here it will be given a +1 each time player answers wrong. If 3 answers quiz gets aborted.
       


     //Reset
            
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

jjUpdateScoreTable();


document.getElementById('jjClearLocalStorageButton').addEventListener('click', function() {
  
    let jjKeyToRemove = 'jjQuizScores'; 
    localStorage.removeItem(jjKeyToRemove);
    jjUpdateScoreTable();
});





function jjgiveMeRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}










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



jjGuidance();




  function jjGuidance(){
    let jjnumStep;

    document.getElementById('jjMiniQuizMain').style.pointerEvents='none';
    const jjshadowOver = document.createElement('div');
    jjshadowOver.classList.add('jjwholeShadow'); 
    document.getElementById('jjMiniQuizBody').appendChild(jjshadowOver);
    jjHighLightController(jjControlHighlights); 
  }


function jjCancel(){
    jjControlHighlights=0;
    jjHighLightController(jjControlHighlights);
} 
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


(function() {

    document.addEventListener("DOMContentLoaded",function(){
   
   
   
    if (document.getElementById('jjjBehaviorBody')!==null){
   


   
        const jjjGPage1=document.getElementById('jjjGPage1');
        const jjjBehDaPages=document.getElementsByClassName('jjjBehRotateMePlease');
        const jjjBehbookTop=document.getElementsByClassName('jjjBehbookTop')[0];
        const jjjBehcardBottom=document.getElementsByClassName('jjjBehcardBottom')[0];


        //const jjjPullAllow=document.getElementById('jjjPullAllow');
        const jjjRotate=document.getElementById('jjjRotate');
      
        let  jjjAllowPull=false;
        
        let jjjOffsetX, jjjOffsetY, jjjIsDragging ;

     /*   jjjPullAllow.addEventListener('click',function(){
            jjjAunlockPull();
        
        });*/
       
       


       function jjjAunlockPull(){
           
            jjjAllowPull=true;
            jjjPullListener();
           
        }

      


        function  jjjPullListener(){

       
            if(jjjAllowPull){
       
        
        jjjBookWrapper.addEventListener('mousedown', function (e) {

           jjjOffsetX, jjjOffsetY, jjjIsDragging = false;

            let jjjBookWrapper = document.getElementById('jjjBookWrapper');


            // Prevent unwanted browser behavior
            e.preventDefault();
        
            // Save the initial mouse position relative to the div
            jjjOffsetX = e.clientX - jjjBookWrapper.getBoundingClientRect().left;
            jjjOffsetY = e.clientY - jjjBookWrapper.getBoundingClientRect().top;
        
            // Change the appearance while dragging
            jjjBookWrapper.style.opacity = '0.5';
        
            jjjIsDragging = true;
            console.log(jjjIsDragging);
            // Add event listeners to the document for better responsiveness
            document.addEventListener('mousemove', jjjhandleMouseMove);
            document.addEventListener('mouseup', jjjhandleMouseUp);
        }) ;
        
    }
       
        
        function jjjhandleMouseMove(e) {
            if(jjjAllowPull){
                console.log(jjjAllowPull);
            if (jjjIsDragging) {
                // Update the position of the div based on the mouse movement
                jjjBookWrapper.style.left = e.clientX - jjjOffsetX + 'px';
                jjjBookWrapper.style.top = e.clientY - jjjOffsetY + 'px';
            }


        }
        }
        
        function jjjhandleMouseUp() {
            if(jjjAllowPull){

            // Reset appearance and dragging state
            jjjBookWrapper.style.opacity = '1';
            jjjIsDragging = false;
        
            // Remove the event listeners after the drag operation is complete
            document.removeEventListener('mousemove', jjjhandleMouseMove);
            document.removeEventListener('mouseup', jjjhandleMouseUp);
        }


    }


        }



  
























   
     
            
            
            
            
            
                for (let i=0;i<jjjBehDaPages.length;i++){
              jjjBehDaPages[i].addEventListener('click',function(){
                 let WhoAsks=this;
            
                  jjjjrotateIt(WhoAsks);
                                      });
            
                                                     }
            
            
            
                
               function jjjjrotateIt(asksWho){
               
            
            
            
            
                  if (!asksWho.classList.contains("jjjBehClassRotateOrNot")){
            
            
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
            
            
            
                    for (let i = 0; i < jjjBehDaPages.length; i++) {
                      if (jjjBehDaPages[i].classList.contains('jjjBehClassRotateOrNot') && jjjBehDaPages[i].id!=="jjjGPage1"){
                        setTimeout(function(){
                          jjjBehDaPages[i].querySelector('.jjjCleanTheMess').classList.add('jjjDisplayThemNot');
                        },900);
                        
                      }else{
                        jjjBehDaPages[i].querySelector('.jjjCleanTheMess').classList.remove('jjjDisplayThemNot');
                      }            
            
                      }
            
            
                     
                  }else{
            
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






            document.getElementById('jjjSideBtn').addEventListener('click',function (){ jjjC_jjjSideBtn()} );
            document.getElementById('jjjBackBtn').addEventListener('click',function (){jjjC_jjjBackBtn()} );
            document.getElementById('jjjFrontBtn').addEventListener('click', function (){ jjjC_jjjFrontBtn()});
            document.getElementById('jjjResetBtn').addEventListener('click',function () {jjjC_jjjResetBtn()});
            document.getElementById('jjjReadBtn').addEventListener('click',function () {jjjC_jjjReadBtn()});
    
    
            const jjjC_book = document.getElementById('jjjBehflipper');
            let jjjC_rotation = 0;
        
            function jjjC_jjjSideBtn() {
                jjjC_rotation = "rotateY(70deg) rotateX(-65deg) translateZ(4.5em)";
                jjjC_applyRotation(jjjC_rotation);
            }
        
            function jjjC_jjjBackBtn() {
                jjjC_rotation = "rotateY(160deg) rotateX(-70deg) translateZ(4.5em)";
                jjjC_applyRotation(jjjC_rotation);
            }
        
            function jjjC_jjjFrontBtn() {
                jjjC_rotation = "rotateY(0deg) rotateX(-90deg) translateZ(4.5em)";
                jjjC_applyRotation(jjjC_rotation);
            }
            function jjjC_jjjReadBtn() {
                jjjC_rotation = "rotateY(15deg) rotateX(-80deg) translateZ(4.5em)";
                jjjC_applyRotation(jjjC_rotation);
            }
        
          
        





            function jjjC_applyRotation(val) {
                jjjC_book.style.transform = val;
            }
            
        
           
        let jjjBookEnviroment=document.getElementById('jjjBookEnviroment');
        let jjjGetMeToBookEnviroment=document.getElementById('jjjGetMeToBookEnviroment');
        jjjGetMeToBookEnviroment.addEventListener('click',function(){
            jjjBehExtent();

        });

        function jjjBehExtent(){
            document.getElementsByClassName('jjjjarrowTopBtnn')[0].style.display="none";
            document.getElementsByClassName('jjjjarrowOff')[0].style.display="flex";
           
            document.getElementById('jjjBehaviorMain').scrollIntoView({ behavior: 'smooth' });
            document.getElementById('jjjHandlerMenu').style.display="flex";
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

       
          
        }   


        function jjjC_jjjResetBtn() {
            document.getElementsByClassName('jjjjarrowOff')[0].style.display="none";
            document.getElementsByClassName('jjjjarrowTopBtnn')[0].style.display="flex";

            jjjC_rotation = "rotateY(0deg) rotateX(-90deg) translateZ(4.5em)";
            jjjC_applyRotation(jjjC_rotation);

            setTimeout(function(){
            jjjC_rotation = "rotateY(0deg) rotateX(0deg) translateZ(4.5em)";



            for (let i = 0; i < jjjBehDaPages.length; i++) {
                jjjBehDaPages[i].style.zIndex = 25;
                jjjBehDaPages[i].classList.remove('jjjBehClassRotateOrNot');
                setTimeout(function(){
                    jjjBehbookTop.style.borderTopColor="rgb(237, 185, 67)";
                  jjjBehcardBottom.style.borderTopColor="rgb(237, 185, 67)";
              
                  },900);
            }





            document.getElementById('jjjBookEnviromentTableEffect').classList.remove('jjjBookEnviromentTableEffectAdd');
         
           
           jjjC_applyRotation(jjjC_rotation);
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