import { Component, Prop, Ref, Watch, Vue } from 'vue-property-decorator';
import pdf from 'vue-pdf';
import vuescroll from 'vuescroll';
import ZoomIn24 from '@carbon/icons-vue/es/zoom--in/24';
import ZoomOut24 from '@carbon/icons-vue/es/zoom--out/24';

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
}

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp;
const defaultZoom = 800;
let AkkPdfViewer = (_dec = Component({
  components: {
    pdf,
    vuescroll,
    ZoomIn24,
    ZoomOut24
  }
}), _dec2 = Prop({
  type: String,
  required: true
}), _dec3 = Prop({
  default: false
}), _dec4 = Prop({
  default: '#1D189C'
}), _dec5 = Prop({
  default: false
}), _dec6 = Ref(), _dec7 = Ref(), _dec8 = Watch('src', {
  immediate: true
}), _dec(_class = (_class2 = (_temp = class AkkPdfViewer extends Vue {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "srcPdf", _descriptor, this);

    _initializerDefineProperty(this, "withTools", _descriptor2, this);

    _initializerDefineProperty(this, "colorScroll", _descriptor3, this);

    _initializerDefineProperty(this, "zoomable", _descriptor4, this);

    _initializerDefineProperty(this, "pdfCanvas", _descriptor5, this);

    _initializerDefineProperty(this, "mainContainer", _descriptor6, this);

    this.src = null;
    this.loadedRatio = 0;
    this.page = 1;
    this.numPages = 0;
    this.rotate = 0;
    this.zoom = defaultZoom;
    this.message = null;
    this.loading = false;
    this.ops = {};
  }

  async onSrcChanged() {
    this.loading = true;

    try {
      if (this.src && this.src.promise && this.src.promise instanceof Promise) {
        const pdf = await this.src.promise;
        this.message = null;
        this.numPages = pdf.numPages;
        this.loading = false;
      }
    } catch (err) {
      this.message = 'Erreur de chargement du PDF.';
      console.log(err);
    }
  }

  created() {
    this.src = pdf.createLoadingTask(this.srcPdf);
    this.ops = { ...this.ops,
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
    };
    console.log("Yes", this.ops, this.zoomable);
  }

  zoomPdf(zoomVal) {
    let pdfArray = document.getElementsByClassName('pdf-canvas');
    pdfArray[0].getBoundingClientRect();

    if (zoomVal > 0) {
      this.zoom = (100 * this.zoom / defaultZoom + 25) * defaultZoom / 100;

      for (let i = 0; i < pdfArray.length; i++) {
        pdfArray[i].style['width'] = `${this.zoom}px`;
      }

      return;
    }

    this.zoom = (100 * this.zoom / defaultZoom - 25) * defaultZoom / 100;
  }

  zoomIn() {
    this.zoomPdf(1);
  }

  zoomOut() {
    this.zoomPdf(-1);
  }

  scrollInPdf() {
    if (!this.mainContainer) {
      return;
    }

    let totalHeight = this.mainContainer.scrollHeight;
    let userScroll = this.mainContainer.scrollTop;
    this.page = Math.trunc(userScroll * this.numPages / totalHeight) + 1;
  }

  changePage(page) {
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

  changeSrc(src) {
    this.src = pdf.createLoadingTask(src);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "srcPdf", [_dec2], {
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
}), _applyDecoratedDescriptor(_class2.prototype, "onSrcChanged", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "onSrcChanged"), _class2.prototype)), _class2)) || _class);

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = AkkPdfViewer;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    ref: "mainContainer",
    staticClass: "pdf-viewer",
    on: {
      "scroll": _vm.scrollInPdf
    }
  }, [_vm.numPages > 0 && _vm.withTools ? _c('div', {
    staticClass: "pdf-tools justify-content-center"
  }, [_c('a', {
    staticClass: "zoom-down text-primary",
    on: {
      "click": function ($event) {
        return _vm.zoomPdf(-1);
      }
    }
  }, [_c('ZoomOut24')], 1), _vm._v(" "), _c('span', {
    domProps: {
      "innerHTML": _vm._s(100 * _vm.zoom / 800 + "%")
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "zoom-up text-primary",
    on: {
      "click": function ($event) {
        return _vm.zoomPdf(1);
      }
    }
  }, [_c('ZoomIn24')], 1)]) : _vm._e(), _vm._v(" "), _vm.loading && !_vm.message ? _c('div', {
    staticClass: "loading"
  }, [_vm._m(0)]) : _c('vuescroll', {
    staticClass: "pdf-content",
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
      staticClass: "pdf-canvas"
    }, [_c('pdf', {
      ref: "pdf",
      refInFor: true,
      attrs: {
        "id": "pdf-page-" + i,
        "page": i,
        "rotate": _vm.rotate,
        "src": _vm.src
      },
      on: {
        "link-clicked": function ($event) {
          _vm.page = $event;
        },
        "progress": function ($event) {
          _vm.loadedRatio = $event;
        }
      }
    })], 1);
  })], 2), _vm._v(" "), _vm.message ? _c('div', {
    staticClass: "error"
  }, [_c('svg', {
    attrs: {
      "height": "128",
      "viewBox": "0 0 128 128",
      "width": "128",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('g', {
    attrs: {
      "fill": "none",
      "fill-rule": "evenodd"
    }
  }, [_c('path', {
    attrs: {
      "d": "m87 102 3.5 5.25-2.5 3.75-3.5-5.25zm-12 0 3.5 5.25-2.5 3.75-3.5-5.25zm-12 0 3.5 5.25-2.5 3.75-3.5-5.25zm-12 0 3.5 5.25-2.5 3.75-3.5-5.25zm-12 0 3.5 5.25-2.5 3.75-3.5-5.25zm25-71c19.882251 0 36 16.117749 36 36v42c0 .645453-.0169864 1.286938-.0505367 1.924034l-5.9494633-8.924034-1 1.5v-36.5c0-18.7012521-14.25984-34.0719401-32.4994394-35.8319833 1.1513984-.111181 2.3187815-.1680167 3.4994394-.1680167zm-36 72.5 2.5 3.75-2.449 3.674-.0266344-.587053c-.0161968-.443647-.0243656-.889343-.0243656-1.336947z",
      "fill": "#f5f5f5"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m29 107.697575 4.9999767-7.500386 6.0000233 9.000035 6-9 6 9 6-9 6 9 6-9 6 9 6-9 6 9 5.9999925-8.999988 5.0000075 7.499875v-40.697111c0-9.6649831-3.9175084-18.4149831-10.2512627-24.7487373-6.3337542-6.3337543-15.0837542-10.2512627-24.7487373-10.2512627s-18.4149831 3.9175084-24.7487373 10.2512627c-6.3337543 6.3337542-10.2512627 15.0837542-10.2512627 24.7487373z",
      "stroke": "#000",
      "stroke-width": "2"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "fill": "#000",
      "height": "4",
      "rx": "2",
      "width": "22",
      "x": "53",
      "y": "86"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "fill": "#000",
      "height": "4",
      "rx": "2",
      "width": "10",
      "x": "40",
      "y": "77"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "fill": "#000",
      "height": "4",
      "rx": "2",
      "width": "10",
      "x": "78",
      "y": "77"
    }
  }), _vm._v(" "), _c('g', {
    attrs: {
      "fill": "#ccc"
    }
  }, [_c('path', {
    attrs: {
      "d": "m24 20c0 4.9705627 4.0294373 9 9 9 .536787 0 1.062598-.0469934 1.5735435-.1370907-1.6003862 2.4888038-4.3944758 4.1370907-7.5735435 4.1370907-4.9705627 0-9-4.0294373-9-9 0-4.4337758 3.2061271-8.1187205 7.4264565-8.8629093-.9030194 1.4021744-1.4264565 3.0714142-1.4264565 4.8629093z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m76.5 19.25-2.0572484 1.0815595.3928995-2.2907798-1.6643489-1.6223392 2.3000736-.3342202 1.0286242-2.0842203 1.0286242 2.0842203 2.3000736.3342202-1.6643489 1.6223392.3928995 2.2907798z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m105.5 47.25-2.057248 1.0815595.392899-2.2907798-1.664349-1.6223392 2.300074-.3342202 1.028624-2.0842203 1.028624 2.0842203 2.300074.3342202-1.664349 1.6223392.392899 2.2907798z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m108.5 19.75-4.996175 2.6266445.954185-5.5633223-4.04199-3.9399667 5.585893-.8116777 2.498087-5.0616778 2.498087 5.0616778 5.585893.8116777-4.04199 3.9399667.954185 5.5633223z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "m16.5 58.25-2.0572484 1.0815595.3928995-2.2907798-1.6643489-1.6223392 2.3000736-.3342202 1.0286242-2.0842203 1.0286242 2.0842203 2.3000736.3342202-1.6643489 1.6223392.3928995 2.2907798z"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "error-message text-danger font-weight-bolder"
  }, [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.message)
    }
  })])]) : _vm._e()], 1);
};

var __vue_staticRenderFns__ = [function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "spinner-border",
    attrs: {
      "role": "status"
    }
  }, [_c('span', {
    staticClass: "sr-only"
  }, [_vm._v("Loading...")])]);
}];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-6e6e2787_0", {
    source: ".pdf-viewer{position:relative;background:#f5f5f5;width:100%;height:100%;font-family:Helvetica,Arial,sans-serif;overflow:hidden}.error,.loading{z-index:1;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center}.pdf-tools{position:sticky;top:0;right:0;left:0;z-index:1;display:inline-flex;align-items:center;justify-content:center;margin:auto;width:100%;padding:10px;height:64px;background:#f5f5f5}.pdf-tools a{display:inline-block;width:25px;height:25px;cursor:pointer}.pdf-tools span{font:inherit;font-size:1em;font-weight:300;padding:0;width:64px;text-align:center}.pdf-tools input{font-size:1em;width:3rem;border-radius:5px;border:1px solid gray}.pdf-content{margin-top:16px}.pdf-canvas{display:block;margin:auto;height:100vh;width:100vh;user-select:none;margin-bottom:20px;margin-top:20px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

// Import vue component
// eslint-disable-next-line @typescript-eslint/no-explicit-any

// install function executed by Vue.use()
const install = function installAkkuratePdfViewer(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('AkkuratePdfViewer', __vue_component__);
}; // Create module definition for Vue.use()
// to be registered via Vue.use() as well as Vue.component()
// eslint-disable-next-line @typescript-eslint/no-explicit-any


__vue_component__.install = install; // Export component by default
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default __vue_component__;
