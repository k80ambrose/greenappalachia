document.addEventListener('scroll', function() {
    const marqueeImage = document.querySelector('.fullscreen-img');
    let scrollPosition = window.scrollY;
  
    // Set a threshold for how much the user needs to scroll before the image "unsticks"
    let scrollThreshold = 500; // Adjust this value as needed
  
    // Calculate the blur value based on the scroll position
    let blurValue = Math.min(20, scrollPosition / 50);
  
    // Apply the blur effect to the marquee image
    marqueeImage.style.filter = `blur(${blurValue}px)`;
  
    // If the scroll position is greater than the threshold, add the class to unfix the image
    if (scrollPosition >= scrollThreshold) {
      document.body.classList.add('unfix');
    } else {
      document.body.classList.remove('unfix');
    }
  });
  