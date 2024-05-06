/*Q23. Write a JavaScript program to create a slideshow that changes 
the displayed image when a next or previous button is clicked
*/

// Array of image URLs
const images = [
    "https://media.assettype.com/freepressjournal/2024-03/2512d233-0db3-41d2-b9b0-bb36bd278779/GHzjDIZWQAALIrj.jpeg",
    "https://static.tnn.in/thumb/msid-100565446,thumbsize-123074,width-1280,height-720,resizemode-75/100565446.jpg",
    "https://images.thequint.com/thequint%2F2023-05%2F3e7deaeb-e046-4b1e-a7e8-48a7d76edd49%2FSPCS5657.JPG?auto=format%2Ccompress&fmt=webp&width=720"
  ];
  
  let currentIndex = 0;
  const slideshowImg = document.getElementById("slideshow-img");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  
  // Function to display current image
  function showImage() {
    slideshowImg.src = images[currentIndex];
  }
  
  // Event listener for previous button
  prevBtn.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
  });
  
  // Event listener for next button
  nextBtn.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
  });
  
  // Show the initial image
  showImage();
  