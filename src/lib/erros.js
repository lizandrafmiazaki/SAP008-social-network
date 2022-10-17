export function errorMessages(error) {
  switch (error.code) {
    case 'auth/email-already-in-use':
      return 'O e-mail inserido já possui cadastro. Por favor, retorne para a página de login.';
    case 'auth/user-not-found':
      return 'Parece que você ainda não tem uma conta. Por favor, faça seu cadastro.';
    case 'auth/invalid-email':
      return 'E-mail incorreto ou inválido. Por favor, digite um e-mail válido.';
    case 'auth/wrong-password':
      return 'Senha incorreta. Por favor, digite sua senha novamente.';
    // case 'auth/weak-password':
    //   return 'A senha deve possuir pelo menos 6 caracteres.';
    default:
      return `Aconteceu um erro inesperado. Por favor, entre em contato e informe o erro as desenvolvedoras: código ${error.code}`;
  }
}

export function fieldVerification(name, username, email, password) {
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
  return;
}


export function passwordValidation (password) {
  password = password.trim();

  if(password === '') {
    return 'A senha não pode ser vazia. Por favor, digite sua senha.';
  }
  if (password.length < 6) {
    return 'A senha deve possuir pelo menos 6 caracteres.'
  }
  return;
}

export function loginValidation (email, password) {
  if (email ==='' && password ==='') {
    return 'Por favor, preencha todos os campos.'
  }
  if (email === '') {
    return 'Por favor, digite sua e-mail.';
  }
  if (password === '') {
    return 'Por favor, digite sua senha.';
  }
  return;
}


// export function formValidation (email, password, name, username) {
//   email = email.trim()
//   password = password.trim();
//   name = name.trim();
//   username = username.trim();

//   if (email ==='' && password ==='') {
//     return 'Por favor, digite seu e-mail e senha.'
//   } 
//   if (email ==='' && password ==='' && name ==='' && username ==='') {
//     return 'Por favor, preencha todos os campos.'
//   }
//   if (email === '') {
//     return 'Por favor, digite sua e-mail.';
//   }
//   if (password === '') {
//     return 'Por favor, digite sua senha.';
//   }
//   if (password.length < 6) {
//     return 'A senha deve possuir pelo menos 6 caracteres.'
//   }
//   if (name === '') {
//     return 'Por favor, digite seu nome.';
//   }
//   if (username === '') {
//     return 'Por favor, preencha seu username.';
//   }

//   return;
// }