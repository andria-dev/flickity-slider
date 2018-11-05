import {LitElement, html} from '@polymer/lit-element';

/**
 * `flickity-slider`
 * A Polymer (lit-element) wrapper for Flickity.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class FlickitySlider extends LitElement {
  render() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello ${this.prop1}!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'flickity-slider',
      },
    };
  }
}

window.customElements.define('flickity-slider', FlickitySlider);
