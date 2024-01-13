//======================================Gallery======================================//
const iroGalleryItem=document.getElementsByClassName('iroGalleryItem');

for (let iroGal=0;iroGal<iroGalleryItem.length;iroGal++){
    iroGalleryItem[iroGal].addEventListener('click',function(){
        let giveHimTheThis=this;
        openGalDescription(giveHimTheThis);
    })
}

  function openGalDescription(IamTheOne){
   
    for (let iroGal=0;iroGal<iroGalleryItem.length;iroGal++){
    iroGalleryItem[iroGal].classList.remove('iroGalleryItemDesIsOn');
    iroGalleryItem[iroGal].querySelector('.iroGalleryImage').classList.remove('iroGalleryImageDescriptionOn');
    iroGalleryItem[iroGal].querySelector('.iroGalleryItemDescription').classList.remove('iroGalleryItemDescriptionOn');
        }

        IamTheOne.classList.add('iroGalleryItemDesIsOn');
        IamTheOne.querySelector('.iroGalleryImage').classList.add('iroGalleryImageDescriptionOn');
        IamTheOne.querySelector('.iroGalleryItemDescription').classList.add('iroGalleryItemDescriptionOn');
  }


//===========================scroll to section======================================================//

const navListScroll = document.getElementsByClassName('navListScroll');











//========================================Button Hide or show====================================//

const iroShowButton=document.getElementById('iroButtonForHideOrNot_Show');
const iroHideButton=document.getElementById('iroButtonForHideOrNot_Hide');
const iroHeader=document.getElementsByClassName('iroHideOrNot')[0];

iroShowButton.addEventListener('click',function(){
    showMainMenu();
})
iroHideButton.addEventListener('click',function(){
    hideMainMenu();
})


    function  showMainMenu(){
        iroShowButton.style.display="none";
        iroHideButton.style.display="flex";

        iroHeader.classList.remove('iroHideMainMenuClass');
        iroHeader.classList.add('iroShowMainMenuClass');

    }




  function   hideMainMenu(){
    iroHideButton.style.display="none";
    iroShowButton.style.display="flex";

    iroHeader.classList.remove('iroShowMainMenuClass');
    iroHeader.classList.add('iroHideMainMenuClass');
    }


//========================================type effect====================================//
//vale edw tis protaseis sou...

let sentencesOfTypeEffect=[
    "Developer",
    "Artist",
    "Gamer",
    "Woman"
]

let counterOfSentences=0;
let currentSentence;
let i=0;

function typeIt(){  
    
    
currentSentence=sentencesOfTypeEffect[counterOfSentences];

                                    //allakse to 150 sto xrono pou theleis gia na grafei ana char...
let repeatIt=setInterval(generateItYourWay,150);   

function generateItYourWay(){
    
    document.getElementsByClassName('theSlashEffect')[0].style.animationName="none";
    document.getElementById('generatedTextHere').textContent+= currentSentence.charAt(i);    
     i++;    
    if (i==currentSentence.length){
        clearInterval(repeatIt);
        i=0;
        document.getElementsByClassName('theSlashEffect')[0].style.animationName="theSlashEffectc";
        deleteIt();
    }

}




function deleteIt(){
    setTimeout(function(){
  
        document.getElementsByClassName('theSlashEffect')[0].style.animationName="none";
      let typedTextToBeDeleted=document.getElementById('generatedTextHere').textContent.length;
   
      let DeleteForNew= setInterval(function(){       
  
      document.getElementById('generatedTextHere').textContent= document.getElementById('generatedTextHere').textContent.slice(0,-1);    
      typedTextToBeDeleted=typedTextToBeDeleted-1;
      if (typedTextToBeDeleted==0){
        
        
        clearInterval(DeleteForNew);
        document.getElementsByClassName('theSlashEffect')[0].style.animationName="theSlashEffectc";   
        counterOfSentences=counterOfSentences+1;
         if (counterOfSentences==(sentencesOfTypeEffect.length)){
         counterOfSentences=0;
         }
         
         typeIt();
    
    }
             //allakse to 25 sto xrono pou theleis na svinei to deuterolepto...
         },40);  
             },4000);

}

}


typeIt();