


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

