function goToForm() {
  document.getElementById("video-container").style.display = "none";
  document.getElementById("form-phase").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("userForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const dob = new Date(document.getElementById("dob").value);
      localStorage.setItem("username", name);
      localStorage.setItem("dob", dob.toISOString());
      window.location.href = "rotate-to-portrait.html";
    });
  }
});
