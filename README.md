# Commit Fit Landing Page

A gym landing page website which is built with SASS and vanilla JavaScript.


## Demo Link

- [Commit Fit Landing Page](https://commit-fit.netlify.app)

![The sample image](./img/Screen%20Shot%202022-09-15%20at%203.56.46%20PM.png)

## Built With

- HTML
- CSS (SASS)
- JavaScript

## Features

The video background takes up the entire hero section for tablets or desktop devices. There are main titles and buttons on top of it, so it allows users to get more attention for them. But it also might take time to load for a mobile so it will be switched to the static image as the background which still has effectiveness.

## Challenging Part

Handling SASS efficiently such as multiple used components and setting breakpoints. 
There were many ways to do so but using @mixin like below made writing codes more straightforward successfully.

```css
$breakpoints: (
  "medium": 768px,
  "large": 1024px
) !default;

@mixin break($width) {
  @media screen and (min-width: $width) {
    @content;
  }
}
```


