var FeedbackLayer=(()=>{var QC=Object.create;var Ks=Object.defineProperty;var XC=Object.getOwnPropertyDescriptor;var ZC=Object.getOwnPropertyNames;var eE=Object.getPrototypeOf,rE=Object.prototype.hasOwnProperty;var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var tE=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of ZC(r))!rE.call(e,i)&&i!==t&&Ks(e,i,{get:()=>r[i],enumerable:!(n=XC(r,i))||n.enumerable});return e};var g=(e,r,t)=>(t=e!=null?QC(eE(e)):{},tE(r||!e||!e.__esModule?Ks(t,"default",{value:e,enumerable:!0}):t,e));var P=a((bU,Xs)=>{"use strict";Xs.exports=function(e){try{return!!e()}catch{return!0}}});var Pr=a((qU,Zs)=>{"use strict";var nE=P();Zs.exports=!nE(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var A=a((xU,tc)=>{"use strict";var ec=Pr(),rc=Function.prototype,Ji=rc.call,iE=ec&&rc.bind.bind(Ji,Ji);tc.exports=ec?iE:function(e){return function(){return Ji.apply(e,arguments)}}});var B=a((SU,nc)=>{"use strict";var aE=A();nc.exports=aE({}.isPrototypeOf)});var _=a((Qi,ic)=>{"use strict";var ct=function(e){return e&&e.Math===Math&&e};ic.exports=ct(typeof globalThis=="object"&&globalThis)||ct(typeof window=="object"&&window)||ct(typeof self=="object"&&self)||ct(typeof global=="object"&&global)||ct(typeof Qi=="object"&&Qi)||function(){return this}()||Function("return this")()});var _r=a((wU,sc)=>{"use strict";var oE=Pr(),uc=Function.prototype,ac=uc.apply,oc=uc.call;sc.exports=typeof Reflect=="object"&&Reflect.apply||(oE?oc.bind(ac):function(){return oc.apply(ac,arguments)})});var qe=a((TU,lc)=>{"use strict";var cc=A(),uE=cc({}.toString),sE=cc("".slice);lc.exports=function(e){return sE(uE(e),8,-1)}});var lt=a((OU,fc)=>{"use strict";var cE=qe(),lE=A();fc.exports=function(e){if(cE(e)==="Function")return lE(e)}});var N=a((CU,pc)=>{"use strict";var Xi=typeof document=="object"&&document.all;pc.exports=typeof Xi>"u"&&Xi!==void 0?function(e){return typeof e=="function"||e===Xi}:function(e){return typeof e=="function"}});var G=a((EU,vc)=>{"use strict";var fE=P();vc.exports=!fE(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var D=a((IU,dc)=>{"use strict";var pE=Pr(),dn=Function.prototype.call;dc.exports=pE?dn.bind(dn):function(){return dn.apply(dn,arguments)}});var Zi=a(yc=>{"use strict";var mc={}.propertyIsEnumerable,hc=Object.getOwnPropertyDescriptor,vE=hc&&!mc.call({1:2},1);yc.f=vE?function(r){var t=hc(this,r);return!!t&&t.enumerable}:mc});var We=a((PU,gc)=>{"use strict";gc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var mn=a((_U,bc)=>{"use strict";var dE=A(),mE=P(),hE=qe(),ea=Object,yE=dE("".split);bc.exports=mE(function(){return!ea("z").propertyIsEnumerable(0)})?function(e){return hE(e)==="String"?yE(e,""):ea(e)}:ea});var ir=a((RU,qc)=>{"use strict";qc.exports=function(e){return e==null}});var ar=a((AU,xc)=>{"use strict";var gE=ir(),bE=TypeError;xc.exports=function(e){if(gE(e))throw new bE("Can't call method on "+e);return e}});var Ee=a((NU,Sc)=>{"use strict";var qE=mn(),xE=ar();Sc.exports=function(e){return qE(xE(e))}});var $=a((MU,wc)=>{"use strict";var SE=N();wc.exports=function(e){return typeof e=="object"?e!==null:SE(e)}});var H=a((jU,Tc)=>{"use strict";Tc.exports={}});var U=a(($U,Cc)=>{"use strict";var ra=H(),ta=_(),wE=N(),Oc=function(e){return wE(e)?e:void 0};Cc.exports=function(e,r){return arguments.length<2?Oc(ra[e])||Oc(ta[e]):ra[e]&&ra[e][r]||ta[e]&&ta[e][r]}});var Rr=a((LU,kc)=>{"use strict";var TE=_(),Ec=TE.navigator,Ic=Ec&&Ec.userAgent;kc.exports=Ic?String(Ic):""});var Ar=a((FU,Mc)=>{"use strict";var Nc=_(),na=Rr(),Pc=Nc.process,_c=Nc.Deno,Rc=Pc&&Pc.versions||_c&&_c.version,Ac=Rc&&Rc.v8,de,hn;Ac&&(de=Ac.split("."),hn=de[0]>0&&de[0]<4?1:+(de[0]+de[1]));!hn&&na&&(de=na.match(/Edge\/(\d+)/),(!de||de[1]>=74)&&(de=na.match(/Chrome\/(\d+)/),de&&(hn=+de[1])));Mc.exports=hn});var or=a((DU,$c)=>{"use strict";var jc=Ar(),OE=P(),CE=_(),EE=CE.String;$c.exports=!!Object.getOwnPropertySymbols&&!OE(function(){var e=Symbol("symbol detection");return!EE(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&jc&&jc<41})});var ia=a((BU,Lc)=>{"use strict";var IE=or();Lc.exports=IE&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Nr=a((GU,Fc)=>{"use strict";var kE=U(),PE=N(),_E=B(),RE=ia(),AE=Object;Fc.exports=RE?function(e){return typeof e=="symbol"}:function(e){var r=kE("Symbol");return PE(r)&&_E(r.prototype,AE(e))}});var Ke=a((UU,Dc)=>{"use strict";var NE=String;Dc.exports=function(e){try{return NE(e)}catch{return"Object"}}});var F=a((WU,Bc)=>{"use strict";var ME=N(),jE=Ke(),$E=TypeError;Bc.exports=function(e){if(ME(e))return e;throw new $E(jE(e)+" is not a function")}});var yn=a((KU,Gc)=>{"use strict";var LE=F(),FE=ir();Gc.exports=function(e,r){var t=e[r];return FE(t)?void 0:LE(t)}});var Wc=a((HU,Uc)=>{"use strict";var aa=D(),oa=N(),ua=$(),DE=TypeError;Uc.exports=function(e,r){var t,n;if(r==="string"&&oa(t=e.toString)&&!ua(n=aa(t,e))||oa(t=e.valueOf)&&!ua(n=aa(t,e))||r!=="string"&&oa(t=e.toString)&&!ua(n=aa(t,e)))return n;throw new DE("Can't convert object to primitive value")}});var Z=a((zU,Kc)=>{"use strict";Kc.exports=!0});var Vc=a((VU,zc)=>{"use strict";var Hc=_(),BE=Object.defineProperty;zc.exports=function(e,r){try{BE(Hc,e,{value:r,configurable:!0,writable:!0})}catch{Hc[e]=r}return r}});var ft=a((YU,Qc)=>{"use strict";var GE=Z(),UE=_(),WE=Vc(),Yc="__core-js_shared__",Jc=Qc.exports=UE[Yc]||WE(Yc,{});(Jc.versions||(Jc.versions=[])).push({version:"3.48.0",mode:GE?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var ur=a((JU,Zc)=>{"use strict";var Xc=ft();Zc.exports=function(e,r){return Xc[e]||(Xc[e]=r||{})}});var re=a((QU,el)=>{"use strict";var KE=ar(),HE=Object;el.exports=function(e){return HE(KE(e))}});var W=a((XU,rl)=>{"use strict";var zE=A(),VE=re(),YE=zE({}.hasOwnProperty);rl.exports=Object.hasOwn||function(r,t){return YE(VE(r),t)}});var Mr=a((ZU,tl)=>{"use strict";var JE=A(),QE=0,XE=Math.random(),ZE=JE(1.1.toString);tl.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+ZE(++QE+XE,36)}});var R=a((e5,il)=>{"use strict";var e0=_(),r0=ur(),nl=W(),t0=Mr(),n0=or(),i0=ia(),jr=e0.Symbol,sa=r0("wks"),a0=i0?jr.for||jr:jr&&jr.withoutSetter||t0;il.exports=function(e){return nl(sa,e)||(sa[e]=n0&&nl(jr,e)?jr[e]:a0("Symbol."+e)),sa[e]}});var sl=a((r5,ul)=>{"use strict";var o0=D(),al=$(),ol=Nr(),u0=yn(),s0=Wc(),c0=R(),l0=TypeError,f0=c0("toPrimitive");ul.exports=function(e,r){if(!al(e)||ol(e))return e;var t=u0(e,f0),n;if(t){if(r===void 0&&(r="default"),n=o0(t,e,r),!al(n)||ol(n))return n;throw new l0("Can't convert object to primitive value")}return r===void 0&&(r="number"),s0(e,r)}});var gn=a((t5,cl)=>{"use strict";var p0=sl(),v0=Nr();cl.exports=function(e){var r=p0(e,"string");return v0(r)?r:r+""}});var bn=a((n5,fl)=>{"use strict";var d0=_(),ll=$(),ca=d0.document,m0=ll(ca)&&ll(ca.createElement);fl.exports=function(e){return m0?ca.createElement(e):{}}});var la=a((i5,pl)=>{"use strict";var h0=G(),y0=P(),g0=bn();pl.exports=!h0&&!y0(function(){return Object.defineProperty(g0("div"),"a",{get:function(){return 7}}).a!==7})});var pt=a(dl=>{"use strict";var b0=G(),q0=D(),x0=Zi(),S0=We(),w0=Ee(),T0=gn(),O0=W(),C0=la(),vl=Object.getOwnPropertyDescriptor;dl.f=b0?vl:function(r,t){if(r=w0(r),t=T0(t),C0)try{return vl(r,t)}catch{}if(O0(r,t))return S0(!q0(x0.f,r,t),r[t])}});var fa=a((o5,ml)=>{"use strict";var E0=P(),I0=N(),k0=/#|\.prototype\./,vt=function(e,r){var t=_0[P0(e)];return t===A0?!0:t===R0?!1:I0(r)?E0(r):!!r},P0=vt.normalize=function(e){return String(e).replace(k0,".").toLowerCase()},_0=vt.data={},R0=vt.NATIVE="N",A0=vt.POLYFILL="P";ml.exports=vt});var z=a((u5,yl)=>{"use strict";var hl=lt(),N0=F(),M0=Pr(),j0=hl(hl.bind);yl.exports=function(e,r){return N0(e),r===void 0?e:M0?j0(e,r):function(){return e.apply(r,arguments)}}});var pa=a((s5,gl)=>{"use strict";var $0=G(),L0=P();gl.exports=$0&&L0(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var Q=a((c5,bl)=>{"use strict";var F0=$(),D0=String,B0=TypeError;bl.exports=function(e){if(F0(e))return e;throw new B0(D0(e)+" is not an object")}});var te=a(xl=>{"use strict";var G0=G(),U0=la(),W0=pa(),qn=Q(),ql=gn(),K0=TypeError,va=Object.defineProperty,H0=Object.getOwnPropertyDescriptor,da="enumerable",ma="configurable",ha="writable";xl.f=G0?W0?function(r,t,n){if(qn(r),t=ql(t),qn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&ha in n&&!n[ha]){var i=H0(r,t);i&&i[ha]&&(r[t]=n.value,n={configurable:ma in n?n[ma]:i[ma],enumerable:da in n?n[da]:i[da],writable:!1})}return va(r,t,n)}:va:function(r,t,n){if(qn(r),t=ql(t),qn(n),U0)try{return va(r,t,n)}catch{}if("get"in n||"set"in n)throw new K0("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var xe=a((f5,Sl)=>{"use strict";var z0=G(),V0=te(),Y0=We();Sl.exports=z0?function(e,r,t){return V0.f(e,r,Y0(1,t))}:function(e,r,t){return e[r]=t,e}});var x=a((p5,Tl)=>{"use strict";var dt=_(),J0=_r(),Q0=lt(),X0=N(),Z0=pt().f,eI=fa(),$r=H(),rI=z(),Lr=xe(),wl=W();ft();var tI=function(e){var r=function(t,n,i){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return J0(e,this,arguments)};return r.prototype=e.prototype,r};Tl.exports=function(e,r){var t=e.target,n=e.global,i=e.stat,o=e.proto,u=n?dt:i?dt[t]:dt[t]&&dt[t].prototype,l=n?$r:$r[t]||Lr($r,t,{})[t],c=l.prototype,s,f,p,v,d,h,m,y,q;for(v in r)s=eI(n?v:t+(i?".":"#")+v,e.forced),f=!s&&u&&wl(u,v),h=l[v],f&&(e.dontCallGetSet?(q=Z0(u,v),m=q&&q.value):m=u[v]),d=f&&m?m:r[v],!(!s&&!o&&typeof h==typeof d)&&(e.bind&&f?y=rI(d,dt):e.wrap&&f?y=tI(d):o&&X0(d)?y=Q0(d):y=d,(e.sham||d&&d.sham||h&&h.sham)&&Lr(y,"sham",!0),Lr(l,v,y),o&&(p=t+"Prototype",wl($r,p)||Lr($r,p,{}),Lr($r[p],v,d),e.real&&c&&(s||!c[v])&&Lr(c,v,d)))}});var Ie=a((v5,Ol)=>{"use strict";var nI=qe();Ol.exports=Array.isArray||function(r){return nI(r)==="Array"}});var xn=a((d5,El)=>{"use strict";var iI=R(),aI=iI("toStringTag"),Cl={};Cl[aI]="z";El.exports=String(Cl)==="[object z]"});var mt=a((m5,Il)=>{"use strict";var oI=xn(),uI=N(),Sn=qe(),sI=R(),cI=sI("toStringTag"),lI=Object,fI=Sn(function(){return arguments}())==="Arguments",pI=function(e,r){try{return e[r]}catch{}};Il.exports=oI?Sn:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=pI(r=lI(e),cI))=="string"?t:fI?Sn(r):(n=Sn(r))==="Object"&&uI(r.callee)?"Arguments":n}});var ga=a((h5,kl)=>{"use strict";var vI=A(),dI=N(),ya=ft(),mI=vI(Function.toString);dI(ya.inspectSource)||(ya.inspectSource=function(e){return mI(e)});kl.exports=ya.inspectSource});var yt=a((y5,Nl)=>{"use strict";var hI=A(),yI=P(),Pl=N(),gI=mt(),bI=U(),qI=ga(),_l=function(){},Rl=bI("Reflect","construct"),ba=/^\s*(?:class|function)\b/,xI=hI(ba.exec),SI=!ba.test(_l),ht=function(r){if(!Pl(r))return!1;try{return Rl(_l,[],r),!0}catch{return!1}},Al=function(r){if(!Pl(r))return!1;switch(gI(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return SI||!!xI(ba,qI(r))}catch{return!0}};Al.sham=!0;Nl.exports=!Rl||yI(function(){var e;return ht(ht.call)||!ht(Object)||!ht(function(){e=!0})||e})?Al:ht});var jl=a((g5,Ml)=>{"use strict";var wI=Math.ceil,TI=Math.floor;Ml.exports=Math.trunc||function(r){var t=+r;return(t>0?TI:wI)(t)}});var wn=a((b5,$l)=>{"use strict";var OI=jl();$l.exports=function(e){var r=+e;return r!==r||r===0?0:OI(r)}});var qa=a((q5,Ll)=>{"use strict";var CI=wn(),EI=Math.max,II=Math.min;Ll.exports=function(e,r){var t=CI(e);return t<0?EI(t+r,0):II(t,r)}});var xa=a((x5,Fl)=>{"use strict";var kI=wn(),PI=Math.min;Fl.exports=function(e){var r=kI(e);return r>0?PI(r,9007199254740991):0}});var le=a((S5,Dl)=>{"use strict";var _I=xa();Dl.exports=function(e){return _I(e.length)}});var Fr=a((w5,Bl)=>{"use strict";var RI=G(),AI=te(),NI=We();Bl.exports=function(e,r,t){RI?AI.f(e,r,NI(0,t)):e[r]=t}});var Dr=a((T5,Gl)=>{"use strict";var MI=G(),jI=Ie(),$I=TypeError,LI=Object.getOwnPropertyDescriptor,FI=MI&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();Gl.exports=FI?function(e,r){if(jI(e)&&!LI(e,"length").writable)throw new $I("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var gt=a((O5,Ul)=>{"use strict";var DI=P(),BI=R(),GI=Ar(),UI=BI("species");Ul.exports=function(e){return GI>=51||!DI(function(){var r=[],t=r.constructor={};return t[UI]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var sr=a((C5,Wl)=>{"use strict";var WI=A();Wl.exports=WI([].slice)});var zl=a(()=>{"use strict";var KI=x(),Kl=Ie(),HI=yt(),zI=$(),Hl=qa(),VI=le(),YI=Ee(),JI=Fr(),QI=Dr(),XI=R(),ZI=gt(),ek=sr(),rk=ZI("slice"),tk=XI("species"),Sa=Array,nk=Math.max;KI({target:"Array",proto:!0,forced:!rk},{slice:function(r,t){var n=YI(this),i=VI(n),o=Hl(r,i),u=Hl(t===void 0?i:t,i),l,c,s;if(Kl(n)&&(l=n.constructor,HI(l)&&(l===Sa||Kl(l.prototype))?l=void 0:zI(l)&&(l=l[tk],l===null&&(l=void 0)),l===Sa||l===void 0))return ek(n,o,u);for(c=new(l===void 0?Sa:l)(nk(u-o,0)),s=0;o<u;o++,s++)o in n&&JI(c,s,n[o]);return QI(c,s),c}})});var oe=a((k5,Vl)=>{"use strict";var ik=_(),ak=H();Vl.exports=function(e,r){var t=ak[e+"Prototype"],n=t&&t[r];if(n)return n;var i=ik[e],o=i&&i.prototype;return o&&o[r]}});var Jl=a((P5,Yl)=>{"use strict";zl();var ok=oe();Yl.exports=ok("Array","slice")});var Xl=a((_5,Ql)=>{"use strict";var uk=B(),sk=Jl(),wa=Array.prototype;Ql.exports=function(e){var r=e.slice;return e===wa||uk(wa,e)&&r===wa.slice?sk:r}});var ef=a((R5,Zl)=>{"use strict";var ck=Xl();Zl.exports=ck});var tf=a((A5,rf)=>{"use strict";var lk=ef();rf.exports=lk});var af=a((N5,nf)=>{"use strict";var fk=tf();nf.exports=fk});var Ta=a((M5,of)=>{"use strict";of.exports=af()});var Br=a((j5,uf)=>{uf.exports=Ta()});var He=a(($5,sf)=>{"use strict";var pk=mt(),vk=String;sf.exports=function(e){if(pk(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return vk(e)}});var pf=a((L5,ff)=>{"use strict";var Oa=A(),dk=wn(),mk=He(),hk=ar(),yk=Oa("".charAt),cf=Oa("".charCodeAt),gk=Oa("".slice),lf=function(e){return function(r,t){var n=mk(hk(r)),i=dk(t),o=n.length,u,l;return i<0||i>=o?e?"":void 0:(u=cf(n,i),u<55296||u>56319||i+1===o||(l=cf(n,i+1))<56320||l>57343?e?yk(n,i):u:e?gk(n,i,i+2):(u-55296<<10)+(l-56320)+65536)}};ff.exports={codeAt:lf(!1),charAt:lf(!0)}});var mf=a((F5,df)=>{"use strict";var bk=_(),qk=N(),vf=bk.WeakMap;df.exports=qk(vf)&&/native code/.test(String(vf))});var bt=a((D5,yf)=>{"use strict";var xk=ur(),Sk=Mr(),hf=xk("keys");yf.exports=function(e){return hf[e]||(hf[e]=Sk(e))}});var Gr=a((B5,gf)=>{"use strict";gf.exports={}});var ze=a((G5,xf)=>{"use strict";var wk=mf(),qf=_(),Tk=$(),Ok=xe(),Ca=W(),Ea=ft(),Ck=bt(),Ek=Gr(),bf="Object already initialized",Ia=qf.TypeError,Ik=qf.WeakMap,Tn,qt,On,kk=function(e){return On(e)?qt(e):Tn(e,{})},Pk=function(e){return function(r){var t;if(!Tk(r)||(t=qt(r)).type!==e)throw new Ia("Incompatible receiver, "+e+" required");return t}};wk||Ea.state?(me=Ea.state||(Ea.state=new Ik),me.get=me.get,me.has=me.has,me.set=me.set,Tn=function(e,r){if(me.has(e))throw new Ia(bf);return r.facade=e,me.set(e,r),r},qt=function(e){return me.get(e)||{}},On=function(e){return me.has(e)}):(cr=Ck("state"),Ek[cr]=!0,Tn=function(e,r){if(Ca(e,cr))throw new Ia(bf);return r.facade=e,Ok(e,cr,r),r},qt=function(e){return Ca(e,cr)?e[cr]:{}},On=function(e){return Ca(e,cr)});var me,cr;xf.exports={set:Tn,get:qt,has:On,enforce:kk,getterFor:Pk}});var Tf=a((U5,wf)=>{"use strict";var ka=G(),_k=W(),Sf=Function.prototype,Rk=ka&&Object.getOwnPropertyDescriptor,Pa=_k(Sf,"name"),Ak=Pa&&function(){}.name==="something",Nk=Pa&&(!ka||ka&&Rk(Sf,"name").configurable);wf.exports={EXISTS:Pa,PROPER:Ak,CONFIGURABLE:Nk}});var _a=a((W5,Cf)=>{"use strict";var Mk=Ee(),jk=qa(),$k=le(),Of=function(e){return function(r,t,n){var i=Mk(r),o=$k(i);if(o===0)return!e&&-1;var u=jk(n,o),l;if(e&&t!==t){for(;o>u;)if(l=i[u++],l!==l)return!0}else for(;o>u;u++)if((e||u in i)&&i[u]===t)return e||u||0;return!e&&-1}};Cf.exports={includes:Of(!0),indexOf:Of(!1)}});var Aa=a((K5,If)=>{"use strict";var Lk=A(),Ra=W(),Fk=Ee(),Dk=_a().indexOf,Bk=Gr(),Ef=Lk([].push);If.exports=function(e,r){var t=Fk(e),n=0,i=[],o;for(o in t)!Ra(Bk,o)&&Ra(t,o)&&Ef(i,o);for(;r.length>n;)Ra(t,o=r[n++])&&(~Dk(i,o)||Ef(i,o));return i}});var Cn=a((H5,kf)=>{"use strict";kf.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var En=a((z5,Pf)=>{"use strict";var Gk=Aa(),Uk=Cn();Pf.exports=Object.keys||function(r){return Gk(r,Uk)}});var Na=a(_f=>{"use strict";var Wk=G(),Kk=pa(),Hk=te(),zk=Q(),Vk=Ee(),Yk=En();_f.f=Wk&&!Kk?Object.defineProperties:function(r,t){zk(r);for(var n=Vk(t),i=Yk(t),o=i.length,u=0,l;o>u;)Hk.f(r,l=i[u++],n[l]);return r}});var Ma=a((Y5,Rf)=>{"use strict";var Jk=U();Rf.exports=Jk("document","documentElement")});var Ve=a((J5,Ff)=>{"use strict";var Qk=Q(),Xk=Na(),Af=Cn(),Zk=Gr(),e1=Ma(),r1=bn(),t1=bt(),Nf=">",Mf="<",$a="prototype",La="script",$f=t1("IE_PROTO"),ja=function(){},Lf=function(e){return Mf+La+Nf+e+Mf+"/"+La+Nf},jf=function(e){e.write(Lf("")),e.close();var r=e.parentWindow.Object;return e=null,r},n1=function(){var e=r1("iframe"),r="java"+La+":",t;return e.style.display="none",e1.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(Lf("document.F=Object")),t.close(),t.F},In,kn=function(){try{In=new ActiveXObject("htmlfile")}catch{}kn=typeof document<"u"?document.domain&&In?jf(In):n1():jf(In);for(var e=Af.length;e--;)delete kn[$a][Af[e]];return kn()};Zk[$f]=!0;Ff.exports=Object.create||function(r,t){var n;return r!==null?(ja[$a]=Qk(r),n=new ja,ja[$a]=null,n[$f]=r):n=kn(),t===void 0?n:Xk.f(n,t)}});var Fa=a((Q5,Df)=>{"use strict";var i1=P();Df.exports=!i1(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var xt=a((X5,Gf)=>{"use strict";var a1=W(),o1=N(),u1=re(),s1=bt(),c1=Fa(),Bf=s1("IE_PROTO"),Da=Object,l1=Da.prototype;Gf.exports=c1?Da.getPrototypeOf:function(e){var r=u1(e);if(a1(r,Bf))return r[Bf];var t=r.constructor;return o1(t)&&r instanceof t?t.prototype:r instanceof Da?l1:null}});var ke=a((Z5,Uf)=>{"use strict";var f1=xe();Uf.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:f1(e,r,t),e}});var Wa=a((eW,Hf)=>{"use strict";var p1=P(),v1=N(),d1=$(),m1=Ve(),Wf=xt(),h1=ke(),y1=R(),g1=Z(),Ua=y1("iterator"),Kf=!1,Pe,Ba,Ga;[].keys&&(Ga=[].keys(),"next"in Ga?(Ba=Wf(Wf(Ga)),Ba!==Object.prototype&&(Pe=Ba)):Kf=!0);var b1=!d1(Pe)||p1(function(){var e={};return Pe[Ua].call(e)!==e});b1?Pe={}:g1&&(Pe=m1(Pe));v1(Pe[Ua])||h1(Pe,Ua,function(){return this});Hf.exports={IteratorPrototype:Pe,BUGGY_SAFARI_ITERATORS:Kf}});var Vf=a((rW,zf)=>{"use strict";var q1=xn(),x1=mt();zf.exports=q1?{}.toString:function(){return"[object "+x1(this)+"]"}});var _e=a((tW,Jf)=>{"use strict";var S1=xn(),w1=te().f,T1=xe(),O1=W(),C1=Vf(),E1=R(),Yf=E1("toStringTag");Jf.exports=function(e,r,t,n){var i=t?e:e&&e.prototype;i&&(O1(i,Yf)||w1(i,Yf,{configurable:!0,value:r}),n&&!S1&&T1(i,"toString",C1))}});var lr=a((nW,Qf)=>{"use strict";Qf.exports={}});var Zf=a((iW,Xf)=>{"use strict";var I1=Wa().IteratorPrototype,k1=Ve(),P1=We(),_1=_e(),R1=lr(),A1=function(){return this};Xf.exports=function(e,r,t,n){var i=r+" Iterator";return e.prototype=k1(I1,{next:P1(+!n,t)}),_1(e,i,!1,!0),R1[i]=A1,e}});var rp=a((aW,ep)=>{"use strict";var N1=A(),M1=F();ep.exports=function(e,r,t){try{return N1(M1(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var np=a((oW,tp)=>{"use strict";var j1=$();tp.exports=function(e){return j1(e)||e===null}});var ap=a((uW,ip)=>{"use strict";var $1=np(),L1=String,F1=TypeError;ip.exports=function(e){if($1(e))return e;throw new F1("Can't set "+L1(e)+" as a prototype")}});var St=a((sW,op)=>{"use strict";var D1=rp(),B1=$(),G1=ar(),U1=ap();op.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=D1(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(i,o){return G1(i),U1(o),B1(i)&&(e?t(i,o):i.__proto__=o),i}}():void 0)});var Rn=a((cW,hp)=>{"use strict";var W1=x(),K1=D(),Pn=Z(),dp=Tf(),H1=N(),z1=Zf(),up=xt(),sp=St(),V1=_e(),Y1=xe(),Ka=ke(),J1=R(),cp=lr(),mp=Wa(),Q1=dp.PROPER,X1=dp.CONFIGURABLE,lp=mp.IteratorPrototype,_n=mp.BUGGY_SAFARI_ITERATORS,wt=J1("iterator"),fp="keys",Tt="values",pp="entries",vp=function(){return this};hp.exports=function(e,r,t,n,i,o,u){z1(t,r,n);var l=function(q){if(q===i&&v)return v;if(!_n&&q&&q in f)return f[q];switch(q){case fp:return function(){return new t(this,q)};case Tt:return function(){return new t(this,q)};case pp:return function(){return new t(this,q)}}return function(){return new t(this)}},c=r+" Iterator",s=!1,f=e.prototype,p=f[wt]||f["@@iterator"]||i&&f[i],v=!_n&&p||l(i),d=r==="Array"&&f.entries||p,h,m,y;if(d&&(h=up(d.call(new e)),h!==Object.prototype&&h.next&&(!Pn&&up(h)!==lp&&(sp?sp(h,lp):H1(h[wt])||Ka(h,wt,vp)),V1(h,c,!0,!0),Pn&&(cp[c]=vp))),Q1&&i===Tt&&p&&p.name!==Tt&&(!Pn&&X1?Y1(f,"name",Tt):(s=!0,v=function(){return K1(p,this)})),i)if(m={values:l(Tt),keys:o?v:l(fp),entries:l(pp)},u)for(y in m)(_n||s||!(y in f))&&Ka(f,y,m[y]);else W1({target:r,proto:!0,forced:_n||s},m);return(!Pn||u)&&f[wt]!==v&&Ka(f,wt,v,{name:i}),cp[r]=v,m}});var An=a((lW,yp)=>{"use strict";yp.exports=function(e,r){return{value:e,done:r}}});var fr=a(()=>{"use strict";var Z1=pf().charAt,eP=He(),bp=ze(),rP=Rn(),gp=An(),qp="String Iterator",tP=bp.set,nP=bp.getterFor(qp);rP(String,"String",function(e){tP(this,{type:qp,string:eP(e),index:0})},function(){var r=nP(this),t=r.string,n=r.index,i;return n>=t.length?gp(void 0,!0):(i=Z1(t,n),r.index+=i.length,gp(i,!1))})});var Ha=a((vW,Sp)=>{"use strict";var iP=D(),xp=Q(),aP=yn();Sp.exports=function(e,r,t){var n,i;xp(e);try{if(n=aP(e,"return"),!n){if(r==="throw")throw t;return t}n=iP(n,e)}catch(o){i=!0,n=o}if(r==="throw")throw t;if(i)throw n;return xp(n),t}});var Tp=a((dW,wp)=>{"use strict";var oP=Q(),uP=Ha();wp.exports=function(e,r,t,n){try{return n?r(oP(t)[0],t[1]):r(t)}catch(i){uP(e,"throw",i)}}});var za=a((mW,Op)=>{"use strict";var sP=R(),cP=lr(),lP=sP("iterator"),fP=Array.prototype;Op.exports=function(e){return e!==void 0&&(cP.Array===e||fP[lP]===e)}});var Ot=a((hW,Ep)=>{"use strict";var pP=mt(),Cp=yn(),vP=ir(),dP=lr(),mP=R(),hP=mP("iterator");Ep.exports=function(e){if(!vP(e))return Cp(e,hP)||Cp(e,"@@iterator")||dP[pP(e)]}});var Nn=a((yW,Ip)=>{"use strict";var yP=D(),gP=F(),bP=Q(),qP=Ke(),xP=Ot(),SP=TypeError;Ip.exports=function(e,r){var t=arguments.length<2?xP(e):r;if(gP(t))return bP(yP(t,e));throw new SP(qP(e)+" is not iterable")}});var Rp=a((gW,_p)=>{"use strict";var wP=z(),TP=D(),OP=re(),CP=Tp(),EP=za(),IP=yt(),kP=le(),kp=Fr(),PP=Dr(),_P=Nn(),RP=Ot(),Pp=Array;_p.exports=function(r){var t=OP(r),n=IP(this),i=arguments.length,o=i>1?arguments[1]:void 0,u=o!==void 0;u&&(o=wP(o,i>2?arguments[2]:void 0));var l=RP(t),c=0,s,f,p,v,d,h;if(l&&!(this===Pp&&EP(l)))for(f=n?new this:[],v=_P(t,l),d=v.next;!(p=TP(d,v)).done;c++)h=u?CP(v,o,[p.value,c],!0):p.value,kp(f,c,h);else for(s=kP(t),f=n?new this(s):Pp(s);s>c;c++)h=u?o(t[c],c):t[c],kp(f,c,h);return PP(f,c),f}});var Ya=a((bW,jp)=>{"use strict";var AP=R(),Np=AP("iterator"),Mp=!1;try{Ap=0,Va={next:function(){return{done:!!Ap++}},return:function(){Mp=!0}},Va[Np]=function(){return this},Array.from(Va,function(){throw 2})}catch{}var Ap,Va;jp.exports=function(e,r){try{if(!r&&!Mp)return!1}catch{return!1}var t=!1;try{var n={};n[Np]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var $p=a(()=>{"use strict";var NP=x(),MP=Rp(),jP=Ya(),$P=!jP(function(e){Array.from(e)});NP({target:"Array",stat:!0,forced:$P},{from:MP})});var Fp=a((SW,Lp)=>{"use strict";fr();$p();var LP=H();Lp.exports=LP.Array.from});var Bp=a((wW,Dp)=>{"use strict";var FP=Fp();Dp.exports=FP});var Up=a((TW,Gp)=>{"use strict";var DP=Bp();Gp.exports=DP});var Kp=a((OW,Wp)=>{"use strict";var BP=Up();Wp.exports=BP});var Ja=a((CW,Hp)=>{"use strict";Hp.exports=Kp()});var Mn=a((EW,zp)=>{zp.exports=Ja()});var Ct=a((IW,Vp)=>{"use strict";var GP=TypeError,UP=9007199254740991;Vp.exports=function(e){if(e>UP)throw GP("Maximum allowed index exceeded");return e}});var Xp=a((kW,Qp)=>{"use strict";var Yp=Ie(),WP=yt(),KP=$(),HP=R(),zP=HP("species"),Jp=Array;Qp.exports=function(e){var r;return Yp(e)&&(r=e.constructor,WP(r)&&(r===Jp||Yp(r.prototype))?r=void 0:KP(r)&&(r=r[zP],r===null&&(r=void 0))),r===void 0?Jp:r}});var jn=a((PW,Zp)=>{"use strict";var VP=Xp();Zp.exports=function(e,r){return new(VP(e))(r===0?0:r)}});var Qa=a(()=>{"use strict";var YP=x(),JP=P(),QP=Ie(),XP=$(),ZP=re(),e_=le(),ev=Ct(),rv=Fr(),r_=Dr(),t_=jn(),n_=gt(),i_=R(),a_=Ar(),tv=i_("isConcatSpreadable"),o_=a_>=51||!JP(function(){var e=[];return e[tv]=!1,e.concat()[0]!==e}),u_=function(e){if(!XP(e))return!1;var r=e[tv];return r!==void 0?!!r:QP(e)},s_=!o_||!n_("concat");YP({target:"Array",proto:!0,arity:1,forced:s_},{concat:function(r){var t=ZP(this),n=t_(t,0),i=0,o,u,l,c,s;for(o=-1,l=arguments.length;o<l;o++)if(s=o===-1?t:arguments[o],u_(s))for(c=e_(s),ev(i+c),u=0;u<c;u++,i++)u in s&&rv(n,i,s[u]);else ev(i+1),rv(n,i++,s);return r_(n,i),n}})});var Et=a(()=>{});var It=a(nv=>{"use strict";var c_=Aa(),l_=Cn(),f_=l_.concat("length","prototype");nv.f=Object.getOwnPropertyNames||function(r){return c_(r,f_)}});var Xa=a((jW,ov)=>{"use strict";var p_=qe(),v_=Ee(),iv=It().f,d_=sr(),av=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],m_=function(e){try{return iv(e)}catch{return d_(av)}};ov.exports.f=function(r){return av&&p_(r)==="Window"?m_(r):iv(v_(r))}});var $n=a(uv=>{"use strict";uv.f=Object.getOwnPropertySymbols});var Ln=a((LW,sv)=>{"use strict";var h_=te();sv.exports=function(e,r,t){return h_.f(e,r,t)}});var Ur=a(cv=>{"use strict";var y_=R();cv.f=y_});var M=a((DW,fv)=>{"use strict";var lv=H(),g_=W(),b_=Ur(),q_=te().f;fv.exports=function(e){var r=lv.Symbol||(lv.Symbol={});g_(r,e)||q_(r,e,{value:b_.f(e)})}});var Za=a((BW,pv)=>{"use strict";var x_=D(),S_=U(),w_=R(),T_=ke();pv.exports=function(){var e=S_("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=w_("toPrimitive");r&&!r[n]&&T_(r,n,function(i){return x_(t,this)},{arity:1})}});var kt=a((GW,dv)=>{"use strict";var O_=z(),C_=mn(),E_=re(),I_=le(),vv=jn(),eo=Fr(),Ye=function(e){var r=e===1,t=e===2,n=e===3,i=e===4,o=e===6,u=e===7,l=e===5||o;return function(c,s,f){for(var p=E_(c),v=C_(p),d=I_(v),h=O_(s,f),m=0,y=0,q=r?vv(c,d):t||u?vv(c,0):void 0,b,I;d>m;m++)if((l||m in v)&&(b=v[m],I=h(b,m,p),e))if(r)eo(q,m,I);else if(I)switch(e){case 3:return!0;case 5:return b;case 6:return m;case 2:eo(q,y++,b)}else switch(e){case 4:return!1;case 7:eo(q,y++,b)}return o?-1:n||i?i:q}};dv.exports={forEach:Ye(0),map:Ye(1),filter:Ye(2),some:Ye(3),every:Ye(4),find:Ye(5),findIndex:Ye(6),filterReject:Ye(7)}});var _v=a(()=>{"use strict";var Fn=x(),Rt=_(),co=D(),k_=A(),P_=Z(),Wr=G(),Kr=or(),__=P(),K=W(),R_=B(),io=Q(),Dn=Ee(),lo=gn(),A_=He(),ao=We(),Hr=Ve(),yv=En(),N_=It(),gv=Xa(),M_=$n(),bv=pt(),qv=te(),j_=Na(),xv=Zi(),ro=ke(),$_=Ln(),fo=ur(),L_=bt(),Sv=Gr(),mv=Mr(),F_=R(),D_=Ur(),B_=M(),G_=Za(),U_=_e(),wv=ze(),Bn=kt().forEach,ne=L_("hidden"),Gn="Symbol",_t="prototype",W_=wv.set,hv=wv.getterFor(Gn),fe=Object[_t],pr=Rt.Symbol,Pt=pr&&pr[_t],K_=Rt.RangeError,H_=Rt.TypeError,to=Rt.QObject,Tv=bv.f,vr=qv.f,Ov=gv.f,z_=xv.f,Cv=k_([].push),Re=fo("symbols"),At=fo("op-symbols"),V_=fo("wks"),oo=!to||!to[_t]||!to[_t].findChild,Ev=function(e,r,t){var n=Tv(fe,r);n&&delete fe[r],vr(e,r,t),n&&e!==fe&&vr(fe,r,n)},uo=Wr&&__(function(){return Hr(vr({},"a",{get:function(){return vr(this,"a",{value:7}).a}})).a!==7})?Ev:vr,no=function(e,r){var t=Re[e]=Hr(Pt);return W_(t,{type:Gn,tag:e,description:r}),Wr||(t.description=r),t},Un=function(r,t,n){r===fe&&Un(At,t,n),io(r);var i=lo(t);return io(n),K(Re,i)?(n.enumerable?(K(r,ne)&&r[ne][i]&&(r[ne][i]=!1),n=Hr(n,{enumerable:ao(0,!1)})):(K(r,ne)||vr(r,ne,ao(1,Hr(null))),r[ne][i]=!0),uo(r,i,n)):vr(r,i,n)},po=function(r,t){io(r);var n=Dn(t),i=yv(n).concat(Pv(n));return Bn(i,function(o){(!Wr||co(so,n,o))&&Un(r,o,n[o])}),r},Y_=function(r,t){return t===void 0?Hr(r):po(Hr(r),t)},so=function(r){var t=lo(r),n=co(z_,this,t);return this===fe&&K(Re,t)&&!K(At,t)?!1:n||!K(this,t)||!K(Re,t)||K(this,ne)&&this[ne][t]?n:!0},Iv=function(r,t){var n=Dn(r),i=lo(t);if(!(n===fe&&K(Re,i)&&!K(At,i))){var o=Tv(n,i);return o&&K(Re,i)&&!(K(n,ne)&&n[ne][i])&&(o.enumerable=!0),o}},kv=function(r){var t=Ov(Dn(r)),n=[];return Bn(t,function(i){!K(Re,i)&&!K(Sv,i)&&Cv(n,i)}),n},Pv=function(e){var r=e===fe,t=Ov(r?At:Dn(e)),n=[];return Bn(t,function(i){K(Re,i)&&(!r||K(fe,i))&&Cv(n,Re[i])}),n};Kr||(pr=function(){if(R_(Pt,this))throw new H_("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:A_(arguments[0]),t=mv(r),n=function(i){var o=this===void 0?Rt:this;o===fe&&co(n,At,i),K(o,ne)&&K(o[ne],t)&&(o[ne][t]=!1);var u=ao(1,i);try{uo(o,t,u)}catch(l){if(!(l instanceof K_))throw l;Ev(o,t,u)}};return Wr&&oo&&uo(fe,t,{configurable:!0,set:n}),no(t,r)},Pt=pr[_t],ro(Pt,"toString",function(){return hv(this).tag}),ro(pr,"withoutSetter",function(e){return no(mv(e),e)}),xv.f=so,qv.f=Un,j_.f=po,bv.f=Iv,N_.f=gv.f=kv,M_.f=Pv,D_.f=function(e){return no(F_(e),e)},Wr&&($_(Pt,"description",{configurable:!0,get:function(){return hv(this).description}}),P_||ro(fe,"propertyIsEnumerable",so,{unsafe:!0})));Fn({global:!0,constructor:!0,wrap:!0,forced:!Kr,sham:!Kr},{Symbol:pr});Bn(yv(V_),function(e){B_(e)});Fn({target:Gn,stat:!0,forced:!Kr},{useSetter:function(){oo=!0},useSimple:function(){oo=!1}});Fn({target:"Object",stat:!0,forced:!Kr,sham:!Wr},{create:Y_,defineProperty:Un,defineProperties:po,getOwnPropertyDescriptor:Iv});Fn({target:"Object",stat:!0,forced:!Kr},{getOwnPropertyNames:kv});G_();U_(pr,Gn);Sv[ne]=!0});var vo=a((KW,Rv)=>{"use strict";var J_=or();Rv.exports=J_&&!!Symbol.for&&!!Symbol.keyFor});var Nv=a(()=>{"use strict";var Q_=x(),X_=U(),Z_=W(),eR=He(),Av=ur(),rR=vo(),mo=Av("string-to-symbol-registry"),tR=Av("symbol-to-string-registry");Q_({target:"Symbol",stat:!0,forced:!rR},{for:function(e){var r=eR(e);if(Z_(mo,r))return mo[r];var t=X_("Symbol")(r);return mo[r]=t,tR[t]=r,t}})});var jv=a(()=>{"use strict";var nR=x(),iR=W(),aR=Nr(),oR=Ke(),uR=ur(),sR=vo(),Mv=uR("symbol-to-string-registry");nR({target:"Symbol",stat:!0,forced:!sR},{keyFor:function(r){if(!aR(r))throw new TypeError(oR(r)+" is not a symbol");if(iR(Mv,r))return Mv[r]}})});var Lv=a((JW,$v)=>{"use strict";var cR=$(),lR=ze().get;$v.exports=function(r){if(!cR(r))return!1;var t=lR(r);return!!t&&t.type==="RawJSON"}});var Uv=a((QW,Gv)=>{"use strict";var ho=A(),fR=W(),Wn=SyntaxError,pR=parseInt,vR=String.fromCharCode,dR=ho("".charAt),Fv=ho("".slice),Dv=ho(/./.exec),Bv={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},mR=/^[\da-f]{4}$/i,hR=/^[\u0000-\u001F]$/;Gv.exports=function(e,r){for(var t=!0,n="";r<e.length;){var i=dR(e,r);if(i==="\\"){var o=Fv(e,r,r+2);if(fR(Bv,o))n+=Bv[o],r+=2;else if(o==="\\u"){r+=2;var u=Fv(e,r,r+4);if(!Dv(mR,u))throw new Wn("Bad Unicode escape at: "+r);n+=vR(pR(u,16)),r+=4}else throw new Wn('Unknown escape sequence: "'+o+'"')}else if(i==='"'){t=!1,r++;break}else{if(Dv(hR,i))throw new Wn("Bad control character in string literal at: "+r);n+=i,r++}}if(t)throw new Wn("Unterminated string at: "+r);return{value:n,end:r}}});var Kv=a((XW,Wv)=>{"use strict";var yR=P();Wv.exports=!yR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var ad=a(()=>{"use strict";var gR=x(),Zv=U(),bR=_r(),ed=D(),dr=A(),rd=P(),Hv=Ie(),Hn=N(),qR=Lv(),zv=Nr(),Vv=qe(),xR=He(),SR=sr(),wR=Uv(),TR=Mr(),OR=or(),yo=Kv(),td=String,Je=Zv("JSON","stringify"),Kn=dr(/./.exec),bo=dr("".charAt),CR=dr("".charCodeAt),ER=dr("".replace),go=dr("".slice),qo=dr([].push),IR=dr(1.1.toString),kR=/[\uD800-\uDFFF]/g,Yv=/^[\uD800-\uDBFF]$/,Jv=/^[\uDC00-\uDFFF]$/,xo=TR(),Qv=xo.length,nd=!OR||rd(function(){var e=Zv("Symbol")("stringify detection");return Je([e])!=="[null]"||Je({a:e})!=="{}"||Je(Object(e))!=="{}"}),Xv=rd(function(){return Je("\uDF06\uD834")!=='"\\udf06\\ud834"'||Je("\uDEAD")!=='"\\udead"'}),PR=nd?function(e,r){var t=SR(arguments),n=id(r);if(!(!Hn(n)&&(e===void 0||zv(e))))return t[1]=function(i,o){if(Hn(n)&&(o=ed(n,this,td(i),o)),!zv(o))return o},bR(Je,null,t)}:Je,_R=function(e,r,t){var n=bo(t,r-1),i=bo(t,r+1);return Kn(Yv,e)&&!Kn(Jv,i)||Kn(Jv,e)&&!Kn(Yv,n)?"\\u"+IR(CR(e,0),16):e},id=function(e){if(Hn(e))return e;if(Hv(e)){for(var r=e.length,t=[],n=0;n<r;n++){var i=e[n];typeof i=="string"?qo(t,i):(typeof i=="number"||Vv(i)==="Number"||Vv(i)==="String")&&qo(t,xR(i))}var o=t.length,u=!0;return function(l,c){if(u)return u=!1,c;if(Hv(this))return c;for(var s=0;s<o;s++)if(t[s]===l)return c}}};Je&&gR({target:"JSON",stat:!0,arity:3,forced:nd||Xv||!yo},{stringify:function(r,t,n){var i=id(t),o=[],u=PR(r,function(d,h){var m=Hn(i)?ed(i,this,td(d),h):h;return!yo&&qR(m)?xo+(qo(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(Xv&&(u=ER(u,kR,_R)),yo))return u;for(var l="",c=u.length,s=0;s<c;s++){var f=bo(u,s);if(f==='"'){var p=wR(u,++s).end-1,v=go(u,s,p);l+=go(v,0,Qv)===xo?o[go(v,Qv)]:'"'+v+'"',s=p}else l+=f}return l}})});var ud=a(()=>{"use strict";var RR=x(),AR=or(),NR=P(),od=$n(),MR=re(),jR=!AR||NR(function(){od.f(1)});RR({target:"Object",stat:!0,forced:jR},{getOwnPropertySymbols:function(r){var t=od.f;return t?t(MR(r)):[]}})});var sd=a(()=>{"use strict";_v();Nv();jv();ad();ud()});var So=a(()=>{"use strict";var $R=M();$R("asyncDispose")});var wo=a(()=>{"use strict";var LR=M();LR("asyncIterator")});var cd=a(()=>{});var To=a(()=>{"use strict";var FR=M();FR("dispose")});var ld=a(()=>{"use strict";var DR=M();DR("hasInstance")});var fd=a(()=>{"use strict";var BR=M();BR("isConcatSpreadable")});var Oo=a(()=>{"use strict";var GR=M();GR("iterator")});var pd=a(()=>{"use strict";var UR=M();UR("match")});var vd=a(()=>{"use strict";var WR=M();WR("matchAll")});var dd=a(()=>{"use strict";var KR=M();KR("replace")});var md=a(()=>{"use strict";var HR=M();HR("search")});var hd=a(()=>{"use strict";var zR=M();zR("species")});var yd=a(()=>{"use strict";var VR=M();VR("split")});var Co=a(()=>{"use strict";var YR=M(),JR=Za();YR("toPrimitive");JR()});var gd=a(()=>{"use strict";var QR=U(),XR=M(),ZR=_e();XR("toStringTag");ZR(QR("Symbol"),"Symbol")});var bd=a(()=>{"use strict";var eA=M();eA("unscopables")});var qd=a(()=>{"use strict";var rA=_(),tA=_e();tA(rA.JSON,"JSON",!0)});var xd=a(()=>{});var Sd=a(()=>{});var Td=a((U8,wd)=>{"use strict";Qa();Et();sd();So();wo();cd();To();ld();fd();Oo();pd();vd();dd();md();hd();yd();Co();gd();bd();qd();xd();Sd();var nA=H();wd.exports=nA.Symbol});var Eo=a((W8,Od)=>{"use strict";Od.exports=function(){}});var mr=a((K8,Pd)=>{"use strict";var iA=Ee(),Io=Eo(),Cd=lr(),Id=ze(),aA=te().f,oA=Rn(),zn=An(),uA=Z(),sA=G(),kd="Array Iterator",cA=Id.set,lA=Id.getterFor(kd);Pd.exports=oA(Array,"Array",function(e,r){cA(this,{type:kd,target:iA(e),index:0,kind:r})},function(){var e=lA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,zn(void 0,!0);switch(e.kind){case"keys":return zn(t,!1);case"values":return zn(r[t],!1)}return zn([t,r[t]],!1)},"values");var Ed=Cd.Arguments=Cd.Array;Io("keys");Io("values");Io("entries");if(!uA&&sA&&Ed.name!=="values")try{aA(Ed,"name",{value:"values"})}catch{}});var Rd=a((H8,_d)=>{"use strict";_d.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var hr=a(()=>{"use strict";mr();var fA=Rd(),pA=_(),vA=_e(),Ad=lr();for(Vn in fA)vA(pA[Vn],Vn),Ad[Vn]=Ad.Array;var Vn});var Md=a((Y8,Nd)=>{"use strict";var dA=Td();hr();Nd.exports=dA});var Ld=a(()=>{"use strict";var mA=R(),hA=te().f,jd=mA("metadata"),$d=Function.prototype;$d[jd]===void 0&&hA($d,jd,{value:null})});var Fd=a(()=>{"use strict";So()});var Dd=a(()=>{"use strict";To()});var Bd=a(()=>{"use strict";var yA=M();yA("metadata")});var Ud=a((iK,Gd)=>{"use strict";var gA=Md();Ld();Fd();Dd();Bd();Gd.exports=gA});var Po=a((aK,Wd)=>{"use strict";var bA=U(),qA=A(),ko=bA("Symbol"),xA=ko.keyFor,SA=qA(ko.prototype.valueOf);Wd.exports=ko.isRegisteredSymbol||function(r){try{return xA(SA(r))!==void 0}catch{return!1}}});var Kd=a(()=>{"use strict";var wA=x(),TA=Po();wA({target:"Symbol",stat:!0},{isRegisteredSymbol:TA})});var Ao=a((sK,Qd)=>{"use strict";var OA=ur(),Yd=U(),CA=A(),EA=Nr(),IA=R(),Jn=Yd("Symbol"),Hd=Jn.isWellKnownSymbol,Jd=Yd("Object","getOwnPropertyNames"),kA=CA(Jn.prototype.valueOf),zd=OA("wks");for(Yn=0,_o=Jd(Jn),Vd=_o.length;Yn<Vd;Yn++)try{Ro=_o[Yn],EA(Jn[Ro])&&IA(Ro)}catch{}var Ro,Yn,_o,Vd;Qd.exports=function(r){if(Hd&&Hd(r))return!0;try{for(var t=kA(r),n=0,i=Jd(zd),o=i.length;n<o;n++)if(zd[i[n]]==t)return!0}catch{}return!1}});var Xd=a(()=>{"use strict";var PA=x(),_A=Ao();PA({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:_A})});var Zd=a(()=>{"use strict";var RA=M();RA("customMatcher")});var em=a(()=>{"use strict";var AA=M();AA("observable")});var rm=a(()=>{"use strict";var NA=x(),MA=Po();NA({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:MA})});var tm=a(()=>{"use strict";var jA=x(),$A=Ao();jA({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:$A})});var nm=a(()=>{"use strict";var LA=M();LA("matcher")});var im=a(()=>{"use strict";var FA=M();FA("metadataKey")});var am=a(()=>{"use strict";var DA=M();DA("patternMatch")});var om=a(()=>{"use strict";var BA=M();BA("replaceAll")});var sm=a((EK,um)=>{"use strict";var GA=Ud();Kd();Xd();Zd();em();rm();tm();nm();im();am();om();um.exports=GA});var Se=a((IK,cm)=>{"use strict";cm.exports=sm()});var Qn=a((kK,lm)=>{lm.exports=Se()});var pm=a((PK,fm)=>{"use strict";mr();fr();var UA=Ot();fm.exports=UA});var dm=a((_K,vm)=>{"use strict";var WA=pm();hr();vm.exports=WA});var hm=a((RK,mm)=>{"use strict";var KA=dm();mm.exports=KA});var gm=a((AK,ym)=>{"use strict";var HA=hm();ym.exports=HA});var No=a((NK,bm)=>{"use strict";bm.exports=gm()});var Xn=a((MK,qm)=>{qm.exports=No()});var Sm=a((jK,xm)=>{"use strict";mr();fr();var zA=Nn();xm.exports=zA});var Tm=a(($K,wm)=>{"use strict";var VA=Sm();hr();wm.exports=VA});var Cm=a((LK,Om)=>{"use strict";var YA=Tm();Om.exports=YA});var Im=a((FK,Em)=>{"use strict";var JA=Cm();Em.exports=JA});var Pm=a((DK,km)=>{"use strict";km.exports=Im()});var Zn=a((BK,_m)=>{_m.exports=Pm()});var Am=a((GK,Rm)=>{"use strict";var QA=U(),XA=A(),ZA=It(),eN=$n(),rN=Q(),tN=XA([].concat);Rm.exports=QA("Reflect","ownKeys")||function(r){var t=ZA.f(rN(r)),n=eN.f;return n?tN(t,n(r)):t}});var jm=a((UK,Mm)=>{"use strict";var Nm=W(),nN=Am(),iN=pt(),aN=te();Mm.exports=function(e,r,t){for(var n=nN(r),i=aN.f,o=iN.f,u=0;u<n.length;u++){var l=n[u];!Nm(e,l)&&!(t&&Nm(t,l))&&i(e,l,o(r,l))}}});var Lm=a((WK,$m)=>{"use strict";var oN=$(),uN=xe();$m.exports=function(e,r){oN(r)&&"cause"in r&&uN(e,"cause",r.cause)}});var Gm=a((KK,Bm)=>{"use strict";var sN=A(),Fm=Error,cN=sN("".replace),lN=function(e){return String(new Fm(e).stack)}("zxcasd"),Dm=/\n\s*at [^:]*:[^\n]*/,fN=Dm.test(lN);Bm.exports=function(e,r){if(fN&&typeof e=="string"&&!Fm.prepareStackTrace)for(;r--;)e=cN(e,Dm,"");return e}});var Wm=a((HK,Um)=>{"use strict";var pN=P(),vN=We();Um.exports=!pN(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",vN(1,7)),e.stack!==7):!0})});var zm=a((zK,Hm)=>{"use strict";var dN=xe(),mN=Gm(),hN=Wm(),Km=Error.captureStackTrace;Hm.exports=function(e,r,t,n){hN&&(Km?Km(e,r):dN(e,"stack",mN(t,n)))}});var pe=a((VK,Qm)=>{"use strict";var yN=z(),gN=D(),bN=Q(),qN=Ke(),xN=za(),SN=le(),Vm=B(),wN=Nn(),TN=Ot(),Ym=Ha(),ON=TypeError,ei=function(e,r){this.stopped=e,this.result=r},Jm=ei.prototype;Qm.exports=function(e,r,t){var n=t&&t.that,i=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),l=!!(t&&t.INTERRUPTED),c=yN(r,n),s,f,p,v,d,h,m,y=function(b){return s&&Ym(s,"normal"),new ei(!0,b)},q=function(b){return i?(bN(b),l?c(b[0],b[1],y):c(b[0],b[1])):l?c(b,y):c(b)};if(o)s=e.iterator;else if(u)s=e;else{if(f=TN(e),!f)throw new ON(qN(e)+" is not iterable");if(xN(f)){for(p=0,v=SN(e);v>p;p++)if(d=q(e[p]),d&&Vm(Jm,d))return d;return new ei(!1)}s=wN(e,f)}for(h=o?e.next:s.next;!(m=gN(h,s)).done;){try{d=q(m.value)}catch(b){Ym(s,"throw",b)}if(typeof d=="object"&&d&&Vm(Jm,d))return d}return new ei(!1)}});var Zm=a((YK,Xm)=>{"use strict";var CN=He();Xm.exports=function(e,r){return e===void 0?arguments.length<2?"":r:CN(e)}});var rh=a(()=>{"use strict";var EN=x(),IN=B(),kN=xt(),ri=St(),PN=jm(),eh=Ve(),Mo=xe(),jo=We(),_N=Lm(),RN=zm(),AN=pe(),NN=Zm(),MN=R(),jN=MN("toStringTag"),ti=Error,$N=[].push,zr=function(r,t){var n=IN($o,this),i;ri?i=ri(new ti,n?kN(this):$o):(i=n?this:eh($o),Mo(i,jN,"Error")),t!==void 0&&Mo(i,"message",NN(t)),RN(i,zr,i.stack,1),arguments.length>2&&_N(i,arguments[2]);var o=[];return AN(r,$N,{that:o}),Mo(i,"errors",o),i};ri?ri(zr,ti):PN(zr,ti,{name:!0});var $o=zr.prototype=eh(ti.prototype,{constructor:jo(1,zr),message:jo(1,""),name:jo(1,"AggregateError")});EN({global:!0,constructor:!0,arity:2},{AggregateError:zr})});var Lo=a(()=>{"use strict";rh()});var Fo=a((e6,th)=>{"use strict";var Nt=_(),LN=Rr(),FN=qe(),ni=function(e){return LN.slice(0,e.length)===e};th.exports=function(){return ni("Bun/")?"BUN":ni("Cloudflare-Workers")?"CLOUDFLARE":ni("Deno/")?"DENO":ni("Node.js/")?"NODE":Nt.Bun&&typeof Bun.version=="string"?"BUN":Nt.Deno&&typeof Deno.version=="object"?"DENO":FN(Nt.process)==="process"?"NODE":Nt.window&&Nt.document?"BROWSER":"REST"}()});var Mt=a((r6,nh)=>{"use strict";var DN=Fo();nh.exports=DN==="NODE"});var Do=a((t6,ah)=>{"use strict";var BN=U(),GN=Ln(),UN=R(),WN=G(),ih=UN("species");ah.exports=function(e){var r=BN(e);WN&&r&&!r[ih]&&GN(r,ih,{configurable:!0,get:function(){return this}})}});var ii=a((n6,oh)=>{"use strict";var KN=B(),HN=TypeError;oh.exports=function(e,r){if(KN(r,e))return e;throw new HN("Incorrect invocation")}});var Bo=a((i6,uh)=>{"use strict";var zN=yt(),VN=Ke(),YN=TypeError;uh.exports=function(e){if(zN(e))return e;throw new YN(VN(e)+" is not a constructor")}});var Go=a((a6,ch)=>{"use strict";var sh=Q(),JN=Bo(),QN=ir(),XN=R(),ZN=XN("species");ch.exports=function(e,r){var t=sh(e).constructor,n;return t===void 0||QN(n=sh(t)[ZN])?r:JN(n)}});var fh=a((o6,lh)=>{"use strict";var e2=TypeError;lh.exports=function(e,r){if(e<r)throw new e2("Not enough arguments");return e}});var Uo=a((u6,ph)=>{"use strict";var r2=Rr();ph.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r2)});var Xo=a((s6,xh)=>{"use strict";var ue=_(),t2=_r(),n2=z(),vh=N(),i2=W(),qh=P(),dh=Ma(),a2=sr(),mh=bn(),o2=fh(),u2=Uo(),s2=Mt(),Yo=ue.setImmediate,Jo=ue.clearImmediate,c2=ue.process,Wo=ue.Dispatch,l2=ue.Function,hh=ue.MessageChannel,f2=ue.String,Ko=0,jt={},yh="onreadystatechange",$t,yr,Ho,zo;qh(function(){$t=ue.location});var Qo=function(e){if(i2(jt,e)){var r=jt[e];delete jt[e],r()}},Vo=function(e){return function(){Qo(e)}},gh=function(e){Qo(e.data)},bh=function(e){ue.postMessage(f2(e),$t.protocol+"//"+$t.host)};(!Yo||!Jo)&&(Yo=function(r){o2(arguments.length,1);var t=vh(r)?r:l2(r),n=a2(arguments,1);return jt[++Ko]=function(){t2(t,void 0,n)},yr(Ko),Ko},Jo=function(r){delete jt[r]},s2?yr=function(e){c2.nextTick(Vo(e))}:Wo&&Wo.now?yr=function(e){Wo.now(Vo(e))}:hh&&!u2?(Ho=new hh,zo=Ho.port2,Ho.port1.onmessage=gh,yr=n2(zo.postMessage,zo)):ue.addEventListener&&vh(ue.postMessage)&&!ue.importScripts&&$t&&$t.protocol!=="file:"&&!qh(bh)?(yr=bh,ue.addEventListener("message",gh,!1)):yh in mh("script")?yr=function(e){dh.appendChild(mh("script"))[yh]=function(){dh.removeChild(this),Qo(e)}}:yr=function(e){setTimeout(Vo(e),0)});xh.exports={set:Yo,clear:Jo}});var Th=a((c6,wh)=>{"use strict";var Sh=_(),p2=G(),v2=Object.getOwnPropertyDescriptor;wh.exports=function(e){if(!p2)return Sh[e];var r=v2(Sh,e);return r&&r.value}});var Zo=a((l6,Ch)=>{"use strict";var Oh=function(){this.head=null,this.tail=null};Oh.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Ch.exports=Oh});var Ih=a((f6,Eh)=>{"use strict";var d2=Rr();Eh.exports=/ipad|iphone|ipod/i.test(d2)&&typeof Pebble<"u"});var Ph=a((p6,kh)=>{"use strict";var m2=Rr();kh.exports=/web0s(?!.*chrome)/i.test(m2)});var $h=a((v6,jh)=>{"use strict";var Yr=_(),h2=Th(),_h=z(),eu=Xo().set,y2=Zo(),g2=Uo(),b2=Ih(),q2=Ph(),ru=Mt(),Rh=Yr.MutationObserver||Yr.WebKitMutationObserver,Ah=Yr.document,Nh=Yr.process,ai=Yr.Promise,iu=h2("queueMicrotask"),Vr,tu,nu,oi,Mh;iu||(Lt=new y2,Ft=function(){var e,r;for(ru&&(e=Nh.domain)&&e.exit();r=Lt.get();)try{r()}catch(t){throw Lt.head&&Vr(),t}e&&e.enter()},!g2&&!ru&&!q2&&Rh&&Ah?(tu=!0,nu=Ah.createTextNode(""),new Rh(Ft).observe(nu,{characterData:!0}),Vr=function(){nu.data=tu=!tu}):!b2&&ai&&ai.resolve?(oi=ai.resolve(void 0),oi.constructor=ai,Mh=_h(oi.then,oi),Vr=function(){Mh(Ft)}):ru?Vr=function(){Nh.nextTick(Ft)}:(eu=_h(eu,Yr),Vr=function(){eu(Ft)}),iu=function(e){Lt.head||Vr(),Lt.add(e)});var Lt,Ft;jh.exports=iu});var Fh=a((d6,Lh)=>{"use strict";Lh.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var gr=a((m6,Dh)=>{"use strict";Dh.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var br=a((h6,Bh)=>{"use strict";var x2=_();Bh.exports=x2.Promise});var Jr=a((y6,Kh)=>{"use strict";var S2=_(),Dt=br(),w2=N(),T2=fa(),O2=ga(),C2=R(),Gh=Fo(),E2=Z(),au=Ar(),Uh=Dt&&Dt.prototype,I2=C2("species"),ou=!1,Wh=w2(S2.PromiseRejectionEvent),k2=T2("Promise",function(){var e=O2(Dt),r=e!==String(Dt);if(!r&&au===66||E2&&!(Uh.catch&&Uh.finally))return!0;if(!au||au<51||!/native code/.test(e)){var t=new Dt(function(o){o(1)}),n=function(o){o(function(){},function(){})},i=t.constructor={};if(i[I2]=n,ou=t.then(function(){})instanceof n,!ou)return!0}return!r&&(Gh==="BROWSER"||Gh==="DENO")&&!Wh});Kh.exports={CONSTRUCTOR:k2,REJECTION_EVENT:Wh,SUBCLASSING:ou}});var we=a((g6,zh)=>{"use strict";var Hh=F(),P2=TypeError,_2=function(e){var r,t;this.promise=new e(function(n,i){if(r!==void 0||t!==void 0)throw new P2("Bad Promise constructor");r=n,t=i}),this.resolve=Hh(r),this.reject=Hh(t)};zh.exports.f=function(e){return new _2(e)}});var vy=a(()=>{"use strict";var R2=x(),A2=Z(),li=Mt(),Qe=_(),N2=H(),et=D(),Vh=ke(),Yh=St(),M2=_e(),j2=Do(),$2=F(),ci=N(),L2=$(),F2=ii(),D2=Go(),ey=Xo().set,fu=$h(),B2=Fh(),G2=gr(),U2=Zo(),ry=ze(),fi=br(),pu=Jr(),ty=we(),pi="Promise",ny=pu.CONSTRUCTOR,W2=pu.REJECTION_EVENT,K2=pu.SUBCLASSING,uu=ry.getterFor(pi),H2=ry.set,Qr=fi&&fi.prototype,qr=fi,ui=Qr,iy=Qe.TypeError,su=Qe.document,vu=Qe.process,cu=ty.f,z2=cu,V2=!!(su&&su.createEvent&&Qe.dispatchEvent),ay="unhandledrejection",Y2="rejectionhandled",Jh=0,oy=1,J2=2,du=1,uy=2,si,Qh,sy,Xh,cy=function(e){var r;return L2(e)&&ci(r=e.then)?r:!1},ly=function(e,r){var t=r.value,n=r.state===oy,i=n?e.ok:e.fail,o=e.resolve,u=e.reject,l=e.domain,c,s,f;try{i?(n||(r.rejection===uy&&X2(r),r.rejection=du),i===!0?c=t:(l&&l.enter(),c=i(t),l&&(l.exit(),f=!0)),c===e.promise?u(new iy("Promise-chain cycle")):(s=cy(c))?et(s,c,o,u):o(c)):u(t)}catch(p){l&&!f&&l.exit(),u(p)}},fy=function(e,r){e.notified||(e.notified=!0,fu(function(){for(var t=e.reactions,n;n=t.get();)ly(n,e);e.notified=!1,r&&!e.rejection&&Q2(e)}))},py=function(e,r,t){var n,i;V2?(n=su.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),Qe.dispatchEvent(n)):n={promise:r,reason:t},!W2&&(i=Qe["on"+e])?i(n):e===ay&&B2("Unhandled promise rejection",t)},Q2=function(e){et(ey,Qe,function(){var r=e.facade,t=e.value,n=Zh(e),i;if(n&&(i=G2(function(){li?vu.emit("unhandledRejection",t,r):py(ay,r,t)}),e.rejection=li||Zh(e)?uy:du,i.error))throw i.value})},Zh=function(e){return e.rejection!==du&&!e.parent},X2=function(e){et(ey,Qe,function(){var r=e.facade;li?vu.emit("rejectionHandled",r):py(Y2,r,e.value)})},Xr=function(e,r,t){return function(n){e(r,n,t)}},Zr=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=J2,fy(e,!0))},lu=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new iy("Promise can't be resolved itself");var n=cy(r);n?fu(function(){var i={done:!1};try{et(n,r,Xr(lu,i,e),Xr(Zr,i,e))}catch(o){Zr(i,o,e)}}):(e.value=r,e.state=oy,fy(e,!1))}catch(i){Zr({done:!1},i,e)}}};if(ny&&(qr=function(r){F2(this,ui),$2(r),et(si,this);var t=uu(this);try{r(Xr(lu,t),Xr(Zr,t))}catch(n){Zr(t,n)}},ui=qr.prototype,si=function(r){H2(this,{type:pi,done:!1,notified:!1,parent:!1,reactions:new U2,rejection:!1,state:Jh,value:null})},si.prototype=Vh(ui,"then",function(r,t){var n=uu(this),i=cu(D2(this,qr));return n.parent=!0,i.ok=ci(r)?r:!0,i.fail=ci(t)&&t,i.domain=li?vu.domain:void 0,n.state===Jh?n.reactions.add(i):fu(function(){ly(i,n)}),i.promise}),Qh=function(){var e=new si,r=uu(e);this.promise=e,this.resolve=Xr(lu,r),this.reject=Xr(Zr,r)},ty.f=cu=function(e){return e===qr||e===sy?new Qh(e):z2(e)},!A2&&ci(fi)&&Qr!==Object.prototype)){Xh=Qr.then,K2||Vh(Qr,"then",function(r,t){var n=this;return new qr(function(i,o){et(Xh,n,i,o)}).then(r,t)},{unsafe:!0});try{delete Qr.constructor}catch{}Yh&&Yh(Qr,ui)}R2({global:!0,constructor:!0,wrap:!0,forced:ny},{Promise:qr});sy=N2.Promise;M2(qr,pi,!1,!0);j2(pi)});var Bt=a((x6,dy)=>{"use strict";var Z2=br(),eM=Ya(),rM=Jr().CONSTRUCTOR;dy.exports=rM||!eM(function(e){Z2.all(e).then(void 0,function(){})})});var my=a(()=>{"use strict";var tM=x(),nM=D(),iM=F(),aM=we(),oM=gr(),uM=pe(),sM=Bt();tM({target:"Promise",stat:!0,forced:sM},{all:function(r){var t=this,n=aM.f(t),i=n.resolve,o=n.reject,u=oM(function(){var l=iM(t.resolve),c=[],s=0,f=1;uM(r,function(p){var v=s++,d=!1;f++,nM(l,t,p).then(function(h){d||(d=!0,c[v]=h,--f||i(c))},o)}),--f||i(c)});return u.error&&o(u.value),n.promise}})});var yy=a(()=>{"use strict";var cM=x(),lM=Z(),fM=Jr().CONSTRUCTOR,hu=br(),pM=U(),vM=N(),dM=ke(),hy=hu&&hu.prototype;cM({target:"Promise",proto:!0,forced:fM,real:!0},{catch:function(e){return this.then(void 0,e)}});!lM&&vM(hu)&&(mu=pM("Promise").prototype.catch,hy.catch!==mu&&dM(hy,"catch",mu,{unsafe:!0}));var mu});var gy=a(()=>{"use strict";var mM=x(),hM=D(),yM=F(),gM=we(),bM=gr(),qM=pe(),xM=Bt();mM({target:"Promise",stat:!0,forced:xM},{race:function(r){var t=this,n=gM.f(t),i=n.reject,o=bM(function(){var u=yM(t.resolve);qM(r,function(l){hM(u,t,l).then(n.resolve,i)})});return o.error&&i(o.value),n.promise}})});var by=a(()=>{"use strict";var SM=x(),wM=we(),TM=Jr().CONSTRUCTOR;SM({target:"Promise",stat:!0,forced:TM},{reject:function(r){var t=wM.f(this),n=t.reject;return n(r),t.promise}})});var yu=a((P6,qy)=>{"use strict";var OM=Q(),CM=$(),EM=we();qy.exports=function(e,r){if(OM(e),CM(r)&&r.constructor===e)return r;var t=EM.f(e),n=t.resolve;return n(r),t.promise}});var wy=a(()=>{"use strict";var IM=x(),kM=U(),xy=Z(),PM=br(),Sy=Jr().CONSTRUCTOR,_M=yu(),RM=kM("Promise"),AM=xy&&!Sy;IM({target:"Promise",stat:!0,forced:xy||Sy},{resolve:function(r){return _M(AM&&this===RM?PM:this,r)}})});var Ty=a(()=>{"use strict";vy();my();yy();gy();by();wy()});var gu=a(()=>{"use strict";var NM=x(),MM=D(),jM=F(),$M=we(),LM=gr(),FM=pe(),DM=Bt();NM({target:"Promise",stat:!0,forced:DM},{allSettled:function(r){var t=this,n=$M.f(t),i=n.resolve,o=n.reject,u=LM(function(){var l=jM(t.resolve),c=[],s=0,f=1;FM(r,function(p){var v=s++,d=!1;f++,MM(l,t,p).then(function(h){d||(d=!0,c[v]={status:"fulfilled",value:h},--f||i(c))},function(h){d||(d=!0,c[v]={status:"rejected",reason:h},--f||i(c))})}),--f||i(c)});return u.error&&o(u.value),n.promise}})});var bu=a(()=>{"use strict";var BM=x(),GM=D(),UM=F(),WM=U(),KM=we(),HM=gr(),zM=pe(),VM=Bt(),Oy="No one promise resolved";BM({target:"Promise",stat:!0,forced:VM},{any:function(r){var t=this,n=WM("AggregateError"),i=KM.f(t),o=i.resolve,u=i.reject,l=HM(function(){var c=UM(t.resolve),s=[],f=0,p=1,v=!1;zM(r,function(d){var h=f++,m=!1;p++,GM(c,t,d).then(function(y){m||v||(v=!0,o(y))},function(y){m||v||(m=!0,s[h]=y,--p||u(new n(s,Oy)))})}),--p||u(new n(s,Oy))});return l.error&&u(l.value),i.promise}})});var xu=a(()=>{"use strict";var YM=x(),JM=_(),QM=_r(),XM=sr(),ZM=we(),ej=F(),Ey=gr(),qu=JM.Promise,Cy=!1,rj=!qu||!qu.try||Ey(function(){qu.try(function(e){Cy=e===8},8)}).error||!Cy;YM({target:"Promise",stat:!0,forced:rj},{try:function(e){var r=arguments.length>1?XM(arguments,1):[],t=ZM.f(this),n=Ey(function(){return QM(ej(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var Su=a(()=>{"use strict";var tj=x(),nj=we();tj({target:"Promise",stat:!0},{withResolvers:function(){var r=nj.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var _y=a(()=>{"use strict";var ij=x(),aj=Z(),vi=br(),oj=P(),ky=U(),Py=N(),uj=Go(),Iy=yu(),sj=ke(),Tu=vi&&vi.prototype,cj=!!vi&&oj(function(){Tu.finally.call({then:function(){}},function(){})});ij({target:"Promise",proto:!0,real:!0,forced:cj},{finally:function(e){var r=uj(this,ky("Promise")),t=Py(e);return this.then(t?function(n){return Iy(r,e()).then(function(){return n})}:e,t?function(n){return Iy(r,e()).then(function(){throw n})}:e)}});!aj&&Py(vi)&&(wu=ky("Promise").prototype.finally,Tu.finally!==wu&&sj(Tu,"finally",wu,{unsafe:!0}));var wu});var Ay=a((K6,Ry)=>{"use strict";Lo();mr();Et();Ty();gu();bu();xu();Su();_y();fr();var lj=H();Ry.exports=lj.Promise});var My=a((H6,Ny)=>{"use strict";var fj=Ay();hr();Ny.exports=fj});var jy=a(()=>{"use strict";xu()});var $y=a(()=>{"use strict";Su()});var Fy=a((Q6,Ly)=>{"use strict";var pj=My();jy();$y();Ly.exports=pj});var Dy=a(()=>{"use strict";Lo()});var By=a(()=>{"use strict";gu()});var Gy=a(()=>{"use strict";bu()});var Wy=a((iH,Uy)=>{"use strict";var vj=Fy();Dy();By();Gy();Uy.exports=vj});var rt=a((aH,Ky)=>{"use strict";Ky.exports=Wy()});var Vy=a((lH,zy)=>{"use strict";wo();var dj=Ur();zy.exports=dj.f("asyncIterator")});var Jy=a((fH,Yy)=>{"use strict";var mj=Vy();Yy.exports=mj});var Xy=a((pH,Qy)=>{"use strict";var hj=Jy();Qy.exports=hj});var eg=a((vH,Zy)=>{"use strict";var yj=Xy();Zy.exports=yj});var di=a((dH,rg)=>{"use strict";rg.exports=eg()});var ag=a(()=>{"use strict";var gj=x(),bj=P(),qj=re(),ig=xt(),xj=Fa(),Sj=bj(function(){ig(1)});gj({target:"Object",stat:!0,forced:Sj,sham:!xj},{getPrototypeOf:function(r){return ig(qj(r))}})});var ug=a((bH,og)=>{"use strict";ag();var wj=H();og.exports=wj.Object.getPrototypeOf});var cg=a((qH,sg)=>{"use strict";var Tj=ug();sg.exports=Tj});var fg=a((xH,lg)=>{"use strict";var Oj=cg();lg.exports=Oj});var vg=a((SH,pg)=>{"use strict";var Cj=fg();pg.exports=Cj});var mi=a((wH,dg)=>{"use strict";dg.exports=vg()});var hg=a(()=>{"use strict";var Ej=x(),Ij=A(),kj=Ie(),Pj=Ij([].reverse),mg=[1,2];Ej({target:"Array",proto:!0,forced:String(mg)===String(mg.reverse())},{reverse:function(){return kj(this)&&(this.length=this.length),Pj(this)}})});var gg=a((CH,yg)=>{"use strict";hg();var _j=oe();yg.exports=_j("Array","reverse")});var qg=a((EH,bg)=>{"use strict";var Rj=B(),Aj=gg(),Eu=Array.prototype;bg.exports=function(e){var r=e.reverse;return e===Eu||Rj(Eu,e)&&r===Eu.reverse?Aj:r}});var Sg=a((IH,xg)=>{"use strict";var Nj=qg();xg.exports=Nj});var Tg=a((kH,wg)=>{"use strict";var Mj=Sg();wg.exports=Mj});var Cg=a((PH,Og)=>{"use strict";var jj=Tg();Og.exports=jj});var Ig=a((_H,Eg)=>{"use strict";Eg.exports=Cg()});var Iu=a((RH,Wt)=>{function $j(e,r){this.v=e,this.k=r}Wt.exports=$j,Wt.exports.__esModule=!0,Wt.exports.default=Wt.exports});var kg=a(()=>{"use strict";var Lj=x(),Fj=G(),Dj=Ve();Lj({target:"Object",stat:!0,sham:!Fj},{create:Dj})});var _g=a((MH,Pg)=>{"use strict";kg();var Bj=H(),Gj=Bj.Object;Pg.exports=function(r,t){return Gj.create(r,t)}});var Ag=a((jH,Rg)=>{"use strict";var Uj=_g();Rg.exports=Uj});var Mg=a(($H,Ng)=>{"use strict";var Wj=Ag();Ng.exports=Wj});var $g=a((LH,jg)=>{"use strict";var Kj=Mg();jg.exports=Kj});var hi=a((FH,Lg)=>{"use strict";Lg.exports=$g()});var Pu=a((DH,Gg)=>{"use strict";var Dg=A(),Hj=F(),zj=$(),Vj=W(),Fg=sr(),Yj=Pr(),Bg=Function,Jj=Dg([].concat),Qj=Dg([].join),ku={},Xj=function(e,r,t){if(!Vj(ku,r)){for(var n=[],i=0;i<r;i++)n[i]="a["+i+"]";ku[r]=Bg("C,a","return new C("+Qj(n,",")+")")}return ku[r](e,t)};Gg.exports=Yj?Bg.bind:function(r){var t=Hj(this),n=t.prototype,i=Fg(arguments,1),o=function(){var l=Jj(i,Fg(arguments));return this instanceof o?Xj(t,l.length,l):t.apply(r,l)};return zj(n)&&(o.prototype=n),o}});var Wg=a(()=>{"use strict";var Zj=x(),Ug=Pu();Zj({target:"Function",proto:!0,forced:Function.bind!==Ug},{bind:Ug})});var Hg=a((UH,Kg)=>{"use strict";Wg();var e$=oe();Kg.exports=e$("Function","bind")});var Vg=a((WH,zg)=>{"use strict";var r$=B(),t$=Hg(),_u=Function.prototype;zg.exports=function(e){var r=e.bind;return e===_u||r$(_u,e)&&r===_u.bind?t$:r}});var Jg=a((KH,Yg)=>{"use strict";var n$=Vg();Yg.exports=n$});var Xg=a((HH,Qg)=>{"use strict";var i$=Jg();Qg.exports=i$});var eb=a((zH,Zg)=>{"use strict";var a$=Xg();Zg.exports=a$});var Kt=a((VH,rb)=>{"use strict";rb.exports=eb()});var tb=a(()=>{"use strict";var o$=x(),u$=St();o$({target:"Object",stat:!0},{setPrototypeOf:u$})});var ib=a((QH,nb)=>{"use strict";tb();var s$=H();nb.exports=s$.Object.setPrototypeOf});var ob=a((XH,ab)=>{"use strict";var c$=ib();ab.exports=c$});var sb=a((ZH,ub)=>{"use strict";var l$=ob();ub.exports=l$});var lb=a((ez,cb)=>{"use strict";var f$=sb();cb.exports=f$});var yi=a((rz,fb)=>{"use strict";fb.exports=lb()});var vb=a(()=>{"use strict";var p$=x(),v$=G(),pb=te().f;p$({target:"Object",stat:!0,forced:Object.defineProperty!==pb,sham:!v$},{defineProperty:pb})});var hb=a((iz,mb)=>{"use strict";vb();var d$=H(),db=d$.Object,m$=mb.exports=function(r,t,n){return db.defineProperty(r,t,n)};db.defineProperty.sham&&(m$.sham=!0)});var gb=a((az,yb)=>{"use strict";var h$=hb();yb.exports=h$});var qb=a((oz,bb)=>{"use strict";var y$=gb();bb.exports=y$});var Sb=a((uz,xb)=>{"use strict";var g$=qb();xb.exports=g$});var Ht=a((sz,wb)=>{"use strict";wb.exports=Sb()});var Ru=a((cz,Ae)=>{var b$=Ht();function gi(e,r,t,n){var i=b$;try{i({},"",{})}catch{i=0}Ae.exports=gi=function(u,l,c,s){function f(p,v){gi(u,p,function(d){return this._invoke(p,v,d)})}l?i?i(u,l,{value:c,enumerable:!s,configurable:!s,writable:!s}):u[l]=c:(f("next",0),f("throw",1),f("return",2))},Ae.exports.__esModule=!0,Ae.exports.default=Ae.exports,gi(e,r,t,n)}Ae.exports=gi,Ae.exports.__esModule=!0,Ae.exports.default=Ae.exports});var Nu=a((lz,Ne)=>{var Tb=Se(),Au=hi(),q$=Kt(),x$=mi(),Ob=yi(),Oe=Ru();function Cb(){var e,r,t=typeof Tb=="function"?Tb:{},n=t.iterator||"@@iterator",i=t.toStringTag||"@@toStringTag";function o(d,h,m,y){var q=h&&h.prototype instanceof l?h:l,b=Au(q.prototype);return Oe(b,"_invoke",function(I,E,S){var T,w,C,j=0,ge=S||[],k=!1,ee={p:0,n:0,v:e,a:be,f:q$(be).call(be,e,4),d:function(L,ve){return T=L,w=0,C=e,ee.n=ve,u}};function be(J,L){for(w=J,C=L,r=0;!k&&j&&!ve&&r<ge.length;r++){var ve,O=ge[r],Ir=ee.p,Ue=O[2];J>3?(ve=Ue===L)&&(C=O[(w=O[4])?5:(w=3,3)],O[4]=O[5]=e):O[0]<=Ir&&((ve=J<2&&Ir<O[1])?(w=0,ee.v=L,ee.n=O[1]):Ir<Ue&&(ve=J<3||O[0]>L||L>Ue)&&(O[4]=J,O[5]=L,ee.n=Ue,w=0))}if(ve||J>1)return u;throw k=!0,L}return function(J,L,ve){if(j>1)throw TypeError("Generator is already running");for(k&&L===1&&be(L,ve),w=L,C=ve;(r=w<2?e:C)||!k;){T||(w?w<3?(w>1&&(ee.n=-1),be(w,C)):ee.n=C:ee.v=C);try{if(j=2,T){if(w||(J="next"),r=T[J]){if(!(r=r.call(T,C)))throw TypeError("iterator result is not an object");if(!r.done)return r;C=r.value,w<2&&(w=0)}else w===1&&(r=T.return)&&r.call(T),w<2&&(C=TypeError("The iterator does not provide a '"+J+"' method"),w=1);T=e}else if((r=(k=ee.n<0)?C:I.call(E,ee))!==u)break}catch(O){T=e,w=1,C=O}finally{j=1}}return{value:r,done:k}}}(d,m,y),!0),b}var u={};function l(){}function c(){}function s(){}r=x$;var f=[][n]?r(r([][n]())):(Oe(r={},n,function(){return this}),r),p=s.prototype=l.prototype=Au(f);function v(d){return Ob?Ob(d,s):(d.__proto__=s,Oe(d,i,"GeneratorFunction")),d.prototype=Au(p),d}return c.prototype=s,Oe(p,"constructor",s),Oe(s,"constructor",c),c.displayName="GeneratorFunction",Oe(s,i,"GeneratorFunction"),Oe(p),Oe(p,i,"Generator"),Oe(p,n,function(){return this}),Oe(p,"toString",function(){return"[object Generator]"}),(Ne.exports=Cb=function(){return{w:o,m:v}},Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports)()}Ne.exports=Cb,Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports});var $u=a((fz,zt)=>{var S$=Se(),w$=di(),T$=Iu(),Mu=Ru();function ju(e,r){function t(i,o,u,l){try{var c=e[i](o),s=c.value;return s instanceof T$?r.resolve(s.v).then(function(f){t("next",f,u,l)},function(f){t("throw",f,u,l)}):r.resolve(s).then(function(f){c.value=f,u(c)},function(f){return t("throw",f,u,l)})}catch(f){l(f)}}var n;this.next||(Mu(ju.prototype),Mu(ju.prototype,typeof S$=="function"&&w$||"@asyncIterator",function(){return this})),Mu(this,"_invoke",function(i,o,u){function l(){return new r(function(c,s){t(i,u,c,s)})}return n=n?n.then(l,l):l()},!0)}zt.exports=ju,zt.exports.__esModule=!0,zt.exports.default=zt.exports});var Lu=a((pz,Vt)=>{var O$=rt(),C$=Nu(),E$=$u();function I$(e,r,t,n,i){return new E$(C$().w(e,r,t,n),i||O$)}Vt.exports=I$,Vt.exports.__esModule=!0,Vt.exports.default=Vt.exports});var Eb=a((vz,Yt)=>{var k$=Lu();function P$(e,r,t,n,i){var o=k$(e,r,t,n,i);return o.next().then(function(u){return u.done?u.value:o.next()})}Yt.exports=P$,Yt.exports.__esModule=!0,Yt.exports.default=Yt.exports});var Pb=a((dz,kb)=>{"use strict";var Ib=Ke(),_$=TypeError;kb.exports=function(e,r){if(!delete e[r])throw new _$("Cannot delete property "+Ib(r)+" of "+Ib(e))}});var _b=a(()=>{"use strict";var R$=x(),A$=re(),N$=le(),M$=Dr(),j$=Pb(),$$=Ct(),L$=[].unshift(0)!==1,F$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},D$=L$||!F$();R$({target:"Array",proto:!0,arity:1,forced:D$},{unshift:function(r){var t=A$(this),n=N$(t),i=arguments.length;if(i){$$(n+i);for(var o=n;o--;){var u=o+i;o in t?t[u]=t[o]:j$(t,u)}for(var l=0;l<i;l++)t[l]=arguments[l]}return M$(t,n+i)}})});var Ab=a((yz,Rb)=>{"use strict";_b();var B$=oe();Rb.exports=B$("Array","unshift")});var Mb=a((gz,Nb)=>{"use strict";var G$=B(),U$=Ab(),Fu=Array.prototype;Nb.exports=function(e){var r=e.unshift;return e===Fu||G$(Fu,e)&&r===Fu.unshift?U$:r}});var $b=a((bz,jb)=>{"use strict";var W$=Mb();jb.exports=W$});var Fb=a((qz,Lb)=>{"use strict";var K$=$b();Lb.exports=K$});var Bb=a((xz,Db)=>{"use strict";var H$=Fb();Db.exports=H$});var Ub=a((Sz,Gb)=>{"use strict";Gb.exports=Bb()});var Wb=a((wz,Jt)=>{var z$=Ub();function V$(e){var r=Object(e),t=[];for(var n in r)z$(t).call(t,n);return function i(){for(;t.length;)if((n=t.pop())in r)return i.value=n,i.done=!1,i;return i.done=!0,i}}Jt.exports=V$,Jt.exports.__esModule=!0,Jt.exports.default=Jt.exports});var Hb=a((Tz,Kb)=>{"use strict";mr();Et();fr();Oo();var Y$=Ur();Kb.exports=Y$.f("iterator")});var Vb=a((Oz,zb)=>{"use strict";var J$=Hb();hr();zb.exports=J$});var Jb=a((Cz,Yb)=>{"use strict";var Q$=Vb();Yb.exports=Q$});var Xb=a((Ez,Qb)=>{"use strict";var X$=Jb();Qb.exports=X$});var Qt=a((Iz,Zb)=>{"use strict";Zb.exports=Xb()});var eq=a((kz,Me)=>{var bi=Se(),Z$=Qt();function Du(e){"@babel/helpers - typeof";return Me.exports=Du=typeof bi=="function"&&typeof Z$=="symbol"?function(r){return typeof r}:function(r){return r&&typeof bi=="function"&&r.constructor===bi&&r!==bi.prototype?"symbol":typeof r},Me.exports.__esModule=!0,Me.exports.default=Me.exports,Du(e)}Me.exports=Du,Me.exports.__esModule=!0,Me.exports.default=Me.exports});var rq=a((Pz,Xt)=>{var eL=eq().default,rL=Se(),tL=Qt();function nL(e){if(e!=null){var r=e[typeof rL=="function"&&tL||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(eL(e)+" is not iterable")}Xt.exports=nL,Xt.exports.__esModule=!0,Xt.exports.default=Xt.exports});var iq=a((_z,je)=>{var tq=mi(),iL=Ig(),aL=Iu(),oL=Nu(),uL=Eb(),sL=Lu(),cL=$u(),lL=Wb(),nq=rq();function Bu(){"use strict";var e=oL(),r=e.m(Bu),t=(tq?tq(r):r.__proto__).constructor;function n(u){var l=typeof u=="function"&&u.constructor;return!!l&&(l===t||(l.displayName||l.name)==="GeneratorFunction")}var i={throw:1,return:2,break:3,continue:3};function o(u){var l,c;return function(s){l||(l={stop:function(){return c(s.a,2)},catch:function(){return s.v},abrupt:function(p,v){return c(s.a,i[p],v)},delegateYield:function(p,v,d){return l.resultName=v,c(s.d,nq(p),d)},finish:function(p){return c(s.f,p)}},c=function(p,v,d){s.p=l.prev,s.n=l.next;try{return p(v,d)}finally{l.next=s.n}}),l.resultName&&(l[l.resultName]=s.v,l.resultName=void 0),l.sent=s.v,l.next=s.n;try{return u.call(this,l)}finally{s.p=l.prev,s.n=l.next}}}return(je.exports=Bu=function(){return{wrap:function(c,s,f,p){return e.w(o(c),s,f,p&&iL(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(c,s){return new aL(c,s)},AsyncIterator:cL,async:function(c,s,f,p,v){return(n(s)?sL:uL)(o(c),s,f,p,v)},keys:lL,values:nq}},je.exports.__esModule=!0,je.exports.default=je.exports)()}je.exports=Bu,je.exports.__esModule=!0,je.exports.default=je.exports});var se=a((Rz,aq)=>{var qi=iq()();aq.exports=qi;try{regeneratorRuntime=qi}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=qi:Function("r","regeneratorRuntime = r")(qi)}});var Gu=a((Si,uq)=>{"use strict";Object.defineProperty(Si,"__esModule",{value:!0});var xi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oq=function(){function e(r,t){var n=[],i=!0,o=!1,u=void 0;try{for(var l=r[Symbol.iterator](),c;!(i=(c=l.next()).done)&&(n.push(c.value),!(t&&n.length===t));i=!0);}catch(s){o=!0,u=s}finally{try{!i&&l.return&&l.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Si.default=fL;function fL(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(i){return i.type==="tag"||i.type==="script"||i.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var i=this.attribs,o=Object.keys(i),u=o.reduce(function(l,c,s){return l[s]={name:c,value:i[c]},l},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var i=[];return Ze(this.childTags,function(o){(o.name===n||n==="*")&&i.push(o)}),i}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var i=n.trim().replace(/\s+/g," ").split(" "),o=[];return Ze([this],function(u){var l=u.attribs.class;l&&i.every(function(c){return l.indexOf(c)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var i=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=pL(n),u=o.shift(),l=o.length;return u(this).filter(function(c){for(var s=0;s<l;){if(c=o[s](c,i),!c)return!1;s+=1}return!0})}),t.contains||(t.contains=function(n){var i=!1;return Ze([this],function(o,u){o===n&&(i=!0,u())}),i}),!0}function pL(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,i=r.split(":"),o=oq(i,2),u=o[0],l=o[1],c=null,s=null;if(function(){switch(!0){case/>/.test(u):s=function(S){return function(T){return T(S.parent)&&S.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");c=function(S){var T=S.attribs.class;return T&&h.every(function(w){return T.indexOf(w)>-1})},s=function(S,T){return n?S.getElementsByClassName(h.join(" ")):typeof S=="function"?S(c):Zt(S,T,c)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),y=oq(m,2),q=y[0],b=y[1];c=function(S){var T=Object.keys(S.attribs).indexOf(q)>-1;return!!(T&&(!b||S.attribs[q]===b))},s=function(S,T){if(n){var w=function(){var C=[];return Ze([S],function(j){c(j)&&C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":xi(w))==="object")return w.v}return typeof S=="function"?S(c):Zt(S,T,c)};break;case/^#/.test(u):var I=u.substr(1);c=function(S){return S.attribs.id===I},s=function(S,T){if(n){var w=function(){var C=[];return Ze([S],function(j,ge){c(j)&&(C.push(j),ge())}),{v:C}}();if((typeof w>"u"?"undefined":xi(w))==="object")return w.v}return typeof S=="function"?S(c):Zt(S,T,c)};break;case/\*/.test(u):c=function(S){return!0},s=function(S,T){if(n){var w=function(){var C=[];return Ze([S],function(j){return C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":xi(w))==="object")return w.v}return typeof S=="function"?S(c):Zt(S,T,c)};break;default:c=function(S){return S.name===u},s=function(S,T){if(n){var w=function(){var C=[];return Ze([S],function(j){c(j)&&C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":xi(w))==="object")return w.v}return typeof S=="function"?S(c):Zt(S,T,c)}}}(),!l)return s;var f=l.match(/-(child|type)\((\d+)\)$/),p=f[1],v=parseInt(f[2],10)-1,d=function(m){if(m){var y=m.parent.childTags;p==="type"&&(y=y.filter(c));var q=y.findIndex(function(b){return b===m});if(q===v)return!0}return!1};return function(m){var y=s(m);return n?y.reduce(function(q,b){return d(b)&&q.push(b),q},[]):d(y)&&y}})}function Ze(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&Ze(t.childTags,r)})}function Zt(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}uq.exports=Si.default});var Ti=a(wi=>{"use strict";Object.defineProperty(wi,"__esModule",{value:!0});wi.convertNodeList=vL;wi.escapeValue=dL;function vL(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function dL(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var yq=a((Oi,hq)=>{"use strict";Object.defineProperty(Oi,"__esModule",{value:!0});Oi.default=mL;var fq=Ti(),sq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function mL(e,r){var t=r.root,n=t===void 0?document:t,i=r.skip,o=i===void 0?null:i,u=r.priority,l=u===void 0?["id","class","href","src"]:u,c=r.ignore,s=c===void 0?{}:c,f=[],p=e,v=f.length,d=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(q){return typeof q!="function"?function(b){return b===q}:q}),m=function(b){return o&&h.some(function(I){return I(b)})};for(Object.keys(s).forEach(function(q){q==="class"&&(d=!0);var b=s[q];typeof b!="function"&&(typeof b=="number"&&(b=b.toString()),typeof b=="string"&&(b=new RegExp((0,fq.escapeValue)(b).replace(/\\/g,"\\\\"))),typeof b=="boolean"&&(b=b?/(?:)/:/.^/),s[q]=function(I,E){return b.test(E)})}),d&&function(){var q=s.attribute;s.attribute=function(b,I,E){return s.class(I)||q&&q(b,I,E)}}();p!==n;){if(m(p)!==!0){if(cq(l,p,s,f,n)||lq(p,s,f,n))break;cq(l,p,s,f),f.length===v&&lq(p,s,f),f.length===v&&hL(l,p,s,f)}p=p.parentNode,v=f.length}if(p===n){var y=dq(l,p,s);f.unshift(y)}return f.join(" ")}function cq(e,r,t,n){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=pq(e,r,t);if(o){var u=i.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function pq(e,r,t){for(var n=r.attributes,i=Object.keys(n).sort(function(m,y){var q=e.indexOf(n[m].name),b=e.indexOf(n[y].name);return b===-1?q===-1?0:-1:q-b}),o=0,u=i.length;o<u;o++){var l=i[o],c=n[l],s=c.name,f=(0,fq.escapeValue)(c.value),p=t[s]||t.attribute,v=sq[s]||sq.attribute;if(!mq(p,s,f,v)){var d="["+s+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(s==="id"&&(d="#"+f),s==="class")){var h=f.trim().replace(/\s+/g,".");d="."+h}return d}}return null}function lq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,i=vq(e,r);if(i){var o=n.getElementsByTagName(i);if(o.length===1)return t.unshift(i),!0}return!1}function vq(e,r){var t=e.tagName.toLowerCase();return mq(r.tag,null,t)?null:t}function hL(e,r,t,n){for(var i=r.parentNode,o=i.childTags||i.children,u=0,l=o.length;u<l;u++){var c=o[u];if(c===r){var s=dq(e,c,t);if(!s)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,c,t,s);var f="> "+s+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function dq(e,r,t){var n=pq(e,r,t);return n||(n=vq(r,t)),n}function mq(e,r,t,n){if(!t)return!0;var i=e||n;return i?i(r,t,n):!1}hq.exports=Oi.default});var Uu=a((Ei,gq)=>{"use strict";Object.defineProperty(Ei,"__esModule",{value:!0});Ei.default=xL;var yL=Gu(),gL=qL(yL),bL=Ti();function qL(e){return e&&e.__esModule?e:{default:e}}function xL(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,bL.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,gL.default)(r[0],t),i=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(i.length<2)return Ci("",e,"",r);for(var o=[i.pop()];i.length>1;){var u=i.pop(),l=i.join(" "),c=o.join(" "),s=l+" "+c,f=document.querySelectorAll(s);f.length!==r.length&&o.unshift(Ci(l,u,c,r))}return o.unshift(i[0]),i=o,i[0]=Ci("",i[0],i.slice(1).join(" "),r),i[i.length-1]=Ci(i.slice(0,-1).join(" "),i[i.length-1],"",r),n&&delete global.document,i.join(" ").replace(/>/g,"> ").trim()}function Ci(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var i=r.replace(/=.*$/,"]"),o=""+e+i+t,u=document.querySelectorAll(o);if(tt(u,n))r=i;else for(var l=document.querySelectorAll(""+e+i),c=function(){var E=l[s];if(n.some(function(T){return E.contains(T)})){var S=E.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),tt(u,n)&&(r=S),"break"}},s=0,f=l.length;s<f;s++){var o,u,p=c();if(p==="break")break}}if(/>/.test(r)){var v=r.replace(/>/,""),o=""+e+v+t,u=document.querySelectorAll(o);tt(u,n)&&(r=v)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);tt(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(I){return"."+I}).sort(function(I,E){return I.length-E.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);tt(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var y=document.querySelectorAll(""+e+r),q=function(){var E=y[s];if(n.some(function(T){return E.contains(T)})){var S=E.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),tt(u,n)&&(r=S),"break"}},s=0,f=y.length;s<f;s++){var o,u,b=q();if(b==="break")break}}return r}function tt(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var i=0;i<t;i++)if(e[i]===n)return!0;return!1})}gq.exports=Ei.default});var Wu=a(Ii=>{"use strict";Object.defineProperty(Ii,"__esModule",{value:!0});Ii.getCommonAncestor=SL;Ii.getCommonProperties=wL;function SL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,i=[];e.forEach(function(p,v){for(var d=[];p!==n;)p=p.parentNode,d.unshift(p);i[v]=d}),i.sort(function(p,v){return p.length-v.length});for(var o=i.shift(),u=null,l=function(){var v=o[c],d=i.some(function(h){return!h.some(function(m){return m===v})});if(d)return"break";u=v},c=0,s=o.length;c<s;c++){var f=l();if(f==="break")break}return u}function wL(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,i=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(c){return u.some(function(s){return s===c})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(i!==void 0&&function(){var c=t.attributes,s=Object.keys(c).reduce(function(v,d){var h=c[d],m=h.name;return h&&m!=="class"&&(v[m]=h.value),v},{}),f=Object.keys(s),p=Object.keys(i);f.length?p.length?(i=p.reduce(function(v,d){var h=i[d];return h===s[d]&&(v[d]=h),v},{}),Object.keys(i).length?r.attributes=i:delete r.attributes):r.attributes=s:delete r.attributes}(),o!==void 0){var l=t.tagName.toLowerCase();o?l!==o&&delete r.tag:r.tag=l}}),r}});var Tq=a(en=>{"use strict";Object.defineProperty(en,"__esModule",{value:!0});var TL=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};en.getSingleSelector=Hu;en.getMultiSelector=wq;en.default=PL;var OL=Gu(),qq=Ku(OL),CL=yq(),EL=Ku(CL),IL=Uu(),xq=Ku(IL),bq=Ti(),Sq=Wu();function Ku(e){return e&&e.__esModule?e:{default:e}}function Hu(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":TL(e))+'")');var t=(0,qq.default)(e,r),n=(0,EL.default)(e,r),i=(0,xq.default)(n,e,r);return t&&delete global.document,i}function wq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,bq.convertNodeList)(e)),e.some(function(s){return s.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,qq.default)(e[0],r),n=(0,Sq.getCommonAncestor)(e,r),i=Hu(n,r),o=kL(e),u=o[0],l=(0,xq.default)(i+" "+u,e,r),c=(0,bq.convertNodeList)(document.querySelectorAll(l));return e.every(function(s){return c.some(function(f){return f===s})})?(t&&delete global.document,l):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function kL(e){var r=(0,Sq.getCommonProperties)(e),t=r.classes,n=r.attributes,i=r.tag,o=[];if(i&&o.push(i),t){var u=t.map(function(c){return"."+c}).join("");o.push(u)}if(n){var l=Object.keys(n).reduce(function(c,s){return c.push("["+s+'="'+n[s]+'"]'),c},[]).join("");o.push(l)}return o.length,[o.join("")]}function PL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?wq(e,r):Hu(e,r)}});var Eq=a(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.default=ie.common=ie.optimize=ie.getMultiSelector=ie.getSingleSelector=ie.select=void 0;var zu=Tq();Object.defineProperty(ie,"getSingleSelector",{enumerable:!0,get:function(){return zu.getSingleSelector}});Object.defineProperty(ie,"getMultiSelector",{enumerable:!0,get:function(){return zu.getMultiSelector}});var Oq=Cq(zu),_L=Uu(),RL=Cq(_L),AL=Wu(),NL=ML(AL);function ML(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Cq(e){return e&&e.__esModule?e:{default:e}}ie.select=Oq.default;ie.optimize=RL.default;ie.common=NL;ie.default=Oq.default});var Iq=a(()=>{"use strict";var KL=x(),HL=Ie();KL({target:"Array",stat:!0},{isArray:HL})});var Pq=a((Yz,kq)=>{"use strict";Iq();var zL=H();kq.exports=zL.Array.isArray});var Rq=a((Jz,_q)=>{"use strict";var VL=Pq();_q.exports=VL});var Nq=a((Qz,Aq)=>{"use strict";var YL=Rq();Aq.exports=YL});var jq=a((Xz,Mq)=>{"use strict";var JL=Nq();Mq.exports=JL});var Lq=a((Zz,$q)=>{"use strict";$q.exports=jq()});var Bq=a(()=>{"use strict";var QL=x(),XL=re(),ZL=le(),eF=Dr(),rF=Ct(),tF=P(),nF=tF(function(){return[].push.call({length:4294967296},1)!==4294967297}),iF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},aF=nF||!iF();QL({target:"Array",proto:!0,arity:1,forced:aF},{push:function(r){var t=XL(this),n=ZL(t),i=arguments.length;rF(n+i);for(var o=0;o<i;o++)t[n]=arguments[o],n++;return eF(t,n),n}})});var Uq=a((nV,Gq)=>{"use strict";Bq();var oF=oe();Gq.exports=oF("Array","push")});var Kq=a((iV,Wq)=>{"use strict";var uF=B(),sF=Uq(),Vu=Array.prototype;Wq.exports=function(e){var r=e.push;return e===Vu||uF(Vu,e)&&r===Vu.push?sF:r}});var zq=a((aV,Hq)=>{"use strict";var cF=Kq();Hq.exports=cF});var Yq=a((oV,Vq)=>{"use strict";var lF=zq();Vq.exports=lF});var Qq=a((uV,Jq)=>{"use strict";var fF=Yq();Jq.exports=fF});var Yu=a((sV,Xq)=>{"use strict";Xq.exports=Qq()});var cx=a(()=>{"use strict";var pF=x(),vF=kt().map,dF=gt(),mF=dF("map");pF({target:"Array",proto:!0,forced:!mF},{map:function(r){return vF(this,r,arguments.length>1?arguments[1]:void 0)}})});var fx=a((jV,lx)=>{"use strict";cx();var hF=oe();lx.exports=hF("Array","map")});var vx=a(($V,px)=>{"use strict";var yF=B(),gF=fx(),Qu=Array.prototype;px.exports=function(e){var r=e.map;return e===Qu||yF(Qu,e)&&r===Qu.map?gF:r}});var mx=a((LV,dx)=>{"use strict";var bF=vx();dx.exports=bF});var yx=a((FV,hx)=>{"use strict";var qF=mx();hx.exports=qF});var bx=a((DV,gx)=>{"use strict";var xF=yx();gx.exports=xF});var xx=a((BV,qx)=>{"use strict";qx.exports=bx()});var wx=a((GV,Sx)=>{Sx.exports=xx()});var Ox=a((UV,Tx)=>{Tx.exports=rt()});var Px=a((WV,kx)=>{"use strict";var SF=F(),wF=re(),TF=mn(),OF=le(),Cx=TypeError,Ex="Reduce of empty array with no initial value",Ix=function(e){return function(r,t,n,i){var o=wF(r),u=TF(o),l=OF(o);if(SF(t),l===0&&n<2)throw new Cx(Ex);var c=e?l-1:0,s=e?-1:1;if(n<2)for(;;){if(c in u){i=u[c],c+=s;break}if(c+=s,e?c<0:l<=c)throw new Cx(Ex)}for(;e?c>=0:l>c;c+=s)c in u&&(i=t(i,u[c],c,o));return i}};kx.exports={left:Ix(!1),right:Ix(!0)}});var Xu=a((KV,_x)=>{"use strict";var CF=P();_x.exports=function(e,r){var t=[][e];return!!t&&CF(function(){t.call(null,r||function(){return 1},1)})}});var Ax=a(()=>{"use strict";var EF=x(),IF=Px().left,kF=Xu(),Rx=Ar(),PF=Mt(),_F=!PF&&Rx>79&&Rx<83,RF=_F||!kF("reduce");EF({target:"Array",proto:!0,forced:RF},{reduce:function(r){var t=arguments.length;return IF(this,r,t,t>1?arguments[1]:void 0)}})});var Mx=a((VV,Nx)=>{"use strict";Ax();var AF=oe();Nx.exports=AF("Array","reduce")});var $x=a((YV,jx)=>{"use strict";var NF=B(),MF=Mx(),Zu=Array.prototype;jx.exports=function(e){var r=e.reduce;return e===Zu||NF(Zu,e)&&r===Zu.reduce?MF:r}});var Fx=a((JV,Lx)=>{"use strict";var jF=$x();Lx.exports=jF});var Bx=a((QV,Dx)=>{"use strict";var $F=Fx();Dx.exports=$F});var Ux=a((XV,Gx)=>{"use strict";var LF=Bx();Gx.exports=LF});var Kx=a((ZV,Wx)=>{"use strict";Wx.exports=Ux()});var zx=a((e7,Hx)=>{Hx.exports=Kx()});var Jx=a((r7,Yx)=>{"use strict";var FF=Ie(),DF=le(),BF=Ct(),GF=z(),UF=Fr(),Vx=function(e,r,t,n,i,o,u,l){for(var c=i,s=0,f=u?GF(u,l):!1,p,v;s<n;)s in t&&(p=f?f(t[s],s,r):t[s],o>0&&FF(p)?(v=DF(p),c=Vx(e,r,p,v,c,o-1)-1):(BF(c+1),UF(e,c,p)),c++),s++;return c};Yx.exports=Vx});var Qx=a(()=>{"use strict";var WF=x(),KF=Jx(),HF=F(),zF=re(),VF=le(),YF=jn();WF({target:"Array",proto:!0},{flatMap:function(r){var t=zF(this),n=VF(t),i;return HF(r),i=YF(t,0),KF(i,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),i}})});var Xx=a(()=>{"use strict";var JF=Eo();JF("flatMap")});var eS=a((o7,Zx)=>{"use strict";Qx();Xx();var QF=oe();Zx.exports=QF("Array","flatMap")});var tS=a((u7,rS)=>{"use strict";var XF=B(),ZF=eS(),es=Array.prototype;rS.exports=function(e){var r=e.flatMap;return e===es||XF(es,e)&&r===es.flatMap?ZF:r}});var iS=a((s7,nS)=>{"use strict";var eD=tS();nS.exports=eD});var oS=a((c7,aS)=>{"use strict";var rD=iS();aS.exports=rD});var sS=a((l7,uS)=>{"use strict";var tD=oS();uS.exports=tD});var lS=a((f7,cS)=>{"use strict";cS.exports=sS()});var pS=a((p7,fS)=>{fS.exports=lS()});var dS=a((v7,vS)=>{"use strict";Qa();var nD=oe();vS.exports=nD("Array","concat")});var hS=a((d7,mS)=>{"use strict";var iD=B(),aD=dS(),rs=Array.prototype;mS.exports=function(e){var r=e.concat;return e===rs||iD(rs,e)&&r===rs.concat?aD:r}});var gS=a((m7,yS)=>{"use strict";var oD=hS();yS.exports=oD});var qS=a((h7,bS)=>{"use strict";var uD=gS();bS.exports=uD});var SS=a((y7,xS)=>{"use strict";var sD=qS();xS.exports=sD});var TS=a((g7,wS)=>{"use strict";wS.exports=SS()});var ts=a((b7,OS)=>{OS.exports=TS()});var IS=a(()=>{});var PS=a((G7,kS)=>{"use strict";IS();Co();var gD=Ur();kS.exports=gD.f("toPrimitive")});var RS=a((U7,_S)=>{"use strict";var bD=PS();_S.exports=bD});var NS=a((W7,AS)=>{"use strict";var qD=RS();AS.exports=qD});var jS=a((K7,MS)=>{"use strict";var xD=NS();MS.exports=xD});var LS=a((H7,$S)=>{"use strict";$S.exports=jS()});var zS=a((v9,HS)=>{"use strict";var wD=$(),TD=qe(),OD=R(),CD=OD("match");HS.exports=function(e){var r;return wD(e)&&((r=e[CD])!==void 0?!!r:TD(e)==="RegExp")}});var YS=a((d9,VS)=>{"use strict";var ED=zS(),ID=TypeError;VS.exports=function(e){if(ED(e))throw new ID("The method doesn't accept regular expressions");return e}});var QS=a((m9,JS)=>{"use strict";var kD=R(),PD=kD("match");JS.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[PD]=!1,"/./"[e](r)}catch{}}return!1}});var ew=a(()=>{"use strict";var _D=x(),RD=lt(),AD=pt().f,ND=xa(),XS=He(),MD=YS(),jD=ar(),$D=QS(),LD=Z(),FD=RD("".slice),DD=Math.min,ZS=$D("startsWith"),BD=!LD&&!ZS&&!!function(){var e=AD(String.prototype,"startsWith");return e&&!e.writable}();_D({target:"String",proto:!0,forced:!BD&&!ZS},{startsWith:function(r){var t=XS(jD(this));MD(r);var n=ND(DD(arguments.length>1?arguments[1]:void 0,t.length)),i=XS(r);return FD(t,n,n+i.length)===i}})});var tw=a((g9,rw)=>{"use strict";ew();var GD=oe();rw.exports=GD("String","startsWith")});var iw=a((b9,nw)=>{"use strict";var UD=B(),WD=tw(),os=String.prototype;nw.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===os||UD(os,e)&&r===os.startsWith?WD:r}});var ow=a((q9,aw)=>{"use strict";var KD=iw();aw.exports=KD});var sw=a((x9,uw)=>{"use strict";var HD=ow();uw.exports=HD});var lw=a((S9,cw)=>{"use strict";var zD=sw();cw.exports=zD});var pw=a((w9,fw)=>{"use strict";fw.exports=lw()});var dw=a((T9,vw)=>{vw.exports=pw()});var mw=a(()=>{"use strict";var VD=x(),YD=kt().filter,JD=gt(),QD=JD("filter");VD({target:"Array",proto:!0,forced:!QD},{filter:function(r){return YD(this,r,arguments.length>1?arguments[1]:void 0)}})});var yw=a((E9,hw)=>{"use strict";mw();var XD=oe();hw.exports=XD("Array","filter")});var bw=a((I9,gw)=>{"use strict";var ZD=B(),eB=yw(),us=Array.prototype;gw.exports=function(e){var r=e.filter;return e===us||ZD(us,e)&&r===us.filter?eB:r}});var xw=a((k9,qw)=>{"use strict";var rB=bw();qw.exports=rB});var ww=a((P9,Sw)=>{"use strict";var tB=xw();Sw.exports=tB});var Ow=a((_9,Tw)=>{"use strict";var nB=ww();Tw.exports=nB});var Ew=a((R9,Cw)=>{"use strict";Cw.exports=Ow()});var kw=a((A9,Iw)=>{Iw.exports=Ew()});var Kw=a(()=>{"use strict";var fB=x(),pB=U(),cs=_r(),vB=Pu(),Fw=Bo(),dB=Q(),Dw=$(),mB=Ve(),Gw=P(),ls=pB("Reflect","construct"),hB=Object.prototype,yB=[].push,Uw=Gw(function(){function e(){}return!(ls(function(){},[],e)instanceof e)}),Ww=!Gw(function(){ls(function(){})}),Bw=Uw||Ww;fB({target:"Reflect",stat:!0,forced:Bw,sham:Bw},{construct:function(r,t){Fw(r),dB(t);var n=arguments.length<3?r:Fw(arguments[2]);if(Ww&&!Uw)return ls(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var i=[null];return cs(yB,i,t),new(cs(vB,r,i))}var o=n.prototype,u=mB(Dw(o)?o:hB),l=cs(r,u,t);return Dw(l)?l:u}})});var zw=a((vY,Hw)=>{"use strict";Kw();var gB=H();Hw.exports=gB.Reflect.construct});var Yw=a((dY,Vw)=>{"use strict";var bB=zw();Vw.exports=bB});var Qw=a((mY,Jw)=>{"use strict";var qB=Yw();Jw.exports=qB});var Zw=a((hY,Xw)=>{"use strict";var xB=Qw();Xw.exports=xB});var Mi=a((yY,eT)=>{"use strict";eT.exports=Zw()});var tT=a((gY,rT)=>{rT.exports=Mi()});var fT=a((EY,lT)=>{"use strict";var SB=P();lT.exports=SB(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var dT=a((IY,vT)=>{"use strict";var wB=P(),TB=$(),OB=qe(),pT=fT(),ji=Object.isExtensible,CB=wB(function(){ji(1)});vT.exports=CB||pT?function(r){return!TB(r)||pT&&OB(r)==="ArrayBuffer"?!1:ji?ji(r):!0}:ji});var hT=a((kY,mT)=>{"use strict";var EB=P();mT.exports=!EB(function(){return Object.isExtensible(Object.preventExtensions({}))})});var ys=a((PY,bT)=>{"use strict";var IB=x(),kB=A(),PB=Gr(),_B=$(),ds=W(),RB=te().f,yT=It(),AB=Xa(),ms=dT(),NB=Mr(),MB=hT(),gT=!1,Fe=NB("meta"),jB=0,hs=function(e){RB(e,Fe,{value:{objectID:"O"+jB++,weakData:{}}})},$B=function(e,r){if(!_B(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!ds(e,Fe)){if(!ms(e))return"F";if(!r)return"E";hs(e)}return e[Fe].objectID},LB=function(e,r){if(!ds(e,Fe)){if(!ms(e))return!0;if(!r)return!1;hs(e)}return e[Fe].weakData},FB=function(e){return MB&&gT&&ms(e)&&!ds(e,Fe)&&hs(e),e},DB=function(){BB.enable=function(){},gT=!0;var e=yT.f,r=kB([].splice),t={};t[Fe]=1,e(t).length&&(yT.f=function(n){for(var i=e(n),o=0,u=i.length;o<u;o++)if(i[o]===Fe){r(i,o,1);break}return i},IB({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:AB.f}))},BB=bT.exports={enable:DB,fastKey:$B,getWeakData:LB,onFreeze:FB};PB[Fe]=!0});var ST=a((_Y,xT)=>{"use strict";var GB=x(),UB=_(),WB=ys(),KB=P(),HB=xe(),zB=pe(),VB=ii(),YB=N(),JB=$(),QB=ir(),XB=_e(),ZB=te().f,e3=kt().forEach,r3=G(),qT=ze(),t3=qT.set,n3=qT.getterFor;xT.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,i=e.indexOf("Weak")!==-1,o=n?"set":"add",u=UB[e],l=u&&u.prototype,c={},s;if(!r3||!YB(u)||!(i||l.forEach&&!KB(function(){new u().entries().next()})))s=t.getConstructor(r,e,n,o),WB.enable();else{s=r(function(v,d){t3(VB(v,f),{type:e,collection:new u}),QB(d)||zB(d,v[o],{that:v,AS_ENTRIES:n})});var f=s.prototype,p=n3(e);e3(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(v){var d=v==="add"||v==="set";v in l&&!(i&&v==="clear")&&HB(f,v,function(h,m){var y=p(this).collection;if(!d&&i&&!JB(h))return v==="get"?void 0:!1;var q=y[v](h===0?0:h,m);return d?this:q})}),i||ZB(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return XB(s,e,!1,!0),c[e]=s,GB({global:!0,forced:!0},c),i||t.setStrong(s,e,n),s}});var TT=a((RY,wT)=>{"use strict";var i3=ke();wT.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:i3(e,n,r[n],t);return e}});var _T=a((AY,PT)=>{"use strict";var OT=Ve(),a3=Ln(),CT=TT(),o3=z(),u3=ii(),s3=ir(),c3=pe(),l3=Rn(),$i=An(),f3=Do(),un=G(),ET=ys().fastKey,kT=ze(),IT=kT.set,gs=kT.getterFor;PT.exports={getConstructor:function(e,r,t,n){var i=e(function(s,f){u3(s,o),IT(s,{type:r,index:OT(null),first:null,last:null,size:0}),un||(s.size=0),s3(f)||c3(f,s[n],{that:s,AS_ENTRIES:t})}),o=i.prototype,u=gs(r),l=function(s,f,p){var v=u(s),d=c(s,f),h,m;return d?d.value=p:(v.last=d={index:m=ET(f,!0),key:f,value:p,previous:h=v.last,next:null,removed:!1},v.first||(v.first=d),h&&(h.next=d),un?v.size++:s.size++,m!=="F"&&(v.index[m]=d)),s},c=function(s,f){var p=u(s),v=ET(f),d;if(v!=="F")return p.index[v];for(d=p.first;d;d=d.next)if(d.key===f)return d};return CT(o,{clear:function(){for(var f=this,p=u(f),v=p.first;v;)v.removed=!0,v.previous&&(v.previous=v.previous.next=null),v=v.next;p.first=p.last=null,p.index=OT(null),un?p.size=0:f.size=0},delete:function(s){var f=this,p=u(f),v=c(f,s);if(v){var d=v.next,h=v.previous;delete p.index[v.index],v.removed=!0,h&&(h.next=d),d&&(d.previous=h),p.first===v&&(p.first=d),p.last===v&&(p.last=h),un?p.size--:f.size--}return!!v},forEach:function(f){for(var p=u(this),v=o3(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:p.first;)for(v(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!c(this,f)}}),CT(o,t?{get:function(f){var p=c(this,f);return p&&p.value},set:function(f,p){return l(this,f===0?0:f,p)}}:{add:function(f){return l(this,f=f===0?0:f,f)}}),un&&a3(o,"size",{configurable:!0,get:function(){return u(this).size}}),i},setStrong:function(e,r,t){var n=r+" Iterator",i=gs(r),o=gs(n);l3(e,r,function(u,l){IT(this,{type:n,target:u,state:i(u),kind:l,last:null})},function(){for(var u=o(this),l=u.kind,c=u.last;c&&c.removed;)c=c.previous;return!u.target||!(u.last=c=c?c.next:u.state.first)?(u.target=null,$i(void 0,!0)):$i(l==="keys"?c.key:l==="values"?c.value:[c.key,c.value],!1)},t?"entries":"values",!t,!0),f3(r)}}});var RT=a(()=>{"use strict";var p3=ST(),v3=_T();p3("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},v3)});var AT=a(()=>{"use strict";RT()});var MT=a((LY,NT)=>{"use strict";NT.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,i){return t[e](n,i)}}});var ae=a((FY,$T)=>{"use strict";var d3=U(),Li=MT(),jT=d3("Map");$T.exports={Map:jT,set:Li("set",2),get:Li("get",1),has:Li("has",1),remove:Li("delete",1),proto:jT.prototype}});var bs=a(()=>{"use strict";var m3=x(),h3=A(),y3=F(),g3=ar(),b3=pe(),Fi=ae(),LT=Z(),q3=P(),FT=Fi.Map,x3=Fi.has,S3=Fi.get,w3=Fi.set,T3=h3([].push),O3=LT||q3(function(){return FT.groupBy("ab",function(e){return e}).get("a").length!==1});m3({target:"Map",stat:!0,forced:LT||O3},{groupBy:function(r,t){g3(r),y3(t);var n=new FT,i=0;return b3(r,function(o){var u=t(o,i++);x3(n,u)?T3(S3(n,u),o):w3(n,u,[o])}),n}})});var V=a((GY,DT)=>{"use strict";var C3=Ke(),E3=TypeError;DT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new E3(C3(e)+" is not a map")}});var xs=a(()=>{"use strict";var I3=x(),k3=V(),qs=ae(),P3=Z(),_3=qs.get,R3=qs.has,A3=qs.set;I3({target:"Map",proto:!0,real:!0,forced:P3},{getOrInsert:function(r,t){return R3(k3(this),r)?_3(this,r):(A3(this,r,t),t)}})});var ws=a(()=>{"use strict";var N3=x(),M3=F(),j3=V(),Ss=ae(),$3=Z(),L3=Ss.get,F3=Ss.has,D3=Ss.set;N3({target:"Map",proto:!0,real:!0,forced:$3},{getOrInsertComputed:function(r,t){if(j3(this),M3(t),F3(this,r))return L3(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return D3(this,r,n),n}})});var GT=a((zY,BT)=>{"use strict";mr();AT();bs();xs();ws();Et();fr();var B3=H();BT.exports=B3.Map});var WT=a((VY,UT)=>{"use strict";var G3=GT();hr();UT.exports=G3});var Ts=a(()=>{"use strict";xs()});var Os=a(()=>{"use strict";ws()});var KT=a(()=>{"use strict";bs()});var zT=a((rJ,HT)=>{"use strict";var U3=WT();Ts();Os();KT();HT.exports=U3});var YT=a((tJ,VT)=>{"use strict";var W3=z(),K3=Q(),H3=re(),z3=pe();VT.exports=function(e,r,t){return function(i){var o=H3(i),u=arguments.length,l=u>1?arguments[1]:void 0,c=l!==void 0,s=c?W3(l,u>2?arguments[2]:void 0):void 0,f=new e,p=0;return z3(o,function(v){var d=c?s(v,p++):v;t?r(f,K3(d)[0],d[1]):r(f,d)}),f}}});var QT=a(()=>{"use strict";var V3=x(),JT=ae(),Y3=YT();V3({target:"Map",stat:!0,forced:!0},{from:Y3(JT.Map,JT.set,!0)})});var ZT=a((aJ,XT)=>{"use strict";var J3=Q();XT.exports=function(e,r,t){return function(){for(var i=new e,o=arguments.length,u=0;u<o;u++){var l=arguments[u];t?r(i,J3(l)[0],l[1]):r(i,l)}return i}}});var rO=a(()=>{"use strict";var Q3=x(),eO=ae(),X3=ZT();Q3({target:"Map",stat:!0,forced:!0},{of:X3(eO.Map,eO.set,!0)})});var nO=a(()=>{"use strict";var Z3=x(),e4=D(),r4=pe(),t4=N(),tO=F(),n4=ae().Map;Z3({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=t4(this)?this:n4,i=new n;tO(t);var o=tO(i.set);return r4(r,function(u){e4(o,i,t(u),u)}),i}})});var iO=a(()=>{"use strict";var i4=x(),a4=V(),o4=ae().remove;i4({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=a4(this),t=!0,n,i=0,o=arguments.length;i<o;i++)n=o4(r,arguments[i]),t=t&&n;return!!t}})});var oO=a(()=>{"use strict";var u4=x(),s4=V(),Cs=ae(),c4=Cs.get,l4=Cs.has,aO=Cs.set;u4({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=s4(this),i,o;return l4(n,r)?(i=c4(n,r),"update"in t&&(i=t.update(i,r,n),aO(n,r,i)),i):(o=t.insert(r,n),aO(n,r,o),o)}})});var sO=a((dJ,uO)=>{"use strict";var f4=D();uO.exports=function(e,r,t){for(var n=t?e:e.iterator,i=e.next,o,u;!(o=f4(i,n)).done;)if(u=r(o.value),u!==void 0)return u}});var he=a((mJ,cO)=>{"use strict";var p4=sO();cO.exports=function(e,r,t){return t?p4(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var lO=a(()=>{"use strict";var v4=x(),d4=z(),m4=V(),h4=he();v4({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=m4(this),n=d4(r,arguments.length>1?arguments[1]:void 0);return h4(t,function(i,o){if(!n(i,o,t))return!1},!0)!==!1}})});var pO=a(()=>{"use strict";var y4=x(),g4=z(),b4=V(),fO=ae(),q4=he(),x4=fO.Map,S4=fO.set;y4({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=b4(this),n=g4(r,arguments.length>1?arguments[1]:void 0),i=new x4;return q4(t,function(o,u){n(o,u,t)&&S4(i,u,o)}),i}})});var vO=a(()=>{"use strict";var w4=x(),T4=z(),O4=V(),C4=he();w4({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=O4(this),n=T4(r,arguments.length>1?arguments[1]:void 0),i=C4(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return i&&i.value}})});var dO=a(()=>{"use strict";var E4=x(),I4=z(),k4=V(),P4=he();E4({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=k4(this),n=I4(r,arguments.length>1?arguments[1]:void 0),i=P4(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return i&&i.key}})});var hO=a((TJ,mO)=>{"use strict";mO.exports=function(e,r){return e===r||e!==e&&r!==r}});var yO=a(()=>{"use strict";var _4=x(),R4=hO(),A4=V(),N4=he();_4({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return N4(A4(this),function(t){if(R4(t,r))return!0},!0)===!0}})});var gO=a(()=>{"use strict";var M4=x(),j4=V(),$4=he();M4({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=$4(j4(this),function(n,i){if(n===r)return{key:i}},!0);return t&&t.key}})});var qO=a(()=>{"use strict";var L4=x(),F4=z(),D4=V(),bO=ae(),B4=he(),G4=bO.Map,U4=bO.set;L4({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=D4(this),n=F4(r,arguments.length>1?arguments[1]:void 0),i=new G4;return B4(t,function(o,u){U4(i,n(o,u,t),o)}),i}})});var SO=a(()=>{"use strict";var W4=x(),K4=z(),H4=V(),xO=ae(),z4=he(),V4=xO.Map,Y4=xO.set;W4({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=H4(this),n=K4(r,arguments.length>1?arguments[1]:void 0),i=new V4;return z4(t,function(o,u){Y4(i,u,n(o,u,t))}),i}})});var wO=a(()=>{"use strict";var J4=x(),Q4=V(),X4=pe(),Z4=ae().set;J4({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=Q4(this),n=arguments.length,i=0;i<n;)X4(arguments[i++],function(o,u){Z4(t,o,u)},{AS_ENTRIES:!0});return t}})});var TO=a(()=>{"use strict";var eG=x(),rG=F(),tG=V(),nG=he(),iG=TypeError;eG({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=tG(this),n=arguments.length<2,i=n?void 0:arguments[1];if(rG(r),nG(t,function(o,u){n?(n=!1,i=o):i=r(i,o,u,t)}),n)throw new iG("Reduce of empty map with no initial value");return i}})});var OO=a(()=>{"use strict";var aG=x(),oG=z(),uG=V(),sG=he();aG({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=uG(this),n=oG(r,arguments.length>1?arguments[1]:void 0);return sG(t,function(i,o){if(n(i,o,t))return!0},!0)===!0}})});var EO=a(()=>{"use strict";var cG=x(),CO=F(),lG=V(),Es=ae(),fG=TypeError,pG=Es.get,vG=Es.has,dG=Es.set;cG({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=lG(this),i=arguments.length;CO(t);var o=vG(n,r);if(!o&&i<3)throw new fG("Updating absent value");var u=o?pG(n,r):CO(i>2?arguments[2]:void 0)(r,n);return dG(n,r,t(u,r,n)),n}})});var ks=a((BJ,IO)=>{"use strict";var Di=D(),Is=F(),Bi=N(),mG=Q(),hG=TypeError;IO.exports=function(r,t){var n=mG(this),i=Is(n.get),o=Is(n.has),u=Is(n.set),l=arguments.length>2?arguments[2]:void 0,c;if(!Bi(t)&&!Bi(l))throw new hG("At least one callback required");return Di(o,n,r)?(c=Di(i,n,r),Bi(t)&&(c=t(c),Di(u,n,r,c))):Bi(l)&&(c=l(),Di(u,n,r,c)),c}});var kO=a(()=>{"use strict";var yG=x(),gG=ks();yG({target:"Map",proto:!0,real:!0,forced:!0},{upsert:gG})});var PO=a(()=>{"use strict";var bG=x(),qG=ks();bG({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:qG})});var RO=a((HJ,_O)=>{"use strict";var xG=zT();QT();rO();nO();iO();oO();lO();pO();vO();dO();yO();Ts();Os();gO();qO();SO();wO();TO();OO();EO();kO();PO();_O.exports=xG});var NO=a((zJ,AO)=>{"use strict";AO.exports=RO()});var jO=a(()=>{"use strict";var SG=x(),wG=lt(),TG=_a().indexOf,OG=Xu(),Ps=wG([].indexOf),MO=!!Ps&&1/Ps([1],1,-0)<0,CG=MO||!OG("indexOf");SG({target:"Array",proto:!0,forced:CG},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return MO?Ps(this,r,t)||0:TG(this,r,t)}})});var LO=a((JJ,$O)=>{"use strict";jO();var EG=oe();$O.exports=EG("Array","indexOf")});var DO=a((QJ,FO)=>{"use strict";var IG=B(),kG=LO(),_s=Array.prototype;FO.exports=function(e){var r=e.indexOf;return e===_s||IG(_s,e)&&r===_s.indexOf?kG:r}});var GO=a((XJ,BO)=>{"use strict";var PG=DO();BO.exports=PG});var WO=a((ZJ,UO)=>{"use strict";var _G=GO();UO.exports=_G});var HO=a((eQ,KO)=>{"use strict";var RG=WO();KO.exports=RG});var VO=a((rQ,zO)=>{"use strict";zO.exports=HO()});var fC=a(()=>{"use strict";var LG=x(),FG=re(),lC=En(),DG=P(),BG=DG(function(){lC(1)});LG({target:"Object",stat:!0,forced:BG},{keys:function(r){return lC(FG(r))}})});var vC=a((oX,pC)=>{"use strict";fC();var GG=H();pC.exports=GG.Object.keys});var mC=a((uX,dC)=>{"use strict";var UG=vC();dC.exports=UG});var yC=a((sX,hC)=>{"use strict";var WG=mC();hC.exports=WG});var bC=a((cX,gC)=>{"use strict";var KG=yC();gC.exports=KG});var xC=a((lX,qC)=>{"use strict";qC.exports=bC()});var wC=a((fX,SC)=>{SC.exports=xC()});var kr="",Vi="";function Hs(e){kr=e.replace(/\/+$/,"")}function zs(e){Vi=e}function ut(){return Vi?{Authorization:`Bearer ${Vi}`}:{}}async function st(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function Vs(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${kr}/comments?${t}`,{headers:ut()});return await st(n,"Failed to fetch comments"),(await n.json()).data}async function Yi({uri:e,document:r,quote:t,prefix:n,suffix:i,body:o,author:u,parent:l}){let c={quote:t,prefix:n,suffix:i,body:o,author:u,parent:l};r?c.document=r:c.uri=e;let s=await fetch(`${kr}/comments`,{method:"POST",headers:{"Content-Type":"application/json",...ut()},body:JSON.stringify(c)});return await st(s,"Failed to create comment"),s.json()}async function Ys(e,{body:r}){let t=await fetch(`${kr}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...ut()},body:JSON.stringify({body:r})});return await st(t,"Failed to update comment"),t.json()}async function Js(e,r){let t=await fetch(`${kr}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...ut()},body:JSON.stringify({status:r})});return await st(t,"Failed to update comment status"),t.json()}async function Qs(e){let r=await fetch(`${kr}/comments/${e}`,{method:"DELETE",headers:ut()});await st(r,"Failed to delete comment")}var LL=g(Br(),1),FL=g(Mn(),1),DL=g(Qn(),1),BL=g(Xn(),1),GL=g(Zn(),1);var Ou=g(rt(),1);function Hy(e,r,t,n,i,o,u){try{var l=e[o](u),c=l.value}catch(s){return void t(s)}l.done?r(c):Ou.default.resolve(c).then(n,i)}function xr(e){return function(){var r=this,t=arguments;return new Ou.default(function(n,i){var o=e.apply(r,t);function u(c){Hy(o,n,i,u,l,"next",c)}function l(c){Hy(o,n,i,u,l,"throw",c)}u(void 0)})}}function Gt(e,r){this.v=e,this.k=r}function Xe(e){return new Gt(e,0)}var Cu=g(rt(),1),tg=g(Se(),1),ng=g(di(),1);function Te(e){return function(){return new Ut(e.apply(this,arguments))}}function Ut(e){var r,t;function n(o,u){try{var l=e[o](u),c=l.value,s=c instanceof Gt;Cu.default.resolve(s?c.v:c).then(function(f){if(s){var p=o==="return"?"return":"next";if(!c.k||f.done)return n(p,f);f=e[p](f).value}i(l.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){i("throw",f)}}function i(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new Cu.default(function(l,c){var s={key:o,arg:u,resolve:l,reject:c,next:null};t?t=t.next=s:(r=t=s,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Ut.prototype[typeof tg.default=="function"&&ng.default||"@@asyncIterator"]=function(){return this},Ut.prototype.next=function(e){return this._invoke("next",e)},Ut.prototype.throw=function(e){return this._invoke("throw",e)},Ut.prototype.return=function(e){return this._invoke("return",e)};var UL=g(se(),1),WL=g(Eq(),1);function ce(e){var r,t=jL(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function jL(e){return"startContainer"in e}function er(e){if($L(e))return e;var r=e,t=ce(r).createRange();return t.selectNodeContents(r),t}function $L(e){return"startContainer"in e}var Fq=g(Lq(),1);function Dq(e){if((0,Fq.default)(e))return e}var Zq=g(Se(),1),ex=g(No(),1),rx=g(Yu(),1);function tx(e,r){var t=e==null?null:typeof Zq.default<"u"&&(0,ex.default)(e)||e["@@iterator"];if(t!=null){var n,i,o,u,l=[],c=!0,s=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&((0,rx.default)(l).call(l,n.value),l.length!==r);c=!0);}catch(f){s=!0,i=f}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(s)throw i}}return l}}var nx=g(Ta(),1),ix=g(Ja(),1);function ki(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function Ju(e,r){if(e){var t;if(typeof e=="string")return ki(e,r);var n=(0,nx.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,ix.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ki(e,r):void 0}}function ax(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $e(e,r){return Dq(e)||tx(e,r)||Ju(e,r)||ax()}var ox=g(Se(),1),ux=g(di(),1),sx=g(Qt(),1),rn=g(rt(),1);function nt(e){var r,t,n,i=2;for(typeof ox.default<"u"&&(t=ux.default,n=sx.default);i--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Pi(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Pi(e){function r(t){if(Object(t)!==t)return rn.default.reject(new TypeError(t+" is not an object."));var n=t.done;return rn.default.resolve(t.value).then(function(i){return{value:i,done:n}})}return Pi=function(n){this.s=n,this.n=n.next},Pi.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var i=this.s.return;return i===void 0?rn.default.resolve({value:n,done:!0}):r(i.apply(this.s,arguments))},throw:function(n){var i=this.s.return;return i===void 0?rn.default.reject(n):r(i.apply(this.s,arguments))}},new Pi(e)}var yD=g(se(),1);var fD=g(se(),1),pD=g(wx(),1),vD=g(Ox(),1),dD=g(zx(),1),mD=g(pS(),1),hD=g(ts(),1);var Ns=g(se(),1);var lB=g(se(),1);var is=g(se(),1);function tn(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function CS(e,r){return tn(e.startChunk,r.startChunk)&&tn(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function Sr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var ns=g(Ht(),1);var nn=g(Se(),1),ES=g(Qt(),1);function Le(e){"@babel/helpers - typeof";return Le=typeof nn.default=="function"&&typeof ES.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof nn.default=="function"&&r.constructor===nn.default&&r!==nn.default.prototype?"symbol":typeof r},Le(e)}var FS=g(LS(),1);function DS(e,r){if(Le(e)!="object"||!e)return e;var t=e[FS.default];if(t!==void 0){var n=t.call(e,r||"default");if(Le(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function _i(e){var r=DS(e,"string");return Le(r)=="symbol"?r:r+""}function BS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,ns.default)(e,_i(n.key),n)}}function an(e,r,t){return r&&BS(e.prototype,r),t&&BS(e,t),(0,ns.default)(e,"prototype",{writable:!1}),e}var GS=g(Ht(),1);function wr(e,r,t){return(r=_i(r))in e?(0,GS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var US=g(Br(),1);var Ri="Iterator exhausted before seek ended.",on=function(){function e(r){Sr(this,e),this.chunker=r,wr(this,"currentChunkPosition",0),wr(this,"offsetInChunk",0),this.seekTo(0)}return an(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,i)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!tn(this.currentChunk,n);){var p=this._readToPreviousChunk(),v=$e(p,2),d=v[0],h=v[1];if(t&&(u=d+u),h===null)throw new RangeError(Ri)}else for(;!tn(this.currentChunk,n);){var l=this._readToNextChunk(),c=$e(l,2),s=c[0],f=c[1];if(t&&(u+=s),f===null)throw new RangeError(Ri)}var m=this.currentChunkPosition+i;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,US.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var l=this.currentChunkPosition+this.currentChunk.data.length;if(l<=n){var c=this._readToNextChunk(),s=$e(c,2),f=s[0],p=s[1];if(t&&(u+=f),p===null){if(this.position===n||o)break;throw new RangeError(Ri)}}else{var v=i?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,v)),this.offsetInChunk=v,i&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=i?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var h=this._readToPreviousChunk(),m=$e(h,2),y=m[0],q=m[1];if(t&&(u=y+u),q===null){if(o)break;throw new RangeError(Ri)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,i=this.chunker.nextChunk();return i!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,i]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function KS(e,r){return as.apply(this,arguments)}function as(){return as=xr(is.default.mark(function e(r,t){var n,i,o,u,l,c,s,f,p,v,d,h,m,y,q,b,I,E,S,T,w,C,j=arguments;return is.default.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:n=j.length>2&&j[2]!==void 0?j[2]:{},i=n.minimalContext,o=i===void 0?!1:i,u=n.minimumQuoteLength,l=u===void 0?0:u,c=n.maxWordLength,s=c===void 0?50:c,f=new on(t()),p=new on(t()),f.seekToChunk(r.startChunk,r.startIndex),v=f.readToChunk(r.endChunk,r.endIndex),d="",h="",m=function(){return d.length+v.length+h.length},m()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),y=Math.floor((l-m())/2),d=f.read(-y,!1,!0)+d,m()<l&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),q=l-m(),h=h+f.read(q,!1,!0),m()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),b=l-m(),d=f.read(-b,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=Ai(f,s,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+Ai(f,s,!1));case 11:return I={type:"TextQuoteSelector",exact:v,prefix:d,suffix:h},E=Ni(I)(t()),k.next=16,E.next();case 16:if(S=k.sent,!(!S.done&&CS(S.value,r))){k.next=21;break}return k.next=20,E.next();case 20:S=k.sent;case 21:if(!S.done){k.next=23;break}return k.abrupt("return",I);case 23:if(T=S.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),p.seekToChunk(T.startChunk,T.startIndex-d.length),w=WS(f,p,!0),w!==void 0&&!o&&(w=Ai(f,s,!0)+w),f.seekToChunk(r.endChunk,r.endIndex+h.length),p.seekToChunk(T.endChunk,T.endIndex+h.length),C=WS(f,p,!1),C!==void 0&&!o&&(C=C+Ai(f,s,!1)),!o){k.next=44;break}if(!(w!==void 0&&(C===void 0||w.length<=C.length))){k.next=37;break}d=w+d,k.next=42;break;case 37:if(C===void 0){k.next=41;break}h=h+C,k.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:k.next=46;break;case 44:w!==void 0&&(d=w+d),C!==void 0&&(h=h+C);case 46:k.next=11;break;case 48:case"end":return k.stop()}},e)})),as.apply(this,arguments)}function WS(e,r,t){for(var n="";;){var i=void 0;try{i=e.read(t?-1:1)}catch{return}n=t?i+n:n+i;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(i!==o)return n}}function Ai(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var i=void 0;try{i=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(SD(i)){e.seekBy(t?1:-1);break}n=t?i+n:n+i}return n}function SD(e){return/^\s+$/.test(e)}var Rw=g(Br(),1),Aw=g(Mn(),1),Nw=g(Qn(),1),Mw=g(Xn(),1),jw=g(Zn(),1);var ss=g(se(),1),$w=g(dw(),1),Lw=g(kw(),1);function Pw(e,r){var t;if(typeof Nw.default>"u"||(0,Mw.default)(e)==null){if(Array.isArray(e)||(t=iB(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(s){throw s},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,l;return{s:function(){t=(0,jw.default)(e)},n:function(){var s=t.next();return o=s.done,s},e:function(s){u=!0,l=s},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw l}}}}function iB(e,r){var t;if(e){if(typeof e=="string")return _w(e,r);var n=(0,Rw.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,Aw.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _w(e,r)}}function _w(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Ni(e){return function(){var r=Te(ss.default.mark(function n(i){var o,u,l,c,s,f,p,v,d,h,m,y,q,b,I,E,S,T,w,C,j,ge,k,ee,be,J,L;return ss.default.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:o=e.exact,u=e.prefix||"",l=e.suffix||"",c=u+o+l,s=[],f=!0;case 6:p=i.currentChunk,v=p.data,d=[],h=Pw(s),O.prev=10,h.s();case 12:if((m=h.n()).done){O.next=27;break}if(y=m.value,q=y.charactersMatched,y.endChunk===void 0&&(b=u.length+o.length-q,b<=v.length&&(y.endChunk=p,y.endIndex=b)),y.startChunk===void 0&&(I=u.length-q,(I<v.length||y.endChunk!==void 0)&&(y.startChunk=p,y.startIndex=I)),E=c.length-q,!(E<=v.length)){O.next=24;break}if(!(0,$w.default)(v).call(v,c.substring(q))){O.next=22;break}return O.next=22,y;case 22:O.next=25;break;case 24:v===c.substring(q,q+v.length)&&(y.charactersMatched+=v.length,d.push(y));case 25:O.next=12;break;case 27:O.next=32;break;case 29:O.prev=29,O.t0=O.catch(10),h.e(O.t0);case 32:return O.prev=32,h.f(),O.finish(32);case 35:if(s=d,!(c.length<=v.length)){O.next=49;break}S=0;case 38:if(!(S<=v.length)){O.next=49;break}if(T=v.indexOf(c,S),T!==-1){O.next=42;break}return O.abrupt("break",49);case 42:if(S=T+1,!(T===0&&c.length===0&&!f)){O.next=45;break}return O.abrupt("continue",38);case 45:return O.next=47,{startChunk:p,startIndex:T+u.length,endChunk:p,endIndex:T+u.length+o.length};case 47:O.next=38;break;case 49:for(w=[],C=Math.max(v.length-c.length+1,0),j=function(Ue){var Ws=v[Ue];w=(0,Lw.default)(w).call(w,function(JC){return Ws===c[Ue-JC]}),Ws===c[0]&&w.push(Ue)},ge=C;ge<v.length;ge++)j(ge);k=Pw(w);try{for(k.s();!(ee=k.n()).done;)be=ee.value,J=v.length-be,L={charactersMatched:J},J>=u.length+o.length&&(L.endChunk=p,L.endIndex=be+u.length+o.length),(J>u.length||L.endChunk!==void 0)&&(L.startChunk=p,L.startIndex=be+u.length),s.push(L)}catch(Ir){k.e(Ir)}finally{k.f()}f=!1;case 56:if(i.nextChunk()!==null){O.next=6;break}case 57:case"end":return O.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var sB=g(se(),1);var aB=g(Br(),1),oB=g(ts(),1);var cB=g(se(),1);var cn=g(tT(),1);var iT=g(hi(),1),aT=g(Ht(),1);var fs=g(yi(),1),nT=g(Kt(),1);function rr(e,r){var t;return rr=fs.default?(0,nT.default)(t=fs.default).call(t):function(n,i){return n.__proto__=i,n},rr(e,r)}function ps(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,iT.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,aT.default)(e,"prototype",{writable:!1}),r&&rr(e,r)}function oT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function uT(e,r){if(r&&(Le(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return oT(e)}var sT=g(yi(),1),cT=g(Kt(),1),vs=g(mi(),1);function Tr(e){var r;return Tr=sT.default?(0,cT.default)(r=vs.default).call(r):function(t){return t.__proto__||(0,vs.default)(t)},Tr(e)}var As=g(NO(),1),tC=g(hi(),1);var YO=g(VO(),1);function JO(e){try{var r;return(0,YO.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var XO=g(Mi(),1),ZO=g(Yu(),1),eC=g(Kt(),1);var QO=g(Mi(),1);function Rs(){try{var e=!Boolean.prototype.valueOf.call((0,QO.default)(Boolean,[],function(){}))}catch{}return(Rs=function(){return!!e})()}function rC(e,r,t){if(Rs())return XO.default.apply(null,arguments);var n=[null];(0,ZO.default)(n).apply(n,r);var i=new((0,eC.default)(e).apply(e,n));return t&&rr(i,t.prototype),i}function sn(e){var r=typeof As.default=="function"?new As.default:void 0;return sn=function(n){if(n===null||!JO(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,i)}function i(){return rC(n,arguments,Tr(this).constructor)}return i.prototype=(0,tC.default)(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),rr(i,n)},sn(e)}function aC(e,r){var t=ce(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i=nC(e.startContainer,e.startOffset),o=$e(i,2),u=o[0],l=o[1];for(n.currentNode=u;l===u.length&&n.nextNode();)u=n.currentNode,l=0;e.setStart(u,l);var c=nC(e.endContainer,e.endOffset),s=$e(c,2),f=s[0],p=s[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function nC(e,r){var t;if(iC(e))return[e,r];var n;if(AG(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(iC(n))return[n,0];var i=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=i.createTreeWalker(i,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function iC(e){return e.nodeType===Node.TEXT_NODE}function AG(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function uC(e){var r=NG();return function(){var n=Tr(e),i;if(r){var o=Tr(this).constructor;i=(0,cn.default)(n,arguments,o)}else i=n.apply(this,arguments);return uT(this,i)}}function NG(){if(typeof Reflect>"u"||!cn.default||cn.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,cn.default)(Boolean,[],function(){})),!0}catch{return!1}}var Gi=function(e){ps(t,e);var r=uC(t);function t(n){return Sr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(sn(TypeError)),MG=function(e){ps(t,e);var r=uC(t);function t(n){return Sr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(sn(TypeError)),Or=function(){function e(r){var t=this;if(Sr(this,e),wr(this,"scope",void 0),wr(this,"iter",void 0),this.scope=er(r),this.iter=ce(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!oC(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Gi}}return an(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!oC(t))throw new Gi;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new MG;var n=t===this.scope.startContainer?this.scope.startOffset:0,i=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:i,data:t.data.substring(n,i),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=aC(t,this.scope),i=this.nodeToChunk(n.startContainer),o=n.startOffset-i.startOffset,u=this.nodeToChunk(n.endContainer),l=n.endOffset-u.startOffset;return{startChunk:i,startIndex:o,endChunk:u,endIndex:l}}},{key:"chunkRangeToRange",value:function(t){var n=ce(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function oC(e){return e.nodeType===Node.TEXT_NODE}function sC(e,r){return Ms.apply(this,arguments)}function Ms(){return Ms=xr(Ns.default.mark(function e(r,t){var n,i,o,u=arguments;return Ns.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},i=er(t??ce(r)),o=new Or(i),c.next=5,KS(o.rangeToChunkRange(r),function(){return new Or(i)},n);case 5:return c.abrupt("return",c.sent);case 6:case"end":return c.stop()}},e)})),Ms.apply(this,arguments)}var js=g(se(),1);function cC(e){var r=Ni(e);return function(){var t=Te(js.default.mark(function i(o){var u,l,c,s,f,p,v,d;return js.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new Or(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof Gi)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:l=!0,c=!1,m.prev=13,f=nt(r(u));case 15:return m.next=17,Xe(f.next());case 17:return p=m.sent,l=p.done,m.next=21,Xe(p.value);case 21:if(v=m.sent,l){m.next=29;break}return d=v,m.next=26,u.chunkRangeToRange(d);case 26:l=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),c=!0,s=m.t1;case 35:if(m.prev=35,m.prev=36,!(!l&&f.return!=null)){m.next=40;break}return m.next=40,Xe(f.return());case 40:if(m.prev=40,!c){m.next=43;break}throw s;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},i,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(i){return t.apply(this,arguments)}return n}()}var jG=g(se(),1);var $G=g(se(),1);var HG=g(wC(),1),zG=g(Br(),1),VG=g(Mn(),1),YG=g(Qn(),1),JG=g(Xn(),1),QG=g(Zn(),1);async function TC(e,r){let t=await sC(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function Ui(e,r){let t=cC({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var it="fb-highlight",OC="fb-highlight-active";var ln=null;function EC(e){ln=e}function Wi(e,r){let t=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let n=CC(e,r);t.push(n)}else{let n=ZG(e);for(let i=0;i<n.length;i++){let o=n[i],u=document.createRange();o===e.startContainer?(u.setStart(o,e.startOffset),u.setEnd(o,o.textContent.length)):o===e.endContainer?(u.setStart(o,0),u.setEnd(o,e.endOffset)):u.selectNodeContents(o),u.collapsed||t.push(CC(u,r))}}return t}function CC(e,r){let t=e.commonAncestorContainer;for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;let n=t,i=!1,o=null;for(;n;){if(n.tagName==="foreignObject"){i=!1;break}n.tagName==="text"&&n instanceof SVGElement&&(i=!0),n.tagName==="svg"&&(o=n),n=n.parentElement}if(i&&o)return XG(e,r,o);let u=document.createElement("mark");u.className=it,u.dataset.commentId=r,u.style.backgroundColor="rgba(255, 212, 0, 0.35)",u.style.cursor="pointer",u.style.borderRadius="2px",u.addEventListener("click",()=>{ln&&ln(r)});try{e.surroundContents(u)}catch(l){return console.warn("[feedback-layer] Failed to create highlight:",l),null}return u}function XG(e,r,t){try{let n=e.getClientRects();if(n.length===0)return null;let i="http://www.w3.org/2000/svg",o=t.getScreenCTM();if(!o)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let u=e.commonAncestorContainer;for(;u&&u.nodeType!==Node.ELEMENT_NODE;)u=u.parentNode;let l=u,c=null;for(;l&&l!==t;){if(l.tagName==="text"){c=l.parentElement;break}l=l.parentElement}let s=c||t,f=o;s!==t&&s.getScreenCTM&&(f=s.getScreenCTM());let p=document.createElementNS(i,"g");p.setAttribute("class",it),p.setAttribute("data-comment-id",r),p.style.cursor="pointer";for(let y=0;y<n.length;y++){let q=n[y],b=document.createElementNS(i,"rect"),I=t.createSVGPoint();I.x=q.left,I.y=q.top;let E=I.matrixTransform(f.inverse()),S=q.width/f.a,T=q.height/f.d;b.setAttribute("x",E.x),b.setAttribute("y",E.y),b.setAttribute("width",S),b.setAttribute("height",T),b.setAttribute("fill","#ffd400"),b.setAttribute("fill-opacity","0.35"),b.setAttribute("rx","2"),b.setAttribute("ry","2"),b.style.pointerEvents="none",p.appendChild(b)}s&&s!==t?s.appendChild(p):t.appendChild(p);let v=e.commonAncestorContainer;for(;v&&v.nodeType!==Node.ELEMENT_NODE;)v=v.parentNode;let d=new Set,h=v;for(;h&&h!==t;)h.tagName==="text"&&h instanceof SVGElement&&(d.add(h),h.querySelectorAll("tspan").forEach(q=>d.add(q))),h=h.parentElement;let m=y=>{y.preventDefault(),y.stopPropagation(),ln&&ln(r)};return d.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",m),y.dataset.fbCommentId=r}),p}catch(n){return console.warn("[feedback-layer] Failed to create SVG highlight:",n),null}}function $s(e){document.querySelectorAll(`.${it}[data-comment-id="${e}"]`).forEach(n=>{let i=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)i.removeChild(n);else{for(;n.firstChild;)i.insertBefore(n.firstChild,n);i.removeChild(n),i.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function IC(){document.querySelectorAll(`.${it}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function Ki(e){document.querySelectorAll(`.${it}`).forEach(r=>{let t=r.dataset.commentId===e,n="rgba(255, 180, 0, 0.55)",i="rgba(255, 212, 0, 0.35)";t?r.classList.add(OC):r.classList.remove(OC),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(u=>{u.setAttribute("fill",t?n:i)}):r.style.backgroundColor=t?n:i})}function kC(e){let r=document.querySelector(`.${it}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function ZG(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let i=document.createRange();return i.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,i)<0&&e.compareBoundaryPoints(Range.START_TO_END,i)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function PC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,i)=>{let o=[`**${i+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let l of u)o.push(`  - **[${l.author}]** (reply): ${l.body}`);return o.join(`
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
[numbered list matching feedback numbers, explaining what you changed]`}function tr(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var eU=`
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
`,RC=null,AC=null;function NC(e,r){AC=e,RC=r,rU()}function rU(){let e=document.createElement("style");e.textContent=eU,document.head.appendChild(e)}function MC(){let e=RC(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let i=document.createElement("button");i.className="hf-modal-close",i.textContent="\xD7",i.addEventListener("click",()=>r.remove()),n.appendChild(i);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",p=>{p.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let l=document.querySelector(AC.contentSelector||"body").innerHTML,c=_C(l,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${c.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${tr(c)}</textarea>
  `;let s=document.createElement("button");s.className="hf-btn hf-btn-primary",s.textContent="Copy Prompt",s.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c),s.textContent="Copied!"}catch{s.textContent="Copy failed"}setTimeout(()=>s.textContent="Copy Prompt",2e3)}),u.appendChild(s);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function jC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function $C(e,r){return e.length>r?e.slice(0,r)+"...":e}function LC(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var fn=null;function DC(e){fn=document.createElement("div"),fn.className="fb-toast-container",e.appendChild(fn)}function Cr(e,r="success"){if(!fn)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>FC(t)),t.appendChild(o)}fn.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>FC(t),r==="error"?8e3:4e3)}function FC(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}var tU=320,GC="feedback-layer-commenter",X=null,Be=null,De=null,Ls=null,UC=null,Fs=null,Ds=null,Bs=null,Gs=null,Us=!1,WC=[],KC=new Set;function at(){return localStorage.getItem(GC)||""}function HC({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:i}){UC=e,Fs=r,Ds=t,Bs=n,Gs=i,oU(),X=document.createElement("div"),X.className="fb-sidebar fb-sidebar-collapsed",X.innerHTML=`
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
               value="${tr(at())}">
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
  `;let o=document.createElement("button");o.className="fb-sidebar-tab",o.textContent="Feedback",o.addEventListener("click",()=>pn()),document.body.appendChild(o),document.body.appendChild(X),DC(X),Be=X.querySelector(".fb-comment-list"),De=X.querySelector(".fb-form-section");let u=X.querySelector(".fb-name-input");u.addEventListener("input",()=>{localStorage.setItem(GC,u.value.trim())}),X.querySelector(".fb-ai-btn").addEventListener("click",()=>MC()),X.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>nU());let s=X.querySelector(".fb-show-resolved-cb");s.addEventListener("change",()=>{Us=s.checked,nr(WC,KC)})}function pn(){X.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden")}function nU(){X.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden")}function zC(e){if(pn(),!at()){let n=X.querySelector(".fb-name-input");n.style.outline="2px solid #ef4444",setTimeout(()=>n.style.outline="",2e3)}Ls=e,De.style.display="",De.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${tr($C(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `;let r=De.querySelector(".fb-form-textarea");r.focus();let t=()=>{if(!at()){let i=X.querySelector(".fb-name-input");i.focus(),i.style.outline="2px solid #ef4444",setTimeout(()=>i.style.outline="",2e3);return}let n=r.value.trim();n&&(UC({comment:n,commenter:at()}),De.style.display="none",Ls=null)};De.querySelector(".fb-submit-btn").addEventListener("click",t),r.addEventListener("keydown",n=>{n.key==="Enter"&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),t())}),De.querySelector(".fb-cancel-btn").addEventListener("click",()=>{De.style.display="none",Ls=null}),De.scrollIntoView({behavior:"smooth",block:"nearest"})}function nr(e,r=new Set,t=new Map){WC=e,KC=r,Be.innerHTML="";let{topLevel:n,repliesByParent:i}=jC(e),o=n.slice().sort((s,f)=>{let p=t.get(s.id),v=t.get(f.id);return!p||!v?0:p.compareBoundaryPoints(Range.START_TO_START,v)}),u=o.filter(s=>{let f=r.has(s.id),p=s.status==="closed";return f||p&&Us}),l=Us?u:u.filter(s=>s.status!=="closed");if(o.length===0){Be.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let c=o.filter(s=>!r.has(s.id)&&s.status!=="closed").length;if(l.length===0){c>0?Be.innerHTML=`<div class="fb-empty">
        ${u.length} comment(s) resolved.
        ${c>0?`<br>${c} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:Be.innerHTML=`<div class="fb-empty">All ${o.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let s of l){let f=document.createElement("div");f.className="fb-thread",f.appendChild(BC(s,!1));let p=i.get(s.id)||[];for(let d of p)f.appendChild(BC(d,!0));let v=document.createElement("button");v.className="fb-reply-btn",v.textContent="Reply",v.addEventListener("click",d=>{d.stopPropagation(),iU(s.id,f,v)}),f.appendChild(v),Be.appendChild(f)}}function BC(e,r){let t=e.status==="closed",n=document.createElement("div");return n.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":""),n.dataset.id=e.id,n.innerHTML=`
    <div class="fb-cmt-body">${tr(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${tr(e.author)}</span>
      <span class="fb-cmt-time">${LC(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
  `,r||(n.addEventListener("click",i=>{i.target.closest(".fb-cmt-delete")||i.target.closest(".fb-cmt-resolve")||i.target.closest(".fb-cmt-edit")||(Ki(e.id),kC(e.id),Be.querySelectorAll(".fb-cmt-card").forEach(o=>o.classList.remove("fb-cmt-active")),n.classList.add("fb-cmt-active"))}),n.querySelector(".fb-cmt-resolve").addEventListener("click",i=>{i.stopPropagation(),Ds&&Ds(e.id,!t)})),n.querySelector(".fb-cmt-edit").addEventListener("click",i=>{i.stopPropagation(),aU(e,n)}),n.querySelector(".fb-cmt-delete").addEventListener("click",i=>{i.stopPropagation(),Fs&&Fs(e.id)}),n}function iU(e,r,t){pn();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let i=document.createElement("div");i.className="fb-reply-form",i.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!at()){let c=X.querySelector(".fb-name-input");c.focus(),c.style.outline="2px solid #ef4444",setTimeout(()=>c.style.outline="",2e3);return}let l=i.querySelector("textarea").value.trim();l&&(Bs&&Bs({parent_id:e,comment:l,commenter:at()}),i.remove(),t.style.display="")};i.querySelector(".fb-reply-submit").addEventListener("click",o);let u=i.querySelector("textarea");u.addEventListener("keydown",l=>{l.key==="Enter"&&(l.metaKey||l.ctrlKey)&&(l.preventDefault(),o())}),i.querySelector(".fb-reply-cancel").addEventListener("click",()=>{i.remove(),t.style.display=""}),r.insertBefore(i,t),u.focus()}function aU(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${tr(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let i=t.querySelector("textarea");i.focus(),i.setSelectionRange(i.value.length,i.value.length);let o=()=>{let u=i.value.trim();u&&Gs&&Gs(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),i.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function VC(e){let r=Be.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(Be.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function oU(){let e=document.createElement("style");e.textContent=`
    .fb-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: ${tU}px;
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
  `,document.head.appendChild(e)}var ot=null,Hi=null,zi=null,Y=[],Er=null,Ce=null,ye=new Set,Ge=new Map;function uU(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null,apiKey:e?.dataset.apiKey||null};Hs(r.apiUrl),r.apiKey&&zs(r.apiKey);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{ot=document.querySelector(r.contentSelector)||document.body,Hi=r.documentUri||window.location.origin+window.location.pathname,zi=r.documentId||null,HC({onSubmit:pU,onDelete:hU,onResolve:vU,onReply:dU,onEdit:mU}),EC(i=>{pn(),VC(i),Ki(i)}),lU(),await t(),sU(),NC(r,()=>Y)}catch(i){console.error("[feedback-layer] Boot failed:",i)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function sU(){try{Y=await Vs(Hi,zi),ye=await cU(Y),nr(Y,ye,Ge)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),Cr(`Failed to load comments: ${e.message}`,"error")}}async function cU(e){IC();let r=new Set;Ge.clear();for(let t of e)if(!t.parent)try{let n=await Ui({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ot);n&&t.status!=="closed"?(Wi(n,t.id),r.add(t.id),Ge.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),Ge.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function lU(){document.addEventListener("mouseup",YC),document.addEventListener("keyup",YC)}function YC(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){vn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){vn();return}if(!ot.contains(r.commonAncestorContainer)){vn();return}fU(r)},10)}function fU(e){vn();let r=e.getBoundingClientRect();Ce=document.createElement("button"),Ce.className="fb-annotate-tooltip",Ce.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',Ce.style.top=window.scrollY+r.top-36+"px",Ce.style.left=window.scrollX+r.left+r.width/2-40+"px",Ce.addEventListener("mousedown",async t=>{t.preventDefault(),t.stopPropagation();let n=window.getSelection();if(!n||n.isCollapsed)return;let i=n.getRangeAt(0);try{Er=await TC(i,ot),zC(Er.exact)}catch(o){console.error("[feedback-layer] Failed to create selector:",o)}vn()}),document.body.appendChild(Ce)}function vn(){Ce&&(Ce.remove(),Ce=null)}async function pU({comment:e,commenter:r}){if(Er){try{let t=await Yi({uri:Hi,document:zi,quote:Er.exact,prefix:Er.prefix,suffix:Er.suffix,body:e,author:r});Y.push(t);let n=await Ui({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ot);n&&(Wi(n,t.id),ye.add(t.id)),nr(Y,ye,Ge),window.getSelection().removeAllRanges()}catch(t){console.error("[feedback-layer] Failed to create comment:",t),Cr(`Failed to save comment: ${t.message}`,"error")}Er=null}}async function vU(e,r){try{let n=await Js(e,r?"closed":"open"),i=Y.findIndex(o=>o.id===e);if(i!==-1&&(Y[i]=n),r)$s(e);else{let o=n,u=await Ui({exact:o.quote,prefix:o.prefix,suffix:o.suffix},ot);u?(Wi(u,o.id),ye.add(o.id)):ye.delete(o.id)}nr(Y,ye,Ge)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),Cr(`Failed to update comment: ${t.message}`,"error")}}async function dU({parent_id:e,comment:r,commenter:t}){try{let n=await Yi({uri:Hi,document:zi,body:r,author:t,parent:e});Y.push(n),nr(Y,ye,Ge)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),Cr(`Failed to save reply: ${n.message}`,"error")}}async function mU(e,r){try{let t=await Ys(e,{body:r}),n=Y.findIndex(i=>i.id===e);n!==-1&&(Y[n]=t),nr(Y,ye,Ge)}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),Cr(`Failed to update comment: ${t.message}`,"error")}}async function hU(e){try{await Qs(e),$s(e),ye.delete(e),Y=Y.filter(r=>r.id!==e&&r.parent!==e),nr(Y,ye,Ge)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),Cr(`Failed to delete comment: ${r.message}`,"error")}}try{uU()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
