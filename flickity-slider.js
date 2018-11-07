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

    setTimeout(() => this._flickity.resize())

    if (this.parallax !== false) {
      this._flickity.on('scroll', this.updateParallax.bind(this));
    }
  }

  disconnectedCallback(...args) {
    super.disconnectedCallback(...args);
    this._flickity.destroy()
  }

  updateParallax() {
    const imageList = this.parallax
      ? this.children[0].children[0].querySelectorAll(this.parallax)
      : this.children[0].children[0].children

    this._flickity.slides.forEach((slide, index) => {
      const image = imageList[index];
      const x = (slide.target + this._flickity.x) * -1/3;

      image.style.transform = `translateX(${x}px)`;
    });
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
