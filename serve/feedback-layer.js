var FeedbackLayer=(()=>{var eE=Object.create;var zs=Object.defineProperty;var rE=Object.getOwnPropertyDescriptor;var tE=Object.getOwnPropertyNames;var nE=Object.getPrototypeOf,iE=Object.prototype.hasOwnProperty;var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var aE=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of tE(r))!iE.call(e,i)&&i!==t&&zs(e,i,{get:()=>r[i],enumerable:!(n=rE(r,i))||n.enumerable});return e};var g=(e,r,t)=>(t=e!=null?eE(nE(e)):{},aE(r||!e||!e.__esModule?zs(t,"default",{value:e,enumerable:!0}):t,e));var _=a((OU,Zs)=>{"use strict";Zs.exports=function(e){try{return!!e()}catch{return!0}}});var Rr=a((CU,ec)=>{"use strict";var oE=_();ec.exports=!oE(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var A=a((EU,nc)=>{"use strict";var rc=Rr(),tc=Function.prototype,Qi=tc.call,uE=rc&&tc.bind.bind(Qi,Qi);nc.exports=rc?uE:function(e){return function(){return Qi.apply(e,arguments)}}});var B=a((IU,ic)=>{"use strict";var sE=A();ic.exports=sE({}.isPrototypeOf)});var P=a((Xi,ac)=>{"use strict";var lt=function(e){return e&&e.Math===Math&&e};ac.exports=lt(typeof globalThis=="object"&&globalThis)||lt(typeof window=="object"&&window)||lt(typeof self=="object"&&self)||lt(typeof global=="object"&&global)||lt(typeof Xi=="object"&&Xi)||function(){return this}()||Function("return this")()});var Ar=a((kU,cc)=>{"use strict";var cE=Rr(),sc=Function.prototype,oc=sc.apply,uc=sc.call;cc.exports=typeof Reflect=="object"&&Reflect.apply||(cE?uc.bind(oc):function(){return uc.apply(oc,arguments)})});var xe=a((_U,fc)=>{"use strict";var lc=A(),lE=lc({}.toString),fE=lc("".slice);fc.exports=function(e){return fE(lE(e),8,-1)}});var ft=a((PU,pc)=>{"use strict";var pE=xe(),vE=A();pc.exports=function(e){if(pE(e)==="Function")return vE(e)}});var N=a((RU,vc)=>{"use strict";var Zi=typeof document=="object"&&document.all;vc.exports=typeof Zi>"u"&&Zi!==void 0?function(e){return typeof e=="function"||e===Zi}:function(e){return typeof e=="function"}});var G=a((AU,dc)=>{"use strict";var dE=_();dc.exports=!dE(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var D=a((NU,mc)=>{"use strict";var mE=Rr(),yn=Function.prototype.call;mc.exports=mE?yn.bind(yn):function(){return yn.apply(yn,arguments)}});var ea=a(gc=>{"use strict";var hc={}.propertyIsEnumerable,yc=Object.getOwnPropertyDescriptor,hE=yc&&!hc.call({1:2},1);gc.f=hE?function(r){var t=yc(this,r);return!!t&&t.enumerable}:hc});var ze=a((jU,bc)=>{"use strict";bc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var gn=a(($U,qc)=>{"use strict";var yE=A(),gE=_(),bE=xe(),ra=Object,qE=yE("".split);qc.exports=gE(function(){return!ra("z").propertyIsEnumerable(0)})?function(e){return bE(e)==="String"?qE(e,""):ra(e)}:ra});var or=a((LU,xc)=>{"use strict";xc.exports=function(e){return e==null}});var ur=a((FU,Sc)=>{"use strict";var xE=or(),SE=TypeError;Sc.exports=function(e){if(xE(e))throw new SE("Can't call method on "+e);return e}});var ke=a((DU,wc)=>{"use strict";var wE=gn(),TE=ur();wc.exports=function(e){return wE(TE(e))}});var $=a((BU,Tc)=>{"use strict";var OE=N();Tc.exports=function(e){return typeof e=="object"?e!==null:OE(e)}});var z=a((GU,Oc)=>{"use strict";Oc.exports={}});var U=a((UU,Ec)=>{"use strict";var ta=z(),na=P(),CE=N(),Cc=function(e){return CE(e)?e:void 0};Ec.exports=function(e,r){return arguments.length<2?Cc(ta[e])||Cc(na[e]):ta[e]&&ta[e][r]||na[e]&&na[e][r]}});var Nr=a((WU,_c)=>{"use strict";var EE=P(),Ic=EE.navigator,kc=Ic&&Ic.userAgent;_c.exports=kc?String(kc):""});var Mr=a((HU,jc)=>{"use strict";var Mc=P(),ia=Nr(),Pc=Mc.process,Rc=Mc.Deno,Ac=Pc&&Pc.versions||Rc&&Rc.version,Nc=Ac&&Ac.v8,me,bn;Nc&&(me=Nc.split("."),bn=me[0]>0&&me[0]<4?1:+(me[0]+me[1]));!bn&&ia&&(me=ia.match(/Edge\/(\d+)/),(!me||me[1]>=74)&&(me=ia.match(/Chrome\/(\d+)/),me&&(bn=+me[1])));jc.exports=bn});var sr=a((KU,Lc)=>{"use strict";var $c=Mr(),IE=_(),kE=P(),_E=kE.String;Lc.exports=!!Object.getOwnPropertySymbols&&!IE(function(){var e=Symbol("symbol detection");return!_E(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&$c&&$c<41})});var aa=a((zU,Fc)=>{"use strict";var PE=sr();Fc.exports=PE&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var jr=a((VU,Dc)=>{"use strict";var RE=U(),AE=N(),NE=B(),ME=aa(),jE=Object;Dc.exports=ME?function(e){return typeof e=="symbol"}:function(e){var r=RE("Symbol");return AE(r)&&NE(r.prototype,jE(e))}});var Ve=a((YU,Bc)=>{"use strict";var $E=String;Bc.exports=function(e){try{return $E(e)}catch{return"Object"}}});var F=a((JU,Gc)=>{"use strict";var LE=N(),FE=Ve(),DE=TypeError;Gc.exports=function(e){if(LE(e))return e;throw new DE(FE(e)+" is not a function")}});var qn=a((QU,Uc)=>{"use strict";var BE=F(),GE=or();Uc.exports=function(e,r){var t=e[r];return GE(t)?void 0:BE(t)}});var Hc=a((XU,Wc)=>{"use strict";var oa=D(),ua=N(),sa=$(),UE=TypeError;Wc.exports=function(e,r){var t,n;if(r==="string"&&ua(t=e.toString)&&!sa(n=oa(t,e))||ua(t=e.valueOf)&&!sa(n=oa(t,e))||r!=="string"&&ua(t=e.toString)&&!sa(n=oa(t,e)))return n;throw new UE("Can't convert object to primitive value")}});var Z=a((ZU,Kc)=>{"use strict";Kc.exports=!0});var Yc=a((e5,Vc)=>{"use strict";var zc=P(),WE=Object.defineProperty;Vc.exports=function(e,r){try{WE(zc,e,{value:r,configurable:!0,writable:!0})}catch{zc[e]=r}return r}});var pt=a((r5,Xc)=>{"use strict";var HE=Z(),KE=P(),zE=Yc(),Jc="__core-js_shared__",Qc=Xc.exports=KE[Jc]||zE(Jc,{});(Qc.versions||(Qc.versions=[])).push({version:"3.48.0",mode:HE?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var cr=a((t5,el)=>{"use strict";var Zc=pt();el.exports=function(e,r){return Zc[e]||(Zc[e]=r||{})}});var re=a((n5,rl)=>{"use strict";var VE=ur(),YE=Object;rl.exports=function(e){return YE(VE(e))}});var W=a((i5,tl)=>{"use strict";var JE=A(),QE=re(),XE=JE({}.hasOwnProperty);tl.exports=Object.hasOwn||function(r,t){return XE(QE(r),t)}});var $r=a((a5,nl)=>{"use strict";var ZE=A(),e0=0,r0=Math.random(),t0=ZE(1.1.toString);nl.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+t0(++e0+r0,36)}});var R=a((o5,al)=>{"use strict";var n0=P(),i0=cr(),il=W(),a0=$r(),o0=sr(),u0=aa(),Lr=n0.Symbol,ca=i0("wks"),s0=u0?Lr.for||Lr:Lr&&Lr.withoutSetter||a0;al.exports=function(e){return il(ca,e)||(ca[e]=o0&&il(Lr,e)?Lr[e]:s0("Symbol."+e)),ca[e]}});var cl=a((u5,sl)=>{"use strict";var c0=D(),ol=$(),ul=jr(),l0=qn(),f0=Hc(),p0=R(),v0=TypeError,d0=p0("toPrimitive");sl.exports=function(e,r){if(!ol(e)||ul(e))return e;var t=l0(e,d0),n;if(t){if(r===void 0&&(r="default"),n=c0(t,e,r),!ol(n)||ul(n))return n;throw new v0("Can't convert object to primitive value")}return r===void 0&&(r="number"),f0(e,r)}});var xn=a((s5,ll)=>{"use strict";var m0=cl(),h0=jr();ll.exports=function(e){var r=m0(e,"string");return h0(r)?r:r+""}});var Sn=a((c5,pl)=>{"use strict";var y0=P(),fl=$(),la=y0.document,g0=fl(la)&&fl(la.createElement);pl.exports=function(e){return g0?la.createElement(e):{}}});var fa=a((l5,vl)=>{"use strict";var b0=G(),q0=_(),x0=Sn();vl.exports=!b0&&!q0(function(){return Object.defineProperty(x0("div"),"a",{get:function(){return 7}}).a!==7})});var vt=a(ml=>{"use strict";var S0=G(),w0=D(),T0=ea(),O0=ze(),C0=ke(),E0=xn(),I0=W(),k0=fa(),dl=Object.getOwnPropertyDescriptor;ml.f=S0?dl:function(r,t){if(r=C0(r),t=E0(t),k0)try{return dl(r,t)}catch{}if(I0(r,t))return O0(!w0(T0.f,r,t),r[t])}});var pa=a((p5,hl)=>{"use strict";var _0=_(),P0=N(),R0=/#|\.prototype\./,dt=function(e,r){var t=N0[A0(e)];return t===j0?!0:t===M0?!1:P0(r)?_0(r):!!r},A0=dt.normalize=function(e){return String(e).replace(R0,".").toLowerCase()},N0=dt.data={},M0=dt.NATIVE="N",j0=dt.POLYFILL="P";hl.exports=dt});var V=a((v5,gl)=>{"use strict";var yl=ft(),$0=F(),L0=Rr(),F0=yl(yl.bind);gl.exports=function(e,r){return $0(e),r===void 0?e:L0?F0(e,r):function(){return e.apply(r,arguments)}}});var va=a((d5,bl)=>{"use strict";var D0=G(),B0=_();bl.exports=D0&&B0(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var Q=a((m5,ql)=>{"use strict";var G0=$(),U0=String,W0=TypeError;ql.exports=function(e){if(G0(e))return e;throw new W0(U0(e)+" is not an object")}});var te=a(Sl=>{"use strict";var H0=G(),K0=fa(),z0=va(),wn=Q(),xl=xn(),V0=TypeError,da=Object.defineProperty,Y0=Object.getOwnPropertyDescriptor,ma="enumerable",ha="configurable",ya="writable";Sl.f=H0?z0?function(r,t,n){if(wn(r),t=xl(t),wn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&ya in n&&!n[ya]){var i=Y0(r,t);i&&i[ya]&&(r[t]=n.value,n={configurable:ha in n?n[ha]:i[ha],enumerable:ma in n?n[ma]:i[ma],writable:!1})}return da(r,t,n)}:da:function(r,t,n){if(wn(r),t=xl(t),wn(n),K0)try{return da(r,t,n)}catch{}if("get"in n||"set"in n)throw new V0("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var Se=a((y5,wl)=>{"use strict";var J0=G(),Q0=te(),X0=ze();wl.exports=J0?function(e,r,t){return Q0.f(e,r,X0(1,t))}:function(e,r,t){return e[r]=t,e}});var x=a((g5,Ol)=>{"use strict";var mt=P(),Z0=Ar(),eI=ft(),rI=N(),tI=vt().f,nI=pa(),Fr=z(),iI=V(),Dr=Se(),Tl=W();pt();var aI=function(e){var r=function(t,n,i){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return Z0(e,this,arguments)};return r.prototype=e.prototype,r};Ol.exports=function(e,r){var t=e.target,n=e.global,i=e.stat,o=e.proto,u=n?mt:i?mt[t]:mt[t]&&mt[t].prototype,l=n?Fr:Fr[t]||Dr(Fr,t,{})[t],c=l.prototype,s,f,p,v,d,h,m,y,q;for(v in r)s=nI(n?v:t+(i?".":"#")+v,e.forced),f=!s&&u&&Tl(u,v),h=l[v],f&&(e.dontCallGetSet?(q=tI(u,v),m=q&&q.value):m=u[v]),d=f&&m?m:r[v],!(!s&&!o&&typeof h==typeof d)&&(e.bind&&f?y=iI(d,mt):e.wrap&&f?y=aI(d):o&&rI(d)?y=eI(d):y=d,(e.sham||d&&d.sham||h&&h.sham)&&Dr(y,"sham",!0),Dr(l,v,y),o&&(p=t+"Prototype",Tl(Fr,p)||Dr(Fr,p,{}),Dr(Fr[p],v,d),e.real&&c&&(s||!c[v])&&Dr(c,v,d)))}});var _e=a((b5,Cl)=>{"use strict";var oI=xe();Cl.exports=Array.isArray||function(r){return oI(r)==="Array"}});var Tn=a((q5,Il)=>{"use strict";var uI=R(),sI=uI("toStringTag"),El={};El[sI]="z";Il.exports=String(El)==="[object z]"});var ht=a((x5,kl)=>{"use strict";var cI=Tn(),lI=N(),On=xe(),fI=R(),pI=fI("toStringTag"),vI=Object,dI=On(function(){return arguments}())==="Arguments",mI=function(e,r){try{return e[r]}catch{}};kl.exports=cI?On:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=mI(r=vI(e),pI))=="string"?t:dI?On(r):(n=On(r))==="Object"&&lI(r.callee)?"Arguments":n}});var ba=a((S5,_l)=>{"use strict";var hI=A(),yI=N(),ga=pt(),gI=hI(Function.toString);yI(ga.inspectSource)||(ga.inspectSource=function(e){return gI(e)});_l.exports=ga.inspectSource});var gt=a((w5,Ml)=>{"use strict";var bI=A(),qI=_(),Pl=N(),xI=ht(),SI=U(),wI=ba(),Rl=function(){},Al=SI("Reflect","construct"),qa=/^\s*(?:class|function)\b/,TI=bI(qa.exec),OI=!qa.test(Rl),yt=function(r){if(!Pl(r))return!1;try{return Al(Rl,[],r),!0}catch{return!1}},Nl=function(r){if(!Pl(r))return!1;switch(xI(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return OI||!!TI(qa,wI(r))}catch{return!0}};Nl.sham=!0;Ml.exports=!Al||qI(function(){var e;return yt(yt.call)||!yt(Object)||!yt(function(){e=!0})||e})?Nl:yt});var $l=a((T5,jl)=>{"use strict";var CI=Math.ceil,EI=Math.floor;jl.exports=Math.trunc||function(r){var t=+r;return(t>0?EI:CI)(t)}});var Cn=a((O5,Ll)=>{"use strict";var II=$l();Ll.exports=function(e){var r=+e;return r!==r||r===0?0:II(r)}});var xa=a((C5,Fl)=>{"use strict";var kI=Cn(),_I=Math.max,PI=Math.min;Fl.exports=function(e,r){var t=kI(e);return t<0?_I(t+r,0):PI(t,r)}});var Sa=a((E5,Dl)=>{"use strict";var RI=Cn(),AI=Math.min;Dl.exports=function(e){var r=RI(e);return r>0?AI(r,9007199254740991):0}});var fe=a((I5,Bl)=>{"use strict";var NI=Sa();Bl.exports=function(e){return NI(e.length)}});var Br=a((k5,Gl)=>{"use strict";var MI=G(),jI=te(),$I=ze();Gl.exports=function(e,r,t){MI?jI.f(e,r,$I(0,t)):e[r]=t}});var Gr=a((_5,Ul)=>{"use strict";var LI=G(),FI=_e(),DI=TypeError,BI=Object.getOwnPropertyDescriptor,GI=LI&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();Ul.exports=GI?function(e,r){if(FI(e)&&!BI(e,"length").writable)throw new DI("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var bt=a((P5,Wl)=>{"use strict";var UI=_(),WI=R(),HI=Mr(),KI=WI("species");Wl.exports=function(e){return HI>=51||!UI(function(){var r=[],t=r.constructor={};return t[KI]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var lr=a((R5,Hl)=>{"use strict";var zI=A();Hl.exports=zI([].slice)});var Vl=a(()=>{"use strict";var VI=x(),Kl=_e(),YI=gt(),JI=$(),zl=xa(),QI=fe(),XI=ke(),ZI=Br(),ek=Gr(),rk=R(),tk=bt(),nk=lr(),ik=tk("slice"),ak=rk("species"),wa=Array,ok=Math.max;VI({target:"Array",proto:!0,forced:!ik},{slice:function(r,t){var n=XI(this),i=QI(n),o=zl(r,i),u=zl(t===void 0?i:t,i),l,c,s;if(Kl(n)&&(l=n.constructor,YI(l)&&(l===wa||Kl(l.prototype))?l=void 0:JI(l)&&(l=l[ak],l===null&&(l=void 0)),l===wa||l===void 0))return nk(n,o,u);for(c=new(l===void 0?wa:l)(ok(u-o,0)),s=0;o<u;o++,s++)o in n&&ZI(c,s,n[o]);return ek(c,s),c}})});var oe=a((M5,Yl)=>{"use strict";var uk=P(),sk=z();Yl.exports=function(e,r){var t=sk[e+"Prototype"],n=t&&t[r];if(n)return n;var i=uk[e],o=i&&i.prototype;return o&&o[r]}});var Ql=a((j5,Jl)=>{"use strict";Vl();var ck=oe();Jl.exports=ck("Array","slice")});var Zl=a(($5,Xl)=>{"use strict";var lk=B(),fk=Ql(),Ta=Array.prototype;Xl.exports=function(e){var r=e.slice;return e===Ta||lk(Ta,e)&&r===Ta.slice?fk:r}});var rf=a((L5,ef)=>{"use strict";var pk=Zl();ef.exports=pk});var nf=a((F5,tf)=>{"use strict";var vk=rf();tf.exports=vk});var of=a((D5,af)=>{"use strict";var dk=nf();af.exports=dk});var Oa=a((B5,uf)=>{"use strict";uf.exports=of()});var Ur=a((G5,sf)=>{sf.exports=Oa()});var Ye=a((U5,cf)=>{"use strict";var mk=ht(),hk=String;cf.exports=function(e){if(mk(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return hk(e)}});var vf=a((W5,pf)=>{"use strict";var Ca=A(),yk=Cn(),gk=Ye(),bk=ur(),qk=Ca("".charAt),lf=Ca("".charCodeAt),xk=Ca("".slice),ff=function(e){return function(r,t){var n=gk(bk(r)),i=yk(t),o=n.length,u,l;return i<0||i>=o?e?"":void 0:(u=lf(n,i),u<55296||u>56319||i+1===o||(l=lf(n,i+1))<56320||l>57343?e?qk(n,i):u:e?xk(n,i,i+2):(u-55296<<10)+(l-56320)+65536)}};pf.exports={codeAt:ff(!1),charAt:ff(!0)}});var hf=a((H5,mf)=>{"use strict";var Sk=P(),wk=N(),df=Sk.WeakMap;mf.exports=wk(df)&&/native code/.test(String(df))});var qt=a((K5,gf)=>{"use strict";var Tk=cr(),Ok=$r(),yf=Tk("keys");gf.exports=function(e){return yf[e]||(yf[e]=Ok(e))}});var Wr=a((z5,bf)=>{"use strict";bf.exports={}});var Je=a((V5,Sf)=>{"use strict";var Ck=hf(),xf=P(),Ek=$(),Ik=Se(),Ea=W(),Ia=pt(),kk=qt(),_k=Wr(),qf="Object already initialized",ka=xf.TypeError,Pk=xf.WeakMap,En,xt,In,Rk=function(e){return In(e)?xt(e):En(e,{})},Ak=function(e){return function(r){var t;if(!Ek(r)||(t=xt(r)).type!==e)throw new ka("Incompatible receiver, "+e+" required");return t}};Ck||Ia.state?(he=Ia.state||(Ia.state=new Pk),he.get=he.get,he.has=he.has,he.set=he.set,En=function(e,r){if(he.has(e))throw new ka(qf);return r.facade=e,he.set(e,r),r},xt=function(e){return he.get(e)||{}},In=function(e){return he.has(e)}):(fr=kk("state"),_k[fr]=!0,En=function(e,r){if(Ea(e,fr))throw new ka(qf);return r.facade=e,Ik(e,fr,r),r},xt=function(e){return Ea(e,fr)?e[fr]:{}},In=function(e){return Ea(e,fr)});var he,fr;Sf.exports={set:En,get:xt,has:In,enforce:Rk,getterFor:Ak}});var Of=a((Y5,Tf)=>{"use strict";var _a=G(),Nk=W(),wf=Function.prototype,Mk=_a&&Object.getOwnPropertyDescriptor,Pa=Nk(wf,"name"),jk=Pa&&function(){}.name==="something",$k=Pa&&(!_a||_a&&Mk(wf,"name").configurable);Tf.exports={EXISTS:Pa,PROPER:jk,CONFIGURABLE:$k}});var Ra=a((J5,Ef)=>{"use strict";var Lk=ke(),Fk=xa(),Dk=fe(),Cf=function(e){return function(r,t,n){var i=Lk(r),o=Dk(i);if(o===0)return!e&&-1;var u=Fk(n,o),l;if(e&&t!==t){for(;o>u;)if(l=i[u++],l!==l)return!0}else for(;o>u;u++)if((e||u in i)&&i[u]===t)return e||u||0;return!e&&-1}};Ef.exports={includes:Cf(!0),indexOf:Cf(!1)}});var Na=a((Q5,kf)=>{"use strict";var Bk=A(),Aa=W(),Gk=ke(),Uk=Ra().indexOf,Wk=Wr(),If=Bk([].push);kf.exports=function(e,r){var t=Gk(e),n=0,i=[],o;for(o in t)!Aa(Wk,o)&&Aa(t,o)&&If(i,o);for(;r.length>n;)Aa(t,o=r[n++])&&(~Uk(i,o)||If(i,o));return i}});var kn=a((X5,_f)=>{"use strict";_f.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var _n=a((Z5,Pf)=>{"use strict";var Hk=Na(),Kk=kn();Pf.exports=Object.keys||function(r){return Hk(r,Kk)}});var Ma=a(Rf=>{"use strict";var zk=G(),Vk=va(),Yk=te(),Jk=Q(),Qk=ke(),Xk=_n();Rf.f=zk&&!Vk?Object.defineProperties:function(r,t){Jk(r);for(var n=Qk(t),i=Xk(t),o=i.length,u=0,l;o>u;)Yk.f(r,l=i[u++],n[l]);return r}});var ja=a((rW,Af)=>{"use strict";var Zk=U();Af.exports=Zk("document","documentElement")});var Qe=a((tW,Df)=>{"use strict";var e1=Q(),r1=Ma(),Nf=kn(),t1=Wr(),n1=ja(),i1=Sn(),a1=qt(),Mf=">",jf="<",La="prototype",Fa="script",Lf=a1("IE_PROTO"),$a=function(){},Ff=function(e){return jf+Fa+Mf+e+jf+"/"+Fa+Mf},$f=function(e){e.write(Ff("")),e.close();var r=e.parentWindow.Object;return e=null,r},o1=function(){var e=i1("iframe"),r="java"+Fa+":",t;return e.style.display="none",n1.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(Ff("document.F=Object")),t.close(),t.F},Pn,Rn=function(){try{Pn=new ActiveXObject("htmlfile")}catch{}Rn=typeof document<"u"?document.domain&&Pn?$f(Pn):o1():$f(Pn);for(var e=Nf.length;e--;)delete Rn[La][Nf[e]];return Rn()};t1[Lf]=!0;Df.exports=Object.create||function(r,t){var n;return r!==null?($a[La]=e1(r),n=new $a,$a[La]=null,n[Lf]=r):n=Rn(),t===void 0?n:r1.f(n,t)}});var Da=a((nW,Bf)=>{"use strict";var u1=_();Bf.exports=!u1(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var St=a((iW,Uf)=>{"use strict";var s1=W(),c1=N(),l1=re(),f1=qt(),p1=Da(),Gf=f1("IE_PROTO"),Ba=Object,v1=Ba.prototype;Uf.exports=p1?Ba.getPrototypeOf:function(e){var r=l1(e);if(s1(r,Gf))return r[Gf];var t=r.constructor;return c1(t)&&r instanceof t?t.prototype:r instanceof Ba?v1:null}});var Pe=a((aW,Wf)=>{"use strict";var d1=Se();Wf.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:d1(e,r,t),e}});var Ha=a((oW,zf)=>{"use strict";var m1=_(),h1=N(),y1=$(),g1=Qe(),Hf=St(),b1=Pe(),q1=R(),x1=Z(),Wa=q1("iterator"),Kf=!1,Re,Ga,Ua;[].keys&&(Ua=[].keys(),"next"in Ua?(Ga=Hf(Hf(Ua)),Ga!==Object.prototype&&(Re=Ga)):Kf=!0);var S1=!y1(Re)||m1(function(){var e={};return Re[Wa].call(e)!==e});S1?Re={}:x1&&(Re=g1(Re));h1(Re[Wa])||b1(Re,Wa,function(){return this});zf.exports={IteratorPrototype:Re,BUGGY_SAFARI_ITERATORS:Kf}});var Yf=a((uW,Vf)=>{"use strict";var w1=Tn(),T1=ht();Vf.exports=w1?{}.toString:function(){return"[object "+T1(this)+"]"}});var Ae=a((sW,Qf)=>{"use strict";var O1=Tn(),C1=te().f,E1=Se(),I1=W(),k1=Yf(),_1=R(),Jf=_1("toStringTag");Qf.exports=function(e,r,t,n){var i=t?e:e&&e.prototype;i&&(I1(i,Jf)||C1(i,Jf,{configurable:!0,value:r}),n&&!O1&&E1(i,"toString",k1))}});var pr=a((cW,Xf)=>{"use strict";Xf.exports={}});var ep=a((lW,Zf)=>{"use strict";var P1=Ha().IteratorPrototype,R1=Qe(),A1=ze(),N1=Ae(),M1=pr(),j1=function(){return this};Zf.exports=function(e,r,t,n){var i=r+" Iterator";return e.prototype=R1(P1,{next:A1(+!n,t)}),N1(e,i,!1,!0),M1[i]=j1,e}});var tp=a((fW,rp)=>{"use strict";var $1=A(),L1=F();rp.exports=function(e,r,t){try{return $1(L1(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var ip=a((pW,np)=>{"use strict";var F1=$();np.exports=function(e){return F1(e)||e===null}});var op=a((vW,ap)=>{"use strict";var D1=ip(),B1=String,G1=TypeError;ap.exports=function(e){if(D1(e))return e;throw new G1("Can't set "+B1(e)+" as a prototype")}});var wt=a((dW,up)=>{"use strict";var U1=tp(),W1=$(),H1=ur(),K1=op();up.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=U1(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(i,o){return H1(i),K1(o),W1(i)&&(e?t(i,o):i.__proto__=o),i}}():void 0)});var Mn=a((mW,yp)=>{"use strict";var z1=x(),V1=D(),An=Z(),mp=Of(),Y1=N(),J1=ep(),sp=St(),cp=wt(),Q1=Ae(),X1=Se(),Ka=Pe(),Z1=R(),lp=pr(),hp=Ha(),e_=mp.PROPER,r_=mp.CONFIGURABLE,fp=hp.IteratorPrototype,Nn=hp.BUGGY_SAFARI_ITERATORS,Tt=Z1("iterator"),pp="keys",Ot="values",vp="entries",dp=function(){return this};yp.exports=function(e,r,t,n,i,o,u){J1(t,r,n);var l=function(q){if(q===i&&v)return v;if(!Nn&&q&&q in f)return f[q];switch(q){case pp:return function(){return new t(this,q)};case Ot:return function(){return new t(this,q)};case vp:return function(){return new t(this,q)}}return function(){return new t(this)}},c=r+" Iterator",s=!1,f=e.prototype,p=f[Tt]||f["@@iterator"]||i&&f[i],v=!Nn&&p||l(i),d=r==="Array"&&f.entries||p,h,m,y;if(d&&(h=sp(d.call(new e)),h!==Object.prototype&&h.next&&(!An&&sp(h)!==fp&&(cp?cp(h,fp):Y1(h[Tt])||Ka(h,Tt,dp)),Q1(h,c,!0,!0),An&&(lp[c]=dp))),e_&&i===Ot&&p&&p.name!==Ot&&(!An&&r_?X1(f,"name",Ot):(s=!0,v=function(){return V1(p,this)})),i)if(m={values:l(Ot),keys:o?v:l(pp),entries:l(vp)},u)for(y in m)(Nn||s||!(y in f))&&Ka(f,y,m[y]);else z1({target:r,proto:!0,forced:Nn||s},m);return(!An||u)&&f[Tt]!==v&&Ka(f,Tt,v,{name:i}),lp[r]=v,m}});var jn=a((hW,gp)=>{"use strict";gp.exports=function(e,r){return{value:e,done:r}}});var vr=a(()=>{"use strict";var t_=vf().charAt,n_=Ye(),qp=Je(),i_=Mn(),bp=jn(),xp="String Iterator",a_=qp.set,o_=qp.getterFor(xp);i_(String,"String",function(e){a_(this,{type:xp,string:n_(e),index:0})},function(){var r=o_(this),t=r.string,n=r.index,i;return n>=t.length?bp(void 0,!0):(i=t_(t,n),r.index+=i.length,bp(i,!1))})});var za=a((bW,wp)=>{"use strict";var u_=D(),Sp=Q(),s_=qn();wp.exports=function(e,r,t){var n,i;Sp(e);try{if(n=s_(e,"return"),!n){if(r==="throw")throw t;return t}n=u_(n,e)}catch(o){i=!0,n=o}if(r==="throw")throw t;if(i)throw n;return Sp(n),t}});var Op=a((qW,Tp)=>{"use strict";var c_=Q(),l_=za();Tp.exports=function(e,r,t,n){try{return n?r(c_(t)[0],t[1]):r(t)}catch(i){l_(e,"throw",i)}}});var Va=a((xW,Cp)=>{"use strict";var f_=R(),p_=pr(),v_=f_("iterator"),d_=Array.prototype;Cp.exports=function(e){return e!==void 0&&(p_.Array===e||d_[v_]===e)}});var Ct=a((SW,Ip)=>{"use strict";var m_=ht(),Ep=qn(),h_=or(),y_=pr(),g_=R(),b_=g_("iterator");Ip.exports=function(e){if(!h_(e))return Ep(e,b_)||Ep(e,"@@iterator")||y_[m_(e)]}});var $n=a((wW,kp)=>{"use strict";var q_=D(),x_=F(),S_=Q(),w_=Ve(),T_=Ct(),O_=TypeError;kp.exports=function(e,r){var t=arguments.length<2?T_(e):r;if(x_(t))return S_(q_(t,e));throw new O_(w_(e)+" is not iterable")}});var Ap=a((TW,Rp)=>{"use strict";var C_=V(),E_=D(),I_=re(),k_=Op(),__=Va(),P_=gt(),R_=fe(),_p=Br(),A_=Gr(),N_=$n(),M_=Ct(),Pp=Array;Rp.exports=function(r){var t=I_(r),n=P_(this),i=arguments.length,o=i>1?arguments[1]:void 0,u=o!==void 0;u&&(o=C_(o,i>2?arguments[2]:void 0));var l=M_(t),c=0,s,f,p,v,d,h;if(l&&!(this===Pp&&__(l)))for(f=n?new this:[],v=N_(t,l),d=v.next;!(p=E_(d,v)).done;c++)h=u?k_(v,o,[p.value,c],!0):p.value,_p(f,c,h);else for(s=R_(t),f=n?new this(s):Pp(s);s>c;c++)h=u?o(t[c],c):t[c],_p(f,c,h);return A_(f,c),f}});var Ja=a((OW,$p)=>{"use strict";var j_=R(),Mp=j_("iterator"),jp=!1;try{Np=0,Ya={next:function(){return{done:!!Np++}},return:function(){jp=!0}},Ya[Mp]=function(){return this},Array.from(Ya,function(){throw 2})}catch{}var Np,Ya;$p.exports=function(e,r){try{if(!r&&!jp)return!1}catch{return!1}var t=!1;try{var n={};n[Mp]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var Lp=a(()=>{"use strict";var $_=x(),L_=Ap(),F_=Ja(),D_=!F_(function(e){Array.from(e)});$_({target:"Array",stat:!0,forced:D_},{from:L_})});var Dp=a((IW,Fp)=>{"use strict";vr();Lp();var B_=z();Fp.exports=B_.Array.from});var Gp=a((kW,Bp)=>{"use strict";var G_=Dp();Bp.exports=G_});var Wp=a((_W,Up)=>{"use strict";var U_=Gp();Up.exports=U_});var Kp=a((PW,Hp)=>{"use strict";var W_=Wp();Hp.exports=W_});var Qa=a((RW,zp)=>{"use strict";zp.exports=Kp()});var Ln=a((AW,Vp)=>{Vp.exports=Qa()});var Et=a((NW,Yp)=>{"use strict";var H_=TypeError,K_=9007199254740991;Yp.exports=function(e){if(e>K_)throw H_("Maximum allowed index exceeded");return e}});var Zp=a((MW,Xp)=>{"use strict";var Jp=_e(),z_=gt(),V_=$(),Y_=R(),J_=Y_("species"),Qp=Array;Xp.exports=function(e){var r;return Jp(e)&&(r=e.constructor,z_(r)&&(r===Qp||Jp(r.prototype))?r=void 0:V_(r)&&(r=r[J_],r===null&&(r=void 0))),r===void 0?Qp:r}});var Fn=a((jW,ev)=>{"use strict";var Q_=Zp();ev.exports=function(e,r){return new(Q_(e))(r===0?0:r)}});var Xa=a(()=>{"use strict";var X_=x(),Z_=_(),eP=_e(),rP=$(),tP=re(),nP=fe(),rv=Et(),tv=Br(),iP=Gr(),aP=Fn(),oP=bt(),uP=R(),sP=Mr(),nv=uP("isConcatSpreadable"),cP=sP>=51||!Z_(function(){var e=[];return e[nv]=!1,e.concat()[0]!==e}),lP=function(e){if(!rP(e))return!1;var r=e[nv];return r!==void 0?!!r:eP(e)},fP=!cP||!oP("concat");X_({target:"Array",proto:!0,arity:1,forced:fP},{concat:function(r){var t=tP(this),n=aP(t,0),i=0,o,u,l,c,s;for(o=-1,l=arguments.length;o<l;o++)if(s=o===-1?t:arguments[o],lP(s))for(c=nP(s),rv(i+c),u=0;u<c;u++,i++)u in s&&tv(n,i,s[u]);else rv(i+1),tv(n,i++,s);return iP(n,i),n}})});var It=a(()=>{});var kt=a(iv=>{"use strict";var pP=Na(),vP=kn(),dP=vP.concat("length","prototype");iv.f=Object.getOwnPropertyNames||function(r){return pP(r,dP)}});var Za=a((GW,uv)=>{"use strict";var mP=xe(),hP=ke(),av=kt().f,yP=lr(),ov=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],gP=function(e){try{return av(e)}catch{return yP(ov)}};uv.exports.f=function(r){return ov&&mP(r)==="Window"?gP(r):av(hP(r))}});var Dn=a(sv=>{"use strict";sv.f=Object.getOwnPropertySymbols});var Bn=a((WW,cv)=>{"use strict";var bP=te();cv.exports=function(e,r,t){return bP.f(e,r,t)}});var Hr=a(lv=>{"use strict";var qP=R();lv.f=qP});var M=a((KW,pv)=>{"use strict";var fv=z(),xP=W(),SP=Hr(),wP=te().f;pv.exports=function(e){var r=fv.Symbol||(fv.Symbol={});xP(r,e)||wP(r,e,{value:SP.f(e)})}});var eo=a((zW,vv)=>{"use strict";var TP=D(),OP=U(),CP=R(),EP=Pe();vv.exports=function(){var e=OP("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=CP("toPrimitive");r&&!r[n]&&EP(r,n,function(i){return TP(t,this)},{arity:1})}});var _t=a((VW,mv)=>{"use strict";var IP=V(),kP=gn(),_P=re(),PP=fe(),dv=Fn(),ro=Br(),Xe=function(e){var r=e===1,t=e===2,n=e===3,i=e===4,o=e===6,u=e===7,l=e===5||o;return function(c,s,f){for(var p=_P(c),v=kP(p),d=PP(v),h=IP(s,f),m=0,y=0,q=r?dv(c,d):t||u?dv(c,0):void 0,b,I;d>m;m++)if((l||m in v)&&(b=v[m],I=h(b,m,p),e))if(r)ro(q,m,I);else if(I)switch(e){case 3:return!0;case 5:return b;case 6:return m;case 2:ro(q,y++,b)}else switch(e){case 4:return!1;case 7:ro(q,y++,b)}return o?-1:n||i?i:q}};mv.exports={forEach:Xe(0),map:Xe(1),filter:Xe(2),some:Xe(3),every:Xe(4),find:Xe(5),findIndex:Xe(6),filterReject:Xe(7)}});var Rv=a(()=>{"use strict";var Gn=x(),At=P(),lo=D(),RP=A(),AP=Z(),Kr=G(),zr=sr(),NP=_(),H=W(),MP=B(),ao=Q(),Un=ke(),fo=xn(),jP=Ye(),oo=ze(),Vr=Qe(),gv=_n(),$P=kt(),bv=Za(),LP=Dn(),qv=vt(),xv=te(),FP=Ma(),Sv=ea(),to=Pe(),DP=Bn(),po=cr(),BP=qt(),wv=Wr(),hv=$r(),GP=R(),UP=Hr(),WP=M(),HP=eo(),KP=Ae(),Tv=Je(),Wn=_t().forEach,ne=BP("hidden"),Hn="Symbol",Rt="prototype",zP=Tv.set,yv=Tv.getterFor(Hn),pe=Object[Rt],dr=At.Symbol,Pt=dr&&dr[Rt],VP=At.RangeError,YP=At.TypeError,no=At.QObject,Ov=qv.f,mr=xv.f,Cv=bv.f,JP=Sv.f,Ev=RP([].push),Ne=po("symbols"),Nt=po("op-symbols"),QP=po("wks"),uo=!no||!no[Rt]||!no[Rt].findChild,Iv=function(e,r,t){var n=Ov(pe,r);n&&delete pe[r],mr(e,r,t),n&&e!==pe&&mr(pe,r,n)},so=Kr&&NP(function(){return Vr(mr({},"a",{get:function(){return mr(this,"a",{value:7}).a}})).a!==7})?Iv:mr,io=function(e,r){var t=Ne[e]=Vr(Pt);return zP(t,{type:Hn,tag:e,description:r}),Kr||(t.description=r),t},Kn=function(r,t,n){r===pe&&Kn(Nt,t,n),ao(r);var i=fo(t);return ao(n),H(Ne,i)?(n.enumerable?(H(r,ne)&&r[ne][i]&&(r[ne][i]=!1),n=Vr(n,{enumerable:oo(0,!1)})):(H(r,ne)||mr(r,ne,oo(1,Vr(null))),r[ne][i]=!0),so(r,i,n)):mr(r,i,n)},vo=function(r,t){ao(r);var n=Un(t),i=gv(n).concat(Pv(n));return Wn(i,function(o){(!Kr||lo(co,n,o))&&Kn(r,o,n[o])}),r},XP=function(r,t){return t===void 0?Vr(r):vo(Vr(r),t)},co=function(r){var t=fo(r),n=lo(JP,this,t);return this===pe&&H(Ne,t)&&!H(Nt,t)?!1:n||!H(this,t)||!H(Ne,t)||H(this,ne)&&this[ne][t]?n:!0},kv=function(r,t){var n=Un(r),i=fo(t);if(!(n===pe&&H(Ne,i)&&!H(Nt,i))){var o=Ov(n,i);return o&&H(Ne,i)&&!(H(n,ne)&&n[ne][i])&&(o.enumerable=!0),o}},_v=function(r){var t=Cv(Un(r)),n=[];return Wn(t,function(i){!H(Ne,i)&&!H(wv,i)&&Ev(n,i)}),n},Pv=function(e){var r=e===pe,t=Cv(r?Nt:Un(e)),n=[];return Wn(t,function(i){H(Ne,i)&&(!r||H(pe,i))&&Ev(n,Ne[i])}),n};zr||(dr=function(){if(MP(Pt,this))throw new YP("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:jP(arguments[0]),t=hv(r),n=function(i){var o=this===void 0?At:this;o===pe&&lo(n,Nt,i),H(o,ne)&&H(o[ne],t)&&(o[ne][t]=!1);var u=oo(1,i);try{so(o,t,u)}catch(l){if(!(l instanceof VP))throw l;Iv(o,t,u)}};return Kr&&uo&&so(pe,t,{configurable:!0,set:n}),io(t,r)},Pt=dr[Rt],to(Pt,"toString",function(){return yv(this).tag}),to(dr,"withoutSetter",function(e){return io(hv(e),e)}),Sv.f=co,xv.f=Kn,FP.f=vo,qv.f=kv,$P.f=bv.f=_v,LP.f=Pv,UP.f=function(e){return io(GP(e),e)},Kr&&(DP(Pt,"description",{configurable:!0,get:function(){return yv(this).description}}),AP||to(pe,"propertyIsEnumerable",co,{unsafe:!0})));Gn({global:!0,constructor:!0,wrap:!0,forced:!zr,sham:!zr},{Symbol:dr});Wn(gv(QP),function(e){WP(e)});Gn({target:Hn,stat:!0,forced:!zr},{useSetter:function(){uo=!0},useSimple:function(){uo=!1}});Gn({target:"Object",stat:!0,forced:!zr,sham:!Kr},{create:XP,defineProperty:Kn,defineProperties:vo,getOwnPropertyDescriptor:kv});Gn({target:"Object",stat:!0,forced:!zr},{getOwnPropertyNames:_v});HP();KP(dr,Hn);wv[ne]=!0});var mo=a((QW,Av)=>{"use strict";var ZP=sr();Av.exports=ZP&&!!Symbol.for&&!!Symbol.keyFor});var Mv=a(()=>{"use strict";var eR=x(),rR=U(),tR=W(),nR=Ye(),Nv=cr(),iR=mo(),ho=Nv("string-to-symbol-registry"),aR=Nv("symbol-to-string-registry");eR({target:"Symbol",stat:!0,forced:!iR},{for:function(e){var r=nR(e);if(tR(ho,r))return ho[r];var t=rR("Symbol")(r);return ho[r]=t,aR[t]=r,t}})});var $v=a(()=>{"use strict";var oR=x(),uR=W(),sR=jr(),cR=Ve(),lR=cr(),fR=mo(),jv=lR("symbol-to-string-registry");oR({target:"Symbol",stat:!0,forced:!fR},{keyFor:function(r){if(!sR(r))throw new TypeError(cR(r)+" is not a symbol");if(uR(jv,r))return jv[r]}})});var Fv=a((t8,Lv)=>{"use strict";var pR=$(),vR=Je().get;Lv.exports=function(r){if(!pR(r))return!1;var t=vR(r);return!!t&&t.type==="RawJSON"}});var Wv=a((n8,Uv)=>{"use strict";var yo=A(),dR=W(),zn=SyntaxError,mR=parseInt,hR=String.fromCharCode,yR=yo("".charAt),Dv=yo("".slice),Bv=yo(/./.exec),Gv={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},gR=/^[\da-f]{4}$/i,bR=/^[\u0000-\u001F]$/;Uv.exports=function(e,r){for(var t=!0,n="";r<e.length;){var i=yR(e,r);if(i==="\\"){var o=Dv(e,r,r+2);if(dR(Gv,o))n+=Gv[o],r+=2;else if(o==="\\u"){r+=2;var u=Dv(e,r,r+4);if(!Bv(gR,u))throw new zn("Bad Unicode escape at: "+r);n+=hR(mR(u,16)),r+=4}else throw new zn('Unknown escape sequence: "'+o+'"')}else if(i==='"'){t=!1,r++;break}else{if(Bv(bR,i))throw new zn("Bad control character in string literal at: "+r);n+=i,r++}}if(t)throw new zn("Unterminated string at: "+r);return{value:n,end:r}}});var Kv=a((i8,Hv)=>{"use strict";var qR=_();Hv.exports=!qR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var od=a(()=>{"use strict";var xR=x(),ed=U(),SR=Ar(),rd=D(),hr=A(),td=_(),zv=_e(),Yn=N(),wR=Fv(),Vv=jr(),Yv=xe(),TR=Ye(),OR=lr(),CR=Wv(),ER=$r(),IR=sr(),go=Kv(),nd=String,Ze=ed("JSON","stringify"),Vn=hr(/./.exec),qo=hr("".charAt),kR=hr("".charCodeAt),_R=hr("".replace),bo=hr("".slice),xo=hr([].push),PR=hr(1.1.toString),RR=/[\uD800-\uDFFF]/g,Jv=/^[\uD800-\uDBFF]$/,Qv=/^[\uDC00-\uDFFF]$/,So=ER(),Xv=So.length,id=!IR||td(function(){var e=ed("Symbol")("stringify detection");return Ze([e])!=="[null]"||Ze({a:e})!=="{}"||Ze(Object(e))!=="{}"}),Zv=td(function(){return Ze("\uDF06\uD834")!=='"\\udf06\\ud834"'||Ze("\uDEAD")!=='"\\udead"'}),AR=id?function(e,r){var t=OR(arguments),n=ad(r);if(!(!Yn(n)&&(e===void 0||Vv(e))))return t[1]=function(i,o){if(Yn(n)&&(o=rd(n,this,nd(i),o)),!Vv(o))return o},SR(Ze,null,t)}:Ze,NR=function(e,r,t){var n=qo(t,r-1),i=qo(t,r+1);return Vn(Jv,e)&&!Vn(Qv,i)||Vn(Qv,e)&&!Vn(Jv,n)?"\\u"+PR(kR(e,0),16):e},ad=function(e){if(Yn(e))return e;if(zv(e)){for(var r=e.length,t=[],n=0;n<r;n++){var i=e[n];typeof i=="string"?xo(t,i):(typeof i=="number"||Yv(i)==="Number"||Yv(i)==="String")&&xo(t,TR(i))}var o=t.length,u=!0;return function(l,c){if(u)return u=!1,c;if(zv(this))return c;for(var s=0;s<o;s++)if(t[s]===l)return c}}};Ze&&xR({target:"JSON",stat:!0,arity:3,forced:id||Zv||!go},{stringify:function(r,t,n){var i=ad(t),o=[],u=AR(r,function(d,h){var m=Yn(i)?rd(i,this,nd(d),h):h;return!go&&wR(m)?So+(xo(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(Zv&&(u=_R(u,RR,NR)),go))return u;for(var l="",c=u.length,s=0;s<c;s++){var f=qo(u,s);if(f==='"'){var p=CR(u,++s).end-1,v=bo(u,s,p);l+=bo(v,0,Xv)===So?o[bo(v,Xv)]:'"'+v+'"',s=p}else l+=f}return l}})});var sd=a(()=>{"use strict";var MR=x(),jR=sr(),$R=_(),ud=Dn(),LR=re(),FR=!jR||$R(function(){ud.f(1)});MR({target:"Object",stat:!0,forced:FR},{getOwnPropertySymbols:function(r){var t=ud.f;return t?t(LR(r)):[]}})});var cd=a(()=>{"use strict";Rv();Mv();$v();od();sd()});var wo=a(()=>{"use strict";var DR=M();DR("asyncDispose")});var To=a(()=>{"use strict";var BR=M();BR("asyncIterator")});var ld=a(()=>{});var Oo=a(()=>{"use strict";var GR=M();GR("dispose")});var fd=a(()=>{"use strict";var UR=M();UR("hasInstance")});var pd=a(()=>{"use strict";var WR=M();WR("isConcatSpreadable")});var Co=a(()=>{"use strict";var HR=M();HR("iterator")});var vd=a(()=>{"use strict";var KR=M();KR("match")});var dd=a(()=>{"use strict";var zR=M();zR("matchAll")});var md=a(()=>{"use strict";var VR=M();VR("replace")});var hd=a(()=>{"use strict";var YR=M();YR("search")});var yd=a(()=>{"use strict";var JR=M();JR("species")});var gd=a(()=>{"use strict";var QR=M();QR("split")});var Eo=a(()=>{"use strict";var XR=M(),ZR=eo();XR("toPrimitive");ZR()});var bd=a(()=>{"use strict";var eA=U(),rA=M(),tA=Ae();rA("toStringTag");tA(eA("Symbol"),"Symbol")});var qd=a(()=>{"use strict";var nA=M();nA("unscopables")});var xd=a(()=>{"use strict";var iA=P(),aA=Ae();aA(iA.JSON,"JSON",!0)});var Sd=a(()=>{});var wd=a(()=>{});var Od=a((Y8,Td)=>{"use strict";Xa();It();cd();wo();To();ld();Oo();fd();pd();Co();vd();dd();md();hd();yd();gd();Eo();bd();qd();xd();Sd();wd();var oA=z();Td.exports=oA.Symbol});var Io=a((J8,Cd)=>{"use strict";Cd.exports=function(){}});var yr=a((Q8,Pd)=>{"use strict";var uA=ke(),ko=Io(),Ed=pr(),kd=Je(),sA=te().f,cA=Mn(),Jn=jn(),lA=Z(),fA=G(),_d="Array Iterator",pA=kd.set,vA=kd.getterFor(_d);Pd.exports=cA(Array,"Array",function(e,r){pA(this,{type:_d,target:uA(e),index:0,kind:r})},function(){var e=vA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,Jn(void 0,!0);switch(e.kind){case"keys":return Jn(t,!1);case"values":return Jn(r[t],!1)}return Jn([t,r[t]],!1)},"values");var Id=Ed.Arguments=Ed.Array;ko("keys");ko("values");ko("entries");if(!lA&&fA&&Id.name!=="values")try{sA(Id,"name",{value:"values"})}catch{}});var Ad=a((X8,Rd)=>{"use strict";Rd.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var gr=a(()=>{"use strict";yr();var dA=Ad(),mA=P(),hA=Ae(),Nd=pr();for(Qn in dA)hA(mA[Qn],Qn),Nd[Qn]=Nd.Array;var Qn});var jd=a((r6,Md)=>{"use strict";var yA=Od();gr();Md.exports=yA});var Fd=a(()=>{"use strict";var gA=R(),bA=te().f,$d=gA("metadata"),Ld=Function.prototype;Ld[$d]===void 0&&bA(Ld,$d,{value:null})});var Dd=a(()=>{"use strict";wo()});var Bd=a(()=>{"use strict";Oo()});var Gd=a(()=>{"use strict";var qA=M();qA("metadata")});var Wd=a((l6,Ud)=>{"use strict";var xA=jd();Fd();Dd();Bd();Gd();Ud.exports=xA});var Po=a((f6,Hd)=>{"use strict";var SA=U(),wA=A(),_o=SA("Symbol"),TA=_o.keyFor,OA=wA(_o.prototype.valueOf);Hd.exports=_o.isRegisteredSymbol||function(r){try{return TA(OA(r))!==void 0}catch{return!1}}});var Kd=a(()=>{"use strict";var CA=x(),EA=Po();CA({target:"Symbol",stat:!0},{isRegisteredSymbol:EA})});var No=a((d6,Xd)=>{"use strict";var IA=cr(),Jd=U(),kA=A(),_A=jr(),PA=R(),Zn=Jd("Symbol"),zd=Zn.isWellKnownSymbol,Qd=Jd("Object","getOwnPropertyNames"),RA=kA(Zn.prototype.valueOf),Vd=IA("wks");for(Xn=0,Ro=Qd(Zn),Yd=Ro.length;Xn<Yd;Xn++)try{Ao=Ro[Xn],_A(Zn[Ao])&&PA(Ao)}catch{}var Ao,Xn,Ro,Yd;Xd.exports=function(r){if(zd&&zd(r))return!0;try{for(var t=RA(r),n=0,i=Qd(Vd),o=i.length;n<o;n++)if(Vd[i[n]]==t)return!0}catch{}return!1}});var Zd=a(()=>{"use strict";var AA=x(),NA=No();AA({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:NA})});var em=a(()=>{"use strict";var MA=M();MA("customMatcher")});var rm=a(()=>{"use strict";var jA=M();jA("observable")});var tm=a(()=>{"use strict";var $A=x(),LA=Po();$A({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:LA})});var nm=a(()=>{"use strict";var FA=x(),DA=No();FA({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:DA})});var im=a(()=>{"use strict";var BA=M();BA("matcher")});var am=a(()=>{"use strict";var GA=M();GA("metadataKey")});var om=a(()=>{"use strict";var UA=M();UA("patternMatch")});var um=a(()=>{"use strict";var WA=M();WA("replaceAll")});var cm=a((A6,sm)=>{"use strict";var HA=Wd();Kd();Zd();em();rm();tm();nm();im();am();om();um();sm.exports=HA});var we=a((N6,lm)=>{"use strict";lm.exports=cm()});var ei=a((M6,fm)=>{fm.exports=we()});var vm=a((j6,pm)=>{"use strict";yr();vr();var KA=Ct();pm.exports=KA});var mm=a(($6,dm)=>{"use strict";var zA=vm();gr();dm.exports=zA});var ym=a((L6,hm)=>{"use strict";var VA=mm();hm.exports=VA});var bm=a((F6,gm)=>{"use strict";var YA=ym();gm.exports=YA});var Mo=a((D6,qm)=>{"use strict";qm.exports=bm()});var ri=a((B6,xm)=>{xm.exports=Mo()});var wm=a((G6,Sm)=>{"use strict";yr();vr();var JA=$n();Sm.exports=JA});var Om=a((U6,Tm)=>{"use strict";var QA=wm();gr();Tm.exports=QA});var Em=a((W6,Cm)=>{"use strict";var XA=Om();Cm.exports=XA});var km=a((H6,Im)=>{"use strict";var ZA=Em();Im.exports=ZA});var Pm=a((K6,_m)=>{"use strict";_m.exports=km()});var ti=a((z6,Rm)=>{Rm.exports=Pm()});var Nm=a((V6,Am)=>{"use strict";var eN=U(),rN=A(),tN=kt(),nN=Dn(),iN=Q(),aN=rN([].concat);Am.exports=eN("Reflect","ownKeys")||function(r){var t=tN.f(iN(r)),n=nN.f;return n?aN(t,n(r)):t}});var $m=a((Y6,jm)=>{"use strict";var Mm=W(),oN=Nm(),uN=vt(),sN=te();jm.exports=function(e,r,t){for(var n=oN(r),i=sN.f,o=uN.f,u=0;u<n.length;u++){var l=n[u];!Mm(e,l)&&!(t&&Mm(t,l))&&i(e,l,o(r,l))}}});var Fm=a((J6,Lm)=>{"use strict";var cN=$(),lN=Se();Lm.exports=function(e,r){cN(r)&&"cause"in r&&lN(e,"cause",r.cause)}});var Um=a((Q6,Gm)=>{"use strict";var fN=A(),Dm=Error,pN=fN("".replace),vN=function(e){return String(new Dm(e).stack)}("zxcasd"),Bm=/\n\s*at [^:]*:[^\n]*/,dN=Bm.test(vN);Gm.exports=function(e,r){if(dN&&typeof e=="string"&&!Dm.prepareStackTrace)for(;r--;)e=pN(e,Bm,"");return e}});var Hm=a((X6,Wm)=>{"use strict";var mN=_(),hN=ze();Wm.exports=!mN(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",hN(1,7)),e.stack!==7):!0})});var Vm=a((Z6,zm)=>{"use strict";var yN=Se(),gN=Um(),bN=Hm(),Km=Error.captureStackTrace;zm.exports=function(e,r,t,n){bN&&(Km?Km(e,r):yN(e,"stack",gN(t,n)))}});var ve=a((eH,Xm)=>{"use strict";var qN=V(),xN=D(),SN=Q(),wN=Ve(),TN=Va(),ON=fe(),Ym=B(),CN=$n(),EN=Ct(),Jm=za(),IN=TypeError,ni=function(e,r){this.stopped=e,this.result=r},Qm=ni.prototype;Xm.exports=function(e,r,t){var n=t&&t.that,i=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),l=!!(t&&t.INTERRUPTED),c=qN(r,n),s,f,p,v,d,h,m,y=function(b){return s&&Jm(s,"normal"),new ni(!0,b)},q=function(b){return i?(SN(b),l?c(b[0],b[1],y):c(b[0],b[1])):l?c(b,y):c(b)};if(o)s=e.iterator;else if(u)s=e;else{if(f=EN(e),!f)throw new IN(wN(e)+" is not iterable");if(TN(f)){for(p=0,v=ON(e);v>p;p++)if(d=q(e[p]),d&&Ym(Qm,d))return d;return new ni(!1)}s=CN(e,f)}for(h=o?e.next:s.next;!(m=xN(h,s)).done;){try{d=q(m.value)}catch(b){Jm(s,"throw",b)}if(typeof d=="object"&&d&&Ym(Qm,d))return d}return new ni(!1)}});var eh=a((rH,Zm)=>{"use strict";var kN=Ye();Zm.exports=function(e,r){return e===void 0?arguments.length<2?"":r:kN(e)}});var th=a(()=>{"use strict";var _N=x(),PN=B(),RN=St(),ii=wt(),AN=$m(),rh=Qe(),jo=Se(),$o=ze(),NN=Fm(),MN=Vm(),jN=ve(),$N=eh(),LN=R(),FN=LN("toStringTag"),ai=Error,DN=[].push,Yr=function(r,t){var n=PN(Lo,this),i;ii?i=ii(new ai,n?RN(this):Lo):(i=n?this:rh(Lo),jo(i,FN,"Error")),t!==void 0&&jo(i,"message",$N(t)),MN(i,Yr,i.stack,1),arguments.length>2&&NN(i,arguments[2]);var o=[];return jN(r,DN,{that:o}),jo(i,"errors",o),i};ii?ii(Yr,ai):AN(Yr,ai,{name:!0});var Lo=Yr.prototype=rh(ai.prototype,{constructor:$o(1,Yr),message:$o(1,""),name:$o(1,"AggregateError")});_N({global:!0,constructor:!0,arity:2},{AggregateError:Yr})});var Fo=a(()=>{"use strict";th()});var Do=a((oH,nh)=>{"use strict";var Mt=P(),BN=Nr(),GN=xe(),oi=function(e){return BN.slice(0,e.length)===e};nh.exports=function(){return oi("Bun/")?"BUN":oi("Cloudflare-Workers")?"CLOUDFLARE":oi("Deno/")?"DENO":oi("Node.js/")?"NODE":Mt.Bun&&typeof Bun.version=="string"?"BUN":Mt.Deno&&typeof Deno.version=="object"?"DENO":GN(Mt.process)==="process"?"NODE":Mt.window&&Mt.document?"BROWSER":"REST"}()});var jt=a((uH,ih)=>{"use strict";var UN=Do();ih.exports=UN==="NODE"});var Bo=a((sH,oh)=>{"use strict";var WN=U(),HN=Bn(),KN=R(),zN=G(),ah=KN("species");oh.exports=function(e){var r=WN(e);zN&&r&&!r[ah]&&HN(r,ah,{configurable:!0,get:function(){return this}})}});var ui=a((cH,uh)=>{"use strict";var VN=B(),YN=TypeError;uh.exports=function(e,r){if(VN(r,e))return e;throw new YN("Incorrect invocation")}});var Go=a((lH,sh)=>{"use strict";var JN=gt(),QN=Ve(),XN=TypeError;sh.exports=function(e){if(JN(e))return e;throw new XN(QN(e)+" is not a constructor")}});var Uo=a((fH,lh)=>{"use strict";var ch=Q(),ZN=Go(),e2=or(),r2=R(),t2=r2("species");lh.exports=function(e,r){var t=ch(e).constructor,n;return t===void 0||e2(n=ch(t)[t2])?r:ZN(n)}});var ph=a((pH,fh)=>{"use strict";var n2=TypeError;fh.exports=function(e,r){if(e<r)throw new n2("Not enough arguments");return e}});var Wo=a((vH,vh)=>{"use strict";var i2=Nr();vh.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(i2)});var Zo=a((dH,Sh)=>{"use strict";var ue=P(),a2=Ar(),o2=V(),dh=N(),u2=W(),xh=_(),mh=ja(),s2=lr(),hh=Sn(),c2=ph(),l2=Wo(),f2=jt(),Jo=ue.setImmediate,Qo=ue.clearImmediate,p2=ue.process,Ho=ue.Dispatch,v2=ue.Function,yh=ue.MessageChannel,d2=ue.String,Ko=0,$t={},gh="onreadystatechange",Lt,br,zo,Vo;xh(function(){Lt=ue.location});var Xo=function(e){if(u2($t,e)){var r=$t[e];delete $t[e],r()}},Yo=function(e){return function(){Xo(e)}},bh=function(e){Xo(e.data)},qh=function(e){ue.postMessage(d2(e),Lt.protocol+"//"+Lt.host)};(!Jo||!Qo)&&(Jo=function(r){c2(arguments.length,1);var t=dh(r)?r:v2(r),n=s2(arguments,1);return $t[++Ko]=function(){a2(t,void 0,n)},br(Ko),Ko},Qo=function(r){delete $t[r]},f2?br=function(e){p2.nextTick(Yo(e))}:Ho&&Ho.now?br=function(e){Ho.now(Yo(e))}:yh&&!l2?(zo=new yh,Vo=zo.port2,zo.port1.onmessage=bh,br=o2(Vo.postMessage,Vo)):ue.addEventListener&&dh(ue.postMessage)&&!ue.importScripts&&Lt&&Lt.protocol!=="file:"&&!xh(qh)?(br=qh,ue.addEventListener("message",bh,!1)):gh in hh("script")?br=function(e){mh.appendChild(hh("script"))[gh]=function(){mh.removeChild(this),Xo(e)}}:br=function(e){setTimeout(Yo(e),0)});Sh.exports={set:Jo,clear:Qo}});var Oh=a((mH,Th)=>{"use strict";var wh=P(),m2=G(),h2=Object.getOwnPropertyDescriptor;Th.exports=function(e){if(!m2)return wh[e];var r=h2(wh,e);return r&&r.value}});var eu=a((hH,Eh)=>{"use strict";var Ch=function(){this.head=null,this.tail=null};Ch.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Eh.exports=Ch});var kh=a((yH,Ih)=>{"use strict";var y2=Nr();Ih.exports=/ipad|iphone|ipod/i.test(y2)&&typeof Pebble<"u"});var Ph=a((gH,_h)=>{"use strict";var g2=Nr();_h.exports=/web0s(?!.*chrome)/i.test(g2)});var Lh=a((bH,$h)=>{"use strict";var Qr=P(),b2=Oh(),Rh=V(),ru=Zo().set,q2=eu(),x2=Wo(),S2=kh(),w2=Ph(),tu=jt(),Ah=Qr.MutationObserver||Qr.WebKitMutationObserver,Nh=Qr.document,Mh=Qr.process,si=Qr.Promise,au=b2("queueMicrotask"),Jr,nu,iu,ci,jh;au||(Ft=new q2,Dt=function(){var e,r;for(tu&&(e=Mh.domain)&&e.exit();r=Ft.get();)try{r()}catch(t){throw Ft.head&&Jr(),t}e&&e.enter()},!x2&&!tu&&!w2&&Ah&&Nh?(nu=!0,iu=Nh.createTextNode(""),new Ah(Dt).observe(iu,{characterData:!0}),Jr=function(){iu.data=nu=!nu}):!S2&&si&&si.resolve?(ci=si.resolve(void 0),ci.constructor=si,jh=Rh(ci.then,ci),Jr=function(){jh(Dt)}):tu?Jr=function(){Mh.nextTick(Dt)}:(ru=Rh(ru,Qr),Jr=function(){ru(Dt)}),au=function(e){Ft.head||Jr(),Ft.add(e)});var Ft,Dt;$h.exports=au});var Dh=a((qH,Fh)=>{"use strict";Fh.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var qr=a((xH,Bh)=>{"use strict";Bh.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var xr=a((SH,Gh)=>{"use strict";var T2=P();Gh.exports=T2.Promise});var Xr=a((wH,Kh)=>{"use strict";var O2=P(),Bt=xr(),C2=N(),E2=pa(),I2=ba(),k2=R(),Uh=Do(),_2=Z(),ou=Mr(),Wh=Bt&&Bt.prototype,P2=k2("species"),uu=!1,Hh=C2(O2.PromiseRejectionEvent),R2=E2("Promise",function(){var e=I2(Bt),r=e!==String(Bt);if(!r&&ou===66||_2&&!(Wh.catch&&Wh.finally))return!0;if(!ou||ou<51||!/native code/.test(e)){var t=new Bt(function(o){o(1)}),n=function(o){o(function(){},function(){})},i=t.constructor={};if(i[P2]=n,uu=t.then(function(){})instanceof n,!uu)return!0}return!r&&(Uh==="BROWSER"||Uh==="DENO")&&!Hh});Kh.exports={CONSTRUCTOR:R2,REJECTION_EVENT:Hh,SUBCLASSING:uu}});var Te=a((TH,Vh)=>{"use strict";var zh=F(),A2=TypeError,N2=function(e){var r,t;this.promise=new e(function(n,i){if(r!==void 0||t!==void 0)throw new A2("Bad Promise constructor");r=n,t=i}),this.resolve=zh(r),this.reject=zh(t)};Vh.exports.f=function(e){return new N2(e)}});var dy=a(()=>{"use strict";var M2=x(),j2=Z(),vi=jt(),er=P(),$2=z(),tt=D(),Yh=Pe(),Jh=wt(),L2=Ae(),F2=Bo(),D2=F(),pi=N(),B2=$(),G2=ui(),U2=Uo(),ry=Zo().set,pu=Lh(),W2=Dh(),H2=qr(),K2=eu(),ty=Je(),di=xr(),vu=Xr(),ny=Te(),mi="Promise",iy=vu.CONSTRUCTOR,z2=vu.REJECTION_EVENT,V2=vu.SUBCLASSING,su=ty.getterFor(mi),Y2=ty.set,Zr=di&&di.prototype,Sr=di,li=Zr,ay=er.TypeError,cu=er.document,du=er.process,lu=ny.f,J2=lu,Q2=!!(cu&&cu.createEvent&&er.dispatchEvent),oy="unhandledrejection",X2="rejectionhandled",Qh=0,uy=1,Z2=2,mu=1,sy=2,fi,Xh,cy,Zh,ly=function(e){var r;return B2(e)&&pi(r=e.then)?r:!1},fy=function(e,r){var t=r.value,n=r.state===uy,i=n?e.ok:e.fail,o=e.resolve,u=e.reject,l=e.domain,c,s,f;try{i?(n||(r.rejection===sy&&rM(r),r.rejection=mu),i===!0?c=t:(l&&l.enter(),c=i(t),l&&(l.exit(),f=!0)),c===e.promise?u(new ay("Promise-chain cycle")):(s=ly(c))?tt(s,c,o,u):o(c)):u(t)}catch(p){l&&!f&&l.exit(),u(p)}},py=function(e,r){e.notified||(e.notified=!0,pu(function(){for(var t=e.reactions,n;n=t.get();)fy(n,e);e.notified=!1,r&&!e.rejection&&eM(e)}))},vy=function(e,r,t){var n,i;Q2?(n=cu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),er.dispatchEvent(n)):n={promise:r,reason:t},!z2&&(i=er["on"+e])?i(n):e===oy&&W2("Unhandled promise rejection",t)},eM=function(e){tt(ry,er,function(){var r=e.facade,t=e.value,n=ey(e),i;if(n&&(i=H2(function(){vi?du.emit("unhandledRejection",t,r):vy(oy,r,t)}),e.rejection=vi||ey(e)?sy:mu,i.error))throw i.value})},ey=function(e){return e.rejection!==mu&&!e.parent},rM=function(e){tt(ry,er,function(){var r=e.facade;vi?du.emit("rejectionHandled",r):vy(X2,r,e.value)})},et=function(e,r,t){return function(n){e(r,n,t)}},rt=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=Z2,py(e,!0))},fu=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new ay("Promise can't be resolved itself");var n=ly(r);n?pu(function(){var i={done:!1};try{tt(n,r,et(fu,i,e),et(rt,i,e))}catch(o){rt(i,o,e)}}):(e.value=r,e.state=uy,py(e,!1))}catch(i){rt({done:!1},i,e)}}};if(iy&&(Sr=function(r){G2(this,li),D2(r),tt(fi,this);var t=su(this);try{r(et(fu,t),et(rt,t))}catch(n){rt(t,n)}},li=Sr.prototype,fi=function(r){Y2(this,{type:mi,done:!1,notified:!1,parent:!1,reactions:new K2,rejection:!1,state:Qh,value:null})},fi.prototype=Yh(li,"then",function(r,t){var n=su(this),i=lu(U2(this,Sr));return n.parent=!0,i.ok=pi(r)?r:!0,i.fail=pi(t)&&t,i.domain=vi?du.domain:void 0,n.state===Qh?n.reactions.add(i):pu(function(){fy(i,n)}),i.promise}),Xh=function(){var e=new fi,r=su(e);this.promise=e,this.resolve=et(fu,r),this.reject=et(rt,r)},ny.f=lu=function(e){return e===Sr||e===cy?new Xh(e):J2(e)},!j2&&pi(di)&&Zr!==Object.prototype)){Zh=Zr.then,V2||Yh(Zr,"then",function(r,t){var n=this;return new Sr(function(i,o){tt(Zh,n,i,o)}).then(r,t)},{unsafe:!0});try{delete Zr.constructor}catch{}Jh&&Jh(Zr,li)}M2({global:!0,constructor:!0,wrap:!0,forced:iy},{Promise:Sr});cy=$2.Promise;L2(Sr,mi,!1,!0);F2(mi)});var Gt=a((EH,my)=>{"use strict";var tM=xr(),nM=Ja(),iM=Xr().CONSTRUCTOR;my.exports=iM||!nM(function(e){tM.all(e).then(void 0,function(){})})});var hy=a(()=>{"use strict";var aM=x(),oM=D(),uM=F(),sM=Te(),cM=qr(),lM=ve(),fM=Gt();aM({target:"Promise",stat:!0,forced:fM},{all:function(r){var t=this,n=sM.f(t),i=n.resolve,o=n.reject,u=cM(function(){var l=uM(t.resolve),c=[],s=0,f=1;lM(r,function(p){var v=s++,d=!1;f++,oM(l,t,p).then(function(h){d||(d=!0,c[v]=h,--f||i(c))},o)}),--f||i(c)});return u.error&&o(u.value),n.promise}})});var gy=a(()=>{"use strict";var pM=x(),vM=Z(),dM=Xr().CONSTRUCTOR,yu=xr(),mM=U(),hM=N(),yM=Pe(),yy=yu&&yu.prototype;pM({target:"Promise",proto:!0,forced:dM,real:!0},{catch:function(e){return this.then(void 0,e)}});!vM&&hM(yu)&&(hu=mM("Promise").prototype.catch,yy.catch!==hu&&yM(yy,"catch",hu,{unsafe:!0}));var hu});var by=a(()=>{"use strict";var gM=x(),bM=D(),qM=F(),xM=Te(),SM=qr(),wM=ve(),TM=Gt();gM({target:"Promise",stat:!0,forced:TM},{race:function(r){var t=this,n=xM.f(t),i=n.reject,o=SM(function(){var u=qM(t.resolve);wM(r,function(l){bM(u,t,l).then(n.resolve,i)})});return o.error&&i(o.value),n.promise}})});var qy=a(()=>{"use strict";var OM=x(),CM=Te(),EM=Xr().CONSTRUCTOR;OM({target:"Promise",stat:!0,forced:EM},{reject:function(r){var t=CM.f(this),n=t.reject;return n(r),t.promise}})});var gu=a((jH,xy)=>{"use strict";var IM=Q(),kM=$(),_M=Te();xy.exports=function(e,r){if(IM(e),kM(r)&&r.constructor===e)return r;var t=_M.f(e),n=t.resolve;return n(r),t.promise}});var Ty=a(()=>{"use strict";var PM=x(),RM=U(),Sy=Z(),AM=xr(),wy=Xr().CONSTRUCTOR,NM=gu(),MM=RM("Promise"),jM=Sy&&!wy;PM({target:"Promise",stat:!0,forced:Sy||wy},{resolve:function(r){return NM(jM&&this===MM?AM:this,r)}})});var Oy=a(()=>{"use strict";dy();hy();gy();by();qy();Ty()});var bu=a(()=>{"use strict";var $M=x(),LM=D(),FM=F(),DM=Te(),BM=qr(),GM=ve(),UM=Gt();$M({target:"Promise",stat:!0,forced:UM},{allSettled:function(r){var t=this,n=DM.f(t),i=n.resolve,o=n.reject,u=BM(function(){var l=FM(t.resolve),c=[],s=0,f=1;GM(r,function(p){var v=s++,d=!1;f++,LM(l,t,p).then(function(h){d||(d=!0,c[v]={status:"fulfilled",value:h},--f||i(c))},function(h){d||(d=!0,c[v]={status:"rejected",reason:h},--f||i(c))})}),--f||i(c)});return u.error&&o(u.value),n.promise}})});var qu=a(()=>{"use strict";var WM=x(),HM=D(),KM=F(),zM=U(),VM=Te(),YM=qr(),JM=ve(),QM=Gt(),Cy="No one promise resolved";WM({target:"Promise",stat:!0,forced:QM},{any:function(r){var t=this,n=zM("AggregateError"),i=VM.f(t),o=i.resolve,u=i.reject,l=YM(function(){var c=KM(t.resolve),s=[],f=0,p=1,v=!1;JM(r,function(d){var h=f++,m=!1;p++,HM(c,t,d).then(function(y){m||v||(v=!0,o(y))},function(y){m||v||(m=!0,s[h]=y,--p||u(new n(s,Cy)))})}),--p||u(new n(s,Cy))});return l.error&&u(l.value),i.promise}})});var Su=a(()=>{"use strict";var XM=x(),ZM=P(),ej=Ar(),rj=lr(),tj=Te(),nj=F(),Iy=qr(),xu=ZM.Promise,Ey=!1,ij=!xu||!xu.try||Iy(function(){xu.try(function(e){Ey=e===8},8)}).error||!Ey;XM({target:"Promise",stat:!0,forced:ij},{try:function(e){var r=arguments.length>1?rj(arguments,1):[],t=tj.f(this),n=Iy(function(){return ej(nj(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var wu=a(()=>{"use strict";var aj=x(),oj=Te();aj({target:"Promise",stat:!0},{withResolvers:function(){var r=oj.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var Ry=a(()=>{"use strict";var uj=x(),sj=Z(),hi=xr(),cj=_(),_y=U(),Py=N(),lj=Uo(),ky=gu(),fj=Pe(),Ou=hi&&hi.prototype,pj=!!hi&&cj(function(){Ou.finally.call({then:function(){}},function(){})});uj({target:"Promise",proto:!0,real:!0,forced:pj},{finally:function(e){var r=lj(this,_y("Promise")),t=Py(e);return this.then(t?function(n){return ky(r,e()).then(function(){return n})}:e,t?function(n){return ky(r,e()).then(function(){throw n})}:e)}});!sj&&Py(hi)&&(Tu=_y("Promise").prototype.finally,Ou.finally!==Tu&&fj(Ou,"finally",Tu,{unsafe:!0}));var Tu});var Ny=a((QH,Ay)=>{"use strict";Fo();yr();It();Oy();bu();qu();Su();wu();Ry();vr();var vj=z();Ay.exports=vj.Promise});var jy=a((XH,My)=>{"use strict";var dj=Ny();gr();My.exports=dj});var $y=a(()=>{"use strict";Su()});var Ly=a(()=>{"use strict";wu()});var Dy=a((nK,Fy)=>{"use strict";var mj=jy();$y();Ly();Fy.exports=mj});var By=a(()=>{"use strict";Fo()});var Gy=a(()=>{"use strict";bu()});var Uy=a(()=>{"use strict";qu()});var Hy=a((lK,Wy)=>{"use strict";var hj=Dy();By();Gy();Uy();Wy.exports=hj});var nt=a((fK,Ky)=>{"use strict";Ky.exports=Hy()});var Yy=a((hK,Vy)=>{"use strict";To();var yj=Hr();Vy.exports=yj.f("asyncIterator")});var Qy=a((yK,Jy)=>{"use strict";var gj=Yy();Jy.exports=gj});var Zy=a((gK,Xy)=>{"use strict";var bj=Qy();Xy.exports=bj});var rg=a((bK,eg)=>{"use strict";var qj=Zy();eg.exports=qj});var yi=a((qK,tg)=>{"use strict";tg.exports=rg()});var og=a(()=>{"use strict";var xj=x(),Sj=_(),wj=re(),ag=St(),Tj=Da(),Oj=Sj(function(){ag(1)});xj({target:"Object",stat:!0,forced:Oj,sham:!Tj},{getPrototypeOf:function(r){return ag(wj(r))}})});var sg=a((OK,ug)=>{"use strict";og();var Cj=z();ug.exports=Cj.Object.getPrototypeOf});var lg=a((CK,cg)=>{"use strict";var Ej=sg();cg.exports=Ej});var pg=a((EK,fg)=>{"use strict";var Ij=lg();fg.exports=Ij});var dg=a((IK,vg)=>{"use strict";var kj=pg();vg.exports=kj});var gi=a((kK,mg)=>{"use strict";mg.exports=dg()});var yg=a(()=>{"use strict";var _j=x(),Pj=A(),Rj=_e(),Aj=Pj([].reverse),hg=[1,2];_j({target:"Array",proto:!0,forced:String(hg)===String(hg.reverse())},{reverse:function(){return Rj(this)&&(this.length=this.length),Aj(this)}})});var bg=a((RK,gg)=>{"use strict";yg();var Nj=oe();gg.exports=Nj("Array","reverse")});var xg=a((AK,qg)=>{"use strict";var Mj=B(),jj=bg(),Iu=Array.prototype;qg.exports=function(e){var r=e.reverse;return e===Iu||Mj(Iu,e)&&r===Iu.reverse?jj:r}});var wg=a((NK,Sg)=>{"use strict";var $j=xg();Sg.exports=$j});var Og=a((MK,Tg)=>{"use strict";var Lj=wg();Tg.exports=Lj});var Eg=a((jK,Cg)=>{"use strict";var Fj=Og();Cg.exports=Fj});var kg=a(($K,Ig)=>{"use strict";Ig.exports=Eg()});var ku=a((LK,Ht)=>{function Dj(e,r){this.v=e,this.k=r}Ht.exports=Dj,Ht.exports.__esModule=!0,Ht.exports.default=Ht.exports});var _g=a(()=>{"use strict";var Bj=x(),Gj=G(),Uj=Qe();Bj({target:"Object",stat:!0,sham:!Gj},{create:Uj})});var Rg=a((BK,Pg)=>{"use strict";_g();var Wj=z(),Hj=Wj.Object;Pg.exports=function(r,t){return Hj.create(r,t)}});var Ng=a((GK,Ag)=>{"use strict";var Kj=Rg();Ag.exports=Kj});var jg=a((UK,Mg)=>{"use strict";var zj=Ng();Mg.exports=zj});var Lg=a((WK,$g)=>{"use strict";var Vj=jg();$g.exports=Vj});var bi=a((HK,Fg)=>{"use strict";Fg.exports=Lg()});var Pu=a((KK,Ug)=>{"use strict";var Bg=A(),Yj=F(),Jj=$(),Qj=W(),Dg=lr(),Xj=Rr(),Gg=Function,Zj=Bg([].concat),e$=Bg([].join),_u={},r$=function(e,r,t){if(!Qj(_u,r)){for(var n=[],i=0;i<r;i++)n[i]="a["+i+"]";_u[r]=Gg("C,a","return new C("+e$(n,",")+")")}return _u[r](e,t)};Ug.exports=Xj?Gg.bind:function(r){var t=Yj(this),n=t.prototype,i=Dg(arguments,1),o=function(){var l=Zj(i,Dg(arguments));return this instanceof o?r$(t,l.length,l):t.apply(r,l)};return Jj(n)&&(o.prototype=n),o}});var Hg=a(()=>{"use strict";var t$=x(),Wg=Pu();t$({target:"Function",proto:!0,forced:Function.bind!==Wg},{bind:Wg})});var zg=a((YK,Kg)=>{"use strict";Hg();var n$=oe();Kg.exports=n$("Function","bind")});var Yg=a((JK,Vg)=>{"use strict";var i$=B(),a$=zg(),Ru=Function.prototype;Vg.exports=function(e){var r=e.bind;return e===Ru||i$(Ru,e)&&r===Ru.bind?a$:r}});var Qg=a((QK,Jg)=>{"use strict";var o$=Yg();Jg.exports=o$});var Zg=a((XK,Xg)=>{"use strict";var u$=Qg();Xg.exports=u$});var rb=a((ZK,eb)=>{"use strict";var s$=Zg();eb.exports=s$});var Kt=a((ez,tb)=>{"use strict";tb.exports=rb()});var nb=a(()=>{"use strict";var c$=x(),l$=wt();c$({target:"Object",stat:!0},{setPrototypeOf:l$})});var ab=a((nz,ib)=>{"use strict";nb();var f$=z();ib.exports=f$.Object.setPrototypeOf});var ub=a((iz,ob)=>{"use strict";var p$=ab();ob.exports=p$});var cb=a((az,sb)=>{"use strict";var v$=ub();sb.exports=v$});var fb=a((oz,lb)=>{"use strict";var d$=cb();lb.exports=d$});var qi=a((uz,pb)=>{"use strict";pb.exports=fb()});var db=a(()=>{"use strict";var m$=x(),h$=G(),vb=te().f;m$({target:"Object",stat:!0,forced:Object.defineProperty!==vb,sham:!h$},{defineProperty:vb})});var yb=a((lz,hb)=>{"use strict";db();var y$=z(),mb=y$.Object,g$=hb.exports=function(r,t,n){return mb.defineProperty(r,t,n)};mb.defineProperty.sham&&(g$.sham=!0)});var bb=a((fz,gb)=>{"use strict";var b$=yb();gb.exports=b$});var xb=a((pz,qb)=>{"use strict";var q$=bb();qb.exports=q$});var wb=a((vz,Sb)=>{"use strict";var x$=xb();Sb.exports=x$});var zt=a((dz,Tb)=>{"use strict";Tb.exports=wb()});var Au=a((mz,Me)=>{var S$=zt();function xi(e,r,t,n){var i=S$;try{i({},"",{})}catch{i=0}Me.exports=xi=function(u,l,c,s){function f(p,v){xi(u,p,function(d){return this._invoke(p,v,d)})}l?i?i(u,l,{value:c,enumerable:!s,configurable:!s,writable:!s}):u[l]=c:(f("next",0),f("throw",1),f("return",2))},Me.exports.__esModule=!0,Me.exports.default=Me.exports,xi(e,r,t,n)}Me.exports=xi,Me.exports.__esModule=!0,Me.exports.default=Me.exports});var Mu=a((hz,je)=>{var Ob=we(),Nu=bi(),w$=Kt(),T$=gi(),Cb=qi(),Ce=Au();function Eb(){var e,r,t=typeof Ob=="function"?Ob:{},n=t.iterator||"@@iterator",i=t.toStringTag||"@@toStringTag";function o(d,h,m,y){var q=h&&h.prototype instanceof l?h:l,b=Nu(q.prototype);return Ce(b,"_invoke",function(I,E,S){var T,w,C,j=0,be=S||[],k=!1,ee={p:0,n:0,v:e,a:qe,f:w$(qe).call(qe,e,4),d:function(L,de){return T=L,w=0,C=e,ee.n=de,u}};function qe(J,L){for(w=J,C=L,r=0;!k&&j&&!de&&r<be.length;r++){var de,O=be[r],_r=ee.p,Ke=O[2];J>3?(de=Ke===L)&&(C=O[(w=O[4])?5:(w=3,3)],O[4]=O[5]=e):O[0]<=_r&&((de=J<2&&_r<O[1])?(w=0,ee.v=L,ee.n=O[1]):_r<Ke&&(de=J<3||O[0]>L||L>Ke)&&(O[4]=J,O[5]=L,ee.n=Ke,w=0))}if(de||J>1)return u;throw k=!0,L}return function(J,L,de){if(j>1)throw TypeError("Generator is already running");for(k&&L===1&&qe(L,de),w=L,C=de;(r=w<2?e:C)||!k;){T||(w?w<3?(w>1&&(ee.n=-1),qe(w,C)):ee.n=C:ee.v=C);try{if(j=2,T){if(w||(J="next"),r=T[J]){if(!(r=r.call(T,C)))throw TypeError("iterator result is not an object");if(!r.done)return r;C=r.value,w<2&&(w=0)}else w===1&&(r=T.return)&&r.call(T),w<2&&(C=TypeError("The iterator does not provide a '"+J+"' method"),w=1);T=e}else if((r=(k=ee.n<0)?C:I.call(E,ee))!==u)break}catch(O){T=e,w=1,C=O}finally{j=1}}return{value:r,done:k}}}(d,m,y),!0),b}var u={};function l(){}function c(){}function s(){}r=T$;var f=[][n]?r(r([][n]())):(Ce(r={},n,function(){return this}),r),p=s.prototype=l.prototype=Nu(f);function v(d){return Cb?Cb(d,s):(d.__proto__=s,Ce(d,i,"GeneratorFunction")),d.prototype=Nu(p),d}return c.prototype=s,Ce(p,"constructor",s),Ce(s,"constructor",c),c.displayName="GeneratorFunction",Ce(s,i,"GeneratorFunction"),Ce(p),Ce(p,i,"Generator"),Ce(p,n,function(){return this}),Ce(p,"toString",function(){return"[object Generator]"}),(je.exports=Eb=function(){return{w:o,m:v}},je.exports.__esModule=!0,je.exports.default=je.exports)()}je.exports=Eb,je.exports.__esModule=!0,je.exports.default=je.exports});var Lu=a((yz,Vt)=>{var O$=we(),C$=yi(),E$=ku(),ju=Au();function $u(e,r){function t(i,o,u,l){try{var c=e[i](o),s=c.value;return s instanceof E$?r.resolve(s.v).then(function(f){t("next",f,u,l)},function(f){t("throw",f,u,l)}):r.resolve(s).then(function(f){c.value=f,u(c)},function(f){return t("throw",f,u,l)})}catch(f){l(f)}}var n;this.next||(ju($u.prototype),ju($u.prototype,typeof O$=="function"&&C$||"@asyncIterator",function(){return this})),ju(this,"_invoke",function(i,o,u){function l(){return new r(function(c,s){t(i,u,c,s)})}return n=n?n.then(l,l):l()},!0)}Vt.exports=$u,Vt.exports.__esModule=!0,Vt.exports.default=Vt.exports});var Fu=a((gz,Yt)=>{var I$=nt(),k$=Mu(),_$=Lu();function P$(e,r,t,n,i){return new _$(k$().w(e,r,t,n),i||I$)}Yt.exports=P$,Yt.exports.__esModule=!0,Yt.exports.default=Yt.exports});var Ib=a((bz,Jt)=>{var R$=Fu();function A$(e,r,t,n,i){var o=R$(e,r,t,n,i);return o.next().then(function(u){return u.done?u.value:o.next()})}Jt.exports=A$,Jt.exports.__esModule=!0,Jt.exports.default=Jt.exports});var Pb=a((qz,_b)=>{"use strict";var kb=Ve(),N$=TypeError;_b.exports=function(e,r){if(!delete e[r])throw new N$("Cannot delete property "+kb(r)+" of "+kb(e))}});var Rb=a(()=>{"use strict";var M$=x(),j$=re(),$$=fe(),L$=Gr(),F$=Pb(),D$=Et(),B$=[].unshift(0)!==1,G$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},U$=B$||!G$();M$({target:"Array",proto:!0,arity:1,forced:U$},{unshift:function(r){var t=j$(this),n=$$(t),i=arguments.length;if(i){D$(n+i);for(var o=n;o--;){var u=o+i;o in t?t[u]=t[o]:F$(t,u)}for(var l=0;l<i;l++)t[l]=arguments[l]}return L$(t,n+i)}})});var Nb=a((wz,Ab)=>{"use strict";Rb();var W$=oe();Ab.exports=W$("Array","unshift")});var jb=a((Tz,Mb)=>{"use strict";var H$=B(),K$=Nb(),Du=Array.prototype;Mb.exports=function(e){var r=e.unshift;return e===Du||H$(Du,e)&&r===Du.unshift?K$:r}});var Lb=a((Oz,$b)=>{"use strict";var z$=jb();$b.exports=z$});var Db=a((Cz,Fb)=>{"use strict";var V$=Lb();Fb.exports=V$});var Gb=a((Ez,Bb)=>{"use strict";var Y$=Db();Bb.exports=Y$});var Wb=a((Iz,Ub)=>{"use strict";Ub.exports=Gb()});var Hb=a((kz,Qt)=>{var J$=Wb();function Q$(e){var r=Object(e),t=[];for(var n in r)J$(t).call(t,n);return function i(){for(;t.length;)if((n=t.pop())in r)return i.value=n,i.done=!1,i;return i.done=!0,i}}Qt.exports=Q$,Qt.exports.__esModule=!0,Qt.exports.default=Qt.exports});var zb=a((_z,Kb)=>{"use strict";yr();It();vr();Co();var X$=Hr();Kb.exports=X$.f("iterator")});var Yb=a((Pz,Vb)=>{"use strict";var Z$=zb();gr();Vb.exports=Z$});var Qb=a((Rz,Jb)=>{"use strict";var eL=Yb();Jb.exports=eL});var Zb=a((Az,Xb)=>{"use strict";var rL=Qb();Xb.exports=rL});var Xt=a((Nz,eq)=>{"use strict";eq.exports=Zb()});var rq=a((Mz,$e)=>{var Si=we(),tL=Xt();function Bu(e){"@babel/helpers - typeof";return $e.exports=Bu=typeof Si=="function"&&typeof tL=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Si=="function"&&r.constructor===Si&&r!==Si.prototype?"symbol":typeof r},$e.exports.__esModule=!0,$e.exports.default=$e.exports,Bu(e)}$e.exports=Bu,$e.exports.__esModule=!0,$e.exports.default=$e.exports});var tq=a((jz,Zt)=>{var nL=rq().default,iL=we(),aL=Xt();function oL(e){if(e!=null){var r=e[typeof iL=="function"&&aL||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(nL(e)+" is not iterable")}Zt.exports=oL,Zt.exports.__esModule=!0,Zt.exports.default=Zt.exports});var aq=a(($z,Le)=>{var nq=gi(),uL=kg(),sL=ku(),cL=Mu(),lL=Ib(),fL=Fu(),pL=Lu(),vL=Hb(),iq=tq();function Gu(){"use strict";var e=cL(),r=e.m(Gu),t=(nq?nq(r):r.__proto__).constructor;function n(u){var l=typeof u=="function"&&u.constructor;return!!l&&(l===t||(l.displayName||l.name)==="GeneratorFunction")}var i={throw:1,return:2,break:3,continue:3};function o(u){var l,c;return function(s){l||(l={stop:function(){return c(s.a,2)},catch:function(){return s.v},abrupt:function(p,v){return c(s.a,i[p],v)},delegateYield:function(p,v,d){return l.resultName=v,c(s.d,iq(p),d)},finish:function(p){return c(s.f,p)}},c=function(p,v,d){s.p=l.prev,s.n=l.next;try{return p(v,d)}finally{l.next=s.n}}),l.resultName&&(l[l.resultName]=s.v,l.resultName=void 0),l.sent=s.v,l.next=s.n;try{return u.call(this,l)}finally{s.p=l.prev,s.n=l.next}}}return(Le.exports=Gu=function(){return{wrap:function(c,s,f,p){return e.w(o(c),s,f,p&&uL(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(c,s){return new sL(c,s)},AsyncIterator:pL,async:function(c,s,f,p,v){return(n(s)?fL:lL)(o(c),s,f,p,v)},keys:vL,values:iq}},Le.exports.__esModule=!0,Le.exports.default=Le.exports)()}Le.exports=Gu,Le.exports.__esModule=!0,Le.exports.default=Le.exports});var se=a((Lz,oq)=>{var wi=aq()();oq.exports=wi;try{regeneratorRuntime=wi}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=wi:Function("r","regeneratorRuntime = r")(wi)}});var Uu=a((Oi,sq)=>{"use strict";Object.defineProperty(Oi,"__esModule",{value:!0});var Ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},uq=function(){function e(r,t){var n=[],i=!0,o=!1,u=void 0;try{for(var l=r[Symbol.iterator](),c;!(i=(c=l.next()).done)&&(n.push(c.value),!(t&&n.length===t));i=!0);}catch(s){o=!0,u=s}finally{try{!i&&l.return&&l.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Oi.default=dL;function dL(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(i){return i.type==="tag"||i.type==="script"||i.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var i=this.attribs,o=Object.keys(i),u=o.reduce(function(l,c,s){return l[s]={name:c,value:i[c]},l},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var i=[];return tr(this.childTags,function(o){(o.name===n||n==="*")&&i.push(o)}),i}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var i=n.trim().replace(/\s+/g," ").split(" "),o=[];return tr([this],function(u){var l=u.attribs.class;l&&i.every(function(c){return l.indexOf(c)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var i=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=mL(n),u=o.shift(),l=o.length;return u(this).filter(function(c){for(var s=0;s<l;){if(c=o[s](c,i),!c)return!1;s+=1}return!0})}),t.contains||(t.contains=function(n){var i=!1;return tr([this],function(o,u){o===n&&(i=!0,u())}),i}),!0}function mL(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,i=r.split(":"),o=uq(i,2),u=o[0],l=o[1],c=null,s=null;if(function(){switch(!0){case/>/.test(u):s=function(S){return function(T){return T(S.parent)&&S.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");c=function(S){var T=S.attribs.class;return T&&h.every(function(w){return T.indexOf(w)>-1})},s=function(S,T){return n?S.getElementsByClassName(h.join(" ")):typeof S=="function"?S(c):en(S,T,c)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),y=uq(m,2),q=y[0],b=y[1];c=function(S){var T=Object.keys(S.attribs).indexOf(q)>-1;return!!(T&&(!b||S.attribs[q]===b))},s=function(S,T){if(n){var w=function(){var C=[];return tr([S],function(j){c(j)&&C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":Ti(w))==="object")return w.v}return typeof S=="function"?S(c):en(S,T,c)};break;case/^#/.test(u):var I=u.substr(1);c=function(S){return S.attribs.id===I},s=function(S,T){if(n){var w=function(){var C=[];return tr([S],function(j,be){c(j)&&(C.push(j),be())}),{v:C}}();if((typeof w>"u"?"undefined":Ti(w))==="object")return w.v}return typeof S=="function"?S(c):en(S,T,c)};break;case/\*/.test(u):c=function(S){return!0},s=function(S,T){if(n){var w=function(){var C=[];return tr([S],function(j){return C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":Ti(w))==="object")return w.v}return typeof S=="function"?S(c):en(S,T,c)};break;default:c=function(S){return S.name===u},s=function(S,T){if(n){var w=function(){var C=[];return tr([S],function(j){c(j)&&C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":Ti(w))==="object")return w.v}return typeof S=="function"?S(c):en(S,T,c)}}}(),!l)return s;var f=l.match(/-(child|type)\((\d+)\)$/),p=f[1],v=parseInt(f[2],10)-1,d=function(m){if(m){var y=m.parent.childTags;p==="type"&&(y=y.filter(c));var q=y.findIndex(function(b){return b===m});if(q===v)return!0}return!1};return function(m){var y=s(m);return n?y.reduce(function(q,b){return d(b)&&q.push(b),q},[]):d(y)&&y}})}function tr(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&tr(t.childTags,r)})}function en(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}sq.exports=Oi.default});var Ei=a(Ci=>{"use strict";Object.defineProperty(Ci,"__esModule",{value:!0});Ci.convertNodeList=hL;Ci.escapeValue=yL;function hL(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function yL(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var gq=a((Ii,yq)=>{"use strict";Object.defineProperty(Ii,"__esModule",{value:!0});Ii.default=gL;var pq=Ei(),cq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function gL(e,r){var t=r.root,n=t===void 0?document:t,i=r.skip,o=i===void 0?null:i,u=r.priority,l=u===void 0?["id","class","href","src"]:u,c=r.ignore,s=c===void 0?{}:c,f=[],p=e,v=f.length,d=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(q){return typeof q!="function"?function(b){return b===q}:q}),m=function(b){return o&&h.some(function(I){return I(b)})};for(Object.keys(s).forEach(function(q){q==="class"&&(d=!0);var b=s[q];typeof b!="function"&&(typeof b=="number"&&(b=b.toString()),typeof b=="string"&&(b=new RegExp((0,pq.escapeValue)(b).replace(/\\/g,"\\\\"))),typeof b=="boolean"&&(b=b?/(?:)/:/.^/),s[q]=function(I,E){return b.test(E)})}),d&&function(){var q=s.attribute;s.attribute=function(b,I,E){return s.class(I)||q&&q(b,I,E)}}();p!==n;){if(m(p)!==!0){if(lq(l,p,s,f,n)||fq(p,s,f,n))break;lq(l,p,s,f),f.length===v&&fq(p,s,f),f.length===v&&bL(l,p,s,f)}p=p.parentNode,v=f.length}if(p===n){var y=mq(l,p,s);f.unshift(y)}return f.join(" ")}function lq(e,r,t,n){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=vq(e,r,t);if(o){var u=i.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function vq(e,r,t){for(var n=r.attributes,i=Object.keys(n).sort(function(m,y){var q=e.indexOf(n[m].name),b=e.indexOf(n[y].name);return b===-1?q===-1?0:-1:q-b}),o=0,u=i.length;o<u;o++){var l=i[o],c=n[l],s=c.name,f=(0,pq.escapeValue)(c.value),p=t[s]||t.attribute,v=cq[s]||cq.attribute;if(!hq(p,s,f,v)){var d="["+s+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(s==="id"&&(d="#"+f),s==="class")){var h=f.trim().replace(/\s+/g,".");d="."+h}return d}}return null}function fq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,i=dq(e,r);if(i){var o=n.getElementsByTagName(i);if(o.length===1)return t.unshift(i),!0}return!1}function dq(e,r){var t=e.tagName.toLowerCase();return hq(r.tag,null,t)?null:t}function bL(e,r,t,n){for(var i=r.parentNode,o=i.childTags||i.children,u=0,l=o.length;u<l;u++){var c=o[u];if(c===r){var s=mq(e,c,t);if(!s)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,c,t,s);var f="> "+s+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function mq(e,r,t){var n=vq(e,r,t);return n||(n=dq(r,t)),n}function hq(e,r,t,n){if(!t)return!0;var i=e||n;return i?i(r,t,n):!1}yq.exports=Ii.default});var Wu=a((_i,bq)=>{"use strict";Object.defineProperty(_i,"__esModule",{value:!0});_i.default=TL;var qL=Uu(),xL=wL(qL),SL=Ei();function wL(e){return e&&e.__esModule?e:{default:e}}function TL(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,SL.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,xL.default)(r[0],t),i=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(i.length<2)return ki("",e,"",r);for(var o=[i.pop()];i.length>1;){var u=i.pop(),l=i.join(" "),c=o.join(" "),s=l+" "+c,f=document.querySelectorAll(s);f.length!==r.length&&o.unshift(ki(l,u,c,r))}return o.unshift(i[0]),i=o,i[0]=ki("",i[0],i.slice(1).join(" "),r),i[i.length-1]=ki(i.slice(0,-1).join(" "),i[i.length-1],"",r),n&&delete global.document,i.join(" ").replace(/>/g,"> ").trim()}function ki(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var i=r.replace(/=.*$/,"]"),o=""+e+i+t,u=document.querySelectorAll(o);if(it(u,n))r=i;else for(var l=document.querySelectorAll(""+e+i),c=function(){var E=l[s];if(n.some(function(T){return E.contains(T)})){var S=E.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),it(u,n)&&(r=S),"break"}},s=0,f=l.length;s<f;s++){var o,u,p=c();if(p==="break")break}}if(/>/.test(r)){var v=r.replace(/>/,""),o=""+e+v+t,u=document.querySelectorAll(o);it(u,n)&&(r=v)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);it(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(I){return"."+I}).sort(function(I,E){return I.length-E.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);it(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var y=document.querySelectorAll(""+e+r),q=function(){var E=y[s];if(n.some(function(T){return E.contains(T)})){var S=E.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),it(u,n)&&(r=S),"break"}},s=0,f=y.length;s<f;s++){var o,u,b=q();if(b==="break")break}}return r}function it(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var i=0;i<t;i++)if(e[i]===n)return!0;return!1})}bq.exports=_i.default});var Hu=a(Pi=>{"use strict";Object.defineProperty(Pi,"__esModule",{value:!0});Pi.getCommonAncestor=OL;Pi.getCommonProperties=CL;function OL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,i=[];e.forEach(function(p,v){for(var d=[];p!==n;)p=p.parentNode,d.unshift(p);i[v]=d}),i.sort(function(p,v){return p.length-v.length});for(var o=i.shift(),u=null,l=function(){var v=o[c],d=i.some(function(h){return!h.some(function(m){return m===v})});if(d)return"break";u=v},c=0,s=o.length;c<s;c++){var f=l();if(f==="break")break}return u}function CL(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,i=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(c){return u.some(function(s){return s===c})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(i!==void 0&&function(){var c=t.attributes,s=Object.keys(c).reduce(function(v,d){var h=c[d],m=h.name;return h&&m!=="class"&&(v[m]=h.value),v},{}),f=Object.keys(s),p=Object.keys(i);f.length?p.length?(i=p.reduce(function(v,d){var h=i[d];return h===s[d]&&(v[d]=h),v},{}),Object.keys(i).length?r.attributes=i:delete r.attributes):r.attributes=s:delete r.attributes}(),o!==void 0){var l=t.tagName.toLowerCase();o?l!==o&&delete r.tag:r.tag=l}}),r}});var Oq=a(rn=>{"use strict";Object.defineProperty(rn,"__esModule",{value:!0});var EL=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};rn.getSingleSelector=zu;rn.getMultiSelector=Tq;rn.default=AL;var IL=Uu(),xq=Ku(IL),kL=gq(),_L=Ku(kL),PL=Wu(),Sq=Ku(PL),qq=Ei(),wq=Hu();function Ku(e){return e&&e.__esModule?e:{default:e}}function zu(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":EL(e))+'")');var t=(0,xq.default)(e,r),n=(0,_L.default)(e,r),i=(0,Sq.default)(n,e,r);return t&&delete global.document,i}function Tq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,qq.convertNodeList)(e)),e.some(function(s){return s.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,xq.default)(e[0],r),n=(0,wq.getCommonAncestor)(e,r),i=zu(n,r),o=RL(e),u=o[0],l=(0,Sq.default)(i+" "+u,e,r),c=(0,qq.convertNodeList)(document.querySelectorAll(l));return e.every(function(s){return c.some(function(f){return f===s})})?(t&&delete global.document,l):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function RL(e){var r=(0,wq.getCommonProperties)(e),t=r.classes,n=r.attributes,i=r.tag,o=[];if(i&&o.push(i),t){var u=t.map(function(c){return"."+c}).join("");o.push(u)}if(n){var l=Object.keys(n).reduce(function(c,s){return c.push("["+s+'="'+n[s]+'"]'),c},[]).join("");o.push(l)}return o.length,[o.join("")]}function AL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?Tq(e,r):zu(e,r)}});var Iq=a(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.default=ie.common=ie.optimize=ie.getMultiSelector=ie.getSingleSelector=ie.select=void 0;var Vu=Oq();Object.defineProperty(ie,"getSingleSelector",{enumerable:!0,get:function(){return Vu.getSingleSelector}});Object.defineProperty(ie,"getMultiSelector",{enumerable:!0,get:function(){return Vu.getMultiSelector}});var Cq=Eq(Vu),NL=Wu(),ML=Eq(NL),jL=Hu(),$L=LL(jL);function LL(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Eq(e){return e&&e.__esModule?e:{default:e}}ie.select=Cq.default;ie.optimize=ML.default;ie.common=$L;ie.default=Cq.default});var kq=a(()=>{"use strict";var VL=x(),YL=_e();VL({target:"Array",stat:!0},{isArray:YL})});var Pq=a((rV,_q)=>{"use strict";kq();var JL=z();_q.exports=JL.Array.isArray});var Aq=a((tV,Rq)=>{"use strict";var QL=Pq();Rq.exports=QL});var Mq=a((nV,Nq)=>{"use strict";var XL=Aq();Nq.exports=XL});var $q=a((iV,jq)=>{"use strict";var ZL=Mq();jq.exports=ZL});var Fq=a((aV,Lq)=>{"use strict";Lq.exports=$q()});var Gq=a(()=>{"use strict";var eF=x(),rF=re(),tF=fe(),nF=Gr(),iF=Et(),aF=_(),oF=aF(function(){return[].push.call({length:4294967296},1)!==4294967297}),uF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},sF=oF||!uF();eF({target:"Array",proto:!0,arity:1,forced:sF},{push:function(r){var t=rF(this),n=tF(t),i=arguments.length;iF(n+i);for(var o=0;o<i;o++)t[n]=arguments[o],n++;return nF(t,n),n}})});var Wq=a((cV,Uq)=>{"use strict";Gq();var cF=oe();Uq.exports=cF("Array","push")});var Kq=a((lV,Hq)=>{"use strict";var lF=B(),fF=Wq(),Yu=Array.prototype;Hq.exports=function(e){var r=e.push;return e===Yu||lF(Yu,e)&&r===Yu.push?fF:r}});var Vq=a((fV,zq)=>{"use strict";var pF=Kq();zq.exports=pF});var Jq=a((pV,Yq)=>{"use strict";var vF=Vq();Yq.exports=vF});var Xq=a((vV,Qq)=>{"use strict";var dF=Jq();Qq.exports=dF});var Ju=a((dV,Zq)=>{"use strict";Zq.exports=Xq()});var lx=a(()=>{"use strict";var mF=x(),hF=_t().map,yF=bt(),gF=yF("map");mF({target:"Array",proto:!0,forced:!gF},{map:function(r){return hF(this,r,arguments.length>1?arguments[1]:void 0)}})});var px=a((GV,fx)=>{"use strict";lx();var bF=oe();fx.exports=bF("Array","map")});var dx=a((UV,vx)=>{"use strict";var qF=B(),xF=px(),Xu=Array.prototype;vx.exports=function(e){var r=e.map;return e===Xu||qF(Xu,e)&&r===Xu.map?xF:r}});var hx=a((WV,mx)=>{"use strict";var SF=dx();mx.exports=SF});var gx=a((HV,yx)=>{"use strict";var wF=hx();yx.exports=wF});var qx=a((KV,bx)=>{"use strict";var TF=gx();bx.exports=TF});var Sx=a((zV,xx)=>{"use strict";xx.exports=qx()});var Tx=a((VV,wx)=>{wx.exports=Sx()});var Cx=a((YV,Ox)=>{Ox.exports=nt()});var Px=a((JV,_x)=>{"use strict";var OF=F(),CF=re(),EF=gn(),IF=fe(),Ex=TypeError,Ix="Reduce of empty array with no initial value",kx=function(e){return function(r,t,n,i){var o=CF(r),u=EF(o),l=IF(o);if(OF(t),l===0&&n<2)throw new Ex(Ix);var c=e?l-1:0,s=e?-1:1;if(n<2)for(;;){if(c in u){i=u[c],c+=s;break}if(c+=s,e?c<0:l<=c)throw new Ex(Ix)}for(;e?c>=0:l>c;c+=s)c in u&&(i=t(i,u[c],c,o));return i}};_x.exports={left:kx(!1),right:kx(!0)}});var Zu=a((QV,Rx)=>{"use strict";var kF=_();Rx.exports=function(e,r){var t=[][e];return!!t&&kF(function(){t.call(null,r||function(){return 1},1)})}});var Nx=a(()=>{"use strict";var _F=x(),PF=Px().left,RF=Zu(),Ax=Mr(),AF=jt(),NF=!AF&&Ax>79&&Ax<83,MF=NF||!RF("reduce");_F({target:"Array",proto:!0,forced:MF},{reduce:function(r){var t=arguments.length;return PF(this,r,t,t>1?arguments[1]:void 0)}})});var jx=a((e7,Mx)=>{"use strict";Nx();var jF=oe();Mx.exports=jF("Array","reduce")});var Lx=a((r7,$x)=>{"use strict";var $F=B(),LF=jx(),es=Array.prototype;$x.exports=function(e){var r=e.reduce;return e===es||$F(es,e)&&r===es.reduce?LF:r}});var Dx=a((t7,Fx)=>{"use strict";var FF=Lx();Fx.exports=FF});var Gx=a((n7,Bx)=>{"use strict";var DF=Dx();Bx.exports=DF});var Wx=a((i7,Ux)=>{"use strict";var BF=Gx();Ux.exports=BF});var Kx=a((a7,Hx)=>{"use strict";Hx.exports=Wx()});var Vx=a((o7,zx)=>{zx.exports=Kx()});var Qx=a((u7,Jx)=>{"use strict";var GF=_e(),UF=fe(),WF=Et(),HF=V(),KF=Br(),Yx=function(e,r,t,n,i,o,u,l){for(var c=i,s=0,f=u?HF(u,l):!1,p,v;s<n;)s in t&&(p=f?f(t[s],s,r):t[s],o>0&&GF(p)?(v=UF(p),c=Yx(e,r,p,v,c,o-1)-1):(WF(c+1),KF(e,c,p)),c++),s++;return c};Jx.exports=Yx});var Xx=a(()=>{"use strict";var zF=x(),VF=Qx(),YF=F(),JF=re(),QF=fe(),XF=Fn();zF({target:"Array",proto:!0},{flatMap:function(r){var t=JF(this),n=QF(t),i;return YF(r),i=XF(t,0),VF(i,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),i}})});var Zx=a(()=>{"use strict";var ZF=Io();ZF("flatMap")});var rS=a((p7,eS)=>{"use strict";Xx();Zx();var eD=oe();eS.exports=eD("Array","flatMap")});var nS=a((v7,tS)=>{"use strict";var rD=B(),tD=rS(),rs=Array.prototype;tS.exports=function(e){var r=e.flatMap;return e===rs||rD(rs,e)&&r===rs.flatMap?tD:r}});var aS=a((d7,iS)=>{"use strict";var nD=nS();iS.exports=nD});var uS=a((m7,oS)=>{"use strict";var iD=aS();oS.exports=iD});var cS=a((h7,sS)=>{"use strict";var aD=uS();sS.exports=aD});var fS=a((y7,lS)=>{"use strict";lS.exports=cS()});var vS=a((g7,pS)=>{pS.exports=fS()});var mS=a((b7,dS)=>{"use strict";Xa();var oD=oe();dS.exports=oD("Array","concat")});var yS=a((q7,hS)=>{"use strict";var uD=B(),sD=mS(),ts=Array.prototype;hS.exports=function(e){var r=e.concat;return e===ts||uD(ts,e)&&r===ts.concat?sD:r}});var bS=a((x7,gS)=>{"use strict";var cD=yS();gS.exports=cD});var xS=a((S7,qS)=>{"use strict";var lD=bS();qS.exports=lD});var wS=a((w7,SS)=>{"use strict";var fD=xS();SS.exports=fD});var OS=a((T7,TS)=>{"use strict";TS.exports=wS()});var ns=a((O7,CS)=>{CS.exports=OS()});var kS=a(()=>{});var PS=a((V7,_S)=>{"use strict";kS();Eo();var xD=Hr();_S.exports=xD.f("toPrimitive")});var AS=a((Y7,RS)=>{"use strict";var SD=PS();RS.exports=SD});var MS=a((J7,NS)=>{"use strict";var wD=AS();NS.exports=wD});var $S=a((Q7,jS)=>{"use strict";var TD=MS();jS.exports=TD});var FS=a((X7,LS)=>{"use strict";LS.exports=$S()});var VS=a((b9,zS)=>{"use strict";var CD=$(),ED=xe(),ID=R(),kD=ID("match");zS.exports=function(e){var r;return CD(e)&&((r=e[kD])!==void 0?!!r:ED(e)==="RegExp")}});var JS=a((q9,YS)=>{"use strict";var _D=VS(),PD=TypeError;YS.exports=function(e){if(_D(e))throw new PD("The method doesn't accept regular expressions");return e}});var XS=a((x9,QS)=>{"use strict";var RD=R(),AD=RD("match");QS.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[AD]=!1,"/./"[e](r)}catch{}}return!1}});var rw=a(()=>{"use strict";var ND=x(),MD=ft(),jD=vt().f,$D=Sa(),ZS=Ye(),LD=JS(),FD=ur(),DD=XS(),BD=Z(),GD=MD("".slice),UD=Math.min,ew=DD("startsWith"),WD=!BD&&!ew&&!!function(){var e=jD(String.prototype,"startsWith");return e&&!e.writable}();ND({target:"String",proto:!0,forced:!WD&&!ew},{startsWith:function(r){var t=ZS(FD(this));LD(r);var n=$D(UD(arguments.length>1?arguments[1]:void 0,t.length)),i=ZS(r);return GD(t,n,n+i.length)===i}})});var nw=a((T9,tw)=>{"use strict";rw();var HD=oe();tw.exports=HD("String","startsWith")});var aw=a((O9,iw)=>{"use strict";var KD=B(),zD=nw(),us=String.prototype;iw.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===us||KD(us,e)&&r===us.startsWith?zD:r}});var uw=a((C9,ow)=>{"use strict";var VD=aw();ow.exports=VD});var cw=a((E9,sw)=>{"use strict";var YD=uw();sw.exports=YD});var fw=a((I9,lw)=>{"use strict";var JD=cw();lw.exports=JD});var vw=a((k9,pw)=>{"use strict";pw.exports=fw()});var mw=a((_9,dw)=>{dw.exports=vw()});var hw=a(()=>{"use strict";var QD=x(),XD=_t().filter,ZD=bt(),e3=ZD("filter");QD({target:"Array",proto:!0,forced:!e3},{filter:function(r){return XD(this,r,arguments.length>1?arguments[1]:void 0)}})});var gw=a((A9,yw)=>{"use strict";hw();var r3=oe();yw.exports=r3("Array","filter")});var qw=a((N9,bw)=>{"use strict";var t3=B(),n3=gw(),ss=Array.prototype;bw.exports=function(e){var r=e.filter;return e===ss||t3(ss,e)&&r===ss.filter?n3:r}});var Sw=a((M9,xw)=>{"use strict";var i3=qw();xw.exports=i3});var Tw=a((j9,ww)=>{"use strict";var a3=Sw();ww.exports=a3});var Cw=a(($9,Ow)=>{"use strict";var o3=Tw();Ow.exports=o3});var Iw=a((L9,Ew)=>{"use strict";Ew.exports=Cw()});var _w=a((F9,kw)=>{kw.exports=Iw()});var Kw=a(()=>{"use strict";var d3=x(),m3=U(),ls=Ar(),h3=Pu(),Dw=Go(),y3=Q(),Bw=$(),g3=Qe(),Uw=_(),fs=m3("Reflect","construct"),b3=Object.prototype,q3=[].push,Ww=Uw(function(){function e(){}return!(fs(function(){},[],e)instanceof e)}),Hw=!Uw(function(){fs(function(){})}),Gw=Ww||Hw;d3({target:"Reflect",stat:!0,forced:Gw,sham:Gw},{construct:function(r,t){Dw(r),y3(t);var n=arguments.length<3?r:Dw(arguments[2]);if(Hw&&!Ww)return fs(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var i=[null];return ls(q3,i,t),new(ls(h3,r,i))}var o=n.prototype,u=g3(Bw(o)?o:b3),l=ls(r,u,t);return Bw(l)?l:u}})});var Vw=a((bY,zw)=>{"use strict";Kw();var x3=z();zw.exports=x3.Reflect.construct});var Jw=a((qY,Yw)=>{"use strict";var S3=Vw();Yw.exports=S3});var Xw=a((xY,Qw)=>{"use strict";var w3=Jw();Qw.exports=w3});var eT=a((SY,Zw)=>{"use strict";var T3=Xw();Zw.exports=T3});var Li=a((wY,rT)=>{"use strict";rT.exports=eT()});var nT=a((TY,tT)=>{tT.exports=Li()});var pT=a((AY,fT)=>{"use strict";var O3=_();fT.exports=O3(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var mT=a((NY,dT)=>{"use strict";var C3=_(),E3=$(),I3=xe(),vT=pT(),Fi=Object.isExtensible,k3=C3(function(){Fi(1)});dT.exports=k3||vT?function(r){return!E3(r)||vT&&I3(r)==="ArrayBuffer"?!1:Fi?Fi(r):!0}:Fi});var yT=a((MY,hT)=>{"use strict";var _3=_();hT.exports=!_3(function(){return Object.isExtensible(Object.preventExtensions({}))})});var gs=a((jY,qT)=>{"use strict";var P3=x(),R3=A(),A3=Wr(),N3=$(),ms=W(),M3=te().f,gT=kt(),j3=Za(),hs=mT(),$3=$r(),L3=yT(),bT=!1,Be=$3("meta"),F3=0,ys=function(e){M3(e,Be,{value:{objectID:"O"+F3++,weakData:{}}})},D3=function(e,r){if(!N3(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!ms(e,Be)){if(!hs(e))return"F";if(!r)return"E";ys(e)}return e[Be].objectID},B3=function(e,r){if(!ms(e,Be)){if(!hs(e))return!0;if(!r)return!1;ys(e)}return e[Be].weakData},G3=function(e){return L3&&bT&&hs(e)&&!ms(e,Be)&&ys(e),e},U3=function(){W3.enable=function(){},bT=!0;var e=gT.f,r=R3([].splice),t={};t[Be]=1,e(t).length&&(gT.f=function(n){for(var i=e(n),o=0,u=i.length;o<u;o++)if(i[o]===Be){r(i,o,1);break}return i},P3({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:j3.f}))},W3=qT.exports={enable:U3,fastKey:D3,getWeakData:B3,onFreeze:G3};A3[Be]=!0});var wT=a(($Y,ST)=>{"use strict";var H3=x(),K3=P(),z3=gs(),V3=_(),Y3=Se(),J3=ve(),Q3=ui(),X3=N(),Z3=$(),eB=or(),rB=Ae(),tB=te().f,nB=_t().forEach,iB=G(),xT=Je(),aB=xT.set,oB=xT.getterFor;ST.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,i=e.indexOf("Weak")!==-1,o=n?"set":"add",u=K3[e],l=u&&u.prototype,c={},s;if(!iB||!X3(u)||!(i||l.forEach&&!V3(function(){new u().entries().next()})))s=t.getConstructor(r,e,n,o),z3.enable();else{s=r(function(v,d){aB(Q3(v,f),{type:e,collection:new u}),eB(d)||J3(d,v[o],{that:v,AS_ENTRIES:n})});var f=s.prototype,p=oB(e);nB(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(v){var d=v==="add"||v==="set";v in l&&!(i&&v==="clear")&&Y3(f,v,function(h,m){var y=p(this).collection;if(!d&&i&&!Z3(h))return v==="get"?void 0:!1;var q=y[v](h===0?0:h,m);return d?this:q})}),i||tB(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return rB(s,e,!1,!0),c[e]=s,H3({global:!0,forced:!0},c),i||t.setStrong(s,e,n),s}});var OT=a((LY,TT)=>{"use strict";var uB=Pe();TT.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:uB(e,n,r[n],t);return e}});var RT=a((FY,PT)=>{"use strict";var CT=Qe(),sB=Bn(),ET=OT(),cB=V(),lB=ui(),fB=or(),pB=ve(),vB=Mn(),Di=jn(),dB=Bo(),sn=G(),IT=gs().fastKey,_T=Je(),kT=_T.set,bs=_T.getterFor;PT.exports={getConstructor:function(e,r,t,n){var i=e(function(s,f){lB(s,o),kT(s,{type:r,index:CT(null),first:null,last:null,size:0}),sn||(s.size=0),fB(f)||pB(f,s[n],{that:s,AS_ENTRIES:t})}),o=i.prototype,u=bs(r),l=function(s,f,p){var v=u(s),d=c(s,f),h,m;return d?d.value=p:(v.last=d={index:m=IT(f,!0),key:f,value:p,previous:h=v.last,next:null,removed:!1},v.first||(v.first=d),h&&(h.next=d),sn?v.size++:s.size++,m!=="F"&&(v.index[m]=d)),s},c=function(s,f){var p=u(s),v=IT(f),d;if(v!=="F")return p.index[v];for(d=p.first;d;d=d.next)if(d.key===f)return d};return ET(o,{clear:function(){for(var f=this,p=u(f),v=p.first;v;)v.removed=!0,v.previous&&(v.previous=v.previous.next=null),v=v.next;p.first=p.last=null,p.index=CT(null),sn?p.size=0:f.size=0},delete:function(s){var f=this,p=u(f),v=c(f,s);if(v){var d=v.next,h=v.previous;delete p.index[v.index],v.removed=!0,h&&(h.next=d),d&&(d.previous=h),p.first===v&&(p.first=d),p.last===v&&(p.last=h),sn?p.size--:f.size--}return!!v},forEach:function(f){for(var p=u(this),v=cB(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:p.first;)for(v(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!c(this,f)}}),ET(o,t?{get:function(f){var p=c(this,f);return p&&p.value},set:function(f,p){return l(this,f===0?0:f,p)}}:{add:function(f){return l(this,f=f===0?0:f,f)}}),sn&&sB(o,"size",{configurable:!0,get:function(){return u(this).size}}),i},setStrong:function(e,r,t){var n=r+" Iterator",i=bs(r),o=bs(n);vB(e,r,function(u,l){kT(this,{type:n,target:u,state:i(u),kind:l,last:null})},function(){for(var u=o(this),l=u.kind,c=u.last;c&&c.removed;)c=c.previous;return!u.target||!(u.last=c=c?c.next:u.state.first)?(u.target=null,Di(void 0,!0)):Di(l==="keys"?c.key:l==="values"?c.value:[c.key,c.value],!1)},t?"entries":"values",!t,!0),dB(r)}}});var AT=a(()=>{"use strict";var mB=wT(),hB=RT();mB("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},hB)});var NT=a(()=>{"use strict";AT()});var jT=a((WY,MT)=>{"use strict";MT.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,i){return t[e](n,i)}}});var ae=a((HY,LT)=>{"use strict";var yB=U(),Bi=jT(),$T=yB("Map");LT.exports={Map:$T,set:Bi("set",2),get:Bi("get",1),has:Bi("has",1),remove:Bi("delete",1),proto:$T.prototype}});var qs=a(()=>{"use strict";var gB=x(),bB=A(),qB=F(),xB=ur(),SB=ve(),Gi=ae(),FT=Z(),wB=_(),DT=Gi.Map,TB=Gi.has,OB=Gi.get,CB=Gi.set,EB=bB([].push),IB=FT||wB(function(){return DT.groupBy("ab",function(e){return e}).get("a").length!==1});gB({target:"Map",stat:!0,forced:FT||IB},{groupBy:function(r,t){xB(r),qB(t);var n=new DT,i=0;return SB(r,function(o){var u=t(o,i++);TB(n,u)?EB(OB(n,u),o):CB(n,u,[o])}),n}})});var Y=a((VY,BT)=>{"use strict";var kB=Ve(),_B=TypeError;BT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new _B(kB(e)+" is not a map")}});var Ss=a(()=>{"use strict";var PB=x(),RB=Y(),xs=ae(),AB=Z(),NB=xs.get,MB=xs.has,jB=xs.set;PB({target:"Map",proto:!0,real:!0,forced:AB},{getOrInsert:function(r,t){return MB(RB(this),r)?NB(this,r):(jB(this,r,t),t)}})});var Ts=a(()=>{"use strict";var $B=x(),LB=F(),FB=Y(),ws=ae(),DB=Z(),BB=ws.get,GB=ws.has,UB=ws.set;$B({target:"Map",proto:!0,real:!0,forced:DB},{getOrInsertComputed:function(r,t){if(FB(this),LB(t),GB(this,r))return BB(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return UB(this,r,n),n}})});var UT=a((ZY,GT)=>{"use strict";yr();NT();qs();Ss();Ts();It();vr();var WB=z();GT.exports=WB.Map});var HT=a((eJ,WT)=>{"use strict";var HB=UT();gr();WT.exports=HB});var Os=a(()=>{"use strict";Ss()});var Cs=a(()=>{"use strict";Ts()});var KT=a(()=>{"use strict";qs()});var VT=a((uJ,zT)=>{"use strict";var KB=HT();Os();Cs();KT();zT.exports=KB});var JT=a((sJ,YT)=>{"use strict";var zB=V(),VB=Q(),YB=re(),JB=ve();YT.exports=function(e,r,t){return function(i){var o=YB(i),u=arguments.length,l=u>1?arguments[1]:void 0,c=l!==void 0,s=c?zB(l,u>2?arguments[2]:void 0):void 0,f=new e,p=0;return JB(o,function(v){var d=c?s(v,p++):v;t?r(f,VB(d)[0],d[1]):r(f,d)}),f}}});var XT=a(()=>{"use strict";var QB=x(),QT=ae(),XB=JT();QB({target:"Map",stat:!0,forced:!0},{from:XB(QT.Map,QT.set,!0)})});var eO=a((fJ,ZT)=>{"use strict";var ZB=Q();ZT.exports=function(e,r,t){return function(){for(var i=new e,o=arguments.length,u=0;u<o;u++){var l=arguments[u];t?r(i,ZB(l)[0],l[1]):r(i,l)}return i}}});var tO=a(()=>{"use strict";var e4=x(),rO=ae(),r4=eO();e4({target:"Map",stat:!0,forced:!0},{of:r4(rO.Map,rO.set,!0)})});var iO=a(()=>{"use strict";var t4=x(),n4=D(),i4=ve(),a4=N(),nO=F(),o4=ae().Map;t4({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=a4(this)?this:o4,i=new n;nO(t);var o=nO(i.set);return i4(r,function(u){n4(o,i,t(u),u)}),i}})});var aO=a(()=>{"use strict";var u4=x(),s4=Y(),c4=ae().remove;u4({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=s4(this),t=!0,n,i=0,o=arguments.length;i<o;i++)n=c4(r,arguments[i]),t=t&&n;return!!t}})});var uO=a(()=>{"use strict";var l4=x(),f4=Y(),Es=ae(),p4=Es.get,v4=Es.has,oO=Es.set;l4({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=f4(this),i,o;return v4(n,r)?(i=p4(n,r),"update"in t&&(i=t.update(i,r,n),oO(n,r,i)),i):(o=t.insert(r,n),oO(n,r,o),o)}})});var cO=a((qJ,sO)=>{"use strict";var d4=D();sO.exports=function(e,r,t){for(var n=t?e:e.iterator,i=e.next,o,u;!(o=d4(i,n)).done;)if(u=r(o.value),u!==void 0)return u}});var ye=a((xJ,lO)=>{"use strict";var m4=cO();lO.exports=function(e,r,t){return t?m4(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var fO=a(()=>{"use strict";var h4=x(),y4=V(),g4=Y(),b4=ye();h4({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=g4(this),n=y4(r,arguments.length>1?arguments[1]:void 0);return b4(t,function(i,o){if(!n(i,o,t))return!1},!0)!==!1}})});var vO=a(()=>{"use strict";var q4=x(),x4=V(),S4=Y(),pO=ae(),w4=ye(),T4=pO.Map,O4=pO.set;q4({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=S4(this),n=x4(r,arguments.length>1?arguments[1]:void 0),i=new T4;return w4(t,function(o,u){n(o,u,t)&&O4(i,u,o)}),i}})});var dO=a(()=>{"use strict";var C4=x(),E4=V(),I4=Y(),k4=ye();C4({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=I4(this),n=E4(r,arguments.length>1?arguments[1]:void 0),i=k4(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return i&&i.value}})});var mO=a(()=>{"use strict";var _4=x(),P4=V(),R4=Y(),A4=ye();_4({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=R4(this),n=P4(r,arguments.length>1?arguments[1]:void 0),i=A4(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return i&&i.key}})});var yO=a((_J,hO)=>{"use strict";hO.exports=function(e,r){return e===r||e!==e&&r!==r}});var gO=a(()=>{"use strict";var N4=x(),M4=yO(),j4=Y(),$4=ye();N4({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return $4(j4(this),function(t){if(M4(t,r))return!0},!0)===!0}})});var bO=a(()=>{"use strict";var L4=x(),F4=Y(),D4=ye();L4({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=D4(F4(this),function(n,i){if(n===r)return{key:i}},!0);return t&&t.key}})});var xO=a(()=>{"use strict";var B4=x(),G4=V(),U4=Y(),qO=ae(),W4=ye(),H4=qO.Map,K4=qO.set;B4({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=U4(this),n=G4(r,arguments.length>1?arguments[1]:void 0),i=new H4;return W4(t,function(o,u){K4(i,n(o,u,t),o)}),i}})});var wO=a(()=>{"use strict";var z4=x(),V4=V(),Y4=Y(),SO=ae(),J4=ye(),Q4=SO.Map,X4=SO.set;z4({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=Y4(this),n=V4(r,arguments.length>1?arguments[1]:void 0),i=new Q4;return J4(t,function(o,u){X4(i,u,n(o,u,t))}),i}})});var TO=a(()=>{"use strict";var Z4=x(),eG=Y(),rG=ve(),tG=ae().set;Z4({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=eG(this),n=arguments.length,i=0;i<n;)rG(arguments[i++],function(o,u){tG(t,o,u)},{AS_ENTRIES:!0});return t}})});var OO=a(()=>{"use strict";var nG=x(),iG=F(),aG=Y(),oG=ye(),uG=TypeError;nG({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=aG(this),n=arguments.length<2,i=n?void 0:arguments[1];if(iG(r),oG(t,function(o,u){n?(n=!1,i=o):i=r(i,o,u,t)}),n)throw new uG("Reduce of empty map with no initial value");return i}})});var CO=a(()=>{"use strict";var sG=x(),cG=V(),lG=Y(),fG=ye();sG({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=lG(this),n=cG(r,arguments.length>1?arguments[1]:void 0);return fG(t,function(i,o){if(n(i,o,t))return!0},!0)===!0}})});var IO=a(()=>{"use strict";var pG=x(),EO=F(),vG=Y(),Is=ae(),dG=TypeError,mG=Is.get,hG=Is.has,yG=Is.set;pG({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=vG(this),i=arguments.length;EO(t);var o=hG(n,r);if(!o&&i<3)throw new dG("Updating absent value");var u=o?mG(n,r):EO(i>2?arguments[2]:void 0)(r,n);return yG(n,r,t(u,r,n)),n}})});var _s=a((zJ,kO)=>{"use strict";var Ui=D(),ks=F(),Wi=N(),gG=Q(),bG=TypeError;kO.exports=function(r,t){var n=gG(this),i=ks(n.get),o=ks(n.has),u=ks(n.set),l=arguments.length>2?arguments[2]:void 0,c;if(!Wi(t)&&!Wi(l))throw new bG("At least one callback required");return Ui(o,n,r)?(c=Ui(i,n,r),Wi(t)&&(c=t(c),Ui(u,n,r,c))):Wi(l)&&(c=l(),Ui(u,n,r,c)),c}});var _O=a(()=>{"use strict";var qG=x(),xG=_s();qG({target:"Map",proto:!0,real:!0,forced:!0},{upsert:xG})});var PO=a(()=>{"use strict";var SG=x(),wG=_s();SG({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:wG})});var AO=a((XJ,RO)=>{"use strict";var TG=VT();XT();tO();iO();aO();uO();fO();vO();dO();mO();gO();Os();Cs();bO();xO();wO();TO();OO();CO();IO();_O();PO();RO.exports=TG});var MO=a((ZJ,NO)=>{"use strict";NO.exports=AO()});var $O=a(()=>{"use strict";var OG=x(),CG=ft(),EG=Ra().indexOf,IG=Zu(),Ps=CG([].indexOf),jO=!!Ps&&1/Ps([1],1,-0)<0,kG=jO||!IG("indexOf");OG({target:"Array",proto:!0,forced:kG},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return jO?Ps(this,r,t)||0:EG(this,r,t)}})});var FO=a((tQ,LO)=>{"use strict";$O();var _G=oe();LO.exports=_G("Array","indexOf")});var BO=a((nQ,DO)=>{"use strict";var PG=B(),RG=FO(),Rs=Array.prototype;DO.exports=function(e){var r=e.indexOf;return e===Rs||PG(Rs,e)&&r===Rs.indexOf?RG:r}});var UO=a((iQ,GO)=>{"use strict";var AG=BO();GO.exports=AG});var HO=a((aQ,WO)=>{"use strict";var NG=UO();WO.exports=NG});var zO=a((oQ,KO)=>{"use strict";var MG=HO();KO.exports=MG});var YO=a((uQ,VO)=>{"use strict";VO.exports=zO()});var pC=a(()=>{"use strict";var BG=x(),GG=re(),fC=_n(),UG=_(),WG=UG(function(){fC(1)});BG({target:"Object",stat:!0,forced:WG},{keys:function(r){return fC(GG(r))}})});var dC=a((pX,vC)=>{"use strict";pC();var HG=z();vC.exports=HG.Object.keys});var hC=a((vX,mC)=>{"use strict";var KG=dC();mC.exports=KG});var gC=a((dX,yC)=>{"use strict";var zG=hC();yC.exports=zG});var qC=a((mX,bC)=>{"use strict";var VG=gC();bC.exports=VG});var SC=a((hX,xC)=>{"use strict";xC.exports=qC()});var TC=a((yX,wC)=>{wC.exports=SC()});var Pr="";function Vs(e){Pr=e.replace(/\/+$/,"")}async function ct(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function Ys(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${Pr}/comments?${t}`);return await ct(n,"Failed to fetch comments"),(await n.json()).data}async function Ji({uri:e,document:r,quote:t,prefix:n,suffix:i,body:o,author:u,parent:l}){let c={quote:t,prefix:n,suffix:i,body:o,author:u,parent:l};r?c.document=r:c.uri=e;let s=await fetch(`${Pr}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});return await ct(s,"Failed to create comment"),s.json()}async function Js(e,{body:r}){let t=await fetch(`${Pr}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:r})});return await ct(t,"Failed to update comment"),t.json()}async function Qs(e,r){let t=await fetch(`${Pr}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});return await ct(t,"Failed to update comment status"),t.json()}async function Xs(e){let r=await fetch(`${Pr}/comments/${e}`,{method:"DELETE"});await ct(r,"Failed to delete comment")}var BL=g(Ur(),1),GL=g(Ln(),1),UL=g(ei(),1),WL=g(ri(),1),HL=g(ti(),1);var Cu=g(nt(),1);function zy(e,r,t,n,i,o,u){try{var l=e[o](u),c=l.value}catch(s){return void t(s)}l.done?r(c):Cu.default.resolve(c).then(n,i)}function wr(e){return function(){var r=this,t=arguments;return new Cu.default(function(n,i){var o=e.apply(r,t);function u(c){zy(o,n,i,u,l,"next",c)}function l(c){zy(o,n,i,u,l,"throw",c)}u(void 0)})}}function Ut(e,r){this.v=e,this.k=r}function rr(e){return new Ut(e,0)}var Eu=g(nt(),1),ng=g(we(),1),ig=g(yi(),1);function Oe(e){return function(){return new Wt(e.apply(this,arguments))}}function Wt(e){var r,t;function n(o,u){try{var l=e[o](u),c=l.value,s=c instanceof Ut;Eu.default.resolve(s?c.v:c).then(function(f){if(s){var p=o==="return"?"return":"next";if(!c.k||f.done)return n(p,f);f=e[p](f).value}i(l.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){i("throw",f)}}function i(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new Eu.default(function(l,c){var s={key:o,arg:u,resolve:l,reject:c,next:null};t?t=t.next=s:(r=t=s,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Wt.prototype[typeof ng.default=="function"&&ig.default||"@@asyncIterator"]=function(){return this},Wt.prototype.next=function(e){return this._invoke("next",e)},Wt.prototype.throw=function(e){return this._invoke("throw",e)},Wt.prototype.return=function(e){return this._invoke("return",e)};var KL=g(se(),1),zL=g(Iq(),1);function ce(e){var r,t=FL(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function FL(e){return"startContainer"in e}function nr(e){if(DL(e))return e;var r=e,t=ce(r).createRange();return t.selectNodeContents(r),t}function DL(e){return"startContainer"in e}var Dq=g(Fq(),1);function Bq(e){if((0,Dq.default)(e))return e}var ex=g(we(),1),rx=g(Mo(),1),tx=g(Ju(),1);function nx(e,r){var t=e==null?null:typeof ex.default<"u"&&(0,rx.default)(e)||e["@@iterator"];if(t!=null){var n,i,o,u,l=[],c=!0,s=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&((0,tx.default)(l).call(l,n.value),l.length!==r);c=!0);}catch(f){s=!0,i=f}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(s)throw i}}return l}}var ix=g(Oa(),1),ax=g(Qa(),1);function Ri(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function Qu(e,r){if(e){var t;if(typeof e=="string")return Ri(e,r);var n=(0,ix.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,ax.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ri(e,r):void 0}}function ox(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fe(e,r){return Bq(e)||nx(e,r)||Qu(e,r)||ox()}var ux=g(we(),1),sx=g(yi(),1),cx=g(Xt(),1),tn=g(nt(),1);function at(e){var r,t,n,i=2;for(typeof ux.default<"u"&&(t=sx.default,n=cx.default);i--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Ai(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Ai(e){function r(t){if(Object(t)!==t)return tn.default.reject(new TypeError(t+" is not an object."));var n=t.done;return tn.default.resolve(t.value).then(function(i){return{value:i,done:n}})}return Ai=function(n){this.s=n,this.n=n.next},Ai.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var i=this.s.return;return i===void 0?tn.default.resolve({value:n,done:!0}):r(i.apply(this.s,arguments))},throw:function(n){var i=this.s.return;return i===void 0?tn.default.reject(n):r(i.apply(this.s,arguments))}},new Ai(e)}var qD=g(se(),1);var dD=g(se(),1),mD=g(Tx(),1),hD=g(Cx(),1),yD=g(Vx(),1),gD=g(vS(),1),bD=g(ns(),1);var Ms=g(se(),1);var v3=g(se(),1);var as=g(se(),1);function nn(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function ES(e,r){return nn(e.startChunk,r.startChunk)&&nn(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function Tr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var is=g(zt(),1);var an=g(we(),1),IS=g(Xt(),1);function De(e){"@babel/helpers - typeof";return De=typeof an.default=="function"&&typeof IS.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof an.default=="function"&&r.constructor===an.default&&r!==an.default.prototype?"symbol":typeof r},De(e)}var DS=g(FS(),1);function BS(e,r){if(De(e)!="object"||!e)return e;var t=e[DS.default];if(t!==void 0){var n=t.call(e,r||"default");if(De(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Ni(e){var r=BS(e,"string");return De(r)=="symbol"?r:r+""}function GS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,is.default)(e,Ni(n.key),n)}}function on(e,r,t){return r&&GS(e.prototype,r),t&&GS(e,t),(0,is.default)(e,"prototype",{writable:!1}),e}var US=g(zt(),1);function Or(e,r,t){return(r=Ni(r))in e?(0,US.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var WS=g(Ur(),1);var Mi="Iterator exhausted before seek ended.",un=function(){function e(r){Tr(this,e),this.chunker=r,Or(this,"currentChunkPosition",0),Or(this,"offsetInChunk",0),this.seekTo(0)}return on(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,i)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!nn(this.currentChunk,n);){var p=this._readToPreviousChunk(),v=Fe(p,2),d=v[0],h=v[1];if(t&&(u=d+u),h===null)throw new RangeError(Mi)}else for(;!nn(this.currentChunk,n);){var l=this._readToNextChunk(),c=Fe(l,2),s=c[0],f=c[1];if(t&&(u+=s),f===null)throw new RangeError(Mi)}var m=this.currentChunkPosition+i;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,WS.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var l=this.currentChunkPosition+this.currentChunk.data.length;if(l<=n){var c=this._readToNextChunk(),s=Fe(c,2),f=s[0],p=s[1];if(t&&(u+=f),p===null){if(this.position===n||o)break;throw new RangeError(Mi)}}else{var v=i?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,v)),this.offsetInChunk=v,i&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=i?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var h=this._readToPreviousChunk(),m=Fe(h,2),y=m[0],q=m[1];if(t&&(u=y+u),q===null){if(o)break;throw new RangeError(Mi)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,i=this.chunker.nextChunk();return i!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,i]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function KS(e,r){return os.apply(this,arguments)}function os(){return os=wr(as.default.mark(function e(r,t){var n,i,o,u,l,c,s,f,p,v,d,h,m,y,q,b,I,E,S,T,w,C,j=arguments;return as.default.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:n=j.length>2&&j[2]!==void 0?j[2]:{},i=n.minimalContext,o=i===void 0?!1:i,u=n.minimumQuoteLength,l=u===void 0?0:u,c=n.maxWordLength,s=c===void 0?50:c,f=new un(t()),p=new un(t()),f.seekToChunk(r.startChunk,r.startIndex),v=f.readToChunk(r.endChunk,r.endIndex),d="",h="",m=function(){return d.length+v.length+h.length},m()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),y=Math.floor((l-m())/2),d=f.read(-y,!1,!0)+d,m()<l&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),q=l-m(),h=h+f.read(q,!1,!0),m()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),b=l-m(),d=f.read(-b,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=ji(f,s,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+ji(f,s,!1));case 11:return I={type:"TextQuoteSelector",exact:v,prefix:d,suffix:h},E=$i(I)(t()),k.next=16,E.next();case 16:if(S=k.sent,!(!S.done&&ES(S.value,r))){k.next=21;break}return k.next=20,E.next();case 20:S=k.sent;case 21:if(!S.done){k.next=23;break}return k.abrupt("return",I);case 23:if(T=S.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),p.seekToChunk(T.startChunk,T.startIndex-d.length),w=HS(f,p,!0),w!==void 0&&!o&&(w=ji(f,s,!0)+w),f.seekToChunk(r.endChunk,r.endIndex+h.length),p.seekToChunk(T.endChunk,T.endIndex+h.length),C=HS(f,p,!1),C!==void 0&&!o&&(C=C+ji(f,s,!1)),!o){k.next=44;break}if(!(w!==void 0&&(C===void 0||w.length<=C.length))){k.next=37;break}d=w+d,k.next=42;break;case 37:if(C===void 0){k.next=41;break}h=h+C,k.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:k.next=46;break;case 44:w!==void 0&&(d=w+d),C!==void 0&&(h=h+C);case 46:k.next=11;break;case 48:case"end":return k.stop()}},e)})),os.apply(this,arguments)}function HS(e,r,t){for(var n="";;){var i=void 0;try{i=e.read(t?-1:1)}catch{return}n=t?i+n:n+i;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(i!==o)return n}}function ji(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var i=void 0;try{i=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(OD(i)){e.seekBy(t?1:-1);break}n=t?i+n:n+i}return n}function OD(e){return/^\s+$/.test(e)}var Aw=g(Ur(),1),Nw=g(Ln(),1),Mw=g(ei(),1),jw=g(ri(),1),$w=g(ti(),1);var cs=g(se(),1),Lw=g(mw(),1),Fw=g(_w(),1);function Pw(e,r){var t;if(typeof Mw.default>"u"||(0,jw.default)(e)==null){if(Array.isArray(e)||(t=u3(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(s){throw s},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,l;return{s:function(){t=(0,$w.default)(e)},n:function(){var s=t.next();return o=s.done,s},e:function(s){u=!0,l=s},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw l}}}}function u3(e,r){var t;if(e){if(typeof e=="string")return Rw(e,r);var n=(0,Aw.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,Nw.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rw(e,r)}}function Rw(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function $i(e){return function(){var r=Oe(cs.default.mark(function n(i){var o,u,l,c,s,f,p,v,d,h,m,y,q,b,I,E,S,T,w,C,j,be,k,ee,qe,J,L;return cs.default.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:o=e.exact,u=e.prefix||"",l=e.suffix||"",c=u+o+l,s=[],f=!0;case 6:p=i.currentChunk,v=p.data,d=[],h=Pw(s),O.prev=10,h.s();case 12:if((m=h.n()).done){O.next=27;break}if(y=m.value,q=y.charactersMatched,y.endChunk===void 0&&(b=u.length+o.length-q,b<=v.length&&(y.endChunk=p,y.endIndex=b)),y.startChunk===void 0&&(I=u.length-q,(I<v.length||y.endChunk!==void 0)&&(y.startChunk=p,y.startIndex=I)),E=c.length-q,!(E<=v.length)){O.next=24;break}if(!(0,Lw.default)(v).call(v,c.substring(q))){O.next=22;break}return O.next=22,y;case 22:O.next=25;break;case 24:v===c.substring(q,q+v.length)&&(y.charactersMatched+=v.length,d.push(y));case 25:O.next=12;break;case 27:O.next=32;break;case 29:O.prev=29,O.t0=O.catch(10),h.e(O.t0);case 32:return O.prev=32,h.f(),O.finish(32);case 35:if(s=d,!(c.length<=v.length)){O.next=49;break}S=0;case 38:if(!(S<=v.length)){O.next=49;break}if(T=v.indexOf(c,S),T!==-1){O.next=42;break}return O.abrupt("break",49);case 42:if(S=T+1,!(T===0&&c.length===0&&!f)){O.next=45;break}return O.abrupt("continue",38);case 45:return O.next=47,{startChunk:p,startIndex:T+u.length,endChunk:p,endIndex:T+u.length+o.length};case 47:O.next=38;break;case 49:for(w=[],C=Math.max(v.length-c.length+1,0),j=function(Ke){var Ks=v[Ke];w=(0,Fw.default)(w).call(w,function(ZC){return Ks===c[Ke-ZC]}),Ks===c[0]&&w.push(Ke)},be=C;be<v.length;be++)j(be);k=Pw(w);try{for(k.s();!(ee=k.n()).done;)qe=ee.value,J=v.length-qe,L={charactersMatched:J},J>=u.length+o.length&&(L.endChunk=p,L.endIndex=qe+u.length+o.length),(J>u.length||L.endChunk!==void 0)&&(L.startChunk=p,L.startIndex=qe+u.length),s.push(L)}catch(_r){k.e(_r)}finally{k.f()}f=!1;case 56:if(i.nextChunk()!==null){O.next=6;break}case 57:case"end":return O.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var f3=g(se(),1);var s3=g(Ur(),1),c3=g(ns(),1);var p3=g(se(),1);var ln=g(nT(),1);var aT=g(bi(),1),oT=g(zt(),1);var ps=g(qi(),1),iT=g(Kt(),1);function ir(e,r){var t;return ir=ps.default?(0,iT.default)(t=ps.default).call(t):function(n,i){return n.__proto__=i,n},ir(e,r)}function vs(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,aT.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,oT.default)(e,"prototype",{writable:!1}),r&&ir(e,r)}function uT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function sT(e,r){if(r&&(De(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return uT(e)}var cT=g(qi(),1),lT=g(Kt(),1),ds=g(gi(),1);function Cr(e){var r;return Cr=cT.default?(0,lT.default)(r=ds.default).call(r):function(t){return t.__proto__||(0,ds.default)(t)},Cr(e)}var Ns=g(MO(),1),nC=g(bi(),1);var JO=g(YO(),1);function QO(e){try{var r;return(0,JO.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var ZO=g(Li(),1),eC=g(Ju(),1),rC=g(Kt(),1);var XO=g(Li(),1);function As(){try{var e=!Boolean.prototype.valueOf.call((0,XO.default)(Boolean,[],function(){}))}catch{}return(As=function(){return!!e})()}function tC(e,r,t){if(As())return ZO.default.apply(null,arguments);var n=[null];(0,eC.default)(n).apply(n,r);var i=new((0,rC.default)(e).apply(e,n));return t&&ir(i,t.prototype),i}function cn(e){var r=typeof Ns.default=="function"?new Ns.default:void 0;return cn=function(n){if(n===null||!QO(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,i)}function i(){return tC(n,arguments,Cr(this).constructor)}return i.prototype=(0,nC.default)(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),ir(i,n)},cn(e)}function oC(e,r){var t=ce(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i=iC(e.startContainer,e.startOffset),o=Fe(i,2),u=o[0],l=o[1];for(n.currentNode=u;l===u.length&&n.nextNode();)u=n.currentNode,l=0;e.setStart(u,l);var c=iC(e.endContainer,e.endOffset),s=Fe(c,2),f=s[0],p=s[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function iC(e,r){var t;if(aC(e))return[e,r];var n;if(jG(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(aC(n))return[n,0];var i=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=i.createTreeWalker(i,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function aC(e){return e.nodeType===Node.TEXT_NODE}function jG(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function sC(e){var r=$G();return function(){var n=Cr(e),i;if(r){var o=Cr(this).constructor;i=(0,ln.default)(n,arguments,o)}else i=n.apply(this,arguments);return sT(this,i)}}function $G(){if(typeof Reflect>"u"||!ln.default||ln.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,ln.default)(Boolean,[],function(){})),!0}catch{return!1}}var Hi=function(e){vs(t,e);var r=sC(t);function t(n){return Tr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(cn(TypeError)),LG=function(e){vs(t,e);var r=sC(t);function t(n){return Tr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(cn(TypeError)),Er=function(){function e(r){var t=this;if(Tr(this,e),Or(this,"scope",void 0),Or(this,"iter",void 0),this.scope=nr(r),this.iter=ce(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!uC(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Hi}}return on(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!uC(t))throw new Hi;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new LG;var n=t===this.scope.startContainer?this.scope.startOffset:0,i=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:i,data:t.data.substring(n,i),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=oC(t,this.scope),i=this.nodeToChunk(n.startContainer),o=n.startOffset-i.startOffset,u=this.nodeToChunk(n.endContainer),l=n.endOffset-u.startOffset;return{startChunk:i,startIndex:o,endChunk:u,endIndex:l}}},{key:"chunkRangeToRange",value:function(t){var n=ce(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function uC(e){return e.nodeType===Node.TEXT_NODE}function cC(e,r){return js.apply(this,arguments)}function js(){return js=wr(Ms.default.mark(function e(r,t){var n,i,o,u=arguments;return Ms.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},i=nr(t??ce(r)),o=new Er(i),c.next=5,KS(o.rangeToChunkRange(r),function(){return new Er(i)},n);case 5:return c.abrupt("return",c.sent);case 6:case"end":return c.stop()}},e)})),js.apply(this,arguments)}var $s=g(se(),1);function lC(e){var r=$i(e);return function(){var t=Oe($s.default.mark(function i(o){var u,l,c,s,f,p,v,d;return $s.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new Er(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof Hi)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:l=!0,c=!1,m.prev=13,f=at(r(u));case 15:return m.next=17,rr(f.next());case 17:return p=m.sent,l=p.done,m.next=21,rr(p.value);case 21:if(v=m.sent,l){m.next=29;break}return d=v,m.next=26,u.chunkRangeToRange(d);case 26:l=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),c=!0,s=m.t1;case 35:if(m.prev=35,m.prev=36,!(!l&&f.return!=null)){m.next=40;break}return m.next=40,rr(f.return());case 40:if(m.prev=40,!c){m.next=43;break}throw s;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},i,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(i){return t.apply(this,arguments)}return n}()}var FG=g(se(),1);var DG=g(se(),1);var YG=g(TC(),1),JG=g(Ur(),1),QG=g(Ln(),1),XG=g(ei(),1),ZG=g(ri(),1),eU=g(ti(),1);async function OC(e,r){let t=await cC(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function fn(e,r){let t=lC({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var ot="fb-highlight",CC="fb-highlight-active";var pn=null;function IC(e){pn=e}function vn(e,r){let t=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let n=EC(e,r);t.push(n)}else{let n=tU(e);for(let i=0;i<n.length;i++){let o=n[i],u=document.createRange();o===e.startContainer?(u.setStart(o,e.startOffset),u.setEnd(o,o.textContent.length)):o===e.endContainer?(u.setStart(o,0),u.setEnd(o,e.endOffset)):u.selectNodeContents(o),u.collapsed||t.push(EC(u,r))}}return t}function EC(e,r){let t=e.commonAncestorContainer;for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;let n=t,i=!1,o=null;for(;n;){if(n.tagName==="foreignObject"){i=!1;break}n.tagName==="text"&&n instanceof SVGElement&&(i=!0),n.tagName==="svg"&&(o=n),n=n.parentElement}if(i&&o)return rU(e,r,o);let u=document.createElement("mark");u.className=ot,u.dataset.commentId=r,u.style.backgroundColor="rgba(255, 212, 0, 0.35)",u.style.cursor="pointer",u.style.borderRadius="2px",u.addEventListener("click",()=>{pn&&pn(r)});try{e.surroundContents(u)}catch(l){return console.warn("[feedback-layer] Failed to create highlight:",l),null}return u}function rU(e,r,t){try{let n=e.getClientRects();if(n.length===0)return null;let i="http://www.w3.org/2000/svg",o=t.getScreenCTM();if(!o)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let u=e.commonAncestorContainer;for(;u&&u.nodeType!==Node.ELEMENT_NODE;)u=u.parentNode;let l=u,c=null;for(;l&&l!==t;){if(l.tagName==="text"){c=l.parentElement;break}l=l.parentElement}let s=c||t,f=o;s!==t&&s.getScreenCTM&&(f=s.getScreenCTM());let p=document.createElementNS(i,"g");p.setAttribute("class",ot),p.setAttribute("data-comment-id",r),p.style.cursor="pointer";for(let y=0;y<n.length;y++){let q=n[y],b=document.createElementNS(i,"rect"),I=t.createSVGPoint();I.x=q.left,I.y=q.top;let E=I.matrixTransform(f.inverse()),S=q.width/f.a,T=q.height/f.d;b.setAttribute("x",E.x),b.setAttribute("y",E.y),b.setAttribute("width",S),b.setAttribute("height",T),b.setAttribute("fill","#ffd400"),b.setAttribute("fill-opacity","0.35"),b.setAttribute("rx","2"),b.setAttribute("ry","2"),b.style.pointerEvents="none",p.appendChild(b)}s&&s!==t?s.appendChild(p):t.appendChild(p);let v=e.commonAncestorContainer;for(;v&&v.nodeType!==Node.ELEMENT_NODE;)v=v.parentNode;let d=new Set,h=v;for(;h&&h!==t;)h.tagName==="text"&&h instanceof SVGElement&&(d.add(h),h.querySelectorAll("tspan").forEach(q=>d.add(q))),h=h.parentElement;let m=y=>{y.preventDefault(),y.stopPropagation(),pn&&pn(r)};return d.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",m),y.dataset.fbCommentId=r}),p}catch(n){return console.warn("[feedback-layer] Failed to create SVG highlight:",n),null}}function Ls(e){document.querySelectorAll(`.${ot}[data-comment-id="${e}"]`).forEach(n=>{let i=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)i.removeChild(n);else{for(;n.firstChild;)i.insertBefore(n.firstChild,n);i.removeChild(n),i.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function kC(){document.querySelectorAll(`.${ot}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function Ki(e){document.querySelectorAll(`.${ot}`).forEach(r=>{let t=r.dataset.commentId===e,n="rgba(255, 180, 0, 0.55)",i="rgba(255, 212, 0, 0.35)";t?r.classList.add(CC):r.classList.remove(CC),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(u=>{u.setAttribute("fill",t?n:i)}):r.style.backgroundColor=t?n:i})}function _C(e){let r=document.querySelector(`.${ot}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function tU(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let i=document.createRange();return i.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,i)<0&&e.compareBoundaryPoints(Range.START_TO_END,i)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function PC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,i)=>{let o=[`**${i+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let l of u)o.push(`  - **[${l.author}]** (reply): ${l.body}`);return o.join(`
`)}).join(`

`)}function RC(e,r){let t=PC(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(i=>!i.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function Ge(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var nU=`
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
`,AC=null,NC=null;function MC(e,r){NC=e,AC=r,iU()}function iU(){let e=document.createElement("style");e.textContent=nU,document.head.appendChild(e)}function jC(){let e=AC(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let i=document.createElement("button");i.className="hf-modal-close",i.textContent="\xD7",i.addEventListener("click",()=>r.remove()),n.appendChild(i);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",p=>{p.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let l=document.querySelector(NC.contentSelector||"body").innerHTML,c=RC(l,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${c.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${Ge(c)}</textarea>
  `;let s=document.createElement("button");s.className="hf-btn hf-btn-primary",s.textContent="Copy Prompt",s.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c),s.textContent="Copied!"}catch{s.textContent="Copy failed"}setTimeout(()=>s.textContent="Copy Prompt",2e3)}),u.appendChild(s);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function aU(e){let r=e.replace(/[\t\n\r]/g,"").trim();return!/^\s*(javascript|data|vbscript)\s*:/i.test(r)}function Fs(e){if(!e)return"";let r=Ge(e),t=[];return r=r.replace(/`([^`]+?)`/g,(n,i)=>{let o=t.length;return t.push(`<code>${i}</code>`),`${o}`}),r=r.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),r=r.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g,"<em>$1</em>"),r=r.replace(/\[([^\]]+?)\]\(((?:[^()]*|\([^()]*\))*)\)/g,(n,i,o)=>{let u=o.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return aU(u)?`<a href="${o}" rel="noopener noreferrer" target="_blank">${i}</a>`:i}),r=r.replace(/\x01(\d+)\x02/g,(n,i)=>t[i]),r}function $C(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function LC(e,r){return e.length>r?e.slice(0,r)+"...":e}function FC(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var dn=null;function BC(e){dn=document.createElement("div"),dn.className="fb-toast-container",e.appendChild(dn)}function Ir(e,r="success"){if(!dn)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>DC(t)),t.appendChild(o)}dn.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>DC(t),r==="error"?8e3:4e3)}function DC(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}var oU=320,UC="feedback-layer-commenter",X=null,We=null,Ue=null,Ds=null,WC=null,Bs=null,Gs=null,Us=null,Ws=null,Hs=!1,HC=[],KC=new Set;function ut(){return localStorage.getItem(UC)||""}function zC({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:i}){WC=e,Bs=r,Gs=t,Us=n,Ws=i,lU(),X=document.createElement("div"),X.className="fb-sidebar fb-sidebar-collapsed",X.innerHTML=`
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
               value="${Ge(ut())}">
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
  `;let o=document.createElement("button");o.className="fb-sidebar-tab",o.textContent="Feedback",o.addEventListener("click",()=>mn()),document.body.appendChild(o),document.body.appendChild(X),BC(X),We=X.querySelector(".fb-comment-list"),Ue=X.querySelector(".fb-form-section");let u=X.querySelector(".fb-name-input");u.addEventListener("input",()=>{localStorage.setItem(UC,u.value.trim())}),X.querySelector(".fb-ai-btn").addEventListener("click",()=>jC()),X.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>uU());let s=X.querySelector(".fb-show-resolved-cb");s.addEventListener("change",()=>{Hs=s.checked,He(HC,KC)})}function mn(){X.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden")}function uU(){X.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden")}function VC(e){if(mn(),!ut()){let n=X.querySelector(".fb-name-input");n.style.outline="2px solid #ef4444",setTimeout(()=>n.style.outline="",2e3)}Ds=e,Ue.style.display="",Ue.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${Ge(LC(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-fmt-hints">**bold** *italic* \`code\` [link](url)</div>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `;let r=Ue.querySelector(".fb-form-textarea");r.focus();let t=()=>{if(!ut()){let i=X.querySelector(".fb-name-input");i.focus(),i.style.outline="2px solid #ef4444",setTimeout(()=>i.style.outline="",2e3);return}let n=r.value.trim();n&&(WC({comment:n,commenter:ut()}),Ue.style.display="none",Ds=null)};Ue.querySelector(".fb-submit-btn").addEventListener("click",t),r.addEventListener("keydown",n=>{n.key==="Enter"&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),t())}),Ue.querySelector(".fb-cancel-btn").addEventListener("click",()=>{Ue.style.display="none",Ds=null}),Ue.scrollIntoView({behavior:"smooth",block:"nearest"})}function He(e,r=new Set,t=new Map){HC=e,KC=r,We.innerHTML="";let{topLevel:n,repliesByParent:i}=$C(e),o=n.slice().sort((s,f)=>{let p=t.get(s.id),v=t.get(f.id);return!p||!v?0:p.compareBoundaryPoints(Range.START_TO_START,v)}),u=o.filter(s=>{let f=r.has(s.id),p=s.status==="closed";return f||p&&Hs}),l=Hs?u:u.filter(s=>s.status!=="closed");if(o.length===0){We.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let c=o.filter(s=>!r.has(s.id)&&s.status!=="closed").length;if(l.length===0){c>0?We.innerHTML=`<div class="fb-empty">
        ${u.length} comment(s) resolved.
        ${c>0?`<br>${c} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:We.innerHTML=`<div class="fb-empty">All ${o.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let s of l){let f=document.createElement("div");f.className="fb-thread",f.appendChild(GC(s,!1));let p=i.get(s.id)||[];for(let d of p)f.appendChild(GC(d,!0));let v=document.createElement("button");v.className="fb-reply-btn",v.textContent="Reply",v.addEventListener("click",d=>{d.stopPropagation(),sU(s.id,f,v)}),f.appendChild(v),We.appendChild(f)}}function GC(e,r){let t=e.status==="closed",n=document.createElement("div");return n.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":""),n.dataset.id=e.id,n.innerHTML=`
    <div class="fb-cmt-body">${Fs(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${Ge(e.author)}</span>
      <span class="fb-cmt-time">${FC(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
  `,r||(n.addEventListener("click",i=>{i.target.closest(".fb-cmt-delete")||i.target.closest(".fb-cmt-resolve")||i.target.closest(".fb-cmt-edit")||(Ki(e.id),_C(e.id),We.querySelectorAll(".fb-cmt-card").forEach(o=>o.classList.remove("fb-cmt-active")),n.classList.add("fb-cmt-active"))}),n.querySelector(".fb-cmt-resolve").addEventListener("click",i=>{i.stopPropagation(),Gs&&Gs(e.id,!t)})),n.querySelector(".fb-cmt-edit").addEventListener("click",i=>{i.stopPropagation(),cU(e,n)}),n.querySelector(".fb-cmt-delete").addEventListener("click",i=>{i.stopPropagation(),Bs&&Bs(e.id)}),n}function sU(e,r,t){mn();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let i=document.createElement("div");i.className="fb-reply-form",i.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-fmt-hints">**bold** *italic* \`code\` [link](url)</div>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!ut()){let c=X.querySelector(".fb-name-input");c.focus(),c.style.outline="2px solid #ef4444",setTimeout(()=>c.style.outline="",2e3);return}let l=i.querySelector("textarea").value.trim();l&&(Us&&Us({parent_id:e,comment:l,commenter:ut()}),i.remove(),t.style.display="")};i.querySelector(".fb-reply-submit").addEventListener("click",o);let u=i.querySelector("textarea");u.addEventListener("keydown",l=>{l.key==="Enter"&&(l.metaKey||l.ctrlKey)&&(l.preventDefault(),o())}),i.querySelector(".fb-reply-cancel").addEventListener("click",()=>{i.remove(),t.style.display=""}),r.insertBefore(i,t),u.focus()}function cU(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${Ge(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let i=t.querySelector("textarea");i.focus(),i.setSelectionRange(i.value.length,i.value.length);let o=()=>{let u=i.value.trim();u&&Ws&&Ws(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),i.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.innerHTML=Fs(n)})}function YC(e){let r=We.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(We.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function lU(){let e=document.createElement("style");e.textContent=`
    .fb-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: ${oU}px;
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
    .fb-cmt-body code {
      background: #f3f4f6;
      padding: 1px 4px;
      border-radius: 3px;
      font-size: 12px;
      font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;
    }
    .fb-cmt-body a {
      color: #7c3aed;
      text-decoration: underline;
    }
    .fb-cmt-body a:hover {
      color: #6d28d9;
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
    .fb-fmt-hints {
      font-size: 11px;
      color: #aaa;
      margin-top: 4px;
      font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;
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
  `,document.head.appendChild(e)}function JC(){let e=new Map;return{add(r,t){e.set(r.id,{comment:r,selector:t,attempts:0})},remove(r){e.delete(r)},hasPending(){return e.size>0},getAll(){return Array.from(e.values())},recordAttempt(r){let t=e.get(r);return t?(t.attempts+=1,t.attempts>=10?(e.delete(r),!1):!0):!1},clear(){e.clear()},size(){return e.size}}}var ar=null,Vi=null,Yi=null,K=[],kr=null,Ee=null,le=new Set,ge=new Map,Ie=JC(),st=null,zi=null;function fU(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null};Vs(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{ar=document.querySelector(r.contentSelector)||document.body,Vi=r.documentUri||window.location.origin+window.location.pathname,Yi=r.documentId||null,zC({onSubmit:gU,onDelete:SU,onResolve:bU,onReply:qU,onEdit:xU}),IC(i=>{mn(),YC(i),Ki(i)}),hU(),await t(),pU(),MC(r,()=>K)}catch(i){console.error("[feedback-layer] Boot failed:",i)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function pU(){try{K=await Ys(Vi,Yi),le=await vU(K),He(K,le,ge)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),Ir(`Failed to load comments: ${e.message}`,"error")}}async function vU(e){kC(),XC(),Ie.clear();let r=new Set;ge.clear();for(let t of e){if(t.parent)continue;let n={exact:t.quote,prefix:t.prefix,suffix:t.suffix};try{let i=await fn(n,ar);i&&t.status!=="closed"?(vn(i,t.id),r.add(t.id),ge.set(t.id,i)):i&&t.status==="closed"?(r.add(t.id),ge.set(t.id,i)):i||Ie.add(t,n)}catch(i){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,i),Ie.add(t,n)}}return Ie.hasPending()&&(console.log(`[feedback-layer] ${Ie.size()} comment(s) queued for deferred anchoring`),dU()),r}function dU(){st||(st=new MutationObserver(()=>{clearTimeout(zi),zi=setTimeout(mU,500)}),st.observe(ar,{childList:!0,subtree:!0}))}function XC(){st&&(st.disconnect(),st=null),clearTimeout(zi),zi=null}async function mU(){let e=Ie.getAll(),r=!1;for(let{comment:t,selector:n}of e)try{let i=await fn(n,ar);i?(Ie.remove(t.id),t.status!=="closed"&&vn(i,t.id),le.add(t.id),ge.set(t.id,i),r=!0,console.log(`[feedback-layer] Deferred anchor succeeded for comment ${t.id}`)):Ie.recordAttempt(t.id)||console.warn(`[feedback-layer] Gave up anchoring comment ${t.id} after max attempts`)}catch(i){console.warn(`[feedback-layer] Deferred anchor error for ${t.id}:`,i),Ie.recordAttempt(t.id)}r&&He(K,le,ge),Ie.hasPending()||XC()}function hU(){document.addEventListener("mouseup",QC),document.addEventListener("keyup",QC)}function QC(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){hn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){hn();return}if(!ar.contains(r.commonAncestorContainer)){hn();return}yU(r)},10)}function yU(e){hn();let r=e.getBoundingClientRect();Ee=document.createElement("button"),Ee.className="fb-annotate-tooltip",Ee.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',Ee.style.top=window.scrollY+r.top-36+"px",Ee.style.left=window.scrollX+r.left+r.width/2-40+"px",Ee.addEventListener("mousedown",async t=>{t.preventDefault(),t.stopPropagation();let n=window.getSelection();if(!n||n.isCollapsed)return;let i=n.getRangeAt(0);try{kr=await OC(i,ar),VC(kr.exact)}catch(o){console.error("[feedback-layer] Failed to create selector:",o)}hn()}),document.body.appendChild(Ee)}function hn(){Ee&&(Ee.remove(),Ee=null)}async function gU({comment:e,commenter:r}){if(kr){try{let t=await Ji({uri:Vi,document:Yi,quote:kr.exact,prefix:kr.prefix,suffix:kr.suffix,body:e,author:r});K.push(t);let n=await fn({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ar);n&&(vn(n,t.id),le.add(t.id)),He(K,le,ge),window.getSelection().removeAllRanges()}catch(t){console.error("[feedback-layer] Failed to create comment:",t),Ir(`Failed to save comment: ${t.message}`,"error")}kr=null}}async function bU(e,r){try{let n=await Qs(e,r?"closed":"open"),i=K.findIndex(o=>o.id===e);if(i!==-1&&(K[i]=n),r)Ls(e);else{let o=n,u=await fn({exact:o.quote,prefix:o.prefix,suffix:o.suffix},ar);u?(vn(u,o.id),le.add(o.id)):le.delete(o.id)}He(K,le,ge)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),Ir(`Failed to update comment: ${t.message}`,"error")}}async function qU({parent_id:e,comment:r,commenter:t}){try{let n=await Ji({uri:Vi,document:Yi,body:r,author:t,parent:e});K.push(n),He(K,le,ge)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),Ir(`Failed to save reply: ${n.message}`,"error")}}async function xU(e,r){try{let t=await Js(e,{body:r}),n=K.findIndex(i=>i.id===e);n!==-1&&(K[n]=t),He(K,le,ge)}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),Ir(`Failed to update comment: ${t.message}`,"error")}}async function SU(e){try{await Xs(e),Ls(e),le.delete(e),K=K.filter(r=>r.id!==e&&r.parent!==e),He(K,le,ge)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),Ir(`Failed to delete comment: ${r.message}`,"error")}}try{fU()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
