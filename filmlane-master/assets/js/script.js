'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}



/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});


// search bar

// Get elements
const searchBtn = document.querySelector('.search-btn');
const searchBar = document.getElementById('search-bar');
const closeSearchBtn = document.getElementById('search-close-btn');

// Show search bar when search button is clicked
searchBtn.addEventListener('click', () => {
    searchBar.style.display = 'flex';
});

// Hide search bar when close button is clicked
closeSearchBtn.addEventListener('click', () => {
    searchBar.style.display = 'none';
});


//----------searching--------------

// Get elements
const searchInput = document.getElementById('search-input');
const movieCards = document.querySelectorAll('.movie-card');

// Function to filter movies
function filterMovies() {
    const query = searchInput.value.toLowerCase();
    
    movieCards.forEach(movieCard => {
        const title = movieCard.getAttribute('data-title').toLowerCase();
        
        // Show the movie card if the title includes the query, else hide it
        if (title.includes(query)) {
            movieCard.style.display = 'block';
        } else {
            movieCard.style.display = 'none';
        }
    });
}

// Add event listener to the search input
searchInput.addEventListener('input', filterMovies);



