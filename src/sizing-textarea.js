class SizingTextarea extends HTMLTextAreaElement {
  _rendered = false;

  constructor() {
    super();
  }

  connectedCallback() {
    if (this._rendered === false) {
      this.render();
      this._rendered = true;
    }
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[`handle${name[0].toUpperCase()}${name.substring(1)}`](newValue);
    this.render();
  }

  render() {
    const style = `
      --padding: 1em;
      
      field-sizing: content;
      line-height: 1.5;
      padding: var(--padding);
      padding-inline: calc((var(--padding) + calc(1lh - 1ex) / 2));

      border-radius: 10px;
      width: 400px;
    `;
    this.style = style;
  }
}

customElements.define('sizing-textarea', SizingTextarea, {extends: 'textarea'});