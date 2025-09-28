document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const inputs = form.querySelectorAll('input');

    inputs.forEach((input) => {
      if (input.name) {
        // робимо "firstName" → "First name"
        const formattedName = input.name
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, (str) => str.toUpperCase());

        // додаємо placeholder
        input.setAttribute('placeholder', formattedName);

        // додаємо label
        if (input.id) {
          const label = document.createElement('label');

          label.classList.add('field-label');
          label.setAttribute('for', input.id);
          label.textContent = formattedName;

          input.parentNode.insertBefore(label, input);
        }
      }
    });
  });
});
