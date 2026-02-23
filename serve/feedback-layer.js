var FeedbackLayer=(()=>{var ZO=Object.create;var Ks=Object.defineProperty;var eC=Object.getOwnPropertyDescriptor;var rC=Object.getOwnPropertyNames;var tC=Object.getPrototypeOf,nC=Object.prototype.hasOwnProperty;var i=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var aC=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of rC(r))!nC.call(e,a)&&a!==t&&Ks(e,a,{get:()=>r[a],enumerable:!(n=eC(r,a))||n.enumerable});return e};var g=(e,r,t)=>(t=e!=null?ZO(tC(e)):{},aC(r||!e||!e.__esModule?Ks(t,"default",{value:e,enumerable:!0}):t,e));var P=i((C8,ec)=>{"use strict";ec.exports=function(e){try{return!!e()}catch{return!0}}});var Rr=i((E8,rc)=>{"use strict";var iC=P();rc.exports=!iC(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var A=i((k8,ac)=>{"use strict";var tc=Rr(),nc=Function.prototype,Ya=nc.call,oC=tc&&nc.bind.bind(Ya,Ya);ac.exports=tc?oC:function(e){return function(){return Ya.apply(e,arguments)}}});var G=i((I8,ic)=>{"use strict";var uC=A();ic.exports=uC({}.isPrototypeOf)});var _=i((Ja,oc)=>{"use strict";var st=function(e){return e&&e.Math===Math&&e};oc.exports=st(typeof globalThis=="object"&&globalThis)||st(typeof window=="object"&&window)||st(typeof self=="object"&&self)||st(typeof global=="object"&&global)||st(typeof Ja=="object"&&Ja)||function(){return this}()||Function("return this")()});var Ar=i((P8,lc)=>{"use strict";var sC=Rr(),cc=Function.prototype,uc=cc.apply,sc=cc.call;lc.exports=typeof Reflect=="object"&&Reflect.apply||(sC?sc.bind(uc):function(){return sc.apply(uc,arguments)})});var xe=i((_8,vc)=>{"use strict";var fc=A(),cC=fc({}.toString),lC=fc("".slice);vc.exports=function(e){return lC(cC(e),8,-1)}});var ct=i((R8,pc)=>{"use strict";var fC=xe(),vC=A();pc.exports=function(e){if(fC(e)==="Function")return vC(e)}});var N=i((A8,dc)=>{"use strict";var Qa=typeof document=="object"&&document.all;dc.exports=typeof Qa>"u"&&Qa!==void 0?function(e){return typeof e=="function"||e===Qa}:function(e){return typeof e=="function"}});var U=i((N8,mc)=>{"use strict";var pC=P();mc.exports=!pC(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var B=i((M8,hc)=>{"use strict";var dC=Rr(),dn=Function.prototype.call;hc.exports=dC?dn.bind(dn):function(){return dn.apply(dn,arguments)}});var Xa=i(bc=>{"use strict";var yc={}.propertyIsEnumerable,gc=Object.getOwnPropertyDescriptor,mC=gc&&!yc.call({1:2},1);bc.f=mC?function(r){var t=gc(this,r);return!!t&&t.enumerable}:yc});var ze=i(($8,qc)=>{"use strict";qc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var mn=i((L8,xc)=>{"use strict";var hC=A(),yC=P(),gC=xe(),Za=Object,bC=hC("".split);xc.exports=yC(function(){return!Za("z").propertyIsEnumerable(0)})?function(e){return gC(e)==="String"?bC(e,""):Za(e)}:Za});var sr=i((F8,wc)=>{"use strict";wc.exports=function(e){return e==null}});var cr=i((D8,Sc)=>{"use strict";var qC=sr(),xC=TypeError;Sc.exports=function(e){if(qC(e))throw new xC("Can't call method on "+e);return e}});var ke=i((B8,Tc)=>{"use strict";var wC=mn(),SC=cr();Tc.exports=function(e){return wC(SC(e))}});var $=i((G8,Oc)=>{"use strict";var TC=N();Oc.exports=function(e){return typeof e=="object"?e!==null:TC(e)}});var z=i((U8,Cc)=>{"use strict";Cc.exports={}});var H=i((H8,kc)=>{"use strict";var ei=z(),ri=_(),OC=N(),Ec=function(e){return OC(e)?e:void 0};kc.exports=function(e,r){return arguments.length<2?Ec(ei[e])||Ec(ri[e]):ei[e]&&ei[e][r]||ri[e]&&ri[e][r]}});var Nr=i((W8,_c)=>{"use strict";var CC=_(),Ic=CC.navigator,Pc=Ic&&Ic.userAgent;_c.exports=Pc?String(Pc):""});var Mr=i((K8,$c)=>{"use strict";var jc=_(),ti=Nr(),Rc=jc.process,Ac=jc.Deno,Nc=Rc&&Rc.versions||Ac&&Ac.version,Mc=Nc&&Nc.v8,me,hn;Mc&&(me=Mc.split("."),hn=me[0]>0&&me[0]<4?1:+(me[0]+me[1]));!hn&&ti&&(me=ti.match(/Edge\/(\d+)/),(!me||me[1]>=74)&&(me=ti.match(/Chrome\/(\d+)/),me&&(hn=+me[1])));$c.exports=hn});var lr=i((z8,Fc)=>{"use strict";var Lc=Mr(),EC=P(),kC=_(),IC=kC.String;Fc.exports=!!Object.getOwnPropertySymbols&&!EC(function(){var e=Symbol("symbol detection");return!IC(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Lc&&Lc<41})});var ni=i((V8,Dc)=>{"use strict";var PC=lr();Dc.exports=PC&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var jr=i((Y8,Bc)=>{"use strict";var _C=H(),RC=N(),AC=G(),NC=ni(),MC=Object;Bc.exports=NC?function(e){return typeof e=="symbol"}:function(e){var r=_C("Symbol");return RC(r)&&AC(r.prototype,MC(e))}});var Ve=i((J8,Gc)=>{"use strict";var jC=String;Gc.exports=function(e){try{return jC(e)}catch{return"Object"}}});var D=i((Q8,Uc)=>{"use strict";var $C=N(),LC=Ve(),FC=TypeError;Uc.exports=function(e){if($C(e))return e;throw new FC(LC(e)+" is not a function")}});var yn=i((X8,Hc)=>{"use strict";var DC=D(),BC=sr();Hc.exports=function(e,r){var t=e[r];return BC(t)?void 0:DC(t)}});var Kc=i((Z8,Wc)=>{"use strict";var ai=B(),ii=N(),oi=$(),GC=TypeError;Wc.exports=function(e,r){var t,n;if(r==="string"&&ii(t=e.toString)&&!oi(n=ai(t,e))||ii(t=e.valueOf)&&!oi(n=ai(t,e))||r!=="string"&&ii(t=e.toString)&&!oi(n=ai(t,e)))return n;throw new GC("Can't convert object to primitive value")}});var Z=i((eG,zc)=>{"use strict";zc.exports=!0});var Jc=i((rG,Yc)=>{"use strict";var Vc=_(),UC=Object.defineProperty;Yc.exports=function(e,r){try{UC(Vc,e,{value:r,configurable:!0,writable:!0})}catch{Vc[e]=r}return r}});var lt=i((tG,Zc)=>{"use strict";var HC=Z(),WC=_(),KC=Jc(),Qc="__core-js_shared__",Xc=Zc.exports=WC[Qc]||KC(Qc,{});(Xc.versions||(Xc.versions=[])).push({version:"3.48.0",mode:HC?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var fr=i((nG,rl)=>{"use strict";var el=lt();rl.exports=function(e,r){return el[e]||(el[e]=r||{})}});var re=i((aG,tl)=>{"use strict";var zC=cr(),VC=Object;tl.exports=function(e){return VC(zC(e))}});var W=i((iG,nl)=>{"use strict";var YC=A(),JC=re(),QC=YC({}.hasOwnProperty);nl.exports=Object.hasOwn||function(r,t){return QC(JC(r),t)}});var $r=i((oG,al)=>{"use strict";var XC=A(),ZC=0,eE=Math.random(),rE=XC(1.1.toString);al.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+rE(++ZC+eE,36)}});var R=i((uG,ol)=>{"use strict";var tE=_(),nE=fr(),il=W(),aE=$r(),iE=lr(),oE=ni(),Lr=tE.Symbol,ui=nE("wks"),uE=oE?Lr.for||Lr:Lr&&Lr.withoutSetter||aE;ol.exports=function(e){return il(ui,e)||(ui[e]=iE&&il(Lr,e)?Lr[e]:uE("Symbol."+e)),ui[e]}});var ll=i((sG,cl)=>{"use strict";var sE=B(),ul=$(),sl=jr(),cE=yn(),lE=Kc(),fE=R(),vE=TypeError,pE=fE("toPrimitive");cl.exports=function(e,r){if(!ul(e)||sl(e))return e;var t=cE(e,pE),n;if(t){if(r===void 0&&(r="default"),n=sE(t,e,r),!ul(n)||sl(n))return n;throw new vE("Can't convert object to primitive value")}return r===void 0&&(r="number"),lE(e,r)}});var gn=i((cG,fl)=>{"use strict";var dE=ll(),mE=jr();fl.exports=function(e){var r=dE(e,"string");return mE(r)?r:r+""}});var bn=i((lG,pl)=>{"use strict";var hE=_(),vl=$(),si=hE.document,yE=vl(si)&&vl(si.createElement);pl.exports=function(e){return yE?si.createElement(e):{}}});var ci=i((fG,dl)=>{"use strict";var gE=U(),bE=P(),qE=bn();dl.exports=!gE&&!bE(function(){return Object.defineProperty(qE("div"),"a",{get:function(){return 7}}).a!==7})});var ft=i(hl=>{"use strict";var xE=U(),wE=B(),SE=Xa(),TE=ze(),OE=ke(),CE=gn(),EE=W(),kE=ci(),ml=Object.getOwnPropertyDescriptor;hl.f=xE?ml:function(r,t){if(r=OE(r),t=CE(t),kE)try{return ml(r,t)}catch{}if(EE(r,t))return TE(!wE(SE.f,r,t),r[t])}});var li=i((pG,yl)=>{"use strict";var IE=P(),PE=N(),_E=/#|\.prototype\./,vt=function(e,r){var t=AE[RE(e)];return t===ME?!0:t===NE?!1:PE(r)?IE(r):!!r},RE=vt.normalize=function(e){return String(e).replace(_E,".").toLowerCase()},AE=vt.data={},NE=vt.NATIVE="N",ME=vt.POLYFILL="P";yl.exports=vt});var V=i((dG,bl)=>{"use strict";var gl=ct(),jE=D(),$E=Rr(),LE=gl(gl.bind);bl.exports=function(e,r){return jE(e),r===void 0?e:$E?LE(e,r):function(){return e.apply(r,arguments)}}});var fi=i((mG,ql)=>{"use strict";var FE=U(),DE=P();ql.exports=FE&&DE(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var Q=i((hG,xl)=>{"use strict";var BE=$(),GE=String,UE=TypeError;xl.exports=function(e){if(BE(e))return e;throw new UE(GE(e)+" is not an object")}});var te=i(Sl=>{"use strict";var HE=U(),WE=ci(),KE=fi(),qn=Q(),wl=gn(),zE=TypeError,vi=Object.defineProperty,VE=Object.getOwnPropertyDescriptor,pi="enumerable",di="configurable",mi="writable";Sl.f=HE?KE?function(r,t,n){if(qn(r),t=wl(t),qn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&mi in n&&!n[mi]){var a=VE(r,t);a&&a[mi]&&(r[t]=n.value,n={configurable:di in n?n[di]:a[di],enumerable:pi in n?n[pi]:a[pi],writable:!1})}return vi(r,t,n)}:vi:function(r,t,n){if(qn(r),t=wl(t),qn(n),WE)try{return vi(r,t,n)}catch{}if("get"in n||"set"in n)throw new zE("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var we=i((gG,Tl)=>{"use strict";var YE=U(),JE=te(),QE=ze();Tl.exports=YE?function(e,r,t){return JE.f(e,r,QE(1,t))}:function(e,r,t){return e[r]=t,e}});var x=i((bG,Cl)=>{"use strict";var pt=_(),XE=Ar(),ZE=ct(),e1=N(),r1=ft().f,t1=li(),Fr=z(),n1=V(),Dr=we(),Ol=W();lt();var a1=function(e){var r=function(t,n,a){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,a)}return XE(e,this,arguments)};return r.prototype=e.prototype,r};Cl.exports=function(e,r){var t=e.target,n=e.global,a=e.stat,o=e.proto,u=n?pt:a?pt[t]:pt[t]&&pt[t].prototype,c=n?Fr:Fr[t]||Dr(Fr,t,{})[t],s=c.prototype,l,f,v,p,d,h,m,y,b;for(p in r)l=t1(n?p:t+(a?".":"#")+p,e.forced),f=!l&&u&&Ol(u,p),h=c[p],f&&(e.dontCallGetSet?(b=r1(u,p),m=b&&b.value):m=u[p]),d=f&&m?m:r[p],!(!l&&!o&&typeof h==typeof d)&&(e.bind&&f?y=n1(d,pt):e.wrap&&f?y=a1(d):o&&e1(d)?y=ZE(d):y=d,(e.sham||d&&d.sham||h&&h.sham)&&Dr(y,"sham",!0),Dr(c,p,y),o&&(v=t+"Prototype",Ol(Fr,v)||Dr(Fr,v,{}),Dr(Fr[v],p,d),e.real&&s&&(l||!s[p])&&Dr(s,p,d)))}});var Ie=i((qG,El)=>{"use strict";var i1=xe();El.exports=Array.isArray||function(r){return i1(r)==="Array"}});var xn=i((xG,Il)=>{"use strict";var o1=R(),u1=o1("toStringTag"),kl={};kl[u1]="z";Il.exports=String(kl)==="[object z]"});var dt=i((wG,Pl)=>{"use strict";var s1=xn(),c1=N(),wn=xe(),l1=R(),f1=l1("toStringTag"),v1=Object,p1=wn(function(){return arguments}())==="Arguments",d1=function(e,r){try{return e[r]}catch{}};Pl.exports=s1?wn:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=d1(r=v1(e),f1))=="string"?t:p1?wn(r):(n=wn(r))==="Object"&&c1(r.callee)?"Arguments":n}});var yi=i((SG,_l)=>{"use strict";var m1=A(),h1=N(),hi=lt(),y1=m1(Function.toString);h1(hi.inspectSource)||(hi.inspectSource=function(e){return y1(e)});_l.exports=hi.inspectSource});var ht=i((TG,jl)=>{"use strict";var g1=A(),b1=P(),Rl=N(),q1=dt(),x1=H(),w1=yi(),Al=function(){},Nl=x1("Reflect","construct"),gi=/^\s*(?:class|function)\b/,S1=g1(gi.exec),T1=!gi.test(Al),mt=function(r){if(!Rl(r))return!1;try{return Nl(Al,[],r),!0}catch{return!1}},Ml=function(r){if(!Rl(r))return!1;switch(q1(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return T1||!!S1(gi,w1(r))}catch{return!0}};Ml.sham=!0;jl.exports=!Nl||b1(function(){var e;return mt(mt.call)||!mt(Object)||!mt(function(){e=!0})||e})?Ml:mt});var Ll=i((OG,$l)=>{"use strict";var O1=Math.ceil,C1=Math.floor;$l.exports=Math.trunc||function(r){var t=+r;return(t>0?C1:O1)(t)}});var Sn=i((CG,Fl)=>{"use strict";var E1=Ll();Fl.exports=function(e){var r=+e;return r!==r||r===0?0:E1(r)}});var bi=i((EG,Dl)=>{"use strict";var k1=Sn(),I1=Math.max,P1=Math.min;Dl.exports=function(e,r){var t=k1(e);return t<0?I1(t+r,0):P1(t,r)}});var qi=i((kG,Bl)=>{"use strict";var _1=Sn(),R1=Math.min;Bl.exports=function(e){var r=_1(e);return r>0?R1(r,9007199254740991):0}});var le=i((IG,Gl)=>{"use strict";var A1=qi();Gl.exports=function(e){return A1(e.length)}});var Br=i((PG,Ul)=>{"use strict";var N1=U(),M1=te(),j1=ze();Ul.exports=function(e,r,t){N1?M1.f(e,r,j1(0,t)):e[r]=t}});var Gr=i((_G,Hl)=>{"use strict";var $1=U(),L1=Ie(),F1=TypeError,D1=Object.getOwnPropertyDescriptor,B1=$1&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();Hl.exports=B1?function(e,r){if(L1(e)&&!D1(e,"length").writable)throw new F1("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var yt=i((RG,Wl)=>{"use strict";var G1=P(),U1=R(),H1=Mr(),W1=U1("species");Wl.exports=function(e){return H1>=51||!G1(function(){var r=[],t=r.constructor={};return t[W1]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var vr=i((AG,Kl)=>{"use strict";var K1=A();Kl.exports=K1([].slice)});var Yl=i(()=>{"use strict";var z1=x(),zl=Ie(),V1=ht(),Y1=$(),Vl=bi(),J1=le(),Q1=ke(),X1=Br(),Z1=Gr(),ek=R(),rk=yt(),tk=vr(),nk=rk("slice"),ak=ek("species"),xi=Array,ik=Math.max;z1({target:"Array",proto:!0,forced:!nk},{slice:function(r,t){var n=Q1(this),a=J1(n),o=Vl(r,a),u=Vl(t===void 0?a:t,a),c,s,l;if(zl(n)&&(c=n.constructor,V1(c)&&(c===xi||zl(c.prototype))?c=void 0:Y1(c)&&(c=c[ak],c===null&&(c=void 0)),c===xi||c===void 0))return tk(n,o,u);for(s=new(c===void 0?xi:c)(ik(u-o,0)),l=0;o<u;o++,l++)o in n&&X1(s,l,n[o]);return Z1(s,l),s}})});var oe=i((jG,Jl)=>{"use strict";var ok=_(),uk=z();Jl.exports=function(e,r){var t=uk[e+"Prototype"],n=t&&t[r];if(n)return n;var a=ok[e],o=a&&a.prototype;return o&&o[r]}});var Xl=i(($G,Ql)=>{"use strict";Yl();var sk=oe();Ql.exports=sk("Array","slice")});var ef=i((LG,Zl)=>{"use strict";var ck=G(),lk=Xl(),wi=Array.prototype;Zl.exports=function(e){var r=e.slice;return e===wi||ck(wi,e)&&r===wi.slice?lk:r}});var tf=i((FG,rf)=>{"use strict";var fk=ef();rf.exports=fk});var af=i((DG,nf)=>{"use strict";var vk=tf();nf.exports=vk});var uf=i((BG,of)=>{"use strict";var pk=af();of.exports=pk});var Si=i((GG,sf)=>{"use strict";sf.exports=uf()});var Ur=i((UG,cf)=>{cf.exports=Si()});var Ye=i((HG,lf)=>{"use strict";var dk=dt(),mk=String;lf.exports=function(e){if(dk(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return mk(e)}});var df=i((WG,pf)=>{"use strict";var Ti=A(),hk=Sn(),yk=Ye(),gk=cr(),bk=Ti("".charAt),ff=Ti("".charCodeAt),qk=Ti("".slice),vf=function(e){return function(r,t){var n=yk(gk(r)),a=hk(t),o=n.length,u,c;return a<0||a>=o?e?"":void 0:(u=ff(n,a),u<55296||u>56319||a+1===o||(c=ff(n,a+1))<56320||c>57343?e?bk(n,a):u:e?qk(n,a,a+2):(u-55296<<10)+(c-56320)+65536)}};pf.exports={codeAt:vf(!1),charAt:vf(!0)}});var yf=i((KG,hf)=>{"use strict";var xk=_(),wk=N(),mf=xk.WeakMap;hf.exports=wk(mf)&&/native code/.test(String(mf))});var gt=i((zG,bf)=>{"use strict";var Sk=fr(),Tk=$r(),gf=Sk("keys");bf.exports=function(e){return gf[e]||(gf[e]=Tk(e))}});var Hr=i((VG,qf)=>{"use strict";qf.exports={}});var Je=i((YG,Sf)=>{"use strict";var Ok=yf(),wf=_(),Ck=$(),Ek=we(),Oi=W(),Ci=lt(),kk=gt(),Ik=Hr(),xf="Object already initialized",Ei=wf.TypeError,Pk=wf.WeakMap,Tn,bt,On,_k=function(e){return On(e)?bt(e):Tn(e,{})},Rk=function(e){return function(r){var t;if(!Ck(r)||(t=bt(r)).type!==e)throw new Ei("Incompatible receiver, "+e+" required");return t}};Ok||Ci.state?(he=Ci.state||(Ci.state=new Pk),he.get=he.get,he.has=he.has,he.set=he.set,Tn=function(e,r){if(he.has(e))throw new Ei(xf);return r.facade=e,he.set(e,r),r},bt=function(e){return he.get(e)||{}},On=function(e){return he.has(e)}):(pr=kk("state"),Ik[pr]=!0,Tn=function(e,r){if(Oi(e,pr))throw new Ei(xf);return r.facade=e,Ek(e,pr,r),r},bt=function(e){return Oi(e,pr)?e[pr]:{}},On=function(e){return Oi(e,pr)});var he,pr;Sf.exports={set:Tn,get:bt,has:On,enforce:_k,getterFor:Rk}});var Cf=i((JG,Of)=>{"use strict";var ki=U(),Ak=W(),Tf=Function.prototype,Nk=ki&&Object.getOwnPropertyDescriptor,Ii=Ak(Tf,"name"),Mk=Ii&&function(){}.name==="something",jk=Ii&&(!ki||ki&&Nk(Tf,"name").configurable);Of.exports={EXISTS:Ii,PROPER:Mk,CONFIGURABLE:jk}});var Pi=i((QG,kf)=>{"use strict";var $k=ke(),Lk=bi(),Fk=le(),Ef=function(e){return function(r,t,n){var a=$k(r),o=Fk(a);if(o===0)return!e&&-1;var u=Lk(n,o),c;if(e&&t!==t){for(;o>u;)if(c=a[u++],c!==c)return!0}else for(;o>u;u++)if((e||u in a)&&a[u]===t)return e||u||0;return!e&&-1}};kf.exports={includes:Ef(!0),indexOf:Ef(!1)}});var Ri=i((XG,Pf)=>{"use strict";var Dk=A(),_i=W(),Bk=ke(),Gk=Pi().indexOf,Uk=Hr(),If=Dk([].push);Pf.exports=function(e,r){var t=Bk(e),n=0,a=[],o;for(o in t)!_i(Uk,o)&&_i(t,o)&&If(a,o);for(;r.length>n;)_i(t,o=r[n++])&&(~Gk(a,o)||If(a,o));return a}});var Cn=i((ZG,_f)=>{"use strict";_f.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var En=i((e6,Rf)=>{"use strict";var Hk=Ri(),Wk=Cn();Rf.exports=Object.keys||function(r){return Hk(r,Wk)}});var Ai=i(Af=>{"use strict";var Kk=U(),zk=fi(),Vk=te(),Yk=Q(),Jk=ke(),Qk=En();Af.f=Kk&&!zk?Object.defineProperties:function(r,t){Yk(r);for(var n=Jk(t),a=Qk(t),o=a.length,u=0,c;o>u;)Vk.f(r,c=a[u++],n[c]);return r}});var Ni=i((t6,Nf)=>{"use strict";var Xk=H();Nf.exports=Xk("document","documentElement")});var Qe=i((n6,Bf)=>{"use strict";var Zk=Q(),eI=Ai(),Mf=Cn(),rI=Hr(),tI=Ni(),nI=bn(),aI=gt(),jf=">",$f="<",ji="prototype",$i="script",Ff=aI("IE_PROTO"),Mi=function(){},Df=function(e){return $f+$i+jf+e+$f+"/"+$i+jf},Lf=function(e){e.write(Df("")),e.close();var r=e.parentWindow.Object;return e=null,r},iI=function(){var e=nI("iframe"),r="java"+$i+":",t;return e.style.display="none",tI.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(Df("document.F=Object")),t.close(),t.F},kn,In=function(){try{kn=new ActiveXObject("htmlfile")}catch{}In=typeof document<"u"?document.domain&&kn?Lf(kn):iI():Lf(kn);for(var e=Mf.length;e--;)delete In[ji][Mf[e]];return In()};rI[Ff]=!0;Bf.exports=Object.create||function(r,t){var n;return r!==null?(Mi[ji]=Zk(r),n=new Mi,Mi[ji]=null,n[Ff]=r):n=In(),t===void 0?n:eI.f(n,t)}});var Li=i((a6,Gf)=>{"use strict";var oI=P();Gf.exports=!oI(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var qt=i((i6,Hf)=>{"use strict";var uI=W(),sI=N(),cI=re(),lI=gt(),fI=Li(),Uf=lI("IE_PROTO"),Fi=Object,vI=Fi.prototype;Hf.exports=fI?Fi.getPrototypeOf:function(e){var r=cI(e);if(uI(r,Uf))return r[Uf];var t=r.constructor;return sI(t)&&r instanceof t?t.prototype:r instanceof Fi?vI:null}});var Pe=i((o6,Wf)=>{"use strict";var pI=we();Wf.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:pI(e,r,t),e}});var Ui=i((u6,Vf)=>{"use strict";var dI=P(),mI=N(),hI=$(),yI=Qe(),Kf=qt(),gI=Pe(),bI=R(),qI=Z(),Gi=bI("iterator"),zf=!1,_e,Di,Bi;[].keys&&(Bi=[].keys(),"next"in Bi?(Di=Kf(Kf(Bi)),Di!==Object.prototype&&(_e=Di)):zf=!0);var xI=!hI(_e)||dI(function(){var e={};return _e[Gi].call(e)!==e});xI?_e={}:qI&&(_e=yI(_e));mI(_e[Gi])||gI(_e,Gi,function(){return this});Vf.exports={IteratorPrototype:_e,BUGGY_SAFARI_ITERATORS:zf}});var Jf=i((s6,Yf)=>{"use strict";var wI=xn(),SI=dt();Yf.exports=wI?{}.toString:function(){return"[object "+SI(this)+"]"}});var Re=i((c6,Xf)=>{"use strict";var TI=xn(),OI=te().f,CI=we(),EI=W(),kI=Jf(),II=R(),Qf=II("toStringTag");Xf.exports=function(e,r,t,n){var a=t?e:e&&e.prototype;a&&(EI(a,Qf)||OI(a,Qf,{configurable:!0,value:r}),n&&!TI&&CI(a,"toString",kI))}});var dr=i((l6,Zf)=>{"use strict";Zf.exports={}});var rv=i((f6,ev)=>{"use strict";var PI=Ui().IteratorPrototype,_I=Qe(),RI=ze(),AI=Re(),NI=dr(),MI=function(){return this};ev.exports=function(e,r,t,n){var a=r+" Iterator";return e.prototype=_I(PI,{next:RI(+!n,t)}),AI(e,a,!1,!0),NI[a]=MI,e}});var nv=i((v6,tv)=>{"use strict";var jI=A(),$I=D();tv.exports=function(e,r,t){try{return jI($I(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var iv=i((p6,av)=>{"use strict";var LI=$();av.exports=function(e){return LI(e)||e===null}});var uv=i((d6,ov)=>{"use strict";var FI=iv(),DI=String,BI=TypeError;ov.exports=function(e){if(FI(e))return e;throw new BI("Can't set "+DI(e)+" as a prototype")}});var xt=i((m6,sv)=>{"use strict";var GI=nv(),UI=$(),HI=cr(),WI=uv();sv.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=GI(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(a,o){return HI(a),WI(o),UI(a)&&(e?t(a,o):a.__proto__=o),a}}():void 0)});var Rn=i((h6,gv)=>{"use strict";var KI=x(),zI=B(),Pn=Z(),hv=Cf(),VI=N(),YI=rv(),cv=qt(),lv=xt(),JI=Re(),QI=we(),Hi=Pe(),XI=R(),fv=dr(),yv=Ui(),ZI=hv.PROPER,eP=hv.CONFIGURABLE,vv=yv.IteratorPrototype,_n=yv.BUGGY_SAFARI_ITERATORS,wt=XI("iterator"),pv="keys",St="values",dv="entries",mv=function(){return this};gv.exports=function(e,r,t,n,a,o,u){YI(t,r,n);var c=function(b){if(b===a&&p)return p;if(!_n&&b&&b in f)return f[b];switch(b){case pv:return function(){return new t(this,b)};case St:return function(){return new t(this,b)};case dv:return function(){return new t(this,b)}}return function(){return new t(this)}},s=r+" Iterator",l=!1,f=e.prototype,v=f[wt]||f["@@iterator"]||a&&f[a],p=!_n&&v||c(a),d=r==="Array"&&f.entries||v,h,m,y;if(d&&(h=cv(d.call(new e)),h!==Object.prototype&&h.next&&(!Pn&&cv(h)!==vv&&(lv?lv(h,vv):VI(h[wt])||Hi(h,wt,mv)),JI(h,s,!0,!0),Pn&&(fv[s]=mv))),ZI&&a===St&&v&&v.name!==St&&(!Pn&&eP?QI(f,"name",St):(l=!0,p=function(){return zI(v,this)})),a)if(m={values:c(St),keys:o?p:c(pv),entries:c(dv)},u)for(y in m)(_n||l||!(y in f))&&Hi(f,y,m[y]);else KI({target:r,proto:!0,forced:_n||l},m);return(!Pn||u)&&f[wt]!==p&&Hi(f,wt,p,{name:a}),fv[r]=p,m}});var An=i((y6,bv)=>{"use strict";bv.exports=function(e,r){return{value:e,done:r}}});var mr=i(()=>{"use strict";var rP=df().charAt,tP=Ye(),xv=Je(),nP=Rn(),qv=An(),wv="String Iterator",aP=xv.set,iP=xv.getterFor(wv);nP(String,"String",function(e){aP(this,{type:wv,string:tP(e),index:0})},function(){var r=iP(this),t=r.string,n=r.index,a;return n>=t.length?qv(void 0,!0):(a=rP(t,n),r.index+=a.length,qv(a,!1))})});var Wi=i((q6,Tv)=>{"use strict";var oP=B(),Sv=Q(),uP=yn();Tv.exports=function(e,r,t){var n,a;Sv(e);try{if(n=uP(e,"return"),!n){if(r==="throw")throw t;return t}n=oP(n,e)}catch(o){a=!0,n=o}if(r==="throw")throw t;if(a)throw n;return Sv(n),t}});var Cv=i((x6,Ov)=>{"use strict";var sP=Q(),cP=Wi();Ov.exports=function(e,r,t,n){try{return n?r(sP(t)[0],t[1]):r(t)}catch(a){cP(e,"throw",a)}}});var Ki=i((w6,Ev)=>{"use strict";var lP=R(),fP=dr(),vP=lP("iterator"),pP=Array.prototype;Ev.exports=function(e){return e!==void 0&&(fP.Array===e||pP[vP]===e)}});var Tt=i((S6,Iv)=>{"use strict";var dP=dt(),kv=yn(),mP=sr(),hP=dr(),yP=R(),gP=yP("iterator");Iv.exports=function(e){if(!mP(e))return kv(e,gP)||kv(e,"@@iterator")||hP[dP(e)]}});var Nn=i((T6,Pv)=>{"use strict";var bP=B(),qP=D(),xP=Q(),wP=Ve(),SP=Tt(),TP=TypeError;Pv.exports=function(e,r){var t=arguments.length<2?SP(e):r;if(qP(t))return xP(bP(t,e));throw new TP(wP(e)+" is not iterable")}});var Nv=i((O6,Av)=>{"use strict";var OP=V(),CP=B(),EP=re(),kP=Cv(),IP=Ki(),PP=ht(),_P=le(),_v=Br(),RP=Gr(),AP=Nn(),NP=Tt(),Rv=Array;Av.exports=function(r){var t=EP(r),n=PP(this),a=arguments.length,o=a>1?arguments[1]:void 0,u=o!==void 0;u&&(o=OP(o,a>2?arguments[2]:void 0));var c=NP(t),s=0,l,f,v,p,d,h;if(c&&!(this===Rv&&IP(c)))for(f=n?new this:[],p=AP(t,c),d=p.next;!(v=CP(d,p)).done;s++)h=u?kP(p,o,[v.value,s],!0):v.value,_v(f,s,h);else for(l=_P(t),f=n?new this(l):Rv(l);l>s;s++)h=u?o(t[s],s):t[s],_v(f,s,h);return RP(f,s),f}});var Vi=i((C6,Lv)=>{"use strict";var MP=R(),jv=MP("iterator"),$v=!1;try{Mv=0,zi={next:function(){return{done:!!Mv++}},return:function(){$v=!0}},zi[jv]=function(){return this},Array.from(zi,function(){throw 2})}catch{}var Mv,zi;Lv.exports=function(e,r){try{if(!r&&!$v)return!1}catch{return!1}var t=!1;try{var n={};n[jv]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var Fv=i(()=>{"use strict";var jP=x(),$P=Nv(),LP=Vi(),FP=!LP(function(e){Array.from(e)});jP({target:"Array",stat:!0,forced:FP},{from:$P})});var Bv=i((I6,Dv)=>{"use strict";mr();Fv();var DP=z();Dv.exports=DP.Array.from});var Uv=i((P6,Gv)=>{"use strict";var BP=Bv();Gv.exports=BP});var Wv=i((_6,Hv)=>{"use strict";var GP=Uv();Hv.exports=GP});var zv=i((R6,Kv)=>{"use strict";var UP=Wv();Kv.exports=UP});var Yi=i((A6,Vv)=>{"use strict";Vv.exports=zv()});var Mn=i((N6,Yv)=>{Yv.exports=Yi()});var Ot=i((M6,Jv)=>{"use strict";var HP=TypeError,WP=9007199254740991;Jv.exports=function(e){if(e>WP)throw HP("Maximum allowed index exceeded");return e}});var ep=i((j6,Zv)=>{"use strict";var Qv=Ie(),KP=ht(),zP=$(),VP=R(),YP=VP("species"),Xv=Array;Zv.exports=function(e){var r;return Qv(e)&&(r=e.constructor,KP(r)&&(r===Xv||Qv(r.prototype))?r=void 0:zP(r)&&(r=r[YP],r===null&&(r=void 0))),r===void 0?Xv:r}});var jn=i(($6,rp)=>{"use strict";var JP=ep();rp.exports=function(e,r){return new(JP(e))(r===0?0:r)}});var Ji=i(()=>{"use strict";var QP=x(),XP=P(),ZP=Ie(),e_=$(),r_=re(),t_=le(),tp=Ot(),np=Br(),n_=Gr(),a_=jn(),i_=yt(),o_=R(),u_=Mr(),ap=o_("isConcatSpreadable"),s_=u_>=51||!XP(function(){var e=[];return e[ap]=!1,e.concat()[0]!==e}),c_=function(e){if(!e_(e))return!1;var r=e[ap];return r!==void 0?!!r:ZP(e)},l_=!s_||!i_("concat");QP({target:"Array",proto:!0,arity:1,forced:l_},{concat:function(r){var t=r_(this),n=a_(t,0),a=0,o,u,c,s,l;for(o=-1,c=arguments.length;o<c;o++)if(l=o===-1?t:arguments[o],c_(l))for(s=t_(l),tp(a+s),u=0;u<s;u++,a++)u in l&&np(n,a,l[u]);else tp(a+1),np(n,a++,l);return n_(n,a),n}})});var Ct=i(()=>{});var Et=i(ip=>{"use strict";var f_=Ri(),v_=Cn(),p_=v_.concat("length","prototype");ip.f=Object.getOwnPropertyNames||function(r){return f_(r,p_)}});var Qi=i((U6,sp)=>{"use strict";var d_=xe(),m_=ke(),op=Et().f,h_=vr(),up=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],y_=function(e){try{return op(e)}catch{return h_(up)}};sp.exports.f=function(r){return up&&d_(r)==="Window"?y_(r):op(m_(r))}});var $n=i(cp=>{"use strict";cp.f=Object.getOwnPropertySymbols});var Ln=i((W6,lp)=>{"use strict";var g_=te();lp.exports=function(e,r,t){return g_.f(e,r,t)}});var Wr=i(fp=>{"use strict";var b_=R();fp.f=b_});var M=i((z6,pp)=>{"use strict";var vp=z(),q_=W(),x_=Wr(),w_=te().f;pp.exports=function(e){var r=vp.Symbol||(vp.Symbol={});q_(r,e)||w_(r,e,{value:x_.f(e)})}});var Xi=i((V6,dp)=>{"use strict";var S_=B(),T_=H(),O_=R(),C_=Pe();dp.exports=function(){var e=T_("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=O_("toPrimitive");r&&!r[n]&&C_(r,n,function(a){return S_(t,this)},{arity:1})}});var kt=i((Y6,hp)=>{"use strict";var E_=V(),k_=mn(),I_=re(),P_=le(),mp=jn(),Zi=Br(),Xe=function(e){var r=e===1,t=e===2,n=e===3,a=e===4,o=e===6,u=e===7,c=e===5||o;return function(s,l,f){for(var v=I_(s),p=k_(v),d=P_(p),h=E_(l,f),m=0,y=0,b=r?mp(s,d):t||u?mp(s,0):void 0,q,k;d>m;m++)if((c||m in p)&&(q=p[m],k=h(q,m,v),e))if(r)Zi(b,m,k);else if(k)switch(e){case 3:return!0;case 5:return q;case 6:return m;case 2:Zi(b,y++,q)}else switch(e){case 4:return!1;case 7:Zi(b,y++,q)}return o?-1:n||a?a:b}};hp.exports={forEach:Xe(0),map:Xe(1),filter:Xe(2),some:Xe(3),every:Xe(4),find:Xe(5),findIndex:Xe(6),filterReject:Xe(7)}});var Ap=i(()=>{"use strict";var Fn=x(),_t=_(),so=B(),__=A(),R_=Z(),Kr=U(),zr=lr(),A_=P(),K=W(),N_=G(),no=Q(),Dn=ke(),co=gn(),M_=Ye(),ao=ze(),Vr=Qe(),bp=En(),j_=Et(),qp=Qi(),$_=$n(),xp=ft(),wp=te(),L_=Ai(),Sp=Xa(),eo=Pe(),F_=Ln(),lo=fr(),D_=gt(),Tp=Hr(),yp=$r(),B_=R(),G_=Wr(),U_=M(),H_=Xi(),W_=Re(),Op=Je(),Bn=kt().forEach,ne=D_("hidden"),Gn="Symbol",Pt="prototype",K_=Op.set,gp=Op.getterFor(Gn),fe=Object[Pt],hr=_t.Symbol,It=hr&&hr[Pt],z_=_t.RangeError,V_=_t.TypeError,ro=_t.QObject,Cp=xp.f,yr=wp.f,Ep=qp.f,Y_=Sp.f,kp=__([].push),Ae=lo("symbols"),Rt=lo("op-symbols"),J_=lo("wks"),io=!ro||!ro[Pt]||!ro[Pt].findChild,Ip=function(e,r,t){var n=Cp(fe,r);n&&delete fe[r],yr(e,r,t),n&&e!==fe&&yr(fe,r,n)},oo=Kr&&A_(function(){return Vr(yr({},"a",{get:function(){return yr(this,"a",{value:7}).a}})).a!==7})?Ip:yr,to=function(e,r){var t=Ae[e]=Vr(It);return K_(t,{type:Gn,tag:e,description:r}),Kr||(t.description=r),t},Un=function(r,t,n){r===fe&&Un(Rt,t,n),no(r);var a=co(t);return no(n),K(Ae,a)?(n.enumerable?(K(r,ne)&&r[ne][a]&&(r[ne][a]=!1),n=Vr(n,{enumerable:ao(0,!1)})):(K(r,ne)||yr(r,ne,ao(1,Vr(null))),r[ne][a]=!0),oo(r,a,n)):yr(r,a,n)},fo=function(r,t){no(r);var n=Dn(t),a=bp(n).concat(Rp(n));return Bn(a,function(o){(!Kr||so(uo,n,o))&&Un(r,o,n[o])}),r},Q_=function(r,t){return t===void 0?Vr(r):fo(Vr(r),t)},uo=function(r){var t=co(r),n=so(Y_,this,t);return this===fe&&K(Ae,t)&&!K(Rt,t)?!1:n||!K(this,t)||!K(Ae,t)||K(this,ne)&&this[ne][t]?n:!0},Pp=function(r,t){var n=Dn(r),a=co(t);if(!(n===fe&&K(Ae,a)&&!K(Rt,a))){var o=Cp(n,a);return o&&K(Ae,a)&&!(K(n,ne)&&n[ne][a])&&(o.enumerable=!0),o}},_p=function(r){var t=Ep(Dn(r)),n=[];return Bn(t,function(a){!K(Ae,a)&&!K(Tp,a)&&kp(n,a)}),n},Rp=function(e){var r=e===fe,t=Ep(r?Rt:Dn(e)),n=[];return Bn(t,function(a){K(Ae,a)&&(!r||K(fe,a))&&kp(n,Ae[a])}),n};zr||(hr=function(){if(N_(It,this))throw new V_("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:M_(arguments[0]),t=yp(r),n=function(a){var o=this===void 0?_t:this;o===fe&&so(n,Rt,a),K(o,ne)&&K(o[ne],t)&&(o[ne][t]=!1);var u=ao(1,a);try{oo(o,t,u)}catch(c){if(!(c instanceof z_))throw c;Ip(o,t,u)}};return Kr&&io&&oo(fe,t,{configurable:!0,set:n}),to(t,r)},It=hr[Pt],eo(It,"toString",function(){return gp(this).tag}),eo(hr,"withoutSetter",function(e){return to(yp(e),e)}),Sp.f=uo,wp.f=Un,L_.f=fo,xp.f=Pp,j_.f=qp.f=_p,$_.f=Rp,G_.f=function(e){return to(B_(e),e)},Kr&&(F_(It,"description",{configurable:!0,get:function(){return gp(this).description}}),R_||eo(fe,"propertyIsEnumerable",uo,{unsafe:!0})));Fn({global:!0,constructor:!0,wrap:!0,forced:!zr,sham:!zr},{Symbol:hr});Bn(bp(J_),function(e){U_(e)});Fn({target:Gn,stat:!0,forced:!zr},{useSetter:function(){io=!0},useSimple:function(){io=!1}});Fn({target:"Object",stat:!0,forced:!zr,sham:!Kr},{create:Q_,defineProperty:Un,defineProperties:fo,getOwnPropertyDescriptor:Pp});Fn({target:"Object",stat:!0,forced:!zr},{getOwnPropertyNames:_p});H_();W_(hr,Gn);Tp[ne]=!0});var vo=i((X6,Np)=>{"use strict";var X_=lr();Np.exports=X_&&!!Symbol.for&&!!Symbol.keyFor});var jp=i(()=>{"use strict";var Z_=x(),e2=H(),r2=W(),t2=Ye(),Mp=fr(),n2=vo(),po=Mp("string-to-symbol-registry"),a2=Mp("symbol-to-string-registry");Z_({target:"Symbol",stat:!0,forced:!n2},{for:function(e){var r=t2(e);if(r2(po,r))return po[r];var t=e2("Symbol")(r);return po[r]=t,a2[t]=r,t}})});var Lp=i(()=>{"use strict";var i2=x(),o2=W(),u2=jr(),s2=Ve(),c2=fr(),l2=vo(),$p=c2("symbol-to-string-registry");i2({target:"Symbol",stat:!0,forced:!l2},{keyFor:function(r){if(!u2(r))throw new TypeError(s2(r)+" is not a symbol");if(o2($p,r))return $p[r]}})});var Dp=i((nU,Fp)=>{"use strict";var f2=$(),v2=Je().get;Fp.exports=function(r){if(!f2(r))return!1;var t=v2(r);return!!t&&t.type==="RawJSON"}});var Wp=i((aU,Hp)=>{"use strict";var mo=A(),p2=W(),Hn=SyntaxError,d2=parseInt,m2=String.fromCharCode,h2=mo("".charAt),Bp=mo("".slice),Gp=mo(/./.exec),Up={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},y2=/^[\da-f]{4}$/i,g2=/^[\u0000-\u001F]$/;Hp.exports=function(e,r){for(var t=!0,n="";r<e.length;){var a=h2(e,r);if(a==="\\"){var o=Bp(e,r,r+2);if(p2(Up,o))n+=Up[o],r+=2;else if(o==="\\u"){r+=2;var u=Bp(e,r,r+4);if(!Gp(y2,u))throw new Hn("Bad Unicode escape at: "+r);n+=m2(d2(u,16)),r+=4}else throw new Hn('Unknown escape sequence: "'+o+'"')}else if(a==='"'){t=!1,r++;break}else{if(Gp(g2,a))throw new Hn("Bad control character in string literal at: "+r);n+=a,r++}}if(t)throw new Hn("Unterminated string at: "+r);return{value:n,end:r}}});var zp=i((iU,Kp)=>{"use strict";var b2=P();Kp.exports=!b2(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var ud=i(()=>{"use strict";var q2=x(),rd=H(),x2=Ar(),td=B(),gr=A(),nd=P(),Vp=Ie(),Kn=N(),w2=Dp(),Yp=jr(),Jp=xe(),S2=Ye(),T2=vr(),O2=Wp(),C2=$r(),E2=lr(),ho=zp(),ad=String,Ze=rd("JSON","stringify"),Wn=gr(/./.exec),go=gr("".charAt),k2=gr("".charCodeAt),I2=gr("".replace),yo=gr("".slice),bo=gr([].push),P2=gr(1.1.toString),_2=/[\uD800-\uDFFF]/g,Qp=/^[\uD800-\uDBFF]$/,Xp=/^[\uDC00-\uDFFF]$/,qo=C2(),Zp=qo.length,id=!E2||nd(function(){var e=rd("Symbol")("stringify detection");return Ze([e])!=="[null]"||Ze({a:e})!=="{}"||Ze(Object(e))!=="{}"}),ed=nd(function(){return Ze("\uDF06\uD834")!=='"\\udf06\\ud834"'||Ze("\uDEAD")!=='"\\udead"'}),R2=id?function(e,r){var t=T2(arguments),n=od(r);if(!(!Kn(n)&&(e===void 0||Yp(e))))return t[1]=function(a,o){if(Kn(n)&&(o=td(n,this,ad(a),o)),!Yp(o))return o},x2(Ze,null,t)}:Ze,A2=function(e,r,t){var n=go(t,r-1),a=go(t,r+1);return Wn(Qp,e)&&!Wn(Xp,a)||Wn(Xp,e)&&!Wn(Qp,n)?"\\u"+P2(k2(e,0),16):e},od=function(e){if(Kn(e))return e;if(Vp(e)){for(var r=e.length,t=[],n=0;n<r;n++){var a=e[n];typeof a=="string"?bo(t,a):(typeof a=="number"||Jp(a)==="Number"||Jp(a)==="String")&&bo(t,S2(a))}var o=t.length,u=!0;return function(c,s){if(u)return u=!1,s;if(Vp(this))return s;for(var l=0;l<o;l++)if(t[l]===c)return s}}};Ze&&q2({target:"JSON",stat:!0,arity:3,forced:id||ed||!ho},{stringify:function(r,t,n){var a=od(t),o=[],u=R2(r,function(d,h){var m=Kn(a)?td(a,this,ad(d),h):h;return!ho&&w2(m)?qo+(bo(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(ed&&(u=I2(u,_2,A2)),ho))return u;for(var c="",s=u.length,l=0;l<s;l++){var f=go(u,l);if(f==='"'){var v=O2(u,++l).end-1,p=yo(u,l,v);c+=yo(p,0,Zp)===qo?o[yo(p,Zp)]:'"'+p+'"',l=v}else c+=f}return c}})});var cd=i(()=>{"use strict";var N2=x(),M2=lr(),j2=P(),sd=$n(),$2=re(),L2=!M2||j2(function(){sd.f(1)});N2({target:"Object",stat:!0,forced:L2},{getOwnPropertySymbols:function(r){var t=sd.f;return t?t($2(r)):[]}})});var ld=i(()=>{"use strict";Ap();jp();Lp();ud();cd()});var xo=i(()=>{"use strict";var F2=M();F2("asyncDispose")});var wo=i(()=>{"use strict";var D2=M();D2("asyncIterator")});var fd=i(()=>{});var So=i(()=>{"use strict";var B2=M();B2("dispose")});var vd=i(()=>{"use strict";var G2=M();G2("hasInstance")});var pd=i(()=>{"use strict";var U2=M();U2("isConcatSpreadable")});var To=i(()=>{"use strict";var H2=M();H2("iterator")});var dd=i(()=>{"use strict";var W2=M();W2("match")});var md=i(()=>{"use strict";var K2=M();K2("matchAll")});var hd=i(()=>{"use strict";var z2=M();z2("replace")});var yd=i(()=>{"use strict";var V2=M();V2("search")});var gd=i(()=>{"use strict";var Y2=M();Y2("species")});var bd=i(()=>{"use strict";var J2=M();J2("split")});var Oo=i(()=>{"use strict";var Q2=M(),X2=Xi();Q2("toPrimitive");X2()});var qd=i(()=>{"use strict";var Z2=H(),eR=M(),rR=Re();eR("toStringTag");rR(Z2("Symbol"),"Symbol")});var xd=i(()=>{"use strict";var tR=M();tR("unscopables")});var wd=i(()=>{"use strict";var nR=_(),aR=Re();aR(nR.JSON,"JSON",!0)});var Sd=i(()=>{});var Td=i(()=>{});var Cd=i((JU,Od)=>{"use strict";Ji();Ct();ld();xo();wo();fd();So();vd();pd();To();dd();md();hd();yd();gd();bd();Oo();qd();xd();wd();Sd();Td();var iR=z();Od.exports=iR.Symbol});var Co=i((QU,Ed)=>{"use strict";Ed.exports=function(){}});var br=i((XU,Rd)=>{"use strict";var oR=ke(),Eo=Co(),kd=dr(),Pd=Je(),uR=te().f,sR=Rn(),zn=An(),cR=Z(),lR=U(),_d="Array Iterator",fR=Pd.set,vR=Pd.getterFor(_d);Rd.exports=sR(Array,"Array",function(e,r){fR(this,{type:_d,target:oR(e),index:0,kind:r})},function(){var e=vR(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,zn(void 0,!0);switch(e.kind){case"keys":return zn(t,!1);case"values":return zn(r[t],!1)}return zn([t,r[t]],!1)},"values");var Id=kd.Arguments=kd.Array;Eo("keys");Eo("values");Eo("entries");if(!cR&&lR&&Id.name!=="values")try{uR(Id,"name",{value:"values"})}catch{}});var Nd=i((ZU,Ad)=>{"use strict";Ad.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var qr=i(()=>{"use strict";br();var pR=Nd(),dR=_(),mR=Re(),Md=dr();for(Vn in pR)mR(dR[Vn],Vn),Md[Vn]=Md.Array;var Vn});var $d=i((tH,jd)=>{"use strict";var hR=Cd();qr();jd.exports=hR});var Dd=i(()=>{"use strict";var yR=R(),gR=te().f,Ld=yR("metadata"),Fd=Function.prototype;Fd[Ld]===void 0&&gR(Fd,Ld,{value:null})});var Bd=i(()=>{"use strict";xo()});var Gd=i(()=>{"use strict";So()});var Ud=i(()=>{"use strict";var bR=M();bR("metadata")});var Wd=i((fH,Hd)=>{"use strict";var qR=$d();Dd();Bd();Gd();Ud();Hd.exports=qR});var Io=i((vH,Kd)=>{"use strict";var xR=H(),wR=A(),ko=xR("Symbol"),SR=ko.keyFor,TR=wR(ko.prototype.valueOf);Kd.exports=ko.isRegisteredSymbol||function(r){try{return SR(TR(r))!==void 0}catch{return!1}}});var zd=i(()=>{"use strict";var OR=x(),CR=Io();OR({target:"Symbol",stat:!0},{isRegisteredSymbol:CR})});var Ro=i((mH,Zd)=>{"use strict";var ER=fr(),Qd=H(),kR=A(),IR=jr(),PR=R(),Jn=Qd("Symbol"),Vd=Jn.isWellKnownSymbol,Xd=Qd("Object","getOwnPropertyNames"),_R=kR(Jn.prototype.valueOf),Yd=ER("wks");for(Yn=0,Po=Xd(Jn),Jd=Po.length;Yn<Jd;Yn++)try{_o=Po[Yn],IR(Jn[_o])&&PR(_o)}catch{}var _o,Yn,Po,Jd;Zd.exports=function(r){if(Vd&&Vd(r))return!0;try{for(var t=_R(r),n=0,a=Xd(Yd),o=a.length;n<o;n++)if(Yd[a[n]]==t)return!0}catch{}return!1}});var em=i(()=>{"use strict";var RR=x(),AR=Ro();RR({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:AR})});var rm=i(()=>{"use strict";var NR=M();NR("customMatcher")});var tm=i(()=>{"use strict";var MR=M();MR("observable")});var nm=i(()=>{"use strict";var jR=x(),$R=Io();jR({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:$R})});var am=i(()=>{"use strict";var LR=x(),FR=Ro();LR({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:FR})});var im=i(()=>{"use strict";var DR=M();DR("matcher")});var om=i(()=>{"use strict";var BR=M();BR("metadataKey")});var um=i(()=>{"use strict";var GR=M();GR("patternMatch")});var sm=i(()=>{"use strict";var UR=M();UR("replaceAll")});var lm=i((NH,cm)=>{"use strict";var HR=Wd();zd();em();rm();tm();nm();am();im();om();um();sm();cm.exports=HR});var Se=i((MH,fm)=>{"use strict";fm.exports=lm()});var Qn=i((jH,vm)=>{vm.exports=Se()});var dm=i(($H,pm)=>{"use strict";br();mr();var WR=Tt();pm.exports=WR});var hm=i((LH,mm)=>{"use strict";var KR=dm();qr();mm.exports=KR});var gm=i((FH,ym)=>{"use strict";var zR=hm();ym.exports=zR});var qm=i((DH,bm)=>{"use strict";var VR=gm();bm.exports=VR});var Ao=i((BH,xm)=>{"use strict";xm.exports=qm()});var Xn=i((GH,wm)=>{wm.exports=Ao()});var Tm=i((UH,Sm)=>{"use strict";br();mr();var YR=Nn();Sm.exports=YR});var Cm=i((HH,Om)=>{"use strict";var JR=Tm();qr();Om.exports=JR});var km=i((WH,Em)=>{"use strict";var QR=Cm();Em.exports=QR});var Pm=i((KH,Im)=>{"use strict";var XR=km();Im.exports=XR});var Rm=i((zH,_m)=>{"use strict";_m.exports=Pm()});var Zn=i((VH,Am)=>{Am.exports=Rm()});var Mm=i((YH,Nm)=>{"use strict";var ZR=H(),eA=A(),rA=Et(),tA=$n(),nA=Q(),aA=eA([].concat);Nm.exports=ZR("Reflect","ownKeys")||function(r){var t=rA.f(nA(r)),n=tA.f;return n?aA(t,n(r)):t}});var Lm=i((JH,$m)=>{"use strict";var jm=W(),iA=Mm(),oA=ft(),uA=te();$m.exports=function(e,r,t){for(var n=iA(r),a=uA.f,o=oA.f,u=0;u<n.length;u++){var c=n[u];!jm(e,c)&&!(t&&jm(t,c))&&a(e,c,o(r,c))}}});var Dm=i((QH,Fm)=>{"use strict";var sA=$(),cA=we();Fm.exports=function(e,r){sA(r)&&"cause"in r&&cA(e,"cause",r.cause)}});var Hm=i((XH,Um)=>{"use strict";var lA=A(),Bm=Error,fA=lA("".replace),vA=function(e){return String(new Bm(e).stack)}("zxcasd"),Gm=/\n\s*at [^:]*:[^\n]*/,pA=Gm.test(vA);Um.exports=function(e,r){if(pA&&typeof e=="string"&&!Bm.prepareStackTrace)for(;r--;)e=fA(e,Gm,"");return e}});var Km=i((ZH,Wm)=>{"use strict";var dA=P(),mA=ze();Wm.exports=!dA(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",mA(1,7)),e.stack!==7):!0})});var Ym=i((eW,Vm)=>{"use strict";var hA=we(),yA=Hm(),gA=Km(),zm=Error.captureStackTrace;Vm.exports=function(e,r,t,n){gA&&(zm?zm(e,r):hA(e,"stack",yA(t,n)))}});var ve=i((rW,Zm)=>{"use strict";var bA=V(),qA=B(),xA=Q(),wA=Ve(),SA=Ki(),TA=le(),Jm=G(),OA=Nn(),CA=Tt(),Qm=Wi(),EA=TypeError,ea=function(e,r){this.stopped=e,this.result=r},Xm=ea.prototype;Zm.exports=function(e,r,t){var n=t&&t.that,a=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),c=!!(t&&t.INTERRUPTED),s=bA(r,n),l,f,v,p,d,h,m,y=function(q){return l&&Qm(l,"normal"),new ea(!0,q)},b=function(q){return a?(xA(q),c?s(q[0],q[1],y):s(q[0],q[1])):c?s(q,y):s(q)};if(o)l=e.iterator;else if(u)l=e;else{if(f=CA(e),!f)throw new EA(wA(e)+" is not iterable");if(SA(f)){for(v=0,p=TA(e);p>v;v++)if(d=b(e[v]),d&&Jm(Xm,d))return d;return new ea(!1)}l=OA(e,f)}for(h=o?e.next:l.next;!(m=qA(h,l)).done;){try{d=b(m.value)}catch(q){Qm(l,"throw",q)}if(typeof d=="object"&&d&&Jm(Xm,d))return d}return new ea(!1)}});var rh=i((tW,eh)=>{"use strict";var kA=Ye();eh.exports=function(e,r){return e===void 0?arguments.length<2?"":r:kA(e)}});var nh=i(()=>{"use strict";var IA=x(),PA=G(),_A=qt(),ra=xt(),RA=Lm(),th=Qe(),No=we(),Mo=ze(),AA=Dm(),NA=Ym(),MA=ve(),jA=rh(),$A=R(),LA=$A("toStringTag"),ta=Error,FA=[].push,Yr=function(r,t){var n=PA(jo,this),a;ra?a=ra(new ta,n?_A(this):jo):(a=n?this:th(jo),No(a,LA,"Error")),t!==void 0&&No(a,"message",jA(t)),NA(a,Yr,a.stack,1),arguments.length>2&&AA(a,arguments[2]);var o=[];return MA(r,FA,{that:o}),No(a,"errors",o),a};ra?ra(Yr,ta):RA(Yr,ta,{name:!0});var jo=Yr.prototype=th(ta.prototype,{constructor:Mo(1,Yr),message:Mo(1,""),name:Mo(1,"AggregateError")});IA({global:!0,constructor:!0,arity:2},{AggregateError:Yr})});var $o=i(()=>{"use strict";nh()});var Lo=i((uW,ah)=>{"use strict";var At=_(),DA=Nr(),BA=xe(),na=function(e){return DA.slice(0,e.length)===e};ah.exports=function(){return na("Bun/")?"BUN":na("Cloudflare-Workers")?"CLOUDFLARE":na("Deno/")?"DENO":na("Node.js/")?"NODE":At.Bun&&typeof Bun.version=="string"?"BUN":At.Deno&&typeof Deno.version=="object"?"DENO":BA(At.process)==="process"?"NODE":At.window&&At.document?"BROWSER":"REST"}()});var Nt=i((sW,ih)=>{"use strict";var GA=Lo();ih.exports=GA==="NODE"});var Fo=i((cW,uh)=>{"use strict";var UA=H(),HA=Ln(),WA=R(),KA=U(),oh=WA("species");uh.exports=function(e){var r=UA(e);KA&&r&&!r[oh]&&HA(r,oh,{configurable:!0,get:function(){return this}})}});var aa=i((lW,sh)=>{"use strict";var zA=G(),VA=TypeError;sh.exports=function(e,r){if(zA(r,e))return e;throw new VA("Incorrect invocation")}});var Do=i((fW,ch)=>{"use strict";var YA=ht(),JA=Ve(),QA=TypeError;ch.exports=function(e){if(YA(e))return e;throw new QA(JA(e)+" is not a constructor")}});var Bo=i((vW,fh)=>{"use strict";var lh=Q(),XA=Do(),ZA=sr(),eN=R(),rN=eN("species");fh.exports=function(e,r){var t=lh(e).constructor,n;return t===void 0||ZA(n=lh(t)[rN])?r:XA(n)}});var ph=i((pW,vh)=>{"use strict";var tN=TypeError;vh.exports=function(e,r){if(e<r)throw new tN("Not enough arguments");return e}});var Go=i((dW,dh)=>{"use strict";var nN=Nr();dh.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(nN)});var Qo=i((mW,Sh)=>{"use strict";var ue=_(),aN=Ar(),iN=V(),mh=N(),oN=W(),wh=P(),hh=Ni(),uN=vr(),yh=bn(),sN=ph(),cN=Go(),lN=Nt(),Vo=ue.setImmediate,Yo=ue.clearImmediate,fN=ue.process,Uo=ue.Dispatch,vN=ue.Function,gh=ue.MessageChannel,pN=ue.String,Ho=0,Mt={},bh="onreadystatechange",jt,xr,Wo,Ko;wh(function(){jt=ue.location});var Jo=function(e){if(oN(Mt,e)){var r=Mt[e];delete Mt[e],r()}},zo=function(e){return function(){Jo(e)}},qh=function(e){Jo(e.data)},xh=function(e){ue.postMessage(pN(e),jt.protocol+"//"+jt.host)};(!Vo||!Yo)&&(Vo=function(r){sN(arguments.length,1);var t=mh(r)?r:vN(r),n=uN(arguments,1);return Mt[++Ho]=function(){aN(t,void 0,n)},xr(Ho),Ho},Yo=function(r){delete Mt[r]},lN?xr=function(e){fN.nextTick(zo(e))}:Uo&&Uo.now?xr=function(e){Uo.now(zo(e))}:gh&&!cN?(Wo=new gh,Ko=Wo.port2,Wo.port1.onmessage=qh,xr=iN(Ko.postMessage,Ko)):ue.addEventListener&&mh(ue.postMessage)&&!ue.importScripts&&jt&&jt.protocol!=="file:"&&!wh(xh)?(xr=xh,ue.addEventListener("message",qh,!1)):bh in yh("script")?xr=function(e){hh.appendChild(yh("script"))[bh]=function(){hh.removeChild(this),Jo(e)}}:xr=function(e){setTimeout(zo(e),0)});Sh.exports={set:Vo,clear:Yo}});var Ch=i((hW,Oh)=>{"use strict";var Th=_(),dN=U(),mN=Object.getOwnPropertyDescriptor;Oh.exports=function(e){if(!dN)return Th[e];var r=mN(Th,e);return r&&r.value}});var Xo=i((yW,kh)=>{"use strict";var Eh=function(){this.head=null,this.tail=null};Eh.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};kh.exports=Eh});var Ph=i((gW,Ih)=>{"use strict";var hN=Nr();Ih.exports=/ipad|iphone|ipod/i.test(hN)&&typeof Pebble<"u"});var Rh=i((bW,_h)=>{"use strict";var yN=Nr();_h.exports=/web0s(?!.*chrome)/i.test(yN)});var Fh=i((qW,Lh)=>{"use strict";var Qr=_(),gN=Ch(),Ah=V(),Zo=Qo().set,bN=Xo(),qN=Go(),xN=Ph(),wN=Rh(),eu=Nt(),Nh=Qr.MutationObserver||Qr.WebKitMutationObserver,Mh=Qr.document,jh=Qr.process,ia=Qr.Promise,nu=gN("queueMicrotask"),Jr,ru,tu,oa,$h;nu||($t=new bN,Lt=function(){var e,r;for(eu&&(e=jh.domain)&&e.exit();r=$t.get();)try{r()}catch(t){throw $t.head&&Jr(),t}e&&e.enter()},!qN&&!eu&&!wN&&Nh&&Mh?(ru=!0,tu=Mh.createTextNode(""),new Nh(Lt).observe(tu,{characterData:!0}),Jr=function(){tu.data=ru=!ru}):!xN&&ia&&ia.resolve?(oa=ia.resolve(void 0),oa.constructor=ia,$h=Ah(oa.then,oa),Jr=function(){$h(Lt)}):eu?Jr=function(){jh.nextTick(Lt)}:(Zo=Ah(Zo,Qr),Jr=function(){Zo(Lt)}),nu=function(e){$t.head||Jr(),$t.add(e)});var $t,Lt;Lh.exports=nu});var Bh=i((xW,Dh)=>{"use strict";Dh.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var wr=i((wW,Gh)=>{"use strict";Gh.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var Sr=i((SW,Uh)=>{"use strict";var SN=_();Uh.exports=SN.Promise});var Xr=i((TW,zh)=>{"use strict";var TN=_(),Ft=Sr(),ON=N(),CN=li(),EN=yi(),kN=R(),Hh=Lo(),IN=Z(),au=Mr(),Wh=Ft&&Ft.prototype,PN=kN("species"),iu=!1,Kh=ON(TN.PromiseRejectionEvent),_N=CN("Promise",function(){var e=EN(Ft),r=e!==String(Ft);if(!r&&au===66||IN&&!(Wh.catch&&Wh.finally))return!0;if(!au||au<51||!/native code/.test(e)){var t=new Ft(function(o){o(1)}),n=function(o){o(function(){},function(){})},a=t.constructor={};if(a[PN]=n,iu=t.then(function(){})instanceof n,!iu)return!0}return!r&&(Hh==="BROWSER"||Hh==="DENO")&&!Kh});zh.exports={CONSTRUCTOR:_N,REJECTION_EVENT:Kh,SUBCLASSING:iu}});var Te=i((OW,Yh)=>{"use strict";var Vh=D(),RN=TypeError,AN=function(e){var r,t;this.promise=new e(function(n,a){if(r!==void 0||t!==void 0)throw new RN("Bad Promise constructor");r=n,t=a}),this.resolve=Vh(r),this.reject=Vh(t)};Yh.exports.f=function(e){return new AN(e)}});var my=i(()=>{"use strict";var NN=x(),MN=Z(),la=Nt(),er=_(),jN=z(),tt=B(),Jh=Pe(),Qh=xt(),$N=Re(),LN=Fo(),FN=D(),ca=N(),DN=$(),BN=aa(),GN=Bo(),ty=Qo().set,lu=Fh(),UN=Bh(),HN=wr(),WN=Xo(),ny=Je(),fa=Sr(),fu=Xr(),ay=Te(),va="Promise",iy=fu.CONSTRUCTOR,KN=fu.REJECTION_EVENT,zN=fu.SUBCLASSING,ou=ny.getterFor(va),VN=ny.set,Zr=fa&&fa.prototype,Tr=fa,ua=Zr,oy=er.TypeError,uu=er.document,vu=er.process,su=ay.f,YN=su,JN=!!(uu&&uu.createEvent&&er.dispatchEvent),uy="unhandledrejection",QN="rejectionhandled",Xh=0,sy=1,XN=2,pu=1,cy=2,sa,Zh,ly,ey,fy=function(e){var r;return DN(e)&&ca(r=e.then)?r:!1},vy=function(e,r){var t=r.value,n=r.state===sy,a=n?e.ok:e.fail,o=e.resolve,u=e.reject,c=e.domain,s,l,f;try{a?(n||(r.rejection===cy&&eM(r),r.rejection=pu),a===!0?s=t:(c&&c.enter(),s=a(t),c&&(c.exit(),f=!0)),s===e.promise?u(new oy("Promise-chain cycle")):(l=fy(s))?tt(l,s,o,u):o(s)):u(t)}catch(v){c&&!f&&c.exit(),u(v)}},py=function(e,r){e.notified||(e.notified=!0,lu(function(){for(var t=e.reactions,n;n=t.get();)vy(n,e);e.notified=!1,r&&!e.rejection&&ZN(e)}))},dy=function(e,r,t){var n,a;JN?(n=uu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),er.dispatchEvent(n)):n={promise:r,reason:t},!KN&&(a=er["on"+e])?a(n):e===uy&&UN("Unhandled promise rejection",t)},ZN=function(e){tt(ty,er,function(){var r=e.facade,t=e.value,n=ry(e),a;if(n&&(a=HN(function(){la?vu.emit("unhandledRejection",t,r):dy(uy,r,t)}),e.rejection=la||ry(e)?cy:pu,a.error))throw a.value})},ry=function(e){return e.rejection!==pu&&!e.parent},eM=function(e){tt(ty,er,function(){var r=e.facade;la?vu.emit("rejectionHandled",r):dy(QN,r,e.value)})},et=function(e,r,t){return function(n){e(r,n,t)}},rt=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=XN,py(e,!0))},cu=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new oy("Promise can't be resolved itself");var n=fy(r);n?lu(function(){var a={done:!1};try{tt(n,r,et(cu,a,e),et(rt,a,e))}catch(o){rt(a,o,e)}}):(e.value=r,e.state=sy,py(e,!1))}catch(a){rt({done:!1},a,e)}}};if(iy&&(Tr=function(r){BN(this,ua),FN(r),tt(sa,this);var t=ou(this);try{r(et(cu,t),et(rt,t))}catch(n){rt(t,n)}},ua=Tr.prototype,sa=function(r){VN(this,{type:va,done:!1,notified:!1,parent:!1,reactions:new WN,rejection:!1,state:Xh,value:null})},sa.prototype=Jh(ua,"then",function(r,t){var n=ou(this),a=su(GN(this,Tr));return n.parent=!0,a.ok=ca(r)?r:!0,a.fail=ca(t)&&t,a.domain=la?vu.domain:void 0,n.state===Xh?n.reactions.add(a):lu(function(){vy(a,n)}),a.promise}),Zh=function(){var e=new sa,r=ou(e);this.promise=e,this.resolve=et(cu,r),this.reject=et(rt,r)},ay.f=su=function(e){return e===Tr||e===ly?new Zh(e):YN(e)},!MN&&ca(fa)&&Zr!==Object.prototype)){ey=Zr.then,zN||Jh(Zr,"then",function(r,t){var n=this;return new Tr(function(a,o){tt(ey,n,a,o)}).then(r,t)},{unsafe:!0});try{delete Zr.constructor}catch{}Qh&&Qh(Zr,ua)}NN({global:!0,constructor:!0,wrap:!0,forced:iy},{Promise:Tr});ly=jN.Promise;$N(Tr,va,!1,!0);LN(va)});var Dt=i((kW,hy)=>{"use strict";var rM=Sr(),tM=Vi(),nM=Xr().CONSTRUCTOR;hy.exports=nM||!tM(function(e){rM.all(e).then(void 0,function(){})})});var yy=i(()=>{"use strict";var aM=x(),iM=B(),oM=D(),uM=Te(),sM=wr(),cM=ve(),lM=Dt();aM({target:"Promise",stat:!0,forced:lM},{all:function(r){var t=this,n=uM.f(t),a=n.resolve,o=n.reject,u=sM(function(){var c=oM(t.resolve),s=[],l=0,f=1;cM(r,function(v){var p=l++,d=!1;f++,iM(c,t,v).then(function(h){d||(d=!0,s[p]=h,--f||a(s))},o)}),--f||a(s)});return u.error&&o(u.value),n.promise}})});var by=i(()=>{"use strict";var fM=x(),vM=Z(),pM=Xr().CONSTRUCTOR,mu=Sr(),dM=H(),mM=N(),hM=Pe(),gy=mu&&mu.prototype;fM({target:"Promise",proto:!0,forced:pM,real:!0},{catch:function(e){return this.then(void 0,e)}});!vM&&mM(mu)&&(du=dM("Promise").prototype.catch,gy.catch!==du&&hM(gy,"catch",du,{unsafe:!0}));var du});var qy=i(()=>{"use strict";var yM=x(),gM=B(),bM=D(),qM=Te(),xM=wr(),wM=ve(),SM=Dt();yM({target:"Promise",stat:!0,forced:SM},{race:function(r){var t=this,n=qM.f(t),a=n.reject,o=xM(function(){var u=bM(t.resolve);wM(r,function(c){gM(u,t,c).then(n.resolve,a)})});return o.error&&a(o.value),n.promise}})});var xy=i(()=>{"use strict";var TM=x(),OM=Te(),CM=Xr().CONSTRUCTOR;TM({target:"Promise",stat:!0,forced:CM},{reject:function(r){var t=OM.f(this),n=t.reject;return n(r),t.promise}})});var hu=i(($W,wy)=>{"use strict";var EM=Q(),kM=$(),IM=Te();wy.exports=function(e,r){if(EM(e),kM(r)&&r.constructor===e)return r;var t=IM.f(e),n=t.resolve;return n(r),t.promise}});var Oy=i(()=>{"use strict";var PM=x(),_M=H(),Sy=Z(),RM=Sr(),Ty=Xr().CONSTRUCTOR,AM=hu(),NM=_M("Promise"),MM=Sy&&!Ty;PM({target:"Promise",stat:!0,forced:Sy||Ty},{resolve:function(r){return AM(MM&&this===NM?RM:this,r)}})});var Cy=i(()=>{"use strict";my();yy();by();qy();xy();Oy()});var yu=i(()=>{"use strict";var jM=x(),$M=B(),LM=D(),FM=Te(),DM=wr(),BM=ve(),GM=Dt();jM({target:"Promise",stat:!0,forced:GM},{allSettled:function(r){var t=this,n=FM.f(t),a=n.resolve,o=n.reject,u=DM(function(){var c=LM(t.resolve),s=[],l=0,f=1;BM(r,function(v){var p=l++,d=!1;f++,$M(c,t,v).then(function(h){d||(d=!0,s[p]={status:"fulfilled",value:h},--f||a(s))},function(h){d||(d=!0,s[p]={status:"rejected",reason:h},--f||a(s))})}),--f||a(s)});return u.error&&o(u.value),n.promise}})});var gu=i(()=>{"use strict";var UM=x(),HM=B(),WM=D(),KM=H(),zM=Te(),VM=wr(),YM=ve(),JM=Dt(),Ey="No one promise resolved";UM({target:"Promise",stat:!0,forced:JM},{any:function(r){var t=this,n=KM("AggregateError"),a=zM.f(t),o=a.resolve,u=a.reject,c=VM(function(){var s=WM(t.resolve),l=[],f=0,v=1,p=!1;YM(r,function(d){var h=f++,m=!1;v++,HM(s,t,d).then(function(y){m||p||(p=!0,o(y))},function(y){m||p||(m=!0,l[h]=y,--v||u(new n(l,Ey)))})}),--v||u(new n(l,Ey))});return c.error&&u(c.value),a.promise}})});var qu=i(()=>{"use strict";var QM=x(),XM=_(),ZM=Ar(),ej=vr(),rj=Te(),tj=D(),Iy=wr(),bu=XM.Promise,ky=!1,nj=!bu||!bu.try||Iy(function(){bu.try(function(e){ky=e===8},8)}).error||!ky;QM({target:"Promise",stat:!0,forced:nj},{try:function(e){var r=arguments.length>1?ej(arguments,1):[],t=rj.f(this),n=Iy(function(){return ZM(tj(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var xu=i(()=>{"use strict";var aj=x(),ij=Te();aj({target:"Promise",stat:!0},{withResolvers:function(){var r=ij.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var Ay=i(()=>{"use strict";var oj=x(),uj=Z(),pa=Sr(),sj=P(),_y=H(),Ry=N(),cj=Bo(),Py=hu(),lj=Pe(),Su=pa&&pa.prototype,fj=!!pa&&sj(function(){Su.finally.call({then:function(){}},function(){})});oj({target:"Promise",proto:!0,real:!0,forced:fj},{finally:function(e){var r=cj(this,_y("Promise")),t=Ry(e);return this.then(t?function(n){return Py(r,e()).then(function(){return n})}:e,t?function(n){return Py(r,e()).then(function(){throw n})}:e)}});!uj&&Ry(pa)&&(wu=_y("Promise").prototype.finally,Su.finally!==wu&&lj(Su,"finally",wu,{unsafe:!0}));var wu});var My=i((XW,Ny)=>{"use strict";$o();br();Ct();Cy();yu();gu();qu();xu();Ay();mr();var vj=z();Ny.exports=vj.Promise});var $y=i((ZW,jy)=>{"use strict";var pj=My();qr();jy.exports=pj});var Ly=i(()=>{"use strict";qu()});var Fy=i(()=>{"use strict";xu()});var By=i((aK,Dy)=>{"use strict";var dj=$y();Ly();Fy();Dy.exports=dj});var Gy=i(()=>{"use strict";$o()});var Uy=i(()=>{"use strict";yu()});var Hy=i(()=>{"use strict";gu()});var Ky=i((fK,Wy)=>{"use strict";var mj=By();Gy();Uy();Hy();Wy.exports=mj});var nt=i((vK,zy)=>{"use strict";zy.exports=Ky()});var Jy=i((yK,Yy)=>{"use strict";wo();var hj=Wr();Yy.exports=hj.f("asyncIterator")});var Xy=i((gK,Qy)=>{"use strict";var yj=Jy();Qy.exports=yj});var eg=i((bK,Zy)=>{"use strict";var gj=Xy();Zy.exports=gj});var tg=i((qK,rg)=>{"use strict";var bj=eg();rg.exports=bj});var da=i((xK,ng)=>{"use strict";ng.exports=tg()});var ug=i(()=>{"use strict";var qj=x(),xj=P(),wj=re(),og=qt(),Sj=Li(),Tj=xj(function(){og(1)});qj({target:"Object",stat:!0,forced:Tj,sham:!Sj},{getPrototypeOf:function(r){return og(wj(r))}})});var cg=i((CK,sg)=>{"use strict";ug();var Oj=z();sg.exports=Oj.Object.getPrototypeOf});var fg=i((EK,lg)=>{"use strict";var Cj=cg();lg.exports=Cj});var pg=i((kK,vg)=>{"use strict";var Ej=fg();vg.exports=Ej});var mg=i((IK,dg)=>{"use strict";var kj=pg();dg.exports=kj});var ma=i((PK,hg)=>{"use strict";hg.exports=mg()});var gg=i(()=>{"use strict";var Ij=x(),Pj=A(),_j=Ie(),Rj=Pj([].reverse),yg=[1,2];Ij({target:"Array",proto:!0,forced:String(yg)===String(yg.reverse())},{reverse:function(){return _j(this)&&(this.length=this.length),Rj(this)}})});var qg=i((AK,bg)=>{"use strict";gg();var Aj=oe();bg.exports=Aj("Array","reverse")});var wg=i((NK,xg)=>{"use strict";var Nj=G(),Mj=qg(),Cu=Array.prototype;xg.exports=function(e){var r=e.reverse;return e===Cu||Nj(Cu,e)&&r===Cu.reverse?Mj:r}});var Tg=i((MK,Sg)=>{"use strict";var jj=wg();Sg.exports=jj});var Cg=i((jK,Og)=>{"use strict";var $j=Tg();Og.exports=$j});var kg=i(($K,Eg)=>{"use strict";var Lj=Cg();Eg.exports=Lj});var Pg=i((LK,Ig)=>{"use strict";Ig.exports=kg()});var Eu=i((FK,Ut)=>{function Fj(e,r){this.v=e,this.k=r}Ut.exports=Fj,Ut.exports.__esModule=!0,Ut.exports.default=Ut.exports});var _g=i(()=>{"use strict";var Dj=x(),Bj=U(),Gj=Qe();Dj({target:"Object",stat:!0,sham:!Bj},{create:Gj})});var Ag=i((GK,Rg)=>{"use strict";_g();var Uj=z(),Hj=Uj.Object;Rg.exports=function(r,t){return Hj.create(r,t)}});var Mg=i((UK,Ng)=>{"use strict";var Wj=Ag();Ng.exports=Wj});var $g=i((HK,jg)=>{"use strict";var Kj=Mg();jg.exports=Kj});var Fg=i((WK,Lg)=>{"use strict";var zj=$g();Lg.exports=zj});var ha=i((KK,Dg)=>{"use strict";Dg.exports=Fg()});var Iu=i((zK,Hg)=>{"use strict";var Gg=A(),Vj=D(),Yj=$(),Jj=W(),Bg=vr(),Qj=Rr(),Ug=Function,Xj=Gg([].concat),Zj=Gg([].join),ku={},e$=function(e,r,t){if(!Jj(ku,r)){for(var n=[],a=0;a<r;a++)n[a]="a["+a+"]";ku[r]=Ug("C,a","return new C("+Zj(n,",")+")")}return ku[r](e,t)};Hg.exports=Qj?Ug.bind:function(r){var t=Vj(this),n=t.prototype,a=Bg(arguments,1),o=function(){var c=Xj(a,Bg(arguments));return this instanceof o?e$(t,c.length,c):t.apply(r,c)};return Yj(n)&&(o.prototype=n),o}});var Kg=i(()=>{"use strict";var r$=x(),Wg=Iu();r$({target:"Function",proto:!0,forced:Function.bind!==Wg},{bind:Wg})});var Vg=i((JK,zg)=>{"use strict";Kg();var t$=oe();zg.exports=t$("Function","bind")});var Jg=i((QK,Yg)=>{"use strict";var n$=G(),a$=Vg(),Pu=Function.prototype;Yg.exports=function(e){var r=e.bind;return e===Pu||n$(Pu,e)&&r===Pu.bind?a$:r}});var Xg=i((XK,Qg)=>{"use strict";var i$=Jg();Qg.exports=i$});var eb=i((ZK,Zg)=>{"use strict";var o$=Xg();Zg.exports=o$});var tb=i((ez,rb)=>{"use strict";var u$=eb();rb.exports=u$});var Ht=i((rz,nb)=>{"use strict";nb.exports=tb()});var ab=i(()=>{"use strict";var s$=x(),c$=xt();s$({target:"Object",stat:!0},{setPrototypeOf:c$})});var ob=i((az,ib)=>{"use strict";ab();var l$=z();ib.exports=l$.Object.setPrototypeOf});var sb=i((iz,ub)=>{"use strict";var f$=ob();ub.exports=f$});var lb=i((oz,cb)=>{"use strict";var v$=sb();cb.exports=v$});var vb=i((uz,fb)=>{"use strict";var p$=lb();fb.exports=p$});var ya=i((sz,pb)=>{"use strict";pb.exports=vb()});var mb=i(()=>{"use strict";var d$=x(),m$=U(),db=te().f;d$({target:"Object",stat:!0,forced:Object.defineProperty!==db,sham:!m$},{defineProperty:db})});var gb=i((fz,yb)=>{"use strict";mb();var h$=z(),hb=h$.Object,y$=yb.exports=function(r,t,n){return hb.defineProperty(r,t,n)};hb.defineProperty.sham&&(y$.sham=!0)});var qb=i((vz,bb)=>{"use strict";var g$=gb();bb.exports=g$});var wb=i((pz,xb)=>{"use strict";var b$=qb();xb.exports=b$});var Tb=i((dz,Sb)=>{"use strict";var q$=wb();Sb.exports=q$});var Wt=i((mz,Ob)=>{"use strict";Ob.exports=Tb()});var _u=i((hz,Ne)=>{var x$=Wt();function ga(e,r,t,n){var a=x$;try{a({},"",{})}catch{a=0}Ne.exports=ga=function(u,c,s,l){function f(v,p){ga(u,v,function(d){return this._invoke(v,p,d)})}c?a?a(u,c,{value:s,enumerable:!l,configurable:!l,writable:!l}):u[c]=s:(f("next",0),f("throw",1),f("return",2))},Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports,ga(e,r,t,n)}Ne.exports=ga,Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports});var Au=i((yz,Me)=>{var Cb=Se(),Ru=ha(),w$=Ht(),S$=ma(),Eb=ya(),Ce=_u();function kb(){var e,r,t=typeof Cb=="function"?Cb:{},n=t.iterator||"@@iterator",a=t.toStringTag||"@@toStringTag";function o(d,h,m,y){var b=h&&h.prototype instanceof c?h:c,q=Ru(b.prototype);return Ce(q,"_invoke",function(k,E,w){var T,S,C,j=0,be=w||[],I=!1,ee={p:0,n:0,v:e,a:qe,f:w$(qe).call(qe,e,4),d:function(F,de){return T=F,S=0,C=e,ee.n=de,u}};function qe(J,F){for(S=J,C=F,r=0;!I&&j&&!de&&r<be.length;r++){var de,O=be[r],_r=ee.p,We=O[2];J>3?(de=We===F)&&(C=O[(S=O[4])?5:(S=3,3)],O[4]=O[5]=e):O[0]<=_r&&((de=J<2&&_r<O[1])?(S=0,ee.v=F,ee.n=O[1]):_r<We&&(de=J<3||O[0]>F||F>We)&&(O[4]=J,O[5]=F,ee.n=We,S=0))}if(de||J>1)return u;throw I=!0,F}return function(J,F,de){if(j>1)throw TypeError("Generator is already running");for(I&&F===1&&qe(F,de),S=F,C=de;(r=S<2?e:C)||!I;){T||(S?S<3?(S>1&&(ee.n=-1),qe(S,C)):ee.n=C:ee.v=C);try{if(j=2,T){if(S||(J="next"),r=T[J]){if(!(r=r.call(T,C)))throw TypeError("iterator result is not an object");if(!r.done)return r;C=r.value,S<2&&(S=0)}else S===1&&(r=T.return)&&r.call(T),S<2&&(C=TypeError("The iterator does not provide a '"+J+"' method"),S=1);T=e}else if((r=(I=ee.n<0)?C:k.call(E,ee))!==u)break}catch(O){T=e,S=1,C=O}finally{j=1}}return{value:r,done:I}}}(d,m,y),!0),q}var u={};function c(){}function s(){}function l(){}r=S$;var f=[][n]?r(r([][n]())):(Ce(r={},n,function(){return this}),r),v=l.prototype=c.prototype=Ru(f);function p(d){return Eb?Eb(d,l):(d.__proto__=l,Ce(d,a,"GeneratorFunction")),d.prototype=Ru(v),d}return s.prototype=l,Ce(v,"constructor",l),Ce(l,"constructor",s),s.displayName="GeneratorFunction",Ce(l,a,"GeneratorFunction"),Ce(v),Ce(v,a,"Generator"),Ce(v,n,function(){return this}),Ce(v,"toString",function(){return"[object Generator]"}),(Me.exports=kb=function(){return{w:o,m:p}},Me.exports.__esModule=!0,Me.exports.default=Me.exports)()}Me.exports=kb,Me.exports.__esModule=!0,Me.exports.default=Me.exports});var ju=i((gz,Kt)=>{var T$=Se(),O$=da(),C$=Eu(),Nu=_u();function Mu(e,r){function t(a,o,u,c){try{var s=e[a](o),l=s.value;return l instanceof C$?r.resolve(l.v).then(function(f){t("next",f,u,c)},function(f){t("throw",f,u,c)}):r.resolve(l).then(function(f){s.value=f,u(s)},function(f){return t("throw",f,u,c)})}catch(f){c(f)}}var n;this.next||(Nu(Mu.prototype),Nu(Mu.prototype,typeof T$=="function"&&O$||"@asyncIterator",function(){return this})),Nu(this,"_invoke",function(a,o,u){function c(){return new r(function(s,l){t(a,u,s,l)})}return n=n?n.then(c,c):c()},!0)}Kt.exports=Mu,Kt.exports.__esModule=!0,Kt.exports.default=Kt.exports});var $u=i((bz,zt)=>{var E$=nt(),k$=Au(),I$=ju();function P$(e,r,t,n,a){return new I$(k$().w(e,r,t,n),a||E$)}zt.exports=P$,zt.exports.__esModule=!0,zt.exports.default=zt.exports});var Ib=i((qz,Vt)=>{var _$=$u();function R$(e,r,t,n,a){var o=_$(e,r,t,n,a);return o.next().then(function(u){return u.done?u.value:o.next()})}Vt.exports=R$,Vt.exports.__esModule=!0,Vt.exports.default=Vt.exports});var Rb=i((xz,_b)=>{"use strict";var Pb=Ve(),A$=TypeError;_b.exports=function(e,r){if(!delete e[r])throw new A$("Cannot delete property "+Pb(r)+" of "+Pb(e))}});var Ab=i(()=>{"use strict";var N$=x(),M$=re(),j$=le(),$$=Gr(),L$=Rb(),F$=Ot(),D$=[].unshift(0)!==1,B$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},G$=D$||!B$();N$({target:"Array",proto:!0,arity:1,forced:G$},{unshift:function(r){var t=M$(this),n=j$(t),a=arguments.length;if(a){F$(n+a);for(var o=n;o--;){var u=o+a;o in t?t[u]=t[o]:L$(t,u)}for(var c=0;c<a;c++)t[c]=arguments[c]}return $$(t,n+a)}})});var Mb=i((Tz,Nb)=>{"use strict";Ab();var U$=oe();Nb.exports=U$("Array","unshift")});var $b=i((Oz,jb)=>{"use strict";var H$=G(),W$=Mb(),Lu=Array.prototype;jb.exports=function(e){var r=e.unshift;return e===Lu||H$(Lu,e)&&r===Lu.unshift?W$:r}});var Fb=i((Cz,Lb)=>{"use strict";var K$=$b();Lb.exports=K$});var Bb=i((Ez,Db)=>{"use strict";var z$=Fb();Db.exports=z$});var Ub=i((kz,Gb)=>{"use strict";var V$=Bb();Gb.exports=V$});var Wb=i((Iz,Hb)=>{"use strict";Hb.exports=Ub()});var Kb=i((Pz,Yt)=>{var Y$=Wb();function J$(e){var r=Object(e),t=[];for(var n in r)Y$(t).call(t,n);return function a(){for(;t.length;)if((n=t.pop())in r)return a.value=n,a.done=!1,a;return a.done=!0,a}}Yt.exports=J$,Yt.exports.__esModule=!0,Yt.exports.default=Yt.exports});var Vb=i((_z,zb)=>{"use strict";br();Ct();mr();To();var Q$=Wr();zb.exports=Q$.f("iterator")});var Jb=i((Rz,Yb)=>{"use strict";var X$=Vb();qr();Yb.exports=X$});var Xb=i((Az,Qb)=>{"use strict";var Z$=Jb();Qb.exports=Z$});var eq=i((Nz,Zb)=>{"use strict";var eL=Xb();Zb.exports=eL});var Jt=i((Mz,rq)=>{"use strict";rq.exports=eq()});var tq=i((jz,je)=>{var ba=Se(),rL=Jt();function Fu(e){"@babel/helpers - typeof";return je.exports=Fu=typeof ba=="function"&&typeof rL=="symbol"?function(r){return typeof r}:function(r){return r&&typeof ba=="function"&&r.constructor===ba&&r!==ba.prototype?"symbol":typeof r},je.exports.__esModule=!0,je.exports.default=je.exports,Fu(e)}je.exports=Fu,je.exports.__esModule=!0,je.exports.default=je.exports});var nq=i(($z,Qt)=>{var tL=tq().default,nL=Se(),aL=Jt();function iL(e){if(e!=null){var r=e[typeof nL=="function"&&aL||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(tL(e)+" is not iterable")}Qt.exports=iL,Qt.exports.__esModule=!0,Qt.exports.default=Qt.exports});var oq=i((Lz,$e)=>{var aq=ma(),oL=Pg(),uL=Eu(),sL=Au(),cL=Ib(),lL=$u(),fL=ju(),vL=Kb(),iq=nq();function Du(){"use strict";var e=sL(),r=e.m(Du),t=(aq?aq(r):r.__proto__).constructor;function n(u){var c=typeof u=="function"&&u.constructor;return!!c&&(c===t||(c.displayName||c.name)==="GeneratorFunction")}var a={throw:1,return:2,break:3,continue:3};function o(u){var c,s;return function(l){c||(c={stop:function(){return s(l.a,2)},catch:function(){return l.v},abrupt:function(v,p){return s(l.a,a[v],p)},delegateYield:function(v,p,d){return c.resultName=p,s(l.d,iq(v),d)},finish:function(v){return s(l.f,v)}},s=function(v,p,d){l.p=c.prev,l.n=c.next;try{return v(p,d)}finally{c.next=l.n}}),c.resultName&&(c[c.resultName]=l.v,c.resultName=void 0),c.sent=l.v,c.next=l.n;try{return u.call(this,c)}finally{l.p=c.prev,l.n=c.next}}}return($e.exports=Du=function(){return{wrap:function(s,l,f,v){return e.w(o(s),l,f,v&&oL(v).call(v))},isGeneratorFunction:n,mark:e.m,awrap:function(s,l){return new uL(s,l)},AsyncIterator:fL,async:function(s,l,f,v,p){return(n(l)?lL:cL)(o(s),l,f,v,p)},keys:vL,values:iq}},$e.exports.__esModule=!0,$e.exports.default=$e.exports)()}$e.exports=Du,$e.exports.__esModule=!0,$e.exports.default=$e.exports});var se=i((Fz,uq)=>{var qa=oq()();uq.exports=qa;try{regeneratorRuntime=qa}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=qa:Function("r","regeneratorRuntime = r")(qa)}});var Bu=i((wa,cq)=>{"use strict";Object.defineProperty(wa,"__esModule",{value:!0});var xa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},sq=function(){function e(r,t){var n=[],a=!0,o=!1,u=void 0;try{for(var c=r[Symbol.iterator](),s;!(a=(s=c.next()).done)&&(n.push(s.value),!(t&&n.length===t));a=!0);}catch(l){o=!0,u=l}finally{try{!a&&c.return&&c.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();wa.default=pL;function pL(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(a){return a.type==="tag"||a.type==="script"||a.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var a=this.attribs,o=Object.keys(a),u=o.reduce(function(c,s,l){return c[l]={name:s,value:a[s]},c},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var a=[];return tr(this.childTags,function(o){(o.name===n||n==="*")&&a.push(o)}),a}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var a=n.trim().replace(/\s+/g," ").split(" "),o=[];return tr([this],function(u){var c=u.attribs.class;c&&a.every(function(s){return c.indexOf(s)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var a=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=dL(n),u=o.shift(),c=o.length;return u(this).filter(function(s){for(var l=0;l<c;){if(s=o[l](s,a),!s)return!1;l+=1}return!0})}),t.contains||(t.contains=function(n){var a=!1;return tr([this],function(o,u){o===n&&(a=!0,u())}),a}),!0}function dL(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,a=r.split(":"),o=sq(a,2),u=o[0],c=o[1],s=null,l=null;if(function(){switch(!0){case/>/.test(u):l=function(w){return function(T){return T(w.parent)&&w.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");s=function(w){var T=w.attribs.class;return T&&h.every(function(S){return T.indexOf(S)>-1})},l=function(w,T){return n?w.getElementsByClassName(h.join(" ")):typeof w=="function"?w(s):Xt(w,T,s)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),y=sq(m,2),b=y[0],q=y[1];s=function(w){var T=Object.keys(w.attribs).indexOf(b)>-1;return!!(T&&(!q||w.attribs[b]===q))},l=function(w,T){if(n){var S=function(){var C=[];return tr([w],function(j){s(j)&&C.push(j)}),{v:C}}();if((typeof S>"u"?"undefined":xa(S))==="object")return S.v}return typeof w=="function"?w(s):Xt(w,T,s)};break;case/^#/.test(u):var k=u.substr(1);s=function(w){return w.attribs.id===k},l=function(w,T){if(n){var S=function(){var C=[];return tr([w],function(j,be){s(j)&&(C.push(j),be())}),{v:C}}();if((typeof S>"u"?"undefined":xa(S))==="object")return S.v}return typeof w=="function"?w(s):Xt(w,T,s)};break;case/\*/.test(u):s=function(w){return!0},l=function(w,T){if(n){var S=function(){var C=[];return tr([w],function(j){return C.push(j)}),{v:C}}();if((typeof S>"u"?"undefined":xa(S))==="object")return S.v}return typeof w=="function"?w(s):Xt(w,T,s)};break;default:s=function(w){return w.name===u},l=function(w,T){if(n){var S=function(){var C=[];return tr([w],function(j){s(j)&&C.push(j)}),{v:C}}();if((typeof S>"u"?"undefined":xa(S))==="object")return S.v}return typeof w=="function"?w(s):Xt(w,T,s)}}}(),!c)return l;var f=c.match(/-(child|type)\((\d+)\)$/),v=f[1],p=parseInt(f[2],10)-1,d=function(m){if(m){var y=m.parent.childTags;v==="type"&&(y=y.filter(s));var b=y.findIndex(function(q){return q===m});if(b===p)return!0}return!1};return function(m){var y=l(m);return n?y.reduce(function(b,q){return d(q)&&b.push(q),b},[]):d(y)&&y}})}function tr(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&tr(t.childTags,r)})}function Xt(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}cq.exports=wa.default});var Ta=i(Sa=>{"use strict";Object.defineProperty(Sa,"__esModule",{value:!0});Sa.convertNodeList=mL;Sa.escapeValue=hL;function mL(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function hL(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var bq=i((Oa,gq)=>{"use strict";Object.defineProperty(Oa,"__esModule",{value:!0});Oa.default=yL;var pq=Ta(),lq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function yL(e,r){var t=r.root,n=t===void 0?document:t,a=r.skip,o=a===void 0?null:a,u=r.priority,c=u===void 0?["id","class","href","src"]:u,s=r.ignore,l=s===void 0?{}:s,f=[],v=e,p=f.length,d=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(b){return typeof b!="function"?function(q){return q===b}:b}),m=function(q){return o&&h.some(function(k){return k(q)})};for(Object.keys(l).forEach(function(b){b==="class"&&(d=!0);var q=l[b];typeof q!="function"&&(typeof q=="number"&&(q=q.toString()),typeof q=="string"&&(q=new RegExp((0,pq.escapeValue)(q).replace(/\\/g,"\\\\"))),typeof q=="boolean"&&(q=q?/(?:)/:/.^/),l[b]=function(k,E){return q.test(E)})}),d&&function(){var b=l.attribute;l.attribute=function(q,k,E){return l.class(k)||b&&b(q,k,E)}}();v!==n;){if(m(v)!==!0){if(fq(c,v,l,f,n)||vq(v,l,f,n))break;fq(c,v,l,f),f.length===p&&vq(v,l,f),f.length===p&&gL(c,v,l,f)}v=v.parentNode,p=f.length}if(v===n){var y=hq(c,v,l);f.unshift(y)}return f.join(" ")}function fq(e,r,t,n){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=dq(e,r,t);if(o){var u=a.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function dq(e,r,t){for(var n=r.attributes,a=Object.keys(n).sort(function(m,y){var b=e.indexOf(n[m].name),q=e.indexOf(n[y].name);return q===-1?b===-1?0:-1:b-q}),o=0,u=a.length;o<u;o++){var c=a[o],s=n[c],l=s.name,f=(0,pq.escapeValue)(s.value),v=t[l]||t.attribute,p=lq[l]||lq.attribute;if(!yq(v,l,f,p)){var d="["+l+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(l==="id"&&(d="#"+f),l==="class")){var h=f.trim().replace(/\s+/g,".");d="."+h}return d}}return null}function vq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,a=mq(e,r);if(a){var o=n.getElementsByTagName(a);if(o.length===1)return t.unshift(a),!0}return!1}function mq(e,r){var t=e.tagName.toLowerCase();return yq(r.tag,null,t)?null:t}function gL(e,r,t,n){for(var a=r.parentNode,o=a.childTags||a.children,u=0,c=o.length;u<c;u++){var s=o[u];if(s===r){var l=hq(e,s,t);if(!l)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,s,t,l);var f="> "+l+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function hq(e,r,t){var n=dq(e,r,t);return n||(n=mq(r,t)),n}function yq(e,r,t,n){if(!t)return!0;var a=e||n;return a?a(r,t,n):!1}gq.exports=Oa.default});var Gu=i((Ea,qq)=>{"use strict";Object.defineProperty(Ea,"__esModule",{value:!0});Ea.default=SL;var bL=Bu(),qL=wL(bL),xL=Ta();function wL(e){return e&&e.__esModule?e:{default:e}}function SL(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,xL.convertNodeList)(r):[r]),!r.length||r.some(function(v){return v.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,qL.default)(r[0],t),a=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(a.length<2)return Ca("",e,"",r);for(var o=[a.pop()];a.length>1;){var u=a.pop(),c=a.join(" "),s=o.join(" "),l=c+" "+s,f=document.querySelectorAll(l);f.length!==r.length&&o.unshift(Ca(c,u,s,r))}return o.unshift(a[0]),a=o,a[0]=Ca("",a[0],a.slice(1).join(" "),r),a[a.length-1]=Ca(a.slice(0,-1).join(" "),a[a.length-1],"",r),n&&delete global.document,a.join(" ").replace(/>/g,"> ").trim()}function Ca(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var a=r.replace(/=.*$/,"]"),o=""+e+a+t,u=document.querySelectorAll(o);if(at(u,n))r=a;else for(var c=document.querySelectorAll(""+e+a),s=function(){var E=c[l];if(n.some(function(T){return E.contains(T)})){var w=E.tagName.toLowerCase();return o=""+e+w+t,u=document.querySelectorAll(o),at(u,n)&&(r=w),"break"}},l=0,f=c.length;l<f;l++){var o,u,v=s();if(v==="break")break}}if(/>/.test(r)){var p=r.replace(/>/,""),o=""+e+p+t,u=document.querySelectorAll(o);at(u,n)&&(r=p)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);at(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(k){return"."+k}).sort(function(k,E){return k.length-E.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);at(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var y=document.querySelectorAll(""+e+r),b=function(){var E=y[l];if(n.some(function(T){return E.contains(T)})){var w=E.tagName.toLowerCase();return o=""+e+w+t,u=document.querySelectorAll(o),at(u,n)&&(r=w),"break"}},l=0,f=y.length;l<f;l++){var o,u,q=b();if(q==="break")break}}return r}function at(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var a=0;a<t;a++)if(e[a]===n)return!0;return!1})}qq.exports=Ea.default});var Uu=i(ka=>{"use strict";Object.defineProperty(ka,"__esModule",{value:!0});ka.getCommonAncestor=TL;ka.getCommonProperties=OL;function TL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,a=[];e.forEach(function(v,p){for(var d=[];v!==n;)v=v.parentNode,d.unshift(v);a[p]=d}),a.sort(function(v,p){return v.length-p.length});for(var o=a.shift(),u=null,c=function(){var p=o[s],d=a.some(function(h){return!h.some(function(m){return m===p})});if(d)return"break";u=p},s=0,l=o.length;s<l;s++){var f=c();if(f==="break")break}return u}function OL(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,a=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(s){return u.some(function(l){return l===s})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(a!==void 0&&function(){var s=t.attributes,l=Object.keys(s).reduce(function(p,d){var h=s[d],m=h.name;return h&&m!=="class"&&(p[m]=h.value),p},{}),f=Object.keys(l),v=Object.keys(a);f.length?v.length?(a=v.reduce(function(p,d){var h=a[d];return h===l[d]&&(p[d]=h),p},{}),Object.keys(a).length?r.attributes=a:delete r.attributes):r.attributes=l:delete r.attributes}(),o!==void 0){var c=t.tagName.toLowerCase();o?c!==o&&delete r.tag:r.tag=c}}),r}});var Cq=i(Zt=>{"use strict";Object.defineProperty(Zt,"__esModule",{value:!0});var CL=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Zt.getSingleSelector=Wu;Zt.getMultiSelector=Oq;Zt.default=RL;var EL=Bu(),wq=Hu(EL),kL=bq(),IL=Hu(kL),PL=Gu(),Sq=Hu(PL),xq=Ta(),Tq=Uu();function Hu(e){return e&&e.__esModule?e:{default:e}}function Wu(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":CL(e))+'")');var t=(0,wq.default)(e,r),n=(0,IL.default)(e,r),a=(0,Sq.default)(n,e,r);return t&&delete global.document,a}function Oq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,xq.convertNodeList)(e)),e.some(function(l){return l.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,wq.default)(e[0],r),n=(0,Tq.getCommonAncestor)(e,r),a=Wu(n,r),o=_L(e),u=o[0],c=(0,Sq.default)(a+" "+u,e,r),s=(0,xq.convertNodeList)(document.querySelectorAll(c));return e.every(function(l){return s.some(function(f){return f===l})})?(t&&delete global.document,c):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function _L(e){var r=(0,Tq.getCommonProperties)(e),t=r.classes,n=r.attributes,a=r.tag,o=[];if(a&&o.push(a),t){var u=t.map(function(s){return"."+s}).join("");o.push(u)}if(n){var c=Object.keys(n).reduce(function(s,l){return s.push("["+l+'="'+n[l]+'"]'),s},[]).join("");o.push(c)}return o.length,[o.join("")]}function RL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?Oq(e,r):Wu(e,r)}});var Iq=i(ae=>{"use strict";Object.defineProperty(ae,"__esModule",{value:!0});ae.default=ae.common=ae.optimize=ae.getMultiSelector=ae.getSingleSelector=ae.select=void 0;var Ku=Cq();Object.defineProperty(ae,"getSingleSelector",{enumerable:!0,get:function(){return Ku.getSingleSelector}});Object.defineProperty(ae,"getMultiSelector",{enumerable:!0,get:function(){return Ku.getMultiSelector}});var Eq=kq(Ku),AL=Gu(),NL=kq(AL),ML=Uu(),jL=$L(ML);function $L(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function kq(e){return e&&e.__esModule?e:{default:e}}ae.select=Eq.default;ae.optimize=NL.default;ae.common=jL;ae.default=Eq.default});var Pq=i(()=>{"use strict";var zL=x(),VL=Ie();zL({target:"Array",stat:!0},{isArray:VL})});var Rq=i((t7,_q)=>{"use strict";Pq();var YL=z();_q.exports=YL.Array.isArray});var Nq=i((n7,Aq)=>{"use strict";var JL=Rq();Aq.exports=JL});var jq=i((a7,Mq)=>{"use strict";var QL=Nq();Mq.exports=QL});var Lq=i((i7,$q)=>{"use strict";var XL=jq();$q.exports=XL});var Dq=i((o7,Fq)=>{"use strict";Fq.exports=Lq()});var Uq=i(()=>{"use strict";var ZL=x(),eF=re(),rF=le(),tF=Gr(),nF=Ot(),aF=P(),iF=aF(function(){return[].push.call({length:4294967296},1)!==4294967297}),oF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},uF=iF||!oF();ZL({target:"Array",proto:!0,arity:1,forced:uF},{push:function(r){var t=eF(this),n=rF(t),a=arguments.length;nF(n+a);for(var o=0;o<a;o++)t[n]=arguments[o],n++;return tF(t,n),n}})});var Wq=i((l7,Hq)=>{"use strict";Uq();var sF=oe();Hq.exports=sF("Array","push")});var zq=i((f7,Kq)=>{"use strict";var cF=G(),lF=Wq(),zu=Array.prototype;Kq.exports=function(e){var r=e.push;return e===zu||cF(zu,e)&&r===zu.push?lF:r}});var Yq=i((v7,Vq)=>{"use strict";var fF=zq();Vq.exports=fF});var Qq=i((p7,Jq)=>{"use strict";var vF=Yq();Jq.exports=vF});var Zq=i((d7,Xq)=>{"use strict";var pF=Qq();Xq.exports=pF});var Vu=i((m7,ex)=>{"use strict";ex.exports=Zq()});var fx=i(()=>{"use strict";var dF=x(),mF=kt().map,hF=yt(),yF=hF("map");dF({target:"Array",proto:!0,forced:!yF},{map:function(r){return mF(this,r,arguments.length>1?arguments[1]:void 0)}})});var px=i((U7,vx)=>{"use strict";fx();var gF=oe();vx.exports=gF("Array","map")});var mx=i((H7,dx)=>{"use strict";var bF=G(),qF=px(),Ju=Array.prototype;dx.exports=function(e){var r=e.map;return e===Ju||bF(Ju,e)&&r===Ju.map?qF:r}});var yx=i((W7,hx)=>{"use strict";var xF=mx();hx.exports=xF});var bx=i((K7,gx)=>{"use strict";var wF=yx();gx.exports=wF});var xx=i((z7,qx)=>{"use strict";var SF=bx();qx.exports=SF});var Sx=i((V7,wx)=>{"use strict";wx.exports=xx()});var Ox=i((Y7,Tx)=>{Tx.exports=Sx()});var Ex=i((J7,Cx)=>{Cx.exports=nt()});var Rx=i((Q7,_x)=>{"use strict";var TF=D(),OF=re(),CF=mn(),EF=le(),kx=TypeError,Ix="Reduce of empty array with no initial value",Px=function(e){return function(r,t,n,a){var o=OF(r),u=CF(o),c=EF(o);if(TF(t),c===0&&n<2)throw new kx(Ix);var s=e?c-1:0,l=e?-1:1;if(n<2)for(;;){if(s in u){a=u[s],s+=l;break}if(s+=l,e?s<0:c<=s)throw new kx(Ix)}for(;e?s>=0:c>s;s+=l)s in u&&(a=t(a,u[s],s,o));return a}};_x.exports={left:Px(!1),right:Px(!0)}});var Qu=i((X7,Ax)=>{"use strict";var kF=P();Ax.exports=function(e,r){var t=[][e];return!!t&&kF(function(){t.call(null,r||function(){return 1},1)})}});var Mx=i(()=>{"use strict";var IF=x(),PF=Rx().left,_F=Qu(),Nx=Mr(),RF=Nt(),AF=!RF&&Nx>79&&Nx<83,NF=AF||!_F("reduce");IF({target:"Array",proto:!0,forced:NF},{reduce:function(r){var t=arguments.length;return PF(this,r,t,t>1?arguments[1]:void 0)}})});var $x=i((rV,jx)=>{"use strict";Mx();var MF=oe();jx.exports=MF("Array","reduce")});var Fx=i((tV,Lx)=>{"use strict";var jF=G(),$F=$x(),Xu=Array.prototype;Lx.exports=function(e){var r=e.reduce;return e===Xu||jF(Xu,e)&&r===Xu.reduce?$F:r}});var Bx=i((nV,Dx)=>{"use strict";var LF=Fx();Dx.exports=LF});var Ux=i((aV,Gx)=>{"use strict";var FF=Bx();Gx.exports=FF});var Wx=i((iV,Hx)=>{"use strict";var DF=Ux();Hx.exports=DF});var zx=i((oV,Kx)=>{"use strict";Kx.exports=Wx()});var Yx=i((uV,Vx)=>{Vx.exports=zx()});var Xx=i((sV,Qx)=>{"use strict";var BF=Ie(),GF=le(),UF=Ot(),HF=V(),WF=Br(),Jx=function(e,r,t,n,a,o,u,c){for(var s=a,l=0,f=u?HF(u,c):!1,v,p;l<n;)l in t&&(v=f?f(t[l],l,r):t[l],o>0&&BF(v)?(p=GF(v),s=Jx(e,r,v,p,s,o-1)-1):(UF(s+1),WF(e,s,v)),s++),l++;return s};Qx.exports=Jx});var Zx=i(()=>{"use strict";var KF=x(),zF=Xx(),VF=D(),YF=re(),JF=le(),QF=jn();KF({target:"Array",proto:!0},{flatMap:function(r){var t=YF(this),n=JF(t),a;return VF(r),a=QF(t,0),zF(a,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),a}})});var ew=i(()=>{"use strict";var XF=Co();XF("flatMap")});var tw=i((pV,rw)=>{"use strict";Zx();ew();var ZF=oe();rw.exports=ZF("Array","flatMap")});var aw=i((dV,nw)=>{"use strict";var e4=G(),r4=tw(),Zu=Array.prototype;nw.exports=function(e){var r=e.flatMap;return e===Zu||e4(Zu,e)&&r===Zu.flatMap?r4:r}});var ow=i((mV,iw)=>{"use strict";var t4=aw();iw.exports=t4});var sw=i((hV,uw)=>{"use strict";var n4=ow();uw.exports=n4});var lw=i((yV,cw)=>{"use strict";var a4=sw();cw.exports=a4});var vw=i((gV,fw)=>{"use strict";fw.exports=lw()});var dw=i((bV,pw)=>{pw.exports=vw()});var hw=i((qV,mw)=>{"use strict";Ji();var i4=oe();mw.exports=i4("Array","concat")});var gw=i((xV,yw)=>{"use strict";var o4=G(),u4=hw(),es=Array.prototype;yw.exports=function(e){var r=e.concat;return e===es||o4(es,e)&&r===es.concat?u4:r}});var qw=i((wV,bw)=>{"use strict";var s4=gw();bw.exports=s4});var ww=i((SV,xw)=>{"use strict";var c4=qw();xw.exports=c4});var Tw=i((TV,Sw)=>{"use strict";var l4=ww();Sw.exports=l4});var Cw=i((OV,Ow)=>{"use strict";Ow.exports=Tw()});var rs=i((CV,Ew)=>{Ew.exports=Cw()});var Pw=i(()=>{});var Rw=i((YV,_w)=>{"use strict";Pw();Oo();var q4=Wr();_w.exports=q4.f("toPrimitive")});var Nw=i((JV,Aw)=>{"use strict";var x4=Rw();Aw.exports=x4});var jw=i((QV,Mw)=>{"use strict";var w4=Nw();Mw.exports=w4});var Lw=i((XV,$w)=>{"use strict";var S4=jw();$w.exports=S4});var Dw=i((ZV,Fw)=>{"use strict";Fw.exports=Lw()});var Yw=i((q9,Vw)=>{"use strict";var O4=$(),C4=xe(),E4=R(),k4=E4("match");Vw.exports=function(e){var r;return O4(e)&&((r=e[k4])!==void 0?!!r:C4(e)==="RegExp")}});var Qw=i((x9,Jw)=>{"use strict";var I4=Yw(),P4=TypeError;Jw.exports=function(e){if(I4(e))throw new P4("The method doesn't accept regular expressions");return e}});var Zw=i((w9,Xw)=>{"use strict";var _4=R(),R4=_4("match");Xw.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[R4]=!1,"/./"[e](r)}catch{}}return!1}});var tS=i(()=>{"use strict";var A4=x(),N4=ct(),M4=ft().f,j4=qi(),eS=Ye(),$4=Qw(),L4=cr(),F4=Zw(),D4=Z(),B4=N4("".slice),G4=Math.min,rS=F4("startsWith"),U4=!D4&&!rS&&!!function(){var e=M4(String.prototype,"startsWith");return e&&!e.writable}();A4({target:"String",proto:!0,forced:!U4&&!rS},{startsWith:function(r){var t=eS(L4(this));$4(r);var n=j4(G4(arguments.length>1?arguments[1]:void 0,t.length)),a=eS(r);return B4(t,n,n+a.length)===a}})});var aS=i((O9,nS)=>{"use strict";tS();var H4=oe();nS.exports=H4("String","startsWith")});var oS=i((C9,iS)=>{"use strict";var W4=G(),K4=aS(),is=String.prototype;iS.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===is||W4(is,e)&&r===is.startsWith?K4:r}});var sS=i((E9,uS)=>{"use strict";var z4=oS();uS.exports=z4});var lS=i((k9,cS)=>{"use strict";var V4=sS();cS.exports=V4});var vS=i((I9,fS)=>{"use strict";var Y4=lS();fS.exports=Y4});var dS=i((P9,pS)=>{"use strict";pS.exports=vS()});var hS=i((_9,mS)=>{mS.exports=dS()});var yS=i(()=>{"use strict";var J4=x(),Q4=kt().filter,X4=yt(),Z4=X4("filter");J4({target:"Array",proto:!0,forced:!Z4},{filter:function(r){return Q4(this,r,arguments.length>1?arguments[1]:void 0)}})});var bS=i((N9,gS)=>{"use strict";yS();var eD=oe();gS.exports=eD("Array","filter")});var xS=i((M9,qS)=>{"use strict";var rD=G(),tD=bS(),os=Array.prototype;qS.exports=function(e){var r=e.filter;return e===os||rD(os,e)&&r===os.filter?tD:r}});var SS=i((j9,wS)=>{"use strict";var nD=xS();wS.exports=nD});var OS=i(($9,TS)=>{"use strict";var aD=SS();TS.exports=aD});var ES=i((L9,CS)=>{"use strict";var iD=OS();CS.exports=iD});var IS=i((F9,kS)=>{"use strict";kS.exports=ES()});var _S=i((D9,PS)=>{PS.exports=IS()});var zS=i(()=>{"use strict";var pD=x(),dD=H(),ss=Ar(),mD=Iu(),BS=Do(),hD=Q(),GS=$(),yD=Qe(),HS=P(),cs=dD("Reflect","construct"),gD=Object.prototype,bD=[].push,WS=HS(function(){function e(){}return!(cs(function(){},[],e)instanceof e)}),KS=!HS(function(){cs(function(){})}),US=WS||KS;pD({target:"Reflect",stat:!0,forced:US,sham:US},{construct:function(r,t){BS(r),hD(t);var n=arguments.length<3?r:BS(arguments[2]);if(KS&&!WS)return cs(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var a=[null];return ss(bD,a,t),new(ss(mD,r,a))}var o=n.prototype,u=yD(GS(o)?o:gD),c=ss(r,u,t);return GS(c)?c:u}})});var YS=i((qY,VS)=>{"use strict";zS();var qD=z();VS.exports=qD.Reflect.construct});var QS=i((xY,JS)=>{"use strict";var xD=YS();JS.exports=xD});var ZS=i((wY,XS)=>{"use strict";var wD=QS();XS.exports=wD});var rT=i((SY,eT)=>{"use strict";var SD=ZS();eT.exports=SD});var Ma=i((TY,tT)=>{"use strict";tT.exports=rT()});var aT=i((OY,nT)=>{nT.exports=Ma()});var pT=i((NY,vT)=>{"use strict";var TD=P();vT.exports=TD(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var hT=i((MY,mT)=>{"use strict";var OD=P(),CD=$(),ED=xe(),dT=pT(),ja=Object.isExtensible,kD=OD(function(){ja(1)});mT.exports=kD||dT?function(r){return!CD(r)||dT&&ED(r)==="ArrayBuffer"?!1:ja?ja(r):!0}:ja});var gT=i((jY,yT)=>{"use strict";var ID=P();yT.exports=!ID(function(){return Object.isExtensible(Object.preventExtensions({}))})});var hs=i(($Y,xT)=>{"use strict";var PD=x(),_D=A(),RD=Hr(),AD=$(),ps=W(),ND=te().f,bT=Et(),MD=Qi(),ds=hT(),jD=$r(),$D=gT(),qT=!1,De=jD("meta"),LD=0,ms=function(e){ND(e,De,{value:{objectID:"O"+LD++,weakData:{}}})},FD=function(e,r){if(!AD(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!ps(e,De)){if(!ds(e))return"F";if(!r)return"E";ms(e)}return e[De].objectID},DD=function(e,r){if(!ps(e,De)){if(!ds(e))return!0;if(!r)return!1;ms(e)}return e[De].weakData},BD=function(e){return $D&&qT&&ds(e)&&!ps(e,De)&&ms(e),e},GD=function(){UD.enable=function(){},qT=!0;var e=bT.f,r=_D([].splice),t={};t[De]=1,e(t).length&&(bT.f=function(n){for(var a=e(n),o=0,u=a.length;o<u;o++)if(a[o]===De){r(a,o,1);break}return a},PD({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:MD.f}))},UD=xT.exports={enable:GD,fastKey:FD,getWeakData:DD,onFreeze:BD};RD[De]=!0});var TT=i((LY,ST)=>{"use strict";var HD=x(),WD=_(),KD=hs(),zD=P(),VD=we(),YD=ve(),JD=aa(),QD=N(),XD=$(),ZD=sr(),e3=Re(),r3=te().f,t3=kt().forEach,n3=U(),wT=Je(),a3=wT.set,i3=wT.getterFor;ST.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,a=e.indexOf("Weak")!==-1,o=n?"set":"add",u=WD[e],c=u&&u.prototype,s={},l;if(!n3||!QD(u)||!(a||c.forEach&&!zD(function(){new u().entries().next()})))l=t.getConstructor(r,e,n,o),KD.enable();else{l=r(function(p,d){a3(JD(p,f),{type:e,collection:new u}),ZD(d)||YD(d,p[o],{that:p,AS_ENTRIES:n})});var f=l.prototype,v=i3(e);t3(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(p){var d=p==="add"||p==="set";p in c&&!(a&&p==="clear")&&VD(f,p,function(h,m){var y=v(this).collection;if(!d&&a&&!XD(h))return p==="get"?void 0:!1;var b=y[p](h===0?0:h,m);return d?this:b})}),a||r3(f,"size",{configurable:!0,get:function(){return v(this).collection.size}})}return e3(l,e,!1,!0),s[e]=l,HD({global:!0,forced:!0},s),a||t.setStrong(l,e,n),l}});var CT=i((FY,OT)=>{"use strict";var o3=Pe();OT.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:o3(e,n,r[n],t);return e}});var AT=i((DY,RT)=>{"use strict";var ET=Qe(),u3=Ln(),kT=CT(),s3=V(),c3=aa(),l3=sr(),f3=ve(),v3=Rn(),$a=An(),p3=Fo(),on=U(),IT=hs().fastKey,_T=Je(),PT=_T.set,ys=_T.getterFor;RT.exports={getConstructor:function(e,r,t,n){var a=e(function(l,f){c3(l,o),PT(l,{type:r,index:ET(null),first:null,last:null,size:0}),on||(l.size=0),l3(f)||f3(f,l[n],{that:l,AS_ENTRIES:t})}),o=a.prototype,u=ys(r),c=function(l,f,v){var p=u(l),d=s(l,f),h,m;return d?d.value=v:(p.last=d={index:m=IT(f,!0),key:f,value:v,previous:h=p.last,next:null,removed:!1},p.first||(p.first=d),h&&(h.next=d),on?p.size++:l.size++,m!=="F"&&(p.index[m]=d)),l},s=function(l,f){var v=u(l),p=IT(f),d;if(p!=="F")return v.index[p];for(d=v.first;d;d=d.next)if(d.key===f)return d};return kT(o,{clear:function(){for(var f=this,v=u(f),p=v.first;p;)p.removed=!0,p.previous&&(p.previous=p.previous.next=null),p=p.next;v.first=v.last=null,v.index=ET(null),on?v.size=0:f.size=0},delete:function(l){var f=this,v=u(f),p=s(f,l);if(p){var d=p.next,h=p.previous;delete v.index[p.index],p.removed=!0,h&&(h.next=d),d&&(d.previous=h),v.first===p&&(v.first=d),v.last===p&&(v.last=h),on?v.size--:f.size--}return!!p},forEach:function(f){for(var v=u(this),p=s3(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:v.first;)for(p(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!s(this,f)}}),kT(o,t?{get:function(f){var v=s(this,f);return v&&v.value},set:function(f,v){return c(this,f===0?0:f,v)}}:{add:function(f){return c(this,f=f===0?0:f,f)}}),on&&u3(o,"size",{configurable:!0,get:function(){return u(this).size}}),a},setStrong:function(e,r,t){var n=r+" Iterator",a=ys(r),o=ys(n);v3(e,r,function(u,c){PT(this,{type:n,target:u,state:a(u),kind:c,last:null})},function(){for(var u=o(this),c=u.kind,s=u.last;s&&s.removed;)s=s.previous;return!u.target||!(u.last=s=s?s.next:u.state.first)?(u.target=null,$a(void 0,!0)):$a(c==="keys"?s.key:c==="values"?s.value:[s.key,s.value],!1)},t?"entries":"values",!t,!0),p3(r)}}});var NT=i(()=>{"use strict";var d3=TT(),m3=AT();d3("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},m3)});var MT=i(()=>{"use strict";NT()});var $T=i((WY,jT)=>{"use strict";jT.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,a){return t[e](n,a)}}});var ie=i((KY,FT)=>{"use strict";var h3=H(),La=$T(),LT=h3("Map");FT.exports={Map:LT,set:La("set",2),get:La("get",1),has:La("has",1),remove:La("delete",1),proto:LT.prototype}});var gs=i(()=>{"use strict";var y3=x(),g3=A(),b3=D(),q3=cr(),x3=ve(),Fa=ie(),DT=Z(),w3=P(),BT=Fa.Map,S3=Fa.has,T3=Fa.get,O3=Fa.set,C3=g3([].push),E3=DT||w3(function(){return BT.groupBy("ab",function(e){return e}).get("a").length!==1});y3({target:"Map",stat:!0,forced:DT||E3},{groupBy:function(r,t){q3(r),b3(t);var n=new BT,a=0;return x3(r,function(o){var u=t(o,a++);S3(n,u)?C3(T3(n,u),o):O3(n,u,[o])}),n}})});var Y=i((YY,GT)=>{"use strict";var k3=Ve(),I3=TypeError;GT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new I3(k3(e)+" is not a map")}});var qs=i(()=>{"use strict";var P3=x(),_3=Y(),bs=ie(),R3=Z(),A3=bs.get,N3=bs.has,M3=bs.set;P3({target:"Map",proto:!0,real:!0,forced:R3},{getOrInsert:function(r,t){return N3(_3(this),r)?A3(this,r):(M3(this,r,t),t)}})});var ws=i(()=>{"use strict";var j3=x(),$3=D(),L3=Y(),xs=ie(),F3=Z(),D3=xs.get,B3=xs.has,G3=xs.set;j3({target:"Map",proto:!0,real:!0,forced:F3},{getOrInsertComputed:function(r,t){if(L3(this),$3(t),B3(this,r))return D3(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return G3(this,r,n),n}})});var HT=i((eJ,UT)=>{"use strict";br();MT();gs();qs();ws();Ct();mr();var U3=z();UT.exports=U3.Map});var KT=i((rJ,WT)=>{"use strict";var H3=HT();qr();WT.exports=H3});var Ss=i(()=>{"use strict";qs()});var Ts=i(()=>{"use strict";ws()});var zT=i(()=>{"use strict";gs()});var YT=i((sJ,VT)=>{"use strict";var W3=KT();Ss();Ts();zT();VT.exports=W3});var QT=i((cJ,JT)=>{"use strict";var K3=V(),z3=Q(),V3=re(),Y3=ve();JT.exports=function(e,r,t){return function(a){var o=V3(a),u=arguments.length,c=u>1?arguments[1]:void 0,s=c!==void 0,l=s?K3(c,u>2?arguments[2]:void 0):void 0,f=new e,v=0;return Y3(o,function(p){var d=s?l(p,v++):p;t?r(f,z3(d)[0],d[1]):r(f,d)}),f}}});var ZT=i(()=>{"use strict";var J3=x(),XT=ie(),Q3=QT();J3({target:"Map",stat:!0,forced:!0},{from:Q3(XT.Map,XT.set,!0)})});var r0=i((vJ,e0)=>{"use strict";var X3=Q();e0.exports=function(e,r,t){return function(){for(var a=new e,o=arguments.length,u=0;u<o;u++){var c=arguments[u];t?r(a,X3(c)[0],c[1]):r(a,c)}return a}}});var n0=i(()=>{"use strict";var Z3=x(),t0=ie(),eB=r0();Z3({target:"Map",stat:!0,forced:!0},{of:eB(t0.Map,t0.set,!0)})});var i0=i(()=>{"use strict";var rB=x(),tB=B(),nB=ve(),aB=N(),a0=D(),iB=ie().Map;rB({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=aB(this)?this:iB,a=new n;a0(t);var o=a0(a.set);return nB(r,function(u){tB(o,a,t(u),u)}),a}})});var o0=i(()=>{"use strict";var oB=x(),uB=Y(),sB=ie().remove;oB({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=uB(this),t=!0,n,a=0,o=arguments.length;a<o;a++)n=sB(r,arguments[a]),t=t&&n;return!!t}})});var s0=i(()=>{"use strict";var cB=x(),lB=Y(),Os=ie(),fB=Os.get,vB=Os.has,u0=Os.set;cB({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=lB(this),a,o;return vB(n,r)?(a=fB(n,r),"update"in t&&(a=t.update(a,r,n),u0(n,r,a)),a):(o=t.insert(r,n),u0(n,r,o),o)}})});var l0=i((xJ,c0)=>{"use strict";var pB=B();c0.exports=function(e,r,t){for(var n=t?e:e.iterator,a=e.next,o,u;!(o=pB(a,n)).done;)if(u=r(o.value),u!==void 0)return u}});var ye=i((wJ,f0)=>{"use strict";var dB=l0();f0.exports=function(e,r,t){return t?dB(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var v0=i(()=>{"use strict";var mB=x(),hB=V(),yB=Y(),gB=ye();mB({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=yB(this),n=hB(r,arguments.length>1?arguments[1]:void 0);return gB(t,function(a,o){if(!n(a,o,t))return!1},!0)!==!1}})});var d0=i(()=>{"use strict";var bB=x(),qB=V(),xB=Y(),p0=ie(),wB=ye(),SB=p0.Map,TB=p0.set;bB({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=xB(this),n=qB(r,arguments.length>1?arguments[1]:void 0),a=new SB;return wB(t,function(o,u){n(o,u,t)&&TB(a,u,o)}),a}})});var m0=i(()=>{"use strict";var OB=x(),CB=V(),EB=Y(),kB=ye();OB({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=EB(this),n=CB(r,arguments.length>1?arguments[1]:void 0),a=kB(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return a&&a.value}})});var h0=i(()=>{"use strict";var IB=x(),PB=V(),_B=Y(),RB=ye();IB({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=_B(this),n=PB(r,arguments.length>1?arguments[1]:void 0),a=RB(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return a&&a.key}})});var g0=i((_J,y0)=>{"use strict";y0.exports=function(e,r){return e===r||e!==e&&r!==r}});var b0=i(()=>{"use strict";var AB=x(),NB=g0(),MB=Y(),jB=ye();AB({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return jB(MB(this),function(t){if(NB(t,r))return!0},!0)===!0}})});var q0=i(()=>{"use strict";var $B=x(),LB=Y(),FB=ye();$B({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=FB(LB(this),function(n,a){if(n===r)return{key:a}},!0);return t&&t.key}})});var w0=i(()=>{"use strict";var DB=x(),BB=V(),GB=Y(),x0=ie(),UB=ye(),HB=x0.Map,WB=x0.set;DB({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=GB(this),n=BB(r,arguments.length>1?arguments[1]:void 0),a=new HB;return UB(t,function(o,u){WB(a,n(o,u,t),o)}),a}})});var T0=i(()=>{"use strict";var KB=x(),zB=V(),VB=Y(),S0=ie(),YB=ye(),JB=S0.Map,QB=S0.set;KB({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=VB(this),n=zB(r,arguments.length>1?arguments[1]:void 0),a=new JB;return YB(t,function(o,u){QB(a,u,n(o,u,t))}),a}})});var O0=i(()=>{"use strict";var XB=x(),ZB=Y(),e5=ve(),r5=ie().set;XB({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=ZB(this),n=arguments.length,a=0;a<n;)e5(arguments[a++],function(o,u){r5(t,o,u)},{AS_ENTRIES:!0});return t}})});var C0=i(()=>{"use strict";var t5=x(),n5=D(),a5=Y(),i5=ye(),o5=TypeError;t5({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=a5(this),n=arguments.length<2,a=n?void 0:arguments[1];if(n5(r),i5(t,function(o,u){n?(n=!1,a=o):a=r(a,o,u,t)}),n)throw new o5("Reduce of empty map with no initial value");return a}})});var E0=i(()=>{"use strict";var u5=x(),s5=V(),c5=Y(),l5=ye();u5({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=c5(this),n=s5(r,arguments.length>1?arguments[1]:void 0);return l5(t,function(a,o){if(n(a,o,t))return!0},!0)===!0}})});var I0=i(()=>{"use strict";var f5=x(),k0=D(),v5=Y(),Cs=ie(),p5=TypeError,d5=Cs.get,m5=Cs.has,h5=Cs.set;f5({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=v5(this),a=arguments.length;k0(t);var o=m5(n,r);if(!o&&a<3)throw new p5("Updating absent value");var u=o?d5(n,r):k0(a>2?arguments[2]:void 0)(r,n);return h5(n,r,t(u,r,n)),n}})});var ks=i((VJ,P0)=>{"use strict";var Da=B(),Es=D(),Ba=N(),y5=Q(),g5=TypeError;P0.exports=function(r,t){var n=y5(this),a=Es(n.get),o=Es(n.has),u=Es(n.set),c=arguments.length>2?arguments[2]:void 0,s;if(!Ba(t)&&!Ba(c))throw new g5("At least one callback required");return Da(o,n,r)?(s=Da(a,n,r),Ba(t)&&(s=t(s),Da(u,n,r,s))):Ba(c)&&(s=c(),Da(u,n,r,s)),s}});var _0=i(()=>{"use strict";var b5=x(),q5=ks();b5({target:"Map",proto:!0,real:!0,forced:!0},{upsert:q5})});var R0=i(()=>{"use strict";var x5=x(),w5=ks();x5({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:w5})});var N0=i((ZJ,A0)=>{"use strict";var S5=YT();ZT();n0();i0();o0();s0();v0();d0();m0();h0();b0();Ss();Ts();q0();w0();T0();O0();C0();E0();I0();_0();R0();A0.exports=S5});var j0=i((eQ,M0)=>{"use strict";M0.exports=N0()});var L0=i(()=>{"use strict";var T5=x(),O5=ct(),C5=Pi().indexOf,E5=Qu(),Is=O5([].indexOf),$0=!!Is&&1/Is([1],1,-0)<0,k5=$0||!E5("indexOf");T5({target:"Array",proto:!0,forced:k5},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return $0?Is(this,r,t)||0:C5(this,r,t)}})});var D0=i((nQ,F0)=>{"use strict";L0();var I5=oe();F0.exports=I5("Array","indexOf")});var G0=i((aQ,B0)=>{"use strict";var P5=G(),_5=D0(),Ps=Array.prototype;B0.exports=function(e){var r=e.indexOf;return e===Ps||P5(Ps,e)&&r===Ps.indexOf?_5:r}});var H0=i((iQ,U0)=>{"use strict";var R5=G0();U0.exports=R5});var K0=i((oQ,W0)=>{"use strict";var A5=H0();W0.exports=A5});var V0=i((uQ,z0)=>{"use strict";var N5=K0();z0.exports=N5});var J0=i((sQ,Y0)=>{"use strict";Y0.exports=V0()});var pO=i(()=>{"use strict";var D5=x(),B5=re(),vO=En(),G5=P(),U5=G5(function(){vO(1)});D5({target:"Object",stat:!0,forced:U5},{keys:function(r){return vO(B5(r))}})});var mO=i((pX,dO)=>{"use strict";pO();var H5=z();dO.exports=H5.Object.keys});var yO=i((dX,hO)=>{"use strict";var W5=mO();hO.exports=W5});var bO=i((mX,gO)=>{"use strict";var K5=yO();gO.exports=K5});var xO=i((hX,qO)=>{"use strict";var z5=bO();qO.exports=z5});var SO=i((yX,wO)=>{"use strict";wO.exports=xO()});var OO=i((gX,TO)=>{TO.exports=SO()});var Ke="";function zs(e){Ke=e.replace(/\/+$/,"")}async function ur(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function Vs(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${Ke}/comments?${t}`);return await ur(n,"Failed to fetch comments"),(await n.json()).data}async function Va({uri:e,document:r,quote:t,prefix:n,suffix:a,body:o,author:u,parent:c}){let s={quote:t,prefix:n,suffix:a,body:o,author:u,parent:c};r?s.document=r:s.uri=e;let l=await fetch(`${Ke}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});return await ur(l,"Failed to create comment"),l.json()}async function Ys(e,{body:r}){let t=await fetch(`${Ke}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:r})});return await ur(t,"Failed to update comment"),t.json()}async function Js(e,r){let t=await fetch(`${Ke}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});return await ur(t,"Failed to update comment status"),t.json()}async function Qs(e){let r=await fetch(`${Ke}/comments/${e}`,{method:"DELETE"});await ur(r,"Failed to delete comment")}async function Xs(e,r,t){let n=await fetch(`${Ke}/comments/${e}/reactions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({emoji:r,author:t})});return await ur(n,"Failed to add reaction"),n.json()}async function Zs(e,r,t){let n=await fetch(`${Ke}/comments/${e}/reactions/${encodeURIComponent(r)}?author=${encodeURIComponent(t)}`,{method:"DELETE"});return await ur(n,"Failed to remove reaction"),n.json()}var DL=g(Ur(),1),BL=g(Mn(),1),GL=g(Qn(),1),UL=g(Xn(),1),HL=g(Zn(),1);var Tu=g(nt(),1);function Vy(e,r,t,n,a,o,u){try{var c=e[o](u),s=c.value}catch(l){return void t(l)}c.done?r(s):Tu.default.resolve(s).then(n,a)}function Or(e){return function(){var r=this,t=arguments;return new Tu.default(function(n,a){var o=e.apply(r,t);function u(s){Vy(o,n,a,u,c,"next",s)}function c(s){Vy(o,n,a,u,c,"throw",s)}u(void 0)})}}function Bt(e,r){this.v=e,this.k=r}function rr(e){return new Bt(e,0)}var Ou=g(nt(),1),ag=g(Se(),1),ig=g(da(),1);function Oe(e){return function(){return new Gt(e.apply(this,arguments))}}function Gt(e){var r,t;function n(o,u){try{var c=e[o](u),s=c.value,l=s instanceof Bt;Ou.default.resolve(l?s.v:s).then(function(f){if(l){var v=o==="return"?"return":"next";if(!s.k||f.done)return n(v,f);f=e[v](f).value}a(c.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){a("throw",f)}}function a(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new Ou.default(function(c,s){var l={key:o,arg:u,resolve:c,reject:s,next:null};t?t=t.next=l:(r=t=l,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Gt.prototype[typeof ag.default=="function"&&ig.default||"@@asyncIterator"]=function(){return this},Gt.prototype.next=function(e){return this._invoke("next",e)},Gt.prototype.throw=function(e){return this._invoke("throw",e)},Gt.prototype.return=function(e){return this._invoke("return",e)};var WL=g(se(),1),KL=g(Iq(),1);function ce(e){var r,t=LL(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function LL(e){return"startContainer"in e}function nr(e){if(FL(e))return e;var r=e,t=ce(r).createRange();return t.selectNodeContents(r),t}function FL(e){return"startContainer"in e}var Bq=g(Dq(),1);function Gq(e){if((0,Bq.default)(e))return e}var rx=g(Se(),1),tx=g(Ao(),1),nx=g(Vu(),1);function ax(e,r){var t=e==null?null:typeof rx.default<"u"&&(0,tx.default)(e)||e["@@iterator"];if(t!=null){var n,a,o,u,c=[],s=!0,l=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;s=!1}else for(;!(s=(n=o.call(t)).done)&&((0,nx.default)(c).call(c,n.value),c.length!==r);s=!0);}catch(f){l=!0,a=f}finally{try{if(!s&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(l)throw a}}return c}}var ix=g(Si(),1),ox=g(Yi(),1);function Ia(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function Yu(e,r){if(e){var t;if(typeof e=="string")return Ia(e,r);var n=(0,ix.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,ox.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ia(e,r):void 0}}function ux(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Le(e,r){return Gq(e)||ax(e,r)||Yu(e,r)||ux()}var sx=g(Se(),1),cx=g(da(),1),lx=g(Jt(),1),en=g(nt(),1);function it(e){var r,t,n,a=2;for(typeof sx.default<"u"&&(t=cx.default,n=lx.default);a--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Pa(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Pa(e){function r(t){if(Object(t)!==t)return en.default.reject(new TypeError(t+" is not an object."));var n=t.done;return en.default.resolve(t.value).then(function(a){return{value:a,done:n}})}return Pa=function(n){this.s=n,this.n=n.next},Pa.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var a=this.s.return;return a===void 0?en.default.resolve({value:n,done:!0}):r(a.apply(this.s,arguments))},throw:function(n){var a=this.s.return;return a===void 0?en.default.reject(n):r(a.apply(this.s,arguments))}},new Pa(e)}var b4=g(se(),1);var p4=g(se(),1),d4=g(Ox(),1),m4=g(Ex(),1),h4=g(Yx(),1),y4=g(dw(),1),g4=g(rs(),1);var As=g(se(),1);var vD=g(se(),1);var ns=g(se(),1);function rn(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function kw(e,r){return rn(e.startChunk,r.startChunk)&&rn(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function Cr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var ts=g(Wt(),1);var tn=g(Se(),1),Iw=g(Jt(),1);function Fe(e){"@babel/helpers - typeof";return Fe=typeof tn.default=="function"&&typeof Iw.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof tn.default=="function"&&r.constructor===tn.default&&r!==tn.default.prototype?"symbol":typeof r},Fe(e)}var Bw=g(Dw(),1);function Gw(e,r){if(Fe(e)!="object"||!e)return e;var t=e[Bw.default];if(t!==void 0){var n=t.call(e,r||"default");if(Fe(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function _a(e){var r=Gw(e,"string");return Fe(r)=="symbol"?r:r+""}function Uw(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,ts.default)(e,_a(n.key),n)}}function nn(e,r,t){return r&&Uw(e.prototype,r),t&&Uw(e,t),(0,ts.default)(e,"prototype",{writable:!1}),e}var Hw=g(Wt(),1);function Er(e,r,t){return(r=_a(r))in e?(0,Hw.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var Ww=g(Ur(),1);var Ra="Iterator exhausted before seek ended.",an=function(){function e(r){Cr(this,e),this.chunker=r,Er(this,"currentChunkPosition",0),Er(this,"offsetInChunk",0),this.seekTo(0)}return nn(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,a)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!rn(this.currentChunk,n);){var v=this._readToPreviousChunk(),p=Le(v,2),d=p[0],h=p[1];if(t&&(u=d+u),h===null)throw new RangeError(Ra)}else for(;!rn(this.currentChunk,n);){var c=this._readToNextChunk(),s=Le(c,2),l=s[0],f=s[1];if(t&&(u+=l),f===null)throw new RangeError(Ra)}var m=this.currentChunkPosition+a;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,Ww.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var c=this.currentChunkPosition+this.currentChunk.data.length;if(c<=n){var s=this._readToNextChunk(),l=Le(s,2),f=l[0],v=l[1];if(t&&(u+=f),v===null){if(this.position===n||o)break;throw new RangeError(Ra)}}else{var p=a?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,p)),this.offsetInChunk=p,a&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=a?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var h=this._readToPreviousChunk(),m=Le(h,2),y=m[0],b=m[1];if(t&&(u=y+u),b===null){if(o)break;throw new RangeError(Ra)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,a=this.chunker.nextChunk();return a!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,a]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function zw(e,r){return as.apply(this,arguments)}function as(){return as=Or(ns.default.mark(function e(r,t){var n,a,o,u,c,s,l,f,v,p,d,h,m,y,b,q,k,E,w,T,S,C,j=arguments;return ns.default.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:n=j.length>2&&j[2]!==void 0?j[2]:{},a=n.minimalContext,o=a===void 0?!1:a,u=n.minimumQuoteLength,c=u===void 0?0:u,s=n.maxWordLength,l=s===void 0?50:s,f=new an(t()),v=new an(t()),f.seekToChunk(r.startChunk,r.startIndex),p=f.readToChunk(r.endChunk,r.endIndex),d="",h="",m=function(){return d.length+p.length+h.length},m()<c&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),y=Math.floor((c-m())/2),d=f.read(-y,!1,!0)+d,m()<c&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),b=c-m(),h=h+f.read(b,!1,!0),m()<c&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),q=c-m(),d=f.read(-q,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=Aa(f,l,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+Aa(f,l,!1));case 11:return k={type:"TextQuoteSelector",exact:p,prefix:d,suffix:h},E=Na(k)(t()),I.next=16,E.next();case 16:if(w=I.sent,!(!w.done&&kw(w.value,r))){I.next=21;break}return I.next=20,E.next();case 20:w=I.sent;case 21:if(!w.done){I.next=23;break}return I.abrupt("return",k);case 23:if(T=w.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),v.seekToChunk(T.startChunk,T.startIndex-d.length),S=Kw(f,v,!0),S!==void 0&&!o&&(S=Aa(f,l,!0)+S),f.seekToChunk(r.endChunk,r.endIndex+h.length),v.seekToChunk(T.endChunk,T.endIndex+h.length),C=Kw(f,v,!1),C!==void 0&&!o&&(C=C+Aa(f,l,!1)),!o){I.next=44;break}if(!(S!==void 0&&(C===void 0||S.length<=C.length))){I.next=37;break}d=S+d,I.next=42;break;case 37:if(C===void 0){I.next=41;break}h=h+C,I.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:I.next=46;break;case 44:S!==void 0&&(d=S+d),C!==void 0&&(h=h+C);case 46:I.next=11;break;case 48:case"end":return I.stop()}},e)})),as.apply(this,arguments)}function Kw(e,r,t){for(var n="";;){var a=void 0;try{a=e.read(t?-1:1)}catch{return}n=t?a+n:n+a;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(a!==o)return n}}function Aa(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var a=void 0;try{a=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(T4(a)){e.seekBy(t?1:-1);break}n=t?a+n:n+a}return n}function T4(e){return/^\s+$/.test(e)}var NS=g(Ur(),1),MS=g(Mn(),1),jS=g(Qn(),1),$S=g(Xn(),1),LS=g(Zn(),1);var us=g(se(),1),FS=g(hS(),1),DS=g(_S(),1);function RS(e,r){var t;if(typeof jS.default>"u"||(0,$S.default)(e)==null){if(Array.isArray(e)||(t=oD(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,c;return{s:function(){t=(0,LS.default)(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){u=!0,c=l},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw c}}}}function oD(e,r){var t;if(e){if(typeof e=="string")return AS(e,r);var n=(0,NS.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,MS.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return AS(e,r)}}function AS(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Na(e){return function(){var r=Oe(us.default.mark(function n(a){var o,u,c,s,l,f,v,p,d,h,m,y,b,q,k,E,w,T,S,C,j,be,I,ee,qe,J,F;return us.default.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:o=e.exact,u=e.prefix||"",c=e.suffix||"",s=u+o+c,l=[],f=!0;case 6:v=a.currentChunk,p=v.data,d=[],h=RS(l),O.prev=10,h.s();case 12:if((m=h.n()).done){O.next=27;break}if(y=m.value,b=y.charactersMatched,y.endChunk===void 0&&(q=u.length+o.length-b,q<=p.length&&(y.endChunk=v,y.endIndex=q)),y.startChunk===void 0&&(k=u.length-b,(k<p.length||y.endChunk!==void 0)&&(y.startChunk=v,y.startIndex=k)),E=s.length-b,!(E<=p.length)){O.next=24;break}if(!(0,FS.default)(p).call(p,s.substring(b))){O.next=22;break}return O.next=22,y;case 22:O.next=25;break;case 24:p===s.substring(b,b+p.length)&&(y.charactersMatched+=p.length,d.push(y));case 25:O.next=12;break;case 27:O.next=32;break;case 29:O.prev=29,O.t0=O.catch(10),h.e(O.t0);case 32:return O.prev=32,h.f(),O.finish(32);case 35:if(l=d,!(s.length<=p.length)){O.next=49;break}w=0;case 38:if(!(w<=p.length)){O.next=49;break}if(T=p.indexOf(s,w),T!==-1){O.next=42;break}return O.abrupt("break",49);case 42:if(w=T+1,!(T===0&&s.length===0&&!f)){O.next=45;break}return O.abrupt("continue",38);case 45:return O.next=47,{startChunk:v,startIndex:T+u.length,endChunk:v,endIndex:T+u.length+o.length};case 47:O.next=38;break;case 49:for(S=[],C=Math.max(p.length-s.length+1,0),j=function(We){var Ws=p[We];S=(0,DS.default)(S).call(S,function(XO){return Ws===s[We-XO]}),Ws===s[0]&&S.push(We)},be=C;be<p.length;be++)j(be);I=RS(S);try{for(I.s();!(ee=I.n()).done;)qe=ee.value,J=p.length-qe,F={charactersMatched:J},J>=u.length+o.length&&(F.endChunk=v,F.endIndex=qe+u.length+o.length),(J>u.length||F.endChunk!==void 0)&&(F.startChunk=v,F.startIndex=qe+u.length),l.push(F)}catch(_r){I.e(_r)}finally{I.f()}f=!1;case 56:if(a.nextChunk()!==null){O.next=6;break}case 57:case"end":return O.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var lD=g(se(),1);var uD=g(Ur(),1),sD=g(rs(),1);var fD=g(se(),1);var sn=g(aT(),1);var oT=g(ha(),1),uT=g(Wt(),1);var ls=g(ya(),1),iT=g(Ht(),1);function ar(e,r){var t;return ar=ls.default?(0,iT.default)(t=ls.default).call(t):function(n,a){return n.__proto__=a,n},ar(e,r)}function fs(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,oT.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,uT.default)(e,"prototype",{writable:!1}),r&&ar(e,r)}function sT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function cT(e,r){if(r&&(Fe(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return sT(e)}var lT=g(ya(),1),fT=g(Ht(),1),vs=g(ma(),1);function kr(e){var r;return kr=lT.default?(0,fT.default)(r=vs.default).call(r):function(t){return t.__proto__||(0,vs.default)(t)},kr(e)}var Rs=g(j0(),1),aO=g(ha(),1);var Q0=g(J0(),1);function X0(e){try{var r;return(0,Q0.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var eO=g(Ma(),1),rO=g(Vu(),1),tO=g(Ht(),1);var Z0=g(Ma(),1);function _s(){try{var e=!Boolean.prototype.valueOf.call((0,Z0.default)(Boolean,[],function(){}))}catch{}return(_s=function(){return!!e})()}function nO(e,r,t){if(_s())return eO.default.apply(null,arguments);var n=[null];(0,rO.default)(n).apply(n,r);var a=new((0,tO.default)(e).apply(e,n));return t&&ar(a,t.prototype),a}function un(e){var r=typeof Rs.default=="function"?new Rs.default:void 0;return un=function(n){if(n===null||!X0(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,a)}function a(){return nO(n,arguments,kr(this).constructor)}return a.prototype=(0,aO.default)(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),ar(a,n)},un(e)}function uO(e,r){var t=ce(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),a=iO(e.startContainer,e.startOffset),o=Le(a,2),u=o[0],c=o[1];for(n.currentNode=u;c===u.length&&n.nextNode();)u=n.currentNode,c=0;e.setStart(u,c);var s=iO(e.endContainer,e.endOffset),l=Le(s,2),f=l[0],v=l[1];for(n.currentNode=f;v===0&&n.previousNode();)f=n.currentNode,v=f.length;return e.setEnd(f,v),e}function iO(e,r){var t;if(oO(e))return[e,r];var n;if(M5(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(oO(n))return[n,0];var a=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=a.createTreeWalker(a,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function oO(e){return e.nodeType===Node.TEXT_NODE}function M5(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function cO(e){var r=j5();return function(){var n=kr(e),a;if(r){var o=kr(this).constructor;a=(0,sn.default)(n,arguments,o)}else a=n.apply(this,arguments);return cT(this,a)}}function j5(){if(typeof Reflect>"u"||!sn.default||sn.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,sn.default)(Boolean,[],function(){})),!0}catch{return!1}}var Ga=function(e){fs(t,e);var r=cO(t);function t(n){return Cr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(un(TypeError)),$5=function(e){fs(t,e);var r=cO(t);function t(n){return Cr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(un(TypeError)),Ir=function(){function e(r){var t=this;if(Cr(this,e),Er(this,"scope",void 0),Er(this,"iter",void 0),this.scope=nr(r),this.iter=ce(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!sO(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Ga}}return nn(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!sO(t))throw new Ga;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new $5;var n=t===this.scope.startContainer?this.scope.startOffset:0,a=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:a,data:t.data.substring(n,a),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=uO(t,this.scope),a=this.nodeToChunk(n.startContainer),o=n.startOffset-a.startOffset,u=this.nodeToChunk(n.endContainer),c=n.endOffset-u.startOffset;return{startChunk:a,startIndex:o,endChunk:u,endIndex:c}}},{key:"chunkRangeToRange",value:function(t){var n=ce(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function sO(e){return e.nodeType===Node.TEXT_NODE}function lO(e,r){return Ns.apply(this,arguments)}function Ns(){return Ns=Or(As.default.mark(function e(r,t){var n,a,o,u=arguments;return As.default.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},a=nr(t??ce(r)),o=new Ir(a),s.next=5,zw(o.rangeToChunkRange(r),function(){return new Ir(a)},n);case 5:return s.abrupt("return",s.sent);case 6:case"end":return s.stop()}},e)})),Ns.apply(this,arguments)}var Ms=g(se(),1);function fO(e){var r=Na(e);return function(){var t=Oe(Ms.default.mark(function a(o){var u,c,s,l,f,v,p,d;return Ms.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new Ir(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof Ga)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:c=!0,s=!1,m.prev=13,f=it(r(u));case 15:return m.next=17,rr(f.next());case 17:return v=m.sent,c=v.done,m.next=21,rr(v.value);case 21:if(p=m.sent,c){m.next=29;break}return d=p,m.next=26,u.chunkRangeToRange(d);case 26:c=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),s=!0,l=m.t1;case 35:if(m.prev=35,m.prev=36,!(!c&&f.return!=null)){m.next=40;break}return m.next=40,rr(f.return());case 40:if(m.prev=40,!s){m.next=43;break}throw l;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},a,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(a){return t.apply(this,arguments)}return n}()}var L5=g(se(),1);var F5=g(se(),1);var V5=g(OO(),1),Y5=g(Ur(),1),J5=g(Mn(),1),Q5=g(Qn(),1),X5=g(Xn(),1),Z5=g(Zn(),1);async function CO(e,r){let t=await lO(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function Ua(e,r){let t=fO({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var ot="fb-highlight",EO="fb-highlight-active";var cn=null;function IO(e){cn=e}function Ha(e,r){let t=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let n=kO(e,r);t.push(n)}else{let n=r8(e);for(let a=0;a<n.length;a++){let o=n[a],u=document.createRange();o===e.startContainer?(u.setStart(o,e.startOffset),u.setEnd(o,o.textContent.length)):o===e.endContainer?(u.setStart(o,0),u.setEnd(o,e.endOffset)):u.selectNodeContents(o),u.collapsed||t.push(kO(u,r))}}return t}function kO(e,r){let t=e.commonAncestorContainer;for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;let n=t,a=!1,o=null;for(;n;){if(n.tagName==="foreignObject"){a=!1;break}n.tagName==="text"&&n instanceof SVGElement&&(a=!0),n.tagName==="svg"&&(o=n),n=n.parentElement}if(a&&o)return e8(e,r,o);let u=document.createElement("mark");u.className=ot,u.dataset.commentId=r,u.addEventListener("click",()=>{cn&&cn(r)});try{e.surroundContents(u)}catch(c){return console.warn("[feedback-layer] Failed to create highlight:",c),null}return u}function e8(e,r,t){try{let n=e.getClientRects();if(n.length===0)return null;let a="http://www.w3.org/2000/svg",o=t.getScreenCTM();if(!o)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let u=e.commonAncestorContainer;for(;u&&u.nodeType!==Node.ELEMENT_NODE;)u=u.parentNode;let c=u,s=null;for(;c&&c!==t;){if(c.tagName==="text"){s=c.parentElement;break}c=c.parentElement}let l=s||t,f=o;l!==t&&l.getScreenCTM&&(f=l.getScreenCTM());let v=document.createElementNS(a,"g");v.setAttribute("class",ot),v.setAttribute("data-comment-id",r),v.style.cursor="pointer";for(let y=0;y<n.length;y++){let b=n[y],q=document.createElementNS(a,"rect"),k=t.createSVGPoint();k.x=b.left,k.y=b.top;let E=k.matrixTransform(f.inverse()),w=b.width/f.a,T=b.height/f.d;q.setAttribute("x",E.x),q.setAttribute("y",E.y),q.setAttribute("width",w),q.setAttribute("height",T),q.setAttribute("rx","2"),q.setAttribute("ry","2"),q.style.pointerEvents="none",v.appendChild(q)}l&&l!==t?l.appendChild(v):t.appendChild(v);let p=e.commonAncestorContainer;for(;p&&p.nodeType!==Node.ELEMENT_NODE;)p=p.parentNode;let d=new Set,h=p;for(;h&&h!==t;)h.tagName==="text"&&h instanceof SVGElement&&(d.add(h),h.querySelectorAll("tspan").forEach(b=>d.add(b))),h=h.parentElement;let m=y=>{y.preventDefault(),y.stopPropagation(),cn&&cn(r)};return d.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",m),y.dataset.fbCommentId=r}),v}catch(n){return console.warn("[feedback-layer] Failed to create SVG highlight:",n),null}}function js(e){document.querySelectorAll(`.${ot}[data-comment-id="${e}"]`).forEach(n=>{let a=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)a.removeChild(n);else{for(;n.firstChild;)a.insertBefore(n.firstChild,n);a.removeChild(n),a.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function PO(){document.querySelectorAll(`.${ot}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function Wa(e){document.querySelectorAll(`.${ot}`).forEach(r=>{r.dataset.commentId===e?r.classList.add(EO):r.classList.remove(EO)})}function _O(e){let r=document.querySelector(`.${ot}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function r8(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let a=document.createRange();return a.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,a)<0&&e.compareBoundaryPoints(Range.START_TO_END,a)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function RO(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,a)=>{let o=[`**${a+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let c of u)o.push(`  - **[${c.author}]** (reply): ${c.body}`);return o.join(`
`)}).join(`

`)}function AO(e,r){let t=RO(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(a=>!a.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function ir(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var t8=`
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
`,NO=null,MO=null;function jO(e,r){MO=e,NO=r,n8()}function n8(){let e=document.createElement("style");e.textContent=t8,document.head.appendChild(e)}function $O(){let e=NO(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let a=document.createElement("button");a.className="hf-modal-close",a.textContent="\xD7",a.addEventListener("click",()=>r.remove()),n.appendChild(a);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",v=>{v.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let c=document.querySelector(MO.contentSelector||"body").innerHTML,s=AO(c,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${s.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${ir(s)}</textarea>
  `;let l=document.createElement("button");l.className="hf-btn hf-btn-primary",l.textContent="Copy Prompt",l.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(s),l.textContent="Copied!"}catch{l.textContent="Copy failed"}setTimeout(()=>l.textContent="Copy Prompt",2e3)}),u.appendChild(l);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function LO(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function FO(e,r){return e.length>r?e.slice(0,r)+"...":e}function DO(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var ln=null;function GO(e){ln=document.createElement("div"),ln.className="fb-toast-container",e.appendChild(ln)}function or(e,r="success"){if(!ln)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>BO(t)),t.appendChild(o)}ln.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>BO(t),r==="error"?8e3:4e3)}function BO(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}var a8=320,WO="feedback-layer-commenter",X=null,Ge=null,Be=null,$s=null,KO=null,Ls=null,Fs=null,Ds=null,Bs=null,fn=null,Gs=!1,zO=[],VO=new Set;var UO=!1;function i8(){UO||(UO=!0,v8())}function Ue(){return localStorage.getItem(WO)||""}function YO({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:a,onReaction:o}){KO=e,Ls=r,Fs=t,Ds=n,Bs=a,fn=o,i8(),X=document.createElement("div"),X.className="fb-sidebar fb-sidebar-collapsed",X.innerHTML=`
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
               value="${ir(Ue())}">
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
  `;let u=document.createElement("button");u.className="fb-sidebar-tab",u.textContent="Feedback",u.addEventListener("click",()=>vn()),document.body.appendChild(u),document.body.appendChild(X),GO(X),Ge=X.querySelector(".fb-comment-list"),Be=X.querySelector(".fb-form-section");let c=X.querySelector(".fb-name-input");c.addEventListener("input",()=>{localStorage.setItem(WO,c.value.trim())}),X.querySelector(".fb-ai-btn").addEventListener("click",()=>$O()),X.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>o8());let f=X.querySelector(".fb-show-resolved-cb");f.addEventListener("change",()=>{Gs=f.checked,He(zO,VO)})}function vn(){X.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden")}function o8(){X.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden")}function JO(e){if(vn(),!Ue()){let n=X.querySelector(".fb-name-input");n.classList.add("fb-name-input-error"),setTimeout(()=>n.classList.remove("fb-name-input-error"),2e3)}$s=e,Be.style.display="",Be.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${ir(FO(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `;let r=Be.querySelector(".fb-form-textarea");r.focus();let t=()=>{if(!Ue()){let a=X.querySelector(".fb-name-input");a.focus(),a.style.outline="2px solid #ef4444",setTimeout(()=>a.style.outline="",2e3);return}let n=r.value.trim();n&&(KO({comment:n,commenter:Ue()}),Be.style.display="none",$s=null)};Be.querySelector(".fb-submit-btn").addEventListener("click",t),r.addEventListener("keydown",n=>{n.key==="Enter"&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),t())}),Be.querySelector(".fb-cancel-btn").addEventListener("click",()=>{Be.style.display="none",$s=null}),Be.scrollIntoView({behavior:"smooth",block:"nearest"})}function He(e,r=new Set,t=new Map){zO=e,VO=r,Ge.innerHTML="";let{topLevel:n,repliesByParent:a}=LO(e),o=n.slice().sort((l,f)=>{let v=t.get(l.id),p=t.get(f.id);return!v||!p?0:v.compareBoundaryPoints(Range.START_TO_START,p)}),u=o.filter(l=>{let f=r.has(l.id),v=l.status==="closed";return f||v&&Gs}),c=Gs?u:u.filter(l=>l.status!=="closed");if(o.length===0){Ge.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let s=o.filter(l=>!r.has(l.id)&&l.status!=="closed").length;if(c.length===0){s>0?Ge.innerHTML=`<div class="fb-empty">
        ${u.length} comment(s) resolved.
        ${s>0?`<br>${s} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:Ge.innerHTML=`<div class="fb-empty">All ${o.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let l of c){let f=document.createElement("div");f.className="fb-thread",f.appendChild(HO(l,!1));let v=a.get(l.id)||[];for(let d of v)f.appendChild(HO(d,!0));let p=document.createElement("button");p.className="fb-reply-btn",p.textContent="Reply",p.addEventListener("click",d=>{d.stopPropagation(),l8(l.id,f,p)}),f.appendChild(p),Ge.appendChild(f)}}function HO(e,r){let t=e.status==="closed",n=document.createElement("div");n.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":""),n.dataset.id=e.id,n.innerHTML=`
    <div class="fb-cmt-body">${ir(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${ir(e.author)}</span>
      <span class="fb-cmt-time">${DO(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
    <div class="fb-reactions"></div>
  `;let a=n.querySelector(".fb-reactions");return s8(a,e),r||(n.addEventListener("click",o=>{o.target.closest(".fb-cmt-delete")||o.target.closest(".fb-cmt-resolve")||o.target.closest(".fb-cmt-edit")||o.target.closest(".fb-reactions")||(Wa(e.id),_O(e.id),Ge.querySelectorAll(".fb-cmt-card").forEach(u=>u.classList.remove("fb-cmt-active")),n.classList.add("fb-cmt-active"))}),n.querySelector(".fb-cmt-resolve").addEventListener("click",o=>{o.stopPropagation(),Fs&&Fs(e.id,!t)})),n.querySelector(".fb-cmt-edit").addEventListener("click",o=>{o.stopPropagation(),f8(e,n)}),n.querySelector(".fb-cmt-delete").addEventListener("click",o=>{o.stopPropagation(),Ls&&Ls(e.id)}),n}var Us={"\u{1F44D}":{label:"Like",svg:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 22V11l-5 0v11h5zm2-11l3.5-7a2 2 0 0 1 2-1.5c.8 0 1.5.7 1.5 1.5v5h4.5a2 2 0 0 1 2 2.2l-1.3 7a2 2 0 0 1-2 1.8H9z"/></svg>'},"\u2764\uFE0F":{label:"Love",svg:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.3l7.8-7.8 1-1.1a5.5 5.5 0 0 0 0-7.8z"/></svg>'},"\u{1F440}":{label:"Seen",svg:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>'},"\u{1F389}":{label:"Celebrate",svg:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'},"\u{1F914}":{label:"Question",svg:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r="0.5" fill="currentColor"/></svg>'},"\u{1F602}":{label:"Funny",svg:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>'}},u8=Object.keys(Us);function s8(e,r){let t=r.reactions||[],n=Ue();for(let o of t){let u=document.createElement("button");u.className="fb-reaction-badge",n&&o.authors.includes(n)&&u.classList.add("fb-reaction-mine");let s=Us[o.emoji];u.innerHTML=`${s?s.svg:o.emoji}<span class="fb-reaction-count">${o.count}</span>`,u.title=(s?s.label+": ":"")+o.authors.join(", "),u.addEventListener("click",l=>{l.stopPropagation(),fn&&fn(r.id,o.emoji)}),e.appendChild(u)}let a=document.createElement("button");a.className="fb-reaction-add",a.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><circle cx="9" cy="10" r="0.5" fill="currentColor"/><circle cx="15" cy="10" r="0.5" fill="currentColor"/></svg>',a.title="Add reaction",a.addEventListener("click",o=>{o.stopPropagation(),c8(e,r,a)}),e.appendChild(a)}function c8(e,r,t){let n=e.querySelector(".fb-emoji-picker");if(n){n.remove();return}let a=document.createElement("div");a.className="fb-emoji-picker";for(let u of u8){let c=Us[u],s=document.createElement("button");s.className="fb-emoji-option",s.innerHTML=c.svg,s.title=c.label,s.addEventListener("click",l=>{l.stopPropagation(),a.remove(),fn&&fn(r.id,u)}),a.appendChild(s)}e.insertBefore(a,t.nextSibling);let o=u=>{!a.contains(u.target)&&u.target!==t&&(a.remove(),document.removeEventListener("click",o,!0))};setTimeout(()=>document.addEventListener("click",o,!0),0)}function l8(e,r,t){vn();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let a=document.createElement("div");a.className="fb-reply-form",a.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!Ue()){let s=X.querySelector(".fb-name-input");s.focus(),s.style.outline="2px solid #ef4444",setTimeout(()=>s.style.outline="",2e3);return}let c=a.querySelector("textarea").value.trim();c&&(Ds&&Ds({parent_id:e,comment:c,commenter:Ue()}),a.remove(),t.style.display="")};a.querySelector(".fb-reply-submit").addEventListener("click",o);let u=a.querySelector("textarea");u.addEventListener("keydown",c=>{c.key==="Enter"&&(c.metaKey||c.ctrlKey)&&(c.preventDefault(),o())}),a.querySelector(".fb-reply-cancel").addEventListener("click",()=>{a.remove(),t.style.display=""}),r.insertBefore(a,t),u.focus()}function f8(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${ir(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let a=t.querySelector("textarea");a.focus(),a.setSelectionRange(a.value.length,a.value.length);let o=()=>{let u=a.value.trim();u&&Bs&&Bs(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),a.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function QO(e){let r=Ge.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(Ge.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function v8(){let e=document.createElement("style");e.textContent=`
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
      width: ${a8}px;
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
    .fb-reactions {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 4px;
      margin-top: 6px;
    }
    .fb-reaction-badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 2px 8px;
      border-radius: 12px;
      border: 1px solid #dadce0;
      background: #f1f3f4;
      font-size: 11px;
      color: #5f6368;
      cursor: pointer;
      line-height: 1.4;
      font-family: inherit;
    }
    .fb-reaction-badge svg {
      color: #5f6368;
      flex-shrink: 0;
    }
    .fb-reaction-count {
      font-size: 11px;
      color: #5f6368;
    }
    .fb-reaction-badge:hover {
      border-color: #bdc1c6;
      background: #e8eaed;
    }
    .fb-reaction-mine {
      border-color: #1a73e8;
      background: #e8f0fe;
    }
    .fb-reaction-mine svg {
      color: #1a73e8;
    }
    .fb-reaction-mine .fb-reaction-count {
      color: #1a73e8;
    }
    .fb-reaction-mine:hover {
      background: #d2e3fc;
      border-color: #1a73e8;
    }
    .fb-reaction-add {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 24px;
      border-radius: 12px;
      border: 1px solid #dadce0;
      background: #f1f3f4;
      color: #5f6368;
      cursor: pointer;
      line-height: 1;
      font-family: inherit;
    }
    .fb-reaction-add:hover {
      border-color: #bdc1c6;
      background: #e8eaed;
    }
    .fb-emoji-picker {
      display: flex;
      gap: 2px;
      padding: 4px;
      background: #fff;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }
    .fb-emoji-option {
      background: none;
      border: none;
      cursor: pointer;
      padding: 6px;
      border-radius: 4px;
      line-height: 1;
      color: #5f6368;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .fb-emoji-option:hover {
      background: #e8eaed;
      color: #202124;
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
  `,document.head.appendChild(e)}var ut=null,Ka=null,za=null,L=[],Pr=null,ge=null,pe=new Set,Ee=new Map;function p8(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null,theme:e?.dataset.theme||"auto"};zs(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{ut=document.querySelector(r.contentSelector)||document.body,Ka=r.documentUri||window.location.origin+window.location.pathname,za=r.documentId||null,document.documentElement.dataset.remarqTheme=r.theme,YO({onSubmit:g8,onDelete:S8,onResolve:b8,onReply:q8,onEdit:x8,onReaction:w8}),IO(a=>{vn(),QO(a),Wa(a)}),h8(),await t(),d8(),jO(r,()=>L)}catch(a){console.error("[feedback-layer] Boot failed:",a)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function d8(){try{L=await Vs(Ka,za),pe=await m8(L),He(L,pe,Ee)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),or(`Failed to load comments: ${e.message}`,"error")}}async function m8(e){PO();let r=new Set;Ee.clear();for(let t of e)if(!t.parent)try{let n=await Ua({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ut);n&&t.status!=="closed"?(Ha(n,t.id),r.add(t.id),Ee.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),Ee.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function h8(){document.addEventListener("mouseup",Hs),document.addEventListener("keyup",Hs),document.addEventListener("touchend",Hs)}function Hs(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){pn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){pn();return}if(!ut.contains(r.commonAncestorContainer)){pn();return}y8(r)},10)}function y8(e){pn();let r=e.getBoundingClientRect();ge=document.createElement("button"),ge.className="fb-annotate-tooltip",ge.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',ge.style.top=window.scrollY+r.bottom+8+"px",ge.style.left=window.scrollX+r.left+r.width/2-40+"px";let t=async n=>{n.preventDefault(),n.stopPropagation();let a=window.getSelection();if(!a||a.isCollapsed)return;let o=a.getRangeAt(0);try{Pr=await CO(o,ut),JO(Pr.exact)}catch(u){console.error("[feedback-layer] Failed to create selector:",u)}pn()};ge.addEventListener("mousedown",t),ge.addEventListener("touchstart",t),document.body.appendChild(ge)}function pn(){ge&&(ge.remove(),ge=null)}async function g8({comment:e,commenter:r}){if(Pr){try{let t=await Va({uri:Ka,document:za,quote:Pr.exact,prefix:Pr.prefix,suffix:Pr.suffix,body:e,author:r});L.push(t);let n=await Ua({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ut);n&&(Ha(n,t.id),pe.add(t.id)),He(L,pe,Ee),window.getSelection().removeAllRanges()}catch(t){console.error("[feedback-layer] Failed to create comment:",t),or(`Failed to save comment: ${t.message}`,"error")}Pr=null}}async function b8(e,r){try{let n=await Js(e,r?"closed":"open"),a=L.findIndex(o=>o.id===e);if(a!==-1&&(L[a]=n),r)js(e);else{let o=n,u=await Ua({exact:o.quote,prefix:o.prefix,suffix:o.suffix},ut);u?(Ha(u,o.id),pe.add(o.id)):pe.delete(o.id)}He(L,pe,Ee)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),or(`Failed to update comment: ${t.message}`,"error")}}async function q8({parent_id:e,comment:r,commenter:t}){try{let n=await Va({uri:Ka,document:za,body:r,author:t,parent:e});L.push(n),He(L,pe,Ee)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),or(`Failed to save reply: ${n.message}`,"error")}}async function x8(e,r){try{let t=await Ys(e,{body:r}),n=L.findIndex(a=>a.id===e);n!==-1&&(L[n]=t),He(L,pe,Ee)}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),or(`Failed to update comment: ${t.message}`,"error")}}async function w8(e,r){let t=Ue();if(t)try{let o=L.find(s=>s.id===e)?.reactions?.find(s=>s.emoji===r)?.authors.includes(t),u;o?u=await Zs(e,r,t):u=await Xs(e,r,t);let c=L.findIndex(s=>s.id===e);c!==-1&&(L[c]={...L[c],reactions:u.reactions}),He(L,pe,Ee)}catch(n){console.error("[feedback-layer] Failed to toggle reaction:",n),or(`Failed to update reaction: ${n.message}`,"error")}}async function S8(e){try{await Qs(e),js(e),pe.delete(e),L=L.filter(r=>r.id!==e&&r.parent!==e),He(L,pe,Ee)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),or(`Failed to delete comment: ${r.message}`,"error")}}try{p8()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
