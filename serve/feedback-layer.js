var FeedbackLayer=(()=>{var iE=Object.create;var Qs=Object.defineProperty;var aE=Object.getOwnPropertyDescriptor;var oE=Object.getOwnPropertyNames;var uE=Object.getPrototypeOf,sE=Object.prototype.hasOwnProperty;var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var cE=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of oE(r))!sE.call(e,i)&&i!==t&&Qs(e,i,{get:()=>r[i],enumerable:!(n=aE(r,i))||n.enumerable});return e};var g=(e,r,t)=>(t=e!=null?iE(uE(e)):{},cE(r||!e||!e.__esModule?Qs(t,"default",{value:e,enumerable:!0}):t,e));var P=a((E5,nc)=>{"use strict";nc.exports=function(e){try{return!!e()}catch{return!0}}});var Rr=a((I5,ic)=>{"use strict";var lE=P();ic.exports=!lE(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var A=a((k5,uc)=>{"use strict";var ac=Rr(),oc=Function.prototype,Zi=oc.call,fE=ac&&oc.bind.bind(Zi,Zi);uc.exports=ac?fE:function(e){return function(){return Zi.apply(e,arguments)}}});var U=a((P5,sc)=>{"use strict";var pE=A();sc.exports=pE({}.isPrototypeOf)});var _=a((ea,cc)=>{"use strict";var lt=function(e){return e&&e.Math===Math&&e};cc.exports=lt(typeof globalThis=="object"&&globalThis)||lt(typeof window=="object"&&window)||lt(typeof self=="object"&&self)||lt(typeof global=="object"&&global)||lt(typeof ea=="object"&&ea)||function(){return this}()||Function("return this")()});var Ar=a((_5,vc)=>{"use strict";var vE=Rr(),pc=Function.prototype,lc=pc.apply,fc=pc.call;vc.exports=typeof Reflect=="object"&&Reflect.apply||(vE?fc.bind(lc):function(){return fc.apply(lc,arguments)})});var xe=a((R5,mc)=>{"use strict";var dc=A(),dE=dc({}.toString),mE=dc("".slice);mc.exports=function(e){return mE(dE(e),8,-1)}});var ft=a((A5,hc)=>{"use strict";var hE=xe(),yE=A();hc.exports=function(e){if(hE(e)==="Function")return yE(e)}});var N=a((N5,yc)=>{"use strict";var ra=typeof document=="object"&&document.all;yc.exports=typeof ra>"u"&&ra!==void 0?function(e){return typeof e=="function"||e===ra}:function(e){return typeof e=="function"}});var W=a((M5,gc)=>{"use strict";var gE=P();gc.exports=!gE(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var B=a((j5,bc)=>{"use strict";var bE=Rr(),yn=Function.prototype.call;bc.exports=bE?yn.bind(yn):function(){return yn.apply(yn,arguments)}});var ta=a(Sc=>{"use strict";var qc={}.propertyIsEnumerable,xc=Object.getOwnPropertyDescriptor,qE=xc&&!qc.call({1:2},1);Sc.f=qE?function(r){var t=xc(this,r);return!!t&&t.enumerable}:qc});var Ke=a((L5,wc)=>{"use strict";wc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var gn=a((F5,Tc)=>{"use strict";var xE=A(),SE=P(),wE=xe(),na=Object,TE=xE("".split);Tc.exports=SE(function(){return!na("z").propertyIsEnumerable(0)})?function(e){return wE(e)==="String"?TE(e,""):na(e)}:na});var ar=a((D5,Oc)=>{"use strict";Oc.exports=function(e){return e==null}});var or=a((B5,Cc)=>{"use strict";var OE=ar(),CE=TypeError;Cc.exports=function(e){if(OE(e))throw new CE("Can't call method on "+e);return e}});var Pe=a((G5,Ec)=>{"use strict";var EE=gn(),IE=or();Ec.exports=function(e){return EE(IE(e))}});var $=a((U5,Ic)=>{"use strict";var kE=N();Ic.exports=function(e){return typeof e=="object"?e!==null:kE(e)}});var V=a((W5,kc)=>{"use strict";kc.exports={}});var H=a((H5,_c)=>{"use strict";var ia=V(),aa=_(),PE=N(),Pc=function(e){return PE(e)?e:void 0};_c.exports=function(e,r){return arguments.length<2?Pc(ia[e])||Pc(aa[e]):ia[e]&&ia[e][r]||aa[e]&&aa[e][r]}});var Nr=a((K5,Nc)=>{"use strict";var _E=_(),Rc=_E.navigator,Ac=Rc&&Rc.userAgent;Nc.exports=Ac?String(Ac):""});var Mr=a((z5,Dc)=>{"use strict";var Fc=_(),oa=Nr(),Mc=Fc.process,jc=Fc.Deno,$c=Mc&&Mc.versions||jc&&jc.version,Lc=$c&&$c.v8,me,bn;Lc&&(me=Lc.split("."),bn=me[0]>0&&me[0]<4?1:+(me[0]+me[1]));!bn&&oa&&(me=oa.match(/Edge\/(\d+)/),(!me||me[1]>=74)&&(me=oa.match(/Chrome\/(\d+)/),me&&(bn=+me[1])));Dc.exports=bn});var ur=a((V5,Gc)=>{"use strict";var Bc=Mr(),RE=P(),AE=_(),NE=AE.String;Gc.exports=!!Object.getOwnPropertySymbols&&!RE(function(){var e=Symbol("symbol detection");return!NE(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Bc&&Bc<41})});var ua=a((Y5,Uc)=>{"use strict";var ME=ur();Uc.exports=ME&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var jr=a((J5,Wc)=>{"use strict";var jE=H(),$E=N(),LE=U(),FE=ua(),DE=Object;Wc.exports=FE?function(e){return typeof e=="symbol"}:function(e){var r=jE("Symbol");return $E(r)&&LE(r.prototype,DE(e))}});var ze=a((Q5,Hc)=>{"use strict";var BE=String;Hc.exports=function(e){try{return BE(e)}catch{return"Object"}}});var F=a((X5,Kc)=>{"use strict";var GE=N(),UE=ze(),WE=TypeError;Kc.exports=function(e){if(GE(e))return e;throw new WE(UE(e)+" is not a function")}});var qn=a((Z5,zc)=>{"use strict";var HE=F(),KE=ar();zc.exports=function(e,r){var t=e[r];return KE(t)?void 0:HE(t)}});var Yc=a((eU,Vc)=>{"use strict";var sa=B(),ca=N(),la=$(),zE=TypeError;Vc.exports=function(e,r){var t,n;if(r==="string"&&ca(t=e.toString)&&!la(n=sa(t,e))||ca(t=e.valueOf)&&!la(n=sa(t,e))||r!=="string"&&ca(t=e.toString)&&!la(n=sa(t,e)))return n;throw new zE("Can't convert object to primitive value")}});var Z=a((rU,Jc)=>{"use strict";Jc.exports=!0});var Zc=a((tU,Xc)=>{"use strict";var Qc=_(),VE=Object.defineProperty;Xc.exports=function(e,r){try{VE(Qc,e,{value:r,configurable:!0,writable:!0})}catch{Qc[e]=r}return r}});var pt=a((nU,tl)=>{"use strict";var YE=Z(),JE=_(),QE=Zc(),el="__core-js_shared__",rl=tl.exports=JE[el]||QE(el,{});(rl.versions||(rl.versions=[])).push({version:"3.48.0",mode:YE?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var sr=a((iU,il)=>{"use strict";var nl=pt();il.exports=function(e,r){return nl[e]||(nl[e]=r||{})}});var re=a((aU,al)=>{"use strict";var XE=or(),ZE=Object;al.exports=function(e){return ZE(XE(e))}});var K=a((oU,ol)=>{"use strict";var e0=A(),r0=re(),t0=e0({}.hasOwnProperty);ol.exports=Object.hasOwn||function(r,t){return t0(r0(r),t)}});var $r=a((uU,ul)=>{"use strict";var n0=A(),i0=0,a0=Math.random(),o0=n0(1.1.toString);ul.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+o0(++i0+a0,36)}});var R=a((sU,cl)=>{"use strict";var u0=_(),s0=sr(),sl=K(),c0=$r(),l0=ur(),f0=ua(),Lr=u0.Symbol,fa=s0("wks"),p0=f0?Lr.for||Lr:Lr&&Lr.withoutSetter||c0;cl.exports=function(e){return sl(fa,e)||(fa[e]=l0&&sl(Lr,e)?Lr[e]:p0("Symbol."+e)),fa[e]}});var vl=a((cU,pl)=>{"use strict";var v0=B(),ll=$(),fl=jr(),d0=qn(),m0=Yc(),h0=R(),y0=TypeError,g0=h0("toPrimitive");pl.exports=function(e,r){if(!ll(e)||fl(e))return e;var t=d0(e,g0),n;if(t){if(r===void 0&&(r="default"),n=v0(t,e,r),!ll(n)||fl(n))return n;throw new y0("Can't convert object to primitive value")}return r===void 0&&(r="number"),m0(e,r)}});var xn=a((lU,dl)=>{"use strict";var b0=vl(),q0=jr();dl.exports=function(e){var r=b0(e,"string");return q0(r)?r:r+""}});var Sn=a((fU,hl)=>{"use strict";var x0=_(),ml=$(),pa=x0.document,S0=ml(pa)&&ml(pa.createElement);hl.exports=function(e){return S0?pa.createElement(e):{}}});var va=a((pU,yl)=>{"use strict";var w0=W(),T0=P(),O0=Sn();yl.exports=!w0&&!T0(function(){return Object.defineProperty(O0("div"),"a",{get:function(){return 7}}).a!==7})});var vt=a(bl=>{"use strict";var C0=W(),E0=B(),I0=ta(),k0=Ke(),P0=Pe(),_0=xn(),R0=K(),A0=va(),gl=Object.getOwnPropertyDescriptor;bl.f=C0?gl:function(r,t){if(r=P0(r),t=_0(t),A0)try{return gl(r,t)}catch{}if(R0(r,t))return k0(!E0(I0.f,r,t),r[t])}});var da=a((dU,ql)=>{"use strict";var N0=P(),M0=N(),j0=/#|\.prototype\./,dt=function(e,r){var t=L0[$0(e)];return t===D0?!0:t===F0?!1:M0(r)?N0(r):!!r},$0=dt.normalize=function(e){return String(e).replace(j0,".").toLowerCase()},L0=dt.data={},F0=dt.NATIVE="N",D0=dt.POLYFILL="P";ql.exports=dt});var Y=a((mU,Sl)=>{"use strict";var xl=ft(),B0=F(),G0=Rr(),U0=xl(xl.bind);Sl.exports=function(e,r){return B0(e),r===void 0?e:G0?U0(e,r):function(){return e.apply(r,arguments)}}});var ma=a((hU,wl)=>{"use strict";var W0=W(),H0=P();wl.exports=W0&&H0(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var X=a((yU,Tl)=>{"use strict";var K0=$(),z0=String,V0=TypeError;Tl.exports=function(e){if(K0(e))return e;throw new V0(z0(e)+" is not an object")}});var te=a(Cl=>{"use strict";var Y0=W(),J0=va(),Q0=ma(),wn=X(),Ol=xn(),X0=TypeError,ha=Object.defineProperty,Z0=Object.getOwnPropertyDescriptor,ya="enumerable",ga="configurable",ba="writable";Cl.f=Y0?Q0?function(r,t,n){if(wn(r),t=Ol(t),wn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&ba in n&&!n[ba]){var i=Z0(r,t);i&&i[ba]&&(r[t]=n.value,n={configurable:ga in n?n[ga]:i[ga],enumerable:ya in n?n[ya]:i[ya],writable:!1})}return ha(r,t,n)}:ha:function(r,t,n){if(wn(r),t=Ol(t),wn(n),J0)try{return ha(r,t,n)}catch{}if("get"in n||"set"in n)throw new X0("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var Se=a((bU,El)=>{"use strict";var eI=W(),rI=te(),tI=Ke();El.exports=eI?function(e,r,t){return rI.f(e,r,tI(1,t))}:function(e,r,t){return e[r]=t,e}});var x=a((qU,kl)=>{"use strict";var mt=_(),nI=Ar(),iI=ft(),aI=N(),oI=vt().f,uI=da(),Fr=V(),sI=Y(),Dr=Se(),Il=K();pt();var cI=function(e){var r=function(t,n,i){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return nI(e,this,arguments)};return r.prototype=e.prototype,r};kl.exports=function(e,r){var t=e.target,n=e.global,i=e.stat,o=e.proto,u=n?mt:i?mt[t]:mt[t]&&mt[t].prototype,s=n?Fr:Fr[t]||Dr(Fr,t,{})[t],c=s.prototype,l,f,p,v,d,h,m,y,q;for(v in r)l=uI(n?v:t+(i?".":"#")+v,e.forced),f=!l&&u&&Il(u,v),h=s[v],f&&(e.dontCallGetSet?(q=oI(u,v),m=q&&q.value):m=u[v]),d=f&&m?m:r[v],!(!l&&!o&&typeof h==typeof d)&&(e.bind&&f?y=sI(d,mt):e.wrap&&f?y=cI(d):o&&aI(d)?y=iI(d):y=d,(e.sham||d&&d.sham||h&&h.sham)&&Dr(y,"sham",!0),Dr(s,v,y),o&&(p=t+"Prototype",Il(Fr,p)||Dr(Fr,p,{}),Dr(Fr[p],v,d),e.real&&c&&(l||!c[v])&&Dr(c,v,d)))}});var _e=a((xU,Pl)=>{"use strict";var lI=xe();Pl.exports=Array.isArray||function(r){return lI(r)==="Array"}});var Tn=a((SU,Rl)=>{"use strict";var fI=R(),pI=fI("toStringTag"),_l={};_l[pI]="z";Rl.exports=String(_l)==="[object z]"});var ht=a((wU,Al)=>{"use strict";var vI=Tn(),dI=N(),On=xe(),mI=R(),hI=mI("toStringTag"),yI=Object,gI=On(function(){return arguments}())==="Arguments",bI=function(e,r){try{return e[r]}catch{}};Al.exports=vI?On:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=bI(r=yI(e),hI))=="string"?t:gI?On(r):(n=On(r))==="Object"&&dI(r.callee)?"Arguments":n}});var xa=a((TU,Nl)=>{"use strict";var qI=A(),xI=N(),qa=pt(),SI=qI(Function.toString);xI(qa.inspectSource)||(qa.inspectSource=function(e){return SI(e)});Nl.exports=qa.inspectSource});var gt=a((OU,Fl)=>{"use strict";var wI=A(),TI=P(),Ml=N(),OI=ht(),CI=H(),EI=xa(),jl=function(){},$l=CI("Reflect","construct"),Sa=/^\s*(?:class|function)\b/,II=wI(Sa.exec),kI=!Sa.test(jl),yt=function(r){if(!Ml(r))return!1;try{return $l(jl,[],r),!0}catch{return!1}},Ll=function(r){if(!Ml(r))return!1;switch(OI(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return kI||!!II(Sa,EI(r))}catch{return!0}};Ll.sham=!0;Fl.exports=!$l||TI(function(){var e;return yt(yt.call)||!yt(Object)||!yt(function(){e=!0})||e})?Ll:yt});var Bl=a((CU,Dl)=>{"use strict";var PI=Math.ceil,_I=Math.floor;Dl.exports=Math.trunc||function(r){var t=+r;return(t>0?_I:PI)(t)}});var Cn=a((EU,Gl)=>{"use strict";var RI=Bl();Gl.exports=function(e){var r=+e;return r!==r||r===0?0:RI(r)}});var wa=a((IU,Ul)=>{"use strict";var AI=Cn(),NI=Math.max,MI=Math.min;Ul.exports=function(e,r){var t=AI(e);return t<0?NI(t+r,0):MI(t,r)}});var Ta=a((kU,Wl)=>{"use strict";var jI=Cn(),$I=Math.min;Wl.exports=function(e){var r=jI(e);return r>0?$I(r,9007199254740991):0}});var fe=a((PU,Hl)=>{"use strict";var LI=Ta();Hl.exports=function(e){return LI(e.length)}});var Br=a((_U,Kl)=>{"use strict";var FI=W(),DI=te(),BI=Ke();Kl.exports=function(e,r,t){FI?DI.f(e,r,BI(0,t)):e[r]=t}});var Gr=a((RU,zl)=>{"use strict";var GI=W(),UI=_e(),WI=TypeError,HI=Object.getOwnPropertyDescriptor,KI=GI&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();zl.exports=KI?function(e,r){if(UI(e)&&!HI(e,"length").writable)throw new WI("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var bt=a((AU,Vl)=>{"use strict";var zI=P(),VI=R(),YI=Mr(),JI=VI("species");Vl.exports=function(e){return YI>=51||!zI(function(){var r=[],t=r.constructor={};return t[JI]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var cr=a((NU,Yl)=>{"use strict";var QI=A();Yl.exports=QI([].slice)});var Xl=a(()=>{"use strict";var XI=x(),Jl=_e(),ZI=gt(),ek=$(),Ql=wa(),rk=fe(),tk=Pe(),nk=Br(),ik=Gr(),ak=R(),ok=bt(),uk=cr(),sk=ok("slice"),ck=ak("species"),Oa=Array,lk=Math.max;XI({target:"Array",proto:!0,forced:!sk},{slice:function(r,t){var n=tk(this),i=rk(n),o=Ql(r,i),u=Ql(t===void 0?i:t,i),s,c,l;if(Jl(n)&&(s=n.constructor,ZI(s)&&(s===Oa||Jl(s.prototype))?s=void 0:ek(s)&&(s=s[ck],s===null&&(s=void 0)),s===Oa||s===void 0))return uk(n,o,u);for(c=new(s===void 0?Oa:s)(lk(u-o,0)),l=0;o<u;o++,l++)o in n&&nk(c,l,n[o]);return ik(c,l),c}})});var ue=a(($U,Zl)=>{"use strict";var fk=_(),pk=V();Zl.exports=function(e,r){var t=pk[e+"Prototype"],n=t&&t[r];if(n)return n;var i=fk[e],o=i&&i.prototype;return o&&o[r]}});var rf=a((LU,ef)=>{"use strict";Xl();var vk=ue();ef.exports=vk("Array","slice")});var nf=a((FU,tf)=>{"use strict";var dk=U(),mk=rf(),Ca=Array.prototype;tf.exports=function(e){var r=e.slice;return e===Ca||dk(Ca,e)&&r===Ca.slice?mk:r}});var of=a((DU,af)=>{"use strict";var hk=nf();af.exports=hk});var sf=a((BU,uf)=>{"use strict";var yk=of();uf.exports=yk});var lf=a((GU,cf)=>{"use strict";var gk=sf();cf.exports=gk});var Ea=a((UU,ff)=>{"use strict";ff.exports=lf()});var Ur=a((WU,pf)=>{pf.exports=Ea()});var Ve=a((HU,vf)=>{"use strict";var bk=ht(),qk=String;vf.exports=function(e){if(bk(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return qk(e)}});var yf=a((KU,hf)=>{"use strict";var Ia=A(),xk=Cn(),Sk=Ve(),wk=or(),Tk=Ia("".charAt),df=Ia("".charCodeAt),Ok=Ia("".slice),mf=function(e){return function(r,t){var n=Sk(wk(r)),i=xk(t),o=n.length,u,s;return i<0||i>=o?e?"":void 0:(u=df(n,i),u<55296||u>56319||i+1===o||(s=df(n,i+1))<56320||s>57343?e?Tk(n,i):u:e?Ok(n,i,i+2):(u-55296<<10)+(s-56320)+65536)}};hf.exports={codeAt:mf(!1),charAt:mf(!0)}});var qf=a((zU,bf)=>{"use strict";var Ck=_(),Ek=N(),gf=Ck.WeakMap;bf.exports=Ek(gf)&&/native code/.test(String(gf))});var qt=a((VU,Sf)=>{"use strict";var Ik=sr(),kk=$r(),xf=Ik("keys");Sf.exports=function(e){return xf[e]||(xf[e]=kk(e))}});var Wr=a((YU,wf)=>{"use strict";wf.exports={}});var Ye=a((JU,Cf)=>{"use strict";var Pk=qf(),Of=_(),_k=$(),Rk=Se(),ka=K(),Pa=pt(),Ak=qt(),Nk=Wr(),Tf="Object already initialized",_a=Of.TypeError,Mk=Of.WeakMap,En,xt,In,jk=function(e){return In(e)?xt(e):En(e,{})},$k=function(e){return function(r){var t;if(!_k(r)||(t=xt(r)).type!==e)throw new _a("Incompatible receiver, "+e+" required");return t}};Pk||Pa.state?(he=Pa.state||(Pa.state=new Mk),he.get=he.get,he.has=he.has,he.set=he.set,En=function(e,r){if(he.has(e))throw new _a(Tf);return r.facade=e,he.set(e,r),r},xt=function(e){return he.get(e)||{}},In=function(e){return he.has(e)}):(lr=Ak("state"),Nk[lr]=!0,En=function(e,r){if(ka(e,lr))throw new _a(Tf);return r.facade=e,Rk(e,lr,r),r},xt=function(e){return ka(e,lr)?e[lr]:{}},In=function(e){return ka(e,lr)});var he,lr;Cf.exports={set:En,get:xt,has:In,enforce:jk,getterFor:$k}});var kf=a((QU,If)=>{"use strict";var Ra=W(),Lk=K(),Ef=Function.prototype,Fk=Ra&&Object.getOwnPropertyDescriptor,Aa=Lk(Ef,"name"),Dk=Aa&&function(){}.name==="something",Bk=Aa&&(!Ra||Ra&&Fk(Ef,"name").configurable);If.exports={EXISTS:Aa,PROPER:Dk,CONFIGURABLE:Bk}});var Na=a((XU,_f)=>{"use strict";var Gk=Pe(),Uk=wa(),Wk=fe(),Pf=function(e){return function(r,t,n){var i=Gk(r),o=Wk(i);if(o===0)return!e&&-1;var u=Uk(n,o),s;if(e&&t!==t){for(;o>u;)if(s=i[u++],s!==s)return!0}else for(;o>u;u++)if((e||u in i)&&i[u]===t)return e||u||0;return!e&&-1}};_f.exports={includes:Pf(!0),indexOf:Pf(!1)}});var ja=a((ZU,Af)=>{"use strict";var Hk=A(),Ma=K(),Kk=Pe(),zk=Na().indexOf,Vk=Wr(),Rf=Hk([].push);Af.exports=function(e,r){var t=Kk(e),n=0,i=[],o;for(o in t)!Ma(Vk,o)&&Ma(t,o)&&Rf(i,o);for(;r.length>n;)Ma(t,o=r[n++])&&(~zk(i,o)||Rf(i,o));return i}});var kn=a((e8,Nf)=>{"use strict";Nf.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var Pn=a((r8,Mf)=>{"use strict";var Yk=ja(),Jk=kn();Mf.exports=Object.keys||function(r){return Yk(r,Jk)}});var $a=a(jf=>{"use strict";var Qk=W(),Xk=ma(),Zk=te(),e1=X(),r1=Pe(),t1=Pn();jf.f=Qk&&!Xk?Object.defineProperties:function(r,t){e1(r);for(var n=r1(t),i=t1(t),o=i.length,u=0,s;o>u;)Zk.f(r,s=i[u++],n[s]);return r}});var La=a((n8,$f)=>{"use strict";var n1=H();$f.exports=n1("document","documentElement")});var Je=a((i8,Wf)=>{"use strict";var i1=X(),a1=$a(),Lf=kn(),o1=Wr(),u1=La(),s1=Sn(),c1=qt(),Ff=">",Df="<",Da="prototype",Ba="script",Gf=c1("IE_PROTO"),Fa=function(){},Uf=function(e){return Df+Ba+Ff+e+Df+"/"+Ba+Ff},Bf=function(e){e.write(Uf("")),e.close();var r=e.parentWindow.Object;return e=null,r},l1=function(){var e=s1("iframe"),r="java"+Ba+":",t;return e.style.display="none",u1.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(Uf("document.F=Object")),t.close(),t.F},_n,Rn=function(){try{_n=new ActiveXObject("htmlfile")}catch{}Rn=typeof document<"u"?document.domain&&_n?Bf(_n):l1():Bf(_n);for(var e=Lf.length;e--;)delete Rn[Da][Lf[e]];return Rn()};o1[Gf]=!0;Wf.exports=Object.create||function(r,t){var n;return r!==null?(Fa[Da]=i1(r),n=new Fa,Fa[Da]=null,n[Gf]=r):n=Rn(),t===void 0?n:a1.f(n,t)}});var Ga=a((a8,Hf)=>{"use strict";var f1=P();Hf.exports=!f1(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var St=a((o8,zf)=>{"use strict";var p1=K(),v1=N(),d1=re(),m1=qt(),h1=Ga(),Kf=m1("IE_PROTO"),Ua=Object,y1=Ua.prototype;zf.exports=h1?Ua.getPrototypeOf:function(e){var r=d1(e);if(p1(r,Kf))return r[Kf];var t=r.constructor;return v1(t)&&r instanceof t?t.prototype:r instanceof Ua?y1:null}});var Re=a((u8,Vf)=>{"use strict";var g1=Se();Vf.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:g1(e,r,t),e}});var za=a((s8,Qf)=>{"use strict";var b1=P(),q1=N(),x1=$(),S1=Je(),Yf=St(),w1=Re(),T1=R(),O1=Z(),Ka=T1("iterator"),Jf=!1,Ae,Wa,Ha;[].keys&&(Ha=[].keys(),"next"in Ha?(Wa=Yf(Yf(Ha)),Wa!==Object.prototype&&(Ae=Wa)):Jf=!0);var C1=!x1(Ae)||b1(function(){var e={};return Ae[Ka].call(e)!==e});C1?Ae={}:O1&&(Ae=S1(Ae));q1(Ae[Ka])||w1(Ae,Ka,function(){return this});Qf.exports={IteratorPrototype:Ae,BUGGY_SAFARI_ITERATORS:Jf}});var Zf=a((c8,Xf)=>{"use strict";var E1=Tn(),I1=ht();Xf.exports=E1?{}.toString:function(){return"[object "+I1(this)+"]"}});var Ne=a((l8,rp)=>{"use strict";var k1=Tn(),P1=te().f,_1=Se(),R1=K(),A1=Zf(),N1=R(),ep=N1("toStringTag");rp.exports=function(e,r,t,n){var i=t?e:e&&e.prototype;i&&(R1(i,ep)||P1(i,ep,{configurable:!0,value:r}),n&&!k1&&_1(i,"toString",A1))}});var fr=a((f8,tp)=>{"use strict";tp.exports={}});var ip=a((p8,np)=>{"use strict";var M1=za().IteratorPrototype,j1=Je(),$1=Ke(),L1=Ne(),F1=fr(),D1=function(){return this};np.exports=function(e,r,t,n){var i=r+" Iterator";return e.prototype=j1(M1,{next:$1(+!n,t)}),L1(e,i,!1,!0),F1[i]=D1,e}});var op=a((v8,ap)=>{"use strict";var B1=A(),G1=F();ap.exports=function(e,r,t){try{return B1(G1(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var sp=a((d8,up)=>{"use strict";var U1=$();up.exports=function(e){return U1(e)||e===null}});var lp=a((m8,cp)=>{"use strict";var W1=sp(),H1=String,K1=TypeError;cp.exports=function(e){if(W1(e))return e;throw new K1("Can't set "+H1(e)+" as a prototype")}});var wt=a((h8,fp)=>{"use strict";var z1=op(),V1=$(),Y1=or(),J1=lp();fp.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=z1(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(i,o){return Y1(i),J1(o),V1(i)&&(e?t(i,o):i.__proto__=o),i}}():void 0)});var Mn=a((y8,xp)=>{"use strict";var Q1=x(),X1=B(),An=Z(),bp=kf(),Z1=N(),eP=ip(),pp=St(),vp=wt(),rP=Ne(),tP=Se(),Va=Re(),nP=R(),dp=fr(),qp=za(),iP=bp.PROPER,aP=bp.CONFIGURABLE,mp=qp.IteratorPrototype,Nn=qp.BUGGY_SAFARI_ITERATORS,Tt=nP("iterator"),hp="keys",Ot="values",yp="entries",gp=function(){return this};xp.exports=function(e,r,t,n,i,o,u){eP(t,r,n);var s=function(q){if(q===i&&v)return v;if(!Nn&&q&&q in f)return f[q];switch(q){case hp:return function(){return new t(this,q)};case Ot:return function(){return new t(this,q)};case yp:return function(){return new t(this,q)}}return function(){return new t(this)}},c=r+" Iterator",l=!1,f=e.prototype,p=f[Tt]||f["@@iterator"]||i&&f[i],v=!Nn&&p||s(i),d=r==="Array"&&f.entries||p,h,m,y;if(d&&(h=pp(d.call(new e)),h!==Object.prototype&&h.next&&(!An&&pp(h)!==mp&&(vp?vp(h,mp):Z1(h[Tt])||Va(h,Tt,gp)),rP(h,c,!0,!0),An&&(dp[c]=gp))),iP&&i===Ot&&p&&p.name!==Ot&&(!An&&aP?tP(f,"name",Ot):(l=!0,v=function(){return X1(p,this)})),i)if(m={values:s(Ot),keys:o?v:s(hp),entries:s(yp)},u)for(y in m)(Nn||l||!(y in f))&&Va(f,y,m[y]);else Q1({target:r,proto:!0,forced:Nn||l},m);return(!An||u)&&f[Tt]!==v&&Va(f,Tt,v,{name:i}),dp[r]=v,m}});var jn=a((g8,Sp)=>{"use strict";Sp.exports=function(e,r){return{value:e,done:r}}});var pr=a(()=>{"use strict";var oP=yf().charAt,uP=Ve(),Tp=Ye(),sP=Mn(),wp=jn(),Op="String Iterator",cP=Tp.set,lP=Tp.getterFor(Op);sP(String,"String",function(e){cP(this,{type:Op,string:uP(e),index:0})},function(){var r=lP(this),t=r.string,n=r.index,i;return n>=t.length?wp(void 0,!0):(i=oP(t,n),r.index+=i.length,wp(i,!1))})});var Ya=a((x8,Ep)=>{"use strict";var fP=B(),Cp=X(),pP=qn();Ep.exports=function(e,r,t){var n,i;Cp(e);try{if(n=pP(e,"return"),!n){if(r==="throw")throw t;return t}n=fP(n,e)}catch(o){i=!0,n=o}if(r==="throw")throw t;if(i)throw n;return Cp(n),t}});var kp=a((S8,Ip)=>{"use strict";var vP=X(),dP=Ya();Ip.exports=function(e,r,t,n){try{return n?r(vP(t)[0],t[1]):r(t)}catch(i){dP(e,"throw",i)}}});var Ja=a((w8,Pp)=>{"use strict";var mP=R(),hP=fr(),yP=mP("iterator"),gP=Array.prototype;Pp.exports=function(e){return e!==void 0&&(hP.Array===e||gP[yP]===e)}});var Ct=a((T8,Rp)=>{"use strict";var bP=ht(),_p=qn(),qP=ar(),xP=fr(),SP=R(),wP=SP("iterator");Rp.exports=function(e){if(!qP(e))return _p(e,wP)||_p(e,"@@iterator")||xP[bP(e)]}});var $n=a((O8,Ap)=>{"use strict";var TP=B(),OP=F(),CP=X(),EP=ze(),IP=Ct(),kP=TypeError;Ap.exports=function(e,r){var t=arguments.length<2?IP(e):r;if(OP(t))return CP(TP(t,e));throw new kP(EP(e)+" is not iterable")}});var $p=a((C8,jp)=>{"use strict";var PP=Y(),_P=B(),RP=re(),AP=kp(),NP=Ja(),MP=gt(),jP=fe(),Np=Br(),$P=Gr(),LP=$n(),FP=Ct(),Mp=Array;jp.exports=function(r){var t=RP(r),n=MP(this),i=arguments.length,o=i>1?arguments[1]:void 0,u=o!==void 0;u&&(o=PP(o,i>2?arguments[2]:void 0));var s=FP(t),c=0,l,f,p,v,d,h;if(s&&!(this===Mp&&NP(s)))for(f=n?new this:[],v=LP(t,s),d=v.next;!(p=_P(d,v)).done;c++)h=u?AP(v,o,[p.value,c],!0):p.value,Np(f,c,h);else for(l=jP(t),f=n?new this(l):Mp(l);l>c;c++)h=u?o(t[c],c):t[c],Np(f,c,h);return $P(f,c),f}});var Xa=a((E8,Bp)=>{"use strict";var DP=R(),Fp=DP("iterator"),Dp=!1;try{Lp=0,Qa={next:function(){return{done:!!Lp++}},return:function(){Dp=!0}},Qa[Fp]=function(){return this},Array.from(Qa,function(){throw 2})}catch{}var Lp,Qa;Bp.exports=function(e,r){try{if(!r&&!Dp)return!1}catch{return!1}var t=!1;try{var n={};n[Fp]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var Gp=a(()=>{"use strict";var BP=x(),GP=$p(),UP=Xa(),WP=!UP(function(e){Array.from(e)});BP({target:"Array",stat:!0,forced:WP},{from:GP})});var Wp=a((P8,Up)=>{"use strict";pr();Gp();var HP=V();Up.exports=HP.Array.from});var Kp=a((_8,Hp)=>{"use strict";var KP=Wp();Hp.exports=KP});var Vp=a((R8,zp)=>{"use strict";var zP=Kp();zp.exports=zP});var Jp=a((A8,Yp)=>{"use strict";var VP=Vp();Yp.exports=VP});var Za=a((N8,Qp)=>{"use strict";Qp.exports=Jp()});var Ln=a((M8,Xp)=>{Xp.exports=Za()});var Et=a((j8,Zp)=>{"use strict";var YP=TypeError,JP=9007199254740991;Zp.exports=function(e){if(e>JP)throw YP("Maximum allowed index exceeded");return e}});var nv=a(($8,tv)=>{"use strict";var ev=_e(),QP=gt(),XP=$(),ZP=R(),e_=ZP("species"),rv=Array;tv.exports=function(e){var r;return ev(e)&&(r=e.constructor,QP(r)&&(r===rv||ev(r.prototype))?r=void 0:XP(r)&&(r=r[e_],r===null&&(r=void 0))),r===void 0?rv:r}});var Fn=a((L8,iv)=>{"use strict";var r_=nv();iv.exports=function(e,r){return new(r_(e))(r===0?0:r)}});var eo=a(()=>{"use strict";var t_=x(),n_=P(),i_=_e(),a_=$(),o_=re(),u_=fe(),av=Et(),ov=Br(),s_=Gr(),c_=Fn(),l_=bt(),f_=R(),p_=Mr(),uv=f_("isConcatSpreadable"),v_=p_>=51||!n_(function(){var e=[];return e[uv]=!1,e.concat()[0]!==e}),d_=function(e){if(!a_(e))return!1;var r=e[uv];return r!==void 0?!!r:i_(e)},m_=!v_||!l_("concat");t_({target:"Array",proto:!0,arity:1,forced:m_},{concat:function(r){var t=o_(this),n=c_(t,0),i=0,o,u,s,c,l;for(o=-1,s=arguments.length;o<s;o++)if(l=o===-1?t:arguments[o],d_(l))for(c=u_(l),av(i+c),u=0;u<c;u++,i++)u in l&&ov(n,i,l[u]);else av(i+1),ov(n,i++,l);return s_(n,i),n}})});var It=a(()=>{});var kt=a(sv=>{"use strict";var h_=ja(),y_=kn(),g_=y_.concat("length","prototype");sv.f=Object.getOwnPropertyNames||function(r){return h_(r,g_)}});var ro=a((W8,fv)=>{"use strict";var b_=xe(),q_=Pe(),cv=kt().f,x_=cr(),lv=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],S_=function(e){try{return cv(e)}catch{return x_(lv)}};fv.exports.f=function(r){return lv&&b_(r)==="Window"?S_(r):cv(q_(r))}});var Dn=a(pv=>{"use strict";pv.f=Object.getOwnPropertySymbols});var Bn=a((K8,vv)=>{"use strict";var w_=te();vv.exports=function(e,r,t){return w_.f(e,r,t)}});var Hr=a(dv=>{"use strict";var T_=R();dv.f=T_});var M=a((V8,hv)=>{"use strict";var mv=V(),O_=K(),C_=Hr(),E_=te().f;hv.exports=function(e){var r=mv.Symbol||(mv.Symbol={});O_(r,e)||E_(r,e,{value:C_.f(e)})}});var to=a((Y8,yv)=>{"use strict";var I_=B(),k_=H(),P_=R(),__=Re();yv.exports=function(){var e=k_("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=P_("toPrimitive");r&&!r[n]&&__(r,n,function(i){return I_(t,this)},{arity:1})}});var Pt=a((J8,bv)=>{"use strict";var R_=Y(),A_=gn(),N_=re(),M_=fe(),gv=Fn(),no=Br(),Qe=function(e){var r=e===1,t=e===2,n=e===3,i=e===4,o=e===6,u=e===7,s=e===5||o;return function(c,l,f){for(var p=N_(c),v=A_(p),d=M_(v),h=R_(l,f),m=0,y=0,q=r?gv(c,d):t||u?gv(c,0):void 0,b,I;d>m;m++)if((s||m in v)&&(b=v[m],I=h(b,m,p),e))if(r)no(q,m,I);else if(I)switch(e){case 3:return!0;case 5:return b;case 6:return m;case 2:no(q,y++,b)}else switch(e){case 4:return!1;case 7:no(q,y++,b)}return o?-1:n||i?i:q}};bv.exports={forEach:Qe(0),map:Qe(1),filter:Qe(2),some:Qe(3),every:Qe(4),find:Qe(5),findIndex:Qe(6),filterReject:Qe(7)}});var jv=a(()=>{"use strict";var Gn=x(),At=_(),po=B(),j_=A(),$_=Z(),Kr=W(),zr=ur(),L_=P(),z=K(),F_=U(),uo=X(),Un=Pe(),vo=xn(),D_=Ve(),so=Ke(),Vr=Je(),Sv=Pn(),B_=kt(),wv=ro(),G_=Dn(),Tv=vt(),Ov=te(),U_=$a(),Cv=ta(),io=Re(),W_=Bn(),mo=sr(),H_=qt(),Ev=Wr(),qv=$r(),K_=R(),z_=Hr(),V_=M(),Y_=to(),J_=Ne(),Iv=Ye(),Wn=Pt().forEach,ne=H_("hidden"),Hn="Symbol",Rt="prototype",Q_=Iv.set,xv=Iv.getterFor(Hn),pe=Object[Rt],vr=At.Symbol,_t=vr&&vr[Rt],X_=At.RangeError,Z_=At.TypeError,ao=At.QObject,kv=Tv.f,dr=Ov.f,Pv=wv.f,eR=Cv.f,_v=j_([].push),Me=mo("symbols"),Nt=mo("op-symbols"),rR=mo("wks"),co=!ao||!ao[Rt]||!ao[Rt].findChild,Rv=function(e,r,t){var n=kv(pe,r);n&&delete pe[r],dr(e,r,t),n&&e!==pe&&dr(pe,r,n)},lo=Kr&&L_(function(){return Vr(dr({},"a",{get:function(){return dr(this,"a",{value:7}).a}})).a!==7})?Rv:dr,oo=function(e,r){var t=Me[e]=Vr(_t);return Q_(t,{type:Hn,tag:e,description:r}),Kr||(t.description=r),t},Kn=function(r,t,n){r===pe&&Kn(Nt,t,n),uo(r);var i=vo(t);return uo(n),z(Me,i)?(n.enumerable?(z(r,ne)&&r[ne][i]&&(r[ne][i]=!1),n=Vr(n,{enumerable:so(0,!1)})):(z(r,ne)||dr(r,ne,so(1,Vr(null))),r[ne][i]=!0),lo(r,i,n)):dr(r,i,n)},ho=function(r,t){uo(r);var n=Un(t),i=Sv(n).concat(Mv(n));return Wn(i,function(o){(!Kr||po(fo,n,o))&&Kn(r,o,n[o])}),r},tR=function(r,t){return t===void 0?Vr(r):ho(Vr(r),t)},fo=function(r){var t=vo(r),n=po(eR,this,t);return this===pe&&z(Me,t)&&!z(Nt,t)?!1:n||!z(this,t)||!z(Me,t)||z(this,ne)&&this[ne][t]?n:!0},Av=function(r,t){var n=Un(r),i=vo(t);if(!(n===pe&&z(Me,i)&&!z(Nt,i))){var o=kv(n,i);return o&&z(Me,i)&&!(z(n,ne)&&n[ne][i])&&(o.enumerable=!0),o}},Nv=function(r){var t=Pv(Un(r)),n=[];return Wn(t,function(i){!z(Me,i)&&!z(Ev,i)&&_v(n,i)}),n},Mv=function(e){var r=e===pe,t=Pv(r?Nt:Un(e)),n=[];return Wn(t,function(i){z(Me,i)&&(!r||z(pe,i))&&_v(n,Me[i])}),n};zr||(vr=function(){if(F_(_t,this))throw new Z_("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:D_(arguments[0]),t=qv(r),n=function(i){var o=this===void 0?At:this;o===pe&&po(n,Nt,i),z(o,ne)&&z(o[ne],t)&&(o[ne][t]=!1);var u=so(1,i);try{lo(o,t,u)}catch(s){if(!(s instanceof X_))throw s;Rv(o,t,u)}};return Kr&&co&&lo(pe,t,{configurable:!0,set:n}),oo(t,r)},_t=vr[Rt],io(_t,"toString",function(){return xv(this).tag}),io(vr,"withoutSetter",function(e){return oo(qv(e),e)}),Cv.f=fo,Ov.f=Kn,U_.f=ho,Tv.f=Av,B_.f=wv.f=Nv,G_.f=Mv,z_.f=function(e){return oo(K_(e),e)},Kr&&(W_(_t,"description",{configurable:!0,get:function(){return xv(this).description}}),$_||io(pe,"propertyIsEnumerable",fo,{unsafe:!0})));Gn({global:!0,constructor:!0,wrap:!0,forced:!zr,sham:!zr},{Symbol:vr});Wn(Sv(rR),function(e){V_(e)});Gn({target:Hn,stat:!0,forced:!zr},{useSetter:function(){co=!0},useSimple:function(){co=!1}});Gn({target:"Object",stat:!0,forced:!zr,sham:!Kr},{create:tR,defineProperty:Kn,defineProperties:ho,getOwnPropertyDescriptor:Av});Gn({target:"Object",stat:!0,forced:!zr},{getOwnPropertyNames:Nv});Y_();J_(vr,Hn);Ev[ne]=!0});var yo=a((Z8,$v)=>{"use strict";var nR=ur();$v.exports=nR&&!!Symbol.for&&!!Symbol.keyFor});var Fv=a(()=>{"use strict";var iR=x(),aR=H(),oR=K(),uR=Ve(),Lv=sr(),sR=yo(),go=Lv("string-to-symbol-registry"),cR=Lv("symbol-to-string-registry");iR({target:"Symbol",stat:!0,forced:!sR},{for:function(e){var r=uR(e);if(oR(go,r))return go[r];var t=aR("Symbol")(r);return go[r]=t,cR[t]=r,t}})});var Bv=a(()=>{"use strict";var lR=x(),fR=K(),pR=jr(),vR=ze(),dR=sr(),mR=yo(),Dv=dR("symbol-to-string-registry");lR({target:"Symbol",stat:!0,forced:!mR},{keyFor:function(r){if(!pR(r))throw new TypeError(vR(r)+" is not a symbol");if(fR(Dv,r))return Dv[r]}})});var Uv=a((i6,Gv)=>{"use strict";var hR=$(),yR=Ye().get;Gv.exports=function(r){if(!hR(r))return!1;var t=yR(r);return!!t&&t.type==="RawJSON"}});var Vv=a((a6,zv)=>{"use strict";var bo=A(),gR=K(),zn=SyntaxError,bR=parseInt,qR=String.fromCharCode,xR=bo("".charAt),Wv=bo("".slice),Hv=bo(/./.exec),Kv={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},SR=/^[\da-f]{4}$/i,wR=/^[\u0000-\u001F]$/;zv.exports=function(e,r){for(var t=!0,n="";r<e.length;){var i=xR(e,r);if(i==="\\"){var o=Wv(e,r,r+2);if(gR(Kv,o))n+=Kv[o],r+=2;else if(o==="\\u"){r+=2;var u=Wv(e,r,r+4);if(!Hv(SR,u))throw new zn("Bad Unicode escape at: "+r);n+=qR(bR(u,16)),r+=4}else throw new zn('Unknown escape sequence: "'+o+'"')}else if(i==='"'){t=!1,r++;break}else{if(Hv(wR,i))throw new zn("Bad control character in string literal at: "+r);n+=i,r++}}if(t)throw new zn("Unterminated string at: "+r);return{value:n,end:r}}});var Jv=a((o6,Yv)=>{"use strict";var TR=P();Yv.exports=!TR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var ld=a(()=>{"use strict";var OR=x(),id=H(),CR=Ar(),ad=B(),mr=A(),od=P(),Qv=_e(),Yn=N(),ER=Uv(),Xv=jr(),Zv=xe(),IR=Ve(),kR=cr(),PR=Vv(),_R=$r(),RR=ur(),qo=Jv(),ud=String,Xe=id("JSON","stringify"),Vn=mr(/./.exec),So=mr("".charAt),AR=mr("".charCodeAt),NR=mr("".replace),xo=mr("".slice),wo=mr([].push),MR=mr(1.1.toString),jR=/[\uD800-\uDFFF]/g,ed=/^[\uD800-\uDBFF]$/,rd=/^[\uDC00-\uDFFF]$/,To=_R(),td=To.length,sd=!RR||od(function(){var e=id("Symbol")("stringify detection");return Xe([e])!=="[null]"||Xe({a:e})!=="{}"||Xe(Object(e))!=="{}"}),nd=od(function(){return Xe("\uDF06\uD834")!=='"\\udf06\\ud834"'||Xe("\uDEAD")!=='"\\udead"'}),$R=sd?function(e,r){var t=kR(arguments),n=cd(r);if(!(!Yn(n)&&(e===void 0||Xv(e))))return t[1]=function(i,o){if(Yn(n)&&(o=ad(n,this,ud(i),o)),!Xv(o))return o},CR(Xe,null,t)}:Xe,LR=function(e,r,t){var n=So(t,r-1),i=So(t,r+1);return Vn(ed,e)&&!Vn(rd,i)||Vn(rd,e)&&!Vn(ed,n)?"\\u"+MR(AR(e,0),16):e},cd=function(e){if(Yn(e))return e;if(Qv(e)){for(var r=e.length,t=[],n=0;n<r;n++){var i=e[n];typeof i=="string"?wo(t,i):(typeof i=="number"||Zv(i)==="Number"||Zv(i)==="String")&&wo(t,IR(i))}var o=t.length,u=!0;return function(s,c){if(u)return u=!1,c;if(Qv(this))return c;for(var l=0;l<o;l++)if(t[l]===s)return c}}};Xe&&OR({target:"JSON",stat:!0,arity:3,forced:sd||nd||!qo},{stringify:function(r,t,n){var i=cd(t),o=[],u=$R(r,function(d,h){var m=Yn(i)?ad(i,this,ud(d),h):h;return!qo&&ER(m)?To+(wo(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(nd&&(u=NR(u,jR,LR)),qo))return u;for(var s="",c=u.length,l=0;l<c;l++){var f=So(u,l);if(f==='"'){var p=PR(u,++l).end-1,v=xo(u,l,p);s+=xo(v,0,td)===To?o[xo(v,td)]:'"'+v+'"',l=p}else s+=f}return s}})});var pd=a(()=>{"use strict";var FR=x(),DR=ur(),BR=P(),fd=Dn(),GR=re(),UR=!DR||BR(function(){fd.f(1)});FR({target:"Object",stat:!0,forced:UR},{getOwnPropertySymbols:function(r){var t=fd.f;return t?t(GR(r)):[]}})});var vd=a(()=>{"use strict";jv();Fv();Bv();ld();pd()});var Oo=a(()=>{"use strict";var WR=M();WR("asyncDispose")});var Co=a(()=>{"use strict";var HR=M();HR("asyncIterator")});var dd=a(()=>{});var Eo=a(()=>{"use strict";var KR=M();KR("dispose")});var md=a(()=>{"use strict";var zR=M();zR("hasInstance")});var hd=a(()=>{"use strict";var VR=M();VR("isConcatSpreadable")});var Io=a(()=>{"use strict";var YR=M();YR("iterator")});var yd=a(()=>{"use strict";var JR=M();JR("match")});var gd=a(()=>{"use strict";var QR=M();QR("matchAll")});var bd=a(()=>{"use strict";var XR=M();XR("replace")});var qd=a(()=>{"use strict";var ZR=M();ZR("search")});var xd=a(()=>{"use strict";var eA=M();eA("species")});var Sd=a(()=>{"use strict";var rA=M();rA("split")});var ko=a(()=>{"use strict";var tA=M(),nA=to();tA("toPrimitive");nA()});var wd=a(()=>{"use strict";var iA=H(),aA=M(),oA=Ne();aA("toStringTag");oA(iA("Symbol"),"Symbol")});var Td=a(()=>{"use strict";var uA=M();uA("unscopables")});var Od=a(()=>{"use strict";var sA=_(),cA=Ne();cA(sA.JSON,"JSON",!0)});var Cd=a(()=>{});var Ed=a(()=>{});var kd=a((Q6,Id)=>{"use strict";eo();It();vd();Oo();Co();dd();Eo();md();hd();Io();yd();gd();bd();qd();xd();Sd();ko();wd();Td();Od();Cd();Ed();var lA=V();Id.exports=lA.Symbol});var Po=a((X6,Pd)=>{"use strict";Pd.exports=function(){}});var hr=a((Z6,Md)=>{"use strict";var fA=Pe(),_o=Po(),_d=fr(),Ad=Ye(),pA=te().f,vA=Mn(),Jn=jn(),dA=Z(),mA=W(),Nd="Array Iterator",hA=Ad.set,yA=Ad.getterFor(Nd);Md.exports=vA(Array,"Array",function(e,r){hA(this,{type:Nd,target:fA(e),index:0,kind:r})},function(){var e=yA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,Jn(void 0,!0);switch(e.kind){case"keys":return Jn(t,!1);case"values":return Jn(r[t],!1)}return Jn([t,r[t]],!1)},"values");var Rd=_d.Arguments=_d.Array;_o("keys");_o("values");_o("entries");if(!dA&&mA&&Rd.name!=="values")try{pA(Rd,"name",{value:"values"})}catch{}});var $d=a((eW,jd)=>{"use strict";jd.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var yr=a(()=>{"use strict";hr();var gA=$d(),bA=_(),qA=Ne(),Ld=fr();for(Qn in gA)qA(bA[Qn],Qn),Ld[Qn]=Ld.Array;var Qn});var Dd=a((nW,Fd)=>{"use strict";var xA=kd();yr();Fd.exports=xA});var Ud=a(()=>{"use strict";var SA=R(),wA=te().f,Bd=SA("metadata"),Gd=Function.prototype;Gd[Bd]===void 0&&wA(Gd,Bd,{value:null})});var Wd=a(()=>{"use strict";Oo()});var Hd=a(()=>{"use strict";Eo()});var Kd=a(()=>{"use strict";var TA=M();TA("metadata")});var Vd=a((pW,zd)=>{"use strict";var OA=Dd();Ud();Wd();Hd();Kd();zd.exports=OA});var Ao=a((vW,Yd)=>{"use strict";var CA=H(),EA=A(),Ro=CA("Symbol"),IA=Ro.keyFor,kA=EA(Ro.prototype.valueOf);Yd.exports=Ro.isRegisteredSymbol||function(r){try{return IA(kA(r))!==void 0}catch{return!1}}});var Jd=a(()=>{"use strict";var PA=x(),_A=Ao();PA({target:"Symbol",stat:!0},{isRegisteredSymbol:_A})});var jo=a((hW,tm)=>{"use strict";var RA=sr(),em=H(),AA=A(),NA=jr(),MA=R(),Zn=em("Symbol"),Qd=Zn.isWellKnownSymbol,rm=em("Object","getOwnPropertyNames"),jA=AA(Zn.prototype.valueOf),Xd=RA("wks");for(Xn=0,No=rm(Zn),Zd=No.length;Xn<Zd;Xn++)try{Mo=No[Xn],NA(Zn[Mo])&&MA(Mo)}catch{}var Mo,Xn,No,Zd;tm.exports=function(r){if(Qd&&Qd(r))return!0;try{for(var t=jA(r),n=0,i=rm(Xd),o=i.length;n<o;n++)if(Xd[i[n]]==t)return!0}catch{}return!1}});var nm=a(()=>{"use strict";var $A=x(),LA=jo();$A({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:LA})});var im=a(()=>{"use strict";var FA=M();FA("customMatcher")});var am=a(()=>{"use strict";var DA=M();DA("observable")});var om=a(()=>{"use strict";var BA=x(),GA=Ao();BA({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:GA})});var um=a(()=>{"use strict";var UA=x(),WA=jo();UA({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:WA})});var sm=a(()=>{"use strict";var HA=M();HA("matcher")});var cm=a(()=>{"use strict";var KA=M();KA("metadataKey")});var lm=a(()=>{"use strict";var zA=M();zA("patternMatch")});var fm=a(()=>{"use strict";var VA=M();VA("replaceAll")});var vm=a((MW,pm)=>{"use strict";var YA=Vd();Jd();nm();im();am();om();um();sm();cm();lm();fm();pm.exports=YA});var we=a((jW,dm)=>{"use strict";dm.exports=vm()});var ei=a(($W,mm)=>{mm.exports=we()});var ym=a((LW,hm)=>{"use strict";hr();pr();var JA=Ct();hm.exports=JA});var bm=a((FW,gm)=>{"use strict";var QA=ym();yr();gm.exports=QA});var xm=a((DW,qm)=>{"use strict";var XA=bm();qm.exports=XA});var wm=a((BW,Sm)=>{"use strict";var ZA=xm();Sm.exports=ZA});var $o=a((GW,Tm)=>{"use strict";Tm.exports=wm()});var ri=a((UW,Om)=>{Om.exports=$o()});var Em=a((WW,Cm)=>{"use strict";hr();pr();var e2=$n();Cm.exports=e2});var km=a((HW,Im)=>{"use strict";var r2=Em();yr();Im.exports=r2});var _m=a((KW,Pm)=>{"use strict";var t2=km();Pm.exports=t2});var Am=a((zW,Rm)=>{"use strict";var n2=_m();Rm.exports=n2});var Mm=a((VW,Nm)=>{"use strict";Nm.exports=Am()});var ti=a((YW,jm)=>{jm.exports=Mm()});var Lm=a((JW,$m)=>{"use strict";var i2=H(),a2=A(),o2=kt(),u2=Dn(),s2=X(),c2=a2([].concat);$m.exports=i2("Reflect","ownKeys")||function(r){var t=o2.f(s2(r)),n=u2.f;return n?c2(t,n(r)):t}});var Bm=a((QW,Dm)=>{"use strict";var Fm=K(),l2=Lm(),f2=vt(),p2=te();Dm.exports=function(e,r,t){for(var n=l2(r),i=p2.f,o=f2.f,u=0;u<n.length;u++){var s=n[u];!Fm(e,s)&&!(t&&Fm(t,s))&&i(e,s,o(r,s))}}});var Um=a((XW,Gm)=>{"use strict";var v2=$(),d2=Se();Gm.exports=function(e,r){v2(r)&&"cause"in r&&d2(e,"cause",r.cause)}});var zm=a((ZW,Km)=>{"use strict";var m2=A(),Wm=Error,h2=m2("".replace),y2=function(e){return String(new Wm(e).stack)}("zxcasd"),Hm=/\n\s*at [^:]*:[^\n]*/,g2=Hm.test(y2);Km.exports=function(e,r){if(g2&&typeof e=="string"&&!Wm.prepareStackTrace)for(;r--;)e=h2(e,Hm,"");return e}});var Ym=a((eH,Vm)=>{"use strict";var b2=P(),q2=Ke();Vm.exports=!b2(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",q2(1,7)),e.stack!==7):!0})});var Xm=a((rH,Qm)=>{"use strict";var x2=Se(),S2=zm(),w2=Ym(),Jm=Error.captureStackTrace;Qm.exports=function(e,r,t,n){w2&&(Jm?Jm(e,r):x2(e,"stack",S2(t,n)))}});var ve=a((tH,th)=>{"use strict";var T2=Y(),O2=B(),C2=X(),E2=ze(),I2=Ja(),k2=fe(),Zm=U(),P2=$n(),_2=Ct(),eh=Ya(),R2=TypeError,ni=function(e,r){this.stopped=e,this.result=r},rh=ni.prototype;th.exports=function(e,r,t){var n=t&&t.that,i=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),s=!!(t&&t.INTERRUPTED),c=T2(r,n),l,f,p,v,d,h,m,y=function(b){return l&&eh(l,"normal"),new ni(!0,b)},q=function(b){return i?(C2(b),s?c(b[0],b[1],y):c(b[0],b[1])):s?c(b,y):c(b)};if(o)l=e.iterator;else if(u)l=e;else{if(f=_2(e),!f)throw new R2(E2(e)+" is not iterable");if(I2(f)){for(p=0,v=k2(e);v>p;p++)if(d=q(e[p]),d&&Zm(rh,d))return d;return new ni(!1)}l=P2(e,f)}for(h=o?e.next:l.next;!(m=O2(h,l)).done;){try{d=q(m.value)}catch(b){eh(l,"throw",b)}if(typeof d=="object"&&d&&Zm(rh,d))return d}return new ni(!1)}});var ih=a((nH,nh)=>{"use strict";var A2=Ve();nh.exports=function(e,r){return e===void 0?arguments.length<2?"":r:A2(e)}});var oh=a(()=>{"use strict";var N2=x(),M2=U(),j2=St(),ii=wt(),$2=Bm(),ah=Je(),Lo=Se(),Fo=Ke(),L2=Um(),F2=Xm(),D2=ve(),B2=ih(),G2=R(),U2=G2("toStringTag"),ai=Error,W2=[].push,Yr=function(r,t){var n=M2(Do,this),i;ii?i=ii(new ai,n?j2(this):Do):(i=n?this:ah(Do),Lo(i,U2,"Error")),t!==void 0&&Lo(i,"message",B2(t)),F2(i,Yr,i.stack,1),arguments.length>2&&L2(i,arguments[2]);var o=[];return D2(r,W2,{that:o}),Lo(i,"errors",o),i};ii?ii(Yr,ai):$2(Yr,ai,{name:!0});var Do=Yr.prototype=ah(ai.prototype,{constructor:Fo(1,Yr),message:Fo(1,""),name:Fo(1,"AggregateError")});N2({global:!0,constructor:!0,arity:2},{AggregateError:Yr})});var Bo=a(()=>{"use strict";oh()});var Go=a((sH,uh)=>{"use strict";var Mt=_(),H2=Nr(),K2=xe(),oi=function(e){return H2.slice(0,e.length)===e};uh.exports=function(){return oi("Bun/")?"BUN":oi("Cloudflare-Workers")?"CLOUDFLARE":oi("Deno/")?"DENO":oi("Node.js/")?"NODE":Mt.Bun&&typeof Bun.version=="string"?"BUN":Mt.Deno&&typeof Deno.version=="object"?"DENO":K2(Mt.process)==="process"?"NODE":Mt.window&&Mt.document?"BROWSER":"REST"}()});var jt=a((cH,sh)=>{"use strict";var z2=Go();sh.exports=z2==="NODE"});var Uo=a((lH,lh)=>{"use strict";var V2=H(),Y2=Bn(),J2=R(),Q2=W(),ch=J2("species");lh.exports=function(e){var r=V2(e);Q2&&r&&!r[ch]&&Y2(r,ch,{configurable:!0,get:function(){return this}})}});var ui=a((fH,fh)=>{"use strict";var X2=U(),Z2=TypeError;fh.exports=function(e,r){if(X2(r,e))return e;throw new Z2("Incorrect invocation")}});var Wo=a((pH,ph)=>{"use strict";var eN=gt(),rN=ze(),tN=TypeError;ph.exports=function(e){if(eN(e))return e;throw new tN(rN(e)+" is not a constructor")}});var Ho=a((vH,dh)=>{"use strict";var vh=X(),nN=Wo(),iN=ar(),aN=R(),oN=aN("species");dh.exports=function(e,r){var t=vh(e).constructor,n;return t===void 0||iN(n=vh(t)[oN])?r:nN(n)}});var hh=a((dH,mh)=>{"use strict";var uN=TypeError;mh.exports=function(e,r){if(e<r)throw new uN("Not enough arguments");return e}});var Ko=a((mH,yh)=>{"use strict";var sN=Nr();yh.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(sN)});var ru=a((hH,Ch)=>{"use strict";var se=_(),cN=Ar(),lN=Y(),gh=N(),fN=K(),Oh=P(),bh=La(),pN=cr(),qh=Sn(),vN=hh(),dN=Ko(),mN=jt(),Xo=se.setImmediate,Zo=se.clearImmediate,hN=se.process,zo=se.Dispatch,yN=se.Function,xh=se.MessageChannel,gN=se.String,Vo=0,$t={},Sh="onreadystatechange",Lt,gr,Yo,Jo;Oh(function(){Lt=se.location});var eu=function(e){if(fN($t,e)){var r=$t[e];delete $t[e],r()}},Qo=function(e){return function(){eu(e)}},wh=function(e){eu(e.data)},Th=function(e){se.postMessage(gN(e),Lt.protocol+"//"+Lt.host)};(!Xo||!Zo)&&(Xo=function(r){vN(arguments.length,1);var t=gh(r)?r:yN(r),n=pN(arguments,1);return $t[++Vo]=function(){cN(t,void 0,n)},gr(Vo),Vo},Zo=function(r){delete $t[r]},mN?gr=function(e){hN.nextTick(Qo(e))}:zo&&zo.now?gr=function(e){zo.now(Qo(e))}:xh&&!dN?(Yo=new xh,Jo=Yo.port2,Yo.port1.onmessage=wh,gr=lN(Jo.postMessage,Jo)):se.addEventListener&&gh(se.postMessage)&&!se.importScripts&&Lt&&Lt.protocol!=="file:"&&!Oh(Th)?(gr=Th,se.addEventListener("message",wh,!1)):Sh in qh("script")?gr=function(e){bh.appendChild(qh("script"))[Sh]=function(){bh.removeChild(this),eu(e)}}:gr=function(e){setTimeout(Qo(e),0)});Ch.exports={set:Xo,clear:Zo}});var kh=a((yH,Ih)=>{"use strict";var Eh=_(),bN=W(),qN=Object.getOwnPropertyDescriptor;Ih.exports=function(e){if(!bN)return Eh[e];var r=qN(Eh,e);return r&&r.value}});var tu=a((gH,_h)=>{"use strict";var Ph=function(){this.head=null,this.tail=null};Ph.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};_h.exports=Ph});var Ah=a((bH,Rh)=>{"use strict";var xN=Nr();Rh.exports=/ipad|iphone|ipod/i.test(xN)&&typeof Pebble<"u"});var Mh=a((qH,Nh)=>{"use strict";var SN=Nr();Nh.exports=/web0s(?!.*chrome)/i.test(SN)});var Gh=a((xH,Bh)=>{"use strict";var Qr=_(),wN=kh(),jh=Y(),nu=ru().set,TN=tu(),ON=Ko(),CN=Ah(),EN=Mh(),iu=jt(),$h=Qr.MutationObserver||Qr.WebKitMutationObserver,Lh=Qr.document,Fh=Qr.process,si=Qr.Promise,uu=wN("queueMicrotask"),Jr,au,ou,ci,Dh;uu||(Ft=new TN,Dt=function(){var e,r;for(iu&&(e=Fh.domain)&&e.exit();r=Ft.get();)try{r()}catch(t){throw Ft.head&&Jr(),t}e&&e.enter()},!ON&&!iu&&!EN&&$h&&Lh?(au=!0,ou=Lh.createTextNode(""),new $h(Dt).observe(ou,{characterData:!0}),Jr=function(){ou.data=au=!au}):!CN&&si&&si.resolve?(ci=si.resolve(void 0),ci.constructor=si,Dh=jh(ci.then,ci),Jr=function(){Dh(Dt)}):iu?Jr=function(){Fh.nextTick(Dt)}:(nu=jh(nu,Qr),Jr=function(){nu(Dt)}),uu=function(e){Ft.head||Jr(),Ft.add(e)});var Ft,Dt;Bh.exports=uu});var Wh=a((SH,Uh)=>{"use strict";Uh.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var br=a((wH,Hh)=>{"use strict";Hh.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var qr=a((TH,Kh)=>{"use strict";var IN=_();Kh.exports=IN.Promise});var Xr=a((OH,Jh)=>{"use strict";var kN=_(),Bt=qr(),PN=N(),_N=da(),RN=xa(),AN=R(),zh=Go(),NN=Z(),su=Mr(),Vh=Bt&&Bt.prototype,MN=AN("species"),cu=!1,Yh=PN(kN.PromiseRejectionEvent),jN=_N("Promise",function(){var e=RN(Bt),r=e!==String(Bt);if(!r&&su===66||NN&&!(Vh.catch&&Vh.finally))return!0;if(!su||su<51||!/native code/.test(e)){var t=new Bt(function(o){o(1)}),n=function(o){o(function(){},function(){})},i=t.constructor={};if(i[MN]=n,cu=t.then(function(){})instanceof n,!cu)return!0}return!r&&(zh==="BROWSER"||zh==="DENO")&&!Yh});Jh.exports={CONSTRUCTOR:jN,REJECTION_EVENT:Yh,SUBCLASSING:cu}});var Te=a((CH,Xh)=>{"use strict";var Qh=F(),$N=TypeError,LN=function(e){var r,t;this.promise=new e(function(n,i){if(r!==void 0||t!==void 0)throw new $N("Bad Promise constructor");r=n,t=i}),this.resolve=Qh(r),this.reject=Qh(t)};Xh.exports.f=function(e){return new LN(e)}});var gy=a(()=>{"use strict";var FN=x(),DN=Z(),vi=jt(),Ze=_(),BN=V(),tt=B(),Zh=Re(),ey=wt(),GN=Ne(),UN=Uo(),WN=F(),pi=N(),HN=$(),KN=ui(),zN=Ho(),ay=ru().set,du=Gh(),VN=Wh(),YN=br(),JN=tu(),oy=Ye(),di=qr(),mu=Xr(),uy=Te(),mi="Promise",sy=mu.CONSTRUCTOR,QN=mu.REJECTION_EVENT,XN=mu.SUBCLASSING,lu=oy.getterFor(mi),ZN=oy.set,Zr=di&&di.prototype,xr=di,li=Zr,cy=Ze.TypeError,fu=Ze.document,hu=Ze.process,pu=uy.f,eM=pu,rM=!!(fu&&fu.createEvent&&Ze.dispatchEvent),ly="unhandledrejection",tM="rejectionhandled",ry=0,fy=1,nM=2,yu=1,py=2,fi,ty,vy,ny,dy=function(e){var r;return HN(e)&&pi(r=e.then)?r:!1},my=function(e,r){var t=r.value,n=r.state===fy,i=n?e.ok:e.fail,o=e.resolve,u=e.reject,s=e.domain,c,l,f;try{i?(n||(r.rejection===py&&aM(r),r.rejection=yu),i===!0?c=t:(s&&s.enter(),c=i(t),s&&(s.exit(),f=!0)),c===e.promise?u(new cy("Promise-chain cycle")):(l=dy(c))?tt(l,c,o,u):o(c)):u(t)}catch(p){s&&!f&&s.exit(),u(p)}},hy=function(e,r){e.notified||(e.notified=!0,du(function(){for(var t=e.reactions,n;n=t.get();)my(n,e);e.notified=!1,r&&!e.rejection&&iM(e)}))},yy=function(e,r,t){var n,i;rM?(n=fu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),Ze.dispatchEvent(n)):n={promise:r,reason:t},!QN&&(i=Ze["on"+e])?i(n):e===ly&&VN("Unhandled promise rejection",t)},iM=function(e){tt(ay,Ze,function(){var r=e.facade,t=e.value,n=iy(e),i;if(n&&(i=YN(function(){vi?hu.emit("unhandledRejection",t,r):yy(ly,r,t)}),e.rejection=vi||iy(e)?py:yu,i.error))throw i.value})},iy=function(e){return e.rejection!==yu&&!e.parent},aM=function(e){tt(ay,Ze,function(){var r=e.facade;vi?hu.emit("rejectionHandled",r):yy(tM,r,e.value)})},et=function(e,r,t){return function(n){e(r,n,t)}},rt=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=nM,hy(e,!0))},vu=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new cy("Promise can't be resolved itself");var n=dy(r);n?du(function(){var i={done:!1};try{tt(n,r,et(vu,i,e),et(rt,i,e))}catch(o){rt(i,o,e)}}):(e.value=r,e.state=fy,hy(e,!1))}catch(i){rt({done:!1},i,e)}}};if(sy&&(xr=function(r){KN(this,li),WN(r),tt(fi,this);var t=lu(this);try{r(et(vu,t),et(rt,t))}catch(n){rt(t,n)}},li=xr.prototype,fi=function(r){ZN(this,{type:mi,done:!1,notified:!1,parent:!1,reactions:new JN,rejection:!1,state:ry,value:null})},fi.prototype=Zh(li,"then",function(r,t){var n=lu(this),i=pu(zN(this,xr));return n.parent=!0,i.ok=pi(r)?r:!0,i.fail=pi(t)&&t,i.domain=vi?hu.domain:void 0,n.state===ry?n.reactions.add(i):du(function(){my(i,n)}),i.promise}),ty=function(){var e=new fi,r=lu(e);this.promise=e,this.resolve=et(vu,r),this.reject=et(rt,r)},uy.f=pu=function(e){return e===xr||e===vy?new ty(e):eM(e)},!DN&&pi(di)&&Zr!==Object.prototype)){ny=Zr.then,XN||Zh(Zr,"then",function(r,t){var n=this;return new xr(function(i,o){tt(ny,n,i,o)}).then(r,t)},{unsafe:!0});try{delete Zr.constructor}catch{}ey&&ey(Zr,li)}FN({global:!0,constructor:!0,wrap:!0,forced:sy},{Promise:xr});vy=BN.Promise;GN(xr,mi,!1,!0);UN(mi)});var Gt=a((kH,by)=>{"use strict";var oM=qr(),uM=Xa(),sM=Xr().CONSTRUCTOR;by.exports=sM||!uM(function(e){oM.all(e).then(void 0,function(){})})});var qy=a(()=>{"use strict";var cM=x(),lM=B(),fM=F(),pM=Te(),vM=br(),dM=ve(),mM=Gt();cM({target:"Promise",stat:!0,forced:mM},{all:function(r){var t=this,n=pM.f(t),i=n.resolve,o=n.reject,u=vM(function(){var s=fM(t.resolve),c=[],l=0,f=1;dM(r,function(p){var v=l++,d=!1;f++,lM(s,t,p).then(function(h){d||(d=!0,c[v]=h,--f||i(c))},o)}),--f||i(c)});return u.error&&o(u.value),n.promise}})});var Sy=a(()=>{"use strict";var hM=x(),yM=Z(),gM=Xr().CONSTRUCTOR,bu=qr(),bM=H(),qM=N(),xM=Re(),xy=bu&&bu.prototype;hM({target:"Promise",proto:!0,forced:gM,real:!0},{catch:function(e){return this.then(void 0,e)}});!yM&&qM(bu)&&(gu=bM("Promise").prototype.catch,xy.catch!==gu&&xM(xy,"catch",gu,{unsafe:!0}));var gu});var wy=a(()=>{"use strict";var SM=x(),wM=B(),TM=F(),OM=Te(),CM=br(),EM=ve(),IM=Gt();SM({target:"Promise",stat:!0,forced:IM},{race:function(r){var t=this,n=OM.f(t),i=n.reject,o=CM(function(){var u=TM(t.resolve);EM(r,function(s){wM(u,t,s).then(n.resolve,i)})});return o.error&&i(o.value),n.promise}})});var Ty=a(()=>{"use strict";var kM=x(),PM=Te(),_M=Xr().CONSTRUCTOR;kM({target:"Promise",stat:!0,forced:_M},{reject:function(r){var t=PM.f(this),n=t.reject;return n(r),t.promise}})});var qu=a((LH,Oy)=>{"use strict";var RM=X(),AM=$(),NM=Te();Oy.exports=function(e,r){if(RM(e),AM(r)&&r.constructor===e)return r;var t=NM.f(e),n=t.resolve;return n(r),t.promise}});var Iy=a(()=>{"use strict";var MM=x(),jM=H(),Cy=Z(),$M=qr(),Ey=Xr().CONSTRUCTOR,LM=qu(),FM=jM("Promise"),DM=Cy&&!Ey;MM({target:"Promise",stat:!0,forced:Cy||Ey},{resolve:function(r){return LM(DM&&this===FM?$M:this,r)}})});var ky=a(()=>{"use strict";gy();qy();Sy();wy();Ty();Iy()});var xu=a(()=>{"use strict";var BM=x(),GM=B(),UM=F(),WM=Te(),HM=br(),KM=ve(),zM=Gt();BM({target:"Promise",stat:!0,forced:zM},{allSettled:function(r){var t=this,n=WM.f(t),i=n.resolve,o=n.reject,u=HM(function(){var s=UM(t.resolve),c=[],l=0,f=1;KM(r,function(p){var v=l++,d=!1;f++,GM(s,t,p).then(function(h){d||(d=!0,c[v]={status:"fulfilled",value:h},--f||i(c))},function(h){d||(d=!0,c[v]={status:"rejected",reason:h},--f||i(c))})}),--f||i(c)});return u.error&&o(u.value),n.promise}})});var Su=a(()=>{"use strict";var VM=x(),YM=B(),JM=F(),QM=H(),XM=Te(),ZM=br(),ej=ve(),rj=Gt(),Py="No one promise resolved";VM({target:"Promise",stat:!0,forced:rj},{any:function(r){var t=this,n=QM("AggregateError"),i=XM.f(t),o=i.resolve,u=i.reject,s=ZM(function(){var c=JM(t.resolve),l=[],f=0,p=1,v=!1;ej(r,function(d){var h=f++,m=!1;p++,YM(c,t,d).then(function(y){m||v||(v=!0,o(y))},function(y){m||v||(m=!0,l[h]=y,--p||u(new n(l,Py)))})}),--p||u(new n(l,Py))});return s.error&&u(s.value),i.promise}})});var Tu=a(()=>{"use strict";var tj=x(),nj=_(),ij=Ar(),aj=cr(),oj=Te(),uj=F(),Ry=br(),wu=nj.Promise,_y=!1,sj=!wu||!wu.try||Ry(function(){wu.try(function(e){_y=e===8},8)}).error||!_y;tj({target:"Promise",stat:!0,forced:sj},{try:function(e){var r=arguments.length>1?aj(arguments,1):[],t=oj.f(this),n=Ry(function(){return ij(uj(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var Ou=a(()=>{"use strict";var cj=x(),lj=Te();cj({target:"Promise",stat:!0},{withResolvers:function(){var r=lj.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var jy=a(()=>{"use strict";var fj=x(),pj=Z(),hi=qr(),vj=P(),Ny=H(),My=N(),dj=Ho(),Ay=qu(),mj=Re(),Eu=hi&&hi.prototype,hj=!!hi&&vj(function(){Eu.finally.call({then:function(){}},function(){})});fj({target:"Promise",proto:!0,real:!0,forced:hj},{finally:function(e){var r=dj(this,Ny("Promise")),t=My(e);return this.then(t?function(n){return Ay(r,e()).then(function(){return n})}:e,t?function(n){return Ay(r,e()).then(function(){throw n})}:e)}});!pj&&My(hi)&&(Cu=Ny("Promise").prototype.finally,Eu.finally!==Cu&&mj(Eu,"finally",Cu,{unsafe:!0}));var Cu});var Ly=a((ZH,$y)=>{"use strict";Bo();hr();It();ky();xu();Su();Tu();Ou();jy();pr();var yj=V();$y.exports=yj.Promise});var Dy=a((eK,Fy)=>{"use strict";var gj=Ly();yr();Fy.exports=gj});var By=a(()=>{"use strict";Tu()});var Gy=a(()=>{"use strict";Ou()});var Wy=a((aK,Uy)=>{"use strict";var bj=Dy();By();Gy();Uy.exports=bj});var Hy=a(()=>{"use strict";Bo()});var Ky=a(()=>{"use strict";xu()});var zy=a(()=>{"use strict";Su()});var Yy=a((pK,Vy)=>{"use strict";var qj=Wy();Hy();Ky();zy();Vy.exports=qj});var nt=a((vK,Jy)=>{"use strict";Jy.exports=Yy()});var Zy=a((gK,Xy)=>{"use strict";Co();var xj=Hr();Xy.exports=xj.f("asyncIterator")});var rg=a((bK,eg)=>{"use strict";var Sj=Zy();eg.exports=Sj});var ng=a((qK,tg)=>{"use strict";var wj=rg();tg.exports=wj});var ag=a((xK,ig)=>{"use strict";var Tj=ng();ig.exports=Tj});var yi=a((SK,og)=>{"use strict";og.exports=ag()});var lg=a(()=>{"use strict";var Oj=x(),Cj=P(),Ej=re(),cg=St(),Ij=Ga(),kj=Cj(function(){cg(1)});Oj({target:"Object",stat:!0,forced:kj,sham:!Ij},{getPrototypeOf:function(r){return cg(Ej(r))}})});var pg=a((EK,fg)=>{"use strict";lg();var Pj=V();fg.exports=Pj.Object.getPrototypeOf});var dg=a((IK,vg)=>{"use strict";var _j=pg();vg.exports=_j});var hg=a((kK,mg)=>{"use strict";var Rj=dg();mg.exports=Rj});var gg=a((PK,yg)=>{"use strict";var Aj=hg();yg.exports=Aj});var gi=a((_K,bg)=>{"use strict";bg.exports=gg()});var xg=a(()=>{"use strict";var Nj=x(),Mj=A(),jj=_e(),$j=Mj([].reverse),qg=[1,2];Nj({target:"Array",proto:!0,forced:String(qg)===String(qg.reverse())},{reverse:function(){return jj(this)&&(this.length=this.length),$j(this)}})});var wg=a((NK,Sg)=>{"use strict";xg();var Lj=ue();Sg.exports=Lj("Array","reverse")});var Og=a((MK,Tg)=>{"use strict";var Fj=U(),Dj=wg(),Pu=Array.prototype;Tg.exports=function(e){var r=e.reverse;return e===Pu||Fj(Pu,e)&&r===Pu.reverse?Dj:r}});var Eg=a((jK,Cg)=>{"use strict";var Bj=Og();Cg.exports=Bj});var kg=a(($K,Ig)=>{"use strict";var Gj=Eg();Ig.exports=Gj});var _g=a((LK,Pg)=>{"use strict";var Uj=kg();Pg.exports=Uj});var Ag=a((FK,Rg)=>{"use strict";Rg.exports=_g()});var _u=a((DK,Ht)=>{function Wj(e,r){this.v=e,this.k=r}Ht.exports=Wj,Ht.exports.__esModule=!0,Ht.exports.default=Ht.exports});var Ng=a(()=>{"use strict";var Hj=x(),Kj=W(),zj=Je();Hj({target:"Object",stat:!0,sham:!Kj},{create:zj})});var jg=a((UK,Mg)=>{"use strict";Ng();var Vj=V(),Yj=Vj.Object;Mg.exports=function(r,t){return Yj.create(r,t)}});var Lg=a((WK,$g)=>{"use strict";var Jj=jg();$g.exports=Jj});var Dg=a((HK,Fg)=>{"use strict";var Qj=Lg();Fg.exports=Qj});var Gg=a((KK,Bg)=>{"use strict";var Xj=Dg();Bg.exports=Xj});var bi=a((zK,Ug)=>{"use strict";Ug.exports=Gg()});var Au=a((VK,zg)=>{"use strict";var Hg=A(),Zj=F(),e$=$(),r$=K(),Wg=cr(),t$=Rr(),Kg=Function,n$=Hg([].concat),i$=Hg([].join),Ru={},a$=function(e,r,t){if(!r$(Ru,r)){for(var n=[],i=0;i<r;i++)n[i]="a["+i+"]";Ru[r]=Kg("C,a","return new C("+i$(n,",")+")")}return Ru[r](e,t)};zg.exports=t$?Kg.bind:function(r){var t=Zj(this),n=t.prototype,i=Wg(arguments,1),o=function(){var s=n$(i,Wg(arguments));return this instanceof o?a$(t,s.length,s):t.apply(r,s)};return e$(n)&&(o.prototype=n),o}});var Yg=a(()=>{"use strict";var o$=x(),Vg=Au();o$({target:"Function",proto:!0,forced:Function.bind!==Vg},{bind:Vg})});var Qg=a((QK,Jg)=>{"use strict";Yg();var u$=ue();Jg.exports=u$("Function","bind")});var Zg=a((XK,Xg)=>{"use strict";var s$=U(),c$=Qg(),Nu=Function.prototype;Xg.exports=function(e){var r=e.bind;return e===Nu||s$(Nu,e)&&r===Nu.bind?c$:r}});var rb=a((ZK,eb)=>{"use strict";var l$=Zg();eb.exports=l$});var nb=a((ez,tb)=>{"use strict";var f$=rb();tb.exports=f$});var ab=a((rz,ib)=>{"use strict";var p$=nb();ib.exports=p$});var Kt=a((tz,ob)=>{"use strict";ob.exports=ab()});var ub=a(()=>{"use strict";var v$=x(),d$=wt();v$({target:"Object",stat:!0},{setPrototypeOf:d$})});var cb=a((az,sb)=>{"use strict";ub();var m$=V();sb.exports=m$.Object.setPrototypeOf});var fb=a((oz,lb)=>{"use strict";var h$=cb();lb.exports=h$});var vb=a((uz,pb)=>{"use strict";var y$=fb();pb.exports=y$});var mb=a((sz,db)=>{"use strict";var g$=vb();db.exports=g$});var qi=a((cz,hb)=>{"use strict";hb.exports=mb()});var gb=a(()=>{"use strict";var b$=x(),q$=W(),yb=te().f;b$({target:"Object",stat:!0,forced:Object.defineProperty!==yb,sham:!q$},{defineProperty:yb})});var xb=a((pz,qb)=>{"use strict";gb();var x$=V(),bb=x$.Object,S$=qb.exports=function(r,t,n){return bb.defineProperty(r,t,n)};bb.defineProperty.sham&&(S$.sham=!0)});var wb=a((vz,Sb)=>{"use strict";var w$=xb();Sb.exports=w$});var Ob=a((dz,Tb)=>{"use strict";var T$=wb();Tb.exports=T$});var Eb=a((mz,Cb)=>{"use strict";var O$=Ob();Cb.exports=O$});var zt=a((hz,Ib)=>{"use strict";Ib.exports=Eb()});var Mu=a((yz,je)=>{var C$=zt();function xi(e,r,t,n){var i=C$;try{i({},"",{})}catch{i=0}je.exports=xi=function(u,s,c,l){function f(p,v){xi(u,p,function(d){return this._invoke(p,v,d)})}s?i?i(u,s,{value:c,enumerable:!l,configurable:!l,writable:!l}):u[s]=c:(f("next",0),f("throw",1),f("return",2))},je.exports.__esModule=!0,je.exports.default=je.exports,xi(e,r,t,n)}je.exports=xi,je.exports.__esModule=!0,je.exports.default=je.exports});var $u=a((gz,$e)=>{var kb=we(),ju=bi(),E$=Kt(),I$=gi(),Pb=qi(),Ce=Mu();function _b(){var e,r,t=typeof kb=="function"?kb:{},n=t.iterator||"@@iterator",i=t.toStringTag||"@@toStringTag";function o(d,h,m,y){var q=h&&h.prototype instanceof s?h:s,b=ju(q.prototype);return Ce(b,"_invoke",function(I,E,S){var T,w,C,j=0,be=S||[],k=!1,ee={p:0,n:0,v:e,a:qe,f:E$(qe).call(qe,e,4),d:function(L,de){return T=L,w=0,C=e,ee.n=de,u}};function qe(Q,L){for(w=Q,C=L,r=0;!k&&j&&!de&&r<be.length;r++){var de,O=be[r],Pr=ee.p,He=O[2];Q>3?(de=He===L)&&(C=O[(w=O[4])?5:(w=3,3)],O[4]=O[5]=e):O[0]<=Pr&&((de=Q<2&&Pr<O[1])?(w=0,ee.v=L,ee.n=O[1]):Pr<He&&(de=Q<3||O[0]>L||L>He)&&(O[4]=Q,O[5]=L,ee.n=He,w=0))}if(de||Q>1)return u;throw k=!0,L}return function(Q,L,de){if(j>1)throw TypeError("Generator is already running");for(k&&L===1&&qe(L,de),w=L,C=de;(r=w<2?e:C)||!k;){T||(w?w<3?(w>1&&(ee.n=-1),qe(w,C)):ee.n=C:ee.v=C);try{if(j=2,T){if(w||(Q="next"),r=T[Q]){if(!(r=r.call(T,C)))throw TypeError("iterator result is not an object");if(!r.done)return r;C=r.value,w<2&&(w=0)}else w===1&&(r=T.return)&&r.call(T),w<2&&(C=TypeError("The iterator does not provide a '"+Q+"' method"),w=1);T=e}else if((r=(k=ee.n<0)?C:I.call(E,ee))!==u)break}catch(O){T=e,w=1,C=O}finally{j=1}}return{value:r,done:k}}}(d,m,y),!0),b}var u={};function s(){}function c(){}function l(){}r=I$;var f=[][n]?r(r([][n]())):(Ce(r={},n,function(){return this}),r),p=l.prototype=s.prototype=ju(f);function v(d){return Pb?Pb(d,l):(d.__proto__=l,Ce(d,i,"GeneratorFunction")),d.prototype=ju(p),d}return c.prototype=l,Ce(p,"constructor",l),Ce(l,"constructor",c),c.displayName="GeneratorFunction",Ce(l,i,"GeneratorFunction"),Ce(p),Ce(p,i,"Generator"),Ce(p,n,function(){return this}),Ce(p,"toString",function(){return"[object Generator]"}),($e.exports=_b=function(){return{w:o,m:v}},$e.exports.__esModule=!0,$e.exports.default=$e.exports)()}$e.exports=_b,$e.exports.__esModule=!0,$e.exports.default=$e.exports});var Du=a((bz,Vt)=>{var k$=we(),P$=yi(),_$=_u(),Lu=Mu();function Fu(e,r){function t(i,o,u,s){try{var c=e[i](o),l=c.value;return l instanceof _$?r.resolve(l.v).then(function(f){t("next",f,u,s)},function(f){t("throw",f,u,s)}):r.resolve(l).then(function(f){c.value=f,u(c)},function(f){return t("throw",f,u,s)})}catch(f){s(f)}}var n;this.next||(Lu(Fu.prototype),Lu(Fu.prototype,typeof k$=="function"&&P$||"@asyncIterator",function(){return this})),Lu(this,"_invoke",function(i,o,u){function s(){return new r(function(c,l){t(i,u,c,l)})}return n=n?n.then(s,s):s()},!0)}Vt.exports=Fu,Vt.exports.__esModule=!0,Vt.exports.default=Vt.exports});var Bu=a((qz,Yt)=>{var R$=nt(),A$=$u(),N$=Du();function M$(e,r,t,n,i){return new N$(A$().w(e,r,t,n),i||R$)}Yt.exports=M$,Yt.exports.__esModule=!0,Yt.exports.default=Yt.exports});var Rb=a((xz,Jt)=>{var j$=Bu();function $$(e,r,t,n,i){var o=j$(e,r,t,n,i);return o.next().then(function(u){return u.done?u.value:o.next()})}Jt.exports=$$,Jt.exports.__esModule=!0,Jt.exports.default=Jt.exports});var Mb=a((Sz,Nb)=>{"use strict";var Ab=ze(),L$=TypeError;Nb.exports=function(e,r){if(!delete e[r])throw new L$("Cannot delete property "+Ab(r)+" of "+Ab(e))}});var jb=a(()=>{"use strict";var F$=x(),D$=re(),B$=fe(),G$=Gr(),U$=Mb(),W$=Et(),H$=[].unshift(0)!==1,K$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},z$=H$||!K$();F$({target:"Array",proto:!0,arity:1,forced:z$},{unshift:function(r){var t=D$(this),n=B$(t),i=arguments.length;if(i){W$(n+i);for(var o=n;o--;){var u=o+i;o in t?t[u]=t[o]:U$(t,u)}for(var s=0;s<i;s++)t[s]=arguments[s]}return G$(t,n+i)}})});var Lb=a((Oz,$b)=>{"use strict";jb();var V$=ue();$b.exports=V$("Array","unshift")});var Db=a((Cz,Fb)=>{"use strict";var Y$=U(),J$=Lb(),Gu=Array.prototype;Fb.exports=function(e){var r=e.unshift;return e===Gu||Y$(Gu,e)&&r===Gu.unshift?J$:r}});var Gb=a((Ez,Bb)=>{"use strict";var Q$=Db();Bb.exports=Q$});var Wb=a((Iz,Ub)=>{"use strict";var X$=Gb();Ub.exports=X$});var Kb=a((kz,Hb)=>{"use strict";var Z$=Wb();Hb.exports=Z$});var Vb=a((Pz,zb)=>{"use strict";zb.exports=Kb()});var Yb=a((_z,Qt)=>{var eL=Vb();function rL(e){var r=Object(e),t=[];for(var n in r)eL(t).call(t,n);return function i(){for(;t.length;)if((n=t.pop())in r)return i.value=n,i.done=!1,i;return i.done=!0,i}}Qt.exports=rL,Qt.exports.__esModule=!0,Qt.exports.default=Qt.exports});var Qb=a((Rz,Jb)=>{"use strict";hr();It();pr();Io();var tL=Hr();Jb.exports=tL.f("iterator")});var Zb=a((Az,Xb)=>{"use strict";var nL=Qb();yr();Xb.exports=nL});var rq=a((Nz,eq)=>{"use strict";var iL=Zb();eq.exports=iL});var nq=a((Mz,tq)=>{"use strict";var aL=rq();tq.exports=aL});var Xt=a((jz,iq)=>{"use strict";iq.exports=nq()});var aq=a(($z,Le)=>{var Si=we(),oL=Xt();function Uu(e){"@babel/helpers - typeof";return Le.exports=Uu=typeof Si=="function"&&typeof oL=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Si=="function"&&r.constructor===Si&&r!==Si.prototype?"symbol":typeof r},Le.exports.__esModule=!0,Le.exports.default=Le.exports,Uu(e)}Le.exports=Uu,Le.exports.__esModule=!0,Le.exports.default=Le.exports});var oq=a((Lz,Zt)=>{var uL=aq().default,sL=we(),cL=Xt();function lL(e){if(e!=null){var r=e[typeof sL=="function"&&cL||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(uL(e)+" is not iterable")}Zt.exports=lL,Zt.exports.__esModule=!0,Zt.exports.default=Zt.exports});var cq=a((Fz,Fe)=>{var uq=gi(),fL=Ag(),pL=_u(),vL=$u(),dL=Rb(),mL=Bu(),hL=Du(),yL=Yb(),sq=oq();function Wu(){"use strict";var e=vL(),r=e.m(Wu),t=(uq?uq(r):r.__proto__).constructor;function n(u){var s=typeof u=="function"&&u.constructor;return!!s&&(s===t||(s.displayName||s.name)==="GeneratorFunction")}var i={throw:1,return:2,break:3,continue:3};function o(u){var s,c;return function(l){s||(s={stop:function(){return c(l.a,2)},catch:function(){return l.v},abrupt:function(p,v){return c(l.a,i[p],v)},delegateYield:function(p,v,d){return s.resultName=v,c(l.d,sq(p),d)},finish:function(p){return c(l.f,p)}},c=function(p,v,d){l.p=s.prev,l.n=s.next;try{return p(v,d)}finally{s.next=l.n}}),s.resultName&&(s[s.resultName]=l.v,s.resultName=void 0),s.sent=l.v,s.next=l.n;try{return u.call(this,s)}finally{l.p=s.prev,l.n=s.next}}}return(Fe.exports=Wu=function(){return{wrap:function(c,l,f,p){return e.w(o(c),l,f,p&&fL(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(c,l){return new pL(c,l)},AsyncIterator:hL,async:function(c,l,f,p,v){return(n(l)?mL:dL)(o(c),l,f,p,v)},keys:yL,values:sq}},Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports)()}Fe.exports=Wu,Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports});var ce=a((Dz,lq)=>{var wi=cq()();lq.exports=wi;try{regeneratorRuntime=wi}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=wi:Function("r","regeneratorRuntime = r")(wi)}});var Hu=a((Oi,pq)=>{"use strict";Object.defineProperty(Oi,"__esModule",{value:!0});var Ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fq=function(){function e(r,t){var n=[],i=!0,o=!1,u=void 0;try{for(var s=r[Symbol.iterator](),c;!(i=(c=s.next()).done)&&(n.push(c.value),!(t&&n.length===t));i=!0);}catch(l){o=!0,u=l}finally{try{!i&&s.return&&s.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Oi.default=gL;function gL(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(i){return i.type==="tag"||i.type==="script"||i.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var i=this.attribs,o=Object.keys(i),u=o.reduce(function(s,c,l){return s[l]={name:c,value:i[c]},s},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var i=[];return rr(this.childTags,function(o){(o.name===n||n==="*")&&i.push(o)}),i}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var i=n.trim().replace(/\s+/g," ").split(" "),o=[];return rr([this],function(u){var s=u.attribs.class;s&&i.every(function(c){return s.indexOf(c)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var i=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=bL(n),u=o.shift(),s=o.length;return u(this).filter(function(c){for(var l=0;l<s;){if(c=o[l](c,i),!c)return!1;l+=1}return!0})}),t.contains||(t.contains=function(n){var i=!1;return rr([this],function(o,u){o===n&&(i=!0,u())}),i}),!0}function bL(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,i=r.split(":"),o=fq(i,2),u=o[0],s=o[1],c=null,l=null;if(function(){switch(!0){case/>/.test(u):l=function(S){return function(T){return T(S.parent)&&S.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");c=function(S){var T=S.attribs.class;return T&&h.every(function(w){return T.indexOf(w)>-1})},l=function(S,T){return n?S.getElementsByClassName(h.join(" ")):typeof S=="function"?S(c):en(S,T,c)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),y=fq(m,2),q=y[0],b=y[1];c=function(S){var T=Object.keys(S.attribs).indexOf(q)>-1;return!!(T&&(!b||S.attribs[q]===b))},l=function(S,T){if(n){var w=function(){var C=[];return rr([S],function(j){c(j)&&C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":Ti(w))==="object")return w.v}return typeof S=="function"?S(c):en(S,T,c)};break;case/^#/.test(u):var I=u.substr(1);c=function(S){return S.attribs.id===I},l=function(S,T){if(n){var w=function(){var C=[];return rr([S],function(j,be){c(j)&&(C.push(j),be())}),{v:C}}();if((typeof w>"u"?"undefined":Ti(w))==="object")return w.v}return typeof S=="function"?S(c):en(S,T,c)};break;case/\*/.test(u):c=function(S){return!0},l=function(S,T){if(n){var w=function(){var C=[];return rr([S],function(j){return C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":Ti(w))==="object")return w.v}return typeof S=="function"?S(c):en(S,T,c)};break;default:c=function(S){return S.name===u},l=function(S,T){if(n){var w=function(){var C=[];return rr([S],function(j){c(j)&&C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":Ti(w))==="object")return w.v}return typeof S=="function"?S(c):en(S,T,c)}}}(),!s)return l;var f=s.match(/-(child|type)\((\d+)\)$/),p=f[1],v=parseInt(f[2],10)-1,d=function(m){if(m){var y=m.parent.childTags;p==="type"&&(y=y.filter(c));var q=y.findIndex(function(b){return b===m});if(q===v)return!0}return!1};return function(m){var y=l(m);return n?y.reduce(function(q,b){return d(b)&&q.push(b),q},[]):d(y)&&y}})}function rr(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&rr(t.childTags,r)})}function en(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}pq.exports=Oi.default});var Ei=a(Ci=>{"use strict";Object.defineProperty(Ci,"__esModule",{value:!0});Ci.convertNodeList=qL;Ci.escapeValue=xL;function qL(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function xL(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var Sq=a((Ii,xq)=>{"use strict";Object.defineProperty(Ii,"__esModule",{value:!0});Ii.default=SL;var hq=Ei(),vq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function SL(e,r){var t=r.root,n=t===void 0?document:t,i=r.skip,o=i===void 0?null:i,u=r.priority,s=u===void 0?["id","class","href","src"]:u,c=r.ignore,l=c===void 0?{}:c,f=[],p=e,v=f.length,d=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(q){return typeof q!="function"?function(b){return b===q}:q}),m=function(b){return o&&h.some(function(I){return I(b)})};for(Object.keys(l).forEach(function(q){q==="class"&&(d=!0);var b=l[q];typeof b!="function"&&(typeof b=="number"&&(b=b.toString()),typeof b=="string"&&(b=new RegExp((0,hq.escapeValue)(b).replace(/\\/g,"\\\\"))),typeof b=="boolean"&&(b=b?/(?:)/:/.^/),l[q]=function(I,E){return b.test(E)})}),d&&function(){var q=l.attribute;l.attribute=function(b,I,E){return l.class(I)||q&&q(b,I,E)}}();p!==n;){if(m(p)!==!0){if(dq(s,p,l,f,n)||mq(p,l,f,n))break;dq(s,p,l,f),f.length===v&&mq(p,l,f),f.length===v&&wL(s,p,l,f)}p=p.parentNode,v=f.length}if(p===n){var y=bq(s,p,l);f.unshift(y)}return f.join(" ")}function dq(e,r,t,n){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=yq(e,r,t);if(o){var u=i.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function yq(e,r,t){for(var n=r.attributes,i=Object.keys(n).sort(function(m,y){var q=e.indexOf(n[m].name),b=e.indexOf(n[y].name);return b===-1?q===-1?0:-1:q-b}),o=0,u=i.length;o<u;o++){var s=i[o],c=n[s],l=c.name,f=(0,hq.escapeValue)(c.value),p=t[l]||t.attribute,v=vq[l]||vq.attribute;if(!qq(p,l,f,v)){var d="["+l+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(l==="id"&&(d="#"+f),l==="class")){var h=f.trim().replace(/\s+/g,".");d="."+h}return d}}return null}function mq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,i=gq(e,r);if(i){var o=n.getElementsByTagName(i);if(o.length===1)return t.unshift(i),!0}return!1}function gq(e,r){var t=e.tagName.toLowerCase();return qq(r.tag,null,t)?null:t}function wL(e,r,t,n){for(var i=r.parentNode,o=i.childTags||i.children,u=0,s=o.length;u<s;u++){var c=o[u];if(c===r){var l=bq(e,c,t);if(!l)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,c,t,l);var f="> "+l+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function bq(e,r,t){var n=yq(e,r,t);return n||(n=gq(r,t)),n}function qq(e,r,t,n){if(!t)return!0;var i=e||n;return i?i(r,t,n):!1}xq.exports=Ii.default});var Ku=a((Pi,wq)=>{"use strict";Object.defineProperty(Pi,"__esModule",{value:!0});Pi.default=IL;var TL=Hu(),OL=EL(TL),CL=Ei();function EL(e){return e&&e.__esModule?e:{default:e}}function IL(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,CL.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,OL.default)(r[0],t),i=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(i.length<2)return ki("",e,"",r);for(var o=[i.pop()];i.length>1;){var u=i.pop(),s=i.join(" "),c=o.join(" "),l=s+" "+c,f=document.querySelectorAll(l);f.length!==r.length&&o.unshift(ki(s,u,c,r))}return o.unshift(i[0]),i=o,i[0]=ki("",i[0],i.slice(1).join(" "),r),i[i.length-1]=ki(i.slice(0,-1).join(" "),i[i.length-1],"",r),n&&delete global.document,i.join(" ").replace(/>/g,"> ").trim()}function ki(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var i=r.replace(/=.*$/,"]"),o=""+e+i+t,u=document.querySelectorAll(o);if(it(u,n))r=i;else for(var s=document.querySelectorAll(""+e+i),c=function(){var E=s[l];if(n.some(function(T){return E.contains(T)})){var S=E.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),it(u,n)&&(r=S),"break"}},l=0,f=s.length;l<f;l++){var o,u,p=c();if(p==="break")break}}if(/>/.test(r)){var v=r.replace(/>/,""),o=""+e+v+t,u=document.querySelectorAll(o);it(u,n)&&(r=v)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);it(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(I){return"."+I}).sort(function(I,E){return I.length-E.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);it(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var y=document.querySelectorAll(""+e+r),q=function(){var E=y[l];if(n.some(function(T){return E.contains(T)})){var S=E.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),it(u,n)&&(r=S),"break"}},l=0,f=y.length;l<f;l++){var o,u,b=q();if(b==="break")break}}return r}function it(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var i=0;i<t;i++)if(e[i]===n)return!0;return!1})}wq.exports=Pi.default});var zu=a(_i=>{"use strict";Object.defineProperty(_i,"__esModule",{value:!0});_i.getCommonAncestor=kL;_i.getCommonProperties=PL;function kL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,i=[];e.forEach(function(p,v){for(var d=[];p!==n;)p=p.parentNode,d.unshift(p);i[v]=d}),i.sort(function(p,v){return p.length-v.length});for(var o=i.shift(),u=null,s=function(){var v=o[c],d=i.some(function(h){return!h.some(function(m){return m===v})});if(d)return"break";u=v},c=0,l=o.length;c<l;c++){var f=s();if(f==="break")break}return u}function PL(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,i=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(c){return u.some(function(l){return l===c})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(i!==void 0&&function(){var c=t.attributes,l=Object.keys(c).reduce(function(v,d){var h=c[d],m=h.name;return h&&m!=="class"&&(v[m]=h.value),v},{}),f=Object.keys(l),p=Object.keys(i);f.length?p.length?(i=p.reduce(function(v,d){var h=i[d];return h===l[d]&&(v[d]=h),v},{}),Object.keys(i).length?r.attributes=i:delete r.attributes):r.attributes=l:delete r.attributes}(),o!==void 0){var s=t.tagName.toLowerCase();o?s!==o&&delete r.tag:r.tag=s}}),r}});var kq=a(rn=>{"use strict";Object.defineProperty(rn,"__esModule",{value:!0});var _L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};rn.getSingleSelector=Yu;rn.getMultiSelector=Iq;rn.default=$L;var RL=Hu(),Oq=Vu(RL),AL=Sq(),NL=Vu(AL),ML=Ku(),Cq=Vu(ML),Tq=Ei(),Eq=zu();function Vu(e){return e&&e.__esModule?e:{default:e}}function Yu(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":_L(e))+'")');var t=(0,Oq.default)(e,r),n=(0,NL.default)(e,r),i=(0,Cq.default)(n,e,r);return t&&delete global.document,i}function Iq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,Tq.convertNodeList)(e)),e.some(function(l){return l.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,Oq.default)(e[0],r),n=(0,Eq.getCommonAncestor)(e,r),i=Yu(n,r),o=jL(e),u=o[0],s=(0,Cq.default)(i+" "+u,e,r),c=(0,Tq.convertNodeList)(document.querySelectorAll(s));return e.every(function(l){return c.some(function(f){return f===l})})?(t&&delete global.document,s):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function jL(e){var r=(0,Eq.getCommonProperties)(e),t=r.classes,n=r.attributes,i=r.tag,o=[];if(i&&o.push(i),t){var u=t.map(function(c){return"."+c}).join("");o.push(u)}if(n){var s=Object.keys(n).reduce(function(c,l){return c.push("["+l+'="'+n[l]+'"]'),c},[]).join("");o.push(s)}return o.length,[o.join("")]}function $L(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?Iq(e,r):Yu(e,r)}});var Rq=a(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.default=ie.common=ie.optimize=ie.getMultiSelector=ie.getSingleSelector=ie.select=void 0;var Ju=kq();Object.defineProperty(ie,"getSingleSelector",{enumerable:!0,get:function(){return Ju.getSingleSelector}});Object.defineProperty(ie,"getMultiSelector",{enumerable:!0,get:function(){return Ju.getMultiSelector}});var Pq=_q(Ju),LL=Ku(),FL=_q(LL),DL=zu(),BL=GL(DL);function GL(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function _q(e){return e&&e.__esModule?e:{default:e}}ie.select=Pq.default;ie.optimize=FL.default;ie.common=BL;ie.default=Pq.default});var Aq=a(()=>{"use strict";var XL=x(),ZL=_e();XL({target:"Array",stat:!0},{isArray:ZL})});var Mq=a((nV,Nq)=>{"use strict";Aq();var eF=V();Nq.exports=eF.Array.isArray});var $q=a((iV,jq)=>{"use strict";var rF=Mq();jq.exports=rF});var Fq=a((aV,Lq)=>{"use strict";var tF=$q();Lq.exports=tF});var Bq=a((oV,Dq)=>{"use strict";var nF=Fq();Dq.exports=nF});var Uq=a((uV,Gq)=>{"use strict";Gq.exports=Bq()});var Kq=a(()=>{"use strict";var iF=x(),aF=re(),oF=fe(),uF=Gr(),sF=Et(),cF=P(),lF=cF(function(){return[].push.call({length:4294967296},1)!==4294967297}),fF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},pF=lF||!fF();iF({target:"Array",proto:!0,arity:1,forced:pF},{push:function(r){var t=aF(this),n=oF(t),i=arguments.length;sF(n+i);for(var o=0;o<i;o++)t[n]=arguments[o],n++;return uF(t,n),n}})});var Vq=a((fV,zq)=>{"use strict";Kq();var vF=ue();zq.exports=vF("Array","push")});var Jq=a((pV,Yq)=>{"use strict";var dF=U(),mF=Vq(),Qu=Array.prototype;Yq.exports=function(e){var r=e.push;return e===Qu||dF(Qu,e)&&r===Qu.push?mF:r}});var Xq=a((vV,Qq)=>{"use strict";var hF=Jq();Qq.exports=hF});var ex=a((dV,Zq)=>{"use strict";var yF=Xq();Zq.exports=yF});var tx=a((mV,rx)=>{"use strict";var gF=ex();rx.exports=gF});var Xu=a((hV,nx)=>{"use strict";nx.exports=tx()});var dx=a(()=>{"use strict";var bF=x(),qF=Pt().map,xF=bt(),SF=xF("map");bF({target:"Array",proto:!0,forced:!SF},{map:function(r){return qF(this,r,arguments.length>1?arguments[1]:void 0)}})});var hx=a((WV,mx)=>{"use strict";dx();var wF=ue();mx.exports=wF("Array","map")});var gx=a((HV,yx)=>{"use strict";var TF=U(),OF=hx(),es=Array.prototype;yx.exports=function(e){var r=e.map;return e===es||TF(es,e)&&r===es.map?OF:r}});var qx=a((KV,bx)=>{"use strict";var CF=gx();bx.exports=CF});var Sx=a((zV,xx)=>{"use strict";var EF=qx();xx.exports=EF});var Tx=a((VV,wx)=>{"use strict";var IF=Sx();wx.exports=IF});var Cx=a((YV,Ox)=>{"use strict";Ox.exports=Tx()});var Ix=a((JV,Ex)=>{Ex.exports=Cx()});var Px=a((QV,kx)=>{kx.exports=nt()});var Mx=a((XV,Nx)=>{"use strict";var kF=F(),PF=re(),_F=gn(),RF=fe(),_x=TypeError,Rx="Reduce of empty array with no initial value",Ax=function(e){return function(r,t,n,i){var o=PF(r),u=_F(o),s=RF(o);if(kF(t),s===0&&n<2)throw new _x(Rx);var c=e?s-1:0,l=e?-1:1;if(n<2)for(;;){if(c in u){i=u[c],c+=l;break}if(c+=l,e?c<0:s<=c)throw new _x(Rx)}for(;e?c>=0:s>c;c+=l)c in u&&(i=t(i,u[c],c,o));return i}};Nx.exports={left:Ax(!1),right:Ax(!0)}});var rs=a((ZV,jx)=>{"use strict";var AF=P();jx.exports=function(e,r){var t=[][e];return!!t&&AF(function(){t.call(null,r||function(){return 1},1)})}});var Lx=a(()=>{"use strict";var NF=x(),MF=Mx().left,jF=rs(),$x=Mr(),$F=jt(),LF=!$F&&$x>79&&$x<83,FF=LF||!jF("reduce");NF({target:"Array",proto:!0,forced:FF},{reduce:function(r){var t=arguments.length;return MF(this,r,t,t>1?arguments[1]:void 0)}})});var Dx=a((t7,Fx)=>{"use strict";Lx();var DF=ue();Fx.exports=DF("Array","reduce")});var Gx=a((n7,Bx)=>{"use strict";var BF=U(),GF=Dx(),ts=Array.prototype;Bx.exports=function(e){var r=e.reduce;return e===ts||BF(ts,e)&&r===ts.reduce?GF:r}});var Wx=a((i7,Ux)=>{"use strict";var UF=Gx();Ux.exports=UF});var Kx=a((a7,Hx)=>{"use strict";var WF=Wx();Hx.exports=WF});var Vx=a((o7,zx)=>{"use strict";var HF=Kx();zx.exports=HF});var Jx=a((u7,Yx)=>{"use strict";Yx.exports=Vx()});var Xx=a((s7,Qx)=>{Qx.exports=Jx()});var rS=a((c7,eS)=>{"use strict";var KF=_e(),zF=fe(),VF=Et(),YF=Y(),JF=Br(),Zx=function(e,r,t,n,i,o,u,s){for(var c=i,l=0,f=u?YF(u,s):!1,p,v;l<n;)l in t&&(p=f?f(t[l],l,r):t[l],o>0&&KF(p)?(v=zF(p),c=Zx(e,r,p,v,c,o-1)-1):(VF(c+1),JF(e,c,p)),c++),l++;return c};eS.exports=Zx});var tS=a(()=>{"use strict";var QF=x(),XF=rS(),ZF=F(),eD=re(),rD=fe(),tD=Fn();QF({target:"Array",proto:!0},{flatMap:function(r){var t=eD(this),n=rD(t),i;return ZF(r),i=tD(t,0),XF(i,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),i}})});var nS=a(()=>{"use strict";var nD=Po();nD("flatMap")});var aS=a((d7,iS)=>{"use strict";tS();nS();var iD=ue();iS.exports=iD("Array","flatMap")});var uS=a((m7,oS)=>{"use strict";var aD=U(),oD=aS(),ns=Array.prototype;oS.exports=function(e){var r=e.flatMap;return e===ns||aD(ns,e)&&r===ns.flatMap?oD:r}});var cS=a((h7,sS)=>{"use strict";var uD=uS();sS.exports=uD});var fS=a((y7,lS)=>{"use strict";var sD=cS();lS.exports=sD});var vS=a((g7,pS)=>{"use strict";var cD=fS();pS.exports=cD});var mS=a((b7,dS)=>{"use strict";dS.exports=vS()});var yS=a((q7,hS)=>{hS.exports=mS()});var bS=a((x7,gS)=>{"use strict";eo();var lD=ue();gS.exports=lD("Array","concat")});var xS=a((S7,qS)=>{"use strict";var fD=U(),pD=bS(),is=Array.prototype;qS.exports=function(e){var r=e.concat;return e===is||fD(is,e)&&r===is.concat?pD:r}});var wS=a((w7,SS)=>{"use strict";var vD=xS();SS.exports=vD});var OS=a((T7,TS)=>{"use strict";var dD=wS();TS.exports=dD});var ES=a((O7,CS)=>{"use strict";var mD=OS();CS.exports=mD});var kS=a((C7,IS)=>{"use strict";IS.exports=ES()});var as=a((E7,PS)=>{PS.exports=kS()});var AS=a(()=>{});var MS=a((J7,NS)=>{"use strict";AS();ko();var OD=Hr();NS.exports=OD.f("toPrimitive")});var $S=a((Q7,jS)=>{"use strict";var CD=MS();jS.exports=CD});var FS=a((X7,LS)=>{"use strict";var ED=$S();LS.exports=ED});var BS=a((Z7,DS)=>{"use strict";var ID=FS();DS.exports=ID});var US=a((e9,GS)=>{"use strict";GS.exports=BS()});var XS=a((x9,QS)=>{"use strict";var PD=$(),_D=xe(),RD=R(),AD=RD("match");QS.exports=function(e){var r;return PD(e)&&((r=e[AD])!==void 0?!!r:_D(e)==="RegExp")}});var ew=a((S9,ZS)=>{"use strict";var ND=XS(),MD=TypeError;ZS.exports=function(e){if(ND(e))throw new MD("The method doesn't accept regular expressions");return e}});var tw=a((w9,rw)=>{"use strict";var jD=R(),$D=jD("match");rw.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[$D]=!1,"/./"[e](r)}catch{}}return!1}});var aw=a(()=>{"use strict";var LD=x(),FD=ft(),DD=vt().f,BD=Ta(),nw=Ve(),GD=ew(),UD=or(),WD=tw(),HD=Z(),KD=FD("".slice),zD=Math.min,iw=WD("startsWith"),VD=!HD&&!iw&&!!function(){var e=DD(String.prototype,"startsWith");return e&&!e.writable}();LD({target:"String",proto:!0,forced:!VD&&!iw},{startsWith:function(r){var t=nw(UD(this));GD(r);var n=BD(zD(arguments.length>1?arguments[1]:void 0,t.length)),i=nw(r);return KD(t,n,n+i.length)===i}})});var uw=a((C9,ow)=>{"use strict";aw();var YD=ue();ow.exports=YD("String","startsWith")});var cw=a((E9,sw)=>{"use strict";var JD=U(),QD=uw(),cs=String.prototype;sw.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===cs||JD(cs,e)&&r===cs.startsWith?QD:r}});var fw=a((I9,lw)=>{"use strict";var XD=cw();lw.exports=XD});var vw=a((k9,pw)=>{"use strict";var ZD=fw();pw.exports=ZD});var mw=a((P9,dw)=>{"use strict";var e3=vw();dw.exports=e3});var yw=a((_9,hw)=>{"use strict";hw.exports=mw()});var bw=a((R9,gw)=>{gw.exports=yw()});var qw=a(()=>{"use strict";var r3=x(),t3=Pt().filter,n3=bt(),i3=n3("filter");r3({target:"Array",proto:!0,forced:!i3},{filter:function(r){return t3(this,r,arguments.length>1?arguments[1]:void 0)}})});var Sw=a((M9,xw)=>{"use strict";qw();var a3=ue();xw.exports=a3("Array","filter")});var Tw=a((j9,ww)=>{"use strict";var o3=U(),u3=Sw(),ls=Array.prototype;ww.exports=function(e){var r=e.filter;return e===ls||o3(ls,e)&&r===ls.filter?u3:r}});var Cw=a(($9,Ow)=>{"use strict";var s3=Tw();Ow.exports=s3});var Iw=a((L9,Ew)=>{"use strict";var c3=Cw();Ew.exports=c3});var Pw=a((F9,kw)=>{"use strict";var l3=Iw();kw.exports=l3});var Rw=a((D9,_w)=>{"use strict";_w.exports=Pw()});var Nw=a((B9,Aw)=>{Aw.exports=Rw()});var Jw=a(()=>{"use strict";var g3=x(),b3=H(),ps=Ar(),q3=Au(),Ww=Wo(),x3=X(),Hw=$(),S3=Je(),zw=P(),vs=b3("Reflect","construct"),w3=Object.prototype,T3=[].push,Vw=zw(function(){function e(){}return!(vs(function(){},[],e)instanceof e)}),Yw=!zw(function(){vs(function(){})}),Kw=Vw||Yw;g3({target:"Reflect",stat:!0,forced:Kw,sham:Kw},{construct:function(r,t){Ww(r),x3(t);var n=arguments.length<3?r:Ww(arguments[2]);if(Yw&&!Vw)return vs(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var i=[null];return ps(T3,i,t),new(ps(q3,r,i))}var o=n.prototype,u=S3(Hw(o)?o:w3),s=ps(r,u,t);return Hw(s)?s:u}})});var Xw=a((xY,Qw)=>{"use strict";Jw();var O3=V();Qw.exports=O3.Reflect.construct});var eT=a((SY,Zw)=>{"use strict";var C3=Xw();Zw.exports=C3});var tT=a((wY,rT)=>{"use strict";var E3=eT();rT.exports=E3});var iT=a((TY,nT)=>{"use strict";var I3=tT();nT.exports=I3});var Li=a((OY,aT)=>{"use strict";aT.exports=iT()});var uT=a((CY,oT)=>{oT.exports=Li()});var hT=a((MY,mT)=>{"use strict";var k3=P();mT.exports=k3(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var bT=a((jY,gT)=>{"use strict";var P3=P(),_3=$(),R3=xe(),yT=hT(),Fi=Object.isExtensible,A3=P3(function(){Fi(1)});gT.exports=A3||yT?function(r){return!_3(r)||yT&&R3(r)==="ArrayBuffer"?!1:Fi?Fi(r):!0}:Fi});var xT=a(($Y,qT)=>{"use strict";var N3=P();qT.exports=!N3(function(){return Object.isExtensible(Object.preventExtensions({}))})});var qs=a((LY,TT)=>{"use strict";var M3=x(),j3=A(),$3=Wr(),L3=$(),ys=K(),F3=te().f,ST=kt(),D3=ro(),gs=bT(),B3=$r(),G3=xT(),wT=!1,Ge=B3("meta"),U3=0,bs=function(e){F3(e,Ge,{value:{objectID:"O"+U3++,weakData:{}}})},W3=function(e,r){if(!L3(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!ys(e,Ge)){if(!gs(e))return"F";if(!r)return"E";bs(e)}return e[Ge].objectID},H3=function(e,r){if(!ys(e,Ge)){if(!gs(e))return!0;if(!r)return!1;bs(e)}return e[Ge].weakData},K3=function(e){return G3&&wT&&gs(e)&&!ys(e,Ge)&&bs(e),e},z3=function(){V3.enable=function(){},wT=!0;var e=ST.f,r=j3([].splice),t={};t[Ge]=1,e(t).length&&(ST.f=function(n){for(var i=e(n),o=0,u=i.length;o<u;o++)if(i[o]===Ge){r(i,o,1);break}return i},M3({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:D3.f}))},V3=TT.exports={enable:z3,fastKey:W3,getWeakData:H3,onFreeze:K3};$3[Ge]=!0});var ET=a((FY,CT)=>{"use strict";var Y3=x(),J3=_(),Q3=qs(),X3=P(),Z3=Se(),eB=ve(),rB=ui(),tB=N(),nB=$(),iB=ar(),aB=Ne(),oB=te().f,uB=Pt().forEach,sB=W(),OT=Ye(),cB=OT.set,lB=OT.getterFor;CT.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,i=e.indexOf("Weak")!==-1,o=n?"set":"add",u=J3[e],s=u&&u.prototype,c={},l;if(!sB||!tB(u)||!(i||s.forEach&&!X3(function(){new u().entries().next()})))l=t.getConstructor(r,e,n,o),Q3.enable();else{l=r(function(v,d){cB(rB(v,f),{type:e,collection:new u}),iB(d)||eB(d,v[o],{that:v,AS_ENTRIES:n})});var f=l.prototype,p=lB(e);uB(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(v){var d=v==="add"||v==="set";v in s&&!(i&&v==="clear")&&Z3(f,v,function(h,m){var y=p(this).collection;if(!d&&i&&!nB(h))return v==="get"?void 0:!1;var q=y[v](h===0?0:h,m);return d?this:q})}),i||oB(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return aB(l,e,!1,!0),c[e]=l,Y3({global:!0,forced:!0},c),i||t.setStrong(l,e,n),l}});var kT=a((DY,IT)=>{"use strict";var fB=Re();IT.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:fB(e,n,r[n],t);return e}});var jT=a((BY,MT)=>{"use strict";var PT=Je(),pB=Bn(),_T=kT(),vB=Y(),dB=ui(),mB=ar(),hB=ve(),yB=Mn(),Di=jn(),gB=Uo(),sn=W(),RT=qs().fastKey,NT=Ye(),AT=NT.set,xs=NT.getterFor;MT.exports={getConstructor:function(e,r,t,n){var i=e(function(l,f){dB(l,o),AT(l,{type:r,index:PT(null),first:null,last:null,size:0}),sn||(l.size=0),mB(f)||hB(f,l[n],{that:l,AS_ENTRIES:t})}),o=i.prototype,u=xs(r),s=function(l,f,p){var v=u(l),d=c(l,f),h,m;return d?d.value=p:(v.last=d={index:m=RT(f,!0),key:f,value:p,previous:h=v.last,next:null,removed:!1},v.first||(v.first=d),h&&(h.next=d),sn?v.size++:l.size++,m!=="F"&&(v.index[m]=d)),l},c=function(l,f){var p=u(l),v=RT(f),d;if(v!=="F")return p.index[v];for(d=p.first;d;d=d.next)if(d.key===f)return d};return _T(o,{clear:function(){for(var f=this,p=u(f),v=p.first;v;)v.removed=!0,v.previous&&(v.previous=v.previous.next=null),v=v.next;p.first=p.last=null,p.index=PT(null),sn?p.size=0:f.size=0},delete:function(l){var f=this,p=u(f),v=c(f,l);if(v){var d=v.next,h=v.previous;delete p.index[v.index],v.removed=!0,h&&(h.next=d),d&&(d.previous=h),p.first===v&&(p.first=d),p.last===v&&(p.last=h),sn?p.size--:f.size--}return!!v},forEach:function(f){for(var p=u(this),v=vB(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:p.first;)for(v(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!c(this,f)}}),_T(o,t?{get:function(f){var p=c(this,f);return p&&p.value},set:function(f,p){return s(this,f===0?0:f,p)}}:{add:function(f){return s(this,f=f===0?0:f,f)}}),sn&&pB(o,"size",{configurable:!0,get:function(){return u(this).size}}),i},setStrong:function(e,r,t){var n=r+" Iterator",i=xs(r),o=xs(n);yB(e,r,function(u,s){AT(this,{type:n,target:u,state:i(u),kind:s,last:null})},function(){for(var u=o(this),s=u.kind,c=u.last;c&&c.removed;)c=c.previous;return!u.target||!(u.last=c=c?c.next:u.state.first)?(u.target=null,Di(void 0,!0)):Di(s==="keys"?c.key:s==="values"?c.value:[c.key,c.value],!1)},t?"entries":"values",!t,!0),gB(r)}}});var $T=a(()=>{"use strict";var bB=ET(),qB=jT();bB("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},qB)});var LT=a(()=>{"use strict";$T()});var DT=a((KY,FT)=>{"use strict";FT.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,i){return t[e](n,i)}}});var ae=a((zY,GT)=>{"use strict";var xB=H(),Bi=DT(),BT=xB("Map");GT.exports={Map:BT,set:Bi("set",2),get:Bi("get",1),has:Bi("has",1),remove:Bi("delete",1),proto:BT.prototype}});var Ss=a(()=>{"use strict";var SB=x(),wB=A(),TB=F(),OB=or(),CB=ve(),Gi=ae(),UT=Z(),EB=P(),WT=Gi.Map,IB=Gi.has,kB=Gi.get,PB=Gi.set,_B=wB([].push),RB=UT||EB(function(){return WT.groupBy("ab",function(e){return e}).get("a").length!==1});SB({target:"Map",stat:!0,forced:UT||RB},{groupBy:function(r,t){OB(r),TB(t);var n=new WT,i=0;return CB(r,function(o){var u=t(o,i++);IB(n,u)?_B(kB(n,u),o):PB(n,u,[o])}),n}})});var J=a((JY,HT)=>{"use strict";var AB=ze(),NB=TypeError;HT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new NB(AB(e)+" is not a map")}});var Ts=a(()=>{"use strict";var MB=x(),jB=J(),ws=ae(),$B=Z(),LB=ws.get,FB=ws.has,DB=ws.set;MB({target:"Map",proto:!0,real:!0,forced:$B},{getOrInsert:function(r,t){return FB(jB(this),r)?LB(this,r):(DB(this,r,t),t)}})});var Cs=a(()=>{"use strict";var BB=x(),GB=F(),UB=J(),Os=ae(),WB=Z(),HB=Os.get,KB=Os.has,zB=Os.set;BB({target:"Map",proto:!0,real:!0,forced:WB},{getOrInsertComputed:function(r,t){if(UB(this),GB(t),KB(this,r))return HB(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return zB(this,r,n),n}})});var zT=a((rJ,KT)=>{"use strict";hr();LT();Ss();Ts();Cs();It();pr();var VB=V();KT.exports=VB.Map});var YT=a((tJ,VT)=>{"use strict";var YB=zT();yr();VT.exports=YB});var Es=a(()=>{"use strict";Ts()});var Is=a(()=>{"use strict";Cs()});var JT=a(()=>{"use strict";Ss()});var XT=a((cJ,QT)=>{"use strict";var JB=YT();Es();Is();JT();QT.exports=JB});var eO=a((lJ,ZT)=>{"use strict";var QB=Y(),XB=X(),ZB=re(),e4=ve();ZT.exports=function(e,r,t){return function(i){var o=ZB(i),u=arguments.length,s=u>1?arguments[1]:void 0,c=s!==void 0,l=c?QB(s,u>2?arguments[2]:void 0):void 0,f=new e,p=0;return e4(o,function(v){var d=c?l(v,p++):v;t?r(f,XB(d)[0],d[1]):r(f,d)}),f}}});var tO=a(()=>{"use strict";var r4=x(),rO=ae(),t4=eO();r4({target:"Map",stat:!0,forced:!0},{from:t4(rO.Map,rO.set,!0)})});var iO=a((vJ,nO)=>{"use strict";var n4=X();nO.exports=function(e,r,t){return function(){for(var i=new e,o=arguments.length,u=0;u<o;u++){var s=arguments[u];t?r(i,n4(s)[0],s[1]):r(i,s)}return i}}});var oO=a(()=>{"use strict";var i4=x(),aO=ae(),a4=iO();i4({target:"Map",stat:!0,forced:!0},{of:a4(aO.Map,aO.set,!0)})});var sO=a(()=>{"use strict";var o4=x(),u4=B(),s4=ve(),c4=N(),uO=F(),l4=ae().Map;o4({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=c4(this)?this:l4,i=new n;uO(t);var o=uO(i.set);return s4(r,function(u){u4(o,i,t(u),u)}),i}})});var cO=a(()=>{"use strict";var f4=x(),p4=J(),v4=ae().remove;f4({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=p4(this),t=!0,n,i=0,o=arguments.length;i<o;i++)n=v4(r,arguments[i]),t=t&&n;return!!t}})});var fO=a(()=>{"use strict";var d4=x(),m4=J(),ks=ae(),h4=ks.get,y4=ks.has,lO=ks.set;d4({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=m4(this),i,o;return y4(n,r)?(i=h4(n,r),"update"in t&&(i=t.update(i,r,n),lO(n,r,i)),i):(o=t.insert(r,n),lO(n,r,o),o)}})});var vO=a((SJ,pO)=>{"use strict";var g4=B();pO.exports=function(e,r,t){for(var n=t?e:e.iterator,i=e.next,o,u;!(o=g4(i,n)).done;)if(u=r(o.value),u!==void 0)return u}});var ye=a((wJ,dO)=>{"use strict";var b4=vO();dO.exports=function(e,r,t){return t?b4(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var mO=a(()=>{"use strict";var q4=x(),x4=Y(),S4=J(),w4=ye();q4({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=S4(this),n=x4(r,arguments.length>1?arguments[1]:void 0);return w4(t,function(i,o){if(!n(i,o,t))return!1},!0)!==!1}})});var yO=a(()=>{"use strict";var T4=x(),O4=Y(),C4=J(),hO=ae(),E4=ye(),I4=hO.Map,k4=hO.set;T4({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=C4(this),n=O4(r,arguments.length>1?arguments[1]:void 0),i=new I4;return E4(t,function(o,u){n(o,u,t)&&k4(i,u,o)}),i}})});var gO=a(()=>{"use strict";var P4=x(),_4=Y(),R4=J(),A4=ye();P4({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=R4(this),n=_4(r,arguments.length>1?arguments[1]:void 0),i=A4(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return i&&i.value}})});var bO=a(()=>{"use strict";var N4=x(),M4=Y(),j4=J(),$4=ye();N4({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=j4(this),n=M4(r,arguments.length>1?arguments[1]:void 0),i=$4(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return i&&i.key}})});var xO=a((RJ,qO)=>{"use strict";qO.exports=function(e,r){return e===r||e!==e&&r!==r}});var SO=a(()=>{"use strict";var L4=x(),F4=xO(),D4=J(),B4=ye();L4({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return B4(D4(this),function(t){if(F4(t,r))return!0},!0)===!0}})});var wO=a(()=>{"use strict";var G4=x(),U4=J(),W4=ye();G4({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=W4(U4(this),function(n,i){if(n===r)return{key:i}},!0);return t&&t.key}})});var OO=a(()=>{"use strict";var H4=x(),K4=Y(),z4=J(),TO=ae(),V4=ye(),Y4=TO.Map,J4=TO.set;H4({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=z4(this),n=K4(r,arguments.length>1?arguments[1]:void 0),i=new Y4;return V4(t,function(o,u){J4(i,n(o,u,t),o)}),i}})});var EO=a(()=>{"use strict";var Q4=x(),X4=Y(),Z4=J(),CO=ae(),eG=ye(),rG=CO.Map,tG=CO.set;Q4({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=Z4(this),n=X4(r,arguments.length>1?arguments[1]:void 0),i=new rG;return eG(t,function(o,u){tG(i,u,n(o,u,t))}),i}})});var IO=a(()=>{"use strict";var nG=x(),iG=J(),aG=ve(),oG=ae().set;nG({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=iG(this),n=arguments.length,i=0;i<n;)aG(arguments[i++],function(o,u){oG(t,o,u)},{AS_ENTRIES:!0});return t}})});var kO=a(()=>{"use strict";var uG=x(),sG=F(),cG=J(),lG=ye(),fG=TypeError;uG({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=cG(this),n=arguments.length<2,i=n?void 0:arguments[1];if(sG(r),lG(t,function(o,u){n?(n=!1,i=o):i=r(i,o,u,t)}),n)throw new fG("Reduce of empty map with no initial value");return i}})});var PO=a(()=>{"use strict";var pG=x(),vG=Y(),dG=J(),mG=ye();pG({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=dG(this),n=vG(r,arguments.length>1?arguments[1]:void 0);return mG(t,function(i,o){if(n(i,o,t))return!0},!0)===!0}})});var RO=a(()=>{"use strict";var hG=x(),_O=F(),yG=J(),Ps=ae(),gG=TypeError,bG=Ps.get,qG=Ps.has,xG=Ps.set;hG({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=yG(this),i=arguments.length;_O(t);var o=qG(n,r);if(!o&&i<3)throw new gG("Updating absent value");var u=o?bG(n,r):_O(i>2?arguments[2]:void 0)(r,n);return xG(n,r,t(u,r,n)),n}})});var Rs=a((YJ,AO)=>{"use strict";var Ui=B(),_s=F(),Wi=N(),SG=X(),wG=TypeError;AO.exports=function(r,t){var n=SG(this),i=_s(n.get),o=_s(n.has),u=_s(n.set),s=arguments.length>2?arguments[2]:void 0,c;if(!Wi(t)&&!Wi(s))throw new wG("At least one callback required");return Ui(o,n,r)?(c=Ui(i,n,r),Wi(t)&&(c=t(c),Ui(u,n,r,c))):Wi(s)&&(c=s(),Ui(u,n,r,c)),c}});var NO=a(()=>{"use strict";var TG=x(),OG=Rs();TG({target:"Map",proto:!0,real:!0,forced:!0},{upsert:OG})});var MO=a(()=>{"use strict";var CG=x(),EG=Rs();CG({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:EG})});var $O=a((eQ,jO)=>{"use strict";var IG=XT();tO();oO();sO();cO();fO();mO();yO();gO();bO();SO();Es();Is();wO();OO();EO();IO();kO();PO();RO();NO();MO();jO.exports=IG});var FO=a((rQ,LO)=>{"use strict";LO.exports=$O()});var BO=a(()=>{"use strict";var kG=x(),PG=ft(),_G=Na().indexOf,RG=rs(),As=PG([].indexOf),DO=!!As&&1/As([1],1,-0)<0,AG=DO||!RG("indexOf");kG({target:"Array",proto:!0,forced:AG},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return DO?As(this,r,t)||0:_G(this,r,t)}})});var UO=a((iQ,GO)=>{"use strict";BO();var NG=ue();GO.exports=NG("Array","indexOf")});var HO=a((aQ,WO)=>{"use strict";var MG=U(),jG=UO(),Ns=Array.prototype;WO.exports=function(e){var r=e.indexOf;return e===Ns||MG(Ns,e)&&r===Ns.indexOf?jG:r}});var zO=a((oQ,KO)=>{"use strict";var $G=HO();KO.exports=$G});var YO=a((uQ,VO)=>{"use strict";var LG=zO();VO.exports=LG});var QO=a((sQ,JO)=>{"use strict";var FG=YO();JO.exports=FG});var ZO=a((cQ,XO)=>{"use strict";XO.exports=QO()});var hC=a(()=>{"use strict";var HG=x(),KG=re(),mC=Pn(),zG=P(),VG=zG(function(){mC(1)});HG({target:"Object",stat:!0,forced:VG},{keys:function(r){return mC(KG(r))}})});var gC=a((dX,yC)=>{"use strict";hC();var YG=V();yC.exports=YG.Object.keys});var qC=a((mX,bC)=>{"use strict";var JG=gC();bC.exports=JG});var SC=a((hX,xC)=>{"use strict";var QG=qC();xC.exports=QG});var TC=a((yX,wC)=>{"use strict";var XG=SC();wC.exports=XG});var CC=a((gX,OC)=>{"use strict";OC.exports=TC()});var IC=a((bX,EC)=>{EC.exports=CC()});var _r="",Ji="";function Xs(e){_r=e.replace(/\/+$/,"")}function Zs(e){Ji=e}function st(){return Ji?{Authorization:`Bearer ${Ji}`}:{}}async function ct(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function Qi(e,r,{search:t,author:n}={}){let i=[];r?i.push(`document=${encodeURIComponent(r)}`):e&&i.push(`uri=${encodeURIComponent(e)}`),t&&i.push(`search=${encodeURIComponent(t)}`),n&&i.push(`author=${encodeURIComponent(n)}`);let o=await fetch(`${_r}/comments?${i.join("&")}`,{headers:st()});return await ct(o,"Failed to fetch comments"),(await o.json()).data}async function Xi({uri:e,document:r,quote:t,prefix:n,suffix:i,body:o,author:u,parent:s}){let c={quote:t,prefix:n,suffix:i,body:o,author:u,parent:s};r?c.document=r:c.uri=e;let l=await fetch(`${_r}/comments`,{method:"POST",headers:{"Content-Type":"application/json",...st()},body:JSON.stringify(c)});return await ct(l,"Failed to create comment"),l.json()}async function ec(e,{body:r}){let t=await fetch(`${_r}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...st()},body:JSON.stringify({body:r})});return await ct(t,"Failed to update comment"),t.json()}async function rc(e,r){let t=await fetch(`${_r}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...st()},body:JSON.stringify({status:r})});return await ct(t,"Failed to update comment status"),t.json()}async function tc(e){let r=await fetch(`${_r}/comments/${e}`,{method:"DELETE",headers:st()});await ct(r,"Failed to delete comment")}var HL=g(Ur(),1),KL=g(Ln(),1),zL=g(ei(),1),VL=g(ri(),1),YL=g(ti(),1);var Iu=g(nt(),1);function Qy(e,r,t,n,i,o,u){try{var s=e[o](u),c=s.value}catch(l){return void t(l)}s.done?r(c):Iu.default.resolve(c).then(n,i)}function Sr(e){return function(){var r=this,t=arguments;return new Iu.default(function(n,i){var o=e.apply(r,t);function u(c){Qy(o,n,i,u,s,"next",c)}function s(c){Qy(o,n,i,u,s,"throw",c)}u(void 0)})}}function Ut(e,r){this.v=e,this.k=r}function er(e){return new Ut(e,0)}var ku=g(nt(),1),ug=g(we(),1),sg=g(yi(),1);function Oe(e){return function(){return new Wt(e.apply(this,arguments))}}function Wt(e){var r,t;function n(o,u){try{var s=e[o](u),c=s.value,l=c instanceof Ut;ku.default.resolve(l?c.v:c).then(function(f){if(l){var p=o==="return"?"return":"next";if(!c.k||f.done)return n(p,f);f=e[p](f).value}i(s.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){i("throw",f)}}function i(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new ku.default(function(s,c){var l={key:o,arg:u,resolve:s,reject:c,next:null};t?t=t.next=l:(r=t=l,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Wt.prototype[typeof ug.default=="function"&&sg.default||"@@asyncIterator"]=function(){return this},Wt.prototype.next=function(e){return this._invoke("next",e)},Wt.prototype.throw=function(e){return this._invoke("throw",e)},Wt.prototype.return=function(e){return this._invoke("return",e)};var JL=g(ce(),1),QL=g(Rq(),1);function le(e){var r,t=UL(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function UL(e){return"startContainer"in e}function tr(e){if(WL(e))return e;var r=e,t=le(r).createRange();return t.selectNodeContents(r),t}function WL(e){return"startContainer"in e}var Wq=g(Uq(),1);function Hq(e){if((0,Wq.default)(e))return e}var ix=g(we(),1),ax=g($o(),1),ox=g(Xu(),1);function ux(e,r){var t=e==null?null:typeof ix.default<"u"&&(0,ax.default)(e)||e["@@iterator"];if(t!=null){var n,i,o,u,s=[],c=!0,l=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&((0,ox.default)(s).call(s,n.value),s.length!==r);c=!0);}catch(f){l=!0,i=f}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(l)throw i}}return s}}var sx=g(Ea(),1),cx=g(Za(),1);function Ri(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function Zu(e,r){if(e){var t;if(typeof e=="string")return Ri(e,r);var n=(0,sx.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,cx.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ri(e,r):void 0}}function lx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function De(e,r){return Hq(e)||ux(e,r)||Zu(e,r)||lx()}var fx=g(we(),1),px=g(yi(),1),vx=g(Xt(),1),tn=g(nt(),1);function at(e){var r,t,n,i=2;for(typeof fx.default<"u"&&(t=px.default,n=vx.default);i--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Ai(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Ai(e){function r(t){if(Object(t)!==t)return tn.default.reject(new TypeError(t+" is not an object."));var n=t.done;return tn.default.resolve(t.value).then(function(i){return{value:i,done:n}})}return Ai=function(n){this.s=n,this.n=n.next},Ai.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var i=this.s.return;return i===void 0?tn.default.resolve({value:n,done:!0}):r(i.apply(this.s,arguments))},throw:function(n){var i=this.s.return;return i===void 0?tn.default.reject(n):r(i.apply(this.s,arguments))}},new Ai(e)}var TD=g(ce(),1);var gD=g(ce(),1),bD=g(Ix(),1),qD=g(Px(),1),xD=g(Xx(),1),SD=g(yS(),1),wD=g(as(),1);var $s=g(ce(),1);var y3=g(ce(),1);var us=g(ce(),1);function nn(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function _S(e,r){return nn(e.startChunk,r.startChunk)&&nn(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function wr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var os=g(zt(),1);var an=g(we(),1),RS=g(Xt(),1);function Be(e){"@babel/helpers - typeof";return Be=typeof an.default=="function"&&typeof RS.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof an.default=="function"&&r.constructor===an.default&&r!==an.default.prototype?"symbol":typeof r},Be(e)}var WS=g(US(),1);function HS(e,r){if(Be(e)!="object"||!e)return e;var t=e[WS.default];if(t!==void 0){var n=t.call(e,r||"default");if(Be(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Ni(e){var r=HS(e,"string");return Be(r)=="symbol"?r:r+""}function KS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,os.default)(e,Ni(n.key),n)}}function on(e,r,t){return r&&KS(e.prototype,r),t&&KS(e,t),(0,os.default)(e,"prototype",{writable:!1}),e}var zS=g(zt(),1);function Tr(e,r,t){return(r=Ni(r))in e?(0,zS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var VS=g(Ur(),1);var Mi="Iterator exhausted before seek ended.",un=function(){function e(r){wr(this,e),this.chunker=r,Tr(this,"currentChunkPosition",0),Tr(this,"offsetInChunk",0),this.seekTo(0)}return on(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,i)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!nn(this.currentChunk,n);){var p=this._readToPreviousChunk(),v=De(p,2),d=v[0],h=v[1];if(t&&(u=d+u),h===null)throw new RangeError(Mi)}else for(;!nn(this.currentChunk,n);){var s=this._readToNextChunk(),c=De(s,2),l=c[0],f=c[1];if(t&&(u+=l),f===null)throw new RangeError(Mi)}var m=this.currentChunkPosition+i;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,VS.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var s=this.currentChunkPosition+this.currentChunk.data.length;if(s<=n){var c=this._readToNextChunk(),l=De(c,2),f=l[0],p=l[1];if(t&&(u+=f),p===null){if(this.position===n||o)break;throw new RangeError(Mi)}}else{var v=i?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,v)),this.offsetInChunk=v,i&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=i?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var h=this._readToPreviousChunk(),m=De(h,2),y=m[0],q=m[1];if(t&&(u=y+u),q===null){if(o)break;throw new RangeError(Mi)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,i=this.chunker.nextChunk();return i!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,i]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function JS(e,r){return ss.apply(this,arguments)}function ss(){return ss=Sr(us.default.mark(function e(r,t){var n,i,o,u,s,c,l,f,p,v,d,h,m,y,q,b,I,E,S,T,w,C,j=arguments;return us.default.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:n=j.length>2&&j[2]!==void 0?j[2]:{},i=n.minimalContext,o=i===void 0?!1:i,u=n.minimumQuoteLength,s=u===void 0?0:u,c=n.maxWordLength,l=c===void 0?50:c,f=new un(t()),p=new un(t()),f.seekToChunk(r.startChunk,r.startIndex),v=f.readToChunk(r.endChunk,r.endIndex),d="",h="",m=function(){return d.length+v.length+h.length},m()<s&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),y=Math.floor((s-m())/2),d=f.read(-y,!1,!0)+d,m()<s&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),q=s-m(),h=h+f.read(q,!1,!0),m()<s&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),b=s-m(),d=f.read(-b,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=ji(f,l,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+ji(f,l,!1));case 11:return I={type:"TextQuoteSelector",exact:v,prefix:d,suffix:h},E=$i(I)(t()),k.next=16,E.next();case 16:if(S=k.sent,!(!S.done&&_S(S.value,r))){k.next=21;break}return k.next=20,E.next();case 20:S=k.sent;case 21:if(!S.done){k.next=23;break}return k.abrupt("return",I);case 23:if(T=S.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),p.seekToChunk(T.startChunk,T.startIndex-d.length),w=YS(f,p,!0),w!==void 0&&!o&&(w=ji(f,l,!0)+w),f.seekToChunk(r.endChunk,r.endIndex+h.length),p.seekToChunk(T.endChunk,T.endIndex+h.length),C=YS(f,p,!1),C!==void 0&&!o&&(C=C+ji(f,l,!1)),!o){k.next=44;break}if(!(w!==void 0&&(C===void 0||w.length<=C.length))){k.next=37;break}d=w+d,k.next=42;break;case 37:if(C===void 0){k.next=41;break}h=h+C,k.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:k.next=46;break;case 44:w!==void 0&&(d=w+d),C!==void 0&&(h=h+C);case 46:k.next=11;break;case 48:case"end":return k.stop()}},e)})),ss.apply(this,arguments)}function YS(e,r,t){for(var n="";;){var i=void 0;try{i=e.read(t?-1:1)}catch{return}n=t?i+n:n+i;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(i!==o)return n}}function ji(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var i=void 0;try{i=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(kD(i)){e.seekBy(t?1:-1);break}n=t?i+n:n+i}return n}function kD(e){return/^\s+$/.test(e)}var $w=g(Ur(),1),Lw=g(Ln(),1),Fw=g(ei(),1),Dw=g(ri(),1),Bw=g(ti(),1);var fs=g(ce(),1),Gw=g(bw(),1),Uw=g(Nw(),1);function Mw(e,r){var t;if(typeof Fw.default>"u"||(0,Dw.default)(e)==null){if(Array.isArray(e)||(t=f3(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,s;return{s:function(){t=(0,Bw.default)(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){u=!0,s=l},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw s}}}}function f3(e,r){var t;if(e){if(typeof e=="string")return jw(e,r);var n=(0,$w.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,Lw.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jw(e,r)}}function jw(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function $i(e){return function(){var r=Oe(fs.default.mark(function n(i){var o,u,s,c,l,f,p,v,d,h,m,y,q,b,I,E,S,T,w,C,j,be,k,ee,qe,Q,L;return fs.default.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:o=e.exact,u=e.prefix||"",s=e.suffix||"",c=u+o+s,l=[],f=!0;case 6:p=i.currentChunk,v=p.data,d=[],h=Mw(l),O.prev=10,h.s();case 12:if((m=h.n()).done){O.next=27;break}if(y=m.value,q=y.charactersMatched,y.endChunk===void 0&&(b=u.length+o.length-q,b<=v.length&&(y.endChunk=p,y.endIndex=b)),y.startChunk===void 0&&(I=u.length-q,(I<v.length||y.endChunk!==void 0)&&(y.startChunk=p,y.startIndex=I)),E=c.length-q,!(E<=v.length)){O.next=24;break}if(!(0,Gw.default)(v).call(v,c.substring(q))){O.next=22;break}return O.next=22,y;case 22:O.next=25;break;case 24:v===c.substring(q,q+v.length)&&(y.charactersMatched+=v.length,d.push(y));case 25:O.next=12;break;case 27:O.next=32;break;case 29:O.prev=29,O.t0=O.catch(10),h.e(O.t0);case 32:return O.prev=32,h.f(),O.finish(32);case 35:if(l=d,!(c.length<=v.length)){O.next=49;break}S=0;case 38:if(!(S<=v.length)){O.next=49;break}if(T=v.indexOf(c,S),T!==-1){O.next=42;break}return O.abrupt("break",49);case 42:if(S=T+1,!(T===0&&c.length===0&&!f)){O.next=45;break}return O.abrupt("continue",38);case 45:return O.next=47,{startChunk:p,startIndex:T+u.length,endChunk:p,endIndex:T+u.length+o.length};case 47:O.next=38;break;case 49:for(w=[],C=Math.max(v.length-c.length+1,0),j=function(He){var Js=v[He];w=(0,Uw.default)(w).call(w,function(nE){return Js===c[He-nE]}),Js===c[0]&&w.push(He)},be=C;be<v.length;be++)j(be);k=Mw(w);try{for(k.s();!(ee=k.n()).done;)qe=ee.value,Q=v.length-qe,L={charactersMatched:Q},Q>=u.length+o.length&&(L.endChunk=p,L.endIndex=qe+u.length+o.length),(Q>u.length||L.endChunk!==void 0)&&(L.startChunk=p,L.startIndex=qe+u.length),l.push(L)}catch(Pr){k.e(Pr)}finally{k.f()}f=!1;case 56:if(i.nextChunk()!==null){O.next=6;break}case 57:case"end":return O.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var m3=g(ce(),1);var p3=g(Ur(),1),v3=g(as(),1);var h3=g(ce(),1);var ln=g(uT(),1);var cT=g(bi(),1),lT=g(zt(),1);var ds=g(qi(),1),sT=g(Kt(),1);function nr(e,r){var t;return nr=ds.default?(0,sT.default)(t=ds.default).call(t):function(n,i){return n.__proto__=i,n},nr(e,r)}function ms(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,cT.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,lT.default)(e,"prototype",{writable:!1}),r&&nr(e,r)}function fT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function pT(e,r){if(r&&(Be(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return fT(e)}var vT=g(qi(),1),dT=g(Kt(),1),hs=g(gi(),1);function Or(e){var r;return Or=vT.default?(0,dT.default)(r=hs.default).call(r):function(t){return t.__proto__||(0,hs.default)(t)},Or(e)}var js=g(FO(),1),uC=g(bi(),1);var eC=g(ZO(),1);function rC(e){try{var r;return(0,eC.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var nC=g(Li(),1),iC=g(Xu(),1),aC=g(Kt(),1);var tC=g(Li(),1);function Ms(){try{var e=!Boolean.prototype.valueOf.call((0,tC.default)(Boolean,[],function(){}))}catch{}return(Ms=function(){return!!e})()}function oC(e,r,t){if(Ms())return nC.default.apply(null,arguments);var n=[null];(0,iC.default)(n).apply(n,r);var i=new((0,aC.default)(e).apply(e,n));return t&&nr(i,t.prototype),i}function cn(e){var r=typeof js.default=="function"?new js.default:void 0;return cn=function(n){if(n===null||!rC(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,i)}function i(){return oC(n,arguments,Or(this).constructor)}return i.prototype=(0,uC.default)(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),nr(i,n)},cn(e)}function lC(e,r){var t=le(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i=sC(e.startContainer,e.startOffset),o=De(i,2),u=o[0],s=o[1];for(n.currentNode=u;s===u.length&&n.nextNode();)u=n.currentNode,s=0;e.setStart(u,s);var c=sC(e.endContainer,e.endOffset),l=De(c,2),f=l[0],p=l[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function sC(e,r){var t;if(cC(e))return[e,r];var n;if(DG(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(cC(n))return[n,0];var i=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=i.createTreeWalker(i,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function cC(e){return e.nodeType===Node.TEXT_NODE}function DG(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function pC(e){var r=BG();return function(){var n=Or(e),i;if(r){var o=Or(this).constructor;i=(0,ln.default)(n,arguments,o)}else i=n.apply(this,arguments);return pT(this,i)}}function BG(){if(typeof Reflect>"u"||!ln.default||ln.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,ln.default)(Boolean,[],function(){})),!0}catch{return!1}}var Hi=function(e){ms(t,e);var r=pC(t);function t(n){return wr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(cn(TypeError)),GG=function(e){ms(t,e);var r=pC(t);function t(n){return wr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(cn(TypeError)),Cr=function(){function e(r){var t=this;if(wr(this,e),Tr(this,"scope",void 0),Tr(this,"iter",void 0),this.scope=tr(r),this.iter=le(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!fC(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Hi}}return on(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!fC(t))throw new Hi;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new GG;var n=t===this.scope.startContainer?this.scope.startOffset:0,i=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:i,data:t.data.substring(n,i),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=lC(t,this.scope),i=this.nodeToChunk(n.startContainer),o=n.startOffset-i.startOffset,u=this.nodeToChunk(n.endContainer),s=n.endOffset-u.startOffset;return{startChunk:i,startIndex:o,endChunk:u,endIndex:s}}},{key:"chunkRangeToRange",value:function(t){var n=le(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function fC(e){return e.nodeType===Node.TEXT_NODE}function vC(e,r){return Ls.apply(this,arguments)}function Ls(){return Ls=Sr($s.default.mark(function e(r,t){var n,i,o,u=arguments;return $s.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},i=tr(t??le(r)),o=new Cr(i),c.next=5,JS(o.rangeToChunkRange(r),function(){return new Cr(i)},n);case 5:return c.abrupt("return",c.sent);case 6:case"end":return c.stop()}},e)})),Ls.apply(this,arguments)}var Fs=g(ce(),1);function dC(e){var r=$i(e);return function(){var t=Oe(Fs.default.mark(function i(o){var u,s,c,l,f,p,v,d;return Fs.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new Cr(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof Hi)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:s=!0,c=!1,m.prev=13,f=at(r(u));case 15:return m.next=17,er(f.next());case 17:return p=m.sent,s=p.done,m.next=21,er(p.value);case 21:if(v=m.sent,s){m.next=29;break}return d=v,m.next=26,u.chunkRangeToRange(d);case 26:s=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),c=!0,l=m.t1;case 35:if(m.prev=35,m.prev=36,!(!s&&f.return!=null)){m.next=40;break}return m.next=40,er(f.return());case 40:if(m.prev=40,!c){m.next=43;break}throw l;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},i,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(i){return t.apply(this,arguments)}return n}()}var UG=g(ce(),1);var WG=g(ce(),1);var ZG=g(IC(),1),e5=g(Ur(),1),r5=g(Ln(),1),t5=g(ei(),1),n5=g(ri(),1),i5=g(ti(),1);async function kC(e,r){let t=await vC(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function Ki(e,r){let t=dC({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var Er="fb-highlight",Ds="fb-highlight-active";var fn=null;function _C(e){fn=e}function zi(e,r){let t=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let n=PC(e,r);t.push(n)}else{let n=o5(e);for(let i=0;i<n.length;i++){let o=n[i],u=document.createRange();o===e.startContainer?(u.setStart(o,e.startOffset),u.setEnd(o,o.textContent.length)):o===e.endContainer?(u.setStart(o,0),u.setEnd(o,e.endOffset)):u.selectNodeContents(o),u.collapsed||t.push(PC(u,r))}}return t}function PC(e,r){let t=e.commonAncestorContainer;for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;let n=t,i=!1,o=null;for(;n;){if(n.tagName==="foreignObject"){i=!1;break}n.tagName==="text"&&n instanceof SVGElement&&(i=!0),n.tagName==="svg"&&(o=n),n=n.parentElement}if(i&&o)return a5(e,r,o);let u=document.createElement("mark");u.className=Er,u.dataset.commentId=r,u.style.backgroundColor="rgba(255, 212, 0, 0.35)",u.style.cursor="pointer",u.style.borderRadius="2px",u.addEventListener("click",()=>{fn&&fn(r)});try{e.surroundContents(u)}catch(s){return console.warn("[feedback-layer] Failed to create highlight:",s),null}return u}function a5(e,r,t){try{let n=e.getClientRects();if(n.length===0)return null;let i="http://www.w3.org/2000/svg",o=t.getScreenCTM();if(!o)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let u=e.commonAncestorContainer;for(;u&&u.nodeType!==Node.ELEMENT_NODE;)u=u.parentNode;let s=u,c=null;for(;s&&s!==t;){if(s.tagName==="text"){c=s.parentElement;break}s=s.parentElement}let l=c||t,f=o;l!==t&&l.getScreenCTM&&(f=l.getScreenCTM());let p=document.createElementNS(i,"g");p.setAttribute("class",Er),p.setAttribute("data-comment-id",r),p.style.cursor="pointer";for(let y=0;y<n.length;y++){let q=n[y],b=document.createElementNS(i,"rect"),I=t.createSVGPoint();I.x=q.left,I.y=q.top;let E=I.matrixTransform(f.inverse()),S=q.width/f.a,T=q.height/f.d;b.setAttribute("x",E.x),b.setAttribute("y",E.y),b.setAttribute("width",S),b.setAttribute("height",T),b.setAttribute("fill","#ffd400"),b.setAttribute("fill-opacity","0.35"),b.setAttribute("rx","2"),b.setAttribute("ry","2"),b.style.pointerEvents="none",p.appendChild(b)}l&&l!==t?l.appendChild(p):t.appendChild(p);let v=e.commonAncestorContainer;for(;v&&v.nodeType!==Node.ELEMENT_NODE;)v=v.parentNode;let d=new Set,h=v;for(;h&&h!==t;)h.tagName==="text"&&h instanceof SVGElement&&(d.add(h),h.querySelectorAll("tspan").forEach(q=>d.add(q))),h=h.parentElement;let m=y=>{y.preventDefault(),y.stopPropagation(),fn&&fn(r)};return d.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",m),y.dataset.fbCommentId=r}),p}catch(n){return console.warn("[feedback-layer] Failed to create SVG highlight:",n),null}}function Bs(e){document.querySelectorAll(`.${Er}[data-comment-id="${e}"]`).forEach(n=>{let i=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)i.removeChild(n);else{for(;n.firstChild;)i.insertBefore(n.firstChild,n);i.removeChild(n),i.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function RC(){document.querySelectorAll(`.${Er}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function Vi(e){document.querySelectorAll(`.${Er}`).forEach(r=>{let t=r.dataset.commentId===e,n="rgba(255, 180, 0, 0.55)",i="rgba(255, 212, 0, 0.35)";t?r.classList.add(Ds):r.classList.remove(Ds),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(u=>{u.setAttribute("fill",t?n:i)}):r.style.backgroundColor=t?n:i})}function AC(e){let r=document.querySelector(`.${Er}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function Gs(e){let r="rgba(255, 212, 0, 0.12)",t="rgba(255, 212, 0, 0.35)";document.querySelectorAll(`.${Er}`).forEach(n=>{let i=n.dataset.commentId,o=e.has(i);n.classList.contains(Ds)||(n.tagName==="g"||n instanceof SVGElement?n.querySelectorAll("rect").forEach(s=>{s.setAttribute("fill-opacity",o?"0.12":"0.35")}):n.style.backgroundColor=o?r:t)})}function o5(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let i=document.createRange();return i.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,i)<0&&e.compareBoundaryPoints(Range.START_TO_END,i)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function NC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,i)=>{let o=[`**${i+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let s of u)o.push(`  - **[${s.author}]** (reply): ${s.body}`);return o.join(`
`)}).join(`

`)}function MC(e,r){let t=NC(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(i=>!i.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function ir(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var u5=`
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
    background: white;
    border-radius: 12px;
    width: 90%;
    max-width: 800px;
    max-height: 85vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }

  .hf-modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    border-bottom: 1px solid #e5e7eb;
  }

  .hf-modal-header h2 {
    margin: 0;
    font-size: 18px;
    color: #1f2937;
  }

  .hf-modal-close {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #6b7280;
    padding: 0 4px;
  }

  .hf-modal-body {
    padding: 20px;
    overflow-y: auto;
    flex: 1;
  }

  .hf-modal-footer {
    padding: 12px 20px;
    border-top: 1px solid #e5e7eb;
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
    background: #7c3aed;
    color: white;
  }
  .hf-btn-primary:hover { background: #6d28d9; }

  .hf-btn-secondary {
    background: #f3f4f6;
    color: #374151;
  }
  .hf-btn-secondary:hover { background: #e5e7eb; }

  .hf-prompt-area {
    width: 100%;
    min-height: 300px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    padding: 12px;
    font-family: "SF Mono", Monaco, "Cascadia Code", monospace;
    font-size: 12px;
    resize: vertical;
    box-sizing: border-box;
  }

  .hf-status {
    padding: 12px;
    border-radius: 6px;
    margin-bottom: 12px;
    font-size: 14px;
  }

  .hf-status-info { background: #eff6ff; color: #1e40af; }
  .hf-status-success { background: #f0fdf4; color: #166534; }
  .hf-status-error { background: #fef2f2; color: #991b1b; }
`,jC=null,$C=null;function LC(e,r){$C=e,jC=r,s5()}function s5(){let e=document.createElement("style");e.textContent=u5,document.head.appendChild(e)}function FC(){let e=jC(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let i=document.createElement("button");i.className="hf-modal-close",i.textContent="\xD7",i.addEventListener("click",()=>r.remove()),n.appendChild(i);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",p=>{p.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let s=document.querySelector($C.contentSelector||"body").innerHTML,c=MC(s,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${c.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${ir(c)}</textarea>
  `;let l=document.createElement("button");l.className="hf-btn hf-btn-primary",l.textContent="Copy Prompt",l.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c),l.textContent="Copied!"}catch{l.textContent="Copy failed"}setTimeout(()=>l.textContent="Copy Prompt",2e3)}),u.appendChild(l);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function DC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function BC(e,r){return e.length>r?e.slice(0,r)+"...":e}function GC(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var pn=null;function WC(e){pn=document.createElement("div"),pn.className="fb-toast-container",e.appendChild(pn)}function Ir(e,r="success"){if(!pn)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>UC(t)),t.appendChild(o)}pn.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>UC(t),r==="error"?8e3:4e3)}function UC(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}function HC(e,r){let t;return(...n)=>{clearTimeout(t),t=setTimeout(()=>e(...n),r)}}var c5=320,zC="feedback-layer-commenter",G=null,We=null,Ue=null,Us=null,VC=null,Hs=null,Ks=null,zs=null,Vs=null,Ws=null,Ys=!1,YC=[],JC=new Set,QC=null;function ot(){return localStorage.getItem(zC)||""}function XC({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:i,onSearch:o}){VC=e,Hs=r,Ks=t,zs=n,Vs=i,Ws=o,v5(),G=document.createElement("div"),G.className="fb-sidebar fb-sidebar-collapsed",G.innerHTML=`
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
               value="${ir(ot())}">
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
  `;let u=document.createElement("button");u.className="fb-sidebar-tab",u.textContent="Feedback",u.addEventListener("click",()=>vn()),document.body.appendChild(u),document.body.appendChild(G),WC(G),We=G.querySelector(".fb-comment-list"),Ue=G.querySelector(".fb-form-section");let s=G.querySelector(".fb-name-input");s.addEventListener("input",()=>{localStorage.setItem(zC,s.value.trim())}),G.querySelector(".fb-ai-btn").addEventListener("click",()=>FC()),G.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>l5());let f=G.querySelector(".fb-show-resolved-cb");f.addEventListener("change",()=>{Ys=f.checked,Ee(YC,JC,new Map,QC)});let p=G.querySelector(".fb-search-input"),v=G.querySelector(".fb-author-filter"),d=()=>{Ws&&Ws(p.value.trim(),v.value)};p.addEventListener("input",HC(d,300)),v.addEventListener("change",d)}function vn(){G.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden")}function l5(){G.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden")}function ZC(e){if(vn(),!ot()){let n=G.querySelector(".fb-name-input");n.style.outline="2px solid #ef4444",setTimeout(()=>n.style.outline="",2e3)}Us=e,Ue.style.display="",Ue.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${ir(BC(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `;let r=Ue.querySelector(".fb-form-textarea");r.focus();let t=()=>{if(!ot()){let i=G.querySelector(".fb-name-input");i.focus(),i.style.outline="2px solid #ef4444",setTimeout(()=>i.style.outline="",2e3);return}let n=r.value.trim();n&&(VC({comment:n,commenter:ot()}),Ue.style.display="none",Us=null)};Ue.querySelector(".fb-submit-btn").addEventListener("click",t),r.addEventListener("keydown",n=>{n.key==="Enter"&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),t())}),Ue.querySelector(".fb-cancel-btn").addEventListener("click",()=>{Ue.style.display="none",Us=null}),Ue.scrollIntoView({behavior:"smooth",block:"nearest"})}function eE(e){let r=G.querySelector(".fb-author-filter"),t=r.value;r.innerHTML='<option value="">All authors</option>';for(let n of e.sort()){let i=document.createElement("option");i.value=n,i.textContent=n,r.appendChild(i)}e.includes(t)&&(r.value=t)}function Ee(e,r=new Set,t=new Map,n=null){YC=e,JC=r,QC=n,We.innerHTML="";let{topLevel:i,repliesByParent:o}=DC(e),u=i.slice().sort((f,p)=>{let v=t.get(f.id),d=t.get(p.id);return!v||!d?0:v.compareBoundaryPoints(Range.START_TO_START,d)}),s=u.filter(f=>{let p=r.has(f.id),v=f.status==="closed";return p||v&&Ys}),c=Ys?s:s.filter(f=>f.status!=="closed");if(u.length===0){We.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let l=u.filter(f=>!r.has(f.id)&&f.status!=="closed").length;if(c.length===0){l>0?We.innerHTML=`<div class="fb-empty">
        ${s.length} comment(s) resolved.
        ${l>0?`<br>${l} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:We.innerHTML=`<div class="fb-empty">All ${u.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let f of c){let p=document.createElement("div");p.className="fb-thread";let v=o.get(f.id)||[];n!==null&&(n.has(f.id)||v.some(m=>n.has(m.id))||p.classList.add("fb-thread-dimmed")),p.appendChild(KC(f,!1));for(let h of v)p.appendChild(KC(h,!0));let d=document.createElement("button");d.className="fb-reply-btn",d.textContent="Reply",d.addEventListener("click",h=>{h.stopPropagation(),f5(f.id,p,d)}),p.appendChild(d),We.appendChild(p)}}function KC(e,r){let t=e.status==="closed",n=document.createElement("div");return n.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":""),n.dataset.id=e.id,n.innerHTML=`
    <div class="fb-cmt-body">${ir(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${ir(e.author)}</span>
      <span class="fb-cmt-time">${GC(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
  `,r||(n.addEventListener("click",i=>{i.target.closest(".fb-cmt-delete")||i.target.closest(".fb-cmt-resolve")||i.target.closest(".fb-cmt-edit")||(Vi(e.id),AC(e.id),We.querySelectorAll(".fb-cmt-card").forEach(o=>o.classList.remove("fb-cmt-active")),n.classList.add("fb-cmt-active"))}),n.querySelector(".fb-cmt-resolve").addEventListener("click",i=>{i.stopPropagation(),Ks&&Ks(e.id,!t)})),n.querySelector(".fb-cmt-edit").addEventListener("click",i=>{i.stopPropagation(),p5(e,n)}),n.querySelector(".fb-cmt-delete").addEventListener("click",i=>{i.stopPropagation(),Hs&&Hs(e.id)}),n}function f5(e,r,t){vn();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let i=document.createElement("div");i.className="fb-reply-form",i.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!ot()){let c=G.querySelector(".fb-name-input");c.focus(),c.style.outline="2px solid #ef4444",setTimeout(()=>c.style.outline="",2e3);return}let s=i.querySelector("textarea").value.trim();s&&(zs&&zs({parent_id:e,comment:s,commenter:ot()}),i.remove(),t.style.display="")};i.querySelector(".fb-reply-submit").addEventListener("click",o);let u=i.querySelector("textarea");u.addEventListener("keydown",s=>{s.key==="Enter"&&(s.metaKey||s.ctrlKey)&&(s.preventDefault(),o())}),i.querySelector(".fb-reply-cancel").addEventListener("click",()=>{i.remove(),t.style.display=""}),r.insertBefore(i,t),u.focus()}function p5(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${ir(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let i=t.querySelector("textarea");i.focus(),i.setSelectionRange(i.value.length,i.value.length);let o=()=>{let u=i.value.trim();u&&Vs&&Vs(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),i.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function rE(e){let r=We.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(We.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function v5(){let e=document.createElement("style");e.textContent=`
    .fb-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: ${c5}px;
      height: 100vh;
      background: #fafafa;
      border-left: 1px solid #e0e0e0;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 14px;
      color: #333;
      transition: transform 0.25s ease;
      box-shadow: -2px 0 8px rgba(0,0,0,0.08);
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
      background: #7c3aed;
      color: white;
      border: none;
      border-radius: 6px 6px 0 0;
      padding: 6px 16px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      box-shadow: -2px 0 6px rgba(0,0,0,0.15);
      transition: opacity 0.2s;
    }
    .fb-sidebar-tab:hover {
      background: #6d28d9;
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
      border-bottom: 1px solid #e0e0e0;
      background: #fff;
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
      color: #7c3aed;
      padding: 4px;
      line-height: 1;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .fb-ai-btn:hover {
      background: #f3f0ff;
    }
    .fb-sidebar-toggle {
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: #666;
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
      color: #666;
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .fb-name-input {
      width: 100%;
      padding: 8px 10px;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      font-size: 14px;
      box-sizing: border-box;
    }
    .fb-name-input:focus {
      outline: none;
      border-color: #7c3aed;
      box-shadow: 0 0 0 2px rgba(124,58,237,0.15);
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
      color: #999;
      font-size: 13px;
      text-align: center;
      padding: 24px 12px;
    }
    .fb-cmt-card {
      background: #fff;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 10px 12px;
      cursor: pointer;
      transition: border-color 0.15s;
    }
    .fb-cmt-card:hover {
      border-color: #c4b5fd;
    }
    .fb-cmt-active {
      border-color: #7c3aed;
      box-shadow: 0 0 0 2px rgba(124,58,237,0.12);
    }
    .fb-cmt-quote {
      font-size: 12px;
      color: #888;
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
      color: #999;
    }
    .fb-cmt-author {
      font-weight: 600;
      color: #7c3aed;
    }
    .fb-cmt-resolve {
      background: none;
      border: none;
      color: #aaa;
      cursor: pointer;
      font-size: 14px;
      padding: 0 2px;
      line-height: 1;
      margin-left: auto;
    }
    .fb-cmt-resolve:hover {
      color: #16a34a;
    }
    .fb-cmt-edit {
      background: none;
      border: none;
      color: #aaa;
      cursor: pointer;
      font-size: 14px;
      padding: 0 2px;
      line-height: 1;
    }
    .fb-cmt-edit:hover {
      color: #7c3aed;
    }
    .fb-cmt-delete {
      background: none;
      border: none;
      color: #ccc;
      cursor: pointer;
      font-size: 16px;
      padding: 0 2px;
      line-height: 1;
    }
    .fb-cmt-delete:hover {
      color: #ef4444;
    }
    .fb-cmt-closed {
      opacity: 0.5;
      border-left: 3px solid #16a34a;
    }
    .fb-cmt-closed .fb-cmt-body {
      text-decoration: line-through;
    }
    .fb-cmt-closed .fb-cmt-resolve {
      color: #16a34a;
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
      border: 1px solid #d1d5db;
      border-radius: 6px;
      font-size: 13px;
      box-sizing: border-box;
      font-family: inherit;
    }
    .fb-search-input:focus {
      outline: none;
      border-color: #7c3aed;
      box-shadow: 0 0 0 2px rgba(124,58,237,0.15);
    }
    .fb-author-filter {
      width: 100%;
      padding: 6px 10px;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      font-size: 13px;
      box-sizing: border-box;
      font-family: inherit;
      background: #fff;
      cursor: pointer;
    }
    .fb-author-filter:focus {
      outline: none;
      border-color: #7c3aed;
      box-shadow: 0 0 0 2px rgba(124,58,237,0.15);
    }
    .fb-thread-dimmed {
      opacity: 0.35;
    }
    .fb-filter-toggle {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: #888;
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
      border-left: 2px solid #e5e7eb;
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
      color: #7c3aed;
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
      background: #fff;
      border: 1px solid #d1d5db;
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
      background: #fff;
      border: 2px solid #7c3aed;
      border-radius: 8px;
      padding: 12px;
    }
    .fb-form-quote {
      font-size: 12px;
      color: #888;
      font-style: italic;
      margin-bottom: 8px;
    }
    .fb-form-textarea {
      width: 100%;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      padding: 8px 10px;
      font-size: 13px;
      font-family: inherit;
      resize: vertical;
      box-sizing: border-box;
    }
    .fb-form-textarea:focus {
      outline: none;
      border-color: #7c3aed;
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
      background: #7c3aed;
      color: white;
    }
    .fb-btn-primary:hover { background: #6d28d9; }
    .fb-btn-cancel {
      background: #f3f4f6;
      color: #555;
    }
    .fb-btn-cancel:hover { background: #e5e7eb; }

    /* Annotate tooltip (appears on text selection) */
    .fb-annotate-tooltip {
      position: absolute;
      z-index: 10001;
      background: #7c3aed;
      color: white;
      border: none;
      border-radius: 18px;
      padding: 8px 16px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      box-shadow: 0 4px 12px rgba(124, 58, 237, 0.4), 0 2px 4px rgba(0,0,0,0.1);
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
      bottom: -6px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 8px solid #7c3aed;
      filter: drop-shadow(0 2px 2px rgba(0,0,0,0.1));
    }
    .fb-annotate-tooltip:hover {
      background: #6d28d9;
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(124, 58, 237, 0.5), 0 2px 6px rgba(0,0,0,0.15);
    }
    .fb-annotate-tooltip:hover::after {
      border-top-color: #6d28d9;
    }
    @keyframes fb-tooltip-appear {
      from {
        opacity: 0;
        transform: translateY(-4px);
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
  `,document.head.appendChild(e)}var ut=null,mn=null,hn=null,D=[],kr=null,Ie=null,oe=new Set,ge=new Map,ke=null;function d5(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null,apiKey:e?.dataset.apiKey||null};Xs(r.apiUrl),r.apiKey&&Zs(r.apiKey);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{ut=document.querySelector(r.contentSelector)||document.body,mn=r.documentUri||window.location.origin+window.location.pathname,hn=r.documentId||null,XC({onSubmit:q5,onDelete:T5,onResolve:x5,onReply:S5,onEdit:w5,onSearch:b5}),_C(i=>{vn(),rE(i),Vi(i)}),y5(),await t(),m5(),LC(r,()=>D)}catch(i){console.error("[feedback-layer] Boot failed:",i)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function m5(){try{D=await Qi(mn,hn),oe=await h5(D),Yi(),Ee(D,oe,ge,ke)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),Ir(`Failed to load comments: ${e.message}`,"error")}}function Yi(){let e=[...new Set(D.map(r=>r.author))];eE(e)}async function h5(e){RC();let r=new Set;ge.clear();for(let t of e)if(!t.parent)try{let n=await Ki({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ut);n&&t.status!=="closed"?(zi(n,t.id),r.add(t.id),ge.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),ge.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function y5(){document.addEventListener("mouseup",tE),document.addEventListener("keyup",tE)}function tE(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){dn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){dn();return}if(!ut.contains(r.commonAncestorContainer)){dn();return}g5(r)},10)}function g5(e){dn();let r=e.getBoundingClientRect();Ie=document.createElement("button"),Ie.className="fb-annotate-tooltip",Ie.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',Ie.style.top=window.scrollY+r.top-36+"px",Ie.style.left=window.scrollX+r.left+r.width/2-40+"px",Ie.addEventListener("mousedown",async t=>{t.preventDefault(),t.stopPropagation();let n=window.getSelection();if(!n||n.isCollapsed)return;let i=n.getRangeAt(0);try{kr=await kC(i,ut),ZC(kr.exact)}catch(o){console.error("[feedback-layer] Failed to create selector:",o)}dn()}),document.body.appendChild(Ie)}function dn(){Ie&&(Ie.remove(),Ie=null)}async function b5(e,r){if(!e&&!r){ke=null,Ee(D,oe,ge,null),Gs(new Set);return}try{let t=await Qi(mn,hn,{search:e,author:r});ke=new Set(t.map(i=>i.id)),Ee(D,oe,ge,ke);let n=new Set;for(let i of D)!i.parent&&oe.has(i.id)&&!ke.has(i.id)&&n.add(i.id);Gs(n)}catch(t){console.error("[feedback-layer] Search failed:",t)}}async function q5({comment:e,commenter:r}){if(kr){try{let t=await Xi({uri:mn,document:hn,quote:kr.exact,prefix:kr.prefix,suffix:kr.suffix,body:e,author:r});D.push(t);let n=await Ki({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ut);n&&(zi(n,t.id),oe.add(t.id)),Yi(),Ee(D,oe,ge,ke),window.getSelection().removeAllRanges()}catch(t){console.error("[feedback-layer] Failed to create comment:",t),Ir(`Failed to save comment: ${t.message}`,"error")}kr=null}}async function x5(e,r){try{let n=await rc(e,r?"closed":"open"),i=D.findIndex(o=>o.id===e);if(i!==-1&&(D[i]=n),r)Bs(e);else{let o=n,u=await Ki({exact:o.quote,prefix:o.prefix,suffix:o.suffix},ut);u?(zi(u,o.id),oe.add(o.id)):oe.delete(o.id)}Ee(D,oe,ge,ke)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),Ir(`Failed to update comment: ${t.message}`,"error")}}async function S5({parent_id:e,comment:r,commenter:t}){try{let n=await Xi({uri:mn,document:hn,body:r,author:t,parent:e});D.push(n),Yi(),Ee(D,oe,ge,ke)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),Ir(`Failed to save reply: ${n.message}`,"error")}}async function w5(e,r){try{let t=await ec(e,{body:r}),n=D.findIndex(i=>i.id===e);n!==-1&&(D[n]=t),Ee(D,oe,ge,ke)}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),Ir(`Failed to update comment: ${t.message}`,"error")}}async function T5(e){try{await tc(e),Bs(e),oe.delete(e),D=D.filter(r=>r.id!==e&&r.parent!==e),Yi(),Ee(D,oe,ge,ke)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),Ir(`Failed to delete comment: ${r.message}`,"error")}}try{d5()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
