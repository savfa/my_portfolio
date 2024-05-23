const sendContactsForm = (event: any) => {
  event.preventDefault(); // предотвращаем перезагрузку страницы

  // собираем данные из формы
  const form = event.target;
  const formData = new FormData(form);
  const data = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of formData.entries()) {
    // @ts-ignore
    data[key] = value;
  }
  const jsonData = JSON.stringify(data);

  // создаем объект XMLHttpRequest для отправки запроса на сервер
  const xhr = new XMLHttpRequest();
  xhr.open(
    "POST",
    "https://todo-server.evgeniysavin.ru/api/contact_me_portfolio/",
    true
  );

  // устанавливаем заголовки запроса
  xhr.setRequestHeader("Content-Type", "application/json");

  // отправляем запрос на сервер
  xhr.send(jsonData);

  // обрабатываем ответ сервера
  xhr.onload = function () {
    if (xhr.status === 200) {
      // успешный ответ сервера
      form.reset();
      window.alert(
        `Ваше сообщение успешно отправлено! \nВ ближайшее время я свяжусь с Вами. Спасибо за обращение!`
      );
    } else {
      // ошибка при отправке запроса
      window.alert(xhr.statusText);
    }
  };
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form?.addEventListener("submit", sendContactsForm);
});
