const downloadResume = () => {
  window.open(
    "https://voronezh.hh.ru/applicant/resumes/view?resume=8b9283fdff0210651d0039ed1f777a4149497a",
    "_blank"
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const downloadResumeButtons = document.querySelectorAll(
    '[data-id="downloadResume"]'
  );

  downloadResumeButtons.forEach((button) => {
    button.addEventListener("click", downloadResume);
  });
});
