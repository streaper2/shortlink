(function(e){function t(t){for(var o,c,a=t[0],l=t[1],u=t[2],d=0,p=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);s&&s(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},i=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var s=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={id:"nav"},i=Object(o["createTextVNode"])("Home"),c=Object(o["createTextVNode"])(" | "),a=Object(o["createTextVNode"])("links");function l(e,t){var n=Object(o["resolveComponent"])("router-link"),l=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("div",r,[Object(o["createVNode"])(n,{to:"/"},{default:Object(o["withCtx"])((function(){return[i]})),_:1}),c,Object(o["createVNode"])(n,{to:"/allLinks"},{default:Object(o["withCtx"])((function(){return[a]})),_:1})]),Object(o["createVNode"])(l)],64)}n("6265");var u=n("6b0d"),s=n.n(u);const d={},p=s()(d,[["render",l]]);var m=p,f=(n("e9c4"),n("c740"),n("7db0"),n("d3b7"),n("5502")),b=Object(f["a"])({state:{links:JSON.parse(localStorage.getItem("links"))||[]},mutations:{ADD_LINK:function(e,t){e.links.push(t),localStorage.setItem("links",JSON.stringify(e.links))},VIEW_LINK:function(e,t){console.log("VIEW MUTATION");var n=e.links.findIndex((function(e){return e.id===t}));e.links[n].count++,localStorage.setItem("links",JSON.stringify(e.links))}},actions:{addLink:function(e,t){var n=e.commit;n("ADD_LINK",t)},viewLink:function(e,t){var n=e.commit;console.log("VIEW ACTION"),n("VIEW_LINK",t)}},getters:{allLinks:function(e){return console.log(e.links),e.links},getLinkByUrl:function(e){return function(t){return e.links.find((function(e){return e.url===t}))}},getLinkById:function(e){return function(t){return console.log(e.links.find((function(e){return e.id===t}))),e.links.find((function(e){return e.id===t}))}}},modules:{}}),k=n("6c02"),g={class:"home"};function h(e,t,n,r,i,c){var a=Object(o["resolveComponent"])("TextInput"),l=Object(o["resolveComponent"])("LinkGenerator");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",g,[Object(o["createVNode"])(a),Object(o["createVNode"])(l)])}n("9911");function O(e,t,n,r,i,c){var a=this,l=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"",name:"","onUpdate:modelValue":t[0]||(t[0]=function(e){return i.link=e})},null,512),[[o["vModelText"],i.link]]),Object(o["createElementVNode"])("h1",null,[Object(o["createVNode"])(l,{to:"/linkDetails/"+this.shortLinkGenerated},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(a.generated),1)]})),_:1},8,["to"])]),Object(o["createElementVNode"])("button",{onClick:t[1]||(t[1]=function(){return c.generateLink&&c.generateLink.apply(c,arguments)})},"Generate")])}var v=n("1da1"),j=(n("96cf"),n("25a0")),w=n("b5ae"),y={setup:function(){return{v$:Object(j["a"])()}},data:function(){return{link:"http://google.com",generated:"",shortLinkGenerated:""}},components:{},validations:{link:{required:w["required"],minLength:Object(w["minLength"])(5),url:w["url"]}},methods:{generateLink:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var n,o,r,i,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.v$.link.$validate();case 2:if(n=t.sent,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=o.length,i=window.location.protocol+"//"+window.location.hostname+"/",n){for(e.shortLinkGenerated="",c=0;c<5;c++)e.shortLinkGenerated+=o.charAt(Math.floor(Math.random()*r));null==e.$store.getters.getLinkByUrl(e.link)?(e.$store.dispatch("addLink",{id:e.shortLinkGenerated,url:e.link,count:0}),e.generated=i+e.shortLinkGenerated,e.$toast.open({message:"Lien généré",type:"success"})):(e.generated=i+e.$store.getters.getLinkByUrl(e.link).id,e.shortLinkGenerated=e.$store.getters.getLinkByUrl(e.link).id,e.$toast.open({message:"Lien déjà existent",type:"warning"}))}else e.v$.link.required.$invalid?e.$toast.open({message:"Le champ est requis",type:"error",position:"bottom"}):e.v$.link.minLength.$invalid?e.$toast.open({message:"le nombre de charactere minimum est de 5",type:"error",position:"bottom"}):e.v$.link.url.$invalid?e.$toast.open({message:'un format de type "https://google.com" est attendue',type:"error",position:"bottom"}):e.$toast.open({message:"Une erreur inatendue est survenue",type:"error",position:"bottom"});console.log("res",window.location);case 8:case"end":return t.stop()}}),t)})))()}}};const L=s()(y,[["render",O]]);var N=L,B=Object(o["createElementVNode"])("p",null," link generate ",-1),$=[B];function V(e,t,n,r,i,c){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,$)}var E={};const x=s()(E,[["render",V]]);var I=x,D={name:"Home",components:{TextInput:N,LinkGenerator:I}};const S=s()(D,[["render",h]]);var T=S,C={class:"about"};function _(e,t,n,r,i,c){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",C,[Object(o["createElementVNode"])("h1",null,"id of routing is "+Object(o["toDisplayString"])(i.id),1)])}var G={data:function(){return{id:this.$route.params.id}},mounted:function(){console.log("routing",this.$route.params.id)}};const U=s()(G,[["render",_]]);var A=U,M=Object(o["createElementVNode"])("p",null,"All link",-1);function P(e,t,n,r,i,c){var a=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[M,(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(c.allLinks,(function(e){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:e.id},[Object(o["createVNode"])(a,{to:"/linkDetails/"+e.id},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.url),1)]})),_:2},1032,["to"])])})),128))])}var J={data:function(){return{}},computed:{allLinks:function(){return this.$store.getters.allLinks}}};const q=s()(J,[["render",P]]);var K=q;function W(e,t,n,r,i,c){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null," redirecting ... ")}var H={data:function(){return{link:this.$store.getters.getLinkById(this.$route.params.id)}},computed:{},methods:{},mounted:function(){console.log("we are mounted"),console.log(this.link),this.$store.dispatch("viewLink",this.$route.params.id);var e=this.$store.getters.getLinkById(this.$route.params.id).url;window.location.href=e}};const R=s()(H,[["render",W]]);var F=R;function z(e,t,n,r,i,c){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(i.msg),1),Object(o["createElementVNode"])("button",{type:"",onClick:t[0]||(t[0]=function(){return c.changerUrl&&c.changerUrl.apply(c,arguments)})}," change moi !")])}var Q={data:function(){return{msg:window.location}},methods:{changerUrl:function(){window.location.href="http://www.google.com"}},mounted:function(){console.log("we are mounted"),window.location.href="http://www.google.com"}};const X=s()(Q,[["render",z]]);var Y=X,Z=[{path:"/",name:"Home",component:T},{path:"/allLinks",name:"AllLinks",component:K},{path:"/linkDetails/",name:"LinkDetails",component:A},{path:"/linkDetails/:id?",name:"LinkDetails",component:A},{path:"/:id",name:"Redirect",component:F},{path:"/test",name:"Test",component:Y}],ee=Object(k["a"])({history:Object(k["b"])(),routes:Z}),te=ee,ne=n("b079"),oe=n.n(ne);n("4238");Object(o["createApp"])(m).use(te).use(oe.a).use(b).mount("#app")},6265:function(e,t,n){"use strict";n("737b")},"737b":function(e,t,n){}});
//# sourceMappingURL=app.3a8d4a5d.js.map