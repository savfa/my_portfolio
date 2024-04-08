const handleTheme = () => {
  const isDefaultTheme = !document.body.classList.contains(`theme-lite`);

  if (isDefaultTheme) {
    document.body.classList.add(`theme-lite`);
  } else {
    document.body.classList.remove(`theme-lite`);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(`.theme-toggle`);
  themeToggle?.addEventListener("click", handleTheme);
});
