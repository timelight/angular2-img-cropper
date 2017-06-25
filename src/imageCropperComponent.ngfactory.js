"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("@angular/common");
var i2 = require("./imageCropperComponent");
var styles_ImageCropperComponent = [];
exports.RenderType_ImageCropperComponent = i0.ɵcrt({ encapsulation: 2,
    styles: styles_ImageCropperComponent, data: {} });
function View_ImageCropperComponent_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 0, 'input', [['accept',
                'image/*'], ['type', 'file']], null, [[null, 'change']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('change' === en)) {
                var pd_0 = (_co.fileChangeListener($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null))], null, null);
}
function View_ImageCropperComponent_0(_l) {
    return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { cropcanvas: 0 }), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 7, 'span', [['class',
                'ng2-imgcrop']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n          '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_ImageCropperComponent_1)), i0.ɵdid(16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n          '])), (_l()(),
            i0.ɵeld(0, [[1, 0], ['cropcanvas', 1]], null, 1, 'canvas', [], null, [[null, 'mousedown'], [null, 'mouseup'],
                [null, 'mousemove'], [null, 'mouseleave'], [null,
                    'touchmove'], [null, 'touchend'], [null, 'touchstart']], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (('mousedown' === en)) {
                    var pd_0 = (_co.onMouseDown($event) !== false);
                    ad = (pd_0 && ad);
                }
                if (('mouseup' === en)) {
                    var pd_1 = (_co.onMouseUp($event) !== false);
                    ad = (pd_1 && ad);
                }
                if (('mousemove' === en)) {
                    var pd_2 = (_co.onMouseMove($event) !== false);
                    ad = (pd_2 && ad);
                }
                if (('mouseleave' === en)) {
                    var pd_3 = (_co.onMouseUp($event) !== false);
                    ad = (pd_3 && ad);
                }
                if (('touchmove' === en)) {
                    var pd_4 = (_co.onTouchMove($event) !== false);
                    ad = (pd_4 && ad);
                }
                if (('touchend' === en)) {
                    var pd_5 = (_co.onTouchEnd($event) !== false);
                    ad = (pd_5 && ad);
                }
                if (('touchstart' === en)) {
                    var pd_6 = (_co.onTouchStart($event) !== false);
                    ad = (pd_6 && ad);
                }
                return ad;
            }, null, null)), (_l()(), i0.ɵted(null, ['\n          '])),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n      ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = !_co.settings.noFileInput;
        _ck(_v, 5, 0, currVal_0);
    }, null);
}
exports.View_ImageCropperComponent_0 = View_ImageCropperComponent_0;
function View_ImageCropperComponent_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'img-cropper', [], null, null, null, View_ImageCropperComponent_0, exports.RenderType_ImageCropperComponent)), i0.ɵdid(4898816, null, 0, i2.ImageCropperComponent, [i0.Renderer], null, null)], null, null);
}
exports.View_ImageCropperComponent_Host_0 = View_ImageCropperComponent_Host_0;
exports.ImageCropperComponentNgFactory = i0.ɵccf('img-cropper', i2.ImageCropperComponent, View_ImageCropperComponent_Host_0, { settings: 'settings',
    image: 'image', inputImage: 'inputImage', cropper: 'cropper', cropPosition: 'cropPosition' }, { cropPositionChange: 'cropPositionChange', onCrop: 'onCrop' }, []);
//# sourceMappingURL=imageCropperComponent.ngfactory.js.map