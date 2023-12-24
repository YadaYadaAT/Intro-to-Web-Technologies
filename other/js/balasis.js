

(function() {



    document.addEventListener("DOMContentLoaded",function(){
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
            this.parentNode.parentNode.querySelector("h2").style.width="70%";
        })
    }
    for(let k=0;k<ReadMores.length;k++){
        ReadMores[k].addEventListener("click",function(){
            for (let qq=0;qq<HomePageMini.length;qq++){
                
                HomePageMini[qq].parentNode.parentNode.classList.remove("jHomePageMenuItemAddHeight");
                HomePageMini[qq].parentNode.parentNode.querySelector(".jHomePageMenuItemContent").classList.add("jHomePageMenuItemContentFog");
                HomePageMini[qq].parentNode.style.display="none"; 
                HomePageMini[qq].parentNode.parentNode.querySelector(".jHomePageReadMore").style.display="flex";
                HomePageMini[qq].parentNode.parentNode.querySelector("h2").style.width="70%";
            }
            this.parentNode.parentNode.parentNode.classList.add("jHomePageMenuItemAddHeight");           
            this.parentNode.parentNode.parentNode.querySelector(".jHomePageMenuItemContent").classList.remove("jHomePageMenuItemContentFog");
            this.parentNode.parentNode.parentNode.querySelector(".jHomePageMinimizerHolder").style.display="flex";
            this.parentNode.parentNode.parentNode.scrollIntoView({ behavior: 'smooth' });
            this.style.display="none"; 
            this.parentNode.parentNode.parentNode.querySelector("h2").style.width="100%";
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
    
    
   let jFullTime=jDateNoww +" at " +jClockNow +" "+ jAmOrPmSign ;
   //Adding the name and I will combine these two since it will go to the same div.
   let jMantiseName="<b>Wordy Mantis</b>";
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
    
    
   let jFullTime=jDateNoww +" at " +jClockNow +" "+ jAmOrPmSign ;
   //Adding the name and I will combine these two since it will go to the same div.
   let jMantiseName="<b>Wordy Mantis</b>";
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









})


})(); 