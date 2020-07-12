var goLiveModal = document.getElementsByClassName("goLiveModal")[0]
// // Get button that opens modal.
var goLiveButton = document.getElementById("goLiveButton");
// Set click function that opens modal.
var main = document.getElementsByClassName("main")[0];
goLiveButton.onclick = function() {
    goLiveModal.style.display = "flex";
    main.style.opacity = "10%";
}
