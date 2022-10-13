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