var FeedbackLayer=(()=>{var FE=Object.create;var Ds=Object.defineProperty;var DE=Object.getOwnPropertyDescriptor;var BE=Object.getOwnPropertyNames;var GE=Object.getPrototypeOf,UE=Object.prototype.hasOwnProperty;var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var WE=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of BE(r))!UE.call(e,i)&&i!==t&&Ds(e,i,{get:()=>r[i],enumerable:!(n=DE(r,i))||n.enumerable});return e};var g=(e,r,t)=>(t=e!=null?FE(GE(e)):{},WE(r||!e||!e.__esModule?Ds(t,"default",{value:e,enumerable:!0}):t,e));var P=a((vU,Ks)=>{"use strict";Ks.exports=function(e){try{return!!e()}catch{return!0}}});var Ir=a((pU,Vs)=>{"use strict";var HE=P();Vs.exports=!HE(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var A=a((dU,Js)=>{"use strict";var zs=Ir(),Ys=Function.prototype,Hi=Ys.call,KE=zs&&Ys.bind.bind(Hi,Hi);Js.exports=zs?KE:function(e){return function(){return Hi.apply(e,arguments)}}});var B=a((hU,Qs)=>{"use strict";var VE=A();Qs.exports=VE({}.isPrototypeOf)});var _=a((Ki,Xs)=>{"use strict";var at=function(e){return e&&e.Math===Math&&e};Xs.exports=at(typeof globalThis=="object"&&globalThis)||at(typeof window=="object"&&window)||at(typeof self=="object"&&self)||at(typeof global=="object"&&global)||at(typeof Ki=="object"&&Ki)||function(){return this}()||Function("return this")()});var kr=a((mU,tc)=>{"use strict";var zE=Ir(),rc=Function.prototype,Zs=rc.apply,ec=rc.call;tc.exports=typeof Reflect=="object"&&Reflect.apply||(zE?ec.bind(Zs):function(){return ec.apply(Zs,arguments)})});var qe=a((yU,ic)=>{"use strict";var nc=A(),YE=nc({}.toString),JE=nc("".slice);ic.exports=function(e){return JE(YE(e),8,-1)}});var ot=a((gU,ac)=>{"use strict";var QE=qe(),XE=A();ac.exports=function(e){if(QE(e)==="Function")return XE(e)}});var N=a((bU,oc)=>{"use strict";var Vi=typeof document=="object"&&document.all;oc.exports=typeof Vi>"u"&&Vi!==void 0?function(e){return typeof e=="function"||e===Vi}:function(e){return typeof e=="function"}});var G=a((qU,uc)=>{"use strict";var ZE=P();uc.exports=!ZE(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var D=a((xU,sc)=>{"use strict";var eC=Ir(),ln=Function.prototype.call;sc.exports=eC?ln.bind(ln):function(){return ln.apply(ln,arguments)}});var zi=a(fc=>{"use strict";var cc={}.propertyIsEnumerable,lc=Object.getOwnPropertyDescriptor,rC=lc&&!cc.call({1:2},1);fc.f=rC?function(r){var t=lc(this,r);return!!t&&t.enumerable}:cc});var We=a((wU,vc)=>{"use strict";vc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var fn=a((TU,pc)=>{"use strict";var tC=A(),nC=P(),iC=qe(),Yi=Object,aC=tC("".split);pc.exports=nC(function(){return!Yi("z").propertyIsEnumerable(0)})?function(e){return iC(e)==="String"?aC(e,""):Yi(e)}:Yi});var nr=a((OU,dc)=>{"use strict";dc.exports=function(e){return e==null}});var ir=a((EU,hc)=>{"use strict";var oC=nr(),uC=TypeError;hc.exports=function(e){if(oC(e))throw new uC("Can't call method on "+e);return e}});var Ce=a((CU,mc)=>{"use strict";var sC=fn(),cC=ir();mc.exports=function(e){return sC(cC(e))}});var $=a((IU,yc)=>{"use strict";var lC=N();yc.exports=function(e){return typeof e=="object"?e!==null:lC(e)}});var K=a((kU,gc)=>{"use strict";gc.exports={}});var U=a((PU,qc)=>{"use strict";var Ji=K(),Qi=_(),fC=N(),bc=function(e){return fC(e)?e:void 0};qc.exports=function(e,r){return arguments.length<2?bc(Ji[e])||bc(Qi[e]):Ji[e]&&Ji[e][r]||Qi[e]&&Qi[e][r]}});var Pr=a((_U,wc)=>{"use strict";var vC=_(),xc=vC.navigator,Sc=xc&&xc.userAgent;wc.exports=Sc?String(Sc):""});var _r=a((RU,kc)=>{"use strict";var Ic=_(),Xi=Pr(),Tc=Ic.process,Oc=Ic.Deno,Ec=Tc&&Tc.versions||Oc&&Oc.version,Cc=Ec&&Ec.v8,de,vn;Cc&&(de=Cc.split("."),vn=de[0]>0&&de[0]<4?1:+(de[0]+de[1]));!vn&&Xi&&(de=Xi.match(/Edge\/(\d+)/),(!de||de[1]>=74)&&(de=Xi.match(/Chrome\/(\d+)/),de&&(vn=+de[1])));kc.exports=vn});var ar=a((AU,_c)=>{"use strict";var Pc=_r(),pC=P(),dC=_(),hC=dC.String;_c.exports=!!Object.getOwnPropertySymbols&&!pC(function(){var e=Symbol("symbol detection");return!hC(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Pc&&Pc<41})});var Zi=a((NU,Rc)=>{"use strict";var mC=ar();Rc.exports=mC&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Rr=a((MU,Ac)=>{"use strict";var yC=U(),gC=N(),bC=B(),qC=Zi(),xC=Object;Ac.exports=qC?function(e){return typeof e=="symbol"}:function(e){var r=yC("Symbol");return gC(r)&&bC(r.prototype,xC(e))}});var He=a((jU,Nc)=>{"use strict";var SC=String;Nc.exports=function(e){try{return SC(e)}catch{return"Object"}}});var F=a(($U,Mc)=>{"use strict";var wC=N(),TC=He(),OC=TypeError;Mc.exports=function(e){if(wC(e))return e;throw new OC(TC(e)+" is not a function")}});var pn=a((LU,jc)=>{"use strict";var EC=F(),CC=nr();jc.exports=function(e,r){var t=e[r];return CC(t)?void 0:EC(t)}});var Lc=a((FU,$c)=>{"use strict";var ea=D(),ra=N(),ta=$(),IC=TypeError;$c.exports=function(e,r){var t,n;if(r==="string"&&ra(t=e.toString)&&!ta(n=ea(t,e))||ra(t=e.valueOf)&&!ta(n=ea(t,e))||r!=="string"&&ra(t=e.toString)&&!ta(n=ea(t,e)))return n;throw new IC("Can't convert object to primitive value")}});var X=a((DU,Fc)=>{"use strict";Fc.exports=!0});var Gc=a((BU,Bc)=>{"use strict";var Dc=_(),kC=Object.defineProperty;Bc.exports=function(e,r){try{kC(Dc,e,{value:r,configurable:!0,writable:!0})}catch{Dc[e]=r}return r}});var ut=a((GU,Hc)=>{"use strict";var PC=X(),_C=_(),RC=Gc(),Uc="__core-js_shared__",Wc=Hc.exports=_C[Uc]||RC(Uc,{});(Wc.versions||(Wc.versions=[])).push({version:"3.48.0",mode:PC?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var or=a((UU,Vc)=>{"use strict";var Kc=ut();Vc.exports=function(e,r){return Kc[e]||(Kc[e]=r||{})}});var re=a((WU,zc)=>{"use strict";var AC=ir(),NC=Object;zc.exports=function(e){return NC(AC(e))}});var W=a((HU,Yc)=>{"use strict";var MC=A(),jC=re(),$C=MC({}.hasOwnProperty);Yc.exports=Object.hasOwn||function(r,t){return $C(jC(r),t)}});var Ar=a((KU,Jc)=>{"use strict";var LC=A(),FC=0,DC=Math.random(),BC=LC(1.1.toString);Jc.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+BC(++FC+DC,36)}});var R=a((VU,Xc)=>{"use strict";var GC=_(),UC=or(),Qc=W(),WC=Ar(),HC=ar(),KC=Zi(),Nr=GC.Symbol,na=UC("wks"),VC=KC?Nr.for||Nr:Nr&&Nr.withoutSetter||WC;Xc.exports=function(e){return Qc(na,e)||(na[e]=HC&&Qc(Nr,e)?Nr[e]:VC("Symbol."+e)),na[e]}});var tl=a((zU,rl)=>{"use strict";var zC=D(),Zc=$(),el=Rr(),YC=pn(),JC=Lc(),QC=R(),XC=TypeError,ZC=QC("toPrimitive");rl.exports=function(e,r){if(!Zc(e)||el(e))return e;var t=YC(e,ZC),n;if(t){if(r===void 0&&(r="default"),n=zC(t,e,r),!Zc(n)||el(n))return n;throw new XC("Can't convert object to primitive value")}return r===void 0&&(r="number"),JC(e,r)}});var dn=a((YU,nl)=>{"use strict";var eI=tl(),rI=Rr();nl.exports=function(e){var r=eI(e,"string");return rI(r)?r:r+""}});var hn=a((JU,al)=>{"use strict";var tI=_(),il=$(),ia=tI.document,nI=il(ia)&&il(ia.createElement);al.exports=function(e){return nI?ia.createElement(e):{}}});var aa=a((QU,ol)=>{"use strict";var iI=G(),aI=P(),oI=hn();ol.exports=!iI&&!aI(function(){return Object.defineProperty(oI("div"),"a",{get:function(){return 7}}).a!==7})});var st=a(sl=>{"use strict";var uI=G(),sI=D(),cI=zi(),lI=We(),fI=Ce(),vI=dn(),pI=W(),dI=aa(),ul=Object.getOwnPropertyDescriptor;sl.f=uI?ul:function(r,t){if(r=fI(r),t=vI(t),dI)try{return ul(r,t)}catch{}if(pI(r,t))return lI(!sI(cI.f,r,t),r[t])}});var oa=a((ZU,cl)=>{"use strict";var hI=P(),mI=N(),yI=/#|\.prototype\./,ct=function(e,r){var t=bI[gI(e)];return t===xI?!0:t===qI?!1:mI(r)?hI(r):!!r},gI=ct.normalize=function(e){return String(e).replace(yI,".").toLowerCase()},bI=ct.data={},qI=ct.NATIVE="N",xI=ct.POLYFILL="P";cl.exports=ct});var V=a((eW,fl)=>{"use strict";var ll=ot(),SI=F(),wI=Ir(),TI=ll(ll.bind);fl.exports=function(e,r){return SI(e),r===void 0?e:wI?TI(e,r):function(){return e.apply(r,arguments)}}});var ua=a((rW,vl)=>{"use strict";var OI=G(),EI=P();vl.exports=OI&&EI(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var Q=a((tW,pl)=>{"use strict";var CI=$(),II=String,kI=TypeError;pl.exports=function(e){if(CI(e))return e;throw new kI(II(e)+" is not an object")}});var te=a(hl=>{"use strict";var PI=G(),_I=aa(),RI=ua(),mn=Q(),dl=dn(),AI=TypeError,sa=Object.defineProperty,NI=Object.getOwnPropertyDescriptor,ca="enumerable",la="configurable",fa="writable";hl.f=PI?RI?function(r,t,n){if(mn(r),t=dl(t),mn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&fa in n&&!n[fa]){var i=NI(r,t);i&&i[fa]&&(r[t]=n.value,n={configurable:la in n?n[la]:i[la],enumerable:ca in n?n[ca]:i[ca],writable:!1})}return sa(r,t,n)}:sa:function(r,t,n){if(mn(r),t=dl(t),mn(n),_I)try{return sa(r,t,n)}catch{}if("get"in n||"set"in n)throw new AI("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var xe=a((iW,ml)=>{"use strict";var MI=G(),jI=te(),$I=We();ml.exports=MI?function(e,r,t){return jI.f(e,r,$I(1,t))}:function(e,r,t){return e[r]=t,e}});var x=a((aW,gl)=>{"use strict";var lt=_(),LI=kr(),FI=ot(),DI=N(),BI=st().f,GI=oa(),Mr=K(),UI=V(),jr=xe(),yl=W();ut();var WI=function(e){var r=function(t,n,i){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return LI(e,this,arguments)};return r.prototype=e.prototype,r};gl.exports=function(e,r){var t=e.target,n=e.global,i=e.stat,o=e.proto,u=n?lt:i?lt[t]:lt[t]&&lt[t].prototype,l=n?Mr:Mr[t]||jr(Mr,t,{})[t],c=l.prototype,s,f,v,p,d,m,h,y,q;for(p in r)s=GI(n?p:t+(i?".":"#")+p,e.forced),f=!s&&u&&yl(u,p),m=l[p],f&&(e.dontCallGetSet?(q=BI(u,p),h=q&&q.value):h=u[p]),d=f&&h?h:r[p],!(!s&&!o&&typeof m==typeof d)&&(e.bind&&f?y=UI(d,lt):e.wrap&&f?y=WI(d):o&&DI(d)?y=FI(d):y=d,(e.sham||d&&d.sham||m&&m.sham)&&jr(y,"sham",!0),jr(l,p,y),o&&(v=t+"Prototype",yl(Mr,v)||jr(Mr,v,{}),jr(Mr[v],p,d),e.real&&c&&(s||!c[p])&&jr(c,p,d)))}});var Ie=a((oW,bl)=>{"use strict";var HI=qe();bl.exports=Array.isArray||function(r){return HI(r)==="Array"}});var yn=a((uW,xl)=>{"use strict";var KI=R(),VI=KI("toStringTag"),ql={};ql[VI]="z";xl.exports=String(ql)==="[object z]"});var ft=a((sW,Sl)=>{"use strict";var zI=yn(),YI=N(),gn=qe(),JI=R(),QI=JI("toStringTag"),XI=Object,ZI=gn(function(){return arguments}())==="Arguments",e0=function(e,r){try{return e[r]}catch{}};Sl.exports=zI?gn:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=e0(r=XI(e),QI))=="string"?t:ZI?gn(r):(n=gn(r))==="Object"&&YI(r.callee)?"Arguments":n}});var pa=a((cW,wl)=>{"use strict";var r0=A(),t0=N(),va=ut(),n0=r0(Function.toString);t0(va.inspectSource)||(va.inspectSource=function(e){return n0(e)});wl.exports=va.inspectSource});var pt=a((lW,Il)=>{"use strict";var i0=A(),a0=P(),Tl=N(),o0=ft(),u0=U(),s0=pa(),Ol=function(){},El=u0("Reflect","construct"),da=/^\s*(?:class|function)\b/,c0=i0(da.exec),l0=!da.test(Ol),vt=function(r){if(!Tl(r))return!1;try{return El(Ol,[],r),!0}catch{return!1}},Cl=function(r){if(!Tl(r))return!1;switch(o0(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return l0||!!c0(da,s0(r))}catch{return!0}};Cl.sham=!0;Il.exports=!El||a0(function(){var e;return vt(vt.call)||!vt(Object)||!vt(function(){e=!0})||e})?Cl:vt});var Pl=a((fW,kl)=>{"use strict";var f0=Math.ceil,v0=Math.floor;kl.exports=Math.trunc||function(r){var t=+r;return(t>0?v0:f0)(t)}});var bn=a((vW,_l)=>{"use strict";var p0=Pl();_l.exports=function(e){var r=+e;return r!==r||r===0?0:p0(r)}});var ha=a((pW,Rl)=>{"use strict";var d0=bn(),h0=Math.max,m0=Math.min;Rl.exports=function(e,r){var t=d0(e);return t<0?h0(t+r,0):m0(t,r)}});var ma=a((dW,Al)=>{"use strict";var y0=bn(),g0=Math.min;Al.exports=function(e){var r=y0(e);return r>0?g0(r,9007199254740991):0}});var le=a((hW,Nl)=>{"use strict";var b0=ma();Nl.exports=function(e){return b0(e.length)}});var $r=a((mW,Ml)=>{"use strict";var q0=G(),x0=te(),S0=We();Ml.exports=function(e,r,t){q0?x0.f(e,r,S0(0,t)):e[r]=t}});var Lr=a((yW,jl)=>{"use strict";var w0=G(),T0=Ie(),O0=TypeError,E0=Object.getOwnPropertyDescriptor,C0=w0&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();jl.exports=C0?function(e,r){if(T0(e)&&!E0(e,"length").writable)throw new O0("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var dt=a((gW,$l)=>{"use strict";var I0=P(),k0=R(),P0=_r(),_0=k0("species");$l.exports=function(e){return P0>=51||!I0(function(){var r=[],t=r.constructor={};return t[_0]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var ur=a((bW,Ll)=>{"use strict";var R0=A();Ll.exports=R0([].slice)});var Bl=a(()=>{"use strict";var A0=x(),Fl=Ie(),N0=pt(),M0=$(),Dl=ha(),j0=le(),$0=Ce(),L0=$r(),F0=Lr(),D0=R(),B0=dt(),G0=ur(),U0=B0("slice"),W0=D0("species"),ya=Array,H0=Math.max;A0({target:"Array",proto:!0,forced:!U0},{slice:function(r,t){var n=$0(this),i=j0(n),o=Dl(r,i),u=Dl(t===void 0?i:t,i),l,c,s;if(Fl(n)&&(l=n.constructor,N0(l)&&(l===ya||Fl(l.prototype))?l=void 0:M0(l)&&(l=l[W0],l===null&&(l=void 0)),l===ya||l===void 0))return G0(n,o,u);for(c=new(l===void 0?ya:l)(H0(u-o,0)),s=0;o<u;o++,s++)o in n&&L0(c,s,n[o]);return F0(c,s),c}})});var oe=a((SW,Gl)=>{"use strict";var K0=_(),V0=K();Gl.exports=function(e,r){var t=V0[e+"Prototype"],n=t&&t[r];if(n)return n;var i=K0[e],o=i&&i.prototype;return o&&o[r]}});var Wl=a((wW,Ul)=>{"use strict";Bl();var z0=oe();Ul.exports=z0("Array","slice")});var Kl=a((TW,Hl)=>{"use strict";var Y0=B(),J0=Wl(),ga=Array.prototype;Hl.exports=function(e){var r=e.slice;return e===ga||Y0(ga,e)&&r===ga.slice?J0:r}});var zl=a((OW,Vl)=>{"use strict";var Q0=Kl();Vl.exports=Q0});var Jl=a((EW,Yl)=>{"use strict";var X0=zl();Yl.exports=X0});var Xl=a((CW,Ql)=>{"use strict";var Z0=Jl();Ql.exports=Z0});var ba=a((IW,Zl)=>{"use strict";Zl.exports=Xl()});var Fr=a((kW,ef)=>{ef.exports=ba()});var Ke=a((PW,rf)=>{"use strict";var ek=ft(),rk=String;rf.exports=function(e){if(ek(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return rk(e)}});var of=a((_W,af)=>{"use strict";var qa=A(),tk=bn(),nk=Ke(),ik=ir(),ak=qa("".charAt),tf=qa("".charCodeAt),ok=qa("".slice),nf=function(e){return function(r,t){var n=nk(ik(r)),i=tk(t),o=n.length,u,l;return i<0||i>=o?e?"":void 0:(u=tf(n,i),u<55296||u>56319||i+1===o||(l=tf(n,i+1))<56320||l>57343?e?ak(n,i):u:e?ok(n,i,i+2):(u-55296<<10)+(l-56320)+65536)}};af.exports={codeAt:nf(!1),charAt:nf(!0)}});var cf=a((RW,sf)=>{"use strict";var uk=_(),sk=N(),uf=uk.WeakMap;sf.exports=sk(uf)&&/native code/.test(String(uf))});var ht=a((AW,ff)=>{"use strict";var ck=or(),lk=Ar(),lf=ck("keys");ff.exports=function(e){return lf[e]||(lf[e]=lk(e))}});var Dr=a((NW,vf)=>{"use strict";vf.exports={}});var Ve=a((MW,hf)=>{"use strict";var fk=cf(),df=_(),vk=$(),pk=xe(),xa=W(),Sa=ut(),dk=ht(),hk=Dr(),pf="Object already initialized",wa=df.TypeError,mk=df.WeakMap,qn,mt,xn,yk=function(e){return xn(e)?mt(e):qn(e,{})},gk=function(e){return function(r){var t;if(!vk(r)||(t=mt(r)).type!==e)throw new wa("Incompatible receiver, "+e+" required");return t}};fk||Sa.state?(he=Sa.state||(Sa.state=new mk),he.get=he.get,he.has=he.has,he.set=he.set,qn=function(e,r){if(he.has(e))throw new wa(pf);return r.facade=e,he.set(e,r),r},mt=function(e){return he.get(e)||{}},xn=function(e){return he.has(e)}):(sr=dk("state"),hk[sr]=!0,qn=function(e,r){if(xa(e,sr))throw new wa(pf);return r.facade=e,pk(e,sr,r),r},mt=function(e){return xa(e,sr)?e[sr]:{}},xn=function(e){return xa(e,sr)});var he,sr;hf.exports={set:qn,get:mt,has:xn,enforce:yk,getterFor:gk}});var gf=a((jW,yf)=>{"use strict";var Ta=G(),bk=W(),mf=Function.prototype,qk=Ta&&Object.getOwnPropertyDescriptor,Oa=bk(mf,"name"),xk=Oa&&function(){}.name==="something",Sk=Oa&&(!Ta||Ta&&qk(mf,"name").configurable);yf.exports={EXISTS:Oa,PROPER:xk,CONFIGURABLE:Sk}});var Ea=a(($W,qf)=>{"use strict";var wk=Ce(),Tk=ha(),Ok=le(),bf=function(e){return function(r,t,n){var i=wk(r),o=Ok(i);if(o===0)return!e&&-1;var u=Tk(n,o),l;if(e&&t!==t){for(;o>u;)if(l=i[u++],l!==l)return!0}else for(;o>u;u++)if((e||u in i)&&i[u]===t)return e||u||0;return!e&&-1}};qf.exports={includes:bf(!0),indexOf:bf(!1)}});var Ia=a((LW,Sf)=>{"use strict";var Ek=A(),Ca=W(),Ck=Ce(),Ik=Ea().indexOf,kk=Dr(),xf=Ek([].push);Sf.exports=function(e,r){var t=Ck(e),n=0,i=[],o;for(o in t)!Ca(kk,o)&&Ca(t,o)&&xf(i,o);for(;r.length>n;)Ca(t,o=r[n++])&&(~Ik(i,o)||xf(i,o));return i}});var Sn=a((FW,wf)=>{"use strict";wf.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var wn=a((DW,Tf)=>{"use strict";var Pk=Ia(),_k=Sn();Tf.exports=Object.keys||function(r){return Pk(r,_k)}});var ka=a(Of=>{"use strict";var Rk=G(),Ak=ua(),Nk=te(),Mk=Q(),jk=Ce(),$k=wn();Of.f=Rk&&!Ak?Object.defineProperties:function(r,t){Mk(r);for(var n=jk(t),i=$k(t),o=i.length,u=0,l;o>u;)Nk.f(r,l=i[u++],n[l]);return r}});var Pa=a((GW,Ef)=>{"use strict";var Lk=U();Ef.exports=Lk("document","documentElement")});var ze=a((UW,Af)=>{"use strict";var Fk=Q(),Dk=ka(),Cf=Sn(),Bk=Dr(),Gk=Pa(),Uk=hn(),Wk=ht(),If=">",kf="<",Ra="prototype",Aa="script",_f=Wk("IE_PROTO"),_a=function(){},Rf=function(e){return kf+Aa+If+e+kf+"/"+Aa+If},Pf=function(e){e.write(Rf("")),e.close();var r=e.parentWindow.Object;return e=null,r},Hk=function(){var e=Uk("iframe"),r="java"+Aa+":",t;return e.style.display="none",Gk.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(Rf("document.F=Object")),t.close(),t.F},Tn,On=function(){try{Tn=new ActiveXObject("htmlfile")}catch{}On=typeof document<"u"?document.domain&&Tn?Pf(Tn):Hk():Pf(Tn);for(var e=Cf.length;e--;)delete On[Ra][Cf[e]];return On()};Bk[_f]=!0;Af.exports=Object.create||function(r,t){var n;return r!==null?(_a[Ra]=Fk(r),n=new _a,_a[Ra]=null,n[_f]=r):n=On(),t===void 0?n:Dk.f(n,t)}});var Na=a((WW,Nf)=>{"use strict";var Kk=P();Nf.exports=!Kk(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var yt=a((HW,jf)=>{"use strict";var Vk=W(),zk=N(),Yk=re(),Jk=ht(),Qk=Na(),Mf=Jk("IE_PROTO"),Ma=Object,Xk=Ma.prototype;jf.exports=Qk?Ma.getPrototypeOf:function(e){var r=Yk(e);if(Vk(r,Mf))return r[Mf];var t=r.constructor;return zk(t)&&r instanceof t?t.prototype:r instanceof Ma?Xk:null}});var ke=a((KW,$f)=>{"use strict";var Zk=xe();$f.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:Zk(e,r,t),e}});var Fa=a((VW,Df)=>{"use strict";var eP=P(),rP=N(),tP=$(),nP=ze(),Lf=yt(),iP=ke(),aP=R(),oP=X(),La=aP("iterator"),Ff=!1,Pe,ja,$a;[].keys&&($a=[].keys(),"next"in $a?(ja=Lf(Lf($a)),ja!==Object.prototype&&(Pe=ja)):Ff=!0);var uP=!tP(Pe)||eP(function(){var e={};return Pe[La].call(e)!==e});uP?Pe={}:oP&&(Pe=nP(Pe));rP(Pe[La])||iP(Pe,La,function(){return this});Df.exports={IteratorPrototype:Pe,BUGGY_SAFARI_ITERATORS:Ff}});var Gf=a((zW,Bf)=>{"use strict";var sP=yn(),cP=ft();Bf.exports=sP?{}.toString:function(){return"[object "+cP(this)+"]"}});var _e=a((YW,Wf)=>{"use strict";var lP=yn(),fP=te().f,vP=xe(),pP=W(),dP=Gf(),hP=R(),Uf=hP("toStringTag");Wf.exports=function(e,r,t,n){var i=t?e:e&&e.prototype;i&&(pP(i,Uf)||fP(i,Uf,{configurable:!0,value:r}),n&&!lP&&vP(i,"toString",dP))}});var cr=a((JW,Hf)=>{"use strict";Hf.exports={}});var Vf=a((QW,Kf)=>{"use strict";var mP=Fa().IteratorPrototype,yP=ze(),gP=We(),bP=_e(),qP=cr(),xP=function(){return this};Kf.exports=function(e,r,t,n){var i=r+" Iterator";return e.prototype=yP(mP,{next:gP(+!n,t)}),bP(e,i,!1,!0),qP[i]=xP,e}});var Yf=a((XW,zf)=>{"use strict";var SP=A(),wP=F();zf.exports=function(e,r,t){try{return SP(wP(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var Qf=a((ZW,Jf)=>{"use strict";var TP=$();Jf.exports=function(e){return TP(e)||e===null}});var Zf=a((e5,Xf)=>{"use strict";var OP=Qf(),EP=String,CP=TypeError;Xf.exports=function(e){if(OP(e))return e;throw new CP("Can't set "+EP(e)+" as a prototype")}});var gt=a((r5,ev)=>{"use strict";var IP=Yf(),kP=$(),PP=ir(),_P=Zf();ev.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=IP(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(i,o){return PP(i),_P(o),kP(i)&&(e?t(i,o):i.__proto__=o),i}}():void 0)});var In=a((t5,lv)=>{"use strict";var RP=x(),AP=D(),En=X(),sv=gf(),NP=N(),MP=Vf(),rv=yt(),tv=gt(),jP=_e(),$P=xe(),Da=ke(),LP=R(),nv=cr(),cv=Fa(),FP=sv.PROPER,DP=sv.CONFIGURABLE,iv=cv.IteratorPrototype,Cn=cv.BUGGY_SAFARI_ITERATORS,bt=LP("iterator"),av="keys",qt="values",ov="entries",uv=function(){return this};lv.exports=function(e,r,t,n,i,o,u){MP(t,r,n);var l=function(q){if(q===i&&p)return p;if(!Cn&&q&&q in f)return f[q];switch(q){case av:return function(){return new t(this,q)};case qt:return function(){return new t(this,q)};case ov:return function(){return new t(this,q)}}return function(){return new t(this)}},c=r+" Iterator",s=!1,f=e.prototype,v=f[bt]||f["@@iterator"]||i&&f[i],p=!Cn&&v||l(i),d=r==="Array"&&f.entries||v,m,h,y;if(d&&(m=rv(d.call(new e)),m!==Object.prototype&&m.next&&(!En&&rv(m)!==iv&&(tv?tv(m,iv):NP(m[bt])||Da(m,bt,uv)),jP(m,c,!0,!0),En&&(nv[c]=uv))),FP&&i===qt&&v&&v.name!==qt&&(!En&&DP?$P(f,"name",qt):(s=!0,p=function(){return AP(v,this)})),i)if(h={values:l(qt),keys:o?p:l(av),entries:l(ov)},u)for(y in h)(Cn||s||!(y in f))&&Da(f,y,h[y]);else RP({target:r,proto:!0,forced:Cn||s},h);return(!En||u)&&f[bt]!==p&&Da(f,bt,p,{name:i}),nv[r]=p,h}});var kn=a((n5,fv)=>{"use strict";fv.exports=function(e,r){return{value:e,done:r}}});var lr=a(()=>{"use strict";var BP=of().charAt,GP=Ke(),pv=Ve(),UP=In(),vv=kn(),dv="String Iterator",WP=pv.set,HP=pv.getterFor(dv);UP(String,"String",function(e){WP(this,{type:dv,string:GP(e),index:0})},function(){var r=HP(this),t=r.string,n=r.index,i;return n>=t.length?vv(void 0,!0):(i=BP(t,n),r.index+=i.length,vv(i,!1))})});var Ba=a((o5,mv)=>{"use strict";var KP=D(),hv=Q(),VP=pn();mv.exports=function(e,r,t){var n,i;hv(e);try{if(n=VP(e,"return"),!n){if(r==="throw")throw t;return t}n=KP(n,e)}catch(o){i=!0,n=o}if(r==="throw")throw t;if(i)throw n;return hv(n),t}});var gv=a((u5,yv)=>{"use strict";var zP=Q(),YP=Ba();yv.exports=function(e,r,t,n){try{return n?r(zP(t)[0],t[1]):r(t)}catch(i){YP(e,"throw",i)}}});var Ga=a((s5,bv)=>{"use strict";var JP=R(),QP=cr(),XP=JP("iterator"),ZP=Array.prototype;bv.exports=function(e){return e!==void 0&&(QP.Array===e||ZP[XP]===e)}});var xt=a((c5,xv)=>{"use strict";var e_=ft(),qv=pn(),r_=nr(),t_=cr(),n_=R(),i_=n_("iterator");xv.exports=function(e){if(!r_(e))return qv(e,i_)||qv(e,"@@iterator")||t_[e_(e)]}});var Pn=a((l5,Sv)=>{"use strict";var a_=D(),o_=F(),u_=Q(),s_=He(),c_=xt(),l_=TypeError;Sv.exports=function(e,r){var t=arguments.length<2?c_(e):r;if(o_(t))return u_(a_(t,e));throw new l_(s_(e)+" is not iterable")}});var Ev=a((f5,Ov)=>{"use strict";var f_=V(),v_=D(),p_=re(),d_=gv(),h_=Ga(),m_=pt(),y_=le(),wv=$r(),g_=Lr(),b_=Pn(),q_=xt(),Tv=Array;Ov.exports=function(r){var t=p_(r),n=m_(this),i=arguments.length,o=i>1?arguments[1]:void 0,u=o!==void 0;u&&(o=f_(o,i>2?arguments[2]:void 0));var l=q_(t),c=0,s,f,v,p,d,m;if(l&&!(this===Tv&&h_(l)))for(f=n?new this:[],p=b_(t,l),d=p.next;!(v=v_(d,p)).done;c++)m=u?d_(p,o,[v.value,c],!0):v.value,wv(f,c,m);else for(s=y_(t),f=n?new this(s):Tv(s);s>c;c++)m=u?o(t[c],c):t[c],wv(f,c,m);return g_(f,c),f}});var Wa=a((v5,Pv)=>{"use strict";var x_=R(),Iv=x_("iterator"),kv=!1;try{Cv=0,Ua={next:function(){return{done:!!Cv++}},return:function(){kv=!0}},Ua[Iv]=function(){return this},Array.from(Ua,function(){throw 2})}catch{}var Cv,Ua;Pv.exports=function(e,r){try{if(!r&&!kv)return!1}catch{return!1}var t=!1;try{var n={};n[Iv]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var _v=a(()=>{"use strict";var S_=x(),w_=Ev(),T_=Wa(),O_=!T_(function(e){Array.from(e)});S_({target:"Array",stat:!0,forced:O_},{from:w_})});var Av=a((h5,Rv)=>{"use strict";lr();_v();var E_=K();Rv.exports=E_.Array.from});var Mv=a((m5,Nv)=>{"use strict";var C_=Av();Nv.exports=C_});var $v=a((y5,jv)=>{"use strict";var I_=Mv();jv.exports=I_});var Fv=a((g5,Lv)=>{"use strict";var k_=$v();Lv.exports=k_});var Ha=a((b5,Dv)=>{"use strict";Dv.exports=Fv()});var _n=a((q5,Bv)=>{Bv.exports=Ha()});var St=a((x5,Gv)=>{"use strict";var P_=TypeError,__=9007199254740991;Gv.exports=function(e){if(e>__)throw P_("Maximum allowed index exceeded");return e}});var Kv=a((S5,Hv)=>{"use strict";var Uv=Ie(),R_=pt(),A_=$(),N_=R(),M_=N_("species"),Wv=Array;Hv.exports=function(e){var r;return Uv(e)&&(r=e.constructor,R_(r)&&(r===Wv||Uv(r.prototype))?r=void 0:A_(r)&&(r=r[M_],r===null&&(r=void 0))),r===void 0?Wv:r}});var Rn=a((w5,Vv)=>{"use strict";var j_=Kv();Vv.exports=function(e,r){return new(j_(e))(r===0?0:r)}});var Ka=a(()=>{"use strict";var $_=x(),L_=P(),F_=Ie(),D_=$(),B_=re(),G_=le(),zv=St(),Yv=$r(),U_=Lr(),W_=Rn(),H_=dt(),K_=R(),V_=_r(),Jv=K_("isConcatSpreadable"),z_=V_>=51||!L_(function(){var e=[];return e[Jv]=!1,e.concat()[0]!==e}),Y_=function(e){if(!D_(e))return!1;var r=e[Jv];return r!==void 0?!!r:F_(e)},J_=!z_||!H_("concat");$_({target:"Array",proto:!0,arity:1,forced:J_},{concat:function(r){var t=B_(this),n=W_(t,0),i=0,o,u,l,c,s;for(o=-1,l=arguments.length;o<l;o++)if(s=o===-1?t:arguments[o],Y_(s))for(c=G_(s),zv(i+c),u=0;u<c;u++,i++)u in s&&Yv(n,i,s[u]);else zv(i+1),Yv(n,i++,s);return U_(n,i),n}})});var wt=a(()=>{});var Tt=a(Qv=>{"use strict";var Q_=Ia(),X_=Sn(),Z_=X_.concat("length","prototype");Qv.f=Object.getOwnPropertyNames||function(r){return Q_(r,Z_)}});var Va=a((k5,ep)=>{"use strict";var e1=qe(),r1=Ce(),Xv=Tt().f,t1=ur(),Zv=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],n1=function(e){try{return Xv(e)}catch{return t1(Zv)}};ep.exports.f=function(r){return Zv&&e1(r)==="Window"?n1(r):Xv(r1(r))}});var An=a(rp=>{"use strict";rp.f=Object.getOwnPropertySymbols});var Nn=a((_5,tp)=>{"use strict";var i1=te();tp.exports=function(e,r,t){return i1.f(e,r,t)}});var Br=a(np=>{"use strict";var a1=R();np.f=a1});var M=a((A5,ap)=>{"use strict";var ip=K(),o1=W(),u1=Br(),s1=te().f;ap.exports=function(e){var r=ip.Symbol||(ip.Symbol={});o1(r,e)||s1(r,e,{value:u1.f(e)})}});var za=a((N5,op)=>{"use strict";var c1=D(),l1=U(),f1=R(),v1=ke();op.exports=function(){var e=l1("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=f1("toPrimitive");r&&!r[n]&&v1(r,n,function(i){return c1(t,this)},{arity:1})}});var Ot=a((M5,sp)=>{"use strict";var p1=V(),d1=fn(),h1=re(),m1=le(),up=Rn(),Ya=$r(),Ye=function(e){var r=e===1,t=e===2,n=e===3,i=e===4,o=e===6,u=e===7,l=e===5||o;return function(c,s,f){for(var v=h1(c),p=d1(v),d=m1(p),m=p1(s,f),h=0,y=0,q=r?up(c,d):t||u?up(c,0):void 0,b,I;d>h;h++)if((l||h in p)&&(b=p[h],I=m(b,h,v),e))if(r)Ya(q,h,I);else if(I)switch(e){case 3:return!0;case 5:return b;case 6:return h;case 2:Ya(q,y++,b)}else switch(e){case 4:return!1;case 7:Ya(q,y++,b)}return o?-1:n||i?i:q}};sp.exports={forEach:Ye(0),map:Ye(1),filter:Ye(2),some:Ye(3),every:Ye(4),find:Ye(5),findIndex:Ye(6),filterReject:Ye(7)}});var Op=a(()=>{"use strict";var Mn=x(),It=_(),io=D(),y1=A(),g1=X(),Gr=G(),Ur=ar(),b1=P(),H=W(),q1=B(),Za=Q(),jn=Ce(),ao=dn(),x1=Ke(),eo=We(),Wr=ze(),fp=wn(),S1=Tt(),vp=Va(),w1=An(),pp=st(),dp=te(),T1=ka(),hp=zi(),Ja=ke(),O1=Nn(),oo=or(),E1=ht(),mp=Dr(),cp=Ar(),C1=R(),I1=Br(),k1=M(),P1=za(),_1=_e(),yp=Ve(),$n=Ot().forEach,ne=E1("hidden"),Ln="Symbol",Ct="prototype",R1=yp.set,lp=yp.getterFor(Ln),fe=Object[Ct],fr=It.Symbol,Et=fr&&fr[Ct],A1=It.RangeError,N1=It.TypeError,Qa=It.QObject,gp=pp.f,vr=dp.f,bp=vp.f,M1=hp.f,qp=y1([].push),Re=oo("symbols"),kt=oo("op-symbols"),j1=oo("wks"),ro=!Qa||!Qa[Ct]||!Qa[Ct].findChild,xp=function(e,r,t){var n=gp(fe,r);n&&delete fe[r],vr(e,r,t),n&&e!==fe&&vr(fe,r,n)},to=Gr&&b1(function(){return Wr(vr({},"a",{get:function(){return vr(this,"a",{value:7}).a}})).a!==7})?xp:vr,Xa=function(e,r){var t=Re[e]=Wr(Et);return R1(t,{type:Ln,tag:e,description:r}),Gr||(t.description=r),t},Fn=function(r,t,n){r===fe&&Fn(kt,t,n),Za(r);var i=ao(t);return Za(n),H(Re,i)?(n.enumerable?(H(r,ne)&&r[ne][i]&&(r[ne][i]=!1),n=Wr(n,{enumerable:eo(0,!1)})):(H(r,ne)||vr(r,ne,eo(1,Wr(null))),r[ne][i]=!0),to(r,i,n)):vr(r,i,n)},uo=function(r,t){Za(r);var n=jn(t),i=fp(n).concat(Tp(n));return $n(i,function(o){(!Gr||io(no,n,o))&&Fn(r,o,n[o])}),r},$1=function(r,t){return t===void 0?Wr(r):uo(Wr(r),t)},no=function(r){var t=ao(r),n=io(M1,this,t);return this===fe&&H(Re,t)&&!H(kt,t)?!1:n||!H(this,t)||!H(Re,t)||H(this,ne)&&this[ne][t]?n:!0},Sp=function(r,t){var n=jn(r),i=ao(t);if(!(n===fe&&H(Re,i)&&!H(kt,i))){var o=gp(n,i);return o&&H(Re,i)&&!(H(n,ne)&&n[ne][i])&&(o.enumerable=!0),o}},wp=function(r){var t=bp(jn(r)),n=[];return $n(t,function(i){!H(Re,i)&&!H(mp,i)&&qp(n,i)}),n},Tp=function(e){var r=e===fe,t=bp(r?kt:jn(e)),n=[];return $n(t,function(i){H(Re,i)&&(!r||H(fe,i))&&qp(n,Re[i])}),n};Ur||(fr=function(){if(q1(Et,this))throw new N1("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:x1(arguments[0]),t=cp(r),n=function(i){var o=this===void 0?It:this;o===fe&&io(n,kt,i),H(o,ne)&&H(o[ne],t)&&(o[ne][t]=!1);var u=eo(1,i);try{to(o,t,u)}catch(l){if(!(l instanceof A1))throw l;xp(o,t,u)}};return Gr&&ro&&to(fe,t,{configurable:!0,set:n}),Xa(t,r)},Et=fr[Ct],Ja(Et,"toString",function(){return lp(this).tag}),Ja(fr,"withoutSetter",function(e){return Xa(cp(e),e)}),hp.f=no,dp.f=Fn,T1.f=uo,pp.f=Sp,S1.f=vp.f=wp,w1.f=Tp,I1.f=function(e){return Xa(C1(e),e)},Gr&&(O1(Et,"description",{configurable:!0,get:function(){return lp(this).description}}),g1||Ja(fe,"propertyIsEnumerable",no,{unsafe:!0})));Mn({global:!0,constructor:!0,wrap:!0,forced:!Ur,sham:!Ur},{Symbol:fr});$n(fp(j1),function(e){k1(e)});Mn({target:Ln,stat:!0,forced:!Ur},{useSetter:function(){ro=!0},useSimple:function(){ro=!1}});Mn({target:"Object",stat:!0,forced:!Ur,sham:!Gr},{create:$1,defineProperty:Fn,defineProperties:uo,getOwnPropertyDescriptor:Sp});Mn({target:"Object",stat:!0,forced:!Ur},{getOwnPropertyNames:wp});P1();_1(fr,Ln);mp[ne]=!0});var so=a((L5,Ep)=>{"use strict";var L1=ar();Ep.exports=L1&&!!Symbol.for&&!!Symbol.keyFor});var Ip=a(()=>{"use strict";var F1=x(),D1=U(),B1=W(),G1=Ke(),Cp=or(),U1=so(),co=Cp("string-to-symbol-registry"),W1=Cp("symbol-to-string-registry");F1({target:"Symbol",stat:!0,forced:!U1},{for:function(e){var r=G1(e);if(B1(co,r))return co[r];var t=D1("Symbol")(r);return co[r]=t,W1[t]=r,t}})});var Pp=a(()=>{"use strict";var H1=x(),K1=W(),V1=Rr(),z1=He(),Y1=or(),J1=so(),kp=Y1("symbol-to-string-registry");H1({target:"Symbol",stat:!0,forced:!J1},{keyFor:function(r){if(!V1(r))throw new TypeError(z1(r)+" is not a symbol");if(K1(kp,r))return kp[r]}})});var Rp=a((U5,_p)=>{"use strict";var Q1=$(),X1=Ve().get;_p.exports=function(r){if(!Q1(r))return!1;var t=X1(r);return!!t&&t.type==="RawJSON"}});var $p=a((W5,jp)=>{"use strict";var lo=A(),Z1=W(),Dn=SyntaxError,eR=parseInt,rR=String.fromCharCode,tR=lo("".charAt),Ap=lo("".slice),Np=lo(/./.exec),Mp={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},nR=/^[\da-f]{4}$/i,iR=/^[\u0000-\u001F]$/;jp.exports=function(e,r){for(var t=!0,n="";r<e.length;){var i=tR(e,r);if(i==="\\"){var o=Ap(e,r,r+2);if(Z1(Mp,o))n+=Mp[o],r+=2;else if(o==="\\u"){r+=2;var u=Ap(e,r,r+4);if(!Np(nR,u))throw new Dn("Bad Unicode escape at: "+r);n+=rR(eR(u,16)),r+=4}else throw new Dn('Unknown escape sequence: "'+o+'"')}else if(i==='"'){t=!1,r++;break}else{if(Np(iR,i))throw new Dn("Bad control character in string literal at: "+r);n+=i,r++}}if(t)throw new Dn("Unterminated string at: "+r);return{value:n,end:r}}});var Fp=a((H5,Lp)=>{"use strict";var aR=P();Lp.exports=!aR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var Zp=a(()=>{"use strict";var oR=x(),Vp=U(),uR=kr(),zp=D(),pr=A(),Yp=P(),Dp=Ie(),Gn=N(),sR=Rp(),Bp=Rr(),Gp=qe(),cR=Ke(),lR=ur(),fR=$p(),vR=Ar(),pR=ar(),fo=Fp(),Jp=String,Je=Vp("JSON","stringify"),Bn=pr(/./.exec),po=pr("".charAt),dR=pr("".charCodeAt),hR=pr("".replace),vo=pr("".slice),ho=pr([].push),mR=pr(1.1.toString),yR=/[\uD800-\uDFFF]/g,Up=/^[\uD800-\uDBFF]$/,Wp=/^[\uDC00-\uDFFF]$/,mo=vR(),Hp=mo.length,Qp=!pR||Yp(function(){var e=Vp("Symbol")("stringify detection");return Je([e])!=="[null]"||Je({a:e})!=="{}"||Je(Object(e))!=="{}"}),Kp=Yp(function(){return Je("\uDF06\uD834")!=='"\\udf06\\ud834"'||Je("\uDEAD")!=='"\\udead"'}),gR=Qp?function(e,r){var t=lR(arguments),n=Xp(r);if(!(!Gn(n)&&(e===void 0||Bp(e))))return t[1]=function(i,o){if(Gn(n)&&(o=zp(n,this,Jp(i),o)),!Bp(o))return o},uR(Je,null,t)}:Je,bR=function(e,r,t){var n=po(t,r-1),i=po(t,r+1);return Bn(Up,e)&&!Bn(Wp,i)||Bn(Wp,e)&&!Bn(Up,n)?"\\u"+mR(dR(e,0),16):e},Xp=function(e){if(Gn(e))return e;if(Dp(e)){for(var r=e.length,t=[],n=0;n<r;n++){var i=e[n];typeof i=="string"?ho(t,i):(typeof i=="number"||Gp(i)==="Number"||Gp(i)==="String")&&ho(t,cR(i))}var o=t.length,u=!0;return function(l,c){if(u)return u=!1,c;if(Dp(this))return c;for(var s=0;s<o;s++)if(t[s]===l)return c}}};Je&&oR({target:"JSON",stat:!0,arity:3,forced:Qp||Kp||!fo},{stringify:function(r,t,n){var i=Xp(t),o=[],u=gR(r,function(d,m){var h=Gn(i)?zp(i,this,Jp(d),m):m;return!fo&&sR(h)?mo+(ho(o,h.rawJSON)-1):h},n);if(typeof u!="string"||(Kp&&(u=hR(u,yR,bR)),fo))return u;for(var l="",c=u.length,s=0;s<c;s++){var f=po(u,s);if(f==='"'){var v=fR(u,++s).end-1,p=vo(u,s,v);l+=vo(p,0,Hp)===mo?o[vo(p,Hp)]:'"'+p+'"',s=v}else l+=f}return l}})});var rd=a(()=>{"use strict";var qR=x(),xR=ar(),SR=P(),ed=An(),wR=re(),TR=!xR||SR(function(){ed.f(1)});qR({target:"Object",stat:!0,forced:TR},{getOwnPropertySymbols:function(r){var t=ed.f;return t?t(wR(r)):[]}})});var td=a(()=>{"use strict";Op();Ip();Pp();Zp();rd()});var yo=a(()=>{"use strict";var OR=M();OR("asyncDispose")});var go=a(()=>{"use strict";var ER=M();ER("asyncIterator")});var nd=a(()=>{});var bo=a(()=>{"use strict";var CR=M();CR("dispose")});var id=a(()=>{"use strict";var IR=M();IR("hasInstance")});var ad=a(()=>{"use strict";var kR=M();kR("isConcatSpreadable")});var qo=a(()=>{"use strict";var PR=M();PR("iterator")});var od=a(()=>{"use strict";var _R=M();_R("match")});var ud=a(()=>{"use strict";var RR=M();RR("matchAll")});var sd=a(()=>{"use strict";var AR=M();AR("replace")});var cd=a(()=>{"use strict";var NR=M();NR("search")});var ld=a(()=>{"use strict";var MR=M();MR("species")});var fd=a(()=>{"use strict";var jR=M();jR("split")});var xo=a(()=>{"use strict";var $R=M(),LR=za();$R("toPrimitive");LR()});var vd=a(()=>{"use strict";var FR=U(),DR=M(),BR=_e();DR("toStringTag");BR(FR("Symbol"),"Symbol")});var pd=a(()=>{"use strict";var GR=M();GR("unscopables")});var dd=a(()=>{"use strict";var UR=_(),WR=_e();WR(UR.JSON,"JSON",!0)});var hd=a(()=>{});var md=a(()=>{});var gd=a((jH,yd)=>{"use strict";Ka();wt();td();yo();go();nd();bo();id();ad();qo();od();ud();sd();cd();ld();fd();xo();vd();pd();dd();hd();md();var HR=K();yd.exports=HR.Symbol});var So=a(($H,bd)=>{"use strict";bd.exports=function(){}});var dr=a((LH,Td)=>{"use strict";var KR=Ce(),wo=So(),qd=cr(),Sd=Ve(),VR=te().f,zR=In(),Un=kn(),YR=X(),JR=G(),wd="Array Iterator",QR=Sd.set,XR=Sd.getterFor(wd);Td.exports=zR(Array,"Array",function(e,r){QR(this,{type:wd,target:KR(e),index:0,kind:r})},function(){var e=XR(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,Un(void 0,!0);switch(e.kind){case"keys":return Un(t,!1);case"values":return Un(r[t],!1)}return Un([t,r[t]],!1)},"values");var xd=qd.Arguments=qd.Array;wo("keys");wo("values");wo("entries");if(!YR&&JR&&xd.name!=="values")try{VR(xd,"name",{value:"values"})}catch{}});var Ed=a((FH,Od)=>{"use strict";Od.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var hr=a(()=>{"use strict";dr();var ZR=Ed(),eA=_(),rA=_e(),Cd=cr();for(Wn in ZR)rA(eA[Wn],Wn),Cd[Wn]=Cd.Array;var Wn});var kd=a((GH,Id)=>{"use strict";var tA=gd();hr();Id.exports=tA});var Rd=a(()=>{"use strict";var nA=R(),iA=te().f,Pd=nA("metadata"),_d=Function.prototype;_d[Pd]===void 0&&iA(_d,Pd,{value:null})});var Ad=a(()=>{"use strict";yo()});var Nd=a(()=>{"use strict";bo()});var Md=a(()=>{"use strict";var aA=M();aA("metadata")});var $d=a((QH,jd)=>{"use strict";var oA=kd();Rd();Ad();Nd();Md();jd.exports=oA});var Oo=a((XH,Ld)=>{"use strict";var uA=U(),sA=A(),To=uA("Symbol"),cA=To.keyFor,lA=sA(To.prototype.valueOf);Ld.exports=To.isRegisteredSymbol||function(r){try{return cA(lA(r))!==void 0}catch{return!1}}});var Fd=a(()=>{"use strict";var fA=x(),vA=Oo();fA({target:"Symbol",stat:!0},{isRegisteredSymbol:vA})});var Io=a((r6,Hd)=>{"use strict";var pA=or(),Ud=U(),dA=A(),hA=Rr(),mA=R(),Kn=Ud("Symbol"),Dd=Kn.isWellKnownSymbol,Wd=Ud("Object","getOwnPropertyNames"),yA=dA(Kn.prototype.valueOf),Bd=pA("wks");for(Hn=0,Eo=Wd(Kn),Gd=Eo.length;Hn<Gd;Hn++)try{Co=Eo[Hn],hA(Kn[Co])&&mA(Co)}catch{}var Co,Hn,Eo,Gd;Hd.exports=function(r){if(Dd&&Dd(r))return!0;try{for(var t=yA(r),n=0,i=Wd(Bd),o=i.length;n<o;n++)if(Bd[i[n]]==t)return!0}catch{}return!1}});var Kd=a(()=>{"use strict";var gA=x(),bA=Io();gA({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:bA})});var Vd=a(()=>{"use strict";var qA=M();qA("customMatcher")});var zd=a(()=>{"use strict";var xA=M();xA("observable")});var Yd=a(()=>{"use strict";var SA=x(),wA=Oo();SA({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:wA})});var Jd=a(()=>{"use strict";var TA=x(),OA=Io();TA({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:OA})});var Qd=a(()=>{"use strict";var EA=M();EA("matcher")});var Xd=a(()=>{"use strict";var CA=M();CA("metadataKey")});var Zd=a(()=>{"use strict";var IA=M();IA("patternMatch")});var eh=a(()=>{"use strict";var kA=M();kA("replaceAll")});var th=a((q6,rh)=>{"use strict";var PA=$d();Fd();Kd();Vd();zd();Yd();Jd();Qd();Xd();Zd();eh();rh.exports=PA});var Se=a((x6,nh)=>{"use strict";nh.exports=th()});var Vn=a((S6,ih)=>{ih.exports=Se()});var oh=a((w6,ah)=>{"use strict";dr();lr();var _A=xt();ah.exports=_A});var sh=a((T6,uh)=>{"use strict";var RA=oh();hr();uh.exports=RA});var lh=a((O6,ch)=>{"use strict";var AA=sh();ch.exports=AA});var vh=a((E6,fh)=>{"use strict";var NA=lh();fh.exports=NA});var ko=a((C6,ph)=>{"use strict";ph.exports=vh()});var zn=a((I6,dh)=>{dh.exports=ko()});var mh=a((k6,hh)=>{"use strict";dr();lr();var MA=Pn();hh.exports=MA});var gh=a((P6,yh)=>{"use strict";var jA=mh();hr();yh.exports=jA});var qh=a((_6,bh)=>{"use strict";var $A=gh();bh.exports=$A});var Sh=a((R6,xh)=>{"use strict";var LA=qh();xh.exports=LA});var Th=a((A6,wh)=>{"use strict";wh.exports=Sh()});var Yn=a((N6,Oh)=>{Oh.exports=Th()});var Ch=a((M6,Eh)=>{"use strict";var FA=U(),DA=A(),BA=Tt(),GA=An(),UA=Q(),WA=DA([].concat);Eh.exports=FA("Reflect","ownKeys")||function(r){var t=BA.f(UA(r)),n=GA.f;return n?WA(t,n(r)):t}});var Ph=a((j6,kh)=>{"use strict";var Ih=W(),HA=Ch(),KA=st(),VA=te();kh.exports=function(e,r,t){for(var n=HA(r),i=VA.f,o=KA.f,u=0;u<n.length;u++){var l=n[u];!Ih(e,l)&&!(t&&Ih(t,l))&&i(e,l,o(r,l))}}});var Rh=a(($6,_h)=>{"use strict";var zA=$(),YA=xe();_h.exports=function(e,r){zA(r)&&"cause"in r&&YA(e,"cause",r.cause)}});var jh=a((L6,Mh)=>{"use strict";var JA=A(),Ah=Error,QA=JA("".replace),XA=function(e){return String(new Ah(e).stack)}("zxcasd"),Nh=/\n\s*at [^:]*:[^\n]*/,ZA=Nh.test(XA);Mh.exports=function(e,r){if(ZA&&typeof e=="string"&&!Ah.prepareStackTrace)for(;r--;)e=QA(e,Nh,"");return e}});var Lh=a((F6,$h)=>{"use strict";var eN=P(),rN=We();$h.exports=!eN(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",rN(1,7)),e.stack!==7):!0})});var Bh=a((D6,Dh)=>{"use strict";var tN=xe(),nN=jh(),iN=Lh(),Fh=Error.captureStackTrace;Dh.exports=function(e,r,t,n){iN&&(Fh?Fh(e,r):tN(e,"stack",nN(t,n)))}});var ve=a((B6,Hh)=>{"use strict";var aN=V(),oN=D(),uN=Q(),sN=He(),cN=Ga(),lN=le(),Gh=B(),fN=Pn(),vN=xt(),Uh=Ba(),pN=TypeError,Jn=function(e,r){this.stopped=e,this.result=r},Wh=Jn.prototype;Hh.exports=function(e,r,t){var n=t&&t.that,i=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),l=!!(t&&t.INTERRUPTED),c=aN(r,n),s,f,v,p,d,m,h,y=function(b){return s&&Uh(s,"normal"),new Jn(!0,b)},q=function(b){return i?(uN(b),l?c(b[0],b[1],y):c(b[0],b[1])):l?c(b,y):c(b)};if(o)s=e.iterator;else if(u)s=e;else{if(f=vN(e),!f)throw new pN(sN(e)+" is not iterable");if(cN(f)){for(v=0,p=lN(e);p>v;v++)if(d=q(e[v]),d&&Gh(Wh,d))return d;return new Jn(!1)}s=fN(e,f)}for(m=o?e.next:s.next;!(h=oN(m,s)).done;){try{d=q(h.value)}catch(b){Uh(s,"throw",b)}if(typeof d=="object"&&d&&Gh(Wh,d))return d}return new Jn(!1)}});var Vh=a((G6,Kh)=>{"use strict";var dN=Ke();Kh.exports=function(e,r){return e===void 0?arguments.length<2?"":r:dN(e)}});var Yh=a(()=>{"use strict";var hN=x(),mN=B(),yN=yt(),Qn=gt(),gN=Ph(),zh=ze(),Po=xe(),_o=We(),bN=Rh(),qN=Bh(),xN=ve(),SN=Vh(),wN=R(),TN=wN("toStringTag"),Xn=Error,ON=[].push,Hr=function(r,t){var n=mN(Ro,this),i;Qn?i=Qn(new Xn,n?yN(this):Ro):(i=n?this:zh(Ro),Po(i,TN,"Error")),t!==void 0&&Po(i,"message",SN(t)),qN(i,Hr,i.stack,1),arguments.length>2&&bN(i,arguments[2]);var o=[];return xN(r,ON,{that:o}),Po(i,"errors",o),i};Qn?Qn(Hr,Xn):gN(Hr,Xn,{name:!0});var Ro=Hr.prototype=zh(Xn.prototype,{constructor:_o(1,Hr),message:_o(1,""),name:_o(1,"AggregateError")});hN({global:!0,constructor:!0,arity:2},{AggregateError:Hr})});var Ao=a(()=>{"use strict";Yh()});var No=a((V6,Jh)=>{"use strict";var Pt=_(),EN=Pr(),CN=qe(),Zn=function(e){return EN.slice(0,e.length)===e};Jh.exports=function(){return Zn("Bun/")?"BUN":Zn("Cloudflare-Workers")?"CLOUDFLARE":Zn("Deno/")?"DENO":Zn("Node.js/")?"NODE":Pt.Bun&&typeof Bun.version=="string"?"BUN":Pt.Deno&&typeof Deno.version=="object"?"DENO":CN(Pt.process)==="process"?"NODE":Pt.window&&Pt.document?"BROWSER":"REST"}()});var _t=a((z6,Qh)=>{"use strict";var IN=No();Qh.exports=IN==="NODE"});var Mo=a((Y6,Zh)=>{"use strict";var kN=U(),PN=Nn(),_N=R(),RN=G(),Xh=_N("species");Zh.exports=function(e){var r=kN(e);RN&&r&&!r[Xh]&&PN(r,Xh,{configurable:!0,get:function(){return this}})}});var ei=a((J6,em)=>{"use strict";var AN=B(),NN=TypeError;em.exports=function(e,r){if(AN(r,e))return e;throw new NN("Incorrect invocation")}});var jo=a((Q6,rm)=>{"use strict";var MN=pt(),jN=He(),$N=TypeError;rm.exports=function(e){if(MN(e))return e;throw new $N(jN(e)+" is not a constructor")}});var $o=a((X6,nm)=>{"use strict";var tm=Q(),LN=jo(),FN=nr(),DN=R(),BN=DN("species");nm.exports=function(e,r){var t=tm(e).constructor,n;return t===void 0||FN(n=tm(t)[BN])?r:LN(n)}});var am=a((Z6,im)=>{"use strict";var GN=TypeError;im.exports=function(e,r){if(e<r)throw new GN("Not enough arguments");return e}});var Lo=a((e8,om)=>{"use strict";var UN=Pr();om.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(UN)});var Vo=a((r8,hm)=>{"use strict";var ue=_(),WN=kr(),HN=V(),um=N(),KN=W(),dm=P(),sm=Pa(),VN=ur(),cm=hn(),zN=am(),YN=Lo(),JN=_t(),Wo=ue.setImmediate,Ho=ue.clearImmediate,QN=ue.process,Fo=ue.Dispatch,XN=ue.Function,lm=ue.MessageChannel,ZN=ue.String,Do=0,Rt={},fm="onreadystatechange",At,mr,Bo,Go;dm(function(){At=ue.location});var Ko=function(e){if(KN(Rt,e)){var r=Rt[e];delete Rt[e],r()}},Uo=function(e){return function(){Ko(e)}},vm=function(e){Ko(e.data)},pm=function(e){ue.postMessage(ZN(e),At.protocol+"//"+At.host)};(!Wo||!Ho)&&(Wo=function(r){zN(arguments.length,1);var t=um(r)?r:XN(r),n=VN(arguments,1);return Rt[++Do]=function(){WN(t,void 0,n)},mr(Do),Do},Ho=function(r){delete Rt[r]},JN?mr=function(e){QN.nextTick(Uo(e))}:Fo&&Fo.now?mr=function(e){Fo.now(Uo(e))}:lm&&!YN?(Bo=new lm,Go=Bo.port2,Bo.port1.onmessage=vm,mr=HN(Go.postMessage,Go)):ue.addEventListener&&um(ue.postMessage)&&!ue.importScripts&&At&&At.protocol!=="file:"&&!dm(pm)?(mr=pm,ue.addEventListener("message",vm,!1)):fm in cm("script")?mr=function(e){sm.appendChild(cm("script"))[fm]=function(){sm.removeChild(this),Ko(e)}}:mr=function(e){setTimeout(Uo(e),0)});hm.exports={set:Wo,clear:Ho}});var gm=a((t8,ym)=>{"use strict";var mm=_(),e2=G(),r2=Object.getOwnPropertyDescriptor;ym.exports=function(e){if(!e2)return mm[e];var r=r2(mm,e);return r&&r.value}});var zo=a((n8,qm)=>{"use strict";var bm=function(){this.head=null,this.tail=null};bm.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};qm.exports=bm});var Sm=a((i8,xm)=>{"use strict";var t2=Pr();xm.exports=/ipad|iphone|ipod/i.test(t2)&&typeof Pebble<"u"});var Tm=a((a8,wm)=>{"use strict";var n2=Pr();wm.exports=/web0s(?!.*chrome)/i.test(n2)});var _m=a((o8,Pm)=>{"use strict";var Vr=_(),i2=gm(),Om=V(),Yo=Vo().set,a2=zo(),o2=Lo(),u2=Sm(),s2=Tm(),Jo=_t(),Em=Vr.MutationObserver||Vr.WebKitMutationObserver,Cm=Vr.document,Im=Vr.process,ri=Vr.Promise,Zo=i2("queueMicrotask"),Kr,Qo,Xo,ti,km;Zo||(Nt=new a2,Mt=function(){var e,r;for(Jo&&(e=Im.domain)&&e.exit();r=Nt.get();)try{r()}catch(t){throw Nt.head&&Kr(),t}e&&e.enter()},!o2&&!Jo&&!s2&&Em&&Cm?(Qo=!0,Xo=Cm.createTextNode(""),new Em(Mt).observe(Xo,{characterData:!0}),Kr=function(){Xo.data=Qo=!Qo}):!u2&&ri&&ri.resolve?(ti=ri.resolve(void 0),ti.constructor=ri,km=Om(ti.then,ti),Kr=function(){km(Mt)}):Jo?Kr=function(){Im.nextTick(Mt)}:(Yo=Om(Yo,Vr),Kr=function(){Yo(Mt)}),Zo=function(e){Nt.head||Kr(),Nt.add(e)});var Nt,Mt;Pm.exports=Zo});var Am=a((u8,Rm)=>{"use strict";Rm.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var yr=a((s8,Nm)=>{"use strict";Nm.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var gr=a((c8,Mm)=>{"use strict";var c2=_();Mm.exports=c2.Promise});var zr=a((l8,Fm)=>{"use strict";var l2=_(),jt=gr(),f2=N(),v2=oa(),p2=pa(),d2=R(),jm=No(),h2=X(),eu=_r(),$m=jt&&jt.prototype,m2=d2("species"),ru=!1,Lm=f2(l2.PromiseRejectionEvent),y2=v2("Promise",function(){var e=p2(jt),r=e!==String(jt);if(!r&&eu===66||h2&&!($m.catch&&$m.finally))return!0;if(!eu||eu<51||!/native code/.test(e)){var t=new jt(function(o){o(1)}),n=function(o){o(function(){},function(){})},i=t.constructor={};if(i[m2]=n,ru=t.then(function(){})instanceof n,!ru)return!0}return!r&&(jm==="BROWSER"||jm==="DENO")&&!Lm});Fm.exports={CONSTRUCTOR:y2,REJECTION_EVENT:Lm,SUBCLASSING:ru}});var we=a((f8,Bm)=>{"use strict";var Dm=F(),g2=TypeError,b2=function(e){var r,t;this.promise=new e(function(n,i){if(r!==void 0||t!==void 0)throw new g2("Bad Promise constructor");r=n,t=i}),this.resolve=Dm(r),this.reject=Dm(t)};Bm.exports.f=function(e){return new b2(e)}});var uy=a(()=>{"use strict";var q2=x(),x2=X(),oi=_t(),Qe=_(),S2=K(),Xr=D(),Gm=ke(),Um=gt(),w2=_e(),T2=Mo(),O2=F(),ai=N(),E2=$(),C2=ei(),I2=$o(),zm=Vo().set,ou=_m(),k2=Am(),P2=yr(),_2=zo(),Ym=Ve(),ui=gr(),uu=zr(),Jm=we(),si="Promise",Qm=uu.CONSTRUCTOR,R2=uu.REJECTION_EVENT,A2=uu.SUBCLASSING,tu=Ym.getterFor(si),N2=Ym.set,Yr=ui&&ui.prototype,br=ui,ni=Yr,Xm=Qe.TypeError,nu=Qe.document,su=Qe.process,iu=Jm.f,M2=iu,j2=!!(nu&&nu.createEvent&&Qe.dispatchEvent),Zm="unhandledrejection",$2="rejectionhandled",Wm=0,ey=1,L2=2,cu=1,ry=2,ii,Hm,ty,Km,ny=function(e){var r;return E2(e)&&ai(r=e.then)?r:!1},iy=function(e,r){var t=r.value,n=r.state===ey,i=n?e.ok:e.fail,o=e.resolve,u=e.reject,l=e.domain,c,s,f;try{i?(n||(r.rejection===ry&&D2(r),r.rejection=cu),i===!0?c=t:(l&&l.enter(),c=i(t),l&&(l.exit(),f=!0)),c===e.promise?u(new Xm("Promise-chain cycle")):(s=ny(c))?Xr(s,c,o,u):o(c)):u(t)}catch(v){l&&!f&&l.exit(),u(v)}},ay=function(e,r){e.notified||(e.notified=!0,ou(function(){for(var t=e.reactions,n;n=t.get();)iy(n,e);e.notified=!1,r&&!e.rejection&&F2(e)}))},oy=function(e,r,t){var n,i;j2?(n=nu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),Qe.dispatchEvent(n)):n={promise:r,reason:t},!R2&&(i=Qe["on"+e])?i(n):e===Zm&&k2("Unhandled promise rejection",t)},F2=function(e){Xr(zm,Qe,function(){var r=e.facade,t=e.value,n=Vm(e),i;if(n&&(i=P2(function(){oi?su.emit("unhandledRejection",t,r):oy(Zm,r,t)}),e.rejection=oi||Vm(e)?ry:cu,i.error))throw i.value})},Vm=function(e){return e.rejection!==cu&&!e.parent},D2=function(e){Xr(zm,Qe,function(){var r=e.facade;oi?su.emit("rejectionHandled",r):oy($2,r,e.value)})},Jr=function(e,r,t){return function(n){e(r,n,t)}},Qr=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=L2,ay(e,!0))},au=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new Xm("Promise can't be resolved itself");var n=ny(r);n?ou(function(){var i={done:!1};try{Xr(n,r,Jr(au,i,e),Jr(Qr,i,e))}catch(o){Qr(i,o,e)}}):(e.value=r,e.state=ey,ay(e,!1))}catch(i){Qr({done:!1},i,e)}}};if(Qm&&(br=function(r){C2(this,ni),O2(r),Xr(ii,this);var t=tu(this);try{r(Jr(au,t),Jr(Qr,t))}catch(n){Qr(t,n)}},ni=br.prototype,ii=function(r){N2(this,{type:si,done:!1,notified:!1,parent:!1,reactions:new _2,rejection:!1,state:Wm,value:null})},ii.prototype=Gm(ni,"then",function(r,t){var n=tu(this),i=iu(I2(this,br));return n.parent=!0,i.ok=ai(r)?r:!0,i.fail=ai(t)&&t,i.domain=oi?su.domain:void 0,n.state===Wm?n.reactions.add(i):ou(function(){iy(i,n)}),i.promise}),Hm=function(){var e=new ii,r=tu(e);this.promise=e,this.resolve=Jr(au,r),this.reject=Jr(Qr,r)},Jm.f=iu=function(e){return e===br||e===ty?new Hm(e):M2(e)},!x2&&ai(ui)&&Yr!==Object.prototype)){Km=Yr.then,A2||Gm(Yr,"then",function(r,t){var n=this;return new br(function(i,o){Xr(Km,n,i,o)}).then(r,t)},{unsafe:!0});try{delete Yr.constructor}catch{}Um&&Um(Yr,ni)}q2({global:!0,constructor:!0,wrap:!0,forced:Qm},{Promise:br});ty=S2.Promise;w2(br,si,!1,!0);T2(si)});var $t=a((d8,sy)=>{"use strict";var B2=gr(),G2=Wa(),U2=zr().CONSTRUCTOR;sy.exports=U2||!G2(function(e){B2.all(e).then(void 0,function(){})})});var cy=a(()=>{"use strict";var W2=x(),H2=D(),K2=F(),V2=we(),z2=yr(),Y2=ve(),J2=$t();W2({target:"Promise",stat:!0,forced:J2},{all:function(r){var t=this,n=V2.f(t),i=n.resolve,o=n.reject,u=z2(function(){var l=K2(t.resolve),c=[],s=0,f=1;Y2(r,function(v){var p=s++,d=!1;f++,H2(l,t,v).then(function(m){d||(d=!0,c[p]=m,--f||i(c))},o)}),--f||i(c)});return u.error&&o(u.value),n.promise}})});var fy=a(()=>{"use strict";var Q2=x(),X2=X(),Z2=zr().CONSTRUCTOR,fu=gr(),eM=U(),rM=N(),tM=ke(),ly=fu&&fu.prototype;Q2({target:"Promise",proto:!0,forced:Z2,real:!0},{catch:function(e){return this.then(void 0,e)}});!X2&&rM(fu)&&(lu=eM("Promise").prototype.catch,ly.catch!==lu&&tM(ly,"catch",lu,{unsafe:!0}));var lu});var vy=a(()=>{"use strict";var nM=x(),iM=D(),aM=F(),oM=we(),uM=yr(),sM=ve(),cM=$t();nM({target:"Promise",stat:!0,forced:cM},{race:function(r){var t=this,n=oM.f(t),i=n.reject,o=uM(function(){var u=aM(t.resolve);sM(r,function(l){iM(u,t,l).then(n.resolve,i)})});return o.error&&i(o.value),n.promise}})});var py=a(()=>{"use strict";var lM=x(),fM=we(),vM=zr().CONSTRUCTOR;lM({target:"Promise",stat:!0,forced:vM},{reject:function(r){var t=fM.f(this),n=t.reject;return n(r),t.promise}})});var vu=a((w8,dy)=>{"use strict";var pM=Q(),dM=$(),hM=we();dy.exports=function(e,r){if(pM(e),dM(r)&&r.constructor===e)return r;var t=hM.f(e),n=t.resolve;return n(r),t.promise}});var yy=a(()=>{"use strict";var mM=x(),yM=U(),hy=X(),gM=gr(),my=zr().CONSTRUCTOR,bM=vu(),qM=yM("Promise"),xM=hy&&!my;mM({target:"Promise",stat:!0,forced:hy||my},{resolve:function(r){return bM(xM&&this===qM?gM:this,r)}})});var gy=a(()=>{"use strict";uy();cy();fy();vy();py();yy()});var pu=a(()=>{"use strict";var SM=x(),wM=D(),TM=F(),OM=we(),EM=yr(),CM=ve(),IM=$t();SM({target:"Promise",stat:!0,forced:IM},{allSettled:function(r){var t=this,n=OM.f(t),i=n.resolve,o=n.reject,u=EM(function(){var l=TM(t.resolve),c=[],s=0,f=1;CM(r,function(v){var p=s++,d=!1;f++,wM(l,t,v).then(function(m){d||(d=!0,c[p]={status:"fulfilled",value:m},--f||i(c))},function(m){d||(d=!0,c[p]={status:"rejected",reason:m},--f||i(c))})}),--f||i(c)});return u.error&&o(u.value),n.promise}})});var du=a(()=>{"use strict";var kM=x(),PM=D(),_M=F(),RM=U(),AM=we(),NM=yr(),MM=ve(),jM=$t(),by="No one promise resolved";kM({target:"Promise",stat:!0,forced:jM},{any:function(r){var t=this,n=RM("AggregateError"),i=AM.f(t),o=i.resolve,u=i.reject,l=NM(function(){var c=_M(t.resolve),s=[],f=0,v=1,p=!1;MM(r,function(d){var m=f++,h=!1;v++,PM(c,t,d).then(function(y){h||p||(p=!0,o(y))},function(y){h||p||(h=!0,s[m]=y,--v||u(new n(s,by)))})}),--v||u(new n(s,by))});return l.error&&u(l.value),i.promise}})});var mu=a(()=>{"use strict";var $M=x(),LM=_(),FM=kr(),DM=ur(),BM=we(),GM=F(),xy=yr(),hu=LM.Promise,qy=!1,UM=!hu||!hu.try||xy(function(){hu.try(function(e){qy=e===8},8)}).error||!qy;$M({target:"Promise",stat:!0,forced:UM},{try:function(e){var r=arguments.length>1?DM(arguments,1):[],t=BM.f(this),n=xy(function(){return FM(GM(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var yu=a(()=>{"use strict";var WM=x(),HM=we();WM({target:"Promise",stat:!0},{withResolvers:function(){var r=HM.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var Oy=a(()=>{"use strict";var KM=x(),VM=X(),ci=gr(),zM=P(),wy=U(),Ty=N(),YM=$o(),Sy=vu(),JM=ke(),bu=ci&&ci.prototype,QM=!!ci&&zM(function(){bu.finally.call({then:function(){}},function(){})});KM({target:"Promise",proto:!0,real:!0,forced:QM},{finally:function(e){var r=YM(this,wy("Promise")),t=Ty(e);return this.then(t?function(n){return Sy(r,e()).then(function(){return n})}:e,t?function(n){return Sy(r,e()).then(function(){throw n})}:e)}});!VM&&Ty(ci)&&(gu=wy("Promise").prototype.finally,bu.finally!==gu&&JM(bu,"finally",gu,{unsafe:!0}));var gu});var Cy=a((L8,Ey)=>{"use strict";Ao();dr();wt();gy();pu();du();mu();yu();Oy();lr();var XM=K();Ey.exports=XM.Promise});var ky=a((F8,Iy)=>{"use strict";var ZM=Cy();hr();Iy.exports=ZM});var Py=a(()=>{"use strict";mu()});var _y=a(()=>{"use strict";yu()});var Ay=a((W8,Ry)=>{"use strict";var ej=ky();Py();_y();Ry.exports=ej});var Ny=a(()=>{"use strict";Ao()});var My=a(()=>{"use strict";pu()});var jy=a(()=>{"use strict";du()});var Ly=a((Q8,$y)=>{"use strict";var rj=Ay();Ny();My();jy();$y.exports=rj});var Zr=a((X8,Fy)=>{"use strict";Fy.exports=Ly()});var Gy=a((nK,By)=>{"use strict";go();var tj=Br();By.exports=tj.f("asyncIterator")});var Wy=a((iK,Uy)=>{"use strict";var nj=Gy();Uy.exports=nj});var Ky=a((aK,Hy)=>{"use strict";var ij=Wy();Hy.exports=ij});var zy=a((oK,Vy)=>{"use strict";var aj=Ky();Vy.exports=aj});var li=a((uK,Yy)=>{"use strict";Yy.exports=zy()});var Zy=a(()=>{"use strict";var oj=x(),uj=P(),sj=re(),Xy=yt(),cj=Na(),lj=uj(function(){Xy(1)});oj({target:"Object",stat:!0,forced:lj,sham:!cj},{getPrototypeOf:function(r){return Xy(sj(r))}})});var rg=a((vK,eg)=>{"use strict";Zy();var fj=K();eg.exports=fj.Object.getPrototypeOf});var ng=a((pK,tg)=>{"use strict";var vj=rg();tg.exports=vj});var ag=a((dK,ig)=>{"use strict";var pj=ng();ig.exports=pj});var ug=a((hK,og)=>{"use strict";var dj=ag();og.exports=dj});var fi=a((mK,sg)=>{"use strict";sg.exports=ug()});var lg=a(()=>{"use strict";var hj=x(),mj=A(),yj=Ie(),gj=mj([].reverse),cg=[1,2];hj({target:"Array",proto:!0,forced:String(cg)===String(cg.reverse())},{reverse:function(){return yj(this)&&(this.length=this.length),gj(this)}})});var vg=a((bK,fg)=>{"use strict";lg();var bj=oe();fg.exports=bj("Array","reverse")});var dg=a((qK,pg)=>{"use strict";var qj=B(),xj=vg(),Su=Array.prototype;pg.exports=function(e){var r=e.reverse;return e===Su||qj(Su,e)&&r===Su.reverse?xj:r}});var mg=a((xK,hg)=>{"use strict";var Sj=dg();hg.exports=Sj});var gg=a((SK,yg)=>{"use strict";var wj=mg();yg.exports=wj});var qg=a((wK,bg)=>{"use strict";var Tj=gg();bg.exports=Tj});var Sg=a((TK,xg)=>{"use strict";xg.exports=qg()});var wu=a((OK,Dt)=>{function Oj(e,r){this.v=e,this.k=r}Dt.exports=Oj,Dt.exports.__esModule=!0,Dt.exports.default=Dt.exports});var wg=a(()=>{"use strict";var Ej=x(),Cj=G(),Ij=ze();Ej({target:"Object",stat:!0,sham:!Cj},{create:Ij})});var Og=a((IK,Tg)=>{"use strict";wg();var kj=K(),Pj=kj.Object;Tg.exports=function(r,t){return Pj.create(r,t)}});var Cg=a((kK,Eg)=>{"use strict";var _j=Og();Eg.exports=_j});var kg=a((PK,Ig)=>{"use strict";var Rj=Cg();Ig.exports=Rj});var _g=a((_K,Pg)=>{"use strict";var Aj=kg();Pg.exports=Aj});var vi=a((RK,Rg)=>{"use strict";Rg.exports=_g()});var Ou=a((AK,jg)=>{"use strict";var Ng=A(),Nj=F(),Mj=$(),jj=W(),Ag=ur(),$j=Ir(),Mg=Function,Lj=Ng([].concat),Fj=Ng([].join),Tu={},Dj=function(e,r,t){if(!jj(Tu,r)){for(var n=[],i=0;i<r;i++)n[i]="a["+i+"]";Tu[r]=Mg("C,a","return new C("+Fj(n,",")+")")}return Tu[r](e,t)};jg.exports=$j?Mg.bind:function(r){var t=Nj(this),n=t.prototype,i=Ag(arguments,1),o=function(){var l=Lj(i,Ag(arguments));return this instanceof o?Dj(t,l.length,l):t.apply(r,l)};return Mj(n)&&(o.prototype=n),o}});var Lg=a(()=>{"use strict";var Bj=x(),$g=Ou();Bj({target:"Function",proto:!0,forced:Function.bind!==$g},{bind:$g})});var Dg=a((jK,Fg)=>{"use strict";Lg();var Gj=oe();Fg.exports=Gj("Function","bind")});var Gg=a(($K,Bg)=>{"use strict";var Uj=B(),Wj=Dg(),Eu=Function.prototype;Bg.exports=function(e){var r=e.bind;return e===Eu||Uj(Eu,e)&&r===Eu.bind?Wj:r}});var Wg=a((LK,Ug)=>{"use strict";var Hj=Gg();Ug.exports=Hj});var Kg=a((FK,Hg)=>{"use strict";var Kj=Wg();Hg.exports=Kj});var zg=a((DK,Vg)=>{"use strict";var Vj=Kg();Vg.exports=Vj});var Bt=a((BK,Yg)=>{"use strict";Yg.exports=zg()});var Jg=a(()=>{"use strict";var zj=x(),Yj=gt();zj({target:"Object",stat:!0},{setPrototypeOf:Yj})});var Xg=a((WK,Qg)=>{"use strict";Jg();var Jj=K();Qg.exports=Jj.Object.setPrototypeOf});var eb=a((HK,Zg)=>{"use strict";var Qj=Xg();Zg.exports=Qj});var tb=a((KK,rb)=>{"use strict";var Xj=eb();rb.exports=Xj});var ib=a((VK,nb)=>{"use strict";var Zj=tb();nb.exports=Zj});var pi=a((zK,ab)=>{"use strict";ab.exports=ib()});var ub=a(()=>{"use strict";var e$=x(),r$=G(),ob=te().f;e$({target:"Object",stat:!0,forced:Object.defineProperty!==ob,sham:!r$},{defineProperty:ob})});var lb=a((QK,cb)=>{"use strict";ub();var t$=K(),sb=t$.Object,n$=cb.exports=function(r,t,n){return sb.defineProperty(r,t,n)};sb.defineProperty.sham&&(n$.sham=!0)});var vb=a((XK,fb)=>{"use strict";var i$=lb();fb.exports=i$});var db=a((ZK,pb)=>{"use strict";var a$=vb();pb.exports=a$});var mb=a((eV,hb)=>{"use strict";var o$=db();hb.exports=o$});var Gt=a((rV,yb)=>{"use strict";yb.exports=mb()});var Cu=a((tV,Ae)=>{var u$=Gt();function di(e,r,t,n){var i=u$;try{i({},"",{})}catch{i=0}Ae.exports=di=function(u,l,c,s){function f(v,p){di(u,v,function(d){return this._invoke(v,p,d)})}l?i?i(u,l,{value:c,enumerable:!s,configurable:!s,writable:!s}):u[l]=c:(f("next",0),f("throw",1),f("return",2))},Ae.exports.__esModule=!0,Ae.exports.default=Ae.exports,di(e,r,t,n)}Ae.exports=di,Ae.exports.__esModule=!0,Ae.exports.default=Ae.exports});var ku=a((nV,Ne)=>{var gb=Se(),Iu=vi(),s$=Bt(),c$=fi(),bb=pi(),Oe=Cu();function qb(){var e,r,t=typeof gb=="function"?gb:{},n=t.iterator||"@@iterator",i=t.toStringTag||"@@toStringTag";function o(d,m,h,y){var q=m&&m.prototype instanceof l?m:l,b=Iu(q.prototype);return Oe(b,"_invoke",function(I,C,S){var T,w,E,j=0,ge=S||[],k=!1,ee={p:0,n:0,v:e,a:be,f:s$(be).call(be,e,4),d:function(L,pe){return T=L,w=0,E=e,ee.n=pe,u}};function be(J,L){for(w=J,E=L,r=0;!k&&j&&!pe&&r<ge.length;r++){var pe,O=ge[r],Er=ee.p,Ue=O[2];J>3?(pe=Ue===L)&&(E=O[(w=O[4])?5:(w=3,3)],O[4]=O[5]=e):O[0]<=Er&&((pe=J<2&&Er<O[1])?(w=0,ee.v=L,ee.n=O[1]):Er<Ue&&(pe=J<3||O[0]>L||L>Ue)&&(O[4]=J,O[5]=L,ee.n=Ue,w=0))}if(pe||J>1)return u;throw k=!0,L}return function(J,L,pe){if(j>1)throw TypeError("Generator is already running");for(k&&L===1&&be(L,pe),w=L,E=pe;(r=w<2?e:E)||!k;){T||(w?w<3?(w>1&&(ee.n=-1),be(w,E)):ee.n=E:ee.v=E);try{if(j=2,T){if(w||(J="next"),r=T[J]){if(!(r=r.call(T,E)))throw TypeError("iterator result is not an object");if(!r.done)return r;E=r.value,w<2&&(w=0)}else w===1&&(r=T.return)&&r.call(T),w<2&&(E=TypeError("The iterator does not provide a '"+J+"' method"),w=1);T=e}else if((r=(k=ee.n<0)?E:I.call(C,ee))!==u)break}catch(O){T=e,w=1,E=O}finally{j=1}}return{value:r,done:k}}}(d,h,y),!0),b}var u={};function l(){}function c(){}function s(){}r=c$;var f=[][n]?r(r([][n]())):(Oe(r={},n,function(){return this}),r),v=s.prototype=l.prototype=Iu(f);function p(d){return bb?bb(d,s):(d.__proto__=s,Oe(d,i,"GeneratorFunction")),d.prototype=Iu(v),d}return c.prototype=s,Oe(v,"constructor",s),Oe(s,"constructor",c),c.displayName="GeneratorFunction",Oe(s,i,"GeneratorFunction"),Oe(v),Oe(v,i,"Generator"),Oe(v,n,function(){return this}),Oe(v,"toString",function(){return"[object Generator]"}),(Ne.exports=qb=function(){return{w:o,m:p}},Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports)()}Ne.exports=qb,Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports});var Ru=a((iV,Ut)=>{var l$=Se(),f$=li(),v$=wu(),Pu=Cu();function _u(e,r){function t(i,o,u,l){try{var c=e[i](o),s=c.value;return s instanceof v$?r.resolve(s.v).then(function(f){t("next",f,u,l)},function(f){t("throw",f,u,l)}):r.resolve(s).then(function(f){c.value=f,u(c)},function(f){return t("throw",f,u,l)})}catch(f){l(f)}}var n;this.next||(Pu(_u.prototype),Pu(_u.prototype,typeof l$=="function"&&f$||"@asyncIterator",function(){return this})),Pu(this,"_invoke",function(i,o,u){function l(){return new r(function(c,s){t(i,u,c,s)})}return n=n?n.then(l,l):l()},!0)}Ut.exports=_u,Ut.exports.__esModule=!0,Ut.exports.default=Ut.exports});var Au=a((aV,Wt)=>{var p$=Zr(),d$=ku(),h$=Ru();function m$(e,r,t,n,i){return new h$(d$().w(e,r,t,n),i||p$)}Wt.exports=m$,Wt.exports.__esModule=!0,Wt.exports.default=Wt.exports});var xb=a((oV,Ht)=>{var y$=Au();function g$(e,r,t,n,i){var o=y$(e,r,t,n,i);return o.next().then(function(u){return u.done?u.value:o.next()})}Ht.exports=g$,Ht.exports.__esModule=!0,Ht.exports.default=Ht.exports});var Tb=a((uV,wb)=>{"use strict";var Sb=He(),b$=TypeError;wb.exports=function(e,r){if(!delete e[r])throw new b$("Cannot delete property "+Sb(r)+" of "+Sb(e))}});var Ob=a(()=>{"use strict";var q$=x(),x$=re(),S$=le(),w$=Lr(),T$=Tb(),O$=St(),E$=[].unshift(0)!==1,C$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},I$=E$||!C$();q$({target:"Array",proto:!0,arity:1,forced:I$},{unshift:function(r){var t=x$(this),n=S$(t),i=arguments.length;if(i){O$(n+i);for(var o=n;o--;){var u=o+i;o in t?t[u]=t[o]:T$(t,u)}for(var l=0;l<i;l++)t[l]=arguments[l]}return w$(t,n+i)}})});var Cb=a((lV,Eb)=>{"use strict";Ob();var k$=oe();Eb.exports=k$("Array","unshift")});var kb=a((fV,Ib)=>{"use strict";var P$=B(),_$=Cb(),Nu=Array.prototype;Ib.exports=function(e){var r=e.unshift;return e===Nu||P$(Nu,e)&&r===Nu.unshift?_$:r}});var _b=a((vV,Pb)=>{"use strict";var R$=kb();Pb.exports=R$});var Ab=a((pV,Rb)=>{"use strict";var A$=_b();Rb.exports=A$});var Mb=a((dV,Nb)=>{"use strict";var N$=Ab();Nb.exports=N$});var $b=a((hV,jb)=>{"use strict";jb.exports=Mb()});var Lb=a((mV,Kt)=>{var M$=$b();function j$(e){var r=Object(e),t=[];for(var n in r)M$(t).call(t,n);return function i(){for(;t.length;)if((n=t.pop())in r)return i.value=n,i.done=!1,i;return i.done=!0,i}}Kt.exports=j$,Kt.exports.__esModule=!0,Kt.exports.default=Kt.exports});var Db=a((yV,Fb)=>{"use strict";dr();wt();lr();qo();var $$=Br();Fb.exports=$$.f("iterator")});var Gb=a((gV,Bb)=>{"use strict";var L$=Db();hr();Bb.exports=L$});var Wb=a((bV,Ub)=>{"use strict";var F$=Gb();Ub.exports=F$});var Kb=a((qV,Hb)=>{"use strict";var D$=Wb();Hb.exports=D$});var Vt=a((xV,Vb)=>{"use strict";Vb.exports=Kb()});var zb=a((SV,Me)=>{var hi=Se(),B$=Vt();function Mu(e){"@babel/helpers - typeof";return Me.exports=Mu=typeof hi=="function"&&typeof B$=="symbol"?function(r){return typeof r}:function(r){return r&&typeof hi=="function"&&r.constructor===hi&&r!==hi.prototype?"symbol":typeof r},Me.exports.__esModule=!0,Me.exports.default=Me.exports,Mu(e)}Me.exports=Mu,Me.exports.__esModule=!0,Me.exports.default=Me.exports});var Yb=a((wV,zt)=>{var G$=zb().default,U$=Se(),W$=Vt();function H$(e){if(e!=null){var r=e[typeof U$=="function"&&W$||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(G$(e)+" is not iterable")}zt.exports=H$,zt.exports.__esModule=!0,zt.exports.default=zt.exports});var Xb=a((TV,je)=>{var Jb=fi(),K$=Sg(),V$=wu(),z$=ku(),Y$=xb(),J$=Au(),Q$=Ru(),X$=Lb(),Qb=Yb();function ju(){"use strict";var e=z$(),r=e.m(ju),t=(Jb?Jb(r):r.__proto__).constructor;function n(u){var l=typeof u=="function"&&u.constructor;return!!l&&(l===t||(l.displayName||l.name)==="GeneratorFunction")}var i={throw:1,return:2,break:3,continue:3};function o(u){var l,c;return function(s){l||(l={stop:function(){return c(s.a,2)},catch:function(){return s.v},abrupt:function(v,p){return c(s.a,i[v],p)},delegateYield:function(v,p,d){return l.resultName=p,c(s.d,Qb(v),d)},finish:function(v){return c(s.f,v)}},c=function(v,p,d){s.p=l.prev,s.n=l.next;try{return v(p,d)}finally{l.next=s.n}}),l.resultName&&(l[l.resultName]=s.v,l.resultName=void 0),l.sent=s.v,l.next=s.n;try{return u.call(this,l)}finally{s.p=l.prev,s.n=l.next}}}return(je.exports=ju=function(){return{wrap:function(c,s,f,v){return e.w(o(c),s,f,v&&K$(v).call(v))},isGeneratorFunction:n,mark:e.m,awrap:function(c,s){return new V$(c,s)},AsyncIterator:Q$,async:function(c,s,f,v,p){return(n(s)?J$:Y$)(o(c),s,f,v,p)},keys:X$,values:Qb}},je.exports.__esModule=!0,je.exports.default=je.exports)()}je.exports=ju,je.exports.__esModule=!0,je.exports.default=je.exports});var se=a((OV,Zb)=>{var mi=Xb()();Zb.exports=mi;try{regeneratorRuntime=mi}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=mi:Function("r","regeneratorRuntime = r")(mi)}});var $u=a((gi,rq)=>{"use strict";Object.defineProperty(gi,"__esModule",{value:!0});var yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},eq=function(){function e(r,t){var n=[],i=!0,o=!1,u=void 0;try{for(var l=r[Symbol.iterator](),c;!(i=(c=l.next()).done)&&(n.push(c.value),!(t&&n.length===t));i=!0);}catch(s){o=!0,u=s}finally{try{!i&&l.return&&l.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();gi.default=Z$;function Z$(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(i){return i.type==="tag"||i.type==="script"||i.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var i=this.attribs,o=Object.keys(i),u=o.reduce(function(l,c,s){return l[s]={name:c,value:i[c]},l},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var i=[];return Ze(this.childTags,function(o){(o.name===n||n==="*")&&i.push(o)}),i}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var i=n.trim().replace(/\s+/g," ").split(" "),o=[];return Ze([this],function(u){var l=u.attribs.class;l&&i.every(function(c){return l.indexOf(c)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var i=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=eL(n),u=o.shift(),l=o.length;return u(this).filter(function(c){for(var s=0;s<l;){if(c=o[s](c,i),!c)return!1;s+=1}return!0})}),t.contains||(t.contains=function(n){var i=!1;return Ze([this],function(o,u){o===n&&(i=!0,u())}),i}),!0}function eL(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,i=r.split(":"),o=eq(i,2),u=o[0],l=o[1],c=null,s=null;if(function(){switch(!0){case/>/.test(u):s=function(S){return function(T){return T(S.parent)&&S.parent}};break;case/^\./.test(u):var m=u.substr(1).split(".");c=function(S){var T=S.attribs.class;return T&&m.every(function(w){return T.indexOf(w)>-1})},s=function(S,T){return n?S.getElementsByClassName(m.join(" ")):typeof S=="function"?S(c):Yt(S,T,c)};break;case/^\[/.test(u):var h=u.replace(/\[|\]|"/g,"").split("="),y=eq(h,2),q=y[0],b=y[1];c=function(S){var T=Object.keys(S.attribs).indexOf(q)>-1;return!!(T&&(!b||S.attribs[q]===b))},s=function(S,T){if(n){var w=function(){var E=[];return Ze([S],function(j){c(j)&&E.push(j)}),{v:E}}();if((typeof w>"u"?"undefined":yi(w))==="object")return w.v}return typeof S=="function"?S(c):Yt(S,T,c)};break;case/^#/.test(u):var I=u.substr(1);c=function(S){return S.attribs.id===I},s=function(S,T){if(n){var w=function(){var E=[];return Ze([S],function(j,ge){c(j)&&(E.push(j),ge())}),{v:E}}();if((typeof w>"u"?"undefined":yi(w))==="object")return w.v}return typeof S=="function"?S(c):Yt(S,T,c)};break;case/\*/.test(u):c=function(S){return!0},s=function(S,T){if(n){var w=function(){var E=[];return Ze([S],function(j){return E.push(j)}),{v:E}}();if((typeof w>"u"?"undefined":yi(w))==="object")return w.v}return typeof S=="function"?S(c):Yt(S,T,c)};break;default:c=function(S){return S.name===u},s=function(S,T){if(n){var w=function(){var E=[];return Ze([S],function(j){c(j)&&E.push(j)}),{v:E}}();if((typeof w>"u"?"undefined":yi(w))==="object")return w.v}return typeof S=="function"?S(c):Yt(S,T,c)}}}(),!l)return s;var f=l.match(/-(child|type)\((\d+)\)$/),v=f[1],p=parseInt(f[2],10)-1,d=function(h){if(h){var y=h.parent.childTags;v==="type"&&(y=y.filter(c));var q=y.findIndex(function(b){return b===h});if(q===p)return!0}return!1};return function(h){var y=s(h);return n?y.reduce(function(q,b){return d(b)&&q.push(b),q},[]):d(y)&&y}})}function Ze(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&Ze(t.childTags,r)})}function Yt(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}rq.exports=gi.default});var qi=a(bi=>{"use strict";Object.defineProperty(bi,"__esModule",{value:!0});bi.convertNodeList=rL;bi.escapeValue=tL;function rL(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function tL(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var fq=a((xi,lq)=>{"use strict";Object.defineProperty(xi,"__esModule",{value:!0});xi.default=nL;var aq=qi(),tq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function nL(e,r){var t=r.root,n=t===void 0?document:t,i=r.skip,o=i===void 0?null:i,u=r.priority,l=u===void 0?["id","class","href","src"]:u,c=r.ignore,s=c===void 0?{}:c,f=[],v=e,p=f.length,d=!1,m=o&&(Array.isArray(o)?o:[o]).map(function(q){return typeof q!="function"?function(b){return b===q}:q}),h=function(b){return o&&m.some(function(I){return I(b)})};for(Object.keys(s).forEach(function(q){q==="class"&&(d=!0);var b=s[q];typeof b!="function"&&(typeof b=="number"&&(b=b.toString()),typeof b=="string"&&(b=new RegExp((0,aq.escapeValue)(b).replace(/\\/g,"\\\\"))),typeof b=="boolean"&&(b=b?/(?:)/:/.^/),s[q]=function(I,C){return b.test(C)})}),d&&function(){var q=s.attribute;s.attribute=function(b,I,C){return s.class(I)||q&&q(b,I,C)}}();v!==n;){if(h(v)!==!0){if(nq(l,v,s,f,n)||iq(v,s,f,n))break;nq(l,v,s,f),f.length===p&&iq(v,s,f),f.length===p&&iL(l,v,s,f)}v=v.parentNode,p=f.length}if(v===n){var y=sq(l,v,s);f.unshift(y)}return f.join(" ")}function nq(e,r,t,n){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=oq(e,r,t);if(o){var u=i.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function oq(e,r,t){for(var n=r.attributes,i=Object.keys(n).sort(function(h,y){var q=e.indexOf(n[h].name),b=e.indexOf(n[y].name);return b===-1?q===-1?0:-1:q-b}),o=0,u=i.length;o<u;o++){var l=i[o],c=n[l],s=c.name,f=(0,aq.escapeValue)(c.value),v=t[s]||t.attribute,p=tq[s]||tq.attribute;if(!cq(v,s,f,p)){var d="["+s+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(s==="id"&&(d="#"+f),s==="class")){var m=f.trim().replace(/\s+/g,".");d="."+m}return d}}return null}function iq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,i=uq(e,r);if(i){var o=n.getElementsByTagName(i);if(o.length===1)return t.unshift(i),!0}return!1}function uq(e,r){var t=e.tagName.toLowerCase();return cq(r.tag,null,t)?null:t}function iL(e,r,t,n){for(var i=r.parentNode,o=i.childTags||i.children,u=0,l=o.length;u<l;u++){var c=o[u];if(c===r){var s=sq(e,c,t);if(!s)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,c,t,s);var f="> "+s+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function sq(e,r,t){var n=oq(e,r,t);return n||(n=uq(r,t)),n}function cq(e,r,t,n){if(!t)return!0;var i=e||n;return i?i(r,t,n):!1}lq.exports=xi.default});var Lu=a((wi,vq)=>{"use strict";Object.defineProperty(wi,"__esModule",{value:!0});wi.default=cL;var aL=$u(),oL=sL(aL),uL=qi();function sL(e){return e&&e.__esModule?e:{default:e}}function cL(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,uL.convertNodeList)(r):[r]),!r.length||r.some(function(v){return v.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,oL.default)(r[0],t),i=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(i.length<2)return Si("",e,"",r);for(var o=[i.pop()];i.length>1;){var u=i.pop(),l=i.join(" "),c=o.join(" "),s=l+" "+c,f=document.querySelectorAll(s);f.length!==r.length&&o.unshift(Si(l,u,c,r))}return o.unshift(i[0]),i=o,i[0]=Si("",i[0],i.slice(1).join(" "),r),i[i.length-1]=Si(i.slice(0,-1).join(" "),i[i.length-1],"",r),n&&delete global.document,i.join(" ").replace(/>/g,"> ").trim()}function Si(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var i=r.replace(/=.*$/,"]"),o=""+e+i+t,u=document.querySelectorAll(o);if(et(u,n))r=i;else for(var l=document.querySelectorAll(""+e+i),c=function(){var C=l[s];if(n.some(function(T){return C.contains(T)})){var S=C.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),et(u,n)&&(r=S),"break"}},s=0,f=l.length;s<f;s++){var o,u,v=c();if(v==="break")break}}if(/>/.test(r)){var p=r.replace(/>/,""),o=""+e+p+t,u=document.querySelectorAll(o);et(u,n)&&(r=p)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);et(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var m=r.trim().split(".").slice(1).map(function(I){return"."+I}).sort(function(I,C){return I.length-C.length});m.length;){var h=r.replace(m.shift(),"").trim(),o=(""+e+h+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);et(u,n)&&(r=h)}if(m=r&&r.match(/\./g),m&&m.length>2)for(var y=document.querySelectorAll(""+e+r),q=function(){var C=y[s];if(n.some(function(T){return C.contains(T)})){var S=C.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),et(u,n)&&(r=S),"break"}},s=0,f=y.length;s<f;s++){var o,u,b=q();if(b==="break")break}}return r}function et(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var i=0;i<t;i++)if(e[i]===n)return!0;return!1})}vq.exports=wi.default});var Fu=a(Ti=>{"use strict";Object.defineProperty(Ti,"__esModule",{value:!0});Ti.getCommonAncestor=lL;Ti.getCommonProperties=fL;function lL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,i=[];e.forEach(function(v,p){for(var d=[];v!==n;)v=v.parentNode,d.unshift(v);i[p]=d}),i.sort(function(v,p){return v.length-p.length});for(var o=i.shift(),u=null,l=function(){var p=o[c],d=i.some(function(m){return!m.some(function(h){return h===p})});if(d)return"break";u=p},c=0,s=o.length;c<s;c++){var f=l();if(f==="break")break}return u}function fL(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,i=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(c){return u.some(function(s){return s===c})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(i!==void 0&&function(){var c=t.attributes,s=Object.keys(c).reduce(function(p,d){var m=c[d],h=m.name;return m&&h!=="class"&&(p[h]=m.value),p},{}),f=Object.keys(s),v=Object.keys(i);f.length?v.length?(i=v.reduce(function(p,d){var m=i[d];return m===s[d]&&(p[d]=m),p},{}),Object.keys(i).length?r.attributes=i:delete r.attributes):r.attributes=s:delete r.attributes}(),o!==void 0){var l=t.tagName.toLowerCase();o?l!==o&&delete r.tag:r.tag=l}}),r}});var gq=a(Jt=>{"use strict";Object.defineProperty(Jt,"__esModule",{value:!0});var vL=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Jt.getSingleSelector=Bu;Jt.getMultiSelector=yq;Jt.default=gL;var pL=$u(),dq=Du(pL),dL=fq(),hL=Du(dL),mL=Lu(),hq=Du(mL),pq=qi(),mq=Fu();function Du(e){return e&&e.__esModule?e:{default:e}}function Bu(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":vL(e))+'")');var t=(0,dq.default)(e,r),n=(0,hL.default)(e,r),i=(0,hq.default)(n,e,r);return t&&delete global.document,i}function yq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,pq.convertNodeList)(e)),e.some(function(s){return s.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,dq.default)(e[0],r),n=(0,mq.getCommonAncestor)(e,r),i=Bu(n,r),o=yL(e),u=o[0],l=(0,hq.default)(i+" "+u,e,r),c=(0,pq.convertNodeList)(document.querySelectorAll(l));return e.every(function(s){return c.some(function(f){return f===s})})?(t&&delete global.document,l):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function yL(e){var r=(0,mq.getCommonProperties)(e),t=r.classes,n=r.attributes,i=r.tag,o=[];if(i&&o.push(i),t){var u=t.map(function(c){return"."+c}).join("");o.push(u)}if(n){var l=Object.keys(n).reduce(function(c,s){return c.push("["+s+'="'+n[s]+'"]'),c},[]).join("");o.push(l)}return o.length,[o.join("")]}function gL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?yq(e,r):Bu(e,r)}});var xq=a(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.default=ie.common=ie.optimize=ie.getMultiSelector=ie.getSingleSelector=ie.select=void 0;var Gu=gq();Object.defineProperty(ie,"getSingleSelector",{enumerable:!0,get:function(){return Gu.getSingleSelector}});Object.defineProperty(ie,"getMultiSelector",{enumerable:!0,get:function(){return Gu.getMultiSelector}});var bq=qq(Gu),bL=Lu(),qL=qq(bL),xL=Fu(),SL=wL(xL);function wL(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function qq(e){return e&&e.__esModule?e:{default:e}}ie.select=bq.default;ie.optimize=qL.default;ie.common=SL;ie.default=bq.default});var Sq=a(()=>{"use strict";var AL=x(),NL=Ie();AL({target:"Array",stat:!0},{isArray:NL})});var Tq=a((GV,wq)=>{"use strict";Sq();var ML=K();wq.exports=ML.Array.isArray});var Eq=a((UV,Oq)=>{"use strict";var jL=Tq();Oq.exports=jL});var Iq=a((WV,Cq)=>{"use strict";var $L=Eq();Cq.exports=$L});var Pq=a((HV,kq)=>{"use strict";var LL=Iq();kq.exports=LL});var Rq=a((KV,_q)=>{"use strict";_q.exports=Pq()});var Mq=a(()=>{"use strict";var FL=x(),DL=re(),BL=le(),GL=Lr(),UL=St(),WL=P(),HL=WL(function(){return[].push.call({length:4294967296},1)!==4294967297}),KL=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},VL=HL||!KL();FL({target:"Array",proto:!0,arity:1,forced:VL},{push:function(r){var t=DL(this),n=BL(t),i=arguments.length;UL(n+i);for(var o=0;o<i;o++)t[n]=arguments[o],n++;return GL(t,n),n}})});var $q=a((JV,jq)=>{"use strict";Mq();var zL=oe();jq.exports=zL("Array","push")});var Fq=a((QV,Lq)=>{"use strict";var YL=B(),JL=$q(),Uu=Array.prototype;Lq.exports=function(e){var r=e.push;return e===Uu||YL(Uu,e)&&r===Uu.push?JL:r}});var Bq=a((XV,Dq)=>{"use strict";var QL=Fq();Dq.exports=QL});var Uq=a((ZV,Gq)=>{"use strict";var XL=Bq();Gq.exports=XL});var Hq=a((ez,Wq)=>{"use strict";var ZL=Uq();Wq.exports=ZL});var Wu=a((rz,Kq)=>{"use strict";Kq.exports=Hq()});var nx=a(()=>{"use strict";var eF=x(),rF=Ot().map,tF=dt(),nF=tF("map");eF({target:"Array",proto:!0,forced:!nF},{map:function(r){return rF(this,r,arguments.length>1?arguments[1]:void 0)}})});var ax=a((kz,ix)=>{"use strict";nx();var iF=oe();ix.exports=iF("Array","map")});var ux=a((Pz,ox)=>{"use strict";var aF=B(),oF=ax(),Ku=Array.prototype;ox.exports=function(e){var r=e.map;return e===Ku||aF(Ku,e)&&r===Ku.map?oF:r}});var cx=a((_z,sx)=>{"use strict";var uF=ux();sx.exports=uF});var fx=a((Rz,lx)=>{"use strict";var sF=cx();lx.exports=sF});var px=a((Az,vx)=>{"use strict";var cF=fx();vx.exports=cF});var hx=a((Nz,dx)=>{"use strict";dx.exports=px()});var yx=a((Mz,mx)=>{mx.exports=hx()});var bx=a((jz,gx)=>{gx.exports=Zr()});var Tx=a(($z,wx)=>{"use strict";var lF=F(),fF=re(),vF=fn(),pF=le(),qx=TypeError,xx="Reduce of empty array with no initial value",Sx=function(e){return function(r,t,n,i){var o=fF(r),u=vF(o),l=pF(o);if(lF(t),l===0&&n<2)throw new qx(xx);var c=e?l-1:0,s=e?-1:1;if(n<2)for(;;){if(c in u){i=u[c],c+=s;break}if(c+=s,e?c<0:l<=c)throw new qx(xx)}for(;e?c>=0:l>c;c+=s)c in u&&(i=t(i,u[c],c,o));return i}};wx.exports={left:Sx(!1),right:Sx(!0)}});var Vu=a((Lz,Ox)=>{"use strict";var dF=P();Ox.exports=function(e,r){var t=[][e];return!!t&&dF(function(){t.call(null,r||function(){return 1},1)})}});var Cx=a(()=>{"use strict";var hF=x(),mF=Tx().left,yF=Vu(),Ex=_r(),gF=_t(),bF=!gF&&Ex>79&&Ex<83,qF=bF||!yF("reduce");hF({target:"Array",proto:!0,forced:qF},{reduce:function(r){var t=arguments.length;return mF(this,r,t,t>1?arguments[1]:void 0)}})});var kx=a((Bz,Ix)=>{"use strict";Cx();var xF=oe();Ix.exports=xF("Array","reduce")});var _x=a((Gz,Px)=>{"use strict";var SF=B(),wF=kx(),zu=Array.prototype;Px.exports=function(e){var r=e.reduce;return e===zu||SF(zu,e)&&r===zu.reduce?wF:r}});var Ax=a((Uz,Rx)=>{"use strict";var TF=_x();Rx.exports=TF});var Mx=a((Wz,Nx)=>{"use strict";var OF=Ax();Nx.exports=OF});var $x=a((Hz,jx)=>{"use strict";var EF=Mx();jx.exports=EF});var Fx=a((Kz,Lx)=>{"use strict";Lx.exports=$x()});var Bx=a((Vz,Dx)=>{Dx.exports=Fx()});var Wx=a((zz,Ux)=>{"use strict";var CF=Ie(),IF=le(),kF=St(),PF=V(),_F=$r(),Gx=function(e,r,t,n,i,o,u,l){for(var c=i,s=0,f=u?PF(u,l):!1,v,p;s<n;)s in t&&(v=f?f(t[s],s,r):t[s],o>0&&CF(v)?(p=IF(v),c=Gx(e,r,v,p,c,o-1)-1):(kF(c+1),_F(e,c,v)),c++),s++;return c};Ux.exports=Gx});var Hx=a(()=>{"use strict";var RF=x(),AF=Wx(),NF=F(),MF=re(),jF=le(),$F=Rn();RF({target:"Array",proto:!0},{flatMap:function(r){var t=MF(this),n=jF(t),i;return NF(r),i=$F(t,0),AF(i,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),i}})});var Kx=a(()=>{"use strict";var LF=So();LF("flatMap")});var zx=a((Zz,Vx)=>{"use strict";Hx();Kx();var FF=oe();Vx.exports=FF("Array","flatMap")});var Jx=a((e7,Yx)=>{"use strict";var DF=B(),BF=zx(),Yu=Array.prototype;Yx.exports=function(e){var r=e.flatMap;return e===Yu||DF(Yu,e)&&r===Yu.flatMap?BF:r}});var Xx=a((r7,Qx)=>{"use strict";var GF=Jx();Qx.exports=GF});var eS=a((t7,Zx)=>{"use strict";var UF=Xx();Zx.exports=UF});var tS=a((n7,rS)=>{"use strict";var WF=eS();rS.exports=WF});var iS=a((i7,nS)=>{"use strict";nS.exports=tS()});var oS=a((a7,aS)=>{aS.exports=iS()});var sS=a((o7,uS)=>{"use strict";Ka();var HF=oe();uS.exports=HF("Array","concat")});var lS=a((u7,cS)=>{"use strict";var KF=B(),VF=sS(),Ju=Array.prototype;cS.exports=function(e){var r=e.concat;return e===Ju||KF(Ju,e)&&r===Ju.concat?VF:r}});var vS=a((s7,fS)=>{"use strict";var zF=lS();fS.exports=zF});var dS=a((c7,pS)=>{"use strict";var YF=vS();pS.exports=YF});var mS=a((l7,hS)=>{"use strict";var JF=dS();hS.exports=JF});var gS=a((f7,yS)=>{"use strict";yS.exports=mS()});var Qu=a((v7,bS)=>{bS.exports=gS()});var SS=a(()=>{});var TS=a((M7,wS)=>{"use strict";SS();xo();var oD=Br();wS.exports=oD.f("toPrimitive")});var ES=a((j7,OS)=>{"use strict";var uD=TS();OS.exports=uD});var IS=a(($7,CS)=>{"use strict";var sD=ES();CS.exports=sD});var PS=a((L7,kS)=>{"use strict";var cD=IS();kS.exports=cD});var RS=a((F7,_S)=>{"use strict";_S.exports=PS()});var BS=a((o9,DS)=>{"use strict";var fD=$(),vD=qe(),pD=R(),dD=pD("match");DS.exports=function(e){var r;return fD(e)&&((r=e[dD])!==void 0?!!r:vD(e)==="RegExp")}});var US=a((u9,GS)=>{"use strict";var hD=BS(),mD=TypeError;GS.exports=function(e){if(hD(e))throw new mD("The method doesn't accept regular expressions");return e}});var HS=a((s9,WS)=>{"use strict";var yD=R(),gD=yD("match");WS.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[gD]=!1,"/./"[e](r)}catch{}}return!1}});var zS=a(()=>{"use strict";var bD=x(),qD=ot(),xD=st().f,SD=ma(),KS=Ke(),wD=US(),TD=ir(),OD=HS(),ED=X(),CD=qD("".slice),ID=Math.min,VS=OD("startsWith"),kD=!ED&&!VS&&!!function(){var e=xD(String.prototype,"startsWith");return e&&!e.writable}();bD({target:"String",proto:!0,forced:!kD&&!VS},{startsWith:function(r){var t=KS(TD(this));wD(r);var n=SD(ID(arguments.length>1?arguments[1]:void 0,t.length)),i=KS(r);return CD(t,n,n+i.length)===i}})});var JS=a((f9,YS)=>{"use strict";zS();var PD=oe();YS.exports=PD("String","startsWith")});var XS=a((v9,QS)=>{"use strict";var _D=B(),RD=JS(),rs=String.prototype;QS.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===rs||_D(rs,e)&&r===rs.startsWith?RD:r}});var ew=a((p9,ZS)=>{"use strict";var AD=XS();ZS.exports=AD});var tw=a((d9,rw)=>{"use strict";var ND=ew();rw.exports=ND});var iw=a((h9,nw)=>{"use strict";var MD=tw();nw.exports=MD});var ow=a((m9,aw)=>{"use strict";aw.exports=iw()});var sw=a((y9,uw)=>{uw.exports=ow()});var cw=a(()=>{"use strict";var jD=x(),$D=Ot().filter,LD=dt(),FD=LD("filter");jD({target:"Array",proto:!0,forced:!FD},{filter:function(r){return $D(this,r,arguments.length>1?arguments[1]:void 0)}})});var fw=a((q9,lw)=>{"use strict";cw();var DD=oe();lw.exports=DD("Array","filter")});var pw=a((x9,vw)=>{"use strict";var BD=B(),GD=fw(),ts=Array.prototype;vw.exports=function(e){var r=e.filter;return e===ts||BD(ts,e)&&r===ts.filter?GD:r}});var hw=a((S9,dw)=>{"use strict";var UD=pw();dw.exports=UD});var yw=a((w9,mw)=>{"use strict";var WD=hw();mw.exports=WD});var bw=a((T9,gw)=>{"use strict";var HD=yw();gw.exports=HD});var xw=a((O9,qw)=>{"use strict";qw.exports=bw()});var ww=a((E9,Sw)=>{Sw.exports=xw()});var Fw=a(()=>{"use strict";var ZD=x(),eB=U(),is=kr(),rB=Ou(),Aw=jo(),tB=Q(),Nw=$(),nB=ze(),jw=P(),as=eB("Reflect","construct"),iB=Object.prototype,aB=[].push,$w=jw(function(){function e(){}return!(as(function(){},[],e)instanceof e)}),Lw=!jw(function(){as(function(){})}),Mw=$w||Lw;ZD({target:"Reflect",stat:!0,forced:Mw,sham:Mw},{construct:function(r,t){Aw(r),tB(t);var n=arguments.length<3?r:Aw(arguments[2]);if(Lw&&!$w)return as(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var i=[null];return is(aB,i,t),new(is(rB,r,i))}var o=n.prototype,u=nB(Nw(o)?o:iB),l=is(r,u,t);return Nw(l)?l:u}})});var Bw=a((oY,Dw)=>{"use strict";Fw();var oB=K();Dw.exports=oB.Reflect.construct});var Uw=a((uY,Gw)=>{"use strict";var uB=Bw();Gw.exports=uB});var Hw=a((sY,Ww)=>{"use strict";var sB=Uw();Ww.exports=sB});var Vw=a((cY,Kw)=>{"use strict";var cB=Hw();Kw.exports=cB});var _i=a((lY,zw)=>{"use strict";zw.exports=Vw()});var Jw=a((fY,Yw)=>{Yw.exports=_i()});var aT=a((qY,iT)=>{"use strict";var lB=P();iT.exports=lB(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var sT=a((xY,uT)=>{"use strict";var fB=P(),vB=$(),pB=qe(),oT=aT(),Ri=Object.isExtensible,dB=fB(function(){Ri(1)});uT.exports=dB||oT?function(r){return!vB(r)||oT&&pB(r)==="ArrayBuffer"?!1:Ri?Ri(r):!0}:Ri});var lT=a((SY,cT)=>{"use strict";var hB=P();cT.exports=!hB(function(){return Object.isExtensible(Object.preventExtensions({}))})});var vs=a((wY,pT)=>{"use strict";var mB=x(),yB=A(),gB=Dr(),bB=$(),cs=W(),qB=te().f,fT=Tt(),xB=Va(),ls=sT(),SB=Ar(),wB=lT(),vT=!1,Fe=SB("meta"),TB=0,fs=function(e){qB(e,Fe,{value:{objectID:"O"+TB++,weakData:{}}})},OB=function(e,r){if(!bB(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!cs(e,Fe)){if(!ls(e))return"F";if(!r)return"E";fs(e)}return e[Fe].objectID},EB=function(e,r){if(!cs(e,Fe)){if(!ls(e))return!0;if(!r)return!1;fs(e)}return e[Fe].weakData},CB=function(e){return wB&&vT&&ls(e)&&!cs(e,Fe)&&fs(e),e},IB=function(){kB.enable=function(){},vT=!0;var e=fT.f,r=yB([].splice),t={};t[Fe]=1,e(t).length&&(fT.f=function(n){for(var i=e(n),o=0,u=i.length;o<u;o++)if(i[o]===Fe){r(i,o,1);break}return i},mB({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:xB.f}))},kB=pT.exports={enable:IB,fastKey:OB,getWeakData:EB,onFreeze:CB};gB[Fe]=!0});var mT=a((TY,hT)=>{"use strict";var PB=x(),_B=_(),RB=vs(),AB=P(),NB=xe(),MB=ve(),jB=ei(),$B=N(),LB=$(),FB=nr(),DB=_e(),BB=te().f,GB=Ot().forEach,UB=G(),dT=Ve(),WB=dT.set,HB=dT.getterFor;hT.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,i=e.indexOf("Weak")!==-1,o=n?"set":"add",u=_B[e],l=u&&u.prototype,c={},s;if(!UB||!$B(u)||!(i||l.forEach&&!AB(function(){new u().entries().next()})))s=t.getConstructor(r,e,n,o),RB.enable();else{s=r(function(p,d){WB(jB(p,f),{type:e,collection:new u}),FB(d)||MB(d,p[o],{that:p,AS_ENTRIES:n})});var f=s.prototype,v=HB(e);GB(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(p){var d=p==="add"||p==="set";p in l&&!(i&&p==="clear")&&NB(f,p,function(m,h){var y=v(this).collection;if(!d&&i&&!LB(m))return p==="get"?void 0:!1;var q=y[p](m===0?0:m,h);return d?this:q})}),i||BB(f,"size",{configurable:!0,get:function(){return v(this).collection.size}})}return DB(s,e,!1,!0),c[e]=s,PB({global:!0,forced:!0},c),i||t.setStrong(s,e,n),s}});var gT=a((OY,yT)=>{"use strict";var KB=ke();yT.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:KB(e,n,r[n],t);return e}});var OT=a((EY,TT)=>{"use strict";var bT=ze(),VB=Nn(),qT=gT(),zB=V(),YB=ei(),JB=nr(),QB=ve(),XB=In(),Ai=kn(),ZB=Mo(),tn=G(),xT=vs().fastKey,wT=Ve(),ST=wT.set,ps=wT.getterFor;TT.exports={getConstructor:function(e,r,t,n){var i=e(function(s,f){YB(s,o),ST(s,{type:r,index:bT(null),first:null,last:null,size:0}),tn||(s.size=0),JB(f)||QB(f,s[n],{that:s,AS_ENTRIES:t})}),o=i.prototype,u=ps(r),l=function(s,f,v){var p=u(s),d=c(s,f),m,h;return d?d.value=v:(p.last=d={index:h=xT(f,!0),key:f,value:v,previous:m=p.last,next:null,removed:!1},p.first||(p.first=d),m&&(m.next=d),tn?p.size++:s.size++,h!=="F"&&(p.index[h]=d)),s},c=function(s,f){var v=u(s),p=xT(f),d;if(p!=="F")return v.index[p];for(d=v.first;d;d=d.next)if(d.key===f)return d};return qT(o,{clear:function(){for(var f=this,v=u(f),p=v.first;p;)p.removed=!0,p.previous&&(p.previous=p.previous.next=null),p=p.next;v.first=v.last=null,v.index=bT(null),tn?v.size=0:f.size=0},delete:function(s){var f=this,v=u(f),p=c(f,s);if(p){var d=p.next,m=p.previous;delete v.index[p.index],p.removed=!0,m&&(m.next=d),d&&(d.previous=m),v.first===p&&(v.first=d),v.last===p&&(v.last=m),tn?v.size--:f.size--}return!!p},forEach:function(f){for(var v=u(this),p=zB(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:v.first;)for(p(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!c(this,f)}}),qT(o,t?{get:function(f){var v=c(this,f);return v&&v.value},set:function(f,v){return l(this,f===0?0:f,v)}}:{add:function(f){return l(this,f=f===0?0:f,f)}}),tn&&VB(o,"size",{configurable:!0,get:function(){return u(this).size}}),i},setStrong:function(e,r,t){var n=r+" Iterator",i=ps(r),o=ps(n);XB(e,r,function(u,l){ST(this,{type:n,target:u,state:i(u),kind:l,last:null})},function(){for(var u=o(this),l=u.kind,c=u.last;c&&c.removed;)c=c.previous;return!u.target||!(u.last=c=c?c.next:u.state.first)?(u.target=null,Ai(void 0,!0)):Ai(l==="keys"?c.key:l==="values"?c.value:[c.key,c.value],!1)},t?"entries":"values",!t,!0),ZB(r)}}});var ET=a(()=>{"use strict";var e3=mT(),r3=OT();e3("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},r3)});var CT=a(()=>{"use strict";ET()});var kT=a((_Y,IT)=>{"use strict";IT.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,i){return t[e](n,i)}}});var ae=a((RY,_T)=>{"use strict";var t3=U(),Ni=kT(),PT=t3("Map");_T.exports={Map:PT,set:Ni("set",2),get:Ni("get",1),has:Ni("has",1),remove:Ni("delete",1),proto:PT.prototype}});var ds=a(()=>{"use strict";var n3=x(),i3=A(),a3=F(),o3=ir(),u3=ve(),Mi=ae(),RT=X(),s3=P(),AT=Mi.Map,c3=Mi.has,l3=Mi.get,f3=Mi.set,v3=i3([].push),p3=RT||s3(function(){return AT.groupBy("ab",function(e){return e}).get("a").length!==1});n3({target:"Map",stat:!0,forced:RT||p3},{groupBy:function(r,t){o3(r),a3(t);var n=new AT,i=0;return u3(r,function(o){var u=t(o,i++);c3(n,u)?v3(l3(n,u),o):f3(n,u,[o])}),n}})});var z=a((MY,NT)=>{"use strict";var d3=He(),h3=TypeError;NT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new h3(d3(e)+" is not a map")}});var ms=a(()=>{"use strict";var m3=x(),y3=z(),hs=ae(),g3=X(),b3=hs.get,q3=hs.has,x3=hs.set;m3({target:"Map",proto:!0,real:!0,forced:g3},{getOrInsert:function(r,t){return q3(y3(this),r)?b3(this,r):(x3(this,r,t),t)}})});var gs=a(()=>{"use strict";var S3=x(),w3=F(),T3=z(),ys=ae(),O3=X(),E3=ys.get,C3=ys.has,I3=ys.set;S3({target:"Map",proto:!0,real:!0,forced:O3},{getOrInsertComputed:function(r,t){if(T3(this),w3(t),C3(this,r))return E3(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return I3(this,r,n),n}})});var jT=a((DY,MT)=>{"use strict";dr();CT();ds();ms();gs();wt();lr();var k3=K();MT.exports=k3.Map});var LT=a((BY,$T)=>{"use strict";var P3=jT();hr();$T.exports=P3});var bs=a(()=>{"use strict";ms()});var qs=a(()=>{"use strict";gs()});var FT=a(()=>{"use strict";ds()});var BT=a((zY,DT)=>{"use strict";var _3=LT();bs();qs();FT();DT.exports=_3});var UT=a((YY,GT)=>{"use strict";var R3=V(),A3=Q(),N3=re(),M3=ve();GT.exports=function(e,r,t){return function(i){var o=N3(i),u=arguments.length,l=u>1?arguments[1]:void 0,c=l!==void 0,s=c?R3(l,u>2?arguments[2]:void 0):void 0,f=new e,v=0;return M3(o,function(p){var d=c?s(p,v++):p;t?r(f,A3(d)[0],d[1]):r(f,d)}),f}}});var HT=a(()=>{"use strict";var j3=x(),WT=ae(),$3=UT();j3({target:"Map",stat:!0,forced:!0},{from:$3(WT.Map,WT.set,!0)})});var VT=a((XY,KT)=>{"use strict";var L3=Q();KT.exports=function(e,r,t){return function(){for(var i=new e,o=arguments.length,u=0;u<o;u++){var l=arguments[u];t?r(i,L3(l)[0],l[1]):r(i,l)}return i}}});var YT=a(()=>{"use strict";var F3=x(),zT=ae(),D3=VT();F3({target:"Map",stat:!0,forced:!0},{of:D3(zT.Map,zT.set,!0)})});var QT=a(()=>{"use strict";var B3=x(),G3=D(),U3=ve(),W3=N(),JT=F(),H3=ae().Map;B3({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=W3(this)?this:H3,i=new n;JT(t);var o=JT(i.set);return U3(r,function(u){G3(o,i,t(u),u)}),i}})});var XT=a(()=>{"use strict";var K3=x(),V3=z(),z3=ae().remove;K3({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=V3(this),t=!0,n,i=0,o=arguments.length;i<o;i++)n=z3(r,arguments[i]),t=t&&n;return!!t}})});var eO=a(()=>{"use strict";var Y3=x(),J3=z(),xs=ae(),Q3=xs.get,X3=xs.has,ZT=xs.set;Y3({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=J3(this),i,o;return X3(n,r)?(i=Q3(n,r),"update"in t&&(i=t.update(i,r,n),ZT(n,r,i)),i):(o=t.insert(r,n),ZT(n,r,o),o)}})});var tO=a((uJ,rO)=>{"use strict";var Z3=D();rO.exports=function(e,r,t){for(var n=t?e:e.iterator,i=e.next,o,u;!(o=Z3(i,n)).done;)if(u=r(o.value),u!==void 0)return u}});var me=a((sJ,nO)=>{"use strict";var e4=tO();nO.exports=function(e,r,t){return t?e4(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var iO=a(()=>{"use strict";var r4=x(),t4=V(),n4=z(),i4=me();r4({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=n4(this),n=t4(r,arguments.length>1?arguments[1]:void 0);return i4(t,function(i,o){if(!n(i,o,t))return!1},!0)!==!1}})});var oO=a(()=>{"use strict";var a4=x(),o4=V(),u4=z(),aO=ae(),s4=me(),c4=aO.Map,l4=aO.set;a4({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=u4(this),n=o4(r,arguments.length>1?arguments[1]:void 0),i=new c4;return s4(t,function(o,u){n(o,u,t)&&l4(i,u,o)}),i}})});var uO=a(()=>{"use strict";var f4=x(),v4=V(),p4=z(),d4=me();f4({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=p4(this),n=v4(r,arguments.length>1?arguments[1]:void 0),i=d4(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return i&&i.value}})});var sO=a(()=>{"use strict";var h4=x(),m4=V(),y4=z(),g4=me();h4({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=y4(this),n=m4(r,arguments.length>1?arguments[1]:void 0),i=g4(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return i&&i.key}})});var lO=a((yJ,cO)=>{"use strict";cO.exports=function(e,r){return e===r||e!==e&&r!==r}});var fO=a(()=>{"use strict";var b4=x(),q4=lO(),x4=z(),S4=me();b4({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return S4(x4(this),function(t){if(q4(t,r))return!0},!0)===!0}})});var vO=a(()=>{"use strict";var w4=x(),T4=z(),O4=me();w4({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=O4(T4(this),function(n,i){if(n===r)return{key:i}},!0);return t&&t.key}})});var dO=a(()=>{"use strict";var E4=x(),C4=V(),I4=z(),pO=ae(),k4=me(),P4=pO.Map,_4=pO.set;E4({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=I4(this),n=C4(r,arguments.length>1?arguments[1]:void 0),i=new P4;return k4(t,function(o,u){_4(i,n(o,u,t),o)}),i}})});var mO=a(()=>{"use strict";var R4=x(),A4=V(),N4=z(),hO=ae(),M4=me(),j4=hO.Map,$4=hO.set;R4({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=N4(this),n=A4(r,arguments.length>1?arguments[1]:void 0),i=new j4;return M4(t,function(o,u){$4(i,u,n(o,u,t))}),i}})});var yO=a(()=>{"use strict";var L4=x(),F4=z(),D4=ve(),B4=ae().set;L4({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=F4(this),n=arguments.length,i=0;i<n;)D4(arguments[i++],function(o,u){B4(t,o,u)},{AS_ENTRIES:!0});return t}})});var gO=a(()=>{"use strict";var G4=x(),U4=F(),W4=z(),H4=me(),K4=TypeError;G4({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=W4(this),n=arguments.length<2,i=n?void 0:arguments[1];if(U4(r),H4(t,function(o,u){n?(n=!1,i=o):i=r(i,o,u,t)}),n)throw new K4("Reduce of empty map with no initial value");return i}})});var bO=a(()=>{"use strict";var V4=x(),z4=V(),Y4=z(),J4=me();V4({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=Y4(this),n=z4(r,arguments.length>1?arguments[1]:void 0);return J4(t,function(i,o){if(n(i,o,t))return!0},!0)===!0}})});var xO=a(()=>{"use strict";var Q4=x(),qO=F(),X4=z(),Ss=ae(),Z4=TypeError,eG=Ss.get,rG=Ss.has,tG=Ss.set;Q4({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=X4(this),i=arguments.length;qO(t);var o=rG(n,r);if(!o&&i<3)throw new Z4("Updating absent value");var u=o?eG(n,r):qO(i>2?arguments[2]:void 0)(r,n);return tG(n,r,t(u,r,n)),n}})});var Ts=a((NJ,SO)=>{"use strict";var ji=D(),ws=F(),$i=N(),nG=Q(),iG=TypeError;SO.exports=function(r,t){var n=nG(this),i=ws(n.get),o=ws(n.has),u=ws(n.set),l=arguments.length>2?arguments[2]:void 0,c;if(!$i(t)&&!$i(l))throw new iG("At least one callback required");return ji(o,n,r)?(c=ji(i,n,r),$i(t)&&(c=t(c),ji(u,n,r,c))):$i(l)&&(c=l(),ji(u,n,r,c)),c}});var wO=a(()=>{"use strict";var aG=x(),oG=Ts();aG({target:"Map",proto:!0,real:!0,forced:!0},{upsert:oG})});var TO=a(()=>{"use strict";var uG=x(),sG=Ts();uG({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:sG})});var EO=a((FJ,OO)=>{"use strict";var cG=BT();HT();YT();QT();XT();eO();iO();oO();uO();sO();fO();bs();qs();vO();dO();mO();yO();gO();bO();xO();wO();TO();OO.exports=cG});var IO=a((DJ,CO)=>{"use strict";CO.exports=EO()});var PO=a(()=>{"use strict";var lG=x(),fG=ot(),vG=Ea().indexOf,pG=Vu(),Os=fG([].indexOf),kO=!!Os&&1/Os([1],1,-0)<0,dG=kO||!pG("indexOf");lG({target:"Array",proto:!0,forced:dG},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return kO?Os(this,r,t)||0:vG(this,r,t)}})});var RO=a((UJ,_O)=>{"use strict";PO();var hG=oe();_O.exports=hG("Array","indexOf")});var NO=a((WJ,AO)=>{"use strict";var mG=B(),yG=RO(),Es=Array.prototype;AO.exports=function(e){var r=e.indexOf;return e===Es||mG(Es,e)&&r===Es.indexOf?yG:r}});var jO=a((HJ,MO)=>{"use strict";var gG=NO();MO.exports=gG});var LO=a((KJ,$O)=>{"use strict";var bG=jO();$O.exports=bG});var DO=a((VJ,FO)=>{"use strict";var qG=LO();FO.exports=qG});var GO=a((zJ,BO)=>{"use strict";BO.exports=DO()});var aE=a(()=>{"use strict";var EG=x(),CG=re(),iE=wn(),IG=P(),kG=IG(function(){iE(1)});EG({target:"Object",stat:!0,forced:kG},{keys:function(r){return iE(CG(r))}})});var uE=a((ZQ,oE)=>{"use strict";aE();var PG=K();oE.exports=PG.Object.keys});var cE=a((eX,sE)=>{"use strict";var _G=uE();sE.exports=_G});var fE=a((rX,lE)=>{"use strict";var RG=cE();lE.exports=RG});var pE=a((tX,vE)=>{"use strict";var AG=fE();vE.exports=AG});var hE=a((nX,dE)=>{"use strict";dE.exports=pE()});var yE=a((iX,mE)=>{mE.exports=hE()});var Cr="";function Bs(e){Cr=e.replace(/\/+$/,"")}async function Gs(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${Cr}/comments?${t}`);if(!n.ok)throw new Error(`Failed to fetch comments: ${n.status}`);return(await n.json()).data}async function Wi({uri:e,document:r,quote:t,prefix:n,suffix:i,body:o,author:u,parent:l}){let c={quote:t,prefix:n,suffix:i,body:o,author:u,parent:l};r?c.document=r:c.uri=e;let s=await fetch(`${Cr}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!s.ok){let f=await s.json().catch(()=>({error:{message:s.statusText}}));throw new Error(f.error?.message||"Failed to create comment")}return s.json()}async function Us(e,{body:r}){let t=await fetch(`${Cr}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:r})});if(!t.ok)throw new Error(`Failed to update comment: ${t.status}`);return t.json()}async function Ws(e,r){let t=await fetch(`${Cr}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});if(!t.ok)throw new Error(`Failed to update comment: ${t.status}`);return t.json()}async function Hs(e){let r=await fetch(`${Cr}/comments/${e}`,{method:"DELETE"});if(!r.ok)throw new Error(`Failed to delete comment: ${r.status}`)}var EL=g(Fr(),1),CL=g(_n(),1),IL=g(Vn(),1),kL=g(zn(),1),PL=g(Yn(),1);var qu=g(Zr(),1);function Dy(e,r,t,n,i,o,u){try{var l=e[o](u),c=l.value}catch(s){return void t(s)}l.done?r(c):qu.default.resolve(c).then(n,i)}function qr(e){return function(){var r=this,t=arguments;return new qu.default(function(n,i){var o=e.apply(r,t);function u(c){Dy(o,n,i,u,l,"next",c)}function l(c){Dy(o,n,i,u,l,"throw",c)}u(void 0)})}}function Lt(e,r){this.v=e,this.k=r}function Xe(e){return new Lt(e,0)}var xu=g(Zr(),1),Jy=g(Se(),1),Qy=g(li(),1);function Te(e){return function(){return new Ft(e.apply(this,arguments))}}function Ft(e){var r,t;function n(o,u){try{var l=e[o](u),c=l.value,s=c instanceof Lt;xu.default.resolve(s?c.v:c).then(function(f){if(s){var v=o==="return"?"return":"next";if(!c.k||f.done)return n(v,f);f=e[v](f).value}i(l.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){i("throw",f)}}function i(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new xu.default(function(l,c){var s={key:o,arg:u,resolve:l,reject:c,next:null};t?t=t.next=s:(r=t=s,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Ft.prototype[typeof Jy.default=="function"&&Qy.default||"@@asyncIterator"]=function(){return this},Ft.prototype.next=function(e){return this._invoke("next",e)},Ft.prototype.throw=function(e){return this._invoke("throw",e)},Ft.prototype.return=function(e){return this._invoke("return",e)};var _L=g(se(),1),RL=g(xq(),1);function ce(e){var r,t=TL(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function TL(e){return"startContainer"in e}function er(e){if(OL(e))return e;var r=e,t=ce(r).createRange();return t.selectNodeContents(r),t}function OL(e){return"startContainer"in e}var Aq=g(Rq(),1);function Nq(e){if((0,Aq.default)(e))return e}var Vq=g(Se(),1),zq=g(ko(),1),Yq=g(Wu(),1);function Jq(e,r){var t=e==null?null:typeof Vq.default<"u"&&(0,zq.default)(e)||e["@@iterator"];if(t!=null){var n,i,o,u,l=[],c=!0,s=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&((0,Yq.default)(l).call(l,n.value),l.length!==r);c=!0);}catch(f){s=!0,i=f}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(s)throw i}}return l}}var Qq=g(ba(),1),Xq=g(Ha(),1);function Oi(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function Hu(e,r){if(e){var t;if(typeof e=="string")return Oi(e,r);var n=(0,Qq.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,Xq.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Oi(e,r):void 0}}function Zq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $e(e,r){return Nq(e)||Jq(e,r)||Hu(e,r)||Zq()}var ex=g(Se(),1),rx=g(li(),1),tx=g(Vt(),1),Qt=g(Zr(),1);function rt(e){var r,t,n,i=2;for(typeof ex.default<"u"&&(t=rx.default,n=tx.default);i--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Ei(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Ei(e){function r(t){if(Object(t)!==t)return Qt.default.reject(new TypeError(t+" is not an object."));var n=t.done;return Qt.default.resolve(t.value).then(function(i){return{value:i,done:n}})}return Ei=function(n){this.s=n,this.n=n.next},Ei.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var i=this.s.return;return i===void 0?Qt.default.resolve({value:n,done:!0}):r(i.apply(this.s,arguments))},throw:function(n){var i=this.s.return;return i===void 0?Qt.default.reject(n):r(i.apply(this.s,arguments))}},new Ei(e)}var aD=g(se(),1);var ZF=g(se(),1),eD=g(yx(),1),rD=g(bx(),1),tD=g(Bx(),1),nD=g(oS(),1),iD=g(Qu(),1);var ks=g(se(),1);var XD=g(se(),1);var Zu=g(se(),1);function Xt(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function qS(e,r){return Xt(e.startChunk,r.startChunk)&&Xt(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function xr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var Xu=g(Gt(),1);var Zt=g(Se(),1),xS=g(Vt(),1);function Le(e){"@babel/helpers - typeof";return Le=typeof Zt.default=="function"&&typeof xS.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Zt.default=="function"&&r.constructor===Zt.default&&r!==Zt.default.prototype?"symbol":typeof r},Le(e)}var AS=g(RS(),1);function NS(e,r){if(Le(e)!="object"||!e)return e;var t=e[AS.default];if(t!==void 0){var n=t.call(e,r||"default");if(Le(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Ci(e){var r=NS(e,"string");return Le(r)=="symbol"?r:r+""}function MS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,Xu.default)(e,Ci(n.key),n)}}function en(e,r,t){return r&&MS(e.prototype,r),t&&MS(e,t),(0,Xu.default)(e,"prototype",{writable:!1}),e}var jS=g(Gt(),1);function Sr(e,r,t){return(r=Ci(r))in e?(0,jS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var $S=g(Fr(),1);var Ii="Iterator exhausted before seek ended.",rn=function(){function e(r){xr(this,e),this.chunker=r,Sr(this,"currentChunkPosition",0),Sr(this,"offsetInChunk",0),this.seekTo(0)}return en(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,i)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!Xt(this.currentChunk,n);){var v=this._readToPreviousChunk(),p=$e(v,2),d=p[0],m=p[1];if(t&&(u=d+u),m===null)throw new RangeError(Ii)}else for(;!Xt(this.currentChunk,n);){var l=this._readToNextChunk(),c=$e(l,2),s=c[0],f=c[1];if(t&&(u+=s),f===null)throw new RangeError(Ii)}var h=this.currentChunkPosition+i;if(!t)this.seekTo(h);else return h>=this.position?u+=this.readTo(h):h>=o?(this.seekTo(h),u=(0,$S.default)(u).call(u,0,h-o)):(this.seekTo(o),u=this.readTo(h)),u}},{key:"_readOrSeekTo",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var l=this.currentChunkPosition+this.currentChunk.data.length;if(l<=n){var c=this._readToNextChunk(),s=$e(c,2),f=s[0],v=s[1];if(t&&(u+=f),v===null){if(this.position===n||o)break;throw new RangeError(Ii)}}else{var p=i?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,p)),this.offsetInChunk=p,i&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=i?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var m=this._readToPreviousChunk(),h=$e(m,2),y=h[0],q=h[1];if(t&&(u=y+u),q===null){if(o)break;throw new RangeError(Ii)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,i=this.chunker.nextChunk();return i!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,i]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function FS(e,r){return es.apply(this,arguments)}function es(){return es=qr(Zu.default.mark(function e(r,t){var n,i,o,u,l,c,s,f,v,p,d,m,h,y,q,b,I,C,S,T,w,E,j=arguments;return Zu.default.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:n=j.length>2&&j[2]!==void 0?j[2]:{},i=n.minimalContext,o=i===void 0?!1:i,u=n.minimumQuoteLength,l=u===void 0?0:u,c=n.maxWordLength,s=c===void 0?50:c,f=new rn(t()),v=new rn(t()),f.seekToChunk(r.startChunk,r.startIndex),p=f.readToChunk(r.endChunk,r.endIndex),d="",m="",h=function(){return d.length+p.length+m.length},h()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),y=Math.floor((l-h())/2),d=f.read(-y,!1,!0)+d,h()<l&&(f.seekToChunk(r.endChunk,r.endIndex+m.length),q=l-h(),m=m+f.read(q,!1,!0),h()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),b=l-h(),d=f.read(-b,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=ki(f,s,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+m.length),m=m+ki(f,s,!1));case 11:return I={type:"TextQuoteSelector",exact:p,prefix:d,suffix:m},C=Pi(I)(t()),k.next=16,C.next();case 16:if(S=k.sent,!(!S.done&&qS(S.value,r))){k.next=21;break}return k.next=20,C.next();case 20:S=k.sent;case 21:if(!S.done){k.next=23;break}return k.abrupt("return",I);case 23:if(T=S.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),v.seekToChunk(T.startChunk,T.startIndex-d.length),w=LS(f,v,!0),w!==void 0&&!o&&(w=ki(f,s,!0)+w),f.seekToChunk(r.endChunk,r.endIndex+m.length),v.seekToChunk(T.endChunk,T.endIndex+m.length),E=LS(f,v,!1),E!==void 0&&!o&&(E=E+ki(f,s,!1)),!o){k.next=44;break}if(!(w!==void 0&&(E===void 0||w.length<=E.length))){k.next=37;break}d=w+d,k.next=42;break;case 37:if(E===void 0){k.next=41;break}m=m+E,k.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:k.next=46;break;case 44:w!==void 0&&(d=w+d),E!==void 0&&(m=m+E);case 46:k.next=11;break;case 48:case"end":return k.stop()}},e)})),es.apply(this,arguments)}function LS(e,r,t){for(var n="";;){var i=void 0;try{i=e.read(t?-1:1)}catch{return}n=t?i+n:n+i;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(i!==o)return n}}function ki(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var i=void 0;try{i=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(lD(i)){e.seekBy(t?1:-1);break}n=t?i+n:n+i}return n}function lD(e){return/^\s+$/.test(e)}var Ew=g(Fr(),1),Cw=g(_n(),1),Iw=g(Vn(),1),kw=g(zn(),1),Pw=g(Yn(),1);var ns=g(se(),1),_w=g(sw(),1),Rw=g(ww(),1);function Tw(e,r){var t;if(typeof Iw.default>"u"||(0,kw.default)(e)==null){if(Array.isArray(e)||(t=KD(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(s){throw s},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,l;return{s:function(){t=(0,Pw.default)(e)},n:function(){var s=t.next();return o=s.done,s},e:function(s){u=!0,l=s},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw l}}}}function KD(e,r){var t;if(e){if(typeof e=="string")return Ow(e,r);var n=(0,Ew.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,Cw.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ow(e,r)}}function Ow(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Pi(e){return function(){var r=Te(ns.default.mark(function n(i){var o,u,l,c,s,f,v,p,d,m,h,y,q,b,I,C,S,T,w,E,j,ge,k,ee,be,J,L;return ns.default.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:o=e.exact,u=e.prefix||"",l=e.suffix||"",c=u+o+l,s=[],f=!0;case 6:v=i.currentChunk,p=v.data,d=[],m=Tw(s),O.prev=10,m.s();case 12:if((h=m.n()).done){O.next=27;break}if(y=h.value,q=y.charactersMatched,y.endChunk===void 0&&(b=u.length+o.length-q,b<=p.length&&(y.endChunk=v,y.endIndex=b)),y.startChunk===void 0&&(I=u.length-q,(I<p.length||y.endChunk!==void 0)&&(y.startChunk=v,y.startIndex=I)),C=c.length-q,!(C<=p.length)){O.next=24;break}if(!(0,_w.default)(p).call(p,c.substring(q))){O.next=22;break}return O.next=22,y;case 22:O.next=25;break;case 24:p===c.substring(q,q+p.length)&&(y.charactersMatched+=p.length,d.push(y));case 25:O.next=12;break;case 27:O.next=32;break;case 29:O.prev=29,O.t0=O.catch(10),m.e(O.t0);case 32:return O.prev=32,m.f(),O.finish(32);case 35:if(s=d,!(c.length<=p.length)){O.next=49;break}S=0;case 38:if(!(S<=p.length)){O.next=49;break}if(T=p.indexOf(c,S),T!==-1){O.next=42;break}return O.abrupt("break",49);case 42:if(S=T+1,!(T===0&&c.length===0&&!f)){O.next=45;break}return O.abrupt("continue",38);case 45:return O.next=47,{startChunk:v,startIndex:T+u.length,endChunk:v,endIndex:T+u.length+o.length};case 47:O.next=38;break;case 49:for(w=[],E=Math.max(p.length-c.length+1,0),j=function(Ue){var Fs=p[Ue];w=(0,Rw.default)(w).call(w,function(LE){return Fs===c[Ue-LE]}),Fs===c[0]&&w.push(Ue)},ge=E;ge<p.length;ge++)j(ge);k=Tw(w);try{for(k.s();!(ee=k.n()).done;)be=ee.value,J=p.length-be,L={charactersMatched:J},J>=u.length+o.length&&(L.endChunk=v,L.endIndex=be+u.length+o.length),(J>u.length||L.endChunk!==void 0)&&(L.startChunk=v,L.startIndex=be+u.length),s.push(L)}catch(Er){k.e(Er)}finally{k.f()}f=!1;case 56:if(i.nextChunk()!==null){O.next=6;break}case 57:case"end":return O.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var JD=g(se(),1);var VD=g(Fr(),1),zD=g(Qu(),1);var QD=g(se(),1);var an=g(Jw(),1);var Xw=g(vi(),1),Zw=g(Gt(),1);var os=g(pi(),1),Qw=g(Bt(),1);function rr(e,r){var t;return rr=os.default?(0,Qw.default)(t=os.default).call(t):function(n,i){return n.__proto__=i,n},rr(e,r)}function us(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,Xw.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,Zw.default)(e,"prototype",{writable:!1}),r&&rr(e,r)}function eT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function rT(e,r){if(r&&(Le(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return eT(e)}var tT=g(pi(),1),nT=g(Bt(),1),ss=g(fi(),1);function wr(e){var r;return wr=tT.default?(0,nT.default)(r=ss.default).call(r):function(t){return t.__proto__||(0,ss.default)(t)},wr(e)}var Is=g(IO(),1),JO=g(vi(),1);var UO=g(GO(),1);function WO(e){try{var r;return(0,UO.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var KO=g(_i(),1),VO=g(Wu(),1),zO=g(Bt(),1);var HO=g(_i(),1);function Cs(){try{var e=!Boolean.prototype.valueOf.call((0,HO.default)(Boolean,[],function(){}))}catch{}return(Cs=function(){return!!e})()}function YO(e,r,t){if(Cs())return KO.default.apply(null,arguments);var n=[null];(0,VO.default)(n).apply(n,r);var i=new((0,zO.default)(e).apply(e,n));return t&&rr(i,t.prototype),i}function nn(e){var r=typeof Is.default=="function"?new Is.default:void 0;return nn=function(n){if(n===null||!WO(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,i)}function i(){return YO(n,arguments,wr(this).constructor)}return i.prototype=(0,JO.default)(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),rr(i,n)},nn(e)}function ZO(e,r){var t=ce(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i=QO(e.startContainer,e.startOffset),o=$e(i,2),u=o[0],l=o[1];for(n.currentNode=u;l===u.length&&n.nextNode();)u=n.currentNode,l=0;e.setStart(u,l);var c=QO(e.endContainer,e.endOffset),s=$e(c,2),f=s[0],v=s[1];for(n.currentNode=f;v===0&&n.previousNode();)f=n.currentNode,v=f.length;return e.setEnd(f,v),e}function QO(e,r){var t;if(XO(e))return[e,r];var n;if(xG(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(XO(n))return[n,0];var i=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=i.createTreeWalker(i,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function XO(e){return e.nodeType===Node.TEXT_NODE}function xG(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function rE(e){var r=SG();return function(){var n=wr(e),i;if(r){var o=wr(this).constructor;i=(0,an.default)(n,arguments,o)}else i=n.apply(this,arguments);return rT(this,i)}}function SG(){if(typeof Reflect>"u"||!an.default||an.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,an.default)(Boolean,[],function(){})),!0}catch{return!1}}var Li=function(e){us(t,e);var r=rE(t);function t(n){return xr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(nn(TypeError)),wG=function(e){us(t,e);var r=rE(t);function t(n){return xr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(nn(TypeError)),Tr=function(){function e(r){var t=this;if(xr(this,e),Sr(this,"scope",void 0),Sr(this,"iter",void 0),this.scope=er(r),this.iter=ce(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!eE(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Li}}return en(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!eE(t))throw new Li;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new wG;var n=t===this.scope.startContainer?this.scope.startOffset:0,i=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:i,data:t.data.substring(n,i),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=ZO(t,this.scope),i=this.nodeToChunk(n.startContainer),o=n.startOffset-i.startOffset,u=this.nodeToChunk(n.endContainer),l=n.endOffset-u.startOffset;return{startChunk:i,startIndex:o,endChunk:u,endIndex:l}}},{key:"chunkRangeToRange",value:function(t){var n=ce(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function eE(e){return e.nodeType===Node.TEXT_NODE}function tE(e,r){return Ps.apply(this,arguments)}function Ps(){return Ps=qr(ks.default.mark(function e(r,t){var n,i,o,u=arguments;return ks.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},i=er(t??ce(r)),o=new Tr(i),c.next=5,FS(o.rangeToChunkRange(r),function(){return new Tr(i)},n);case 5:return c.abrupt("return",c.sent);case 6:case"end":return c.stop()}},e)})),Ps.apply(this,arguments)}var _s=g(se(),1);function nE(e){var r=Pi(e);return function(){var t=Te(_s.default.mark(function i(o){var u,l,c,s,f,v,p,d;return _s.default.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:h.prev=0,u=new Tr(o),h.next=11;break;case 4:if(h.prev=4,h.t0=h.catch(0),!(h.t0 instanceof Li)){h.next=10;break}return h.abrupt("return");case 10:throw h.t0;case 11:l=!0,c=!1,h.prev=13,f=rt(r(u));case 15:return h.next=17,Xe(f.next());case 17:return v=h.sent,l=v.done,h.next=21,Xe(v.value);case 21:if(p=h.sent,l){h.next=29;break}return d=p,h.next=26,u.chunkRangeToRange(d);case 26:l=!0,h.next=15;break;case 29:h.next=35;break;case 31:h.prev=31,h.t1=h.catch(13),c=!0,s=h.t1;case 35:if(h.prev=35,h.prev=36,!(!l&&f.return!=null)){h.next=40;break}return h.next=40,Xe(f.return());case 40:if(h.prev=40,!c){h.next=43;break}throw s;case 43:return h.finish(40);case 44:return h.finish(35);case 45:case"end":return h.stop()}},i,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(i){return t.apply(this,arguments)}return n}()}var TG=g(se(),1);var OG=g(se(),1);var NG=g(yE(),1),MG=g(Fr(),1),jG=g(_n(),1),$G=g(Vn(),1),LG=g(zn(),1),FG=g(Yn(),1);async function gE(e,r){let t=await tE(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function Fi(e,r){let t=nE({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var tt="fb-highlight",bE="fb-highlight-active";var on=null;function xE(e){on=e}function Di(e,r){let t=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let n=qE(e,r);t.push(n)}else{let n=BG(e);for(let i=0;i<n.length;i++){let o=n[i],u=document.createRange();o===e.startContainer?(u.setStart(o,e.startOffset),u.setEnd(o,o.textContent.length)):o===e.endContainer?(u.setStart(o,0),u.setEnd(o,e.endOffset)):u.selectNodeContents(o),u.collapsed||t.push(qE(u,r))}}return t}function qE(e,r){let t=e.commonAncestorContainer;for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;let n=t,i=!1,o=null;for(;n;){if(n.tagName==="foreignObject"){i=!1;break}n.tagName==="text"&&n instanceof SVGElement&&(i=!0),n.tagName==="svg"&&(o=n),n=n.parentElement}if(i&&o)return DG(e,r,o);let u=document.createElement("mark");u.className=tt,u.dataset.commentId=r,u.style.backgroundColor="rgba(255, 212, 0, 0.35)",u.style.cursor="pointer",u.style.borderRadius="2px",u.addEventListener("click",()=>{on&&on(r)});try{e.surroundContents(u)}catch(l){return console.warn("[feedback-layer] Failed to create highlight:",l),null}return u}function DG(e,r,t){try{let n=e.getClientRects();if(n.length===0)return null;let i="http://www.w3.org/2000/svg",o=t.getScreenCTM();if(!o)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let u=e.commonAncestorContainer;for(;u&&u.nodeType!==Node.ELEMENT_NODE;)u=u.parentNode;let l=u,c=null;for(;l&&l!==t;){if(l.tagName==="text"){c=l.parentElement;break}l=l.parentElement}let s=c||t,f=o;s!==t&&s.getScreenCTM&&(f=s.getScreenCTM());let v=document.createElementNS(i,"g");v.setAttribute("class",tt),v.setAttribute("data-comment-id",r),v.style.cursor="pointer";for(let y=0;y<n.length;y++){let q=n[y],b=document.createElementNS(i,"rect"),I=t.createSVGPoint();I.x=q.left,I.y=q.top;let C=I.matrixTransform(f.inverse()),S=q.width/f.a,T=q.height/f.d;b.setAttribute("x",C.x),b.setAttribute("y",C.y),b.setAttribute("width",S),b.setAttribute("height",T),b.setAttribute("fill","#ffd400"),b.setAttribute("fill-opacity","0.35"),b.setAttribute("rx","2"),b.setAttribute("ry","2"),b.style.pointerEvents="none",v.appendChild(b)}s&&s!==t?s.appendChild(v):t.appendChild(v);let p=e.commonAncestorContainer;for(;p&&p.nodeType!==Node.ELEMENT_NODE;)p=p.parentNode;let d=new Set,m=p;for(;m&&m!==t;)m.tagName==="text"&&m instanceof SVGElement&&(d.add(m),m.querySelectorAll("tspan").forEach(q=>d.add(q))),m=m.parentElement;let h=y=>{y.preventDefault(),y.stopPropagation(),on&&on(r)};return d.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",h),y.dataset.fbCommentId=r}),v}catch(n){return console.warn("[feedback-layer] Failed to create SVG highlight:",n),null}}function Rs(e){document.querySelectorAll(`.${tt}[data-comment-id="${e}"]`).forEach(n=>{let i=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)i.removeChild(n);else{for(;n.firstChild;)i.insertBefore(n.firstChild,n);i.removeChild(n),i.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function SE(){document.querySelectorAll(`.${tt}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function Bi(e){document.querySelectorAll(`.${tt}`).forEach(r=>{let t=r.dataset.commentId===e,n="rgba(255, 180, 0, 0.55)",i="rgba(255, 212, 0, 0.35)";t?r.classList.add(bE):r.classList.remove(bE),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(u=>{u.setAttribute("fill",t?n:i)}):r.style.backgroundColor=t?n:i})}function wE(e){let r=document.querySelector(`.${tt}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function BG(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let i=document.createRange();return i.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,i)<0&&e.compareBoundaryPoints(Range.START_TO_END,i)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function TE(e,r){let t=GG(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(i=>!i.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function GG(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,i)=>{let o=[`**${i+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let l of u)o.push(`  - **[${l.author}]** (reply): ${l.body}`);return o.join(`
`)}).join(`

`)}var UG=`
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
`,OE=null,EE=null;function CE(e,r){EE=e,OE=r,WG()}function WG(){let e=document.createElement("style");e.textContent=UG,document.head.appendChild(e)}function IE(){let e=OE(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let i=document.createElement("button");i.className="hf-modal-close",i.textContent="\xD7",i.addEventListener("click",()=>r.remove()),n.appendChild(i);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",v=>{v.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let l=document.querySelector(EE.contentSelector||"body").innerHTML,c=TE(l,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${c.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${HG(c)}</textarea>
  `;let s=document.createElement("button");s.className="hf-btn hf-btn-primary",s.textContent="Copy Prompt",s.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c),s.textContent="Copied!"}catch{s.textContent="Copy failed"}setTimeout(()=>s.textContent="Copy Prompt",2e3)}),u.appendChild(s);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function HG(e){let r=document.createElement("div");return r.textContent=e,r.innerHTML}var KG=320,PE="feedback-layer-commenter",Z=null,Be=null,De=null,As=null,_E=null,Ns=null,Ms=null,js=null,$s=null,Ls=!1,RE=[],AE=new Set;function nt(){return localStorage.getItem(PE)||""}function NE({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:i}){_E=e,Ns=r,Ms=t,js=n,$s=i,ZG(),Z=document.createElement("div"),Z.className="fb-sidebar fb-sidebar-collapsed",Z.innerHTML=`
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
  `;let o=document.createElement("button");o.className="fb-sidebar-tab",o.textContent="Feedback",o.addEventListener("click",()=>sn()),document.body.appendChild(o),document.body.appendChild(Z),Be=Z.querySelector(".fb-comment-list"),De=Z.querySelector(".fb-form-section");let u=Z.querySelector(".fb-name-input");u.addEventListener("input",()=>{localStorage.setItem(PE,u.value.trim())}),Z.querySelector(".fb-ai-btn").addEventListener("click",()=>IE()),Z.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>VG());let s=Z.querySelector(".fb-show-resolved-cb");s.addEventListener("change",()=>{Ls=s.checked,tr(RE,AE)})}function sn(){Z.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden")}function VG(){Z.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden")}function ME(e){if(sn(),!nt()){let n=Z.querySelector(".fb-name-input");n.style.outline="2px solid #ef4444",setTimeout(()=>n.style.outline="",2e3)}As=e,De.style.display="",De.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${un(QG(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `;let r=De.querySelector(".fb-form-textarea");r.focus();let t=()=>{if(!nt()){let i=Z.querySelector(".fb-name-input");i.focus(),i.style.outline="2px solid #ef4444",setTimeout(()=>i.style.outline="",2e3);return}let n=r.value.trim();n&&(_E({comment:n,commenter:nt()}),De.style.display="none",As=null)};De.querySelector(".fb-submit-btn").addEventListener("click",t),r.addEventListener("keydown",n=>{n.key==="Enter"&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),t())}),De.querySelector(".fb-cancel-btn").addEventListener("click",()=>{De.style.display="none",As=null}),De.scrollIntoView({behavior:"smooth",block:"nearest"})}function zG(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function tr(e,r=new Set,t=new Map){RE=e,AE=r,Be.innerHTML="";let{topLevel:n,repliesByParent:i}=zG(e),o=n.slice().sort((s,f)=>{let v=t.get(s.id),p=t.get(f.id);return!v||!p?0:v.compareBoundaryPoints(Range.START_TO_START,p)}),u=o.filter(s=>{let f=r.has(s.id),v=s.status==="closed";return f||v&&Ls}),l=Ls?u:u.filter(s=>s.status!=="closed");if(o.length===0){Be.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let c=o.filter(s=>!r.has(s.id)&&s.status!=="closed").length;if(l.length===0){c>0?Be.innerHTML=`<div class="fb-empty">
        ${u.length} comment(s) resolved.
        ${c>0?`<br>${c} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:Be.innerHTML=`<div class="fb-empty">All ${o.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let s of l){let f=document.createElement("div");f.className="fb-thread",f.appendChild(kE(s,!1));let v=i.get(s.id)||[];for(let d of v)f.appendChild(kE(d,!0));let p=document.createElement("button");p.className="fb-reply-btn",p.textContent="Reply",p.addEventListener("click",d=>{d.stopPropagation(),YG(s.id,f,p)}),f.appendChild(p),Be.appendChild(f)}}function kE(e,r){let t=e.status==="closed",n=document.createElement("div");return n.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":""),n.dataset.id=e.id,n.innerHTML=`
    <div class="fb-cmt-body">${un(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${un(e.author)}</span>
      <span class="fb-cmt-time">${XG(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
  `,r||(n.addEventListener("click",i=>{i.target.closest(".fb-cmt-delete")||i.target.closest(".fb-cmt-resolve")||i.target.closest(".fb-cmt-edit")||(Bi(e.id),wE(e.id),Be.querySelectorAll(".fb-cmt-card").forEach(o=>o.classList.remove("fb-cmt-active")),n.classList.add("fb-cmt-active"))}),n.querySelector(".fb-cmt-resolve").addEventListener("click",i=>{i.stopPropagation(),Ms&&Ms(e.id,!t)})),n.querySelector(".fb-cmt-edit").addEventListener("click",i=>{i.stopPropagation(),JG(e,n)}),n.querySelector(".fb-cmt-delete").addEventListener("click",i=>{i.stopPropagation(),Ns&&Ns(e.id)}),n}function YG(e,r,t){sn();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let i=document.createElement("div");i.className="fb-reply-form",i.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!nt()){let c=Z.querySelector(".fb-name-input");c.focus(),c.style.outline="2px solid #ef4444",setTimeout(()=>c.style.outline="",2e3);return}let l=i.querySelector("textarea").value.trim();l&&(js&&js({parent_id:e,comment:l,commenter:nt()}),i.remove(),t.style.display="")};i.querySelector(".fb-reply-submit").addEventListener("click",o);let u=i.querySelector("textarea");u.addEventListener("keydown",l=>{l.key==="Enter"&&(l.metaKey||l.ctrlKey)&&(l.preventDefault(),o())}),i.querySelector(".fb-reply-cancel").addEventListener("click",()=>{i.remove(),t.style.display=""}),r.insertBefore(i,t),u.focus()}function JG(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${un(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let i=t.querySelector("textarea");i.focus(),i.setSelectionRange(i.value.length,i.value.length);let o=()=>{let u=i.value.trim();u&&$s&&$s(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),i.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function jE(e){let r=Be.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(Be.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function QG(e,r){return e.length>r?e.slice(0,r)+"...":e}function XG(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}function un(e){let r=document.createElement("div");return r.textContent=e,r.innerHTML}function ZG(){let e=document.createElement("style");e.textContent=`
    .fb-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: ${KG}px;
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
  `,document.head.appendChild(e)}var it=null,Gi=null,Ui=null,Y=[],Or=null,Ee=null,ye=new Set,Ge=new Map;function eU(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null};Bs(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{it=document.querySelector(r.contentSelector)||document.body,Gi=r.documentUri||window.location.origin+window.location.pathname,Ui=r.documentId||null,NE({onSubmit:aU,onDelete:cU,onResolve:oU,onReply:uU,onEdit:sU}),xE(i=>{sn(),jE(i),Bi(i)}),nU(),await t(),rU(),CE(r,()=>Y)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function rU(){try{Y=await Gs(Gi,Ui),ye=await tU(Y),tr(Y,ye,Ge)}catch(e){console.error("[feedback-layer] Failed to load comments:",e)}}async function tU(e){SE();let r=new Set;Ge.clear();for(let t of e)if(!t.parent)try{let n=await Fi({exact:t.quote,prefix:t.prefix,suffix:t.suffix},it);n&&t.status!=="closed"?(Di(n,t.id),r.add(t.id),Ge.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),Ge.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function nU(){document.addEventListener("mouseup",$E),document.addEventListener("keyup",$E)}function $E(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){cn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){cn();return}if(!it.contains(r.commonAncestorContainer)){cn();return}iU(r)},10)}function iU(e){cn();let r=e.getBoundingClientRect();Ee=document.createElement("button"),Ee.className="fb-annotate-tooltip",Ee.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',Ee.style.top=window.scrollY+r.top-36+"px",Ee.style.left=window.scrollX+r.left+r.width/2-40+"px",Ee.addEventListener("mousedown",async t=>{t.preventDefault(),t.stopPropagation();let n=window.getSelection();if(!n||n.isCollapsed)return;let i=n.getRangeAt(0);try{Or=await gE(i,it),ME(Or.exact)}catch(o){console.error("[feedback-layer] Failed to create selector:",o)}cn()}),document.body.appendChild(Ee)}function cn(){Ee&&(Ee.remove(),Ee=null)}async function aU({comment:e,commenter:r}){if(Or){try{let t=await Wi({uri:Gi,document:Ui,quote:Or.exact,prefix:Or.prefix,suffix:Or.suffix,body:e,author:r});Y.push(t);let n=await Fi({exact:t.quote,prefix:t.prefix,suffix:t.suffix},it);n&&(Di(n,t.id),ye.add(t.id)),tr(Y,ye,Ge),window.getSelection().removeAllRanges()}catch(t){console.error("[feedback-layer] Failed to create comment:",t),alert("Failed to save comment: "+t.message)}Or=null}}async function oU(e,r){try{let n=await Ws(e,r?"closed":"open"),i=Y.findIndex(o=>o.id===e);if(i!==-1&&(Y[i]=n),r)Rs(e);else{let o=n,u=await Fi({exact:o.quote,prefix:o.prefix,suffix:o.suffix},it);u?(Di(u,o.id),ye.add(o.id)):ye.delete(o.id)}tr(Y,ye,Ge)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t)}}async function uU({parent_id:e,comment:r,commenter:t}){try{let n=await Wi({uri:Gi,document:Ui,body:r,author:t,parent:e});Y.push(n),tr(Y,ye,Ge)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),alert("Failed to save reply: "+n.message)}}async function sU(e,r){try{let t=await Us(e,{body:r}),n=Y.findIndex(i=>i.id===e);n!==-1&&(Y[n]=t),tr(Y,ye,Ge)}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),alert("Failed to update comment: "+t.message)}}async function cU(e){try{await Hs(e),Rs(e),ye.delete(e),Y=Y.filter(r=>r.id!==e&&r.parent!==e),tr(Y,ye,Ge)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r)}}eU();})();
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
