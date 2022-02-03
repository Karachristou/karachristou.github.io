//Change navigation style on scroll
window.addEventListener('scroll', event => {
    let nav = document.querySelector('.nav-container');

    (window.scrollY >= 44) ? nav.classList.add('scroll') : nav.classList.remove('scroll');
});

//Active navigation on scroll
window.addEventListener('scroll', event => {
  let navigationLinks = document.querySelectorAll('nav ul li a');
  let fromTop = window.scrollY;

  navigationLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    let sectionTop = section.offsetTop;
    let sectionHeight = section.clientHeight;
    console.log(sectionHeight, link.hash);
    if 
      (window.scrollY >= sectionTop - sectionHeight / 2.5 && sectionTop + sectionHeight - 200 > fromTop)
    {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});



//hamburger
const navSlide = () => {
	 const hamburger = document.querySelector(".hamburger");
	 const navbar = document.querySelector(".nav-bar");
	 const navLinks = document.querySelectorAll(".nav-bar li");

     hamburger.onclick = () => {

	 navbar.classList.toggle("nav-active");

      //Animation links
	 navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = "";
		} else {
			link.style.animation = `navLinkFade 1s ease forwards ${index / 18}s`;
		   }
		});
	  //hamburger animation
	 hamburger.classList.toggle("toggle");
    }

	}

window.onload = () => navSlide();
