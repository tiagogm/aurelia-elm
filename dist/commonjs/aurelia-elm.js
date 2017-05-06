'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AureliaElm = undefined;

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

var _aureliaFramework = require('aurelia-framework');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var AureliaElm = exports.AureliaElm = (_class = function () {
  function AureliaElm() {
    _classCallCheck(this, AureliaElm);

    _initDefineProp(this, 'src', _descriptor, this);

    _initDefineProp(this, 'flags', _descriptor2, this);

    _initDefineProp(this, 'ports', _descriptor3, this);
  }

  AureliaElm.prototype.attached = function attached() {
    this.bootApp();
  };

  AureliaElm.prototype.srcChanged = function srcChanged(src, oldSrc) {
    if (src && oldSrc !== undefined) this.bootApp();
  };

  AureliaElm.prototype.bootApp = function bootApp() {
    var src = this.src,
        elemRef = this.elemRef,
        flags = this.flags,
        ports = this.ports;


    if (!elemRef) {
      console.error('DOM Element reference not found');
      return;
    }

    if (!src || typeof src.embed !== 'function') {
      console.error('Src does not look like an elm-like object', src);
      return;
    }

    var app = this.src.embed(elemRef, flags || undefined);

    if (typeof this.ports === 'function') {
      debugger;
      this.ports(app.ports);
    }

    return app;
  };

  return AureliaElm;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'src', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'flags', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'ports', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
})), _class);