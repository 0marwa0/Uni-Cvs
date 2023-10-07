class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
  <footer>
      <section class="hero is-main-bg p-4">
        <div class="columns">
          <div class="column is-white is-four-fifths">
            Technical Support : support@gmail.com
          </div>
          <div class="column">
            <div class="columns">
              <section class="column has-text-centered">
                <div class="is-white title">444</div>
                <div class="is-white">Visits</div>
              </section>
              <section class="column has-text-centered">
                <div class="is-white title">8584</div>
                <div class="is-white">Visits</div>
              </section>
            </div>
            <section class="has-text-centered">
              <div class="is-white title">66s</div>
              <div class="is-white">Fetch time</div>
            </section>
          </div>
        </div>
        <div class="is-white has-text-centered">Copyright Al-x org ©2023</div>
      </section>
    </footer> 
    `;
  }
}

customElements.define("footer-component", Footer);
