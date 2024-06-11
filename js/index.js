let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
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

// Auto slide every 6 seconds
setInterval(() => {
    plusSlides(1);
}, 6000);

document.addEventListener('DOMContentLoaded', function() {
    flatpickr("#date-picker", {
      dateFormat: "Y-m-d", // Adjust the format as needed
      minDate: "1993", // Disable past dates
      altInput: true,
      altFormat: "F j, Y" // User-friendly date format
    });
  });


function toggleModal() {
    // x.classList.toggle("change");
    console.log("Clicked");
    var modal = document.getElementById("sidebar-modal");
    if (modal.classList.contains("show-sidebar-modal")) {
        modal.classList.remove("show-sidebar-modal");
    } else {
        modal.classList.add("show-sidebar-modal");
    }
}


// Scrolling function
  $(window).scroll(function() {
    if($(window).scrollTop()) {
        $("nav").addClass("scrolled");
    } else {
        $("nav").removeClass("scrolled");
    }
    
});



$(document).ready(function() {
    // Show or hide the button when scrolling
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.symbol-back').fadeIn();
        } else {
            $('.symbol-back').fadeOut();
        }
    });

    // Scroll to the top when the button is clicked
    $('.symbol-back').click(function() {
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    });
});


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });