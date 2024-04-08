const downloadResume = () => {
  window.alert("Скачать резюме");
};

document.addEventListener("DOMContentLoaded", () => {
  const downloadResumeButton = document.getElementById("downloadResume");
  downloadResumeButton?.addEventListener("click", downloadResume);
});
