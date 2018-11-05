# \<flickity-slider\>

A Polymer (lit-element) wrapper for Flickity.

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.


<custom-element-demo>
  <template>
    <link rel='stylesheet' href='./node_modules/flickity/dist/flickity.min.css'>
    <script type='module' src='./flickity-slider.js'></script>
    <flickity-slider>
      <img src='https://picsum.photos/800/500/?random'>
      <img src='https://picsum.photos/800/500/?random'>
      <img src='https://picsum.photos/800/500/?random'>
    </flickity-slider>
  </template>
</custom-element-demo>