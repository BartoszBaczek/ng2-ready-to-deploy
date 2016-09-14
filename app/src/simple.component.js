"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SimpleComponent = (function () {
    function SimpleComponent() {
    }
    SimpleComponent = __decorate([
        core_1.Component({
            selector: 'simple-component',
            template: "<div class=\"simple-component\">\n                <div class=\"simple-text\">Simple component</div>\n            </div>",
            styles: [".simple-component {\n                background-color: red;\n            }\n            .simple-text {\n                color: blue;\n            }"]
        }), 
        __metadata('design:paramtypes', [])
    ], SimpleComponent);
    return SimpleComponent;
}());
exports.SimpleComponent = SimpleComponent;