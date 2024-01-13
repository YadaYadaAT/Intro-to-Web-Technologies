

var images = [
    { src: "../images/Kokkinos/image4.jpg", caption: "A tan mantis stands alert, a silent sentinel in its sandy domain." },
    { src: "../images/Kokkinos/image5.jpg", caption: "A green mantis rests on a gentle hand, a meeting of nature and humanity." },
    { src: "../images/Kokkinos/image6.jpg", caption: "Amidst the dewy roses, a mantis lies in wait, nature's hidden gem." },
    { src: "../images/Kokkinos/image7.jpg", caption: "A red insect perches on a leaf, its slender form a perfect balance." },
    { src: "../images/Kokkinos/image8.jpg", caption: "In a serene stance, a green mantis contemplates the world around it." }
  ];
  
  var currentSlide = 0; 
  
  
  function showSlide(index) {
    var gallery = document.getElementById('gallery');
    
    if (index >= images.length) index = 0;
    if (index < 0) index = images.length - 1;
    currentSlide = index; 
  
    gallery.innerHTML = '';
  
   
    var imgElement = document.createElement('img');
    imgElement.src = images[index].src;
    gallery.appendChild(imgElement);
  
    var captionElement = document.createElement('div');
    captionElement.textContent = images[index].caption;
    captionElement.className = 'caption';
    gallery.appendChild(captionElement);
  
    var readMoreLink = document.createElement('a');
    readMoreLink.href = 'detailPage' + index + '.html'; 
    readMoreLink.textContent = 'Read More...';
    readMoreLink.className = 'read-more';
    captionElement.appendChild(readMoreLink); 
  
    
    imgElement.style.display = 'block';
    captionElement.style.display = 'block'; 
  }
  
  
  function moveSlide(step) {
    showSlide(currentSlide + step);
  }
  
  /*
  window.onload = function() {
 //I moved the showSlide to the listener instead of here because it conflicts with the window.onload of iro's
 which is needed for the nav
  };*/


  
  document.addEventListener("DOMContentLoaded",function(){

    showSlide(currentSlide);


    setTimeout(function(){
      if (document.getElementById('checkingJS') !== null){  
        console.log('here');
        document.getElementById('checkingJS').scrollIntoView();
  
      }
    },100);

   

    });