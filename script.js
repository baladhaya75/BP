<script>
    // Show popup on page load
    window.addEventListener("load", () => {
        document.getElementById("welcomePopup").style.display = "flex";
    });

    // Close popup
    function closePopup() {
        document.getElementById("welcomePopup").style.display = "none";
    }
</script>
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});