// navbar
let navbar = document.querySelector(".navbar");
let sec1 = document.querySelector(".sec1");


  window.addEventListener("scroll", function () {
    if (window.scrollY >= sec1.offsetTop) {
      navbar.classList.add("stickey");
    } else {
      navbar.classList.remove("stickey");
    }
  });


// numbers
let sec2 = document.querySelector(".sec2");
let nums = document.querySelectorAll(".num");
let start = false;


  window.addEventListener("scroll", function () {
    if (window.scrollY >= sec2.offsetTop) {
      if (!start) {
        nums.forEach((num) => startcount(num));
        start = true;
      }
    }
  });

  function startcount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
      el.textContent++;
      if (el.textContent == goal) {
        clearInterval(count);
      }
    }, 7000 / goal);
  }

