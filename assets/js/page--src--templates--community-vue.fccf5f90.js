(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"4Brf":function(t,e,i){"use strict";var r=i("I+eb"),n=i("g6v/"),o=i("2oRo"),a=i("UTVS"),s=i("hh1v"),c=i("m/L8").f,u=i("6JNq"),l=o.Symbol;if(n&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof m?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};u(m,l);var p=m.prototype=l.prototype;p.constructor=m;var g=p.toString,d="Symbol(test)"==String(l("test")),b=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=g.call(t);if(a(f,t))return"";var i=d?e.slice(7,-1):e.replace(b,"$1");return""===i?void 0:i}}),r({global:!0,forced:!0},{Symbol:m})}},"5Tg+":function(t,e,i){var r=i("tiKp");e.f=r},"BX/b":function(t,e,i){var r=i("/GqU"),n=i("JBy8").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?function(t){try{return n(t)}catch(t){return a.slice()}}(t):n(r(t))}},CB7K:function(t,e,i){"use strict";i.r(e);i("TeQF"),i("pNMO"),i("4Brf");var r={data:function(){return{socialMedia:["twitter","telegram","facebook","github","web","instagram"],icons:{twitter:["fab","twitter"],telegram:["fab","telegram"],facebook:["fab","facebook"],github:["fab","github"],web:["fas","link"],instagram:["fab","instagram"]},urls:{twitter:"https://twitter.com/",telegram:"https://t.me/",facebook:"https://facebook.com/",github:"https://github.com/",web:"",instagram:"https://instagram.com/"}}},computed:{hasTwitter:function(){return""!==this.$page.community.twitter},validSocial:function(){var t=this;return this.socialMedia.filter((function(e){return""!==t.$page.community[e]}))}},metaInfo:function(){var t,e=null===(t=this.$page.community.image)||void 0===t?void 0:t.src,i=this.$url(e);return this.$seo({title:this.$page.community.title,description:this.$page.community.description,keywords:"atlas,atlas comunidades,atlas tech,...".concat(this.$page.community.tags),lang:"es",language:"Spanish",image:i,openGraph:{title:this.$page.community.title,type:"website",image:i},twitter:{title:this.$page.community.title,type:"summary",image:i},script:[{src:"https://platform.twitter.com/widgets.js",body:!0}]})}},n=i("KHd+"),o=null,a=Object(n.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",[i("div",{staticClass:"container mt-8"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-8"},[i("p",[i("g-image",{staticClass:"mb-1 image-fluid mx-auto d-block",attrs:{immediate:"",width:"200",src:t.$page.community.image,alt:"Logotipo "+t.$page.community.title}})],1),i("h1",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"mb-2",domProps:{innerHTML:t._s(t.$page.community.title)}}),i("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"text-black",domProps:{innerHTML:t._s(t.$page.community.content)}})]),i("div",{staticClass:"col-lg-4 sidebar"},[i("div",{staticClass:"sidebar-box"},[i("h3",[t._v("Tags")]),i("div",{staticClass:"tagcloud"},t._l(t.$page.community.tags,(function(e){return i("g-link",{key:e.id,attrs:{to:e.path}},[t._v("\n              "+t._s(e.title)+"\n            ")])})),1)]),i("div",{staticClass:"sidebar-box"},[i("h3",[t._v("Sobre esta comunidad")]),i("p",[t._v("\n            "+t._s(t.$page.community.description)+"\n          ")])]),i("div",{staticClass:"sidebar-box"},[i("h3",[t._v("Ubicación")]),i("p",[t._v("\n            "+t._s(t.$page.community.location)+"\n          ")])]),i("div",{staticClass:"sidebar-box"},[i("h3",[t._v("Redes")]),t._l(t.validSocial,(function(e){return i("p",{key:e},[i("font-awesome-icon",{attrs:{icon:[].concat(t.icons[e]),size:"lg","fixed-width":""}}),i("a",{attrs:{target:"_blank",rel:"noreferrer",href:t.urls[e]+t.$page.community[e]}},[t._v("\n              "+t._s(t.urls[e]+t.$page.community[e]))])],1)}))],2),t.hasTwitter?i("div",{staticClass:"sidebar-box"},[i("h3",[t._v("Twitter")]),i("a",{staticClass:"twitter-timeline",attrs:{"data-height":"400","data-dnt":"true",href:"https://twitter.com/"+t.$page.community.twitter}},[t._v("Tweets by "+t._s(t.$page.community.twitter))])]):t._e()])])])])}),[],!1,null,null,null);"function"==typeof o&&o(a);e.default=a.exports},"dG/n":function(t,e,i){var r=i("Qo9l"),n=i("UTVS"),o=i("5Tg+"),a=i("m/L8").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});n(e,t)||a(e,t,{value:o.f(t)})}},pNMO:function(t,e,i){"use strict";var r=i("I+eb"),n=i("2oRo"),o=i("0GbY"),a=i("xDBR"),s=i("g6v/"),c=i("STAE"),u=i("/b8u"),l=i("0Dky"),f=i("UTVS"),m=i("6LWA"),p=i("hh1v"),g=i("glrk"),d=i("ewvW"),b=i("/GqU"),y=i("wE6v"),h=i("XGwC"),v=i("fHMY"),w=i("33Wh"),S=i("JBy8"),O=i("BX/b"),$=i("dBg+"),_=i("Bs8V"),k=i("m/L8"),T=i("0eef"),C=i("kRJp"),j=i("busE"),x=i("VpIT"),B=i("93I0"),P=i("0BK2"),N=i("kOOl"),E=i("tiKp"),J=i("5Tg+"),L=i("dG/n"),G=i("1E5z"),M=i("afO8"),I=i("tycR").forEach,R=B("hidden"),U=E("toPrimitive"),K=M.set,V=M.getterFor("Symbol"),H=Object.prototype,W=n.Symbol,q=o("JSON","stringify"),D=_.f,F=k.f,Q=O.f,X=T.f,z=x("symbols"),A=x("op-symbols"),Y=x("string-to-symbol-registry"),Z=x("symbol-to-string-registry"),tt=x("wks"),et=n.QObject,it=!et||!et.prototype||!et.prototype.findChild,rt=s&&l((function(){return 7!=v(F({},"a",{get:function(){return F(this,"a",{value:7}).a}})).a}))?function(t,e,i){var r=D(H,e);r&&delete H[e],F(t,e,i),r&&t!==H&&F(H,e,r)}:F,nt=function(t,e){var i=z[t]=v(W.prototype);return K(i,{type:"Symbol",tag:t,description:e}),s||(i.description=e),i},ot=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},at=function(t,e,i){t===H&&at(A,e,i),g(t);var r=y(e,!0);return g(i),f(z,r)?(i.enumerable?(f(t,R)&&t[R][r]&&(t[R][r]=!1),i=v(i,{enumerable:h(0,!1)})):(f(t,R)||F(t,R,h(1,{})),t[R][r]=!0),rt(t,r,i)):F(t,r,i)},st=function(t,e){g(t);var i=b(e),r=w(i).concat(ft(i));return I(r,(function(e){s&&!ct.call(i,e)||at(t,e,i[e])})),t},ct=function(t){var e=y(t,!0),i=X.call(this,e);return!(this===H&&f(z,e)&&!f(A,e))&&(!(i||!f(this,e)||!f(z,e)||f(this,R)&&this[R][e])||i)},ut=function(t,e){var i=b(t),r=y(e,!0);if(i!==H||!f(z,r)||f(A,r)){var n=D(i,r);return!n||!f(z,r)||f(i,R)&&i[R][r]||(n.enumerable=!0),n}},lt=function(t){var e=Q(b(t)),i=[];return I(e,(function(t){f(z,t)||f(P,t)||i.push(t)})),i},ft=function(t){var e=t===H,i=Q(e?A:b(t)),r=[];return I(i,(function(t){!f(z,t)||e&&!f(H,t)||r.push(z[t])})),r};(c||(j((W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),i=function(t){this===H&&i.call(A,t),f(this,R)&&f(this[R],e)&&(this[R][e]=!1),rt(this,e,h(1,t))};return s&&it&&rt(H,e,{configurable:!0,set:i}),nt(e,t)}).prototype,"toString",(function(){return V(this).tag})),j(W,"withoutSetter",(function(t){return nt(N(t),t)})),T.f=ct,k.f=at,_.f=ut,S.f=O.f=lt,$.f=ft,J.f=function(t){return nt(E(t),t)},s&&(F(W.prototype,"description",{configurable:!0,get:function(){return V(this).description}}),a||j(H,"propertyIsEnumerable",ct,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:W}),I(w(tt),(function(t){L(t)})),r({target:"Symbol",stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(Y,e))return Y[e];var i=W(e);return Y[e]=i,Z[i]=e,i},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(f(Z,t))return Z[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!s},{create:function(t,e){return void 0===e?v(t):st(v(t),e)},defineProperty:at,defineProperties:st,getOwnPropertyDescriptor:ut}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:lt,getOwnPropertySymbols:ft}),r({target:"Object",stat:!0,forced:l((function(){$.f(1)}))},{getOwnPropertySymbols:function(t){return $.f(d(t))}}),q)&&r({target:"JSON",stat:!0,forced:!c||l((function(){var t=W();return"[null]"!=q([t])||"{}"!=q({a:t})||"{}"!=q(Object(t))}))},{stringify:function(t,e,i){for(var r,n=[t],o=1;arguments.length>o;)n.push(arguments[o++]);if(r=e,(p(e)||void 0!==t)&&!ot(t))return m(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ot(e))return e}),n[1]=e,q.apply(null,n)}});W.prototype[U]||C(W.prototype,U,W.prototype.valueOf),G(W,"Symbol"),P[R]=!0}}]);