import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `flickity-slider`
 * A Polymer (lit-element) wrapper for Flickity.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class FlickitySlider extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
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
