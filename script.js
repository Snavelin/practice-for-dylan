var goLiveModal = document.getElementsByClassName("goLiveModal")[0];
// Get button that opens modal.
var goLiveButton = document.getElementById("goLiveButton");
var main = document.getElementsByClassName("main")[0];
var modalContainer = document.getElementsByClassName("modalContainer")[0];
// Set click function that opens modal.
goLiveButton.onclick = function () {
    main.style.opacity = "10%";
    modalContainer.style.display = "flex";
}
// When user clicks outside of modal, close it.
window.onclick = function (event) {
    if (event.target == modalContainer) {
        main.style.opacity = "100%";
        modalContainer.style.display = "none";
    }
}
// When user clicks on close button (X), close the modal.
var closeButton = document.getElementsByClassName("closeButton")[0]
closeButton.onclick = function () {
    main.style.opacity = "100%";
    modalContainer.style.display = "none"
}
