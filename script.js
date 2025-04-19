document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting us! We'll respond soon.");
    this.reset();
  });
  