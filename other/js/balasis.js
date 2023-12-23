

(function() {
    document.addEventListener("DOMContentLoaded",function(){
        
        const imagesOfHomePageMenu=document.getElementsByClassName("jHomepageMenuImg");
        for (let i=0;i<imagesOfHomePageMenu.length;i++){
            if (imagesOfHomePageMenu[i].style.cssFloat=="right"){
                imagesOfHomePageMenu[i].classList.add("jAddPaddingLeftToImg");
               
            }else{
                imagesOfHomePageMenu[i].classList.add("jAddPaddingRightToImg");
            }
        }
    

   
    const ReadMores=document.getElementsByClassName("jHomePageReadMore");
    for(let k=0;k<ReadMores.length;k++){
        ReadMores[k].addEventListener("click",function(){

            const HomePageMini=document.getElementsByClassName("jHomePageMinimizerHolder");
            for (let qq=0;qq<HomePageMini.length;qq++){
                HomePageMini[qq].click();
            }

            this.parentNode.parentNode.parentNode.classList.add("jHomePageMenuItemAddHeight");
   this.parentNode.parentNode.parentNode.querySelector("jHomePageMenuItemContent").style.setProperty('--before-content', 'none');
   this.parentNode.parentNode.parentNode.querySelector("jHomePageMenuItemContent").style.setProperty('--after-content', 'none');
            

        })
    }  


})

})(); 