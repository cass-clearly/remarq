var FeedbackLayer=(()=>{var UC=Object.create;var Ds=Object.defineProperty;var WC=Object.getOwnPropertyDescriptor;var HC=Object.getOwnPropertyNames;var KC=Object.getPrototypeOf,VC=Object.prototype.hasOwnProperty;var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var zC=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of HC(r))!VC.call(e,i)&&i!==t&&Ds(e,i,{get:()=>r[i],enumerable:!(n=WC(r,i))||n.enumerable});return e};var g=(e,r,t)=>(t=e!=null?UC(KC(e)):{},zC(r||!e||!e.__esModule?Ds(t,"default",{value:e,enumerable:!0}):t,e));var P=a((fU,Ks)=>{"use strict";Ks.exports=function(e){try{return!!e()}catch{return!0}}});var kr=a((pU,Vs)=>{"use strict";var YC=P();Vs.exports=!YC(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var A=a((vU,Js)=>{"use strict";var zs=kr(),Ys=Function.prototype,Hi=Ys.call,JC=zs&&Ys.bind.bind(Hi,Hi);Js.exports=zs?JC:function(e){return function(){return Hi.apply(e,arguments)}}});var B=a((dU,Qs)=>{"use strict";var QC=A();Qs.exports=QC({}.isPrototypeOf)});var _=a((Ki,Xs)=>{"use strict";var ot=function(e){return e&&e.Math===Math&&e};Xs.exports=ot(typeof globalThis=="object"&&globalThis)||ot(typeof window=="object"&&window)||ot(typeof self=="object"&&self)||ot(typeof global=="object"&&global)||ot(typeof Ki=="object"&&Ki)||function(){return this}()||Function("return this")()});var Pr=a((hU,tc)=>{"use strict";var XC=kr(),rc=Function.prototype,Zs=rc.apply,ec=rc.call;tc.exports=typeof Reflect=="object"&&Reflect.apply||(XC?ec.bind(Zs):function(){return ec.apply(Zs,arguments)})});var qe=a((mU,ic)=>{"use strict";var nc=A(),ZC=nc({}.toString),eE=nc("".slice);ic.exports=function(e){return eE(ZC(e),8,-1)}});var ut=a((yU,ac)=>{"use strict";var rE=qe(),tE=A();ac.exports=function(e){if(rE(e)==="Function")return tE(e)}});var N=a((gU,oc)=>{"use strict";var Vi=typeof document=="object"&&document.all;oc.exports=typeof Vi>"u"&&Vi!==void 0?function(e){return typeof e=="function"||e===Vi}:function(e){return typeof e=="function"}});var G=a((bU,uc)=>{"use strict";var nE=P();uc.exports=!nE(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var D=a((qU,sc)=>{"use strict";var iE=kr(),ln=Function.prototype.call;sc.exports=iE?ln.bind(ln):function(){return ln.apply(ln,arguments)}});var zi=a(fc=>{"use strict";var cc={}.propertyIsEnumerable,lc=Object.getOwnPropertyDescriptor,aE=lc&&!cc.call({1:2},1);fc.f=aE?function(r){var t=lc(this,r);return!!t&&t.enumerable}:cc});var We=a((SU,pc)=>{"use strict";pc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var fn=a((wU,vc)=>{"use strict";var oE=A(),uE=P(),sE=qe(),Yi=Object,cE=oE("".split);vc.exports=uE(function(){return!Yi("z").propertyIsEnumerable(0)})?function(e){return sE(e)==="String"?cE(e,""):Yi(e)}:Yi});var ir=a((TU,dc)=>{"use strict";dc.exports=function(e){return e==null}});var ar=a((OU,hc)=>{"use strict";var lE=ir(),fE=TypeError;hc.exports=function(e){if(lE(e))throw new fE("Can't call method on "+e);return e}});var Ee=a((CU,mc)=>{"use strict";var pE=fn(),vE=ar();mc.exports=function(e){return pE(vE(e))}});var $=a((EU,yc)=>{"use strict";var dE=N();yc.exports=function(e){return typeof e=="object"?e!==null:dE(e)}});var K=a((IU,gc)=>{"use strict";gc.exports={}});var U=a((kU,qc)=>{"use strict";var Ji=K(),Qi=_(),hE=N(),bc=function(e){return hE(e)?e:void 0};qc.exports=function(e,r){return arguments.length<2?bc(Ji[e])||bc(Qi[e]):Ji[e]&&Ji[e][r]||Qi[e]&&Qi[e][r]}});var _r=a((PU,wc)=>{"use strict";var mE=_(),xc=mE.navigator,Sc=xc&&xc.userAgent;wc.exports=Sc?String(Sc):""});var Rr=a((_U,kc)=>{"use strict";var Ic=_(),Xi=_r(),Tc=Ic.process,Oc=Ic.Deno,Cc=Tc&&Tc.versions||Oc&&Oc.version,Ec=Cc&&Cc.v8,de,pn;Ec&&(de=Ec.split("."),pn=de[0]>0&&de[0]<4?1:+(de[0]+de[1]));!pn&&Xi&&(de=Xi.match(/Edge\/(\d+)/),(!de||de[1]>=74)&&(de=Xi.match(/Chrome\/(\d+)/),de&&(pn=+de[1])));kc.exports=pn});var or=a((RU,_c)=>{"use strict";var Pc=Rr(),yE=P(),gE=_(),bE=gE.String;_c.exports=!!Object.getOwnPropertySymbols&&!yE(function(){var e=Symbol("symbol detection");return!bE(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Pc&&Pc<41})});var Zi=a((AU,Rc)=>{"use strict";var qE=or();Rc.exports=qE&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Ar=a((NU,Ac)=>{"use strict";var xE=U(),SE=N(),wE=B(),TE=Zi(),OE=Object;Ac.exports=TE?function(e){return typeof e=="symbol"}:function(e){var r=xE("Symbol");return SE(r)&&wE(r.prototype,OE(e))}});var He=a((MU,Nc)=>{"use strict";var CE=String;Nc.exports=function(e){try{return CE(e)}catch{return"Object"}}});var F=a((jU,Mc)=>{"use strict";var EE=N(),IE=He(),kE=TypeError;Mc.exports=function(e){if(EE(e))return e;throw new kE(IE(e)+" is not a function")}});var vn=a(($U,jc)=>{"use strict";var PE=F(),_E=ir();jc.exports=function(e,r){var t=e[r];return _E(t)?void 0:PE(t)}});var Lc=a((LU,$c)=>{"use strict";var ea=D(),ra=N(),ta=$(),RE=TypeError;$c.exports=function(e,r){var t,n;if(r==="string"&&ra(t=e.toString)&&!ta(n=ea(t,e))||ra(t=e.valueOf)&&!ta(n=ea(t,e))||r!=="string"&&ra(t=e.toString)&&!ta(n=ea(t,e)))return n;throw new RE("Can't convert object to primitive value")}});var X=a((FU,Fc)=>{"use strict";Fc.exports=!0});var Gc=a((DU,Bc)=>{"use strict";var Dc=_(),AE=Object.defineProperty;Bc.exports=function(e,r){try{AE(Dc,e,{value:r,configurable:!0,writable:!0})}catch{Dc[e]=r}return r}});var st=a((BU,Hc)=>{"use strict";var NE=X(),ME=_(),jE=Gc(),Uc="__core-js_shared__",Wc=Hc.exports=ME[Uc]||jE(Uc,{});(Wc.versions||(Wc.versions=[])).push({version:"3.48.0",mode:NE?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var ur=a((GU,Vc)=>{"use strict";var Kc=st();Vc.exports=function(e,r){return Kc[e]||(Kc[e]=r||{})}});var re=a((UU,zc)=>{"use strict";var $E=ar(),LE=Object;zc.exports=function(e){return LE($E(e))}});var W=a((WU,Yc)=>{"use strict";var FE=A(),DE=re(),BE=FE({}.hasOwnProperty);Yc.exports=Object.hasOwn||function(r,t){return BE(DE(r),t)}});var Nr=a((HU,Jc)=>{"use strict";var GE=A(),UE=0,WE=Math.random(),HE=GE(1.1.toString);Jc.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+HE(++UE+WE,36)}});var R=a((KU,Xc)=>{"use strict";var KE=_(),VE=ur(),Qc=W(),zE=Nr(),YE=or(),JE=Zi(),Mr=KE.Symbol,na=VE("wks"),QE=JE?Mr.for||Mr:Mr&&Mr.withoutSetter||zE;Xc.exports=function(e){return Qc(na,e)||(na[e]=YE&&Qc(Mr,e)?Mr[e]:QE("Symbol."+e)),na[e]}});var tl=a((VU,rl)=>{"use strict";var XE=D(),Zc=$(),el=Ar(),ZE=vn(),eI=Lc(),rI=R(),tI=TypeError,nI=rI("toPrimitive");rl.exports=function(e,r){if(!Zc(e)||el(e))return e;var t=ZE(e,nI),n;if(t){if(r===void 0&&(r="default"),n=XE(t,e,r),!Zc(n)||el(n))return n;throw new tI("Can't convert object to primitive value")}return r===void 0&&(r="number"),eI(e,r)}});var dn=a((zU,nl)=>{"use strict";var iI=tl(),aI=Ar();nl.exports=function(e){var r=iI(e,"string");return aI(r)?r:r+""}});var hn=a((YU,al)=>{"use strict";var oI=_(),il=$(),ia=oI.document,uI=il(ia)&&il(ia.createElement);al.exports=function(e){return uI?ia.createElement(e):{}}});var aa=a((JU,ol)=>{"use strict";var sI=G(),cI=P(),lI=hn();ol.exports=!sI&&!cI(function(){return Object.defineProperty(lI("div"),"a",{get:function(){return 7}}).a!==7})});var ct=a(sl=>{"use strict";var fI=G(),pI=D(),vI=zi(),dI=We(),hI=Ee(),mI=dn(),yI=W(),gI=aa(),ul=Object.getOwnPropertyDescriptor;sl.f=fI?ul:function(r,t){if(r=hI(r),t=mI(t),gI)try{return ul(r,t)}catch{}if(yI(r,t))return dI(!pI(vI.f,r,t),r[t])}});var oa=a((XU,cl)=>{"use strict";var bI=P(),qI=N(),xI=/#|\.prototype\./,lt=function(e,r){var t=wI[SI(e)];return t===OI?!0:t===TI?!1:qI(r)?bI(r):!!r},SI=lt.normalize=function(e){return String(e).replace(xI,".").toLowerCase()},wI=lt.data={},TI=lt.NATIVE="N",OI=lt.POLYFILL="P";cl.exports=lt});var V=a((ZU,fl)=>{"use strict";var ll=ut(),CI=F(),EI=kr(),II=ll(ll.bind);fl.exports=function(e,r){return CI(e),r===void 0?e:EI?II(e,r):function(){return e.apply(r,arguments)}}});var ua=a((eW,pl)=>{"use strict";var kI=G(),PI=P();pl.exports=kI&&PI(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var Q=a((rW,vl)=>{"use strict";var _I=$(),RI=String,AI=TypeError;vl.exports=function(e){if(_I(e))return e;throw new AI(RI(e)+" is not an object")}});var te=a(hl=>{"use strict";var NI=G(),MI=aa(),jI=ua(),mn=Q(),dl=dn(),$I=TypeError,sa=Object.defineProperty,LI=Object.getOwnPropertyDescriptor,ca="enumerable",la="configurable",fa="writable";hl.f=NI?jI?function(r,t,n){if(mn(r),t=dl(t),mn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&fa in n&&!n[fa]){var i=LI(r,t);i&&i[fa]&&(r[t]=n.value,n={configurable:la in n?n[la]:i[la],enumerable:ca in n?n[ca]:i[ca],writable:!1})}return sa(r,t,n)}:sa:function(r,t,n){if(mn(r),t=dl(t),mn(n),MI)try{return sa(r,t,n)}catch{}if("get"in n||"set"in n)throw new $I("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var xe=a((nW,ml)=>{"use strict";var FI=G(),DI=te(),BI=We();ml.exports=FI?function(e,r,t){return DI.f(e,r,BI(1,t))}:function(e,r,t){return e[r]=t,e}});var x=a((iW,gl)=>{"use strict";var ft=_(),GI=Pr(),UI=ut(),WI=N(),HI=ct().f,KI=oa(),jr=K(),VI=V(),$r=xe(),yl=W();st();var zI=function(e){var r=function(t,n,i){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return GI(e,this,arguments)};return r.prototype=e.prototype,r};gl.exports=function(e,r){var t=e.target,n=e.global,i=e.stat,o=e.proto,u=n?ft:i?ft[t]:ft[t]&&ft[t].prototype,l=n?jr:jr[t]||$r(jr,t,{})[t],c=l.prototype,s,f,p,v,d,m,h,y,q;for(v in r)s=KI(n?v:t+(i?".":"#")+v,e.forced),f=!s&&u&&yl(u,v),m=l[v],f&&(e.dontCallGetSet?(q=HI(u,v),h=q&&q.value):h=u[v]),d=f&&h?h:r[v],!(!s&&!o&&typeof m==typeof d)&&(e.bind&&f?y=VI(d,ft):e.wrap&&f?y=zI(d):o&&WI(d)?y=UI(d):y=d,(e.sham||d&&d.sham||m&&m.sham)&&$r(y,"sham",!0),$r(l,v,y),o&&(p=t+"Prototype",yl(jr,p)||$r(jr,p,{}),$r(jr[p],v,d),e.real&&c&&(s||!c[v])&&$r(c,v,d)))}});var Ie=a((aW,bl)=>{"use strict";var YI=qe();bl.exports=Array.isArray||function(r){return YI(r)==="Array"}});var yn=a((oW,xl)=>{"use strict";var JI=R(),QI=JI("toStringTag"),ql={};ql[QI]="z";xl.exports=String(ql)==="[object z]"});var pt=a((uW,Sl)=>{"use strict";var XI=yn(),ZI=N(),gn=qe(),e0=R(),r0=e0("toStringTag"),t0=Object,n0=gn(function(){return arguments}())==="Arguments",i0=function(e,r){try{return e[r]}catch{}};Sl.exports=XI?gn:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=i0(r=t0(e),r0))=="string"?t:n0?gn(r):(n=gn(r))==="Object"&&ZI(r.callee)?"Arguments":n}});var va=a((sW,wl)=>{"use strict";var a0=A(),o0=N(),pa=st(),u0=a0(Function.toString);o0(pa.inspectSource)||(pa.inspectSource=function(e){return u0(e)});wl.exports=pa.inspectSource});var dt=a((cW,Il)=>{"use strict";var s0=A(),c0=P(),Tl=N(),l0=pt(),f0=U(),p0=va(),Ol=function(){},Cl=f0("Reflect","construct"),da=/^\s*(?:class|function)\b/,v0=s0(da.exec),d0=!da.test(Ol),vt=function(r){if(!Tl(r))return!1;try{return Cl(Ol,[],r),!0}catch{return!1}},El=function(r){if(!Tl(r))return!1;switch(l0(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return d0||!!v0(da,p0(r))}catch{return!0}};El.sham=!0;Il.exports=!Cl||c0(function(){var e;return vt(vt.call)||!vt(Object)||!vt(function(){e=!0})||e})?El:vt});var Pl=a((lW,kl)=>{"use strict";var h0=Math.ceil,m0=Math.floor;kl.exports=Math.trunc||function(r){var t=+r;return(t>0?m0:h0)(t)}});var bn=a((fW,_l)=>{"use strict";var y0=Pl();_l.exports=function(e){var r=+e;return r!==r||r===0?0:y0(r)}});var ha=a((pW,Rl)=>{"use strict";var g0=bn(),b0=Math.max,q0=Math.min;Rl.exports=function(e,r){var t=g0(e);return t<0?b0(t+r,0):q0(t,r)}});var ma=a((vW,Al)=>{"use strict";var x0=bn(),S0=Math.min;Al.exports=function(e){var r=x0(e);return r>0?S0(r,9007199254740991):0}});var le=a((dW,Nl)=>{"use strict";var w0=ma();Nl.exports=function(e){return w0(e.length)}});var Lr=a((hW,Ml)=>{"use strict";var T0=G(),O0=te(),C0=We();Ml.exports=function(e,r,t){T0?O0.f(e,r,C0(0,t)):e[r]=t}});var Fr=a((mW,jl)=>{"use strict";var E0=G(),I0=Ie(),k0=TypeError,P0=Object.getOwnPropertyDescriptor,_0=E0&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();jl.exports=_0?function(e,r){if(I0(e)&&!P0(e,"length").writable)throw new k0("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var ht=a((yW,$l)=>{"use strict";var R0=P(),A0=R(),N0=Rr(),M0=A0("species");$l.exports=function(e){return N0>=51||!R0(function(){var r=[],t=r.constructor={};return t[M0]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var sr=a((gW,Ll)=>{"use strict";var j0=A();Ll.exports=j0([].slice)});var Bl=a(()=>{"use strict";var $0=x(),Fl=Ie(),L0=dt(),F0=$(),Dl=ha(),D0=le(),B0=Ee(),G0=Lr(),U0=Fr(),W0=R(),H0=ht(),K0=sr(),V0=H0("slice"),z0=W0("species"),ya=Array,Y0=Math.max;$0({target:"Array",proto:!0,forced:!V0},{slice:function(r,t){var n=B0(this),i=D0(n),o=Dl(r,i),u=Dl(t===void 0?i:t,i),l,c,s;if(Fl(n)&&(l=n.constructor,L0(l)&&(l===ya||Fl(l.prototype))?l=void 0:F0(l)&&(l=l[z0],l===null&&(l=void 0)),l===ya||l===void 0))return K0(n,o,u);for(c=new(l===void 0?ya:l)(Y0(u-o,0)),s=0;o<u;o++,s++)o in n&&G0(c,s,n[o]);return U0(c,s),c}})});var oe=a((xW,Gl)=>{"use strict";var J0=_(),Q0=K();Gl.exports=function(e,r){var t=Q0[e+"Prototype"],n=t&&t[r];if(n)return n;var i=J0[e],o=i&&i.prototype;return o&&o[r]}});var Wl=a((SW,Ul)=>{"use strict";Bl();var X0=oe();Ul.exports=X0("Array","slice")});var Kl=a((wW,Hl)=>{"use strict";var Z0=B(),ek=Wl(),ga=Array.prototype;Hl.exports=function(e){var r=e.slice;return e===ga||Z0(ga,e)&&r===ga.slice?ek:r}});var zl=a((TW,Vl)=>{"use strict";var rk=Kl();Vl.exports=rk});var Jl=a((OW,Yl)=>{"use strict";var tk=zl();Yl.exports=tk});var Xl=a((CW,Ql)=>{"use strict";var nk=Jl();Ql.exports=nk});var ba=a((EW,Zl)=>{"use strict";Zl.exports=Xl()});var Dr=a((IW,ef)=>{ef.exports=ba()});var Ke=a((kW,rf)=>{"use strict";var ik=pt(),ak=String;rf.exports=function(e){if(ik(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return ak(e)}});var of=a((PW,af)=>{"use strict";var qa=A(),ok=bn(),uk=Ke(),sk=ar(),ck=qa("".charAt),tf=qa("".charCodeAt),lk=qa("".slice),nf=function(e){return function(r,t){var n=uk(sk(r)),i=ok(t),o=n.length,u,l;return i<0||i>=o?e?"":void 0:(u=tf(n,i),u<55296||u>56319||i+1===o||(l=tf(n,i+1))<56320||l>57343?e?ck(n,i):u:e?lk(n,i,i+2):(u-55296<<10)+(l-56320)+65536)}};af.exports={codeAt:nf(!1),charAt:nf(!0)}});var cf=a((_W,sf)=>{"use strict";var fk=_(),pk=N(),uf=fk.WeakMap;sf.exports=pk(uf)&&/native code/.test(String(uf))});var mt=a((RW,ff)=>{"use strict";var vk=ur(),dk=Nr(),lf=vk("keys");ff.exports=function(e){return lf[e]||(lf[e]=dk(e))}});var Br=a((AW,pf)=>{"use strict";pf.exports={}});var Ve=a((NW,hf)=>{"use strict";var hk=cf(),df=_(),mk=$(),yk=xe(),xa=W(),Sa=st(),gk=mt(),bk=Br(),vf="Object already initialized",wa=df.TypeError,qk=df.WeakMap,qn,yt,xn,xk=function(e){return xn(e)?yt(e):qn(e,{})},Sk=function(e){return function(r){var t;if(!mk(r)||(t=yt(r)).type!==e)throw new wa("Incompatible receiver, "+e+" required");return t}};hk||Sa.state?(he=Sa.state||(Sa.state=new qk),he.get=he.get,he.has=he.has,he.set=he.set,qn=function(e,r){if(he.has(e))throw new wa(vf);return r.facade=e,he.set(e,r),r},yt=function(e){return he.get(e)||{}},xn=function(e){return he.has(e)}):(cr=gk("state"),bk[cr]=!0,qn=function(e,r){if(xa(e,cr))throw new wa(vf);return r.facade=e,yk(e,cr,r),r},yt=function(e){return xa(e,cr)?e[cr]:{}},xn=function(e){return xa(e,cr)});var he,cr;hf.exports={set:qn,get:yt,has:xn,enforce:xk,getterFor:Sk}});var gf=a((MW,yf)=>{"use strict";var Ta=G(),wk=W(),mf=Function.prototype,Tk=Ta&&Object.getOwnPropertyDescriptor,Oa=wk(mf,"name"),Ok=Oa&&function(){}.name==="something",Ck=Oa&&(!Ta||Ta&&Tk(mf,"name").configurable);yf.exports={EXISTS:Oa,PROPER:Ok,CONFIGURABLE:Ck}});var Ca=a((jW,qf)=>{"use strict";var Ek=Ee(),Ik=ha(),kk=le(),bf=function(e){return function(r,t,n){var i=Ek(r),o=kk(i);if(o===0)return!e&&-1;var u=Ik(n,o),l;if(e&&t!==t){for(;o>u;)if(l=i[u++],l!==l)return!0}else for(;o>u;u++)if((e||u in i)&&i[u]===t)return e||u||0;return!e&&-1}};qf.exports={includes:bf(!0),indexOf:bf(!1)}});var Ia=a(($W,Sf)=>{"use strict";var Pk=A(),Ea=W(),_k=Ee(),Rk=Ca().indexOf,Ak=Br(),xf=Pk([].push);Sf.exports=function(e,r){var t=_k(e),n=0,i=[],o;for(o in t)!Ea(Ak,o)&&Ea(t,o)&&xf(i,o);for(;r.length>n;)Ea(t,o=r[n++])&&(~Rk(i,o)||xf(i,o));return i}});var Sn=a((LW,wf)=>{"use strict";wf.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var wn=a((FW,Tf)=>{"use strict";var Nk=Ia(),Mk=Sn();Tf.exports=Object.keys||function(r){return Nk(r,Mk)}});var ka=a(Of=>{"use strict";var jk=G(),$k=ua(),Lk=te(),Fk=Q(),Dk=Ee(),Bk=wn();Of.f=jk&&!$k?Object.defineProperties:function(r,t){Fk(r);for(var n=Dk(t),i=Bk(t),o=i.length,u=0,l;o>u;)Lk.f(r,l=i[u++],n[l]);return r}});var Pa=a((BW,Cf)=>{"use strict";var Gk=U();Cf.exports=Gk("document","documentElement")});var ze=a((GW,Af)=>{"use strict";var Uk=Q(),Wk=ka(),Ef=Sn(),Hk=Br(),Kk=Pa(),Vk=hn(),zk=mt(),If=">",kf="<",Ra="prototype",Aa="script",_f=zk("IE_PROTO"),_a=function(){},Rf=function(e){return kf+Aa+If+e+kf+"/"+Aa+If},Pf=function(e){e.write(Rf("")),e.close();var r=e.parentWindow.Object;return e=null,r},Yk=function(){var e=Vk("iframe"),r="java"+Aa+":",t;return e.style.display="none",Kk.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(Rf("document.F=Object")),t.close(),t.F},Tn,On=function(){try{Tn=new ActiveXObject("htmlfile")}catch{}On=typeof document<"u"?document.domain&&Tn?Pf(Tn):Yk():Pf(Tn);for(var e=Ef.length;e--;)delete On[Ra][Ef[e]];return On()};Hk[_f]=!0;Af.exports=Object.create||function(r,t){var n;return r!==null?(_a[Ra]=Uk(r),n=new _a,_a[Ra]=null,n[_f]=r):n=On(),t===void 0?n:Wk.f(n,t)}});var Na=a((UW,Nf)=>{"use strict";var Jk=P();Nf.exports=!Jk(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var gt=a((WW,jf)=>{"use strict";var Qk=W(),Xk=N(),Zk=re(),eP=mt(),rP=Na(),Mf=eP("IE_PROTO"),Ma=Object,tP=Ma.prototype;jf.exports=rP?Ma.getPrototypeOf:function(e){var r=Zk(e);if(Qk(r,Mf))return r[Mf];var t=r.constructor;return Xk(t)&&r instanceof t?t.prototype:r instanceof Ma?tP:null}});var ke=a((HW,$f)=>{"use strict";var nP=xe();$f.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:nP(e,r,t),e}});var Fa=a((KW,Df)=>{"use strict";var iP=P(),aP=N(),oP=$(),uP=ze(),Lf=gt(),sP=ke(),cP=R(),lP=X(),La=cP("iterator"),Ff=!1,Pe,ja,$a;[].keys&&($a=[].keys(),"next"in $a?(ja=Lf(Lf($a)),ja!==Object.prototype&&(Pe=ja)):Ff=!0);var fP=!oP(Pe)||iP(function(){var e={};return Pe[La].call(e)!==e});fP?Pe={}:lP&&(Pe=uP(Pe));aP(Pe[La])||sP(Pe,La,function(){return this});Df.exports={IteratorPrototype:Pe,BUGGY_SAFARI_ITERATORS:Ff}});var Gf=a((VW,Bf)=>{"use strict";var pP=yn(),vP=pt();Bf.exports=pP?{}.toString:function(){return"[object "+vP(this)+"]"}});var _e=a((zW,Wf)=>{"use strict";var dP=yn(),hP=te().f,mP=xe(),yP=W(),gP=Gf(),bP=R(),Uf=bP("toStringTag");Wf.exports=function(e,r,t,n){var i=t?e:e&&e.prototype;i&&(yP(i,Uf)||hP(i,Uf,{configurable:!0,value:r}),n&&!dP&&mP(i,"toString",gP))}});var lr=a((YW,Hf)=>{"use strict";Hf.exports={}});var Vf=a((JW,Kf)=>{"use strict";var qP=Fa().IteratorPrototype,xP=ze(),SP=We(),wP=_e(),TP=lr(),OP=function(){return this};Kf.exports=function(e,r,t,n){var i=r+" Iterator";return e.prototype=xP(qP,{next:SP(+!n,t)}),wP(e,i,!1,!0),TP[i]=OP,e}});var Yf=a((QW,zf)=>{"use strict";var CP=A(),EP=F();zf.exports=function(e,r,t){try{return CP(EP(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var Qf=a((XW,Jf)=>{"use strict";var IP=$();Jf.exports=function(e){return IP(e)||e===null}});var Zf=a((ZW,Xf)=>{"use strict";var kP=Qf(),PP=String,_P=TypeError;Xf.exports=function(e){if(kP(e))return e;throw new _P("Can't set "+PP(e)+" as a prototype")}});var bt=a((e5,ep)=>{"use strict";var RP=Yf(),AP=$(),NP=ar(),MP=Zf();ep.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=RP(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(i,o){return NP(i),MP(o),AP(i)&&(e?t(i,o):i.__proto__=o),i}}():void 0)});var In=a((r5,lp)=>{"use strict";var jP=x(),$P=D(),Cn=X(),sp=gf(),LP=N(),FP=Vf(),rp=gt(),tp=bt(),DP=_e(),BP=xe(),Da=ke(),GP=R(),np=lr(),cp=Fa(),UP=sp.PROPER,WP=sp.CONFIGURABLE,ip=cp.IteratorPrototype,En=cp.BUGGY_SAFARI_ITERATORS,qt=GP("iterator"),ap="keys",xt="values",op="entries",up=function(){return this};lp.exports=function(e,r,t,n,i,o,u){FP(t,r,n);var l=function(q){if(q===i&&v)return v;if(!En&&q&&q in f)return f[q];switch(q){case ap:return function(){return new t(this,q)};case xt:return function(){return new t(this,q)};case op:return function(){return new t(this,q)}}return function(){return new t(this)}},c=r+" Iterator",s=!1,f=e.prototype,p=f[qt]||f["@@iterator"]||i&&f[i],v=!En&&p||l(i),d=r==="Array"&&f.entries||p,m,h,y;if(d&&(m=rp(d.call(new e)),m!==Object.prototype&&m.next&&(!Cn&&rp(m)!==ip&&(tp?tp(m,ip):LP(m[qt])||Da(m,qt,up)),DP(m,c,!0,!0),Cn&&(np[c]=up))),UP&&i===xt&&p&&p.name!==xt&&(!Cn&&WP?BP(f,"name",xt):(s=!0,v=function(){return $P(p,this)})),i)if(h={values:l(xt),keys:o?v:l(ap),entries:l(op)},u)for(y in h)(En||s||!(y in f))&&Da(f,y,h[y]);else jP({target:r,proto:!0,forced:En||s},h);return(!Cn||u)&&f[qt]!==v&&Da(f,qt,v,{name:i}),np[r]=v,h}});var kn=a((t5,fp)=>{"use strict";fp.exports=function(e,r){return{value:e,done:r}}});var fr=a(()=>{"use strict";var HP=of().charAt,KP=Ke(),vp=Ve(),VP=In(),pp=kn(),dp="String Iterator",zP=vp.set,YP=vp.getterFor(dp);VP(String,"String",function(e){zP(this,{type:dp,string:KP(e),index:0})},function(){var r=YP(this),t=r.string,n=r.index,i;return n>=t.length?pp(void 0,!0):(i=HP(t,n),r.index+=i.length,pp(i,!1))})});var Ba=a((a5,mp)=>{"use strict";var JP=D(),hp=Q(),QP=vn();mp.exports=function(e,r,t){var n,i;hp(e);try{if(n=QP(e,"return"),!n){if(r==="throw")throw t;return t}n=JP(n,e)}catch(o){i=!0,n=o}if(r==="throw")throw t;if(i)throw n;return hp(n),t}});var gp=a((o5,yp)=>{"use strict";var XP=Q(),ZP=Ba();yp.exports=function(e,r,t,n){try{return n?r(XP(t)[0],t[1]):r(t)}catch(i){ZP(e,"throw",i)}}});var Ga=a((u5,bp)=>{"use strict";var e_=R(),r_=lr(),t_=e_("iterator"),n_=Array.prototype;bp.exports=function(e){return e!==void 0&&(r_.Array===e||n_[t_]===e)}});var St=a((s5,xp)=>{"use strict";var i_=pt(),qp=vn(),a_=ir(),o_=lr(),u_=R(),s_=u_("iterator");xp.exports=function(e){if(!a_(e))return qp(e,s_)||qp(e,"@@iterator")||o_[i_(e)]}});var Pn=a((c5,Sp)=>{"use strict";var c_=D(),l_=F(),f_=Q(),p_=He(),v_=St(),d_=TypeError;Sp.exports=function(e,r){var t=arguments.length<2?v_(e):r;if(l_(t))return f_(c_(t,e));throw new d_(p_(e)+" is not iterable")}});var Cp=a((l5,Op)=>{"use strict";var h_=V(),m_=D(),y_=re(),g_=gp(),b_=Ga(),q_=dt(),x_=le(),wp=Lr(),S_=Fr(),w_=Pn(),T_=St(),Tp=Array;Op.exports=function(r){var t=y_(r),n=q_(this),i=arguments.length,o=i>1?arguments[1]:void 0,u=o!==void 0;u&&(o=h_(o,i>2?arguments[2]:void 0));var l=T_(t),c=0,s,f,p,v,d,m;if(l&&!(this===Tp&&b_(l)))for(f=n?new this:[],v=w_(t,l),d=v.next;!(p=m_(d,v)).done;c++)m=u?g_(v,o,[p.value,c],!0):p.value,wp(f,c,m);else for(s=x_(t),f=n?new this(s):Tp(s);s>c;c++)m=u?o(t[c],c):t[c],wp(f,c,m);return S_(f,c),f}});var Wa=a((f5,Pp)=>{"use strict";var O_=R(),Ip=O_("iterator"),kp=!1;try{Ep=0,Ua={next:function(){return{done:!!Ep++}},return:function(){kp=!0}},Ua[Ip]=function(){return this},Array.from(Ua,function(){throw 2})}catch{}var Ep,Ua;Pp.exports=function(e,r){try{if(!r&&!kp)return!1}catch{return!1}var t=!1;try{var n={};n[Ip]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var _p=a(()=>{"use strict";var C_=x(),E_=Cp(),I_=Wa(),k_=!I_(function(e){Array.from(e)});C_({target:"Array",stat:!0,forced:k_},{from:E_})});var Ap=a((d5,Rp)=>{"use strict";fr();_p();var P_=K();Rp.exports=P_.Array.from});var Mp=a((h5,Np)=>{"use strict";var __=Ap();Np.exports=__});var $p=a((m5,jp)=>{"use strict";var R_=Mp();jp.exports=R_});var Fp=a((y5,Lp)=>{"use strict";var A_=$p();Lp.exports=A_});var Ha=a((g5,Dp)=>{"use strict";Dp.exports=Fp()});var _n=a((b5,Bp)=>{Bp.exports=Ha()});var wt=a((q5,Gp)=>{"use strict";var N_=TypeError,M_=9007199254740991;Gp.exports=function(e){if(e>M_)throw N_("Maximum allowed index exceeded");return e}});var Kp=a((x5,Hp)=>{"use strict";var Up=Ie(),j_=dt(),$_=$(),L_=R(),F_=L_("species"),Wp=Array;Hp.exports=function(e){var r;return Up(e)&&(r=e.constructor,j_(r)&&(r===Wp||Up(r.prototype))?r=void 0:$_(r)&&(r=r[F_],r===null&&(r=void 0))),r===void 0?Wp:r}});var Rn=a((S5,Vp)=>{"use strict";var D_=Kp();Vp.exports=function(e,r){return new(D_(e))(r===0?0:r)}});var Ka=a(()=>{"use strict";var B_=x(),G_=P(),U_=Ie(),W_=$(),H_=re(),K_=le(),zp=wt(),Yp=Lr(),V_=Fr(),z_=Rn(),Y_=ht(),J_=R(),Q_=Rr(),Jp=J_("isConcatSpreadable"),X_=Q_>=51||!G_(function(){var e=[];return e[Jp]=!1,e.concat()[0]!==e}),Z_=function(e){if(!W_(e))return!1;var r=e[Jp];return r!==void 0?!!r:U_(e)},e1=!X_||!Y_("concat");B_({target:"Array",proto:!0,arity:1,forced:e1},{concat:function(r){var t=H_(this),n=z_(t,0),i=0,o,u,l,c,s;for(o=-1,l=arguments.length;o<l;o++)if(s=o===-1?t:arguments[o],Z_(s))for(c=K_(s),zp(i+c),u=0;u<c;u++,i++)u in s&&Yp(n,i,s[u]);else zp(i+1),Yp(n,i++,s);return V_(n,i),n}})});var Tt=a(()=>{});var Ot=a(Qp=>{"use strict";var r1=Ia(),t1=Sn(),n1=t1.concat("length","prototype");Qp.f=Object.getOwnPropertyNames||function(r){return r1(r,n1)}});var Va=a((I5,ev)=>{"use strict";var i1=qe(),a1=Ee(),Xp=Ot().f,o1=sr(),Zp=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u1=function(e){try{return Xp(e)}catch{return o1(Zp)}};ev.exports.f=function(r){return Zp&&i1(r)==="Window"?u1(r):Xp(a1(r))}});var An=a(rv=>{"use strict";rv.f=Object.getOwnPropertySymbols});var Nn=a((P5,tv)=>{"use strict";var s1=te();tv.exports=function(e,r,t){return s1.f(e,r,t)}});var Gr=a(nv=>{"use strict";var c1=R();nv.f=c1});var M=a((R5,av)=>{"use strict";var iv=K(),l1=W(),f1=Gr(),p1=te().f;av.exports=function(e){var r=iv.Symbol||(iv.Symbol={});l1(r,e)||p1(r,e,{value:f1.f(e)})}});var za=a((A5,ov)=>{"use strict";var v1=D(),d1=U(),h1=R(),m1=ke();ov.exports=function(){var e=d1("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=h1("toPrimitive");r&&!r[n]&&m1(r,n,function(i){return v1(t,this)},{arity:1})}});var Ct=a((N5,sv)=>{"use strict";var y1=V(),g1=fn(),b1=re(),q1=le(),uv=Rn(),Ya=Lr(),Ye=function(e){var r=e===1,t=e===2,n=e===3,i=e===4,o=e===6,u=e===7,l=e===5||o;return function(c,s,f){for(var p=b1(c),v=g1(p),d=q1(v),m=y1(s,f),h=0,y=0,q=r?uv(c,d):t||u?uv(c,0):void 0,b,I;d>h;h++)if((l||h in v)&&(b=v[h],I=m(b,h,p),e))if(r)Ya(q,h,I);else if(I)switch(e){case 3:return!0;case 5:return b;case 6:return h;case 2:Ya(q,y++,b)}else switch(e){case 4:return!1;case 7:Ya(q,y++,b)}return o?-1:n||i?i:q}};sv.exports={forEach:Ye(0),map:Ye(1),filter:Ye(2),some:Ye(3),every:Ye(4),find:Ye(5),findIndex:Ye(6),filterReject:Ye(7)}});var Ov=a(()=>{"use strict";var Mn=x(),kt=_(),io=D(),x1=A(),S1=X(),Ur=G(),Wr=or(),w1=P(),H=W(),T1=B(),Za=Q(),jn=Ee(),ao=dn(),O1=Ke(),eo=We(),Hr=ze(),fv=wn(),C1=Ot(),pv=Va(),E1=An(),vv=ct(),dv=te(),I1=ka(),hv=zi(),Ja=ke(),k1=Nn(),oo=ur(),P1=mt(),mv=Br(),cv=Nr(),_1=R(),R1=Gr(),A1=M(),N1=za(),M1=_e(),yv=Ve(),$n=Ct().forEach,ne=P1("hidden"),Ln="Symbol",It="prototype",j1=yv.set,lv=yv.getterFor(Ln),fe=Object[It],pr=kt.Symbol,Et=pr&&pr[It],$1=kt.RangeError,L1=kt.TypeError,Qa=kt.QObject,gv=vv.f,vr=dv.f,bv=pv.f,F1=hv.f,qv=x1([].push),Re=oo("symbols"),Pt=oo("op-symbols"),D1=oo("wks"),ro=!Qa||!Qa[It]||!Qa[It].findChild,xv=function(e,r,t){var n=gv(fe,r);n&&delete fe[r],vr(e,r,t),n&&e!==fe&&vr(fe,r,n)},to=Ur&&w1(function(){return Hr(vr({},"a",{get:function(){return vr(this,"a",{value:7}).a}})).a!==7})?xv:vr,Xa=function(e,r){var t=Re[e]=Hr(Et);return j1(t,{type:Ln,tag:e,description:r}),Ur||(t.description=r),t},Fn=function(r,t,n){r===fe&&Fn(Pt,t,n),Za(r);var i=ao(t);return Za(n),H(Re,i)?(n.enumerable?(H(r,ne)&&r[ne][i]&&(r[ne][i]=!1),n=Hr(n,{enumerable:eo(0,!1)})):(H(r,ne)||vr(r,ne,eo(1,Hr(null))),r[ne][i]=!0),to(r,i,n)):vr(r,i,n)},uo=function(r,t){Za(r);var n=jn(t),i=fv(n).concat(Tv(n));return $n(i,function(o){(!Ur||io(no,n,o))&&Fn(r,o,n[o])}),r},B1=function(r,t){return t===void 0?Hr(r):uo(Hr(r),t)},no=function(r){var t=ao(r),n=io(F1,this,t);return this===fe&&H(Re,t)&&!H(Pt,t)?!1:n||!H(this,t)||!H(Re,t)||H(this,ne)&&this[ne][t]?n:!0},Sv=function(r,t){var n=jn(r),i=ao(t);if(!(n===fe&&H(Re,i)&&!H(Pt,i))){var o=gv(n,i);return o&&H(Re,i)&&!(H(n,ne)&&n[ne][i])&&(o.enumerable=!0),o}},wv=function(r){var t=bv(jn(r)),n=[];return $n(t,function(i){!H(Re,i)&&!H(mv,i)&&qv(n,i)}),n},Tv=function(e){var r=e===fe,t=bv(r?Pt:jn(e)),n=[];return $n(t,function(i){H(Re,i)&&(!r||H(fe,i))&&qv(n,Re[i])}),n};Wr||(pr=function(){if(T1(Et,this))throw new L1("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:O1(arguments[0]),t=cv(r),n=function(i){var o=this===void 0?kt:this;o===fe&&io(n,Pt,i),H(o,ne)&&H(o[ne],t)&&(o[ne][t]=!1);var u=eo(1,i);try{to(o,t,u)}catch(l){if(!(l instanceof $1))throw l;xv(o,t,u)}};return Ur&&ro&&to(fe,t,{configurable:!0,set:n}),Xa(t,r)},Et=pr[It],Ja(Et,"toString",function(){return lv(this).tag}),Ja(pr,"withoutSetter",function(e){return Xa(cv(e),e)}),hv.f=no,dv.f=Fn,I1.f=uo,vv.f=Sv,C1.f=pv.f=wv,E1.f=Tv,R1.f=function(e){return Xa(_1(e),e)},Ur&&(k1(Et,"description",{configurable:!0,get:function(){return lv(this).description}}),S1||Ja(fe,"propertyIsEnumerable",no,{unsafe:!0})));Mn({global:!0,constructor:!0,wrap:!0,forced:!Wr,sham:!Wr},{Symbol:pr});$n(fv(D1),function(e){A1(e)});Mn({target:Ln,stat:!0,forced:!Wr},{useSetter:function(){ro=!0},useSimple:function(){ro=!1}});Mn({target:"Object",stat:!0,forced:!Wr,sham:!Ur},{create:B1,defineProperty:Fn,defineProperties:uo,getOwnPropertyDescriptor:Sv});Mn({target:"Object",stat:!0,forced:!Wr},{getOwnPropertyNames:wv});N1();M1(pr,Ln);mv[ne]=!0});var so=a(($5,Cv)=>{"use strict";var G1=or();Cv.exports=G1&&!!Symbol.for&&!!Symbol.keyFor});var Iv=a(()=>{"use strict";var U1=x(),W1=U(),H1=W(),K1=Ke(),Ev=ur(),V1=so(),co=Ev("string-to-symbol-registry"),z1=Ev("symbol-to-string-registry");U1({target:"Symbol",stat:!0,forced:!V1},{for:function(e){var r=K1(e);if(H1(co,r))return co[r];var t=W1("Symbol")(r);return co[r]=t,z1[t]=r,t}})});var Pv=a(()=>{"use strict";var Y1=x(),J1=W(),Q1=Ar(),X1=He(),Z1=ur(),eR=so(),kv=Z1("symbol-to-string-registry");Y1({target:"Symbol",stat:!0,forced:!eR},{keyFor:function(r){if(!Q1(r))throw new TypeError(X1(r)+" is not a symbol");if(J1(kv,r))return kv[r]}})});var Rv=a((G5,_v)=>{"use strict";var rR=$(),tR=Ve().get;_v.exports=function(r){if(!rR(r))return!1;var t=tR(r);return!!t&&t.type==="RawJSON"}});var $v=a((U5,jv)=>{"use strict";var lo=A(),nR=W(),Dn=SyntaxError,iR=parseInt,aR=String.fromCharCode,oR=lo("".charAt),Av=lo("".slice),Nv=lo(/./.exec),Mv={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},uR=/^[\da-f]{4}$/i,sR=/^[\u0000-\u001F]$/;jv.exports=function(e,r){for(var t=!0,n="";r<e.length;){var i=oR(e,r);if(i==="\\"){var o=Av(e,r,r+2);if(nR(Mv,o))n+=Mv[o],r+=2;else if(o==="\\u"){r+=2;var u=Av(e,r,r+4);if(!Nv(uR,u))throw new Dn("Bad Unicode escape at: "+r);n+=aR(iR(u,16)),r+=4}else throw new Dn('Unknown escape sequence: "'+o+'"')}else if(i==='"'){t=!1,r++;break}else{if(Nv(sR,i))throw new Dn("Bad control character in string literal at: "+r);n+=i,r++}}if(t)throw new Dn("Unterminated string at: "+r);return{value:n,end:r}}});var Fv=a((W5,Lv)=>{"use strict";var cR=P();Lv.exports=!cR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var Zv=a(()=>{"use strict";var lR=x(),Vv=U(),fR=Pr(),zv=D(),dr=A(),Yv=P(),Dv=Ie(),Gn=N(),pR=Rv(),Bv=Ar(),Gv=qe(),vR=Ke(),dR=sr(),hR=$v(),mR=Nr(),yR=or(),fo=Fv(),Jv=String,Je=Vv("JSON","stringify"),Bn=dr(/./.exec),vo=dr("".charAt),gR=dr("".charCodeAt),bR=dr("".replace),po=dr("".slice),ho=dr([].push),qR=dr(1.1.toString),xR=/[\uD800-\uDFFF]/g,Uv=/^[\uD800-\uDBFF]$/,Wv=/^[\uDC00-\uDFFF]$/,mo=mR(),Hv=mo.length,Qv=!yR||Yv(function(){var e=Vv("Symbol")("stringify detection");return Je([e])!=="[null]"||Je({a:e})!=="{}"||Je(Object(e))!=="{}"}),Kv=Yv(function(){return Je("\uDF06\uD834")!=='"\\udf06\\ud834"'||Je("\uDEAD")!=='"\\udead"'}),SR=Qv?function(e,r){var t=dR(arguments),n=Xv(r);if(!(!Gn(n)&&(e===void 0||Bv(e))))return t[1]=function(i,o){if(Gn(n)&&(o=zv(n,this,Jv(i),o)),!Bv(o))return o},fR(Je,null,t)}:Je,wR=function(e,r,t){var n=vo(t,r-1),i=vo(t,r+1);return Bn(Uv,e)&&!Bn(Wv,i)||Bn(Wv,e)&&!Bn(Uv,n)?"\\u"+qR(gR(e,0),16):e},Xv=function(e){if(Gn(e))return e;if(Dv(e)){for(var r=e.length,t=[],n=0;n<r;n++){var i=e[n];typeof i=="string"?ho(t,i):(typeof i=="number"||Gv(i)==="Number"||Gv(i)==="String")&&ho(t,vR(i))}var o=t.length,u=!0;return function(l,c){if(u)return u=!1,c;if(Dv(this))return c;for(var s=0;s<o;s++)if(t[s]===l)return c}}};Je&&lR({target:"JSON",stat:!0,arity:3,forced:Qv||Kv||!fo},{stringify:function(r,t,n){var i=Xv(t),o=[],u=SR(r,function(d,m){var h=Gn(i)?zv(i,this,Jv(d),m):m;return!fo&&pR(h)?mo+(ho(o,h.rawJSON)-1):h},n);if(typeof u!="string"||(Kv&&(u=bR(u,xR,wR)),fo))return u;for(var l="",c=u.length,s=0;s<c;s++){var f=vo(u,s);if(f==='"'){var p=hR(u,++s).end-1,v=po(u,s,p);l+=po(v,0,Hv)===mo?o[po(v,Hv)]:'"'+v+'"',s=p}else l+=f}return l}})});var rd=a(()=>{"use strict";var TR=x(),OR=or(),CR=P(),ed=An(),ER=re(),IR=!OR||CR(function(){ed.f(1)});TR({target:"Object",stat:!0,forced:IR},{getOwnPropertySymbols:function(r){var t=ed.f;return t?t(ER(r)):[]}})});var td=a(()=>{"use strict";Ov();Iv();Pv();Zv();rd()});var yo=a(()=>{"use strict";var kR=M();kR("asyncDispose")});var go=a(()=>{"use strict";var PR=M();PR("asyncIterator")});var nd=a(()=>{});var bo=a(()=>{"use strict";var _R=M();_R("dispose")});var id=a(()=>{"use strict";var RR=M();RR("hasInstance")});var ad=a(()=>{"use strict";var AR=M();AR("isConcatSpreadable")});var qo=a(()=>{"use strict";var NR=M();NR("iterator")});var od=a(()=>{"use strict";var MR=M();MR("match")});var ud=a(()=>{"use strict";var jR=M();jR("matchAll")});var sd=a(()=>{"use strict";var $R=M();$R("replace")});var cd=a(()=>{"use strict";var LR=M();LR("search")});var ld=a(()=>{"use strict";var FR=M();FR("species")});var fd=a(()=>{"use strict";var DR=M();DR("split")});var xo=a(()=>{"use strict";var BR=M(),GR=za();BR("toPrimitive");GR()});var pd=a(()=>{"use strict";var UR=U(),WR=M(),HR=_e();WR("toStringTag");HR(UR("Symbol"),"Symbol")});var vd=a(()=>{"use strict";var KR=M();KR("unscopables")});var dd=a(()=>{"use strict";var VR=_(),zR=_e();zR(VR.JSON,"JSON",!0)});var hd=a(()=>{});var md=a(()=>{});var gd=a((MH,yd)=>{"use strict";Ka();Tt();td();yo();go();nd();bo();id();ad();qo();od();ud();sd();cd();ld();fd();xo();pd();vd();dd();hd();md();var YR=K();yd.exports=YR.Symbol});var So=a((jH,bd)=>{"use strict";bd.exports=function(){}});var hr=a(($H,Td)=>{"use strict";var JR=Ee(),wo=So(),qd=lr(),Sd=Ve(),QR=te().f,XR=In(),Un=kn(),ZR=X(),eA=G(),wd="Array Iterator",rA=Sd.set,tA=Sd.getterFor(wd);Td.exports=XR(Array,"Array",function(e,r){rA(this,{type:wd,target:JR(e),index:0,kind:r})},function(){var e=tA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,Un(void 0,!0);switch(e.kind){case"keys":return Un(t,!1);case"values":return Un(r[t],!1)}return Un([t,r[t]],!1)},"values");var xd=qd.Arguments=qd.Array;wo("keys");wo("values");wo("entries");if(!ZR&&eA&&xd.name!=="values")try{QR(xd,"name",{value:"values"})}catch{}});var Cd=a((LH,Od)=>{"use strict";Od.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var mr=a(()=>{"use strict";hr();var nA=Cd(),iA=_(),aA=_e(),Ed=lr();for(Wn in nA)aA(iA[Wn],Wn),Ed[Wn]=Ed.Array;var Wn});var kd=a((BH,Id)=>{"use strict";var oA=gd();mr();Id.exports=oA});var Rd=a(()=>{"use strict";var uA=R(),sA=te().f,Pd=uA("metadata"),_d=Function.prototype;_d[Pd]===void 0&&sA(_d,Pd,{value:null})});var Ad=a(()=>{"use strict";yo()});var Nd=a(()=>{"use strict";bo()});var Md=a(()=>{"use strict";var cA=M();cA("metadata")});var $d=a((JH,jd)=>{"use strict";var lA=kd();Rd();Ad();Nd();Md();jd.exports=lA});var Oo=a((QH,Ld)=>{"use strict";var fA=U(),pA=A(),To=fA("Symbol"),vA=To.keyFor,dA=pA(To.prototype.valueOf);Ld.exports=To.isRegisteredSymbol||function(r){try{return vA(dA(r))!==void 0}catch{return!1}}});var Fd=a(()=>{"use strict";var hA=x(),mA=Oo();hA({target:"Symbol",stat:!0},{isRegisteredSymbol:mA})});var Io=a((e6,Hd)=>{"use strict";var yA=ur(),Ud=U(),gA=A(),bA=Ar(),qA=R(),Kn=Ud("Symbol"),Dd=Kn.isWellKnownSymbol,Wd=Ud("Object","getOwnPropertyNames"),xA=gA(Kn.prototype.valueOf),Bd=yA("wks");for(Hn=0,Co=Wd(Kn),Gd=Co.length;Hn<Gd;Hn++)try{Eo=Co[Hn],bA(Kn[Eo])&&qA(Eo)}catch{}var Eo,Hn,Co,Gd;Hd.exports=function(r){if(Dd&&Dd(r))return!0;try{for(var t=xA(r),n=0,i=Wd(Bd),o=i.length;n<o;n++)if(Bd[i[n]]==t)return!0}catch{}return!1}});var Kd=a(()=>{"use strict";var SA=x(),wA=Io();SA({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:wA})});var Vd=a(()=>{"use strict";var TA=M();TA("customMatcher")});var zd=a(()=>{"use strict";var OA=M();OA("observable")});var Yd=a(()=>{"use strict";var CA=x(),EA=Oo();CA({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:EA})});var Jd=a(()=>{"use strict";var IA=x(),kA=Io();IA({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:kA})});var Qd=a(()=>{"use strict";var PA=M();PA("matcher")});var Xd=a(()=>{"use strict";var _A=M();_A("metadataKey")});var Zd=a(()=>{"use strict";var RA=M();RA("patternMatch")});var eh=a(()=>{"use strict";var AA=M();AA("replaceAll")});var th=a((b6,rh)=>{"use strict";var NA=$d();Fd();Kd();Vd();zd();Yd();Jd();Qd();Xd();Zd();eh();rh.exports=NA});var Se=a((q6,nh)=>{"use strict";nh.exports=th()});var Vn=a((x6,ih)=>{ih.exports=Se()});var oh=a((S6,ah)=>{"use strict";hr();fr();var MA=St();ah.exports=MA});var sh=a((w6,uh)=>{"use strict";var jA=oh();mr();uh.exports=jA});var lh=a((T6,ch)=>{"use strict";var $A=sh();ch.exports=$A});var ph=a((O6,fh)=>{"use strict";var LA=lh();fh.exports=LA});var ko=a((C6,vh)=>{"use strict";vh.exports=ph()});var zn=a((E6,dh)=>{dh.exports=ko()});var mh=a((I6,hh)=>{"use strict";hr();fr();var FA=Pn();hh.exports=FA});var gh=a((k6,yh)=>{"use strict";var DA=mh();mr();yh.exports=DA});var qh=a((P6,bh)=>{"use strict";var BA=gh();bh.exports=BA});var Sh=a((_6,xh)=>{"use strict";var GA=qh();xh.exports=GA});var Th=a((R6,wh)=>{"use strict";wh.exports=Sh()});var Yn=a((A6,Oh)=>{Oh.exports=Th()});var Eh=a((N6,Ch)=>{"use strict";var UA=U(),WA=A(),HA=Ot(),KA=An(),VA=Q(),zA=WA([].concat);Ch.exports=UA("Reflect","ownKeys")||function(r){var t=HA.f(VA(r)),n=KA.f;return n?zA(t,n(r)):t}});var Ph=a((M6,kh)=>{"use strict";var Ih=W(),YA=Eh(),JA=ct(),QA=te();kh.exports=function(e,r,t){for(var n=YA(r),i=QA.f,o=JA.f,u=0;u<n.length;u++){var l=n[u];!Ih(e,l)&&!(t&&Ih(t,l))&&i(e,l,o(r,l))}}});var Rh=a((j6,_h)=>{"use strict";var XA=$(),ZA=xe();_h.exports=function(e,r){XA(r)&&"cause"in r&&ZA(e,"cause",r.cause)}});var jh=a(($6,Mh)=>{"use strict";var eN=A(),Ah=Error,rN=eN("".replace),tN=function(e){return String(new Ah(e).stack)}("zxcasd"),Nh=/\n\s*at [^:]*:[^\n]*/,nN=Nh.test(tN);Mh.exports=function(e,r){if(nN&&typeof e=="string"&&!Ah.prepareStackTrace)for(;r--;)e=rN(e,Nh,"");return e}});var Lh=a((L6,$h)=>{"use strict";var iN=P(),aN=We();$h.exports=!iN(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",aN(1,7)),e.stack!==7):!0})});var Bh=a((F6,Dh)=>{"use strict";var oN=xe(),uN=jh(),sN=Lh(),Fh=Error.captureStackTrace;Dh.exports=function(e,r,t,n){sN&&(Fh?Fh(e,r):oN(e,"stack",uN(t,n)))}});var pe=a((D6,Hh)=>{"use strict";var cN=V(),lN=D(),fN=Q(),pN=He(),vN=Ga(),dN=le(),Gh=B(),hN=Pn(),mN=St(),Uh=Ba(),yN=TypeError,Jn=function(e,r){this.stopped=e,this.result=r},Wh=Jn.prototype;Hh.exports=function(e,r,t){var n=t&&t.that,i=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),l=!!(t&&t.INTERRUPTED),c=cN(r,n),s,f,p,v,d,m,h,y=function(b){return s&&Uh(s,"normal"),new Jn(!0,b)},q=function(b){return i?(fN(b),l?c(b[0],b[1],y):c(b[0],b[1])):l?c(b,y):c(b)};if(o)s=e.iterator;else if(u)s=e;else{if(f=mN(e),!f)throw new yN(pN(e)+" is not iterable");if(vN(f)){for(p=0,v=dN(e);v>p;p++)if(d=q(e[p]),d&&Gh(Wh,d))return d;return new Jn(!1)}s=hN(e,f)}for(m=o?e.next:s.next;!(h=lN(m,s)).done;){try{d=q(h.value)}catch(b){Uh(s,"throw",b)}if(typeof d=="object"&&d&&Gh(Wh,d))return d}return new Jn(!1)}});var Vh=a((B6,Kh)=>{"use strict";var gN=Ke();Kh.exports=function(e,r){return e===void 0?arguments.length<2?"":r:gN(e)}});var Yh=a(()=>{"use strict";var bN=x(),qN=B(),xN=gt(),Qn=bt(),SN=Ph(),zh=ze(),Po=xe(),_o=We(),wN=Rh(),TN=Bh(),ON=pe(),CN=Vh(),EN=R(),IN=EN("toStringTag"),Xn=Error,kN=[].push,Kr=function(r,t){var n=qN(Ro,this),i;Qn?i=Qn(new Xn,n?xN(this):Ro):(i=n?this:zh(Ro),Po(i,IN,"Error")),t!==void 0&&Po(i,"message",CN(t)),TN(i,Kr,i.stack,1),arguments.length>2&&wN(i,arguments[2]);var o=[];return ON(r,kN,{that:o}),Po(i,"errors",o),i};Qn?Qn(Kr,Xn):SN(Kr,Xn,{name:!0});var Ro=Kr.prototype=zh(Xn.prototype,{constructor:_o(1,Kr),message:_o(1,""),name:_o(1,"AggregateError")});bN({global:!0,constructor:!0,arity:2},{AggregateError:Kr})});var Ao=a(()=>{"use strict";Yh()});var No=a((K6,Jh)=>{"use strict";var _t=_(),PN=_r(),_N=qe(),Zn=function(e){return PN.slice(0,e.length)===e};Jh.exports=function(){return Zn("Bun/")?"BUN":Zn("Cloudflare-Workers")?"CLOUDFLARE":Zn("Deno/")?"DENO":Zn("Node.js/")?"NODE":_t.Bun&&typeof Bun.version=="string"?"BUN":_t.Deno&&typeof Deno.version=="object"?"DENO":_N(_t.process)==="process"?"NODE":_t.window&&_t.document?"BROWSER":"REST"}()});var Rt=a((V6,Qh)=>{"use strict";var RN=No();Qh.exports=RN==="NODE"});var Mo=a((z6,Zh)=>{"use strict";var AN=U(),NN=Nn(),MN=R(),jN=G(),Xh=MN("species");Zh.exports=function(e){var r=AN(e);jN&&r&&!r[Xh]&&NN(r,Xh,{configurable:!0,get:function(){return this}})}});var ei=a((Y6,em)=>{"use strict";var $N=B(),LN=TypeError;em.exports=function(e,r){if($N(r,e))return e;throw new LN("Incorrect invocation")}});var jo=a((J6,rm)=>{"use strict";var FN=dt(),DN=He(),BN=TypeError;rm.exports=function(e){if(FN(e))return e;throw new BN(DN(e)+" is not a constructor")}});var $o=a((Q6,nm)=>{"use strict";var tm=Q(),GN=jo(),UN=ir(),WN=R(),HN=WN("species");nm.exports=function(e,r){var t=tm(e).constructor,n;return t===void 0||UN(n=tm(t)[HN])?r:GN(n)}});var am=a((X6,im)=>{"use strict";var KN=TypeError;im.exports=function(e,r){if(e<r)throw new KN("Not enough arguments");return e}});var Lo=a((Z6,om)=>{"use strict";var VN=_r();om.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(VN)});var Vo=a((e8,hm)=>{"use strict";var ue=_(),zN=Pr(),YN=V(),um=N(),JN=W(),dm=P(),sm=Pa(),QN=sr(),cm=hn(),XN=am(),ZN=Lo(),e2=Rt(),Wo=ue.setImmediate,Ho=ue.clearImmediate,r2=ue.process,Fo=ue.Dispatch,t2=ue.Function,lm=ue.MessageChannel,n2=ue.String,Do=0,At={},fm="onreadystatechange",Nt,yr,Bo,Go;dm(function(){Nt=ue.location});var Ko=function(e){if(JN(At,e)){var r=At[e];delete At[e],r()}},Uo=function(e){return function(){Ko(e)}},pm=function(e){Ko(e.data)},vm=function(e){ue.postMessage(n2(e),Nt.protocol+"//"+Nt.host)};(!Wo||!Ho)&&(Wo=function(r){XN(arguments.length,1);var t=um(r)?r:t2(r),n=QN(arguments,1);return At[++Do]=function(){zN(t,void 0,n)},yr(Do),Do},Ho=function(r){delete At[r]},e2?yr=function(e){r2.nextTick(Uo(e))}:Fo&&Fo.now?yr=function(e){Fo.now(Uo(e))}:lm&&!ZN?(Bo=new lm,Go=Bo.port2,Bo.port1.onmessage=pm,yr=YN(Go.postMessage,Go)):ue.addEventListener&&um(ue.postMessage)&&!ue.importScripts&&Nt&&Nt.protocol!=="file:"&&!dm(vm)?(yr=vm,ue.addEventListener("message",pm,!1)):fm in cm("script")?yr=function(e){sm.appendChild(cm("script"))[fm]=function(){sm.removeChild(this),Ko(e)}}:yr=function(e){setTimeout(Uo(e),0)});hm.exports={set:Wo,clear:Ho}});var gm=a((r8,ym)=>{"use strict";var mm=_(),i2=G(),a2=Object.getOwnPropertyDescriptor;ym.exports=function(e){if(!i2)return mm[e];var r=a2(mm,e);return r&&r.value}});var zo=a((t8,qm)=>{"use strict";var bm=function(){this.head=null,this.tail=null};bm.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};qm.exports=bm});var Sm=a((n8,xm)=>{"use strict";var o2=_r();xm.exports=/ipad|iphone|ipod/i.test(o2)&&typeof Pebble<"u"});var Tm=a((i8,wm)=>{"use strict";var u2=_r();wm.exports=/web0s(?!.*chrome)/i.test(u2)});var _m=a((a8,Pm)=>{"use strict";var zr=_(),s2=gm(),Om=V(),Yo=Vo().set,c2=zo(),l2=Lo(),f2=Sm(),p2=Tm(),Jo=Rt(),Cm=zr.MutationObserver||zr.WebKitMutationObserver,Em=zr.document,Im=zr.process,ri=zr.Promise,Zo=s2("queueMicrotask"),Vr,Qo,Xo,ti,km;Zo||(Mt=new c2,jt=function(){var e,r;for(Jo&&(e=Im.domain)&&e.exit();r=Mt.get();)try{r()}catch(t){throw Mt.head&&Vr(),t}e&&e.enter()},!l2&&!Jo&&!p2&&Cm&&Em?(Qo=!0,Xo=Em.createTextNode(""),new Cm(jt).observe(Xo,{characterData:!0}),Vr=function(){Xo.data=Qo=!Qo}):!f2&&ri&&ri.resolve?(ti=ri.resolve(void 0),ti.constructor=ri,km=Om(ti.then,ti),Vr=function(){km(jt)}):Jo?Vr=function(){Im.nextTick(jt)}:(Yo=Om(Yo,zr),Vr=function(){Yo(jt)}),Zo=function(e){Mt.head||Vr(),Mt.add(e)});var Mt,jt;Pm.exports=Zo});var Am=a((o8,Rm)=>{"use strict";Rm.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var gr=a((u8,Nm)=>{"use strict";Nm.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var br=a((s8,Mm)=>{"use strict";var v2=_();Mm.exports=v2.Promise});var Yr=a((c8,Fm)=>{"use strict";var d2=_(),$t=br(),h2=N(),m2=oa(),y2=va(),g2=R(),jm=No(),b2=X(),eu=Rr(),$m=$t&&$t.prototype,q2=g2("species"),ru=!1,Lm=h2(d2.PromiseRejectionEvent),x2=m2("Promise",function(){var e=y2($t),r=e!==String($t);if(!r&&eu===66||b2&&!($m.catch&&$m.finally))return!0;if(!eu||eu<51||!/native code/.test(e)){var t=new $t(function(o){o(1)}),n=function(o){o(function(){},function(){})},i=t.constructor={};if(i[q2]=n,ru=t.then(function(){})instanceof n,!ru)return!0}return!r&&(jm==="BROWSER"||jm==="DENO")&&!Lm});Fm.exports={CONSTRUCTOR:x2,REJECTION_EVENT:Lm,SUBCLASSING:ru}});var we=a((l8,Bm)=>{"use strict";var Dm=F(),S2=TypeError,w2=function(e){var r,t;this.promise=new e(function(n,i){if(r!==void 0||t!==void 0)throw new S2("Bad Promise constructor");r=n,t=i}),this.resolve=Dm(r),this.reject=Dm(t)};Bm.exports.f=function(e){return new w2(e)}});var uy=a(()=>{"use strict";var T2=x(),O2=X(),oi=Rt(),Qe=_(),C2=K(),Zr=D(),Gm=ke(),Um=bt(),E2=_e(),I2=Mo(),k2=F(),ai=N(),P2=$(),_2=ei(),R2=$o(),zm=Vo().set,ou=_m(),A2=Am(),N2=gr(),M2=zo(),Ym=Ve(),ui=br(),uu=Yr(),Jm=we(),si="Promise",Qm=uu.CONSTRUCTOR,j2=uu.REJECTION_EVENT,$2=uu.SUBCLASSING,tu=Ym.getterFor(si),L2=Ym.set,Jr=ui&&ui.prototype,qr=ui,ni=Jr,Xm=Qe.TypeError,nu=Qe.document,su=Qe.process,iu=Jm.f,F2=iu,D2=!!(nu&&nu.createEvent&&Qe.dispatchEvent),Zm="unhandledrejection",B2="rejectionhandled",Wm=0,ey=1,G2=2,cu=1,ry=2,ii,Hm,ty,Km,ny=function(e){var r;return P2(e)&&ai(r=e.then)?r:!1},iy=function(e,r){var t=r.value,n=r.state===ey,i=n?e.ok:e.fail,o=e.resolve,u=e.reject,l=e.domain,c,s,f;try{i?(n||(r.rejection===ry&&W2(r),r.rejection=cu),i===!0?c=t:(l&&l.enter(),c=i(t),l&&(l.exit(),f=!0)),c===e.promise?u(new Xm("Promise-chain cycle")):(s=ny(c))?Zr(s,c,o,u):o(c)):u(t)}catch(p){l&&!f&&l.exit(),u(p)}},ay=function(e,r){e.notified||(e.notified=!0,ou(function(){for(var t=e.reactions,n;n=t.get();)iy(n,e);e.notified=!1,r&&!e.rejection&&U2(e)}))},oy=function(e,r,t){var n,i;D2?(n=nu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),Qe.dispatchEvent(n)):n={promise:r,reason:t},!j2&&(i=Qe["on"+e])?i(n):e===Zm&&A2("Unhandled promise rejection",t)},U2=function(e){Zr(zm,Qe,function(){var r=e.facade,t=e.value,n=Vm(e),i;if(n&&(i=N2(function(){oi?su.emit("unhandledRejection",t,r):oy(Zm,r,t)}),e.rejection=oi||Vm(e)?ry:cu,i.error))throw i.value})},Vm=function(e){return e.rejection!==cu&&!e.parent},W2=function(e){Zr(zm,Qe,function(){var r=e.facade;oi?su.emit("rejectionHandled",r):oy(B2,r,e.value)})},Qr=function(e,r,t){return function(n){e(r,n,t)}},Xr=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=G2,ay(e,!0))},au=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new Xm("Promise can't be resolved itself");var n=ny(r);n?ou(function(){var i={done:!1};try{Zr(n,r,Qr(au,i,e),Qr(Xr,i,e))}catch(o){Xr(i,o,e)}}):(e.value=r,e.state=ey,ay(e,!1))}catch(i){Xr({done:!1},i,e)}}};if(Qm&&(qr=function(r){_2(this,ni),k2(r),Zr(ii,this);var t=tu(this);try{r(Qr(au,t),Qr(Xr,t))}catch(n){Xr(t,n)}},ni=qr.prototype,ii=function(r){L2(this,{type:si,done:!1,notified:!1,parent:!1,reactions:new M2,rejection:!1,state:Wm,value:null})},ii.prototype=Gm(ni,"then",function(r,t){var n=tu(this),i=iu(R2(this,qr));return n.parent=!0,i.ok=ai(r)?r:!0,i.fail=ai(t)&&t,i.domain=oi?su.domain:void 0,n.state===Wm?n.reactions.add(i):ou(function(){iy(i,n)}),i.promise}),Hm=function(){var e=new ii,r=tu(e);this.promise=e,this.resolve=Qr(au,r),this.reject=Qr(Xr,r)},Jm.f=iu=function(e){return e===qr||e===ty?new Hm(e):F2(e)},!O2&&ai(ui)&&Jr!==Object.prototype)){Km=Jr.then,$2||Gm(Jr,"then",function(r,t){var n=this;return new qr(function(i,o){Zr(Km,n,i,o)}).then(r,t)},{unsafe:!0});try{delete Jr.constructor}catch{}Um&&Um(Jr,ni)}T2({global:!0,constructor:!0,wrap:!0,forced:Qm},{Promise:qr});ty=C2.Promise;E2(qr,si,!1,!0);I2(si)});var Lt=a((v8,sy)=>{"use strict";var H2=br(),K2=Wa(),V2=Yr().CONSTRUCTOR;sy.exports=V2||!K2(function(e){H2.all(e).then(void 0,function(){})})});var cy=a(()=>{"use strict";var z2=x(),Y2=D(),J2=F(),Q2=we(),X2=gr(),Z2=pe(),eM=Lt();z2({target:"Promise",stat:!0,forced:eM},{all:function(r){var t=this,n=Q2.f(t),i=n.resolve,o=n.reject,u=X2(function(){var l=J2(t.resolve),c=[],s=0,f=1;Z2(r,function(p){var v=s++,d=!1;f++,Y2(l,t,p).then(function(m){d||(d=!0,c[v]=m,--f||i(c))},o)}),--f||i(c)});return u.error&&o(u.value),n.promise}})});var fy=a(()=>{"use strict";var rM=x(),tM=X(),nM=Yr().CONSTRUCTOR,fu=br(),iM=U(),aM=N(),oM=ke(),ly=fu&&fu.prototype;rM({target:"Promise",proto:!0,forced:nM,real:!0},{catch:function(e){return this.then(void 0,e)}});!tM&&aM(fu)&&(lu=iM("Promise").prototype.catch,ly.catch!==lu&&oM(ly,"catch",lu,{unsafe:!0}));var lu});var py=a(()=>{"use strict";var uM=x(),sM=D(),cM=F(),lM=we(),fM=gr(),pM=pe(),vM=Lt();uM({target:"Promise",stat:!0,forced:vM},{race:function(r){var t=this,n=lM.f(t),i=n.reject,o=fM(function(){var u=cM(t.resolve);pM(r,function(l){sM(u,t,l).then(n.resolve,i)})});return o.error&&i(o.value),n.promise}})});var vy=a(()=>{"use strict";var dM=x(),hM=we(),mM=Yr().CONSTRUCTOR;dM({target:"Promise",stat:!0,forced:mM},{reject:function(r){var t=hM.f(this),n=t.reject;return n(r),t.promise}})});var pu=a((S8,dy)=>{"use strict";var yM=Q(),gM=$(),bM=we();dy.exports=function(e,r){if(yM(e),gM(r)&&r.constructor===e)return r;var t=bM.f(e),n=t.resolve;return n(r),t.promise}});var yy=a(()=>{"use strict";var qM=x(),xM=U(),hy=X(),SM=br(),my=Yr().CONSTRUCTOR,wM=pu(),TM=xM("Promise"),OM=hy&&!my;qM({target:"Promise",stat:!0,forced:hy||my},{resolve:function(r){return wM(OM&&this===TM?SM:this,r)}})});var gy=a(()=>{"use strict";uy();cy();fy();py();vy();yy()});var vu=a(()=>{"use strict";var CM=x(),EM=D(),IM=F(),kM=we(),PM=gr(),_M=pe(),RM=Lt();CM({target:"Promise",stat:!0,forced:RM},{allSettled:function(r){var t=this,n=kM.f(t),i=n.resolve,o=n.reject,u=PM(function(){var l=IM(t.resolve),c=[],s=0,f=1;_M(r,function(p){var v=s++,d=!1;f++,EM(l,t,p).then(function(m){d||(d=!0,c[v]={status:"fulfilled",value:m},--f||i(c))},function(m){d||(d=!0,c[v]={status:"rejected",reason:m},--f||i(c))})}),--f||i(c)});return u.error&&o(u.value),n.promise}})});var du=a(()=>{"use strict";var AM=x(),NM=D(),MM=F(),jM=U(),$M=we(),LM=gr(),FM=pe(),DM=Lt(),by="No one promise resolved";AM({target:"Promise",stat:!0,forced:DM},{any:function(r){var t=this,n=jM("AggregateError"),i=$M.f(t),o=i.resolve,u=i.reject,l=LM(function(){var c=MM(t.resolve),s=[],f=0,p=1,v=!1;FM(r,function(d){var m=f++,h=!1;p++,NM(c,t,d).then(function(y){h||v||(v=!0,o(y))},function(y){h||v||(h=!0,s[m]=y,--p||u(new n(s,by)))})}),--p||u(new n(s,by))});return l.error&&u(l.value),i.promise}})});var mu=a(()=>{"use strict";var BM=x(),GM=_(),UM=Pr(),WM=sr(),HM=we(),KM=F(),xy=gr(),hu=GM.Promise,qy=!1,VM=!hu||!hu.try||xy(function(){hu.try(function(e){qy=e===8},8)}).error||!qy;BM({target:"Promise",stat:!0,forced:VM},{try:function(e){var r=arguments.length>1?WM(arguments,1):[],t=HM.f(this),n=xy(function(){return UM(KM(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var yu=a(()=>{"use strict";var zM=x(),YM=we();zM({target:"Promise",stat:!0},{withResolvers:function(){var r=YM.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var Oy=a(()=>{"use strict";var JM=x(),QM=X(),ci=br(),XM=P(),wy=U(),Ty=N(),ZM=$o(),Sy=pu(),ej=ke(),bu=ci&&ci.prototype,rj=!!ci&&XM(function(){bu.finally.call({then:function(){}},function(){})});JM({target:"Promise",proto:!0,real:!0,forced:rj},{finally:function(e){var r=ZM(this,wy("Promise")),t=Ty(e);return this.then(t?function(n){return Sy(r,e()).then(function(){return n})}:e,t?function(n){return Sy(r,e()).then(function(){throw n})}:e)}});!QM&&Ty(ci)&&(gu=wy("Promise").prototype.finally,bu.finally!==gu&&ej(bu,"finally",gu,{unsafe:!0}));var gu});var Ey=a(($8,Cy)=>{"use strict";Ao();hr();Tt();gy();vu();du();mu();yu();Oy();fr();var tj=K();Cy.exports=tj.Promise});var ky=a((L8,Iy)=>{"use strict";var nj=Ey();mr();Iy.exports=nj});var Py=a(()=>{"use strict";mu()});var _y=a(()=>{"use strict";yu()});var Ay=a((U8,Ry)=>{"use strict";var ij=ky();Py();_y();Ry.exports=ij});var Ny=a(()=>{"use strict";Ao()});var My=a(()=>{"use strict";vu()});var jy=a(()=>{"use strict";du()});var Ly=a((J8,$y)=>{"use strict";var aj=Ay();Ny();My();jy();$y.exports=aj});var et=a((Q8,Fy)=>{"use strict";Fy.exports=Ly()});var Gy=a((tK,By)=>{"use strict";go();var oj=Gr();By.exports=oj.f("asyncIterator")});var Wy=a((nK,Uy)=>{"use strict";var uj=Gy();Uy.exports=uj});var Ky=a((iK,Hy)=>{"use strict";var sj=Wy();Hy.exports=sj});var zy=a((aK,Vy)=>{"use strict";var cj=Ky();Vy.exports=cj});var li=a((oK,Yy)=>{"use strict";Yy.exports=zy()});var Zy=a(()=>{"use strict";var lj=x(),fj=P(),pj=re(),Xy=gt(),vj=Na(),dj=fj(function(){Xy(1)});lj({target:"Object",stat:!0,forced:dj,sham:!vj},{getPrototypeOf:function(r){return Xy(pj(r))}})});var rg=a((fK,eg)=>{"use strict";Zy();var hj=K();eg.exports=hj.Object.getPrototypeOf});var ng=a((pK,tg)=>{"use strict";var mj=rg();tg.exports=mj});var ag=a((vK,ig)=>{"use strict";var yj=ng();ig.exports=yj});var ug=a((dK,og)=>{"use strict";var gj=ag();og.exports=gj});var fi=a((hK,sg)=>{"use strict";sg.exports=ug()});var lg=a(()=>{"use strict";var bj=x(),qj=A(),xj=Ie(),Sj=qj([].reverse),cg=[1,2];bj({target:"Array",proto:!0,forced:String(cg)===String(cg.reverse())},{reverse:function(){return xj(this)&&(this.length=this.length),Sj(this)}})});var pg=a((gK,fg)=>{"use strict";lg();var wj=oe();fg.exports=wj("Array","reverse")});var dg=a((bK,vg)=>{"use strict";var Tj=B(),Oj=pg(),Su=Array.prototype;vg.exports=function(e){var r=e.reverse;return e===Su||Tj(Su,e)&&r===Su.reverse?Oj:r}});var mg=a((qK,hg)=>{"use strict";var Cj=dg();hg.exports=Cj});var gg=a((xK,yg)=>{"use strict";var Ej=mg();yg.exports=Ej});var qg=a((SK,bg)=>{"use strict";var Ij=gg();bg.exports=Ij});var Sg=a((wK,xg)=>{"use strict";xg.exports=qg()});var wu=a((TK,Bt)=>{function kj(e,r){this.v=e,this.k=r}Bt.exports=kj,Bt.exports.__esModule=!0,Bt.exports.default=Bt.exports});var wg=a(()=>{"use strict";var Pj=x(),_j=G(),Rj=ze();Pj({target:"Object",stat:!0,sham:!_j},{create:Rj})});var Og=a((EK,Tg)=>{"use strict";wg();var Aj=K(),Nj=Aj.Object;Tg.exports=function(r,t){return Nj.create(r,t)}});var Eg=a((IK,Cg)=>{"use strict";var Mj=Og();Cg.exports=Mj});var kg=a((kK,Ig)=>{"use strict";var jj=Eg();Ig.exports=jj});var _g=a((PK,Pg)=>{"use strict";var $j=kg();Pg.exports=$j});var pi=a((_K,Rg)=>{"use strict";Rg.exports=_g()});var Ou=a((RK,jg)=>{"use strict";var Ng=A(),Lj=F(),Fj=$(),Dj=W(),Ag=sr(),Bj=kr(),Mg=Function,Gj=Ng([].concat),Uj=Ng([].join),Tu={},Wj=function(e,r,t){if(!Dj(Tu,r)){for(var n=[],i=0;i<r;i++)n[i]="a["+i+"]";Tu[r]=Mg("C,a","return new C("+Uj(n,",")+")")}return Tu[r](e,t)};jg.exports=Bj?Mg.bind:function(r){var t=Lj(this),n=t.prototype,i=Ag(arguments,1),o=function(){var l=Gj(i,Ag(arguments));return this instanceof o?Wj(t,l.length,l):t.apply(r,l)};return Fj(n)&&(o.prototype=n),o}});var Lg=a(()=>{"use strict";var Hj=x(),$g=Ou();Hj({target:"Function",proto:!0,forced:Function.bind!==$g},{bind:$g})});var Dg=a((MK,Fg)=>{"use strict";Lg();var Kj=oe();Fg.exports=Kj("Function","bind")});var Gg=a((jK,Bg)=>{"use strict";var Vj=B(),zj=Dg(),Cu=Function.prototype;Bg.exports=function(e){var r=e.bind;return e===Cu||Vj(Cu,e)&&r===Cu.bind?zj:r}});var Wg=a(($K,Ug)=>{"use strict";var Yj=Gg();Ug.exports=Yj});var Kg=a((LK,Hg)=>{"use strict";var Jj=Wg();Hg.exports=Jj});var zg=a((FK,Vg)=>{"use strict";var Qj=Kg();Vg.exports=Qj});var Gt=a((DK,Yg)=>{"use strict";Yg.exports=zg()});var Jg=a(()=>{"use strict";var Xj=x(),Zj=bt();Xj({target:"Object",stat:!0},{setPrototypeOf:Zj})});var Xg=a((UK,Qg)=>{"use strict";Jg();var e$=K();Qg.exports=e$.Object.setPrototypeOf});var eb=a((WK,Zg)=>{"use strict";var r$=Xg();Zg.exports=r$});var tb=a((HK,rb)=>{"use strict";var t$=eb();rb.exports=t$});var ib=a((KK,nb)=>{"use strict";var n$=tb();nb.exports=n$});var vi=a((VK,ab)=>{"use strict";ab.exports=ib()});var ub=a(()=>{"use strict";var i$=x(),a$=G(),ob=te().f;i$({target:"Object",stat:!0,forced:Object.defineProperty!==ob,sham:!a$},{defineProperty:ob})});var lb=a((JK,cb)=>{"use strict";ub();var o$=K(),sb=o$.Object,u$=cb.exports=function(r,t,n){return sb.defineProperty(r,t,n)};sb.defineProperty.sham&&(u$.sham=!0)});var pb=a((QK,fb)=>{"use strict";var s$=lb();fb.exports=s$});var db=a((XK,vb)=>{"use strict";var c$=pb();vb.exports=c$});var mb=a((ZK,hb)=>{"use strict";var l$=db();hb.exports=l$});var Ut=a((eV,yb)=>{"use strict";yb.exports=mb()});var Eu=a((rV,Ae)=>{var f$=Ut();function di(e,r,t,n){var i=f$;try{i({},"",{})}catch{i=0}Ae.exports=di=function(u,l,c,s){function f(p,v){di(u,p,function(d){return this._invoke(p,v,d)})}l?i?i(u,l,{value:c,enumerable:!s,configurable:!s,writable:!s}):u[l]=c:(f("next",0),f("throw",1),f("return",2))},Ae.exports.__esModule=!0,Ae.exports.default=Ae.exports,di(e,r,t,n)}Ae.exports=di,Ae.exports.__esModule=!0,Ae.exports.default=Ae.exports});var ku=a((tV,Ne)=>{var gb=Se(),Iu=pi(),p$=Gt(),v$=fi(),bb=vi(),Oe=Eu();function qb(){var e,r,t=typeof gb=="function"?gb:{},n=t.iterator||"@@iterator",i=t.toStringTag||"@@toStringTag";function o(d,m,h,y){var q=m&&m.prototype instanceof l?m:l,b=Iu(q.prototype);return Oe(b,"_invoke",function(I,E,S){var T,w,C,j=0,ge=S||[],k=!1,ee={p:0,n:0,v:e,a:be,f:p$(be).call(be,e,4),d:function(L,ve){return T=L,w=0,C=e,ee.n=ve,u}};function be(J,L){for(w=J,C=L,r=0;!k&&j&&!ve&&r<ge.length;r++){var ve,O=ge[r],Er=ee.p,Ue=O[2];J>3?(ve=Ue===L)&&(C=O[(w=O[4])?5:(w=3,3)],O[4]=O[5]=e):O[0]<=Er&&((ve=J<2&&Er<O[1])?(w=0,ee.v=L,ee.n=O[1]):Er<Ue&&(ve=J<3||O[0]>L||L>Ue)&&(O[4]=J,O[5]=L,ee.n=Ue,w=0))}if(ve||J>1)return u;throw k=!0,L}return function(J,L,ve){if(j>1)throw TypeError("Generator is already running");for(k&&L===1&&be(L,ve),w=L,C=ve;(r=w<2?e:C)||!k;){T||(w?w<3?(w>1&&(ee.n=-1),be(w,C)):ee.n=C:ee.v=C);try{if(j=2,T){if(w||(J="next"),r=T[J]){if(!(r=r.call(T,C)))throw TypeError("iterator result is not an object");if(!r.done)return r;C=r.value,w<2&&(w=0)}else w===1&&(r=T.return)&&r.call(T),w<2&&(C=TypeError("The iterator does not provide a '"+J+"' method"),w=1);T=e}else if((r=(k=ee.n<0)?C:I.call(E,ee))!==u)break}catch(O){T=e,w=1,C=O}finally{j=1}}return{value:r,done:k}}}(d,h,y),!0),b}var u={};function l(){}function c(){}function s(){}r=v$;var f=[][n]?r(r([][n]())):(Oe(r={},n,function(){return this}),r),p=s.prototype=l.prototype=Iu(f);function v(d){return bb?bb(d,s):(d.__proto__=s,Oe(d,i,"GeneratorFunction")),d.prototype=Iu(p),d}return c.prototype=s,Oe(p,"constructor",s),Oe(s,"constructor",c),c.displayName="GeneratorFunction",Oe(s,i,"GeneratorFunction"),Oe(p),Oe(p,i,"Generator"),Oe(p,n,function(){return this}),Oe(p,"toString",function(){return"[object Generator]"}),(Ne.exports=qb=function(){return{w:o,m:v}},Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports)()}Ne.exports=qb,Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports});var Ru=a((nV,Wt)=>{var d$=Se(),h$=li(),m$=wu(),Pu=Eu();function _u(e,r){function t(i,o,u,l){try{var c=e[i](o),s=c.value;return s instanceof m$?r.resolve(s.v).then(function(f){t("next",f,u,l)},function(f){t("throw",f,u,l)}):r.resolve(s).then(function(f){c.value=f,u(c)},function(f){return t("throw",f,u,l)})}catch(f){l(f)}}var n;this.next||(Pu(_u.prototype),Pu(_u.prototype,typeof d$=="function"&&h$||"@asyncIterator",function(){return this})),Pu(this,"_invoke",function(i,o,u){function l(){return new r(function(c,s){t(i,u,c,s)})}return n=n?n.then(l,l):l()},!0)}Wt.exports=_u,Wt.exports.__esModule=!0,Wt.exports.default=Wt.exports});var Au=a((iV,Ht)=>{var y$=et(),g$=ku(),b$=Ru();function q$(e,r,t,n,i){return new b$(g$().w(e,r,t,n),i||y$)}Ht.exports=q$,Ht.exports.__esModule=!0,Ht.exports.default=Ht.exports});var xb=a((aV,Kt)=>{var x$=Au();function S$(e,r,t,n,i){var o=x$(e,r,t,n,i);return o.next().then(function(u){return u.done?u.value:o.next()})}Kt.exports=S$,Kt.exports.__esModule=!0,Kt.exports.default=Kt.exports});var Tb=a((oV,wb)=>{"use strict";var Sb=He(),w$=TypeError;wb.exports=function(e,r){if(!delete e[r])throw new w$("Cannot delete property "+Sb(r)+" of "+Sb(e))}});var Ob=a(()=>{"use strict";var T$=x(),O$=re(),C$=le(),E$=Fr(),I$=Tb(),k$=wt(),P$=[].unshift(0)!==1,_$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},R$=P$||!_$();T$({target:"Array",proto:!0,arity:1,forced:R$},{unshift:function(r){var t=O$(this),n=C$(t),i=arguments.length;if(i){k$(n+i);for(var o=n;o--;){var u=o+i;o in t?t[u]=t[o]:I$(t,u)}for(var l=0;l<i;l++)t[l]=arguments[l]}return E$(t,n+i)}})});var Eb=a((cV,Cb)=>{"use strict";Ob();var A$=oe();Cb.exports=A$("Array","unshift")});var kb=a((lV,Ib)=>{"use strict";var N$=B(),M$=Eb(),Nu=Array.prototype;Ib.exports=function(e){var r=e.unshift;return e===Nu||N$(Nu,e)&&r===Nu.unshift?M$:r}});var _b=a((fV,Pb)=>{"use strict";var j$=kb();Pb.exports=j$});var Ab=a((pV,Rb)=>{"use strict";var $$=_b();Rb.exports=$$});var Mb=a((vV,Nb)=>{"use strict";var L$=Ab();Nb.exports=L$});var $b=a((dV,jb)=>{"use strict";jb.exports=Mb()});var Lb=a((hV,Vt)=>{var F$=$b();function D$(e){var r=Object(e),t=[];for(var n in r)F$(t).call(t,n);return function i(){for(;t.length;)if((n=t.pop())in r)return i.value=n,i.done=!1,i;return i.done=!0,i}}Vt.exports=D$,Vt.exports.__esModule=!0,Vt.exports.default=Vt.exports});var Db=a((mV,Fb)=>{"use strict";hr();Tt();fr();qo();var B$=Gr();Fb.exports=B$.f("iterator")});var Gb=a((yV,Bb)=>{"use strict";var G$=Db();mr();Bb.exports=G$});var Wb=a((gV,Ub)=>{"use strict";var U$=Gb();Ub.exports=U$});var Kb=a((bV,Hb)=>{"use strict";var W$=Wb();Hb.exports=W$});var zt=a((qV,Vb)=>{"use strict";Vb.exports=Kb()});var zb=a((xV,Me)=>{var hi=Se(),H$=zt();function Mu(e){"@babel/helpers - typeof";return Me.exports=Mu=typeof hi=="function"&&typeof H$=="symbol"?function(r){return typeof r}:function(r){return r&&typeof hi=="function"&&r.constructor===hi&&r!==hi.prototype?"symbol":typeof r},Me.exports.__esModule=!0,Me.exports.default=Me.exports,Mu(e)}Me.exports=Mu,Me.exports.__esModule=!0,Me.exports.default=Me.exports});var Yb=a((SV,Yt)=>{var K$=zb().default,V$=Se(),z$=zt();function Y$(e){if(e!=null){var r=e[typeof V$=="function"&&z$||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(K$(e)+" is not iterable")}Yt.exports=Y$,Yt.exports.__esModule=!0,Yt.exports.default=Yt.exports});var Xb=a((wV,je)=>{var Jb=fi(),J$=Sg(),Q$=wu(),X$=ku(),Z$=xb(),eL=Au(),rL=Ru(),tL=Lb(),Qb=Yb();function ju(){"use strict";var e=X$(),r=e.m(ju),t=(Jb?Jb(r):r.__proto__).constructor;function n(u){var l=typeof u=="function"&&u.constructor;return!!l&&(l===t||(l.displayName||l.name)==="GeneratorFunction")}var i={throw:1,return:2,break:3,continue:3};function o(u){var l,c;return function(s){l||(l={stop:function(){return c(s.a,2)},catch:function(){return s.v},abrupt:function(p,v){return c(s.a,i[p],v)},delegateYield:function(p,v,d){return l.resultName=v,c(s.d,Qb(p),d)},finish:function(p){return c(s.f,p)}},c=function(p,v,d){s.p=l.prev,s.n=l.next;try{return p(v,d)}finally{l.next=s.n}}),l.resultName&&(l[l.resultName]=s.v,l.resultName=void 0),l.sent=s.v,l.next=s.n;try{return u.call(this,l)}finally{s.p=l.prev,s.n=l.next}}}return(je.exports=ju=function(){return{wrap:function(c,s,f,p){return e.w(o(c),s,f,p&&J$(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(c,s){return new Q$(c,s)},AsyncIterator:rL,async:function(c,s,f,p,v){return(n(s)?eL:Z$)(o(c),s,f,p,v)},keys:tL,values:Qb}},je.exports.__esModule=!0,je.exports.default=je.exports)()}je.exports=ju,je.exports.__esModule=!0,je.exports.default=je.exports});var se=a((TV,Zb)=>{var mi=Xb()();Zb.exports=mi;try{regeneratorRuntime=mi}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=mi:Function("r","regeneratorRuntime = r")(mi)}});var $u=a((gi,rq)=>{"use strict";Object.defineProperty(gi,"__esModule",{value:!0});var yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},eq=function(){function e(r,t){var n=[],i=!0,o=!1,u=void 0;try{for(var l=r[Symbol.iterator](),c;!(i=(c=l.next()).done)&&(n.push(c.value),!(t&&n.length===t));i=!0);}catch(s){o=!0,u=s}finally{try{!i&&l.return&&l.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();gi.default=nL;function nL(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(i){return i.type==="tag"||i.type==="script"||i.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var i=this.attribs,o=Object.keys(i),u=o.reduce(function(l,c,s){return l[s]={name:c,value:i[c]},l},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var i=[];return Ze(this.childTags,function(o){(o.name===n||n==="*")&&i.push(o)}),i}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var i=n.trim().replace(/\s+/g," ").split(" "),o=[];return Ze([this],function(u){var l=u.attribs.class;l&&i.every(function(c){return l.indexOf(c)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var i=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=iL(n),u=o.shift(),l=o.length;return u(this).filter(function(c){for(var s=0;s<l;){if(c=o[s](c,i),!c)return!1;s+=1}return!0})}),t.contains||(t.contains=function(n){var i=!1;return Ze([this],function(o,u){o===n&&(i=!0,u())}),i}),!0}function iL(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,i=r.split(":"),o=eq(i,2),u=o[0],l=o[1],c=null,s=null;if(function(){switch(!0){case/>/.test(u):s=function(S){return function(T){return T(S.parent)&&S.parent}};break;case/^\./.test(u):var m=u.substr(1).split(".");c=function(S){var T=S.attribs.class;return T&&m.every(function(w){return T.indexOf(w)>-1})},s=function(S,T){return n?S.getElementsByClassName(m.join(" ")):typeof S=="function"?S(c):Jt(S,T,c)};break;case/^\[/.test(u):var h=u.replace(/\[|\]|"/g,"").split("="),y=eq(h,2),q=y[0],b=y[1];c=function(S){var T=Object.keys(S.attribs).indexOf(q)>-1;return!!(T&&(!b||S.attribs[q]===b))},s=function(S,T){if(n){var w=function(){var C=[];return Ze([S],function(j){c(j)&&C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":yi(w))==="object")return w.v}return typeof S=="function"?S(c):Jt(S,T,c)};break;case/^#/.test(u):var I=u.substr(1);c=function(S){return S.attribs.id===I},s=function(S,T){if(n){var w=function(){var C=[];return Ze([S],function(j,ge){c(j)&&(C.push(j),ge())}),{v:C}}();if((typeof w>"u"?"undefined":yi(w))==="object")return w.v}return typeof S=="function"?S(c):Jt(S,T,c)};break;case/\*/.test(u):c=function(S){return!0},s=function(S,T){if(n){var w=function(){var C=[];return Ze([S],function(j){return C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":yi(w))==="object")return w.v}return typeof S=="function"?S(c):Jt(S,T,c)};break;default:c=function(S){return S.name===u},s=function(S,T){if(n){var w=function(){var C=[];return Ze([S],function(j){c(j)&&C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":yi(w))==="object")return w.v}return typeof S=="function"?S(c):Jt(S,T,c)}}}(),!l)return s;var f=l.match(/-(child|type)\((\d+)\)$/),p=f[1],v=parseInt(f[2],10)-1,d=function(h){if(h){var y=h.parent.childTags;p==="type"&&(y=y.filter(c));var q=y.findIndex(function(b){return b===h});if(q===v)return!0}return!1};return function(h){var y=s(h);return n?y.reduce(function(q,b){return d(b)&&q.push(b),q},[]):d(y)&&y}})}function Ze(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&Ze(t.childTags,r)})}function Jt(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}rq.exports=gi.default});var qi=a(bi=>{"use strict";Object.defineProperty(bi,"__esModule",{value:!0});bi.convertNodeList=aL;bi.escapeValue=oL;function aL(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function oL(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var fq=a((xi,lq)=>{"use strict";Object.defineProperty(xi,"__esModule",{value:!0});xi.default=uL;var aq=qi(),tq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function uL(e,r){var t=r.root,n=t===void 0?document:t,i=r.skip,o=i===void 0?null:i,u=r.priority,l=u===void 0?["id","class","href","src"]:u,c=r.ignore,s=c===void 0?{}:c,f=[],p=e,v=f.length,d=!1,m=o&&(Array.isArray(o)?o:[o]).map(function(q){return typeof q!="function"?function(b){return b===q}:q}),h=function(b){return o&&m.some(function(I){return I(b)})};for(Object.keys(s).forEach(function(q){q==="class"&&(d=!0);var b=s[q];typeof b!="function"&&(typeof b=="number"&&(b=b.toString()),typeof b=="string"&&(b=new RegExp((0,aq.escapeValue)(b).replace(/\\/g,"\\\\"))),typeof b=="boolean"&&(b=b?/(?:)/:/.^/),s[q]=function(I,E){return b.test(E)})}),d&&function(){var q=s.attribute;s.attribute=function(b,I,E){return s.class(I)||q&&q(b,I,E)}}();p!==n;){if(h(p)!==!0){if(nq(l,p,s,f,n)||iq(p,s,f,n))break;nq(l,p,s,f),f.length===v&&iq(p,s,f),f.length===v&&sL(l,p,s,f)}p=p.parentNode,v=f.length}if(p===n){var y=sq(l,p,s);f.unshift(y)}return f.join(" ")}function nq(e,r,t,n){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=oq(e,r,t);if(o){var u=i.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function oq(e,r,t){for(var n=r.attributes,i=Object.keys(n).sort(function(h,y){var q=e.indexOf(n[h].name),b=e.indexOf(n[y].name);return b===-1?q===-1?0:-1:q-b}),o=0,u=i.length;o<u;o++){var l=i[o],c=n[l],s=c.name,f=(0,aq.escapeValue)(c.value),p=t[s]||t.attribute,v=tq[s]||tq.attribute;if(!cq(p,s,f,v)){var d="["+s+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(s==="id"&&(d="#"+f),s==="class")){var m=f.trim().replace(/\s+/g,".");d="."+m}return d}}return null}function iq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,i=uq(e,r);if(i){var o=n.getElementsByTagName(i);if(o.length===1)return t.unshift(i),!0}return!1}function uq(e,r){var t=e.tagName.toLowerCase();return cq(r.tag,null,t)?null:t}function sL(e,r,t,n){for(var i=r.parentNode,o=i.childTags||i.children,u=0,l=o.length;u<l;u++){var c=o[u];if(c===r){var s=sq(e,c,t);if(!s)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,c,t,s);var f="> "+s+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function sq(e,r,t){var n=oq(e,r,t);return n||(n=uq(r,t)),n}function cq(e,r,t,n){if(!t)return!0;var i=e||n;return i?i(r,t,n):!1}lq.exports=xi.default});var Lu=a((wi,pq)=>{"use strict";Object.defineProperty(wi,"__esModule",{value:!0});wi.default=vL;var cL=$u(),lL=pL(cL),fL=qi();function pL(e){return e&&e.__esModule?e:{default:e}}function vL(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,fL.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,lL.default)(r[0],t),i=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(i.length<2)return Si("",e,"",r);for(var o=[i.pop()];i.length>1;){var u=i.pop(),l=i.join(" "),c=o.join(" "),s=l+" "+c,f=document.querySelectorAll(s);f.length!==r.length&&o.unshift(Si(l,u,c,r))}return o.unshift(i[0]),i=o,i[0]=Si("",i[0],i.slice(1).join(" "),r),i[i.length-1]=Si(i.slice(0,-1).join(" "),i[i.length-1],"",r),n&&delete global.document,i.join(" ").replace(/>/g,"> ").trim()}function Si(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var i=r.replace(/=.*$/,"]"),o=""+e+i+t,u=document.querySelectorAll(o);if(rt(u,n))r=i;else for(var l=document.querySelectorAll(""+e+i),c=function(){var E=l[s];if(n.some(function(T){return E.contains(T)})){var S=E.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),rt(u,n)&&(r=S),"break"}},s=0,f=l.length;s<f;s++){var o,u,p=c();if(p==="break")break}}if(/>/.test(r)){var v=r.replace(/>/,""),o=""+e+v+t,u=document.querySelectorAll(o);rt(u,n)&&(r=v)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);rt(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var m=r.trim().split(".").slice(1).map(function(I){return"."+I}).sort(function(I,E){return I.length-E.length});m.length;){var h=r.replace(m.shift(),"").trim(),o=(""+e+h+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);rt(u,n)&&(r=h)}if(m=r&&r.match(/\./g),m&&m.length>2)for(var y=document.querySelectorAll(""+e+r),q=function(){var E=y[s];if(n.some(function(T){return E.contains(T)})){var S=E.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),rt(u,n)&&(r=S),"break"}},s=0,f=y.length;s<f;s++){var o,u,b=q();if(b==="break")break}}return r}function rt(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var i=0;i<t;i++)if(e[i]===n)return!0;return!1})}pq.exports=wi.default});var Fu=a(Ti=>{"use strict";Object.defineProperty(Ti,"__esModule",{value:!0});Ti.getCommonAncestor=dL;Ti.getCommonProperties=hL;function dL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,i=[];e.forEach(function(p,v){for(var d=[];p!==n;)p=p.parentNode,d.unshift(p);i[v]=d}),i.sort(function(p,v){return p.length-v.length});for(var o=i.shift(),u=null,l=function(){var v=o[c],d=i.some(function(m){return!m.some(function(h){return h===v})});if(d)return"break";u=v},c=0,s=o.length;c<s;c++){var f=l();if(f==="break")break}return u}function hL(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,i=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(c){return u.some(function(s){return s===c})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(i!==void 0&&function(){var c=t.attributes,s=Object.keys(c).reduce(function(v,d){var m=c[d],h=m.name;return m&&h!=="class"&&(v[h]=m.value),v},{}),f=Object.keys(s),p=Object.keys(i);f.length?p.length?(i=p.reduce(function(v,d){var m=i[d];return m===s[d]&&(v[d]=m),v},{}),Object.keys(i).length?r.attributes=i:delete r.attributes):r.attributes=s:delete r.attributes}(),o!==void 0){var l=t.tagName.toLowerCase();o?l!==o&&delete r.tag:r.tag=l}}),r}});var gq=a(Qt=>{"use strict";Object.defineProperty(Qt,"__esModule",{value:!0});var mL=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Qt.getSingleSelector=Bu;Qt.getMultiSelector=yq;Qt.default=SL;var yL=$u(),dq=Du(yL),gL=fq(),bL=Du(gL),qL=Lu(),hq=Du(qL),vq=qi(),mq=Fu();function Du(e){return e&&e.__esModule?e:{default:e}}function Bu(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":mL(e))+'")');var t=(0,dq.default)(e,r),n=(0,bL.default)(e,r),i=(0,hq.default)(n,e,r);return t&&delete global.document,i}function yq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,vq.convertNodeList)(e)),e.some(function(s){return s.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,dq.default)(e[0],r),n=(0,mq.getCommonAncestor)(e,r),i=Bu(n,r),o=xL(e),u=o[0],l=(0,hq.default)(i+" "+u,e,r),c=(0,vq.convertNodeList)(document.querySelectorAll(l));return e.every(function(s){return c.some(function(f){return f===s})})?(t&&delete global.document,l):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function xL(e){var r=(0,mq.getCommonProperties)(e),t=r.classes,n=r.attributes,i=r.tag,o=[];if(i&&o.push(i),t){var u=t.map(function(c){return"."+c}).join("");o.push(u)}if(n){var l=Object.keys(n).reduce(function(c,s){return c.push("["+s+'="'+n[s]+'"]'),c},[]).join("");o.push(l)}return o.length,[o.join("")]}function SL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?yq(e,r):Bu(e,r)}});var xq=a(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.default=ie.common=ie.optimize=ie.getMultiSelector=ie.getSingleSelector=ie.select=void 0;var Gu=gq();Object.defineProperty(ie,"getSingleSelector",{enumerable:!0,get:function(){return Gu.getSingleSelector}});Object.defineProperty(ie,"getMultiSelector",{enumerable:!0,get:function(){return Gu.getMultiSelector}});var bq=qq(Gu),wL=Lu(),TL=qq(wL),OL=Fu(),CL=EL(OL);function EL(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function qq(e){return e&&e.__esModule?e:{default:e}}ie.select=bq.default;ie.optimize=TL.default;ie.common=CL;ie.default=bq.default});var Sq=a(()=>{"use strict";var $L=x(),LL=Ie();$L({target:"Array",stat:!0},{isArray:LL})});var Tq=a((BV,wq)=>{"use strict";Sq();var FL=K();wq.exports=FL.Array.isArray});var Cq=a((GV,Oq)=>{"use strict";var DL=Tq();Oq.exports=DL});var Iq=a((UV,Eq)=>{"use strict";var BL=Cq();Eq.exports=BL});var Pq=a((WV,kq)=>{"use strict";var GL=Iq();kq.exports=GL});var Rq=a((HV,_q)=>{"use strict";_q.exports=Pq()});var Mq=a(()=>{"use strict";var UL=x(),WL=re(),HL=le(),KL=Fr(),VL=wt(),zL=P(),YL=zL(function(){return[].push.call({length:4294967296},1)!==4294967297}),JL=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},QL=YL||!JL();UL({target:"Array",proto:!0,arity:1,forced:QL},{push:function(r){var t=WL(this),n=HL(t),i=arguments.length;VL(n+i);for(var o=0;o<i;o++)t[n]=arguments[o],n++;return KL(t,n),n}})});var $q=a((YV,jq)=>{"use strict";Mq();var XL=oe();jq.exports=XL("Array","push")});var Fq=a((JV,Lq)=>{"use strict";var ZL=B(),eF=$q(),Uu=Array.prototype;Lq.exports=function(e){var r=e.push;return e===Uu||ZL(Uu,e)&&r===Uu.push?eF:r}});var Bq=a((QV,Dq)=>{"use strict";var rF=Fq();Dq.exports=rF});var Uq=a((XV,Gq)=>{"use strict";var tF=Bq();Gq.exports=tF});var Hq=a((ZV,Wq)=>{"use strict";var nF=Uq();Wq.exports=nF});var Wu=a((ez,Kq)=>{"use strict";Kq.exports=Hq()});var nx=a(()=>{"use strict";var iF=x(),aF=Ct().map,oF=ht(),uF=oF("map");iF({target:"Array",proto:!0,forced:!uF},{map:function(r){return aF(this,r,arguments.length>1?arguments[1]:void 0)}})});var ax=a((Iz,ix)=>{"use strict";nx();var sF=oe();ix.exports=sF("Array","map")});var ux=a((kz,ox)=>{"use strict";var cF=B(),lF=ax(),Ku=Array.prototype;ox.exports=function(e){var r=e.map;return e===Ku||cF(Ku,e)&&r===Ku.map?lF:r}});var cx=a((Pz,sx)=>{"use strict";var fF=ux();sx.exports=fF});var fx=a((_z,lx)=>{"use strict";var pF=cx();lx.exports=pF});var vx=a((Rz,px)=>{"use strict";var vF=fx();px.exports=vF});var hx=a((Az,dx)=>{"use strict";dx.exports=vx()});var yx=a((Nz,mx)=>{mx.exports=hx()});var bx=a((Mz,gx)=>{gx.exports=et()});var Tx=a((jz,wx)=>{"use strict";var dF=F(),hF=re(),mF=fn(),yF=le(),qx=TypeError,xx="Reduce of empty array with no initial value",Sx=function(e){return function(r,t,n,i){var o=hF(r),u=mF(o),l=yF(o);if(dF(t),l===0&&n<2)throw new qx(xx);var c=e?l-1:0,s=e?-1:1;if(n<2)for(;;){if(c in u){i=u[c],c+=s;break}if(c+=s,e?c<0:l<=c)throw new qx(xx)}for(;e?c>=0:l>c;c+=s)c in u&&(i=t(i,u[c],c,o));return i}};wx.exports={left:Sx(!1),right:Sx(!0)}});var Vu=a(($z,Ox)=>{"use strict";var gF=P();Ox.exports=function(e,r){var t=[][e];return!!t&&gF(function(){t.call(null,r||function(){return 1},1)})}});var Ex=a(()=>{"use strict";var bF=x(),qF=Tx().left,xF=Vu(),Cx=Rr(),SF=Rt(),wF=!SF&&Cx>79&&Cx<83,TF=wF||!xF("reduce");bF({target:"Array",proto:!0,forced:TF},{reduce:function(r){var t=arguments.length;return qF(this,r,t,t>1?arguments[1]:void 0)}})});var kx=a((Dz,Ix)=>{"use strict";Ex();var OF=oe();Ix.exports=OF("Array","reduce")});var _x=a((Bz,Px)=>{"use strict";var CF=B(),EF=kx(),zu=Array.prototype;Px.exports=function(e){var r=e.reduce;return e===zu||CF(zu,e)&&r===zu.reduce?EF:r}});var Ax=a((Gz,Rx)=>{"use strict";var IF=_x();Rx.exports=IF});var Mx=a((Uz,Nx)=>{"use strict";var kF=Ax();Nx.exports=kF});var $x=a((Wz,jx)=>{"use strict";var PF=Mx();jx.exports=PF});var Fx=a((Hz,Lx)=>{"use strict";Lx.exports=$x()});var Bx=a((Kz,Dx)=>{Dx.exports=Fx()});var Wx=a((Vz,Ux)=>{"use strict";var _F=Ie(),RF=le(),AF=wt(),NF=V(),MF=Lr(),Gx=function(e,r,t,n,i,o,u,l){for(var c=i,s=0,f=u?NF(u,l):!1,p,v;s<n;)s in t&&(p=f?f(t[s],s,r):t[s],o>0&&_F(p)?(v=RF(p),c=Gx(e,r,p,v,c,o-1)-1):(AF(c+1),MF(e,c,p)),c++),s++;return c};Ux.exports=Gx});var Hx=a(()=>{"use strict";var jF=x(),$F=Wx(),LF=F(),FF=re(),DF=le(),BF=Rn();jF({target:"Array",proto:!0},{flatMap:function(r){var t=FF(this),n=DF(t),i;return LF(r),i=BF(t,0),$F(i,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),i}})});var Kx=a(()=>{"use strict";var GF=So();GF("flatMap")});var zx=a((Xz,Vx)=>{"use strict";Hx();Kx();var UF=oe();Vx.exports=UF("Array","flatMap")});var Jx=a((Zz,Yx)=>{"use strict";var WF=B(),HF=zx(),Yu=Array.prototype;Yx.exports=function(e){var r=e.flatMap;return e===Yu||WF(Yu,e)&&r===Yu.flatMap?HF:r}});var Xx=a((e7,Qx)=>{"use strict";var KF=Jx();Qx.exports=KF});var eS=a((r7,Zx)=>{"use strict";var VF=Xx();Zx.exports=VF});var tS=a((t7,rS)=>{"use strict";var zF=eS();rS.exports=zF});var iS=a((n7,nS)=>{"use strict";nS.exports=tS()});var oS=a((i7,aS)=>{aS.exports=iS()});var sS=a((a7,uS)=>{"use strict";Ka();var YF=oe();uS.exports=YF("Array","concat")});var lS=a((o7,cS)=>{"use strict";var JF=B(),QF=sS(),Ju=Array.prototype;cS.exports=function(e){var r=e.concat;return e===Ju||JF(Ju,e)&&r===Ju.concat?QF:r}});var pS=a((u7,fS)=>{"use strict";var XF=lS();fS.exports=XF});var dS=a((s7,vS)=>{"use strict";var ZF=pS();vS.exports=ZF});var mS=a((c7,hS)=>{"use strict";var eD=dS();hS.exports=eD});var gS=a((l7,yS)=>{"use strict";yS.exports=mS()});var Qu=a((f7,bS)=>{bS.exports=gS()});var SS=a(()=>{});var TS=a((N7,wS)=>{"use strict";SS();xo();var lD=Gr();wS.exports=lD.f("toPrimitive")});var CS=a((M7,OS)=>{"use strict";var fD=TS();OS.exports=fD});var IS=a((j7,ES)=>{"use strict";var pD=CS();ES.exports=pD});var PS=a(($7,kS)=>{"use strict";var vD=IS();kS.exports=vD});var RS=a((L7,_S)=>{"use strict";_S.exports=PS()});var BS=a((a9,DS)=>{"use strict";var hD=$(),mD=qe(),yD=R(),gD=yD("match");DS.exports=function(e){var r;return hD(e)&&((r=e[gD])!==void 0?!!r:mD(e)==="RegExp")}});var US=a((o9,GS)=>{"use strict";var bD=BS(),qD=TypeError;GS.exports=function(e){if(bD(e))throw new qD("The method doesn't accept regular expressions");return e}});var HS=a((u9,WS)=>{"use strict";var xD=R(),SD=xD("match");WS.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[SD]=!1,"/./"[e](r)}catch{}}return!1}});var zS=a(()=>{"use strict";var wD=x(),TD=ut(),OD=ct().f,CD=ma(),KS=Ke(),ED=US(),ID=ar(),kD=HS(),PD=X(),_D=TD("".slice),RD=Math.min,VS=kD("startsWith"),AD=!PD&&!VS&&!!function(){var e=OD(String.prototype,"startsWith");return e&&!e.writable}();wD({target:"String",proto:!0,forced:!AD&&!VS},{startsWith:function(r){var t=KS(ID(this));ED(r);var n=CD(RD(arguments.length>1?arguments[1]:void 0,t.length)),i=KS(r);return _D(t,n,n+i.length)===i}})});var JS=a((l9,YS)=>{"use strict";zS();var ND=oe();YS.exports=ND("String","startsWith")});var XS=a((f9,QS)=>{"use strict";var MD=B(),jD=JS(),rs=String.prototype;QS.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===rs||MD(rs,e)&&r===rs.startsWith?jD:r}});var ew=a((p9,ZS)=>{"use strict";var $D=XS();ZS.exports=$D});var tw=a((v9,rw)=>{"use strict";var LD=ew();rw.exports=LD});var iw=a((d9,nw)=>{"use strict";var FD=tw();nw.exports=FD});var ow=a((h9,aw)=>{"use strict";aw.exports=iw()});var sw=a((m9,uw)=>{uw.exports=ow()});var cw=a(()=>{"use strict";var DD=x(),BD=Ct().filter,GD=ht(),UD=GD("filter");DD({target:"Array",proto:!0,forced:!UD},{filter:function(r){return BD(this,r,arguments.length>1?arguments[1]:void 0)}})});var fw=a((b9,lw)=>{"use strict";cw();var WD=oe();lw.exports=WD("Array","filter")});var vw=a((q9,pw)=>{"use strict";var HD=B(),KD=fw(),ts=Array.prototype;pw.exports=function(e){var r=e.filter;return e===ts||HD(ts,e)&&r===ts.filter?KD:r}});var hw=a((x9,dw)=>{"use strict";var VD=vw();dw.exports=VD});var yw=a((S9,mw)=>{"use strict";var zD=hw();mw.exports=zD});var bw=a((w9,gw)=>{"use strict";var YD=yw();gw.exports=YD});var xw=a((T9,qw)=>{"use strict";qw.exports=bw()});var ww=a((O9,Sw)=>{Sw.exports=xw()});var Fw=a(()=>{"use strict";var nB=x(),iB=U(),is=Pr(),aB=Ou(),Aw=jo(),oB=Q(),Nw=$(),uB=ze(),jw=P(),as=iB("Reflect","construct"),sB=Object.prototype,cB=[].push,$w=jw(function(){function e(){}return!(as(function(){},[],e)instanceof e)}),Lw=!jw(function(){as(function(){})}),Mw=$w||Lw;nB({target:"Reflect",stat:!0,forced:Mw,sham:Mw},{construct:function(r,t){Aw(r),oB(t);var n=arguments.length<3?r:Aw(arguments[2]);if(Lw&&!$w)return as(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var i=[null];return is(cB,i,t),new(is(aB,r,i))}var o=n.prototype,u=uB(Nw(o)?o:sB),l=is(r,u,t);return Nw(l)?l:u}})});var Bw=a((aY,Dw)=>{"use strict";Fw();var lB=K();Dw.exports=lB.Reflect.construct});var Uw=a((oY,Gw)=>{"use strict";var fB=Bw();Gw.exports=fB});var Hw=a((uY,Ww)=>{"use strict";var pB=Uw();Ww.exports=pB});var Vw=a((sY,Kw)=>{"use strict";var vB=Hw();Kw.exports=vB});var _i=a((cY,zw)=>{"use strict";zw.exports=Vw()});var Jw=a((lY,Yw)=>{Yw.exports=_i()});var aT=a((bY,iT)=>{"use strict";var dB=P();iT.exports=dB(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var sT=a((qY,uT)=>{"use strict";var hB=P(),mB=$(),yB=qe(),oT=aT(),Ri=Object.isExtensible,gB=hB(function(){Ri(1)});uT.exports=gB||oT?function(r){return!mB(r)||oT&&yB(r)==="ArrayBuffer"?!1:Ri?Ri(r):!0}:Ri});var lT=a((xY,cT)=>{"use strict";var bB=P();cT.exports=!bB(function(){return Object.isExtensible(Object.preventExtensions({}))})});var ps=a((SY,vT)=>{"use strict";var qB=x(),xB=A(),SB=Br(),wB=$(),cs=W(),TB=te().f,fT=Ot(),OB=Va(),ls=sT(),CB=Nr(),EB=lT(),pT=!1,Fe=CB("meta"),IB=0,fs=function(e){TB(e,Fe,{value:{objectID:"O"+IB++,weakData:{}}})},kB=function(e,r){if(!wB(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!cs(e,Fe)){if(!ls(e))return"F";if(!r)return"E";fs(e)}return e[Fe].objectID},PB=function(e,r){if(!cs(e,Fe)){if(!ls(e))return!0;if(!r)return!1;fs(e)}return e[Fe].weakData},_B=function(e){return EB&&pT&&ls(e)&&!cs(e,Fe)&&fs(e),e},RB=function(){AB.enable=function(){},pT=!0;var e=fT.f,r=xB([].splice),t={};t[Fe]=1,e(t).length&&(fT.f=function(n){for(var i=e(n),o=0,u=i.length;o<u;o++)if(i[o]===Fe){r(i,o,1);break}return i},qB({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:OB.f}))},AB=vT.exports={enable:RB,fastKey:kB,getWeakData:PB,onFreeze:_B};SB[Fe]=!0});var mT=a((wY,hT)=>{"use strict";var NB=x(),MB=_(),jB=ps(),$B=P(),LB=xe(),FB=pe(),DB=ei(),BB=N(),GB=$(),UB=ir(),WB=_e(),HB=te().f,KB=Ct().forEach,VB=G(),dT=Ve(),zB=dT.set,YB=dT.getterFor;hT.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,i=e.indexOf("Weak")!==-1,o=n?"set":"add",u=MB[e],l=u&&u.prototype,c={},s;if(!VB||!BB(u)||!(i||l.forEach&&!$B(function(){new u().entries().next()})))s=t.getConstructor(r,e,n,o),jB.enable();else{s=r(function(v,d){zB(DB(v,f),{type:e,collection:new u}),UB(d)||FB(d,v[o],{that:v,AS_ENTRIES:n})});var f=s.prototype,p=YB(e);KB(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(v){var d=v==="add"||v==="set";v in l&&!(i&&v==="clear")&&LB(f,v,function(m,h){var y=p(this).collection;if(!d&&i&&!GB(m))return v==="get"?void 0:!1;var q=y[v](m===0?0:m,h);return d?this:q})}),i||HB(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return WB(s,e,!1,!0),c[e]=s,NB({global:!0,forced:!0},c),i||t.setStrong(s,e,n),s}});var gT=a((TY,yT)=>{"use strict";var JB=ke();yT.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:JB(e,n,r[n],t);return e}});var OT=a((OY,TT)=>{"use strict";var bT=ze(),QB=Nn(),qT=gT(),XB=V(),ZB=ei(),e3=ir(),r3=pe(),t3=In(),Ai=kn(),n3=Mo(),nn=G(),xT=ps().fastKey,wT=Ve(),ST=wT.set,vs=wT.getterFor;TT.exports={getConstructor:function(e,r,t,n){var i=e(function(s,f){ZB(s,o),ST(s,{type:r,index:bT(null),first:null,last:null,size:0}),nn||(s.size=0),e3(f)||r3(f,s[n],{that:s,AS_ENTRIES:t})}),o=i.prototype,u=vs(r),l=function(s,f,p){var v=u(s),d=c(s,f),m,h;return d?d.value=p:(v.last=d={index:h=xT(f,!0),key:f,value:p,previous:m=v.last,next:null,removed:!1},v.first||(v.first=d),m&&(m.next=d),nn?v.size++:s.size++,h!=="F"&&(v.index[h]=d)),s},c=function(s,f){var p=u(s),v=xT(f),d;if(v!=="F")return p.index[v];for(d=p.first;d;d=d.next)if(d.key===f)return d};return qT(o,{clear:function(){for(var f=this,p=u(f),v=p.first;v;)v.removed=!0,v.previous&&(v.previous=v.previous.next=null),v=v.next;p.first=p.last=null,p.index=bT(null),nn?p.size=0:f.size=0},delete:function(s){var f=this,p=u(f),v=c(f,s);if(v){var d=v.next,m=v.previous;delete p.index[v.index],v.removed=!0,m&&(m.next=d),d&&(d.previous=m),p.first===v&&(p.first=d),p.last===v&&(p.last=m),nn?p.size--:f.size--}return!!v},forEach:function(f){for(var p=u(this),v=XB(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:p.first;)for(v(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!c(this,f)}}),qT(o,t?{get:function(f){var p=c(this,f);return p&&p.value},set:function(f,p){return l(this,f===0?0:f,p)}}:{add:function(f){return l(this,f=f===0?0:f,f)}}),nn&&QB(o,"size",{configurable:!0,get:function(){return u(this).size}}),i},setStrong:function(e,r,t){var n=r+" Iterator",i=vs(r),o=vs(n);t3(e,r,function(u,l){ST(this,{type:n,target:u,state:i(u),kind:l,last:null})},function(){for(var u=o(this),l=u.kind,c=u.last;c&&c.removed;)c=c.previous;return!u.target||!(u.last=c=c?c.next:u.state.first)?(u.target=null,Ai(void 0,!0)):Ai(l==="keys"?c.key:l==="values"?c.value:[c.key,c.value],!1)},t?"entries":"values",!t,!0),n3(r)}}});var CT=a(()=>{"use strict";var i3=mT(),a3=OT();i3("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},a3)});var ET=a(()=>{"use strict";CT()});var kT=a((PY,IT)=>{"use strict";IT.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,i){return t[e](n,i)}}});var ae=a((_Y,_T)=>{"use strict";var o3=U(),Ni=kT(),PT=o3("Map");_T.exports={Map:PT,set:Ni("set",2),get:Ni("get",1),has:Ni("has",1),remove:Ni("delete",1),proto:PT.prototype}});var ds=a(()=>{"use strict";var u3=x(),s3=A(),c3=F(),l3=ar(),f3=pe(),Mi=ae(),RT=X(),p3=P(),AT=Mi.Map,v3=Mi.has,d3=Mi.get,h3=Mi.set,m3=s3([].push),y3=RT||p3(function(){return AT.groupBy("ab",function(e){return e}).get("a").length!==1});u3({target:"Map",stat:!0,forced:RT||y3},{groupBy:function(r,t){l3(r),c3(t);var n=new AT,i=0;return f3(r,function(o){var u=t(o,i++);v3(n,u)?m3(d3(n,u),o):h3(n,u,[o])}),n}})});var z=a((NY,NT)=>{"use strict";var g3=He(),b3=TypeError;NT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new b3(g3(e)+" is not a map")}});var ms=a(()=>{"use strict";var q3=x(),x3=z(),hs=ae(),S3=X(),w3=hs.get,T3=hs.has,O3=hs.set;q3({target:"Map",proto:!0,real:!0,forced:S3},{getOrInsert:function(r,t){return T3(x3(this),r)?w3(this,r):(O3(this,r,t),t)}})});var gs=a(()=>{"use strict";var C3=x(),E3=F(),I3=z(),ys=ae(),k3=X(),P3=ys.get,_3=ys.has,R3=ys.set;C3({target:"Map",proto:!0,real:!0,forced:k3},{getOrInsertComputed:function(r,t){if(I3(this),E3(t),_3(this,r))return P3(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return R3(this,r,n),n}})});var jT=a((FY,MT)=>{"use strict";hr();ET();ds();ms();gs();Tt();fr();var A3=K();MT.exports=A3.Map});var LT=a((DY,$T)=>{"use strict";var N3=jT();mr();$T.exports=N3});var bs=a(()=>{"use strict";ms()});var qs=a(()=>{"use strict";gs()});var FT=a(()=>{"use strict";ds()});var BT=a((VY,DT)=>{"use strict";var M3=LT();bs();qs();FT();DT.exports=M3});var UT=a((zY,GT)=>{"use strict";var j3=V(),$3=Q(),L3=re(),F3=pe();GT.exports=function(e,r,t){return function(i){var o=L3(i),u=arguments.length,l=u>1?arguments[1]:void 0,c=l!==void 0,s=c?j3(l,u>2?arguments[2]:void 0):void 0,f=new e,p=0;return F3(o,function(v){var d=c?s(v,p++):v;t?r(f,$3(d)[0],d[1]):r(f,d)}),f}}});var HT=a(()=>{"use strict";var D3=x(),WT=ae(),B3=UT();D3({target:"Map",stat:!0,forced:!0},{from:B3(WT.Map,WT.set,!0)})});var VT=a((QY,KT)=>{"use strict";var G3=Q();KT.exports=function(e,r,t){return function(){for(var i=new e,o=arguments.length,u=0;u<o;u++){var l=arguments[u];t?r(i,G3(l)[0],l[1]):r(i,l)}return i}}});var YT=a(()=>{"use strict";var U3=x(),zT=ae(),W3=VT();U3({target:"Map",stat:!0,forced:!0},{of:W3(zT.Map,zT.set,!0)})});var QT=a(()=>{"use strict";var H3=x(),K3=D(),V3=pe(),z3=N(),JT=F(),Y3=ae().Map;H3({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=z3(this)?this:Y3,i=new n;JT(t);var o=JT(i.set);return V3(r,function(u){K3(o,i,t(u),u)}),i}})});var XT=a(()=>{"use strict";var J3=x(),Q3=z(),X3=ae().remove;J3({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=Q3(this),t=!0,n,i=0,o=arguments.length;i<o;i++)n=X3(r,arguments[i]),t=t&&n;return!!t}})});var eO=a(()=>{"use strict";var Z3=x(),e4=z(),xs=ae(),r4=xs.get,t4=xs.has,ZT=xs.set;Z3({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=e4(this),i,o;return t4(n,r)?(i=r4(n,r),"update"in t&&(i=t.update(i,r,n),ZT(n,r,i)),i):(o=t.insert(r,n),ZT(n,r,o),o)}})});var tO=a((oJ,rO)=>{"use strict";var n4=D();rO.exports=function(e,r,t){for(var n=t?e:e.iterator,i=e.next,o,u;!(o=n4(i,n)).done;)if(u=r(o.value),u!==void 0)return u}});var me=a((uJ,nO)=>{"use strict";var i4=tO();nO.exports=function(e,r,t){return t?i4(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var iO=a(()=>{"use strict";var a4=x(),o4=V(),u4=z(),s4=me();a4({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=u4(this),n=o4(r,arguments.length>1?arguments[1]:void 0);return s4(t,function(i,o){if(!n(i,o,t))return!1},!0)!==!1}})});var oO=a(()=>{"use strict";var c4=x(),l4=V(),f4=z(),aO=ae(),p4=me(),v4=aO.Map,d4=aO.set;c4({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=f4(this),n=l4(r,arguments.length>1?arguments[1]:void 0),i=new v4;return p4(t,function(o,u){n(o,u,t)&&d4(i,u,o)}),i}})});var uO=a(()=>{"use strict";var h4=x(),m4=V(),y4=z(),g4=me();h4({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=y4(this),n=m4(r,arguments.length>1?arguments[1]:void 0),i=g4(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return i&&i.value}})});var sO=a(()=>{"use strict";var b4=x(),q4=V(),x4=z(),S4=me();b4({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=x4(this),n=q4(r,arguments.length>1?arguments[1]:void 0),i=S4(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return i&&i.key}})});var lO=a((mJ,cO)=>{"use strict";cO.exports=function(e,r){return e===r||e!==e&&r!==r}});var fO=a(()=>{"use strict";var w4=x(),T4=lO(),O4=z(),C4=me();w4({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return C4(O4(this),function(t){if(T4(t,r))return!0},!0)===!0}})});var pO=a(()=>{"use strict";var E4=x(),I4=z(),k4=me();E4({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=k4(I4(this),function(n,i){if(n===r)return{key:i}},!0);return t&&t.key}})});var dO=a(()=>{"use strict";var P4=x(),_4=V(),R4=z(),vO=ae(),A4=me(),N4=vO.Map,M4=vO.set;P4({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=R4(this),n=_4(r,arguments.length>1?arguments[1]:void 0),i=new N4;return A4(t,function(o,u){M4(i,n(o,u,t),o)}),i}})});var mO=a(()=>{"use strict";var j4=x(),$4=V(),L4=z(),hO=ae(),F4=me(),D4=hO.Map,B4=hO.set;j4({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=L4(this),n=$4(r,arguments.length>1?arguments[1]:void 0),i=new D4;return F4(t,function(o,u){B4(i,u,n(o,u,t))}),i}})});var yO=a(()=>{"use strict";var G4=x(),U4=z(),W4=pe(),H4=ae().set;G4({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=U4(this),n=arguments.length,i=0;i<n;)W4(arguments[i++],function(o,u){H4(t,o,u)},{AS_ENTRIES:!0});return t}})});var gO=a(()=>{"use strict";var K4=x(),V4=F(),z4=z(),Y4=me(),J4=TypeError;K4({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=z4(this),n=arguments.length<2,i=n?void 0:arguments[1];if(V4(r),Y4(t,function(o,u){n?(n=!1,i=o):i=r(i,o,u,t)}),n)throw new J4("Reduce of empty map with no initial value");return i}})});var bO=a(()=>{"use strict";var Q4=x(),X4=V(),Z4=z(),eG=me();Q4({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=Z4(this),n=X4(r,arguments.length>1?arguments[1]:void 0);return eG(t,function(i,o){if(n(i,o,t))return!0},!0)===!0}})});var xO=a(()=>{"use strict";var rG=x(),qO=F(),tG=z(),Ss=ae(),nG=TypeError,iG=Ss.get,aG=Ss.has,oG=Ss.set;rG({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=tG(this),i=arguments.length;qO(t);var o=aG(n,r);if(!o&&i<3)throw new nG("Updating absent value");var u=o?iG(n,r):qO(i>2?arguments[2]:void 0)(r,n);return oG(n,r,t(u,r,n)),n}})});var Ts=a((AJ,SO)=>{"use strict";var ji=D(),ws=F(),$i=N(),uG=Q(),sG=TypeError;SO.exports=function(r,t){var n=uG(this),i=ws(n.get),o=ws(n.has),u=ws(n.set),l=arguments.length>2?arguments[2]:void 0,c;if(!$i(t)&&!$i(l))throw new sG("At least one callback required");return ji(o,n,r)?(c=ji(i,n,r),$i(t)&&(c=t(c),ji(u,n,r,c))):$i(l)&&(c=l(),ji(u,n,r,c)),c}});var wO=a(()=>{"use strict";var cG=x(),lG=Ts();cG({target:"Map",proto:!0,real:!0,forced:!0},{upsert:lG})});var TO=a(()=>{"use strict";var fG=x(),pG=Ts();fG({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:pG})});var CO=a((LJ,OO)=>{"use strict";var vG=BT();HT();YT();QT();XT();eO();iO();oO();uO();sO();fO();bs();qs();pO();dO();mO();yO();gO();bO();xO();wO();TO();OO.exports=vG});var IO=a((FJ,EO)=>{"use strict";EO.exports=CO()});var PO=a(()=>{"use strict";var dG=x(),hG=ut(),mG=Ca().indexOf,yG=Vu(),Os=hG([].indexOf),kO=!!Os&&1/Os([1],1,-0)<0,gG=kO||!yG("indexOf");dG({target:"Array",proto:!0,forced:gG},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return kO?Os(this,r,t)||0:mG(this,r,t)}})});var RO=a((GJ,_O)=>{"use strict";PO();var bG=oe();_O.exports=bG("Array","indexOf")});var NO=a((UJ,AO)=>{"use strict";var qG=B(),xG=RO(),Cs=Array.prototype;AO.exports=function(e){var r=e.indexOf;return e===Cs||qG(Cs,e)&&r===Cs.indexOf?xG:r}});var jO=a((WJ,MO)=>{"use strict";var SG=NO();MO.exports=SG});var LO=a((HJ,$O)=>{"use strict";var wG=jO();$O.exports=wG});var DO=a((KJ,FO)=>{"use strict";var TG=LO();FO.exports=TG});var GO=a((VJ,BO)=>{"use strict";BO.exports=DO()});var aC=a(()=>{"use strict";var PG=x(),_G=re(),iC=wn(),RG=P(),AG=RG(function(){iC(1)});PG({target:"Object",stat:!0,forced:AG},{keys:function(r){return iC(_G(r))}})});var uC=a((XQ,oC)=>{"use strict";aC();var NG=K();oC.exports=NG.Object.keys});var cC=a((ZQ,sC)=>{"use strict";var MG=uC();sC.exports=MG});var fC=a((eX,lC)=>{"use strict";var jG=cC();lC.exports=jG});var vC=a((rX,pC)=>{"use strict";var $G=fC();pC.exports=$G});var hC=a((tX,dC)=>{"use strict";dC.exports=vC()});var yC=a((nX,mC)=>{mC.exports=hC()});var Ir="";function Bs(e){Ir=e.replace(/\/+$/,"")}async function Gs(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${Ir}/comments?${t}`);if(!n.ok)throw new Error(`Failed to fetch comments: ${n.status}`);return(await n.json()).data}async function Wi({uri:e,document:r,quote:t,prefix:n,suffix:i,body:o,author:u,parent:l}){let c={quote:t,prefix:n,suffix:i,body:o,author:u,parent:l};r?c.document=r:c.uri=e;let s=await fetch(`${Ir}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!s.ok){let f=await s.json().catch(()=>({error:{message:s.statusText}}));throw new Error(f.error?.message||"Failed to create comment")}return s.json()}async function Us(e,{body:r}){let t=await fetch(`${Ir}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:r})});if(!t.ok)throw new Error(`Failed to update comment: ${t.status}`);return t.json()}async function Ws(e,r){let t=await fetch(`${Ir}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});if(!t.ok)throw new Error(`Failed to update comment: ${t.status}`);return t.json()}async function Hs(e){let r=await fetch(`${Ir}/comments/${e}`,{method:"DELETE"});if(!r.ok)throw new Error(`Failed to delete comment: ${r.status}`)}var PL=g(Dr(),1),_L=g(_n(),1),RL=g(Vn(),1),AL=g(zn(),1),NL=g(Yn(),1);var qu=g(et(),1);function Dy(e,r,t,n,i,o,u){try{var l=e[o](u),c=l.value}catch(s){return void t(s)}l.done?r(c):qu.default.resolve(c).then(n,i)}function xr(e){return function(){var r=this,t=arguments;return new qu.default(function(n,i){var o=e.apply(r,t);function u(c){Dy(o,n,i,u,l,"next",c)}function l(c){Dy(o,n,i,u,l,"throw",c)}u(void 0)})}}function Ft(e,r){this.v=e,this.k=r}function Xe(e){return new Ft(e,0)}var xu=g(et(),1),Jy=g(Se(),1),Qy=g(li(),1);function Te(e){return function(){return new Dt(e.apply(this,arguments))}}function Dt(e){var r,t;function n(o,u){try{var l=e[o](u),c=l.value,s=c instanceof Ft;xu.default.resolve(s?c.v:c).then(function(f){if(s){var p=o==="return"?"return":"next";if(!c.k||f.done)return n(p,f);f=e[p](f).value}i(l.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){i("throw",f)}}function i(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new xu.default(function(l,c){var s={key:o,arg:u,resolve:l,reject:c,next:null};t?t=t.next=s:(r=t=s,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Dt.prototype[typeof Jy.default=="function"&&Qy.default||"@@asyncIterator"]=function(){return this},Dt.prototype.next=function(e){return this._invoke("next",e)},Dt.prototype.throw=function(e){return this._invoke("throw",e)},Dt.prototype.return=function(e){return this._invoke("return",e)};var ML=g(se(),1),jL=g(xq(),1);function ce(e){var r,t=IL(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function IL(e){return"startContainer"in e}function er(e){if(kL(e))return e;var r=e,t=ce(r).createRange();return t.selectNodeContents(r),t}function kL(e){return"startContainer"in e}var Aq=g(Rq(),1);function Nq(e){if((0,Aq.default)(e))return e}var Vq=g(Se(),1),zq=g(ko(),1),Yq=g(Wu(),1);function Jq(e,r){var t=e==null?null:typeof Vq.default<"u"&&(0,zq.default)(e)||e["@@iterator"];if(t!=null){var n,i,o,u,l=[],c=!0,s=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&((0,Yq.default)(l).call(l,n.value),l.length!==r);c=!0);}catch(f){s=!0,i=f}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(s)throw i}}return l}}var Qq=g(ba(),1),Xq=g(Ha(),1);function Oi(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function Hu(e,r){if(e){var t;if(typeof e=="string")return Oi(e,r);var n=(0,Qq.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,Xq.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Oi(e,r):void 0}}function Zq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $e(e,r){return Nq(e)||Jq(e,r)||Hu(e,r)||Zq()}var ex=g(Se(),1),rx=g(li(),1),tx=g(zt(),1),Xt=g(et(),1);function tt(e){var r,t,n,i=2;for(typeof ex.default<"u"&&(t=rx.default,n=tx.default);i--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Ci(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Ci(e){function r(t){if(Object(t)!==t)return Xt.default.reject(new TypeError(t+" is not an object."));var n=t.done;return Xt.default.resolve(t.value).then(function(i){return{value:i,done:n}})}return Ci=function(n){this.s=n,this.n=n.next},Ci.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var i=this.s.return;return i===void 0?Xt.default.resolve({value:n,done:!0}):r(i.apply(this.s,arguments))},throw:function(n){var i=this.s.return;return i===void 0?Xt.default.reject(n):r(i.apply(this.s,arguments))}},new Ci(e)}var cD=g(se(),1);var nD=g(se(),1),iD=g(yx(),1),aD=g(bx(),1),oD=g(Bx(),1),uD=g(oS(),1),sD=g(Qu(),1);var ks=g(se(),1);var tB=g(se(),1);var Zu=g(se(),1);function Zt(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function qS(e,r){return Zt(e.startChunk,r.startChunk)&&Zt(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function Sr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var Xu=g(Ut(),1);var en=g(Se(),1),xS=g(zt(),1);function Le(e){"@babel/helpers - typeof";return Le=typeof en.default=="function"&&typeof xS.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof en.default=="function"&&r.constructor===en.default&&r!==en.default.prototype?"symbol":typeof r},Le(e)}var AS=g(RS(),1);function NS(e,r){if(Le(e)!="object"||!e)return e;var t=e[AS.default];if(t!==void 0){var n=t.call(e,r||"default");if(Le(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Ei(e){var r=NS(e,"string");return Le(r)=="symbol"?r:r+""}function MS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,Xu.default)(e,Ei(n.key),n)}}function rn(e,r,t){return r&&MS(e.prototype,r),t&&MS(e,t),(0,Xu.default)(e,"prototype",{writable:!1}),e}var jS=g(Ut(),1);function wr(e,r,t){return(r=Ei(r))in e?(0,jS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var $S=g(Dr(),1);var Ii="Iterator exhausted before seek ended.",tn=function(){function e(r){Sr(this,e),this.chunker=r,wr(this,"currentChunkPosition",0),wr(this,"offsetInChunk",0),this.seekTo(0)}return rn(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,i)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!Zt(this.currentChunk,n);){var p=this._readToPreviousChunk(),v=$e(p,2),d=v[0],m=v[1];if(t&&(u=d+u),m===null)throw new RangeError(Ii)}else for(;!Zt(this.currentChunk,n);){var l=this._readToNextChunk(),c=$e(l,2),s=c[0],f=c[1];if(t&&(u+=s),f===null)throw new RangeError(Ii)}var h=this.currentChunkPosition+i;if(!t)this.seekTo(h);else return h>=this.position?u+=this.readTo(h):h>=o?(this.seekTo(h),u=(0,$S.default)(u).call(u,0,h-o)):(this.seekTo(o),u=this.readTo(h)),u}},{key:"_readOrSeekTo",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var l=this.currentChunkPosition+this.currentChunk.data.length;if(l<=n){var c=this._readToNextChunk(),s=$e(c,2),f=s[0],p=s[1];if(t&&(u+=f),p===null){if(this.position===n||o)break;throw new RangeError(Ii)}}else{var v=i?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,v)),this.offsetInChunk=v,i&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=i?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var m=this._readToPreviousChunk(),h=$e(m,2),y=h[0],q=h[1];if(t&&(u=y+u),q===null){if(o)break;throw new RangeError(Ii)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,i=this.chunker.nextChunk();return i!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,i]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function FS(e,r){return es.apply(this,arguments)}function es(){return es=xr(Zu.default.mark(function e(r,t){var n,i,o,u,l,c,s,f,p,v,d,m,h,y,q,b,I,E,S,T,w,C,j=arguments;return Zu.default.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:n=j.length>2&&j[2]!==void 0?j[2]:{},i=n.minimalContext,o=i===void 0?!1:i,u=n.minimumQuoteLength,l=u===void 0?0:u,c=n.maxWordLength,s=c===void 0?50:c,f=new tn(t()),p=new tn(t()),f.seekToChunk(r.startChunk,r.startIndex),v=f.readToChunk(r.endChunk,r.endIndex),d="",m="",h=function(){return d.length+v.length+m.length},h()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),y=Math.floor((l-h())/2),d=f.read(-y,!1,!0)+d,h()<l&&(f.seekToChunk(r.endChunk,r.endIndex+m.length),q=l-h(),m=m+f.read(q,!1,!0),h()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),b=l-h(),d=f.read(-b,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=ki(f,s,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+m.length),m=m+ki(f,s,!1));case 11:return I={type:"TextQuoteSelector",exact:v,prefix:d,suffix:m},E=Pi(I)(t()),k.next=16,E.next();case 16:if(S=k.sent,!(!S.done&&qS(S.value,r))){k.next=21;break}return k.next=20,E.next();case 20:S=k.sent;case 21:if(!S.done){k.next=23;break}return k.abrupt("return",I);case 23:if(T=S.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),p.seekToChunk(T.startChunk,T.startIndex-d.length),w=LS(f,p,!0),w!==void 0&&!o&&(w=ki(f,s,!0)+w),f.seekToChunk(r.endChunk,r.endIndex+m.length),p.seekToChunk(T.endChunk,T.endIndex+m.length),C=LS(f,p,!1),C!==void 0&&!o&&(C=C+ki(f,s,!1)),!o){k.next=44;break}if(!(w!==void 0&&(C===void 0||w.length<=C.length))){k.next=37;break}d=w+d,k.next=42;break;case 37:if(C===void 0){k.next=41;break}m=m+C,k.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:k.next=46;break;case 44:w!==void 0&&(d=w+d),C!==void 0&&(m=m+C);case 46:k.next=11;break;case 48:case"end":return k.stop()}},e)})),es.apply(this,arguments)}function LS(e,r,t){for(var n="";;){var i=void 0;try{i=e.read(t?-1:1)}catch{return}n=t?i+n:n+i;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(i!==o)return n}}function ki(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var i=void 0;try{i=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(dD(i)){e.seekBy(t?1:-1);break}n=t?i+n:n+i}return n}function dD(e){return/^\s+$/.test(e)}var Cw=g(Dr(),1),Ew=g(_n(),1),Iw=g(Vn(),1),kw=g(zn(),1),Pw=g(Yn(),1);var ns=g(se(),1),_w=g(sw(),1),Rw=g(ww(),1);function Tw(e,r){var t;if(typeof Iw.default>"u"||(0,kw.default)(e)==null){if(Array.isArray(e)||(t=JD(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(s){throw s},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,l;return{s:function(){t=(0,Pw.default)(e)},n:function(){var s=t.next();return o=s.done,s},e:function(s){u=!0,l=s},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw l}}}}function JD(e,r){var t;if(e){if(typeof e=="string")return Ow(e,r);var n=(0,Cw.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,Ew.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ow(e,r)}}function Ow(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Pi(e){return function(){var r=Te(ns.default.mark(function n(i){var o,u,l,c,s,f,p,v,d,m,h,y,q,b,I,E,S,T,w,C,j,ge,k,ee,be,J,L;return ns.default.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:o=e.exact,u=e.prefix||"",l=e.suffix||"",c=u+o+l,s=[],f=!0;case 6:p=i.currentChunk,v=p.data,d=[],m=Tw(s),O.prev=10,m.s();case 12:if((h=m.n()).done){O.next=27;break}if(y=h.value,q=y.charactersMatched,y.endChunk===void 0&&(b=u.length+o.length-q,b<=v.length&&(y.endChunk=p,y.endIndex=b)),y.startChunk===void 0&&(I=u.length-q,(I<v.length||y.endChunk!==void 0)&&(y.startChunk=p,y.startIndex=I)),E=c.length-q,!(E<=v.length)){O.next=24;break}if(!(0,_w.default)(v).call(v,c.substring(q))){O.next=22;break}return O.next=22,y;case 22:O.next=25;break;case 24:v===c.substring(q,q+v.length)&&(y.charactersMatched+=v.length,d.push(y));case 25:O.next=12;break;case 27:O.next=32;break;case 29:O.prev=29,O.t0=O.catch(10),m.e(O.t0);case 32:return O.prev=32,m.f(),O.finish(32);case 35:if(s=d,!(c.length<=v.length)){O.next=49;break}S=0;case 38:if(!(S<=v.length)){O.next=49;break}if(T=v.indexOf(c,S),T!==-1){O.next=42;break}return O.abrupt("break",49);case 42:if(S=T+1,!(T===0&&c.length===0&&!f)){O.next=45;break}return O.abrupt("continue",38);case 45:return O.next=47,{startChunk:p,startIndex:T+u.length,endChunk:p,endIndex:T+u.length+o.length};case 47:O.next=38;break;case 49:for(w=[],C=Math.max(v.length-c.length+1,0),j=function(Ue){var Fs=v[Ue];w=(0,Rw.default)(w).call(w,function(GC){return Fs===c[Ue-GC]}),Fs===c[0]&&w.push(Ue)},ge=C;ge<v.length;ge++)j(ge);k=Tw(w);try{for(k.s();!(ee=k.n()).done;)be=ee.value,J=v.length-be,L={charactersMatched:J},J>=u.length+o.length&&(L.endChunk=p,L.endIndex=be+u.length+o.length),(J>u.length||L.endChunk!==void 0)&&(L.startChunk=p,L.startIndex=be+u.length),s.push(L)}catch(Er){k.e(Er)}finally{k.f()}f=!1;case 56:if(i.nextChunk()!==null){O.next=6;break}case 57:case"end":return O.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var eB=g(se(),1);var QD=g(Dr(),1),XD=g(Qu(),1);var rB=g(se(),1);var on=g(Jw(),1);var Xw=g(pi(),1),Zw=g(Ut(),1);var os=g(vi(),1),Qw=g(Gt(),1);function rr(e,r){var t;return rr=os.default?(0,Qw.default)(t=os.default).call(t):function(n,i){return n.__proto__=i,n},rr(e,r)}function us(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,Xw.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,Zw.default)(e,"prototype",{writable:!1}),r&&rr(e,r)}function eT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function rT(e,r){if(r&&(Le(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return eT(e)}var tT=g(vi(),1),nT=g(Gt(),1),ss=g(fi(),1);function Tr(e){var r;return Tr=tT.default?(0,nT.default)(r=ss.default).call(r):function(t){return t.__proto__||(0,ss.default)(t)},Tr(e)}var Is=g(IO(),1),JO=g(pi(),1);var UO=g(GO(),1);function WO(e){try{var r;return(0,UO.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var KO=g(_i(),1),VO=g(Wu(),1),zO=g(Gt(),1);var HO=g(_i(),1);function Es(){try{var e=!Boolean.prototype.valueOf.call((0,HO.default)(Boolean,[],function(){}))}catch{}return(Es=function(){return!!e})()}function YO(e,r,t){if(Es())return KO.default.apply(null,arguments);var n=[null];(0,VO.default)(n).apply(n,r);var i=new((0,zO.default)(e).apply(e,n));return t&&rr(i,t.prototype),i}function an(e){var r=typeof Is.default=="function"?new Is.default:void 0;return an=function(n){if(n===null||!WO(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,i)}function i(){return YO(n,arguments,Tr(this).constructor)}return i.prototype=(0,JO.default)(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),rr(i,n)},an(e)}function ZO(e,r){var t=ce(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i=QO(e.startContainer,e.startOffset),o=$e(i,2),u=o[0],l=o[1];for(n.currentNode=u;l===u.length&&n.nextNode();)u=n.currentNode,l=0;e.setStart(u,l);var c=QO(e.endContainer,e.endOffset),s=$e(c,2),f=s[0],p=s[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function QO(e,r){var t;if(XO(e))return[e,r];var n;if(OG(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(XO(n))return[n,0];var i=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=i.createTreeWalker(i,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function XO(e){return e.nodeType===Node.TEXT_NODE}function OG(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function rC(e){var r=CG();return function(){var n=Tr(e),i;if(r){var o=Tr(this).constructor;i=(0,on.default)(n,arguments,o)}else i=n.apply(this,arguments);return rT(this,i)}}function CG(){if(typeof Reflect>"u"||!on.default||on.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,on.default)(Boolean,[],function(){})),!0}catch{return!1}}var Li=function(e){us(t,e);var r=rC(t);function t(n){return Sr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(an(TypeError)),EG=function(e){us(t,e);var r=rC(t);function t(n){return Sr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(an(TypeError)),Or=function(){function e(r){var t=this;if(Sr(this,e),wr(this,"scope",void 0),wr(this,"iter",void 0),this.scope=er(r),this.iter=ce(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!eC(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Li}}return rn(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!eC(t))throw new Li;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new EG;var n=t===this.scope.startContainer?this.scope.startOffset:0,i=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:i,data:t.data.substring(n,i),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=ZO(t,this.scope),i=this.nodeToChunk(n.startContainer),o=n.startOffset-i.startOffset,u=this.nodeToChunk(n.endContainer),l=n.endOffset-u.startOffset;return{startChunk:i,startIndex:o,endChunk:u,endIndex:l}}},{key:"chunkRangeToRange",value:function(t){var n=ce(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function eC(e){return e.nodeType===Node.TEXT_NODE}function tC(e,r){return Ps.apply(this,arguments)}function Ps(){return Ps=xr(ks.default.mark(function e(r,t){var n,i,o,u=arguments;return ks.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},i=er(t??ce(r)),o=new Or(i),c.next=5,FS(o.rangeToChunkRange(r),function(){return new Or(i)},n);case 5:return c.abrupt("return",c.sent);case 6:case"end":return c.stop()}},e)})),Ps.apply(this,arguments)}var _s=g(se(),1);function nC(e){var r=Pi(e);return function(){var t=Te(_s.default.mark(function i(o){var u,l,c,s,f,p,v,d;return _s.default.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:h.prev=0,u=new Or(o),h.next=11;break;case 4:if(h.prev=4,h.t0=h.catch(0),!(h.t0 instanceof Li)){h.next=10;break}return h.abrupt("return");case 10:throw h.t0;case 11:l=!0,c=!1,h.prev=13,f=tt(r(u));case 15:return h.next=17,Xe(f.next());case 17:return p=h.sent,l=p.done,h.next=21,Xe(p.value);case 21:if(v=h.sent,l){h.next=29;break}return d=v,h.next=26,u.chunkRangeToRange(d);case 26:l=!0,h.next=15;break;case 29:h.next=35;break;case 31:h.prev=31,h.t1=h.catch(13),c=!0,s=h.t1;case 35:if(h.prev=35,h.prev=36,!(!l&&f.return!=null)){h.next=40;break}return h.next=40,Xe(f.return());case 40:if(h.prev=40,!c){h.next=43;break}throw s;case 43:return h.finish(40);case 44:return h.finish(35);case 45:case"end":return h.stop()}},i,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(i){return t.apply(this,arguments)}return n}()}var IG=g(se(),1);var kG=g(se(),1);var LG=g(yC(),1),FG=g(Dr(),1),DG=g(_n(),1),BG=g(Vn(),1),GG=g(zn(),1),UG=g(Yn(),1);async function gC(e,r){let t=await tC(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function Fi(e,r){let t=nC({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var nt="fb-highlight",bC="fb-highlight-active";var un=null;function xC(e){un=e}function Di(e,r){let t=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let n=qC(e,r);t.push(n)}else{let n=HG(e);for(let i=0;i<n.length;i++){let o=n[i],u=document.createRange();o===e.startContainer?(u.setStart(o,e.startOffset),u.setEnd(o,o.textContent.length)):o===e.endContainer?(u.setStart(o,0),u.setEnd(o,e.endOffset)):u.selectNodeContents(o),u.collapsed||t.push(qC(u,r))}}return t}function qC(e,r){let t=e.commonAncestorContainer;for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;let n=t,i=!1,o=null;for(;n;){if(n.tagName==="foreignObject"){i=!1;break}n.tagName==="text"&&n instanceof SVGElement&&(i=!0),n.tagName==="svg"&&(o=n),n=n.parentElement}if(i&&o)return WG(e,r,o);let u=document.createElement("mark");u.className=nt,u.dataset.commentId=r,u.style.backgroundColor="rgba(255, 212, 0, 0.35)",u.style.cursor="pointer",u.style.borderRadius="2px",u.addEventListener("click",()=>{un&&un(r)});try{e.surroundContents(u)}catch(l){return console.warn("[feedback-layer] Failed to create highlight:",l),null}return u}function WG(e,r,t){try{let n=e.getClientRects();if(n.length===0)return null;let i="http://www.w3.org/2000/svg",o=t.getScreenCTM();if(!o)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let u=e.commonAncestorContainer;for(;u&&u.nodeType!==Node.ELEMENT_NODE;)u=u.parentNode;let l=u,c=null;for(;l&&l!==t;){if(l.tagName==="text"){c=l.parentElement;break}l=l.parentElement}let s=c||t,f=o;s!==t&&s.getScreenCTM&&(f=s.getScreenCTM());let p=document.createElementNS(i,"g");p.setAttribute("class",nt),p.setAttribute("data-comment-id",r),p.style.cursor="pointer";for(let y=0;y<n.length;y++){let q=n[y],b=document.createElementNS(i,"rect"),I=t.createSVGPoint();I.x=q.left,I.y=q.top;let E=I.matrixTransform(f.inverse()),S=q.width/f.a,T=q.height/f.d;b.setAttribute("x",E.x),b.setAttribute("y",E.y),b.setAttribute("width",S),b.setAttribute("height",T),b.setAttribute("fill","#ffd400"),b.setAttribute("fill-opacity","0.35"),b.setAttribute("rx","2"),b.setAttribute("ry","2"),b.style.pointerEvents="none",p.appendChild(b)}s&&s!==t?s.appendChild(p):t.appendChild(p);let v=e.commonAncestorContainer;for(;v&&v.nodeType!==Node.ELEMENT_NODE;)v=v.parentNode;let d=new Set,m=v;for(;m&&m!==t;)m.tagName==="text"&&m instanceof SVGElement&&(d.add(m),m.querySelectorAll("tspan").forEach(q=>d.add(q))),m=m.parentElement;let h=y=>{y.preventDefault(),y.stopPropagation(),un&&un(r)};return d.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",h),y.dataset.fbCommentId=r}),p}catch(n){return console.warn("[feedback-layer] Failed to create SVG highlight:",n),null}}function Rs(e){document.querySelectorAll(`.${nt}[data-comment-id="${e}"]`).forEach(n=>{let i=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)i.removeChild(n);else{for(;n.firstChild;)i.insertBefore(n.firstChild,n);i.removeChild(n),i.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function SC(){document.querySelectorAll(`.${nt}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function Bi(e){document.querySelectorAll(`.${nt}`).forEach(r=>{let t=r.dataset.commentId===e,n="rgba(255, 180, 0, 0.55)",i="rgba(255, 212, 0, 0.35)";t?r.classList.add(bC):r.classList.remove(bC),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(u=>{u.setAttribute("fill",t?n:i)}):r.style.backgroundColor=t?n:i})}function wC(e){let r=document.querySelector(`.${nt}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function HG(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let i=document.createRange();return i.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,i)<0&&e.compareBoundaryPoints(Range.START_TO_END,i)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function TC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,i)=>{let o=[`**${i+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let l of u)o.push(`  - **[${l.author}]** (reply): ${l.body}`);return o.join(`
`)}).join(`

`)}function OC(e,r){let t=TC(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(i=>!i.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function tr(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var KG=`
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
`,CC=null,EC=null;function IC(e,r){EC=e,CC=r,VG()}function VG(){let e=document.createElement("style");e.textContent=KG,document.head.appendChild(e)}function kC(){let e=CC(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let i=document.createElement("button");i.className="hf-modal-close",i.textContent="\xD7",i.addEventListener("click",()=>r.remove()),n.appendChild(i);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",p=>{p.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let l=document.querySelector(EC.contentSelector||"body").innerHTML,c=OC(l,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${c.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${tr(c)}</textarea>
  `;let s=document.createElement("button");s.className="hf-btn hf-btn-primary",s.textContent="Copy Prompt",s.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c),s.textContent="Copied!"}catch{s.textContent="Copy failed"}setTimeout(()=>s.textContent="Copy Prompt",2e3)}),u.appendChild(s);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function PC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function _C(e,r){return e.length>r?e.slice(0,r)+"...":e}function RC(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var zG=320,NC="feedback-layer-commenter",Z=null,Be=null,De=null,As=null,MC=null,Ns=null,Ms=null,js=null,$s=null,Ls=!1,jC=[],$C=new Set;function it(){return localStorage.getItem(NC)||""}function LC({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:i}){MC=e,Ns=r,Ms=t,js=n,$s=i,XG(),Z=document.createElement("div"),Z.className="fb-sidebar fb-sidebar-collapsed",Z.innerHTML=`
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
               value="${tr(it())}">
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
  `;let o=document.createElement("button");o.className="fb-sidebar-tab",o.textContent="Feedback",o.addEventListener("click",()=>sn()),document.body.appendChild(o),document.body.appendChild(Z),Be=Z.querySelector(".fb-comment-list"),De=Z.querySelector(".fb-form-section");let u=Z.querySelector(".fb-name-input");u.addEventListener("input",()=>{localStorage.setItem(NC,u.value.trim())}),Z.querySelector(".fb-ai-btn").addEventListener("click",()=>kC()),Z.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>YG());let s=Z.querySelector(".fb-show-resolved-cb");s.addEventListener("change",()=>{Ls=s.checked,nr(jC,$C)})}function sn(){Z.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden")}function YG(){Z.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden")}function FC(e){if(sn(),!it()){let n=Z.querySelector(".fb-name-input");n.style.outline="2px solid #ef4444",setTimeout(()=>n.style.outline="",2e3)}As=e,De.style.display="",De.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${tr(_C(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `;let r=De.querySelector(".fb-form-textarea");r.focus();let t=()=>{if(!it()){let i=Z.querySelector(".fb-name-input");i.focus(),i.style.outline="2px solid #ef4444",setTimeout(()=>i.style.outline="",2e3);return}let n=r.value.trim();n&&(MC({comment:n,commenter:it()}),De.style.display="none",As=null)};De.querySelector(".fb-submit-btn").addEventListener("click",t),r.addEventListener("keydown",n=>{n.key==="Enter"&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),t())}),De.querySelector(".fb-cancel-btn").addEventListener("click",()=>{De.style.display="none",As=null}),De.scrollIntoView({behavior:"smooth",block:"nearest"})}function nr(e,r=new Set,t=new Map){jC=e,$C=r,Be.innerHTML="";let{topLevel:n,repliesByParent:i}=PC(e),o=n.slice().sort((s,f)=>{let p=t.get(s.id),v=t.get(f.id);return!p||!v?0:p.compareBoundaryPoints(Range.START_TO_START,v)}),u=o.filter(s=>{let f=r.has(s.id),p=s.status==="closed";return f||p&&Ls}),l=Ls?u:u.filter(s=>s.status!=="closed");if(o.length===0){Be.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let c=o.filter(s=>!r.has(s.id)&&s.status!=="closed").length;if(l.length===0){c>0?Be.innerHTML=`<div class="fb-empty">
        ${u.length} comment(s) resolved.
        ${c>0?`<br>${c} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:Be.innerHTML=`<div class="fb-empty">All ${o.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let s of l){let f=document.createElement("div");f.className="fb-thread",f.appendChild(AC(s,!1));let p=i.get(s.id)||[];for(let d of p)f.appendChild(AC(d,!0));let v=document.createElement("button");v.className="fb-reply-btn",v.textContent="Reply",v.addEventListener("click",d=>{d.stopPropagation(),JG(s.id,f,v)}),f.appendChild(v),Be.appendChild(f)}}function AC(e,r){let t=e.status==="closed",n=document.createElement("div");return n.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":""),n.dataset.id=e.id,n.innerHTML=`
    <div class="fb-cmt-body">${tr(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${tr(e.author)}</span>
      <span class="fb-cmt-time">${RC(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
  `,r||(n.addEventListener("click",i=>{i.target.closest(".fb-cmt-delete")||i.target.closest(".fb-cmt-resolve")||i.target.closest(".fb-cmt-edit")||(Bi(e.id),wC(e.id),Be.querySelectorAll(".fb-cmt-card").forEach(o=>o.classList.remove("fb-cmt-active")),n.classList.add("fb-cmt-active"))}),n.querySelector(".fb-cmt-resolve").addEventListener("click",i=>{i.stopPropagation(),Ms&&Ms(e.id,!t)})),n.querySelector(".fb-cmt-edit").addEventListener("click",i=>{i.stopPropagation(),QG(e,n)}),n.querySelector(".fb-cmt-delete").addEventListener("click",i=>{i.stopPropagation(),Ns&&Ns(e.id)}),n}function JG(e,r,t){sn();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let i=document.createElement("div");i.className="fb-reply-form",i.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!it()){let c=Z.querySelector(".fb-name-input");c.focus(),c.style.outline="2px solid #ef4444",setTimeout(()=>c.style.outline="",2e3);return}let l=i.querySelector("textarea").value.trim();l&&(js&&js({parent_id:e,comment:l,commenter:it()}),i.remove(),t.style.display="")};i.querySelector(".fb-reply-submit").addEventListener("click",o);let u=i.querySelector("textarea");u.addEventListener("keydown",l=>{l.key==="Enter"&&(l.metaKey||l.ctrlKey)&&(l.preventDefault(),o())}),i.querySelector(".fb-reply-cancel").addEventListener("click",()=>{i.remove(),t.style.display=""}),r.insertBefore(i,t),u.focus()}function QG(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${tr(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let i=t.querySelector("textarea");i.focus(),i.setSelectionRange(i.value.length,i.value.length);let o=()=>{let u=i.value.trim();u&&$s&&$s(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),i.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function DC(e){let r=Be.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(Be.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function XG(){let e=document.createElement("style");e.textContent=`
    .fb-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: ${zG}px;
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
  `,document.head.appendChild(e)}var at=null,Gi=null,Ui=null,Y=[],Cr=null,Ce=null,ye=new Set,Ge=new Map;function ZG(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null};Bs(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{at=document.querySelector(r.contentSelector)||document.body,Gi=r.documentUri||window.location.origin+window.location.pathname,Ui=r.documentId||null,LC({onSubmit:iU,onDelete:sU,onResolve:aU,onReply:oU,onEdit:uU}),xC(i=>{sn(),DC(i),Bi(i)}),tU(),await t(),eU(),IC(r,()=>Y)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function eU(){try{Y=await Gs(Gi,Ui),ye=await rU(Y),nr(Y,ye,Ge)}catch(e){console.error("[feedback-layer] Failed to load comments:",e)}}async function rU(e){SC();let r=new Set;Ge.clear();for(let t of e)if(!t.parent)try{let n=await Fi({exact:t.quote,prefix:t.prefix,suffix:t.suffix},at);n&&t.status!=="closed"?(Di(n,t.id),r.add(t.id),Ge.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),Ge.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function tU(){document.addEventListener("mouseup",BC),document.addEventListener("keyup",BC)}function BC(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){cn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){cn();return}if(!at.contains(r.commonAncestorContainer)){cn();return}nU(r)},10)}function nU(e){cn();let r=e.getBoundingClientRect();Ce=document.createElement("button"),Ce.className="fb-annotate-tooltip",Ce.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',Ce.style.top=window.scrollY+r.top-36+"px",Ce.style.left=window.scrollX+r.left+r.width/2-40+"px",Ce.addEventListener("mousedown",async t=>{t.preventDefault(),t.stopPropagation();let n=window.getSelection();if(!n||n.isCollapsed)return;let i=n.getRangeAt(0);try{Cr=await gC(i,at),FC(Cr.exact)}catch(o){console.error("[feedback-layer] Failed to create selector:",o)}cn()}),document.body.appendChild(Ce)}function cn(){Ce&&(Ce.remove(),Ce=null)}async function iU({comment:e,commenter:r}){if(Cr){try{let t=await Wi({uri:Gi,document:Ui,quote:Cr.exact,prefix:Cr.prefix,suffix:Cr.suffix,body:e,author:r});Y.push(t);let n=await Fi({exact:t.quote,prefix:t.prefix,suffix:t.suffix},at);n&&(Di(n,t.id),ye.add(t.id)),nr(Y,ye,Ge),window.getSelection().removeAllRanges()}catch(t){console.error("[feedback-layer] Failed to create comment:",t),alert("Failed to save comment: "+t.message)}Cr=null}}async function aU(e,r){try{let n=await Ws(e,r?"closed":"open"),i=Y.findIndex(o=>o.id===e);if(i!==-1&&(Y[i]=n),r)Rs(e);else{let o=n,u=await Fi({exact:o.quote,prefix:o.prefix,suffix:o.suffix},at);u?(Di(u,o.id),ye.add(o.id)):ye.delete(o.id)}nr(Y,ye,Ge)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t)}}async function oU({parent_id:e,comment:r,commenter:t}){try{let n=await Wi({uri:Gi,document:Ui,body:r,author:t,parent:e});Y.push(n),nr(Y,ye,Ge)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),alert("Failed to save reply: "+n.message)}}async function uU(e,r){try{let t=await Us(e,{body:r}),n=Y.findIndex(i=>i.id===e);n!==-1&&(Y[n]=t),nr(Y,ye,Ge)}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),alert("Failed to update comment: "+t.message)}}async function sU(e){try{await Hs(e),Rs(e),ye.delete(e),Y=Y.filter(r=>r.id!==e&&r.parent!==e),nr(Y,ye,Ge)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r)}}ZG();})();
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
