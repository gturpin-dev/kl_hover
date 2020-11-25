# KL Hover
> A Css library for images hover effects

## Demo
Demo available at <a href="https://hover.gturpin.fr">https://hover.gturpin.fr</a>   

Effects code is <a href="https://gitlab.com/krealab/interne/game-of-snippets/blob/master/kl_hover/assets/src/scss/">here</a>.  

## Import project

Start by adding the css file.
  `Using compiled version :`

```css
<link rel="stylesheet" href="./path/to/file/kl_hover.css">
```

`Using source files version :`

Add same `<link>` to your `HTML` document and in the `Sass` files, import whatever you need and feel free to import your own effects.

```scss
@import './base';
@import './container';

// import basic effects
@import './basic/kl_hvr-blur';
@import './basic/kl_hvr-fade';
@import './basic/kl_hvr-flip';
@import './basic/kl_hvr-fold';
@import './basic/kl_hvr-hinge';
@import './basic/kl_hvr-push';
@import './basic/kl_hvr-reveal';
@import './basic/kl_hvr-shutter-in';
@import './basic/kl_hvr-shutter-out';
@import './basic/kl_hvr-shutter-in-out';
@import './basic/kl_hvr-slide';
@import './basic/kl_hvr-zoom';

// import extra effects
@import './extra/kl_hvr-back';
@import './extra/kl_hvr-pasDeNom';
@import './extra/kl_hvr-zoom';
@import './extra/kl_hvr-overlay-expand';
```

## Basic Usage

Just add a `<figure>` tag with your class and the structure below to add your awesome hover effect.  
You can add a link after the `<figcaption>` to set a link to the image.  
You can add whatever you want in the figcaption but you must set your own settings.  
By default, use `<h3>`, and `<p>` to get basic animations.

```html
<figure class="kl_hvr-fade">
  <img src="image.jpg" alt="image">
  <figcaption>
    <h3>Title</h3>
    <p>Description</p>
  </figcaption>
  <a href="#"></a><!-- optionnal, to add link to image -->
</figure>
```

## Styling Background Color

To change color of an effect, simply add a `background-color` to the `<figure>` .  
Notice that default `background-color` in demo is `rgba(1, 87, 155, 0.75)` .  
It will works because figcaption and pseudo elements have a `background-color: inherit;` .  
Then if you want to change only specific parts of effect, select only one you interested by and change its `background-color` value.

```html
<figure class="kl_hvr-fade" style="background-color: #6f6f6f;">
  <img src="image.jpg" alt="image">
  <figcaption>
    <h3>Title</h3>
    <p>Description</p>
  </figcaption>
  <a href="#"></a><!-- optionnal, to add link to image -->
</figure>
```

Alternatively you can also custom the color using css.  
This will change the color to the `fade` effect.

```css
.kl_hvr-fade {
  background-color: dodgerblue;
}
```

## Compatibility

The project use `gulp` to build final css, so `autoprefixer`, `uncss` and `minify` are used to improve performance and compatibility.  
The compatibility between browser rise up with time and all effects works on modern browsers like `chrome` or `firefox`
