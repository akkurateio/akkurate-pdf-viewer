'use strict';Object.defineProperty(exports,'__esModule',{value:true});var vuePropertyDecorator=require('vue-property-decorator'),pdf=require('vue-pdf'),vuescroll=require('vuescroll'),PulseLoader=require('vue-spinner/src/PulseLoader.vue');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}var pdf__default=/*#__PURE__*/_interopDefaultLegacy(pdf);var vuescroll__default=/*#__PURE__*/_interopDefaultLegacy(vuescroll);var PulseLoader__default=/*#__PURE__*/_interopDefaultLegacy(PulseLoader);function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _initializerDefineProperty(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
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
    Object.defineProperty(target, property, desc);
    desc = null;
  }

  return desc;
}var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp;
var defaultZoom = 800;
var AkkPdfViewer = (_dec = vuePropertyDecorator.Component({
  components: {
    pdf: pdf__default['default'],
    vuescroll: vuescroll__default['default'],
    PulseLoader: PulseLoader__default['default']
  }
}), _dec2 = vuePropertyDecorator.Prop({
  type: String,
  required: true
}), _dec3 = vuePropertyDecorator.Prop({
  default: false
}), _dec4 = vuePropertyDecorator.Prop({
  default: '#1D189C'
}), _dec5 = vuePropertyDecorator.Prop({
  default: false
}), _dec6 = vuePropertyDecorator.Ref(), _dec7 = vuePropertyDecorator.Ref(), _dec8 = vuePropertyDecorator.Watch('src', {
  immediate: true
}), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Vue) {
  _inherits(AkkPdfViewer, _Vue);

  var _super = _createSuper(AkkPdfViewer);

  function AkkPdfViewer() {
    var _this;

    _classCallCheck(this, AkkPdfViewer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "srcPdf", _descriptor, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "withTools", _descriptor2, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "colorScroll", _descriptor3, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "zoomable", _descriptor4, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "pdfCanvas", _descriptor5, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "mainContainer", _descriptor6, _assertThisInitialized(_this));

    _this.src = null;
    _this.loadedRatio = 0;
    _this.page = 1;
    _this.numPages = 0;
    _this.rotate = 0;
    _this.zoom = defaultZoom;
    _this.message = null;
    _this.loading = false;
    _this.ops = {};
    return _this;
  }

  _createClass(AkkPdfViewer, [{
    key: "onSrcChanged",
    value: function () {
      var _onSrcChanged = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _pdf;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.loading = true;
                _context.prev = 1;

                if (!(this.src && this.src.promise && this.src.promise instanceof Promise)) {
                  _context.next = 9;
                  break;
                }

                _context.next = 5;
                return this.src.promise;

              case 5:
                _pdf = _context.sent;
                this.message = null;
                this.numPages = _pdf.numPages;
                this.loading = false;

              case 9:
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                this.message = 'Erreur de chargement du PDF.';
                console.log(_context.t0);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 11]]);
      }));

      function onSrcChanged() {
        return _onSrcChanged.apply(this, arguments);
      }

      return onSrcChanged;
    }()
  }, {
    key: "created",
    value: function created() {
      this.src = pdf__default['default'].createLoadingTask(this.srcPdf);
      this.ops = _objectSpread2(_objectSpread2({}, this.ops), {}, {
        vuescroll: {
          mode: this.zoomable ? 'slide' : 'native',
          zooming: this.zoomable
        },
        pullRefresh: {
          enable: true
        },
        pushLoad: {
          enable: true,
          auto: true,
          autoLoadDistance: 10
        },
        bar: {
          background: this.colorScroll
        }
      });
      console.log("Yes", this.ops, this.zoomable);
    }
  }, {
    key: "zoomPdf",
    value: function zoomPdf(zoomVal) {
      var pdfArray = document.getElementsByClassName('akk-pdf-canvas');
      pdfArray[0].getBoundingClientRect();

      if (zoomVal > 0) {
        this.zoom = (100 * this.zoom / defaultZoom + 25) * defaultZoom / 100;

        for (var i = 0; i < pdfArray.length; i++) {
          pdfArray[i].style['width'] = "".concat(this.zoom, "px");
        }

        return;
      } else {
        if ((100 * this.zoom / defaultZoom - 25) * defaultZoom / 100 > 200) {
          this.zoom = (100 * this.zoom / defaultZoom - 25) * defaultZoom / 100;

          for (var _i = 0; _i < pdfArray.length; _i++) {
            pdfArray[_i].style['width'] = "".concat(this.zoom, "px");
          }

          return;
        }
      }
    }
  }, {
    key: "zoomIn",
    value: function zoomIn() {
      this.zoomPdf(1);
    }
  }, {
    key: "zoomOut",
    value: function zoomOut() {
      this.zoomPdf(-1);
    }
  }, {
    key: "scrollInPdf",
    value: function scrollInPdf() {
      if (!this.mainContainer) {
        return;
      }

      var totalHeight = this.mainContainer.scrollHeight;
      var userScroll = this.mainContainer.scrollTop;
      this.page = Math.trunc(userScroll * this.numPages / totalHeight) + 1;
    }
  }, {
    key: "changePage",
    value: function changePage(page) {
      if (!this.pdfCanvas) {
        return;
      }

      if (page <= 0) page = 1;
      if (page > this.numPages) page = this.numPages;
      this.page = page;
      this.pdfCanvas[this.page - 1].scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, {
    key: "changeSrc",
    value: function changeSrc(src) {
      this.src = pdf__default['default'].createLoadingTask(src);
    }
  }]);

  return AkkPdfViewer;
}(vuePropertyDecorator.Vue), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "srcPdf", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "withTools", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "colorScroll", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "zoomable", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "pdfCanvas", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "mainContainer", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, "onSrcChanged", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "onSrcChanged"), _class2.prototype)), _class2)) || _class);function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = AkkPdfViewer;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    ref: "mainContainer",
    staticClass: "akk-pdf-viewer",
    on: {
      "scroll": _vm.scrollInPdf
    }
  }, [_vm.loading && !_vm.message ? _vm._ssrNode("<div class=\"akk-pdf-loading\">", "</div>", [_c('pulse-loader', {
    attrs: {
      "loading": _vm.loading
    }
  })], 1) : _c('vuescroll', {
    staticClass: "akk-pdf-content",
    attrs: {
      "ops": _vm.ops
    }
  }, [_vm.loadedRatio > 0 && _vm.loadedRatio < 1 ? _c('div', {
    staticClass: "progress"
  }, [_c('div', {
    staticClass: "progress-bar progress-bar-striped progress-bar-animated",
    style: {
      width: _vm.loadedRatio * 100 + '%'
    },
    attrs: {
      "aria-valuenow": _vm.loadedRatio * 100,
      "aria-valuemax": "100",
      "aria-valuemin": "0",
      "role": "progressbar"
    }
  })]) : _vm._e(), _vm._v(" "), _vm._l(_vm.numPages, function (i) {
    return _c('div', {
      key: i,
      ref: "pdfCanvas",
      refInFor: true,
      staticClass: "akk-pdf-canvas"
    }, [_c('pdf', {
      ref: "pdf",
      refInFor: true,
      attrs: {
        "id": "akk-pdf-page-" + i,
        "page": i,
        "rotate": _vm.rotate,
        "src": _vm.src
      },
      on: {
        "link-clicked": function linkClicked($event) {
          _vm.page = $event;
        },
        "progress": function progress($event) {
          _vm.loadedRatio = $event;
        }
      }
    })], 1);
  })], 2), _vm._ssrNode(" " + (_vm.message ? "<div class=\"akk-pdf-error\"><svg height=\"128\" viewBox=\"0 0 128 128\" width=\"128\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"m87 102 3.5 5.25-2.5 3.75-3.5-5.25zm-12 0 3.5 5.25-2.5 3.75-3.5-5.25zm-12 0 3.5 5.25-2.5 3.75-3.5-5.25zm-12 0 3.5 5.25-2.5 3.75-3.5-5.25zm-12 0 3.5 5.25-2.5 3.75-3.5-5.25zm25-71c19.882251 0 36 16.117749 36 36v42c0 .645453-.0169864 1.286938-.0505367 1.924034l-5.9494633-8.924034-1 1.5v-36.5c0-18.7012521-14.25984-34.0719401-32.4994394-35.8319833 1.1513984-.111181 2.3187815-.1680167 3.4994394-.1680167zm-36 72.5 2.5 3.75-2.449 3.674-.0266344-.587053c-.0161968-.443647-.0243656-.889343-.0243656-1.336947z\" fill=\"#f5f5f5\"></path> <path d=\"m29 107.697575 4.9999767-7.500386 6.0000233 9.000035 6-9 6 9 6-9 6 9 6-9 6 9 6-9 6 9 5.9999925-8.999988 5.0000075 7.499875v-40.697111c0-9.6649831-3.9175084-18.4149831-10.2512627-24.7487373-6.3337542-6.3337543-15.0837542-10.2512627-24.7487373-10.2512627s-18.4149831 3.9175084-24.7487373 10.2512627c-6.3337543 6.3337542-10.2512627 15.0837542-10.2512627 24.7487373z\" stroke=\"#000\" stroke-width=\"2\"></path> <rect fill=\"#000\" height=\"4\" rx=\"2\" width=\"22\" x=\"53\" y=\"86\"></rect> <rect fill=\"#000\" height=\"4\" rx=\"2\" width=\"10\" x=\"40\" y=\"77\"></rect> <rect fill=\"#000\" height=\"4\" rx=\"2\" width=\"10\" x=\"78\" y=\"77\"></rect> <g fill=\"#ccc\"><path d=\"m24 20c0 4.9705627 4.0294373 9 9 9 .536787 0 1.062598-.0469934 1.5735435-.1370907-1.6003862 2.4888038-4.3944758 4.1370907-7.5735435 4.1370907-4.9705627 0-9-4.0294373-9-9 0-4.4337758 3.2061271-8.1187205 7.4264565-8.8629093-.9030194 1.4021744-1.4264565 3.0714142-1.4264565 4.8629093z\"></path> <path d=\"m76.5 19.25-2.0572484 1.0815595.3928995-2.2907798-1.6643489-1.6223392 2.3000736-.3342202 1.0286242-2.0842203 1.0286242 2.0842203 2.3000736.3342202-1.6643489 1.6223392.3928995 2.2907798z\"></path> <path d=\"m105.5 47.25-2.057248 1.0815595.392899-2.2907798-1.664349-1.6223392 2.300074-.3342202 1.028624-2.0842203 1.028624 2.0842203 2.300074.3342202-1.664349 1.6223392.392899 2.2907798z\"></path> <path d=\"m108.5 19.75-4.996175 2.6266445.954185-5.5633223-4.04199-3.9399667 5.585893-.8116777 2.498087-5.0616778 2.498087 5.0616778 5.585893.8116777-4.04199 3.9399667.954185 5.5633223z\"></path> <path d=\"m16.5 58.25-2.0572484 1.0815595.3928995-2.2907798-1.6643489-1.6223392 2.3000736-.3342202 1.0286242-2.0842203 1.0286242 2.0842203 2.3000736.3342202-1.6643489 1.6223392.3928995 2.2907798z\"></path></g></g></svg> <div class=\"akk-pdf-error-message\"><span>" + _vm._s(_vm.message) + "</span></div></div>" : "<!---->"))], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-57483e7a_0", {
    source: ".akk-pdf-viewer{position:relative;background:#f5f5f5;width:100%;height:100%;font-family:Helvetica,Arial,sans-serif;overflow:hidden}.akk-pdf-error,.akk-pdf-loading{z-index:1;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center}.akk-pdf-tools{position:sticky;top:0;right:0;left:0;z-index:1;display:inline-flex;align-items:center;justify-content:center;margin:auto;width:100%;padding:10px;height:64px;background:#f5f5f5}.akk-pdf-tools a{display:inline-block;width:25px;height:25px;cursor:pointer}.akk-pdf-tools span{font:inherit;font-size:1em;font-weight:300;padding:0;width:64px;text-align:center}.akk-pdf-tools input{font-size:1em;width:3rem;border-radius:5px;border:1px solid gray}.akk-pdf-content{margin-top:16px}.akk-pdf-canvas{display:block;margin:auto;height:100vh;width:100vh;user-select:none;margin-bottom:20px;margin-top:20px}.akk-pdf-error-message{font-weight:600;color:red}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = "data-v-57483e7a";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);// Import vue component
// eslint-disable-next-line @typescript-eslint/no-explicit-any

// install function executed by Vue.use()
var install = function installAkkuratePdfViewer(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('AkkuratePdfViewer', __vue_component__);
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

{
  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
} // Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()
// eslint-disable-next-line @typescript-eslint/no-explicit-any


__vue_component__.install = install; // Export component by default
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
exports.default=__vue_component__;