# Commit Fit Landing Page

A landing page website for people who are seeking a gym which fits thier demand.


## Demo Link

- [Live](https://commit-fit.netlify.app)

![This is an image](./img/Screen%20Shot%202022-09-15%20at%203.56.46%20PM.png)

## Built With

- HTML
- CSS (SASS)
- JavaScript

## Features

A video background takes up the entire hero section for tablets or desktop devices. There are main titles and buttons on top of it, allowing users to get more attention. But it also might take time to load for the mobile so it will be switched to the static image as the background which is still effective.

## Challenging Part

Setting breakpoint effeciantly by SASS. There are many ways to do so but I put @mixin with below codes.

```
/// @prop {String} keys 
/// @prop {Map} values 
$breakpoints: (
  //this site is mobile fast so the default is (0-767)
  "medium": 768px,
  "large": 1024px
) !default;

@mixin break($width) {
  @media screen and (min-width: $width) {
    @content;
  }
}
```


