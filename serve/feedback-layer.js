var FeedbackLayer=(()=>{var YC=Object.create;var Ws=Object.defineProperty;var JC=Object.getOwnPropertyDescriptor;var QC=Object.getOwnPropertyNames;var XC=Object.getPrototypeOf,ZC=Object.prototype.hasOwnProperty;var i=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var eE=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of QC(r))!ZC.call(e,a)&&a!==t&&Ws(e,a,{get:()=>r[a],enumerable:!(n=JC(r,a))||n.enumerable});return e};var g=(e,r,t)=>(t=e!=null?YC(XC(e)):{},eE(r||!e||!e.__esModule?Ws(t,"default",{value:e,enumerable:!0}):t,e));var P=i((g5,Js)=>{"use strict";Js.exports=function(e){try{return!!e()}catch{return!0}}});var Pr=i((b5,Qs)=>{"use strict";var rE=P();Qs.exports=!rE(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var A=i((q5,ec)=>{"use strict";var Xs=Pr(),Zs=Function.prototype,Va=Zs.call,tE=Xs&&Zs.bind.bind(Va,Va);ec.exports=Xs?tE:function(e){return function(){return Va.apply(e,arguments)}}});var B=i((x5,rc)=>{"use strict";var nE=A();rc.exports=nE({}.isPrototypeOf)});var _=i((Ya,tc)=>{"use strict";var st=function(e){return e&&e.Math===Math&&e};tc.exports=st(typeof globalThis=="object"&&globalThis)||st(typeof window=="object"&&window)||st(typeof self=="object"&&self)||st(typeof global=="object"&&global)||st(typeof Ya=="object"&&Ya)||function(){return this}()||Function("return this")()});var _r=i((S5,oc)=>{"use strict";var aE=Pr(),ic=Function.prototype,nc=ic.apply,ac=ic.call;oc.exports=typeof Reflect=="object"&&Reflect.apply||(aE?ac.bind(nc):function(){return ac.apply(nc,arguments)})});var xe=i((w5,sc)=>{"use strict";var uc=A(),iE=uc({}.toString),oE=uc("".slice);sc.exports=function(e){return oE(iE(e),8,-1)}});var ct=i((T5,cc)=>{"use strict";var uE=xe(),sE=A();cc.exports=function(e){if(uE(e)==="Function")return sE(e)}});var N=i((O5,lc)=>{"use strict";var Ja=typeof document=="object"&&document.all;lc.exports=typeof Ja>"u"&&Ja!==void 0?function(e){return typeof e=="function"||e===Ja}:function(e){return typeof e=="function"}});var G=i((C5,fc)=>{"use strict";var cE=P();fc.exports=!cE(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var D=i((E5,vc)=>{"use strict";var lE=Pr(),pn=Function.prototype.call;vc.exports=lE?pn.bind(pn):function(){return pn.apply(pn,arguments)}});var Qa=i(mc=>{"use strict";var pc={}.propertyIsEnumerable,dc=Object.getOwnPropertyDescriptor,fE=dc&&!pc.call({1:2},1);mc.f=fE?function(r){var t=dc(this,r);return!!t&&t.enumerable}:pc});var We=i((k5,hc)=>{"use strict";hc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var dn=i((P5,yc)=>{"use strict";var vE=A(),pE=P(),dE=xe(),Xa=Object,mE=vE("".split);yc.exports=pE(function(){return!Xa("z").propertyIsEnumerable(0)})?function(e){return dE(e)==="String"?mE(e,""):Xa(e)}:Xa});var ar=i((_5,gc)=>{"use strict";gc.exports=function(e){return e==null}});var ir=i((R5,bc)=>{"use strict";var hE=ar(),yE=TypeError;bc.exports=function(e){if(hE(e))throw new yE("Can't call method on "+e);return e}});var Ee=i((A5,qc)=>{"use strict";var gE=dn(),bE=ir();qc.exports=function(e){return gE(bE(e))}});var $=i((N5,xc)=>{"use strict";var qE=N();xc.exports=function(e){return typeof e=="object"?e!==null:qE(e)}});var K=i((M5,Sc)=>{"use strict";Sc.exports={}});var U=i((j5,Tc)=>{"use strict";var Za=K(),ei=_(),xE=N(),wc=function(e){return xE(e)?e:void 0};Tc.exports=function(e,r){return arguments.length<2?wc(Za[e])||wc(ei[e]):Za[e]&&Za[e][r]||ei[e]&&ei[e][r]}});var Rr=i(($5,Ec)=>{"use strict";var SE=_(),Oc=SE.navigator,Cc=Oc&&Oc.userAgent;Ec.exports=Cc?String(Cc):""});var Ar=i((L5,Ac)=>{"use strict";var Rc=_(),ri=Rr(),Ic=Rc.process,kc=Rc.Deno,Pc=Ic&&Ic.versions||kc&&kc.version,_c=Pc&&Pc.v8,de,mn;_c&&(de=_c.split("."),mn=de[0]>0&&de[0]<4?1:+(de[0]+de[1]));!mn&&ri&&(de=ri.match(/Edge\/(\d+)/),(!de||de[1]>=74)&&(de=ri.match(/Chrome\/(\d+)/),de&&(mn=+de[1])));Ac.exports=mn});var or=i((F5,Mc)=>{"use strict";var Nc=Ar(),wE=P(),TE=_(),OE=TE.String;Mc.exports=!!Object.getOwnPropertySymbols&&!wE(function(){var e=Symbol("symbol detection");return!OE(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Nc&&Nc<41})});var ti=i((D5,jc)=>{"use strict";var CE=or();jc.exports=CE&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Nr=i((B5,$c)=>{"use strict";var EE=U(),IE=N(),kE=B(),PE=ti(),_E=Object;$c.exports=PE?function(e){return typeof e=="symbol"}:function(e){var r=EE("Symbol");return IE(r)&&kE(r.prototype,_E(e))}});var He=i((G5,Lc)=>{"use strict";var RE=String;Lc.exports=function(e){try{return RE(e)}catch{return"Object"}}});var F=i((U5,Fc)=>{"use strict";var AE=N(),NE=He(),ME=TypeError;Fc.exports=function(e){if(AE(e))return e;throw new ME(NE(e)+" is not a function")}});var hn=i((W5,Dc)=>{"use strict";var jE=F(),$E=ar();Dc.exports=function(e,r){var t=e[r];return $E(t)?void 0:jE(t)}});var Gc=i((H5,Bc)=>{"use strict";var ni=D(),ai=N(),ii=$(),LE=TypeError;Bc.exports=function(e,r){var t,n;if(r==="string"&&ai(t=e.toString)&&!ii(n=ni(t,e))||ai(t=e.valueOf)&&!ii(n=ni(t,e))||r!=="string"&&ai(t=e.toString)&&!ii(n=ni(t,e)))return n;throw new LE("Can't convert object to primitive value")}});var Z=i((K5,Uc)=>{"use strict";Uc.exports=!0});var Kc=i((z5,Hc)=>{"use strict";var Wc=_(),FE=Object.defineProperty;Hc.exports=function(e,r){try{FE(Wc,e,{value:r,configurable:!0,writable:!0})}catch{Wc[e]=r}return r}});var lt=i((V5,Yc)=>{"use strict";var DE=Z(),BE=_(),GE=Kc(),zc="__core-js_shared__",Vc=Yc.exports=BE[zc]||GE(zc,{});(Vc.versions||(Vc.versions=[])).push({version:"3.48.0",mode:DE?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var ur=i((Y5,Qc)=>{"use strict";var Jc=lt();Qc.exports=function(e,r){return Jc[e]||(Jc[e]=r||{})}});var re=i((J5,Xc)=>{"use strict";var UE=ir(),WE=Object;Xc.exports=function(e){return WE(UE(e))}});var W=i((Q5,Zc)=>{"use strict";var HE=A(),KE=re(),zE=HE({}.hasOwnProperty);Zc.exports=Object.hasOwn||function(r,t){return zE(KE(r),t)}});var Mr=i((X5,el)=>{"use strict";var VE=A(),YE=0,JE=Math.random(),QE=VE(1.1.toString);el.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+QE(++YE+JE,36)}});var R=i((Z5,tl)=>{"use strict";var XE=_(),ZE=ur(),rl=W(),e0=Mr(),r0=or(),t0=ti(),jr=XE.Symbol,oi=ZE("wks"),n0=t0?jr.for||jr:jr&&jr.withoutSetter||e0;tl.exports=function(e){return rl(oi,e)||(oi[e]=r0&&rl(jr,e)?jr[e]:n0("Symbol."+e)),oi[e]}});var ol=i((e8,il)=>{"use strict";var a0=D(),nl=$(),al=Nr(),i0=hn(),o0=Gc(),u0=R(),s0=TypeError,c0=u0("toPrimitive");il.exports=function(e,r){if(!nl(e)||al(e))return e;var t=i0(e,c0),n;if(t){if(r===void 0&&(r="default"),n=a0(t,e,r),!nl(n)||al(n))return n;throw new s0("Can't convert object to primitive value")}return r===void 0&&(r="number"),o0(e,r)}});var yn=i((r8,ul)=>{"use strict";var l0=ol(),f0=Nr();ul.exports=function(e){var r=l0(e,"string");return f0(r)?r:r+""}});var gn=i((t8,cl)=>{"use strict";var v0=_(),sl=$(),ui=v0.document,p0=sl(ui)&&sl(ui.createElement);cl.exports=function(e){return p0?ui.createElement(e):{}}});var si=i((n8,ll)=>{"use strict";var d0=G(),m0=P(),h0=gn();ll.exports=!d0&&!m0(function(){return Object.defineProperty(h0("div"),"a",{get:function(){return 7}}).a!==7})});var ft=i(vl=>{"use strict";var y0=G(),g0=D(),b0=Qa(),q0=We(),x0=Ee(),S0=yn(),w0=W(),T0=si(),fl=Object.getOwnPropertyDescriptor;vl.f=y0?fl:function(r,t){if(r=x0(r),t=S0(t),T0)try{return fl(r,t)}catch{}if(w0(r,t))return q0(!g0(b0.f,r,t),r[t])}});var ci=i((i8,pl)=>{"use strict";var O0=P(),C0=N(),E0=/#|\.prototype\./,vt=function(e,r){var t=k0[I0(e)];return t===_0?!0:t===P0?!1:C0(r)?O0(r):!!r},I0=vt.normalize=function(e){return String(e).replace(E0,".").toLowerCase()},k0=vt.data={},P0=vt.NATIVE="N",_0=vt.POLYFILL="P";pl.exports=vt});var z=i((o8,ml)=>{"use strict";var dl=ct(),R0=F(),A0=Pr(),N0=dl(dl.bind);ml.exports=function(e,r){return R0(e),r===void 0?e:A0?N0(e,r):function(){return e.apply(r,arguments)}}});var li=i((u8,hl)=>{"use strict";var M0=G(),j0=P();hl.exports=M0&&j0(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var Q=i((s8,yl)=>{"use strict";var $0=$(),L0=String,F0=TypeError;yl.exports=function(e){if($0(e))return e;throw new F0(L0(e)+" is not an object")}});var te=i(bl=>{"use strict";var D0=G(),B0=si(),G0=li(),bn=Q(),gl=yn(),U0=TypeError,fi=Object.defineProperty,W0=Object.getOwnPropertyDescriptor,vi="enumerable",pi="configurable",di="writable";bl.f=D0?G0?function(r,t,n){if(bn(r),t=gl(t),bn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&di in n&&!n[di]){var a=W0(r,t);a&&a[di]&&(r[t]=n.value,n={configurable:pi in n?n[pi]:a[pi],enumerable:vi in n?n[vi]:a[vi],writable:!1})}return fi(r,t,n)}:fi:function(r,t,n){if(bn(r),t=gl(t),bn(n),B0)try{return fi(r,t,n)}catch{}if("get"in n||"set"in n)throw new U0("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var Se=i((l8,ql)=>{"use strict";var H0=G(),K0=te(),z0=We();ql.exports=H0?function(e,r,t){return K0.f(e,r,z0(1,t))}:function(e,r,t){return e[r]=t,e}});var x=i((f8,Sl)=>{"use strict";var pt=_(),V0=_r(),Y0=ct(),J0=N(),Q0=ft().f,X0=ci(),$r=K(),Z0=z(),Lr=Se(),xl=W();lt();var eI=function(e){var r=function(t,n,a){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,a)}return V0(e,this,arguments)};return r.prototype=e.prototype,r};Sl.exports=function(e,r){var t=e.target,n=e.global,a=e.stat,o=e.proto,u=n?pt:a?pt[t]:pt[t]&&pt[t].prototype,l=n?$r:$r[t]||Lr($r,t,{})[t],c=l.prototype,s,f,v,p,d,h,m,y,b;for(p in r)s=X0(n?p:t+(a?".":"#")+p,e.forced),f=!s&&u&&xl(u,p),h=l[p],f&&(e.dontCallGetSet?(b=Q0(u,p),m=b&&b.value):m=u[p]),d=f&&m?m:r[p],!(!s&&!o&&typeof h==typeof d)&&(e.bind&&f?y=Z0(d,pt):e.wrap&&f?y=eI(d):o&&J0(d)?y=Y0(d):y=d,(e.sham||d&&d.sham||h&&h.sham)&&Lr(y,"sham",!0),Lr(l,p,y),o&&(v=t+"Prototype",xl($r,v)||Lr($r,v,{}),Lr($r[v],p,d),e.real&&c&&(s||!c[p])&&Lr(c,p,d)))}});var Ie=i((v8,wl)=>{"use strict";var rI=xe();wl.exports=Array.isArray||function(r){return rI(r)==="Array"}});var qn=i((p8,Ol)=>{"use strict";var tI=R(),nI=tI("toStringTag"),Tl={};Tl[nI]="z";Ol.exports=String(Tl)==="[object z]"});var dt=i((d8,Cl)=>{"use strict";var aI=qn(),iI=N(),xn=xe(),oI=R(),uI=oI("toStringTag"),sI=Object,cI=xn(function(){return arguments}())==="Arguments",lI=function(e,r){try{return e[r]}catch{}};Cl.exports=aI?xn:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=lI(r=sI(e),uI))=="string"?t:cI?xn(r):(n=xn(r))==="Object"&&iI(r.callee)?"Arguments":n}});var hi=i((m8,El)=>{"use strict";var fI=A(),vI=N(),mi=lt(),pI=fI(Function.toString);vI(mi.inspectSource)||(mi.inspectSource=function(e){return pI(e)});El.exports=mi.inspectSource});var ht=i((h8,Rl)=>{"use strict";var dI=A(),mI=P(),Il=N(),hI=dt(),yI=U(),gI=hi(),kl=function(){},Pl=yI("Reflect","construct"),yi=/^\s*(?:class|function)\b/,bI=dI(yi.exec),qI=!yi.test(kl),mt=function(r){if(!Il(r))return!1;try{return Pl(kl,[],r),!0}catch{return!1}},_l=function(r){if(!Il(r))return!1;switch(hI(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return qI||!!bI(yi,gI(r))}catch{return!0}};_l.sham=!0;Rl.exports=!Pl||mI(function(){var e;return mt(mt.call)||!mt(Object)||!mt(function(){e=!0})||e})?_l:mt});var Nl=i((y8,Al)=>{"use strict";var xI=Math.ceil,SI=Math.floor;Al.exports=Math.trunc||function(r){var t=+r;return(t>0?SI:xI)(t)}});var Sn=i((g8,Ml)=>{"use strict";var wI=Nl();Ml.exports=function(e){var r=+e;return r!==r||r===0?0:wI(r)}});var gi=i((b8,jl)=>{"use strict";var TI=Sn(),OI=Math.max,CI=Math.min;jl.exports=function(e,r){var t=TI(e);return t<0?OI(t+r,0):CI(t,r)}});var bi=i((q8,$l)=>{"use strict";var EI=Sn(),II=Math.min;$l.exports=function(e){var r=EI(e);return r>0?II(r,9007199254740991):0}});var le=i((x8,Ll)=>{"use strict";var kI=bi();Ll.exports=function(e){return kI(e.length)}});var Fr=i((S8,Fl)=>{"use strict";var PI=G(),_I=te(),RI=We();Fl.exports=function(e,r,t){PI?_I.f(e,r,RI(0,t)):e[r]=t}});var Dr=i((w8,Dl)=>{"use strict";var AI=G(),NI=Ie(),MI=TypeError,jI=Object.getOwnPropertyDescriptor,$I=AI&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();Dl.exports=$I?function(e,r){if(NI(e)&&!jI(e,"length").writable)throw new MI("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var yt=i((T8,Bl)=>{"use strict";var LI=P(),FI=R(),DI=Ar(),BI=FI("species");Bl.exports=function(e){return DI>=51||!LI(function(){var r=[],t=r.constructor={};return t[BI]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var sr=i((O8,Gl)=>{"use strict";var GI=A();Gl.exports=GI([].slice)});var Hl=i(()=>{"use strict";var UI=x(),Ul=Ie(),WI=ht(),HI=$(),Wl=gi(),KI=le(),zI=Ee(),VI=Fr(),YI=Dr(),JI=R(),QI=yt(),XI=sr(),ZI=QI("slice"),ek=JI("species"),qi=Array,rk=Math.max;UI({target:"Array",proto:!0,forced:!ZI},{slice:function(r,t){var n=zI(this),a=KI(n),o=Wl(r,a),u=Wl(t===void 0?a:t,a),l,c,s;if(Ul(n)&&(l=n.constructor,WI(l)&&(l===qi||Ul(l.prototype))?l=void 0:HI(l)&&(l=l[ek],l===null&&(l=void 0)),l===qi||l===void 0))return XI(n,o,u);for(c=new(l===void 0?qi:l)(rk(u-o,0)),s=0;o<u;o++,s++)o in n&&VI(c,s,n[o]);return YI(c,s),c}})});var oe=i((I8,Kl)=>{"use strict";var tk=_(),nk=K();Kl.exports=function(e,r){var t=nk[e+"Prototype"],n=t&&t[r];if(n)return n;var a=tk[e],o=a&&a.prototype;return o&&o[r]}});var Vl=i((k8,zl)=>{"use strict";Hl();var ak=oe();zl.exports=ak("Array","slice")});var Jl=i((P8,Yl)=>{"use strict";var ik=B(),ok=Vl(),xi=Array.prototype;Yl.exports=function(e){var r=e.slice;return e===xi||ik(xi,e)&&r===xi.slice?ok:r}});var Xl=i((_8,Ql)=>{"use strict";var uk=Jl();Ql.exports=uk});var ef=i((R8,Zl)=>{"use strict";var sk=Xl();Zl.exports=sk});var tf=i((A8,rf)=>{"use strict";var ck=ef();rf.exports=ck});var Si=i((N8,nf)=>{"use strict";nf.exports=tf()});var Br=i((M8,af)=>{af.exports=Si()});var Ke=i((j8,of)=>{"use strict";var lk=dt(),fk=String;of.exports=function(e){if(lk(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return fk(e)}});var lf=i(($8,cf)=>{"use strict";var wi=A(),vk=Sn(),pk=Ke(),dk=ir(),mk=wi("".charAt),uf=wi("".charCodeAt),hk=wi("".slice),sf=function(e){return function(r,t){var n=pk(dk(r)),a=vk(t),o=n.length,u,l;return a<0||a>=o?e?"":void 0:(u=uf(n,a),u<55296||u>56319||a+1===o||(l=uf(n,a+1))<56320||l>57343?e?mk(n,a):u:e?hk(n,a,a+2):(u-55296<<10)+(l-56320)+65536)}};cf.exports={codeAt:sf(!1),charAt:sf(!0)}});var pf=i((L8,vf)=>{"use strict";var yk=_(),gk=N(),ff=yk.WeakMap;vf.exports=gk(ff)&&/native code/.test(String(ff))});var gt=i((F8,mf)=>{"use strict";var bk=ur(),qk=Mr(),df=bk("keys");mf.exports=function(e){return df[e]||(df[e]=qk(e))}});var Gr=i((D8,hf)=>{"use strict";hf.exports={}});var ze=i((B8,bf)=>{"use strict";var xk=pf(),gf=_(),Sk=$(),wk=Se(),Ti=W(),Oi=lt(),Tk=gt(),Ok=Gr(),yf="Object already initialized",Ci=gf.TypeError,Ck=gf.WeakMap,wn,bt,Tn,Ek=function(e){return Tn(e)?bt(e):wn(e,{})},Ik=function(e){return function(r){var t;if(!Sk(r)||(t=bt(r)).type!==e)throw new Ci("Incompatible receiver, "+e+" required");return t}};xk||Oi.state?(me=Oi.state||(Oi.state=new Ck),me.get=me.get,me.has=me.has,me.set=me.set,wn=function(e,r){if(me.has(e))throw new Ci(yf);return r.facade=e,me.set(e,r),r},bt=function(e){return me.get(e)||{}},Tn=function(e){return me.has(e)}):(cr=Tk("state"),Ok[cr]=!0,wn=function(e,r){if(Ti(e,cr))throw new Ci(yf);return r.facade=e,wk(e,cr,r),r},bt=function(e){return Ti(e,cr)?e[cr]:{}},Tn=function(e){return Ti(e,cr)});var me,cr;bf.exports={set:wn,get:bt,has:Tn,enforce:Ek,getterFor:Ik}});var Sf=i((G8,xf)=>{"use strict";var Ei=G(),kk=W(),qf=Function.prototype,Pk=Ei&&Object.getOwnPropertyDescriptor,Ii=kk(qf,"name"),_k=Ii&&function(){}.name==="something",Rk=Ii&&(!Ei||Ei&&Pk(qf,"name").configurable);xf.exports={EXISTS:Ii,PROPER:_k,CONFIGURABLE:Rk}});var ki=i((U8,Tf)=>{"use strict";var Ak=Ee(),Nk=gi(),Mk=le(),wf=function(e){return function(r,t,n){var a=Ak(r),o=Mk(a);if(o===0)return!e&&-1;var u=Nk(n,o),l;if(e&&t!==t){for(;o>u;)if(l=a[u++],l!==l)return!0}else for(;o>u;u++)if((e||u in a)&&a[u]===t)return e||u||0;return!e&&-1}};Tf.exports={includes:wf(!0),indexOf:wf(!1)}});var _i=i((W8,Cf)=>{"use strict";var jk=A(),Pi=W(),$k=Ee(),Lk=ki().indexOf,Fk=Gr(),Of=jk([].push);Cf.exports=function(e,r){var t=$k(e),n=0,a=[],o;for(o in t)!Pi(Fk,o)&&Pi(t,o)&&Of(a,o);for(;r.length>n;)Pi(t,o=r[n++])&&(~Lk(a,o)||Of(a,o));return a}});var On=i((H8,Ef)=>{"use strict";Ef.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var Cn=i((K8,If)=>{"use strict";var Dk=_i(),Bk=On();If.exports=Object.keys||function(r){return Dk(r,Bk)}});var Ri=i(kf=>{"use strict";var Gk=G(),Uk=li(),Wk=te(),Hk=Q(),Kk=Ee(),zk=Cn();kf.f=Gk&&!Uk?Object.defineProperties:function(r,t){Hk(r);for(var n=Kk(t),a=zk(t),o=a.length,u=0,l;o>u;)Wk.f(r,l=a[u++],n[l]);return r}});var Ai=i((V8,Pf)=>{"use strict";var Vk=U();Pf.exports=Vk("document","documentElement")});var Ve=i((Y8,$f)=>{"use strict";var Yk=Q(),Jk=Ri(),_f=On(),Qk=Gr(),Xk=Ai(),Zk=gn(),e1=gt(),Rf=">",Af="<",Mi="prototype",ji="script",Mf=e1("IE_PROTO"),Ni=function(){},jf=function(e){return Af+ji+Rf+e+Af+"/"+ji+Rf},Nf=function(e){e.write(jf("")),e.close();var r=e.parentWindow.Object;return e=null,r},r1=function(){var e=Zk("iframe"),r="java"+ji+":",t;return e.style.display="none",Xk.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(jf("document.F=Object")),t.close(),t.F},En,In=function(){try{En=new ActiveXObject("htmlfile")}catch{}In=typeof document<"u"?document.domain&&En?Nf(En):r1():Nf(En);for(var e=_f.length;e--;)delete In[Mi][_f[e]];return In()};Qk[Mf]=!0;$f.exports=Object.create||function(r,t){var n;return r!==null?(Ni[Mi]=Yk(r),n=new Ni,Ni[Mi]=null,n[Mf]=r):n=In(),t===void 0?n:Jk.f(n,t)}});var $i=i((J8,Lf)=>{"use strict";var t1=P();Lf.exports=!t1(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var qt=i((Q8,Df)=>{"use strict";var n1=W(),a1=N(),i1=re(),o1=gt(),u1=$i(),Ff=o1("IE_PROTO"),Li=Object,s1=Li.prototype;Df.exports=u1?Li.getPrototypeOf:function(e){var r=i1(e);if(n1(r,Ff))return r[Ff];var t=r.constructor;return a1(t)&&r instanceof t?t.prototype:r instanceof Li?s1:null}});var ke=i((X8,Bf)=>{"use strict";var c1=Se();Bf.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:c1(e,r,t),e}});var Gi=i((Z8,Wf)=>{"use strict";var l1=P(),f1=N(),v1=$(),p1=Ve(),Gf=qt(),d1=ke(),m1=R(),h1=Z(),Bi=m1("iterator"),Uf=!1,Pe,Fi,Di;[].keys&&(Di=[].keys(),"next"in Di?(Fi=Gf(Gf(Di)),Fi!==Object.prototype&&(Pe=Fi)):Uf=!0);var y1=!v1(Pe)||l1(function(){var e={};return Pe[Bi].call(e)!==e});y1?Pe={}:h1&&(Pe=p1(Pe));f1(Pe[Bi])||d1(Pe,Bi,function(){return this});Wf.exports={IteratorPrototype:Pe,BUGGY_SAFARI_ITERATORS:Uf}});var Kf=i((eU,Hf)=>{"use strict";var g1=qn(),b1=dt();Hf.exports=g1?{}.toString:function(){return"[object "+b1(this)+"]"}});var _e=i((rU,Vf)=>{"use strict";var q1=qn(),x1=te().f,S1=Se(),w1=W(),T1=Kf(),O1=R(),zf=O1("toStringTag");Vf.exports=function(e,r,t,n){var a=t?e:e&&e.prototype;a&&(w1(a,zf)||x1(a,zf,{configurable:!0,value:r}),n&&!q1&&S1(a,"toString",T1))}});var lr=i((tU,Yf)=>{"use strict";Yf.exports={}});var Qf=i((nU,Jf)=>{"use strict";var C1=Gi().IteratorPrototype,E1=Ve(),I1=We(),k1=_e(),P1=lr(),_1=function(){return this};Jf.exports=function(e,r,t,n){var a=r+" Iterator";return e.prototype=E1(C1,{next:I1(+!n,t)}),k1(e,a,!1,!0),P1[a]=_1,e}});var Zf=i((aU,Xf)=>{"use strict";var R1=A(),A1=F();Xf.exports=function(e,r,t){try{return R1(A1(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var rv=i((iU,ev)=>{"use strict";var N1=$();ev.exports=function(e){return N1(e)||e===null}});var nv=i((oU,tv)=>{"use strict";var M1=rv(),j1=String,$1=TypeError;tv.exports=function(e){if(M1(e))return e;throw new $1("Can't set "+j1(e)+" as a prototype")}});var xt=i((uU,av)=>{"use strict";var L1=Zf(),F1=$(),D1=ir(),B1=nv();av.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=L1(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(a,o){return D1(a),B1(o),F1(a)&&(e?t(a,o):a.__proto__=o),a}}():void 0)});var _n=i((sU,dv)=>{"use strict";var G1=x(),U1=D(),kn=Z(),vv=Sf(),W1=N(),H1=Qf(),iv=qt(),ov=xt(),K1=_e(),z1=Se(),Ui=ke(),V1=R(),uv=lr(),pv=Gi(),Y1=vv.PROPER,J1=vv.CONFIGURABLE,sv=pv.IteratorPrototype,Pn=pv.BUGGY_SAFARI_ITERATORS,St=V1("iterator"),cv="keys",wt="values",lv="entries",fv=function(){return this};dv.exports=function(e,r,t,n,a,o,u){H1(t,r,n);var l=function(b){if(b===a&&p)return p;if(!Pn&&b&&b in f)return f[b];switch(b){case cv:return function(){return new t(this,b)};case wt:return function(){return new t(this,b)};case lv:return function(){return new t(this,b)}}return function(){return new t(this)}},c=r+" Iterator",s=!1,f=e.prototype,v=f[St]||f["@@iterator"]||a&&f[a],p=!Pn&&v||l(a),d=r==="Array"&&f.entries||v,h,m,y;if(d&&(h=iv(d.call(new e)),h!==Object.prototype&&h.next&&(!kn&&iv(h)!==sv&&(ov?ov(h,sv):W1(h[St])||Ui(h,St,fv)),K1(h,c,!0,!0),kn&&(uv[c]=fv))),Y1&&a===wt&&v&&v.name!==wt&&(!kn&&J1?z1(f,"name",wt):(s=!0,p=function(){return U1(v,this)})),a)if(m={values:l(wt),keys:o?p:l(cv),entries:l(lv)},u)for(y in m)(Pn||s||!(y in f))&&Ui(f,y,m[y]);else G1({target:r,proto:!0,forced:Pn||s},m);return(!kn||u)&&f[St]!==p&&Ui(f,St,p,{name:a}),uv[r]=p,m}});var Rn=i((cU,mv)=>{"use strict";mv.exports=function(e,r){return{value:e,done:r}}});var fr=i(()=>{"use strict";var Q1=lf().charAt,X1=Ke(),yv=ze(),Z1=_n(),hv=Rn(),gv="String Iterator",eP=yv.set,rP=yv.getterFor(gv);Z1(String,"String",function(e){eP(this,{type:gv,string:X1(e),index:0})},function(){var r=rP(this),t=r.string,n=r.index,a;return n>=t.length?hv(void 0,!0):(a=Q1(t,n),r.index+=a.length,hv(a,!1))})});var Wi=i((vU,qv)=>{"use strict";var tP=D(),bv=Q(),nP=hn();qv.exports=function(e,r,t){var n,a;bv(e);try{if(n=nP(e,"return"),!n){if(r==="throw")throw t;return t}n=tP(n,e)}catch(o){a=!0,n=o}if(r==="throw")throw t;if(a)throw n;return bv(n),t}});var Sv=i((pU,xv)=>{"use strict";var aP=Q(),iP=Wi();xv.exports=function(e,r,t,n){try{return n?r(aP(t)[0],t[1]):r(t)}catch(a){iP(e,"throw",a)}}});var Hi=i((dU,wv)=>{"use strict";var oP=R(),uP=lr(),sP=oP("iterator"),cP=Array.prototype;wv.exports=function(e){return e!==void 0&&(uP.Array===e||cP[sP]===e)}});var Tt=i((mU,Ov)=>{"use strict";var lP=dt(),Tv=hn(),fP=ar(),vP=lr(),pP=R(),dP=pP("iterator");Ov.exports=function(e){if(!fP(e))return Tv(e,dP)||Tv(e,"@@iterator")||vP[lP(e)]}});var An=i((hU,Cv)=>{"use strict";var mP=D(),hP=F(),yP=Q(),gP=He(),bP=Tt(),qP=TypeError;Cv.exports=function(e,r){var t=arguments.length<2?bP(e):r;if(hP(t))return yP(mP(t,e));throw new qP(gP(e)+" is not iterable")}});var Pv=i((yU,kv)=>{"use strict";var xP=z(),SP=D(),wP=re(),TP=Sv(),OP=Hi(),CP=ht(),EP=le(),Ev=Fr(),IP=Dr(),kP=An(),PP=Tt(),Iv=Array;kv.exports=function(r){var t=wP(r),n=CP(this),a=arguments.length,o=a>1?arguments[1]:void 0,u=o!==void 0;u&&(o=xP(o,a>2?arguments[2]:void 0));var l=PP(t),c=0,s,f,v,p,d,h;if(l&&!(this===Iv&&OP(l)))for(f=n?new this:[],p=kP(t,l),d=p.next;!(v=SP(d,p)).done;c++)h=u?TP(p,o,[v.value,c],!0):v.value,Ev(f,c,h);else for(s=EP(t),f=n?new this(s):Iv(s);s>c;c++)h=u?o(t[c],c):t[c],Ev(f,c,h);return IP(f,c),f}});var zi=i((gU,Nv)=>{"use strict";var _P=R(),Rv=_P("iterator"),Av=!1;try{_v=0,Ki={next:function(){return{done:!!_v++}},return:function(){Av=!0}},Ki[Rv]=function(){return this},Array.from(Ki,function(){throw 2})}catch{}var _v,Ki;Nv.exports=function(e,r){try{if(!r&&!Av)return!1}catch{return!1}var t=!1;try{var n={};n[Rv]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var Mv=i(()=>{"use strict";var RP=x(),AP=Pv(),NP=zi(),MP=!NP(function(e){Array.from(e)});RP({target:"Array",stat:!0,forced:MP},{from:AP})});var $v=i((xU,jv)=>{"use strict";fr();Mv();var jP=K();jv.exports=jP.Array.from});var Fv=i((SU,Lv)=>{"use strict";var $P=$v();Lv.exports=$P});var Bv=i((wU,Dv)=>{"use strict";var LP=Fv();Dv.exports=LP});var Uv=i((TU,Gv)=>{"use strict";var FP=Bv();Gv.exports=FP});var Vi=i((OU,Wv)=>{"use strict";Wv.exports=Uv()});var Nn=i((CU,Hv)=>{Hv.exports=Vi()});var Ot=i((EU,Kv)=>{"use strict";var DP=TypeError,BP=9007199254740991;Kv.exports=function(e){if(e>BP)throw DP("Maximum allowed index exceeded");return e}});var Jv=i((IU,Yv)=>{"use strict";var zv=Ie(),GP=ht(),UP=$(),WP=R(),HP=WP("species"),Vv=Array;Yv.exports=function(e){var r;return zv(e)&&(r=e.constructor,GP(r)&&(r===Vv||zv(r.prototype))?r=void 0:UP(r)&&(r=r[HP],r===null&&(r=void 0))),r===void 0?Vv:r}});var Mn=i((kU,Qv)=>{"use strict";var KP=Jv();Qv.exports=function(e,r){return new(KP(e))(r===0?0:r)}});var Yi=i(()=>{"use strict";var zP=x(),VP=P(),YP=Ie(),JP=$(),QP=re(),XP=le(),Xv=Ot(),Zv=Fr(),ZP=Dr(),e_=Mn(),r_=yt(),t_=R(),n_=Ar(),ep=t_("isConcatSpreadable"),a_=n_>=51||!VP(function(){var e=[];return e[ep]=!1,e.concat()[0]!==e}),i_=function(e){if(!JP(e))return!1;var r=e[ep];return r!==void 0?!!r:YP(e)},o_=!a_||!r_("concat");zP({target:"Array",proto:!0,arity:1,forced:o_},{concat:function(r){var t=QP(this),n=e_(t,0),a=0,o,u,l,c,s;for(o=-1,l=arguments.length;o<l;o++)if(s=o===-1?t:arguments[o],i_(s))for(c=XP(s),Xv(a+c),u=0;u<c;u++,a++)u in s&&Zv(n,a,s[u]);else Xv(a+1),Zv(n,a++,s);return ZP(n,a),n}})});var Ct=i(()=>{});var Et=i(rp=>{"use strict";var u_=_i(),s_=On(),c_=s_.concat("length","prototype");rp.f=Object.getOwnPropertyNames||function(r){return u_(r,c_)}});var Ji=i((MU,ap)=>{"use strict";var l_=xe(),f_=Ee(),tp=Et().f,v_=sr(),np=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],p_=function(e){try{return tp(e)}catch{return v_(np)}};ap.exports.f=function(r){return np&&l_(r)==="Window"?p_(r):tp(f_(r))}});var jn=i(ip=>{"use strict";ip.f=Object.getOwnPropertySymbols});var $n=i(($U,op)=>{"use strict";var d_=te();op.exports=function(e,r,t){return d_.f(e,r,t)}});var Ur=i(up=>{"use strict";var m_=R();up.f=m_});var M=i((FU,cp)=>{"use strict";var sp=K(),h_=W(),y_=Ur(),g_=te().f;cp.exports=function(e){var r=sp.Symbol||(sp.Symbol={});h_(r,e)||g_(r,e,{value:y_.f(e)})}});var Qi=i((DU,lp)=>{"use strict";var b_=D(),q_=U(),x_=R(),S_=ke();lp.exports=function(){var e=q_("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=x_("toPrimitive");r&&!r[n]&&S_(r,n,function(a){return b_(t,this)},{arity:1})}});var It=i((BU,vp)=>{"use strict";var w_=z(),T_=dn(),O_=re(),C_=le(),fp=Mn(),Xi=Fr(),Ye=function(e){var r=e===1,t=e===2,n=e===3,a=e===4,o=e===6,u=e===7,l=e===5||o;return function(c,s,f){for(var v=O_(c),p=T_(v),d=C_(p),h=w_(s,f),m=0,y=0,b=r?fp(c,d):t||u?fp(c,0):void 0,q,I;d>m;m++)if((l||m in p)&&(q=p[m],I=h(q,m,v),e))if(r)Xi(b,m,I);else if(I)switch(e){case 3:return!0;case 5:return q;case 6:return m;case 2:Xi(b,y++,q)}else switch(e){case 4:return!1;case 7:Xi(b,y++,q)}return o?-1:n||a?a:b}};vp.exports={forEach:Ye(0),map:Ye(1),filter:Ye(2),some:Ye(3),every:Ye(4),find:Ye(5),findIndex:Ye(6),filterReject:Ye(7)}});var kp=i(()=>{"use strict";var Ln=x(),_t=_(),uo=D(),E_=A(),I_=Z(),Wr=G(),Hr=or(),k_=P(),H=W(),P_=B(),to=Q(),Fn=Ee(),so=yn(),__=Ke(),no=We(),Kr=Ve(),mp=Cn(),R_=Et(),hp=Ji(),A_=jn(),yp=ft(),gp=te(),N_=Ri(),bp=Qa(),Zi=ke(),M_=$n(),co=ur(),j_=gt(),qp=Gr(),pp=Mr(),$_=R(),L_=Ur(),F_=M(),D_=Qi(),B_=_e(),xp=ze(),Dn=It().forEach,ne=j_("hidden"),Bn="Symbol",Pt="prototype",G_=xp.set,dp=xp.getterFor(Bn),fe=Object[Pt],vr=_t.Symbol,kt=vr&&vr[Pt],U_=_t.RangeError,W_=_t.TypeError,eo=_t.QObject,Sp=yp.f,pr=gp.f,wp=hp.f,H_=bp.f,Tp=E_([].push),Re=co("symbols"),Rt=co("op-symbols"),K_=co("wks"),ao=!eo||!eo[Pt]||!eo[Pt].findChild,Op=function(e,r,t){var n=Sp(fe,r);n&&delete fe[r],pr(e,r,t),n&&e!==fe&&pr(fe,r,n)},io=Wr&&k_(function(){return Kr(pr({},"a",{get:function(){return pr(this,"a",{value:7}).a}})).a!==7})?Op:pr,ro=function(e,r){var t=Re[e]=Kr(kt);return G_(t,{type:Bn,tag:e,description:r}),Wr||(t.description=r),t},Gn=function(r,t,n){r===fe&&Gn(Rt,t,n),to(r);var a=so(t);return to(n),H(Re,a)?(n.enumerable?(H(r,ne)&&r[ne][a]&&(r[ne][a]=!1),n=Kr(n,{enumerable:no(0,!1)})):(H(r,ne)||pr(r,ne,no(1,Kr(null))),r[ne][a]=!0),io(r,a,n)):pr(r,a,n)},lo=function(r,t){to(r);var n=Fn(t),a=mp(n).concat(Ip(n));return Dn(a,function(o){(!Wr||uo(oo,n,o))&&Gn(r,o,n[o])}),r},z_=function(r,t){return t===void 0?Kr(r):lo(Kr(r),t)},oo=function(r){var t=so(r),n=uo(H_,this,t);return this===fe&&H(Re,t)&&!H(Rt,t)?!1:n||!H(this,t)||!H(Re,t)||H(this,ne)&&this[ne][t]?n:!0},Cp=function(r,t){var n=Fn(r),a=so(t);if(!(n===fe&&H(Re,a)&&!H(Rt,a))){var o=Sp(n,a);return o&&H(Re,a)&&!(H(n,ne)&&n[ne][a])&&(o.enumerable=!0),o}},Ep=function(r){var t=wp(Fn(r)),n=[];return Dn(t,function(a){!H(Re,a)&&!H(qp,a)&&Tp(n,a)}),n},Ip=function(e){var r=e===fe,t=wp(r?Rt:Fn(e)),n=[];return Dn(t,function(a){H(Re,a)&&(!r||H(fe,a))&&Tp(n,Re[a])}),n};Hr||(vr=function(){if(P_(kt,this))throw new W_("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:__(arguments[0]),t=pp(r),n=function(a){var o=this===void 0?_t:this;o===fe&&uo(n,Rt,a),H(o,ne)&&H(o[ne],t)&&(o[ne][t]=!1);var u=no(1,a);try{io(o,t,u)}catch(l){if(!(l instanceof U_))throw l;Op(o,t,u)}};return Wr&&ao&&io(fe,t,{configurable:!0,set:n}),ro(t,r)},kt=vr[Pt],Zi(kt,"toString",function(){return dp(this).tag}),Zi(vr,"withoutSetter",function(e){return ro(pp(e),e)}),bp.f=oo,gp.f=Gn,N_.f=lo,yp.f=Cp,R_.f=hp.f=Ep,A_.f=Ip,L_.f=function(e){return ro($_(e),e)},Wr&&(M_(kt,"description",{configurable:!0,get:function(){return dp(this).description}}),I_||Zi(fe,"propertyIsEnumerable",oo,{unsafe:!0})));Ln({global:!0,constructor:!0,wrap:!0,forced:!Hr,sham:!Hr},{Symbol:vr});Dn(mp(K_),function(e){F_(e)});Ln({target:Bn,stat:!0,forced:!Hr},{useSetter:function(){ao=!0},useSimple:function(){ao=!1}});Ln({target:"Object",stat:!0,forced:!Hr,sham:!Wr},{create:z_,defineProperty:Gn,defineProperties:lo,getOwnPropertyDescriptor:Cp});Ln({target:"Object",stat:!0,forced:!Hr},{getOwnPropertyNames:Ep});D_();B_(vr,Bn);qp[ne]=!0});var fo=i((WU,Pp)=>{"use strict";var V_=or();Pp.exports=V_&&!!Symbol.for&&!!Symbol.keyFor});var Rp=i(()=>{"use strict";var Y_=x(),J_=U(),Q_=W(),X_=Ke(),_p=ur(),Z_=fo(),vo=_p("string-to-symbol-registry"),eR=_p("symbol-to-string-registry");Y_({target:"Symbol",stat:!0,forced:!Z_},{for:function(e){var r=X_(e);if(Q_(vo,r))return vo[r];var t=J_("Symbol")(r);return vo[r]=t,eR[t]=r,t}})});var Np=i(()=>{"use strict";var rR=x(),tR=W(),nR=Nr(),aR=He(),iR=ur(),oR=fo(),Ap=iR("symbol-to-string-registry");rR({target:"Symbol",stat:!0,forced:!oR},{keyFor:function(r){if(!nR(r))throw new TypeError(aR(r)+" is not a symbol");if(tR(Ap,r))return Ap[r]}})});var jp=i((YU,Mp)=>{"use strict";var uR=$(),sR=ze().get;Mp.exports=function(r){if(!uR(r))return!1;var t=sR(r);return!!t&&t.type==="RawJSON"}});var Bp=i((JU,Dp)=>{"use strict";var po=A(),cR=W(),Un=SyntaxError,lR=parseInt,fR=String.fromCharCode,vR=po("".charAt),$p=po("".slice),Lp=po(/./.exec),Fp={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},pR=/^[\da-f]{4}$/i,dR=/^[\u0000-\u001F]$/;Dp.exports=function(e,r){for(var t=!0,n="";r<e.length;){var a=vR(e,r);if(a==="\\"){var o=$p(e,r,r+2);if(cR(Fp,o))n+=Fp[o],r+=2;else if(o==="\\u"){r+=2;var u=$p(e,r,r+4);if(!Lp(pR,u))throw new Un("Bad Unicode escape at: "+r);n+=fR(lR(u,16)),r+=4}else throw new Un('Unknown escape sequence: "'+o+'"')}else if(a==='"'){t=!1,r++;break}else{if(Lp(dR,a))throw new Un("Bad control character in string literal at: "+r);n+=a,r++}}if(t)throw new Un("Unterminated string at: "+r);return{value:n,end:r}}});var Up=i((QU,Gp)=>{"use strict";var mR=P();Gp.exports=!mR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var nd=i(()=>{"use strict";var hR=x(),Qp=U(),yR=_r(),Xp=D(),dr=A(),Zp=P(),Wp=Ie(),Hn=N(),gR=jp(),Hp=Nr(),Kp=xe(),bR=Ke(),qR=sr(),xR=Bp(),SR=Mr(),wR=or(),mo=Up(),ed=String,Je=Qp("JSON","stringify"),Wn=dr(/./.exec),yo=dr("".charAt),TR=dr("".charCodeAt),OR=dr("".replace),ho=dr("".slice),go=dr([].push),CR=dr(1.1.toString),ER=/[\uD800-\uDFFF]/g,zp=/^[\uD800-\uDBFF]$/,Vp=/^[\uDC00-\uDFFF]$/,bo=SR(),Yp=bo.length,rd=!wR||Zp(function(){var e=Qp("Symbol")("stringify detection");return Je([e])!=="[null]"||Je({a:e})!=="{}"||Je(Object(e))!=="{}"}),Jp=Zp(function(){return Je("\uDF06\uD834")!=='"\\udf06\\ud834"'||Je("\uDEAD")!=='"\\udead"'}),IR=rd?function(e,r){var t=qR(arguments),n=td(r);if(!(!Hn(n)&&(e===void 0||Hp(e))))return t[1]=function(a,o){if(Hn(n)&&(o=Xp(n,this,ed(a),o)),!Hp(o))return o},yR(Je,null,t)}:Je,kR=function(e,r,t){var n=yo(t,r-1),a=yo(t,r+1);return Wn(zp,e)&&!Wn(Vp,a)||Wn(Vp,e)&&!Wn(zp,n)?"\\u"+CR(TR(e,0),16):e},td=function(e){if(Hn(e))return e;if(Wp(e)){for(var r=e.length,t=[],n=0;n<r;n++){var a=e[n];typeof a=="string"?go(t,a):(typeof a=="number"||Kp(a)==="Number"||Kp(a)==="String")&&go(t,bR(a))}var o=t.length,u=!0;return function(l,c){if(u)return u=!1,c;if(Wp(this))return c;for(var s=0;s<o;s++)if(t[s]===l)return c}}};Je&&hR({target:"JSON",stat:!0,arity:3,forced:rd||Jp||!mo},{stringify:function(r,t,n){var a=td(t),o=[],u=IR(r,function(d,h){var m=Hn(a)?Xp(a,this,ed(d),h):h;return!mo&&gR(m)?bo+(go(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(Jp&&(u=OR(u,ER,kR)),mo))return u;for(var l="",c=u.length,s=0;s<c;s++){var f=yo(u,s);if(f==='"'){var v=xR(u,++s).end-1,p=ho(u,s,v);l+=ho(p,0,Yp)===bo?o[ho(p,Yp)]:'"'+p+'"',s=v}else l+=f}return l}})});var id=i(()=>{"use strict";var PR=x(),_R=or(),RR=P(),ad=jn(),AR=re(),NR=!_R||RR(function(){ad.f(1)});PR({target:"Object",stat:!0,forced:NR},{getOwnPropertySymbols:function(r){var t=ad.f;return t?t(AR(r)):[]}})});var od=i(()=>{"use strict";kp();Rp();Np();nd();id()});var qo=i(()=>{"use strict";var MR=M();MR("asyncDispose")});var xo=i(()=>{"use strict";var jR=M();jR("asyncIterator")});var ud=i(()=>{});var So=i(()=>{"use strict";var $R=M();$R("dispose")});var sd=i(()=>{"use strict";var LR=M();LR("hasInstance")});var cd=i(()=>{"use strict";var FR=M();FR("isConcatSpreadable")});var wo=i(()=>{"use strict";var DR=M();DR("iterator")});var ld=i(()=>{"use strict";var BR=M();BR("match")});var fd=i(()=>{"use strict";var GR=M();GR("matchAll")});var vd=i(()=>{"use strict";var UR=M();UR("replace")});var pd=i(()=>{"use strict";var WR=M();WR("search")});var dd=i(()=>{"use strict";var HR=M();HR("species")});var md=i(()=>{"use strict";var KR=M();KR("split")});var To=i(()=>{"use strict";var zR=M(),VR=Qi();zR("toPrimitive");VR()});var hd=i(()=>{"use strict";var YR=U(),JR=M(),QR=_e();JR("toStringTag");QR(YR("Symbol"),"Symbol")});var yd=i(()=>{"use strict";var XR=M();XR("unscopables")});var gd=i(()=>{"use strict";var ZR=_(),eA=_e();eA(ZR.JSON,"JSON",!0)});var bd=i(()=>{});var qd=i(()=>{});var Sd=i((G6,xd)=>{"use strict";Yi();Ct();od();qo();xo();ud();So();sd();cd();wo();ld();fd();vd();pd();dd();md();To();hd();yd();gd();bd();qd();var rA=K();xd.exports=rA.Symbol});var Oo=i((U6,wd)=>{"use strict";wd.exports=function(){}});var mr=i((W6,Id)=>{"use strict";var tA=Ee(),Co=Oo(),Td=lr(),Cd=ze(),nA=te().f,aA=_n(),Kn=Rn(),iA=Z(),oA=G(),Ed="Array Iterator",uA=Cd.set,sA=Cd.getterFor(Ed);Id.exports=aA(Array,"Array",function(e,r){uA(this,{type:Ed,target:tA(e),index:0,kind:r})},function(){var e=sA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,Kn(void 0,!0);switch(e.kind){case"keys":return Kn(t,!1);case"values":return Kn(r[t],!1)}return Kn([t,r[t]],!1)},"values");var Od=Td.Arguments=Td.Array;Co("keys");Co("values");Co("entries");if(!iA&&oA&&Od.name!=="values")try{nA(Od,"name",{value:"values"})}catch{}});var Pd=i((H6,kd)=>{"use strict";kd.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var hr=i(()=>{"use strict";mr();var cA=Pd(),lA=_(),fA=_e(),_d=lr();for(zn in cA)fA(lA[zn],zn),_d[zn]=_d.Array;var zn});var Ad=i((V6,Rd)=>{"use strict";var vA=Sd();hr();Rd.exports=vA});var jd=i(()=>{"use strict";var pA=R(),dA=te().f,Nd=pA("metadata"),Md=Function.prototype;Md[Nd]===void 0&&dA(Md,Nd,{value:null})});var $d=i(()=>{"use strict";qo()});var Ld=i(()=>{"use strict";So()});var Fd=i(()=>{"use strict";var mA=M();mA("metadata")});var Bd=i((nW,Dd)=>{"use strict";var hA=Ad();jd();$d();Ld();Fd();Dd.exports=hA});var Io=i((aW,Gd)=>{"use strict";var yA=U(),gA=A(),Eo=yA("Symbol"),bA=Eo.keyFor,qA=gA(Eo.prototype.valueOf);Gd.exports=Eo.isRegisteredSymbol||function(r){try{return bA(qA(r))!==void 0}catch{return!1}}});var Ud=i(()=>{"use strict";var xA=x(),SA=Io();xA({target:"Symbol",stat:!0},{isRegisteredSymbol:SA})});var _o=i((uW,Yd)=>{"use strict";var wA=ur(),zd=U(),TA=A(),OA=Nr(),CA=R(),Yn=zd("Symbol"),Wd=Yn.isWellKnownSymbol,Vd=zd("Object","getOwnPropertyNames"),EA=TA(Yn.prototype.valueOf),Hd=wA("wks");for(Vn=0,ko=Vd(Yn),Kd=ko.length;Vn<Kd;Vn++)try{Po=ko[Vn],OA(Yn[Po])&&CA(Po)}catch{}var Po,Vn,ko,Kd;Yd.exports=function(r){if(Wd&&Wd(r))return!0;try{for(var t=EA(r),n=0,a=Vd(Hd),o=a.length;n<o;n++)if(Hd[a[n]]==t)return!0}catch{}return!1}});var Jd=i(()=>{"use strict";var IA=x(),kA=_o();IA({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:kA})});var Qd=i(()=>{"use strict";var PA=M();PA("customMatcher")});var Xd=i(()=>{"use strict";var _A=M();_A("observable")});var Zd=i(()=>{"use strict";var RA=x(),AA=Io();RA({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:AA})});var em=i(()=>{"use strict";var NA=x(),MA=_o();NA({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:MA})});var rm=i(()=>{"use strict";var jA=M();jA("matcher")});var tm=i(()=>{"use strict";var $A=M();$A("metadataKey")});var nm=i(()=>{"use strict";var LA=M();LA("patternMatch")});var am=i(()=>{"use strict";var FA=M();FA("replaceAll")});var om=i((CW,im)=>{"use strict";var DA=Bd();Ud();Jd();Qd();Xd();Zd();em();rm();tm();nm();am();im.exports=DA});var we=i((EW,um)=>{"use strict";um.exports=om()});var Jn=i((IW,sm)=>{sm.exports=we()});var lm=i((kW,cm)=>{"use strict";mr();fr();var BA=Tt();cm.exports=BA});var vm=i((PW,fm)=>{"use strict";var GA=lm();hr();fm.exports=GA});var dm=i((_W,pm)=>{"use strict";var UA=vm();pm.exports=UA});var hm=i((RW,mm)=>{"use strict";var WA=dm();mm.exports=WA});var Ro=i((AW,ym)=>{"use strict";ym.exports=hm()});var Qn=i((NW,gm)=>{gm.exports=Ro()});var qm=i((MW,bm)=>{"use strict";mr();fr();var HA=An();bm.exports=HA});var Sm=i((jW,xm)=>{"use strict";var KA=qm();hr();xm.exports=KA});var Tm=i(($W,wm)=>{"use strict";var zA=Sm();wm.exports=zA});var Cm=i((LW,Om)=>{"use strict";var VA=Tm();Om.exports=VA});var Im=i((FW,Em)=>{"use strict";Em.exports=Cm()});var Xn=i((DW,km)=>{km.exports=Im()});var _m=i((BW,Pm)=>{"use strict";var YA=U(),JA=A(),QA=Et(),XA=jn(),ZA=Q(),e2=JA([].concat);Pm.exports=YA("Reflect","ownKeys")||function(r){var t=QA.f(ZA(r)),n=XA.f;return n?e2(t,n(r)):t}});var Nm=i((GW,Am)=>{"use strict";var Rm=W(),r2=_m(),t2=ft(),n2=te();Am.exports=function(e,r,t){for(var n=r2(r),a=n2.f,o=t2.f,u=0;u<n.length;u++){var l=n[u];!Rm(e,l)&&!(t&&Rm(t,l))&&a(e,l,o(r,l))}}});var jm=i((UW,Mm)=>{"use strict";var a2=$(),i2=Se();Mm.exports=function(e,r){a2(r)&&"cause"in r&&i2(e,"cause",r.cause)}});var Dm=i((WW,Fm)=>{"use strict";var o2=A(),$m=Error,u2=o2("".replace),s2=function(e){return String(new $m(e).stack)}("zxcasd"),Lm=/\n\s*at [^:]*:[^\n]*/,c2=Lm.test(s2);Fm.exports=function(e,r){if(c2&&typeof e=="string"&&!$m.prepareStackTrace)for(;r--;)e=u2(e,Lm,"");return e}});var Gm=i((HW,Bm)=>{"use strict";var l2=P(),f2=We();Bm.exports=!l2(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",f2(1,7)),e.stack!==7):!0})});var Hm=i((KW,Wm)=>{"use strict";var v2=Se(),p2=Dm(),d2=Gm(),Um=Error.captureStackTrace;Wm.exports=function(e,r,t,n){d2&&(Um?Um(e,r):v2(e,"stack",p2(t,n)))}});var ve=i((zW,Ym)=>{"use strict";var m2=z(),h2=D(),y2=Q(),g2=He(),b2=Hi(),q2=le(),Km=B(),x2=An(),S2=Tt(),zm=Wi(),w2=TypeError,Zn=function(e,r){this.stopped=e,this.result=r},Vm=Zn.prototype;Ym.exports=function(e,r,t){var n=t&&t.that,a=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),l=!!(t&&t.INTERRUPTED),c=m2(r,n),s,f,v,p,d,h,m,y=function(q){return s&&zm(s,"normal"),new Zn(!0,q)},b=function(q){return a?(y2(q),l?c(q[0],q[1],y):c(q[0],q[1])):l?c(q,y):c(q)};if(o)s=e.iterator;else if(u)s=e;else{if(f=S2(e),!f)throw new w2(g2(e)+" is not iterable");if(b2(f)){for(v=0,p=q2(e);p>v;v++)if(d=b(e[v]),d&&Km(Vm,d))return d;return new Zn(!1)}s=x2(e,f)}for(h=o?e.next:s.next;!(m=h2(h,s)).done;){try{d=b(m.value)}catch(q){zm(s,"throw",q)}if(typeof d=="object"&&d&&Km(Vm,d))return d}return new Zn(!1)}});var Qm=i((VW,Jm)=>{"use strict";var T2=Ke();Jm.exports=function(e,r){return e===void 0?arguments.length<2?"":r:T2(e)}});var Zm=i(()=>{"use strict";var O2=x(),C2=B(),E2=qt(),ea=xt(),I2=Nm(),Xm=Ve(),Ao=Se(),No=We(),k2=jm(),P2=Hm(),_2=ve(),R2=Qm(),A2=R(),N2=A2("toStringTag"),ra=Error,M2=[].push,zr=function(r,t){var n=C2(Mo,this),a;ea?a=ea(new ra,n?E2(this):Mo):(a=n?this:Xm(Mo),Ao(a,N2,"Error")),t!==void 0&&Ao(a,"message",R2(t)),P2(a,zr,a.stack,1),arguments.length>2&&k2(a,arguments[2]);var o=[];return _2(r,M2,{that:o}),Ao(a,"errors",o),a};ea?ea(zr,ra):I2(zr,ra,{name:!0});var Mo=zr.prototype=Xm(ra.prototype,{constructor:No(1,zr),message:No(1,""),name:No(1,"AggregateError")});O2({global:!0,constructor:!0,arity:2},{AggregateError:zr})});var jo=i(()=>{"use strict";Zm()});var $o=i((ZW,eh)=>{"use strict";var At=_(),j2=Rr(),$2=xe(),ta=function(e){return j2.slice(0,e.length)===e};eh.exports=function(){return ta("Bun/")?"BUN":ta("Cloudflare-Workers")?"CLOUDFLARE":ta("Deno/")?"DENO":ta("Node.js/")?"NODE":At.Bun&&typeof Bun.version=="string"?"BUN":At.Deno&&typeof Deno.version=="object"?"DENO":$2(At.process)==="process"?"NODE":At.window&&At.document?"BROWSER":"REST"}()});var Nt=i((eH,rh)=>{"use strict";var L2=$o();rh.exports=L2==="NODE"});var Lo=i((rH,nh)=>{"use strict";var F2=U(),D2=$n(),B2=R(),G2=G(),th=B2("species");nh.exports=function(e){var r=F2(e);G2&&r&&!r[th]&&D2(r,th,{configurable:!0,get:function(){return this}})}});var na=i((tH,ah)=>{"use strict";var U2=B(),W2=TypeError;ah.exports=function(e,r){if(U2(r,e))return e;throw new W2("Incorrect invocation")}});var Fo=i((nH,ih)=>{"use strict";var H2=ht(),K2=He(),z2=TypeError;ih.exports=function(e){if(H2(e))return e;throw new z2(K2(e)+" is not a constructor")}});var Do=i((aH,uh)=>{"use strict";var oh=Q(),V2=Fo(),Y2=ar(),J2=R(),Q2=J2("species");uh.exports=function(e,r){var t=oh(e).constructor,n;return t===void 0||Y2(n=oh(t)[Q2])?r:V2(n)}});var ch=i((iH,sh)=>{"use strict";var X2=TypeError;sh.exports=function(e,r){if(e<r)throw new X2("Not enough arguments");return e}});var Bo=i((oH,lh)=>{"use strict";var Z2=Rr();lh.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(Z2)});var Jo=i((uH,bh)=>{"use strict";var ue=_(),eN=_r(),rN=z(),fh=N(),tN=W(),gh=P(),vh=Ai(),nN=sr(),ph=gn(),aN=ch(),iN=Bo(),oN=Nt(),zo=ue.setImmediate,Vo=ue.clearImmediate,uN=ue.process,Go=ue.Dispatch,sN=ue.Function,dh=ue.MessageChannel,cN=ue.String,Uo=0,Mt={},mh="onreadystatechange",jt,yr,Wo,Ho;gh(function(){jt=ue.location});var Yo=function(e){if(tN(Mt,e)){var r=Mt[e];delete Mt[e],r()}},Ko=function(e){return function(){Yo(e)}},hh=function(e){Yo(e.data)},yh=function(e){ue.postMessage(cN(e),jt.protocol+"//"+jt.host)};(!zo||!Vo)&&(zo=function(r){aN(arguments.length,1);var t=fh(r)?r:sN(r),n=nN(arguments,1);return Mt[++Uo]=function(){eN(t,void 0,n)},yr(Uo),Uo},Vo=function(r){delete Mt[r]},oN?yr=function(e){uN.nextTick(Ko(e))}:Go&&Go.now?yr=function(e){Go.now(Ko(e))}:dh&&!iN?(Wo=new dh,Ho=Wo.port2,Wo.port1.onmessage=hh,yr=rN(Ho.postMessage,Ho)):ue.addEventListener&&fh(ue.postMessage)&&!ue.importScripts&&jt&&jt.protocol!=="file:"&&!gh(yh)?(yr=yh,ue.addEventListener("message",hh,!1)):mh in ph("script")?yr=function(e){vh.appendChild(ph("script"))[mh]=function(){vh.removeChild(this),Yo(e)}}:yr=function(e){setTimeout(Ko(e),0)});bh.exports={set:zo,clear:Vo}});var Sh=i((sH,xh)=>{"use strict";var qh=_(),lN=G(),fN=Object.getOwnPropertyDescriptor;xh.exports=function(e){if(!lN)return qh[e];var r=fN(qh,e);return r&&r.value}});var Qo=i((cH,Th)=>{"use strict";var wh=function(){this.head=null,this.tail=null};wh.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Th.exports=wh});var Ch=i((lH,Oh)=>{"use strict";var vN=Rr();Oh.exports=/ipad|iphone|ipod/i.test(vN)&&typeof Pebble<"u"});var Ih=i((fH,Eh)=>{"use strict";var pN=Rr();Eh.exports=/web0s(?!.*chrome)/i.test(pN)});var Mh=i((vH,Nh)=>{"use strict";var Yr=_(),dN=Sh(),kh=z(),Xo=Jo().set,mN=Qo(),hN=Bo(),yN=Ch(),gN=Ih(),Zo=Nt(),Ph=Yr.MutationObserver||Yr.WebKitMutationObserver,_h=Yr.document,Rh=Yr.process,aa=Yr.Promise,tu=dN("queueMicrotask"),Vr,eu,ru,ia,Ah;tu||($t=new mN,Lt=function(){var e,r;for(Zo&&(e=Rh.domain)&&e.exit();r=$t.get();)try{r()}catch(t){throw $t.head&&Vr(),t}e&&e.enter()},!hN&&!Zo&&!gN&&Ph&&_h?(eu=!0,ru=_h.createTextNode(""),new Ph(Lt).observe(ru,{characterData:!0}),Vr=function(){ru.data=eu=!eu}):!yN&&aa&&aa.resolve?(ia=aa.resolve(void 0),ia.constructor=aa,Ah=kh(ia.then,ia),Vr=function(){Ah(Lt)}):Zo?Vr=function(){Rh.nextTick(Lt)}:(Xo=kh(Xo,Yr),Vr=function(){Xo(Lt)}),tu=function(e){$t.head||Vr(),$t.add(e)});var $t,Lt;Nh.exports=tu});var $h=i((pH,jh)=>{"use strict";jh.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var gr=i((dH,Lh)=>{"use strict";Lh.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var br=i((mH,Fh)=>{"use strict";var bN=_();Fh.exports=bN.Promise});var Jr=i((hH,Uh)=>{"use strict";var qN=_(),Ft=br(),xN=N(),SN=ci(),wN=hi(),TN=R(),Dh=$o(),ON=Z(),nu=Ar(),Bh=Ft&&Ft.prototype,CN=TN("species"),au=!1,Gh=xN(qN.PromiseRejectionEvent),EN=SN("Promise",function(){var e=wN(Ft),r=e!==String(Ft);if(!r&&nu===66||ON&&!(Bh.catch&&Bh.finally))return!0;if(!nu||nu<51||!/native code/.test(e)){var t=new Ft(function(o){o(1)}),n=function(o){o(function(){},function(){})},a=t.constructor={};if(a[CN]=n,au=t.then(function(){})instanceof n,!au)return!0}return!r&&(Dh==="BROWSER"||Dh==="DENO")&&!Gh});Uh.exports={CONSTRUCTOR:EN,REJECTION_EVENT:Gh,SUBCLASSING:au}});var Te=i((yH,Hh)=>{"use strict";var Wh=F(),IN=TypeError,kN=function(e){var r,t;this.promise=new e(function(n,a){if(r!==void 0||t!==void 0)throw new IN("Bad Promise constructor");r=n,t=a}),this.resolve=Wh(r),this.reject=Wh(t)};Hh.exports.f=function(e){return new kN(e)}});var fy=i(()=>{"use strict";var PN=x(),_N=Z(),ca=Nt(),Qe=_(),RN=K(),et=D(),Kh=ke(),zh=xt(),AN=_e(),NN=Lo(),MN=F(),sa=N(),jN=$(),$N=na(),LN=Do(),Xh=Jo().set,cu=Mh(),FN=$h(),DN=gr(),BN=Qo(),Zh=ze(),la=br(),lu=Jr(),ey=Te(),fa="Promise",ry=lu.CONSTRUCTOR,GN=lu.REJECTION_EVENT,UN=lu.SUBCLASSING,iu=Zh.getterFor(fa),WN=Zh.set,Qr=la&&la.prototype,qr=la,oa=Qr,ty=Qe.TypeError,ou=Qe.document,fu=Qe.process,uu=ey.f,HN=uu,KN=!!(ou&&ou.createEvent&&Qe.dispatchEvent),ny="unhandledrejection",zN="rejectionhandled",Vh=0,ay=1,VN=2,vu=1,iy=2,ua,Yh,oy,Jh,uy=function(e){var r;return jN(e)&&sa(r=e.then)?r:!1},sy=function(e,r){var t=r.value,n=r.state===ay,a=n?e.ok:e.fail,o=e.resolve,u=e.reject,l=e.domain,c,s,f;try{a?(n||(r.rejection===iy&&JN(r),r.rejection=vu),a===!0?c=t:(l&&l.enter(),c=a(t),l&&(l.exit(),f=!0)),c===e.promise?u(new ty("Promise-chain cycle")):(s=uy(c))?et(s,c,o,u):o(c)):u(t)}catch(v){l&&!f&&l.exit(),u(v)}},cy=function(e,r){e.notified||(e.notified=!0,cu(function(){for(var t=e.reactions,n;n=t.get();)sy(n,e);e.notified=!1,r&&!e.rejection&&YN(e)}))},ly=function(e,r,t){var n,a;KN?(n=ou.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),Qe.dispatchEvent(n)):n={promise:r,reason:t},!GN&&(a=Qe["on"+e])?a(n):e===ny&&FN("Unhandled promise rejection",t)},YN=function(e){et(Xh,Qe,function(){var r=e.facade,t=e.value,n=Qh(e),a;if(n&&(a=DN(function(){ca?fu.emit("unhandledRejection",t,r):ly(ny,r,t)}),e.rejection=ca||Qh(e)?iy:vu,a.error))throw a.value})},Qh=function(e){return e.rejection!==vu&&!e.parent},JN=function(e){et(Xh,Qe,function(){var r=e.facade;ca?fu.emit("rejectionHandled",r):ly(zN,r,e.value)})},Xr=function(e,r,t){return function(n){e(r,n,t)}},Zr=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=VN,cy(e,!0))},su=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new ty("Promise can't be resolved itself");var n=uy(r);n?cu(function(){var a={done:!1};try{et(n,r,Xr(su,a,e),Xr(Zr,a,e))}catch(o){Zr(a,o,e)}}):(e.value=r,e.state=ay,cy(e,!1))}catch(a){Zr({done:!1},a,e)}}};if(ry&&(qr=function(r){$N(this,oa),MN(r),et(ua,this);var t=iu(this);try{r(Xr(su,t),Xr(Zr,t))}catch(n){Zr(t,n)}},oa=qr.prototype,ua=function(r){WN(this,{type:fa,done:!1,notified:!1,parent:!1,reactions:new BN,rejection:!1,state:Vh,value:null})},ua.prototype=Kh(oa,"then",function(r,t){var n=iu(this),a=uu(LN(this,qr));return n.parent=!0,a.ok=sa(r)?r:!0,a.fail=sa(t)&&t,a.domain=ca?fu.domain:void 0,n.state===Vh?n.reactions.add(a):cu(function(){sy(a,n)}),a.promise}),Yh=function(){var e=new ua,r=iu(e);this.promise=e,this.resolve=Xr(su,r),this.reject=Xr(Zr,r)},ey.f=uu=function(e){return e===qr||e===oy?new Yh(e):HN(e)},!_N&&sa(la)&&Qr!==Object.prototype)){Jh=Qr.then,UN||Kh(Qr,"then",function(r,t){var n=this;return new qr(function(a,o){et(Jh,n,a,o)}).then(r,t)},{unsafe:!0});try{delete Qr.constructor}catch{}zh&&zh(Qr,oa)}PN({global:!0,constructor:!0,wrap:!0,forced:ry},{Promise:qr});oy=RN.Promise;AN(qr,fa,!1,!0);NN(fa)});var Dt=i((qH,vy)=>{"use strict";var QN=br(),XN=zi(),ZN=Jr().CONSTRUCTOR;vy.exports=ZN||!XN(function(e){QN.all(e).then(void 0,function(){})})});var py=i(()=>{"use strict";var eM=x(),rM=D(),tM=F(),nM=Te(),aM=gr(),iM=ve(),oM=Dt();eM({target:"Promise",stat:!0,forced:oM},{all:function(r){var t=this,n=nM.f(t),a=n.resolve,o=n.reject,u=aM(function(){var l=tM(t.resolve),c=[],s=0,f=1;iM(r,function(v){var p=s++,d=!1;f++,rM(l,t,v).then(function(h){d||(d=!0,c[p]=h,--f||a(c))},o)}),--f||a(c)});return u.error&&o(u.value),n.promise}})});var my=i(()=>{"use strict";var uM=x(),sM=Z(),cM=Jr().CONSTRUCTOR,du=br(),lM=U(),fM=N(),vM=ke(),dy=du&&du.prototype;uM({target:"Promise",proto:!0,forced:cM,real:!0},{catch:function(e){return this.then(void 0,e)}});!sM&&fM(du)&&(pu=lM("Promise").prototype.catch,dy.catch!==pu&&vM(dy,"catch",pu,{unsafe:!0}));var pu});var hy=i(()=>{"use strict";var pM=x(),dM=D(),mM=F(),hM=Te(),yM=gr(),gM=ve(),bM=Dt();pM({target:"Promise",stat:!0,forced:bM},{race:function(r){var t=this,n=hM.f(t),a=n.reject,o=yM(function(){var u=mM(t.resolve);gM(r,function(l){dM(u,t,l).then(n.resolve,a)})});return o.error&&a(o.value),n.promise}})});var yy=i(()=>{"use strict";var qM=x(),xM=Te(),SM=Jr().CONSTRUCTOR;qM({target:"Promise",stat:!0,forced:SM},{reject:function(r){var t=xM.f(this),n=t.reject;return n(r),t.promise}})});var mu=i((kH,gy)=>{"use strict";var wM=Q(),TM=$(),OM=Te();gy.exports=function(e,r){if(wM(e),TM(r)&&r.constructor===e)return r;var t=OM.f(e),n=t.resolve;return n(r),t.promise}});var xy=i(()=>{"use strict";var CM=x(),EM=U(),by=Z(),IM=br(),qy=Jr().CONSTRUCTOR,kM=mu(),PM=EM("Promise"),_M=by&&!qy;CM({target:"Promise",stat:!0,forced:by||qy},{resolve:function(r){return kM(_M&&this===PM?IM:this,r)}})});var Sy=i(()=>{"use strict";fy();py();my();hy();yy();xy()});var hu=i(()=>{"use strict";var RM=x(),AM=D(),NM=F(),MM=Te(),jM=gr(),$M=ve(),LM=Dt();RM({target:"Promise",stat:!0,forced:LM},{allSettled:function(r){var t=this,n=MM.f(t),a=n.resolve,o=n.reject,u=jM(function(){var l=NM(t.resolve),c=[],s=0,f=1;$M(r,function(v){var p=s++,d=!1;f++,AM(l,t,v).then(function(h){d||(d=!0,c[p]={status:"fulfilled",value:h},--f||a(c))},function(h){d||(d=!0,c[p]={status:"rejected",reason:h},--f||a(c))})}),--f||a(c)});return u.error&&o(u.value),n.promise}})});var yu=i(()=>{"use strict";var FM=x(),DM=D(),BM=F(),GM=U(),UM=Te(),WM=gr(),HM=ve(),KM=Dt(),wy="No one promise resolved";FM({target:"Promise",stat:!0,forced:KM},{any:function(r){var t=this,n=GM("AggregateError"),a=UM.f(t),o=a.resolve,u=a.reject,l=WM(function(){var c=BM(t.resolve),s=[],f=0,v=1,p=!1;HM(r,function(d){var h=f++,m=!1;v++,DM(c,t,d).then(function(y){m||p||(p=!0,o(y))},function(y){m||p||(m=!0,s[h]=y,--v||u(new n(s,wy)))})}),--v||u(new n(s,wy))});return l.error&&u(l.value),a.promise}})});var bu=i(()=>{"use strict";var zM=x(),VM=_(),YM=_r(),JM=sr(),QM=Te(),XM=F(),Oy=gr(),gu=VM.Promise,Ty=!1,ZM=!gu||!gu.try||Oy(function(){gu.try(function(e){Ty=e===8},8)}).error||!Ty;zM({target:"Promise",stat:!0,forced:ZM},{try:function(e){var r=arguments.length>1?JM(arguments,1):[],t=QM.f(this),n=Oy(function(){return YM(XM(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var qu=i(()=>{"use strict";var ej=x(),rj=Te();ej({target:"Promise",stat:!0},{withResolvers:function(){var r=rj.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var ky=i(()=>{"use strict";var tj=x(),nj=Z(),va=br(),aj=P(),Ey=U(),Iy=N(),ij=Do(),Cy=mu(),oj=ke(),Su=va&&va.prototype,uj=!!va&&aj(function(){Su.finally.call({then:function(){}},function(){})});tj({target:"Promise",proto:!0,real:!0,forced:uj},{finally:function(e){var r=ij(this,Ey("Promise")),t=Iy(e);return this.then(t?function(n){return Cy(r,e()).then(function(){return n})}:e,t?function(n){return Cy(r,e()).then(function(){throw n})}:e)}});!nj&&Iy(va)&&(xu=Ey("Promise").prototype.finally,Su.finally!==xu&&oj(Su,"finally",xu,{unsafe:!0}));var xu});var _y=i((WH,Py)=>{"use strict";jo();mr();Ct();Sy();hu();yu();bu();qu();ky();fr();var sj=K();Py.exports=sj.Promise});var Ay=i((HH,Ry)=>{"use strict";var cj=_y();hr();Ry.exports=cj});var Ny=i(()=>{"use strict";bu()});var My=i(()=>{"use strict";qu()});var $y=i((JH,jy)=>{"use strict";var lj=Ay();Ny();My();jy.exports=lj});var Ly=i(()=>{"use strict";jo()});var Fy=i(()=>{"use strict";hu()});var Dy=i(()=>{"use strict";yu()});var Gy=i((nK,By)=>{"use strict";var fj=$y();Ly();Fy();Dy();By.exports=fj});var rt=i((aK,Uy)=>{"use strict";Uy.exports=Gy()});var Ky=i((cK,Hy)=>{"use strict";xo();var vj=Ur();Hy.exports=vj.f("asyncIterator")});var Vy=i((lK,zy)=>{"use strict";var pj=Ky();zy.exports=pj});var Jy=i((fK,Yy)=>{"use strict";var dj=Vy();Yy.exports=dj});var Xy=i((vK,Qy)=>{"use strict";var mj=Jy();Qy.exports=mj});var pa=i((pK,Zy)=>{"use strict";Zy.exports=Xy()});var ng=i(()=>{"use strict";var hj=x(),yj=P(),gj=re(),tg=qt(),bj=$i(),qj=yj(function(){tg(1)});hj({target:"Object",stat:!0,forced:qj,sham:!bj},{getPrototypeOf:function(r){return tg(gj(r))}})});var ig=i((gK,ag)=>{"use strict";ng();var xj=K();ag.exports=xj.Object.getPrototypeOf});var ug=i((bK,og)=>{"use strict";var Sj=ig();og.exports=Sj});var cg=i((qK,sg)=>{"use strict";var wj=ug();sg.exports=wj});var fg=i((xK,lg)=>{"use strict";var Tj=cg();lg.exports=Tj});var da=i((SK,vg)=>{"use strict";vg.exports=fg()});var dg=i(()=>{"use strict";var Oj=x(),Cj=A(),Ej=Ie(),Ij=Cj([].reverse),pg=[1,2];Oj({target:"Array",proto:!0,forced:String(pg)===String(pg.reverse())},{reverse:function(){return Ej(this)&&(this.length=this.length),Ij(this)}})});var hg=i((OK,mg)=>{"use strict";dg();var kj=oe();mg.exports=kj("Array","reverse")});var gg=i((CK,yg)=>{"use strict";var Pj=B(),_j=hg(),Ou=Array.prototype;yg.exports=function(e){var r=e.reverse;return e===Ou||Pj(Ou,e)&&r===Ou.reverse?_j:r}});var qg=i((EK,bg)=>{"use strict";var Rj=gg();bg.exports=Rj});var Sg=i((IK,xg)=>{"use strict";var Aj=qg();xg.exports=Aj});var Tg=i((kK,wg)=>{"use strict";var Nj=Sg();wg.exports=Nj});var Cg=i((PK,Og)=>{"use strict";Og.exports=Tg()});var Cu=i((_K,Ut)=>{function Mj(e,r){this.v=e,this.k=r}Ut.exports=Mj,Ut.exports.__esModule=!0,Ut.exports.default=Ut.exports});var Eg=i(()=>{"use strict";var jj=x(),$j=G(),Lj=Ve();jj({target:"Object",stat:!0,sham:!$j},{create:Lj})});var kg=i((NK,Ig)=>{"use strict";Eg();var Fj=K(),Dj=Fj.Object;Ig.exports=function(r,t){return Dj.create(r,t)}});var _g=i((MK,Pg)=>{"use strict";var Bj=kg();Pg.exports=Bj});var Ag=i((jK,Rg)=>{"use strict";var Gj=_g();Rg.exports=Gj});var Mg=i(($K,Ng)=>{"use strict";var Uj=Ag();Ng.exports=Uj});var ma=i((LK,jg)=>{"use strict";jg.exports=Mg()});var Iu=i((FK,Dg)=>{"use strict";var Lg=A(),Wj=F(),Hj=$(),Kj=W(),$g=sr(),zj=Pr(),Fg=Function,Vj=Lg([].concat),Yj=Lg([].join),Eu={},Jj=function(e,r,t){if(!Kj(Eu,r)){for(var n=[],a=0;a<r;a++)n[a]="a["+a+"]";Eu[r]=Fg("C,a","return new C("+Yj(n,",")+")")}return Eu[r](e,t)};Dg.exports=zj?Fg.bind:function(r){var t=Wj(this),n=t.prototype,a=$g(arguments,1),o=function(){var l=Vj(a,$g(arguments));return this instanceof o?Jj(t,l.length,l):t.apply(r,l)};return Hj(n)&&(o.prototype=n),o}});var Gg=i(()=>{"use strict";var Qj=x(),Bg=Iu();Qj({target:"Function",proto:!0,forced:Function.bind!==Bg},{bind:Bg})});var Wg=i((GK,Ug)=>{"use strict";Gg();var Xj=oe();Ug.exports=Xj("Function","bind")});var Kg=i((UK,Hg)=>{"use strict";var Zj=B(),e$=Wg(),ku=Function.prototype;Hg.exports=function(e){var r=e.bind;return e===ku||Zj(ku,e)&&r===ku.bind?e$:r}});var Vg=i((WK,zg)=>{"use strict";var r$=Kg();zg.exports=r$});var Jg=i((HK,Yg)=>{"use strict";var t$=Vg();Yg.exports=t$});var Xg=i((KK,Qg)=>{"use strict";var n$=Jg();Qg.exports=n$});var Wt=i((zK,Zg)=>{"use strict";Zg.exports=Xg()});var eb=i(()=>{"use strict";var a$=x(),i$=xt();a$({target:"Object",stat:!0},{setPrototypeOf:i$})});var tb=i((JK,rb)=>{"use strict";eb();var o$=K();rb.exports=o$.Object.setPrototypeOf});var ab=i((QK,nb)=>{"use strict";var u$=tb();nb.exports=u$});var ob=i((XK,ib)=>{"use strict";var s$=ab();ib.exports=s$});var sb=i((ZK,ub)=>{"use strict";var c$=ob();ub.exports=c$});var ha=i((ez,cb)=>{"use strict";cb.exports=sb()});var fb=i(()=>{"use strict";var l$=x(),f$=G(),lb=te().f;l$({target:"Object",stat:!0,forced:Object.defineProperty!==lb,sham:!f$},{defineProperty:lb})});var db=i((nz,pb)=>{"use strict";fb();var v$=K(),vb=v$.Object,p$=pb.exports=function(r,t,n){return vb.defineProperty(r,t,n)};vb.defineProperty.sham&&(p$.sham=!0)});var hb=i((az,mb)=>{"use strict";var d$=db();mb.exports=d$});var gb=i((iz,yb)=>{"use strict";var m$=hb();yb.exports=m$});var qb=i((oz,bb)=>{"use strict";var h$=gb();bb.exports=h$});var Ht=i((uz,xb)=>{"use strict";xb.exports=qb()});var Pu=i((sz,Ae)=>{var y$=Ht();function ya(e,r,t,n){var a=y$;try{a({},"",{})}catch{a=0}Ae.exports=ya=function(u,l,c,s){function f(v,p){ya(u,v,function(d){return this._invoke(v,p,d)})}l?a?a(u,l,{value:c,enumerable:!s,configurable:!s,writable:!s}):u[l]=c:(f("next",0),f("throw",1),f("return",2))},Ae.exports.__esModule=!0,Ae.exports.default=Ae.exports,ya(e,r,t,n)}Ae.exports=ya,Ae.exports.__esModule=!0,Ae.exports.default=Ae.exports});var Ru=i((cz,Ne)=>{var Sb=we(),_u=ma(),g$=Wt(),b$=da(),wb=ha(),Ce=Pu();function Tb(){var e,r,t=typeof Sb=="function"?Sb:{},n=t.iterator||"@@iterator",a=t.toStringTag||"@@toStringTag";function o(d,h,m,y){var b=h&&h.prototype instanceof l?h:l,q=_u(b.prototype);return Ce(q,"_invoke",function(I,E,S){var T,w,C,j=0,be=S||[],k=!1,ee={p:0,n:0,v:e,a:qe,f:g$(qe).call(qe,e,4),d:function(L,pe){return T=L,w=0,C=e,ee.n=pe,u}};function qe(J,L){for(w=J,C=L,r=0;!k&&j&&!pe&&r<be.length;r++){var pe,O=be[r],Ir=ee.p,Ue=O[2];J>3?(pe=Ue===L)&&(C=O[(w=O[4])?5:(w=3,3)],O[4]=O[5]=e):O[0]<=Ir&&((pe=J<2&&Ir<O[1])?(w=0,ee.v=L,ee.n=O[1]):Ir<Ue&&(pe=J<3||O[0]>L||L>Ue)&&(O[4]=J,O[5]=L,ee.n=Ue,w=0))}if(pe||J>1)return u;throw k=!0,L}return function(J,L,pe){if(j>1)throw TypeError("Generator is already running");for(k&&L===1&&qe(L,pe),w=L,C=pe;(r=w<2?e:C)||!k;){T||(w?w<3?(w>1&&(ee.n=-1),qe(w,C)):ee.n=C:ee.v=C);try{if(j=2,T){if(w||(J="next"),r=T[J]){if(!(r=r.call(T,C)))throw TypeError("iterator result is not an object");if(!r.done)return r;C=r.value,w<2&&(w=0)}else w===1&&(r=T.return)&&r.call(T),w<2&&(C=TypeError("The iterator does not provide a '"+J+"' method"),w=1);T=e}else if((r=(k=ee.n<0)?C:I.call(E,ee))!==u)break}catch(O){T=e,w=1,C=O}finally{j=1}}return{value:r,done:k}}}(d,m,y),!0),q}var u={};function l(){}function c(){}function s(){}r=b$;var f=[][n]?r(r([][n]())):(Ce(r={},n,function(){return this}),r),v=s.prototype=l.prototype=_u(f);function p(d){return wb?wb(d,s):(d.__proto__=s,Ce(d,a,"GeneratorFunction")),d.prototype=_u(v),d}return c.prototype=s,Ce(v,"constructor",s),Ce(s,"constructor",c),c.displayName="GeneratorFunction",Ce(s,a,"GeneratorFunction"),Ce(v),Ce(v,a,"Generator"),Ce(v,n,function(){return this}),Ce(v,"toString",function(){return"[object Generator]"}),(Ne.exports=Tb=function(){return{w:o,m:p}},Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports)()}Ne.exports=Tb,Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports});var Mu=i((lz,Kt)=>{var q$=we(),x$=pa(),S$=Cu(),Au=Pu();function Nu(e,r){function t(a,o,u,l){try{var c=e[a](o),s=c.value;return s instanceof S$?r.resolve(s.v).then(function(f){t("next",f,u,l)},function(f){t("throw",f,u,l)}):r.resolve(s).then(function(f){c.value=f,u(c)},function(f){return t("throw",f,u,l)})}catch(f){l(f)}}var n;this.next||(Au(Nu.prototype),Au(Nu.prototype,typeof q$=="function"&&x$||"@asyncIterator",function(){return this})),Au(this,"_invoke",function(a,o,u){function l(){return new r(function(c,s){t(a,u,c,s)})}return n=n?n.then(l,l):l()},!0)}Kt.exports=Nu,Kt.exports.__esModule=!0,Kt.exports.default=Kt.exports});var ju=i((fz,zt)=>{var w$=rt(),T$=Ru(),O$=Mu();function C$(e,r,t,n,a){return new O$(T$().w(e,r,t,n),a||w$)}zt.exports=C$,zt.exports.__esModule=!0,zt.exports.default=zt.exports});var Ob=i((vz,Vt)=>{var E$=ju();function I$(e,r,t,n,a){var o=E$(e,r,t,n,a);return o.next().then(function(u){return u.done?u.value:o.next()})}Vt.exports=I$,Vt.exports.__esModule=!0,Vt.exports.default=Vt.exports});var Ib=i((pz,Eb)=>{"use strict";var Cb=He(),k$=TypeError;Eb.exports=function(e,r){if(!delete e[r])throw new k$("Cannot delete property "+Cb(r)+" of "+Cb(e))}});var kb=i(()=>{"use strict";var P$=x(),_$=re(),R$=le(),A$=Dr(),N$=Ib(),M$=Ot(),j$=[].unshift(0)!==1,$$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},L$=j$||!$$();P$({target:"Array",proto:!0,arity:1,forced:L$},{unshift:function(r){var t=_$(this),n=R$(t),a=arguments.length;if(a){M$(n+a);for(var o=n;o--;){var u=o+a;o in t?t[u]=t[o]:N$(t,u)}for(var l=0;l<a;l++)t[l]=arguments[l]}return A$(t,n+a)}})});var _b=i((hz,Pb)=>{"use strict";kb();var F$=oe();Pb.exports=F$("Array","unshift")});var Ab=i((yz,Rb)=>{"use strict";var D$=B(),B$=_b(),$u=Array.prototype;Rb.exports=function(e){var r=e.unshift;return e===$u||D$($u,e)&&r===$u.unshift?B$:r}});var Mb=i((gz,Nb)=>{"use strict";var G$=Ab();Nb.exports=G$});var $b=i((bz,jb)=>{"use strict";var U$=Mb();jb.exports=U$});var Fb=i((qz,Lb)=>{"use strict";var W$=$b();Lb.exports=W$});var Bb=i((xz,Db)=>{"use strict";Db.exports=Fb()});var Gb=i((Sz,Yt)=>{var H$=Bb();function K$(e){var r=Object(e),t=[];for(var n in r)H$(t).call(t,n);return function a(){for(;t.length;)if((n=t.pop())in r)return a.value=n,a.done=!1,a;return a.done=!0,a}}Yt.exports=K$,Yt.exports.__esModule=!0,Yt.exports.default=Yt.exports});var Wb=i((wz,Ub)=>{"use strict";mr();Ct();fr();wo();var z$=Ur();Ub.exports=z$.f("iterator")});var Kb=i((Tz,Hb)=>{"use strict";var V$=Wb();hr();Hb.exports=V$});var Vb=i((Oz,zb)=>{"use strict";var Y$=Kb();zb.exports=Y$});var Jb=i((Cz,Yb)=>{"use strict";var J$=Vb();Yb.exports=J$});var Jt=i((Ez,Qb)=>{"use strict";Qb.exports=Jb()});var Xb=i((Iz,Me)=>{var ga=we(),Q$=Jt();function Lu(e){"@babel/helpers - typeof";return Me.exports=Lu=typeof ga=="function"&&typeof Q$=="symbol"?function(r){return typeof r}:function(r){return r&&typeof ga=="function"&&r.constructor===ga&&r!==ga.prototype?"symbol":typeof r},Me.exports.__esModule=!0,Me.exports.default=Me.exports,Lu(e)}Me.exports=Lu,Me.exports.__esModule=!0,Me.exports.default=Me.exports});var Zb=i((kz,Qt)=>{var X$=Xb().default,Z$=we(),eL=Jt();function rL(e){if(e!=null){var r=e[typeof Z$=="function"&&eL||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(X$(e)+" is not iterable")}Qt.exports=rL,Qt.exports.__esModule=!0,Qt.exports.default=Qt.exports});var tq=i((Pz,je)=>{var eq=da(),tL=Cg(),nL=Cu(),aL=Ru(),iL=Ob(),oL=ju(),uL=Mu(),sL=Gb(),rq=Zb();function Fu(){"use strict";var e=aL(),r=e.m(Fu),t=(eq?eq(r):r.__proto__).constructor;function n(u){var l=typeof u=="function"&&u.constructor;return!!l&&(l===t||(l.displayName||l.name)==="GeneratorFunction")}var a={throw:1,return:2,break:3,continue:3};function o(u){var l,c;return function(s){l||(l={stop:function(){return c(s.a,2)},catch:function(){return s.v},abrupt:function(v,p){return c(s.a,a[v],p)},delegateYield:function(v,p,d){return l.resultName=p,c(s.d,rq(v),d)},finish:function(v){return c(s.f,v)}},c=function(v,p,d){s.p=l.prev,s.n=l.next;try{return v(p,d)}finally{l.next=s.n}}),l.resultName&&(l[l.resultName]=s.v,l.resultName=void 0),l.sent=s.v,l.next=s.n;try{return u.call(this,l)}finally{s.p=l.prev,s.n=l.next}}}return(je.exports=Fu=function(){return{wrap:function(c,s,f,v){return e.w(o(c),s,f,v&&tL(v).call(v))},isGeneratorFunction:n,mark:e.m,awrap:function(c,s){return new nL(c,s)},AsyncIterator:uL,async:function(c,s,f,v,p){return(n(s)?oL:iL)(o(c),s,f,v,p)},keys:sL,values:rq}},je.exports.__esModule=!0,je.exports.default=je.exports)()}je.exports=Fu,je.exports.__esModule=!0,je.exports.default=je.exports});var se=i((_z,nq)=>{var ba=tq()();nq.exports=ba;try{regeneratorRuntime=ba}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=ba:Function("r","regeneratorRuntime = r")(ba)}});var Du=i((xa,iq)=>{"use strict";Object.defineProperty(xa,"__esModule",{value:!0});var qa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},aq=function(){function e(r,t){var n=[],a=!0,o=!1,u=void 0;try{for(var l=r[Symbol.iterator](),c;!(a=(c=l.next()).done)&&(n.push(c.value),!(t&&n.length===t));a=!0);}catch(s){o=!0,u=s}finally{try{!a&&l.return&&l.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();xa.default=cL;function cL(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(a){return a.type==="tag"||a.type==="script"||a.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var a=this.attribs,o=Object.keys(a),u=o.reduce(function(l,c,s){return l[s]={name:c,value:a[c]},l},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var a=[];return Ze(this.childTags,function(o){(o.name===n||n==="*")&&a.push(o)}),a}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var a=n.trim().replace(/\s+/g," ").split(" "),o=[];return Ze([this],function(u){var l=u.attribs.class;l&&a.every(function(c){return l.indexOf(c)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var a=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=lL(n),u=o.shift(),l=o.length;return u(this).filter(function(c){for(var s=0;s<l;){if(c=o[s](c,a),!c)return!1;s+=1}return!0})}),t.contains||(t.contains=function(n){var a=!1;return Ze([this],function(o,u){o===n&&(a=!0,u())}),a}),!0}function lL(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,a=r.split(":"),o=aq(a,2),u=o[0],l=o[1],c=null,s=null;if(function(){switch(!0){case/>/.test(u):s=function(S){return function(T){return T(S.parent)&&S.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");c=function(S){var T=S.attribs.class;return T&&h.every(function(w){return T.indexOf(w)>-1})},s=function(S,T){return n?S.getElementsByClassName(h.join(" ")):typeof S=="function"?S(c):Xt(S,T,c)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),y=aq(m,2),b=y[0],q=y[1];c=function(S){var T=Object.keys(S.attribs).indexOf(b)>-1;return!!(T&&(!q||S.attribs[b]===q))},s=function(S,T){if(n){var w=function(){var C=[];return Ze([S],function(j){c(j)&&C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":qa(w))==="object")return w.v}return typeof S=="function"?S(c):Xt(S,T,c)};break;case/^#/.test(u):var I=u.substr(1);c=function(S){return S.attribs.id===I},s=function(S,T){if(n){var w=function(){var C=[];return Ze([S],function(j,be){c(j)&&(C.push(j),be())}),{v:C}}();if((typeof w>"u"?"undefined":qa(w))==="object")return w.v}return typeof S=="function"?S(c):Xt(S,T,c)};break;case/\*/.test(u):c=function(S){return!0},s=function(S,T){if(n){var w=function(){var C=[];return Ze([S],function(j){return C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":qa(w))==="object")return w.v}return typeof S=="function"?S(c):Xt(S,T,c)};break;default:c=function(S){return S.name===u},s=function(S,T){if(n){var w=function(){var C=[];return Ze([S],function(j){c(j)&&C.push(j)}),{v:C}}();if((typeof w>"u"?"undefined":qa(w))==="object")return w.v}return typeof S=="function"?S(c):Xt(S,T,c)}}}(),!l)return s;var f=l.match(/-(child|type)\((\d+)\)$/),v=f[1],p=parseInt(f[2],10)-1,d=function(m){if(m){var y=m.parent.childTags;v==="type"&&(y=y.filter(c));var b=y.findIndex(function(q){return q===m});if(b===p)return!0}return!1};return function(m){var y=s(m);return n?y.reduce(function(b,q){return d(q)&&b.push(q),b},[]):d(y)&&y}})}function Ze(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&Ze(t.childTags,r)})}function Xt(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}iq.exports=xa.default});var wa=i(Sa=>{"use strict";Object.defineProperty(Sa,"__esModule",{value:!0});Sa.convertNodeList=fL;Sa.escapeValue=vL;function fL(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function vL(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var mq=i((Ta,dq)=>{"use strict";Object.defineProperty(Ta,"__esModule",{value:!0});Ta.default=pL;var cq=wa(),oq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function pL(e,r){var t=r.root,n=t===void 0?document:t,a=r.skip,o=a===void 0?null:a,u=r.priority,l=u===void 0?["id","class","href","src"]:u,c=r.ignore,s=c===void 0?{}:c,f=[],v=e,p=f.length,d=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(b){return typeof b!="function"?function(q){return q===b}:b}),m=function(q){return o&&h.some(function(I){return I(q)})};for(Object.keys(s).forEach(function(b){b==="class"&&(d=!0);var q=s[b];typeof q!="function"&&(typeof q=="number"&&(q=q.toString()),typeof q=="string"&&(q=new RegExp((0,cq.escapeValue)(q).replace(/\\/g,"\\\\"))),typeof q=="boolean"&&(q=q?/(?:)/:/.^/),s[b]=function(I,E){return q.test(E)})}),d&&function(){var b=s.attribute;s.attribute=function(q,I,E){return s.class(I)||b&&b(q,I,E)}}();v!==n;){if(m(v)!==!0){if(uq(l,v,s,f,n)||sq(v,s,f,n))break;uq(l,v,s,f),f.length===p&&sq(v,s,f),f.length===p&&dL(l,v,s,f)}v=v.parentNode,p=f.length}if(v===n){var y=vq(l,v,s);f.unshift(y)}return f.join(" ")}function uq(e,r,t,n){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=lq(e,r,t);if(o){var u=a.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function lq(e,r,t){for(var n=r.attributes,a=Object.keys(n).sort(function(m,y){var b=e.indexOf(n[m].name),q=e.indexOf(n[y].name);return q===-1?b===-1?0:-1:b-q}),o=0,u=a.length;o<u;o++){var l=a[o],c=n[l],s=c.name,f=(0,cq.escapeValue)(c.value),v=t[s]||t.attribute,p=oq[s]||oq.attribute;if(!pq(v,s,f,p)){var d="["+s+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(s==="id"&&(d="#"+f),s==="class")){var h=f.trim().replace(/\s+/g,".");d="."+h}return d}}return null}function sq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,a=fq(e,r);if(a){var o=n.getElementsByTagName(a);if(o.length===1)return t.unshift(a),!0}return!1}function fq(e,r){var t=e.tagName.toLowerCase();return pq(r.tag,null,t)?null:t}function dL(e,r,t,n){for(var a=r.parentNode,o=a.childTags||a.children,u=0,l=o.length;u<l;u++){var c=o[u];if(c===r){var s=vq(e,c,t);if(!s)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,c,t,s);var f="> "+s+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function vq(e,r,t){var n=lq(e,r,t);return n||(n=fq(r,t)),n}function pq(e,r,t,n){if(!t)return!0;var a=e||n;return a?a(r,t,n):!1}dq.exports=Ta.default});var Bu=i((Ca,hq)=>{"use strict";Object.defineProperty(Ca,"__esModule",{value:!0});Ca.default=bL;var mL=Du(),hL=gL(mL),yL=wa();function gL(e){return e&&e.__esModule?e:{default:e}}function bL(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,yL.convertNodeList)(r):[r]),!r.length||r.some(function(v){return v.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,hL.default)(r[0],t),a=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(a.length<2)return Oa("",e,"",r);for(var o=[a.pop()];a.length>1;){var u=a.pop(),l=a.join(" "),c=o.join(" "),s=l+" "+c,f=document.querySelectorAll(s);f.length!==r.length&&o.unshift(Oa(l,u,c,r))}return o.unshift(a[0]),a=o,a[0]=Oa("",a[0],a.slice(1).join(" "),r),a[a.length-1]=Oa(a.slice(0,-1).join(" "),a[a.length-1],"",r),n&&delete global.document,a.join(" ").replace(/>/g,"> ").trim()}function Oa(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var a=r.replace(/=.*$/,"]"),o=""+e+a+t,u=document.querySelectorAll(o);if(tt(u,n))r=a;else for(var l=document.querySelectorAll(""+e+a),c=function(){var E=l[s];if(n.some(function(T){return E.contains(T)})){var S=E.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),tt(u,n)&&(r=S),"break"}},s=0,f=l.length;s<f;s++){var o,u,v=c();if(v==="break")break}}if(/>/.test(r)){var p=r.replace(/>/,""),o=""+e+p+t,u=document.querySelectorAll(o);tt(u,n)&&(r=p)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);tt(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(I){return"."+I}).sort(function(I,E){return I.length-E.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);tt(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var y=document.querySelectorAll(""+e+r),b=function(){var E=y[s];if(n.some(function(T){return E.contains(T)})){var S=E.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),tt(u,n)&&(r=S),"break"}},s=0,f=y.length;s<f;s++){var o,u,q=b();if(q==="break")break}}return r}function tt(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var a=0;a<t;a++)if(e[a]===n)return!0;return!1})}hq.exports=Ca.default});var Gu=i(Ea=>{"use strict";Object.defineProperty(Ea,"__esModule",{value:!0});Ea.getCommonAncestor=qL;Ea.getCommonProperties=xL;function qL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,a=[];e.forEach(function(v,p){for(var d=[];v!==n;)v=v.parentNode,d.unshift(v);a[p]=d}),a.sort(function(v,p){return v.length-p.length});for(var o=a.shift(),u=null,l=function(){var p=o[c],d=a.some(function(h){return!h.some(function(m){return m===p})});if(d)return"break";u=p},c=0,s=o.length;c<s;c++){var f=l();if(f==="break")break}return u}function xL(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,a=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(c){return u.some(function(s){return s===c})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(a!==void 0&&function(){var c=t.attributes,s=Object.keys(c).reduce(function(p,d){var h=c[d],m=h.name;return h&&m!=="class"&&(p[m]=h.value),p},{}),f=Object.keys(s),v=Object.keys(a);f.length?v.length?(a=v.reduce(function(p,d){var h=a[d];return h===s[d]&&(p[d]=h),p},{}),Object.keys(a).length?r.attributes=a:delete r.attributes):r.attributes=s:delete r.attributes}(),o!==void 0){var l=t.tagName.toLowerCase();o?l!==o&&delete r.tag:r.tag=l}}),r}});var Sq=i(Zt=>{"use strict";Object.defineProperty(Zt,"__esModule",{value:!0});var SL=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Zt.getSingleSelector=Wu;Zt.getMultiSelector=xq;Zt.default=IL;var wL=Du(),gq=Uu(wL),TL=mq(),OL=Uu(TL),CL=Bu(),bq=Uu(CL),yq=wa(),qq=Gu();function Uu(e){return e&&e.__esModule?e:{default:e}}function Wu(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":SL(e))+'")');var t=(0,gq.default)(e,r),n=(0,OL.default)(e,r),a=(0,bq.default)(n,e,r);return t&&delete global.document,a}function xq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,yq.convertNodeList)(e)),e.some(function(s){return s.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,gq.default)(e[0],r),n=(0,qq.getCommonAncestor)(e,r),a=Wu(n,r),o=EL(e),u=o[0],l=(0,bq.default)(a+" "+u,e,r),c=(0,yq.convertNodeList)(document.querySelectorAll(l));return e.every(function(s){return c.some(function(f){return f===s})})?(t&&delete global.document,l):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function EL(e){var r=(0,qq.getCommonProperties)(e),t=r.classes,n=r.attributes,a=r.tag,o=[];if(a&&o.push(a),t){var u=t.map(function(c){return"."+c}).join("");o.push(u)}if(n){var l=Object.keys(n).reduce(function(c,s){return c.push("["+s+'="'+n[s]+'"]'),c},[]).join("");o.push(l)}return o.length,[o.join("")]}function IL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?xq(e,r):Wu(e,r)}});var Oq=i(ae=>{"use strict";Object.defineProperty(ae,"__esModule",{value:!0});ae.default=ae.common=ae.optimize=ae.getMultiSelector=ae.getSingleSelector=ae.select=void 0;var Hu=Sq();Object.defineProperty(ae,"getSingleSelector",{enumerable:!0,get:function(){return Hu.getSingleSelector}});Object.defineProperty(ae,"getMultiSelector",{enumerable:!0,get:function(){return Hu.getMultiSelector}});var wq=Tq(Hu),kL=Bu(),PL=Tq(kL),_L=Gu(),RL=AL(_L);function AL(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Tq(e){return e&&e.__esModule?e:{default:e}}ae.select=wq.default;ae.optimize=PL.default;ae.common=RL;ae.default=wq.default});var Cq=i(()=>{"use strict";var UL=x(),WL=Ie();UL({target:"Array",stat:!0},{isArray:WL})});var Iq=i((Vz,Eq)=>{"use strict";Cq();var HL=K();Eq.exports=HL.Array.isArray});var Pq=i((Yz,kq)=>{"use strict";var KL=Iq();kq.exports=KL});var Rq=i((Jz,_q)=>{"use strict";var zL=Pq();_q.exports=zL});var Nq=i((Qz,Aq)=>{"use strict";var VL=Rq();Aq.exports=VL});var jq=i((Xz,Mq)=>{"use strict";Mq.exports=Nq()});var Fq=i(()=>{"use strict";var YL=x(),JL=re(),QL=le(),XL=Dr(),ZL=Ot(),eF=P(),rF=eF(function(){return[].push.call({length:4294967296},1)!==4294967297}),tF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},nF=rF||!tF();YL({target:"Array",proto:!0,arity:1,forced:nF},{push:function(r){var t=JL(this),n=QL(t),a=arguments.length;ZL(n+a);for(var o=0;o<a;o++)t[n]=arguments[o],n++;return XL(t,n),n}})});var Bq=i((tV,Dq)=>{"use strict";Fq();var aF=oe();Dq.exports=aF("Array","push")});var Uq=i((nV,Gq)=>{"use strict";var iF=B(),oF=Bq(),Ku=Array.prototype;Gq.exports=function(e){var r=e.push;return e===Ku||iF(Ku,e)&&r===Ku.push?oF:r}});var Hq=i((aV,Wq)=>{"use strict";var uF=Uq();Wq.exports=uF});var zq=i((iV,Kq)=>{"use strict";var sF=Hq();Kq.exports=sF});var Yq=i((oV,Vq)=>{"use strict";var cF=zq();Vq.exports=cF});var zu=i((uV,Jq)=>{"use strict";Jq.exports=Yq()});var ux=i(()=>{"use strict";var lF=x(),fF=It().map,vF=yt(),pF=vF("map");lF({target:"Array",proto:!0,forced:!pF},{map:function(r){return fF(this,r,arguments.length>1?arguments[1]:void 0)}})});var cx=i((MV,sx)=>{"use strict";ux();var dF=oe();sx.exports=dF("Array","map")});var fx=i((jV,lx)=>{"use strict";var mF=B(),hF=cx(),Yu=Array.prototype;lx.exports=function(e){var r=e.map;return e===Yu||mF(Yu,e)&&r===Yu.map?hF:r}});var px=i(($V,vx)=>{"use strict";var yF=fx();vx.exports=yF});var mx=i((LV,dx)=>{"use strict";var gF=px();dx.exports=gF});var yx=i((FV,hx)=>{"use strict";var bF=mx();hx.exports=bF});var bx=i((DV,gx)=>{"use strict";gx.exports=yx()});var xx=i((BV,qx)=>{qx.exports=bx()});var wx=i((GV,Sx)=>{Sx.exports=rt()});var Ix=i((UV,Ex)=>{"use strict";var qF=F(),xF=re(),SF=dn(),wF=le(),Tx=TypeError,Ox="Reduce of empty array with no initial value",Cx=function(e){return function(r,t,n,a){var o=xF(r),u=SF(o),l=wF(o);if(qF(t),l===0&&n<2)throw new Tx(Ox);var c=e?l-1:0,s=e?-1:1;if(n<2)for(;;){if(c in u){a=u[c],c+=s;break}if(c+=s,e?c<0:l<=c)throw new Tx(Ox)}for(;e?c>=0:l>c;c+=s)c in u&&(a=t(a,u[c],c,o));return a}};Ex.exports={left:Cx(!1),right:Cx(!0)}});var Ju=i((WV,kx)=>{"use strict";var TF=P();kx.exports=function(e,r){var t=[][e];return!!t&&TF(function(){t.call(null,r||function(){return 1},1)})}});var _x=i(()=>{"use strict";var OF=x(),CF=Ix().left,EF=Ju(),Px=Ar(),IF=Nt(),kF=!IF&&Px>79&&Px<83,PF=kF||!EF("reduce");OF({target:"Array",proto:!0,forced:PF},{reduce:function(r){var t=arguments.length;return CF(this,r,t,t>1?arguments[1]:void 0)}})});var Ax=i((zV,Rx)=>{"use strict";_x();var _F=oe();Rx.exports=_F("Array","reduce")});var Mx=i((VV,Nx)=>{"use strict";var RF=B(),AF=Ax(),Qu=Array.prototype;Nx.exports=function(e){var r=e.reduce;return e===Qu||RF(Qu,e)&&r===Qu.reduce?AF:r}});var $x=i((YV,jx)=>{"use strict";var NF=Mx();jx.exports=NF});var Fx=i((JV,Lx)=>{"use strict";var MF=$x();Lx.exports=MF});var Bx=i((QV,Dx)=>{"use strict";var jF=Fx();Dx.exports=jF});var Ux=i((XV,Gx)=>{"use strict";Gx.exports=Bx()});var Hx=i((ZV,Wx)=>{Wx.exports=Ux()});var Vx=i((e9,zx)=>{"use strict";var $F=Ie(),LF=le(),FF=Ot(),DF=z(),BF=Fr(),Kx=function(e,r,t,n,a,o,u,l){for(var c=a,s=0,f=u?DF(u,l):!1,v,p;s<n;)s in t&&(v=f?f(t[s],s,r):t[s],o>0&&$F(v)?(p=LF(v),c=Kx(e,r,v,p,c,o-1)-1):(FF(c+1),BF(e,c,v)),c++),s++;return c};zx.exports=Kx});var Yx=i(()=>{"use strict";var GF=x(),UF=Vx(),WF=F(),HF=re(),KF=le(),zF=Mn();GF({target:"Array",proto:!0},{flatMap:function(r){var t=HF(this),n=KF(t),a;return WF(r),a=zF(t,0),UF(a,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),a}})});var Jx=i(()=>{"use strict";var VF=Oo();VF("flatMap")});var Xx=i((i9,Qx)=>{"use strict";Yx();Jx();var YF=oe();Qx.exports=YF("Array","flatMap")});var eS=i((o9,Zx)=>{"use strict";var JF=B(),QF=Xx(),Xu=Array.prototype;Zx.exports=function(e){var r=e.flatMap;return e===Xu||JF(Xu,e)&&r===Xu.flatMap?QF:r}});var tS=i((u9,rS)=>{"use strict";var XF=eS();rS.exports=XF});var aS=i((s9,nS)=>{"use strict";var ZF=tS();nS.exports=ZF});var oS=i((c9,iS)=>{"use strict";var eD=aS();iS.exports=eD});var sS=i((l9,uS)=>{"use strict";uS.exports=oS()});var lS=i((f9,cS)=>{cS.exports=sS()});var vS=i((v9,fS)=>{"use strict";Yi();var rD=oe();fS.exports=rD("Array","concat")});var dS=i((p9,pS)=>{"use strict";var tD=B(),nD=vS(),Zu=Array.prototype;pS.exports=function(e){var r=e.concat;return e===Zu||tD(Zu,e)&&r===Zu.concat?nD:r}});var hS=i((d9,mS)=>{"use strict";var aD=dS();mS.exports=aD});var gS=i((m9,yS)=>{"use strict";var iD=hS();yS.exports=iD});var qS=i((h9,bS)=>{"use strict";var oD=gS();bS.exports=oD});var SS=i((y9,xS)=>{"use strict";xS.exports=qS()});var es=i((g9,wS)=>{wS.exports=SS()});var CS=i(()=>{});var IS=i((B9,ES)=>{"use strict";CS();To();var hD=Ur();ES.exports=hD.f("toPrimitive")});var PS=i((G9,kS)=>{"use strict";var yD=IS();kS.exports=yD});var RS=i((U9,_S)=>{"use strict";var gD=PS();_S.exports=gD});var NS=i((W9,AS)=>{"use strict";var bD=RS();AS.exports=bD});var jS=i((H9,MS)=>{"use strict";MS.exports=NS()});var HS=i((v7,WS)=>{"use strict";var xD=$(),SD=xe(),wD=R(),TD=wD("match");WS.exports=function(e){var r;return xD(e)&&((r=e[TD])!==void 0?!!r:SD(e)==="RegExp")}});var zS=i((p7,KS)=>{"use strict";var OD=HS(),CD=TypeError;KS.exports=function(e){if(OD(e))throw new CD("The method doesn't accept regular expressions");return e}});var YS=i((d7,VS)=>{"use strict";var ED=R(),ID=ED("match");VS.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[ID]=!1,"/./"[e](r)}catch{}}return!1}});var XS=i(()=>{"use strict";var kD=x(),PD=ct(),_D=ft().f,RD=bi(),JS=Ke(),AD=zS(),ND=ir(),MD=YS(),jD=Z(),$D=PD("".slice),LD=Math.min,QS=MD("startsWith"),FD=!jD&&!QS&&!!function(){var e=_D(String.prototype,"startsWith");return e&&!e.writable}();kD({target:"String",proto:!0,forced:!FD&&!QS},{startsWith:function(r){var t=JS(ND(this));AD(r);var n=RD(LD(arguments.length>1?arguments[1]:void 0,t.length)),a=JS(r);return $D(t,n,n+a.length)===a}})});var ew=i((y7,ZS)=>{"use strict";XS();var DD=oe();ZS.exports=DD("String","startsWith")});var tw=i((g7,rw)=>{"use strict";var BD=B(),GD=ew(),as=String.prototype;rw.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===as||BD(as,e)&&r===as.startsWith?GD:r}});var aw=i((b7,nw)=>{"use strict";var UD=tw();nw.exports=UD});var ow=i((q7,iw)=>{"use strict";var WD=aw();iw.exports=WD});var sw=i((x7,uw)=>{"use strict";var HD=ow();uw.exports=HD});var lw=i((S7,cw)=>{"use strict";cw.exports=sw()});var vw=i((w7,fw)=>{fw.exports=lw()});var pw=i(()=>{"use strict";var KD=x(),zD=It().filter,VD=yt(),YD=VD("filter");KD({target:"Array",proto:!0,forced:!YD},{filter:function(r){return zD(this,r,arguments.length>1?arguments[1]:void 0)}})});var mw=i((C7,dw)=>{"use strict";pw();var JD=oe();dw.exports=JD("Array","filter")});var yw=i((E7,hw)=>{"use strict";var QD=B(),XD=mw(),is=Array.prototype;hw.exports=function(e){var r=e.filter;return e===is||QD(is,e)&&r===is.filter?XD:r}});var bw=i((I7,gw)=>{"use strict";var ZD=yw();gw.exports=ZD});var xw=i((k7,qw)=>{"use strict";var e3=bw();qw.exports=e3});var ww=i((P7,Sw)=>{"use strict";var r3=xw();Sw.exports=r3});var Ow=i((_7,Tw)=>{"use strict";Tw.exports=ww()});var Ew=i((R7,Cw)=>{Cw.exports=Ow()});var Uw=i(()=>{"use strict";var c3=x(),l3=U(),us=_r(),f3=Iu(),$w=Fo(),v3=Q(),Lw=$(),p3=Ve(),Dw=P(),ss=l3("Reflect","construct"),d3=Object.prototype,m3=[].push,Bw=Dw(function(){function e(){}return!(ss(function(){},[],e)instanceof e)}),Gw=!Dw(function(){ss(function(){})}),Fw=Bw||Gw;c3({target:"Reflect",stat:!0,forced:Fw,sham:Fw},{construct:function(r,t){$w(r),v3(t);var n=arguments.length<3?r:$w(arguments[2]);if(Gw&&!Bw)return ss(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var a=[null];return us(m3,a,t),new(us(f3,r,a))}var o=n.prototype,u=p3(Lw(o)?o:d3),l=us(r,u,t);return Lw(l)?l:u}})});var Hw=i((vY,Ww)=>{"use strict";Uw();var h3=K();Ww.exports=h3.Reflect.construct});var zw=i((pY,Kw)=>{"use strict";var y3=Hw();Kw.exports=y3});var Yw=i((dY,Vw)=>{"use strict";var g3=zw();Vw.exports=g3});var Qw=i((mY,Jw)=>{"use strict";var b3=Yw();Jw.exports=b3});var Na=i((hY,Xw)=>{"use strict";Xw.exports=Qw()});var eT=i((yY,Zw)=>{Zw.exports=Na()});var cT=i((CY,sT)=>{"use strict";var q3=P();sT.exports=q3(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var vT=i((EY,fT)=>{"use strict";var x3=P(),S3=$(),w3=xe(),lT=cT(),Ma=Object.isExtensible,T3=x3(function(){Ma(1)});fT.exports=T3||lT?function(r){return!S3(r)||lT&&w3(r)==="ArrayBuffer"?!1:Ma?Ma(r):!0}:Ma});var dT=i((IY,pT)=>{"use strict";var O3=P();pT.exports=!O3(function(){return Object.isExtensible(Object.preventExtensions({}))})});var ms=i((kY,yT)=>{"use strict";var C3=x(),E3=A(),I3=Gr(),k3=$(),vs=W(),P3=te().f,mT=Et(),_3=Ji(),ps=vT(),R3=Mr(),A3=dT(),hT=!1,Fe=R3("meta"),N3=0,ds=function(e){P3(e,Fe,{value:{objectID:"O"+N3++,weakData:{}}})},M3=function(e,r){if(!k3(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!vs(e,Fe)){if(!ps(e))return"F";if(!r)return"E";ds(e)}return e[Fe].objectID},j3=function(e,r){if(!vs(e,Fe)){if(!ps(e))return!0;if(!r)return!1;ds(e)}return e[Fe].weakData},$3=function(e){return A3&&hT&&ps(e)&&!vs(e,Fe)&&ds(e),e},L3=function(){F3.enable=function(){},hT=!0;var e=mT.f,r=E3([].splice),t={};t[Fe]=1,e(t).length&&(mT.f=function(n){for(var a=e(n),o=0,u=a.length;o<u;o++)if(a[o]===Fe){r(a,o,1);break}return a},C3({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:_3.f}))},F3=yT.exports={enable:L3,fastKey:M3,getWeakData:j3,onFreeze:$3};I3[Fe]=!0});var qT=i((PY,bT)=>{"use strict";var D3=x(),B3=_(),G3=ms(),U3=P(),W3=Se(),H3=ve(),K3=na(),z3=N(),V3=$(),Y3=ar(),J3=_e(),Q3=te().f,X3=It().forEach,Z3=G(),gT=ze(),e4=gT.set,r4=gT.getterFor;bT.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,a=e.indexOf("Weak")!==-1,o=n?"set":"add",u=B3[e],l=u&&u.prototype,c={},s;if(!Z3||!z3(u)||!(a||l.forEach&&!U3(function(){new u().entries().next()})))s=t.getConstructor(r,e,n,o),G3.enable();else{s=r(function(p,d){e4(K3(p,f),{type:e,collection:new u}),Y3(d)||H3(d,p[o],{that:p,AS_ENTRIES:n})});var f=s.prototype,v=r4(e);X3(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(p){var d=p==="add"||p==="set";p in l&&!(a&&p==="clear")&&W3(f,p,function(h,m){var y=v(this).collection;if(!d&&a&&!V3(h))return p==="get"?void 0:!1;var b=y[p](h===0?0:h,m);return d?this:b})}),a||Q3(f,"size",{configurable:!0,get:function(){return v(this).collection.size}})}return J3(s,e,!1,!0),c[e]=s,D3({global:!0,forced:!0},c),a||t.setStrong(s,e,n),s}});var ST=i((_Y,xT)=>{"use strict";var t4=ke();xT.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:t4(e,n,r[n],t);return e}});var kT=i((RY,IT)=>{"use strict";var wT=Ve(),n4=$n(),TT=ST(),a4=z(),i4=na(),o4=ar(),u4=ve(),s4=_n(),ja=Rn(),c4=Lo(),on=G(),OT=ms().fastKey,ET=ze(),CT=ET.set,hs=ET.getterFor;IT.exports={getConstructor:function(e,r,t,n){var a=e(function(s,f){i4(s,o),CT(s,{type:r,index:wT(null),first:null,last:null,size:0}),on||(s.size=0),o4(f)||u4(f,s[n],{that:s,AS_ENTRIES:t})}),o=a.prototype,u=hs(r),l=function(s,f,v){var p=u(s),d=c(s,f),h,m;return d?d.value=v:(p.last=d={index:m=OT(f,!0),key:f,value:v,previous:h=p.last,next:null,removed:!1},p.first||(p.first=d),h&&(h.next=d),on?p.size++:s.size++,m!=="F"&&(p.index[m]=d)),s},c=function(s,f){var v=u(s),p=OT(f),d;if(p!=="F")return v.index[p];for(d=v.first;d;d=d.next)if(d.key===f)return d};return TT(o,{clear:function(){for(var f=this,v=u(f),p=v.first;p;)p.removed=!0,p.previous&&(p.previous=p.previous.next=null),p=p.next;v.first=v.last=null,v.index=wT(null),on?v.size=0:f.size=0},delete:function(s){var f=this,v=u(f),p=c(f,s);if(p){var d=p.next,h=p.previous;delete v.index[p.index],p.removed=!0,h&&(h.next=d),d&&(d.previous=h),v.first===p&&(v.first=d),v.last===p&&(v.last=h),on?v.size--:f.size--}return!!p},forEach:function(f){for(var v=u(this),p=a4(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:v.first;)for(p(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!c(this,f)}}),TT(o,t?{get:function(f){var v=c(this,f);return v&&v.value},set:function(f,v){return l(this,f===0?0:f,v)}}:{add:function(f){return l(this,f=f===0?0:f,f)}}),on&&n4(o,"size",{configurable:!0,get:function(){return u(this).size}}),a},setStrong:function(e,r,t){var n=r+" Iterator",a=hs(r),o=hs(n);s4(e,r,function(u,l){CT(this,{type:n,target:u,state:a(u),kind:l,last:null})},function(){for(var u=o(this),l=u.kind,c=u.last;c&&c.removed;)c=c.previous;return!u.target||!(u.last=c=c?c.next:u.state.first)?(u.target=null,ja(void 0,!0)):ja(l==="keys"?c.key:l==="values"?c.value:[c.key,c.value],!1)},t?"entries":"values",!t,!0),c4(r)}}});var PT=i(()=>{"use strict";var l4=qT(),f4=kT();l4("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},f4)});var _T=i(()=>{"use strict";PT()});var AT=i(($Y,RT)=>{"use strict";RT.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,a){return t[e](n,a)}}});var ie=i((LY,MT)=>{"use strict";var v4=U(),$a=AT(),NT=v4("Map");MT.exports={Map:NT,set:$a("set",2),get:$a("get",1),has:$a("has",1),remove:$a("delete",1),proto:NT.prototype}});var ys=i(()=>{"use strict";var p4=x(),d4=A(),m4=F(),h4=ir(),y4=ve(),La=ie(),jT=Z(),g4=P(),$T=La.Map,b4=La.has,q4=La.get,x4=La.set,S4=d4([].push),w4=jT||g4(function(){return $T.groupBy("ab",function(e){return e}).get("a").length!==1});p4({target:"Map",stat:!0,forced:jT||w4},{groupBy:function(r,t){h4(r),m4(t);var n=new $T,a=0;return y4(r,function(o){var u=t(o,a++);b4(n,u)?S4(q4(n,u),o):x4(n,u,[o])}),n}})});var V=i((BY,LT)=>{"use strict";var T4=He(),O4=TypeError;LT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new O4(T4(e)+" is not a map")}});var bs=i(()=>{"use strict";var C4=x(),E4=V(),gs=ie(),I4=Z(),k4=gs.get,P4=gs.has,_4=gs.set;C4({target:"Map",proto:!0,real:!0,forced:I4},{getOrInsert:function(r,t){return P4(E4(this),r)?k4(this,r):(_4(this,r,t),t)}})});var xs=i(()=>{"use strict";var R4=x(),A4=F(),N4=V(),qs=ie(),M4=Z(),j4=qs.get,$4=qs.has,L4=qs.set;R4({target:"Map",proto:!0,real:!0,forced:M4},{getOrInsertComputed:function(r,t){if(N4(this),A4(t),$4(this,r))return j4(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return L4(this,r,n),n}})});var DT=i((KY,FT)=>{"use strict";mr();_T();ys();bs();xs();Ct();fr();var F4=K();FT.exports=F4.Map});var GT=i((zY,BT)=>{"use strict";var D4=DT();hr();BT.exports=D4});var Ss=i(()=>{"use strict";bs()});var ws=i(()=>{"use strict";xs()});var UT=i(()=>{"use strict";ys()});var HT=i((eJ,WT)=>{"use strict";var B4=GT();Ss();ws();UT();WT.exports=B4});var zT=i((rJ,KT)=>{"use strict";var G4=z(),U4=Q(),W4=re(),H4=ve();KT.exports=function(e,r,t){return function(a){var o=W4(a),u=arguments.length,l=u>1?arguments[1]:void 0,c=l!==void 0,s=c?G4(l,u>2?arguments[2]:void 0):void 0,f=new e,v=0;return H4(o,function(p){var d=c?s(p,v++):p;t?r(f,U4(d)[0],d[1]):r(f,d)}),f}}});var YT=i(()=>{"use strict";var K4=x(),VT=ie(),z4=zT();K4({target:"Map",stat:!0,forced:!0},{from:z4(VT.Map,VT.set,!0)})});var QT=i((aJ,JT)=>{"use strict";var V4=Q();JT.exports=function(e,r,t){return function(){for(var a=new e,o=arguments.length,u=0;u<o;u++){var l=arguments[u];t?r(a,V4(l)[0],l[1]):r(a,l)}return a}}});var ZT=i(()=>{"use strict";var Y4=x(),XT=ie(),J4=QT();Y4({target:"Map",stat:!0,forced:!0},{of:J4(XT.Map,XT.set,!0)})});var rO=i(()=>{"use strict";var Q4=x(),X4=D(),Z4=ve(),eB=N(),eO=F(),rB=ie().Map;Q4({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=eB(this)?this:rB,a=new n;eO(t);var o=eO(a.set);return Z4(r,function(u){X4(o,a,t(u),u)}),a}})});var tO=i(()=>{"use strict";var tB=x(),nB=V(),aB=ie().remove;tB({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=nB(this),t=!0,n,a=0,o=arguments.length;a<o;a++)n=aB(r,arguments[a]),t=t&&n;return!!t}})});var aO=i(()=>{"use strict";var iB=x(),oB=V(),Ts=ie(),uB=Ts.get,sB=Ts.has,nO=Ts.set;iB({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=oB(this),a,o;return sB(n,r)?(a=uB(n,r),"update"in t&&(a=t.update(a,r,n),nO(n,r,a)),a):(o=t.insert(r,n),nO(n,r,o),o)}})});var oO=i((pJ,iO)=>{"use strict";var cB=D();iO.exports=function(e,r,t){for(var n=t?e:e.iterator,a=e.next,o,u;!(o=cB(a,n)).done;)if(u=r(o.value),u!==void 0)return u}});var he=i((dJ,uO)=>{"use strict";var lB=oO();uO.exports=function(e,r,t){return t?lB(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var sO=i(()=>{"use strict";var fB=x(),vB=z(),pB=V(),dB=he();fB({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=pB(this),n=vB(r,arguments.length>1?arguments[1]:void 0);return dB(t,function(a,o){if(!n(a,o,t))return!1},!0)!==!1}})});var lO=i(()=>{"use strict";var mB=x(),hB=z(),yB=V(),cO=ie(),gB=he(),bB=cO.Map,qB=cO.set;mB({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=yB(this),n=hB(r,arguments.length>1?arguments[1]:void 0),a=new bB;return gB(t,function(o,u){n(o,u,t)&&qB(a,u,o)}),a}})});var fO=i(()=>{"use strict";var xB=x(),SB=z(),wB=V(),TB=he();xB({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=wB(this),n=SB(r,arguments.length>1?arguments[1]:void 0),a=TB(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return a&&a.value}})});var vO=i(()=>{"use strict";var OB=x(),CB=z(),EB=V(),IB=he();OB({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=EB(this),n=CB(r,arguments.length>1?arguments[1]:void 0),a=IB(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return a&&a.key}})});var dO=i((wJ,pO)=>{"use strict";pO.exports=function(e,r){return e===r||e!==e&&r!==r}});var mO=i(()=>{"use strict";var kB=x(),PB=dO(),_B=V(),RB=he();kB({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return RB(_B(this),function(t){if(PB(t,r))return!0},!0)===!0}})});var hO=i(()=>{"use strict";var AB=x(),NB=V(),MB=he();AB({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=MB(NB(this),function(n,a){if(n===r)return{key:a}},!0);return t&&t.key}})});var gO=i(()=>{"use strict";var jB=x(),$B=z(),LB=V(),yO=ie(),FB=he(),DB=yO.Map,BB=yO.set;jB({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=LB(this),n=$B(r,arguments.length>1?arguments[1]:void 0),a=new DB;return FB(t,function(o,u){BB(a,n(o,u,t),o)}),a}})});var qO=i(()=>{"use strict";var GB=x(),UB=z(),WB=V(),bO=ie(),HB=he(),KB=bO.Map,zB=bO.set;GB({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=WB(this),n=UB(r,arguments.length>1?arguments[1]:void 0),a=new KB;return HB(t,function(o,u){zB(a,u,n(o,u,t))}),a}})});var xO=i(()=>{"use strict";var VB=x(),YB=V(),JB=ve(),QB=ie().set;VB({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=YB(this),n=arguments.length,a=0;a<n;)JB(arguments[a++],function(o,u){QB(t,o,u)},{AS_ENTRIES:!0});return t}})});var SO=i(()=>{"use strict";var XB=x(),ZB=F(),eG=V(),rG=he(),tG=TypeError;XB({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=eG(this),n=arguments.length<2,a=n?void 0:arguments[1];if(ZB(r),rG(t,function(o,u){n?(n=!1,a=o):a=r(a,o,u,t)}),n)throw new tG("Reduce of empty map with no initial value");return a}})});var wO=i(()=>{"use strict";var nG=x(),aG=z(),iG=V(),oG=he();nG({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=iG(this),n=aG(r,arguments.length>1?arguments[1]:void 0);return oG(t,function(a,o){if(n(a,o,t))return!0},!0)===!0}})});var OO=i(()=>{"use strict";var uG=x(),TO=F(),sG=V(),Os=ie(),cG=TypeError,lG=Os.get,fG=Os.has,vG=Os.set;uG({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=sG(this),a=arguments.length;TO(t);var o=fG(n,r);if(!o&&a<3)throw new cG("Updating absent value");var u=o?lG(n,r):TO(a>2?arguments[2]:void 0)(r,n);return vG(n,r,t(u,r,n)),n}})});var Es=i((DJ,CO)=>{"use strict";var Fa=D(),Cs=F(),Da=N(),pG=Q(),dG=TypeError;CO.exports=function(r,t){var n=pG(this),a=Cs(n.get),o=Cs(n.has),u=Cs(n.set),l=arguments.length>2?arguments[2]:void 0,c;if(!Da(t)&&!Da(l))throw new dG("At least one callback required");return Fa(o,n,r)?(c=Fa(a,n,r),Da(t)&&(c=t(c),Fa(u,n,r,c))):Da(l)&&(c=l(),Fa(u,n,r,c)),c}});var EO=i(()=>{"use strict";var mG=x(),hG=Es();mG({target:"Map",proto:!0,real:!0,forced:!0},{upsert:hG})});var IO=i(()=>{"use strict";var yG=x(),gG=Es();yG({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:gG})});var PO=i((HJ,kO)=>{"use strict";var bG=HT();YT();ZT();rO();tO();aO();sO();lO();fO();vO();mO();Ss();ws();hO();gO();qO();xO();SO();wO();OO();EO();IO();kO.exports=bG});var RO=i((KJ,_O)=>{"use strict";_O.exports=PO()});var NO=i(()=>{"use strict";var qG=x(),xG=ct(),SG=ki().indexOf,wG=Ju(),Is=xG([].indexOf),AO=!!Is&&1/Is([1],1,-0)<0,TG=AO||!wG("indexOf");qG({target:"Array",proto:!0,forced:TG},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return AO?Is(this,r,t)||0:SG(this,r,t)}})});var jO=i((YJ,MO)=>{"use strict";NO();var OG=oe();MO.exports=OG("Array","indexOf")});var LO=i((JJ,$O)=>{"use strict";var CG=B(),EG=jO(),ks=Array.prototype;$O.exports=function(e){var r=e.indexOf;return e===ks||CG(ks,e)&&r===ks.indexOf?EG:r}});var DO=i((QJ,FO)=>{"use strict";var IG=LO();FO.exports=IG});var GO=i((XJ,BO)=>{"use strict";var kG=DO();BO.exports=kG});var WO=i((ZJ,UO)=>{"use strict";var PG=GO();UO.exports=PG});var KO=i((eQ,HO)=>{"use strict";HO.exports=WO()});var cC=i(()=>{"use strict";var jG=x(),$G=re(),sC=Cn(),LG=P(),FG=LG(function(){sC(1)});jG({target:"Object",stat:!0,forced:FG},{keys:function(r){return sC($G(r))}})});var fC=i((iX,lC)=>{"use strict";cC();var DG=K();lC.exports=DG.Object.keys});var pC=i((oX,vC)=>{"use strict";var BG=fC();vC.exports=BG});var mC=i((uX,dC)=>{"use strict";var GG=pC();dC.exports=GG});var yC=i((sX,hC)=>{"use strict";var UG=mC();hC.exports=UG});var bC=i((cX,gC)=>{"use strict";gC.exports=yC()});var xC=i((lX,qC)=>{qC.exports=bC()});var kr="";function Hs(e){kr=e.replace(/\/+$/,"")}async function ut(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function Ks(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${kr}/comments?${t}`);return await ut(n,"Failed to fetch comments"),(await n.json()).data}async function za({uri:e,document:r,quote:t,prefix:n,suffix:a,body:o,author:u,parent:l}){let c={quote:t,prefix:n,suffix:a,body:o,author:u,parent:l};r?c.document=r:c.uri=e;let s=await fetch(`${kr}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});return await ut(s,"Failed to create comment"),s.json()}async function zs(e,{body:r}){let t=await fetch(`${kr}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:r})});return await ut(t,"Failed to update comment"),t.json()}async function Vs(e,r){let t=await fetch(`${kr}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});return await ut(t,"Failed to update comment status"),t.json()}async function Ys(e){let r=await fetch(`${kr}/comments/${e}`,{method:"DELETE"});await ut(r,"Failed to delete comment")}var jL=g(Br(),1),$L=g(Nn(),1),LL=g(Jn(),1),FL=g(Qn(),1),DL=g(Xn(),1);var wu=g(rt(),1);function Wy(e,r,t,n,a,o,u){try{var l=e[o](u),c=l.value}catch(s){return void t(s)}l.done?r(c):wu.default.resolve(c).then(n,a)}function xr(e){return function(){var r=this,t=arguments;return new wu.default(function(n,a){var o=e.apply(r,t);function u(c){Wy(o,n,a,u,l,"next",c)}function l(c){Wy(o,n,a,u,l,"throw",c)}u(void 0)})}}function Bt(e,r){this.v=e,this.k=r}function Xe(e){return new Bt(e,0)}var Tu=g(rt(),1),eg=g(we(),1),rg=g(pa(),1);function Oe(e){return function(){return new Gt(e.apply(this,arguments))}}function Gt(e){var r,t;function n(o,u){try{var l=e[o](u),c=l.value,s=c instanceof Bt;Tu.default.resolve(s?c.v:c).then(function(f){if(s){var v=o==="return"?"return":"next";if(!c.k||f.done)return n(v,f);f=e[v](f).value}a(l.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){a("throw",f)}}function a(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new Tu.default(function(l,c){var s={key:o,arg:u,resolve:l,reject:c,next:null};t?t=t.next=s:(r=t=s,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Gt.prototype[typeof eg.default=="function"&&rg.default||"@@asyncIterator"]=function(){return this},Gt.prototype.next=function(e){return this._invoke("next",e)},Gt.prototype.throw=function(e){return this._invoke("throw",e)},Gt.prototype.return=function(e){return this._invoke("return",e)};var BL=g(se(),1),GL=g(Oq(),1);function ce(e){var r,t=NL(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function NL(e){return"startContainer"in e}function er(e){if(ML(e))return e;var r=e,t=ce(r).createRange();return t.selectNodeContents(r),t}function ML(e){return"startContainer"in e}var $q=g(jq(),1);function Lq(e){if((0,$q.default)(e))return e}var Qq=g(we(),1),Xq=g(Ro(),1),Zq=g(zu(),1);function ex(e,r){var t=e==null?null:typeof Qq.default<"u"&&(0,Xq.default)(e)||e["@@iterator"];if(t!=null){var n,a,o,u,l=[],c=!0,s=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&((0,Zq.default)(l).call(l,n.value),l.length!==r);c=!0);}catch(f){s=!0,a=f}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(s)throw a}}return l}}var rx=g(Si(),1),tx=g(Vi(),1);function Ia(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function Vu(e,r){if(e){var t;if(typeof e=="string")return Ia(e,r);var n=(0,rx.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,tx.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ia(e,r):void 0}}function nx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $e(e,r){return Lq(e)||ex(e,r)||Vu(e,r)||nx()}var ax=g(we(),1),ix=g(pa(),1),ox=g(Jt(),1),en=g(rt(),1);function nt(e){var r,t,n,a=2;for(typeof ax.default<"u"&&(t=ix.default,n=ox.default);a--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new ka(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function ka(e){function r(t){if(Object(t)!==t)return en.default.reject(new TypeError(t+" is not an object."));var n=t.done;return en.default.resolve(t.value).then(function(a){return{value:a,done:n}})}return ka=function(n){this.s=n,this.n=n.next},ka.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var a=this.s.return;return a===void 0?en.default.resolve({value:n,done:!0}):r(a.apply(this.s,arguments))},throw:function(n){var a=this.s.return;return a===void 0?en.default.reject(n):r(a.apply(this.s,arguments))}},new ka(e)}var mD=g(se(),1);var cD=g(se(),1),lD=g(xx(),1),fD=g(wx(),1),vD=g(Hx(),1),pD=g(lS(),1),dD=g(es(),1);var Rs=g(se(),1);var s3=g(se(),1);var ts=g(se(),1);function rn(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function TS(e,r){return rn(e.startChunk,r.startChunk)&&rn(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function Sr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var rs=g(Ht(),1);var tn=g(we(),1),OS=g(Jt(),1);function Le(e){"@babel/helpers - typeof";return Le=typeof tn.default=="function"&&typeof OS.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof tn.default=="function"&&r.constructor===tn.default&&r!==tn.default.prototype?"symbol":typeof r},Le(e)}var $S=g(jS(),1);function LS(e,r){if(Le(e)!="object"||!e)return e;var t=e[$S.default];if(t!==void 0){var n=t.call(e,r||"default");if(Le(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Pa(e){var r=LS(e,"string");return Le(r)=="symbol"?r:r+""}function FS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,rs.default)(e,Pa(n.key),n)}}function nn(e,r,t){return r&&FS(e.prototype,r),t&&FS(e,t),(0,rs.default)(e,"prototype",{writable:!1}),e}var DS=g(Ht(),1);function wr(e,r,t){return(r=Pa(r))in e?(0,DS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var BS=g(Br(),1);var _a="Iterator exhausted before seek ended.",an=function(){function e(r){Sr(this,e),this.chunker=r,wr(this,"currentChunkPosition",0),wr(this,"offsetInChunk",0),this.seekTo(0)}return nn(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,a)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!rn(this.currentChunk,n);){var v=this._readToPreviousChunk(),p=$e(v,2),d=p[0],h=p[1];if(t&&(u=d+u),h===null)throw new RangeError(_a)}else for(;!rn(this.currentChunk,n);){var l=this._readToNextChunk(),c=$e(l,2),s=c[0],f=c[1];if(t&&(u+=s),f===null)throw new RangeError(_a)}var m=this.currentChunkPosition+a;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,BS.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var l=this.currentChunkPosition+this.currentChunk.data.length;if(l<=n){var c=this._readToNextChunk(),s=$e(c,2),f=s[0],v=s[1];if(t&&(u+=f),v===null){if(this.position===n||o)break;throw new RangeError(_a)}}else{var p=a?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,p)),this.offsetInChunk=p,a&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=a?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var h=this._readToPreviousChunk(),m=$e(h,2),y=m[0],b=m[1];if(t&&(u=y+u),b===null){if(o)break;throw new RangeError(_a)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,a=this.chunker.nextChunk();return a!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,a]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function US(e,r){return ns.apply(this,arguments)}function ns(){return ns=xr(ts.default.mark(function e(r,t){var n,a,o,u,l,c,s,f,v,p,d,h,m,y,b,q,I,E,S,T,w,C,j=arguments;return ts.default.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:n=j.length>2&&j[2]!==void 0?j[2]:{},a=n.minimalContext,o=a===void 0?!1:a,u=n.minimumQuoteLength,l=u===void 0?0:u,c=n.maxWordLength,s=c===void 0?50:c,f=new an(t()),v=new an(t()),f.seekToChunk(r.startChunk,r.startIndex),p=f.readToChunk(r.endChunk,r.endIndex),d="",h="",m=function(){return d.length+p.length+h.length},m()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),y=Math.floor((l-m())/2),d=f.read(-y,!1,!0)+d,m()<l&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),b=l-m(),h=h+f.read(b,!1,!0),m()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),q=l-m(),d=f.read(-q,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=Ra(f,s,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+Ra(f,s,!1));case 11:return I={type:"TextQuoteSelector",exact:p,prefix:d,suffix:h},E=Aa(I)(t()),k.next=16,E.next();case 16:if(S=k.sent,!(!S.done&&TS(S.value,r))){k.next=21;break}return k.next=20,E.next();case 20:S=k.sent;case 21:if(!S.done){k.next=23;break}return k.abrupt("return",I);case 23:if(T=S.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),v.seekToChunk(T.startChunk,T.startIndex-d.length),w=GS(f,v,!0),w!==void 0&&!o&&(w=Ra(f,s,!0)+w),f.seekToChunk(r.endChunk,r.endIndex+h.length),v.seekToChunk(T.endChunk,T.endIndex+h.length),C=GS(f,v,!1),C!==void 0&&!o&&(C=C+Ra(f,s,!1)),!o){k.next=44;break}if(!(w!==void 0&&(C===void 0||w.length<=C.length))){k.next=37;break}d=w+d,k.next=42;break;case 37:if(C===void 0){k.next=41;break}h=h+C,k.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:k.next=46;break;case 44:w!==void 0&&(d=w+d),C!==void 0&&(h=h+C);case 46:k.next=11;break;case 48:case"end":return k.stop()}},e)})),ns.apply(this,arguments)}function GS(e,r,t){for(var n="";;){var a=void 0;try{a=e.read(t?-1:1)}catch{return}n=t?a+n:n+a;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(a!==o)return n}}function Ra(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var a=void 0;try{a=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(qD(a)){e.seekBy(t?1:-1);break}n=t?a+n:n+a}return n}function qD(e){return/^\s+$/.test(e)}var Pw=g(Br(),1),_w=g(Nn(),1),Rw=g(Jn(),1),Aw=g(Qn(),1),Nw=g(Xn(),1);var os=g(se(),1),Mw=g(vw(),1),jw=g(Ew(),1);function Iw(e,r){var t;if(typeof Rw.default>"u"||(0,Aw.default)(e)==null){if(Array.isArray(e)||(t=t3(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(s){throw s},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,l;return{s:function(){t=(0,Nw.default)(e)},n:function(){var s=t.next();return o=s.done,s},e:function(s){u=!0,l=s},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw l}}}}function t3(e,r){var t;if(e){if(typeof e=="string")return kw(e,r);var n=(0,Pw.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,_w.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return kw(e,r)}}function kw(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Aa(e){return function(){var r=Oe(os.default.mark(function n(a){var o,u,l,c,s,f,v,p,d,h,m,y,b,q,I,E,S,T,w,C,j,be,k,ee,qe,J,L;return os.default.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:o=e.exact,u=e.prefix||"",l=e.suffix||"",c=u+o+l,s=[],f=!0;case 6:v=a.currentChunk,p=v.data,d=[],h=Iw(s),O.prev=10,h.s();case 12:if((m=h.n()).done){O.next=27;break}if(y=m.value,b=y.charactersMatched,y.endChunk===void 0&&(q=u.length+o.length-b,q<=p.length&&(y.endChunk=v,y.endIndex=q)),y.startChunk===void 0&&(I=u.length-b,(I<p.length||y.endChunk!==void 0)&&(y.startChunk=v,y.startIndex=I)),E=c.length-b,!(E<=p.length)){O.next=24;break}if(!(0,Mw.default)(p).call(p,c.substring(b))){O.next=22;break}return O.next=22,y;case 22:O.next=25;break;case 24:p===c.substring(b,b+p.length)&&(y.charactersMatched+=p.length,d.push(y));case 25:O.next=12;break;case 27:O.next=32;break;case 29:O.prev=29,O.t0=O.catch(10),h.e(O.t0);case 32:return O.prev=32,h.f(),O.finish(32);case 35:if(s=d,!(c.length<=p.length)){O.next=49;break}S=0;case 38:if(!(S<=p.length)){O.next=49;break}if(T=p.indexOf(c,S),T!==-1){O.next=42;break}return O.abrupt("break",49);case 42:if(S=T+1,!(T===0&&c.length===0&&!f)){O.next=45;break}return O.abrupt("continue",38);case 45:return O.next=47,{startChunk:v,startIndex:T+u.length,endChunk:v,endIndex:T+u.length+o.length};case 47:O.next=38;break;case 49:for(w=[],C=Math.max(p.length-c.length+1,0),j=function(Ue){var Us=p[Ue];w=(0,jw.default)(w).call(w,function(VC){return Us===c[Ue-VC]}),Us===c[0]&&w.push(Ue)},be=C;be<p.length;be++)j(be);k=Iw(w);try{for(k.s();!(ee=k.n()).done;)qe=ee.value,J=p.length-qe,L={charactersMatched:J},J>=u.length+o.length&&(L.endChunk=v,L.endIndex=qe+u.length+o.length),(J>u.length||L.endChunk!==void 0)&&(L.startChunk=v,L.startIndex=qe+u.length),s.push(L)}catch(Ir){k.e(Ir)}finally{k.f()}f=!1;case 56:if(a.nextChunk()!==null){O.next=6;break}case 57:case"end":return O.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var o3=g(se(),1);var n3=g(Br(),1),a3=g(es(),1);var u3=g(se(),1);var sn=g(eT(),1);var tT=g(ma(),1),nT=g(Ht(),1);var cs=g(ha(),1),rT=g(Wt(),1);function rr(e,r){var t;return rr=cs.default?(0,rT.default)(t=cs.default).call(t):function(n,a){return n.__proto__=a,n},rr(e,r)}function ls(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,tT.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,nT.default)(e,"prototype",{writable:!1}),r&&rr(e,r)}function aT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function iT(e,r){if(r&&(Le(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return aT(e)}var oT=g(ha(),1),uT=g(Wt(),1),fs=g(da(),1);function Tr(e){var r;return Tr=oT.default?(0,uT.default)(r=fs.default).call(r):function(t){return t.__proto__||(0,fs.default)(t)},Tr(e)}var _s=g(RO(),1),eC=g(ma(),1);var zO=g(KO(),1);function VO(e){try{var r;return(0,zO.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var JO=g(Na(),1),QO=g(zu(),1),XO=g(Wt(),1);var YO=g(Na(),1);function Ps(){try{var e=!Boolean.prototype.valueOf.call((0,YO.default)(Boolean,[],function(){}))}catch{}return(Ps=function(){return!!e})()}function ZO(e,r,t){if(Ps())return JO.default.apply(null,arguments);var n=[null];(0,QO.default)(n).apply(n,r);var a=new((0,XO.default)(e).apply(e,n));return t&&rr(a,t.prototype),a}function un(e){var r=typeof _s.default=="function"?new _s.default:void 0;return un=function(n){if(n===null||!VO(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,a)}function a(){return ZO(n,arguments,Tr(this).constructor)}return a.prototype=(0,eC.default)(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),rr(a,n)},un(e)}function nC(e,r){var t=ce(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),a=rC(e.startContainer,e.startOffset),o=$e(a,2),u=o[0],l=o[1];for(n.currentNode=u;l===u.length&&n.nextNode();)u=n.currentNode,l=0;e.setStart(u,l);var c=rC(e.endContainer,e.endOffset),s=$e(c,2),f=s[0],v=s[1];for(n.currentNode=f;v===0&&n.previousNode();)f=n.currentNode,v=f.length;return e.setEnd(f,v),e}function rC(e,r){var t;if(tC(e))return[e,r];var n;if(_G(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(tC(n))return[n,0];var a=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=a.createTreeWalker(a,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function tC(e){return e.nodeType===Node.TEXT_NODE}function _G(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function iC(e){var r=RG();return function(){var n=Tr(e),a;if(r){var o=Tr(this).constructor;a=(0,sn.default)(n,arguments,o)}else a=n.apply(this,arguments);return iT(this,a)}}function RG(){if(typeof Reflect>"u"||!sn.default||sn.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,sn.default)(Boolean,[],function(){})),!0}catch{return!1}}var Ba=function(e){ls(t,e);var r=iC(t);function t(n){return Sr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(un(TypeError)),AG=function(e){ls(t,e);var r=iC(t);function t(n){return Sr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(un(TypeError)),Or=function(){function e(r){var t=this;if(Sr(this,e),wr(this,"scope",void 0),wr(this,"iter",void 0),this.scope=er(r),this.iter=ce(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!aC(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Ba}}return nn(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!aC(t))throw new Ba;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new AG;var n=t===this.scope.startContainer?this.scope.startOffset:0,a=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:a,data:t.data.substring(n,a),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=nC(t,this.scope),a=this.nodeToChunk(n.startContainer),o=n.startOffset-a.startOffset,u=this.nodeToChunk(n.endContainer),l=n.endOffset-u.startOffset;return{startChunk:a,startIndex:o,endChunk:u,endIndex:l}}},{key:"chunkRangeToRange",value:function(t){var n=ce(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function aC(e){return e.nodeType===Node.TEXT_NODE}function oC(e,r){return As.apply(this,arguments)}function As(){return As=xr(Rs.default.mark(function e(r,t){var n,a,o,u=arguments;return Rs.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},a=er(t??ce(r)),o=new Or(a),c.next=5,US(o.rangeToChunkRange(r),function(){return new Or(a)},n);case 5:return c.abrupt("return",c.sent);case 6:case"end":return c.stop()}},e)})),As.apply(this,arguments)}var Ns=g(se(),1);function uC(e){var r=Aa(e);return function(){var t=Oe(Ns.default.mark(function a(o){var u,l,c,s,f,v,p,d;return Ns.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new Or(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof Ba)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:l=!0,c=!1,m.prev=13,f=nt(r(u));case 15:return m.next=17,Xe(f.next());case 17:return v=m.sent,l=v.done,m.next=21,Xe(v.value);case 21:if(p=m.sent,l){m.next=29;break}return d=p,m.next=26,u.chunkRangeToRange(d);case 26:l=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),c=!0,s=m.t1;case 35:if(m.prev=35,m.prev=36,!(!l&&f.return!=null)){m.next=40;break}return m.next=40,Xe(f.return());case 40:if(m.prev=40,!c){m.next=43;break}throw s;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},a,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(a){return t.apply(this,arguments)}return n}()}var NG=g(se(),1);var MG=g(se(),1);var WG=g(xC(),1),HG=g(Br(),1),KG=g(Nn(),1),zG=g(Jn(),1),VG=g(Qn(),1),YG=g(Xn(),1);async function SC(e,r){let t=await oC(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function Ga(e,r){let t=uC({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var at="fb-highlight",wC="fb-highlight-active";var cn=null;function OC(e){cn=e}function Ua(e,r){let t=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let n=TC(e,r);t.push(n)}else{let n=QG(e);for(let a=0;a<n.length;a++){let o=n[a],u=document.createRange();o===e.startContainer?(u.setStart(o,e.startOffset),u.setEnd(o,o.textContent.length)):o===e.endContainer?(u.setStart(o,0),u.setEnd(o,e.endOffset)):u.selectNodeContents(o),u.collapsed||t.push(TC(u,r))}}return t}function TC(e,r){let t=e.commonAncestorContainer;for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;let n=t,a=!1,o=null;for(;n;){if(n.tagName==="foreignObject"){a=!1;break}n.tagName==="text"&&n instanceof SVGElement&&(a=!0),n.tagName==="svg"&&(o=n),n=n.parentElement}if(a&&o)return JG(e,r,o);let u=document.createElement("mark");u.className=at,u.dataset.commentId=r,u.addEventListener("click",()=>{cn&&cn(r)});try{e.surroundContents(u)}catch(l){return console.warn("[feedback-layer] Failed to create highlight:",l),null}return u}function JG(e,r,t){try{let n=e.getClientRects();if(n.length===0)return null;let a="http://www.w3.org/2000/svg",o=t.getScreenCTM();if(!o)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let u=e.commonAncestorContainer;for(;u&&u.nodeType!==Node.ELEMENT_NODE;)u=u.parentNode;let l=u,c=null;for(;l&&l!==t;){if(l.tagName==="text"){c=l.parentElement;break}l=l.parentElement}let s=c||t,f=o;s!==t&&s.getScreenCTM&&(f=s.getScreenCTM());let v=document.createElementNS(a,"g");v.setAttribute("class",at),v.setAttribute("data-comment-id",r),v.style.cursor="pointer";for(let y=0;y<n.length;y++){let b=n[y],q=document.createElementNS(a,"rect"),I=t.createSVGPoint();I.x=b.left,I.y=b.top;let E=I.matrixTransform(f.inverse()),S=b.width/f.a,T=b.height/f.d;q.setAttribute("x",E.x),q.setAttribute("y",E.y),q.setAttribute("width",S),q.setAttribute("height",T),q.setAttribute("rx","2"),q.setAttribute("ry","2"),q.style.pointerEvents="none",v.appendChild(q)}s&&s!==t?s.appendChild(v):t.appendChild(v);let p=e.commonAncestorContainer;for(;p&&p.nodeType!==Node.ELEMENT_NODE;)p=p.parentNode;let d=new Set,h=p;for(;h&&h!==t;)h.tagName==="text"&&h instanceof SVGElement&&(d.add(h),h.querySelectorAll("tspan").forEach(b=>d.add(b))),h=h.parentElement;let m=y=>{y.preventDefault(),y.stopPropagation(),cn&&cn(r)};return d.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",m),y.dataset.fbCommentId=r}),v}catch(n){return console.warn("[feedback-layer] Failed to create SVG highlight:",n),null}}function Ms(e){document.querySelectorAll(`.${at}[data-comment-id="${e}"]`).forEach(n=>{let a=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)a.removeChild(n);else{for(;n.firstChild;)a.insertBefore(n.firstChild,n);a.removeChild(n),a.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function CC(){document.querySelectorAll(`.${at}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function Wa(e){document.querySelectorAll(`.${at}`).forEach(r=>{r.dataset.commentId===e?r.classList.add(wC):r.classList.remove(wC)})}function EC(e){let r=document.querySelector(`.${at}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function QG(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let a=document.createRange();return a.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,a)<0&&e.compareBoundaryPoints(Range.START_TO_END,a)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function IC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,a)=>{let o=[`**${a+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let l of u)o.push(`  - **[${l.author}]** (reply): ${l.body}`);return o.join(`
`)}).join(`

`)}function kC(e,r){let t=IC(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(a=>!a.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function tr(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var XG=`
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
    background: var(--remarq-bg-surface);
    border-radius: 12px;
    width: 90%;
    max-width: 800px;
    max-height: 85vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 20px 60px var(--remarq-shadow-strong);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    color: var(--remarq-text);
  }

  .hf-modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    border-bottom: 1px solid var(--remarq-border-subtle);
  }

  .hf-modal-header h2 {
    margin: 0;
    font-size: 18px;
    color: var(--remarq-text);
  }

  .hf-modal-close {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: var(--remarq-text-muted);
    padding: 0 4px;
  }

  .hf-modal-body {
    padding: 20px;
    overflow-y: auto;
    flex: 1;
  }

  .hf-modal-footer {
    padding: 12px 20px;
    border-top: 1px solid var(--remarq-border-subtle);
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
    background: var(--remarq-accent);
    color: white;
  }
  .hf-btn-primary:hover { background: var(--remarq-accent-hover); }

  .hf-btn-secondary {
    background: var(--remarq-bg-secondary);
    color: var(--remarq-text-secondary);
  }
  .hf-btn-secondary:hover { background: var(--remarq-border-subtle); }

  .hf-prompt-area {
    width: 100%;
    min-height: 300px;
    border: 1px solid var(--remarq-border-input);
    border-radius: 6px;
    padding: 12px;
    font-family: "SF Mono", Monaco, "Cascadia Code", monospace;
    font-size: 12px;
    resize: vertical;
    box-sizing: border-box;
    background: var(--remarq-bg);
    color: var(--remarq-text);
  }

  .hf-status {
    padding: 12px;
    border-radius: 6px;
    margin-bottom: 12px;
    font-size: 14px;
  }

  .hf-status-info { background: var(--remarq-info-bg); color: var(--remarq-info-text); }
  .hf-status-success { background: var(--remarq-success-bg); color: var(--remarq-success-text); }
  .hf-status-error { background: var(--remarq-error-bg); color: var(--remarq-error-text); }
`,PC=null,_C=null;function RC(e,r){_C=e,PC=r,ZG()}function ZG(){let e=document.createElement("style");e.textContent=XG,document.head.appendChild(e)}function AC(){let e=PC(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let a=document.createElement("button");a.className="hf-modal-close",a.textContent="\xD7",a.addEventListener("click",()=>r.remove()),n.appendChild(a);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",v=>{v.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let l=document.querySelector(_C.contentSelector||"body").innerHTML,c=kC(l,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${c.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${tr(c)}</textarea>
  `;let s=document.createElement("button");s.className="hf-btn hf-btn-primary",s.textContent="Copy Prompt",s.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c),s.textContent="Copied!"}catch{s.textContent="Copy failed"}setTimeout(()=>s.textContent="Copy Prompt",2e3)}),u.appendChild(s);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function NC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function MC(e,r){return e.length>r?e.slice(0,r)+"...":e}function jC(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var ln=null;function LC(e){ln=document.createElement("div"),ln.className="fb-toast-container",e.appendChild(ln)}function Cr(e,r="success"){if(!ln)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>$C(t)),t.appendChild(o)}ln.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>$C(t),r==="error"?8e3:4e3)}function $C(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}var e5=320,BC="feedback-layer-commenter",X=null,Be=null,De=null,js=null,GC=null,$s=null,Ls=null,Fs=null,Ds=null,Bs=!1,UC=[],WC=new Set;var FC=!1;function r5(){FC||(FC=!0,i5())}function it(){return localStorage.getItem(BC)||""}function HC({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:a}){GC=e,$s=r,Ls=t,Fs=n,Ds=a,r5(),X=document.createElement("div"),X.className="fb-sidebar fb-sidebar-collapsed",X.innerHTML=`
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
  `;let o=document.createElement("button");o.className="fb-sidebar-tab",o.textContent="Feedback",o.addEventListener("click",()=>fn()),document.body.appendChild(o),document.body.appendChild(X),LC(X),Be=X.querySelector(".fb-comment-list"),De=X.querySelector(".fb-form-section");let u=X.querySelector(".fb-name-input");u.addEventListener("input",()=>{localStorage.setItem(BC,u.value.trim())}),X.querySelector(".fb-ai-btn").addEventListener("click",()=>AC()),X.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>t5());let s=X.querySelector(".fb-show-resolved-cb");s.addEventListener("change",()=>{Bs=s.checked,nr(UC,WC)})}function fn(){X.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden")}function t5(){X.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden")}function KC(e){if(fn(),!it()){let n=X.querySelector(".fb-name-input");n.classList.add("fb-name-input-error"),setTimeout(()=>n.classList.remove("fb-name-input-error"),2e3)}js=e,De.style.display="",De.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${tr(MC(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `;let r=De.querySelector(".fb-form-textarea");r.focus();let t=()=>{if(!it()){let a=X.querySelector(".fb-name-input");a.focus(),a.style.outline="2px solid #ef4444",setTimeout(()=>a.style.outline="",2e3);return}let n=r.value.trim();n&&(GC({comment:n,commenter:it()}),De.style.display="none",js=null)};De.querySelector(".fb-submit-btn").addEventListener("click",t),r.addEventListener("keydown",n=>{n.key==="Enter"&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),t())}),De.querySelector(".fb-cancel-btn").addEventListener("click",()=>{De.style.display="none",js=null}),De.scrollIntoView({behavior:"smooth",block:"nearest"})}function nr(e,r=new Set,t=new Map){UC=e,WC=r,Be.innerHTML="";let{topLevel:n,repliesByParent:a}=NC(e),o=n.slice().sort((s,f)=>{let v=t.get(s.id),p=t.get(f.id);return!v||!p?0:v.compareBoundaryPoints(Range.START_TO_START,p)}),u=o.filter(s=>{let f=r.has(s.id),v=s.status==="closed";return f||v&&Bs}),l=Bs?u:u.filter(s=>s.status!=="closed");if(o.length===0){Be.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let c=o.filter(s=>!r.has(s.id)&&s.status!=="closed").length;if(l.length===0){c>0?Be.innerHTML=`<div class="fb-empty">
        ${u.length} comment(s) resolved.
        ${c>0?`<br>${c} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:Be.innerHTML=`<div class="fb-empty">All ${o.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let s of l){let f=document.createElement("div");f.className="fb-thread",f.appendChild(DC(s,!1));let v=a.get(s.id)||[];for(let d of v)f.appendChild(DC(d,!0));let p=document.createElement("button");p.className="fb-reply-btn",p.textContent="Reply",p.addEventListener("click",d=>{d.stopPropagation(),n5(s.id,f,p)}),f.appendChild(p),Be.appendChild(f)}}function DC(e,r){let t=e.status==="closed",n=document.createElement("div");return n.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":""),n.dataset.id=e.id,n.innerHTML=`
    <div class="fb-cmt-body">${tr(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${tr(e.author)}</span>
      <span class="fb-cmt-time">${jC(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
  `,r||(n.addEventListener("click",a=>{a.target.closest(".fb-cmt-delete")||a.target.closest(".fb-cmt-resolve")||a.target.closest(".fb-cmt-edit")||(Wa(e.id),EC(e.id),Be.querySelectorAll(".fb-cmt-card").forEach(o=>o.classList.remove("fb-cmt-active")),n.classList.add("fb-cmt-active"))}),n.querySelector(".fb-cmt-resolve").addEventListener("click",a=>{a.stopPropagation(),Ls&&Ls(e.id,!t)})),n.querySelector(".fb-cmt-edit").addEventListener("click",a=>{a.stopPropagation(),a5(e,n)}),n.querySelector(".fb-cmt-delete").addEventListener("click",a=>{a.stopPropagation(),$s&&$s(e.id)}),n}function n5(e,r,t){fn();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let a=document.createElement("div");a.className="fb-reply-form",a.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!it()){let c=X.querySelector(".fb-name-input");c.focus(),c.style.outline="2px solid #ef4444",setTimeout(()=>c.style.outline="",2e3);return}let l=a.querySelector("textarea").value.trim();l&&(Fs&&Fs({parent_id:e,comment:l,commenter:it()}),a.remove(),t.style.display="")};a.querySelector(".fb-reply-submit").addEventListener("click",o);let u=a.querySelector("textarea");u.addEventListener("keydown",l=>{l.key==="Enter"&&(l.metaKey||l.ctrlKey)&&(l.preventDefault(),o())}),a.querySelector(".fb-reply-cancel").addEventListener("click",()=>{a.remove(),t.style.display=""}),r.insertBefore(a,t),u.focus()}function a5(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${tr(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let a=t.querySelector("textarea");a.focus(),a.setSelectionRange(a.value.length,a.value.length);let o=()=>{let u=a.value.trim();u&&Ds&&Ds(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),a.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function zC(e){let r=Be.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(Be.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function i5(){let e=document.createElement("style");e.textContent=`
    /* \u2500\u2500 Light theme variables (default) \u2500\u2500 */
    [data-remarq-theme] {
      --remarq-bg: #fafafa;
      --remarq-bg-surface: #fff;
      --remarq-bg-hover: #f3f0ff;
      --remarq-bg-secondary: #f3f4f6;

      --remarq-text: #333;
      --remarq-text-secondary: #555;
      --remarq-text-muted: #666;
      --remarq-text-faint: #999;

      --remarq-border: #e0e0e0;
      --remarq-border-subtle: #e5e7eb;
      --remarq-border-input: #d1d5db;

      --remarq-accent: #7c3aed;
      --remarq-accent-hover: #6d28d9;
      --remarq-accent-ring: rgba(124,58,237,0.15);
      --remarq-accent-glow: rgba(124,58,237,0.12);

      --remarq-success: #16a34a;
      --remarq-danger: #ef4444;
      --remarq-icon-muted: #aaa;
      --remarq-icon-faint: #ccc;

      --remarq-info-bg: #eff6ff;
      --remarq-info-text: #1e40af;
      --remarq-success-bg: #f0fdf4;
      --remarq-success-text: #166534;
      --remarq-error-bg: #fef2f2;
      --remarq-error-text: #991b1b;

      --remarq-highlight: rgba(255, 212, 0, 0.35);
      --remarq-highlight-active: rgba(255, 180, 0, 0.55);

      --remarq-shadow: rgba(0,0,0,0.08);
      --remarq-shadow-strong: rgba(0,0,0,0.15);
    }

    /* \u2500\u2500 Dark theme overrides \u2500\u2500 */
    [data-remarq-theme="dark"] {
      --remarq-bg: #1e1e2e;
      --remarq-bg-surface: #282840;
      --remarq-bg-hover: #33305a;
      --remarq-bg-secondary: #313148;

      --remarq-text: #e0e0e6;
      --remarq-text-secondary: #b0b0be;
      --remarq-text-muted: #9090a0;
      --remarq-text-faint: #6e6e82;

      --remarq-border: #3a3a52;
      --remarq-border-subtle: #33334a;
      --remarq-border-input: #4a4a62;

      --remarq-accent: #a78bfa;
      --remarq-accent-hover: #8b5cf6;
      --remarq-accent-ring: rgba(167,139,250,0.25);
      --remarq-accent-glow: rgba(167,139,250,0.18);

      --remarq-success: #4ade80;
      --remarq-danger: #f87171;
      --remarq-icon-muted: #6e6e82;
      --remarq-icon-faint: #4a4a62;

      --remarq-info-bg: #1e2a4a;
      --remarq-info-text: #93b5f5;
      --remarq-success-bg: #1a2e1a;
      --remarq-success-text: #6ee7a0;
      --remarq-error-bg: #2e1a1a;
      --remarq-error-text: #fca5a5;

      --remarq-highlight: rgba(255, 212, 0, 0.25);
      --remarq-highlight-active: rgba(255, 180, 0, 0.45);

      --remarq-shadow: rgba(0,0,0,0.3);
      --remarq-shadow-strong: rgba(0,0,0,0.5);
    }

    @media (prefers-color-scheme: dark) {
      [data-remarq-theme="auto"] {
        --remarq-bg: #1e1e2e;
        --remarq-bg-surface: #282840;
        --remarq-bg-hover: #33305a;
        --remarq-bg-secondary: #313148;

        --remarq-text: #e0e0e6;
        --remarq-text-secondary: #b0b0be;
        --remarq-text-muted: #9090a0;
        --remarq-text-faint: #6e6e82;

        --remarq-border: #3a3a52;
        --remarq-border-subtle: #33334a;
        --remarq-border-input: #4a4a62;

        --remarq-accent: #a78bfa;
        --remarq-accent-hover: #8b5cf6;
        --remarq-accent-ring: rgba(167,139,250,0.25);
        --remarq-accent-glow: rgba(167,139,250,0.18);

        --remarq-success: #4ade80;
        --remarq-danger: #f87171;
        --remarq-icon-muted: #6e6e82;
        --remarq-icon-faint: #4a4a62;

        --remarq-info-bg: #1e2a4a;
        --remarq-info-text: #93b5f5;
        --remarq-success-bg: #1a2e1a;
        --remarq-success-text: #6ee7a0;
        --remarq-error-bg: #2e1a1a;
        --remarq-error-text: #fca5a5;

        --remarq-highlight: rgba(255, 212, 0, 0.25);
        --remarq-highlight-active: rgba(255, 180, 0, 0.45);

        --remarq-shadow: rgba(0,0,0,0.3);
        --remarq-shadow-strong: rgba(0,0,0,0.5);
      }
    }

    /* \u2500\u2500 Highlight styles (applied to host page content) \u2500\u2500 */
    .fb-highlight {
      background-color: var(--remarq-highlight);
      cursor: pointer;
      border-radius: 2px;
    }
    .fb-highlight-active {
      background-color: var(--remarq-highlight-active);
    }
    .fb-highlight rect {
      fill: var(--remarq-highlight);
    }
    .fb-highlight-active rect {
      fill: var(--remarq-highlight-active);
    }

    /* \u2500\u2500 Name input error state \u2500\u2500 */
    .fb-name-input-error {
      outline: 2px solid var(--remarq-danger) !important;
    }

    /* \u2500\u2500 Sidebar \u2500\u2500 */
    .fb-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: ${e5}px;
      height: 100vh;
      background: var(--remarq-bg);
      border-left: 1px solid var(--remarq-border);
      z-index: 9999;
      display: flex;
      flex-direction: column;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 14px;
      color: var(--remarq-text);
      transition: transform 0.25s ease;
      box-shadow: -2px 0 8px var(--remarq-shadow);
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
      background: var(--remarq-accent);
      color: white;
      border: none;
      border-radius: 6px 6px 0 0;
      padding: 6px 16px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      box-shadow: -2px 0 6px var(--remarq-shadow-strong);
      transition: opacity 0.2s;
    }
    .fb-sidebar-tab:hover {
      background: var(--remarq-accent-hover);
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
      border-bottom: 1px solid var(--remarq-border);
      background: var(--remarq-bg-surface);
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
      color: var(--remarq-accent);
      padding: 4px;
      line-height: 1;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .fb-ai-btn:hover {
      background: var(--remarq-bg-hover);
    }
    .fb-sidebar-toggle {
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: var(--remarq-text-muted);
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
      color: var(--remarq-text-muted);
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .fb-name-input {
      width: 100%;
      padding: 8px 10px;
      border: 1px solid var(--remarq-border-input);
      border-radius: 6px;
      font-size: 14px;
      box-sizing: border-box;
      background: var(--remarq-bg-surface);
      color: var(--remarq-text);
    }
    .fb-name-input:focus {
      outline: none;
      border-color: var(--remarq-accent);
      box-shadow: 0 0 0 2px var(--remarq-accent-ring);
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
      color: var(--remarq-text-faint);
      font-size: 13px;
      text-align: center;
      padding: 24px 12px;
    }
    .fb-cmt-card {
      background: var(--remarq-bg-surface);
      border: 1px solid var(--remarq-border-subtle);
      border-radius: 8px;
      padding: 10px 12px;
      cursor: pointer;
      transition: border-color 0.15s;
    }
    .fb-cmt-card:hover {
      border-color: var(--remarq-accent-ring);
    }
    .fb-cmt-active {
      border-color: var(--remarq-accent);
      box-shadow: 0 0 0 2px var(--remarq-accent-glow);
    }
    .fb-cmt-quote {
      font-size: 12px;
      color: var(--remarq-text-faint);
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
      color: var(--remarq-text-faint);
    }
    .fb-cmt-author {
      font-weight: 600;
      color: var(--remarq-accent);
    }
    .fb-cmt-resolve {
      background: none;
      border: none;
      color: var(--remarq-icon-muted);
      cursor: pointer;
      font-size: 14px;
      padding: 0 2px;
      line-height: 1;
      margin-left: auto;
    }
    .fb-cmt-resolve:hover {
      color: var(--remarq-success);
    }
    .fb-cmt-edit {
      background: none;
      border: none;
      color: var(--remarq-icon-muted);
      cursor: pointer;
      font-size: 14px;
      padding: 0 2px;
      line-height: 1;
    }
    .fb-cmt-edit:hover {
      color: var(--remarq-accent);
    }
    .fb-cmt-delete {
      background: none;
      border: none;
      color: var(--remarq-icon-faint);
      cursor: pointer;
      font-size: 16px;
      padding: 0 2px;
      line-height: 1;
    }
    .fb-cmt-delete:hover {
      color: var(--remarq-danger);
    }
    .fb-cmt-closed {
      opacity: 0.5;
      border-left: 3px solid var(--remarq-success);
    }
    .fb-cmt-closed .fb-cmt-body {
      text-decoration: line-through;
    }
    .fb-cmt-closed .fb-cmt-resolve {
      color: var(--remarq-success);
    }
    .fb-filter-section {
      margin-bottom: 12px;
    }
    .fb-filter-toggle {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: var(--remarq-text-faint);
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
      border-left: 2px solid var(--remarq-border-subtle);
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
      color: var(--remarq-accent);
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
      background: var(--remarq-bg-surface);
      border: 1px solid var(--remarq-border-input);
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
      background: var(--remarq-bg-surface);
      border: 2px solid var(--remarq-accent);
      border-radius: 8px;
      padding: 12px;
    }
    .fb-form-quote {
      font-size: 12px;
      color: var(--remarq-text-faint);
      font-style: italic;
      margin-bottom: 8px;
    }
    .fb-form-textarea {
      width: 100%;
      border: 1px solid var(--remarq-border-input);
      border-radius: 6px;
      padding: 8px 10px;
      font-size: 13px;
      font-family: inherit;
      resize: vertical;
      box-sizing: border-box;
      background: var(--remarq-bg-surface);
      color: var(--remarq-text);
    }
    .fb-form-textarea:focus {
      outline: none;
      border-color: var(--remarq-accent);
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
      background: var(--remarq-accent);
      color: white;
    }
    .fb-btn-primary:hover { background: var(--remarq-accent-hover); }
    .fb-btn-cancel {
      background: var(--remarq-bg-secondary);
      color: var(--remarq-text-secondary);
    }
    .fb-btn-cancel:hover { background: var(--remarq-border-subtle); }

    /* Annotate tooltip (appears on text selection) */
    .fb-annotate-tooltip {
      position: absolute;
      z-index: 10001;
      background: var(--remarq-accent);
      color: white;
      border: none;
      border-radius: 18px;
      padding: 8px 16px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      box-shadow: 0 4px 12px var(--remarq-accent-ring), 0 2px 4px var(--remarq-shadow);
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
      top: -6px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid var(--remarq-accent);
      filter: drop-shadow(0 -2px 2px var(--remarq-shadow));
    }
    .fb-annotate-tooltip:hover {
      background: var(--remarq-accent-hover);
      transform: translateY(2px);
      box-shadow: 0 6px 16px var(--remarq-accent-ring), 0 2px 6px var(--remarq-shadow-strong);
    }
    .fb-annotate-tooltip:hover::after {
      border-bottom-color: var(--remarq-accent-hover);
    }
    @media (pointer: coarse) {
      .fb-annotate-tooltip {
        min-height: 44px;
        padding: 12px 20px;
        font-size: 15px;
      }
      .fb-annotate-tooltip svg {
        width: 18px;
        height: 18px;
      }
    }
    @keyframes fb-tooltip-appear {
      from {
        opacity: 0;
        transform: translateY(4px);
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
  `,document.head.appendChild(e)}var ot=null,Ha=null,Ka=null,Y=[],Er=null,ye=null,ge=new Set,Ge=new Map;function o5(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null,theme:e?.dataset.theme||"auto"};Hs(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{ot=document.querySelector(r.contentSelector)||document.body,Ha=r.documentUri||window.location.origin+window.location.pathname,Ka=r.documentId||null,document.documentElement.dataset.remarqTheme=r.theme,HC({onSubmit:f5,onDelete:m5,onResolve:v5,onReply:p5,onEdit:d5}),OC(a=>{fn(),zC(a),Wa(a)}),c5(),await t(),u5(),RC(r,()=>Y)}catch(a){console.error("[feedback-layer] Boot failed:",a)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function u5(){try{Y=await Ks(Ha,Ka),ge=await s5(Y),nr(Y,ge,Ge)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),Cr(`Failed to load comments: ${e.message}`,"error")}}async function s5(e){CC();let r=new Set;Ge.clear();for(let t of e)if(!t.parent)try{let n=await Ga({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ot);n&&t.status!=="closed"?(Ua(n,t.id),r.add(t.id),Ge.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),Ge.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function c5(){document.addEventListener("mouseup",Gs),document.addEventListener("keyup",Gs),document.addEventListener("touchend",Gs)}function Gs(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){vn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){vn();return}if(!ot.contains(r.commonAncestorContainer)){vn();return}l5(r)},10)}function l5(e){vn();let r=e.getBoundingClientRect();ye=document.createElement("button"),ye.className="fb-annotate-tooltip",ye.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',ye.style.top=window.scrollY+r.bottom+8+"px",ye.style.left=window.scrollX+r.left+r.width/2-40+"px";let t=async n=>{n.preventDefault(),n.stopPropagation();let a=window.getSelection();if(!a||a.isCollapsed)return;let o=a.getRangeAt(0);try{Er=await SC(o,ot),KC(Er.exact)}catch(u){console.error("[feedback-layer] Failed to create selector:",u)}vn()};ye.addEventListener("mousedown",t),ye.addEventListener("touchstart",t),document.body.appendChild(ye)}function vn(){ye&&(ye.remove(),ye=null)}async function f5({comment:e,commenter:r}){if(Er){try{let t=await za({uri:Ha,document:Ka,quote:Er.exact,prefix:Er.prefix,suffix:Er.suffix,body:e,author:r});Y.push(t);let n=await Ga({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ot);n&&(Ua(n,t.id),ge.add(t.id)),nr(Y,ge,Ge),window.getSelection().removeAllRanges()}catch(t){console.error("[feedback-layer] Failed to create comment:",t),Cr(`Failed to save comment: ${t.message}`,"error")}Er=null}}async function v5(e,r){try{let n=await Vs(e,r?"closed":"open"),a=Y.findIndex(o=>o.id===e);if(a!==-1&&(Y[a]=n),r)Ms(e);else{let o=n,u=await Ga({exact:o.quote,prefix:o.prefix,suffix:o.suffix},ot);u?(Ua(u,o.id),ge.add(o.id)):ge.delete(o.id)}nr(Y,ge,Ge)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),Cr(`Failed to update comment: ${t.message}`,"error")}}async function p5({parent_id:e,comment:r,commenter:t}){try{let n=await za({uri:Ha,document:Ka,body:r,author:t,parent:e});Y.push(n),nr(Y,ge,Ge)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),Cr(`Failed to save reply: ${n.message}`,"error")}}async function d5(e,r){try{let t=await zs(e,{body:r}),n=Y.findIndex(a=>a.id===e);n!==-1&&(Y[n]=t),nr(Y,ge,Ge)}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),Cr(`Failed to update comment: ${t.message}`,"error")}}async function m5(e){try{await Ys(e),Ms(e),ge.delete(e),Y=Y.filter(r=>r.id!==e&&r.parent!==e),nr(Y,ge,Ge)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),Cr(`Failed to delete comment: ${r.message}`,"error")}}try{o5()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
