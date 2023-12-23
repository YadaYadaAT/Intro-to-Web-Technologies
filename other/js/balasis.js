

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
        })
    }
    for(let k=0;k<ReadMores.length;k++){
        ReadMores[k].addEventListener("click",function(){
            for (let qq=0;qq<HomePageMini.length;qq++){
                
                HomePageMini[qq].parentNode.parentNode.classList.remove("jHomePageMenuItemAddHeight");
                HomePageMini[qq].parentNode.parentNode.querySelector(".jHomePageMenuItemContent").classList.add("jHomePageMenuItemContentFog");
                HomePageMini[qq].parentNode.style.display="none"; 
                HomePageMini[qq].parentNode.parentNode.querySelector(".jHomePageReadMore").style.display="flex";
            
            }
            this.parentNode.parentNode.parentNode.classList.add("jHomePageMenuItemAddHeight");           
            this.parentNode.parentNode.parentNode.querySelector(".jHomePageMenuItemContent").classList.remove("jHomePageMenuItemContentFog");
            this.parentNode.parentNode.parentNode.querySelector(".jHomePageMinimizerHolder").style.display="flex";
            this.parentNode.parentNode.parentNode.scrollIntoView({ behavior: 'smooth' });
            this.style.display="none";    
        })
    }  


})

})(); 