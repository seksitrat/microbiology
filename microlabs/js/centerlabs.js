 // Get the modal
 var modal = document.getElementById('id01');
    
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }




 function myFunction(x) {
    x.classList.toggle("change");
    var navbar2 = document.getElementById("navbar2");
    if (x.classList.contains("change")) {
        navbar2.style.display = "block";
    } else {
        navbar2.style.display = "none";
    }
}



function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    var container2 = document.querySelector('.container2');

    if (isElementInViewport(container2)) {
      container2.classList.add('show-container2');
      window.removeEventListener('scroll', handleScroll);
    }
  }

  window.addEventListener('scroll', handleScroll);




  function handleScroll() {
    var elements = document.querySelectorAll('.slide-from-bottom');

    elements.forEach(function(element) {
        if (isElementInViewport(element)) {
        element.classList.add('show-element');
        }
    });
    }

    window.addEventListener('scroll', handleScroll);




    const containers = document.querySelectorAll('.container3, .container4');
        
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    });

    containers.forEach(container => {
        observer.observe(container);
    });




    var slideIndex = 1;
        showSlides(slideIndex);
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}    
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
        }






        const container5 = document.getElementById('container5');
        const container6 = document.getElementById('container6');
        const container7 = document.getElementById('container7');
      
        // Function to check if an element is in the viewport
        function isInViewport(element) {
          const rect = element.getBoundingClientRect();
          return rect.bottom > 0 && rect.top < window.innerHeight;
        }
      
        function revealContainer() {
          if (isInViewport(container5)) {
            container5.style.opacity = '1';
            container5.style.transform = 'translateY(0)';
          }
          if (isInViewport(container6)) {
            container6.style.opacity = '1';
            container6.style.transform = 'translateY(0)';
          }
          if (isInViewport(container7)) {
            container7.style.opacity = '1';
            container7.style.transform = 'translateY(0)';
          }
        }
      
        // Add an event listener to check for visibility on scroll
        window.addEventListener('scroll', revealContainer);