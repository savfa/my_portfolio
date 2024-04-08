document.addEventListener("DOMContentLoaded", () => {
  const navItemList = document.querySelectorAll(".main-nav__item");
  navItemList.forEach((navItem: Element) => {
    navItem.addEventListener("click", () => {
      const activateSectionId = navItem.getAttribute(`id`)?.replace(`nav-`, ``);
      const activateSection = activateSectionId
        ? document.getElementById(activateSectionId)
        : undefined;

      // Удаляем класс active у элемента навигации, скрываем активную секцию
      navItemList.forEach((item) => {
        const currentItemActive = item.classList.contains(`active`);
        const currentActivateSectionId = item
          ?.getAttribute(`id`)
          ?.replace(`nav-`, ``);
        const currentSection = currentActivateSectionId
          ? document.getElementById(currentActivateSectionId)
          : undefined;

        if (currentItemActive) {
          item.classList.remove("active");
          if (currentSection) {
            currentSection.classList.remove("active");
          }
        }
      });

      // Добавляем класс active текущему элементу навигации
      navItem.classList.add("active");
      if (activateSection) {
        activateSection.classList.add("active");
      }
    });
  });
});
