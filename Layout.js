class Layout extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.innerHTML = `
    <header>
        <slot name="header"></slot>
    </header>
    <slot>
        Hola Layout
    </slot>`
  }
}
customElements.define('my-layout', Layout)
