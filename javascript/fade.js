// FADE IN when page loads
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
  });
  
  // FADE OUT on link clicks
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
      const target = this.getAttribute("href");
      if (target && !target.startsWith("#") && !this.hasAttribute("target")) {
        e.preventDefault();
        document.body.classList.remove("fade-in");
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location = target;
        }, 400); // match fade-out duration
      }
    });
  });
  