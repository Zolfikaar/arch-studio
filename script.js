let activeHanger = document.querySelector(".active-page-hanger .text");

function getPageName(url) {
  var index = url.lastIndexOf("/") + 1;
  var filenameWithExtension = url.substr(index);
  var filename = filenameWithExtension.split(".")[0];

  filename === "index"
    ? (activeHanger.textContent = "Home")
    : (activeHanger.textContent = filename);
}

window.onload = () => {
  getPageName(window.location.href);
  // changeProjectDetails();
};

// function shoufleImage(img) {
// console.log(typeof sliderBtns);

// for (const btn of sliderBtns) {
//   console.log(btn);
// }

// for (i = 0; i < sliderBtns.length; i++) {
//   btn = sliderBtns[i + 1];
//   console.log(btn);

// if (img === 1) {
//   heroSliderBG.style.backgroundImage =
//     "url('./assets/home/desktop/image-hero-paramour.jpg')";
// projectTitle.innerText = "Project Paramour";
// projectDesc.innerText = 'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.';
// activeSliderBtn
// console.log(btn);
// btn.classList.add("active");
// }
// if (img === 2) {
//   heroSliderBG.style.backgroundImage =
//     "url('./assets/home/desktop/image-hero-seraph.jpg')";
// console.log(activeSliderBtn);
// projectTitle.innerText = "Seraph Station";
// projectDesc.innerText = 'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.';
// console.log(projectTitle);
// btn.classList.add("active");

// console.log(btn);
//     }
//     if (img === 3) {
//       heroSliderBG.style.backgroundImage =
//         "url('./assets/home/desktop/image-hero-federal.jpg')";
//     }
//     if (img === 4) {
//       heroSliderBG.style.backgroundImage =
//         "url('./assets/home/desktop/image-hero-trinity.jpg')";
//     }
//   }
// }

// Hide show Menu
const menuToggler = document.querySelector(".menu");
const menu = document.querySelector(".menu-bar");

menuToggler.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// hero slider shoufle
let heroSliderBG = document.getElementById("hero-section");
let projectTitle = document.getElementById("project-title");
let projectDesc = document.getElementById("project-desc");
let sliderBtns = document.querySelectorAll(".slider-btns .slider-btn");

sliderBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    sliderBtns.forEach((b) => b.classList.remove("active"));

    btn.classList.add("active");

    if (btn.innerText === "01") {
      heroSliderBG.style.backgroundImage =
        "url('./assets/home/desktop/image-hero-paramour.jpg')";
      projectTitle.textContent = "Project Paramour";
      projectDesc.innerText =
        "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.";
    }
    if (btn.innerText === "02") {
      heroSliderBG.style.backgroundImage =
        "url('./assets/home/desktop/image-hero-seraph.jpg')";
      projectTitle.textContent = "Seraph Station";
      projectDesc.innerText =
        "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.";
    }
    if (btn.innerText === "03") {
      heroSliderBG.style.backgroundImage =
        "url('./assets/home/desktop/image-hero-federal.jpg')";
      projectTitle.textContent = "Fedral II Tower";
      projectDesc.innerText =
        "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.";
    }
    if (btn.innerText === "04") {
      heroSliderBG.style.backgroundImage =
        "url('./assets/home/desktop/image-hero-trinity.jpg')";
      projectTitle.textContent = "Trinity Bank Tower";
      projectDesc.innerText =
        "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.";
    }
  });
});
