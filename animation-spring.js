var viewModule = require("ui/core/view");

var _animateBack = viewModule.View.prototype.animate;

viewModule.View.prototype.animate = function(animation) {
    var self = this;
    if (animation.curve && typeof(animation.curve === "string") && animation.curve.toLowerCase() === "spring") {
        
        var aTrans = {x: 0, y: 0};
        var aScale = {x: 1, y: 1};
        
        if (animation.translate) {
            if (animation.translate.x)
                aTrans.x = animation.translate.x;
            if (animation.translate.y)
                aTrans.y = animation.translate.y;
        }
        if (animation.scale) {
            if (animation.scale.x)
                aScale.x = animation.scale.x;
            if (animation.scale.y)
                aScale.y = animation.scale.y;
        }
        
        return new Promise(function(resolve,reject){
               try { 
                   UIView.animateWithDurationDelayUsingSpringWithDampingInitialSpringVelocityOptionsAnimationsCompletion(
                        animation.duration / 1000,
                        animation.delay /1000,
                        animation.dampingRatio,
                        animation.velocity,
                        animation.options,
                        function () {
                            self.translateX = aTrans.x;
                            self.translateY = aTrans.y;
                            self.scaleX = aScale.x;
                            self.scaleY = aScale.y;
                        },
                        resolve
                   );
               }
               catch (ex) {
                   reject();   
               }
        });
    } else {
        return _animateBack.call(this, animation);
    }
};
