(()=>{"use strict";var e={620:(e,t,r)=>{var o=r(328),n=r(760);function s(e,t,r,o,s,l){const c=(0,n.E1)("router-view");return(0,n.Wz)(),(0,n.Az)(c)}const l={name:"App",mounted(){document.title="Kévin Prévost - Développeur Front-end";const e=document.createElement("meta");e.name="robots",e.content="noindex, nofollow",document.head.appendChild(e)}};var c=r(152);const i=(0,c.c)(l,[["render",s]]),a=i;var p=r(216),u=r(752);const d=(0,n.QD)("header",{class:"kp_header"},null,-1),h={class:"kp_main"},v={class:"kp_desktop"},j=(0,n.QD)("div",{class:"kp_animation_full-screen"},null,-1),k={class:"kp_window--container",id:"kp_iframe--container"},f={class:"kp_window--title-zone"},m={class:"kp_window--title-zon--title"},_={class:"kp_p"},g=(0,n.QD)("div",null,[(0,n.QD)("div",{class:"kp_full_screen--folder"},"O"),(0,n.QD)("div")],-1),A={class:"kp_window--border"},b={class:"kp_internet--onglets"},D=["onClick"],w=(0,n.QD)("div",{class:"kp_internet--favorites"},null,-1),Q=["src"],y={key:0,class:"kp_un-projet"},W={class:"kp_h1"},O={class:"kp_p"},z={class:"kp_projet-technos"},x={class:"kp_projet-annee"},P=(0,n.QD)("div",{class:"kp_full_screen"},"passer en plein écran",-1);function C(e,t,r,o,s,l){return(0,n.Wz)(),(0,n.An)(n.ae,null,[d,(0,n.QD)("main",h,[(0,n.QD)("div",v,[j,(0,n.QD)("div",k,[(0,n.QD)("div",f,[(0,n.QD)("div",m,[(0,n.QD)("p",_,(0,u.WA)(s.projetActuel.titre)+" - "+(0,u.WA)(s.projetActuel.compagnie),1)]),g]),(0,n.QD)("div",A,[(0,n.QD)("div",b,[((0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)(s.projets,((e,t)=>((0,n.Wz)(),(0,n.An)("button",{key:e.titre,class:(0,u.WN)("kp_projet-btn  kp_projet-btn--"+e.id),onClick:e=>l.changerProjet(t)},(0,u.WA)(e.titre),11,D)))),128)),w]),(0,n.QD)("iframe",{src:s.projetActuel.url,width:"600",height:"400",frameborder:"0",class:"kp_iframe--projet"},null,8,Q),s.projetActuel?((0,n.Wz)(),(0,n.An)("article",y,[(0,n.QD)("h1",W,(0,u.WA)(s.projetActuel.titre),1),(0,n.QD)("p",O,(0,u.WA)(s.projetActuel.description),1),(0,n.QD)("ul",z,[((0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)(s.projetActuel.techno,(e=>((0,n.Wz)(),(0,n.An)("li",{key:e,class:(0,u.WN)(["kp_projet-technos",`kp_projet-technos--${e.toLowerCase()}`])},(0,u.WA)(e),3)))),128))]),(0,n.QD)("p",x,(0,u.WA)(s.projetActuel.annee),1)])):(0,n.g1)("",!0)])])]),P])],64)}var S=r(774);const E={data(){return{projets:[],projetActuel:null}},created(){this.chargerProjets()},methods:{chargerProjets(){S.c.get("/projets.json").then((e=>{this.projets=e.data,this.projetActuel=this.projets[0]})).catch((e=>{console.error("Erreur lors du chargement des projets:",e)}))},changerProjet(e){this.projetActuel=this.projets[e]}},mounted(){console.log("mounted exécuté");const e=document.createElement("script");e.src="/script.js",e.onload=()=>{console.log("Script externe chargé et exécuté")},this.$nextTick((()=>{document.body.appendChild(e)}))}},T=(0,c.c)(E,[["render",C]]),F=T,M=[{path:"/",component:F}],N=(0,p.gv)({history:(0,p.oz)(),routes:M}),$=(0,o.W0)(a);$.use(N),$.mount("#app")}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,r),s.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,s)=>{if(!o){var l=1/0;for(p=0;p<e.length;p++){for(var[o,n,s]=e[p],c=!0,i=0;i<o.length;i++)(!1&s||l>=s)&&Object.keys(r.O).every((e=>r.O[e](o[i])))?o.splice(i--,1):(c=!1,s<l&&(l=s));if(c){e.splice(p--,1);var a=n();void 0!==a&&(t=a)}}return t}s=s||0;for(var p=e.length;p>0&&e[p-1][2]>s;p--)e[p]=e[p-1];e[p]=[o,n,s]}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{var e={524:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,s,[l,c,i]=o,a=0;if(l.some((t=>0!==e[t]))){for(n in c)r.o(c,n)&&(r.m[n]=c[n]);if(i)var p=i(r)}for(t&&t(o);a<l.length;a++)s=l[a],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(p)},o=self["webpackChunkkprevost2023_vue"]=self["webpackChunkkprevost2023_vue"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[999],(()=>r(620)));o=r.O(o)})();
//# sourceMappingURL=app.12c70adf.js.map