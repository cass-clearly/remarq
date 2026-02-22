var FeedbackLayer=(()=>{var gC=Object.create;var nc=Object.defineProperty;var bC=Object.getOwnPropertyDescriptor;var qC=Object.getOwnPropertyNames;var xC=Object.getPrototypeOf,wC=Object.prototype.hasOwnProperty;var i=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var SC=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of qC(r))!wC.call(e,a)&&a!==t&&nc(e,a,{get:()=>r[a],enumerable:!(n=bC(r,a))||n.enumerable});return e};var q=(e,r,t)=>(t=e!=null?gC(xC(e)):{},SC(r||!e||!e.__esModule?nc(t,"default",{value:e,enumerable:!0}):t,e));var P=i((VG,vc)=>{"use strict";vc.exports=function(e){try{return!!e()}catch{return!0}}});var $r=i((YG,dc)=>{"use strict";var TC=P();dc.exports=!TC(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var N=i((JG,yc)=>{"use strict";var mc=$r(),hc=Function.prototype,ni=hc.call,EC=mc&&hc.bind.bind(ni,ni);yc.exports=mc?EC:function(e){return function(){return ni.apply(e,arguments)}}});var U=i((QG,gc)=>{"use strict";var CC=N();gc.exports=CC({}.isPrototypeOf)});var R=i((ai,bc)=>{"use strict";var vt=function(e){return e&&e.Math===Math&&e};bc.exports=vt(typeof globalThis=="object"&&globalThis)||vt(typeof window=="object"&&window)||vt(typeof self=="object"&&self)||vt(typeof global=="object"&&global)||vt(typeof ai=="object"&&ai)||function(){return this}()||Function("return this")()});var Lr=i((XG,Sc)=>{"use strict";var OC=$r(),wc=Function.prototype,qc=wc.apply,xc=wc.call;Sc.exports=typeof Reflect=="object"&&Reflect.apply||(OC?xc.bind(qc):function(){return xc.apply(qc,arguments)})});var Ce=i((ZG,Ec)=>{"use strict";var Tc=N(),kC=Tc({}.toString),IC=Tc("".slice);Ec.exports=function(e){return IC(kC(e),8,-1)}});var dt=i((e6,Cc)=>{"use strict";var _C=Ce(),PC=N();Cc.exports=function(e){if(_C(e)==="Function")return PC(e)}});var M=i((r6,Oc)=>{"use strict";var ii=typeof document=="object"&&document.all;Oc.exports=typeof ii>"u"&&ii!==void 0?function(e){return typeof e=="function"||e===ii}:function(e){return typeof e=="function"}});var H=i((t6,kc)=>{"use strict";var RC=P();kc.exports=!RC(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var G=i((n6,Ic)=>{"use strict";var AC=$r(),qn=Function.prototype.call;Ic.exports=AC?qn.bind(qn):function(){return qn.apply(qn,arguments)}});var oi=i(Rc=>{"use strict";var _c={}.propertyIsEnumerable,Pc=Object.getOwnPropertyDescriptor,NC=Pc&&!_c.call({1:2},1);Rc.f=NC?function(r){var t=Pc(this,r);return!!t&&t.enumerable}:_c});var Qe=i((i6,Ac)=>{"use strict";Ac.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var xn=i((o6,Nc)=>{"use strict";var MC=N(),jC=P(),$C=Ce(),ui=Object,LC=MC("".split);Nc.exports=jC(function(){return!ui("z").propertyIsEnumerable(0)})?function(e){return $C(e)==="String"?LC(e,""):ui(e)}:ui});var lr=i((u6,Mc)=>{"use strict";Mc.exports=function(e){return e==null}});var fr=i((s6,jc)=>{"use strict";var FC=lr(),DC=TypeError;jc.exports=function(e){if(FC(e))throw new DC("Can't call method on "+e);return e}});var je=i((c6,$c)=>{"use strict";var BC=xn(),GC=fr();$c.exports=function(e){return BC(GC(e))}});var L=i((l6,Lc)=>{"use strict";var UC=M();Lc.exports=function(e){return typeof e=="object"?e!==null:UC(e)}});var V=i((f6,Fc)=>{"use strict";Fc.exports={}});var W=i((p6,Bc)=>{"use strict";var si=V(),ci=R(),HC=M(),Dc=function(e){return HC(e)?e:void 0};Bc.exports=function(e,r){return arguments.length<2?Dc(si[e])||Dc(ci[e]):si[e]&&si[e][r]||ci[e]&&ci[e][r]}});var Fr=i((v6,Hc)=>{"use strict";var WC=R(),Gc=WC.navigator,Uc=Gc&&Gc.userAgent;Hc.exports=Uc?String(Uc):""});var Dr=i((d6,Jc)=>{"use strict";var Yc=R(),li=Fr(),Wc=Yc.process,Kc=Yc.Deno,zc=Wc&&Wc.versions||Kc&&Kc.version,Vc=zc&&zc.v8,ge,wn;Vc&&(ge=Vc.split("."),wn=ge[0]>0&&ge[0]<4?1:+(ge[0]+ge[1]));!wn&&li&&(ge=li.match(/Edge\/(\d+)/),(!ge||ge[1]>=74)&&(ge=li.match(/Chrome\/(\d+)/),ge&&(wn=+ge[1])));Jc.exports=wn});var pr=i((m6,Xc)=>{"use strict";var Qc=Dr(),KC=P(),zC=R(),VC=zC.String;Xc.exports=!!Object.getOwnPropertySymbols&&!KC(function(){var e=Symbol("symbol detection");return!VC(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Qc&&Qc<41})});var fi=i((h6,Zc)=>{"use strict";var YC=pr();Zc.exports=YC&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Br=i((y6,el)=>{"use strict";var JC=W(),QC=M(),XC=U(),ZC=fi(),eO=Object;el.exports=ZC?function(e){return typeof e=="symbol"}:function(e){var r=JC("Symbol");return QC(r)&&XC(r.prototype,eO(e))}});var Xe=i((g6,rl)=>{"use strict";var rO=String;rl.exports=function(e){try{return rO(e)}catch{return"Object"}}});var D=i((b6,tl)=>{"use strict";var tO=M(),nO=Xe(),aO=TypeError;tl.exports=function(e){if(tO(e))return e;throw new aO(nO(e)+" is not a function")}});var Sn=i((q6,nl)=>{"use strict";var iO=D(),oO=lr();nl.exports=function(e,r){var t=e[r];return oO(t)?void 0:iO(t)}});var il=i((x6,al)=>{"use strict";var pi=G(),vi=M(),di=L(),uO=TypeError;al.exports=function(e,r){var t,n;if(r==="string"&&vi(t=e.toString)&&!di(n=pi(t,e))||vi(t=e.valueOf)&&!di(n=pi(t,e))||r!=="string"&&vi(t=e.toString)&&!di(n=pi(t,e)))return n;throw new uO("Can't convert object to primitive value")}});var ee=i((w6,ol)=>{"use strict";ol.exports=!0});var cl=i((S6,sl)=>{"use strict";var ul=R(),sO=Object.defineProperty;sl.exports=function(e,r){try{sO(ul,e,{value:r,configurable:!0,writable:!0})}catch{ul[e]=r}return r}});var mt=i((T6,pl)=>{"use strict";var cO=ee(),lO=R(),fO=cl(),ll="__core-js_shared__",fl=pl.exports=lO[ll]||fO(ll,{});(fl.versions||(fl.versions=[])).push({version:"3.48.0",mode:cO?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var vr=i((E6,dl)=>{"use strict";var vl=mt();dl.exports=function(e,r){return vl[e]||(vl[e]=r||{})}});var te=i((C6,ml)=>{"use strict";var pO=fr(),vO=Object;ml.exports=function(e){return vO(pO(e))}});var K=i((O6,hl)=>{"use strict";var dO=N(),mO=te(),hO=dO({}.hasOwnProperty);hl.exports=Object.hasOwn||function(r,t){return hO(mO(r),t)}});var Gr=i((k6,yl)=>{"use strict";var yO=N(),gO=0,bO=Math.random(),qO=yO(1.1.toString);yl.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+qO(++gO+bO,36)}});var A=i((I6,bl)=>{"use strict";var xO=R(),wO=vr(),gl=K(),SO=Gr(),TO=pr(),EO=fi(),Ur=xO.Symbol,mi=wO("wks"),CO=EO?Ur.for||Ur:Ur&&Ur.withoutSetter||SO;bl.exports=function(e){return gl(mi,e)||(mi[e]=TO&&gl(Ur,e)?Ur[e]:CO("Symbol."+e)),mi[e]}});var Sl=i((_6,wl)=>{"use strict";var OO=G(),ql=L(),xl=Br(),kO=Sn(),IO=il(),_O=A(),PO=TypeError,RO=_O("toPrimitive");wl.exports=function(e,r){if(!ql(e)||xl(e))return e;var t=kO(e,RO),n;if(t){if(r===void 0&&(r="default"),n=OO(t,e,r),!ql(n)||xl(n))return n;throw new PO("Can't convert object to primitive value")}return r===void 0&&(r="number"),IO(e,r)}});var Tn=i((P6,Tl)=>{"use strict";var AO=Sl(),NO=Br();Tl.exports=function(e){var r=AO(e,"string");return NO(r)?r:r+""}});var En=i((R6,Cl)=>{"use strict";var MO=R(),El=L(),hi=MO.document,jO=El(hi)&&El(hi.createElement);Cl.exports=function(e){return jO?hi.createElement(e):{}}});var yi=i((A6,Ol)=>{"use strict";var $O=H(),LO=P(),FO=En();Ol.exports=!$O&&!LO(function(){return Object.defineProperty(FO("div"),"a",{get:function(){return 7}}).a!==7})});var ht=i(Il=>{"use strict";var DO=H(),BO=G(),GO=oi(),UO=Qe(),HO=je(),WO=Tn(),KO=K(),zO=yi(),kl=Object.getOwnPropertyDescriptor;Il.f=DO?kl:function(r,t){if(r=HO(r),t=WO(t),zO)try{return kl(r,t)}catch{}if(KO(r,t))return UO(!BO(GO.f,r,t),r[t])}});var gi=i((M6,_l)=>{"use strict";var VO=P(),YO=M(),JO=/#|\.prototype\./,yt=function(e,r){var t=XO[QO(e)];return t===e1?!0:t===ZO?!1:YO(r)?VO(r):!!r},QO=yt.normalize=function(e){return String(e).replace(JO,".").toLowerCase()},XO=yt.data={},ZO=yt.NATIVE="N",e1=yt.POLYFILL="P";_l.exports=yt});var Y=i((j6,Rl)=>{"use strict";var Pl=dt(),r1=D(),t1=$r(),n1=Pl(Pl.bind);Rl.exports=function(e,r){return r1(e),r===void 0?e:t1?n1(e,r):function(){return e.apply(r,arguments)}}});var bi=i(($6,Al)=>{"use strict";var a1=H(),i1=P();Al.exports=a1&&i1(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var Z=i((L6,Nl)=>{"use strict";var o1=L(),u1=String,s1=TypeError;Nl.exports=function(e){if(o1(e))return e;throw new s1(u1(e)+" is not an object")}});var ne=i(jl=>{"use strict";var c1=H(),l1=yi(),f1=bi(),Cn=Z(),Ml=Tn(),p1=TypeError,qi=Object.defineProperty,v1=Object.getOwnPropertyDescriptor,xi="enumerable",wi="configurable",Si="writable";jl.f=c1?f1?function(r,t,n){if(Cn(r),t=Ml(t),Cn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&Si in n&&!n[Si]){var a=v1(r,t);a&&a[Si]&&(r[t]=n.value,n={configurable:wi in n?n[wi]:a[wi],enumerable:xi in n?n[xi]:a[xi],writable:!1})}return qi(r,t,n)}:qi:function(r,t,n){if(Cn(r),t=Ml(t),Cn(n),l1)try{return qi(r,t,n)}catch{}if("get"in n||"set"in n)throw new p1("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var Oe=i((D6,$l)=>{"use strict";var d1=H(),m1=ne(),h1=Qe();$l.exports=d1?function(e,r,t){return m1.f(e,r,h1(1,t))}:function(e,r,t){return e[r]=t,e}});var x=i((B6,Fl)=>{"use strict";var gt=R(),y1=Lr(),g1=dt(),b1=M(),q1=ht().f,x1=gi(),Hr=V(),w1=Y(),Wr=Oe(),Ll=K();mt();var S1=function(e){var r=function(t,n,a){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,a)}return y1(e,this,arguments)};return r.prototype=e.prototype,r};Fl.exports=function(e,r){var t=e.target,n=e.global,a=e.stat,o=e.proto,u=n?gt:a?gt[t]:gt[t]&&gt[t].prototype,s=n?Hr:Hr[t]||Wr(Hr,t,{})[t],c=s.prototype,l,f,v,p,d,h,m,y,g;for(p in r)l=x1(n?p:t+(a?".":"#")+p,e.forced),f=!l&&u&&Ll(u,p),h=s[p],f&&(e.dontCallGetSet?(g=q1(u,p),m=g&&g.value):m=u[p]),d=f&&m?m:r[p],!(!l&&!o&&typeof h==typeof d)&&(e.bind&&f?y=w1(d,gt):e.wrap&&f?y=S1(d):o&&b1(d)?y=g1(d):y=d,(e.sham||d&&d.sham||h&&h.sham)&&Wr(y,"sham",!0),Wr(s,p,y),o&&(v=t+"Prototype",Ll(Hr,v)||Wr(Hr,v,{}),Wr(Hr[v],p,d),e.real&&c&&(l||!c[p])&&Wr(c,p,d)))}});var $e=i((G6,Dl)=>{"use strict";var T1=Ce();Dl.exports=Array.isArray||function(r){return T1(r)==="Array"}});var On=i((U6,Gl)=>{"use strict";var E1=A(),C1=E1("toStringTag"),Bl={};Bl[C1]="z";Gl.exports=String(Bl)==="[object z]"});var bt=i((H6,Ul)=>{"use strict";var O1=On(),k1=M(),kn=Ce(),I1=A(),_1=I1("toStringTag"),P1=Object,R1=kn(function(){return arguments}())==="Arguments",A1=function(e,r){try{return e[r]}catch{}};Ul.exports=O1?kn:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=A1(r=P1(e),_1))=="string"?t:R1?kn(r):(n=kn(r))==="Object"&&k1(r.callee)?"Arguments":n}});var Ei=i((W6,Hl)=>{"use strict";var N1=N(),M1=M(),Ti=mt(),j1=N1(Function.toString);M1(Ti.inspectSource)||(Ti.inspectSource=function(e){return j1(e)});Hl.exports=Ti.inspectSource});var xt=i((K6,Yl)=>{"use strict";var $1=N(),L1=P(),Wl=M(),F1=bt(),D1=W(),B1=Ei(),Kl=function(){},zl=D1("Reflect","construct"),Ci=/^\s*(?:class|function)\b/,G1=$1(Ci.exec),U1=!Ci.test(Kl),qt=function(r){if(!Wl(r))return!1;try{return zl(Kl,[],r),!0}catch{return!1}},Vl=function(r){if(!Wl(r))return!1;switch(F1(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return U1||!!G1(Ci,B1(r))}catch{return!0}};Vl.sham=!0;Yl.exports=!zl||L1(function(){var e;return qt(qt.call)||!qt(Object)||!qt(function(){e=!0})||e})?Vl:qt});var Ql=i((z6,Jl)=>{"use strict";var H1=Math.ceil,W1=Math.floor;Jl.exports=Math.trunc||function(r){var t=+r;return(t>0?W1:H1)(t)}});var In=i((V6,Xl)=>{"use strict";var K1=Ql();Xl.exports=function(e){var r=+e;return r!==r||r===0?0:K1(r)}});var Oi=i((Y6,Zl)=>{"use strict";var z1=In(),V1=Math.max,Y1=Math.min;Zl.exports=function(e,r){var t=z1(e);return t<0?V1(t+r,0):Y1(t,r)}});var ki=i((J6,ef)=>{"use strict";var J1=In(),Q1=Math.min;ef.exports=function(e){var r=J1(e);return r>0?Q1(r,9007199254740991):0}});var de=i((Q6,rf)=>{"use strict";var X1=ki();rf.exports=function(e){return X1(e.length)}});var Kr=i((X6,tf)=>{"use strict";var Z1=H(),ek=ne(),rk=Qe();tf.exports=function(e,r,t){Z1?ek.f(e,r,rk(0,t)):e[r]=t}});var zr=i((Z6,nf)=>{"use strict";var tk=H(),nk=$e(),ak=TypeError,ik=Object.getOwnPropertyDescriptor,ok=tk&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();nf.exports=ok?function(e,r){if(nk(e)&&!ik(e,"length").writable)throw new ak("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var wt=i((e8,af)=>{"use strict";var uk=P(),sk=A(),ck=Dr(),lk=sk("species");af.exports=function(e){return ck>=51||!uk(function(){var r=[],t=r.constructor={};return t[lk]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var dr=i((r8,of)=>{"use strict";var fk=N();of.exports=fk([].slice)});var cf=i(()=>{"use strict";var pk=x(),uf=$e(),vk=xt(),dk=L(),sf=Oi(),mk=de(),hk=je(),yk=Kr(),gk=zr(),bk=A(),qk=wt(),xk=dr(),wk=qk("slice"),Sk=bk("species"),Ii=Array,Tk=Math.max;pk({target:"Array",proto:!0,forced:!wk},{slice:function(r,t){var n=hk(this),a=mk(n),o=sf(r,a),u=sf(t===void 0?a:t,a),s,c,l;if(uf(n)&&(s=n.constructor,vk(s)&&(s===Ii||uf(s.prototype))?s=void 0:dk(s)&&(s=s[Sk],s===null&&(s=void 0)),s===Ii||s===void 0))return xk(n,o,u);for(c=new(s===void 0?Ii:s)(Tk(u-o,0)),l=0;o<u;o++,l++)o in n&&yk(c,l,n[o]);return gk(c,l),c}})});var se=i((a8,lf)=>{"use strict";var Ek=R(),Ck=V();lf.exports=function(e,r){var t=Ck[e+"Prototype"],n=t&&t[r];if(n)return n;var a=Ek[e],o=a&&a.prototype;return o&&o[r]}});var pf=i((i8,ff)=>{"use strict";cf();var Ok=se();ff.exports=Ok("Array","slice")});var df=i((o8,vf)=>{"use strict";var kk=U(),Ik=pf(),_i=Array.prototype;vf.exports=function(e){var r=e.slice;return e===_i||kk(_i,e)&&r===_i.slice?Ik:r}});var hf=i((u8,mf)=>{"use strict";var _k=df();mf.exports=_k});var gf=i((s8,yf)=>{"use strict";var Pk=hf();yf.exports=Pk});var qf=i((c8,bf)=>{"use strict";var Rk=gf();bf.exports=Rk});var Pi=i((l8,xf)=>{"use strict";xf.exports=qf()});var Vr=i((f8,wf)=>{wf.exports=Pi()});var Ze=i((p8,Sf)=>{"use strict";var Ak=bt(),Nk=String;Sf.exports=function(e){if(Ak(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return Nk(e)}});var Of=i((v8,Cf)=>{"use strict";var Ri=N(),Mk=In(),jk=Ze(),$k=fr(),Lk=Ri("".charAt),Tf=Ri("".charCodeAt),Fk=Ri("".slice),Ef=function(e){return function(r,t){var n=jk($k(r)),a=Mk(t),o=n.length,u,s;return a<0||a>=o?e?"":void 0:(u=Tf(n,a),u<55296||u>56319||a+1===o||(s=Tf(n,a+1))<56320||s>57343?e?Lk(n,a):u:e?Fk(n,a,a+2):(u-55296<<10)+(s-56320)+65536)}};Cf.exports={codeAt:Ef(!1),charAt:Ef(!0)}});var _f=i((d8,If)=>{"use strict";var Dk=R(),Bk=M(),kf=Dk.WeakMap;If.exports=Bk(kf)&&/native code/.test(String(kf))});var St=i((m8,Rf)=>{"use strict";var Gk=vr(),Uk=Gr(),Pf=Gk("keys");Rf.exports=function(e){return Pf[e]||(Pf[e]=Uk(e))}});var Yr=i((h8,Af)=>{"use strict";Af.exports={}});var er=i((y8,jf)=>{"use strict";var Hk=_f(),Mf=R(),Wk=L(),Kk=Oe(),Ai=K(),Ni=mt(),zk=St(),Vk=Yr(),Nf="Object already initialized",Mi=Mf.TypeError,Yk=Mf.WeakMap,_n,Tt,Pn,Jk=function(e){return Pn(e)?Tt(e):_n(e,{})},Qk=function(e){return function(r){var t;if(!Wk(r)||(t=Tt(r)).type!==e)throw new Mi("Incompatible receiver, "+e+" required");return t}};Hk||Ni.state?(be=Ni.state||(Ni.state=new Yk),be.get=be.get,be.has=be.has,be.set=be.set,_n=function(e,r){if(be.has(e))throw new Mi(Nf);return r.facade=e,be.set(e,r),r},Tt=function(e){return be.get(e)||{}},Pn=function(e){return be.has(e)}):(mr=zk("state"),Vk[mr]=!0,_n=function(e,r){if(Ai(e,mr))throw new Mi(Nf);return r.facade=e,Kk(e,mr,r),r},Tt=function(e){return Ai(e,mr)?e[mr]:{}},Pn=function(e){return Ai(e,mr)});var be,mr;jf.exports={set:_n,get:Tt,has:Pn,enforce:Jk,getterFor:Qk}});var Ff=i((g8,Lf)=>{"use strict";var ji=H(),Xk=K(),$f=Function.prototype,Zk=ji&&Object.getOwnPropertyDescriptor,$i=Xk($f,"name"),eI=$i&&function(){}.name==="something",rI=$i&&(!ji||ji&&Zk($f,"name").configurable);Lf.exports={EXISTS:$i,PROPER:eI,CONFIGURABLE:rI}});var Li=i((b8,Bf)=>{"use strict";var tI=je(),nI=Oi(),aI=de(),Df=function(e){return function(r,t,n){var a=tI(r),o=aI(a);if(o===0)return!e&&-1;var u=nI(n,o),s;if(e&&t!==t){for(;o>u;)if(s=a[u++],s!==s)return!0}else for(;o>u;u++)if((e||u in a)&&a[u]===t)return e||u||0;return!e&&-1}};Bf.exports={includes:Df(!0),indexOf:Df(!1)}});var Di=i((q8,Uf)=>{"use strict";var iI=N(),Fi=K(),oI=je(),uI=Li().indexOf,sI=Yr(),Gf=iI([].push);Uf.exports=function(e,r){var t=oI(e),n=0,a=[],o;for(o in t)!Fi(sI,o)&&Fi(t,o)&&Gf(a,o);for(;r.length>n;)Fi(t,o=r[n++])&&(~uI(a,o)||Gf(a,o));return a}});var Rn=i((x8,Hf)=>{"use strict";Hf.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var An=i((w8,Wf)=>{"use strict";var cI=Di(),lI=Rn();Wf.exports=Object.keys||function(r){return cI(r,lI)}});var Bi=i(Kf=>{"use strict";var fI=H(),pI=bi(),vI=ne(),dI=Z(),mI=je(),hI=An();Kf.f=fI&&!pI?Object.defineProperties:function(r,t){dI(r);for(var n=mI(t),a=hI(t),o=a.length,u=0,s;o>u;)vI.f(r,s=a[u++],n[s]);return r}});var Gi=i((T8,zf)=>{"use strict";var yI=W();zf.exports=yI("document","documentElement")});var rr=i((E8,ep)=>{"use strict";var gI=Z(),bI=Bi(),Vf=Rn(),qI=Yr(),xI=Gi(),wI=En(),SI=St(),Yf=">",Jf="<",Hi="prototype",Wi="script",Xf=SI("IE_PROTO"),Ui=function(){},Zf=function(e){return Jf+Wi+Yf+e+Jf+"/"+Wi+Yf},Qf=function(e){e.write(Zf("")),e.close();var r=e.parentWindow.Object;return e=null,r},TI=function(){var e=wI("iframe"),r="java"+Wi+":",t;return e.style.display="none",xI.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(Zf("document.F=Object")),t.close(),t.F},Nn,Mn=function(){try{Nn=new ActiveXObject("htmlfile")}catch{}Mn=typeof document<"u"?document.domain&&Nn?Qf(Nn):TI():Qf(Nn);for(var e=Vf.length;e--;)delete Mn[Hi][Vf[e]];return Mn()};qI[Xf]=!0;ep.exports=Object.create||function(r,t){var n;return r!==null?(Ui[Hi]=gI(r),n=new Ui,Ui[Hi]=null,n[Xf]=r):n=Mn(),t===void 0?n:bI.f(n,t)}});var Ki=i((C8,rp)=>{"use strict";var EI=P();rp.exports=!EI(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var Et=i((O8,np)=>{"use strict";var CI=K(),OI=M(),kI=te(),II=St(),_I=Ki(),tp=II("IE_PROTO"),zi=Object,PI=zi.prototype;np.exports=_I?zi.getPrototypeOf:function(e){var r=kI(e);if(CI(r,tp))return r[tp];var t=r.constructor;return OI(t)&&r instanceof t?t.prototype:r instanceof zi?PI:null}});var Le=i((k8,ap)=>{"use strict";var RI=Oe();ap.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:RI(e,r,t),e}});var Qi=i((I8,up)=>{"use strict";var AI=P(),NI=M(),MI=L(),jI=rr(),ip=Et(),$I=Le(),LI=A(),FI=ee(),Ji=LI("iterator"),op=!1,Fe,Vi,Yi;[].keys&&(Yi=[].keys(),"next"in Yi?(Vi=ip(ip(Yi)),Vi!==Object.prototype&&(Fe=Vi)):op=!0);var DI=!MI(Fe)||AI(function(){var e={};return Fe[Ji].call(e)!==e});DI?Fe={}:FI&&(Fe=jI(Fe));NI(Fe[Ji])||$I(Fe,Ji,function(){return this});up.exports={IteratorPrototype:Fe,BUGGY_SAFARI_ITERATORS:op}});var cp=i((_8,sp)=>{"use strict";var BI=On(),GI=bt();sp.exports=BI?{}.toString:function(){return"[object "+GI(this)+"]"}});var De=i((P8,fp)=>{"use strict";var UI=On(),HI=ne().f,WI=Oe(),KI=K(),zI=cp(),VI=A(),lp=VI("toStringTag");fp.exports=function(e,r,t,n){var a=t?e:e&&e.prototype;a&&(KI(a,lp)||HI(a,lp,{configurable:!0,value:r}),n&&!UI&&WI(a,"toString",zI))}});var hr=i((R8,pp)=>{"use strict";pp.exports={}});var dp=i((A8,vp)=>{"use strict";var YI=Qi().IteratorPrototype,JI=rr(),QI=Qe(),XI=De(),ZI=hr(),e_=function(){return this};vp.exports=function(e,r,t,n){var a=r+" Iterator";return e.prototype=JI(YI,{next:QI(+!n,t)}),XI(e,a,!1,!0),ZI[a]=e_,e}});var hp=i((N8,mp)=>{"use strict";var r_=N(),t_=D();mp.exports=function(e,r,t){try{return r_(t_(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var gp=i((M8,yp)=>{"use strict";var n_=L();yp.exports=function(e){return n_(e)||e===null}});var qp=i((j8,bp)=>{"use strict";var a_=gp(),i_=String,o_=TypeError;bp.exports=function(e){if(a_(e))return e;throw new o_("Can't set "+i_(e)+" as a prototype")}});var Ct=i(($8,xp)=>{"use strict";var u_=hp(),s_=L(),c_=fr(),l_=qp();xp.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=u_(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(a,o){return c_(a),l_(o),s_(a)&&(e?t(a,o):a.__proto__=o),a}}():void 0)});var Ln=i((L8,Pp)=>{"use strict";var f_=x(),p_=G(),jn=ee(),Ip=Ff(),v_=M(),d_=dp(),wp=Et(),Sp=Ct(),m_=De(),h_=Oe(),Xi=Le(),y_=A(),Tp=hr(),_p=Qi(),g_=Ip.PROPER,b_=Ip.CONFIGURABLE,Ep=_p.IteratorPrototype,$n=_p.BUGGY_SAFARI_ITERATORS,Ot=y_("iterator"),Cp="keys",kt="values",Op="entries",kp=function(){return this};Pp.exports=function(e,r,t,n,a,o,u){d_(t,r,n);var s=function(g){if(g===a&&p)return p;if(!$n&&g&&g in f)return f[g];switch(g){case Cp:return function(){return new t(this,g)};case kt:return function(){return new t(this,g)};case Op:return function(){return new t(this,g)}}return function(){return new t(this)}},c=r+" Iterator",l=!1,f=e.prototype,v=f[Ot]||f["@@iterator"]||a&&f[a],p=!$n&&v||s(a),d=r==="Array"&&f.entries||v,h,m,y;if(d&&(h=wp(d.call(new e)),h!==Object.prototype&&h.next&&(!jn&&wp(h)!==Ep&&(Sp?Sp(h,Ep):v_(h[Ot])||Xi(h,Ot,kp)),m_(h,c,!0,!0),jn&&(Tp[c]=kp))),g_&&a===kt&&v&&v.name!==kt&&(!jn&&b_?h_(f,"name",kt):(l=!0,p=function(){return p_(v,this)})),a)if(m={values:s(kt),keys:o?p:s(Cp),entries:s(Op)},u)for(y in m)($n||l||!(y in f))&&Xi(f,y,m[y]);else f_({target:r,proto:!0,forced:$n||l},m);return(!jn||u)&&f[Ot]!==p&&Xi(f,Ot,p,{name:a}),Tp[r]=p,m}});var Fn=i((F8,Rp)=>{"use strict";Rp.exports=function(e,r){return{value:e,done:r}}});var yr=i(()=>{"use strict";var q_=Of().charAt,x_=Ze(),Np=er(),w_=Ln(),Ap=Fn(),Mp="String Iterator",S_=Np.set,T_=Np.getterFor(Mp);w_(String,"String",function(e){S_(this,{type:Mp,string:x_(e),index:0})},function(){var r=T_(this),t=r.string,n=r.index,a;return n>=t.length?Ap(void 0,!0):(a=q_(t,n),r.index+=a.length,Ap(a,!1))})});var Zi=i((G8,$p)=>{"use strict";var E_=G(),jp=Z(),C_=Sn();$p.exports=function(e,r,t){var n,a;jp(e);try{if(n=C_(e,"return"),!n){if(r==="throw")throw t;return t}n=E_(n,e)}catch(o){a=!0,n=o}if(r==="throw")throw t;if(a)throw n;return jp(n),t}});var Fp=i((U8,Lp)=>{"use strict";var O_=Z(),k_=Zi();Lp.exports=function(e,r,t,n){try{return n?r(O_(t)[0],t[1]):r(t)}catch(a){k_(e,"throw",a)}}});var eo=i((H8,Dp)=>{"use strict";var I_=A(),__=hr(),P_=I_("iterator"),R_=Array.prototype;Dp.exports=function(e){return e!==void 0&&(__.Array===e||R_[P_]===e)}});var It=i((W8,Gp)=>{"use strict";var A_=bt(),Bp=Sn(),N_=lr(),M_=hr(),j_=A(),$_=j_("iterator");Gp.exports=function(e){if(!N_(e))return Bp(e,$_)||Bp(e,"@@iterator")||M_[A_(e)]}});var Dn=i((K8,Up)=>{"use strict";var L_=G(),F_=D(),D_=Z(),B_=Xe(),G_=It(),U_=TypeError;Up.exports=function(e,r){var t=arguments.length<2?G_(e):r;if(F_(t))return D_(L_(t,e));throw new U_(B_(e)+" is not iterable")}});var zp=i((z8,Kp)=>{"use strict";var H_=Y(),W_=G(),K_=te(),z_=Fp(),V_=eo(),Y_=xt(),J_=de(),Hp=Kr(),Q_=zr(),X_=Dn(),Z_=It(),Wp=Array;Kp.exports=function(r){var t=K_(r),n=Y_(this),a=arguments.length,o=a>1?arguments[1]:void 0,u=o!==void 0;u&&(o=H_(o,a>2?arguments[2]:void 0));var s=Z_(t),c=0,l,f,v,p,d,h;if(s&&!(this===Wp&&V_(s)))for(f=n?new this:[],p=X_(t,s),d=p.next;!(v=W_(d,p)).done;c++)h=u?z_(p,o,[v.value,c],!0):v.value,Hp(f,c,h);else for(l=J_(t),f=n?new this(l):Wp(l);l>c;c++)h=u?o(t[c],c):t[c],Hp(f,c,h);return Q_(f,c),f}});var to=i((V8,Qp)=>{"use strict";var eP=A(),Yp=eP("iterator"),Jp=!1;try{Vp=0,ro={next:function(){return{done:!!Vp++}},return:function(){Jp=!0}},ro[Yp]=function(){return this},Array.from(ro,function(){throw 2})}catch{}var Vp,ro;Qp.exports=function(e,r){try{if(!r&&!Jp)return!1}catch{return!1}var t=!1;try{var n={};n[Yp]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var Xp=i(()=>{"use strict";var rP=x(),tP=zp(),nP=to(),aP=!nP(function(e){Array.from(e)});rP({target:"Array",stat:!0,forced:aP},{from:tP})});var ev=i((Q8,Zp)=>{"use strict";yr();Xp();var iP=V();Zp.exports=iP.Array.from});var tv=i((X8,rv)=>{"use strict";var oP=ev();rv.exports=oP});var av=i((Z8,nv)=>{"use strict";var uP=tv();nv.exports=uP});var ov=i((eU,iv)=>{"use strict";var sP=av();iv.exports=sP});var no=i((rU,uv)=>{"use strict";uv.exports=ov()});var Bn=i((tU,sv)=>{sv.exports=no()});var _t=i((nU,cv)=>{"use strict";var cP=TypeError,lP=9007199254740991;cv.exports=function(e){if(e>lP)throw cP("Maximum allowed index exceeded");return e}});var vv=i((aU,pv)=>{"use strict";var lv=$e(),fP=xt(),pP=L(),vP=A(),dP=vP("species"),fv=Array;pv.exports=function(e){var r;return lv(e)&&(r=e.constructor,fP(r)&&(r===fv||lv(r.prototype))?r=void 0:pP(r)&&(r=r[dP],r===null&&(r=void 0))),r===void 0?fv:r}});var Gn=i((iU,dv)=>{"use strict";var mP=vv();dv.exports=function(e,r){return new(mP(e))(r===0?0:r)}});var ao=i(()=>{"use strict";var hP=x(),yP=P(),gP=$e(),bP=L(),qP=te(),xP=de(),mv=_t(),hv=Kr(),wP=zr(),SP=Gn(),TP=wt(),EP=A(),CP=Dr(),yv=EP("isConcatSpreadable"),OP=CP>=51||!yP(function(){var e=[];return e[yv]=!1,e.concat()[0]!==e}),kP=function(e){if(!bP(e))return!1;var r=e[yv];return r!==void 0?!!r:gP(e)},IP=!OP||!TP("concat");hP({target:"Array",proto:!0,arity:1,forced:IP},{concat:function(r){var t=qP(this),n=SP(t,0),a=0,o,u,s,c,l;for(o=-1,s=arguments.length;o<s;o++)if(l=o===-1?t:arguments[o],kP(l))for(c=xP(l),mv(a+c),u=0;u<c;u++,a++)u in l&&hv(n,a,l[u]);else mv(a+1),hv(n,a++,l);return wP(n,a),n}})});var Pt=i(()=>{});var Rt=i(gv=>{"use strict";var _P=Di(),PP=Rn(),RP=PP.concat("length","prototype");gv.f=Object.getOwnPropertyNames||function(r){return _P(r,RP)}});var io=i((fU,xv)=>{"use strict";var AP=Ce(),NP=je(),bv=Rt().f,MP=dr(),qv=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],jP=function(e){try{return bv(e)}catch{return MP(qv)}};xv.exports.f=function(r){return qv&&AP(r)==="Window"?jP(r):bv(NP(r))}});var Un=i(wv=>{"use strict";wv.f=Object.getOwnPropertySymbols});var Hn=i((vU,Sv)=>{"use strict";var $P=ne();Sv.exports=function(e,r,t){return $P.f(e,r,t)}});var Jr=i(Tv=>{"use strict";var LP=A();Tv.f=LP});var j=i((mU,Cv)=>{"use strict";var Ev=V(),FP=K(),DP=Jr(),BP=ne().f;Cv.exports=function(e){var r=Ev.Symbol||(Ev.Symbol={});FP(r,e)||BP(r,e,{value:DP.f(e)})}});var oo=i((hU,Ov)=>{"use strict";var GP=G(),UP=W(),HP=A(),WP=Le();Ov.exports=function(){var e=UP("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=HP("toPrimitive");r&&!r[n]&&WP(r,n,function(a){return GP(t,this)},{arity:1})}});var At=i((yU,Iv)=>{"use strict";var KP=Y(),zP=xn(),VP=te(),YP=de(),kv=Gn(),uo=Kr(),tr=function(e){var r=e===1,t=e===2,n=e===3,a=e===4,o=e===6,u=e===7,s=e===5||o;return function(c,l,f){for(var v=VP(c),p=zP(v),d=YP(p),h=KP(l,f),m=0,y=0,g=r?kv(c,d):t||u?kv(c,0):void 0,b,k;d>m;m++)if((s||m in p)&&(b=p[m],k=h(b,m,v),e))if(r)uo(g,m,k);else if(k)switch(e){case 3:return!0;case 5:return b;case 6:return m;case 2:uo(g,y++,b)}else switch(e){case 4:return!1;case 7:uo(g,y++,b)}return o?-1:n||a?a:g}};Iv.exports={forEach:tr(0),map:tr(1),filter:tr(2),some:tr(3),every:tr(4),find:tr(5),findIndex:tr(6),filterReject:tr(7)}});var Kv=i(()=>{"use strict";var Wn=x(),jt=R(),yo=G(),JP=N(),QP=ee(),Qr=H(),Xr=pr(),XP=P(),z=K(),ZP=U(),fo=Z(),Kn=je(),go=Tn(),eR=Ze(),po=Qe(),Zr=rr(),Rv=An(),rR=Rt(),Av=io(),tR=Un(),Nv=ht(),Mv=ne(),nR=Bi(),jv=oi(),so=Le(),aR=Hn(),bo=vr(),iR=St(),$v=Yr(),_v=Gr(),oR=A(),uR=Jr(),sR=j(),cR=oo(),lR=De(),Lv=er(),zn=At().forEach,ae=iR("hidden"),Vn="Symbol",Mt="prototype",fR=Lv.set,Pv=Lv.getterFor(Vn),me=Object[Mt],gr=jt.Symbol,Nt=gr&&gr[Mt],pR=jt.RangeError,vR=jt.TypeError,co=jt.QObject,Fv=Nv.f,br=Mv.f,Dv=Av.f,dR=jv.f,Bv=JP([].push),Be=bo("symbols"),$t=bo("op-symbols"),mR=bo("wks"),vo=!co||!co[Mt]||!co[Mt].findChild,Gv=function(e,r,t){var n=Fv(me,r);n&&delete me[r],br(e,r,t),n&&e!==me&&br(me,r,n)},mo=Qr&&XP(function(){return Zr(br({},"a",{get:function(){return br(this,"a",{value:7}).a}})).a!==7})?Gv:br,lo=function(e,r){var t=Be[e]=Zr(Nt);return fR(t,{type:Vn,tag:e,description:r}),Qr||(t.description=r),t},Yn=function(r,t,n){r===me&&Yn($t,t,n),fo(r);var a=go(t);return fo(n),z(Be,a)?(n.enumerable?(z(r,ae)&&r[ae][a]&&(r[ae][a]=!1),n=Zr(n,{enumerable:po(0,!1)})):(z(r,ae)||br(r,ae,po(1,Zr(null))),r[ae][a]=!0),mo(r,a,n)):br(r,a,n)},qo=function(r,t){fo(r);var n=Kn(t),a=Rv(n).concat(Wv(n));return zn(a,function(o){(!Qr||yo(ho,n,o))&&Yn(r,o,n[o])}),r},hR=function(r,t){return t===void 0?Zr(r):qo(Zr(r),t)},ho=function(r){var t=go(r),n=yo(dR,this,t);return this===me&&z(Be,t)&&!z($t,t)?!1:n||!z(this,t)||!z(Be,t)||z(this,ae)&&this[ae][t]?n:!0},Uv=function(r,t){var n=Kn(r),a=go(t);if(!(n===me&&z(Be,a)&&!z($t,a))){var o=Fv(n,a);return o&&z(Be,a)&&!(z(n,ae)&&n[ae][a])&&(o.enumerable=!0),o}},Hv=function(r){var t=Dv(Kn(r)),n=[];return zn(t,function(a){!z(Be,a)&&!z($v,a)&&Bv(n,a)}),n},Wv=function(e){var r=e===me,t=Dv(r?$t:Kn(e)),n=[];return zn(t,function(a){z(Be,a)&&(!r||z(me,a))&&Bv(n,Be[a])}),n};Xr||(gr=function(){if(ZP(Nt,this))throw new vR("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:eR(arguments[0]),t=_v(r),n=function(a){var o=this===void 0?jt:this;o===me&&yo(n,$t,a),z(o,ae)&&z(o[ae],t)&&(o[ae][t]=!1);var u=po(1,a);try{mo(o,t,u)}catch(s){if(!(s instanceof pR))throw s;Gv(o,t,u)}};return Qr&&vo&&mo(me,t,{configurable:!0,set:n}),lo(t,r)},Nt=gr[Mt],so(Nt,"toString",function(){return Pv(this).tag}),so(gr,"withoutSetter",function(e){return lo(_v(e),e)}),jv.f=ho,Mv.f=Yn,nR.f=qo,Nv.f=Uv,rR.f=Av.f=Hv,tR.f=Wv,uR.f=function(e){return lo(oR(e),e)},Qr&&(aR(Nt,"description",{configurable:!0,get:function(){return Pv(this).description}}),QP||so(me,"propertyIsEnumerable",ho,{unsafe:!0})));Wn({global:!0,constructor:!0,wrap:!0,forced:!Xr,sham:!Xr},{Symbol:gr});zn(Rv(mR),function(e){sR(e)});Wn({target:Vn,stat:!0,forced:!Xr},{useSetter:function(){vo=!0},useSimple:function(){vo=!1}});Wn({target:"Object",stat:!0,forced:!Xr,sham:!Qr},{create:hR,defineProperty:Yn,defineProperties:qo,getOwnPropertyDescriptor:Uv});Wn({target:"Object",stat:!0,forced:!Xr},{getOwnPropertyNames:Hv});cR();lR(gr,Vn);$v[ae]=!0});var xo=i((qU,zv)=>{"use strict";var yR=pr();zv.exports=yR&&!!Symbol.for&&!!Symbol.keyFor});var Yv=i(()=>{"use strict";var gR=x(),bR=W(),qR=K(),xR=Ze(),Vv=vr(),wR=xo(),wo=Vv("string-to-symbol-registry"),SR=Vv("symbol-to-string-registry");gR({target:"Symbol",stat:!0,forced:!wR},{for:function(e){var r=xR(e);if(qR(wo,r))return wo[r];var t=bR("Symbol")(r);return wo[r]=t,SR[t]=r,t}})});var Qv=i(()=>{"use strict";var TR=x(),ER=K(),CR=Br(),OR=Xe(),kR=vr(),IR=xo(),Jv=kR("symbol-to-string-registry");TR({target:"Symbol",stat:!0,forced:!IR},{keyFor:function(r){if(!CR(r))throw new TypeError(OR(r)+" is not a symbol");if(ER(Jv,r))return Jv[r]}})});var Zv=i((EU,Xv)=>{"use strict";var _R=L(),PR=er().get;Xv.exports=function(r){if(!_R(r))return!1;var t=PR(r);return!!t&&t.type==="RawJSON"}});var ad=i((CU,nd)=>{"use strict";var So=N(),RR=K(),Jn=SyntaxError,AR=parseInt,NR=String.fromCharCode,MR=So("".charAt),ed=So("".slice),rd=So(/./.exec),td={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},jR=/^[\da-f]{4}$/i,$R=/^[\u0000-\u001F]$/;nd.exports=function(e,r){for(var t=!0,n="";r<e.length;){var a=MR(e,r);if(a==="\\"){var o=ed(e,r,r+2);if(RR(td,o))n+=td[o],r+=2;else if(o==="\\u"){r+=2;var u=ed(e,r,r+4);if(!rd(jR,u))throw new Jn("Bad Unicode escape at: "+r);n+=NR(AR(u,16)),r+=4}else throw new Jn('Unknown escape sequence: "'+o+'"')}else if(a==='"'){t=!1,r++;break}else{if(rd($R,a))throw new Jn("Bad control character in string literal at: "+r);n+=a,r++}}if(t)throw new Jn("Unterminated string at: "+r);return{value:n,end:r}}});var od=i((OU,id)=>{"use strict";var LR=P();id.exports=!LR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var qd=i(()=>{"use strict";var FR=x(),dd=W(),DR=Lr(),md=G(),qr=N(),hd=P(),ud=$e(),Xn=M(),BR=Zv(),sd=Br(),cd=Ce(),GR=Ze(),UR=dr(),HR=ad(),WR=Gr(),KR=pr(),To=od(),yd=String,nr=dd("JSON","stringify"),Qn=qr(/./.exec),Co=qr("".charAt),zR=qr("".charCodeAt),VR=qr("".replace),Eo=qr("".slice),Oo=qr([].push),YR=qr(1.1.toString),JR=/[\uD800-\uDFFF]/g,ld=/^[\uD800-\uDBFF]$/,fd=/^[\uDC00-\uDFFF]$/,ko=WR(),pd=ko.length,gd=!KR||hd(function(){var e=dd("Symbol")("stringify detection");return nr([e])!=="[null]"||nr({a:e})!=="{}"||nr(Object(e))!=="{}"}),vd=hd(function(){return nr("\uDF06\uD834")!=='"\\udf06\\ud834"'||nr("\uDEAD")!=='"\\udead"'}),QR=gd?function(e,r){var t=UR(arguments),n=bd(r);if(!(!Xn(n)&&(e===void 0||sd(e))))return t[1]=function(a,o){if(Xn(n)&&(o=md(n,this,yd(a),o)),!sd(o))return o},DR(nr,null,t)}:nr,XR=function(e,r,t){var n=Co(t,r-1),a=Co(t,r+1);return Qn(ld,e)&&!Qn(fd,a)||Qn(fd,e)&&!Qn(ld,n)?"\\u"+YR(zR(e,0),16):e},bd=function(e){if(Xn(e))return e;if(ud(e)){for(var r=e.length,t=[],n=0;n<r;n++){var a=e[n];typeof a=="string"?Oo(t,a):(typeof a=="number"||cd(a)==="Number"||cd(a)==="String")&&Oo(t,GR(a))}var o=t.length,u=!0;return function(s,c){if(u)return u=!1,c;if(ud(this))return c;for(var l=0;l<o;l++)if(t[l]===s)return c}}};nr&&FR({target:"JSON",stat:!0,arity:3,forced:gd||vd||!To},{stringify:function(r,t,n){var a=bd(t),o=[],u=QR(r,function(d,h){var m=Xn(a)?md(a,this,yd(d),h):h;return!To&&BR(m)?ko+(Oo(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(vd&&(u=VR(u,JR,XR)),To))return u;for(var s="",c=u.length,l=0;l<c;l++){var f=Co(u,l);if(f==='"'){var v=HR(u,++l).end-1,p=Eo(u,l,v);s+=Eo(p,0,pd)===ko?o[Eo(p,pd)]:'"'+p+'"',l=v}else s+=f}return s}})});var wd=i(()=>{"use strict";var ZR=x(),eA=pr(),rA=P(),xd=Un(),tA=te(),nA=!eA||rA(function(){xd.f(1)});ZR({target:"Object",stat:!0,forced:nA},{getOwnPropertySymbols:function(r){var t=xd.f;return t?t(tA(r)):[]}})});var Sd=i(()=>{"use strict";Kv();Yv();Qv();qd();wd()});var Io=i(()=>{"use strict";var aA=j();aA("asyncDispose")});var _o=i(()=>{"use strict";var iA=j();iA("asyncIterator")});var Td=i(()=>{});var Po=i(()=>{"use strict";var oA=j();oA("dispose")});var Ed=i(()=>{"use strict";var uA=j();uA("hasInstance")});var Cd=i(()=>{"use strict";var sA=j();sA("isConcatSpreadable")});var Ro=i(()=>{"use strict";var cA=j();cA("iterator")});var Od=i(()=>{"use strict";var lA=j();lA("match")});var kd=i(()=>{"use strict";var fA=j();fA("matchAll")});var Id=i(()=>{"use strict";var pA=j();pA("replace")});var _d=i(()=>{"use strict";var vA=j();vA("search")});var Pd=i(()=>{"use strict";var dA=j();dA("species")});var Rd=i(()=>{"use strict";var mA=j();mA("split")});var Ao=i(()=>{"use strict";var hA=j(),yA=oo();hA("toPrimitive");yA()});var Ad=i(()=>{"use strict";var gA=W(),bA=j(),qA=De();bA("toStringTag");qA(gA("Symbol"),"Symbol")});var Nd=i(()=>{"use strict";var xA=j();xA("unscopables")});var Md=i(()=>{"use strict";var wA=R(),SA=De();SA(wA.JSON,"JSON",!0)});var jd=i(()=>{});var $d=i(()=>{});var Fd=i((gH,Ld)=>{"use strict";ao();Pt();Sd();Io();_o();Td();Po();Ed();Cd();Ro();Od();kd();Id();_d();Pd();Rd();Ao();Ad();Nd();Md();jd();$d();var TA=V();Ld.exports=TA.Symbol});var No=i((bH,Dd)=>{"use strict";Dd.exports=function(){}});var xr=i((qH,Wd)=>{"use strict";var EA=je(),Mo=No(),Bd=hr(),Ud=er(),CA=ne().f,OA=Ln(),Zn=Fn(),kA=ee(),IA=H(),Hd="Array Iterator",_A=Ud.set,PA=Ud.getterFor(Hd);Wd.exports=OA(Array,"Array",function(e,r){_A(this,{type:Hd,target:EA(e),index:0,kind:r})},function(){var e=PA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,Zn(void 0,!0);switch(e.kind){case"keys":return Zn(t,!1);case"values":return Zn(r[t],!1)}return Zn([t,r[t]],!1)},"values");var Gd=Bd.Arguments=Bd.Array;Mo("keys");Mo("values");Mo("entries");if(!kA&&IA&&Gd.name!=="values")try{CA(Gd,"name",{value:"values"})}catch{}});var zd=i((xH,Kd)=>{"use strict";Kd.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var wr=i(()=>{"use strict";xr();var RA=zd(),AA=R(),NA=De(),Vd=hr();for(ea in RA)NA(AA[ea],ea),Vd[ea]=Vd.Array;var ea});var Jd=i((TH,Yd)=>{"use strict";var MA=Fd();wr();Yd.exports=MA});var Zd=i(()=>{"use strict";var jA=A(),$A=ne().f,Qd=jA("metadata"),Xd=Function.prototype;Xd[Qd]===void 0&&$A(Xd,Qd,{value:null})});var em=i(()=>{"use strict";Io()});var rm=i(()=>{"use strict";Po()});var tm=i(()=>{"use strict";var LA=j();LA("metadata")});var am=i((AH,nm)=>{"use strict";var FA=Jd();Zd();em();rm();tm();nm.exports=FA});var $o=i((NH,im)=>{"use strict";var DA=W(),BA=N(),jo=DA("Symbol"),GA=jo.keyFor,UA=BA(jo.prototype.valueOf);im.exports=jo.isRegisteredSymbol||function(r){try{return GA(UA(r))!==void 0}catch{return!1}}});var om=i(()=>{"use strict";var HA=x(),WA=$o();HA({target:"Symbol",stat:!0},{isRegisteredSymbol:WA})});var Do=i(($H,pm)=>{"use strict";var KA=vr(),lm=W(),zA=N(),VA=Br(),YA=A(),ta=lm("Symbol"),um=ta.isWellKnownSymbol,fm=lm("Object","getOwnPropertyNames"),JA=zA(ta.prototype.valueOf),sm=KA("wks");for(ra=0,Lo=fm(ta),cm=Lo.length;ra<cm;ra++)try{Fo=Lo[ra],VA(ta[Fo])&&YA(Fo)}catch{}var Fo,ra,Lo,cm;pm.exports=function(r){if(um&&um(r))return!0;try{for(var t=JA(r),n=0,a=fm(sm),o=a.length;n<o;n++)if(sm[a[n]]==t)return!0}catch{}return!1}});var vm=i(()=>{"use strict";var QA=x(),XA=Do();QA({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:XA})});var dm=i(()=>{"use strict";var ZA=j();ZA("customMatcher")});var mm=i(()=>{"use strict";var e2=j();e2("observable")});var hm=i(()=>{"use strict";var r2=x(),t2=$o();r2({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:t2})});var ym=i(()=>{"use strict";var n2=x(),a2=Do();n2({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:a2})});var gm=i(()=>{"use strict";var i2=j();i2("matcher")});var bm=i(()=>{"use strict";var o2=j();o2("metadataKey")});var qm=i(()=>{"use strict";var u2=j();u2("patternMatch")});var xm=i(()=>{"use strict";var s2=j();s2("replaceAll")});var Sm=i((tW,wm)=>{"use strict";var c2=am();om();vm();dm();mm();hm();ym();gm();bm();qm();xm();wm.exports=c2});var ke=i((nW,Tm)=>{"use strict";Tm.exports=Sm()});var na=i((aW,Em)=>{Em.exports=ke()});var Om=i((iW,Cm)=>{"use strict";xr();yr();var l2=It();Cm.exports=l2});var Im=i((oW,km)=>{"use strict";var f2=Om();wr();km.exports=f2});var Pm=i((uW,_m)=>{"use strict";var p2=Im();_m.exports=p2});var Am=i((sW,Rm)=>{"use strict";var v2=Pm();Rm.exports=v2});var Bo=i((cW,Nm)=>{"use strict";Nm.exports=Am()});var aa=i((lW,Mm)=>{Mm.exports=Bo()});var $m=i((fW,jm)=>{"use strict";xr();yr();var d2=Dn();jm.exports=d2});var Fm=i((pW,Lm)=>{"use strict";var m2=$m();wr();Lm.exports=m2});var Bm=i((vW,Dm)=>{"use strict";var h2=Fm();Dm.exports=h2});var Um=i((dW,Gm)=>{"use strict";var y2=Bm();Gm.exports=y2});var Wm=i((mW,Hm)=>{"use strict";Hm.exports=Um()});var ia=i((hW,Km)=>{Km.exports=Wm()});var Vm=i((yW,zm)=>{"use strict";var g2=W(),b2=N(),q2=Rt(),x2=Un(),w2=Z(),S2=b2([].concat);zm.exports=g2("Reflect","ownKeys")||function(r){var t=q2.f(w2(r)),n=x2.f;return n?S2(t,n(r)):t}});var Qm=i((gW,Jm)=>{"use strict";var Ym=K(),T2=Vm(),E2=ht(),C2=ne();Jm.exports=function(e,r,t){for(var n=T2(r),a=C2.f,o=E2.f,u=0;u<n.length;u++){var s=n[u];!Ym(e,s)&&!(t&&Ym(t,s))&&a(e,s,o(r,s))}}});var Zm=i((bW,Xm)=>{"use strict";var O2=L(),k2=Oe();Xm.exports=function(e,r){O2(r)&&"cause"in r&&k2(e,"cause",r.cause)}});var nh=i((qW,th)=>{"use strict";var I2=N(),eh=Error,_2=I2("".replace),P2=function(e){return String(new eh(e).stack)}("zxcasd"),rh=/\n\s*at [^:]*:[^\n]*/,R2=rh.test(P2);th.exports=function(e,r){if(R2&&typeof e=="string"&&!eh.prepareStackTrace)for(;r--;)e=_2(e,rh,"");return e}});var ih=i((xW,ah)=>{"use strict";var A2=P(),N2=Qe();ah.exports=!A2(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",N2(1,7)),e.stack!==7):!0})});var sh=i((wW,uh)=>{"use strict";var M2=Oe(),j2=nh(),$2=ih(),oh=Error.captureStackTrace;uh.exports=function(e,r,t,n){$2&&(oh?oh(e,r):M2(e,"stack",j2(t,n)))}});var he=i((SW,ph)=>{"use strict";var L2=Y(),F2=G(),D2=Z(),B2=Xe(),G2=eo(),U2=de(),ch=U(),H2=Dn(),W2=It(),lh=Zi(),K2=TypeError,oa=function(e,r){this.stopped=e,this.result=r},fh=oa.prototype;ph.exports=function(e,r,t){var n=t&&t.that,a=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),s=!!(t&&t.INTERRUPTED),c=L2(r,n),l,f,v,p,d,h,m,y=function(b){return l&&lh(l,"normal"),new oa(!0,b)},g=function(b){return a?(D2(b),s?c(b[0],b[1],y):c(b[0],b[1])):s?c(b,y):c(b)};if(o)l=e.iterator;else if(u)l=e;else{if(f=W2(e),!f)throw new K2(B2(e)+" is not iterable");if(G2(f)){for(v=0,p=U2(e);p>v;v++)if(d=g(e[v]),d&&ch(fh,d))return d;return new oa(!1)}l=H2(e,f)}for(h=o?e.next:l.next;!(m=F2(h,l)).done;){try{d=g(m.value)}catch(b){lh(l,"throw",b)}if(typeof d=="object"&&d&&ch(fh,d))return d}return new oa(!1)}});var dh=i((TW,vh)=>{"use strict";var z2=Ze();vh.exports=function(e,r){return e===void 0?arguments.length<2?"":r:z2(e)}});var hh=i(()=>{"use strict";var V2=x(),Y2=U(),J2=Et(),ua=Ct(),Q2=Qm(),mh=rr(),Go=Oe(),Uo=Qe(),X2=Zm(),Z2=sh(),eN=he(),rN=dh(),tN=A(),nN=tN("toStringTag"),sa=Error,aN=[].push,et=function(r,t){var n=Y2(Ho,this),a;ua?a=ua(new sa,n?J2(this):Ho):(a=n?this:mh(Ho),Go(a,nN,"Error")),t!==void 0&&Go(a,"message",rN(t)),Z2(a,et,a.stack,1),arguments.length>2&&X2(a,arguments[2]);var o=[];return eN(r,aN,{that:o}),Go(a,"errors",o),a};ua?ua(et,sa):Q2(et,sa,{name:!0});var Ho=et.prototype=mh(sa.prototype,{constructor:Uo(1,et),message:Uo(1,""),name:Uo(1,"AggregateError")});V2({global:!0,constructor:!0,arity:2},{AggregateError:et})});var Wo=i(()=>{"use strict";hh()});var Ko=i((IW,yh)=>{"use strict";var Lt=R(),iN=Fr(),oN=Ce(),ca=function(e){return iN.slice(0,e.length)===e};yh.exports=function(){return ca("Bun/")?"BUN":ca("Cloudflare-Workers")?"CLOUDFLARE":ca("Deno/")?"DENO":ca("Node.js/")?"NODE":Lt.Bun&&typeof Bun.version=="string"?"BUN":Lt.Deno&&typeof Deno.version=="object"?"DENO":oN(Lt.process)==="process"?"NODE":Lt.window&&Lt.document?"BROWSER":"REST"}()});var Ft=i((_W,gh)=>{"use strict";var uN=Ko();gh.exports=uN==="NODE"});var zo=i((PW,qh)=>{"use strict";var sN=W(),cN=Hn(),lN=A(),fN=H(),bh=lN("species");qh.exports=function(e){var r=sN(e);fN&&r&&!r[bh]&&cN(r,bh,{configurable:!0,get:function(){return this}})}});var la=i((RW,xh)=>{"use strict";var pN=U(),vN=TypeError;xh.exports=function(e,r){if(pN(r,e))return e;throw new vN("Incorrect invocation")}});var Vo=i((AW,wh)=>{"use strict";var dN=xt(),mN=Xe(),hN=TypeError;wh.exports=function(e){if(dN(e))return e;throw new hN(mN(e)+" is not a constructor")}});var Yo=i((NW,Th)=>{"use strict";var Sh=Z(),yN=Vo(),gN=lr(),bN=A(),qN=bN("species");Th.exports=function(e,r){var t=Sh(e).constructor,n;return t===void 0||gN(n=Sh(t)[qN])?r:yN(n)}});var Ch=i((MW,Eh)=>{"use strict";var xN=TypeError;Eh.exports=function(e,r){if(e<r)throw new xN("Not enough arguments");return e}});var Jo=i((jW,Oh)=>{"use strict";var wN=Fr();Oh.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(wN)});var iu=i(($W,jh)=>{"use strict";var ce=R(),SN=Lr(),TN=Y(),kh=M(),EN=K(),Mh=P(),Ih=Gi(),CN=dr(),_h=En(),ON=Ch(),kN=Jo(),IN=Ft(),tu=ce.setImmediate,nu=ce.clearImmediate,_N=ce.process,Qo=ce.Dispatch,PN=ce.Function,Ph=ce.MessageChannel,RN=ce.String,Xo=0,Dt={},Rh="onreadystatechange",Bt,Sr,Zo,eu;Mh(function(){Bt=ce.location});var au=function(e){if(EN(Dt,e)){var r=Dt[e];delete Dt[e],r()}},ru=function(e){return function(){au(e)}},Ah=function(e){au(e.data)},Nh=function(e){ce.postMessage(RN(e),Bt.protocol+"//"+Bt.host)};(!tu||!nu)&&(tu=function(r){ON(arguments.length,1);var t=kh(r)?r:PN(r),n=CN(arguments,1);return Dt[++Xo]=function(){SN(t,void 0,n)},Sr(Xo),Xo},nu=function(r){delete Dt[r]},IN?Sr=function(e){_N.nextTick(ru(e))}:Qo&&Qo.now?Sr=function(e){Qo.now(ru(e))}:Ph&&!kN?(Zo=new Ph,eu=Zo.port2,Zo.port1.onmessage=Ah,Sr=TN(eu.postMessage,eu)):ce.addEventListener&&kh(ce.postMessage)&&!ce.importScripts&&Bt&&Bt.protocol!=="file:"&&!Mh(Nh)?(Sr=Nh,ce.addEventListener("message",Ah,!1)):Rh in _h("script")?Sr=function(e){Ih.appendChild(_h("script"))[Rh]=function(){Ih.removeChild(this),au(e)}}:Sr=function(e){setTimeout(ru(e),0)});jh.exports={set:tu,clear:nu}});var Fh=i((LW,Lh)=>{"use strict";var $h=R(),AN=H(),NN=Object.getOwnPropertyDescriptor;Lh.exports=function(e){if(!AN)return $h[e];var r=NN($h,e);return r&&r.value}});var ou=i((FW,Bh)=>{"use strict";var Dh=function(){this.head=null,this.tail=null};Dh.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Bh.exports=Dh});var Uh=i((DW,Gh)=>{"use strict";var MN=Fr();Gh.exports=/ipad|iphone|ipod/i.test(MN)&&typeof Pebble<"u"});var Wh=i((BW,Hh)=>{"use strict";var jN=Fr();Hh.exports=/web0s(?!.*chrome)/i.test(jN)});var Xh=i((GW,Qh)=>{"use strict";var tt=R(),$N=Fh(),Kh=Y(),uu=iu().set,LN=ou(),FN=Jo(),DN=Uh(),BN=Wh(),su=Ft(),zh=tt.MutationObserver||tt.WebKitMutationObserver,Vh=tt.document,Yh=tt.process,fa=tt.Promise,fu=$N("queueMicrotask"),rt,cu,lu,pa,Jh;fu||(Gt=new LN,Ut=function(){var e,r;for(su&&(e=Yh.domain)&&e.exit();r=Gt.get();)try{r()}catch(t){throw Gt.head&&rt(),t}e&&e.enter()},!FN&&!su&&!BN&&zh&&Vh?(cu=!0,lu=Vh.createTextNode(""),new zh(Ut).observe(lu,{characterData:!0}),rt=function(){lu.data=cu=!cu}):!DN&&fa&&fa.resolve?(pa=fa.resolve(void 0),pa.constructor=fa,Jh=Kh(pa.then,pa),rt=function(){Jh(Ut)}):su?rt=function(){Yh.nextTick(Ut)}:(uu=Kh(uu,tt),rt=function(){uu(Ut)}),fu=function(e){Gt.head||rt(),Gt.add(e)});var Gt,Ut;Qh.exports=fu});var ey=i((UW,Zh)=>{"use strict";Zh.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var Tr=i((HW,ry)=>{"use strict";ry.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var Er=i((WW,ty)=>{"use strict";var GN=R();ty.exports=GN.Promise});var nt=i((KW,oy)=>{"use strict";var UN=R(),Ht=Er(),HN=M(),WN=gi(),KN=Ei(),zN=A(),ny=Ko(),VN=ee(),pu=Dr(),ay=Ht&&Ht.prototype,YN=zN("species"),vu=!1,iy=HN(UN.PromiseRejectionEvent),JN=WN("Promise",function(){var e=KN(Ht),r=e!==String(Ht);if(!r&&pu===66||VN&&!(ay.catch&&ay.finally))return!0;if(!pu||pu<51||!/native code/.test(e)){var t=new Ht(function(o){o(1)}),n=function(o){o(function(){},function(){})},a=t.constructor={};if(a[YN]=n,vu=t.then(function(){})instanceof n,!vu)return!0}return!r&&(ny==="BROWSER"||ny==="DENO")&&!iy});oy.exports={CONSTRUCTOR:JN,REJECTION_EVENT:iy,SUBCLASSING:vu}});var Ie=i((zW,sy)=>{"use strict";var uy=D(),QN=TypeError,XN=function(e){var r,t;this.promise=new e(function(n,a){if(r!==void 0||t!==void 0)throw new QN("Bad Promise constructor");r=n,t=a}),this.resolve=uy(r),this.reject=uy(t)};sy.exports.f=function(e){return new XN(e)}});var ky=i(()=>{"use strict";var ZN=x(),eM=ee(),ha=Ft(),ar=R(),rM=V(),ut=G(),cy=Le(),ly=Ct(),tM=De(),nM=zo(),aM=D(),ma=M(),iM=L(),oM=la(),uM=Yo(),my=iu().set,gu=Xh(),sM=ey(),cM=Tr(),lM=ou(),hy=er(),ya=Er(),bu=nt(),yy=Ie(),ga="Promise",gy=bu.CONSTRUCTOR,fM=bu.REJECTION_EVENT,pM=bu.SUBCLASSING,du=hy.getterFor(ga),vM=hy.set,at=ya&&ya.prototype,Cr=ya,va=at,by=ar.TypeError,mu=ar.document,qu=ar.process,hu=yy.f,dM=hu,mM=!!(mu&&mu.createEvent&&ar.dispatchEvent),qy="unhandledrejection",hM="rejectionhandled",fy=0,xy=1,yM=2,xu=1,wy=2,da,py,Sy,vy,Ty=function(e){var r;return iM(e)&&ma(r=e.then)?r:!1},Ey=function(e,r){var t=r.value,n=r.state===xy,a=n?e.ok:e.fail,o=e.resolve,u=e.reject,s=e.domain,c,l,f;try{a?(n||(r.rejection===wy&&bM(r),r.rejection=xu),a===!0?c=t:(s&&s.enter(),c=a(t),s&&(s.exit(),f=!0)),c===e.promise?u(new by("Promise-chain cycle")):(l=Ty(c))?ut(l,c,o,u):o(c)):u(t)}catch(v){s&&!f&&s.exit(),u(v)}},Cy=function(e,r){e.notified||(e.notified=!0,gu(function(){for(var t=e.reactions,n;n=t.get();)Ey(n,e);e.notified=!1,r&&!e.rejection&&gM(e)}))},Oy=function(e,r,t){var n,a;mM?(n=mu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),ar.dispatchEvent(n)):n={promise:r,reason:t},!fM&&(a=ar["on"+e])?a(n):e===qy&&sM("Unhandled promise rejection",t)},gM=function(e){ut(my,ar,function(){var r=e.facade,t=e.value,n=dy(e),a;if(n&&(a=cM(function(){ha?qu.emit("unhandledRejection",t,r):Oy(qy,r,t)}),e.rejection=ha||dy(e)?wy:xu,a.error))throw a.value})},dy=function(e){return e.rejection!==xu&&!e.parent},bM=function(e){ut(my,ar,function(){var r=e.facade;ha?qu.emit("rejectionHandled",r):Oy(hM,r,e.value)})},it=function(e,r,t){return function(n){e(r,n,t)}},ot=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=yM,Cy(e,!0))},yu=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new by("Promise can't be resolved itself");var n=Ty(r);n?gu(function(){var a={done:!1};try{ut(n,r,it(yu,a,e),it(ot,a,e))}catch(o){ot(a,o,e)}}):(e.value=r,e.state=xy,Cy(e,!1))}catch(a){ot({done:!1},a,e)}}};if(gy&&(Cr=function(r){oM(this,va),aM(r),ut(da,this);var t=du(this);try{r(it(yu,t),it(ot,t))}catch(n){ot(t,n)}},va=Cr.prototype,da=function(r){vM(this,{type:ga,done:!1,notified:!1,parent:!1,reactions:new lM,rejection:!1,state:fy,value:null})},da.prototype=cy(va,"then",function(r,t){var n=du(this),a=hu(uM(this,Cr));return n.parent=!0,a.ok=ma(r)?r:!0,a.fail=ma(t)&&t,a.domain=ha?qu.domain:void 0,n.state===fy?n.reactions.add(a):gu(function(){Ey(a,n)}),a.promise}),py=function(){var e=new da,r=du(e);this.promise=e,this.resolve=it(yu,r),this.reject=it(ot,r)},yy.f=hu=function(e){return e===Cr||e===Sy?new py(e):dM(e)},!eM&&ma(ya)&&at!==Object.prototype)){vy=at.then,pM||cy(at,"then",function(r,t){var n=this;return new Cr(function(a,o){ut(vy,n,a,o)}).then(r,t)},{unsafe:!0});try{delete at.constructor}catch{}ly&&ly(at,va)}ZN({global:!0,constructor:!0,wrap:!0,forced:gy},{Promise:Cr});Sy=rM.Promise;tM(Cr,ga,!1,!0);nM(ga)});var Wt=i((JW,Iy)=>{"use strict";var qM=Er(),xM=to(),wM=nt().CONSTRUCTOR;Iy.exports=wM||!xM(function(e){qM.all(e).then(void 0,function(){})})});var _y=i(()=>{"use strict";var SM=x(),TM=G(),EM=D(),CM=Ie(),OM=Tr(),kM=he(),IM=Wt();SM({target:"Promise",stat:!0,forced:IM},{all:function(r){var t=this,n=CM.f(t),a=n.resolve,o=n.reject,u=OM(function(){var s=EM(t.resolve),c=[],l=0,f=1;kM(r,function(v){var p=l++,d=!1;f++,TM(s,t,v).then(function(h){d||(d=!0,c[p]=h,--f||a(c))},o)}),--f||a(c)});return u.error&&o(u.value),n.promise}})});var Ry=i(()=>{"use strict";var _M=x(),PM=ee(),RM=nt().CONSTRUCTOR,Su=Er(),AM=W(),NM=M(),MM=Le(),Py=Su&&Su.prototype;_M({target:"Promise",proto:!0,forced:RM,real:!0},{catch:function(e){return this.then(void 0,e)}});!PM&&NM(Su)&&(wu=AM("Promise").prototype.catch,Py.catch!==wu&&MM(Py,"catch",wu,{unsafe:!0}));var wu});var Ay=i(()=>{"use strict";var jM=x(),$M=G(),LM=D(),FM=Ie(),DM=Tr(),BM=he(),GM=Wt();jM({target:"Promise",stat:!0,forced:GM},{race:function(r){var t=this,n=FM.f(t),a=n.reject,o=DM(function(){var u=LM(t.resolve);BM(r,function(s){$M(u,t,s).then(n.resolve,a)})});return o.error&&a(o.value),n.promise}})});var Ny=i(()=>{"use strict";var UM=x(),HM=Ie(),WM=nt().CONSTRUCTOR;UM({target:"Promise",stat:!0,forced:WM},{reject:function(r){var t=HM.f(this),n=t.reject;return n(r),t.promise}})});var Tu=i((iK,My)=>{"use strict";var KM=Z(),zM=L(),VM=Ie();My.exports=function(e,r){if(KM(e),zM(r)&&r.constructor===e)return r;var t=VM.f(e),n=t.resolve;return n(r),t.promise}});var Ly=i(()=>{"use strict";var YM=x(),JM=W(),jy=ee(),QM=Er(),$y=nt().CONSTRUCTOR,XM=Tu(),ZM=JM("Promise"),ej=jy&&!$y;YM({target:"Promise",stat:!0,forced:jy||$y},{resolve:function(r){return XM(ej&&this===ZM?QM:this,r)}})});var Fy=i(()=>{"use strict";ky();_y();Ry();Ay();Ny();Ly()});var Eu=i(()=>{"use strict";var rj=x(),tj=G(),nj=D(),aj=Ie(),ij=Tr(),oj=he(),uj=Wt();rj({target:"Promise",stat:!0,forced:uj},{allSettled:function(r){var t=this,n=aj.f(t),a=n.resolve,o=n.reject,u=ij(function(){var s=nj(t.resolve),c=[],l=0,f=1;oj(r,function(v){var p=l++,d=!1;f++,tj(s,t,v).then(function(h){d||(d=!0,c[p]={status:"fulfilled",value:h},--f||a(c))},function(h){d||(d=!0,c[p]={status:"rejected",reason:h},--f||a(c))})}),--f||a(c)});return u.error&&o(u.value),n.promise}})});var Cu=i(()=>{"use strict";var sj=x(),cj=G(),lj=D(),fj=W(),pj=Ie(),vj=Tr(),dj=he(),mj=Wt(),Dy="No one promise resolved";sj({target:"Promise",stat:!0,forced:mj},{any:function(r){var t=this,n=fj("AggregateError"),a=pj.f(t),o=a.resolve,u=a.reject,s=vj(function(){var c=lj(t.resolve),l=[],f=0,v=1,p=!1;dj(r,function(d){var h=f++,m=!1;v++,cj(c,t,d).then(function(y){m||p||(p=!0,o(y))},function(y){m||p||(m=!0,l[h]=y,--v||u(new n(l,Dy)))})}),--v||u(new n(l,Dy))});return s.error&&u(s.value),a.promise}})});var ku=i(()=>{"use strict";var hj=x(),yj=R(),gj=Lr(),bj=dr(),qj=Ie(),xj=D(),Gy=Tr(),Ou=yj.Promise,By=!1,wj=!Ou||!Ou.try||Gy(function(){Ou.try(function(e){By=e===8},8)}).error||!By;hj({target:"Promise",stat:!0,forced:wj},{try:function(e){var r=arguments.length>1?bj(arguments,1):[],t=qj.f(this),n=Gy(function(){return gj(xj(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var Iu=i(()=>{"use strict";var Sj=x(),Tj=Ie();Sj({target:"Promise",stat:!0},{withResolvers:function(){var r=Tj.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var Ky=i(()=>{"use strict";var Ej=x(),Cj=ee(),ba=Er(),Oj=P(),Hy=W(),Wy=M(),kj=Yo(),Uy=Tu(),Ij=Le(),Pu=ba&&ba.prototype,_j=!!ba&&Oj(function(){Pu.finally.call({then:function(){}},function(){})});Ej({target:"Promise",proto:!0,real:!0,forced:_j},{finally:function(e){var r=kj(this,Hy("Promise")),t=Wy(e);return this.then(t?function(n){return Uy(r,e()).then(function(){return n})}:e,t?function(n){return Uy(r,e()).then(function(){throw n})}:e)}});!Cj&&Wy(ba)&&(_u=Hy("Promise").prototype.finally,Pu.finally!==_u&&Ij(Pu,"finally",_u,{unsafe:!0}));var _u});var Vy=i((qK,zy)=>{"use strict";Wo();xr();Pt();Fy();Eu();Cu();ku();Iu();Ky();yr();var Pj=V();zy.exports=Pj.Promise});var Jy=i((xK,Yy)=>{"use strict";var Rj=Vy();wr();Yy.exports=Rj});var Qy=i(()=>{"use strict";ku()});var Xy=i(()=>{"use strict";Iu()});var eg=i((CK,Zy)=>{"use strict";var Aj=Jy();Qy();Xy();Zy.exports=Aj});var rg=i(()=>{"use strict";Wo()});var tg=i(()=>{"use strict";Eu()});var ng=i(()=>{"use strict";Cu()});var ig=i((AK,ag)=>{"use strict";var Nj=eg();rg();tg();ng();ag.exports=Nj});var st=i((NK,og)=>{"use strict";og.exports=ig()});var cg=i((FK,sg)=>{"use strict";_o();var Mj=Jr();sg.exports=Mj.f("asyncIterator")});var fg=i((DK,lg)=>{"use strict";var jj=cg();lg.exports=jj});var vg=i((BK,pg)=>{"use strict";var $j=fg();pg.exports=$j});var mg=i((GK,dg)=>{"use strict";var Lj=vg();dg.exports=Lj});var qa=i((UK,hg)=>{"use strict";hg.exports=mg()});var qg=i(()=>{"use strict";var Fj=x(),Dj=P(),Bj=te(),bg=Et(),Gj=Ki(),Uj=Dj(function(){bg(1)});Fj({target:"Object",stat:!0,forced:Uj,sham:!Gj},{getPrototypeOf:function(r){return bg(Bj(r))}})});var wg=i((VK,xg)=>{"use strict";qg();var Hj=V();xg.exports=Hj.Object.getPrototypeOf});var Tg=i((YK,Sg)=>{"use strict";var Wj=wg();Sg.exports=Wj});var Cg=i((JK,Eg)=>{"use strict";var Kj=Tg();Eg.exports=Kj});var kg=i((QK,Og)=>{"use strict";var zj=Cg();Og.exports=zj});var xa=i((XK,Ig)=>{"use strict";Ig.exports=kg()});var Pg=i(()=>{"use strict";var Vj=x(),Yj=N(),Jj=$e(),Qj=Yj([].reverse),_g=[1,2];Vj({target:"Array",proto:!0,forced:String(_g)===String(_g.reverse())},{reverse:function(){return Jj(this)&&(this.length=this.length),Qj(this)}})});var Ag=i((rz,Rg)=>{"use strict";Pg();var Xj=se();Rg.exports=Xj("Array","reverse")});var Mg=i((tz,Ng)=>{"use strict";var Zj=U(),e$=Ag(),Nu=Array.prototype;Ng.exports=function(e){var r=e.reverse;return e===Nu||Zj(Nu,e)&&r===Nu.reverse?e$:r}});var $g=i((nz,jg)=>{"use strict";var r$=Mg();jg.exports=r$});var Fg=i((az,Lg)=>{"use strict";var t$=$g();Lg.exports=t$});var Bg=i((iz,Dg)=>{"use strict";var n$=Fg();Dg.exports=n$});var Ug=i((oz,Gg)=>{"use strict";Gg.exports=Bg()});var Mu=i((uz,Vt)=>{function a$(e,r){this.v=e,this.k=r}Vt.exports=a$,Vt.exports.__esModule=!0,Vt.exports.default=Vt.exports});var Hg=i(()=>{"use strict";var i$=x(),o$=H(),u$=rr();i$({target:"Object",stat:!0,sham:!o$},{create:u$})});var Kg=i((lz,Wg)=>{"use strict";Hg();var s$=V(),c$=s$.Object;Wg.exports=function(r,t){return c$.create(r,t)}});var Vg=i((fz,zg)=>{"use strict";var l$=Kg();zg.exports=l$});var Jg=i((pz,Yg)=>{"use strict";var f$=Vg();Yg.exports=f$});var Xg=i((vz,Qg)=>{"use strict";var p$=Jg();Qg.exports=p$});var wa=i((dz,Zg)=>{"use strict";Zg.exports=Xg()});var $u=i((mz,nb)=>{"use strict";var rb=N(),v$=D(),d$=L(),m$=K(),eb=dr(),h$=$r(),tb=Function,y$=rb([].concat),g$=rb([].join),ju={},b$=function(e,r,t){if(!m$(ju,r)){for(var n=[],a=0;a<r;a++)n[a]="a["+a+"]";ju[r]=tb("C,a","return new C("+g$(n,",")+")")}return ju[r](e,t)};nb.exports=h$?tb.bind:function(r){var t=v$(this),n=t.prototype,a=eb(arguments,1),o=function(){var s=y$(a,eb(arguments));return this instanceof o?b$(t,s.length,s):t.apply(r,s)};return d$(n)&&(o.prototype=n),o}});var ib=i(()=>{"use strict";var q$=x(),ab=$u();q$({target:"Function",proto:!0,forced:Function.bind!==ab},{bind:ab})});var ub=i((gz,ob)=>{"use strict";ib();var x$=se();ob.exports=x$("Function","bind")});var cb=i((bz,sb)=>{"use strict";var w$=U(),S$=ub(),Lu=Function.prototype;sb.exports=function(e){var r=e.bind;return e===Lu||w$(Lu,e)&&r===Lu.bind?S$:r}});var fb=i((qz,lb)=>{"use strict";var T$=cb();lb.exports=T$});var vb=i((xz,pb)=>{"use strict";var E$=fb();pb.exports=E$});var mb=i((wz,db)=>{"use strict";var C$=vb();db.exports=C$});var Yt=i((Sz,hb)=>{"use strict";hb.exports=mb()});var yb=i(()=>{"use strict";var O$=x(),k$=Ct();O$({target:"Object",stat:!0},{setPrototypeOf:k$})});var bb=i((Cz,gb)=>{"use strict";yb();var I$=V();gb.exports=I$.Object.setPrototypeOf});var xb=i((Oz,qb)=>{"use strict";var _$=bb();qb.exports=_$});var Sb=i((kz,wb)=>{"use strict";var P$=xb();wb.exports=P$});var Eb=i((Iz,Tb)=>{"use strict";var R$=Sb();Tb.exports=R$});var Sa=i((_z,Cb)=>{"use strict";Cb.exports=Eb()});var kb=i(()=>{"use strict";var A$=x(),N$=H(),Ob=ne().f;A$({target:"Object",stat:!0,forced:Object.defineProperty!==Ob,sham:!N$},{defineProperty:Ob})});var Pb=i((Az,_b)=>{"use strict";kb();var M$=V(),Ib=M$.Object,j$=_b.exports=function(r,t,n){return Ib.defineProperty(r,t,n)};Ib.defineProperty.sham&&(j$.sham=!0)});var Ab=i((Nz,Rb)=>{"use strict";var $$=Pb();Rb.exports=$$});var Mb=i((Mz,Nb)=>{"use strict";var L$=Ab();Nb.exports=L$});var $b=i((jz,jb)=>{"use strict";var F$=Mb();jb.exports=F$});var Jt=i(($z,Lb)=>{"use strict";Lb.exports=$b()});var Fu=i((Lz,Ge)=>{var D$=Jt();function Ta(e,r,t,n){var a=D$;try{a({},"",{})}catch{a=0}Ge.exports=Ta=function(u,s,c,l){function f(v,p){Ta(u,v,function(d){return this._invoke(v,p,d)})}s?a?a(u,s,{value:c,enumerable:!l,configurable:!l,writable:!l}):u[s]=c:(f("next",0),f("throw",1),f("return",2))},Ge.exports.__esModule=!0,Ge.exports.default=Ge.exports,Ta(e,r,t,n)}Ge.exports=Ta,Ge.exports.__esModule=!0,Ge.exports.default=Ge.exports});var Bu=i((Fz,Ue)=>{var Fb=ke(),Du=wa(),B$=Yt(),G$=xa(),Db=Sa(),Pe=Fu();function Bb(){var e,r,t=typeof Fb=="function"?Fb:{},n=t.iterator||"@@iterator",a=t.toStringTag||"@@toStringTag";function o(d,h,m,y){var g=h&&h.prototype instanceof s?h:s,b=Du(g.prototype);return Pe(b,"_invoke",function(k,E,w){var T,S,O,$=0,Se=w||[],_=!1,re={p:0,n:0,v:e,a:Te,f:B$(Te).call(Te,e,4),d:function(F,ye){return T=F,S=0,O=e,re.n=ye,u}};function Te(X,F){for(S=X,O=F,r=0;!_&&$&&!ye&&r<Se.length;r++){var ye,C=Se[r],jr=re.p,Je=C[2];X>3?(ye=Je===F)&&(O=C[(S=C[4])?5:(S=3,3)],C[4]=C[5]=e):C[0]<=jr&&((ye=X<2&&jr<C[1])?(S=0,re.v=F,re.n=C[1]):jr<Je&&(ye=X<3||C[0]>F||F>Je)&&(C[4]=X,C[5]=F,re.n=Je,S=0))}if(ye||X>1)return u;throw _=!0,F}return function(X,F,ye){if($>1)throw TypeError("Generator is already running");for(_&&F===1&&Te(F,ye),S=F,O=ye;(r=S<2?e:O)||!_;){T||(S?S<3?(S>1&&(re.n=-1),Te(S,O)):re.n=O:re.v=O);try{if($=2,T){if(S||(X="next"),r=T[X]){if(!(r=r.call(T,O)))throw TypeError("iterator result is not an object");if(!r.done)return r;O=r.value,S<2&&(S=0)}else S===1&&(r=T.return)&&r.call(T),S<2&&(O=TypeError("The iterator does not provide a '"+X+"' method"),S=1);T=e}else if((r=(_=re.n<0)?O:k.call(E,re))!==u)break}catch(C){T=e,S=1,O=C}finally{$=1}}return{value:r,done:_}}}(d,m,y),!0),b}var u={};function s(){}function c(){}function l(){}r=G$;var f=[][n]?r(r([][n]())):(Pe(r={},n,function(){return this}),r),v=l.prototype=s.prototype=Du(f);function p(d){return Db?Db(d,l):(d.__proto__=l,Pe(d,a,"GeneratorFunction")),d.prototype=Du(v),d}return c.prototype=l,Pe(v,"constructor",l),Pe(l,"constructor",c),c.displayName="GeneratorFunction",Pe(l,a,"GeneratorFunction"),Pe(v),Pe(v,a,"Generator"),Pe(v,n,function(){return this}),Pe(v,"toString",function(){return"[object Generator]"}),(Ue.exports=Bb=function(){return{w:o,m:p}},Ue.exports.__esModule=!0,Ue.exports.default=Ue.exports)()}Ue.exports=Bb,Ue.exports.__esModule=!0,Ue.exports.default=Ue.exports});var Hu=i((Dz,Qt)=>{var U$=ke(),H$=qa(),W$=Mu(),Gu=Fu();function Uu(e,r){function t(a,o,u,s){try{var c=e[a](o),l=c.value;return l instanceof W$?r.resolve(l.v).then(function(f){t("next",f,u,s)},function(f){t("throw",f,u,s)}):r.resolve(l).then(function(f){c.value=f,u(c)},function(f){return t("throw",f,u,s)})}catch(f){s(f)}}var n;this.next||(Gu(Uu.prototype),Gu(Uu.prototype,typeof U$=="function"&&H$||"@asyncIterator",function(){return this})),Gu(this,"_invoke",function(a,o,u){function s(){return new r(function(c,l){t(a,u,c,l)})}return n=n?n.then(s,s):s()},!0)}Qt.exports=Uu,Qt.exports.__esModule=!0,Qt.exports.default=Qt.exports});var Wu=i((Bz,Xt)=>{var K$=st(),z$=Bu(),V$=Hu();function Y$(e,r,t,n,a){return new V$(z$().w(e,r,t,n),a||K$)}Xt.exports=Y$,Xt.exports.__esModule=!0,Xt.exports.default=Xt.exports});var Gb=i((Gz,Zt)=>{var J$=Wu();function Q$(e,r,t,n,a){var o=J$(e,r,t,n,a);return o.next().then(function(u){return u.done?u.value:o.next()})}Zt.exports=Q$,Zt.exports.__esModule=!0,Zt.exports.default=Zt.exports});var Wb=i((Uz,Hb)=>{"use strict";var Ub=Xe(),X$=TypeError;Hb.exports=function(e,r){if(!delete e[r])throw new X$("Cannot delete property "+Ub(r)+" of "+Ub(e))}});var Kb=i(()=>{"use strict";var Z$=x(),eL=te(),rL=de(),tL=zr(),nL=Wb(),aL=_t(),iL=[].unshift(0)!==1,oL=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},uL=iL||!oL();Z$({target:"Array",proto:!0,arity:1,forced:uL},{unshift:function(r){var t=eL(this),n=rL(t),a=arguments.length;if(a){aL(n+a);for(var o=n;o--;){var u=o+a;o in t?t[u]=t[o]:nL(t,u)}for(var s=0;s<a;s++)t[s]=arguments[s]}return tL(t,n+a)}})});var Vb=i((Kz,zb)=>{"use strict";Kb();var sL=se();zb.exports=sL("Array","unshift")});var Jb=i((zz,Yb)=>{"use strict";var cL=U(),lL=Vb(),Ku=Array.prototype;Yb.exports=function(e){var r=e.unshift;return e===Ku||cL(Ku,e)&&r===Ku.unshift?lL:r}});var Xb=i((Vz,Qb)=>{"use strict";var fL=Jb();Qb.exports=fL});var eq=i((Yz,Zb)=>{"use strict";var pL=Xb();Zb.exports=pL});var tq=i((Jz,rq)=>{"use strict";var vL=eq();rq.exports=vL});var aq=i((Qz,nq)=>{"use strict";nq.exports=tq()});var iq=i((Xz,en)=>{var dL=aq();function mL(e){var r=Object(e),t=[];for(var n in r)dL(t).call(t,n);return function a(){for(;t.length;)if((n=t.pop())in r)return a.value=n,a.done=!1,a;return a.done=!0,a}}en.exports=mL,en.exports.__esModule=!0,en.exports.default=en.exports});var uq=i((Zz,oq)=>{"use strict";xr();Pt();yr();Ro();var hL=Jr();oq.exports=hL.f("iterator")});var cq=i((eV,sq)=>{"use strict";var yL=uq();wr();sq.exports=yL});var fq=i((rV,lq)=>{"use strict";var gL=cq();lq.exports=gL});var vq=i((tV,pq)=>{"use strict";var bL=fq();pq.exports=bL});var rn=i((nV,dq)=>{"use strict";dq.exports=vq()});var mq=i((aV,He)=>{var Ea=ke(),qL=rn();function zu(e){"@babel/helpers - typeof";return He.exports=zu=typeof Ea=="function"&&typeof qL=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Ea=="function"&&r.constructor===Ea&&r!==Ea.prototype?"symbol":typeof r},He.exports.__esModule=!0,He.exports.default=He.exports,zu(e)}He.exports=zu,He.exports.__esModule=!0,He.exports.default=He.exports});var hq=i((iV,tn)=>{var xL=mq().default,wL=ke(),SL=rn();function TL(e){if(e!=null){var r=e[typeof wL=="function"&&SL||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(xL(e)+" is not iterable")}tn.exports=TL,tn.exports.__esModule=!0,tn.exports.default=tn.exports});var bq=i((oV,We)=>{var yq=xa(),EL=Ug(),CL=Mu(),OL=Bu(),kL=Gb(),IL=Wu(),_L=Hu(),PL=iq(),gq=hq();function Vu(){"use strict";var e=OL(),r=e.m(Vu),t=(yq?yq(r):r.__proto__).constructor;function n(u){var s=typeof u=="function"&&u.constructor;return!!s&&(s===t||(s.displayName||s.name)==="GeneratorFunction")}var a={throw:1,return:2,break:3,continue:3};function o(u){var s,c;return function(l){s||(s={stop:function(){return c(l.a,2)},catch:function(){return l.v},abrupt:function(v,p){return c(l.a,a[v],p)},delegateYield:function(v,p,d){return s.resultName=p,c(l.d,gq(v),d)},finish:function(v){return c(l.f,v)}},c=function(v,p,d){l.p=s.prev,l.n=s.next;try{return v(p,d)}finally{s.next=l.n}}),s.resultName&&(s[s.resultName]=l.v,s.resultName=void 0),s.sent=l.v,s.next=l.n;try{return u.call(this,s)}finally{l.p=s.prev,l.n=s.next}}}return(We.exports=Vu=function(){return{wrap:function(c,l,f,v){return e.w(o(c),l,f,v&&EL(v).call(v))},isGeneratorFunction:n,mark:e.m,awrap:function(c,l){return new CL(c,l)},AsyncIterator:_L,async:function(c,l,f,v,p){return(n(l)?IL:kL)(o(c),l,f,v,p)},keys:PL,values:gq}},We.exports.__esModule=!0,We.exports.default=We.exports)()}We.exports=Vu,We.exports.__esModule=!0,We.exports.default=We.exports});var le=i((uV,qq)=>{var Ca=bq()();qq.exports=Ca;try{regeneratorRuntime=Ca}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=Ca:Function("r","regeneratorRuntime = r")(Ca)}});var Yu=i((ka,wq)=>{"use strict";Object.defineProperty(ka,"__esModule",{value:!0});var Oa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xq=function(){function e(r,t){var n=[],a=!0,o=!1,u=void 0;try{for(var s=r[Symbol.iterator](),c;!(a=(c=s.next()).done)&&(n.push(c.value),!(t&&n.length===t));a=!0);}catch(l){o=!0,u=l}finally{try{!a&&s.return&&s.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();ka.default=RL;function RL(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(a){return a.type==="tag"||a.type==="script"||a.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var a=this.attribs,o=Object.keys(a),u=o.reduce(function(s,c,l){return s[l]={name:c,value:a[c]},s},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var a=[];return or(this.childTags,function(o){(o.name===n||n==="*")&&a.push(o)}),a}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var a=n.trim().replace(/\s+/g," ").split(" "),o=[];return or([this],function(u){var s=u.attribs.class;s&&a.every(function(c){return s.indexOf(c)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var a=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=AL(n),u=o.shift(),s=o.length;return u(this).filter(function(c){for(var l=0;l<s;){if(c=o[l](c,a),!c)return!1;l+=1}return!0})}),t.contains||(t.contains=function(n){var a=!1;return or([this],function(o,u){o===n&&(a=!0,u())}),a}),!0}function AL(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,a=r.split(":"),o=xq(a,2),u=o[0],s=o[1],c=null,l=null;if(function(){switch(!0){case/>/.test(u):l=function(w){return function(T){return T(w.parent)&&w.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");c=function(w){var T=w.attribs.class;return T&&h.every(function(S){return T.indexOf(S)>-1})},l=function(w,T){return n?w.getElementsByClassName(h.join(" ")):typeof w=="function"?w(c):nn(w,T,c)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),y=xq(m,2),g=y[0],b=y[1];c=function(w){var T=Object.keys(w.attribs).indexOf(g)>-1;return!!(T&&(!b||w.attribs[g]===b))},l=function(w,T){if(n){var S=function(){var O=[];return or([w],function($){c($)&&O.push($)}),{v:O}}();if((typeof S>"u"?"undefined":Oa(S))==="object")return S.v}return typeof w=="function"?w(c):nn(w,T,c)};break;case/^#/.test(u):var k=u.substr(1);c=function(w){return w.attribs.id===k},l=function(w,T){if(n){var S=function(){var O=[];return or([w],function($,Se){c($)&&(O.push($),Se())}),{v:O}}();if((typeof S>"u"?"undefined":Oa(S))==="object")return S.v}return typeof w=="function"?w(c):nn(w,T,c)};break;case/\*/.test(u):c=function(w){return!0},l=function(w,T){if(n){var S=function(){var O=[];return or([w],function($){return O.push($)}),{v:O}}();if((typeof S>"u"?"undefined":Oa(S))==="object")return S.v}return typeof w=="function"?w(c):nn(w,T,c)};break;default:c=function(w){return w.name===u},l=function(w,T){if(n){var S=function(){var O=[];return or([w],function($){c($)&&O.push($)}),{v:O}}();if((typeof S>"u"?"undefined":Oa(S))==="object")return S.v}return typeof w=="function"?w(c):nn(w,T,c)}}}(),!s)return l;var f=s.match(/-(child|type)\((\d+)\)$/),v=f[1],p=parseInt(f[2],10)-1,d=function(m){if(m){var y=m.parent.childTags;v==="type"&&(y=y.filter(c));var g=y.findIndex(function(b){return b===m});if(g===p)return!0}return!1};return function(m){var y=l(m);return n?y.reduce(function(g,b){return d(b)&&g.push(b),g},[]):d(y)&&y}})}function or(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&or(t.childTags,r)})}function nn(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}wq.exports=ka.default});var _a=i(Ia=>{"use strict";Object.defineProperty(Ia,"__esModule",{value:!0});Ia.convertNodeList=NL;Ia.escapeValue=ML;function NL(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function ML(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var Rq=i((Pa,Pq)=>{"use strict";Object.defineProperty(Pa,"__esModule",{value:!0});Pa.default=jL;var Cq=_a(),Sq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function jL(e,r){var t=r.root,n=t===void 0?document:t,a=r.skip,o=a===void 0?null:a,u=r.priority,s=u===void 0?["id","class","href","src"]:u,c=r.ignore,l=c===void 0?{}:c,f=[],v=e,p=f.length,d=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(g){return typeof g!="function"?function(b){return b===g}:g}),m=function(b){return o&&h.some(function(k){return k(b)})};for(Object.keys(l).forEach(function(g){g==="class"&&(d=!0);var b=l[g];typeof b!="function"&&(typeof b=="number"&&(b=b.toString()),typeof b=="string"&&(b=new RegExp((0,Cq.escapeValue)(b).replace(/\\/g,"\\\\"))),typeof b=="boolean"&&(b=b?/(?:)/:/.^/),l[g]=function(k,E){return b.test(E)})}),d&&function(){var g=l.attribute;l.attribute=function(b,k,E){return l.class(k)||g&&g(b,k,E)}}();v!==n;){if(m(v)!==!0){if(Tq(s,v,l,f,n)||Eq(v,l,f,n))break;Tq(s,v,l,f),f.length===p&&Eq(v,l,f),f.length===p&&$L(s,v,l,f)}v=v.parentNode,p=f.length}if(v===n){var y=Iq(s,v,l);f.unshift(y)}return f.join(" ")}function Tq(e,r,t,n){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=Oq(e,r,t);if(o){var u=a.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function Oq(e,r,t){for(var n=r.attributes,a=Object.keys(n).sort(function(m,y){var g=e.indexOf(n[m].name),b=e.indexOf(n[y].name);return b===-1?g===-1?0:-1:g-b}),o=0,u=a.length;o<u;o++){var s=a[o],c=n[s],l=c.name,f=(0,Cq.escapeValue)(c.value),v=t[l]||t.attribute,p=Sq[l]||Sq.attribute;if(!_q(v,l,f,p)){var d="["+l+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(l==="id"&&(d="#"+f),l==="class")){var h=f.trim().replace(/\s+/g,".");d="."+h}return d}}return null}function Eq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,a=kq(e,r);if(a){var o=n.getElementsByTagName(a);if(o.length===1)return t.unshift(a),!0}return!1}function kq(e,r){var t=e.tagName.toLowerCase();return _q(r.tag,null,t)?null:t}function $L(e,r,t,n){for(var a=r.parentNode,o=a.childTags||a.children,u=0,s=o.length;u<s;u++){var c=o[u];if(c===r){var l=Iq(e,c,t);if(!l)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,c,t,l);var f="> "+l+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function Iq(e,r,t){var n=Oq(e,r,t);return n||(n=kq(r,t)),n}function _q(e,r,t,n){if(!t)return!0;var a=e||n;return a?a(r,t,n):!1}Pq.exports=Pa.default});var Ju=i((Aa,Aq)=>{"use strict";Object.defineProperty(Aa,"__esModule",{value:!0});Aa.default=GL;var LL=Yu(),FL=BL(LL),DL=_a();function BL(e){return e&&e.__esModule?e:{default:e}}function GL(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,DL.convertNodeList)(r):[r]),!r.length||r.some(function(v){return v.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,FL.default)(r[0],t),a=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(a.length<2)return Ra("",e,"",r);for(var o=[a.pop()];a.length>1;){var u=a.pop(),s=a.join(" "),c=o.join(" "),l=s+" "+c,f=document.querySelectorAll(l);f.length!==r.length&&o.unshift(Ra(s,u,c,r))}return o.unshift(a[0]),a=o,a[0]=Ra("",a[0],a.slice(1).join(" "),r),a[a.length-1]=Ra(a.slice(0,-1).join(" "),a[a.length-1],"",r),n&&delete global.document,a.join(" ").replace(/>/g,"> ").trim()}function Ra(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var a=r.replace(/=.*$/,"]"),o=""+e+a+t,u=document.querySelectorAll(o);if(ct(u,n))r=a;else for(var s=document.querySelectorAll(""+e+a),c=function(){var E=s[l];if(n.some(function(T){return E.contains(T)})){var w=E.tagName.toLowerCase();return o=""+e+w+t,u=document.querySelectorAll(o),ct(u,n)&&(r=w),"break"}},l=0,f=s.length;l<f;l++){var o,u,v=c();if(v==="break")break}}if(/>/.test(r)){var p=r.replace(/>/,""),o=""+e+p+t,u=document.querySelectorAll(o);ct(u,n)&&(r=p)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);ct(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(k){return"."+k}).sort(function(k,E){return k.length-E.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);ct(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var y=document.querySelectorAll(""+e+r),g=function(){var E=y[l];if(n.some(function(T){return E.contains(T)})){var w=E.tagName.toLowerCase();return o=""+e+w+t,u=document.querySelectorAll(o),ct(u,n)&&(r=w),"break"}},l=0,f=y.length;l<f;l++){var o,u,b=g();if(b==="break")break}}return r}function ct(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var a=0;a<t;a++)if(e[a]===n)return!0;return!1})}Aq.exports=Aa.default});var Qu=i(Na=>{"use strict";Object.defineProperty(Na,"__esModule",{value:!0});Na.getCommonAncestor=UL;Na.getCommonProperties=HL;function UL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,a=[];e.forEach(function(v,p){for(var d=[];v!==n;)v=v.parentNode,d.unshift(v);a[p]=d}),a.sort(function(v,p){return v.length-p.length});for(var o=a.shift(),u=null,s=function(){var p=o[c],d=a.some(function(h){return!h.some(function(m){return m===p})});if(d)return"break";u=p},c=0,l=o.length;c<l;c++){var f=s();if(f==="break")break}return u}function HL(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,a=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(c){return u.some(function(l){return l===c})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(a!==void 0&&function(){var c=t.attributes,l=Object.keys(c).reduce(function(p,d){var h=c[d],m=h.name;return h&&m!=="class"&&(p[m]=h.value),p},{}),f=Object.keys(l),v=Object.keys(a);f.length?v.length?(a=v.reduce(function(p,d){var h=a[d];return h===l[d]&&(p[d]=h),p},{}),Object.keys(a).length?r.attributes=a:delete r.attributes):r.attributes=l:delete r.attributes}(),o!==void 0){var s=t.tagName.toLowerCase();o?s!==o&&delete r.tag:r.tag=s}}),r}});var Fq=i(an=>{"use strict";Object.defineProperty(an,"__esModule",{value:!0});var WL=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};an.getSingleSelector=Zu;an.getMultiSelector=Lq;an.default=QL;var KL=Yu(),Mq=Xu(KL),zL=Rq(),VL=Xu(zL),YL=Ju(),jq=Xu(YL),Nq=_a(),$q=Qu();function Xu(e){return e&&e.__esModule?e:{default:e}}function Zu(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":WL(e))+'")');var t=(0,Mq.default)(e,r),n=(0,VL.default)(e,r),a=(0,jq.default)(n,e,r);return t&&delete global.document,a}function Lq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,Nq.convertNodeList)(e)),e.some(function(l){return l.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,Mq.default)(e[0],r),n=(0,$q.getCommonAncestor)(e,r),a=Zu(n,r),o=JL(e),u=o[0],s=(0,jq.default)(a+" "+u,e,r),c=(0,Nq.convertNodeList)(document.querySelectorAll(s));return e.every(function(l){return c.some(function(f){return f===l})})?(t&&delete global.document,s):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function JL(e){var r=(0,$q.getCommonProperties)(e),t=r.classes,n=r.attributes,a=r.tag,o=[];if(a&&o.push(a),t){var u=t.map(function(c){return"."+c}).join("");o.push(u)}if(n){var s=Object.keys(n).reduce(function(c,l){return c.push("["+l+'="'+n[l]+'"]'),c},[]).join("");o.push(s)}return o.length,[o.join("")]}function QL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?Lq(e,r):Zu(e,r)}});var Gq=i(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.default=ie.common=ie.optimize=ie.getMultiSelector=ie.getSingleSelector=ie.select=void 0;var es=Fq();Object.defineProperty(ie,"getSingleSelector",{enumerable:!0,get:function(){return es.getSingleSelector}});Object.defineProperty(ie,"getMultiSelector",{enumerable:!0,get:function(){return es.getMultiSelector}});var Dq=Bq(es),XL=Ju(),ZL=Bq(XL),eF=Qu(),rF=tF(eF);function tF(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Bq(e){return e&&e.__esModule?e:{default:e}}ie.select=Dq.default;ie.optimize=ZL.default;ie.common=rF;ie.default=Dq.default});var Uq=i(()=>{"use strict";var pF=x(),vF=$e();pF({target:"Array",stat:!0},{isArray:vF})});var Wq=i((TV,Hq)=>{"use strict";Uq();var dF=V();Hq.exports=dF.Array.isArray});var zq=i((EV,Kq)=>{"use strict";var mF=Wq();Kq.exports=mF});var Yq=i((CV,Vq)=>{"use strict";var hF=zq();Vq.exports=hF});var Qq=i((OV,Jq)=>{"use strict";var yF=Yq();Jq.exports=yF});var Zq=i((kV,Xq)=>{"use strict";Xq.exports=Qq()});var tx=i(()=>{"use strict";var gF=x(),bF=te(),qF=de(),xF=zr(),wF=_t(),SF=P(),TF=SF(function(){return[].push.call({length:4294967296},1)!==4294967297}),EF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},CF=TF||!EF();gF({target:"Array",proto:!0,arity:1,forced:CF},{push:function(r){var t=bF(this),n=qF(t),a=arguments.length;wF(n+a);for(var o=0;o<a;o++)t[n]=arguments[o],n++;return xF(t,n),n}})});var ax=i((RV,nx)=>{"use strict";tx();var OF=se();nx.exports=OF("Array","push")});var ox=i((AV,ix)=>{"use strict";var kF=U(),IF=ax(),rs=Array.prototype;ix.exports=function(e){var r=e.push;return e===rs||kF(rs,e)&&r===rs.push?IF:r}});var sx=i((NV,ux)=>{"use strict";var _F=ox();ux.exports=_F});var lx=i((MV,cx)=>{"use strict";var PF=sx();cx.exports=PF});var px=i((jV,fx)=>{"use strict";var RF=lx();fx.exports=RF});var ts=i(($V,vx)=>{"use strict";vx.exports=px()});var Tx=i(()=>{"use strict";var AF=x(),NF=At().map,MF=wt(),jF=MF("map");AF({target:"Array",proto:!0,forced:!jF},{map:function(r){return NF(this,r,arguments.length>1?arguments[1]:void 0)}})});var Cx=i((f7,Ex)=>{"use strict";Tx();var $F=se();Ex.exports=$F("Array","map")});var kx=i((p7,Ox)=>{"use strict";var LF=U(),FF=Cx(),as=Array.prototype;Ox.exports=function(e){var r=e.map;return e===as||LF(as,e)&&r===as.map?FF:r}});var _x=i((v7,Ix)=>{"use strict";var DF=kx();Ix.exports=DF});var Rx=i((d7,Px)=>{"use strict";var BF=_x();Px.exports=BF});var Nx=i((m7,Ax)=>{"use strict";var GF=Rx();Ax.exports=GF});var jx=i((h7,Mx)=>{"use strict";Mx.exports=Nx()});var Lx=i((y7,$x)=>{$x.exports=jx()});var Dx=i((g7,Fx)=>{Fx.exports=st()});var Wx=i((b7,Hx)=>{"use strict";var UF=D(),HF=te(),WF=xn(),KF=de(),Bx=TypeError,Gx="Reduce of empty array with no initial value",Ux=function(e){return function(r,t,n,a){var o=HF(r),u=WF(o),s=KF(o);if(UF(t),s===0&&n<2)throw new Bx(Gx);var c=e?s-1:0,l=e?-1:1;if(n<2)for(;;){if(c in u){a=u[c],c+=l;break}if(c+=l,e?c<0:s<=c)throw new Bx(Gx)}for(;e?c>=0:s>c;c+=l)c in u&&(a=t(a,u[c],c,o));return a}};Hx.exports={left:Ux(!1),right:Ux(!0)}});var is=i((q7,Kx)=>{"use strict";var zF=P();Kx.exports=function(e,r){var t=[][e];return!!t&&zF(function(){t.call(null,r||function(){return 1},1)})}});var Vx=i(()=>{"use strict";var VF=x(),YF=Wx().left,JF=is(),zx=Dr(),QF=Ft(),XF=!QF&&zx>79&&zx<83,ZF=XF||!JF("reduce");VF({target:"Array",proto:!0,forced:ZF},{reduce:function(r){var t=arguments.length;return YF(this,r,t,t>1?arguments[1]:void 0)}})});var Jx=i((S7,Yx)=>{"use strict";Vx();var eD=se();Yx.exports=eD("Array","reduce")});var Xx=i((T7,Qx)=>{"use strict";var rD=U(),tD=Jx(),os=Array.prototype;Qx.exports=function(e){var r=e.reduce;return e===os||rD(os,e)&&r===os.reduce?tD:r}});var ew=i((E7,Zx)=>{"use strict";var nD=Xx();Zx.exports=nD});var tw=i((C7,rw)=>{"use strict";var aD=ew();rw.exports=aD});var aw=i((O7,nw)=>{"use strict";var iD=tw();nw.exports=iD});var ow=i((k7,iw)=>{"use strict";iw.exports=aw()});var sw=i((I7,uw)=>{uw.exports=ow()});var fw=i((_7,lw)=>{"use strict";var oD=$e(),uD=de(),sD=_t(),cD=Y(),lD=Kr(),cw=function(e,r,t,n,a,o,u,s){for(var c=a,l=0,f=u?cD(u,s):!1,v,p;l<n;)l in t&&(v=f?f(t[l],l,r):t[l],o>0&&oD(v)?(p=uD(v),c=cw(e,r,v,p,c,o-1)-1):(sD(c+1),lD(e,c,v)),c++),l++;return c};lw.exports=cw});var pw=i(()=>{"use strict";var fD=x(),pD=fw(),vD=D(),dD=te(),mD=de(),hD=Gn();fD({target:"Array",proto:!0},{flatMap:function(r){var t=dD(this),n=mD(t),a;return vD(r),a=hD(t,0),pD(a,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),a}})});var vw=i(()=>{"use strict";var yD=No();yD("flatMap")});var mw=i((M7,dw)=>{"use strict";pw();vw();var gD=se();dw.exports=gD("Array","flatMap")});var yw=i((j7,hw)=>{"use strict";var bD=U(),qD=mw(),us=Array.prototype;hw.exports=function(e){var r=e.flatMap;return e===us||bD(us,e)&&r===us.flatMap?qD:r}});var bw=i(($7,gw)=>{"use strict";var xD=yw();gw.exports=xD});var xw=i((L7,qw)=>{"use strict";var wD=bw();qw.exports=wD});var Sw=i((F7,ww)=>{"use strict";var SD=xw();ww.exports=SD});var Ew=i((D7,Tw)=>{"use strict";Tw.exports=Sw()});var Ow=i((B7,Cw)=>{Cw.exports=Ew()});var Iw=i((G7,kw)=>{"use strict";ao();var TD=se();kw.exports=TD("Array","concat")});var Pw=i((U7,_w)=>{"use strict";var ED=U(),CD=Iw(),ss=Array.prototype;_w.exports=function(e){var r=e.concat;return e===ss||ED(ss,e)&&r===ss.concat?CD:r}});var Aw=i((H7,Rw)=>{"use strict";var OD=Pw();Rw.exports=OD});var Mw=i((W7,Nw)=>{"use strict";var kD=Aw();Nw.exports=kD});var $w=i((K7,jw)=>{"use strict";var ID=Mw();jw.exports=ID});var Fw=i((z7,Lw)=>{"use strict";Lw.exports=$w()});var cs=i((V7,Dw)=>{Dw.exports=Fw()});var Uw=i(()=>{});var Ww=i((y9,Hw)=>{"use strict";Uw();Ao();var FD=Jr();Hw.exports=FD.f("toPrimitive")});var zw=i((g9,Kw)=>{"use strict";var DD=Ww();Kw.exports=DD});var Yw=i((b9,Vw)=>{"use strict";var BD=zw();Vw.exports=BD});var Qw=i((q9,Jw)=>{"use strict";var GD=Yw();Jw.exports=GD});var Zw=i((x9,Xw)=>{"use strict";Xw.exports=Qw()});var sS=i((G9,uS)=>{"use strict";var HD=L(),WD=Ce(),KD=A(),zD=KD("match");uS.exports=function(e){var r;return HD(e)&&((r=e[zD])!==void 0?!!r:WD(e)==="RegExp")}});var lS=i((U9,cS)=>{"use strict";var VD=sS(),YD=TypeError;cS.exports=function(e){if(VD(e))throw new YD("The method doesn't accept regular expressions");return e}});var pS=i((H9,fS)=>{"use strict";var JD=A(),QD=JD("match");fS.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[QD]=!1,"/./"[e](r)}catch{}}return!1}});var mS=i(()=>{"use strict";var XD=x(),ZD=dt(),e3=ht().f,r3=ki(),vS=Ze(),t3=lS(),n3=fr(),a3=pS(),i3=ee(),o3=ZD("".slice),u3=Math.min,dS=a3("startsWith"),s3=!i3&&!dS&&!!function(){var e=e3(String.prototype,"startsWith");return e&&!e.writable}();XD({target:"String",proto:!0,forced:!s3&&!dS},{startsWith:function(r){var t=vS(n3(this));t3(r);var n=r3(u3(arguments.length>1?arguments[1]:void 0,t.length)),a=vS(r);return o3(t,n,n+a.length)===a}})});var yS=i((z9,hS)=>{"use strict";mS();var c3=se();hS.exports=c3("String","startsWith")});var bS=i((V9,gS)=>{"use strict";var l3=U(),f3=yS(),vs=String.prototype;gS.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===vs||l3(vs,e)&&r===vs.startsWith?f3:r}});var xS=i((Y9,qS)=>{"use strict";var p3=bS();qS.exports=p3});var SS=i((J9,wS)=>{"use strict";var v3=xS();wS.exports=v3});var ES=i((Q9,TS)=>{"use strict";var d3=SS();TS.exports=d3});var OS=i((X9,CS)=>{"use strict";CS.exports=ES()});var IS=i((Z9,kS)=>{kS.exports=OS()});var _S=i(()=>{"use strict";var m3=x(),h3=At().filter,y3=wt(),g3=y3("filter");m3({target:"Array",proto:!0,forced:!g3},{filter:function(r){return h3(this,r,arguments.length>1?arguments[1]:void 0)}})});var RS=i((tY,PS)=>{"use strict";_S();var b3=se();PS.exports=b3("Array","filter")});var NS=i((nY,AS)=>{"use strict";var q3=U(),x3=RS(),ds=Array.prototype;AS.exports=function(e){var r=e.filter;return e===ds||q3(ds,e)&&r===ds.filter?x3:r}});var jS=i((aY,MS)=>{"use strict";var w3=NS();MS.exports=w3});var LS=i((iY,$S)=>{"use strict";var S3=jS();$S.exports=S3});var DS=i((oY,FS)=>{"use strict";var T3=LS();FS.exports=T3});var GS=i((uY,BS)=>{"use strict";BS.exports=DS()});var HS=i((sY,US)=>{US.exports=GS()});var oT=i(()=>{"use strict";var R3=x(),A3=W(),hs=Lr(),N3=$u(),eT=Vo(),M3=Z(),rT=L(),j3=rr(),nT=P(),ys=A3("Reflect","construct"),$3=Object.prototype,L3=[].push,aT=nT(function(){function e(){}return!(ys(function(){},[],e)instanceof e)}),iT=!nT(function(){ys(function(){})}),tT=aT||iT;R3({target:"Reflect",stat:!0,forced:tT,sham:tT},{construct:function(r,t){eT(r),M3(t);var n=arguments.length<3?r:eT(arguments[2]);if(iT&&!aT)return ys(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var a=[null];return hs(L3,a,t),new(hs(N3,r,a))}var o=n.prototype,u=j3(rT(o)?o:$3),s=hs(r,u,t);return rT(s)?s:u}})});var sT=i((GY,uT)=>{"use strict";oT();var F3=V();uT.exports=F3.Reflect.construct});var lT=i((UY,cT)=>{"use strict";var D3=sT();cT.exports=D3});var pT=i((HY,fT)=>{"use strict";var B3=lT();fT.exports=B3});var dT=i((WY,vT)=>{"use strict";var G3=pT();vT.exports=G3});var Ba=i((KY,mT)=>{"use strict";mT.exports=dT()});var yT=i((zY,hT)=>{hT.exports=Ba()});var CT=i((tJ,ET)=>{"use strict";var U3=P();ET.exports=U3(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var IT=i((nJ,kT)=>{"use strict";var H3=P(),W3=L(),K3=Ce(),OT=CT(),Ga=Object.isExtensible,z3=H3(function(){Ga(1)});kT.exports=z3||OT?function(r){return!W3(r)||OT&&K3(r)==="ArrayBuffer"?!1:Ga?Ga(r):!0}:Ga});var PT=i((aJ,_T)=>{"use strict";var V3=P();_T.exports=!V3(function(){return Object.isExtensible(Object.preventExtensions({}))})});var Ts=i((iJ,NT)=>{"use strict";var Y3=x(),J3=N(),Q3=Yr(),X3=L(),xs=K(),Z3=ne().f,RT=Rt(),e4=io(),ws=IT(),r4=Gr(),t4=PT(),AT=!1,Ve=r4("meta"),n4=0,Ss=function(e){Z3(e,Ve,{value:{objectID:"O"+n4++,weakData:{}}})},a4=function(e,r){if(!X3(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!xs(e,Ve)){if(!ws(e))return"F";if(!r)return"E";Ss(e)}return e[Ve].objectID},i4=function(e,r){if(!xs(e,Ve)){if(!ws(e))return!0;if(!r)return!1;Ss(e)}return e[Ve].weakData},o4=function(e){return t4&&AT&&ws(e)&&!xs(e,Ve)&&Ss(e),e},u4=function(){s4.enable=function(){},AT=!0;var e=RT.f,r=J3([].splice),t={};t[Ve]=1,e(t).length&&(RT.f=function(n){for(var a=e(n),o=0,u=a.length;o<u;o++)if(a[o]===Ve){r(a,o,1);break}return a},Y3({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:e4.f}))},s4=NT.exports={enable:u4,fastKey:a4,getWeakData:i4,onFreeze:o4};Q3[Ve]=!0});var $T=i((oJ,jT)=>{"use strict";var c4=x(),l4=R(),f4=Ts(),p4=P(),v4=Oe(),d4=he(),m4=la(),h4=M(),y4=L(),g4=lr(),b4=De(),q4=ne().f,x4=At().forEach,w4=H(),MT=er(),S4=MT.set,T4=MT.getterFor;jT.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,a=e.indexOf("Weak")!==-1,o=n?"set":"add",u=l4[e],s=u&&u.prototype,c={},l;if(!w4||!h4(u)||!(a||s.forEach&&!p4(function(){new u().entries().next()})))l=t.getConstructor(r,e,n,o),f4.enable();else{l=r(function(p,d){S4(m4(p,f),{type:e,collection:new u}),g4(d)||d4(d,p[o],{that:p,AS_ENTRIES:n})});var f=l.prototype,v=T4(e);x4(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(p){var d=p==="add"||p==="set";p in s&&!(a&&p==="clear")&&v4(f,p,function(h,m){var y=v(this).collection;if(!d&&a&&!y4(h))return p==="get"?void 0:!1;var g=y[p](h===0?0:h,m);return d?this:g})}),a||q4(f,"size",{configurable:!0,get:function(){return v(this).collection.size}})}return b4(l,e,!1,!0),c[e]=l,c4({global:!0,forced:!0},c),a||t.setStrong(l,e,n),l}});var FT=i((uJ,LT)=>{"use strict";var E4=Le();LT.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:E4(e,n,r[n],t);return e}});var KT=i((sJ,WT)=>{"use strict";var DT=rr(),C4=Hn(),BT=FT(),O4=Y(),k4=la(),I4=lr(),_4=he(),P4=Ln(),Ua=Fn(),R4=zo(),fn=H(),GT=Ts().fastKey,HT=er(),UT=HT.set,Es=HT.getterFor;WT.exports={getConstructor:function(e,r,t,n){var a=e(function(l,f){k4(l,o),UT(l,{type:r,index:DT(null),first:null,last:null,size:0}),fn||(l.size=0),I4(f)||_4(f,l[n],{that:l,AS_ENTRIES:t})}),o=a.prototype,u=Es(r),s=function(l,f,v){var p=u(l),d=c(l,f),h,m;return d?d.value=v:(p.last=d={index:m=GT(f,!0),key:f,value:v,previous:h=p.last,next:null,removed:!1},p.first||(p.first=d),h&&(h.next=d),fn?p.size++:l.size++,m!=="F"&&(p.index[m]=d)),l},c=function(l,f){var v=u(l),p=GT(f),d;if(p!=="F")return v.index[p];for(d=v.first;d;d=d.next)if(d.key===f)return d};return BT(o,{clear:function(){for(var f=this,v=u(f),p=v.first;p;)p.removed=!0,p.previous&&(p.previous=p.previous.next=null),p=p.next;v.first=v.last=null,v.index=DT(null),fn?v.size=0:f.size=0},delete:function(l){var f=this,v=u(f),p=c(f,l);if(p){var d=p.next,h=p.previous;delete v.index[p.index],p.removed=!0,h&&(h.next=d),d&&(d.previous=h),v.first===p&&(v.first=d),v.last===p&&(v.last=h),fn?v.size--:f.size--}return!!p},forEach:function(f){for(var v=u(this),p=O4(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:v.first;)for(p(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!c(this,f)}}),BT(o,t?{get:function(f){var v=c(this,f);return v&&v.value},set:function(f,v){return s(this,f===0?0:f,v)}}:{add:function(f){return s(this,f=f===0?0:f,f)}}),fn&&C4(o,"size",{configurable:!0,get:function(){return u(this).size}}),a},setStrong:function(e,r,t){var n=r+" Iterator",a=Es(r),o=Es(n);P4(e,r,function(u,s){UT(this,{type:n,target:u,state:a(u),kind:s,last:null})},function(){for(var u=o(this),s=u.kind,c=u.last;c&&c.removed;)c=c.previous;return!u.target||!(u.last=c=c?c.next:u.state.first)?(u.target=null,Ua(void 0,!0)):Ua(s==="keys"?c.key:s==="values"?c.value:[c.key,c.value],!1)},t?"entries":"values",!t,!0),R4(r)}}});var zT=i(()=>{"use strict";var A4=$T(),N4=KT();A4("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},N4)});var VT=i(()=>{"use strict";zT()});var JT=i((vJ,YT)=>{"use strict";YT.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,a){return t[e](n,a)}}});var oe=i((dJ,XT)=>{"use strict";var M4=W(),Ha=JT(),QT=M4("Map");XT.exports={Map:QT,set:Ha("set",2),get:Ha("get",1),has:Ha("has",1),remove:Ha("delete",1),proto:QT.prototype}});var Cs=i(()=>{"use strict";var j4=x(),$4=N(),L4=D(),F4=fr(),D4=he(),Wa=oe(),ZT=ee(),B4=P(),eE=Wa.Map,G4=Wa.has,U4=Wa.get,H4=Wa.set,W4=$4([].push),K4=ZT||B4(function(){return eE.groupBy("ab",function(e){return e}).get("a").length!==1});j4({target:"Map",stat:!0,forced:ZT||K4},{groupBy:function(r,t){F4(r),L4(t);var n=new eE,a=0;return D4(r,function(o){var u=t(o,a++);G4(n,u)?W4(U4(n,u),o):H4(n,u,[o])}),n}})});var J=i((yJ,rE)=>{"use strict";var z4=Xe(),V4=TypeError;rE.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new V4(z4(e)+" is not a map")}});var ks=i(()=>{"use strict";var Y4=x(),J4=J(),Os=oe(),Q4=ee(),X4=Os.get,Z4=Os.has,eB=Os.set;Y4({target:"Map",proto:!0,real:!0,forced:Q4},{getOrInsert:function(r,t){return Z4(J4(this),r)?X4(this,r):(eB(this,r,t),t)}})});var _s=i(()=>{"use strict";var rB=x(),tB=D(),nB=J(),Is=oe(),aB=ee(),iB=Is.get,oB=Is.has,uB=Is.set;rB({target:"Map",proto:!0,real:!0,forced:aB},{getOrInsertComputed:function(r,t){if(nB(this),tB(t),oB(this,r))return iB(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return uB(this,r,n),n}})});var nE=i((wJ,tE)=>{"use strict";xr();VT();Cs();ks();_s();Pt();yr();var sB=V();tE.exports=sB.Map});var iE=i((SJ,aE)=>{"use strict";var cB=nE();wr();aE.exports=cB});var Ps=i(()=>{"use strict";ks()});var Rs=i(()=>{"use strict";_s()});var oE=i(()=>{"use strict";Cs()});var sE=i((_J,uE)=>{"use strict";var lB=iE();Ps();Rs();oE();uE.exports=lB});var lE=i((PJ,cE)=>{"use strict";var fB=Y(),pB=Z(),vB=te(),dB=he();cE.exports=function(e,r,t){return function(a){var o=vB(a),u=arguments.length,s=u>1?arguments[1]:void 0,c=s!==void 0,l=c?fB(s,u>2?arguments[2]:void 0):void 0,f=new e,v=0;return dB(o,function(p){var d=c?l(p,v++):p;t?r(f,pB(d)[0],d[1]):r(f,d)}),f}}});var pE=i(()=>{"use strict";var mB=x(),fE=oe(),hB=lE();mB({target:"Map",stat:!0,forced:!0},{from:hB(fE.Map,fE.set,!0)})});var dE=i((NJ,vE)=>{"use strict";var yB=Z();vE.exports=function(e,r,t){return function(){for(var a=new e,o=arguments.length,u=0;u<o;u++){var s=arguments[u];t?r(a,yB(s)[0],s[1]):r(a,s)}return a}}});var hE=i(()=>{"use strict";var gB=x(),mE=oe(),bB=dE();gB({target:"Map",stat:!0,forced:!0},{of:bB(mE.Map,mE.set,!0)})});var gE=i(()=>{"use strict";var qB=x(),xB=G(),wB=he(),SB=M(),yE=D(),TB=oe().Map;qB({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=SB(this)?this:TB,a=new n;yE(t);var o=yE(a.set);return wB(r,function(u){xB(o,a,t(u),u)}),a}})});var bE=i(()=>{"use strict";var EB=x(),CB=J(),OB=oe().remove;EB({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=CB(this),t=!0,n,a=0,o=arguments.length;a<o;a++)n=OB(r,arguments[a]),t=t&&n;return!!t}})});var xE=i(()=>{"use strict";var kB=x(),IB=J(),As=oe(),_B=As.get,PB=As.has,qE=As.set;kB({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=IB(this),a,o;return PB(n,r)?(a=_B(n,r),"update"in t&&(a=t.update(a,r,n),qE(n,r,a)),a):(o=t.insert(r,n),qE(n,r,o),o)}})});var SE=i((UJ,wE)=>{"use strict";var RB=G();wE.exports=function(e,r,t){for(var n=t?e:e.iterator,a=e.next,o,u;!(o=RB(a,n)).done;)if(u=r(o.value),u!==void 0)return u}});var qe=i((HJ,TE)=>{"use strict";var AB=SE();TE.exports=function(e,r,t){return t?AB(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var EE=i(()=>{"use strict";var NB=x(),MB=Y(),jB=J(),$B=qe();NB({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=jB(this),n=MB(r,arguments.length>1?arguments[1]:void 0);return $B(t,function(a,o){if(!n(a,o,t))return!1},!0)!==!1}})});var OE=i(()=>{"use strict";var LB=x(),FB=Y(),DB=J(),CE=oe(),BB=qe(),GB=CE.Map,UB=CE.set;LB({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=DB(this),n=FB(r,arguments.length>1?arguments[1]:void 0),a=new GB;return BB(t,function(o,u){n(o,u,t)&&UB(a,u,o)}),a}})});var kE=i(()=>{"use strict";var HB=x(),WB=Y(),KB=J(),zB=qe();HB({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=KB(this),n=WB(r,arguments.length>1?arguments[1]:void 0),a=zB(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return a&&a.value}})});var IE=i(()=>{"use strict";var VB=x(),YB=Y(),JB=J(),QB=qe();VB({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=JB(this),n=YB(r,arguments.length>1?arguments[1]:void 0),a=QB(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return a&&a.key}})});var PE=i((ZJ,_E)=>{"use strict";_E.exports=function(e,r){return e===r||e!==e&&r!==r}});var RE=i(()=>{"use strict";var XB=x(),ZB=PE(),e5=J(),r5=qe();XB({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return r5(e5(this),function(t){if(ZB(t,r))return!0},!0)===!0}})});var AE=i(()=>{"use strict";var t5=x(),n5=J(),a5=qe();t5({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=a5(n5(this),function(n,a){if(n===r)return{key:a}},!0);return t&&t.key}})});var ME=i(()=>{"use strict";var i5=x(),o5=Y(),u5=J(),NE=oe(),s5=qe(),c5=NE.Map,l5=NE.set;i5({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=u5(this),n=o5(r,arguments.length>1?arguments[1]:void 0),a=new c5;return s5(t,function(o,u){l5(a,n(o,u,t),o)}),a}})});var $E=i(()=>{"use strict";var f5=x(),p5=Y(),v5=J(),jE=oe(),d5=qe(),m5=jE.Map,h5=jE.set;f5({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=v5(this),n=p5(r,arguments.length>1?arguments[1]:void 0),a=new m5;return d5(t,function(o,u){h5(a,u,n(o,u,t))}),a}})});var LE=i(()=>{"use strict";var y5=x(),g5=J(),b5=he(),q5=oe().set;y5({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=g5(this),n=arguments.length,a=0;a<n;)b5(arguments[a++],function(o,u){q5(t,o,u)},{AS_ENTRIES:!0});return t}})});var FE=i(()=>{"use strict";var x5=x(),w5=D(),S5=J(),T5=qe(),E5=TypeError;x5({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=S5(this),n=arguments.length<2,a=n?void 0:arguments[1];if(w5(r),T5(t,function(o,u){n?(n=!1,a=o):a=r(a,o,u,t)}),n)throw new E5("Reduce of empty map with no initial value");return a}})});var DE=i(()=>{"use strict";var C5=x(),O5=Y(),k5=J(),I5=qe();C5({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=k5(this),n=O5(r,arguments.length>1?arguments[1]:void 0);return I5(t,function(a,o){if(n(a,o,t))return!0},!0)===!0}})});var GE=i(()=>{"use strict";var _5=x(),BE=D(),P5=J(),Ns=oe(),R5=TypeError,A5=Ns.get,N5=Ns.has,M5=Ns.set;_5({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=P5(this),a=arguments.length;BE(t);var o=N5(n,r);if(!o&&a<3)throw new R5("Updating absent value");var u=o?A5(n,r):BE(a>2?arguments[2]:void 0)(r,n);return M5(n,r,t(u,r,n)),n}})});var js=i((hQ,UE)=>{"use strict";var Ka=G(),Ms=D(),za=M(),j5=Z(),$5=TypeError;UE.exports=function(r,t){var n=j5(this),a=Ms(n.get),o=Ms(n.has),u=Ms(n.set),s=arguments.length>2?arguments[2]:void 0,c;if(!za(t)&&!za(s))throw new $5("At least one callback required");return Ka(o,n,r)?(c=Ka(a,n,r),za(t)&&(c=t(c),Ka(u,n,r,c))):za(s)&&(c=s(),Ka(u,n,r,c)),c}});var HE=i(()=>{"use strict";var L5=x(),F5=js();L5({target:"Map",proto:!0,real:!0,forced:!0},{upsert:F5})});var WE=i(()=>{"use strict";var D5=x(),B5=js();D5({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:B5})});var zE=i((xQ,KE)=>{"use strict";var G5=sE();pE();hE();gE();bE();xE();EE();OE();kE();IE();RE();Ps();Rs();AE();ME();$E();LE();FE();DE();GE();HE();WE();KE.exports=G5});var YE=i((wQ,VE)=>{"use strict";VE.exports=zE()});var QE=i(()=>{"use strict";var U5=x(),H5=dt(),W5=Li().indexOf,K5=is(),$s=H5([].indexOf),JE=!!$s&&1/$s([1],1,-0)<0,z5=JE||!K5("indexOf");U5({target:"Array",proto:!0,forced:z5},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return JE?$s(this,r,t)||0:W5(this,r,t)}})});var ZE=i((EQ,XE)=>{"use strict";QE();var V5=se();XE.exports=V5("Array","indexOf")});var r0=i((CQ,e0)=>{"use strict";var Y5=U(),J5=ZE(),Ls=Array.prototype;e0.exports=function(e){var r=e.indexOf;return e===Ls||Y5(Ls,e)&&r===Ls.indexOf?J5:r}});var n0=i((OQ,t0)=>{"use strict";var Q5=r0();t0.exports=Q5});var i0=i((kQ,a0)=>{"use strict";var X5=n0();a0.exports=X5});var u0=i((IQ,o0)=>{"use strict";var Z5=i0();o0.exports=Z5});var c0=i((_Q,s0)=>{"use strict";s0.exports=u0()});var C0=i(()=>{"use strict";var iG=x(),oG=te(),E0=An(),uG=P(),sG=uG(function(){E0(1)});iG({target:"Object",stat:!0,forced:sG},{keys:function(r){return E0(oG(r))}})});var k0=i((MX,O0)=>{"use strict";C0();var cG=V();O0.exports=cG.Object.keys});var _0=i((jX,I0)=>{"use strict";var lG=k0();I0.exports=lG});var R0=i(($X,P0)=>{"use strict";var fG=_0();P0.exports=fG});var N0=i((LX,A0)=>{"use strict";var pG=R0();A0.exports=pG});var j0=i((FX,M0)=>{"use strict";M0.exports=N0()});var L0=i((DX,$0)=>{$0.exports=j0()});var Ee="",ei="";function ac(e){Ee=e.replace(/\/+$/,"")}function ic(e){ei=e}function Ne(){return ei?{Authorization:`Bearer ${ei}`}:{}}async function Me(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function ri(e,r,{search:t,author:n,viewer:a}={}){let o=[];r?o.push(`document=${encodeURIComponent(r)}`):e&&o.push(`uri=${encodeURIComponent(e)}`),t&&o.push(`search=${encodeURIComponent(t)}`),n&&o.push(`author=${encodeURIComponent(n)}`),a&&o.push(`viewer=${encodeURIComponent(a)}`);let u=await fetch(`${Ee}/comments?${o.join("&")}`,{headers:Ne()});return await Me(u,"Failed to fetch comments"),(await u.json()).data}async function ti({uri:e,document:r,quote:t,prefix:n,suffix:a,body:o,author:u,parent:s,visibility:c}){let l={quote:t,prefix:n,suffix:a,body:o,author:u,parent:s};c&&(l.visibility=c),r?l.document=r:l.uri=e;let f=await fetch(`${Ee}/comments`,{method:"POST",headers:{"Content-Type":"application/json",...Ne()},body:JSON.stringify(l)});return await Me(f,"Failed to create comment"),f.json()}async function oc(e){let r=await fetch(`${Ee}/comments/${e}/history`,{headers:Ne()});return await Me(r,"Failed to fetch comment history"),(await r.json()).data}async function uc(e,r){let t={};r.body!==void 0&&(t.body=r.body),r.visibility!==void 0&&(t.visibility=r.visibility);let n=await fetch(`${Ee}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...Ne()},body:JSON.stringify(t)});return await Me(n,"Failed to update comment"),n.json()}async function sc(e,r){let t=await fetch(`${Ee}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...Ne()},body:JSON.stringify({status:r})});return await Me(t,"Failed to update comment status"),t.json()}async function cc(e){let r=await fetch(`${Ee}/comments/${e}`,{method:"DELETE",headers:Ne()});await Me(r,"Failed to delete comment")}async function lc(e){let r=await fetch(`${Ee}/comments/reorder`,{method:"POST",headers:{"Content-Type":"application/json",...Ne()},body:JSON.stringify({order:e.map(t=>({id:t.id,sort_order:t.sortOrder}))})});return await Me(r,"Failed to reorder comments"),r.json()}async function fc(e,r,t){let n=await fetch(`${Ee}/comments/${e}/reactions`,{method:"POST",headers:{"Content-Type":"application/json",...Ne()},body:JSON.stringify({emoji:r,author:t})});return await Me(n,"Failed to add reaction"),n.json()}async function pc(e,r,t){let n=await fetch(`${Ee}/comments/${e}/reactions/${encodeURIComponent(r)}?author=${encodeURIComponent(t)}`,{method:"DELETE",headers:Ne()});return await Me(n,"Failed to remove reaction"),n.json()}var iF=q(Vr(),1),oF=q(Bn(),1),uF=q(na(),1),sF=q(aa(),1),cF=q(ia(),1);var Ru=q(st(),1);function ug(e,r,t,n,a,o,u){try{var s=e[o](u),c=s.value}catch(l){return void t(l)}s.done?r(c):Ru.default.resolve(c).then(n,a)}function Or(e){return function(){var r=this,t=arguments;return new Ru.default(function(n,a){var o=e.apply(r,t);function u(c){ug(o,n,a,u,s,"next",c)}function s(c){ug(o,n,a,u,s,"throw",c)}u(void 0)})}}function Kt(e,r){this.v=e,this.k=r}function ir(e){return new Kt(e,0)}var Au=q(st(),1),yg=q(ke(),1),gg=q(qa(),1);function _e(e){return function(){return new zt(e.apply(this,arguments))}}function zt(e){var r,t;function n(o,u){try{var s=e[o](u),c=s.value,l=c instanceof Kt;Au.default.resolve(l?c.v:c).then(function(f){if(l){var v=o==="return"?"return":"next";if(!c.k||f.done)return n(v,f);f=e[v](f).value}a(s.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){a("throw",f)}}function a(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new Au.default(function(s,c){var l={key:o,arg:u,resolve:s,reject:c,next:null};t?t=t.next=l:(r=t=l,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}zt.prototype[typeof yg.default=="function"&&gg.default||"@@asyncIterator"]=function(){return this},zt.prototype.next=function(e){return this._invoke("next",e)},zt.prototype.throw=function(e){return this._invoke("throw",e)},zt.prototype.return=function(e){return this._invoke("return",e)};var lF=q(le(),1),fF=q(Gq(),1);function fe(e){var r,t=nF(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function nF(e){return"startContainer"in e}function ur(e){if(aF(e))return e;var r=e,t=fe(r).createRange();return t.selectNodeContents(r),t}function aF(e){return"startContainer"in e}var ex=q(Zq(),1);function rx(e){if((0,ex.default)(e))return e}var dx=q(ke(),1),mx=q(Bo(),1),hx=q(ts(),1);function yx(e,r){var t=e==null?null:typeof dx.default<"u"&&(0,mx.default)(e)||e["@@iterator"];if(t!=null){var n,a,o,u,s=[],c=!0,l=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&((0,hx.default)(s).call(s,n.value),s.length!==r);c=!0);}catch(f){l=!0,a=f}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(l)throw a}}return s}}var gx=q(Pi(),1),bx=q(no(),1);function Ma(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function ns(e,r){if(e){var t;if(typeof e=="string")return Ma(e,r);var n=(0,gx.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,bx.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ma(e,r):void 0}}function qx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ke(e,r){return rx(e)||yx(e,r)||ns(e,r)||qx()}var xx=q(ke(),1),wx=q(qa(),1),Sx=q(rn(),1),on=q(st(),1);function lt(e){var r,t,n,a=2;for(typeof xx.default<"u"&&(t=wx.default,n=Sx.default);a--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new ja(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function ja(e){function r(t){if(Object(t)!==t)return on.default.reject(new TypeError(t+" is not an object."));var n=t.done;return on.default.resolve(t.value).then(function(a){return{value:a,done:n}})}return ja=function(n){this.s=n,this.n=n.next},ja.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var a=this.s.return;return a===void 0?on.default.resolve({value:n,done:!0}):r(a.apply(this.s,arguments))},throw:function(n){var a=this.s.return;return a===void 0?on.default.reject(n):r(a.apply(this.s,arguments))}},new ja(e)}var LD=q(le(),1);var RD=q(le(),1),AD=q(Lx(),1),ND=q(Dx(),1),MD=q(sw(),1),jD=q(Ow(),1),$D=q(cs(),1);var Bs=q(le(),1);var P3=q(le(),1);var fs=q(le(),1);function un(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function Bw(e,r){return un(e.startChunk,r.startChunk)&&un(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function kr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var ls=q(Jt(),1);var sn=q(ke(),1),Gw=q(rn(),1);function ze(e){"@babel/helpers - typeof";return ze=typeof sn.default=="function"&&typeof Gw.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof sn.default=="function"&&r.constructor===sn.default&&r!==sn.default.prototype?"symbol":typeof r},ze(e)}var eS=q(Zw(),1);function rS(e,r){if(ze(e)!="object"||!e)return e;var t=e[eS.default];if(t!==void 0){var n=t.call(e,r||"default");if(ze(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function $a(e){var r=rS(e,"string");return ze(r)=="symbol"?r:r+""}function tS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,ls.default)(e,$a(n.key),n)}}function cn(e,r,t){return r&&tS(e.prototype,r),t&&tS(e,t),(0,ls.default)(e,"prototype",{writable:!1}),e}var nS=q(Jt(),1);function Ir(e,r,t){return(r=$a(r))in e?(0,nS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var aS=q(Vr(),1);var La="Iterator exhausted before seek ended.",ln=function(){function e(r){kr(this,e),this.chunker=r,Ir(this,"currentChunkPosition",0),Ir(this,"offsetInChunk",0),this.seekTo(0)}return cn(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,a)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!un(this.currentChunk,n);){var v=this._readToPreviousChunk(),p=Ke(v,2),d=p[0],h=p[1];if(t&&(u=d+u),h===null)throw new RangeError(La)}else for(;!un(this.currentChunk,n);){var s=this._readToNextChunk(),c=Ke(s,2),l=c[0],f=c[1];if(t&&(u+=l),f===null)throw new RangeError(La)}var m=this.currentChunkPosition+a;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,aS.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var s=this.currentChunkPosition+this.currentChunk.data.length;if(s<=n){var c=this._readToNextChunk(),l=Ke(c,2),f=l[0],v=l[1];if(t&&(u+=f),v===null){if(this.position===n||o)break;throw new RangeError(La)}}else{var p=a?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,p)),this.offsetInChunk=p,a&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=a?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var h=this._readToPreviousChunk(),m=Ke(h,2),y=m[0],g=m[1];if(t&&(u=y+u),g===null){if(o)break;throw new RangeError(La)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,a=this.chunker.nextChunk();return a!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,a]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function oS(e,r){return ps.apply(this,arguments)}function ps(){return ps=Or(fs.default.mark(function e(r,t){var n,a,o,u,s,c,l,f,v,p,d,h,m,y,g,b,k,E,w,T,S,O,$=arguments;return fs.default.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:n=$.length>2&&$[2]!==void 0?$[2]:{},a=n.minimalContext,o=a===void 0?!1:a,u=n.minimumQuoteLength,s=u===void 0?0:u,c=n.maxWordLength,l=c===void 0?50:c,f=new ln(t()),v=new ln(t()),f.seekToChunk(r.startChunk,r.startIndex),p=f.readToChunk(r.endChunk,r.endIndex),d="",h="",m=function(){return d.length+p.length+h.length},m()<s&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),y=Math.floor((s-m())/2),d=f.read(-y,!1,!0)+d,m()<s&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),g=s-m(),h=h+f.read(g,!1,!0),m()<s&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),b=s-m(),d=f.read(-b,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=Fa(f,l,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+Fa(f,l,!1));case 11:return k={type:"TextQuoteSelector",exact:p,prefix:d,suffix:h},E=Da(k)(t()),_.next=16,E.next();case 16:if(w=_.sent,!(!w.done&&Bw(w.value,r))){_.next=21;break}return _.next=20,E.next();case 20:w=_.sent;case 21:if(!w.done){_.next=23;break}return _.abrupt("return",k);case 23:if(T=w.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),v.seekToChunk(T.startChunk,T.startIndex-d.length),S=iS(f,v,!0),S!==void 0&&!o&&(S=Fa(f,l,!0)+S),f.seekToChunk(r.endChunk,r.endIndex+h.length),v.seekToChunk(T.endChunk,T.endIndex+h.length),O=iS(f,v,!1),O!==void 0&&!o&&(O=O+Fa(f,l,!1)),!o){_.next=44;break}if(!(S!==void 0&&(O===void 0||S.length<=O.length))){_.next=37;break}d=S+d,_.next=42;break;case 37:if(O===void 0){_.next=41;break}h=h+O,_.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:_.next=46;break;case 44:S!==void 0&&(d=S+d),O!==void 0&&(h=h+O);case 46:_.next=11;break;case 48:case"end":return _.stop()}},e)})),ps.apply(this,arguments)}function iS(e,r,t){for(var n="";;){var a=void 0;try{a=e.read(t?-1:1)}catch{return}n=t?a+n:n+a;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(a!==o)return n}}function Fa(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var a=void 0;try{a=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(UD(a)){e.seekBy(t?1:-1);break}n=t?a+n:n+a}return n}function UD(e){return/^\s+$/.test(e)}var zS=q(Vr(),1),VS=q(Bn(),1),YS=q(na(),1),JS=q(aa(),1),QS=q(ia(),1);var ms=q(le(),1),XS=q(IS(),1),ZS=q(HS(),1);function WS(e,r){var t;if(typeof YS.default>"u"||(0,JS.default)(e)==null){if(Array.isArray(e)||(t=E3(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,s;return{s:function(){t=(0,QS.default)(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){u=!0,s=l},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw s}}}}function E3(e,r){var t;if(e){if(typeof e=="string")return KS(e,r);var n=(0,zS.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,VS.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return KS(e,r)}}function KS(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Da(e){return function(){var r=_e(ms.default.mark(function n(a){var o,u,s,c,l,f,v,p,d,h,m,y,g,b,k,E,w,T,S,O,$,Se,_,re,Te,X,F;return ms.default.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:o=e.exact,u=e.prefix||"",s=e.suffix||"",c=u+o+s,l=[],f=!0;case 6:v=a.currentChunk,p=v.data,d=[],h=WS(l),C.prev=10,h.s();case 12:if((m=h.n()).done){C.next=27;break}if(y=m.value,g=y.charactersMatched,y.endChunk===void 0&&(b=u.length+o.length-g,b<=p.length&&(y.endChunk=v,y.endIndex=b)),y.startChunk===void 0&&(k=u.length-g,(k<p.length||y.endChunk!==void 0)&&(y.startChunk=v,y.startIndex=k)),E=c.length-g,!(E<=p.length)){C.next=24;break}if(!(0,XS.default)(p).call(p,c.substring(g))){C.next=22;break}return C.next=22,y;case 22:C.next=25;break;case 24:p===c.substring(g,g+p.length)&&(y.charactersMatched+=p.length,d.push(y));case 25:C.next=12;break;case 27:C.next=32;break;case 29:C.prev=29,C.t0=C.catch(10),h.e(C.t0);case 32:return C.prev=32,h.f(),C.finish(32);case 35:if(l=d,!(c.length<=p.length)){C.next=49;break}w=0;case 38:if(!(w<=p.length)){C.next=49;break}if(T=p.indexOf(c,w),T!==-1){C.next=42;break}return C.abrupt("break",49);case 42:if(w=T+1,!(T===0&&c.length===0&&!f)){C.next=45;break}return C.abrupt("continue",38);case 45:return C.next=47,{startChunk:v,startIndex:T+u.length,endChunk:v,endIndex:T+u.length+o.length};case 47:C.next=38;break;case 49:for(S=[],O=Math.max(p.length-c.length+1,0),$=function(Je){var tc=p[Je];S=(0,ZS.default)(S).call(S,function(yC){return tc===c[Je-yC]}),tc===c[0]&&S.push(Je)},Se=O;Se<p.length;Se++)$(Se);_=WS(S);try{for(_.s();!(re=_.n()).done;)Te=re.value,X=p.length-Te,F={charactersMatched:X},X>=u.length+o.length&&(F.endChunk=v,F.endIndex=Te+u.length+o.length),(X>u.length||F.endChunk!==void 0)&&(F.startChunk=v,F.startIndex=Te+u.length),l.push(F)}catch(jr){_.e(jr)}finally{_.f()}f=!1;case 56:if(a.nextChunk()!==null){C.next=6;break}case 57:case"end":return C.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var I3=q(le(),1);var C3=q(Vr(),1),O3=q(cs(),1);var _3=q(le(),1);var vn=q(yT(),1);var bT=q(wa(),1),qT=q(Jt(),1);var gs=q(Sa(),1),gT=q(Yt(),1);function sr(e,r){var t;return sr=gs.default?(0,gT.default)(t=gs.default).call(t):function(n,a){return n.__proto__=a,n},sr(e,r)}function bs(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,bT.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,qT.default)(e,"prototype",{writable:!1}),r&&sr(e,r)}function xT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function wT(e,r){if(r&&(ze(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return xT(e)}var ST=q(Sa(),1),TT=q(Yt(),1),qs=q(xa(),1);function _r(e){var r;return _r=ST.default?(0,TT.default)(r=qs.default).call(r):function(t){return t.__proto__||(0,qs.default)(t)},_r(e)}var Ds=q(YE(),1),y0=q(wa(),1);var l0=q(c0(),1);function f0(e){try{var r;return(0,l0.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var v0=q(Ba(),1),d0=q(ts(),1),m0=q(Yt(),1);var p0=q(Ba(),1);function Fs(){try{var e=!Boolean.prototype.valueOf.call((0,p0.default)(Boolean,[],function(){}))}catch{}return(Fs=function(){return!!e})()}function h0(e,r,t){if(Fs())return v0.default.apply(null,arguments);var n=[null];(0,d0.default)(n).apply(n,r);var a=new((0,m0.default)(e).apply(e,n));return t&&sr(a,t.prototype),a}function pn(e){var r=typeof Ds.default=="function"?new Ds.default:void 0;return pn=function(n){if(n===null||!f0(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,a)}function a(){return h0(n,arguments,_r(this).constructor)}return a.prototype=(0,y0.default)(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),sr(a,n)},pn(e)}function q0(e,r){var t=fe(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),a=g0(e.startContainer,e.startOffset),o=Ke(a,2),u=o[0],s=o[1];for(n.currentNode=u;s===u.length&&n.nextNode();)u=n.currentNode,s=0;e.setStart(u,s);var c=g0(e.endContainer,e.endOffset),l=Ke(c,2),f=l[0],v=l[1];for(n.currentNode=f;v===0&&n.previousNode();)f=n.currentNode,v=f.length;return e.setEnd(f,v),e}function g0(e,r){var t;if(b0(e))return[e,r];var n;if(eG(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(b0(n))return[n,0];var a=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=a.createTreeWalker(a,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function b0(e){return e.nodeType===Node.TEXT_NODE}function eG(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function w0(e){var r=rG();return function(){var n=_r(e),a;if(r){var o=_r(this).constructor;a=(0,vn.default)(n,arguments,o)}else a=n.apply(this,arguments);return wT(this,a)}}function rG(){if(typeof Reflect>"u"||!vn.default||vn.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,vn.default)(Boolean,[],function(){})),!0}catch{return!1}}var Va=function(e){bs(t,e);var r=w0(t);function t(n){return kr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(pn(TypeError)),tG=function(e){bs(t,e);var r=w0(t);function t(n){return kr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(pn(TypeError)),Pr=function(){function e(r){var t=this;if(kr(this,e),Ir(this,"scope",void 0),Ir(this,"iter",void 0),this.scope=ur(r),this.iter=fe(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!x0(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Va}}return cn(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!x0(t))throw new Va;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new tG;var n=t===this.scope.startContainer?this.scope.startOffset:0,a=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:a,data:t.data.substring(n,a),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=q0(t,this.scope),a=this.nodeToChunk(n.startContainer),o=n.startOffset-a.startOffset,u=this.nodeToChunk(n.endContainer),s=n.endOffset-u.startOffset;return{startChunk:a,startIndex:o,endChunk:u,endIndex:s}}},{key:"chunkRangeToRange",value:function(t){var n=fe(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function x0(e){return e.nodeType===Node.TEXT_NODE}function S0(e,r){return Gs.apply(this,arguments)}function Gs(){return Gs=Or(Bs.default.mark(function e(r,t){var n,a,o,u=arguments;return Bs.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},a=ur(t??fe(r)),o=new Pr(a),c.next=5,oS(o.rangeToChunkRange(r),function(){return new Pr(a)},n);case 5:return c.abrupt("return",c.sent);case 6:case"end":return c.stop()}},e)})),Gs.apply(this,arguments)}var Us=q(le(),1);function T0(e){var r=Da(e);return function(){var t=_e(Us.default.mark(function a(o){var u,s,c,l,f,v,p,d;return Us.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new Pr(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof Va)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:s=!0,c=!1,m.prev=13,f=lt(r(u));case 15:return m.next=17,ir(f.next());case 17:return v=m.sent,s=v.done,m.next=21,ir(v.value);case 21:if(p=m.sent,s){m.next=29;break}return d=p,m.next=26,u.chunkRangeToRange(d);case 26:s=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),c=!0,l=m.t1;case 35:if(m.prev=35,m.prev=36,!(!s&&f.return!=null)){m.next=40;break}return m.next=40,ir(f.return());case 40:if(m.prev=40,!c){m.next=43;break}throw l;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},a,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(a){return t.apply(this,arguments)}return n}()}var nG=q(le(),1);var aG=q(le(),1);var vG=q(L0(),1),dG=q(Vr(),1),mG=q(Bn(),1),hG=q(na(),1),yG=q(aa(),1),gG=q(ia(),1);async function F0(e,r){let t=await S0(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function Ya(e,r){let t=T0({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var Rr="fb-highlight",Hs="fb-highlight-active";var bG="fb-highlight-private",dn=null;function B0(e){dn=e}function Ja(e,r,{isPrivate:t}={}){let n=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let a=D0(e,r,t);n.push(a)}else{let a=xG(e);for(let o=0;o<a.length;o++){let u=a[o],s=document.createRange();u===e.startContainer?(s.setStart(u,e.startOffset),s.setEnd(u,u.textContent.length)):u===e.endContainer?(s.setStart(u,0),s.setEnd(u,e.endOffset)):s.selectNodeContents(u),s.collapsed||n.push(D0(s,r,t))}}return n}function D0(e,r,t){let n=e.commonAncestorContainer;for(;n&&n.nodeType!==Node.ELEMENT_NODE;)n=n.parentNode;let a=n,o=!1,u=null;for(;a;){if(a.tagName==="foreignObject"){o=!1;break}a.tagName==="text"&&a instanceof SVGElement&&(o=!0),a.tagName==="svg"&&(u=a),a=a.parentElement}if(o&&u)return qG(e,r,u);let s=document.createElement("mark");s.className=Rr+(t?` ${bG}`:""),s.dataset.commentId=r,s.addEventListener("click",()=>{dn&&dn(r)});try{e.surroundContents(s)}catch(c){return console.warn("[feedback-layer] Failed to create highlight:",c),null}return s}function qG(e,r,t){try{let n=e.getClientRects();if(n.length===0)return null;let a="http://www.w3.org/2000/svg",o=t.getScreenCTM();if(!o)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let u=e.commonAncestorContainer;for(;u&&u.nodeType!==Node.ELEMENT_NODE;)u=u.parentNode;let s=u,c=null;for(;s&&s!==t;){if(s.tagName==="text"){c=s.parentElement;break}s=s.parentElement}let l=c||t,f=o;l!==t&&l.getScreenCTM&&(f=l.getScreenCTM());let v=document.createElementNS(a,"g");v.setAttribute("class",Rr),v.setAttribute("data-comment-id",r),v.style.cursor="pointer";for(let y=0;y<n.length;y++){let g=n[y],b=document.createElementNS(a,"rect"),k=t.createSVGPoint();k.x=g.left,k.y=g.top;let E=k.matrixTransform(f.inverse()),w=g.width/f.a,T=g.height/f.d;b.setAttribute("x",E.x),b.setAttribute("y",E.y),b.setAttribute("width",w),b.setAttribute("height",T),b.setAttribute("rx","2"),b.setAttribute("ry","2"),b.style.pointerEvents="none",v.appendChild(b)}l&&l!==t?l.appendChild(v):t.appendChild(v);let p=e.commonAncestorContainer;for(;p&&p.nodeType!==Node.ELEMENT_NODE;)p=p.parentNode;let d=new Set,h=p;for(;h&&h!==t;)h.tagName==="text"&&h instanceof SVGElement&&(d.add(h),h.querySelectorAll("tspan").forEach(g=>d.add(g))),h=h.parentElement;let m=y=>{y.preventDefault(),y.stopPropagation(),dn&&dn(r)};return d.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",m),y.dataset.fbCommentId=r}),v}catch(n){return console.warn("[feedback-layer] Failed to create SVG highlight:",n),null}}function Ws(e){document.querySelectorAll(`.${Rr}[data-comment-id="${e}"]`).forEach(n=>{let a=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)a.removeChild(n);else{for(;n.firstChild;)a.insertBefore(n.firstChild,n);a.removeChild(n),a.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function G0(){document.querySelectorAll(`.${Rr}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function Qa(e){document.querySelectorAll(`.${Rr}`).forEach(r=>{r.dataset.commentId===e?r.classList.add(Hs):r.classList.remove(Hs)})}function U0(e){let r=document.querySelector(`.${Rr}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function Ks(e){let r="rgba(255, 212, 0, 0.12)",t="rgba(255, 212, 0, 0.35)";document.querySelectorAll(`.${Rr}`).forEach(n=>{let a=n.dataset.commentId,o=e.has(a);n.classList.contains(Hs)||(n.tagName==="g"||n instanceof SVGElement?n.querySelectorAll("rect").forEach(s=>{s.setAttribute("fill-opacity",o?"0.12":"0.35")}):n.style.backgroundColor=o?r:t)})}function xG(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let a=document.createRange();return a.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,a)<0&&e.compareBoundaryPoints(Range.START_TO_END,a)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function H0(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,a)=>{let o=[`**${a+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let s of u)o.push(`  - **[${s.author}]** (reply): ${s.body}`);return o.join(`
`)}).join(`

`)}function W0(e,r){let t=H0(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(a=>!a.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function cr(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var wG=`
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
`,K0=null,z0=null;function V0(e,r){z0=e,K0=r,SG()}function SG(){let e=document.createElement("style");e.textContent=wG,document.head.appendChild(e)}function Y0(){let e=K0(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let a=document.createElement("button");a.className="hf-modal-close",a.textContent="\xD7",a.addEventListener("click",()=>r.remove()),n.appendChild(a);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",v=>{v.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let s=document.querySelector(z0.contentSelector||"body").innerHTML,c=W0(s,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${c.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${cr(c)}</textarea>
  `;let l=document.createElement("button");l.className="hf-btn hf-btn-primary",l.textContent="Copy Prompt",l.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c),l.textContent="Copied!"}catch{l.textContent="Copy failed"}setTimeout(()=>l.textContent="Copy Prompt",2e3)}),u.appendChild(l);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function J0(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function Q0(e,r){return e.length>r?e.slice(0,r)+"...":e}function X0(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var mn=null;function eC(e){mn=document.createElement("div"),mn.className="fb-toast-container",e.appendChild(mn)}function Ye(e,r="success"){if(!mn)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>Z0(t)),t.appendChild(o)}mn.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>Z0(t),r==="error"?8e3:4e3)}function Z0(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}function rC(e,r){let t;return(...n)=>{clearTimeout(t),t=setTimeout(()=>e(...n),r)}}function tC(e,r,t){if(r===t)return[];if(r<0||r>=e.length)return[];if(t<0||t>=e.length)return[];let n=e.map(o=>o.id),[a]=n.splice(r,1);return n.splice(t,0,a),n.map((o,u)=>({id:o,sortOrder:u}))}var TG=320,iC="feedback-layer-commenter",B=null,Ae=null,Re=null,zs=null,oC=null,Ys=null,Js=null,Qs=null,Xs=null,Vs=null,yn=null,hn=null,EG=null,Zs=!1,ft="document",Xa=null,uC=[],sC=new Set,cC=null,nC=!1;function CG(){nC||(nC=!0,AG())}function xe(){return localStorage.getItem(iC)||""}function lC({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:a,onSearch:o,onReaction:u,onReorder:s,onFetchHistory:c}){oC=e,Ys=r,Js=t,Qs=n,Xs=a,Vs=o,yn=u,hn=s,EG=c,CG(),B=document.createElement("div"),B.className="fb-sidebar fb-sidebar-collapsed",B.innerHTML=`
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
               value="${cr(xe())}">
      </div>
      <div class="fb-filter-section">
        <input type="text" class="fb-search-input" placeholder="Search comments...">
        <select class="fb-author-filter">
          <option value="">All authors</option>
        </select>
        <div class="fb-filter-row">
          <label class="fb-filter-toggle">
            <input type="checkbox" class="fb-show-resolved-cb">
            <span>Show closed</span>
          </label>
          <button class="fb-sort-toggle" title="Toggle sort order">
            <span class="fb-sort-icon">&#x1F4CD;</span>
            <span class="fb-sort-label">Doc order</span>
          </button>
        </div>
      </div>
      <div class="fb-comment-list"></div>
      <div class="fb-form-section" style="display:none"></div>
    </div>
  `;let l=document.createElement("button");l.className="fb-sidebar-tab",l.textContent="Feedback",l.addEventListener("click",()=>gn()),document.body.appendChild(l),document.body.appendChild(B),eC(B),Ae=B.querySelector(".fb-comment-list"),Re=B.querySelector(".fb-form-section");let f=B.querySelector(".fb-name-input");f.addEventListener("input",()=>{localStorage.setItem(iC,f.value.trim())}),B.querySelector(".fb-ai-btn").addEventListener("click",()=>Y0()),B.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>OG());let d=B.querySelector(".fb-show-resolved-cb");d.addEventListener("change",()=>{Zs=d.checked,pe(uC,sC,new Map,cC)}),B.querySelector(".fb-sort-toggle").addEventListener("click",()=>{ec(ft==="document"?"custom":"document"),hn&&hn(null)});let m=B.querySelector(".fb-search-input"),y=B.querySelector(".fb-author-filter"),g=()=>{Vs&&Vs(m.value.trim(),y.value)};m.addEventListener("input",rC(g,300)),y.addEventListener("change",g)}function fC(){return ft}function ec(e){ft=e;let r=B?.querySelector(".fb-sort-toggle");r&&(r.querySelector(".fb-sort-icon").textContent=e==="custom"?"\u{1F522}":"\u{1F4CD}",r.querySelector(".fb-sort-label").textContent=e==="custom"?"Custom order":"Doc order",r.classList.toggle("fb-sort-toggle-active",e==="custom"))}function gn(){B.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden")}function OG(){B.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden")}function pC(e){if(gn(),!xe()){let a=B.querySelector(".fb-name-input");a.classList.add("fb-name-input-error"),setTimeout(()=>a.classList.remove("fb-name-input-error"),2e3)}zs=e,Re.style.display="",Re.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${cr(Q0(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
        <button class="fb-visibility-toggle" title="Toggle private/public" data-visibility="public">
          <svg class="fb-visibility-icon-public" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>
          <svg class="fb-visibility-icon-private" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </button>
      </div>
    </div>
  `;let r=Re.querySelector(".fb-form-textarea");r.focus();let t=Re.querySelector(".fb-visibility-toggle");t.addEventListener("click",a=>{a.preventDefault();let u=t.dataset.visibility==="public"?"private":"public";t.dataset.visibility=u,t.classList.toggle("fb-visibility-private",u==="private"),t.title=u==="private"?"Private (only you)":"Public (everyone)"});let n=()=>{if(!xe()){let u=B.querySelector(".fb-name-input");u.focus(),u.classList.add("fb-name-input-error"),setTimeout(()=>u.classList.remove("fb-name-input-error"),2e3);return}let a=r.value.trim();if(!a)return;let o=t.dataset.visibility;oC({comment:a,commenter:xe(),visibility:o}),Re.style.display="none",zs=null};Re.querySelector(".fb-submit-btn").addEventListener("click",n),r.addEventListener("keydown",a=>{a.key==="Enter"&&(a.metaKey||a.ctrlKey)&&(a.preventDefault(),n())}),Re.querySelector(".fb-cancel-btn").addEventListener("click",()=>{Re.style.display="none",zs=null}),Re.scrollIntoView({behavior:"smooth",block:"nearest"})}function vC(e){let r=B.querySelector(".fb-author-filter"),t=r.value;r.innerHTML='<option value="">All authors</option>';for(let n of e.sort()){let a=document.createElement("option");a.value=n,a.textContent=n,r.appendChild(a)}e.includes(t)&&(r.value=t)}function pe(e,r=new Set,t=new Map,n=null){uC=e,sC=r,cC=n,Ae.innerHTML="";let{topLevel:a,repliesByParent:o}=J0(e),u;ft==="custom"?u=a.slice().sort((f,v)=>{let p=f.sort_order!=null?f.sort_order:1/0,d=v.sort_order!=null?v.sort_order:1/0;return p!==d?p-d:new Date(f.created_at)-new Date(v.created_at)}):u=a.slice().sort((f,v)=>{let p=t.get(f.id),d=t.get(v.id);return!p||!d?0:p.compareBoundaryPoints(Range.START_TO_START,d)});let s=u.filter(f=>{let v=r.has(f.id),p=f.status==="closed";return v||p&&Zs}),c=Zs?s:s.filter(f=>f.status!=="closed");if(u.length===0){Ae.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let l=u.filter(f=>!r.has(f.id)&&f.status!=="closed").length;if(c.length===0){l>0?Ae.innerHTML=`<div class="fb-empty">
        ${s.length} comment(s) resolved.
        ${l>0?`<br>${l} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:Ae.innerHTML=`<div class="fb-empty">All ${u.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let f=0;f<c.length;f++){let v=c[f],p=document.createElement("div");p.className="fb-thread",p.dataset.commentId=v.id,p.dataset.index=f;let d=o.get(v.id)||[];n!==null&&(n.has(v.id)||d.some(y=>n.has(y.id))||p.classList.add("fb-thread-dimmed")),ft==="custom"&&(p.draggable=!0,p.addEventListener("dragstart",m=>{Xa=v.id,p.classList.add("fb-thread-dragging"),m.dataTransfer.effectAllowed="move",m.dataTransfer.setData("text/plain",v.id)}),p.addEventListener("dragend",()=>{Xa=null,p.classList.remove("fb-thread-dragging"),Ae.querySelectorAll(".fb-thread-drop-above, .fb-thread-drop-below").forEach(m=>{m.classList.remove("fb-thread-drop-above","fb-thread-drop-below")})}),p.addEventListener("dragover",m=>{if(m.preventDefault(),m.dataTransfer.dropEffect="move",!Xa||Xa===v.id)return;let y=p.getBoundingClientRect(),g=y.top+y.height/2;p.classList.remove("fb-thread-drop-above","fb-thread-drop-below"),m.clientY<g?p.classList.add("fb-thread-drop-above"):p.classList.add("fb-thread-drop-below")}),p.addEventListener("dragleave",()=>{p.classList.remove("fb-thread-drop-above","fb-thread-drop-below")}),p.addEventListener("drop",m=>{m.preventDefault(),p.classList.remove("fb-thread-drop-above","fb-thread-drop-below");let y=m.dataTransfer.getData("text/plain");if(!y||y===v.id)return;let g=c.findIndex(T=>T.id===y),b=p.getBoundingClientRect(),k=b.top+b.height/2,E=parseInt(p.dataset.index,10);if(m.clientY>=k&&g<E||m.clientY<k&&g>E||(m.clientY>=k?E=Math.min(E+1,c.length-1):E=Math.max(E-1,0)),g===E)return;let w=tC(c,g,E);hn&&w.length>0&&hn(w)})),p.appendChild(aC(v,!1));for(let m of d)p.appendChild(aC(m,!0));let h=document.createElement("button");h.className="fb-reply-btn",h.textContent="Reply",h.addEventListener("click",m=>{m.stopPropagation(),PG(v.id,p,h)}),p.appendChild(h),Ae.appendChild(p)}}function aC(e,r){let t=e.status==="closed",n=e.visibility==="private",a=document.createElement("div");a.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":"")+(n?" fb-cmt-private":""),a.dataset.id=e.id;let o=ft==="custom"&&!r?'<span class="fb-drag-handle" title="Drag to reorder">&#x2630;</span>':"",u=n?'<span class="fb-cmt-private-badge" title="Private annotation">&#x1F512;</span>':"";a.innerHTML=`
    ${o}
    <div class="fb-cmt-body">${cr(e.body)}</div>
    <div class="fb-cmt-meta">
      ${u}
      <span class="fb-cmt-author">${cr(e.author)}</span>
      <span class="fb-cmt-time">${X0(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
    <div class="fb-reactions"></div>
  `;let s=a.querySelector(".fb-reactions");return IG(s,e),r||(a.addEventListener("click",c=>{c.target.closest(".fb-cmt-delete")||c.target.closest(".fb-cmt-resolve")||c.target.closest(".fb-cmt-edit")||c.target.closest(".fb-reactions")||c.target.closest(".fb-drag-handle")||(Qa(e.id),U0(e.id),Ae.querySelectorAll(".fb-cmt-card").forEach(l=>l.classList.remove("fb-cmt-active")),a.classList.add("fb-cmt-active"))}),a.querySelector(".fb-cmt-resolve").addEventListener("click",c=>{c.stopPropagation(),Js&&Js(e.id,!t)})),a.querySelector(".fb-cmt-edit").addEventListener("click",c=>{c.stopPropagation(),RG(e,a)}),a.querySelector(".fb-cmt-delete").addEventListener("click",c=>{c.stopPropagation(),Ys&&Ys(e.id)}),a}var kG=["\u{1F44D}","\u2764\uFE0F","\u{1F440}","\u{1F389}","\u{1F914}","\u{1F602}"];function IG(e,r){let t=r.reactions||[],n=xe();for(let o of t){let u=document.createElement("button");u.className="fb-reaction-badge",n&&o.authors.includes(n)&&u.classList.add("fb-reaction-mine"),u.textContent=`${o.emoji} ${o.count}`,u.title=o.authors.join(", "),u.addEventListener("click",s=>{s.stopPropagation(),yn&&yn(r.id,o.emoji)}),e.appendChild(u)}let a=document.createElement("button");a.className="fb-reaction-add",a.textContent="+",a.title="Add reaction",a.addEventListener("click",o=>{o.stopPropagation(),_G(e,r,a)}),e.appendChild(a)}function _G(e,r,t){let n=e.querySelector(".fb-emoji-picker");if(n){n.remove();return}let a=document.createElement("div");a.className="fb-emoji-picker";for(let u of kG){let s=document.createElement("button");s.className="fb-emoji-option",s.textContent=u,s.addEventListener("click",c=>{c.stopPropagation(),a.remove(),yn&&yn(r.id,u)}),a.appendChild(s)}e.insertBefore(a,t.nextSibling);let o=u=>{!a.contains(u.target)&&u.target!==t&&(a.remove(),document.removeEventListener("click",o,!0))};setTimeout(()=>document.addEventListener("click",o,!0),0)}function PG(e,r,t){gn();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let a=document.createElement("div");a.className="fb-reply-form",a.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!xe()){let c=B.querySelector(".fb-name-input");c.focus(),c.classList.add("fb-name-input-error"),setTimeout(()=>c.classList.remove("fb-name-input-error"),2e3);return}let s=a.querySelector("textarea").value.trim();s&&(Qs&&Qs({parent_id:e,comment:s,commenter:xe()}),a.remove(),t.style.display="")};a.querySelector(".fb-reply-submit").addEventListener("click",o);let u=a.querySelector("textarea");u.addEventListener("keydown",s=>{s.key==="Enter"&&(s.metaKey||s.ctrlKey)&&(s.preventDefault(),o())}),a.querySelector(".fb-reply-cancel").addEventListener("click",()=>{a.remove(),t.style.display=""}),r.insertBefore(a,t),u.focus()}function RG(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${cr(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let a=t.querySelector("textarea");a.focus(),a.setSelectionRange(a.value.length,a.value.length);let o=()=>{let u=a.value.trim();u&&Xs&&Xs(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),a.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function dC(e){let r=Ae.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(Ae.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function AG(){let e=document.createElement("style");e.textContent=`
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
      width: ${TG}px;
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
      gap: 3px;
      padding: 2px 8px;
      border-radius: 12px;
      border: 1px solid var(--remarq-border-subtle);
      background: var(--remarq-bg-secondary);
      font-size: 12px;
      cursor: pointer;
      line-height: 1.4;
      font-family: inherit;
    }
    .fb-reaction-badge:hover {
      border-color: var(--remarq-accent);
      background: var(--remarq-accent-ring);
    }
    .fb-reaction-mine {
      border-color: var(--remarq-accent);
      background: var(--remarq-accent-ring);
    }
    .fb-reaction-add {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 22px;
      border-radius: 12px;
      border: 1px dashed var(--remarq-border-subtle);
      background: none;
      font-size: 14px;
      cursor: pointer;
      color: var(--remarq-text-faint);
      line-height: 1;
      font-family: inherit;
    }
    .fb-reaction-add:hover {
      border-color: var(--remarq-accent);
      color: var(--remarq-accent);
    }
    .fb-emoji-picker {
      display: flex;
      gap: 2px;
      padding: 4px;
      background: var(--remarq-bg-surface);
      border: 1px solid var(--remarq-border);
      border-radius: 8px;
      box-shadow: 0 2px 8px var(--remarq-shadow);
    }
    .fb-emoji-option {
      background: none;
      border: none;
      font-size: 16px;
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      line-height: 1;
    }
    .fb-emoji-option:hover {
      background: var(--remarq-bg-hover);
    }
    .fb-filter-section {
      margin-bottom: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .fb-search-input {
      width: 100%;
      padding: 6px 10px;
      border: 1px solid var(--remarq-border-input);
      border-radius: 6px;
      font-size: 13px;
      box-sizing: border-box;
      font-family: inherit;
      background: var(--remarq-bg-surface);
      color: var(--remarq-text);
    }
    .fb-search-input:focus {
      outline: none;
      border-color: var(--remarq-accent);
      box-shadow: 0 0 0 2px var(--remarq-accent-ring);
    }
    .fb-author-filter {
      width: 100%;
      padding: 6px 10px;
      border: 1px solid var(--remarq-border-input);
      border-radius: 6px;
      font-size: 13px;
      box-sizing: border-box;
      font-family: inherit;
      background: var(--remarq-bg-surface);
      color: var(--remarq-text);
      cursor: pointer;
    }
    .fb-author-filter:focus {
      outline: none;
      border-color: var(--remarq-accent);
      box-shadow: 0 0 0 2px var(--remarq-accent-ring);
    }
    .fb-thread-dimmed {
      opacity: 0.35;
    }
    .fb-drag-handle {
      display: block;
      cursor: grab;
      color: var(--remarq-icon-faint);
      font-size: 12px;
      line-height: 1;
      padding: 0 0 4px;
      user-select: none;
      letter-spacing: 2px;
    }
    .fb-drag-handle:hover {
      color: var(--remarq-accent);
    }
    .fb-drag-handle:active {
      cursor: grabbing;
    }
    .fb-thread-dragging {
      opacity: 0.4;
    }
    .fb-thread-drop-above {
      border-top: 2px solid var(--remarq-accent);
    }
    .fb-thread-drop-below {
      border-bottom: 2px solid var(--remarq-accent);
    }
    .fb-filter-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .fb-sort-toggle {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      background: none;
      border: 1px solid var(--remarq-border-input);
      border-radius: 6px;
      padding: 3px 8px;
      font-size: 11px;
      cursor: pointer;
      color: var(--remarq-text-muted);
      font-family: inherit;
    }
    .fb-sort-toggle:hover {
      border-color: var(--remarq-accent);
      color: var(--remarq-accent);
    }
    .fb-sort-toggle-active {
      border-color: var(--remarq-accent);
      background: var(--remarq-accent-ring);
      color: var(--remarq-accent);
    }
    .fb-sort-icon {
      font-size: 12px;
    }
    .fb-sort-label {
      font-size: 11px;
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

    /* \u2500\u2500 Visibility toggle \u2500\u2500 */
    .fb-visibility-toggle {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: 1px solid var(--remarq-border-input);
      border-radius: 6px;
      padding: 5px 8px;
      cursor: pointer;
      color: var(--remarq-text-muted);
      margin-left: auto;
      line-height: 1;
    }
    .fb-visibility-toggle:hover {
      border-color: var(--remarq-accent);
      color: var(--remarq-accent);
    }
    .fb-visibility-toggle.fb-visibility-private {
      border-color: var(--remarq-accent);
      background: var(--remarq-accent-ring);
      color: var(--remarq-accent);
    }
    .fb-visibility-toggle.fb-visibility-private .fb-visibility-icon-public { display: none; }
    .fb-visibility-toggle.fb-visibility-private .fb-visibility-icon-private { display: inline !important; }

    /* \u2500\u2500 Private comment card styling \u2500\u2500 */
    .fb-cmt-private {
      border-style: dashed;
      background: var(--remarq-bg-hover);
    }
    .fb-cmt-private-badge {
      font-size: 11px;
      line-height: 1;
    }

    /* \u2500\u2500 Private highlight styling \u2500\u2500 */
    .fb-highlight-private {
      border: 2px dashed var(--remarq-accent);
      border-radius: 3px;
      opacity: 0.7;
    }

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
  `,document.head.appendChild(e)}var pt=null,Nr=null,Mr=null,I=[],Ar=null,we=null,Q=new Set,ue=new Map,ve=null,mC="remarq-sort-mode-";function NG(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null,theme:e?.dataset.theme||"auto",apiKey:e?.dataset.apiKey||null};ac(r.apiUrl),r.apiKey&&ic(r.apiKey);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{pt=document.querySelector(r.contentSelector)||document.body,Nr=r.documentUri||window.location.origin+window.location.pathname,Mr=r.documentId||null,document.documentElement.dataset.remarqTheme=r.theme,lC({onSubmit:FG,onDelete:WG,onResolve:DG,onReply:BG,onEdit:GG,onSearch:LG,onReaction:UG,onReorder:HG,onFetchHistory:u=>oc(u)});let a=Mr||Nr;localStorage.getItem(mC+a)==="custom"&&ec("custom"),B0(u=>{gn(),dC(u),Qa(u)}),jG(),await t(),hC(),V0(r,()=>I)}catch(a){console.error("[feedback-layer] Boot failed:",a)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function hC(){try{let e=xe()||void 0;I=await ri(Nr,Mr,{viewer:e}),Q=await MG(I),Za(),pe(I,Q,ue,ve)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),Ye(`Failed to load comments: ${e.message}`,"error")}}function Za(){let e=[...new Set(I.map(r=>r.author))];vC(e)}async function MG(e){G0();let r=new Set;ue.clear();for(let t of e)if(!t.parent)try{let n=await Ya({exact:t.quote,prefix:t.prefix,suffix:t.suffix},pt);n&&t.status!=="closed"?(Ja(n,t.id,{isPrivate:t.visibility==="private"}),r.add(t.id),ue.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),ue.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function jG(){document.addEventListener("mouseup",rc),document.addEventListener("keyup",rc),document.addEventListener("touchend",rc)}function rc(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){bn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){bn();return}if(!pt.contains(r.commonAncestorContainer)){bn();return}$G(r)},10)}function $G(e){bn();let r=e.getBoundingClientRect();we=document.createElement("button"),we.className="fb-annotate-tooltip",we.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',we.style.top=window.scrollY+r.bottom+8+"px",we.style.left=window.scrollX+r.left+r.width/2-40+"px";let t=async n=>{n.preventDefault(),n.stopPropagation();let a=window.getSelection();if(!a||a.isCollapsed)return;let o=a.getRangeAt(0);try{Ar=await F0(o,pt),pC(Ar.exact)}catch(u){console.error("[feedback-layer] Failed to create selector:",u)}bn()};we.addEventListener("mousedown",t),we.addEventListener("touchstart",t),document.body.appendChild(we)}function bn(){we&&(we.remove(),we=null)}async function LG(e,r){if(!e&&!r){ve=null,pe(I,Q,ue,null),Ks(new Set);return}try{let t=xe()||void 0,n=await ri(Nr,Mr,{search:e,author:r,viewer:t});ve=new Set(n.map(o=>o.id)),pe(I,Q,ue,ve);let a=new Set;for(let o of I)!o.parent&&Q.has(o.id)&&!ve.has(o.id)&&a.add(o.id);Ks(a)}catch(t){console.error("[feedback-layer] Search failed:",t)}}async function FG({comment:e,commenter:r,visibility:t}){if(Ar){try{let n=await ti({uri:Nr,document:Mr,quote:Ar.exact,prefix:Ar.prefix,suffix:Ar.suffix,body:e,author:r,visibility:t});I.push(n);let a=await Ya({exact:n.quote,prefix:n.prefix,suffix:n.suffix},pt);a&&(Ja(a,n.id,{isPrivate:n.visibility==="private"}),Q.add(n.id)),Za(),pe(I,Q,ue,ve),window.getSelection().removeAllRanges()}catch(n){console.error("[feedback-layer] Failed to create comment:",n),Ye(`Failed to save comment: ${n.message}`,"error")}Ar=null}}async function DG(e,r){try{let n=await sc(e,r?"closed":"open"),a=I.findIndex(o=>o.id===e);if(a!==-1&&(I[a]=n),r)Ws(e);else{let o=n,u=await Ya({exact:o.quote,prefix:o.prefix,suffix:o.suffix},pt);u?(Ja(u,o.id,{isPrivate:o.visibility==="private"}),Q.add(o.id)):Q.delete(o.id)}pe(I,Q,ue,ve)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),Ye(`Failed to update comment: ${t.message}`,"error")}}async function BG({parent_id:e,comment:r,commenter:t}){try{let n=await ti({uri:Nr,document:Mr,body:r,author:t,parent:e});I.push(n),Za(),pe(I,Q,ue,ve)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),Ye(`Failed to save reply: ${n.message}`,"error")}}async function GG(e,r){try{let t=await uc(e,{body:r}),n=I.findIndex(a=>a.id===e);n!==-1&&(I[n]=t),pe(I,Q,ue,ve)}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),Ye(`Failed to update comment: ${t.message}`,"error")}}async function UG(e,r){let t=xe();if(t)try{let o=I.find(c=>c.id===e)?.reactions?.find(c=>c.emoji===r)?.authors.includes(t),u;o?u=await pc(e,r,t):u=await fc(e,r,t);let s=I.findIndex(c=>c.id===e);s!==-1&&(I[s]={...I[s],reactions:u.reactions}),pe(I,Q,ue,ve)}catch(n){console.error("[feedback-layer] Failed to toggle reaction:",n),Ye(`Failed to update reaction: ${n.message}`,"error")}}async function HG(e){let r=Mr||Nr;if(e===null){localStorage.setItem(mC+r,fC()),pe(I,Q,ue,ve);return}for(let t of e){let n=I.findIndex(a=>a.id===t.id);n!==-1&&(I[n]={...I[n],sort_order:t.sortOrder})}pe(I,Q,ue,ve);try{await lc(e)}catch(t){console.error("[feedback-layer] Failed to reorder comments:",t),Ye(`Failed to reorder: ${t.message}`,"error"),hC()}}async function WG(e){try{await cc(e),Ws(e),Q.delete(e),I=I.filter(r=>r.id!==e&&r.parent!==e),Za(),pe(I,Q,ue,ve)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),Ye(`Failed to delete comment: ${r.message}`,"error")}}try{NG()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
