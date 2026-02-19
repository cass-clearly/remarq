var FeedbackLayer=(()=>{var LE=Object.create;var Ds=Object.defineProperty;var FE=Object.getOwnPropertyDescriptor;var DE=Object.getOwnPropertyNames;var BE=Object.getPrototypeOf,GE=Object.prototype.hasOwnProperty;var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var UE=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of DE(r))!GE.call(e,i)&&i!==t&&Ds(e,i,{get:()=>r[i],enumerable:!(n=FE(r,i))||n.enumerable});return e};var g=(e,r,t)=>(t=e!=null?LE(BE(e)):{},UE(r||!e||!e.__esModule?Ds(t,"default",{value:e,enumerable:!0}):t,e));var P=a((vU,Ks)=>{"use strict";Ks.exports=function(e){try{return!!e()}catch{return!0}}});var Ir=a((dU,Vs)=>{"use strict";var WE=P();Vs.exports=!WE(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var A=a((hU,Js)=>{"use strict";var zs=Ir(),Ys=Function.prototype,Hi=Ys.call,HE=zs&&Ys.bind.bind(Hi,Hi);Js.exports=zs?HE:function(e){return function(){return Hi.apply(e,arguments)}}});var B=a((mU,Qs)=>{"use strict";var KE=A();Qs.exports=KE({}.isPrototypeOf)});var _=a((Ki,Xs)=>{"use strict";var at=function(e){return e&&e.Math===Math&&e};Xs.exports=at(typeof globalThis=="object"&&globalThis)||at(typeof window=="object"&&window)||at(typeof self=="object"&&self)||at(typeof global=="object"&&global)||at(typeof Ki=="object"&&Ki)||function(){return this}()||Function("return this")()});var kr=a((yU,tc)=>{"use strict";var VE=Ir(),rc=Function.prototype,Zs=rc.apply,ec=rc.call;tc.exports=typeof Reflect=="object"&&Reflect.apply||(VE?ec.bind(Zs):function(){return ec.apply(Zs,arguments)})});var qe=a((gU,ic)=>{"use strict";var nc=A(),zE=nc({}.toString),YE=nc("".slice);ic.exports=function(e){return YE(zE(e),8,-1)}});var ot=a((bU,ac)=>{"use strict";var JE=qe(),QE=A();ac.exports=function(e){if(JE(e)==="Function")return QE(e)}});var N=a((qU,oc)=>{"use strict";var Vi=typeof document=="object"&&document.all;oc.exports=typeof Vi>"u"&&Vi!==void 0?function(e){return typeof e=="function"||e===Vi}:function(e){return typeof e=="function"}});var G=a((xU,uc)=>{"use strict";var XE=P();uc.exports=!XE(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var D=a((SU,sc)=>{"use strict";var ZE=Ir(),ln=Function.prototype.call;sc.exports=ZE?ln.bind(ln):function(){return ln.apply(ln,arguments)}});var zi=a(fc=>{"use strict";var cc={}.propertyIsEnumerable,lc=Object.getOwnPropertyDescriptor,eC=lc&&!cc.call({1:2},1);fc.f=eC?function(r){var t=lc(this,r);return!!t&&t.enumerable}:cc});var We=a((TU,pc)=>{"use strict";pc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var fn=a((OU,vc)=>{"use strict";var rC=A(),tC=P(),nC=qe(),Yi=Object,iC=rC("".split);vc.exports=tC(function(){return!Yi("z").propertyIsEnumerable(0)})?function(e){return nC(e)==="String"?iC(e,""):Yi(e)}:Yi});var nr=a((EU,dc)=>{"use strict";dc.exports=function(e){return e==null}});var ir=a((CU,hc)=>{"use strict";var aC=nr(),oC=TypeError;hc.exports=function(e){if(aC(e))throw new oC("Can't call method on "+e);return e}});var Ce=a((IU,mc)=>{"use strict";var uC=fn(),sC=ir();mc.exports=function(e){return uC(sC(e))}});var $=a((kU,yc)=>{"use strict";var cC=N();yc.exports=function(e){return typeof e=="object"?e!==null:cC(e)}});var K=a((PU,gc)=>{"use strict";gc.exports={}});var U=a((_U,qc)=>{"use strict";var Ji=K(),Qi=_(),lC=N(),bc=function(e){return lC(e)?e:void 0};qc.exports=function(e,r){return arguments.length<2?bc(Ji[e])||bc(Qi[e]):Ji[e]&&Ji[e][r]||Qi[e]&&Qi[e][r]}});var Pr=a((RU,wc)=>{"use strict";var fC=_(),xc=fC.navigator,Sc=xc&&xc.userAgent;wc.exports=Sc?String(Sc):""});var _r=a((AU,kc)=>{"use strict";var Ic=_(),Xi=Pr(),Tc=Ic.process,Oc=Ic.Deno,Ec=Tc&&Tc.versions||Oc&&Oc.version,Cc=Ec&&Ec.v8,de,pn;Cc&&(de=Cc.split("."),pn=de[0]>0&&de[0]<4?1:+(de[0]+de[1]));!pn&&Xi&&(de=Xi.match(/Edge\/(\d+)/),(!de||de[1]>=74)&&(de=Xi.match(/Chrome\/(\d+)/),de&&(pn=+de[1])));kc.exports=pn});var ar=a((NU,_c)=>{"use strict";var Pc=_r(),pC=P(),vC=_(),dC=vC.String;_c.exports=!!Object.getOwnPropertySymbols&&!pC(function(){var e=Symbol("symbol detection");return!dC(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Pc&&Pc<41})});var Zi=a((MU,Rc)=>{"use strict";var hC=ar();Rc.exports=hC&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Rr=a((jU,Ac)=>{"use strict";var mC=U(),yC=N(),gC=B(),bC=Zi(),qC=Object;Ac.exports=bC?function(e){return typeof e=="symbol"}:function(e){var r=mC("Symbol");return yC(r)&&gC(r.prototype,qC(e))}});var He=a(($U,Nc)=>{"use strict";var xC=String;Nc.exports=function(e){try{return xC(e)}catch{return"Object"}}});var F=a((LU,Mc)=>{"use strict";var SC=N(),wC=He(),TC=TypeError;Mc.exports=function(e){if(SC(e))return e;throw new TC(wC(e)+" is not a function")}});var vn=a((FU,jc)=>{"use strict";var OC=F(),EC=nr();jc.exports=function(e,r){var t=e[r];return EC(t)?void 0:OC(t)}});var Lc=a((DU,$c)=>{"use strict";var ea=D(),ra=N(),ta=$(),CC=TypeError;$c.exports=function(e,r){var t,n;if(r==="string"&&ra(t=e.toString)&&!ta(n=ea(t,e))||ra(t=e.valueOf)&&!ta(n=ea(t,e))||r!=="string"&&ra(t=e.toString)&&!ta(n=ea(t,e)))return n;throw new CC("Can't convert object to primitive value")}});var X=a((BU,Fc)=>{"use strict";Fc.exports=!0});var Gc=a((GU,Bc)=>{"use strict";var Dc=_(),IC=Object.defineProperty;Bc.exports=function(e,r){try{IC(Dc,e,{value:r,configurable:!0,writable:!0})}catch{Dc[e]=r}return r}});var ut=a((UU,Hc)=>{"use strict";var kC=X(),PC=_(),_C=Gc(),Uc="__core-js_shared__",Wc=Hc.exports=PC[Uc]||_C(Uc,{});(Wc.versions||(Wc.versions=[])).push({version:"3.48.0",mode:kC?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var or=a((WU,Vc)=>{"use strict";var Kc=ut();Vc.exports=function(e,r){return Kc[e]||(Kc[e]=r||{})}});var ee=a((HU,zc)=>{"use strict";var RC=ir(),AC=Object;zc.exports=function(e){return AC(RC(e))}});var W=a((KU,Yc)=>{"use strict";var NC=A(),MC=ee(),jC=NC({}.hasOwnProperty);Yc.exports=Object.hasOwn||function(r,t){return jC(MC(r),t)}});var Ar=a((VU,Jc)=>{"use strict";var $C=A(),LC=0,FC=Math.random(),DC=$C(1.1.toString);Jc.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+DC(++LC+FC,36)}});var R=a((zU,Xc)=>{"use strict";var BC=_(),GC=or(),Qc=W(),UC=Ar(),WC=ar(),HC=Zi(),Nr=BC.Symbol,na=GC("wks"),KC=HC?Nr.for||Nr:Nr&&Nr.withoutSetter||UC;Xc.exports=function(e){return Qc(na,e)||(na[e]=WC&&Qc(Nr,e)?Nr[e]:KC("Symbol."+e)),na[e]}});var tl=a((YU,rl)=>{"use strict";var VC=D(),Zc=$(),el=Rr(),zC=vn(),YC=Lc(),JC=R(),QC=TypeError,XC=JC("toPrimitive");rl.exports=function(e,r){if(!Zc(e)||el(e))return e;var t=zC(e,XC),n;if(t){if(r===void 0&&(r="default"),n=VC(t,e,r),!Zc(n)||el(n))return n;throw new QC("Can't convert object to primitive value")}return r===void 0&&(r="number"),YC(e,r)}});var dn=a((JU,nl)=>{"use strict";var ZC=tl(),eI=Rr();nl.exports=function(e){var r=ZC(e,"string");return eI(r)?r:r+""}});var hn=a((QU,al)=>{"use strict";var rI=_(),il=$(),ia=rI.document,tI=il(ia)&&il(ia.createElement);al.exports=function(e){return tI?ia.createElement(e):{}}});var aa=a((XU,ol)=>{"use strict";var nI=G(),iI=P(),aI=hn();ol.exports=!nI&&!iI(function(){return Object.defineProperty(aI("div"),"a",{get:function(){return 7}}).a!==7})});var st=a(sl=>{"use strict";var oI=G(),uI=D(),sI=zi(),cI=We(),lI=Ce(),fI=dn(),pI=W(),vI=aa(),ul=Object.getOwnPropertyDescriptor;sl.f=oI?ul:function(r,t){if(r=lI(r),t=fI(t),vI)try{return ul(r,t)}catch{}if(pI(r,t))return cI(!uI(sI.f,r,t),r[t])}});var oa=a((eW,cl)=>{"use strict";var dI=P(),hI=N(),mI=/#|\.prototype\./,ct=function(e,r){var t=gI[yI(e)];return t===qI?!0:t===bI?!1:hI(r)?dI(r):!!r},yI=ct.normalize=function(e){return String(e).replace(mI,".").toLowerCase()},gI=ct.data={},bI=ct.NATIVE="N",qI=ct.POLYFILL="P";cl.exports=ct});var V=a((rW,fl)=>{"use strict";var ll=ot(),xI=F(),SI=Ir(),wI=ll(ll.bind);fl.exports=function(e,r){return xI(e),r===void 0?e:SI?wI(e,r):function(){return e.apply(r,arguments)}}});var ua=a((tW,pl)=>{"use strict";var TI=G(),OI=P();pl.exports=TI&&OI(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var Q=a((nW,vl)=>{"use strict";var EI=$(),CI=String,II=TypeError;vl.exports=function(e){if(EI(e))return e;throw new II(CI(e)+" is not an object")}});var re=a(hl=>{"use strict";var kI=G(),PI=aa(),_I=ua(),mn=Q(),dl=dn(),RI=TypeError,sa=Object.defineProperty,AI=Object.getOwnPropertyDescriptor,ca="enumerable",la="configurable",fa="writable";hl.f=kI?_I?function(r,t,n){if(mn(r),t=dl(t),mn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&fa in n&&!n[fa]){var i=AI(r,t);i&&i[fa]&&(r[t]=n.value,n={configurable:la in n?n[la]:i[la],enumerable:ca in n?n[ca]:i[ca],writable:!1})}return sa(r,t,n)}:sa:function(r,t,n){if(mn(r),t=dl(t),mn(n),PI)try{return sa(r,t,n)}catch{}if("get"in n||"set"in n)throw new RI("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var xe=a((aW,ml)=>{"use strict";var NI=G(),MI=re(),jI=We();ml.exports=NI?function(e,r,t){return MI.f(e,r,jI(1,t))}:function(e,r,t){return e[r]=t,e}});var x=a((oW,gl)=>{"use strict";var lt=_(),$I=kr(),LI=ot(),FI=N(),DI=st().f,BI=oa(),Mr=K(),GI=V(),jr=xe(),yl=W();ut();var UI=function(e){var r=function(t,n,i){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return $I(e,this,arguments)};return r.prototype=e.prototype,r};gl.exports=function(e,r){var t=e.target,n=e.global,i=e.stat,o=e.proto,u=n?lt:i?lt[t]:lt[t]&&lt[t].prototype,l=n?Mr:Mr[t]||jr(Mr,t,{})[t],s=l.prototype,c,f,p,v,d,m,h,y,q;for(v in r)c=BI(n?v:t+(i?".":"#")+v,e.forced),f=!c&&u&&yl(u,v),m=l[v],f&&(e.dontCallGetSet?(q=DI(u,v),h=q&&q.value):h=u[v]),d=f&&h?h:r[v],!(!c&&!o&&typeof m==typeof d)&&(e.bind&&f?y=GI(d,lt):e.wrap&&f?y=UI(d):o&&FI(d)?y=LI(d):y=d,(e.sham||d&&d.sham||m&&m.sham)&&jr(y,"sham",!0),jr(l,v,y),o&&(p=t+"Prototype",yl(Mr,p)||jr(Mr,p,{}),jr(Mr[p],v,d),e.real&&s&&(c||!s[v])&&jr(s,v,d)))}});var Ie=a((uW,bl)=>{"use strict";var WI=qe();bl.exports=Array.isArray||function(r){return WI(r)==="Array"}});var yn=a((sW,xl)=>{"use strict";var HI=R(),KI=HI("toStringTag"),ql={};ql[KI]="z";xl.exports=String(ql)==="[object z]"});var ft=a((cW,Sl)=>{"use strict";var VI=yn(),zI=N(),gn=qe(),YI=R(),JI=YI("toStringTag"),QI=Object,XI=gn(function(){return arguments}())==="Arguments",ZI=function(e,r){try{return e[r]}catch{}};Sl.exports=VI?gn:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=ZI(r=QI(e),JI))=="string"?t:XI?gn(r):(n=gn(r))==="Object"&&zI(r.callee)?"Arguments":n}});var va=a((lW,wl)=>{"use strict";var e0=A(),r0=N(),pa=ut(),t0=e0(Function.toString);r0(pa.inspectSource)||(pa.inspectSource=function(e){return t0(e)});wl.exports=pa.inspectSource});var vt=a((fW,Il)=>{"use strict";var n0=A(),i0=P(),Tl=N(),a0=ft(),o0=U(),u0=va(),Ol=function(){},El=o0("Reflect","construct"),da=/^\s*(?:class|function)\b/,s0=n0(da.exec),c0=!da.test(Ol),pt=function(r){if(!Tl(r))return!1;try{return El(Ol,[],r),!0}catch{return!1}},Cl=function(r){if(!Tl(r))return!1;switch(a0(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return c0||!!s0(da,u0(r))}catch{return!0}};Cl.sham=!0;Il.exports=!El||i0(function(){var e;return pt(pt.call)||!pt(Object)||!pt(function(){e=!0})||e})?Cl:pt});var Pl=a((pW,kl)=>{"use strict";var l0=Math.ceil,f0=Math.floor;kl.exports=Math.trunc||function(r){var t=+r;return(t>0?f0:l0)(t)}});var bn=a((vW,_l)=>{"use strict";var p0=Pl();_l.exports=function(e){var r=+e;return r!==r||r===0?0:p0(r)}});var ha=a((dW,Rl)=>{"use strict";var v0=bn(),d0=Math.max,h0=Math.min;Rl.exports=function(e,r){var t=v0(e);return t<0?d0(t+r,0):h0(t,r)}});var ma=a((hW,Al)=>{"use strict";var m0=bn(),y0=Math.min;Al.exports=function(e){var r=m0(e);return r>0?y0(r,9007199254740991):0}});var le=a((mW,Nl)=>{"use strict";var g0=ma();Nl.exports=function(e){return g0(e.length)}});var $r=a((yW,Ml)=>{"use strict";var b0=G(),q0=re(),x0=We();Ml.exports=function(e,r,t){b0?q0.f(e,r,x0(0,t)):e[r]=t}});var Lr=a((gW,jl)=>{"use strict";var S0=G(),w0=Ie(),T0=TypeError,O0=Object.getOwnPropertyDescriptor,E0=S0&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();jl.exports=E0?function(e,r){if(w0(e)&&!O0(e,"length").writable)throw new T0("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var dt=a((bW,$l)=>{"use strict";var C0=P(),I0=R(),k0=_r(),P0=I0("species");$l.exports=function(e){return k0>=51||!C0(function(){var r=[],t=r.constructor={};return t[P0]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var ur=a((qW,Ll)=>{"use strict";var _0=A();Ll.exports=_0([].slice)});var Bl=a(()=>{"use strict";var R0=x(),Fl=Ie(),A0=vt(),N0=$(),Dl=ha(),M0=le(),j0=Ce(),$0=$r(),L0=Lr(),F0=R(),D0=dt(),B0=ur(),G0=D0("slice"),U0=F0("species"),ya=Array,W0=Math.max;R0({target:"Array",proto:!0,forced:!G0},{slice:function(r,t){var n=j0(this),i=M0(n),o=Dl(r,i),u=Dl(t===void 0?i:t,i),l,s,c;if(Fl(n)&&(l=n.constructor,A0(l)&&(l===ya||Fl(l.prototype))?l=void 0:N0(l)&&(l=l[U0],l===null&&(l=void 0)),l===ya||l===void 0))return B0(n,o,u);for(s=new(l===void 0?ya:l)(W0(u-o,0)),c=0;o<u;o++,c++)o in n&&$0(s,c,n[o]);return L0(s,c),s}})});var oe=a((wW,Gl)=>{"use strict";var H0=_(),K0=K();Gl.exports=function(e,r){var t=K0[e+"Prototype"],n=t&&t[r];if(n)return n;var i=H0[e],o=i&&i.prototype;return o&&o[r]}});var Wl=a((TW,Ul)=>{"use strict";Bl();var V0=oe();Ul.exports=V0("Array","slice")});var Kl=a((OW,Hl)=>{"use strict";var z0=B(),Y0=Wl(),ga=Array.prototype;Hl.exports=function(e){var r=e.slice;return e===ga||z0(ga,e)&&r===ga.slice?Y0:r}});var zl=a((EW,Vl)=>{"use strict";var J0=Kl();Vl.exports=J0});var Jl=a((CW,Yl)=>{"use strict";var Q0=zl();Yl.exports=Q0});var Xl=a((IW,Ql)=>{"use strict";var X0=Jl();Ql.exports=X0});var ba=a((kW,Zl)=>{"use strict";Zl.exports=Xl()});var Fr=a((PW,ef)=>{ef.exports=ba()});var Ke=a((_W,rf)=>{"use strict";var Z0=ft(),ek=String;rf.exports=function(e){if(Z0(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return ek(e)}});var of=a((RW,af)=>{"use strict";var qa=A(),rk=bn(),tk=Ke(),nk=ir(),ik=qa("".charAt),tf=qa("".charCodeAt),ak=qa("".slice),nf=function(e){return function(r,t){var n=tk(nk(r)),i=rk(t),o=n.length,u,l;return i<0||i>=o?e?"":void 0:(u=tf(n,i),u<55296||u>56319||i+1===o||(l=tf(n,i+1))<56320||l>57343?e?ik(n,i):u:e?ak(n,i,i+2):(u-55296<<10)+(l-56320)+65536)}};af.exports={codeAt:nf(!1),charAt:nf(!0)}});var cf=a((AW,sf)=>{"use strict";var ok=_(),uk=N(),uf=ok.WeakMap;sf.exports=uk(uf)&&/native code/.test(String(uf))});var ht=a((NW,ff)=>{"use strict";var sk=or(),ck=Ar(),lf=sk("keys");ff.exports=function(e){return lf[e]||(lf[e]=ck(e))}});var Dr=a((MW,pf)=>{"use strict";pf.exports={}});var Ve=a((jW,hf)=>{"use strict";var lk=cf(),df=_(),fk=$(),pk=xe(),xa=W(),Sa=ut(),vk=ht(),dk=Dr(),vf="Object already initialized",wa=df.TypeError,hk=df.WeakMap,qn,mt,xn,mk=function(e){return xn(e)?mt(e):qn(e,{})},yk=function(e){return function(r){var t;if(!fk(r)||(t=mt(r)).type!==e)throw new wa("Incompatible receiver, "+e+" required");return t}};lk||Sa.state?(he=Sa.state||(Sa.state=new hk),he.get=he.get,he.has=he.has,he.set=he.set,qn=function(e,r){if(he.has(e))throw new wa(vf);return r.facade=e,he.set(e,r),r},mt=function(e){return he.get(e)||{}},xn=function(e){return he.has(e)}):(sr=vk("state"),dk[sr]=!0,qn=function(e,r){if(xa(e,sr))throw new wa(vf);return r.facade=e,pk(e,sr,r),r},mt=function(e){return xa(e,sr)?e[sr]:{}},xn=function(e){return xa(e,sr)});var he,sr;hf.exports={set:qn,get:mt,has:xn,enforce:mk,getterFor:yk}});var gf=a(($W,yf)=>{"use strict";var Ta=G(),gk=W(),mf=Function.prototype,bk=Ta&&Object.getOwnPropertyDescriptor,Oa=gk(mf,"name"),qk=Oa&&function(){}.name==="something",xk=Oa&&(!Ta||Ta&&bk(mf,"name").configurable);yf.exports={EXISTS:Oa,PROPER:qk,CONFIGURABLE:xk}});var Ea=a((LW,qf)=>{"use strict";var Sk=Ce(),wk=ha(),Tk=le(),bf=function(e){return function(r,t,n){var i=Sk(r),o=Tk(i);if(o===0)return!e&&-1;var u=wk(n,o),l;if(e&&t!==t){for(;o>u;)if(l=i[u++],l!==l)return!0}else for(;o>u;u++)if((e||u in i)&&i[u]===t)return e||u||0;return!e&&-1}};qf.exports={includes:bf(!0),indexOf:bf(!1)}});var Ia=a((FW,Sf)=>{"use strict";var Ok=A(),Ca=W(),Ek=Ce(),Ck=Ea().indexOf,Ik=Dr(),xf=Ok([].push);Sf.exports=function(e,r){var t=Ek(e),n=0,i=[],o;for(o in t)!Ca(Ik,o)&&Ca(t,o)&&xf(i,o);for(;r.length>n;)Ca(t,o=r[n++])&&(~Ck(i,o)||xf(i,o));return i}});var Sn=a((DW,wf)=>{"use strict";wf.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var wn=a((BW,Tf)=>{"use strict";var kk=Ia(),Pk=Sn();Tf.exports=Object.keys||function(r){return kk(r,Pk)}});var ka=a(Of=>{"use strict";var _k=G(),Rk=ua(),Ak=re(),Nk=Q(),Mk=Ce(),jk=wn();Of.f=_k&&!Rk?Object.defineProperties:function(r,t){Nk(r);for(var n=Mk(t),i=jk(t),o=i.length,u=0,l;o>u;)Ak.f(r,l=i[u++],n[l]);return r}});var Pa=a((UW,Ef)=>{"use strict";var $k=U();Ef.exports=$k("document","documentElement")});var ze=a((WW,Af)=>{"use strict";var Lk=Q(),Fk=ka(),Cf=Sn(),Dk=Dr(),Bk=Pa(),Gk=hn(),Uk=ht(),If=">",kf="<",Ra="prototype",Aa="script",_f=Uk("IE_PROTO"),_a=function(){},Rf=function(e){return kf+Aa+If+e+kf+"/"+Aa+If},Pf=function(e){e.write(Rf("")),e.close();var r=e.parentWindow.Object;return e=null,r},Wk=function(){var e=Gk("iframe"),r="java"+Aa+":",t;return e.style.display="none",Bk.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(Rf("document.F=Object")),t.close(),t.F},Tn,On=function(){try{Tn=new ActiveXObject("htmlfile")}catch{}On=typeof document<"u"?document.domain&&Tn?Pf(Tn):Wk():Pf(Tn);for(var e=Cf.length;e--;)delete On[Ra][Cf[e]];return On()};Dk[_f]=!0;Af.exports=Object.create||function(r,t){var n;return r!==null?(_a[Ra]=Lk(r),n=new _a,_a[Ra]=null,n[_f]=r):n=On(),t===void 0?n:Fk.f(n,t)}});var Na=a((HW,Nf)=>{"use strict";var Hk=P();Nf.exports=!Hk(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var yt=a((KW,jf)=>{"use strict";var Kk=W(),Vk=N(),zk=ee(),Yk=ht(),Jk=Na(),Mf=Yk("IE_PROTO"),Ma=Object,Qk=Ma.prototype;jf.exports=Jk?Ma.getPrototypeOf:function(e){var r=zk(e);if(Kk(r,Mf))return r[Mf];var t=r.constructor;return Vk(t)&&r instanceof t?t.prototype:r instanceof Ma?Qk:null}});var ke=a((VW,$f)=>{"use strict";var Xk=xe();$f.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:Xk(e,r,t),e}});var Fa=a((zW,Df)=>{"use strict";var Zk=P(),eP=N(),rP=$(),tP=ze(),Lf=yt(),nP=ke(),iP=R(),aP=X(),La=iP("iterator"),Ff=!1,Pe,ja,$a;[].keys&&($a=[].keys(),"next"in $a?(ja=Lf(Lf($a)),ja!==Object.prototype&&(Pe=ja)):Ff=!0);var oP=!rP(Pe)||Zk(function(){var e={};return Pe[La].call(e)!==e});oP?Pe={}:aP&&(Pe=tP(Pe));eP(Pe[La])||nP(Pe,La,function(){return this});Df.exports={IteratorPrototype:Pe,BUGGY_SAFARI_ITERATORS:Ff}});var Gf=a((YW,Bf)=>{"use strict";var uP=yn(),sP=ft();Bf.exports=uP?{}.toString:function(){return"[object "+sP(this)+"]"}});var _e=a((JW,Wf)=>{"use strict";var cP=yn(),lP=re().f,fP=xe(),pP=W(),vP=Gf(),dP=R(),Uf=dP("toStringTag");Wf.exports=function(e,r,t,n){var i=t?e:e&&e.prototype;i&&(pP(i,Uf)||lP(i,Uf,{configurable:!0,value:r}),n&&!cP&&fP(i,"toString",vP))}});var cr=a((QW,Hf)=>{"use strict";Hf.exports={}});var Vf=a((XW,Kf)=>{"use strict";var hP=Fa().IteratorPrototype,mP=ze(),yP=We(),gP=_e(),bP=cr(),qP=function(){return this};Kf.exports=function(e,r,t,n){var i=r+" Iterator";return e.prototype=mP(hP,{next:yP(+!n,t)}),gP(e,i,!1,!0),bP[i]=qP,e}});var Yf=a((ZW,zf)=>{"use strict";var xP=A(),SP=F();zf.exports=function(e,r,t){try{return xP(SP(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var Qf=a((eH,Jf)=>{"use strict";var wP=$();Jf.exports=function(e){return wP(e)||e===null}});var Zf=a((rH,Xf)=>{"use strict";var TP=Qf(),OP=String,EP=TypeError;Xf.exports=function(e){if(TP(e))return e;throw new EP("Can't set "+OP(e)+" as a prototype")}});var gt=a((tH,ep)=>{"use strict";var CP=Yf(),IP=$(),kP=ir(),PP=Zf();ep.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=CP(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(i,o){return kP(i),PP(o),IP(i)&&(e?t(i,o):i.__proto__=o),i}}():void 0)});var In=a((nH,lp)=>{"use strict";var _P=x(),RP=D(),En=X(),sp=gf(),AP=N(),NP=Vf(),rp=yt(),tp=gt(),MP=_e(),jP=xe(),Da=ke(),$P=R(),np=cr(),cp=Fa(),LP=sp.PROPER,FP=sp.CONFIGURABLE,ip=cp.IteratorPrototype,Cn=cp.BUGGY_SAFARI_ITERATORS,bt=$P("iterator"),ap="keys",qt="values",op="entries",up=function(){return this};lp.exports=function(e,r,t,n,i,o,u){NP(t,r,n);var l=function(q){if(q===i&&v)return v;if(!Cn&&q&&q in f)return f[q];switch(q){case ap:return function(){return new t(this,q)};case qt:return function(){return new t(this,q)};case op:return function(){return new t(this,q)}}return function(){return new t(this)}},s=r+" Iterator",c=!1,f=e.prototype,p=f[bt]||f["@@iterator"]||i&&f[i],v=!Cn&&p||l(i),d=r==="Array"&&f.entries||p,m,h,y;if(d&&(m=rp(d.call(new e)),m!==Object.prototype&&m.next&&(!En&&rp(m)!==ip&&(tp?tp(m,ip):AP(m[bt])||Da(m,bt,up)),MP(m,s,!0,!0),En&&(np[s]=up))),LP&&i===qt&&p&&p.name!==qt&&(!En&&FP?jP(f,"name",qt):(c=!0,v=function(){return RP(p,this)})),i)if(h={values:l(qt),keys:o?v:l(ap),entries:l(op)},u)for(y in h)(Cn||c||!(y in f))&&Da(f,y,h[y]);else _P({target:r,proto:!0,forced:Cn||c},h);return(!En||u)&&f[bt]!==v&&Da(f,bt,v,{name:i}),np[r]=v,h}});var kn=a((iH,fp)=>{"use strict";fp.exports=function(e,r){return{value:e,done:r}}});var lr=a(()=>{"use strict";var DP=of().charAt,BP=Ke(),vp=Ve(),GP=In(),pp=kn(),dp="String Iterator",UP=vp.set,WP=vp.getterFor(dp);GP(String,"String",function(e){UP(this,{type:dp,string:BP(e),index:0})},function(){var r=WP(this),t=r.string,n=r.index,i;return n>=t.length?pp(void 0,!0):(i=DP(t,n),r.index+=i.length,pp(i,!1))})});var Ba=a((uH,mp)=>{"use strict";var HP=D(),hp=Q(),KP=vn();mp.exports=function(e,r,t){var n,i;hp(e);try{if(n=KP(e,"return"),!n){if(r==="throw")throw t;return t}n=HP(n,e)}catch(o){i=!0,n=o}if(r==="throw")throw t;if(i)throw n;return hp(n),t}});var gp=a((sH,yp)=>{"use strict";var VP=Q(),zP=Ba();yp.exports=function(e,r,t,n){try{return n?r(VP(t)[0],t[1]):r(t)}catch(i){zP(e,"throw",i)}}});var Ga=a((cH,bp)=>{"use strict";var YP=R(),JP=cr(),QP=YP("iterator"),XP=Array.prototype;bp.exports=function(e){return e!==void 0&&(JP.Array===e||XP[QP]===e)}});var xt=a((lH,xp)=>{"use strict";var ZP=ft(),qp=vn(),e_=nr(),r_=cr(),t_=R(),n_=t_("iterator");xp.exports=function(e){if(!e_(e))return qp(e,n_)||qp(e,"@@iterator")||r_[ZP(e)]}});var Pn=a((fH,Sp)=>{"use strict";var i_=D(),a_=F(),o_=Q(),u_=He(),s_=xt(),c_=TypeError;Sp.exports=function(e,r){var t=arguments.length<2?s_(e):r;if(a_(t))return o_(i_(t,e));throw new c_(u_(e)+" is not iterable")}});var Ep=a((pH,Op)=>{"use strict";var l_=V(),f_=D(),p_=ee(),v_=gp(),d_=Ga(),h_=vt(),m_=le(),wp=$r(),y_=Lr(),g_=Pn(),b_=xt(),Tp=Array;Op.exports=function(r){var t=p_(r),n=h_(this),i=arguments.length,o=i>1?arguments[1]:void 0,u=o!==void 0;u&&(o=l_(o,i>2?arguments[2]:void 0));var l=b_(t),s=0,c,f,p,v,d,m;if(l&&!(this===Tp&&d_(l)))for(f=n?new this:[],v=g_(t,l),d=v.next;!(p=f_(d,v)).done;s++)m=u?v_(v,o,[p.value,s],!0):p.value,wp(f,s,m);else for(c=m_(t),f=n?new this(c):Tp(c);c>s;s++)m=u?o(t[s],s):t[s],wp(f,s,m);return y_(f,s),f}});var Wa=a((vH,Pp)=>{"use strict";var q_=R(),Ip=q_("iterator"),kp=!1;try{Cp=0,Ua={next:function(){return{done:!!Cp++}},return:function(){kp=!0}},Ua[Ip]=function(){return this},Array.from(Ua,function(){throw 2})}catch{}var Cp,Ua;Pp.exports=function(e,r){try{if(!r&&!kp)return!1}catch{return!1}var t=!1;try{var n={};n[Ip]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var _p=a(()=>{"use strict";var x_=x(),S_=Ep(),w_=Wa(),T_=!w_(function(e){Array.from(e)});x_({target:"Array",stat:!0,forced:T_},{from:S_})});var Ap=a((mH,Rp)=>{"use strict";lr();_p();var O_=K();Rp.exports=O_.Array.from});var Mp=a((yH,Np)=>{"use strict";var E_=Ap();Np.exports=E_});var $p=a((gH,jp)=>{"use strict";var C_=Mp();jp.exports=C_});var Fp=a((bH,Lp)=>{"use strict";var I_=$p();Lp.exports=I_});var Ha=a((qH,Dp)=>{"use strict";Dp.exports=Fp()});var _n=a((xH,Bp)=>{Bp.exports=Ha()});var St=a((SH,Gp)=>{"use strict";var k_=TypeError,P_=9007199254740991;Gp.exports=function(e){if(e>P_)throw k_("Maximum allowed index exceeded");return e}});var Kp=a((wH,Hp)=>{"use strict";var Up=Ie(),__=vt(),R_=$(),A_=R(),N_=A_("species"),Wp=Array;Hp.exports=function(e){var r;return Up(e)&&(r=e.constructor,__(r)&&(r===Wp||Up(r.prototype))?r=void 0:R_(r)&&(r=r[N_],r===null&&(r=void 0))),r===void 0?Wp:r}});var Rn=a((TH,Vp)=>{"use strict";var M_=Kp();Vp.exports=function(e,r){return new(M_(e))(r===0?0:r)}});var Ka=a(()=>{"use strict";var j_=x(),$_=P(),L_=Ie(),F_=$(),D_=ee(),B_=le(),zp=St(),Yp=$r(),G_=Lr(),U_=Rn(),W_=dt(),H_=R(),K_=_r(),Jp=H_("isConcatSpreadable"),V_=K_>=51||!$_(function(){var e=[];return e[Jp]=!1,e.concat()[0]!==e}),z_=function(e){if(!F_(e))return!1;var r=e[Jp];return r!==void 0?!!r:L_(e)},Y_=!V_||!W_("concat");j_({target:"Array",proto:!0,arity:1,forced:Y_},{concat:function(r){var t=D_(this),n=U_(t,0),i=0,o,u,l,s,c;for(o=-1,l=arguments.length;o<l;o++)if(c=o===-1?t:arguments[o],z_(c))for(s=B_(c),zp(i+s),u=0;u<s;u++,i++)u in c&&Yp(n,i,c[u]);else zp(i+1),Yp(n,i++,c);return G_(n,i),n}})});var wt=a(()=>{});var Tt=a(Qp=>{"use strict";var J_=Ia(),Q_=Sn(),X_=Q_.concat("length","prototype");Qp.f=Object.getOwnPropertyNames||function(r){return J_(r,X_)}});var Va=a((PH,ev)=>{"use strict";var Z_=qe(),eR=Ce(),Xp=Tt().f,rR=ur(),Zp=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],tR=function(e){try{return Xp(e)}catch{return rR(Zp)}};ev.exports.f=function(r){return Zp&&Z_(r)==="Window"?tR(r):Xp(eR(r))}});var An=a(rv=>{"use strict";rv.f=Object.getOwnPropertySymbols});var Nn=a((RH,tv)=>{"use strict";var nR=re();tv.exports=function(e,r,t){return nR.f(e,r,t)}});var Br=a(nv=>{"use strict";var iR=R();nv.f=iR});var M=a((NH,av)=>{"use strict";var iv=K(),aR=W(),oR=Br(),uR=re().f;av.exports=function(e){var r=iv.Symbol||(iv.Symbol={});aR(r,e)||uR(r,e,{value:oR.f(e)})}});var za=a((MH,ov)=>{"use strict";var sR=D(),cR=U(),lR=R(),fR=ke();ov.exports=function(){var e=cR("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=lR("toPrimitive");r&&!r[n]&&fR(r,n,function(i){return sR(t,this)},{arity:1})}});var Ot=a((jH,sv)=>{"use strict";var pR=V(),vR=fn(),dR=ee(),hR=le(),uv=Rn(),Ya=$r(),Ye=function(e){var r=e===1,t=e===2,n=e===3,i=e===4,o=e===6,u=e===7,l=e===5||o;return function(s,c,f){for(var p=dR(s),v=vR(p),d=hR(v),m=pR(c,f),h=0,y=0,q=r?uv(s,d):t||u?uv(s,0):void 0,b,I;d>h;h++)if((l||h in v)&&(b=v[h],I=m(b,h,p),e))if(r)Ya(q,h,I);else if(I)switch(e){case 3:return!0;case 5:return b;case 6:return h;case 2:Ya(q,y++,b)}else switch(e){case 4:return!1;case 7:Ya(q,y++,b)}return o?-1:n||i?i:q}};sv.exports={forEach:Ye(0),map:Ye(1),filter:Ye(2),some:Ye(3),every:Ye(4),find:Ye(5),findIndex:Ye(6),filterReject:Ye(7)}});var Ov=a(()=>{"use strict";var Mn=x(),It=_(),io=D(),mR=A(),yR=X(),Gr=G(),Ur=ar(),gR=P(),H=W(),bR=B(),Za=Q(),jn=Ce(),ao=dn(),qR=Ke(),eo=We(),Wr=ze(),fv=wn(),xR=Tt(),pv=Va(),SR=An(),vv=st(),dv=re(),wR=ka(),hv=zi(),Ja=ke(),TR=Nn(),oo=or(),OR=ht(),mv=Dr(),cv=Ar(),ER=R(),CR=Br(),IR=M(),kR=za(),PR=_e(),yv=Ve(),$n=Ot().forEach,te=OR("hidden"),Ln="Symbol",Ct="prototype",_R=yv.set,lv=yv.getterFor(Ln),fe=Object[Ct],fr=It.Symbol,Et=fr&&fr[Ct],RR=It.RangeError,AR=It.TypeError,Qa=It.QObject,gv=vv.f,pr=dv.f,bv=pv.f,NR=hv.f,qv=mR([].push),Re=oo("symbols"),kt=oo("op-symbols"),MR=oo("wks"),ro=!Qa||!Qa[Ct]||!Qa[Ct].findChild,xv=function(e,r,t){var n=gv(fe,r);n&&delete fe[r],pr(e,r,t),n&&e!==fe&&pr(fe,r,n)},to=Gr&&gR(function(){return Wr(pr({},"a",{get:function(){return pr(this,"a",{value:7}).a}})).a!==7})?xv:pr,Xa=function(e,r){var t=Re[e]=Wr(Et);return _R(t,{type:Ln,tag:e,description:r}),Gr||(t.description=r),t},Fn=function(r,t,n){r===fe&&Fn(kt,t,n),Za(r);var i=ao(t);return Za(n),H(Re,i)?(n.enumerable?(H(r,te)&&r[te][i]&&(r[te][i]=!1),n=Wr(n,{enumerable:eo(0,!1)})):(H(r,te)||pr(r,te,eo(1,Wr(null))),r[te][i]=!0),to(r,i,n)):pr(r,i,n)},uo=function(r,t){Za(r);var n=jn(t),i=fv(n).concat(Tv(n));return $n(i,function(o){(!Gr||io(no,n,o))&&Fn(r,o,n[o])}),r},jR=function(r,t){return t===void 0?Wr(r):uo(Wr(r),t)},no=function(r){var t=ao(r),n=io(NR,this,t);return this===fe&&H(Re,t)&&!H(kt,t)?!1:n||!H(this,t)||!H(Re,t)||H(this,te)&&this[te][t]?n:!0},Sv=function(r,t){var n=jn(r),i=ao(t);if(!(n===fe&&H(Re,i)&&!H(kt,i))){var o=gv(n,i);return o&&H(Re,i)&&!(H(n,te)&&n[te][i])&&(o.enumerable=!0),o}},wv=function(r){var t=bv(jn(r)),n=[];return $n(t,function(i){!H(Re,i)&&!H(mv,i)&&qv(n,i)}),n},Tv=function(e){var r=e===fe,t=bv(r?kt:jn(e)),n=[];return $n(t,function(i){H(Re,i)&&(!r||H(fe,i))&&qv(n,Re[i])}),n};Ur||(fr=function(){if(bR(Et,this))throw new AR("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:qR(arguments[0]),t=cv(r),n=function(i){var o=this===void 0?It:this;o===fe&&io(n,kt,i),H(o,te)&&H(o[te],t)&&(o[te][t]=!1);var u=eo(1,i);try{to(o,t,u)}catch(l){if(!(l instanceof RR))throw l;xv(o,t,u)}};return Gr&&ro&&to(fe,t,{configurable:!0,set:n}),Xa(t,r)},Et=fr[Ct],Ja(Et,"toString",function(){return lv(this).tag}),Ja(fr,"withoutSetter",function(e){return Xa(cv(e),e)}),hv.f=no,dv.f=Fn,wR.f=uo,vv.f=Sv,xR.f=pv.f=wv,SR.f=Tv,CR.f=function(e){return Xa(ER(e),e)},Gr&&(TR(Et,"description",{configurable:!0,get:function(){return lv(this).description}}),yR||Ja(fe,"propertyIsEnumerable",no,{unsafe:!0})));Mn({global:!0,constructor:!0,wrap:!0,forced:!Ur,sham:!Ur},{Symbol:fr});$n(fv(MR),function(e){IR(e)});Mn({target:Ln,stat:!0,forced:!Ur},{useSetter:function(){ro=!0},useSimple:function(){ro=!1}});Mn({target:"Object",stat:!0,forced:!Ur,sham:!Gr},{create:jR,defineProperty:Fn,defineProperties:uo,getOwnPropertyDescriptor:Sv});Mn({target:"Object",stat:!0,forced:!Ur},{getOwnPropertyNames:wv});kR();PR(fr,Ln);mv[te]=!0});var so=a((FH,Ev)=>{"use strict";var $R=ar();Ev.exports=$R&&!!Symbol.for&&!!Symbol.keyFor});var Iv=a(()=>{"use strict";var LR=x(),FR=U(),DR=W(),BR=Ke(),Cv=or(),GR=so(),co=Cv("string-to-symbol-registry"),UR=Cv("symbol-to-string-registry");LR({target:"Symbol",stat:!0,forced:!GR},{for:function(e){var r=BR(e);if(DR(co,r))return co[r];var t=FR("Symbol")(r);return co[r]=t,UR[t]=r,t}})});var Pv=a(()=>{"use strict";var WR=x(),HR=W(),KR=Rr(),VR=He(),zR=or(),YR=so(),kv=zR("symbol-to-string-registry");WR({target:"Symbol",stat:!0,forced:!YR},{keyFor:function(r){if(!KR(r))throw new TypeError(VR(r)+" is not a symbol");if(HR(kv,r))return kv[r]}})});var Rv=a((WH,_v)=>{"use strict";var JR=$(),QR=Ve().get;_v.exports=function(r){if(!JR(r))return!1;var t=QR(r);return!!t&&t.type==="RawJSON"}});var $v=a((HH,jv)=>{"use strict";var lo=A(),XR=W(),Dn=SyntaxError,ZR=parseInt,e1=String.fromCharCode,r1=lo("".charAt),Av=lo("".slice),Nv=lo(/./.exec),Mv={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},t1=/^[\da-f]{4}$/i,n1=/^[\u0000-\u001F]$/;jv.exports=function(e,r){for(var t=!0,n="";r<e.length;){var i=r1(e,r);if(i==="\\"){var o=Av(e,r,r+2);if(XR(Mv,o))n+=Mv[o],r+=2;else if(o==="\\u"){r+=2;var u=Av(e,r,r+4);if(!Nv(t1,u))throw new Dn("Bad Unicode escape at: "+r);n+=e1(ZR(u,16)),r+=4}else throw new Dn('Unknown escape sequence: "'+o+'"')}else if(i==='"'){t=!1,r++;break}else{if(Nv(n1,i))throw new Dn("Bad control character in string literal at: "+r);n+=i,r++}}if(t)throw new Dn("Unterminated string at: "+r);return{value:n,end:r}}});var Fv=a((KH,Lv)=>{"use strict";var i1=P();Lv.exports=!i1(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var Zv=a(()=>{"use strict";var a1=x(),Vv=U(),o1=kr(),zv=D(),vr=A(),Yv=P(),Dv=Ie(),Gn=N(),u1=Rv(),Bv=Rr(),Gv=qe(),s1=Ke(),c1=ur(),l1=$v(),f1=Ar(),p1=ar(),fo=Fv(),Jv=String,Je=Vv("JSON","stringify"),Bn=vr(/./.exec),vo=vr("".charAt),v1=vr("".charCodeAt),d1=vr("".replace),po=vr("".slice),ho=vr([].push),h1=vr(1.1.toString),m1=/[\uD800-\uDFFF]/g,Uv=/^[\uD800-\uDBFF]$/,Wv=/^[\uDC00-\uDFFF]$/,mo=f1(),Hv=mo.length,Qv=!p1||Yv(function(){var e=Vv("Symbol")("stringify detection");return Je([e])!=="[null]"||Je({a:e})!=="{}"||Je(Object(e))!=="{}"}),Kv=Yv(function(){return Je("\uDF06\uD834")!=='"\\udf06\\ud834"'||Je("\uDEAD")!=='"\\udead"'}),y1=Qv?function(e,r){var t=c1(arguments),n=Xv(r);if(!(!Gn(n)&&(e===void 0||Bv(e))))return t[1]=function(i,o){if(Gn(n)&&(o=zv(n,this,Jv(i),o)),!Bv(o))return o},o1(Je,null,t)}:Je,g1=function(e,r,t){var n=vo(t,r-1),i=vo(t,r+1);return Bn(Uv,e)&&!Bn(Wv,i)||Bn(Wv,e)&&!Bn(Uv,n)?"\\u"+h1(v1(e,0),16):e},Xv=function(e){if(Gn(e))return e;if(Dv(e)){for(var r=e.length,t=[],n=0;n<r;n++){var i=e[n];typeof i=="string"?ho(t,i):(typeof i=="number"||Gv(i)==="Number"||Gv(i)==="String")&&ho(t,s1(i))}var o=t.length,u=!0;return function(l,s){if(u)return u=!1,s;if(Dv(this))return s;for(var c=0;c<o;c++)if(t[c]===l)return s}}};Je&&a1({target:"JSON",stat:!0,arity:3,forced:Qv||Kv||!fo},{stringify:function(r,t,n){var i=Xv(t),o=[],u=y1(r,function(d,m){var h=Gn(i)?zv(i,this,Jv(d),m):m;return!fo&&u1(h)?mo+(ho(o,h.rawJSON)-1):h},n);if(typeof u!="string"||(Kv&&(u=d1(u,m1,g1)),fo))return u;for(var l="",s=u.length,c=0;c<s;c++){var f=vo(u,c);if(f==='"'){var p=l1(u,++c).end-1,v=po(u,c,p);l+=po(v,0,Hv)===mo?o[po(v,Hv)]:'"'+v+'"',c=p}else l+=f}return l}})});var rd=a(()=>{"use strict";var b1=x(),q1=ar(),x1=P(),ed=An(),S1=ee(),w1=!q1||x1(function(){ed.f(1)});b1({target:"Object",stat:!0,forced:w1},{getOwnPropertySymbols:function(r){var t=ed.f;return t?t(S1(r)):[]}})});var td=a(()=>{"use strict";Ov();Iv();Pv();Zv();rd()});var yo=a(()=>{"use strict";var T1=M();T1("asyncDispose")});var go=a(()=>{"use strict";var O1=M();O1("asyncIterator")});var nd=a(()=>{});var bo=a(()=>{"use strict";var E1=M();E1("dispose")});var id=a(()=>{"use strict";var C1=M();C1("hasInstance")});var ad=a(()=>{"use strict";var I1=M();I1("isConcatSpreadable")});var qo=a(()=>{"use strict";var k1=M();k1("iterator")});var od=a(()=>{"use strict";var P1=M();P1("match")});var ud=a(()=>{"use strict";var _1=M();_1("matchAll")});var sd=a(()=>{"use strict";var R1=M();R1("replace")});var cd=a(()=>{"use strict";var A1=M();A1("search")});var ld=a(()=>{"use strict";var N1=M();N1("species")});var fd=a(()=>{"use strict";var M1=M();M1("split")});var xo=a(()=>{"use strict";var j1=M(),$1=za();j1("toPrimitive");$1()});var pd=a(()=>{"use strict";var L1=U(),F1=M(),D1=_e();F1("toStringTag");D1(L1("Symbol"),"Symbol")});var vd=a(()=>{"use strict";var B1=M();B1("unscopables")});var dd=a(()=>{"use strict";var G1=_(),U1=_e();U1(G1.JSON,"JSON",!0)});var hd=a(()=>{});var md=a(()=>{});var gd=a(($6,yd)=>{"use strict";Ka();wt();td();yo();go();nd();bo();id();ad();qo();od();ud();sd();cd();ld();fd();xo();pd();vd();dd();hd();md();var W1=K();yd.exports=W1.Symbol});var So=a((L6,bd)=>{"use strict";bd.exports=function(){}});var dr=a((F6,Td)=>{"use strict";var H1=Ce(),wo=So(),qd=cr(),Sd=Ve(),K1=re().f,V1=In(),Un=kn(),z1=X(),Y1=G(),wd="Array Iterator",J1=Sd.set,Q1=Sd.getterFor(wd);Td.exports=V1(Array,"Array",function(e,r){J1(this,{type:wd,target:H1(e),index:0,kind:r})},function(){var e=Q1(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,Un(void 0,!0);switch(e.kind){case"keys":return Un(t,!1);case"values":return Un(r[t],!1)}return Un([t,r[t]],!1)},"values");var xd=qd.Arguments=qd.Array;wo("keys");wo("values");wo("entries");if(!z1&&Y1&&xd.name!=="values")try{K1(xd,"name",{value:"values"})}catch{}});var Ed=a((D6,Od)=>{"use strict";Od.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var hr=a(()=>{"use strict";dr();var X1=Ed(),Z1=_(),eA=_e(),Cd=cr();for(Wn in X1)eA(Z1[Wn],Wn),Cd[Wn]=Cd.Array;var Wn});var kd=a((U6,Id)=>{"use strict";var rA=gd();hr();Id.exports=rA});var Rd=a(()=>{"use strict";var tA=R(),nA=re().f,Pd=tA("metadata"),_d=Function.prototype;_d[Pd]===void 0&&nA(_d,Pd,{value:null})});var Ad=a(()=>{"use strict";yo()});var Nd=a(()=>{"use strict";bo()});var Md=a(()=>{"use strict";var iA=M();iA("metadata")});var $d=a((X6,jd)=>{"use strict";var aA=kd();Rd();Ad();Nd();Md();jd.exports=aA});var Oo=a((Z6,Ld)=>{"use strict";var oA=U(),uA=A(),To=oA("Symbol"),sA=To.keyFor,cA=uA(To.prototype.valueOf);Ld.exports=To.isRegisteredSymbol||function(r){try{return sA(cA(r))!==void 0}catch{return!1}}});var Fd=a(()=>{"use strict";var lA=x(),fA=Oo();lA({target:"Symbol",stat:!0},{isRegisteredSymbol:fA})});var Io=a((tK,Hd)=>{"use strict";var pA=or(),Ud=U(),vA=A(),dA=Rr(),hA=R(),Kn=Ud("Symbol"),Dd=Kn.isWellKnownSymbol,Wd=Ud("Object","getOwnPropertyNames"),mA=vA(Kn.prototype.valueOf),Bd=pA("wks");for(Hn=0,Eo=Wd(Kn),Gd=Eo.length;Hn<Gd;Hn++)try{Co=Eo[Hn],dA(Kn[Co])&&hA(Co)}catch{}var Co,Hn,Eo,Gd;Hd.exports=function(r){if(Dd&&Dd(r))return!0;try{for(var t=mA(r),n=0,i=Wd(Bd),o=i.length;n<o;n++)if(Bd[i[n]]==t)return!0}catch{}return!1}});var Kd=a(()=>{"use strict";var yA=x(),gA=Io();yA({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:gA})});var Vd=a(()=>{"use strict";var bA=M();bA("customMatcher")});var zd=a(()=>{"use strict";var qA=M();qA("observable")});var Yd=a(()=>{"use strict";var xA=x(),SA=Oo();xA({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:SA})});var Jd=a(()=>{"use strict";var wA=x(),TA=Io();wA({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:TA})});var Qd=a(()=>{"use strict";var OA=M();OA("matcher")});var Xd=a(()=>{"use strict";var EA=M();EA("metadataKey")});var Zd=a(()=>{"use strict";var CA=M();CA("patternMatch")});var eh=a(()=>{"use strict";var IA=M();IA("replaceAll")});var th=a((xK,rh)=>{"use strict";var kA=$d();Fd();Kd();Vd();zd();Yd();Jd();Qd();Xd();Zd();eh();rh.exports=kA});var Se=a((SK,nh)=>{"use strict";nh.exports=th()});var Vn=a((wK,ih)=>{ih.exports=Se()});var oh=a((TK,ah)=>{"use strict";dr();lr();var PA=xt();ah.exports=PA});var sh=a((OK,uh)=>{"use strict";var _A=oh();hr();uh.exports=_A});var lh=a((EK,ch)=>{"use strict";var RA=sh();ch.exports=RA});var ph=a((CK,fh)=>{"use strict";var AA=lh();fh.exports=AA});var ko=a((IK,vh)=>{"use strict";vh.exports=ph()});var zn=a((kK,dh)=>{dh.exports=ko()});var mh=a((PK,hh)=>{"use strict";dr();lr();var NA=Pn();hh.exports=NA});var gh=a((_K,yh)=>{"use strict";var MA=mh();hr();yh.exports=MA});var qh=a((RK,bh)=>{"use strict";var jA=gh();bh.exports=jA});var Sh=a((AK,xh)=>{"use strict";var $A=qh();xh.exports=$A});var Th=a((NK,wh)=>{"use strict";wh.exports=Sh()});var Yn=a((MK,Oh)=>{Oh.exports=Th()});var Ch=a((jK,Eh)=>{"use strict";var LA=U(),FA=A(),DA=Tt(),BA=An(),GA=Q(),UA=FA([].concat);Eh.exports=LA("Reflect","ownKeys")||function(r){var t=DA.f(GA(r)),n=BA.f;return n?UA(t,n(r)):t}});var Ph=a(($K,kh)=>{"use strict";var Ih=W(),WA=Ch(),HA=st(),KA=re();kh.exports=function(e,r,t){for(var n=WA(r),i=KA.f,o=HA.f,u=0;u<n.length;u++){var l=n[u];!Ih(e,l)&&!(t&&Ih(t,l))&&i(e,l,o(r,l))}}});var Rh=a((LK,_h)=>{"use strict";var VA=$(),zA=xe();_h.exports=function(e,r){VA(r)&&"cause"in r&&zA(e,"cause",r.cause)}});var jh=a((FK,Mh)=>{"use strict";var YA=A(),Ah=Error,JA=YA("".replace),QA=function(e){return String(new Ah(e).stack)}("zxcasd"),Nh=/\n\s*at [^:]*:[^\n]*/,XA=Nh.test(QA);Mh.exports=function(e,r){if(XA&&typeof e=="string"&&!Ah.prepareStackTrace)for(;r--;)e=JA(e,Nh,"");return e}});var Lh=a((DK,$h)=>{"use strict";var ZA=P(),eN=We();$h.exports=!ZA(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",eN(1,7)),e.stack!==7):!0})});var Bh=a((BK,Dh)=>{"use strict";var rN=xe(),tN=jh(),nN=Lh(),Fh=Error.captureStackTrace;Dh.exports=function(e,r,t,n){nN&&(Fh?Fh(e,r):rN(e,"stack",tN(t,n)))}});var pe=a((GK,Hh)=>{"use strict";var iN=V(),aN=D(),oN=Q(),uN=He(),sN=Ga(),cN=le(),Gh=B(),lN=Pn(),fN=xt(),Uh=Ba(),pN=TypeError,Jn=function(e,r){this.stopped=e,this.result=r},Wh=Jn.prototype;Hh.exports=function(e,r,t){var n=t&&t.that,i=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),l=!!(t&&t.INTERRUPTED),s=iN(r,n),c,f,p,v,d,m,h,y=function(b){return c&&Uh(c,"normal"),new Jn(!0,b)},q=function(b){return i?(oN(b),l?s(b[0],b[1],y):s(b[0],b[1])):l?s(b,y):s(b)};if(o)c=e.iterator;else if(u)c=e;else{if(f=fN(e),!f)throw new pN(uN(e)+" is not iterable");if(sN(f)){for(p=0,v=cN(e);v>p;p++)if(d=q(e[p]),d&&Gh(Wh,d))return d;return new Jn(!1)}c=lN(e,f)}for(m=o?e.next:c.next;!(h=aN(m,c)).done;){try{d=q(h.value)}catch(b){Uh(c,"throw",b)}if(typeof d=="object"&&d&&Gh(Wh,d))return d}return new Jn(!1)}});var Vh=a((UK,Kh)=>{"use strict";var vN=Ke();Kh.exports=function(e,r){return e===void 0?arguments.length<2?"":r:vN(e)}});var Yh=a(()=>{"use strict";var dN=x(),hN=B(),mN=yt(),Qn=gt(),yN=Ph(),zh=ze(),Po=xe(),_o=We(),gN=Rh(),bN=Bh(),qN=pe(),xN=Vh(),SN=R(),wN=SN("toStringTag"),Xn=Error,TN=[].push,Hr=function(r,t){var n=hN(Ro,this),i;Qn?i=Qn(new Xn,n?mN(this):Ro):(i=n?this:zh(Ro),Po(i,wN,"Error")),t!==void 0&&Po(i,"message",xN(t)),bN(i,Hr,i.stack,1),arguments.length>2&&gN(i,arguments[2]);var o=[];return qN(r,TN,{that:o}),Po(i,"errors",o),i};Qn?Qn(Hr,Xn):yN(Hr,Xn,{name:!0});var Ro=Hr.prototype=zh(Xn.prototype,{constructor:_o(1,Hr),message:_o(1,""),name:_o(1,"AggregateError")});dN({global:!0,constructor:!0,arity:2},{AggregateError:Hr})});var Ao=a(()=>{"use strict";Yh()});var No=a((zK,Jh)=>{"use strict";var Pt=_(),ON=Pr(),EN=qe(),Zn=function(e){return ON.slice(0,e.length)===e};Jh.exports=function(){return Zn("Bun/")?"BUN":Zn("Cloudflare-Workers")?"CLOUDFLARE":Zn("Deno/")?"DENO":Zn("Node.js/")?"NODE":Pt.Bun&&typeof Bun.version=="string"?"BUN":Pt.Deno&&typeof Deno.version=="object"?"DENO":EN(Pt.process)==="process"?"NODE":Pt.window&&Pt.document?"BROWSER":"REST"}()});var _t=a((YK,Qh)=>{"use strict";var CN=No();Qh.exports=CN==="NODE"});var Mo=a((JK,Zh)=>{"use strict";var IN=U(),kN=Nn(),PN=R(),_N=G(),Xh=PN("species");Zh.exports=function(e){var r=IN(e);_N&&r&&!r[Xh]&&kN(r,Xh,{configurable:!0,get:function(){return this}})}});var ei=a((QK,em)=>{"use strict";var RN=B(),AN=TypeError;em.exports=function(e,r){if(RN(r,e))return e;throw new AN("Incorrect invocation")}});var jo=a((XK,rm)=>{"use strict";var NN=vt(),MN=He(),jN=TypeError;rm.exports=function(e){if(NN(e))return e;throw new jN(MN(e)+" is not a constructor")}});var $o=a((ZK,nm)=>{"use strict";var tm=Q(),$N=jo(),LN=nr(),FN=R(),DN=FN("species");nm.exports=function(e,r){var t=tm(e).constructor,n;return t===void 0||LN(n=tm(t)[DN])?r:$N(n)}});var am=a((e8,im)=>{"use strict";var BN=TypeError;im.exports=function(e,r){if(e<r)throw new BN("Not enough arguments");return e}});var Lo=a((r8,om)=>{"use strict";var GN=Pr();om.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(GN)});var Vo=a((t8,hm)=>{"use strict";var ue=_(),UN=kr(),WN=V(),um=N(),HN=W(),dm=P(),sm=Pa(),KN=ur(),cm=hn(),VN=am(),zN=Lo(),YN=_t(),Wo=ue.setImmediate,Ho=ue.clearImmediate,JN=ue.process,Fo=ue.Dispatch,QN=ue.Function,lm=ue.MessageChannel,XN=ue.String,Do=0,Rt={},fm="onreadystatechange",At,mr,Bo,Go;dm(function(){At=ue.location});var Ko=function(e){if(HN(Rt,e)){var r=Rt[e];delete Rt[e],r()}},Uo=function(e){return function(){Ko(e)}},pm=function(e){Ko(e.data)},vm=function(e){ue.postMessage(XN(e),At.protocol+"//"+At.host)};(!Wo||!Ho)&&(Wo=function(r){VN(arguments.length,1);var t=um(r)?r:QN(r),n=KN(arguments,1);return Rt[++Do]=function(){UN(t,void 0,n)},mr(Do),Do},Ho=function(r){delete Rt[r]},YN?mr=function(e){JN.nextTick(Uo(e))}:Fo&&Fo.now?mr=function(e){Fo.now(Uo(e))}:lm&&!zN?(Bo=new lm,Go=Bo.port2,Bo.port1.onmessage=pm,mr=WN(Go.postMessage,Go)):ue.addEventListener&&um(ue.postMessage)&&!ue.importScripts&&At&&At.protocol!=="file:"&&!dm(vm)?(mr=vm,ue.addEventListener("message",pm,!1)):fm in cm("script")?mr=function(e){sm.appendChild(cm("script"))[fm]=function(){sm.removeChild(this),Ko(e)}}:mr=function(e){setTimeout(Uo(e),0)});hm.exports={set:Wo,clear:Ho}});var gm=a((n8,ym)=>{"use strict";var mm=_(),ZN=G(),eM=Object.getOwnPropertyDescriptor;ym.exports=function(e){if(!ZN)return mm[e];var r=eM(mm,e);return r&&r.value}});var zo=a((i8,qm)=>{"use strict";var bm=function(){this.head=null,this.tail=null};bm.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};qm.exports=bm});var Sm=a((a8,xm)=>{"use strict";var rM=Pr();xm.exports=/ipad|iphone|ipod/i.test(rM)&&typeof Pebble<"u"});var Tm=a((o8,wm)=>{"use strict";var tM=Pr();wm.exports=/web0s(?!.*chrome)/i.test(tM)});var _m=a((u8,Pm)=>{"use strict";var Vr=_(),nM=gm(),Om=V(),Yo=Vo().set,iM=zo(),aM=Lo(),oM=Sm(),uM=Tm(),Jo=_t(),Em=Vr.MutationObserver||Vr.WebKitMutationObserver,Cm=Vr.document,Im=Vr.process,ri=Vr.Promise,Zo=nM("queueMicrotask"),Kr,Qo,Xo,ti,km;Zo||(Nt=new iM,Mt=function(){var e,r;for(Jo&&(e=Im.domain)&&e.exit();r=Nt.get();)try{r()}catch(t){throw Nt.head&&Kr(),t}e&&e.enter()},!aM&&!Jo&&!uM&&Em&&Cm?(Qo=!0,Xo=Cm.createTextNode(""),new Em(Mt).observe(Xo,{characterData:!0}),Kr=function(){Xo.data=Qo=!Qo}):!oM&&ri&&ri.resolve?(ti=ri.resolve(void 0),ti.constructor=ri,km=Om(ti.then,ti),Kr=function(){km(Mt)}):Jo?Kr=function(){Im.nextTick(Mt)}:(Yo=Om(Yo,Vr),Kr=function(){Yo(Mt)}),Zo=function(e){Nt.head||Kr(),Nt.add(e)});var Nt,Mt;Pm.exports=Zo});var Am=a((s8,Rm)=>{"use strict";Rm.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var yr=a((c8,Nm)=>{"use strict";Nm.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var gr=a((l8,Mm)=>{"use strict";var sM=_();Mm.exports=sM.Promise});var zr=a((f8,Fm)=>{"use strict";var cM=_(),jt=gr(),lM=N(),fM=oa(),pM=va(),vM=R(),jm=No(),dM=X(),eu=_r(),$m=jt&&jt.prototype,hM=vM("species"),ru=!1,Lm=lM(cM.PromiseRejectionEvent),mM=fM("Promise",function(){var e=pM(jt),r=e!==String(jt);if(!r&&eu===66||dM&&!($m.catch&&$m.finally))return!0;if(!eu||eu<51||!/native code/.test(e)){var t=new jt(function(o){o(1)}),n=function(o){o(function(){},function(){})},i=t.constructor={};if(i[hM]=n,ru=t.then(function(){})instanceof n,!ru)return!0}return!r&&(jm==="BROWSER"||jm==="DENO")&&!Lm});Fm.exports={CONSTRUCTOR:mM,REJECTION_EVENT:Lm,SUBCLASSING:ru}});var we=a((p8,Bm)=>{"use strict";var Dm=F(),yM=TypeError,gM=function(e){var r,t;this.promise=new e(function(n,i){if(r!==void 0||t!==void 0)throw new yM("Bad Promise constructor");r=n,t=i}),this.resolve=Dm(r),this.reject=Dm(t)};Bm.exports.f=function(e){return new gM(e)}});var uy=a(()=>{"use strict";var bM=x(),qM=X(),oi=_t(),Qe=_(),xM=K(),Xr=D(),Gm=ke(),Um=gt(),SM=_e(),wM=Mo(),TM=F(),ai=N(),OM=$(),EM=ei(),CM=$o(),zm=Vo().set,ou=_m(),IM=Am(),kM=yr(),PM=zo(),Ym=Ve(),ui=gr(),uu=zr(),Jm=we(),si="Promise",Qm=uu.CONSTRUCTOR,_M=uu.REJECTION_EVENT,RM=uu.SUBCLASSING,tu=Ym.getterFor(si),AM=Ym.set,Yr=ui&&ui.prototype,br=ui,ni=Yr,Xm=Qe.TypeError,nu=Qe.document,su=Qe.process,iu=Jm.f,NM=iu,MM=!!(nu&&nu.createEvent&&Qe.dispatchEvent),Zm="unhandledrejection",jM="rejectionhandled",Wm=0,ey=1,$M=2,cu=1,ry=2,ii,Hm,ty,Km,ny=function(e){var r;return OM(e)&&ai(r=e.then)?r:!1},iy=function(e,r){var t=r.value,n=r.state===ey,i=n?e.ok:e.fail,o=e.resolve,u=e.reject,l=e.domain,s,c,f;try{i?(n||(r.rejection===ry&&FM(r),r.rejection=cu),i===!0?s=t:(l&&l.enter(),s=i(t),l&&(l.exit(),f=!0)),s===e.promise?u(new Xm("Promise-chain cycle")):(c=ny(s))?Xr(c,s,o,u):o(s)):u(t)}catch(p){l&&!f&&l.exit(),u(p)}},ay=function(e,r){e.notified||(e.notified=!0,ou(function(){for(var t=e.reactions,n;n=t.get();)iy(n,e);e.notified=!1,r&&!e.rejection&&LM(e)}))},oy=function(e,r,t){var n,i;MM?(n=nu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),Qe.dispatchEvent(n)):n={promise:r,reason:t},!_M&&(i=Qe["on"+e])?i(n):e===Zm&&IM("Unhandled promise rejection",t)},LM=function(e){Xr(zm,Qe,function(){var r=e.facade,t=e.value,n=Vm(e),i;if(n&&(i=kM(function(){oi?su.emit("unhandledRejection",t,r):oy(Zm,r,t)}),e.rejection=oi||Vm(e)?ry:cu,i.error))throw i.value})},Vm=function(e){return e.rejection!==cu&&!e.parent},FM=function(e){Xr(zm,Qe,function(){var r=e.facade;oi?su.emit("rejectionHandled",r):oy(jM,r,e.value)})},Jr=function(e,r,t){return function(n){e(r,n,t)}},Qr=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=$M,ay(e,!0))},au=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new Xm("Promise can't be resolved itself");var n=ny(r);n?ou(function(){var i={done:!1};try{Xr(n,r,Jr(au,i,e),Jr(Qr,i,e))}catch(o){Qr(i,o,e)}}):(e.value=r,e.state=ey,ay(e,!1))}catch(i){Qr({done:!1},i,e)}}};if(Qm&&(br=function(r){EM(this,ni),TM(r),Xr(ii,this);var t=tu(this);try{r(Jr(au,t),Jr(Qr,t))}catch(n){Qr(t,n)}},ni=br.prototype,ii=function(r){AM(this,{type:si,done:!1,notified:!1,parent:!1,reactions:new PM,rejection:!1,state:Wm,value:null})},ii.prototype=Gm(ni,"then",function(r,t){var n=tu(this),i=iu(CM(this,br));return n.parent=!0,i.ok=ai(r)?r:!0,i.fail=ai(t)&&t,i.domain=oi?su.domain:void 0,n.state===Wm?n.reactions.add(i):ou(function(){iy(i,n)}),i.promise}),Hm=function(){var e=new ii,r=tu(e);this.promise=e,this.resolve=Jr(au,r),this.reject=Jr(Qr,r)},Jm.f=iu=function(e){return e===br||e===ty?new Hm(e):NM(e)},!qM&&ai(ui)&&Yr!==Object.prototype)){Km=Yr.then,RM||Gm(Yr,"then",function(r,t){var n=this;return new br(function(i,o){Xr(Km,n,i,o)}).then(r,t)},{unsafe:!0});try{delete Yr.constructor}catch{}Um&&Um(Yr,ni)}bM({global:!0,constructor:!0,wrap:!0,forced:Qm},{Promise:br});ty=xM.Promise;SM(br,si,!1,!0);wM(si)});var $t=a((h8,sy)=>{"use strict";var DM=gr(),BM=Wa(),GM=zr().CONSTRUCTOR;sy.exports=GM||!BM(function(e){DM.all(e).then(void 0,function(){})})});var cy=a(()=>{"use strict";var UM=x(),WM=D(),HM=F(),KM=we(),VM=yr(),zM=pe(),YM=$t();UM({target:"Promise",stat:!0,forced:YM},{all:function(r){var t=this,n=KM.f(t),i=n.resolve,o=n.reject,u=VM(function(){var l=HM(t.resolve),s=[],c=0,f=1;zM(r,function(p){var v=c++,d=!1;f++,WM(l,t,p).then(function(m){d||(d=!0,s[v]=m,--f||i(s))},o)}),--f||i(s)});return u.error&&o(u.value),n.promise}})});var fy=a(()=>{"use strict";var JM=x(),QM=X(),XM=zr().CONSTRUCTOR,fu=gr(),ZM=U(),e2=N(),r2=ke(),ly=fu&&fu.prototype;JM({target:"Promise",proto:!0,forced:XM,real:!0},{catch:function(e){return this.then(void 0,e)}});!QM&&e2(fu)&&(lu=ZM("Promise").prototype.catch,ly.catch!==lu&&r2(ly,"catch",lu,{unsafe:!0}));var lu});var py=a(()=>{"use strict";var t2=x(),n2=D(),i2=F(),a2=we(),o2=yr(),u2=pe(),s2=$t();t2({target:"Promise",stat:!0,forced:s2},{race:function(r){var t=this,n=a2.f(t),i=n.reject,o=o2(function(){var u=i2(t.resolve);u2(r,function(l){n2(u,t,l).then(n.resolve,i)})});return o.error&&i(o.value),n.promise}})});var vy=a(()=>{"use strict";var c2=x(),l2=we(),f2=zr().CONSTRUCTOR;c2({target:"Promise",stat:!0,forced:f2},{reject:function(r){var t=l2.f(this),n=t.reject;return n(r),t.promise}})});var pu=a((T8,dy)=>{"use strict";var p2=Q(),v2=$(),d2=we();dy.exports=function(e,r){if(p2(e),v2(r)&&r.constructor===e)return r;var t=d2.f(e),n=t.resolve;return n(r),t.promise}});var yy=a(()=>{"use strict";var h2=x(),m2=U(),hy=X(),y2=gr(),my=zr().CONSTRUCTOR,g2=pu(),b2=m2("Promise"),q2=hy&&!my;h2({target:"Promise",stat:!0,forced:hy||my},{resolve:function(r){return g2(q2&&this===b2?y2:this,r)}})});var gy=a(()=>{"use strict";uy();cy();fy();py();vy();yy()});var vu=a(()=>{"use strict";var x2=x(),S2=D(),w2=F(),T2=we(),O2=yr(),E2=pe(),C2=$t();x2({target:"Promise",stat:!0,forced:C2},{allSettled:function(r){var t=this,n=T2.f(t),i=n.resolve,o=n.reject,u=O2(function(){var l=w2(t.resolve),s=[],c=0,f=1;E2(r,function(p){var v=c++,d=!1;f++,S2(l,t,p).then(function(m){d||(d=!0,s[v]={status:"fulfilled",value:m},--f||i(s))},function(m){d||(d=!0,s[v]={status:"rejected",reason:m},--f||i(s))})}),--f||i(s)});return u.error&&o(u.value),n.promise}})});var du=a(()=>{"use strict";var I2=x(),k2=D(),P2=F(),_2=U(),R2=we(),A2=yr(),N2=pe(),M2=$t(),by="No one promise resolved";I2({target:"Promise",stat:!0,forced:M2},{any:function(r){var t=this,n=_2("AggregateError"),i=R2.f(t),o=i.resolve,u=i.reject,l=A2(function(){var s=P2(t.resolve),c=[],f=0,p=1,v=!1;N2(r,function(d){var m=f++,h=!1;p++,k2(s,t,d).then(function(y){h||v||(v=!0,o(y))},function(y){h||v||(h=!0,c[m]=y,--p||u(new n(c,by)))})}),--p||u(new n(c,by))});return l.error&&u(l.value),i.promise}})});var mu=a(()=>{"use strict";var j2=x(),$2=_(),L2=kr(),F2=ur(),D2=we(),B2=F(),xy=yr(),hu=$2.Promise,qy=!1,G2=!hu||!hu.try||xy(function(){hu.try(function(e){qy=e===8},8)}).error||!qy;j2({target:"Promise",stat:!0,forced:G2},{try:function(e){var r=arguments.length>1?F2(arguments,1):[],t=D2.f(this),n=xy(function(){return L2(B2(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var yu=a(()=>{"use strict";var U2=x(),W2=we();U2({target:"Promise",stat:!0},{withResolvers:function(){var r=W2.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var Oy=a(()=>{"use strict";var H2=x(),K2=X(),ci=gr(),V2=P(),wy=U(),Ty=N(),z2=$o(),Sy=pu(),Y2=ke(),bu=ci&&ci.prototype,J2=!!ci&&V2(function(){bu.finally.call({then:function(){}},function(){})});H2({target:"Promise",proto:!0,real:!0,forced:J2},{finally:function(e){var r=z2(this,wy("Promise")),t=Ty(e);return this.then(t?function(n){return Sy(r,e()).then(function(){return n})}:e,t?function(n){return Sy(r,e()).then(function(){throw n})}:e)}});!K2&&Ty(ci)&&(gu=wy("Promise").prototype.finally,bu.finally!==gu&&Y2(bu,"finally",gu,{unsafe:!0}));var gu});var Cy=a((F8,Ey)=>{"use strict";Ao();dr();wt();gy();vu();du();mu();yu();Oy();lr();var Q2=K();Ey.exports=Q2.Promise});var ky=a((D8,Iy)=>{"use strict";var X2=Cy();hr();Iy.exports=X2});var Py=a(()=>{"use strict";mu()});var _y=a(()=>{"use strict";yu()});var Ay=a((H8,Ry)=>{"use strict";var Z2=ky();Py();_y();Ry.exports=Z2});var Ny=a(()=>{"use strict";Ao()});var My=a(()=>{"use strict";vu()});var jy=a(()=>{"use strict";du()});var Ly=a((X8,$y)=>{"use strict";var ej=Ay();Ny();My();jy();$y.exports=ej});var Zr=a((Z8,Fy)=>{"use strict";Fy.exports=Ly()});var Gy=a((i5,By)=>{"use strict";go();var rj=Br();By.exports=rj.f("asyncIterator")});var Wy=a((a5,Uy)=>{"use strict";var tj=Gy();Uy.exports=tj});var Ky=a((o5,Hy)=>{"use strict";var nj=Wy();Hy.exports=nj});var zy=a((u5,Vy)=>{"use strict";var ij=Ky();Vy.exports=ij});var li=a((s5,Yy)=>{"use strict";Yy.exports=zy()});var Zy=a(()=>{"use strict";var aj=x(),oj=P(),uj=ee(),Xy=yt(),sj=Na(),cj=oj(function(){Xy(1)});aj({target:"Object",stat:!0,forced:cj,sham:!sj},{getPrototypeOf:function(r){return Xy(uj(r))}})});var rg=a((v5,eg)=>{"use strict";Zy();var lj=K();eg.exports=lj.Object.getPrototypeOf});var ng=a((d5,tg)=>{"use strict";var fj=rg();tg.exports=fj});var ag=a((h5,ig)=>{"use strict";var pj=ng();ig.exports=pj});var ug=a((m5,og)=>{"use strict";var vj=ag();og.exports=vj});var fi=a((y5,sg)=>{"use strict";sg.exports=ug()});var lg=a(()=>{"use strict";var dj=x(),hj=A(),mj=Ie(),yj=hj([].reverse),cg=[1,2];dj({target:"Array",proto:!0,forced:String(cg)===String(cg.reverse())},{reverse:function(){return mj(this)&&(this.length=this.length),yj(this)}})});var pg=a((q5,fg)=>{"use strict";lg();var gj=oe();fg.exports=gj("Array","reverse")});var dg=a((x5,vg)=>{"use strict";var bj=B(),qj=pg(),Su=Array.prototype;vg.exports=function(e){var r=e.reverse;return e===Su||bj(Su,e)&&r===Su.reverse?qj:r}});var mg=a((S5,hg)=>{"use strict";var xj=dg();hg.exports=xj});var gg=a((w5,yg)=>{"use strict";var Sj=mg();yg.exports=Sj});var qg=a((T5,bg)=>{"use strict";var wj=gg();bg.exports=wj});var Sg=a((O5,xg)=>{"use strict";xg.exports=qg()});var wu=a((E5,Dt)=>{function Tj(e,r){this.v=e,this.k=r}Dt.exports=Tj,Dt.exports.__esModule=!0,Dt.exports.default=Dt.exports});var wg=a(()=>{"use strict";var Oj=x(),Ej=G(),Cj=ze();Oj({target:"Object",stat:!0,sham:!Ej},{create:Cj})});var Og=a((k5,Tg)=>{"use strict";wg();var Ij=K(),kj=Ij.Object;Tg.exports=function(r,t){return kj.create(r,t)}});var Cg=a((P5,Eg)=>{"use strict";var Pj=Og();Eg.exports=Pj});var kg=a((_5,Ig)=>{"use strict";var _j=Cg();Ig.exports=_j});var _g=a((R5,Pg)=>{"use strict";var Rj=kg();Pg.exports=Rj});var pi=a((A5,Rg)=>{"use strict";Rg.exports=_g()});var Ou=a((N5,jg)=>{"use strict";var Ng=A(),Aj=F(),Nj=$(),Mj=W(),Ag=ur(),jj=Ir(),Mg=Function,$j=Ng([].concat),Lj=Ng([].join),Tu={},Fj=function(e,r,t){if(!Mj(Tu,r)){for(var n=[],i=0;i<r;i++)n[i]="a["+i+"]";Tu[r]=Mg("C,a","return new C("+Lj(n,",")+")")}return Tu[r](e,t)};jg.exports=jj?Mg.bind:function(r){var t=Aj(this),n=t.prototype,i=Ag(arguments,1),o=function(){var l=$j(i,Ag(arguments));return this instanceof o?Fj(t,l.length,l):t.apply(r,l)};return Nj(n)&&(o.prototype=n),o}});var Lg=a(()=>{"use strict";var Dj=x(),$g=Ou();Dj({target:"Function",proto:!0,forced:Function.bind!==$g},{bind:$g})});var Dg=a(($5,Fg)=>{"use strict";Lg();var Bj=oe();Fg.exports=Bj("Function","bind")});var Gg=a((L5,Bg)=>{"use strict";var Gj=B(),Uj=Dg(),Eu=Function.prototype;Bg.exports=function(e){var r=e.bind;return e===Eu||Gj(Eu,e)&&r===Eu.bind?Uj:r}});var Wg=a((F5,Ug)=>{"use strict";var Wj=Gg();Ug.exports=Wj});var Kg=a((D5,Hg)=>{"use strict";var Hj=Wg();Hg.exports=Hj});var zg=a((B5,Vg)=>{"use strict";var Kj=Kg();Vg.exports=Kj});var Bt=a((G5,Yg)=>{"use strict";Yg.exports=zg()});var Jg=a(()=>{"use strict";var Vj=x(),zj=gt();Vj({target:"Object",stat:!0},{setPrototypeOf:zj})});var Xg=a((H5,Qg)=>{"use strict";Jg();var Yj=K();Qg.exports=Yj.Object.setPrototypeOf});var eb=a((K5,Zg)=>{"use strict";var Jj=Xg();Zg.exports=Jj});var tb=a((V5,rb)=>{"use strict";var Qj=eb();rb.exports=Qj});var ib=a((z5,nb)=>{"use strict";var Xj=tb();nb.exports=Xj});var vi=a((Y5,ab)=>{"use strict";ab.exports=ib()});var ub=a(()=>{"use strict";var Zj=x(),e$=G(),ob=re().f;Zj({target:"Object",stat:!0,forced:Object.defineProperty!==ob,sham:!e$},{defineProperty:ob})});var lb=a((X5,cb)=>{"use strict";ub();var r$=K(),sb=r$.Object,t$=cb.exports=function(r,t,n){return sb.defineProperty(r,t,n)};sb.defineProperty.sham&&(t$.sham=!0)});var pb=a((Z5,fb)=>{"use strict";var n$=lb();fb.exports=n$});var db=a((eV,vb)=>{"use strict";var i$=pb();vb.exports=i$});var mb=a((rV,hb)=>{"use strict";var a$=db();hb.exports=a$});var Gt=a((tV,yb)=>{"use strict";yb.exports=mb()});var Cu=a((nV,Ae)=>{var o$=Gt();function di(e,r,t,n){var i=o$;try{i({},"",{})}catch{i=0}Ae.exports=di=function(u,l,s,c){function f(p,v){di(u,p,function(d){return this._invoke(p,v,d)})}l?i?i(u,l,{value:s,enumerable:!c,configurable:!c,writable:!c}):u[l]=s:(f("next",0),f("throw",1),f("return",2))},Ae.exports.__esModule=!0,Ae.exports.default=Ae.exports,di(e,r,t,n)}Ae.exports=di,Ae.exports.__esModule=!0,Ae.exports.default=Ae.exports});var ku=a((iV,Ne)=>{var gb=Se(),Iu=pi(),u$=Bt(),s$=fi(),bb=vi(),Oe=Cu();function qb(){var e,r,t=typeof gb=="function"?gb:{},n=t.iterator||"@@iterator",i=t.toStringTag||"@@toStringTag";function o(d,m,h,y){var q=m&&m.prototype instanceof l?m:l,b=Iu(q.prototype);return Oe(b,"_invoke",function(I,C,S){var T,w,E,j=0,ge=S||[],k=!1,Z={p:0,n:0,v:e,a:be,f:u$(be).call(be,e,4),d:function(L,ve){return T=L,w=0,E=e,Z.n=ve,u}};function be(J,L){for(w=J,E=L,r=0;!k&&j&&!ve&&r<ge.length;r++){var ve,O=ge[r],Er=Z.p,Ue=O[2];J>3?(ve=Ue===L)&&(E=O[(w=O[4])?5:(w=3,3)],O[4]=O[5]=e):O[0]<=Er&&((ve=J<2&&Er<O[1])?(w=0,Z.v=L,Z.n=O[1]):Er<Ue&&(ve=J<3||O[0]>L||L>Ue)&&(O[4]=J,O[5]=L,Z.n=Ue,w=0))}if(ve||J>1)return u;throw k=!0,L}return function(J,L,ve){if(j>1)throw TypeError("Generator is already running");for(k&&L===1&&be(L,ve),w=L,E=ve;(r=w<2?e:E)||!k;){T||(w?w<3?(w>1&&(Z.n=-1),be(w,E)):Z.n=E:Z.v=E);try{if(j=2,T){if(w||(J="next"),r=T[J]){if(!(r=r.call(T,E)))throw TypeError("iterator result is not an object");if(!r.done)return r;E=r.value,w<2&&(w=0)}else w===1&&(r=T.return)&&r.call(T),w<2&&(E=TypeError("The iterator does not provide a '"+J+"' method"),w=1);T=e}else if((r=(k=Z.n<0)?E:I.call(C,Z))!==u)break}catch(O){T=e,w=1,E=O}finally{j=1}}return{value:r,done:k}}}(d,h,y),!0),b}var u={};function l(){}function s(){}function c(){}r=s$;var f=[][n]?r(r([][n]())):(Oe(r={},n,function(){return this}),r),p=c.prototype=l.prototype=Iu(f);function v(d){return bb?bb(d,c):(d.__proto__=c,Oe(d,i,"GeneratorFunction")),d.prototype=Iu(p),d}return s.prototype=c,Oe(p,"constructor",c),Oe(c,"constructor",s),s.displayName="GeneratorFunction",Oe(c,i,"GeneratorFunction"),Oe(p),Oe(p,i,"Generator"),Oe(p,n,function(){return this}),Oe(p,"toString",function(){return"[object Generator]"}),(Ne.exports=qb=function(){return{w:o,m:v}},Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports)()}Ne.exports=qb,Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports});var Ru=a((aV,Ut)=>{var c$=Se(),l$=li(),f$=wu(),Pu=Cu();function _u(e,r){function t(i,o,u,l){try{var s=e[i](o),c=s.value;return c instanceof f$?r.resolve(c.v).then(function(f){t("next",f,u,l)},function(f){t("throw",f,u,l)}):r.resolve(c).then(function(f){s.value=f,u(s)},function(f){return t("throw",f,u,l)})}catch(f){l(f)}}var n;this.next||(Pu(_u.prototype),Pu(_u.prototype,typeof c$=="function"&&l$||"@asyncIterator",function(){return this})),Pu(this,"_invoke",function(i,o,u){function l(){return new r(function(s,c){t(i,u,s,c)})}return n=n?n.then(l,l):l()},!0)}Ut.exports=_u,Ut.exports.__esModule=!0,Ut.exports.default=Ut.exports});var Au=a((oV,Wt)=>{var p$=Zr(),v$=ku(),d$=Ru();function h$(e,r,t,n,i){return new d$(v$().w(e,r,t,n),i||p$)}Wt.exports=h$,Wt.exports.__esModule=!0,Wt.exports.default=Wt.exports});var xb=a((uV,Ht)=>{var m$=Au();function y$(e,r,t,n,i){var o=m$(e,r,t,n,i);return o.next().then(function(u){return u.done?u.value:o.next()})}Ht.exports=y$,Ht.exports.__esModule=!0,Ht.exports.default=Ht.exports});var Tb=a((sV,wb)=>{"use strict";var Sb=He(),g$=TypeError;wb.exports=function(e,r){if(!delete e[r])throw new g$("Cannot delete property "+Sb(r)+" of "+Sb(e))}});var Ob=a(()=>{"use strict";var b$=x(),q$=ee(),x$=le(),S$=Lr(),w$=Tb(),T$=St(),O$=[].unshift(0)!==1,E$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},C$=O$||!E$();b$({target:"Array",proto:!0,arity:1,forced:C$},{unshift:function(r){var t=q$(this),n=x$(t),i=arguments.length;if(i){T$(n+i);for(var o=n;o--;){var u=o+i;o in t?t[u]=t[o]:w$(t,u)}for(var l=0;l<i;l++)t[l]=arguments[l]}return S$(t,n+i)}})});var Cb=a((fV,Eb)=>{"use strict";Ob();var I$=oe();Eb.exports=I$("Array","unshift")});var kb=a((pV,Ib)=>{"use strict";var k$=B(),P$=Cb(),Nu=Array.prototype;Ib.exports=function(e){var r=e.unshift;return e===Nu||k$(Nu,e)&&r===Nu.unshift?P$:r}});var _b=a((vV,Pb)=>{"use strict";var _$=kb();Pb.exports=_$});var Ab=a((dV,Rb)=>{"use strict";var R$=_b();Rb.exports=R$});var Mb=a((hV,Nb)=>{"use strict";var A$=Ab();Nb.exports=A$});var $b=a((mV,jb)=>{"use strict";jb.exports=Mb()});var Lb=a((yV,Kt)=>{var N$=$b();function M$(e){var r=Object(e),t=[];for(var n in r)N$(t).call(t,n);return function i(){for(;t.length;)if((n=t.pop())in r)return i.value=n,i.done=!1,i;return i.done=!0,i}}Kt.exports=M$,Kt.exports.__esModule=!0,Kt.exports.default=Kt.exports});var Db=a((gV,Fb)=>{"use strict";dr();wt();lr();qo();var j$=Br();Fb.exports=j$.f("iterator")});var Gb=a((bV,Bb)=>{"use strict";var $$=Db();hr();Bb.exports=$$});var Wb=a((qV,Ub)=>{"use strict";var L$=Gb();Ub.exports=L$});var Kb=a((xV,Hb)=>{"use strict";var F$=Wb();Hb.exports=F$});var Vt=a((SV,Vb)=>{"use strict";Vb.exports=Kb()});var zb=a((wV,Me)=>{var hi=Se(),D$=Vt();function Mu(e){"@babel/helpers - typeof";return Me.exports=Mu=typeof hi=="function"&&typeof D$=="symbol"?function(r){return typeof r}:function(r){return r&&typeof hi=="function"&&r.constructor===hi&&r!==hi.prototype?"symbol":typeof r},Me.exports.__esModule=!0,Me.exports.default=Me.exports,Mu(e)}Me.exports=Mu,Me.exports.__esModule=!0,Me.exports.default=Me.exports});var Yb=a((TV,zt)=>{var B$=zb().default,G$=Se(),U$=Vt();function W$(e){if(e!=null){var r=e[typeof G$=="function"&&U$||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(B$(e)+" is not iterable")}zt.exports=W$,zt.exports.__esModule=!0,zt.exports.default=zt.exports});var Xb=a((OV,je)=>{var Jb=fi(),H$=Sg(),K$=wu(),V$=ku(),z$=xb(),Y$=Au(),J$=Ru(),Q$=Lb(),Qb=Yb();function ju(){"use strict";var e=V$(),r=e.m(ju),t=(Jb?Jb(r):r.__proto__).constructor;function n(u){var l=typeof u=="function"&&u.constructor;return!!l&&(l===t||(l.displayName||l.name)==="GeneratorFunction")}var i={throw:1,return:2,break:3,continue:3};function o(u){var l,s;return function(c){l||(l={stop:function(){return s(c.a,2)},catch:function(){return c.v},abrupt:function(p,v){return s(c.a,i[p],v)},delegateYield:function(p,v,d){return l.resultName=v,s(c.d,Qb(p),d)},finish:function(p){return s(c.f,p)}},s=function(p,v,d){c.p=l.prev,c.n=l.next;try{return p(v,d)}finally{l.next=c.n}}),l.resultName&&(l[l.resultName]=c.v,l.resultName=void 0),l.sent=c.v,l.next=c.n;try{return u.call(this,l)}finally{c.p=l.prev,c.n=l.next}}}return(je.exports=ju=function(){return{wrap:function(s,c,f,p){return e.w(o(s),c,f,p&&H$(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(s,c){return new K$(s,c)},AsyncIterator:J$,async:function(s,c,f,p,v){return(n(c)?Y$:z$)(o(s),c,f,p,v)},keys:Q$,values:Qb}},je.exports.__esModule=!0,je.exports.default=je.exports)()}je.exports=ju,je.exports.__esModule=!0,je.exports.default=je.exports});var se=a((EV,Zb)=>{var mi=Xb()();Zb.exports=mi;try{regeneratorRuntime=mi}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=mi:Function("r","regeneratorRuntime = r")(mi)}});var $u=a((gi,rq)=>{"use strict";Object.defineProperty(gi,"__esModule",{value:!0});var yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},eq=function(){function e(r,t){var n=[],i=!0,o=!1,u=void 0;try{for(var l=r[Symbol.iterator](),s;!(i=(s=l.next()).done)&&(n.push(s.value),!(t&&n.length===t));i=!0);}catch(c){o=!0,u=c}finally{try{!i&&l.return&&l.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();gi.default=X$;function X$(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(i){return i.type==="tag"||i.type==="script"||i.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var i=this.attribs,o=Object.keys(i),u=o.reduce(function(l,s,c){return l[c]={name:s,value:i[s]},l},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var i=[];return Ze(this.childTags,function(o){(o.name===n||n==="*")&&i.push(o)}),i}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var i=n.trim().replace(/\s+/g," ").split(" "),o=[];return Ze([this],function(u){var l=u.attribs.class;l&&i.every(function(s){return l.indexOf(s)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var i=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=Z$(n),u=o.shift(),l=o.length;return u(this).filter(function(s){for(var c=0;c<l;){if(s=o[c](s,i),!s)return!1;c+=1}return!0})}),t.contains||(t.contains=function(n){var i=!1;return Ze([this],function(o,u){o===n&&(i=!0,u())}),i}),!0}function Z$(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,i=r.split(":"),o=eq(i,2),u=o[0],l=o[1],s=null,c=null;if(function(){switch(!0){case/>/.test(u):c=function(S){return function(T){return T(S.parent)&&S.parent}};break;case/^\./.test(u):var m=u.substr(1).split(".");s=function(S){var T=S.attribs.class;return T&&m.every(function(w){return T.indexOf(w)>-1})},c=function(S,T){return n?S.getElementsByClassName(m.join(" ")):typeof S=="function"?S(s):Yt(S,T,s)};break;case/^\[/.test(u):var h=u.replace(/\[|\]|"/g,"").split("="),y=eq(h,2),q=y[0],b=y[1];s=function(S){var T=Object.keys(S.attribs).indexOf(q)>-1;return!!(T&&(!b||S.attribs[q]===b))},c=function(S,T){if(n){var w=function(){var E=[];return Ze([S],function(j){s(j)&&E.push(j)}),{v:E}}();if((typeof w>"u"?"undefined":yi(w))==="object")return w.v}return typeof S=="function"?S(s):Yt(S,T,s)};break;case/^#/.test(u):var I=u.substr(1);s=function(S){return S.attribs.id===I},c=function(S,T){if(n){var w=function(){var E=[];return Ze([S],function(j,ge){s(j)&&(E.push(j),ge())}),{v:E}}();if((typeof w>"u"?"undefined":yi(w))==="object")return w.v}return typeof S=="function"?S(s):Yt(S,T,s)};break;case/\*/.test(u):s=function(S){return!0},c=function(S,T){if(n){var w=function(){var E=[];return Ze([S],function(j){return E.push(j)}),{v:E}}();if((typeof w>"u"?"undefined":yi(w))==="object")return w.v}return typeof S=="function"?S(s):Yt(S,T,s)};break;default:s=function(S){return S.name===u},c=function(S,T){if(n){var w=function(){var E=[];return Ze([S],function(j){s(j)&&E.push(j)}),{v:E}}();if((typeof w>"u"?"undefined":yi(w))==="object")return w.v}return typeof S=="function"?S(s):Yt(S,T,s)}}}(),!l)return c;var f=l.match(/-(child|type)\((\d+)\)$/),p=f[1],v=parseInt(f[2],10)-1,d=function(h){if(h){var y=h.parent.childTags;p==="type"&&(y=y.filter(s));var q=y.findIndex(function(b){return b===h});if(q===v)return!0}return!1};return function(h){var y=c(h);return n?y.reduce(function(q,b){return d(b)&&q.push(b),q},[]):d(y)&&y}})}function Ze(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&Ze(t.childTags,r)})}function Yt(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}rq.exports=gi.default});var qi=a(bi=>{"use strict";Object.defineProperty(bi,"__esModule",{value:!0});bi.convertNodeList=eL;bi.escapeValue=rL;function eL(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function rL(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var fq=a((xi,lq)=>{"use strict";Object.defineProperty(xi,"__esModule",{value:!0});xi.default=tL;var aq=qi(),tq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function tL(e,r){var t=r.root,n=t===void 0?document:t,i=r.skip,o=i===void 0?null:i,u=r.priority,l=u===void 0?["id","class","href","src"]:u,s=r.ignore,c=s===void 0?{}:s,f=[],p=e,v=f.length,d=!1,m=o&&(Array.isArray(o)?o:[o]).map(function(q){return typeof q!="function"?function(b){return b===q}:q}),h=function(b){return o&&m.some(function(I){return I(b)})};for(Object.keys(c).forEach(function(q){q==="class"&&(d=!0);var b=c[q];typeof b!="function"&&(typeof b=="number"&&(b=b.toString()),typeof b=="string"&&(b=new RegExp((0,aq.escapeValue)(b).replace(/\\/g,"\\\\"))),typeof b=="boolean"&&(b=b?/(?:)/:/.^/),c[q]=function(I,C){return b.test(C)})}),d&&function(){var q=c.attribute;c.attribute=function(b,I,C){return c.class(I)||q&&q(b,I,C)}}();p!==n;){if(h(p)!==!0){if(nq(l,p,c,f,n)||iq(p,c,f,n))break;nq(l,p,c,f),f.length===v&&iq(p,c,f),f.length===v&&nL(l,p,c,f)}p=p.parentNode,v=f.length}if(p===n){var y=sq(l,p,c);f.unshift(y)}return f.join(" ")}function nq(e,r,t,n){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=oq(e,r,t);if(o){var u=i.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function oq(e,r,t){for(var n=r.attributes,i=Object.keys(n).sort(function(h,y){var q=e.indexOf(n[h].name),b=e.indexOf(n[y].name);return b===-1?q===-1?0:-1:q-b}),o=0,u=i.length;o<u;o++){var l=i[o],s=n[l],c=s.name,f=(0,aq.escapeValue)(s.value),p=t[c]||t.attribute,v=tq[c]||tq.attribute;if(!cq(p,c,f,v)){var d="["+c+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(c==="id"&&(d="#"+f),c==="class")){var m=f.trim().replace(/\s+/g,".");d="."+m}return d}}return null}function iq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,i=uq(e,r);if(i){var o=n.getElementsByTagName(i);if(o.length===1)return t.unshift(i),!0}return!1}function uq(e,r){var t=e.tagName.toLowerCase();return cq(r.tag,null,t)?null:t}function nL(e,r,t,n){for(var i=r.parentNode,o=i.childTags||i.children,u=0,l=o.length;u<l;u++){var s=o[u];if(s===r){var c=sq(e,s,t);if(!c)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,s,t,c);var f="> "+c+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function sq(e,r,t){var n=oq(e,r,t);return n||(n=uq(r,t)),n}function cq(e,r,t,n){if(!t)return!0;var i=e||n;return i?i(r,t,n):!1}lq.exports=xi.default});var Lu=a((wi,pq)=>{"use strict";Object.defineProperty(wi,"__esModule",{value:!0});wi.default=sL;var iL=$u(),aL=uL(iL),oL=qi();function uL(e){return e&&e.__esModule?e:{default:e}}function sL(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,oL.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,aL.default)(r[0],t),i=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(i.length<2)return Si("",e,"",r);for(var o=[i.pop()];i.length>1;){var u=i.pop(),l=i.join(" "),s=o.join(" "),c=l+" "+s,f=document.querySelectorAll(c);f.length!==r.length&&o.unshift(Si(l,u,s,r))}return o.unshift(i[0]),i=o,i[0]=Si("",i[0],i.slice(1).join(" "),r),i[i.length-1]=Si(i.slice(0,-1).join(" "),i[i.length-1],"",r),n&&delete global.document,i.join(" ").replace(/>/g,"> ").trim()}function Si(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var i=r.replace(/=.*$/,"]"),o=""+e+i+t,u=document.querySelectorAll(o);if(et(u,n))r=i;else for(var l=document.querySelectorAll(""+e+i),s=function(){var C=l[c];if(n.some(function(T){return C.contains(T)})){var S=C.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),et(u,n)&&(r=S),"break"}},c=0,f=l.length;c<f;c++){var o,u,p=s();if(p==="break")break}}if(/>/.test(r)){var v=r.replace(/>/,""),o=""+e+v+t,u=document.querySelectorAll(o);et(u,n)&&(r=v)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);et(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var m=r.trim().split(".").slice(1).map(function(I){return"."+I}).sort(function(I,C){return I.length-C.length});m.length;){var h=r.replace(m.shift(),"").trim(),o=(""+e+h+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);et(u,n)&&(r=h)}if(m=r&&r.match(/\./g),m&&m.length>2)for(var y=document.querySelectorAll(""+e+r),q=function(){var C=y[c];if(n.some(function(T){return C.contains(T)})){var S=C.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),et(u,n)&&(r=S),"break"}},c=0,f=y.length;c<f;c++){var o,u,b=q();if(b==="break")break}}return r}function et(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var i=0;i<t;i++)if(e[i]===n)return!0;return!1})}pq.exports=wi.default});var Fu=a(Ti=>{"use strict";Object.defineProperty(Ti,"__esModule",{value:!0});Ti.getCommonAncestor=cL;Ti.getCommonProperties=lL;function cL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,i=[];e.forEach(function(p,v){for(var d=[];p!==n;)p=p.parentNode,d.unshift(p);i[v]=d}),i.sort(function(p,v){return p.length-v.length});for(var o=i.shift(),u=null,l=function(){var v=o[s],d=i.some(function(m){return!m.some(function(h){return h===v})});if(d)return"break";u=v},s=0,c=o.length;s<c;s++){var f=l();if(f==="break")break}return u}function lL(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,i=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(s){return u.some(function(c){return c===s})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(i!==void 0&&function(){var s=t.attributes,c=Object.keys(s).reduce(function(v,d){var m=s[d],h=m.name;return m&&h!=="class"&&(v[h]=m.value),v},{}),f=Object.keys(c),p=Object.keys(i);f.length?p.length?(i=p.reduce(function(v,d){var m=i[d];return m===c[d]&&(v[d]=m),v},{}),Object.keys(i).length?r.attributes=i:delete r.attributes):r.attributes=c:delete r.attributes}(),o!==void 0){var l=t.tagName.toLowerCase();o?l!==o&&delete r.tag:r.tag=l}}),r}});var gq=a(Jt=>{"use strict";Object.defineProperty(Jt,"__esModule",{value:!0});var fL=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Jt.getSingleSelector=Bu;Jt.getMultiSelector=yq;Jt.default=yL;var pL=$u(),dq=Du(pL),vL=fq(),dL=Du(vL),hL=Lu(),hq=Du(hL),vq=qi(),mq=Fu();function Du(e){return e&&e.__esModule?e:{default:e}}function Bu(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":fL(e))+'")');var t=(0,dq.default)(e,r),n=(0,dL.default)(e,r),i=(0,hq.default)(n,e,r);return t&&delete global.document,i}function yq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,vq.convertNodeList)(e)),e.some(function(c){return c.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,dq.default)(e[0],r),n=(0,mq.getCommonAncestor)(e,r),i=Bu(n,r),o=mL(e),u=o[0],l=(0,hq.default)(i+" "+u,e,r),s=(0,vq.convertNodeList)(document.querySelectorAll(l));return e.every(function(c){return s.some(function(f){return f===c})})?(t&&delete global.document,l):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function mL(e){var r=(0,mq.getCommonProperties)(e),t=r.classes,n=r.attributes,i=r.tag,o=[];if(i&&o.push(i),t){var u=t.map(function(s){return"."+s}).join("");o.push(u)}if(n){var l=Object.keys(n).reduce(function(s,c){return s.push("["+c+'="'+n[c]+'"]'),s},[]).join("");o.push(l)}return o.length,[o.join("")]}function yL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?yq(e,r):Bu(e,r)}});var xq=a(ne=>{"use strict";Object.defineProperty(ne,"__esModule",{value:!0});ne.default=ne.common=ne.optimize=ne.getMultiSelector=ne.getSingleSelector=ne.select=void 0;var Gu=gq();Object.defineProperty(ne,"getSingleSelector",{enumerable:!0,get:function(){return Gu.getSingleSelector}});Object.defineProperty(ne,"getMultiSelector",{enumerable:!0,get:function(){return Gu.getMultiSelector}});var bq=qq(Gu),gL=Lu(),bL=qq(gL),qL=Fu(),xL=SL(qL);function SL(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function qq(e){return e&&e.__esModule?e:{default:e}}ne.select=bq.default;ne.optimize=bL.default;ne.common=xL;ne.default=bq.default});var Sq=a(()=>{"use strict";var RL=x(),AL=Ie();RL({target:"Array",stat:!0},{isArray:AL})});var Tq=a((UV,wq)=>{"use strict";Sq();var NL=K();wq.exports=NL.Array.isArray});var Eq=a((WV,Oq)=>{"use strict";var ML=Tq();Oq.exports=ML});var Iq=a((HV,Cq)=>{"use strict";var jL=Eq();Cq.exports=jL});var Pq=a((KV,kq)=>{"use strict";var $L=Iq();kq.exports=$L});var Rq=a((VV,_q)=>{"use strict";_q.exports=Pq()});var Mq=a(()=>{"use strict";var LL=x(),FL=ee(),DL=le(),BL=Lr(),GL=St(),UL=P(),WL=UL(function(){return[].push.call({length:4294967296},1)!==4294967297}),HL=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},KL=WL||!HL();LL({target:"Array",proto:!0,arity:1,forced:KL},{push:function(r){var t=FL(this),n=DL(t),i=arguments.length;GL(n+i);for(var o=0;o<i;o++)t[n]=arguments[o],n++;return BL(t,n),n}})});var $q=a((QV,jq)=>{"use strict";Mq();var VL=oe();jq.exports=VL("Array","push")});var Fq=a((XV,Lq)=>{"use strict";var zL=B(),YL=$q(),Uu=Array.prototype;Lq.exports=function(e){var r=e.push;return e===Uu||zL(Uu,e)&&r===Uu.push?YL:r}});var Bq=a((ZV,Dq)=>{"use strict";var JL=Fq();Dq.exports=JL});var Uq=a((ez,Gq)=>{"use strict";var QL=Bq();Gq.exports=QL});var Hq=a((rz,Wq)=>{"use strict";var XL=Uq();Wq.exports=XL});var Wu=a((tz,Kq)=>{"use strict";Kq.exports=Hq()});var nx=a(()=>{"use strict";var ZL=x(),eF=Ot().map,rF=dt(),tF=rF("map");ZL({target:"Array",proto:!0,forced:!tF},{map:function(r){return eF(this,r,arguments.length>1?arguments[1]:void 0)}})});var ax=a((Pz,ix)=>{"use strict";nx();var nF=oe();ix.exports=nF("Array","map")});var ux=a((_z,ox)=>{"use strict";var iF=B(),aF=ax(),Ku=Array.prototype;ox.exports=function(e){var r=e.map;return e===Ku||iF(Ku,e)&&r===Ku.map?aF:r}});var cx=a((Rz,sx)=>{"use strict";var oF=ux();sx.exports=oF});var fx=a((Az,lx)=>{"use strict";var uF=cx();lx.exports=uF});var vx=a((Nz,px)=>{"use strict";var sF=fx();px.exports=sF});var hx=a((Mz,dx)=>{"use strict";dx.exports=vx()});var yx=a((jz,mx)=>{mx.exports=hx()});var bx=a(($z,gx)=>{gx.exports=Zr()});var Tx=a((Lz,wx)=>{"use strict";var cF=F(),lF=ee(),fF=fn(),pF=le(),qx=TypeError,xx="Reduce of empty array with no initial value",Sx=function(e){return function(r,t,n,i){var o=lF(r),u=fF(o),l=pF(o);if(cF(t),l===0&&n<2)throw new qx(xx);var s=e?l-1:0,c=e?-1:1;if(n<2)for(;;){if(s in u){i=u[s],s+=c;break}if(s+=c,e?s<0:l<=s)throw new qx(xx)}for(;e?s>=0:l>s;s+=c)s in u&&(i=t(i,u[s],s,o));return i}};wx.exports={left:Sx(!1),right:Sx(!0)}});var Vu=a((Fz,Ox)=>{"use strict";var vF=P();Ox.exports=function(e,r){var t=[][e];return!!t&&vF(function(){t.call(null,r||function(){return 1},1)})}});var Cx=a(()=>{"use strict";var dF=x(),hF=Tx().left,mF=Vu(),Ex=_r(),yF=_t(),gF=!yF&&Ex>79&&Ex<83,bF=gF||!mF("reduce");dF({target:"Array",proto:!0,forced:bF},{reduce:function(r){var t=arguments.length;return hF(this,r,t,t>1?arguments[1]:void 0)}})});var kx=a((Gz,Ix)=>{"use strict";Cx();var qF=oe();Ix.exports=qF("Array","reduce")});var _x=a((Uz,Px)=>{"use strict";var xF=B(),SF=kx(),zu=Array.prototype;Px.exports=function(e){var r=e.reduce;return e===zu||xF(zu,e)&&r===zu.reduce?SF:r}});var Ax=a((Wz,Rx)=>{"use strict";var wF=_x();Rx.exports=wF});var Mx=a((Hz,Nx)=>{"use strict";var TF=Ax();Nx.exports=TF});var $x=a((Kz,jx)=>{"use strict";var OF=Mx();jx.exports=OF});var Fx=a((Vz,Lx)=>{"use strict";Lx.exports=$x()});var Bx=a((zz,Dx)=>{Dx.exports=Fx()});var Wx=a((Yz,Ux)=>{"use strict";var EF=Ie(),CF=le(),IF=St(),kF=V(),PF=$r(),Gx=function(e,r,t,n,i,o,u,l){for(var s=i,c=0,f=u?kF(u,l):!1,p,v;c<n;)c in t&&(p=f?f(t[c],c,r):t[c],o>0&&EF(p)?(v=CF(p),s=Gx(e,r,p,v,s,o-1)-1):(IF(s+1),PF(e,s,p)),s++),c++;return s};Ux.exports=Gx});var Hx=a(()=>{"use strict";var _F=x(),RF=Wx(),AF=F(),NF=ee(),MF=le(),jF=Rn();_F({target:"Array",proto:!0},{flatMap:function(r){var t=NF(this),n=MF(t),i;return AF(r),i=jF(t,0),RF(i,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),i}})});var Kx=a(()=>{"use strict";var $F=So();$F("flatMap")});var zx=a((e7,Vx)=>{"use strict";Hx();Kx();var LF=oe();Vx.exports=LF("Array","flatMap")});var Jx=a((r7,Yx)=>{"use strict";var FF=B(),DF=zx(),Yu=Array.prototype;Yx.exports=function(e){var r=e.flatMap;return e===Yu||FF(Yu,e)&&r===Yu.flatMap?DF:r}});var Xx=a((t7,Qx)=>{"use strict";var BF=Jx();Qx.exports=BF});var eS=a((n7,Zx)=>{"use strict";var GF=Xx();Zx.exports=GF});var tS=a((i7,rS)=>{"use strict";var UF=eS();rS.exports=UF});var iS=a((a7,nS)=>{"use strict";nS.exports=tS()});var oS=a((o7,aS)=>{aS.exports=iS()});var sS=a((u7,uS)=>{"use strict";Ka();var WF=oe();uS.exports=WF("Array","concat")});var lS=a((s7,cS)=>{"use strict";var HF=B(),KF=sS(),Ju=Array.prototype;cS.exports=function(e){var r=e.concat;return e===Ju||HF(Ju,e)&&r===Ju.concat?KF:r}});var pS=a((c7,fS)=>{"use strict";var VF=lS();fS.exports=VF});var dS=a((l7,vS)=>{"use strict";var zF=pS();vS.exports=zF});var mS=a((f7,hS)=>{"use strict";var YF=dS();hS.exports=YF});var gS=a((p7,yS)=>{"use strict";yS.exports=mS()});var Qu=a((v7,bS)=>{bS.exports=gS()});var SS=a(()=>{});var TS=a((j7,wS)=>{"use strict";SS();xo();var aD=Br();wS.exports=aD.f("toPrimitive")});var ES=a(($7,OS)=>{"use strict";var oD=TS();OS.exports=oD});var IS=a((L7,CS)=>{"use strict";var uD=ES();CS.exports=uD});var PS=a((F7,kS)=>{"use strict";var sD=IS();kS.exports=sD});var RS=a((D7,_S)=>{"use strict";_S.exports=PS()});var BS=a((u9,DS)=>{"use strict";var lD=$(),fD=qe(),pD=R(),vD=pD("match");DS.exports=function(e){var r;return lD(e)&&((r=e[vD])!==void 0?!!r:fD(e)==="RegExp")}});var US=a((s9,GS)=>{"use strict";var dD=BS(),hD=TypeError;GS.exports=function(e){if(dD(e))throw new hD("The method doesn't accept regular expressions");return e}});var HS=a((c9,WS)=>{"use strict";var mD=R(),yD=mD("match");WS.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[yD]=!1,"/./"[e](r)}catch{}}return!1}});var zS=a(()=>{"use strict";var gD=x(),bD=ot(),qD=st().f,xD=ma(),KS=Ke(),SD=US(),wD=ir(),TD=HS(),OD=X(),ED=bD("".slice),CD=Math.min,VS=TD("startsWith"),ID=!OD&&!VS&&!!function(){var e=qD(String.prototype,"startsWith");return e&&!e.writable}();gD({target:"String",proto:!0,forced:!ID&&!VS},{startsWith:function(r){var t=KS(wD(this));SD(r);var n=xD(CD(arguments.length>1?arguments[1]:void 0,t.length)),i=KS(r);return ED(t,n,n+i.length)===i}})});var JS=a((p9,YS)=>{"use strict";zS();var kD=oe();YS.exports=kD("String","startsWith")});var XS=a((v9,QS)=>{"use strict";var PD=B(),_D=JS(),rs=String.prototype;QS.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===rs||PD(rs,e)&&r===rs.startsWith?_D:r}});var ew=a((d9,ZS)=>{"use strict";var RD=XS();ZS.exports=RD});var tw=a((h9,rw)=>{"use strict";var AD=ew();rw.exports=AD});var iw=a((m9,nw)=>{"use strict";var ND=tw();nw.exports=ND});var ow=a((y9,aw)=>{"use strict";aw.exports=iw()});var sw=a((g9,uw)=>{uw.exports=ow()});var cw=a(()=>{"use strict";var MD=x(),jD=Ot().filter,$D=dt(),LD=$D("filter");MD({target:"Array",proto:!0,forced:!LD},{filter:function(r){return jD(this,r,arguments.length>1?arguments[1]:void 0)}})});var fw=a((x9,lw)=>{"use strict";cw();var FD=oe();lw.exports=FD("Array","filter")});var vw=a((S9,pw)=>{"use strict";var DD=B(),BD=fw(),ts=Array.prototype;pw.exports=function(e){var r=e.filter;return e===ts||DD(ts,e)&&r===ts.filter?BD:r}});var hw=a((w9,dw)=>{"use strict";var GD=vw();dw.exports=GD});var yw=a((T9,mw)=>{"use strict";var UD=hw();mw.exports=UD});var bw=a((O9,gw)=>{"use strict";var WD=yw();gw.exports=WD});var xw=a((E9,qw)=>{"use strict";qw.exports=bw()});var ww=a((C9,Sw)=>{Sw.exports=xw()});var Fw=a(()=>{"use strict";var XD=x(),ZD=U(),is=kr(),eB=Ou(),Aw=jo(),rB=Q(),Nw=$(),tB=ze(),jw=P(),as=ZD("Reflect","construct"),nB=Object.prototype,iB=[].push,$w=jw(function(){function e(){}return!(as(function(){},[],e)instanceof e)}),Lw=!jw(function(){as(function(){})}),Mw=$w||Lw;XD({target:"Reflect",stat:!0,forced:Mw,sham:Mw},{construct:function(r,t){Aw(r),rB(t);var n=arguments.length<3?r:Aw(arguments[2]);if(Lw&&!$w)return as(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var i=[null];return is(iB,i,t),new(is(eB,r,i))}var o=n.prototype,u=tB(Nw(o)?o:nB),l=is(r,u,t);return Nw(l)?l:u}})});var Bw=a((uY,Dw)=>{"use strict";Fw();var aB=K();Dw.exports=aB.Reflect.construct});var Uw=a((sY,Gw)=>{"use strict";var oB=Bw();Gw.exports=oB});var Hw=a((cY,Ww)=>{"use strict";var uB=Uw();Ww.exports=uB});var Vw=a((lY,Kw)=>{"use strict";var sB=Hw();Kw.exports=sB});var _i=a((fY,zw)=>{"use strict";zw.exports=Vw()});var Jw=a((pY,Yw)=>{Yw.exports=_i()});var aT=a((xY,iT)=>{"use strict";var cB=P();iT.exports=cB(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var sT=a((SY,uT)=>{"use strict";var lB=P(),fB=$(),pB=qe(),oT=aT(),Ri=Object.isExtensible,vB=lB(function(){Ri(1)});uT.exports=vB||oT?function(r){return!fB(r)||oT&&pB(r)==="ArrayBuffer"?!1:Ri?Ri(r):!0}:Ri});var lT=a((wY,cT)=>{"use strict";var dB=P();cT.exports=!dB(function(){return Object.isExtensible(Object.preventExtensions({}))})});var ps=a((TY,vT)=>{"use strict";var hB=x(),mB=A(),yB=Dr(),gB=$(),cs=W(),bB=re().f,fT=Tt(),qB=Va(),ls=sT(),xB=Ar(),SB=lT(),pT=!1,Fe=xB("meta"),wB=0,fs=function(e){bB(e,Fe,{value:{objectID:"O"+wB++,weakData:{}}})},TB=function(e,r){if(!gB(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!cs(e,Fe)){if(!ls(e))return"F";if(!r)return"E";fs(e)}return e[Fe].objectID},OB=function(e,r){if(!cs(e,Fe)){if(!ls(e))return!0;if(!r)return!1;fs(e)}return e[Fe].weakData},EB=function(e){return SB&&pT&&ls(e)&&!cs(e,Fe)&&fs(e),e},CB=function(){IB.enable=function(){},pT=!0;var e=fT.f,r=mB([].splice),t={};t[Fe]=1,e(t).length&&(fT.f=function(n){for(var i=e(n),o=0,u=i.length;o<u;o++)if(i[o]===Fe){r(i,o,1);break}return i},hB({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:qB.f}))},IB=vT.exports={enable:CB,fastKey:TB,getWeakData:OB,onFreeze:EB};yB[Fe]=!0});var mT=a((OY,hT)=>{"use strict";var kB=x(),PB=_(),_B=ps(),RB=P(),AB=xe(),NB=pe(),MB=ei(),jB=N(),$B=$(),LB=nr(),FB=_e(),DB=re().f,BB=Ot().forEach,GB=G(),dT=Ve(),UB=dT.set,WB=dT.getterFor;hT.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,i=e.indexOf("Weak")!==-1,o=n?"set":"add",u=PB[e],l=u&&u.prototype,s={},c;if(!GB||!jB(u)||!(i||l.forEach&&!RB(function(){new u().entries().next()})))c=t.getConstructor(r,e,n,o),_B.enable();else{c=r(function(v,d){UB(MB(v,f),{type:e,collection:new u}),LB(d)||NB(d,v[o],{that:v,AS_ENTRIES:n})});var f=c.prototype,p=WB(e);BB(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(v){var d=v==="add"||v==="set";v in l&&!(i&&v==="clear")&&AB(f,v,function(m,h){var y=p(this).collection;if(!d&&i&&!$B(m))return v==="get"?void 0:!1;var q=y[v](m===0?0:m,h);return d?this:q})}),i||DB(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return FB(c,e,!1,!0),s[e]=c,kB({global:!0,forced:!0},s),i||t.setStrong(c,e,n),c}});var gT=a((EY,yT)=>{"use strict";var HB=ke();yT.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:HB(e,n,r[n],t);return e}});var OT=a((CY,TT)=>{"use strict";var bT=ze(),KB=Nn(),qT=gT(),VB=V(),zB=ei(),YB=nr(),JB=pe(),QB=In(),Ai=kn(),XB=Mo(),tn=G(),xT=ps().fastKey,wT=Ve(),ST=wT.set,vs=wT.getterFor;TT.exports={getConstructor:function(e,r,t,n){var i=e(function(c,f){zB(c,o),ST(c,{type:r,index:bT(null),first:null,last:null,size:0}),tn||(c.size=0),YB(f)||JB(f,c[n],{that:c,AS_ENTRIES:t})}),o=i.prototype,u=vs(r),l=function(c,f,p){var v=u(c),d=s(c,f),m,h;return d?d.value=p:(v.last=d={index:h=xT(f,!0),key:f,value:p,previous:m=v.last,next:null,removed:!1},v.first||(v.first=d),m&&(m.next=d),tn?v.size++:c.size++,h!=="F"&&(v.index[h]=d)),c},s=function(c,f){var p=u(c),v=xT(f),d;if(v!=="F")return p.index[v];for(d=p.first;d;d=d.next)if(d.key===f)return d};return qT(o,{clear:function(){for(var f=this,p=u(f),v=p.first;v;)v.removed=!0,v.previous&&(v.previous=v.previous.next=null),v=v.next;p.first=p.last=null,p.index=bT(null),tn?p.size=0:f.size=0},delete:function(c){var f=this,p=u(f),v=s(f,c);if(v){var d=v.next,m=v.previous;delete p.index[v.index],v.removed=!0,m&&(m.next=d),d&&(d.previous=m),p.first===v&&(p.first=d),p.last===v&&(p.last=m),tn?p.size--:f.size--}return!!v},forEach:function(f){for(var p=u(this),v=VB(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:p.first;)for(v(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!s(this,f)}}),qT(o,t?{get:function(f){var p=s(this,f);return p&&p.value},set:function(f,p){return l(this,f===0?0:f,p)}}:{add:function(f){return l(this,f=f===0?0:f,f)}}),tn&&KB(o,"size",{configurable:!0,get:function(){return u(this).size}}),i},setStrong:function(e,r,t){var n=r+" Iterator",i=vs(r),o=vs(n);QB(e,r,function(u,l){ST(this,{type:n,target:u,state:i(u),kind:l,last:null})},function(){for(var u=o(this),l=u.kind,s=u.last;s&&s.removed;)s=s.previous;return!u.target||!(u.last=s=s?s.next:u.state.first)?(u.target=null,Ai(void 0,!0)):Ai(l==="keys"?s.key:l==="values"?s.value:[s.key,s.value],!1)},t?"entries":"values",!t,!0),XB(r)}}});var ET=a(()=>{"use strict";var ZB=mT(),e3=OT();ZB("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},e3)});var CT=a(()=>{"use strict";ET()});var kT=a((RY,IT)=>{"use strict";IT.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,i){return t[e](n,i)}}});var ie=a((AY,_T)=>{"use strict";var r3=U(),Ni=kT(),PT=r3("Map");_T.exports={Map:PT,set:Ni("set",2),get:Ni("get",1),has:Ni("has",1),remove:Ni("delete",1),proto:PT.prototype}});var ds=a(()=>{"use strict";var t3=x(),n3=A(),i3=F(),a3=ir(),o3=pe(),Mi=ie(),RT=X(),u3=P(),AT=Mi.Map,s3=Mi.has,c3=Mi.get,l3=Mi.set,f3=n3([].push),p3=RT||u3(function(){return AT.groupBy("ab",function(e){return e}).get("a").length!==1});t3({target:"Map",stat:!0,forced:RT||p3},{groupBy:function(r,t){a3(r),i3(t);var n=new AT,i=0;return o3(r,function(o){var u=t(o,i++);s3(n,u)?f3(c3(n,u),o):l3(n,u,[o])}),n}})});var z=a((jY,NT)=>{"use strict";var v3=He(),d3=TypeError;NT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new d3(v3(e)+" is not a map")}});var ms=a(()=>{"use strict";var h3=x(),m3=z(),hs=ie(),y3=X(),g3=hs.get,b3=hs.has,q3=hs.set;h3({target:"Map",proto:!0,real:!0,forced:y3},{getOrInsert:function(r,t){return b3(m3(this),r)?g3(this,r):(q3(this,r,t),t)}})});var gs=a(()=>{"use strict";var x3=x(),S3=F(),w3=z(),ys=ie(),T3=X(),O3=ys.get,E3=ys.has,C3=ys.set;x3({target:"Map",proto:!0,real:!0,forced:T3},{getOrInsertComputed:function(r,t){if(w3(this),S3(t),E3(this,r))return O3(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return C3(this,r,n),n}})});var jT=a((BY,MT)=>{"use strict";dr();CT();ds();ms();gs();wt();lr();var I3=K();MT.exports=I3.Map});var LT=a((GY,$T)=>{"use strict";var k3=jT();hr();$T.exports=k3});var bs=a(()=>{"use strict";ms()});var qs=a(()=>{"use strict";gs()});var FT=a(()=>{"use strict";ds()});var BT=a((YY,DT)=>{"use strict";var P3=LT();bs();qs();FT();DT.exports=P3});var UT=a((JY,GT)=>{"use strict";var _3=V(),R3=Q(),A3=ee(),N3=pe();GT.exports=function(e,r,t){return function(i){var o=A3(i),u=arguments.length,l=u>1?arguments[1]:void 0,s=l!==void 0,c=s?_3(l,u>2?arguments[2]:void 0):void 0,f=new e,p=0;return N3(o,function(v){var d=s?c(v,p++):v;t?r(f,R3(d)[0],d[1]):r(f,d)}),f}}});var HT=a(()=>{"use strict";var M3=x(),WT=ie(),j3=UT();M3({target:"Map",stat:!0,forced:!0},{from:j3(WT.Map,WT.set,!0)})});var VT=a((ZY,KT)=>{"use strict";var $3=Q();KT.exports=function(e,r,t){return function(){for(var i=new e,o=arguments.length,u=0;u<o;u++){var l=arguments[u];t?r(i,$3(l)[0],l[1]):r(i,l)}return i}}});var YT=a(()=>{"use strict";var L3=x(),zT=ie(),F3=VT();L3({target:"Map",stat:!0,forced:!0},{of:F3(zT.Map,zT.set,!0)})});var QT=a(()=>{"use strict";var D3=x(),B3=D(),G3=pe(),U3=N(),JT=F(),W3=ie().Map;D3({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=U3(this)?this:W3,i=new n;JT(t);var o=JT(i.set);return G3(r,function(u){B3(o,i,t(u),u)}),i}})});var XT=a(()=>{"use strict";var H3=x(),K3=z(),V3=ie().remove;H3({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=K3(this),t=!0,n,i=0,o=arguments.length;i<o;i++)n=V3(r,arguments[i]),t=t&&n;return!!t}})});var eO=a(()=>{"use strict";var z3=x(),Y3=z(),xs=ie(),J3=xs.get,Q3=xs.has,ZT=xs.set;z3({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=Y3(this),i,o;return Q3(n,r)?(i=J3(n,r),"update"in t&&(i=t.update(i,r,n),ZT(n,r,i)),i):(o=t.insert(r,n),ZT(n,r,o),o)}})});var tO=a((sJ,rO)=>{"use strict";var X3=D();rO.exports=function(e,r,t){for(var n=t?e:e.iterator,i=e.next,o,u;!(o=X3(i,n)).done;)if(u=r(o.value),u!==void 0)return u}});var me=a((cJ,nO)=>{"use strict";var Z3=tO();nO.exports=function(e,r,t){return t?Z3(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var iO=a(()=>{"use strict";var e4=x(),r4=V(),t4=z(),n4=me();e4({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=t4(this),n=r4(r,arguments.length>1?arguments[1]:void 0);return n4(t,function(i,o){if(!n(i,o,t))return!1},!0)!==!1}})});var oO=a(()=>{"use strict";var i4=x(),a4=V(),o4=z(),aO=ie(),u4=me(),s4=aO.Map,c4=aO.set;i4({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=o4(this),n=a4(r,arguments.length>1?arguments[1]:void 0),i=new s4;return u4(t,function(o,u){n(o,u,t)&&c4(i,u,o)}),i}})});var uO=a(()=>{"use strict";var l4=x(),f4=V(),p4=z(),v4=me();l4({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=p4(this),n=f4(r,arguments.length>1?arguments[1]:void 0),i=v4(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return i&&i.value}})});var sO=a(()=>{"use strict";var d4=x(),h4=V(),m4=z(),y4=me();d4({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=m4(this),n=h4(r,arguments.length>1?arguments[1]:void 0),i=y4(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return i&&i.key}})});var lO=a((gJ,cO)=>{"use strict";cO.exports=function(e,r){return e===r||e!==e&&r!==r}});var fO=a(()=>{"use strict";var g4=x(),b4=lO(),q4=z(),x4=me();g4({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return x4(q4(this),function(t){if(b4(t,r))return!0},!0)===!0}})});var pO=a(()=>{"use strict";var S4=x(),w4=z(),T4=me();S4({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=T4(w4(this),function(n,i){if(n===r)return{key:i}},!0);return t&&t.key}})});var dO=a(()=>{"use strict";var O4=x(),E4=V(),C4=z(),vO=ie(),I4=me(),k4=vO.Map,P4=vO.set;O4({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=C4(this),n=E4(r,arguments.length>1?arguments[1]:void 0),i=new k4;return I4(t,function(o,u){P4(i,n(o,u,t),o)}),i}})});var mO=a(()=>{"use strict";var _4=x(),R4=V(),A4=z(),hO=ie(),N4=me(),M4=hO.Map,j4=hO.set;_4({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=A4(this),n=R4(r,arguments.length>1?arguments[1]:void 0),i=new M4;return N4(t,function(o,u){j4(i,u,n(o,u,t))}),i}})});var yO=a(()=>{"use strict";var $4=x(),L4=z(),F4=pe(),D4=ie().set;$4({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=L4(this),n=arguments.length,i=0;i<n;)F4(arguments[i++],function(o,u){D4(t,o,u)},{AS_ENTRIES:!0});return t}})});var gO=a(()=>{"use strict";var B4=x(),G4=F(),U4=z(),W4=me(),H4=TypeError;B4({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=U4(this),n=arguments.length<2,i=n?void 0:arguments[1];if(G4(r),W4(t,function(o,u){n?(n=!1,i=o):i=r(i,o,u,t)}),n)throw new H4("Reduce of empty map with no initial value");return i}})});var bO=a(()=>{"use strict";var K4=x(),V4=V(),z4=z(),Y4=me();K4({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=z4(this),n=V4(r,arguments.length>1?arguments[1]:void 0);return Y4(t,function(i,o){if(n(i,o,t))return!0},!0)===!0}})});var xO=a(()=>{"use strict";var J4=x(),qO=F(),Q4=z(),Ss=ie(),X4=TypeError,Z4=Ss.get,eG=Ss.has,rG=Ss.set;J4({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=Q4(this),i=arguments.length;qO(t);var o=eG(n,r);if(!o&&i<3)throw new X4("Updating absent value");var u=o?Z4(n,r):qO(i>2?arguments[2]:void 0)(r,n);return rG(n,r,t(u,r,n)),n}})});var Ts=a((MJ,SO)=>{"use strict";var ji=D(),ws=F(),$i=N(),tG=Q(),nG=TypeError;SO.exports=function(r,t){var n=tG(this),i=ws(n.get),o=ws(n.has),u=ws(n.set),l=arguments.length>2?arguments[2]:void 0,s;if(!$i(t)&&!$i(l))throw new nG("At least one callback required");return ji(o,n,r)?(s=ji(i,n,r),$i(t)&&(s=t(s),ji(u,n,r,s))):$i(l)&&(s=l(),ji(u,n,r,s)),s}});var wO=a(()=>{"use strict";var iG=x(),aG=Ts();iG({target:"Map",proto:!0,real:!0,forced:!0},{upsert:aG})});var TO=a(()=>{"use strict";var oG=x(),uG=Ts();oG({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:uG})});var EO=a((DJ,OO)=>{"use strict";var sG=BT();HT();YT();QT();XT();eO();iO();oO();uO();sO();fO();bs();qs();pO();dO();mO();yO();gO();bO();xO();wO();TO();OO.exports=sG});var IO=a((BJ,CO)=>{"use strict";CO.exports=EO()});var PO=a(()=>{"use strict";var cG=x(),lG=ot(),fG=Ea().indexOf,pG=Vu(),Os=lG([].indexOf),kO=!!Os&&1/Os([1],1,-0)<0,vG=kO||!pG("indexOf");cG({target:"Array",proto:!0,forced:vG},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return kO?Os(this,r,t)||0:fG(this,r,t)}})});var RO=a((WJ,_O)=>{"use strict";PO();var dG=oe();_O.exports=dG("Array","indexOf")});var NO=a((HJ,AO)=>{"use strict";var hG=B(),mG=RO(),Es=Array.prototype;AO.exports=function(e){var r=e.indexOf;return e===Es||hG(Es,e)&&r===Es.indexOf?mG:r}});var jO=a((KJ,MO)=>{"use strict";var yG=NO();MO.exports=yG});var LO=a((VJ,$O)=>{"use strict";var gG=jO();$O.exports=gG});var DO=a((zJ,FO)=>{"use strict";var bG=LO();FO.exports=bG});var GO=a((YJ,BO)=>{"use strict";BO.exports=DO()});var aE=a(()=>{"use strict";var OG=x(),EG=ee(),iE=wn(),CG=P(),IG=CG(function(){iE(1)});OG({target:"Object",stat:!0,forced:IG},{keys:function(r){return iE(EG(r))}})});var uE=a((eX,oE)=>{"use strict";aE();var kG=K();oE.exports=kG.Object.keys});var cE=a((rX,sE)=>{"use strict";var PG=uE();sE.exports=PG});var fE=a((tX,lE)=>{"use strict";var _G=cE();lE.exports=_G});var vE=a((nX,pE)=>{"use strict";var RG=fE();pE.exports=RG});var hE=a((iX,dE)=>{"use strict";dE.exports=vE()});var yE=a((aX,mE)=>{mE.exports=hE()});var Cr="";function Bs(e){Cr=e.replace(/\/+$/,"")}async function Gs(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${Cr}/comments?${t}`);if(!n.ok)throw new Error(`Failed to fetch comments: ${n.status}`);return(await n.json()).data}async function Wi({uri:e,document:r,quote:t,prefix:n,suffix:i,body:o,author:u,parent:l}){let s={quote:t,prefix:n,suffix:i,body:o,author:u,parent:l};r?s.document=r:s.uri=e;let c=await fetch(`${Cr}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!c.ok){let f=await c.json().catch(()=>({error:{message:c.statusText}}));throw new Error(f.error?.message||"Failed to create comment")}return c.json()}async function Us(e,{body:r}){let t=await fetch(`${Cr}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:r})});if(!t.ok)throw new Error(`Failed to update comment: ${t.status}`);return t.json()}async function Ws(e,r){let t=await fetch(`${Cr}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});if(!t.ok)throw new Error(`Failed to update comment: ${t.status}`);return t.json()}async function Hs(e){let r=await fetch(`${Cr}/comments/${e}`,{method:"DELETE"});if(!r.ok)throw new Error(`Failed to delete comment: ${r.status}`)}var OL=g(Fr(),1),EL=g(_n(),1),CL=g(Vn(),1),IL=g(zn(),1),kL=g(Yn(),1);var qu=g(Zr(),1);function Dy(e,r,t,n,i,o,u){try{var l=e[o](u),s=l.value}catch(c){return void t(c)}l.done?r(s):qu.default.resolve(s).then(n,i)}function qr(e){return function(){var r=this,t=arguments;return new qu.default(function(n,i){var o=e.apply(r,t);function u(s){Dy(o,n,i,u,l,"next",s)}function l(s){Dy(o,n,i,u,l,"throw",s)}u(void 0)})}}function Lt(e,r){this.v=e,this.k=r}function Xe(e){return new Lt(e,0)}var xu=g(Zr(),1),Jy=g(Se(),1),Qy=g(li(),1);function Te(e){return function(){return new Ft(e.apply(this,arguments))}}function Ft(e){var r,t;function n(o,u){try{var l=e[o](u),s=l.value,c=s instanceof Lt;xu.default.resolve(c?s.v:s).then(function(f){if(c){var p=o==="return"?"return":"next";if(!s.k||f.done)return n(p,f);f=e[p](f).value}i(l.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){i("throw",f)}}function i(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new xu.default(function(l,s){var c={key:o,arg:u,resolve:l,reject:s,next:null};t?t=t.next=c:(r=t=c,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Ft.prototype[typeof Jy.default=="function"&&Qy.default||"@@asyncIterator"]=function(){return this},Ft.prototype.next=function(e){return this._invoke("next",e)},Ft.prototype.throw=function(e){return this._invoke("throw",e)},Ft.prototype.return=function(e){return this._invoke("return",e)};var PL=g(se(),1),_L=g(xq(),1);function ce(e){var r,t=wL(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function wL(e){return"startContainer"in e}function er(e){if(TL(e))return e;var r=e,t=ce(r).createRange();return t.selectNodeContents(r),t}function TL(e){return"startContainer"in e}var Aq=g(Rq(),1);function Nq(e){if((0,Aq.default)(e))return e}var Vq=g(Se(),1),zq=g(ko(),1),Yq=g(Wu(),1);function Jq(e,r){var t=e==null?null:typeof Vq.default<"u"&&(0,zq.default)(e)||e["@@iterator"];if(t!=null){var n,i,o,u,l=[],s=!0,c=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;s=!1}else for(;!(s=(n=o.call(t)).done)&&((0,Yq.default)(l).call(l,n.value),l.length!==r);s=!0);}catch(f){c=!0,i=f}finally{try{if(!s&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(c)throw i}}return l}}var Qq=g(ba(),1),Xq=g(Ha(),1);function Oi(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function Hu(e,r){if(e){var t;if(typeof e=="string")return Oi(e,r);var n=(0,Qq.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,Xq.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Oi(e,r):void 0}}function Zq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $e(e,r){return Nq(e)||Jq(e,r)||Hu(e,r)||Zq()}var ex=g(Se(),1),rx=g(li(),1),tx=g(Vt(),1),Qt=g(Zr(),1);function rt(e){var r,t,n,i=2;for(typeof ex.default<"u"&&(t=rx.default,n=tx.default);i--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Ei(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Ei(e){function r(t){if(Object(t)!==t)return Qt.default.reject(new TypeError(t+" is not an object."));var n=t.done;return Qt.default.resolve(t.value).then(function(i){return{value:i,done:n}})}return Ei=function(n){this.s=n,this.n=n.next},Ei.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var i=this.s.return;return i===void 0?Qt.default.resolve({value:n,done:!0}):r(i.apply(this.s,arguments))},throw:function(n){var i=this.s.return;return i===void 0?Qt.default.reject(n):r(i.apply(this.s,arguments))}},new Ei(e)}var iD=g(se(),1);var XF=g(se(),1),ZF=g(yx(),1),eD=g(bx(),1),rD=g(Bx(),1),tD=g(oS(),1),nD=g(Qu(),1);var ks=g(se(),1);var QD=g(se(),1);var Zu=g(se(),1);function Xt(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function qS(e,r){return Xt(e.startChunk,r.startChunk)&&Xt(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function xr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var Xu=g(Gt(),1);var Zt=g(Se(),1),xS=g(Vt(),1);function Le(e){"@babel/helpers - typeof";return Le=typeof Zt.default=="function"&&typeof xS.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Zt.default=="function"&&r.constructor===Zt.default&&r!==Zt.default.prototype?"symbol":typeof r},Le(e)}var AS=g(RS(),1);function NS(e,r){if(Le(e)!="object"||!e)return e;var t=e[AS.default];if(t!==void 0){var n=t.call(e,r||"default");if(Le(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Ci(e){var r=NS(e,"string");return Le(r)=="symbol"?r:r+""}function MS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,Xu.default)(e,Ci(n.key),n)}}function en(e,r,t){return r&&MS(e.prototype,r),t&&MS(e,t),(0,Xu.default)(e,"prototype",{writable:!1}),e}var jS=g(Gt(),1);function Sr(e,r,t){return(r=Ci(r))in e?(0,jS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var $S=g(Fr(),1);var Ii="Iterator exhausted before seek ended.",rn=function(){function e(r){xr(this,e),this.chunker=r,Sr(this,"currentChunkPosition",0),Sr(this,"offsetInChunk",0),this.seekTo(0)}return en(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,i)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!Xt(this.currentChunk,n);){var p=this._readToPreviousChunk(),v=$e(p,2),d=v[0],m=v[1];if(t&&(u=d+u),m===null)throw new RangeError(Ii)}else for(;!Xt(this.currentChunk,n);){var l=this._readToNextChunk(),s=$e(l,2),c=s[0],f=s[1];if(t&&(u+=c),f===null)throw new RangeError(Ii)}var h=this.currentChunkPosition+i;if(!t)this.seekTo(h);else return h>=this.position?u+=this.readTo(h):h>=o?(this.seekTo(h),u=(0,$S.default)(u).call(u,0,h-o)):(this.seekTo(o),u=this.readTo(h)),u}},{key:"_readOrSeekTo",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var l=this.currentChunkPosition+this.currentChunk.data.length;if(l<=n){var s=this._readToNextChunk(),c=$e(s,2),f=c[0],p=c[1];if(t&&(u+=f),p===null){if(this.position===n||o)break;throw new RangeError(Ii)}}else{var v=i?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,v)),this.offsetInChunk=v,i&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=i?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var m=this._readToPreviousChunk(),h=$e(m,2),y=h[0],q=h[1];if(t&&(u=y+u),q===null){if(o)break;throw new RangeError(Ii)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,i=this.chunker.nextChunk();return i!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,i]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function FS(e,r){return es.apply(this,arguments)}function es(){return es=qr(Zu.default.mark(function e(r,t){var n,i,o,u,l,s,c,f,p,v,d,m,h,y,q,b,I,C,S,T,w,E,j=arguments;return Zu.default.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:n=j.length>2&&j[2]!==void 0?j[2]:{},i=n.minimalContext,o=i===void 0?!1:i,u=n.minimumQuoteLength,l=u===void 0?0:u,s=n.maxWordLength,c=s===void 0?50:s,f=new rn(t()),p=new rn(t()),f.seekToChunk(r.startChunk,r.startIndex),v=f.readToChunk(r.endChunk,r.endIndex),d="",m="",h=function(){return d.length+v.length+m.length},h()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),y=Math.floor((l-h())/2),d=f.read(-y,!1,!0)+d,h()<l&&(f.seekToChunk(r.endChunk,r.endIndex+m.length),q=l-h(),m=m+f.read(q,!1,!0),h()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),b=l-h(),d=f.read(-b,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=ki(f,c,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+m.length),m=m+ki(f,c,!1));case 11:return I={type:"TextQuoteSelector",exact:v,prefix:d,suffix:m},C=Pi(I)(t()),k.next=16,C.next();case 16:if(S=k.sent,!(!S.done&&qS(S.value,r))){k.next=21;break}return k.next=20,C.next();case 20:S=k.sent;case 21:if(!S.done){k.next=23;break}return k.abrupt("return",I);case 23:if(T=S.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),p.seekToChunk(T.startChunk,T.startIndex-d.length),w=LS(f,p,!0),w!==void 0&&!o&&(w=ki(f,c,!0)+w),f.seekToChunk(r.endChunk,r.endIndex+m.length),p.seekToChunk(T.endChunk,T.endIndex+m.length),E=LS(f,p,!1),E!==void 0&&!o&&(E=E+ki(f,c,!1)),!o){k.next=44;break}if(!(w!==void 0&&(E===void 0||w.length<=E.length))){k.next=37;break}d=w+d,k.next=42;break;case 37:if(E===void 0){k.next=41;break}m=m+E,k.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:k.next=46;break;case 44:w!==void 0&&(d=w+d),E!==void 0&&(m=m+E);case 46:k.next=11;break;case 48:case"end":return k.stop()}},e)})),es.apply(this,arguments)}function LS(e,r,t){for(var n="";;){var i=void 0;try{i=e.read(t?-1:1)}catch{return}n=t?i+n:n+i;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(i!==o)return n}}function ki(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var i=void 0;try{i=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(cD(i)){e.seekBy(t?1:-1);break}n=t?i+n:n+i}return n}function cD(e){return/^\s+$/.test(e)}var Ew=g(Fr(),1),Cw=g(_n(),1),Iw=g(Vn(),1),kw=g(zn(),1),Pw=g(Yn(),1);var ns=g(se(),1),_w=g(sw(),1),Rw=g(ww(),1);function Tw(e,r){var t;if(typeof Iw.default>"u"||(0,kw.default)(e)==null){if(Array.isArray(e)||(t=HD(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(c){throw c},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,l;return{s:function(){t=(0,Pw.default)(e)},n:function(){var c=t.next();return o=c.done,c},e:function(c){u=!0,l=c},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw l}}}}function HD(e,r){var t;if(e){if(typeof e=="string")return Ow(e,r);var n=(0,Ew.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,Cw.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ow(e,r)}}function Ow(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Pi(e){return function(){var r=Te(ns.default.mark(function n(i){var o,u,l,s,c,f,p,v,d,m,h,y,q,b,I,C,S,T,w,E,j,ge,k,Z,be,J,L;return ns.default.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:o=e.exact,u=e.prefix||"",l=e.suffix||"",s=u+o+l,c=[],f=!0;case 6:p=i.currentChunk,v=p.data,d=[],m=Tw(c),O.prev=10,m.s();case 12:if((h=m.n()).done){O.next=27;break}if(y=h.value,q=y.charactersMatched,y.endChunk===void 0&&(b=u.length+o.length-q,b<=v.length&&(y.endChunk=p,y.endIndex=b)),y.startChunk===void 0&&(I=u.length-q,(I<v.length||y.endChunk!==void 0)&&(y.startChunk=p,y.startIndex=I)),C=s.length-q,!(C<=v.length)){O.next=24;break}if(!(0,_w.default)(v).call(v,s.substring(q))){O.next=22;break}return O.next=22,y;case 22:O.next=25;break;case 24:v===s.substring(q,q+v.length)&&(y.charactersMatched+=v.length,d.push(y));case 25:O.next=12;break;case 27:O.next=32;break;case 29:O.prev=29,O.t0=O.catch(10),m.e(O.t0);case 32:return O.prev=32,m.f(),O.finish(32);case 35:if(c=d,!(s.length<=v.length)){O.next=49;break}S=0;case 38:if(!(S<=v.length)){O.next=49;break}if(T=v.indexOf(s,S),T!==-1){O.next=42;break}return O.abrupt("break",49);case 42:if(S=T+1,!(T===0&&s.length===0&&!f)){O.next=45;break}return O.abrupt("continue",38);case 45:return O.next=47,{startChunk:p,startIndex:T+u.length,endChunk:p,endIndex:T+u.length+o.length};case 47:O.next=38;break;case 49:for(w=[],E=Math.max(v.length-s.length+1,0),j=function(Ue){var Fs=v[Ue];w=(0,Rw.default)(w).call(w,function($E){return Fs===s[Ue-$E]}),Fs===s[0]&&w.push(Ue)},ge=E;ge<v.length;ge++)j(ge);k=Tw(w);try{for(k.s();!(Z=k.n()).done;)be=Z.value,J=v.length-be,L={charactersMatched:J},J>=u.length+o.length&&(L.endChunk=p,L.endIndex=be+u.length+o.length),(J>u.length||L.endChunk!==void 0)&&(L.startChunk=p,L.startIndex=be+u.length),c.push(L)}catch(Er){k.e(Er)}finally{k.f()}f=!1;case 56:if(i.nextChunk()!==null){O.next=6;break}case 57:case"end":return O.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var YD=g(se(),1);var KD=g(Fr(),1),VD=g(Qu(),1);var JD=g(se(),1);var an=g(Jw(),1);var Xw=g(pi(),1),Zw=g(Gt(),1);var os=g(vi(),1),Qw=g(Bt(),1);function rr(e,r){var t;return rr=os.default?(0,Qw.default)(t=os.default).call(t):function(n,i){return n.__proto__=i,n},rr(e,r)}function us(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,Xw.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,Zw.default)(e,"prototype",{writable:!1}),r&&rr(e,r)}function eT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function rT(e,r){if(r&&(Le(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return eT(e)}var tT=g(vi(),1),nT=g(Bt(),1),ss=g(fi(),1);function wr(e){var r;return wr=tT.default?(0,nT.default)(r=ss.default).call(r):function(t){return t.__proto__||(0,ss.default)(t)},wr(e)}var Is=g(IO(),1),JO=g(pi(),1);var UO=g(GO(),1);function WO(e){try{var r;return(0,UO.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var KO=g(_i(),1),VO=g(Wu(),1),zO=g(Bt(),1);var HO=g(_i(),1);function Cs(){try{var e=!Boolean.prototype.valueOf.call((0,HO.default)(Boolean,[],function(){}))}catch{}return(Cs=function(){return!!e})()}function YO(e,r,t){if(Cs())return KO.default.apply(null,arguments);var n=[null];(0,VO.default)(n).apply(n,r);var i=new((0,zO.default)(e).apply(e,n));return t&&rr(i,t.prototype),i}function nn(e){var r=typeof Is.default=="function"?new Is.default:void 0;return nn=function(n){if(n===null||!WO(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,i)}function i(){return YO(n,arguments,wr(this).constructor)}return i.prototype=(0,JO.default)(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),rr(i,n)},nn(e)}function ZO(e,r){var t=ce(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i=QO(e.startContainer,e.startOffset),o=$e(i,2),u=o[0],l=o[1];for(n.currentNode=u;l===u.length&&n.nextNode();)u=n.currentNode,l=0;e.setStart(u,l);var s=QO(e.endContainer,e.endOffset),c=$e(s,2),f=c[0],p=c[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function QO(e,r){var t;if(XO(e))return[e,r];var n;if(qG(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(XO(n))return[n,0];var i=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=i.createTreeWalker(i,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function XO(e){return e.nodeType===Node.TEXT_NODE}function qG(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function rE(e){var r=xG();return function(){var n=wr(e),i;if(r){var o=wr(this).constructor;i=(0,an.default)(n,arguments,o)}else i=n.apply(this,arguments);return rT(this,i)}}function xG(){if(typeof Reflect>"u"||!an.default||an.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,an.default)(Boolean,[],function(){})),!0}catch{return!1}}var Li=function(e){us(t,e);var r=rE(t);function t(n){return xr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(nn(TypeError)),SG=function(e){us(t,e);var r=rE(t);function t(n){return xr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(nn(TypeError)),Tr=function(){function e(r){var t=this;if(xr(this,e),Sr(this,"scope",void 0),Sr(this,"iter",void 0),this.scope=er(r),this.iter=ce(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!eE(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Li}}return en(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!eE(t))throw new Li;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new SG;var n=t===this.scope.startContainer?this.scope.startOffset:0,i=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:i,data:t.data.substring(n,i),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=ZO(t,this.scope),i=this.nodeToChunk(n.startContainer),o=n.startOffset-i.startOffset,u=this.nodeToChunk(n.endContainer),l=n.endOffset-u.startOffset;return{startChunk:i,startIndex:o,endChunk:u,endIndex:l}}},{key:"chunkRangeToRange",value:function(t){var n=ce(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function eE(e){return e.nodeType===Node.TEXT_NODE}function tE(e,r){return Ps.apply(this,arguments)}function Ps(){return Ps=qr(ks.default.mark(function e(r,t){var n,i,o,u=arguments;return ks.default.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},i=er(t??ce(r)),o=new Tr(i),s.next=5,FS(o.rangeToChunkRange(r),function(){return new Tr(i)},n);case 5:return s.abrupt("return",s.sent);case 6:case"end":return s.stop()}},e)})),Ps.apply(this,arguments)}var _s=g(se(),1);function nE(e){var r=Pi(e);return function(){var t=Te(_s.default.mark(function i(o){var u,l,s,c,f,p,v,d;return _s.default.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:h.prev=0,u=new Tr(o),h.next=11;break;case 4:if(h.prev=4,h.t0=h.catch(0),!(h.t0 instanceof Li)){h.next=10;break}return h.abrupt("return");case 10:throw h.t0;case 11:l=!0,s=!1,h.prev=13,f=rt(r(u));case 15:return h.next=17,Xe(f.next());case 17:return p=h.sent,l=p.done,h.next=21,Xe(p.value);case 21:if(v=h.sent,l){h.next=29;break}return d=v,h.next=26,u.chunkRangeToRange(d);case 26:l=!0,h.next=15;break;case 29:h.next=35;break;case 31:h.prev=31,h.t1=h.catch(13),s=!0,c=h.t1;case 35:if(h.prev=35,h.prev=36,!(!l&&f.return!=null)){h.next=40;break}return h.next=40,Xe(f.return());case 40:if(h.prev=40,!s){h.next=43;break}throw c;case 43:return h.finish(40);case 44:return h.finish(35);case 45:case"end":return h.stop()}},i,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(i){return t.apply(this,arguments)}return n}()}var wG=g(se(),1);var TG=g(se(),1);var AG=g(yE(),1),NG=g(Fr(),1),MG=g(_n(),1),jG=g(Vn(),1),$G=g(zn(),1),LG=g(Yn(),1);async function gE(e,r){let t=await tE(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function Fi(e,r){let t=nE({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var tt="fb-highlight",bE="fb-highlight-active";var on=null;function xE(e){on=e}function Di(e,r){let t=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let n=qE(e,r);t.push(n)}else{let n=DG(e);for(let i=0;i<n.length;i++){let o=n[i],u=document.createRange();o===e.startContainer?(u.setStart(o,e.startOffset),u.setEnd(o,o.textContent.length)):o===e.endContainer?(u.setStart(o,0),u.setEnd(o,e.endOffset)):u.selectNodeContents(o),u.collapsed||t.push(qE(u,r))}}return t}function qE(e,r){let t=e.commonAncestorContainer;for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;let n=t,i=!1,o=null;for(;n;){if(n.tagName==="foreignObject"){i=!1;break}n.tagName==="text"&&n instanceof SVGElement&&(i=!0),n.tagName==="svg"&&(o=n),n=n.parentElement}if(i&&o)return FG(e,r,o);let u=document.createElement("mark");u.className=tt,u.dataset.commentId=r,u.style.backgroundColor="rgba(255, 212, 0, 0.35)",u.style.cursor="pointer",u.style.borderRadius="2px",u.addEventListener("click",()=>{on&&on(r)});try{e.surroundContents(u)}catch(l){return console.warn("[feedback-layer] Failed to create highlight:",l),null}return u}function FG(e,r,t){try{let n=e.getClientRects();if(n.length===0)return null;let i="http://www.w3.org/2000/svg",o=t.getScreenCTM();if(!o)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let u=e.commonAncestorContainer;for(;u&&u.nodeType!==Node.ELEMENT_NODE;)u=u.parentNode;let l=u,s=null;for(;l&&l!==t;){if(l.tagName==="text"){s=l.parentElement;break}l=l.parentElement}let c=s||t,f=o;c!==t&&c.getScreenCTM&&(f=c.getScreenCTM());let p=document.createElementNS(i,"g");p.setAttribute("class",tt),p.setAttribute("data-comment-id",r),p.style.cursor="pointer";for(let y=0;y<n.length;y++){let q=n[y],b=document.createElementNS(i,"rect"),I=t.createSVGPoint();I.x=q.left,I.y=q.top;let C=I.matrixTransform(f.inverse()),S=q.width/f.a,T=q.height/f.d;b.setAttribute("x",C.x),b.setAttribute("y",C.y),b.setAttribute("width",S),b.setAttribute("height",T),b.setAttribute("fill","#ffd400"),b.setAttribute("fill-opacity","0.35"),b.setAttribute("rx","2"),b.setAttribute("ry","2"),b.style.pointerEvents="none",p.appendChild(b)}c&&c!==t?c.appendChild(p):t.appendChild(p);let v=e.commonAncestorContainer;for(;v&&v.nodeType!==Node.ELEMENT_NODE;)v=v.parentNode;let d=new Set,m=v;for(;m&&m!==t;)m.tagName==="text"&&m instanceof SVGElement&&(d.add(m),m.querySelectorAll("tspan").forEach(q=>d.add(q))),m=m.parentElement;let h=y=>{y.preventDefault(),y.stopPropagation(),on&&on(r)};return d.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",h),y.dataset.fbCommentId=r}),p}catch(n){return console.warn("[feedback-layer] Failed to create SVG highlight:",n),null}}function Rs(e){document.querySelectorAll(`.${tt}[data-comment-id="${e}"]`).forEach(n=>{let i=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)i.removeChild(n);else{for(;n.firstChild;)i.insertBefore(n.firstChild,n);i.removeChild(n),i.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function SE(){document.querySelectorAll(`.${tt}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function Bi(e){document.querySelectorAll(`.${tt}`).forEach(r=>{let t=r.dataset.commentId===e,n="rgba(255, 180, 0, 0.55)",i="rgba(255, 212, 0, 0.35)";t?r.classList.add(bE):r.classList.remove(bE),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(u=>{u.setAttribute("fill",t?n:i)}):r.style.backgroundColor=t?n:i})}function wE(e){let r=document.querySelector(`.${tt}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function DG(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let i=document.createRange();return i.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,i)<0&&e.compareBoundaryPoints(Range.START_TO_END,i)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}var BG=320,OE="feedback-layer-commenter",ae=null,Be=null,De=null,As=null,EE=null,Ns=null,Ms=null,js=null,$s=null,Ls=!1,CE=[],IE=new Set;function nt(){return localStorage.getItem(OE)||""}function kE({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:i}){EE=e,Ns=r,Ms=t,js=n,$s=i,zG(),ae=document.createElement("div"),ae.className="fb-sidebar fb-sidebar-collapsed",ae.innerHTML=`
    <div class="fb-sidebar-header">
      <strong>Feedback</strong>
      <button class="fb-sidebar-toggle" title="Close sidebar">&times;</button>
    </div>
    <div class="fb-sidebar-content">
      <div class="fb-name-section">
        <label class="fb-label">Your name</label>
        <input type="text" class="fb-name-input" placeholder="Enter your name..."
               value="${un(nt())}">
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
  `;let o=document.createElement("button");o.className="fb-sidebar-tab",o.textContent="Feedback",o.addEventListener("click",()=>sn()),document.body.appendChild(o),document.body.appendChild(ae),Be=ae.querySelector(".fb-comment-list"),De=ae.querySelector(".fb-form-section");let u=ae.querySelector(".fb-name-input");u.addEventListener("input",()=>{localStorage.setItem(OE,u.value.trim())}),ae.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>GG());let s=ae.querySelector(".fb-show-resolved-cb");s.addEventListener("change",()=>{Ls=s.checked,tr(CE,IE)})}function sn(){ae.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden")}function GG(){ae.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden")}function PE(e){if(sn(),!nt()){let n=ae.querySelector(".fb-name-input");n.style.outline="2px solid #ef4444",setTimeout(()=>n.style.outline="",2e3)}As=e,De.style.display="",De.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${un(KG(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `;let r=De.querySelector(".fb-form-textarea");r.focus();let t=()=>{if(!nt()){let i=ae.querySelector(".fb-name-input");i.focus(),i.style.outline="2px solid #ef4444",setTimeout(()=>i.style.outline="",2e3);return}let n=r.value.trim();n&&(EE({comment:n,commenter:nt()}),De.style.display="none",As=null)};De.querySelector(".fb-submit-btn").addEventListener("click",t),r.addEventListener("keydown",n=>{n.key==="Enter"&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),t())}),De.querySelector(".fb-cancel-btn").addEventListener("click",()=>{De.style.display="none",As=null}),De.scrollIntoView({behavior:"smooth",block:"nearest"})}function UG(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function tr(e,r=new Set,t=new Map){CE=e,IE=r,Be.innerHTML="";let{topLevel:n,repliesByParent:i}=UG(e),o=n.slice().sort((c,f)=>{let p=t.get(c.id),v=t.get(f.id);return!p||!v?0:p.compareBoundaryPoints(Range.START_TO_START,v)}),u=o.filter(c=>{let f=r.has(c.id),p=c.status==="closed";return f||p&&Ls}),l=Ls?u:u.filter(c=>c.status!=="closed");if(o.length===0){Be.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let s=o.filter(c=>!r.has(c.id)&&c.status!=="closed").length;if(l.length===0){s>0?Be.innerHTML=`<div class="fb-empty">
        ${u.length} comment(s) resolved.
        ${s>0?`<br>${s} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:Be.innerHTML=`<div class="fb-empty">All ${o.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let c of l){let f=document.createElement("div");f.className="fb-thread",f.appendChild(TE(c,!1));let p=i.get(c.id)||[];for(let d of p)f.appendChild(TE(d,!0));let v=document.createElement("button");v.className="fb-reply-btn",v.textContent="Reply",v.addEventListener("click",d=>{d.stopPropagation(),WG(c.id,f,v)}),f.appendChild(v),Be.appendChild(f)}}function TE(e,r){let t=e.status==="closed",n=document.createElement("div");return n.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":""),n.dataset.id=e.id,n.innerHTML=`
    <div class="fb-cmt-body">${un(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${un(e.author)}</span>
      <span class="fb-cmt-time">${VG(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
  `,r||(n.addEventListener("click",i=>{i.target.closest(".fb-cmt-delete")||i.target.closest(".fb-cmt-resolve")||i.target.closest(".fb-cmt-edit")||(Bi(e.id),wE(e.id),Be.querySelectorAll(".fb-cmt-card").forEach(o=>o.classList.remove("fb-cmt-active")),n.classList.add("fb-cmt-active"))}),n.querySelector(".fb-cmt-resolve").addEventListener("click",i=>{i.stopPropagation(),Ms&&Ms(e.id,!t)})),n.querySelector(".fb-cmt-edit").addEventListener("click",i=>{i.stopPropagation(),HG(e,n)}),n.querySelector(".fb-cmt-delete").addEventListener("click",i=>{i.stopPropagation(),Ns&&Ns(e.id)}),n}function WG(e,r,t){sn();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let i=document.createElement("div");i.className="fb-reply-form",i.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!nt()){let s=ae.querySelector(".fb-name-input");s.focus(),s.style.outline="2px solid #ef4444",setTimeout(()=>s.style.outline="",2e3);return}let l=i.querySelector("textarea").value.trim();l&&(js&&js({parent_id:e,comment:l,commenter:nt()}),i.remove(),t.style.display="")};i.querySelector(".fb-reply-submit").addEventListener("click",o);let u=i.querySelector("textarea");u.addEventListener("keydown",l=>{l.key==="Enter"&&(l.metaKey||l.ctrlKey)&&(l.preventDefault(),o())}),i.querySelector(".fb-reply-cancel").addEventListener("click",()=>{i.remove(),t.style.display=""}),r.insertBefore(i,t),u.focus()}function HG(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${un(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let i=t.querySelector("textarea");i.focus(),i.setSelectionRange(i.value.length,i.value.length);let o=()=>{let u=i.value.trim();u&&$s&&$s(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),i.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function _E(e){let r=Be.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(Be.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function KG(e,r){return e.length>r?e.slice(0,r)+"...":e}function VG(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}function un(e){let r=document.createElement("div");return r.textContent=e,r.innerHTML}function zG(){let e=document.createElement("style");e.textContent=`
    .fb-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: ${BG}px;
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
  `,document.head.appendChild(e)}function RE(e,r){let t=YG(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(i=>!i.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function YG(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,i)=>{let o=[`**${i+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let l of u)o.push(`  - **[${l.author}]** (reply): ${l.body}`);return o.join(`
`)}).join(`

`)}var JG=`
  .hf-button {
    position: fixed;
    bottom: 24px;
    left: 24px;
    z-index: 10000;
    background: #7c3aed;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 12px 20px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    transition: background 0.2s;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }
  .hf-button:hover { background: #6d28d9; }

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
`,AE=null,NE=null;function ME(e,r){new URLSearchParams(window.location.search).get("author")==="true"&&(NE=e,AE=r,QG(),XG())}function QG(){let e=document.createElement("style");e.textContent=JG,document.head.appendChild(e)}function XG(){let e=document.createElement("button");e.className="hf-button",e.textContent="Send Feedback to Claude",e.addEventListener("click",()=>ZG()),document.body.appendChild(e)}function ZG(){let e=AE(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let i=document.createElement("button");i.className="hf-modal-close",i.textContent="\xD7",i.addEventListener("click",()=>r.remove()),n.appendChild(i);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",p=>{p.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let l=document.querySelector(NE.contentSelector||"body").innerHTML,s=RE(l,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${s.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${eU(s)}</textarea>
  `;let c=document.createElement("button");c.className="hf-btn hf-btn-primary",c.textContent="Copy Prompt",c.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(s),c.textContent="Copied!"}catch{c.textContent="Copy failed"}setTimeout(()=>c.textContent="Copy Prompt",2e3)}),u.appendChild(c);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function eU(e){let r=document.createElement("div");return r.textContent=e,r.innerHTML}var it=null,Gi=null,Ui=null,Y=[],Or=null,Ee=null,ye=new Set,Ge=new Map;function rU(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null};Bs(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{it=document.querySelector(r.contentSelector)||document.body,Gi=r.documentUri||window.location.origin+window.location.pathname,Ui=r.documentId||null,kE({onSubmit:oU,onDelete:lU,onResolve:uU,onReply:sU,onEdit:cU}),xE(i=>{sn(),_E(i),Bi(i)}),iU(),await t(),tU(),ME(r,()=>Y)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function tU(){try{Y=await Gs(Gi,Ui),ye=await nU(Y),tr(Y,ye,Ge)}catch(e){console.error("[feedback-layer] Failed to load comments:",e)}}async function nU(e){SE();let r=new Set;Ge.clear();for(let t of e)if(!t.parent)try{let n=await Fi({exact:t.quote,prefix:t.prefix,suffix:t.suffix},it);n&&t.status!=="closed"?(Di(n,t.id),r.add(t.id),Ge.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),Ge.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function iU(){document.addEventListener("mouseup",jE),document.addEventListener("keyup",jE)}function jE(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){cn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){cn();return}if(!it.contains(r.commonAncestorContainer)){cn();return}aU(r)},10)}function aU(e){cn();let r=e.getBoundingClientRect();Ee=document.createElement("button"),Ee.className="fb-annotate-tooltip",Ee.textContent="\u270E Annotate",Ee.style.top=window.scrollY+r.top-36+"px",Ee.style.left=window.scrollX+r.left+r.width/2-40+"px",Ee.addEventListener("mousedown",async t=>{t.preventDefault(),t.stopPropagation();let n=window.getSelection();if(!n||n.isCollapsed)return;let i=n.getRangeAt(0);try{Or=await gE(i,it),PE(Or.exact)}catch(o){console.error("[feedback-layer] Failed to create selector:",o)}cn()}),document.body.appendChild(Ee)}function cn(){Ee&&(Ee.remove(),Ee=null)}async function oU({comment:e,commenter:r}){if(Or){try{let t=await Wi({uri:Gi,document:Ui,quote:Or.exact,prefix:Or.prefix,suffix:Or.suffix,body:e,author:r});Y.push(t);let n=await Fi({exact:t.quote,prefix:t.prefix,suffix:t.suffix},it);n&&(Di(n,t.id),ye.add(t.id)),tr(Y,ye,Ge),window.getSelection().removeAllRanges()}catch(t){console.error("[feedback-layer] Failed to create comment:",t),alert("Failed to save comment: "+t.message)}Or=null}}async function uU(e,r){try{let n=await Ws(e,r?"closed":"open"),i=Y.findIndex(o=>o.id===e);if(i!==-1&&(Y[i]=n),r)Rs(e);else{let o=n,u=await Fi({exact:o.quote,prefix:o.prefix,suffix:o.suffix},it);u?(Di(u,o.id),ye.add(o.id)):ye.delete(o.id)}tr(Y,ye,Ge)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t)}}async function sU({parent_id:e,comment:r,commenter:t}){try{let n=await Wi({uri:Gi,document:Ui,body:r,author:t,parent:e});Y.push(n),tr(Y,ye,Ge)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),alert("Failed to save reply: "+n.message)}}async function cU(e,r){try{let t=await Us(e,{body:r}),n=Y.findIndex(i=>i.id===e);n!==-1&&(Y[n]=t),tr(Y,ye,Ge)}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),alert("Failed to update comment: "+t.message)}}async function lU(e){try{await Hs(e),Rs(e),ye.delete(e),Y=Y.filter(r=>r.id!==e&&r.parent!==e),tr(Y,ye,Ge)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r)}}rU();})();
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
