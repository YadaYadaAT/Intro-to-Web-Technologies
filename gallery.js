var images = [
    { src: "images/image4.jpg", caption: "A tan mantis stands alert, a silent sentinel in its sandy domain." },
    { src: "images/image5.jpg", caption: "A green mantis rests on a gentle hand, a meeting of nature and humanity." },
    { src: "images/image6.jpg", caption: "Amidst the dewy roses, a mantis lies in wait, nature's hidden gem." },
    { src: "images/image7.jpg", caption: "A red insect perches on a leaf, its slender form a perfect balance." },
    { src: "images/image8.jpg", caption: "In a serene stance, a green mantis contemplates the world around it." }
  ];
  
  var currentSlide = 0; // keeps track of which image is currently shown
  
  // Function to show a specific slide
  function showSlide(index) {
    var gallery = document.getElementById('gallery');
    // Ensure the index wraps around correctly
    if (index >= images.length) index = 0;
    if (index < 0) index = images.length - 1;
    currentSlide = index; // update the current slide index
  
    // Clear existing images and captions
    gallery.innerHTML = '';
  
    // Create new image and caption elements
    var imgElement = document.createElement('img');
    imgElement.src = images[index].src;
    gallery.appendChild(imgElement);
  
    var captionElement = document.createElement('div');
    captionElement.textContent = images[index].caption;
    captionElement.className = 'caption';
    gallery.appendChild(captionElement);
  
    // Display the new image and caption
    imgElement.style.display = 'block';
    captionElement.style.display = 'block';
  }
  
  // Function to change the slide
  function moveSlide(step) {
    showSlide(currentSlide + step);
  }
  
  // Initialize the gallery with the first image
  window.onload = function() {
    showSlide(currentSlide);
  };