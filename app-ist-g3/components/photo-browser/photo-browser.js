(function framework7ComponentLoader(e,o){void 0===o&&(o=!0);var r=e.$,a=e.utils,t=(e.getDevice,e.getSupport,e.Class),n=(e.Modal,e.ConstructorMethods);e.ModalMethods;function s(e){this.wrapped=e}function i(e){var o,r;function a(o,r){try{var n=e[o](r),i=n.value,p=i instanceof s;Promise.resolve(p?i.wrapped:i).then((function(e){p?a("return"===o?"return":"next",e):t(n.done?"return":"normal",e)}),(function(e){a("throw",e)}))}catch(e){t("throw",e)}}function t(e,t){switch(e){case"return":o.resolve({value:t,done:!0});break;case"throw":o.reject(t);break;default:o.resolve({value:t,done:!1})}(o=o.next)?a(o.key,o.arg):r=null}this._invoke=function(e,t){return new Promise((function(n,s){var i={key:e,arg:t,resolve:n,reject:s,next:null};r?r=r.next=i:(o=r=i,a(e,t))}))},"function"!=typeof e.return&&(this.return=void 0)}function p(e,o){for(var r=0;r<o.length;r++){var a=o[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,o){return(l=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e})(e,o)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}i.prototype["function"==typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},i.prototype.next=function(e){return this._invoke("next",e)},i.prototype.throw=function(e){return this._invoke("throw",e)},i.prototype.return=function(e){return this._invoke("return",e)};var c=a.extend,u=a.now,h=a.nextTick,v=a.deleteProps,w=function(e){var o,a;function t(o,r){var a;void 0===r&&(r={});var t=d(a=e.call(this,r,[o])||this);t.app=o;var n=c({on:{}},o.params.photoBrowser);return t.useModulesParams(n),t.params=c(n,r),c(t,{exposed:!1,opened:!1,activeIndex:t.params.swiper.initialSlide,url:t.params.url,swipeToClose:{allow:!0,isTouched:!1,diff:void 0,start:void 0,current:void 0,started:!1,activeSlide:void 0,timeStart:void 0}}),t.useModules(),t.init(),a}a=e,(o=t).prototype=Object.create(a.prototype),o.prototype.constructor=o,l(o,a);var n,s,i,w=t.prototype;return w.onSlideChange=function(e){var o=this;o.activeIndex=e.activeIndex;var a=e.activeIndex+1,t=o.params.virtualSlides?o.params.photos.length:e.slides.length;e.params.loop&&(t-=2,(a-=e.loopedSlides)<1&&(a=t+a),a>t&&(a-=t));var n,s=o.params.virtualSlides?e.$wrapperEl.find('.swiper-slide[data-swiper-slide-index="'+e.activeIndex+'"]'):e.slides.eq(e.activeIndex),i=o.params.virtualSlides?e.$wrapperEl.find('.swiper-slide[data-swiper-slide-index="'+e.previousIndex+'"]'):e.slides.eq(e.previousIndex),p=o.$el.find(".photo-browser-current"),l=o.$el.find(".photo-browser-total");if("page"===o.params.type&&o.params.navbar&&0===p.length&&"ios"===o.app.theme&&(n=o.app.navbar.getElByPage(o.$el))&&(p=r(n).find(".photo-browser-current"),l=r(n).find(".photo-browser-total")),p.length&&l.length&&(p.text(a),l.text(t),n||(n=p.parents(".navbar")[0]),n&&o.app.navbar.size(n)),o.captions.length>0){var d=e.params.loop?s.attr("data-swiper-slide-index"):o.activeIndex;o.$captionsContainerEl.find(".photo-browser-caption-active").removeClass("photo-browser-caption-active"),o.$captionsContainerEl.find('[data-caption-index="'+d+'"]').addClass("photo-browser-caption-active")}var c=i.find("video");c.length>0&&"pause"in c[0]&&c[0].pause()},w.onTouchStart=function(){var e=this.swipeToClose;e.allow&&(e.isTouched=!0)},w.onTouchMove=function(e){var o=this,r=o.swipeToClose;r.isTouched&&(r.started||(r.started=!0,r.start="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,o.params.virtualSlides?r.activeSlide=o.swiper.$wrapperEl.children(".swiper-slide-active"):r.activeSlide=o.swiper.slides.eq(o.swiper.activeIndex),r.timeStart=u()),e.preventDefault(),r.current="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,r.diff=r.start-r.current,o.$el.transition(0).transform("translate3d(0,"+-r.diff+"px,0)"))},w.onTouchEnd=function(){var e=this,o=e.swipeToClose;if(o.isTouched=!1,o.started){o.started=!1,o.allow=!1;var r=Math.abs(o.diff),a=(new Date).getTime()-o.timeStart;a<300&&r>20||a>=300&&r>100?h((function(){e.$el&&(o.diff<0?e.$el.addClass("swipe-close-to-bottom"):e.$el.addClass("swipe-close-to-top")),e.emit("local::swipeToClose",e),e.$el.transform("").transition(""),e.close(),o.allow=!0})):(0!==r?e.$el.addClass("photo-browser-transitioning").transitionEnd((function(){o.allow=!0,e.$el.removeClass("photo-browser-transitioning")})):o.allow=!0,h((function(){e.$el.transform("").transition("")})))}else o.started=!1},w.renderNavbar=function(){var e=this;if(e.params.renderNavbar)return e.params.renderNavbar.call(e);var o=e.params.iconsColor;e.params.iconsColor||"dark"!==e.params.theme||(o="white");var r="ios"!==e.app.theme&&"aurora"!==e.app.theme||!e.params.pageBackLinkText?"":e.params.pageBackLinkText,a=void 0===e.params.navbarShowCount?e.params.photos.length>1:e.params.navbarShowCount,t="page"!==e.params.type;return $jsx("div",{class:"navbar navbar-photo-browser "+("dark"===e.params.theme?"navbar-photo-browser-dark":"")},$jsx("div",{class:"navbar-bg"}),$jsx("div",{class:"navbar-inner navbar-inner-centered-title sliding"},!t&&$jsx("div",{class:"left"},$jsx("a",{class:"link "+(r?"":"icon-only")+" back"},$jsx("i",{class:"icon icon-back "+(o?"color-"+o:"")}),r&&$jsx("span",null,r))),a&&$jsx("div",{class:"title"},$jsx("span",{class:"photo-browser-current"}),$jsx("span",{class:"photo-browser-of"},e.params.navbarOfText),$jsx("span",{class:"photo-browser-total"})),t&&$jsx("div",{class:"right"},$jsx("a",{class:"link popup-close","data-popup":".photo-browser-popup"},$jsx("span",null,e.params.popupCloseLinkText)))))},w.renderToolbar=function(){var e=this;if(e.params.renderToolbar)return e.params.renderToolbar.call(e);var o=e.params.iconsColor;return e.params.iconsColor||"dark"!==e.params.theme||(o="white"),$jsx("div",{class:"toolbar toolbar-bottom tabbar"},$jsx("div",{class:"toolbar-inner"},$jsx("a",{class:"link photo-browser-prev"},$jsx("i",{class:"icon icon-back "+(o?"color-"+o:"")})),$jsx("a",{class:"link photo-browser-next"},$jsx("i",{class:"icon icon-forward "+(o?"color-"+o:"")}))))},w.renderCaption=function(e,o){var r=this;return r.params.renderCaption?r.params.renderCaption.call(r,e,o):$jsx("div",{class:"photo-browser-caption","data-caption-index":o},e)},w.renderObject=function(e,o){var r=this;return r.params.renderObject?r.params.renderObject.call(r,e,o):$jsx("div",{class:"photo-browser-slide photo-browser-object-slide swiper-slide","data-swiper-slide-index":o},e.html?e.html:e)},w.renderLazyPhoto=function(e,o){var r=this;return r.params.renderLazyPhoto?r.params.renderLazyPhoto.call(r,e,o):$jsx("div",{class:"photo-browser-slide photo-browser-slide-lazy swiper-slide","data-swiper-slide-index":o},$jsx("div",{class:"swiper-lazy-preloader"}),$jsx("span",{class:"swiper-zoom-container"},$jsx("img",{"data-src":e.url?e.url:e,class:"swiper-lazy"})))},w.renderPhoto=function(e,o){var r=this;return r.params.renderPhoto?r.params.renderPhoto.call(r,e,o):$jsx("div",{class:"photo-browser-slide swiper-slide","data-swiper-slide-index":o},$jsx("span",{class:"swiper-zoom-container"},$jsx("img",{src:e.url?e.url:e})))},w.render=function(){var e=this;return e.params.render?e.params.render.call(e,e.params):$jsx("div",{class:"photo-browser photo-browser-"+e.params.theme},$jsx("div",{class:"view"},$jsx("div",{class:"page photo-browser-page photo-browser-page-"+e.params.theme+" no-toolbar "+(e.params.navbar?"":"no-navbar"),"data-name":"photo-browser-page"},e.params.navbar&&e.renderNavbar(),e.params.toolbar&&e.renderToolbar(),$jsx("div",{class:"photo-browser-captions photo-browser-captions-"+(e.params.captionsTheme||e.params.theme)},e.params.photos.map((function(o,r){return o.caption?e.renderCaption(o.caption,r):""}))),$jsx("div",{class:"photo-browser-swiper-container swiper-container"},$jsx("div",{class:"photo-browser-swiper-wrapper swiper-wrapper"},!e.params.virtualSlides&&e.params.photos.map((function(o,r){return o.html||("string"==typeof o||o instanceof String)&&o.indexOf("<")>=0&&o.indexOf(">")>=0?e.renderObject(o,r):!0===e.params.swiper.lazy||e.params.swiper.lazy&&e.params.swiper.lazy.enabled?e.renderLazyPhoto(o,r):e.renderPhoto(o,r)})))))))},w.renderStandalone=function(){var e=this;return e.params.renderStandalone?e.params.renderStandalone.call(e):'<div class="popup photo-browser-popup photo-browser-standalone popup-tablet-fullscreen">'+e.render()+"</div>"},w.renderPage=function(){var e=this;return e.params.renderPage?e.params.renderPage.call(e):e.render()},w.renderPopup=function(){var e=this;return e.params.renderPopup?e.params.renderPopup.call(e):'<div class="popup photo-browser-popup">'+e.render()+"</div>"},w.onOpen=function(e,o){var a,t=this,n=t.app,s=r(o);s[0].f7PhotoBrowser=t,t.$el=s,t.el=s[0],t.openedIn=e,t.opened=!0,t.$swiperContainerEl=t.$el.find(".photo-browser-swiper-container"),t.$swiperWrapperEl=t.$el.find(".photo-browser-swiper-wrapper"),t.slides=t.$el.find(".photo-browser-slide"),t.$captionsContainerEl=t.$el.find(".photo-browser-captions"),t.captions=t.$el.find(".photo-browser-caption");var i=c({},t.params.swiper,{initialSlide:t.activeIndex,on:{click:function(e){clearTimeout(a),t.params.exposition&&(a=setTimeout((function(){t.expositionToggle()}),350)),t.emit("local::tap",e),t.emit("local::click",e)},doubleClick:function(e){clearTimeout(a),t.emit("local::doubleTap",e),t.emit("local::doubleClick",e)},slideChange:function(){var e=this;t.onSlideChange(e);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];t.emit.apply(t,["local::slideChange"].concat(r))},transitionStart:function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];t.emit.apply(t,["local::transitionStart"].concat(o))},transitionEnd:function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];t.emit.apply(t,["local::transitionEnd"].concat(o))},slideChangeTransitionStart:function(){var e=this;t.onSlideChange(e);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];t.emit.apply(t,["local::slideChangeTransitionStart"].concat(r))},slideChangeTransitionEnd:function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];t.emit.apply(t,["local::slideChangeTransitionEnd"].concat(o))},lazyImageLoad:function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];t.emit.apply(t,["local::lazyImageLoad"].concat(o))},lazyImageReady:function(){for(var e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];var n=o[0];r(n).removeClass("photo-browser-slide-lazy"),t.emit.apply(t,["local::lazyImageReady"].concat(o))}}});t.params.swipeToClose&&"page"!==t.params.type&&c(i.on,{touchStart:function(e,o){t.onTouchStart(o),t.emit("local::touchStart",o)},touchMoveOpposite:function(e,o){t.onTouchMove(o),t.emit("local::touchMoveOpposite",o)},touchEnd:function(e,o){t.onTouchEnd(o),t.emit("local::touchEnd",o)}}),t.params.virtualSlides&&c(i,{virtual:{slides:t.params.photos,renderSlide:function(e,o){return e.html||("string"==typeof e||e instanceof String)&&e.indexOf("<")>=0&&e.indexOf(">")>=0?t.renderObject(e,o):!0===t.params.swiper.lazy||t.params.swiper.lazy&&t.params.swiper.lazy.enabled?t.renderLazyPhoto(e,o):t.renderPhoto(e,o)}}}),t.swiper=n.swiper?n.swiper.create(t.$swiperContainerEl,i):new window.Swiper(t.$swiperContainerEl,i),0===t.activeIndex&&t.onSlideChange(t.swiper),t.$el&&t.$el.trigger("photobrowser:open"),t.emit("local::open photoBrowserOpen",t)},w.onOpened=function(){var e=this;e.$el&&"standalone"===e.params.type&&e.$el.css("animation","none"),e.$el&&e.$el.trigger("photobrowser:opened"),e.emit("local::opened photoBrowserOpened",e)},w.onClose=function(){var e=this;e.destroyed||(e.swiper&&e.swiper.destroy&&(e.swiper.destroy(!0,!1),e.swiper=null,delete e.swiper),e.$el&&e.$el.trigger("photobrowser:close"),e.emit("local::close photoBrowserClose",e))},w.onClosed=function(){var e=this;e.destroyed||(e.opened=!1,e.$el=null,e.el=null,delete e.$el,delete e.el,e.$el&&e.$el.trigger("photobrowser:closed"),e.emit("local::closed photoBrowserClosed",e))},w.openPage=function(){var e=this;if(e.opened)return e;var o=e.renderPage();return e.view.router.navigate({url:e.url,route:{content:o,path:e.url,on:{pageBeforeIn:function(o,r){e.view.$el.addClass("with-photo-browser-page with-photo-browser-page-"+e.params.theme),e.onOpen("page",r.el)},pageAfterIn:function(o,r){e.onOpened("page",r.el)},pageBeforeOut:function(o,r){e.view.$el.removeClass("with-photo-browser-page with-photo-browser-page-exposed with-photo-browser-page-"+e.params.theme),e.onClose("page",r.el)},pageAfterOut:function(o,r){e.onClosed("page",r.el)}}}}),e},w.openStandalone=function(){var e=this;if(e.opened)return e;var o={backdrop:!1,content:e.renderStandalone(),on:{popupOpen:function(o){e.onOpen("popup",o.el)},popupOpened:function(o){e.onOpened("popup",o.el)},popupClose:function(o){e.onClose("popup",o.el)},popupClosed:function(o){e.onClosed("popup",o.el)}}};return e.params.routableModals&&e.view?e.view.router.navigate({url:e.url,route:{path:e.url,popup:o}}):e.modal=e.app.popup.create(o).open(),e},w.openPopup=function(){var e=this;if(e.opened)return e;var o={content:e.renderPopup(),push:e.params.popupPush,on:{popupOpen:function(o){e.onOpen("popup",o.el)},popupOpened:function(o){e.onOpened("popup",o.el)},popupClose:function(o){e.onClose("popup",o.el)},popupClosed:function(o){e.onClosed("popup",o.el)}}};return e.params.routableModals&&e.view?e.view.router.navigate({url:e.url,route:{path:e.url,popup:o}}):e.modal=e.app.popup.create(o).open(),e},w.expositionEnable=function(){var e=this;return"page"===e.params.type&&e.view.$el.addClass("with-photo-browser-page-exposed"),e.$el&&e.$el.addClass("photo-browser-exposed"),e.params.expositionHideCaptions&&e.$captionsContainerEl.addClass("photo-browser-captions-exposed"),e.exposed=!0,e},w.expositionDisable=function(){var e=this;return"page"===e.params.type&&e.view.$el.removeClass("with-photo-browser-page-exposed"),e.$el&&e.$el.removeClass("photo-browser-exposed"),e.params.expositionHideCaptions&&e.$captionsContainerEl.removeClass("photo-browser-captions-exposed"),e.exposed=!1,e},w.expositionToggle=function(){var e=this;return"page"===e.params.type&&e.view.$el.toggleClass("with-photo-browser-page-exposed"),e.$el&&e.$el.toggleClass("photo-browser-exposed"),e.params.expositionHideCaptions&&e.$captionsContainerEl.toggleClass("photo-browser-captions-exposed"),e.exposed=!e.exposed,e},w.open=function(e){var o=this,r=o.params.type;return o.opened?(o.swiper&&void 0!==e&&o.swiper.slideTo(parseInt(e,10)),o):(void 0!==e&&(o.activeIndex=e),"standalone"===r&&o.openStandalone(),"page"===r&&o.openPage(),"popup"===r&&o.openPopup(),o)},w.close=function(){var e=this;return e.opened?(e.params.routableModals&&e.view||"page"===e.openedIn?e.view.router.back():(e.modal.once("modalClosed",(function(){h((function(){e.destroyed||(e.modal.destroy(),delete e.modal)}))})),e.modal.close()),e):e},w.init=function(){},w.destroy=function(){var e=this;e.emit("local::beforeDestroy photoBrowserBeforeDestroy",e),e.$el&&(e.$el.trigger("photobrowser:beforedestroy"),e.$el[0].f7PhotoBrowser=null,delete e.$el[0].f7PhotoBrowser),v(e),e.destroyed=!0,e=null},n=t,(s=[{key:"view",get:function(){var e=this.params,o=this.app;return e.view||o.views.main}}])&&p(n.prototype,s),i&&p(n,i),t}(t),m={name:"photoBrowser",params:{photoBrowser:{photos:[],exposition:!0,expositionHideCaptions:!1,type:"standalone",navbar:!0,toolbar:!0,theme:"light",captionsTheme:void 0,iconsColor:void 0,popupPush:!1,swipeToClose:!0,pageBackLinkText:"Back",popupCloseLinkText:"Close",navbarOfText:"of",navbarShowCount:void 0,view:void 0,url:"photos/",routableModals:!1,virtualSlides:!0,renderNavbar:void 0,renderToolbar:void 0,renderCaption:void 0,renderObject:void 0,renderLazyPhoto:void 0,renderPhoto:void 0,renderPage:void 0,renderPopup:void 0,renderStandalone:void 0,swiper:{initialSlide:0,spaceBetween:20,speed:300,loop:!1,preloadImages:!0,navigation:{nextEl:".photo-browser-next",prevEl:".photo-browser-prev"},zoom:{enabled:!0,maxRatio:3,minRatio:1},lazy:{enabled:!0}}}},create:function(){this.photoBrowser=n({defaultSelector:".photo-browser-popup, .photo-browser-page",constructor:w,app:this,domProp:"f7PhotoBrowser"})},static:{PhotoBrowser:w}};if(o){if(e.prototype.modules&&e.prototype.modules[m.name])return;e.use(m),e.instance&&(e.instance.useModuleParams(m,e.instance.params),e.instance.useModule(m))}return m}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
