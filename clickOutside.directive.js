System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ClickOutsideDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ClickOutsideDirective = (function () {
                function ClickOutsideDirective(_elementRef) {
                    this._elementRef = _elementRef;
                    this.clickOutside = new core_1.EventEmitter();
                }
                ClickOutsideDirective.prototype.onClick = function (targetElement) {
                    if (!targetElement) {
                        return;
                    }
                    var clickedInside = this._elementRef.nativeElement.contains(targetElement);
                    if (!clickedInside) {
                        this.clickOutside.emit(null);
                    }
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ClickOutsideDirective.prototype, "clickOutside", void 0);
                __decorate([
                    core_1.HostListener('document:click', ['$event.target']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], ClickOutsideDirective.prototype, "onClick", null);
                ClickOutsideDirective = __decorate([
                    core_1.Directive({
                        selector: '[clickOutside]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], ClickOutsideDirective);
                return ClickOutsideDirective;
            }());
            exports_1("ClickOutsideDirective", ClickOutsideDirective);
        }
    }
});

//# sourceMappingURL=clickOutside.directive.js.map
