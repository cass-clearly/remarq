var FeedbackLayer=(()=>{var aE=Object.create;var Xs=Object.defineProperty;var iE=Object.getOwnPropertyDescriptor;var oE=Object.getOwnPropertyNames;var uE=Object.getPrototypeOf,sE=Object.prototype.hasOwnProperty;var i=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var cE=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of oE(r))!sE.call(e,a)&&a!==t&&Xs(e,a,{get:()=>r[a],enumerable:!(n=iE(r,a))||n.enumerable});return e};var g=(e,r,t)=>(t=e!=null?aE(uE(e)):{},cE(r||!e||!e.__esModule?Xs(t,"default",{value:e,enumerable:!0}):t,e));var P=i((E5,ac)=>{"use strict";ac.exports=function(e){try{return!!e()}catch{return!0}}});var Rr=i((I5,ic)=>{"use strict";var lE=P();ic.exports=!lE(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var A=i((k5,sc)=>{"use strict";var oc=Rr(),uc=Function.prototype,Za=uc.call,fE=oc&&uc.bind.bind(Za,Za);sc.exports=oc?fE:function(e){return function(){return Za.apply(e,arguments)}}});var U=i((P5,cc)=>{"use strict";var pE=A();cc.exports=pE({}.isPrototypeOf)});var _=i((ei,lc)=>{"use strict";var lt=function(e){return e&&e.Math===Math&&e};lc.exports=lt(typeof globalThis=="object"&&globalThis)||lt(typeof window=="object"&&window)||lt(typeof self=="object"&&self)||lt(typeof global=="object"&&global)||lt(typeof ei=="object"&&ei)||function(){return this}()||Function("return this")()});var Ar=i((_5,dc)=>{"use strict";var vE=Rr(),vc=Function.prototype,fc=vc.apply,pc=vc.call;dc.exports=typeof Reflect=="object"&&Reflect.apply||(vE?pc.bind(fc):function(){return pc.apply(fc,arguments)})});var Se=i((R5,hc)=>{"use strict";var mc=A(),dE=mc({}.toString),mE=mc("".slice);hc.exports=function(e){return mE(dE(e),8,-1)}});var ft=i((A5,yc)=>{"use strict";var hE=Se(),yE=A();yc.exports=function(e){if(hE(e)==="Function")return yE(e)}});var N=i((N5,gc)=>{"use strict";var ri=typeof document=="object"&&document.all;gc.exports=typeof ri>"u"&&ri!==void 0?function(e){return typeof e=="function"||e===ri}:function(e){return typeof e=="function"}});var H=i((M5,bc)=>{"use strict";var gE=P();bc.exports=!gE(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var B=i((j5,qc)=>{"use strict";var bE=Rr(),yn=Function.prototype.call;qc.exports=bE?yn.bind(yn):function(){return yn.apply(yn,arguments)}});var ti=i(wc=>{"use strict";var xc={}.propertyIsEnumerable,Sc=Object.getOwnPropertyDescriptor,qE=Sc&&!xc.call({1:2},1);wc.f=qE?function(r){var t=Sc(this,r);return!!t&&t.enumerable}:xc});var Ke=i((L5,Tc)=>{"use strict";Tc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var gn=i((F5,Oc)=>{"use strict";var xE=A(),SE=P(),wE=Se(),ni=Object,TE=xE("".split);Oc.exports=SE(function(){return!ni("z").propertyIsEnumerable(0)})?function(e){return wE(e)==="String"?TE(e,""):ni(e)}:ni});var ir=i((D5,Cc)=>{"use strict";Cc.exports=function(e){return e==null}});var or=i((B5,Ec)=>{"use strict";var OE=ir(),CE=TypeError;Ec.exports=function(e){if(OE(e))throw new CE("Can't call method on "+e);return e}});var Pe=i((G5,Ic)=>{"use strict";var EE=gn(),IE=or();Ic.exports=function(e){return EE(IE(e))}});var $=i((U5,kc)=>{"use strict";var kE=N();kc.exports=function(e){return typeof e=="object"?e!==null:kE(e)}});var V=i((H5,Pc)=>{"use strict";Pc.exports={}});var W=i((W5,Rc)=>{"use strict";var ai=V(),ii=_(),PE=N(),_c=function(e){return PE(e)?e:void 0};Rc.exports=function(e,r){return arguments.length<2?_c(ai[e])||_c(ii[e]):ai[e]&&ai[e][r]||ii[e]&&ii[e][r]}});var Nr=i((K5,Mc)=>{"use strict";var _E=_(),Ac=_E.navigator,Nc=Ac&&Ac.userAgent;Mc.exports=Nc?String(Nc):""});var Mr=i((z5,Bc)=>{"use strict";var Dc=_(),oi=Nr(),jc=Dc.process,$c=Dc.Deno,Lc=jc&&jc.versions||$c&&$c.version,Fc=Lc&&Lc.v8,me,bn;Fc&&(me=Fc.split("."),bn=me[0]>0&&me[0]<4?1:+(me[0]+me[1]));!bn&&oi&&(me=oi.match(/Edge\/(\d+)/),(!me||me[1]>=74)&&(me=oi.match(/Chrome\/(\d+)/),me&&(bn=+me[1])));Bc.exports=bn});var ur=i((V5,Uc)=>{"use strict";var Gc=Mr(),RE=P(),AE=_(),NE=AE.String;Uc.exports=!!Object.getOwnPropertySymbols&&!RE(function(){var e=Symbol("symbol detection");return!NE(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Gc&&Gc<41})});var ui=i((Y5,Hc)=>{"use strict";var ME=ur();Hc.exports=ME&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var jr=i((J5,Wc)=>{"use strict";var jE=W(),$E=N(),LE=U(),FE=ui(),DE=Object;Wc.exports=FE?function(e){return typeof e=="symbol"}:function(e){var r=jE("Symbol");return $E(r)&&LE(r.prototype,DE(e))}});var ze=i((Q5,Kc)=>{"use strict";var BE=String;Kc.exports=function(e){try{return BE(e)}catch{return"Object"}}});var F=i((X5,zc)=>{"use strict";var GE=N(),UE=ze(),HE=TypeError;zc.exports=function(e){if(GE(e))return e;throw new HE(UE(e)+" is not a function")}});var qn=i((Z5,Vc)=>{"use strict";var WE=F(),KE=ir();Vc.exports=function(e,r){var t=e[r];return KE(t)?void 0:WE(t)}});var Jc=i((e6,Yc)=>{"use strict";var si=B(),ci=N(),li=$(),zE=TypeError;Yc.exports=function(e,r){var t,n;if(r==="string"&&ci(t=e.toString)&&!li(n=si(t,e))||ci(t=e.valueOf)&&!li(n=si(t,e))||r!=="string"&&ci(t=e.toString)&&!li(n=si(t,e)))return n;throw new zE("Can't convert object to primitive value")}});var Z=i((r6,Qc)=>{"use strict";Qc.exports=!0});var el=i((t6,Zc)=>{"use strict";var Xc=_(),VE=Object.defineProperty;Zc.exports=function(e,r){try{VE(Xc,e,{value:r,configurable:!0,writable:!0})}catch{Xc[e]=r}return r}});var pt=i((n6,nl)=>{"use strict";var YE=Z(),JE=_(),QE=el(),rl="__core-js_shared__",tl=nl.exports=JE[rl]||QE(rl,{});(tl.versions||(tl.versions=[])).push({version:"3.48.0",mode:YE?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var sr=i((a6,il)=>{"use strict";var al=pt();il.exports=function(e,r){return al[e]||(al[e]=r||{})}});var re=i((i6,ol)=>{"use strict";var XE=or(),ZE=Object;ol.exports=function(e){return ZE(XE(e))}});var K=i((o6,ul)=>{"use strict";var e0=A(),r0=re(),t0=e0({}.hasOwnProperty);ul.exports=Object.hasOwn||function(r,t){return t0(r0(r),t)}});var $r=i((u6,sl)=>{"use strict";var n0=A(),a0=0,i0=Math.random(),o0=n0(1.1.toString);sl.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+o0(++a0+i0,36)}});var R=i((s6,ll)=>{"use strict";var u0=_(),s0=sr(),cl=K(),c0=$r(),l0=ur(),f0=ui(),Lr=u0.Symbol,fi=s0("wks"),p0=f0?Lr.for||Lr:Lr&&Lr.withoutSetter||c0;ll.exports=function(e){return cl(fi,e)||(fi[e]=l0&&cl(Lr,e)?Lr[e]:p0("Symbol."+e)),fi[e]}});var dl=i((c6,vl)=>{"use strict";var v0=B(),fl=$(),pl=jr(),d0=qn(),m0=Jc(),h0=R(),y0=TypeError,g0=h0("toPrimitive");vl.exports=function(e,r){if(!fl(e)||pl(e))return e;var t=d0(e,g0),n;if(t){if(r===void 0&&(r="default"),n=v0(t,e,r),!fl(n)||pl(n))return n;throw new y0("Can't convert object to primitive value")}return r===void 0&&(r="number"),m0(e,r)}});var xn=i((l6,ml)=>{"use strict";var b0=dl(),q0=jr();ml.exports=function(e){var r=b0(e,"string");return q0(r)?r:r+""}});var Sn=i((f6,yl)=>{"use strict";var x0=_(),hl=$(),pi=x0.document,S0=hl(pi)&&hl(pi.createElement);yl.exports=function(e){return S0?pi.createElement(e):{}}});var vi=i((p6,gl)=>{"use strict";var w0=H(),T0=P(),O0=Sn();gl.exports=!w0&&!T0(function(){return Object.defineProperty(O0("div"),"a",{get:function(){return 7}}).a!==7})});var vt=i(ql=>{"use strict";var C0=H(),E0=B(),I0=ti(),k0=Ke(),P0=Pe(),_0=xn(),R0=K(),A0=vi(),bl=Object.getOwnPropertyDescriptor;ql.f=C0?bl:function(r,t){if(r=P0(r),t=_0(t),A0)try{return bl(r,t)}catch{}if(R0(r,t))return k0(!E0(I0.f,r,t),r[t])}});var di=i((d6,xl)=>{"use strict";var N0=P(),M0=N(),j0=/#|\.prototype\./,dt=function(e,r){var t=L0[$0(e)];return t===D0?!0:t===F0?!1:M0(r)?N0(r):!!r},$0=dt.normalize=function(e){return String(e).replace(j0,".").toLowerCase()},L0=dt.data={},F0=dt.NATIVE="N",D0=dt.POLYFILL="P";xl.exports=dt});var Y=i((m6,wl)=>{"use strict";var Sl=ft(),B0=F(),G0=Rr(),U0=Sl(Sl.bind);wl.exports=function(e,r){return B0(e),r===void 0?e:G0?U0(e,r):function(){return e.apply(r,arguments)}}});var mi=i((h6,Tl)=>{"use strict";var H0=H(),W0=P();Tl.exports=H0&&W0(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var X=i((y6,Ol)=>{"use strict";var K0=$(),z0=String,V0=TypeError;Ol.exports=function(e){if(K0(e))return e;throw new V0(z0(e)+" is not an object")}});var te=i(El=>{"use strict";var Y0=H(),J0=vi(),Q0=mi(),wn=X(),Cl=xn(),X0=TypeError,hi=Object.defineProperty,Z0=Object.getOwnPropertyDescriptor,yi="enumerable",gi="configurable",bi="writable";El.f=Y0?Q0?function(r,t,n){if(wn(r),t=Cl(t),wn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&bi in n&&!n[bi]){var a=Z0(r,t);a&&a[bi]&&(r[t]=n.value,n={configurable:gi in n?n[gi]:a[gi],enumerable:yi in n?n[yi]:a[yi],writable:!1})}return hi(r,t,n)}:hi:function(r,t,n){if(wn(r),t=Cl(t),wn(n),J0)try{return hi(r,t,n)}catch{}if("get"in n||"set"in n)throw new X0("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var we=i((b6,Il)=>{"use strict";var eI=H(),rI=te(),tI=Ke();Il.exports=eI?function(e,r,t){return rI.f(e,r,tI(1,t))}:function(e,r,t){return e[r]=t,e}});var x=i((q6,Pl)=>{"use strict";var mt=_(),nI=Ar(),aI=ft(),iI=N(),oI=vt().f,uI=di(),Fr=V(),sI=Y(),Dr=we(),kl=K();pt();var cI=function(e){var r=function(t,n,a){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,a)}return nI(e,this,arguments)};return r.prototype=e.prototype,r};Pl.exports=function(e,r){var t=e.target,n=e.global,a=e.stat,o=e.proto,u=n?mt:a?mt[t]:mt[t]&&mt[t].prototype,s=n?Fr:Fr[t]||Dr(Fr,t,{})[t],c=s.prototype,l,f,p,v,d,h,m,y,b;for(v in r)l=uI(n?v:t+(a?".":"#")+v,e.forced),f=!l&&u&&kl(u,v),h=s[v],f&&(e.dontCallGetSet?(b=oI(u,v),m=b&&b.value):m=u[v]),d=f&&m?m:r[v],!(!l&&!o&&typeof h==typeof d)&&(e.bind&&f?y=sI(d,mt):e.wrap&&f?y=cI(d):o&&iI(d)?y=aI(d):y=d,(e.sham||d&&d.sham||h&&h.sham)&&Dr(y,"sham",!0),Dr(s,v,y),o&&(p=t+"Prototype",kl(Fr,p)||Dr(Fr,p,{}),Dr(Fr[p],v,d),e.real&&c&&(l||!c[v])&&Dr(c,v,d)))}});var _e=i((x6,_l)=>{"use strict";var lI=Se();_l.exports=Array.isArray||function(r){return lI(r)==="Array"}});var Tn=i((S6,Al)=>{"use strict";var fI=R(),pI=fI("toStringTag"),Rl={};Rl[pI]="z";Al.exports=String(Rl)==="[object z]"});var ht=i((w6,Nl)=>{"use strict";var vI=Tn(),dI=N(),On=Se(),mI=R(),hI=mI("toStringTag"),yI=Object,gI=On(function(){return arguments}())==="Arguments",bI=function(e,r){try{return e[r]}catch{}};Nl.exports=vI?On:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=bI(r=yI(e),hI))=="string"?t:gI?On(r):(n=On(r))==="Object"&&dI(r.callee)?"Arguments":n}});var xi=i((T6,Ml)=>{"use strict";var qI=A(),xI=N(),qi=pt(),SI=qI(Function.toString);xI(qi.inspectSource)||(qi.inspectSource=function(e){return SI(e)});Ml.exports=qi.inspectSource});var gt=i((O6,Dl)=>{"use strict";var wI=A(),TI=P(),jl=N(),OI=ht(),CI=W(),EI=xi(),$l=function(){},Ll=CI("Reflect","construct"),Si=/^\s*(?:class|function)\b/,II=wI(Si.exec),kI=!Si.test($l),yt=function(r){if(!jl(r))return!1;try{return Ll($l,[],r),!0}catch{return!1}},Fl=function(r){if(!jl(r))return!1;switch(OI(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return kI||!!II(Si,EI(r))}catch{return!0}};Fl.sham=!0;Dl.exports=!Ll||TI(function(){var e;return yt(yt.call)||!yt(Object)||!yt(function(){e=!0})||e})?Fl:yt});var Gl=i((C6,Bl)=>{"use strict";var PI=Math.ceil,_I=Math.floor;Bl.exports=Math.trunc||function(r){var t=+r;return(t>0?_I:PI)(t)}});var Cn=i((E6,Ul)=>{"use strict";var RI=Gl();Ul.exports=function(e){var r=+e;return r!==r||r===0?0:RI(r)}});var wi=i((I6,Hl)=>{"use strict";var AI=Cn(),NI=Math.max,MI=Math.min;Hl.exports=function(e,r){var t=AI(e);return t<0?NI(t+r,0):MI(t,r)}});var Ti=i((k6,Wl)=>{"use strict";var jI=Cn(),$I=Math.min;Wl.exports=function(e){var r=jI(e);return r>0?$I(r,9007199254740991):0}});var fe=i((P6,Kl)=>{"use strict";var LI=Ti();Kl.exports=function(e){return LI(e.length)}});var Br=i((_6,zl)=>{"use strict";var FI=H(),DI=te(),BI=Ke();zl.exports=function(e,r,t){FI?DI.f(e,r,BI(0,t)):e[r]=t}});var Gr=i((R6,Vl)=>{"use strict";var GI=H(),UI=_e(),HI=TypeError,WI=Object.getOwnPropertyDescriptor,KI=GI&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();Vl.exports=KI?function(e,r){if(UI(e)&&!WI(e,"length").writable)throw new HI("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var bt=i((A6,Yl)=>{"use strict";var zI=P(),VI=R(),YI=Mr(),JI=VI("species");Yl.exports=function(e){return YI>=51||!zI(function(){var r=[],t=r.constructor={};return t[JI]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var cr=i((N6,Jl)=>{"use strict";var QI=A();Jl.exports=QI([].slice)});var Zl=i(()=>{"use strict";var XI=x(),Ql=_e(),ZI=gt(),ek=$(),Xl=wi(),rk=fe(),tk=Pe(),nk=Br(),ak=Gr(),ik=R(),ok=bt(),uk=cr(),sk=ok("slice"),ck=ik("species"),Oi=Array,lk=Math.max;XI({target:"Array",proto:!0,forced:!sk},{slice:function(r,t){var n=tk(this),a=rk(n),o=Xl(r,a),u=Xl(t===void 0?a:t,a),s,c,l;if(Ql(n)&&(s=n.constructor,ZI(s)&&(s===Oi||Ql(s.prototype))?s=void 0:ek(s)&&(s=s[ck],s===null&&(s=void 0)),s===Oi||s===void 0))return uk(n,o,u);for(c=new(s===void 0?Oi:s)(lk(u-o,0)),l=0;o<u;o++,l++)o in n&&nk(c,l,n[o]);return ak(c,l),c}})});var ue=i(($6,ef)=>{"use strict";var fk=_(),pk=V();ef.exports=function(e,r){var t=pk[e+"Prototype"],n=t&&t[r];if(n)return n;var a=fk[e],o=a&&a.prototype;return o&&o[r]}});var tf=i((L6,rf)=>{"use strict";Zl();var vk=ue();rf.exports=vk("Array","slice")});var af=i((F6,nf)=>{"use strict";var dk=U(),mk=tf(),Ci=Array.prototype;nf.exports=function(e){var r=e.slice;return e===Ci||dk(Ci,e)&&r===Ci.slice?mk:r}});var uf=i((D6,of)=>{"use strict";var hk=af();of.exports=hk});var cf=i((B6,sf)=>{"use strict";var yk=uf();sf.exports=yk});var ff=i((G6,lf)=>{"use strict";var gk=cf();lf.exports=gk});var Ei=i((U6,pf)=>{"use strict";pf.exports=ff()});var Ur=i((H6,vf)=>{vf.exports=Ei()});var Ve=i((W6,df)=>{"use strict";var bk=ht(),qk=String;df.exports=function(e){if(bk(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return qk(e)}});var gf=i((K6,yf)=>{"use strict";var Ii=A(),xk=Cn(),Sk=Ve(),wk=or(),Tk=Ii("".charAt),mf=Ii("".charCodeAt),Ok=Ii("".slice),hf=function(e){return function(r,t){var n=Sk(wk(r)),a=xk(t),o=n.length,u,s;return a<0||a>=o?e?"":void 0:(u=mf(n,a),u<55296||u>56319||a+1===o||(s=mf(n,a+1))<56320||s>57343?e?Tk(n,a):u:e?Ok(n,a,a+2):(u-55296<<10)+(s-56320)+65536)}};yf.exports={codeAt:hf(!1),charAt:hf(!0)}});var xf=i((z6,qf)=>{"use strict";var Ck=_(),Ek=N(),bf=Ck.WeakMap;qf.exports=Ek(bf)&&/native code/.test(String(bf))});var qt=i((V6,wf)=>{"use strict";var Ik=sr(),kk=$r(),Sf=Ik("keys");wf.exports=function(e){return Sf[e]||(Sf[e]=kk(e))}});var Hr=i((Y6,Tf)=>{"use strict";Tf.exports={}});var Ye=i((J6,Ef)=>{"use strict";var Pk=xf(),Cf=_(),_k=$(),Rk=we(),ki=K(),Pi=pt(),Ak=qt(),Nk=Hr(),Of="Object already initialized",_i=Cf.TypeError,Mk=Cf.WeakMap,En,xt,In,jk=function(e){return In(e)?xt(e):En(e,{})},$k=function(e){return function(r){var t;if(!_k(r)||(t=xt(r)).type!==e)throw new _i("Incompatible receiver, "+e+" required");return t}};Pk||Pi.state?(he=Pi.state||(Pi.state=new Mk),he.get=he.get,he.has=he.has,he.set=he.set,En=function(e,r){if(he.has(e))throw new _i(Of);return r.facade=e,he.set(e,r),r},xt=function(e){return he.get(e)||{}},In=function(e){return he.has(e)}):(lr=Ak("state"),Nk[lr]=!0,En=function(e,r){if(ki(e,lr))throw new _i(Of);return r.facade=e,Rk(e,lr,r),r},xt=function(e){return ki(e,lr)?e[lr]:{}},In=function(e){return ki(e,lr)});var he,lr;Ef.exports={set:En,get:xt,has:In,enforce:jk,getterFor:$k}});var Pf=i((Q6,kf)=>{"use strict";var Ri=H(),Lk=K(),If=Function.prototype,Fk=Ri&&Object.getOwnPropertyDescriptor,Ai=Lk(If,"name"),Dk=Ai&&function(){}.name==="something",Bk=Ai&&(!Ri||Ri&&Fk(If,"name").configurable);kf.exports={EXISTS:Ai,PROPER:Dk,CONFIGURABLE:Bk}});var Ni=i((X6,Rf)=>{"use strict";var Gk=Pe(),Uk=wi(),Hk=fe(),_f=function(e){return function(r,t,n){var a=Gk(r),o=Hk(a);if(o===0)return!e&&-1;var u=Uk(n,o),s;if(e&&t!==t){for(;o>u;)if(s=a[u++],s!==s)return!0}else for(;o>u;u++)if((e||u in a)&&a[u]===t)return e||u||0;return!e&&-1}};Rf.exports={includes:_f(!0),indexOf:_f(!1)}});var ji=i((Z6,Nf)=>{"use strict";var Wk=A(),Mi=K(),Kk=Pe(),zk=Ni().indexOf,Vk=Hr(),Af=Wk([].push);Nf.exports=function(e,r){var t=Kk(e),n=0,a=[],o;for(o in t)!Mi(Vk,o)&&Mi(t,o)&&Af(a,o);for(;r.length>n;)Mi(t,o=r[n++])&&(~zk(a,o)||Af(a,o));return a}});var kn=i((eU,Mf)=>{"use strict";Mf.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var Pn=i((rU,jf)=>{"use strict";var Yk=ji(),Jk=kn();jf.exports=Object.keys||function(r){return Yk(r,Jk)}});var $i=i($f=>{"use strict";var Qk=H(),Xk=mi(),Zk=te(),e1=X(),r1=Pe(),t1=Pn();$f.f=Qk&&!Xk?Object.defineProperties:function(r,t){e1(r);for(var n=r1(t),a=t1(t),o=a.length,u=0,s;o>u;)Zk.f(r,s=a[u++],n[s]);return r}});var Li=i((nU,Lf)=>{"use strict";var n1=W();Lf.exports=n1("document","documentElement")});var Je=i((aU,Wf)=>{"use strict";var a1=X(),i1=$i(),Ff=kn(),o1=Hr(),u1=Li(),s1=Sn(),c1=qt(),Df=">",Bf="<",Di="prototype",Bi="script",Uf=c1("IE_PROTO"),Fi=function(){},Hf=function(e){return Bf+Bi+Df+e+Bf+"/"+Bi+Df},Gf=function(e){e.write(Hf("")),e.close();var r=e.parentWindow.Object;return e=null,r},l1=function(){var e=s1("iframe"),r="java"+Bi+":",t;return e.style.display="none",u1.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(Hf("document.F=Object")),t.close(),t.F},_n,Rn=function(){try{_n=new ActiveXObject("htmlfile")}catch{}Rn=typeof document<"u"?document.domain&&_n?Gf(_n):l1():Gf(_n);for(var e=Ff.length;e--;)delete Rn[Di][Ff[e]];return Rn()};o1[Uf]=!0;Wf.exports=Object.create||function(r,t){var n;return r!==null?(Fi[Di]=a1(r),n=new Fi,Fi[Di]=null,n[Uf]=r):n=Rn(),t===void 0?n:i1.f(n,t)}});var Gi=i((iU,Kf)=>{"use strict";var f1=P();Kf.exports=!f1(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var St=i((oU,Vf)=>{"use strict";var p1=K(),v1=N(),d1=re(),m1=qt(),h1=Gi(),zf=m1("IE_PROTO"),Ui=Object,y1=Ui.prototype;Vf.exports=h1?Ui.getPrototypeOf:function(e){var r=d1(e);if(p1(r,zf))return r[zf];var t=r.constructor;return v1(t)&&r instanceof t?t.prototype:r instanceof Ui?y1:null}});var Re=i((uU,Yf)=>{"use strict";var g1=we();Yf.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:g1(e,r,t),e}});var zi=i((sU,Xf)=>{"use strict";var b1=P(),q1=N(),x1=$(),S1=Je(),Jf=St(),w1=Re(),T1=R(),O1=Z(),Ki=T1("iterator"),Qf=!1,Ae,Hi,Wi;[].keys&&(Wi=[].keys(),"next"in Wi?(Hi=Jf(Jf(Wi)),Hi!==Object.prototype&&(Ae=Hi)):Qf=!0);var C1=!x1(Ae)||b1(function(){var e={};return Ae[Ki].call(e)!==e});C1?Ae={}:O1&&(Ae=S1(Ae));q1(Ae[Ki])||w1(Ae,Ki,function(){return this});Xf.exports={IteratorPrototype:Ae,BUGGY_SAFARI_ITERATORS:Qf}});var ep=i((cU,Zf)=>{"use strict";var E1=Tn(),I1=ht();Zf.exports=E1?{}.toString:function(){return"[object "+I1(this)+"]"}});var Ne=i((lU,tp)=>{"use strict";var k1=Tn(),P1=te().f,_1=we(),R1=K(),A1=ep(),N1=R(),rp=N1("toStringTag");tp.exports=function(e,r,t,n){var a=t?e:e&&e.prototype;a&&(R1(a,rp)||P1(a,rp,{configurable:!0,value:r}),n&&!k1&&_1(a,"toString",A1))}});var fr=i((fU,np)=>{"use strict";np.exports={}});var ip=i((pU,ap)=>{"use strict";var M1=zi().IteratorPrototype,j1=Je(),$1=Ke(),L1=Ne(),F1=fr(),D1=function(){return this};ap.exports=function(e,r,t,n){var a=r+" Iterator";return e.prototype=j1(M1,{next:$1(+!n,t)}),L1(e,a,!1,!0),F1[a]=D1,e}});var up=i((vU,op)=>{"use strict";var B1=A(),G1=F();op.exports=function(e,r,t){try{return B1(G1(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var cp=i((dU,sp)=>{"use strict";var U1=$();sp.exports=function(e){return U1(e)||e===null}});var fp=i((mU,lp)=>{"use strict";var H1=cp(),W1=String,K1=TypeError;lp.exports=function(e){if(H1(e))return e;throw new K1("Can't set "+W1(e)+" as a prototype")}});var wt=i((hU,pp)=>{"use strict";var z1=up(),V1=$(),Y1=or(),J1=fp();pp.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=z1(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(a,o){return Y1(a),J1(o),V1(a)&&(e?t(a,o):a.__proto__=o),a}}():void 0)});var Mn=i((yU,Sp)=>{"use strict";var Q1=x(),X1=B(),An=Z(),qp=Pf(),Z1=N(),eP=ip(),vp=St(),dp=wt(),rP=Ne(),tP=we(),Vi=Re(),nP=R(),mp=fr(),xp=zi(),aP=qp.PROPER,iP=qp.CONFIGURABLE,hp=xp.IteratorPrototype,Nn=xp.BUGGY_SAFARI_ITERATORS,Tt=nP("iterator"),yp="keys",Ot="values",gp="entries",bp=function(){return this};Sp.exports=function(e,r,t,n,a,o,u){eP(t,r,n);var s=function(b){if(b===a&&v)return v;if(!Nn&&b&&b in f)return f[b];switch(b){case yp:return function(){return new t(this,b)};case Ot:return function(){return new t(this,b)};case gp:return function(){return new t(this,b)}}return function(){return new t(this)}},c=r+" Iterator",l=!1,f=e.prototype,p=f[Tt]||f["@@iterator"]||a&&f[a],v=!Nn&&p||s(a),d=r==="Array"&&f.entries||p,h,m,y;if(d&&(h=vp(d.call(new e)),h!==Object.prototype&&h.next&&(!An&&vp(h)!==hp&&(dp?dp(h,hp):Z1(h[Tt])||Vi(h,Tt,bp)),rP(h,c,!0,!0),An&&(mp[c]=bp))),aP&&a===Ot&&p&&p.name!==Ot&&(!An&&iP?tP(f,"name",Ot):(l=!0,v=function(){return X1(p,this)})),a)if(m={values:s(Ot),keys:o?v:s(yp),entries:s(gp)},u)for(y in m)(Nn||l||!(y in f))&&Vi(f,y,m[y]);else Q1({target:r,proto:!0,forced:Nn||l},m);return(!An||u)&&f[Tt]!==v&&Vi(f,Tt,v,{name:a}),mp[r]=v,m}});var jn=i((gU,wp)=>{"use strict";wp.exports=function(e,r){return{value:e,done:r}}});var pr=i(()=>{"use strict";var oP=gf().charAt,uP=Ve(),Op=Ye(),sP=Mn(),Tp=jn(),Cp="String Iterator",cP=Op.set,lP=Op.getterFor(Cp);sP(String,"String",function(e){cP(this,{type:Cp,string:uP(e),index:0})},function(){var r=lP(this),t=r.string,n=r.index,a;return n>=t.length?Tp(void 0,!0):(a=oP(t,n),r.index+=a.length,Tp(a,!1))})});var Yi=i((xU,Ip)=>{"use strict";var fP=B(),Ep=X(),pP=qn();Ip.exports=function(e,r,t){var n,a;Ep(e);try{if(n=pP(e,"return"),!n){if(r==="throw")throw t;return t}n=fP(n,e)}catch(o){a=!0,n=o}if(r==="throw")throw t;if(a)throw n;return Ep(n),t}});var Pp=i((SU,kp)=>{"use strict";var vP=X(),dP=Yi();kp.exports=function(e,r,t,n){try{return n?r(vP(t)[0],t[1]):r(t)}catch(a){dP(e,"throw",a)}}});var Ji=i((wU,_p)=>{"use strict";var mP=R(),hP=fr(),yP=mP("iterator"),gP=Array.prototype;_p.exports=function(e){return e!==void 0&&(hP.Array===e||gP[yP]===e)}});var Ct=i((TU,Ap)=>{"use strict";var bP=ht(),Rp=qn(),qP=ir(),xP=fr(),SP=R(),wP=SP("iterator");Ap.exports=function(e){if(!qP(e))return Rp(e,wP)||Rp(e,"@@iterator")||xP[bP(e)]}});var $n=i((OU,Np)=>{"use strict";var TP=B(),OP=F(),CP=X(),EP=ze(),IP=Ct(),kP=TypeError;Np.exports=function(e,r){var t=arguments.length<2?IP(e):r;if(OP(t))return CP(TP(t,e));throw new kP(EP(e)+" is not iterable")}});var Lp=i((CU,$p)=>{"use strict";var PP=Y(),_P=B(),RP=re(),AP=Pp(),NP=Ji(),MP=gt(),jP=fe(),Mp=Br(),$P=Gr(),LP=$n(),FP=Ct(),jp=Array;$p.exports=function(r){var t=RP(r),n=MP(this),a=arguments.length,o=a>1?arguments[1]:void 0,u=o!==void 0;u&&(o=PP(o,a>2?arguments[2]:void 0));var s=FP(t),c=0,l,f,p,v,d,h;if(s&&!(this===jp&&NP(s)))for(f=n?new this:[],v=LP(t,s),d=v.next;!(p=_P(d,v)).done;c++)h=u?AP(v,o,[p.value,c],!0):p.value,Mp(f,c,h);else for(l=jP(t),f=n?new this(l):jp(l);l>c;c++)h=u?o(t[c],c):t[c],Mp(f,c,h);return $P(f,c),f}});var Xi=i((EU,Gp)=>{"use strict";var DP=R(),Dp=DP("iterator"),Bp=!1;try{Fp=0,Qi={next:function(){return{done:!!Fp++}},return:function(){Bp=!0}},Qi[Dp]=function(){return this},Array.from(Qi,function(){throw 2})}catch{}var Fp,Qi;Gp.exports=function(e,r){try{if(!r&&!Bp)return!1}catch{return!1}var t=!1;try{var n={};n[Dp]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var Up=i(()=>{"use strict";var BP=x(),GP=Lp(),UP=Xi(),HP=!UP(function(e){Array.from(e)});BP({target:"Array",stat:!0,forced:HP},{from:GP})});var Wp=i((PU,Hp)=>{"use strict";pr();Up();var WP=V();Hp.exports=WP.Array.from});var zp=i((_U,Kp)=>{"use strict";var KP=Wp();Kp.exports=KP});var Yp=i((RU,Vp)=>{"use strict";var zP=zp();Vp.exports=zP});var Qp=i((AU,Jp)=>{"use strict";var VP=Yp();Jp.exports=VP});var Zi=i((NU,Xp)=>{"use strict";Xp.exports=Qp()});var Ln=i((MU,Zp)=>{Zp.exports=Zi()});var Et=i((jU,ev)=>{"use strict";var YP=TypeError,JP=9007199254740991;ev.exports=function(e){if(e>JP)throw YP("Maximum allowed index exceeded");return e}});var av=i(($U,nv)=>{"use strict";var rv=_e(),QP=gt(),XP=$(),ZP=R(),e_=ZP("species"),tv=Array;nv.exports=function(e){var r;return rv(e)&&(r=e.constructor,QP(r)&&(r===tv||rv(r.prototype))?r=void 0:XP(r)&&(r=r[e_],r===null&&(r=void 0))),r===void 0?tv:r}});var Fn=i((LU,iv)=>{"use strict";var r_=av();iv.exports=function(e,r){return new(r_(e))(r===0?0:r)}});var eo=i(()=>{"use strict";var t_=x(),n_=P(),a_=_e(),i_=$(),o_=re(),u_=fe(),ov=Et(),uv=Br(),s_=Gr(),c_=Fn(),l_=bt(),f_=R(),p_=Mr(),sv=f_("isConcatSpreadable"),v_=p_>=51||!n_(function(){var e=[];return e[sv]=!1,e.concat()[0]!==e}),d_=function(e){if(!i_(e))return!1;var r=e[sv];return r!==void 0?!!r:a_(e)},m_=!v_||!l_("concat");t_({target:"Array",proto:!0,arity:1,forced:m_},{concat:function(r){var t=o_(this),n=c_(t,0),a=0,o,u,s,c,l;for(o=-1,s=arguments.length;o<s;o++)if(l=o===-1?t:arguments[o],d_(l))for(c=u_(l),ov(a+c),u=0;u<c;u++,a++)u in l&&uv(n,a,l[u]);else ov(a+1),uv(n,a++,l);return s_(n,a),n}})});var It=i(()=>{});var kt=i(cv=>{"use strict";var h_=ji(),y_=kn(),g_=y_.concat("length","prototype");cv.f=Object.getOwnPropertyNames||function(r){return h_(r,g_)}});var ro=i((HU,pv)=>{"use strict";var b_=Se(),q_=Pe(),lv=kt().f,x_=cr(),fv=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],S_=function(e){try{return lv(e)}catch{return x_(fv)}};pv.exports.f=function(r){return fv&&b_(r)==="Window"?S_(r):lv(q_(r))}});var Dn=i(vv=>{"use strict";vv.f=Object.getOwnPropertySymbols});var Bn=i((KU,dv)=>{"use strict";var w_=te();dv.exports=function(e,r,t){return w_.f(e,r,t)}});var Wr=i(mv=>{"use strict";var T_=R();mv.f=T_});var M=i((VU,yv)=>{"use strict";var hv=V(),O_=K(),C_=Wr(),E_=te().f;yv.exports=function(e){var r=hv.Symbol||(hv.Symbol={});O_(r,e)||E_(r,e,{value:C_.f(e)})}});var to=i((YU,gv)=>{"use strict";var I_=B(),k_=W(),P_=R(),__=Re();gv.exports=function(){var e=k_("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=P_("toPrimitive");r&&!r[n]&&__(r,n,function(a){return I_(t,this)},{arity:1})}});var Pt=i((JU,qv)=>{"use strict";var R_=Y(),A_=gn(),N_=re(),M_=fe(),bv=Fn(),no=Br(),Qe=function(e){var r=e===1,t=e===2,n=e===3,a=e===4,o=e===6,u=e===7,s=e===5||o;return function(c,l,f){for(var p=N_(c),v=A_(p),d=M_(v),h=R_(l,f),m=0,y=0,b=r?bv(c,d):t||u?bv(c,0):void 0,q,I;d>m;m++)if((s||m in v)&&(q=v[m],I=h(q,m,p),e))if(r)no(b,m,I);else if(I)switch(e){case 3:return!0;case 5:return q;case 6:return m;case 2:no(b,y++,q)}else switch(e){case 4:return!1;case 7:no(b,y++,q)}return o?-1:n||a?a:b}};qv.exports={forEach:Qe(0),map:Qe(1),filter:Qe(2),some:Qe(3),every:Qe(4),find:Qe(5),findIndex:Qe(6),filterReject:Qe(7)}});var $v=i(()=>{"use strict";var Gn=x(),At=_(),po=B(),j_=A(),$_=Z(),Kr=H(),zr=ur(),L_=P(),z=K(),F_=U(),uo=X(),Un=Pe(),vo=xn(),D_=Ve(),so=Ke(),Vr=Je(),wv=Pn(),B_=kt(),Tv=ro(),G_=Dn(),Ov=vt(),Cv=te(),U_=$i(),Ev=ti(),ao=Re(),H_=Bn(),mo=sr(),W_=qt(),Iv=Hr(),xv=$r(),K_=R(),z_=Wr(),V_=M(),Y_=to(),J_=Ne(),kv=Ye(),Hn=Pt().forEach,ne=W_("hidden"),Wn="Symbol",Rt="prototype",Q_=kv.set,Sv=kv.getterFor(Wn),pe=Object[Rt],vr=At.Symbol,_t=vr&&vr[Rt],X_=At.RangeError,Z_=At.TypeError,io=At.QObject,Pv=Ov.f,dr=Cv.f,_v=Tv.f,eR=Ev.f,Rv=j_([].push),Me=mo("symbols"),Nt=mo("op-symbols"),rR=mo("wks"),co=!io||!io[Rt]||!io[Rt].findChild,Av=function(e,r,t){var n=Pv(pe,r);n&&delete pe[r],dr(e,r,t),n&&e!==pe&&dr(pe,r,n)},lo=Kr&&L_(function(){return Vr(dr({},"a",{get:function(){return dr(this,"a",{value:7}).a}})).a!==7})?Av:dr,oo=function(e,r){var t=Me[e]=Vr(_t);return Q_(t,{type:Wn,tag:e,description:r}),Kr||(t.description=r),t},Kn=function(r,t,n){r===pe&&Kn(Nt,t,n),uo(r);var a=vo(t);return uo(n),z(Me,a)?(n.enumerable?(z(r,ne)&&r[ne][a]&&(r[ne][a]=!1),n=Vr(n,{enumerable:so(0,!1)})):(z(r,ne)||dr(r,ne,so(1,Vr(null))),r[ne][a]=!0),lo(r,a,n)):dr(r,a,n)},ho=function(r,t){uo(r);var n=Un(t),a=wv(n).concat(jv(n));return Hn(a,function(o){(!Kr||po(fo,n,o))&&Kn(r,o,n[o])}),r},tR=function(r,t){return t===void 0?Vr(r):ho(Vr(r),t)},fo=function(r){var t=vo(r),n=po(eR,this,t);return this===pe&&z(Me,t)&&!z(Nt,t)?!1:n||!z(this,t)||!z(Me,t)||z(this,ne)&&this[ne][t]?n:!0},Nv=function(r,t){var n=Un(r),a=vo(t);if(!(n===pe&&z(Me,a)&&!z(Nt,a))){var o=Pv(n,a);return o&&z(Me,a)&&!(z(n,ne)&&n[ne][a])&&(o.enumerable=!0),o}},Mv=function(r){var t=_v(Un(r)),n=[];return Hn(t,function(a){!z(Me,a)&&!z(Iv,a)&&Rv(n,a)}),n},jv=function(e){var r=e===pe,t=_v(r?Nt:Un(e)),n=[];return Hn(t,function(a){z(Me,a)&&(!r||z(pe,a))&&Rv(n,Me[a])}),n};zr||(vr=function(){if(F_(_t,this))throw new Z_("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:D_(arguments[0]),t=xv(r),n=function(a){var o=this===void 0?At:this;o===pe&&po(n,Nt,a),z(o,ne)&&z(o[ne],t)&&(o[ne][t]=!1);var u=so(1,a);try{lo(o,t,u)}catch(s){if(!(s instanceof X_))throw s;Av(o,t,u)}};return Kr&&co&&lo(pe,t,{configurable:!0,set:n}),oo(t,r)},_t=vr[Rt],ao(_t,"toString",function(){return Sv(this).tag}),ao(vr,"withoutSetter",function(e){return oo(xv(e),e)}),Ev.f=fo,Cv.f=Kn,U_.f=ho,Ov.f=Nv,B_.f=Tv.f=Mv,G_.f=jv,z_.f=function(e){return oo(K_(e),e)},Kr&&(H_(_t,"description",{configurable:!0,get:function(){return Sv(this).description}}),$_||ao(pe,"propertyIsEnumerable",fo,{unsafe:!0})));Gn({global:!0,constructor:!0,wrap:!0,forced:!zr,sham:!zr},{Symbol:vr});Hn(wv(rR),function(e){V_(e)});Gn({target:Wn,stat:!0,forced:!zr},{useSetter:function(){co=!0},useSimple:function(){co=!1}});Gn({target:"Object",stat:!0,forced:!zr,sham:!Kr},{create:tR,defineProperty:Kn,defineProperties:ho,getOwnPropertyDescriptor:Nv});Gn({target:"Object",stat:!0,forced:!zr},{getOwnPropertyNames:Mv});Y_();J_(vr,Wn);Iv[ne]=!0});var yo=i((ZU,Lv)=>{"use strict";var nR=ur();Lv.exports=nR&&!!Symbol.for&&!!Symbol.keyFor});var Dv=i(()=>{"use strict";var aR=x(),iR=W(),oR=K(),uR=Ve(),Fv=sr(),sR=yo(),go=Fv("string-to-symbol-registry"),cR=Fv("symbol-to-string-registry");aR({target:"Symbol",stat:!0,forced:!sR},{for:function(e){var r=uR(e);if(oR(go,r))return go[r];var t=iR("Symbol")(r);return go[r]=t,cR[t]=r,t}})});var Gv=i(()=>{"use strict";var lR=x(),fR=K(),pR=jr(),vR=ze(),dR=sr(),mR=yo(),Bv=dR("symbol-to-string-registry");lR({target:"Symbol",stat:!0,forced:!mR},{keyFor:function(r){if(!pR(r))throw new TypeError(vR(r)+" is not a symbol");if(fR(Bv,r))return Bv[r]}})});var Hv=i((a8,Uv)=>{"use strict";var hR=$(),yR=Ye().get;Uv.exports=function(r){if(!hR(r))return!1;var t=yR(r);return!!t&&t.type==="RawJSON"}});var Yv=i((i8,Vv)=>{"use strict";var bo=A(),gR=K(),zn=SyntaxError,bR=parseInt,qR=String.fromCharCode,xR=bo("".charAt),Wv=bo("".slice),Kv=bo(/./.exec),zv={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},SR=/^[\da-f]{4}$/i,wR=/^[\u0000-\u001F]$/;Vv.exports=function(e,r){for(var t=!0,n="";r<e.length;){var a=xR(e,r);if(a==="\\"){var o=Wv(e,r,r+2);if(gR(zv,o))n+=zv[o],r+=2;else if(o==="\\u"){r+=2;var u=Wv(e,r,r+4);if(!Kv(SR,u))throw new zn("Bad Unicode escape at: "+r);n+=qR(bR(u,16)),r+=4}else throw new zn('Unknown escape sequence: "'+o+'"')}else if(a==='"'){t=!1,r++;break}else{if(Kv(wR,a))throw new zn("Bad control character in string literal at: "+r);n+=a,r++}}if(t)throw new zn("Unterminated string at: "+r);return{value:n,end:r}}});var Qv=i((o8,Jv)=>{"use strict";var TR=P();Jv.exports=!TR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var fd=i(()=>{"use strict";var OR=x(),id=W(),CR=Ar(),od=B(),mr=A(),ud=P(),Xv=_e(),Yn=N(),ER=Hv(),Zv=jr(),ed=Se(),IR=Ve(),kR=cr(),PR=Yv(),_R=$r(),RR=ur(),qo=Qv(),sd=String,Xe=id("JSON","stringify"),Vn=mr(/./.exec),So=mr("".charAt),AR=mr("".charCodeAt),NR=mr("".replace),xo=mr("".slice),wo=mr([].push),MR=mr(1.1.toString),jR=/[\uD800-\uDFFF]/g,rd=/^[\uD800-\uDBFF]$/,td=/^[\uDC00-\uDFFF]$/,To=_R(),nd=To.length,cd=!RR||ud(function(){var e=id("Symbol")("stringify detection");return Xe([e])!=="[null]"||Xe({a:e})!=="{}"||Xe(Object(e))!=="{}"}),ad=ud(function(){return Xe("\uDF06\uD834")!=='"\\udf06\\ud834"'||Xe("\uDEAD")!=='"\\udead"'}),$R=cd?function(e,r){var t=kR(arguments),n=ld(r);if(!(!Yn(n)&&(e===void 0||Zv(e))))return t[1]=function(a,o){if(Yn(n)&&(o=od(n,this,sd(a),o)),!Zv(o))return o},CR(Xe,null,t)}:Xe,LR=function(e,r,t){var n=So(t,r-1),a=So(t,r+1);return Vn(rd,e)&&!Vn(td,a)||Vn(td,e)&&!Vn(rd,n)?"\\u"+MR(AR(e,0),16):e},ld=function(e){if(Yn(e))return e;if(Xv(e)){for(var r=e.length,t=[],n=0;n<r;n++){var a=e[n];typeof a=="string"?wo(t,a):(typeof a=="number"||ed(a)==="Number"||ed(a)==="String")&&wo(t,IR(a))}var o=t.length,u=!0;return function(s,c){if(u)return u=!1,c;if(Xv(this))return c;for(var l=0;l<o;l++)if(t[l]===s)return c}}};Xe&&OR({target:"JSON",stat:!0,arity:3,forced:cd||ad||!qo},{stringify:function(r,t,n){var a=ld(t),o=[],u=$R(r,function(d,h){var m=Yn(a)?od(a,this,sd(d),h):h;return!qo&&ER(m)?To+(wo(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(ad&&(u=NR(u,jR,LR)),qo))return u;for(var s="",c=u.length,l=0;l<c;l++){var f=So(u,l);if(f==='"'){var p=PR(u,++l).end-1,v=xo(u,l,p);s+=xo(v,0,nd)===To?o[xo(v,nd)]:'"'+v+'"',l=p}else s+=f}return s}})});var vd=i(()=>{"use strict";var FR=x(),DR=ur(),BR=P(),pd=Dn(),GR=re(),UR=!DR||BR(function(){pd.f(1)});FR({target:"Object",stat:!0,forced:UR},{getOwnPropertySymbols:function(r){var t=pd.f;return t?t(GR(r)):[]}})});var dd=i(()=>{"use strict";$v();Dv();Gv();fd();vd()});var Oo=i(()=>{"use strict";var HR=M();HR("asyncDispose")});var Co=i(()=>{"use strict";var WR=M();WR("asyncIterator")});var md=i(()=>{});var Eo=i(()=>{"use strict";var KR=M();KR("dispose")});var hd=i(()=>{"use strict";var zR=M();zR("hasInstance")});var yd=i(()=>{"use strict";var VR=M();VR("isConcatSpreadable")});var Io=i(()=>{"use strict";var YR=M();YR("iterator")});var gd=i(()=>{"use strict";var JR=M();JR("match")});var bd=i(()=>{"use strict";var QR=M();QR("matchAll")});var qd=i(()=>{"use strict";var XR=M();XR("replace")});var xd=i(()=>{"use strict";var ZR=M();ZR("search")});var Sd=i(()=>{"use strict";var eA=M();eA("species")});var wd=i(()=>{"use strict";var rA=M();rA("split")});var ko=i(()=>{"use strict";var tA=M(),nA=to();tA("toPrimitive");nA()});var Td=i(()=>{"use strict";var aA=W(),iA=M(),oA=Ne();iA("toStringTag");oA(aA("Symbol"),"Symbol")});var Od=i(()=>{"use strict";var uA=M();uA("unscopables")});var Cd=i(()=>{"use strict";var sA=_(),cA=Ne();cA(sA.JSON,"JSON",!0)});var Ed=i(()=>{});var Id=i(()=>{});var Pd=i((Q8,kd)=>{"use strict";eo();It();dd();Oo();Co();md();Eo();hd();yd();Io();gd();bd();qd();xd();Sd();wd();ko();Td();Od();Cd();Ed();Id();var lA=V();kd.exports=lA.Symbol});var Po=i((X8,_d)=>{"use strict";_d.exports=function(){}});var hr=i((Z8,jd)=>{"use strict";var fA=Pe(),_o=Po(),Rd=fr(),Nd=Ye(),pA=te().f,vA=Mn(),Jn=jn(),dA=Z(),mA=H(),Md="Array Iterator",hA=Nd.set,yA=Nd.getterFor(Md);jd.exports=vA(Array,"Array",function(e,r){hA(this,{type:Md,target:fA(e),index:0,kind:r})},function(){var e=yA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,Jn(void 0,!0);switch(e.kind){case"keys":return Jn(t,!1);case"values":return Jn(r[t],!1)}return Jn([t,r[t]],!1)},"values");var Ad=Rd.Arguments=Rd.Array;_o("keys");_o("values");_o("entries");if(!dA&&mA&&Ad.name!=="values")try{pA(Ad,"name",{value:"values"})}catch{}});var Ld=i((eH,$d)=>{"use strict";$d.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var yr=i(()=>{"use strict";hr();var gA=Ld(),bA=_(),qA=Ne(),Fd=fr();for(Qn in gA)qA(bA[Qn],Qn),Fd[Qn]=Fd.Array;var Qn});var Bd=i((nH,Dd)=>{"use strict";var xA=Pd();yr();Dd.exports=xA});var Hd=i(()=>{"use strict";var SA=R(),wA=te().f,Gd=SA("metadata"),Ud=Function.prototype;Ud[Gd]===void 0&&wA(Ud,Gd,{value:null})});var Wd=i(()=>{"use strict";Oo()});var Kd=i(()=>{"use strict";Eo()});var zd=i(()=>{"use strict";var TA=M();TA("metadata")});var Yd=i((pH,Vd)=>{"use strict";var OA=Bd();Hd();Wd();Kd();zd();Vd.exports=OA});var Ao=i((vH,Jd)=>{"use strict";var CA=W(),EA=A(),Ro=CA("Symbol"),IA=Ro.keyFor,kA=EA(Ro.prototype.valueOf);Jd.exports=Ro.isRegisteredSymbol||function(r){try{return IA(kA(r))!==void 0}catch{return!1}}});var Qd=i(()=>{"use strict";var PA=x(),_A=Ao();PA({target:"Symbol",stat:!0},{isRegisteredSymbol:_A})});var jo=i((hH,nm)=>{"use strict";var RA=sr(),rm=W(),AA=A(),NA=jr(),MA=R(),Zn=rm("Symbol"),Xd=Zn.isWellKnownSymbol,tm=rm("Object","getOwnPropertyNames"),jA=AA(Zn.prototype.valueOf),Zd=RA("wks");for(Xn=0,No=tm(Zn),em=No.length;Xn<em;Xn++)try{Mo=No[Xn],NA(Zn[Mo])&&MA(Mo)}catch{}var Mo,Xn,No,em;nm.exports=function(r){if(Xd&&Xd(r))return!0;try{for(var t=jA(r),n=0,a=tm(Zd),o=a.length;n<o;n++)if(Zd[a[n]]==t)return!0}catch{}return!1}});var am=i(()=>{"use strict";var $A=x(),LA=jo();$A({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:LA})});var im=i(()=>{"use strict";var FA=M();FA("customMatcher")});var om=i(()=>{"use strict";var DA=M();DA("observable")});var um=i(()=>{"use strict";var BA=x(),GA=Ao();BA({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:GA})});var sm=i(()=>{"use strict";var UA=x(),HA=jo();UA({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:HA})});var cm=i(()=>{"use strict";var WA=M();WA("matcher")});var lm=i(()=>{"use strict";var KA=M();KA("metadataKey")});var fm=i(()=>{"use strict";var zA=M();zA("patternMatch")});var pm=i(()=>{"use strict";var VA=M();VA("replaceAll")});var dm=i((MH,vm)=>{"use strict";var YA=Yd();Qd();am();im();om();um();sm();cm();lm();fm();pm();vm.exports=YA});var Te=i((jH,mm)=>{"use strict";mm.exports=dm()});var ea=i(($H,hm)=>{hm.exports=Te()});var gm=i((LH,ym)=>{"use strict";hr();pr();var JA=Ct();ym.exports=JA});var qm=i((FH,bm)=>{"use strict";var QA=gm();yr();bm.exports=QA});var Sm=i((DH,xm)=>{"use strict";var XA=qm();xm.exports=XA});var Tm=i((BH,wm)=>{"use strict";var ZA=Sm();wm.exports=ZA});var $o=i((GH,Om)=>{"use strict";Om.exports=Tm()});var ra=i((UH,Cm)=>{Cm.exports=$o()});var Im=i((HH,Em)=>{"use strict";hr();pr();var e2=$n();Em.exports=e2});var Pm=i((WH,km)=>{"use strict";var r2=Im();yr();km.exports=r2});var Rm=i((KH,_m)=>{"use strict";var t2=Pm();_m.exports=t2});var Nm=i((zH,Am)=>{"use strict";var n2=Rm();Am.exports=n2});var jm=i((VH,Mm)=>{"use strict";Mm.exports=Nm()});var ta=i((YH,$m)=>{$m.exports=jm()});var Fm=i((JH,Lm)=>{"use strict";var a2=W(),i2=A(),o2=kt(),u2=Dn(),s2=X(),c2=i2([].concat);Lm.exports=a2("Reflect","ownKeys")||function(r){var t=o2.f(s2(r)),n=u2.f;return n?c2(t,n(r)):t}});var Gm=i((QH,Bm)=>{"use strict";var Dm=K(),l2=Fm(),f2=vt(),p2=te();Bm.exports=function(e,r,t){for(var n=l2(r),a=p2.f,o=f2.f,u=0;u<n.length;u++){var s=n[u];!Dm(e,s)&&!(t&&Dm(t,s))&&a(e,s,o(r,s))}}});var Hm=i((XH,Um)=>{"use strict";var v2=$(),d2=we();Um.exports=function(e,r){v2(r)&&"cause"in r&&d2(e,"cause",r.cause)}});var Vm=i((ZH,zm)=>{"use strict";var m2=A(),Wm=Error,h2=m2("".replace),y2=function(e){return String(new Wm(e).stack)}("zxcasd"),Km=/\n\s*at [^:]*:[^\n]*/,g2=Km.test(y2);zm.exports=function(e,r){if(g2&&typeof e=="string"&&!Wm.prepareStackTrace)for(;r--;)e=h2(e,Km,"");return e}});var Jm=i((eW,Ym)=>{"use strict";var b2=P(),q2=Ke();Ym.exports=!b2(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",q2(1,7)),e.stack!==7):!0})});var Zm=i((rW,Xm)=>{"use strict";var x2=we(),S2=Vm(),w2=Jm(),Qm=Error.captureStackTrace;Xm.exports=function(e,r,t,n){w2&&(Qm?Qm(e,r):x2(e,"stack",S2(t,n)))}});var ve=i((tW,nh)=>{"use strict";var T2=Y(),O2=B(),C2=X(),E2=ze(),I2=Ji(),k2=fe(),eh=U(),P2=$n(),_2=Ct(),rh=Yi(),R2=TypeError,na=function(e,r){this.stopped=e,this.result=r},th=na.prototype;nh.exports=function(e,r,t){var n=t&&t.that,a=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),s=!!(t&&t.INTERRUPTED),c=T2(r,n),l,f,p,v,d,h,m,y=function(q){return l&&rh(l,"normal"),new na(!0,q)},b=function(q){return a?(C2(q),s?c(q[0],q[1],y):c(q[0],q[1])):s?c(q,y):c(q)};if(o)l=e.iterator;else if(u)l=e;else{if(f=_2(e),!f)throw new R2(E2(e)+" is not iterable");if(I2(f)){for(p=0,v=k2(e);v>p;p++)if(d=b(e[p]),d&&eh(th,d))return d;return new na(!1)}l=P2(e,f)}for(h=o?e.next:l.next;!(m=O2(h,l)).done;){try{d=b(m.value)}catch(q){rh(l,"throw",q)}if(typeof d=="object"&&d&&eh(th,d))return d}return new na(!1)}});var ih=i((nW,ah)=>{"use strict";var A2=Ve();ah.exports=function(e,r){return e===void 0?arguments.length<2?"":r:A2(e)}});var uh=i(()=>{"use strict";var N2=x(),M2=U(),j2=St(),aa=wt(),$2=Gm(),oh=Je(),Lo=we(),Fo=Ke(),L2=Hm(),F2=Zm(),D2=ve(),B2=ih(),G2=R(),U2=G2("toStringTag"),ia=Error,H2=[].push,Yr=function(r,t){var n=M2(Do,this),a;aa?a=aa(new ia,n?j2(this):Do):(a=n?this:oh(Do),Lo(a,U2,"Error")),t!==void 0&&Lo(a,"message",B2(t)),F2(a,Yr,a.stack,1),arguments.length>2&&L2(a,arguments[2]);var o=[];return D2(r,H2,{that:o}),Lo(a,"errors",o),a};aa?aa(Yr,ia):$2(Yr,ia,{name:!0});var Do=Yr.prototype=oh(ia.prototype,{constructor:Fo(1,Yr),message:Fo(1,""),name:Fo(1,"AggregateError")});N2({global:!0,constructor:!0,arity:2},{AggregateError:Yr})});var Bo=i(()=>{"use strict";uh()});var Go=i((sW,sh)=>{"use strict";var Mt=_(),W2=Nr(),K2=Se(),oa=function(e){return W2.slice(0,e.length)===e};sh.exports=function(){return oa("Bun/")?"BUN":oa("Cloudflare-Workers")?"CLOUDFLARE":oa("Deno/")?"DENO":oa("Node.js/")?"NODE":Mt.Bun&&typeof Bun.version=="string"?"BUN":Mt.Deno&&typeof Deno.version=="object"?"DENO":K2(Mt.process)==="process"?"NODE":Mt.window&&Mt.document?"BROWSER":"REST"}()});var jt=i((cW,ch)=>{"use strict";var z2=Go();ch.exports=z2==="NODE"});var Uo=i((lW,fh)=>{"use strict";var V2=W(),Y2=Bn(),J2=R(),Q2=H(),lh=J2("species");fh.exports=function(e){var r=V2(e);Q2&&r&&!r[lh]&&Y2(r,lh,{configurable:!0,get:function(){return this}})}});var ua=i((fW,ph)=>{"use strict";var X2=U(),Z2=TypeError;ph.exports=function(e,r){if(X2(r,e))return e;throw new Z2("Incorrect invocation")}});var Ho=i((pW,vh)=>{"use strict";var eN=gt(),rN=ze(),tN=TypeError;vh.exports=function(e){if(eN(e))return e;throw new tN(rN(e)+" is not a constructor")}});var Wo=i((vW,mh)=>{"use strict";var dh=X(),nN=Ho(),aN=ir(),iN=R(),oN=iN("species");mh.exports=function(e,r){var t=dh(e).constructor,n;return t===void 0||aN(n=dh(t)[oN])?r:nN(n)}});var yh=i((dW,hh)=>{"use strict";var uN=TypeError;hh.exports=function(e,r){if(e<r)throw new uN("Not enough arguments");return e}});var Ko=i((mW,gh)=>{"use strict";var sN=Nr();gh.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(sN)});var ru=i((hW,Eh)=>{"use strict";var se=_(),cN=Ar(),lN=Y(),bh=N(),fN=K(),Ch=P(),qh=Li(),pN=cr(),xh=Sn(),vN=yh(),dN=Ko(),mN=jt(),Xo=se.setImmediate,Zo=se.clearImmediate,hN=se.process,zo=se.Dispatch,yN=se.Function,Sh=se.MessageChannel,gN=se.String,Vo=0,$t={},wh="onreadystatechange",Lt,gr,Yo,Jo;Ch(function(){Lt=se.location});var eu=function(e){if(fN($t,e)){var r=$t[e];delete $t[e],r()}},Qo=function(e){return function(){eu(e)}},Th=function(e){eu(e.data)},Oh=function(e){se.postMessage(gN(e),Lt.protocol+"//"+Lt.host)};(!Xo||!Zo)&&(Xo=function(r){vN(arguments.length,1);var t=bh(r)?r:yN(r),n=pN(arguments,1);return $t[++Vo]=function(){cN(t,void 0,n)},gr(Vo),Vo},Zo=function(r){delete $t[r]},mN?gr=function(e){hN.nextTick(Qo(e))}:zo&&zo.now?gr=function(e){zo.now(Qo(e))}:Sh&&!dN?(Yo=new Sh,Jo=Yo.port2,Yo.port1.onmessage=Th,gr=lN(Jo.postMessage,Jo)):se.addEventListener&&bh(se.postMessage)&&!se.importScripts&&Lt&&Lt.protocol!=="file:"&&!Ch(Oh)?(gr=Oh,se.addEventListener("message",Th,!1)):wh in xh("script")?gr=function(e){qh.appendChild(xh("script"))[wh]=function(){qh.removeChild(this),eu(e)}}:gr=function(e){setTimeout(Qo(e),0)});Eh.exports={set:Xo,clear:Zo}});var Ph=i((yW,kh)=>{"use strict";var Ih=_(),bN=H(),qN=Object.getOwnPropertyDescriptor;kh.exports=function(e){if(!bN)return Ih[e];var r=qN(Ih,e);return r&&r.value}});var tu=i((gW,Rh)=>{"use strict";var _h=function(){this.head=null,this.tail=null};_h.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Rh.exports=_h});var Nh=i((bW,Ah)=>{"use strict";var xN=Nr();Ah.exports=/ipad|iphone|ipod/i.test(xN)&&typeof Pebble<"u"});var jh=i((qW,Mh)=>{"use strict";var SN=Nr();Mh.exports=/web0s(?!.*chrome)/i.test(SN)});var Uh=i((xW,Gh)=>{"use strict";var Qr=_(),wN=Ph(),$h=Y(),nu=ru().set,TN=tu(),ON=Ko(),CN=Nh(),EN=jh(),au=jt(),Lh=Qr.MutationObserver||Qr.WebKitMutationObserver,Fh=Qr.document,Dh=Qr.process,sa=Qr.Promise,uu=wN("queueMicrotask"),Jr,iu,ou,ca,Bh;uu||(Ft=new TN,Dt=function(){var e,r;for(au&&(e=Dh.domain)&&e.exit();r=Ft.get();)try{r()}catch(t){throw Ft.head&&Jr(),t}e&&e.enter()},!ON&&!au&&!EN&&Lh&&Fh?(iu=!0,ou=Fh.createTextNode(""),new Lh(Dt).observe(ou,{characterData:!0}),Jr=function(){ou.data=iu=!iu}):!CN&&sa&&sa.resolve?(ca=sa.resolve(void 0),ca.constructor=sa,Bh=$h(ca.then,ca),Jr=function(){Bh(Dt)}):au?Jr=function(){Dh.nextTick(Dt)}:(nu=$h(nu,Qr),Jr=function(){nu(Dt)}),uu=function(e){Ft.head||Jr(),Ft.add(e)});var Ft,Dt;Gh.exports=uu});var Wh=i((SW,Hh)=>{"use strict";Hh.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var br=i((wW,Kh)=>{"use strict";Kh.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var qr=i((TW,zh)=>{"use strict";var IN=_();zh.exports=IN.Promise});var Xr=i((OW,Qh)=>{"use strict";var kN=_(),Bt=qr(),PN=N(),_N=di(),RN=xi(),AN=R(),Vh=Go(),NN=Z(),su=Mr(),Yh=Bt&&Bt.prototype,MN=AN("species"),cu=!1,Jh=PN(kN.PromiseRejectionEvent),jN=_N("Promise",function(){var e=RN(Bt),r=e!==String(Bt);if(!r&&su===66||NN&&!(Yh.catch&&Yh.finally))return!0;if(!su||su<51||!/native code/.test(e)){var t=new Bt(function(o){o(1)}),n=function(o){o(function(){},function(){})},a=t.constructor={};if(a[MN]=n,cu=t.then(function(){})instanceof n,!cu)return!0}return!r&&(Vh==="BROWSER"||Vh==="DENO")&&!Jh});Qh.exports={CONSTRUCTOR:jN,REJECTION_EVENT:Jh,SUBCLASSING:cu}});var Oe=i((CW,Zh)=>{"use strict";var Xh=F(),$N=TypeError,LN=function(e){var r,t;this.promise=new e(function(n,a){if(r!==void 0||t!==void 0)throw new $N("Bad Promise constructor");r=n,t=a}),this.resolve=Xh(r),this.reject=Xh(t)};Zh.exports.f=function(e){return new LN(e)}});var by=i(()=>{"use strict";var FN=x(),DN=Z(),va=jt(),Ze=_(),BN=V(),tt=B(),ey=Re(),ry=wt(),GN=Ne(),UN=Uo(),HN=F(),pa=N(),WN=$(),KN=ua(),zN=Wo(),oy=ru().set,du=Uh(),VN=Wh(),YN=br(),JN=tu(),uy=Ye(),da=qr(),mu=Xr(),sy=Oe(),ma="Promise",cy=mu.CONSTRUCTOR,QN=mu.REJECTION_EVENT,XN=mu.SUBCLASSING,lu=uy.getterFor(ma),ZN=uy.set,Zr=da&&da.prototype,xr=da,la=Zr,ly=Ze.TypeError,fu=Ze.document,hu=Ze.process,pu=sy.f,eM=pu,rM=!!(fu&&fu.createEvent&&Ze.dispatchEvent),fy="unhandledrejection",tM="rejectionhandled",ty=0,py=1,nM=2,yu=1,vy=2,fa,ny,dy,ay,my=function(e){var r;return WN(e)&&pa(r=e.then)?r:!1},hy=function(e,r){var t=r.value,n=r.state===py,a=n?e.ok:e.fail,o=e.resolve,u=e.reject,s=e.domain,c,l,f;try{a?(n||(r.rejection===vy&&iM(r),r.rejection=yu),a===!0?c=t:(s&&s.enter(),c=a(t),s&&(s.exit(),f=!0)),c===e.promise?u(new ly("Promise-chain cycle")):(l=my(c))?tt(l,c,o,u):o(c)):u(t)}catch(p){s&&!f&&s.exit(),u(p)}},yy=function(e,r){e.notified||(e.notified=!0,du(function(){for(var t=e.reactions,n;n=t.get();)hy(n,e);e.notified=!1,r&&!e.rejection&&aM(e)}))},gy=function(e,r,t){var n,a;rM?(n=fu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),Ze.dispatchEvent(n)):n={promise:r,reason:t},!QN&&(a=Ze["on"+e])?a(n):e===fy&&VN("Unhandled promise rejection",t)},aM=function(e){tt(oy,Ze,function(){var r=e.facade,t=e.value,n=iy(e),a;if(n&&(a=YN(function(){va?hu.emit("unhandledRejection",t,r):gy(fy,r,t)}),e.rejection=va||iy(e)?vy:yu,a.error))throw a.value})},iy=function(e){return e.rejection!==yu&&!e.parent},iM=function(e){tt(oy,Ze,function(){var r=e.facade;va?hu.emit("rejectionHandled",r):gy(tM,r,e.value)})},et=function(e,r,t){return function(n){e(r,n,t)}},rt=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=nM,yy(e,!0))},vu=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new ly("Promise can't be resolved itself");var n=my(r);n?du(function(){var a={done:!1};try{tt(n,r,et(vu,a,e),et(rt,a,e))}catch(o){rt(a,o,e)}}):(e.value=r,e.state=py,yy(e,!1))}catch(a){rt({done:!1},a,e)}}};if(cy&&(xr=function(r){KN(this,la),HN(r),tt(fa,this);var t=lu(this);try{r(et(vu,t),et(rt,t))}catch(n){rt(t,n)}},la=xr.prototype,fa=function(r){ZN(this,{type:ma,done:!1,notified:!1,parent:!1,reactions:new JN,rejection:!1,state:ty,value:null})},fa.prototype=ey(la,"then",function(r,t){var n=lu(this),a=pu(zN(this,xr));return n.parent=!0,a.ok=pa(r)?r:!0,a.fail=pa(t)&&t,a.domain=va?hu.domain:void 0,n.state===ty?n.reactions.add(a):du(function(){hy(a,n)}),a.promise}),ny=function(){var e=new fa,r=lu(e);this.promise=e,this.resolve=et(vu,r),this.reject=et(rt,r)},sy.f=pu=function(e){return e===xr||e===dy?new ny(e):eM(e)},!DN&&pa(da)&&Zr!==Object.prototype)){ay=Zr.then,XN||ey(Zr,"then",function(r,t){var n=this;return new xr(function(a,o){tt(ay,n,a,o)}).then(r,t)},{unsafe:!0});try{delete Zr.constructor}catch{}ry&&ry(Zr,la)}FN({global:!0,constructor:!0,wrap:!0,forced:cy},{Promise:xr});dy=BN.Promise;GN(xr,ma,!1,!0);UN(ma)});var Gt=i((kW,qy)=>{"use strict";var oM=qr(),uM=Xi(),sM=Xr().CONSTRUCTOR;qy.exports=sM||!uM(function(e){oM.all(e).then(void 0,function(){})})});var xy=i(()=>{"use strict";var cM=x(),lM=B(),fM=F(),pM=Oe(),vM=br(),dM=ve(),mM=Gt();cM({target:"Promise",stat:!0,forced:mM},{all:function(r){var t=this,n=pM.f(t),a=n.resolve,o=n.reject,u=vM(function(){var s=fM(t.resolve),c=[],l=0,f=1;dM(r,function(p){var v=l++,d=!1;f++,lM(s,t,p).then(function(h){d||(d=!0,c[v]=h,--f||a(c))},o)}),--f||a(c)});return u.error&&o(u.value),n.promise}})});var wy=i(()=>{"use strict";var hM=x(),yM=Z(),gM=Xr().CONSTRUCTOR,bu=qr(),bM=W(),qM=N(),xM=Re(),Sy=bu&&bu.prototype;hM({target:"Promise",proto:!0,forced:gM,real:!0},{catch:function(e){return this.then(void 0,e)}});!yM&&qM(bu)&&(gu=bM("Promise").prototype.catch,Sy.catch!==gu&&xM(Sy,"catch",gu,{unsafe:!0}));var gu});var Ty=i(()=>{"use strict";var SM=x(),wM=B(),TM=F(),OM=Oe(),CM=br(),EM=ve(),IM=Gt();SM({target:"Promise",stat:!0,forced:IM},{race:function(r){var t=this,n=OM.f(t),a=n.reject,o=CM(function(){var u=TM(t.resolve);EM(r,function(s){wM(u,t,s).then(n.resolve,a)})});return o.error&&a(o.value),n.promise}})});var Oy=i(()=>{"use strict";var kM=x(),PM=Oe(),_M=Xr().CONSTRUCTOR;kM({target:"Promise",stat:!0,forced:_M},{reject:function(r){var t=PM.f(this),n=t.reject;return n(r),t.promise}})});var qu=i((LW,Cy)=>{"use strict";var RM=X(),AM=$(),NM=Oe();Cy.exports=function(e,r){if(RM(e),AM(r)&&r.constructor===e)return r;var t=NM.f(e),n=t.resolve;return n(r),t.promise}});var ky=i(()=>{"use strict";var MM=x(),jM=W(),Ey=Z(),$M=qr(),Iy=Xr().CONSTRUCTOR,LM=qu(),FM=jM("Promise"),DM=Ey&&!Iy;MM({target:"Promise",stat:!0,forced:Ey||Iy},{resolve:function(r){return LM(DM&&this===FM?$M:this,r)}})});var Py=i(()=>{"use strict";by();xy();wy();Ty();Oy();ky()});var xu=i(()=>{"use strict";var BM=x(),GM=B(),UM=F(),HM=Oe(),WM=br(),KM=ve(),zM=Gt();BM({target:"Promise",stat:!0,forced:zM},{allSettled:function(r){var t=this,n=HM.f(t),a=n.resolve,o=n.reject,u=WM(function(){var s=UM(t.resolve),c=[],l=0,f=1;KM(r,function(p){var v=l++,d=!1;f++,GM(s,t,p).then(function(h){d||(d=!0,c[v]={status:"fulfilled",value:h},--f||a(c))},function(h){d||(d=!0,c[v]={status:"rejected",reason:h},--f||a(c))})}),--f||a(c)});return u.error&&o(u.value),n.promise}})});var Su=i(()=>{"use strict";var VM=x(),YM=B(),JM=F(),QM=W(),XM=Oe(),ZM=br(),ej=ve(),rj=Gt(),_y="No one promise resolved";VM({target:"Promise",stat:!0,forced:rj},{any:function(r){var t=this,n=QM("AggregateError"),a=XM.f(t),o=a.resolve,u=a.reject,s=ZM(function(){var c=JM(t.resolve),l=[],f=0,p=1,v=!1;ej(r,function(d){var h=f++,m=!1;p++,YM(c,t,d).then(function(y){m||v||(v=!0,o(y))},function(y){m||v||(m=!0,l[h]=y,--p||u(new n(l,_y)))})}),--p||u(new n(l,_y))});return s.error&&u(s.value),a.promise}})});var Tu=i(()=>{"use strict";var tj=x(),nj=_(),aj=Ar(),ij=cr(),oj=Oe(),uj=F(),Ay=br(),wu=nj.Promise,Ry=!1,sj=!wu||!wu.try||Ay(function(){wu.try(function(e){Ry=e===8},8)}).error||!Ry;tj({target:"Promise",stat:!0,forced:sj},{try:function(e){var r=arguments.length>1?ij(arguments,1):[],t=oj.f(this),n=Ay(function(){return aj(uj(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var Ou=i(()=>{"use strict";var cj=x(),lj=Oe();cj({target:"Promise",stat:!0},{withResolvers:function(){var r=lj.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var $y=i(()=>{"use strict";var fj=x(),pj=Z(),ha=qr(),vj=P(),My=W(),jy=N(),dj=Wo(),Ny=qu(),mj=Re(),Eu=ha&&ha.prototype,hj=!!ha&&vj(function(){Eu.finally.call({then:function(){}},function(){})});fj({target:"Promise",proto:!0,real:!0,forced:hj},{finally:function(e){var r=dj(this,My("Promise")),t=jy(e);return this.then(t?function(n){return Ny(r,e()).then(function(){return n})}:e,t?function(n){return Ny(r,e()).then(function(){throw n})}:e)}});!pj&&jy(ha)&&(Cu=My("Promise").prototype.finally,Eu.finally!==Cu&&mj(Eu,"finally",Cu,{unsafe:!0}));var Cu});var Fy=i((ZW,Ly)=>{"use strict";Bo();hr();It();Py();xu();Su();Tu();Ou();$y();pr();var yj=V();Ly.exports=yj.Promise});var By=i((eK,Dy)=>{"use strict";var gj=Fy();yr();Dy.exports=gj});var Gy=i(()=>{"use strict";Tu()});var Uy=i(()=>{"use strict";Ou()});var Wy=i((iK,Hy)=>{"use strict";var bj=By();Gy();Uy();Hy.exports=bj});var Ky=i(()=>{"use strict";Bo()});var zy=i(()=>{"use strict";xu()});var Vy=i(()=>{"use strict";Su()});var Jy=i((pK,Yy)=>{"use strict";var qj=Wy();Ky();zy();Vy();Yy.exports=qj});var nt=i((vK,Qy)=>{"use strict";Qy.exports=Jy()});var eg=i((gK,Zy)=>{"use strict";Co();var xj=Wr();Zy.exports=xj.f("asyncIterator")});var tg=i((bK,rg)=>{"use strict";var Sj=eg();rg.exports=Sj});var ag=i((qK,ng)=>{"use strict";var wj=tg();ng.exports=wj});var og=i((xK,ig)=>{"use strict";var Tj=ag();ig.exports=Tj});var ya=i((SK,ug)=>{"use strict";ug.exports=og()});var fg=i(()=>{"use strict";var Oj=x(),Cj=P(),Ej=re(),lg=St(),Ij=Gi(),kj=Cj(function(){lg(1)});Oj({target:"Object",stat:!0,forced:kj,sham:!Ij},{getPrototypeOf:function(r){return lg(Ej(r))}})});var vg=i((EK,pg)=>{"use strict";fg();var Pj=V();pg.exports=Pj.Object.getPrototypeOf});var mg=i((IK,dg)=>{"use strict";var _j=vg();dg.exports=_j});var yg=i((kK,hg)=>{"use strict";var Rj=mg();hg.exports=Rj});var bg=i((PK,gg)=>{"use strict";var Aj=yg();gg.exports=Aj});var ga=i((_K,qg)=>{"use strict";qg.exports=bg()});var Sg=i(()=>{"use strict";var Nj=x(),Mj=A(),jj=_e(),$j=Mj([].reverse),xg=[1,2];Nj({target:"Array",proto:!0,forced:String(xg)===String(xg.reverse())},{reverse:function(){return jj(this)&&(this.length=this.length),$j(this)}})});var Tg=i((NK,wg)=>{"use strict";Sg();var Lj=ue();wg.exports=Lj("Array","reverse")});var Cg=i((MK,Og)=>{"use strict";var Fj=U(),Dj=Tg(),Pu=Array.prototype;Og.exports=function(e){var r=e.reverse;return e===Pu||Fj(Pu,e)&&r===Pu.reverse?Dj:r}});var Ig=i((jK,Eg)=>{"use strict";var Bj=Cg();Eg.exports=Bj});var Pg=i(($K,kg)=>{"use strict";var Gj=Ig();kg.exports=Gj});var Rg=i((LK,_g)=>{"use strict";var Uj=Pg();_g.exports=Uj});var Ng=i((FK,Ag)=>{"use strict";Ag.exports=Rg()});var _u=i((DK,Wt)=>{function Hj(e,r){this.v=e,this.k=r}Wt.exports=Hj,Wt.exports.__esModule=!0,Wt.exports.default=Wt.exports});var Mg=i(()=>{"use strict";var Wj=x(),Kj=H(),zj=Je();Wj({target:"Object",stat:!0,sham:!Kj},{create:zj})});var $g=i((UK,jg)=>{"use strict";Mg();var Vj=V(),Yj=Vj.Object;jg.exports=function(r,t){return Yj.create(r,t)}});var Fg=i((HK,Lg)=>{"use strict";var Jj=$g();Lg.exports=Jj});var Bg=i((WK,Dg)=>{"use strict";var Qj=Fg();Dg.exports=Qj});var Ug=i((KK,Gg)=>{"use strict";var Xj=Bg();Gg.exports=Xj});var ba=i((zK,Hg)=>{"use strict";Hg.exports=Ug()});var Au=i((VK,Vg)=>{"use strict";var Kg=A(),Zj=F(),e$=$(),r$=K(),Wg=cr(),t$=Rr(),zg=Function,n$=Kg([].concat),a$=Kg([].join),Ru={},i$=function(e,r,t){if(!r$(Ru,r)){for(var n=[],a=0;a<r;a++)n[a]="a["+a+"]";Ru[r]=zg("C,a","return new C("+a$(n,",")+")")}return Ru[r](e,t)};Vg.exports=t$?zg.bind:function(r){var t=Zj(this),n=t.prototype,a=Wg(arguments,1),o=function(){var s=n$(a,Wg(arguments));return this instanceof o?i$(t,s.length,s):t.apply(r,s)};return e$(n)&&(o.prototype=n),o}});var Jg=i(()=>{"use strict";var o$=x(),Yg=Au();o$({target:"Function",proto:!0,forced:Function.bind!==Yg},{bind:Yg})});var Xg=i((QK,Qg)=>{"use strict";Jg();var u$=ue();Qg.exports=u$("Function","bind")});var eb=i((XK,Zg)=>{"use strict";var s$=U(),c$=Xg(),Nu=Function.prototype;Zg.exports=function(e){var r=e.bind;return e===Nu||s$(Nu,e)&&r===Nu.bind?c$:r}});var tb=i((ZK,rb)=>{"use strict";var l$=eb();rb.exports=l$});var ab=i((ez,nb)=>{"use strict";var f$=tb();nb.exports=f$});var ob=i((rz,ib)=>{"use strict";var p$=ab();ib.exports=p$});var Kt=i((tz,ub)=>{"use strict";ub.exports=ob()});var sb=i(()=>{"use strict";var v$=x(),d$=wt();v$({target:"Object",stat:!0},{setPrototypeOf:d$})});var lb=i((iz,cb)=>{"use strict";sb();var m$=V();cb.exports=m$.Object.setPrototypeOf});var pb=i((oz,fb)=>{"use strict";var h$=lb();fb.exports=h$});var db=i((uz,vb)=>{"use strict";var y$=pb();vb.exports=y$});var hb=i((sz,mb)=>{"use strict";var g$=db();mb.exports=g$});var qa=i((cz,yb)=>{"use strict";yb.exports=hb()});var bb=i(()=>{"use strict";var b$=x(),q$=H(),gb=te().f;b$({target:"Object",stat:!0,forced:Object.defineProperty!==gb,sham:!q$},{defineProperty:gb})});var Sb=i((pz,xb)=>{"use strict";bb();var x$=V(),qb=x$.Object,S$=xb.exports=function(r,t,n){return qb.defineProperty(r,t,n)};qb.defineProperty.sham&&(S$.sham=!0)});var Tb=i((vz,wb)=>{"use strict";var w$=Sb();wb.exports=w$});var Cb=i((dz,Ob)=>{"use strict";var T$=Tb();Ob.exports=T$});var Ib=i((mz,Eb)=>{"use strict";var O$=Cb();Eb.exports=O$});var zt=i((hz,kb)=>{"use strict";kb.exports=Ib()});var Mu=i((yz,je)=>{var C$=zt();function xa(e,r,t,n){var a=C$;try{a({},"",{})}catch{a=0}je.exports=xa=function(u,s,c,l){function f(p,v){xa(u,p,function(d){return this._invoke(p,v,d)})}s?a?a(u,s,{value:c,enumerable:!l,configurable:!l,writable:!l}):u[s]=c:(f("next",0),f("throw",1),f("return",2))},je.exports.__esModule=!0,je.exports.default=je.exports,xa(e,r,t,n)}je.exports=xa,je.exports.__esModule=!0,je.exports.default=je.exports});var $u=i((gz,$e)=>{var Pb=Te(),ju=ba(),E$=Kt(),I$=ga(),_b=qa(),Ee=Mu();function Rb(){var e,r,t=typeof Pb=="function"?Pb:{},n=t.iterator||"@@iterator",a=t.toStringTag||"@@toStringTag";function o(d,h,m,y){var b=h&&h.prototype instanceof s?h:s,q=ju(b.prototype);return Ee(q,"_invoke",function(I,E,S){var T,w,C,j=0,qe=S||[],k=!1,ee={p:0,n:0,v:e,a:xe,f:E$(xe).call(xe,e,4),d:function(L,de){return T=L,w=0,C=e,ee.n=de,u}};function xe(Q,L){for(w=Q,C=L,r=0;!k&&j&&!de&&r<qe.length;r++){var de,O=qe[r],Pr=ee.p,We=O[2];Q>3?(de=We===L)&&(C=O[(w=O[4])?5:(w=3,3)],O[4]=O[5]=e):O[0]<=Pr&&((de=Q<2&&Pr<O[1])?(w=0,ee.v=L,ee.n=O[1]):Pr<We&&(de=Q<3||O[0]>L||L>We)&&(O[4]=Q,O[5]=L,ee.n=We,w=0))}if(de||Q>1)return u;throw k=!0,L}return function(Q,L,de){if(j>1)throw TypeError("Generator is already running");for(k&&L===1&&xe(L,de),w=L,C=de;(r=w<2?e:C)||!k;){T||(w?w<3?(w>1&&(ee.n=-1),xe(w,C)):ee.n=C:ee.v=C);try{if(j=2,T){if(w||(Q="next"),r=T[Q]){if(!(r=r.call(T,C)))throw TypeError("iterator result is not an object");if(!r.done)return r;C=r.value,w<2&&(w=0)}else w===1&&(r=T.return)&&r.call(T),w<2&&(C=TypeError("The iterator does not provide a '"+Q+"' method"),w=1);T=e}else if((r=(k=ee.n<0)?C:I.call(E,ee))!==u)break}catch(O){T=e,w=1,C=O}finally{j=1}}return{value:r,done:k}}}(d,m,y),!0),q}var u={};function s(){}function c(){}function l(){}r=I$;var f=[][n]?r(r([][n]())):(Ee(r={},n,function(){return this}),r),p=l.prototype=s.prototype=ju(f);function v(d){return _b?_b(d,l):(d.__proto__=l,Ee(d,a,"GeneratorFunction")),d.prototype=ju(p),d}return c.prototype=l,Ee(p,"constructor",l),Ee(l,"constructor",c),c.displayName="GeneratorFunction",Ee(l,a,"GeneratorFunction"),Ee(p),Ee(p,a,"Generator"),Ee(p,n,function(){return this}),Ee(p,"toString",function(){return"[object Generator]"}),($e.exports=Rb=function(){return{w:o,m:v}},$e.exports.__esModule=!0,$e.exports.default=$e.exports)()}$e.exports=Rb,$e.exports.__esModule=!0,$e.exports.default=$e.exports});var Du=i((bz,Vt)=>{var k$=Te(),P$=ya(),_$=_u(),Lu=Mu();function Fu(e,r){function t(a,o,u,s){try{var c=e[a](o),l=c.value;return l instanceof _$?r.resolve(l.v).then(function(f){t("next",f,u,s)},function(f){t("throw",f,u,s)}):r.resolve(l).then(function(f){c.value=f,u(c)},function(f){return t("throw",f,u,s)})}catch(f){s(f)}}var n;this.next||(Lu(Fu.prototype),Lu(Fu.prototype,typeof k$=="function"&&P$||"@asyncIterator",function(){return this})),Lu(this,"_invoke",function(a,o,u){function s(){return new r(function(c,l){t(a,u,c,l)})}return n=n?n.then(s,s):s()},!0)}Vt.exports=Fu,Vt.exports.__esModule=!0,Vt.exports.default=Vt.exports});var Bu=i((qz,Yt)=>{var R$=nt(),A$=$u(),N$=Du();function M$(e,r,t,n,a){return new N$(A$().w(e,r,t,n),a||R$)}Yt.exports=M$,Yt.exports.__esModule=!0,Yt.exports.default=Yt.exports});var Ab=i((xz,Jt)=>{var j$=Bu();function $$(e,r,t,n,a){var o=j$(e,r,t,n,a);return o.next().then(function(u){return u.done?u.value:o.next()})}Jt.exports=$$,Jt.exports.__esModule=!0,Jt.exports.default=Jt.exports});var jb=i((Sz,Mb)=>{"use strict";var Nb=ze(),L$=TypeError;Mb.exports=function(e,r){if(!delete e[r])throw new L$("Cannot delete property "+Nb(r)+" of "+Nb(e))}});var $b=i(()=>{"use strict";var F$=x(),D$=re(),B$=fe(),G$=Gr(),U$=jb(),H$=Et(),W$=[].unshift(0)!==1,K$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},z$=W$||!K$();F$({target:"Array",proto:!0,arity:1,forced:z$},{unshift:function(r){var t=D$(this),n=B$(t),a=arguments.length;if(a){H$(n+a);for(var o=n;o--;){var u=o+a;o in t?t[u]=t[o]:U$(t,u)}for(var s=0;s<a;s++)t[s]=arguments[s]}return G$(t,n+a)}})});var Fb=i((Oz,Lb)=>{"use strict";$b();var V$=ue();Lb.exports=V$("Array","unshift")});var Bb=i((Cz,Db)=>{"use strict";var Y$=U(),J$=Fb(),Gu=Array.prototype;Db.exports=function(e){var r=e.unshift;return e===Gu||Y$(Gu,e)&&r===Gu.unshift?J$:r}});var Ub=i((Ez,Gb)=>{"use strict";var Q$=Bb();Gb.exports=Q$});var Wb=i((Iz,Hb)=>{"use strict";var X$=Ub();Hb.exports=X$});var zb=i((kz,Kb)=>{"use strict";var Z$=Wb();Kb.exports=Z$});var Yb=i((Pz,Vb)=>{"use strict";Vb.exports=zb()});var Jb=i((_z,Qt)=>{var eL=Yb();function rL(e){var r=Object(e),t=[];for(var n in r)eL(t).call(t,n);return function a(){for(;t.length;)if((n=t.pop())in r)return a.value=n,a.done=!1,a;return a.done=!0,a}}Qt.exports=rL,Qt.exports.__esModule=!0,Qt.exports.default=Qt.exports});var Xb=i((Rz,Qb)=>{"use strict";hr();It();pr();Io();var tL=Wr();Qb.exports=tL.f("iterator")});var eq=i((Az,Zb)=>{"use strict";var nL=Xb();yr();Zb.exports=nL});var tq=i((Nz,rq)=>{"use strict";var aL=eq();rq.exports=aL});var aq=i((Mz,nq)=>{"use strict";var iL=tq();nq.exports=iL});var Xt=i((jz,iq)=>{"use strict";iq.exports=aq()});var oq=i(($z,Le)=>{var Sa=Te(),oL=Xt();function Uu(e){"@babel/helpers - typeof";return Le.exports=Uu=typeof Sa=="function"&&typeof oL=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Sa=="function"&&r.constructor===Sa&&r!==Sa.prototype?"symbol":typeof r},Le.exports.__esModule=!0,Le.exports.default=Le.exports,Uu(e)}Le.exports=Uu,Le.exports.__esModule=!0,Le.exports.default=Le.exports});var uq=i((Lz,Zt)=>{var uL=oq().default,sL=Te(),cL=Xt();function lL(e){if(e!=null){var r=e[typeof sL=="function"&&cL||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(uL(e)+" is not iterable")}Zt.exports=lL,Zt.exports.__esModule=!0,Zt.exports.default=Zt.exports});var lq=i((Fz,Fe)=>{var sq=ga(),fL=Ng(),pL=_u(),vL=$u(),dL=Ab(),mL=Bu(),hL=Du(),yL=Jb(),cq=uq();function Hu(){"use strict";var e=vL(),r=e.m(Hu),t=(sq?sq(r):r.__proto__).constructor;function n(u){var s=typeof u=="function"&&u.constructor;return!!s&&(s===t||(s.displayName||s.name)==="GeneratorFunction")}var a={throw:1,return:2,break:3,continue:3};function o(u){var s,c;return function(l){s||(s={stop:function(){return c(l.a,2)},catch:function(){return l.v},abrupt:function(p,v){return c(l.a,a[p],v)},delegateYield:function(p,v,d){return s.resultName=v,c(l.d,cq(p),d)},finish:function(p){return c(l.f,p)}},c=function(p,v,d){l.p=s.prev,l.n=s.next;try{return p(v,d)}finally{s.next=l.n}}),s.resultName&&(s[s.resultName]=l.v,s.resultName=void 0),s.sent=l.v,s.next=l.n;try{return u.call(this,s)}finally{l.p=s.prev,l.n=s.next}}}return(Fe.exports=Hu=function(){return{wrap:function(c,l,f,p){return e.w(o(c),l,f,p&&fL(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(c,l){return new pL(c,l)},AsyncIterator:hL,async:function(c,l,f,p,v){return(n(l)?mL:dL)(o(c),l,f,p,v)},keys:yL,values:cq}},Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports)()}Fe.exports=Hu,Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports});var ce=i((Dz,fq)=>{var wa=lq()();fq.exports=wa;try{regeneratorRuntime=wa}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=wa:Function("r","regeneratorRuntime = r")(wa)}});var Wu=i((Oa,vq)=>{"use strict";Object.defineProperty(Oa,"__esModule",{value:!0});var Ta=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pq=function(){function e(r,t){var n=[],a=!0,o=!1,u=void 0;try{for(var s=r[Symbol.iterator](),c;!(a=(c=s.next()).done)&&(n.push(c.value),!(t&&n.length===t));a=!0);}catch(l){o=!0,u=l}finally{try{!a&&s.return&&s.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Oa.default=gL;function gL(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(a){return a.type==="tag"||a.type==="script"||a.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var a=this.attribs,o=Object.keys(a),u=o.reduce(function(s,c,l){return s[l]={name:c,value:a[c]},s},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var a=[];return rr(this.childTags,function(o){(o.name===n||n==="*")&&a.push(o)}),a}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var a=n.trim().replace(/\s+/g," ").split(" "),o=[];return rr([this],function(u){var s=u.attribs.class;s&&a.every(function(c){return s.indexOf(c)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var a=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=bL(n),u=o.shift(),s=o.length;return u(this).filter(function(c){for(var l=0;l<s;){if(c=o[l](c,a),!c)return!1;l+=1}return!0})}),t.contains||(t.contains=function(n){var a=!1;return rr([this],function(o,u){o===n&&(a=!0,u())}),a}),!0}function bL(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,a=r.split(":"),o=pq(a,2),u=o[0],s=o[1],c=null,l=null;if(function(){switch(!0){case/>/.test(u):l=function(S){return function(T){return T(S.parent)&&S.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");c=function(S){var T=S.attribs.class;return T&&h.every(function(w){return T.indexOf(w)>-1})},l=function(S,T){return n?S.getElementsByClassName(h.join(" ")):typeof S=="function"?S(c):en(S,T,c)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),y=pq(m,2),b=y[0],q=y[1];c=function(S){var T=Object.keys(S.attribs).indexOf(b)>-1;return!!(T&&(!q||S.attribs[b]===q))},l=function(S,T){if(n){var w=function(){var C=[];return rr([S],function(j){c(j)&&C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":Ta(w))==="object")return w.v}return typeof S=="function"?S(c):en(S,T,c)};break;case/^#/.test(u):var I=u.substr(1);c=function(S){return S.attribs.id===I},l=function(S,T){if(n){var w=function(){var C=[];return rr([S],function(j,qe){c(j)&&(C.push(j),qe())}),{v:C}}();if((typeof w>"u"?"undefined":Ta(w))==="object")return w.v}return typeof S=="function"?S(c):en(S,T,c)};break;case/\*/.test(u):c=function(S){return!0},l=function(S,T){if(n){var w=function(){var C=[];return rr([S],function(j){return C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":Ta(w))==="object")return w.v}return typeof S=="function"?S(c):en(S,T,c)};break;default:c=function(S){return S.name===u},l=function(S,T){if(n){var w=function(){var C=[];return rr([S],function(j){c(j)&&C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":Ta(w))==="object")return w.v}return typeof S=="function"?S(c):en(S,T,c)}}}(),!s)return l;var f=s.match(/-(child|type)\((\d+)\)$/),p=f[1],v=parseInt(f[2],10)-1,d=function(m){if(m){var y=m.parent.childTags;p==="type"&&(y=y.filter(c));var b=y.findIndex(function(q){return q===m});if(b===v)return!0}return!1};return function(m){var y=l(m);return n?y.reduce(function(b,q){return d(q)&&b.push(q),b},[]):d(y)&&y}})}function rr(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&rr(t.childTags,r)})}function en(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}vq.exports=Oa.default});var Ea=i(Ca=>{"use strict";Object.defineProperty(Ca,"__esModule",{value:!0});Ca.convertNodeList=qL;Ca.escapeValue=xL;function qL(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function xL(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var wq=i((Ia,Sq)=>{"use strict";Object.defineProperty(Ia,"__esModule",{value:!0});Ia.default=SL;var yq=Ea(),dq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function SL(e,r){var t=r.root,n=t===void 0?document:t,a=r.skip,o=a===void 0?null:a,u=r.priority,s=u===void 0?["id","class","href","src"]:u,c=r.ignore,l=c===void 0?{}:c,f=[],p=e,v=f.length,d=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(b){return typeof b!="function"?function(q){return q===b}:b}),m=function(q){return o&&h.some(function(I){return I(q)})};for(Object.keys(l).forEach(function(b){b==="class"&&(d=!0);var q=l[b];typeof q!="function"&&(typeof q=="number"&&(q=q.toString()),typeof q=="string"&&(q=new RegExp((0,yq.escapeValue)(q).replace(/\\/g,"\\\\"))),typeof q=="boolean"&&(q=q?/(?:)/:/.^/),l[b]=function(I,E){return q.test(E)})}),d&&function(){var b=l.attribute;l.attribute=function(q,I,E){return l.class(I)||b&&b(q,I,E)}}();p!==n;){if(m(p)!==!0){if(mq(s,p,l,f,n)||hq(p,l,f,n))break;mq(s,p,l,f),f.length===v&&hq(p,l,f),f.length===v&&wL(s,p,l,f)}p=p.parentNode,v=f.length}if(p===n){var y=qq(s,p,l);f.unshift(y)}return f.join(" ")}function mq(e,r,t,n){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=gq(e,r,t);if(o){var u=a.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function gq(e,r,t){for(var n=r.attributes,a=Object.keys(n).sort(function(m,y){var b=e.indexOf(n[m].name),q=e.indexOf(n[y].name);return q===-1?b===-1?0:-1:b-q}),o=0,u=a.length;o<u;o++){var s=a[o],c=n[s],l=c.name,f=(0,yq.escapeValue)(c.value),p=t[l]||t.attribute,v=dq[l]||dq.attribute;if(!xq(p,l,f,v)){var d="["+l+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(l==="id"&&(d="#"+f),l==="class")){var h=f.trim().replace(/\s+/g,".");d="."+h}return d}}return null}function hq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,a=bq(e,r);if(a){var o=n.getElementsByTagName(a);if(o.length===1)return t.unshift(a),!0}return!1}function bq(e,r){var t=e.tagName.toLowerCase();return xq(r.tag,null,t)?null:t}function wL(e,r,t,n){for(var a=r.parentNode,o=a.childTags||a.children,u=0,s=o.length;u<s;u++){var c=o[u];if(c===r){var l=qq(e,c,t);if(!l)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,c,t,l);var f="> "+l+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function qq(e,r,t){var n=gq(e,r,t);return n||(n=bq(r,t)),n}function xq(e,r,t,n){if(!t)return!0;var a=e||n;return a?a(r,t,n):!1}Sq.exports=Ia.default});var Ku=i((Pa,Tq)=>{"use strict";Object.defineProperty(Pa,"__esModule",{value:!0});Pa.default=IL;var TL=Wu(),OL=EL(TL),CL=Ea();function EL(e){return e&&e.__esModule?e:{default:e}}function IL(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,CL.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,OL.default)(r[0],t),a=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(a.length<2)return ka("",e,"",r);for(var o=[a.pop()];a.length>1;){var u=a.pop(),s=a.join(" "),c=o.join(" "),l=s+" "+c,f=document.querySelectorAll(l);f.length!==r.length&&o.unshift(ka(s,u,c,r))}return o.unshift(a[0]),a=o,a[0]=ka("",a[0],a.slice(1).join(" "),r),a[a.length-1]=ka(a.slice(0,-1).join(" "),a[a.length-1],"",r),n&&delete global.document,a.join(" ").replace(/>/g,"> ").trim()}function ka(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var a=r.replace(/=.*$/,"]"),o=""+e+a+t,u=document.querySelectorAll(o);if(at(u,n))r=a;else for(var s=document.querySelectorAll(""+e+a),c=function(){var E=s[l];if(n.some(function(T){return E.contains(T)})){var S=E.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),at(u,n)&&(r=S),"break"}},l=0,f=s.length;l<f;l++){var o,u,p=c();if(p==="break")break}}if(/>/.test(r)){var v=r.replace(/>/,""),o=""+e+v+t,u=document.querySelectorAll(o);at(u,n)&&(r=v)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);at(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(I){return"."+I}).sort(function(I,E){return I.length-E.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);at(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var y=document.querySelectorAll(""+e+r),b=function(){var E=y[l];if(n.some(function(T){return E.contains(T)})){var S=E.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),at(u,n)&&(r=S),"break"}},l=0,f=y.length;l<f;l++){var o,u,q=b();if(q==="break")break}}return r}function at(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var a=0;a<t;a++)if(e[a]===n)return!0;return!1})}Tq.exports=Pa.default});var zu=i(_a=>{"use strict";Object.defineProperty(_a,"__esModule",{value:!0});_a.getCommonAncestor=kL;_a.getCommonProperties=PL;function kL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,a=[];e.forEach(function(p,v){for(var d=[];p!==n;)p=p.parentNode,d.unshift(p);a[v]=d}),a.sort(function(p,v){return p.length-v.length});for(var o=a.shift(),u=null,s=function(){var v=o[c],d=a.some(function(h){return!h.some(function(m){return m===v})});if(d)return"break";u=v},c=0,l=o.length;c<l;c++){var f=s();if(f==="break")break}return u}function PL(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,a=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(c){return u.some(function(l){return l===c})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(a!==void 0&&function(){var c=t.attributes,l=Object.keys(c).reduce(function(v,d){var h=c[d],m=h.name;return h&&m!=="class"&&(v[m]=h.value),v},{}),f=Object.keys(l),p=Object.keys(a);f.length?p.length?(a=p.reduce(function(v,d){var h=a[d];return h===l[d]&&(v[d]=h),v},{}),Object.keys(a).length?r.attributes=a:delete r.attributes):r.attributes=l:delete r.attributes}(),o!==void 0){var s=t.tagName.toLowerCase();o?s!==o&&delete r.tag:r.tag=s}}),r}});var Pq=i(rn=>{"use strict";Object.defineProperty(rn,"__esModule",{value:!0});var _L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};rn.getSingleSelector=Yu;rn.getMultiSelector=kq;rn.default=$L;var RL=Wu(),Cq=Vu(RL),AL=wq(),NL=Vu(AL),ML=Ku(),Eq=Vu(ML),Oq=Ea(),Iq=zu();function Vu(e){return e&&e.__esModule?e:{default:e}}function Yu(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":_L(e))+'")');var t=(0,Cq.default)(e,r),n=(0,NL.default)(e,r),a=(0,Eq.default)(n,e,r);return t&&delete global.document,a}function kq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,Oq.convertNodeList)(e)),e.some(function(l){return l.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,Cq.default)(e[0],r),n=(0,Iq.getCommonAncestor)(e,r),a=Yu(n,r),o=jL(e),u=o[0],s=(0,Eq.default)(a+" "+u,e,r),c=(0,Oq.convertNodeList)(document.querySelectorAll(s));return e.every(function(l){return c.some(function(f){return f===l})})?(t&&delete global.document,s):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function jL(e){var r=(0,Iq.getCommonProperties)(e),t=r.classes,n=r.attributes,a=r.tag,o=[];if(a&&o.push(a),t){var u=t.map(function(c){return"."+c}).join("");o.push(u)}if(n){var s=Object.keys(n).reduce(function(c,l){return c.push("["+l+'="'+n[l]+'"]'),c},[]).join("");o.push(s)}return o.length,[o.join("")]}function $L(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?kq(e,r):Yu(e,r)}});var Aq=i(ae=>{"use strict";Object.defineProperty(ae,"__esModule",{value:!0});ae.default=ae.common=ae.optimize=ae.getMultiSelector=ae.getSingleSelector=ae.select=void 0;var Ju=Pq();Object.defineProperty(ae,"getSingleSelector",{enumerable:!0,get:function(){return Ju.getSingleSelector}});Object.defineProperty(ae,"getMultiSelector",{enumerable:!0,get:function(){return Ju.getMultiSelector}});var _q=Rq(Ju),LL=Ku(),FL=Rq(LL),DL=zu(),BL=GL(DL);function GL(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Rq(e){return e&&e.__esModule?e:{default:e}}ae.select=_q.default;ae.optimize=FL.default;ae.common=BL;ae.default=_q.default});var Nq=i(()=>{"use strict";var XL=x(),ZL=_e();XL({target:"Array",stat:!0},{isArray:ZL})});var jq=i((nV,Mq)=>{"use strict";Nq();var eF=V();Mq.exports=eF.Array.isArray});var Lq=i((aV,$q)=>{"use strict";var rF=jq();$q.exports=rF});var Dq=i((iV,Fq)=>{"use strict";var tF=Lq();Fq.exports=tF});var Gq=i((oV,Bq)=>{"use strict";var nF=Dq();Bq.exports=nF});var Hq=i((uV,Uq)=>{"use strict";Uq.exports=Gq()});var zq=i(()=>{"use strict";var aF=x(),iF=re(),oF=fe(),uF=Gr(),sF=Et(),cF=P(),lF=cF(function(){return[].push.call({length:4294967296},1)!==4294967297}),fF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},pF=lF||!fF();aF({target:"Array",proto:!0,arity:1,forced:pF},{push:function(r){var t=iF(this),n=oF(t),a=arguments.length;sF(n+a);for(var o=0;o<a;o++)t[n]=arguments[o],n++;return uF(t,n),n}})});var Yq=i((fV,Vq)=>{"use strict";zq();var vF=ue();Vq.exports=vF("Array","push")});var Qq=i((pV,Jq)=>{"use strict";var dF=U(),mF=Yq(),Qu=Array.prototype;Jq.exports=function(e){var r=e.push;return e===Qu||dF(Qu,e)&&r===Qu.push?mF:r}});var Zq=i((vV,Xq)=>{"use strict";var hF=Qq();Xq.exports=hF});var rx=i((dV,ex)=>{"use strict";var yF=Zq();ex.exports=yF});var nx=i((mV,tx)=>{"use strict";var gF=rx();tx.exports=gF});var Xu=i((hV,ax)=>{"use strict";ax.exports=nx()});var mx=i(()=>{"use strict";var bF=x(),qF=Pt().map,xF=bt(),SF=xF("map");bF({target:"Array",proto:!0,forced:!SF},{map:function(r){return qF(this,r,arguments.length>1?arguments[1]:void 0)}})});var yx=i((HV,hx)=>{"use strict";mx();var wF=ue();hx.exports=wF("Array","map")});var bx=i((WV,gx)=>{"use strict";var TF=U(),OF=yx(),es=Array.prototype;gx.exports=function(e){var r=e.map;return e===es||TF(es,e)&&r===es.map?OF:r}});var xx=i((KV,qx)=>{"use strict";var CF=bx();qx.exports=CF});var wx=i((zV,Sx)=>{"use strict";var EF=xx();Sx.exports=EF});var Ox=i((VV,Tx)=>{"use strict";var IF=wx();Tx.exports=IF});var Ex=i((YV,Cx)=>{"use strict";Cx.exports=Ox()});var kx=i((JV,Ix)=>{Ix.exports=Ex()});var _x=i((QV,Px)=>{Px.exports=nt()});var jx=i((XV,Mx)=>{"use strict";var kF=F(),PF=re(),_F=gn(),RF=fe(),Rx=TypeError,Ax="Reduce of empty array with no initial value",Nx=function(e){return function(r,t,n,a){var o=PF(r),u=_F(o),s=RF(o);if(kF(t),s===0&&n<2)throw new Rx(Ax);var c=e?s-1:0,l=e?-1:1;if(n<2)for(;;){if(c in u){a=u[c],c+=l;break}if(c+=l,e?c<0:s<=c)throw new Rx(Ax)}for(;e?c>=0:s>c;c+=l)c in u&&(a=t(a,u[c],c,o));return a}};Mx.exports={left:Nx(!1),right:Nx(!0)}});var rs=i((ZV,$x)=>{"use strict";var AF=P();$x.exports=function(e,r){var t=[][e];return!!t&&AF(function(){t.call(null,r||function(){return 1},1)})}});var Fx=i(()=>{"use strict";var NF=x(),MF=jx().left,jF=rs(),Lx=Mr(),$F=jt(),LF=!$F&&Lx>79&&Lx<83,FF=LF||!jF("reduce");NF({target:"Array",proto:!0,forced:FF},{reduce:function(r){var t=arguments.length;return MF(this,r,t,t>1?arguments[1]:void 0)}})});var Bx=i((t9,Dx)=>{"use strict";Fx();var DF=ue();Dx.exports=DF("Array","reduce")});var Ux=i((n9,Gx)=>{"use strict";var BF=U(),GF=Bx(),ts=Array.prototype;Gx.exports=function(e){var r=e.reduce;return e===ts||BF(ts,e)&&r===ts.reduce?GF:r}});var Wx=i((a9,Hx)=>{"use strict";var UF=Ux();Hx.exports=UF});var zx=i((i9,Kx)=>{"use strict";var HF=Wx();Kx.exports=HF});var Yx=i((o9,Vx)=>{"use strict";var WF=zx();Vx.exports=WF});var Qx=i((u9,Jx)=>{"use strict";Jx.exports=Yx()});var Zx=i((s9,Xx)=>{Xx.exports=Qx()});var tS=i((c9,rS)=>{"use strict";var KF=_e(),zF=fe(),VF=Et(),YF=Y(),JF=Br(),eS=function(e,r,t,n,a,o,u,s){for(var c=a,l=0,f=u?YF(u,s):!1,p,v;l<n;)l in t&&(p=f?f(t[l],l,r):t[l],o>0&&KF(p)?(v=zF(p),c=eS(e,r,p,v,c,o-1)-1):(VF(c+1),JF(e,c,p)),c++),l++;return c};rS.exports=eS});var nS=i(()=>{"use strict";var QF=x(),XF=tS(),ZF=F(),eD=re(),rD=fe(),tD=Fn();QF({target:"Array",proto:!0},{flatMap:function(r){var t=eD(this),n=rD(t),a;return ZF(r),a=tD(t,0),XF(a,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),a}})});var aS=i(()=>{"use strict";var nD=Po();nD("flatMap")});var oS=i((d9,iS)=>{"use strict";nS();aS();var aD=ue();iS.exports=aD("Array","flatMap")});var sS=i((m9,uS)=>{"use strict";var iD=U(),oD=oS(),ns=Array.prototype;uS.exports=function(e){var r=e.flatMap;return e===ns||iD(ns,e)&&r===ns.flatMap?oD:r}});var lS=i((h9,cS)=>{"use strict";var uD=sS();cS.exports=uD});var pS=i((y9,fS)=>{"use strict";var sD=lS();fS.exports=sD});var dS=i((g9,vS)=>{"use strict";var cD=pS();vS.exports=cD});var hS=i((b9,mS)=>{"use strict";mS.exports=dS()});var gS=i((q9,yS)=>{yS.exports=hS()});var qS=i((x9,bS)=>{"use strict";eo();var lD=ue();bS.exports=lD("Array","concat")});var SS=i((S9,xS)=>{"use strict";var fD=U(),pD=qS(),as=Array.prototype;xS.exports=function(e){var r=e.concat;return e===as||fD(as,e)&&r===as.concat?pD:r}});var TS=i((w9,wS)=>{"use strict";var vD=SS();wS.exports=vD});var CS=i((T9,OS)=>{"use strict";var dD=TS();OS.exports=dD});var IS=i((O9,ES)=>{"use strict";var mD=CS();ES.exports=mD});var PS=i((C9,kS)=>{"use strict";kS.exports=IS()});var is=i((E9,_S)=>{_S.exports=PS()});var NS=i(()=>{});var jS=i((J9,MS)=>{"use strict";NS();ko();var OD=Wr();MS.exports=OD.f("toPrimitive")});var LS=i((Q9,$S)=>{"use strict";var CD=jS();$S.exports=CD});var DS=i((X9,FS)=>{"use strict";var ED=LS();FS.exports=ED});var GS=i((Z9,BS)=>{"use strict";var ID=DS();BS.exports=ID});var HS=i((e7,US)=>{"use strict";US.exports=GS()});var ZS=i((x7,XS)=>{"use strict";var PD=$(),_D=Se(),RD=R(),AD=RD("match");XS.exports=function(e){var r;return PD(e)&&((r=e[AD])!==void 0?!!r:_D(e)==="RegExp")}});var rw=i((S7,ew)=>{"use strict";var ND=ZS(),MD=TypeError;ew.exports=function(e){if(ND(e))throw new MD("The method doesn't accept regular expressions");return e}});var nw=i((w7,tw)=>{"use strict";var jD=R(),$D=jD("match");tw.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[$D]=!1,"/./"[e](r)}catch{}}return!1}});var ow=i(()=>{"use strict";var LD=x(),FD=ft(),DD=vt().f,BD=Ti(),aw=Ve(),GD=rw(),UD=or(),HD=nw(),WD=Z(),KD=FD("".slice),zD=Math.min,iw=HD("startsWith"),VD=!WD&&!iw&&!!function(){var e=DD(String.prototype,"startsWith");return e&&!e.writable}();LD({target:"String",proto:!0,forced:!VD&&!iw},{startsWith:function(r){var t=aw(UD(this));GD(r);var n=BD(zD(arguments.length>1?arguments[1]:void 0,t.length)),a=aw(r);return KD(t,n,n+a.length)===a}})});var sw=i((C7,uw)=>{"use strict";ow();var YD=ue();uw.exports=YD("String","startsWith")});var lw=i((E7,cw)=>{"use strict";var JD=U(),QD=sw(),cs=String.prototype;cw.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===cs||JD(cs,e)&&r===cs.startsWith?QD:r}});var pw=i((I7,fw)=>{"use strict";var XD=lw();fw.exports=XD});var dw=i((k7,vw)=>{"use strict";var ZD=pw();vw.exports=ZD});var hw=i((P7,mw)=>{"use strict";var e3=dw();mw.exports=e3});var gw=i((_7,yw)=>{"use strict";yw.exports=hw()});var qw=i((R7,bw)=>{bw.exports=gw()});var xw=i(()=>{"use strict";var r3=x(),t3=Pt().filter,n3=bt(),a3=n3("filter");r3({target:"Array",proto:!0,forced:!a3},{filter:function(r){return t3(this,r,arguments.length>1?arguments[1]:void 0)}})});var ww=i((M7,Sw)=>{"use strict";xw();var i3=ue();Sw.exports=i3("Array","filter")});var Ow=i((j7,Tw)=>{"use strict";var o3=U(),u3=ww(),ls=Array.prototype;Tw.exports=function(e){var r=e.filter;return e===ls||o3(ls,e)&&r===ls.filter?u3:r}});var Ew=i(($7,Cw)=>{"use strict";var s3=Ow();Cw.exports=s3});var kw=i((L7,Iw)=>{"use strict";var c3=Ew();Iw.exports=c3});var _w=i((F7,Pw)=>{"use strict";var l3=kw();Pw.exports=l3});var Aw=i((D7,Rw)=>{"use strict";Rw.exports=_w()});var Mw=i((B7,Nw)=>{Nw.exports=Aw()});var Qw=i(()=>{"use strict";var g3=x(),b3=W(),ps=Ar(),q3=Au(),Ww=Ho(),x3=X(),Kw=$(),S3=Je(),Vw=P(),vs=b3("Reflect","construct"),w3=Object.prototype,T3=[].push,Yw=Vw(function(){function e(){}return!(vs(function(){},[],e)instanceof e)}),Jw=!Vw(function(){vs(function(){})}),zw=Yw||Jw;g3({target:"Reflect",stat:!0,forced:zw,sham:zw},{construct:function(r,t){Ww(r),x3(t);var n=arguments.length<3?r:Ww(arguments[2]);if(Jw&&!Yw)return vs(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var a=[null];return ps(T3,a,t),new(ps(q3,r,a))}var o=n.prototype,u=S3(Kw(o)?o:w3),s=ps(r,u,t);return Kw(s)?s:u}})});var Zw=i((xY,Xw)=>{"use strict";Qw();var O3=V();Xw.exports=O3.Reflect.construct});var rT=i((SY,eT)=>{"use strict";var C3=Zw();eT.exports=C3});var nT=i((wY,tT)=>{"use strict";var E3=rT();tT.exports=E3});var iT=i((TY,aT)=>{"use strict";var I3=nT();aT.exports=I3});var La=i((OY,oT)=>{"use strict";oT.exports=iT()});var sT=i((CY,uT)=>{uT.exports=La()});var yT=i((MY,hT)=>{"use strict";var k3=P();hT.exports=k3(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var qT=i((jY,bT)=>{"use strict";var P3=P(),_3=$(),R3=Se(),gT=yT(),Fa=Object.isExtensible,A3=P3(function(){Fa(1)});bT.exports=A3||gT?function(r){return!_3(r)||gT&&R3(r)==="ArrayBuffer"?!1:Fa?Fa(r):!0}:Fa});var ST=i(($Y,xT)=>{"use strict";var N3=P();xT.exports=!N3(function(){return Object.isExtensible(Object.preventExtensions({}))})});var qs=i((LY,OT)=>{"use strict";var M3=x(),j3=A(),$3=Hr(),L3=$(),ys=K(),F3=te().f,wT=kt(),D3=ro(),gs=qT(),B3=$r(),G3=ST(),TT=!1,Ge=B3("meta"),U3=0,bs=function(e){F3(e,Ge,{value:{objectID:"O"+U3++,weakData:{}}})},H3=function(e,r){if(!L3(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!ys(e,Ge)){if(!gs(e))return"F";if(!r)return"E";bs(e)}return e[Ge].objectID},W3=function(e,r){if(!ys(e,Ge)){if(!gs(e))return!0;if(!r)return!1;bs(e)}return e[Ge].weakData},K3=function(e){return G3&&TT&&gs(e)&&!ys(e,Ge)&&bs(e),e},z3=function(){V3.enable=function(){},TT=!0;var e=wT.f,r=j3([].splice),t={};t[Ge]=1,e(t).length&&(wT.f=function(n){for(var a=e(n),o=0,u=a.length;o<u;o++)if(a[o]===Ge){r(a,o,1);break}return a},M3({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:D3.f}))},V3=OT.exports={enable:z3,fastKey:H3,getWeakData:W3,onFreeze:K3};$3[Ge]=!0});var IT=i((FY,ET)=>{"use strict";var Y3=x(),J3=_(),Q3=qs(),X3=P(),Z3=we(),eB=ve(),rB=ua(),tB=N(),nB=$(),aB=ir(),iB=Ne(),oB=te().f,uB=Pt().forEach,sB=H(),CT=Ye(),cB=CT.set,lB=CT.getterFor;ET.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,a=e.indexOf("Weak")!==-1,o=n?"set":"add",u=J3[e],s=u&&u.prototype,c={},l;if(!sB||!tB(u)||!(a||s.forEach&&!X3(function(){new u().entries().next()})))l=t.getConstructor(r,e,n,o),Q3.enable();else{l=r(function(v,d){cB(rB(v,f),{type:e,collection:new u}),aB(d)||eB(d,v[o],{that:v,AS_ENTRIES:n})});var f=l.prototype,p=lB(e);uB(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(v){var d=v==="add"||v==="set";v in s&&!(a&&v==="clear")&&Z3(f,v,function(h,m){var y=p(this).collection;if(!d&&a&&!nB(h))return v==="get"?void 0:!1;var b=y[v](h===0?0:h,m);return d?this:b})}),a||oB(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return iB(l,e,!1,!0),c[e]=l,Y3({global:!0,forced:!0},c),a||t.setStrong(l,e,n),l}});var PT=i((DY,kT)=>{"use strict";var fB=Re();kT.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:fB(e,n,r[n],t);return e}});var $T=i((BY,jT)=>{"use strict";var _T=Je(),pB=Bn(),RT=PT(),vB=Y(),dB=ua(),mB=ir(),hB=ve(),yB=Mn(),Da=jn(),gB=Uo(),sn=H(),AT=qs().fastKey,MT=Ye(),NT=MT.set,xs=MT.getterFor;jT.exports={getConstructor:function(e,r,t,n){var a=e(function(l,f){dB(l,o),NT(l,{type:r,index:_T(null),first:null,last:null,size:0}),sn||(l.size=0),mB(f)||hB(f,l[n],{that:l,AS_ENTRIES:t})}),o=a.prototype,u=xs(r),s=function(l,f,p){var v=u(l),d=c(l,f),h,m;return d?d.value=p:(v.last=d={index:m=AT(f,!0),key:f,value:p,previous:h=v.last,next:null,removed:!1},v.first||(v.first=d),h&&(h.next=d),sn?v.size++:l.size++,m!=="F"&&(v.index[m]=d)),l},c=function(l,f){var p=u(l),v=AT(f),d;if(v!=="F")return p.index[v];for(d=p.first;d;d=d.next)if(d.key===f)return d};return RT(o,{clear:function(){for(var f=this,p=u(f),v=p.first;v;)v.removed=!0,v.previous&&(v.previous=v.previous.next=null),v=v.next;p.first=p.last=null,p.index=_T(null),sn?p.size=0:f.size=0},delete:function(l){var f=this,p=u(f),v=c(f,l);if(v){var d=v.next,h=v.previous;delete p.index[v.index],v.removed=!0,h&&(h.next=d),d&&(d.previous=h),p.first===v&&(p.first=d),p.last===v&&(p.last=h),sn?p.size--:f.size--}return!!v},forEach:function(f){for(var p=u(this),v=vB(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:p.first;)for(v(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!c(this,f)}}),RT(o,t?{get:function(f){var p=c(this,f);return p&&p.value},set:function(f,p){return s(this,f===0?0:f,p)}}:{add:function(f){return s(this,f=f===0?0:f,f)}}),sn&&pB(o,"size",{configurable:!0,get:function(){return u(this).size}}),a},setStrong:function(e,r,t){var n=r+" Iterator",a=xs(r),o=xs(n);yB(e,r,function(u,s){NT(this,{type:n,target:u,state:a(u),kind:s,last:null})},function(){for(var u=o(this),s=u.kind,c=u.last;c&&c.removed;)c=c.previous;return!u.target||!(u.last=c=c?c.next:u.state.first)?(u.target=null,Da(void 0,!0)):Da(s==="keys"?c.key:s==="values"?c.value:[c.key,c.value],!1)},t?"entries":"values",!t,!0),gB(r)}}});var LT=i(()=>{"use strict";var bB=IT(),qB=$T();bB("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},qB)});var FT=i(()=>{"use strict";LT()});var BT=i((KY,DT)=>{"use strict";DT.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,a){return t[e](n,a)}}});var ie=i((zY,UT)=>{"use strict";var xB=W(),Ba=BT(),GT=xB("Map");UT.exports={Map:GT,set:Ba("set",2),get:Ba("get",1),has:Ba("has",1),remove:Ba("delete",1),proto:GT.prototype}});var Ss=i(()=>{"use strict";var SB=x(),wB=A(),TB=F(),OB=or(),CB=ve(),Ga=ie(),HT=Z(),EB=P(),WT=Ga.Map,IB=Ga.has,kB=Ga.get,PB=Ga.set,_B=wB([].push),RB=HT||EB(function(){return WT.groupBy("ab",function(e){return e}).get("a").length!==1});SB({target:"Map",stat:!0,forced:HT||RB},{groupBy:function(r,t){OB(r),TB(t);var n=new WT,a=0;return CB(r,function(o){var u=t(o,a++);IB(n,u)?_B(kB(n,u),o):PB(n,u,[o])}),n}})});var J=i((JY,KT)=>{"use strict";var AB=ze(),NB=TypeError;KT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new NB(AB(e)+" is not a map")}});var Ts=i(()=>{"use strict";var MB=x(),jB=J(),ws=ie(),$B=Z(),LB=ws.get,FB=ws.has,DB=ws.set;MB({target:"Map",proto:!0,real:!0,forced:$B},{getOrInsert:function(r,t){return FB(jB(this),r)?LB(this,r):(DB(this,r,t),t)}})});var Cs=i(()=>{"use strict";var BB=x(),GB=F(),UB=J(),Os=ie(),HB=Z(),WB=Os.get,KB=Os.has,zB=Os.set;BB({target:"Map",proto:!0,real:!0,forced:HB},{getOrInsertComputed:function(r,t){if(UB(this),GB(t),KB(this,r))return WB(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return zB(this,r,n),n}})});var VT=i((rJ,zT)=>{"use strict";hr();FT();Ss();Ts();Cs();It();pr();var VB=V();zT.exports=VB.Map});var JT=i((tJ,YT)=>{"use strict";var YB=VT();yr();YT.exports=YB});var Es=i(()=>{"use strict";Ts()});var Is=i(()=>{"use strict";Cs()});var QT=i(()=>{"use strict";Ss()});var ZT=i((cJ,XT)=>{"use strict";var JB=JT();Es();Is();QT();XT.exports=JB});var rO=i((lJ,eO)=>{"use strict";var QB=Y(),XB=X(),ZB=re(),e4=ve();eO.exports=function(e,r,t){return function(a){var o=ZB(a),u=arguments.length,s=u>1?arguments[1]:void 0,c=s!==void 0,l=c?QB(s,u>2?arguments[2]:void 0):void 0,f=new e,p=0;return e4(o,function(v){var d=c?l(v,p++):v;t?r(f,XB(d)[0],d[1]):r(f,d)}),f}}});var nO=i(()=>{"use strict";var r4=x(),tO=ie(),t4=rO();r4({target:"Map",stat:!0,forced:!0},{from:t4(tO.Map,tO.set,!0)})});var iO=i((vJ,aO)=>{"use strict";var n4=X();aO.exports=function(e,r,t){return function(){for(var a=new e,o=arguments.length,u=0;u<o;u++){var s=arguments[u];t?r(a,n4(s)[0],s[1]):r(a,s)}return a}}});var uO=i(()=>{"use strict";var a4=x(),oO=ie(),i4=iO();a4({target:"Map",stat:!0,forced:!0},{of:i4(oO.Map,oO.set,!0)})});var cO=i(()=>{"use strict";var o4=x(),u4=B(),s4=ve(),c4=N(),sO=F(),l4=ie().Map;o4({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=c4(this)?this:l4,a=new n;sO(t);var o=sO(a.set);return s4(r,function(u){u4(o,a,t(u),u)}),a}})});var lO=i(()=>{"use strict";var f4=x(),p4=J(),v4=ie().remove;f4({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=p4(this),t=!0,n,a=0,o=arguments.length;a<o;a++)n=v4(r,arguments[a]),t=t&&n;return!!t}})});var pO=i(()=>{"use strict";var d4=x(),m4=J(),ks=ie(),h4=ks.get,y4=ks.has,fO=ks.set;d4({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=m4(this),a,o;return y4(n,r)?(a=h4(n,r),"update"in t&&(a=t.update(a,r,n),fO(n,r,a)),a):(o=t.insert(r,n),fO(n,r,o),o)}})});var dO=i((SJ,vO)=>{"use strict";var g4=B();vO.exports=function(e,r,t){for(var n=t?e:e.iterator,a=e.next,o,u;!(o=g4(a,n)).done;)if(u=r(o.value),u!==void 0)return u}});var ye=i((wJ,mO)=>{"use strict";var b4=dO();mO.exports=function(e,r,t){return t?b4(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var hO=i(()=>{"use strict";var q4=x(),x4=Y(),S4=J(),w4=ye();q4({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=S4(this),n=x4(r,arguments.length>1?arguments[1]:void 0);return w4(t,function(a,o){if(!n(a,o,t))return!1},!0)!==!1}})});var gO=i(()=>{"use strict";var T4=x(),O4=Y(),C4=J(),yO=ie(),E4=ye(),I4=yO.Map,k4=yO.set;T4({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=C4(this),n=O4(r,arguments.length>1?arguments[1]:void 0),a=new I4;return E4(t,function(o,u){n(o,u,t)&&k4(a,u,o)}),a}})});var bO=i(()=>{"use strict";var P4=x(),_4=Y(),R4=J(),A4=ye();P4({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=R4(this),n=_4(r,arguments.length>1?arguments[1]:void 0),a=A4(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return a&&a.value}})});var qO=i(()=>{"use strict";var N4=x(),M4=Y(),j4=J(),$4=ye();N4({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=j4(this),n=M4(r,arguments.length>1?arguments[1]:void 0),a=$4(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return a&&a.key}})});var SO=i((RJ,xO)=>{"use strict";xO.exports=function(e,r){return e===r||e!==e&&r!==r}});var wO=i(()=>{"use strict";var L4=x(),F4=SO(),D4=J(),B4=ye();L4({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return B4(D4(this),function(t){if(F4(t,r))return!0},!0)===!0}})});var TO=i(()=>{"use strict";var G4=x(),U4=J(),H4=ye();G4({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=H4(U4(this),function(n,a){if(n===r)return{key:a}},!0);return t&&t.key}})});var CO=i(()=>{"use strict";var W4=x(),K4=Y(),z4=J(),OO=ie(),V4=ye(),Y4=OO.Map,J4=OO.set;W4({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=z4(this),n=K4(r,arguments.length>1?arguments[1]:void 0),a=new Y4;return V4(t,function(o,u){J4(a,n(o,u,t),o)}),a}})});var IO=i(()=>{"use strict";var Q4=x(),X4=Y(),Z4=J(),EO=ie(),eG=ye(),rG=EO.Map,tG=EO.set;Q4({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=Z4(this),n=X4(r,arguments.length>1?arguments[1]:void 0),a=new rG;return eG(t,function(o,u){tG(a,u,n(o,u,t))}),a}})});var kO=i(()=>{"use strict";var nG=x(),aG=J(),iG=ve(),oG=ie().set;nG({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=aG(this),n=arguments.length,a=0;a<n;)iG(arguments[a++],function(o,u){oG(t,o,u)},{AS_ENTRIES:!0});return t}})});var PO=i(()=>{"use strict";var uG=x(),sG=F(),cG=J(),lG=ye(),fG=TypeError;uG({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=cG(this),n=arguments.length<2,a=n?void 0:arguments[1];if(sG(r),lG(t,function(o,u){n?(n=!1,a=o):a=r(a,o,u,t)}),n)throw new fG("Reduce of empty map with no initial value");return a}})});var _O=i(()=>{"use strict";var pG=x(),vG=Y(),dG=J(),mG=ye();pG({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=dG(this),n=vG(r,arguments.length>1?arguments[1]:void 0);return mG(t,function(a,o){if(n(a,o,t))return!0},!0)===!0}})});var AO=i(()=>{"use strict";var hG=x(),RO=F(),yG=J(),Ps=ie(),gG=TypeError,bG=Ps.get,qG=Ps.has,xG=Ps.set;hG({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=yG(this),a=arguments.length;RO(t);var o=qG(n,r);if(!o&&a<3)throw new gG("Updating absent value");var u=o?bG(n,r):RO(a>2?arguments[2]:void 0)(r,n);return xG(n,r,t(u,r,n)),n}})});var Rs=i((YJ,NO)=>{"use strict";var Ua=B(),_s=F(),Ha=N(),SG=X(),wG=TypeError;NO.exports=function(r,t){var n=SG(this),a=_s(n.get),o=_s(n.has),u=_s(n.set),s=arguments.length>2?arguments[2]:void 0,c;if(!Ha(t)&&!Ha(s))throw new wG("At least one callback required");return Ua(o,n,r)?(c=Ua(a,n,r),Ha(t)&&(c=t(c),Ua(u,n,r,c))):Ha(s)&&(c=s(),Ua(u,n,r,c)),c}});var MO=i(()=>{"use strict";var TG=x(),OG=Rs();TG({target:"Map",proto:!0,real:!0,forced:!0},{upsert:OG})});var jO=i(()=>{"use strict";var CG=x(),EG=Rs();CG({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:EG})});var LO=i((eQ,$O)=>{"use strict";var IG=ZT();nO();uO();cO();lO();pO();hO();gO();bO();qO();wO();Es();Is();TO();CO();IO();kO();PO();_O();AO();MO();jO();$O.exports=IG});var DO=i((rQ,FO)=>{"use strict";FO.exports=LO()});var GO=i(()=>{"use strict";var kG=x(),PG=ft(),_G=Ni().indexOf,RG=rs(),As=PG([].indexOf),BO=!!As&&1/As([1],1,-0)<0,AG=BO||!RG("indexOf");kG({target:"Array",proto:!0,forced:AG},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return BO?As(this,r,t)||0:_G(this,r,t)}})});var HO=i((aQ,UO)=>{"use strict";GO();var NG=ue();UO.exports=NG("Array","indexOf")});var KO=i((iQ,WO)=>{"use strict";var MG=U(),jG=HO(),Ns=Array.prototype;WO.exports=function(e){var r=e.indexOf;return e===Ns||MG(Ns,e)&&r===Ns.indexOf?jG:r}});var VO=i((oQ,zO)=>{"use strict";var $G=KO();zO.exports=$G});var JO=i((uQ,YO)=>{"use strict";var LG=VO();YO.exports=LG});var XO=i((sQ,QO)=>{"use strict";var FG=JO();QO.exports=FG});var eC=i((cQ,ZO)=>{"use strict";ZO.exports=XO()});var yC=i(()=>{"use strict";var WG=x(),KG=re(),hC=Pn(),zG=P(),VG=zG(function(){hC(1)});WG({target:"Object",stat:!0,forced:VG},{keys:function(r){return hC(KG(r))}})});var bC=i((dX,gC)=>{"use strict";yC();var YG=V();gC.exports=YG.Object.keys});var xC=i((mX,qC)=>{"use strict";var JG=bC();qC.exports=JG});var wC=i((hX,SC)=>{"use strict";var QG=xC();SC.exports=QG});var OC=i((yX,TC)=>{"use strict";var XG=wC();TC.exports=XG});var EC=i((gX,CC)=>{"use strict";CC.exports=OC()});var kC=i((bX,IC)=>{IC.exports=EC()});var _r="",Ja="";function Zs(e){_r=e.replace(/\/+$/,"")}function ec(e){Ja=e}function st(){return Ja?{Authorization:`Bearer ${Ja}`}:{}}async function ct(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function Qa(e,r,{search:t,author:n}={}){let a=[];r?a.push(`document=${encodeURIComponent(r)}`):e&&a.push(`uri=${encodeURIComponent(e)}`),t&&a.push(`search=${encodeURIComponent(t)}`),n&&a.push(`author=${encodeURIComponent(n)}`);let o=await fetch(`${_r}/comments?${a.join("&")}`,{headers:st()});return await ct(o,"Failed to fetch comments"),(await o.json()).data}async function Xa({uri:e,document:r,quote:t,prefix:n,suffix:a,body:o,author:u,parent:s}){let c={quote:t,prefix:n,suffix:a,body:o,author:u,parent:s};r?c.document=r:c.uri=e;let l=await fetch(`${_r}/comments`,{method:"POST",headers:{"Content-Type":"application/json",...st()},body:JSON.stringify(c)});return await ct(l,"Failed to create comment"),l.json()}async function rc(e,{body:r}){let t=await fetch(`${_r}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...st()},body:JSON.stringify({body:r})});return await ct(t,"Failed to update comment"),t.json()}async function tc(e,r){let t=await fetch(`${_r}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...st()},body:JSON.stringify({status:r})});return await ct(t,"Failed to update comment status"),t.json()}async function nc(e){let r=await fetch(`${_r}/comments/${e}`,{method:"DELETE",headers:st()});await ct(r,"Failed to delete comment")}var WL=g(Ur(),1),KL=g(Ln(),1),zL=g(ea(),1),VL=g(ra(),1),YL=g(ta(),1);var Iu=g(nt(),1);function Xy(e,r,t,n,a,o,u){try{var s=e[o](u),c=s.value}catch(l){return void t(l)}s.done?r(c):Iu.default.resolve(c).then(n,a)}function Sr(e){return function(){var r=this,t=arguments;return new Iu.default(function(n,a){var o=e.apply(r,t);function u(c){Xy(o,n,a,u,s,"next",c)}function s(c){Xy(o,n,a,u,s,"throw",c)}u(void 0)})}}function Ut(e,r){this.v=e,this.k=r}function er(e){return new Ut(e,0)}var ku=g(nt(),1),sg=g(Te(),1),cg=g(ya(),1);function Ce(e){return function(){return new Ht(e.apply(this,arguments))}}function Ht(e){var r,t;function n(o,u){try{var s=e[o](u),c=s.value,l=c instanceof Ut;ku.default.resolve(l?c.v:c).then(function(f){if(l){var p=o==="return"?"return":"next";if(!c.k||f.done)return n(p,f);f=e[p](f).value}a(s.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){a("throw",f)}}function a(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new ku.default(function(s,c){var l={key:o,arg:u,resolve:s,reject:c,next:null};t?t=t.next=l:(r=t=l,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Ht.prototype[typeof sg.default=="function"&&cg.default||"@@asyncIterator"]=function(){return this},Ht.prototype.next=function(e){return this._invoke("next",e)},Ht.prototype.throw=function(e){return this._invoke("throw",e)},Ht.prototype.return=function(e){return this._invoke("return",e)};var JL=g(ce(),1),QL=g(Aq(),1);function le(e){var r,t=UL(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function UL(e){return"startContainer"in e}function tr(e){if(HL(e))return e;var r=e,t=le(r).createRange();return t.selectNodeContents(r),t}function HL(e){return"startContainer"in e}var Wq=g(Hq(),1);function Kq(e){if((0,Wq.default)(e))return e}var ix=g(Te(),1),ox=g($o(),1),ux=g(Xu(),1);function sx(e,r){var t=e==null?null:typeof ix.default<"u"&&(0,ox.default)(e)||e["@@iterator"];if(t!=null){var n,a,o,u,s=[],c=!0,l=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&((0,ux.default)(s).call(s,n.value),s.length!==r);c=!0);}catch(f){l=!0,a=f}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(l)throw a}}return s}}var cx=g(Ei(),1),lx=g(Zi(),1);function Ra(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function Zu(e,r){if(e){var t;if(typeof e=="string")return Ra(e,r);var n=(0,cx.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,lx.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ra(e,r):void 0}}function fx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function De(e,r){return Kq(e)||sx(e,r)||Zu(e,r)||fx()}var px=g(Te(),1),vx=g(ya(),1),dx=g(Xt(),1),tn=g(nt(),1);function it(e){var r,t,n,a=2;for(typeof px.default<"u"&&(t=vx.default,n=dx.default);a--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Aa(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Aa(e){function r(t){if(Object(t)!==t)return tn.default.reject(new TypeError(t+" is not an object."));var n=t.done;return tn.default.resolve(t.value).then(function(a){return{value:a,done:n}})}return Aa=function(n){this.s=n,this.n=n.next},Aa.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var a=this.s.return;return a===void 0?tn.default.resolve({value:n,done:!0}):r(a.apply(this.s,arguments))},throw:function(n){var a=this.s.return;return a===void 0?tn.default.reject(n):r(a.apply(this.s,arguments))}},new Aa(e)}var TD=g(ce(),1);var gD=g(ce(),1),bD=g(kx(),1),qD=g(_x(),1),xD=g(Zx(),1),SD=g(gS(),1),wD=g(is(),1);var $s=g(ce(),1);var y3=g(ce(),1);var us=g(ce(),1);function nn(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function RS(e,r){return nn(e.startChunk,r.startChunk)&&nn(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function wr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var os=g(zt(),1);var an=g(Te(),1),AS=g(Xt(),1);function Be(e){"@babel/helpers - typeof";return Be=typeof an.default=="function"&&typeof AS.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof an.default=="function"&&r.constructor===an.default&&r!==an.default.prototype?"symbol":typeof r},Be(e)}var WS=g(HS(),1);function KS(e,r){if(Be(e)!="object"||!e)return e;var t=e[WS.default];if(t!==void 0){var n=t.call(e,r||"default");if(Be(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Na(e){var r=KS(e,"string");return Be(r)=="symbol"?r:r+""}function zS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,os.default)(e,Na(n.key),n)}}function on(e,r,t){return r&&zS(e.prototype,r),t&&zS(e,t),(0,os.default)(e,"prototype",{writable:!1}),e}var VS=g(zt(),1);function Tr(e,r,t){return(r=Na(r))in e?(0,VS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var YS=g(Ur(),1);var Ma="Iterator exhausted before seek ended.",un=function(){function e(r){wr(this,e),this.chunker=r,Tr(this,"currentChunkPosition",0),Tr(this,"offsetInChunk",0),this.seekTo(0)}return on(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,a)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!nn(this.currentChunk,n);){var p=this._readToPreviousChunk(),v=De(p,2),d=v[0],h=v[1];if(t&&(u=d+u),h===null)throw new RangeError(Ma)}else for(;!nn(this.currentChunk,n);){var s=this._readToNextChunk(),c=De(s,2),l=c[0],f=c[1];if(t&&(u+=l),f===null)throw new RangeError(Ma)}var m=this.currentChunkPosition+a;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,YS.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var s=this.currentChunkPosition+this.currentChunk.data.length;if(s<=n){var c=this._readToNextChunk(),l=De(c,2),f=l[0],p=l[1];if(t&&(u+=f),p===null){if(this.position===n||o)break;throw new RangeError(Ma)}}else{var v=a?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,v)),this.offsetInChunk=v,a&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=a?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var h=this._readToPreviousChunk(),m=De(h,2),y=m[0],b=m[1];if(t&&(u=y+u),b===null){if(o)break;throw new RangeError(Ma)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,a=this.chunker.nextChunk();return a!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,a]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function QS(e,r){return ss.apply(this,arguments)}function ss(){return ss=Sr(us.default.mark(function e(r,t){var n,a,o,u,s,c,l,f,p,v,d,h,m,y,b,q,I,E,S,T,w,C,j=arguments;return us.default.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:n=j.length>2&&j[2]!==void 0?j[2]:{},a=n.minimalContext,o=a===void 0?!1:a,u=n.minimumQuoteLength,s=u===void 0?0:u,c=n.maxWordLength,l=c===void 0?50:c,f=new un(t()),p=new un(t()),f.seekToChunk(r.startChunk,r.startIndex),v=f.readToChunk(r.endChunk,r.endIndex),d="",h="",m=function(){return d.length+v.length+h.length},m()<s&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),y=Math.floor((s-m())/2),d=f.read(-y,!1,!0)+d,m()<s&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),b=s-m(),h=h+f.read(b,!1,!0),m()<s&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),q=s-m(),d=f.read(-q,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=ja(f,l,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+ja(f,l,!1));case 11:return I={type:"TextQuoteSelector",exact:v,prefix:d,suffix:h},E=$a(I)(t()),k.next=16,E.next();case 16:if(S=k.sent,!(!S.done&&RS(S.value,r))){k.next=21;break}return k.next=20,E.next();case 20:S=k.sent;case 21:if(!S.done){k.next=23;break}return k.abrupt("return",I);case 23:if(T=S.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),p.seekToChunk(T.startChunk,T.startIndex-d.length),w=JS(f,p,!0),w!==void 0&&!o&&(w=ja(f,l,!0)+w),f.seekToChunk(r.endChunk,r.endIndex+h.length),p.seekToChunk(T.endChunk,T.endIndex+h.length),C=JS(f,p,!1),C!==void 0&&!o&&(C=C+ja(f,l,!1)),!o){k.next=44;break}if(!(w!==void 0&&(C===void 0||w.length<=C.length))){k.next=37;break}d=w+d,k.next=42;break;case 37:if(C===void 0){k.next=41;break}h=h+C,k.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:k.next=46;break;case 44:w!==void 0&&(d=w+d),C!==void 0&&(h=h+C);case 46:k.next=11;break;case 48:case"end":return k.stop()}},e)})),ss.apply(this,arguments)}function JS(e,r,t){for(var n="";;){var a=void 0;try{a=e.read(t?-1:1)}catch{return}n=t?a+n:n+a;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(a!==o)return n}}function ja(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var a=void 0;try{a=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(kD(a)){e.seekBy(t?1:-1);break}n=t?a+n:n+a}return n}function kD(e){return/^\s+$/.test(e)}var Lw=g(Ur(),1),Fw=g(Ln(),1),Dw=g(ea(),1),Bw=g(ra(),1),Gw=g(ta(),1);var fs=g(ce(),1),Uw=g(qw(),1),Hw=g(Mw(),1);function jw(e,r){var t;if(typeof Dw.default>"u"||(0,Bw.default)(e)==null){if(Array.isArray(e)||(t=f3(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,s;return{s:function(){t=(0,Gw.default)(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){u=!0,s=l},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw s}}}}function f3(e,r){var t;if(e){if(typeof e=="string")return $w(e,r);var n=(0,Lw.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,Fw.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $w(e,r)}}function $w(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function $a(e){return function(){var r=Ce(fs.default.mark(function n(a){var o,u,s,c,l,f,p,v,d,h,m,y,b,q,I,E,S,T,w,C,j,qe,k,ee,xe,Q,L;return fs.default.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:o=e.exact,u=e.prefix||"",s=e.suffix||"",c=u+o+s,l=[],f=!0;case 6:p=a.currentChunk,v=p.data,d=[],h=jw(l),O.prev=10,h.s();case 12:if((m=h.n()).done){O.next=27;break}if(y=m.value,b=y.charactersMatched,y.endChunk===void 0&&(q=u.length+o.length-b,q<=v.length&&(y.endChunk=p,y.endIndex=q)),y.startChunk===void 0&&(I=u.length-b,(I<v.length||y.endChunk!==void 0)&&(y.startChunk=p,y.startIndex=I)),E=c.length-b,!(E<=v.length)){O.next=24;break}if(!(0,Uw.default)(v).call(v,c.substring(b))){O.next=22;break}return O.next=22,y;case 22:O.next=25;break;case 24:v===c.substring(b,b+v.length)&&(y.charactersMatched+=v.length,d.push(y));case 25:O.next=12;break;case 27:O.next=32;break;case 29:O.prev=29,O.t0=O.catch(10),h.e(O.t0);case 32:return O.prev=32,h.f(),O.finish(32);case 35:if(l=d,!(c.length<=v.length)){O.next=49;break}S=0;case 38:if(!(S<=v.length)){O.next=49;break}if(T=v.indexOf(c,S),T!==-1){O.next=42;break}return O.abrupt("break",49);case 42:if(S=T+1,!(T===0&&c.length===0&&!f)){O.next=45;break}return O.abrupt("continue",38);case 45:return O.next=47,{startChunk:p,startIndex:T+u.length,endChunk:p,endIndex:T+u.length+o.length};case 47:O.next=38;break;case 49:for(w=[],C=Math.max(v.length-c.length+1,0),j=function(We){var Qs=v[We];w=(0,Hw.default)(w).call(w,function(nE){return Qs===c[We-nE]}),Qs===c[0]&&w.push(We)},qe=C;qe<v.length;qe++)j(qe);k=jw(w);try{for(k.s();!(ee=k.n()).done;)xe=ee.value,Q=v.length-xe,L={charactersMatched:Q},Q>=u.length+o.length&&(L.endChunk=p,L.endIndex=xe+u.length+o.length),(Q>u.length||L.endChunk!==void 0)&&(L.startChunk=p,L.startIndex=xe+u.length),l.push(L)}catch(Pr){k.e(Pr)}finally{k.f()}f=!1;case 56:if(a.nextChunk()!==null){O.next=6;break}case 57:case"end":return O.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var m3=g(ce(),1);var p3=g(Ur(),1),v3=g(is(),1);var h3=g(ce(),1);var ln=g(sT(),1);var lT=g(ba(),1),fT=g(zt(),1);var ds=g(qa(),1),cT=g(Kt(),1);function nr(e,r){var t;return nr=ds.default?(0,cT.default)(t=ds.default).call(t):function(n,a){return n.__proto__=a,n},nr(e,r)}function ms(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,lT.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,fT.default)(e,"prototype",{writable:!1}),r&&nr(e,r)}function pT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function vT(e,r){if(r&&(Be(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return pT(e)}var dT=g(qa(),1),mT=g(Kt(),1),hs=g(ga(),1);function Or(e){var r;return Or=dT.default?(0,mT.default)(r=hs.default).call(r):function(t){return t.__proto__||(0,hs.default)(t)},Or(e)}var js=g(DO(),1),sC=g(ba(),1);var rC=g(eC(),1);function tC(e){try{var r;return(0,rC.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var aC=g(La(),1),iC=g(Xu(),1),oC=g(Kt(),1);var nC=g(La(),1);function Ms(){try{var e=!Boolean.prototype.valueOf.call((0,nC.default)(Boolean,[],function(){}))}catch{}return(Ms=function(){return!!e})()}function uC(e,r,t){if(Ms())return aC.default.apply(null,arguments);var n=[null];(0,iC.default)(n).apply(n,r);var a=new((0,oC.default)(e).apply(e,n));return t&&nr(a,t.prototype),a}function cn(e){var r=typeof js.default=="function"?new js.default:void 0;return cn=function(n){if(n===null||!tC(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,a)}function a(){return uC(n,arguments,Or(this).constructor)}return a.prototype=(0,sC.default)(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),nr(a,n)},cn(e)}function fC(e,r){var t=le(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),a=cC(e.startContainer,e.startOffset),o=De(a,2),u=o[0],s=o[1];for(n.currentNode=u;s===u.length&&n.nextNode();)u=n.currentNode,s=0;e.setStart(u,s);var c=cC(e.endContainer,e.endOffset),l=De(c,2),f=l[0],p=l[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function cC(e,r){var t;if(lC(e))return[e,r];var n;if(DG(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(lC(n))return[n,0];var a=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=a.createTreeWalker(a,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function lC(e){return e.nodeType===Node.TEXT_NODE}function DG(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function vC(e){var r=BG();return function(){var n=Or(e),a;if(r){var o=Or(this).constructor;a=(0,ln.default)(n,arguments,o)}else a=n.apply(this,arguments);return vT(this,a)}}function BG(){if(typeof Reflect>"u"||!ln.default||ln.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,ln.default)(Boolean,[],function(){})),!0}catch{return!1}}var Wa=function(e){ms(t,e);var r=vC(t);function t(n){return wr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(cn(TypeError)),GG=function(e){ms(t,e);var r=vC(t);function t(n){return wr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(cn(TypeError)),Cr=function(){function e(r){var t=this;if(wr(this,e),Tr(this,"scope",void 0),Tr(this,"iter",void 0),this.scope=tr(r),this.iter=le(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!pC(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Wa}}return on(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!pC(t))throw new Wa;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new GG;var n=t===this.scope.startContainer?this.scope.startOffset:0,a=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:a,data:t.data.substring(n,a),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=fC(t,this.scope),a=this.nodeToChunk(n.startContainer),o=n.startOffset-a.startOffset,u=this.nodeToChunk(n.endContainer),s=n.endOffset-u.startOffset;return{startChunk:a,startIndex:o,endChunk:u,endIndex:s}}},{key:"chunkRangeToRange",value:function(t){var n=le(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function pC(e){return e.nodeType===Node.TEXT_NODE}function dC(e,r){return Ls.apply(this,arguments)}function Ls(){return Ls=Sr($s.default.mark(function e(r,t){var n,a,o,u=arguments;return $s.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},a=tr(t??le(r)),o=new Cr(a),c.next=5,QS(o.rangeToChunkRange(r),function(){return new Cr(a)},n);case 5:return c.abrupt("return",c.sent);case 6:case"end":return c.stop()}},e)})),Ls.apply(this,arguments)}var Fs=g(ce(),1);function mC(e){var r=$a(e);return function(){var t=Ce(Fs.default.mark(function a(o){var u,s,c,l,f,p,v,d;return Fs.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new Cr(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof Wa)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:s=!0,c=!1,m.prev=13,f=it(r(u));case 15:return m.next=17,er(f.next());case 17:return p=m.sent,s=p.done,m.next=21,er(p.value);case 21:if(v=m.sent,s){m.next=29;break}return d=v,m.next=26,u.chunkRangeToRange(d);case 26:s=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),c=!0,l=m.t1;case 35:if(m.prev=35,m.prev=36,!(!s&&f.return!=null)){m.next=40;break}return m.next=40,er(f.return());case 40:if(m.prev=40,!c){m.next=43;break}throw l;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},a,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(a){return t.apply(this,arguments)}return n}()}var UG=g(ce(),1);var HG=g(ce(),1);var ZG=g(kC(),1),e5=g(Ur(),1),r5=g(Ln(),1),t5=g(ea(),1),n5=g(ra(),1),a5=g(ta(),1);async function PC(e,r){let t=await dC(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function Ka(e,r){let t=mC({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var Er="fb-highlight",Ds="fb-highlight-active";var fn=null;function RC(e){fn=e}function za(e,r){let t=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let n=_C(e,r);t.push(n)}else{let n=o5(e);for(let a=0;a<n.length;a++){let o=n[a],u=document.createRange();o===e.startContainer?(u.setStart(o,e.startOffset),u.setEnd(o,o.textContent.length)):o===e.endContainer?(u.setStart(o,0),u.setEnd(o,e.endOffset)):u.selectNodeContents(o),u.collapsed||t.push(_C(u,r))}}return t}function _C(e,r){let t=e.commonAncestorContainer;for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;let n=t,a=!1,o=null;for(;n;){if(n.tagName==="foreignObject"){a=!1;break}n.tagName==="text"&&n instanceof SVGElement&&(a=!0),n.tagName==="svg"&&(o=n),n=n.parentElement}if(a&&o)return i5(e,r,o);let u=document.createElement("mark");u.className=Er,u.dataset.commentId=r,u.addEventListener("click",()=>{fn&&fn(r)});try{e.surroundContents(u)}catch(s){return console.warn("[feedback-layer] Failed to create highlight:",s),null}return u}function i5(e,r,t){try{let n=e.getClientRects();if(n.length===0)return null;let a="http://www.w3.org/2000/svg",o=t.getScreenCTM();if(!o)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let u=e.commonAncestorContainer;for(;u&&u.nodeType!==Node.ELEMENT_NODE;)u=u.parentNode;let s=u,c=null;for(;s&&s!==t;){if(s.tagName==="text"){c=s.parentElement;break}s=s.parentElement}let l=c||t,f=o;l!==t&&l.getScreenCTM&&(f=l.getScreenCTM());let p=document.createElementNS(a,"g");p.setAttribute("class",Er),p.setAttribute("data-comment-id",r),p.style.cursor="pointer";for(let y=0;y<n.length;y++){let b=n[y],q=document.createElementNS(a,"rect"),I=t.createSVGPoint();I.x=b.left,I.y=b.top;let E=I.matrixTransform(f.inverse()),S=b.width/f.a,T=b.height/f.d;q.setAttribute("x",E.x),q.setAttribute("y",E.y),q.setAttribute("width",S),q.setAttribute("height",T),q.setAttribute("rx","2"),q.setAttribute("ry","2"),q.style.pointerEvents="none",p.appendChild(q)}l&&l!==t?l.appendChild(p):t.appendChild(p);let v=e.commonAncestorContainer;for(;v&&v.nodeType!==Node.ELEMENT_NODE;)v=v.parentNode;let d=new Set,h=v;for(;h&&h!==t;)h.tagName==="text"&&h instanceof SVGElement&&(d.add(h),h.querySelectorAll("tspan").forEach(b=>d.add(b))),h=h.parentElement;let m=y=>{y.preventDefault(),y.stopPropagation(),fn&&fn(r)};return d.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",m),y.dataset.fbCommentId=r}),p}catch(n){return console.warn("[feedback-layer] Failed to create SVG highlight:",n),null}}function Bs(e){document.querySelectorAll(`.${Er}[data-comment-id="${e}"]`).forEach(n=>{let a=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)a.removeChild(n);else{for(;n.firstChild;)a.insertBefore(n.firstChild,n);a.removeChild(n),a.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function AC(){document.querySelectorAll(`.${Er}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function Va(e){document.querySelectorAll(`.${Er}`).forEach(r=>{r.dataset.commentId===e?r.classList.add(Ds):r.classList.remove(Ds)})}function NC(e){let r=document.querySelector(`.${Er}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function Gs(e){let r="rgba(255, 212, 0, 0.12)",t="rgba(255, 212, 0, 0.35)";document.querySelectorAll(`.${Er}`).forEach(n=>{let a=n.dataset.commentId,o=e.has(a);n.classList.contains(Ds)||(n.tagName==="g"||n instanceof SVGElement?n.querySelectorAll("rect").forEach(s=>{s.setAttribute("fill-opacity",o?"0.12":"0.35")}):n.style.backgroundColor=o?r:t)})}function o5(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let a=document.createRange();return a.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,a)<0&&e.compareBoundaryPoints(Range.START_TO_END,a)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function MC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,a)=>{let o=[`**${a+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let s of u)o.push(`  - **[${s.author}]** (reply): ${s.body}`);return o.join(`
`)}).join(`

`)}function jC(e,r){let t=MC(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(a=>!a.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

## Original Document

\`\`\`html
${e}
\`\`\`

## Reviewer Feedback

${t}

## Instructions

1. Carefully read each piece of feedback and the highlighted text it refers to.
2. Revise the document HTML to address the feedback where appropriate.
3. Preserve the overall structure and formatting of the document.
4. After the revised HTML, include a brief changelog noting which feedback items you addressed and how.

Respond with:

### Revised Document
\`\`\`html
[your revised HTML here]
\`\`\`

### Changelog
[numbered list matching feedback numbers, explaining what you changed]`}function ar(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var u5=`
  .hf-overlay {
    position: fixed;
    inset: 0;
    z-index: 10001;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hf-modal {
    background: var(--remarq-bg-surface);
    border-radius: 12px;
    width: 90%;
    max-width: 800px;
    max-height: 85vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 20px 60px var(--remarq-shadow-strong);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    color: var(--remarq-text);
  }

  .hf-modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    border-bottom: 1px solid var(--remarq-border-subtle);
  }

  .hf-modal-header h2 {
    margin: 0;
    font-size: 18px;
    color: var(--remarq-text);
  }

  .hf-modal-close {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: var(--remarq-text-muted);
    padding: 0 4px;
  }

  .hf-modal-body {
    padding: 20px;
    overflow-y: auto;
    flex: 1;
  }

  .hf-modal-footer {
    padding: 12px 20px;
    border-top: 1px solid var(--remarq-border-subtle);
    display: flex;
    gap: 8px;
    justify-content: flex-end;
  }

  .hf-btn {
    border: none;
    border-radius: 6px;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
    font-family: inherit;
  }

  .hf-btn-primary {
    background: var(--remarq-accent);
    color: white;
  }
  .hf-btn-primary:hover { background: var(--remarq-accent-hover); }

  .hf-btn-secondary {
    background: var(--remarq-bg-secondary);
    color: var(--remarq-text-secondary);
  }
  .hf-btn-secondary:hover { background: var(--remarq-border-subtle); }

  .hf-prompt-area {
    width: 100%;
    min-height: 300px;
    border: 1px solid var(--remarq-border-input);
    border-radius: 6px;
    padding: 12px;
    font-family: "SF Mono", Monaco, "Cascadia Code", monospace;
    font-size: 12px;
    resize: vertical;
    box-sizing: border-box;
    background: var(--remarq-bg);
    color: var(--remarq-text);
  }

  .hf-status {
    padding: 12px;
    border-radius: 6px;
    margin-bottom: 12px;
    font-size: 14px;
  }

  .hf-status-info { background: var(--remarq-info-bg); color: var(--remarq-info-text); }
  .hf-status-success { background: var(--remarq-success-bg); color: var(--remarq-success-text); }
  .hf-status-error { background: var(--remarq-error-bg); color: var(--remarq-error-text); }
`,$C=null,LC=null;function FC(e,r){LC=e,$C=r,s5()}function s5(){let e=document.createElement("style");e.textContent=u5,document.head.appendChild(e)}function DC(){let e=$C(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let a=document.createElement("button");a.className="hf-modal-close",a.textContent="\xD7",a.addEventListener("click",()=>r.remove()),n.appendChild(a);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",p=>{p.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let s=document.querySelector(LC.contentSelector||"body").innerHTML,c=jC(s,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${c.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${ar(c)}</textarea>
  `;let l=document.createElement("button");l.className="hf-btn hf-btn-primary",l.textContent="Copy Prompt",l.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c),l.textContent="Copied!"}catch{l.textContent="Copy failed"}setTimeout(()=>l.textContent="Copy Prompt",2e3)}),u.appendChild(l);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function BC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function GC(e,r){return e.length>r?e.slice(0,r)+"...":e}function UC(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var pn=null;function WC(e){pn=document.createElement("div"),pn.className="fb-toast-container",e.appendChild(pn)}function Ir(e,r="success"){if(!pn)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>HC(t)),t.appendChild(o)}pn.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>HC(t),r==="error"?8e3:4e3)}function HC(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}function KC(e,r){let t;return(...n)=>{clearTimeout(t),t=setTimeout(()=>e(...n),r)}}var c5=320,VC="feedback-layer-commenter",G=null,He=null,Ue=null,Us=null,YC=null,Ws=null,Ks=null,zs=null,Vs=null,Hs=null,Ys=!1,JC=[],QC=new Set,XC=null;function ot(){return localStorage.getItem(VC)||""}function ZC({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:a,onSearch:o}){YC=e,Ws=r,Ks=t,zs=n,Vs=a,Hs=o,v5(),G=document.createElement("div"),G.className="fb-sidebar fb-sidebar-collapsed",G.innerHTML=`
    <div class="fb-sidebar-header">
      <strong>Feedback</strong>
      <div class="fb-sidebar-header-actions">
        <button class="fb-ai-btn" title="Send feedback to Claude">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"/></svg>
        </button>
        <button class="fb-sidebar-toggle" title="Close sidebar">&times;</button>
      </div>
    </div>
    <div class="fb-sidebar-content">
      <div class="fb-name-section">
        <label class="fb-label">Your name</label>
        <input type="text" class="fb-name-input" placeholder="Enter your name..."
               value="${ar(ot())}">
      </div>
      <div class="fb-filter-section">
        <input type="text" class="fb-search-input" placeholder="Search comments...">
        <select class="fb-author-filter">
          <option value="">All authors</option>
        </select>
        <label class="fb-filter-toggle">
          <input type="checkbox" class="fb-show-resolved-cb">
          <span>Show closed</span>
        </label>
      </div>
      <div class="fb-comment-list"></div>
      <div class="fb-form-section" style="display:none"></div>
    </div>
  `;let u=document.createElement("button");u.className="fb-sidebar-tab",u.textContent="Feedback",u.addEventListener("click",()=>vn()),document.body.appendChild(u),document.body.appendChild(G),WC(G),He=G.querySelector(".fb-comment-list"),Ue=G.querySelector(".fb-form-section");let s=G.querySelector(".fb-name-input");s.addEventListener("input",()=>{localStorage.setItem(VC,s.value.trim())}),G.querySelector(".fb-ai-btn").addEventListener("click",()=>DC()),G.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>l5());let f=G.querySelector(".fb-show-resolved-cb");f.addEventListener("change",()=>{Ys=f.checked,Ie(JC,QC,new Map,XC)});let p=G.querySelector(".fb-search-input"),v=G.querySelector(".fb-author-filter"),d=()=>{Hs&&Hs(p.value.trim(),v.value)};p.addEventListener("input",KC(d,300)),v.addEventListener("change",d)}function vn(){G.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden")}function l5(){G.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden")}function eE(e){if(vn(),!ot()){let n=G.querySelector(".fb-name-input");n.classList.add("fb-name-input-error"),setTimeout(()=>n.classList.remove("fb-name-input-error"),2e3)}Us=e,Ue.style.display="",Ue.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${ar(GC(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `;let r=Ue.querySelector(".fb-form-textarea");r.focus();let t=()=>{if(!ot()){let a=G.querySelector(".fb-name-input");a.focus(),a.classList.add("fb-name-input-error"),setTimeout(()=>a.classList.remove("fb-name-input-error"),2e3);return}let n=r.value.trim();n&&(YC({comment:n,commenter:ot()}),Ue.style.display="none",Us=null)};Ue.querySelector(".fb-submit-btn").addEventListener("click",t),r.addEventListener("keydown",n=>{n.key==="Enter"&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),t())}),Ue.querySelector(".fb-cancel-btn").addEventListener("click",()=>{Ue.style.display="none",Us=null}),Ue.scrollIntoView({behavior:"smooth",block:"nearest"})}function rE(e){let r=G.querySelector(".fb-author-filter"),t=r.value;r.innerHTML='<option value="">All authors</option>';for(let n of e.sort()){let a=document.createElement("option");a.value=n,a.textContent=n,r.appendChild(a)}e.includes(t)&&(r.value=t)}function Ie(e,r=new Set,t=new Map,n=null){JC=e,QC=r,XC=n,He.innerHTML="";let{topLevel:a,repliesByParent:o}=BC(e),u=a.slice().sort((f,p)=>{let v=t.get(f.id),d=t.get(p.id);return!v||!d?0:v.compareBoundaryPoints(Range.START_TO_START,d)}),s=u.filter(f=>{let p=r.has(f.id),v=f.status==="closed";return p||v&&Ys}),c=Ys?s:s.filter(f=>f.status!=="closed");if(u.length===0){He.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let l=u.filter(f=>!r.has(f.id)&&f.status!=="closed").length;if(c.length===0){l>0?He.innerHTML=`<div class="fb-empty">
        ${s.length} comment(s) resolved.
        ${l>0?`<br>${l} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:He.innerHTML=`<div class="fb-empty">All ${u.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let f of c){let p=document.createElement("div");p.className="fb-thread";let v=o.get(f.id)||[];n!==null&&(n.has(f.id)||v.some(m=>n.has(m.id))||p.classList.add("fb-thread-dimmed")),p.appendChild(zC(f,!1));for(let h of v)p.appendChild(zC(h,!0));let d=document.createElement("button");d.className="fb-reply-btn",d.textContent="Reply",d.addEventListener("click",h=>{h.stopPropagation(),f5(f.id,p,d)}),p.appendChild(d),He.appendChild(p)}}function zC(e,r){let t=e.status==="closed",n=document.createElement("div");return n.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":""),n.dataset.id=e.id,n.innerHTML=`
    <div class="fb-cmt-body">${ar(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${ar(e.author)}</span>
      <span class="fb-cmt-time">${UC(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
  `,r||(n.addEventListener("click",a=>{a.target.closest(".fb-cmt-delete")||a.target.closest(".fb-cmt-resolve")||a.target.closest(".fb-cmt-edit")||(Va(e.id),NC(e.id),He.querySelectorAll(".fb-cmt-card").forEach(o=>o.classList.remove("fb-cmt-active")),n.classList.add("fb-cmt-active"))}),n.querySelector(".fb-cmt-resolve").addEventListener("click",a=>{a.stopPropagation(),Ks&&Ks(e.id,!t)})),n.querySelector(".fb-cmt-edit").addEventListener("click",a=>{a.stopPropagation(),p5(e,n)}),n.querySelector(".fb-cmt-delete").addEventListener("click",a=>{a.stopPropagation(),Ws&&Ws(e.id)}),n}function f5(e,r,t){vn();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let a=document.createElement("div");a.className="fb-reply-form",a.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!ot()){let c=G.querySelector(".fb-name-input");c.focus(),c.classList.add("fb-name-input-error"),setTimeout(()=>c.classList.remove("fb-name-input-error"),2e3);return}let s=a.querySelector("textarea").value.trim();s&&(zs&&zs({parent_id:e,comment:s,commenter:ot()}),a.remove(),t.style.display="")};a.querySelector(".fb-reply-submit").addEventListener("click",o);let u=a.querySelector("textarea");u.addEventListener("keydown",s=>{s.key==="Enter"&&(s.metaKey||s.ctrlKey)&&(s.preventDefault(),o())}),a.querySelector(".fb-reply-cancel").addEventListener("click",()=>{a.remove(),t.style.display=""}),r.insertBefore(a,t),u.focus()}function p5(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${ar(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let a=t.querySelector("textarea");a.focus(),a.setSelectionRange(a.value.length,a.value.length);let o=()=>{let u=a.value.trim();u&&Vs&&Vs(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),a.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function tE(e){let r=He.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(He.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function v5(){let e=document.createElement("style");e.textContent=`
    /* \u2500\u2500 Light theme variables (default) \u2500\u2500 */
    [data-remarq-theme] {
      --remarq-bg: #fafafa;
      --remarq-bg-surface: #fff;
      --remarq-bg-hover: #f3f0ff;
      --remarq-bg-secondary: #f3f4f6;

      --remarq-text: #333;
      --remarq-text-secondary: #555;
      --remarq-text-muted: #666;
      --remarq-text-faint: #999;

      --remarq-border: #e0e0e0;
      --remarq-border-subtle: #e5e7eb;
      --remarq-border-input: #d1d5db;

      --remarq-accent: #7c3aed;
      --remarq-accent-hover: #6d28d9;
      --remarq-accent-ring: rgba(124,58,237,0.15);
      --remarq-accent-glow: rgba(124,58,237,0.12);

      --remarq-success: #16a34a;
      --remarq-danger: #ef4444;
      --remarq-icon-muted: #aaa;
      --remarq-icon-faint: #ccc;

      --remarq-info-bg: #eff6ff;
      --remarq-info-text: #1e40af;
      --remarq-success-bg: #f0fdf4;
      --remarq-success-text: #166534;
      --remarq-error-bg: #fef2f2;
      --remarq-error-text: #991b1b;

      --remarq-highlight: rgba(255, 212, 0, 0.35);
      --remarq-highlight-active: rgba(255, 180, 0, 0.55);

      --remarq-shadow: rgba(0,0,0,0.08);
      --remarq-shadow-strong: rgba(0,0,0,0.15);
    }

    /* \u2500\u2500 Dark theme overrides \u2500\u2500 */
    [data-remarq-theme="dark"] {
      --remarq-bg: #1e1e2e;
      --remarq-bg-surface: #282840;
      --remarq-bg-hover: #33305a;
      --remarq-bg-secondary: #313148;

      --remarq-text: #e0e0e6;
      --remarq-text-secondary: #b0b0be;
      --remarq-text-muted: #9090a0;
      --remarq-text-faint: #6e6e82;

      --remarq-border: #3a3a52;
      --remarq-border-subtle: #33334a;
      --remarq-border-input: #4a4a62;

      --remarq-accent: #a78bfa;
      --remarq-accent-hover: #8b5cf6;
      --remarq-accent-ring: rgba(167,139,250,0.25);
      --remarq-accent-glow: rgba(167,139,250,0.18);

      --remarq-success: #4ade80;
      --remarq-danger: #f87171;
      --remarq-icon-muted: #6e6e82;
      --remarq-icon-faint: #4a4a62;

      --remarq-info-bg: #1e2a4a;
      --remarq-info-text: #93b5f5;
      --remarq-success-bg: #1a2e1a;
      --remarq-success-text: #6ee7a0;
      --remarq-error-bg: #2e1a1a;
      --remarq-error-text: #fca5a5;

      --remarq-highlight: rgba(255, 212, 0, 0.25);
      --remarq-highlight-active: rgba(255, 180, 0, 0.45);

      --remarq-shadow: rgba(0,0,0,0.3);
      --remarq-shadow-strong: rgba(0,0,0,0.5);
    }

    @media (prefers-color-scheme: dark) {
      [data-remarq-theme="auto"] {
        --remarq-bg: #1e1e2e;
        --remarq-bg-surface: #282840;
        --remarq-bg-hover: #33305a;
        --remarq-bg-secondary: #313148;

        --remarq-text: #e0e0e6;
        --remarq-text-secondary: #b0b0be;
        --remarq-text-muted: #9090a0;
        --remarq-text-faint: #6e6e82;

        --remarq-border: #3a3a52;
        --remarq-border-subtle: #33334a;
        --remarq-border-input: #4a4a62;

        --remarq-accent: #a78bfa;
        --remarq-accent-hover: #8b5cf6;
        --remarq-accent-ring: rgba(167,139,250,0.25);
        --remarq-accent-glow: rgba(167,139,250,0.18);

        --remarq-success: #4ade80;
        --remarq-danger: #f87171;
        --remarq-icon-muted: #6e6e82;
        --remarq-icon-faint: #4a4a62;

        --remarq-info-bg: #1e2a4a;
        --remarq-info-text: #93b5f5;
        --remarq-success-bg: #1a2e1a;
        --remarq-success-text: #6ee7a0;
        --remarq-error-bg: #2e1a1a;
        --remarq-error-text: #fca5a5;

        --remarq-highlight: rgba(255, 212, 0, 0.25);
        --remarq-highlight-active: rgba(255, 180, 0, 0.45);

        --remarq-shadow: rgba(0,0,0,0.3);
        --remarq-shadow-strong: rgba(0,0,0,0.5);
      }
    }

    /* \u2500\u2500 Highlight styles (applied to host page content) \u2500\u2500 */
    .fb-highlight {
      background-color: var(--remarq-highlight);
      cursor: pointer;
      border-radius: 2px;
    }
    .fb-highlight-active {
      background-color: var(--remarq-highlight-active);
    }
    .fb-highlight rect {
      fill: var(--remarq-highlight);
    }
    .fb-highlight-active rect {
      fill: var(--remarq-highlight-active);
    }

    /* \u2500\u2500 Name input error state \u2500\u2500 */
    .fb-name-input-error {
      outline: 2px solid var(--remarq-danger) !important;
    }

    /* \u2500\u2500 Sidebar \u2500\u2500 */
    .fb-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: ${c5}px;
      height: 100vh;
      background: var(--remarq-bg);
      border-left: 1px solid var(--remarq-border);
      z-index: 9999;
      display: flex;
      flex-direction: column;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 14px;
      color: var(--remarq-text);
      transition: transform 0.25s ease;
      box-shadow: -2px 0 8px var(--remarq-shadow);
    }
    .fb-sidebar-collapsed {
      transform: translateX(100%);
    }
    .fb-sidebar-tab {
      position: fixed;
      top: 50%;
      right: 0;
      z-index: 9998;
      transform: translateY(-50%) rotate(-90deg);
      transform-origin: bottom right;
      background: var(--remarq-accent);
      color: white;
      border: none;
      border-radius: 6px 6px 0 0;
      padding: 6px 16px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      box-shadow: -2px 0 6px var(--remarq-shadow-strong);
      transition: opacity 0.2s;
    }
    .fb-sidebar-tab:hover {
      background: var(--remarq-accent-hover);
    }
    .fb-sidebar-tab-hidden {
      opacity: 0;
      pointer-events: none;
    }
    .fb-sidebar-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 14px;
      border-bottom: 1px solid var(--remarq-border);
      background: var(--remarq-bg-surface);
      font-size: 15px;
    }
    .fb-sidebar-header-actions {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .fb-ai-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--remarq-accent);
      padding: 4px;
      line-height: 1;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .fb-ai-btn:hover {
      background: var(--remarq-bg-hover);
    }
    .fb-sidebar-toggle {
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: var(--remarq-text-muted);
      padding: 0 4px;
      line-height: 1;
    }
    .fb-sidebar-content {
      flex: 1;
      overflow-y: auto;
      padding: 12px;
    }
    .fb-label {
      display: block;
      font-size: 12px;
      font-weight: 600;
      color: var(--remarq-text-muted);
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .fb-name-input {
      width: 100%;
      padding: 8px 10px;
      border: 1px solid var(--remarq-border-input);
      border-radius: 6px;
      font-size: 14px;
      box-sizing: border-box;
      background: var(--remarq-bg-surface);
      color: var(--remarq-text);
    }
    .fb-name-input:focus {
      outline: none;
      border-color: var(--remarq-accent);
      box-shadow: 0 0 0 2px var(--remarq-accent-ring);
    }
    .fb-name-section {
      margin-bottom: 16px;
    }
    .fb-comment-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .fb-empty {
      color: var(--remarq-text-faint);
      font-size: 13px;
      text-align: center;
      padding: 24px 12px;
    }
    .fb-cmt-card {
      background: var(--remarq-bg-surface);
      border: 1px solid var(--remarq-border-subtle);
      border-radius: 8px;
      padding: 10px 12px;
      cursor: pointer;
      transition: border-color 0.15s;
    }
    .fb-cmt-card:hover {
      border-color: var(--remarq-accent-ring);
    }
    .fb-cmt-active {
      border-color: var(--remarq-accent);
      box-shadow: 0 0 0 2px var(--remarq-accent-glow);
    }
    .fb-cmt-quote {
      font-size: 12px;
      color: var(--remarq-text-faint);
      font-style: italic;
      margin-bottom: 6px;
      line-height: 1.4;
    }
    .fb-cmt-body {
      font-size: 13px;
      line-height: 1.5;
      margin-bottom: 6px;
    }
    .fb-cmt-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      color: var(--remarq-text-faint);
    }
    .fb-cmt-author {
      font-weight: 600;
      color: var(--remarq-accent);
    }
    .fb-cmt-resolve {
      background: none;
      border: none;
      color: var(--remarq-icon-muted);
      cursor: pointer;
      font-size: 14px;
      padding: 0 2px;
      line-height: 1;
      margin-left: auto;
    }
    .fb-cmt-resolve:hover {
      color: var(--remarq-success);
    }
    .fb-cmt-edit {
      background: none;
      border: none;
      color: var(--remarq-icon-muted);
      cursor: pointer;
      font-size: 14px;
      padding: 0 2px;
      line-height: 1;
    }
    .fb-cmt-edit:hover {
      color: var(--remarq-accent);
    }
    .fb-cmt-delete {
      background: none;
      border: none;
      color: var(--remarq-icon-faint);
      cursor: pointer;
      font-size: 16px;
      padding: 0 2px;
      line-height: 1;
    }
    .fb-cmt-delete:hover {
      color: var(--remarq-danger);
    }
    .fb-cmt-closed {
      opacity: 0.5;
      border-left: 3px solid var(--remarq-success);
    }
    .fb-cmt-closed .fb-cmt-body {
      text-decoration: line-through;
    }
    .fb-cmt-closed .fb-cmt-resolve {
      color: var(--remarq-success);
    }
    .fb-filter-section {
      margin-bottom: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .fb-search-input {
      width: 100%;
      padding: 6px 10px;
      border: 1px solid var(--remarq-border-input);
      border-radius: 6px;
      font-size: 13px;
      box-sizing: border-box;
      font-family: inherit;
      background: var(--remarq-bg-surface);
      color: var(--remarq-text);
    }
    .fb-search-input:focus {
      outline: none;
      border-color: var(--remarq-accent);
      box-shadow: 0 0 0 2px var(--remarq-accent-ring);
    }
    .fb-author-filter {
      width: 100%;
      padding: 6px 10px;
      border: 1px solid var(--remarq-border-input);
      border-radius: 6px;
      font-size: 13px;
      box-sizing: border-box;
      font-family: inherit;
      background: var(--remarq-bg-surface);
      color: var(--remarq-text);
      cursor: pointer;
    }
    .fb-author-filter:focus {
      outline: none;
      border-color: var(--remarq-accent);
      box-shadow: 0 0 0 2px var(--remarq-accent-ring);
    }
    .fb-thread-dimmed {
      opacity: 0.35;
    }
    .fb-filter-toggle {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: var(--remarq-text-faint);
      cursor: pointer;
    }
    .fb-filter-toggle input {
      cursor: pointer;
    }
    .fb-thread {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .fb-cmt-reply {
      margin-left: 20px;
      border-left: 2px solid var(--remarq-border-subtle);
      font-size: 13px;
    }
    .fb-cmt-reply .fb-cmt-body {
      font-size: 12px;
    }
    .fb-reply-btn {
      align-self: flex-start;
      margin-left: 20px;
      background: none;
      border: none;
      color: var(--remarq-accent);
      cursor: pointer;
      font-size: 12px;
      font-weight: 500;
      padding: 2px 0;
      font-family: inherit;
    }
    .fb-reply-btn:hover {
      text-decoration: underline;
    }
    .fb-reply-form {
      margin-left: 20px;
      padding: 8px;
      background: var(--remarq-bg-surface);
      border: 1px solid var(--remarq-border-input);
      border-radius: 6px;
    }
    .fb-reply-form .fb-form-textarea {
      font-size: 12px;
      min-height: unset;
    }
    .fb-reply-form .fb-form-actions {
      margin-top: 6px;
    }
    .fb-form-section {
      margin-top: 12px;
    }
    .fb-form-card {
      background: var(--remarq-bg-surface);
      border: 2px solid var(--remarq-accent);
      border-radius: 8px;
      padding: 12px;
    }
    .fb-form-quote {
      font-size: 12px;
      color: var(--remarq-text-faint);
      font-style: italic;
      margin-bottom: 8px;
    }
    .fb-form-textarea {
      width: 100%;
      border: 1px solid var(--remarq-border-input);
      border-radius: 6px;
      padding: 8px 10px;
      font-size: 13px;
      font-family: inherit;
      resize: vertical;
      box-sizing: border-box;
      background: var(--remarq-bg-surface);
      color: var(--remarq-text);
    }
    .fb-form-textarea:focus {
      outline: none;
      border-color: var(--remarq-accent);
    }
    .fb-form-actions {
      display: flex;
      gap: 8px;
      margin-top: 8px;
    }
    .fb-btn {
      border: none;
      border-radius: 6px;
      padding: 6px 14px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      font-family: inherit;
    }
    .fb-btn-primary {
      background: var(--remarq-accent);
      color: white;
    }
    .fb-btn-primary:hover { background: var(--remarq-accent-hover); }
    .fb-btn-cancel {
      background: var(--remarq-bg-secondary);
      color: var(--remarq-text-secondary);
    }
    .fb-btn-cancel:hover { background: var(--remarq-border-subtle); }

    /* Annotate tooltip (appears on text selection) */
    .fb-annotate-tooltip {
      position: absolute;
      z-index: 10001;
      background: var(--remarq-accent);
      color: white;
      border: none;
      border-radius: 18px;
      padding: 8px 16px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      box-shadow: 0 4px 12px var(--remarq-accent-ring), 0 2px 4px var(--remarq-shadow);
      white-space: nowrap;
      transition: all 0.2s ease;
      animation: fb-tooltip-appear 0.2s ease;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .fb-annotate-tooltip svg {
      width: 14px;
      height: 14px;
    }
    .fb-annotate-tooltip::after {
      content: '';
      position: absolute;
      top: -6px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid var(--remarq-accent);
      filter: drop-shadow(0 -2px 2px var(--remarq-shadow));
    }
    .fb-annotate-tooltip:hover {
      background: var(--remarq-accent-hover);
      transform: translateY(2px);
      box-shadow: 0 6px 16px var(--remarq-accent-ring), 0 2px 6px var(--remarq-shadow-strong);
    }
    .fb-annotate-tooltip:hover::after {
      border-bottom-color: var(--remarq-accent-hover);
    }
    @media (pointer: coarse) {
      .fb-annotate-tooltip {
        min-height: 44px;
        padding: 12px 20px;
        font-size: 15px;
      }
      .fb-annotate-tooltip svg {
        width: 18px;
        height: 18px;
      }
    }
    @keyframes fb-tooltip-appear {
      from {
        opacity: 0;
        transform: translateY(4px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Toast notifications */
    .fb-toast-container {
      position: absolute;
      bottom: 12px;
      left: 12px;
      right: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      pointer-events: none;
    }
    .fb-toast {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding: 10px 14px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      color: #fff;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      pointer-events: auto;
      opacity: 0;
      transform: translateY(100%);
      transition: opacity 0.2s ease, transform 0.2s ease;
    }
    .fb-toast-visible {
      opacity: 1;
      transform: translateY(0);
    }
    .fb-toast-success {
      background: #16a34a;
    }
    .fb-toast-error {
      background: #dc2626;
    }
    .fb-toast-dismiss {
      background: none;
      border: none;
      color: rgba(255,255,255,0.8);
      font-size: 18px;
      cursor: pointer;
      padding: 0 2px;
      line-height: 1;
      flex-shrink: 0;
    }
    .fb-toast-dismiss:hover {
      color: #fff;
    }
  `,document.head.appendChild(e)}var ut=null,mn=null,hn=null,D=[],kr=null,ge=null,oe=new Set,be=new Map,ke=null;function d5(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null,theme:e?.dataset.theme||"auto",apiKey:e?.dataset.apiKey||null};Zs(r.apiUrl),r.apiKey&&ec(r.apiKey);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{ut=document.querySelector(r.contentSelector)||document.body,mn=r.documentUri||window.location.origin+window.location.pathname,hn=r.documentId||null,document.documentElement.dataset.remarqTheme=r.theme,ZC({onSubmit:q5,onDelete:T5,onResolve:x5,onReply:S5,onEdit:w5,onSearch:b5}),RC(a=>{vn(),tE(a),Va(a)}),y5(),await t(),m5(),FC(r,()=>D)}catch(a){console.error("[feedback-layer] Boot failed:",a)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function m5(){try{D=await Qa(mn,hn),oe=await h5(D),Ya(),Ie(D,oe,be,ke)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),Ir(`Failed to load comments: ${e.message}`,"error")}}function Ya(){let e=[...new Set(D.map(r=>r.author))];rE(e)}async function h5(e){AC();let r=new Set;be.clear();for(let t of e)if(!t.parent)try{let n=await Ka({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ut);n&&t.status!=="closed"?(za(n,t.id),r.add(t.id),be.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),be.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function y5(){document.addEventListener("mouseup",Js),document.addEventListener("keyup",Js),document.addEventListener("touchend",Js)}function Js(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){dn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){dn();return}if(!ut.contains(r.commonAncestorContainer)){dn();return}g5(r)},10)}function g5(e){dn();let r=e.getBoundingClientRect();ge=document.createElement("button"),ge.className="fb-annotate-tooltip",ge.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',ge.style.top=window.scrollY+r.bottom+8+"px",ge.style.left=window.scrollX+r.left+r.width/2-40+"px";let t=async n=>{n.preventDefault(),n.stopPropagation();let a=window.getSelection();if(!a||a.isCollapsed)return;let o=a.getRangeAt(0);try{kr=await PC(o,ut),eE(kr.exact)}catch(u){console.error("[feedback-layer] Failed to create selector:",u)}dn()};ge.addEventListener("mousedown",t),ge.addEventListener("touchstart",t),document.body.appendChild(ge)}function dn(){ge&&(ge.remove(),ge=null)}async function b5(e,r){if(!e&&!r){ke=null,Ie(D,oe,be,null),Gs(new Set);return}try{let t=await Qa(mn,hn,{search:e,author:r});ke=new Set(t.map(a=>a.id)),Ie(D,oe,be,ke);let n=new Set;for(let a of D)!a.parent&&oe.has(a.id)&&!ke.has(a.id)&&n.add(a.id);Gs(n)}catch(t){console.error("[feedback-layer] Search failed:",t)}}async function q5({comment:e,commenter:r}){if(kr){try{let t=await Xa({uri:mn,document:hn,quote:kr.exact,prefix:kr.prefix,suffix:kr.suffix,body:e,author:r});D.push(t);let n=await Ka({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ut);n&&(za(n,t.id),oe.add(t.id)),Ya(),Ie(D,oe,be,ke),window.getSelection().removeAllRanges()}catch(t){console.error("[feedback-layer] Failed to create comment:",t),Ir(`Failed to save comment: ${t.message}`,"error")}kr=null}}async function x5(e,r){try{let n=await tc(e,r?"closed":"open"),a=D.findIndex(o=>o.id===e);if(a!==-1&&(D[a]=n),r)Bs(e);else{let o=n,u=await Ka({exact:o.quote,prefix:o.prefix,suffix:o.suffix},ut);u?(za(u,o.id),oe.add(o.id)):oe.delete(o.id)}Ie(D,oe,be,ke)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),Ir(`Failed to update comment: ${t.message}`,"error")}}async function S5({parent_id:e,comment:r,commenter:t}){try{let n=await Xa({uri:mn,document:hn,body:r,author:t,parent:e});D.push(n),Ya(),Ie(D,oe,be,ke)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),Ir(`Failed to save reply: ${n.message}`,"error")}}async function w5(e,r){try{let t=await rc(e,{body:r}),n=D.findIndex(a=>a.id===e);n!==-1&&(D[n]=t),Ie(D,oe,be,ke)}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),Ir(`Failed to update comment: ${t.message}`,"error")}}async function T5(e){try{await nc(e),Bs(e),oe.delete(e),D=D.filter(r=>r.id!==e&&r.parent!==e),Ya(),Ie(D,oe,be,ke)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),Ir(`Failed to delete comment: ${r.message}`,"error")}}try{d5()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
/*! Bundled license information:

@babel/runtime-corejs3/helpers/regenerator.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE *)

@apache-annotator/dom/lib/owner-document.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/to-range.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/css.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/range/cartesian.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/range/match.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/range/index.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/selector/lib/text/chunker.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/selector/lib/text/seeker.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/selector/lib/text/describe-text-quote.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/selector/lib/text/match-text-quote.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/selector/lib/text/code-point-seeker.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/selector/lib/text/describe-text-position.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/selector/lib/text/match-text-position.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/selector/lib/text/index.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/selector/lib/index.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/normalize-range.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/text-node-chunker.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/text-quote/describe.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/text-quote/match.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/text-quote/index.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/text-position/describe.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/text-position/match.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/text-position/index.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/highlight-text.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)

@apache-annotator/dom/lib/index.js:
  (**
   * SPDX-FileCopyrightText: 2016-2021 The Apache Software Foundation
   * SPDX-License-Identifier: Apache-2.0
   * @license
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   *)
*/
