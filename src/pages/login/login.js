export default () => {
    const container = document.createElement("div");

    const template = 
    `
    <h1>Bem-vinda, ao Miacolhe!</h1>
    <section>
        <form>
          <textarea name="" id="" placeholder="Insira seu e-mail"></textarea>
          <textarea name="" id="" placeholder="Insira sua senha"></textarea>
          <button class="btn" type="submit">Entrar</button>
        </form>
        <div class="lines"></div>
        <button class="btn">Login com Google</button>
        <div class="lines"></div>
        <button class="btn">Clique aqui para se cadastrar</button>
    </section>
    `;

    container.innerHTML = template;

    return container;
}