class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header>
      <section class="hero py-3 is-main-bg">
      <div class="is-flex hero-body is-justify-content-space-between">
        <div>
          <p class="title is-white mb-20">Organization Name</p>
        </div>
        <div class="is-white-bg p-4 is-rounded button" style="height: auto">
          <img src="./assets/icons/uni-logo.svg" />
        </div>
      </div>
      <div class="is-flex mx-6">
        <!-- language dropdown -->
        <div id="lang-list" class="navbar-item has-dropdown mr-4">
          <a id="lang-btn"> <img src="./assets/icons/lang-icon.svg" /> </a>
          <div class="navbar-dropdown">
            <a class="navbar-item"> English </a>
            <a class="navbar-item"> Arabic </a>
          </div>
        </div>
        <!--  -->

        <!-- login/logout dropdown -->
        <div id="login-list" class="navbar-item has-dropdown">
          <a id="login-btn"> <img src="./assets/icons/login-icon.svg" /> </a>
          <div class="navbar-dropdown">
            <a class="navbar-item"> Login </a>
            <a class="navbar-item"> SingUp </a>
          </div>
        </div>
        <!--  -->
      </div>
    </section>
    </header>
    `;
  }
}

customElements.define("header-component", Header);
