let popup = document.getElementById("pop-up")
let ok = document.getElementById("ok")

document.querySelector('.image-button').addEventListener('click', function () {
    popup.style.visibility = "visible"
});

ok.addEventListener('click', () => {
    popup.style.visibility = "hidden"
})



