(function() {

    document.addEventListener("DOMContentLoaded",function(){



        //Preview Image....I just took the same I made for the home page and replaced
        //some variable names.
        const jjjImg = document.getElementsByClassName('jjjclickableImage');
        const jjjprev = document.getElementById('jjjHomePageImgPreview');
        const jjjImgIn = document.getElementById('jjjHomePageImgPreviewIn');
        // I add to each one of the images the listener
        for (p=0;p<jjjImg.length;p++){
            jjjImg[p].addEventListener('click', jjjhandleImageClick);
        }


        function jjjhandleImageClick(event) {
            event.stopPropagation();
            let jjjgetTheSrc=this.getAttribute('data-src');
            let jjjgetTheDescription=this.getAttribute('data-description');
            jjjImgIn.setAttribute("src",jjjgetTheSrc);
        
            document.getElementById("jjjHomePageImgPreviewInDescription").innerHTML=jjjgetTheDescription;
            jjjprev.style.display = 'block';
            document.addEventListener('click', jjjhandleOutsideClickOnce);
        
            function jjjhandleOutsideClickOnce() {
                jjjImgIn.setAttribute("src","#");
                document.getElementById("jjjHomePageImgPreviewInDescription").innerHTML=" ";
                jjjprev.style.display = 'none';
                document.removeEventListener('click', jjjhandleOutsideClickOnce);
            }
        }


        //Scroll back into view ..into the fakeHeader...
        document.getElementById('jjjScrollBackToTop').addEventListener('click',()=>{
            document.getElementById('jjjFakeHeader').scrollIntoView({behavior: 'smooth'});
        })







        let jjjDisplayNoneSwapElements=document.getElementsByClassName('jjjTextElementToHide');


    /*==========================First Set of Circles(outer)===========================*/
            let jjjCurrentRotatePosition='rotate(0deg)';
            let jjjcounterRotate;
            let jjjZeroThisBecauseIcant=0;
            let jjjMakeItTwoSeven=270;
            let jjjLoadingSafety=false;
            let jjjToolWheels=document.getElementsByClassName('jjjCircleFrameToolWheel');
            let jjjToolWheelsRot=document.getElementsByClassName('jjjCircleFrameToolWheelRot');
            let jjjouterDecoration=document.getElementById('jjjouterDecoration');

            let jjjCircleFrameCounterRotate=document.getElementsByClassName('jjjCircleFrameCounterRotate');

            let jjjHobbyListener= document.getElementById('jjjCircleFrame1');
            let jjjGamingListener=document.getElementById('jjjCircleFrame2');
            let jjjAboutMeListener= document.getElementById('jjjCircleFrame3');
            let jjjWorkListener= document.getElementById('jjjCircleFrame4');

            jjjHobbyListener.addEventListener('click',function(){
                        jjjRotate(this,180);
                    }
                );
                jjjGamingListener.addEventListener('click',function(){
                    jjjRotate(this,90);
                }
            );
            jjjAboutMeListener.addEventListener('click',function(){
                jjjRotate(this,0);
            }
            );
            jjjWorkListener.addEventListener('click',function(){
                jjjRotate(this,270);
            }
            );

        


        function jjjRotate(jjjTar,rotateValue){
            if(jjjLoadingSafety==false){
             if (jjjTar.parentNode.style.transform!=="rotate("+rotateValue+"deg)"){  
                jjjLoadingSafety=true;
                
                //counter rotate the holder of all tools
               // document.getElementById('jjjToolsWrapperCounterRotate').style.transform="rotate(-"+rotateValue+"deg)";

                //rotate the tools
                for (let k=0;k<jjjToolWheels.length;k++){

                    jjjToolWheels[k].style.transform="rotate("+rotateValue+"deg)";
                    
                }
                for (let q=0;q<jjjToolWheelsRot.length;q++){

                    jjjToolWheelsRot[q].style.transform="rotate(-"+rotateValue+"deg)";
                    
                }
                
            //Resetting animations..
            jjjTar.parentNode.style.transition="transform 2s cubic-bezier(0.45, 0, 0.35, 1)";
            for (let i=0;i<jjjCircleFrameCounterRotate.length;i++){
                jjjCircleFrameCounterRotate[i].style.transition="transform 2s cubic-bezier(0.45, 0, 0.35, 1)";
            }



            if (jjjCurrentRotatePosition=='rotate(0deg)' && rotateValue==270){
                jjjouterDecoration.classList.remove('jjjchosenCircle');
                //Here I change the values for animation...then I reset for the next time. So it wont go anticlockwise from 270->0
                rotateValue=-90;
                jjjcounterRotate=90;
                jjjTar.parentNode.style.transform="rotate("+rotateValue+"deg)";
                for (let i=0;i<jjjCircleFrameCounterRotate.length;i++){
                    jjjCircleFrameCounterRotate[i].style.transform="rotate("+jjjcounterRotate+"deg)";
                }
               
                //I put a delay to let the animation end before I reset
                setTimeout(function(){  jjjouterDecoration.classList.add('jjjchosenCircle');  } ,50);


                setTimeout(function(){
                    jjjTar.parentNode.style.transition="none";
                    jjjTar.parentNode.style.transform="rotate("+jjjMakeItTwoSeven+"deg)";
                    jjjcounterRotate=-270;
                    for (let i=0;i<jjjCircleFrameCounterRotate.length;i++){
                        jjjCircleFrameCounterRotate[i].style.transition="none";
                        jjjCircleFrameCounterRotate[i].style.transform="rotate("+jjjcounterRotate+"deg)";                        
                         rotateValue='rotate(270deg)';
                        jjjCurrentRotatePosition= rotateValue;
                        jjjLoadingSafety=false;
                      
                    }
                } ,2010)
                
                

               


            }else if(jjjCurrentRotatePosition=='rotate(270deg)' && rotateValue==0){
                jjjouterDecoration.classList.remove('jjjchosenCircle');
                rotateValue=360;
                jjjcounterRotate=-360;
                jjjTar.parentNode.style.transform="rotate("+rotateValue+"deg)";
                for (let l=0;l<jjjCircleFrameCounterRotate.length;l++){
                    jjjCircleFrameCounterRotate[l].style.transform="rotate("+jjjcounterRotate+"deg)";
                }

                setTimeout(function(){  jjjouterDecoration.classList.add('jjjchosenCircle');  } ,50);

              

                setTimeout(function(){
                jjjTar.parentNode.style.transition="none";
                jjjTar.parentNode.style.transform="rotate("+jjjZeroThisBecauseIcant+"deg)";

                for (let i=0;i<jjjCircleFrameCounterRotate.length;i++){
                    jjjCircleFrameCounterRotate[i].style.transition="none";
                    jjjCircleFrameCounterRotate[i].style.transform="rotate("+jjjcounterRotate+"deg)";
                    rotateValue='rotate(0deg)';
                    jjjCurrentRotatePosition= rotateValue;
    
                    jjjcounterRotate=0;
                    jjjLoadingSafety=false;
                  
                }

                 } ,2010)
                
            
                


            }else{
                jjjouterDecoration.classList.remove('jjjchosenCircle');
                jjjTar.parentNode.style.transform="rotate("+rotateValue+"deg)";
                let jjjNeedThisPlz=jjjTar.parentNode.style.transform;
                jjjCurrentRotatePosition=jjjNeedThisPlz;

                jjjcounterRotate="-"+rotateValue;
            for (let s=0;s<jjjCircleFrameCounterRotate.length;s++){
                jjjCircleFrameCounterRotate[s].style.transform="rotate("+jjjcounterRotate+"deg)";
            }
           

            setTimeout(function(){  jjjouterDecoration.classList.add('jjjchosenCircle');  } ,50);  
            setTimeout(function(){
            jjjLoadingSafety=false;
           
                   }
                          ,2010)
            }
               
               

            let jjjHobbyListener= document.getElementById('jjjCircleFrame1');
            let jjjGamingListener=document.getElementById('jjjCircleFrame2');
            let jjjAboutMeListener= document.getElementById('jjjCircleFrame3');
            let jjjWorkListener= document.getElementById('jjjCircleFrame4');




            setTimeout(function(){
        if (jjjTar==jjjAboutMeListener){
            for (let m=0;m<jjjDisplayNoneSwapElements.length;m++){
                jjjDisplayNoneSwapElements[m].style.display="none";
            }

            document.getElementById('jjjAboutMe').style.display="flex";



        }else if(jjjTar==jjjGamingListener){

            for (let m=0;m<jjjDisplayNoneSwapElements.length;m++){
                jjjDisplayNoneSwapElements[m].style.display="none";
            }
            document.getElementById('jjjGaming').style.display="flex";




        }else if(jjjTar==jjjHobbyListener){

            for (let m=0;m<jjjDisplayNoneSwapElements.length;m++){
                jjjDisplayNoneSwapElements[m].style.display="none";
            }
            document.getElementById('jjjHobby').style.display="flex";




        }else if(jjjTar==jjjWorkListener){

            for (let m=0;m<jjjDisplayNoneSwapElements.length;m++){
                jjjDisplayNoneSwapElements[m].style.display="none";
            }
            document.getElementById('jjjWork').style.display="flex";
        }
            }
              ,2010);







           
             }
         }
        }





        /*==========================Second Set of Circles(inner)===========================*/

        let jjjSCircleFrameFirstCircleCounterRotate=document.getElementsByClassName('jjjCircleFrameFirstCircleCounterRotate');
        let jjjSouterDecoration=document.getElementById('jjjUpperPick');
       
        document.getElementById('jjjCircleFrameFirstCircle1').addEventListener('click',function(){
            let jjjWhoAsks=this;
            jjjSRotate(jjjWhoAsks,180);
        })
        document.getElementById('jjjCircleFrameFirstCircle2').addEventListener('click',function(){
            let jjjWhoAsks=this;
            jjjSRotate(jjjWhoAsks,0);
        })

        let jjjSloadingProtection=false;
        function jjjSRotate(jjjWhoAsks,jjjSrotation){ 



            for (let k=0;k<jjjToolWheels.length;k++){

                jjjToolWheels[k].style.transform="rotate("+jjjSrotation+"deg)";
                
            }
            for (let q=0;q<jjjToolWheelsRot.length;q++){

                jjjToolWheelsRot[q].style.transform="rotate(-"+jjjSrotation+"deg)";
                
            }





            if (jjjSloadingProtection==false){
                    if (jjjWhoAsks.parentNode.style.transform!=="rotate("+jjjSrotation+"deg)"){
                jjjSloadingProtection=true;
                jjjSouterDecoration.classList.remove('jjjChosenAnimationSmall');

                   


                const jjjElements = document.getElementsByClassName('jjjSmoky');
                const jjjDuration = 4000; 
                const jjjIntervalTime = 500; 


                for (const jjjElement of jjjElements) {
                const jjjrandomOpacity = Math.random();
                jjjElement.style.opacity = jjjrandomOpacity;
                }

                const jjjopacityInterval = setInterval(() => {
                for (const jjjElement of jjjElements) {
                    //parseFloats convert string to number
                    const jjjcurrentOpacity = parseFloat(jjjElement.style.opacity) || 0;
                    const jjjnewOpacity = Math.max(0, jjjcurrentOpacity - 0.1);
                    jjjElement.style.opacity = jjjnewOpacity;
                }
                }, jjjIntervalTime);

                setTimeout(() => {
                clearInterval(jjjopacityInterval); 
                for (const jjjElement of jjjElements) {
                    const jjjrandomOpacity = Math.random();
                    jjjElement.style.opacity = 0;
                    }
                }, jjjDuration);

            jjjWhoAsks.parentNode.style.transform="rotate("+jjjSrotation+"deg)";   
              setTimeout(function(){  jjjSouterDecoration.classList.add('jjjChosenAnimationSmall');  } ,50);
                jjjScounterRotate="-"+jjjSrotation;
                document.getElementById('jjjCircleFrameFirstCircleCenterTool').style.transform="rotate(-"+jjjSrotation+"deg)"; 
            for (let i=0;i<jjjSCircleFrameFirstCircleCounterRotate.length;i++){
                jjjSCircleFrameFirstCircleCounterRotate[i].style.transform="rotate("+jjjScounterRotate+"deg)";
            }   
            setTimeout(function(){
                jjjSloadingProtection=false;
            },2001);

            if (jjjSrotation==180){
                document.getElementById('jjjTextParentFrame').style.marginLeft="4001px";
                document.getElementById('jjjHalfForPick').style.transform="rotate(-900deg)";
                document.getElementById('jjjFakeHeader').style.backgroundColor="white";

                document.getElementById('jjjcustomStyles').textContent ='#jjjGoHomeSora::before { background-image: url(../../images/Balasis/myPage/crownblack.png); }';
                document.getElementById('jjjGoHomeSora').style.color="black";
               setTimeout(function(){ 
                  document.getElementById('jjjTextParentFrame').style.display="none";
                  document.getElementById('jjjYadaYada').style.display="flex";
                  document.getElementById('jjjYadaYada').scrollIntoView({behavior: 'smooth'})
            },2000);
            }else{ 
                document.getElementById('jjjGoHomeSora').style.color="white";
                document.getElementById('jjjcustomStyles').textContent ="";
            document.getElementById('jjjYadaYada').style.display="none";
            document.getElementById('jjjTextParentFrame').style.display="flex";
            document.getElementById('jjjFakeHeader').style.backgroundColor="";
              setTimeout(function(){ 
                document.getElementById('jjjTextParentFrame').style.marginLeft="";
                document.getElementById('jjjHalfForPick').style.transform="rotate(0deg)";
               
           },1100);
            }
            


        }

        } 


        }










    })



})();