import { LitElement, html } from '@polymer/lit-element';

import './node_modules/flickity/dist/flickity.pkgd'

/**
 * `flickity-slider`
 * A Polymer (lit-element) wrapper for Flickity.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class FlickitySlider extends LitElement {
  constructor() {
    super();
    this.options = {
      prevNextButtons: true,
      pageDots: true
    }
  }

  static get properties() {
    return {
      options: Object
    };
  }

  createRenderRoot() {
    return this;
  }

  connectedCallback(...args) {
    super.connectedCallback(...args);
    this._flickity = new Flickity(this, this.options);
  }

  disconnectedCallback(...args) {
    super.disconnectedCallback(...args);
    this._flickity.destroy()
  }
};

fetch('/node_modules/flickity/dist/flickity.min.css')
  .then(res => res.text())
  .then(text => document.head.innerHTML += `
    <style>
      ${text}

      flickity-slider {
        display: block;
      }
    </style>
  `)

window.customElements.define('flickity-slider', FlickitySlider);
