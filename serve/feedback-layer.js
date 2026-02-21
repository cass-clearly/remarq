var FeedbackLayer=(()=>{var rE=Object.create;var Ys=Object.defineProperty;var tE=Object.getOwnPropertyDescriptor;var nE=Object.getOwnPropertyNames;var iE=Object.getPrototypeOf,aE=Object.prototype.hasOwnProperty;var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var oE=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of nE(r))!aE.call(e,i)&&i!==t&&Ys(e,i,{get:()=>r[i],enumerable:!(n=tE(r,i))||n.enumerable});return e};var g=(e,r,t)=>(t=e!=null?rE(iE(e)):{},oE(r||!e||!e.__esModule?Ys(t,"default",{value:e,enumerable:!0}):t,e));var _=a((T5,rc)=>{"use strict";rc.exports=function(e){try{return!!e()}catch{return!0}}});var _r=a((O5,tc)=>{"use strict";var uE=_();tc.exports=!uE(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var A=a((C5,ac)=>{"use strict";var nc=_r(),ic=Function.prototype,Xi=ic.call,sE=nc&&ic.bind.bind(Xi,Xi);ac.exports=nc?sE:function(e){return function(){return Xi.apply(e,arguments)}}});var B=a((E5,oc)=>{"use strict";var cE=A();oc.exports=cE({}.isPrototypeOf)});var P=a((Zi,uc)=>{"use strict";var st=function(e){return e&&e.Math===Math&&e};uc.exports=st(typeof globalThis=="object"&&globalThis)||st(typeof window=="object"&&window)||st(typeof self=="object"&&self)||st(typeof global=="object"&&global)||st(typeof Zi=="object"&&Zi)||function(){return this}()||Function("return this")()});var Pr=a((I5,fc)=>{"use strict";var lE=_r(),lc=Function.prototype,sc=lc.apply,cc=lc.call;fc.exports=typeof Reflect=="object"&&Reflect.apply||(lE?cc.bind(sc):function(){return cc.apply(sc,arguments)})});var xe=a((k5,vc)=>{"use strict";var pc=A(),fE=pc({}.toString),pE=pc("".slice);vc.exports=function(e){return pE(fE(e),8,-1)}});var ct=a((_5,dc)=>{"use strict";var vE=xe(),dE=A();dc.exports=function(e){if(vE(e)==="Function")return dE(e)}});var N=a((P5,mc)=>{"use strict";var ea=typeof document=="object"&&document.all;mc.exports=typeof ea>"u"&&ea!==void 0?function(e){return typeof e=="function"||e===ea}:function(e){return typeof e=="function"}});var G=a((R5,hc)=>{"use strict";var mE=_();hc.exports=!mE(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var D=a((A5,yc)=>{"use strict";var hE=_r(),dn=Function.prototype.call;yc.exports=hE?dn.bind(dn):function(){return dn.apply(dn,arguments)}});var ra=a(qc=>{"use strict";var gc={}.propertyIsEnumerable,bc=Object.getOwnPropertyDescriptor,yE=bc&&!gc.call({1:2},1);qc.f=yE?function(r){var t=bc(this,r);return!!t&&t.enumerable}:gc});var We=a((M5,xc)=>{"use strict";xc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var mn=a((j5,Sc)=>{"use strict";var gE=A(),bE=_(),qE=xe(),ta=Object,xE=gE("".split);Sc.exports=bE(function(){return!ta("z").propertyIsEnumerable(0)})?function(e){return qE(e)==="String"?xE(e,""):ta(e)}:ta});var ir=a(($5,wc)=>{"use strict";wc.exports=function(e){return e==null}});var ar=a((L5,Tc)=>{"use strict";var SE=ir(),wE=TypeError;Tc.exports=function(e){if(SE(e))throw new wE("Can't call method on "+e);return e}});var Ie=a((F5,Oc)=>{"use strict";var TE=mn(),OE=ar();Oc.exports=function(e){return TE(OE(e))}});var $=a((D5,Cc)=>{"use strict";var CE=N();Cc.exports=function(e){return typeof e=="object"?e!==null:CE(e)}});var K=a((B5,Ec)=>{"use strict";Ec.exports={}});var U=a((G5,kc)=>{"use strict";var na=K(),ia=P(),EE=N(),Ic=function(e){return EE(e)?e:void 0};kc.exports=function(e,r){return arguments.length<2?Ic(na[e])||Ic(ia[e]):na[e]&&na[e][r]||ia[e]&&ia[e][r]}});var Rr=a((U5,Rc)=>{"use strict";var IE=P(),_c=IE.navigator,Pc=_c&&_c.userAgent;Rc.exports=Pc?String(Pc):""});var Ar=a((W5,Lc)=>{"use strict";var $c=P(),aa=Rr(),Ac=$c.process,Nc=$c.Deno,Mc=Ac&&Ac.versions||Nc&&Nc.version,jc=Mc&&Mc.v8,de,hn;jc&&(de=jc.split("."),hn=de[0]>0&&de[0]<4?1:+(de[0]+de[1]));!hn&&aa&&(de=aa.match(/Edge\/(\d+)/),(!de||de[1]>=74)&&(de=aa.match(/Chrome\/(\d+)/),de&&(hn=+de[1])));Lc.exports=hn});var or=a((H5,Dc)=>{"use strict";var Fc=Ar(),kE=_(),_E=P(),PE=_E.String;Dc.exports=!!Object.getOwnPropertySymbols&&!kE(function(){var e=Symbol("symbol detection");return!PE(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Fc&&Fc<41})});var oa=a((K5,Bc)=>{"use strict";var RE=or();Bc.exports=RE&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Nr=a((z5,Gc)=>{"use strict";var AE=U(),NE=N(),ME=B(),jE=oa(),$E=Object;Gc.exports=jE?function(e){return typeof e=="symbol"}:function(e){var r=AE("Symbol");return NE(r)&&ME(r.prototype,$E(e))}});var He=a((V5,Uc)=>{"use strict";var LE=String;Uc.exports=function(e){try{return LE(e)}catch{return"Object"}}});var F=a((Y5,Wc)=>{"use strict";var FE=N(),DE=He(),BE=TypeError;Wc.exports=function(e){if(FE(e))return e;throw new BE(DE(e)+" is not a function")}});var yn=a((J5,Hc)=>{"use strict";var GE=F(),UE=ir();Hc.exports=function(e,r){var t=e[r];return UE(t)?void 0:GE(t)}});var zc=a((Q5,Kc)=>{"use strict";var ua=D(),sa=N(),ca=$(),WE=TypeError;Kc.exports=function(e,r){var t,n;if(r==="string"&&sa(t=e.toString)&&!ca(n=ua(t,e))||sa(t=e.valueOf)&&!ca(n=ua(t,e))||r!=="string"&&sa(t=e.toString)&&!ca(n=ua(t,e)))return n;throw new WE("Can't convert object to primitive value")}});var Z=a((X5,Vc)=>{"use strict";Vc.exports=!0});var Qc=a((Z5,Jc)=>{"use strict";var Yc=P(),HE=Object.defineProperty;Jc.exports=function(e,r){try{HE(Yc,e,{value:r,configurable:!0,writable:!0})}catch{Yc[e]=r}return r}});var lt=a((eU,el)=>{"use strict";var KE=Z(),zE=P(),VE=Qc(),Xc="__core-js_shared__",Zc=el.exports=zE[Xc]||VE(Xc,{});(Zc.versions||(Zc.versions=[])).push({version:"3.48.0",mode:KE?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var ur=a((rU,tl)=>{"use strict";var rl=lt();tl.exports=function(e,r){return rl[e]||(rl[e]=r||{})}});var re=a((tU,nl)=>{"use strict";var YE=ar(),JE=Object;nl.exports=function(e){return JE(YE(e))}});var W=a((nU,il)=>{"use strict";var QE=A(),XE=re(),ZE=QE({}.hasOwnProperty);il.exports=Object.hasOwn||function(r,t){return ZE(XE(r),t)}});var Mr=a((iU,al)=>{"use strict";var e0=A(),r0=0,t0=Math.random(),n0=e0(1.1.toString);al.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+n0(++r0+t0,36)}});var R=a((aU,ul)=>{"use strict";var i0=P(),a0=ur(),ol=W(),o0=Mr(),u0=or(),s0=oa(),jr=i0.Symbol,la=a0("wks"),c0=s0?jr.for||jr:jr&&jr.withoutSetter||o0;ul.exports=function(e){return ol(la,e)||(la[e]=u0&&ol(jr,e)?jr[e]:c0("Symbol."+e)),la[e]}});var fl=a((oU,ll)=>{"use strict";var l0=D(),sl=$(),cl=Nr(),f0=yn(),p0=zc(),v0=R(),d0=TypeError,m0=v0("toPrimitive");ll.exports=function(e,r){if(!sl(e)||cl(e))return e;var t=f0(e,m0),n;if(t){if(r===void 0&&(r="default"),n=l0(t,e,r),!sl(n)||cl(n))return n;throw new d0("Can't convert object to primitive value")}return r===void 0&&(r="number"),p0(e,r)}});var gn=a((uU,pl)=>{"use strict";var h0=fl(),y0=Nr();pl.exports=function(e){var r=h0(e,"string");return y0(r)?r:r+""}});var bn=a((sU,dl)=>{"use strict";var g0=P(),vl=$(),fa=g0.document,b0=vl(fa)&&vl(fa.createElement);dl.exports=function(e){return b0?fa.createElement(e):{}}});var pa=a((cU,ml)=>{"use strict";var q0=G(),x0=_(),S0=bn();ml.exports=!q0&&!x0(function(){return Object.defineProperty(S0("div"),"a",{get:function(){return 7}}).a!==7})});var ft=a(yl=>{"use strict";var w0=G(),T0=D(),O0=ra(),C0=We(),E0=Ie(),I0=gn(),k0=W(),_0=pa(),hl=Object.getOwnPropertyDescriptor;yl.f=w0?hl:function(r,t){if(r=E0(r),t=I0(t),_0)try{return hl(r,t)}catch{}if(k0(r,t))return C0(!T0(O0.f,r,t),r[t])}});var va=a((fU,gl)=>{"use strict";var P0=_(),R0=N(),A0=/#|\.prototype\./,pt=function(e,r){var t=M0[N0(e)];return t===$0?!0:t===j0?!1:R0(r)?P0(r):!!r},N0=pt.normalize=function(e){return String(e).replace(A0,".").toLowerCase()},M0=pt.data={},j0=pt.NATIVE="N",$0=pt.POLYFILL="P";gl.exports=pt});var z=a((pU,ql)=>{"use strict";var bl=ct(),L0=F(),F0=_r(),D0=bl(bl.bind);ql.exports=function(e,r){return L0(e),r===void 0?e:F0?D0(e,r):function(){return e.apply(r,arguments)}}});var da=a((vU,xl)=>{"use strict";var B0=G(),G0=_();xl.exports=B0&&G0(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var Q=a((dU,Sl)=>{"use strict";var U0=$(),W0=String,H0=TypeError;Sl.exports=function(e){if(U0(e))return e;throw new H0(W0(e)+" is not an object")}});var te=a(Tl=>{"use strict";var K0=G(),z0=pa(),V0=da(),qn=Q(),wl=gn(),Y0=TypeError,ma=Object.defineProperty,J0=Object.getOwnPropertyDescriptor,ha="enumerable",ya="configurable",ga="writable";Tl.f=K0?V0?function(r,t,n){if(qn(r),t=wl(t),qn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&ga in n&&!n[ga]){var i=J0(r,t);i&&i[ga]&&(r[t]=n.value,n={configurable:ya in n?n[ya]:i[ya],enumerable:ha in n?n[ha]:i[ha],writable:!1})}return ma(r,t,n)}:ma:function(r,t,n){if(qn(r),t=wl(t),qn(n),z0)try{return ma(r,t,n)}catch{}if("get"in n||"set"in n)throw new Y0("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var Se=a((hU,Ol)=>{"use strict";var Q0=G(),X0=te(),Z0=We();Ol.exports=Q0?function(e,r,t){return X0.f(e,r,Z0(1,t))}:function(e,r,t){return e[r]=t,e}});var q=a((yU,El)=>{"use strict";var vt=P(),eI=Pr(),rI=ct(),tI=N(),nI=ft().f,iI=va(),$r=K(),aI=z(),Lr=Se(),Cl=W();lt();var oI=function(e){var r=function(t,n,i){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return eI(e,this,arguments)};return r.prototype=e.prototype,r};El.exports=function(e,r){var t=e.target,n=e.global,i=e.stat,o=e.proto,u=n?vt:i?vt[t]:vt[t]&&vt[t].prototype,s=n?$r:$r[t]||Lr($r,t,{})[t],c=s.prototype,l,f,v,p,d,h,m,x,y;for(p in r)l=iI(n?p:t+(i?".":"#")+p,e.forced),f=!l&&u&&Cl(u,p),h=s[p],f&&(e.dontCallGetSet?(y=nI(u,p),m=y&&y.value):m=u[p]),d=f&&m?m:r[p],!(!l&&!o&&typeof h==typeof d)&&(e.bind&&f?x=aI(d,vt):e.wrap&&f?x=oI(d):o&&tI(d)?x=rI(d):x=d,(e.sham||d&&d.sham||h&&h.sham)&&Lr(x,"sham",!0),Lr(s,p,x),o&&(v=t+"Prototype",Cl($r,v)||Lr($r,v,{}),Lr($r[v],p,d),e.real&&c&&(l||!c[p])&&Lr(c,p,d)))}});var ke=a((gU,Il)=>{"use strict";var uI=xe();Il.exports=Array.isArray||function(r){return uI(r)==="Array"}});var xn=a((bU,_l)=>{"use strict";var sI=R(),cI=sI("toStringTag"),kl={};kl[cI]="z";_l.exports=String(kl)==="[object z]"});var dt=a((qU,Pl)=>{"use strict";var lI=xn(),fI=N(),Sn=xe(),pI=R(),vI=pI("toStringTag"),dI=Object,mI=Sn(function(){return arguments}())==="Arguments",hI=function(e,r){try{return e[r]}catch{}};Pl.exports=lI?Sn:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=hI(r=dI(e),vI))=="string"?t:mI?Sn(r):(n=Sn(r))==="Object"&&fI(r.callee)?"Arguments":n}});var qa=a((xU,Rl)=>{"use strict";var yI=A(),gI=N(),ba=lt(),bI=yI(Function.toString);gI(ba.inspectSource)||(ba.inspectSource=function(e){return bI(e)});Rl.exports=ba.inspectSource});var ht=a((SU,$l)=>{"use strict";var qI=A(),xI=_(),Al=N(),SI=dt(),wI=U(),TI=qa(),Nl=function(){},Ml=wI("Reflect","construct"),xa=/^\s*(?:class|function)\b/,OI=qI(xa.exec),CI=!xa.test(Nl),mt=function(r){if(!Al(r))return!1;try{return Ml(Nl,[],r),!0}catch{return!1}},jl=function(r){if(!Al(r))return!1;switch(SI(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return CI||!!OI(xa,TI(r))}catch{return!0}};jl.sham=!0;$l.exports=!Ml||xI(function(){var e;return mt(mt.call)||!mt(Object)||!mt(function(){e=!0})||e})?jl:mt});var Fl=a((wU,Ll)=>{"use strict";var EI=Math.ceil,II=Math.floor;Ll.exports=Math.trunc||function(r){var t=+r;return(t>0?II:EI)(t)}});var wn=a((TU,Dl)=>{"use strict";var kI=Fl();Dl.exports=function(e){var r=+e;return r!==r||r===0?0:kI(r)}});var Sa=a((OU,Bl)=>{"use strict";var _I=wn(),PI=Math.max,RI=Math.min;Bl.exports=function(e,r){var t=_I(e);return t<0?PI(t+r,0):RI(t,r)}});var wa=a((CU,Gl)=>{"use strict";var AI=wn(),NI=Math.min;Gl.exports=function(e){var r=AI(e);return r>0?NI(r,9007199254740991):0}});var le=a((EU,Ul)=>{"use strict";var MI=wa();Ul.exports=function(e){return MI(e.length)}});var Fr=a((IU,Wl)=>{"use strict";var jI=G(),$I=te(),LI=We();Wl.exports=function(e,r,t){jI?$I.f(e,r,LI(0,t)):e[r]=t}});var Dr=a((kU,Hl)=>{"use strict";var FI=G(),DI=ke(),BI=TypeError,GI=Object.getOwnPropertyDescriptor,UI=FI&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();Hl.exports=UI?function(e,r){if(DI(e)&&!GI(e,"length").writable)throw new BI("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var yt=a((_U,Kl)=>{"use strict";var WI=_(),HI=R(),KI=Ar(),zI=HI("species");Kl.exports=function(e){return KI>=51||!WI(function(){var r=[],t=r.constructor={};return t[zI]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var sr=a((PU,zl)=>{"use strict";var VI=A();zl.exports=VI([].slice)});var Jl=a(()=>{"use strict";var YI=q(),Vl=ke(),JI=ht(),QI=$(),Yl=Sa(),XI=le(),ZI=Ie(),ek=Fr(),rk=Dr(),tk=R(),nk=yt(),ik=sr(),ak=nk("slice"),ok=tk("species"),Ta=Array,uk=Math.max;YI({target:"Array",proto:!0,forced:!ak},{slice:function(r,t){var n=ZI(this),i=XI(n),o=Yl(r,i),u=Yl(t===void 0?i:t,i),s,c,l;if(Vl(n)&&(s=n.constructor,JI(s)&&(s===Ta||Vl(s.prototype))?s=void 0:QI(s)&&(s=s[ok],s===null&&(s=void 0)),s===Ta||s===void 0))return ik(n,o,u);for(c=new(s===void 0?Ta:s)(uk(u-o,0)),l=0;o<u;o++,l++)o in n&&ek(c,l,n[o]);return rk(c,l),c}})});var oe=a((NU,Ql)=>{"use strict";var sk=P(),ck=K();Ql.exports=function(e,r){var t=ck[e+"Prototype"],n=t&&t[r];if(n)return n;var i=sk[e],o=i&&i.prototype;return o&&o[r]}});var Zl=a((MU,Xl)=>{"use strict";Jl();var lk=oe();Xl.exports=lk("Array","slice")});var rf=a((jU,ef)=>{"use strict";var fk=B(),pk=Zl(),Oa=Array.prototype;ef.exports=function(e){var r=e.slice;return e===Oa||fk(Oa,e)&&r===Oa.slice?pk:r}});var nf=a(($U,tf)=>{"use strict";var vk=rf();tf.exports=vk});var of=a((LU,af)=>{"use strict";var dk=nf();af.exports=dk});var sf=a((FU,uf)=>{"use strict";var mk=of();uf.exports=mk});var Ca=a((DU,cf)=>{"use strict";cf.exports=sf()});var Br=a((BU,lf)=>{lf.exports=Ca()});var Ke=a((GU,ff)=>{"use strict";var hk=dt(),yk=String;ff.exports=function(e){if(hk(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return yk(e)}});var mf=a((UU,df)=>{"use strict";var Ea=A(),gk=wn(),bk=Ke(),qk=ar(),xk=Ea("".charAt),pf=Ea("".charCodeAt),Sk=Ea("".slice),vf=function(e){return function(r,t){var n=bk(qk(r)),i=gk(t),o=n.length,u,s;return i<0||i>=o?e?"":void 0:(u=pf(n,i),u<55296||u>56319||i+1===o||(s=pf(n,i+1))<56320||s>57343?e?xk(n,i):u:e?Sk(n,i,i+2):(u-55296<<10)+(s-56320)+65536)}};df.exports={codeAt:vf(!1),charAt:vf(!0)}});var gf=a((WU,yf)=>{"use strict";var wk=P(),Tk=N(),hf=wk.WeakMap;yf.exports=Tk(hf)&&/native code/.test(String(hf))});var gt=a((HU,qf)=>{"use strict";var Ok=ur(),Ck=Mr(),bf=Ok("keys");qf.exports=function(e){return bf[e]||(bf[e]=Ck(e))}});var Gr=a((KU,xf)=>{"use strict";xf.exports={}});var ze=a((zU,Tf)=>{"use strict";var Ek=gf(),wf=P(),Ik=$(),kk=Se(),Ia=W(),ka=lt(),_k=gt(),Pk=Gr(),Sf="Object already initialized",_a=wf.TypeError,Rk=wf.WeakMap,Tn,bt,On,Ak=function(e){return On(e)?bt(e):Tn(e,{})},Nk=function(e){return function(r){var t;if(!Ik(r)||(t=bt(r)).type!==e)throw new _a("Incompatible receiver, "+e+" required");return t}};Ek||ka.state?(me=ka.state||(ka.state=new Rk),me.get=me.get,me.has=me.has,me.set=me.set,Tn=function(e,r){if(me.has(e))throw new _a(Sf);return r.facade=e,me.set(e,r),r},bt=function(e){return me.get(e)||{}},On=function(e){return me.has(e)}):(cr=_k("state"),Pk[cr]=!0,Tn=function(e,r){if(Ia(e,cr))throw new _a(Sf);return r.facade=e,kk(e,cr,r),r},bt=function(e){return Ia(e,cr)?e[cr]:{}},On=function(e){return Ia(e,cr)});var me,cr;Tf.exports={set:Tn,get:bt,has:On,enforce:Ak,getterFor:Nk}});var Ef=a((VU,Cf)=>{"use strict";var Pa=G(),Mk=W(),Of=Function.prototype,jk=Pa&&Object.getOwnPropertyDescriptor,Ra=Mk(Of,"name"),$k=Ra&&function(){}.name==="something",Lk=Ra&&(!Pa||Pa&&jk(Of,"name").configurable);Cf.exports={EXISTS:Ra,PROPER:$k,CONFIGURABLE:Lk}});var Aa=a((YU,kf)=>{"use strict";var Fk=Ie(),Dk=Sa(),Bk=le(),If=function(e){return function(r,t,n){var i=Fk(r),o=Bk(i);if(o===0)return!e&&-1;var u=Dk(n,o),s;if(e&&t!==t){for(;o>u;)if(s=i[u++],s!==s)return!0}else for(;o>u;u++)if((e||u in i)&&i[u]===t)return e||u||0;return!e&&-1}};kf.exports={includes:If(!0),indexOf:If(!1)}});var Ma=a((JU,Pf)=>{"use strict";var Gk=A(),Na=W(),Uk=Ie(),Wk=Aa().indexOf,Hk=Gr(),_f=Gk([].push);Pf.exports=function(e,r){var t=Uk(e),n=0,i=[],o;for(o in t)!Na(Hk,o)&&Na(t,o)&&_f(i,o);for(;r.length>n;)Na(t,o=r[n++])&&(~Wk(i,o)||_f(i,o));return i}});var Cn=a((QU,Rf)=>{"use strict";Rf.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var En=a((XU,Af)=>{"use strict";var Kk=Ma(),zk=Cn();Af.exports=Object.keys||function(r){return Kk(r,zk)}});var ja=a(Nf=>{"use strict";var Vk=G(),Yk=da(),Jk=te(),Qk=Q(),Xk=Ie(),Zk=En();Nf.f=Vk&&!Yk?Object.defineProperties:function(r,t){Qk(r);for(var n=Xk(t),i=Zk(t),o=i.length,u=0,s;o>u;)Jk.f(r,s=i[u++],n[s]);return r}});var $a=a((e6,Mf)=>{"use strict";var e1=U();Mf.exports=e1("document","documentElement")});var Ve=a((r6,Gf)=>{"use strict";var r1=Q(),t1=ja(),jf=Cn(),n1=Gr(),i1=$a(),a1=bn(),o1=gt(),$f=">",Lf="<",Fa="prototype",Da="script",Df=o1("IE_PROTO"),La=function(){},Bf=function(e){return Lf+Da+$f+e+Lf+"/"+Da+$f},Ff=function(e){e.write(Bf("")),e.close();var r=e.parentWindow.Object;return e=null,r},u1=function(){var e=a1("iframe"),r="java"+Da+":",t;return e.style.display="none",i1.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(Bf("document.F=Object")),t.close(),t.F},In,kn=function(){try{In=new ActiveXObject("htmlfile")}catch{}kn=typeof document<"u"?document.domain&&In?Ff(In):u1():Ff(In);for(var e=jf.length;e--;)delete kn[Fa][jf[e]];return kn()};n1[Df]=!0;Gf.exports=Object.create||function(r,t){var n;return r!==null?(La[Fa]=r1(r),n=new La,La[Fa]=null,n[Df]=r):n=kn(),t===void 0?n:t1.f(n,t)}});var Ba=a((t6,Uf)=>{"use strict";var s1=_();Uf.exports=!s1(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var qt=a((n6,Hf)=>{"use strict";var c1=W(),l1=N(),f1=re(),p1=gt(),v1=Ba(),Wf=p1("IE_PROTO"),Ga=Object,d1=Ga.prototype;Hf.exports=v1?Ga.getPrototypeOf:function(e){var r=f1(e);if(c1(r,Wf))return r[Wf];var t=r.constructor;return l1(t)&&r instanceof t?t.prototype:r instanceof Ga?d1:null}});var _e=a((i6,Kf)=>{"use strict";var m1=Se();Kf.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:m1(e,r,t),e}});var Ka=a((a6,Yf)=>{"use strict";var h1=_(),y1=N(),g1=$(),b1=Ve(),zf=qt(),q1=_e(),x1=R(),S1=Z(),Ha=x1("iterator"),Vf=!1,Pe,Ua,Wa;[].keys&&(Wa=[].keys(),"next"in Wa?(Ua=zf(zf(Wa)),Ua!==Object.prototype&&(Pe=Ua)):Vf=!0);var w1=!g1(Pe)||h1(function(){var e={};return Pe[Ha].call(e)!==e});w1?Pe={}:S1&&(Pe=b1(Pe));y1(Pe[Ha])||q1(Pe,Ha,function(){return this});Yf.exports={IteratorPrototype:Pe,BUGGY_SAFARI_ITERATORS:Vf}});var Qf=a((o6,Jf)=>{"use strict";var T1=xn(),O1=dt();Jf.exports=T1?{}.toString:function(){return"[object "+O1(this)+"]"}});var Re=a((u6,Zf)=>{"use strict";var C1=xn(),E1=te().f,I1=Se(),k1=W(),_1=Qf(),P1=R(),Xf=P1("toStringTag");Zf.exports=function(e,r,t,n){var i=t?e:e&&e.prototype;i&&(k1(i,Xf)||E1(i,Xf,{configurable:!0,value:r}),n&&!C1&&I1(i,"toString",_1))}});var lr=a((s6,ep)=>{"use strict";ep.exports={}});var tp=a((c6,rp)=>{"use strict";var R1=Ka().IteratorPrototype,A1=Ve(),N1=We(),M1=Re(),j1=lr(),$1=function(){return this};rp.exports=function(e,r,t,n){var i=r+" Iterator";return e.prototype=A1(R1,{next:N1(+!n,t)}),M1(e,i,!1,!0),j1[i]=$1,e}});var ip=a((l6,np)=>{"use strict";var L1=A(),F1=F();np.exports=function(e,r,t){try{return L1(F1(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var op=a((f6,ap)=>{"use strict";var D1=$();ap.exports=function(e){return D1(e)||e===null}});var sp=a((p6,up)=>{"use strict";var B1=op(),G1=String,U1=TypeError;up.exports=function(e){if(B1(e))return e;throw new U1("Can't set "+G1(e)+" as a prototype")}});var xt=a((v6,cp)=>{"use strict";var W1=ip(),H1=$(),K1=ar(),z1=sp();cp.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=W1(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(i,o){return K1(i),z1(o),H1(i)&&(e?t(i,o):i.__proto__=o),i}}():void 0)});var Rn=a((d6,bp)=>{"use strict";var V1=q(),Y1=D(),_n=Z(),yp=Ef(),J1=N(),Q1=tp(),lp=qt(),fp=xt(),X1=Re(),Z1=Se(),za=_e(),e_=R(),pp=lr(),gp=Ka(),r_=yp.PROPER,t_=yp.CONFIGURABLE,vp=gp.IteratorPrototype,Pn=gp.BUGGY_SAFARI_ITERATORS,St=e_("iterator"),dp="keys",wt="values",mp="entries",hp=function(){return this};bp.exports=function(e,r,t,n,i,o,u){Q1(t,r,n);var s=function(y){if(y===i&&p)return p;if(!Pn&&y&&y in f)return f[y];switch(y){case dp:return function(){return new t(this,y)};case wt:return function(){return new t(this,y)};case mp:return function(){return new t(this,y)}}return function(){return new t(this)}},c=r+" Iterator",l=!1,f=e.prototype,v=f[St]||f["@@iterator"]||i&&f[i],p=!Pn&&v||s(i),d=r==="Array"&&f.entries||v,h,m,x;if(d&&(h=lp(d.call(new e)),h!==Object.prototype&&h.next&&(!_n&&lp(h)!==vp&&(fp?fp(h,vp):J1(h[St])||za(h,St,hp)),X1(h,c,!0,!0),_n&&(pp[c]=hp))),r_&&i===wt&&v&&v.name!==wt&&(!_n&&t_?Z1(f,"name",wt):(l=!0,p=function(){return Y1(v,this)})),i)if(m={values:s(wt),keys:o?p:s(dp),entries:s(mp)},u)for(x in m)(Pn||l||!(x in f))&&za(f,x,m[x]);else V1({target:r,proto:!0,forced:Pn||l},m);return(!_n||u)&&f[St]!==p&&za(f,St,p,{name:i}),pp[r]=p,m}});var An=a((m6,qp)=>{"use strict";qp.exports=function(e,r){return{value:e,done:r}}});var fr=a(()=>{"use strict";var n_=mf().charAt,i_=Ke(),Sp=ze(),a_=Rn(),xp=An(),wp="String Iterator",o_=Sp.set,u_=Sp.getterFor(wp);a_(String,"String",function(e){o_(this,{type:wp,string:i_(e),index:0})},function(){var r=u_(this),t=r.string,n=r.index,i;return n>=t.length?xp(void 0,!0):(i=n_(t,n),r.index+=i.length,xp(i,!1))})});var Va=a((g6,Op)=>{"use strict";var s_=D(),Tp=Q(),c_=yn();Op.exports=function(e,r,t){var n,i;Tp(e);try{if(n=c_(e,"return"),!n){if(r==="throw")throw t;return t}n=s_(n,e)}catch(o){i=!0,n=o}if(r==="throw")throw t;if(i)throw n;return Tp(n),t}});var Ep=a((b6,Cp)=>{"use strict";var l_=Q(),f_=Va();Cp.exports=function(e,r,t,n){try{return n?r(l_(t)[0],t[1]):r(t)}catch(i){f_(e,"throw",i)}}});var Ya=a((q6,Ip)=>{"use strict";var p_=R(),v_=lr(),d_=p_("iterator"),m_=Array.prototype;Ip.exports=function(e){return e!==void 0&&(v_.Array===e||m_[d_]===e)}});var Tt=a((x6,_p)=>{"use strict";var h_=dt(),kp=yn(),y_=ir(),g_=lr(),b_=R(),q_=b_("iterator");_p.exports=function(e){if(!y_(e))return kp(e,q_)||kp(e,"@@iterator")||g_[h_(e)]}});var Nn=a((S6,Pp)=>{"use strict";var x_=D(),S_=F(),w_=Q(),T_=He(),O_=Tt(),C_=TypeError;Pp.exports=function(e,r){var t=arguments.length<2?O_(e):r;if(S_(t))return w_(x_(t,e));throw new C_(T_(e)+" is not iterable")}});var Mp=a((w6,Np)=>{"use strict";var E_=z(),I_=D(),k_=re(),__=Ep(),P_=Ya(),R_=ht(),A_=le(),Rp=Fr(),N_=Dr(),M_=Nn(),j_=Tt(),Ap=Array;Np.exports=function(r){var t=k_(r),n=R_(this),i=arguments.length,o=i>1?arguments[1]:void 0,u=o!==void 0;u&&(o=E_(o,i>2?arguments[2]:void 0));var s=j_(t),c=0,l,f,v,p,d,h;if(s&&!(this===Ap&&P_(s)))for(f=n?new this:[],p=M_(t,s),d=p.next;!(v=I_(d,p)).done;c++)h=u?__(p,o,[v.value,c],!0):v.value,Rp(f,c,h);else for(l=A_(t),f=n?new this(l):Ap(l);l>c;c++)h=u?o(t[c],c):t[c],Rp(f,c,h);return N_(f,c),f}});var Qa=a((T6,Fp)=>{"use strict";var $_=R(),$p=$_("iterator"),Lp=!1;try{jp=0,Ja={next:function(){return{done:!!jp++}},return:function(){Lp=!0}},Ja[$p]=function(){return this},Array.from(Ja,function(){throw 2})}catch{}var jp,Ja;Fp.exports=function(e,r){try{if(!r&&!Lp)return!1}catch{return!1}var t=!1;try{var n={};n[$p]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var Dp=a(()=>{"use strict";var L_=q(),F_=Mp(),D_=Qa(),B_=!D_(function(e){Array.from(e)});L_({target:"Array",stat:!0,forced:B_},{from:F_})});var Gp=a((E6,Bp)=>{"use strict";fr();Dp();var G_=K();Bp.exports=G_.Array.from});var Wp=a((I6,Up)=>{"use strict";var U_=Gp();Up.exports=U_});var Kp=a((k6,Hp)=>{"use strict";var W_=Wp();Hp.exports=W_});var Vp=a((_6,zp)=>{"use strict";var H_=Kp();zp.exports=H_});var Xa=a((P6,Yp)=>{"use strict";Yp.exports=Vp()});var Mn=a((R6,Jp)=>{Jp.exports=Xa()});var Ot=a((A6,Qp)=>{"use strict";var K_=TypeError,z_=9007199254740991;Qp.exports=function(e){if(e>z_)throw K_("Maximum allowed index exceeded");return e}});var rv=a((N6,ev)=>{"use strict";var Xp=ke(),V_=ht(),Y_=$(),J_=R(),Q_=J_("species"),Zp=Array;ev.exports=function(e){var r;return Xp(e)&&(r=e.constructor,V_(r)&&(r===Zp||Xp(r.prototype))?r=void 0:Y_(r)&&(r=r[Q_],r===null&&(r=void 0))),r===void 0?Zp:r}});var jn=a((M6,tv)=>{"use strict";var X_=rv();tv.exports=function(e,r){return new(X_(e))(r===0?0:r)}});var Za=a(()=>{"use strict";var Z_=q(),eP=_(),rP=ke(),tP=$(),nP=re(),iP=le(),nv=Ot(),iv=Fr(),aP=Dr(),oP=jn(),uP=yt(),sP=R(),cP=Ar(),av=sP("isConcatSpreadable"),lP=cP>=51||!eP(function(){var e=[];return e[av]=!1,e.concat()[0]!==e}),fP=function(e){if(!tP(e))return!1;var r=e[av];return r!==void 0?!!r:rP(e)},pP=!lP||!uP("concat");Z_({target:"Array",proto:!0,arity:1,forced:pP},{concat:function(r){var t=nP(this),n=oP(t,0),i=0,o,u,s,c,l;for(o=-1,s=arguments.length;o<s;o++)if(l=o===-1?t:arguments[o],fP(l))for(c=iP(l),nv(i+c),u=0;u<c;u++,i++)u in l&&iv(n,i,l[u]);else nv(i+1),iv(n,i++,l);return aP(n,i),n}})});var Ct=a(()=>{});var Et=a(ov=>{"use strict";var vP=Ma(),dP=Cn(),mP=dP.concat("length","prototype");ov.f=Object.getOwnPropertyNames||function(r){return vP(r,mP)}});var eo=a((B6,cv)=>{"use strict";var hP=xe(),yP=Ie(),uv=Et().f,gP=sr(),sv=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],bP=function(e){try{return uv(e)}catch{return gP(sv)}};cv.exports.f=function(r){return sv&&hP(r)==="Window"?bP(r):uv(yP(r))}});var $n=a(lv=>{"use strict";lv.f=Object.getOwnPropertySymbols});var Ln=a((U6,fv)=>{"use strict";var qP=te();fv.exports=function(e,r,t){return qP.f(e,r,t)}});var Ur=a(pv=>{"use strict";var xP=R();pv.f=xP});var M=a((H6,dv)=>{"use strict";var vv=K(),SP=W(),wP=Ur(),TP=te().f;dv.exports=function(e){var r=vv.Symbol||(vv.Symbol={});SP(r,e)||TP(r,e,{value:wP.f(e)})}});var ro=a((K6,mv)=>{"use strict";var OP=D(),CP=U(),EP=R(),IP=_e();mv.exports=function(){var e=CP("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=EP("toPrimitive");r&&!r[n]&&IP(r,n,function(i){return OP(t,this)},{arity:1})}});var It=a((z6,yv)=>{"use strict";var kP=z(),_P=mn(),PP=re(),RP=le(),hv=jn(),to=Fr(),Ye=function(e){var r=e===1,t=e===2,n=e===3,i=e===4,o=e===6,u=e===7,s=e===5||o;return function(c,l,f){for(var v=PP(c),p=_P(v),d=RP(p),h=kP(l,f),m=0,x=0,y=r?hv(c,d):t||u?hv(c,0):void 0,b,E;d>m;m++)if((s||m in p)&&(b=p[m],E=h(b,m,v),e))if(r)to(y,m,E);else if(E)switch(e){case 3:return!0;case 5:return b;case 6:return m;case 2:to(y,x++,b)}else switch(e){case 4:return!1;case 7:to(y,x++,b)}return o?-1:n||i?i:y}};yv.exports={forEach:Ye(0),map:Ye(1),filter:Ye(2),some:Ye(3),every:Ye(4),find:Ye(5),findIndex:Ye(6),filterReject:Ye(7)}});var Nv=a(()=>{"use strict";var Fn=q(),Pt=P(),fo=D(),AP=A(),NP=Z(),Wr=G(),Hr=or(),MP=_(),H=W(),jP=B(),oo=Q(),Dn=Ie(),po=gn(),$P=Ke(),uo=We(),Kr=Ve(),qv=En(),LP=Et(),xv=eo(),FP=$n(),Sv=ft(),wv=te(),DP=ja(),Tv=ra(),no=_e(),BP=Ln(),vo=ur(),GP=gt(),Ov=Gr(),gv=Mr(),UP=R(),WP=Ur(),HP=M(),KP=ro(),zP=Re(),Cv=ze(),Bn=It().forEach,ne=GP("hidden"),Gn="Symbol",_t="prototype",VP=Cv.set,bv=Cv.getterFor(Gn),fe=Object[_t],pr=Pt.Symbol,kt=pr&&pr[_t],YP=Pt.RangeError,JP=Pt.TypeError,io=Pt.QObject,Ev=Sv.f,vr=wv.f,Iv=xv.f,QP=Tv.f,kv=AP([].push),Ae=vo("symbols"),Rt=vo("op-symbols"),XP=vo("wks"),so=!io||!io[_t]||!io[_t].findChild,_v=function(e,r,t){var n=Ev(fe,r);n&&delete fe[r],vr(e,r,t),n&&e!==fe&&vr(fe,r,n)},co=Wr&&MP(function(){return Kr(vr({},"a",{get:function(){return vr(this,"a",{value:7}).a}})).a!==7})?_v:vr,ao=function(e,r){var t=Ae[e]=Kr(kt);return VP(t,{type:Gn,tag:e,description:r}),Wr||(t.description=r),t},Un=function(r,t,n){r===fe&&Un(Rt,t,n),oo(r);var i=po(t);return oo(n),H(Ae,i)?(n.enumerable?(H(r,ne)&&r[ne][i]&&(r[ne][i]=!1),n=Kr(n,{enumerable:uo(0,!1)})):(H(r,ne)||vr(r,ne,uo(1,Kr(null))),r[ne][i]=!0),co(r,i,n)):vr(r,i,n)},mo=function(r,t){oo(r);var n=Dn(t),i=qv(n).concat(Av(n));return Bn(i,function(o){(!Wr||fo(lo,n,o))&&Un(r,o,n[o])}),r},ZP=function(r,t){return t===void 0?Kr(r):mo(Kr(r),t)},lo=function(r){var t=po(r),n=fo(QP,this,t);return this===fe&&H(Ae,t)&&!H(Rt,t)?!1:n||!H(this,t)||!H(Ae,t)||H(this,ne)&&this[ne][t]?n:!0},Pv=function(r,t){var n=Dn(r),i=po(t);if(!(n===fe&&H(Ae,i)&&!H(Rt,i))){var o=Ev(n,i);return o&&H(Ae,i)&&!(H(n,ne)&&n[ne][i])&&(o.enumerable=!0),o}},Rv=function(r){var t=Iv(Dn(r)),n=[];return Bn(t,function(i){!H(Ae,i)&&!H(Ov,i)&&kv(n,i)}),n},Av=function(e){var r=e===fe,t=Iv(r?Rt:Dn(e)),n=[];return Bn(t,function(i){H(Ae,i)&&(!r||H(fe,i))&&kv(n,Ae[i])}),n};Hr||(pr=function(){if(jP(kt,this))throw new JP("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:$P(arguments[0]),t=gv(r),n=function(i){var o=this===void 0?Pt:this;o===fe&&fo(n,Rt,i),H(o,ne)&&H(o[ne],t)&&(o[ne][t]=!1);var u=uo(1,i);try{co(o,t,u)}catch(s){if(!(s instanceof YP))throw s;_v(o,t,u)}};return Wr&&so&&co(fe,t,{configurable:!0,set:n}),ao(t,r)},kt=pr[_t],no(kt,"toString",function(){return bv(this).tag}),no(pr,"withoutSetter",function(e){return ao(gv(e),e)}),Tv.f=lo,wv.f=Un,DP.f=mo,Sv.f=Pv,LP.f=xv.f=Rv,FP.f=Av,WP.f=function(e){return ao(UP(e),e)},Wr&&(BP(kt,"description",{configurable:!0,get:function(){return bv(this).description}}),NP||no(fe,"propertyIsEnumerable",lo,{unsafe:!0})));Fn({global:!0,constructor:!0,wrap:!0,forced:!Hr,sham:!Hr},{Symbol:pr});Bn(qv(XP),function(e){HP(e)});Fn({target:Gn,stat:!0,forced:!Hr},{useSetter:function(){so=!0},useSimple:function(){so=!1}});Fn({target:"Object",stat:!0,forced:!Hr,sham:!Wr},{create:ZP,defineProperty:Un,defineProperties:mo,getOwnPropertyDescriptor:Pv});Fn({target:"Object",stat:!0,forced:!Hr},{getOwnPropertyNames:Rv});KP();zP(pr,Gn);Ov[ne]=!0});var ho=a((J6,Mv)=>{"use strict";var eR=or();Mv.exports=eR&&!!Symbol.for&&!!Symbol.keyFor});var $v=a(()=>{"use strict";var rR=q(),tR=U(),nR=W(),iR=Ke(),jv=ur(),aR=ho(),yo=jv("string-to-symbol-registry"),oR=jv("symbol-to-string-registry");rR({target:"Symbol",stat:!0,forced:!aR},{for:function(e){var r=iR(e);if(nR(yo,r))return yo[r];var t=tR("Symbol")(r);return yo[r]=t,oR[t]=r,t}})});var Fv=a(()=>{"use strict";var uR=q(),sR=W(),cR=Nr(),lR=He(),fR=ur(),pR=ho(),Lv=fR("symbol-to-string-registry");uR({target:"Symbol",stat:!0,forced:!pR},{keyFor:function(r){if(!cR(r))throw new TypeError(lR(r)+" is not a symbol");if(sR(Lv,r))return Lv[r]}})});var Bv=a((r8,Dv)=>{"use strict";var vR=$(),dR=ze().get;Dv.exports=function(r){if(!vR(r))return!1;var t=dR(r);return!!t&&t.type==="RawJSON"}});var Kv=a((t8,Hv)=>{"use strict";var go=A(),mR=W(),Wn=SyntaxError,hR=parseInt,yR=String.fromCharCode,gR=go("".charAt),Gv=go("".slice),Uv=go(/./.exec),Wv={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},bR=/^[\da-f]{4}$/i,qR=/^[\u0000-\u001F]$/;Hv.exports=function(e,r){for(var t=!0,n="";r<e.length;){var i=gR(e,r);if(i==="\\"){var o=Gv(e,r,r+2);if(mR(Wv,o))n+=Wv[o],r+=2;else if(o==="\\u"){r+=2;var u=Gv(e,r,r+4);if(!Uv(bR,u))throw new Wn("Bad Unicode escape at: "+r);n+=yR(hR(u,16)),r+=4}else throw new Wn('Unknown escape sequence: "'+o+'"')}else if(i==='"'){t=!1,r++;break}else{if(Uv(qR,i))throw new Wn("Bad control character in string literal at: "+r);n+=i,r++}}if(t)throw new Wn("Unterminated string at: "+r);return{value:n,end:r}}});var Vv=a((n8,zv)=>{"use strict";var xR=_();zv.exports=!xR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var sd=a(()=>{"use strict";var SR=q(),td=U(),wR=Pr(),nd=D(),dr=A(),id=_(),Yv=ke(),Kn=N(),TR=Bv(),Jv=Nr(),Qv=xe(),OR=Ke(),CR=sr(),ER=Kv(),IR=Mr(),kR=or(),bo=Vv(),ad=String,Je=td("JSON","stringify"),Hn=dr(/./.exec),xo=dr("".charAt),_R=dr("".charCodeAt),PR=dr("".replace),qo=dr("".slice),So=dr([].push),RR=dr(1.1.toString),AR=/[\uD800-\uDFFF]/g,Xv=/^[\uD800-\uDBFF]$/,Zv=/^[\uDC00-\uDFFF]$/,wo=IR(),ed=wo.length,od=!kR||id(function(){var e=td("Symbol")("stringify detection");return Je([e])!=="[null]"||Je({a:e})!=="{}"||Je(Object(e))!=="{}"}),rd=id(function(){return Je("\uDF06\uD834")!=='"\\udf06\\ud834"'||Je("\uDEAD")!=='"\\udead"'}),NR=od?function(e,r){var t=CR(arguments),n=ud(r);if(!(!Kn(n)&&(e===void 0||Jv(e))))return t[1]=function(i,o){if(Kn(n)&&(o=nd(n,this,ad(i),o)),!Jv(o))return o},wR(Je,null,t)}:Je,MR=function(e,r,t){var n=xo(t,r-1),i=xo(t,r+1);return Hn(Xv,e)&&!Hn(Zv,i)||Hn(Zv,e)&&!Hn(Xv,n)?"\\u"+RR(_R(e,0),16):e},ud=function(e){if(Kn(e))return e;if(Yv(e)){for(var r=e.length,t=[],n=0;n<r;n++){var i=e[n];typeof i=="string"?So(t,i):(typeof i=="number"||Qv(i)==="Number"||Qv(i)==="String")&&So(t,OR(i))}var o=t.length,u=!0;return function(s,c){if(u)return u=!1,c;if(Yv(this))return c;for(var l=0;l<o;l++)if(t[l]===s)return c}}};Je&&SR({target:"JSON",stat:!0,arity:3,forced:od||rd||!bo},{stringify:function(r,t,n){var i=ud(t),o=[],u=NR(r,function(d,h){var m=Kn(i)?nd(i,this,ad(d),h):h;return!bo&&TR(m)?wo+(So(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(rd&&(u=PR(u,AR,MR)),bo))return u;for(var s="",c=u.length,l=0;l<c;l++){var f=xo(u,l);if(f==='"'){var v=ER(u,++l).end-1,p=qo(u,l,v);s+=qo(p,0,ed)===wo?o[qo(p,ed)]:'"'+p+'"',l=v}else s+=f}return s}})});var ld=a(()=>{"use strict";var jR=q(),$R=or(),LR=_(),cd=$n(),FR=re(),DR=!$R||LR(function(){cd.f(1)});jR({target:"Object",stat:!0,forced:DR},{getOwnPropertySymbols:function(r){var t=cd.f;return t?t(FR(r)):[]}})});var fd=a(()=>{"use strict";Nv();$v();Fv();sd();ld()});var To=a(()=>{"use strict";var BR=M();BR("asyncDispose")});var Oo=a(()=>{"use strict";var GR=M();GR("asyncIterator")});var pd=a(()=>{});var Co=a(()=>{"use strict";var UR=M();UR("dispose")});var vd=a(()=>{"use strict";var WR=M();WR("hasInstance")});var dd=a(()=>{"use strict";var HR=M();HR("isConcatSpreadable")});var Eo=a(()=>{"use strict";var KR=M();KR("iterator")});var md=a(()=>{"use strict";var zR=M();zR("match")});var hd=a(()=>{"use strict";var VR=M();VR("matchAll")});var yd=a(()=>{"use strict";var YR=M();YR("replace")});var gd=a(()=>{"use strict";var JR=M();JR("search")});var bd=a(()=>{"use strict";var QR=M();QR("species")});var qd=a(()=>{"use strict";var XR=M();XR("split")});var Io=a(()=>{"use strict";var ZR=M(),eA=ro();ZR("toPrimitive");eA()});var xd=a(()=>{"use strict";var rA=U(),tA=M(),nA=Re();tA("toStringTag");nA(rA("Symbol"),"Symbol")});var Sd=a(()=>{"use strict";var iA=M();iA("unscopables")});var wd=a(()=>{"use strict";var aA=P(),oA=Re();oA(aA.JSON,"JSON",!0)});var Td=a(()=>{});var Od=a(()=>{});var Ed=a((V8,Cd)=>{"use strict";Za();Ct();fd();To();Oo();pd();Co();vd();dd();Eo();md();hd();yd();gd();bd();qd();Io();xd();Sd();wd();Td();Od();var uA=K();Cd.exports=uA.Symbol});var ko=a((Y8,Id)=>{"use strict";Id.exports=function(){}});var mr=a((J8,Ad)=>{"use strict";var sA=Ie(),_o=ko(),kd=lr(),Pd=ze(),cA=te().f,lA=Rn(),zn=An(),fA=Z(),pA=G(),Rd="Array Iterator",vA=Pd.set,dA=Pd.getterFor(Rd);Ad.exports=lA(Array,"Array",function(e,r){vA(this,{type:Rd,target:sA(e),index:0,kind:r})},function(){var e=dA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,zn(void 0,!0);switch(e.kind){case"keys":return zn(t,!1);case"values":return zn(r[t],!1)}return zn([t,r[t]],!1)},"values");var _d=kd.Arguments=kd.Array;_o("keys");_o("values");_o("entries");if(!fA&&pA&&_d.name!=="values")try{cA(_d,"name",{value:"values"})}catch{}});var Md=a((Q8,Nd)=>{"use strict";Nd.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var hr=a(()=>{"use strict";mr();var mA=Md(),hA=P(),yA=Re(),jd=lr();for(Vn in mA)yA(hA[Vn],Vn),jd[Vn]=jd.Array;var Vn});var Ld=a((eW,$d)=>{"use strict";var gA=Ed();hr();$d.exports=gA});var Bd=a(()=>{"use strict";var bA=R(),qA=te().f,Fd=bA("metadata"),Dd=Function.prototype;Dd[Fd]===void 0&&qA(Dd,Fd,{value:null})});var Gd=a(()=>{"use strict";To()});var Ud=a(()=>{"use strict";Co()});var Wd=a(()=>{"use strict";var xA=M();xA("metadata")});var Kd=a((cW,Hd)=>{"use strict";var SA=Ld();Bd();Gd();Ud();Wd();Hd.exports=SA});var Ro=a((lW,zd)=>{"use strict";var wA=U(),TA=A(),Po=wA("Symbol"),OA=Po.keyFor,CA=TA(Po.prototype.valueOf);zd.exports=Po.isRegisteredSymbol||function(r){try{return OA(CA(r))!==void 0}catch{return!1}}});var Vd=a(()=>{"use strict";var EA=q(),IA=Ro();EA({target:"Symbol",stat:!0},{isRegisteredSymbol:IA})});var Mo=a((vW,em)=>{"use strict";var kA=ur(),Xd=U(),_A=A(),PA=Nr(),RA=R(),Jn=Xd("Symbol"),Yd=Jn.isWellKnownSymbol,Zd=Xd("Object","getOwnPropertyNames"),AA=_A(Jn.prototype.valueOf),Jd=kA("wks");for(Yn=0,Ao=Zd(Jn),Qd=Ao.length;Yn<Qd;Yn++)try{No=Ao[Yn],PA(Jn[No])&&RA(No)}catch{}var No,Yn,Ao,Qd;em.exports=function(r){if(Yd&&Yd(r))return!0;try{for(var t=AA(r),n=0,i=Zd(Jd),o=i.length;n<o;n++)if(Jd[i[n]]==t)return!0}catch{}return!1}});var rm=a(()=>{"use strict";var NA=q(),MA=Mo();NA({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:MA})});var tm=a(()=>{"use strict";var jA=M();jA("customMatcher")});var nm=a(()=>{"use strict";var $A=M();$A("observable")});var im=a(()=>{"use strict";var LA=q(),FA=Ro();LA({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:FA})});var am=a(()=>{"use strict";var DA=q(),BA=Mo();DA({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:BA})});var om=a(()=>{"use strict";var GA=M();GA("matcher")});var um=a(()=>{"use strict";var UA=M();UA("metadataKey")});var sm=a(()=>{"use strict";var WA=M();WA("patternMatch")});var cm=a(()=>{"use strict";var HA=M();HA("replaceAll")});var fm=a((RW,lm)=>{"use strict";var KA=Kd();Vd();rm();tm();nm();im();am();om();um();sm();cm();lm.exports=KA});var we=a((AW,pm)=>{"use strict";pm.exports=fm()});var Qn=a((NW,vm)=>{vm.exports=we()});var mm=a((MW,dm)=>{"use strict";mr();fr();var zA=Tt();dm.exports=zA});var ym=a((jW,hm)=>{"use strict";var VA=mm();hr();hm.exports=VA});var bm=a(($W,gm)=>{"use strict";var YA=ym();gm.exports=YA});var xm=a((LW,qm)=>{"use strict";var JA=bm();qm.exports=JA});var jo=a((FW,Sm)=>{"use strict";Sm.exports=xm()});var Xn=a((DW,wm)=>{wm.exports=jo()});var Om=a((BW,Tm)=>{"use strict";mr();fr();var QA=Nn();Tm.exports=QA});var Em=a((GW,Cm)=>{"use strict";var XA=Om();hr();Cm.exports=XA});var km=a((UW,Im)=>{"use strict";var ZA=Em();Im.exports=ZA});var Pm=a((WW,_m)=>{"use strict";var eN=km();_m.exports=eN});var Am=a((HW,Rm)=>{"use strict";Rm.exports=Pm()});var Zn=a((KW,Nm)=>{Nm.exports=Am()});var jm=a((zW,Mm)=>{"use strict";var rN=U(),tN=A(),nN=Et(),iN=$n(),aN=Q(),oN=tN([].concat);Mm.exports=rN("Reflect","ownKeys")||function(r){var t=nN.f(aN(r)),n=iN.f;return n?oN(t,n(r)):t}});var Fm=a((VW,Lm)=>{"use strict";var $m=W(),uN=jm(),sN=ft(),cN=te();Lm.exports=function(e,r,t){for(var n=uN(r),i=cN.f,o=sN.f,u=0;u<n.length;u++){var s=n[u];!$m(e,s)&&!(t&&$m(t,s))&&i(e,s,o(r,s))}}});var Bm=a((YW,Dm)=>{"use strict";var lN=$(),fN=Se();Dm.exports=function(e,r){lN(r)&&"cause"in r&&fN(e,"cause",r.cause)}});var Hm=a((JW,Wm)=>{"use strict";var pN=A(),Gm=Error,vN=pN("".replace),dN=function(e){return String(new Gm(e).stack)}("zxcasd"),Um=/\n\s*at [^:]*:[^\n]*/,mN=Um.test(dN);Wm.exports=function(e,r){if(mN&&typeof e=="string"&&!Gm.prepareStackTrace)for(;r--;)e=vN(e,Um,"");return e}});var zm=a((QW,Km)=>{"use strict";var hN=_(),yN=We();Km.exports=!hN(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",yN(1,7)),e.stack!==7):!0})});var Jm=a((XW,Ym)=>{"use strict";var gN=Se(),bN=Hm(),qN=zm(),Vm=Error.captureStackTrace;Ym.exports=function(e,r,t,n){qN&&(Vm?Vm(e,r):gN(e,"stack",bN(t,n)))}});var pe=a((ZW,eh)=>{"use strict";var xN=z(),SN=D(),wN=Q(),TN=He(),ON=Ya(),CN=le(),Qm=B(),EN=Nn(),IN=Tt(),Xm=Va(),kN=TypeError,ei=function(e,r){this.stopped=e,this.result=r},Zm=ei.prototype;eh.exports=function(e,r,t){var n=t&&t.that,i=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),s=!!(t&&t.INTERRUPTED),c=xN(r,n),l,f,v,p,d,h,m,x=function(b){return l&&Xm(l,"normal"),new ei(!0,b)},y=function(b){return i?(wN(b),s?c(b[0],b[1],x):c(b[0],b[1])):s?c(b,x):c(b)};if(o)l=e.iterator;else if(u)l=e;else{if(f=IN(e),!f)throw new kN(TN(e)+" is not iterable");if(ON(f)){for(v=0,p=CN(e);p>v;v++)if(d=y(e[v]),d&&Qm(Zm,d))return d;return new ei(!1)}l=EN(e,f)}for(h=o?e.next:l.next;!(m=SN(h,l)).done;){try{d=y(m.value)}catch(b){Xm(l,"throw",b)}if(typeof d=="object"&&d&&Qm(Zm,d))return d}return new ei(!1)}});var th=a((eH,rh)=>{"use strict";var _N=Ke();rh.exports=function(e,r){return e===void 0?arguments.length<2?"":r:_N(e)}});var ih=a(()=>{"use strict";var PN=q(),RN=B(),AN=qt(),ri=xt(),NN=Fm(),nh=Ve(),$o=Se(),Lo=We(),MN=Bm(),jN=Jm(),$N=pe(),LN=th(),FN=R(),DN=FN("toStringTag"),ti=Error,BN=[].push,zr=function(r,t){var n=RN(Fo,this),i;ri?i=ri(new ti,n?AN(this):Fo):(i=n?this:nh(Fo),$o(i,DN,"Error")),t!==void 0&&$o(i,"message",LN(t)),jN(i,zr,i.stack,1),arguments.length>2&&MN(i,arguments[2]);var o=[];return $N(r,BN,{that:o}),$o(i,"errors",o),i};ri?ri(zr,ti):NN(zr,ti,{name:!0});var Fo=zr.prototype=nh(ti.prototype,{constructor:Lo(1,zr),message:Lo(1,""),name:Lo(1,"AggregateError")});PN({global:!0,constructor:!0,arity:2},{AggregateError:zr})});var Do=a(()=>{"use strict";ih()});var Bo=a((aH,ah)=>{"use strict";var At=P(),GN=Rr(),UN=xe(),ni=function(e){return GN.slice(0,e.length)===e};ah.exports=function(){return ni("Bun/")?"BUN":ni("Cloudflare-Workers")?"CLOUDFLARE":ni("Deno/")?"DENO":ni("Node.js/")?"NODE":At.Bun&&typeof Bun.version=="string"?"BUN":At.Deno&&typeof Deno.version=="object"?"DENO":UN(At.process)==="process"?"NODE":At.window&&At.document?"BROWSER":"REST"}()});var Nt=a((oH,oh)=>{"use strict";var WN=Bo();oh.exports=WN==="NODE"});var Go=a((uH,sh)=>{"use strict";var HN=U(),KN=Ln(),zN=R(),VN=G(),uh=zN("species");sh.exports=function(e){var r=HN(e);VN&&r&&!r[uh]&&KN(r,uh,{configurable:!0,get:function(){return this}})}});var ii=a((sH,ch)=>{"use strict";var YN=B(),JN=TypeError;ch.exports=function(e,r){if(YN(r,e))return e;throw new JN("Incorrect invocation")}});var Uo=a((cH,lh)=>{"use strict";var QN=ht(),XN=He(),ZN=TypeError;lh.exports=function(e){if(QN(e))return e;throw new ZN(XN(e)+" is not a constructor")}});var Wo=a((lH,ph)=>{"use strict";var fh=Q(),e2=Uo(),r2=ir(),t2=R(),n2=t2("species");ph.exports=function(e,r){var t=fh(e).constructor,n;return t===void 0||r2(n=fh(t)[n2])?r:e2(n)}});var dh=a((fH,vh)=>{"use strict";var i2=TypeError;vh.exports=function(e,r){if(e<r)throw new i2("Not enough arguments");return e}});var Ho=a((pH,mh)=>{"use strict";var a2=Rr();mh.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(a2)});var eu=a((vH,Th)=>{"use strict";var ue=P(),o2=Pr(),u2=z(),hh=N(),s2=W(),wh=_(),yh=$a(),c2=sr(),gh=bn(),l2=dh(),f2=Ho(),p2=Nt(),Qo=ue.setImmediate,Xo=ue.clearImmediate,v2=ue.process,Ko=ue.Dispatch,d2=ue.Function,bh=ue.MessageChannel,m2=ue.String,zo=0,Mt={},qh="onreadystatechange",jt,yr,Vo,Yo;wh(function(){jt=ue.location});var Zo=function(e){if(s2(Mt,e)){var r=Mt[e];delete Mt[e],r()}},Jo=function(e){return function(){Zo(e)}},xh=function(e){Zo(e.data)},Sh=function(e){ue.postMessage(m2(e),jt.protocol+"//"+jt.host)};(!Qo||!Xo)&&(Qo=function(r){l2(arguments.length,1);var t=hh(r)?r:d2(r),n=c2(arguments,1);return Mt[++zo]=function(){o2(t,void 0,n)},yr(zo),zo},Xo=function(r){delete Mt[r]},p2?yr=function(e){v2.nextTick(Jo(e))}:Ko&&Ko.now?yr=function(e){Ko.now(Jo(e))}:bh&&!f2?(Vo=new bh,Yo=Vo.port2,Vo.port1.onmessage=xh,yr=u2(Yo.postMessage,Yo)):ue.addEventListener&&hh(ue.postMessage)&&!ue.importScripts&&jt&&jt.protocol!=="file:"&&!wh(Sh)?(yr=Sh,ue.addEventListener("message",xh,!1)):qh in gh("script")?yr=function(e){yh.appendChild(gh("script"))[qh]=function(){yh.removeChild(this),Zo(e)}}:yr=function(e){setTimeout(Jo(e),0)});Th.exports={set:Qo,clear:Xo}});var Eh=a((dH,Ch)=>{"use strict";var Oh=P(),h2=G(),y2=Object.getOwnPropertyDescriptor;Ch.exports=function(e){if(!h2)return Oh[e];var r=y2(Oh,e);return r&&r.value}});var ru=a((mH,kh)=>{"use strict";var Ih=function(){this.head=null,this.tail=null};Ih.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};kh.exports=Ih});var Ph=a((hH,_h)=>{"use strict";var g2=Rr();_h.exports=/ipad|iphone|ipod/i.test(g2)&&typeof Pebble<"u"});var Ah=a((yH,Rh)=>{"use strict";var b2=Rr();Rh.exports=/web0s(?!.*chrome)/i.test(b2)});var Dh=a((gH,Fh)=>{"use strict";var Yr=P(),q2=Eh(),Nh=z(),tu=eu().set,x2=ru(),S2=Ho(),w2=Ph(),T2=Ah(),nu=Nt(),Mh=Yr.MutationObserver||Yr.WebKitMutationObserver,jh=Yr.document,$h=Yr.process,ai=Yr.Promise,ou=q2("queueMicrotask"),Vr,iu,au,oi,Lh;ou||($t=new x2,Lt=function(){var e,r;for(nu&&(e=$h.domain)&&e.exit();r=$t.get();)try{r()}catch(t){throw $t.head&&Vr(),t}e&&e.enter()},!S2&&!nu&&!T2&&Mh&&jh?(iu=!0,au=jh.createTextNode(""),new Mh(Lt).observe(au,{characterData:!0}),Vr=function(){au.data=iu=!iu}):!w2&&ai&&ai.resolve?(oi=ai.resolve(void 0),oi.constructor=ai,Lh=Nh(oi.then,oi),Vr=function(){Lh(Lt)}):nu?Vr=function(){$h.nextTick(Lt)}:(tu=Nh(tu,Yr),Vr=function(){tu(Lt)}),ou=function(e){$t.head||Vr(),$t.add(e)});var $t,Lt;Fh.exports=ou});var Gh=a((bH,Bh)=>{"use strict";Bh.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var gr=a((qH,Uh)=>{"use strict";Uh.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var br=a((xH,Wh)=>{"use strict";var O2=P();Wh.exports=O2.Promise});var Jr=a((SH,Vh)=>{"use strict";var C2=P(),Ft=br(),E2=N(),I2=va(),k2=qa(),_2=R(),Hh=Bo(),P2=Z(),uu=Ar(),Kh=Ft&&Ft.prototype,R2=_2("species"),su=!1,zh=E2(C2.PromiseRejectionEvent),A2=I2("Promise",function(){var e=k2(Ft),r=e!==String(Ft);if(!r&&uu===66||P2&&!(Kh.catch&&Kh.finally))return!0;if(!uu||uu<51||!/native code/.test(e)){var t=new Ft(function(o){o(1)}),n=function(o){o(function(){},function(){})},i=t.constructor={};if(i[R2]=n,su=t.then(function(){})instanceof n,!su)return!0}return!r&&(Hh==="BROWSER"||Hh==="DENO")&&!zh});Vh.exports={CONSTRUCTOR:A2,REJECTION_EVENT:zh,SUBCLASSING:su}});var Te=a((wH,Jh)=>{"use strict";var Yh=F(),N2=TypeError,M2=function(e){var r,t;this.promise=new e(function(n,i){if(r!==void 0||t!==void 0)throw new N2("Bad Promise constructor");r=n,t=i}),this.resolve=Yh(r),this.reject=Yh(t)};Jh.exports.f=function(e){return new M2(e)}});var hy=a(()=>{"use strict";var j2=q(),$2=Z(),li=Nt(),Qe=P(),L2=K(),et=D(),Qh=_e(),Xh=xt(),F2=Re(),D2=Go(),B2=F(),ci=N(),G2=$(),U2=ii(),W2=Wo(),ny=eu().set,vu=Dh(),H2=Gh(),K2=gr(),z2=ru(),iy=ze(),fi=br(),du=Jr(),ay=Te(),pi="Promise",oy=du.CONSTRUCTOR,V2=du.REJECTION_EVENT,Y2=du.SUBCLASSING,cu=iy.getterFor(pi),J2=iy.set,Qr=fi&&fi.prototype,qr=fi,ui=Qr,uy=Qe.TypeError,lu=Qe.document,mu=Qe.process,fu=ay.f,Q2=fu,X2=!!(lu&&lu.createEvent&&Qe.dispatchEvent),sy="unhandledrejection",Z2="rejectionhandled",Zh=0,cy=1,eM=2,hu=1,ly=2,si,ey,fy,ry,py=function(e){var r;return G2(e)&&ci(r=e.then)?r:!1},vy=function(e,r){var t=r.value,n=r.state===cy,i=n?e.ok:e.fail,o=e.resolve,u=e.reject,s=e.domain,c,l,f;try{i?(n||(r.rejection===ly&&tM(r),r.rejection=hu),i===!0?c=t:(s&&s.enter(),c=i(t),s&&(s.exit(),f=!0)),c===e.promise?u(new uy("Promise-chain cycle")):(l=py(c))?et(l,c,o,u):o(c)):u(t)}catch(v){s&&!f&&s.exit(),u(v)}},dy=function(e,r){e.notified||(e.notified=!0,vu(function(){for(var t=e.reactions,n;n=t.get();)vy(n,e);e.notified=!1,r&&!e.rejection&&rM(e)}))},my=function(e,r,t){var n,i;X2?(n=lu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),Qe.dispatchEvent(n)):n={promise:r,reason:t},!V2&&(i=Qe["on"+e])?i(n):e===sy&&H2("Unhandled promise rejection",t)},rM=function(e){et(ny,Qe,function(){var r=e.facade,t=e.value,n=ty(e),i;if(n&&(i=K2(function(){li?mu.emit("unhandledRejection",t,r):my(sy,r,t)}),e.rejection=li||ty(e)?ly:hu,i.error))throw i.value})},ty=function(e){return e.rejection!==hu&&!e.parent},tM=function(e){et(ny,Qe,function(){var r=e.facade;li?mu.emit("rejectionHandled",r):my(Z2,r,e.value)})},Xr=function(e,r,t){return function(n){e(r,n,t)}},Zr=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=eM,dy(e,!0))},pu=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new uy("Promise can't be resolved itself");var n=py(r);n?vu(function(){var i={done:!1};try{et(n,r,Xr(pu,i,e),Xr(Zr,i,e))}catch(o){Zr(i,o,e)}}):(e.value=r,e.state=cy,dy(e,!1))}catch(i){Zr({done:!1},i,e)}}};if(oy&&(qr=function(r){U2(this,ui),B2(r),et(si,this);var t=cu(this);try{r(Xr(pu,t),Xr(Zr,t))}catch(n){Zr(t,n)}},ui=qr.prototype,si=function(r){J2(this,{type:pi,done:!1,notified:!1,parent:!1,reactions:new z2,rejection:!1,state:Zh,value:null})},si.prototype=Qh(ui,"then",function(r,t){var n=cu(this),i=fu(W2(this,qr));return n.parent=!0,i.ok=ci(r)?r:!0,i.fail=ci(t)&&t,i.domain=li?mu.domain:void 0,n.state===Zh?n.reactions.add(i):vu(function(){vy(i,n)}),i.promise}),ey=function(){var e=new si,r=cu(e);this.promise=e,this.resolve=Xr(pu,r),this.reject=Xr(Zr,r)},ay.f=fu=function(e){return e===qr||e===fy?new ey(e):Q2(e)},!$2&&ci(fi)&&Qr!==Object.prototype)){ry=Qr.then,Y2||Qh(Qr,"then",function(r,t){var n=this;return new qr(function(i,o){et(ry,n,i,o)}).then(r,t)},{unsafe:!0});try{delete Qr.constructor}catch{}Xh&&Xh(Qr,ui)}j2({global:!0,constructor:!0,wrap:!0,forced:oy},{Promise:qr});fy=L2.Promise;F2(qr,pi,!1,!0);D2(pi)});var Dt=a((CH,yy)=>{"use strict";var nM=br(),iM=Qa(),aM=Jr().CONSTRUCTOR;yy.exports=aM||!iM(function(e){nM.all(e).then(void 0,function(){})})});var gy=a(()=>{"use strict";var oM=q(),uM=D(),sM=F(),cM=Te(),lM=gr(),fM=pe(),pM=Dt();oM({target:"Promise",stat:!0,forced:pM},{all:function(r){var t=this,n=cM.f(t),i=n.resolve,o=n.reject,u=lM(function(){var s=sM(t.resolve),c=[],l=0,f=1;fM(r,function(v){var p=l++,d=!1;f++,uM(s,t,v).then(function(h){d||(d=!0,c[p]=h,--f||i(c))},o)}),--f||i(c)});return u.error&&o(u.value),n.promise}})});var qy=a(()=>{"use strict";var vM=q(),dM=Z(),mM=Jr().CONSTRUCTOR,gu=br(),hM=U(),yM=N(),gM=_e(),by=gu&&gu.prototype;vM({target:"Promise",proto:!0,forced:mM,real:!0},{catch:function(e){return this.then(void 0,e)}});!dM&&yM(gu)&&(yu=hM("Promise").prototype.catch,by.catch!==yu&&gM(by,"catch",yu,{unsafe:!0}));var yu});var xy=a(()=>{"use strict";var bM=q(),qM=D(),xM=F(),SM=Te(),wM=gr(),TM=pe(),OM=Dt();bM({target:"Promise",stat:!0,forced:OM},{race:function(r){var t=this,n=SM.f(t),i=n.reject,o=wM(function(){var u=xM(t.resolve);TM(r,function(s){qM(u,t,s).then(n.resolve,i)})});return o.error&&i(o.value),n.promise}})});var Sy=a(()=>{"use strict";var CM=q(),EM=Te(),IM=Jr().CONSTRUCTOR;CM({target:"Promise",stat:!0,forced:IM},{reject:function(r){var t=EM.f(this),n=t.reject;return n(r),t.promise}})});var bu=a((MH,wy)=>{"use strict";var kM=Q(),_M=$(),PM=Te();wy.exports=function(e,r){if(kM(e),_M(r)&&r.constructor===e)return r;var t=PM.f(e),n=t.resolve;return n(r),t.promise}});var Cy=a(()=>{"use strict";var RM=q(),AM=U(),Ty=Z(),NM=br(),Oy=Jr().CONSTRUCTOR,MM=bu(),jM=AM("Promise"),$M=Ty&&!Oy;RM({target:"Promise",stat:!0,forced:Ty||Oy},{resolve:function(r){return MM($M&&this===jM?NM:this,r)}})});var Ey=a(()=>{"use strict";hy();gy();qy();xy();Sy();Cy()});var qu=a(()=>{"use strict";var LM=q(),FM=D(),DM=F(),BM=Te(),GM=gr(),UM=pe(),WM=Dt();LM({target:"Promise",stat:!0,forced:WM},{allSettled:function(r){var t=this,n=BM.f(t),i=n.resolve,o=n.reject,u=GM(function(){var s=DM(t.resolve),c=[],l=0,f=1;UM(r,function(v){var p=l++,d=!1;f++,FM(s,t,v).then(function(h){d||(d=!0,c[p]={status:"fulfilled",value:h},--f||i(c))},function(h){d||(d=!0,c[p]={status:"rejected",reason:h},--f||i(c))})}),--f||i(c)});return u.error&&o(u.value),n.promise}})});var xu=a(()=>{"use strict";var HM=q(),KM=D(),zM=F(),VM=U(),YM=Te(),JM=gr(),QM=pe(),XM=Dt(),Iy="No one promise resolved";HM({target:"Promise",stat:!0,forced:XM},{any:function(r){var t=this,n=VM("AggregateError"),i=YM.f(t),o=i.resolve,u=i.reject,s=JM(function(){var c=zM(t.resolve),l=[],f=0,v=1,p=!1;QM(r,function(d){var h=f++,m=!1;v++,KM(c,t,d).then(function(x){m||p||(p=!0,o(x))},function(x){m||p||(m=!0,l[h]=x,--v||u(new n(l,Iy)))})}),--v||u(new n(l,Iy))});return s.error&&u(s.value),i.promise}})});var wu=a(()=>{"use strict";var ZM=q(),ej=P(),rj=Pr(),tj=sr(),nj=Te(),ij=F(),_y=gr(),Su=ej.Promise,ky=!1,aj=!Su||!Su.try||_y(function(){Su.try(function(e){ky=e===8},8)}).error||!ky;ZM({target:"Promise",stat:!0,forced:aj},{try:function(e){var r=arguments.length>1?tj(arguments,1):[],t=nj.f(this),n=_y(function(){return rj(ij(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var Tu=a(()=>{"use strict";var oj=q(),uj=Te();oj({target:"Promise",stat:!0},{withResolvers:function(){var r=uj.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var Ny=a(()=>{"use strict";var sj=q(),cj=Z(),vi=br(),lj=_(),Ry=U(),Ay=N(),fj=Wo(),Py=bu(),pj=_e(),Cu=vi&&vi.prototype,vj=!!vi&&lj(function(){Cu.finally.call({then:function(){}},function(){})});sj({target:"Promise",proto:!0,real:!0,forced:vj},{finally:function(e){var r=fj(this,Ry("Promise")),t=Ay(e);return this.then(t?function(n){return Py(r,e()).then(function(){return n})}:e,t?function(n){return Py(r,e()).then(function(){throw n})}:e)}});!cj&&Ay(vi)&&(Ou=Ry("Promise").prototype.finally,Cu.finally!==Ou&&pj(Cu,"finally",Ou,{unsafe:!0}));var Ou});var jy=a((JH,My)=>{"use strict";Do();mr();Ct();Ey();qu();xu();wu();Tu();Ny();fr();var dj=K();My.exports=dj.Promise});var Ly=a((QH,$y)=>{"use strict";var mj=jy();hr();$y.exports=mj});var Fy=a(()=>{"use strict";wu()});var Dy=a(()=>{"use strict";Tu()});var Gy=a((tK,By)=>{"use strict";var hj=Ly();Fy();Dy();By.exports=hj});var Uy=a(()=>{"use strict";Do()});var Wy=a(()=>{"use strict";qu()});var Hy=a(()=>{"use strict";xu()});var zy=a((cK,Ky)=>{"use strict";var yj=Gy();Uy();Wy();Hy();Ky.exports=yj});var rt=a((lK,Vy)=>{"use strict";Vy.exports=zy()});var Qy=a((mK,Jy)=>{"use strict";Oo();var gj=Ur();Jy.exports=gj.f("asyncIterator")});var Zy=a((hK,Xy)=>{"use strict";var bj=Qy();Xy.exports=bj});var rg=a((yK,eg)=>{"use strict";var qj=Zy();eg.exports=qj});var ng=a((gK,tg)=>{"use strict";var xj=rg();tg.exports=xj});var di=a((bK,ig)=>{"use strict";ig.exports=ng()});var sg=a(()=>{"use strict";var Sj=q(),wj=_(),Tj=re(),ug=qt(),Oj=Ba(),Cj=wj(function(){ug(1)});Sj({target:"Object",stat:!0,forced:Cj,sham:!Oj},{getPrototypeOf:function(r){return ug(Tj(r))}})});var lg=a((TK,cg)=>{"use strict";sg();var Ej=K();cg.exports=Ej.Object.getPrototypeOf});var pg=a((OK,fg)=>{"use strict";var Ij=lg();fg.exports=Ij});var dg=a((CK,vg)=>{"use strict";var kj=pg();vg.exports=kj});var hg=a((EK,mg)=>{"use strict";var _j=dg();mg.exports=_j});var mi=a((IK,yg)=>{"use strict";yg.exports=hg()});var bg=a(()=>{"use strict";var Pj=q(),Rj=A(),Aj=ke(),Nj=Rj([].reverse),gg=[1,2];Pj({target:"Array",proto:!0,forced:String(gg)===String(gg.reverse())},{reverse:function(){return Aj(this)&&(this.length=this.length),Nj(this)}})});var xg=a((PK,qg)=>{"use strict";bg();var Mj=oe();qg.exports=Mj("Array","reverse")});var wg=a((RK,Sg)=>{"use strict";var jj=B(),$j=xg(),ku=Array.prototype;Sg.exports=function(e){var r=e.reverse;return e===ku||jj(ku,e)&&r===ku.reverse?$j:r}});var Og=a((AK,Tg)=>{"use strict";var Lj=wg();Tg.exports=Lj});var Eg=a((NK,Cg)=>{"use strict";var Fj=Og();Cg.exports=Fj});var kg=a((MK,Ig)=>{"use strict";var Dj=Eg();Ig.exports=Dj});var Pg=a((jK,_g)=>{"use strict";_g.exports=kg()});var _u=a(($K,Ut)=>{function Bj(e,r){this.v=e,this.k=r}Ut.exports=Bj,Ut.exports.__esModule=!0,Ut.exports.default=Ut.exports});var Rg=a(()=>{"use strict";var Gj=q(),Uj=G(),Wj=Ve();Gj({target:"Object",stat:!0,sham:!Uj},{create:Wj})});var Ng=a((DK,Ag)=>{"use strict";Rg();var Hj=K(),Kj=Hj.Object;Ag.exports=function(r,t){return Kj.create(r,t)}});var jg=a((BK,Mg)=>{"use strict";var zj=Ng();Mg.exports=zj});var Lg=a((GK,$g)=>{"use strict";var Vj=jg();$g.exports=Vj});var Dg=a((UK,Fg)=>{"use strict";var Yj=Lg();Fg.exports=Yj});var hi=a((WK,Bg)=>{"use strict";Bg.exports=Dg()});var Ru=a((HK,Hg)=>{"use strict";var Ug=A(),Jj=F(),Qj=$(),Xj=W(),Gg=sr(),Zj=_r(),Wg=Function,e$=Ug([].concat),r$=Ug([].join),Pu={},t$=function(e,r,t){if(!Xj(Pu,r)){for(var n=[],i=0;i<r;i++)n[i]="a["+i+"]";Pu[r]=Wg("C,a","return new C("+r$(n,",")+")")}return Pu[r](e,t)};Hg.exports=Zj?Wg.bind:function(r){var t=Jj(this),n=t.prototype,i=Gg(arguments,1),o=function(){var s=e$(i,Gg(arguments));return this instanceof o?t$(t,s.length,s):t.apply(r,s)};return Qj(n)&&(o.prototype=n),o}});var zg=a(()=>{"use strict";var n$=q(),Kg=Ru();n$({target:"Function",proto:!0,forced:Function.bind!==Kg},{bind:Kg})});var Yg=a((VK,Vg)=>{"use strict";zg();var i$=oe();Vg.exports=i$("Function","bind")});var Qg=a((YK,Jg)=>{"use strict";var a$=B(),o$=Yg(),Au=Function.prototype;Jg.exports=function(e){var r=e.bind;return e===Au||a$(Au,e)&&r===Au.bind?o$:r}});var Zg=a((JK,Xg)=>{"use strict";var u$=Qg();Xg.exports=u$});var rb=a((QK,eb)=>{"use strict";var s$=Zg();eb.exports=s$});var nb=a((XK,tb)=>{"use strict";var c$=rb();tb.exports=c$});var Wt=a((ZK,ib)=>{"use strict";ib.exports=nb()});var ab=a(()=>{"use strict";var l$=q(),f$=xt();l$({target:"Object",stat:!0},{setPrototypeOf:f$})});var ub=a((tz,ob)=>{"use strict";ab();var p$=K();ob.exports=p$.Object.setPrototypeOf});var cb=a((nz,sb)=>{"use strict";var v$=ub();sb.exports=v$});var fb=a((iz,lb)=>{"use strict";var d$=cb();lb.exports=d$});var vb=a((az,pb)=>{"use strict";var m$=fb();pb.exports=m$});var yi=a((oz,db)=>{"use strict";db.exports=vb()});var hb=a(()=>{"use strict";var h$=q(),y$=G(),mb=te().f;h$({target:"Object",stat:!0,forced:Object.defineProperty!==mb,sham:!y$},{defineProperty:mb})});var bb=a((cz,gb)=>{"use strict";hb();var g$=K(),yb=g$.Object,b$=gb.exports=function(r,t,n){return yb.defineProperty(r,t,n)};yb.defineProperty.sham&&(b$.sham=!0)});var xb=a((lz,qb)=>{"use strict";var q$=bb();qb.exports=q$});var wb=a((fz,Sb)=>{"use strict";var x$=xb();Sb.exports=x$});var Ob=a((pz,Tb)=>{"use strict";var S$=wb();Tb.exports=S$});var Ht=a((vz,Cb)=>{"use strict";Cb.exports=Ob()});var Nu=a((dz,Ne)=>{var w$=Ht();function gi(e,r,t,n){var i=w$;try{i({},"",{})}catch{i=0}Ne.exports=gi=function(u,s,c,l){function f(v,p){gi(u,v,function(d){return this._invoke(v,p,d)})}s?i?i(u,s,{value:c,enumerable:!l,configurable:!l,writable:!l}):u[s]=c:(f("next",0),f("throw",1),f("return",2))},Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports,gi(e,r,t,n)}Ne.exports=gi,Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports});var ju=a((mz,Me)=>{var Eb=we(),Mu=hi(),T$=Wt(),O$=mi(),Ib=yi(),Ce=Nu();function kb(){var e,r,t=typeof Eb=="function"?Eb:{},n=t.iterator||"@@iterator",i=t.toStringTag||"@@toStringTag";function o(d,h,m,x){var y=h&&h.prototype instanceof s?h:s,b=Mu(y.prototype);return Ce(b,"_invoke",function(E,I,S){var T,w,C,j=0,be=S||[],k=!1,ee={p:0,n:0,v:e,a:qe,f:T$(qe).call(qe,e,4),d:function(L,ve){return T=L,w=0,C=e,ee.n=ve,u}};function qe(J,L){for(w=J,C=L,r=0;!k&&j&&!ve&&r<be.length;r++){var ve,O=be[r],Ir=ee.p,Ue=O[2];J>3?(ve=Ue===L)&&(C=O[(w=O[4])?5:(w=3,3)],O[4]=O[5]=e):O[0]<=Ir&&((ve=J<2&&Ir<O[1])?(w=0,ee.v=L,ee.n=O[1]):Ir<Ue&&(ve=J<3||O[0]>L||L>Ue)&&(O[4]=J,O[5]=L,ee.n=Ue,w=0))}if(ve||J>1)return u;throw k=!0,L}return function(J,L,ve){if(j>1)throw TypeError("Generator is already running");for(k&&L===1&&qe(L,ve),w=L,C=ve;(r=w<2?e:C)||!k;){T||(w?w<3?(w>1&&(ee.n=-1),qe(w,C)):ee.n=C:ee.v=C);try{if(j=2,T){if(w||(J="next"),r=T[J]){if(!(r=r.call(T,C)))throw TypeError("iterator result is not an object");if(!r.done)return r;C=r.value,w<2&&(w=0)}else w===1&&(r=T.return)&&r.call(T),w<2&&(C=TypeError("The iterator does not provide a '"+J+"' method"),w=1);T=e}else if((r=(k=ee.n<0)?C:E.call(I,ee))!==u)break}catch(O){T=e,w=1,C=O}finally{j=1}}return{value:r,done:k}}}(d,m,x),!0),b}var u={};function s(){}function c(){}function l(){}r=O$;var f=[][n]?r(r([][n]())):(Ce(r={},n,function(){return this}),r),v=l.prototype=s.prototype=Mu(f);function p(d){return Ib?Ib(d,l):(d.__proto__=l,Ce(d,i,"GeneratorFunction")),d.prototype=Mu(v),d}return c.prototype=l,Ce(v,"constructor",l),Ce(l,"constructor",c),c.displayName="GeneratorFunction",Ce(l,i,"GeneratorFunction"),Ce(v),Ce(v,i,"Generator"),Ce(v,n,function(){return this}),Ce(v,"toString",function(){return"[object Generator]"}),(Me.exports=kb=function(){return{w:o,m:p}},Me.exports.__esModule=!0,Me.exports.default=Me.exports)()}Me.exports=kb,Me.exports.__esModule=!0,Me.exports.default=Me.exports});var Fu=a((hz,Kt)=>{var C$=we(),E$=di(),I$=_u(),$u=Nu();function Lu(e,r){function t(i,o,u,s){try{var c=e[i](o),l=c.value;return l instanceof I$?r.resolve(l.v).then(function(f){t("next",f,u,s)},function(f){t("throw",f,u,s)}):r.resolve(l).then(function(f){c.value=f,u(c)},function(f){return t("throw",f,u,s)})}catch(f){s(f)}}var n;this.next||($u(Lu.prototype),$u(Lu.prototype,typeof C$=="function"&&E$||"@asyncIterator",function(){return this})),$u(this,"_invoke",function(i,o,u){function s(){return new r(function(c,l){t(i,u,c,l)})}return n=n?n.then(s,s):s()},!0)}Kt.exports=Lu,Kt.exports.__esModule=!0,Kt.exports.default=Kt.exports});var Du=a((yz,zt)=>{var k$=rt(),_$=ju(),P$=Fu();function R$(e,r,t,n,i){return new P$(_$().w(e,r,t,n),i||k$)}zt.exports=R$,zt.exports.__esModule=!0,zt.exports.default=zt.exports});var _b=a((gz,Vt)=>{var A$=Du();function N$(e,r,t,n,i){var o=A$(e,r,t,n,i);return o.next().then(function(u){return u.done?u.value:o.next()})}Vt.exports=N$,Vt.exports.__esModule=!0,Vt.exports.default=Vt.exports});var Ab=a((bz,Rb)=>{"use strict";var Pb=He(),M$=TypeError;Rb.exports=function(e,r){if(!delete e[r])throw new M$("Cannot delete property "+Pb(r)+" of "+Pb(e))}});var Nb=a(()=>{"use strict";var j$=q(),$$=re(),L$=le(),F$=Dr(),D$=Ab(),B$=Ot(),G$=[].unshift(0)!==1,U$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},W$=G$||!U$();j$({target:"Array",proto:!0,arity:1,forced:W$},{unshift:function(r){var t=$$(this),n=L$(t),i=arguments.length;if(i){B$(n+i);for(var o=n;o--;){var u=o+i;o in t?t[u]=t[o]:D$(t,u)}for(var s=0;s<i;s++)t[s]=arguments[s]}return F$(t,n+i)}})});var jb=a((Sz,Mb)=>{"use strict";Nb();var H$=oe();Mb.exports=H$("Array","unshift")});var Lb=a((wz,$b)=>{"use strict";var K$=B(),z$=jb(),Bu=Array.prototype;$b.exports=function(e){var r=e.unshift;return e===Bu||K$(Bu,e)&&r===Bu.unshift?z$:r}});var Db=a((Tz,Fb)=>{"use strict";var V$=Lb();Fb.exports=V$});var Gb=a((Oz,Bb)=>{"use strict";var Y$=Db();Bb.exports=Y$});var Wb=a((Cz,Ub)=>{"use strict";var J$=Gb();Ub.exports=J$});var Kb=a((Ez,Hb)=>{"use strict";Hb.exports=Wb()});var zb=a((Iz,Yt)=>{var Q$=Kb();function X$(e){var r=Object(e),t=[];for(var n in r)Q$(t).call(t,n);return function i(){for(;t.length;)if((n=t.pop())in r)return i.value=n,i.done=!1,i;return i.done=!0,i}}Yt.exports=X$,Yt.exports.__esModule=!0,Yt.exports.default=Yt.exports});var Yb=a((kz,Vb)=>{"use strict";mr();Ct();fr();Eo();var Z$=Ur();Vb.exports=Z$.f("iterator")});var Qb=a((_z,Jb)=>{"use strict";var eL=Yb();hr();Jb.exports=eL});var Zb=a((Pz,Xb)=>{"use strict";var rL=Qb();Xb.exports=rL});var rq=a((Rz,eq)=>{"use strict";var tL=Zb();eq.exports=tL});var Jt=a((Az,tq)=>{"use strict";tq.exports=rq()});var nq=a((Nz,je)=>{var bi=we(),nL=Jt();function Gu(e){"@babel/helpers - typeof";return je.exports=Gu=typeof bi=="function"&&typeof nL=="symbol"?function(r){return typeof r}:function(r){return r&&typeof bi=="function"&&r.constructor===bi&&r!==bi.prototype?"symbol":typeof r},je.exports.__esModule=!0,je.exports.default=je.exports,Gu(e)}je.exports=Gu,je.exports.__esModule=!0,je.exports.default=je.exports});var iq=a((Mz,Qt)=>{var iL=nq().default,aL=we(),oL=Jt();function uL(e){if(e!=null){var r=e[typeof aL=="function"&&oL||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(iL(e)+" is not iterable")}Qt.exports=uL,Qt.exports.__esModule=!0,Qt.exports.default=Qt.exports});var uq=a((jz,$e)=>{var aq=mi(),sL=Pg(),cL=_u(),lL=ju(),fL=_b(),pL=Du(),vL=Fu(),dL=zb(),oq=iq();function Uu(){"use strict";var e=lL(),r=e.m(Uu),t=(aq?aq(r):r.__proto__).constructor;function n(u){var s=typeof u=="function"&&u.constructor;return!!s&&(s===t||(s.displayName||s.name)==="GeneratorFunction")}var i={throw:1,return:2,break:3,continue:3};function o(u){var s,c;return function(l){s||(s={stop:function(){return c(l.a,2)},catch:function(){return l.v},abrupt:function(v,p){return c(l.a,i[v],p)},delegateYield:function(v,p,d){return s.resultName=p,c(l.d,oq(v),d)},finish:function(v){return c(l.f,v)}},c=function(v,p,d){l.p=s.prev,l.n=s.next;try{return v(p,d)}finally{s.next=l.n}}),s.resultName&&(s[s.resultName]=l.v,s.resultName=void 0),s.sent=l.v,s.next=l.n;try{return u.call(this,s)}finally{l.p=s.prev,l.n=s.next}}}return($e.exports=Uu=function(){return{wrap:function(c,l,f,v){return e.w(o(c),l,f,v&&sL(v).call(v))},isGeneratorFunction:n,mark:e.m,awrap:function(c,l){return new cL(c,l)},AsyncIterator:vL,async:function(c,l,f,v,p){return(n(l)?pL:fL)(o(c),l,f,v,p)},keys:dL,values:oq}},$e.exports.__esModule=!0,$e.exports.default=$e.exports)()}$e.exports=Uu,$e.exports.__esModule=!0,$e.exports.default=$e.exports});var se=a(($z,sq)=>{var qi=uq()();sq.exports=qi;try{regeneratorRuntime=qi}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=qi:Function("r","regeneratorRuntime = r")(qi)}});var Wu=a((Si,lq)=>{"use strict";Object.defineProperty(Si,"__esModule",{value:!0});var xi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},cq=function(){function e(r,t){var n=[],i=!0,o=!1,u=void 0;try{for(var s=r[Symbol.iterator](),c;!(i=(c=s.next()).done)&&(n.push(c.value),!(t&&n.length===t));i=!0);}catch(l){o=!0,u=l}finally{try{!i&&s.return&&s.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Si.default=mL;function mL(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(i){return i.type==="tag"||i.type==="script"||i.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var i=this.attribs,o=Object.keys(i),u=o.reduce(function(s,c,l){return s[l]={name:c,value:i[c]},s},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var i=[];return Ze(this.childTags,function(o){(o.name===n||n==="*")&&i.push(o)}),i}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var i=n.trim().replace(/\s+/g," ").split(" "),o=[];return Ze([this],function(u){var s=u.attribs.class;s&&i.every(function(c){return s.indexOf(c)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var i=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=hL(n),u=o.shift(),s=o.length;return u(this).filter(function(c){for(var l=0;l<s;){if(c=o[l](c,i),!c)return!1;l+=1}return!0})}),t.contains||(t.contains=function(n){var i=!1;return Ze([this],function(o,u){o===n&&(i=!0,u())}),i}),!0}function hL(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,i=r.split(":"),o=cq(i,2),u=o[0],s=o[1],c=null,l=null;if(function(){switch(!0){case/>/.test(u):l=function(S){return function(T){return T(S.parent)&&S.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");c=function(S){var T=S.attribs.class;return T&&h.every(function(w){return T.indexOf(w)>-1})},l=function(S,T){return n?S.getElementsByClassName(h.join(" ")):typeof S=="function"?S(c):Xt(S,T,c)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),x=cq(m,2),y=x[0],b=x[1];c=function(S){var T=Object.keys(S.attribs).indexOf(y)>-1;return!!(T&&(!b||S.attribs[y]===b))},l=function(S,T){if(n){var w=function(){var C=[];return Ze([S],function(j){c(j)&&C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":xi(w))==="object")return w.v}return typeof S=="function"?S(c):Xt(S,T,c)};break;case/^#/.test(u):var E=u.substr(1);c=function(S){return S.attribs.id===E},l=function(S,T){if(n){var w=function(){var C=[];return Ze([S],function(j,be){c(j)&&(C.push(j),be())}),{v:C}}();if((typeof w>"u"?"undefined":xi(w))==="object")return w.v}return typeof S=="function"?S(c):Xt(S,T,c)};break;case/\*/.test(u):c=function(S){return!0},l=function(S,T){if(n){var w=function(){var C=[];return Ze([S],function(j){return C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":xi(w))==="object")return w.v}return typeof S=="function"?S(c):Xt(S,T,c)};break;default:c=function(S){return S.name===u},l=function(S,T){if(n){var w=function(){var C=[];return Ze([S],function(j){c(j)&&C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":xi(w))==="object")return w.v}return typeof S=="function"?S(c):Xt(S,T,c)}}}(),!s)return l;var f=s.match(/-(child|type)\((\d+)\)$/),v=f[1],p=parseInt(f[2],10)-1,d=function(m){if(m){var x=m.parent.childTags;v==="type"&&(x=x.filter(c));var y=x.findIndex(function(b){return b===m});if(y===p)return!0}return!1};return function(m){var x=l(m);return n?x.reduce(function(y,b){return d(b)&&y.push(b),y},[]):d(x)&&x}})}function Ze(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&Ze(t.childTags,r)})}function Xt(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}lq.exports=Si.default});var Ti=a(wi=>{"use strict";Object.defineProperty(wi,"__esModule",{value:!0});wi.convertNodeList=yL;wi.escapeValue=gL;function yL(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function gL(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var qq=a((Oi,bq)=>{"use strict";Object.defineProperty(Oi,"__esModule",{value:!0});Oi.default=bL;var dq=Ti(),fq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function bL(e,r){var t=r.root,n=t===void 0?document:t,i=r.skip,o=i===void 0?null:i,u=r.priority,s=u===void 0?["id","class","href","src"]:u,c=r.ignore,l=c===void 0?{}:c,f=[],v=e,p=f.length,d=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(y){return typeof y!="function"?function(b){return b===y}:y}),m=function(b){return o&&h.some(function(E){return E(b)})};for(Object.keys(l).forEach(function(y){y==="class"&&(d=!0);var b=l[y];typeof b!="function"&&(typeof b=="number"&&(b=b.toString()),typeof b=="string"&&(b=new RegExp((0,dq.escapeValue)(b).replace(/\\/g,"\\\\"))),typeof b=="boolean"&&(b=b?/(?:)/:/.^/),l[y]=function(E,I){return b.test(I)})}),d&&function(){var y=l.attribute;l.attribute=function(b,E,I){return l.class(E)||y&&y(b,E,I)}}();v!==n;){if(m(v)!==!0){if(pq(s,v,l,f,n)||vq(v,l,f,n))break;pq(s,v,l,f),f.length===p&&vq(v,l,f),f.length===p&&qL(s,v,l,f)}v=v.parentNode,p=f.length}if(v===n){var x=yq(s,v,l);f.unshift(x)}return f.join(" ")}function pq(e,r,t,n){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=mq(e,r,t);if(o){var u=i.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function mq(e,r,t){for(var n=r.attributes,i=Object.keys(n).sort(function(m,x){var y=e.indexOf(n[m].name),b=e.indexOf(n[x].name);return b===-1?y===-1?0:-1:y-b}),o=0,u=i.length;o<u;o++){var s=i[o],c=n[s],l=c.name,f=(0,dq.escapeValue)(c.value),v=t[l]||t.attribute,p=fq[l]||fq.attribute;if(!gq(v,l,f,p)){var d="["+l+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(l==="id"&&(d="#"+f),l==="class")){var h=f.trim().replace(/\s+/g,".");d="."+h}return d}}return null}function vq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,i=hq(e,r);if(i){var o=n.getElementsByTagName(i);if(o.length===1)return t.unshift(i),!0}return!1}function hq(e,r){var t=e.tagName.toLowerCase();return gq(r.tag,null,t)?null:t}function qL(e,r,t,n){for(var i=r.parentNode,o=i.childTags||i.children,u=0,s=o.length;u<s;u++){var c=o[u];if(c===r){var l=yq(e,c,t);if(!l)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,c,t,l);var f="> "+l+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function yq(e,r,t){var n=mq(e,r,t);return n||(n=hq(r,t)),n}function gq(e,r,t,n){if(!t)return!0;var i=e||n;return i?i(r,t,n):!1}bq.exports=Oi.default});var Hu=a((Ei,xq)=>{"use strict";Object.defineProperty(Ei,"__esModule",{value:!0});Ei.default=OL;var xL=Wu(),SL=TL(xL),wL=Ti();function TL(e){return e&&e.__esModule?e:{default:e}}function OL(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,wL.convertNodeList)(r):[r]),!r.length||r.some(function(v){return v.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,SL.default)(r[0],t),i=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(i.length<2)return Ci("",e,"",r);for(var o=[i.pop()];i.length>1;){var u=i.pop(),s=i.join(" "),c=o.join(" "),l=s+" "+c,f=document.querySelectorAll(l);f.length!==r.length&&o.unshift(Ci(s,u,c,r))}return o.unshift(i[0]),i=o,i[0]=Ci("",i[0],i.slice(1).join(" "),r),i[i.length-1]=Ci(i.slice(0,-1).join(" "),i[i.length-1],"",r),n&&delete global.document,i.join(" ").replace(/>/g,"> ").trim()}function Ci(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var i=r.replace(/=.*$/,"]"),o=""+e+i+t,u=document.querySelectorAll(o);if(tt(u,n))r=i;else for(var s=document.querySelectorAll(""+e+i),c=function(){var I=s[l];if(n.some(function(T){return I.contains(T)})){var S=I.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),tt(u,n)&&(r=S),"break"}},l=0,f=s.length;l<f;l++){var o,u,v=c();if(v==="break")break}}if(/>/.test(r)){var p=r.replace(/>/,""),o=""+e+p+t,u=document.querySelectorAll(o);tt(u,n)&&(r=p)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);tt(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(E){return"."+E}).sort(function(E,I){return E.length-I.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);tt(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var x=document.querySelectorAll(""+e+r),y=function(){var I=x[l];if(n.some(function(T){return I.contains(T)})){var S=I.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),tt(u,n)&&(r=S),"break"}},l=0,f=x.length;l<f;l++){var o,u,b=y();if(b==="break")break}}return r}function tt(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var i=0;i<t;i++)if(e[i]===n)return!0;return!1})}xq.exports=Ei.default});var Ku=a(Ii=>{"use strict";Object.defineProperty(Ii,"__esModule",{value:!0});Ii.getCommonAncestor=CL;Ii.getCommonProperties=EL;function CL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,i=[];e.forEach(function(v,p){for(var d=[];v!==n;)v=v.parentNode,d.unshift(v);i[p]=d}),i.sort(function(v,p){return v.length-p.length});for(var o=i.shift(),u=null,s=function(){var p=o[c],d=i.some(function(h){return!h.some(function(m){return m===p})});if(d)return"break";u=p},c=0,l=o.length;c<l;c++){var f=s();if(f==="break")break}return u}function EL(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,i=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(c){return u.some(function(l){return l===c})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(i!==void 0&&function(){var c=t.attributes,l=Object.keys(c).reduce(function(p,d){var h=c[d],m=h.name;return h&&m!=="class"&&(p[m]=h.value),p},{}),f=Object.keys(l),v=Object.keys(i);f.length?v.length?(i=v.reduce(function(p,d){var h=i[d];return h===l[d]&&(p[d]=h),p},{}),Object.keys(i).length?r.attributes=i:delete r.attributes):r.attributes=l:delete r.attributes}(),o!==void 0){var s=t.tagName.toLowerCase();o?s!==o&&delete r.tag:r.tag=s}}),r}});var Eq=a(Zt=>{"use strict";Object.defineProperty(Zt,"__esModule",{value:!0});var IL=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Zt.getSingleSelector=Vu;Zt.getMultiSelector=Cq;Zt.default=NL;var kL=Wu(),wq=zu(kL),_L=qq(),PL=zu(_L),RL=Hu(),Tq=zu(RL),Sq=Ti(),Oq=Ku();function zu(e){return e&&e.__esModule?e:{default:e}}function Vu(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":IL(e))+'")');var t=(0,wq.default)(e,r),n=(0,PL.default)(e,r),i=(0,Tq.default)(n,e,r);return t&&delete global.document,i}function Cq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,Sq.convertNodeList)(e)),e.some(function(l){return l.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,wq.default)(e[0],r),n=(0,Oq.getCommonAncestor)(e,r),i=Vu(n,r),o=AL(e),u=o[0],s=(0,Tq.default)(i+" "+u,e,r),c=(0,Sq.convertNodeList)(document.querySelectorAll(s));return e.every(function(l){return c.some(function(f){return f===l})})?(t&&delete global.document,s):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function AL(e){var r=(0,Oq.getCommonProperties)(e),t=r.classes,n=r.attributes,i=r.tag,o=[];if(i&&o.push(i),t){var u=t.map(function(c){return"."+c}).join("");o.push(u)}if(n){var s=Object.keys(n).reduce(function(c,l){return c.push("["+l+'="'+n[l]+'"]'),c},[]).join("");o.push(s)}return o.length,[o.join("")]}function NL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?Cq(e,r):Vu(e,r)}});var _q=a(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.default=ie.common=ie.optimize=ie.getMultiSelector=ie.getSingleSelector=ie.select=void 0;var Yu=Eq();Object.defineProperty(ie,"getSingleSelector",{enumerable:!0,get:function(){return Yu.getSingleSelector}});Object.defineProperty(ie,"getMultiSelector",{enumerable:!0,get:function(){return Yu.getMultiSelector}});var Iq=kq(Yu),ML=Hu(),jL=kq(ML),$L=Ku(),LL=FL($L);function FL(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function kq(e){return e&&e.__esModule?e:{default:e}}ie.select=Iq.default;ie.optimize=jL.default;ie.common=LL;ie.default=Iq.default});var Pq=a(()=>{"use strict";var YL=q(),JL=ke();YL({target:"Array",stat:!0},{isArray:JL})});var Aq=a((eV,Rq)=>{"use strict";Pq();var QL=K();Rq.exports=QL.Array.isArray});var Mq=a((rV,Nq)=>{"use strict";var XL=Aq();Nq.exports=XL});var $q=a((tV,jq)=>{"use strict";var ZL=Mq();jq.exports=ZL});var Fq=a((nV,Lq)=>{"use strict";var eF=$q();Lq.exports=eF});var Bq=a((iV,Dq)=>{"use strict";Dq.exports=Fq()});var Wq=a(()=>{"use strict";var rF=q(),tF=re(),nF=le(),iF=Dr(),aF=Ot(),oF=_(),uF=oF(function(){return[].push.call({length:4294967296},1)!==4294967297}),sF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},cF=uF||!sF();rF({target:"Array",proto:!0,arity:1,forced:cF},{push:function(r){var t=tF(this),n=nF(t),i=arguments.length;aF(n+i);for(var o=0;o<i;o++)t[n]=arguments[o],n++;return iF(t,n),n}})});var Kq=a((sV,Hq)=>{"use strict";Wq();var lF=oe();Hq.exports=lF("Array","push")});var Vq=a((cV,zq)=>{"use strict";var fF=B(),pF=Kq(),Ju=Array.prototype;zq.exports=function(e){var r=e.push;return e===Ju||fF(Ju,e)&&r===Ju.push?pF:r}});var Jq=a((lV,Yq)=>{"use strict";var vF=Vq();Yq.exports=vF});var Xq=a((fV,Qq)=>{"use strict";var dF=Jq();Qq.exports=dF});var ex=a((pV,Zq)=>{"use strict";var mF=Xq();Zq.exports=mF});var Qu=a((vV,rx)=>{"use strict";rx.exports=ex()});var px=a(()=>{"use strict";var hF=q(),yF=It().map,gF=yt(),bF=gF("map");hF({target:"Array",proto:!0,forced:!bF},{map:function(r){return yF(this,r,arguments.length>1?arguments[1]:void 0)}})});var dx=a((BV,vx)=>{"use strict";px();var qF=oe();vx.exports=qF("Array","map")});var hx=a((GV,mx)=>{"use strict";var xF=B(),SF=dx(),Zu=Array.prototype;mx.exports=function(e){var r=e.map;return e===Zu||xF(Zu,e)&&r===Zu.map?SF:r}});var gx=a((UV,yx)=>{"use strict";var wF=hx();yx.exports=wF});var qx=a((WV,bx)=>{"use strict";var TF=gx();bx.exports=TF});var Sx=a((HV,xx)=>{"use strict";var OF=qx();xx.exports=OF});var Tx=a((KV,wx)=>{"use strict";wx.exports=Sx()});var Cx=a((zV,Ox)=>{Ox.exports=Tx()});var Ix=a((VV,Ex)=>{Ex.exports=rt()});var Ax=a((YV,Rx)=>{"use strict";var CF=F(),EF=re(),IF=mn(),kF=le(),kx=TypeError,_x="Reduce of empty array with no initial value",Px=function(e){return function(r,t,n,i){var o=EF(r),u=IF(o),s=kF(o);if(CF(t),s===0&&n<2)throw new kx(_x);var c=e?s-1:0,l=e?-1:1;if(n<2)for(;;){if(c in u){i=u[c],c+=l;break}if(c+=l,e?c<0:s<=c)throw new kx(_x)}for(;e?c>=0:s>c;c+=l)c in u&&(i=t(i,u[c],c,o));return i}};Rx.exports={left:Px(!1),right:Px(!0)}});var es=a((JV,Nx)=>{"use strict";var _F=_();Nx.exports=function(e,r){var t=[][e];return!!t&&_F(function(){t.call(null,r||function(){return 1},1)})}});var jx=a(()=>{"use strict";var PF=q(),RF=Ax().left,AF=es(),Mx=Ar(),NF=Nt(),MF=!NF&&Mx>79&&Mx<83,jF=MF||!AF("reduce");PF({target:"Array",proto:!0,forced:jF},{reduce:function(r){var t=arguments.length;return RF(this,r,t,t>1?arguments[1]:void 0)}})});var Lx=a((ZV,$x)=>{"use strict";jx();var $F=oe();$x.exports=$F("Array","reduce")});var Dx=a((e7,Fx)=>{"use strict";var LF=B(),FF=Lx(),rs=Array.prototype;Fx.exports=function(e){var r=e.reduce;return e===rs||LF(rs,e)&&r===rs.reduce?FF:r}});var Gx=a((r7,Bx)=>{"use strict";var DF=Dx();Bx.exports=DF});var Wx=a((t7,Ux)=>{"use strict";var BF=Gx();Ux.exports=BF});var Kx=a((n7,Hx)=>{"use strict";var GF=Wx();Hx.exports=GF});var Vx=a((i7,zx)=>{"use strict";zx.exports=Kx()});var Jx=a((a7,Yx)=>{Yx.exports=Vx()});var Zx=a((o7,Xx)=>{"use strict";var UF=ke(),WF=le(),HF=Ot(),KF=z(),zF=Fr(),Qx=function(e,r,t,n,i,o,u,s){for(var c=i,l=0,f=u?KF(u,s):!1,v,p;l<n;)l in t&&(v=f?f(t[l],l,r):t[l],o>0&&UF(v)?(p=WF(v),c=Qx(e,r,v,p,c,o-1)-1):(HF(c+1),zF(e,c,v)),c++),l++;return c};Xx.exports=Qx});var eS=a(()=>{"use strict";var VF=q(),YF=Zx(),JF=F(),QF=re(),XF=le(),ZF=jn();VF({target:"Array",proto:!0},{flatMap:function(r){var t=QF(this),n=XF(t),i;return JF(r),i=ZF(t,0),YF(i,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),i}})});var rS=a(()=>{"use strict";var eD=ko();eD("flatMap")});var nS=a((f7,tS)=>{"use strict";eS();rS();var rD=oe();tS.exports=rD("Array","flatMap")});var aS=a((p7,iS)=>{"use strict";var tD=B(),nD=nS(),ts=Array.prototype;iS.exports=function(e){var r=e.flatMap;return e===ts||tD(ts,e)&&r===ts.flatMap?nD:r}});var uS=a((v7,oS)=>{"use strict";var iD=aS();oS.exports=iD});var cS=a((d7,sS)=>{"use strict";var aD=uS();sS.exports=aD});var fS=a((m7,lS)=>{"use strict";var oD=cS();lS.exports=oD});var vS=a((h7,pS)=>{"use strict";pS.exports=fS()});var mS=a((y7,dS)=>{dS.exports=vS()});var yS=a((g7,hS)=>{"use strict";Za();var uD=oe();hS.exports=uD("Array","concat")});var bS=a((b7,gS)=>{"use strict";var sD=B(),cD=yS(),ns=Array.prototype;gS.exports=function(e){var r=e.concat;return e===ns||sD(ns,e)&&r===ns.concat?cD:r}});var xS=a((q7,qS)=>{"use strict";var lD=bS();qS.exports=lD});var wS=a((x7,SS)=>{"use strict";var fD=xS();SS.exports=fD});var OS=a((S7,TS)=>{"use strict";var pD=wS();TS.exports=pD});var ES=a((w7,CS)=>{"use strict";CS.exports=OS()});var is=a((T7,IS)=>{IS.exports=ES()});var PS=a(()=>{});var AS=a((z7,RS)=>{"use strict";PS();Io();var SD=Ur();RS.exports=SD.f("toPrimitive")});var MS=a((V7,NS)=>{"use strict";var wD=AS();NS.exports=wD});var $S=a((Y7,jS)=>{"use strict";var TD=MS();jS.exports=TD});var FS=a((J7,LS)=>{"use strict";var OD=$S();LS.exports=OD});var BS=a((Q7,DS)=>{"use strict";DS.exports=FS()});var JS=a((g9,YS)=>{"use strict";var ED=$(),ID=xe(),kD=R(),_D=kD("match");YS.exports=function(e){var r;return ED(e)&&((r=e[_D])!==void 0?!!r:ID(e)==="RegExp")}});var XS=a((b9,QS)=>{"use strict";var PD=JS(),RD=TypeError;QS.exports=function(e){if(PD(e))throw new RD("The method doesn't accept regular expressions");return e}});var ew=a((q9,ZS)=>{"use strict";var AD=R(),ND=AD("match");ZS.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[ND]=!1,"/./"[e](r)}catch{}}return!1}});var nw=a(()=>{"use strict";var MD=q(),jD=ct(),$D=ft().f,LD=wa(),rw=Ke(),FD=XS(),DD=ar(),BD=ew(),GD=Z(),UD=jD("".slice),WD=Math.min,tw=BD("startsWith"),HD=!GD&&!tw&&!!function(){var e=$D(String.prototype,"startsWith");return e&&!e.writable}();MD({target:"String",proto:!0,forced:!HD&&!tw},{startsWith:function(r){var t=rw(DD(this));FD(r);var n=LD(WD(arguments.length>1?arguments[1]:void 0,t.length)),i=rw(r);return UD(t,n,n+i.length)===i}})});var aw=a((w9,iw)=>{"use strict";nw();var KD=oe();iw.exports=KD("String","startsWith")});var uw=a((T9,ow)=>{"use strict";var zD=B(),VD=aw(),ss=String.prototype;ow.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===ss||zD(ss,e)&&r===ss.startsWith?VD:r}});var cw=a((O9,sw)=>{"use strict";var YD=uw();sw.exports=YD});var fw=a((C9,lw)=>{"use strict";var JD=cw();lw.exports=JD});var vw=a((E9,pw)=>{"use strict";var QD=fw();pw.exports=QD});var mw=a((I9,dw)=>{"use strict";dw.exports=vw()});var yw=a((k9,hw)=>{hw.exports=mw()});var gw=a(()=>{"use strict";var XD=q(),ZD=It().filter,e3=yt(),r3=e3("filter");XD({target:"Array",proto:!0,forced:!r3},{filter:function(r){return ZD(this,r,arguments.length>1?arguments[1]:void 0)}})});var qw=a((R9,bw)=>{"use strict";gw();var t3=oe();bw.exports=t3("Array","filter")});var Sw=a((A9,xw)=>{"use strict";var n3=B(),i3=qw(),cs=Array.prototype;xw.exports=function(e){var r=e.filter;return e===cs||n3(cs,e)&&r===cs.filter?i3:r}});var Tw=a((N9,ww)=>{"use strict";var a3=Sw();ww.exports=a3});var Cw=a((M9,Ow)=>{"use strict";var o3=Tw();Ow.exports=o3});var Iw=a((j9,Ew)=>{"use strict";var u3=Cw();Ew.exports=u3});var _w=a(($9,kw)=>{"use strict";kw.exports=Iw()});var Rw=a((L9,Pw)=>{Pw.exports=_w()});var Vw=a(()=>{"use strict";var m3=q(),h3=U(),fs=Pr(),y3=Ru(),Gw=Uo(),g3=Q(),Uw=$(),b3=Ve(),Hw=_(),ps=h3("Reflect","construct"),q3=Object.prototype,x3=[].push,Kw=Hw(function(){function e(){}return!(ps(function(){},[],e)instanceof e)}),zw=!Hw(function(){ps(function(){})}),Ww=Kw||zw;m3({target:"Reflect",stat:!0,forced:Ww,sham:Ww},{construct:function(r,t){Gw(r),g3(t);var n=arguments.length<3?r:Gw(arguments[2]);if(zw&&!Kw)return ps(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var i=[null];return fs(x3,i,t),new(fs(y3,r,i))}var o=n.prototype,u=b3(Uw(o)?o:q3),s=fs(r,u,t);return Uw(s)?s:u}})});var Jw=a((gY,Yw)=>{"use strict";Vw();var S3=K();Yw.exports=S3.Reflect.construct});var Xw=a((bY,Qw)=>{"use strict";var w3=Jw();Qw.exports=w3});var eT=a((qY,Zw)=>{"use strict";var T3=Xw();Zw.exports=T3});var tT=a((xY,rT)=>{"use strict";var O3=eT();rT.exports=O3});var Mi=a((SY,nT)=>{"use strict";nT.exports=tT()});var aT=a((wY,iT)=>{iT.exports=Mi()});var dT=a((RY,vT)=>{"use strict";var C3=_();vT.exports=C3(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var yT=a((AY,hT)=>{"use strict";var E3=_(),I3=$(),k3=xe(),mT=dT(),ji=Object.isExtensible,_3=E3(function(){ji(1)});hT.exports=_3||mT?function(r){return!I3(r)||mT&&k3(r)==="ArrayBuffer"?!1:ji?ji(r):!0}:ji});var bT=a((NY,gT)=>{"use strict";var P3=_();gT.exports=!P3(function(){return Object.isExtensible(Object.preventExtensions({}))})});var bs=a((MY,ST)=>{"use strict";var R3=q(),A3=A(),N3=Gr(),M3=$(),hs=W(),j3=te().f,qT=Et(),$3=eo(),ys=yT(),L3=Mr(),F3=bT(),xT=!1,De=L3("meta"),D3=0,gs=function(e){j3(e,De,{value:{objectID:"O"+D3++,weakData:{}}})},B3=function(e,r){if(!M3(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!hs(e,De)){if(!ys(e))return"F";if(!r)return"E";gs(e)}return e[De].objectID},G3=function(e,r){if(!hs(e,De)){if(!ys(e))return!0;if(!r)return!1;gs(e)}return e[De].weakData},U3=function(e){return F3&&xT&&ys(e)&&!hs(e,De)&&gs(e),e},W3=function(){H3.enable=function(){},xT=!0;var e=qT.f,r=A3([].splice),t={};t[De]=1,e(t).length&&(qT.f=function(n){for(var i=e(n),o=0,u=i.length;o<u;o++)if(i[o]===De){r(i,o,1);break}return i},R3({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:$3.f}))},H3=ST.exports={enable:W3,fastKey:B3,getWeakData:G3,onFreeze:U3};N3[De]=!0});var OT=a((jY,TT)=>{"use strict";var K3=q(),z3=P(),V3=bs(),Y3=_(),J3=Se(),Q3=pe(),X3=ii(),Z3=N(),eB=$(),rB=ir(),tB=Re(),nB=te().f,iB=It().forEach,aB=G(),wT=ze(),oB=wT.set,uB=wT.getterFor;TT.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,i=e.indexOf("Weak")!==-1,o=n?"set":"add",u=z3[e],s=u&&u.prototype,c={},l;if(!aB||!Z3(u)||!(i||s.forEach&&!Y3(function(){new u().entries().next()})))l=t.getConstructor(r,e,n,o),V3.enable();else{l=r(function(p,d){oB(X3(p,f),{type:e,collection:new u}),rB(d)||Q3(d,p[o],{that:p,AS_ENTRIES:n})});var f=l.prototype,v=uB(e);iB(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(p){var d=p==="add"||p==="set";p in s&&!(i&&p==="clear")&&J3(f,p,function(h,m){var x=v(this).collection;if(!d&&i&&!eB(h))return p==="get"?void 0:!1;var y=x[p](h===0?0:h,m);return d?this:y})}),i||nB(f,"size",{configurable:!0,get:function(){return v(this).collection.size}})}return tB(l,e,!1,!0),c[e]=l,K3({global:!0,forced:!0},c),i||t.setStrong(l,e,n),l}});var ET=a(($Y,CT)=>{"use strict";var sB=_e();CT.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:sB(e,n,r[n],t);return e}});var NT=a((LY,AT)=>{"use strict";var IT=Ve(),cB=Ln(),kT=ET(),lB=z(),fB=ii(),pB=ir(),vB=pe(),dB=Rn(),$i=An(),mB=Go(),on=G(),_T=bs().fastKey,RT=ze(),PT=RT.set,qs=RT.getterFor;AT.exports={getConstructor:function(e,r,t,n){var i=e(function(l,f){fB(l,o),PT(l,{type:r,index:IT(null),first:null,last:null,size:0}),on||(l.size=0),pB(f)||vB(f,l[n],{that:l,AS_ENTRIES:t})}),o=i.prototype,u=qs(r),s=function(l,f,v){var p=u(l),d=c(l,f),h,m;return d?d.value=v:(p.last=d={index:m=_T(f,!0),key:f,value:v,previous:h=p.last,next:null,removed:!1},p.first||(p.first=d),h&&(h.next=d),on?p.size++:l.size++,m!=="F"&&(p.index[m]=d)),l},c=function(l,f){var v=u(l),p=_T(f),d;if(p!=="F")return v.index[p];for(d=v.first;d;d=d.next)if(d.key===f)return d};return kT(o,{clear:function(){for(var f=this,v=u(f),p=v.first;p;)p.removed=!0,p.previous&&(p.previous=p.previous.next=null),p=p.next;v.first=v.last=null,v.index=IT(null),on?v.size=0:f.size=0},delete:function(l){var f=this,v=u(f),p=c(f,l);if(p){var d=p.next,h=p.previous;delete v.index[p.index],p.removed=!0,h&&(h.next=d),d&&(d.previous=h),v.first===p&&(v.first=d),v.last===p&&(v.last=h),on?v.size--:f.size--}return!!p},forEach:function(f){for(var v=u(this),p=lB(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:v.first;)for(p(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!c(this,f)}}),kT(o,t?{get:function(f){var v=c(this,f);return v&&v.value},set:function(f,v){return s(this,f===0?0:f,v)}}:{add:function(f){return s(this,f=f===0?0:f,f)}}),on&&cB(o,"size",{configurable:!0,get:function(){return u(this).size}}),i},setStrong:function(e,r,t){var n=r+" Iterator",i=qs(r),o=qs(n);dB(e,r,function(u,s){PT(this,{type:n,target:u,state:i(u),kind:s,last:null})},function(){for(var u=o(this),s=u.kind,c=u.last;c&&c.removed;)c=c.previous;return!u.target||!(u.last=c=c?c.next:u.state.first)?(u.target=null,$i(void 0,!0)):$i(s==="keys"?c.key:s==="values"?c.value:[c.key,c.value],!1)},t?"entries":"values",!t,!0),mB(r)}}});var MT=a(()=>{"use strict";var hB=OT(),yB=NT();hB("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},yB)});var jT=a(()=>{"use strict";MT()});var LT=a((UY,$T)=>{"use strict";$T.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,i){return t[e](n,i)}}});var ae=a((WY,DT)=>{"use strict";var gB=U(),Li=LT(),FT=gB("Map");DT.exports={Map:FT,set:Li("set",2),get:Li("get",1),has:Li("has",1),remove:Li("delete",1),proto:FT.prototype}});var xs=a(()=>{"use strict";var bB=q(),qB=A(),xB=F(),SB=ar(),wB=pe(),Fi=ae(),BT=Z(),TB=_(),GT=Fi.Map,OB=Fi.has,CB=Fi.get,EB=Fi.set,IB=qB([].push),kB=BT||TB(function(){return GT.groupBy("ab",function(e){return e}).get("a").length!==1});bB({target:"Map",stat:!0,forced:BT||kB},{groupBy:function(r,t){SB(r),xB(t);var n=new GT,i=0;return wB(r,function(o){var u=t(o,i++);OB(n,u)?IB(CB(n,u),o):EB(n,u,[o])}),n}})});var V=a((zY,UT)=>{"use strict";var _B=He(),PB=TypeError;UT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new PB(_B(e)+" is not a map")}});var ws=a(()=>{"use strict";var RB=q(),AB=V(),Ss=ae(),NB=Z(),MB=Ss.get,jB=Ss.has,$B=Ss.set;RB({target:"Map",proto:!0,real:!0,forced:NB},{getOrInsert:function(r,t){return jB(AB(this),r)?MB(this,r):($B(this,r,t),t)}})});var Os=a(()=>{"use strict";var LB=q(),FB=F(),DB=V(),Ts=ae(),BB=Z(),GB=Ts.get,UB=Ts.has,WB=Ts.set;LB({target:"Map",proto:!0,real:!0,forced:BB},{getOrInsertComputed:function(r,t){if(DB(this),FB(t),UB(this,r))return GB(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return WB(this,r,n),n}})});var HT=a((XY,WT)=>{"use strict";mr();jT();xs();ws();Os();Ct();fr();var HB=K();WT.exports=HB.Map});var zT=a((ZY,KT)=>{"use strict";var KB=HT();hr();KT.exports=KB});var Cs=a(()=>{"use strict";ws()});var Es=a(()=>{"use strict";Os()});var VT=a(()=>{"use strict";xs()});var JT=a((oJ,YT)=>{"use strict";var zB=zT();Cs();Es();VT();YT.exports=zB});var XT=a((uJ,QT)=>{"use strict";var VB=z(),YB=Q(),JB=re(),QB=pe();QT.exports=function(e,r,t){return function(i){var o=JB(i),u=arguments.length,s=u>1?arguments[1]:void 0,c=s!==void 0,l=c?VB(s,u>2?arguments[2]:void 0):void 0,f=new e,v=0;return QB(o,function(p){var d=c?l(p,v++):p;t?r(f,YB(d)[0],d[1]):r(f,d)}),f}}});var eO=a(()=>{"use strict";var XB=q(),ZT=ae(),ZB=XT();XB({target:"Map",stat:!0,forced:!0},{from:ZB(ZT.Map,ZT.set,!0)})});var tO=a((lJ,rO)=>{"use strict";var e4=Q();rO.exports=function(e,r,t){return function(){for(var i=new e,o=arguments.length,u=0;u<o;u++){var s=arguments[u];t?r(i,e4(s)[0],s[1]):r(i,s)}return i}}});var iO=a(()=>{"use strict";var r4=q(),nO=ae(),t4=tO();r4({target:"Map",stat:!0,forced:!0},{of:t4(nO.Map,nO.set,!0)})});var oO=a(()=>{"use strict";var n4=q(),i4=D(),a4=pe(),o4=N(),aO=F(),u4=ae().Map;n4({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=o4(this)?this:u4,i=new n;aO(t);var o=aO(i.set);return a4(r,function(u){i4(o,i,t(u),u)}),i}})});var uO=a(()=>{"use strict";var s4=q(),c4=V(),l4=ae().remove;s4({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=c4(this),t=!0,n,i=0,o=arguments.length;i<o;i++)n=l4(r,arguments[i]),t=t&&n;return!!t}})});var cO=a(()=>{"use strict";var f4=q(),p4=V(),Is=ae(),v4=Is.get,d4=Is.has,sO=Is.set;f4({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=p4(this),i,o;return d4(n,r)?(i=v4(n,r),"update"in t&&(i=t.update(i,r,n),sO(n,r,i)),i):(o=t.insert(r,n),sO(n,r,o),o)}})});var fO=a((bJ,lO)=>{"use strict";var m4=D();lO.exports=function(e,r,t){for(var n=t?e:e.iterator,i=e.next,o,u;!(o=m4(i,n)).done;)if(u=r(o.value),u!==void 0)return u}});var he=a((qJ,pO)=>{"use strict";var h4=fO();pO.exports=function(e,r,t){return t?h4(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var vO=a(()=>{"use strict";var y4=q(),g4=z(),b4=V(),q4=he();y4({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=b4(this),n=g4(r,arguments.length>1?arguments[1]:void 0);return q4(t,function(i,o){if(!n(i,o,t))return!1},!0)!==!1}})});var mO=a(()=>{"use strict";var x4=q(),S4=z(),w4=V(),dO=ae(),T4=he(),O4=dO.Map,C4=dO.set;x4({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=w4(this),n=S4(r,arguments.length>1?arguments[1]:void 0),i=new O4;return T4(t,function(o,u){n(o,u,t)&&C4(i,u,o)}),i}})});var hO=a(()=>{"use strict";var E4=q(),I4=z(),k4=V(),_4=he();E4({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=k4(this),n=I4(r,arguments.length>1?arguments[1]:void 0),i=_4(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return i&&i.value}})});var yO=a(()=>{"use strict";var P4=q(),R4=z(),A4=V(),N4=he();P4({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=A4(this),n=R4(r,arguments.length>1?arguments[1]:void 0),i=N4(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return i&&i.key}})});var bO=a((kJ,gO)=>{"use strict";gO.exports=function(e,r){return e===r||e!==e&&r!==r}});var qO=a(()=>{"use strict";var M4=q(),j4=bO(),$4=V(),L4=he();M4({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return L4($4(this),function(t){if(j4(t,r))return!0},!0)===!0}})});var xO=a(()=>{"use strict";var F4=q(),D4=V(),B4=he();F4({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=B4(D4(this),function(n,i){if(n===r)return{key:i}},!0);return t&&t.key}})});var wO=a(()=>{"use strict";var G4=q(),U4=z(),W4=V(),SO=ae(),H4=he(),K4=SO.Map,z4=SO.set;G4({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=W4(this),n=U4(r,arguments.length>1?arguments[1]:void 0),i=new K4;return H4(t,function(o,u){z4(i,n(o,u,t),o)}),i}})});var OO=a(()=>{"use strict";var V4=q(),Y4=z(),J4=V(),TO=ae(),Q4=he(),X4=TO.Map,Z4=TO.set;V4({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=J4(this),n=Y4(r,arguments.length>1?arguments[1]:void 0),i=new X4;return Q4(t,function(o,u){Z4(i,u,n(o,u,t))}),i}})});var CO=a(()=>{"use strict";var eG=q(),rG=V(),tG=pe(),nG=ae().set;eG({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=rG(this),n=arguments.length,i=0;i<n;)tG(arguments[i++],function(o,u){nG(t,o,u)},{AS_ENTRIES:!0});return t}})});var EO=a(()=>{"use strict";var iG=q(),aG=F(),oG=V(),uG=he(),sG=TypeError;iG({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=oG(this),n=arguments.length<2,i=n?void 0:arguments[1];if(aG(r),uG(t,function(o,u){n?(n=!1,i=o):i=r(i,o,u,t)}),n)throw new sG("Reduce of empty map with no initial value");return i}})});var IO=a(()=>{"use strict";var cG=q(),lG=z(),fG=V(),pG=he();cG({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=fG(this),n=lG(r,arguments.length>1?arguments[1]:void 0);return pG(t,function(i,o){if(n(i,o,t))return!0},!0)===!0}})});var _O=a(()=>{"use strict";var vG=q(),kO=F(),dG=V(),ks=ae(),mG=TypeError,hG=ks.get,yG=ks.has,gG=ks.set;vG({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=dG(this),i=arguments.length;kO(t);var o=yG(n,r);if(!o&&i<3)throw new mG("Updating absent value");var u=o?hG(n,r):kO(i>2?arguments[2]:void 0)(r,n);return gG(n,r,t(u,r,n)),n}})});var Ps=a((KJ,PO)=>{"use strict";var Di=D(),_s=F(),Bi=N(),bG=Q(),qG=TypeError;PO.exports=function(r,t){var n=bG(this),i=_s(n.get),o=_s(n.has),u=_s(n.set),s=arguments.length>2?arguments[2]:void 0,c;if(!Bi(t)&&!Bi(s))throw new qG("At least one callback required");return Di(o,n,r)?(c=Di(i,n,r),Bi(t)&&(c=t(c),Di(u,n,r,c))):Bi(s)&&(c=s(),Di(u,n,r,c)),c}});var RO=a(()=>{"use strict";var xG=q(),SG=Ps();xG({target:"Map",proto:!0,real:!0,forced:!0},{upsert:SG})});var AO=a(()=>{"use strict";var wG=q(),TG=Ps();wG({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:TG})});var MO=a((QJ,NO)=>{"use strict";var OG=JT();eO();iO();oO();uO();cO();vO();mO();hO();yO();qO();Cs();Es();xO();wO();OO();CO();EO();IO();_O();RO();AO();NO.exports=OG});var $O=a((XJ,jO)=>{"use strict";jO.exports=MO()});var FO=a(()=>{"use strict";var CG=q(),EG=ct(),IG=Aa().indexOf,kG=es(),Rs=EG([].indexOf),LO=!!Rs&&1/Rs([1],1,-0)<0,_G=LO||!kG("indexOf");CG({target:"Array",proto:!0,forced:_G},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return LO?Rs(this,r,t)||0:IG(this,r,t)}})});var BO=a((rQ,DO)=>{"use strict";FO();var PG=oe();DO.exports=PG("Array","indexOf")});var UO=a((tQ,GO)=>{"use strict";var RG=B(),AG=BO(),As=Array.prototype;GO.exports=function(e){var r=e.indexOf;return e===As||RG(As,e)&&r===As.indexOf?AG:r}});var HO=a((nQ,WO)=>{"use strict";var NG=UO();WO.exports=NG});var zO=a((iQ,KO)=>{"use strict";var MG=HO();KO.exports=MG});var YO=a((aQ,VO)=>{"use strict";var jG=zO();VO.exports=jG});var QO=a((oQ,JO)=>{"use strict";JO.exports=YO()});var dC=a(()=>{"use strict";var GG=q(),UG=re(),vC=En(),WG=_(),HG=WG(function(){vC(1)});GG({target:"Object",stat:!0,forced:HG},{keys:function(r){return vC(UG(r))}})});var hC=a((fX,mC)=>{"use strict";dC();var KG=K();mC.exports=KG.Object.keys});var gC=a((pX,yC)=>{"use strict";var zG=hC();yC.exports=zG});var qC=a((vX,bC)=>{"use strict";var VG=gC();bC.exports=VG});var SC=a((dX,xC)=>{"use strict";var YG=qC();xC.exports=YG});var TC=a((mX,wC)=>{"use strict";wC.exports=SC()});var CC=a((hX,OC)=>{OC.exports=TC()});var kr="";function Js(e){kr=e.replace(/\/+$/,"")}async function ut(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function Qs(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${kr}/comments?${t}`);return await ut(n,"Failed to fetch comments"),(await n.json()).data}async function Qi({uri:e,document:r,quote:t,prefix:n,suffix:i,body:o,author:u,parent:s,color:c}){let l={quote:t,prefix:n,suffix:i,body:o,author:u,parent:s};c&&(l.color=c),r?l.document=r:l.uri=e;let f=await fetch(`${kr}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});return await ut(f,"Failed to create comment"),f.json()}async function Xs(e,{body:r}){let t=await fetch(`${kr}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:r})});return await ut(t,"Failed to update comment"),t.json()}async function Zs(e,r){let t=await fetch(`${kr}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});return await ut(t,"Failed to update comment status"),t.json()}async function ec(e){let r=await fetch(`${kr}/comments/${e}`,{method:"DELETE"});await ut(r,"Failed to delete comment")}var GL=g(Br(),1),UL=g(Mn(),1),WL=g(Qn(),1),HL=g(Xn(),1),KL=g(Zn(),1);var Eu=g(rt(),1);function Yy(e,r,t,n,i,o,u){try{var s=e[o](u),c=s.value}catch(l){return void t(l)}s.done?r(c):Eu.default.resolve(c).then(n,i)}function xr(e){return function(){var r=this,t=arguments;return new Eu.default(function(n,i){var o=e.apply(r,t);function u(c){Yy(o,n,i,u,s,"next",c)}function s(c){Yy(o,n,i,u,s,"throw",c)}u(void 0)})}}function Bt(e,r){this.v=e,this.k=r}function Xe(e){return new Bt(e,0)}var Iu=g(rt(),1),ag=g(we(),1),og=g(di(),1);function Oe(e){return function(){return new Gt(e.apply(this,arguments))}}function Gt(e){var r,t;function n(o,u){try{var s=e[o](u),c=s.value,l=c instanceof Bt;Iu.default.resolve(l?c.v:c).then(function(f){if(l){var v=o==="return"?"return":"next";if(!c.k||f.done)return n(v,f);f=e[v](f).value}i(s.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){i("throw",f)}}function i(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new Iu.default(function(s,c){var l={key:o,arg:u,resolve:s,reject:c,next:null};t?t=t.next=l:(r=t=l,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Gt.prototype[typeof ag.default=="function"&&og.default||"@@asyncIterator"]=function(){return this},Gt.prototype.next=function(e){return this._invoke("next",e)},Gt.prototype.throw=function(e){return this._invoke("throw",e)},Gt.prototype.return=function(e){return this._invoke("return",e)};var zL=g(se(),1),VL=g(_q(),1);function ce(e){var r,t=DL(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function DL(e){return"startContainer"in e}function er(e){if(BL(e))return e;var r=e,t=ce(r).createRange();return t.selectNodeContents(r),t}function BL(e){return"startContainer"in e}var Gq=g(Bq(),1);function Uq(e){if((0,Gq.default)(e))return e}var tx=g(we(),1),nx=g(jo(),1),ix=g(Qu(),1);function ax(e,r){var t=e==null?null:typeof tx.default<"u"&&(0,nx.default)(e)||e["@@iterator"];if(t!=null){var n,i,o,u,s=[],c=!0,l=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&((0,ix.default)(s).call(s,n.value),s.length!==r);c=!0);}catch(f){l=!0,i=f}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(l)throw i}}return s}}var ox=g(Ca(),1),ux=g(Xa(),1);function ki(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function Xu(e,r){if(e){var t;if(typeof e=="string")return ki(e,r);var n=(0,ox.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,ux.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ki(e,r):void 0}}function sx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Le(e,r){return Uq(e)||ax(e,r)||Xu(e,r)||sx()}var cx=g(we(),1),lx=g(di(),1),fx=g(Jt(),1),en=g(rt(),1);function nt(e){var r,t,n,i=2;for(typeof cx.default<"u"&&(t=lx.default,n=fx.default);i--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new _i(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function _i(e){function r(t){if(Object(t)!==t)return en.default.reject(new TypeError(t+" is not an object."));var n=t.done;return en.default.resolve(t.value).then(function(i){return{value:i,done:n}})}return _i=function(n){this.s=n,this.n=n.next},_i.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var i=this.s.return;return i===void 0?en.default.resolve({value:n,done:!0}):r(i.apply(this.s,arguments))},throw:function(n){var i=this.s.return;return i===void 0?en.default.reject(n):r(i.apply(this.s,arguments))}},new _i(e)}var xD=g(se(),1);var mD=g(se(),1),hD=g(Cx(),1),yD=g(Ix(),1),gD=g(Jx(),1),bD=g(mS(),1),qD=g(is(),1);var js=g(se(),1);var d3=g(se(),1);var os=g(se(),1);function rn(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function kS(e,r){return rn(e.startChunk,r.startChunk)&&rn(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function Sr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var as=g(Ht(),1);var tn=g(we(),1),_S=g(Jt(),1);function Fe(e){"@babel/helpers - typeof";return Fe=typeof tn.default=="function"&&typeof _S.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof tn.default=="function"&&r.constructor===tn.default&&r!==tn.default.prototype?"symbol":typeof r},Fe(e)}var GS=g(BS(),1);function US(e,r){if(Fe(e)!="object"||!e)return e;var t=e[GS.default];if(t!==void 0){var n=t.call(e,r||"default");if(Fe(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Pi(e){var r=US(e,"string");return Fe(r)=="symbol"?r:r+""}function WS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,as.default)(e,Pi(n.key),n)}}function nn(e,r,t){return r&&WS(e.prototype,r),t&&WS(e,t),(0,as.default)(e,"prototype",{writable:!1}),e}var HS=g(Ht(),1);function wr(e,r,t){return(r=Pi(r))in e?(0,HS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var KS=g(Br(),1);var Ri="Iterator exhausted before seek ended.",an=function(){function e(r){Sr(this,e),this.chunker=r,wr(this,"currentChunkPosition",0),wr(this,"offsetInChunk",0),this.seekTo(0)}return nn(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,i)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!rn(this.currentChunk,n);){var v=this._readToPreviousChunk(),p=Le(v,2),d=p[0],h=p[1];if(t&&(u=d+u),h===null)throw new RangeError(Ri)}else for(;!rn(this.currentChunk,n);){var s=this._readToNextChunk(),c=Le(s,2),l=c[0],f=c[1];if(t&&(u+=l),f===null)throw new RangeError(Ri)}var m=this.currentChunkPosition+i;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,KS.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var s=this.currentChunkPosition+this.currentChunk.data.length;if(s<=n){var c=this._readToNextChunk(),l=Le(c,2),f=l[0],v=l[1];if(t&&(u+=f),v===null){if(this.position===n||o)break;throw new RangeError(Ri)}}else{var p=i?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,p)),this.offsetInChunk=p,i&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=i?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var h=this._readToPreviousChunk(),m=Le(h,2),x=m[0],y=m[1];if(t&&(u=x+u),y===null){if(o)break;throw new RangeError(Ri)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,i=this.chunker.nextChunk();return i!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,i]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function VS(e,r){return us.apply(this,arguments)}function us(){return us=xr(os.default.mark(function e(r,t){var n,i,o,u,s,c,l,f,v,p,d,h,m,x,y,b,E,I,S,T,w,C,j=arguments;return os.default.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:n=j.length>2&&j[2]!==void 0?j[2]:{},i=n.minimalContext,o=i===void 0?!1:i,u=n.minimumQuoteLength,s=u===void 0?0:u,c=n.maxWordLength,l=c===void 0?50:c,f=new an(t()),v=new an(t()),f.seekToChunk(r.startChunk,r.startIndex),p=f.readToChunk(r.endChunk,r.endIndex),d="",h="",m=function(){return d.length+p.length+h.length},m()<s&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),x=Math.floor((s-m())/2),d=f.read(-x,!1,!0)+d,m()<s&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),y=s-m(),h=h+f.read(y,!1,!0),m()<s&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),b=s-m(),d=f.read(-b,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=Ai(f,l,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+Ai(f,l,!1));case 11:return E={type:"TextQuoteSelector",exact:p,prefix:d,suffix:h},I=Ni(E)(t()),k.next=16,I.next();case 16:if(S=k.sent,!(!S.done&&kS(S.value,r))){k.next=21;break}return k.next=20,I.next();case 20:S=k.sent;case 21:if(!S.done){k.next=23;break}return k.abrupt("return",E);case 23:if(T=S.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),v.seekToChunk(T.startChunk,T.startIndex-d.length),w=zS(f,v,!0),w!==void 0&&!o&&(w=Ai(f,l,!0)+w),f.seekToChunk(r.endChunk,r.endIndex+h.length),v.seekToChunk(T.endChunk,T.endIndex+h.length),C=zS(f,v,!1),C!==void 0&&!o&&(C=C+Ai(f,l,!1)),!o){k.next=44;break}if(!(w!==void 0&&(C===void 0||w.length<=C.length))){k.next=37;break}d=w+d,k.next=42;break;case 37:if(C===void 0){k.next=41;break}h=h+C,k.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:k.next=46;break;case 44:w!==void 0&&(d=w+d),C!==void 0&&(h=h+C);case 46:k.next=11;break;case 48:case"end":return k.stop()}},e)})),us.apply(this,arguments)}function zS(e,r,t){for(var n="";;){var i=void 0;try{i=e.read(t?-1:1)}catch{return}n=t?i+n:n+i;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(i!==o)return n}}function Ai(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var i=void 0;try{i=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(CD(i)){e.seekBy(t?1:-1);break}n=t?i+n:n+i}return n}function CD(e){return/^\s+$/.test(e)}var Mw=g(Br(),1),jw=g(Mn(),1),$w=g(Qn(),1),Lw=g(Xn(),1),Fw=g(Zn(),1);var ls=g(se(),1),Dw=g(yw(),1),Bw=g(Rw(),1);function Aw(e,r){var t;if(typeof $w.default>"u"||(0,Lw.default)(e)==null){if(Array.isArray(e)||(t=s3(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,s;return{s:function(){t=(0,Fw.default)(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){u=!0,s=l},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw s}}}}function s3(e,r){var t;if(e){if(typeof e=="string")return Nw(e,r);var n=(0,Mw.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,jw.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nw(e,r)}}function Nw(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Ni(e){return function(){var r=Oe(ls.default.mark(function n(i){var o,u,s,c,l,f,v,p,d,h,m,x,y,b,E,I,S,T,w,C,j,be,k,ee,qe,J,L;return ls.default.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:o=e.exact,u=e.prefix||"",s=e.suffix||"",c=u+o+s,l=[],f=!0;case 6:v=i.currentChunk,p=v.data,d=[],h=Aw(l),O.prev=10,h.s();case 12:if((m=h.n()).done){O.next=27;break}if(x=m.value,y=x.charactersMatched,x.endChunk===void 0&&(b=u.length+o.length-y,b<=p.length&&(x.endChunk=v,x.endIndex=b)),x.startChunk===void 0&&(E=u.length-y,(E<p.length||x.endChunk!==void 0)&&(x.startChunk=v,x.startIndex=E)),I=c.length-y,!(I<=p.length)){O.next=24;break}if(!(0,Dw.default)(p).call(p,c.substring(y))){O.next=22;break}return O.next=22,x;case 22:O.next=25;break;case 24:p===c.substring(y,y+p.length)&&(x.charactersMatched+=p.length,d.push(x));case 25:O.next=12;break;case 27:O.next=32;break;case 29:O.prev=29,O.t0=O.catch(10),h.e(O.t0);case 32:return O.prev=32,h.f(),O.finish(32);case 35:if(l=d,!(c.length<=p.length)){O.next=49;break}S=0;case 38:if(!(S<=p.length)){O.next=49;break}if(T=p.indexOf(c,S),T!==-1){O.next=42;break}return O.abrupt("break",49);case 42:if(S=T+1,!(T===0&&c.length===0&&!f)){O.next=45;break}return O.abrupt("continue",38);case 45:return O.next=47,{startChunk:v,startIndex:T+u.length,endChunk:v,endIndex:T+u.length+o.length};case 47:O.next=38;break;case 49:for(w=[],C=Math.max(p.length-c.length+1,0),j=function(Ue){var Vs=p[Ue];w=(0,Bw.default)(w).call(w,function(eE){return Vs===c[Ue-eE]}),Vs===c[0]&&w.push(Ue)},be=C;be<p.length;be++)j(be);k=Aw(w);try{for(k.s();!(ee=k.n()).done;)qe=ee.value,J=p.length-qe,L={charactersMatched:J},J>=u.length+o.length&&(L.endChunk=v,L.endIndex=qe+u.length+o.length),(J>u.length||L.endChunk!==void 0)&&(L.startChunk=v,L.startIndex=qe+u.length),l.push(L)}catch(Ir){k.e(Ir)}finally{k.f()}f=!1;case 56:if(i.nextChunk()!==null){O.next=6;break}case 57:case"end":return O.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var p3=g(se(),1);var c3=g(Br(),1),l3=g(is(),1);var v3=g(se(),1);var sn=g(aT(),1);var uT=g(hi(),1),sT=g(Ht(),1);var vs=g(yi(),1),oT=g(Wt(),1);function rr(e,r){var t;return rr=vs.default?(0,oT.default)(t=vs.default).call(t):function(n,i){return n.__proto__=i,n},rr(e,r)}function ds(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,uT.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,sT.default)(e,"prototype",{writable:!1}),r&&rr(e,r)}function cT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function lT(e,r){if(r&&(Fe(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return cT(e)}var fT=g(yi(),1),pT=g(Wt(),1),ms=g(mi(),1);function Tr(e){var r;return Tr=fT.default?(0,pT.default)(r=ms.default).call(r):function(t){return t.__proto__||(0,ms.default)(t)},Tr(e)}var Ms=g($O(),1),aC=g(hi(),1);var XO=g(QO(),1);function ZO(e){try{var r;return(0,XO.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var rC=g(Mi(),1),tC=g(Qu(),1),nC=g(Wt(),1);var eC=g(Mi(),1);function Ns(){try{var e=!Boolean.prototype.valueOf.call((0,eC.default)(Boolean,[],function(){}))}catch{}return(Ns=function(){return!!e})()}function iC(e,r,t){if(Ns())return rC.default.apply(null,arguments);var n=[null];(0,tC.default)(n).apply(n,r);var i=new((0,nC.default)(e).apply(e,n));return t&&rr(i,t.prototype),i}function un(e){var r=typeof Ms.default=="function"?new Ms.default:void 0;return un=function(n){if(n===null||!ZO(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,i)}function i(){return iC(n,arguments,Tr(this).constructor)}return i.prototype=(0,aC.default)(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),rr(i,n)},un(e)}function sC(e,r){var t=ce(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i=oC(e.startContainer,e.startOffset),o=Le(i,2),u=o[0],s=o[1];for(n.currentNode=u;s===u.length&&n.nextNode();)u=n.currentNode,s=0;e.setStart(u,s);var c=oC(e.endContainer,e.endOffset),l=Le(c,2),f=l[0],v=l[1];for(n.currentNode=f;v===0&&n.previousNode();)f=n.currentNode,v=f.length;return e.setEnd(f,v),e}function oC(e,r){var t;if(uC(e))return[e,r];var n;if($G(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(uC(n))return[n,0];var i=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=i.createTreeWalker(i,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function uC(e){return e.nodeType===Node.TEXT_NODE}function $G(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function lC(e){var r=LG();return function(){var n=Tr(e),i;if(r){var o=Tr(this).constructor;i=(0,sn.default)(n,arguments,o)}else i=n.apply(this,arguments);return lT(this,i)}}function LG(){if(typeof Reflect>"u"||!sn.default||sn.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,sn.default)(Boolean,[],function(){})),!0}catch{return!1}}var Gi=function(e){ds(t,e);var r=lC(t);function t(n){return Sr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(un(TypeError)),FG=function(e){ds(t,e);var r=lC(t);function t(n){return Sr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(un(TypeError)),Or=function(){function e(r){var t=this;if(Sr(this,e),wr(this,"scope",void 0),wr(this,"iter",void 0),this.scope=er(r),this.iter=ce(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!cC(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Gi}}return nn(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!cC(t))throw new Gi;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new FG;var n=t===this.scope.startContainer?this.scope.startOffset:0,i=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:i,data:t.data.substring(n,i),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=sC(t,this.scope),i=this.nodeToChunk(n.startContainer),o=n.startOffset-i.startOffset,u=this.nodeToChunk(n.endContainer),s=n.endOffset-u.startOffset;return{startChunk:i,startIndex:o,endChunk:u,endIndex:s}}},{key:"chunkRangeToRange",value:function(t){var n=ce(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function cC(e){return e.nodeType===Node.TEXT_NODE}function fC(e,r){return $s.apply(this,arguments)}function $s(){return $s=xr(js.default.mark(function e(r,t){var n,i,o,u=arguments;return js.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},i=er(t??ce(r)),o=new Or(i),c.next=5,VS(o.rangeToChunkRange(r),function(){return new Or(i)},n);case 5:return c.abrupt("return",c.sent);case 6:case"end":return c.stop()}},e)})),$s.apply(this,arguments)}var Ls=g(se(),1);function pC(e){var r=Ni(e);return function(){var t=Oe(Ls.default.mark(function i(o){var u,s,c,l,f,v,p,d;return Ls.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new Or(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof Gi)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:s=!0,c=!1,m.prev=13,f=nt(r(u));case 15:return m.next=17,Xe(f.next());case 17:return v=m.sent,s=v.done,m.next=21,Xe(v.value);case 21:if(p=m.sent,s){m.next=29;break}return d=p,m.next=26,u.chunkRangeToRange(d);case 26:s=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),c=!0,l=m.t1;case 35:if(m.prev=35,m.prev=36,!(!s&&f.return!=null)){m.next=40;break}return m.next=40,Xe(f.return());case 40:if(m.prev=40,!c){m.next=43;break}throw l;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},i,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(i){return t.apply(this,arguments)}return n}()}var DG=g(se(),1);var BG=g(se(),1);var JG=g(CC(),1),QG=g(Br(),1),XG=g(Mn(),1),ZG=g(Qn(),1),e5=g(Xn(),1),r5=g(Zn(),1);async function EC(e,r){let t=await fC(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function Ui(e,r){let t=pC({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var Wi={yellow:"#ffd400",red:"#ff6b6b",green:"#51cf66",blue:"#339af0",purple:"#9775fa",pink:"#f06595",orange:"#ff922b",teal:"#20c997"},cn="#ffd400",t5=/^#[0-9a-fA-F]{6}$/;function Hi(e){if(!e||typeof e!="string")return null;let r=e.trim().toLowerCase();return Wi[r]?Wi[r]:t5.test(r)?r:null}function Ki(e,r){let t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),i=parseInt(e.slice(5,7),16);return`rgba(${t}, ${n}, ${i}, ${r})`}var it="fb-highlight",IC="fb-highlight-active";var Fs=new Map,ln=null;function _C(e){ln=e}function zi(e,r,t){let n=Hi(t)||cn;Fs.set(r,n);let i=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let o=kC(e,r,n);i.push(o)}else{let o=i5(e);for(let u=0;u<o.length;u++){let s=o[u],c=document.createRange();s===e.startContainer?(c.setStart(s,e.startOffset),c.setEnd(s,s.textContent.length)):s===e.endContainer?(c.setStart(s,0),c.setEnd(s,e.endOffset)):c.selectNodeContents(s),c.collapsed||i.push(kC(c,r,n))}}return i}function kC(e,r,t){let n=e.commonAncestorContainer;for(;n&&n.nodeType!==Node.ELEMENT_NODE;)n=n.parentNode;let i=n,o=!1,u=null;for(;i;){if(i.tagName==="foreignObject"){o=!1;break}i.tagName==="text"&&i instanceof SVGElement&&(o=!0),i.tagName==="svg"&&(u=i),i=i.parentElement}if(o&&u)return n5(e,r,u,t);let s=document.createElement("mark");s.className=it,s.dataset.commentId=r,s.style.backgroundColor=Ki(t,.35),s.style.cursor="pointer",s.style.borderRadius="2px",s.addEventListener("click",()=>{ln&&ln(r)});try{e.surroundContents(s)}catch(c){return console.warn("[feedback-layer] Failed to create highlight:",c),null}return s}function n5(e,r,t,n){try{let i=e.getClientRects();if(i.length===0)return null;let o="http://www.w3.org/2000/svg",u=t.getScreenCTM();if(!u)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let s=e.commonAncestorContainer;for(;s&&s.nodeType!==Node.ELEMENT_NODE;)s=s.parentNode;let c=s,l=null;for(;c&&c!==t;){if(c.tagName==="text"){l=c.parentElement;break}c=c.parentElement}let f=l||t,v=u;f!==t&&f.getScreenCTM&&(v=f.getScreenCTM());let p=document.createElementNS(o,"g");p.setAttribute("class",it),p.setAttribute("data-comment-id",r),p.style.cursor="pointer";for(let y=0;y<i.length;y++){let b=i[y],E=document.createElementNS(o,"rect"),I=t.createSVGPoint();I.x=b.left,I.y=b.top;let S=I.matrixTransform(v.inverse()),T=b.width/v.a,w=b.height/v.d;E.setAttribute("x",S.x),E.setAttribute("y",S.y),E.setAttribute("width",T),E.setAttribute("height",w),E.setAttribute("fill",n),E.setAttribute("fill-opacity","0.35"),E.setAttribute("rx","2"),E.setAttribute("ry","2"),E.style.pointerEvents="none",p.appendChild(E)}f&&f!==t?f.appendChild(p):t.appendChild(p);let d=e.commonAncestorContainer;for(;d&&d.nodeType!==Node.ELEMENT_NODE;)d=d.parentNode;let h=new Set,m=d;for(;m&&m!==t;)m.tagName==="text"&&m instanceof SVGElement&&(h.add(m),m.querySelectorAll("tspan").forEach(b=>h.add(b))),m=m.parentElement;let x=y=>{y.preventDefault(),y.stopPropagation(),ln&&ln(r)};return h.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",x),y.dataset.fbCommentId=r}),p}catch(i){return console.warn("[feedback-layer] Failed to create SVG highlight:",i),null}}function Ds(e){Fs.delete(e),document.querySelectorAll(`.${it}[data-comment-id="${e}"]`).forEach(n=>{let i=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)i.removeChild(n);else{for(;n.firstChild;)i.insertBefore(n.firstChild,n);i.removeChild(n),i.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function PC(){document.querySelectorAll(`.${it}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function Vi(e){document.querySelectorAll(`.${it}`).forEach(r=>{let t=r.dataset.commentId,n=t===e,i=Fs.get(t)||cn,o=Ki(i,.55),u=Ki(i,.35);n?r.classList.add(IC):r.classList.remove(IC),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(c=>{c.setAttribute("fill",i),c.setAttribute("fill-opacity",n?"0.55":"0.35")}):r.style.backgroundColor=n?o:u})}function RC(e){let r=document.querySelector(`.${it}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function i5(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let i=document.createRange();return i.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,i)<0&&e.compareBoundaryPoints(Range.START_TO_END,i)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function AC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,i)=>{let o=[`**${i+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let s of u)o.push(`  - **[${s.author}]** (reply): ${s.body}`);return o.join(`
`)}).join(`

`)}function NC(e,r){let t=AC(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(i=>!i.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function tr(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var a5=`
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
`,MC=null,jC=null;function $C(e,r){jC=e,MC=r,o5()}function o5(){let e=document.createElement("style");e.textContent=a5,document.head.appendChild(e)}function LC(){let e=MC(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let i=document.createElement("button");i.className="hf-modal-close",i.textContent="\xD7",i.addEventListener("click",()=>r.remove()),n.appendChild(i);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",v=>{v.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let s=document.querySelector(jC.contentSelector||"body").innerHTML,c=NC(s,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${c.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${tr(c)}</textarea>
  `;let l=document.createElement("button");l.className="hf-btn hf-btn-primary",l.textContent="Copy Prompt",l.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c),l.textContent="Copied!"}catch{l.textContent="Copy failed"}setTimeout(()=>l.textContent="Copy Prompt",2e3)}),u.appendChild(l);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function FC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function DC(e,r){return e.length>r?e.slice(0,r)+"...":e}function BC(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var fn=null;function UC(e){fn=document.createElement("div"),fn.className="fb-toast-container",e.appendChild(fn)}function Cr(e,r="success"){if(!fn)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>GC(t)),t.appendChild(o)}fn.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>GC(t),r==="error"?8e3:4e3)}function GC(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}var u5=320,HC="feedback-layer-commenter",X=null,Be=null,ye=null,Bs=null,KC=null,Gs=null,Us=null,Ws=null,Hs=null,zC=null,Ks=!1,VC=[],YC=new Set;function at(){return localStorage.getItem(HC)||""}function JC({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:i,defaultColor:o}){KC=e,Gs=r,Us=t,Ws=n,Hs=i,zC=o||null,f5(),X=document.createElement("div"),X.className="fb-sidebar fb-sidebar-collapsed",X.innerHTML=`
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
  `;let u=document.createElement("button");u.className="fb-sidebar-tab",u.textContent="Feedback",u.addEventListener("click",()=>pn()),document.body.appendChild(u),document.body.appendChild(X),UC(X),Be=X.querySelector(".fb-comment-list"),ye=X.querySelector(".fb-form-section");let s=X.querySelector(".fb-name-input");s.addEventListener("input",()=>{localStorage.setItem(HC,s.value.trim())}),X.querySelector(".fb-ai-btn").addEventListener("click",()=>LC()),X.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>s5());let f=X.querySelector(".fb-show-resolved-cb");f.addEventListener("change",()=>{Ks=f.checked,nr(VC,YC)})}function pn(){X.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden")}function s5(){X.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden")}function QC(e){if(pn(),!at()){let u=X.querySelector(".fb-name-input");u.style.outline="2px solid #ef4444",setTimeout(()=>u.style.outline="",2e3)}Bs=e,ye.style.display="";let r=Object.entries(Wi),t=zC||cn;ye.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${tr(DC(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-color-picker">
        <label class="fb-color-label">Color</label>
        <div class="fb-color-swatches">
          ${r.map(([u,s])=>`<button type="button" class="fb-color-swatch${s===t?" fb-color-swatch-active":""}" data-color="${s}" title="${u}" style="background:${s};"></button>`).join("")}
        </div>
      </div>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `;let n=t;ye.querySelectorAll(".fb-color-swatch").forEach(u=>{u.addEventListener("click",s=>{s.preventDefault(),ye.querySelectorAll(".fb-color-swatch").forEach(c=>c.classList.remove("fb-color-swatch-active")),u.classList.add("fb-color-swatch-active"),n=u.dataset.color})});let i=ye.querySelector(".fb-form-textarea");i.focus();let o=()=>{if(!at()){let s=X.querySelector(".fb-name-input");s.focus(),s.style.outline="2px solid #ef4444",setTimeout(()=>s.style.outline="",2e3);return}let u=i.value.trim();u&&(KC({comment:u,commenter:at(),color:n}),ye.style.display="none",Bs=null)};ye.querySelector(".fb-submit-btn").addEventListener("click",o),i.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),ye.querySelector(".fb-cancel-btn").addEventListener("click",()=>{ye.style.display="none",Bs=null}),ye.scrollIntoView({behavior:"smooth",block:"nearest"})}function nr(e,r=new Set,t=new Map){VC=e,YC=r,Be.innerHTML="";let{topLevel:n,repliesByParent:i}=FC(e),o=n.slice().sort((l,f)=>{let v=t.get(l.id),p=t.get(f.id);return!v||!p?0:v.compareBoundaryPoints(Range.START_TO_START,p)}),u=o.filter(l=>{let f=r.has(l.id),v=l.status==="closed";return f||v&&Ks}),s=Ks?u:u.filter(l=>l.status!=="closed");if(o.length===0){Be.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let c=o.filter(l=>!r.has(l.id)&&l.status!=="closed").length;if(s.length===0){c>0?Be.innerHTML=`<div class="fb-empty">
        ${u.length} comment(s) resolved.
        ${c>0?`<br>${c} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:Be.innerHTML=`<div class="fb-empty">All ${o.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let l of s){let f=document.createElement("div");f.className="fb-thread",f.appendChild(WC(l,!1));let v=i.get(l.id)||[];for(let d of v)f.appendChild(WC(d,!0));let p=document.createElement("button");p.className="fb-reply-btn",p.textContent="Reply",p.addEventListener("click",d=>{d.stopPropagation(),c5(l.id,f,p)}),f.appendChild(p),Be.appendChild(f)}}function WC(e,r){let t=e.status==="closed",n=document.createElement("div");return n.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":""),n.dataset.id=e.id,n.innerHTML=`
    <div class="fb-cmt-body">${tr(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${tr(e.author)}</span>
      <span class="fb-cmt-time">${BC(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
  `,r||(n.addEventListener("click",i=>{i.target.closest(".fb-cmt-delete")||i.target.closest(".fb-cmt-resolve")||i.target.closest(".fb-cmt-edit")||(Vi(e.id),RC(e.id),Be.querySelectorAll(".fb-cmt-card").forEach(o=>o.classList.remove("fb-cmt-active")),n.classList.add("fb-cmt-active"))}),n.querySelector(".fb-cmt-resolve").addEventListener("click",i=>{i.stopPropagation(),Us&&Us(e.id,!t)})),n.querySelector(".fb-cmt-edit").addEventListener("click",i=>{i.stopPropagation(),l5(e,n)}),n.querySelector(".fb-cmt-delete").addEventListener("click",i=>{i.stopPropagation(),Gs&&Gs(e.id)}),n}function c5(e,r,t){pn();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let i=document.createElement("div");i.className="fb-reply-form",i.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!at()){let c=X.querySelector(".fb-name-input");c.focus(),c.style.outline="2px solid #ef4444",setTimeout(()=>c.style.outline="",2e3);return}let s=i.querySelector("textarea").value.trim();s&&(Ws&&Ws({parent_id:e,comment:s,commenter:at()}),i.remove(),t.style.display="")};i.querySelector(".fb-reply-submit").addEventListener("click",o);let u=i.querySelector("textarea");u.addEventListener("keydown",s=>{s.key==="Enter"&&(s.metaKey||s.ctrlKey)&&(s.preventDefault(),o())}),i.querySelector(".fb-reply-cancel").addEventListener("click",()=>{i.remove(),t.style.display=""}),r.insertBefore(i,t),u.focus()}function l5(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${tr(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let i=t.querySelector("textarea");i.focus(),i.setSelectionRange(i.value.length,i.value.length);let o=()=>{let u=i.value.trim();u&&Hs&&Hs(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),i.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function XC(e){let r=Be.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(Be.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function f5(){let e=document.createElement("style");e.textContent=`
    .fb-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: ${u5}px;
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

    /* Color picker */
    .fb-color-picker {
      margin-bottom: 8px;
    }
    .fb-color-label {
      display: block;
      font-size: 11px;
      font-weight: 600;
      color: #888;
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .fb-color-swatches {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }
    .fb-color-swatch {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 2px solid transparent;
      cursor: pointer;
      padding: 0;
      transition: border-color 0.15s, transform 0.1s;
    }
    .fb-color-swatch:hover {
      transform: scale(1.15);
    }
    .fb-color-swatch-active {
      border-color: #333;
      box-shadow: 0 0 0 2px rgba(0,0,0,0.1);
    }

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
  `,document.head.appendChild(e)}var ot=null,Yi=null,Ji=null,zs=null,Y=[],Er=null,Ee=null,ge=new Set,Ge=new Map;function p5(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null,defaultColor:e?.dataset.defaultColor||null};Js(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{ot=document.querySelector(r.contentSelector)||document.body,Yi=r.documentUri||window.location.origin+window.location.pathname,Ji=r.documentId||null,zs=Hi(r.defaultColor)||null,JC({onSubmit:y5,onDelete:x5,onResolve:g5,onReply:b5,onEdit:q5,defaultColor:zs}),_C(i=>{pn(),XC(i),Vi(i)}),m5(),await t(),v5(),$C(r,()=>Y)}catch(i){console.error("[feedback-layer] Boot failed:",i)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function v5(){try{Y=await Qs(Yi,Ji),ge=await d5(Y),nr(Y,ge,Ge)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),Cr(`Failed to load comments: ${e.message}`,"error")}}async function d5(e){PC();let r=new Set;Ge.clear();for(let t of e)if(!t.parent)try{let n=await Ui({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ot);n&&t.status!=="closed"?(zi(n,t.id,t.color),r.add(t.id),Ge.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),Ge.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function m5(){document.addEventListener("mouseup",ZC),document.addEventListener("keyup",ZC)}function ZC(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){vn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){vn();return}if(!ot.contains(r.commonAncestorContainer)){vn();return}h5(r)},10)}function h5(e){vn();let r=e.getBoundingClientRect();Ee=document.createElement("button"),Ee.className="fb-annotate-tooltip",Ee.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',Ee.style.top=window.scrollY+r.top-36+"px",Ee.style.left=window.scrollX+r.left+r.width/2-40+"px",Ee.addEventListener("mousedown",async t=>{t.preventDefault(),t.stopPropagation();let n=window.getSelection();if(!n||n.isCollapsed)return;let i=n.getRangeAt(0);try{Er=await EC(i,ot),QC(Er.exact)}catch(o){console.error("[feedback-layer] Failed to create selector:",o)}vn()}),document.body.appendChild(Ee)}function vn(){Ee&&(Ee.remove(),Ee=null)}async function y5({comment:e,commenter:r,color:t}){if(!Er)return;let n=t||zs||null;try{let i=await Qi({uri:Yi,document:Ji,quote:Er.exact,prefix:Er.prefix,suffix:Er.suffix,body:e,author:r,color:n});Y.push(i);let o=await Ui({exact:i.quote,prefix:i.prefix,suffix:i.suffix},ot);o&&(zi(o,i.id,i.color),ge.add(i.id)),nr(Y,ge,Ge),window.getSelection().removeAllRanges()}catch(i){console.error("[feedback-layer] Failed to create comment:",i),Cr(`Failed to save comment: ${i.message}`,"error")}Er=null}async function g5(e,r){try{let n=await Zs(e,r?"closed":"open"),i=Y.findIndex(o=>o.id===e);if(i!==-1&&(Y[i]=n),r)Ds(e);else{let o=n,u=await Ui({exact:o.quote,prefix:o.prefix,suffix:o.suffix},ot);u?(zi(u,o.id,o.color),ge.add(o.id)):ge.delete(o.id)}nr(Y,ge,Ge)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),Cr(`Failed to update comment: ${t.message}`,"error")}}async function b5({parent_id:e,comment:r,commenter:t}){try{let n=await Qi({uri:Yi,document:Ji,body:r,author:t,parent:e});Y.push(n),nr(Y,ge,Ge)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),Cr(`Failed to save reply: ${n.message}`,"error")}}async function q5(e,r){try{let t=await Xs(e,{body:r}),n=Y.findIndex(i=>i.id===e);n!==-1&&(Y[n]=t),nr(Y,ge,Ge)}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),Cr(`Failed to update comment: ${t.message}`,"error")}}async function x5(e){try{await ec(e),Ds(e),ge.delete(e),Y=Y.filter(r=>r.id!==e&&r.parent!==e),nr(Y,ge,Ge)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),Cr(`Failed to delete comment: ${r.message}`,"error")}}try{p5()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
