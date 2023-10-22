class LinksEdit extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    `;
  }
}

customElements.define("edit-links-component", LinksEdit);
