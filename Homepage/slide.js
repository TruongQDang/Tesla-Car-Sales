var slideIndex = 0;
showSlides();
//add the global timer variable
var slides,timer;

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    //put the timeout in the timer variable
    timer = setTimeout(showSlides, 10000); // Change image every 8 seconds
}

function plusSlides(position) {
    //clear/stop the timer
    clearTimeout(timer);
    slideIndex +=position;
    if (slideIndex> slides.length) {slideIndex = 1}
    else if(slideIndex<1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
    //create a new timer
    timer = setTimeout(showSlides, 10000);
}

function currentSlide(index) {
    //clear/stop the timer
    clearTimeout(timer);
    if (index> slides.length) {index = 1}
    else if(index<1){index = slides.length}
    //set the slideIndex with the index of the function
    slideIndex = index;
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slides[index-1].style.display = "block";  
    //create a new timer
    timer = setTimeout(showSlides, 10000);
}