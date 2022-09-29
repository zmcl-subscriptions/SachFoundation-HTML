document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", () => {
    // ========= Preloader Initialized
    // document.querySelector("#preloader").classList.add("fadeOut");

    // ========= AOS Animation Initialized
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
    });
  });

  // ========== Easy selector helper function ==========
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  // ========== Easy event listener function ==========
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  // window.addEventListener("scroll", function () {
  //   console.log(window.pageYOffset);
  // });

  // ========== Easy on scroll event listener ==========
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  // ========== Toggle .header-scrolled class to #header when page is scrolled ==========
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  // ========== Mobile nav toggle ==========
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  // ========== Mobile nav dropdowns activate ==========
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  // ========== Owl Carousel ==========
  const solutionsPills = $("#solutionsPills");
  solutionsPills.owlCarousel({
    margin: 10,
    loop: false,
    autoplay: false,
    nav: true,
    navText: [
      '<svg width="8" height="14" viewBox="0 0 8 14" fill="#201429" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.500504 6.99991C0.500504 6.77191 0.577504 6.54491 0.732504 6.35991L5.7325 0.359909C6.0855 -0.064091 6.7165 -0.122091 7.1405 0.231909C7.5645 0.584909 7.6215 1.21491 7.2685 1.63991L2.7925 7.01091L7.1075 12.3729C7.4535 12.8029 7.3855 13.4329 6.9555 13.7789C6.5255 14.1249 5.8965 14.0569 5.5495 13.6269L0.721504 7.62691C0.574505 7.44391 0.500504 7.22191 0.500504 6.99991Z"/></svg>',
      '<svg width="8" height="14" viewBox="0 0 8 14" fill="#201429" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.4995 6.99991C7.4995 6.77191 7.4225 6.54491 7.2675 6.35991L2.2675 0.359909C1.9145 -0.064091 1.2835 -0.122091 0.859495 0.231909C0.435495 0.584909 0.378496 1.21491 0.731496 1.63991L5.2075 7.01091L0.892496 12.3729C0.546496 12.8029 0.614496 13.4329 1.0445 13.7789C1.4745 14.1249 2.1035 14.0569 2.4505 13.6269L7.2785 7.62691C7.4255 7.44391 7.4995 7.22191 7.4995 6.99991Z"/></svg>',
    ],
    dots: false,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  });
  const solutionsVideos = $("#solutionsVideos");
  solutionsVideos.owlCarousel({
    loop: true,
    autoplay: true,
    nav: true,
    dots: true,
    center: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
  const testimonials = $("#sachCommunity");
  testimonials.owlCarousel({
    loop: true,
    autoplay: true,
    center: true,
    nav: false,
    dots: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });

  // ========== Categories Swiper ==========
  const categoryHeroVideo = $("#categoryHeroVideo");
  categoryHeroVideo.owlCarousel({
    loop: true,
    autoplay: true,
    center: true,
    nav: true,
    dots: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
  const topCategories = $("#topCategories");
  topCategories.owlCarousel({
    margin: 20,
    loop: true,
    autoplay: false,
    nav: true,
    navText: [
      '<span><svg width="17" height="16" viewBox="0 0 17 16" fill="#201429" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7915 6.9584H3.43213L7.2165 2.41673C7.58525 1.97507 7.52484 1.31778 7.08317 0.950068C6.64046 0.581318 5.98421 0.641735 5.6165 1.0834L0.408171 7.3334C0.367546 7.38236 0.346712 7.43965 0.316504 7.49382C0.291504 7.53757 0.261296 7.57507 0.242546 7.62299C0.195671 7.74278 0.167546 7.86882 0.167546 7.9959C0.167546 7.99694 0.166504 7.99903 0.166504 8.00007C0.166504 8.00111 0.167546 8.00319 0.167546 8.00424C0.167546 8.13132 0.195671 8.25736 0.242546 8.37715C0.261296 8.42507 0.291504 8.46257 0.316504 8.50632C0.346712 8.56049 0.367546 8.61778 0.408171 8.66674L5.6165 14.9167C5.82275 15.1636 6.11859 15.2917 6.4165 15.2917C6.65192 15.2917 6.88838 15.2126 7.08317 15.0501C7.52484 14.6824 7.58525 14.0251 7.2165 13.5834L3.43213 9.04174H15.7915C16.3665 9.04174 16.8332 8.57507 16.8332 8.00007C16.8332 7.42507 16.3665 6.9584 15.7915 6.9584"/> </svg></span>',
      '<span><svg width="17" height="16" viewBox="0 0 17 16" fill="#201429" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.20817 9.04159H13.5675L9.78317 13.5833C9.41442 14.0249 9.47484 14.6822 9.9165 15.0499C10.3592 15.4187 11.0155 15.3583 11.3842 14.9166L16.5925 8.66659C16.6332 8.61763 16.653 8.56034 16.6832 8.50617C16.7082 8.46242 16.7384 8.42492 16.7571 8.377C16.804 8.25721 16.8321 8.13117 16.8321 8.00409C16.8321 8.00304 16.8332 8.00096 16.8332 7.99992C16.8332 7.99888 16.8321 7.99679 16.8321 7.99575C16.8321 7.86867 16.804 7.74263 16.7571 7.62284C16.7384 7.57492 16.7082 7.53742 16.6832 7.49367C16.653 7.4395 16.6332 7.38221 16.5925 7.33325L11.3842 1.08325C11.1769 0.836377 10.8811 0.708252 10.5832 0.708252C10.3478 0.708252 10.1113 0.787419 9.9165 0.949919C9.47484 1.31763 9.41442 1.97492 9.78317 2.41659L13.5675 6.95825H1.20817C0.633171 6.95825 0.166504 7.42492 0.166504 7.99992C0.166504 8.57492 0.633171 9.04159 1.20817 9.04159"/> </svg></span>',
    ],
    dots: false,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  const categoriesVidoeCard = $(".categoriesVidoeCard");
  categoriesVidoeCard.owlCarousel({
    loop: true,
    autoplay: false,
    nav: false,
    dots: false,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  const eventsSlider = $(".eventsSlider");
  eventsSlider.owlCarousel({
    margin: 30,
    loop: true,
    autoplay: false,
    nav: false,
    navText: [
      '<span><svg width="17" height="16" viewBox="0 0 17 16" fill="#201429" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7915 6.9584H3.43213L7.2165 2.41673C7.58525 1.97507 7.52484 1.31778 7.08317 0.950068C6.64046 0.581318 5.98421 0.641735 5.6165 1.0834L0.408171 7.3334C0.367546 7.38236 0.346712 7.43965 0.316504 7.49382C0.291504 7.53757 0.261296 7.57507 0.242546 7.62299C0.195671 7.74278 0.167546 7.86882 0.167546 7.9959C0.167546 7.99694 0.166504 7.99903 0.166504 8.00007C0.166504 8.00111 0.167546 8.00319 0.167546 8.00424C0.167546 8.13132 0.195671 8.25736 0.242546 8.37715C0.261296 8.42507 0.291504 8.46257 0.316504 8.50632C0.346712 8.56049 0.367546 8.61778 0.408171 8.66674L5.6165 14.9167C5.82275 15.1636 6.11859 15.2917 6.4165 15.2917C6.65192 15.2917 6.88838 15.2126 7.08317 15.0501C7.52484 14.6824 7.58525 14.0251 7.2165 13.5834L3.43213 9.04174H15.7915C16.3665 9.04174 16.8332 8.57507 16.8332 8.00007C16.8332 7.42507 16.3665 6.9584 15.7915 6.9584"/> </svg></span>',
      '<span><svg width="17" height="16" viewBox="0 0 17 16" fill="#201429" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.20817 9.04159H13.5675L9.78317 13.5833C9.41442 14.0249 9.47484 14.6822 9.9165 15.0499C10.3592 15.4187 11.0155 15.3583 11.3842 14.9166L16.5925 8.66659C16.6332 8.61763 16.653 8.56034 16.6832 8.50617C16.7082 8.46242 16.7384 8.42492 16.7571 8.377C16.804 8.25721 16.8321 8.13117 16.8321 8.00409C16.8321 8.00304 16.8332 8.00096 16.8332 7.99992C16.8332 7.99888 16.8321 7.99679 16.8321 7.99575C16.8321 7.86867 16.804 7.74263 16.7571 7.62284C16.7384 7.57492 16.7082 7.53742 16.6832 7.49367C16.653 7.4395 16.6332 7.38221 16.5925 7.33325L11.3842 1.08325C11.1769 0.836377 10.8811 0.708252 10.5832 0.708252C10.3478 0.708252 10.1113 0.787419 9.9165 0.949919C9.47484 1.31763 9.41442 1.97492 9.78317 2.41659L13.5675 6.95825H1.20817C0.633171 6.95825 0.166504 7.42492 0.166504 7.99992C0.166504 8.57492 0.633171 9.04159 1.20817 9.04159"/> </svg></span>',
    ],
    dots: false,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  const upcomingEvents = $(".upcomingEvents");
  upcomingEvents.owlCarousel({
    loop: true,
    autoplay: false,
    nav: true,
    dots: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  const innerCategoryVideo = $("#innerCategoryVideo");
  innerCategoryVideo.owlCarousel({
    margin: 20,
    loop: true,
    autoplay: false,
    nav: true,
    navText: [
      '<span><svg width="17" height="16" viewBox="0 0 17 16" fill="#201429" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7915 6.9584H3.43213L7.2165 2.41673C7.58525 1.97507 7.52484 1.31778 7.08317 0.950068C6.64046 0.581318 5.98421 0.641735 5.6165 1.0834L0.408171 7.3334C0.367546 7.38236 0.346712 7.43965 0.316504 7.49382C0.291504 7.53757 0.261296 7.57507 0.242546 7.62299C0.195671 7.74278 0.167546 7.86882 0.167546 7.9959C0.167546 7.99694 0.166504 7.99903 0.166504 8.00007C0.166504 8.00111 0.167546 8.00319 0.167546 8.00424C0.167546 8.13132 0.195671 8.25736 0.242546 8.37715C0.261296 8.42507 0.291504 8.46257 0.316504 8.50632C0.346712 8.56049 0.367546 8.61778 0.408171 8.66674L5.6165 14.9167C5.82275 15.1636 6.11859 15.2917 6.4165 15.2917C6.65192 15.2917 6.88838 15.2126 7.08317 15.0501C7.52484 14.6824 7.58525 14.0251 7.2165 13.5834L3.43213 9.04174H15.7915C16.3665 9.04174 16.8332 8.57507 16.8332 8.00007C16.8332 7.42507 16.3665 6.9584 15.7915 6.9584"/> </svg></span>',
      '<span><svg width="17" height="16" viewBox="0 0 17 16" fill="#201429" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.20817 9.04159H13.5675L9.78317 13.5833C9.41442 14.0249 9.47484 14.6822 9.9165 15.0499C10.3592 15.4187 11.0155 15.3583 11.3842 14.9166L16.5925 8.66659C16.6332 8.61763 16.653 8.56034 16.6832 8.50617C16.7082 8.46242 16.7384 8.42492 16.7571 8.377C16.804 8.25721 16.8321 8.13117 16.8321 8.00409C16.8321 8.00304 16.8332 8.00096 16.8332 7.99992C16.8332 7.99888 16.8321 7.99679 16.8321 7.99575C16.8321 7.86867 16.804 7.74263 16.7571 7.62284C16.7384 7.57492 16.7082 7.53742 16.6832 7.49367C16.653 7.4395 16.6332 7.38221 16.5925 7.33325L11.3842 1.08325C11.1769 0.836377 10.8811 0.708252 10.5832 0.708252C10.3478 0.708252 10.1113 0.787419 9.9165 0.949919C9.47484 1.31763 9.41442 1.97492 9.78317 2.41659L13.5675 6.95825H1.20817C0.633171 6.95825 0.166504 7.42492 0.166504 7.99992C0.166504 8.57492 0.633171 9.04159 1.20817 9.04159"/> </svg></span>',
    ],
    dots: false,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  const innerCategorySlider = $(".innerCategorySlider");
  innerCategorySlider.owlCarousel({
    margin: 50,
    loop: true,
    autoplay: false,
    nav: true,
    navText: [
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="#4D4354" xmlns="http://www.w3.org/2000/svg"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M19 11H7.135L10.768 6.64003C11.122 6.21603 11.064 5.58503 10.64 5.23203C10.215 4.87803 9.585 4.93603 9.232 5.36003L4.232 11.36C4.193 11.407 4.173 11.462 4.144 11.514C4.12 11.556 4.091 11.592 4.073 11.638C4.028 11.753 4.001 11.874 4.001 11.996C4.001 11.997 4 11.999 4 12C4 12.001 4.001 12.003 4.001 12.004C4.001 12.126 4.028 12.247 4.073 12.362C4.091 12.408 4.12 12.444 4.144 12.486C4.173 12.538 4.193 12.593 4.232 12.64L9.232 18.64C9.43 18.877 9.714 19 10 19C10.226 19 10.453 18.924 10.64 18.768C11.064 18.415 11.122 17.784 10.768 17.36L7.135 13H19C19.552 13 20 12.552 20 12C20 11.448 19.552 11 19 11Z" /></g></svg>',
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="#4D4354" xmlns="http://www.w3.org/2000/svg"><g id="Property 1=arrow-right"><path id="Icon" fill-rule="evenodd" clip-rule="evenodd" d="M5 13H16.865L13.232 17.36C12.878 17.784 12.936 18.415 13.36 18.768C13.785 19.122 14.415 19.064 14.769 18.64L19.769 12.64C19.808 12.593 19.827 12.538 19.856 12.486C19.88 12.444 19.909 12.408 19.927 12.362C19.972 12.247 19.999 12.126 19.999 12.004C19.999 12.003 20 12.001 20 12C20 11.999 19.999 11.997 19.999 11.996C19.999 11.874 19.972 11.753 19.927 11.638C19.909 11.592 19.88 11.556 19.856 11.514C19.827 11.462 19.808 11.407 19.769 11.36L14.769 5.36C14.57 5.123 14.286 5 14 5C13.774 5 13.547 5.076 13.36 5.232C12.936 5.585 12.878 6.216 13.232 6.64L16.865 11H5C4.448 11 4 11.448 4 12C4 12.552 4.448 13 5 13Z" /></g></svg>',
    ],
    navContainer: ".innerCategorySlider-nav",
    dots: false,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });

  const successStories = $(".successStories");
  successStories.owlCarousel({
    margin: 50,
    loop: true,
    autoplay: true,
    nav: true,
    navText: [
      '<svg width="8" height="14" viewBox="0 0 8 14" fill="#201429" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.500504 6.99991C0.500504 6.77191 0.577504 6.54491 0.732504 6.35991L5.7325 0.359909C6.0855 -0.064091 6.7165 -0.122091 7.1405 0.231909C7.5645 0.584909 7.6215 1.21491 7.2685 1.63991L2.7925 7.01091L7.1075 12.3729C7.4535 12.8029 7.3855 13.4329 6.9555 13.7789C6.5255 14.1249 5.8965 14.0569 5.5495 13.6269L0.721504 7.62691C0.574505 7.44391 0.500504 7.22191 0.500504 6.99991Z"/></svg>',
      '<svg width="8" height="14" viewBox="0 0 8 14" fill="#201429" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.4995 6.99991C7.4995 6.77191 7.4225 6.54491 7.2675 6.35991L2.2675 0.359909C1.9145 -0.064091 1.2835 -0.122091 0.859495 0.231909C0.435495 0.584909 0.378496 1.21491 0.731496 1.63991L5.2075 7.01091L0.892496 12.3729C0.546496 12.8029 0.614496 13.4329 1.0445 13.7789C1.4745 14.1249 2.1035 14.0569 2.4505 13.6269L7.2785 7.62691C7.4255 7.44391 7.4995 7.22191 7.4995 6.99991Z"/></svg>',
    ],
    dots: false,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  const trustedPartners = $(".trustedPartners");
  trustedPartners.owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    nav: true,
    navText: [
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="#4D4354" xmlns="http://www.w3.org/2000/svg"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M19 11H7.135L10.768 6.64003C11.122 6.21603 11.064 5.58503 10.64 5.23203C10.215 4.87803 9.585 4.93603 9.232 5.36003L4.232 11.36C4.193 11.407 4.173 11.462 4.144 11.514C4.12 11.556 4.091 11.592 4.073 11.638C4.028 11.753 4.001 11.874 4.001 11.996C4.001 11.997 4 11.999 4 12C4 12.001 4.001 12.003 4.001 12.004C4.001 12.126 4.028 12.247 4.073 12.362C4.091 12.408 4.12 12.444 4.144 12.486C4.173 12.538 4.193 12.593 4.232 12.64L9.232 18.64C9.43 18.877 9.714 19 10 19C10.226 19 10.453 18.924 10.64 18.768C11.064 18.415 11.122 17.784 10.768 17.36L7.135 13H19C19.552 13 20 12.552 20 12C20 11.448 19.552 11 19 11Z" /></g></svg>',
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="#4D4354" xmlns="http://www.w3.org/2000/svg"><g id="Property 1=arrow-right"><path id="Icon" fill-rule="evenodd" clip-rule="evenodd" d="M5 13H16.865L13.232 17.36C12.878 17.784 12.936 18.415 13.36 18.768C13.785 19.122 14.415 19.064 14.769 18.64L19.769 12.64C19.808 12.593 19.827 12.538 19.856 12.486C19.88 12.444 19.909 12.408 19.927 12.362C19.972 12.247 19.999 12.126 19.999 12.004C19.999 12.003 20 12.001 20 12C20 11.999 19.999 11.997 19.999 11.996C19.999 11.874 19.972 11.753 19.927 11.638C19.909 11.592 19.88 11.556 19.856 11.514C19.827 11.462 19.808 11.407 19.769 11.36L14.769 5.36C14.57 5.123 14.286 5 14 5C13.774 5 13.547 5.076 13.36 5.232C12.936 5.585 12.878 6.216 13.232 6.64L16.865 11H5C4.448 11 4 11.448 4 12C4 12.552 4.448 13 5 13Z" /></g></svg>',
    ],
    dots: false,
    autoplayTimeout: 4000,
    center: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 7,
      },
    },
  });

  const resources = $(".resources");
  resources.owlCarousel({
    margin: 15,
    loop: true,
    autoplay: true,
    nav: true,
    center: false,
    navText: [
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="#4D4354" xmlns="http://www.w3.org/2000/svg"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M19 11H7.135L10.768 6.64003C11.122 6.21603 11.064 5.58503 10.64 5.23203C10.215 4.87803 9.585 4.93603 9.232 5.36003L4.232 11.36C4.193 11.407 4.173 11.462 4.144 11.514C4.12 11.556 4.091 11.592 4.073 11.638C4.028 11.753 4.001 11.874 4.001 11.996C4.001 11.997 4 11.999 4 12C4 12.001 4.001 12.003 4.001 12.004C4.001 12.126 4.028 12.247 4.073 12.362C4.091 12.408 4.12 12.444 4.144 12.486C4.173 12.538 4.193 12.593 4.232 12.64L9.232 18.64C9.43 18.877 9.714 19 10 19C10.226 19 10.453 18.924 10.64 18.768C11.064 18.415 11.122 17.784 10.768 17.36L7.135 13H19C19.552 13 20 12.552 20 12C20 11.448 19.552 11 19 11Z" /></g></svg>',
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="#4D4354" xmlns="http://www.w3.org/2000/svg"><g id="Property 1=arrow-right"><path id="Icon" fill-rule="evenodd" clip-rule="evenodd" d="M5 13H16.865L13.232 17.36C12.878 17.784 12.936 18.415 13.36 18.768C13.785 19.122 14.415 19.064 14.769 18.64L19.769 12.64C19.808 12.593 19.827 12.538 19.856 12.486C19.88 12.444 19.909 12.408 19.927 12.362C19.972 12.247 19.999 12.126 19.999 12.004C19.999 12.003 20 12.001 20 12C20 11.999 19.999 11.997 19.999 11.996C19.999 11.874 19.972 11.753 19.927 11.638C19.909 11.592 19.88 11.556 19.856 11.514C19.827 11.462 19.808 11.407 19.769 11.36L14.769 5.36C14.57 5.123 14.286 5 14 5C13.774 5 13.547 5.076 13.36 5.232C12.936 5.585 12.878 6.216 13.232 6.64L16.865 11H5C4.448 11 4 11.448 4 12C4 12.552 4.448 13 5 13Z" /></g></svg>',
    ],
    dots: false,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  // ========== Fixed Comment Section ==========
  $.fn.fixedSection = function (pos) {
    var $this = this,
      $window = $(window);
    $window.scroll(function (e) {
      if ($window.scrollTop() > pos) {
        $this.css({
          position: "static",
          transform: "none",
        });
      } else {
        $this.css({
          position: "fixed",
          transform: "translateX(-50%)",
        });
      }
    });
  };
  // let pos = document.getElementById("commentSection").offsetTop;
  // $(".fixed-comment").fixedSection(
  //   document.getElementById("commentSection").offsetTop - 700
  // );
});

function signUpSteps(step) {
  $(`#stepIndicator-${step}`).addClass("done").removeClass("active");
  $(`#stepIndicator-${step + 1}`).addClass("active");
  $(`#step-${step}`).css("display", "none");
  $(`#step-${step + 1}`).css("display", "block");
}
