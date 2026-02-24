var FeedbackLayer=(()=>{var bC=Object.create;var cc=Object.defineProperty;var gC=Object.getOwnPropertyDescriptor;var qC=Object.getOwnPropertyNames;var xC=Object.getPrototypeOf,wC=Object.prototype.hasOwnProperty;var i=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var SC=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of qC(r))!wC.call(e,a)&&a!==t&&cc(e,a,{get:()=>r[a],enumerable:!(n=gC(r,a))||n.enumerable});return e};var b=(e,r,t)=>(t=e!=null?bC(xC(e)):{},SC(r||!e||!e.__esModule?cc(t,"default",{value:e,enumerable:!0}):t,e));var _=i((Z6,hc)=>{"use strict";hc.exports=function(e){try{return!!e()}catch{return!0}}});var Mr=i((eG,yc)=>{"use strict";var EC=_();yc.exports=!EC(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var N=i((rG,qc)=>{"use strict";var bc=Mr(),gc=Function.prototype,oi=gc.call,TC=bc&&gc.bind.bind(oi,oi);qc.exports=bc?TC:function(e){return function(){return oi.apply(e,arguments)}}});var U=i((tG,xc)=>{"use strict";var CC=N();xc.exports=CC({}.isPrototypeOf)});var P=i((ui,wc)=>{"use strict";var dt=function(e){return e&&e.Math===Math&&e};wc.exports=dt(typeof globalThis=="object"&&globalThis)||dt(typeof window=="object"&&window)||dt(typeof self=="object"&&self)||dt(typeof global=="object"&&global)||dt(typeof ui=="object"&&ui)||function(){return this}()||Function("return this")()});var jr=i((nG,Cc)=>{"use strict";var OC=Mr(),Tc=Function.prototype,Sc=Tc.apply,Ec=Tc.call;Cc.exports=typeof Reflect=="object"&&Reflect.apply||(OC?Ec.bind(Sc):function(){return Ec.apply(Sc,arguments)})});var Te=i((aG,kc)=>{"use strict";var Oc=N(),kC=Oc({}.toString),IC=Oc("".slice);kc.exports=function(e){return IC(kC(e),8,-1)}});var mt=i((iG,Ic)=>{"use strict";var _C=Te(),PC=N();Ic.exports=function(e){if(_C(e)==="Function")return PC(e)}});var M=i((oG,_c)=>{"use strict";var si=typeof document=="object"&&document.all;_c.exports=typeof si>"u"&&si!==void 0?function(e){return typeof e=="function"||e===si}:function(e){return typeof e=="function"}});var H=i((uG,Pc)=>{"use strict";var RC=_();Pc.exports=!RC(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var G=i((sG,Rc)=>{"use strict";var AC=Mr(),En=Function.prototype.call;Rc.exports=AC?En.bind(En):function(){return En.apply(En,arguments)}});var ci=i(Mc=>{"use strict";var Ac={}.propertyIsEnumerable,Nc=Object.getOwnPropertyDescriptor,NC=Nc&&!Ac.call({1:2},1);Mc.f=NC?function(r){var t=Nc(this,r);return!!t&&t.enumerable}:Ac});var Qe=i((lG,jc)=>{"use strict";jc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var Tn=i((fG,Lc)=>{"use strict";var MC=N(),jC=_(),LC=Te(),li=Object,$C=MC("".split);Lc.exports=jC(function(){return!li("z").propertyIsEnumerable(0)})?function(e){return LC(e)==="String"?$C(e,""):li(e)}:li});var fr=i((pG,$c)=>{"use strict";$c.exports=function(e){return e==null}});var pr=i((vG,Fc)=>{"use strict";var FC=fr(),DC=TypeError;Fc.exports=function(e){if(FC(e))throw new DC("Can't call method on "+e);return e}});var Ae=i((dG,Dc)=>{"use strict";var BC=Tn(),GC=pr();Dc.exports=function(e){return BC(GC(e))}});var $=i((mG,Bc)=>{"use strict";var UC=M();Bc.exports=function(e){return typeof e=="object"?e!==null:UC(e)}});var V=i((hG,Gc)=>{"use strict";Gc.exports={}});var W=i((yG,Hc)=>{"use strict";var fi=V(),pi=P(),HC=M(),Uc=function(e){return HC(e)?e:void 0};Hc.exports=function(e,r){return arguments.length<2?Uc(fi[e])||Uc(pi[e]):fi[e]&&fi[e][r]||pi[e]&&pi[e][r]}});var Lr=i((bG,zc)=>{"use strict";var WC=P(),Wc=WC.navigator,Kc=Wc&&Wc.userAgent;zc.exports=Kc?String(Kc):""});var $r=i((gG,Zc)=>{"use strict";var Xc=P(),vi=Lr(),Vc=Xc.process,Yc=Xc.Deno,Jc=Vc&&Vc.versions||Yc&&Yc.version,Qc=Jc&&Jc.v8,be,Cn;Qc&&(be=Qc.split("."),Cn=be[0]>0&&be[0]<4?1:+(be[0]+be[1]));!Cn&&vi&&(be=vi.match(/Edge\/(\d+)/),(!be||be[1]>=74)&&(be=vi.match(/Chrome\/(\d+)/),be&&(Cn=+be[1])));Zc.exports=Cn});var vr=i((qG,rl)=>{"use strict";var el=$r(),KC=_(),zC=P(),VC=zC.String;rl.exports=!!Object.getOwnPropertySymbols&&!KC(function(){var e=Symbol("symbol detection");return!VC(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&el&&el<41})});var di=i((xG,tl)=>{"use strict";var YC=vr();tl.exports=YC&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Fr=i((wG,nl)=>{"use strict";var JC=W(),QC=M(),XC=U(),ZC=di(),eO=Object;nl.exports=ZC?function(e){return typeof e=="symbol"}:function(e){var r=JC("Symbol");return QC(r)&&XC(r.prototype,eO(e))}});var Xe=i((SG,al)=>{"use strict";var rO=String;al.exports=function(e){try{return rO(e)}catch{return"Object"}}});var D=i((EG,il)=>{"use strict";var tO=M(),nO=Xe(),aO=TypeError;il.exports=function(e){if(tO(e))return e;throw new aO(nO(e)+" is not a function")}});var On=i((TG,ol)=>{"use strict";var iO=D(),oO=fr();ol.exports=function(e,r){var t=e[r];return oO(t)?void 0:iO(t)}});var sl=i((CG,ul)=>{"use strict";var mi=G(),hi=M(),yi=$(),uO=TypeError;ul.exports=function(e,r){var t,n;if(r==="string"&&hi(t=e.toString)&&!yi(n=mi(t,e))||hi(t=e.valueOf)&&!yi(n=mi(t,e))||r!=="string"&&hi(t=e.toString)&&!yi(n=mi(t,e)))return n;throw new uO("Can't convert object to primitive value")}});var Z=i((OG,cl)=>{"use strict";cl.exports=!0});var pl=i((kG,fl)=>{"use strict";var ll=P(),sO=Object.defineProperty;fl.exports=function(e,r){try{sO(ll,e,{value:r,configurable:!0,writable:!0})}catch{ll[e]=r}return r}});var ht=i((IG,ml)=>{"use strict";var cO=Z(),lO=P(),fO=pl(),vl="__core-js_shared__",dl=ml.exports=lO[vl]||fO(vl,{});(dl.versions||(dl.versions=[])).push({version:"3.48.0",mode:cO?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var dr=i((_G,yl)=>{"use strict";var hl=ht();yl.exports=function(e,r){return hl[e]||(hl[e]=r||{})}});var te=i((PG,bl)=>{"use strict";var pO=pr(),vO=Object;bl.exports=function(e){return vO(pO(e))}});var K=i((RG,gl)=>{"use strict";var dO=N(),mO=te(),hO=dO({}.hasOwnProperty);gl.exports=Object.hasOwn||function(r,t){return hO(mO(r),t)}});var Dr=i((AG,ql)=>{"use strict";var yO=N(),bO=0,gO=Math.random(),qO=yO(1.1.toString);ql.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+qO(++bO+gO,36)}});var R=i((NG,wl)=>{"use strict";var xO=P(),wO=dr(),xl=K(),SO=Dr(),EO=vr(),TO=di(),Br=xO.Symbol,bi=wO("wks"),CO=TO?Br.for||Br:Br&&Br.withoutSetter||SO;wl.exports=function(e){return xl(bi,e)||(bi[e]=EO&&xl(Br,e)?Br[e]:CO("Symbol."+e)),bi[e]}});var Cl=i((MG,Tl)=>{"use strict";var OO=G(),Sl=$(),El=Fr(),kO=On(),IO=sl(),_O=R(),PO=TypeError,RO=_O("toPrimitive");Tl.exports=function(e,r){if(!Sl(e)||El(e))return e;var t=kO(e,RO),n;if(t){if(r===void 0&&(r="default"),n=OO(t,e,r),!Sl(n)||El(n))return n;throw new PO("Can't convert object to primitive value")}return r===void 0&&(r="number"),IO(e,r)}});var kn=i((jG,Ol)=>{"use strict";var AO=Cl(),NO=Fr();Ol.exports=function(e){var r=AO(e,"string");return NO(r)?r:r+""}});var In=i((LG,Il)=>{"use strict";var MO=P(),kl=$(),gi=MO.document,jO=kl(gi)&&kl(gi.createElement);Il.exports=function(e){return jO?gi.createElement(e):{}}});var qi=i(($G,_l)=>{"use strict";var LO=H(),$O=_(),FO=In();_l.exports=!LO&&!$O(function(){return Object.defineProperty(FO("div"),"a",{get:function(){return 7}}).a!==7})});var yt=i(Rl=>{"use strict";var DO=H(),BO=G(),GO=ci(),UO=Qe(),HO=Ae(),WO=kn(),KO=K(),zO=qi(),Pl=Object.getOwnPropertyDescriptor;Rl.f=DO?Pl:function(r,t){if(r=HO(r),t=WO(t),zO)try{return Pl(r,t)}catch{}if(KO(r,t))return UO(!BO(GO.f,r,t),r[t])}});var xi=i((DG,Al)=>{"use strict";var VO=_(),YO=M(),JO=/#|\.prototype\./,bt=function(e,r){var t=XO[QO(e)];return t===ek?!0:t===ZO?!1:YO(r)?VO(r):!!r},QO=bt.normalize=function(e){return String(e).replace(JO,".").toLowerCase()},XO=bt.data={},ZO=bt.NATIVE="N",ek=bt.POLYFILL="P";Al.exports=bt});var Y=i((BG,Ml)=>{"use strict";var Nl=mt(),rk=D(),tk=Mr(),nk=Nl(Nl.bind);Ml.exports=function(e,r){return rk(e),r===void 0?e:tk?nk(e,r):function(){return e.apply(r,arguments)}}});var wi=i((GG,jl)=>{"use strict";var ak=H(),ik=_();jl.exports=ak&&ik(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var X=i((UG,Ll)=>{"use strict";var ok=$(),uk=String,sk=TypeError;Ll.exports=function(e){if(ok(e))return e;throw new sk(uk(e)+" is not an object")}});var ne=i(Fl=>{"use strict";var ck=H(),lk=qi(),fk=wi(),_n=X(),$l=kn(),pk=TypeError,Si=Object.defineProperty,vk=Object.getOwnPropertyDescriptor,Ei="enumerable",Ti="configurable",Ci="writable";Fl.f=ck?fk?function(r,t,n){if(_n(r),t=$l(t),_n(n),typeof r=="function"&&t==="prototype"&&"value"in n&&Ci in n&&!n[Ci]){var a=vk(r,t);a&&a[Ci]&&(r[t]=n.value,n={configurable:Ti in n?n[Ti]:a[Ti],enumerable:Ei in n?n[Ei]:a[Ei],writable:!1})}return Si(r,t,n)}:Si:function(r,t,n){if(_n(r),t=$l(t),_n(n),lk)try{return Si(r,t,n)}catch{}if("get"in n||"set"in n)throw new pk("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var Ce=i((WG,Dl)=>{"use strict";var dk=H(),mk=ne(),hk=Qe();Dl.exports=dk?function(e,r,t){return mk.f(e,r,hk(1,t))}:function(e,r,t){return e[r]=t,e}});var q=i((KG,Gl)=>{"use strict";var gt=P(),yk=jr(),bk=mt(),gk=M(),qk=yt().f,xk=xi(),Gr=V(),wk=Y(),Ur=Ce(),Bl=K();ht();var Sk=function(e){var r=function(t,n,a){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,a)}return yk(e,this,arguments)};return r.prototype=e.prototype,r};Gl.exports=function(e,r){var t=e.target,n=e.global,a=e.stat,o=e.proto,u=n?gt:a?gt[t]:gt[t]&&gt[t].prototype,s=n?Gr:Gr[t]||Ur(Gr,t,{})[t],c=s.prototype,l,f,p,v,d,h,m,x,y;for(v in r)l=xk(n?v:t+(a?".":"#")+v,e.forced),f=!l&&u&&Bl(u,v),h=s[v],f&&(e.dontCallGetSet?(y=qk(u,v),m=y&&y.value):m=u[v]),d=f&&m?m:r[v],!(!l&&!o&&typeof h==typeof d)&&(e.bind&&f?x=wk(d,gt):e.wrap&&f?x=Sk(d):o&&gk(d)?x=bk(d):x=d,(e.sham||d&&d.sham||h&&h.sham)&&Ur(x,"sham",!0),Ur(s,v,x),o&&(p=t+"Prototype",Bl(Gr,p)||Ur(Gr,p,{}),Ur(Gr[p],v,d),e.real&&c&&(l||!c[v])&&Ur(c,v,d)))}});var Ne=i((zG,Ul)=>{"use strict";var Ek=Te();Ul.exports=Array.isArray||function(r){return Ek(r)==="Array"}});var Pn=i((VG,Wl)=>{"use strict";var Tk=R(),Ck=Tk("toStringTag"),Hl={};Hl[Ck]="z";Wl.exports=String(Hl)==="[object z]"});var qt=i((YG,Kl)=>{"use strict";var Ok=Pn(),kk=M(),Rn=Te(),Ik=R(),_k=Ik("toStringTag"),Pk=Object,Rk=Rn(function(){return arguments}())==="Arguments",Ak=function(e,r){try{return e[r]}catch{}};Kl.exports=Ok?Rn:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=Ak(r=Pk(e),_k))=="string"?t:Rk?Rn(r):(n=Rn(r))==="Object"&&kk(r.callee)?"Arguments":n}});var ki=i((JG,zl)=>{"use strict";var Nk=N(),Mk=M(),Oi=ht(),jk=Nk(Function.toString);Mk(Oi.inspectSource)||(Oi.inspectSource=function(e){return jk(e)});zl.exports=Oi.inspectSource});var wt=i((QG,Xl)=>{"use strict";var Lk=N(),$k=_(),Vl=M(),Fk=qt(),Dk=W(),Bk=ki(),Yl=function(){},Jl=Dk("Reflect","construct"),Ii=/^\s*(?:class|function)\b/,Gk=Lk(Ii.exec),Uk=!Ii.test(Yl),xt=function(r){if(!Vl(r))return!1;try{return Jl(Yl,[],r),!0}catch{return!1}},Ql=function(r){if(!Vl(r))return!1;switch(Fk(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Uk||!!Gk(Ii,Bk(r))}catch{return!0}};Ql.sham=!0;Xl.exports=!Jl||$k(function(){var e;return xt(xt.call)||!xt(Object)||!xt(function(){e=!0})||e})?Ql:xt});var ef=i((XG,Zl)=>{"use strict";var Hk=Math.ceil,Wk=Math.floor;Zl.exports=Math.trunc||function(r){var t=+r;return(t>0?Wk:Hk)(t)}});var An=i((ZG,rf)=>{"use strict";var Kk=ef();rf.exports=function(e){var r=+e;return r!==r||r===0?0:Kk(r)}});var _i=i((e8,tf)=>{"use strict";var zk=An(),Vk=Math.max,Yk=Math.min;tf.exports=function(e,r){var t=zk(e);return t<0?Vk(t+r,0):Yk(t,r)}});var Pi=i((r8,nf)=>{"use strict";var Jk=An(),Qk=Math.min;nf.exports=function(e){var r=Jk(e);return r>0?Qk(r,9007199254740991):0}});var ve=i((t8,af)=>{"use strict";var Xk=Pi();af.exports=function(e){return Xk(e.length)}});var Hr=i((n8,of)=>{"use strict";var Zk=H(),e1=ne(),r1=Qe();of.exports=function(e,r,t){Zk?e1.f(e,r,r1(0,t)):e[r]=t}});var Wr=i((a8,uf)=>{"use strict";var t1=H(),n1=Ne(),a1=TypeError,i1=Object.getOwnPropertyDescriptor,o1=t1&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();uf.exports=o1?function(e,r){if(n1(e)&&!i1(e,"length").writable)throw new a1("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var St=i((i8,sf)=>{"use strict";var u1=_(),s1=R(),c1=$r(),l1=s1("species");sf.exports=function(e){return c1>=51||!u1(function(){var r=[],t=r.constructor={};return t[l1]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var mr=i((o8,cf)=>{"use strict";var f1=N();cf.exports=f1([].slice)});var pf=i(()=>{"use strict";var p1=q(),lf=Ne(),v1=wt(),d1=$(),ff=_i(),m1=ve(),h1=Ae(),y1=Hr(),b1=Wr(),g1=R(),q1=St(),x1=mr(),w1=q1("slice"),S1=g1("species"),Ri=Array,E1=Math.max;p1({target:"Array",proto:!0,forced:!w1},{slice:function(r,t){var n=h1(this),a=m1(n),o=ff(r,a),u=ff(t===void 0?a:t,a),s,c,l;if(lf(n)&&(s=n.constructor,v1(s)&&(s===Ri||lf(s.prototype))?s=void 0:d1(s)&&(s=s[S1],s===null&&(s=void 0)),s===Ri||s===void 0))return x1(n,o,u);for(c=new(s===void 0?Ri:s)(E1(u-o,0)),l=0;o<u;o++,l++)o in n&&y1(c,l,n[o]);return b1(c,l),c}})});var ue=i((c8,vf)=>{"use strict";var T1=P(),C1=V();vf.exports=function(e,r){var t=C1[e+"Prototype"],n=t&&t[r];if(n)return n;var a=T1[e],o=a&&a.prototype;return o&&o[r]}});var mf=i((l8,df)=>{"use strict";pf();var O1=ue();df.exports=O1("Array","slice")});var yf=i((f8,hf)=>{"use strict";var k1=U(),I1=mf(),Ai=Array.prototype;hf.exports=function(e){var r=e.slice;return e===Ai||k1(Ai,e)&&r===Ai.slice?I1:r}});var gf=i((p8,bf)=>{"use strict";var _1=yf();bf.exports=_1});var xf=i((v8,qf)=>{"use strict";var P1=gf();qf.exports=P1});var Sf=i((d8,wf)=>{"use strict";var R1=xf();wf.exports=R1});var Ni=i((m8,Ef)=>{"use strict";Ef.exports=Sf()});var Kr=i((h8,Tf)=>{Tf.exports=Ni()});var Ze=i((y8,Cf)=>{"use strict";var A1=qt(),N1=String;Cf.exports=function(e){if(A1(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return N1(e)}});var _f=i((b8,If)=>{"use strict";var Mi=N(),M1=An(),j1=Ze(),L1=pr(),$1=Mi("".charAt),Of=Mi("".charCodeAt),F1=Mi("".slice),kf=function(e){return function(r,t){var n=j1(L1(r)),a=M1(t),o=n.length,u,s;return a<0||a>=o?e?"":void 0:(u=Of(n,a),u<55296||u>56319||a+1===o||(s=Of(n,a+1))<56320||s>57343?e?$1(n,a):u:e?F1(n,a,a+2):(u-55296<<10)+(s-56320)+65536)}};If.exports={codeAt:kf(!1),charAt:kf(!0)}});var Af=i((g8,Rf)=>{"use strict";var D1=P(),B1=M(),Pf=D1.WeakMap;Rf.exports=B1(Pf)&&/native code/.test(String(Pf))});var Et=i((q8,Mf)=>{"use strict";var G1=dr(),U1=Dr(),Nf=G1("keys");Mf.exports=function(e){return Nf[e]||(Nf[e]=U1(e))}});var zr=i((x8,jf)=>{"use strict";jf.exports={}});var er=i((w8,Ff)=>{"use strict";var H1=Af(),$f=P(),W1=$(),K1=Ce(),ji=K(),Li=ht(),z1=Et(),V1=zr(),Lf="Object already initialized",$i=$f.TypeError,Y1=$f.WeakMap,Nn,Tt,Mn,J1=function(e){return Mn(e)?Tt(e):Nn(e,{})},Q1=function(e){return function(r){var t;if(!W1(r)||(t=Tt(r)).type!==e)throw new $i("Incompatible receiver, "+e+" required");return t}};H1||Li.state?(ge=Li.state||(Li.state=new Y1),ge.get=ge.get,ge.has=ge.has,ge.set=ge.set,Nn=function(e,r){if(ge.has(e))throw new $i(Lf);return r.facade=e,ge.set(e,r),r},Tt=function(e){return ge.get(e)||{}},Mn=function(e){return ge.has(e)}):(hr=z1("state"),V1[hr]=!0,Nn=function(e,r){if(ji(e,hr))throw new $i(Lf);return r.facade=e,K1(e,hr,r),r},Tt=function(e){return ji(e,hr)?e[hr]:{}},Mn=function(e){return ji(e,hr)});var ge,hr;Ff.exports={set:Nn,get:Tt,has:Mn,enforce:J1,getterFor:Q1}});var Gf=i((S8,Bf)=>{"use strict";var Fi=H(),X1=K(),Df=Function.prototype,Z1=Fi&&Object.getOwnPropertyDescriptor,Di=X1(Df,"name"),eI=Di&&function(){}.name==="something",rI=Di&&(!Fi||Fi&&Z1(Df,"name").configurable);Bf.exports={EXISTS:Di,PROPER:eI,CONFIGURABLE:rI}});var Bi=i((E8,Hf)=>{"use strict";var tI=Ae(),nI=_i(),aI=ve(),Uf=function(e){return function(r,t,n){var a=tI(r),o=aI(a);if(o===0)return!e&&-1;var u=nI(n,o),s;if(e&&t!==t){for(;o>u;)if(s=a[u++],s!==s)return!0}else for(;o>u;u++)if((e||u in a)&&a[u]===t)return e||u||0;return!e&&-1}};Hf.exports={includes:Uf(!0),indexOf:Uf(!1)}});var Ui=i((T8,Kf)=>{"use strict";var iI=N(),Gi=K(),oI=Ae(),uI=Bi().indexOf,sI=zr(),Wf=iI([].push);Kf.exports=function(e,r){var t=oI(e),n=0,a=[],o;for(o in t)!Gi(sI,o)&&Gi(t,o)&&Wf(a,o);for(;r.length>n;)Gi(t,o=r[n++])&&(~uI(a,o)||Wf(a,o));return a}});var jn=i((C8,zf)=>{"use strict";zf.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var Ln=i((O8,Vf)=>{"use strict";var cI=Ui(),lI=jn();Vf.exports=Object.keys||function(r){return cI(r,lI)}});var Hi=i(Yf=>{"use strict";var fI=H(),pI=wi(),vI=ne(),dI=X(),mI=Ae(),hI=Ln();Yf.f=fI&&!pI?Object.defineProperties:function(r,t){dI(r);for(var n=mI(t),a=hI(t),o=a.length,u=0,s;o>u;)vI.f(r,s=a[u++],n[s]);return r}});var Wi=i((I8,Jf)=>{"use strict";var yI=W();Jf.exports=yI("document","documentElement")});var rr=i((_8,np)=>{"use strict";var bI=X(),gI=Hi(),Qf=jn(),qI=zr(),xI=Wi(),wI=In(),SI=Et(),Xf=">",Zf="<",zi="prototype",Vi="script",rp=SI("IE_PROTO"),Ki=function(){},tp=function(e){return Zf+Vi+Xf+e+Zf+"/"+Vi+Xf},ep=function(e){e.write(tp("")),e.close();var r=e.parentWindow.Object;return e=null,r},EI=function(){var e=wI("iframe"),r="java"+Vi+":",t;return e.style.display="none",xI.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(tp("document.F=Object")),t.close(),t.F},$n,Fn=function(){try{$n=new ActiveXObject("htmlfile")}catch{}Fn=typeof document<"u"?document.domain&&$n?ep($n):EI():ep($n);for(var e=Qf.length;e--;)delete Fn[zi][Qf[e]];return Fn()};qI[rp]=!0;np.exports=Object.create||function(r,t){var n;return r!==null?(Ki[zi]=bI(r),n=new Ki,Ki[zi]=null,n[rp]=r):n=Fn(),t===void 0?n:gI.f(n,t)}});var Yi=i((P8,ap)=>{"use strict";var TI=_();ap.exports=!TI(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var Ct=i((R8,op)=>{"use strict";var CI=K(),OI=M(),kI=te(),II=Et(),_I=Yi(),ip=II("IE_PROTO"),Ji=Object,PI=Ji.prototype;op.exports=_I?Ji.getPrototypeOf:function(e){var r=kI(e);if(CI(r,ip))return r[ip];var t=r.constructor;return OI(t)&&r instanceof t?t.prototype:r instanceof Ji?PI:null}});var Me=i((A8,up)=>{"use strict";var RI=Ce();up.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:RI(e,r,t),e}});var eo=i((N8,lp)=>{"use strict";var AI=_(),NI=M(),MI=$(),jI=rr(),sp=Ct(),LI=Me(),$I=R(),FI=Z(),Zi=$I("iterator"),cp=!1,je,Qi,Xi;[].keys&&(Xi=[].keys(),"next"in Xi?(Qi=sp(sp(Xi)),Qi!==Object.prototype&&(je=Qi)):cp=!0);var DI=!MI(je)||AI(function(){var e={};return je[Zi].call(e)!==e});DI?je={}:FI&&(je=jI(je));NI(je[Zi])||LI(je,Zi,function(){return this});lp.exports={IteratorPrototype:je,BUGGY_SAFARI_ITERATORS:cp}});var pp=i((M8,fp)=>{"use strict";var BI=Pn(),GI=qt();fp.exports=BI?{}.toString:function(){return"[object "+GI(this)+"]"}});var Le=i((j8,dp)=>{"use strict";var UI=Pn(),HI=ne().f,WI=Ce(),KI=K(),zI=pp(),VI=R(),vp=VI("toStringTag");dp.exports=function(e,r,t,n){var a=t?e:e&&e.prototype;a&&(KI(a,vp)||HI(a,vp,{configurable:!0,value:r}),n&&!UI&&WI(a,"toString",zI))}});var yr=i((L8,mp)=>{"use strict";mp.exports={}});var yp=i(($8,hp)=>{"use strict";var YI=eo().IteratorPrototype,JI=rr(),QI=Qe(),XI=Le(),ZI=yr(),e_=function(){return this};hp.exports=function(e,r,t,n){var a=r+" Iterator";return e.prototype=JI(YI,{next:QI(+!n,t)}),XI(e,a,!1,!0),ZI[a]=e_,e}});var gp=i((F8,bp)=>{"use strict";var r_=N(),t_=D();bp.exports=function(e,r,t){try{return r_(t_(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var xp=i((D8,qp)=>{"use strict";var n_=$();qp.exports=function(e){return n_(e)||e===null}});var Sp=i((B8,wp)=>{"use strict";var a_=xp(),i_=String,o_=TypeError;wp.exports=function(e){if(a_(e))return e;throw new o_("Can't set "+i_(e)+" as a prototype")}});var Ot=i((G8,Ep)=>{"use strict";var u_=gp(),s_=$(),c_=pr(),l_=Sp();Ep.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=u_(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(a,o){return c_(a),l_(o),s_(a)&&(e?t(a,o):a.__proto__=o),a}}():void 0)});var Gn=i((U8,Np)=>{"use strict";var f_=q(),p_=G(),Dn=Z(),Rp=Gf(),v_=M(),d_=yp(),Tp=Ct(),Cp=Ot(),m_=Le(),h_=Ce(),ro=Me(),y_=R(),Op=yr(),Ap=eo(),b_=Rp.PROPER,g_=Rp.CONFIGURABLE,kp=Ap.IteratorPrototype,Bn=Ap.BUGGY_SAFARI_ITERATORS,kt=y_("iterator"),Ip="keys",It="values",_p="entries",Pp=function(){return this};Np.exports=function(e,r,t,n,a,o,u){d_(t,r,n);var s=function(y){if(y===a&&v)return v;if(!Bn&&y&&y in f)return f[y];switch(y){case Ip:return function(){return new t(this,y)};case It:return function(){return new t(this,y)};case _p:return function(){return new t(this,y)}}return function(){return new t(this)}},c=r+" Iterator",l=!1,f=e.prototype,p=f[kt]||f["@@iterator"]||a&&f[a],v=!Bn&&p||s(a),d=r==="Array"&&f.entries||p,h,m,x;if(d&&(h=Tp(d.call(new e)),h!==Object.prototype&&h.next&&(!Dn&&Tp(h)!==kp&&(Cp?Cp(h,kp):v_(h[kt])||ro(h,kt,Pp)),m_(h,c,!0,!0),Dn&&(Op[c]=Pp))),b_&&a===It&&p&&p.name!==It&&(!Dn&&g_?h_(f,"name",It):(l=!0,v=function(){return p_(p,this)})),a)if(m={values:s(It),keys:o?v:s(Ip),entries:s(_p)},u)for(x in m)(Bn||l||!(x in f))&&ro(f,x,m[x]);else f_({target:r,proto:!0,forced:Bn||l},m);return(!Dn||u)&&f[kt]!==v&&ro(f,kt,v,{name:a}),Op[r]=v,m}});var Un=i((H8,Mp)=>{"use strict";Mp.exports=function(e,r){return{value:e,done:r}}});var br=i(()=>{"use strict";var q_=_f().charAt,x_=Ze(),Lp=er(),w_=Gn(),jp=Un(),$p="String Iterator",S_=Lp.set,E_=Lp.getterFor($p);w_(String,"String",function(e){S_(this,{type:$p,string:x_(e),index:0})},function(){var r=E_(this),t=r.string,n=r.index,a;return n>=t.length?jp(void 0,!0):(a=q_(t,n),r.index+=a.length,jp(a,!1))})});var to=i((z8,Dp)=>{"use strict";var T_=G(),Fp=X(),C_=On();Dp.exports=function(e,r,t){var n,a;Fp(e);try{if(n=C_(e,"return"),!n){if(r==="throw")throw t;return t}n=T_(n,e)}catch(o){a=!0,n=o}if(r==="throw")throw t;if(a)throw n;return Fp(n),t}});var Gp=i((V8,Bp)=>{"use strict";var O_=X(),k_=to();Bp.exports=function(e,r,t,n){try{return n?r(O_(t)[0],t[1]):r(t)}catch(a){k_(e,"throw",a)}}});var no=i((Y8,Up)=>{"use strict";var I_=R(),__=yr(),P_=I_("iterator"),R_=Array.prototype;Up.exports=function(e){return e!==void 0&&(__.Array===e||R_[P_]===e)}});var _t=i((J8,Wp)=>{"use strict";var A_=qt(),Hp=On(),N_=fr(),M_=yr(),j_=R(),L_=j_("iterator");Wp.exports=function(e){if(!N_(e))return Hp(e,L_)||Hp(e,"@@iterator")||M_[A_(e)]}});var Hn=i((Q8,Kp)=>{"use strict";var $_=G(),F_=D(),D_=X(),B_=Xe(),G_=_t(),U_=TypeError;Kp.exports=function(e,r){var t=arguments.length<2?G_(e):r;if(F_(t))return D_($_(t,e));throw new U_(B_(e)+" is not iterable")}});var Jp=i((X8,Yp)=>{"use strict";var H_=Y(),W_=G(),K_=te(),z_=Gp(),V_=no(),Y_=wt(),J_=ve(),zp=Hr(),Q_=Wr(),X_=Hn(),Z_=_t(),Vp=Array;Yp.exports=function(r){var t=K_(r),n=Y_(this),a=arguments.length,o=a>1?arguments[1]:void 0,u=o!==void 0;u&&(o=H_(o,a>2?arguments[2]:void 0));var s=Z_(t),c=0,l,f,p,v,d,h;if(s&&!(this===Vp&&V_(s)))for(f=n?new this:[],v=X_(t,s),d=v.next;!(p=W_(d,v)).done;c++)h=u?z_(v,o,[p.value,c],!0):p.value,zp(f,c,h);else for(l=J_(t),f=n?new this(l):Vp(l);l>c;c++)h=u?o(t[c],c):t[c],zp(f,c,h);return Q_(f,c),f}});var io=i((Z8,ev)=>{"use strict";var eP=R(),Xp=eP("iterator"),Zp=!1;try{Qp=0,ao={next:function(){return{done:!!Qp++}},return:function(){Zp=!0}},ao[Xp]=function(){return this},Array.from(ao,function(){throw 2})}catch{}var Qp,ao;ev.exports=function(e,r){try{if(!r&&!Zp)return!1}catch{return!1}var t=!1;try{var n={};n[Xp]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var rv=i(()=>{"use strict";var rP=q(),tP=Jp(),nP=io(),aP=!nP(function(e){Array.from(e)});rP({target:"Array",stat:!0,forced:aP},{from:tP})});var nv=i((tU,tv)=>{"use strict";br();rv();var iP=V();tv.exports=iP.Array.from});var iv=i((nU,av)=>{"use strict";var oP=nv();av.exports=oP});var uv=i((aU,ov)=>{"use strict";var uP=iv();ov.exports=uP});var cv=i((iU,sv)=>{"use strict";var sP=uv();sv.exports=sP});var oo=i((oU,lv)=>{"use strict";lv.exports=cv()});var Wn=i((uU,fv)=>{fv.exports=oo()});var Pt=i((sU,pv)=>{"use strict";var cP=TypeError,lP=9007199254740991;pv.exports=function(e){if(e>lP)throw cP("Maximum allowed index exceeded");return e}});var hv=i((cU,mv)=>{"use strict";var vv=Ne(),fP=wt(),pP=$(),vP=R(),dP=vP("species"),dv=Array;mv.exports=function(e){var r;return vv(e)&&(r=e.constructor,fP(r)&&(r===dv||vv(r.prototype))?r=void 0:pP(r)&&(r=r[dP],r===null&&(r=void 0))),r===void 0?dv:r}});var Kn=i((lU,yv)=>{"use strict";var mP=hv();yv.exports=function(e,r){return new(mP(e))(r===0?0:r)}});var uo=i(()=>{"use strict";var hP=q(),yP=_(),bP=Ne(),gP=$(),qP=te(),xP=ve(),bv=Pt(),gv=Hr(),wP=Wr(),SP=Kn(),EP=St(),TP=R(),CP=$r(),qv=TP("isConcatSpreadable"),OP=CP>=51||!yP(function(){var e=[];return e[qv]=!1,e.concat()[0]!==e}),kP=function(e){if(!gP(e))return!1;var r=e[qv];return r!==void 0?!!r:bP(e)},IP=!OP||!EP("concat");hP({target:"Array",proto:!0,arity:1,forced:IP},{concat:function(r){var t=qP(this),n=SP(t,0),a=0,o,u,s,c,l;for(o=-1,s=arguments.length;o<s;o++)if(l=o===-1?t:arguments[o],kP(l))for(c=xP(l),bv(a+c),u=0;u<c;u++,a++)u in l&&gv(n,a,l[u]);else bv(a+1),gv(n,a++,l);return wP(n,a),n}})});var Rt=i(()=>{});var At=i(xv=>{"use strict";var _P=Ui(),PP=jn(),RP=PP.concat("length","prototype");xv.f=Object.getOwnPropertyNames||function(r){return _P(r,RP)}});var so=i((hU,Ev)=>{"use strict";var AP=Te(),NP=Ae(),wv=At().f,MP=mr(),Sv=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],jP=function(e){try{return wv(e)}catch{return MP(Sv)}};Ev.exports.f=function(r){return Sv&&AP(r)==="Window"?jP(r):wv(NP(r))}});var zn=i(Tv=>{"use strict";Tv.f=Object.getOwnPropertySymbols});var Vn=i((bU,Cv)=>{"use strict";var LP=ne();Cv.exports=function(e,r,t){return LP.f(e,r,t)}});var Vr=i(Ov=>{"use strict";var $P=R();Ov.f=$P});var j=i((qU,Iv)=>{"use strict";var kv=V(),FP=K(),DP=Vr(),BP=ne().f;Iv.exports=function(e){var r=kv.Symbol||(kv.Symbol={});FP(r,e)||BP(r,e,{value:DP.f(e)})}});var co=i((xU,_v)=>{"use strict";var GP=G(),UP=W(),HP=R(),WP=Me();_v.exports=function(){var e=UP("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=HP("toPrimitive");r&&!r[n]&&WP(r,n,function(a){return GP(t,this)},{arity:1})}});var Nt=i((wU,Rv)=>{"use strict";var KP=Y(),zP=Tn(),VP=te(),YP=ve(),Pv=Kn(),lo=Hr(),tr=function(e){var r=e===1,t=e===2,n=e===3,a=e===4,o=e===6,u=e===7,s=e===5||o;return function(c,l,f){for(var p=VP(c),v=zP(p),d=YP(v),h=KP(l,f),m=0,x=0,y=r?Pv(c,d):t||u?Pv(c,0):void 0,g,O;d>m;m++)if((s||m in v)&&(g=v[m],O=h(g,m,p),e))if(r)lo(y,m,O);else if(O)switch(e){case 3:return!0;case 5:return g;case 6:return m;case 2:lo(y,x++,g)}else switch(e){case 4:return!1;case 7:lo(y,x++,g)}return o?-1:n||a?a:y}};Rv.exports={forEach:tr(0),map:tr(1),filter:tr(2),some:tr(3),every:tr(4),find:tr(5),findIndex:tr(6),filterReject:tr(7)}});var Yv=i(()=>{"use strict";var Yn=q(),Lt=P(),qo=G(),JP=N(),QP=Z(),Yr=H(),Jr=vr(),XP=_(),z=K(),ZP=U(),mo=X(),Jn=Ae(),xo=kn(),eR=Ze(),ho=Qe(),Qr=rr(),Mv=Ln(),rR=At(),jv=so(),tR=zn(),Lv=yt(),$v=ne(),nR=Hi(),Fv=ci(),fo=Me(),aR=Vn(),wo=dr(),iR=Et(),Dv=zr(),Av=Dr(),oR=R(),uR=Vr(),sR=j(),cR=co(),lR=Le(),Bv=er(),Qn=Nt().forEach,ae=iR("hidden"),Xn="Symbol",jt="prototype",fR=Bv.set,Nv=Bv.getterFor(Xn),de=Object[jt],gr=Lt.Symbol,Mt=gr&&gr[jt],pR=Lt.RangeError,vR=Lt.TypeError,po=Lt.QObject,Gv=Lv.f,qr=$v.f,Uv=jv.f,dR=Fv.f,Hv=JP([].push),$e=wo("symbols"),$t=wo("op-symbols"),mR=wo("wks"),yo=!po||!po[jt]||!po[jt].findChild,Wv=function(e,r,t){var n=Gv(de,r);n&&delete de[r],qr(e,r,t),n&&e!==de&&qr(de,r,n)},bo=Yr&&XP(function(){return Qr(qr({},"a",{get:function(){return qr(this,"a",{value:7}).a}})).a!==7})?Wv:qr,vo=function(e,r){var t=$e[e]=Qr(Mt);return fR(t,{type:Xn,tag:e,description:r}),Yr||(t.description=r),t},Zn=function(r,t,n){r===de&&Zn($t,t,n),mo(r);var a=xo(t);return mo(n),z($e,a)?(n.enumerable?(z(r,ae)&&r[ae][a]&&(r[ae][a]=!1),n=Qr(n,{enumerable:ho(0,!1)})):(z(r,ae)||qr(r,ae,ho(1,Qr(null))),r[ae][a]=!0),bo(r,a,n)):qr(r,a,n)},So=function(r,t){mo(r);var n=Jn(t),a=Mv(n).concat(Vv(n));return Qn(a,function(o){(!Yr||qo(go,n,o))&&Zn(r,o,n[o])}),r},hR=function(r,t){return t===void 0?Qr(r):So(Qr(r),t)},go=function(r){var t=xo(r),n=qo(dR,this,t);return this===de&&z($e,t)&&!z($t,t)?!1:n||!z(this,t)||!z($e,t)||z(this,ae)&&this[ae][t]?n:!0},Kv=function(r,t){var n=Jn(r),a=xo(t);if(!(n===de&&z($e,a)&&!z($t,a))){var o=Gv(n,a);return o&&z($e,a)&&!(z(n,ae)&&n[ae][a])&&(o.enumerable=!0),o}},zv=function(r){var t=Uv(Jn(r)),n=[];return Qn(t,function(a){!z($e,a)&&!z(Dv,a)&&Hv(n,a)}),n},Vv=function(e){var r=e===de,t=Uv(r?$t:Jn(e)),n=[];return Qn(t,function(a){z($e,a)&&(!r||z(de,a))&&Hv(n,$e[a])}),n};Jr||(gr=function(){if(ZP(Mt,this))throw new vR("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:eR(arguments[0]),t=Av(r),n=function(a){var o=this===void 0?Lt:this;o===de&&qo(n,$t,a),z(o,ae)&&z(o[ae],t)&&(o[ae][t]=!1);var u=ho(1,a);try{bo(o,t,u)}catch(s){if(!(s instanceof pR))throw s;Wv(o,t,u)}};return Yr&&yo&&bo(de,t,{configurable:!0,set:n}),vo(t,r)},Mt=gr[jt],fo(Mt,"toString",function(){return Nv(this).tag}),fo(gr,"withoutSetter",function(e){return vo(Av(e),e)}),Fv.f=go,$v.f=Zn,nR.f=So,Lv.f=Kv,rR.f=jv.f=zv,tR.f=Vv,uR.f=function(e){return vo(oR(e),e)},Yr&&(aR(Mt,"description",{configurable:!0,get:function(){return Nv(this).description}}),QP||fo(de,"propertyIsEnumerable",go,{unsafe:!0})));Yn({global:!0,constructor:!0,wrap:!0,forced:!Jr,sham:!Jr},{Symbol:gr});Qn(Mv(mR),function(e){sR(e)});Yn({target:Xn,stat:!0,forced:!Jr},{useSetter:function(){yo=!0},useSimple:function(){yo=!1}});Yn({target:"Object",stat:!0,forced:!Jr,sham:!Yr},{create:hR,defineProperty:Zn,defineProperties:So,getOwnPropertyDescriptor:Kv});Yn({target:"Object",stat:!0,forced:!Jr},{getOwnPropertyNames:zv});cR();lR(gr,Xn);Dv[ae]=!0});var Eo=i((TU,Jv)=>{"use strict";var yR=vr();Jv.exports=yR&&!!Symbol.for&&!!Symbol.keyFor});var Xv=i(()=>{"use strict";var bR=q(),gR=W(),qR=K(),xR=Ze(),Qv=dr(),wR=Eo(),To=Qv("string-to-symbol-registry"),SR=Qv("symbol-to-string-registry");bR({target:"Symbol",stat:!0,forced:!wR},{for:function(e){var r=xR(e);if(qR(To,r))return To[r];var t=gR("Symbol")(r);return To[r]=t,SR[t]=r,t}})});var ed=i(()=>{"use strict";var ER=q(),TR=K(),CR=Fr(),OR=Xe(),kR=dr(),IR=Eo(),Zv=kR("symbol-to-string-registry");ER({target:"Symbol",stat:!0,forced:!IR},{keyFor:function(r){if(!CR(r))throw new TypeError(OR(r)+" is not a symbol");if(TR(Zv,r))return Zv[r]}})});var td=i((_U,rd)=>{"use strict";var _R=$(),PR=er().get;rd.exports=function(r){if(!_R(r))return!1;var t=PR(r);return!!t&&t.type==="RawJSON"}});var ud=i((PU,od)=>{"use strict";var Co=N(),RR=K(),ea=SyntaxError,AR=parseInt,NR=String.fromCharCode,MR=Co("".charAt),nd=Co("".slice),ad=Co(/./.exec),id={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},jR=/^[\da-f]{4}$/i,LR=/^[\u0000-\u001F]$/;od.exports=function(e,r){for(var t=!0,n="";r<e.length;){var a=MR(e,r);if(a==="\\"){var o=nd(e,r,r+2);if(RR(id,o))n+=id[o],r+=2;else if(o==="\\u"){r+=2;var u=nd(e,r,r+4);if(!ad(jR,u))throw new ea("Bad Unicode escape at: "+r);n+=NR(AR(u,16)),r+=4}else throw new ea('Unknown escape sequence: "'+o+'"')}else if(a==='"'){t=!1,r++;break}else{if(ad(LR,a))throw new ea("Bad control character in string literal at: "+r);n+=a,r++}}if(t)throw new ea("Unterminated string at: "+r);return{value:n,end:r}}});var cd=i((RU,sd)=>{"use strict";var $R=_();sd.exports=!$R(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var Sd=i(()=>{"use strict";var FR=q(),yd=W(),DR=jr(),bd=G(),xr=N(),gd=_(),ld=Ne(),ta=M(),BR=td(),fd=Fr(),pd=Te(),GR=Ze(),UR=mr(),HR=ud(),WR=Dr(),KR=vr(),Oo=cd(),qd=String,nr=yd("JSON","stringify"),ra=xr(/./.exec),Io=xr("".charAt),zR=xr("".charCodeAt),VR=xr("".replace),ko=xr("".slice),_o=xr([].push),YR=xr(1.1.toString),JR=/[\uD800-\uDFFF]/g,vd=/^[\uD800-\uDBFF]$/,dd=/^[\uDC00-\uDFFF]$/,Po=WR(),md=Po.length,xd=!KR||gd(function(){var e=yd("Symbol")("stringify detection");return nr([e])!=="[null]"||nr({a:e})!=="{}"||nr(Object(e))!=="{}"}),hd=gd(function(){return nr("\uDF06\uD834")!=='"\\udf06\\ud834"'||nr("\uDEAD")!=='"\\udead"'}),QR=xd?function(e,r){var t=UR(arguments),n=wd(r);if(!(!ta(n)&&(e===void 0||fd(e))))return t[1]=function(a,o){if(ta(n)&&(o=bd(n,this,qd(a),o)),!fd(o))return o},DR(nr,null,t)}:nr,XR=function(e,r,t){var n=Io(t,r-1),a=Io(t,r+1);return ra(vd,e)&&!ra(dd,a)||ra(dd,e)&&!ra(vd,n)?"\\u"+YR(zR(e,0),16):e},wd=function(e){if(ta(e))return e;if(ld(e)){for(var r=e.length,t=[],n=0;n<r;n++){var a=e[n];typeof a=="string"?_o(t,a):(typeof a=="number"||pd(a)==="Number"||pd(a)==="String")&&_o(t,GR(a))}var o=t.length,u=!0;return function(s,c){if(u)return u=!1,c;if(ld(this))return c;for(var l=0;l<o;l++)if(t[l]===s)return c}}};nr&&FR({target:"JSON",stat:!0,arity:3,forced:xd||hd||!Oo},{stringify:function(r,t,n){var a=wd(t),o=[],u=QR(r,function(d,h){var m=ta(a)?bd(a,this,qd(d),h):h;return!Oo&&BR(m)?Po+(_o(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(hd&&(u=VR(u,JR,XR)),Oo))return u;for(var s="",c=u.length,l=0;l<c;l++){var f=Io(u,l);if(f==='"'){var p=HR(u,++l).end-1,v=ko(u,l,p);s+=ko(v,0,md)===Po?o[ko(v,md)]:'"'+v+'"',l=p}else s+=f}return s}})});var Td=i(()=>{"use strict";var ZR=q(),eA=vr(),rA=_(),Ed=zn(),tA=te(),nA=!eA||rA(function(){Ed.f(1)});ZR({target:"Object",stat:!0,forced:nA},{getOwnPropertySymbols:function(r){var t=Ed.f;return t?t(tA(r)):[]}})});var Cd=i(()=>{"use strict";Yv();Xv();ed();Sd();Td()});var Ro=i(()=>{"use strict";var aA=j();aA("asyncDispose")});var Ao=i(()=>{"use strict";var iA=j();iA("asyncIterator")});var Od=i(()=>{});var No=i(()=>{"use strict";var oA=j();oA("dispose")});var kd=i(()=>{"use strict";var uA=j();uA("hasInstance")});var Id=i(()=>{"use strict";var sA=j();sA("isConcatSpreadable")});var Mo=i(()=>{"use strict";var cA=j();cA("iterator")});var _d=i(()=>{"use strict";var lA=j();lA("match")});var Pd=i(()=>{"use strict";var fA=j();fA("matchAll")});var Rd=i(()=>{"use strict";var pA=j();pA("replace")});var Ad=i(()=>{"use strict";var vA=j();vA("search")});var Nd=i(()=>{"use strict";var dA=j();dA("species")});var Md=i(()=>{"use strict";var mA=j();mA("split")});var jo=i(()=>{"use strict";var hA=j(),yA=co();hA("toPrimitive");yA()});var jd=i(()=>{"use strict";var bA=W(),gA=j(),qA=Le();gA("toStringTag");qA(bA("Symbol"),"Symbol")});var Ld=i(()=>{"use strict";var xA=j();xA("unscopables")});var $d=i(()=>{"use strict";var wA=P(),SA=Le();SA(wA.JSON,"JSON",!0)});var Fd=i(()=>{});var Dd=i(()=>{});var Gd=i((SH,Bd)=>{"use strict";uo();Rt();Cd();Ro();Ao();Od();No();kd();Id();Mo();_d();Pd();Rd();Ad();Nd();Md();jo();jd();Ld();$d();Fd();Dd();var EA=V();Bd.exports=EA.Symbol});var Lo=i((EH,Ud)=>{"use strict";Ud.exports=function(){}});var wr=i((TH,Vd)=>{"use strict";var TA=Ae(),$o=Lo(),Hd=yr(),Kd=er(),CA=ne().f,OA=Gn(),na=Un(),kA=Z(),IA=H(),zd="Array Iterator",_A=Kd.set,PA=Kd.getterFor(zd);Vd.exports=OA(Array,"Array",function(e,r){_A(this,{type:zd,target:TA(e),index:0,kind:r})},function(){var e=PA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,na(void 0,!0);switch(e.kind){case"keys":return na(t,!1);case"values":return na(r[t],!1)}return na([t,r[t]],!1)},"values");var Wd=Hd.Arguments=Hd.Array;$o("keys");$o("values");$o("entries");if(!kA&&IA&&Wd.name!=="values")try{CA(Wd,"name",{value:"values"})}catch{}});var Jd=i((CH,Yd)=>{"use strict";Yd.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var Sr=i(()=>{"use strict";wr();var RA=Jd(),AA=P(),NA=Le(),Qd=yr();for(aa in RA)NA(AA[aa],aa),Qd[aa]=Qd.Array;var aa});var Zd=i((IH,Xd)=>{"use strict";var MA=Gd();Sr();Xd.exports=MA});var tm=i(()=>{"use strict";var jA=R(),LA=ne().f,em=jA("metadata"),rm=Function.prototype;rm[em]===void 0&&LA(rm,em,{value:null})});var nm=i(()=>{"use strict";Ro()});var am=i(()=>{"use strict";No()});var im=i(()=>{"use strict";var $A=j();$A("metadata")});var um=i(($H,om)=>{"use strict";var FA=Zd();tm();nm();am();im();om.exports=FA});var Do=i((FH,sm)=>{"use strict";var DA=W(),BA=N(),Fo=DA("Symbol"),GA=Fo.keyFor,UA=BA(Fo.prototype.valueOf);sm.exports=Fo.isRegisteredSymbol||function(r){try{return GA(UA(r))!==void 0}catch{return!1}}});var cm=i(()=>{"use strict";var HA=q(),WA=Do();HA({target:"Symbol",stat:!0},{isRegisteredSymbol:WA})});var Uo=i((GH,mm)=>{"use strict";var KA=dr(),vm=W(),zA=N(),VA=Fr(),YA=R(),oa=vm("Symbol"),lm=oa.isWellKnownSymbol,dm=vm("Object","getOwnPropertyNames"),JA=zA(oa.prototype.valueOf),fm=KA("wks");for(ia=0,Bo=dm(oa),pm=Bo.length;ia<pm;ia++)try{Go=Bo[ia],VA(oa[Go])&&YA(Go)}catch{}var Go,ia,Bo,pm;mm.exports=function(r){if(lm&&lm(r))return!0;try{for(var t=JA(r),n=0,a=dm(fm),o=a.length;n<o;n++)if(fm[a[n]]==t)return!0}catch{}return!1}});var hm=i(()=>{"use strict";var QA=q(),XA=Uo();QA({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:XA})});var ym=i(()=>{"use strict";var ZA=j();ZA("customMatcher")});var bm=i(()=>{"use strict";var e2=j();e2("observable")});var gm=i(()=>{"use strict";var r2=q(),t2=Do();r2({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:t2})});var qm=i(()=>{"use strict";var n2=q(),a2=Uo();n2({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:a2})});var xm=i(()=>{"use strict";var i2=j();i2("matcher")});var wm=i(()=>{"use strict";var o2=j();o2("metadataKey")});var Sm=i(()=>{"use strict";var u2=j();u2("patternMatch")});var Em=i(()=>{"use strict";var s2=j();s2("replaceAll")});var Cm=i((uW,Tm)=>{"use strict";var c2=um();cm();hm();ym();bm();gm();qm();xm();wm();Sm();Em();Tm.exports=c2});var Oe=i((sW,Om)=>{"use strict";Om.exports=Cm()});var ua=i((cW,km)=>{km.exports=Oe()});var _m=i((lW,Im)=>{"use strict";wr();br();var l2=_t();Im.exports=l2});var Rm=i((fW,Pm)=>{"use strict";var f2=_m();Sr();Pm.exports=f2});var Nm=i((pW,Am)=>{"use strict";var p2=Rm();Am.exports=p2});var jm=i((vW,Mm)=>{"use strict";var v2=Nm();Mm.exports=v2});var Ho=i((dW,Lm)=>{"use strict";Lm.exports=jm()});var sa=i((mW,$m)=>{$m.exports=Ho()});var Dm=i((hW,Fm)=>{"use strict";wr();br();var d2=Hn();Fm.exports=d2});var Gm=i((yW,Bm)=>{"use strict";var m2=Dm();Sr();Bm.exports=m2});var Hm=i((bW,Um)=>{"use strict";var h2=Gm();Um.exports=h2});var Km=i((gW,Wm)=>{"use strict";var y2=Hm();Wm.exports=y2});var Vm=i((qW,zm)=>{"use strict";zm.exports=Km()});var ca=i((xW,Ym)=>{Ym.exports=Vm()});var Qm=i((wW,Jm)=>{"use strict";var b2=W(),g2=N(),q2=At(),x2=zn(),w2=X(),S2=g2([].concat);Jm.exports=b2("Reflect","ownKeys")||function(r){var t=q2.f(w2(r)),n=x2.f;return n?S2(t,n(r)):t}});var eh=i((SW,Zm)=>{"use strict";var Xm=K(),E2=Qm(),T2=yt(),C2=ne();Zm.exports=function(e,r,t){for(var n=E2(r),a=C2.f,o=T2.f,u=0;u<n.length;u++){var s=n[u];!Xm(e,s)&&!(t&&Xm(t,s))&&a(e,s,o(r,s))}}});var th=i((EW,rh)=>{"use strict";var O2=$(),k2=Ce();rh.exports=function(e,r){O2(r)&&"cause"in r&&k2(e,"cause",r.cause)}});var oh=i((TW,ih)=>{"use strict";var I2=N(),nh=Error,_2=I2("".replace),P2=function(e){return String(new nh(e).stack)}("zxcasd"),ah=/\n\s*at [^:]*:[^\n]*/,R2=ah.test(P2);ih.exports=function(e,r){if(R2&&typeof e=="string"&&!nh.prepareStackTrace)for(;r--;)e=_2(e,ah,"");return e}});var sh=i((CW,uh)=>{"use strict";var A2=_(),N2=Qe();uh.exports=!A2(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",N2(1,7)),e.stack!==7):!0})});var fh=i((OW,lh)=>{"use strict";var M2=Ce(),j2=oh(),L2=sh(),ch=Error.captureStackTrace;lh.exports=function(e,r,t,n){L2&&(ch?ch(e,r):M2(e,"stack",j2(t,n)))}});var me=i((kW,mh)=>{"use strict";var $2=Y(),F2=G(),D2=X(),B2=Xe(),G2=no(),U2=ve(),ph=U(),H2=Hn(),W2=_t(),vh=to(),K2=TypeError,la=function(e,r){this.stopped=e,this.result=r},dh=la.prototype;mh.exports=function(e,r,t){var n=t&&t.that,a=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),s=!!(t&&t.INTERRUPTED),c=$2(r,n),l,f,p,v,d,h,m,x=function(g){return l&&vh(l,"normal"),new la(!0,g)},y=function(g){return a?(D2(g),s?c(g[0],g[1],x):c(g[0],g[1])):s?c(g,x):c(g)};if(o)l=e.iterator;else if(u)l=e;else{if(f=W2(e),!f)throw new K2(B2(e)+" is not iterable");if(G2(f)){for(p=0,v=U2(e);v>p;p++)if(d=y(e[p]),d&&ph(dh,d))return d;return new la(!1)}l=H2(e,f)}for(h=o?e.next:l.next;!(m=F2(h,l)).done;){try{d=y(m.value)}catch(g){vh(l,"throw",g)}if(typeof d=="object"&&d&&ph(dh,d))return d}return new la(!1)}});var yh=i((IW,hh)=>{"use strict";var z2=Ze();hh.exports=function(e,r){return e===void 0?arguments.length<2?"":r:z2(e)}});var gh=i(()=>{"use strict";var V2=q(),Y2=U(),J2=Ct(),fa=Ot(),Q2=eh(),bh=rr(),Wo=Ce(),Ko=Qe(),X2=th(),Z2=fh(),eN=me(),rN=yh(),tN=R(),nN=tN("toStringTag"),pa=Error,aN=[].push,Xr=function(r,t){var n=Y2(zo,this),a;fa?a=fa(new pa,n?J2(this):zo):(a=n?this:bh(zo),Wo(a,nN,"Error")),t!==void 0&&Wo(a,"message",rN(t)),Z2(a,Xr,a.stack,1),arguments.length>2&&X2(a,arguments[2]);var o=[];return eN(r,aN,{that:o}),Wo(a,"errors",o),a};fa?fa(Xr,pa):Q2(Xr,pa,{name:!0});var zo=Xr.prototype=bh(pa.prototype,{constructor:Ko(1,Xr),message:Ko(1,""),name:Ko(1,"AggregateError")});V2({global:!0,constructor:!0,arity:2},{AggregateError:Xr})});var Vo=i(()=>{"use strict";gh()});var Yo=i((NW,qh)=>{"use strict";var Ft=P(),iN=Lr(),oN=Te(),va=function(e){return iN.slice(0,e.length)===e};qh.exports=function(){return va("Bun/")?"BUN":va("Cloudflare-Workers")?"CLOUDFLARE":va("Deno/")?"DENO":va("Node.js/")?"NODE":Ft.Bun&&typeof Bun.version=="string"?"BUN":Ft.Deno&&typeof Deno.version=="object"?"DENO":oN(Ft.process)==="process"?"NODE":Ft.window&&Ft.document?"BROWSER":"REST"}()});var Dt=i((MW,xh)=>{"use strict";var uN=Yo();xh.exports=uN==="NODE"});var Jo=i((jW,Sh)=>{"use strict";var sN=W(),cN=Vn(),lN=R(),fN=H(),wh=lN("species");Sh.exports=function(e){var r=sN(e);fN&&r&&!r[wh]&&cN(r,wh,{configurable:!0,get:function(){return this}})}});var da=i((LW,Eh)=>{"use strict";var pN=U(),vN=TypeError;Eh.exports=function(e,r){if(pN(r,e))return e;throw new vN("Incorrect invocation")}});var Qo=i(($W,Th)=>{"use strict";var dN=wt(),mN=Xe(),hN=TypeError;Th.exports=function(e){if(dN(e))return e;throw new hN(mN(e)+" is not a constructor")}});var Xo=i((FW,Oh)=>{"use strict";var Ch=X(),yN=Qo(),bN=fr(),gN=R(),qN=gN("species");Oh.exports=function(e,r){var t=Ch(e).constructor,n;return t===void 0||bN(n=Ch(t)[qN])?r:yN(n)}});var Ih=i((DW,kh)=>{"use strict";var xN=TypeError;kh.exports=function(e,r){if(e<r)throw new xN("Not enough arguments");return e}});var Zo=i((BW,_h)=>{"use strict";var wN=Lr();_h.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(wN)});var su=i((GW,Fh)=>{"use strict";var se=P(),SN=jr(),EN=Y(),Ph=M(),TN=K(),$h=_(),Rh=Wi(),CN=mr(),Ah=In(),ON=Ih(),kN=Zo(),IN=Dt(),iu=se.setImmediate,ou=se.clearImmediate,_N=se.process,eu=se.Dispatch,PN=se.Function,Nh=se.MessageChannel,RN=se.String,ru=0,Bt={},Mh="onreadystatechange",Gt,Er,tu,nu;$h(function(){Gt=se.location});var uu=function(e){if(TN(Bt,e)){var r=Bt[e];delete Bt[e],r()}},au=function(e){return function(){uu(e)}},jh=function(e){uu(e.data)},Lh=function(e){se.postMessage(RN(e),Gt.protocol+"//"+Gt.host)};(!iu||!ou)&&(iu=function(r){ON(arguments.length,1);var t=Ph(r)?r:PN(r),n=CN(arguments,1);return Bt[++ru]=function(){SN(t,void 0,n)},Er(ru),ru},ou=function(r){delete Bt[r]},IN?Er=function(e){_N.nextTick(au(e))}:eu&&eu.now?Er=function(e){eu.now(au(e))}:Nh&&!kN?(tu=new Nh,nu=tu.port2,tu.port1.onmessage=jh,Er=EN(nu.postMessage,nu)):se.addEventListener&&Ph(se.postMessage)&&!se.importScripts&&Gt&&Gt.protocol!=="file:"&&!$h(Lh)?(Er=Lh,se.addEventListener("message",jh,!1)):Mh in Ah("script")?Er=function(e){Rh.appendChild(Ah("script"))[Mh]=function(){Rh.removeChild(this),uu(e)}}:Er=function(e){setTimeout(au(e),0)});Fh.exports={set:iu,clear:ou}});var Gh=i((UW,Bh)=>{"use strict";var Dh=P(),AN=H(),NN=Object.getOwnPropertyDescriptor;Bh.exports=function(e){if(!AN)return Dh[e];var r=NN(Dh,e);return r&&r.value}});var cu=i((HW,Hh)=>{"use strict";var Uh=function(){this.head=null,this.tail=null};Uh.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Hh.exports=Uh});var Kh=i((WW,Wh)=>{"use strict";var MN=Lr();Wh.exports=/ipad|iphone|ipod/i.test(MN)&&typeof Pebble<"u"});var Vh=i((KW,zh)=>{"use strict";var jN=Lr();zh.exports=/web0s(?!.*chrome)/i.test(jN)});var ry=i((zW,ey)=>{"use strict";var et=P(),LN=Gh(),Yh=Y(),lu=su().set,$N=cu(),FN=Zo(),DN=Kh(),BN=Vh(),fu=Dt(),Jh=et.MutationObserver||et.WebKitMutationObserver,Qh=et.document,Xh=et.process,ma=et.Promise,du=LN("queueMicrotask"),Zr,pu,vu,ha,Zh;du||(Ut=new $N,Ht=function(){var e,r;for(fu&&(e=Xh.domain)&&e.exit();r=Ut.get();)try{r()}catch(t){throw Ut.head&&Zr(),t}e&&e.enter()},!FN&&!fu&&!BN&&Jh&&Qh?(pu=!0,vu=Qh.createTextNode(""),new Jh(Ht).observe(vu,{characterData:!0}),Zr=function(){vu.data=pu=!pu}):!DN&&ma&&ma.resolve?(ha=ma.resolve(void 0),ha.constructor=ma,Zh=Yh(ha.then,ha),Zr=function(){Zh(Ht)}):fu?Zr=function(){Xh.nextTick(Ht)}:(lu=Yh(lu,et),Zr=function(){lu(Ht)}),du=function(e){Ut.head||Zr(),Ut.add(e)});var Ut,Ht;ey.exports=du});var ny=i((VW,ty)=>{"use strict";ty.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var Tr=i((YW,ay)=>{"use strict";ay.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var Cr=i((JW,iy)=>{"use strict";var GN=P();iy.exports=GN.Promise});var rt=i((QW,cy)=>{"use strict";var UN=P(),Wt=Cr(),HN=M(),WN=xi(),KN=ki(),zN=R(),oy=Yo(),VN=Z(),mu=$r(),uy=Wt&&Wt.prototype,YN=zN("species"),hu=!1,sy=HN(UN.PromiseRejectionEvent),JN=WN("Promise",function(){var e=KN(Wt),r=e!==String(Wt);if(!r&&mu===66||VN&&!(uy.catch&&uy.finally))return!0;if(!mu||mu<51||!/native code/.test(e)){var t=new Wt(function(o){o(1)}),n=function(o){o(function(){},function(){})},a=t.constructor={};if(a[YN]=n,hu=t.then(function(){})instanceof n,!hu)return!0}return!r&&(oy==="BROWSER"||oy==="DENO")&&!sy});cy.exports={CONSTRUCTOR:JN,REJECTION_EVENT:sy,SUBCLASSING:hu}});var ke=i((XW,fy)=>{"use strict";var ly=D(),QN=TypeError,XN=function(e){var r,t;this.promise=new e(function(n,a){if(r!==void 0||t!==void 0)throw new QN("Bad Promise constructor");r=n,t=a}),this.resolve=ly(r),this.reject=ly(t)};fy.exports.f=function(e){return new XN(e)}});var Py=i(()=>{"use strict";var ZN=q(),eM=Z(),qa=Dt(),ar=P(),rM=V(),it=G(),py=Me(),vy=Ot(),tM=Le(),nM=Jo(),aM=D(),ga=M(),iM=$(),oM=da(),uM=Xo(),by=su().set,xu=ry(),sM=ny(),cM=Tr(),lM=cu(),gy=er(),xa=Cr(),wu=rt(),qy=ke(),wa="Promise",xy=wu.CONSTRUCTOR,fM=wu.REJECTION_EVENT,pM=wu.SUBCLASSING,yu=gy.getterFor(wa),vM=gy.set,tt=xa&&xa.prototype,Or=xa,ya=tt,wy=ar.TypeError,bu=ar.document,Su=ar.process,gu=qy.f,dM=gu,mM=!!(bu&&bu.createEvent&&ar.dispatchEvent),Sy="unhandledrejection",hM="rejectionhandled",dy=0,Ey=1,yM=2,Eu=1,Ty=2,ba,my,Cy,hy,Oy=function(e){var r;return iM(e)&&ga(r=e.then)?r:!1},ky=function(e,r){var t=r.value,n=r.state===Ey,a=n?e.ok:e.fail,o=e.resolve,u=e.reject,s=e.domain,c,l,f;try{a?(n||(r.rejection===Ty&&gM(r),r.rejection=Eu),a===!0?c=t:(s&&s.enter(),c=a(t),s&&(s.exit(),f=!0)),c===e.promise?u(new wy("Promise-chain cycle")):(l=Oy(c))?it(l,c,o,u):o(c)):u(t)}catch(p){s&&!f&&s.exit(),u(p)}},Iy=function(e,r){e.notified||(e.notified=!0,xu(function(){for(var t=e.reactions,n;n=t.get();)ky(n,e);e.notified=!1,r&&!e.rejection&&bM(e)}))},_y=function(e,r,t){var n,a;mM?(n=bu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),ar.dispatchEvent(n)):n={promise:r,reason:t},!fM&&(a=ar["on"+e])?a(n):e===Sy&&sM("Unhandled promise rejection",t)},bM=function(e){it(by,ar,function(){var r=e.facade,t=e.value,n=yy(e),a;if(n&&(a=cM(function(){qa?Su.emit("unhandledRejection",t,r):_y(Sy,r,t)}),e.rejection=qa||yy(e)?Ty:Eu,a.error))throw a.value})},yy=function(e){return e.rejection!==Eu&&!e.parent},gM=function(e){it(by,ar,function(){var r=e.facade;qa?Su.emit("rejectionHandled",r):_y(hM,r,e.value)})},nt=function(e,r,t){return function(n){e(r,n,t)}},at=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=yM,Iy(e,!0))},qu=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new wy("Promise can't be resolved itself");var n=Oy(r);n?xu(function(){var a={done:!1};try{it(n,r,nt(qu,a,e),nt(at,a,e))}catch(o){at(a,o,e)}}):(e.value=r,e.state=Ey,Iy(e,!1))}catch(a){at({done:!1},a,e)}}};if(xy&&(Or=function(r){oM(this,ya),aM(r),it(ba,this);var t=yu(this);try{r(nt(qu,t),nt(at,t))}catch(n){at(t,n)}},ya=Or.prototype,ba=function(r){vM(this,{type:wa,done:!1,notified:!1,parent:!1,reactions:new lM,rejection:!1,state:dy,value:null})},ba.prototype=py(ya,"then",function(r,t){var n=yu(this),a=gu(uM(this,Or));return n.parent=!0,a.ok=ga(r)?r:!0,a.fail=ga(t)&&t,a.domain=qa?Su.domain:void 0,n.state===dy?n.reactions.add(a):xu(function(){ky(a,n)}),a.promise}),my=function(){var e=new ba,r=yu(e);this.promise=e,this.resolve=nt(qu,r),this.reject=nt(at,r)},qy.f=gu=function(e){return e===Or||e===Cy?new my(e):dM(e)},!eM&&ga(xa)&&tt!==Object.prototype)){hy=tt.then,pM||py(tt,"then",function(r,t){var n=this;return new Or(function(a,o){it(hy,n,a,o)}).then(r,t)},{unsafe:!0});try{delete tt.constructor}catch{}vy&&vy(tt,ya)}ZN({global:!0,constructor:!0,wrap:!0,forced:xy},{Promise:Or});Cy=rM.Promise;tM(Or,wa,!1,!0);nM(wa)});var Kt=i((rK,Ry)=>{"use strict";var qM=Cr(),xM=io(),wM=rt().CONSTRUCTOR;Ry.exports=wM||!xM(function(e){qM.all(e).then(void 0,function(){})})});var Ay=i(()=>{"use strict";var SM=q(),EM=G(),TM=D(),CM=ke(),OM=Tr(),kM=me(),IM=Kt();SM({target:"Promise",stat:!0,forced:IM},{all:function(r){var t=this,n=CM.f(t),a=n.resolve,o=n.reject,u=OM(function(){var s=TM(t.resolve),c=[],l=0,f=1;kM(r,function(p){var v=l++,d=!1;f++,EM(s,t,p).then(function(h){d||(d=!0,c[v]=h,--f||a(c))},o)}),--f||a(c)});return u.error&&o(u.value),n.promise}})});var My=i(()=>{"use strict";var _M=q(),PM=Z(),RM=rt().CONSTRUCTOR,Cu=Cr(),AM=W(),NM=M(),MM=Me(),Ny=Cu&&Cu.prototype;_M({target:"Promise",proto:!0,forced:RM,real:!0},{catch:function(e){return this.then(void 0,e)}});!PM&&NM(Cu)&&(Tu=AM("Promise").prototype.catch,Ny.catch!==Tu&&MM(Ny,"catch",Tu,{unsafe:!0}));var Tu});var jy=i(()=>{"use strict";var jM=q(),LM=G(),$M=D(),FM=ke(),DM=Tr(),BM=me(),GM=Kt();jM({target:"Promise",stat:!0,forced:GM},{race:function(r){var t=this,n=FM.f(t),a=n.reject,o=DM(function(){var u=$M(t.resolve);BM(r,function(s){LM(u,t,s).then(n.resolve,a)})});return o.error&&a(o.value),n.promise}})});var Ly=i(()=>{"use strict";var UM=q(),HM=ke(),WM=rt().CONSTRUCTOR;UM({target:"Promise",stat:!0,forced:WM},{reject:function(r){var t=HM.f(this),n=t.reject;return n(r),t.promise}})});var Ou=i((lK,$y)=>{"use strict";var KM=X(),zM=$(),VM=ke();$y.exports=function(e,r){if(KM(e),zM(r)&&r.constructor===e)return r;var t=VM.f(e),n=t.resolve;return n(r),t.promise}});var By=i(()=>{"use strict";var YM=q(),JM=W(),Fy=Z(),QM=Cr(),Dy=rt().CONSTRUCTOR,XM=Ou(),ZM=JM("Promise"),ej=Fy&&!Dy;YM({target:"Promise",stat:!0,forced:Fy||Dy},{resolve:function(r){return XM(ej&&this===ZM?QM:this,r)}})});var Gy=i(()=>{"use strict";Py();Ay();My();jy();Ly();By()});var ku=i(()=>{"use strict";var rj=q(),tj=G(),nj=D(),aj=ke(),ij=Tr(),oj=me(),uj=Kt();rj({target:"Promise",stat:!0,forced:uj},{allSettled:function(r){var t=this,n=aj.f(t),a=n.resolve,o=n.reject,u=ij(function(){var s=nj(t.resolve),c=[],l=0,f=1;oj(r,function(p){var v=l++,d=!1;f++,tj(s,t,p).then(function(h){d||(d=!0,c[v]={status:"fulfilled",value:h},--f||a(c))},function(h){d||(d=!0,c[v]={status:"rejected",reason:h},--f||a(c))})}),--f||a(c)});return u.error&&o(u.value),n.promise}})});var Iu=i(()=>{"use strict";var sj=q(),cj=G(),lj=D(),fj=W(),pj=ke(),vj=Tr(),dj=me(),mj=Kt(),Uy="No one promise resolved";sj({target:"Promise",stat:!0,forced:mj},{any:function(r){var t=this,n=fj("AggregateError"),a=pj.f(t),o=a.resolve,u=a.reject,s=vj(function(){var c=lj(t.resolve),l=[],f=0,p=1,v=!1;dj(r,function(d){var h=f++,m=!1;p++,cj(c,t,d).then(function(x){m||v||(v=!0,o(x))},function(x){m||v||(m=!0,l[h]=x,--p||u(new n(l,Uy)))})}),--p||u(new n(l,Uy))});return s.error&&u(s.value),a.promise}})});var Pu=i(()=>{"use strict";var hj=q(),yj=P(),bj=jr(),gj=mr(),qj=ke(),xj=D(),Wy=Tr(),_u=yj.Promise,Hy=!1,wj=!_u||!_u.try||Wy(function(){_u.try(function(e){Hy=e===8},8)}).error||!Hy;hj({target:"Promise",stat:!0,forced:wj},{try:function(e){var r=arguments.length>1?gj(arguments,1):[],t=qj.f(this),n=Wy(function(){return bj(xj(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var Ru=i(()=>{"use strict";var Sj=q(),Ej=ke();Sj({target:"Promise",stat:!0},{withResolvers:function(){var r=Ej.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var Yy=i(()=>{"use strict";var Tj=q(),Cj=Z(),Sa=Cr(),Oj=_(),zy=W(),Vy=M(),kj=Xo(),Ky=Ou(),Ij=Me(),Nu=Sa&&Sa.prototype,_j=!!Sa&&Oj(function(){Nu.finally.call({then:function(){}},function(){})});Tj({target:"Promise",proto:!0,real:!0,forced:_j},{finally:function(e){var r=kj(this,zy("Promise")),t=Vy(e);return this.then(t?function(n){return Ky(r,e()).then(function(){return n})}:e,t?function(n){return Ky(r,e()).then(function(){throw n})}:e)}});!Cj&&Vy(Sa)&&(Au=zy("Promise").prototype.finally,Nu.finally!==Au&&Ij(Nu,"finally",Au,{unsafe:!0}));var Au});var Qy=i((TK,Jy)=>{"use strict";Vo();wr();Rt();Gy();ku();Iu();Pu();Ru();Yy();br();var Pj=V();Jy.exports=Pj.Promise});var Zy=i((CK,Xy)=>{"use strict";var Rj=Qy();Sr();Xy.exports=Rj});var eb=i(()=>{"use strict";Pu()});var rb=i(()=>{"use strict";Ru()});var nb=i((PK,tb)=>{"use strict";var Aj=Zy();eb();rb();tb.exports=Aj});var ab=i(()=>{"use strict";Vo()});var ib=i(()=>{"use strict";ku()});var ob=i(()=>{"use strict";Iu()});var sb=i(($K,ub)=>{"use strict";var Nj=nb();ab();ib();ob();ub.exports=Nj});var ot=i((FK,cb)=>{"use strict";cb.exports=sb()});var pb=i((HK,fb)=>{"use strict";Ao();var Mj=Vr();fb.exports=Mj.f("asyncIterator")});var db=i((WK,vb)=>{"use strict";var jj=pb();vb.exports=jj});var hb=i((KK,mb)=>{"use strict";var Lj=db();mb.exports=Lj});var bb=i((zK,yb)=>{"use strict";var $j=hb();yb.exports=$j});var Ea=i((VK,gb)=>{"use strict";gb.exports=bb()});var Sb=i(()=>{"use strict";var Fj=q(),Dj=_(),Bj=te(),wb=Ct(),Gj=Yi(),Uj=Dj(function(){wb(1)});Fj({target:"Object",stat:!0,forced:Uj,sham:!Gj},{getPrototypeOf:function(r){return wb(Bj(r))}})});var Tb=i((ZK,Eb)=>{"use strict";Sb();var Hj=V();Eb.exports=Hj.Object.getPrototypeOf});var Ob=i((ez,Cb)=>{"use strict";var Wj=Tb();Cb.exports=Wj});var Ib=i((rz,kb)=>{"use strict";var Kj=Ob();kb.exports=Kj});var Pb=i((tz,_b)=>{"use strict";var zj=Ib();_b.exports=zj});var Ta=i((nz,Rb)=>{"use strict";Rb.exports=Pb()});var Nb=i(()=>{"use strict";var Vj=q(),Yj=N(),Jj=Ne(),Qj=Yj([].reverse),Ab=[1,2];Vj({target:"Array",proto:!0,forced:String(Ab)===String(Ab.reverse())},{reverse:function(){return Jj(this)&&(this.length=this.length),Qj(this)}})});var jb=i((oz,Mb)=>{"use strict";Nb();var Xj=ue();Mb.exports=Xj("Array","reverse")});var $b=i((uz,Lb)=>{"use strict";var Zj=U(),eL=jb(),Lu=Array.prototype;Lb.exports=function(e){var r=e.reverse;return e===Lu||Zj(Lu,e)&&r===Lu.reverse?eL:r}});var Db=i((sz,Fb)=>{"use strict";var rL=$b();Fb.exports=rL});var Gb=i((cz,Bb)=>{"use strict";var tL=Db();Bb.exports=tL});var Hb=i((lz,Ub)=>{"use strict";var nL=Gb();Ub.exports=nL});var Kb=i((fz,Wb)=>{"use strict";Wb.exports=Hb()});var $u=i((pz,Yt)=>{function aL(e,r){this.v=e,this.k=r}Yt.exports=aL,Yt.exports.__esModule=!0,Yt.exports.default=Yt.exports});var zb=i(()=>{"use strict";var iL=q(),oL=H(),uL=rr();iL({target:"Object",stat:!0,sham:!oL},{create:uL})});var Yb=i((mz,Vb)=>{"use strict";zb();var sL=V(),cL=sL.Object;Vb.exports=function(r,t){return cL.create(r,t)}});var Qb=i((hz,Jb)=>{"use strict";var lL=Yb();Jb.exports=lL});var Zb=i((yz,Xb)=>{"use strict";var fL=Qb();Xb.exports=fL});var rg=i((bz,eg)=>{"use strict";var pL=Zb();eg.exports=pL});var Ca=i((gz,tg)=>{"use strict";tg.exports=rg()});var Du=i((qz,og)=>{"use strict";var ag=N(),vL=D(),dL=$(),mL=K(),ng=mr(),hL=Mr(),ig=Function,yL=ag([].concat),bL=ag([].join),Fu={},gL=function(e,r,t){if(!mL(Fu,r)){for(var n=[],a=0;a<r;a++)n[a]="a["+a+"]";Fu[r]=ig("C,a","return new C("+bL(n,",")+")")}return Fu[r](e,t)};og.exports=hL?ig.bind:function(r){var t=vL(this),n=t.prototype,a=ng(arguments,1),o=function(){var s=yL(a,ng(arguments));return this instanceof o?gL(t,s.length,s):t.apply(r,s)};return dL(n)&&(o.prototype=n),o}});var sg=i(()=>{"use strict";var qL=q(),ug=Du();qL({target:"Function",proto:!0,forced:Function.bind!==ug},{bind:ug})});var lg=i((Sz,cg)=>{"use strict";sg();var xL=ue();cg.exports=xL("Function","bind")});var pg=i((Ez,fg)=>{"use strict";var wL=U(),SL=lg(),Bu=Function.prototype;fg.exports=function(e){var r=e.bind;return e===Bu||wL(Bu,e)&&r===Bu.bind?SL:r}});var dg=i((Tz,vg)=>{"use strict";var EL=pg();vg.exports=EL});var hg=i((Cz,mg)=>{"use strict";var TL=dg();mg.exports=TL});var bg=i((Oz,yg)=>{"use strict";var CL=hg();yg.exports=CL});var Jt=i((kz,gg)=>{"use strict";gg.exports=bg()});var qg=i(()=>{"use strict";var OL=q(),kL=Ot();OL({target:"Object",stat:!0},{setPrototypeOf:kL})});var wg=i((Pz,xg)=>{"use strict";qg();var IL=V();xg.exports=IL.Object.setPrototypeOf});var Eg=i((Rz,Sg)=>{"use strict";var _L=wg();Sg.exports=_L});var Cg=i((Az,Tg)=>{"use strict";var PL=Eg();Tg.exports=PL});var kg=i((Nz,Og)=>{"use strict";var RL=Cg();Og.exports=RL});var Oa=i((Mz,Ig)=>{"use strict";Ig.exports=kg()});var Pg=i(()=>{"use strict";var AL=q(),NL=H(),_g=ne().f;AL({target:"Object",stat:!0,forced:Object.defineProperty!==_g,sham:!NL},{defineProperty:_g})});var Ng=i(($z,Ag)=>{"use strict";Pg();var ML=V(),Rg=ML.Object,jL=Ag.exports=function(r,t,n){return Rg.defineProperty(r,t,n)};Rg.defineProperty.sham&&(jL.sham=!0)});var jg=i((Fz,Mg)=>{"use strict";var LL=Ng();Mg.exports=LL});var $g=i((Dz,Lg)=>{"use strict";var $L=jg();Lg.exports=$L});var Dg=i((Bz,Fg)=>{"use strict";var FL=$g();Fg.exports=FL});var Qt=i((Gz,Bg)=>{"use strict";Bg.exports=Dg()});var Gu=i((Uz,Fe)=>{var DL=Qt();function ka(e,r,t,n){var a=DL;try{a({},"",{})}catch{a=0}Fe.exports=ka=function(u,s,c,l){function f(p,v){ka(u,p,function(d){return this._invoke(p,v,d)})}s?a?a(u,s,{value:c,enumerable:!l,configurable:!l,writable:!l}):u[s]=c:(f("next",0),f("throw",1),f("return",2))},Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports,ka(e,r,t,n)}Fe.exports=ka,Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports});var Hu=i((Hz,De)=>{var Gg=Oe(),Uu=Ca(),BL=Jt(),GL=Ta(),Ug=Oa(),_e=Gu();function Hg(){var e,r,t=typeof Gg=="function"?Gg:{},n=t.iterator||"@@iterator",a=t.toStringTag||"@@toStringTag";function o(d,h,m,x){var y=h&&h.prototype instanceof s?h:s,g=Uu(y.prototype);return _e(g,"_invoke",function(O,k,w){var E,S,C,L=0,Se=w||[],I=!1,re={p:0,n:0,v:e,a:Ee,f:BL(Ee).call(Ee,e,4),d:function(F,ye){return E=F,S=0,C=e,re.n=ye,u}};function Ee(Q,F){for(S=Q,C=F,r=0;!I&&L&&!ye&&r<Se.length;r++){var ye,T=Se[r],Nr=re.p,Ye=T[2];Q>3?(ye=Ye===F)&&(C=T[(S=T[4])?5:(S=3,3)],T[4]=T[5]=e):T[0]<=Nr&&((ye=Q<2&&Nr<T[1])?(S=0,re.v=F,re.n=T[1]):Nr<Ye&&(ye=Q<3||T[0]>F||F>Ye)&&(T[4]=Q,T[5]=F,re.n=Ye,S=0))}if(ye||Q>1)return u;throw I=!0,F}return function(Q,F,ye){if(L>1)throw TypeError("Generator is already running");for(I&&F===1&&Ee(F,ye),S=F,C=ye;(r=S<2?e:C)||!I;){E||(S?S<3?(S>1&&(re.n=-1),Ee(S,C)):re.n=C:re.v=C);try{if(L=2,E){if(S||(Q="next"),r=E[Q]){if(!(r=r.call(E,C)))throw TypeError("iterator result is not an object");if(!r.done)return r;C=r.value,S<2&&(S=0)}else S===1&&(r=E.return)&&r.call(E),S<2&&(C=TypeError("The iterator does not provide a '"+Q+"' method"),S=1);E=e}else if((r=(I=re.n<0)?C:O.call(k,re))!==u)break}catch(T){E=e,S=1,C=T}finally{L=1}}return{value:r,done:I}}}(d,m,x),!0),g}var u={};function s(){}function c(){}function l(){}r=GL;var f=[][n]?r(r([][n]())):(_e(r={},n,function(){return this}),r),p=l.prototype=s.prototype=Uu(f);function v(d){return Ug?Ug(d,l):(d.__proto__=l,_e(d,a,"GeneratorFunction")),d.prototype=Uu(p),d}return c.prototype=l,_e(p,"constructor",l),_e(l,"constructor",c),c.displayName="GeneratorFunction",_e(l,a,"GeneratorFunction"),_e(p),_e(p,a,"Generator"),_e(p,n,function(){return this}),_e(p,"toString",function(){return"[object Generator]"}),(De.exports=Hg=function(){return{w:o,m:v}},De.exports.__esModule=!0,De.exports.default=De.exports)()}De.exports=Hg,De.exports.__esModule=!0,De.exports.default=De.exports});var zu=i((Wz,Xt)=>{var UL=Oe(),HL=Ea(),WL=$u(),Wu=Gu();function Ku(e,r){function t(a,o,u,s){try{var c=e[a](o),l=c.value;return l instanceof WL?r.resolve(l.v).then(function(f){t("next",f,u,s)},function(f){t("throw",f,u,s)}):r.resolve(l).then(function(f){c.value=f,u(c)},function(f){return t("throw",f,u,s)})}catch(f){s(f)}}var n;this.next||(Wu(Ku.prototype),Wu(Ku.prototype,typeof UL=="function"&&HL||"@asyncIterator",function(){return this})),Wu(this,"_invoke",function(a,o,u){function s(){return new r(function(c,l){t(a,u,c,l)})}return n=n?n.then(s,s):s()},!0)}Xt.exports=Ku,Xt.exports.__esModule=!0,Xt.exports.default=Xt.exports});var Vu=i((Kz,Zt)=>{var KL=ot(),zL=Hu(),VL=zu();function YL(e,r,t,n,a){return new VL(zL().w(e,r,t,n),a||KL)}Zt.exports=YL,Zt.exports.__esModule=!0,Zt.exports.default=Zt.exports});var Wg=i((zz,en)=>{var JL=Vu();function QL(e,r,t,n,a){var o=JL(e,r,t,n,a);return o.next().then(function(u){return u.done?u.value:o.next()})}en.exports=QL,en.exports.__esModule=!0,en.exports.default=en.exports});var Vg=i((Vz,zg)=>{"use strict";var Kg=Xe(),XL=TypeError;zg.exports=function(e,r){if(!delete e[r])throw new XL("Cannot delete property "+Kg(r)+" of "+Kg(e))}});var Yg=i(()=>{"use strict";var ZL=q(),e$=te(),r$=ve(),t$=Wr(),n$=Vg(),a$=Pt(),i$=[].unshift(0)!==1,o$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},u$=i$||!o$();ZL({target:"Array",proto:!0,arity:1,forced:u$},{unshift:function(r){var t=e$(this),n=r$(t),a=arguments.length;if(a){a$(n+a);for(var o=n;o--;){var u=o+a;o in t?t[u]=t[o]:n$(t,u)}for(var s=0;s<a;s++)t[s]=arguments[s]}return t$(t,n+a)}})});var Qg=i((Qz,Jg)=>{"use strict";Yg();var s$=ue();Jg.exports=s$("Array","unshift")});var Zg=i((Xz,Xg)=>{"use strict";var c$=U(),l$=Qg(),Yu=Array.prototype;Xg.exports=function(e){var r=e.unshift;return e===Yu||c$(Yu,e)&&r===Yu.unshift?l$:r}});var rq=i((Zz,eq)=>{"use strict";var f$=Zg();eq.exports=f$});var nq=i((eV,tq)=>{"use strict";var p$=rq();tq.exports=p$});var iq=i((rV,aq)=>{"use strict";var v$=nq();aq.exports=v$});var uq=i((tV,oq)=>{"use strict";oq.exports=iq()});var sq=i((nV,rn)=>{var d$=uq();function m$(e){var r=Object(e),t=[];for(var n in r)d$(t).call(t,n);return function a(){for(;t.length;)if((n=t.pop())in r)return a.value=n,a.done=!1,a;return a.done=!0,a}}rn.exports=m$,rn.exports.__esModule=!0,rn.exports.default=rn.exports});var lq=i((aV,cq)=>{"use strict";wr();Rt();br();Mo();var h$=Vr();cq.exports=h$.f("iterator")});var pq=i((iV,fq)=>{"use strict";var y$=lq();Sr();fq.exports=y$});var dq=i((oV,vq)=>{"use strict";var b$=pq();vq.exports=b$});var hq=i((uV,mq)=>{"use strict";var g$=dq();mq.exports=g$});var tn=i((sV,yq)=>{"use strict";yq.exports=hq()});var bq=i((cV,Be)=>{var Ia=Oe(),q$=tn();function Ju(e){"@babel/helpers - typeof";return Be.exports=Ju=typeof Ia=="function"&&typeof q$=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Ia=="function"&&r.constructor===Ia&&r!==Ia.prototype?"symbol":typeof r},Be.exports.__esModule=!0,Be.exports.default=Be.exports,Ju(e)}Be.exports=Ju,Be.exports.__esModule=!0,Be.exports.default=Be.exports});var gq=i((lV,nn)=>{var x$=bq().default,w$=Oe(),S$=tn();function E$(e){if(e!=null){var r=e[typeof w$=="function"&&S$||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(x$(e)+" is not iterable")}nn.exports=E$,nn.exports.__esModule=!0,nn.exports.default=nn.exports});var wq=i((fV,Ge)=>{var qq=Ta(),T$=Kb(),C$=$u(),O$=Hu(),k$=Wg(),I$=Vu(),_$=zu(),P$=sq(),xq=gq();function Qu(){"use strict";var e=O$(),r=e.m(Qu),t=(qq?qq(r):r.__proto__).constructor;function n(u){var s=typeof u=="function"&&u.constructor;return!!s&&(s===t||(s.displayName||s.name)==="GeneratorFunction")}var a={throw:1,return:2,break:3,continue:3};function o(u){var s,c;return function(l){s||(s={stop:function(){return c(l.a,2)},catch:function(){return l.v},abrupt:function(p,v){return c(l.a,a[p],v)},delegateYield:function(p,v,d){return s.resultName=v,c(l.d,xq(p),d)},finish:function(p){return c(l.f,p)}},c=function(p,v,d){l.p=s.prev,l.n=s.next;try{return p(v,d)}finally{s.next=l.n}}),s.resultName&&(s[s.resultName]=l.v,s.resultName=void 0),s.sent=l.v,s.next=l.n;try{return u.call(this,s)}finally{l.p=s.prev,l.n=s.next}}}return(Ge.exports=Qu=function(){return{wrap:function(c,l,f,p){return e.w(o(c),l,f,p&&T$(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(c,l){return new C$(c,l)},AsyncIterator:_$,async:function(c,l,f,p,v){return(n(l)?I$:k$)(o(c),l,f,p,v)},keys:P$,values:xq}},Ge.exports.__esModule=!0,Ge.exports.default=Ge.exports)()}Ge.exports=Qu,Ge.exports.__esModule=!0,Ge.exports.default=Ge.exports});var ce=i((pV,Sq)=>{var _a=wq()();Sq.exports=_a;try{regeneratorRuntime=_a}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=_a:Function("r","regeneratorRuntime = r")(_a)}});var Xu=i((Ra,Tq)=>{"use strict";Object.defineProperty(Ra,"__esModule",{value:!0});var Pa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Eq=function(){function e(r,t){var n=[],a=!0,o=!1,u=void 0;try{for(var s=r[Symbol.iterator](),c;!(a=(c=s.next()).done)&&(n.push(c.value),!(t&&n.length===t));a=!0);}catch(l){o=!0,u=l}finally{try{!a&&s.return&&s.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Ra.default=R$;function R$(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(a){return a.type==="tag"||a.type==="script"||a.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var a=this.attribs,o=Object.keys(a),u=o.reduce(function(s,c,l){return s[l]={name:c,value:a[c]},s},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var a=[];return or(this.childTags,function(o){(o.name===n||n==="*")&&a.push(o)}),a}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var a=n.trim().replace(/\s+/g," ").split(" "),o=[];return or([this],function(u){var s=u.attribs.class;s&&a.every(function(c){return s.indexOf(c)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var a=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=A$(n),u=o.shift(),s=o.length;return u(this).filter(function(c){for(var l=0;l<s;){if(c=o[l](c,a),!c)return!1;l+=1}return!0})}),t.contains||(t.contains=function(n){var a=!1;return or([this],function(o,u){o===n&&(a=!0,u())}),a}),!0}function A$(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,a=r.split(":"),o=Eq(a,2),u=o[0],s=o[1],c=null,l=null;if(function(){switch(!0){case/>/.test(u):l=function(w){return function(E){return E(w.parent)&&w.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");c=function(w){var E=w.attribs.class;return E&&h.every(function(S){return E.indexOf(S)>-1})},l=function(w,E){return n?w.getElementsByClassName(h.join(" ")):typeof w=="function"?w(c):an(w,E,c)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),x=Eq(m,2),y=x[0],g=x[1];c=function(w){var E=Object.keys(w.attribs).indexOf(y)>-1;return!!(E&&(!g||w.attribs[y]===g))},l=function(w,E){if(n){var S=function(){var C=[];return or([w],function(L){c(L)&&C.push(L)}),{v:C}}();if((typeof S>"u"?"undefined":Pa(S))==="object")return S.v}return typeof w=="function"?w(c):an(w,E,c)};break;case/^#/.test(u):var O=u.substr(1);c=function(w){return w.attribs.id===O},l=function(w,E){if(n){var S=function(){var C=[];return or([w],function(L,Se){c(L)&&(C.push(L),Se())}),{v:C}}();if((typeof S>"u"?"undefined":Pa(S))==="object")return S.v}return typeof w=="function"?w(c):an(w,E,c)};break;case/\*/.test(u):c=function(w){return!0},l=function(w,E){if(n){var S=function(){var C=[];return or([w],function(L){return C.push(L)}),{v:C}}();if((typeof S>"u"?"undefined":Pa(S))==="object")return S.v}return typeof w=="function"?w(c):an(w,E,c)};break;default:c=function(w){return w.name===u},l=function(w,E){if(n){var S=function(){var C=[];return or([w],function(L){c(L)&&C.push(L)}),{v:C}}();if((typeof S>"u"?"undefined":Pa(S))==="object")return S.v}return typeof w=="function"?w(c):an(w,E,c)}}}(),!s)return l;var f=s.match(/-(child|type)\((\d+)\)$/),p=f[1],v=parseInt(f[2],10)-1,d=function(m){if(m){var x=m.parent.childTags;p==="type"&&(x=x.filter(c));var y=x.findIndex(function(g){return g===m});if(y===v)return!0}return!1};return function(m){var x=l(m);return n?x.reduce(function(y,g){return d(g)&&y.push(g),y},[]):d(x)&&x}})}function or(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&or(t.childTags,r)})}function an(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}Tq.exports=Ra.default});var Na=i(Aa=>{"use strict";Object.defineProperty(Aa,"__esModule",{value:!0});Aa.convertNodeList=N$;Aa.escapeValue=M$;function N$(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function M$(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var Mq=i((Ma,Nq)=>{"use strict";Object.defineProperty(Ma,"__esModule",{value:!0});Ma.default=j$;var Iq=Na(),Cq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function j$(e,r){var t=r.root,n=t===void 0?document:t,a=r.skip,o=a===void 0?null:a,u=r.priority,s=u===void 0?["id","class","href","src"]:u,c=r.ignore,l=c===void 0?{}:c,f=[],p=e,v=f.length,d=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(y){return typeof y!="function"?function(g){return g===y}:y}),m=function(g){return o&&h.some(function(O){return O(g)})};for(Object.keys(l).forEach(function(y){y==="class"&&(d=!0);var g=l[y];typeof g!="function"&&(typeof g=="number"&&(g=g.toString()),typeof g=="string"&&(g=new RegExp((0,Iq.escapeValue)(g).replace(/\\/g,"\\\\"))),typeof g=="boolean"&&(g=g?/(?:)/:/.^/),l[y]=function(O,k){return g.test(k)})}),d&&function(){var y=l.attribute;l.attribute=function(g,O,k){return l.class(O)||y&&y(g,O,k)}}();p!==n;){if(m(p)!==!0){if(Oq(s,p,l,f,n)||kq(p,l,f,n))break;Oq(s,p,l,f),f.length===v&&kq(p,l,f),f.length===v&&L$(s,p,l,f)}p=p.parentNode,v=f.length}if(p===n){var x=Rq(s,p,l);f.unshift(x)}return f.join(" ")}function Oq(e,r,t,n){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=_q(e,r,t);if(o){var u=a.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function _q(e,r,t){for(var n=r.attributes,a=Object.keys(n).sort(function(m,x){var y=e.indexOf(n[m].name),g=e.indexOf(n[x].name);return g===-1?y===-1?0:-1:y-g}),o=0,u=a.length;o<u;o++){var s=a[o],c=n[s],l=c.name,f=(0,Iq.escapeValue)(c.value),p=t[l]||t.attribute,v=Cq[l]||Cq.attribute;if(!Aq(p,l,f,v)){var d="["+l+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(l==="id"&&(d="#"+f),l==="class")){var h=f.trim().replace(/\s+/g,".");d="."+h}return d}}return null}function kq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,a=Pq(e,r);if(a){var o=n.getElementsByTagName(a);if(o.length===1)return t.unshift(a),!0}return!1}function Pq(e,r){var t=e.tagName.toLowerCase();return Aq(r.tag,null,t)?null:t}function L$(e,r,t,n){for(var a=r.parentNode,o=a.childTags||a.children,u=0,s=o.length;u<s;u++){var c=o[u];if(c===r){var l=Rq(e,c,t);if(!l)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,c,t,l);var f="> "+l+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function Rq(e,r,t){var n=_q(e,r,t);return n||(n=Pq(r,t)),n}function Aq(e,r,t,n){if(!t)return!0;var a=e||n;return a?a(r,t,n):!1}Nq.exports=Ma.default});var Zu=i((La,jq)=>{"use strict";Object.defineProperty(La,"__esModule",{value:!0});La.default=G$;var $$=Xu(),F$=B$($$),D$=Na();function B$(e){return e&&e.__esModule?e:{default:e}}function G$(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,D$.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,F$.default)(r[0],t),a=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(a.length<2)return ja("",e,"",r);for(var o=[a.pop()];a.length>1;){var u=a.pop(),s=a.join(" "),c=o.join(" "),l=s+" "+c,f=document.querySelectorAll(l);f.length!==r.length&&o.unshift(ja(s,u,c,r))}return o.unshift(a[0]),a=o,a[0]=ja("",a[0],a.slice(1).join(" "),r),a[a.length-1]=ja(a.slice(0,-1).join(" "),a[a.length-1],"",r),n&&delete global.document,a.join(" ").replace(/>/g,"> ").trim()}function ja(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var a=r.replace(/=.*$/,"]"),o=""+e+a+t,u=document.querySelectorAll(o);if(ut(u,n))r=a;else for(var s=document.querySelectorAll(""+e+a),c=function(){var k=s[l];if(n.some(function(E){return k.contains(E)})){var w=k.tagName.toLowerCase();return o=""+e+w+t,u=document.querySelectorAll(o),ut(u,n)&&(r=w),"break"}},l=0,f=s.length;l<f;l++){var o,u,p=c();if(p==="break")break}}if(/>/.test(r)){var v=r.replace(/>/,""),o=""+e+v+t,u=document.querySelectorAll(o);ut(u,n)&&(r=v)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);ut(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(O){return"."+O}).sort(function(O,k){return O.length-k.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);ut(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var x=document.querySelectorAll(""+e+r),y=function(){var k=x[l];if(n.some(function(E){return k.contains(E)})){var w=k.tagName.toLowerCase();return o=""+e+w+t,u=document.querySelectorAll(o),ut(u,n)&&(r=w),"break"}},l=0,f=x.length;l<f;l++){var o,u,g=y();if(g==="break")break}}return r}function ut(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var a=0;a<t;a++)if(e[a]===n)return!0;return!1})}jq.exports=La.default});var es=i($a=>{"use strict";Object.defineProperty($a,"__esModule",{value:!0});$a.getCommonAncestor=U$;$a.getCommonProperties=H$;function U$(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,a=[];e.forEach(function(p,v){for(var d=[];p!==n;)p=p.parentNode,d.unshift(p);a[v]=d}),a.sort(function(p,v){return p.length-v.length});for(var o=a.shift(),u=null,s=function(){var v=o[c],d=a.some(function(h){return!h.some(function(m){return m===v})});if(d)return"break";u=v},c=0,l=o.length;c<l;c++){var f=s();if(f==="break")break}return u}function H$(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,a=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(c){return u.some(function(l){return l===c})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(a!==void 0&&function(){var c=t.attributes,l=Object.keys(c).reduce(function(v,d){var h=c[d],m=h.name;return h&&m!=="class"&&(v[m]=h.value),v},{}),f=Object.keys(l),p=Object.keys(a);f.length?p.length?(a=p.reduce(function(v,d){var h=a[d];return h===l[d]&&(v[d]=h),v},{}),Object.keys(a).length?r.attributes=a:delete r.attributes):r.attributes=l:delete r.attributes}(),o!==void 0){var s=t.tagName.toLowerCase();o?s!==o&&delete r.tag:r.tag=s}}),r}});var Gq=i(on=>{"use strict";Object.defineProperty(on,"__esModule",{value:!0});var W$=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};on.getSingleSelector=ts;on.getMultiSelector=Bq;on.default=Q$;var K$=Xu(),$q=rs(K$),z$=Mq(),V$=rs(z$),Y$=Zu(),Fq=rs(Y$),Lq=Na(),Dq=es();function rs(e){return e&&e.__esModule?e:{default:e}}function ts(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":W$(e))+'")');var t=(0,$q.default)(e,r),n=(0,V$.default)(e,r),a=(0,Fq.default)(n,e,r);return t&&delete global.document,a}function Bq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,Lq.convertNodeList)(e)),e.some(function(l){return l.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,$q.default)(e[0],r),n=(0,Dq.getCommonAncestor)(e,r),a=ts(n,r),o=J$(e),u=o[0],s=(0,Fq.default)(a+" "+u,e,r),c=(0,Lq.convertNodeList)(document.querySelectorAll(s));return e.every(function(l){return c.some(function(f){return f===l})})?(t&&delete global.document,s):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function J$(e){var r=(0,Dq.getCommonProperties)(e),t=r.classes,n=r.attributes,a=r.tag,o=[];if(a&&o.push(a),t){var u=t.map(function(c){return"."+c}).join("");o.push(u)}if(n){var s=Object.keys(n).reduce(function(c,l){return c.push("["+l+'="'+n[l]+'"]'),c},[]).join("");o.push(s)}return o.length,[o.join("")]}function Q$(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?Bq(e,r):ts(e,r)}});var Wq=i(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.default=ie.common=ie.optimize=ie.getMultiSelector=ie.getSingleSelector=ie.select=void 0;var ns=Gq();Object.defineProperty(ie,"getSingleSelector",{enumerable:!0,get:function(){return ns.getSingleSelector}});Object.defineProperty(ie,"getMultiSelector",{enumerable:!0,get:function(){return ns.getMultiSelector}});var Uq=Hq(ns),X$=Zu(),Z$=Hq(X$),eF=es(),rF=tF(eF);function tF(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Hq(e){return e&&e.__esModule?e:{default:e}}ie.select=Uq.default;ie.optimize=Z$.default;ie.common=rF;ie.default=Uq.default});var Kq=i(()=>{"use strict";var pF=q(),vF=Ne();pF({target:"Array",stat:!0},{isArray:vF})});var Vq=i((IV,zq)=>{"use strict";Kq();var dF=V();zq.exports=dF.Array.isArray});var Jq=i((_V,Yq)=>{"use strict";var mF=Vq();Yq.exports=mF});var Xq=i((PV,Qq)=>{"use strict";var hF=Jq();Qq.exports=hF});var ex=i((RV,Zq)=>{"use strict";var yF=Xq();Zq.exports=yF});var tx=i((AV,rx)=>{"use strict";rx.exports=ex()});var ix=i(()=>{"use strict";var bF=q(),gF=te(),qF=ve(),xF=Wr(),wF=Pt(),SF=_(),EF=SF(function(){return[].push.call({length:4294967296},1)!==4294967297}),TF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},CF=EF||!TF();bF({target:"Array",proto:!0,arity:1,forced:CF},{push:function(r){var t=gF(this),n=qF(t),a=arguments.length;wF(n+a);for(var o=0;o<a;o++)t[n]=arguments[o],n++;return xF(t,n),n}})});var ux=i((LV,ox)=>{"use strict";ix();var OF=ue();ox.exports=OF("Array","push")});var cx=i(($V,sx)=>{"use strict";var kF=U(),IF=ux(),as=Array.prototype;sx.exports=function(e){var r=e.push;return e===as||kF(as,e)&&r===as.push?IF:r}});var fx=i((FV,lx)=>{"use strict";var _F=cx();lx.exports=_F});var vx=i((DV,px)=>{"use strict";var PF=fx();px.exports=PF});var mx=i((BV,dx)=>{"use strict";var RF=vx();dx.exports=RF});var is=i((GV,hx)=>{"use strict";hx.exports=mx()});var Ox=i(()=>{"use strict";var AF=q(),NF=Nt().map,MF=St(),jF=MF("map");AF({target:"Array",proto:!0,forced:!jF},{map:function(r){return NF(this,r,arguments.length>1?arguments[1]:void 0)}})});var Ix=i((h9,kx)=>{"use strict";Ox();var LF=ue();kx.exports=LF("Array","map")});var Px=i((y9,_x)=>{"use strict";var $F=U(),FF=Ix(),us=Array.prototype;_x.exports=function(e){var r=e.map;return e===us||$F(us,e)&&r===us.map?FF:r}});var Ax=i((b9,Rx)=>{"use strict";var DF=Px();Rx.exports=DF});var Mx=i((g9,Nx)=>{"use strict";var BF=Ax();Nx.exports=BF});var Lx=i((q9,jx)=>{"use strict";var GF=Mx();jx.exports=GF});var Fx=i((x9,$x)=>{"use strict";$x.exports=Lx()});var Bx=i((w9,Dx)=>{Dx.exports=Fx()});var Ux=i((S9,Gx)=>{Gx.exports=ot()});var Vx=i((E9,zx)=>{"use strict";var UF=D(),HF=te(),WF=Tn(),KF=ve(),Hx=TypeError,Wx="Reduce of empty array with no initial value",Kx=function(e){return function(r,t,n,a){var o=HF(r),u=WF(o),s=KF(o);if(UF(t),s===0&&n<2)throw new Hx(Wx);var c=e?s-1:0,l=e?-1:1;if(n<2)for(;;){if(c in u){a=u[c],c+=l;break}if(c+=l,e?c<0:s<=c)throw new Hx(Wx)}for(;e?c>=0:s>c;c+=l)c in u&&(a=t(a,u[c],c,o));return a}};zx.exports={left:Kx(!1),right:Kx(!0)}});var ss=i((T9,Yx)=>{"use strict";var zF=_();Yx.exports=function(e,r){var t=[][e];return!!t&&zF(function(){t.call(null,r||function(){return 1},1)})}});var Qx=i(()=>{"use strict";var VF=q(),YF=Vx().left,JF=ss(),Jx=$r(),QF=Dt(),XF=!QF&&Jx>79&&Jx<83,ZF=XF||!JF("reduce");VF({target:"Array",proto:!0,forced:ZF},{reduce:function(r){var t=arguments.length;return YF(this,r,t,t>1?arguments[1]:void 0)}})});var Zx=i((k9,Xx)=>{"use strict";Qx();var eD=ue();Xx.exports=eD("Array","reduce")});var rw=i((I9,ew)=>{"use strict";var rD=U(),tD=Zx(),cs=Array.prototype;ew.exports=function(e){var r=e.reduce;return e===cs||rD(cs,e)&&r===cs.reduce?tD:r}});var nw=i((_9,tw)=>{"use strict";var nD=rw();tw.exports=nD});var iw=i((P9,aw)=>{"use strict";var aD=nw();aw.exports=aD});var uw=i((R9,ow)=>{"use strict";var iD=iw();ow.exports=iD});var cw=i((A9,sw)=>{"use strict";sw.exports=uw()});var fw=i((N9,lw)=>{lw.exports=cw()});var dw=i((M9,vw)=>{"use strict";var oD=Ne(),uD=ve(),sD=Pt(),cD=Y(),lD=Hr(),pw=function(e,r,t,n,a,o,u,s){for(var c=a,l=0,f=u?cD(u,s):!1,p,v;l<n;)l in t&&(p=f?f(t[l],l,r):t[l],o>0&&oD(p)?(v=uD(p),c=pw(e,r,p,v,c,o-1)-1):(sD(c+1),lD(e,c,p)),c++),l++;return c};vw.exports=pw});var mw=i(()=>{"use strict";var fD=q(),pD=dw(),vD=D(),dD=te(),mD=ve(),hD=Kn();fD({target:"Array",proto:!0},{flatMap:function(r){var t=dD(this),n=mD(t),a;return vD(r),a=hD(t,0),pD(a,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),a}})});var hw=i(()=>{"use strict";var yD=Lo();yD("flatMap")});var bw=i((D9,yw)=>{"use strict";mw();hw();var bD=ue();yw.exports=bD("Array","flatMap")});var qw=i((B9,gw)=>{"use strict";var gD=U(),qD=bw(),ls=Array.prototype;gw.exports=function(e){var r=e.flatMap;return e===ls||gD(ls,e)&&r===ls.flatMap?qD:r}});var ww=i((G9,xw)=>{"use strict";var xD=qw();xw.exports=xD});var Ew=i((U9,Sw)=>{"use strict";var wD=ww();Sw.exports=wD});var Cw=i((H9,Tw)=>{"use strict";var SD=Ew();Tw.exports=SD});var kw=i((W9,Ow)=>{"use strict";Ow.exports=Cw()});var _w=i((K9,Iw)=>{Iw.exports=kw()});var Rw=i((z9,Pw)=>{"use strict";uo();var ED=ue();Pw.exports=ED("Array","concat")});var Nw=i((V9,Aw)=>{"use strict";var TD=U(),CD=Rw(),fs=Array.prototype;Aw.exports=function(e){var r=e.concat;return e===fs||TD(fs,e)&&r===fs.concat?CD:r}});var jw=i((Y9,Mw)=>{"use strict";var OD=Nw();Mw.exports=OD});var $w=i((J9,Lw)=>{"use strict";var kD=jw();Lw.exports=kD});var Dw=i((Q9,Fw)=>{"use strict";var ID=$w();Fw.exports=ID});var Gw=i((X9,Bw)=>{"use strict";Bw.exports=Dw()});var ps=i((Z9,Uw)=>{Uw.exports=Gw()});var Kw=i(()=>{});var Vw=i((w7,zw)=>{"use strict";Kw();jo();var FD=Vr();zw.exports=FD.f("toPrimitive")});var Jw=i((S7,Yw)=>{"use strict";var DD=Vw();Yw.exports=DD});var Xw=i((E7,Qw)=>{"use strict";var BD=Jw();Qw.exports=BD});var eS=i((T7,Zw)=>{"use strict";var GD=Xw();Zw.exports=GD});var tS=i((C7,rS)=>{"use strict";rS.exports=eS()});var fS=i((z7,lS)=>{"use strict";var HD=$(),WD=Te(),KD=R(),zD=KD("match");lS.exports=function(e){var r;return HD(e)&&((r=e[zD])!==void 0?!!r:WD(e)==="RegExp")}});var vS=i((V7,pS)=>{"use strict";var VD=fS(),YD=TypeError;pS.exports=function(e){if(VD(e))throw new YD("The method doesn't accept regular expressions");return e}});var mS=i((Y7,dS)=>{"use strict";var JD=R(),QD=JD("match");dS.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[QD]=!1,"/./"[e](r)}catch{}}return!1}});var bS=i(()=>{"use strict";var XD=q(),ZD=mt(),e3=yt().f,r3=Pi(),hS=Ze(),t3=vS(),n3=pr(),a3=mS(),i3=Z(),o3=ZD("".slice),u3=Math.min,yS=a3("startsWith"),s3=!i3&&!yS&&!!function(){var e=e3(String.prototype,"startsWith");return e&&!e.writable}();XD({target:"String",proto:!0,forced:!s3&&!yS},{startsWith:function(r){var t=hS(n3(this));t3(r);var n=r3(u3(arguments.length>1?arguments[1]:void 0,t.length)),a=hS(r);return o3(t,n,n+a.length)===a}})});var qS=i((X7,gS)=>{"use strict";bS();var c3=ue();gS.exports=c3("String","startsWith")});var wS=i((Z7,xS)=>{"use strict";var l3=U(),f3=qS(),hs=String.prototype;xS.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===hs||l3(hs,e)&&r===hs.startsWith?f3:r}});var ES=i((eY,SS)=>{"use strict";var p3=wS();SS.exports=p3});var CS=i((rY,TS)=>{"use strict";var v3=ES();TS.exports=v3});var kS=i((tY,OS)=>{"use strict";var d3=CS();OS.exports=d3});var _S=i((nY,IS)=>{"use strict";IS.exports=kS()});var RS=i((aY,PS)=>{PS.exports=_S()});var AS=i(()=>{"use strict";var m3=q(),h3=Nt().filter,y3=St(),b3=y3("filter");m3({target:"Array",proto:!0,forced:!b3},{filter:function(r){return h3(this,r,arguments.length>1?arguments[1]:void 0)}})});var MS=i((uY,NS)=>{"use strict";AS();var g3=ue();NS.exports=g3("Array","filter")});var LS=i((sY,jS)=>{"use strict";var q3=U(),x3=MS(),ys=Array.prototype;jS.exports=function(e){var r=e.filter;return e===ys||q3(ys,e)&&r===ys.filter?x3:r}});var FS=i((cY,$S)=>{"use strict";var w3=LS();$S.exports=w3});var BS=i((lY,DS)=>{"use strict";var S3=FS();DS.exports=S3});var US=i((fY,GS)=>{"use strict";var E3=BS();GS.exports=E3});var WS=i((pY,HS)=>{"use strict";HS.exports=US()});var zS=i((vY,KS)=>{KS.exports=WS()});var cE=i(()=>{"use strict";var R3=q(),A3=W(),gs=jr(),N3=Du(),nE=Qo(),M3=X(),aE=$(),j3=rr(),oE=_(),qs=A3("Reflect","construct"),L3=Object.prototype,$3=[].push,uE=oE(function(){function e(){}return!(qs(function(){},[],e)instanceof e)}),sE=!oE(function(){qs(function(){})}),iE=uE||sE;R3({target:"Reflect",stat:!0,forced:iE,sham:iE},{construct:function(r,t){nE(r),M3(t);var n=arguments.length<3?r:nE(arguments[2]);if(sE&&!uE)return qs(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var a=[null];return gs($3,a,t),new(gs(N3,r,a))}var o=n.prototype,u=j3(aE(o)?o:L3),s=gs(r,u,t);return aE(s)?s:u}})});var fE=i((zY,lE)=>{"use strict";cE();var F3=V();lE.exports=F3.Reflect.construct});var vE=i((VY,pE)=>{"use strict";var D3=fE();pE.exports=D3});var mE=i((YY,dE)=>{"use strict";var B3=vE();dE.exports=B3});var yE=i((JY,hE)=>{"use strict";var G3=mE();hE.exports=G3});var Wa=i((QY,bE)=>{"use strict";bE.exports=yE()});var qE=i((XY,gE)=>{gE.exports=Wa()});var IE=i((uJ,kE)=>{"use strict";var U3=_();kE.exports=U3(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var RE=i((sJ,PE)=>{"use strict";var H3=_(),W3=$(),K3=Te(),_E=IE(),Ka=Object.isExtensible,z3=H3(function(){Ka(1)});PE.exports=z3||_E?function(r){return!W3(r)||_E&&K3(r)==="ArrayBuffer"?!1:Ka?Ka(r):!0}:Ka});var NE=i((cJ,AE)=>{"use strict";var V3=_();AE.exports=!V3(function(){return Object.isExtensible(Object.preventExtensions({}))})});var Os=i((lJ,LE)=>{"use strict";var Y3=q(),J3=N(),Q3=zr(),X3=$(),Es=K(),Z3=ne().f,ME=At(),e4=so(),Ts=RE(),r4=Dr(),t4=NE(),jE=!1,We=r4("meta"),n4=0,Cs=function(e){Z3(e,We,{value:{objectID:"O"+n4++,weakData:{}}})},a4=function(e,r){if(!X3(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!Es(e,We)){if(!Ts(e))return"F";if(!r)return"E";Cs(e)}return e[We].objectID},i4=function(e,r){if(!Es(e,We)){if(!Ts(e))return!0;if(!r)return!1;Cs(e)}return e[We].weakData},o4=function(e){return t4&&jE&&Ts(e)&&!Es(e,We)&&Cs(e),e},u4=function(){s4.enable=function(){},jE=!0;var e=ME.f,r=J3([].splice),t={};t[We]=1,e(t).length&&(ME.f=function(n){for(var a=e(n),o=0,u=a.length;o<u;o++)if(a[o]===We){r(a,o,1);break}return a},Y3({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:e4.f}))},s4=LE.exports={enable:u4,fastKey:a4,getWeakData:i4,onFreeze:o4};Q3[We]=!0});var DE=i((fJ,FE)=>{"use strict";var c4=q(),l4=P(),f4=Os(),p4=_(),v4=Ce(),d4=me(),m4=da(),h4=M(),y4=$(),b4=fr(),g4=Le(),q4=ne().f,x4=Nt().forEach,w4=H(),$E=er(),S4=$E.set,E4=$E.getterFor;FE.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,a=e.indexOf("Weak")!==-1,o=n?"set":"add",u=l4[e],s=u&&u.prototype,c={},l;if(!w4||!h4(u)||!(a||s.forEach&&!p4(function(){new u().entries().next()})))l=t.getConstructor(r,e,n,o),f4.enable();else{l=r(function(v,d){S4(m4(v,f),{type:e,collection:new u}),b4(d)||d4(d,v[o],{that:v,AS_ENTRIES:n})});var f=l.prototype,p=E4(e);x4(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(v){var d=v==="add"||v==="set";v in s&&!(a&&v==="clear")&&v4(f,v,function(h,m){var x=p(this).collection;if(!d&&a&&!y4(h))return v==="get"?void 0:!1;var y=x[v](h===0?0:h,m);return d?this:y})}),a||q4(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return g4(l,e,!1,!0),c[e]=l,c4({global:!0,forced:!0},c),a||t.setStrong(l,e,n),l}});var GE=i((pJ,BE)=>{"use strict";var T4=Me();BE.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:T4(e,n,r[n],t);return e}});var YE=i((vJ,VE)=>{"use strict";var UE=rr(),C4=Vn(),HE=GE(),O4=Y(),k4=da(),I4=fr(),_4=me(),P4=Gn(),za=Un(),R4=Jo(),pn=H(),WE=Os().fastKey,zE=er(),KE=zE.set,ks=zE.getterFor;VE.exports={getConstructor:function(e,r,t,n){var a=e(function(l,f){k4(l,o),KE(l,{type:r,index:UE(null),first:null,last:null,size:0}),pn||(l.size=0),I4(f)||_4(f,l[n],{that:l,AS_ENTRIES:t})}),o=a.prototype,u=ks(r),s=function(l,f,p){var v=u(l),d=c(l,f),h,m;return d?d.value=p:(v.last=d={index:m=WE(f,!0),key:f,value:p,previous:h=v.last,next:null,removed:!1},v.first||(v.first=d),h&&(h.next=d),pn?v.size++:l.size++,m!=="F"&&(v.index[m]=d)),l},c=function(l,f){var p=u(l),v=WE(f),d;if(v!=="F")return p.index[v];for(d=p.first;d;d=d.next)if(d.key===f)return d};return HE(o,{clear:function(){for(var f=this,p=u(f),v=p.first;v;)v.removed=!0,v.previous&&(v.previous=v.previous.next=null),v=v.next;p.first=p.last=null,p.index=UE(null),pn?p.size=0:f.size=0},delete:function(l){var f=this,p=u(f),v=c(f,l);if(v){var d=v.next,h=v.previous;delete p.index[v.index],v.removed=!0,h&&(h.next=d),d&&(d.previous=h),p.first===v&&(p.first=d),p.last===v&&(p.last=h),pn?p.size--:f.size--}return!!v},forEach:function(f){for(var p=u(this),v=O4(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:p.first;)for(v(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!c(this,f)}}),HE(o,t?{get:function(f){var p=c(this,f);return p&&p.value},set:function(f,p){return s(this,f===0?0:f,p)}}:{add:function(f){return s(this,f=f===0?0:f,f)}}),pn&&C4(o,"size",{configurable:!0,get:function(){return u(this).size}}),a},setStrong:function(e,r,t){var n=r+" Iterator",a=ks(r),o=ks(n);P4(e,r,function(u,s){KE(this,{type:n,target:u,state:a(u),kind:s,last:null})},function(){for(var u=o(this),s=u.kind,c=u.last;c&&c.removed;)c=c.previous;return!u.target||!(u.last=c=c?c.next:u.state.first)?(u.target=null,za(void 0,!0)):za(s==="keys"?c.key:s==="values"?c.value:[c.key,c.value],!1)},t?"entries":"values",!t,!0),R4(r)}}});var JE=i(()=>{"use strict";var A4=DE(),N4=YE();A4("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},N4)});var QE=i(()=>{"use strict";JE()});var ZE=i((bJ,XE)=>{"use strict";XE.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,a){return t[e](n,a)}}});var oe=i((gJ,rT)=>{"use strict";var M4=W(),Va=ZE(),eT=M4("Map");rT.exports={Map:eT,set:Va("set",2),get:Va("get",1),has:Va("has",1),remove:Va("delete",1),proto:eT.prototype}});var Is=i(()=>{"use strict";var j4=q(),L4=N(),$4=D(),F4=pr(),D4=me(),Ya=oe(),tT=Z(),B4=_(),nT=Ya.Map,G4=Ya.has,U4=Ya.get,H4=Ya.set,W4=L4([].push),K4=tT||B4(function(){return nT.groupBy("ab",function(e){return e}).get("a").length!==1});j4({target:"Map",stat:!0,forced:tT||K4},{groupBy:function(r,t){F4(r),$4(t);var n=new nT,a=0;return D4(r,function(o){var u=t(o,a++);G4(n,u)?W4(U4(n,u),o):H4(n,u,[o])}),n}})});var J=i((wJ,aT)=>{"use strict";var z4=Xe(),V4=TypeError;aT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new V4(z4(e)+" is not a map")}});var Ps=i(()=>{"use strict";var Y4=q(),J4=J(),_s=oe(),Q4=Z(),X4=_s.get,Z4=_s.has,eB=_s.set;Y4({target:"Map",proto:!0,real:!0,forced:Q4},{getOrInsert:function(r,t){return Z4(J4(this),r)?X4(this,r):(eB(this,r,t),t)}})});var As=i(()=>{"use strict";var rB=q(),tB=D(),nB=J(),Rs=oe(),aB=Z(),iB=Rs.get,oB=Rs.has,uB=Rs.set;rB({target:"Map",proto:!0,real:!0,forced:aB},{getOrInsertComputed:function(r,t){if(nB(this),tB(t),oB(this,r))return iB(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return uB(this,r,n),n}})});var oT=i((OJ,iT)=>{"use strict";wr();QE();Is();Ps();As();Rt();br();var sB=V();iT.exports=sB.Map});var sT=i((kJ,uT)=>{"use strict";var cB=oT();Sr();uT.exports=cB});var Ns=i(()=>{"use strict";Ps()});var Ms=i(()=>{"use strict";As()});var cT=i(()=>{"use strict";Is()});var fT=i((MJ,lT)=>{"use strict";var lB=sT();Ns();Ms();cT();lT.exports=lB});var vT=i((jJ,pT)=>{"use strict";var fB=Y(),pB=X(),vB=te(),dB=me();pT.exports=function(e,r,t){return function(a){var o=vB(a),u=arguments.length,s=u>1?arguments[1]:void 0,c=s!==void 0,l=c?fB(s,u>2?arguments[2]:void 0):void 0,f=new e,p=0;return dB(o,function(v){var d=c?l(v,p++):v;t?r(f,pB(d)[0],d[1]):r(f,d)}),f}}});var mT=i(()=>{"use strict";var mB=q(),dT=oe(),hB=vT();mB({target:"Map",stat:!0,forced:!0},{from:hB(dT.Map,dT.set,!0)})});var yT=i((FJ,hT)=>{"use strict";var yB=X();hT.exports=function(e,r,t){return function(){for(var a=new e,o=arguments.length,u=0;u<o;u++){var s=arguments[u];t?r(a,yB(s)[0],s[1]):r(a,s)}return a}}});var gT=i(()=>{"use strict";var bB=q(),bT=oe(),gB=yT();bB({target:"Map",stat:!0,forced:!0},{of:gB(bT.Map,bT.set,!0)})});var xT=i(()=>{"use strict";var qB=q(),xB=G(),wB=me(),SB=M(),qT=D(),EB=oe().Map;qB({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=SB(this)?this:EB,a=new n;qT(t);var o=qT(a.set);return wB(r,function(u){xB(o,a,t(u),u)}),a}})});var wT=i(()=>{"use strict";var TB=q(),CB=J(),OB=oe().remove;TB({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=CB(this),t=!0,n,a=0,o=arguments.length;a<o;a++)n=OB(r,arguments[a]),t=t&&n;return!!t}})});var ET=i(()=>{"use strict";var kB=q(),IB=J(),js=oe(),_B=js.get,PB=js.has,ST=js.set;kB({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=IB(this),a,o;return PB(n,r)?(a=_B(n,r),"update"in t&&(a=t.update(a,r,n),ST(n,r,a)),a):(o=t.insert(r,n),ST(n,r,o),o)}})});var CT=i((VJ,TT)=>{"use strict";var RB=G();TT.exports=function(e,r,t){for(var n=t?e:e.iterator,a=e.next,o,u;!(o=RB(a,n)).done;)if(u=r(o.value),u!==void 0)return u}});var qe=i((YJ,OT)=>{"use strict";var AB=CT();OT.exports=function(e,r,t){return t?AB(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var kT=i(()=>{"use strict";var NB=q(),MB=Y(),jB=J(),LB=qe();NB({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=jB(this),n=MB(r,arguments.length>1?arguments[1]:void 0);return LB(t,function(a,o){if(!n(a,o,t))return!1},!0)!==!1}})});var _T=i(()=>{"use strict";var $B=q(),FB=Y(),DB=J(),IT=oe(),BB=qe(),GB=IT.Map,UB=IT.set;$B({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=DB(this),n=FB(r,arguments.length>1?arguments[1]:void 0),a=new GB;return BB(t,function(o,u){n(o,u,t)&&UB(a,u,o)}),a}})});var PT=i(()=>{"use strict";var HB=q(),WB=Y(),KB=J(),zB=qe();HB({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=KB(this),n=WB(r,arguments.length>1?arguments[1]:void 0),a=zB(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return a&&a.value}})});var RT=i(()=>{"use strict";var VB=q(),YB=Y(),JB=J(),QB=qe();VB({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=JB(this),n=YB(r,arguments.length>1?arguments[1]:void 0),a=QB(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return a&&a.key}})});var NT=i((aQ,AT)=>{"use strict";AT.exports=function(e,r){return e===r||e!==e&&r!==r}});var MT=i(()=>{"use strict";var XB=q(),ZB=NT(),e5=J(),r5=qe();XB({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return r5(e5(this),function(t){if(ZB(t,r))return!0},!0)===!0}})});var jT=i(()=>{"use strict";var t5=q(),n5=J(),a5=qe();t5({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=a5(n5(this),function(n,a){if(n===r)return{key:a}},!0);return t&&t.key}})});var $T=i(()=>{"use strict";var i5=q(),o5=Y(),u5=J(),LT=oe(),s5=qe(),c5=LT.Map,l5=LT.set;i5({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=u5(this),n=o5(r,arguments.length>1?arguments[1]:void 0),a=new c5;return s5(t,function(o,u){l5(a,n(o,u,t),o)}),a}})});var DT=i(()=>{"use strict";var f5=q(),p5=Y(),v5=J(),FT=oe(),d5=qe(),m5=FT.Map,h5=FT.set;f5({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=v5(this),n=p5(r,arguments.length>1?arguments[1]:void 0),a=new m5;return d5(t,function(o,u){h5(a,u,n(o,u,t))}),a}})});var BT=i(()=>{"use strict";var y5=q(),b5=J(),g5=me(),q5=oe().set;y5({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=b5(this),n=arguments.length,a=0;a<n;)g5(arguments[a++],function(o,u){q5(t,o,u)},{AS_ENTRIES:!0});return t}})});var GT=i(()=>{"use strict";var x5=q(),w5=D(),S5=J(),E5=qe(),T5=TypeError;x5({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=S5(this),n=arguments.length<2,a=n?void 0:arguments[1];if(w5(r),E5(t,function(o,u){n?(n=!1,a=o):a=r(a,o,u,t)}),n)throw new T5("Reduce of empty map with no initial value");return a}})});var UT=i(()=>{"use strict";var C5=q(),O5=Y(),k5=J(),I5=qe();C5({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=k5(this),n=O5(r,arguments.length>1?arguments[1]:void 0);return I5(t,function(a,o){if(n(a,o,t))return!0},!0)===!0}})});var WT=i(()=>{"use strict";var _5=q(),HT=D(),P5=J(),Ls=oe(),R5=TypeError,A5=Ls.get,N5=Ls.has,M5=Ls.set;_5({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=P5(this),a=arguments.length;HT(t);var o=N5(n,r);if(!o&&a<3)throw new R5("Updating absent value");var u=o?A5(n,r):HT(a>2?arguments[2]:void 0)(r,n);return M5(n,r,t(u,r,n)),n}})});var Fs=i((xQ,KT)=>{"use strict";var Ja=G(),$s=D(),Qa=M(),j5=X(),L5=TypeError;KT.exports=function(r,t){var n=j5(this),a=$s(n.get),o=$s(n.has),u=$s(n.set),s=arguments.length>2?arguments[2]:void 0,c;if(!Qa(t)&&!Qa(s))throw new L5("At least one callback required");return Ja(o,n,r)?(c=Ja(a,n,r),Qa(t)&&(c=t(c),Ja(u,n,r,c))):Qa(s)&&(c=s(),Ja(u,n,r,c)),c}});var zT=i(()=>{"use strict";var $5=q(),F5=Fs();$5({target:"Map",proto:!0,real:!0,forced:!0},{upsert:F5})});var VT=i(()=>{"use strict";var D5=q(),B5=Fs();D5({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:B5})});var JT=i((CQ,YT)=>{"use strict";var G5=fT();mT();gT();xT();wT();ET();kT();_T();PT();RT();MT();Ns();Ms();jT();$T();DT();BT();GT();UT();WT();zT();VT();YT.exports=G5});var XT=i((OQ,QT)=>{"use strict";QT.exports=JT()});var e0=i(()=>{"use strict";var U5=q(),H5=mt(),W5=Bi().indexOf,K5=ss(),Ds=H5([].indexOf),ZT=!!Ds&&1/Ds([1],1,-0)<0,z5=ZT||!K5("indexOf");U5({target:"Array",proto:!0,forced:z5},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return ZT?Ds(this,r,t)||0:W5(this,r,t)}})});var t0=i((_Q,r0)=>{"use strict";e0();var V5=ue();r0.exports=V5("Array","indexOf")});var a0=i((PQ,n0)=>{"use strict";var Y5=U(),J5=t0(),Bs=Array.prototype;n0.exports=function(e){var r=e.indexOf;return e===Bs||Y5(Bs,e)&&r===Bs.indexOf?J5:r}});var o0=i((RQ,i0)=>{"use strict";var Q5=a0();i0.exports=Q5});var s0=i((AQ,u0)=>{"use strict";var X5=o0();u0.exports=X5});var l0=i((NQ,c0)=>{"use strict";var Z5=s0();c0.exports=Z5});var p0=i((MQ,f0)=>{"use strict";f0.exports=l0()});var I0=i(()=>{"use strict";var i6=q(),o6=te(),k0=Ln(),u6=_(),s6=u6(function(){k0(1)});i6({target:"Object",stat:!0,forced:s6},{keys:function(r){return k0(o6(r))}})});var P0=i((DX,_0)=>{"use strict";I0();var c6=V();_0.exports=c6.Object.keys});var A0=i((BX,R0)=>{"use strict";var l6=P0();R0.exports=l6});var M0=i((GX,N0)=>{"use strict";var f6=A0();N0.exports=f6});var L0=i((UX,j0)=>{"use strict";var p6=M0();j0.exports=p6});var F0=i((HX,$0)=>{"use strict";$0.exports=L0()});var B0=i((WX,D0)=>{D0.exports=F0()});var Vs=i((nZ,U0)=>{var zs={yellow:"#ffd400",red:"#ff6b6b",green:"#51cf66",blue:"#339af0",purple:"#9775fa",pink:"#f06595",orange:"#ff922b",teal:"#20c997"},g6=zs.yellow,q6=Object.keys(zs),x6=/^#[0-9a-fA-F]{6}$/;U0.exports={COLOR_PRESETS:zs,DEFAULT_COLOR:g6,PRESET_NAMES:q6,HEX_COLOR_REGEX:x6}});var Je="";function lc(e){Je=e.replace(/\/+$/,"")}async function lr(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function fc(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${Je}/comments?${t}`);return await lr(n,"Failed to fetch comments"),(await n.json()).data}async function ai({uri:e,document:r,quote:t,prefix:n,suffix:a,body:o,author:u,parent:s,color:c}){let l={quote:t,prefix:n,suffix:a,body:o,author:u,parent:s};c&&(l.color=c),r?l.document=r:l.uri=e;let f=await fetch(`${Je}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});return await lr(f,"Failed to create comment"),f.json()}async function ii(e,{body:r,color:t}){let n={};r!==void 0&&(n.body=r),t!==void 0&&(n.color=t);let a=await fetch(`${Je}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});return await lr(a,"Failed to update comment"),a.json()}async function pc(e,r){let t=await fetch(`${Je}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});return await lr(t,"Failed to update comment status"),t.json()}async function vc(e){let r=await fetch(`${Je}/comments/${e}`,{method:"DELETE"});await lr(r,"Failed to delete comment")}async function dc(e,r,t){let n=await fetch(`${Je}/comments/${e}/reactions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({emoji:r,author:t})});return await lr(n,"Failed to add reaction"),n.json()}async function mc(e,r,t){let n=await fetch(`${Je}/comments/${e}/reactions/${encodeURIComponent(r)}?author=${encodeURIComponent(t)}`,{method:"DELETE"});return await lr(n,"Failed to remove reaction"),n.json()}var iF=b(Kr(),1),oF=b(Wn(),1),uF=b(ua(),1),sF=b(sa(),1),cF=b(ca(),1);var Mu=b(ot(),1);function lb(e,r,t,n,a,o,u){try{var s=e[o](u),c=s.value}catch(l){return void t(l)}s.done?r(c):Mu.default.resolve(c).then(n,a)}function kr(e){return function(){var r=this,t=arguments;return new Mu.default(function(n,a){var o=e.apply(r,t);function u(c){lb(o,n,a,u,s,"next",c)}function s(c){lb(o,n,a,u,s,"throw",c)}u(void 0)})}}function zt(e,r){this.v=e,this.k=r}function ir(e){return new zt(e,0)}var ju=b(ot(),1),qb=b(Oe(),1),xb=b(Ea(),1);function Ie(e){return function(){return new Vt(e.apply(this,arguments))}}function Vt(e){var r,t;function n(o,u){try{var s=e[o](u),c=s.value,l=c instanceof zt;ju.default.resolve(l?c.v:c).then(function(f){if(l){var p=o==="return"?"return":"next";if(!c.k||f.done)return n(p,f);f=e[p](f).value}a(s.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){a("throw",f)}}function a(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new ju.default(function(s,c){var l={key:o,arg:u,resolve:s,reject:c,next:null};t?t=t.next=l:(r=t=l,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Vt.prototype[typeof qb.default=="function"&&xb.default||"@@asyncIterator"]=function(){return this},Vt.prototype.next=function(e){return this._invoke("next",e)},Vt.prototype.throw=function(e){return this._invoke("throw",e)},Vt.prototype.return=function(e){return this._invoke("return",e)};var lF=b(ce(),1),fF=b(Wq(),1);function le(e){var r,t=nF(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function nF(e){return"startContainer"in e}function ur(e){if(aF(e))return e;var r=e,t=le(r).createRange();return t.selectNodeContents(r),t}function aF(e){return"startContainer"in e}var nx=b(tx(),1);function ax(e){if((0,nx.default)(e))return e}var yx=b(Oe(),1),bx=b(Ho(),1),gx=b(is(),1);function qx(e,r){var t=e==null?null:typeof yx.default<"u"&&(0,bx.default)(e)||e["@@iterator"];if(t!=null){var n,a,o,u,s=[],c=!0,l=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&((0,gx.default)(s).call(s,n.value),s.length!==r);c=!0);}catch(f){l=!0,a=f}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(l)throw a}}return s}}var xx=b(Ni(),1),wx=b(oo(),1);function Fa(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function os(e,r){if(e){var t;if(typeof e=="string")return Fa(e,r);var n=(0,xx.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,wx.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Fa(e,r):void 0}}function Sx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ue(e,r){return ax(e)||qx(e,r)||os(e,r)||Sx()}var Ex=b(Oe(),1),Tx=b(Ea(),1),Cx=b(tn(),1),un=b(ot(),1);function st(e){var r,t,n,a=2;for(typeof Ex.default<"u"&&(t=Tx.default,n=Cx.default);a--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Da(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Da(e){function r(t){if(Object(t)!==t)return un.default.reject(new TypeError(t+" is not an object."));var n=t.done;return un.default.resolve(t.value).then(function(a){return{value:a,done:n}})}return Da=function(n){this.s=n,this.n=n.next},Da.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var a=this.s.return;return a===void 0?un.default.resolve({value:n,done:!0}):r(a.apply(this.s,arguments))},throw:function(n){var a=this.s.return;return a===void 0?un.default.reject(n):r(a.apply(this.s,arguments))}},new Da(e)}var $D=b(ce(),1);var RD=b(ce(),1),AD=b(Bx(),1),ND=b(Ux(),1),MD=b(fw(),1),jD=b(_w(),1),LD=b(ps(),1);var Hs=b(ce(),1);var P3=b(ce(),1);var ds=b(ce(),1);function sn(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function Hw(e,r){return sn(e.startChunk,r.startChunk)&&sn(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function Ir(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var vs=b(Qt(),1);var cn=b(Oe(),1),Ww=b(tn(),1);function He(e){"@babel/helpers - typeof";return He=typeof cn.default=="function"&&typeof Ww.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof cn.default=="function"&&r.constructor===cn.default&&r!==cn.default.prototype?"symbol":typeof r},He(e)}var nS=b(tS(),1);function aS(e,r){if(He(e)!="object"||!e)return e;var t=e[nS.default];if(t!==void 0){var n=t.call(e,r||"default");if(He(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Ba(e){var r=aS(e,"string");return He(r)=="symbol"?r:r+""}function iS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,vs.default)(e,Ba(n.key),n)}}function ln(e,r,t){return r&&iS(e.prototype,r),t&&iS(e,t),(0,vs.default)(e,"prototype",{writable:!1}),e}var oS=b(Qt(),1);function _r(e,r,t){return(r=Ba(r))in e?(0,oS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var uS=b(Kr(),1);var Ga="Iterator exhausted before seek ended.",fn=function(){function e(r){Ir(this,e),this.chunker=r,_r(this,"currentChunkPosition",0),_r(this,"offsetInChunk",0),this.seekTo(0)}return ln(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,a)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!sn(this.currentChunk,n);){var p=this._readToPreviousChunk(),v=Ue(p,2),d=v[0],h=v[1];if(t&&(u=d+u),h===null)throw new RangeError(Ga)}else for(;!sn(this.currentChunk,n);){var s=this._readToNextChunk(),c=Ue(s,2),l=c[0],f=c[1];if(t&&(u+=l),f===null)throw new RangeError(Ga)}var m=this.currentChunkPosition+a;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,uS.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var s=this.currentChunkPosition+this.currentChunk.data.length;if(s<=n){var c=this._readToNextChunk(),l=Ue(c,2),f=l[0],p=l[1];if(t&&(u+=f),p===null){if(this.position===n||o)break;throw new RangeError(Ga)}}else{var v=a?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,v)),this.offsetInChunk=v,a&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=a?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var h=this._readToPreviousChunk(),m=Ue(h,2),x=m[0],y=m[1];if(t&&(u=x+u),y===null){if(o)break;throw new RangeError(Ga)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,a=this.chunker.nextChunk();return a!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,a]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function cS(e,r){return ms.apply(this,arguments)}function ms(){return ms=kr(ds.default.mark(function e(r,t){var n,a,o,u,s,c,l,f,p,v,d,h,m,x,y,g,O,k,w,E,S,C,L=arguments;return ds.default.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:n=L.length>2&&L[2]!==void 0?L[2]:{},a=n.minimalContext,o=a===void 0?!1:a,u=n.minimumQuoteLength,s=u===void 0?0:u,c=n.maxWordLength,l=c===void 0?50:c,f=new fn(t()),p=new fn(t()),f.seekToChunk(r.startChunk,r.startIndex),v=f.readToChunk(r.endChunk,r.endIndex),d="",h="",m=function(){return d.length+v.length+h.length},m()<s&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),x=Math.floor((s-m())/2),d=f.read(-x,!1,!0)+d,m()<s&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),y=s-m(),h=h+f.read(y,!1,!0),m()<s&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),g=s-m(),d=f.read(-g,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=Ua(f,l,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+Ua(f,l,!1));case 11:return O={type:"TextQuoteSelector",exact:v,prefix:d,suffix:h},k=Ha(O)(t()),I.next=16,k.next();case 16:if(w=I.sent,!(!w.done&&Hw(w.value,r))){I.next=21;break}return I.next=20,k.next();case 20:w=I.sent;case 21:if(!w.done){I.next=23;break}return I.abrupt("return",O);case 23:if(E=w.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),p.seekToChunk(E.startChunk,E.startIndex-d.length),S=sS(f,p,!0),S!==void 0&&!o&&(S=Ua(f,l,!0)+S),f.seekToChunk(r.endChunk,r.endIndex+h.length),p.seekToChunk(E.endChunk,E.endIndex+h.length),C=sS(f,p,!1),C!==void 0&&!o&&(C=C+Ua(f,l,!1)),!o){I.next=44;break}if(!(S!==void 0&&(C===void 0||S.length<=C.length))){I.next=37;break}d=S+d,I.next=42;break;case 37:if(C===void 0){I.next=41;break}h=h+C,I.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:I.next=46;break;case 44:S!==void 0&&(d=S+d),C!==void 0&&(h=h+C);case 46:I.next=11;break;case 48:case"end":return I.stop()}},e)})),ms.apply(this,arguments)}function sS(e,r,t){for(var n="";;){var a=void 0;try{a=e.read(t?-1:1)}catch{return}n=t?a+n:n+a;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(a!==o)return n}}function Ua(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var a=void 0;try{a=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(UD(a)){e.seekBy(t?1:-1);break}n=t?a+n:n+a}return n}function UD(e){return/^\s+$/.test(e)}var JS=b(Kr(),1),QS=b(Wn(),1),XS=b(ua(),1),ZS=b(sa(),1),eE=b(ca(),1);var bs=b(ce(),1),rE=b(RS(),1),tE=b(zS(),1);function VS(e,r){var t;if(typeof XS.default>"u"||(0,ZS.default)(e)==null){if(Array.isArray(e)||(t=T3(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,s;return{s:function(){t=(0,eE.default)(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){u=!0,s=l},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw s}}}}function T3(e,r){var t;if(e){if(typeof e=="string")return YS(e,r);var n=(0,JS.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,QS.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return YS(e,r)}}function YS(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Ha(e){return function(){var r=Ie(bs.default.mark(function n(a){var o,u,s,c,l,f,p,v,d,h,m,x,y,g,O,k,w,E,S,C,L,Se,I,re,Ee,Q,F;return bs.default.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:o=e.exact,u=e.prefix||"",s=e.suffix||"",c=u+o+s,l=[],f=!0;case 6:p=a.currentChunk,v=p.data,d=[],h=VS(l),T.prev=10,h.s();case 12:if((m=h.n()).done){T.next=27;break}if(x=m.value,y=x.charactersMatched,x.endChunk===void 0&&(g=u.length+o.length-y,g<=v.length&&(x.endChunk=p,x.endIndex=g)),x.startChunk===void 0&&(O=u.length-y,(O<v.length||x.endChunk!==void 0)&&(x.startChunk=p,x.startIndex=O)),k=c.length-y,!(k<=v.length)){T.next=24;break}if(!(0,rE.default)(v).call(v,c.substring(y))){T.next=22;break}return T.next=22,x;case 22:T.next=25;break;case 24:v===c.substring(y,y+v.length)&&(x.charactersMatched+=v.length,d.push(x));case 25:T.next=12;break;case 27:T.next=32;break;case 29:T.prev=29,T.t0=T.catch(10),h.e(T.t0);case 32:return T.prev=32,h.f(),T.finish(32);case 35:if(l=d,!(c.length<=v.length)){T.next=49;break}w=0;case 38:if(!(w<=v.length)){T.next=49;break}if(E=v.indexOf(c,w),E!==-1){T.next=42;break}return T.abrupt("break",49);case 42:if(w=E+1,!(E===0&&c.length===0&&!f)){T.next=45;break}return T.abrupt("continue",38);case 45:return T.next=47,{startChunk:p,startIndex:E+u.length,endChunk:p,endIndex:E+u.length+o.length};case 47:T.next=38;break;case 49:for(S=[],C=Math.max(v.length-c.length+1,0),L=function(Ye){var sc=v[Ye];S=(0,tE.default)(S).call(S,function(yC){return sc===c[Ye-yC]}),sc===c[0]&&S.push(Ye)},Se=C;Se<v.length;Se++)L(Se);I=VS(S);try{for(I.s();!(re=I.n()).done;)Ee=re.value,Q=v.length-Ee,F={charactersMatched:Q},Q>=u.length+o.length&&(F.endChunk=p,F.endIndex=Ee+u.length+o.length),(Q>u.length||F.endChunk!==void 0)&&(F.startChunk=p,F.startIndex=Ee+u.length),l.push(F)}catch(Nr){I.e(Nr)}finally{I.f()}f=!1;case 56:if(a.nextChunk()!==null){T.next=6;break}case 57:case"end":return T.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var I3=b(ce(),1);var C3=b(Kr(),1),O3=b(ps(),1);var _3=b(ce(),1);var dn=b(qE(),1);var wE=b(Ca(),1),SE=b(Qt(),1);var xs=b(Oa(),1),xE=b(Jt(),1);function sr(e,r){var t;return sr=xs.default?(0,xE.default)(t=xs.default).call(t):function(n,a){return n.__proto__=a,n},sr(e,r)}function ws(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,wE.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,SE.default)(e,"prototype",{writable:!1}),r&&sr(e,r)}function EE(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function TE(e,r){if(r&&(He(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return EE(e)}var CE=b(Oa(),1),OE=b(Jt(),1),Ss=b(Ta(),1);function Pr(e){var r;return Pr=CE.default?(0,OE.default)(r=Ss.default).call(r):function(t){return t.__proto__||(0,Ss.default)(t)},Pr(e)}var Us=b(XT(),1),q0=b(Ca(),1);var v0=b(p0(),1);function d0(e){try{var r;return(0,v0.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var h0=b(Wa(),1),y0=b(is(),1),b0=b(Jt(),1);var m0=b(Wa(),1);function Gs(){try{var e=!Boolean.prototype.valueOf.call((0,m0.default)(Boolean,[],function(){}))}catch{}return(Gs=function(){return!!e})()}function g0(e,r,t){if(Gs())return h0.default.apply(null,arguments);var n=[null];(0,y0.default)(n).apply(n,r);var a=new((0,b0.default)(e).apply(e,n));return t&&sr(a,t.prototype),a}function vn(e){var r=typeof Us.default=="function"?new Us.default:void 0;return vn=function(n){if(n===null||!d0(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,a)}function a(){return g0(n,arguments,Pr(this).constructor)}return a.prototype=(0,q0.default)(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),sr(a,n)},vn(e)}function S0(e,r){var t=le(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),a=x0(e.startContainer,e.startOffset),o=Ue(a,2),u=o[0],s=o[1];for(n.currentNode=u;s===u.length&&n.nextNode();)u=n.currentNode,s=0;e.setStart(u,s);var c=x0(e.endContainer,e.endOffset),l=Ue(c,2),f=l[0],p=l[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function x0(e,r){var t;if(w0(e))return[e,r];var n;if(e6(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(w0(n))return[n,0];var a=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=a.createTreeWalker(a,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function w0(e){return e.nodeType===Node.TEXT_NODE}function e6(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function T0(e){var r=r6();return function(){var n=Pr(e),a;if(r){var o=Pr(this).constructor;a=(0,dn.default)(n,arguments,o)}else a=n.apply(this,arguments);return TE(this,a)}}function r6(){if(typeof Reflect>"u"||!dn.default||dn.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,dn.default)(Boolean,[],function(){})),!0}catch{return!1}}var Xa=function(e){ws(t,e);var r=T0(t);function t(n){return Ir(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(vn(TypeError)),t6=function(e){ws(t,e);var r=T0(t);function t(n){return Ir(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(vn(TypeError)),Rr=function(){function e(r){var t=this;if(Ir(this,e),_r(this,"scope",void 0),_r(this,"iter",void 0),this.scope=ur(r),this.iter=le(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!E0(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Xa}}return ln(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!E0(t))throw new Xa;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new t6;var n=t===this.scope.startContainer?this.scope.startOffset:0,a=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:a,data:t.data.substring(n,a),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=S0(t,this.scope),a=this.nodeToChunk(n.startContainer),o=n.startOffset-a.startOffset,u=this.nodeToChunk(n.endContainer),s=n.endOffset-u.startOffset;return{startChunk:a,startIndex:o,endChunk:u,endIndex:s}}},{key:"chunkRangeToRange",value:function(t){var n=le(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function E0(e){return e.nodeType===Node.TEXT_NODE}function C0(e,r){return Ws.apply(this,arguments)}function Ws(){return Ws=kr(Hs.default.mark(function e(r,t){var n,a,o,u=arguments;return Hs.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},a=ur(t??le(r)),o=new Rr(a),c.next=5,cS(o.rangeToChunkRange(r),function(){return new Rr(a)},n);case 5:return c.abrupt("return",c.sent);case 6:case"end":return c.stop()}},e)})),Ws.apply(this,arguments)}var Ks=b(ce(),1);function O0(e){var r=Ha(e);return function(){var t=Ie(Ks.default.mark(function a(o){var u,s,c,l,f,p,v,d;return Ks.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new Rr(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof Xa)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:s=!0,c=!1,m.prev=13,f=st(r(u));case 15:return m.next=17,ir(f.next());case 17:return p=m.sent,s=p.done,m.next=21,ir(p.value);case 21:if(v=m.sent,s){m.next=29;break}return d=v,m.next=26,u.chunkRangeToRange(d);case 26:s=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),c=!0,l=m.t1;case 35:if(m.prev=35,m.prev=36,!(!s&&f.return!=null)){m.next=40;break}return m.next=40,ir(f.return());case 40:if(m.prev=40,!c){m.next=43;break}throw l;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},a,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(a){return t.apply(this,arguments)}return n}()}var n6=b(ce(),1);var a6=b(ce(),1);var v6=b(B0(),1),d6=b(Kr(),1),m6=b(Wn(),1),h6=b(ua(),1),y6=b(sa(),1),b6=b(ca(),1);async function G0(e,r){let t=await C0(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function ct(e,r){let t=O0({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var he=b(Vs()),mn=b(Vs());function lt(e){if(!e||typeof e!="string")return null;let r=e.trim().toLowerCase();return mn.COLOR_PRESETS[r]?mn.COLOR_PRESETS[r]:mn.HEX_COLOR_REGEX.test(r)?r:null}function Za(e,r){let t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16);return`rgba(${t}, ${n}, ${a}, ${r})`}var ft="fb-highlight",H0="fb-highlight-active";var ei=new Map,hn=null;function K0(e){hn=e}function pt(e,r,t){let n=lt(t)||he.DEFAULT_COLOR;ei.set(r,n);let a=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let o=W0(e,r,n);a.push(o)}else{let o=S6(e);for(let u=0;u<o.length;u++){let s=o[u],c=document.createRange();s===e.startContainer?(c.setStart(s,e.startOffset),c.setEnd(s,s.textContent.length)):s===e.endContainer?(c.setStart(s,0),c.setEnd(s,e.endOffset)):c.selectNodeContents(s),c.collapsed||a.push(W0(c,r,n))}}return a}function W0(e,r,t){let n=e.commonAncestorContainer;for(;n&&n.nodeType!==Node.ELEMENT_NODE;)n=n.parentNode;let a=n,o=!1,u=null;for(;a;){if(a.tagName==="foreignObject"){o=!1;break}a.tagName==="text"&&a instanceof SVGElement&&(o=!0),a.tagName==="svg"&&(u=a),a=a.parentElement}if(o&&u)return w6(e,r,u,t);let s=document.createElement("mark");s.className=ft,s.dataset.commentId=r,s.style.backgroundColor=Za(t,.35),s.style.cursor="pointer",s.style.borderRadius="2px",s.addEventListener("click",()=>{hn&&hn(r)});try{e.surroundContents(s)}catch(c){return console.warn("[feedback-layer] Failed to create highlight:",c),null}return s}function w6(e,r,t,n){try{let a=e.getClientRects();if(a.length===0)return null;let o="http://www.w3.org/2000/svg",u=t.getScreenCTM();if(!u)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let s=e.commonAncestorContainer;for(;s&&s.nodeType!==Node.ELEMENT_NODE;)s=s.parentNode;let c=s,l=null;for(;c&&c!==t;){if(c.tagName==="text"){l=c.parentElement;break}c=c.parentElement}let f=l||t,p=u;f!==t&&f.getScreenCTM&&(p=f.getScreenCTM());let v=document.createElementNS(o,"g");v.setAttribute("class",ft),v.setAttribute("data-comment-id",r),v.style.cursor="pointer";for(let y=0;y<a.length;y++){let g=a[y],O=document.createElementNS(o,"rect"),k=t.createSVGPoint();k.x=g.left,k.y=g.top;let w=k.matrixTransform(p.inverse()),E=g.width/p.a,S=g.height/p.d;O.setAttribute("x",w.x),O.setAttribute("y",w.y),O.setAttribute("width",E),O.setAttribute("height",S),O.setAttribute("fill",n),O.setAttribute("fill-opacity","0.35"),O.setAttribute("rx","2"),O.setAttribute("ry","2"),O.style.pointerEvents="none",v.appendChild(O)}f&&f!==t?f.appendChild(v):t.appendChild(v);let d=e.commonAncestorContainer;for(;d&&d.nodeType!==Node.ELEMENT_NODE;)d=d.parentNode;let h=new Set,m=d;for(;m&&m!==t;)m.tagName==="text"&&m instanceof SVGElement&&(h.add(m),m.querySelectorAll("tspan").forEach(g=>h.add(g))),m=m.parentElement;let x=y=>{y.preventDefault(),y.stopPropagation(),hn&&hn(r)};return h.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",x),y.dataset.fbCommentId=r}),v}catch(a){return console.warn("[feedback-layer] Failed to create SVG highlight:",a),null}}function yn(e){ei.delete(e),document.querySelectorAll(`.${ft}[data-comment-id="${e}"]`).forEach(n=>{let a=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)a.removeChild(n);else{for(;n.firstChild;)a.insertBefore(n.firstChild,n);a.removeChild(n),a.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function z0(){ei.clear(),document.querySelectorAll(`.${ft}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function bn(e){document.querySelectorAll(`.${ft}`).forEach(r=>{let t=r.dataset.commentId,n=t===e,a=ei.get(t)||he.DEFAULT_COLOR,o=Za(a,.55),u=Za(a,.35);n?r.classList.add(H0):r.classList.remove(H0),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(c=>{c.setAttribute("fill",a),c.setAttribute("fill-opacity",n?"0.55":"0.35")}):r.style.backgroundColor=n?o:u})}function Ys(e){let r=document.querySelector(`.${ft}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function S6(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let a=document.createRange();return a.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,a)<0&&e.compareBoundaryPoints(Range.START_TO_END,a)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function V0(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,a)=>{let o=[`**${a+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let s of u)o.push(`  - **[${s.author}]** (reply): ${s.body}`);return o.join(`
`)}).join(`

`)}function Y0(e,r){let t=V0(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(a=>!a.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function Ke(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var E6=`
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
`,J0=null,Q0=null;function X0(e,r){Q0=e,J0=r,T6()}function T6(){let e=document.createElement("style");e.textContent=E6,document.head.appendChild(e)}function Z0(){let e=J0(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let a=document.createElement("button");a.className="hf-modal-close",a.textContent="\xD7",a.addEventListener("click",()=>r.remove()),n.appendChild(a);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",p=>{p.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let s=document.querySelector(Q0.contentSelector||"body").innerHTML,c=Y0(s,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${c.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${Ke(c)}</textarea>
  `;let l=document.createElement("button");l.className="hf-btn hf-btn-primary",l.textContent="Copy Prompt",l.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c),l.textContent="Copied!"}catch{l.textContent="Copy failed"}setTimeout(()=>l.textContent="Copy Prompt",2e3)}),u.appendChild(l);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function eC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function Js(e,r){return e.length>r?e.slice(0,r)+"...":e}function rC(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var gn=null;function nC(e){gn=document.createElement("div"),gn.className="fb-toast-container",e.appendChild(gn)}function ze(e,r="success"){if(!gn)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>tC(t)),t.appendChild(o)}gn.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>tC(t),r==="error"?8e3:4e3)}function tC(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}function aC(e,r){return r<=0?0:(e%r+r)%r}var C6=320,uC="feedback-layer-commenter",B=null,fe=null,xe=null,Qs=null,sC=null,Xs=null,Zs=null,ec=null,rc=null,wn=null,O6=null,tc=null,cC=!1,lC=[],nc=new Set,Pe=-1,qn=null,iC=!1;function k6(){iC||(iC=!0,$6())}function Ve(){return localStorage.getItem(uC)||""}function fC({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:a,onReaction:o,onColorChange:u,defaultColor:s}){sC=e,Xs=r,Zs=t,ec=n,rc=a,wn=o,O6=u,tc=s||null,k6(),B=document.createElement("div"),B.className="fb-sidebar fb-sidebar-collapsed",B.setAttribute("role","complementary"),B.setAttribute("aria-label","Feedback sidebar"),B.innerHTML=`
    <div class="fb-sidebar-header">
      <strong>Feedback</strong>
      <div class="fb-sidebar-header-actions">
        <button class="fb-ai-btn" title="Send feedback to Claude">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"/></svg>
        </button>
        <button class="fb-shortcuts-btn" title="Keyboard shortcuts (?)">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M8 16h8"/></svg>
        </button>
        <button class="fb-sidebar-toggle" title="Close sidebar">&times;</button>
      </div>
    </div>
    <div class="fb-sidebar-content">
      <div class="fb-name-section">
        <label class="fb-label">Your name</label>
        <input type="text" class="fb-name-input" placeholder="Enter your name..."
               value="${Ke(Ve())}">
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
  `;let c=document.createElement("button");c.className="fb-sidebar-tab",c.textContent="Feedback",c.addEventListener("click",()=>vt()),document.body.appendChild(c),document.body.appendChild(B),nC(B),fe=B.querySelector(".fb-comment-list"),fe.setAttribute("role","list"),xe=B.querySelector(".fb-form-section");let l=B.querySelector(".fb-name-input");l.addEventListener("input",()=>{localStorage.setItem(uC,l.value.trim())}),B.querySelector(".fb-ai-btn").addEventListener("click",()=>Z0()),B.querySelector(".fb-shortcuts-btn").addEventListener("click",()=>vC()),B.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>ac());let d=B.querySelector(".fb-show-resolved-cb");d.addEventListener("change",()=>{cC=d.checked,Re(lC,nc)}),document.addEventListener("keydown",_6)}function vt(){B.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden"),R6(),fe?.querySelector(".fb-thread .fb-cmt-card")&&ri(0)}function ac(){B.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden"),dC(),Pe=-1,document.body.focus()}function pC(){let e=document.activeElement;if(!e)return!1;let r=e.tagName;return r==="TEXTAREA"||r==="INPUT"||r==="SELECT"||e.isContentEditable}function xn(){return fe?Array.from(fe.querySelectorAll(".fb-thread > .fb-cmt-card:first-child")):[]}function ri(e){let r=xn();if(r.length===0)return;e=aC(e,r.length),Pe=e,fe.querySelectorAll(".fb-cmt-card").forEach(a=>a.classList.remove("fb-cmt-active"));let t=r[e];t.classList.add("fb-cmt-active"),t.scrollIntoView({behavior:"smooth",block:"nearest"});let n=t.closest(".fb-thread");n?.dataset.commentId&&nc.has(n.dataset.commentId)&&(bn(n.dataset.commentId),Ys(n.dataset.commentId))}function I6(e){if(B.classList.contains("fb-sidebar-collapsed"))return;let r=e.key;if(r==="Escape"){e.preventDefault(),ac();return}if(!pC()){if(r==="Enter"){let t=xn();if(Pe>=0&&Pe<t.length){e.preventDefault();let a=t[Pe].closest(".fb-thread")?.querySelector(".fb-reply-btn");a&&a.click()}return}if(r==="j"){if(e.preventDefault(),xn().length===0)return;let n=Pe<0?0:Pe+1;ri(n);return}if(r==="k"){e.preventDefault();let t=xn();if(t.length===0)return;let n=Pe<0?t.length-1:Pe-1;ri(n);return}if(r==="?"){e.preventDefault(),vC();return}}}function vC(){let e=document.querySelector(".fb-shortcuts-overlay");if(e){e.remove();return}let r=document.createElement("div");r.className="fb-shortcuts-overlay";let t=document.createElement("div");t.className="fb-shortcuts-modal",t.innerHTML=`
    <div class="fb-shortcuts-header">
      <strong>Keyboard Shortcuts</strong>
      <button class="fb-shortcuts-close">&times;</button>
    </div>
    <div class="fb-shortcuts-body">
      <table class="fb-shortcuts-table">
        <tbody>
          <tr><td><kbd>s</kbd></td><td>Toggle sidebar open/closed</td></tr>
          <tr><td><kbd>Esc</kbd></td><td>Close sidebar</td></tr>
          <tr><td><kbd>j</kbd></td><td>Next comment thread</td></tr>
          <tr><td><kbd>k</kbd></td><td>Previous comment thread</td></tr>
          <tr><td><kbd>Enter</kbd></td><td>Reply to focused thread</td></tr>
          <tr><td><kbd>Cmd+Enter</kbd></td><td>Submit comment or reply</td></tr>
          <tr><td><kbd>?</kbd></td><td>Toggle this help</td></tr>
        </tbody>
      </table>
    </div>
  `;let n=()=>r.remove();t.querySelector(".fb-shortcuts-close").addEventListener("click",n),r.addEventListener("click",a=>{a.target===r&&n()}),r.addEventListener("keydown",a=>{a.key==="Escape"&&(a.stopPropagation(),n())}),r.appendChild(t),document.body.appendChild(r),t.querySelector(".fb-shortcuts-close").focus()}function _6(e){pC()||e.key==="s"&&(e.preventDefault(),P6())}function P6(){B.classList.contains("fb-sidebar-collapsed")?vt():ac()}function R6(){dC(),qn=I6,document.addEventListener("keydown",qn)}function dC(){qn&&(document.removeEventListener("keydown",qn),qn=null)}function mC(e){if(vt(),!Ve()){let u=B.querySelector(".fb-name-input");u.classList.add("fb-name-input-error"),setTimeout(()=>u.classList.remove("fb-name-input-error"),2e3)}Qs=e,xe.style.display="";let r=Object.entries(he.COLOR_PRESETS),t=tc||he.DEFAULT_COLOR;xe.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${Ke(Js(e,120))}"</div>
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
  `;let n=t;xe.querySelectorAll(".fb-color-swatch").forEach(u=>{u.addEventListener("click",s=>{s.preventDefault(),xe.querySelectorAll(".fb-color-swatch").forEach(c=>c.classList.remove("fb-color-swatch-active")),u.classList.add("fb-color-swatch-active"),n=u.dataset.color})});let a=xe.querySelector(".fb-form-textarea");a.focus();let o=()=>{if(!Ve()){let s=B.querySelector(".fb-name-input");s.focus(),s.style.outline="2px solid var(--remarq-danger)",setTimeout(()=>s.style.outline="",2e3);return}let u=a.value.trim();u&&(sC({comment:u,commenter:Ve(),color:n}),xe.style.display="none",Qs=null)};xe.querySelector(".fb-submit-btn").addEventListener("click",o),a.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),xe.querySelector(".fb-cancel-btn").addEventListener("click",()=>{xe.style.display="none",Qs=null}),xe.scrollIntoView({behavior:"smooth",block:"nearest"})}function Re(e,r=new Set,t=new Map){lC=e,nc=r,Pe=-1,fe.innerHTML="";let{topLevel:n,repliesByParent:a}=eC(e),o=[],u=[];for(let l of n)r.has(l.id)?o.push(l):u.push(l);o.sort((l,f)=>{let p=t.get(l.id),v=t.get(f.id);return!p||!v?0:p.compareBoundaryPoints(Range.START_TO_START,v)});let s=[...o,...u],c=cC?s:s.filter(l=>l.status!=="closed");if(s.length===0){fe.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}if(c.length===0){fe.innerHTML=`<div class="fb-empty">All ${s.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let l of c){let f=!r.has(l.id),p=document.createElement("div");p.className="fb-thread",p.setAttribute("role","listitem"),p.setAttribute("tabindex","0"),p.dataset.commentId=l.id,p.appendChild(oC(l,!1,f));let v=a.get(l.id)||[];for(let h of v)p.appendChild(oC(h,!0));let d=document.createElement("button");d.className="fb-reply-btn",d.textContent="Reply",d.addEventListener("click",h=>{h.stopPropagation(),j6(l.id,p,d)}),p.appendChild(d),p.addEventListener("focus",()=>{let m=xn().indexOf(p.querySelector(".fb-cmt-card"));m>=0&&ri(m)}),fe.appendChild(p)}}function oC(e,r,t=!1){let n=e.status==="closed",a=document.createElement("div");a.className="fb-cmt-card"+(n?" fb-cmt-closed":"")+(r?" fb-cmt-reply":"")+(t?" fb-cmt-orphaned":""),a.dataset.id=e.id;let o=t&&e.quote?`<div class="fb-cmt-orphaned-quote">Content Deleted: "${Ke(Js(e.quote,120))}"</div>`:"";a.innerHTML=`
    ${o}
    <div class="fb-cmt-body">${Ke(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${Ke(e.author)}</span>
      <span class="fb-cmt-time">${rC(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${n?"Reopen":"Resolve"}">${n?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
    <div class="fb-reactions"></div>
  `;let u=a.querySelector(".fb-reactions");return N6(u,e),r||(a.addEventListener("click",s=>{s.target.closest(".fb-cmt-delete")||s.target.closest(".fb-cmt-resolve")||s.target.closest(".fb-cmt-edit")||s.target.closest(".fb-reactions")||(t||(bn(e.id),Ys(e.id)),fe.querySelectorAll(".fb-cmt-card").forEach(c=>c.classList.remove("fb-cmt-active")),a.classList.add("fb-cmt-active"))}),a.querySelector(".fb-cmt-resolve").addEventListener("click",s=>{s.stopPropagation(),Zs&&Zs(e.id,!n)})),a.querySelector(".fb-cmt-edit").addEventListener("click",s=>{s.stopPropagation(),L6(e,a)}),a.querySelector(".fb-cmt-delete").addEventListener("click",s=>{s.stopPropagation(),Xs&&Xs(e.id)}),a}var ic={"\u{1F44D}":"Like","\u2764\uFE0F":"Love","\u{1F440}":"Seen","\u{1F389}":"Celebrate","\u{1F914}":"Question","\u{1F602}":"Funny"},A6=Object.keys(ic);function N6(e,r){let t=r.reactions||[],n=Ve();for(let o of t){let u=document.createElement("button");u.className="fb-reaction-badge",n&&o.authors.includes(n)&&u.classList.add("fb-reaction-mine");let c=ic[o.emoji];u.innerHTML=`${o.emoji}<span class="fb-reaction-count">${o.count}</span>`,u.title=(c?c+": ":"")+o.authors.join(", "),u.addEventListener("click",l=>{l.stopPropagation(),wn&&wn(r.id,o.emoji)}),e.appendChild(u)}let a=document.createElement("button");a.className="fb-reaction-add",a.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><circle cx="9" cy="10" r="0.5" fill="currentColor"/><circle cx="15" cy="10" r="0.5" fill="currentColor"/></svg>',a.title="Add reaction",a.addEventListener("click",o=>{o.stopPropagation(),M6(e,r,a)}),e.appendChild(a)}function M6(e,r,t){let n=e.querySelector(".fb-emoji-picker");if(n){n.remove();return}let a=document.createElement("div");a.className="fb-emoji-picker";for(let u of A6){let s=ic[u],c=document.createElement("button");c.className="fb-emoji-option",c.textContent=u,c.title=s,c.addEventListener("click",l=>{l.stopPropagation(),a.remove(),wn&&wn(r.id,u)}),a.appendChild(c)}e.insertBefore(a,t.nextSibling);let o=u=>{!a.contains(u.target)&&u.target!==t&&(a.remove(),document.removeEventListener("click",o,!0))};setTimeout(()=>document.addEventListener("click",o,!0),0)}function j6(e,r,t){vt();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let a=document.createElement("div");a.className="fb-reply-form",a.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!Ve()){let c=B.querySelector(".fb-name-input");c.focus(),c.style.outline="2px solid var(--remarq-danger)",setTimeout(()=>c.style.outline="",2e3);return}let s=a.querySelector("textarea").value.trim();s&&(ec&&ec({parent_id:e,comment:s,commenter:Ve()}),a.remove(),t.style.display="")};a.querySelector(".fb-reply-submit").addEventListener("click",o);let u=a.querySelector("textarea");u.addEventListener("keydown",s=>{s.key==="Enter"&&(s.metaKey||s.ctrlKey)&&(s.preventDefault(),o())}),a.querySelector(".fb-reply-cancel").addEventListener("click",()=>{a.remove(),t.style.display=""}),r.insertBefore(a,t),u.focus()}function L6(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body,a=!e.parent_id,o=lt(e.color)||tc||he.DEFAULT_COLOR,u=Object.entries(he.COLOR_PRESETS);t.innerHTML=`
    ${a?`<div class="fb-color-picker">
      <label class="fb-color-label">Color</label>
      <div class="fb-color-swatches">
        ${u.map(([f,p])=>`<button type="button" class="fb-color-swatch${p===o?" fb-color-swatch-active":""}" data-color="${p}" title="${f}" style="background:${p};"></button>`).join("")}
      </div>
    </div>`:""}
    <textarea class="fb-form-textarea" rows="3">${Ke(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let s=o;t.querySelectorAll(".fb-color-swatch").forEach(f=>{f.addEventListener("click",p=>{p.preventDefault(),p.stopPropagation(),t.querySelectorAll(".fb-color-swatch").forEach(v=>v.classList.remove("fb-color-swatch-active")),f.classList.add("fb-color-swatch-active"),s=f.dataset.color})});let c=t.querySelector("textarea");c.focus(),c.setSelectionRange(c.value.length,c.value.length);let l=()=>{let f=c.value.trim();if(!f)return;let p=a&&s!==o;rc&&rc(e.id,f,p?s:void 0)};t.querySelector(".fb-edit-save").addEventListener("click",l),c.addEventListener("keydown",f=>{f.key==="Enter"&&(f.metaKey||f.ctrlKey)&&(f.preventDefault(),l())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function hC(e){let r=fe.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(fe.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function $6(){let e=document.createElement("style");e.textContent=`
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

      --remarq-reaction-mine-bg: #e8f0fe;
      --remarq-reaction-mine-border: #1a73e8;
      --remarq-reaction-mine-text: #1a73e8;
      --remarq-reaction-mine-hover: #d2e3fc;
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

      --remarq-reaction-mine-bg: #1e2a4a;
      --remarq-reaction-mine-border: #6390e0;
      --remarq-reaction-mine-text: #7da8f0;
      --remarq-reaction-mine-hover: #253560;
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

        --remarq-reaction-mine-bg: #1e2a4a;
        --remarq-reaction-mine-border: #6390e0;
        --remarq-reaction-mine-text: #7da8f0;
        --remarq-reaction-mine-hover: #253560;
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
      width: ${C6}px;
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
    .fb-shortcuts-btn {
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
    .fb-shortcuts-btn:hover {
      background: #f3f0ff;
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
    .fb-cmt-orphaned-quote {
      font-size: 11px;
      color: var(--remarq-text-faint);
      font-style: italic;
      margin-bottom: 6px;
      line-height: 1.4;
      padding: 4px 8px;
      border-left: 2px solid var(--remarq-danger);
      background: var(--remarq-error-bg);
      border-radius: 0 4px 4px 0;
      text-decoration: line-through;
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
      border: 1px solid var(--remarq-border);
      background: var(--remarq-bg-secondary);
      font-size: 11px;
      color: var(--remarq-text-muted);
      cursor: pointer;
      line-height: 1.4;
      font-family: inherit;
    }
    .fb-reaction-badge svg {
      color: var(--remarq-text-muted);
      flex-shrink: 0;
    }
    .fb-reaction-count {
      font-size: 11px;
      color: var(--remarq-text-muted);
    }
    .fb-reaction-badge:hover {
      border-color: var(--remarq-border-input);
      background: var(--remarq-bg-hover);
    }
    .fb-reaction-mine {
      border-color: var(--remarq-reaction-mine-border);
      background: var(--remarq-reaction-mine-bg);
    }
    .fb-reaction-mine svg {
      color: var(--remarq-reaction-mine-text);
    }
    .fb-reaction-mine .fb-reaction-count {
      color: var(--remarq-reaction-mine-text);
    }
    .fb-reaction-mine:hover {
      background: var(--remarq-reaction-mine-hover);
      border-color: var(--remarq-reaction-mine-border);
    }
    .fb-reaction-add {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 24px;
      border-radius: 12px;
      border: 1px solid var(--remarq-border);
      background: var(--remarq-bg-secondary);
      color: var(--remarq-text-muted);
      cursor: pointer;
      line-height: 1;
      font-family: inherit;
    }
    .fb-reaction-add:hover {
      border-color: var(--remarq-border-input);
      background: var(--remarq-bg-hover);
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
      cursor: pointer;
      padding: 6px;
      border-radius: 4px;
      line-height: 1;
      color: var(--remarq-text-muted);
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .fb-emoji-option:hover {
      background: var(--remarq-bg-hover);
      color: var(--remarq-text);
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

    /* Keyboard shortcuts modal */
    .fb-shortcuts-overlay {
      position: fixed;
      inset: 0;
      z-index: 10002;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .fb-shortcuts-modal {
      background: white;
      border-radius: 12px;
      width: 340px;
      max-width: 90%;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 14px;
      color: #333;
    }
    .fb-shortcuts-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 14px 16px;
      border-bottom: 1px solid #e5e7eb;
    }
    .fb-shortcuts-close {
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: #666;
      padding: 0 4px;
      line-height: 1;
    }
    .fb-shortcuts-body {
      padding: 12px 16px 16px;
    }
    .fb-shortcuts-table {
      width: 100%;
      border-collapse: collapse;
    }
    .fb-shortcuts-table td {
      padding: 6px 0;
      vertical-align: middle;
    }
    .fb-shortcuts-table td:first-child {
      width: 45%;
      white-space: nowrap;
    }
    .fb-shortcuts-table kbd {
      display: inline-block;
      background: #f3f4f6;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      padding: 2px 6px;
      font-size: 11px;
      font-family: inherit;
      color: #374151;
      line-height: 1.4;
    }
    .fb-shortcuts-note {
      margin: 12px 0 0;
      font-size: 12px;
      color: #888;
      line-height: 1.4;
    }
  `,document.head.appendChild(e)}var cr=null,ti=null,ni=null,uc=null,A=[],Ar=null,we=null,ee=new Set,pe=new Map;function F6(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null,theme:e?.dataset.theme||"auto",defaultColor:e?.dataset.defaultColor||null};lc(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{cr=document.querySelector(r.contentSelector)||document.body,ti=r.documentUri||window.location.origin+window.location.pathname,ni=r.documentId||null,uc=lt(r.defaultColor)||null,document.documentElement.dataset.remarqTheme=r.theme,fC({onSubmit:H6,onDelete:J6,onResolve:W6,onReply:K6,onEdit:z6,onReaction:Y6,onColorChange:V6,defaultColor:uc}),K0(a=>{vt(),hC(a),bn(a)}),G6(),await t(),D6(),X0(r,()=>A)}catch(a){console.error("[feedback-layer] Boot failed:",a)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function D6(){try{A=await fc(ti,ni),ee=await B6(A),Re(A,ee,pe)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),ze(`Failed to load comments: ${e.message}`,"error")}}async function B6(e){z0();let r=new Set;pe.clear();for(let t of e)if(!t.parent)try{let n=await ct({exact:t.quote,prefix:t.prefix,suffix:t.suffix},cr);n&&t.status!=="closed"?(pt(n,t.id,t.color),r.add(t.id),pe.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),pe.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function G6(){document.addEventListener("mouseup",oc),document.addEventListener("keyup",oc),document.addEventListener("touchend",oc)}function oc(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){Sn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){Sn();return}if(!cr.contains(r.commonAncestorContainer)){Sn();return}U6(r)},10)}function U6(e){Sn();let r=e.getBoundingClientRect();we=document.createElement("button"),we.className="fb-annotate-tooltip",we.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',we.style.top=window.scrollY+r.bottom+8+"px",we.style.left=window.scrollX+r.left+r.width/2-40+"px";let t=async n=>{n.preventDefault(),n.stopPropagation();let a=window.getSelection();if(!a||a.isCollapsed)return;let o=a.getRangeAt(0);try{Ar=await G0(o,cr),mC(Ar.exact)}catch(u){console.error("[feedback-layer] Failed to create selector:",u)}Sn()};we.addEventListener("mousedown",t),we.addEventListener("touchstart",t),document.body.appendChild(we)}function Sn(){we&&(we.remove(),we=null)}async function H6({comment:e,commenter:r,color:t}){if(!Ar)return;let n=t||uc||null;try{let a=await ai({uri:ti,document:ni,quote:Ar.exact,prefix:Ar.prefix,suffix:Ar.suffix,body:e,author:r,color:n});A.push(a);let o=await ct({exact:a.quote,prefix:a.prefix,suffix:a.suffix},cr);o&&(pt(o,a.id,a.color),ee.add(a.id)),Re(A,ee,pe),window.getSelection().removeAllRanges()}catch(a){console.error("[feedback-layer] Failed to create comment:",a),ze(`Failed to save comment: ${a.message}`,"error")}Ar=null}async function W6(e,r){try{let n=await pc(e,r?"closed":"open"),a=A.findIndex(o=>o.id===e);if(a!==-1&&(A[a]=n),r)yn(e);else{let o=n,u=await ct({exact:o.quote,prefix:o.prefix,suffix:o.suffix},cr);u?(pt(u,o.id,o.color),ee.add(o.id)):ee.delete(o.id)}Re(A,ee,pe)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),ze(`Failed to update comment: ${t.message}`,"error")}}async function K6({parent_id:e,comment:r,commenter:t}){try{let n=await ai({uri:ti,document:ni,body:r,author:t,parent:e});A.push(n),Re(A,ee,pe)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),ze(`Failed to save reply: ${n.message}`,"error")}}async function z6(e,r,t){try{let n={body:r};t!==void 0&&(n.color=t);let a=await ii(e,n),o=A.findIndex(u=>u.id===e);if(o!==-1&&(A[o]=a),t!==void 0){yn(e);let u=a;if(u.status!=="closed"){let s=await ct({exact:u.quote,prefix:u.prefix,suffix:u.suffix},cr);s&&(pt(s,u.id,u.color),ee.add(u.id),pe.set(u.id,s))}}Re(A,ee,pe)}catch(n){console.error("[feedback-layer] Failed to edit comment:",n),ze(`Failed to update comment: ${n.message}`,"error")}}async function V6(e,r){try{let t=await ii(e,{color:r}),n=A.findIndex(o=>o.id===e);n!==-1&&(A[n]=t),yn(e);let a=t;if(a.status!=="closed"){let o=await ct({exact:a.quote,prefix:a.prefix,suffix:a.suffix},cr);o&&(pt(o,a.id,a.color),ee.add(a.id),pe.set(a.id,o))}Re(A,ee,pe)}catch(t){console.error("[feedback-layer] Failed to change color:",t),ze(`Failed to update color: ${t.message}`,"error")}}async function Y6(e,r){let t=Ve();if(t)try{let o=A.find(c=>c.id===e)?.reactions?.find(c=>c.emoji===r)?.authors.includes(t),u;o?u=await mc(e,r,t):u=await dc(e,r,t);let s=A.findIndex(c=>c.id===e);s!==-1&&(A[s]={...A[s],reactions:u.reactions}),Re(A,ee,pe)}catch(n){console.error("[feedback-layer] Failed to toggle reaction:",n),ze(`Failed to update reaction: ${n.message}`,"error")}}async function J6(e){try{await vc(e),yn(e),ee.delete(e),A=A.filter(r=>r.id!==e&&r.parent!==e),Re(A,ee,pe)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),ze(`Failed to delete comment: ${r.message}`,"error")}}try{F6()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
