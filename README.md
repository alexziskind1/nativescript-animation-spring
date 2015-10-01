# NativeScript Spring Animation

A NativeScript plugin that adds the Spring effect to animations. The iOS curves that are supported include Linear, EaseIn, EaseOut and EaseInOut, but no Spring. Currently this module supports only iOS, but since Android animation curves include a 'spring-type' of animation, a similar effect already exists.

![](screenshots/animation_spring.gif)

## Installation

```
$ tns plugin add nativescript-animation-spring
```

This command automatically installs the necessary files, as well as stores nativescript-animation-spring as a dependency in your project's `package.json` file.


## Usage

To use the animation spring module you must first `require()` it. After you `require()` the module you have access to its APIs.

``` js
var animationSpringModule = require("nativescript-animation-spring");
```

## API

### View.animate Method

Use the `View.animate()` method as you normally would just as described in the NativeScript Docs in the [`Animation Section`](https://docs.nativescript.org/animation.html). In order to get the Spring effect, there are several options that need to be specified besides the standard ones like transform and scale:

- duration: decimal (in ms)
- delay: decimal (in ms)
- dampingRatio: float
- velocity: float
- options: object (UIViewAnimationOptions)
- curve: string (*to use the spring animation, curve must be set to "spring"*)

The full set of options is documented on the [Apple developer site](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIView_Class/#//apple_ref/occ/clm/UIView/animateWithDuration:delay:usingSpringWithDamping:initialSpringVelocity:options:animations:completion:). Modifying these options gives a different spring-like effect. Here is an example function call for the screenshot above (although it looks much smoother on the emulator or the actual device since the GIF is not 60 frames per second).

``` js
myView.animate({
            translate: {
                x: 0,
                y: -100
            },
            scale: {
                x: 2,
                y: 2
            },
            duration: 10000,
            delay: 0,
            dampingRatio: 0.3,
            velocity: 2.0,
            options: null,
            curve: "spring" //<---set this to "spring" to use the spring animation
        })
```

Whether you include this plugin or not, calling the animate function above will work as the extra parameters will be ignored by the NativeScript animate function.

