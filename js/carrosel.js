// set the default active slide to the first one
    let slideIndex = 1;
    showSlide(slideIndex);

    // change slide with the prev/next button
    function moveSlide(moveStep) {
      console.log('chegou');
      showSlide(slideIndex += moveStep);
    }

    // change slide with the dots
    function currentSlide(n) {
      console.log('currentSlide')
      showSlide(slideIndex = n);
    }

    function showSlide(n) {
      let i;
      const slides = document.getElementsByClassName("slide");
      const dots = document.getElementsByClassName('dot');

      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length }

      // hide all slides
      for (i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
      }

      // remove active status from all dots
      for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("bg-green-600");
        dots[i].classList.add("bg-yellow-500");
      }

      // show the active slide
      slides[slideIndex - 1].classList.remove('hidden');

      // highlight the active dot
      dots[slideIndex - 1].classList.remove("bg-yellow-500");
      dots[slideIndex - 1].classList.add("bgyellow-500");
    }
