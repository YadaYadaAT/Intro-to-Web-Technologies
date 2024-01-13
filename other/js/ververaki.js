



function changeIcon(anchor) {
    
    anchor.classList.toggle("fa-toggle-on");
}

function dropInfo(){

    var anchor = document.getElementById("info-content");
    if (anchor.style.display === "none") {
        anchor.style.display = "block";
    } else {
        anchor.style.display = "none";
    }

    
};

function dropResources(){
  var anchor = document.getElementById("resources-content");
    if (anchor.style.display === "none") {
        anchor.style.display = "block";
    } else {
        anchor.style.display = "none";
    }
};

// function slideMenu(){
//     var anchor = document.getElementById("sidebar-menu");
//     if (anchor.style.visibility === "hidden") {
//         anchor.style.visibility = "visible";
//         anchor.style.left = "0";
        
//     } else {
//         anchor.style.visibility = "hidden";
//     }
// }




window.onload = () => {


    const menu = document.querySelector(".menu");
    const hamburger= document.querySelector(".hamburger");
    const closeIcon= document.querySelector(".closeIcon");
    const menuIcon = document.querySelector(".menuIcon");
    
    function toggleMenu() {
        
      if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
      } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
      }
    }

    hamburger.addEventListener("click", toggleMenu);
  };


//   //make a function that accepts the url of the page, parses it to get the path
//   // and then finds which of the list items in header contains that path (parse from <li> to </li>)
//   // use #ids on the list items to be able to change => color: orange; on the list item that matches the search


//   //get current path
//   const currentPath = window.location.pathname;

//   //create a dummy dom element and pass the html string to it (the entire list of paths)

//   var dummyList = document.createElement('html');
//   dummyList.innerHTML = "<div id='info-content'> <ul class='infoList'> <li><a href='html/species.html' id='speciesInList'>Species</a></li> <li><a href='html/behavior.html' id='behaviorInList'>Behavior</a></li> <li><a href='html/lifeCycle.html' id='lifeCycleInList'>Life Cycle</a></li> <li><a href='html/habitats.html' id='habitatsInList'>Habitats</a></li> <li><a href='html/care.html' id='careInList'>Care</a></li> </ul> </div></li> <li><div class='menuItem' id='resource' onclick='dropResources();'>Resources</div> <div id='resources-content'> <ul> <li><a href='html/resources.html' id='resourcesInList'>Our Sources</a></li> <li><a href='html/faq.html' id='faqInList'>FAQ</a></li> </ul> </div> </li>"

//   //parse the list items 
//   dummyList.getElementsByTagName(' a ').getAttribute("href");

//   //create a list to put all the items in

//   hrefList = 

//   //iterate through all the items in the list and check for the paths to match 
// for (i in hrefList) {
//   if (currentPath === hrefList[i]){
//     document.getElementById().style.color("orange")
//   };
// }

///======================================================world map=================================================///



let IroCurrentWidth = 100; // Initial width percentage
let IroWidthStep = 20; // Width increment or decrement on each wheel event
let IroMinWidth = 100; // Minimum width percentage
let IroMaxWidth = 400; // Maximum width percentage

let IroCurrentHeight = 100; // Initial height percentage
let IroHeightStep = 20; // Height increment or decrement on each wheel event
let IroMinHeight = 100; // Minimum height percentage
let IroMaxHeight = 400; // Maximum height percentage

let IroWrapper = document.getElementById('iroWorldMapScaleIt');
let IroWasAt100Percent = false; // Variable to track if the height was at 100%

IroWrapper.addEventListener('wheel', function (event) {
  event.preventDefault();

  // Save current scroll position as a percentage
  let IroScrollLeftPercentage = (IroWrapper.scrollLeft / (IroWrapper.scrollWidth - IroWrapper.clientWidth)) * 100;
  let IroScrollTopPercentage = (IroWrapper.scrollTop / (IroWrapper.scrollHeight - IroWrapper.clientHeight)) * 100;

  // Determine the direction of the wheel
  let IroDelta = event.deltaY > 0 ? -1 : 1;

  // Update the width
  let IroNewWidth = IroCurrentWidth + IroDelta * IroWidthStep;
  IroNewWidth = Math.min(Math.max(IroNewWidth, IroMinWidth), IroMaxWidth);

  // Update the height
  let IroNewHeight = IroCurrentHeight + IroDelta * IroHeightStep;
  IroNewHeight = Math.min(Math.max(IroNewHeight, IroMinHeight), IroMaxHeight);

  // Check if the height was at 100%
  if (IroCurrentHeight === 100 && IroNewHeight === 120) {
    IroWrapper.classList.remove('grabbing');
    IroWasAt100Percent = true;
  }

  // Apply the new dimensions to #iroWorldMap
  document.getElementById('iroWorldMap').style.width = IroNewWidth + '%';
  document.getElementById('iroWorldMap').style.height = IroNewHeight + '%';

 
  if (IroWasAt100Percent && IroDelta > 0) {
    
   
    IroWrapper.scrollLeft = (IroWrapper.scrollWidth - IroWrapper.clientWidth) / 2;
    IroWrapper.scrollTop = (IroWrapper.scrollHeight - IroWrapper.clientHeight) / 2;
    IroWasAt100Percent = false; 

    IroWrapper.classList.add('grabbing');
  } else {
    IroWrapper.classList.add('grabbing');
    IroWrapper.scrollLeft = (IroScrollLeftPercentage / 100) * (IroWrapper.scrollWidth - IroWrapper.clientWidth);
    IroWrapper.scrollTop = (IroScrollTopPercentage / 100) * (IroWrapper.scrollHeight - IroWrapper.clientHeight);
    
  }

  IroCurrentWidth = IroNewWidth;
  IroCurrentHeight = IroNewHeight;
if (IroCurrentHeight==100){
  IroWrapper.classList.remove('grabbing');
}

});

let IroIsDragging = false;
let IroStartDragX, IroStartDragY, IroStartScrollLeft, IroStartScrollTop;

IroWrapper.addEventListener('mousedown', function (event) {
  IroIsDragging = true;
  IroStartDragX = event.clientX;
  IroStartDragY = event.clientY;
  IroStartScrollLeft = IroWrapper.scrollLeft;
  IroStartScrollTop = IroWrapper.scrollTop;

 
});

document.addEventListener('mousemove', function (event) {
  if (IroIsDragging) {
    let IroDeltaX = event.clientX - IroStartDragX;
    let IroDeltaY = event.clientY - IroStartDragY;

    IroWrapper.scrollLeft = IroStartScrollLeft - IroDeltaX;
    IroWrapper.scrollTop = IroStartScrollTop - IroDeltaY;
  }
});

document.addEventListener('mouseup', function () {
  if (IroIsDragging) {
    IroIsDragging = false;


  
  }
});







let iromantidaeDescriptionBrazil = "<p>The <strong>Mantidae</strong> family, commonly known as mantises or praying mantises, is a fascinating group of insects with a global presence. Within the vast landscapes of Brazil, the Mantidae family thrives in diverse ecosystems, ranging from the dense Amazon rainforest to the expansive savannas of the Cerrado. These adept predators are known for their remarkable camouflage and agile hunting techniques, making them an integral part of the intricate web of life in the South American country.</p>";

let iromantidaeDescriptionUSA = "<p>In the United States, mantises from the <strong>Mantidae</strong> family can be found in a variety of habitats, including gardens, meadows, and even urban environments. Their adaptability to different climates and their ability to camouflage among plants make them a common sight in many states. From the East Coast to the West Coast, these remarkable insects play a crucial role in controlling insect populations, contributing to the delicate balance of ecosystems in the USA.</p>";

let iromantidaeDescriptionIndia = "<p>India, with its rich biodiversity, also hosts diverse species from the <strong>Mantidae</strong> family. From the lush Western Ghats to the arid landscapes of Rajasthan, mantises have adapted to a wide range of environmental conditions. The intricate patterns on their bodies and their patient hunting behavior make them not only effective predators but also subjects of intrigue for nature enthusiasts and researchers alike in the Indian subcontinent.</p>";

let irointeractiveMapNote = "<p>As you explore the interactive map showcasing the distribution of the <strong>Mantidae</strong> family, you'll witness the interconnectedness of these insects with their respective environments. Each region contributes to the unique characteristics of mantises within the Mantidae family, reflecting the adaptability and diversity of these captivating insects across the globe.</p>";





let IroMantidaeData = {
  title: "Mantidae",
  imageUrl: "../../images/Ververaki/worldMap/Mantidae.jpg",
  paragraphText: iromantidaeDescriptionBrazil + iromantidaeDescriptionUSA + iromantidaeDescriptionIndia + irointeractiveMapNote
};



  let hymenopodidaeDescriptionCameroon= "<p>The <strong>Hymenopodidae</strong> family, known for its distinctive mantis species, thrives in the diverse ecosystems of Cameroon. From the dense rainforests to the savannas, these mantises have adapted to various environments, displaying unique behaviors and characteristics that contribute to the rich biodiversity of the African nation.</p>";
  
  let hymenopodidaeDescriptionAustralia= "<p>In the vast landscapes of Australia, the <strong>Hymenopodidae</strong> family's mantises are a fascinating presence. Ranging from the arid Outback to the coastal regions, these mantises showcase adaptability to different climates and habitats. Their roles in local ecosystems emphasize their importance in maintaining ecological balance in the Australian continent.</p>";
  
  let hymenopodidaeDescriptionMalaysia= "<p>Malaysia, with its lush rainforests and diverse ecosystems, provides a habitat for various species within the <strong>Hymenopodidae</strong> family. From the peninsular regions to the islands, mantises in Malaysia exhibit unique behaviors and appearances. The intricate relationship between these mantises and their environments contributes to the biological richness of Southeast Asia.</p>";
  
  let hymenopodidaeInteractiveMapNote= "<p>Embark on a virtual journey through our interactive map to explore the distribution of the <strong>Hymenopodidae</strong> family. Witness the captivating connection between these mantises and the specific regions they inhabit—Cameroon, Australia, and Malaysia. Each click on our map unveils a world of information, highlighting the significance of these remarkable insects in different corners of the globe.</p>";



let IroHymenopodidaeData = {
  title: "Hymenopodidae",
  imageUrl: "../../images/Ververaki/worldMap/Hymenopodidae.jpg",
  paragraphText: hymenopodidaeDescriptionCameroon+hymenopodidaeDescriptionAustralia+hymenopodidaeDescriptionMalaysia+hymenopodidaeInteractiveMapNote
};



let empusidaeDescriptionSpain = "<p>The <strong>Empusidae</strong> family, characterized by its distinct mantis species, finds a home in the picturesque landscapes of Spain. From the Iberian Peninsula to the Balearic Islands, these mantises exhibit remarkable adaptations to the Mediterranean climate, showcasing a unique blend of beauty and predatory prowess.</p>";

let empusidaeDescriptionAfrica = "<p>In the diverse ecosystems of Africa, the <strong>Empusidae</strong> family's mantises contribute to the continent's rich biodiversity. Whether in the dense rainforests, expansive savannas, or arid deserts, these mantises have evolved to thrive in a variety of environments, playing a vital role in the intricate web of life across Africa.</p>";

let empusidaeDescriptionThailand = "<p>Thailand, with its tropical landscapes and vibrant biodiversity, hosts various species within the <strong>Empusidae</strong> family. From the northern mountains to the southern coastal areas, these mantises display unique behaviors and adaptations. Their presence adds to the ecological diversity of Southeast Asia, making them a captivating subject of study and observation.</p>";

let empusidaeInteractiveMapNote = "<p>Explore the distribution of the <strong>Empusidae</strong> family on our interactive map, spanning regions in Spain, Africa, and Thailand. Each region contributes to the diversity of these mantises, and our map provides an engaging platform to learn more about their habitats, behaviors, and the ecological significance they hold in different parts of the world.</p>";


let IroEmpusidaeData = {
  title: "Empusidae",
  imageUrl: "../../images/Ververaki/worldMap/Empusidae.jpg",
  paragraphText : empusidaeDescriptionSpain + empusidaeDescriptionAfrica + empusidaeDescriptionThailand + empusidaeInteractiveMapNote
};


let liturgusidaeDescriptionPeru = "<p>The <strong>Liturgusidae</strong> family, with its unique mantis species, thrives in the diverse landscapes of Peru. From the Andes Mountains to the Amazon rainforest, these mantises have adapted to a range of ecosystems, showcasing their remarkable features and behaviors amidst the rich biodiversity of South America.</p>";

let liturgusidaeDescriptionEcuador = "<p>In the enchanting country of Ecuador, the <strong>Liturgusidae</strong> family's mantises play a role in the country's ecological tapestry. Whether in the cloud forests, coastal regions, or the Galápagos Islands, these mantises exhibit diverse adaptations, contributing to the intricate balance of nature in this unique part of the world.</p>";

let liturgusidaeDescriptionColombia = "<p>Colombia, with its vast and varied landscapes, provides a habitat for the <strong>Liturgusidae</strong> family's mantises. From the high-altitude Andean regions to the lowland rainforests, these insects display fascinating characteristics. The interactions between these mantises and their environments contribute to the ecological diversity of Colombia in South America.</p>";

let liturgusidaeInteractiveMapNote = "<p>Discover the enchanting world of the <strong>Liturgusidae</strong> family as it thrives in the diverse landscapes of Peru, Ecuador, and Colombia. From the majestic Andes Mountains to the lush Amazon rainforest, these mantises have adapted to a range of ecosystems, showcasing their remarkable features and behaviors amidst the rich biodiversity of South America. Each region adds a unique touch to the story of these mantises, offering insights into their habitats, behaviors, and the crucial role they play in the intricate balance of nature.</p>";



let IroLiturgusidaeData = {
  title: "Liturgusidae",
  imageUrl: "../../images/Ververaki/worldMap/Liturgusidae.jpg",
  paragraphText : liturgusidaeDescriptionPeru + liturgusidaeDescriptionEcuador + liturgusidaeDescriptionColombia + liturgusidaeInteractiveMapNote
};


let deroplatyidaeDescriptionPhilippines = "<p>The captivating <strong>Deroplatyidae</strong> family, with its distinct mantis species, graces the archipelagic beauty of the Philippines. Within this tropical paradise, these mantises are found in diverse ecosystems, from the dense rainforests to coastal areas. The Philippines, known for its rich biodiversity, provides a habitat where Deroplatyidae mantises display fascinating behaviors and adaptations.</p>";

let deroplatyidaeDescriptionMalaysia = "<p>In the tropical landscapes of Malaysia, the <strong>Deroplatyidae</strong> family's mantises add to the biological tapestry of Southeast Asia. From the peninsular regions to the Borneo rainforests, these insects thrive in various habitats, showcasing their unique features. Malaysia's vibrant ecosystems offer an ideal setting for the Deroplatyidae family to exhibit their captivating behaviors.</p>";

let deroplatyidaeDescriptionIndonesia = "<p>Indonesia, with its vast archipelago and diverse ecosystems, hosts the <strong>Deroplatyidae</strong> family's mantises across its islands. From Sumatra to Papua, these mantises have adapted to the different climates and terrains found in the country. The lush rainforests and varied landscapes of Indonesia provide an intricate backdrop for the Deroplatyidae family to thrive and contribute to the ecological diversity of the region.</p>";




let IroDeroplatyidaeData = {
  title: "Deroplatyidae",
  imageUrl: "../../images/Ververaki/worldMap/Deroplatyidae.jpg",
  paragraphText : deroplatyidaeDescriptionPhilippines + deroplatyidaeDescriptionMalaysia + deroplatyidaeDescriptionIndonesia
};


let phyllocranidaeDescriptionPhilippines = "<p>The intriguing <strong>Phyllocranidae</strong> family, renowned for its distinctive mantis species, graces the diverse landscapes of the Philippines. In this archipelagic nation, these mantises inhabit a variety of environments, from the dense rainforests to coastal regions. The Philippines, known for its unparalleled biodiversity, provides an ideal home for the Phyllocranidae family, where they showcase remarkable behaviors and adaptations.</p>";

let phyllocranidaeDescriptionMalaysia = "<p>Amidst the tropical wonders of Malaysia, the <strong>Phyllocranidae</strong> family's mantises contribute to the vibrant tapestry of Southeast Asian ecosystems. From the peninsular regions to the biodiverse Borneo rainforests, these mantises thrive in diverse habitats, exhibiting unique features. Malaysia's lush landscapes offer an enchanting backdrop for the Phyllocranidae family to display their captivating behaviors.</p>";

let phyllocranidaeDescriptionIndonesia = "<p>Across the sprawling archipelago of Indonesia, the <strong>Phyllocranidae</strong> family's mantises can be found on various islands. From Sumatra to Papua, these mantises have adapted to the diverse climates and terrains present in Indonesia. The lush rainforests and varied landscapes of the country provide an intricate setting for the Phyllocranidae family to thrive, contributing to the ecological diversity of this remarkable region.</p>";

 



let IroPhyllocranidaeData = {
  title: "Phyllocranidae",
  imageUrl: "../../images/Ververaki/worldMap/Phyllocranidae.jpg",
  paragraphText : phyllocranidaeDescriptionPhilippines + phyllocranidaeDescriptionMalaysia + phyllocranidaeDescriptionIndonesia
};


let gonypetidaeDescriptionPapua = "<p>Explore the fascinating realm of the <strong>Gonypetidae</strong> family as it inhabits the diverse landscapes of Papua. In this region of New Guinea, these mantises find their home in a variety of ecosystems, from the dense rainforests to the mountainous terrains. Papua's unique biodiversity sets the stage for the Gonypetidae family to exhibit captivating behaviors and thrive amidst the rich natural tapestry.</p>";

let gonypetidaeDescriptionSolomonIslands = "<p>On the picturesque Solomon Islands, the <strong>Gonypetidae</strong> family's mantises add to the biological diversity of the South Pacific. From the lush rainforests to the coastal areas, these insects thrive in diverse habitats, showcasing unique features. The Solomon Islands provide an idyllic setting for the Gonypetidae family to flourish and contribute to the ecological balance of this tropical paradise.</p>";

let gonypetidaeDescriptionAustralia = "<p>In the expansive landscapes of Australia, the <strong>Gonypetidae</strong> family's mantises are a captivating presence. From the arid Outback to the coastal regions, these insects display adaptability to different climates and terrains. Australia's unique ecosystems offer an intriguing backdrop for the Gonypetidae family to showcase their diverse characteristics and play a vital role in maintaining ecological harmony.</p>";



let IroGonypetidaeData = {
  title: "Gonypetidae",
  imageUrl: "../../images/Ververaki/worldMap/Gonypetidae.jpeg",
  paragraphText : gonypetidaeDescriptionPapua + gonypetidaeDescriptionSolomonIslands + gonypetidaeDescriptionAustralia
};




function iroClickListener(event) {
  let secondClass = event.target.parentNode.classList[1];

  
  let title, imageUrl, paragraphText, effectClass;

  switch (secondClass) {
      case "IroMantidae":
          title = IroMantidaeData.title;
          imageUrl = IroMantidaeData.imageUrl;
          paragraphText = IroMantidaeData.paragraphText;
          effectClass = "IroMantidae";
          break;
      case "IroHymenopodidae":
          title = IroHymenopodidaeData.title;
          imageUrl = IroHymenopodidaeData.imageUrl;
          paragraphText = IroHymenopodidaeData.paragraphText;
          effectClass = "IroHymenopodidae";
          break;
          case "IroEmpusidae":
    title = IroEmpusidaeData.title;
    imageUrl = IroEmpusidaeData.imageUrl;
    paragraphText = IroEmpusidaeData.paragraphText;
    effectClass = "IroEmpusidae";
    break;

case "IroLiturgusidae":
    title = IroLiturgusidaeData.title;
    imageUrl = IroLiturgusidaeData.imageUrl;
    paragraphText = IroLiturgusidaeData.paragraphText;
    effectClass = "IroLiturgusidae";
    break;

case "IroDeroplatyidae":
    title = IroDeroplatyidaeData.title;
    imageUrl = IroDeroplatyidaeData.imageUrl;
    paragraphText = IroDeroplatyidaeData.paragraphText;
    effectClass = "IroDeroplatyidae";
    break;

case "IroPhyllocranidae":
    title = IroPhyllocranidaeData.title;
    imageUrl = IroPhyllocranidaeData.imageUrl;
    paragraphText = IroPhyllocranidaeData.paragraphText;
    effectClass = "IroPhyllocranidae";
    break;

case "IroGonypetidae":
    title = IroGonypetidaeData.title;
    imageUrl = IroGonypetidaeData.imageUrl;
    paragraphText = IroGonypetidaeData.paragraphText;
    effectClass = "IroGonypetidae";
    break;
     
      default:
         
          break;
  }

  
  document.querySelector(".iroWorldMapInfoTitleHolder h2").textContent = title;
  document.querySelector(".iroWorldMapInfoImageHolder").src = imageUrl;
  document.querySelector(".iroSomeTextHere").innerHTML = paragraphText;
  document.getElementById('iroWorldMapInfo').scrollTop=0;
  
  irotestPinElements.forEach(function (element) {
      if (element.parentNode.classList.contains(effectClass)) {
          element.classList.add("iroEffect"); 
      } else {
          element.classList.remove("iroEffect"); 
      }
  });
}

let iroScrollToTop=document.getElementById('iroScrollToTop').addEventListener('click',()=>{
  document.getElementById('iroWorldMapInfo').scrollIntoView({  behavior: 'smooth' });
} )

let irotestPinElements = document.querySelectorAll(".nameItPinId");
irotestPinElements.forEach(function (element) {
  element.addEventListener("click", iroClickListener);
});



