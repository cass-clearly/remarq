var FeedbackLayer=(()=>{var ZC=Object.create;var Ks=Object.defineProperty;var eE=Object.getOwnPropertyDescriptor;var rE=Object.getOwnPropertyNames;var tE=Object.getPrototypeOf,nE=Object.prototype.hasOwnProperty;var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var iE=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of rE(r))!nE.call(e,i)&&i!==t&&Ks(e,i,{get:()=>r[i],enumerable:!(n=eE(r,i))||n.enumerable});return e};var g=(e,r,t)=>(t=e!=null?ZC(tE(e)):{},iE(r||!e||!e.__esModule?Ks(t,"default",{value:e,enumerable:!0}):t,e));var P=a((wU,Xs)=>{"use strict";Xs.exports=function(e){try{return!!e()}catch{return!0}}});var Rr=a((TU,Zs)=>{"use strict";var aE=P();Zs.exports=!aE(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var A=a((OU,tc)=>{"use strict";var ec=Rr(),rc=Function.prototype,Qi=rc.call,oE=ec&&rc.bind.bind(Qi,Qi);tc.exports=ec?oE:function(e){return function(){return Qi.apply(e,arguments)}}});var B=a((CU,nc)=>{"use strict";var uE=A();nc.exports=uE({}.isPrototypeOf)});var _=a((Xi,ic)=>{"use strict";var lt=function(e){return e&&e.Math===Math&&e};ic.exports=lt(typeof globalThis=="object"&&globalThis)||lt(typeof window=="object"&&window)||lt(typeof self=="object"&&self)||lt(typeof global=="object"&&global)||lt(typeof Xi=="object"&&Xi)||function(){return this}()||Function("return this")()});var Ar=a((EU,sc)=>{"use strict";var sE=Rr(),uc=Function.prototype,ac=uc.apply,oc=uc.call;sc.exports=typeof Reflect=="object"&&Reflect.apply||(sE?oc.bind(ac):function(){return oc.apply(ac,arguments)})});var Se=a((IU,lc)=>{"use strict";var cc=A(),cE=cc({}.toString),lE=cc("".slice);lc.exports=function(e){return lE(cE(e),8,-1)}});var ft=a((kU,fc)=>{"use strict";var fE=Se(),pE=A();fc.exports=function(e){if(fE(e)==="Function")return pE(e)}});var N=a((PU,pc)=>{"use strict";var Zi=typeof document=="object"&&document.all;pc.exports=typeof Zi>"u"&&Zi!==void 0?function(e){return typeof e=="function"||e===Zi}:function(e){return typeof e=="function"}});var G=a((_U,vc)=>{"use strict";var vE=P();vc.exports=!vE(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var D=a((RU,dc)=>{"use strict";var dE=Rr(),yn=Function.prototype.call;dc.exports=dE?yn.bind(yn):function(){return yn.apply(yn,arguments)}});var ea=a(yc=>{"use strict";var mc={}.propertyIsEnumerable,hc=Object.getOwnPropertyDescriptor,mE=hc&&!mc.call({1:2},1);yc.f=mE?function(r){var t=hc(this,r);return!!t&&t.enumerable}:mc});var Ke=a((NU,gc)=>{"use strict";gc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var gn=a((MU,bc)=>{"use strict";var hE=A(),yE=P(),gE=Se(),ra=Object,bE=hE("".split);bc.exports=yE(function(){return!ra("z").propertyIsEnumerable(0)})?function(e){return gE(e)==="String"?bE(e,""):ra(e)}:ra});var or=a((jU,qc)=>{"use strict";qc.exports=function(e){return e==null}});var ur=a(($U,xc)=>{"use strict";var qE=or(),xE=TypeError;xc.exports=function(e){if(qE(e))throw new xE("Can't call method on "+e);return e}});var ke=a((LU,Sc)=>{"use strict";var SE=gn(),wE=ur();Sc.exports=function(e){return SE(wE(e))}});var $=a((FU,wc)=>{"use strict";var TE=N();wc.exports=function(e){return typeof e=="object"?e!==null:TE(e)}});var z=a((DU,Tc)=>{"use strict";Tc.exports={}});var U=a((BU,Cc)=>{"use strict";var ta=z(),na=_(),OE=N(),Oc=function(e){return OE(e)?e:void 0};Cc.exports=function(e,r){return arguments.length<2?Oc(ta[e])||Oc(na[e]):ta[e]&&ta[e][r]||na[e]&&na[e][r]}});var Nr=a((GU,kc)=>{"use strict";var CE=_(),Ec=CE.navigator,Ic=Ec&&Ec.userAgent;kc.exports=Ic?String(Ic):""});var Mr=a((UU,Mc)=>{"use strict";var Nc=_(),ia=Nr(),Pc=Nc.process,_c=Nc.Deno,Rc=Pc&&Pc.versions||_c&&_c.version,Ac=Rc&&Rc.v8,me,bn;Ac&&(me=Ac.split("."),bn=me[0]>0&&me[0]<4?1:+(me[0]+me[1]));!bn&&ia&&(me=ia.match(/Edge\/(\d+)/),(!me||me[1]>=74)&&(me=ia.match(/Chrome\/(\d+)/),me&&(bn=+me[1])));Mc.exports=bn});var sr=a((WU,$c)=>{"use strict";var jc=Mr(),EE=P(),IE=_(),kE=IE.String;$c.exports=!!Object.getOwnPropertySymbols&&!EE(function(){var e=Symbol("symbol detection");return!kE(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&jc&&jc<41})});var aa=a((HU,Lc)=>{"use strict";var PE=sr();Lc.exports=PE&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var jr=a((KU,Fc)=>{"use strict";var _E=U(),RE=N(),AE=B(),NE=aa(),ME=Object;Fc.exports=NE?function(e){return typeof e=="symbol"}:function(e){var r=_E("Symbol");return RE(r)&&AE(r.prototype,ME(e))}});var ze=a((zU,Dc)=>{"use strict";var jE=String;Dc.exports=function(e){try{return jE(e)}catch{return"Object"}}});var F=a((VU,Bc)=>{"use strict";var $E=N(),LE=ze(),FE=TypeError;Bc.exports=function(e){if($E(e))return e;throw new FE(LE(e)+" is not a function")}});var qn=a((YU,Gc)=>{"use strict";var DE=F(),BE=or();Gc.exports=function(e,r){var t=e[r];return BE(t)?void 0:DE(t)}});var Wc=a((JU,Uc)=>{"use strict";var oa=D(),ua=N(),sa=$(),GE=TypeError;Uc.exports=function(e,r){var t,n;if(r==="string"&&ua(t=e.toString)&&!sa(n=oa(t,e))||ua(t=e.valueOf)&&!sa(n=oa(t,e))||r!=="string"&&ua(t=e.toString)&&!sa(n=oa(t,e)))return n;throw new GE("Can't convert object to primitive value")}});var Z=a((QU,Hc)=>{"use strict";Hc.exports=!0});var Vc=a((XU,zc)=>{"use strict";var Kc=_(),UE=Object.defineProperty;zc.exports=function(e,r){try{UE(Kc,e,{value:r,configurable:!0,writable:!0})}catch{Kc[e]=r}return r}});var pt=a((ZU,Qc)=>{"use strict";var WE=Z(),HE=_(),KE=Vc(),Yc="__core-js_shared__",Jc=Qc.exports=HE[Yc]||KE(Yc,{});(Jc.versions||(Jc.versions=[])).push({version:"3.48.0",mode:WE?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var cr=a((e5,Zc)=>{"use strict";var Xc=pt();Zc.exports=function(e,r){return Xc[e]||(Xc[e]=r||{})}});var re=a((r5,el)=>{"use strict";var zE=ur(),VE=Object;el.exports=function(e){return VE(zE(e))}});var W=a((t5,rl)=>{"use strict";var YE=A(),JE=re(),QE=YE({}.hasOwnProperty);rl.exports=Object.hasOwn||function(r,t){return QE(JE(r),t)}});var $r=a((n5,tl)=>{"use strict";var XE=A(),ZE=0,e0=Math.random(),r0=XE(1.1.toString);tl.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+r0(++ZE+e0,36)}});var R=a((i5,il)=>{"use strict";var t0=_(),n0=cr(),nl=W(),i0=$r(),a0=sr(),o0=aa(),Lr=t0.Symbol,ca=n0("wks"),u0=o0?Lr.for||Lr:Lr&&Lr.withoutSetter||i0;il.exports=function(e){return nl(ca,e)||(ca[e]=a0&&nl(Lr,e)?Lr[e]:u0("Symbol."+e)),ca[e]}});var sl=a((a5,ul)=>{"use strict";var s0=D(),al=$(),ol=jr(),c0=qn(),l0=Wc(),f0=R(),p0=TypeError,v0=f0("toPrimitive");ul.exports=function(e,r){if(!al(e)||ol(e))return e;var t=c0(e,v0),n;if(t){if(r===void 0&&(r="default"),n=s0(t,e,r),!al(n)||ol(n))return n;throw new p0("Can't convert object to primitive value")}return r===void 0&&(r="number"),l0(e,r)}});var xn=a((o5,cl)=>{"use strict";var d0=sl(),m0=jr();cl.exports=function(e){var r=d0(e,"string");return m0(r)?r:r+""}});var Sn=a((u5,fl)=>{"use strict";var h0=_(),ll=$(),la=h0.document,y0=ll(la)&&ll(la.createElement);fl.exports=function(e){return y0?la.createElement(e):{}}});var fa=a((s5,pl)=>{"use strict";var g0=G(),b0=P(),q0=Sn();pl.exports=!g0&&!b0(function(){return Object.defineProperty(q0("div"),"a",{get:function(){return 7}}).a!==7})});var vt=a(dl=>{"use strict";var x0=G(),S0=D(),w0=ea(),T0=Ke(),O0=ke(),C0=xn(),E0=W(),I0=fa(),vl=Object.getOwnPropertyDescriptor;dl.f=x0?vl:function(r,t){if(r=O0(r),t=C0(t),I0)try{return vl(r,t)}catch{}if(E0(r,t))return T0(!S0(w0.f,r,t),r[t])}});var pa=a((l5,ml)=>{"use strict";var k0=P(),P0=N(),_0=/#|\.prototype\./,dt=function(e,r){var t=A0[R0(e)];return t===M0?!0:t===N0?!1:P0(r)?k0(r):!!r},R0=dt.normalize=function(e){return String(e).replace(_0,".").toLowerCase()},A0=dt.data={},N0=dt.NATIVE="N",M0=dt.POLYFILL="P";ml.exports=dt});var V=a((f5,yl)=>{"use strict";var hl=ft(),j0=F(),$0=Rr(),L0=hl(hl.bind);yl.exports=function(e,r){return j0(e),r===void 0?e:$0?L0(e,r):function(){return e.apply(r,arguments)}}});var va=a((p5,gl)=>{"use strict";var F0=G(),D0=P();gl.exports=F0&&D0(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var Q=a((v5,bl)=>{"use strict";var B0=$(),G0=String,U0=TypeError;bl.exports=function(e){if(B0(e))return e;throw new U0(G0(e)+" is not an object")}});var te=a(xl=>{"use strict";var W0=G(),H0=fa(),K0=va(),wn=Q(),ql=xn(),z0=TypeError,da=Object.defineProperty,V0=Object.getOwnPropertyDescriptor,ma="enumerable",ha="configurable",ya="writable";xl.f=W0?K0?function(r,t,n){if(wn(r),t=ql(t),wn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&ya in n&&!n[ya]){var i=V0(r,t);i&&i[ya]&&(r[t]=n.value,n={configurable:ha in n?n[ha]:i[ha],enumerable:ma in n?n[ma]:i[ma],writable:!1})}return da(r,t,n)}:da:function(r,t,n){if(wn(r),t=ql(t),wn(n),H0)try{return da(r,t,n)}catch{}if("get"in n||"set"in n)throw new z0("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var we=a((m5,Sl)=>{"use strict";var Y0=G(),J0=te(),Q0=Ke();Sl.exports=Y0?function(e,r,t){return J0.f(e,r,Q0(1,t))}:function(e,r,t){return e[r]=t,e}});var x=a((h5,Tl)=>{"use strict";var mt=_(),X0=Ar(),Z0=ft(),eI=N(),rI=vt().f,tI=pa(),Fr=z(),nI=V(),Dr=we(),wl=W();pt();var iI=function(e){var r=function(t,n,i){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return X0(e,this,arguments)};return r.prototype=e.prototype,r};Tl.exports=function(e,r){var t=e.target,n=e.global,i=e.stat,o=e.proto,u=n?mt:i?mt[t]:mt[t]&&mt[t].prototype,l=n?Fr:Fr[t]||Dr(Fr,t,{})[t],c=l.prototype,s,f,p,v,d,h,m,y,q;for(v in r)s=tI(n?v:t+(i?".":"#")+v,e.forced),f=!s&&u&&wl(u,v),h=l[v],f&&(e.dontCallGetSet?(q=rI(u,v),m=q&&q.value):m=u[v]),d=f&&m?m:r[v],!(!s&&!o&&typeof h==typeof d)&&(e.bind&&f?y=nI(d,mt):e.wrap&&f?y=iI(d):o&&eI(d)?y=Z0(d):y=d,(e.sham||d&&d.sham||h&&h.sham)&&Dr(y,"sham",!0),Dr(l,v,y),o&&(p=t+"Prototype",wl(Fr,p)||Dr(Fr,p,{}),Dr(Fr[p],v,d),e.real&&c&&(s||!c[v])&&Dr(c,v,d)))}});var Pe=a((y5,Ol)=>{"use strict";var aI=Se();Ol.exports=Array.isArray||function(r){return aI(r)==="Array"}});var Tn=a((g5,El)=>{"use strict";var oI=R(),uI=oI("toStringTag"),Cl={};Cl[uI]="z";El.exports=String(Cl)==="[object z]"});var ht=a((b5,Il)=>{"use strict";var sI=Tn(),cI=N(),On=Se(),lI=R(),fI=lI("toStringTag"),pI=Object,vI=On(function(){return arguments}())==="Arguments",dI=function(e,r){try{return e[r]}catch{}};Il.exports=sI?On:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=dI(r=pI(e),fI))=="string"?t:vI?On(r):(n=On(r))==="Object"&&cI(r.callee)?"Arguments":n}});var ba=a((q5,kl)=>{"use strict";var mI=A(),hI=N(),ga=pt(),yI=mI(Function.toString);hI(ga.inspectSource)||(ga.inspectSource=function(e){return yI(e)});kl.exports=ga.inspectSource});var gt=a((x5,Nl)=>{"use strict";var gI=A(),bI=P(),Pl=N(),qI=ht(),xI=U(),SI=ba(),_l=function(){},Rl=xI("Reflect","construct"),qa=/^\s*(?:class|function)\b/,wI=gI(qa.exec),TI=!qa.test(_l),yt=function(r){if(!Pl(r))return!1;try{return Rl(_l,[],r),!0}catch{return!1}},Al=function(r){if(!Pl(r))return!1;switch(qI(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return TI||!!wI(qa,SI(r))}catch{return!0}};Al.sham=!0;Nl.exports=!Rl||bI(function(){var e;return yt(yt.call)||!yt(Object)||!yt(function(){e=!0})||e})?Al:yt});var jl=a((S5,Ml)=>{"use strict";var OI=Math.ceil,CI=Math.floor;Ml.exports=Math.trunc||function(r){var t=+r;return(t>0?CI:OI)(t)}});var Cn=a((w5,$l)=>{"use strict";var EI=jl();$l.exports=function(e){var r=+e;return r!==r||r===0?0:EI(r)}});var xa=a((T5,Ll)=>{"use strict";var II=Cn(),kI=Math.max,PI=Math.min;Ll.exports=function(e,r){var t=II(e);return t<0?kI(t+r,0):PI(t,r)}});var Sa=a((O5,Fl)=>{"use strict";var _I=Cn(),RI=Math.min;Fl.exports=function(e){var r=_I(e);return r>0?RI(r,9007199254740991):0}});var fe=a((C5,Dl)=>{"use strict";var AI=Sa();Dl.exports=function(e){return AI(e.length)}});var Br=a((E5,Bl)=>{"use strict";var NI=G(),MI=te(),jI=Ke();Bl.exports=function(e,r,t){NI?MI.f(e,r,jI(0,t)):e[r]=t}});var Gr=a((I5,Gl)=>{"use strict";var $I=G(),LI=Pe(),FI=TypeError,DI=Object.getOwnPropertyDescriptor,BI=$I&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();Gl.exports=BI?function(e,r){if(LI(e)&&!DI(e,"length").writable)throw new FI("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var bt=a((k5,Ul)=>{"use strict";var GI=P(),UI=R(),WI=Mr(),HI=UI("species");Ul.exports=function(e){return WI>=51||!GI(function(){var r=[],t=r.constructor={};return t[HI]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var lr=a((P5,Wl)=>{"use strict";var KI=A();Wl.exports=KI([].slice)});var zl=a(()=>{"use strict";var zI=x(),Hl=Pe(),VI=gt(),YI=$(),Kl=xa(),JI=fe(),QI=ke(),XI=Br(),ZI=Gr(),ek=R(),rk=bt(),tk=lr(),nk=rk("slice"),ik=ek("species"),wa=Array,ak=Math.max;zI({target:"Array",proto:!0,forced:!nk},{slice:function(r,t){var n=QI(this),i=JI(n),o=Kl(r,i),u=Kl(t===void 0?i:t,i),l,c,s;if(Hl(n)&&(l=n.constructor,VI(l)&&(l===wa||Hl(l.prototype))?l=void 0:YI(l)&&(l=l[ik],l===null&&(l=void 0)),l===wa||l===void 0))return tk(n,o,u);for(c=new(l===void 0?wa:l)(ak(u-o,0)),s=0;o<u;o++,s++)o in n&&XI(c,s,n[o]);return ZI(c,s),c}})});var oe=a((A5,Vl)=>{"use strict";var ok=_(),uk=z();Vl.exports=function(e,r){var t=uk[e+"Prototype"],n=t&&t[r];if(n)return n;var i=ok[e],o=i&&i.prototype;return o&&o[r]}});var Jl=a((N5,Yl)=>{"use strict";zl();var sk=oe();Yl.exports=sk("Array","slice")});var Xl=a((M5,Ql)=>{"use strict";var ck=B(),lk=Jl(),Ta=Array.prototype;Ql.exports=function(e){var r=e.slice;return e===Ta||ck(Ta,e)&&r===Ta.slice?lk:r}});var ef=a((j5,Zl)=>{"use strict";var fk=Xl();Zl.exports=fk});var tf=a(($5,rf)=>{"use strict";var pk=ef();rf.exports=pk});var af=a((L5,nf)=>{"use strict";var vk=tf();nf.exports=vk});var Oa=a((F5,of)=>{"use strict";of.exports=af()});var Ur=a((D5,uf)=>{uf.exports=Oa()});var Ve=a((B5,sf)=>{"use strict";var dk=ht(),mk=String;sf.exports=function(e){if(dk(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return mk(e)}});var pf=a((G5,ff)=>{"use strict";var Ca=A(),hk=Cn(),yk=Ve(),gk=ur(),bk=Ca("".charAt),cf=Ca("".charCodeAt),qk=Ca("".slice),lf=function(e){return function(r,t){var n=yk(gk(r)),i=hk(t),o=n.length,u,l;return i<0||i>=o?e?"":void 0:(u=cf(n,i),u<55296||u>56319||i+1===o||(l=cf(n,i+1))<56320||l>57343?e?bk(n,i):u:e?qk(n,i,i+2):(u-55296<<10)+(l-56320)+65536)}};ff.exports={codeAt:lf(!1),charAt:lf(!0)}});var mf=a((U5,df)=>{"use strict";var xk=_(),Sk=N(),vf=xk.WeakMap;df.exports=Sk(vf)&&/native code/.test(String(vf))});var qt=a((W5,yf)=>{"use strict";var wk=cr(),Tk=$r(),hf=wk("keys");yf.exports=function(e){return hf[e]||(hf[e]=Tk(e))}});var Wr=a((H5,gf)=>{"use strict";gf.exports={}});var Ye=a((K5,xf)=>{"use strict";var Ok=mf(),qf=_(),Ck=$(),Ek=we(),Ea=W(),Ia=pt(),Ik=qt(),kk=Wr(),bf="Object already initialized",ka=qf.TypeError,Pk=qf.WeakMap,En,xt,In,_k=function(e){return In(e)?xt(e):En(e,{})},Rk=function(e){return function(r){var t;if(!Ck(r)||(t=xt(r)).type!==e)throw new ka("Incompatible receiver, "+e+" required");return t}};Ok||Ia.state?(he=Ia.state||(Ia.state=new Pk),he.get=he.get,he.has=he.has,he.set=he.set,En=function(e,r){if(he.has(e))throw new ka(bf);return r.facade=e,he.set(e,r),r},xt=function(e){return he.get(e)||{}},In=function(e){return he.has(e)}):(fr=Ik("state"),kk[fr]=!0,En=function(e,r){if(Ea(e,fr))throw new ka(bf);return r.facade=e,Ek(e,fr,r),r},xt=function(e){return Ea(e,fr)?e[fr]:{}},In=function(e){return Ea(e,fr)});var he,fr;xf.exports={set:En,get:xt,has:In,enforce:_k,getterFor:Rk}});var Tf=a((z5,wf)=>{"use strict";var Pa=G(),Ak=W(),Sf=Function.prototype,Nk=Pa&&Object.getOwnPropertyDescriptor,_a=Ak(Sf,"name"),Mk=_a&&function(){}.name==="something",jk=_a&&(!Pa||Pa&&Nk(Sf,"name").configurable);wf.exports={EXISTS:_a,PROPER:Mk,CONFIGURABLE:jk}});var Ra=a((V5,Cf)=>{"use strict";var $k=ke(),Lk=xa(),Fk=fe(),Of=function(e){return function(r,t,n){var i=$k(r),o=Fk(i);if(o===0)return!e&&-1;var u=Lk(n,o),l;if(e&&t!==t){for(;o>u;)if(l=i[u++],l!==l)return!0}else for(;o>u;u++)if((e||u in i)&&i[u]===t)return e||u||0;return!e&&-1}};Cf.exports={includes:Of(!0),indexOf:Of(!1)}});var Na=a((Y5,If)=>{"use strict";var Dk=A(),Aa=W(),Bk=ke(),Gk=Ra().indexOf,Uk=Wr(),Ef=Dk([].push);If.exports=function(e,r){var t=Bk(e),n=0,i=[],o;for(o in t)!Aa(Uk,o)&&Aa(t,o)&&Ef(i,o);for(;r.length>n;)Aa(t,o=r[n++])&&(~Gk(i,o)||Ef(i,o));return i}});var kn=a((J5,kf)=>{"use strict";kf.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var Pn=a((Q5,Pf)=>{"use strict";var Wk=Na(),Hk=kn();Pf.exports=Object.keys||function(r){return Wk(r,Hk)}});var Ma=a(_f=>{"use strict";var Kk=G(),zk=va(),Vk=te(),Yk=Q(),Jk=ke(),Qk=Pn();_f.f=Kk&&!zk?Object.defineProperties:function(r,t){Yk(r);for(var n=Jk(t),i=Qk(t),o=i.length,u=0,l;o>u;)Vk.f(r,l=i[u++],n[l]);return r}});var ja=a((Z5,Rf)=>{"use strict";var Xk=U();Rf.exports=Xk("document","documentElement")});var Je=a((eW,Ff)=>{"use strict";var Zk=Q(),e1=Ma(),Af=kn(),r1=Wr(),t1=ja(),n1=Sn(),i1=qt(),Nf=">",Mf="<",La="prototype",Fa="script",$f=i1("IE_PROTO"),$a=function(){},Lf=function(e){return Mf+Fa+Nf+e+Mf+"/"+Fa+Nf},jf=function(e){e.write(Lf("")),e.close();var r=e.parentWindow.Object;return e=null,r},a1=function(){var e=n1("iframe"),r="java"+Fa+":",t;return e.style.display="none",t1.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(Lf("document.F=Object")),t.close(),t.F},_n,Rn=function(){try{_n=new ActiveXObject("htmlfile")}catch{}Rn=typeof document<"u"?document.domain&&_n?jf(_n):a1():jf(_n);for(var e=Af.length;e--;)delete Rn[La][Af[e]];return Rn()};r1[$f]=!0;Ff.exports=Object.create||function(r,t){var n;return r!==null?($a[La]=Zk(r),n=new $a,$a[La]=null,n[$f]=r):n=Rn(),t===void 0?n:e1.f(n,t)}});var Da=a((rW,Df)=>{"use strict";var o1=P();Df.exports=!o1(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var St=a((tW,Gf)=>{"use strict";var u1=W(),s1=N(),c1=re(),l1=qt(),f1=Da(),Bf=l1("IE_PROTO"),Ba=Object,p1=Ba.prototype;Gf.exports=f1?Ba.getPrototypeOf:function(e){var r=c1(e);if(u1(r,Bf))return r[Bf];var t=r.constructor;return s1(t)&&r instanceof t?t.prototype:r instanceof Ba?p1:null}});var _e=a((nW,Uf)=>{"use strict";var v1=we();Uf.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:v1(e,r,t),e}});var Ha=a((iW,Kf)=>{"use strict";var d1=P(),m1=N(),h1=$(),y1=Je(),Wf=St(),g1=_e(),b1=R(),q1=Z(),Wa=b1("iterator"),Hf=!1,Re,Ga,Ua;[].keys&&(Ua=[].keys(),"next"in Ua?(Ga=Wf(Wf(Ua)),Ga!==Object.prototype&&(Re=Ga)):Hf=!0);var x1=!h1(Re)||d1(function(){var e={};return Re[Wa].call(e)!==e});x1?Re={}:q1&&(Re=y1(Re));m1(Re[Wa])||g1(Re,Wa,function(){return this});Kf.exports={IteratorPrototype:Re,BUGGY_SAFARI_ITERATORS:Hf}});var Vf=a((aW,zf)=>{"use strict";var S1=Tn(),w1=ht();zf.exports=S1?{}.toString:function(){return"[object "+w1(this)+"]"}});var Ae=a((oW,Jf)=>{"use strict";var T1=Tn(),O1=te().f,C1=we(),E1=W(),I1=Vf(),k1=R(),Yf=k1("toStringTag");Jf.exports=function(e,r,t,n){var i=t?e:e&&e.prototype;i&&(E1(i,Yf)||O1(i,Yf,{configurable:!0,value:r}),n&&!T1&&C1(i,"toString",I1))}});var pr=a((uW,Qf)=>{"use strict";Qf.exports={}});var Zf=a((sW,Xf)=>{"use strict";var P1=Ha().IteratorPrototype,_1=Je(),R1=Ke(),A1=Ae(),N1=pr(),M1=function(){return this};Xf.exports=function(e,r,t,n){var i=r+" Iterator";return e.prototype=_1(P1,{next:R1(+!n,t)}),A1(e,i,!1,!0),N1[i]=M1,e}});var rp=a((cW,ep)=>{"use strict";var j1=A(),$1=F();ep.exports=function(e,r,t){try{return j1($1(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var np=a((lW,tp)=>{"use strict";var L1=$();tp.exports=function(e){return L1(e)||e===null}});var ap=a((fW,ip)=>{"use strict";var F1=np(),D1=String,B1=TypeError;ip.exports=function(e){if(F1(e))return e;throw new B1("Can't set "+D1(e)+" as a prototype")}});var wt=a((pW,op)=>{"use strict";var G1=rp(),U1=$(),W1=ur(),H1=ap();op.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=G1(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(i,o){return W1(i),H1(o),U1(i)&&(e?t(i,o):i.__proto__=o),i}}():void 0)});var Mn=a((vW,hp)=>{"use strict";var K1=x(),z1=D(),An=Z(),dp=Tf(),V1=N(),Y1=Zf(),up=St(),sp=wt(),J1=Ae(),Q1=we(),Ka=_e(),X1=R(),cp=pr(),mp=Ha(),Z1=dp.PROPER,eP=dp.CONFIGURABLE,lp=mp.IteratorPrototype,Nn=mp.BUGGY_SAFARI_ITERATORS,Tt=X1("iterator"),fp="keys",Ot="values",pp="entries",vp=function(){return this};hp.exports=function(e,r,t,n,i,o,u){Y1(t,r,n);var l=function(q){if(q===i&&v)return v;if(!Nn&&q&&q in f)return f[q];switch(q){case fp:return function(){return new t(this,q)};case Ot:return function(){return new t(this,q)};case pp:return function(){return new t(this,q)}}return function(){return new t(this)}},c=r+" Iterator",s=!1,f=e.prototype,p=f[Tt]||f["@@iterator"]||i&&f[i],v=!Nn&&p||l(i),d=r==="Array"&&f.entries||p,h,m,y;if(d&&(h=up(d.call(new e)),h!==Object.prototype&&h.next&&(!An&&up(h)!==lp&&(sp?sp(h,lp):V1(h[Tt])||Ka(h,Tt,vp)),J1(h,c,!0,!0),An&&(cp[c]=vp))),Z1&&i===Ot&&p&&p.name!==Ot&&(!An&&eP?Q1(f,"name",Ot):(s=!0,v=function(){return z1(p,this)})),i)if(m={values:l(Ot),keys:o?v:l(fp),entries:l(pp)},u)for(y in m)(Nn||s||!(y in f))&&Ka(f,y,m[y]);else K1({target:r,proto:!0,forced:Nn||s},m);return(!An||u)&&f[Tt]!==v&&Ka(f,Tt,v,{name:i}),cp[r]=v,m}});var jn=a((dW,yp)=>{"use strict";yp.exports=function(e,r){return{value:e,done:r}}});var vr=a(()=>{"use strict";var rP=pf().charAt,tP=Ve(),bp=Ye(),nP=Mn(),gp=jn(),qp="String Iterator",iP=bp.set,aP=bp.getterFor(qp);nP(String,"String",function(e){iP(this,{type:qp,string:tP(e),index:0})},function(){var r=aP(this),t=r.string,n=r.index,i;return n>=t.length?gp(void 0,!0):(i=rP(t,n),r.index+=i.length,gp(i,!1))})});var za=a((yW,Sp)=>{"use strict";var oP=D(),xp=Q(),uP=qn();Sp.exports=function(e,r,t){var n,i;xp(e);try{if(n=uP(e,"return"),!n){if(r==="throw")throw t;return t}n=oP(n,e)}catch(o){i=!0,n=o}if(r==="throw")throw t;if(i)throw n;return xp(n),t}});var Tp=a((gW,wp)=>{"use strict";var sP=Q(),cP=za();wp.exports=function(e,r,t,n){try{return n?r(sP(t)[0],t[1]):r(t)}catch(i){cP(e,"throw",i)}}});var Va=a((bW,Op)=>{"use strict";var lP=R(),fP=pr(),pP=lP("iterator"),vP=Array.prototype;Op.exports=function(e){return e!==void 0&&(fP.Array===e||vP[pP]===e)}});var Ct=a((qW,Ep)=>{"use strict";var dP=ht(),Cp=qn(),mP=or(),hP=pr(),yP=R(),gP=yP("iterator");Ep.exports=function(e){if(!mP(e))return Cp(e,gP)||Cp(e,"@@iterator")||hP[dP(e)]}});var $n=a((xW,Ip)=>{"use strict";var bP=D(),qP=F(),xP=Q(),SP=ze(),wP=Ct(),TP=TypeError;Ip.exports=function(e,r){var t=arguments.length<2?wP(e):r;if(qP(t))return xP(bP(t,e));throw new TP(SP(e)+" is not iterable")}});var Rp=a((SW,_p)=>{"use strict";var OP=V(),CP=D(),EP=re(),IP=Tp(),kP=Va(),PP=gt(),_P=fe(),kp=Br(),RP=Gr(),AP=$n(),NP=Ct(),Pp=Array;_p.exports=function(r){var t=EP(r),n=PP(this),i=arguments.length,o=i>1?arguments[1]:void 0,u=o!==void 0;u&&(o=OP(o,i>2?arguments[2]:void 0));var l=NP(t),c=0,s,f,p,v,d,h;if(l&&!(this===Pp&&kP(l)))for(f=n?new this:[],v=AP(t,l),d=v.next;!(p=CP(d,v)).done;c++)h=u?IP(v,o,[p.value,c],!0):p.value,kp(f,c,h);else for(s=_P(t),f=n?new this(s):Pp(s);s>c;c++)h=u?o(t[c],c):t[c],kp(f,c,h);return RP(f,c),f}});var Ja=a((wW,jp)=>{"use strict";var MP=R(),Np=MP("iterator"),Mp=!1;try{Ap=0,Ya={next:function(){return{done:!!Ap++}},return:function(){Mp=!0}},Ya[Np]=function(){return this},Array.from(Ya,function(){throw 2})}catch{}var Ap,Ya;jp.exports=function(e,r){try{if(!r&&!Mp)return!1}catch{return!1}var t=!1;try{var n={};n[Np]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var $p=a(()=>{"use strict";var jP=x(),$P=Rp(),LP=Ja(),FP=!LP(function(e){Array.from(e)});jP({target:"Array",stat:!0,forced:FP},{from:$P})});var Fp=a((CW,Lp)=>{"use strict";vr();$p();var DP=z();Lp.exports=DP.Array.from});var Bp=a((EW,Dp)=>{"use strict";var BP=Fp();Dp.exports=BP});var Up=a((IW,Gp)=>{"use strict";var GP=Bp();Gp.exports=GP});var Hp=a((kW,Wp)=>{"use strict";var UP=Up();Wp.exports=UP});var Qa=a((PW,Kp)=>{"use strict";Kp.exports=Hp()});var Ln=a((_W,zp)=>{zp.exports=Qa()});var Et=a((RW,Vp)=>{"use strict";var WP=TypeError,HP=9007199254740991;Vp.exports=function(e){if(e>HP)throw WP("Maximum allowed index exceeded");return e}});var Xp=a((AW,Qp)=>{"use strict";var Yp=Pe(),KP=gt(),zP=$(),VP=R(),YP=VP("species"),Jp=Array;Qp.exports=function(e){var r;return Yp(e)&&(r=e.constructor,KP(r)&&(r===Jp||Yp(r.prototype))?r=void 0:zP(r)&&(r=r[YP],r===null&&(r=void 0))),r===void 0?Jp:r}});var Fn=a((NW,Zp)=>{"use strict";var JP=Xp();Zp.exports=function(e,r){return new(JP(e))(r===0?0:r)}});var Xa=a(()=>{"use strict";var QP=x(),XP=P(),ZP=Pe(),e_=$(),r_=re(),t_=fe(),ev=Et(),rv=Br(),n_=Gr(),i_=Fn(),a_=bt(),o_=R(),u_=Mr(),tv=o_("isConcatSpreadable"),s_=u_>=51||!XP(function(){var e=[];return e[tv]=!1,e.concat()[0]!==e}),c_=function(e){if(!e_(e))return!1;var r=e[tv];return r!==void 0?!!r:ZP(e)},l_=!s_||!a_("concat");QP({target:"Array",proto:!0,arity:1,forced:l_},{concat:function(r){var t=r_(this),n=i_(t,0),i=0,o,u,l,c,s;for(o=-1,l=arguments.length;o<l;o++)if(s=o===-1?t:arguments[o],c_(s))for(c=t_(s),ev(i+c),u=0;u<c;u++,i++)u in s&&rv(n,i,s[u]);else ev(i+1),rv(n,i++,s);return n_(n,i),n}})});var It=a(()=>{});var kt=a(nv=>{"use strict";var f_=Na(),p_=kn(),v_=p_.concat("length","prototype");nv.f=Object.getOwnPropertyNames||function(r){return f_(r,v_)}});var Za=a((DW,ov)=>{"use strict";var d_=Se(),m_=ke(),iv=kt().f,h_=lr(),av=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],y_=function(e){try{return iv(e)}catch{return h_(av)}};ov.exports.f=function(r){return av&&d_(r)==="Window"?y_(r):iv(m_(r))}});var Dn=a(uv=>{"use strict";uv.f=Object.getOwnPropertySymbols});var Bn=a((GW,sv)=>{"use strict";var g_=te();sv.exports=function(e,r,t){return g_.f(e,r,t)}});var Hr=a(cv=>{"use strict";var b_=R();cv.f=b_});var M=a((WW,fv)=>{"use strict";var lv=z(),q_=W(),x_=Hr(),S_=te().f;fv.exports=function(e){var r=lv.Symbol||(lv.Symbol={});q_(r,e)||S_(r,e,{value:x_.f(e)})}});var eo=a((HW,pv)=>{"use strict";var w_=D(),T_=U(),O_=R(),C_=_e();pv.exports=function(){var e=T_("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=O_("toPrimitive");r&&!r[n]&&C_(r,n,function(i){return w_(t,this)},{arity:1})}});var Pt=a((KW,dv)=>{"use strict";var E_=V(),I_=gn(),k_=re(),P_=fe(),vv=Fn(),ro=Br(),Qe=function(e){var r=e===1,t=e===2,n=e===3,i=e===4,o=e===6,u=e===7,l=e===5||o;return function(c,s,f){for(var p=k_(c),v=I_(p),d=P_(v),h=E_(s,f),m=0,y=0,q=r?vv(c,d):t||u?vv(c,0):void 0,b,I;d>m;m++)if((l||m in v)&&(b=v[m],I=h(b,m,p),e))if(r)ro(q,m,I);else if(I)switch(e){case 3:return!0;case 5:return b;case 6:return m;case 2:ro(q,y++,b)}else switch(e){case 4:return!1;case 7:ro(q,y++,b)}return o?-1:n||i?i:q}};dv.exports={forEach:Qe(0),map:Qe(1),filter:Qe(2),some:Qe(3),every:Qe(4),find:Qe(5),findIndex:Qe(6),filterReject:Qe(7)}});var _v=a(()=>{"use strict";var Gn=x(),At=_(),lo=D(),__=A(),R_=Z(),Kr=G(),zr=sr(),A_=P(),H=W(),N_=B(),ao=Q(),Un=ke(),fo=xn(),M_=Ve(),oo=Ke(),Vr=Je(),yv=Pn(),j_=kt(),gv=Za(),$_=Dn(),bv=vt(),qv=te(),L_=Ma(),xv=ea(),to=_e(),F_=Bn(),po=cr(),D_=qt(),Sv=Wr(),mv=$r(),B_=R(),G_=Hr(),U_=M(),W_=eo(),H_=Ae(),wv=Ye(),Wn=Pt().forEach,ne=D_("hidden"),Hn="Symbol",Rt="prototype",K_=wv.set,hv=wv.getterFor(Hn),pe=Object[Rt],dr=At.Symbol,_t=dr&&dr[Rt],z_=At.RangeError,V_=At.TypeError,no=At.QObject,Tv=bv.f,mr=qv.f,Ov=gv.f,Y_=xv.f,Cv=__([].push),Ne=po("symbols"),Nt=po("op-symbols"),J_=po("wks"),uo=!no||!no[Rt]||!no[Rt].findChild,Ev=function(e,r,t){var n=Tv(pe,r);n&&delete pe[r],mr(e,r,t),n&&e!==pe&&mr(pe,r,n)},so=Kr&&A_(function(){return Vr(mr({},"a",{get:function(){return mr(this,"a",{value:7}).a}})).a!==7})?Ev:mr,io=function(e,r){var t=Ne[e]=Vr(_t);return K_(t,{type:Hn,tag:e,description:r}),Kr||(t.description=r),t},Kn=function(r,t,n){r===pe&&Kn(Nt,t,n),ao(r);var i=fo(t);return ao(n),H(Ne,i)?(n.enumerable?(H(r,ne)&&r[ne][i]&&(r[ne][i]=!1),n=Vr(n,{enumerable:oo(0,!1)})):(H(r,ne)||mr(r,ne,oo(1,Vr(null))),r[ne][i]=!0),so(r,i,n)):mr(r,i,n)},vo=function(r,t){ao(r);var n=Un(t),i=yv(n).concat(Pv(n));return Wn(i,function(o){(!Kr||lo(co,n,o))&&Kn(r,o,n[o])}),r},Q_=function(r,t){return t===void 0?Vr(r):vo(Vr(r),t)},co=function(r){var t=fo(r),n=lo(Y_,this,t);return this===pe&&H(Ne,t)&&!H(Nt,t)?!1:n||!H(this,t)||!H(Ne,t)||H(this,ne)&&this[ne][t]?n:!0},Iv=function(r,t){var n=Un(r),i=fo(t);if(!(n===pe&&H(Ne,i)&&!H(Nt,i))){var o=Tv(n,i);return o&&H(Ne,i)&&!(H(n,ne)&&n[ne][i])&&(o.enumerable=!0),o}},kv=function(r){var t=Ov(Un(r)),n=[];return Wn(t,function(i){!H(Ne,i)&&!H(Sv,i)&&Cv(n,i)}),n},Pv=function(e){var r=e===pe,t=Ov(r?Nt:Un(e)),n=[];return Wn(t,function(i){H(Ne,i)&&(!r||H(pe,i))&&Cv(n,Ne[i])}),n};zr||(dr=function(){if(N_(_t,this))throw new V_("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:M_(arguments[0]),t=mv(r),n=function(i){var o=this===void 0?At:this;o===pe&&lo(n,Nt,i),H(o,ne)&&H(o[ne],t)&&(o[ne][t]=!1);var u=oo(1,i);try{so(o,t,u)}catch(l){if(!(l instanceof z_))throw l;Ev(o,t,u)}};return Kr&&uo&&so(pe,t,{configurable:!0,set:n}),io(t,r)},_t=dr[Rt],to(_t,"toString",function(){return hv(this).tag}),to(dr,"withoutSetter",function(e){return io(mv(e),e)}),xv.f=co,qv.f=Kn,L_.f=vo,bv.f=Iv,j_.f=gv.f=kv,$_.f=Pv,G_.f=function(e){return io(B_(e),e)},Kr&&(F_(_t,"description",{configurable:!0,get:function(){return hv(this).description}}),R_||to(pe,"propertyIsEnumerable",co,{unsafe:!0})));Gn({global:!0,constructor:!0,wrap:!0,forced:!zr,sham:!zr},{Symbol:dr});Wn(yv(J_),function(e){U_(e)});Gn({target:Hn,stat:!0,forced:!zr},{useSetter:function(){uo=!0},useSimple:function(){uo=!1}});Gn({target:"Object",stat:!0,forced:!zr,sham:!Kr},{create:Q_,defineProperty:Kn,defineProperties:vo,getOwnPropertyDescriptor:Iv});Gn({target:"Object",stat:!0,forced:!zr},{getOwnPropertyNames:kv});W_();H_(dr,Hn);Sv[ne]=!0});var mo=a((YW,Rv)=>{"use strict";var X_=sr();Rv.exports=X_&&!!Symbol.for&&!!Symbol.keyFor});var Nv=a(()=>{"use strict";var Z_=x(),eR=U(),rR=W(),tR=Ve(),Av=cr(),nR=mo(),ho=Av("string-to-symbol-registry"),iR=Av("symbol-to-string-registry");Z_({target:"Symbol",stat:!0,forced:!nR},{for:function(e){var r=tR(e);if(rR(ho,r))return ho[r];var t=eR("Symbol")(r);return ho[r]=t,iR[t]=r,t}})});var jv=a(()=>{"use strict";var aR=x(),oR=W(),uR=jr(),sR=ze(),cR=cr(),lR=mo(),Mv=cR("symbol-to-string-registry");aR({target:"Symbol",stat:!0,forced:!lR},{keyFor:function(r){if(!uR(r))throw new TypeError(sR(r)+" is not a symbol");if(oR(Mv,r))return Mv[r]}})});var Lv=a((e8,$v)=>{"use strict";var fR=$(),pR=Ye().get;$v.exports=function(r){if(!fR(r))return!1;var t=pR(r);return!!t&&t.type==="RawJSON"}});var Uv=a((r8,Gv)=>{"use strict";var yo=A(),vR=W(),zn=SyntaxError,dR=parseInt,mR=String.fromCharCode,hR=yo("".charAt),Fv=yo("".slice),Dv=yo(/./.exec),Bv={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},yR=/^[\da-f]{4}$/i,gR=/^[\u0000-\u001F]$/;Gv.exports=function(e,r){for(var t=!0,n="";r<e.length;){var i=hR(e,r);if(i==="\\"){var o=Fv(e,r,r+2);if(vR(Bv,o))n+=Bv[o],r+=2;else if(o==="\\u"){r+=2;var u=Fv(e,r,r+4);if(!Dv(yR,u))throw new zn("Bad Unicode escape at: "+r);n+=mR(dR(u,16)),r+=4}else throw new zn('Unknown escape sequence: "'+o+'"')}else if(i==='"'){t=!1,r++;break}else{if(Dv(gR,i))throw new zn("Bad control character in string literal at: "+r);n+=i,r++}}if(t)throw new zn("Unterminated string at: "+r);return{value:n,end:r}}});var Hv=a((t8,Wv)=>{"use strict";var bR=P();Wv.exports=!bR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var ad=a(()=>{"use strict";var qR=x(),Zv=U(),xR=Ar(),ed=D(),hr=A(),rd=P(),Kv=Pe(),Yn=N(),SR=Lv(),zv=jr(),Vv=Se(),wR=Ve(),TR=lr(),OR=Uv(),CR=$r(),ER=sr(),go=Hv(),td=String,Xe=Zv("JSON","stringify"),Vn=hr(/./.exec),qo=hr("".charAt),IR=hr("".charCodeAt),kR=hr("".replace),bo=hr("".slice),xo=hr([].push),PR=hr(1.1.toString),_R=/[\uD800-\uDFFF]/g,Yv=/^[\uD800-\uDBFF]$/,Jv=/^[\uDC00-\uDFFF]$/,So=CR(),Qv=So.length,nd=!ER||rd(function(){var e=Zv("Symbol")("stringify detection");return Xe([e])!=="[null]"||Xe({a:e})!=="{}"||Xe(Object(e))!=="{}"}),Xv=rd(function(){return Xe("\uDF06\uD834")!=='"\\udf06\\ud834"'||Xe("\uDEAD")!=='"\\udead"'}),RR=nd?function(e,r){var t=TR(arguments),n=id(r);if(!(!Yn(n)&&(e===void 0||zv(e))))return t[1]=function(i,o){if(Yn(n)&&(o=ed(n,this,td(i),o)),!zv(o))return o},xR(Xe,null,t)}:Xe,AR=function(e,r,t){var n=qo(t,r-1),i=qo(t,r+1);return Vn(Yv,e)&&!Vn(Jv,i)||Vn(Jv,e)&&!Vn(Yv,n)?"\\u"+PR(IR(e,0),16):e},id=function(e){if(Yn(e))return e;if(Kv(e)){for(var r=e.length,t=[],n=0;n<r;n++){var i=e[n];typeof i=="string"?xo(t,i):(typeof i=="number"||Vv(i)==="Number"||Vv(i)==="String")&&xo(t,wR(i))}var o=t.length,u=!0;return function(l,c){if(u)return u=!1,c;if(Kv(this))return c;for(var s=0;s<o;s++)if(t[s]===l)return c}}};Xe&&qR({target:"JSON",stat:!0,arity:3,forced:nd||Xv||!go},{stringify:function(r,t,n){var i=id(t),o=[],u=RR(r,function(d,h){var m=Yn(i)?ed(i,this,td(d),h):h;return!go&&SR(m)?So+(xo(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(Xv&&(u=kR(u,_R,AR)),go))return u;for(var l="",c=u.length,s=0;s<c;s++){var f=qo(u,s);if(f==='"'){var p=OR(u,++s).end-1,v=bo(u,s,p);l+=bo(v,0,Qv)===So?o[bo(v,Qv)]:'"'+v+'"',s=p}else l+=f}return l}})});var ud=a(()=>{"use strict";var NR=x(),MR=sr(),jR=P(),od=Dn(),$R=re(),LR=!MR||jR(function(){od.f(1)});NR({target:"Object",stat:!0,forced:LR},{getOwnPropertySymbols:function(r){var t=od.f;return t?t($R(r)):[]}})});var sd=a(()=>{"use strict";_v();Nv();jv();ad();ud()});var wo=a(()=>{"use strict";var FR=M();FR("asyncDispose")});var To=a(()=>{"use strict";var DR=M();DR("asyncIterator")});var cd=a(()=>{});var Oo=a(()=>{"use strict";var BR=M();BR("dispose")});var ld=a(()=>{"use strict";var GR=M();GR("hasInstance")});var fd=a(()=>{"use strict";var UR=M();UR("isConcatSpreadable")});var Co=a(()=>{"use strict";var WR=M();WR("iterator")});var pd=a(()=>{"use strict";var HR=M();HR("match")});var vd=a(()=>{"use strict";var KR=M();KR("matchAll")});var dd=a(()=>{"use strict";var zR=M();zR("replace")});var md=a(()=>{"use strict";var VR=M();VR("search")});var hd=a(()=>{"use strict";var YR=M();YR("species")});var yd=a(()=>{"use strict";var JR=M();JR("split")});var Eo=a(()=>{"use strict";var QR=M(),XR=eo();QR("toPrimitive");XR()});var gd=a(()=>{"use strict";var ZR=U(),eA=M(),rA=Ae();eA("toStringTag");rA(ZR("Symbol"),"Symbol")});var bd=a(()=>{"use strict";var tA=M();tA("unscopables")});var qd=a(()=>{"use strict";var nA=_(),iA=Ae();iA(nA.JSON,"JSON",!0)});var xd=a(()=>{});var Sd=a(()=>{});var Td=a((z8,wd)=>{"use strict";Xa();It();sd();wo();To();cd();Oo();ld();fd();Co();pd();vd();dd();md();hd();yd();Eo();gd();bd();qd();xd();Sd();var aA=z();wd.exports=aA.Symbol});var Io=a((V8,Od)=>{"use strict";Od.exports=function(){}});var yr=a((Y8,Pd)=>{"use strict";var oA=ke(),ko=Io(),Cd=pr(),Id=Ye(),uA=te().f,sA=Mn(),Jn=jn(),cA=Z(),lA=G(),kd="Array Iterator",fA=Id.set,pA=Id.getterFor(kd);Pd.exports=sA(Array,"Array",function(e,r){fA(this,{type:kd,target:oA(e),index:0,kind:r})},function(){var e=pA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,Jn(void 0,!0);switch(e.kind){case"keys":return Jn(t,!1);case"values":return Jn(r[t],!1)}return Jn([t,r[t]],!1)},"values");var Ed=Cd.Arguments=Cd.Array;ko("keys");ko("values");ko("entries");if(!cA&&lA&&Ed.name!=="values")try{uA(Ed,"name",{value:"values"})}catch{}});var Rd=a((J8,_d)=>{"use strict";_d.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var gr=a(()=>{"use strict";yr();var vA=Rd(),dA=_(),mA=Ae(),Ad=pr();for(Qn in vA)mA(dA[Qn],Qn),Ad[Qn]=Ad.Array;var Qn});var Md=a((Z8,Nd)=>{"use strict";var hA=Td();gr();Nd.exports=hA});var Ld=a(()=>{"use strict";var yA=R(),gA=te().f,jd=yA("metadata"),$d=Function.prototype;$d[jd]===void 0&&gA($d,jd,{value:null})});var Fd=a(()=>{"use strict";wo()});var Dd=a(()=>{"use strict";Oo()});var Bd=a(()=>{"use strict";var bA=M();bA("metadata")});var Ud=a((s6,Gd)=>{"use strict";var qA=Md();Ld();Fd();Dd();Bd();Gd.exports=qA});var _o=a((c6,Wd)=>{"use strict";var xA=U(),SA=A(),Po=xA("Symbol"),wA=Po.keyFor,TA=SA(Po.prototype.valueOf);Wd.exports=Po.isRegisteredSymbol||function(r){try{return wA(TA(r))!==void 0}catch{return!1}}});var Hd=a(()=>{"use strict";var OA=x(),CA=_o();OA({target:"Symbol",stat:!0},{isRegisteredSymbol:CA})});var No=a((p6,Qd)=>{"use strict";var EA=cr(),Yd=U(),IA=A(),kA=jr(),PA=R(),Zn=Yd("Symbol"),Kd=Zn.isWellKnownSymbol,Jd=Yd("Object","getOwnPropertyNames"),_A=IA(Zn.prototype.valueOf),zd=EA("wks");for(Xn=0,Ro=Jd(Zn),Vd=Ro.length;Xn<Vd;Xn++)try{Ao=Ro[Xn],kA(Zn[Ao])&&PA(Ao)}catch{}var Ao,Xn,Ro,Vd;Qd.exports=function(r){if(Kd&&Kd(r))return!0;try{for(var t=_A(r),n=0,i=Jd(zd),o=i.length;n<o;n++)if(zd[i[n]]==t)return!0}catch{}return!1}});var Xd=a(()=>{"use strict";var RA=x(),AA=No();RA({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:AA})});var Zd=a(()=>{"use strict";var NA=M();NA("customMatcher")});var em=a(()=>{"use strict";var MA=M();MA("observable")});var rm=a(()=>{"use strict";var jA=x(),$A=_o();jA({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:$A})});var tm=a(()=>{"use strict";var LA=x(),FA=No();LA({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:FA})});var nm=a(()=>{"use strict";var DA=M();DA("matcher")});var im=a(()=>{"use strict";var BA=M();BA("metadataKey")});var am=a(()=>{"use strict";var GA=M();GA("patternMatch")});var om=a(()=>{"use strict";var UA=M();UA("replaceAll")});var sm=a((_6,um)=>{"use strict";var WA=Ud();Hd();Xd();Zd();em();rm();tm();nm();im();am();om();um.exports=WA});var Te=a((R6,cm)=>{"use strict";cm.exports=sm()});var ei=a((A6,lm)=>{lm.exports=Te()});var pm=a((N6,fm)=>{"use strict";yr();vr();var HA=Ct();fm.exports=HA});var dm=a((M6,vm)=>{"use strict";var KA=pm();gr();vm.exports=KA});var hm=a((j6,mm)=>{"use strict";var zA=dm();mm.exports=zA});var gm=a(($6,ym)=>{"use strict";var VA=hm();ym.exports=VA});var Mo=a((L6,bm)=>{"use strict";bm.exports=gm()});var ri=a((F6,qm)=>{qm.exports=Mo()});var Sm=a((D6,xm)=>{"use strict";yr();vr();var YA=$n();xm.exports=YA});var Tm=a((B6,wm)=>{"use strict";var JA=Sm();gr();wm.exports=JA});var Cm=a((G6,Om)=>{"use strict";var QA=Tm();Om.exports=QA});var Im=a((U6,Em)=>{"use strict";var XA=Cm();Em.exports=XA});var Pm=a((W6,km)=>{"use strict";km.exports=Im()});var ti=a((H6,_m)=>{_m.exports=Pm()});var Am=a((K6,Rm)=>{"use strict";var ZA=U(),eN=A(),rN=kt(),tN=Dn(),nN=Q(),iN=eN([].concat);Rm.exports=ZA("Reflect","ownKeys")||function(r){var t=rN.f(nN(r)),n=tN.f;return n?iN(t,n(r)):t}});var jm=a((z6,Mm)=>{"use strict";var Nm=W(),aN=Am(),oN=vt(),uN=te();Mm.exports=function(e,r,t){for(var n=aN(r),i=uN.f,o=oN.f,u=0;u<n.length;u++){var l=n[u];!Nm(e,l)&&!(t&&Nm(t,l))&&i(e,l,o(r,l))}}});var Lm=a((V6,$m)=>{"use strict";var sN=$(),cN=we();$m.exports=function(e,r){sN(r)&&"cause"in r&&cN(e,"cause",r.cause)}});var Gm=a((Y6,Bm)=>{"use strict";var lN=A(),Fm=Error,fN=lN("".replace),pN=function(e){return String(new Fm(e).stack)}("zxcasd"),Dm=/\n\s*at [^:]*:[^\n]*/,vN=Dm.test(pN);Bm.exports=function(e,r){if(vN&&typeof e=="string"&&!Fm.prepareStackTrace)for(;r--;)e=fN(e,Dm,"");return e}});var Wm=a((J6,Um)=>{"use strict";var dN=P(),mN=Ke();Um.exports=!dN(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",mN(1,7)),e.stack!==7):!0})});var zm=a((Q6,Km)=>{"use strict";var hN=we(),yN=Gm(),gN=Wm(),Hm=Error.captureStackTrace;Km.exports=function(e,r,t,n){gN&&(Hm?Hm(e,r):hN(e,"stack",yN(t,n)))}});var ve=a((X6,Qm)=>{"use strict";var bN=V(),qN=D(),xN=Q(),SN=ze(),wN=Va(),TN=fe(),Vm=B(),ON=$n(),CN=Ct(),Ym=za(),EN=TypeError,ni=function(e,r){this.stopped=e,this.result=r},Jm=ni.prototype;Qm.exports=function(e,r,t){var n=t&&t.that,i=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),l=!!(t&&t.INTERRUPTED),c=bN(r,n),s,f,p,v,d,h,m,y=function(b){return s&&Ym(s,"normal"),new ni(!0,b)},q=function(b){return i?(xN(b),l?c(b[0],b[1],y):c(b[0],b[1])):l?c(b,y):c(b)};if(o)s=e.iterator;else if(u)s=e;else{if(f=CN(e),!f)throw new EN(SN(e)+" is not iterable");if(wN(f)){for(p=0,v=TN(e);v>p;p++)if(d=q(e[p]),d&&Vm(Jm,d))return d;return new ni(!1)}s=ON(e,f)}for(h=o?e.next:s.next;!(m=qN(h,s)).done;){try{d=q(m.value)}catch(b){Ym(s,"throw",b)}if(typeof d=="object"&&d&&Vm(Jm,d))return d}return new ni(!1)}});var Zm=a((Z6,Xm)=>{"use strict";var IN=Ve();Xm.exports=function(e,r){return e===void 0?arguments.length<2?"":r:IN(e)}});var rh=a(()=>{"use strict";var kN=x(),PN=B(),_N=St(),ii=wt(),RN=jm(),eh=Je(),jo=we(),$o=Ke(),AN=Lm(),NN=zm(),MN=ve(),jN=Zm(),$N=R(),LN=$N("toStringTag"),ai=Error,FN=[].push,Yr=function(r,t){var n=PN(Lo,this),i;ii?i=ii(new ai,n?_N(this):Lo):(i=n?this:eh(Lo),jo(i,LN,"Error")),t!==void 0&&jo(i,"message",jN(t)),NN(i,Yr,i.stack,1),arguments.length>2&&AN(i,arguments[2]);var o=[];return MN(r,FN,{that:o}),jo(i,"errors",o),i};ii?ii(Yr,ai):RN(Yr,ai,{name:!0});var Lo=Yr.prototype=eh(ai.prototype,{constructor:$o(1,Yr),message:$o(1,""),name:$o(1,"AggregateError")});kN({global:!0,constructor:!0,arity:2},{AggregateError:Yr})});var Fo=a(()=>{"use strict";rh()});var Do=a((iH,th)=>{"use strict";var Mt=_(),DN=Nr(),BN=Se(),oi=function(e){return DN.slice(0,e.length)===e};th.exports=function(){return oi("Bun/")?"BUN":oi("Cloudflare-Workers")?"CLOUDFLARE":oi("Deno/")?"DENO":oi("Node.js/")?"NODE":Mt.Bun&&typeof Bun.version=="string"?"BUN":Mt.Deno&&typeof Deno.version=="object"?"DENO":BN(Mt.process)==="process"?"NODE":Mt.window&&Mt.document?"BROWSER":"REST"}()});var jt=a((aH,nh)=>{"use strict";var GN=Do();nh.exports=GN==="NODE"});var Bo=a((oH,ah)=>{"use strict";var UN=U(),WN=Bn(),HN=R(),KN=G(),ih=HN("species");ah.exports=function(e){var r=UN(e);KN&&r&&!r[ih]&&WN(r,ih,{configurable:!0,get:function(){return this}})}});var ui=a((uH,oh)=>{"use strict";var zN=B(),VN=TypeError;oh.exports=function(e,r){if(zN(r,e))return e;throw new VN("Incorrect invocation")}});var Go=a((sH,uh)=>{"use strict";var YN=gt(),JN=ze(),QN=TypeError;uh.exports=function(e){if(YN(e))return e;throw new QN(JN(e)+" is not a constructor")}});var Uo=a((cH,ch)=>{"use strict";var sh=Q(),XN=Go(),ZN=or(),e2=R(),r2=e2("species");ch.exports=function(e,r){var t=sh(e).constructor,n;return t===void 0||ZN(n=sh(t)[r2])?r:XN(n)}});var fh=a((lH,lh)=>{"use strict";var t2=TypeError;lh.exports=function(e,r){if(e<r)throw new t2("Not enough arguments");return e}});var Wo=a((fH,ph)=>{"use strict";var n2=Nr();ph.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(n2)});var Zo=a((pH,xh)=>{"use strict";var ue=_(),i2=Ar(),a2=V(),vh=N(),o2=W(),qh=P(),dh=ja(),u2=lr(),mh=Sn(),s2=fh(),c2=Wo(),l2=jt(),Jo=ue.setImmediate,Qo=ue.clearImmediate,f2=ue.process,Ho=ue.Dispatch,p2=ue.Function,hh=ue.MessageChannel,v2=ue.String,Ko=0,$t={},yh="onreadystatechange",Lt,br,zo,Vo;qh(function(){Lt=ue.location});var Xo=function(e){if(o2($t,e)){var r=$t[e];delete $t[e],r()}},Yo=function(e){return function(){Xo(e)}},gh=function(e){Xo(e.data)},bh=function(e){ue.postMessage(v2(e),Lt.protocol+"//"+Lt.host)};(!Jo||!Qo)&&(Jo=function(r){s2(arguments.length,1);var t=vh(r)?r:p2(r),n=u2(arguments,1);return $t[++Ko]=function(){i2(t,void 0,n)},br(Ko),Ko},Qo=function(r){delete $t[r]},l2?br=function(e){f2.nextTick(Yo(e))}:Ho&&Ho.now?br=function(e){Ho.now(Yo(e))}:hh&&!c2?(zo=new hh,Vo=zo.port2,zo.port1.onmessage=gh,br=a2(Vo.postMessage,Vo)):ue.addEventListener&&vh(ue.postMessage)&&!ue.importScripts&&Lt&&Lt.protocol!=="file:"&&!qh(bh)?(br=bh,ue.addEventListener("message",gh,!1)):yh in mh("script")?br=function(e){dh.appendChild(mh("script"))[yh]=function(){dh.removeChild(this),Xo(e)}}:br=function(e){setTimeout(Yo(e),0)});xh.exports={set:Jo,clear:Qo}});var Th=a((vH,wh)=>{"use strict";var Sh=_(),d2=G(),m2=Object.getOwnPropertyDescriptor;wh.exports=function(e){if(!d2)return Sh[e];var r=m2(Sh,e);return r&&r.value}});var eu=a((dH,Ch)=>{"use strict";var Oh=function(){this.head=null,this.tail=null};Oh.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Ch.exports=Oh});var Ih=a((mH,Eh)=>{"use strict";var h2=Nr();Eh.exports=/ipad|iphone|ipod/i.test(h2)&&typeof Pebble<"u"});var Ph=a((hH,kh)=>{"use strict";var y2=Nr();kh.exports=/web0s(?!.*chrome)/i.test(y2)});var $h=a((yH,jh)=>{"use strict";var Qr=_(),g2=Th(),_h=V(),ru=Zo().set,b2=eu(),q2=Wo(),x2=Ih(),S2=Ph(),tu=jt(),Rh=Qr.MutationObserver||Qr.WebKitMutationObserver,Ah=Qr.document,Nh=Qr.process,si=Qr.Promise,au=g2("queueMicrotask"),Jr,nu,iu,ci,Mh;au||(Ft=new b2,Dt=function(){var e,r;for(tu&&(e=Nh.domain)&&e.exit();r=Ft.get();)try{r()}catch(t){throw Ft.head&&Jr(),t}e&&e.enter()},!q2&&!tu&&!S2&&Rh&&Ah?(nu=!0,iu=Ah.createTextNode(""),new Rh(Dt).observe(iu,{characterData:!0}),Jr=function(){iu.data=nu=!nu}):!x2&&si&&si.resolve?(ci=si.resolve(void 0),ci.constructor=si,Mh=_h(ci.then,ci),Jr=function(){Mh(Dt)}):tu?Jr=function(){Nh.nextTick(Dt)}:(ru=_h(ru,Qr),Jr=function(){ru(Dt)}),au=function(e){Ft.head||Jr(),Ft.add(e)});var Ft,Dt;jh.exports=au});var Fh=a((gH,Lh)=>{"use strict";Lh.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var qr=a((bH,Dh)=>{"use strict";Dh.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var xr=a((qH,Bh)=>{"use strict";var w2=_();Bh.exports=w2.Promise});var Xr=a((xH,Hh)=>{"use strict";var T2=_(),Bt=xr(),O2=N(),C2=pa(),E2=ba(),I2=R(),Gh=Do(),k2=Z(),ou=Mr(),Uh=Bt&&Bt.prototype,P2=I2("species"),uu=!1,Wh=O2(T2.PromiseRejectionEvent),_2=C2("Promise",function(){var e=E2(Bt),r=e!==String(Bt);if(!r&&ou===66||k2&&!(Uh.catch&&Uh.finally))return!0;if(!ou||ou<51||!/native code/.test(e)){var t=new Bt(function(o){o(1)}),n=function(o){o(function(){},function(){})},i=t.constructor={};if(i[P2]=n,uu=t.then(function(){})instanceof n,!uu)return!0}return!r&&(Gh==="BROWSER"||Gh==="DENO")&&!Wh});Hh.exports={CONSTRUCTOR:_2,REJECTION_EVENT:Wh,SUBCLASSING:uu}});var Oe=a((SH,zh)=>{"use strict";var Kh=F(),R2=TypeError,A2=function(e){var r,t;this.promise=new e(function(n,i){if(r!==void 0||t!==void 0)throw new R2("Bad Promise constructor");r=n,t=i}),this.resolve=Kh(r),this.reject=Kh(t)};zh.exports.f=function(e){return new A2(e)}});var vy=a(()=>{"use strict";var N2=x(),M2=Z(),vi=jt(),Ze=_(),j2=z(),tt=D(),Vh=_e(),Yh=wt(),$2=Ae(),L2=Bo(),F2=F(),pi=N(),D2=$(),B2=ui(),G2=Uo(),ey=Zo().set,pu=$h(),U2=Fh(),W2=qr(),H2=eu(),ry=Ye(),di=xr(),vu=Xr(),ty=Oe(),mi="Promise",ny=vu.CONSTRUCTOR,K2=vu.REJECTION_EVENT,z2=vu.SUBCLASSING,su=ry.getterFor(mi),V2=ry.set,Zr=di&&di.prototype,Sr=di,li=Zr,iy=Ze.TypeError,cu=Ze.document,du=Ze.process,lu=ty.f,Y2=lu,J2=!!(cu&&cu.createEvent&&Ze.dispatchEvent),ay="unhandledrejection",Q2="rejectionhandled",Jh=0,oy=1,X2=2,mu=1,uy=2,fi,Qh,sy,Xh,cy=function(e){var r;return D2(e)&&pi(r=e.then)?r:!1},ly=function(e,r){var t=r.value,n=r.state===oy,i=n?e.ok:e.fail,o=e.resolve,u=e.reject,l=e.domain,c,s,f;try{i?(n||(r.rejection===uy&&eM(r),r.rejection=mu),i===!0?c=t:(l&&l.enter(),c=i(t),l&&(l.exit(),f=!0)),c===e.promise?u(new iy("Promise-chain cycle")):(s=cy(c))?tt(s,c,o,u):o(c)):u(t)}catch(p){l&&!f&&l.exit(),u(p)}},fy=function(e,r){e.notified||(e.notified=!0,pu(function(){for(var t=e.reactions,n;n=t.get();)ly(n,e);e.notified=!1,r&&!e.rejection&&Z2(e)}))},py=function(e,r,t){var n,i;J2?(n=cu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),Ze.dispatchEvent(n)):n={promise:r,reason:t},!K2&&(i=Ze["on"+e])?i(n):e===ay&&U2("Unhandled promise rejection",t)},Z2=function(e){tt(ey,Ze,function(){var r=e.facade,t=e.value,n=Zh(e),i;if(n&&(i=W2(function(){vi?du.emit("unhandledRejection",t,r):py(ay,r,t)}),e.rejection=vi||Zh(e)?uy:mu,i.error))throw i.value})},Zh=function(e){return e.rejection!==mu&&!e.parent},eM=function(e){tt(ey,Ze,function(){var r=e.facade;vi?du.emit("rejectionHandled",r):py(Q2,r,e.value)})},et=function(e,r,t){return function(n){e(r,n,t)}},rt=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=X2,fy(e,!0))},fu=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new iy("Promise can't be resolved itself");var n=cy(r);n?pu(function(){var i={done:!1};try{tt(n,r,et(fu,i,e),et(rt,i,e))}catch(o){rt(i,o,e)}}):(e.value=r,e.state=oy,fy(e,!1))}catch(i){rt({done:!1},i,e)}}};if(ny&&(Sr=function(r){B2(this,li),F2(r),tt(fi,this);var t=su(this);try{r(et(fu,t),et(rt,t))}catch(n){rt(t,n)}},li=Sr.prototype,fi=function(r){V2(this,{type:mi,done:!1,notified:!1,parent:!1,reactions:new H2,rejection:!1,state:Jh,value:null})},fi.prototype=Vh(li,"then",function(r,t){var n=su(this),i=lu(G2(this,Sr));return n.parent=!0,i.ok=pi(r)?r:!0,i.fail=pi(t)&&t,i.domain=vi?du.domain:void 0,n.state===Jh?n.reactions.add(i):pu(function(){ly(i,n)}),i.promise}),Qh=function(){var e=new fi,r=su(e);this.promise=e,this.resolve=et(fu,r),this.reject=et(rt,r)},ty.f=lu=function(e){return e===Sr||e===sy?new Qh(e):Y2(e)},!M2&&pi(di)&&Zr!==Object.prototype)){Xh=Zr.then,z2||Vh(Zr,"then",function(r,t){var n=this;return new Sr(function(i,o){tt(Xh,n,i,o)}).then(r,t)},{unsafe:!0});try{delete Zr.constructor}catch{}Yh&&Yh(Zr,li)}N2({global:!0,constructor:!0,wrap:!0,forced:ny},{Promise:Sr});sy=j2.Promise;$2(Sr,mi,!1,!0);L2(mi)});var Gt=a((OH,dy)=>{"use strict";var rM=xr(),tM=Ja(),nM=Xr().CONSTRUCTOR;dy.exports=nM||!tM(function(e){rM.all(e).then(void 0,function(){})})});var my=a(()=>{"use strict";var iM=x(),aM=D(),oM=F(),uM=Oe(),sM=qr(),cM=ve(),lM=Gt();iM({target:"Promise",stat:!0,forced:lM},{all:function(r){var t=this,n=uM.f(t),i=n.resolve,o=n.reject,u=sM(function(){var l=oM(t.resolve),c=[],s=0,f=1;cM(r,function(p){var v=s++,d=!1;f++,aM(l,t,p).then(function(h){d||(d=!0,c[v]=h,--f||i(c))},o)}),--f||i(c)});return u.error&&o(u.value),n.promise}})});var yy=a(()=>{"use strict";var fM=x(),pM=Z(),vM=Xr().CONSTRUCTOR,yu=xr(),dM=U(),mM=N(),hM=_e(),hy=yu&&yu.prototype;fM({target:"Promise",proto:!0,forced:vM,real:!0},{catch:function(e){return this.then(void 0,e)}});!pM&&mM(yu)&&(hu=dM("Promise").prototype.catch,hy.catch!==hu&&hM(hy,"catch",hu,{unsafe:!0}));var hu});var gy=a(()=>{"use strict";var yM=x(),gM=D(),bM=F(),qM=Oe(),xM=qr(),SM=ve(),wM=Gt();yM({target:"Promise",stat:!0,forced:wM},{race:function(r){var t=this,n=qM.f(t),i=n.reject,o=xM(function(){var u=bM(t.resolve);SM(r,function(l){gM(u,t,l).then(n.resolve,i)})});return o.error&&i(o.value),n.promise}})});var by=a(()=>{"use strict";var TM=x(),OM=Oe(),CM=Xr().CONSTRUCTOR;TM({target:"Promise",stat:!0,forced:CM},{reject:function(r){var t=OM.f(this),n=t.reject;return n(r),t.promise}})});var gu=a((NH,qy)=>{"use strict";var EM=Q(),IM=$(),kM=Oe();qy.exports=function(e,r){if(EM(e),IM(r)&&r.constructor===e)return r;var t=kM.f(e),n=t.resolve;return n(r),t.promise}});var wy=a(()=>{"use strict";var PM=x(),_M=U(),xy=Z(),RM=xr(),Sy=Xr().CONSTRUCTOR,AM=gu(),NM=_M("Promise"),MM=xy&&!Sy;PM({target:"Promise",stat:!0,forced:xy||Sy},{resolve:function(r){return AM(MM&&this===NM?RM:this,r)}})});var Ty=a(()=>{"use strict";vy();my();yy();gy();by();wy()});var bu=a(()=>{"use strict";var jM=x(),$M=D(),LM=F(),FM=Oe(),DM=qr(),BM=ve(),GM=Gt();jM({target:"Promise",stat:!0,forced:GM},{allSettled:function(r){var t=this,n=FM.f(t),i=n.resolve,o=n.reject,u=DM(function(){var l=LM(t.resolve),c=[],s=0,f=1;BM(r,function(p){var v=s++,d=!1;f++,$M(l,t,p).then(function(h){d||(d=!0,c[v]={status:"fulfilled",value:h},--f||i(c))},function(h){d||(d=!0,c[v]={status:"rejected",reason:h},--f||i(c))})}),--f||i(c)});return u.error&&o(u.value),n.promise}})});var qu=a(()=>{"use strict";var UM=x(),WM=D(),HM=F(),KM=U(),zM=Oe(),VM=qr(),YM=ve(),JM=Gt(),Oy="No one promise resolved";UM({target:"Promise",stat:!0,forced:JM},{any:function(r){var t=this,n=KM("AggregateError"),i=zM.f(t),o=i.resolve,u=i.reject,l=VM(function(){var c=HM(t.resolve),s=[],f=0,p=1,v=!1;YM(r,function(d){var h=f++,m=!1;p++,WM(c,t,d).then(function(y){m||v||(v=!0,o(y))},function(y){m||v||(m=!0,s[h]=y,--p||u(new n(s,Oy)))})}),--p||u(new n(s,Oy))});return l.error&&u(l.value),i.promise}})});var Su=a(()=>{"use strict";var QM=x(),XM=_(),ZM=Ar(),ej=lr(),rj=Oe(),tj=F(),Ey=qr(),xu=XM.Promise,Cy=!1,nj=!xu||!xu.try||Ey(function(){xu.try(function(e){Cy=e===8},8)}).error||!Cy;QM({target:"Promise",stat:!0,forced:nj},{try:function(e){var r=arguments.length>1?ej(arguments,1):[],t=rj.f(this),n=Ey(function(){return ZM(tj(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var wu=a(()=>{"use strict";var ij=x(),aj=Oe();ij({target:"Promise",stat:!0},{withResolvers:function(){var r=aj.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var _y=a(()=>{"use strict";var oj=x(),uj=Z(),hi=xr(),sj=P(),ky=U(),Py=N(),cj=Uo(),Iy=gu(),lj=_e(),Ou=hi&&hi.prototype,fj=!!hi&&sj(function(){Ou.finally.call({then:function(){}},function(){})});oj({target:"Promise",proto:!0,real:!0,forced:fj},{finally:function(e){var r=cj(this,ky("Promise")),t=Py(e);return this.then(t?function(n){return Iy(r,e()).then(function(){return n})}:e,t?function(n){return Iy(r,e()).then(function(){throw n})}:e)}});!uj&&Py(hi)&&(Tu=ky("Promise").prototype.finally,Ou.finally!==Tu&&lj(Ou,"finally",Tu,{unsafe:!0}));var Tu});var Ay=a((YH,Ry)=>{"use strict";Fo();yr();It();Ty();bu();qu();Su();wu();_y();vr();var pj=z();Ry.exports=pj.Promise});var My=a((JH,Ny)=>{"use strict";var vj=Ay();gr();Ny.exports=vj});var jy=a(()=>{"use strict";Su()});var $y=a(()=>{"use strict";wu()});var Fy=a((rK,Ly)=>{"use strict";var dj=My();jy();$y();Ly.exports=dj});var Dy=a(()=>{"use strict";Fo()});var By=a(()=>{"use strict";bu()});var Gy=a(()=>{"use strict";qu()});var Wy=a((sK,Uy)=>{"use strict";var mj=Fy();Dy();By();Gy();Uy.exports=mj});var nt=a((cK,Hy)=>{"use strict";Hy.exports=Wy()});var Vy=a((dK,zy)=>{"use strict";To();var hj=Hr();zy.exports=hj.f("asyncIterator")});var Jy=a((mK,Yy)=>{"use strict";var yj=Vy();Yy.exports=yj});var Xy=a((hK,Qy)=>{"use strict";var gj=Jy();Qy.exports=gj});var eg=a((yK,Zy)=>{"use strict";var bj=Xy();Zy.exports=bj});var yi=a((gK,rg)=>{"use strict";rg.exports=eg()});var ag=a(()=>{"use strict";var qj=x(),xj=P(),Sj=re(),ig=St(),wj=Da(),Tj=xj(function(){ig(1)});qj({target:"Object",stat:!0,forced:Tj,sham:!wj},{getPrototypeOf:function(r){return ig(Sj(r))}})});var ug=a((wK,og)=>{"use strict";ag();var Oj=z();og.exports=Oj.Object.getPrototypeOf});var cg=a((TK,sg)=>{"use strict";var Cj=ug();sg.exports=Cj});var fg=a((OK,lg)=>{"use strict";var Ej=cg();lg.exports=Ej});var vg=a((CK,pg)=>{"use strict";var Ij=fg();pg.exports=Ij});var gi=a((EK,dg)=>{"use strict";dg.exports=vg()});var hg=a(()=>{"use strict";var kj=x(),Pj=A(),_j=Pe(),Rj=Pj([].reverse),mg=[1,2];kj({target:"Array",proto:!0,forced:String(mg)===String(mg.reverse())},{reverse:function(){return _j(this)&&(this.length=this.length),Rj(this)}})});var gg=a((PK,yg)=>{"use strict";hg();var Aj=oe();yg.exports=Aj("Array","reverse")});var qg=a((_K,bg)=>{"use strict";var Nj=B(),Mj=gg(),Iu=Array.prototype;bg.exports=function(e){var r=e.reverse;return e===Iu||Nj(Iu,e)&&r===Iu.reverse?Mj:r}});var Sg=a((RK,xg)=>{"use strict";var jj=qg();xg.exports=jj});var Tg=a((AK,wg)=>{"use strict";var $j=Sg();wg.exports=$j});var Cg=a((NK,Og)=>{"use strict";var Lj=Tg();Og.exports=Lj});var Ig=a((MK,Eg)=>{"use strict";Eg.exports=Cg()});var ku=a((jK,Ht)=>{function Fj(e,r){this.v=e,this.k=r}Ht.exports=Fj,Ht.exports.__esModule=!0,Ht.exports.default=Ht.exports});var kg=a(()=>{"use strict";var Dj=x(),Bj=G(),Gj=Je();Dj({target:"Object",stat:!0,sham:!Bj},{create:Gj})});var _g=a((FK,Pg)=>{"use strict";kg();var Uj=z(),Wj=Uj.Object;Pg.exports=function(r,t){return Wj.create(r,t)}});var Ag=a((DK,Rg)=>{"use strict";var Hj=_g();Rg.exports=Hj});var Mg=a((BK,Ng)=>{"use strict";var Kj=Ag();Ng.exports=Kj});var $g=a((GK,jg)=>{"use strict";var zj=Mg();jg.exports=zj});var bi=a((UK,Lg)=>{"use strict";Lg.exports=$g()});var _u=a((WK,Gg)=>{"use strict";var Dg=A(),Vj=F(),Yj=$(),Jj=W(),Fg=lr(),Qj=Rr(),Bg=Function,Xj=Dg([].concat),Zj=Dg([].join),Pu={},e$=function(e,r,t){if(!Jj(Pu,r)){for(var n=[],i=0;i<r;i++)n[i]="a["+i+"]";Pu[r]=Bg("C,a","return new C("+Zj(n,",")+")")}return Pu[r](e,t)};Gg.exports=Qj?Bg.bind:function(r){var t=Vj(this),n=t.prototype,i=Fg(arguments,1),o=function(){var l=Xj(i,Fg(arguments));return this instanceof o?e$(t,l.length,l):t.apply(r,l)};return Yj(n)&&(o.prototype=n),o}});var Wg=a(()=>{"use strict";var r$=x(),Ug=_u();r$({target:"Function",proto:!0,forced:Function.bind!==Ug},{bind:Ug})});var Kg=a((zK,Hg)=>{"use strict";Wg();var t$=oe();Hg.exports=t$("Function","bind")});var Vg=a((VK,zg)=>{"use strict";var n$=B(),i$=Kg(),Ru=Function.prototype;zg.exports=function(e){var r=e.bind;return e===Ru||n$(Ru,e)&&r===Ru.bind?i$:r}});var Jg=a((YK,Yg)=>{"use strict";var a$=Vg();Yg.exports=a$});var Xg=a((JK,Qg)=>{"use strict";var o$=Jg();Qg.exports=o$});var eb=a((QK,Zg)=>{"use strict";var u$=Xg();Zg.exports=u$});var Kt=a((XK,rb)=>{"use strict";rb.exports=eb()});var tb=a(()=>{"use strict";var s$=x(),c$=wt();s$({target:"Object",stat:!0},{setPrototypeOf:c$})});var ib=a((rz,nb)=>{"use strict";tb();var l$=z();nb.exports=l$.Object.setPrototypeOf});var ob=a((tz,ab)=>{"use strict";var f$=ib();ab.exports=f$});var sb=a((nz,ub)=>{"use strict";var p$=ob();ub.exports=p$});var lb=a((iz,cb)=>{"use strict";var v$=sb();cb.exports=v$});var qi=a((az,fb)=>{"use strict";fb.exports=lb()});var vb=a(()=>{"use strict";var d$=x(),m$=G(),pb=te().f;d$({target:"Object",stat:!0,forced:Object.defineProperty!==pb,sham:!m$},{defineProperty:pb})});var hb=a((sz,mb)=>{"use strict";vb();var h$=z(),db=h$.Object,y$=mb.exports=function(r,t,n){return db.defineProperty(r,t,n)};db.defineProperty.sham&&(y$.sham=!0)});var gb=a((cz,yb)=>{"use strict";var g$=hb();yb.exports=g$});var qb=a((lz,bb)=>{"use strict";var b$=gb();bb.exports=b$});var Sb=a((fz,xb)=>{"use strict";var q$=qb();xb.exports=q$});var zt=a((pz,wb)=>{"use strict";wb.exports=Sb()});var Au=a((vz,Me)=>{var x$=zt();function xi(e,r,t,n){var i=x$;try{i({},"",{})}catch{i=0}Me.exports=xi=function(u,l,c,s){function f(p,v){xi(u,p,function(d){return this._invoke(p,v,d)})}l?i?i(u,l,{value:c,enumerable:!s,configurable:!s,writable:!s}):u[l]=c:(f("next",0),f("throw",1),f("return",2))},Me.exports.__esModule=!0,Me.exports.default=Me.exports,xi(e,r,t,n)}Me.exports=xi,Me.exports.__esModule=!0,Me.exports.default=Me.exports});var Mu=a((dz,je)=>{var Tb=Te(),Nu=bi(),S$=Kt(),w$=gi(),Ob=qi(),Ee=Au();function Cb(){var e,r,t=typeof Tb=="function"?Tb:{},n=t.iterator||"@@iterator",i=t.toStringTag||"@@toStringTag";function o(d,h,m,y){var q=h&&h.prototype instanceof l?h:l,b=Nu(q.prototype);return Ee(b,"_invoke",function(I,E,S){var T,w,C,j=0,qe=S||[],k=!1,ee={p:0,n:0,v:e,a:xe,f:S$(xe).call(xe,e,4),d:function(L,de){return T=L,w=0,C=e,ee.n=de,u}};function xe(J,L){for(w=J,C=L,r=0;!k&&j&&!de&&r<qe.length;r++){var de,O=qe[r],Pr=ee.p,He=O[2];J>3?(de=He===L)&&(C=O[(w=O[4])?5:(w=3,3)],O[4]=O[5]=e):O[0]<=Pr&&((de=J<2&&Pr<O[1])?(w=0,ee.v=L,ee.n=O[1]):Pr<He&&(de=J<3||O[0]>L||L>He)&&(O[4]=J,O[5]=L,ee.n=He,w=0))}if(de||J>1)return u;throw k=!0,L}return function(J,L,de){if(j>1)throw TypeError("Generator is already running");for(k&&L===1&&xe(L,de),w=L,C=de;(r=w<2?e:C)||!k;){T||(w?w<3?(w>1&&(ee.n=-1),xe(w,C)):ee.n=C:ee.v=C);try{if(j=2,T){if(w||(J="next"),r=T[J]){if(!(r=r.call(T,C)))throw TypeError("iterator result is not an object");if(!r.done)return r;C=r.value,w<2&&(w=0)}else w===1&&(r=T.return)&&r.call(T),w<2&&(C=TypeError("The iterator does not provide a '"+J+"' method"),w=1);T=e}else if((r=(k=ee.n<0)?C:I.call(E,ee))!==u)break}catch(O){T=e,w=1,C=O}finally{j=1}}return{value:r,done:k}}}(d,m,y),!0),b}var u={};function l(){}function c(){}function s(){}r=w$;var f=[][n]?r(r([][n]())):(Ee(r={},n,function(){return this}),r),p=s.prototype=l.prototype=Nu(f);function v(d){return Ob?Ob(d,s):(d.__proto__=s,Ee(d,i,"GeneratorFunction")),d.prototype=Nu(p),d}return c.prototype=s,Ee(p,"constructor",s),Ee(s,"constructor",c),c.displayName="GeneratorFunction",Ee(s,i,"GeneratorFunction"),Ee(p),Ee(p,i,"Generator"),Ee(p,n,function(){return this}),Ee(p,"toString",function(){return"[object Generator]"}),(je.exports=Cb=function(){return{w:o,m:v}},je.exports.__esModule=!0,je.exports.default=je.exports)()}je.exports=Cb,je.exports.__esModule=!0,je.exports.default=je.exports});var Lu=a((mz,Vt)=>{var T$=Te(),O$=yi(),C$=ku(),ju=Au();function $u(e,r){function t(i,o,u,l){try{var c=e[i](o),s=c.value;return s instanceof C$?r.resolve(s.v).then(function(f){t("next",f,u,l)},function(f){t("throw",f,u,l)}):r.resolve(s).then(function(f){c.value=f,u(c)},function(f){return t("throw",f,u,l)})}catch(f){l(f)}}var n;this.next||(ju($u.prototype),ju($u.prototype,typeof T$=="function"&&O$||"@asyncIterator",function(){return this})),ju(this,"_invoke",function(i,o,u){function l(){return new r(function(c,s){t(i,u,c,s)})}return n=n?n.then(l,l):l()},!0)}Vt.exports=$u,Vt.exports.__esModule=!0,Vt.exports.default=Vt.exports});var Fu=a((hz,Yt)=>{var E$=nt(),I$=Mu(),k$=Lu();function P$(e,r,t,n,i){return new k$(I$().w(e,r,t,n),i||E$)}Yt.exports=P$,Yt.exports.__esModule=!0,Yt.exports.default=Yt.exports});var Eb=a((yz,Jt)=>{var _$=Fu();function R$(e,r,t,n,i){var o=_$(e,r,t,n,i);return o.next().then(function(u){return u.done?u.value:o.next()})}Jt.exports=R$,Jt.exports.__esModule=!0,Jt.exports.default=Jt.exports});var Pb=a((gz,kb)=>{"use strict";var Ib=ze(),A$=TypeError;kb.exports=function(e,r){if(!delete e[r])throw new A$("Cannot delete property "+Ib(r)+" of "+Ib(e))}});var _b=a(()=>{"use strict";var N$=x(),M$=re(),j$=fe(),$$=Gr(),L$=Pb(),F$=Et(),D$=[].unshift(0)!==1,B$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},G$=D$||!B$();N$({target:"Array",proto:!0,arity:1,forced:G$},{unshift:function(r){var t=M$(this),n=j$(t),i=arguments.length;if(i){F$(n+i);for(var o=n;o--;){var u=o+i;o in t?t[u]=t[o]:L$(t,u)}for(var l=0;l<i;l++)t[l]=arguments[l]}return $$(t,n+i)}})});var Ab=a((xz,Rb)=>{"use strict";_b();var U$=oe();Rb.exports=U$("Array","unshift")});var Mb=a((Sz,Nb)=>{"use strict";var W$=B(),H$=Ab(),Du=Array.prototype;Nb.exports=function(e){var r=e.unshift;return e===Du||W$(Du,e)&&r===Du.unshift?H$:r}});var $b=a((wz,jb)=>{"use strict";var K$=Mb();jb.exports=K$});var Fb=a((Tz,Lb)=>{"use strict";var z$=$b();Lb.exports=z$});var Bb=a((Oz,Db)=>{"use strict";var V$=Fb();Db.exports=V$});var Ub=a((Cz,Gb)=>{"use strict";Gb.exports=Bb()});var Wb=a((Ez,Qt)=>{var Y$=Ub();function J$(e){var r=Object(e),t=[];for(var n in r)Y$(t).call(t,n);return function i(){for(;t.length;)if((n=t.pop())in r)return i.value=n,i.done=!1,i;return i.done=!0,i}}Qt.exports=J$,Qt.exports.__esModule=!0,Qt.exports.default=Qt.exports});var Kb=a((Iz,Hb)=>{"use strict";yr();It();vr();Co();var Q$=Hr();Hb.exports=Q$.f("iterator")});var Vb=a((kz,zb)=>{"use strict";var X$=Kb();gr();zb.exports=X$});var Jb=a((Pz,Yb)=>{"use strict";var Z$=Vb();Yb.exports=Z$});var Xb=a((_z,Qb)=>{"use strict";var eL=Jb();Qb.exports=eL});var Xt=a((Rz,Zb)=>{"use strict";Zb.exports=Xb()});var eq=a((Az,$e)=>{var Si=Te(),rL=Xt();function Bu(e){"@babel/helpers - typeof";return $e.exports=Bu=typeof Si=="function"&&typeof rL=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Si=="function"&&r.constructor===Si&&r!==Si.prototype?"symbol":typeof r},$e.exports.__esModule=!0,$e.exports.default=$e.exports,Bu(e)}$e.exports=Bu,$e.exports.__esModule=!0,$e.exports.default=$e.exports});var rq=a((Nz,Zt)=>{var tL=eq().default,nL=Te(),iL=Xt();function aL(e){if(e!=null){var r=e[typeof nL=="function"&&iL||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(tL(e)+" is not iterable")}Zt.exports=aL,Zt.exports.__esModule=!0,Zt.exports.default=Zt.exports});var iq=a((Mz,Le)=>{var tq=gi(),oL=Ig(),uL=ku(),sL=Mu(),cL=Eb(),lL=Fu(),fL=Lu(),pL=Wb(),nq=rq();function Gu(){"use strict";var e=sL(),r=e.m(Gu),t=(tq?tq(r):r.__proto__).constructor;function n(u){var l=typeof u=="function"&&u.constructor;return!!l&&(l===t||(l.displayName||l.name)==="GeneratorFunction")}var i={throw:1,return:2,break:3,continue:3};function o(u){var l,c;return function(s){l||(l={stop:function(){return c(s.a,2)},catch:function(){return s.v},abrupt:function(p,v){return c(s.a,i[p],v)},delegateYield:function(p,v,d){return l.resultName=v,c(s.d,nq(p),d)},finish:function(p){return c(s.f,p)}},c=function(p,v,d){s.p=l.prev,s.n=l.next;try{return p(v,d)}finally{l.next=s.n}}),l.resultName&&(l[l.resultName]=s.v,l.resultName=void 0),l.sent=s.v,l.next=s.n;try{return u.call(this,l)}finally{s.p=l.prev,s.n=l.next}}}return(Le.exports=Gu=function(){return{wrap:function(c,s,f,p){return e.w(o(c),s,f,p&&oL(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(c,s){return new uL(c,s)},AsyncIterator:fL,async:function(c,s,f,p,v){return(n(s)?lL:cL)(o(c),s,f,p,v)},keys:pL,values:nq}},Le.exports.__esModule=!0,Le.exports.default=Le.exports)()}Le.exports=Gu,Le.exports.__esModule=!0,Le.exports.default=Le.exports});var se=a((jz,aq)=>{var wi=iq()();aq.exports=wi;try{regeneratorRuntime=wi}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=wi:Function("r","regeneratorRuntime = r")(wi)}});var Uu=a((Oi,uq)=>{"use strict";Object.defineProperty(Oi,"__esModule",{value:!0});var Ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oq=function(){function e(r,t){var n=[],i=!0,o=!1,u=void 0;try{for(var l=r[Symbol.iterator](),c;!(i=(c=l.next()).done)&&(n.push(c.value),!(t&&n.length===t));i=!0);}catch(s){o=!0,u=s}finally{try{!i&&l.return&&l.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Oi.default=vL;function vL(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(i){return i.type==="tag"||i.type==="script"||i.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var i=this.attribs,o=Object.keys(i),u=o.reduce(function(l,c,s){return l[s]={name:c,value:i[c]},l},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var i=[];return rr(this.childTags,function(o){(o.name===n||n==="*")&&i.push(o)}),i}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var i=n.trim().replace(/\s+/g," ").split(" "),o=[];return rr([this],function(u){var l=u.attribs.class;l&&i.every(function(c){return l.indexOf(c)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var i=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=dL(n),u=o.shift(),l=o.length;return u(this).filter(function(c){for(var s=0;s<l;){if(c=o[s](c,i),!c)return!1;s+=1}return!0})}),t.contains||(t.contains=function(n){var i=!1;return rr([this],function(o,u){o===n&&(i=!0,u())}),i}),!0}function dL(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,i=r.split(":"),o=oq(i,2),u=o[0],l=o[1],c=null,s=null;if(function(){switch(!0){case/>/.test(u):s=function(S){return function(T){return T(S.parent)&&S.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");c=function(S){var T=S.attribs.class;return T&&h.every(function(w){return T.indexOf(w)>-1})},s=function(S,T){return n?S.getElementsByClassName(h.join(" ")):typeof S=="function"?S(c):en(S,T,c)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),y=oq(m,2),q=y[0],b=y[1];c=function(S){var T=Object.keys(S.attribs).indexOf(q)>-1;return!!(T&&(!b||S.attribs[q]===b))},s=function(S,T){if(n){var w=function(){var C=[];return rr([S],function(j){c(j)&&C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":Ti(w))==="object")return w.v}return typeof S=="function"?S(c):en(S,T,c)};break;case/^#/.test(u):var I=u.substr(1);c=function(S){return S.attribs.id===I},s=function(S,T){if(n){var w=function(){var C=[];return rr([S],function(j,qe){c(j)&&(C.push(j),qe())}),{v:C}}();if((typeof w>"u"?"undefined":Ti(w))==="object")return w.v}return typeof S=="function"?S(c):en(S,T,c)};break;case/\*/.test(u):c=function(S){return!0},s=function(S,T){if(n){var w=function(){var C=[];return rr([S],function(j){return C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":Ti(w))==="object")return w.v}return typeof S=="function"?S(c):en(S,T,c)};break;default:c=function(S){return S.name===u},s=function(S,T){if(n){var w=function(){var C=[];return rr([S],function(j){c(j)&&C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":Ti(w))==="object")return w.v}return typeof S=="function"?S(c):en(S,T,c)}}}(),!l)return s;var f=l.match(/-(child|type)\((\d+)\)$/),p=f[1],v=parseInt(f[2],10)-1,d=function(m){if(m){var y=m.parent.childTags;p==="type"&&(y=y.filter(c));var q=y.findIndex(function(b){return b===m});if(q===v)return!0}return!1};return function(m){var y=s(m);return n?y.reduce(function(q,b){return d(b)&&q.push(b),q},[]):d(y)&&y}})}function rr(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&rr(t.childTags,r)})}function en(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}uq.exports=Oi.default});var Ei=a(Ci=>{"use strict";Object.defineProperty(Ci,"__esModule",{value:!0});Ci.convertNodeList=mL;Ci.escapeValue=hL;function mL(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function hL(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var yq=a((Ii,hq)=>{"use strict";Object.defineProperty(Ii,"__esModule",{value:!0});Ii.default=yL;var fq=Ei(),sq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function yL(e,r){var t=r.root,n=t===void 0?document:t,i=r.skip,o=i===void 0?null:i,u=r.priority,l=u===void 0?["id","class","href","src"]:u,c=r.ignore,s=c===void 0?{}:c,f=[],p=e,v=f.length,d=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(q){return typeof q!="function"?function(b){return b===q}:q}),m=function(b){return o&&h.some(function(I){return I(b)})};for(Object.keys(s).forEach(function(q){q==="class"&&(d=!0);var b=s[q];typeof b!="function"&&(typeof b=="number"&&(b=b.toString()),typeof b=="string"&&(b=new RegExp((0,fq.escapeValue)(b).replace(/\\/g,"\\\\"))),typeof b=="boolean"&&(b=b?/(?:)/:/.^/),s[q]=function(I,E){return b.test(E)})}),d&&function(){var q=s.attribute;s.attribute=function(b,I,E){return s.class(I)||q&&q(b,I,E)}}();p!==n;){if(m(p)!==!0){if(cq(l,p,s,f,n)||lq(p,s,f,n))break;cq(l,p,s,f),f.length===v&&lq(p,s,f),f.length===v&&gL(l,p,s,f)}p=p.parentNode,v=f.length}if(p===n){var y=dq(l,p,s);f.unshift(y)}return f.join(" ")}function cq(e,r,t,n){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=pq(e,r,t);if(o){var u=i.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function pq(e,r,t){for(var n=r.attributes,i=Object.keys(n).sort(function(m,y){var q=e.indexOf(n[m].name),b=e.indexOf(n[y].name);return b===-1?q===-1?0:-1:q-b}),o=0,u=i.length;o<u;o++){var l=i[o],c=n[l],s=c.name,f=(0,fq.escapeValue)(c.value),p=t[s]||t.attribute,v=sq[s]||sq.attribute;if(!mq(p,s,f,v)){var d="["+s+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(s==="id"&&(d="#"+f),s==="class")){var h=f.trim().replace(/\s+/g,".");d="."+h}return d}}return null}function lq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,i=vq(e,r);if(i){var o=n.getElementsByTagName(i);if(o.length===1)return t.unshift(i),!0}return!1}function vq(e,r){var t=e.tagName.toLowerCase();return mq(r.tag,null,t)?null:t}function gL(e,r,t,n){for(var i=r.parentNode,o=i.childTags||i.children,u=0,l=o.length;u<l;u++){var c=o[u];if(c===r){var s=dq(e,c,t);if(!s)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,c,t,s);var f="> "+s+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function dq(e,r,t){var n=pq(e,r,t);return n||(n=vq(r,t)),n}function mq(e,r,t,n){if(!t)return!0;var i=e||n;return i?i(r,t,n):!1}hq.exports=Ii.default});var Wu=a((Pi,gq)=>{"use strict";Object.defineProperty(Pi,"__esModule",{value:!0});Pi.default=wL;var bL=Uu(),qL=SL(bL),xL=Ei();function SL(e){return e&&e.__esModule?e:{default:e}}function wL(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,xL.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,qL.default)(r[0],t),i=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(i.length<2)return ki("",e,"",r);for(var o=[i.pop()];i.length>1;){var u=i.pop(),l=i.join(" "),c=o.join(" "),s=l+" "+c,f=document.querySelectorAll(s);f.length!==r.length&&o.unshift(ki(l,u,c,r))}return o.unshift(i[0]),i=o,i[0]=ki("",i[0],i.slice(1).join(" "),r),i[i.length-1]=ki(i.slice(0,-1).join(" "),i[i.length-1],"",r),n&&delete global.document,i.join(" ").replace(/>/g,"> ").trim()}function ki(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var i=r.replace(/=.*$/,"]"),o=""+e+i+t,u=document.querySelectorAll(o);if(it(u,n))r=i;else for(var l=document.querySelectorAll(""+e+i),c=function(){var E=l[s];if(n.some(function(T){return E.contains(T)})){var S=E.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),it(u,n)&&(r=S),"break"}},s=0,f=l.length;s<f;s++){var o,u,p=c();if(p==="break")break}}if(/>/.test(r)){var v=r.replace(/>/,""),o=""+e+v+t,u=document.querySelectorAll(o);it(u,n)&&(r=v)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);it(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(I){return"."+I}).sort(function(I,E){return I.length-E.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);it(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var y=document.querySelectorAll(""+e+r),q=function(){var E=y[s];if(n.some(function(T){return E.contains(T)})){var S=E.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),it(u,n)&&(r=S),"break"}},s=0,f=y.length;s<f;s++){var o,u,b=q();if(b==="break")break}}return r}function it(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var i=0;i<t;i++)if(e[i]===n)return!0;return!1})}gq.exports=Pi.default});var Hu=a(_i=>{"use strict";Object.defineProperty(_i,"__esModule",{value:!0});_i.getCommonAncestor=TL;_i.getCommonProperties=OL;function TL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,i=[];e.forEach(function(p,v){for(var d=[];p!==n;)p=p.parentNode,d.unshift(p);i[v]=d}),i.sort(function(p,v){return p.length-v.length});for(var o=i.shift(),u=null,l=function(){var v=o[c],d=i.some(function(h){return!h.some(function(m){return m===v})});if(d)return"break";u=v},c=0,s=o.length;c<s;c++){var f=l();if(f==="break")break}return u}function OL(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,i=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(c){return u.some(function(s){return s===c})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(i!==void 0&&function(){var c=t.attributes,s=Object.keys(c).reduce(function(v,d){var h=c[d],m=h.name;return h&&m!=="class"&&(v[m]=h.value),v},{}),f=Object.keys(s),p=Object.keys(i);f.length?p.length?(i=p.reduce(function(v,d){var h=i[d];return h===s[d]&&(v[d]=h),v},{}),Object.keys(i).length?r.attributes=i:delete r.attributes):r.attributes=s:delete r.attributes}(),o!==void 0){var l=t.tagName.toLowerCase();o?l!==o&&delete r.tag:r.tag=l}}),r}});var Tq=a(rn=>{"use strict";Object.defineProperty(rn,"__esModule",{value:!0});var CL=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};rn.getSingleSelector=zu;rn.getMultiSelector=wq;rn.default=RL;var EL=Uu(),qq=Ku(EL),IL=yq(),kL=Ku(IL),PL=Wu(),xq=Ku(PL),bq=Ei(),Sq=Hu();function Ku(e){return e&&e.__esModule?e:{default:e}}function zu(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":CL(e))+'")');var t=(0,qq.default)(e,r),n=(0,kL.default)(e,r),i=(0,xq.default)(n,e,r);return t&&delete global.document,i}function wq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,bq.convertNodeList)(e)),e.some(function(s){return s.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,qq.default)(e[0],r),n=(0,Sq.getCommonAncestor)(e,r),i=zu(n,r),o=_L(e),u=o[0],l=(0,xq.default)(i+" "+u,e,r),c=(0,bq.convertNodeList)(document.querySelectorAll(l));return e.every(function(s){return c.some(function(f){return f===s})})?(t&&delete global.document,l):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function _L(e){var r=(0,Sq.getCommonProperties)(e),t=r.classes,n=r.attributes,i=r.tag,o=[];if(i&&o.push(i),t){var u=t.map(function(c){return"."+c}).join("");o.push(u)}if(n){var l=Object.keys(n).reduce(function(c,s){return c.push("["+s+'="'+n[s]+'"]'),c},[]).join("");o.push(l)}return o.length,[o.join("")]}function RL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?wq(e,r):zu(e,r)}});var Eq=a(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.default=ie.common=ie.optimize=ie.getMultiSelector=ie.getSingleSelector=ie.select=void 0;var Vu=Tq();Object.defineProperty(ie,"getSingleSelector",{enumerable:!0,get:function(){return Vu.getSingleSelector}});Object.defineProperty(ie,"getMultiSelector",{enumerable:!0,get:function(){return Vu.getMultiSelector}});var Oq=Cq(Vu),AL=Wu(),NL=Cq(AL),ML=Hu(),jL=$L(ML);function $L(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Cq(e){return e&&e.__esModule?e:{default:e}}ie.select=Oq.default;ie.optimize=NL.default;ie.common=jL;ie.default=Oq.default});var Iq=a(()=>{"use strict";var zL=x(),VL=Pe();zL({target:"Array",stat:!0},{isArray:VL})});var Pq=a((Zz,kq)=>{"use strict";Iq();var YL=z();kq.exports=YL.Array.isArray});var Rq=a((eV,_q)=>{"use strict";var JL=Pq();_q.exports=JL});var Nq=a((rV,Aq)=>{"use strict";var QL=Rq();Aq.exports=QL});var jq=a((tV,Mq)=>{"use strict";var XL=Nq();Mq.exports=XL});var Lq=a((nV,$q)=>{"use strict";$q.exports=jq()});var Bq=a(()=>{"use strict";var ZL=x(),eF=re(),rF=fe(),tF=Gr(),nF=Et(),iF=P(),aF=iF(function(){return[].push.call({length:4294967296},1)!==4294967297}),oF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},uF=aF||!oF();ZL({target:"Array",proto:!0,arity:1,forced:uF},{push:function(r){var t=eF(this),n=rF(t),i=arguments.length;nF(n+i);for(var o=0;o<i;o++)t[n]=arguments[o],n++;return tF(t,n),n}})});var Uq=a((uV,Gq)=>{"use strict";Bq();var sF=oe();Gq.exports=sF("Array","push")});var Hq=a((sV,Wq)=>{"use strict";var cF=B(),lF=Uq(),Yu=Array.prototype;Wq.exports=function(e){var r=e.push;return e===Yu||cF(Yu,e)&&r===Yu.push?lF:r}});var zq=a((cV,Kq)=>{"use strict";var fF=Hq();Kq.exports=fF});var Yq=a((lV,Vq)=>{"use strict";var pF=zq();Vq.exports=pF});var Qq=a((fV,Jq)=>{"use strict";var vF=Yq();Jq.exports=vF});var Ju=a((pV,Xq)=>{"use strict";Xq.exports=Qq()});var cx=a(()=>{"use strict";var dF=x(),mF=Pt().map,hF=bt(),yF=hF("map");dF({target:"Array",proto:!0,forced:!yF},{map:function(r){return mF(this,r,arguments.length>1?arguments[1]:void 0)}})});var fx=a((DV,lx)=>{"use strict";cx();var gF=oe();lx.exports=gF("Array","map")});var vx=a((BV,px)=>{"use strict";var bF=B(),qF=fx(),Xu=Array.prototype;px.exports=function(e){var r=e.map;return e===Xu||bF(Xu,e)&&r===Xu.map?qF:r}});var mx=a((GV,dx)=>{"use strict";var xF=vx();dx.exports=xF});var yx=a((UV,hx)=>{"use strict";var SF=mx();hx.exports=SF});var bx=a((WV,gx)=>{"use strict";var wF=yx();gx.exports=wF});var xx=a((HV,qx)=>{"use strict";qx.exports=bx()});var wx=a((KV,Sx)=>{Sx.exports=xx()});var Ox=a((zV,Tx)=>{Tx.exports=nt()});var Px=a((VV,kx)=>{"use strict";var TF=F(),OF=re(),CF=gn(),EF=fe(),Cx=TypeError,Ex="Reduce of empty array with no initial value",Ix=function(e){return function(r,t,n,i){var o=OF(r),u=CF(o),l=EF(o);if(TF(t),l===0&&n<2)throw new Cx(Ex);var c=e?l-1:0,s=e?-1:1;if(n<2)for(;;){if(c in u){i=u[c],c+=s;break}if(c+=s,e?c<0:l<=c)throw new Cx(Ex)}for(;e?c>=0:l>c;c+=s)c in u&&(i=t(i,u[c],c,o));return i}};kx.exports={left:Ix(!1),right:Ix(!0)}});var Zu=a((YV,_x)=>{"use strict";var IF=P();_x.exports=function(e,r){var t=[][e];return!!t&&IF(function(){t.call(null,r||function(){return 1},1)})}});var Ax=a(()=>{"use strict";var kF=x(),PF=Px().left,_F=Zu(),Rx=Mr(),RF=jt(),AF=!RF&&Rx>79&&Rx<83,NF=AF||!_F("reduce");kF({target:"Array",proto:!0,forced:NF},{reduce:function(r){var t=arguments.length;return PF(this,r,t,t>1?arguments[1]:void 0)}})});var Mx=a((XV,Nx)=>{"use strict";Ax();var MF=oe();Nx.exports=MF("Array","reduce")});var $x=a((ZV,jx)=>{"use strict";var jF=B(),$F=Mx(),es=Array.prototype;jx.exports=function(e){var r=e.reduce;return e===es||jF(es,e)&&r===es.reduce?$F:r}});var Fx=a((e7,Lx)=>{"use strict";var LF=$x();Lx.exports=LF});var Bx=a((r7,Dx)=>{"use strict";var FF=Fx();Dx.exports=FF});var Ux=a((t7,Gx)=>{"use strict";var DF=Bx();Gx.exports=DF});var Hx=a((n7,Wx)=>{"use strict";Wx.exports=Ux()});var zx=a((i7,Kx)=>{Kx.exports=Hx()});var Jx=a((a7,Yx)=>{"use strict";var BF=Pe(),GF=fe(),UF=Et(),WF=V(),HF=Br(),Vx=function(e,r,t,n,i,o,u,l){for(var c=i,s=0,f=u?WF(u,l):!1,p,v;s<n;)s in t&&(p=f?f(t[s],s,r):t[s],o>0&&BF(p)?(v=GF(p),c=Vx(e,r,p,v,c,o-1)-1):(UF(c+1),HF(e,c,p)),c++),s++;return c};Yx.exports=Vx});var Qx=a(()=>{"use strict";var KF=x(),zF=Jx(),VF=F(),YF=re(),JF=fe(),QF=Fn();KF({target:"Array",proto:!0},{flatMap:function(r){var t=YF(this),n=JF(t),i;return VF(r),i=QF(t,0),zF(i,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),i}})});var Xx=a(()=>{"use strict";var XF=Io();XF("flatMap")});var eS=a((l7,Zx)=>{"use strict";Qx();Xx();var ZF=oe();Zx.exports=ZF("Array","flatMap")});var tS=a((f7,rS)=>{"use strict";var eD=B(),rD=eS(),rs=Array.prototype;rS.exports=function(e){var r=e.flatMap;return e===rs||eD(rs,e)&&r===rs.flatMap?rD:r}});var iS=a((p7,nS)=>{"use strict";var tD=tS();nS.exports=tD});var oS=a((v7,aS)=>{"use strict";var nD=iS();aS.exports=nD});var sS=a((d7,uS)=>{"use strict";var iD=oS();uS.exports=iD});var lS=a((m7,cS)=>{"use strict";cS.exports=sS()});var pS=a((h7,fS)=>{fS.exports=lS()});var dS=a((y7,vS)=>{"use strict";Xa();var aD=oe();vS.exports=aD("Array","concat")});var hS=a((g7,mS)=>{"use strict";var oD=B(),uD=dS(),ts=Array.prototype;mS.exports=function(e){var r=e.concat;return e===ts||oD(ts,e)&&r===ts.concat?uD:r}});var gS=a((b7,yS)=>{"use strict";var sD=hS();yS.exports=sD});var qS=a((q7,bS)=>{"use strict";var cD=gS();bS.exports=cD});var SS=a((x7,xS)=>{"use strict";var lD=qS();xS.exports=lD});var TS=a((S7,wS)=>{"use strict";wS.exports=SS()});var ns=a((w7,OS)=>{OS.exports=TS()});var IS=a(()=>{});var PS=a((K7,kS)=>{"use strict";IS();Eo();var qD=Hr();kS.exports=qD.f("toPrimitive")});var RS=a((z7,_S)=>{"use strict";var xD=PS();_S.exports=xD});var NS=a((V7,AS)=>{"use strict";var SD=RS();AS.exports=SD});var jS=a((Y7,MS)=>{"use strict";var wD=NS();MS.exports=wD});var LS=a((J7,$S)=>{"use strict";$S.exports=jS()});var zS=a((y9,KS)=>{"use strict";var OD=$(),CD=Se(),ED=R(),ID=ED("match");KS.exports=function(e){var r;return OD(e)&&((r=e[ID])!==void 0?!!r:CD(e)==="RegExp")}});var YS=a((g9,VS)=>{"use strict";var kD=zS(),PD=TypeError;VS.exports=function(e){if(kD(e))throw new PD("The method doesn't accept regular expressions");return e}});var QS=a((b9,JS)=>{"use strict";var _D=R(),RD=_D("match");JS.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[RD]=!1,"/./"[e](r)}catch{}}return!1}});var ew=a(()=>{"use strict";var AD=x(),ND=ft(),MD=vt().f,jD=Sa(),XS=Ve(),$D=YS(),LD=ur(),FD=QS(),DD=Z(),BD=ND("".slice),GD=Math.min,ZS=FD("startsWith"),UD=!DD&&!ZS&&!!function(){var e=MD(String.prototype,"startsWith");return e&&!e.writable}();AD({target:"String",proto:!0,forced:!UD&&!ZS},{startsWith:function(r){var t=XS(LD(this));$D(r);var n=jD(GD(arguments.length>1?arguments[1]:void 0,t.length)),i=XS(r);return BD(t,n,n+i.length)===i}})});var tw=a((S9,rw)=>{"use strict";ew();var WD=oe();rw.exports=WD("String","startsWith")});var iw=a((w9,nw)=>{"use strict";var HD=B(),KD=tw(),us=String.prototype;nw.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===us||HD(us,e)&&r===us.startsWith?KD:r}});var ow=a((T9,aw)=>{"use strict";var zD=iw();aw.exports=zD});var sw=a((O9,uw)=>{"use strict";var VD=ow();uw.exports=VD});var lw=a((C9,cw)=>{"use strict";var YD=sw();cw.exports=YD});var pw=a((E9,fw)=>{"use strict";fw.exports=lw()});var dw=a((I9,vw)=>{vw.exports=pw()});var mw=a(()=>{"use strict";var JD=x(),QD=Pt().filter,XD=bt(),ZD=XD("filter");JD({target:"Array",proto:!0,forced:!ZD},{filter:function(r){return QD(this,r,arguments.length>1?arguments[1]:void 0)}})});var yw=a((_9,hw)=>{"use strict";mw();var eB=oe();hw.exports=eB("Array","filter")});var bw=a((R9,gw)=>{"use strict";var rB=B(),tB=yw(),ss=Array.prototype;gw.exports=function(e){var r=e.filter;return e===ss||rB(ss,e)&&r===ss.filter?tB:r}});var xw=a((A9,qw)=>{"use strict";var nB=bw();qw.exports=nB});var ww=a((N9,Sw)=>{"use strict";var iB=xw();Sw.exports=iB});var Ow=a((M9,Tw)=>{"use strict";var aB=ww();Tw.exports=aB});var Ew=a((j9,Cw)=>{"use strict";Cw.exports=Ow()});var kw=a(($9,Iw)=>{Iw.exports=Ew()});var Hw=a(()=>{"use strict";var vB=x(),dB=U(),ls=Ar(),mB=_u(),Fw=Go(),hB=Q(),Dw=$(),yB=Je(),Gw=P(),fs=dB("Reflect","construct"),gB=Object.prototype,bB=[].push,Uw=Gw(function(){function e(){}return!(fs(function(){},[],e)instanceof e)}),Ww=!Gw(function(){fs(function(){})}),Bw=Uw||Ww;vB({target:"Reflect",stat:!0,forced:Bw,sham:Bw},{construct:function(r,t){Fw(r),hB(t);var n=arguments.length<3?r:Fw(arguments[2]);if(Ww&&!Uw)return fs(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var i=[null];return ls(bB,i,t),new(ls(mB,r,i))}var o=n.prototype,u=yB(Dw(o)?o:gB),l=ls(r,u,t);return Dw(l)?l:u}})});var zw=a((yY,Kw)=>{"use strict";Hw();var qB=z();Kw.exports=qB.Reflect.construct});var Yw=a((gY,Vw)=>{"use strict";var xB=zw();Vw.exports=xB});var Qw=a((bY,Jw)=>{"use strict";var SB=Yw();Jw.exports=SB});var Zw=a((qY,Xw)=>{"use strict";var wB=Qw();Xw.exports=wB});var Li=a((xY,eT)=>{"use strict";eT.exports=Zw()});var tT=a((SY,rT)=>{rT.exports=Li()});var fT=a((_Y,lT)=>{"use strict";var TB=P();lT.exports=TB(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var dT=a((RY,vT)=>{"use strict";var OB=P(),CB=$(),EB=Se(),pT=fT(),Fi=Object.isExtensible,IB=OB(function(){Fi(1)});vT.exports=IB||pT?function(r){return!CB(r)||pT&&EB(r)==="ArrayBuffer"?!1:Fi?Fi(r):!0}:Fi});var hT=a((AY,mT)=>{"use strict";var kB=P();mT.exports=!kB(function(){return Object.isExtensible(Object.preventExtensions({}))})});var gs=a((NY,bT)=>{"use strict";var PB=x(),_B=A(),RB=Wr(),AB=$(),ms=W(),NB=te().f,yT=kt(),MB=Za(),hs=dT(),jB=$r(),$B=hT(),gT=!1,Be=jB("meta"),LB=0,ys=function(e){NB(e,Be,{value:{objectID:"O"+LB++,weakData:{}}})},FB=function(e,r){if(!AB(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!ms(e,Be)){if(!hs(e))return"F";if(!r)return"E";ys(e)}return e[Be].objectID},DB=function(e,r){if(!ms(e,Be)){if(!hs(e))return!0;if(!r)return!1;ys(e)}return e[Be].weakData},BB=function(e){return $B&&gT&&hs(e)&&!ms(e,Be)&&ys(e),e},GB=function(){UB.enable=function(){},gT=!0;var e=yT.f,r=_B([].splice),t={};t[Be]=1,e(t).length&&(yT.f=function(n){for(var i=e(n),o=0,u=i.length;o<u;o++)if(i[o]===Be){r(i,o,1);break}return i},PB({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:MB.f}))},UB=bT.exports={enable:GB,fastKey:FB,getWeakData:DB,onFreeze:BB};RB[Be]=!0});var ST=a((MY,xT)=>{"use strict";var WB=x(),HB=_(),KB=gs(),zB=P(),VB=we(),YB=ve(),JB=ui(),QB=N(),XB=$(),ZB=or(),e3=Ae(),r3=te().f,t3=Pt().forEach,n3=G(),qT=Ye(),i3=qT.set,a3=qT.getterFor;xT.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,i=e.indexOf("Weak")!==-1,o=n?"set":"add",u=HB[e],l=u&&u.prototype,c={},s;if(!n3||!QB(u)||!(i||l.forEach&&!zB(function(){new u().entries().next()})))s=t.getConstructor(r,e,n,o),KB.enable();else{s=r(function(v,d){i3(JB(v,f),{type:e,collection:new u}),ZB(d)||YB(d,v[o],{that:v,AS_ENTRIES:n})});var f=s.prototype,p=a3(e);t3(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(v){var d=v==="add"||v==="set";v in l&&!(i&&v==="clear")&&VB(f,v,function(h,m){var y=p(this).collection;if(!d&&i&&!XB(h))return v==="get"?void 0:!1;var q=y[v](h===0?0:h,m);return d?this:q})}),i||r3(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return e3(s,e,!1,!0),c[e]=s,WB({global:!0,forced:!0},c),i||t.setStrong(s,e,n),s}});var TT=a((jY,wT)=>{"use strict";var o3=_e();wT.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:o3(e,n,r[n],t);return e}});var _T=a(($Y,PT)=>{"use strict";var OT=Je(),u3=Bn(),CT=TT(),s3=V(),c3=ui(),l3=or(),f3=ve(),p3=Mn(),Di=jn(),v3=Bo(),sn=G(),ET=gs().fastKey,kT=Ye(),IT=kT.set,bs=kT.getterFor;PT.exports={getConstructor:function(e,r,t,n){var i=e(function(s,f){c3(s,o),IT(s,{type:r,index:OT(null),first:null,last:null,size:0}),sn||(s.size=0),l3(f)||f3(f,s[n],{that:s,AS_ENTRIES:t})}),o=i.prototype,u=bs(r),l=function(s,f,p){var v=u(s),d=c(s,f),h,m;return d?d.value=p:(v.last=d={index:m=ET(f,!0),key:f,value:p,previous:h=v.last,next:null,removed:!1},v.first||(v.first=d),h&&(h.next=d),sn?v.size++:s.size++,m!=="F"&&(v.index[m]=d)),s},c=function(s,f){var p=u(s),v=ET(f),d;if(v!=="F")return p.index[v];for(d=p.first;d;d=d.next)if(d.key===f)return d};return CT(o,{clear:function(){for(var f=this,p=u(f),v=p.first;v;)v.removed=!0,v.previous&&(v.previous=v.previous.next=null),v=v.next;p.first=p.last=null,p.index=OT(null),sn?p.size=0:f.size=0},delete:function(s){var f=this,p=u(f),v=c(f,s);if(v){var d=v.next,h=v.previous;delete p.index[v.index],v.removed=!0,h&&(h.next=d),d&&(d.previous=h),p.first===v&&(p.first=d),p.last===v&&(p.last=h),sn?p.size--:f.size--}return!!v},forEach:function(f){for(var p=u(this),v=s3(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:p.first;)for(v(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!c(this,f)}}),CT(o,t?{get:function(f){var p=c(this,f);return p&&p.value},set:function(f,p){return l(this,f===0?0:f,p)}}:{add:function(f){return l(this,f=f===0?0:f,f)}}),sn&&u3(o,"size",{configurable:!0,get:function(){return u(this).size}}),i},setStrong:function(e,r,t){var n=r+" Iterator",i=bs(r),o=bs(n);p3(e,r,function(u,l){IT(this,{type:n,target:u,state:i(u),kind:l,last:null})},function(){for(var u=o(this),l=u.kind,c=u.last;c&&c.removed;)c=c.previous;return!u.target||!(u.last=c=c?c.next:u.state.first)?(u.target=null,Di(void 0,!0)):Di(l==="keys"?c.key:l==="values"?c.value:[c.key,c.value],!1)},t?"entries":"values",!t,!0),v3(r)}}});var RT=a(()=>{"use strict";var d3=ST(),m3=_T();d3("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},m3)});var AT=a(()=>{"use strict";RT()});var MT=a((GY,NT)=>{"use strict";NT.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,i){return t[e](n,i)}}});var ae=a((UY,$T)=>{"use strict";var h3=U(),Bi=MT(),jT=h3("Map");$T.exports={Map:jT,set:Bi("set",2),get:Bi("get",1),has:Bi("has",1),remove:Bi("delete",1),proto:jT.prototype}});var qs=a(()=>{"use strict";var y3=x(),g3=A(),b3=F(),q3=ur(),x3=ve(),Gi=ae(),LT=Z(),S3=P(),FT=Gi.Map,w3=Gi.has,T3=Gi.get,O3=Gi.set,C3=g3([].push),E3=LT||S3(function(){return FT.groupBy("ab",function(e){return e}).get("a").length!==1});y3({target:"Map",stat:!0,forced:LT||E3},{groupBy:function(r,t){q3(r),b3(t);var n=new FT,i=0;return x3(r,function(o){var u=t(o,i++);w3(n,u)?C3(T3(n,u),o):O3(n,u,[o])}),n}})});var Y=a((KY,DT)=>{"use strict";var I3=ze(),k3=TypeError;DT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new k3(I3(e)+" is not a map")}});var Ss=a(()=>{"use strict";var P3=x(),_3=Y(),xs=ae(),R3=Z(),A3=xs.get,N3=xs.has,M3=xs.set;P3({target:"Map",proto:!0,real:!0,forced:R3},{getOrInsert:function(r,t){return N3(_3(this),r)?A3(this,r):(M3(this,r,t),t)}})});var Ts=a(()=>{"use strict";var j3=x(),$3=F(),L3=Y(),ws=ae(),F3=Z(),D3=ws.get,B3=ws.has,G3=ws.set;j3({target:"Map",proto:!0,real:!0,forced:F3},{getOrInsertComputed:function(r,t){if(L3(this),$3(t),B3(this,r))return D3(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return G3(this,r,n),n}})});var GT=a((QY,BT)=>{"use strict";yr();AT();qs();Ss();Ts();It();vr();var U3=z();BT.exports=U3.Map});var WT=a((XY,UT)=>{"use strict";var W3=GT();gr();UT.exports=W3});var Os=a(()=>{"use strict";Ss()});var Cs=a(()=>{"use strict";Ts()});var HT=a(()=>{"use strict";qs()});var zT=a((aJ,KT)=>{"use strict";var H3=WT();Os();Cs();HT();KT.exports=H3});var YT=a((oJ,VT)=>{"use strict";var K3=V(),z3=Q(),V3=re(),Y3=ve();VT.exports=function(e,r,t){return function(i){var o=V3(i),u=arguments.length,l=u>1?arguments[1]:void 0,c=l!==void 0,s=c?K3(l,u>2?arguments[2]:void 0):void 0,f=new e,p=0;return Y3(o,function(v){var d=c?s(v,p++):v;t?r(f,z3(d)[0],d[1]):r(f,d)}),f}}});var QT=a(()=>{"use strict";var J3=x(),JT=ae(),Q3=YT();J3({target:"Map",stat:!0,forced:!0},{from:Q3(JT.Map,JT.set,!0)})});var ZT=a((cJ,XT)=>{"use strict";var X3=Q();XT.exports=function(e,r,t){return function(){for(var i=new e,o=arguments.length,u=0;u<o;u++){var l=arguments[u];t?r(i,X3(l)[0],l[1]):r(i,l)}return i}}});var rO=a(()=>{"use strict";var Z3=x(),eO=ae(),e4=ZT();Z3({target:"Map",stat:!0,forced:!0},{of:e4(eO.Map,eO.set,!0)})});var nO=a(()=>{"use strict";var r4=x(),t4=D(),n4=ve(),i4=N(),tO=F(),a4=ae().Map;r4({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=i4(this)?this:a4,i=new n;tO(t);var o=tO(i.set);return n4(r,function(u){t4(o,i,t(u),u)}),i}})});var iO=a(()=>{"use strict";var o4=x(),u4=Y(),s4=ae().remove;o4({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=u4(this),t=!0,n,i=0,o=arguments.length;i<o;i++)n=s4(r,arguments[i]),t=t&&n;return!!t}})});var oO=a(()=>{"use strict";var c4=x(),l4=Y(),Es=ae(),f4=Es.get,p4=Es.has,aO=Es.set;c4({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=l4(this),i,o;return p4(n,r)?(i=f4(n,r),"update"in t&&(i=t.update(i,r,n),aO(n,r,i)),i):(o=t.insert(r,n),aO(n,r,o),o)}})});var sO=a((gJ,uO)=>{"use strict";var v4=D();uO.exports=function(e,r,t){for(var n=t?e:e.iterator,i=e.next,o,u;!(o=v4(i,n)).done;)if(u=r(o.value),u!==void 0)return u}});var ye=a((bJ,cO)=>{"use strict";var d4=sO();cO.exports=function(e,r,t){return t?d4(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var lO=a(()=>{"use strict";var m4=x(),h4=V(),y4=Y(),g4=ye();m4({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=y4(this),n=h4(r,arguments.length>1?arguments[1]:void 0);return g4(t,function(i,o){if(!n(i,o,t))return!1},!0)!==!1}})});var pO=a(()=>{"use strict";var b4=x(),q4=V(),x4=Y(),fO=ae(),S4=ye(),w4=fO.Map,T4=fO.set;b4({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=x4(this),n=q4(r,arguments.length>1?arguments[1]:void 0),i=new w4;return S4(t,function(o,u){n(o,u,t)&&T4(i,u,o)}),i}})});var vO=a(()=>{"use strict";var O4=x(),C4=V(),E4=Y(),I4=ye();O4({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=E4(this),n=C4(r,arguments.length>1?arguments[1]:void 0),i=I4(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return i&&i.value}})});var dO=a(()=>{"use strict";var k4=x(),P4=V(),_4=Y(),R4=ye();k4({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=_4(this),n=P4(r,arguments.length>1?arguments[1]:void 0),i=R4(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return i&&i.key}})});var hO=a((IJ,mO)=>{"use strict";mO.exports=function(e,r){return e===r||e!==e&&r!==r}});var yO=a(()=>{"use strict";var A4=x(),N4=hO(),M4=Y(),j4=ye();A4({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return j4(M4(this),function(t){if(N4(t,r))return!0},!0)===!0}})});var gO=a(()=>{"use strict";var $4=x(),L4=Y(),F4=ye();$4({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=F4(L4(this),function(n,i){if(n===r)return{key:i}},!0);return t&&t.key}})});var qO=a(()=>{"use strict";var D4=x(),B4=V(),G4=Y(),bO=ae(),U4=ye(),W4=bO.Map,H4=bO.set;D4({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=G4(this),n=B4(r,arguments.length>1?arguments[1]:void 0),i=new W4;return U4(t,function(o,u){H4(i,n(o,u,t),o)}),i}})});var SO=a(()=>{"use strict";var K4=x(),z4=V(),V4=Y(),xO=ae(),Y4=ye(),J4=xO.Map,Q4=xO.set;K4({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=V4(this),n=z4(r,arguments.length>1?arguments[1]:void 0),i=new J4;return Y4(t,function(o,u){Q4(i,u,n(o,u,t))}),i}})});var wO=a(()=>{"use strict";var X4=x(),Z4=Y(),eG=ve(),rG=ae().set;X4({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=Z4(this),n=arguments.length,i=0;i<n;)eG(arguments[i++],function(o,u){rG(t,o,u)},{AS_ENTRIES:!0});return t}})});var TO=a(()=>{"use strict";var tG=x(),nG=F(),iG=Y(),aG=ye(),oG=TypeError;tG({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=iG(this),n=arguments.length<2,i=n?void 0:arguments[1];if(nG(r),aG(t,function(o,u){n?(n=!1,i=o):i=r(i,o,u,t)}),n)throw new oG("Reduce of empty map with no initial value");return i}})});var OO=a(()=>{"use strict";var uG=x(),sG=V(),cG=Y(),lG=ye();uG({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=cG(this),n=sG(r,arguments.length>1?arguments[1]:void 0);return lG(t,function(i,o){if(n(i,o,t))return!0},!0)===!0}})});var EO=a(()=>{"use strict";var fG=x(),CO=F(),pG=Y(),Is=ae(),vG=TypeError,dG=Is.get,mG=Is.has,hG=Is.set;fG({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=pG(this),i=arguments.length;CO(t);var o=mG(n,r);if(!o&&i<3)throw new vG("Updating absent value");var u=o?dG(n,r):CO(i>2?arguments[2]:void 0)(r,n);return hG(n,r,t(u,r,n)),n}})});var Ps=a((HJ,IO)=>{"use strict";var Ui=D(),ks=F(),Wi=N(),yG=Q(),gG=TypeError;IO.exports=function(r,t){var n=yG(this),i=ks(n.get),o=ks(n.has),u=ks(n.set),l=arguments.length>2?arguments[2]:void 0,c;if(!Wi(t)&&!Wi(l))throw new gG("At least one callback required");return Ui(o,n,r)?(c=Ui(i,n,r),Wi(t)&&(c=t(c),Ui(u,n,r,c))):Wi(l)&&(c=l(),Ui(u,n,r,c)),c}});var kO=a(()=>{"use strict";var bG=x(),qG=Ps();bG({target:"Map",proto:!0,real:!0,forced:!0},{upsert:qG})});var PO=a(()=>{"use strict";var xG=x(),SG=Ps();xG({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:SG})});var RO=a((JJ,_O)=>{"use strict";var wG=zT();QT();rO();nO();iO();oO();lO();pO();vO();dO();yO();Os();Cs();gO();qO();SO();wO();TO();OO();EO();kO();PO();_O.exports=wG});var NO=a((QJ,AO)=>{"use strict";AO.exports=RO()});var jO=a(()=>{"use strict";var TG=x(),OG=ft(),CG=Ra().indexOf,EG=Zu(),_s=OG([].indexOf),MO=!!_s&&1/_s([1],1,-0)<0,IG=MO||!EG("indexOf");TG({target:"Array",proto:!0,forced:IG},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return MO?_s(this,r,t)||0:CG(this,r,t)}})});var LO=a((eQ,$O)=>{"use strict";jO();var kG=oe();$O.exports=kG("Array","indexOf")});var DO=a((rQ,FO)=>{"use strict";var PG=B(),_G=LO(),Rs=Array.prototype;FO.exports=function(e){var r=e.indexOf;return e===Rs||PG(Rs,e)&&r===Rs.indexOf?_G:r}});var GO=a((tQ,BO)=>{"use strict";var RG=DO();BO.exports=RG});var WO=a((nQ,UO)=>{"use strict";var AG=GO();UO.exports=AG});var KO=a((iQ,HO)=>{"use strict";var NG=WO();HO.exports=NG});var VO=a((aQ,zO)=>{"use strict";zO.exports=KO()});var fC=a(()=>{"use strict";var DG=x(),BG=re(),lC=Pn(),GG=P(),UG=GG(function(){lC(1)});DG({target:"Object",stat:!0,forced:UG},{keys:function(r){return lC(BG(r))}})});var vC=a((lX,pC)=>{"use strict";fC();var WG=z();pC.exports=WG.Object.keys});var mC=a((fX,dC)=>{"use strict";var HG=vC();dC.exports=HG});var yC=a((pX,hC)=>{"use strict";var KG=mC();hC.exports=KG});var bC=a((vX,gC)=>{"use strict";var zG=yC();gC.exports=zG});var xC=a((dX,qC)=>{"use strict";qC.exports=bC()});var wC=a((mX,SC)=>{SC.exports=xC()});var _r="";function zs(e){_r=e.replace(/\/+$/,"")}async function ct(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function Vs(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${_r}/comments?${t}`);return await ct(n,"Failed to fetch comments"),(await n.json()).data}async function Ji({uri:e,document:r,quote:t,prefix:n,suffix:i,body:o,author:u,parent:l}){let c={quote:t,prefix:n,suffix:i,body:o,author:u,parent:l};r?c.document=r:c.uri=e;let s=await fetch(`${_r}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});return await ct(s,"Failed to create comment"),s.json()}async function Ys(e,{body:r}){let t=await fetch(`${_r}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:r})});return await ct(t,"Failed to update comment"),t.json()}async function Js(e,r){let t=await fetch(`${_r}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});return await ct(t,"Failed to update comment status"),t.json()}async function Qs(e){let r=await fetch(`${_r}/comments/${e}`,{method:"DELETE"});await ct(r,"Failed to delete comment")}var DL=g(Ur(),1),BL=g(Ln(),1),GL=g(ei(),1),UL=g(ri(),1),WL=g(ti(),1);var Cu=g(nt(),1);function Ky(e,r,t,n,i,o,u){try{var l=e[o](u),c=l.value}catch(s){return void t(s)}l.done?r(c):Cu.default.resolve(c).then(n,i)}function wr(e){return function(){var r=this,t=arguments;return new Cu.default(function(n,i){var o=e.apply(r,t);function u(c){Ky(o,n,i,u,l,"next",c)}function l(c){Ky(o,n,i,u,l,"throw",c)}u(void 0)})}}function Ut(e,r){this.v=e,this.k=r}function er(e){return new Ut(e,0)}var Eu=g(nt(),1),tg=g(Te(),1),ng=g(yi(),1);function Ce(e){return function(){return new Wt(e.apply(this,arguments))}}function Wt(e){var r,t;function n(o,u){try{var l=e[o](u),c=l.value,s=c instanceof Ut;Eu.default.resolve(s?c.v:c).then(function(f){if(s){var p=o==="return"?"return":"next";if(!c.k||f.done)return n(p,f);f=e[p](f).value}i(l.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){i("throw",f)}}function i(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new Eu.default(function(l,c){var s={key:o,arg:u,resolve:l,reject:c,next:null};t?t=t.next=s:(r=t=s,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Wt.prototype[typeof tg.default=="function"&&ng.default||"@@asyncIterator"]=function(){return this},Wt.prototype.next=function(e){return this._invoke("next",e)},Wt.prototype.throw=function(e){return this._invoke("throw",e)},Wt.prototype.return=function(e){return this._invoke("return",e)};var HL=g(se(),1),KL=g(Eq(),1);function ce(e){var r,t=LL(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function LL(e){return"startContainer"in e}function tr(e){if(FL(e))return e;var r=e,t=ce(r).createRange();return t.selectNodeContents(r),t}function FL(e){return"startContainer"in e}var Fq=g(Lq(),1);function Dq(e){if((0,Fq.default)(e))return e}var Zq=g(Te(),1),ex=g(Mo(),1),rx=g(Ju(),1);function tx(e,r){var t=e==null?null:typeof Zq.default<"u"&&(0,ex.default)(e)||e["@@iterator"];if(t!=null){var n,i,o,u,l=[],c=!0,s=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&((0,rx.default)(l).call(l,n.value),l.length!==r);c=!0);}catch(f){s=!0,i=f}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(s)throw i}}return l}}var nx=g(Oa(),1),ix=g(Qa(),1);function Ri(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function Qu(e,r){if(e){var t;if(typeof e=="string")return Ri(e,r);var n=(0,nx.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,ix.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ri(e,r):void 0}}function ax(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fe(e,r){return Dq(e)||tx(e,r)||Qu(e,r)||ax()}var ox=g(Te(),1),ux=g(yi(),1),sx=g(Xt(),1),tn=g(nt(),1);function at(e){var r,t,n,i=2;for(typeof ox.default<"u"&&(t=ux.default,n=sx.default);i--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Ai(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Ai(e){function r(t){if(Object(t)!==t)return tn.default.reject(new TypeError(t+" is not an object."));var n=t.done;return tn.default.resolve(t.value).then(function(i){return{value:i,done:n}})}return Ai=function(n){this.s=n,this.n=n.next},Ai.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var i=this.s.return;return i===void 0?tn.default.resolve({value:n,done:!0}):r(i.apply(this.s,arguments))},throw:function(n){var i=this.s.return;return i===void 0?tn.default.reject(n):r(i.apply(this.s,arguments))}},new Ai(e)}var bD=g(se(),1);var vD=g(se(),1),dD=g(wx(),1),mD=g(Ox(),1),hD=g(zx(),1),yD=g(pS(),1),gD=g(ns(),1);var Ms=g(se(),1);var pB=g(se(),1);var as=g(se(),1);function nn(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function CS(e,r){return nn(e.startChunk,r.startChunk)&&nn(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function Tr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var is=g(zt(),1);var an=g(Te(),1),ES=g(Xt(),1);function De(e){"@babel/helpers - typeof";return De=typeof an.default=="function"&&typeof ES.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof an.default=="function"&&r.constructor===an.default&&r!==an.default.prototype?"symbol":typeof r},De(e)}var FS=g(LS(),1);function DS(e,r){if(De(e)!="object"||!e)return e;var t=e[FS.default];if(t!==void 0){var n=t.call(e,r||"default");if(De(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Ni(e){var r=DS(e,"string");return De(r)=="symbol"?r:r+""}function BS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,is.default)(e,Ni(n.key),n)}}function on(e,r,t){return r&&BS(e.prototype,r),t&&BS(e,t),(0,is.default)(e,"prototype",{writable:!1}),e}var GS=g(zt(),1);function Or(e,r,t){return(r=Ni(r))in e?(0,GS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var US=g(Ur(),1);var Mi="Iterator exhausted before seek ended.",un=function(){function e(r){Tr(this,e),this.chunker=r,Or(this,"currentChunkPosition",0),Or(this,"offsetInChunk",0),this.seekTo(0)}return on(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,i)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!nn(this.currentChunk,n);){var p=this._readToPreviousChunk(),v=Fe(p,2),d=v[0],h=v[1];if(t&&(u=d+u),h===null)throw new RangeError(Mi)}else for(;!nn(this.currentChunk,n);){var l=this._readToNextChunk(),c=Fe(l,2),s=c[0],f=c[1];if(t&&(u+=s),f===null)throw new RangeError(Mi)}var m=this.currentChunkPosition+i;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,US.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var l=this.currentChunkPosition+this.currentChunk.data.length;if(l<=n){var c=this._readToNextChunk(),s=Fe(c,2),f=s[0],p=s[1];if(t&&(u+=f),p===null){if(this.position===n||o)break;throw new RangeError(Mi)}}else{var v=i?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,v)),this.offsetInChunk=v,i&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=i?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var h=this._readToPreviousChunk(),m=Fe(h,2),y=m[0],q=m[1];if(t&&(u=y+u),q===null){if(o)break;throw new RangeError(Mi)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,i=this.chunker.nextChunk();return i!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,i]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function HS(e,r){return os.apply(this,arguments)}function os(){return os=wr(as.default.mark(function e(r,t){var n,i,o,u,l,c,s,f,p,v,d,h,m,y,q,b,I,E,S,T,w,C,j=arguments;return as.default.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:n=j.length>2&&j[2]!==void 0?j[2]:{},i=n.minimalContext,o=i===void 0?!1:i,u=n.minimumQuoteLength,l=u===void 0?0:u,c=n.maxWordLength,s=c===void 0?50:c,f=new un(t()),p=new un(t()),f.seekToChunk(r.startChunk,r.startIndex),v=f.readToChunk(r.endChunk,r.endIndex),d="",h="",m=function(){return d.length+v.length+h.length},m()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),y=Math.floor((l-m())/2),d=f.read(-y,!1,!0)+d,m()<l&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),q=l-m(),h=h+f.read(q,!1,!0),m()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),b=l-m(),d=f.read(-b,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=ji(f,s,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+ji(f,s,!1));case 11:return I={type:"TextQuoteSelector",exact:v,prefix:d,suffix:h},E=$i(I)(t()),k.next=16,E.next();case 16:if(S=k.sent,!(!S.done&&CS(S.value,r))){k.next=21;break}return k.next=20,E.next();case 20:S=k.sent;case 21:if(!S.done){k.next=23;break}return k.abrupt("return",I);case 23:if(T=S.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),p.seekToChunk(T.startChunk,T.startIndex-d.length),w=WS(f,p,!0),w!==void 0&&!o&&(w=ji(f,s,!0)+w),f.seekToChunk(r.endChunk,r.endIndex+h.length),p.seekToChunk(T.endChunk,T.endIndex+h.length),C=WS(f,p,!1),C!==void 0&&!o&&(C=C+ji(f,s,!1)),!o){k.next=44;break}if(!(w!==void 0&&(C===void 0||w.length<=C.length))){k.next=37;break}d=w+d,k.next=42;break;case 37:if(C===void 0){k.next=41;break}h=h+C,k.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:k.next=46;break;case 44:w!==void 0&&(d=w+d),C!==void 0&&(h=h+C);case 46:k.next=11;break;case 48:case"end":return k.stop()}},e)})),os.apply(this,arguments)}function WS(e,r,t){for(var n="";;){var i=void 0;try{i=e.read(t?-1:1)}catch{return}n=t?i+n:n+i;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(i!==o)return n}}function ji(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var i=void 0;try{i=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(TD(i)){e.seekBy(t?1:-1);break}n=t?i+n:n+i}return n}function TD(e){return/^\s+$/.test(e)}var Rw=g(Ur(),1),Aw=g(Ln(),1),Nw=g(ei(),1),Mw=g(ri(),1),jw=g(ti(),1);var cs=g(se(),1),$w=g(dw(),1),Lw=g(kw(),1);function Pw(e,r){var t;if(typeof Nw.default>"u"||(0,Mw.default)(e)==null){if(Array.isArray(e)||(t=oB(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(s){throw s},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,l;return{s:function(){t=(0,jw.default)(e)},n:function(){var s=t.next();return o=s.done,s},e:function(s){u=!0,l=s},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw l}}}}function oB(e,r){var t;if(e){if(typeof e=="string")return _w(e,r);var n=(0,Rw.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,Aw.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _w(e,r)}}function _w(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function $i(e){return function(){var r=Ce(cs.default.mark(function n(i){var o,u,l,c,s,f,p,v,d,h,m,y,q,b,I,E,S,T,w,C,j,qe,k,ee,xe,J,L;return cs.default.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:o=e.exact,u=e.prefix||"",l=e.suffix||"",c=u+o+l,s=[],f=!0;case 6:p=i.currentChunk,v=p.data,d=[],h=Pw(s),O.prev=10,h.s();case 12:if((m=h.n()).done){O.next=27;break}if(y=m.value,q=y.charactersMatched,y.endChunk===void 0&&(b=u.length+o.length-q,b<=v.length&&(y.endChunk=p,y.endIndex=b)),y.startChunk===void 0&&(I=u.length-q,(I<v.length||y.endChunk!==void 0)&&(y.startChunk=p,y.startIndex=I)),E=c.length-q,!(E<=v.length)){O.next=24;break}if(!(0,$w.default)(v).call(v,c.substring(q))){O.next=22;break}return O.next=22,y;case 22:O.next=25;break;case 24:v===c.substring(q,q+v.length)&&(y.charactersMatched+=v.length,d.push(y));case 25:O.next=12;break;case 27:O.next=32;break;case 29:O.prev=29,O.t0=O.catch(10),h.e(O.t0);case 32:return O.prev=32,h.f(),O.finish(32);case 35:if(s=d,!(c.length<=v.length)){O.next=49;break}S=0;case 38:if(!(S<=v.length)){O.next=49;break}if(T=v.indexOf(c,S),T!==-1){O.next=42;break}return O.abrupt("break",49);case 42:if(S=T+1,!(T===0&&c.length===0&&!f)){O.next=45;break}return O.abrupt("continue",38);case 45:return O.next=47,{startChunk:p,startIndex:T+u.length,endChunk:p,endIndex:T+u.length+o.length};case 47:O.next=38;break;case 49:for(w=[],C=Math.max(v.length-c.length+1,0),j=function(He){var Hs=v[He];w=(0,Lw.default)(w).call(w,function(XC){return Hs===c[He-XC]}),Hs===c[0]&&w.push(He)},qe=C;qe<v.length;qe++)j(qe);k=Pw(w);try{for(k.s();!(ee=k.n()).done;)xe=ee.value,J=v.length-xe,L={charactersMatched:J},J>=u.length+o.length&&(L.endChunk=p,L.endIndex=xe+u.length+o.length),(J>u.length||L.endChunk!==void 0)&&(L.startChunk=p,L.startIndex=xe+u.length),s.push(L)}catch(Pr){k.e(Pr)}finally{k.f()}f=!1;case 56:if(i.nextChunk()!==null){O.next=6;break}case 57:case"end":return O.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var lB=g(se(),1);var uB=g(Ur(),1),sB=g(ns(),1);var fB=g(se(),1);var ln=g(tT(),1);var iT=g(bi(),1),aT=g(zt(),1);var ps=g(qi(),1),nT=g(Kt(),1);function nr(e,r){var t;return nr=ps.default?(0,nT.default)(t=ps.default).call(t):function(n,i){return n.__proto__=i,n},nr(e,r)}function vs(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,iT.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,aT.default)(e,"prototype",{writable:!1}),r&&nr(e,r)}function oT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function uT(e,r){if(r&&(De(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return oT(e)}var sT=g(qi(),1),cT=g(Kt(),1),ds=g(gi(),1);function Cr(e){var r;return Cr=sT.default?(0,cT.default)(r=ds.default).call(r):function(t){return t.__proto__||(0,ds.default)(t)},Cr(e)}var Ns=g(NO(),1),tC=g(bi(),1);var YO=g(VO(),1);function JO(e){try{var r;return(0,YO.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var XO=g(Li(),1),ZO=g(Ju(),1),eC=g(Kt(),1);var QO=g(Li(),1);function As(){try{var e=!Boolean.prototype.valueOf.call((0,QO.default)(Boolean,[],function(){}))}catch{}return(As=function(){return!!e})()}function rC(e,r,t){if(As())return XO.default.apply(null,arguments);var n=[null];(0,ZO.default)(n).apply(n,r);var i=new((0,eC.default)(e).apply(e,n));return t&&nr(i,t.prototype),i}function cn(e){var r=typeof Ns.default=="function"?new Ns.default:void 0;return cn=function(n){if(n===null||!JO(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,i)}function i(){return rC(n,arguments,Cr(this).constructor)}return i.prototype=(0,tC.default)(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),nr(i,n)},cn(e)}function aC(e,r){var t=ce(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i=nC(e.startContainer,e.startOffset),o=Fe(i,2),u=o[0],l=o[1];for(n.currentNode=u;l===u.length&&n.nextNode();)u=n.currentNode,l=0;e.setStart(u,l);var c=nC(e.endContainer,e.endOffset),s=Fe(c,2),f=s[0],p=s[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function nC(e,r){var t;if(iC(e))return[e,r];var n;if(MG(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(iC(n))return[n,0];var i=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=i.createTreeWalker(i,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function iC(e){return e.nodeType===Node.TEXT_NODE}function MG(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function uC(e){var r=jG();return function(){var n=Cr(e),i;if(r){var o=Cr(this).constructor;i=(0,ln.default)(n,arguments,o)}else i=n.apply(this,arguments);return uT(this,i)}}function jG(){if(typeof Reflect>"u"||!ln.default||ln.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,ln.default)(Boolean,[],function(){})),!0}catch{return!1}}var Hi=function(e){vs(t,e);var r=uC(t);function t(n){return Tr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(cn(TypeError)),$G=function(e){vs(t,e);var r=uC(t);function t(n){return Tr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(cn(TypeError)),Er=function(){function e(r){var t=this;if(Tr(this,e),Or(this,"scope",void 0),Or(this,"iter",void 0),this.scope=tr(r),this.iter=ce(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!oC(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Hi}}return on(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!oC(t))throw new Hi;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new $G;var n=t===this.scope.startContainer?this.scope.startOffset:0,i=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:i,data:t.data.substring(n,i),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=aC(t,this.scope),i=this.nodeToChunk(n.startContainer),o=n.startOffset-i.startOffset,u=this.nodeToChunk(n.endContainer),l=n.endOffset-u.startOffset;return{startChunk:i,startIndex:o,endChunk:u,endIndex:l}}},{key:"chunkRangeToRange",value:function(t){var n=ce(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function oC(e){return e.nodeType===Node.TEXT_NODE}function sC(e,r){return js.apply(this,arguments)}function js(){return js=wr(Ms.default.mark(function e(r,t){var n,i,o,u=arguments;return Ms.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},i=tr(t??ce(r)),o=new Er(i),c.next=5,HS(o.rangeToChunkRange(r),function(){return new Er(i)},n);case 5:return c.abrupt("return",c.sent);case 6:case"end":return c.stop()}},e)})),js.apply(this,arguments)}var $s=g(se(),1);function cC(e){var r=$i(e);return function(){var t=Ce($s.default.mark(function i(o){var u,l,c,s,f,p,v,d;return $s.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new Er(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof Hi)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:l=!0,c=!1,m.prev=13,f=at(r(u));case 15:return m.next=17,er(f.next());case 17:return p=m.sent,l=p.done,m.next=21,er(p.value);case 21:if(v=m.sent,l){m.next=29;break}return d=v,m.next=26,u.chunkRangeToRange(d);case 26:l=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),c=!0,s=m.t1;case 35:if(m.prev=35,m.prev=36,!(!l&&f.return!=null)){m.next=40;break}return m.next=40,er(f.return());case 40:if(m.prev=40,!c){m.next=43;break}throw s;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},i,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(i){return t.apply(this,arguments)}return n}()}var LG=g(se(),1);var FG=g(se(),1);var VG=g(wC(),1),YG=g(Ur(),1),JG=g(Ln(),1),QG=g(ei(),1),XG=g(ri(),1),ZG=g(ti(),1);async function TC(e,r){let t=await sC(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function fn(e,r){let t=cC({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var ot="fb-highlight",OC="fb-highlight-active";var pn=null;function EC(e){pn=e}function vn(e,r){let t=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let n=CC(e,r);t.push(n)}else{let n=rU(e);for(let i=0;i<n.length;i++){let o=n[i],u=document.createRange();o===e.startContainer?(u.setStart(o,e.startOffset),u.setEnd(o,o.textContent.length)):o===e.endContainer?(u.setStart(o,0),u.setEnd(o,e.endOffset)):u.selectNodeContents(o),u.collapsed||t.push(CC(u,r))}}return t}function CC(e,r){let t=e.commonAncestorContainer;for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;let n=t,i=!1,o=null;for(;n;){if(n.tagName==="foreignObject"){i=!1;break}n.tagName==="text"&&n instanceof SVGElement&&(i=!0),n.tagName==="svg"&&(o=n),n=n.parentElement}if(i&&o)return eU(e,r,o);let u=document.createElement("mark");u.className=ot,u.dataset.commentId=r,u.style.backgroundColor="rgba(255, 212, 0, 0.35)",u.style.cursor="pointer",u.style.borderRadius="2px",u.addEventListener("click",()=>{pn&&pn(r)});try{e.surroundContents(u)}catch(l){return console.warn("[feedback-layer] Failed to create highlight:",l),null}return u}function eU(e,r,t){try{let n=e.getClientRects();if(n.length===0)return null;let i="http://www.w3.org/2000/svg",o=t.getScreenCTM();if(!o)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let u=e.commonAncestorContainer;for(;u&&u.nodeType!==Node.ELEMENT_NODE;)u=u.parentNode;let l=u,c=null;for(;l&&l!==t;){if(l.tagName==="text"){c=l.parentElement;break}l=l.parentElement}let s=c||t,f=o;s!==t&&s.getScreenCTM&&(f=s.getScreenCTM());let p=document.createElementNS(i,"g");p.setAttribute("class",ot),p.setAttribute("data-comment-id",r),p.style.cursor="pointer";for(let y=0;y<n.length;y++){let q=n[y],b=document.createElementNS(i,"rect"),I=t.createSVGPoint();I.x=q.left,I.y=q.top;let E=I.matrixTransform(f.inverse()),S=q.width/f.a,T=q.height/f.d;b.setAttribute("x",E.x),b.setAttribute("y",E.y),b.setAttribute("width",S),b.setAttribute("height",T),b.setAttribute("fill","#ffd400"),b.setAttribute("fill-opacity","0.35"),b.setAttribute("rx","2"),b.setAttribute("ry","2"),b.style.pointerEvents="none",p.appendChild(b)}s&&s!==t?s.appendChild(p):t.appendChild(p);let v=e.commonAncestorContainer;for(;v&&v.nodeType!==Node.ELEMENT_NODE;)v=v.parentNode;let d=new Set,h=v;for(;h&&h!==t;)h.tagName==="text"&&h instanceof SVGElement&&(d.add(h),h.querySelectorAll("tspan").forEach(q=>d.add(q))),h=h.parentElement;let m=y=>{y.preventDefault(),y.stopPropagation(),pn&&pn(r)};return d.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",m),y.dataset.fbCommentId=r}),p}catch(n){return console.warn("[feedback-layer] Failed to create SVG highlight:",n),null}}function Ls(e){document.querySelectorAll(`.${ot}[data-comment-id="${e}"]`).forEach(n=>{let i=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)i.removeChild(n);else{for(;n.firstChild;)i.insertBefore(n.firstChild,n);i.removeChild(n),i.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function IC(){document.querySelectorAll(`.${ot}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function Ki(e){document.querySelectorAll(`.${ot}`).forEach(r=>{let t=r.dataset.commentId===e,n="rgba(255, 180, 0, 0.55)",i="rgba(255, 212, 0, 0.35)";t?r.classList.add(OC):r.classList.remove(OC),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(u=>{u.setAttribute("fill",t?n:i)}):r.style.backgroundColor=t?n:i})}function kC(e){let r=document.querySelector(`.${ot}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function rU(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let i=document.createRange();return i.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,i)<0&&e.compareBoundaryPoints(Range.START_TO_END,i)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function PC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,i)=>{let o=[`**${i+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let l of u)o.push(`  - **[${l.author}]** (reply): ${l.body}`);return o.join(`
`)}).join(`

`)}function _C(e,r){let t=PC(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(i=>!i.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function ir(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var tU=`
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
`,RC=null,AC=null;function NC(e,r){AC=e,RC=r,nU()}function nU(){let e=document.createElement("style");e.textContent=tU,document.head.appendChild(e)}function MC(){let e=RC(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let i=document.createElement("button");i.className="hf-modal-close",i.textContent="\xD7",i.addEventListener("click",()=>r.remove()),n.appendChild(i);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",p=>{p.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let l=document.querySelector(AC.contentSelector||"body").innerHTML,c=_C(l,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${c.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${ir(c)}</textarea>
  `;let s=document.createElement("button");s.className="hf-btn hf-btn-primary",s.textContent="Copy Prompt",s.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c),s.textContent="Copied!"}catch{s.textContent="Copy failed"}setTimeout(()=>s.textContent="Copy Prompt",2e3)}),u.appendChild(s);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function jC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function $C(e,r){return e.length>r?e.slice(0,r)+"...":e}function LC(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var dn=null;function DC(e){dn=document.createElement("div"),dn.className="fb-toast-container",e.appendChild(dn)}function Ir(e,r="success"){if(!dn)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>FC(t)),t.appendChild(o)}dn.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>FC(t),r==="error"?8e3:4e3)}function FC(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}var iU=320,GC="feedback-layer-commenter",X=null,Ue=null,Ge=null,Fs=null,UC=null,Ds=null,Bs=null,Gs=null,Us=null,Ws=!1,WC=[],HC=new Set;function ut(){return localStorage.getItem(GC)||""}function KC({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:i}){UC=e,Ds=r,Bs=t,Gs=n,Us=i,sU(),X=document.createElement("div"),X.className="fb-sidebar fb-sidebar-collapsed",X.innerHTML=`
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
               value="${ir(ut())}">
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
  `;let o=document.createElement("button");o.className="fb-sidebar-tab",o.textContent="Feedback",o.addEventListener("click",()=>mn()),document.body.appendChild(o),document.body.appendChild(X),DC(X),Ue=X.querySelector(".fb-comment-list"),Ge=X.querySelector(".fb-form-section");let u=X.querySelector(".fb-name-input");u.addEventListener("input",()=>{localStorage.setItem(GC,u.value.trim())}),X.querySelector(".fb-ai-btn").addEventListener("click",()=>MC()),X.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>aU());let s=X.querySelector(".fb-show-resolved-cb");s.addEventListener("change",()=>{Ws=s.checked,We(WC,HC)})}function mn(){X.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden")}function aU(){X.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden")}function zC(e){if(mn(),!ut()){let n=X.querySelector(".fb-name-input");n.style.outline="2px solid #ef4444",setTimeout(()=>n.style.outline="",2e3)}Fs=e,Ge.style.display="",Ge.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${ir($C(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `;let r=Ge.querySelector(".fb-form-textarea");r.focus();let t=()=>{if(!ut()){let i=X.querySelector(".fb-name-input");i.focus(),i.style.outline="2px solid #ef4444",setTimeout(()=>i.style.outline="",2e3);return}let n=r.value.trim();n&&(UC({comment:n,commenter:ut()}),Ge.style.display="none",Fs=null)};Ge.querySelector(".fb-submit-btn").addEventListener("click",t),r.addEventListener("keydown",n=>{n.key==="Enter"&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),t())}),Ge.querySelector(".fb-cancel-btn").addEventListener("click",()=>{Ge.style.display="none",Fs=null}),Ge.scrollIntoView({behavior:"smooth",block:"nearest"})}function We(e,r=new Set,t=new Map){WC=e,HC=r,Ue.innerHTML="";let{topLevel:n,repliesByParent:i}=jC(e),o=n.slice().sort((s,f)=>{let p=t.get(s.id),v=t.get(f.id);return!p||!v?0:p.compareBoundaryPoints(Range.START_TO_START,v)}),u=o.filter(s=>{let f=r.has(s.id),p=s.status==="closed";return f||p&&Ws}),l=Ws?u:u.filter(s=>s.status!=="closed");if(o.length===0){Ue.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let c=o.filter(s=>!r.has(s.id)&&s.status!=="closed").length;if(l.length===0){c>0?Ue.innerHTML=`<div class="fb-empty">
        ${u.length} comment(s) resolved.
        ${c>0?`<br>${c} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:Ue.innerHTML=`<div class="fb-empty">All ${o.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let s of l){let f=document.createElement("div");f.className="fb-thread",f.appendChild(BC(s,!1));let p=i.get(s.id)||[];for(let d of p)f.appendChild(BC(d,!0));let v=document.createElement("button");v.className="fb-reply-btn",v.textContent="Reply",v.addEventListener("click",d=>{d.stopPropagation(),oU(s.id,f,v)}),f.appendChild(v),Ue.appendChild(f)}}function BC(e,r){let t=e.status==="closed",n=document.createElement("div");return n.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":""),n.dataset.id=e.id,n.innerHTML=`
    <div class="fb-cmt-body">${ir(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${ir(e.author)}</span>
      <span class="fb-cmt-time">${LC(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
  `,r||(n.addEventListener("click",i=>{i.target.closest(".fb-cmt-delete")||i.target.closest(".fb-cmt-resolve")||i.target.closest(".fb-cmt-edit")||(Ki(e.id),kC(e.id),Ue.querySelectorAll(".fb-cmt-card").forEach(o=>o.classList.remove("fb-cmt-active")),n.classList.add("fb-cmt-active"))}),n.querySelector(".fb-cmt-resolve").addEventListener("click",i=>{i.stopPropagation(),Bs&&Bs(e.id,!t)})),n.querySelector(".fb-cmt-edit").addEventListener("click",i=>{i.stopPropagation(),uU(e,n)}),n.querySelector(".fb-cmt-delete").addEventListener("click",i=>{i.stopPropagation(),Ds&&Ds(e.id)}),n}function oU(e,r,t){mn();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let i=document.createElement("div");i.className="fb-reply-form",i.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!ut()){let c=X.querySelector(".fb-name-input");c.focus(),c.style.outline="2px solid #ef4444",setTimeout(()=>c.style.outline="",2e3);return}let l=i.querySelector("textarea").value.trim();l&&(Gs&&Gs({parent_id:e,comment:l,commenter:ut()}),i.remove(),t.style.display="")};i.querySelector(".fb-reply-submit").addEventListener("click",o);let u=i.querySelector("textarea");u.addEventListener("keydown",l=>{l.key==="Enter"&&(l.metaKey||l.ctrlKey)&&(l.preventDefault(),o())}),i.querySelector(".fb-reply-cancel").addEventListener("click",()=>{i.remove(),t.style.display=""}),r.insertBefore(i,t),u.focus()}function uU(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${ir(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let i=t.querySelector("textarea");i.focus(),i.setSelectionRange(i.value.length,i.value.length);let o=()=>{let u=i.value.trim();u&&Us&&Us(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),i.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function VC(e){let r=Ue.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(Ue.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function sU(){let e=document.createElement("style");e.textContent=`
    .fb-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: ${iU}px;
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
  `,document.head.appendChild(e)}function YC(){let e=new Map;return{add(r,t){e.set(r.id,{comment:r,selector:t,attempts:0})},remove(r){e.delete(r)},hasPending(){return e.size>0},getAll(){return Array.from(e.values())},recordAttempt(r){let t=e.get(r);return t?(t.attempts+=1,t.attempts>=10?(e.delete(r),!1):!0):!1},clear(){e.clear()},size(){return e.size}}}var ar=null,Vi=null,Yi=null,K=[],kr=null,Ie=null,le=new Set,be=new Map,ge=YC(),st=null,zi=null;function cU(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null};zs(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{ar=document.querySelector(r.contentSelector)||document.body,Vi=r.documentUri||window.location.origin+window.location.pathname,Yi=r.documentId||null,KC({onSubmit:hU,onDelete:qU,onResolve:yU,onReply:gU,onEdit:bU}),EC(i=>{mn(),VC(i),Ki(i)}),dU(),await t(),lU(),NC(r,()=>K)}catch(i){console.error("[feedback-layer] Boot failed:",i)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function lU(){try{K=await Vs(Vi,Yi),le=await fU(K),We(K,le,be)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),Ir(`Failed to load comments: ${e.message}`,"error")}}async function fU(e){IC(),QC(),ge.clear();let r=new Set;be.clear();for(let t of e){if(t.parent)continue;let n={exact:t.quote,prefix:t.prefix,suffix:t.suffix};try{let i=await fn(n,ar);i&&t.status!=="closed"?(vn(i,t.id),r.add(t.id),be.set(t.id,i)):i&&t.status==="closed"?(r.add(t.id),be.set(t.id,i)):i||ge.add(t,n)}catch(i){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,i),ge.add(t,n)}}return ge.hasPending()&&(console.log(`[feedback-layer] ${ge.size()} comment(s) queued for deferred anchoring`),pU()),r}function pU(){st||(st=new MutationObserver(()=>{clearTimeout(zi),zi=setTimeout(vU,500)}),st.observe(ar,{childList:!0,subtree:!0}))}function QC(){st&&(st.disconnect(),st=null),clearTimeout(zi),zi=null}async function vU(){let e=ge.getAll(),r=!1;for(let{comment:t,selector:n}of e)try{let i=await fn(n,ar);i?(ge.remove(t.id),t.status!=="closed"&&vn(i,t.id),le.add(t.id),be.set(t.id,i),r=!0,console.log(`[feedback-layer] Deferred anchor succeeded for comment ${t.id}`)):ge.recordAttempt(t.id)||console.warn(`[feedback-layer] Gave up anchoring comment ${t.id} after max attempts`)}catch(i){console.warn(`[feedback-layer] Deferred anchor error for ${t.id}:`,i),ge.recordAttempt(t.id)}r&&We(K,le,be),ge.hasPending()||QC()}function dU(){document.addEventListener("mouseup",JC),document.addEventListener("keyup",JC)}function JC(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){hn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){hn();return}if(!ar.contains(r.commonAncestorContainer)){hn();return}mU(r)},10)}function mU(e){hn();let r=e.getBoundingClientRect();Ie=document.createElement("button"),Ie.className="fb-annotate-tooltip",Ie.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',Ie.style.top=window.scrollY+r.top-36+"px",Ie.style.left=window.scrollX+r.left+r.width/2-40+"px",Ie.addEventListener("mousedown",async t=>{t.preventDefault(),t.stopPropagation();let n=window.getSelection();if(!n||n.isCollapsed)return;let i=n.getRangeAt(0);try{kr=await TC(i,ar),zC(kr.exact)}catch(o){console.error("[feedback-layer] Failed to create selector:",o)}hn()}),document.body.appendChild(Ie)}function hn(){Ie&&(Ie.remove(),Ie=null)}async function hU({comment:e,commenter:r}){if(kr){try{let t=await Ji({uri:Vi,document:Yi,quote:kr.exact,prefix:kr.prefix,suffix:kr.suffix,body:e,author:r});K.push(t);let n=await fn({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ar);n&&(vn(n,t.id),le.add(t.id)),We(K,le,be),window.getSelection().removeAllRanges()}catch(t){console.error("[feedback-layer] Failed to create comment:",t),Ir(`Failed to save comment: ${t.message}`,"error")}kr=null}}async function yU(e,r){try{let n=await Js(e,r?"closed":"open"),i=K.findIndex(o=>o.id===e);if(i!==-1&&(K[i]=n),r)Ls(e);else{let o=n,u=await fn({exact:o.quote,prefix:o.prefix,suffix:o.suffix},ar);u?(vn(u,o.id),le.add(o.id)):le.delete(o.id)}We(K,le,be)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),Ir(`Failed to update comment: ${t.message}`,"error")}}async function gU({parent_id:e,comment:r,commenter:t}){try{let n=await Ji({uri:Vi,document:Yi,body:r,author:t,parent:e});K.push(n),We(K,le,be)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),Ir(`Failed to save reply: ${n.message}`,"error")}}async function bU(e,r){try{let t=await Ys(e,{body:r}),n=K.findIndex(i=>i.id===e);n!==-1&&(K[n]=t),We(K,le,be)}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),Ir(`Failed to update comment: ${t.message}`,"error")}}async function qU(e){try{await Qs(e),Ls(e),le.delete(e),ge.remove(e),K=K.filter(r=>r.id!==e&&r.parent!==e),We(K,le,be)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),Ir(`Failed to delete comment: ${r.message}`,"error")}}try{cU()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
