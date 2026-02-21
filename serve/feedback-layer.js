var FeedbackLayer=(()=>{var zC=Object.create;var Us=Object.defineProperty;var YC=Object.getOwnPropertyDescriptor;var JC=Object.getOwnPropertyNames;var QC=Object.getPrototypeOf,XC=Object.prototype.hasOwnProperty;var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var ZC=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of JC(r))!XC.call(e,i)&&i!==t&&Us(e,i,{get:()=>r[i],enumerable:!(n=YC(r,i))||n.enumerable});return e};var g=(e,r,t)=>(t=e!=null?zC(QC(e)):{},ZC(r||!e||!e.__esModule?Us(t,"default",{value:e,enumerable:!0}):t,e));var P=a((hU,Ys)=>{"use strict";Ys.exports=function(e){try{return!!e()}catch{return!0}}});var Pr=a((yU,Js)=>{"use strict";var eE=P();Js.exports=!eE(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var A=a((gU,Zs)=>{"use strict";var Qs=Pr(),Xs=Function.prototype,zi=Xs.call,rE=Qs&&Xs.bind.bind(zi,zi);Zs.exports=Qs?rE:function(e){return function(){return zi.apply(e,arguments)}}});var B=a((bU,ec)=>{"use strict";var tE=A();ec.exports=tE({}.isPrototypeOf)});var _=a((Yi,rc)=>{"use strict";var st=function(e){return e&&e.Math===Math&&e};rc.exports=st(typeof globalThis=="object"&&globalThis)||st(typeof window=="object"&&window)||st(typeof self=="object"&&self)||st(typeof global=="object"&&global)||st(typeof Yi=="object"&&Yi)||function(){return this}()||Function("return this")()});var _r=a((qU,ac)=>{"use strict";var nE=Pr(),ic=Function.prototype,tc=ic.apply,nc=ic.call;ac.exports=typeof Reflect=="object"&&Reflect.apply||(nE?nc.bind(tc):function(){return nc.apply(tc,arguments)})});var xe=a((xU,uc)=>{"use strict";var oc=A(),iE=oc({}.toString),aE=oc("".slice);uc.exports=function(e){return aE(iE(e),8,-1)}});var ct=a((SU,sc)=>{"use strict";var oE=xe(),uE=A();sc.exports=function(e){if(oE(e)==="Function")return uE(e)}});var N=a((wU,cc)=>{"use strict";var Ji=typeof document=="object"&&document.all;cc.exports=typeof Ji>"u"&&Ji!==void 0?function(e){return typeof e=="function"||e===Ji}:function(e){return typeof e=="function"}});var G=a((TU,lc)=>{"use strict";var sE=P();lc.exports=!sE(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var D=a((OU,fc)=>{"use strict";var cE=Pr(),vn=Function.prototype.call;fc.exports=cE?vn.bind(vn):function(){return vn.apply(vn,arguments)}});var Qi=a(dc=>{"use strict";var pc={}.propertyIsEnumerable,vc=Object.getOwnPropertyDescriptor,lE=vc&&!pc.call({1:2},1);dc.f=lE?function(r){var t=vc(this,r);return!!t&&t.enumerable}:pc});var He=a((EU,mc)=>{"use strict";mc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var dn=a((IU,hc)=>{"use strict";var fE=A(),pE=P(),vE=xe(),Xi=Object,dE=fE("".split);hc.exports=pE(function(){return!Xi("z").propertyIsEnumerable(0)})?function(e){return vE(e)==="String"?dE(e,""):Xi(e)}:Xi});var ar=a((kU,yc)=>{"use strict";yc.exports=function(e){return e==null}});var or=a((PU,gc)=>{"use strict";var mE=ar(),hE=TypeError;gc.exports=function(e){if(mE(e))throw new hE("Can't call method on "+e);return e}});var Ie=a((_U,bc)=>{"use strict";var yE=dn(),gE=or();bc.exports=function(e){return yE(gE(e))}});var $=a((RU,qc)=>{"use strict";var bE=N();qc.exports=function(e){return typeof e=="object"?e!==null:bE(e)}});var K=a((AU,xc)=>{"use strict";xc.exports={}});var U=a((NU,wc)=>{"use strict";var Zi=K(),ea=_(),qE=N(),Sc=function(e){return qE(e)?e:void 0};wc.exports=function(e,r){return arguments.length<2?Sc(Zi[e])||Sc(ea[e]):Zi[e]&&Zi[e][r]||ea[e]&&ea[e][r]}});var Rr=a((MU,Cc)=>{"use strict";var xE=_(),Tc=xE.navigator,Oc=Tc&&Tc.userAgent;Cc.exports=Oc?String(Oc):""});var Ar=a((jU,Rc)=>{"use strict";var _c=_(),ra=Rr(),Ec=_c.process,Ic=_c.Deno,kc=Ec&&Ec.versions||Ic&&Ic.version,Pc=kc&&kc.v8,me,mn;Pc&&(me=Pc.split("."),mn=me[0]>0&&me[0]<4?1:+(me[0]+me[1]));!mn&&ra&&(me=ra.match(/Edge\/(\d+)/),(!me||me[1]>=74)&&(me=ra.match(/Chrome\/(\d+)/),me&&(mn=+me[1])));Rc.exports=mn});var ur=a(($U,Nc)=>{"use strict";var Ac=Ar(),SE=P(),wE=_(),TE=wE.String;Nc.exports=!!Object.getOwnPropertySymbols&&!SE(function(){var e=Symbol("symbol detection");return!TE(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Ac&&Ac<41})});var ta=a((LU,Mc)=>{"use strict";var OE=ur();Mc.exports=OE&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Nr=a((FU,jc)=>{"use strict";var CE=U(),EE=N(),IE=B(),kE=ta(),PE=Object;jc.exports=kE?function(e){return typeof e=="symbol"}:function(e){var r=CE("Symbol");return EE(r)&&IE(r.prototype,PE(e))}});var Ke=a((DU,$c)=>{"use strict";var _E=String;$c.exports=function(e){try{return _E(e)}catch{return"Object"}}});var F=a((BU,Lc)=>{"use strict";var RE=N(),AE=Ke(),NE=TypeError;Lc.exports=function(e){if(RE(e))return e;throw new NE(AE(e)+" is not a function")}});var hn=a((GU,Fc)=>{"use strict";var ME=F(),jE=ar();Fc.exports=function(e,r){var t=e[r];return jE(t)?void 0:ME(t)}});var Bc=a((UU,Dc)=>{"use strict";var na=D(),ia=N(),aa=$(),$E=TypeError;Dc.exports=function(e,r){var t,n;if(r==="string"&&ia(t=e.toString)&&!aa(n=na(t,e))||ia(t=e.valueOf)&&!aa(n=na(t,e))||r!=="string"&&ia(t=e.toString)&&!aa(n=na(t,e)))return n;throw new $E("Can't convert object to primitive value")}});var Z=a((WU,Gc)=>{"use strict";Gc.exports=!0});var Hc=a((HU,Wc)=>{"use strict";var Uc=_(),LE=Object.defineProperty;Wc.exports=function(e,r){try{LE(Uc,e,{value:r,configurable:!0,writable:!0})}catch{Uc[e]=r}return r}});var lt=a((KU,zc)=>{"use strict";var FE=Z(),DE=_(),BE=Hc(),Kc="__core-js_shared__",Vc=zc.exports=DE[Kc]||BE(Kc,{});(Vc.versions||(Vc.versions=[])).push({version:"3.48.0",mode:FE?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var sr=a((VU,Jc)=>{"use strict";var Yc=lt();Jc.exports=function(e,r){return Yc[e]||(Yc[e]=r||{})}});var re=a((zU,Qc)=>{"use strict";var GE=or(),UE=Object;Qc.exports=function(e){return UE(GE(e))}});var W=a((YU,Xc)=>{"use strict";var WE=A(),HE=re(),KE=WE({}.hasOwnProperty);Xc.exports=Object.hasOwn||function(r,t){return KE(HE(r),t)}});var Mr=a((JU,Zc)=>{"use strict";var VE=A(),zE=0,YE=Math.random(),JE=VE(1.1.toString);Zc.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+JE(++zE+YE,36)}});var R=a((QU,rl)=>{"use strict";var QE=_(),XE=sr(),el=W(),ZE=Mr(),e0=ur(),r0=ta(),jr=QE.Symbol,oa=XE("wks"),t0=r0?jr.for||jr:jr&&jr.withoutSetter||ZE;rl.exports=function(e){return el(oa,e)||(oa[e]=e0&&el(jr,e)?jr[e]:t0("Symbol."+e)),oa[e]}});var al=a((XU,il)=>{"use strict";var n0=D(),tl=$(),nl=Nr(),i0=hn(),a0=Bc(),o0=R(),u0=TypeError,s0=o0("toPrimitive");il.exports=function(e,r){if(!tl(e)||nl(e))return e;var t=i0(e,s0),n;if(t){if(r===void 0&&(r="default"),n=n0(t,e,r),!tl(n)||nl(n))return n;throw new u0("Can't convert object to primitive value")}return r===void 0&&(r="number"),a0(e,r)}});var yn=a((ZU,ol)=>{"use strict";var c0=al(),l0=Nr();ol.exports=function(e){var r=c0(e,"string");return l0(r)?r:r+""}});var gn=a((e5,sl)=>{"use strict";var f0=_(),ul=$(),ua=f0.document,p0=ul(ua)&&ul(ua.createElement);sl.exports=function(e){return p0?ua.createElement(e):{}}});var sa=a((r5,cl)=>{"use strict";var v0=G(),d0=P(),m0=gn();cl.exports=!v0&&!d0(function(){return Object.defineProperty(m0("div"),"a",{get:function(){return 7}}).a!==7})});var ft=a(fl=>{"use strict";var h0=G(),y0=D(),g0=Qi(),b0=He(),q0=Ie(),x0=yn(),S0=W(),w0=sa(),ll=Object.getOwnPropertyDescriptor;fl.f=h0?ll:function(r,t){if(r=q0(r),t=x0(t),w0)try{return ll(r,t)}catch{}if(S0(r,t))return b0(!y0(g0.f,r,t),r[t])}});var ca=a((n5,pl)=>{"use strict";var T0=P(),O0=N(),C0=/#|\.prototype\./,pt=function(e,r){var t=I0[E0(e)];return t===P0?!0:t===k0?!1:O0(r)?T0(r):!!r},E0=pt.normalize=function(e){return String(e).replace(C0,".").toLowerCase()},I0=pt.data={},k0=pt.NATIVE="N",P0=pt.POLYFILL="P";pl.exports=pt});var V=a((i5,dl)=>{"use strict";var vl=ct(),_0=F(),R0=Pr(),A0=vl(vl.bind);dl.exports=function(e,r){return _0(e),r===void 0?e:R0?A0(e,r):function(){return e.apply(r,arguments)}}});var la=a((a5,ml)=>{"use strict";var N0=G(),M0=P();ml.exports=N0&&M0(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var Q=a((o5,hl)=>{"use strict";var j0=$(),$0=String,L0=TypeError;hl.exports=function(e){if(j0(e))return e;throw new L0($0(e)+" is not an object")}});var te=a(gl=>{"use strict";var F0=G(),D0=sa(),B0=la(),bn=Q(),yl=yn(),G0=TypeError,fa=Object.defineProperty,U0=Object.getOwnPropertyDescriptor,pa="enumerable",va="configurable",da="writable";gl.f=F0?B0?function(r,t,n){if(bn(r),t=yl(t),bn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&da in n&&!n[da]){var i=U0(r,t);i&&i[da]&&(r[t]=n.value,n={configurable:va in n?n[va]:i[va],enumerable:pa in n?n[pa]:i[pa],writable:!1})}return fa(r,t,n)}:fa:function(r,t,n){if(bn(r),t=yl(t),bn(n),D0)try{return fa(r,t,n)}catch{}if("get"in n||"set"in n)throw new G0("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var Se=a((s5,bl)=>{"use strict";var W0=G(),H0=te(),K0=He();bl.exports=W0?function(e,r,t){return H0.f(e,r,K0(1,t))}:function(e,r,t){return e[r]=t,e}});var x=a((c5,xl)=>{"use strict";var vt=_(),V0=_r(),z0=ct(),Y0=N(),J0=ft().f,Q0=ca(),$r=K(),X0=V(),Lr=Se(),ql=W();lt();var Z0=function(e){var r=function(t,n,i){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return V0(e,this,arguments)};return r.prototype=e.prototype,r};xl.exports=function(e,r){var t=e.target,n=e.global,i=e.stat,o=e.proto,u=n?vt:i?vt[t]:vt[t]&&vt[t].prototype,l=n?$r:$r[t]||Lr($r,t,{})[t],c=l.prototype,s,f,p,v,d,h,m,y,q;for(v in r)s=Q0(n?v:t+(i?".":"#")+v,e.forced),f=!s&&u&&ql(u,v),h=l[v],f&&(e.dontCallGetSet?(q=J0(u,v),m=q&&q.value):m=u[v]),d=f&&m?m:r[v],!(!s&&!o&&typeof h==typeof d)&&(e.bind&&f?y=X0(d,vt):e.wrap&&f?y=Z0(d):o&&Y0(d)?y=z0(d):y=d,(e.sham||d&&d.sham||h&&h.sham)&&Lr(y,"sham",!0),Lr(l,v,y),o&&(p=t+"Prototype",ql($r,p)||Lr($r,p,{}),Lr($r[p],v,d),e.real&&c&&(s||!c[v])&&Lr(c,v,d)))}});var ke=a((l5,Sl)=>{"use strict";var eI=xe();Sl.exports=Array.isArray||function(r){return eI(r)==="Array"}});var qn=a((f5,Tl)=>{"use strict";var rI=R(),tI=rI("toStringTag"),wl={};wl[tI]="z";Tl.exports=String(wl)==="[object z]"});var dt=a((p5,Ol)=>{"use strict";var nI=qn(),iI=N(),xn=xe(),aI=R(),oI=aI("toStringTag"),uI=Object,sI=xn(function(){return arguments}())==="Arguments",cI=function(e,r){try{return e[r]}catch{}};Ol.exports=nI?xn:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=cI(r=uI(e),oI))=="string"?t:sI?xn(r):(n=xn(r))==="Object"&&iI(r.callee)?"Arguments":n}});var ha=a((v5,Cl)=>{"use strict";var lI=A(),fI=N(),ma=lt(),pI=lI(Function.toString);fI(ma.inspectSource)||(ma.inspectSource=function(e){return pI(e)});Cl.exports=ma.inspectSource});var ht=a((d5,_l)=>{"use strict";var vI=A(),dI=P(),El=N(),mI=dt(),hI=U(),yI=ha(),Il=function(){},kl=hI("Reflect","construct"),ya=/^\s*(?:class|function)\b/,gI=vI(ya.exec),bI=!ya.test(Il),mt=function(r){if(!El(r))return!1;try{return kl(Il,[],r),!0}catch{return!1}},Pl=function(r){if(!El(r))return!1;switch(mI(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return bI||!!gI(ya,yI(r))}catch{return!0}};Pl.sham=!0;_l.exports=!kl||dI(function(){var e;return mt(mt.call)||!mt(Object)||!mt(function(){e=!0})||e})?Pl:mt});var Al=a((m5,Rl)=>{"use strict";var qI=Math.ceil,xI=Math.floor;Rl.exports=Math.trunc||function(r){var t=+r;return(t>0?xI:qI)(t)}});var Sn=a((h5,Nl)=>{"use strict";var SI=Al();Nl.exports=function(e){var r=+e;return r!==r||r===0?0:SI(r)}});var ga=a((y5,Ml)=>{"use strict";var wI=Sn(),TI=Math.max,OI=Math.min;Ml.exports=function(e,r){var t=wI(e);return t<0?TI(t+r,0):OI(t,r)}});var ba=a((g5,jl)=>{"use strict";var CI=Sn(),EI=Math.min;jl.exports=function(e){var r=CI(e);return r>0?EI(r,9007199254740991):0}});var le=a((b5,$l)=>{"use strict";var II=ba();$l.exports=function(e){return II(e.length)}});var Fr=a((q5,Ll)=>{"use strict";var kI=G(),PI=te(),_I=He();Ll.exports=function(e,r,t){kI?PI.f(e,r,_I(0,t)):e[r]=t}});var Dr=a((x5,Fl)=>{"use strict";var RI=G(),AI=ke(),NI=TypeError,MI=Object.getOwnPropertyDescriptor,jI=RI&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();Fl.exports=jI?function(e,r){if(AI(e)&&!MI(e,"length").writable)throw new NI("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var yt=a((S5,Dl)=>{"use strict";var $I=P(),LI=R(),FI=Ar(),DI=LI("species");Dl.exports=function(e){return FI>=51||!$I(function(){var r=[],t=r.constructor={};return t[DI]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var cr=a((w5,Bl)=>{"use strict";var BI=A();Bl.exports=BI([].slice)});var Wl=a(()=>{"use strict";var GI=x(),Gl=ke(),UI=ht(),WI=$(),Ul=ga(),HI=le(),KI=Ie(),VI=Fr(),zI=Dr(),YI=R(),JI=yt(),QI=cr(),XI=JI("slice"),ZI=YI("species"),qa=Array,ek=Math.max;GI({target:"Array",proto:!0,forced:!XI},{slice:function(r,t){var n=KI(this),i=HI(n),o=Ul(r,i),u=Ul(t===void 0?i:t,i),l,c,s;if(Gl(n)&&(l=n.constructor,UI(l)&&(l===qa||Gl(l.prototype))?l=void 0:WI(l)&&(l=l[ZI],l===null&&(l=void 0)),l===qa||l===void 0))return QI(n,o,u);for(c=new(l===void 0?qa:l)(ek(u-o,0)),s=0;o<u;o++,s++)o in n&&VI(c,s,n[o]);return zI(c,s),c}})});var oe=a((C5,Hl)=>{"use strict";var rk=_(),tk=K();Hl.exports=function(e,r){var t=tk[e+"Prototype"],n=t&&t[r];if(n)return n;var i=rk[e],o=i&&i.prototype;return o&&o[r]}});var Vl=a((E5,Kl)=>{"use strict";Wl();var nk=oe();Kl.exports=nk("Array","slice")});var Yl=a((I5,zl)=>{"use strict";var ik=B(),ak=Vl(),xa=Array.prototype;zl.exports=function(e){var r=e.slice;return e===xa||ik(xa,e)&&r===xa.slice?ak:r}});var Ql=a((k5,Jl)=>{"use strict";var ok=Yl();Jl.exports=ok});var Zl=a((P5,Xl)=>{"use strict";var uk=Ql();Xl.exports=uk});var rf=a((_5,ef)=>{"use strict";var sk=Zl();ef.exports=sk});var Sa=a((R5,tf)=>{"use strict";tf.exports=rf()});var Br=a((A5,nf)=>{nf.exports=Sa()});var Ve=a((N5,af)=>{"use strict";var ck=dt(),lk=String;af.exports=function(e){if(ck(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return lk(e)}});var cf=a((M5,sf)=>{"use strict";var wa=A(),fk=Sn(),pk=Ve(),vk=or(),dk=wa("".charAt),of=wa("".charCodeAt),mk=wa("".slice),uf=function(e){return function(r,t){var n=pk(vk(r)),i=fk(t),o=n.length,u,l;return i<0||i>=o?e?"":void 0:(u=of(n,i),u<55296||u>56319||i+1===o||(l=of(n,i+1))<56320||l>57343?e?dk(n,i):u:e?mk(n,i,i+2):(u-55296<<10)+(l-56320)+65536)}};sf.exports={codeAt:uf(!1),charAt:uf(!0)}});var pf=a((j5,ff)=>{"use strict";var hk=_(),yk=N(),lf=hk.WeakMap;ff.exports=yk(lf)&&/native code/.test(String(lf))});var gt=a(($5,df)=>{"use strict";var gk=sr(),bk=Mr(),vf=gk("keys");df.exports=function(e){return vf[e]||(vf[e]=bk(e))}});var Gr=a((L5,mf)=>{"use strict";mf.exports={}});var ze=a((F5,gf)=>{"use strict";var qk=pf(),yf=_(),xk=$(),Sk=Se(),Ta=W(),Oa=lt(),wk=gt(),Tk=Gr(),hf="Object already initialized",Ca=yf.TypeError,Ok=yf.WeakMap,wn,bt,Tn,Ck=function(e){return Tn(e)?bt(e):wn(e,{})},Ek=function(e){return function(r){var t;if(!xk(r)||(t=bt(r)).type!==e)throw new Ca("Incompatible receiver, "+e+" required");return t}};qk||Oa.state?(he=Oa.state||(Oa.state=new Ok),he.get=he.get,he.has=he.has,he.set=he.set,wn=function(e,r){if(he.has(e))throw new Ca(hf);return r.facade=e,he.set(e,r),r},bt=function(e){return he.get(e)||{}},Tn=function(e){return he.has(e)}):(lr=wk("state"),Tk[lr]=!0,wn=function(e,r){if(Ta(e,lr))throw new Ca(hf);return r.facade=e,Sk(e,lr,r),r},bt=function(e){return Ta(e,lr)?e[lr]:{}},Tn=function(e){return Ta(e,lr)});var he,lr;gf.exports={set:wn,get:bt,has:Tn,enforce:Ck,getterFor:Ek}});var xf=a((D5,qf)=>{"use strict";var Ea=G(),Ik=W(),bf=Function.prototype,kk=Ea&&Object.getOwnPropertyDescriptor,Ia=Ik(bf,"name"),Pk=Ia&&function(){}.name==="something",_k=Ia&&(!Ea||Ea&&kk(bf,"name").configurable);qf.exports={EXISTS:Ia,PROPER:Pk,CONFIGURABLE:_k}});var ka=a((B5,wf)=>{"use strict";var Rk=Ie(),Ak=ga(),Nk=le(),Sf=function(e){return function(r,t,n){var i=Rk(r),o=Nk(i);if(o===0)return!e&&-1;var u=Ak(n,o),l;if(e&&t!==t){for(;o>u;)if(l=i[u++],l!==l)return!0}else for(;o>u;u++)if((e||u in i)&&i[u]===t)return e||u||0;return!e&&-1}};wf.exports={includes:Sf(!0),indexOf:Sf(!1)}});var _a=a((G5,Of)=>{"use strict";var Mk=A(),Pa=W(),jk=Ie(),$k=ka().indexOf,Lk=Gr(),Tf=Mk([].push);Of.exports=function(e,r){var t=jk(e),n=0,i=[],o;for(o in t)!Pa(Lk,o)&&Pa(t,o)&&Tf(i,o);for(;r.length>n;)Pa(t,o=r[n++])&&(~$k(i,o)||Tf(i,o));return i}});var On=a((U5,Cf)=>{"use strict";Cf.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var Cn=a((W5,Ef)=>{"use strict";var Fk=_a(),Dk=On();Ef.exports=Object.keys||function(r){return Fk(r,Dk)}});var Ra=a(If=>{"use strict";var Bk=G(),Gk=la(),Uk=te(),Wk=Q(),Hk=Ie(),Kk=Cn();If.f=Bk&&!Gk?Object.defineProperties:function(r,t){Wk(r);for(var n=Hk(t),i=Kk(t),o=i.length,u=0,l;o>u;)Uk.f(r,l=i[u++],n[l]);return r}});var Aa=a((K5,kf)=>{"use strict";var Vk=U();kf.exports=Vk("document","documentElement")});var Ye=a((V5,jf)=>{"use strict";var zk=Q(),Yk=Ra(),Pf=On(),Jk=Gr(),Qk=Aa(),Xk=gn(),Zk=gt(),_f=">",Rf="<",Ma="prototype",ja="script",Nf=Zk("IE_PROTO"),Na=function(){},Mf=function(e){return Rf+ja+_f+e+Rf+"/"+ja+_f},Af=function(e){e.write(Mf("")),e.close();var r=e.parentWindow.Object;return e=null,r},e1=function(){var e=Xk("iframe"),r="java"+ja+":",t;return e.style.display="none",Qk.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(Mf("document.F=Object")),t.close(),t.F},En,In=function(){try{En=new ActiveXObject("htmlfile")}catch{}In=typeof document<"u"?document.domain&&En?Af(En):e1():Af(En);for(var e=Pf.length;e--;)delete In[Ma][Pf[e]];return In()};Jk[Nf]=!0;jf.exports=Object.create||function(r,t){var n;return r!==null?(Na[Ma]=zk(r),n=new Na,Na[Ma]=null,n[Nf]=r):n=In(),t===void 0?n:Yk.f(n,t)}});var $a=a((z5,$f)=>{"use strict";var r1=P();$f.exports=!r1(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var qt=a((Y5,Ff)=>{"use strict";var t1=W(),n1=N(),i1=re(),a1=gt(),o1=$a(),Lf=a1("IE_PROTO"),La=Object,u1=La.prototype;Ff.exports=o1?La.getPrototypeOf:function(e){var r=i1(e);if(t1(r,Lf))return r[Lf];var t=r.constructor;return n1(t)&&r instanceof t?t.prototype:r instanceof La?u1:null}});var Pe=a((J5,Df)=>{"use strict";var s1=Se();Df.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:s1(e,r,t),e}});var Ga=a((Q5,Uf)=>{"use strict";var c1=P(),l1=N(),f1=$(),p1=Ye(),Bf=qt(),v1=Pe(),d1=R(),m1=Z(),Ba=d1("iterator"),Gf=!1,_e,Fa,Da;[].keys&&(Da=[].keys(),"next"in Da?(Fa=Bf(Bf(Da)),Fa!==Object.prototype&&(_e=Fa)):Gf=!0);var h1=!f1(_e)||c1(function(){var e={};return _e[Ba].call(e)!==e});h1?_e={}:m1&&(_e=p1(_e));l1(_e[Ba])||v1(_e,Ba,function(){return this});Uf.exports={IteratorPrototype:_e,BUGGY_SAFARI_ITERATORS:Gf}});var Hf=a((X5,Wf)=>{"use strict";var y1=qn(),g1=dt();Wf.exports=y1?{}.toString:function(){return"[object "+g1(this)+"]"}});var Re=a((Z5,Vf)=>{"use strict";var b1=qn(),q1=te().f,x1=Se(),S1=W(),w1=Hf(),T1=R(),Kf=T1("toStringTag");Vf.exports=function(e,r,t,n){var i=t?e:e&&e.prototype;i&&(S1(i,Kf)||q1(i,Kf,{configurable:!0,value:r}),n&&!b1&&x1(i,"toString",w1))}});var fr=a((eW,zf)=>{"use strict";zf.exports={}});var Jf=a((rW,Yf)=>{"use strict";var O1=Ga().IteratorPrototype,C1=Ye(),E1=He(),I1=Re(),k1=fr(),P1=function(){return this};Yf.exports=function(e,r,t,n){var i=r+" Iterator";return e.prototype=C1(O1,{next:E1(+!n,t)}),I1(e,i,!1,!0),k1[i]=P1,e}});var Xf=a((tW,Qf)=>{"use strict";var _1=A(),R1=F();Qf.exports=function(e,r,t){try{return _1(R1(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var ep=a((nW,Zf)=>{"use strict";var A1=$();Zf.exports=function(e){return A1(e)||e===null}});var tp=a((iW,rp)=>{"use strict";var N1=ep(),M1=String,j1=TypeError;rp.exports=function(e){if(N1(e))return e;throw new j1("Can't set "+M1(e)+" as a prototype")}});var xt=a((aW,np)=>{"use strict";var $1=Xf(),L1=$(),F1=or(),D1=tp();np.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=$1(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(i,o){return F1(i),D1(o),L1(i)&&(e?t(i,o):i.__proto__=o),i}}():void 0)});var _n=a((oW,vp)=>{"use strict";var B1=x(),G1=D(),kn=Z(),fp=xf(),U1=N(),W1=Jf(),ip=qt(),ap=xt(),H1=Re(),K1=Se(),Ua=Pe(),V1=R(),op=fr(),pp=Ga(),z1=fp.PROPER,Y1=fp.CONFIGURABLE,up=pp.IteratorPrototype,Pn=pp.BUGGY_SAFARI_ITERATORS,St=V1("iterator"),sp="keys",wt="values",cp="entries",lp=function(){return this};vp.exports=function(e,r,t,n,i,o,u){W1(t,r,n);var l=function(q){if(q===i&&v)return v;if(!Pn&&q&&q in f)return f[q];switch(q){case sp:return function(){return new t(this,q)};case wt:return function(){return new t(this,q)};case cp:return function(){return new t(this,q)}}return function(){return new t(this)}},c=r+" Iterator",s=!1,f=e.prototype,p=f[St]||f["@@iterator"]||i&&f[i],v=!Pn&&p||l(i),d=r==="Array"&&f.entries||p,h,m,y;if(d&&(h=ip(d.call(new e)),h!==Object.prototype&&h.next&&(!kn&&ip(h)!==up&&(ap?ap(h,up):U1(h[St])||Ua(h,St,lp)),H1(h,c,!0,!0),kn&&(op[c]=lp))),z1&&i===wt&&p&&p.name!==wt&&(!kn&&Y1?K1(f,"name",wt):(s=!0,v=function(){return G1(p,this)})),i)if(m={values:l(wt),keys:o?v:l(sp),entries:l(cp)},u)for(y in m)(Pn||s||!(y in f))&&Ua(f,y,m[y]);else B1({target:r,proto:!0,forced:Pn||s},m);return(!kn||u)&&f[St]!==v&&Ua(f,St,v,{name:i}),op[r]=v,m}});var Rn=a((uW,dp)=>{"use strict";dp.exports=function(e,r){return{value:e,done:r}}});var pr=a(()=>{"use strict";var J1=cf().charAt,Q1=Ve(),hp=ze(),X1=_n(),mp=Rn(),yp="String Iterator",Z1=hp.set,eP=hp.getterFor(yp);X1(String,"String",function(e){Z1(this,{type:yp,string:Q1(e),index:0})},function(){var r=eP(this),t=r.string,n=r.index,i;return n>=t.length?mp(void 0,!0):(i=J1(t,n),r.index+=i.length,mp(i,!1))})});var Wa=a((lW,bp)=>{"use strict";var rP=D(),gp=Q(),tP=hn();bp.exports=function(e,r,t){var n,i;gp(e);try{if(n=tP(e,"return"),!n){if(r==="throw")throw t;return t}n=rP(n,e)}catch(o){i=!0,n=o}if(r==="throw")throw t;if(i)throw n;return gp(n),t}});var xp=a((fW,qp)=>{"use strict";var nP=Q(),iP=Wa();qp.exports=function(e,r,t,n){try{return n?r(nP(t)[0],t[1]):r(t)}catch(i){iP(e,"throw",i)}}});var Ha=a((pW,Sp)=>{"use strict";var aP=R(),oP=fr(),uP=aP("iterator"),sP=Array.prototype;Sp.exports=function(e){return e!==void 0&&(oP.Array===e||sP[uP]===e)}});var Tt=a((vW,Tp)=>{"use strict";var cP=dt(),wp=hn(),lP=ar(),fP=fr(),pP=R(),vP=pP("iterator");Tp.exports=function(e){if(!lP(e))return wp(e,vP)||wp(e,"@@iterator")||fP[cP(e)]}});var An=a((dW,Op)=>{"use strict";var dP=D(),mP=F(),hP=Q(),yP=Ke(),gP=Tt(),bP=TypeError;Op.exports=function(e,r){var t=arguments.length<2?gP(e):r;if(mP(t))return hP(dP(t,e));throw new bP(yP(e)+" is not iterable")}});var kp=a((mW,Ip)=>{"use strict";var qP=V(),xP=D(),SP=re(),wP=xp(),TP=Ha(),OP=ht(),CP=le(),Cp=Fr(),EP=Dr(),IP=An(),kP=Tt(),Ep=Array;Ip.exports=function(r){var t=SP(r),n=OP(this),i=arguments.length,o=i>1?arguments[1]:void 0,u=o!==void 0;u&&(o=qP(o,i>2?arguments[2]:void 0));var l=kP(t),c=0,s,f,p,v,d,h;if(l&&!(this===Ep&&TP(l)))for(f=n?new this:[],v=IP(t,l),d=v.next;!(p=xP(d,v)).done;c++)h=u?wP(v,o,[p.value,c],!0):p.value,Cp(f,c,h);else for(s=CP(t),f=n?new this(s):Ep(s);s>c;c++)h=u?o(t[c],c):t[c],Cp(f,c,h);return EP(f,c),f}});var Va=a((hW,Ap)=>{"use strict";var PP=R(),_p=PP("iterator"),Rp=!1;try{Pp=0,Ka={next:function(){return{done:!!Pp++}},return:function(){Rp=!0}},Ka[_p]=function(){return this},Array.from(Ka,function(){throw 2})}catch{}var Pp,Ka;Ap.exports=function(e,r){try{if(!r&&!Rp)return!1}catch{return!1}var t=!1;try{var n={};n[_p]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var Np=a(()=>{"use strict";var _P=x(),RP=kp(),AP=Va(),NP=!AP(function(e){Array.from(e)});_P({target:"Array",stat:!0,forced:NP},{from:RP})});var jp=a((bW,Mp)=>{"use strict";pr();Np();var MP=K();Mp.exports=MP.Array.from});var Lp=a((qW,$p)=>{"use strict";var jP=jp();$p.exports=jP});var Dp=a((xW,Fp)=>{"use strict";var $P=Lp();Fp.exports=$P});var Gp=a((SW,Bp)=>{"use strict";var LP=Dp();Bp.exports=LP});var za=a((wW,Up)=>{"use strict";Up.exports=Gp()});var Nn=a((TW,Wp)=>{Wp.exports=za()});var Ot=a((OW,Hp)=>{"use strict";var FP=TypeError,DP=9007199254740991;Hp.exports=function(e){if(e>DP)throw FP("Maximum allowed index exceeded");return e}});var Yp=a((CW,zp)=>{"use strict";var Kp=ke(),BP=ht(),GP=$(),UP=R(),WP=UP("species"),Vp=Array;zp.exports=function(e){var r;return Kp(e)&&(r=e.constructor,BP(r)&&(r===Vp||Kp(r.prototype))?r=void 0:GP(r)&&(r=r[WP],r===null&&(r=void 0))),r===void 0?Vp:r}});var Mn=a((EW,Jp)=>{"use strict";var HP=Yp();Jp.exports=function(e,r){return new(HP(e))(r===0?0:r)}});var Ya=a(()=>{"use strict";var KP=x(),VP=P(),zP=ke(),YP=$(),JP=re(),QP=le(),Qp=Ot(),Xp=Fr(),XP=Dr(),ZP=Mn(),e_=yt(),r_=R(),t_=Ar(),Zp=r_("isConcatSpreadable"),n_=t_>=51||!VP(function(){var e=[];return e[Zp]=!1,e.concat()[0]!==e}),i_=function(e){if(!YP(e))return!1;var r=e[Zp];return r!==void 0?!!r:zP(e)},a_=!n_||!e_("concat");KP({target:"Array",proto:!0,arity:1,forced:a_},{concat:function(r){var t=JP(this),n=ZP(t,0),i=0,o,u,l,c,s;for(o=-1,l=arguments.length;o<l;o++)if(s=o===-1?t:arguments[o],i_(s))for(c=QP(s),Qp(i+c),u=0;u<c;u++,i++)u in s&&Xp(n,i,s[u]);else Qp(i+1),Xp(n,i++,s);return XP(n,i),n}})});var Ct=a(()=>{});var Et=a(ev=>{"use strict";var o_=_a(),u_=On(),s_=u_.concat("length","prototype");ev.f=Object.getOwnPropertyNames||function(r){return o_(r,s_)}});var Ja=a((AW,nv)=>{"use strict";var c_=xe(),l_=Ie(),rv=Et().f,f_=cr(),tv=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],p_=function(e){try{return rv(e)}catch{return f_(tv)}};nv.exports.f=function(r){return tv&&c_(r)==="Window"?p_(r):rv(l_(r))}});var jn=a(iv=>{"use strict";iv.f=Object.getOwnPropertySymbols});var $n=a((MW,av)=>{"use strict";var v_=te();av.exports=function(e,r,t){return v_.f(e,r,t)}});var Ur=a(ov=>{"use strict";var d_=R();ov.f=d_});var M=a(($W,sv)=>{"use strict";var uv=K(),m_=W(),h_=Ur(),y_=te().f;sv.exports=function(e){var r=uv.Symbol||(uv.Symbol={});m_(r,e)||y_(r,e,{value:h_.f(e)})}});var Qa=a((LW,cv)=>{"use strict";var g_=D(),b_=U(),q_=R(),x_=Pe();cv.exports=function(){var e=b_("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=q_("toPrimitive");r&&!r[n]&&x_(r,n,function(i){return g_(t,this)},{arity:1})}});var It=a((FW,fv)=>{"use strict";var S_=V(),w_=dn(),T_=re(),O_=le(),lv=Mn(),Xa=Fr(),Je=function(e){var r=e===1,t=e===2,n=e===3,i=e===4,o=e===6,u=e===7,l=e===5||o;return function(c,s,f){for(var p=T_(c),v=w_(p),d=O_(v),h=S_(s,f),m=0,y=0,q=r?lv(c,d):t||u?lv(c,0):void 0,b,I;d>m;m++)if((l||m in v)&&(b=v[m],I=h(b,m,p),e))if(r)Xa(q,m,I);else if(I)switch(e){case 3:return!0;case 5:return b;case 6:return m;case 2:Xa(q,y++,b)}else switch(e){case 4:return!1;case 7:Xa(q,y++,b)}return o?-1:n||i?i:q}};fv.exports={forEach:Je(0),map:Je(1),filter:Je(2),some:Je(3),every:Je(4),find:Je(5),findIndex:Je(6),filterReject:Je(7)}});var Iv=a(()=>{"use strict";var Ln=x(),_t=_(),uo=D(),C_=A(),E_=Z(),Wr=G(),Hr=ur(),I_=P(),H=W(),k_=B(),to=Q(),Fn=Ie(),so=yn(),P_=Ve(),no=He(),Kr=Ye(),dv=Cn(),__=Et(),mv=Ja(),R_=jn(),hv=ft(),yv=te(),A_=Ra(),gv=Qi(),Za=Pe(),N_=$n(),co=sr(),M_=gt(),bv=Gr(),pv=Mr(),j_=R(),$_=Ur(),L_=M(),F_=Qa(),D_=Re(),qv=ze(),Dn=It().forEach,ne=M_("hidden"),Bn="Symbol",Pt="prototype",B_=qv.set,vv=qv.getterFor(Bn),fe=Object[Pt],vr=_t.Symbol,kt=vr&&vr[Pt],G_=_t.RangeError,U_=_t.TypeError,eo=_t.QObject,xv=hv.f,dr=yv.f,Sv=mv.f,W_=gv.f,wv=C_([].push),Ae=co("symbols"),Rt=co("op-symbols"),H_=co("wks"),io=!eo||!eo[Pt]||!eo[Pt].findChild,Tv=function(e,r,t){var n=xv(fe,r);n&&delete fe[r],dr(e,r,t),n&&e!==fe&&dr(fe,r,n)},ao=Wr&&I_(function(){return Kr(dr({},"a",{get:function(){return dr(this,"a",{value:7}).a}})).a!==7})?Tv:dr,ro=function(e,r){var t=Ae[e]=Kr(kt);return B_(t,{type:Bn,tag:e,description:r}),Wr||(t.description=r),t},Gn=function(r,t,n){r===fe&&Gn(Rt,t,n),to(r);var i=so(t);return to(n),H(Ae,i)?(n.enumerable?(H(r,ne)&&r[ne][i]&&(r[ne][i]=!1),n=Kr(n,{enumerable:no(0,!1)})):(H(r,ne)||dr(r,ne,no(1,Kr(null))),r[ne][i]=!0),ao(r,i,n)):dr(r,i,n)},lo=function(r,t){to(r);var n=Fn(t),i=dv(n).concat(Ev(n));return Dn(i,function(o){(!Wr||uo(oo,n,o))&&Gn(r,o,n[o])}),r},K_=function(r,t){return t===void 0?Kr(r):lo(Kr(r),t)},oo=function(r){var t=so(r),n=uo(W_,this,t);return this===fe&&H(Ae,t)&&!H(Rt,t)?!1:n||!H(this,t)||!H(Ae,t)||H(this,ne)&&this[ne][t]?n:!0},Ov=function(r,t){var n=Fn(r),i=so(t);if(!(n===fe&&H(Ae,i)&&!H(Rt,i))){var o=xv(n,i);return o&&H(Ae,i)&&!(H(n,ne)&&n[ne][i])&&(o.enumerable=!0),o}},Cv=function(r){var t=Sv(Fn(r)),n=[];return Dn(t,function(i){!H(Ae,i)&&!H(bv,i)&&wv(n,i)}),n},Ev=function(e){var r=e===fe,t=Sv(r?Rt:Fn(e)),n=[];return Dn(t,function(i){H(Ae,i)&&(!r||H(fe,i))&&wv(n,Ae[i])}),n};Hr||(vr=function(){if(k_(kt,this))throw new U_("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:P_(arguments[0]),t=pv(r),n=function(i){var o=this===void 0?_t:this;o===fe&&uo(n,Rt,i),H(o,ne)&&H(o[ne],t)&&(o[ne][t]=!1);var u=no(1,i);try{ao(o,t,u)}catch(l){if(!(l instanceof G_))throw l;Tv(o,t,u)}};return Wr&&io&&ao(fe,t,{configurable:!0,set:n}),ro(t,r)},kt=vr[Pt],Za(kt,"toString",function(){return vv(this).tag}),Za(vr,"withoutSetter",function(e){return ro(pv(e),e)}),gv.f=oo,yv.f=Gn,A_.f=lo,hv.f=Ov,__.f=mv.f=Cv,R_.f=Ev,$_.f=function(e){return ro(j_(e),e)},Wr&&(N_(kt,"description",{configurable:!0,get:function(){return vv(this).description}}),E_||Za(fe,"propertyIsEnumerable",oo,{unsafe:!0})));Ln({global:!0,constructor:!0,wrap:!0,forced:!Hr,sham:!Hr},{Symbol:vr});Dn(dv(H_),function(e){L_(e)});Ln({target:Bn,stat:!0,forced:!Hr},{useSetter:function(){io=!0},useSimple:function(){io=!1}});Ln({target:"Object",stat:!0,forced:!Hr,sham:!Wr},{create:K_,defineProperty:Gn,defineProperties:lo,getOwnPropertyDescriptor:Ov});Ln({target:"Object",stat:!0,forced:!Hr},{getOwnPropertyNames:Cv});F_();D_(vr,Bn);bv[ne]=!0});var fo=a((GW,kv)=>{"use strict";var V_=ur();kv.exports=V_&&!!Symbol.for&&!!Symbol.keyFor});var _v=a(()=>{"use strict";var z_=x(),Y_=U(),J_=W(),Q_=Ve(),Pv=sr(),X_=fo(),po=Pv("string-to-symbol-registry"),Z_=Pv("symbol-to-string-registry");z_({target:"Symbol",stat:!0,forced:!X_},{for:function(e){var r=Q_(e);if(J_(po,r))return po[r];var t=Y_("Symbol")(r);return po[r]=t,Z_[t]=r,t}})});var Av=a(()=>{"use strict";var eR=x(),rR=W(),tR=Nr(),nR=Ke(),iR=sr(),aR=fo(),Rv=iR("symbol-to-string-registry");eR({target:"Symbol",stat:!0,forced:!aR},{keyFor:function(r){if(!tR(r))throw new TypeError(nR(r)+" is not a symbol");if(rR(Rv,r))return Rv[r]}})});var Mv=a((VW,Nv)=>{"use strict";var oR=$(),uR=ze().get;Nv.exports=function(r){if(!oR(r))return!1;var t=uR(r);return!!t&&t.type==="RawJSON"}});var Dv=a((zW,Fv)=>{"use strict";var vo=A(),sR=W(),Un=SyntaxError,cR=parseInt,lR=String.fromCharCode,fR=vo("".charAt),jv=vo("".slice),$v=vo(/./.exec),Lv={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},pR=/^[\da-f]{4}$/i,vR=/^[\u0000-\u001F]$/;Fv.exports=function(e,r){for(var t=!0,n="";r<e.length;){var i=fR(e,r);if(i==="\\"){var o=jv(e,r,r+2);if(sR(Lv,o))n+=Lv[o],r+=2;else if(o==="\\u"){r+=2;var u=jv(e,r,r+4);if(!$v(pR,u))throw new Un("Bad Unicode escape at: "+r);n+=lR(cR(u,16)),r+=4}else throw new Un('Unknown escape sequence: "'+o+'"')}else if(i==='"'){t=!1,r++;break}else{if($v(vR,i))throw new Un("Bad control character in string literal at: "+r);n+=i,r++}}if(t)throw new Un("Unterminated string at: "+r);return{value:n,end:r}}});var Gv=a((YW,Bv)=>{"use strict";var dR=P();Bv.exports=!dR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var td=a(()=>{"use strict";var mR=x(),Jv=U(),hR=_r(),Qv=D(),mr=A(),Xv=P(),Uv=ke(),Hn=N(),yR=Mv(),Wv=Nr(),Hv=xe(),gR=Ve(),bR=cr(),qR=Dv(),xR=Mr(),SR=ur(),mo=Gv(),Zv=String,Qe=Jv("JSON","stringify"),Wn=mr(/./.exec),yo=mr("".charAt),wR=mr("".charCodeAt),TR=mr("".replace),ho=mr("".slice),go=mr([].push),OR=mr(1.1.toString),CR=/[\uD800-\uDFFF]/g,Kv=/^[\uD800-\uDBFF]$/,Vv=/^[\uDC00-\uDFFF]$/,bo=xR(),zv=bo.length,ed=!SR||Xv(function(){var e=Jv("Symbol")("stringify detection");return Qe([e])!=="[null]"||Qe({a:e})!=="{}"||Qe(Object(e))!=="{}"}),Yv=Xv(function(){return Qe("\uDF06\uD834")!=='"\\udf06\\ud834"'||Qe("\uDEAD")!=='"\\udead"'}),ER=ed?function(e,r){var t=bR(arguments),n=rd(r);if(!(!Hn(n)&&(e===void 0||Wv(e))))return t[1]=function(i,o){if(Hn(n)&&(o=Qv(n,this,Zv(i),o)),!Wv(o))return o},hR(Qe,null,t)}:Qe,IR=function(e,r,t){var n=yo(t,r-1),i=yo(t,r+1);return Wn(Kv,e)&&!Wn(Vv,i)||Wn(Vv,e)&&!Wn(Kv,n)?"\\u"+OR(wR(e,0),16):e},rd=function(e){if(Hn(e))return e;if(Uv(e)){for(var r=e.length,t=[],n=0;n<r;n++){var i=e[n];typeof i=="string"?go(t,i):(typeof i=="number"||Hv(i)==="Number"||Hv(i)==="String")&&go(t,gR(i))}var o=t.length,u=!0;return function(l,c){if(u)return u=!1,c;if(Uv(this))return c;for(var s=0;s<o;s++)if(t[s]===l)return c}}};Qe&&mR({target:"JSON",stat:!0,arity:3,forced:ed||Yv||!mo},{stringify:function(r,t,n){var i=rd(t),o=[],u=ER(r,function(d,h){var m=Hn(i)?Qv(i,this,Zv(d),h):h;return!mo&&yR(m)?bo+(go(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(Yv&&(u=TR(u,CR,IR)),mo))return u;for(var l="",c=u.length,s=0;s<c;s++){var f=yo(u,s);if(f==='"'){var p=qR(u,++s).end-1,v=ho(u,s,p);l+=ho(v,0,zv)===bo?o[ho(v,zv)]:'"'+v+'"',s=p}else l+=f}return l}})});var id=a(()=>{"use strict";var kR=x(),PR=ur(),_R=P(),nd=jn(),RR=re(),AR=!PR||_R(function(){nd.f(1)});kR({target:"Object",stat:!0,forced:AR},{getOwnPropertySymbols:function(r){var t=nd.f;return t?t(RR(r)):[]}})});var ad=a(()=>{"use strict";Iv();_v();Av();td();id()});var qo=a(()=>{"use strict";var NR=M();NR("asyncDispose")});var xo=a(()=>{"use strict";var MR=M();MR("asyncIterator")});var od=a(()=>{});var So=a(()=>{"use strict";var jR=M();jR("dispose")});var ud=a(()=>{"use strict";var $R=M();$R("hasInstance")});var sd=a(()=>{"use strict";var LR=M();LR("isConcatSpreadable")});var wo=a(()=>{"use strict";var FR=M();FR("iterator")});var cd=a(()=>{"use strict";var DR=M();DR("match")});var ld=a(()=>{"use strict";var BR=M();BR("matchAll")});var fd=a(()=>{"use strict";var GR=M();GR("replace")});var pd=a(()=>{"use strict";var UR=M();UR("search")});var vd=a(()=>{"use strict";var WR=M();WR("species")});var dd=a(()=>{"use strict";var HR=M();HR("split")});var To=a(()=>{"use strict";var KR=M(),VR=Qa();KR("toPrimitive");VR()});var md=a(()=>{"use strict";var zR=U(),YR=M(),JR=Re();YR("toStringTag");JR(zR("Symbol"),"Symbol")});var hd=a(()=>{"use strict";var QR=M();QR("unscopables")});var yd=a(()=>{"use strict";var XR=_(),ZR=Re();ZR(XR.JSON,"JSON",!0)});var gd=a(()=>{});var bd=a(()=>{});var xd=a((D8,qd)=>{"use strict";Ya();Ct();ad();qo();xo();od();So();ud();sd();wo();cd();ld();fd();pd();vd();dd();To();md();hd();yd();gd();bd();var eA=K();qd.exports=eA.Symbol});var Oo=a((B8,Sd)=>{"use strict";Sd.exports=function(){}});var hr=a((G8,Ed)=>{"use strict";var rA=Ie(),Co=Oo(),wd=fr(),Od=ze(),tA=te().f,nA=_n(),Kn=Rn(),iA=Z(),aA=G(),Cd="Array Iterator",oA=Od.set,uA=Od.getterFor(Cd);Ed.exports=nA(Array,"Array",function(e,r){oA(this,{type:Cd,target:rA(e),index:0,kind:r})},function(){var e=uA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,Kn(void 0,!0);switch(e.kind){case"keys":return Kn(t,!1);case"values":return Kn(r[t],!1)}return Kn([t,r[t]],!1)},"values");var Td=wd.Arguments=wd.Array;Co("keys");Co("values");Co("entries");if(!iA&&aA&&Td.name!=="values")try{tA(Td,"name",{value:"values"})}catch{}});var kd=a((U8,Id)=>{"use strict";Id.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var yr=a(()=>{"use strict";hr();var sA=kd(),cA=_(),lA=Re(),Pd=fr();for(Vn in sA)lA(cA[Vn],Vn),Pd[Vn]=Pd.Array;var Vn});var Rd=a((K8,_d)=>{"use strict";var fA=xd();yr();_d.exports=fA});var Md=a(()=>{"use strict";var pA=R(),vA=te().f,Ad=pA("metadata"),Nd=Function.prototype;Nd[Ad]===void 0&&vA(Nd,Ad,{value:null})});var jd=a(()=>{"use strict";qo()});var $d=a(()=>{"use strict";So()});var Ld=a(()=>{"use strict";var dA=M();dA("metadata")});var Dd=a((r6,Fd)=>{"use strict";var mA=Rd();Md();jd();$d();Ld();Fd.exports=mA});var Io=a((t6,Bd)=>{"use strict";var hA=U(),yA=A(),Eo=hA("Symbol"),gA=Eo.keyFor,bA=yA(Eo.prototype.valueOf);Bd.exports=Eo.isRegisteredSymbol||function(r){try{return gA(bA(r))!==void 0}catch{return!1}}});var Gd=a(()=>{"use strict";var qA=x(),xA=Io();qA({target:"Symbol",stat:!0},{isRegisteredSymbol:xA})});var _o=a((a6,zd)=>{"use strict";var SA=sr(),Kd=U(),wA=A(),TA=Nr(),OA=R(),Yn=Kd("Symbol"),Ud=Yn.isWellKnownSymbol,Vd=Kd("Object","getOwnPropertyNames"),CA=wA(Yn.prototype.valueOf),Wd=SA("wks");for(zn=0,ko=Vd(Yn),Hd=ko.length;zn<Hd;zn++)try{Po=ko[zn],TA(Yn[Po])&&OA(Po)}catch{}var Po,zn,ko,Hd;zd.exports=function(r){if(Ud&&Ud(r))return!0;try{for(var t=CA(r),n=0,i=Vd(Wd),o=i.length;n<o;n++)if(Wd[i[n]]==t)return!0}catch{}return!1}});var Yd=a(()=>{"use strict";var EA=x(),IA=_o();EA({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:IA})});var Jd=a(()=>{"use strict";var kA=M();kA("customMatcher")});var Qd=a(()=>{"use strict";var PA=M();PA("observable")});var Xd=a(()=>{"use strict";var _A=x(),RA=Io();_A({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:RA})});var Zd=a(()=>{"use strict";var AA=x(),NA=_o();AA({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:NA})});var em=a(()=>{"use strict";var MA=M();MA("matcher")});var rm=a(()=>{"use strict";var jA=M();jA("metadataKey")});var tm=a(()=>{"use strict";var $A=M();$A("patternMatch")});var nm=a(()=>{"use strict";var LA=M();LA("replaceAll")});var am=a((T6,im)=>{"use strict";var FA=Dd();Gd();Yd();Jd();Qd();Xd();Zd();em();rm();tm();nm();im.exports=FA});var we=a((O6,om)=>{"use strict";om.exports=am()});var Jn=a((C6,um)=>{um.exports=we()});var cm=a((E6,sm)=>{"use strict";hr();pr();var DA=Tt();sm.exports=DA});var fm=a((I6,lm)=>{"use strict";var BA=cm();yr();lm.exports=BA});var vm=a((k6,pm)=>{"use strict";var GA=fm();pm.exports=GA});var mm=a((P6,dm)=>{"use strict";var UA=vm();dm.exports=UA});var Ro=a((_6,hm)=>{"use strict";hm.exports=mm()});var Qn=a((R6,ym)=>{ym.exports=Ro()});var bm=a((A6,gm)=>{"use strict";hr();pr();var WA=An();gm.exports=WA});var xm=a((N6,qm)=>{"use strict";var HA=bm();yr();qm.exports=HA});var wm=a((M6,Sm)=>{"use strict";var KA=xm();Sm.exports=KA});var Om=a((j6,Tm)=>{"use strict";var VA=wm();Tm.exports=VA});var Em=a(($6,Cm)=>{"use strict";Cm.exports=Om()});var Xn=a((L6,Im)=>{Im.exports=Em()});var Pm=a((F6,km)=>{"use strict";var zA=U(),YA=A(),JA=Et(),QA=jn(),XA=Q(),ZA=YA([].concat);km.exports=zA("Reflect","ownKeys")||function(r){var t=JA.f(XA(r)),n=QA.f;return n?ZA(t,n(r)):t}});var Am=a((D6,Rm)=>{"use strict";var _m=W(),eN=Pm(),rN=ft(),tN=te();Rm.exports=function(e,r,t){for(var n=eN(r),i=tN.f,o=rN.f,u=0;u<n.length;u++){var l=n[u];!_m(e,l)&&!(t&&_m(t,l))&&i(e,l,o(r,l))}}});var Mm=a((B6,Nm)=>{"use strict";var nN=$(),iN=Se();Nm.exports=function(e,r){nN(r)&&"cause"in r&&iN(e,"cause",r.cause)}});var Fm=a((G6,Lm)=>{"use strict";var aN=A(),jm=Error,oN=aN("".replace),uN=function(e){return String(new jm(e).stack)}("zxcasd"),$m=/\n\s*at [^:]*:[^\n]*/,sN=$m.test(uN);Lm.exports=function(e,r){if(sN&&typeof e=="string"&&!jm.prepareStackTrace)for(;r--;)e=oN(e,$m,"");return e}});var Bm=a((U6,Dm)=>{"use strict";var cN=P(),lN=He();Dm.exports=!cN(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",lN(1,7)),e.stack!==7):!0})});var Wm=a((W6,Um)=>{"use strict";var fN=Se(),pN=Fm(),vN=Bm(),Gm=Error.captureStackTrace;Um.exports=function(e,r,t,n){vN&&(Gm?Gm(e,r):fN(e,"stack",pN(t,n)))}});var pe=a((H6,zm)=>{"use strict";var dN=V(),mN=D(),hN=Q(),yN=Ke(),gN=Ha(),bN=le(),Hm=B(),qN=An(),xN=Tt(),Km=Wa(),SN=TypeError,Zn=function(e,r){this.stopped=e,this.result=r},Vm=Zn.prototype;zm.exports=function(e,r,t){var n=t&&t.that,i=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),l=!!(t&&t.INTERRUPTED),c=dN(r,n),s,f,p,v,d,h,m,y=function(b){return s&&Km(s,"normal"),new Zn(!0,b)},q=function(b){return i?(hN(b),l?c(b[0],b[1],y):c(b[0],b[1])):l?c(b,y):c(b)};if(o)s=e.iterator;else if(u)s=e;else{if(f=xN(e),!f)throw new SN(yN(e)+" is not iterable");if(gN(f)){for(p=0,v=bN(e);v>p;p++)if(d=q(e[p]),d&&Hm(Vm,d))return d;return new Zn(!1)}s=qN(e,f)}for(h=o?e.next:s.next;!(m=mN(h,s)).done;){try{d=q(m.value)}catch(b){Km(s,"throw",b)}if(typeof d=="object"&&d&&Hm(Vm,d))return d}return new Zn(!1)}});var Jm=a((K6,Ym)=>{"use strict";var wN=Ve();Ym.exports=function(e,r){return e===void 0?arguments.length<2?"":r:wN(e)}});var Xm=a(()=>{"use strict";var TN=x(),ON=B(),CN=qt(),ei=xt(),EN=Am(),Qm=Ye(),Ao=Se(),No=He(),IN=Mm(),kN=Wm(),PN=pe(),_N=Jm(),RN=R(),AN=RN("toStringTag"),ri=Error,NN=[].push,Vr=function(r,t){var n=ON(Mo,this),i;ei?i=ei(new ri,n?CN(this):Mo):(i=n?this:Qm(Mo),Ao(i,AN,"Error")),t!==void 0&&Ao(i,"message",_N(t)),kN(i,Vr,i.stack,1),arguments.length>2&&IN(i,arguments[2]);var o=[];return PN(r,NN,{that:o}),Ao(i,"errors",o),i};ei?ei(Vr,ri):EN(Vr,ri,{name:!0});var Mo=Vr.prototype=Qm(ri.prototype,{constructor:No(1,Vr),message:No(1,""),name:No(1,"AggregateError")});TN({global:!0,constructor:!0,arity:2},{AggregateError:Vr})});var jo=a(()=>{"use strict";Xm()});var $o=a((Q6,Zm)=>{"use strict";var At=_(),MN=Rr(),jN=xe(),ti=function(e){return MN.slice(0,e.length)===e};Zm.exports=function(){return ti("Bun/")?"BUN":ti("Cloudflare-Workers")?"CLOUDFLARE":ti("Deno/")?"DENO":ti("Node.js/")?"NODE":At.Bun&&typeof Bun.version=="string"?"BUN":At.Deno&&typeof Deno.version=="object"?"DENO":jN(At.process)==="process"?"NODE":At.window&&At.document?"BROWSER":"REST"}()});var Nt=a((X6,eh)=>{"use strict";var $N=$o();eh.exports=$N==="NODE"});var Lo=a((Z6,th)=>{"use strict";var LN=U(),FN=$n(),DN=R(),BN=G(),rh=DN("species");th.exports=function(e){var r=LN(e);BN&&r&&!r[rh]&&FN(r,rh,{configurable:!0,get:function(){return this}})}});var ni=a((eH,nh)=>{"use strict";var GN=B(),UN=TypeError;nh.exports=function(e,r){if(GN(r,e))return e;throw new UN("Incorrect invocation")}});var Fo=a((rH,ih)=>{"use strict";var WN=ht(),HN=Ke(),KN=TypeError;ih.exports=function(e){if(WN(e))return e;throw new KN(HN(e)+" is not a constructor")}});var Do=a((tH,oh)=>{"use strict";var ah=Q(),VN=Fo(),zN=ar(),YN=R(),JN=YN("species");oh.exports=function(e,r){var t=ah(e).constructor,n;return t===void 0||zN(n=ah(t)[JN])?r:VN(n)}});var sh=a((nH,uh)=>{"use strict";var QN=TypeError;uh.exports=function(e,r){if(e<r)throw new QN("Not enough arguments");return e}});var Bo=a((iH,ch)=>{"use strict";var XN=Rr();ch.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(XN)});var Jo=a((aH,gh)=>{"use strict";var ue=_(),ZN=_r(),e2=V(),lh=N(),r2=W(),yh=P(),fh=Aa(),t2=cr(),ph=gn(),n2=sh(),i2=Bo(),a2=Nt(),Vo=ue.setImmediate,zo=ue.clearImmediate,o2=ue.process,Go=ue.Dispatch,u2=ue.Function,vh=ue.MessageChannel,s2=ue.String,Uo=0,Mt={},dh="onreadystatechange",jt,gr,Wo,Ho;yh(function(){jt=ue.location});var Yo=function(e){if(r2(Mt,e)){var r=Mt[e];delete Mt[e],r()}},Ko=function(e){return function(){Yo(e)}},mh=function(e){Yo(e.data)},hh=function(e){ue.postMessage(s2(e),jt.protocol+"//"+jt.host)};(!Vo||!zo)&&(Vo=function(r){n2(arguments.length,1);var t=lh(r)?r:u2(r),n=t2(arguments,1);return Mt[++Uo]=function(){ZN(t,void 0,n)},gr(Uo),Uo},zo=function(r){delete Mt[r]},a2?gr=function(e){o2.nextTick(Ko(e))}:Go&&Go.now?gr=function(e){Go.now(Ko(e))}:vh&&!i2?(Wo=new vh,Ho=Wo.port2,Wo.port1.onmessage=mh,gr=e2(Ho.postMessage,Ho)):ue.addEventListener&&lh(ue.postMessage)&&!ue.importScripts&&jt&&jt.protocol!=="file:"&&!yh(hh)?(gr=hh,ue.addEventListener("message",mh,!1)):dh in ph("script")?gr=function(e){fh.appendChild(ph("script"))[dh]=function(){fh.removeChild(this),Yo(e)}}:gr=function(e){setTimeout(Ko(e),0)});gh.exports={set:Vo,clear:zo}});var xh=a((oH,qh)=>{"use strict";var bh=_(),c2=G(),l2=Object.getOwnPropertyDescriptor;qh.exports=function(e){if(!c2)return bh[e];var r=l2(bh,e);return r&&r.value}});var Qo=a((uH,wh)=>{"use strict";var Sh=function(){this.head=null,this.tail=null};Sh.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};wh.exports=Sh});var Oh=a((sH,Th)=>{"use strict";var f2=Rr();Th.exports=/ipad|iphone|ipod/i.test(f2)&&typeof Pebble<"u"});var Eh=a((cH,Ch)=>{"use strict";var p2=Rr();Ch.exports=/web0s(?!.*chrome)/i.test(p2)});var Nh=a((lH,Ah)=>{"use strict";var Yr=_(),v2=xh(),Ih=V(),Xo=Jo().set,d2=Qo(),m2=Bo(),h2=Oh(),y2=Eh(),Zo=Nt(),kh=Yr.MutationObserver||Yr.WebKitMutationObserver,Ph=Yr.document,_h=Yr.process,ii=Yr.Promise,tu=v2("queueMicrotask"),zr,eu,ru,ai,Rh;tu||($t=new d2,Lt=function(){var e,r;for(Zo&&(e=_h.domain)&&e.exit();r=$t.get();)try{r()}catch(t){throw $t.head&&zr(),t}e&&e.enter()},!m2&&!Zo&&!y2&&kh&&Ph?(eu=!0,ru=Ph.createTextNode(""),new kh(Lt).observe(ru,{characterData:!0}),zr=function(){ru.data=eu=!eu}):!h2&&ii&&ii.resolve?(ai=ii.resolve(void 0),ai.constructor=ii,Rh=Ih(ai.then,ai),zr=function(){Rh(Lt)}):Zo?zr=function(){_h.nextTick(Lt)}:(Xo=Ih(Xo,Yr),zr=function(){Xo(Lt)}),tu=function(e){$t.head||zr(),$t.add(e)});var $t,Lt;Ah.exports=tu});var jh=a((fH,Mh)=>{"use strict";Mh.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var br=a((pH,$h)=>{"use strict";$h.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var qr=a((vH,Lh)=>{"use strict";var g2=_();Lh.exports=g2.Promise});var Jr=a((dH,Gh)=>{"use strict";var b2=_(),Ft=qr(),q2=N(),x2=ca(),S2=ha(),w2=R(),Fh=$o(),T2=Z(),nu=Ar(),Dh=Ft&&Ft.prototype,O2=w2("species"),iu=!1,Bh=q2(b2.PromiseRejectionEvent),C2=x2("Promise",function(){var e=S2(Ft),r=e!==String(Ft);if(!r&&nu===66||T2&&!(Dh.catch&&Dh.finally))return!0;if(!nu||nu<51||!/native code/.test(e)){var t=new Ft(function(o){o(1)}),n=function(o){o(function(){},function(){})},i=t.constructor={};if(i[O2]=n,iu=t.then(function(){})instanceof n,!iu)return!0}return!r&&(Fh==="BROWSER"||Fh==="DENO")&&!Bh});Gh.exports={CONSTRUCTOR:C2,REJECTION_EVENT:Bh,SUBCLASSING:iu}});var Te=a((mH,Wh)=>{"use strict";var Uh=F(),E2=TypeError,I2=function(e){var r,t;this.promise=new e(function(n,i){if(r!==void 0||t!==void 0)throw new E2("Bad Promise constructor");r=n,t=i}),this.resolve=Uh(r),this.reject=Uh(t)};Wh.exports.f=function(e){return new I2(e)}});var ly=a(()=>{"use strict";var k2=x(),P2=Z(),ci=Nt(),Xe=_(),_2=K(),et=D(),Hh=Pe(),Kh=xt(),R2=Re(),A2=Lo(),N2=F(),si=N(),M2=$(),j2=ni(),$2=Do(),Qh=Jo().set,cu=Nh(),L2=jh(),F2=br(),D2=Qo(),Xh=ze(),li=qr(),lu=Jr(),Zh=Te(),fi="Promise",ey=lu.CONSTRUCTOR,B2=lu.REJECTION_EVENT,G2=lu.SUBCLASSING,au=Xh.getterFor(fi),U2=Xh.set,Qr=li&&li.prototype,xr=li,oi=Qr,ry=Xe.TypeError,ou=Xe.document,fu=Xe.process,uu=Zh.f,W2=uu,H2=!!(ou&&ou.createEvent&&Xe.dispatchEvent),ty="unhandledrejection",K2="rejectionhandled",Vh=0,ny=1,V2=2,pu=1,iy=2,ui,zh,ay,Yh,oy=function(e){var r;return M2(e)&&si(r=e.then)?r:!1},uy=function(e,r){var t=r.value,n=r.state===ny,i=n?e.ok:e.fail,o=e.resolve,u=e.reject,l=e.domain,c,s,f;try{i?(n||(r.rejection===iy&&Y2(r),r.rejection=pu),i===!0?c=t:(l&&l.enter(),c=i(t),l&&(l.exit(),f=!0)),c===e.promise?u(new ry("Promise-chain cycle")):(s=oy(c))?et(s,c,o,u):o(c)):u(t)}catch(p){l&&!f&&l.exit(),u(p)}},sy=function(e,r){e.notified||(e.notified=!0,cu(function(){for(var t=e.reactions,n;n=t.get();)uy(n,e);e.notified=!1,r&&!e.rejection&&z2(e)}))},cy=function(e,r,t){var n,i;H2?(n=ou.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),Xe.dispatchEvent(n)):n={promise:r,reason:t},!B2&&(i=Xe["on"+e])?i(n):e===ty&&L2("Unhandled promise rejection",t)},z2=function(e){et(Qh,Xe,function(){var r=e.facade,t=e.value,n=Jh(e),i;if(n&&(i=F2(function(){ci?fu.emit("unhandledRejection",t,r):cy(ty,r,t)}),e.rejection=ci||Jh(e)?iy:pu,i.error))throw i.value})},Jh=function(e){return e.rejection!==pu&&!e.parent},Y2=function(e){et(Qh,Xe,function(){var r=e.facade;ci?fu.emit("rejectionHandled",r):cy(K2,r,e.value)})},Xr=function(e,r,t){return function(n){e(r,n,t)}},Zr=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=V2,sy(e,!0))},su=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new ry("Promise can't be resolved itself");var n=oy(r);n?cu(function(){var i={done:!1};try{et(n,r,Xr(su,i,e),Xr(Zr,i,e))}catch(o){Zr(i,o,e)}}):(e.value=r,e.state=ny,sy(e,!1))}catch(i){Zr({done:!1},i,e)}}};if(ey&&(xr=function(r){j2(this,oi),N2(r),et(ui,this);var t=au(this);try{r(Xr(su,t),Xr(Zr,t))}catch(n){Zr(t,n)}},oi=xr.prototype,ui=function(r){U2(this,{type:fi,done:!1,notified:!1,parent:!1,reactions:new D2,rejection:!1,state:Vh,value:null})},ui.prototype=Hh(oi,"then",function(r,t){var n=au(this),i=uu($2(this,xr));return n.parent=!0,i.ok=si(r)?r:!0,i.fail=si(t)&&t,i.domain=ci?fu.domain:void 0,n.state===Vh?n.reactions.add(i):cu(function(){uy(i,n)}),i.promise}),zh=function(){var e=new ui,r=au(e);this.promise=e,this.resolve=Xr(su,r),this.reject=Xr(Zr,r)},Zh.f=uu=function(e){return e===xr||e===ay?new zh(e):W2(e)},!P2&&si(li)&&Qr!==Object.prototype)){Yh=Qr.then,G2||Hh(Qr,"then",function(r,t){var n=this;return new xr(function(i,o){et(Yh,n,i,o)}).then(r,t)},{unsafe:!0});try{delete Qr.constructor}catch{}Kh&&Kh(Qr,oi)}k2({global:!0,constructor:!0,wrap:!0,forced:ey},{Promise:xr});ay=_2.Promise;R2(xr,fi,!1,!0);A2(fi)});var Dt=a((gH,fy)=>{"use strict";var J2=qr(),Q2=Va(),X2=Jr().CONSTRUCTOR;fy.exports=X2||!Q2(function(e){J2.all(e).then(void 0,function(){})})});var py=a(()=>{"use strict";var Z2=x(),eM=D(),rM=F(),tM=Te(),nM=br(),iM=pe(),aM=Dt();Z2({target:"Promise",stat:!0,forced:aM},{all:function(r){var t=this,n=tM.f(t),i=n.resolve,o=n.reject,u=nM(function(){var l=rM(t.resolve),c=[],s=0,f=1;iM(r,function(p){var v=s++,d=!1;f++,eM(l,t,p).then(function(h){d||(d=!0,c[v]=h,--f||i(c))},o)}),--f||i(c)});return u.error&&o(u.value),n.promise}})});var dy=a(()=>{"use strict";var oM=x(),uM=Z(),sM=Jr().CONSTRUCTOR,du=qr(),cM=U(),lM=N(),fM=Pe(),vy=du&&du.prototype;oM({target:"Promise",proto:!0,forced:sM,real:!0},{catch:function(e){return this.then(void 0,e)}});!uM&&lM(du)&&(vu=cM("Promise").prototype.catch,vy.catch!==vu&&fM(vy,"catch",vu,{unsafe:!0}));var vu});var my=a(()=>{"use strict";var pM=x(),vM=D(),dM=F(),mM=Te(),hM=br(),yM=pe(),gM=Dt();pM({target:"Promise",stat:!0,forced:gM},{race:function(r){var t=this,n=mM.f(t),i=n.reject,o=hM(function(){var u=dM(t.resolve);yM(r,function(l){vM(u,t,l).then(n.resolve,i)})});return o.error&&i(o.value),n.promise}})});var hy=a(()=>{"use strict";var bM=x(),qM=Te(),xM=Jr().CONSTRUCTOR;bM({target:"Promise",stat:!0,forced:xM},{reject:function(r){var t=qM.f(this),n=t.reject;return n(r),t.promise}})});var mu=a((EH,yy)=>{"use strict";var SM=Q(),wM=$(),TM=Te();yy.exports=function(e,r){if(SM(e),wM(r)&&r.constructor===e)return r;var t=TM.f(e),n=t.resolve;return n(r),t.promise}});var qy=a(()=>{"use strict";var OM=x(),CM=U(),gy=Z(),EM=qr(),by=Jr().CONSTRUCTOR,IM=mu(),kM=CM("Promise"),PM=gy&&!by;OM({target:"Promise",stat:!0,forced:gy||by},{resolve:function(r){return IM(PM&&this===kM?EM:this,r)}})});var xy=a(()=>{"use strict";ly();py();dy();my();hy();qy()});var hu=a(()=>{"use strict";var _M=x(),RM=D(),AM=F(),NM=Te(),MM=br(),jM=pe(),$M=Dt();_M({target:"Promise",stat:!0,forced:$M},{allSettled:function(r){var t=this,n=NM.f(t),i=n.resolve,o=n.reject,u=MM(function(){var l=AM(t.resolve),c=[],s=0,f=1;jM(r,function(p){var v=s++,d=!1;f++,RM(l,t,p).then(function(h){d||(d=!0,c[v]={status:"fulfilled",value:h},--f||i(c))},function(h){d||(d=!0,c[v]={status:"rejected",reason:h},--f||i(c))})}),--f||i(c)});return u.error&&o(u.value),n.promise}})});var yu=a(()=>{"use strict";var LM=x(),FM=D(),DM=F(),BM=U(),GM=Te(),UM=br(),WM=pe(),HM=Dt(),Sy="No one promise resolved";LM({target:"Promise",stat:!0,forced:HM},{any:function(r){var t=this,n=BM("AggregateError"),i=GM.f(t),o=i.resolve,u=i.reject,l=UM(function(){var c=DM(t.resolve),s=[],f=0,p=1,v=!1;WM(r,function(d){var h=f++,m=!1;p++,FM(c,t,d).then(function(y){m||v||(v=!0,o(y))},function(y){m||v||(m=!0,s[h]=y,--p||u(new n(s,Sy)))})}),--p||u(new n(s,Sy))});return l.error&&u(l.value),i.promise}})});var bu=a(()=>{"use strict";var KM=x(),VM=_(),zM=_r(),YM=cr(),JM=Te(),QM=F(),Ty=br(),gu=VM.Promise,wy=!1,XM=!gu||!gu.try||Ty(function(){gu.try(function(e){wy=e===8},8)}).error||!wy;KM({target:"Promise",stat:!0,forced:XM},{try:function(e){var r=arguments.length>1?YM(arguments,1):[],t=JM.f(this),n=Ty(function(){return zM(QM(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var qu=a(()=>{"use strict";var ZM=x(),ej=Te();ZM({target:"Promise",stat:!0},{withResolvers:function(){var r=ej.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var Iy=a(()=>{"use strict";var rj=x(),tj=Z(),pi=qr(),nj=P(),Cy=U(),Ey=N(),ij=Do(),Oy=mu(),aj=Pe(),Su=pi&&pi.prototype,oj=!!pi&&nj(function(){Su.finally.call({then:function(){}},function(){})});rj({target:"Promise",proto:!0,real:!0,forced:oj},{finally:function(e){var r=ij(this,Cy("Promise")),t=Ey(e);return this.then(t?function(n){return Oy(r,e()).then(function(){return n})}:e,t?function(n){return Oy(r,e()).then(function(){throw n})}:e)}});!tj&&Ey(pi)&&(xu=Cy("Promise").prototype.finally,Su.finally!==xu&&aj(Su,"finally",xu,{unsafe:!0}));var xu});var Py=a((GH,ky)=>{"use strict";jo();hr();Ct();xy();hu();yu();bu();qu();Iy();pr();var uj=K();ky.exports=uj.Promise});var Ry=a((UH,_y)=>{"use strict";var sj=Py();yr();_y.exports=sj});var Ay=a(()=>{"use strict";bu()});var Ny=a(()=>{"use strict";qu()});var jy=a((zH,My)=>{"use strict";var cj=Ry();Ay();Ny();My.exports=cj});var $y=a(()=>{"use strict";jo()});var Ly=a(()=>{"use strict";hu()});var Fy=a(()=>{"use strict";yu()});var By=a((rK,Dy)=>{"use strict";var lj=jy();$y();Ly();Fy();Dy.exports=lj});var rt=a((tK,Gy)=>{"use strict";Gy.exports=By()});var Hy=a((uK,Wy)=>{"use strict";xo();var fj=Ur();Wy.exports=fj.f("asyncIterator")});var Vy=a((sK,Ky)=>{"use strict";var pj=Hy();Ky.exports=pj});var Yy=a((cK,zy)=>{"use strict";var vj=Vy();zy.exports=vj});var Qy=a((lK,Jy)=>{"use strict";var dj=Yy();Jy.exports=dj});var vi=a((fK,Xy)=>{"use strict";Xy.exports=Qy()});var tg=a(()=>{"use strict";var mj=x(),hj=P(),yj=re(),rg=qt(),gj=$a(),bj=hj(function(){rg(1)});mj({target:"Object",stat:!0,forced:bj,sham:!gj},{getPrototypeOf:function(r){return rg(yj(r))}})});var ig=a((hK,ng)=>{"use strict";tg();var qj=K();ng.exports=qj.Object.getPrototypeOf});var og=a((yK,ag)=>{"use strict";var xj=ig();ag.exports=xj});var sg=a((gK,ug)=>{"use strict";var Sj=og();ug.exports=Sj});var lg=a((bK,cg)=>{"use strict";var wj=sg();cg.exports=wj});var di=a((qK,fg)=>{"use strict";fg.exports=lg()});var vg=a(()=>{"use strict";var Tj=x(),Oj=A(),Cj=ke(),Ej=Oj([].reverse),pg=[1,2];Tj({target:"Array",proto:!0,forced:String(pg)===String(pg.reverse())},{reverse:function(){return Cj(this)&&(this.length=this.length),Ej(this)}})});var mg=a((wK,dg)=>{"use strict";vg();var Ij=oe();dg.exports=Ij("Array","reverse")});var yg=a((TK,hg)=>{"use strict";var kj=B(),Pj=mg(),Ou=Array.prototype;hg.exports=function(e){var r=e.reverse;return e===Ou||kj(Ou,e)&&r===Ou.reverse?Pj:r}});var bg=a((OK,gg)=>{"use strict";var _j=yg();gg.exports=_j});var xg=a((CK,qg)=>{"use strict";var Rj=bg();qg.exports=Rj});var wg=a((EK,Sg)=>{"use strict";var Aj=xg();Sg.exports=Aj});var Og=a((IK,Tg)=>{"use strict";Tg.exports=wg()});var Cu=a((kK,Ut)=>{function Nj(e,r){this.v=e,this.k=r}Ut.exports=Nj,Ut.exports.__esModule=!0,Ut.exports.default=Ut.exports});var Cg=a(()=>{"use strict";var Mj=x(),jj=G(),$j=Ye();Mj({target:"Object",stat:!0,sham:!jj},{create:$j})});var Ig=a((RK,Eg)=>{"use strict";Cg();var Lj=K(),Fj=Lj.Object;Eg.exports=function(r,t){return Fj.create(r,t)}});var Pg=a((AK,kg)=>{"use strict";var Dj=Ig();kg.exports=Dj});var Rg=a((NK,_g)=>{"use strict";var Bj=Pg();_g.exports=Bj});var Ng=a((MK,Ag)=>{"use strict";var Gj=Rg();Ag.exports=Gj});var mi=a((jK,Mg)=>{"use strict";Mg.exports=Ng()});var Iu=a(($K,Fg)=>{"use strict";var $g=A(),Uj=F(),Wj=$(),Hj=W(),jg=cr(),Kj=Pr(),Lg=Function,Vj=$g([].concat),zj=$g([].join),Eu={},Yj=function(e,r,t){if(!Hj(Eu,r)){for(var n=[],i=0;i<r;i++)n[i]="a["+i+"]";Eu[r]=Lg("C,a","return new C("+zj(n,",")+")")}return Eu[r](e,t)};Fg.exports=Kj?Lg.bind:function(r){var t=Uj(this),n=t.prototype,i=jg(arguments,1),o=function(){var l=Vj(i,jg(arguments));return this instanceof o?Yj(t,l.length,l):t.apply(r,l)};return Wj(n)&&(o.prototype=n),o}});var Bg=a(()=>{"use strict";var Jj=x(),Dg=Iu();Jj({target:"Function",proto:!0,forced:Function.bind!==Dg},{bind:Dg})});var Ug=a((DK,Gg)=>{"use strict";Bg();var Qj=oe();Gg.exports=Qj("Function","bind")});var Hg=a((BK,Wg)=>{"use strict";var Xj=B(),Zj=Ug(),ku=Function.prototype;Wg.exports=function(e){var r=e.bind;return e===ku||Xj(ku,e)&&r===ku.bind?Zj:r}});var Vg=a((GK,Kg)=>{"use strict";var e$=Hg();Kg.exports=e$});var Yg=a((UK,zg)=>{"use strict";var r$=Vg();zg.exports=r$});var Qg=a((WK,Jg)=>{"use strict";var t$=Yg();Jg.exports=t$});var Wt=a((HK,Xg)=>{"use strict";Xg.exports=Qg()});var Zg=a(()=>{"use strict";var n$=x(),i$=xt();n$({target:"Object",stat:!0},{setPrototypeOf:i$})});var rb=a((zK,eb)=>{"use strict";Zg();var a$=K();eb.exports=a$.Object.setPrototypeOf});var nb=a((YK,tb)=>{"use strict";var o$=rb();tb.exports=o$});var ab=a((JK,ib)=>{"use strict";var u$=nb();ib.exports=u$});var ub=a((QK,ob)=>{"use strict";var s$=ab();ob.exports=s$});var hi=a((XK,sb)=>{"use strict";sb.exports=ub()});var lb=a(()=>{"use strict";var c$=x(),l$=G(),cb=te().f;c$({target:"Object",stat:!0,forced:Object.defineProperty!==cb,sham:!l$},{defineProperty:cb})});var vb=a((rV,pb)=>{"use strict";lb();var f$=K(),fb=f$.Object,p$=pb.exports=function(r,t,n){return fb.defineProperty(r,t,n)};fb.defineProperty.sham&&(p$.sham=!0)});var mb=a((tV,db)=>{"use strict";var v$=vb();db.exports=v$});var yb=a((nV,hb)=>{"use strict";var d$=mb();hb.exports=d$});var bb=a((iV,gb)=>{"use strict";var m$=yb();gb.exports=m$});var Ht=a((aV,qb)=>{"use strict";qb.exports=bb()});var Pu=a((oV,Ne)=>{var h$=Ht();function yi(e,r,t,n){var i=h$;try{i({},"",{})}catch{i=0}Ne.exports=yi=function(u,l,c,s){function f(p,v){yi(u,p,function(d){return this._invoke(p,v,d)})}l?i?i(u,l,{value:c,enumerable:!s,configurable:!s,writable:!s}):u[l]=c:(f("next",0),f("throw",1),f("return",2))},Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports,yi(e,r,t,n)}Ne.exports=yi,Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports});var Ru=a((uV,Me)=>{var xb=we(),_u=mi(),y$=Wt(),g$=di(),Sb=hi(),Ce=Pu();function wb(){var e,r,t=typeof xb=="function"?xb:{},n=t.iterator||"@@iterator",i=t.toStringTag||"@@toStringTag";function o(d,h,m,y){var q=h&&h.prototype instanceof l?h:l,b=_u(q.prototype);return Ce(b,"_invoke",function(I,E,S){var T,w,C,j=0,be=S||[],k=!1,ee={p:0,n:0,v:e,a:qe,f:y$(qe).call(qe,e,4),d:function(L,de){return T=L,w=0,C=e,ee.n=de,u}};function qe(J,L){for(w=J,C=L,r=0;!k&&j&&!de&&r<be.length;r++){var de,O=be[r],Ir=ee.p,We=O[2];J>3?(de=We===L)&&(C=O[(w=O[4])?5:(w=3,3)],O[4]=O[5]=e):O[0]<=Ir&&((de=J<2&&Ir<O[1])?(w=0,ee.v=L,ee.n=O[1]):Ir<We&&(de=J<3||O[0]>L||L>We)&&(O[4]=J,O[5]=L,ee.n=We,w=0))}if(de||J>1)return u;throw k=!0,L}return function(J,L,de){if(j>1)throw TypeError("Generator is already running");for(k&&L===1&&qe(L,de),w=L,C=de;(r=w<2?e:C)||!k;){T||(w?w<3?(w>1&&(ee.n=-1),qe(w,C)):ee.n=C:ee.v=C);try{if(j=2,T){if(w||(J="next"),r=T[J]){if(!(r=r.call(T,C)))throw TypeError("iterator result is not an object");if(!r.done)return r;C=r.value,w<2&&(w=0)}else w===1&&(r=T.return)&&r.call(T),w<2&&(C=TypeError("The iterator does not provide a '"+J+"' method"),w=1);T=e}else if((r=(k=ee.n<0)?C:I.call(E,ee))!==u)break}catch(O){T=e,w=1,C=O}finally{j=1}}return{value:r,done:k}}}(d,m,y),!0),b}var u={};function l(){}function c(){}function s(){}r=g$;var f=[][n]?r(r([][n]())):(Ce(r={},n,function(){return this}),r),p=s.prototype=l.prototype=_u(f);function v(d){return Sb?Sb(d,s):(d.__proto__=s,Ce(d,i,"GeneratorFunction")),d.prototype=_u(p),d}return c.prototype=s,Ce(p,"constructor",s),Ce(s,"constructor",c),c.displayName="GeneratorFunction",Ce(s,i,"GeneratorFunction"),Ce(p),Ce(p,i,"Generator"),Ce(p,n,function(){return this}),Ce(p,"toString",function(){return"[object Generator]"}),(Me.exports=wb=function(){return{w:o,m:v}},Me.exports.__esModule=!0,Me.exports.default=Me.exports)()}Me.exports=wb,Me.exports.__esModule=!0,Me.exports.default=Me.exports});var Mu=a((sV,Kt)=>{var b$=we(),q$=vi(),x$=Cu(),Au=Pu();function Nu(e,r){function t(i,o,u,l){try{var c=e[i](o),s=c.value;return s instanceof x$?r.resolve(s.v).then(function(f){t("next",f,u,l)},function(f){t("throw",f,u,l)}):r.resolve(s).then(function(f){c.value=f,u(c)},function(f){return t("throw",f,u,l)})}catch(f){l(f)}}var n;this.next||(Au(Nu.prototype),Au(Nu.prototype,typeof b$=="function"&&q$||"@asyncIterator",function(){return this})),Au(this,"_invoke",function(i,o,u){function l(){return new r(function(c,s){t(i,u,c,s)})}return n=n?n.then(l,l):l()},!0)}Kt.exports=Nu,Kt.exports.__esModule=!0,Kt.exports.default=Kt.exports});var ju=a((cV,Vt)=>{var S$=rt(),w$=Ru(),T$=Mu();function O$(e,r,t,n,i){return new T$(w$().w(e,r,t,n),i||S$)}Vt.exports=O$,Vt.exports.__esModule=!0,Vt.exports.default=Vt.exports});var Tb=a((lV,zt)=>{var C$=ju();function E$(e,r,t,n,i){var o=C$(e,r,t,n,i);return o.next().then(function(u){return u.done?u.value:o.next()})}zt.exports=E$,zt.exports.__esModule=!0,zt.exports.default=zt.exports});var Eb=a((fV,Cb)=>{"use strict";var Ob=Ke(),I$=TypeError;Cb.exports=function(e,r){if(!delete e[r])throw new I$("Cannot delete property "+Ob(r)+" of "+Ob(e))}});var Ib=a(()=>{"use strict";var k$=x(),P$=re(),_$=le(),R$=Dr(),A$=Eb(),N$=Ot(),M$=[].unshift(0)!==1,j$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},$$=M$||!j$();k$({target:"Array",proto:!0,arity:1,forced:$$},{unshift:function(r){var t=P$(this),n=_$(t),i=arguments.length;if(i){N$(n+i);for(var o=n;o--;){var u=o+i;o in t?t[u]=t[o]:A$(t,u)}for(var l=0;l<i;l++)t[l]=arguments[l]}return R$(t,n+i)}})});var Pb=a((dV,kb)=>{"use strict";Ib();var L$=oe();kb.exports=L$("Array","unshift")});var Rb=a((mV,_b)=>{"use strict";var F$=B(),D$=Pb(),$u=Array.prototype;_b.exports=function(e){var r=e.unshift;return e===$u||F$($u,e)&&r===$u.unshift?D$:r}});var Nb=a((hV,Ab)=>{"use strict";var B$=Rb();Ab.exports=B$});var jb=a((yV,Mb)=>{"use strict";var G$=Nb();Mb.exports=G$});var Lb=a((gV,$b)=>{"use strict";var U$=jb();$b.exports=U$});var Db=a((bV,Fb)=>{"use strict";Fb.exports=Lb()});var Bb=a((qV,Yt)=>{var W$=Db();function H$(e){var r=Object(e),t=[];for(var n in r)W$(t).call(t,n);return function i(){for(;t.length;)if((n=t.pop())in r)return i.value=n,i.done=!1,i;return i.done=!0,i}}Yt.exports=H$,Yt.exports.__esModule=!0,Yt.exports.default=Yt.exports});var Ub=a((xV,Gb)=>{"use strict";hr();Ct();pr();wo();var K$=Ur();Gb.exports=K$.f("iterator")});var Hb=a((SV,Wb)=>{"use strict";var V$=Ub();yr();Wb.exports=V$});var Vb=a((wV,Kb)=>{"use strict";var z$=Hb();Kb.exports=z$});var Yb=a((TV,zb)=>{"use strict";var Y$=Vb();zb.exports=Y$});var Jt=a((OV,Jb)=>{"use strict";Jb.exports=Yb()});var Qb=a((CV,je)=>{var gi=we(),J$=Jt();function Lu(e){"@babel/helpers - typeof";return je.exports=Lu=typeof gi=="function"&&typeof J$=="symbol"?function(r){return typeof r}:function(r){return r&&typeof gi=="function"&&r.constructor===gi&&r!==gi.prototype?"symbol":typeof r},je.exports.__esModule=!0,je.exports.default=je.exports,Lu(e)}je.exports=Lu,je.exports.__esModule=!0,je.exports.default=je.exports});var Xb=a((EV,Qt)=>{var Q$=Qb().default,X$=we(),Z$=Jt();function eL(e){if(e!=null){var r=e[typeof X$=="function"&&Z$||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(Q$(e)+" is not iterable")}Qt.exports=eL,Qt.exports.__esModule=!0,Qt.exports.default=Qt.exports});var rq=a((IV,$e)=>{var Zb=di(),rL=Og(),tL=Cu(),nL=Ru(),iL=Tb(),aL=ju(),oL=Mu(),uL=Bb(),eq=Xb();function Fu(){"use strict";var e=nL(),r=e.m(Fu),t=(Zb?Zb(r):r.__proto__).constructor;function n(u){var l=typeof u=="function"&&u.constructor;return!!l&&(l===t||(l.displayName||l.name)==="GeneratorFunction")}var i={throw:1,return:2,break:3,continue:3};function o(u){var l,c;return function(s){l||(l={stop:function(){return c(s.a,2)},catch:function(){return s.v},abrupt:function(p,v){return c(s.a,i[p],v)},delegateYield:function(p,v,d){return l.resultName=v,c(s.d,eq(p),d)},finish:function(p){return c(s.f,p)}},c=function(p,v,d){s.p=l.prev,s.n=l.next;try{return p(v,d)}finally{l.next=s.n}}),l.resultName&&(l[l.resultName]=s.v,l.resultName=void 0),l.sent=s.v,l.next=s.n;try{return u.call(this,l)}finally{s.p=l.prev,s.n=l.next}}}return($e.exports=Fu=function(){return{wrap:function(c,s,f,p){return e.w(o(c),s,f,p&&rL(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(c,s){return new tL(c,s)},AsyncIterator:oL,async:function(c,s,f,p,v){return(n(s)?aL:iL)(o(c),s,f,p,v)},keys:uL,values:eq}},$e.exports.__esModule=!0,$e.exports.default=$e.exports)()}$e.exports=Fu,$e.exports.__esModule=!0,$e.exports.default=$e.exports});var se=a((kV,tq)=>{var bi=rq()();tq.exports=bi;try{regeneratorRuntime=bi}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=bi:Function("r","regeneratorRuntime = r")(bi)}});var Du=a((xi,iq)=>{"use strict";Object.defineProperty(xi,"__esModule",{value:!0});var qi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},nq=function(){function e(r,t){var n=[],i=!0,o=!1,u=void 0;try{for(var l=r[Symbol.iterator](),c;!(i=(c=l.next()).done)&&(n.push(c.value),!(t&&n.length===t));i=!0);}catch(s){o=!0,u=s}finally{try{!i&&l.return&&l.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();xi.default=sL;function sL(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(i){return i.type==="tag"||i.type==="script"||i.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var i=this.attribs,o=Object.keys(i),u=o.reduce(function(l,c,s){return l[s]={name:c,value:i[c]},l},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var i=[];return er(this.childTags,function(o){(o.name===n||n==="*")&&i.push(o)}),i}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var i=n.trim().replace(/\s+/g," ").split(" "),o=[];return er([this],function(u){var l=u.attribs.class;l&&i.every(function(c){return l.indexOf(c)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var i=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=cL(n),u=o.shift(),l=o.length;return u(this).filter(function(c){for(var s=0;s<l;){if(c=o[s](c,i),!c)return!1;s+=1}return!0})}),t.contains||(t.contains=function(n){var i=!1;return er([this],function(o,u){o===n&&(i=!0,u())}),i}),!0}function cL(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,i=r.split(":"),o=nq(i,2),u=o[0],l=o[1],c=null,s=null;if(function(){switch(!0){case/>/.test(u):s=function(S){return function(T){return T(S.parent)&&S.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");c=function(S){var T=S.attribs.class;return T&&h.every(function(w){return T.indexOf(w)>-1})},s=function(S,T){return n?S.getElementsByClassName(h.join(" ")):typeof S=="function"?S(c):Xt(S,T,c)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),y=nq(m,2),q=y[0],b=y[1];c=function(S){var T=Object.keys(S.attribs).indexOf(q)>-1;return!!(T&&(!b||S.attribs[q]===b))},s=function(S,T){if(n){var w=function(){var C=[];return er([S],function(j){c(j)&&C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":qi(w))==="object")return w.v}return typeof S=="function"?S(c):Xt(S,T,c)};break;case/^#/.test(u):var I=u.substr(1);c=function(S){return S.attribs.id===I},s=function(S,T){if(n){var w=function(){var C=[];return er([S],function(j,be){c(j)&&(C.push(j),be())}),{v:C}}();if((typeof w>"u"?"undefined":qi(w))==="object")return w.v}return typeof S=="function"?S(c):Xt(S,T,c)};break;case/\*/.test(u):c=function(S){return!0},s=function(S,T){if(n){var w=function(){var C=[];return er([S],function(j){return C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":qi(w))==="object")return w.v}return typeof S=="function"?S(c):Xt(S,T,c)};break;default:c=function(S){return S.name===u},s=function(S,T){if(n){var w=function(){var C=[];return er([S],function(j){c(j)&&C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":qi(w))==="object")return w.v}return typeof S=="function"?S(c):Xt(S,T,c)}}}(),!l)return s;var f=l.match(/-(child|type)\((\d+)\)$/),p=f[1],v=parseInt(f[2],10)-1,d=function(m){if(m){var y=m.parent.childTags;p==="type"&&(y=y.filter(c));var q=y.findIndex(function(b){return b===m});if(q===v)return!0}return!1};return function(m){var y=s(m);return n?y.reduce(function(q,b){return d(b)&&q.push(b),q},[]):d(y)&&y}})}function er(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&er(t.childTags,r)})}function Xt(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}iq.exports=xi.default});var wi=a(Si=>{"use strict";Object.defineProperty(Si,"__esModule",{value:!0});Si.convertNodeList=lL;Si.escapeValue=fL;function lL(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function fL(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var dq=a((Ti,vq)=>{"use strict";Object.defineProperty(Ti,"__esModule",{value:!0});Ti.default=pL;var sq=wi(),aq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function pL(e,r){var t=r.root,n=t===void 0?document:t,i=r.skip,o=i===void 0?null:i,u=r.priority,l=u===void 0?["id","class","href","src"]:u,c=r.ignore,s=c===void 0?{}:c,f=[],p=e,v=f.length,d=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(q){return typeof q!="function"?function(b){return b===q}:q}),m=function(b){return o&&h.some(function(I){return I(b)})};for(Object.keys(s).forEach(function(q){q==="class"&&(d=!0);var b=s[q];typeof b!="function"&&(typeof b=="number"&&(b=b.toString()),typeof b=="string"&&(b=new RegExp((0,sq.escapeValue)(b).replace(/\\/g,"\\\\"))),typeof b=="boolean"&&(b=b?/(?:)/:/.^/),s[q]=function(I,E){return b.test(E)})}),d&&function(){var q=s.attribute;s.attribute=function(b,I,E){return s.class(I)||q&&q(b,I,E)}}();p!==n;){if(m(p)!==!0){if(oq(l,p,s,f,n)||uq(p,s,f,n))break;oq(l,p,s,f),f.length===v&&uq(p,s,f),f.length===v&&vL(l,p,s,f)}p=p.parentNode,v=f.length}if(p===n){var y=fq(l,p,s);f.unshift(y)}return f.join(" ")}function oq(e,r,t,n){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=cq(e,r,t);if(o){var u=i.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function cq(e,r,t){for(var n=r.attributes,i=Object.keys(n).sort(function(m,y){var q=e.indexOf(n[m].name),b=e.indexOf(n[y].name);return b===-1?q===-1?0:-1:q-b}),o=0,u=i.length;o<u;o++){var l=i[o],c=n[l],s=c.name,f=(0,sq.escapeValue)(c.value),p=t[s]||t.attribute,v=aq[s]||aq.attribute;if(!pq(p,s,f,v)){var d="["+s+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(s==="id"&&(d="#"+f),s==="class")){var h=f.trim().replace(/\s+/g,".");d="."+h}return d}}return null}function uq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,i=lq(e,r);if(i){var o=n.getElementsByTagName(i);if(o.length===1)return t.unshift(i),!0}return!1}function lq(e,r){var t=e.tagName.toLowerCase();return pq(r.tag,null,t)?null:t}function vL(e,r,t,n){for(var i=r.parentNode,o=i.childTags||i.children,u=0,l=o.length;u<l;u++){var c=o[u];if(c===r){var s=fq(e,c,t);if(!s)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,c,t,s);var f="> "+s+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function fq(e,r,t){var n=cq(e,r,t);return n||(n=lq(r,t)),n}function pq(e,r,t,n){if(!t)return!0;var i=e||n;return i?i(r,t,n):!1}vq.exports=Ti.default});var Bu=a((Ci,mq)=>{"use strict";Object.defineProperty(Ci,"__esModule",{value:!0});Ci.default=gL;var dL=Du(),mL=yL(dL),hL=wi();function yL(e){return e&&e.__esModule?e:{default:e}}function gL(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,hL.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,mL.default)(r[0],t),i=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(i.length<2)return Oi("",e,"",r);for(var o=[i.pop()];i.length>1;){var u=i.pop(),l=i.join(" "),c=o.join(" "),s=l+" "+c,f=document.querySelectorAll(s);f.length!==r.length&&o.unshift(Oi(l,u,c,r))}return o.unshift(i[0]),i=o,i[0]=Oi("",i[0],i.slice(1).join(" "),r),i[i.length-1]=Oi(i.slice(0,-1).join(" "),i[i.length-1],"",r),n&&delete global.document,i.join(" ").replace(/>/g,"> ").trim()}function Oi(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var i=r.replace(/=.*$/,"]"),o=""+e+i+t,u=document.querySelectorAll(o);if(tt(u,n))r=i;else for(var l=document.querySelectorAll(""+e+i),c=function(){var E=l[s];if(n.some(function(T){return E.contains(T)})){var S=E.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),tt(u,n)&&(r=S),"break"}},s=0,f=l.length;s<f;s++){var o,u,p=c();if(p==="break")break}}if(/>/.test(r)){var v=r.replace(/>/,""),o=""+e+v+t,u=document.querySelectorAll(o);tt(u,n)&&(r=v)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);tt(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(I){return"."+I}).sort(function(I,E){return I.length-E.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);tt(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var y=document.querySelectorAll(""+e+r),q=function(){var E=y[s];if(n.some(function(T){return E.contains(T)})){var S=E.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),tt(u,n)&&(r=S),"break"}},s=0,f=y.length;s<f;s++){var o,u,b=q();if(b==="break")break}}return r}function tt(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var i=0;i<t;i++)if(e[i]===n)return!0;return!1})}mq.exports=Ci.default});var Gu=a(Ei=>{"use strict";Object.defineProperty(Ei,"__esModule",{value:!0});Ei.getCommonAncestor=bL;Ei.getCommonProperties=qL;function bL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,i=[];e.forEach(function(p,v){for(var d=[];p!==n;)p=p.parentNode,d.unshift(p);i[v]=d}),i.sort(function(p,v){return p.length-v.length});for(var o=i.shift(),u=null,l=function(){var v=o[c],d=i.some(function(h){return!h.some(function(m){return m===v})});if(d)return"break";u=v},c=0,s=o.length;c<s;c++){var f=l();if(f==="break")break}return u}function qL(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,i=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(c){return u.some(function(s){return s===c})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(i!==void 0&&function(){var c=t.attributes,s=Object.keys(c).reduce(function(v,d){var h=c[d],m=h.name;return h&&m!=="class"&&(v[m]=h.value),v},{}),f=Object.keys(s),p=Object.keys(i);f.length?p.length?(i=p.reduce(function(v,d){var h=i[d];return h===s[d]&&(v[d]=h),v},{}),Object.keys(i).length?r.attributes=i:delete r.attributes):r.attributes=s:delete r.attributes}(),o!==void 0){var l=t.tagName.toLowerCase();o?l!==o&&delete r.tag:r.tag=l}}),r}});var xq=a(Zt=>{"use strict";Object.defineProperty(Zt,"__esModule",{value:!0});var xL=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Zt.getSingleSelector=Wu;Zt.getMultiSelector=qq;Zt.default=EL;var SL=Du(),yq=Uu(SL),wL=dq(),TL=Uu(wL),OL=Bu(),gq=Uu(OL),hq=wi(),bq=Gu();function Uu(e){return e&&e.__esModule?e:{default:e}}function Wu(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":xL(e))+'")');var t=(0,yq.default)(e,r),n=(0,TL.default)(e,r),i=(0,gq.default)(n,e,r);return t&&delete global.document,i}function qq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,hq.convertNodeList)(e)),e.some(function(s){return s.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,yq.default)(e[0],r),n=(0,bq.getCommonAncestor)(e,r),i=Wu(n,r),o=CL(e),u=o[0],l=(0,gq.default)(i+" "+u,e,r),c=(0,hq.convertNodeList)(document.querySelectorAll(l));return e.every(function(s){return c.some(function(f){return f===s})})?(t&&delete global.document,l):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function CL(e){var r=(0,bq.getCommonProperties)(e),t=r.classes,n=r.attributes,i=r.tag,o=[];if(i&&o.push(i),t){var u=t.map(function(c){return"."+c}).join("");o.push(u)}if(n){var l=Object.keys(n).reduce(function(c,s){return c.push("["+s+'="'+n[s]+'"]'),c},[]).join("");o.push(l)}return o.length,[o.join("")]}function EL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?qq(e,r):Wu(e,r)}});var Tq=a(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.default=ie.common=ie.optimize=ie.getMultiSelector=ie.getSingleSelector=ie.select=void 0;var Hu=xq();Object.defineProperty(ie,"getSingleSelector",{enumerable:!0,get:function(){return Hu.getSingleSelector}});Object.defineProperty(ie,"getMultiSelector",{enumerable:!0,get:function(){return Hu.getMultiSelector}});var Sq=wq(Hu),IL=Bu(),kL=wq(IL),PL=Gu(),_L=RL(PL);function RL(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function wq(e){return e&&e.__esModule?e:{default:e}}ie.select=Sq.default;ie.optimize=kL.default;ie.common=_L;ie.default=Sq.default});var Oq=a(()=>{"use strict";var GL=x(),UL=ke();GL({target:"Array",stat:!0},{isArray:UL})});var Eq=a((KV,Cq)=>{"use strict";Oq();var WL=K();Cq.exports=WL.Array.isArray});var kq=a((VV,Iq)=>{"use strict";var HL=Eq();Iq.exports=HL});var _q=a((zV,Pq)=>{"use strict";var KL=kq();Pq.exports=KL});var Aq=a((YV,Rq)=>{"use strict";var VL=_q();Rq.exports=VL});var Mq=a((JV,Nq)=>{"use strict";Nq.exports=Aq()});var Lq=a(()=>{"use strict";var zL=x(),YL=re(),JL=le(),QL=Dr(),XL=Ot(),ZL=P(),eF=ZL(function(){return[].push.call({length:4294967296},1)!==4294967297}),rF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},tF=eF||!rF();zL({target:"Array",proto:!0,arity:1,forced:tF},{push:function(r){var t=YL(this),n=JL(t),i=arguments.length;XL(n+i);for(var o=0;o<i;o++)t[n]=arguments[o],n++;return QL(t,n),n}})});var Dq=a((ez,Fq)=>{"use strict";Lq();var nF=oe();Fq.exports=nF("Array","push")});var Gq=a((rz,Bq)=>{"use strict";var iF=B(),aF=Dq(),Ku=Array.prototype;Bq.exports=function(e){var r=e.push;return e===Ku||iF(Ku,e)&&r===Ku.push?aF:r}});var Wq=a((tz,Uq)=>{"use strict";var oF=Gq();Uq.exports=oF});var Kq=a((nz,Hq)=>{"use strict";var uF=Wq();Hq.exports=uF});var zq=a((iz,Vq)=>{"use strict";var sF=Kq();Vq.exports=sF});var Vu=a((az,Yq)=>{"use strict";Yq.exports=zq()});var ox=a(()=>{"use strict";var cF=x(),lF=It().map,fF=yt(),pF=fF("map");cF({target:"Array",proto:!0,forced:!pF},{map:function(r){return lF(this,r,arguments.length>1?arguments[1]:void 0)}})});var sx=a((Az,ux)=>{"use strict";ox();var vF=oe();ux.exports=vF("Array","map")});var lx=a((Nz,cx)=>{"use strict";var dF=B(),mF=sx(),Yu=Array.prototype;cx.exports=function(e){var r=e.map;return e===Yu||dF(Yu,e)&&r===Yu.map?mF:r}});var px=a((Mz,fx)=>{"use strict";var hF=lx();fx.exports=hF});var dx=a((jz,vx)=>{"use strict";var yF=px();vx.exports=yF});var hx=a(($z,mx)=>{"use strict";var gF=dx();mx.exports=gF});var gx=a((Lz,yx)=>{"use strict";yx.exports=hx()});var qx=a((Fz,bx)=>{bx.exports=gx()});var Sx=a((Dz,xx)=>{xx.exports=rt()});var Ex=a((Bz,Cx)=>{"use strict";var bF=F(),qF=re(),xF=dn(),SF=le(),wx=TypeError,Tx="Reduce of empty array with no initial value",Ox=function(e){return function(r,t,n,i){var o=qF(r),u=xF(o),l=SF(o);if(bF(t),l===0&&n<2)throw new wx(Tx);var c=e?l-1:0,s=e?-1:1;if(n<2)for(;;){if(c in u){i=u[c],c+=s;break}if(c+=s,e?c<0:l<=c)throw new wx(Tx)}for(;e?c>=0:l>c;c+=s)c in u&&(i=t(i,u[c],c,o));return i}};Cx.exports={left:Ox(!1),right:Ox(!0)}});var Ju=a((Gz,Ix)=>{"use strict";var wF=P();Ix.exports=function(e,r){var t=[][e];return!!t&&wF(function(){t.call(null,r||function(){return 1},1)})}});var Px=a(()=>{"use strict";var TF=x(),OF=Ex().left,CF=Ju(),kx=Ar(),EF=Nt(),IF=!EF&&kx>79&&kx<83,kF=IF||!CF("reduce");TF({target:"Array",proto:!0,forced:kF},{reduce:function(r){var t=arguments.length;return OF(this,r,t,t>1?arguments[1]:void 0)}})});var Rx=a((Hz,_x)=>{"use strict";Px();var PF=oe();_x.exports=PF("Array","reduce")});var Nx=a((Kz,Ax)=>{"use strict";var _F=B(),RF=Rx(),Qu=Array.prototype;Ax.exports=function(e){var r=e.reduce;return e===Qu||_F(Qu,e)&&r===Qu.reduce?RF:r}});var jx=a((Vz,Mx)=>{"use strict";var AF=Nx();Mx.exports=AF});var Lx=a((zz,$x)=>{"use strict";var NF=jx();$x.exports=NF});var Dx=a((Yz,Fx)=>{"use strict";var MF=Lx();Fx.exports=MF});var Gx=a((Jz,Bx)=>{"use strict";Bx.exports=Dx()});var Wx=a((Qz,Ux)=>{Ux.exports=Gx()});var Vx=a((Xz,Kx)=>{"use strict";var jF=ke(),$F=le(),LF=Ot(),FF=V(),DF=Fr(),Hx=function(e,r,t,n,i,o,u,l){for(var c=i,s=0,f=u?FF(u,l):!1,p,v;s<n;)s in t&&(p=f?f(t[s],s,r):t[s],o>0&&jF(p)?(v=$F(p),c=Hx(e,r,p,v,c,o-1)-1):(LF(c+1),DF(e,c,p)),c++),s++;return c};Kx.exports=Hx});var zx=a(()=>{"use strict";var BF=x(),GF=Vx(),UF=F(),WF=re(),HF=le(),KF=Mn();BF({target:"Array",proto:!0},{flatMap:function(r){var t=WF(this),n=HF(t),i;return UF(r),i=KF(t,0),GF(i,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),i}})});var Yx=a(()=>{"use strict";var VF=Oo();VF("flatMap")});var Qx=a((n7,Jx)=>{"use strict";zx();Yx();var zF=oe();Jx.exports=zF("Array","flatMap")});var Zx=a((i7,Xx)=>{"use strict";var YF=B(),JF=Qx(),Xu=Array.prototype;Xx.exports=function(e){var r=e.flatMap;return e===Xu||YF(Xu,e)&&r===Xu.flatMap?JF:r}});var rS=a((a7,eS)=>{"use strict";var QF=Zx();eS.exports=QF});var nS=a((o7,tS)=>{"use strict";var XF=rS();tS.exports=XF});var aS=a((u7,iS)=>{"use strict";var ZF=nS();iS.exports=ZF});var uS=a((s7,oS)=>{"use strict";oS.exports=aS()});var cS=a((c7,sS)=>{sS.exports=uS()});var fS=a((l7,lS)=>{"use strict";Ya();var eD=oe();lS.exports=eD("Array","concat")});var vS=a((f7,pS)=>{"use strict";var rD=B(),tD=fS(),Zu=Array.prototype;pS.exports=function(e){var r=e.concat;return e===Zu||rD(Zu,e)&&r===Zu.concat?tD:r}});var mS=a((p7,dS)=>{"use strict";var nD=vS();dS.exports=nD});var yS=a((v7,hS)=>{"use strict";var iD=mS();hS.exports=iD});var bS=a((d7,gS)=>{"use strict";var aD=yS();gS.exports=aD});var xS=a((m7,qS)=>{"use strict";qS.exports=bS()});var es=a((h7,SS)=>{SS.exports=xS()});var OS=a(()=>{});var ES=a((F7,CS)=>{"use strict";OS();To();var mD=Ur();CS.exports=mD.f("toPrimitive")});var kS=a((D7,IS)=>{"use strict";var hD=ES();IS.exports=hD});var _S=a((B7,PS)=>{"use strict";var yD=kS();PS.exports=yD});var AS=a((G7,RS)=>{"use strict";var gD=_S();RS.exports=gD});var MS=a((U7,NS)=>{"use strict";NS.exports=AS()});var WS=a((l9,US)=>{"use strict";var qD=$(),xD=xe(),SD=R(),wD=SD("match");US.exports=function(e){var r;return qD(e)&&((r=e[wD])!==void 0?!!r:xD(e)==="RegExp")}});var KS=a((f9,HS)=>{"use strict";var TD=WS(),OD=TypeError;HS.exports=function(e){if(TD(e))throw new OD("The method doesn't accept regular expressions");return e}});var zS=a((p9,VS)=>{"use strict";var CD=R(),ED=CD("match");VS.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[ED]=!1,"/./"[e](r)}catch{}}return!1}});var QS=a(()=>{"use strict";var ID=x(),kD=ct(),PD=ft().f,_D=ba(),YS=Ve(),RD=KS(),AD=or(),ND=zS(),MD=Z(),jD=kD("".slice),$D=Math.min,JS=ND("startsWith"),LD=!MD&&!JS&&!!function(){var e=PD(String.prototype,"startsWith");return e&&!e.writable}();ID({target:"String",proto:!0,forced:!LD&&!JS},{startsWith:function(r){var t=YS(AD(this));RD(r);var n=_D($D(arguments.length>1?arguments[1]:void 0,t.length)),i=YS(r);return jD(t,n,n+i.length)===i}})});var ZS=a((m9,XS)=>{"use strict";QS();var FD=oe();XS.exports=FD("String","startsWith")});var rw=a((h9,ew)=>{"use strict";var DD=B(),BD=ZS(),is=String.prototype;ew.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===is||DD(is,e)&&r===is.startsWith?BD:r}});var nw=a((y9,tw)=>{"use strict";var GD=rw();tw.exports=GD});var aw=a((g9,iw)=>{"use strict";var UD=nw();iw.exports=UD});var uw=a((b9,ow)=>{"use strict";var WD=aw();ow.exports=WD});var cw=a((q9,sw)=>{"use strict";sw.exports=uw()});var fw=a((x9,lw)=>{lw.exports=cw()});var pw=a(()=>{"use strict";var HD=x(),KD=It().filter,VD=yt(),zD=VD("filter");HD({target:"Array",proto:!0,forced:!zD},{filter:function(r){return KD(this,r,arguments.length>1?arguments[1]:void 0)}})});var dw=a((T9,vw)=>{"use strict";pw();var YD=oe();vw.exports=YD("Array","filter")});var hw=a((O9,mw)=>{"use strict";var JD=B(),QD=dw(),as=Array.prototype;mw.exports=function(e){var r=e.filter;return e===as||JD(as,e)&&r===as.filter?QD:r}});var gw=a((C9,yw)=>{"use strict";var XD=hw();yw.exports=XD});var qw=a((E9,bw)=>{"use strict";var ZD=gw();bw.exports=ZD});var Sw=a((I9,xw)=>{"use strict";var eB=qw();xw.exports=eB});var Tw=a((k9,ww)=>{"use strict";ww.exports=Sw()});var Cw=a((P9,Ow)=>{Ow.exports=Tw()});var Gw=a(()=>{"use strict";var sB=x(),cB=U(),us=_r(),lB=Iu(),jw=Fo(),fB=Q(),$w=$(),pB=Ye(),Fw=P(),ss=cB("Reflect","construct"),vB=Object.prototype,dB=[].push,Dw=Fw(function(){function e(){}return!(ss(function(){},[],e)instanceof e)}),Bw=!Fw(function(){ss(function(){})}),Lw=Dw||Bw;sB({target:"Reflect",stat:!0,forced:Lw,sham:Lw},{construct:function(r,t){jw(r),fB(t);var n=arguments.length<3?r:jw(arguments[2]);if(Bw&&!Dw)return ss(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var i=[null];return us(dB,i,t),new(us(lB,r,i))}var o=n.prototype,u=pB($w(o)?o:vB),l=us(r,u,t);return $w(l)?l:u}})});var Ww=a((lY,Uw)=>{"use strict";Gw();var mB=K();Uw.exports=mB.Reflect.construct});var Kw=a((fY,Hw)=>{"use strict";var hB=Ww();Hw.exports=hB});var zw=a((pY,Vw)=>{"use strict";var yB=Kw();Vw.exports=yB});var Jw=a((vY,Yw)=>{"use strict";var gB=zw();Yw.exports=gB});var Ni=a((dY,Qw)=>{"use strict";Qw.exports=Jw()});var Zw=a((mY,Xw)=>{Xw.exports=Ni()});var sT=a((TY,uT)=>{"use strict";var bB=P();uT.exports=bB(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var fT=a((OY,lT)=>{"use strict";var qB=P(),xB=$(),SB=xe(),cT=sT(),Mi=Object.isExtensible,wB=qB(function(){Mi(1)});lT.exports=wB||cT?function(r){return!xB(r)||cT&&SB(r)==="ArrayBuffer"?!1:Mi?Mi(r):!0}:Mi});var vT=a((CY,pT)=>{"use strict";var TB=P();pT.exports=!TB(function(){return Object.isExtensible(Object.preventExtensions({}))})});var ms=a((EY,hT)=>{"use strict";var OB=x(),CB=A(),EB=Gr(),IB=$(),ps=W(),kB=te().f,dT=Et(),PB=Ja(),vs=fT(),_B=Mr(),RB=vT(),mT=!1,De=_B("meta"),AB=0,ds=function(e){kB(e,De,{value:{objectID:"O"+AB++,weakData:{}}})},NB=function(e,r){if(!IB(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!ps(e,De)){if(!vs(e))return"F";if(!r)return"E";ds(e)}return e[De].objectID},MB=function(e,r){if(!ps(e,De)){if(!vs(e))return!0;if(!r)return!1;ds(e)}return e[De].weakData},jB=function(e){return RB&&mT&&vs(e)&&!ps(e,De)&&ds(e),e},$B=function(){LB.enable=function(){},mT=!0;var e=dT.f,r=CB([].splice),t={};t[De]=1,e(t).length&&(dT.f=function(n){for(var i=e(n),o=0,u=i.length;o<u;o++)if(i[o]===De){r(i,o,1);break}return i},OB({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:PB.f}))},LB=hT.exports={enable:$B,fastKey:NB,getWeakData:MB,onFreeze:jB};EB[De]=!0});var bT=a((IY,gT)=>{"use strict";var FB=x(),DB=_(),BB=ms(),GB=P(),UB=Se(),WB=pe(),HB=ni(),KB=N(),VB=$(),zB=ar(),YB=Re(),JB=te().f,QB=It().forEach,XB=G(),yT=ze(),ZB=yT.set,e3=yT.getterFor;gT.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,i=e.indexOf("Weak")!==-1,o=n?"set":"add",u=DB[e],l=u&&u.prototype,c={},s;if(!XB||!KB(u)||!(i||l.forEach&&!GB(function(){new u().entries().next()})))s=t.getConstructor(r,e,n,o),BB.enable();else{s=r(function(v,d){ZB(HB(v,f),{type:e,collection:new u}),zB(d)||WB(d,v[o],{that:v,AS_ENTRIES:n})});var f=s.prototype,p=e3(e);QB(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(v){var d=v==="add"||v==="set";v in l&&!(i&&v==="clear")&&UB(f,v,function(h,m){var y=p(this).collection;if(!d&&i&&!VB(h))return v==="get"?void 0:!1;var q=y[v](h===0?0:h,m);return d?this:q})}),i||JB(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return YB(s,e,!1,!0),c[e]=s,FB({global:!0,forced:!0},c),i||t.setStrong(s,e,n),s}});var xT=a((kY,qT)=>{"use strict";var r3=Pe();qT.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:r3(e,n,r[n],t);return e}});var IT=a((PY,ET)=>{"use strict";var ST=Ye(),t3=$n(),wT=xT(),n3=V(),i3=ni(),a3=ar(),o3=pe(),u3=_n(),ji=Rn(),s3=Lo(),on=G(),TT=ms().fastKey,CT=ze(),OT=CT.set,hs=CT.getterFor;ET.exports={getConstructor:function(e,r,t,n){var i=e(function(s,f){i3(s,o),OT(s,{type:r,index:ST(null),first:null,last:null,size:0}),on||(s.size=0),a3(f)||o3(f,s[n],{that:s,AS_ENTRIES:t})}),o=i.prototype,u=hs(r),l=function(s,f,p){var v=u(s),d=c(s,f),h,m;return d?d.value=p:(v.last=d={index:m=TT(f,!0),key:f,value:p,previous:h=v.last,next:null,removed:!1},v.first||(v.first=d),h&&(h.next=d),on?v.size++:s.size++,m!=="F"&&(v.index[m]=d)),s},c=function(s,f){var p=u(s),v=TT(f),d;if(v!=="F")return p.index[v];for(d=p.first;d;d=d.next)if(d.key===f)return d};return wT(o,{clear:function(){for(var f=this,p=u(f),v=p.first;v;)v.removed=!0,v.previous&&(v.previous=v.previous.next=null),v=v.next;p.first=p.last=null,p.index=ST(null),on?p.size=0:f.size=0},delete:function(s){var f=this,p=u(f),v=c(f,s);if(v){var d=v.next,h=v.previous;delete p.index[v.index],v.removed=!0,h&&(h.next=d),d&&(d.previous=h),p.first===v&&(p.first=d),p.last===v&&(p.last=h),on?p.size--:f.size--}return!!v},forEach:function(f){for(var p=u(this),v=n3(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:p.first;)for(v(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!c(this,f)}}),wT(o,t?{get:function(f){var p=c(this,f);return p&&p.value},set:function(f,p){return l(this,f===0?0:f,p)}}:{add:function(f){return l(this,f=f===0?0:f,f)}}),on&&t3(o,"size",{configurable:!0,get:function(){return u(this).size}}),i},setStrong:function(e,r,t){var n=r+" Iterator",i=hs(r),o=hs(n);u3(e,r,function(u,l){OT(this,{type:n,target:u,state:i(u),kind:l,last:null})},function(){for(var u=o(this),l=u.kind,c=u.last;c&&c.removed;)c=c.previous;return!u.target||!(u.last=c=c?c.next:u.state.first)?(u.target=null,ji(void 0,!0)):ji(l==="keys"?c.key:l==="values"?c.value:[c.key,c.value],!1)},t?"entries":"values",!t,!0),s3(r)}}});var kT=a(()=>{"use strict";var c3=bT(),l3=IT();c3("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},l3)});var PT=a(()=>{"use strict";kT()});var RT=a((MY,_T)=>{"use strict";_T.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,i){return t[e](n,i)}}});var ae=a((jY,NT)=>{"use strict";var f3=U(),$i=RT(),AT=f3("Map");NT.exports={Map:AT,set:$i("set",2),get:$i("get",1),has:$i("has",1),remove:$i("delete",1),proto:AT.prototype}});var ys=a(()=>{"use strict";var p3=x(),v3=A(),d3=F(),m3=or(),h3=pe(),Li=ae(),MT=Z(),y3=P(),jT=Li.Map,g3=Li.has,b3=Li.get,q3=Li.set,x3=v3([].push),S3=MT||y3(function(){return jT.groupBy("ab",function(e){return e}).get("a").length!==1});p3({target:"Map",stat:!0,forced:MT||S3},{groupBy:function(r,t){m3(r),d3(t);var n=new jT,i=0;return h3(r,function(o){var u=t(o,i++);g3(n,u)?x3(b3(n,u),o):q3(n,u,[o])}),n}})});var z=a((FY,$T)=>{"use strict";var w3=Ke(),T3=TypeError;$T.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new T3(w3(e)+" is not a map")}});var bs=a(()=>{"use strict";var O3=x(),C3=z(),gs=ae(),E3=Z(),I3=gs.get,k3=gs.has,P3=gs.set;O3({target:"Map",proto:!0,real:!0,forced:E3},{getOrInsert:function(r,t){return k3(C3(this),r)?I3(this,r):(P3(this,r,t),t)}})});var xs=a(()=>{"use strict";var _3=x(),R3=F(),A3=z(),qs=ae(),N3=Z(),M3=qs.get,j3=qs.has,$3=qs.set;_3({target:"Map",proto:!0,real:!0,forced:N3},{getOrInsertComputed:function(r,t){if(A3(this),R3(t),j3(this,r))return M3(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return $3(this,r,n),n}})});var FT=a((WY,LT)=>{"use strict";hr();PT();ys();bs();xs();Ct();pr();var L3=K();LT.exports=L3.Map});var BT=a((HY,DT)=>{"use strict";var F3=FT();yr();DT.exports=F3});var Ss=a(()=>{"use strict";bs()});var ws=a(()=>{"use strict";xs()});var GT=a(()=>{"use strict";ys()});var WT=a((XY,UT)=>{"use strict";var D3=BT();Ss();ws();GT();UT.exports=D3});var KT=a((ZY,HT)=>{"use strict";var B3=V(),G3=Q(),U3=re(),W3=pe();HT.exports=function(e,r,t){return function(i){var o=U3(i),u=arguments.length,l=u>1?arguments[1]:void 0,c=l!==void 0,s=c?B3(l,u>2?arguments[2]:void 0):void 0,f=new e,p=0;return W3(o,function(v){var d=c?s(v,p++):v;t?r(f,G3(d)[0],d[1]):r(f,d)}),f}}});var zT=a(()=>{"use strict";var H3=x(),VT=ae(),K3=KT();H3({target:"Map",stat:!0,forced:!0},{from:K3(VT.Map,VT.set,!0)})});var JT=a((tJ,YT)=>{"use strict";var V3=Q();YT.exports=function(e,r,t){return function(){for(var i=new e,o=arguments.length,u=0;u<o;u++){var l=arguments[u];t?r(i,V3(l)[0],l[1]):r(i,l)}return i}}});var XT=a(()=>{"use strict";var z3=x(),QT=ae(),Y3=JT();z3({target:"Map",stat:!0,forced:!0},{of:Y3(QT.Map,QT.set,!0)})});var eO=a(()=>{"use strict";var J3=x(),Q3=D(),X3=pe(),Z3=N(),ZT=F(),e4=ae().Map;J3({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=Z3(this)?this:e4,i=new n;ZT(t);var o=ZT(i.set);return X3(r,function(u){Q3(o,i,t(u),u)}),i}})});var rO=a(()=>{"use strict";var r4=x(),t4=z(),n4=ae().remove;r4({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=t4(this),t=!0,n,i=0,o=arguments.length;i<o;i++)n=n4(r,arguments[i]),t=t&&n;return!!t}})});var nO=a(()=>{"use strict";var i4=x(),a4=z(),Ts=ae(),o4=Ts.get,u4=Ts.has,tO=Ts.set;i4({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=a4(this),i,o;return u4(n,r)?(i=o4(n,r),"update"in t&&(i=t.update(i,r,n),tO(n,r,i)),i):(o=t.insert(r,n),tO(n,r,o),o)}})});var aO=a((fJ,iO)=>{"use strict";var s4=D();iO.exports=function(e,r,t){for(var n=t?e:e.iterator,i=e.next,o,u;!(o=s4(i,n)).done;)if(u=r(o.value),u!==void 0)return u}});var ye=a((pJ,oO)=>{"use strict";var c4=aO();oO.exports=function(e,r,t){return t?c4(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var uO=a(()=>{"use strict";var l4=x(),f4=V(),p4=z(),v4=ye();l4({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=p4(this),n=f4(r,arguments.length>1?arguments[1]:void 0);return v4(t,function(i,o){if(!n(i,o,t))return!1},!0)!==!1}})});var cO=a(()=>{"use strict";var d4=x(),m4=V(),h4=z(),sO=ae(),y4=ye(),g4=sO.Map,b4=sO.set;d4({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=h4(this),n=m4(r,arguments.length>1?arguments[1]:void 0),i=new g4;return y4(t,function(o,u){n(o,u,t)&&b4(i,u,o)}),i}})});var lO=a(()=>{"use strict";var q4=x(),x4=V(),S4=z(),w4=ye();q4({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=S4(this),n=x4(r,arguments.length>1?arguments[1]:void 0),i=w4(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return i&&i.value}})});var fO=a(()=>{"use strict";var T4=x(),O4=V(),C4=z(),E4=ye();T4({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=C4(this),n=O4(r,arguments.length>1?arguments[1]:void 0),i=E4(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return i&&i.key}})});var vO=a((xJ,pO)=>{"use strict";pO.exports=function(e,r){return e===r||e!==e&&r!==r}});var dO=a(()=>{"use strict";var I4=x(),k4=vO(),P4=z(),_4=ye();I4({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return _4(P4(this),function(t){if(k4(t,r))return!0},!0)===!0}})});var mO=a(()=>{"use strict";var R4=x(),A4=z(),N4=ye();R4({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=N4(A4(this),function(n,i){if(n===r)return{key:i}},!0);return t&&t.key}})});var yO=a(()=>{"use strict";var M4=x(),j4=V(),$4=z(),hO=ae(),L4=ye(),F4=hO.Map,D4=hO.set;M4({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=$4(this),n=j4(r,arguments.length>1?arguments[1]:void 0),i=new F4;return L4(t,function(o,u){D4(i,n(o,u,t),o)}),i}})});var bO=a(()=>{"use strict";var B4=x(),G4=V(),U4=z(),gO=ae(),W4=ye(),H4=gO.Map,K4=gO.set;B4({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=U4(this),n=G4(r,arguments.length>1?arguments[1]:void 0),i=new H4;return W4(t,function(o,u){K4(i,u,n(o,u,t))}),i}})});var qO=a(()=>{"use strict";var V4=x(),z4=z(),Y4=pe(),J4=ae().set;V4({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=z4(this),n=arguments.length,i=0;i<n;)Y4(arguments[i++],function(o,u){J4(t,o,u)},{AS_ENTRIES:!0});return t}})});var xO=a(()=>{"use strict";var Q4=x(),X4=F(),Z4=z(),eG=ye(),rG=TypeError;Q4({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=Z4(this),n=arguments.length<2,i=n?void 0:arguments[1];if(X4(r),eG(t,function(o,u){n?(n=!1,i=o):i=r(i,o,u,t)}),n)throw new rG("Reduce of empty map with no initial value");return i}})});var SO=a(()=>{"use strict";var tG=x(),nG=V(),iG=z(),aG=ye();tG({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=iG(this),n=nG(r,arguments.length>1?arguments[1]:void 0);return aG(t,function(i,o){if(n(i,o,t))return!0},!0)===!0}})});var TO=a(()=>{"use strict";var oG=x(),wO=F(),uG=z(),Os=ae(),sG=TypeError,cG=Os.get,lG=Os.has,fG=Os.set;oG({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=uG(this),i=arguments.length;wO(t);var o=lG(n,r);if(!o&&i<3)throw new sG("Updating absent value");var u=o?cG(n,r):wO(i>2?arguments[2]:void 0)(r,n);return fG(n,r,t(u,r,n)),n}})});var Es=a((LJ,OO)=>{"use strict";var Fi=D(),Cs=F(),Di=N(),pG=Q(),vG=TypeError;OO.exports=function(r,t){var n=pG(this),i=Cs(n.get),o=Cs(n.has),u=Cs(n.set),l=arguments.length>2?arguments[2]:void 0,c;if(!Di(t)&&!Di(l))throw new vG("At least one callback required");return Fi(o,n,r)?(c=Fi(i,n,r),Di(t)&&(c=t(c),Fi(u,n,r,c))):Di(l)&&(c=l(),Fi(u,n,r,c)),c}});var CO=a(()=>{"use strict";var dG=x(),mG=Es();dG({target:"Map",proto:!0,real:!0,forced:!0},{upsert:mG})});var EO=a(()=>{"use strict";var hG=x(),yG=Es();hG({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:yG})});var kO=a((UJ,IO)=>{"use strict";var gG=WT();zT();XT();eO();rO();nO();uO();cO();lO();fO();dO();Ss();ws();mO();yO();bO();qO();xO();SO();TO();CO();EO();IO.exports=gG});var _O=a((WJ,PO)=>{"use strict";PO.exports=kO()});var AO=a(()=>{"use strict";var bG=x(),qG=ct(),xG=ka().indexOf,SG=Ju(),Is=qG([].indexOf),RO=!!Is&&1/Is([1],1,-0)<0,wG=RO||!SG("indexOf");bG({target:"Array",proto:!0,forced:wG},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return RO?Is(this,r,t)||0:xG(this,r,t)}})});var MO=a((VJ,NO)=>{"use strict";AO();var TG=oe();NO.exports=TG("Array","indexOf")});var $O=a((zJ,jO)=>{"use strict";var OG=B(),CG=MO(),ks=Array.prototype;jO.exports=function(e){var r=e.indexOf;return e===ks||OG(ks,e)&&r===ks.indexOf?CG:r}});var FO=a((YJ,LO)=>{"use strict";var EG=$O();LO.exports=EG});var BO=a((JJ,DO)=>{"use strict";var IG=FO();DO.exports=IG});var UO=a((QJ,GO)=>{"use strict";var kG=BO();GO.exports=kG});var HO=a((XJ,WO)=>{"use strict";WO.exports=UO()});var sC=a(()=>{"use strict";var MG=x(),jG=re(),uC=Cn(),$G=P(),LG=$G(function(){uC(1)});MG({target:"Object",stat:!0,forced:LG},{keys:function(r){return uC(jG(r))}})});var lC=a((nX,cC)=>{"use strict";sC();var FG=K();cC.exports=FG.Object.keys});var pC=a((iX,fC)=>{"use strict";var DG=lC();fC.exports=DG});var dC=a((aX,vC)=>{"use strict";var BG=pC();vC.exports=BG});var hC=a((oX,mC)=>{"use strict";var GG=dC();mC.exports=GG});var gC=a((uX,yC)=>{"use strict";yC.exports=hC()});var qC=a((sX,bC)=>{bC.exports=gC()});var kr="";function Ws(e){kr=e.replace(/\/+$/,"")}async function ut(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function Hs(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${kr}/comments?${t}`);return await ut(n,"Failed to fetch comments"),(await n.json()).data}async function Vi({uri:e,document:r,quote:t,prefix:n,suffix:i,body:o,author:u,parent:l}){let c={quote:t,prefix:n,suffix:i,body:o,author:u,parent:l};r?c.document=r:c.uri=e;let s=await fetch(`${kr}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});return await ut(s,"Failed to create comment"),s.json()}async function Ks(e,{body:r}){let t=await fetch(`${kr}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:r})});return await ut(t,"Failed to update comment"),t.json()}async function Vs(e,r){let t=await fetch(`${kr}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});return await ut(t,"Failed to update comment status"),t.json()}async function zs(e){let r=await fetch(`${kr}/comments/${e}`,{method:"DELETE"});await ut(r,"Failed to delete comment")}var ML=g(Br(),1),jL=g(Nn(),1),$L=g(Jn(),1),LL=g(Qn(),1),FL=g(Xn(),1);var wu=g(rt(),1);function Uy(e,r,t,n,i,o,u){try{var l=e[o](u),c=l.value}catch(s){return void t(s)}l.done?r(c):wu.default.resolve(c).then(n,i)}function Sr(e){return function(){var r=this,t=arguments;return new wu.default(function(n,i){var o=e.apply(r,t);function u(c){Uy(o,n,i,u,l,"next",c)}function l(c){Uy(o,n,i,u,l,"throw",c)}u(void 0)})}}function Bt(e,r){this.v=e,this.k=r}function Ze(e){return new Bt(e,0)}var Tu=g(rt(),1),Zy=g(we(),1),eg=g(vi(),1);function Oe(e){return function(){return new Gt(e.apply(this,arguments))}}function Gt(e){var r,t;function n(o,u){try{var l=e[o](u),c=l.value,s=c instanceof Bt;Tu.default.resolve(s?c.v:c).then(function(f){if(s){var p=o==="return"?"return":"next";if(!c.k||f.done)return n(p,f);f=e[p](f).value}i(l.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){i("throw",f)}}function i(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new Tu.default(function(l,c){var s={key:o,arg:u,resolve:l,reject:c,next:null};t?t=t.next=s:(r=t=s,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Gt.prototype[typeof Zy.default=="function"&&eg.default||"@@asyncIterator"]=function(){return this},Gt.prototype.next=function(e){return this._invoke("next",e)},Gt.prototype.throw=function(e){return this._invoke("throw",e)},Gt.prototype.return=function(e){return this._invoke("return",e)};var DL=g(se(),1),BL=g(Tq(),1);function ce(e){var r,t=AL(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function AL(e){return"startContainer"in e}function rr(e){if(NL(e))return e;var r=e,t=ce(r).createRange();return t.selectNodeContents(r),t}function NL(e){return"startContainer"in e}var jq=g(Mq(),1);function $q(e){if((0,jq.default)(e))return e}var Jq=g(we(),1),Qq=g(Ro(),1),Xq=g(Vu(),1);function Zq(e,r){var t=e==null?null:typeof Jq.default<"u"&&(0,Qq.default)(e)||e["@@iterator"];if(t!=null){var n,i,o,u,l=[],c=!0,s=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&((0,Xq.default)(l).call(l,n.value),l.length!==r);c=!0);}catch(f){s=!0,i=f}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(s)throw i}}return l}}var ex=g(Sa(),1),rx=g(za(),1);function Ii(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function zu(e,r){if(e){var t;if(typeof e=="string")return Ii(e,r);var n=(0,ex.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,rx.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ii(e,r):void 0}}function tx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Le(e,r){return $q(e)||Zq(e,r)||zu(e,r)||tx()}var nx=g(we(),1),ix=g(vi(),1),ax=g(Jt(),1),en=g(rt(),1);function nt(e){var r,t,n,i=2;for(typeof nx.default<"u"&&(t=ix.default,n=ax.default);i--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new ki(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function ki(e){function r(t){if(Object(t)!==t)return en.default.reject(new TypeError(t+" is not an object."));var n=t.done;return en.default.resolve(t.value).then(function(i){return{value:i,done:n}})}return ki=function(n){this.s=n,this.n=n.next},ki.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var i=this.s.return;return i===void 0?en.default.resolve({value:n,done:!0}):r(i.apply(this.s,arguments))},throw:function(n){var i=this.s.return;return i===void 0?en.default.reject(n):r(i.apply(this.s,arguments))}},new ki(e)}var dD=g(se(),1);var sD=g(se(),1),cD=g(qx(),1),lD=g(Sx(),1),fD=g(Wx(),1),pD=g(cS(),1),vD=g(es(),1);var Rs=g(se(),1);var uB=g(se(),1);var ts=g(se(),1);function rn(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function wS(e,r){return rn(e.startChunk,r.startChunk)&&rn(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function wr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var rs=g(Ht(),1);var tn=g(we(),1),TS=g(Jt(),1);function Fe(e){"@babel/helpers - typeof";return Fe=typeof tn.default=="function"&&typeof TS.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof tn.default=="function"&&r.constructor===tn.default&&r!==tn.default.prototype?"symbol":typeof r},Fe(e)}var jS=g(MS(),1);function $S(e,r){if(Fe(e)!="object"||!e)return e;var t=e[jS.default];if(t!==void 0){var n=t.call(e,r||"default");if(Fe(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Pi(e){var r=$S(e,"string");return Fe(r)=="symbol"?r:r+""}function LS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,rs.default)(e,Pi(n.key),n)}}function nn(e,r,t){return r&&LS(e.prototype,r),t&&LS(e,t),(0,rs.default)(e,"prototype",{writable:!1}),e}var FS=g(Ht(),1);function Tr(e,r,t){return(r=Pi(r))in e?(0,FS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var DS=g(Br(),1);var _i="Iterator exhausted before seek ended.",an=function(){function e(r){wr(this,e),this.chunker=r,Tr(this,"currentChunkPosition",0),Tr(this,"offsetInChunk",0),this.seekTo(0)}return nn(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,i)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!rn(this.currentChunk,n);){var p=this._readToPreviousChunk(),v=Le(p,2),d=v[0],h=v[1];if(t&&(u=d+u),h===null)throw new RangeError(_i)}else for(;!rn(this.currentChunk,n);){var l=this._readToNextChunk(),c=Le(l,2),s=c[0],f=c[1];if(t&&(u+=s),f===null)throw new RangeError(_i)}var m=this.currentChunkPosition+i;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,DS.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var l=this.currentChunkPosition+this.currentChunk.data.length;if(l<=n){var c=this._readToNextChunk(),s=Le(c,2),f=s[0],p=s[1];if(t&&(u+=f),p===null){if(this.position===n||o)break;throw new RangeError(_i)}}else{var v=i?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,v)),this.offsetInChunk=v,i&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=i?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var h=this._readToPreviousChunk(),m=Le(h,2),y=m[0],q=m[1];if(t&&(u=y+u),q===null){if(o)break;throw new RangeError(_i)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,i=this.chunker.nextChunk();return i!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,i]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function GS(e,r){return ns.apply(this,arguments)}function ns(){return ns=Sr(ts.default.mark(function e(r,t){var n,i,o,u,l,c,s,f,p,v,d,h,m,y,q,b,I,E,S,T,w,C,j=arguments;return ts.default.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:n=j.length>2&&j[2]!==void 0?j[2]:{},i=n.minimalContext,o=i===void 0?!1:i,u=n.minimumQuoteLength,l=u===void 0?0:u,c=n.maxWordLength,s=c===void 0?50:c,f=new an(t()),p=new an(t()),f.seekToChunk(r.startChunk,r.startIndex),v=f.readToChunk(r.endChunk,r.endIndex),d="",h="",m=function(){return d.length+v.length+h.length},m()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),y=Math.floor((l-m())/2),d=f.read(-y,!1,!0)+d,m()<l&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),q=l-m(),h=h+f.read(q,!1,!0),m()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),b=l-m(),d=f.read(-b,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=Ri(f,s,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+Ri(f,s,!1));case 11:return I={type:"TextQuoteSelector",exact:v,prefix:d,suffix:h},E=Ai(I)(t()),k.next=16,E.next();case 16:if(S=k.sent,!(!S.done&&wS(S.value,r))){k.next=21;break}return k.next=20,E.next();case 20:S=k.sent;case 21:if(!S.done){k.next=23;break}return k.abrupt("return",I);case 23:if(T=S.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),p.seekToChunk(T.startChunk,T.startIndex-d.length),w=BS(f,p,!0),w!==void 0&&!o&&(w=Ri(f,s,!0)+w),f.seekToChunk(r.endChunk,r.endIndex+h.length),p.seekToChunk(T.endChunk,T.endIndex+h.length),C=BS(f,p,!1),C!==void 0&&!o&&(C=C+Ri(f,s,!1)),!o){k.next=44;break}if(!(w!==void 0&&(C===void 0||w.length<=C.length))){k.next=37;break}d=w+d,k.next=42;break;case 37:if(C===void 0){k.next=41;break}h=h+C,k.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:k.next=46;break;case 44:w!==void 0&&(d=w+d),C!==void 0&&(h=h+C);case 46:k.next=11;break;case 48:case"end":return k.stop()}},e)})),ns.apply(this,arguments)}function BS(e,r,t){for(var n="";;){var i=void 0;try{i=e.read(t?-1:1)}catch{return}n=t?i+n:n+i;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(i!==o)return n}}function Ri(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var i=void 0;try{i=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(bD(i)){e.seekBy(t?1:-1);break}n=t?i+n:n+i}return n}function bD(e){return/^\s+$/.test(e)}var kw=g(Br(),1),Pw=g(Nn(),1),_w=g(Jn(),1),Rw=g(Qn(),1),Aw=g(Xn(),1);var os=g(se(),1),Nw=g(fw(),1),Mw=g(Cw(),1);function Ew(e,r){var t;if(typeof _w.default>"u"||(0,Rw.default)(e)==null){if(Array.isArray(e)||(t=rB(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(s){throw s},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,l;return{s:function(){t=(0,Aw.default)(e)},n:function(){var s=t.next();return o=s.done,s},e:function(s){u=!0,l=s},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw l}}}}function rB(e,r){var t;if(e){if(typeof e=="string")return Iw(e,r);var n=(0,kw.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,Pw.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Iw(e,r)}}function Iw(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Ai(e){return function(){var r=Oe(os.default.mark(function n(i){var o,u,l,c,s,f,p,v,d,h,m,y,q,b,I,E,S,T,w,C,j,be,k,ee,qe,J,L;return os.default.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:o=e.exact,u=e.prefix||"",l=e.suffix||"",c=u+o+l,s=[],f=!0;case 6:p=i.currentChunk,v=p.data,d=[],h=Ew(s),O.prev=10,h.s();case 12:if((m=h.n()).done){O.next=27;break}if(y=m.value,q=y.charactersMatched,y.endChunk===void 0&&(b=u.length+o.length-q,b<=v.length&&(y.endChunk=p,y.endIndex=b)),y.startChunk===void 0&&(I=u.length-q,(I<v.length||y.endChunk!==void 0)&&(y.startChunk=p,y.startIndex=I)),E=c.length-q,!(E<=v.length)){O.next=24;break}if(!(0,Nw.default)(v).call(v,c.substring(q))){O.next=22;break}return O.next=22,y;case 22:O.next=25;break;case 24:v===c.substring(q,q+v.length)&&(y.charactersMatched+=v.length,d.push(y));case 25:O.next=12;break;case 27:O.next=32;break;case 29:O.prev=29,O.t0=O.catch(10),h.e(O.t0);case 32:return O.prev=32,h.f(),O.finish(32);case 35:if(s=d,!(c.length<=v.length)){O.next=49;break}S=0;case 38:if(!(S<=v.length)){O.next=49;break}if(T=v.indexOf(c,S),T!==-1){O.next=42;break}return O.abrupt("break",49);case 42:if(S=T+1,!(T===0&&c.length===0&&!f)){O.next=45;break}return O.abrupt("continue",38);case 45:return O.next=47,{startChunk:p,startIndex:T+u.length,endChunk:p,endIndex:T+u.length+o.length};case 47:O.next=38;break;case 49:for(w=[],C=Math.max(v.length-c.length+1,0),j=function(We){var Gs=v[We];w=(0,Mw.default)(w).call(w,function(VC){return Gs===c[We-VC]}),Gs===c[0]&&w.push(We)},be=C;be<v.length;be++)j(be);k=Ew(w);try{for(k.s();!(ee=k.n()).done;)qe=ee.value,J=v.length-qe,L={charactersMatched:J},J>=u.length+o.length&&(L.endChunk=p,L.endIndex=qe+u.length+o.length),(J>u.length||L.endChunk!==void 0)&&(L.startChunk=p,L.startIndex=qe+u.length),s.push(L)}catch(Ir){k.e(Ir)}finally{k.f()}f=!1;case 56:if(i.nextChunk()!==null){O.next=6;break}case 57:case"end":return O.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var aB=g(se(),1);var tB=g(Br(),1),nB=g(es(),1);var oB=g(se(),1);var sn=g(Zw(),1);var rT=g(mi(),1),tT=g(Ht(),1);var cs=g(hi(),1),eT=g(Wt(),1);function tr(e,r){var t;return tr=cs.default?(0,eT.default)(t=cs.default).call(t):function(n,i){return n.__proto__=i,n},tr(e,r)}function ls(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,rT.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,tT.default)(e,"prototype",{writable:!1}),r&&tr(e,r)}function nT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function iT(e,r){if(r&&(Fe(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return nT(e)}var aT=g(hi(),1),oT=g(Wt(),1),fs=g(di(),1);function Or(e){var r;return Or=aT.default?(0,oT.default)(r=fs.default).call(r):function(t){return t.__proto__||(0,fs.default)(t)},Or(e)}var _s=g(_O(),1),ZO=g(mi(),1);var KO=g(HO(),1);function VO(e){try{var r;return(0,KO.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var YO=g(Ni(),1),JO=g(Vu(),1),QO=g(Wt(),1);var zO=g(Ni(),1);function Ps(){try{var e=!Boolean.prototype.valueOf.call((0,zO.default)(Boolean,[],function(){}))}catch{}return(Ps=function(){return!!e})()}function XO(e,r,t){if(Ps())return YO.default.apply(null,arguments);var n=[null];(0,JO.default)(n).apply(n,r);var i=new((0,QO.default)(e).apply(e,n));return t&&tr(i,t.prototype),i}function un(e){var r=typeof _s.default=="function"?new _s.default:void 0;return un=function(n){if(n===null||!VO(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,i)}function i(){return XO(n,arguments,Or(this).constructor)}return i.prototype=(0,ZO.default)(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),tr(i,n)},un(e)}function tC(e,r){var t=ce(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i=eC(e.startContainer,e.startOffset),o=Le(i,2),u=o[0],l=o[1];for(n.currentNode=u;l===u.length&&n.nextNode();)u=n.currentNode,l=0;e.setStart(u,l);var c=eC(e.endContainer,e.endOffset),s=Le(c,2),f=s[0],p=s[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function eC(e,r){var t;if(rC(e))return[e,r];var n;if(PG(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(rC(n))return[n,0];var i=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=i.createTreeWalker(i,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function rC(e){return e.nodeType===Node.TEXT_NODE}function PG(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function iC(e){var r=_G();return function(){var n=Or(e),i;if(r){var o=Or(this).constructor;i=(0,sn.default)(n,arguments,o)}else i=n.apply(this,arguments);return iT(this,i)}}function _G(){if(typeof Reflect>"u"||!sn.default||sn.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,sn.default)(Boolean,[],function(){})),!0}catch{return!1}}var Bi=function(e){ls(t,e);var r=iC(t);function t(n){return wr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(un(TypeError)),RG=function(e){ls(t,e);var r=iC(t);function t(n){return wr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(un(TypeError)),Cr=function(){function e(r){var t=this;if(wr(this,e),Tr(this,"scope",void 0),Tr(this,"iter",void 0),this.scope=rr(r),this.iter=ce(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!nC(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Bi}}return nn(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!nC(t))throw new Bi;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new RG;var n=t===this.scope.startContainer?this.scope.startOffset:0,i=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:i,data:t.data.substring(n,i),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=tC(t,this.scope),i=this.nodeToChunk(n.startContainer),o=n.startOffset-i.startOffset,u=this.nodeToChunk(n.endContainer),l=n.endOffset-u.startOffset;return{startChunk:i,startIndex:o,endChunk:u,endIndex:l}}},{key:"chunkRangeToRange",value:function(t){var n=ce(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function nC(e){return e.nodeType===Node.TEXT_NODE}function aC(e,r){return As.apply(this,arguments)}function As(){return As=Sr(Rs.default.mark(function e(r,t){var n,i,o,u=arguments;return Rs.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},i=rr(t??ce(r)),o=new Cr(i),c.next=5,GS(o.rangeToChunkRange(r),function(){return new Cr(i)},n);case 5:return c.abrupt("return",c.sent);case 6:case"end":return c.stop()}},e)})),As.apply(this,arguments)}var Ns=g(se(),1);function oC(e){var r=Ai(e);return function(){var t=Oe(Ns.default.mark(function i(o){var u,l,c,s,f,p,v,d;return Ns.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new Cr(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof Bi)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:l=!0,c=!1,m.prev=13,f=nt(r(u));case 15:return m.next=17,Ze(f.next());case 17:return p=m.sent,l=p.done,m.next=21,Ze(p.value);case 21:if(v=m.sent,l){m.next=29;break}return d=v,m.next=26,u.chunkRangeToRange(d);case 26:l=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),c=!0,s=m.t1;case 35:if(m.prev=35,m.prev=36,!(!l&&f.return!=null)){m.next=40;break}return m.next=40,Ze(f.return());case 40:if(m.prev=40,!c){m.next=43;break}throw s;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},i,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(i){return t.apply(this,arguments)}return n}()}var AG=g(se(),1);var NG=g(se(),1);var UG=g(qC(),1),WG=g(Br(),1),HG=g(Nn(),1),KG=g(Jn(),1),VG=g(Qn(),1),zG=g(Xn(),1);async function xC(e,r){let t=await aC(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function Gi(e,r){let t=oC({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var it="fb-highlight",SC="fb-highlight-active";var cn=null;function TC(e){cn=e}function Ui(e,r){let t=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let n=wC(e,r);t.push(n)}else{let n=JG(e);for(let i=0;i<n.length;i++){let o=n[i],u=document.createRange();o===e.startContainer?(u.setStart(o,e.startOffset),u.setEnd(o,o.textContent.length)):o===e.endContainer?(u.setStart(o,0),u.setEnd(o,e.endOffset)):u.selectNodeContents(o),u.collapsed||t.push(wC(u,r))}}return t}function wC(e,r){let t=e.commonAncestorContainer;for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;let n=t,i=!1,o=null;for(;n;){if(n.tagName==="foreignObject"){i=!1;break}n.tagName==="text"&&n instanceof SVGElement&&(i=!0),n.tagName==="svg"&&(o=n),n=n.parentElement}if(i&&o)return YG(e,r,o);let u=document.createElement("mark");u.className=it,u.dataset.commentId=r,u.style.backgroundColor="rgba(255, 212, 0, 0.35)",u.style.cursor="pointer",u.style.borderRadius="2px",u.addEventListener("click",()=>{cn&&cn(r)});try{e.surroundContents(u)}catch(l){return console.warn("[feedback-layer] Failed to create highlight:",l),null}return u}function YG(e,r,t){try{let n=e.getClientRects();if(n.length===0)return null;let i="http://www.w3.org/2000/svg",o=t.getScreenCTM();if(!o)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let u=e.commonAncestorContainer;for(;u&&u.nodeType!==Node.ELEMENT_NODE;)u=u.parentNode;let l=u,c=null;for(;l&&l!==t;){if(l.tagName==="text"){c=l.parentElement;break}l=l.parentElement}let s=c||t,f=o;s!==t&&s.getScreenCTM&&(f=s.getScreenCTM());let p=document.createElementNS(i,"g");p.setAttribute("class",it),p.setAttribute("data-comment-id",r),p.style.cursor="pointer";for(let y=0;y<n.length;y++){let q=n[y],b=document.createElementNS(i,"rect"),I=t.createSVGPoint();I.x=q.left,I.y=q.top;let E=I.matrixTransform(f.inverse()),S=q.width/f.a,T=q.height/f.d;b.setAttribute("x",E.x),b.setAttribute("y",E.y),b.setAttribute("width",S),b.setAttribute("height",T),b.setAttribute("fill","#ffd400"),b.setAttribute("fill-opacity","0.35"),b.setAttribute("rx","2"),b.setAttribute("ry","2"),b.style.pointerEvents="none",p.appendChild(b)}s&&s!==t?s.appendChild(p):t.appendChild(p);let v=e.commonAncestorContainer;for(;v&&v.nodeType!==Node.ELEMENT_NODE;)v=v.parentNode;let d=new Set,h=v;for(;h&&h!==t;)h.tagName==="text"&&h instanceof SVGElement&&(d.add(h),h.querySelectorAll("tspan").forEach(q=>d.add(q))),h=h.parentElement;let m=y=>{y.preventDefault(),y.stopPropagation(),cn&&cn(r)};return d.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",m),y.dataset.fbCommentId=r}),p}catch(n){return console.warn("[feedback-layer] Failed to create SVG highlight:",n),null}}function Ms(e){document.querySelectorAll(`.${it}[data-comment-id="${e}"]`).forEach(n=>{let i=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)i.removeChild(n);else{for(;n.firstChild;)i.insertBefore(n.firstChild,n);i.removeChild(n),i.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function OC(){document.querySelectorAll(`.${it}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function Wi(e){document.querySelectorAll(`.${it}`).forEach(r=>{let t=r.dataset.commentId===e,n="rgba(255, 180, 0, 0.55)",i="rgba(255, 212, 0, 0.35)";t?r.classList.add(SC):r.classList.remove(SC),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(u=>{u.setAttribute("fill",t?n:i)}):r.style.backgroundColor=t?n:i})}function CC(e){let r=document.querySelector(`.${it}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function JG(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let i=document.createRange();return i.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,i)<0&&e.compareBoundaryPoints(Range.START_TO_END,i)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function EC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,i)=>{let o=[`**${i+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let l of u)o.push(`  - **[${l.author}]** (reply): ${l.body}`);return o.join(`
`)}).join(`

`)}function IC(e,r){let t=EC(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(i=>!i.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function nr(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var QG=`
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
`,kC=null,PC=null;function _C(e,r){PC=e,kC=r,XG()}function XG(){let e=document.createElement("style");e.textContent=QG,document.head.appendChild(e)}function RC(){let e=kC(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let i=document.createElement("button");i.className="hf-modal-close",i.textContent="\xD7",i.addEventListener("click",()=>r.remove()),n.appendChild(i);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",p=>{p.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let l=document.querySelector(PC.contentSelector||"body").innerHTML,c=IC(l,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${c.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${nr(c)}</textarea>
  `;let s=document.createElement("button");s.className="hf-btn hf-btn-primary",s.textContent="Copy Prompt",s.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c),s.textContent="Copied!"}catch{s.textContent="Copy failed"}setTimeout(()=>s.textContent="Copy Prompt",2e3)}),u.appendChild(s);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function AC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function NC(e,r){return e.length>r?e.slice(0,r)+"...":e}function MC(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var ln=null;function $C(e){ln=document.createElement("div"),ln.className="fb-toast-container",e.appendChild(ln)}function ve(e,r="success"){if(!ln)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let i=document.createElement("button");i.className="fb-toast-dismiss",i.innerHTML="&times;",i.addEventListener("click",()=>jC(t)),t.appendChild(i)}ln.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),r==="success"&&setTimeout(()=>jC(t),4e3)}function jC(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}var ZG=320,FC="feedback-layer-commenter",X=null,Ge=null,Be=null,js=null,DC=null,$s=null,Ls=null,Fs=null,Ds=null,Bs=!1,BC=[],GC=new Set;function at(){return localStorage.getItem(FC)||""}function UC({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:i}){DC=e,$s=r,Ls=t,Fs=n,Ds=i,nU(),X=document.createElement("div"),X.className="fb-sidebar fb-sidebar-collapsed",X.innerHTML=`
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
               value="${nr(at())}">
      </div>
      <div class="fb-filter-section">
        <label class="fb-filter-toggle">
          <input type="checkbox" class="fb-show-resolved-cb">
          <span>Show closed</span>
        </label>
      </div>
      <div class="fb-comment-list"></div>
      <div class="fb-form-section" style="display:none"></div>
    </div>
  `;let o=document.createElement("button");o.className="fb-sidebar-tab",o.textContent="Feedback",o.addEventListener("click",()=>fn()),document.body.appendChild(o),document.body.appendChild(X),$C(X),Ge=X.querySelector(".fb-comment-list"),Be=X.querySelector(".fb-form-section");let u=X.querySelector(".fb-name-input");u.addEventListener("input",()=>{localStorage.setItem(FC,u.value.trim())}),X.querySelector(".fb-ai-btn").addEventListener("click",()=>RC()),X.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>eU());let s=X.querySelector(".fb-show-resolved-cb");s.addEventListener("change",()=>{Bs=s.checked,ir(BC,GC)})}function fn(){X.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden")}function eU(){X.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden")}function WC(e){if(fn(),!at()){let n=X.querySelector(".fb-name-input");n.style.outline="2px solid #ef4444",setTimeout(()=>n.style.outline="",2e3)}js=e,Be.style.display="",Be.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${nr(NC(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `;let r=Be.querySelector(".fb-form-textarea");r.focus();let t=()=>{if(!at()){let i=X.querySelector(".fb-name-input");i.focus(),i.style.outline="2px solid #ef4444",setTimeout(()=>i.style.outline="",2e3);return}let n=r.value.trim();n&&(DC({comment:n,commenter:at()}),Be.style.display="none",js=null)};Be.querySelector(".fb-submit-btn").addEventListener("click",t),r.addEventListener("keydown",n=>{n.key==="Enter"&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),t())}),Be.querySelector(".fb-cancel-btn").addEventListener("click",()=>{Be.style.display="none",js=null}),Be.scrollIntoView({behavior:"smooth",block:"nearest"})}function ir(e,r=new Set,t=new Map){BC=e,GC=r,Ge.innerHTML="";let{topLevel:n,repliesByParent:i}=AC(e),o=n.slice().sort((s,f)=>{let p=t.get(s.id),v=t.get(f.id);return!p||!v?0:p.compareBoundaryPoints(Range.START_TO_START,v)}),u=o.filter(s=>{let f=r.has(s.id),p=s.status==="closed";return f||p&&Bs}),l=Bs?u:u.filter(s=>s.status!=="closed");if(o.length===0){Ge.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let c=o.filter(s=>!r.has(s.id)&&s.status!=="closed").length;if(l.length===0){c>0?Ge.innerHTML=`<div class="fb-empty">
        ${u.length} comment(s) resolved.
        ${c>0?`<br>${c} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:Ge.innerHTML=`<div class="fb-empty">All ${o.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let s of l){let f=document.createElement("div");f.className="fb-thread",f.appendChild(LC(s,!1));let p=i.get(s.id)||[];for(let d of p)f.appendChild(LC(d,!0));let v=document.createElement("button");v.className="fb-reply-btn",v.textContent="Reply",v.addEventListener("click",d=>{d.stopPropagation(),rU(s.id,f,v)}),f.appendChild(v),Ge.appendChild(f)}}function LC(e,r){let t=e.status==="closed",n=document.createElement("div");return n.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":""),n.dataset.id=e.id,n.innerHTML=`
    <div class="fb-cmt-body">${nr(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${nr(e.author)}</span>
      <span class="fb-cmt-time">${MC(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
  `,r||(n.addEventListener("click",i=>{i.target.closest(".fb-cmt-delete")||i.target.closest(".fb-cmt-resolve")||i.target.closest(".fb-cmt-edit")||(Wi(e.id),CC(e.id),Ge.querySelectorAll(".fb-cmt-card").forEach(o=>o.classList.remove("fb-cmt-active")),n.classList.add("fb-cmt-active"))}),n.querySelector(".fb-cmt-resolve").addEventListener("click",i=>{i.stopPropagation(),Ls&&Ls(e.id,!t)})),n.querySelector(".fb-cmt-edit").addEventListener("click",i=>{i.stopPropagation(),tU(e,n)}),n.querySelector(".fb-cmt-delete").addEventListener("click",i=>{i.stopPropagation(),$s&&$s(e.id)}),n}function rU(e,r,t){fn();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let i=document.createElement("div");i.className="fb-reply-form",i.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!at()){let c=X.querySelector(".fb-name-input");c.focus(),c.style.outline="2px solid #ef4444",setTimeout(()=>c.style.outline="",2e3);return}let l=i.querySelector("textarea").value.trim();l&&(Fs&&Fs({parent_id:e,comment:l,commenter:at()}),i.remove(),t.style.display="")};i.querySelector(".fb-reply-submit").addEventListener("click",o);let u=i.querySelector("textarea");u.addEventListener("keydown",l=>{l.key==="Enter"&&(l.metaKey||l.ctrlKey)&&(l.preventDefault(),o())}),i.querySelector(".fb-reply-cancel").addEventListener("click",()=>{i.remove(),t.style.display=""}),r.insertBefore(i,t),u.focus()}function tU(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${nr(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let i=t.querySelector("textarea");i.focus(),i.setSelectionRange(i.value.length,i.value.length);let o=()=>{let u=i.value.trim();u&&Ds&&Ds(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),i.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function HC(e){let r=Ge.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(Ge.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function nU(){let e=document.createElement("style");e.textContent=`
    .fb-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: ${ZG}px;
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
  `,document.head.appendChild(e)}var ot=null,Hi=null,Ki=null,Y=[],Er=null,Ee=null,ge=new Set,Ue=new Map;function iU(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null};Ws(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{ot=document.querySelector(r.contentSelector)||document.body,Hi=r.documentUri||window.location.origin+window.location.pathname,Ki=r.documentId||null,UC({onSubmit:cU,onDelete:vU,onResolve:lU,onReply:fU,onEdit:pU}),TC(i=>{fn(),HC(i),Wi(i)}),uU(),await t(),aU(),_C(r,()=>Y)}catch(i){console.error("[feedback-layer] Boot failed:",i)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function aU(){try{Y=await Hs(Hi,Ki),ge=await oU(Y),ir(Y,ge,Ue)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),ve("Failed to load comments","error")}}async function oU(e){OC();let r=new Set;Ue.clear();for(let t of e)if(!t.parent)try{let n=await Gi({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ot);n&&t.status!=="closed"?(Ui(n,t.id),r.add(t.id),Ue.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),Ue.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function uU(){document.addEventListener("mouseup",KC),document.addEventListener("keyup",KC)}function KC(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){pn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){pn();return}if(!ot.contains(r.commonAncestorContainer)){pn();return}sU(r)},10)}function sU(e){pn();let r=e.getBoundingClientRect();Ee=document.createElement("button"),Ee.className="fb-annotate-tooltip",Ee.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',Ee.style.top=window.scrollY+r.top-36+"px",Ee.style.left=window.scrollX+r.left+r.width/2-40+"px",Ee.addEventListener("mousedown",async t=>{t.preventDefault(),t.stopPropagation();let n=window.getSelection();if(!n||n.isCollapsed)return;let i=n.getRangeAt(0);try{Er=await xC(i,ot),WC(Er.exact)}catch(o){console.error("[feedback-layer] Failed to create selector:",o)}pn()}),document.body.appendChild(Ee)}function pn(){Ee&&(Ee.remove(),Ee=null)}async function cU({comment:e,commenter:r}){if(Er){try{let t=await Vi({uri:Hi,document:Ki,quote:Er.exact,prefix:Er.prefix,suffix:Er.suffix,body:e,author:r});Y.push(t);let n=await Gi({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ot);n&&(Ui(n,t.id),ge.add(t.id)),ir(Y,ge,Ue),ve("Comment saved","success"),window.getSelection().removeAllRanges()}catch(t){console.error("[feedback-layer] Failed to create comment:",t),ve("Failed to save comment","error")}Er=null}}async function lU(e,r){try{let n=await Vs(e,r?"closed":"open"),i=Y.findIndex(o=>o.id===e);if(i!==-1&&(Y[i]=n),r)Ms(e);else{let o=n,u=await Gi({exact:o.quote,prefix:o.prefix,suffix:o.suffix},ot);u?(Ui(u,o.id),ge.add(o.id)):ge.delete(o.id)}ir(Y,ge,Ue),ve(r?"Comment resolved":"Comment reopened","success")}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),ve("Failed to update comment","error")}}async function fU({parent_id:e,comment:r,commenter:t}){try{let n=await Vi({uri:Hi,document:Ki,body:r,author:t,parent:e});Y.push(n),ir(Y,ge,Ue),ve("Reply saved","success")}catch(n){console.error("[feedback-layer] Failed to create reply:",n),ve("Failed to save reply","error")}}async function pU(e,r){try{let t=await Ks(e,{body:r}),n=Y.findIndex(i=>i.id===e);n!==-1&&(Y[n]=t),ir(Y,ge,Ue),ve("Comment updated","success")}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),ve("Failed to update comment","error")}}async function vU(e){try{await zs(e),Ms(e),ge.delete(e),Y=Y.filter(r=>r.id!==e&&r.parent!==e),ir(Y,ge,Ue),ve("Comment deleted","success")}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),ve("Failed to delete comment","error")}}try{iU()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
