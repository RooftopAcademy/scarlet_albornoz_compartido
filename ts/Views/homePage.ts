export default function homePage(): string {
  return /* html */ `
    <section class="section">
        <img src="img/mushi.ico" alt="Mushroom logo">
        <hgroup id="brand">
            <h1 class="brand-title">Welcome to Mushi Notebooks!</h1>
            <h2 class="brand-subtitle">Where you can find everything for your DIY Agenda</h2>
        </hgroup>
        <a class="btn nav-link" href="/produc">View our product list!</a>
    </section>
    `;
}
