var FeedbackLayer=(()=>{var JE=Object.create;var Ws=Object.defineProperty;var QE=Object.getOwnPropertyDescriptor;var XE=Object.getOwnPropertyNames;var ZE=Object.getPrototypeOf,eC=Object.prototype.hasOwnProperty;var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var rC=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of XE(r))!eC.call(e,i)&&i!==t&&Ws(e,i,{get:()=>r[i],enumerable:!(n=QE(r,i))||n.enumerable});return e};var g=(e,r,t)=>(t=e!=null?JE(ZE(e)):{},rC(r||!e||!e.__esModule?Ws(t,"default",{value:e,enumerable:!0}):t,e));var P=a((bU,Qs)=>{"use strict";Qs.exports=function(e){try{return!!e()}catch{return!0}}});var _r=a((qU,Xs)=>{"use strict";var tC=P();Xs.exports=!tC(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var A=a((xU,rc)=>{"use strict";var Zs=_r(),ec=Function.prototype,zi=ec.call,nC=Zs&&ec.bind.bind(zi,zi);rc.exports=Zs?nC:function(e){return function(){return zi.apply(e,arguments)}}});var G=a((SU,tc)=>{"use strict";var iC=A();tc.exports=iC({}.isPrototypeOf)});var _=a((Yi,nc)=>{"use strict";var st=function(e){return e&&e.Math===Math&&e};nc.exports=st(typeof globalThis=="object"&&globalThis)||st(typeof window=="object"&&window)||st(typeof self=="object"&&self)||st(typeof global=="object"&&global)||st(typeof Yi=="object"&&Yi)||function(){return this}()||Function("return this")()});var Rr=a((wU,uc)=>{"use strict";var aC=_r(),oc=Function.prototype,ic=oc.apply,ac=oc.call;uc.exports=typeof Reflect=="object"&&Reflect.apply||(aC?ac.bind(ic):function(){return ac.apply(ic,arguments)})});var qe=a((TU,cc)=>{"use strict";var sc=A(),oC=sc({}.toString),uC=sc("".slice);cc.exports=function(e){return uC(oC(e),8,-1)}});var ct=a((OU,lc)=>{"use strict";var sC=qe(),cC=A();lc.exports=function(e){if(sC(e)==="Function")return cC(e)}});var N=a((EU,fc)=>{"use strict";var Ji=typeof document=="object"&&document.all;fc.exports=typeof Ji>"u"&&Ji!==void 0?function(e){return typeof e=="function"||e===Ji}:function(e){return typeof e=="function"}});var U=a((CU,pc)=>{"use strict";var lC=P();pc.exports=!lC(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var D=a((IU,vc)=>{"use strict";var fC=_r(),dn=Function.prototype.call;vc.exports=fC?dn.bind(dn):function(){return dn.apply(dn,arguments)}});var Qi=a(hc=>{"use strict";var dc={}.propertyIsEnumerable,mc=Object.getOwnPropertyDescriptor,pC=mc&&!dc.call({1:2},1);hc.f=pC?function(r){var t=mc(this,r);return!!t&&t.enumerable}:dc});var He=a((PU,yc)=>{"use strict";yc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var mn=a((_U,gc)=>{"use strict";var vC=A(),dC=P(),mC=qe(),Xi=Object,hC=vC("".split);gc.exports=dC(function(){return!Xi("z").propertyIsEnumerable(0)})?function(e){return mC(e)==="String"?hC(e,""):Xi(e)}:Xi});var or=a((RU,bc)=>{"use strict";bc.exports=function(e){return e==null}});var ur=a((AU,qc)=>{"use strict";var yC=or(),gC=TypeError;qc.exports=function(e){if(yC(e))throw new gC("Can't call method on "+e);return e}});var Ce=a((NU,xc)=>{"use strict";var bC=mn(),qC=ur();xc.exports=function(e){return bC(qC(e))}});var $=a((MU,Sc)=>{"use strict";var xC=N();Sc.exports=function(e){return typeof e=="object"?e!==null:xC(e)}});var z=a((jU,wc)=>{"use strict";wc.exports={}});var W=a(($U,Oc)=>{"use strict";var Zi=z(),ea=_(),SC=N(),Tc=function(e){return SC(e)?e:void 0};Oc.exports=function(e,r){return arguments.length<2?Tc(Zi[e])||Tc(ea[e]):Zi[e]&&Zi[e][r]||ea[e]&&ea[e][r]}});var Ar=a((LU,Ic)=>{"use strict";var wC=_(),Ec=wC.navigator,Cc=Ec&&Ec.userAgent;Ic.exports=Cc?String(Cc):""});var Nr=a((FU,Nc)=>{"use strict";var Ac=_(),ra=Ar(),kc=Ac.process,Pc=Ac.Deno,_c=kc&&kc.versions||Pc&&Pc.version,Rc=_c&&_c.v8,de,hn;Rc&&(de=Rc.split("."),hn=de[0]>0&&de[0]<4?1:+(de[0]+de[1]));!hn&&ra&&(de=ra.match(/Edge\/(\d+)/),(!de||de[1]>=74)&&(de=ra.match(/Chrome\/(\d+)/),de&&(hn=+de[1])));Nc.exports=hn});var sr=a((DU,jc)=>{"use strict";var Mc=Nr(),TC=P(),OC=_(),EC=OC.String;jc.exports=!!Object.getOwnPropertySymbols&&!TC(function(){var e=Symbol("symbol detection");return!EC(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Mc&&Mc<41})});var ta=a((BU,$c)=>{"use strict";var CC=sr();$c.exports=CC&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Mr=a((GU,Lc)=>{"use strict";var IC=W(),kC=N(),PC=G(),_C=ta(),RC=Object;Lc.exports=_C?function(e){return typeof e=="symbol"}:function(e){var r=IC("Symbol");return kC(r)&&PC(r.prototype,RC(e))}});var Ke=a((UU,Fc)=>{"use strict";var AC=String;Fc.exports=function(e){try{return AC(e)}catch{return"Object"}}});var F=a((WU,Dc)=>{"use strict";var NC=N(),MC=Ke(),jC=TypeError;Dc.exports=function(e){if(NC(e))return e;throw new jC(MC(e)+" is not a function")}});var yn=a((HU,Bc)=>{"use strict";var $C=F(),LC=or();Bc.exports=function(e,r){var t=e[r];return LC(t)?void 0:$C(t)}});var Uc=a((KU,Gc)=>{"use strict";var na=D(),ia=N(),aa=$(),FC=TypeError;Gc.exports=function(e,r){var t,n;if(r==="string"&&ia(t=e.toString)&&!aa(n=na(t,e))||ia(t=e.valueOf)&&!aa(n=na(t,e))||r!=="string"&&ia(t=e.toString)&&!aa(n=na(t,e)))return n;throw new FC("Can't convert object to primitive value")}});var Z=a((VU,Wc)=>{"use strict";Wc.exports=!0});var Vc=a((zU,Kc)=>{"use strict";var Hc=_(),DC=Object.defineProperty;Kc.exports=function(e,r){try{DC(Hc,e,{value:r,configurable:!0,writable:!0})}catch{Hc[e]=r}return r}});var lt=a((YU,Jc)=>{"use strict";var BC=Z(),GC=_(),UC=Vc(),zc="__core-js_shared__",Yc=Jc.exports=GC[zc]||UC(zc,{});(Yc.versions||(Yc.versions=[])).push({version:"3.48.0",mode:BC?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var cr=a((JU,Xc)=>{"use strict";var Qc=lt();Xc.exports=function(e,r){return Qc[e]||(Qc[e]=r||{})}});var re=a((QU,Zc)=>{"use strict";var WC=ur(),HC=Object;Zc.exports=function(e){return HC(WC(e))}});var H=a((XU,el)=>{"use strict";var KC=A(),VC=re(),zC=KC({}.hasOwnProperty);el.exports=Object.hasOwn||function(r,t){return zC(VC(r),t)}});var jr=a((ZU,rl)=>{"use strict";var YC=A(),JC=0,QC=Math.random(),XC=YC(1.1.toString);rl.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+XC(++JC+QC,36)}});var R=a((e5,nl)=>{"use strict";var ZC=_(),e0=cr(),tl=H(),r0=jr(),t0=sr(),n0=ta(),$r=ZC.Symbol,oa=e0("wks"),i0=n0?$r.for||$r:$r&&$r.withoutSetter||r0;nl.exports=function(e){return tl(oa,e)||(oa[e]=t0&&tl($r,e)?$r[e]:i0("Symbol."+e)),oa[e]}});var ul=a((r5,ol)=>{"use strict";var a0=D(),il=$(),al=Mr(),o0=yn(),u0=Uc(),s0=R(),c0=TypeError,l0=s0("toPrimitive");ol.exports=function(e,r){if(!il(e)||al(e))return e;var t=o0(e,l0),n;if(t){if(r===void 0&&(r="default"),n=a0(t,e,r),!il(n)||al(n))return n;throw new c0("Can't convert object to primitive value")}return r===void 0&&(r="number"),u0(e,r)}});var gn=a((t5,sl)=>{"use strict";var f0=ul(),p0=Mr();sl.exports=function(e){var r=f0(e,"string");return p0(r)?r:r+""}});var bn=a((n5,ll)=>{"use strict";var v0=_(),cl=$(),ua=v0.document,d0=cl(ua)&&cl(ua.createElement);ll.exports=function(e){return d0?ua.createElement(e):{}}});var sa=a((i5,fl)=>{"use strict";var m0=U(),h0=P(),y0=bn();fl.exports=!m0&&!h0(function(){return Object.defineProperty(y0("div"),"a",{get:function(){return 7}}).a!==7})});var ft=a(vl=>{"use strict";var g0=U(),b0=D(),q0=Qi(),x0=He(),S0=Ce(),w0=gn(),T0=H(),O0=sa(),pl=Object.getOwnPropertyDescriptor;vl.f=g0?pl:function(r,t){if(r=S0(r),t=w0(t),O0)try{return pl(r,t)}catch{}if(T0(r,t))return x0(!b0(q0.f,r,t),r[t])}});var ca=a((o5,dl)=>{"use strict";var E0=P(),C0=N(),I0=/#|\.prototype\./,pt=function(e,r){var t=P0[k0(e)];return t===R0?!0:t===_0?!1:C0(r)?E0(r):!!r},k0=pt.normalize=function(e){return String(e).replace(I0,".").toLowerCase()},P0=pt.data={},_0=pt.NATIVE="N",R0=pt.POLYFILL="P";dl.exports=pt});var Y=a((u5,hl)=>{"use strict";var ml=ct(),A0=F(),N0=_r(),M0=ml(ml.bind);hl.exports=function(e,r){return A0(e),r===void 0?e:N0?M0(e,r):function(){return e.apply(r,arguments)}}});var la=a((s5,yl)=>{"use strict";var j0=U(),$0=P();yl.exports=j0&&$0(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var X=a((c5,gl)=>{"use strict";var L0=$(),F0=String,D0=TypeError;gl.exports=function(e){if(L0(e))return e;throw new D0(F0(e)+" is not an object")}});var te=a(ql=>{"use strict";var B0=U(),G0=sa(),U0=la(),qn=X(),bl=gn(),W0=TypeError,fa=Object.defineProperty,H0=Object.getOwnPropertyDescriptor,pa="enumerable",va="configurable",da="writable";ql.f=B0?U0?function(r,t,n){if(qn(r),t=bl(t),qn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&da in n&&!n[da]){var i=H0(r,t);i&&i[da]&&(r[t]=n.value,n={configurable:va in n?n[va]:i[va],enumerable:pa in n?n[pa]:i[pa],writable:!1})}return fa(r,t,n)}:fa:function(r,t,n){if(qn(r),t=bl(t),qn(n),G0)try{return fa(r,t,n)}catch{}if("get"in n||"set"in n)throw new W0("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var xe=a((f5,xl)=>{"use strict";var K0=U(),V0=te(),z0=He();xl.exports=K0?function(e,r,t){return V0.f(e,r,z0(1,t))}:function(e,r,t){return e[r]=t,e}});var x=a((p5,wl)=>{"use strict";var vt=_(),Y0=Rr(),J0=ct(),Q0=N(),X0=ft().f,Z0=ca(),Lr=z(),eI=Y(),Fr=xe(),Sl=H();lt();var rI=function(e){var r=function(t,n,i){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return Y0(e,this,arguments)};return r.prototype=e.prototype,r};wl.exports=function(e,r){var t=e.target,n=e.global,i=e.stat,o=e.proto,u=n?vt:i?vt[t]:vt[t]&&vt[t].prototype,l=n?Lr:Lr[t]||Fr(Lr,t,{})[t],c=l.prototype,s,f,v,p,d,m,h,y,q;for(p in r)s=Z0(n?p:t+(i?".":"#")+p,e.forced),f=!s&&u&&Sl(u,p),m=l[p],f&&(e.dontCallGetSet?(q=X0(u,p),h=q&&q.value):h=u[p]),d=f&&h?h:r[p],!(!s&&!o&&typeof m==typeof d)&&(e.bind&&f?y=eI(d,vt):e.wrap&&f?y=rI(d):o&&Q0(d)?y=J0(d):y=d,(e.sham||d&&d.sham||m&&m.sham)&&Fr(y,"sham",!0),Fr(l,p,y),o&&(v=t+"Prototype",Sl(Lr,v)||Fr(Lr,v,{}),Fr(Lr[v],p,d),e.real&&c&&(s||!c[p])&&Fr(c,p,d)))}});var Ie=a((v5,Tl)=>{"use strict";var tI=qe();Tl.exports=Array.isArray||function(r){return tI(r)==="Array"}});var xn=a((d5,El)=>{"use strict";var nI=R(),iI=nI("toStringTag"),Ol={};Ol[iI]="z";El.exports=String(Ol)==="[object z]"});var dt=a((m5,Cl)=>{"use strict";var aI=xn(),oI=N(),Sn=qe(),uI=R(),sI=uI("toStringTag"),cI=Object,lI=Sn(function(){return arguments}())==="Arguments",fI=function(e,r){try{return e[r]}catch{}};Cl.exports=aI?Sn:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=fI(r=cI(e),sI))=="string"?t:lI?Sn(r):(n=Sn(r))==="Object"&&oI(r.callee)?"Arguments":n}});var ha=a((h5,Il)=>{"use strict";var pI=A(),vI=N(),ma=lt(),dI=pI(Function.toString);vI(ma.inspectSource)||(ma.inspectSource=function(e){return dI(e)});Il.exports=ma.inspectSource});var ht=a((y5,Al)=>{"use strict";var mI=A(),hI=P(),kl=N(),yI=dt(),gI=W(),bI=ha(),Pl=function(){},_l=gI("Reflect","construct"),ya=/^\s*(?:class|function)\b/,qI=mI(ya.exec),xI=!ya.test(Pl),mt=function(r){if(!kl(r))return!1;try{return _l(Pl,[],r),!0}catch{return!1}},Rl=function(r){if(!kl(r))return!1;switch(yI(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return xI||!!qI(ya,bI(r))}catch{return!0}};Rl.sham=!0;Al.exports=!_l||hI(function(){var e;return mt(mt.call)||!mt(Object)||!mt(function(){e=!0})||e})?Rl:mt});var Ml=a((g5,Nl)=>{"use strict";var SI=Math.ceil,wI=Math.floor;Nl.exports=Math.trunc||function(r){var t=+r;return(t>0?wI:SI)(t)}});var wn=a((b5,jl)=>{"use strict";var TI=Ml();jl.exports=function(e){var r=+e;return r!==r||r===0?0:TI(r)}});var ga=a((q5,$l)=>{"use strict";var OI=wn(),EI=Math.max,CI=Math.min;$l.exports=function(e,r){var t=OI(e);return t<0?EI(t+r,0):CI(t,r)}});var ba=a((x5,Ll)=>{"use strict";var II=wn(),kI=Math.min;Ll.exports=function(e){var r=II(e);return r>0?kI(r,9007199254740991):0}});var le=a((S5,Fl)=>{"use strict";var PI=ba();Fl.exports=function(e){return PI(e.length)}});var Dr=a((w5,Dl)=>{"use strict";var _I=U(),RI=te(),AI=He();Dl.exports=function(e,r,t){_I?RI.f(e,r,AI(0,t)):e[r]=t}});var Br=a((T5,Bl)=>{"use strict";var NI=U(),MI=Ie(),jI=TypeError,$I=Object.getOwnPropertyDescriptor,LI=NI&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();Bl.exports=LI?function(e,r){if(MI(e)&&!$I(e,"length").writable)throw new jI("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var yt=a((O5,Gl)=>{"use strict";var FI=P(),DI=R(),BI=Nr(),GI=DI("species");Gl.exports=function(e){return BI>=51||!FI(function(){var r=[],t=r.constructor={};return t[GI]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var lr=a((E5,Ul)=>{"use strict";var UI=A();Ul.exports=UI([].slice)});var Kl=a(()=>{"use strict";var WI=x(),Wl=Ie(),HI=ht(),KI=$(),Hl=ga(),VI=le(),zI=Ce(),YI=Dr(),JI=Br(),QI=R(),XI=yt(),ZI=lr(),ek=XI("slice"),rk=QI("species"),qa=Array,tk=Math.max;WI({target:"Array",proto:!0,forced:!ek},{slice:function(r,t){var n=zI(this),i=VI(n),o=Hl(r,i),u=Hl(t===void 0?i:t,i),l,c,s;if(Wl(n)&&(l=n.constructor,HI(l)&&(l===qa||Wl(l.prototype))?l=void 0:KI(l)&&(l=l[rk],l===null&&(l=void 0)),l===qa||l===void 0))return ZI(n,o,u);for(c=new(l===void 0?qa:l)(tk(u-o,0)),s=0;o<u;o++,s++)o in n&&YI(c,s,n[o]);return JI(c,s),c}})});var oe=a((k5,Vl)=>{"use strict";var nk=_(),ik=z();Vl.exports=function(e,r){var t=ik[e+"Prototype"],n=t&&t[r];if(n)return n;var i=nk[e],o=i&&i.prototype;return o&&o[r]}});var Yl=a((P5,zl)=>{"use strict";Kl();var ak=oe();zl.exports=ak("Array","slice")});var Ql=a((_5,Jl)=>{"use strict";var ok=G(),uk=Yl(),xa=Array.prototype;Jl.exports=function(e){var r=e.slice;return e===xa||ok(xa,e)&&r===xa.slice?uk:r}});var Zl=a((R5,Xl)=>{"use strict";var sk=Ql();Xl.exports=sk});var rf=a((A5,ef)=>{"use strict";var ck=Zl();ef.exports=ck});var nf=a((N5,tf)=>{"use strict";var lk=rf();tf.exports=lk});var Sa=a((M5,af)=>{"use strict";af.exports=nf()});var Gr=a((j5,of)=>{of.exports=Sa()});var Ve=a(($5,uf)=>{"use strict";var fk=dt(),pk=String;uf.exports=function(e){if(fk(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return pk(e)}});var ff=a((L5,lf)=>{"use strict";var wa=A(),vk=wn(),dk=Ve(),mk=ur(),hk=wa("".charAt),sf=wa("".charCodeAt),yk=wa("".slice),cf=function(e){return function(r,t){var n=dk(mk(r)),i=vk(t),o=n.length,u,l;return i<0||i>=o?e?"":void 0:(u=sf(n,i),u<55296||u>56319||i+1===o||(l=sf(n,i+1))<56320||l>57343?e?hk(n,i):u:e?yk(n,i,i+2):(u-55296<<10)+(l-56320)+65536)}};lf.exports={codeAt:cf(!1),charAt:cf(!0)}});var df=a((F5,vf)=>{"use strict";var gk=_(),bk=N(),pf=gk.WeakMap;vf.exports=bk(pf)&&/native code/.test(String(pf))});var gt=a((D5,hf)=>{"use strict";var qk=cr(),xk=jr(),mf=qk("keys");hf.exports=function(e){return mf[e]||(mf[e]=xk(e))}});var Ur=a((B5,yf)=>{"use strict";yf.exports={}});var ze=a((G5,qf)=>{"use strict";var Sk=df(),bf=_(),wk=$(),Tk=xe(),Ta=H(),Oa=lt(),Ok=gt(),Ek=Ur(),gf="Object already initialized",Ea=bf.TypeError,Ck=bf.WeakMap,Tn,bt,On,Ik=function(e){return On(e)?bt(e):Tn(e,{})},kk=function(e){return function(r){var t;if(!wk(r)||(t=bt(r)).type!==e)throw new Ea("Incompatible receiver, "+e+" required");return t}};Sk||Oa.state?(me=Oa.state||(Oa.state=new Ck),me.get=me.get,me.has=me.has,me.set=me.set,Tn=function(e,r){if(me.has(e))throw new Ea(gf);return r.facade=e,me.set(e,r),r},bt=function(e){return me.get(e)||{}},On=function(e){return me.has(e)}):(fr=Ok("state"),Ek[fr]=!0,Tn=function(e,r){if(Ta(e,fr))throw new Ea(gf);return r.facade=e,Tk(e,fr,r),r},bt=function(e){return Ta(e,fr)?e[fr]:{}},On=function(e){return Ta(e,fr)});var me,fr;qf.exports={set:Tn,get:bt,has:On,enforce:Ik,getterFor:kk}});var wf=a((U5,Sf)=>{"use strict";var Ca=U(),Pk=H(),xf=Function.prototype,_k=Ca&&Object.getOwnPropertyDescriptor,Ia=Pk(xf,"name"),Rk=Ia&&function(){}.name==="something",Ak=Ia&&(!Ca||Ca&&_k(xf,"name").configurable);Sf.exports={EXISTS:Ia,PROPER:Rk,CONFIGURABLE:Ak}});var ka=a((W5,Of)=>{"use strict";var Nk=Ce(),Mk=ga(),jk=le(),Tf=function(e){return function(r,t,n){var i=Nk(r),o=jk(i);if(o===0)return!e&&-1;var u=Mk(n,o),l;if(e&&t!==t){for(;o>u;)if(l=i[u++],l!==l)return!0}else for(;o>u;u++)if((e||u in i)&&i[u]===t)return e||u||0;return!e&&-1}};Of.exports={includes:Tf(!0),indexOf:Tf(!1)}});var _a=a((H5,Cf)=>{"use strict";var $k=A(),Pa=H(),Lk=Ce(),Fk=ka().indexOf,Dk=Ur(),Ef=$k([].push);Cf.exports=function(e,r){var t=Lk(e),n=0,i=[],o;for(o in t)!Pa(Dk,o)&&Pa(t,o)&&Ef(i,o);for(;r.length>n;)Pa(t,o=r[n++])&&(~Fk(i,o)||Ef(i,o));return i}});var En=a((K5,If)=>{"use strict";If.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var Cn=a((V5,kf)=>{"use strict";var Bk=_a(),Gk=En();kf.exports=Object.keys||function(r){return Bk(r,Gk)}});var Ra=a(Pf=>{"use strict";var Uk=U(),Wk=la(),Hk=te(),Kk=X(),Vk=Ce(),zk=Cn();Pf.f=Uk&&!Wk?Object.defineProperties:function(r,t){Kk(r);for(var n=Vk(t),i=zk(t),o=i.length,u=0,l;o>u;)Hk.f(r,l=i[u++],n[l]);return r}});var Aa=a((Y5,_f)=>{"use strict";var Yk=W();_f.exports=Yk("document","documentElement")});var Ye=a((J5,Lf)=>{"use strict";var Jk=X(),Qk=Ra(),Rf=En(),Xk=Ur(),Zk=Aa(),e1=bn(),r1=gt(),Af=">",Nf="<",Ma="prototype",ja="script",jf=r1("IE_PROTO"),Na=function(){},$f=function(e){return Nf+ja+Af+e+Nf+"/"+ja+Af},Mf=function(e){e.write($f("")),e.close();var r=e.parentWindow.Object;return e=null,r},t1=function(){var e=e1("iframe"),r="java"+ja+":",t;return e.style.display="none",Zk.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write($f("document.F=Object")),t.close(),t.F},In,kn=function(){try{In=new ActiveXObject("htmlfile")}catch{}kn=typeof document<"u"?document.domain&&In?Mf(In):t1():Mf(In);for(var e=Rf.length;e--;)delete kn[Ma][Rf[e]];return kn()};Xk[jf]=!0;Lf.exports=Object.create||function(r,t){var n;return r!==null?(Na[Ma]=Jk(r),n=new Na,Na[Ma]=null,n[jf]=r):n=kn(),t===void 0?n:Qk.f(n,t)}});var $a=a((Q5,Ff)=>{"use strict";var n1=P();Ff.exports=!n1(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var qt=a((X5,Bf)=>{"use strict";var i1=H(),a1=N(),o1=re(),u1=gt(),s1=$a(),Df=u1("IE_PROTO"),La=Object,c1=La.prototype;Bf.exports=s1?La.getPrototypeOf:function(e){var r=o1(e);if(i1(r,Df))return r[Df];var t=r.constructor;return a1(t)&&r instanceof t?t.prototype:r instanceof La?c1:null}});var ke=a((Z5,Gf)=>{"use strict";var l1=xe();Gf.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:l1(e,r,t),e}});var Ga=a((e8,Hf)=>{"use strict";var f1=P(),p1=N(),v1=$(),d1=Ye(),Uf=qt(),m1=ke(),h1=R(),y1=Z(),Ba=h1("iterator"),Wf=!1,Pe,Fa,Da;[].keys&&(Da=[].keys(),"next"in Da?(Fa=Uf(Uf(Da)),Fa!==Object.prototype&&(Pe=Fa)):Wf=!0);var g1=!v1(Pe)||f1(function(){var e={};return Pe[Ba].call(e)!==e});g1?Pe={}:y1&&(Pe=d1(Pe));p1(Pe[Ba])||m1(Pe,Ba,function(){return this});Hf.exports={IteratorPrototype:Pe,BUGGY_SAFARI_ITERATORS:Wf}});var Vf=a((r8,Kf)=>{"use strict";var b1=xn(),q1=dt();Kf.exports=b1?{}.toString:function(){return"[object "+q1(this)+"]"}});var _e=a((t8,Yf)=>{"use strict";var x1=xn(),S1=te().f,w1=xe(),T1=H(),O1=Vf(),E1=R(),zf=E1("toStringTag");Yf.exports=function(e,r,t,n){var i=t?e:e&&e.prototype;i&&(T1(i,zf)||S1(i,zf,{configurable:!0,value:r}),n&&!x1&&w1(i,"toString",O1))}});var pr=a((n8,Jf)=>{"use strict";Jf.exports={}});var Xf=a((i8,Qf)=>{"use strict";var C1=Ga().IteratorPrototype,I1=Ye(),k1=He(),P1=_e(),_1=pr(),R1=function(){return this};Qf.exports=function(e,r,t,n){var i=r+" Iterator";return e.prototype=I1(C1,{next:k1(+!n,t)}),P1(e,i,!1,!0),_1[i]=R1,e}});var ep=a((a8,Zf)=>{"use strict";var A1=A(),N1=F();Zf.exports=function(e,r,t){try{return A1(N1(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var tp=a((o8,rp)=>{"use strict";var M1=$();rp.exports=function(e){return M1(e)||e===null}});var ip=a((u8,np)=>{"use strict";var j1=tp(),$1=String,L1=TypeError;np.exports=function(e){if(j1(e))return e;throw new L1("Can't set "+$1(e)+" as a prototype")}});var xt=a((s8,ap)=>{"use strict";var F1=ep(),D1=$(),B1=ur(),G1=ip();ap.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=F1(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(i,o){return B1(i),G1(o),D1(i)&&(e?t(i,o):i.__proto__=o),i}}():void 0)});var Rn=a((c8,mp)=>{"use strict";var U1=x(),W1=D(),Pn=Z(),vp=wf(),H1=N(),K1=Xf(),op=qt(),up=xt(),V1=_e(),z1=xe(),Ua=ke(),Y1=R(),sp=pr(),dp=Ga(),J1=vp.PROPER,Q1=vp.CONFIGURABLE,cp=dp.IteratorPrototype,_n=dp.BUGGY_SAFARI_ITERATORS,St=Y1("iterator"),lp="keys",wt="values",fp="entries",pp=function(){return this};mp.exports=function(e,r,t,n,i,o,u){K1(t,r,n);var l=function(q){if(q===i&&p)return p;if(!_n&&q&&q in f)return f[q];switch(q){case lp:return function(){return new t(this,q)};case wt:return function(){return new t(this,q)};case fp:return function(){return new t(this,q)}}return function(){return new t(this)}},c=r+" Iterator",s=!1,f=e.prototype,v=f[St]||f["@@iterator"]||i&&f[i],p=!_n&&v||l(i),d=r==="Array"&&f.entries||v,m,h,y;if(d&&(m=op(d.call(new e)),m!==Object.prototype&&m.next&&(!Pn&&op(m)!==cp&&(up?up(m,cp):H1(m[St])||Ua(m,St,pp)),V1(m,c,!0,!0),Pn&&(sp[c]=pp))),J1&&i===wt&&v&&v.name!==wt&&(!Pn&&Q1?z1(f,"name",wt):(s=!0,p=function(){return W1(v,this)})),i)if(h={values:l(wt),keys:o?p:l(lp),entries:l(fp)},u)for(y in h)(_n||s||!(y in f))&&Ua(f,y,h[y]);else U1({target:r,proto:!0,forced:_n||s},h);return(!Pn||u)&&f[St]!==p&&Ua(f,St,p,{name:i}),sp[r]=p,h}});var An=a((l8,hp)=>{"use strict";hp.exports=function(e,r){return{value:e,done:r}}});var vr=a(()=>{"use strict";var X1=ff().charAt,Z1=Ve(),gp=ze(),eP=Rn(),yp=An(),bp="String Iterator",rP=gp.set,tP=gp.getterFor(bp);eP(String,"String",function(e){rP(this,{type:bp,string:Z1(e),index:0})},function(){var r=tP(this),t=r.string,n=r.index,i;return n>=t.length?yp(void 0,!0):(i=X1(t,n),r.index+=i.length,yp(i,!1))})});var Wa=a((v8,xp)=>{"use strict";var nP=D(),qp=X(),iP=yn();xp.exports=function(e,r,t){var n,i;qp(e);try{if(n=iP(e,"return"),!n){if(r==="throw")throw t;return t}n=nP(n,e)}catch(o){i=!0,n=o}if(r==="throw")throw t;if(i)throw n;return qp(n),t}});var wp=a((d8,Sp)=>{"use strict";var aP=X(),oP=Wa();Sp.exports=function(e,r,t,n){try{return n?r(aP(t)[0],t[1]):r(t)}catch(i){oP(e,"throw",i)}}});var Ha=a((m8,Tp)=>{"use strict";var uP=R(),sP=pr(),cP=uP("iterator"),lP=Array.prototype;Tp.exports=function(e){return e!==void 0&&(sP.Array===e||lP[cP]===e)}});var Tt=a((h8,Ep)=>{"use strict";var fP=dt(),Op=yn(),pP=or(),vP=pr(),dP=R(),mP=dP("iterator");Ep.exports=function(e){if(!pP(e))return Op(e,mP)||Op(e,"@@iterator")||vP[fP(e)]}});var Nn=a((y8,Cp)=>{"use strict";var hP=D(),yP=F(),gP=X(),bP=Ke(),qP=Tt(),xP=TypeError;Cp.exports=function(e,r){var t=arguments.length<2?qP(e):r;if(yP(t))return gP(hP(t,e));throw new xP(bP(e)+" is not iterable")}});var _p=a((g8,Pp)=>{"use strict";var SP=Y(),wP=D(),TP=re(),OP=wp(),EP=Ha(),CP=ht(),IP=le(),Ip=Dr(),kP=Br(),PP=Nn(),_P=Tt(),kp=Array;Pp.exports=function(r){var t=TP(r),n=CP(this),i=arguments.length,o=i>1?arguments[1]:void 0,u=o!==void 0;u&&(o=SP(o,i>2?arguments[2]:void 0));var l=_P(t),c=0,s,f,v,p,d,m;if(l&&!(this===kp&&EP(l)))for(f=n?new this:[],p=PP(t,l),d=p.next;!(v=wP(d,p)).done;c++)m=u?OP(p,o,[v.value,c],!0):v.value,Ip(f,c,m);else for(s=IP(t),f=n?new this(s):kp(s);s>c;c++)m=u?o(t[c],c):t[c],Ip(f,c,m);return kP(f,c),f}});var Va=a((b8,Mp)=>{"use strict";var RP=R(),Ap=RP("iterator"),Np=!1;try{Rp=0,Ka={next:function(){return{done:!!Rp++}},return:function(){Np=!0}},Ka[Ap]=function(){return this},Array.from(Ka,function(){throw 2})}catch{}var Rp,Ka;Mp.exports=function(e,r){try{if(!r&&!Np)return!1}catch{return!1}var t=!1;try{var n={};n[Ap]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var jp=a(()=>{"use strict";var AP=x(),NP=_p(),MP=Va(),jP=!MP(function(e){Array.from(e)});AP({target:"Array",stat:!0,forced:jP},{from:NP})});var Lp=a((S8,$p)=>{"use strict";vr();jp();var $P=z();$p.exports=$P.Array.from});var Dp=a((w8,Fp)=>{"use strict";var LP=Lp();Fp.exports=LP});var Gp=a((T8,Bp)=>{"use strict";var FP=Dp();Bp.exports=FP});var Wp=a((O8,Up)=>{"use strict";var DP=Gp();Up.exports=DP});var za=a((E8,Hp)=>{"use strict";Hp.exports=Wp()});var Mn=a((C8,Kp)=>{Kp.exports=za()});var Ot=a((I8,Vp)=>{"use strict";var BP=TypeError,GP=9007199254740991;Vp.exports=function(e){if(e>GP)throw BP("Maximum allowed index exceeded");return e}});var Qp=a((k8,Jp)=>{"use strict";var zp=Ie(),UP=ht(),WP=$(),HP=R(),KP=HP("species"),Yp=Array;Jp.exports=function(e){var r;return zp(e)&&(r=e.constructor,UP(r)&&(r===Yp||zp(r.prototype))?r=void 0:WP(r)&&(r=r[KP],r===null&&(r=void 0))),r===void 0?Yp:r}});var jn=a((P8,Xp)=>{"use strict";var VP=Qp();Xp.exports=function(e,r){return new(VP(e))(r===0?0:r)}});var Ya=a(()=>{"use strict";var zP=x(),YP=P(),JP=Ie(),QP=$(),XP=re(),ZP=le(),Zp=Ot(),ev=Dr(),e_=Br(),r_=jn(),t_=yt(),n_=R(),i_=Nr(),rv=n_("isConcatSpreadable"),a_=i_>=51||!YP(function(){var e=[];return e[rv]=!1,e.concat()[0]!==e}),o_=function(e){if(!QP(e))return!1;var r=e[rv];return r!==void 0?!!r:JP(e)},u_=!a_||!t_("concat");zP({target:"Array",proto:!0,arity:1,forced:u_},{concat:function(r){var t=XP(this),n=r_(t,0),i=0,o,u,l,c,s;for(o=-1,l=arguments.length;o<l;o++)if(s=o===-1?t:arguments[o],o_(s))for(c=ZP(s),Zp(i+c),u=0;u<c;u++,i++)u in s&&ev(n,i,s[u]);else Zp(i+1),ev(n,i++,s);return e_(n,i),n}})});var Et=a(()=>{});var Ct=a(tv=>{"use strict";var s_=_a(),c_=En(),l_=c_.concat("length","prototype");tv.f=Object.getOwnPropertyNames||function(r){return s_(r,l_)}});var Ja=a((j8,av)=>{"use strict";var f_=qe(),p_=Ce(),nv=Ct().f,v_=lr(),iv=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],d_=function(e){try{return nv(e)}catch{return v_(iv)}};av.exports.f=function(r){return iv&&f_(r)==="Window"?d_(r):nv(p_(r))}});var $n=a(ov=>{"use strict";ov.f=Object.getOwnPropertySymbols});var Ln=a((L8,uv)=>{"use strict";var m_=te();uv.exports=function(e,r,t){return m_.f(e,r,t)}});var Wr=a(sv=>{"use strict";var h_=R();sv.f=h_});var M=a((D8,lv)=>{"use strict";var cv=z(),y_=H(),g_=Wr(),b_=te().f;lv.exports=function(e){var r=cv.Symbol||(cv.Symbol={});y_(r,e)||b_(r,e,{value:g_.f(e)})}});var Qa=a((B8,fv)=>{"use strict";var q_=D(),x_=W(),S_=R(),w_=ke();fv.exports=function(){var e=x_("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=S_("toPrimitive");r&&!r[n]&&w_(r,n,function(i){return q_(t,this)},{arity:1})}});var It=a((G8,vv)=>{"use strict";var T_=Y(),O_=mn(),E_=re(),C_=le(),pv=jn(),Xa=Dr(),Je=function(e){var r=e===1,t=e===2,n=e===3,i=e===4,o=e===6,u=e===7,l=e===5||o;return function(c,s,f){for(var v=E_(c),p=O_(v),d=C_(p),m=T_(s,f),h=0,y=0,q=r?pv(c,d):t||u?pv(c,0):void 0,b,I;d>h;h++)if((l||h in p)&&(b=p[h],I=m(b,h,v),e))if(r)Xa(q,h,I);else if(I)switch(e){case 3:return!0;case 5:return b;case 6:return h;case 2:Xa(q,y++,b)}else switch(e){case 4:return!1;case 7:Xa(q,y++,b)}return o?-1:n||i?i:q}};vv.exports={forEach:Je(0),map:Je(1),filter:Je(2),some:Je(3),every:Je(4),find:Je(5),findIndex:Je(6),filterReject:Je(7)}});var Pv=a(()=>{"use strict";var Fn=x(),_t=_(),uo=D(),I_=A(),k_=Z(),Hr=U(),Kr=sr(),P_=P(),K=H(),__=G(),to=X(),Dn=Ce(),so=gn(),R_=Ve(),no=He(),Vr=Ye(),hv=Cn(),A_=Ct(),yv=Ja(),N_=$n(),gv=ft(),bv=te(),M_=Ra(),qv=Qi(),Za=ke(),j_=Ln(),co=cr(),$_=gt(),xv=Ur(),dv=jr(),L_=R(),F_=Wr(),D_=M(),B_=Qa(),G_=_e(),Sv=ze(),Bn=It().forEach,ne=$_("hidden"),Gn="Symbol",Pt="prototype",U_=Sv.set,mv=Sv.getterFor(Gn),fe=Object[Pt],dr=_t.Symbol,kt=dr&&dr[Pt],W_=_t.RangeError,H_=_t.TypeError,eo=_t.QObject,wv=gv.f,mr=bv.f,Tv=yv.f,K_=qv.f,Ov=I_([].push),Re=co("symbols"),Rt=co("op-symbols"),V_=co("wks"),io=!eo||!eo[Pt]||!eo[Pt].findChild,Ev=function(e,r,t){var n=wv(fe,r);n&&delete fe[r],mr(e,r,t),n&&e!==fe&&mr(fe,r,n)},ao=Hr&&P_(function(){return Vr(mr({},"a",{get:function(){return mr(this,"a",{value:7}).a}})).a!==7})?Ev:mr,ro=function(e,r){var t=Re[e]=Vr(kt);return U_(t,{type:Gn,tag:e,description:r}),Hr||(t.description=r),t},Un=function(r,t,n){r===fe&&Un(Rt,t,n),to(r);var i=so(t);return to(n),K(Re,i)?(n.enumerable?(K(r,ne)&&r[ne][i]&&(r[ne][i]=!1),n=Vr(n,{enumerable:no(0,!1)})):(K(r,ne)||mr(r,ne,no(1,Vr(null))),r[ne][i]=!0),ao(r,i,n)):mr(r,i,n)},lo=function(r,t){to(r);var n=Dn(t),i=hv(n).concat(kv(n));return Bn(i,function(o){(!Hr||uo(oo,n,o))&&Un(r,o,n[o])}),r},z_=function(r,t){return t===void 0?Vr(r):lo(Vr(r),t)},oo=function(r){var t=so(r),n=uo(K_,this,t);return this===fe&&K(Re,t)&&!K(Rt,t)?!1:n||!K(this,t)||!K(Re,t)||K(this,ne)&&this[ne][t]?n:!0},Cv=function(r,t){var n=Dn(r),i=so(t);if(!(n===fe&&K(Re,i)&&!K(Rt,i))){var o=wv(n,i);return o&&K(Re,i)&&!(K(n,ne)&&n[ne][i])&&(o.enumerable=!0),o}},Iv=function(r){var t=Tv(Dn(r)),n=[];return Bn(t,function(i){!K(Re,i)&&!K(xv,i)&&Ov(n,i)}),n},kv=function(e){var r=e===fe,t=Tv(r?Rt:Dn(e)),n=[];return Bn(t,function(i){K(Re,i)&&(!r||K(fe,i))&&Ov(n,Re[i])}),n};Kr||(dr=function(){if(__(kt,this))throw new H_("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:R_(arguments[0]),t=dv(r),n=function(i){var o=this===void 0?_t:this;o===fe&&uo(n,Rt,i),K(o,ne)&&K(o[ne],t)&&(o[ne][t]=!1);var u=no(1,i);try{ao(o,t,u)}catch(l){if(!(l instanceof W_))throw l;Ev(o,t,u)}};return Hr&&io&&ao(fe,t,{configurable:!0,set:n}),ro(t,r)},kt=dr[Pt],Za(kt,"toString",function(){return mv(this).tag}),Za(dr,"withoutSetter",function(e){return ro(dv(e),e)}),qv.f=oo,bv.f=Un,M_.f=lo,gv.f=Cv,A_.f=yv.f=Iv,N_.f=kv,F_.f=function(e){return ro(L_(e),e)},Hr&&(j_(kt,"description",{configurable:!0,get:function(){return mv(this).description}}),k_||Za(fe,"propertyIsEnumerable",oo,{unsafe:!0})));Fn({global:!0,constructor:!0,wrap:!0,forced:!Kr,sham:!Kr},{Symbol:dr});Bn(hv(V_),function(e){D_(e)});Fn({target:Gn,stat:!0,forced:!Kr},{useSetter:function(){io=!0},useSimple:function(){io=!1}});Fn({target:"Object",stat:!0,forced:!Kr,sham:!Hr},{create:z_,defineProperty:Un,defineProperties:lo,getOwnPropertyDescriptor:Cv});Fn({target:"Object",stat:!0,forced:!Kr},{getOwnPropertyNames:Iv});B_();G_(dr,Gn);xv[ne]=!0});var fo=a((H8,_v)=>{"use strict";var Y_=sr();_v.exports=Y_&&!!Symbol.for&&!!Symbol.keyFor});var Av=a(()=>{"use strict";var J_=x(),Q_=W(),X_=H(),Z_=Ve(),Rv=cr(),eR=fo(),po=Rv("string-to-symbol-registry"),rR=Rv("symbol-to-string-registry");J_({target:"Symbol",stat:!0,forced:!eR},{for:function(e){var r=Z_(e);if(X_(po,r))return po[r];var t=Q_("Symbol")(r);return po[r]=t,rR[t]=r,t}})});var Mv=a(()=>{"use strict";var tR=x(),nR=H(),iR=Mr(),aR=Ke(),oR=cr(),uR=fo(),Nv=oR("symbol-to-string-registry");tR({target:"Symbol",stat:!0,forced:!uR},{keyFor:function(r){if(!iR(r))throw new TypeError(aR(r)+" is not a symbol");if(nR(Nv,r))return Nv[r]}})});var $v=a((J8,jv)=>{"use strict";var sR=$(),cR=ze().get;jv.exports=function(r){if(!sR(r))return!1;var t=cR(r);return!!t&&t.type==="RawJSON"}});var Gv=a((Q8,Bv)=>{"use strict";var vo=A(),lR=H(),Wn=SyntaxError,fR=parseInt,pR=String.fromCharCode,vR=vo("".charAt),Lv=vo("".slice),Fv=vo(/./.exec),Dv={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},dR=/^[\da-f]{4}$/i,mR=/^[\u0000-\u001F]$/;Bv.exports=function(e,r){for(var t=!0,n="";r<e.length;){var i=vR(e,r);if(i==="\\"){var o=Lv(e,r,r+2);if(lR(Dv,o))n+=Dv[o],r+=2;else if(o==="\\u"){r+=2;var u=Lv(e,r,r+4);if(!Fv(dR,u))throw new Wn("Bad Unicode escape at: "+r);n+=pR(fR(u,16)),r+=4}else throw new Wn('Unknown escape sequence: "'+o+'"')}else if(i==='"'){t=!1,r++;break}else{if(Fv(mR,i))throw new Wn("Bad control character in string literal at: "+r);n+=i,r++}}if(t)throw new Wn("Unterminated string at: "+r);return{value:n,end:r}}});var Wv=a((X8,Uv)=>{"use strict";var hR=P();Uv.exports=!hR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var id=a(()=>{"use strict";var yR=x(),Xv=W(),gR=Rr(),Zv=D(),hr=A(),ed=P(),Hv=Ie(),Kn=N(),bR=$v(),Kv=Mr(),Vv=qe(),qR=Ve(),xR=lr(),SR=Gv(),wR=jr(),TR=sr(),mo=Wv(),rd=String,Qe=Xv("JSON","stringify"),Hn=hr(/./.exec),yo=hr("".charAt),OR=hr("".charCodeAt),ER=hr("".replace),ho=hr("".slice),go=hr([].push),CR=hr(1.1.toString),IR=/[\uD800-\uDFFF]/g,zv=/^[\uD800-\uDBFF]$/,Yv=/^[\uDC00-\uDFFF]$/,bo=wR(),Jv=bo.length,td=!TR||ed(function(){var e=Xv("Symbol")("stringify detection");return Qe([e])!=="[null]"||Qe({a:e})!=="{}"||Qe(Object(e))!=="{}"}),Qv=ed(function(){return Qe("\uDF06\uD834")!=='"\\udf06\\ud834"'||Qe("\uDEAD")!=='"\\udead"'}),kR=td?function(e,r){var t=xR(arguments),n=nd(r);if(!(!Kn(n)&&(e===void 0||Kv(e))))return t[1]=function(i,o){if(Kn(n)&&(o=Zv(n,this,rd(i),o)),!Kv(o))return o},gR(Qe,null,t)}:Qe,PR=function(e,r,t){var n=yo(t,r-1),i=yo(t,r+1);return Hn(zv,e)&&!Hn(Yv,i)||Hn(Yv,e)&&!Hn(zv,n)?"\\u"+CR(OR(e,0),16):e},nd=function(e){if(Kn(e))return e;if(Hv(e)){for(var r=e.length,t=[],n=0;n<r;n++){var i=e[n];typeof i=="string"?go(t,i):(typeof i=="number"||Vv(i)==="Number"||Vv(i)==="String")&&go(t,qR(i))}var o=t.length,u=!0;return function(l,c){if(u)return u=!1,c;if(Hv(this))return c;for(var s=0;s<o;s++)if(t[s]===l)return c}}};Qe&&yR({target:"JSON",stat:!0,arity:3,forced:td||Qv||!mo},{stringify:function(r,t,n){var i=nd(t),o=[],u=kR(r,function(d,m){var h=Kn(i)?Zv(i,this,rd(d),m):m;return!mo&&bR(h)?bo+(go(o,h.rawJSON)-1):h},n);if(typeof u!="string"||(Qv&&(u=ER(u,IR,PR)),mo))return u;for(var l="",c=u.length,s=0;s<c;s++){var f=yo(u,s);if(f==='"'){var v=SR(u,++s).end-1,p=ho(u,s,v);l+=ho(p,0,Jv)===bo?o[ho(p,Jv)]:'"'+p+'"',s=v}else l+=f}return l}})});var od=a(()=>{"use strict";var _R=x(),RR=sr(),AR=P(),ad=$n(),NR=re(),MR=!RR||AR(function(){ad.f(1)});_R({target:"Object",stat:!0,forced:MR},{getOwnPropertySymbols:function(r){var t=ad.f;return t?t(NR(r)):[]}})});var ud=a(()=>{"use strict";Pv();Av();Mv();id();od()});var qo=a(()=>{"use strict";var jR=M();jR("asyncDispose")});var xo=a(()=>{"use strict";var $R=M();$R("asyncIterator")});var sd=a(()=>{});var So=a(()=>{"use strict";var LR=M();LR("dispose")});var cd=a(()=>{"use strict";var FR=M();FR("hasInstance")});var ld=a(()=>{"use strict";var DR=M();DR("isConcatSpreadable")});var wo=a(()=>{"use strict";var BR=M();BR("iterator")});var fd=a(()=>{"use strict";var GR=M();GR("match")});var pd=a(()=>{"use strict";var UR=M();UR("matchAll")});var vd=a(()=>{"use strict";var WR=M();WR("replace")});var dd=a(()=>{"use strict";var HR=M();HR("search")});var md=a(()=>{"use strict";var KR=M();KR("species")});var hd=a(()=>{"use strict";var VR=M();VR("split")});var To=a(()=>{"use strict";var zR=M(),YR=Qa();zR("toPrimitive");YR()});var yd=a(()=>{"use strict";var JR=W(),QR=M(),XR=_e();QR("toStringTag");XR(JR("Symbol"),"Symbol")});var gd=a(()=>{"use strict";var ZR=M();ZR("unscopables")});var bd=a(()=>{"use strict";var eA=_(),rA=_e();rA(eA.JSON,"JSON",!0)});var qd=a(()=>{});var xd=a(()=>{});var wd=a((UW,Sd)=>{"use strict";Ya();Et();ud();qo();xo();sd();So();cd();ld();wo();fd();pd();vd();dd();md();hd();To();yd();gd();bd();qd();xd();var tA=z();Sd.exports=tA.Symbol});var Oo=a((WW,Td)=>{"use strict";Td.exports=function(){}});var yr=a((HW,kd)=>{"use strict";var nA=Ce(),Eo=Oo(),Od=pr(),Cd=ze(),iA=te().f,aA=Rn(),Vn=An(),oA=Z(),uA=U(),Id="Array Iterator",sA=Cd.set,cA=Cd.getterFor(Id);kd.exports=aA(Array,"Array",function(e,r){sA(this,{type:Id,target:nA(e),index:0,kind:r})},function(){var e=cA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,Vn(void 0,!0);switch(e.kind){case"keys":return Vn(t,!1);case"values":return Vn(r[t],!1)}return Vn([t,r[t]],!1)},"values");var Ed=Od.Arguments=Od.Array;Eo("keys");Eo("values");Eo("entries");if(!oA&&uA&&Ed.name!=="values")try{iA(Ed,"name",{value:"values"})}catch{}});var _d=a((KW,Pd)=>{"use strict";Pd.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var gr=a(()=>{"use strict";yr();var lA=_d(),fA=_(),pA=_e(),Rd=pr();for(zn in lA)pA(fA[zn],zn),Rd[zn]=Rd.Array;var zn});var Nd=a((YW,Ad)=>{"use strict";var vA=wd();gr();Ad.exports=vA});var $d=a(()=>{"use strict";var dA=R(),mA=te().f,Md=dA("metadata"),jd=Function.prototype;jd[Md]===void 0&&mA(jd,Md,{value:null})});var Ld=a(()=>{"use strict";qo()});var Fd=a(()=>{"use strict";So()});var Dd=a(()=>{"use strict";var hA=M();hA("metadata")});var Gd=a((i6,Bd)=>{"use strict";var yA=Nd();$d();Ld();Fd();Dd();Bd.exports=yA});var Io=a((a6,Ud)=>{"use strict";var gA=W(),bA=A(),Co=gA("Symbol"),qA=Co.keyFor,xA=bA(Co.prototype.valueOf);Ud.exports=Co.isRegisteredSymbol||function(r){try{return qA(xA(r))!==void 0}catch{return!1}}});var Wd=a(()=>{"use strict";var SA=x(),wA=Io();SA({target:"Symbol",stat:!0},{isRegisteredSymbol:wA})});var _o=a((s6,Jd)=>{"use strict";var TA=cr(),zd=W(),OA=A(),EA=Mr(),CA=R(),Jn=zd("Symbol"),Hd=Jn.isWellKnownSymbol,Yd=zd("Object","getOwnPropertyNames"),IA=OA(Jn.prototype.valueOf),Kd=TA("wks");for(Yn=0,ko=Yd(Jn),Vd=ko.length;Yn<Vd;Yn++)try{Po=ko[Yn],EA(Jn[Po])&&CA(Po)}catch{}var Po,Yn,ko,Vd;Jd.exports=function(r){if(Hd&&Hd(r))return!0;try{for(var t=IA(r),n=0,i=Yd(Kd),o=i.length;n<o;n++)if(Kd[i[n]]==t)return!0}catch{}return!1}});var Qd=a(()=>{"use strict";var kA=x(),PA=_o();kA({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:PA})});var Xd=a(()=>{"use strict";var _A=M();_A("customMatcher")});var Zd=a(()=>{"use strict";var RA=M();RA("observable")});var em=a(()=>{"use strict";var AA=x(),NA=Io();AA({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:NA})});var rm=a(()=>{"use strict";var MA=x(),jA=_o();MA({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:jA})});var tm=a(()=>{"use strict";var $A=M();$A("matcher")});var nm=a(()=>{"use strict";var LA=M();LA("metadataKey")});var im=a(()=>{"use strict";var FA=M();FA("patternMatch")});var am=a(()=>{"use strict";var DA=M();DA("replaceAll")});var um=a((C6,om)=>{"use strict";var BA=Gd();Wd();Qd();Xd();Zd();em();rm();tm();nm();im();am();om.exports=BA});var Se=a((I6,sm)=>{"use strict";sm.exports=um()});var Qn=a((k6,cm)=>{cm.exports=Se()});var fm=a((P6,lm)=>{"use strict";yr();vr();var GA=Tt();lm.exports=GA});var vm=a((_6,pm)=>{"use strict";var UA=fm();gr();pm.exports=UA});var mm=a((R6,dm)=>{"use strict";var WA=vm();dm.exports=WA});var ym=a((A6,hm)=>{"use strict";var HA=mm();hm.exports=HA});var Ro=a((N6,gm)=>{"use strict";gm.exports=ym()});var Xn=a((M6,bm)=>{bm.exports=Ro()});var xm=a((j6,qm)=>{"use strict";yr();vr();var KA=Nn();qm.exports=KA});var wm=a(($6,Sm)=>{"use strict";var VA=xm();gr();Sm.exports=VA});var Om=a((L6,Tm)=>{"use strict";var zA=wm();Tm.exports=zA});var Cm=a((F6,Em)=>{"use strict";var YA=Om();Em.exports=YA});var km=a((D6,Im)=>{"use strict";Im.exports=Cm()});var Zn=a((B6,Pm)=>{Pm.exports=km()});var Rm=a((G6,_m)=>{"use strict";var JA=W(),QA=A(),XA=Ct(),ZA=$n(),e2=X(),r2=QA([].concat);_m.exports=JA("Reflect","ownKeys")||function(r){var t=XA.f(e2(r)),n=ZA.f;return n?r2(t,n(r)):t}});var Mm=a((U6,Nm)=>{"use strict";var Am=H(),t2=Rm(),n2=ft(),i2=te();Nm.exports=function(e,r,t){for(var n=t2(r),i=i2.f,o=n2.f,u=0;u<n.length;u++){var l=n[u];!Am(e,l)&&!(t&&Am(t,l))&&i(e,l,o(r,l))}}});var $m=a((W6,jm)=>{"use strict";var a2=$(),o2=xe();jm.exports=function(e,r){a2(r)&&"cause"in r&&o2(e,"cause",r.cause)}});var Bm=a((H6,Dm)=>{"use strict";var u2=A(),Lm=Error,s2=u2("".replace),c2=function(e){return String(new Lm(e).stack)}("zxcasd"),Fm=/\n\s*at [^:]*:[^\n]*/,l2=Fm.test(c2);Dm.exports=function(e,r){if(l2&&typeof e=="string"&&!Lm.prepareStackTrace)for(;r--;)e=s2(e,Fm,"");return e}});var Um=a((K6,Gm)=>{"use strict";var f2=P(),p2=He();Gm.exports=!f2(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",p2(1,7)),e.stack!==7):!0})});var Km=a((V6,Hm)=>{"use strict";var v2=xe(),d2=Bm(),m2=Um(),Wm=Error.captureStackTrace;Hm.exports=function(e,r,t,n){m2&&(Wm?Wm(e,r):v2(e,"stack",d2(t,n)))}});var pe=a((z6,Jm)=>{"use strict";var h2=Y(),y2=D(),g2=X(),b2=Ke(),q2=Ha(),x2=le(),Vm=G(),S2=Nn(),w2=Tt(),zm=Wa(),T2=TypeError,ei=function(e,r){this.stopped=e,this.result=r},Ym=ei.prototype;Jm.exports=function(e,r,t){var n=t&&t.that,i=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),l=!!(t&&t.INTERRUPTED),c=h2(r,n),s,f,v,p,d,m,h,y=function(b){return s&&zm(s,"normal"),new ei(!0,b)},q=function(b){return i?(g2(b),l?c(b[0],b[1],y):c(b[0],b[1])):l?c(b,y):c(b)};if(o)s=e.iterator;else if(u)s=e;else{if(f=w2(e),!f)throw new T2(b2(e)+" is not iterable");if(q2(f)){for(v=0,p=x2(e);p>v;v++)if(d=q(e[v]),d&&Vm(Ym,d))return d;return new ei(!1)}s=S2(e,f)}for(m=o?e.next:s.next;!(h=y2(m,s)).done;){try{d=q(h.value)}catch(b){zm(s,"throw",b)}if(typeof d=="object"&&d&&Vm(Ym,d))return d}return new ei(!1)}});var Xm=a((Y6,Qm)=>{"use strict";var O2=Ve();Qm.exports=function(e,r){return e===void 0?arguments.length<2?"":r:O2(e)}});var eh=a(()=>{"use strict";var E2=x(),C2=G(),I2=qt(),ri=xt(),k2=Mm(),Zm=Ye(),Ao=xe(),No=He(),P2=$m(),_2=Km(),R2=pe(),A2=Xm(),N2=R(),M2=N2("toStringTag"),ti=Error,j2=[].push,zr=function(r,t){var n=C2(Mo,this),i;ri?i=ri(new ti,n?I2(this):Mo):(i=n?this:Zm(Mo),Ao(i,M2,"Error")),t!==void 0&&Ao(i,"message",A2(t)),_2(i,zr,i.stack,1),arguments.length>2&&P2(i,arguments[2]);var o=[];return R2(r,j2,{that:o}),Ao(i,"errors",o),i};ri?ri(zr,ti):k2(zr,ti,{name:!0});var Mo=zr.prototype=Zm(ti.prototype,{constructor:No(1,zr),message:No(1,""),name:No(1,"AggregateError")});E2({global:!0,constructor:!0,arity:2},{AggregateError:zr})});var jo=a(()=>{"use strict";eh()});var $o=a((eH,rh)=>{"use strict";var At=_(),$2=Ar(),L2=qe(),ni=function(e){return $2.slice(0,e.length)===e};rh.exports=function(){return ni("Bun/")?"BUN":ni("Cloudflare-Workers")?"CLOUDFLARE":ni("Deno/")?"DENO":ni("Node.js/")?"NODE":At.Bun&&typeof Bun.version=="string"?"BUN":At.Deno&&typeof Deno.version=="object"?"DENO":L2(At.process)==="process"?"NODE":At.window&&At.document?"BROWSER":"REST"}()});var Nt=a((rH,th)=>{"use strict";var F2=$o();th.exports=F2==="NODE"});var Lo=a((tH,ih)=>{"use strict";var D2=W(),B2=Ln(),G2=R(),U2=U(),nh=G2("species");ih.exports=function(e){var r=D2(e);U2&&r&&!r[nh]&&B2(r,nh,{configurable:!0,get:function(){return this}})}});var ii=a((nH,ah)=>{"use strict";var W2=G(),H2=TypeError;ah.exports=function(e,r){if(W2(r,e))return e;throw new H2("Incorrect invocation")}});var Fo=a((iH,oh)=>{"use strict";var K2=ht(),V2=Ke(),z2=TypeError;oh.exports=function(e){if(K2(e))return e;throw new z2(V2(e)+" is not a constructor")}});var Do=a((aH,sh)=>{"use strict";var uh=X(),Y2=Fo(),J2=or(),Q2=R(),X2=Q2("species");sh.exports=function(e,r){var t=uh(e).constructor,n;return t===void 0||J2(n=uh(t)[X2])?r:Y2(n)}});var lh=a((oH,ch)=>{"use strict";var Z2=TypeError;ch.exports=function(e,r){if(e<r)throw new Z2("Not enough arguments");return e}});var Bo=a((uH,fh)=>{"use strict";var eN=Ar();fh.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(eN)});var Jo=a((sH,qh)=>{"use strict";var ue=_(),rN=Rr(),tN=Y(),ph=N(),nN=H(),bh=P(),vh=Aa(),iN=lr(),dh=bn(),aN=lh(),oN=Bo(),uN=Nt(),Vo=ue.setImmediate,zo=ue.clearImmediate,sN=ue.process,Go=ue.Dispatch,cN=ue.Function,mh=ue.MessageChannel,lN=ue.String,Uo=0,Mt={},hh="onreadystatechange",jt,br,Wo,Ho;bh(function(){jt=ue.location});var Yo=function(e){if(nN(Mt,e)){var r=Mt[e];delete Mt[e],r()}},Ko=function(e){return function(){Yo(e)}},yh=function(e){Yo(e.data)},gh=function(e){ue.postMessage(lN(e),jt.protocol+"//"+jt.host)};(!Vo||!zo)&&(Vo=function(r){aN(arguments.length,1);var t=ph(r)?r:cN(r),n=iN(arguments,1);return Mt[++Uo]=function(){rN(t,void 0,n)},br(Uo),Uo},zo=function(r){delete Mt[r]},uN?br=function(e){sN.nextTick(Ko(e))}:Go&&Go.now?br=function(e){Go.now(Ko(e))}:mh&&!oN?(Wo=new mh,Ho=Wo.port2,Wo.port1.onmessage=yh,br=tN(Ho.postMessage,Ho)):ue.addEventListener&&ph(ue.postMessage)&&!ue.importScripts&&jt&&jt.protocol!=="file:"&&!bh(gh)?(br=gh,ue.addEventListener("message",yh,!1)):hh in dh("script")?br=function(e){vh.appendChild(dh("script"))[hh]=function(){vh.removeChild(this),Yo(e)}}:br=function(e){setTimeout(Ko(e),0)});qh.exports={set:Vo,clear:zo}});var wh=a((cH,Sh)=>{"use strict";var xh=_(),fN=U(),pN=Object.getOwnPropertyDescriptor;Sh.exports=function(e){if(!fN)return xh[e];var r=pN(xh,e);return r&&r.value}});var Qo=a((lH,Oh)=>{"use strict";var Th=function(){this.head=null,this.tail=null};Th.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Oh.exports=Th});var Ch=a((fH,Eh)=>{"use strict";var vN=Ar();Eh.exports=/ipad|iphone|ipod/i.test(vN)&&typeof Pebble<"u"});var kh=a((pH,Ih)=>{"use strict";var dN=Ar();Ih.exports=/web0s(?!.*chrome)/i.test(dN)});var jh=a((vH,Mh)=>{"use strict";var Jr=_(),mN=wh(),Ph=Y(),Xo=Jo().set,hN=Qo(),yN=Bo(),gN=Ch(),bN=kh(),Zo=Nt(),_h=Jr.MutationObserver||Jr.WebKitMutationObserver,Rh=Jr.document,Ah=Jr.process,ai=Jr.Promise,tu=mN("queueMicrotask"),Yr,eu,ru,oi,Nh;tu||($t=new hN,Lt=function(){var e,r;for(Zo&&(e=Ah.domain)&&e.exit();r=$t.get();)try{r()}catch(t){throw $t.head&&Yr(),t}e&&e.enter()},!yN&&!Zo&&!bN&&_h&&Rh?(eu=!0,ru=Rh.createTextNode(""),new _h(Lt).observe(ru,{characterData:!0}),Yr=function(){ru.data=eu=!eu}):!gN&&ai&&ai.resolve?(oi=ai.resolve(void 0),oi.constructor=ai,Nh=Ph(oi.then,oi),Yr=function(){Nh(Lt)}):Zo?Yr=function(){Ah.nextTick(Lt)}:(Xo=Ph(Xo,Jr),Yr=function(){Xo(Lt)}),tu=function(e){$t.head||Yr(),$t.add(e)});var $t,Lt;Mh.exports=tu});var Lh=a((dH,$h)=>{"use strict";$h.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var qr=a((mH,Fh)=>{"use strict";Fh.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var xr=a((hH,Dh)=>{"use strict";var qN=_();Dh.exports=qN.Promise});var Qr=a((yH,Wh)=>{"use strict";var xN=_(),Ft=xr(),SN=N(),wN=ca(),TN=ha(),ON=R(),Bh=$o(),EN=Z(),nu=Nr(),Gh=Ft&&Ft.prototype,CN=ON("species"),iu=!1,Uh=SN(xN.PromiseRejectionEvent),IN=wN("Promise",function(){var e=TN(Ft),r=e!==String(Ft);if(!r&&nu===66||EN&&!(Gh.catch&&Gh.finally))return!0;if(!nu||nu<51||!/native code/.test(e)){var t=new Ft(function(o){o(1)}),n=function(o){o(function(){},function(){})},i=t.constructor={};if(i[CN]=n,iu=t.then(function(){})instanceof n,!iu)return!0}return!r&&(Bh==="BROWSER"||Bh==="DENO")&&!Uh});Wh.exports={CONSTRUCTOR:IN,REJECTION_EVENT:Uh,SUBCLASSING:iu}});var we=a((gH,Kh)=>{"use strict";var Hh=F(),kN=TypeError,PN=function(e){var r,t;this.promise=new e(function(n,i){if(r!==void 0||t!==void 0)throw new kN("Bad Promise constructor");r=n,t=i}),this.resolve=Hh(r),this.reject=Hh(t)};Kh.exports.f=function(e){return new PN(e)}});var py=a(()=>{"use strict";var _N=x(),RN=Z(),li=Nt(),Xe=_(),AN=z(),rt=D(),Vh=ke(),zh=xt(),NN=_e(),MN=Lo(),jN=F(),ci=N(),$N=$(),LN=ii(),FN=Do(),Zh=Jo().set,cu=jh(),DN=Lh(),BN=qr(),GN=Qo(),ey=ze(),fi=xr(),lu=Qr(),ry=we(),pi="Promise",ty=lu.CONSTRUCTOR,UN=lu.REJECTION_EVENT,WN=lu.SUBCLASSING,au=ey.getterFor(pi),HN=ey.set,Xr=fi&&fi.prototype,Sr=fi,ui=Xr,ny=Xe.TypeError,ou=Xe.document,fu=Xe.process,uu=ry.f,KN=uu,VN=!!(ou&&ou.createEvent&&Xe.dispatchEvent),iy="unhandledrejection",zN="rejectionhandled",Yh=0,ay=1,YN=2,pu=1,oy=2,si,Jh,uy,Qh,sy=function(e){var r;return $N(e)&&ci(r=e.then)?r:!1},cy=function(e,r){var t=r.value,n=r.state===ay,i=n?e.ok:e.fail,o=e.resolve,u=e.reject,l=e.domain,c,s,f;try{i?(n||(r.rejection===oy&&QN(r),r.rejection=pu),i===!0?c=t:(l&&l.enter(),c=i(t),l&&(l.exit(),f=!0)),c===e.promise?u(new ny("Promise-chain cycle")):(s=sy(c))?rt(s,c,o,u):o(c)):u(t)}catch(v){l&&!f&&l.exit(),u(v)}},ly=function(e,r){e.notified||(e.notified=!0,cu(function(){for(var t=e.reactions,n;n=t.get();)cy(n,e);e.notified=!1,r&&!e.rejection&&JN(e)}))},fy=function(e,r,t){var n,i;VN?(n=ou.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),Xe.dispatchEvent(n)):n={promise:r,reason:t},!UN&&(i=Xe["on"+e])?i(n):e===iy&&DN("Unhandled promise rejection",t)},JN=function(e){rt(Zh,Xe,function(){var r=e.facade,t=e.value,n=Xh(e),i;if(n&&(i=BN(function(){li?fu.emit("unhandledRejection",t,r):fy(iy,r,t)}),e.rejection=li||Xh(e)?oy:pu,i.error))throw i.value})},Xh=function(e){return e.rejection!==pu&&!e.parent},QN=function(e){rt(Zh,Xe,function(){var r=e.facade;li?fu.emit("rejectionHandled",r):fy(zN,r,e.value)})},Zr=function(e,r,t){return function(n){e(r,n,t)}},et=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=YN,ly(e,!0))},su=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new ny("Promise can't be resolved itself");var n=sy(r);n?cu(function(){var i={done:!1};try{rt(n,r,Zr(su,i,e),Zr(et,i,e))}catch(o){et(i,o,e)}}):(e.value=r,e.state=ay,ly(e,!1))}catch(i){et({done:!1},i,e)}}};if(ty&&(Sr=function(r){LN(this,ui),jN(r),rt(si,this);var t=au(this);try{r(Zr(su,t),Zr(et,t))}catch(n){et(t,n)}},ui=Sr.prototype,si=function(r){HN(this,{type:pi,done:!1,notified:!1,parent:!1,reactions:new GN,rejection:!1,state:Yh,value:null})},si.prototype=Vh(ui,"then",function(r,t){var n=au(this),i=uu(FN(this,Sr));return n.parent=!0,i.ok=ci(r)?r:!0,i.fail=ci(t)&&t,i.domain=li?fu.domain:void 0,n.state===Yh?n.reactions.add(i):cu(function(){cy(i,n)}),i.promise}),Jh=function(){var e=new si,r=au(e);this.promise=e,this.resolve=Zr(su,r),this.reject=Zr(et,r)},ry.f=uu=function(e){return e===Sr||e===uy?new Jh(e):KN(e)},!RN&&ci(fi)&&Xr!==Object.prototype)){Qh=Xr.then,WN||Vh(Xr,"then",function(r,t){var n=this;return new Sr(function(i,o){rt(Qh,n,i,o)}).then(r,t)},{unsafe:!0});try{delete Xr.constructor}catch{}zh&&zh(Xr,ui)}_N({global:!0,constructor:!0,wrap:!0,forced:ty},{Promise:Sr});uy=AN.Promise;NN(Sr,pi,!1,!0);MN(pi)});var Dt=a((xH,vy)=>{"use strict";var XN=xr(),ZN=Va(),eM=Qr().CONSTRUCTOR;vy.exports=eM||!ZN(function(e){XN.all(e).then(void 0,function(){})})});var dy=a(()=>{"use strict";var rM=x(),tM=D(),nM=F(),iM=we(),aM=qr(),oM=pe(),uM=Dt();rM({target:"Promise",stat:!0,forced:uM},{all:function(r){var t=this,n=iM.f(t),i=n.resolve,o=n.reject,u=aM(function(){var l=nM(t.resolve),c=[],s=0,f=1;oM(r,function(v){var p=s++,d=!1;f++,tM(l,t,v).then(function(m){d||(d=!0,c[p]=m,--f||i(c))},o)}),--f||i(c)});return u.error&&o(u.value),n.promise}})});var hy=a(()=>{"use strict";var sM=x(),cM=Z(),lM=Qr().CONSTRUCTOR,du=xr(),fM=W(),pM=N(),vM=ke(),my=du&&du.prototype;sM({target:"Promise",proto:!0,forced:lM,real:!0},{catch:function(e){return this.then(void 0,e)}});!cM&&pM(du)&&(vu=fM("Promise").prototype.catch,my.catch!==vu&&vM(my,"catch",vu,{unsafe:!0}));var vu});var yy=a(()=>{"use strict";var dM=x(),mM=D(),hM=F(),yM=we(),gM=qr(),bM=pe(),qM=Dt();dM({target:"Promise",stat:!0,forced:qM},{race:function(r){var t=this,n=yM.f(t),i=n.reject,o=gM(function(){var u=hM(t.resolve);bM(r,function(l){mM(u,t,l).then(n.resolve,i)})});return o.error&&i(o.value),n.promise}})});var gy=a(()=>{"use strict";var xM=x(),SM=we(),wM=Qr().CONSTRUCTOR;xM({target:"Promise",stat:!0,forced:wM},{reject:function(r){var t=SM.f(this),n=t.reject;return n(r),t.promise}})});var mu=a((PH,by)=>{"use strict";var TM=X(),OM=$(),EM=we();by.exports=function(e,r){if(TM(e),OM(r)&&r.constructor===e)return r;var t=EM.f(e),n=t.resolve;return n(r),t.promise}});var Sy=a(()=>{"use strict";var CM=x(),IM=W(),qy=Z(),kM=xr(),xy=Qr().CONSTRUCTOR,PM=mu(),_M=IM("Promise"),RM=qy&&!xy;CM({target:"Promise",stat:!0,forced:qy||xy},{resolve:function(r){return PM(RM&&this===_M?kM:this,r)}})});var wy=a(()=>{"use strict";py();dy();hy();yy();gy();Sy()});var hu=a(()=>{"use strict";var AM=x(),NM=D(),MM=F(),jM=we(),$M=qr(),LM=pe(),FM=Dt();AM({target:"Promise",stat:!0,forced:FM},{allSettled:function(r){var t=this,n=jM.f(t),i=n.resolve,o=n.reject,u=$M(function(){var l=MM(t.resolve),c=[],s=0,f=1;LM(r,function(v){var p=s++,d=!1;f++,NM(l,t,v).then(function(m){d||(d=!0,c[p]={status:"fulfilled",value:m},--f||i(c))},function(m){d||(d=!0,c[p]={status:"rejected",reason:m},--f||i(c))})}),--f||i(c)});return u.error&&o(u.value),n.promise}})});var yu=a(()=>{"use strict";var DM=x(),BM=D(),GM=F(),UM=W(),WM=we(),HM=qr(),KM=pe(),VM=Dt(),Ty="No one promise resolved";DM({target:"Promise",stat:!0,forced:VM},{any:function(r){var t=this,n=UM("AggregateError"),i=WM.f(t),o=i.resolve,u=i.reject,l=HM(function(){var c=GM(t.resolve),s=[],f=0,v=1,p=!1;KM(r,function(d){var m=f++,h=!1;v++,BM(c,t,d).then(function(y){h||p||(p=!0,o(y))},function(y){h||p||(h=!0,s[m]=y,--v||u(new n(s,Ty)))})}),--v||u(new n(s,Ty))});return l.error&&u(l.value),i.promise}})});var bu=a(()=>{"use strict";var zM=x(),YM=_(),JM=Rr(),QM=lr(),XM=we(),ZM=F(),Ey=qr(),gu=YM.Promise,Oy=!1,ej=!gu||!gu.try||Ey(function(){gu.try(function(e){Oy=e===8},8)}).error||!Oy;zM({target:"Promise",stat:!0,forced:ej},{try:function(e){var r=arguments.length>1?QM(arguments,1):[],t=XM.f(this),n=Ey(function(){return JM(ZM(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var qu=a(()=>{"use strict";var rj=x(),tj=we();rj({target:"Promise",stat:!0},{withResolvers:function(){var r=tj.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var Py=a(()=>{"use strict";var nj=x(),ij=Z(),vi=xr(),aj=P(),Iy=W(),ky=N(),oj=Do(),Cy=mu(),uj=ke(),Su=vi&&vi.prototype,sj=!!vi&&aj(function(){Su.finally.call({then:function(){}},function(){})});nj({target:"Promise",proto:!0,real:!0,forced:sj},{finally:function(e){var r=oj(this,Iy("Promise")),t=ky(e);return this.then(t?function(n){return Cy(r,e()).then(function(){return n})}:e,t?function(n){return Cy(r,e()).then(function(){throw n})}:e)}});!ij&&ky(vi)&&(xu=Iy("Promise").prototype.finally,Su.finally!==xu&&uj(Su,"finally",xu,{unsafe:!0}));var xu});var Ry=a((HH,_y)=>{"use strict";jo();yr();Et();wy();hu();yu();bu();qu();Py();vr();var cj=z();_y.exports=cj.Promise});var Ny=a((KH,Ay)=>{"use strict";var lj=Ry();gr();Ay.exports=lj});var My=a(()=>{"use strict";bu()});var jy=a(()=>{"use strict";qu()});var Ly=a((QH,$y)=>{"use strict";var fj=Ny();My();jy();$y.exports=fj});var Fy=a(()=>{"use strict";jo()});var Dy=a(()=>{"use strict";hu()});var By=a(()=>{"use strict";yu()});var Uy=a((iK,Gy)=>{"use strict";var pj=Ly();Fy();Dy();By();Gy.exports=pj});var tt=a((aK,Wy)=>{"use strict";Wy.exports=Uy()});var Vy=a((lK,Ky)=>{"use strict";xo();var vj=Wr();Ky.exports=vj.f("asyncIterator")});var Yy=a((fK,zy)=>{"use strict";var dj=Vy();zy.exports=dj});var Qy=a((pK,Jy)=>{"use strict";var mj=Yy();Jy.exports=mj});var Zy=a((vK,Xy)=>{"use strict";var hj=Qy();Xy.exports=hj});var di=a((dK,eg)=>{"use strict";eg.exports=Zy()});var ig=a(()=>{"use strict";var yj=x(),gj=P(),bj=re(),ng=qt(),qj=$a(),xj=gj(function(){ng(1)});yj({target:"Object",stat:!0,forced:xj,sham:!qj},{getPrototypeOf:function(r){return ng(bj(r))}})});var og=a((bK,ag)=>{"use strict";ig();var Sj=z();ag.exports=Sj.Object.getPrototypeOf});var sg=a((qK,ug)=>{"use strict";var wj=og();ug.exports=wj});var lg=a((xK,cg)=>{"use strict";var Tj=sg();cg.exports=Tj});var pg=a((SK,fg)=>{"use strict";var Oj=lg();fg.exports=Oj});var mi=a((wK,vg)=>{"use strict";vg.exports=pg()});var mg=a(()=>{"use strict";var Ej=x(),Cj=A(),Ij=Ie(),kj=Cj([].reverse),dg=[1,2];Ej({target:"Array",proto:!0,forced:String(dg)===String(dg.reverse())},{reverse:function(){return Ij(this)&&(this.length=this.length),kj(this)}})});var yg=a((EK,hg)=>{"use strict";mg();var Pj=oe();hg.exports=Pj("Array","reverse")});var bg=a((CK,gg)=>{"use strict";var _j=G(),Rj=yg(),Ou=Array.prototype;gg.exports=function(e){var r=e.reverse;return e===Ou||_j(Ou,e)&&r===Ou.reverse?Rj:r}});var xg=a((IK,qg)=>{"use strict";var Aj=bg();qg.exports=Aj});var wg=a((kK,Sg)=>{"use strict";var Nj=xg();Sg.exports=Nj});var Og=a((PK,Tg)=>{"use strict";var Mj=wg();Tg.exports=Mj});var Cg=a((_K,Eg)=>{"use strict";Eg.exports=Og()});var Eu=a((RK,Ut)=>{function jj(e,r){this.v=e,this.k=r}Ut.exports=jj,Ut.exports.__esModule=!0,Ut.exports.default=Ut.exports});var Ig=a(()=>{"use strict";var $j=x(),Lj=U(),Fj=Ye();$j({target:"Object",stat:!0,sham:!Lj},{create:Fj})});var Pg=a((MK,kg)=>{"use strict";Ig();var Dj=z(),Bj=Dj.Object;kg.exports=function(r,t){return Bj.create(r,t)}});var Rg=a((jK,_g)=>{"use strict";var Gj=Pg();_g.exports=Gj});var Ng=a(($K,Ag)=>{"use strict";var Uj=Rg();Ag.exports=Uj});var jg=a((LK,Mg)=>{"use strict";var Wj=Ng();Mg.exports=Wj});var hi=a((FK,$g)=>{"use strict";$g.exports=jg()});var Iu=a((DK,Bg)=>{"use strict";var Fg=A(),Hj=F(),Kj=$(),Vj=H(),Lg=lr(),zj=_r(),Dg=Function,Yj=Fg([].concat),Jj=Fg([].join),Cu={},Qj=function(e,r,t){if(!Vj(Cu,r)){for(var n=[],i=0;i<r;i++)n[i]="a["+i+"]";Cu[r]=Dg("C,a","return new C("+Jj(n,",")+")")}return Cu[r](e,t)};Bg.exports=zj?Dg.bind:function(r){var t=Hj(this),n=t.prototype,i=Lg(arguments,1),o=function(){var l=Yj(i,Lg(arguments));return this instanceof o?Qj(t,l.length,l):t.apply(r,l)};return Kj(n)&&(o.prototype=n),o}});var Ug=a(()=>{"use strict";var Xj=x(),Gg=Iu();Xj({target:"Function",proto:!0,forced:Function.bind!==Gg},{bind:Gg})});var Hg=a((UK,Wg)=>{"use strict";Ug();var Zj=oe();Wg.exports=Zj("Function","bind")});var Vg=a((WK,Kg)=>{"use strict";var e$=G(),r$=Hg(),ku=Function.prototype;Kg.exports=function(e){var r=e.bind;return e===ku||e$(ku,e)&&r===ku.bind?r$:r}});var Yg=a((HK,zg)=>{"use strict";var t$=Vg();zg.exports=t$});var Qg=a((KK,Jg)=>{"use strict";var n$=Yg();Jg.exports=n$});var Zg=a((VK,Xg)=>{"use strict";var i$=Qg();Xg.exports=i$});var Wt=a((zK,eb)=>{"use strict";eb.exports=Zg()});var rb=a(()=>{"use strict";var a$=x(),o$=xt();a$({target:"Object",stat:!0},{setPrototypeOf:o$})});var nb=a((QK,tb)=>{"use strict";rb();var u$=z();tb.exports=u$.Object.setPrototypeOf});var ab=a((XK,ib)=>{"use strict";var s$=nb();ib.exports=s$});var ub=a((ZK,ob)=>{"use strict";var c$=ab();ob.exports=c$});var cb=a((eV,sb)=>{"use strict";var l$=ub();sb.exports=l$});var yi=a((rV,lb)=>{"use strict";lb.exports=cb()});var pb=a(()=>{"use strict";var f$=x(),p$=U(),fb=te().f;f$({target:"Object",stat:!0,forced:Object.defineProperty!==fb,sham:!p$},{defineProperty:fb})});var mb=a((iV,db)=>{"use strict";pb();var v$=z(),vb=v$.Object,d$=db.exports=function(r,t,n){return vb.defineProperty(r,t,n)};vb.defineProperty.sham&&(d$.sham=!0)});var yb=a((aV,hb)=>{"use strict";var m$=mb();hb.exports=m$});var bb=a((oV,gb)=>{"use strict";var h$=yb();gb.exports=h$});var xb=a((uV,qb)=>{"use strict";var y$=bb();qb.exports=y$});var Ht=a((sV,Sb)=>{"use strict";Sb.exports=xb()});var Pu=a((cV,Ae)=>{var g$=Ht();function gi(e,r,t,n){var i=g$;try{i({},"",{})}catch{i=0}Ae.exports=gi=function(u,l,c,s){function f(v,p){gi(u,v,function(d){return this._invoke(v,p,d)})}l?i?i(u,l,{value:c,enumerable:!s,configurable:!s,writable:!s}):u[l]=c:(f("next",0),f("throw",1),f("return",2))},Ae.exports.__esModule=!0,Ae.exports.default=Ae.exports,gi(e,r,t,n)}Ae.exports=gi,Ae.exports.__esModule=!0,Ae.exports.default=Ae.exports});var Ru=a((lV,Ne)=>{var wb=Se(),_u=hi(),b$=Wt(),q$=mi(),Tb=yi(),Oe=Pu();function Ob(){var e,r,t=typeof wb=="function"?wb:{},n=t.iterator||"@@iterator",i=t.toStringTag||"@@toStringTag";function o(d,m,h,y){var q=m&&m.prototype instanceof l?m:l,b=_u(q.prototype);return Oe(b,"_invoke",function(I,C,S){var T,w,E,j=0,ge=S||[],k=!1,ee={p:0,n:0,v:e,a:be,f:b$(be).call(be,e,4),d:function(L,ve){return T=L,w=0,E=e,ee.n=ve,u}};function be(Q,L){for(w=Q,E=L,r=0;!k&&j&&!ve&&r<ge.length;r++){var ve,O=ge[r],kr=ee.p,We=O[2];Q>3?(ve=We===L)&&(E=O[(w=O[4])?5:(w=3,3)],O[4]=O[5]=e):O[0]<=kr&&((ve=Q<2&&kr<O[1])?(w=0,ee.v=L,ee.n=O[1]):kr<We&&(ve=Q<3||O[0]>L||L>We)&&(O[4]=Q,O[5]=L,ee.n=We,w=0))}if(ve||Q>1)return u;throw k=!0,L}return function(Q,L,ve){if(j>1)throw TypeError("Generator is already running");for(k&&L===1&&be(L,ve),w=L,E=ve;(r=w<2?e:E)||!k;){T||(w?w<3?(w>1&&(ee.n=-1),be(w,E)):ee.n=E:ee.v=E);try{if(j=2,T){if(w||(Q="next"),r=T[Q]){if(!(r=r.call(T,E)))throw TypeError("iterator result is not an object");if(!r.done)return r;E=r.value,w<2&&(w=0)}else w===1&&(r=T.return)&&r.call(T),w<2&&(E=TypeError("The iterator does not provide a '"+Q+"' method"),w=1);T=e}else if((r=(k=ee.n<0)?E:I.call(C,ee))!==u)break}catch(O){T=e,w=1,E=O}finally{j=1}}return{value:r,done:k}}}(d,h,y),!0),b}var u={};function l(){}function c(){}function s(){}r=q$;var f=[][n]?r(r([][n]())):(Oe(r={},n,function(){return this}),r),v=s.prototype=l.prototype=_u(f);function p(d){return Tb?Tb(d,s):(d.__proto__=s,Oe(d,i,"GeneratorFunction")),d.prototype=_u(v),d}return c.prototype=s,Oe(v,"constructor",s),Oe(s,"constructor",c),c.displayName="GeneratorFunction",Oe(s,i,"GeneratorFunction"),Oe(v),Oe(v,i,"Generator"),Oe(v,n,function(){return this}),Oe(v,"toString",function(){return"[object Generator]"}),(Ne.exports=Ob=function(){return{w:o,m:p}},Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports)()}Ne.exports=Ob,Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports});var Mu=a((fV,Kt)=>{var x$=Se(),S$=di(),w$=Eu(),Au=Pu();function Nu(e,r){function t(i,o,u,l){try{var c=e[i](o),s=c.value;return s instanceof w$?r.resolve(s.v).then(function(f){t("next",f,u,l)},function(f){t("throw",f,u,l)}):r.resolve(s).then(function(f){c.value=f,u(c)},function(f){return t("throw",f,u,l)})}catch(f){l(f)}}var n;this.next||(Au(Nu.prototype),Au(Nu.prototype,typeof x$=="function"&&S$||"@asyncIterator",function(){return this})),Au(this,"_invoke",function(i,o,u){function l(){return new r(function(c,s){t(i,u,c,s)})}return n=n?n.then(l,l):l()},!0)}Kt.exports=Nu,Kt.exports.__esModule=!0,Kt.exports.default=Kt.exports});var ju=a((pV,Vt)=>{var T$=tt(),O$=Ru(),E$=Mu();function C$(e,r,t,n,i){return new E$(O$().w(e,r,t,n),i||T$)}Vt.exports=C$,Vt.exports.__esModule=!0,Vt.exports.default=Vt.exports});var Eb=a((vV,zt)=>{var I$=ju();function k$(e,r,t,n,i){var o=I$(e,r,t,n,i);return o.next().then(function(u){return u.done?u.value:o.next()})}zt.exports=k$,zt.exports.__esModule=!0,zt.exports.default=zt.exports});var kb=a((dV,Ib)=>{"use strict";var Cb=Ke(),P$=TypeError;Ib.exports=function(e,r){if(!delete e[r])throw new P$("Cannot delete property "+Cb(r)+" of "+Cb(e))}});var Pb=a(()=>{"use strict";var _$=x(),R$=re(),A$=le(),N$=Br(),M$=kb(),j$=Ot(),$$=[].unshift(0)!==1,L$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},F$=$$||!L$();_$({target:"Array",proto:!0,arity:1,forced:F$},{unshift:function(r){var t=R$(this),n=A$(t),i=arguments.length;if(i){j$(n+i);for(var o=n;o--;){var u=o+i;o in t?t[u]=t[o]:M$(t,u)}for(var l=0;l<i;l++)t[l]=arguments[l]}return N$(t,n+i)}})});var Rb=a((yV,_b)=>{"use strict";Pb();var D$=oe();_b.exports=D$("Array","unshift")});var Nb=a((gV,Ab)=>{"use strict";var B$=G(),G$=Rb(),$u=Array.prototype;Ab.exports=function(e){var r=e.unshift;return e===$u||B$($u,e)&&r===$u.unshift?G$:r}});var jb=a((bV,Mb)=>{"use strict";var U$=Nb();Mb.exports=U$});var Lb=a((qV,$b)=>{"use strict";var W$=jb();$b.exports=W$});var Db=a((xV,Fb)=>{"use strict";var H$=Lb();Fb.exports=H$});var Gb=a((SV,Bb)=>{"use strict";Bb.exports=Db()});var Ub=a((wV,Yt)=>{var K$=Gb();function V$(e){var r=Object(e),t=[];for(var n in r)K$(t).call(t,n);return function i(){for(;t.length;)if((n=t.pop())in r)return i.value=n,i.done=!1,i;return i.done=!0,i}}Yt.exports=V$,Yt.exports.__esModule=!0,Yt.exports.default=Yt.exports});var Hb=a((TV,Wb)=>{"use strict";yr();Et();vr();wo();var z$=Wr();Wb.exports=z$.f("iterator")});var Vb=a((OV,Kb)=>{"use strict";var Y$=Hb();gr();Kb.exports=Y$});var Yb=a((EV,zb)=>{"use strict";var J$=Vb();zb.exports=J$});var Qb=a((CV,Jb)=>{"use strict";var Q$=Yb();Jb.exports=Q$});var Jt=a((IV,Xb)=>{"use strict";Xb.exports=Qb()});var Zb=a((kV,Me)=>{var bi=Se(),X$=Jt();function Lu(e){"@babel/helpers - typeof";return Me.exports=Lu=typeof bi=="function"&&typeof X$=="symbol"?function(r){return typeof r}:function(r){return r&&typeof bi=="function"&&r.constructor===bi&&r!==bi.prototype?"symbol":typeof r},Me.exports.__esModule=!0,Me.exports.default=Me.exports,Lu(e)}Me.exports=Lu,Me.exports.__esModule=!0,Me.exports.default=Me.exports});var eq=a((PV,Qt)=>{var Z$=Zb().default,eL=Se(),rL=Jt();function tL(e){if(e!=null){var r=e[typeof eL=="function"&&rL||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(Z$(e)+" is not iterable")}Qt.exports=tL,Qt.exports.__esModule=!0,Qt.exports.default=Qt.exports});var nq=a((_V,je)=>{var rq=mi(),nL=Cg(),iL=Eu(),aL=Ru(),oL=Eb(),uL=ju(),sL=Mu(),cL=Ub(),tq=eq();function Fu(){"use strict";var e=aL(),r=e.m(Fu),t=(rq?rq(r):r.__proto__).constructor;function n(u){var l=typeof u=="function"&&u.constructor;return!!l&&(l===t||(l.displayName||l.name)==="GeneratorFunction")}var i={throw:1,return:2,break:3,continue:3};function o(u){var l,c;return function(s){l||(l={stop:function(){return c(s.a,2)},catch:function(){return s.v},abrupt:function(v,p){return c(s.a,i[v],p)},delegateYield:function(v,p,d){return l.resultName=p,c(s.d,tq(v),d)},finish:function(v){return c(s.f,v)}},c=function(v,p,d){s.p=l.prev,s.n=l.next;try{return v(p,d)}finally{l.next=s.n}}),l.resultName&&(l[l.resultName]=s.v,l.resultName=void 0),l.sent=s.v,l.next=s.n;try{return u.call(this,l)}finally{s.p=l.prev,s.n=l.next}}}return(je.exports=Fu=function(){return{wrap:function(c,s,f,v){return e.w(o(c),s,f,v&&nL(v).call(v))},isGeneratorFunction:n,mark:e.m,awrap:function(c,s){return new iL(c,s)},AsyncIterator:sL,async:function(c,s,f,v,p){return(n(s)?uL:oL)(o(c),s,f,v,p)},keys:cL,values:tq}},je.exports.__esModule=!0,je.exports.default=je.exports)()}je.exports=Fu,je.exports.__esModule=!0,je.exports.default=je.exports});var se=a((RV,iq)=>{var qi=nq()();iq.exports=qi;try{regeneratorRuntime=qi}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=qi:Function("r","regeneratorRuntime = r")(qi)}});var Du=a((Si,oq)=>{"use strict";Object.defineProperty(Si,"__esModule",{value:!0});var xi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},aq=function(){function e(r,t){var n=[],i=!0,o=!1,u=void 0;try{for(var l=r[Symbol.iterator](),c;!(i=(c=l.next()).done)&&(n.push(c.value),!(t&&n.length===t));i=!0);}catch(s){o=!0,u=s}finally{try{!i&&l.return&&l.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Si.default=lL;function lL(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(i){return i.type==="tag"||i.type==="script"||i.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var i=this.attribs,o=Object.keys(i),u=o.reduce(function(l,c,s){return l[s]={name:c,value:i[c]},l},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var i=[];return er(this.childTags,function(o){(o.name===n||n==="*")&&i.push(o)}),i}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var i=n.trim().replace(/\s+/g," ").split(" "),o=[];return er([this],function(u){var l=u.attribs.class;l&&i.every(function(c){return l.indexOf(c)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var i=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=fL(n),u=o.shift(),l=o.length;return u(this).filter(function(c){for(var s=0;s<l;){if(c=o[s](c,i),!c)return!1;s+=1}return!0})}),t.contains||(t.contains=function(n){var i=!1;return er([this],function(o,u){o===n&&(i=!0,u())}),i}),!0}function fL(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,i=r.split(":"),o=aq(i,2),u=o[0],l=o[1],c=null,s=null;if(function(){switch(!0){case/>/.test(u):s=function(S){return function(T){return T(S.parent)&&S.parent}};break;case/^\./.test(u):var m=u.substr(1).split(".");c=function(S){var T=S.attribs.class;return T&&m.every(function(w){return T.indexOf(w)>-1})},s=function(S,T){return n?S.getElementsByClassName(m.join(" ")):typeof S=="function"?S(c):Xt(S,T,c)};break;case/^\[/.test(u):var h=u.replace(/\[|\]|"/g,"").split("="),y=aq(h,2),q=y[0],b=y[1];c=function(S){var T=Object.keys(S.attribs).indexOf(q)>-1;return!!(T&&(!b||S.attribs[q]===b))},s=function(S,T){if(n){var w=function(){var E=[];return er([S],function(j){c(j)&&E.push(j)}),{v:E}}();if((typeof w>"u"?"undefined":xi(w))==="object")return w.v}return typeof S=="function"?S(c):Xt(S,T,c)};break;case/^#/.test(u):var I=u.substr(1);c=function(S){return S.attribs.id===I},s=function(S,T){if(n){var w=function(){var E=[];return er([S],function(j,ge){c(j)&&(E.push(j),ge())}),{v:E}}();if((typeof w>"u"?"undefined":xi(w))==="object")return w.v}return typeof S=="function"?S(c):Xt(S,T,c)};break;case/\*/.test(u):c=function(S){return!0},s=function(S,T){if(n){var w=function(){var E=[];return er([S],function(j){return E.push(j)}),{v:E}}();if((typeof w>"u"?"undefined":xi(w))==="object")return w.v}return typeof S=="function"?S(c):Xt(S,T,c)};break;default:c=function(S){return S.name===u},s=function(S,T){if(n){var w=function(){var E=[];return er([S],function(j){c(j)&&E.push(j)}),{v:E}}();if((typeof w>"u"?"undefined":xi(w))==="object")return w.v}return typeof S=="function"?S(c):Xt(S,T,c)}}}(),!l)return s;var f=l.match(/-(child|type)\((\d+)\)$/),v=f[1],p=parseInt(f[2],10)-1,d=function(h){if(h){var y=h.parent.childTags;v==="type"&&(y=y.filter(c));var q=y.findIndex(function(b){return b===h});if(q===p)return!0}return!1};return function(h){var y=s(h);return n?y.reduce(function(q,b){return d(b)&&q.push(b),q},[]):d(y)&&y}})}function er(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&er(t.childTags,r)})}function Xt(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}oq.exports=Si.default});var Ti=a(wi=>{"use strict";Object.defineProperty(wi,"__esModule",{value:!0});wi.convertNodeList=pL;wi.escapeValue=vL;function pL(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function vL(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var hq=a((Oi,mq)=>{"use strict";Object.defineProperty(Oi,"__esModule",{value:!0});Oi.default=dL;var lq=Ti(),uq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function dL(e,r){var t=r.root,n=t===void 0?document:t,i=r.skip,o=i===void 0?null:i,u=r.priority,l=u===void 0?["id","class","href","src"]:u,c=r.ignore,s=c===void 0?{}:c,f=[],v=e,p=f.length,d=!1,m=o&&(Array.isArray(o)?o:[o]).map(function(q){return typeof q!="function"?function(b){return b===q}:q}),h=function(b){return o&&m.some(function(I){return I(b)})};for(Object.keys(s).forEach(function(q){q==="class"&&(d=!0);var b=s[q];typeof b!="function"&&(typeof b=="number"&&(b=b.toString()),typeof b=="string"&&(b=new RegExp((0,lq.escapeValue)(b).replace(/\\/g,"\\\\"))),typeof b=="boolean"&&(b=b?/(?:)/:/.^/),s[q]=function(I,C){return b.test(C)})}),d&&function(){var q=s.attribute;s.attribute=function(b,I,C){return s.class(I)||q&&q(b,I,C)}}();v!==n;){if(h(v)!==!0){if(sq(l,v,s,f,n)||cq(v,s,f,n))break;sq(l,v,s,f),f.length===p&&cq(v,s,f),f.length===p&&mL(l,v,s,f)}v=v.parentNode,p=f.length}if(v===n){var y=vq(l,v,s);f.unshift(y)}return f.join(" ")}function sq(e,r,t,n){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=fq(e,r,t);if(o){var u=i.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function fq(e,r,t){for(var n=r.attributes,i=Object.keys(n).sort(function(h,y){var q=e.indexOf(n[h].name),b=e.indexOf(n[y].name);return b===-1?q===-1?0:-1:q-b}),o=0,u=i.length;o<u;o++){var l=i[o],c=n[l],s=c.name,f=(0,lq.escapeValue)(c.value),v=t[s]||t.attribute,p=uq[s]||uq.attribute;if(!dq(v,s,f,p)){var d="["+s+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(s==="id"&&(d="#"+f),s==="class")){var m=f.trim().replace(/\s+/g,".");d="."+m}return d}}return null}function cq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,i=pq(e,r);if(i){var o=n.getElementsByTagName(i);if(o.length===1)return t.unshift(i),!0}return!1}function pq(e,r){var t=e.tagName.toLowerCase();return dq(r.tag,null,t)?null:t}function mL(e,r,t,n){for(var i=r.parentNode,o=i.childTags||i.children,u=0,l=o.length;u<l;u++){var c=o[u];if(c===r){var s=vq(e,c,t);if(!s)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,c,t,s);var f="> "+s+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function vq(e,r,t){var n=fq(e,r,t);return n||(n=pq(r,t)),n}function dq(e,r,t,n){if(!t)return!0;var i=e||n;return i?i(r,t,n):!1}mq.exports=Oi.default});var Bu=a((Ci,yq)=>{"use strict";Object.defineProperty(Ci,"__esModule",{value:!0});Ci.default=qL;var hL=Du(),yL=bL(hL),gL=Ti();function bL(e){return e&&e.__esModule?e:{default:e}}function qL(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,gL.convertNodeList)(r):[r]),!r.length||r.some(function(v){return v.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,yL.default)(r[0],t),i=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(i.length<2)return Ei("",e,"",r);for(var o=[i.pop()];i.length>1;){var u=i.pop(),l=i.join(" "),c=o.join(" "),s=l+" "+c,f=document.querySelectorAll(s);f.length!==r.length&&o.unshift(Ei(l,u,c,r))}return o.unshift(i[0]),i=o,i[0]=Ei("",i[0],i.slice(1).join(" "),r),i[i.length-1]=Ei(i.slice(0,-1).join(" "),i[i.length-1],"",r),n&&delete global.document,i.join(" ").replace(/>/g,"> ").trim()}function Ei(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var i=r.replace(/=.*$/,"]"),o=""+e+i+t,u=document.querySelectorAll(o);if(nt(u,n))r=i;else for(var l=document.querySelectorAll(""+e+i),c=function(){var C=l[s];if(n.some(function(T){return C.contains(T)})){var S=C.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),nt(u,n)&&(r=S),"break"}},s=0,f=l.length;s<f;s++){var o,u,v=c();if(v==="break")break}}if(/>/.test(r)){var p=r.replace(/>/,""),o=""+e+p+t,u=document.querySelectorAll(o);nt(u,n)&&(r=p)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);nt(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var m=r.trim().split(".").slice(1).map(function(I){return"."+I}).sort(function(I,C){return I.length-C.length});m.length;){var h=r.replace(m.shift(),"").trim(),o=(""+e+h+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);nt(u,n)&&(r=h)}if(m=r&&r.match(/\./g),m&&m.length>2)for(var y=document.querySelectorAll(""+e+r),q=function(){var C=y[s];if(n.some(function(T){return C.contains(T)})){var S=C.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),nt(u,n)&&(r=S),"break"}},s=0,f=y.length;s<f;s++){var o,u,b=q();if(b==="break")break}}return r}function nt(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var i=0;i<t;i++)if(e[i]===n)return!0;return!1})}yq.exports=Ci.default});var Gu=a(Ii=>{"use strict";Object.defineProperty(Ii,"__esModule",{value:!0});Ii.getCommonAncestor=xL;Ii.getCommonProperties=SL;function xL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,i=[];e.forEach(function(v,p){for(var d=[];v!==n;)v=v.parentNode,d.unshift(v);i[p]=d}),i.sort(function(v,p){return v.length-p.length});for(var o=i.shift(),u=null,l=function(){var p=o[c],d=i.some(function(m){return!m.some(function(h){return h===p})});if(d)return"break";u=p},c=0,s=o.length;c<s;c++){var f=l();if(f==="break")break}return u}function SL(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,i=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(c){return u.some(function(s){return s===c})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(i!==void 0&&function(){var c=t.attributes,s=Object.keys(c).reduce(function(p,d){var m=c[d],h=m.name;return m&&h!=="class"&&(p[h]=m.value),p},{}),f=Object.keys(s),v=Object.keys(i);f.length?v.length?(i=v.reduce(function(p,d){var m=i[d];return m===s[d]&&(p[d]=m),p},{}),Object.keys(i).length?r.attributes=i:delete r.attributes):r.attributes=s:delete r.attributes}(),o!==void 0){var l=t.tagName.toLowerCase();o?l!==o&&delete r.tag:r.tag=l}}),r}});var wq=a(Zt=>{"use strict";Object.defineProperty(Zt,"__esModule",{value:!0});var wL=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Zt.getSingleSelector=Wu;Zt.getMultiSelector=Sq;Zt.default=kL;var TL=Du(),bq=Uu(TL),OL=hq(),EL=Uu(OL),CL=Bu(),qq=Uu(CL),gq=Ti(),xq=Gu();function Uu(e){return e&&e.__esModule?e:{default:e}}function Wu(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":wL(e))+'")');var t=(0,bq.default)(e,r),n=(0,EL.default)(e,r),i=(0,qq.default)(n,e,r);return t&&delete global.document,i}function Sq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,gq.convertNodeList)(e)),e.some(function(s){return s.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,bq.default)(e[0],r),n=(0,xq.getCommonAncestor)(e,r),i=Wu(n,r),o=IL(e),u=o[0],l=(0,qq.default)(i+" "+u,e,r),c=(0,gq.convertNodeList)(document.querySelectorAll(l));return e.every(function(s){return c.some(function(f){return f===s})})?(t&&delete global.document,l):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function IL(e){var r=(0,xq.getCommonProperties)(e),t=r.classes,n=r.attributes,i=r.tag,o=[];if(i&&o.push(i),t){var u=t.map(function(c){return"."+c}).join("");o.push(u)}if(n){var l=Object.keys(n).reduce(function(c,s){return c.push("["+s+'="'+n[s]+'"]'),c},[]).join("");o.push(l)}return o.length,[o.join("")]}function kL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?Sq(e,r):Wu(e,r)}});var Eq=a(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.default=ie.common=ie.optimize=ie.getMultiSelector=ie.getSingleSelector=ie.select=void 0;var Hu=wq();Object.defineProperty(ie,"getSingleSelector",{enumerable:!0,get:function(){return Hu.getSingleSelector}});Object.defineProperty(ie,"getMultiSelector",{enumerable:!0,get:function(){return Hu.getMultiSelector}});var Tq=Oq(Hu),PL=Bu(),_L=Oq(PL),RL=Gu(),AL=NL(RL);function NL(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Oq(e){return e&&e.__esModule?e:{default:e}}ie.select=Tq.default;ie.optimize=_L.default;ie.common=AL;ie.default=Tq.default});var Cq=a(()=>{"use strict";var WL=x(),HL=Ie();WL({target:"Array",stat:!0},{isArray:HL})});var kq=a((YV,Iq)=>{"use strict";Cq();var KL=z();Iq.exports=KL.Array.isArray});var _q=a((JV,Pq)=>{"use strict";var VL=kq();Pq.exports=VL});var Aq=a((QV,Rq)=>{"use strict";var zL=_q();Rq.exports=zL});var Mq=a((XV,Nq)=>{"use strict";var YL=Aq();Nq.exports=YL});var $q=a((ZV,jq)=>{"use strict";jq.exports=Mq()});var Dq=a(()=>{"use strict";var JL=x(),QL=re(),XL=le(),ZL=Br(),eF=Ot(),rF=P(),tF=rF(function(){return[].push.call({length:4294967296},1)!==4294967297}),nF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},iF=tF||!nF();JL({target:"Array",proto:!0,arity:1,forced:iF},{push:function(r){var t=QL(this),n=XL(t),i=arguments.length;eF(n+i);for(var o=0;o<i;o++)t[n]=arguments[o],n++;return ZL(t,n),n}})});var Gq=a((nz,Bq)=>{"use strict";Dq();var aF=oe();Bq.exports=aF("Array","push")});var Wq=a((iz,Uq)=>{"use strict";var oF=G(),uF=Gq(),Ku=Array.prototype;Uq.exports=function(e){var r=e.push;return e===Ku||oF(Ku,e)&&r===Ku.push?uF:r}});var Kq=a((az,Hq)=>{"use strict";var sF=Wq();Hq.exports=sF});var zq=a((oz,Vq)=>{"use strict";var cF=Kq();Vq.exports=cF});var Jq=a((uz,Yq)=>{"use strict";var lF=zq();Yq.exports=lF});var Vu=a((sz,Qq)=>{"use strict";Qq.exports=Jq()});var sx=a(()=>{"use strict";var fF=x(),pF=It().map,vF=yt(),dF=vF("map");fF({target:"Array",proto:!0,forced:!dF},{map:function(r){return pF(this,r,arguments.length>1?arguments[1]:void 0)}})});var lx=a((jz,cx)=>{"use strict";sx();var mF=oe();cx.exports=mF("Array","map")});var px=a(($z,fx)=>{"use strict";var hF=G(),yF=lx(),Yu=Array.prototype;fx.exports=function(e){var r=e.map;return e===Yu||hF(Yu,e)&&r===Yu.map?yF:r}});var dx=a((Lz,vx)=>{"use strict";var gF=px();vx.exports=gF});var hx=a((Fz,mx)=>{"use strict";var bF=dx();mx.exports=bF});var gx=a((Dz,yx)=>{"use strict";var qF=hx();yx.exports=qF});var qx=a((Bz,bx)=>{"use strict";bx.exports=gx()});var Sx=a((Gz,xx)=>{xx.exports=qx()});var Tx=a((Uz,wx)=>{wx.exports=tt()});var kx=a((Wz,Ix)=>{"use strict";var xF=F(),SF=re(),wF=mn(),TF=le(),Ox=TypeError,Ex="Reduce of empty array with no initial value",Cx=function(e){return function(r,t,n,i){var o=SF(r),u=wF(o),l=TF(o);if(xF(t),l===0&&n<2)throw new Ox(Ex);var c=e?l-1:0,s=e?-1:1;if(n<2)for(;;){if(c in u){i=u[c],c+=s;break}if(c+=s,e?c<0:l<=c)throw new Ox(Ex)}for(;e?c>=0:l>c;c+=s)c in u&&(i=t(i,u[c],c,o));return i}};Ix.exports={left:Cx(!1),right:Cx(!0)}});var Ju=a((Hz,Px)=>{"use strict";var OF=P();Px.exports=function(e,r){var t=[][e];return!!t&&OF(function(){t.call(null,r||function(){return 1},1)})}});var Rx=a(()=>{"use strict";var EF=x(),CF=kx().left,IF=Ju(),_x=Nr(),kF=Nt(),PF=!kF&&_x>79&&_x<83,_F=PF||!IF("reduce");EF({target:"Array",proto:!0,forced:_F},{reduce:function(r){var t=arguments.length;return CF(this,r,t,t>1?arguments[1]:void 0)}})});var Nx=a((zz,Ax)=>{"use strict";Rx();var RF=oe();Ax.exports=RF("Array","reduce")});var jx=a((Yz,Mx)=>{"use strict";var AF=G(),NF=Nx(),Qu=Array.prototype;Mx.exports=function(e){var r=e.reduce;return e===Qu||AF(Qu,e)&&r===Qu.reduce?NF:r}});var Lx=a((Jz,$x)=>{"use strict";var MF=jx();$x.exports=MF});var Dx=a((Qz,Fx)=>{"use strict";var jF=Lx();Fx.exports=jF});var Gx=a((Xz,Bx)=>{"use strict";var $F=Dx();Bx.exports=$F});var Wx=a((Zz,Ux)=>{"use strict";Ux.exports=Gx()});var Kx=a((e7,Hx)=>{Hx.exports=Wx()});var Yx=a((r7,zx)=>{"use strict";var LF=Ie(),FF=le(),DF=Ot(),BF=Y(),GF=Dr(),Vx=function(e,r,t,n,i,o,u,l){for(var c=i,s=0,f=u?BF(u,l):!1,v,p;s<n;)s in t&&(v=f?f(t[s],s,r):t[s],o>0&&LF(v)?(p=FF(v),c=Vx(e,r,v,p,c,o-1)-1):(DF(c+1),GF(e,c,v)),c++),s++;return c};zx.exports=Vx});var Jx=a(()=>{"use strict";var UF=x(),WF=Yx(),HF=F(),KF=re(),VF=le(),zF=jn();UF({target:"Array",proto:!0},{flatMap:function(r){var t=KF(this),n=VF(t),i;return HF(r),i=zF(t,0),WF(i,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),i}})});var Qx=a(()=>{"use strict";var YF=Oo();YF("flatMap")});var Zx=a((o7,Xx)=>{"use strict";Jx();Qx();var JF=oe();Xx.exports=JF("Array","flatMap")});var rS=a((u7,eS)=>{"use strict";var QF=G(),XF=Zx(),Xu=Array.prototype;eS.exports=function(e){var r=e.flatMap;return e===Xu||QF(Xu,e)&&r===Xu.flatMap?XF:r}});var nS=a((s7,tS)=>{"use strict";var ZF=rS();tS.exports=ZF});var aS=a((c7,iS)=>{"use strict";var eD=nS();iS.exports=eD});var uS=a((l7,oS)=>{"use strict";var rD=aS();oS.exports=rD});var cS=a((f7,sS)=>{"use strict";sS.exports=uS()});var fS=a((p7,lS)=>{lS.exports=cS()});var vS=a((v7,pS)=>{"use strict";Ya();var tD=oe();pS.exports=tD("Array","concat")});var mS=a((d7,dS)=>{"use strict";var nD=G(),iD=vS(),Zu=Array.prototype;dS.exports=function(e){var r=e.concat;return e===Zu||nD(Zu,e)&&r===Zu.concat?iD:r}});var yS=a((m7,hS)=>{"use strict";var aD=mS();hS.exports=aD});var bS=a((h7,gS)=>{"use strict";var oD=yS();gS.exports=oD});var xS=a((y7,qS)=>{"use strict";var uD=bS();qS.exports=uD});var wS=a((g7,SS)=>{"use strict";SS.exports=xS()});var es=a((b7,TS)=>{TS.exports=wS()});var CS=a(()=>{});var kS=a((G7,IS)=>{"use strict";CS();To();var yD=Wr();IS.exports=yD.f("toPrimitive")});var _S=a((U7,PS)=>{"use strict";var gD=kS();PS.exports=gD});var AS=a((W7,RS)=>{"use strict";var bD=_S();RS.exports=bD});var MS=a((H7,NS)=>{"use strict";var qD=AS();NS.exports=qD});var $S=a((K7,jS)=>{"use strict";jS.exports=MS()});var KS=a((v9,HS)=>{"use strict";var SD=$(),wD=qe(),TD=R(),OD=TD("match");HS.exports=function(e){var r;return SD(e)&&((r=e[OD])!==void 0?!!r:wD(e)==="RegExp")}});var zS=a((d9,VS)=>{"use strict";var ED=KS(),CD=TypeError;VS.exports=function(e){if(ED(e))throw new CD("The method doesn't accept regular expressions");return e}});var JS=a((m9,YS)=>{"use strict";var ID=R(),kD=ID("match");YS.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[kD]=!1,"/./"[e](r)}catch{}}return!1}});var ZS=a(()=>{"use strict";var PD=x(),_D=ct(),RD=ft().f,AD=ba(),QS=Ve(),ND=zS(),MD=ur(),jD=JS(),$D=Z(),LD=_D("".slice),FD=Math.min,XS=jD("startsWith"),DD=!$D&&!XS&&!!function(){var e=RD(String.prototype,"startsWith");return e&&!e.writable}();PD({target:"String",proto:!0,forced:!DD&&!XS},{startsWith:function(r){var t=QS(MD(this));ND(r);var n=AD(FD(arguments.length>1?arguments[1]:void 0,t.length)),i=QS(r);return LD(t,n,n+i.length)===i}})});var rw=a((g9,ew)=>{"use strict";ZS();var BD=oe();ew.exports=BD("String","startsWith")});var nw=a((b9,tw)=>{"use strict";var GD=G(),UD=rw(),is=String.prototype;tw.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===is||GD(is,e)&&r===is.startsWith?UD:r}});var aw=a((q9,iw)=>{"use strict";var WD=nw();iw.exports=WD});var uw=a((x9,ow)=>{"use strict";var HD=aw();ow.exports=HD});var cw=a((S9,sw)=>{"use strict";var KD=uw();sw.exports=KD});var fw=a((w9,lw)=>{"use strict";lw.exports=cw()});var vw=a((T9,pw)=>{pw.exports=fw()});var dw=a(()=>{"use strict";var VD=x(),zD=It().filter,YD=yt(),JD=YD("filter");VD({target:"Array",proto:!0,forced:!JD},{filter:function(r){return zD(this,r,arguments.length>1?arguments[1]:void 0)}})});var hw=a((C9,mw)=>{"use strict";dw();var QD=oe();mw.exports=QD("Array","filter")});var gw=a((I9,yw)=>{"use strict";var XD=G(),ZD=hw(),as=Array.prototype;yw.exports=function(e){var r=e.filter;return e===as||XD(as,e)&&r===as.filter?ZD:r}});var qw=a((k9,bw)=>{"use strict";var e3=gw();bw.exports=e3});var Sw=a((P9,xw)=>{"use strict";var r3=qw();xw.exports=r3});var Tw=a((_9,ww)=>{"use strict";var t3=Sw();ww.exports=t3});var Ew=a((R9,Ow)=>{"use strict";Ow.exports=Tw()});var Iw=a((A9,Cw)=>{Cw.exports=Ew()});var Ww=a(()=>{"use strict";var l3=x(),f3=W(),us=Rr(),p3=Iu(),Lw=Fo(),v3=X(),Fw=$(),d3=Ye(),Bw=P(),ss=f3("Reflect","construct"),m3=Object.prototype,h3=[].push,Gw=Bw(function(){function e(){}return!(ss(function(){},[],e)instanceof e)}),Uw=!Bw(function(){ss(function(){})}),Dw=Gw||Uw;l3({target:"Reflect",stat:!0,forced:Dw,sham:Dw},{construct:function(r,t){Lw(r),v3(t);var n=arguments.length<3?r:Lw(arguments[2]);if(Uw&&!Gw)return ss(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var i=[null];return us(h3,i,t),new(us(p3,r,i))}var o=n.prototype,u=d3(Fw(o)?o:m3),l=us(r,u,t);return Fw(l)?l:u}})});var Kw=a((vY,Hw)=>{"use strict";Ww();var y3=z();Hw.exports=y3.Reflect.construct});var zw=a((dY,Vw)=>{"use strict";var g3=Kw();Vw.exports=g3});var Jw=a((mY,Yw)=>{"use strict";var b3=zw();Yw.exports=b3});var Xw=a((hY,Qw)=>{"use strict";var q3=Jw();Qw.exports=q3});var Mi=a((yY,Zw)=>{"use strict";Zw.exports=Xw()});var rT=a((gY,eT)=>{eT.exports=Mi()});var lT=a((CY,cT)=>{"use strict";var x3=P();cT.exports=x3(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var vT=a((IY,pT)=>{"use strict";var S3=P(),w3=$(),T3=qe(),fT=lT(),ji=Object.isExtensible,O3=S3(function(){ji(1)});pT.exports=O3||fT?function(r){return!w3(r)||fT&&T3(r)==="ArrayBuffer"?!1:ji?ji(r):!0}:ji});var mT=a((kY,dT)=>{"use strict";var E3=P();dT.exports=!E3(function(){return Object.isExtensible(Object.preventExtensions({}))})});var ms=a((PY,gT)=>{"use strict";var C3=x(),I3=A(),k3=Ur(),P3=$(),ps=H(),_3=te().f,hT=Ct(),R3=Ja(),vs=vT(),A3=jr(),N3=mT(),yT=!1,Fe=A3("meta"),M3=0,ds=function(e){_3(e,Fe,{value:{objectID:"O"+M3++,weakData:{}}})},j3=function(e,r){if(!P3(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!ps(e,Fe)){if(!vs(e))return"F";if(!r)return"E";ds(e)}return e[Fe].objectID},$3=function(e,r){if(!ps(e,Fe)){if(!vs(e))return!0;if(!r)return!1;ds(e)}return e[Fe].weakData},L3=function(e){return N3&&yT&&vs(e)&&!ps(e,Fe)&&ds(e),e},F3=function(){D3.enable=function(){},yT=!0;var e=hT.f,r=I3([].splice),t={};t[Fe]=1,e(t).length&&(hT.f=function(n){for(var i=e(n),o=0,u=i.length;o<u;o++)if(i[o]===Fe){r(i,o,1);break}return i},C3({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:R3.f}))},D3=gT.exports={enable:F3,fastKey:j3,getWeakData:$3,onFreeze:L3};k3[Fe]=!0});var xT=a((_Y,qT)=>{"use strict";var B3=x(),G3=_(),U3=ms(),W3=P(),H3=xe(),K3=pe(),V3=ii(),z3=N(),Y3=$(),J3=or(),Q3=_e(),X3=te().f,Z3=It().forEach,eB=U(),bT=ze(),rB=bT.set,tB=bT.getterFor;qT.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,i=e.indexOf("Weak")!==-1,o=n?"set":"add",u=G3[e],l=u&&u.prototype,c={},s;if(!eB||!z3(u)||!(i||l.forEach&&!W3(function(){new u().entries().next()})))s=t.getConstructor(r,e,n,o),U3.enable();else{s=r(function(p,d){rB(V3(p,f),{type:e,collection:new u}),J3(d)||K3(d,p[o],{that:p,AS_ENTRIES:n})});var f=s.prototype,v=tB(e);Z3(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(p){var d=p==="add"||p==="set";p in l&&!(i&&p==="clear")&&H3(f,p,function(m,h){var y=v(this).collection;if(!d&&i&&!Y3(m))return p==="get"?void 0:!1;var q=y[p](m===0?0:m,h);return d?this:q})}),i||X3(f,"size",{configurable:!0,get:function(){return v(this).collection.size}})}return Q3(s,e,!1,!0),c[e]=s,B3({global:!0,forced:!0},c),i||t.setStrong(s,e,n),s}});var wT=a((RY,ST)=>{"use strict";var nB=ke();ST.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:nB(e,n,r[n],t);return e}});var PT=a((AY,kT)=>{"use strict";var TT=Ye(),iB=Ln(),OT=wT(),aB=Y(),oB=ii(),uB=or(),sB=pe(),cB=Rn(),$i=An(),lB=Lo(),on=U(),ET=ms().fastKey,IT=ze(),CT=IT.set,hs=IT.getterFor;kT.exports={getConstructor:function(e,r,t,n){var i=e(function(s,f){oB(s,o),CT(s,{type:r,index:TT(null),first:null,last:null,size:0}),on||(s.size=0),uB(f)||sB(f,s[n],{that:s,AS_ENTRIES:t})}),o=i.prototype,u=hs(r),l=function(s,f,v){var p=u(s),d=c(s,f),m,h;return d?d.value=v:(p.last=d={index:h=ET(f,!0),key:f,value:v,previous:m=p.last,next:null,removed:!1},p.first||(p.first=d),m&&(m.next=d),on?p.size++:s.size++,h!=="F"&&(p.index[h]=d)),s},c=function(s,f){var v=u(s),p=ET(f),d;if(p!=="F")return v.index[p];for(d=v.first;d;d=d.next)if(d.key===f)return d};return OT(o,{clear:function(){for(var f=this,v=u(f),p=v.first;p;)p.removed=!0,p.previous&&(p.previous=p.previous.next=null),p=p.next;v.first=v.last=null,v.index=TT(null),on?v.size=0:f.size=0},delete:function(s){var f=this,v=u(f),p=c(f,s);if(p){var d=p.next,m=p.previous;delete v.index[p.index],p.removed=!0,m&&(m.next=d),d&&(d.previous=m),v.first===p&&(v.first=d),v.last===p&&(v.last=m),on?v.size--:f.size--}return!!p},forEach:function(f){for(var v=u(this),p=aB(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:v.first;)for(p(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!c(this,f)}}),OT(o,t?{get:function(f){var v=c(this,f);return v&&v.value},set:function(f,v){return l(this,f===0?0:f,v)}}:{add:function(f){return l(this,f=f===0?0:f,f)}}),on&&iB(o,"size",{configurable:!0,get:function(){return u(this).size}}),i},setStrong:function(e,r,t){var n=r+" Iterator",i=hs(r),o=hs(n);cB(e,r,function(u,l){CT(this,{type:n,target:u,state:i(u),kind:l,last:null})},function(){for(var u=o(this),l=u.kind,c=u.last;c&&c.removed;)c=c.previous;return!u.target||!(u.last=c=c?c.next:u.state.first)?(u.target=null,$i(void 0,!0)):$i(l==="keys"?c.key:l==="values"?c.value:[c.key,c.value],!1)},t?"entries":"values",!t,!0),lB(r)}}});var _T=a(()=>{"use strict";var fB=xT(),pB=PT();fB("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},pB)});var RT=a(()=>{"use strict";_T()});var NT=a((LY,AT)=>{"use strict";AT.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,i){return t[e](n,i)}}});var ae=a((FY,jT)=>{"use strict";var vB=W(),Li=NT(),MT=vB("Map");jT.exports={Map:MT,set:Li("set",2),get:Li("get",1),has:Li("has",1),remove:Li("delete",1),proto:MT.prototype}});var ys=a(()=>{"use strict";var dB=x(),mB=A(),hB=F(),yB=ur(),gB=pe(),Fi=ae(),$T=Z(),bB=P(),LT=Fi.Map,qB=Fi.has,xB=Fi.get,SB=Fi.set,wB=mB([].push),TB=$T||bB(function(){return LT.groupBy("ab",function(e){return e}).get("a").length!==1});dB({target:"Map",stat:!0,forced:$T||TB},{groupBy:function(r,t){yB(r),hB(t);var n=new LT,i=0;return gB(r,function(o){var u=t(o,i++);qB(n,u)?wB(xB(n,u),o):SB(n,u,[o])}),n}})});var J=a((GY,FT)=>{"use strict";var OB=Ke(),EB=TypeError;FT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new EB(OB(e)+" is not a map")}});var bs=a(()=>{"use strict";var CB=x(),IB=J(),gs=ae(),kB=Z(),PB=gs.get,_B=gs.has,RB=gs.set;CB({target:"Map",proto:!0,real:!0,forced:kB},{getOrInsert:function(r,t){return _B(IB(this),r)?PB(this,r):(RB(this,r,t),t)}})});var xs=a(()=>{"use strict";var AB=x(),NB=F(),MB=J(),qs=ae(),jB=Z(),$B=qs.get,LB=qs.has,FB=qs.set;AB({target:"Map",proto:!0,real:!0,forced:jB},{getOrInsertComputed:function(r,t){if(MB(this),NB(t),LB(this,r))return $B(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return FB(this,r,n),n}})});var BT=a((VY,DT)=>{"use strict";yr();RT();ys();bs();xs();Et();vr();var DB=z();DT.exports=DB.Map});var UT=a((zY,GT)=>{"use strict";var BB=BT();gr();GT.exports=BB});var Ss=a(()=>{"use strict";bs()});var ws=a(()=>{"use strict";xs()});var WT=a(()=>{"use strict";ys()});var KT=a((rJ,HT)=>{"use strict";var GB=UT();Ss();ws();WT();HT.exports=GB});var zT=a((tJ,VT)=>{"use strict";var UB=Y(),WB=X(),HB=re(),KB=pe();VT.exports=function(e,r,t){return function(i){var o=HB(i),u=arguments.length,l=u>1?arguments[1]:void 0,c=l!==void 0,s=c?UB(l,u>2?arguments[2]:void 0):void 0,f=new e,v=0;return KB(o,function(p){var d=c?s(p,v++):p;t?r(f,WB(d)[0],d[1]):r(f,d)}),f}}});var JT=a(()=>{"use strict";var VB=x(),YT=ae(),zB=zT();VB({target:"Map",stat:!0,forced:!0},{from:zB(YT.Map,YT.set,!0)})});var XT=a((aJ,QT)=>{"use strict";var YB=X();QT.exports=function(e,r,t){return function(){for(var i=new e,o=arguments.length,u=0;u<o;u++){var l=arguments[u];t?r(i,YB(l)[0],l[1]):r(i,l)}return i}}});var eO=a(()=>{"use strict";var JB=x(),ZT=ae(),QB=XT();JB({target:"Map",stat:!0,forced:!0},{of:QB(ZT.Map,ZT.set,!0)})});var tO=a(()=>{"use strict";var XB=x(),ZB=D(),e4=pe(),r4=N(),rO=F(),t4=ae().Map;XB({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=r4(this)?this:t4,i=new n;rO(t);var o=rO(i.set);return e4(r,function(u){ZB(o,i,t(u),u)}),i}})});var nO=a(()=>{"use strict";var n4=x(),i4=J(),a4=ae().remove;n4({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=i4(this),t=!0,n,i=0,o=arguments.length;i<o;i++)n=a4(r,arguments[i]),t=t&&n;return!!t}})});var aO=a(()=>{"use strict";var o4=x(),u4=J(),Ts=ae(),s4=Ts.get,c4=Ts.has,iO=Ts.set;o4({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=u4(this),i,o;return c4(n,r)?(i=s4(n,r),"update"in t&&(i=t.update(i,r,n),iO(n,r,i)),i):(o=t.insert(r,n),iO(n,r,o),o)}})});var uO=a((dJ,oO)=>{"use strict";var l4=D();oO.exports=function(e,r,t){for(var n=t?e:e.iterator,i=e.next,o,u;!(o=l4(i,n)).done;)if(u=r(o.value),u!==void 0)return u}});var he=a((mJ,sO)=>{"use strict";var f4=uO();sO.exports=function(e,r,t){return t?f4(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var cO=a(()=>{"use strict";var p4=x(),v4=Y(),d4=J(),m4=he();p4({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=d4(this),n=v4(r,arguments.length>1?arguments[1]:void 0);return m4(t,function(i,o){if(!n(i,o,t))return!1},!0)!==!1}})});var fO=a(()=>{"use strict";var h4=x(),y4=Y(),g4=J(),lO=ae(),b4=he(),q4=lO.Map,x4=lO.set;h4({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=g4(this),n=y4(r,arguments.length>1?arguments[1]:void 0),i=new q4;return b4(t,function(o,u){n(o,u,t)&&x4(i,u,o)}),i}})});var pO=a(()=>{"use strict";var S4=x(),w4=Y(),T4=J(),O4=he();S4({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=T4(this),n=w4(r,arguments.length>1?arguments[1]:void 0),i=O4(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return i&&i.value}})});var vO=a(()=>{"use strict";var E4=x(),C4=Y(),I4=J(),k4=he();E4({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=I4(this),n=C4(r,arguments.length>1?arguments[1]:void 0),i=k4(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return i&&i.key}})});var mO=a((TJ,dO)=>{"use strict";dO.exports=function(e,r){return e===r||e!==e&&r!==r}});var hO=a(()=>{"use strict";var P4=x(),_4=mO(),R4=J(),A4=he();P4({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return A4(R4(this),function(t){if(_4(t,r))return!0},!0)===!0}})});var yO=a(()=>{"use strict";var N4=x(),M4=J(),j4=he();N4({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=j4(M4(this),function(n,i){if(n===r)return{key:i}},!0);return t&&t.key}})});var bO=a(()=>{"use strict";var $4=x(),L4=Y(),F4=J(),gO=ae(),D4=he(),B4=gO.Map,G4=gO.set;$4({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=F4(this),n=L4(r,arguments.length>1?arguments[1]:void 0),i=new B4;return D4(t,function(o,u){G4(i,n(o,u,t),o)}),i}})});var xO=a(()=>{"use strict";var U4=x(),W4=Y(),H4=J(),qO=ae(),K4=he(),V4=qO.Map,z4=qO.set;U4({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=H4(this),n=W4(r,arguments.length>1?arguments[1]:void 0),i=new V4;return K4(t,function(o,u){z4(i,u,n(o,u,t))}),i}})});var SO=a(()=>{"use strict";var Y4=x(),J4=J(),Q4=pe(),X4=ae().set;Y4({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=J4(this),n=arguments.length,i=0;i<n;)Q4(arguments[i++],function(o,u){X4(t,o,u)},{AS_ENTRIES:!0});return t}})});var wO=a(()=>{"use strict";var Z4=x(),eG=F(),rG=J(),tG=he(),nG=TypeError;Z4({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=rG(this),n=arguments.length<2,i=n?void 0:arguments[1];if(eG(r),tG(t,function(o,u){n?(n=!1,i=o):i=r(i,o,u,t)}),n)throw new nG("Reduce of empty map with no initial value");return i}})});var TO=a(()=>{"use strict";var iG=x(),aG=Y(),oG=J(),uG=he();iG({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=oG(this),n=aG(r,arguments.length>1?arguments[1]:void 0);return uG(t,function(i,o){if(n(i,o,t))return!0},!0)===!0}})});var EO=a(()=>{"use strict";var sG=x(),OO=F(),cG=J(),Os=ae(),lG=TypeError,fG=Os.get,pG=Os.has,vG=Os.set;sG({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=cG(this),i=arguments.length;OO(t);var o=pG(n,r);if(!o&&i<3)throw new lG("Updating absent value");var u=o?fG(n,r):OO(i>2?arguments[2]:void 0)(r,n);return vG(n,r,t(u,r,n)),n}})});var Cs=a((BJ,CO)=>{"use strict";var Di=D(),Es=F(),Bi=N(),dG=X(),mG=TypeError;CO.exports=function(r,t){var n=dG(this),i=Es(n.get),o=Es(n.has),u=Es(n.set),l=arguments.length>2?arguments[2]:void 0,c;if(!Bi(t)&&!Bi(l))throw new mG("At least one callback required");return Di(o,n,r)?(c=Di(i,n,r),Bi(t)&&(c=t(c),Di(u,n,r,c))):Bi(l)&&(c=l(),Di(u,n,r,c)),c}});var IO=a(()=>{"use strict";var hG=x(),yG=Cs();hG({target:"Map",proto:!0,real:!0,forced:!0},{upsert:yG})});var kO=a(()=>{"use strict";var gG=x(),bG=Cs();gG({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:bG})});var _O=a((KJ,PO)=>{"use strict";var qG=KT();JT();eO();tO();nO();aO();cO();fO();pO();vO();hO();Ss();ws();yO();bO();xO();SO();wO();TO();EO();IO();kO();PO.exports=qG});var AO=a((VJ,RO)=>{"use strict";RO.exports=_O()});var MO=a(()=>{"use strict";var xG=x(),SG=ct(),wG=ka().indexOf,TG=Ju(),Is=SG([].indexOf),NO=!!Is&&1/Is([1],1,-0)<0,OG=NO||!TG("indexOf");xG({target:"Array",proto:!0,forced:OG},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return NO?Is(this,r,t)||0:wG(this,r,t)}})});var $O=a((JJ,jO)=>{"use strict";MO();var EG=oe();jO.exports=EG("Array","indexOf")});var FO=a((QJ,LO)=>{"use strict";var CG=G(),IG=$O(),ks=Array.prototype;LO.exports=function(e){var r=e.indexOf;return e===ks||CG(ks,e)&&r===ks.indexOf?IG:r}});var BO=a((XJ,DO)=>{"use strict";var kG=FO();DO.exports=kG});var UO=a((ZJ,GO)=>{"use strict";var PG=BO();GO.exports=PG});var HO=a((eQ,WO)=>{"use strict";var _G=UO();WO.exports=_G});var VO=a((rQ,KO)=>{"use strict";KO.exports=HO()});var lE=a(()=>{"use strict";var $G=x(),LG=re(),cE=Cn(),FG=P(),DG=FG(function(){cE(1)});$G({target:"Object",stat:!0,forced:DG},{keys:function(r){return cE(LG(r))}})});var pE=a((oX,fE)=>{"use strict";lE();var BG=z();fE.exports=BG.Object.keys});var dE=a((uX,vE)=>{"use strict";var GG=pE();vE.exports=GG});var hE=a((sX,mE)=>{"use strict";var UG=dE();mE.exports=UG});var gE=a((cX,yE)=>{"use strict";var WG=hE();yE.exports=WG});var qE=a((lX,bE)=>{"use strict";bE.exports=gE()});var SE=a((fX,xE)=>{xE.exports=qE()});var ar="";function Hs(e){ar=e.replace(/\/+$/,"")}async function Pr(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function Ks(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${ar}/comments?${t}`);return await Pr(n,"Failed to fetch comments"),(await n.json()).data}async function Vi({uri:e,document:r,quote:t,prefix:n,suffix:i,body:o,author:u,parent:l}){let c={quote:t,prefix:n,suffix:i,body:o,author:u,parent:l};r?c.document=r:c.uri=e;let s=await fetch(`${ar}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});return await Pr(s,"Failed to create comment"),s.json()}async function Vs(e,{body:r}){let t=await fetch(`${ar}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:r})});return await Pr(t,"Failed to update comment"),t.json()}async function zs(e,r){let t=await fetch(`${ar}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});return await Pr(t,"Failed to update comment status"),t.json()}async function Ys(e){let r=await fetch(`${ar}/comments/${e}`,{method:"DELETE"});await Pr(r,"Failed to delete comment")}async function Js(e,r){let t=await fetch(`${ar}/documents/${e}/export?format=${encodeURIComponent(r)}`);return await Pr(t,"Failed to export annotations"),t}var $L=g(Gr(),1),LL=g(Mn(),1),FL=g(Qn(),1),DL=g(Xn(),1),BL=g(Zn(),1);var wu=g(tt(),1);function Hy(e,r,t,n,i,o,u){try{var l=e[o](u),c=l.value}catch(s){return void t(s)}l.done?r(c):wu.default.resolve(c).then(n,i)}function wr(e){return function(){var r=this,t=arguments;return new wu.default(function(n,i){var o=e.apply(r,t);function u(c){Hy(o,n,i,u,l,"next",c)}function l(c){Hy(o,n,i,u,l,"throw",c)}u(void 0)})}}function Bt(e,r){this.v=e,this.k=r}function Ze(e){return new Bt(e,0)}var Tu=g(tt(),1),rg=g(Se(),1),tg=g(di(),1);function Te(e){return function(){return new Gt(e.apply(this,arguments))}}function Gt(e){var r,t;function n(o,u){try{var l=e[o](u),c=l.value,s=c instanceof Bt;Tu.default.resolve(s?c.v:c).then(function(f){if(s){var v=o==="return"?"return":"next";if(!c.k||f.done)return n(v,f);f=e[v](f).value}i(l.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){i("throw",f)}}function i(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new Tu.default(function(l,c){var s={key:o,arg:u,resolve:l,reject:c,next:null};t?t=t.next=s:(r=t=s,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Gt.prototype[typeof rg.default=="function"&&tg.default||"@@asyncIterator"]=function(){return this},Gt.prototype.next=function(e){return this._invoke("next",e)},Gt.prototype.throw=function(e){return this._invoke("throw",e)},Gt.prototype.return=function(e){return this._invoke("return",e)};var GL=g(se(),1),UL=g(Eq(),1);function ce(e){var r,t=ML(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function ML(e){return"startContainer"in e}function rr(e){if(jL(e))return e;var r=e,t=ce(r).createRange();return t.selectNodeContents(r),t}function jL(e){return"startContainer"in e}var Lq=g($q(),1);function Fq(e){if((0,Lq.default)(e))return e}var Xq=g(Se(),1),Zq=g(Ro(),1),ex=g(Vu(),1);function rx(e,r){var t=e==null?null:typeof Xq.default<"u"&&(0,Zq.default)(e)||e["@@iterator"];if(t!=null){var n,i,o,u,l=[],c=!0,s=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&((0,ex.default)(l).call(l,n.value),l.length!==r);c=!0);}catch(f){s=!0,i=f}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(s)throw i}}return l}}var tx=g(Sa(),1),nx=g(za(),1);function ki(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function zu(e,r){if(e){var t;if(typeof e=="string")return ki(e,r);var n=(0,tx.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,nx.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ki(e,r):void 0}}function ix(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $e(e,r){return Fq(e)||rx(e,r)||zu(e,r)||ix()}var ax=g(Se(),1),ox=g(di(),1),ux=g(Jt(),1),en=g(tt(),1);function it(e){var r,t,n,i=2;for(typeof ax.default<"u"&&(t=ox.default,n=ux.default);i--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Pi(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Pi(e){function r(t){if(Object(t)!==t)return en.default.reject(new TypeError(t+" is not an object."));var n=t.done;return en.default.resolve(t.value).then(function(i){return{value:i,done:n}})}return Pi=function(n){this.s=n,this.n=n.next},Pi.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var i=this.s.return;return i===void 0?en.default.resolve({value:n,done:!0}):r(i.apply(this.s,arguments))},throw:function(n){var i=this.s.return;return i===void 0?en.default.reject(n):r(i.apply(this.s,arguments))}},new Pi(e)}var hD=g(se(),1);var lD=g(se(),1),fD=g(Sx(),1),pD=g(Tx(),1),vD=g(Kx(),1),dD=g(fS(),1),mD=g(es(),1);var Rs=g(se(),1);var c3=g(se(),1);var ts=g(se(),1);function rn(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function OS(e,r){return rn(e.startChunk,r.startChunk)&&rn(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function Tr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var rs=g(Ht(),1);var tn=g(Se(),1),ES=g(Jt(),1);function Le(e){"@babel/helpers - typeof";return Le=typeof tn.default=="function"&&typeof ES.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof tn.default=="function"&&r.constructor===tn.default&&r!==tn.default.prototype?"symbol":typeof r},Le(e)}var LS=g($S(),1);function FS(e,r){if(Le(e)!="object"||!e)return e;var t=e[LS.default];if(t!==void 0){var n=t.call(e,r||"default");if(Le(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function _i(e){var r=FS(e,"string");return Le(r)=="symbol"?r:r+""}function DS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,rs.default)(e,_i(n.key),n)}}function nn(e,r,t){return r&&DS(e.prototype,r),t&&DS(e,t),(0,rs.default)(e,"prototype",{writable:!1}),e}var BS=g(Ht(),1);function Or(e,r,t){return(r=_i(r))in e?(0,BS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var GS=g(Gr(),1);var Ri="Iterator exhausted before seek ended.",an=function(){function e(r){Tr(this,e),this.chunker=r,Or(this,"currentChunkPosition",0),Or(this,"offsetInChunk",0),this.seekTo(0)}return nn(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,i)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!rn(this.currentChunk,n);){var v=this._readToPreviousChunk(),p=$e(v,2),d=p[0],m=p[1];if(t&&(u=d+u),m===null)throw new RangeError(Ri)}else for(;!rn(this.currentChunk,n);){var l=this._readToNextChunk(),c=$e(l,2),s=c[0],f=c[1];if(t&&(u+=s),f===null)throw new RangeError(Ri)}var h=this.currentChunkPosition+i;if(!t)this.seekTo(h);else return h>=this.position?u+=this.readTo(h):h>=o?(this.seekTo(h),u=(0,GS.default)(u).call(u,0,h-o)):(this.seekTo(o),u=this.readTo(h)),u}},{key:"_readOrSeekTo",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var l=this.currentChunkPosition+this.currentChunk.data.length;if(l<=n){var c=this._readToNextChunk(),s=$e(c,2),f=s[0],v=s[1];if(t&&(u+=f),v===null){if(this.position===n||o)break;throw new RangeError(Ri)}}else{var p=i?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,p)),this.offsetInChunk=p,i&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=i?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var m=this._readToPreviousChunk(),h=$e(m,2),y=h[0],q=h[1];if(t&&(u=y+u),q===null){if(o)break;throw new RangeError(Ri)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,i=this.chunker.nextChunk();return i!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,i]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function WS(e,r){return ns.apply(this,arguments)}function ns(){return ns=wr(ts.default.mark(function e(r,t){var n,i,o,u,l,c,s,f,v,p,d,m,h,y,q,b,I,C,S,T,w,E,j=arguments;return ts.default.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:n=j.length>2&&j[2]!==void 0?j[2]:{},i=n.minimalContext,o=i===void 0?!1:i,u=n.minimumQuoteLength,l=u===void 0?0:u,c=n.maxWordLength,s=c===void 0?50:c,f=new an(t()),v=new an(t()),f.seekToChunk(r.startChunk,r.startIndex),p=f.readToChunk(r.endChunk,r.endIndex),d="",m="",h=function(){return d.length+p.length+m.length},h()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),y=Math.floor((l-h())/2),d=f.read(-y,!1,!0)+d,h()<l&&(f.seekToChunk(r.endChunk,r.endIndex+m.length),q=l-h(),m=m+f.read(q,!1,!0),h()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),b=l-h(),d=f.read(-b,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=Ai(f,s,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+m.length),m=m+Ai(f,s,!1));case 11:return I={type:"TextQuoteSelector",exact:p,prefix:d,suffix:m},C=Ni(I)(t()),k.next=16,C.next();case 16:if(S=k.sent,!(!S.done&&OS(S.value,r))){k.next=21;break}return k.next=20,C.next();case 20:S=k.sent;case 21:if(!S.done){k.next=23;break}return k.abrupt("return",I);case 23:if(T=S.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),v.seekToChunk(T.startChunk,T.startIndex-d.length),w=US(f,v,!0),w!==void 0&&!o&&(w=Ai(f,s,!0)+w),f.seekToChunk(r.endChunk,r.endIndex+m.length),v.seekToChunk(T.endChunk,T.endIndex+m.length),E=US(f,v,!1),E!==void 0&&!o&&(E=E+Ai(f,s,!1)),!o){k.next=44;break}if(!(w!==void 0&&(E===void 0||w.length<=E.length))){k.next=37;break}d=w+d,k.next=42;break;case 37:if(E===void 0){k.next=41;break}m=m+E,k.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:k.next=46;break;case 44:w!==void 0&&(d=w+d),E!==void 0&&(m=m+E);case 46:k.next=11;break;case 48:case"end":return k.stop()}},e)})),ns.apply(this,arguments)}function US(e,r,t){for(var n="";;){var i=void 0;try{i=e.read(t?-1:1)}catch{return}n=t?i+n:n+i;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(i!==o)return n}}function Ai(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var i=void 0;try{i=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(xD(i)){e.seekBy(t?1:-1);break}n=t?i+n:n+i}return n}function xD(e){return/^\s+$/.test(e)}var _w=g(Gr(),1),Rw=g(Mn(),1),Aw=g(Qn(),1),Nw=g(Xn(),1),Mw=g(Zn(),1);var os=g(se(),1),jw=g(vw(),1),$w=g(Iw(),1);function kw(e,r){var t;if(typeof Aw.default>"u"||(0,Nw.default)(e)==null){if(Array.isArray(e)||(t=n3(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(s){throw s},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,l;return{s:function(){t=(0,Mw.default)(e)},n:function(){var s=t.next();return o=s.done,s},e:function(s){u=!0,l=s},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw l}}}}function n3(e,r){var t;if(e){if(typeof e=="string")return Pw(e,r);var n=(0,_w.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,Rw.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pw(e,r)}}function Pw(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Ni(e){return function(){var r=Te(os.default.mark(function n(i){var o,u,l,c,s,f,v,p,d,m,h,y,q,b,I,C,S,T,w,E,j,ge,k,ee,be,Q,L;return os.default.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:o=e.exact,u=e.prefix||"",l=e.suffix||"",c=u+o+l,s=[],f=!0;case 6:v=i.currentChunk,p=v.data,d=[],m=kw(s),O.prev=10,m.s();case 12:if((h=m.n()).done){O.next=27;break}if(y=h.value,q=y.charactersMatched,y.endChunk===void 0&&(b=u.length+o.length-q,b<=p.length&&(y.endChunk=v,y.endIndex=b)),y.startChunk===void 0&&(I=u.length-q,(I<p.length||y.endChunk!==void 0)&&(y.startChunk=v,y.startIndex=I)),C=c.length-q,!(C<=p.length)){O.next=24;break}if(!(0,jw.default)(p).call(p,c.substring(q))){O.next=22;break}return O.next=22,y;case 22:O.next=25;break;case 24:p===c.substring(q,q+p.length)&&(y.charactersMatched+=p.length,d.push(y));case 25:O.next=12;break;case 27:O.next=32;break;case 29:O.prev=29,O.t0=O.catch(10),m.e(O.t0);case 32:return O.prev=32,m.f(),O.finish(32);case 35:if(s=d,!(c.length<=p.length)){O.next=49;break}S=0;case 38:if(!(S<=p.length)){O.next=49;break}if(T=p.indexOf(c,S),T!==-1){O.next=42;break}return O.abrupt("break",49);case 42:if(S=T+1,!(T===0&&c.length===0&&!f)){O.next=45;break}return O.abrupt("continue",38);case 45:return O.next=47,{startChunk:v,startIndex:T+u.length,endChunk:v,endIndex:T+u.length+o.length};case 47:O.next=38;break;case 49:for(w=[],E=Math.max(p.length-c.length+1,0),j=function(We){var Us=p[We];w=(0,$w.default)(w).call(w,function(YE){return Us===c[We-YE]}),Us===c[0]&&w.push(We)},ge=E;ge<p.length;ge++)j(ge);k=kw(w);try{for(k.s();!(ee=k.n()).done;)be=ee.value,Q=p.length-be,L={charactersMatched:Q},Q>=u.length+o.length&&(L.endChunk=v,L.endIndex=be+u.length+o.length),(Q>u.length||L.endChunk!==void 0)&&(L.startChunk=v,L.startIndex=be+u.length),s.push(L)}catch(kr){k.e(kr)}finally{k.f()}f=!1;case 56:if(i.nextChunk()!==null){O.next=6;break}case 57:case"end":return O.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var u3=g(se(),1);var i3=g(Gr(),1),a3=g(es(),1);var s3=g(se(),1);var sn=g(rT(),1);var nT=g(hi(),1),iT=g(Ht(),1);var cs=g(yi(),1),tT=g(Wt(),1);function tr(e,r){var t;return tr=cs.default?(0,tT.default)(t=cs.default).call(t):function(n,i){return n.__proto__=i,n},tr(e,r)}function ls(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,nT.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,iT.default)(e,"prototype",{writable:!1}),r&&tr(e,r)}function aT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oT(e,r){if(r&&(Le(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return aT(e)}var uT=g(yi(),1),sT=g(Wt(),1),fs=g(mi(),1);function Er(e){var r;return Er=uT.default?(0,sT.default)(r=fs.default).call(r):function(t){return t.__proto__||(0,fs.default)(t)},Er(e)}var _s=g(AO(),1),rE=g(hi(),1);var zO=g(VO(),1);function YO(e){try{var r;return(0,zO.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var QO=g(Mi(),1),XO=g(Vu(),1),ZO=g(Wt(),1);var JO=g(Mi(),1);function Ps(){try{var e=!Boolean.prototype.valueOf.call((0,JO.default)(Boolean,[],function(){}))}catch{}return(Ps=function(){return!!e})()}function eE(e,r,t){if(Ps())return QO.default.apply(null,arguments);var n=[null];(0,XO.default)(n).apply(n,r);var i=new((0,ZO.default)(e).apply(e,n));return t&&tr(i,t.prototype),i}function un(e){var r=typeof _s.default=="function"?new _s.default:void 0;return un=function(n){if(n===null||!YO(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,i)}function i(){return eE(n,arguments,Er(this).constructor)}return i.prototype=(0,rE.default)(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),tr(i,n)},un(e)}function iE(e,r){var t=ce(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i=tE(e.startContainer,e.startOffset),o=$e(i,2),u=o[0],l=o[1];for(n.currentNode=u;l===u.length&&n.nextNode();)u=n.currentNode,l=0;e.setStart(u,l);var c=tE(e.endContainer,e.endOffset),s=$e(c,2),f=s[0],v=s[1];for(n.currentNode=f;v===0&&n.previousNode();)f=n.currentNode,v=f.length;return e.setEnd(f,v),e}function tE(e,r){var t;if(nE(e))return[e,r];var n;if(RG(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(nE(n))return[n,0];var i=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=i.createTreeWalker(i,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function nE(e){return e.nodeType===Node.TEXT_NODE}function RG(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function oE(e){var r=AG();return function(){var n=Er(e),i;if(r){var o=Er(this).constructor;i=(0,sn.default)(n,arguments,o)}else i=n.apply(this,arguments);return oT(this,i)}}function AG(){if(typeof Reflect>"u"||!sn.default||sn.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,sn.default)(Boolean,[],function(){})),!0}catch{return!1}}var Gi=function(e){ls(t,e);var r=oE(t);function t(n){return Tr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(un(TypeError)),NG=function(e){ls(t,e);var r=oE(t);function t(n){return Tr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(un(TypeError)),Cr=function(){function e(r){var t=this;if(Tr(this,e),Or(this,"scope",void 0),Or(this,"iter",void 0),this.scope=rr(r),this.iter=ce(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!aE(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Gi}}return nn(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!aE(t))throw new Gi;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new NG;var n=t===this.scope.startContainer?this.scope.startOffset:0,i=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:i,data:t.data.substring(n,i),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=iE(t,this.scope),i=this.nodeToChunk(n.startContainer),o=n.startOffset-i.startOffset,u=this.nodeToChunk(n.endContainer),l=n.endOffset-u.startOffset;return{startChunk:i,startIndex:o,endChunk:u,endIndex:l}}},{key:"chunkRangeToRange",value:function(t){var n=ce(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function aE(e){return e.nodeType===Node.TEXT_NODE}function uE(e,r){return As.apply(this,arguments)}function As(){return As=wr(Rs.default.mark(function e(r,t){var n,i,o,u=arguments;return Rs.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},i=rr(t??ce(r)),o=new Cr(i),c.next=5,WS(o.rangeToChunkRange(r),function(){return new Cr(i)},n);case 5:return c.abrupt("return",c.sent);case 6:case"end":return c.stop()}},e)})),As.apply(this,arguments)}var Ns=g(se(),1);function sE(e){var r=Ni(e);return function(){var t=Te(Ns.default.mark(function i(o){var u,l,c,s,f,v,p,d;return Ns.default.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:h.prev=0,u=new Cr(o),h.next=11;break;case 4:if(h.prev=4,h.t0=h.catch(0),!(h.t0 instanceof Gi)){h.next=10;break}return h.abrupt("return");case 10:throw h.t0;case 11:l=!0,c=!1,h.prev=13,f=it(r(u));case 15:return h.next=17,Ze(f.next());case 17:return v=h.sent,l=v.done,h.next=21,Ze(v.value);case 21:if(p=h.sent,l){h.next=29;break}return d=p,h.next=26,u.chunkRangeToRange(d);case 26:l=!0,h.next=15;break;case 29:h.next=35;break;case 31:h.prev=31,h.t1=h.catch(13),c=!0,s=h.t1;case 35:if(h.prev=35,h.prev=36,!(!l&&f.return!=null)){h.next=40;break}return h.next=40,Ze(f.return());case 40:if(h.prev=40,!c){h.next=43;break}throw s;case 43:return h.finish(40);case 44:return h.finish(35);case 45:case"end":return h.stop()}},i,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(i){return t.apply(this,arguments)}return n}()}var MG=g(se(),1);var jG=g(se(),1);var HG=g(SE(),1),KG=g(Gr(),1),VG=g(Mn(),1),zG=g(Qn(),1),YG=g(Xn(),1),JG=g(Zn(),1);async function wE(e,r){let t=await uE(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function Ui(e,r){let t=sE({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var at="fb-highlight",TE="fb-highlight-active";var cn=null;function EE(e){cn=e}function Wi(e,r){let t=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let n=OE(e,r);t.push(n)}else{let n=XG(e);for(let i=0;i<n.length;i++){let o=n[i],u=document.createRange();o===e.startContainer?(u.setStart(o,e.startOffset),u.setEnd(o,o.textContent.length)):o===e.endContainer?(u.setStart(o,0),u.setEnd(o,e.endOffset)):u.selectNodeContents(o),u.collapsed||t.push(OE(u,r))}}return t}function OE(e,r){let t=e.commonAncestorContainer;for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;let n=t,i=!1,o=null;for(;n;){if(n.tagName==="foreignObject"){i=!1;break}n.tagName==="text"&&n instanceof SVGElement&&(i=!0),n.tagName==="svg"&&(o=n),n=n.parentElement}if(i&&o)return QG(e,r,o);let u=document.createElement("mark");u.className=at,u.dataset.commentId=r,u.style.backgroundColor="rgba(255, 212, 0, 0.35)",u.style.cursor="pointer",u.style.borderRadius="2px",u.addEventListener("click",()=>{cn&&cn(r)});try{e.surroundContents(u)}catch(l){return console.warn("[feedback-layer] Failed to create highlight:",l),null}return u}function QG(e,r,t){try{let n=e.getClientRects();if(n.length===0)return null;let i="http://www.w3.org/2000/svg",o=t.getScreenCTM();if(!o)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let u=e.commonAncestorContainer;for(;u&&u.nodeType!==Node.ELEMENT_NODE;)u=u.parentNode;let l=u,c=null;for(;l&&l!==t;){if(l.tagName==="text"){c=l.parentElement;break}l=l.parentElement}let s=c||t,f=o;s!==t&&s.getScreenCTM&&(f=s.getScreenCTM());let v=document.createElementNS(i,"g");v.setAttribute("class",at),v.setAttribute("data-comment-id",r),v.style.cursor="pointer";for(let y=0;y<n.length;y++){let q=n[y],b=document.createElementNS(i,"rect"),I=t.createSVGPoint();I.x=q.left,I.y=q.top;let C=I.matrixTransform(f.inverse()),S=q.width/f.a,T=q.height/f.d;b.setAttribute("x",C.x),b.setAttribute("y",C.y),b.setAttribute("width",S),b.setAttribute("height",T),b.setAttribute("fill","#ffd400"),b.setAttribute("fill-opacity","0.35"),b.setAttribute("rx","2"),b.setAttribute("ry","2"),b.style.pointerEvents="none",v.appendChild(b)}s&&s!==t?s.appendChild(v):t.appendChild(v);let p=e.commonAncestorContainer;for(;p&&p.nodeType!==Node.ELEMENT_NODE;)p=p.parentNode;let d=new Set,m=p;for(;m&&m!==t;)m.tagName==="text"&&m instanceof SVGElement&&(d.add(m),m.querySelectorAll("tspan").forEach(q=>d.add(q))),m=m.parentElement;let h=y=>{y.preventDefault(),y.stopPropagation(),cn&&cn(r)};return d.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",h),y.dataset.fbCommentId=r}),v}catch(n){return console.warn("[feedback-layer] Failed to create SVG highlight:",n),null}}function Ms(e){document.querySelectorAll(`.${at}[data-comment-id="${e}"]`).forEach(n=>{let i=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)i.removeChild(n);else{for(;n.firstChild;)i.insertBefore(n.firstChild,n);i.removeChild(n),i.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function CE(){document.querySelectorAll(`.${at}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function Hi(e){document.querySelectorAll(`.${at}`).forEach(r=>{let t=r.dataset.commentId===e,n="rgba(255, 180, 0, 0.55)",i="rgba(255, 212, 0, 0.35)";t?r.classList.add(TE):r.classList.remove(TE),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(u=>{u.setAttribute("fill",t?n:i)}):r.style.backgroundColor=t?n:i})}function IE(e){let r=document.querySelector(`.${at}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function XG(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let i=document.createRange();return i.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,i)<0&&e.compareBoundaryPoints(Range.START_TO_END,i)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function kE(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,i)=>{let o=[`**${i+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let l of u)o.push(`  - **[${l.author}]** (reply): ${l.body}`);return o.join(`
`)}).join(`

`)}function PE(e,r){let t=kE(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(i=>!i.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function nr(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var ZG=`
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
`,_E=null,RE=null;function AE(e,r){RE=e,_E=r,eU()}function eU(){let e=document.createElement("style");e.textContent=ZG,document.head.appendChild(e)}function NE(){let e=_E(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let i=document.createElement("button");i.className="hf-modal-close",i.textContent="\xD7",i.addEventListener("click",()=>r.remove()),n.appendChild(i);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",v=>{v.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let l=document.querySelector(RE.contentSelector||"body").innerHTML,c=PE(l,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${c.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${nr(c)}</textarea>
  `;let s=document.createElement("button");s.className="hf-btn hf-btn-primary",s.textContent="Copy Prompt",s.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c),s.textContent="Copied!"}catch{s.textContent="Copy failed"}setTimeout(()=>s.textContent="Copy Prompt",2e3)}),u.appendChild(s);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function ME(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function jE(e,r){return e.length>r?e.slice(0,r)+"...":e}function $E(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var ln=null;function FE(e){ln=document.createElement("div"),ln.className="fb-toast-container",e.appendChild(ln)}function De(e,r="success"){if(!ln)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>LE(t)),t.appendChild(o)}ln.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>LE(t),r==="error"?8e3:4e3)}function LE(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}var rU=320,BE="feedback-layer-commenter",V=null,Ge=null,Be=null,js=null,GE=null,Ls=null,Fs=null,Ds=null,Bs=null,$s=null,Gs=!1,UE=[],WE=new Set;function ot(){return localStorage.getItem(BE)||""}function HE({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:i,onExport:o}){GE=e,Ls=r,Fs=t,Ds=n,Bs=i,$s=o,aU(),V=document.createElement("div"),V.className="fb-sidebar fb-sidebar-collapsed",V.innerHTML=`
    <div class="fb-sidebar-header">
      <strong>Feedback</strong>
      <div class="fb-sidebar-header-actions">
        <div class="fb-export-wrapper">
          <button class="fb-export-btn" title="Export annotations">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </button>
          <div class="fb-export-dropdown" style="display:none">
            <button class="fb-export-option" data-format="json">JSON</button>
            <button class="fb-export-option" data-format="csv">CSV</button>
            <button class="fb-export-option" data-format="pdf">PDF</button>
          </div>
        </div>
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
               value="${nr(ot())}">
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
  `;let u=document.createElement("button");u.className="fb-sidebar-tab",u.textContent="Feedback",u.addEventListener("click",()=>fn()),document.body.appendChild(u),document.body.appendChild(V),FE(V),Ge=V.querySelector(".fb-comment-list"),Be=V.querySelector(".fb-form-section");let l=V.querySelector(".fb-name-input");l.addEventListener("input",()=>{localStorage.setItem(BE,l.value.trim())});let c=V.querySelector(".fb-export-btn"),s=V.querySelector(".fb-export-dropdown");c.addEventListener("click",d=>{d.stopPropagation();let m=s.style.display!=="none";s.style.display=m?"none":""}),s.querySelectorAll(".fb-export-option").forEach(d=>{d.addEventListener("click",m=>{m.stopPropagation(),s.style.display="none",$s&&$s(d.dataset.format)})}),document.addEventListener("click",()=>{s.style.display="none"}),V.querySelector(".fb-ai-btn").addEventListener("click",()=>NE()),V.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>tU());let p=V.querySelector(".fb-show-resolved-cb");p.addEventListener("change",()=>{Gs=p.checked,ir(UE,WE)})}function fn(){V.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden")}function tU(){V.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden")}function KE(e){if(fn(),!ot()){let n=V.querySelector(".fb-name-input");n.style.outline="2px solid #ef4444",setTimeout(()=>n.style.outline="",2e3)}js=e,Be.style.display="",Be.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${nr(jE(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `;let r=Be.querySelector(".fb-form-textarea");r.focus();let t=()=>{if(!ot()){let i=V.querySelector(".fb-name-input");i.focus(),i.style.outline="2px solid #ef4444",setTimeout(()=>i.style.outline="",2e3);return}let n=r.value.trim();n&&(GE({comment:n,commenter:ot()}),Be.style.display="none",js=null)};Be.querySelector(".fb-submit-btn").addEventListener("click",t),r.addEventListener("keydown",n=>{n.key==="Enter"&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),t())}),Be.querySelector(".fb-cancel-btn").addEventListener("click",()=>{Be.style.display="none",js=null}),Be.scrollIntoView({behavior:"smooth",block:"nearest"})}function ir(e,r=new Set,t=new Map){UE=e,WE=r,Ge.innerHTML="";let{topLevel:n,repliesByParent:i}=ME(e),o=n.slice().sort((s,f)=>{let v=t.get(s.id),p=t.get(f.id);return!v||!p?0:v.compareBoundaryPoints(Range.START_TO_START,p)}),u=o.filter(s=>{let f=r.has(s.id),v=s.status==="closed";return f||v&&Gs}),l=Gs?u:u.filter(s=>s.status!=="closed");if(o.length===0){Ge.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let c=o.filter(s=>!r.has(s.id)&&s.status!=="closed").length;if(l.length===0){c>0?Ge.innerHTML=`<div class="fb-empty">
        ${u.length} comment(s) resolved.
        ${c>0?`<br>${c} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:Ge.innerHTML=`<div class="fb-empty">All ${o.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let s of l){let f=document.createElement("div");f.className="fb-thread",f.appendChild(DE(s,!1));let v=i.get(s.id)||[];for(let d of v)f.appendChild(DE(d,!0));let p=document.createElement("button");p.className="fb-reply-btn",p.textContent="Reply",p.addEventListener("click",d=>{d.stopPropagation(),nU(s.id,f,p)}),f.appendChild(p),Ge.appendChild(f)}}function DE(e,r){let t=e.status==="closed",n=document.createElement("div");return n.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":""),n.dataset.id=e.id,n.innerHTML=`
    <div class="fb-cmt-body">${nr(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${nr(e.author)}</span>
      <span class="fb-cmt-time">${$E(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
  `,r||(n.addEventListener("click",i=>{i.target.closest(".fb-cmt-delete")||i.target.closest(".fb-cmt-resolve")||i.target.closest(".fb-cmt-edit")||(Hi(e.id),IE(e.id),Ge.querySelectorAll(".fb-cmt-card").forEach(o=>o.classList.remove("fb-cmt-active")),n.classList.add("fb-cmt-active"))}),n.querySelector(".fb-cmt-resolve").addEventListener("click",i=>{i.stopPropagation(),Fs&&Fs(e.id,!t)})),n.querySelector(".fb-cmt-edit").addEventListener("click",i=>{i.stopPropagation(),iU(e,n)}),n.querySelector(".fb-cmt-delete").addEventListener("click",i=>{i.stopPropagation(),Ls&&Ls(e.id)}),n}function nU(e,r,t){fn();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let i=document.createElement("div");i.className="fb-reply-form",i.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!ot()){let c=V.querySelector(".fb-name-input");c.focus(),c.style.outline="2px solid #ef4444",setTimeout(()=>c.style.outline="",2e3);return}let l=i.querySelector("textarea").value.trim();l&&(Ds&&Ds({parent_id:e,comment:l,commenter:ot()}),i.remove(),t.style.display="")};i.querySelector(".fb-reply-submit").addEventListener("click",o);let u=i.querySelector("textarea");u.addEventListener("keydown",l=>{l.key==="Enter"&&(l.metaKey||l.ctrlKey)&&(l.preventDefault(),o())}),i.querySelector(".fb-reply-cancel").addEventListener("click",()=>{i.remove(),t.style.display=""}),r.insertBefore(i,t),u.focus()}function iU(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${nr(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let i=t.querySelector("textarea");i.focus(),i.setSelectionRange(i.value.length,i.value.length);let o=()=>{let u=i.value.trim();u&&Bs&&Bs(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),i.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function VE(e){let r=Ge.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(Ge.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function aU(){let e=document.createElement("style");e.textContent=`
    .fb-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: ${rU}px;
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
    .fb-export-wrapper {
      position: relative;
    }
    .fb-export-btn {
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
    .fb-export-btn:hover {
      background: #f3f0ff;
    }
    .fb-export-dropdown {
      position: absolute;
      top: 100%;
      right: 0;
      margin-top: 4px;
      background: #fff;
      border: 1px solid #e0e0e0;
      border-radius: 6px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      z-index: 10002;
      min-width: 80px;
      overflow: hidden;
    }
    .fb-export-option {
      display: block;
      width: 100%;
      padding: 8px 14px;
      border: none;
      background: none;
      text-align: left;
      font-size: 13px;
      font-family: inherit;
      cursor: pointer;
      color: #333;
    }
    .fb-export-option:hover {
      background: #f3f0ff;
      color: #7c3aed;
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
  `,document.head.appendChild(e)}var ut=null,Ki=null,vn=null,B=[],Ir=null,Ee=null,ye=new Set,Ue=new Map;function oU(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null};Hs(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{ut=document.querySelector(r.contentSelector)||document.body,Ki=r.documentUri||window.location.origin+window.location.pathname,vn=r.documentId||null,HE({onSubmit:fU,onDelete:hU,onResolve:pU,onReply:vU,onEdit:dU,onExport:mU}),EE(i=>{fn(),VE(i),Hi(i)}),cU(),await t(),uU(),AE(r,()=>B)}catch(i){console.error("[feedback-layer] Boot failed:",i)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function uU(){try{B=await Ks(Ki,vn),ye=await sU(B),ir(B,ye,Ue)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),De(`Failed to load comments: ${e.message}`,"error")}}async function sU(e){CE();let r=new Set;Ue.clear();for(let t of e)if(!t.parent)try{let n=await Ui({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ut);n&&t.status!=="closed"?(Wi(n,t.id),r.add(t.id),Ue.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),Ue.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function cU(){document.addEventListener("mouseup",zE),document.addEventListener("keyup",zE)}function zE(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){pn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){pn();return}if(!ut.contains(r.commonAncestorContainer)){pn();return}lU(r)},10)}function lU(e){pn();let r=e.getBoundingClientRect();Ee=document.createElement("button"),Ee.className="fb-annotate-tooltip",Ee.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',Ee.style.top=window.scrollY+r.top-36+"px",Ee.style.left=window.scrollX+r.left+r.width/2-40+"px",Ee.addEventListener("mousedown",async t=>{t.preventDefault(),t.stopPropagation();let n=window.getSelection();if(!n||n.isCollapsed)return;let i=n.getRangeAt(0);try{Ir=await wE(i,ut),KE(Ir.exact)}catch(o){console.error("[feedback-layer] Failed to create selector:",o)}pn()}),document.body.appendChild(Ee)}function pn(){Ee&&(Ee.remove(),Ee=null)}async function fU({comment:e,commenter:r}){if(Ir){try{let t=await Vi({uri:Ki,document:vn,quote:Ir.exact,prefix:Ir.prefix,suffix:Ir.suffix,body:e,author:r});B.push(t);let n=await Ui({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ut);n&&(Wi(n,t.id),ye.add(t.id)),ir(B,ye,Ue),window.getSelection().removeAllRanges()}catch(t){console.error("[feedback-layer] Failed to create comment:",t),De(`Failed to save comment: ${t.message}`,"error")}Ir=null}}async function pU(e,r){try{let n=await zs(e,r?"closed":"open"),i=B.findIndex(o=>o.id===e);if(i!==-1&&(B[i]=n),r)Ms(e);else{let o=n,u=await Ui({exact:o.quote,prefix:o.prefix,suffix:o.suffix},ut);u?(Wi(u,o.id),ye.add(o.id)):ye.delete(o.id)}ir(B,ye,Ue)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),De(`Failed to update comment: ${t.message}`,"error")}}async function vU({parent_id:e,comment:r,commenter:t}){try{let n=await Vi({uri:Ki,document:vn,body:r,author:t,parent:e});B.push(n),ir(B,ye,Ue)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),De(`Failed to save reply: ${n.message}`,"error")}}async function dU(e,r){try{let t=await Vs(e,{body:r}),n=B.findIndex(i=>i.id===e);n!==-1&&(B[n]=t),ir(B,ye,Ue)}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),De(`Failed to update comment: ${t.message}`,"error")}}async function mU(e){let r=vn||(B.length>0?B[0].document:null);if(!r){De("No document to export","error");return}try{let n=await(await Js(r,e)).blob(),i=URL.createObjectURL(n),o=document.createElement("a");o.href=i,o.download=`annotations.${e}`,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(i)}catch(t){console.error("[feedback-layer] Export failed:",t),De(`Export failed: ${t.message}`,"error")}}async function hU(e){try{await Ys(e),Ms(e),ye.delete(e),B=B.filter(r=>r.id!==e&&r.parent!==e),ir(B,ye,Ue)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),De(`Failed to delete comment: ${r.message}`,"error")}}try{oU()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
