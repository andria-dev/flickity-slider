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

    // default options
    this.options = {
      prevNextButtons: true,
      pageDots: true
    }
    this.parallax = false
  }

  static get properties() {
    return {
      options: Object,
      parallax: Boolean
    };
  }

  createRenderRoot() {
    return this;
  }

  connectedCallback(...args) {
    super.connectedCallback(...args);

    this._flickity = new Flickity(this, this.options);

    if (this.parallax) {

      this._flickity.on('scroll', () => {
        // const imgs = 

        this._flickity.slides.forEach((slide, index) => {
          console.log({ slide })
          // const img = imgs[index];
          // const x = (slide.target + this._flickity.x) * -1/3;
          // img.style.transform = `translateX(${x}px)`;
        });
      });
    } else {
      console.log(this.parallax, this)
    }
  }

  updated(changedProperties) {
    super.updated(changedProperties)
    console.log(this.parallax)
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
