window.onload = function () {
  document
    .getElementById('contact-form')
    .addEventListener('submit', function (event) {
      event.preventDefault();

      let contact_service = 'gmail';
      let contact_form = 'pawsvision';

      emailjs
        .sendForm(
          contact_service,
          contact_form,
          document.getElementById('contact-form')
        )
        .then(() => {
          let elements = document.getElementById('contact-form').elements;
          for (let i = 0; i < elements.length; ++i) {
            elements[i].disabled = true;
          }
          alert('Enviado! Nos pondremos en contacto contigo.');
        })
        .catch((err) => {
          alert(
            'Ups, algo ha salido mal. Por favor, intenta de nuevo más tarde. '
          );
        });
    });
};
