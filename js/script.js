document.getElementsByClassName("cv-link").addEventListener("click", function(event) {
    if (!event.target.getAttribute("href")) {
        event.preventDefault();
        alert("This isn't available yet, but it will be here soon :)");
    }
});
