const link = document.querySelectorAll(".link a i");
const linkList = document.getElementsByClassName("link");
const menuLinkLine = document.getElementById("menulinkline");
const slider = document.querySelector(".slider");

linkList[0].addEventListener("click", ()=> {
    menuLinkLine.style.left = "0px";
    link[0].classList.add("active");
    link[1].classList.remove("active");
    link[2].classList.remove("active");
    slider.style.transform = "translateX(-0px)";
});

linkList[1].addEventListener("click", ()=> {
    menuLinkLine.style.left = "55px";
    link[1].classList.add("active");
    link[0].classList.remove("active");
    link[2].classList.remove("active");
    slider.style.transform = "translateX(-300px)";
});

linkList[2].addEventListener("click", ()=> {
    menuLinkLine.style.left = "110px";
    link[2].classList.add("active");
    link[0].classList.remove("active");
    link[1].classList.remove("active");
    slider.style.transform = "translateX(-600px)";
});
