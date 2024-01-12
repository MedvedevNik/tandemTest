document.addEventListener("DOMContentLoaded", function() {
    var topBanner = document.getElementById("top-banner");
    var bottomBanner = document.getElementById("bottom-banner");
    var closeButton = document.getElementById("close-button");

    bottomBanner.style.display = "none";

    setMinHeight();
    window.addEventListener("resize", setMinHeight);
	console.log(localStorage.getItem("bottomBannerClosed"));
    window.addEventListener("scroll", function() {
        if (isBannerOutOfViewport(topBanner) && !localStorage.getItem("bottomBannerClosed")) {
            bottomBanner.style.display = "block";
        } else {
            bottomBanner.style.display = "none";
        }
    });

    closeButton.addEventListener("click", function() {
        bottomBanner.style.display = "none";
        localStorage.setItem("bottomBannerClosed", true);
    });

    if (localStorage.getItem("bottomBannerClosed")) {
        bottomBanner.style.display = "none";
    }
});

function isBannerOutOfViewport(element) {
    var rect = element.getBoundingClientRect();
    return rect.bottom <= 0 || rect.top >= window.innerHeight;
}

function setMinHeight() {
    var viewportHeight = window.innerHeight;
    document.body.style.minHeight = (viewportHeight * 2) + "px";
}