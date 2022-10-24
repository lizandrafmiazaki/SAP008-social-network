export function signupValidation(name, username, email, password) {
    username = username.trim();
    email = email.trim();
    password = password.trim();
    if (name ==='' && username ==='' && email ==='' && password ==='') {
      return 'Por favor, preencha todos os campos.'
    }
    if (name === '') {
      return 'Por favor, digite seu nome.';
    }
    if (username === '') {
      return 'Por favor, preencha seu username.';
    }
    if (email === '') {
      return 'Por favor, digite sua e-mail.';
    }
    if (password === '') {
        return 'Por favor, digite sua senha.';
      }
    if (password.length < 6) {
          return 'A senha deve possuir pelo menos 6 caracteres.'
        }
    return;
  }

  
  export function loginValidation (email, password) {
    email = email.trim();
    password = password.trim();
    if (email ==='' && password ==='') {
      return 'Por favor, preencha todos os campos.'
    }
    if (email === '') {
      return 'Por favor, digite sua e-mail.';
    }
    if (password === '') {
      return 'Por favor, digite sua senha.';
    }
    if (password.length < 6) {
        return 'A senha deve possuir pelo menos 6 caracteres.'
      }
    return;
  }