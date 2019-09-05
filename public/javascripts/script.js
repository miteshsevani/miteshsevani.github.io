const currentPage = window.location.pathname;
const activePage = setActiveCurrentPage(currentPage);

function setActiveCurrentPage(currentPage) {  
  document.querySelector(`.main-nav a[href='${currentPage}']`).classList.add('active');
}

/* ###### Main menu mobile toggle nav ###### */
const navDropdown = document.querySelector(".nav-dropdown");

navDropdown.addEventListener('click', () => {
  var menu = document.querySelector('.main-nav');
  menu.classList.toggle("visible");
  navDropdown.classList.toggle('close');
})

/* ###### Nav active state ###### */
// About HYA - Create array from subnav links list
const subNavList = document.querySelectorAll('.subnav a');;
const subNavListArray = []; 

for (var i = 0; i < subNavList.length; i++) {
  subNavListArray.push(subNavList[i]);    
}


for (var i = 0; i < subNavListArray.length; i++) {  
  subNavListArray[i].addEventListener('click', (e) => {
    removeActive(subNavListArray);
    e.target.classList = 'active';
  })
}


// remove existing active state
function removeActive(navListArray) {
  for (var i = 0; i < navListArray.length; i++) {
    navListArray[i].classList.remove('active');
  }
}



// Scroll to top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("scroll-top").style.display = "block";
    } else {
        document.getElementById("scroll-top").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}