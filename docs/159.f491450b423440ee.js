"use strict";(self.webpackChunkPurr_Coffee=self.webpackChunkPurr_Coffee||[]).push([[159],{4159:(_e,G,C)=>{C.r(G),C.d(G,{CoffeeListComponent:()=>ye});var y=C(6814),n=C(5879);const yt=["btn"];function bt(t,e){if(1&t){const i=n.EpF();n.O4$(),n.kcU(),n.TgZ(0,"button",23),n.NdJ("click",function(){n.CHM(i);const o=n.oxw();return n.KtG(o.onAddToCart())}),n._uU(1," Add to cart "),n.qZA()}if(2&t){const i=n.oxw();n.Q6J("disabled",0===i.quantityOfItem())}}function _t(t,e){if(1&t){const i=n.EpF();n.O4$(),n.kcU(),n.TgZ(0,"button",24),n.NdJ("click",function(){n.CHM(i);const o=n.oxw();return n.KtG(o.onRemoveFromCart())}),n._uU(1," Added to cart "),n.qZA()}}const vt=function(t){return{"opacity-40":t}};let Tt=(()=>{var t;class e{constructor(s){this.el=s,this.addToCart=new n.vpe,this.removeFromCart=new n.vpe,this.itemSize="small - 200",this.quantityOfItem=(0,n.tdS)(0),this.setItemSize=o=>this.itemSize=o}ngAfterViewInit(){this.toggleActiveButton(this.buttons)}decrement(){0===this.quantityOfItem()?this.quantityOfItem.set(0):this.quantityOfItem.update(s=>s-1)}increment(){this.quantityOfItem.update(s=>s+1)}onAddToCart(){this.addToCart.emit({size:this.itemSize,quantity:this.quantityOfItem()})}onRemoveFromCart(){this.removeFromCart.emit()}toggleActiveButton(s){s.forEach(o=>o.nativeElement.addEventListener("click",()=>{s.forEach(r=>this.el.removeClass(r.nativeElement,"active")),this.el.addClass(o.nativeElement,"active")}))}}return(t=e).\u0275fac=function(s){return new(s||t)(n.Y36(n.Qsj))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-coffee-card"]],viewQuery:function(s,o){if(1&s&&n.Gf(yt,5),2&s){let r;n.iGM(r=n.CRH())&&(o.buttons=r)}},inputs:{coffee:"coffee",isAddedToCart:"isAddedToCart",itemSize:"itemSize"},outputs:{addToCart:"addToCart",removeFromCart:"removeFromCart"},standalone:!0,features:[n.jDz],decls:35,vars:18,consts:[[1,"w-full","h-fit","flex","flex-col","place-content-around","py-6","px-3","sm:px-4","lg:px-5","bg-white","rounded-3xl","space-y-5","lg:space-y-3"],[1,"flex","flex-row","space-x-2","sm:space-x-4"],[1,"w-28","h-28","shrink-0","block","rounded-lg",3,"src"],[1,"space-y-3","sm:space-y-4","lg:space-y-3","flex","flex-col","place-items-start"],[1,"flex","space-x-2","sm:space-x-4","max-md:text-start"],[1,"text-base/tight","font-semibold","md:text-xl","lg:text-base"],[1,"text-base/tight","md:text-xl","lg:text-base","font-semibold","text-btnClr0"],[1,"text-base/tight","md:text-lg","font-medium","opacity-50","rounded-t-3xl","w-full","lg:text-sm/snug","lg:font-semibold","max-w-prose","tracking-tight"],[1,"w-full","flex","flex-row","place-items-start","pb-4","lg:place-content-start","space-x-2"],[1,"flex","space-x-2","sm:space-x-4","lg:space-x-2","w-full"],["type","button","value","small",1,"text-sm/snug","md:text-base/snug","lg:text-sm/6","border-2","border-btnClr1","rounded-full","px-4","lg:px-1.5","font-medium","active",3,"disabled","click"],["btn",""],["type","button","value","large",1,"text-sm/snug","md:text-base/snug","lg:text-sm/6","border-2","border-btnClr1","rounded-full","px-4","lg:px-1.5","font-medium",3,"disabled","click"],[1,"w-full","h-full","max-h-fit","flex","flex-row","place-content-between","px-5","space-x-4"],[1,"flex","flex-row","space-x-2","place-items-center"],[1,"w-6","h-6","md:w-6","md:h-6","lg:w-6","lg:h-6",3,"disabled","click"],["stroke","#000","stroke-width","2","stroke-linecap","round","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["opacity","0.3","cx","12","cy","12","r","10"],["d","M15 12H9"],[1,"text-lg","md:text-2xl","lg:text-base","font-semibold",3,"ngClass"],["d","M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"],["type","button","class","font-medium text-btnClr0 border-2 border-btnClr0 rounded-3xl px-3 lg:py-1.5 lg:px-3 lg:text-base/snug",3,"disabled","click",4,"ngIf"],["type","button","class","font-medium text-white border-2 border-btnClr0 bg-btnClr0 rounded-3xl px-3 lg:py-1.5 lg:px-3 lg:text-base/snug ",3,"click",4,"ngIf"],["type","button",1,"font-medium","text-btnClr0","border-2","border-btnClr0","rounded-3xl","px-3","lg:py-1.5","lg:px-3","lg:text-base/snug",3,"disabled","click"],["type","button",1,"font-medium","text-white","border-2","border-btnClr0","bg-btnClr0","rounded-3xl","px-3","lg:py-1.5","lg:px-3","lg:text-base/snug",3,"click"]],template:function(s,o){1&s&&(n.TgZ(0,"div",0)(1,"div",1),n._UZ(2,"img",2),n.TgZ(3,"div",3)(4,"div",4)(5,"p",5),n._uU(6),n.ALo(7,"lowercase"),n.qZA(),n.TgZ(8,"p",6),n._uU(9),n.ALo(10,"currency"),n.qZA()(),n.TgZ(11,"p",7),n._uU(12),n.qZA(),n.TgZ(13,"div",8)(14,"div",9)(15,"button",10,11),n.NdJ("click",function(){return o.setItemSize("small - 200g")}),n._uU(17," Small "),n.qZA(),n.TgZ(18,"button",12,11),n.NdJ("click",function(){return o.setItemSize("large - 300g")}),n._uU(20," Large "),n.qZA()()()()(),n.TgZ(21,"div",13)(22,"div",14)(23,"button",15),n.NdJ("click",function(){return o.decrement()}),n.O4$(),n.TgZ(24,"svg",16),n._UZ(25,"circle",17)(26,"path",18),n.qZA()(),n.kcU(),n.TgZ(27,"p",19),n._uU(28),n.qZA(),n.TgZ(29,"button",15),n.NdJ("click",function(){return o.increment()}),n.O4$(),n.TgZ(30,"svg",16),n._UZ(31,"circle",17)(32,"path",20),n.qZA()()(),n.YNc(33,bt,2,1,"button",21),n.YNc(34,_t,2,0,"button",22),n.qZA()()),2&s&&(n.xp6(2),n.s9C("src",o.coffee.imageSrc,n.LSH),n.xp6(4),n.hij(" ",n.lcZ(7,12,o.coffee.title)," "),n.xp6(3),n.hij(" ",n.lcZ(10,14,o.coffee.price)," "),n.xp6(3),n.hij(" ",o.coffee.description," "),n.xp6(3),n.Q6J("disabled",o.isAddedToCart),n.xp6(3),n.Q6J("disabled",o.isAddedToCart),n.xp6(5),n.Q6J("disabled",o.isAddedToCart),n.xp6(4),n.Q6J("ngClass",n.VKq(16,vt,o.isAddedToCart)),n.xp6(1),n.hij(" ",o.quantityOfItem()," "),n.xp6(1),n.Q6J("disabled",o.isAddedToCart),n.xp6(4),n.Q6J("ngIf",!o.isAddedToCart),n.xp6(1),n.Q6J("ngIf",o.isAddedToCart))},dependencies:[y.ez,y.mk,y.O5,y.i8,y.H9],styles:[".active[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(60 60 60 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.added[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(255 161 108 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}"],changeDetection:0}),e})();var W=C(591),wt=C(1631);const m={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},Z_ms=t=>1e3*t,Z_s=t=>t/1e3,X=()=>{},b=t=>t;function tt(t,e=!0){if(t&&"finished"!==t.playState)try{t.stop?t.stop():(e&&t.commitStyles(),t.cancel())}catch{}}const At=t=>t(),et=(t,e,i=m.duration)=>new Proxy({animations:t.map(At).filter(Boolean),duration:i,options:e},St),St={get:(t,e)=>{const i=(t=>t.animations[0])(t);switch(e){case"duration":return t.duration;case"currentTime":return Z_s(i?.[e]||0);case"playbackRate":case"playState":return i?.[e];case"finished":return t.finished||(t.finished=Promise.all(t.animations.map(It)).catch(X)),t.finished;case"stop":return()=>{t.animations.forEach(s=>tt(s))};case"forEachNative":return s=>{t.animations.forEach(o=>s(o,t))};default:return typeof i?.[e]>"u"?void 0:()=>t.animations.forEach(s=>s[e]())}},set:(t,e,i)=>{switch(e){case"currentTime":i=Z_ms(i);case"currentTime":case"playbackRate":for(let s=0;s<t.animations.length;s++)t.animations[s][e]=i;return!0}return!1}},It=t=>t.finished,V=t=>"object"==typeof t&&!!t.createAnimation,U=t=>"number"==typeof t,A=t=>Array.isArray(t)&&!U(t[0]),nt=(t,e,i)=>-i*t+i*e+t,$=(t,e,i)=>e-t==0?1:(i-t)/(e-t);function it(t,e){const i=t[t.length-1];for(let s=1;s<=e;s++){const o=$(0,e,s);t.push(nt(i,1,o))}}const st=(t,e,i)=>Math.min(Math.max(i,t),e);const ot=(t,e,i)=>(((1-3*i+3*e)*t+(3*i-6*e))*t+3*e)*t,kt=1e-7,zt=12;function M(t,e,i,s){if(t===e&&i===s)return b;return r=>0===r||1===r?r:ot((r=>function Lt(t,e,i,s,o){let r,a,c=0;do{a=e+(i-e)/2,r=ot(a,s,o)-t,r>0?i=a:e=a}while(Math.abs(r)>kt&&++c<zt);return a}(r,0,1,t,i))(r),e,s)}const O=t=>"function"==typeof t,rt=t=>Array.isArray(t)&&U(t[0]),at={ease:M(.25,.1,.25,1),"ease-in":M(.42,0,1,1),"ease-in-out":M(.42,0,.58,1),"ease-out":M(0,0,.58,1)},qt=/\((.*?)\)/;function ct(t){if(O(t))return t;if(rt(t))return M(...t);if(at[t])return at[t];if(t.startsWith("steps")){const e=qt.exec(t);if(e){const i=e[1].split(",");return((t,e="end")=>i=>{const s=(i="end"===e?Math.min(i,.999):Math.max(i,.001))*t,o="end"===e?Math.floor(s):Math.ceil(s);return st(0,1,o/t)})(parseFloat(i[0]),i[1].trim())}}return b}class lt{constructor(e,i=[0,1],{easing:s,duration:o=m.duration,delay:r=m.delay,endDelay:a=m.endDelay,repeat:c=m.repeat,offset:u,direction:p="normal"}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=b,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((h,d)=>{this.resolve=h,this.reject=d}),V(s=s||m.easing)){const h=s.createAnimation(i);s=h.easing,i=h.keyframes||i,o=h.duration||o}this.repeat=c,this.easing=A(s)?b:ct(s),this.updateDuration(o);const _=function Et(t,e=function Zt(t){const e=[0];return it(e,t-1),e}(t.length),i=b){const s=t.length,o=s-e.length;return o>0&&it(e,o),r=>{let a=0;for(;a<s-2&&!(r<e[a+1]);a++);let c=st(0,1,$(e[a],e[a+1],r));return c=function Ft(t,e){return A(t)?t[((t,e,i)=>{const s=e-t;return((i-t)%s+s)%s+t})(0,t.length,e)]:t}(i,a)(c),nt(t[a],t[a+1],c)}}(i,u,A(s)?s.map(ct):b);this.tick=h=>{var d;let g=0;g=void 0!==this.pauseTime?this.pauseTime:(h-this.startTime)*this.rate,this.t=g,g/=1e3,g=Math.max(g-r,0),"finished"===this.playState&&void 0===this.pauseTime&&(g=this.totalDuration);const E=g/this.duration;let k=Math.floor(E),v=E%1;!v&&E>=1&&(v=1),1===v&&k--;const N=k%2;("reverse"===p||"alternate"===p&&N||"alternate-reverse"===p&&!N)&&(v=1-v);const z=g>=this.totalDuration?1:Math.min(v,1),I=_(this.easing(z));e(I),void 0===this.pauseTime&&("finished"===this.playState||g>=this.totalDuration+a)?(this.playState="finished",null===(d=this.resolve)||void 0===d||d.call(this,I)):"idle"!==this.playState&&(this.frameRequestId=requestAnimationFrame(this.tick))},this.play()}play(){const e=performance.now();this.playState="running",void 0!==this.pauseTime?this.startTime=e-this.pauseTime:this.startTime||(this.startTime=e),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var e;this.playState="idle",void 0!==this.frameRequestId&&cancelAnimationFrame(this.frameRequestId),null===(e=this.reject)||void 0===e||e.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(e){this.duration=e,this.totalDuration=e*(this.repeat+1)}get currentTime(){return this.t}set currentTime(e){void 0!==this.pauseTime||0===this.rate?this.pauseTime=e:this.startTime=performance.now()-e/this.rate}get playbackRate(){return this.rate}set playbackRate(e){this.rate=e}}class Dt{setAnimation(e){this.animation=e,e?.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const j=new WeakMap;function ft(t){return j.has(t)||j.set(t,{transforms:[],values:new Map}),j.get(t)}const Rt=["","X","Y","Z"],q={x:"translateX",y:"translateY",z:"translateZ"},ut={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:t=>t+"deg"},Vt={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:t=>t+"px"},rotate:ut,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:b},skew:ut},F=new Map,Q=t=>`--motion-${t}`,D=["x","y","z"];["translate","scale","rotate","skew"].forEach(t=>{Rt.forEach(e=>{D.push(t+e),F.set(Q(t+e),Vt[t])})});const $t=(t,e)=>D.indexOf(t)-D.indexOf(e),jt=new Set(D),pt=t=>jt.has(t),Bt=t=>t.sort($t).reduce(Ht,"").trim(),Ht=(t,e)=>`${t} ${e}(var(${Q(e)}))`,B=t=>t.startsWith("--"),mt=new Set,H=(t,e)=>document.createElement("div").animate(t,e),ht={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{H({opacity:[1]})}catch{return!1}return!0},finished:()=>!!H({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{H({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},K={},S={};for(const t in ht)S[t]=()=>(void 0===K[t]&&(K[t]=ht[t]()),K[t]);const gt=(t,e)=>O(t)?S.linearEasing()?`linear(${((t,e)=>{let i="";const s=Math.round(e/.015);for(let o=0;o<s;o++)i+=t($(0,s-1,o))+", ";return i.substring(0,i.length-2)})(t,e)})`:m.easing:rt(t)?Wt(t):t,Wt=([t,e,i,s])=>`cubic-bezier(${t}, ${e}, ${i}, ${s})`;function Y(t){return q[t]&&(t=q[t]),pt(t)?Q(t):t}const P_get=(t,e)=>{e=Y(e);let i=B(e)?t.style.getPropertyValue(e):getComputedStyle(t)[e];if(!i&&0!==i){const s=F.get(e);s&&(i=s.initialValue)}return i},P_set=(t,e,i)=>{e=Y(e),B(e)?t.style.setProperty(e,i):t.style[e]=i};function se(t,e,i,s={},o){const r=function ie(){return window.__MOTION_DEV_TOOLS_RECORD}(),a=!1!==s.record&&r;let c,{duration:u=m.duration,delay:p=m.delay,endDelay:_=m.endDelay,repeat:h=m.repeat,easing:d=m.easing,persist:g=!1,direction:E,offset:k,allowWebkitAcceleration:v=!1}=s;const N=ft(t),z=pt(e);let I=S.waapi();z&&((t,e)=>{q[e]&&(e=q[e]);const{transforms:i}=ft(t);(function Nt(t,e){-1===t.indexOf(e)&&t.push(e)})(i,e),t.style.transform=Bt(i)})(t,e);const x=Y(e),R=function Pt(t,e){return t.has(e)||t.set(e,new Dt),t.get(e)}(N.values,x),T=F.get(x);return tt(R.animation,!(V(d)&&R.generator)&&!1!==s.record),()=>{const J=()=>{var l,L;return null!==(L=null!==(l=P_get(t,x))&&void 0!==l?l:T?.initialValue)&&void 0!==L?L:0};let f=function Xt(t,e){for(let i=0;i<t.length;i++)null===t[i]&&(t[i]=i?t[i-1]:e());return t}((t=>Array.isArray(t)?t:[t])(i),J);const Ct=function ne(t,e){var i;let s=e?.toDefaultUnit||b;const o=t[t.length-1];if((t=>"string"==typeof t)(o)){const r=(null===(i=o.match(/(-?[\d.]+)([a-z%]*)/))||void 0===i?void 0:i[2])||"";r&&(s=a=>a+r)}return s}(f,T);if(V(d)){const l=d.createAnimation(f,"opacity"!==e,J,x,R);d=l.easing,f=l.keyframes||f,u=l.duration||u}if(B(x)&&(S.cssRegisterProperty()?function Kt(t){if(!mt.has(t)){mt.add(t);try{const{syntax:e,initialValue:i}=F.has(t)?F.get(t):{};CSS.registerProperty({name:t,inherits:!1,syntax:e,initialValue:i})}catch{}}}(x):I=!1),z&&!S.linearEasing()&&(O(d)||A(d)&&d.some(O))&&(I=!1),I){T&&(f=f.map(w=>U(w)?T.toDefaultUnit(w):w)),1===f.length&&(!S.partialKeyframes()||a)&&f.unshift(J());const l={delay:Z_ms(p),duration:Z_ms(u),endDelay:Z_ms(_),easing:A(d)?void 0:gt(d,u),direction:E,iterations:h+1,fill:"both"};c=t.animate({[x]:f,offset:k,easing:A(d)?d.map(w=>gt(w,u)):void 0},l),c.finished||(c.finished=new Promise((w,be)=>{c.onfinish=w,c.oncancel=be}));const L=f[f.length-1];c.finished.then(()=>{g||(P_set(t,x,L),c.cancel())}).catch(X),v||(c.playbackRate=1.000001)}else if(o&&z)f=f.map(l=>"string"==typeof l?parseFloat(l):l),1===f.length&&f.unshift(parseFloat(J())),c=new o(l=>{P_set(t,x,Ct?Ct(l):l)},f,Object.assign(Object.assign({},s),{duration:u,easing:d}));else{const l=f[f.length-1];P_set(t,x,T&&U(l)?T.toDefaultUnit(l):l)}return a&&r(t,e,f,{duration:u,delay:p,easing:d,repeat:h,offset:k},"motion-one"),R.setAnimation(c),c}}const oe=(t,e)=>t[e]?Object.assign(Object.assign({},t),t[e]):Object.assign({},t);function ce(t,e,i){return O(t)?t(e,i):t}const de=function le(t){return function(i,s,o={}){i=function re(t,e){var i;return"string"==typeof t?e?(null!==(i=e[t])&&void 0!==i||(e[t]=document.querySelectorAll(t)),t=e[t]):t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}(i);const r=i.length,a=[];for(let c=0;c<r;c++){const u=i[c];for(const p in s){const _=oe(o,p);_.delay=ce(_.delay,c,r);const h=se(u,p,s[p],_,t);a.push(h)}}return et(a,o,o.duration)}}(lt);function fe(t,e={}){return et([()=>{const i=new lt(t,[0,1],e);return i.finished.catch(()=>{}),i}],e,e.duration)}function ue(t,e,i){return(O(t)?fe:de)(t,e,i)}var xt=C(2806),pe=C(1173),me=C(4221);function he(t,e){if(1&t){const i=n.EpF();n.TgZ(0,"app-coffee-card",5,6),n.NdJ("addToCart",function(o){const a=n.CHM(i).$implicit,c=n.oxw(3);return n.KtG(c.addToCart(o.size,o.quantity,a))})("removeFromCart",function(){const r=n.CHM(i).$implicit,a=n.oxw(3);return n.KtG(a.removeFromCart(r.id))}),n.ALo(2,"async"),n.qZA()}if(2&t){const i=e.$implicit,s=n.oxw(3);n.Q6J("coffee",i)("isAddedToCart",n.lcZ(2,2,s.isAddedToCart(i.id)))}}function ge(t,e){if(1&t&&(n.ynx(0),n.YNc(1,he,3,4,"app-coffee-card",4),n.BQk()),2&t){const i=n.oxw().ngIf;n.xp6(1),n.Q6J("ngForOf",i)}}function xe(t,e){if(1&t&&(n.ynx(0),n.YNc(1,ge,2,1,"ng-container",3),n.BQk()),2&t){const i=e.ngIf;n.oxw();const s=n.MAs(4);n.xp6(1),n.Q6J("ngIf",i.length)("ngIfElse",s)}}function Ce(t,e){1&t&&(n.TgZ(0,"div",7),n.O4$(),n.TgZ(1,"svg",8),n._UZ(2,"path",9)(3,"path",10)(4,"path",11)(5,"path",12),n.qZA(),n.kcU(),n.TgZ(6,"p",13),n._uU(7,"Please wait..."),n.qZA()())}let ye=(()=>{var t;class e{constructor(s,o){this.route=s,this.store=o}ngAfterViewInit(){const s=document.querySelectorAll("#line");s.length&&ue(s,{y:-5,opacity:0},{repeat:1/0,duration:2})}ngOnInit(){this.coffee$=this.route.data.pipe((0,wt.z)(s=>s.coffee))}addToCart(s,o,r){this.store.dispatch(xt.M.addToCart({item:{id:r.id,name:r.title,size:s??r.size,imageSrc:r.imageSrc,quantity:o,unitPrice:+r.price,totalPrice:o*+r.price}}))}removeFromCart(s){this.store.dispatch(xt.M.removeFromCart({itemId:s}))}isAddedToCart(s){return this.store.select((0,pe.U1)(s))}}return(t=e).\u0275fac=function(s){return new(s||t)(n.Y36(W.gz),n.Y36(me.yh))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-coffee-list"]],standalone:!0,features:[n.jDz],decls:5,vars:3,consts:[[1,"w-full","h-full","flex","flex-col","gap-5","md:gap-3","lg:gap-5","py-4","sm:space-y-8","sm:px-10","sm:pb-14","snap-y","snap-mandatory","scroll-smooth","lg:space-y-0","lg:grid","lg:grid-cols-[repeat(2,_minmax(320px,_1fr))]","2xl:grid-cols-3","lg:p-0","lg:h-fit"],[4,"ngIf"],["loader",""],[4,"ngIf","ngIfElse"],["class","snap-start",3,"coffee","isAddedToCart","addToCart","removeFromCart",4,"ngFor","ngForOf"],[1,"snap-start",3,"coffee","isAddedToCart","addToCart","removeFromCart"],["card",""],[1,"h-96","max-h-96","col-span-12","flex","flex-col","place-content-center","place-items-center"],["stroke","#000000bd","width","64px","height","64px","stroke-width","4","viewBox","0 0 128 128","id","Layer_1","version","1.1",0,"xml","space","preserve","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","stroke-linecap","round","stroke-linejoin","round",1,"opacity-70"],["d","M115.475,65.68c-1.279-3.345-3.926-4.971-8.094-4.971H96.608v-3.583c0-3.5-2.847-6.347-6.347-6.347H17.785 c-3.5,0-6.347,2.847-6.347,6.347v21.099c0,23.035,18.741,41.776,41.776,41.776h1.619c16.059,0,30.022-9.114,37.012-22.436h8.662 c8.854,0,16.056-7.203,16.056-16.056v-5.014C116.563,72.397,116.563,68.527,115.475,65.68z M54.833,118h-1.619 c-21.933,0-39.776-17.843-39.776-39.776V57.125c0-2.397,1.95-4.347,4.347-4.347h72.477c2.397,0,4.347,1.95,4.347,4.347v4.552 c0,0.011-0.006,0.02-0.006,0.031s0.006,0.02,0.006,0.031v16.484c0,6.385-1.521,12.418-4.206,17.771 c-0.06,0.084-0.109,0.173-0.141,0.274C83.673,109.153,70.271,118,54.833,118z M114.563,81.508c0,7.75-6.306,14.056-14.056,14.056 h-7.682c2.422-5.286,3.784-11.156,3.784-17.34V62.708h10.773c3.331,0,5.251,1.137,6.226,3.686c0.957,2.502,0.956,6.193,0.956,10.1 V81.508z"],["id","line","stroke","gray","d","M31.668,44.169c0.188,0.313,0.519,0.485,0.858,0.485c0.175,0,0.353-0.046,0.514-0.143c0.474-0.284,0.627-0.898,0.343-1.372 L30.27,37.95c-1.756-2.926-1.296-6.656,1.117-9.069l1.034-1.034c2.086-2.086,3.083-5.076,2.665-7.997l-1.57-10.992 c-0.078-0.547-0.58-0.921-1.131-0.848c-0.546,0.078-0.926,0.584-0.848,1.131l1.57,10.992c0.329,2.301-0.456,4.656-2.1,6.299 l-1.034,1.034c-3.063,3.063-3.646,7.797-1.417,11.513L31.668,44.169z"],["id","line","stroke","gray","d","M51.161,44.169c0.188,0.313,0.519,0.485,0.858,0.485c0.175,0,0.353-0.046,0.514-0.143c0.474-0.284,0.627-0.898,0.343-1.372 l-3.113-5.189c-1.756-2.927-1.297-6.656,1.116-9.069l1.034-1.034c2.086-2.086,3.083-5.076,2.666-7.997l-1.57-10.992 c-0.078-0.547-0.583-0.921-1.131-0.848c-0.546,0.078-0.926,0.584-0.848,1.131l1.57,10.992c0.329,2.301-0.457,4.656-2.1,6.299 l-1.034,1.034c-3.063,3.063-3.646,7.797-1.417,11.513L51.161,44.169z"],["id","line","stroke","gray","d","M70.654,44.169c0.188,0.313,0.519,0.485,0.858,0.485c0.175,0,0.353-0.046,0.514-0.143c0.474-0.284,0.627-0.898,0.343-1.372 l-3.114-5.189c-1.756-2.926-1.296-6.656,1.117-9.069l1.034-1.034c2.086-2.086,3.083-5.076,2.666-7.997l-1.57-10.992 c-0.078-0.547-0.581-0.921-1.131-0.848c-0.546,0.078-0.926,0.584-0.848,1.131l1.57,10.992c0.329,2.301-0.457,4.656-2.1,6.299 l-1.034,1.034c-3.063,3.063-3.646,7.797-1.417,11.513L70.654,44.169z"],[1,"text-lg","font-semibold","opacity-50"]],template:function(s,o){1&s&&(n.TgZ(0,"div",0),n.YNc(1,xe,2,2,"ng-container",1),n.ALo(2,"async"),n.qZA(),n.YNc(3,Ce,8,0,"ng-template",null,2,n.W1O)),2&s&&(n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,o.coffee$)))},dependencies:[y.ez,y.sg,y.O5,y.Ov,Tt,W.Bz],encapsulation:2,changeDetection:0}),e})()}}]);