document.addEventListener("DOMContentLoaded", function () {
    var hamburger = document.querySelector(".hamburger");
    var navList = document.querySelector(".header_list");

    hamburger.addEventListener("click", function () {
        navList.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        var targetElement = event.target;
        if (!targetElement.closest(".hamburger") && !targetElement.closest(".header_list ")) {
            navList.classList.remove("active");
        }
    });
});
