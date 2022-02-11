const headerDOMElement = document.querySelector('.shared_header');
(() => {
  headerDOMElement.innerHTML = `<div class="d-none d-md-block">
    <nav class="navbar navbar-expand-sm bg-dark-custom text-white">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link mr-2" href="#">
              <i class="fa fa-facebook text-white"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-2" href="#">
              <i class="fa fa-twitter text-white"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">
              English
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">
              My Page
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">
              Logout
            </a>
          </li>
        </ul>
    </nav>
    <nav class="navbar navbar-expand-sm bg-white">
        <a class="navbar-brand p-0 m-0" href="index.html">   
            <img class="img-fluid" src="Design/images/CreativeHub.jpg" alt="Logo">
        </a>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link pr-5" href="index.html">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link pr-5" href="about.html">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link pr-5" href="#program"">
            Program 
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link pr-5" href="#speakers">
            Speakers 
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link pr-5" href="#Partners">
            Sponsor
            </a>
          </li>
          <li class="nav-item pr-4 pl-4 campaign">
            <a class="nav-link orange pr-5" href="#">
                CREATIVE-HUB
            </a>
          </li>
        </ul>
    </nav>
    </div>
    <nav class="toggle d-md-none d-xs-block">
    <img src="Design/images/ham-icon.png" alt="hamburger menu" class="hamburger_menu_icon" />
    <ul class="mobile_side_nav">
      <li class="menu_link closebtn"><a href="javascript:void(0)">&times;</a></li>
      <li class="menu_link"><a href="index.html" class="menulink">Home</a><hr class="section_title_hr"/></li>
      <li class="menu_link"><a href="about.html" class="menulink">About</a><hr class="section_title_hr"/></li>
      <li class="menu_link"><a href="#program"" class="menulink">Program</a><hr class="section_title_hr"/></li>
      <li class="menu_link"><a href="#speakers" class="menulink">Speakers </a><hr class="section_title_hr"/></li>
      <li class="menu_link"><a href="#Partners" class="menulink">Sponsor</a><hr class="section_title_hr"/></li>
    </ul>
    </nav>`;
})();

// Mobile menu implementation
const hamburgerMenuIcon = document.querySelector('.hamburger_menu_icon');
const sideNavigationBar = document.querySelector('.mobile_side_nav');
const menuLinks = document.querySelectorAll('.menu_link');
const mobileMenu = document.querySelector('.parent_main');

const openMenu = () => {
  sideNavigationBar.classList.add('mobile_side_nav_active');
  hamburgerMenuIcon.classList.add('vanish');
  mobileMenu.classList.add('blur');
  document.body.style.overflowY = 'hidden';
};

const closeMenu = () => {
  document.body.style.overflowY = 'scroll';
  sideNavigationBar.classList.remove('mobile_side_nav_active');
  mobileMenu.classList.remove('blur');
  hamburgerMenuIcon.classList.remove('vanish');
};

hamburgerMenuIcon.addEventListener('click', openMenu);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', closeMenu);
});