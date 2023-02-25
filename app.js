// code js srcoll to top button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

document.getElementById("scrollToTopBtn").addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


// Validtion input email 
const form = document.querySelector("form"),
  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email")

// Email Validtion
function checkEmail() {
  const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emaiPattern)) {
    return emailField.classList.add("invalid"); //adding invalid class if email value do not mathced with email pattern
  }
  emailField.classList.remove("invalid"); //removing invalid class if email value matched with emaiPattern
}
// Calling Funtion on Form Sumbit
form.addEventListener("submit", (e) => {
  e.preventDefault(); //preventing form submitting
  checkEmail();

  //calling function on key up
  emailInput.addEventListener("keyup", checkEmail);

  if (
    !emailField.classList.contains("invalid") 
  ) {
    location.href = form.getAttribute("action");
  }
});

// Code Js for salider image 
const sliderWrapper = document.querySelector('.slider-wrapper');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let slideIndex = 0;

function showSlide() {
  sliderWrapper.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function slideNext() {
  if (slideIndex === 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  showSlide();
}

function slidePrev() {
  if (slideIndex === 0) {
    slideIndex = 1;
  } else {
    slideIndex--;
  }
  showSlide();
}
prevBtn.addEventListener('click', slidePrev);
nextBtn.addEventListener('click', slideNext);

setInterval(slideNext, 5000);



// js 1
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    performSearch();
  }
});

function performSearch() {
  const searchText = searchInput.value.toLowerCase();
  // Perform your search logic here
  console.log('Searching for:', searchText);
}

// js 2 
// JavaScript code
function search_animal() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('animals');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}


