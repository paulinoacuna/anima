(function framework7ComponentLoader(e,n){void 0===n&&(n=!0);var t=e.$,r=e.utils,o=(e.getDevice,e.getSupport,e.Class,e.Modal),i=(e.ConstructorMethods,e.ModalMethods);function c(e){this.wrapped=e}function a(e){var n,t;function r(n,t){try{var i=e[n](t),a=i.value,u=a instanceof c;Promise.resolve(u?a.wrapped:a).then((function(e){u?r("return"===n?"return":"next",e):o(i.done?"return":"normal",e)}),(function(e){r("throw",e)}))}catch(e){o("throw",e)}}function o(e,o){switch(e){case"return":n.resolve({value:o,done:!0});break;case"throw":n.reject(o);break;default:n.resolve({value:o,done:!1})}(n=n.next)?r(n.key,n.arg):t=null}this._invoke=function(e,o){return new Promise((function(i,c){var a={key:e,arg:o,resolve:i,reject:c,next:null};t?t=t.next=a:(n=t=a,r(e,o))}))},"function"!=typeof e.return&&(this.return=void 0)}function u(e,n){return(u=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.prototype["function"==typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},a.prototype.next=function(e){return this._invoke("next",e)},a.prototype.throw=function(e){return this._invoke("throw",e)},a.prototype.return=function(e){return this._invoke("return",e)};var l=r.extend,p=function(e){var n,r;function o(n,r){var o,i,c=l({on:{}},r),a=s(o=e.call(this,n,c)||this);return a.params=c,(i=a.params.el?t(a.params.el).eq(0):t(a.params.content).filter((function(e){return 1===e.nodeType})).eq(0))&&i.length>0&&i[0].f7Modal?i[0].f7Modal||s(o):0===i.length?a.destroy()||s(o):(l(a,{app:n,$el:i,el:i[0],type:"loginScreen"}),i[0].f7Modal=a,a||s(o))}return r=e,(n=o).prototype=Object.create(r.prototype),n.prototype.constructor=n,u(n,r),o}(o),f={name:"loginScreen",static:{LoginScreen:p},create:function(){this.loginScreen=i({app:this,constructor:p,defaultSelector:".login-screen.modal-in"})},clicks:{".login-screen-open":function(e,n){void 0===n&&(n={});this.loginScreen.open(n.loginScreen,n.animate,e)},".login-screen-close":function(e,n){void 0===n&&(n={});this.loginScreen.close(n.loginScreen,n.animate,e)}}};if(n){if(e.prototype.modules&&e.prototype.modules[f.name])return;e.use(f),e.instance&&(e.instance.useModuleParams(f,e.instance.params),e.instance.useModule(f))}return f}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))