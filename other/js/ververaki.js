


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


  //make a function that accepts the url of the page, parses it to get the path
  // and then finds which of the list items in header contains that path (parse from <li> to </li>)
  // use #ids on the list items to be able to change => color: orange; on the list item that matches the search


  //get current path
  const currentPath = window.location.pathname;

  //create a dummy dom element and pass the html string to it (the entire list of paths)

  var dummyList = document.createElement('html');
  dummyList.innerHTML = "<div id='info-content'> <ul class='infoList'> <li><a href='html/species.html' id='speciesInList'>Species</a></li> <li><a href='html/behavior.html' id='behaviorInList'>Behavior</a></li> <li><a href='html/lifeCycle.html' id='lifeCycleInList'>Life Cycle</a></li> <li><a href='html/habitats.html' id='habitatsInList'>Habitats</a></li> <li><a href='html/care.html' id='careInList'>Care</a></li> </ul> </div></li> <li><div class='menuItem' id='resource' onclick='dropResources();'>Resources</div> <div id='resources-content'> <ul> <li><a href='html/resources.html' id='resourcesInList'>Our Sources</a></li> <li><a href='html/faq.html' id='faqInList'>FAQ</a></li> </ul> </div> </li>"

  //parse the list items 
  dummyList.getElementsByTagName(' a ').getAttribute("href");

  //create a list to put all the items in

  hrefList = 

  //iterate through all the items in the list and check for the paths to match 
for (i in hrefList) {
  if (currentPath === hrefList[i]){
    document.getElementById().style.color("orange")
  };
}
