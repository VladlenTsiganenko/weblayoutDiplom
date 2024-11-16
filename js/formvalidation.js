document.addEventListener("DOMContentLoaded", function () {
  let validation = new JustValidate('.form', {
    errorLabelStyle: {
      color: '#D11616'

    }


  })

  const usernameInput = document.getElementById('username');
  const usernameError = document.getElementById('username-error');

  usernameInput.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    const regex = /^[A-Za-zА-Яа-яЁё\s]+$/;

    if (!regex.test(inputValue)) {
      event.preventDefault();
      event.target.setCustomValidity('Недопустимый формат');
      usernameError.textContent = 'Недопустимый формат';
    } else {
      event.target.setCustomValidity('');
      usernameError.textContent = '';
    }

  });


  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  validation
    .addField('.name', [{
      rule: 'minLength',
      value: 2,
      errorMessage: "Вы не ввели имя",
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: "Вы ввели больше чем положено"
    },

    ])

    .addField('.tel', [{
      rule: "function",
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10
      },
      errorMessage: 'Вы не ввели телефон',
    }])
    .onSuccess((event) => {
      validation.form.submit()
      event.preventDefault();
    });

})
