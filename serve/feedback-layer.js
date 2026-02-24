var FeedbackLayer=(()=>{var gC=Object.create;var cc=Object.defineProperty;var qC=Object.getOwnPropertyDescriptor;var xC=Object.getOwnPropertyNames;var wC=Object.getPrototypeOf,SC=Object.prototype.hasOwnProperty;var i=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var EC=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of xC(r))!SC.call(e,a)&&a!==t&&cc(e,a,{get:()=>r[a],enumerable:!(n=qC(r,a))||n.enumerable});return e};var b=(e,r,t)=>(t=e!=null?gC(wC(e)):{},EC(r||!e||!e.__esModule?cc(t,"default",{value:e,enumerable:!0}):t,e));var _=i((eG,hc)=>{"use strict";hc.exports=function(e){try{return!!e()}catch{return!0}}});var Mr=i((rG,yc)=>{"use strict";var TC=_();yc.exports=!TC(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var N=i((tG,qc)=>{"use strict";var bc=Mr(),gc=Function.prototype,oi=gc.call,CC=bc&&gc.bind.bind(oi,oi);qc.exports=bc?CC:function(e){return function(){return oi.apply(e,arguments)}}});var U=i((nG,xc)=>{"use strict";var OC=N();xc.exports=OC({}.isPrototypeOf)});var P=i((ui,wc)=>{"use strict";var dt=function(e){return e&&e.Math===Math&&e};wc.exports=dt(typeof globalThis=="object"&&globalThis)||dt(typeof window=="object"&&window)||dt(typeof self=="object"&&self)||dt(typeof global=="object"&&global)||dt(typeof ui=="object"&&ui)||function(){return this}()||Function("return this")()});var jr=i((aG,Cc)=>{"use strict";var kC=Mr(),Tc=Function.prototype,Sc=Tc.apply,Ec=Tc.call;Cc.exports=typeof Reflect=="object"&&Reflect.apply||(kC?Ec.bind(Sc):function(){return Ec.apply(Sc,arguments)})});var Te=i((iG,kc)=>{"use strict";var Oc=N(),IC=Oc({}.toString),_C=Oc("".slice);kc.exports=function(e){return _C(IC(e),8,-1)}});var mt=i((oG,Ic)=>{"use strict";var PC=Te(),RC=N();Ic.exports=function(e){if(PC(e)==="Function")return RC(e)}});var M=i((uG,_c)=>{"use strict";var si=typeof document=="object"&&document.all;_c.exports=typeof si>"u"&&si!==void 0?function(e){return typeof e=="function"||e===si}:function(e){return typeof e=="function"}});var H=i((sG,Pc)=>{"use strict";var AC=_();Pc.exports=!AC(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var G=i((cG,Rc)=>{"use strict";var NC=Mr(),En=Function.prototype.call;Rc.exports=NC?En.bind(En):function(){return En.apply(En,arguments)}});var ci=i(Mc=>{"use strict";var Ac={}.propertyIsEnumerable,Nc=Object.getOwnPropertyDescriptor,MC=Nc&&!Ac.call({1:2},1);Mc.f=MC?function(r){var t=Nc(this,r);return!!t&&t.enumerable}:Ac});var Qe=i((fG,jc)=>{"use strict";jc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var Tn=i((pG,Lc)=>{"use strict";var jC=N(),LC=_(),$C=Te(),li=Object,FC=jC("".split);Lc.exports=LC(function(){return!li("z").propertyIsEnumerable(0)})?function(e){return $C(e)==="String"?FC(e,""):li(e)}:li});var fr=i((vG,$c)=>{"use strict";$c.exports=function(e){return e==null}});var pr=i((dG,Fc)=>{"use strict";var DC=fr(),BC=TypeError;Fc.exports=function(e){if(DC(e))throw new BC("Can't call method on "+e);return e}});var Ae=i((mG,Dc)=>{"use strict";var GC=Tn(),UC=pr();Dc.exports=function(e){return GC(UC(e))}});var $=i((hG,Bc)=>{"use strict";var HC=M();Bc.exports=function(e){return typeof e=="object"?e!==null:HC(e)}});var V=i((yG,Gc)=>{"use strict";Gc.exports={}});var W=i((bG,Hc)=>{"use strict";var fi=V(),pi=P(),WC=M(),Uc=function(e){return WC(e)?e:void 0};Hc.exports=function(e,r){return arguments.length<2?Uc(fi[e])||Uc(pi[e]):fi[e]&&fi[e][r]||pi[e]&&pi[e][r]}});var Lr=i((gG,zc)=>{"use strict";var KC=P(),Wc=KC.navigator,Kc=Wc&&Wc.userAgent;zc.exports=Kc?String(Kc):""});var $r=i((qG,Zc)=>{"use strict";var Xc=P(),vi=Lr(),Vc=Xc.process,Yc=Xc.Deno,Jc=Vc&&Vc.versions||Yc&&Yc.version,Qc=Jc&&Jc.v8,be,Cn;Qc&&(be=Qc.split("."),Cn=be[0]>0&&be[0]<4?1:+(be[0]+be[1]));!Cn&&vi&&(be=vi.match(/Edge\/(\d+)/),(!be||be[1]>=74)&&(be=vi.match(/Chrome\/(\d+)/),be&&(Cn=+be[1])));Zc.exports=Cn});var vr=i((xG,rl)=>{"use strict";var el=$r(),zC=_(),VC=P(),YC=VC.String;rl.exports=!!Object.getOwnPropertySymbols&&!zC(function(){var e=Symbol("symbol detection");return!YC(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&el&&el<41})});var di=i((wG,tl)=>{"use strict";var JC=vr();tl.exports=JC&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Fr=i((SG,nl)=>{"use strict";var QC=W(),XC=M(),ZC=U(),eO=di(),rO=Object;nl.exports=eO?function(e){return typeof e=="symbol"}:function(e){var r=QC("Symbol");return XC(r)&&ZC(r.prototype,rO(e))}});var Xe=i((EG,al)=>{"use strict";var tO=String;al.exports=function(e){try{return tO(e)}catch{return"Object"}}});var D=i((TG,il)=>{"use strict";var nO=M(),aO=Xe(),iO=TypeError;il.exports=function(e){if(nO(e))return e;throw new iO(aO(e)+" is not a function")}});var On=i((CG,ol)=>{"use strict";var oO=D(),uO=fr();ol.exports=function(e,r){var t=e[r];return uO(t)?void 0:oO(t)}});var sl=i((OG,ul)=>{"use strict";var mi=G(),hi=M(),yi=$(),sO=TypeError;ul.exports=function(e,r){var t,n;if(r==="string"&&hi(t=e.toString)&&!yi(n=mi(t,e))||hi(t=e.valueOf)&&!yi(n=mi(t,e))||r!=="string"&&hi(t=e.toString)&&!yi(n=mi(t,e)))return n;throw new sO("Can't convert object to primitive value")}});var Z=i((kG,cl)=>{"use strict";cl.exports=!0});var pl=i((IG,fl)=>{"use strict";var ll=P(),cO=Object.defineProperty;fl.exports=function(e,r){try{cO(ll,e,{value:r,configurable:!0,writable:!0})}catch{ll[e]=r}return r}});var ht=i((_G,ml)=>{"use strict";var lO=Z(),fO=P(),pO=pl(),vl="__core-js_shared__",dl=ml.exports=fO[vl]||pO(vl,{});(dl.versions||(dl.versions=[])).push({version:"3.48.0",mode:lO?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var dr=i((PG,yl)=>{"use strict";var hl=ht();yl.exports=function(e,r){return hl[e]||(hl[e]=r||{})}});var te=i((RG,bl)=>{"use strict";var vO=pr(),dO=Object;bl.exports=function(e){return dO(vO(e))}});var K=i((AG,gl)=>{"use strict";var mO=N(),hO=te(),yO=mO({}.hasOwnProperty);gl.exports=Object.hasOwn||function(r,t){return yO(hO(r),t)}});var Dr=i((NG,ql)=>{"use strict";var bO=N(),gO=0,qO=Math.random(),xO=bO(1.1.toString);ql.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+xO(++gO+qO,36)}});var R=i((MG,wl)=>{"use strict";var wO=P(),SO=dr(),xl=K(),EO=Dr(),TO=vr(),CO=di(),Br=wO.Symbol,bi=SO("wks"),OO=CO?Br.for||Br:Br&&Br.withoutSetter||EO;wl.exports=function(e){return xl(bi,e)||(bi[e]=TO&&xl(Br,e)?Br[e]:OO("Symbol."+e)),bi[e]}});var Cl=i((jG,Tl)=>{"use strict";var kO=G(),Sl=$(),El=Fr(),IO=On(),_O=sl(),PO=R(),RO=TypeError,AO=PO("toPrimitive");Tl.exports=function(e,r){if(!Sl(e)||El(e))return e;var t=IO(e,AO),n;if(t){if(r===void 0&&(r="default"),n=kO(t,e,r),!Sl(n)||El(n))return n;throw new RO("Can't convert object to primitive value")}return r===void 0&&(r="number"),_O(e,r)}});var kn=i((LG,Ol)=>{"use strict";var NO=Cl(),MO=Fr();Ol.exports=function(e){var r=NO(e,"string");return MO(r)?r:r+""}});var In=i(($G,Il)=>{"use strict";var jO=P(),kl=$(),gi=jO.document,LO=kl(gi)&&kl(gi.createElement);Il.exports=function(e){return LO?gi.createElement(e):{}}});var qi=i((FG,_l)=>{"use strict";var $O=H(),FO=_(),DO=In();_l.exports=!$O&&!FO(function(){return Object.defineProperty(DO("div"),"a",{get:function(){return 7}}).a!==7})});var yt=i(Rl=>{"use strict";var BO=H(),GO=G(),UO=ci(),HO=Qe(),WO=Ae(),KO=kn(),zO=K(),VO=qi(),Pl=Object.getOwnPropertyDescriptor;Rl.f=BO?Pl:function(r,t){if(r=WO(r),t=KO(t),VO)try{return Pl(r,t)}catch{}if(zO(r,t))return HO(!GO(UO.f,r,t),r[t])}});var xi=i((BG,Al)=>{"use strict";var YO=_(),JO=M(),QO=/#|\.prototype\./,bt=function(e,r){var t=ZO[XO(e)];return t===rk?!0:t===ek?!1:JO(r)?YO(r):!!r},XO=bt.normalize=function(e){return String(e).replace(QO,".").toLowerCase()},ZO=bt.data={},ek=bt.NATIVE="N",rk=bt.POLYFILL="P";Al.exports=bt});var Y=i((GG,Ml)=>{"use strict";var Nl=mt(),tk=D(),nk=Mr(),ak=Nl(Nl.bind);Ml.exports=function(e,r){return tk(e),r===void 0?e:nk?ak(e,r):function(){return e.apply(r,arguments)}}});var wi=i((UG,jl)=>{"use strict";var ik=H(),ok=_();jl.exports=ik&&ok(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var X=i((HG,Ll)=>{"use strict";var uk=$(),sk=String,ck=TypeError;Ll.exports=function(e){if(uk(e))return e;throw new ck(sk(e)+" is not an object")}});var ne=i(Fl=>{"use strict";var lk=H(),fk=qi(),pk=wi(),_n=X(),$l=kn(),vk=TypeError,Si=Object.defineProperty,dk=Object.getOwnPropertyDescriptor,Ei="enumerable",Ti="configurable",Ci="writable";Fl.f=lk?pk?function(r,t,n){if(_n(r),t=$l(t),_n(n),typeof r=="function"&&t==="prototype"&&"value"in n&&Ci in n&&!n[Ci]){var a=dk(r,t);a&&a[Ci]&&(r[t]=n.value,n={configurable:Ti in n?n[Ti]:a[Ti],enumerable:Ei in n?n[Ei]:a[Ei],writable:!1})}return Si(r,t,n)}:Si:function(r,t,n){if(_n(r),t=$l(t),_n(n),fk)try{return Si(r,t,n)}catch{}if("get"in n||"set"in n)throw new vk("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var Ce=i((KG,Dl)=>{"use strict";var mk=H(),hk=ne(),yk=Qe();Dl.exports=mk?function(e,r,t){return hk.f(e,r,yk(1,t))}:function(e,r,t){return e[r]=t,e}});var q=i((zG,Gl)=>{"use strict";var gt=P(),bk=jr(),gk=mt(),qk=M(),xk=yt().f,wk=xi(),Gr=V(),Sk=Y(),Ur=Ce(),Bl=K();ht();var Ek=function(e){var r=function(t,n,a){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,a)}return bk(e,this,arguments)};return r.prototype=e.prototype,r};Gl.exports=function(e,r){var t=e.target,n=e.global,a=e.stat,o=e.proto,u=n?gt:a?gt[t]:gt[t]&&gt[t].prototype,s=n?Gr:Gr[t]||Ur(Gr,t,{})[t],c=s.prototype,l,f,p,v,d,h,m,x,y;for(v in r)l=wk(n?v:t+(a?".":"#")+v,e.forced),f=!l&&u&&Bl(u,v),h=s[v],f&&(e.dontCallGetSet?(y=xk(u,v),m=y&&y.value):m=u[v]),d=f&&m?m:r[v],!(!l&&!o&&typeof h==typeof d)&&(e.bind&&f?x=Sk(d,gt):e.wrap&&f?x=Ek(d):o&&qk(d)?x=gk(d):x=d,(e.sham||d&&d.sham||h&&h.sham)&&Ur(x,"sham",!0),Ur(s,v,x),o&&(p=t+"Prototype",Bl(Gr,p)||Ur(Gr,p,{}),Ur(Gr[p],v,d),e.real&&c&&(l||!c[v])&&Ur(c,v,d)))}});var Ne=i((VG,Ul)=>{"use strict";var Tk=Te();Ul.exports=Array.isArray||function(r){return Tk(r)==="Array"}});var Pn=i((YG,Wl)=>{"use strict";var Ck=R(),Ok=Ck("toStringTag"),Hl={};Hl[Ok]="z";Wl.exports=String(Hl)==="[object z]"});var qt=i((JG,Kl)=>{"use strict";var kk=Pn(),Ik=M(),Rn=Te(),_k=R(),Pk=_k("toStringTag"),Rk=Object,Ak=Rn(function(){return arguments}())==="Arguments",Nk=function(e,r){try{return e[r]}catch{}};Kl.exports=kk?Rn:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=Nk(r=Rk(e),Pk))=="string"?t:Ak?Rn(r):(n=Rn(r))==="Object"&&Ik(r.callee)?"Arguments":n}});var ki=i((QG,zl)=>{"use strict";var Mk=N(),jk=M(),Oi=ht(),Lk=Mk(Function.toString);jk(Oi.inspectSource)||(Oi.inspectSource=function(e){return Lk(e)});zl.exports=Oi.inspectSource});var wt=i((XG,Xl)=>{"use strict";var $k=N(),Fk=_(),Vl=M(),Dk=qt(),Bk=W(),Gk=ki(),Yl=function(){},Jl=Bk("Reflect","construct"),Ii=/^\s*(?:class|function)\b/,Uk=$k(Ii.exec),Hk=!Ii.test(Yl),xt=function(r){if(!Vl(r))return!1;try{return Jl(Yl,[],r),!0}catch{return!1}},Ql=function(r){if(!Vl(r))return!1;switch(Dk(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Hk||!!Uk(Ii,Gk(r))}catch{return!0}};Ql.sham=!0;Xl.exports=!Jl||Fk(function(){var e;return xt(xt.call)||!xt(Object)||!xt(function(){e=!0})||e})?Ql:xt});var ef=i((ZG,Zl)=>{"use strict";var Wk=Math.ceil,Kk=Math.floor;Zl.exports=Math.trunc||function(r){var t=+r;return(t>0?Kk:Wk)(t)}});var An=i((e8,rf)=>{"use strict";var zk=ef();rf.exports=function(e){var r=+e;return r!==r||r===0?0:zk(r)}});var _i=i((r8,tf)=>{"use strict";var Vk=An(),Yk=Math.max,Jk=Math.min;tf.exports=function(e,r){var t=Vk(e);return t<0?Yk(t+r,0):Jk(t,r)}});var Pi=i((t8,nf)=>{"use strict";var Qk=An(),Xk=Math.min;nf.exports=function(e){var r=Qk(e);return r>0?Xk(r,9007199254740991):0}});var ve=i((n8,af)=>{"use strict";var Zk=Pi();af.exports=function(e){return Zk(e.length)}});var Hr=i((a8,of)=>{"use strict";var e1=H(),r1=ne(),t1=Qe();of.exports=function(e,r,t){e1?r1.f(e,r,t1(0,t)):e[r]=t}});var Wr=i((i8,uf)=>{"use strict";var n1=H(),a1=Ne(),i1=TypeError,o1=Object.getOwnPropertyDescriptor,u1=n1&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();uf.exports=u1?function(e,r){if(a1(e)&&!o1(e,"length").writable)throw new i1("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var St=i((o8,sf)=>{"use strict";var s1=_(),c1=R(),l1=$r(),f1=c1("species");sf.exports=function(e){return l1>=51||!s1(function(){var r=[],t=r.constructor={};return t[f1]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var mr=i((u8,cf)=>{"use strict";var p1=N();cf.exports=p1([].slice)});var pf=i(()=>{"use strict";var v1=q(),lf=Ne(),d1=wt(),m1=$(),ff=_i(),h1=ve(),y1=Ae(),b1=Hr(),g1=Wr(),q1=R(),x1=St(),w1=mr(),S1=x1("slice"),E1=q1("species"),Ri=Array,T1=Math.max;v1({target:"Array",proto:!0,forced:!S1},{slice:function(r,t){var n=y1(this),a=h1(n),o=ff(r,a),u=ff(t===void 0?a:t,a),s,c,l;if(lf(n)&&(s=n.constructor,d1(s)&&(s===Ri||lf(s.prototype))?s=void 0:m1(s)&&(s=s[E1],s===null&&(s=void 0)),s===Ri||s===void 0))return w1(n,o,u);for(c=new(s===void 0?Ri:s)(T1(u-o,0)),l=0;o<u;o++,l++)o in n&&b1(c,l,n[o]);return g1(c,l),c}})});var ue=i((l8,vf)=>{"use strict";var C1=P(),O1=V();vf.exports=function(e,r){var t=O1[e+"Prototype"],n=t&&t[r];if(n)return n;var a=C1[e],o=a&&a.prototype;return o&&o[r]}});var mf=i((f8,df)=>{"use strict";pf();var k1=ue();df.exports=k1("Array","slice")});var yf=i((p8,hf)=>{"use strict";var I1=U(),_1=mf(),Ai=Array.prototype;hf.exports=function(e){var r=e.slice;return e===Ai||I1(Ai,e)&&r===Ai.slice?_1:r}});var gf=i((v8,bf)=>{"use strict";var P1=yf();bf.exports=P1});var xf=i((d8,qf)=>{"use strict";var R1=gf();qf.exports=R1});var Sf=i((m8,wf)=>{"use strict";var A1=xf();wf.exports=A1});var Ni=i((h8,Ef)=>{"use strict";Ef.exports=Sf()});var Kr=i((y8,Tf)=>{Tf.exports=Ni()});var Ze=i((b8,Cf)=>{"use strict";var N1=qt(),M1=String;Cf.exports=function(e){if(N1(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return M1(e)}});var _f=i((g8,If)=>{"use strict";var Mi=N(),j1=An(),L1=Ze(),$1=pr(),F1=Mi("".charAt),Of=Mi("".charCodeAt),D1=Mi("".slice),kf=function(e){return function(r,t){var n=L1($1(r)),a=j1(t),o=n.length,u,s;return a<0||a>=o?e?"":void 0:(u=Of(n,a),u<55296||u>56319||a+1===o||(s=Of(n,a+1))<56320||s>57343?e?F1(n,a):u:e?D1(n,a,a+2):(u-55296<<10)+(s-56320)+65536)}};If.exports={codeAt:kf(!1),charAt:kf(!0)}});var Af=i((q8,Rf)=>{"use strict";var B1=P(),G1=M(),Pf=B1.WeakMap;Rf.exports=G1(Pf)&&/native code/.test(String(Pf))});var Et=i((x8,Mf)=>{"use strict";var U1=dr(),H1=Dr(),Nf=U1("keys");Mf.exports=function(e){return Nf[e]||(Nf[e]=H1(e))}});var zr=i((w8,jf)=>{"use strict";jf.exports={}});var er=i((S8,Ff)=>{"use strict";var W1=Af(),$f=P(),K1=$(),z1=Ce(),ji=K(),Li=ht(),V1=Et(),Y1=zr(),Lf="Object already initialized",$i=$f.TypeError,J1=$f.WeakMap,Nn,Tt,Mn,Q1=function(e){return Mn(e)?Tt(e):Nn(e,{})},X1=function(e){return function(r){var t;if(!K1(r)||(t=Tt(r)).type!==e)throw new $i("Incompatible receiver, "+e+" required");return t}};W1||Li.state?(ge=Li.state||(Li.state=new J1),ge.get=ge.get,ge.has=ge.has,ge.set=ge.set,Nn=function(e,r){if(ge.has(e))throw new $i(Lf);return r.facade=e,ge.set(e,r),r},Tt=function(e){return ge.get(e)||{}},Mn=function(e){return ge.has(e)}):(hr=V1("state"),Y1[hr]=!0,Nn=function(e,r){if(ji(e,hr))throw new $i(Lf);return r.facade=e,z1(e,hr,r),r},Tt=function(e){return ji(e,hr)?e[hr]:{}},Mn=function(e){return ji(e,hr)});var ge,hr;Ff.exports={set:Nn,get:Tt,has:Mn,enforce:Q1,getterFor:X1}});var Gf=i((E8,Bf)=>{"use strict";var Fi=H(),Z1=K(),Df=Function.prototype,eI=Fi&&Object.getOwnPropertyDescriptor,Di=Z1(Df,"name"),rI=Di&&function(){}.name==="something",tI=Di&&(!Fi||Fi&&eI(Df,"name").configurable);Bf.exports={EXISTS:Di,PROPER:rI,CONFIGURABLE:tI}});var Bi=i((T8,Hf)=>{"use strict";var nI=Ae(),aI=_i(),iI=ve(),Uf=function(e){return function(r,t,n){var a=nI(r),o=iI(a);if(o===0)return!e&&-1;var u=aI(n,o),s;if(e&&t!==t){for(;o>u;)if(s=a[u++],s!==s)return!0}else for(;o>u;u++)if((e||u in a)&&a[u]===t)return e||u||0;return!e&&-1}};Hf.exports={includes:Uf(!0),indexOf:Uf(!1)}});var Ui=i((C8,Kf)=>{"use strict";var oI=N(),Gi=K(),uI=Ae(),sI=Bi().indexOf,cI=zr(),Wf=oI([].push);Kf.exports=function(e,r){var t=uI(e),n=0,a=[],o;for(o in t)!Gi(cI,o)&&Gi(t,o)&&Wf(a,o);for(;r.length>n;)Gi(t,o=r[n++])&&(~sI(a,o)||Wf(a,o));return a}});var jn=i((O8,zf)=>{"use strict";zf.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var Ln=i((k8,Vf)=>{"use strict";var lI=Ui(),fI=jn();Vf.exports=Object.keys||function(r){return lI(r,fI)}});var Hi=i(Yf=>{"use strict";var pI=H(),vI=wi(),dI=ne(),mI=X(),hI=Ae(),yI=Ln();Yf.f=pI&&!vI?Object.defineProperties:function(r,t){mI(r);for(var n=hI(t),a=yI(t),o=a.length,u=0,s;o>u;)dI.f(r,s=a[u++],n[s]);return r}});var Wi=i((_8,Jf)=>{"use strict";var bI=W();Jf.exports=bI("document","documentElement")});var rr=i((P8,np)=>{"use strict";var gI=X(),qI=Hi(),Qf=jn(),xI=zr(),wI=Wi(),SI=In(),EI=Et(),Xf=">",Zf="<",zi="prototype",Vi="script",rp=EI("IE_PROTO"),Ki=function(){},tp=function(e){return Zf+Vi+Xf+e+Zf+"/"+Vi+Xf},ep=function(e){e.write(tp("")),e.close();var r=e.parentWindow.Object;return e=null,r},TI=function(){var e=SI("iframe"),r="java"+Vi+":",t;return e.style.display="none",wI.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(tp("document.F=Object")),t.close(),t.F},$n,Fn=function(){try{$n=new ActiveXObject("htmlfile")}catch{}Fn=typeof document<"u"?document.domain&&$n?ep($n):TI():ep($n);for(var e=Qf.length;e--;)delete Fn[zi][Qf[e]];return Fn()};xI[rp]=!0;np.exports=Object.create||function(r,t){var n;return r!==null?(Ki[zi]=gI(r),n=new Ki,Ki[zi]=null,n[rp]=r):n=Fn(),t===void 0?n:qI.f(n,t)}});var Yi=i((R8,ap)=>{"use strict";var CI=_();ap.exports=!CI(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var Ct=i((A8,op)=>{"use strict";var OI=K(),kI=M(),II=te(),_I=Et(),PI=Yi(),ip=_I("IE_PROTO"),Ji=Object,RI=Ji.prototype;op.exports=PI?Ji.getPrototypeOf:function(e){var r=II(e);if(OI(r,ip))return r[ip];var t=r.constructor;return kI(t)&&r instanceof t?t.prototype:r instanceof Ji?RI:null}});var Me=i((N8,up)=>{"use strict";var AI=Ce();up.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:AI(e,r,t),e}});var eo=i((M8,lp)=>{"use strict";var NI=_(),MI=M(),jI=$(),LI=rr(),sp=Ct(),$I=Me(),FI=R(),DI=Z(),Zi=FI("iterator"),cp=!1,je,Qi,Xi;[].keys&&(Xi=[].keys(),"next"in Xi?(Qi=sp(sp(Xi)),Qi!==Object.prototype&&(je=Qi)):cp=!0);var BI=!jI(je)||NI(function(){var e={};return je[Zi].call(e)!==e});BI?je={}:DI&&(je=LI(je));MI(je[Zi])||$I(je,Zi,function(){return this});lp.exports={IteratorPrototype:je,BUGGY_SAFARI_ITERATORS:cp}});var pp=i((j8,fp)=>{"use strict";var GI=Pn(),UI=qt();fp.exports=GI?{}.toString:function(){return"[object "+UI(this)+"]"}});var Le=i((L8,dp)=>{"use strict";var HI=Pn(),WI=ne().f,KI=Ce(),zI=K(),VI=pp(),YI=R(),vp=YI("toStringTag");dp.exports=function(e,r,t,n){var a=t?e:e&&e.prototype;a&&(zI(a,vp)||WI(a,vp,{configurable:!0,value:r}),n&&!HI&&KI(a,"toString",VI))}});var yr=i(($8,mp)=>{"use strict";mp.exports={}});var yp=i((F8,hp)=>{"use strict";var JI=eo().IteratorPrototype,QI=rr(),XI=Qe(),ZI=Le(),e_=yr(),r_=function(){return this};hp.exports=function(e,r,t,n){var a=r+" Iterator";return e.prototype=QI(JI,{next:XI(+!n,t)}),ZI(e,a,!1,!0),e_[a]=r_,e}});var gp=i((D8,bp)=>{"use strict";var t_=N(),n_=D();bp.exports=function(e,r,t){try{return t_(n_(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var xp=i((B8,qp)=>{"use strict";var a_=$();qp.exports=function(e){return a_(e)||e===null}});var Sp=i((G8,wp)=>{"use strict";var i_=xp(),o_=String,u_=TypeError;wp.exports=function(e){if(i_(e))return e;throw new u_("Can't set "+o_(e)+" as a prototype")}});var Ot=i((U8,Ep)=>{"use strict";var s_=gp(),c_=$(),l_=pr(),f_=Sp();Ep.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=s_(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(a,o){return l_(a),f_(o),c_(a)&&(e?t(a,o):a.__proto__=o),a}}():void 0)});var Gn=i((H8,Np)=>{"use strict";var p_=q(),v_=G(),Dn=Z(),Rp=Gf(),d_=M(),m_=yp(),Tp=Ct(),Cp=Ot(),h_=Le(),y_=Ce(),ro=Me(),b_=R(),Op=yr(),Ap=eo(),g_=Rp.PROPER,q_=Rp.CONFIGURABLE,kp=Ap.IteratorPrototype,Bn=Ap.BUGGY_SAFARI_ITERATORS,kt=b_("iterator"),Ip="keys",It="values",_p="entries",Pp=function(){return this};Np.exports=function(e,r,t,n,a,o,u){m_(t,r,n);var s=function(y){if(y===a&&v)return v;if(!Bn&&y&&y in f)return f[y];switch(y){case Ip:return function(){return new t(this,y)};case It:return function(){return new t(this,y)};case _p:return function(){return new t(this,y)}}return function(){return new t(this)}},c=r+" Iterator",l=!1,f=e.prototype,p=f[kt]||f["@@iterator"]||a&&f[a],v=!Bn&&p||s(a),d=r==="Array"&&f.entries||p,h,m,x;if(d&&(h=Tp(d.call(new e)),h!==Object.prototype&&h.next&&(!Dn&&Tp(h)!==kp&&(Cp?Cp(h,kp):d_(h[kt])||ro(h,kt,Pp)),h_(h,c,!0,!0),Dn&&(Op[c]=Pp))),g_&&a===It&&p&&p.name!==It&&(!Dn&&q_?y_(f,"name",It):(l=!0,v=function(){return v_(p,this)})),a)if(m={values:s(It),keys:o?v:s(Ip),entries:s(_p)},u)for(x in m)(Bn||l||!(x in f))&&ro(f,x,m[x]);else p_({target:r,proto:!0,forced:Bn||l},m);return(!Dn||u)&&f[kt]!==v&&ro(f,kt,v,{name:a}),Op[r]=v,m}});var Un=i((W8,Mp)=>{"use strict";Mp.exports=function(e,r){return{value:e,done:r}}});var br=i(()=>{"use strict";var x_=_f().charAt,w_=Ze(),Lp=er(),S_=Gn(),jp=Un(),$p="String Iterator",E_=Lp.set,T_=Lp.getterFor($p);S_(String,"String",function(e){E_(this,{type:$p,string:w_(e),index:0})},function(){var r=T_(this),t=r.string,n=r.index,a;return n>=t.length?jp(void 0,!0):(a=x_(t,n),r.index+=a.length,jp(a,!1))})});var to=i((V8,Dp)=>{"use strict";var C_=G(),Fp=X(),O_=On();Dp.exports=function(e,r,t){var n,a;Fp(e);try{if(n=O_(e,"return"),!n){if(r==="throw")throw t;return t}n=C_(n,e)}catch(o){a=!0,n=o}if(r==="throw")throw t;if(a)throw n;return Fp(n),t}});var Gp=i((Y8,Bp)=>{"use strict";var k_=X(),I_=to();Bp.exports=function(e,r,t,n){try{return n?r(k_(t)[0],t[1]):r(t)}catch(a){I_(e,"throw",a)}}});var no=i((J8,Up)=>{"use strict";var __=R(),P_=yr(),R_=__("iterator"),A_=Array.prototype;Up.exports=function(e){return e!==void 0&&(P_.Array===e||A_[R_]===e)}});var _t=i((Q8,Wp)=>{"use strict";var N_=qt(),Hp=On(),M_=fr(),j_=yr(),L_=R(),$_=L_("iterator");Wp.exports=function(e){if(!M_(e))return Hp(e,$_)||Hp(e,"@@iterator")||j_[N_(e)]}});var Hn=i((X8,Kp)=>{"use strict";var F_=G(),D_=D(),B_=X(),G_=Xe(),U_=_t(),H_=TypeError;Kp.exports=function(e,r){var t=arguments.length<2?U_(e):r;if(D_(t))return B_(F_(t,e));throw new H_(G_(e)+" is not iterable")}});var Jp=i((Z8,Yp)=>{"use strict";var W_=Y(),K_=G(),z_=te(),V_=Gp(),Y_=no(),J_=wt(),Q_=ve(),zp=Hr(),X_=Wr(),Z_=Hn(),eP=_t(),Vp=Array;Yp.exports=function(r){var t=z_(r),n=J_(this),a=arguments.length,o=a>1?arguments[1]:void 0,u=o!==void 0;u&&(o=W_(o,a>2?arguments[2]:void 0));var s=eP(t),c=0,l,f,p,v,d,h;if(s&&!(this===Vp&&Y_(s)))for(f=n?new this:[],v=Z_(t,s),d=v.next;!(p=K_(d,v)).done;c++)h=u?V_(v,o,[p.value,c],!0):p.value,zp(f,c,h);else for(l=Q_(t),f=n?new this(l):Vp(l);l>c;c++)h=u?o(t[c],c):t[c],zp(f,c,h);return X_(f,c),f}});var io=i((eU,ev)=>{"use strict";var rP=R(),Xp=rP("iterator"),Zp=!1;try{Qp=0,ao={next:function(){return{done:!!Qp++}},return:function(){Zp=!0}},ao[Xp]=function(){return this},Array.from(ao,function(){throw 2})}catch{}var Qp,ao;ev.exports=function(e,r){try{if(!r&&!Zp)return!1}catch{return!1}var t=!1;try{var n={};n[Xp]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var rv=i(()=>{"use strict";var tP=q(),nP=Jp(),aP=io(),iP=!aP(function(e){Array.from(e)});tP({target:"Array",stat:!0,forced:iP},{from:nP})});var nv=i((nU,tv)=>{"use strict";br();rv();var oP=V();tv.exports=oP.Array.from});var iv=i((aU,av)=>{"use strict";var uP=nv();av.exports=uP});var uv=i((iU,ov)=>{"use strict";var sP=iv();ov.exports=sP});var cv=i((oU,sv)=>{"use strict";var cP=uv();sv.exports=cP});var oo=i((uU,lv)=>{"use strict";lv.exports=cv()});var Wn=i((sU,fv)=>{fv.exports=oo()});var Pt=i((cU,pv)=>{"use strict";var lP=TypeError,fP=9007199254740991;pv.exports=function(e){if(e>fP)throw lP("Maximum allowed index exceeded");return e}});var hv=i((lU,mv)=>{"use strict";var vv=Ne(),pP=wt(),vP=$(),dP=R(),mP=dP("species"),dv=Array;mv.exports=function(e){var r;return vv(e)&&(r=e.constructor,pP(r)&&(r===dv||vv(r.prototype))?r=void 0:vP(r)&&(r=r[mP],r===null&&(r=void 0))),r===void 0?dv:r}});var Kn=i((fU,yv)=>{"use strict";var hP=hv();yv.exports=function(e,r){return new(hP(e))(r===0?0:r)}});var uo=i(()=>{"use strict";var yP=q(),bP=_(),gP=Ne(),qP=$(),xP=te(),wP=ve(),bv=Pt(),gv=Hr(),SP=Wr(),EP=Kn(),TP=St(),CP=R(),OP=$r(),qv=CP("isConcatSpreadable"),kP=OP>=51||!bP(function(){var e=[];return e[qv]=!1,e.concat()[0]!==e}),IP=function(e){if(!qP(e))return!1;var r=e[qv];return r!==void 0?!!r:gP(e)},_P=!kP||!TP("concat");yP({target:"Array",proto:!0,arity:1,forced:_P},{concat:function(r){var t=xP(this),n=EP(t,0),a=0,o,u,s,c,l;for(o=-1,s=arguments.length;o<s;o++)if(l=o===-1?t:arguments[o],IP(l))for(c=wP(l),bv(a+c),u=0;u<c;u++,a++)u in l&&gv(n,a,l[u]);else bv(a+1),gv(n,a++,l);return SP(n,a),n}})});var Rt=i(()=>{});var At=i(xv=>{"use strict";var PP=Ui(),RP=jn(),AP=RP.concat("length","prototype");xv.f=Object.getOwnPropertyNames||function(r){return PP(r,AP)}});var so=i((yU,Ev)=>{"use strict";var NP=Te(),MP=Ae(),wv=At().f,jP=mr(),Sv=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],LP=function(e){try{return wv(e)}catch{return jP(Sv)}};Ev.exports.f=function(r){return Sv&&NP(r)==="Window"?LP(r):wv(MP(r))}});var zn=i(Tv=>{"use strict";Tv.f=Object.getOwnPropertySymbols});var Vn=i((gU,Cv)=>{"use strict";var $P=ne();Cv.exports=function(e,r,t){return $P.f(e,r,t)}});var Vr=i(Ov=>{"use strict";var FP=R();Ov.f=FP});var j=i((xU,Iv)=>{"use strict";var kv=V(),DP=K(),BP=Vr(),GP=ne().f;Iv.exports=function(e){var r=kv.Symbol||(kv.Symbol={});DP(r,e)||GP(r,e,{value:BP.f(e)})}});var co=i((wU,_v)=>{"use strict";var UP=G(),HP=W(),WP=R(),KP=Me();_v.exports=function(){var e=HP("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=WP("toPrimitive");r&&!r[n]&&KP(r,n,function(a){return UP(t,this)},{arity:1})}});var Nt=i((SU,Rv)=>{"use strict";var zP=Y(),VP=Tn(),YP=te(),JP=ve(),Pv=Kn(),lo=Hr(),tr=function(e){var r=e===1,t=e===2,n=e===3,a=e===4,o=e===6,u=e===7,s=e===5||o;return function(c,l,f){for(var p=YP(c),v=VP(p),d=JP(v),h=zP(l,f),m=0,x=0,y=r?Pv(c,d):t||u?Pv(c,0):void 0,g,O;d>m;m++)if((s||m in v)&&(g=v[m],O=h(g,m,p),e))if(r)lo(y,m,O);else if(O)switch(e){case 3:return!0;case 5:return g;case 6:return m;case 2:lo(y,x++,g)}else switch(e){case 4:return!1;case 7:lo(y,x++,g)}return o?-1:n||a?a:y}};Rv.exports={forEach:tr(0),map:tr(1),filter:tr(2),some:tr(3),every:tr(4),find:tr(5),findIndex:tr(6),filterReject:tr(7)}});var Yv=i(()=>{"use strict";var Yn=q(),Lt=P(),qo=G(),QP=N(),XP=Z(),Yr=H(),Jr=vr(),ZP=_(),z=K(),eR=U(),mo=X(),Jn=Ae(),xo=kn(),rR=Ze(),ho=Qe(),Qr=rr(),Mv=Ln(),tR=At(),jv=so(),nR=zn(),Lv=yt(),$v=ne(),aR=Hi(),Fv=ci(),fo=Me(),iR=Vn(),wo=dr(),oR=Et(),Dv=zr(),Av=Dr(),uR=R(),sR=Vr(),cR=j(),lR=co(),fR=Le(),Bv=er(),Qn=Nt().forEach,ae=oR("hidden"),Xn="Symbol",jt="prototype",pR=Bv.set,Nv=Bv.getterFor(Xn),de=Object[jt],gr=Lt.Symbol,Mt=gr&&gr[jt],vR=Lt.RangeError,dR=Lt.TypeError,po=Lt.QObject,Gv=Lv.f,qr=$v.f,Uv=jv.f,mR=Fv.f,Hv=QP([].push),$e=wo("symbols"),$t=wo("op-symbols"),hR=wo("wks"),yo=!po||!po[jt]||!po[jt].findChild,Wv=function(e,r,t){var n=Gv(de,r);n&&delete de[r],qr(e,r,t),n&&e!==de&&qr(de,r,n)},bo=Yr&&ZP(function(){return Qr(qr({},"a",{get:function(){return qr(this,"a",{value:7}).a}})).a!==7})?Wv:qr,vo=function(e,r){var t=$e[e]=Qr(Mt);return pR(t,{type:Xn,tag:e,description:r}),Yr||(t.description=r),t},Zn=function(r,t,n){r===de&&Zn($t,t,n),mo(r);var a=xo(t);return mo(n),z($e,a)?(n.enumerable?(z(r,ae)&&r[ae][a]&&(r[ae][a]=!1),n=Qr(n,{enumerable:ho(0,!1)})):(z(r,ae)||qr(r,ae,ho(1,Qr(null))),r[ae][a]=!0),bo(r,a,n)):qr(r,a,n)},So=function(r,t){mo(r);var n=Jn(t),a=Mv(n).concat(Vv(n));return Qn(a,function(o){(!Yr||qo(go,n,o))&&Zn(r,o,n[o])}),r},yR=function(r,t){return t===void 0?Qr(r):So(Qr(r),t)},go=function(r){var t=xo(r),n=qo(mR,this,t);return this===de&&z($e,t)&&!z($t,t)?!1:n||!z(this,t)||!z($e,t)||z(this,ae)&&this[ae][t]?n:!0},Kv=function(r,t){var n=Jn(r),a=xo(t);if(!(n===de&&z($e,a)&&!z($t,a))){var o=Gv(n,a);return o&&z($e,a)&&!(z(n,ae)&&n[ae][a])&&(o.enumerable=!0),o}},zv=function(r){var t=Uv(Jn(r)),n=[];return Qn(t,function(a){!z($e,a)&&!z(Dv,a)&&Hv(n,a)}),n},Vv=function(e){var r=e===de,t=Uv(r?$t:Jn(e)),n=[];return Qn(t,function(a){z($e,a)&&(!r||z(de,a))&&Hv(n,$e[a])}),n};Jr||(gr=function(){if(eR(Mt,this))throw new dR("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:rR(arguments[0]),t=Av(r),n=function(a){var o=this===void 0?Lt:this;o===de&&qo(n,$t,a),z(o,ae)&&z(o[ae],t)&&(o[ae][t]=!1);var u=ho(1,a);try{bo(o,t,u)}catch(s){if(!(s instanceof vR))throw s;Wv(o,t,u)}};return Yr&&yo&&bo(de,t,{configurable:!0,set:n}),vo(t,r)},Mt=gr[jt],fo(Mt,"toString",function(){return Nv(this).tag}),fo(gr,"withoutSetter",function(e){return vo(Av(e),e)}),Fv.f=go,$v.f=Zn,aR.f=So,Lv.f=Kv,tR.f=jv.f=zv,nR.f=Vv,sR.f=function(e){return vo(uR(e),e)},Yr&&(iR(Mt,"description",{configurable:!0,get:function(){return Nv(this).description}}),XP||fo(de,"propertyIsEnumerable",go,{unsafe:!0})));Yn({global:!0,constructor:!0,wrap:!0,forced:!Jr,sham:!Jr},{Symbol:gr});Qn(Mv(hR),function(e){cR(e)});Yn({target:Xn,stat:!0,forced:!Jr},{useSetter:function(){yo=!0},useSimple:function(){yo=!1}});Yn({target:"Object",stat:!0,forced:!Jr,sham:!Yr},{create:yR,defineProperty:Zn,defineProperties:So,getOwnPropertyDescriptor:Kv});Yn({target:"Object",stat:!0,forced:!Jr},{getOwnPropertyNames:zv});lR();fR(gr,Xn);Dv[ae]=!0});var Eo=i((CU,Jv)=>{"use strict";var bR=vr();Jv.exports=bR&&!!Symbol.for&&!!Symbol.keyFor});var Xv=i(()=>{"use strict";var gR=q(),qR=W(),xR=K(),wR=Ze(),Qv=dr(),SR=Eo(),To=Qv("string-to-symbol-registry"),ER=Qv("symbol-to-string-registry");gR({target:"Symbol",stat:!0,forced:!SR},{for:function(e){var r=wR(e);if(xR(To,r))return To[r];var t=qR("Symbol")(r);return To[r]=t,ER[t]=r,t}})});var ed=i(()=>{"use strict";var TR=q(),CR=K(),OR=Fr(),kR=Xe(),IR=dr(),_R=Eo(),Zv=IR("symbol-to-string-registry");TR({target:"Symbol",stat:!0,forced:!_R},{keyFor:function(r){if(!OR(r))throw new TypeError(kR(r)+" is not a symbol");if(CR(Zv,r))return Zv[r]}})});var td=i((PU,rd)=>{"use strict";var PR=$(),RR=er().get;rd.exports=function(r){if(!PR(r))return!1;var t=RR(r);return!!t&&t.type==="RawJSON"}});var ud=i((RU,od)=>{"use strict";var Co=N(),AR=K(),ea=SyntaxError,NR=parseInt,MR=String.fromCharCode,jR=Co("".charAt),nd=Co("".slice),ad=Co(/./.exec),id={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},LR=/^[\da-f]{4}$/i,$R=/^[\u0000-\u001F]$/;od.exports=function(e,r){for(var t=!0,n="";r<e.length;){var a=jR(e,r);if(a==="\\"){var o=nd(e,r,r+2);if(AR(id,o))n+=id[o],r+=2;else if(o==="\\u"){r+=2;var u=nd(e,r,r+4);if(!ad(LR,u))throw new ea("Bad Unicode escape at: "+r);n+=MR(NR(u,16)),r+=4}else throw new ea('Unknown escape sequence: "'+o+'"')}else if(a==='"'){t=!1,r++;break}else{if(ad($R,a))throw new ea("Bad control character in string literal at: "+r);n+=a,r++}}if(t)throw new ea("Unterminated string at: "+r);return{value:n,end:r}}});var cd=i((AU,sd)=>{"use strict";var FR=_();sd.exports=!FR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var Sd=i(()=>{"use strict";var DR=q(),yd=W(),BR=jr(),bd=G(),xr=N(),gd=_(),ld=Ne(),ta=M(),GR=td(),fd=Fr(),pd=Te(),UR=Ze(),HR=mr(),WR=ud(),KR=Dr(),zR=vr(),Oo=cd(),qd=String,nr=yd("JSON","stringify"),ra=xr(/./.exec),Io=xr("".charAt),VR=xr("".charCodeAt),YR=xr("".replace),ko=xr("".slice),_o=xr([].push),JR=xr(1.1.toString),QR=/[\uD800-\uDFFF]/g,vd=/^[\uD800-\uDBFF]$/,dd=/^[\uDC00-\uDFFF]$/,Po=KR(),md=Po.length,xd=!zR||gd(function(){var e=yd("Symbol")("stringify detection");return nr([e])!=="[null]"||nr({a:e})!=="{}"||nr(Object(e))!=="{}"}),hd=gd(function(){return nr("\uDF06\uD834")!=='"\\udf06\\ud834"'||nr("\uDEAD")!=='"\\udead"'}),XR=xd?function(e,r){var t=HR(arguments),n=wd(r);if(!(!ta(n)&&(e===void 0||fd(e))))return t[1]=function(a,o){if(ta(n)&&(o=bd(n,this,qd(a),o)),!fd(o))return o},BR(nr,null,t)}:nr,ZR=function(e,r,t){var n=Io(t,r-1),a=Io(t,r+1);return ra(vd,e)&&!ra(dd,a)||ra(dd,e)&&!ra(vd,n)?"\\u"+JR(VR(e,0),16):e},wd=function(e){if(ta(e))return e;if(ld(e)){for(var r=e.length,t=[],n=0;n<r;n++){var a=e[n];typeof a=="string"?_o(t,a):(typeof a=="number"||pd(a)==="Number"||pd(a)==="String")&&_o(t,UR(a))}var o=t.length,u=!0;return function(s,c){if(u)return u=!1,c;if(ld(this))return c;for(var l=0;l<o;l++)if(t[l]===s)return c}}};nr&&DR({target:"JSON",stat:!0,arity:3,forced:xd||hd||!Oo},{stringify:function(r,t,n){var a=wd(t),o=[],u=XR(r,function(d,h){var m=ta(a)?bd(a,this,qd(d),h):h;return!Oo&&GR(m)?Po+(_o(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(hd&&(u=YR(u,QR,ZR)),Oo))return u;for(var s="",c=u.length,l=0;l<c;l++){var f=Io(u,l);if(f==='"'){var p=WR(u,++l).end-1,v=ko(u,l,p);s+=ko(v,0,md)===Po?o[ko(v,md)]:'"'+v+'"',l=p}else s+=f}return s}})});var Td=i(()=>{"use strict";var eA=q(),rA=vr(),tA=_(),Ed=zn(),nA=te(),aA=!rA||tA(function(){Ed.f(1)});eA({target:"Object",stat:!0,forced:aA},{getOwnPropertySymbols:function(r){var t=Ed.f;return t?t(nA(r)):[]}})});var Cd=i(()=>{"use strict";Yv();Xv();ed();Sd();Td()});var Ro=i(()=>{"use strict";var iA=j();iA("asyncDispose")});var Ao=i(()=>{"use strict";var oA=j();oA("asyncIterator")});var Od=i(()=>{});var No=i(()=>{"use strict";var uA=j();uA("dispose")});var kd=i(()=>{"use strict";var sA=j();sA("hasInstance")});var Id=i(()=>{"use strict";var cA=j();cA("isConcatSpreadable")});var Mo=i(()=>{"use strict";var lA=j();lA("iterator")});var _d=i(()=>{"use strict";var fA=j();fA("match")});var Pd=i(()=>{"use strict";var pA=j();pA("matchAll")});var Rd=i(()=>{"use strict";var vA=j();vA("replace")});var Ad=i(()=>{"use strict";var dA=j();dA("search")});var Nd=i(()=>{"use strict";var mA=j();mA("species")});var Md=i(()=>{"use strict";var hA=j();hA("split")});var jo=i(()=>{"use strict";var yA=j(),bA=co();yA("toPrimitive");bA()});var jd=i(()=>{"use strict";var gA=W(),qA=j(),xA=Le();qA("toStringTag");xA(gA("Symbol"),"Symbol")});var Ld=i(()=>{"use strict";var wA=j();wA("unscopables")});var $d=i(()=>{"use strict";var SA=P(),EA=Le();EA(SA.JSON,"JSON",!0)});var Fd=i(()=>{});var Dd=i(()=>{});var Gd=i((EH,Bd)=>{"use strict";uo();Rt();Cd();Ro();Ao();Od();No();kd();Id();Mo();_d();Pd();Rd();Ad();Nd();Md();jo();jd();Ld();$d();Fd();Dd();var TA=V();Bd.exports=TA.Symbol});var Lo=i((TH,Ud)=>{"use strict";Ud.exports=function(){}});var wr=i((CH,Vd)=>{"use strict";var CA=Ae(),$o=Lo(),Hd=yr(),Kd=er(),OA=ne().f,kA=Gn(),na=Un(),IA=Z(),_A=H(),zd="Array Iterator",PA=Kd.set,RA=Kd.getterFor(zd);Vd.exports=kA(Array,"Array",function(e,r){PA(this,{type:zd,target:CA(e),index:0,kind:r})},function(){var e=RA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,na(void 0,!0);switch(e.kind){case"keys":return na(t,!1);case"values":return na(r[t],!1)}return na([t,r[t]],!1)},"values");var Wd=Hd.Arguments=Hd.Array;$o("keys");$o("values");$o("entries");if(!IA&&_A&&Wd.name!=="values")try{OA(Wd,"name",{value:"values"})}catch{}});var Jd=i((OH,Yd)=>{"use strict";Yd.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var Sr=i(()=>{"use strict";wr();var AA=Jd(),NA=P(),MA=Le(),Qd=yr();for(aa in AA)MA(NA[aa],aa),Qd[aa]=Qd.Array;var aa});var Zd=i((_H,Xd)=>{"use strict";var jA=Gd();Sr();Xd.exports=jA});var tm=i(()=>{"use strict";var LA=R(),$A=ne().f,em=LA("metadata"),rm=Function.prototype;rm[em]===void 0&&$A(rm,em,{value:null})});var nm=i(()=>{"use strict";Ro()});var am=i(()=>{"use strict";No()});var im=i(()=>{"use strict";var FA=j();FA("metadata")});var um=i((FH,om)=>{"use strict";var DA=Zd();tm();nm();am();im();om.exports=DA});var Do=i((DH,sm)=>{"use strict";var BA=W(),GA=N(),Fo=BA("Symbol"),UA=Fo.keyFor,HA=GA(Fo.prototype.valueOf);sm.exports=Fo.isRegisteredSymbol||function(r){try{return UA(HA(r))!==void 0}catch{return!1}}});var cm=i(()=>{"use strict";var WA=q(),KA=Do();WA({target:"Symbol",stat:!0},{isRegisteredSymbol:KA})});var Uo=i((UH,mm)=>{"use strict";var zA=dr(),vm=W(),VA=N(),YA=Fr(),JA=R(),oa=vm("Symbol"),lm=oa.isWellKnownSymbol,dm=vm("Object","getOwnPropertyNames"),QA=VA(oa.prototype.valueOf),fm=zA("wks");for(ia=0,Bo=dm(oa),pm=Bo.length;ia<pm;ia++)try{Go=Bo[ia],YA(oa[Go])&&JA(Go)}catch{}var Go,ia,Bo,pm;mm.exports=function(r){if(lm&&lm(r))return!0;try{for(var t=QA(r),n=0,a=dm(fm),o=a.length;n<o;n++)if(fm[a[n]]==t)return!0}catch{}return!1}});var hm=i(()=>{"use strict";var XA=q(),ZA=Uo();XA({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:ZA})});var ym=i(()=>{"use strict";var e2=j();e2("customMatcher")});var bm=i(()=>{"use strict";var r2=j();r2("observable")});var gm=i(()=>{"use strict";var t2=q(),n2=Do();t2({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:n2})});var qm=i(()=>{"use strict";var a2=q(),i2=Uo();a2({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:i2})});var xm=i(()=>{"use strict";var o2=j();o2("matcher")});var wm=i(()=>{"use strict";var u2=j();u2("metadataKey")});var Sm=i(()=>{"use strict";var s2=j();s2("patternMatch")});var Em=i(()=>{"use strict";var c2=j();c2("replaceAll")});var Cm=i((sW,Tm)=>{"use strict";var l2=um();cm();hm();ym();bm();gm();qm();xm();wm();Sm();Em();Tm.exports=l2});var Oe=i((cW,Om)=>{"use strict";Om.exports=Cm()});var ua=i((lW,km)=>{km.exports=Oe()});var _m=i((fW,Im)=>{"use strict";wr();br();var f2=_t();Im.exports=f2});var Rm=i((pW,Pm)=>{"use strict";var p2=_m();Sr();Pm.exports=p2});var Nm=i((vW,Am)=>{"use strict";var v2=Rm();Am.exports=v2});var jm=i((dW,Mm)=>{"use strict";var d2=Nm();Mm.exports=d2});var Ho=i((mW,Lm)=>{"use strict";Lm.exports=jm()});var sa=i((hW,$m)=>{$m.exports=Ho()});var Dm=i((yW,Fm)=>{"use strict";wr();br();var m2=Hn();Fm.exports=m2});var Gm=i((bW,Bm)=>{"use strict";var h2=Dm();Sr();Bm.exports=h2});var Hm=i((gW,Um)=>{"use strict";var y2=Gm();Um.exports=y2});var Km=i((qW,Wm)=>{"use strict";var b2=Hm();Wm.exports=b2});var Vm=i((xW,zm)=>{"use strict";zm.exports=Km()});var ca=i((wW,Ym)=>{Ym.exports=Vm()});var Qm=i((SW,Jm)=>{"use strict";var g2=W(),q2=N(),x2=At(),w2=zn(),S2=X(),E2=q2([].concat);Jm.exports=g2("Reflect","ownKeys")||function(r){var t=x2.f(S2(r)),n=w2.f;return n?E2(t,n(r)):t}});var eh=i((EW,Zm)=>{"use strict";var Xm=K(),T2=Qm(),C2=yt(),O2=ne();Zm.exports=function(e,r,t){for(var n=T2(r),a=O2.f,o=C2.f,u=0;u<n.length;u++){var s=n[u];!Xm(e,s)&&!(t&&Xm(t,s))&&a(e,s,o(r,s))}}});var th=i((TW,rh)=>{"use strict";var k2=$(),I2=Ce();rh.exports=function(e,r){k2(r)&&"cause"in r&&I2(e,"cause",r.cause)}});var oh=i((CW,ih)=>{"use strict";var _2=N(),nh=Error,P2=_2("".replace),R2=function(e){return String(new nh(e).stack)}("zxcasd"),ah=/\n\s*at [^:]*:[^\n]*/,A2=ah.test(R2);ih.exports=function(e,r){if(A2&&typeof e=="string"&&!nh.prepareStackTrace)for(;r--;)e=P2(e,ah,"");return e}});var sh=i((OW,uh)=>{"use strict";var N2=_(),M2=Qe();uh.exports=!N2(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",M2(1,7)),e.stack!==7):!0})});var fh=i((kW,lh)=>{"use strict";var j2=Ce(),L2=oh(),$2=sh(),ch=Error.captureStackTrace;lh.exports=function(e,r,t,n){$2&&(ch?ch(e,r):j2(e,"stack",L2(t,n)))}});var me=i((IW,mh)=>{"use strict";var F2=Y(),D2=G(),B2=X(),G2=Xe(),U2=no(),H2=ve(),ph=U(),W2=Hn(),K2=_t(),vh=to(),z2=TypeError,la=function(e,r){this.stopped=e,this.result=r},dh=la.prototype;mh.exports=function(e,r,t){var n=t&&t.that,a=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),s=!!(t&&t.INTERRUPTED),c=F2(r,n),l,f,p,v,d,h,m,x=function(g){return l&&vh(l,"normal"),new la(!0,g)},y=function(g){return a?(B2(g),s?c(g[0],g[1],x):c(g[0],g[1])):s?c(g,x):c(g)};if(o)l=e.iterator;else if(u)l=e;else{if(f=K2(e),!f)throw new z2(G2(e)+" is not iterable");if(U2(f)){for(p=0,v=H2(e);v>p;p++)if(d=y(e[p]),d&&ph(dh,d))return d;return new la(!1)}l=W2(e,f)}for(h=o?e.next:l.next;!(m=D2(h,l)).done;){try{d=y(m.value)}catch(g){vh(l,"throw",g)}if(typeof d=="object"&&d&&ph(dh,d))return d}return new la(!1)}});var yh=i((_W,hh)=>{"use strict";var V2=Ze();hh.exports=function(e,r){return e===void 0?arguments.length<2?"":r:V2(e)}});var gh=i(()=>{"use strict";var Y2=q(),J2=U(),Q2=Ct(),fa=Ot(),X2=eh(),bh=rr(),Wo=Ce(),Ko=Qe(),Z2=th(),eN=fh(),rN=me(),tN=yh(),nN=R(),aN=nN("toStringTag"),pa=Error,iN=[].push,Xr=function(r,t){var n=J2(zo,this),a;fa?a=fa(new pa,n?Q2(this):zo):(a=n?this:bh(zo),Wo(a,aN,"Error")),t!==void 0&&Wo(a,"message",tN(t)),eN(a,Xr,a.stack,1),arguments.length>2&&Z2(a,arguments[2]);var o=[];return rN(r,iN,{that:o}),Wo(a,"errors",o),a};fa?fa(Xr,pa):X2(Xr,pa,{name:!0});var zo=Xr.prototype=bh(pa.prototype,{constructor:Ko(1,Xr),message:Ko(1,""),name:Ko(1,"AggregateError")});Y2({global:!0,constructor:!0,arity:2},{AggregateError:Xr})});var Vo=i(()=>{"use strict";gh()});var Yo=i((MW,qh)=>{"use strict";var Ft=P(),oN=Lr(),uN=Te(),va=function(e){return oN.slice(0,e.length)===e};qh.exports=function(){return va("Bun/")?"BUN":va("Cloudflare-Workers")?"CLOUDFLARE":va("Deno/")?"DENO":va("Node.js/")?"NODE":Ft.Bun&&typeof Bun.version=="string"?"BUN":Ft.Deno&&typeof Deno.version=="object"?"DENO":uN(Ft.process)==="process"?"NODE":Ft.window&&Ft.document?"BROWSER":"REST"}()});var Dt=i((jW,xh)=>{"use strict";var sN=Yo();xh.exports=sN==="NODE"});var Jo=i((LW,Sh)=>{"use strict";var cN=W(),lN=Vn(),fN=R(),pN=H(),wh=fN("species");Sh.exports=function(e){var r=cN(e);pN&&r&&!r[wh]&&lN(r,wh,{configurable:!0,get:function(){return this}})}});var da=i(($W,Eh)=>{"use strict";var vN=U(),dN=TypeError;Eh.exports=function(e,r){if(vN(r,e))return e;throw new dN("Incorrect invocation")}});var Qo=i((FW,Th)=>{"use strict";var mN=wt(),hN=Xe(),yN=TypeError;Th.exports=function(e){if(mN(e))return e;throw new yN(hN(e)+" is not a constructor")}});var Xo=i((DW,Oh)=>{"use strict";var Ch=X(),bN=Qo(),gN=fr(),qN=R(),xN=qN("species");Oh.exports=function(e,r){var t=Ch(e).constructor,n;return t===void 0||gN(n=Ch(t)[xN])?r:bN(n)}});var Ih=i((BW,kh)=>{"use strict";var wN=TypeError;kh.exports=function(e,r){if(e<r)throw new wN("Not enough arguments");return e}});var Zo=i((GW,_h)=>{"use strict";var SN=Lr();_h.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(SN)});var su=i((UW,Fh)=>{"use strict";var se=P(),EN=jr(),TN=Y(),Ph=M(),CN=K(),$h=_(),Rh=Wi(),ON=mr(),Ah=In(),kN=Ih(),IN=Zo(),_N=Dt(),iu=se.setImmediate,ou=se.clearImmediate,PN=se.process,eu=se.Dispatch,RN=se.Function,Nh=se.MessageChannel,AN=se.String,ru=0,Bt={},Mh="onreadystatechange",Gt,Er,tu,nu;$h(function(){Gt=se.location});var uu=function(e){if(CN(Bt,e)){var r=Bt[e];delete Bt[e],r()}},au=function(e){return function(){uu(e)}},jh=function(e){uu(e.data)},Lh=function(e){se.postMessage(AN(e),Gt.protocol+"//"+Gt.host)};(!iu||!ou)&&(iu=function(r){kN(arguments.length,1);var t=Ph(r)?r:RN(r),n=ON(arguments,1);return Bt[++ru]=function(){EN(t,void 0,n)},Er(ru),ru},ou=function(r){delete Bt[r]},_N?Er=function(e){PN.nextTick(au(e))}:eu&&eu.now?Er=function(e){eu.now(au(e))}:Nh&&!IN?(tu=new Nh,nu=tu.port2,tu.port1.onmessage=jh,Er=TN(nu.postMessage,nu)):se.addEventListener&&Ph(se.postMessage)&&!se.importScripts&&Gt&&Gt.protocol!=="file:"&&!$h(Lh)?(Er=Lh,se.addEventListener("message",jh,!1)):Mh in Ah("script")?Er=function(e){Rh.appendChild(Ah("script"))[Mh]=function(){Rh.removeChild(this),uu(e)}}:Er=function(e){setTimeout(au(e),0)});Fh.exports={set:iu,clear:ou}});var Gh=i((HW,Bh)=>{"use strict";var Dh=P(),NN=H(),MN=Object.getOwnPropertyDescriptor;Bh.exports=function(e){if(!NN)return Dh[e];var r=MN(Dh,e);return r&&r.value}});var cu=i((WW,Hh)=>{"use strict";var Uh=function(){this.head=null,this.tail=null};Uh.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Hh.exports=Uh});var Kh=i((KW,Wh)=>{"use strict";var jN=Lr();Wh.exports=/ipad|iphone|ipod/i.test(jN)&&typeof Pebble<"u"});var Vh=i((zW,zh)=>{"use strict";var LN=Lr();zh.exports=/web0s(?!.*chrome)/i.test(LN)});var ry=i((VW,ey)=>{"use strict";var et=P(),$N=Gh(),Yh=Y(),lu=su().set,FN=cu(),DN=Zo(),BN=Kh(),GN=Vh(),fu=Dt(),Jh=et.MutationObserver||et.WebKitMutationObserver,Qh=et.document,Xh=et.process,ma=et.Promise,du=$N("queueMicrotask"),Zr,pu,vu,ha,Zh;du||(Ut=new FN,Ht=function(){var e,r;for(fu&&(e=Xh.domain)&&e.exit();r=Ut.get();)try{r()}catch(t){throw Ut.head&&Zr(),t}e&&e.enter()},!DN&&!fu&&!GN&&Jh&&Qh?(pu=!0,vu=Qh.createTextNode(""),new Jh(Ht).observe(vu,{characterData:!0}),Zr=function(){vu.data=pu=!pu}):!BN&&ma&&ma.resolve?(ha=ma.resolve(void 0),ha.constructor=ma,Zh=Yh(ha.then,ha),Zr=function(){Zh(Ht)}):fu?Zr=function(){Xh.nextTick(Ht)}:(lu=Yh(lu,et),Zr=function(){lu(Ht)}),du=function(e){Ut.head||Zr(),Ut.add(e)});var Ut,Ht;ey.exports=du});var ny=i((YW,ty)=>{"use strict";ty.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var Tr=i((JW,ay)=>{"use strict";ay.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var Cr=i((QW,iy)=>{"use strict";var UN=P();iy.exports=UN.Promise});var rt=i((XW,cy)=>{"use strict";var HN=P(),Wt=Cr(),WN=M(),KN=xi(),zN=ki(),VN=R(),oy=Yo(),YN=Z(),mu=$r(),uy=Wt&&Wt.prototype,JN=VN("species"),hu=!1,sy=WN(HN.PromiseRejectionEvent),QN=KN("Promise",function(){var e=zN(Wt),r=e!==String(Wt);if(!r&&mu===66||YN&&!(uy.catch&&uy.finally))return!0;if(!mu||mu<51||!/native code/.test(e)){var t=new Wt(function(o){o(1)}),n=function(o){o(function(){},function(){})},a=t.constructor={};if(a[JN]=n,hu=t.then(function(){})instanceof n,!hu)return!0}return!r&&(oy==="BROWSER"||oy==="DENO")&&!sy});cy.exports={CONSTRUCTOR:QN,REJECTION_EVENT:sy,SUBCLASSING:hu}});var ke=i((ZW,fy)=>{"use strict";var ly=D(),XN=TypeError,ZN=function(e){var r,t;this.promise=new e(function(n,a){if(r!==void 0||t!==void 0)throw new XN("Bad Promise constructor");r=n,t=a}),this.resolve=ly(r),this.reject=ly(t)};fy.exports.f=function(e){return new ZN(e)}});var Py=i(()=>{"use strict";var eM=q(),rM=Z(),qa=Dt(),ar=P(),tM=V(),it=G(),py=Me(),vy=Ot(),nM=Le(),aM=Jo(),iM=D(),ga=M(),oM=$(),uM=da(),sM=Xo(),by=su().set,xu=ry(),cM=ny(),lM=Tr(),fM=cu(),gy=er(),xa=Cr(),wu=rt(),qy=ke(),wa="Promise",xy=wu.CONSTRUCTOR,pM=wu.REJECTION_EVENT,vM=wu.SUBCLASSING,yu=gy.getterFor(wa),dM=gy.set,tt=xa&&xa.prototype,Or=xa,ya=tt,wy=ar.TypeError,bu=ar.document,Su=ar.process,gu=qy.f,mM=gu,hM=!!(bu&&bu.createEvent&&ar.dispatchEvent),Sy="unhandledrejection",yM="rejectionhandled",dy=0,Ey=1,bM=2,Eu=1,Ty=2,ba,my,Cy,hy,Oy=function(e){var r;return oM(e)&&ga(r=e.then)?r:!1},ky=function(e,r){var t=r.value,n=r.state===Ey,a=n?e.ok:e.fail,o=e.resolve,u=e.reject,s=e.domain,c,l,f;try{a?(n||(r.rejection===Ty&&qM(r),r.rejection=Eu),a===!0?c=t:(s&&s.enter(),c=a(t),s&&(s.exit(),f=!0)),c===e.promise?u(new wy("Promise-chain cycle")):(l=Oy(c))?it(l,c,o,u):o(c)):u(t)}catch(p){s&&!f&&s.exit(),u(p)}},Iy=function(e,r){e.notified||(e.notified=!0,xu(function(){for(var t=e.reactions,n;n=t.get();)ky(n,e);e.notified=!1,r&&!e.rejection&&gM(e)}))},_y=function(e,r,t){var n,a;hM?(n=bu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),ar.dispatchEvent(n)):n={promise:r,reason:t},!pM&&(a=ar["on"+e])?a(n):e===Sy&&cM("Unhandled promise rejection",t)},gM=function(e){it(by,ar,function(){var r=e.facade,t=e.value,n=yy(e),a;if(n&&(a=lM(function(){qa?Su.emit("unhandledRejection",t,r):_y(Sy,r,t)}),e.rejection=qa||yy(e)?Ty:Eu,a.error))throw a.value})},yy=function(e){return e.rejection!==Eu&&!e.parent},qM=function(e){it(by,ar,function(){var r=e.facade;qa?Su.emit("rejectionHandled",r):_y(yM,r,e.value)})},nt=function(e,r,t){return function(n){e(r,n,t)}},at=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=bM,Iy(e,!0))},qu=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new wy("Promise can't be resolved itself");var n=Oy(r);n?xu(function(){var a={done:!1};try{it(n,r,nt(qu,a,e),nt(at,a,e))}catch(o){at(a,o,e)}}):(e.value=r,e.state=Ey,Iy(e,!1))}catch(a){at({done:!1},a,e)}}};if(xy&&(Or=function(r){uM(this,ya),iM(r),it(ba,this);var t=yu(this);try{r(nt(qu,t),nt(at,t))}catch(n){at(t,n)}},ya=Or.prototype,ba=function(r){dM(this,{type:wa,done:!1,notified:!1,parent:!1,reactions:new fM,rejection:!1,state:dy,value:null})},ba.prototype=py(ya,"then",function(r,t){var n=yu(this),a=gu(sM(this,Or));return n.parent=!0,a.ok=ga(r)?r:!0,a.fail=ga(t)&&t,a.domain=qa?Su.domain:void 0,n.state===dy?n.reactions.add(a):xu(function(){ky(a,n)}),a.promise}),my=function(){var e=new ba,r=yu(e);this.promise=e,this.resolve=nt(qu,r),this.reject=nt(at,r)},qy.f=gu=function(e){return e===Or||e===Cy?new my(e):mM(e)},!rM&&ga(xa)&&tt!==Object.prototype)){hy=tt.then,vM||py(tt,"then",function(r,t){var n=this;return new Or(function(a,o){it(hy,n,a,o)}).then(r,t)},{unsafe:!0});try{delete tt.constructor}catch{}vy&&vy(tt,ya)}eM({global:!0,constructor:!0,wrap:!0,forced:xy},{Promise:Or});Cy=tM.Promise;nM(Or,wa,!1,!0);aM(wa)});var Kt=i((tK,Ry)=>{"use strict";var xM=Cr(),wM=io(),SM=rt().CONSTRUCTOR;Ry.exports=SM||!wM(function(e){xM.all(e).then(void 0,function(){})})});var Ay=i(()=>{"use strict";var EM=q(),TM=G(),CM=D(),OM=ke(),kM=Tr(),IM=me(),_M=Kt();EM({target:"Promise",stat:!0,forced:_M},{all:function(r){var t=this,n=OM.f(t),a=n.resolve,o=n.reject,u=kM(function(){var s=CM(t.resolve),c=[],l=0,f=1;IM(r,function(p){var v=l++,d=!1;f++,TM(s,t,p).then(function(h){d||(d=!0,c[v]=h,--f||a(c))},o)}),--f||a(c)});return u.error&&o(u.value),n.promise}})});var My=i(()=>{"use strict";var PM=q(),RM=Z(),AM=rt().CONSTRUCTOR,Cu=Cr(),NM=W(),MM=M(),jM=Me(),Ny=Cu&&Cu.prototype;PM({target:"Promise",proto:!0,forced:AM,real:!0},{catch:function(e){return this.then(void 0,e)}});!RM&&MM(Cu)&&(Tu=NM("Promise").prototype.catch,Ny.catch!==Tu&&jM(Ny,"catch",Tu,{unsafe:!0}));var Tu});var jy=i(()=>{"use strict";var LM=q(),$M=G(),FM=D(),DM=ke(),BM=Tr(),GM=me(),UM=Kt();LM({target:"Promise",stat:!0,forced:UM},{race:function(r){var t=this,n=DM.f(t),a=n.reject,o=BM(function(){var u=FM(t.resolve);GM(r,function(s){$M(u,t,s).then(n.resolve,a)})});return o.error&&a(o.value),n.promise}})});var Ly=i(()=>{"use strict";var HM=q(),WM=ke(),KM=rt().CONSTRUCTOR;HM({target:"Promise",stat:!0,forced:KM},{reject:function(r){var t=WM.f(this),n=t.reject;return n(r),t.promise}})});var Ou=i((fK,$y)=>{"use strict";var zM=X(),VM=$(),YM=ke();$y.exports=function(e,r){if(zM(e),VM(r)&&r.constructor===e)return r;var t=YM.f(e),n=t.resolve;return n(r),t.promise}});var By=i(()=>{"use strict";var JM=q(),QM=W(),Fy=Z(),XM=Cr(),Dy=rt().CONSTRUCTOR,ZM=Ou(),ej=QM("Promise"),rj=Fy&&!Dy;JM({target:"Promise",stat:!0,forced:Fy||Dy},{resolve:function(r){return ZM(rj&&this===ej?XM:this,r)}})});var Gy=i(()=>{"use strict";Py();Ay();My();jy();Ly();By()});var ku=i(()=>{"use strict";var tj=q(),nj=G(),aj=D(),ij=ke(),oj=Tr(),uj=me(),sj=Kt();tj({target:"Promise",stat:!0,forced:sj},{allSettled:function(r){var t=this,n=ij.f(t),a=n.resolve,o=n.reject,u=oj(function(){var s=aj(t.resolve),c=[],l=0,f=1;uj(r,function(p){var v=l++,d=!1;f++,nj(s,t,p).then(function(h){d||(d=!0,c[v]={status:"fulfilled",value:h},--f||a(c))},function(h){d||(d=!0,c[v]={status:"rejected",reason:h},--f||a(c))})}),--f||a(c)});return u.error&&o(u.value),n.promise}})});var Iu=i(()=>{"use strict";var cj=q(),lj=G(),fj=D(),pj=W(),vj=ke(),dj=Tr(),mj=me(),hj=Kt(),Uy="No one promise resolved";cj({target:"Promise",stat:!0,forced:hj},{any:function(r){var t=this,n=pj("AggregateError"),a=vj.f(t),o=a.resolve,u=a.reject,s=dj(function(){var c=fj(t.resolve),l=[],f=0,p=1,v=!1;mj(r,function(d){var h=f++,m=!1;p++,lj(c,t,d).then(function(x){m||v||(v=!0,o(x))},function(x){m||v||(m=!0,l[h]=x,--p||u(new n(l,Uy)))})}),--p||u(new n(l,Uy))});return s.error&&u(s.value),a.promise}})});var Pu=i(()=>{"use strict";var yj=q(),bj=P(),gj=jr(),qj=mr(),xj=ke(),wj=D(),Wy=Tr(),_u=bj.Promise,Hy=!1,Sj=!_u||!_u.try||Wy(function(){_u.try(function(e){Hy=e===8},8)}).error||!Hy;yj({target:"Promise",stat:!0,forced:Sj},{try:function(e){var r=arguments.length>1?qj(arguments,1):[],t=xj.f(this),n=Wy(function(){return gj(wj(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var Ru=i(()=>{"use strict";var Ej=q(),Tj=ke();Ej({target:"Promise",stat:!0},{withResolvers:function(){var r=Tj.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var Yy=i(()=>{"use strict";var Cj=q(),Oj=Z(),Sa=Cr(),kj=_(),zy=W(),Vy=M(),Ij=Xo(),Ky=Ou(),_j=Me(),Nu=Sa&&Sa.prototype,Pj=!!Sa&&kj(function(){Nu.finally.call({then:function(){}},function(){})});Cj({target:"Promise",proto:!0,real:!0,forced:Pj},{finally:function(e){var r=Ij(this,zy("Promise")),t=Vy(e);return this.then(t?function(n){return Ky(r,e()).then(function(){return n})}:e,t?function(n){return Ky(r,e()).then(function(){throw n})}:e)}});!Oj&&Vy(Sa)&&(Au=zy("Promise").prototype.finally,Nu.finally!==Au&&_j(Nu,"finally",Au,{unsafe:!0}));var Au});var Qy=i((CK,Jy)=>{"use strict";Vo();wr();Rt();Gy();ku();Iu();Pu();Ru();Yy();br();var Rj=V();Jy.exports=Rj.Promise});var Zy=i((OK,Xy)=>{"use strict";var Aj=Qy();Sr();Xy.exports=Aj});var eb=i(()=>{"use strict";Pu()});var rb=i(()=>{"use strict";Ru()});var nb=i((RK,tb)=>{"use strict";var Nj=Zy();eb();rb();tb.exports=Nj});var ab=i(()=>{"use strict";Vo()});var ib=i(()=>{"use strict";ku()});var ob=i(()=>{"use strict";Iu()});var sb=i((FK,ub)=>{"use strict";var Mj=nb();ab();ib();ob();ub.exports=Mj});var ot=i((DK,cb)=>{"use strict";cb.exports=sb()});var pb=i((WK,fb)=>{"use strict";Ao();var jj=Vr();fb.exports=jj.f("asyncIterator")});var db=i((KK,vb)=>{"use strict";var Lj=pb();vb.exports=Lj});var hb=i((zK,mb)=>{"use strict";var $j=db();mb.exports=$j});var bb=i((VK,yb)=>{"use strict";var Fj=hb();yb.exports=Fj});var Ea=i((YK,gb)=>{"use strict";gb.exports=bb()});var Sb=i(()=>{"use strict";var Dj=q(),Bj=_(),Gj=te(),wb=Ct(),Uj=Yi(),Hj=Bj(function(){wb(1)});Dj({target:"Object",stat:!0,forced:Hj,sham:!Uj},{getPrototypeOf:function(r){return wb(Gj(r))}})});var Tb=i((ez,Eb)=>{"use strict";Sb();var Wj=V();Eb.exports=Wj.Object.getPrototypeOf});var Ob=i((rz,Cb)=>{"use strict";var Kj=Tb();Cb.exports=Kj});var Ib=i((tz,kb)=>{"use strict";var zj=Ob();kb.exports=zj});var Pb=i((nz,_b)=>{"use strict";var Vj=Ib();_b.exports=Vj});var Ta=i((az,Rb)=>{"use strict";Rb.exports=Pb()});var Nb=i(()=>{"use strict";var Yj=q(),Jj=N(),Qj=Ne(),Xj=Jj([].reverse),Ab=[1,2];Yj({target:"Array",proto:!0,forced:String(Ab)===String(Ab.reverse())},{reverse:function(){return Qj(this)&&(this.length=this.length),Xj(this)}})});var jb=i((uz,Mb)=>{"use strict";Nb();var Zj=ue();Mb.exports=Zj("Array","reverse")});var $b=i((sz,Lb)=>{"use strict";var eL=U(),rL=jb(),Lu=Array.prototype;Lb.exports=function(e){var r=e.reverse;return e===Lu||eL(Lu,e)&&r===Lu.reverse?rL:r}});var Db=i((cz,Fb)=>{"use strict";var tL=$b();Fb.exports=tL});var Gb=i((lz,Bb)=>{"use strict";var nL=Db();Bb.exports=nL});var Hb=i((fz,Ub)=>{"use strict";var aL=Gb();Ub.exports=aL});var Kb=i((pz,Wb)=>{"use strict";Wb.exports=Hb()});var $u=i((vz,Yt)=>{function iL(e,r){this.v=e,this.k=r}Yt.exports=iL,Yt.exports.__esModule=!0,Yt.exports.default=Yt.exports});var zb=i(()=>{"use strict";var oL=q(),uL=H(),sL=rr();oL({target:"Object",stat:!0,sham:!uL},{create:sL})});var Yb=i((hz,Vb)=>{"use strict";zb();var cL=V(),lL=cL.Object;Vb.exports=function(r,t){return lL.create(r,t)}});var Qb=i((yz,Jb)=>{"use strict";var fL=Yb();Jb.exports=fL});var Zb=i((bz,Xb)=>{"use strict";var pL=Qb();Xb.exports=pL});var rg=i((gz,eg)=>{"use strict";var vL=Zb();eg.exports=vL});var Ca=i((qz,tg)=>{"use strict";tg.exports=rg()});var Du=i((xz,og)=>{"use strict";var ag=N(),dL=D(),mL=$(),hL=K(),ng=mr(),yL=Mr(),ig=Function,bL=ag([].concat),gL=ag([].join),Fu={},qL=function(e,r,t){if(!hL(Fu,r)){for(var n=[],a=0;a<r;a++)n[a]="a["+a+"]";Fu[r]=ig("C,a","return new C("+gL(n,",")+")")}return Fu[r](e,t)};og.exports=yL?ig.bind:function(r){var t=dL(this),n=t.prototype,a=ng(arguments,1),o=function(){var s=bL(a,ng(arguments));return this instanceof o?qL(t,s.length,s):t.apply(r,s)};return mL(n)&&(o.prototype=n),o}});var sg=i(()=>{"use strict";var xL=q(),ug=Du();xL({target:"Function",proto:!0,forced:Function.bind!==ug},{bind:ug})});var lg=i((Ez,cg)=>{"use strict";sg();var wL=ue();cg.exports=wL("Function","bind")});var pg=i((Tz,fg)=>{"use strict";var SL=U(),EL=lg(),Bu=Function.prototype;fg.exports=function(e){var r=e.bind;return e===Bu||SL(Bu,e)&&r===Bu.bind?EL:r}});var dg=i((Cz,vg)=>{"use strict";var TL=pg();vg.exports=TL});var hg=i((Oz,mg)=>{"use strict";var CL=dg();mg.exports=CL});var bg=i((kz,yg)=>{"use strict";var OL=hg();yg.exports=OL});var Jt=i((Iz,gg)=>{"use strict";gg.exports=bg()});var qg=i(()=>{"use strict";var kL=q(),IL=Ot();kL({target:"Object",stat:!0},{setPrototypeOf:IL})});var wg=i((Rz,xg)=>{"use strict";qg();var _L=V();xg.exports=_L.Object.setPrototypeOf});var Eg=i((Az,Sg)=>{"use strict";var PL=wg();Sg.exports=PL});var Cg=i((Nz,Tg)=>{"use strict";var RL=Eg();Tg.exports=RL});var kg=i((Mz,Og)=>{"use strict";var AL=Cg();Og.exports=AL});var Oa=i((jz,Ig)=>{"use strict";Ig.exports=kg()});var Pg=i(()=>{"use strict";var NL=q(),ML=H(),_g=ne().f;NL({target:"Object",stat:!0,forced:Object.defineProperty!==_g,sham:!ML},{defineProperty:_g})});var Ng=i((Fz,Ag)=>{"use strict";Pg();var jL=V(),Rg=jL.Object,LL=Ag.exports=function(r,t,n){return Rg.defineProperty(r,t,n)};Rg.defineProperty.sham&&(LL.sham=!0)});var jg=i((Dz,Mg)=>{"use strict";var $L=Ng();Mg.exports=$L});var $g=i((Bz,Lg)=>{"use strict";var FL=jg();Lg.exports=FL});var Dg=i((Gz,Fg)=>{"use strict";var DL=$g();Fg.exports=DL});var Qt=i((Uz,Bg)=>{"use strict";Bg.exports=Dg()});var Gu=i((Hz,Fe)=>{var BL=Qt();function ka(e,r,t,n){var a=BL;try{a({},"",{})}catch{a=0}Fe.exports=ka=function(u,s,c,l){function f(p,v){ka(u,p,function(d){return this._invoke(p,v,d)})}s?a?a(u,s,{value:c,enumerable:!l,configurable:!l,writable:!l}):u[s]=c:(f("next",0),f("throw",1),f("return",2))},Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports,ka(e,r,t,n)}Fe.exports=ka,Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports});var Hu=i((Wz,De)=>{var Gg=Oe(),Uu=Ca(),GL=Jt(),UL=Ta(),Ug=Oa(),_e=Gu();function Hg(){var e,r,t=typeof Gg=="function"?Gg:{},n=t.iterator||"@@iterator",a=t.toStringTag||"@@toStringTag";function o(d,h,m,x){var y=h&&h.prototype instanceof s?h:s,g=Uu(y.prototype);return _e(g,"_invoke",function(O,k,w){var E,S,C,L=0,Se=w||[],I=!1,re={p:0,n:0,v:e,a:Ee,f:GL(Ee).call(Ee,e,4),d:function(F,ye){return E=F,S=0,C=e,re.n=ye,u}};function Ee(Q,F){for(S=Q,C=F,r=0;!I&&L&&!ye&&r<Se.length;r++){var ye,T=Se[r],Nr=re.p,Ye=T[2];Q>3?(ye=Ye===F)&&(C=T[(S=T[4])?5:(S=3,3)],T[4]=T[5]=e):T[0]<=Nr&&((ye=Q<2&&Nr<T[1])?(S=0,re.v=F,re.n=T[1]):Nr<Ye&&(ye=Q<3||T[0]>F||F>Ye)&&(T[4]=Q,T[5]=F,re.n=Ye,S=0))}if(ye||Q>1)return u;throw I=!0,F}return function(Q,F,ye){if(L>1)throw TypeError("Generator is already running");for(I&&F===1&&Ee(F,ye),S=F,C=ye;(r=S<2?e:C)||!I;){E||(S?S<3?(S>1&&(re.n=-1),Ee(S,C)):re.n=C:re.v=C);try{if(L=2,E){if(S||(Q="next"),r=E[Q]){if(!(r=r.call(E,C)))throw TypeError("iterator result is not an object");if(!r.done)return r;C=r.value,S<2&&(S=0)}else S===1&&(r=E.return)&&r.call(E),S<2&&(C=TypeError("The iterator does not provide a '"+Q+"' method"),S=1);E=e}else if((r=(I=re.n<0)?C:O.call(k,re))!==u)break}catch(T){E=e,S=1,C=T}finally{L=1}}return{value:r,done:I}}}(d,m,x),!0),g}var u={};function s(){}function c(){}function l(){}r=UL;var f=[][n]?r(r([][n]())):(_e(r={},n,function(){return this}),r),p=l.prototype=s.prototype=Uu(f);function v(d){return Ug?Ug(d,l):(d.__proto__=l,_e(d,a,"GeneratorFunction")),d.prototype=Uu(p),d}return c.prototype=l,_e(p,"constructor",l),_e(l,"constructor",c),c.displayName="GeneratorFunction",_e(l,a,"GeneratorFunction"),_e(p),_e(p,a,"Generator"),_e(p,n,function(){return this}),_e(p,"toString",function(){return"[object Generator]"}),(De.exports=Hg=function(){return{w:o,m:v}},De.exports.__esModule=!0,De.exports.default=De.exports)()}De.exports=Hg,De.exports.__esModule=!0,De.exports.default=De.exports});var zu=i((Kz,Xt)=>{var HL=Oe(),WL=Ea(),KL=$u(),Wu=Gu();function Ku(e,r){function t(a,o,u,s){try{var c=e[a](o),l=c.value;return l instanceof KL?r.resolve(l.v).then(function(f){t("next",f,u,s)},function(f){t("throw",f,u,s)}):r.resolve(l).then(function(f){c.value=f,u(c)},function(f){return t("throw",f,u,s)})}catch(f){s(f)}}var n;this.next||(Wu(Ku.prototype),Wu(Ku.prototype,typeof HL=="function"&&WL||"@asyncIterator",function(){return this})),Wu(this,"_invoke",function(a,o,u){function s(){return new r(function(c,l){t(a,u,c,l)})}return n=n?n.then(s,s):s()},!0)}Xt.exports=Ku,Xt.exports.__esModule=!0,Xt.exports.default=Xt.exports});var Vu=i((zz,Zt)=>{var zL=ot(),VL=Hu(),YL=zu();function JL(e,r,t,n,a){return new YL(VL().w(e,r,t,n),a||zL)}Zt.exports=JL,Zt.exports.__esModule=!0,Zt.exports.default=Zt.exports});var Wg=i((Vz,en)=>{var QL=Vu();function XL(e,r,t,n,a){var o=QL(e,r,t,n,a);return o.next().then(function(u){return u.done?u.value:o.next()})}en.exports=XL,en.exports.__esModule=!0,en.exports.default=en.exports});var Vg=i((Yz,zg)=>{"use strict";var Kg=Xe(),ZL=TypeError;zg.exports=function(e,r){if(!delete e[r])throw new ZL("Cannot delete property "+Kg(r)+" of "+Kg(e))}});var Yg=i(()=>{"use strict";var e$=q(),r$=te(),t$=ve(),n$=Wr(),a$=Vg(),i$=Pt(),o$=[].unshift(0)!==1,u$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},s$=o$||!u$();e$({target:"Array",proto:!0,arity:1,forced:s$},{unshift:function(r){var t=r$(this),n=t$(t),a=arguments.length;if(a){i$(n+a);for(var o=n;o--;){var u=o+a;o in t?t[u]=t[o]:a$(t,u)}for(var s=0;s<a;s++)t[s]=arguments[s]}return n$(t,n+a)}})});var Qg=i((Xz,Jg)=>{"use strict";Yg();var c$=ue();Jg.exports=c$("Array","unshift")});var Zg=i((Zz,Xg)=>{"use strict";var l$=U(),f$=Qg(),Yu=Array.prototype;Xg.exports=function(e){var r=e.unshift;return e===Yu||l$(Yu,e)&&r===Yu.unshift?f$:r}});var rq=i((eV,eq)=>{"use strict";var p$=Zg();eq.exports=p$});var nq=i((rV,tq)=>{"use strict";var v$=rq();tq.exports=v$});var iq=i((tV,aq)=>{"use strict";var d$=nq();aq.exports=d$});var uq=i((nV,oq)=>{"use strict";oq.exports=iq()});var sq=i((aV,rn)=>{var m$=uq();function h$(e){var r=Object(e),t=[];for(var n in r)m$(t).call(t,n);return function a(){for(;t.length;)if((n=t.pop())in r)return a.value=n,a.done=!1,a;return a.done=!0,a}}rn.exports=h$,rn.exports.__esModule=!0,rn.exports.default=rn.exports});var lq=i((iV,cq)=>{"use strict";wr();Rt();br();Mo();var y$=Vr();cq.exports=y$.f("iterator")});var pq=i((oV,fq)=>{"use strict";var b$=lq();Sr();fq.exports=b$});var dq=i((uV,vq)=>{"use strict";var g$=pq();vq.exports=g$});var hq=i((sV,mq)=>{"use strict";var q$=dq();mq.exports=q$});var tn=i((cV,yq)=>{"use strict";yq.exports=hq()});var bq=i((lV,Be)=>{var Ia=Oe(),x$=tn();function Ju(e){"@babel/helpers - typeof";return Be.exports=Ju=typeof Ia=="function"&&typeof x$=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Ia=="function"&&r.constructor===Ia&&r!==Ia.prototype?"symbol":typeof r},Be.exports.__esModule=!0,Be.exports.default=Be.exports,Ju(e)}Be.exports=Ju,Be.exports.__esModule=!0,Be.exports.default=Be.exports});var gq=i((fV,nn)=>{var w$=bq().default,S$=Oe(),E$=tn();function T$(e){if(e!=null){var r=e[typeof S$=="function"&&E$||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(w$(e)+" is not iterable")}nn.exports=T$,nn.exports.__esModule=!0,nn.exports.default=nn.exports});var wq=i((pV,Ge)=>{var qq=Ta(),C$=Kb(),O$=$u(),k$=Hu(),I$=Wg(),_$=Vu(),P$=zu(),R$=sq(),xq=gq();function Qu(){"use strict";var e=k$(),r=e.m(Qu),t=(qq?qq(r):r.__proto__).constructor;function n(u){var s=typeof u=="function"&&u.constructor;return!!s&&(s===t||(s.displayName||s.name)==="GeneratorFunction")}var a={throw:1,return:2,break:3,continue:3};function o(u){var s,c;return function(l){s||(s={stop:function(){return c(l.a,2)},catch:function(){return l.v},abrupt:function(p,v){return c(l.a,a[p],v)},delegateYield:function(p,v,d){return s.resultName=v,c(l.d,xq(p),d)},finish:function(p){return c(l.f,p)}},c=function(p,v,d){l.p=s.prev,l.n=s.next;try{return p(v,d)}finally{s.next=l.n}}),s.resultName&&(s[s.resultName]=l.v,s.resultName=void 0),s.sent=l.v,s.next=l.n;try{return u.call(this,s)}finally{l.p=s.prev,l.n=s.next}}}return(Ge.exports=Qu=function(){return{wrap:function(c,l,f,p){return e.w(o(c),l,f,p&&C$(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(c,l){return new O$(c,l)},AsyncIterator:P$,async:function(c,l,f,p,v){return(n(l)?_$:I$)(o(c),l,f,p,v)},keys:R$,values:xq}},Ge.exports.__esModule=!0,Ge.exports.default=Ge.exports)()}Ge.exports=Qu,Ge.exports.__esModule=!0,Ge.exports.default=Ge.exports});var ce=i((vV,Sq)=>{var _a=wq()();Sq.exports=_a;try{regeneratorRuntime=_a}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=_a:Function("r","regeneratorRuntime = r")(_a)}});var Xu=i((Ra,Tq)=>{"use strict";Object.defineProperty(Ra,"__esModule",{value:!0});var Pa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Eq=function(){function e(r,t){var n=[],a=!0,o=!1,u=void 0;try{for(var s=r[Symbol.iterator](),c;!(a=(c=s.next()).done)&&(n.push(c.value),!(t&&n.length===t));a=!0);}catch(l){o=!0,u=l}finally{try{!a&&s.return&&s.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Ra.default=A$;function A$(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(a){return a.type==="tag"||a.type==="script"||a.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var a=this.attribs,o=Object.keys(a),u=o.reduce(function(s,c,l){return s[l]={name:c,value:a[c]},s},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var a=[];return or(this.childTags,function(o){(o.name===n||n==="*")&&a.push(o)}),a}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var a=n.trim().replace(/\s+/g," ").split(" "),o=[];return or([this],function(u){var s=u.attribs.class;s&&a.every(function(c){return s.indexOf(c)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var a=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=N$(n),u=o.shift(),s=o.length;return u(this).filter(function(c){for(var l=0;l<s;){if(c=o[l](c,a),!c)return!1;l+=1}return!0})}),t.contains||(t.contains=function(n){var a=!1;return or([this],function(o,u){o===n&&(a=!0,u())}),a}),!0}function N$(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,a=r.split(":"),o=Eq(a,2),u=o[0],s=o[1],c=null,l=null;if(function(){switch(!0){case/>/.test(u):l=function(w){return function(E){return E(w.parent)&&w.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");c=function(w){var E=w.attribs.class;return E&&h.every(function(S){return E.indexOf(S)>-1})},l=function(w,E){return n?w.getElementsByClassName(h.join(" ")):typeof w=="function"?w(c):an(w,E,c)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),x=Eq(m,2),y=x[0],g=x[1];c=function(w){var E=Object.keys(w.attribs).indexOf(y)>-1;return!!(E&&(!g||w.attribs[y]===g))},l=function(w,E){if(n){var S=function(){var C=[];return or([w],function(L){c(L)&&C.push(L)}),{v:C}}();if((typeof S>"u"?"undefined":Pa(S))==="object")return S.v}return typeof w=="function"?w(c):an(w,E,c)};break;case/^#/.test(u):var O=u.substr(1);c=function(w){return w.attribs.id===O},l=function(w,E){if(n){var S=function(){var C=[];return or([w],function(L,Se){c(L)&&(C.push(L),Se())}),{v:C}}();if((typeof S>"u"?"undefined":Pa(S))==="object")return S.v}return typeof w=="function"?w(c):an(w,E,c)};break;case/\*/.test(u):c=function(w){return!0},l=function(w,E){if(n){var S=function(){var C=[];return or([w],function(L){return C.push(L)}),{v:C}}();if((typeof S>"u"?"undefined":Pa(S))==="object")return S.v}return typeof w=="function"?w(c):an(w,E,c)};break;default:c=function(w){return w.name===u},l=function(w,E){if(n){var S=function(){var C=[];return or([w],function(L){c(L)&&C.push(L)}),{v:C}}();if((typeof S>"u"?"undefined":Pa(S))==="object")return S.v}return typeof w=="function"?w(c):an(w,E,c)}}}(),!s)return l;var f=s.match(/-(child|type)\((\d+)\)$/),p=f[1],v=parseInt(f[2],10)-1,d=function(m){if(m){var x=m.parent.childTags;p==="type"&&(x=x.filter(c));var y=x.findIndex(function(g){return g===m});if(y===v)return!0}return!1};return function(m){var x=l(m);return n?x.reduce(function(y,g){return d(g)&&y.push(g),y},[]):d(x)&&x}})}function or(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&or(t.childTags,r)})}function an(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}Tq.exports=Ra.default});var Na=i(Aa=>{"use strict";Object.defineProperty(Aa,"__esModule",{value:!0});Aa.convertNodeList=M$;Aa.escapeValue=j$;function M$(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function j$(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var Mq=i((Ma,Nq)=>{"use strict";Object.defineProperty(Ma,"__esModule",{value:!0});Ma.default=L$;var Iq=Na(),Cq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function L$(e,r){var t=r.root,n=t===void 0?document:t,a=r.skip,o=a===void 0?null:a,u=r.priority,s=u===void 0?["id","class","href","src"]:u,c=r.ignore,l=c===void 0?{}:c,f=[],p=e,v=f.length,d=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(y){return typeof y!="function"?function(g){return g===y}:y}),m=function(g){return o&&h.some(function(O){return O(g)})};for(Object.keys(l).forEach(function(y){y==="class"&&(d=!0);var g=l[y];typeof g!="function"&&(typeof g=="number"&&(g=g.toString()),typeof g=="string"&&(g=new RegExp((0,Iq.escapeValue)(g).replace(/\\/g,"\\\\"))),typeof g=="boolean"&&(g=g?/(?:)/:/.^/),l[y]=function(O,k){return g.test(k)})}),d&&function(){var y=l.attribute;l.attribute=function(g,O,k){return l.class(O)||y&&y(g,O,k)}}();p!==n;){if(m(p)!==!0){if(Oq(s,p,l,f,n)||kq(p,l,f,n))break;Oq(s,p,l,f),f.length===v&&kq(p,l,f),f.length===v&&$$(s,p,l,f)}p=p.parentNode,v=f.length}if(p===n){var x=Rq(s,p,l);f.unshift(x)}return f.join(" ")}function Oq(e,r,t,n){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=_q(e,r,t);if(o){var u=a.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function _q(e,r,t){for(var n=r.attributes,a=Object.keys(n).sort(function(m,x){var y=e.indexOf(n[m].name),g=e.indexOf(n[x].name);return g===-1?y===-1?0:-1:y-g}),o=0,u=a.length;o<u;o++){var s=a[o],c=n[s],l=c.name,f=(0,Iq.escapeValue)(c.value),p=t[l]||t.attribute,v=Cq[l]||Cq.attribute;if(!Aq(p,l,f,v)){var d="["+l+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(l==="id"&&(d="#"+f),l==="class")){var h=f.trim().replace(/\s+/g,".");d="."+h}return d}}return null}function kq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,a=Pq(e,r);if(a){var o=n.getElementsByTagName(a);if(o.length===1)return t.unshift(a),!0}return!1}function Pq(e,r){var t=e.tagName.toLowerCase();return Aq(r.tag,null,t)?null:t}function $$(e,r,t,n){for(var a=r.parentNode,o=a.childTags||a.children,u=0,s=o.length;u<s;u++){var c=o[u];if(c===r){var l=Rq(e,c,t);if(!l)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,c,t,l);var f="> "+l+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function Rq(e,r,t){var n=_q(e,r,t);return n||(n=Pq(r,t)),n}function Aq(e,r,t,n){if(!t)return!0;var a=e||n;return a?a(r,t,n):!1}Nq.exports=Ma.default});var Zu=i((La,jq)=>{"use strict";Object.defineProperty(La,"__esModule",{value:!0});La.default=U$;var F$=Xu(),D$=G$(F$),B$=Na();function G$(e){return e&&e.__esModule?e:{default:e}}function U$(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,B$.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,D$.default)(r[0],t),a=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(a.length<2)return ja("",e,"",r);for(var o=[a.pop()];a.length>1;){var u=a.pop(),s=a.join(" "),c=o.join(" "),l=s+" "+c,f=document.querySelectorAll(l);f.length!==r.length&&o.unshift(ja(s,u,c,r))}return o.unshift(a[0]),a=o,a[0]=ja("",a[0],a.slice(1).join(" "),r),a[a.length-1]=ja(a.slice(0,-1).join(" "),a[a.length-1],"",r),n&&delete global.document,a.join(" ").replace(/>/g,"> ").trim()}function ja(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var a=r.replace(/=.*$/,"]"),o=""+e+a+t,u=document.querySelectorAll(o);if(ut(u,n))r=a;else for(var s=document.querySelectorAll(""+e+a),c=function(){var k=s[l];if(n.some(function(E){return k.contains(E)})){var w=k.tagName.toLowerCase();return o=""+e+w+t,u=document.querySelectorAll(o),ut(u,n)&&(r=w),"break"}},l=0,f=s.length;l<f;l++){var o,u,p=c();if(p==="break")break}}if(/>/.test(r)){var v=r.replace(/>/,""),o=""+e+v+t,u=document.querySelectorAll(o);ut(u,n)&&(r=v)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);ut(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(O){return"."+O}).sort(function(O,k){return O.length-k.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);ut(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var x=document.querySelectorAll(""+e+r),y=function(){var k=x[l];if(n.some(function(E){return k.contains(E)})){var w=k.tagName.toLowerCase();return o=""+e+w+t,u=document.querySelectorAll(o),ut(u,n)&&(r=w),"break"}},l=0,f=x.length;l<f;l++){var o,u,g=y();if(g==="break")break}}return r}function ut(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var a=0;a<t;a++)if(e[a]===n)return!0;return!1})}jq.exports=La.default});var es=i($a=>{"use strict";Object.defineProperty($a,"__esModule",{value:!0});$a.getCommonAncestor=H$;$a.getCommonProperties=W$;function H$(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,a=[];e.forEach(function(p,v){for(var d=[];p!==n;)p=p.parentNode,d.unshift(p);a[v]=d}),a.sort(function(p,v){return p.length-v.length});for(var o=a.shift(),u=null,s=function(){var v=o[c],d=a.some(function(h){return!h.some(function(m){return m===v})});if(d)return"break";u=v},c=0,l=o.length;c<l;c++){var f=s();if(f==="break")break}return u}function W$(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,a=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(c){return u.some(function(l){return l===c})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(a!==void 0&&function(){var c=t.attributes,l=Object.keys(c).reduce(function(v,d){var h=c[d],m=h.name;return h&&m!=="class"&&(v[m]=h.value),v},{}),f=Object.keys(l),p=Object.keys(a);f.length?p.length?(a=p.reduce(function(v,d){var h=a[d];return h===l[d]&&(v[d]=h),v},{}),Object.keys(a).length?r.attributes=a:delete r.attributes):r.attributes=l:delete r.attributes}(),o!==void 0){var s=t.tagName.toLowerCase();o?s!==o&&delete r.tag:r.tag=s}}),r}});var Gq=i(on=>{"use strict";Object.defineProperty(on,"__esModule",{value:!0});var K$=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};on.getSingleSelector=ts;on.getMultiSelector=Bq;on.default=X$;var z$=Xu(),$q=rs(z$),V$=Mq(),Y$=rs(V$),J$=Zu(),Fq=rs(J$),Lq=Na(),Dq=es();function rs(e){return e&&e.__esModule?e:{default:e}}function ts(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":K$(e))+'")');var t=(0,$q.default)(e,r),n=(0,Y$.default)(e,r),a=(0,Fq.default)(n,e,r);return t&&delete global.document,a}function Bq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,Lq.convertNodeList)(e)),e.some(function(l){return l.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,$q.default)(e[0],r),n=(0,Dq.getCommonAncestor)(e,r),a=ts(n,r),o=Q$(e),u=o[0],s=(0,Fq.default)(a+" "+u,e,r),c=(0,Lq.convertNodeList)(document.querySelectorAll(s));return e.every(function(l){return c.some(function(f){return f===l})})?(t&&delete global.document,s):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function Q$(e){var r=(0,Dq.getCommonProperties)(e),t=r.classes,n=r.attributes,a=r.tag,o=[];if(a&&o.push(a),t){var u=t.map(function(c){return"."+c}).join("");o.push(u)}if(n){var s=Object.keys(n).reduce(function(c,l){return c.push("["+l+'="'+n[l]+'"]'),c},[]).join("");o.push(s)}return o.length,[o.join("")]}function X$(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?Bq(e,r):ts(e,r)}});var Wq=i(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.default=ie.common=ie.optimize=ie.getMultiSelector=ie.getSingleSelector=ie.select=void 0;var ns=Gq();Object.defineProperty(ie,"getSingleSelector",{enumerable:!0,get:function(){return ns.getSingleSelector}});Object.defineProperty(ie,"getMultiSelector",{enumerable:!0,get:function(){return ns.getMultiSelector}});var Uq=Hq(ns),Z$=Zu(),eF=Hq(Z$),rF=es(),tF=nF(rF);function nF(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Hq(e){return e&&e.__esModule?e:{default:e}}ie.select=Uq.default;ie.optimize=eF.default;ie.common=tF;ie.default=Uq.default});var Kq=i(()=>{"use strict";var vF=q(),dF=Ne();vF({target:"Array",stat:!0},{isArray:dF})});var Vq=i((_V,zq)=>{"use strict";Kq();var mF=V();zq.exports=mF.Array.isArray});var Jq=i((PV,Yq)=>{"use strict";var hF=Vq();Yq.exports=hF});var Xq=i((RV,Qq)=>{"use strict";var yF=Jq();Qq.exports=yF});var ex=i((AV,Zq)=>{"use strict";var bF=Xq();Zq.exports=bF});var tx=i((NV,rx)=>{"use strict";rx.exports=ex()});var ix=i(()=>{"use strict";var gF=q(),qF=te(),xF=ve(),wF=Wr(),SF=Pt(),EF=_(),TF=EF(function(){return[].push.call({length:4294967296},1)!==4294967297}),CF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},OF=TF||!CF();gF({target:"Array",proto:!0,arity:1,forced:OF},{push:function(r){var t=qF(this),n=xF(t),a=arguments.length;SF(n+a);for(var o=0;o<a;o++)t[n]=arguments[o],n++;return wF(t,n),n}})});var ux=i(($V,ox)=>{"use strict";ix();var kF=ue();ox.exports=kF("Array","push")});var cx=i((FV,sx)=>{"use strict";var IF=U(),_F=ux(),as=Array.prototype;sx.exports=function(e){var r=e.push;return e===as||IF(as,e)&&r===as.push?_F:r}});var fx=i((DV,lx)=>{"use strict";var PF=cx();lx.exports=PF});var vx=i((BV,px)=>{"use strict";var RF=fx();px.exports=RF});var mx=i((GV,dx)=>{"use strict";var AF=vx();dx.exports=AF});var is=i((UV,hx)=>{"use strict";hx.exports=mx()});var Ox=i(()=>{"use strict";var NF=q(),MF=Nt().map,jF=St(),LF=jF("map");NF({target:"Array",proto:!0,forced:!LF},{map:function(r){return MF(this,r,arguments.length>1?arguments[1]:void 0)}})});var Ix=i((y9,kx)=>{"use strict";Ox();var $F=ue();kx.exports=$F("Array","map")});var Px=i((b9,_x)=>{"use strict";var FF=U(),DF=Ix(),us=Array.prototype;_x.exports=function(e){var r=e.map;return e===us||FF(us,e)&&r===us.map?DF:r}});var Ax=i((g9,Rx)=>{"use strict";var BF=Px();Rx.exports=BF});var Mx=i((q9,Nx)=>{"use strict";var GF=Ax();Nx.exports=GF});var Lx=i((x9,jx)=>{"use strict";var UF=Mx();jx.exports=UF});var Fx=i((w9,$x)=>{"use strict";$x.exports=Lx()});var Bx=i((S9,Dx)=>{Dx.exports=Fx()});var Ux=i((E9,Gx)=>{Gx.exports=ot()});var Vx=i((T9,zx)=>{"use strict";var HF=D(),WF=te(),KF=Tn(),zF=ve(),Hx=TypeError,Wx="Reduce of empty array with no initial value",Kx=function(e){return function(r,t,n,a){var o=WF(r),u=KF(o),s=zF(o);if(HF(t),s===0&&n<2)throw new Hx(Wx);var c=e?s-1:0,l=e?-1:1;if(n<2)for(;;){if(c in u){a=u[c],c+=l;break}if(c+=l,e?c<0:s<=c)throw new Hx(Wx)}for(;e?c>=0:s>c;c+=l)c in u&&(a=t(a,u[c],c,o));return a}};zx.exports={left:Kx(!1),right:Kx(!0)}});var ss=i((C9,Yx)=>{"use strict";var VF=_();Yx.exports=function(e,r){var t=[][e];return!!t&&VF(function(){t.call(null,r||function(){return 1},1)})}});var Qx=i(()=>{"use strict";var YF=q(),JF=Vx().left,QF=ss(),Jx=$r(),XF=Dt(),ZF=!XF&&Jx>79&&Jx<83,eD=ZF||!QF("reduce");YF({target:"Array",proto:!0,forced:eD},{reduce:function(r){var t=arguments.length;return JF(this,r,t,t>1?arguments[1]:void 0)}})});var Zx=i((I9,Xx)=>{"use strict";Qx();var rD=ue();Xx.exports=rD("Array","reduce")});var rw=i((_9,ew)=>{"use strict";var tD=U(),nD=Zx(),cs=Array.prototype;ew.exports=function(e){var r=e.reduce;return e===cs||tD(cs,e)&&r===cs.reduce?nD:r}});var nw=i((P9,tw)=>{"use strict";var aD=rw();tw.exports=aD});var iw=i((R9,aw)=>{"use strict";var iD=nw();aw.exports=iD});var uw=i((A9,ow)=>{"use strict";var oD=iw();ow.exports=oD});var cw=i((N9,sw)=>{"use strict";sw.exports=uw()});var fw=i((M9,lw)=>{lw.exports=cw()});var dw=i((j9,vw)=>{"use strict";var uD=Ne(),sD=ve(),cD=Pt(),lD=Y(),fD=Hr(),pw=function(e,r,t,n,a,o,u,s){for(var c=a,l=0,f=u?lD(u,s):!1,p,v;l<n;)l in t&&(p=f?f(t[l],l,r):t[l],o>0&&uD(p)?(v=sD(p),c=pw(e,r,p,v,c,o-1)-1):(cD(c+1),fD(e,c,p)),c++),l++;return c};vw.exports=pw});var mw=i(()=>{"use strict";var pD=q(),vD=dw(),dD=D(),mD=te(),hD=ve(),yD=Kn();pD({target:"Array",proto:!0},{flatMap:function(r){var t=mD(this),n=hD(t),a;return dD(r),a=yD(t,0),vD(a,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),a}})});var hw=i(()=>{"use strict";var bD=Lo();bD("flatMap")});var bw=i((B9,yw)=>{"use strict";mw();hw();var gD=ue();yw.exports=gD("Array","flatMap")});var qw=i((G9,gw)=>{"use strict";var qD=U(),xD=bw(),ls=Array.prototype;gw.exports=function(e){var r=e.flatMap;return e===ls||qD(ls,e)&&r===ls.flatMap?xD:r}});var ww=i((U9,xw)=>{"use strict";var wD=qw();xw.exports=wD});var Ew=i((H9,Sw)=>{"use strict";var SD=ww();Sw.exports=SD});var Cw=i((W9,Tw)=>{"use strict";var ED=Ew();Tw.exports=ED});var kw=i((K9,Ow)=>{"use strict";Ow.exports=Cw()});var _w=i((z9,Iw)=>{Iw.exports=kw()});var Rw=i((V9,Pw)=>{"use strict";uo();var TD=ue();Pw.exports=TD("Array","concat")});var Nw=i((Y9,Aw)=>{"use strict";var CD=U(),OD=Rw(),fs=Array.prototype;Aw.exports=function(e){var r=e.concat;return e===fs||CD(fs,e)&&r===fs.concat?OD:r}});var jw=i((J9,Mw)=>{"use strict";var kD=Nw();Mw.exports=kD});var $w=i((Q9,Lw)=>{"use strict";var ID=jw();Lw.exports=ID});var Dw=i((X9,Fw)=>{"use strict";var _D=$w();Fw.exports=_D});var Gw=i((Z9,Bw)=>{"use strict";Bw.exports=Dw()});var ps=i((e7,Uw)=>{Uw.exports=Gw()});var Kw=i(()=>{});var Vw=i((S7,zw)=>{"use strict";Kw();jo();var DD=Vr();zw.exports=DD.f("toPrimitive")});var Jw=i((E7,Yw)=>{"use strict";var BD=Vw();Yw.exports=BD});var Xw=i((T7,Qw)=>{"use strict";var GD=Jw();Qw.exports=GD});var eS=i((C7,Zw)=>{"use strict";var UD=Xw();Zw.exports=UD});var tS=i((O7,rS)=>{"use strict";rS.exports=eS()});var fS=i((V7,lS)=>{"use strict";var WD=$(),KD=Te(),zD=R(),VD=zD("match");lS.exports=function(e){var r;return WD(e)&&((r=e[VD])!==void 0?!!r:KD(e)==="RegExp")}});var vS=i((Y7,pS)=>{"use strict";var YD=fS(),JD=TypeError;pS.exports=function(e){if(YD(e))throw new JD("The method doesn't accept regular expressions");return e}});var mS=i((J7,dS)=>{"use strict";var QD=R(),XD=QD("match");dS.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[XD]=!1,"/./"[e](r)}catch{}}return!1}});var bS=i(()=>{"use strict";var ZD=q(),e3=mt(),r3=yt().f,t3=Pi(),hS=Ze(),n3=vS(),a3=pr(),i3=mS(),o3=Z(),u3=e3("".slice),s3=Math.min,yS=i3("startsWith"),c3=!o3&&!yS&&!!function(){var e=r3(String.prototype,"startsWith");return e&&!e.writable}();ZD({target:"String",proto:!0,forced:!c3&&!yS},{startsWith:function(r){var t=hS(a3(this));n3(r);var n=t3(s3(arguments.length>1?arguments[1]:void 0,t.length)),a=hS(r);return u3(t,n,n+a.length)===a}})});var qS=i((Z7,gS)=>{"use strict";bS();var l3=ue();gS.exports=l3("String","startsWith")});var wS=i((eY,xS)=>{"use strict";var f3=U(),p3=qS(),hs=String.prototype;xS.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===hs||f3(hs,e)&&r===hs.startsWith?p3:r}});var ES=i((rY,SS)=>{"use strict";var v3=wS();SS.exports=v3});var CS=i((tY,TS)=>{"use strict";var d3=ES();TS.exports=d3});var kS=i((nY,OS)=>{"use strict";var m3=CS();OS.exports=m3});var _S=i((aY,IS)=>{"use strict";IS.exports=kS()});var RS=i((iY,PS)=>{PS.exports=_S()});var AS=i(()=>{"use strict";var h3=q(),y3=Nt().filter,b3=St(),g3=b3("filter");h3({target:"Array",proto:!0,forced:!g3},{filter:function(r){return y3(this,r,arguments.length>1?arguments[1]:void 0)}})});var MS=i((sY,NS)=>{"use strict";AS();var q3=ue();NS.exports=q3("Array","filter")});var LS=i((cY,jS)=>{"use strict";var x3=U(),w3=MS(),ys=Array.prototype;jS.exports=function(e){var r=e.filter;return e===ys||x3(ys,e)&&r===ys.filter?w3:r}});var FS=i((lY,$S)=>{"use strict";var S3=LS();$S.exports=S3});var BS=i((fY,DS)=>{"use strict";var E3=FS();DS.exports=E3});var US=i((pY,GS)=>{"use strict";var T3=BS();GS.exports=T3});var WS=i((vY,HS)=>{"use strict";HS.exports=US()});var zS=i((dY,KS)=>{KS.exports=WS()});var cE=i(()=>{"use strict";var A3=q(),N3=W(),gs=jr(),M3=Du(),nE=Qo(),j3=X(),aE=$(),L3=rr(),oE=_(),qs=N3("Reflect","construct"),$3=Object.prototype,F3=[].push,uE=oE(function(){function e(){}return!(qs(function(){},[],e)instanceof e)}),sE=!oE(function(){qs(function(){})}),iE=uE||sE;A3({target:"Reflect",stat:!0,forced:iE,sham:iE},{construct:function(r,t){nE(r),j3(t);var n=arguments.length<3?r:nE(arguments[2]);if(sE&&!uE)return qs(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var a=[null];return gs(F3,a,t),new(gs(M3,r,a))}var o=n.prototype,u=L3(aE(o)?o:$3),s=gs(r,u,t);return aE(s)?s:u}})});var fE=i((VY,lE)=>{"use strict";cE();var D3=V();lE.exports=D3.Reflect.construct});var vE=i((YY,pE)=>{"use strict";var B3=fE();pE.exports=B3});var mE=i((JY,dE)=>{"use strict";var G3=vE();dE.exports=G3});var yE=i((QY,hE)=>{"use strict";var U3=mE();hE.exports=U3});var Wa=i((XY,bE)=>{"use strict";bE.exports=yE()});var qE=i((ZY,gE)=>{gE.exports=Wa()});var IE=i((sJ,kE)=>{"use strict";var H3=_();kE.exports=H3(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var RE=i((cJ,PE)=>{"use strict";var W3=_(),K3=$(),z3=Te(),_E=IE(),Ka=Object.isExtensible,V3=W3(function(){Ka(1)});PE.exports=V3||_E?function(r){return!K3(r)||_E&&z3(r)==="ArrayBuffer"?!1:Ka?Ka(r):!0}:Ka});var NE=i((lJ,AE)=>{"use strict";var Y3=_();AE.exports=!Y3(function(){return Object.isExtensible(Object.preventExtensions({}))})});var Os=i((fJ,LE)=>{"use strict";var J3=q(),Q3=N(),X3=zr(),Z3=$(),Es=K(),e4=ne().f,ME=At(),r4=so(),Ts=RE(),t4=Dr(),n4=NE(),jE=!1,We=t4("meta"),a4=0,Cs=function(e){e4(e,We,{value:{objectID:"O"+a4++,weakData:{}}})},i4=function(e,r){if(!Z3(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!Es(e,We)){if(!Ts(e))return"F";if(!r)return"E";Cs(e)}return e[We].objectID},o4=function(e,r){if(!Es(e,We)){if(!Ts(e))return!0;if(!r)return!1;Cs(e)}return e[We].weakData},u4=function(e){return n4&&jE&&Ts(e)&&!Es(e,We)&&Cs(e),e},s4=function(){c4.enable=function(){},jE=!0;var e=ME.f,r=Q3([].splice),t={};t[We]=1,e(t).length&&(ME.f=function(n){for(var a=e(n),o=0,u=a.length;o<u;o++)if(a[o]===We){r(a,o,1);break}return a},J3({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:r4.f}))},c4=LE.exports={enable:s4,fastKey:i4,getWeakData:o4,onFreeze:u4};X3[We]=!0});var DE=i((pJ,FE)=>{"use strict";var l4=q(),f4=P(),p4=Os(),v4=_(),d4=Ce(),m4=me(),h4=da(),y4=M(),b4=$(),g4=fr(),q4=Le(),x4=ne().f,w4=Nt().forEach,S4=H(),$E=er(),E4=$E.set,T4=$E.getterFor;FE.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,a=e.indexOf("Weak")!==-1,o=n?"set":"add",u=f4[e],s=u&&u.prototype,c={},l;if(!S4||!y4(u)||!(a||s.forEach&&!v4(function(){new u().entries().next()})))l=t.getConstructor(r,e,n,o),p4.enable();else{l=r(function(v,d){E4(h4(v,f),{type:e,collection:new u}),g4(d)||m4(d,v[o],{that:v,AS_ENTRIES:n})});var f=l.prototype,p=T4(e);w4(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(v){var d=v==="add"||v==="set";v in s&&!(a&&v==="clear")&&d4(f,v,function(h,m){var x=p(this).collection;if(!d&&a&&!b4(h))return v==="get"?void 0:!1;var y=x[v](h===0?0:h,m);return d?this:y})}),a||x4(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return q4(l,e,!1,!0),c[e]=l,l4({global:!0,forced:!0},c),a||t.setStrong(l,e,n),l}});var GE=i((vJ,BE)=>{"use strict";var C4=Me();BE.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:C4(e,n,r[n],t);return e}});var YE=i((dJ,VE)=>{"use strict";var UE=rr(),O4=Vn(),HE=GE(),k4=Y(),I4=da(),_4=fr(),P4=me(),R4=Gn(),za=Un(),A4=Jo(),pn=H(),WE=Os().fastKey,zE=er(),KE=zE.set,ks=zE.getterFor;VE.exports={getConstructor:function(e,r,t,n){var a=e(function(l,f){I4(l,o),KE(l,{type:r,index:UE(null),first:null,last:null,size:0}),pn||(l.size=0),_4(f)||P4(f,l[n],{that:l,AS_ENTRIES:t})}),o=a.prototype,u=ks(r),s=function(l,f,p){var v=u(l),d=c(l,f),h,m;return d?d.value=p:(v.last=d={index:m=WE(f,!0),key:f,value:p,previous:h=v.last,next:null,removed:!1},v.first||(v.first=d),h&&(h.next=d),pn?v.size++:l.size++,m!=="F"&&(v.index[m]=d)),l},c=function(l,f){var p=u(l),v=WE(f),d;if(v!=="F")return p.index[v];for(d=p.first;d;d=d.next)if(d.key===f)return d};return HE(o,{clear:function(){for(var f=this,p=u(f),v=p.first;v;)v.removed=!0,v.previous&&(v.previous=v.previous.next=null),v=v.next;p.first=p.last=null,p.index=UE(null),pn?p.size=0:f.size=0},delete:function(l){var f=this,p=u(f),v=c(f,l);if(v){var d=v.next,h=v.previous;delete p.index[v.index],v.removed=!0,h&&(h.next=d),d&&(d.previous=h),p.first===v&&(p.first=d),p.last===v&&(p.last=h),pn?p.size--:f.size--}return!!v},forEach:function(f){for(var p=u(this),v=k4(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:p.first;)for(v(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!c(this,f)}}),HE(o,t?{get:function(f){var p=c(this,f);return p&&p.value},set:function(f,p){return s(this,f===0?0:f,p)}}:{add:function(f){return s(this,f=f===0?0:f,f)}}),pn&&O4(o,"size",{configurable:!0,get:function(){return u(this).size}}),a},setStrong:function(e,r,t){var n=r+" Iterator",a=ks(r),o=ks(n);R4(e,r,function(u,s){KE(this,{type:n,target:u,state:a(u),kind:s,last:null})},function(){for(var u=o(this),s=u.kind,c=u.last;c&&c.removed;)c=c.previous;return!u.target||!(u.last=c=c?c.next:u.state.first)?(u.target=null,za(void 0,!0)):za(s==="keys"?c.key:s==="values"?c.value:[c.key,c.value],!1)},t?"entries":"values",!t,!0),A4(r)}}});var JE=i(()=>{"use strict";var N4=DE(),M4=YE();N4("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},M4)});var QE=i(()=>{"use strict";JE()});var ZE=i((gJ,XE)=>{"use strict";XE.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,a){return t[e](n,a)}}});var oe=i((qJ,rT)=>{"use strict";var j4=W(),Va=ZE(),eT=j4("Map");rT.exports={Map:eT,set:Va("set",2),get:Va("get",1),has:Va("has",1),remove:Va("delete",1),proto:eT.prototype}});var Is=i(()=>{"use strict";var L4=q(),$4=N(),F4=D(),D4=pr(),B4=me(),Ya=oe(),tT=Z(),G4=_(),nT=Ya.Map,U4=Ya.has,H4=Ya.get,W4=Ya.set,K4=$4([].push),z4=tT||G4(function(){return nT.groupBy("ab",function(e){return e}).get("a").length!==1});L4({target:"Map",stat:!0,forced:tT||z4},{groupBy:function(r,t){D4(r),F4(t);var n=new nT,a=0;return B4(r,function(o){var u=t(o,a++);U4(n,u)?K4(H4(n,u),o):W4(n,u,[o])}),n}})});var J=i((SJ,aT)=>{"use strict";var V4=Xe(),Y4=TypeError;aT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new Y4(V4(e)+" is not a map")}});var Ps=i(()=>{"use strict";var J4=q(),Q4=J(),_s=oe(),X4=Z(),Z4=_s.get,eB=_s.has,rB=_s.set;J4({target:"Map",proto:!0,real:!0,forced:X4},{getOrInsert:function(r,t){return eB(Q4(this),r)?Z4(this,r):(rB(this,r,t),t)}})});var As=i(()=>{"use strict";var tB=q(),nB=D(),aB=J(),Rs=oe(),iB=Z(),oB=Rs.get,uB=Rs.has,sB=Rs.set;tB({target:"Map",proto:!0,real:!0,forced:iB},{getOrInsertComputed:function(r,t){if(aB(this),nB(t),uB(this,r))return oB(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return sB(this,r,n),n}})});var oT=i((kJ,iT)=>{"use strict";wr();QE();Is();Ps();As();Rt();br();var cB=V();iT.exports=cB.Map});var sT=i((IJ,uT)=>{"use strict";var lB=oT();Sr();uT.exports=lB});var Ns=i(()=>{"use strict";Ps()});var Ms=i(()=>{"use strict";As()});var cT=i(()=>{"use strict";Is()});var fT=i((jJ,lT)=>{"use strict";var fB=sT();Ns();Ms();cT();lT.exports=fB});var vT=i((LJ,pT)=>{"use strict";var pB=Y(),vB=X(),dB=te(),mB=me();pT.exports=function(e,r,t){return function(a){var o=dB(a),u=arguments.length,s=u>1?arguments[1]:void 0,c=s!==void 0,l=c?pB(s,u>2?arguments[2]:void 0):void 0,f=new e,p=0;return mB(o,function(v){var d=c?l(v,p++):v;t?r(f,vB(d)[0],d[1]):r(f,d)}),f}}});var mT=i(()=>{"use strict";var hB=q(),dT=oe(),yB=vT();hB({target:"Map",stat:!0,forced:!0},{from:yB(dT.Map,dT.set,!0)})});var yT=i((DJ,hT)=>{"use strict";var bB=X();hT.exports=function(e,r,t){return function(){for(var a=new e,o=arguments.length,u=0;u<o;u++){var s=arguments[u];t?r(a,bB(s)[0],s[1]):r(a,s)}return a}}});var gT=i(()=>{"use strict";var gB=q(),bT=oe(),qB=yT();gB({target:"Map",stat:!0,forced:!0},{of:qB(bT.Map,bT.set,!0)})});var xT=i(()=>{"use strict";var xB=q(),wB=G(),SB=me(),EB=M(),qT=D(),TB=oe().Map;xB({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=EB(this)?this:TB,a=new n;qT(t);var o=qT(a.set);return SB(r,function(u){wB(o,a,t(u),u)}),a}})});var wT=i(()=>{"use strict";var CB=q(),OB=J(),kB=oe().remove;CB({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=OB(this),t=!0,n,a=0,o=arguments.length;a<o;a++)n=kB(r,arguments[a]),t=t&&n;return!!t}})});var ET=i(()=>{"use strict";var IB=q(),_B=J(),js=oe(),PB=js.get,RB=js.has,ST=js.set;IB({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=_B(this),a,o;return RB(n,r)?(a=PB(n,r),"update"in t&&(a=t.update(a,r,n),ST(n,r,a)),a):(o=t.insert(r,n),ST(n,r,o),o)}})});var CT=i((YJ,TT)=>{"use strict";var AB=G();TT.exports=function(e,r,t){for(var n=t?e:e.iterator,a=e.next,o,u;!(o=AB(a,n)).done;)if(u=r(o.value),u!==void 0)return u}});var qe=i((JJ,OT)=>{"use strict";var NB=CT();OT.exports=function(e,r,t){return t?NB(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var kT=i(()=>{"use strict";var MB=q(),jB=Y(),LB=J(),$B=qe();MB({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=LB(this),n=jB(r,arguments.length>1?arguments[1]:void 0);return $B(t,function(a,o){if(!n(a,o,t))return!1},!0)!==!1}})});var _T=i(()=>{"use strict";var FB=q(),DB=Y(),BB=J(),IT=oe(),GB=qe(),UB=IT.Map,HB=IT.set;FB({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=BB(this),n=DB(r,arguments.length>1?arguments[1]:void 0),a=new UB;return GB(t,function(o,u){n(o,u,t)&&HB(a,u,o)}),a}})});var PT=i(()=>{"use strict";var WB=q(),KB=Y(),zB=J(),VB=qe();WB({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=zB(this),n=KB(r,arguments.length>1?arguments[1]:void 0),a=VB(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return a&&a.value}})});var RT=i(()=>{"use strict";var YB=q(),JB=Y(),QB=J(),XB=qe();YB({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=QB(this),n=JB(r,arguments.length>1?arguments[1]:void 0),a=XB(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return a&&a.key}})});var NT=i((iQ,AT)=>{"use strict";AT.exports=function(e,r){return e===r||e!==e&&r!==r}});var MT=i(()=>{"use strict";var ZB=q(),e5=NT(),r5=J(),t5=qe();ZB({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return t5(r5(this),function(t){if(e5(t,r))return!0},!0)===!0}})});var jT=i(()=>{"use strict";var n5=q(),a5=J(),i5=qe();n5({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=i5(a5(this),function(n,a){if(n===r)return{key:a}},!0);return t&&t.key}})});var $T=i(()=>{"use strict";var o5=q(),u5=Y(),s5=J(),LT=oe(),c5=qe(),l5=LT.Map,f5=LT.set;o5({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=s5(this),n=u5(r,arguments.length>1?arguments[1]:void 0),a=new l5;return c5(t,function(o,u){f5(a,n(o,u,t),o)}),a}})});var DT=i(()=>{"use strict";var p5=q(),v5=Y(),d5=J(),FT=oe(),m5=qe(),h5=FT.Map,y5=FT.set;p5({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=d5(this),n=v5(r,arguments.length>1?arguments[1]:void 0),a=new h5;return m5(t,function(o,u){y5(a,u,n(o,u,t))}),a}})});var BT=i(()=>{"use strict";var b5=q(),g5=J(),q5=me(),x5=oe().set;b5({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=g5(this),n=arguments.length,a=0;a<n;)q5(arguments[a++],function(o,u){x5(t,o,u)},{AS_ENTRIES:!0});return t}})});var GT=i(()=>{"use strict";var w5=q(),S5=D(),E5=J(),T5=qe(),C5=TypeError;w5({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=E5(this),n=arguments.length<2,a=n?void 0:arguments[1];if(S5(r),T5(t,function(o,u){n?(n=!1,a=o):a=r(a,o,u,t)}),n)throw new C5("Reduce of empty map with no initial value");return a}})});var UT=i(()=>{"use strict";var O5=q(),k5=Y(),I5=J(),_5=qe();O5({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=I5(this),n=k5(r,arguments.length>1?arguments[1]:void 0);return _5(t,function(a,o){if(n(a,o,t))return!0},!0)===!0}})});var WT=i(()=>{"use strict";var P5=q(),HT=D(),R5=J(),Ls=oe(),A5=TypeError,N5=Ls.get,M5=Ls.has,j5=Ls.set;P5({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=R5(this),a=arguments.length;HT(t);var o=M5(n,r);if(!o&&a<3)throw new A5("Updating absent value");var u=o?N5(n,r):HT(a>2?arguments[2]:void 0)(r,n);return j5(n,r,t(u,r,n)),n}})});var Fs=i((wQ,KT)=>{"use strict";var Ja=G(),$s=D(),Qa=M(),L5=X(),$5=TypeError;KT.exports=function(r,t){var n=L5(this),a=$s(n.get),o=$s(n.has),u=$s(n.set),s=arguments.length>2?arguments[2]:void 0,c;if(!Qa(t)&&!Qa(s))throw new $5("At least one callback required");return Ja(o,n,r)?(c=Ja(a,n,r),Qa(t)&&(c=t(c),Ja(u,n,r,c))):Qa(s)&&(c=s(),Ja(u,n,r,c)),c}});var zT=i(()=>{"use strict";var F5=q(),D5=Fs();F5({target:"Map",proto:!0,real:!0,forced:!0},{upsert:D5})});var VT=i(()=>{"use strict";var B5=q(),G5=Fs();B5({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:G5})});var JT=i((OQ,YT)=>{"use strict";var U5=fT();mT();gT();xT();wT();ET();kT();_T();PT();RT();MT();Ns();Ms();jT();$T();DT();BT();GT();UT();WT();zT();VT();YT.exports=U5});var XT=i((kQ,QT)=>{"use strict";QT.exports=JT()});var e0=i(()=>{"use strict";var H5=q(),W5=mt(),K5=Bi().indexOf,z5=ss(),Ds=W5([].indexOf),ZT=!!Ds&&1/Ds([1],1,-0)<0,V5=ZT||!z5("indexOf");H5({target:"Array",proto:!0,forced:V5},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return ZT?Ds(this,r,t)||0:K5(this,r,t)}})});var t0=i((PQ,r0)=>{"use strict";e0();var Y5=ue();r0.exports=Y5("Array","indexOf")});var a0=i((RQ,n0)=>{"use strict";var J5=U(),Q5=t0(),Bs=Array.prototype;n0.exports=function(e){var r=e.indexOf;return e===Bs||J5(Bs,e)&&r===Bs.indexOf?Q5:r}});var o0=i((AQ,i0)=>{"use strict";var X5=a0();i0.exports=X5});var s0=i((NQ,u0)=>{"use strict";var Z5=o0();u0.exports=Z5});var l0=i((MQ,c0)=>{"use strict";var e6=s0();c0.exports=e6});var p0=i((jQ,f0)=>{"use strict";f0.exports=l0()});var I0=i(()=>{"use strict";var o6=q(),u6=te(),k0=Ln(),s6=_(),c6=s6(function(){k0(1)});o6({target:"Object",stat:!0,forced:c6},{keys:function(r){return k0(u6(r))}})});var P0=i((BX,_0)=>{"use strict";I0();var l6=V();_0.exports=l6.Object.keys});var A0=i((GX,R0)=>{"use strict";var f6=P0();R0.exports=f6});var M0=i((UX,N0)=>{"use strict";var p6=A0();N0.exports=p6});var L0=i((HX,j0)=>{"use strict";var v6=M0();j0.exports=v6});var F0=i((WX,$0)=>{"use strict";$0.exports=L0()});var B0=i((KX,D0)=>{D0.exports=F0()});var Vs=i((aZ,U0)=>{var zs={yellow:"#ffd400",red:"#ff6b6b",green:"#51cf66",blue:"#339af0",purple:"#9775fa",pink:"#f06595",orange:"#ff922b",teal:"#20c997"},q6=zs.yellow,x6=Object.keys(zs),w6=/^#[0-9a-fA-F]{6}$/;U0.exports={COLOR_PRESETS:zs,DEFAULT_COLOR:q6,PRESET_NAMES:x6,HEX_COLOR_REGEX:w6}});var Je="";function lc(e){Je=e.replace(/\/+$/,"")}async function lr(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function fc(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${Je}/comments?${t}`);return await lr(n,"Failed to fetch comments"),(await n.json()).data}async function ai({uri:e,document:r,quote:t,prefix:n,suffix:a,body:o,author:u,parent:s,color:c}){let l={quote:t,prefix:n,suffix:a,body:o,author:u,parent:s};c&&(l.color=c),r?l.document=r:l.uri=e;let f=await fetch(`${Je}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});return await lr(f,"Failed to create comment"),f.json()}async function ii(e,{body:r,color:t}){let n={};r!==void 0&&(n.body=r),t!==void 0&&(n.color=t);let a=await fetch(`${Je}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});return await lr(a,"Failed to update comment"),a.json()}async function pc(e,r){let t=await fetch(`${Je}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});return await lr(t,"Failed to update comment status"),t.json()}async function vc(e){let r=await fetch(`${Je}/comments/${e}`,{method:"DELETE"});await lr(r,"Failed to delete comment")}async function dc(e,r,t){let n=await fetch(`${Je}/comments/${e}/reactions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({emoji:r,author:t})});return await lr(n,"Failed to add reaction"),n.json()}async function mc(e,r,t){let n=await fetch(`${Je}/comments/${e}/reactions/${encodeURIComponent(r)}?author=${encodeURIComponent(t)}`,{method:"DELETE"});return await lr(n,"Failed to remove reaction"),n.json()}var oF=b(Kr(),1),uF=b(Wn(),1),sF=b(ua(),1),cF=b(sa(),1),lF=b(ca(),1);var Mu=b(ot(),1);function lb(e,r,t,n,a,o,u){try{var s=e[o](u),c=s.value}catch(l){return void t(l)}s.done?r(c):Mu.default.resolve(c).then(n,a)}function kr(e){return function(){var r=this,t=arguments;return new Mu.default(function(n,a){var o=e.apply(r,t);function u(c){lb(o,n,a,u,s,"next",c)}function s(c){lb(o,n,a,u,s,"throw",c)}u(void 0)})}}function zt(e,r){this.v=e,this.k=r}function ir(e){return new zt(e,0)}var ju=b(ot(),1),qb=b(Oe(),1),xb=b(Ea(),1);function Ie(e){return function(){return new Vt(e.apply(this,arguments))}}function Vt(e){var r,t;function n(o,u){try{var s=e[o](u),c=s.value,l=c instanceof zt;ju.default.resolve(l?c.v:c).then(function(f){if(l){var p=o==="return"?"return":"next";if(!c.k||f.done)return n(p,f);f=e[p](f).value}a(s.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){a("throw",f)}}function a(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new ju.default(function(s,c){var l={key:o,arg:u,resolve:s,reject:c,next:null};t?t=t.next=l:(r=t=l,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Vt.prototype[typeof qb.default=="function"&&xb.default||"@@asyncIterator"]=function(){return this},Vt.prototype.next=function(e){return this._invoke("next",e)},Vt.prototype.throw=function(e){return this._invoke("throw",e)},Vt.prototype.return=function(e){return this._invoke("return",e)};var fF=b(ce(),1),pF=b(Wq(),1);function le(e){var r,t=aF(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function aF(e){return"startContainer"in e}function ur(e){if(iF(e))return e;var r=e,t=le(r).createRange();return t.selectNodeContents(r),t}function iF(e){return"startContainer"in e}var nx=b(tx(),1);function ax(e){if((0,nx.default)(e))return e}var yx=b(Oe(),1),bx=b(Ho(),1),gx=b(is(),1);function qx(e,r){var t=e==null?null:typeof yx.default<"u"&&(0,bx.default)(e)||e["@@iterator"];if(t!=null){var n,a,o,u,s=[],c=!0,l=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&((0,gx.default)(s).call(s,n.value),s.length!==r);c=!0);}catch(f){l=!0,a=f}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(l)throw a}}return s}}var xx=b(Ni(),1),wx=b(oo(),1);function Fa(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function os(e,r){if(e){var t;if(typeof e=="string")return Fa(e,r);var n=(0,xx.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,wx.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Fa(e,r):void 0}}function Sx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ue(e,r){return ax(e)||qx(e,r)||os(e,r)||Sx()}var Ex=b(Oe(),1),Tx=b(Ea(),1),Cx=b(tn(),1),un=b(ot(),1);function st(e){var r,t,n,a=2;for(typeof Ex.default<"u"&&(t=Tx.default,n=Cx.default);a--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Da(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Da(e){function r(t){if(Object(t)!==t)return un.default.reject(new TypeError(t+" is not an object."));var n=t.done;return un.default.resolve(t.value).then(function(a){return{value:a,done:n}})}return Da=function(n){this.s=n,this.n=n.next},Da.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var a=this.s.return;return a===void 0?un.default.resolve({value:n,done:!0}):r(a.apply(this.s,arguments))},throw:function(n){var a=this.s.return;return a===void 0?un.default.reject(n):r(a.apply(this.s,arguments))}},new Da(e)}var FD=b(ce(),1);var AD=b(ce(),1),ND=b(Bx(),1),MD=b(Ux(),1),jD=b(fw(),1),LD=b(_w(),1),$D=b(ps(),1);var Hs=b(ce(),1);var R3=b(ce(),1);var ds=b(ce(),1);function sn(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function Hw(e,r){return sn(e.startChunk,r.startChunk)&&sn(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function Ir(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var vs=b(Qt(),1);var cn=b(Oe(),1),Ww=b(tn(),1);function He(e){"@babel/helpers - typeof";return He=typeof cn.default=="function"&&typeof Ww.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof cn.default=="function"&&r.constructor===cn.default&&r!==cn.default.prototype?"symbol":typeof r},He(e)}var nS=b(tS(),1);function aS(e,r){if(He(e)!="object"||!e)return e;var t=e[nS.default];if(t!==void 0){var n=t.call(e,r||"default");if(He(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Ba(e){var r=aS(e,"string");return He(r)=="symbol"?r:r+""}function iS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,vs.default)(e,Ba(n.key),n)}}function ln(e,r,t){return r&&iS(e.prototype,r),t&&iS(e,t),(0,vs.default)(e,"prototype",{writable:!1}),e}var oS=b(Qt(),1);function _r(e,r,t){return(r=Ba(r))in e?(0,oS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var uS=b(Kr(),1);var Ga="Iterator exhausted before seek ended.",fn=function(){function e(r){Ir(this,e),this.chunker=r,_r(this,"currentChunkPosition",0),_r(this,"offsetInChunk",0),this.seekTo(0)}return ln(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,a)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!sn(this.currentChunk,n);){var p=this._readToPreviousChunk(),v=Ue(p,2),d=v[0],h=v[1];if(t&&(u=d+u),h===null)throw new RangeError(Ga)}else for(;!sn(this.currentChunk,n);){var s=this._readToNextChunk(),c=Ue(s,2),l=c[0],f=c[1];if(t&&(u+=l),f===null)throw new RangeError(Ga)}var m=this.currentChunkPosition+a;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,uS.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var s=this.currentChunkPosition+this.currentChunk.data.length;if(s<=n){var c=this._readToNextChunk(),l=Ue(c,2),f=l[0],p=l[1];if(t&&(u+=f),p===null){if(this.position===n||o)break;throw new RangeError(Ga)}}else{var v=a?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,v)),this.offsetInChunk=v,a&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=a?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var h=this._readToPreviousChunk(),m=Ue(h,2),x=m[0],y=m[1];if(t&&(u=x+u),y===null){if(o)break;throw new RangeError(Ga)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,a=this.chunker.nextChunk();return a!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,a]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function cS(e,r){return ms.apply(this,arguments)}function ms(){return ms=kr(ds.default.mark(function e(r,t){var n,a,o,u,s,c,l,f,p,v,d,h,m,x,y,g,O,k,w,E,S,C,L=arguments;return ds.default.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:n=L.length>2&&L[2]!==void 0?L[2]:{},a=n.minimalContext,o=a===void 0?!1:a,u=n.minimumQuoteLength,s=u===void 0?0:u,c=n.maxWordLength,l=c===void 0?50:c,f=new fn(t()),p=new fn(t()),f.seekToChunk(r.startChunk,r.startIndex),v=f.readToChunk(r.endChunk,r.endIndex),d="",h="",m=function(){return d.length+v.length+h.length},m()<s&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),x=Math.floor((s-m())/2),d=f.read(-x,!1,!0)+d,m()<s&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),y=s-m(),h=h+f.read(y,!1,!0),m()<s&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),g=s-m(),d=f.read(-g,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=Ua(f,l,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+Ua(f,l,!1));case 11:return O={type:"TextQuoteSelector",exact:v,prefix:d,suffix:h},k=Ha(O)(t()),I.next=16,k.next();case 16:if(w=I.sent,!(!w.done&&Hw(w.value,r))){I.next=21;break}return I.next=20,k.next();case 20:w=I.sent;case 21:if(!w.done){I.next=23;break}return I.abrupt("return",O);case 23:if(E=w.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),p.seekToChunk(E.startChunk,E.startIndex-d.length),S=sS(f,p,!0),S!==void 0&&!o&&(S=Ua(f,l,!0)+S),f.seekToChunk(r.endChunk,r.endIndex+h.length),p.seekToChunk(E.endChunk,E.endIndex+h.length),C=sS(f,p,!1),C!==void 0&&!o&&(C=C+Ua(f,l,!1)),!o){I.next=44;break}if(!(S!==void 0&&(C===void 0||S.length<=C.length))){I.next=37;break}d=S+d,I.next=42;break;case 37:if(C===void 0){I.next=41;break}h=h+C,I.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:I.next=46;break;case 44:S!==void 0&&(d=S+d),C!==void 0&&(h=h+C);case 46:I.next=11;break;case 48:case"end":return I.stop()}},e)})),ms.apply(this,arguments)}function sS(e,r,t){for(var n="";;){var a=void 0;try{a=e.read(t?-1:1)}catch{return}n=t?a+n:n+a;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(a!==o)return n}}function Ua(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var a=void 0;try{a=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(HD(a)){e.seekBy(t?1:-1);break}n=t?a+n:n+a}return n}function HD(e){return/^\s+$/.test(e)}var JS=b(Kr(),1),QS=b(Wn(),1),XS=b(ua(),1),ZS=b(sa(),1),eE=b(ca(),1);var bs=b(ce(),1),rE=b(RS(),1),tE=b(zS(),1);function VS(e,r){var t;if(typeof XS.default>"u"||(0,ZS.default)(e)==null){if(Array.isArray(e)||(t=C3(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,s;return{s:function(){t=(0,eE.default)(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){u=!0,s=l},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw s}}}}function C3(e,r){var t;if(e){if(typeof e=="string")return YS(e,r);var n=(0,JS.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,QS.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return YS(e,r)}}function YS(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Ha(e){return function(){var r=Ie(bs.default.mark(function n(a){var o,u,s,c,l,f,p,v,d,h,m,x,y,g,O,k,w,E,S,C,L,Se,I,re,Ee,Q,F;return bs.default.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:o=e.exact,u=e.prefix||"",s=e.suffix||"",c=u+o+s,l=[],f=!0;case 6:p=a.currentChunk,v=p.data,d=[],h=VS(l),T.prev=10,h.s();case 12:if((m=h.n()).done){T.next=27;break}if(x=m.value,y=x.charactersMatched,x.endChunk===void 0&&(g=u.length+o.length-y,g<=v.length&&(x.endChunk=p,x.endIndex=g)),x.startChunk===void 0&&(O=u.length-y,(O<v.length||x.endChunk!==void 0)&&(x.startChunk=p,x.startIndex=O)),k=c.length-y,!(k<=v.length)){T.next=24;break}if(!(0,rE.default)(v).call(v,c.substring(y))){T.next=22;break}return T.next=22,x;case 22:T.next=25;break;case 24:v===c.substring(y,y+v.length)&&(x.charactersMatched+=v.length,d.push(x));case 25:T.next=12;break;case 27:T.next=32;break;case 29:T.prev=29,T.t0=T.catch(10),h.e(T.t0);case 32:return T.prev=32,h.f(),T.finish(32);case 35:if(l=d,!(c.length<=v.length)){T.next=49;break}w=0;case 38:if(!(w<=v.length)){T.next=49;break}if(E=v.indexOf(c,w),E!==-1){T.next=42;break}return T.abrupt("break",49);case 42:if(w=E+1,!(E===0&&c.length===0&&!f)){T.next=45;break}return T.abrupt("continue",38);case 45:return T.next=47,{startChunk:p,startIndex:E+u.length,endChunk:p,endIndex:E+u.length+o.length};case 47:T.next=38;break;case 49:for(S=[],C=Math.max(v.length-c.length+1,0),L=function(Ye){var sc=v[Ye];S=(0,tE.default)(S).call(S,function(bC){return sc===c[Ye-bC]}),sc===c[0]&&S.push(Ye)},Se=C;Se<v.length;Se++)L(Se);I=VS(S);try{for(I.s();!(re=I.n()).done;)Ee=re.value,Q=v.length-Ee,F={charactersMatched:Q},Q>=u.length+o.length&&(F.endChunk=p,F.endIndex=Ee+u.length+o.length),(Q>u.length||F.endChunk!==void 0)&&(F.startChunk=p,F.startIndex=Ee+u.length),l.push(F)}catch(Nr){I.e(Nr)}finally{I.f()}f=!1;case 56:if(a.nextChunk()!==null){T.next=6;break}case 57:case"end":return T.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var _3=b(ce(),1);var O3=b(Kr(),1),k3=b(ps(),1);var P3=b(ce(),1);var dn=b(qE(),1);var wE=b(Ca(),1),SE=b(Qt(),1);var xs=b(Oa(),1),xE=b(Jt(),1);function sr(e,r){var t;return sr=xs.default?(0,xE.default)(t=xs.default).call(t):function(n,a){return n.__proto__=a,n},sr(e,r)}function ws(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,wE.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,SE.default)(e,"prototype",{writable:!1}),r&&sr(e,r)}function EE(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function TE(e,r){if(r&&(He(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return EE(e)}var CE=b(Oa(),1),OE=b(Jt(),1),Ss=b(Ta(),1);function Pr(e){var r;return Pr=CE.default?(0,OE.default)(r=Ss.default).call(r):function(t){return t.__proto__||(0,Ss.default)(t)},Pr(e)}var Us=b(XT(),1),q0=b(Ca(),1);var v0=b(p0(),1);function d0(e){try{var r;return(0,v0.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var h0=b(Wa(),1),y0=b(is(),1),b0=b(Jt(),1);var m0=b(Wa(),1);function Gs(){try{var e=!Boolean.prototype.valueOf.call((0,m0.default)(Boolean,[],function(){}))}catch{}return(Gs=function(){return!!e})()}function g0(e,r,t){if(Gs())return h0.default.apply(null,arguments);var n=[null];(0,y0.default)(n).apply(n,r);var a=new((0,b0.default)(e).apply(e,n));return t&&sr(a,t.prototype),a}function vn(e){var r=typeof Us.default=="function"?new Us.default:void 0;return vn=function(n){if(n===null||!d0(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,a)}function a(){return g0(n,arguments,Pr(this).constructor)}return a.prototype=(0,q0.default)(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),sr(a,n)},vn(e)}function S0(e,r){var t=le(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),a=x0(e.startContainer,e.startOffset),o=Ue(a,2),u=o[0],s=o[1];for(n.currentNode=u;s===u.length&&n.nextNode();)u=n.currentNode,s=0;e.setStart(u,s);var c=x0(e.endContainer,e.endOffset),l=Ue(c,2),f=l[0],p=l[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function x0(e,r){var t;if(w0(e))return[e,r];var n;if(r6(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(w0(n))return[n,0];var a=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=a.createTreeWalker(a,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function w0(e){return e.nodeType===Node.TEXT_NODE}function r6(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function T0(e){var r=t6();return function(){var n=Pr(e),a;if(r){var o=Pr(this).constructor;a=(0,dn.default)(n,arguments,o)}else a=n.apply(this,arguments);return TE(this,a)}}function t6(){if(typeof Reflect>"u"||!dn.default||dn.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,dn.default)(Boolean,[],function(){})),!0}catch{return!1}}var Xa=function(e){ws(t,e);var r=T0(t);function t(n){return Ir(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(vn(TypeError)),n6=function(e){ws(t,e);var r=T0(t);function t(n){return Ir(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(vn(TypeError)),Rr=function(){function e(r){var t=this;if(Ir(this,e),_r(this,"scope",void 0),_r(this,"iter",void 0),this.scope=ur(r),this.iter=le(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!E0(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Xa}}return ln(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!E0(t))throw new Xa;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new n6;var n=t===this.scope.startContainer?this.scope.startOffset:0,a=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:a,data:t.data.substring(n,a),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=S0(t,this.scope),a=this.nodeToChunk(n.startContainer),o=n.startOffset-a.startOffset,u=this.nodeToChunk(n.endContainer),s=n.endOffset-u.startOffset;return{startChunk:a,startIndex:o,endChunk:u,endIndex:s}}},{key:"chunkRangeToRange",value:function(t){var n=le(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function E0(e){return e.nodeType===Node.TEXT_NODE}function C0(e,r){return Ws.apply(this,arguments)}function Ws(){return Ws=kr(Hs.default.mark(function e(r,t){var n,a,o,u=arguments;return Hs.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},a=ur(t??le(r)),o=new Rr(a),c.next=5,cS(o.rangeToChunkRange(r),function(){return new Rr(a)},n);case 5:return c.abrupt("return",c.sent);case 6:case"end":return c.stop()}},e)})),Ws.apply(this,arguments)}var Ks=b(ce(),1);function O0(e){var r=Ha(e);return function(){var t=Ie(Ks.default.mark(function a(o){var u,s,c,l,f,p,v,d;return Ks.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new Rr(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof Xa)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:s=!0,c=!1,m.prev=13,f=st(r(u));case 15:return m.next=17,ir(f.next());case 17:return p=m.sent,s=p.done,m.next=21,ir(p.value);case 21:if(v=m.sent,s){m.next=29;break}return d=v,m.next=26,u.chunkRangeToRange(d);case 26:s=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),c=!0,l=m.t1;case 35:if(m.prev=35,m.prev=36,!(!s&&f.return!=null)){m.next=40;break}return m.next=40,ir(f.return());case 40:if(m.prev=40,!c){m.next=43;break}throw l;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},a,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(a){return t.apply(this,arguments)}return n}()}var a6=b(ce(),1);var i6=b(ce(),1);var d6=b(B0(),1),m6=b(Kr(),1),h6=b(Wn(),1),y6=b(ua(),1),b6=b(sa(),1),g6=b(ca(),1);async function G0(e,r){let t=await C0(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function ct(e,r){let t=O0({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var he=b(Vs()),mn=b(Vs());function lt(e){if(!e||typeof e!="string")return null;let r=e.trim().toLowerCase();return mn.COLOR_PRESETS[r]?mn.COLOR_PRESETS[r]:mn.HEX_COLOR_REGEX.test(r)?r:null}function Za(e,r){let t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16);return`rgba(${t}, ${n}, ${a}, ${r})`}var ft="fb-highlight",H0="fb-highlight-active";var ei=new Map,hn=null;function K0(e){hn=e}function pt(e,r,t){let n=lt(t)||he.DEFAULT_COLOR;ei.set(r,n);let a=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let o=W0(e,r,n);a.push(o)}else{let o=E6(e);for(let u=0;u<o.length;u++){let s=o[u],c=document.createRange();s===e.startContainer?(c.setStart(s,e.startOffset),c.setEnd(s,s.textContent.length)):s===e.endContainer?(c.setStart(s,0),c.setEnd(s,e.endOffset)):c.selectNodeContents(s),c.collapsed||a.push(W0(c,r,n))}}return a}function W0(e,r,t){let n=e.commonAncestorContainer;for(;n&&n.nodeType!==Node.ELEMENT_NODE;)n=n.parentNode;let a=n,o=!1,u=null;for(;a;){if(a.tagName==="foreignObject"){o=!1;break}a.tagName==="text"&&a instanceof SVGElement&&(o=!0),a.tagName==="svg"&&(u=a),a=a.parentElement}if(o&&u)return S6(e,r,u,t);let s=document.createElement("mark");s.className=ft,s.dataset.commentId=r,s.style.backgroundColor=Za(t,.35),s.style.cursor="pointer",s.style.borderRadius="2px",s.addEventListener("click",()=>{hn&&hn(r)});try{e.surroundContents(s)}catch(c){return console.warn("[feedback-layer] Failed to create highlight:",c),null}return s}function S6(e,r,t,n){try{let a=e.getClientRects();if(a.length===0)return null;let o="http://www.w3.org/2000/svg",u=t.getScreenCTM();if(!u)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let s=e.commonAncestorContainer;for(;s&&s.nodeType!==Node.ELEMENT_NODE;)s=s.parentNode;let c=s,l=null;for(;c&&c!==t;){if(c.tagName==="text"){l=c.parentElement;break}c=c.parentElement}let f=l||t,p=u;f!==t&&f.getScreenCTM&&(p=f.getScreenCTM());let v=document.createElementNS(o,"g");v.setAttribute("class",ft),v.setAttribute("data-comment-id",r),v.style.cursor="pointer";for(let y=0;y<a.length;y++){let g=a[y],O=document.createElementNS(o,"rect"),k=t.createSVGPoint();k.x=g.left,k.y=g.top;let w=k.matrixTransform(p.inverse()),E=g.width/p.a,S=g.height/p.d;O.setAttribute("x",w.x),O.setAttribute("y",w.y),O.setAttribute("width",E),O.setAttribute("height",S),O.setAttribute("fill",n),O.setAttribute("fill-opacity","0.35"),O.setAttribute("rx","2"),O.setAttribute("ry","2"),O.style.pointerEvents="none",v.appendChild(O)}f&&f!==t?f.appendChild(v):t.appendChild(v);let d=e.commonAncestorContainer;for(;d&&d.nodeType!==Node.ELEMENT_NODE;)d=d.parentNode;let h=new Set,m=d;for(;m&&m!==t;)m.tagName==="text"&&m instanceof SVGElement&&(h.add(m),m.querySelectorAll("tspan").forEach(g=>h.add(g))),m=m.parentElement;let x=y=>{y.preventDefault(),y.stopPropagation(),hn&&hn(r)};return h.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",x),y.dataset.fbCommentId=r}),v}catch(a){return console.warn("[feedback-layer] Failed to create SVG highlight:",a),null}}function yn(e){ei.delete(e),document.querySelectorAll(`.${ft}[data-comment-id="${e}"]`).forEach(n=>{let a=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)a.removeChild(n);else{for(;n.firstChild;)a.insertBefore(n.firstChild,n);a.removeChild(n),a.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function z0(){ei.clear(),document.querySelectorAll(`.${ft}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function bn(e){document.querySelectorAll(`.${ft}`).forEach(r=>{let t=r.dataset.commentId,n=t===e,a=ei.get(t)||he.DEFAULT_COLOR,o=Za(a,.55),u=Za(a,.35);n?r.classList.add(H0):r.classList.remove(H0),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(c=>{c.setAttribute("fill",a),c.setAttribute("fill-opacity",n?"0.55":"0.35")}):r.style.backgroundColor=n?o:u})}function Ys(e){let r=document.querySelector(`.${ft}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function E6(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let a=document.createRange();return a.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,a)<0&&e.compareBoundaryPoints(Range.START_TO_END,a)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function V0(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,a)=>{let o=[`**${a+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let s of u)o.push(`  - **[${s.author}]** (reply): ${s.body}`);return o.join(`
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
[numbered list matching feedback numbers, explaining what you changed]`}function Ke(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var T6=`
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
`,J0=null,Q0=null;function X0(e,r){Q0=e,J0=r,C6()}function C6(){let e=document.createElement("style");e.textContent=T6,document.head.appendChild(e)}function Z0(){let e=J0(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let a=document.createElement("button");a.className="hf-modal-close",a.textContent="\xD7",a.addEventListener("click",()=>r.remove()),n.appendChild(a);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",p=>{p.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let s=document.querySelector(Q0.contentSelector||"body").innerHTML,c=Y0(s,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${c.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${Ke(c)}</textarea>
  `;let l=document.createElement("button");l.className="hf-btn hf-btn-primary",l.textContent="Copy Prompt",l.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c),l.textContent="Copied!"}catch{l.textContent="Copy failed"}setTimeout(()=>l.textContent="Copy Prompt",2e3)}),u.appendChild(l);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function eC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function Js(e,r){return e.length>r?e.slice(0,r)+"...":e}function rC(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var gn=null;function nC(e){gn=document.createElement("div"),gn.className="fb-toast-container",e.appendChild(gn)}function ze(e,r="success"){if(!gn)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>tC(t)),t.appendChild(o)}gn.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>tC(t),r==="error"?8e3:4e3)}function tC(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}function aC(e,r){return r<=0?0:(e%r+r)%r}var O6=320,uC="feedback-layer-commenter",B=null,fe=null,xe=null,Qs=null,sC=null,Xs=null,Zs=null,ec=null,rc=null,wn=null,k6=null,tc=null,cC=!1,lC=[],nc=new Set,Pe=-1,qn=null,iC=!1;function I6(){iC||(iC=!0,F6())}function Ve(){return localStorage.getItem(uC)||""}function fC({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:a,onReaction:o,onColorChange:u,defaultColor:s}){sC=e,Xs=r,Zs=t,ec=n,rc=a,wn=o,k6=u,tc=s||null,I6(),B=document.createElement("div"),B.className="fb-sidebar fb-sidebar-collapsed",B.setAttribute("role","complementary"),B.setAttribute("aria-label","Feedback sidebar"),B.innerHTML=`
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
  `;let c=document.createElement("button");c.className="fb-sidebar-tab",c.textContent="Feedback",c.addEventListener("click",()=>vt()),document.body.appendChild(c),document.body.appendChild(B),nC(B),fe=B.querySelector(".fb-comment-list"),fe.setAttribute("role","list"),xe=B.querySelector(".fb-form-section");let l=B.querySelector(".fb-name-input");l.addEventListener("input",()=>{localStorage.setItem(uC,l.value.trim())}),B.querySelector(".fb-ai-btn").addEventListener("click",()=>Z0()),B.querySelector(".fb-shortcuts-btn").addEventListener("click",()=>vC()),B.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>ac());let d=B.querySelector(".fb-show-resolved-cb");d.addEventListener("change",()=>{cC=d.checked,Re(lC,nc)}),document.addEventListener("keydown",P6)}function vt(){B.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden"),A6(),fe?.querySelector(".fb-thread .fb-cmt-card")&&ri(0)}function ac(){B.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden"),dC(),Pe=-1,document.body.focus()}function pC(){let e=document.activeElement;if(!e)return!1;let r=e.tagName;return r==="TEXTAREA"||r==="INPUT"||r==="SELECT"||e.isContentEditable}function xn(){return fe?Array.from(fe.querySelectorAll(".fb-thread > .fb-cmt-card:first-child")):[]}function ri(e){let r=xn();if(r.length===0)return;e=aC(e,r.length),Pe=e,fe.querySelectorAll(".fb-cmt-card").forEach(a=>a.classList.remove("fb-cmt-active"));let t=r[e];t.classList.add("fb-cmt-active"),t.scrollIntoView({behavior:"smooth",block:"nearest"});let n=t.closest(".fb-thread");n?.dataset.commentId&&nc.has(n.dataset.commentId)&&(bn(n.dataset.commentId),Ys(n.dataset.commentId))}function _6(e){if(B.classList.contains("fb-sidebar-collapsed"))return;let r=e.key;if(r==="Escape"){e.preventDefault(),ac();return}if(!pC()){if(r==="Enter"){let t=xn();if(Pe>=0&&Pe<t.length){e.preventDefault();let a=t[Pe].closest(".fb-thread")?.querySelector(".fb-reply-btn");a&&a.click()}return}if(r==="j"){if(e.preventDefault(),xn().length===0)return;let n=Pe<0?0:Pe+1;ri(n);return}if(r==="k"){e.preventDefault();let t=xn();if(t.length===0)return;let n=Pe<0?t.length-1:Pe-1;ri(n);return}if(r==="?"){e.preventDefault(),vC();return}}}function vC(){let e=document.querySelector(".fb-shortcuts-overlay");if(e){e.remove();return}let r=document.createElement("div");r.className="fb-shortcuts-overlay";let t=document.createElement("div");t.className="fb-shortcuts-modal",t.innerHTML=`
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
  `;let n=()=>r.remove();t.querySelector(".fb-shortcuts-close").addEventListener("click",n),r.addEventListener("click",a=>{a.target===r&&n()}),r.addEventListener("keydown",a=>{a.key==="Escape"&&(a.stopPropagation(),n())}),r.appendChild(t),document.body.appendChild(r),t.querySelector(".fb-shortcuts-close").focus()}function P6(e){pC()||e.key==="s"&&(e.preventDefault(),R6())}function R6(){B.classList.contains("fb-sidebar-collapsed")?vt():ac()}function A6(){dC(),qn=_6,document.addEventListener("keydown",qn)}function dC(){qn&&(document.removeEventListener("keydown",qn),qn=null)}function mC(e){if(vt(),!Ve()){let u=B.querySelector(".fb-name-input");u.classList.add("fb-name-input-error"),setTimeout(()=>u.classList.remove("fb-name-input-error"),2e3)}Qs=e,xe.style.display="";let r=Object.entries(he.COLOR_PRESETS),t=tc||he.DEFAULT_COLOR;xe.innerHTML=`
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
  `;let n=t;xe.querySelectorAll(".fb-color-swatch").forEach(u=>{u.addEventListener("click",s=>{s.preventDefault(),xe.querySelectorAll(".fb-color-swatch").forEach(c=>c.classList.remove("fb-color-swatch-active")),u.classList.add("fb-color-swatch-active"),n=u.dataset.color})});let a=xe.querySelector(".fb-form-textarea");a.focus();let o=()=>{if(!Ve()){let s=B.querySelector(".fb-name-input");s.focus(),s.style.outline="2px solid var(--remarq-danger)",setTimeout(()=>s.style.outline="",2e3);return}let u=a.value.trim();u&&(sC({comment:u,commenter:Ve(),color:n}),xe.style.display="none",Qs=null)};xe.querySelector(".fb-submit-btn").addEventListener("click",o),a.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),xe.querySelector(".fb-cancel-btn").addEventListener("click",()=>{xe.style.display="none",Qs=null}),xe.scrollIntoView({behavior:"smooth",block:"nearest"})}function Re(e,r=new Set,t=new Map){lC=e,nc=r,Pe=-1,fe.innerHTML="";let{topLevel:n,repliesByParent:a}=eC(e),o=[],u=[];for(let l of n)r.has(l.id)?o.push(l):u.push(l);o.sort((l,f)=>{let p=t.get(l.id),v=t.get(f.id);return!p||!v?0:p.compareBoundaryPoints(Range.START_TO_START,v)});let s=[...o,...u],c=cC?s:s.filter(l=>l.status!=="closed");if(s.length===0){fe.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}if(c.length===0){fe.innerHTML=`<div class="fb-empty">All ${s.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let l of c){let f=!r.has(l.id),p=document.createElement("div");p.className="fb-thread",p.setAttribute("role","listitem"),p.setAttribute("tabindex","0"),p.dataset.commentId=l.id,p.appendChild(oC(l,!1,f));let v=a.get(l.id)||[];for(let h of v)p.appendChild(oC(h,!0));let d=document.createElement("button");d.className="fb-reply-btn",d.textContent="Reply",d.addEventListener("click",h=>{h.stopPropagation(),L6(l.id,p,d)}),p.appendChild(d),p.addEventListener("focus",()=>{let m=xn().indexOf(p.querySelector(".fb-cmt-card"));m>=0&&ri(m)}),fe.appendChild(p)}}function oC(e,r,t=!1){let n=e.status==="closed",a=document.createElement("div");a.className="fb-cmt-card"+(n?" fb-cmt-closed":"")+(r?" fb-cmt-reply":"")+(t?" fb-cmt-orphaned":""),a.dataset.id=e.id;let o=t&&e.quote?`<div class="fb-cmt-orphaned-quote">Content Deleted: "${Ke(Js(e.quote,120))}"</div>`:"";a.innerHTML=`
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
  `;let u=a.querySelector(".fb-reactions");return M6(u,e),r||(a.addEventListener("click",s=>{s.target.closest(".fb-cmt-delete")||s.target.closest(".fb-cmt-resolve")||s.target.closest(".fb-cmt-edit")||s.target.closest(".fb-reactions")||(t||(bn(e.id),Ys(e.id)),fe.querySelectorAll(".fb-cmt-card").forEach(c=>c.classList.remove("fb-cmt-active")),a.classList.add("fb-cmt-active"))}),a.querySelector(".fb-cmt-resolve").addEventListener("click",s=>{s.stopPropagation(),Zs&&Zs(e.id,!n)})),a.querySelector(".fb-cmt-edit").addEventListener("click",s=>{s.stopPropagation(),$6(e,a)}),a.querySelector(".fb-cmt-delete").addEventListener("click",s=>{s.stopPropagation(),Xs&&Xs(e.id)}),a}var ic={"\u{1F44D}":"Like","\u2764\uFE0F":"Love","\u{1F440}":"Seen","\u{1F389}":"Celebrate","\u{1F914}":"Question","\u{1F602}":"Funny","\u2795":"Plus One"},N6=Object.keys(ic);function M6(e,r){let t=r.reactions||[],n=Ve();for(let o of t){let u=document.createElement("button");u.className="fb-reaction-badge",n&&o.authors.includes(n)&&u.classList.add("fb-reaction-mine");let c=ic[o.emoji];u.innerHTML=`${o.emoji}<span class="fb-reaction-count">${o.count}</span>`,u.title=(c?c+": ":"")+o.authors.join(", "),u.addEventListener("click",l=>{l.stopPropagation(),wn&&wn(r.id,o.emoji)}),e.appendChild(u)}let a=document.createElement("button");a.className="fb-reaction-add",a.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><circle cx="9" cy="10" r="0.5" fill="currentColor"/><circle cx="15" cy="10" r="0.5" fill="currentColor"/></svg>',a.title="Add reaction",a.addEventListener("click",o=>{o.stopPropagation(),j6(e,r,a)}),e.appendChild(a)}function j6(e,r,t){let n=e.querySelector(".fb-emoji-picker");if(n){n.remove();return}let a=document.createElement("div");a.className="fb-emoji-picker";for(let u of N6){let s=ic[u],c=document.createElement("button");c.className="fb-emoji-option",c.textContent=u,c.title=s,c.addEventListener("click",l=>{l.stopPropagation(),a.remove(),wn&&wn(r.id,u)}),a.appendChild(c)}e.insertBefore(a,t.nextSibling);let o=u=>{!a.contains(u.target)&&u.target!==t&&(a.remove(),document.removeEventListener("click",o,!0))};setTimeout(()=>document.addEventListener("click",o,!0),0)}function L6(e,r,t){vt();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let a=document.createElement("div");a.className="fb-reply-form",a.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!Ve()){let c=B.querySelector(".fb-name-input");c.focus(),c.style.outline="2px solid var(--remarq-danger)",setTimeout(()=>c.style.outline="",2e3);return}let s=a.querySelector("textarea").value.trim();s&&(ec&&ec({parent_id:e,comment:s,commenter:Ve()}),a.remove(),t.style.display="")};a.querySelector(".fb-reply-submit").addEventListener("click",o);let u=a.querySelector("textarea");u.addEventListener("keydown",s=>{s.key==="Enter"&&(s.metaKey||s.ctrlKey)&&(s.preventDefault(),o())}),a.querySelector(".fb-reply-cancel").addEventListener("click",()=>{a.remove(),t.style.display=""}),r.insertBefore(a,t),u.focus()}function $6(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body,a=!e.parent_id,o=lt(e.color)||tc||he.DEFAULT_COLOR,u=Object.entries(he.COLOR_PRESETS);t.innerHTML=`
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
  `;let s=o;t.querySelectorAll(".fb-color-swatch").forEach(f=>{f.addEventListener("click",p=>{p.preventDefault(),p.stopPropagation(),t.querySelectorAll(".fb-color-swatch").forEach(v=>v.classList.remove("fb-color-swatch-active")),f.classList.add("fb-color-swatch-active"),s=f.dataset.color})});let c=t.querySelector("textarea");c.focus(),c.setSelectionRange(c.value.length,c.value.length);let l=()=>{let f=c.value.trim();if(!f)return;let p=a&&s!==o;rc&&rc(e.id,f,p?s:void 0)};t.querySelector(".fb-edit-save").addEventListener("click",l),c.addEventListener("keydown",f=>{f.key==="Enter"&&(f.metaKey||f.ctrlKey)&&(f.preventDefault(),l())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function hC(e){let r=fe.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(fe.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function F6(){let e=document.createElement("style");e.textContent=`
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
      width: ${O6}px;
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
  `,document.head.appendChild(e)}function yC(){let e=document.createElement("style");return e.setAttribute("data-remarq-print","true"),e.textContent='@media print{[class^="fb-"],[class*=" fb-"],[class^="hf-"],[class*=" hf-"]{display:none!important}}',document.head.appendChild(e),e}var cr=null,ti=null,ni=null,uc=null,A=[],Ar=null,we=null,ee=new Set,pe=new Map;function D6(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null,theme:e?.dataset.theme||"auto",defaultColor:e?.dataset.defaultColor||null};lc(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{yC(),cr=document.querySelector(r.contentSelector)||document.body,ti=r.documentUri||window.location.origin+window.location.pathname,ni=r.documentId||null,uc=lt(r.defaultColor)||null,document.documentElement.dataset.remarqTheme=r.theme,fC({onSubmit:W6,onDelete:Q6,onResolve:K6,onReply:z6,onEdit:V6,onReaction:J6,onColorChange:Y6,defaultColor:uc}),K0(a=>{vt(),hC(a),bn(a)}),U6(),await t(),B6(),X0(r,()=>A)}catch(a){console.error("[feedback-layer] Boot failed:",a)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function B6(){try{A=await fc(ti,ni),ee=await G6(A),Re(A,ee,pe)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),ze(`Failed to load comments: ${e.message}`,"error")}}async function G6(e){z0();let r=new Set;pe.clear();for(let t of e)if(!t.parent)try{let n=await ct({exact:t.quote,prefix:t.prefix,suffix:t.suffix},cr);n&&t.status!=="closed"?(pt(n,t.id,t.color),r.add(t.id),pe.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),pe.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function U6(){document.addEventListener("mouseup",oc),document.addEventListener("keyup",oc),document.addEventListener("touchend",oc)}function oc(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){Sn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){Sn();return}if(!cr.contains(r.commonAncestorContainer)){Sn();return}H6(r)},10)}function H6(e){Sn();let r=e.getBoundingClientRect();we=document.createElement("button"),we.className="fb-annotate-tooltip",we.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',we.style.top=window.scrollY+r.bottom+8+"px",we.style.left=window.scrollX+r.left+r.width/2-40+"px";let t=async n=>{n.preventDefault(),n.stopPropagation();let a=window.getSelection();if(!a||a.isCollapsed)return;let o=a.getRangeAt(0);try{Ar=await G0(o,cr),mC(Ar.exact)}catch(u){console.error("[feedback-layer] Failed to create selector:",u)}Sn()};we.addEventListener("mousedown",t),we.addEventListener("touchstart",t),document.body.appendChild(we)}function Sn(){we&&(we.remove(),we=null)}async function W6({comment:e,commenter:r,color:t}){if(!Ar)return;let n=t||uc||null;try{let a=await ai({uri:ti,document:ni,quote:Ar.exact,prefix:Ar.prefix,suffix:Ar.suffix,body:e,author:r,color:n});A.push(a);let o=await ct({exact:a.quote,prefix:a.prefix,suffix:a.suffix},cr);o&&(pt(o,a.id,a.color),ee.add(a.id)),Re(A,ee,pe),window.getSelection().removeAllRanges()}catch(a){console.error("[feedback-layer] Failed to create comment:",a),ze(`Failed to save comment: ${a.message}`,"error")}Ar=null}async function K6(e,r){try{let n=await pc(e,r?"closed":"open"),a=A.findIndex(o=>o.id===e);if(a!==-1&&(A[a]=n),r)yn(e);else{let o=n,u=await ct({exact:o.quote,prefix:o.prefix,suffix:o.suffix},cr);u?(pt(u,o.id,o.color),ee.add(o.id)):ee.delete(o.id)}Re(A,ee,pe)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),ze(`Failed to update comment: ${t.message}`,"error")}}async function z6({parent_id:e,comment:r,commenter:t}){try{let n=await ai({uri:ti,document:ni,body:r,author:t,parent:e});A.push(n),Re(A,ee,pe)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),ze(`Failed to save reply: ${n.message}`,"error")}}async function V6(e,r,t){try{let n={body:r};t!==void 0&&(n.color=t);let a=await ii(e,n),o=A.findIndex(u=>u.id===e);if(o!==-1&&(A[o]=a),t!==void 0){yn(e);let u=a;if(u.status!=="closed"){let s=await ct({exact:u.quote,prefix:u.prefix,suffix:u.suffix},cr);s&&(pt(s,u.id,u.color),ee.add(u.id),pe.set(u.id,s))}}Re(A,ee,pe)}catch(n){console.error("[feedback-layer] Failed to edit comment:",n),ze(`Failed to update comment: ${n.message}`,"error")}}async function Y6(e,r){try{let t=await ii(e,{color:r}),n=A.findIndex(o=>o.id===e);n!==-1&&(A[n]=t),yn(e);let a=t;if(a.status!=="closed"){let o=await ct({exact:a.quote,prefix:a.prefix,suffix:a.suffix},cr);o&&(pt(o,a.id,a.color),ee.add(a.id),pe.set(a.id,o))}Re(A,ee,pe)}catch(t){console.error("[feedback-layer] Failed to change color:",t),ze(`Failed to update color: ${t.message}`,"error")}}async function J6(e,r){let t=Ve();if(t)try{let o=A.find(c=>c.id===e)?.reactions?.find(c=>c.emoji===r)?.authors.includes(t),u;o?u=await mc(e,r,t):u=await dc(e,r,t);let s=A.findIndex(c=>c.id===e);s!==-1&&(A[s]={...A[s],reactions:u.reactions}),Re(A,ee,pe)}catch(n){console.error("[feedback-layer] Failed to toggle reaction:",n),ze(`Failed to update reaction: ${n.message}`,"error")}}async function Q6(e){try{await vc(e),yn(e),ee.delete(e),A=A.filter(r=>r.id!==e&&r.parent!==e),Re(A,ee,pe)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),ze(`Failed to delete comment: ${r.message}`,"error")}}try{D6()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
