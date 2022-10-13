export function errorMessages(error) {
  switch (error.code) {
    case 'auth/invalid-email':
      return 'O endereço de e-mail não é válido. Por favor, digite um e-mail válido.';
    case 'auth/email-already-in-use':
      return 'O e-mail inserido já possui cadastro. Por favor, retorne para a página de login.';
    case 'auth/wrong-password':
      return 'Senha incorreta. Por favor, digite sua senha novamente.';
    case 'auth/weak-password':
      return 'A senha deve possuir pelo menos 6 caracteres.';
    default:
      return null;
  }
}

export function fieldVerification(name, username, email, password) {
  // if (name === '' || username === '' || email === '' || password === '') {
  //   return 'Por favor, preencha os campos obrigatórios';
  // }
  if (name === '') {
    return 'Por favor, digite seu nome.';
  }
  if (username === '') {
    return 'Por favor, preencha seu username.';
  }
  if (email === '') {
    return '';
  }
  if (password === '') {
    return 'Por favor, digite sua senha.';
  }
  return '';
}
