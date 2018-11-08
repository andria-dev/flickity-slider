<!-- [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/owner/my-element) -->

# \<flickity-slider\>

A Polymer (lit-element) wrapper for Flickity.

## Running locally

```
$ npm install
$ polymer serve
```

[then open "http://127.0.0.1:8081/components/flickity-slider/demo/" in your browser](http://127.0.0.1:8081/components/flickity-slider/demo/)

You can now make changes and they will reflect in the demo.

## Running Tests

```
$ polymer serve
```

[then open "http://127.0.0.1:8081/components/flickity-slider/test/" in your browser](http://127.0.0.1:8081/components/flickity-slider/test/)

## Example

<!--
```
<custom-element-demo>
  <template>
    <link rel='stylesheet' href='node_modules/flickity/dist/flickity.min.css'>
    <script type='module' src='flickity-slider.js'></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->

```html
<flickity-slider>
  <img src='https://picsum.photos/800/500/?random'>
  <img src='https://picsum.photos/800/500/?random'>
  <img src='https://picsum.photos/800/500/?random'>
</flickity-slider>
```
