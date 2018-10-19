// /*!
//  * jQuery Touch Plugin 1.0.1
//  * https://github.com/upwards/jquery-touch
//  *
//  * @autor Alexey Kupriyanenko (a.kupriyanenko@gmail.com)
//  */
// (function($, undefined) {
//     /**
//      * Determines the status of finger over the object
//      * @param {jQuery} $that
//      */
//     var isTouchStateLeave = function($that) {
//         var startX = $that.offset().left
//             , startY = $that.offset().top
//             , endX   = $that.outerWidth() + startX
//             , endY   = $that.outerHeight() + startY;
//
//         touchX = event.touches[0].pageX;
//         touchY = event.touches[0].pageY;
//
//         var isXY = ((touchX > startX) && (touchX < endX)) &&
//             ((touchY > startY) && (touchY < endY));
//         if (!isXY) {
//             return true;
//         }
//
//         return false;
//     }
//
//     jQuery.fn.extend({
//         // Bind an event handler to the "touchstart" JavaScript event.
//         touchenter: function(fn) {
//             $(this).each(function() {
//                 if (this == undefined)
//                     return;
//
//                 var that = this
//                     , $that = $(this)
//                     , isRun = false;
//
//                 // that.addEventListener('touchstart', function(event) {
//                 //     event.preventDefault();
//                 // }, false);
//
//                 that.addEventListener('touchmove', function(event) {
//                     if (!isTouchStateLeave($that)) {
//                         if (isRun) fn.call(that, event);
//                         isRun = false;
//                     } else
//                         isRun = true;
//                 }, false);
//             })
//
//             return this;
//         }
//     })
// }(jQuery));