var FeedbackLayer=(()=>{var gC=Object.create;var cc=Object.defineProperty;var qC=Object.getOwnPropertyDescriptor;var xC=Object.getOwnPropertyNames;var wC=Object.getPrototypeOf,SC=Object.prototype.hasOwnProperty;var i=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var EC=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of xC(r))!SC.call(e,a)&&a!==t&&cc(e,a,{get:()=>r[a],enumerable:!(n=qC(r,a))||n.enumerable});return e};var b=(e,r,t)=>(t=e!=null?gC(wC(e)):{},EC(r||!e||!e.__esModule?cc(t,"default",{value:e,enumerable:!0}):t,e));var _=i((Z6,hc)=>{"use strict";hc.exports=function(e){try{return!!e()}catch{return!0}}});var Mr=i((eG,yc)=>{"use strict";var TC=_();yc.exports=!TC(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var N=i((rG,qc)=>{"use strict";var bc=Mr(),gc=Function.prototype,oi=gc.call,CC=bc&&gc.bind.bind(oi,oi);qc.exports=bc?CC:function(e){return function(){return oi.apply(e,arguments)}}});var U=i((tG,xc)=>{"use strict";var OC=N();xc.exports=OC({}.isPrototypeOf)});var P=i((ui,wc)=>{"use strict";var pt=function(e){return e&&e.Math===Math&&e};wc.exports=pt(typeof globalThis=="object"&&globalThis)||pt(typeof window=="object"&&window)||pt(typeof self=="object"&&self)||pt(typeof global=="object"&&global)||pt(typeof ui=="object"&&ui)||function(){return this}()||Function("return this")()});var jr=i((nG,Cc)=>{"use strict";var kC=Mr(),Tc=Function.prototype,Sc=Tc.apply,Ec=Tc.call;Cc.exports=typeof Reflect=="object"&&Reflect.apply||(kC?Ec.bind(Sc):function(){return Ec.apply(Sc,arguments)})});var Te=i((aG,kc)=>{"use strict";var Oc=N(),IC=Oc({}.toString),_C=Oc("".slice);kc.exports=function(e){return _C(IC(e),8,-1)}});var vt=i((iG,Ic)=>{"use strict";var PC=Te(),RC=N();Ic.exports=function(e){if(PC(e)==="Function")return RC(e)}});var M=i((oG,_c)=>{"use strict";var si=typeof document=="object"&&document.all;_c.exports=typeof si>"u"&&si!==void 0?function(e){return typeof e=="function"||e===si}:function(e){return typeof e=="function"}});var H=i((uG,Pc)=>{"use strict";var AC=_();Pc.exports=!AC(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var G=i((sG,Rc)=>{"use strict";var NC=Mr(),Sn=Function.prototype.call;Rc.exports=NC?Sn.bind(Sn):function(){return Sn.apply(Sn,arguments)}});var ci=i(Mc=>{"use strict";var Ac={}.propertyIsEnumerable,Nc=Object.getOwnPropertyDescriptor,MC=Nc&&!Ac.call({1:2},1);Mc.f=MC?function(r){var t=Nc(this,r);return!!t&&t.enumerable}:Ac});var Je=i((lG,jc)=>{"use strict";jc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var En=i((fG,Lc)=>{"use strict";var jC=N(),LC=_(),$C=Te(),li=Object,FC=jC("".split);Lc.exports=LC(function(){return!li("z").propertyIsEnumerable(0)})?function(e){return $C(e)==="String"?FC(e,""):li(e)}:li});var lr=i((pG,$c)=>{"use strict";$c.exports=function(e){return e==null}});var fr=i((vG,Fc)=>{"use strict";var DC=lr(),BC=TypeError;Fc.exports=function(e){if(DC(e))throw new BC("Can't call method on "+e);return e}});var Ae=i((dG,Dc)=>{"use strict";var GC=En(),UC=fr();Dc.exports=function(e){return GC(UC(e))}});var $=i((mG,Bc)=>{"use strict";var HC=M();Bc.exports=function(e){return typeof e=="object"?e!==null:HC(e)}});var V=i((hG,Gc)=>{"use strict";Gc.exports={}});var W=i((yG,Hc)=>{"use strict";var fi=V(),pi=P(),WC=M(),Uc=function(e){return WC(e)?e:void 0};Hc.exports=function(e,r){return arguments.length<2?Uc(fi[e])||Uc(pi[e]):fi[e]&&fi[e][r]||pi[e]&&pi[e][r]}});var Lr=i((bG,zc)=>{"use strict";var KC=P(),Wc=KC.navigator,Kc=Wc&&Wc.userAgent;zc.exports=Kc?String(Kc):""});var $r=i((gG,Zc)=>{"use strict";var Xc=P(),vi=Lr(),Vc=Xc.process,Yc=Xc.Deno,Jc=Vc&&Vc.versions||Yc&&Yc.version,Qc=Jc&&Jc.v8,be,Tn;Qc&&(be=Qc.split("."),Tn=be[0]>0&&be[0]<4?1:+(be[0]+be[1]));!Tn&&vi&&(be=vi.match(/Edge\/(\d+)/),(!be||be[1]>=74)&&(be=vi.match(/Chrome\/(\d+)/),be&&(Tn=+be[1])));Zc.exports=Tn});var pr=i((qG,rl)=>{"use strict";var el=$r(),zC=_(),VC=P(),YC=VC.String;rl.exports=!!Object.getOwnPropertySymbols&&!zC(function(){var e=Symbol("symbol detection");return!YC(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&el&&el<41})});var di=i((xG,tl)=>{"use strict";var JC=pr();tl.exports=JC&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Fr=i((wG,nl)=>{"use strict";var QC=W(),XC=M(),ZC=U(),eO=di(),rO=Object;nl.exports=eO?function(e){return typeof e=="symbol"}:function(e){var r=QC("Symbol");return XC(r)&&ZC(r.prototype,rO(e))}});var Qe=i((SG,al)=>{"use strict";var tO=String;al.exports=function(e){try{return tO(e)}catch{return"Object"}}});var D=i((EG,il)=>{"use strict";var nO=M(),aO=Qe(),iO=TypeError;il.exports=function(e){if(nO(e))return e;throw new iO(aO(e)+" is not a function")}});var Cn=i((TG,ol)=>{"use strict";var oO=D(),uO=lr();ol.exports=function(e,r){var t=e[r];return uO(t)?void 0:oO(t)}});var sl=i((CG,ul)=>{"use strict";var mi=G(),hi=M(),yi=$(),sO=TypeError;ul.exports=function(e,r){var t,n;if(r==="string"&&hi(t=e.toString)&&!yi(n=mi(t,e))||hi(t=e.valueOf)&&!yi(n=mi(t,e))||r!=="string"&&hi(t=e.toString)&&!yi(n=mi(t,e)))return n;throw new sO("Can't convert object to primitive value")}});var Z=i((OG,cl)=>{"use strict";cl.exports=!0});var pl=i((kG,fl)=>{"use strict";var ll=P(),cO=Object.defineProperty;fl.exports=function(e,r){try{cO(ll,e,{value:r,configurable:!0,writable:!0})}catch{ll[e]=r}return r}});var dt=i((IG,ml)=>{"use strict";var lO=Z(),fO=P(),pO=pl(),vl="__core-js_shared__",dl=ml.exports=fO[vl]||pO(vl,{});(dl.versions||(dl.versions=[])).push({version:"3.48.0",mode:lO?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var vr=i((_G,yl)=>{"use strict";var hl=dt();yl.exports=function(e,r){return hl[e]||(hl[e]=r||{})}});var re=i((PG,bl)=>{"use strict";var vO=fr(),dO=Object;bl.exports=function(e){return dO(vO(e))}});var K=i((RG,gl)=>{"use strict";var mO=N(),hO=re(),yO=mO({}.hasOwnProperty);gl.exports=Object.hasOwn||function(r,t){return yO(hO(r),t)}});var Dr=i((AG,ql)=>{"use strict";var bO=N(),gO=0,qO=Math.random(),xO=bO(1.1.toString);ql.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+xO(++gO+qO,36)}});var R=i((NG,wl)=>{"use strict";var wO=P(),SO=vr(),xl=K(),EO=Dr(),TO=pr(),CO=di(),Br=wO.Symbol,bi=SO("wks"),OO=CO?Br.for||Br:Br&&Br.withoutSetter||EO;wl.exports=function(e){return xl(bi,e)||(bi[e]=TO&&xl(Br,e)?Br[e]:OO("Symbol."+e)),bi[e]}});var Cl=i((MG,Tl)=>{"use strict";var kO=G(),Sl=$(),El=Fr(),IO=Cn(),_O=sl(),PO=R(),RO=TypeError,AO=PO("toPrimitive");Tl.exports=function(e,r){if(!Sl(e)||El(e))return e;var t=IO(e,AO),n;if(t){if(r===void 0&&(r="default"),n=kO(t,e,r),!Sl(n)||El(n))return n;throw new RO("Can't convert object to primitive value")}return r===void 0&&(r="number"),_O(e,r)}});var On=i((jG,Ol)=>{"use strict";var NO=Cl(),MO=Fr();Ol.exports=function(e){var r=NO(e,"string");return MO(r)?r:r+""}});var kn=i((LG,Il)=>{"use strict";var jO=P(),kl=$(),gi=jO.document,LO=kl(gi)&&kl(gi.createElement);Il.exports=function(e){return LO?gi.createElement(e):{}}});var qi=i(($G,_l)=>{"use strict";var $O=H(),FO=_(),DO=kn();_l.exports=!$O&&!FO(function(){return Object.defineProperty(DO("div"),"a",{get:function(){return 7}}).a!==7})});var mt=i(Rl=>{"use strict";var BO=H(),GO=G(),UO=ci(),HO=Je(),WO=Ae(),KO=On(),zO=K(),VO=qi(),Pl=Object.getOwnPropertyDescriptor;Rl.f=BO?Pl:function(r,t){if(r=WO(r),t=KO(t),VO)try{return Pl(r,t)}catch{}if(zO(r,t))return HO(!GO(UO.f,r,t),r[t])}});var xi=i((DG,Al)=>{"use strict";var YO=_(),JO=M(),QO=/#|\.prototype\./,ht=function(e,r){var t=ZO[XO(e)];return t===rk?!0:t===ek?!1:JO(r)?YO(r):!!r},XO=ht.normalize=function(e){return String(e).replace(QO,".").toLowerCase()},ZO=ht.data={},ek=ht.NATIVE="N",rk=ht.POLYFILL="P";Al.exports=ht});var Y=i((BG,Ml)=>{"use strict";var Nl=vt(),tk=D(),nk=Mr(),ak=Nl(Nl.bind);Ml.exports=function(e,r){return tk(e),r===void 0?e:nk?ak(e,r):function(){return e.apply(r,arguments)}}});var wi=i((GG,jl)=>{"use strict";var ik=H(),ok=_();jl.exports=ik&&ok(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var X=i((UG,Ll)=>{"use strict";var uk=$(),sk=String,ck=TypeError;Ll.exports=function(e){if(uk(e))return e;throw new ck(sk(e)+" is not an object")}});var te=i(Fl=>{"use strict";var lk=H(),fk=qi(),pk=wi(),In=X(),$l=On(),vk=TypeError,Si=Object.defineProperty,dk=Object.getOwnPropertyDescriptor,Ei="enumerable",Ti="configurable",Ci="writable";Fl.f=lk?pk?function(r,t,n){if(In(r),t=$l(t),In(n),typeof r=="function"&&t==="prototype"&&"value"in n&&Ci in n&&!n[Ci]){var a=dk(r,t);a&&a[Ci]&&(r[t]=n.value,n={configurable:Ti in n?n[Ti]:a[Ti],enumerable:Ei in n?n[Ei]:a[Ei],writable:!1})}return Si(r,t,n)}:Si:function(r,t,n){if(In(r),t=$l(t),In(n),fk)try{return Si(r,t,n)}catch{}if("get"in n||"set"in n)throw new vk("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var Ce=i((WG,Dl)=>{"use strict";var mk=H(),hk=te(),yk=Je();Dl.exports=mk?function(e,r,t){return hk.f(e,r,yk(1,t))}:function(e,r,t){return e[r]=t,e}});var q=i((KG,Gl)=>{"use strict";var yt=P(),bk=jr(),gk=vt(),qk=M(),xk=mt().f,wk=xi(),Gr=V(),Sk=Y(),Ur=Ce(),Bl=K();dt();var Ek=function(e){var r=function(t,n,a){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,a)}return bk(e,this,arguments)};return r.prototype=e.prototype,r};Gl.exports=function(e,r){var t=e.target,n=e.global,a=e.stat,o=e.proto,u=n?yt:a?yt[t]:yt[t]&&yt[t].prototype,c=n?Gr:Gr[t]||Ur(Gr,t,{})[t],s=c.prototype,l,f,v,p,d,h,m,x,y;for(p in r)l=wk(n?p:t+(a?".":"#")+p,e.forced),f=!l&&u&&Bl(u,p),h=c[p],f&&(e.dontCallGetSet?(y=xk(u,p),m=y&&y.value):m=u[p]),d=f&&m?m:r[p],!(!l&&!o&&typeof h==typeof d)&&(e.bind&&f?x=Sk(d,yt):e.wrap&&f?x=Ek(d):o&&qk(d)?x=gk(d):x=d,(e.sham||d&&d.sham||h&&h.sham)&&Ur(x,"sham",!0),Ur(c,p,x),o&&(v=t+"Prototype",Bl(Gr,v)||Ur(Gr,v,{}),Ur(Gr[v],p,d),e.real&&s&&(l||!s[p])&&Ur(s,p,d)))}});var Ne=i((zG,Ul)=>{"use strict";var Tk=Te();Ul.exports=Array.isArray||function(r){return Tk(r)==="Array"}});var _n=i((VG,Wl)=>{"use strict";var Ck=R(),Ok=Ck("toStringTag"),Hl={};Hl[Ok]="z";Wl.exports=String(Hl)==="[object z]"});var bt=i((YG,Kl)=>{"use strict";var kk=_n(),Ik=M(),Pn=Te(),_k=R(),Pk=_k("toStringTag"),Rk=Object,Ak=Pn(function(){return arguments}())==="Arguments",Nk=function(e,r){try{return e[r]}catch{}};Kl.exports=kk?Pn:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=Nk(r=Rk(e),Pk))=="string"?t:Ak?Pn(r):(n=Pn(r))==="Object"&&Ik(r.callee)?"Arguments":n}});var ki=i((JG,zl)=>{"use strict";var Mk=N(),jk=M(),Oi=dt(),Lk=Mk(Function.toString);jk(Oi.inspectSource)||(Oi.inspectSource=function(e){return Lk(e)});zl.exports=Oi.inspectSource});var qt=i((QG,Xl)=>{"use strict";var $k=N(),Fk=_(),Vl=M(),Dk=bt(),Bk=W(),Gk=ki(),Yl=function(){},Jl=Bk("Reflect","construct"),Ii=/^\s*(?:class|function)\b/,Uk=$k(Ii.exec),Hk=!Ii.test(Yl),gt=function(r){if(!Vl(r))return!1;try{return Jl(Yl,[],r),!0}catch{return!1}},Ql=function(r){if(!Vl(r))return!1;switch(Dk(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Hk||!!Uk(Ii,Gk(r))}catch{return!0}};Ql.sham=!0;Xl.exports=!Jl||Fk(function(){var e;return gt(gt.call)||!gt(Object)||!gt(function(){e=!0})||e})?Ql:gt});var ef=i((XG,Zl)=>{"use strict";var Wk=Math.ceil,Kk=Math.floor;Zl.exports=Math.trunc||function(r){var t=+r;return(t>0?Kk:Wk)(t)}});var Rn=i((ZG,rf)=>{"use strict";var zk=ef();rf.exports=function(e){var r=+e;return r!==r||r===0?0:zk(r)}});var _i=i((e8,tf)=>{"use strict";var Vk=Rn(),Yk=Math.max,Jk=Math.min;tf.exports=function(e,r){var t=Vk(e);return t<0?Yk(t+r,0):Jk(t,r)}});var Pi=i((r8,nf)=>{"use strict";var Qk=Rn(),Xk=Math.min;nf.exports=function(e){var r=Qk(e);return r>0?Xk(r,9007199254740991):0}});var pe=i((t8,af)=>{"use strict";var Zk=Pi();af.exports=function(e){return Zk(e.length)}});var Hr=i((n8,of)=>{"use strict";var e1=H(),r1=te(),t1=Je();of.exports=function(e,r,t){e1?r1.f(e,r,t1(0,t)):e[r]=t}});var Wr=i((a8,uf)=>{"use strict";var n1=H(),a1=Ne(),i1=TypeError,o1=Object.getOwnPropertyDescriptor,u1=n1&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();uf.exports=u1?function(e,r){if(a1(e)&&!o1(e,"length").writable)throw new i1("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var xt=i((i8,sf)=>{"use strict";var s1=_(),c1=R(),l1=$r(),f1=c1("species");sf.exports=function(e){return l1>=51||!s1(function(){var r=[],t=r.constructor={};return t[f1]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var dr=i((o8,cf)=>{"use strict";var p1=N();cf.exports=p1([].slice)});var pf=i(()=>{"use strict";var v1=q(),lf=Ne(),d1=qt(),m1=$(),ff=_i(),h1=pe(),y1=Ae(),b1=Hr(),g1=Wr(),q1=R(),x1=xt(),w1=dr(),S1=x1("slice"),E1=q1("species"),Ri=Array,T1=Math.max;v1({target:"Array",proto:!0,forced:!S1},{slice:function(r,t){var n=y1(this),a=h1(n),o=ff(r,a),u=ff(t===void 0?a:t,a),c,s,l;if(lf(n)&&(c=n.constructor,d1(c)&&(c===Ri||lf(c.prototype))?c=void 0:m1(c)&&(c=c[E1],c===null&&(c=void 0)),c===Ri||c===void 0))return w1(n,o,u);for(s=new(c===void 0?Ri:c)(T1(u-o,0)),l=0;o<u;o++,l++)o in n&&b1(s,l,n[o]);return g1(s,l),s}})});var se=i((c8,vf)=>{"use strict";var C1=P(),O1=V();vf.exports=function(e,r){var t=O1[e+"Prototype"],n=t&&t[r];if(n)return n;var a=C1[e],o=a&&a.prototype;return o&&o[r]}});var mf=i((l8,df)=>{"use strict";pf();var k1=se();df.exports=k1("Array","slice")});var yf=i((f8,hf)=>{"use strict";var I1=U(),_1=mf(),Ai=Array.prototype;hf.exports=function(e){var r=e.slice;return e===Ai||I1(Ai,e)&&r===Ai.slice?_1:r}});var gf=i((p8,bf)=>{"use strict";var P1=yf();bf.exports=P1});var xf=i((v8,qf)=>{"use strict";var R1=gf();qf.exports=R1});var Sf=i((d8,wf)=>{"use strict";var A1=xf();wf.exports=A1});var Ni=i((m8,Ef)=>{"use strict";Ef.exports=Sf()});var Kr=i((h8,Tf)=>{Tf.exports=Ni()});var Xe=i((y8,Cf)=>{"use strict";var N1=bt(),M1=String;Cf.exports=function(e){if(N1(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return M1(e)}});var _f=i((b8,If)=>{"use strict";var Mi=N(),j1=Rn(),L1=Xe(),$1=fr(),F1=Mi("".charAt),Of=Mi("".charCodeAt),D1=Mi("".slice),kf=function(e){return function(r,t){var n=L1($1(r)),a=j1(t),o=n.length,u,c;return a<0||a>=o?e?"":void 0:(u=Of(n,a),u<55296||u>56319||a+1===o||(c=Of(n,a+1))<56320||c>57343?e?F1(n,a):u:e?D1(n,a,a+2):(u-55296<<10)+(c-56320)+65536)}};If.exports={codeAt:kf(!1),charAt:kf(!0)}});var Af=i((g8,Rf)=>{"use strict";var B1=P(),G1=M(),Pf=B1.WeakMap;Rf.exports=G1(Pf)&&/native code/.test(String(Pf))});var wt=i((q8,Mf)=>{"use strict";var U1=vr(),H1=Dr(),Nf=U1("keys");Mf.exports=function(e){return Nf[e]||(Nf[e]=H1(e))}});var zr=i((x8,jf)=>{"use strict";jf.exports={}});var Ze=i((w8,Ff)=>{"use strict";var W1=Af(),$f=P(),K1=$(),z1=Ce(),ji=K(),Li=dt(),V1=wt(),Y1=zr(),Lf="Object already initialized",$i=$f.TypeError,J1=$f.WeakMap,An,St,Nn,Q1=function(e){return Nn(e)?St(e):An(e,{})},X1=function(e){return function(r){var t;if(!K1(r)||(t=St(r)).type!==e)throw new $i("Incompatible receiver, "+e+" required");return t}};W1||Li.state?(ge=Li.state||(Li.state=new J1),ge.get=ge.get,ge.has=ge.has,ge.set=ge.set,An=function(e,r){if(ge.has(e))throw new $i(Lf);return r.facade=e,ge.set(e,r),r},St=function(e){return ge.get(e)||{}},Nn=function(e){return ge.has(e)}):(mr=V1("state"),Y1[mr]=!0,An=function(e,r){if(ji(e,mr))throw new $i(Lf);return r.facade=e,z1(e,mr,r),r},St=function(e){return ji(e,mr)?e[mr]:{}},Nn=function(e){return ji(e,mr)});var ge,mr;Ff.exports={set:An,get:St,has:Nn,enforce:Q1,getterFor:X1}});var Gf=i((S8,Bf)=>{"use strict";var Fi=H(),Z1=K(),Df=Function.prototype,eI=Fi&&Object.getOwnPropertyDescriptor,Di=Z1(Df,"name"),rI=Di&&function(){}.name==="something",tI=Di&&(!Fi||Fi&&eI(Df,"name").configurable);Bf.exports={EXISTS:Di,PROPER:rI,CONFIGURABLE:tI}});var Bi=i((E8,Hf)=>{"use strict";var nI=Ae(),aI=_i(),iI=pe(),Uf=function(e){return function(r,t,n){var a=nI(r),o=iI(a);if(o===0)return!e&&-1;var u=aI(n,o),c;if(e&&t!==t){for(;o>u;)if(c=a[u++],c!==c)return!0}else for(;o>u;u++)if((e||u in a)&&a[u]===t)return e||u||0;return!e&&-1}};Hf.exports={includes:Uf(!0),indexOf:Uf(!1)}});var Ui=i((T8,Kf)=>{"use strict";var oI=N(),Gi=K(),uI=Ae(),sI=Bi().indexOf,cI=zr(),Wf=oI([].push);Kf.exports=function(e,r){var t=uI(e),n=0,a=[],o;for(o in t)!Gi(cI,o)&&Gi(t,o)&&Wf(a,o);for(;r.length>n;)Gi(t,o=r[n++])&&(~sI(a,o)||Wf(a,o));return a}});var Mn=i((C8,zf)=>{"use strict";zf.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var jn=i((O8,Vf)=>{"use strict";var lI=Ui(),fI=Mn();Vf.exports=Object.keys||function(r){return lI(r,fI)}});var Hi=i(Yf=>{"use strict";var pI=H(),vI=wi(),dI=te(),mI=X(),hI=Ae(),yI=jn();Yf.f=pI&&!vI?Object.defineProperties:function(r,t){mI(r);for(var n=hI(t),a=yI(t),o=a.length,u=0,c;o>u;)dI.f(r,c=a[u++],n[c]);return r}});var Wi=i((I8,Jf)=>{"use strict";var bI=W();Jf.exports=bI("document","documentElement")});var er=i((_8,np)=>{"use strict";var gI=X(),qI=Hi(),Qf=Mn(),xI=zr(),wI=Wi(),SI=kn(),EI=wt(),Xf=">",Zf="<",zi="prototype",Vi="script",rp=EI("IE_PROTO"),Ki=function(){},tp=function(e){return Zf+Vi+Xf+e+Zf+"/"+Vi+Xf},ep=function(e){e.write(tp("")),e.close();var r=e.parentWindow.Object;return e=null,r},TI=function(){var e=SI("iframe"),r="java"+Vi+":",t;return e.style.display="none",wI.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(tp("document.F=Object")),t.close(),t.F},Ln,$n=function(){try{Ln=new ActiveXObject("htmlfile")}catch{}$n=typeof document<"u"?document.domain&&Ln?ep(Ln):TI():ep(Ln);for(var e=Qf.length;e--;)delete $n[zi][Qf[e]];return $n()};xI[rp]=!0;np.exports=Object.create||function(r,t){var n;return r!==null?(Ki[zi]=gI(r),n=new Ki,Ki[zi]=null,n[rp]=r):n=$n(),t===void 0?n:qI.f(n,t)}});var Yi=i((P8,ap)=>{"use strict";var CI=_();ap.exports=!CI(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var Et=i((R8,op)=>{"use strict";var OI=K(),kI=M(),II=re(),_I=wt(),PI=Yi(),ip=_I("IE_PROTO"),Ji=Object,RI=Ji.prototype;op.exports=PI?Ji.getPrototypeOf:function(e){var r=II(e);if(OI(r,ip))return r[ip];var t=r.constructor;return kI(t)&&r instanceof t?t.prototype:r instanceof Ji?RI:null}});var Me=i((A8,up)=>{"use strict";var AI=Ce();up.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:AI(e,r,t),e}});var eo=i((N8,lp)=>{"use strict";var NI=_(),MI=M(),jI=$(),LI=er(),sp=Et(),$I=Me(),FI=R(),DI=Z(),Zi=FI("iterator"),cp=!1,je,Qi,Xi;[].keys&&(Xi=[].keys(),"next"in Xi?(Qi=sp(sp(Xi)),Qi!==Object.prototype&&(je=Qi)):cp=!0);var BI=!jI(je)||NI(function(){var e={};return je[Zi].call(e)!==e});BI?je={}:DI&&(je=LI(je));MI(je[Zi])||$I(je,Zi,function(){return this});lp.exports={IteratorPrototype:je,BUGGY_SAFARI_ITERATORS:cp}});var pp=i((M8,fp)=>{"use strict";var GI=_n(),UI=bt();fp.exports=GI?{}.toString:function(){return"[object "+UI(this)+"]"}});var Le=i((j8,dp)=>{"use strict";var HI=_n(),WI=te().f,KI=Ce(),zI=K(),VI=pp(),YI=R(),vp=YI("toStringTag");dp.exports=function(e,r,t,n){var a=t?e:e&&e.prototype;a&&(zI(a,vp)||WI(a,vp,{configurable:!0,value:r}),n&&!HI&&KI(a,"toString",VI))}});var hr=i((L8,mp)=>{"use strict";mp.exports={}});var yp=i(($8,hp)=>{"use strict";var JI=eo().IteratorPrototype,QI=er(),XI=Je(),ZI=Le(),e_=hr(),r_=function(){return this};hp.exports=function(e,r,t,n){var a=r+" Iterator";return e.prototype=QI(JI,{next:XI(+!n,t)}),ZI(e,a,!1,!0),e_[a]=r_,e}});var gp=i((F8,bp)=>{"use strict";var t_=N(),n_=D();bp.exports=function(e,r,t){try{return t_(n_(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var xp=i((D8,qp)=>{"use strict";var a_=$();qp.exports=function(e){return a_(e)||e===null}});var Sp=i((B8,wp)=>{"use strict";var i_=xp(),o_=String,u_=TypeError;wp.exports=function(e){if(i_(e))return e;throw new u_("Can't set "+o_(e)+" as a prototype")}});var Tt=i((G8,Ep)=>{"use strict";var s_=gp(),c_=$(),l_=fr(),f_=Sp();Ep.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=s_(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(a,o){return l_(a),f_(o),c_(a)&&(e?t(a,o):a.__proto__=o),a}}():void 0)});var Bn=i((U8,Np)=>{"use strict";var p_=q(),v_=G(),Fn=Z(),Rp=Gf(),d_=M(),m_=yp(),Tp=Et(),Cp=Tt(),h_=Le(),y_=Ce(),ro=Me(),b_=R(),Op=hr(),Ap=eo(),g_=Rp.PROPER,q_=Rp.CONFIGURABLE,kp=Ap.IteratorPrototype,Dn=Ap.BUGGY_SAFARI_ITERATORS,Ct=b_("iterator"),Ip="keys",Ot="values",_p="entries",Pp=function(){return this};Np.exports=function(e,r,t,n,a,o,u){m_(t,r,n);var c=function(y){if(y===a&&p)return p;if(!Dn&&y&&y in f)return f[y];switch(y){case Ip:return function(){return new t(this,y)};case Ot:return function(){return new t(this,y)};case _p:return function(){return new t(this,y)}}return function(){return new t(this)}},s=r+" Iterator",l=!1,f=e.prototype,v=f[Ct]||f["@@iterator"]||a&&f[a],p=!Dn&&v||c(a),d=r==="Array"&&f.entries||v,h,m,x;if(d&&(h=Tp(d.call(new e)),h!==Object.prototype&&h.next&&(!Fn&&Tp(h)!==kp&&(Cp?Cp(h,kp):d_(h[Ct])||ro(h,Ct,Pp)),h_(h,s,!0,!0),Fn&&(Op[s]=Pp))),g_&&a===Ot&&v&&v.name!==Ot&&(!Fn&&q_?y_(f,"name",Ot):(l=!0,p=function(){return v_(v,this)})),a)if(m={values:c(Ot),keys:o?p:c(Ip),entries:c(_p)},u)for(x in m)(Dn||l||!(x in f))&&ro(f,x,m[x]);else p_({target:r,proto:!0,forced:Dn||l},m);return(!Fn||u)&&f[Ct]!==p&&ro(f,Ct,p,{name:a}),Op[r]=p,m}});var Gn=i((H8,Mp)=>{"use strict";Mp.exports=function(e,r){return{value:e,done:r}}});var yr=i(()=>{"use strict";var x_=_f().charAt,w_=Xe(),Lp=Ze(),S_=Bn(),jp=Gn(),$p="String Iterator",E_=Lp.set,T_=Lp.getterFor($p);S_(String,"String",function(e){E_(this,{type:$p,string:w_(e),index:0})},function(){var r=T_(this),t=r.string,n=r.index,a;return n>=t.length?jp(void 0,!0):(a=x_(t,n),r.index+=a.length,jp(a,!1))})});var to=i((z8,Dp)=>{"use strict";var C_=G(),Fp=X(),O_=Cn();Dp.exports=function(e,r,t){var n,a;Fp(e);try{if(n=O_(e,"return"),!n){if(r==="throw")throw t;return t}n=C_(n,e)}catch(o){a=!0,n=o}if(r==="throw")throw t;if(a)throw n;return Fp(n),t}});var Gp=i((V8,Bp)=>{"use strict";var k_=X(),I_=to();Bp.exports=function(e,r,t,n){try{return n?r(k_(t)[0],t[1]):r(t)}catch(a){I_(e,"throw",a)}}});var no=i((Y8,Up)=>{"use strict";var __=R(),P_=hr(),R_=__("iterator"),A_=Array.prototype;Up.exports=function(e){return e!==void 0&&(P_.Array===e||A_[R_]===e)}});var kt=i((J8,Wp)=>{"use strict";var N_=bt(),Hp=Cn(),M_=lr(),j_=hr(),L_=R(),$_=L_("iterator");Wp.exports=function(e){if(!M_(e))return Hp(e,$_)||Hp(e,"@@iterator")||j_[N_(e)]}});var Un=i((Q8,Kp)=>{"use strict";var F_=G(),D_=D(),B_=X(),G_=Qe(),U_=kt(),H_=TypeError;Kp.exports=function(e,r){var t=arguments.length<2?U_(e):r;if(D_(t))return B_(F_(t,e));throw new H_(G_(e)+" is not iterable")}});var Jp=i((X8,Yp)=>{"use strict";var W_=Y(),K_=G(),z_=re(),V_=Gp(),Y_=no(),J_=qt(),Q_=pe(),zp=Hr(),X_=Wr(),Z_=Un(),eP=kt(),Vp=Array;Yp.exports=function(r){var t=z_(r),n=J_(this),a=arguments.length,o=a>1?arguments[1]:void 0,u=o!==void 0;u&&(o=W_(o,a>2?arguments[2]:void 0));var c=eP(t),s=0,l,f,v,p,d,h;if(c&&!(this===Vp&&Y_(c)))for(f=n?new this:[],p=Z_(t,c),d=p.next;!(v=K_(d,p)).done;s++)h=u?V_(p,o,[v.value,s],!0):v.value,zp(f,s,h);else for(l=Q_(t),f=n?new this(l):Vp(l);l>s;s++)h=u?o(t[s],s):t[s],zp(f,s,h);return X_(f,s),f}});var io=i((Z8,ev)=>{"use strict";var rP=R(),Xp=rP("iterator"),Zp=!1;try{Qp=0,ao={next:function(){return{done:!!Qp++}},return:function(){Zp=!0}},ao[Xp]=function(){return this},Array.from(ao,function(){throw 2})}catch{}var Qp,ao;ev.exports=function(e,r){try{if(!r&&!Zp)return!1}catch{return!1}var t=!1;try{var n={};n[Xp]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var rv=i(()=>{"use strict";var tP=q(),nP=Jp(),aP=io(),iP=!aP(function(e){Array.from(e)});tP({target:"Array",stat:!0,forced:iP},{from:nP})});var nv=i((tU,tv)=>{"use strict";yr();rv();var oP=V();tv.exports=oP.Array.from});var iv=i((nU,av)=>{"use strict";var uP=nv();av.exports=uP});var uv=i((aU,ov)=>{"use strict";var sP=iv();ov.exports=sP});var cv=i((iU,sv)=>{"use strict";var cP=uv();sv.exports=cP});var oo=i((oU,lv)=>{"use strict";lv.exports=cv()});var Hn=i((uU,fv)=>{fv.exports=oo()});var It=i((sU,pv)=>{"use strict";var lP=TypeError,fP=9007199254740991;pv.exports=function(e){if(e>fP)throw lP("Maximum allowed index exceeded");return e}});var hv=i((cU,mv)=>{"use strict";var vv=Ne(),pP=qt(),vP=$(),dP=R(),mP=dP("species"),dv=Array;mv.exports=function(e){var r;return vv(e)&&(r=e.constructor,pP(r)&&(r===dv||vv(r.prototype))?r=void 0:vP(r)&&(r=r[mP],r===null&&(r=void 0))),r===void 0?dv:r}});var Wn=i((lU,yv)=>{"use strict";var hP=hv();yv.exports=function(e,r){return new(hP(e))(r===0?0:r)}});var uo=i(()=>{"use strict";var yP=q(),bP=_(),gP=Ne(),qP=$(),xP=re(),wP=pe(),bv=It(),gv=Hr(),SP=Wr(),EP=Wn(),TP=xt(),CP=R(),OP=$r(),qv=CP("isConcatSpreadable"),kP=OP>=51||!bP(function(){var e=[];return e[qv]=!1,e.concat()[0]!==e}),IP=function(e){if(!qP(e))return!1;var r=e[qv];return r!==void 0?!!r:gP(e)},_P=!kP||!TP("concat");yP({target:"Array",proto:!0,arity:1,forced:_P},{concat:function(r){var t=xP(this),n=EP(t,0),a=0,o,u,c,s,l;for(o=-1,c=arguments.length;o<c;o++)if(l=o===-1?t:arguments[o],IP(l))for(s=wP(l),bv(a+s),u=0;u<s;u++,a++)u in l&&gv(n,a,l[u]);else bv(a+1),gv(n,a++,l);return SP(n,a),n}})});var _t=i(()=>{});var Pt=i(xv=>{"use strict";var PP=Ui(),RP=Mn(),AP=RP.concat("length","prototype");xv.f=Object.getOwnPropertyNames||function(r){return PP(r,AP)}});var so=i((hU,Ev)=>{"use strict";var NP=Te(),MP=Ae(),wv=Pt().f,jP=dr(),Sv=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],LP=function(e){try{return wv(e)}catch{return jP(Sv)}};Ev.exports.f=function(r){return Sv&&NP(r)==="Window"?LP(r):wv(MP(r))}});var Kn=i(Tv=>{"use strict";Tv.f=Object.getOwnPropertySymbols});var zn=i((bU,Cv)=>{"use strict";var $P=te();Cv.exports=function(e,r,t){return $P.f(e,r,t)}});var Vr=i(Ov=>{"use strict";var FP=R();Ov.f=FP});var j=i((qU,Iv)=>{"use strict";var kv=V(),DP=K(),BP=Vr(),GP=te().f;Iv.exports=function(e){var r=kv.Symbol||(kv.Symbol={});DP(r,e)||GP(r,e,{value:BP.f(e)})}});var co=i((xU,_v)=>{"use strict";var UP=G(),HP=W(),WP=R(),KP=Me();_v.exports=function(){var e=HP("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=WP("toPrimitive");r&&!r[n]&&KP(r,n,function(a){return UP(t,this)},{arity:1})}});var Rt=i((wU,Rv)=>{"use strict";var zP=Y(),VP=En(),YP=re(),JP=pe(),Pv=Wn(),lo=Hr(),rr=function(e){var r=e===1,t=e===2,n=e===3,a=e===4,o=e===6,u=e===7,c=e===5||o;return function(s,l,f){for(var v=YP(s),p=VP(v),d=JP(p),h=zP(l,f),m=0,x=0,y=r?Pv(s,d):t||u?Pv(s,0):void 0,g,O;d>m;m++)if((c||m in p)&&(g=p[m],O=h(g,m,v),e))if(r)lo(y,m,O);else if(O)switch(e){case 3:return!0;case 5:return g;case 6:return m;case 2:lo(y,x++,g)}else switch(e){case 4:return!1;case 7:lo(y,x++,g)}return o?-1:n||a?a:y}};Rv.exports={forEach:rr(0),map:rr(1),filter:rr(2),some:rr(3),every:rr(4),find:rr(5),findIndex:rr(6),filterReject:rr(7)}});var Yv=i(()=>{"use strict";var Vn=q(),Mt=P(),qo=G(),QP=N(),XP=Z(),Yr=H(),Jr=pr(),ZP=_(),z=K(),eR=U(),mo=X(),Yn=Ae(),xo=On(),rR=Xe(),ho=Je(),Qr=er(),Mv=jn(),tR=Pt(),jv=so(),nR=Kn(),Lv=mt(),$v=te(),aR=Hi(),Fv=ci(),fo=Me(),iR=zn(),wo=vr(),oR=wt(),Dv=zr(),Av=Dr(),uR=R(),sR=Vr(),cR=j(),lR=co(),fR=Le(),Bv=Ze(),Jn=Rt().forEach,ne=oR("hidden"),Qn="Symbol",Nt="prototype",pR=Bv.set,Nv=Bv.getterFor(Qn),ve=Object[Nt],br=Mt.Symbol,At=br&&br[Nt],vR=Mt.RangeError,dR=Mt.TypeError,po=Mt.QObject,Gv=Lv.f,gr=$v.f,Uv=jv.f,mR=Fv.f,Hv=QP([].push),$e=wo("symbols"),jt=wo("op-symbols"),hR=wo("wks"),yo=!po||!po[Nt]||!po[Nt].findChild,Wv=function(e,r,t){var n=Gv(ve,r);n&&delete ve[r],gr(e,r,t),n&&e!==ve&&gr(ve,r,n)},bo=Yr&&ZP(function(){return Qr(gr({},"a",{get:function(){return gr(this,"a",{value:7}).a}})).a!==7})?Wv:gr,vo=function(e,r){var t=$e[e]=Qr(At);return pR(t,{type:Qn,tag:e,description:r}),Yr||(t.description=r),t},Xn=function(r,t,n){r===ve&&Xn(jt,t,n),mo(r);var a=xo(t);return mo(n),z($e,a)?(n.enumerable?(z(r,ne)&&r[ne][a]&&(r[ne][a]=!1),n=Qr(n,{enumerable:ho(0,!1)})):(z(r,ne)||gr(r,ne,ho(1,Qr(null))),r[ne][a]=!0),bo(r,a,n)):gr(r,a,n)},So=function(r,t){mo(r);var n=Yn(t),a=Mv(n).concat(Vv(n));return Jn(a,function(o){(!Yr||qo(go,n,o))&&Xn(r,o,n[o])}),r},yR=function(r,t){return t===void 0?Qr(r):So(Qr(r),t)},go=function(r){var t=xo(r),n=qo(mR,this,t);return this===ve&&z($e,t)&&!z(jt,t)?!1:n||!z(this,t)||!z($e,t)||z(this,ne)&&this[ne][t]?n:!0},Kv=function(r,t){var n=Yn(r),a=xo(t);if(!(n===ve&&z($e,a)&&!z(jt,a))){var o=Gv(n,a);return o&&z($e,a)&&!(z(n,ne)&&n[ne][a])&&(o.enumerable=!0),o}},zv=function(r){var t=Uv(Yn(r)),n=[];return Jn(t,function(a){!z($e,a)&&!z(Dv,a)&&Hv(n,a)}),n},Vv=function(e){var r=e===ve,t=Uv(r?jt:Yn(e)),n=[];return Jn(t,function(a){z($e,a)&&(!r||z(ve,a))&&Hv(n,$e[a])}),n};Jr||(br=function(){if(eR(At,this))throw new dR("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:rR(arguments[0]),t=Av(r),n=function(a){var o=this===void 0?Mt:this;o===ve&&qo(n,jt,a),z(o,ne)&&z(o[ne],t)&&(o[ne][t]=!1);var u=ho(1,a);try{bo(o,t,u)}catch(c){if(!(c instanceof vR))throw c;Wv(o,t,u)}};return Yr&&yo&&bo(ve,t,{configurable:!0,set:n}),vo(t,r)},At=br[Nt],fo(At,"toString",function(){return Nv(this).tag}),fo(br,"withoutSetter",function(e){return vo(Av(e),e)}),Fv.f=go,$v.f=Xn,aR.f=So,Lv.f=Kv,tR.f=jv.f=zv,nR.f=Vv,sR.f=function(e){return vo(uR(e),e)},Yr&&(iR(At,"description",{configurable:!0,get:function(){return Nv(this).description}}),XP||fo(ve,"propertyIsEnumerable",go,{unsafe:!0})));Vn({global:!0,constructor:!0,wrap:!0,forced:!Jr,sham:!Jr},{Symbol:br});Jn(Mv(hR),function(e){cR(e)});Vn({target:Qn,stat:!0,forced:!Jr},{useSetter:function(){yo=!0},useSimple:function(){yo=!1}});Vn({target:"Object",stat:!0,forced:!Jr,sham:!Yr},{create:yR,defineProperty:Xn,defineProperties:So,getOwnPropertyDescriptor:Kv});Vn({target:"Object",stat:!0,forced:!Jr},{getOwnPropertyNames:zv});lR();fR(br,Qn);Dv[ne]=!0});var Eo=i((TU,Jv)=>{"use strict";var bR=pr();Jv.exports=bR&&!!Symbol.for&&!!Symbol.keyFor});var Xv=i(()=>{"use strict";var gR=q(),qR=W(),xR=K(),wR=Xe(),Qv=vr(),SR=Eo(),To=Qv("string-to-symbol-registry"),ER=Qv("symbol-to-string-registry");gR({target:"Symbol",stat:!0,forced:!SR},{for:function(e){var r=wR(e);if(xR(To,r))return To[r];var t=qR("Symbol")(r);return To[r]=t,ER[t]=r,t}})});var ed=i(()=>{"use strict";var TR=q(),CR=K(),OR=Fr(),kR=Qe(),IR=vr(),_R=Eo(),Zv=IR("symbol-to-string-registry");TR({target:"Symbol",stat:!0,forced:!_R},{keyFor:function(r){if(!OR(r))throw new TypeError(kR(r)+" is not a symbol");if(CR(Zv,r))return Zv[r]}})});var td=i((_U,rd)=>{"use strict";var PR=$(),RR=Ze().get;rd.exports=function(r){if(!PR(r))return!1;var t=RR(r);return!!t&&t.type==="RawJSON"}});var ud=i((PU,od)=>{"use strict";var Co=N(),AR=K(),Zn=SyntaxError,NR=parseInt,MR=String.fromCharCode,jR=Co("".charAt),nd=Co("".slice),ad=Co(/./.exec),id={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},LR=/^[\da-f]{4}$/i,$R=/^[\u0000-\u001F]$/;od.exports=function(e,r){for(var t=!0,n="";r<e.length;){var a=jR(e,r);if(a==="\\"){var o=nd(e,r,r+2);if(AR(id,o))n+=id[o],r+=2;else if(o==="\\u"){r+=2;var u=nd(e,r,r+4);if(!ad(LR,u))throw new Zn("Bad Unicode escape at: "+r);n+=MR(NR(u,16)),r+=4}else throw new Zn('Unknown escape sequence: "'+o+'"')}else if(a==='"'){t=!1,r++;break}else{if(ad($R,a))throw new Zn("Bad control character in string literal at: "+r);n+=a,r++}}if(t)throw new Zn("Unterminated string at: "+r);return{value:n,end:r}}});var cd=i((RU,sd)=>{"use strict";var FR=_();sd.exports=!FR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var Sd=i(()=>{"use strict";var DR=q(),yd=W(),BR=jr(),bd=G(),qr=N(),gd=_(),ld=Ne(),ra=M(),GR=td(),fd=Fr(),pd=Te(),UR=Xe(),HR=dr(),WR=ud(),KR=Dr(),zR=pr(),Oo=cd(),qd=String,tr=yd("JSON","stringify"),ea=qr(/./.exec),Io=qr("".charAt),VR=qr("".charCodeAt),YR=qr("".replace),ko=qr("".slice),_o=qr([].push),JR=qr(1.1.toString),QR=/[\uD800-\uDFFF]/g,vd=/^[\uD800-\uDBFF]$/,dd=/^[\uDC00-\uDFFF]$/,Po=KR(),md=Po.length,xd=!zR||gd(function(){var e=yd("Symbol")("stringify detection");return tr([e])!=="[null]"||tr({a:e})!=="{}"||tr(Object(e))!=="{}"}),hd=gd(function(){return tr("\uDF06\uD834")!=='"\\udf06\\ud834"'||tr("\uDEAD")!=='"\\udead"'}),XR=xd?function(e,r){var t=HR(arguments),n=wd(r);if(!(!ra(n)&&(e===void 0||fd(e))))return t[1]=function(a,o){if(ra(n)&&(o=bd(n,this,qd(a),o)),!fd(o))return o},BR(tr,null,t)}:tr,ZR=function(e,r,t){var n=Io(t,r-1),a=Io(t,r+1);return ea(vd,e)&&!ea(dd,a)||ea(dd,e)&&!ea(vd,n)?"\\u"+JR(VR(e,0),16):e},wd=function(e){if(ra(e))return e;if(ld(e)){for(var r=e.length,t=[],n=0;n<r;n++){var a=e[n];typeof a=="string"?_o(t,a):(typeof a=="number"||pd(a)==="Number"||pd(a)==="String")&&_o(t,UR(a))}var o=t.length,u=!0;return function(c,s){if(u)return u=!1,s;if(ld(this))return s;for(var l=0;l<o;l++)if(t[l]===c)return s}}};tr&&DR({target:"JSON",stat:!0,arity:3,forced:xd||hd||!Oo},{stringify:function(r,t,n){var a=wd(t),o=[],u=XR(r,function(d,h){var m=ra(a)?bd(a,this,qd(d),h):h;return!Oo&&GR(m)?Po+(_o(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(hd&&(u=YR(u,QR,ZR)),Oo))return u;for(var c="",s=u.length,l=0;l<s;l++){var f=Io(u,l);if(f==='"'){var v=WR(u,++l).end-1,p=ko(u,l,v);c+=ko(p,0,md)===Po?o[ko(p,md)]:'"'+p+'"',l=v}else c+=f}return c}})});var Td=i(()=>{"use strict";var eA=q(),rA=pr(),tA=_(),Ed=Kn(),nA=re(),aA=!rA||tA(function(){Ed.f(1)});eA({target:"Object",stat:!0,forced:aA},{getOwnPropertySymbols:function(r){var t=Ed.f;return t?t(nA(r)):[]}})});var Cd=i(()=>{"use strict";Yv();Xv();ed();Sd();Td()});var Ro=i(()=>{"use strict";var iA=j();iA("asyncDispose")});var Ao=i(()=>{"use strict";var oA=j();oA("asyncIterator")});var Od=i(()=>{});var No=i(()=>{"use strict";var uA=j();uA("dispose")});var kd=i(()=>{"use strict";var sA=j();sA("hasInstance")});var Id=i(()=>{"use strict";var cA=j();cA("isConcatSpreadable")});var Mo=i(()=>{"use strict";var lA=j();lA("iterator")});var _d=i(()=>{"use strict";var fA=j();fA("match")});var Pd=i(()=>{"use strict";var pA=j();pA("matchAll")});var Rd=i(()=>{"use strict";var vA=j();vA("replace")});var Ad=i(()=>{"use strict";var dA=j();dA("search")});var Nd=i(()=>{"use strict";var mA=j();mA("species")});var Md=i(()=>{"use strict";var hA=j();hA("split")});var jo=i(()=>{"use strict";var yA=j(),bA=co();yA("toPrimitive");bA()});var jd=i(()=>{"use strict";var gA=W(),qA=j(),xA=Le();qA("toStringTag");xA(gA("Symbol"),"Symbol")});var Ld=i(()=>{"use strict";var wA=j();wA("unscopables")});var $d=i(()=>{"use strict";var SA=P(),EA=Le();EA(SA.JSON,"JSON",!0)});var Fd=i(()=>{});var Dd=i(()=>{});var Gd=i((SH,Bd)=>{"use strict";uo();_t();Cd();Ro();Ao();Od();No();kd();Id();Mo();_d();Pd();Rd();Ad();Nd();Md();jo();jd();Ld();$d();Fd();Dd();var TA=V();Bd.exports=TA.Symbol});var Lo=i((EH,Ud)=>{"use strict";Ud.exports=function(){}});var xr=i((TH,Vd)=>{"use strict";var CA=Ae(),$o=Lo(),Hd=hr(),Kd=Ze(),OA=te().f,kA=Bn(),ta=Gn(),IA=Z(),_A=H(),zd="Array Iterator",PA=Kd.set,RA=Kd.getterFor(zd);Vd.exports=kA(Array,"Array",function(e,r){PA(this,{type:zd,target:CA(e),index:0,kind:r})},function(){var e=RA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,ta(void 0,!0);switch(e.kind){case"keys":return ta(t,!1);case"values":return ta(r[t],!1)}return ta([t,r[t]],!1)},"values");var Wd=Hd.Arguments=Hd.Array;$o("keys");$o("values");$o("entries");if(!IA&&_A&&Wd.name!=="values")try{OA(Wd,"name",{value:"values"})}catch{}});var Jd=i((CH,Yd)=>{"use strict";Yd.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var wr=i(()=>{"use strict";xr();var AA=Jd(),NA=P(),MA=Le(),Qd=hr();for(na in AA)MA(NA[na],na),Qd[na]=Qd.Array;var na});var Zd=i((IH,Xd)=>{"use strict";var jA=Gd();wr();Xd.exports=jA});var tm=i(()=>{"use strict";var LA=R(),$A=te().f,em=LA("metadata"),rm=Function.prototype;rm[em]===void 0&&$A(rm,em,{value:null})});var nm=i(()=>{"use strict";Ro()});var am=i(()=>{"use strict";No()});var im=i(()=>{"use strict";var FA=j();FA("metadata")});var um=i(($H,om)=>{"use strict";var DA=Zd();tm();nm();am();im();om.exports=DA});var Do=i((FH,sm)=>{"use strict";var BA=W(),GA=N(),Fo=BA("Symbol"),UA=Fo.keyFor,HA=GA(Fo.prototype.valueOf);sm.exports=Fo.isRegisteredSymbol||function(r){try{return UA(HA(r))!==void 0}catch{return!1}}});var cm=i(()=>{"use strict";var WA=q(),KA=Do();WA({target:"Symbol",stat:!0},{isRegisteredSymbol:KA})});var Uo=i((GH,mm)=>{"use strict";var zA=vr(),vm=W(),VA=N(),YA=Fr(),JA=R(),ia=vm("Symbol"),lm=ia.isWellKnownSymbol,dm=vm("Object","getOwnPropertyNames"),QA=VA(ia.prototype.valueOf),fm=zA("wks");for(aa=0,Bo=dm(ia),pm=Bo.length;aa<pm;aa++)try{Go=Bo[aa],YA(ia[Go])&&JA(Go)}catch{}var Go,aa,Bo,pm;mm.exports=function(r){if(lm&&lm(r))return!0;try{for(var t=QA(r),n=0,a=dm(fm),o=a.length;n<o;n++)if(fm[a[n]]==t)return!0}catch{}return!1}});var hm=i(()=>{"use strict";var XA=q(),ZA=Uo();XA({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:ZA})});var ym=i(()=>{"use strict";var e2=j();e2("customMatcher")});var bm=i(()=>{"use strict";var r2=j();r2("observable")});var gm=i(()=>{"use strict";var t2=q(),n2=Do();t2({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:n2})});var qm=i(()=>{"use strict";var a2=q(),i2=Uo();a2({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:i2})});var xm=i(()=>{"use strict";var o2=j();o2("matcher")});var wm=i(()=>{"use strict";var u2=j();u2("metadataKey")});var Sm=i(()=>{"use strict";var s2=j();s2("patternMatch")});var Em=i(()=>{"use strict";var c2=j();c2("replaceAll")});var Cm=i((uW,Tm)=>{"use strict";var l2=um();cm();hm();ym();bm();gm();qm();xm();wm();Sm();Em();Tm.exports=l2});var Oe=i((sW,Om)=>{"use strict";Om.exports=Cm()});var oa=i((cW,km)=>{km.exports=Oe()});var _m=i((lW,Im)=>{"use strict";xr();yr();var f2=kt();Im.exports=f2});var Rm=i((fW,Pm)=>{"use strict";var p2=_m();wr();Pm.exports=p2});var Nm=i((pW,Am)=>{"use strict";var v2=Rm();Am.exports=v2});var jm=i((vW,Mm)=>{"use strict";var d2=Nm();Mm.exports=d2});var Ho=i((dW,Lm)=>{"use strict";Lm.exports=jm()});var ua=i((mW,$m)=>{$m.exports=Ho()});var Dm=i((hW,Fm)=>{"use strict";xr();yr();var m2=Un();Fm.exports=m2});var Gm=i((yW,Bm)=>{"use strict";var h2=Dm();wr();Bm.exports=h2});var Hm=i((bW,Um)=>{"use strict";var y2=Gm();Um.exports=y2});var Km=i((gW,Wm)=>{"use strict";var b2=Hm();Wm.exports=b2});var Vm=i((qW,zm)=>{"use strict";zm.exports=Km()});var sa=i((xW,Ym)=>{Ym.exports=Vm()});var Qm=i((wW,Jm)=>{"use strict";var g2=W(),q2=N(),x2=Pt(),w2=Kn(),S2=X(),E2=q2([].concat);Jm.exports=g2("Reflect","ownKeys")||function(r){var t=x2.f(S2(r)),n=w2.f;return n?E2(t,n(r)):t}});var eh=i((SW,Zm)=>{"use strict";var Xm=K(),T2=Qm(),C2=mt(),O2=te();Zm.exports=function(e,r,t){for(var n=T2(r),a=O2.f,o=C2.f,u=0;u<n.length;u++){var c=n[u];!Xm(e,c)&&!(t&&Xm(t,c))&&a(e,c,o(r,c))}}});var th=i((EW,rh)=>{"use strict";var k2=$(),I2=Ce();rh.exports=function(e,r){k2(r)&&"cause"in r&&I2(e,"cause",r.cause)}});var oh=i((TW,ih)=>{"use strict";var _2=N(),nh=Error,P2=_2("".replace),R2=function(e){return String(new nh(e).stack)}("zxcasd"),ah=/\n\s*at [^:]*:[^\n]*/,A2=ah.test(R2);ih.exports=function(e,r){if(A2&&typeof e=="string"&&!nh.prepareStackTrace)for(;r--;)e=P2(e,ah,"");return e}});var sh=i((CW,uh)=>{"use strict";var N2=_(),M2=Je();uh.exports=!N2(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",M2(1,7)),e.stack!==7):!0})});var fh=i((OW,lh)=>{"use strict";var j2=Ce(),L2=oh(),$2=sh(),ch=Error.captureStackTrace;lh.exports=function(e,r,t,n){$2&&(ch?ch(e,r):j2(e,"stack",L2(t,n)))}});var de=i((kW,mh)=>{"use strict";var F2=Y(),D2=G(),B2=X(),G2=Qe(),U2=no(),H2=pe(),ph=U(),W2=Un(),K2=kt(),vh=to(),z2=TypeError,ca=function(e,r){this.stopped=e,this.result=r},dh=ca.prototype;mh.exports=function(e,r,t){var n=t&&t.that,a=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),c=!!(t&&t.INTERRUPTED),s=F2(r,n),l,f,v,p,d,h,m,x=function(g){return l&&vh(l,"normal"),new ca(!0,g)},y=function(g){return a?(B2(g),c?s(g[0],g[1],x):s(g[0],g[1])):c?s(g,x):s(g)};if(o)l=e.iterator;else if(u)l=e;else{if(f=K2(e),!f)throw new z2(G2(e)+" is not iterable");if(U2(f)){for(v=0,p=H2(e);p>v;v++)if(d=y(e[v]),d&&ph(dh,d))return d;return new ca(!1)}l=W2(e,f)}for(h=o?e.next:l.next;!(m=D2(h,l)).done;){try{d=y(m.value)}catch(g){vh(l,"throw",g)}if(typeof d=="object"&&d&&ph(dh,d))return d}return new ca(!1)}});var yh=i((IW,hh)=>{"use strict";var V2=Xe();hh.exports=function(e,r){return e===void 0?arguments.length<2?"":r:V2(e)}});var gh=i(()=>{"use strict";var Y2=q(),J2=U(),Q2=Et(),la=Tt(),X2=eh(),bh=er(),Wo=Ce(),Ko=Je(),Z2=th(),eN=fh(),rN=de(),tN=yh(),nN=R(),aN=nN("toStringTag"),fa=Error,iN=[].push,Xr=function(r,t){var n=J2(zo,this),a;la?a=la(new fa,n?Q2(this):zo):(a=n?this:bh(zo),Wo(a,aN,"Error")),t!==void 0&&Wo(a,"message",tN(t)),eN(a,Xr,a.stack,1),arguments.length>2&&Z2(a,arguments[2]);var o=[];return rN(r,iN,{that:o}),Wo(a,"errors",o),a};la?la(Xr,fa):X2(Xr,fa,{name:!0});var zo=Xr.prototype=bh(fa.prototype,{constructor:Ko(1,Xr),message:Ko(1,""),name:Ko(1,"AggregateError")});Y2({global:!0,constructor:!0,arity:2},{AggregateError:Xr})});var Vo=i(()=>{"use strict";gh()});var Yo=i((NW,qh)=>{"use strict";var Lt=P(),oN=Lr(),uN=Te(),pa=function(e){return oN.slice(0,e.length)===e};qh.exports=function(){return pa("Bun/")?"BUN":pa("Cloudflare-Workers")?"CLOUDFLARE":pa("Deno/")?"DENO":pa("Node.js/")?"NODE":Lt.Bun&&typeof Bun.version=="string"?"BUN":Lt.Deno&&typeof Deno.version=="object"?"DENO":uN(Lt.process)==="process"?"NODE":Lt.window&&Lt.document?"BROWSER":"REST"}()});var $t=i((MW,xh)=>{"use strict";var sN=Yo();xh.exports=sN==="NODE"});var Jo=i((jW,Sh)=>{"use strict";var cN=W(),lN=zn(),fN=R(),pN=H(),wh=fN("species");Sh.exports=function(e){var r=cN(e);pN&&r&&!r[wh]&&lN(r,wh,{configurable:!0,get:function(){return this}})}});var va=i((LW,Eh)=>{"use strict";var vN=U(),dN=TypeError;Eh.exports=function(e,r){if(vN(r,e))return e;throw new dN("Incorrect invocation")}});var Qo=i(($W,Th)=>{"use strict";var mN=qt(),hN=Qe(),yN=TypeError;Th.exports=function(e){if(mN(e))return e;throw new yN(hN(e)+" is not a constructor")}});var Xo=i((FW,Oh)=>{"use strict";var Ch=X(),bN=Qo(),gN=lr(),qN=R(),xN=qN("species");Oh.exports=function(e,r){var t=Ch(e).constructor,n;return t===void 0||gN(n=Ch(t)[xN])?r:bN(n)}});var Ih=i((DW,kh)=>{"use strict";var wN=TypeError;kh.exports=function(e,r){if(e<r)throw new wN("Not enough arguments");return e}});var Zo=i((BW,_h)=>{"use strict";var SN=Lr();_h.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(SN)});var su=i((GW,Fh)=>{"use strict";var ce=P(),EN=jr(),TN=Y(),Ph=M(),CN=K(),$h=_(),Rh=Wi(),ON=dr(),Ah=kn(),kN=Ih(),IN=Zo(),_N=$t(),iu=ce.setImmediate,ou=ce.clearImmediate,PN=ce.process,eu=ce.Dispatch,RN=ce.Function,Nh=ce.MessageChannel,AN=ce.String,ru=0,Ft={},Mh="onreadystatechange",Dt,Sr,tu,nu;$h(function(){Dt=ce.location});var uu=function(e){if(CN(Ft,e)){var r=Ft[e];delete Ft[e],r()}},au=function(e){return function(){uu(e)}},jh=function(e){uu(e.data)},Lh=function(e){ce.postMessage(AN(e),Dt.protocol+"//"+Dt.host)};(!iu||!ou)&&(iu=function(r){kN(arguments.length,1);var t=Ph(r)?r:RN(r),n=ON(arguments,1);return Ft[++ru]=function(){EN(t,void 0,n)},Sr(ru),ru},ou=function(r){delete Ft[r]},_N?Sr=function(e){PN.nextTick(au(e))}:eu&&eu.now?Sr=function(e){eu.now(au(e))}:Nh&&!IN?(tu=new Nh,nu=tu.port2,tu.port1.onmessage=jh,Sr=TN(nu.postMessage,nu)):ce.addEventListener&&Ph(ce.postMessage)&&!ce.importScripts&&Dt&&Dt.protocol!=="file:"&&!$h(Lh)?(Sr=Lh,ce.addEventListener("message",jh,!1)):Mh in Ah("script")?Sr=function(e){Rh.appendChild(Ah("script"))[Mh]=function(){Rh.removeChild(this),uu(e)}}:Sr=function(e){setTimeout(au(e),0)});Fh.exports={set:iu,clear:ou}});var Gh=i((UW,Bh)=>{"use strict";var Dh=P(),NN=H(),MN=Object.getOwnPropertyDescriptor;Bh.exports=function(e){if(!NN)return Dh[e];var r=MN(Dh,e);return r&&r.value}});var cu=i((HW,Hh)=>{"use strict";var Uh=function(){this.head=null,this.tail=null};Uh.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Hh.exports=Uh});var Kh=i((WW,Wh)=>{"use strict";var jN=Lr();Wh.exports=/ipad|iphone|ipod/i.test(jN)&&typeof Pebble<"u"});var Vh=i((KW,zh)=>{"use strict";var LN=Lr();zh.exports=/web0s(?!.*chrome)/i.test(LN)});var ry=i((zW,ey)=>{"use strict";var et=P(),$N=Gh(),Yh=Y(),lu=su().set,FN=cu(),DN=Zo(),BN=Kh(),GN=Vh(),fu=$t(),Jh=et.MutationObserver||et.WebKitMutationObserver,Qh=et.document,Xh=et.process,da=et.Promise,du=$N("queueMicrotask"),Zr,pu,vu,ma,Zh;du||(Bt=new FN,Gt=function(){var e,r;for(fu&&(e=Xh.domain)&&e.exit();r=Bt.get();)try{r()}catch(t){throw Bt.head&&Zr(),t}e&&e.enter()},!DN&&!fu&&!GN&&Jh&&Qh?(pu=!0,vu=Qh.createTextNode(""),new Jh(Gt).observe(vu,{characterData:!0}),Zr=function(){vu.data=pu=!pu}):!BN&&da&&da.resolve?(ma=da.resolve(void 0),ma.constructor=da,Zh=Yh(ma.then,ma),Zr=function(){Zh(Gt)}):fu?Zr=function(){Xh.nextTick(Gt)}:(lu=Yh(lu,et),Zr=function(){lu(Gt)}),du=function(e){Bt.head||Zr(),Bt.add(e)});var Bt,Gt;ey.exports=du});var ny=i((VW,ty)=>{"use strict";ty.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var Er=i((YW,ay)=>{"use strict";ay.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var Tr=i((JW,iy)=>{"use strict";var UN=P();iy.exports=UN.Promise});var rt=i((QW,cy)=>{"use strict";var HN=P(),Ut=Tr(),WN=M(),KN=xi(),zN=ki(),VN=R(),oy=Yo(),YN=Z(),mu=$r(),uy=Ut&&Ut.prototype,JN=VN("species"),hu=!1,sy=WN(HN.PromiseRejectionEvent),QN=KN("Promise",function(){var e=zN(Ut),r=e!==String(Ut);if(!r&&mu===66||YN&&!(uy.catch&&uy.finally))return!0;if(!mu||mu<51||!/native code/.test(e)){var t=new Ut(function(o){o(1)}),n=function(o){o(function(){},function(){})},a=t.constructor={};if(a[JN]=n,hu=t.then(function(){})instanceof n,!hu)return!0}return!r&&(oy==="BROWSER"||oy==="DENO")&&!sy});cy.exports={CONSTRUCTOR:QN,REJECTION_EVENT:sy,SUBCLASSING:hu}});var ke=i((XW,fy)=>{"use strict";var ly=D(),XN=TypeError,ZN=function(e){var r,t;this.promise=new e(function(n,a){if(r!==void 0||t!==void 0)throw new XN("Bad Promise constructor");r=n,t=a}),this.resolve=ly(r),this.reject=ly(t)};fy.exports.f=function(e){return new ZN(e)}});var Py=i(()=>{"use strict";var eM=q(),rM=Z(),ga=$t(),nr=P(),tM=V(),it=G(),py=Me(),vy=Tt(),nM=Le(),aM=Jo(),iM=D(),ba=M(),oM=$(),uM=va(),sM=Xo(),by=su().set,xu=ry(),cM=ny(),lM=Er(),fM=cu(),gy=Ze(),qa=Tr(),wu=rt(),qy=ke(),xa="Promise",xy=wu.CONSTRUCTOR,pM=wu.REJECTION_EVENT,vM=wu.SUBCLASSING,yu=gy.getterFor(xa),dM=gy.set,tt=qa&&qa.prototype,Cr=qa,ha=tt,wy=nr.TypeError,bu=nr.document,Su=nr.process,gu=qy.f,mM=gu,hM=!!(bu&&bu.createEvent&&nr.dispatchEvent),Sy="unhandledrejection",yM="rejectionhandled",dy=0,Ey=1,bM=2,Eu=1,Ty=2,ya,my,Cy,hy,Oy=function(e){var r;return oM(e)&&ba(r=e.then)?r:!1},ky=function(e,r){var t=r.value,n=r.state===Ey,a=n?e.ok:e.fail,o=e.resolve,u=e.reject,c=e.domain,s,l,f;try{a?(n||(r.rejection===Ty&&qM(r),r.rejection=Eu),a===!0?s=t:(c&&c.enter(),s=a(t),c&&(c.exit(),f=!0)),s===e.promise?u(new wy("Promise-chain cycle")):(l=Oy(s))?it(l,s,o,u):o(s)):u(t)}catch(v){c&&!f&&c.exit(),u(v)}},Iy=function(e,r){e.notified||(e.notified=!0,xu(function(){for(var t=e.reactions,n;n=t.get();)ky(n,e);e.notified=!1,r&&!e.rejection&&gM(e)}))},_y=function(e,r,t){var n,a;hM?(n=bu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),nr.dispatchEvent(n)):n={promise:r,reason:t},!pM&&(a=nr["on"+e])?a(n):e===Sy&&cM("Unhandled promise rejection",t)},gM=function(e){it(by,nr,function(){var r=e.facade,t=e.value,n=yy(e),a;if(n&&(a=lM(function(){ga?Su.emit("unhandledRejection",t,r):_y(Sy,r,t)}),e.rejection=ga||yy(e)?Ty:Eu,a.error))throw a.value})},yy=function(e){return e.rejection!==Eu&&!e.parent},qM=function(e){it(by,nr,function(){var r=e.facade;ga?Su.emit("rejectionHandled",r):_y(yM,r,e.value)})},nt=function(e,r,t){return function(n){e(r,n,t)}},at=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=bM,Iy(e,!0))},qu=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new wy("Promise can't be resolved itself");var n=Oy(r);n?xu(function(){var a={done:!1};try{it(n,r,nt(qu,a,e),nt(at,a,e))}catch(o){at(a,o,e)}}):(e.value=r,e.state=Ey,Iy(e,!1))}catch(a){at({done:!1},a,e)}}};if(xy&&(Cr=function(r){uM(this,ha),iM(r),it(ya,this);var t=yu(this);try{r(nt(qu,t),nt(at,t))}catch(n){at(t,n)}},ha=Cr.prototype,ya=function(r){dM(this,{type:xa,done:!1,notified:!1,parent:!1,reactions:new fM,rejection:!1,state:dy,value:null})},ya.prototype=py(ha,"then",function(r,t){var n=yu(this),a=gu(sM(this,Cr));return n.parent=!0,a.ok=ba(r)?r:!0,a.fail=ba(t)&&t,a.domain=ga?Su.domain:void 0,n.state===dy?n.reactions.add(a):xu(function(){ky(a,n)}),a.promise}),my=function(){var e=new ya,r=yu(e);this.promise=e,this.resolve=nt(qu,r),this.reject=nt(at,r)},qy.f=gu=function(e){return e===Cr||e===Cy?new my(e):mM(e)},!rM&&ba(qa)&&tt!==Object.prototype)){hy=tt.then,vM||py(tt,"then",function(r,t){var n=this;return new Cr(function(a,o){it(hy,n,a,o)}).then(r,t)},{unsafe:!0});try{delete tt.constructor}catch{}vy&&vy(tt,ha)}eM({global:!0,constructor:!0,wrap:!0,forced:xy},{Promise:Cr});Cy=tM.Promise;nM(Cr,xa,!1,!0);aM(xa)});var Ht=i((rK,Ry)=>{"use strict";var xM=Tr(),wM=io(),SM=rt().CONSTRUCTOR;Ry.exports=SM||!wM(function(e){xM.all(e).then(void 0,function(){})})});var Ay=i(()=>{"use strict";var EM=q(),TM=G(),CM=D(),OM=ke(),kM=Er(),IM=de(),_M=Ht();EM({target:"Promise",stat:!0,forced:_M},{all:function(r){var t=this,n=OM.f(t),a=n.resolve,o=n.reject,u=kM(function(){var c=CM(t.resolve),s=[],l=0,f=1;IM(r,function(v){var p=l++,d=!1;f++,TM(c,t,v).then(function(h){d||(d=!0,s[p]=h,--f||a(s))},o)}),--f||a(s)});return u.error&&o(u.value),n.promise}})});var My=i(()=>{"use strict";var PM=q(),RM=Z(),AM=rt().CONSTRUCTOR,Cu=Tr(),NM=W(),MM=M(),jM=Me(),Ny=Cu&&Cu.prototype;PM({target:"Promise",proto:!0,forced:AM,real:!0},{catch:function(e){return this.then(void 0,e)}});!RM&&MM(Cu)&&(Tu=NM("Promise").prototype.catch,Ny.catch!==Tu&&jM(Ny,"catch",Tu,{unsafe:!0}));var Tu});var jy=i(()=>{"use strict";var LM=q(),$M=G(),FM=D(),DM=ke(),BM=Er(),GM=de(),UM=Ht();LM({target:"Promise",stat:!0,forced:UM},{race:function(r){var t=this,n=DM.f(t),a=n.reject,o=BM(function(){var u=FM(t.resolve);GM(r,function(c){$M(u,t,c).then(n.resolve,a)})});return o.error&&a(o.value),n.promise}})});var Ly=i(()=>{"use strict";var HM=q(),WM=ke(),KM=rt().CONSTRUCTOR;HM({target:"Promise",stat:!0,forced:KM},{reject:function(r){var t=WM.f(this),n=t.reject;return n(r),t.promise}})});var Ou=i((lK,$y)=>{"use strict";var zM=X(),VM=$(),YM=ke();$y.exports=function(e,r){if(zM(e),VM(r)&&r.constructor===e)return r;var t=YM.f(e),n=t.resolve;return n(r),t.promise}});var By=i(()=>{"use strict";var JM=q(),QM=W(),Fy=Z(),XM=Tr(),Dy=rt().CONSTRUCTOR,ZM=Ou(),ej=QM("Promise"),rj=Fy&&!Dy;JM({target:"Promise",stat:!0,forced:Fy||Dy},{resolve:function(r){return ZM(rj&&this===ej?XM:this,r)}})});var Gy=i(()=>{"use strict";Py();Ay();My();jy();Ly();By()});var ku=i(()=>{"use strict";var tj=q(),nj=G(),aj=D(),ij=ke(),oj=Er(),uj=de(),sj=Ht();tj({target:"Promise",stat:!0,forced:sj},{allSettled:function(r){var t=this,n=ij.f(t),a=n.resolve,o=n.reject,u=oj(function(){var c=aj(t.resolve),s=[],l=0,f=1;uj(r,function(v){var p=l++,d=!1;f++,nj(c,t,v).then(function(h){d||(d=!0,s[p]={status:"fulfilled",value:h},--f||a(s))},function(h){d||(d=!0,s[p]={status:"rejected",reason:h},--f||a(s))})}),--f||a(s)});return u.error&&o(u.value),n.promise}})});var Iu=i(()=>{"use strict";var cj=q(),lj=G(),fj=D(),pj=W(),vj=ke(),dj=Er(),mj=de(),hj=Ht(),Uy="No one promise resolved";cj({target:"Promise",stat:!0,forced:hj},{any:function(r){var t=this,n=pj("AggregateError"),a=vj.f(t),o=a.resolve,u=a.reject,c=dj(function(){var s=fj(t.resolve),l=[],f=0,v=1,p=!1;mj(r,function(d){var h=f++,m=!1;v++,lj(s,t,d).then(function(x){m||p||(p=!0,o(x))},function(x){m||p||(m=!0,l[h]=x,--v||u(new n(l,Uy)))})}),--v||u(new n(l,Uy))});return c.error&&u(c.value),a.promise}})});var Pu=i(()=>{"use strict";var yj=q(),bj=P(),gj=jr(),qj=dr(),xj=ke(),wj=D(),Wy=Er(),_u=bj.Promise,Hy=!1,Sj=!_u||!_u.try||Wy(function(){_u.try(function(e){Hy=e===8},8)}).error||!Hy;yj({target:"Promise",stat:!0,forced:Sj},{try:function(e){var r=arguments.length>1?qj(arguments,1):[],t=xj.f(this),n=Wy(function(){return gj(wj(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var Ru=i(()=>{"use strict";var Ej=q(),Tj=ke();Ej({target:"Promise",stat:!0},{withResolvers:function(){var r=Tj.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var Yy=i(()=>{"use strict";var Cj=q(),Oj=Z(),wa=Tr(),kj=_(),zy=W(),Vy=M(),Ij=Xo(),Ky=Ou(),_j=Me(),Nu=wa&&wa.prototype,Pj=!!wa&&kj(function(){Nu.finally.call({then:function(){}},function(){})});Cj({target:"Promise",proto:!0,real:!0,forced:Pj},{finally:function(e){var r=Ij(this,zy("Promise")),t=Vy(e);return this.then(t?function(n){return Ky(r,e()).then(function(){return n})}:e,t?function(n){return Ky(r,e()).then(function(){throw n})}:e)}});!Oj&&Vy(wa)&&(Au=zy("Promise").prototype.finally,Nu.finally!==Au&&_j(Nu,"finally",Au,{unsafe:!0}));var Au});var Qy=i((TK,Jy)=>{"use strict";Vo();xr();_t();Gy();ku();Iu();Pu();Ru();Yy();yr();var Rj=V();Jy.exports=Rj.Promise});var Zy=i((CK,Xy)=>{"use strict";var Aj=Qy();wr();Xy.exports=Aj});var eb=i(()=>{"use strict";Pu()});var rb=i(()=>{"use strict";Ru()});var nb=i((PK,tb)=>{"use strict";var Nj=Zy();eb();rb();tb.exports=Nj});var ab=i(()=>{"use strict";Vo()});var ib=i(()=>{"use strict";ku()});var ob=i(()=>{"use strict";Iu()});var sb=i(($K,ub)=>{"use strict";var Mj=nb();ab();ib();ob();ub.exports=Mj});var ot=i((FK,cb)=>{"use strict";cb.exports=sb()});var pb=i((HK,fb)=>{"use strict";Ao();var jj=Vr();fb.exports=jj.f("asyncIterator")});var db=i((WK,vb)=>{"use strict";var Lj=pb();vb.exports=Lj});var hb=i((KK,mb)=>{"use strict";var $j=db();mb.exports=$j});var bb=i((zK,yb)=>{"use strict";var Fj=hb();yb.exports=Fj});var Sa=i((VK,gb)=>{"use strict";gb.exports=bb()});var Sb=i(()=>{"use strict";var Dj=q(),Bj=_(),Gj=re(),wb=Et(),Uj=Yi(),Hj=Bj(function(){wb(1)});Dj({target:"Object",stat:!0,forced:Hj,sham:!Uj},{getPrototypeOf:function(r){return wb(Gj(r))}})});var Tb=i((ZK,Eb)=>{"use strict";Sb();var Wj=V();Eb.exports=Wj.Object.getPrototypeOf});var Ob=i((ez,Cb)=>{"use strict";var Kj=Tb();Cb.exports=Kj});var Ib=i((rz,kb)=>{"use strict";var zj=Ob();kb.exports=zj});var Pb=i((tz,_b)=>{"use strict";var Vj=Ib();_b.exports=Vj});var Ea=i((nz,Rb)=>{"use strict";Rb.exports=Pb()});var Nb=i(()=>{"use strict";var Yj=q(),Jj=N(),Qj=Ne(),Xj=Jj([].reverse),Ab=[1,2];Yj({target:"Array",proto:!0,forced:String(Ab)===String(Ab.reverse())},{reverse:function(){return Qj(this)&&(this.length=this.length),Xj(this)}})});var jb=i((oz,Mb)=>{"use strict";Nb();var Zj=se();Mb.exports=Zj("Array","reverse")});var $b=i((uz,Lb)=>{"use strict";var eL=U(),rL=jb(),Lu=Array.prototype;Lb.exports=function(e){var r=e.reverse;return e===Lu||eL(Lu,e)&&r===Lu.reverse?rL:r}});var Db=i((sz,Fb)=>{"use strict";var tL=$b();Fb.exports=tL});var Gb=i((cz,Bb)=>{"use strict";var nL=Db();Bb.exports=nL});var Hb=i((lz,Ub)=>{"use strict";var aL=Gb();Ub.exports=aL});var Kb=i((fz,Wb)=>{"use strict";Wb.exports=Hb()});var $u=i((pz,zt)=>{function iL(e,r){this.v=e,this.k=r}zt.exports=iL,zt.exports.__esModule=!0,zt.exports.default=zt.exports});var zb=i(()=>{"use strict";var oL=q(),uL=H(),sL=er();oL({target:"Object",stat:!0,sham:!uL},{create:sL})});var Yb=i((mz,Vb)=>{"use strict";zb();var cL=V(),lL=cL.Object;Vb.exports=function(r,t){return lL.create(r,t)}});var Qb=i((hz,Jb)=>{"use strict";var fL=Yb();Jb.exports=fL});var Zb=i((yz,Xb)=>{"use strict";var pL=Qb();Xb.exports=pL});var rg=i((bz,eg)=>{"use strict";var vL=Zb();eg.exports=vL});var Ta=i((gz,tg)=>{"use strict";tg.exports=rg()});var Du=i((qz,og)=>{"use strict";var ag=N(),dL=D(),mL=$(),hL=K(),ng=dr(),yL=Mr(),ig=Function,bL=ag([].concat),gL=ag([].join),Fu={},qL=function(e,r,t){if(!hL(Fu,r)){for(var n=[],a=0;a<r;a++)n[a]="a["+a+"]";Fu[r]=ig("C,a","return new C("+gL(n,",")+")")}return Fu[r](e,t)};og.exports=yL?ig.bind:function(r){var t=dL(this),n=t.prototype,a=ng(arguments,1),o=function(){var c=bL(a,ng(arguments));return this instanceof o?qL(t,c.length,c):t.apply(r,c)};return mL(n)&&(o.prototype=n),o}});var sg=i(()=>{"use strict";var xL=q(),ug=Du();xL({target:"Function",proto:!0,forced:Function.bind!==ug},{bind:ug})});var lg=i((Sz,cg)=>{"use strict";sg();var wL=se();cg.exports=wL("Function","bind")});var pg=i((Ez,fg)=>{"use strict";var SL=U(),EL=lg(),Bu=Function.prototype;fg.exports=function(e){var r=e.bind;return e===Bu||SL(Bu,e)&&r===Bu.bind?EL:r}});var dg=i((Tz,vg)=>{"use strict";var TL=pg();vg.exports=TL});var hg=i((Cz,mg)=>{"use strict";var CL=dg();mg.exports=CL});var bg=i((Oz,yg)=>{"use strict";var OL=hg();yg.exports=OL});var Vt=i((kz,gg)=>{"use strict";gg.exports=bg()});var qg=i(()=>{"use strict";var kL=q(),IL=Tt();kL({target:"Object",stat:!0},{setPrototypeOf:IL})});var wg=i((Pz,xg)=>{"use strict";qg();var _L=V();xg.exports=_L.Object.setPrototypeOf});var Eg=i((Rz,Sg)=>{"use strict";var PL=wg();Sg.exports=PL});var Cg=i((Az,Tg)=>{"use strict";var RL=Eg();Tg.exports=RL});var kg=i((Nz,Og)=>{"use strict";var AL=Cg();Og.exports=AL});var Ca=i((Mz,Ig)=>{"use strict";Ig.exports=kg()});var Pg=i(()=>{"use strict";var NL=q(),ML=H(),_g=te().f;NL({target:"Object",stat:!0,forced:Object.defineProperty!==_g,sham:!ML},{defineProperty:_g})});var Ng=i(($z,Ag)=>{"use strict";Pg();var jL=V(),Rg=jL.Object,LL=Ag.exports=function(r,t,n){return Rg.defineProperty(r,t,n)};Rg.defineProperty.sham&&(LL.sham=!0)});var jg=i((Fz,Mg)=>{"use strict";var $L=Ng();Mg.exports=$L});var $g=i((Dz,Lg)=>{"use strict";var FL=jg();Lg.exports=FL});var Dg=i((Bz,Fg)=>{"use strict";var DL=$g();Fg.exports=DL});var Yt=i((Gz,Bg)=>{"use strict";Bg.exports=Dg()});var Gu=i((Uz,Fe)=>{var BL=Yt();function Oa(e,r,t,n){var a=BL;try{a({},"",{})}catch{a=0}Fe.exports=Oa=function(u,c,s,l){function f(v,p){Oa(u,v,function(d){return this._invoke(v,p,d)})}c?a?a(u,c,{value:s,enumerable:!l,configurable:!l,writable:!l}):u[c]=s:(f("next",0),f("throw",1),f("return",2))},Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports,Oa(e,r,t,n)}Fe.exports=Oa,Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports});var Hu=i((Hz,De)=>{var Gg=Oe(),Uu=Ta(),GL=Vt(),UL=Ea(),Ug=Ca(),_e=Gu();function Hg(){var e,r,t=typeof Gg=="function"?Gg:{},n=t.iterator||"@@iterator",a=t.toStringTag||"@@toStringTag";function o(d,h,m,x){var y=h&&h.prototype instanceof c?h:c,g=Uu(y.prototype);return _e(g,"_invoke",function(O,k,w){var E,S,C,L=0,Se=w||[],I=!1,ee={p:0,n:0,v:e,a:Ee,f:GL(Ee).call(Ee,e,4),d:function(F,ye){return E=F,S=0,C=e,ee.n=ye,u}};function Ee(Q,F){for(S=Q,C=F,r=0;!I&&L&&!ye&&r<Se.length;r++){var ye,T=Se[r],Nr=ee.p,Ve=T[2];Q>3?(ye=Ve===F)&&(C=T[(S=T[4])?5:(S=3,3)],T[4]=T[5]=e):T[0]<=Nr&&((ye=Q<2&&Nr<T[1])?(S=0,ee.v=F,ee.n=T[1]):Nr<Ve&&(ye=Q<3||T[0]>F||F>Ve)&&(T[4]=Q,T[5]=F,ee.n=Ve,S=0))}if(ye||Q>1)return u;throw I=!0,F}return function(Q,F,ye){if(L>1)throw TypeError("Generator is already running");for(I&&F===1&&Ee(F,ye),S=F,C=ye;(r=S<2?e:C)||!I;){E||(S?S<3?(S>1&&(ee.n=-1),Ee(S,C)):ee.n=C:ee.v=C);try{if(L=2,E){if(S||(Q="next"),r=E[Q]){if(!(r=r.call(E,C)))throw TypeError("iterator result is not an object");if(!r.done)return r;C=r.value,S<2&&(S=0)}else S===1&&(r=E.return)&&r.call(E),S<2&&(C=TypeError("The iterator does not provide a '"+Q+"' method"),S=1);E=e}else if((r=(I=ee.n<0)?C:O.call(k,ee))!==u)break}catch(T){E=e,S=1,C=T}finally{L=1}}return{value:r,done:I}}}(d,m,x),!0),g}var u={};function c(){}function s(){}function l(){}r=UL;var f=[][n]?r(r([][n]())):(_e(r={},n,function(){return this}),r),v=l.prototype=c.prototype=Uu(f);function p(d){return Ug?Ug(d,l):(d.__proto__=l,_e(d,a,"GeneratorFunction")),d.prototype=Uu(v),d}return s.prototype=l,_e(v,"constructor",l),_e(l,"constructor",s),s.displayName="GeneratorFunction",_e(l,a,"GeneratorFunction"),_e(v),_e(v,a,"Generator"),_e(v,n,function(){return this}),_e(v,"toString",function(){return"[object Generator]"}),(De.exports=Hg=function(){return{w:o,m:p}},De.exports.__esModule=!0,De.exports.default=De.exports)()}De.exports=Hg,De.exports.__esModule=!0,De.exports.default=De.exports});var zu=i((Wz,Jt)=>{var HL=Oe(),WL=Sa(),KL=$u(),Wu=Gu();function Ku(e,r){function t(a,o,u,c){try{var s=e[a](o),l=s.value;return l instanceof KL?r.resolve(l.v).then(function(f){t("next",f,u,c)},function(f){t("throw",f,u,c)}):r.resolve(l).then(function(f){s.value=f,u(s)},function(f){return t("throw",f,u,c)})}catch(f){c(f)}}var n;this.next||(Wu(Ku.prototype),Wu(Ku.prototype,typeof HL=="function"&&WL||"@asyncIterator",function(){return this})),Wu(this,"_invoke",function(a,o,u){function c(){return new r(function(s,l){t(a,u,s,l)})}return n=n?n.then(c,c):c()},!0)}Jt.exports=Ku,Jt.exports.__esModule=!0,Jt.exports.default=Jt.exports});var Vu=i((Kz,Qt)=>{var zL=ot(),VL=Hu(),YL=zu();function JL(e,r,t,n,a){return new YL(VL().w(e,r,t,n),a||zL)}Qt.exports=JL,Qt.exports.__esModule=!0,Qt.exports.default=Qt.exports});var Wg=i((zz,Xt)=>{var QL=Vu();function XL(e,r,t,n,a){var o=QL(e,r,t,n,a);return o.next().then(function(u){return u.done?u.value:o.next()})}Xt.exports=XL,Xt.exports.__esModule=!0,Xt.exports.default=Xt.exports});var Vg=i((Vz,zg)=>{"use strict";var Kg=Qe(),ZL=TypeError;zg.exports=function(e,r){if(!delete e[r])throw new ZL("Cannot delete property "+Kg(r)+" of "+Kg(e))}});var Yg=i(()=>{"use strict";var e$=q(),r$=re(),t$=pe(),n$=Wr(),a$=Vg(),i$=It(),o$=[].unshift(0)!==1,u$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},s$=o$||!u$();e$({target:"Array",proto:!0,arity:1,forced:s$},{unshift:function(r){var t=r$(this),n=t$(t),a=arguments.length;if(a){i$(n+a);for(var o=n;o--;){var u=o+a;o in t?t[u]=t[o]:a$(t,u)}for(var c=0;c<a;c++)t[c]=arguments[c]}return n$(t,n+a)}})});var Qg=i((Qz,Jg)=>{"use strict";Yg();var c$=se();Jg.exports=c$("Array","unshift")});var Zg=i((Xz,Xg)=>{"use strict";var l$=U(),f$=Qg(),Yu=Array.prototype;Xg.exports=function(e){var r=e.unshift;return e===Yu||l$(Yu,e)&&r===Yu.unshift?f$:r}});var rq=i((Zz,eq)=>{"use strict";var p$=Zg();eq.exports=p$});var nq=i((eV,tq)=>{"use strict";var v$=rq();tq.exports=v$});var iq=i((rV,aq)=>{"use strict";var d$=nq();aq.exports=d$});var uq=i((tV,oq)=>{"use strict";oq.exports=iq()});var sq=i((nV,Zt)=>{var m$=uq();function h$(e){var r=Object(e),t=[];for(var n in r)m$(t).call(t,n);return function a(){for(;t.length;)if((n=t.pop())in r)return a.value=n,a.done=!1,a;return a.done=!0,a}}Zt.exports=h$,Zt.exports.__esModule=!0,Zt.exports.default=Zt.exports});var lq=i((aV,cq)=>{"use strict";xr();_t();yr();Mo();var y$=Vr();cq.exports=y$.f("iterator")});var pq=i((iV,fq)=>{"use strict";var b$=lq();wr();fq.exports=b$});var dq=i((oV,vq)=>{"use strict";var g$=pq();vq.exports=g$});var hq=i((uV,mq)=>{"use strict";var q$=dq();mq.exports=q$});var en=i((sV,yq)=>{"use strict";yq.exports=hq()});var bq=i((cV,Be)=>{var ka=Oe(),x$=en();function Ju(e){"@babel/helpers - typeof";return Be.exports=Ju=typeof ka=="function"&&typeof x$=="symbol"?function(r){return typeof r}:function(r){return r&&typeof ka=="function"&&r.constructor===ka&&r!==ka.prototype?"symbol":typeof r},Be.exports.__esModule=!0,Be.exports.default=Be.exports,Ju(e)}Be.exports=Ju,Be.exports.__esModule=!0,Be.exports.default=Be.exports});var gq=i((lV,rn)=>{var w$=bq().default,S$=Oe(),E$=en();function T$(e){if(e!=null){var r=e[typeof S$=="function"&&E$||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(w$(e)+" is not iterable")}rn.exports=T$,rn.exports.__esModule=!0,rn.exports.default=rn.exports});var wq=i((fV,Ge)=>{var qq=Ea(),C$=Kb(),O$=$u(),k$=Hu(),I$=Wg(),_$=Vu(),P$=zu(),R$=sq(),xq=gq();function Qu(){"use strict";var e=k$(),r=e.m(Qu),t=(qq?qq(r):r.__proto__).constructor;function n(u){var c=typeof u=="function"&&u.constructor;return!!c&&(c===t||(c.displayName||c.name)==="GeneratorFunction")}var a={throw:1,return:2,break:3,continue:3};function o(u){var c,s;return function(l){c||(c={stop:function(){return s(l.a,2)},catch:function(){return l.v},abrupt:function(v,p){return s(l.a,a[v],p)},delegateYield:function(v,p,d){return c.resultName=p,s(l.d,xq(v),d)},finish:function(v){return s(l.f,v)}},s=function(v,p,d){l.p=c.prev,l.n=c.next;try{return v(p,d)}finally{c.next=l.n}}),c.resultName&&(c[c.resultName]=l.v,c.resultName=void 0),c.sent=l.v,c.next=l.n;try{return u.call(this,c)}finally{l.p=c.prev,l.n=c.next}}}return(Ge.exports=Qu=function(){return{wrap:function(s,l,f,v){return e.w(o(s),l,f,v&&C$(v).call(v))},isGeneratorFunction:n,mark:e.m,awrap:function(s,l){return new O$(s,l)},AsyncIterator:P$,async:function(s,l,f,v,p){return(n(l)?_$:I$)(o(s),l,f,v,p)},keys:R$,values:xq}},Ge.exports.__esModule=!0,Ge.exports.default=Ge.exports)()}Ge.exports=Qu,Ge.exports.__esModule=!0,Ge.exports.default=Ge.exports});var le=i((pV,Sq)=>{var Ia=wq()();Sq.exports=Ia;try{regeneratorRuntime=Ia}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=Ia:Function("r","regeneratorRuntime = r")(Ia)}});var Xu=i((Pa,Tq)=>{"use strict";Object.defineProperty(Pa,"__esModule",{value:!0});var _a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Eq=function(){function e(r,t){var n=[],a=!0,o=!1,u=void 0;try{for(var c=r[Symbol.iterator](),s;!(a=(s=c.next()).done)&&(n.push(s.value),!(t&&n.length===t));a=!0);}catch(l){o=!0,u=l}finally{try{!a&&c.return&&c.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Pa.default=A$;function A$(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(a){return a.type==="tag"||a.type==="script"||a.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var a=this.attribs,o=Object.keys(a),u=o.reduce(function(c,s,l){return c[l]={name:s,value:a[s]},c},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var a=[];return ir(this.childTags,function(o){(o.name===n||n==="*")&&a.push(o)}),a}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var a=n.trim().replace(/\s+/g," ").split(" "),o=[];return ir([this],function(u){var c=u.attribs.class;c&&a.every(function(s){return c.indexOf(s)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var a=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=N$(n),u=o.shift(),c=o.length;return u(this).filter(function(s){for(var l=0;l<c;){if(s=o[l](s,a),!s)return!1;l+=1}return!0})}),t.contains||(t.contains=function(n){var a=!1;return ir([this],function(o,u){o===n&&(a=!0,u())}),a}),!0}function N$(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,a=r.split(":"),o=Eq(a,2),u=o[0],c=o[1],s=null,l=null;if(function(){switch(!0){case/>/.test(u):l=function(w){return function(E){return E(w.parent)&&w.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");s=function(w){var E=w.attribs.class;return E&&h.every(function(S){return E.indexOf(S)>-1})},l=function(w,E){return n?w.getElementsByClassName(h.join(" ")):typeof w=="function"?w(s):tn(w,E,s)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),x=Eq(m,2),y=x[0],g=x[1];s=function(w){var E=Object.keys(w.attribs).indexOf(y)>-1;return!!(E&&(!g||w.attribs[y]===g))},l=function(w,E){if(n){var S=function(){var C=[];return ir([w],function(L){s(L)&&C.push(L)}),{v:C}}();if((typeof S>"u"?"undefined":_a(S))==="object")return S.v}return typeof w=="function"?w(s):tn(w,E,s)};break;case/^#/.test(u):var O=u.substr(1);s=function(w){return w.attribs.id===O},l=function(w,E){if(n){var S=function(){var C=[];return ir([w],function(L,Se){s(L)&&(C.push(L),Se())}),{v:C}}();if((typeof S>"u"?"undefined":_a(S))==="object")return S.v}return typeof w=="function"?w(s):tn(w,E,s)};break;case/\*/.test(u):s=function(w){return!0},l=function(w,E){if(n){var S=function(){var C=[];return ir([w],function(L){return C.push(L)}),{v:C}}();if((typeof S>"u"?"undefined":_a(S))==="object")return S.v}return typeof w=="function"?w(s):tn(w,E,s)};break;default:s=function(w){return w.name===u},l=function(w,E){if(n){var S=function(){var C=[];return ir([w],function(L){s(L)&&C.push(L)}),{v:C}}();if((typeof S>"u"?"undefined":_a(S))==="object")return S.v}return typeof w=="function"?w(s):tn(w,E,s)}}}(),!c)return l;var f=c.match(/-(child|type)\((\d+)\)$/),v=f[1],p=parseInt(f[2],10)-1,d=function(m){if(m){var x=m.parent.childTags;v==="type"&&(x=x.filter(s));var y=x.findIndex(function(g){return g===m});if(y===p)return!0}return!1};return function(m){var x=l(m);return n?x.reduce(function(y,g){return d(g)&&y.push(g),y},[]):d(x)&&x}})}function ir(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&ir(t.childTags,r)})}function tn(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}Tq.exports=Pa.default});var Aa=i(Ra=>{"use strict";Object.defineProperty(Ra,"__esModule",{value:!0});Ra.convertNodeList=M$;Ra.escapeValue=j$;function M$(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function j$(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var Mq=i((Na,Nq)=>{"use strict";Object.defineProperty(Na,"__esModule",{value:!0});Na.default=L$;var Iq=Aa(),Cq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function L$(e,r){var t=r.root,n=t===void 0?document:t,a=r.skip,o=a===void 0?null:a,u=r.priority,c=u===void 0?["id","class","href","src"]:u,s=r.ignore,l=s===void 0?{}:s,f=[],v=e,p=f.length,d=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(y){return typeof y!="function"?function(g){return g===y}:y}),m=function(g){return o&&h.some(function(O){return O(g)})};for(Object.keys(l).forEach(function(y){y==="class"&&(d=!0);var g=l[y];typeof g!="function"&&(typeof g=="number"&&(g=g.toString()),typeof g=="string"&&(g=new RegExp((0,Iq.escapeValue)(g).replace(/\\/g,"\\\\"))),typeof g=="boolean"&&(g=g?/(?:)/:/.^/),l[y]=function(O,k){return g.test(k)})}),d&&function(){var y=l.attribute;l.attribute=function(g,O,k){return l.class(O)||y&&y(g,O,k)}}();v!==n;){if(m(v)!==!0){if(Oq(c,v,l,f,n)||kq(v,l,f,n))break;Oq(c,v,l,f),f.length===p&&kq(v,l,f),f.length===p&&$$(c,v,l,f)}v=v.parentNode,p=f.length}if(v===n){var x=Rq(c,v,l);f.unshift(x)}return f.join(" ")}function Oq(e,r,t,n){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=_q(e,r,t);if(o){var u=a.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function _q(e,r,t){for(var n=r.attributes,a=Object.keys(n).sort(function(m,x){var y=e.indexOf(n[m].name),g=e.indexOf(n[x].name);return g===-1?y===-1?0:-1:y-g}),o=0,u=a.length;o<u;o++){var c=a[o],s=n[c],l=s.name,f=(0,Iq.escapeValue)(s.value),v=t[l]||t.attribute,p=Cq[l]||Cq.attribute;if(!Aq(v,l,f,p)){var d="["+l+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(l==="id"&&(d="#"+f),l==="class")){var h=f.trim().replace(/\s+/g,".");d="."+h}return d}}return null}function kq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,a=Pq(e,r);if(a){var o=n.getElementsByTagName(a);if(o.length===1)return t.unshift(a),!0}return!1}function Pq(e,r){var t=e.tagName.toLowerCase();return Aq(r.tag,null,t)?null:t}function $$(e,r,t,n){for(var a=r.parentNode,o=a.childTags||a.children,u=0,c=o.length;u<c;u++){var s=o[u];if(s===r){var l=Rq(e,s,t);if(!l)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,s,t,l);var f="> "+l+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function Rq(e,r,t){var n=_q(e,r,t);return n||(n=Pq(r,t)),n}function Aq(e,r,t,n){if(!t)return!0;var a=e||n;return a?a(r,t,n):!1}Nq.exports=Na.default});var Zu=i((ja,jq)=>{"use strict";Object.defineProperty(ja,"__esModule",{value:!0});ja.default=U$;var F$=Xu(),D$=G$(F$),B$=Aa();function G$(e){return e&&e.__esModule?e:{default:e}}function U$(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,B$.convertNodeList)(r):[r]),!r.length||r.some(function(v){return v.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,D$.default)(r[0],t),a=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(a.length<2)return Ma("",e,"",r);for(var o=[a.pop()];a.length>1;){var u=a.pop(),c=a.join(" "),s=o.join(" "),l=c+" "+s,f=document.querySelectorAll(l);f.length!==r.length&&o.unshift(Ma(c,u,s,r))}return o.unshift(a[0]),a=o,a[0]=Ma("",a[0],a.slice(1).join(" "),r),a[a.length-1]=Ma(a.slice(0,-1).join(" "),a[a.length-1],"",r),n&&delete global.document,a.join(" ").replace(/>/g,"> ").trim()}function Ma(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var a=r.replace(/=.*$/,"]"),o=""+e+a+t,u=document.querySelectorAll(o);if(ut(u,n))r=a;else for(var c=document.querySelectorAll(""+e+a),s=function(){var k=c[l];if(n.some(function(E){return k.contains(E)})){var w=k.tagName.toLowerCase();return o=""+e+w+t,u=document.querySelectorAll(o),ut(u,n)&&(r=w),"break"}},l=0,f=c.length;l<f;l++){var o,u,v=s();if(v==="break")break}}if(/>/.test(r)){var p=r.replace(/>/,""),o=""+e+p+t,u=document.querySelectorAll(o);ut(u,n)&&(r=p)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);ut(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(O){return"."+O}).sort(function(O,k){return O.length-k.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);ut(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var x=document.querySelectorAll(""+e+r),y=function(){var k=x[l];if(n.some(function(E){return k.contains(E)})){var w=k.tagName.toLowerCase();return o=""+e+w+t,u=document.querySelectorAll(o),ut(u,n)&&(r=w),"break"}},l=0,f=x.length;l<f;l++){var o,u,g=y();if(g==="break")break}}return r}function ut(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var a=0;a<t;a++)if(e[a]===n)return!0;return!1})}jq.exports=ja.default});var es=i(La=>{"use strict";Object.defineProperty(La,"__esModule",{value:!0});La.getCommonAncestor=H$;La.getCommonProperties=W$;function H$(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,a=[];e.forEach(function(v,p){for(var d=[];v!==n;)v=v.parentNode,d.unshift(v);a[p]=d}),a.sort(function(v,p){return v.length-p.length});for(var o=a.shift(),u=null,c=function(){var p=o[s],d=a.some(function(h){return!h.some(function(m){return m===p})});if(d)return"break";u=p},s=0,l=o.length;s<l;s++){var f=c();if(f==="break")break}return u}function W$(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,a=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(s){return u.some(function(l){return l===s})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(a!==void 0&&function(){var s=t.attributes,l=Object.keys(s).reduce(function(p,d){var h=s[d],m=h.name;return h&&m!=="class"&&(p[m]=h.value),p},{}),f=Object.keys(l),v=Object.keys(a);f.length?v.length?(a=v.reduce(function(p,d){var h=a[d];return h===l[d]&&(p[d]=h),p},{}),Object.keys(a).length?r.attributes=a:delete r.attributes):r.attributes=l:delete r.attributes}(),o!==void 0){var c=t.tagName.toLowerCase();o?c!==o&&delete r.tag:r.tag=c}}),r}});var Gq=i(nn=>{"use strict";Object.defineProperty(nn,"__esModule",{value:!0});var K$=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};nn.getSingleSelector=ts;nn.getMultiSelector=Bq;nn.default=X$;var z$=Xu(),$q=rs(z$),V$=Mq(),Y$=rs(V$),J$=Zu(),Fq=rs(J$),Lq=Aa(),Dq=es();function rs(e){return e&&e.__esModule?e:{default:e}}function ts(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":K$(e))+'")');var t=(0,$q.default)(e,r),n=(0,Y$.default)(e,r),a=(0,Fq.default)(n,e,r);return t&&delete global.document,a}function Bq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,Lq.convertNodeList)(e)),e.some(function(l){return l.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,$q.default)(e[0],r),n=(0,Dq.getCommonAncestor)(e,r),a=ts(n,r),o=Q$(e),u=o[0],c=(0,Fq.default)(a+" "+u,e,r),s=(0,Lq.convertNodeList)(document.querySelectorAll(c));return e.every(function(l){return s.some(function(f){return f===l})})?(t&&delete global.document,c):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function Q$(e){var r=(0,Dq.getCommonProperties)(e),t=r.classes,n=r.attributes,a=r.tag,o=[];if(a&&o.push(a),t){var u=t.map(function(s){return"."+s}).join("");o.push(u)}if(n){var c=Object.keys(n).reduce(function(s,l){return s.push("["+l+'="'+n[l]+'"]'),s},[]).join("");o.push(c)}return o.length,[o.join("")]}function X$(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?Bq(e,r):ts(e,r)}});var Wq=i(ae=>{"use strict";Object.defineProperty(ae,"__esModule",{value:!0});ae.default=ae.common=ae.optimize=ae.getMultiSelector=ae.getSingleSelector=ae.select=void 0;var ns=Gq();Object.defineProperty(ae,"getSingleSelector",{enumerable:!0,get:function(){return ns.getSingleSelector}});Object.defineProperty(ae,"getMultiSelector",{enumerable:!0,get:function(){return ns.getMultiSelector}});var Uq=Hq(ns),Z$=Zu(),eF=Hq(Z$),rF=es(),tF=nF(rF);function nF(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Hq(e){return e&&e.__esModule?e:{default:e}}ae.select=Uq.default;ae.optimize=eF.default;ae.common=tF;ae.default=Uq.default});var Kq=i(()=>{"use strict";var vF=q(),dF=Ne();vF({target:"Array",stat:!0},{isArray:dF})});var Vq=i((IV,zq)=>{"use strict";Kq();var mF=V();zq.exports=mF.Array.isArray});var Jq=i((_V,Yq)=>{"use strict";var hF=Vq();Yq.exports=hF});var Xq=i((PV,Qq)=>{"use strict";var yF=Jq();Qq.exports=yF});var ex=i((RV,Zq)=>{"use strict";var bF=Xq();Zq.exports=bF});var tx=i((AV,rx)=>{"use strict";rx.exports=ex()});var ix=i(()=>{"use strict";var gF=q(),qF=re(),xF=pe(),wF=Wr(),SF=It(),EF=_(),TF=EF(function(){return[].push.call({length:4294967296},1)!==4294967297}),CF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},OF=TF||!CF();gF({target:"Array",proto:!0,arity:1,forced:OF},{push:function(r){var t=qF(this),n=xF(t),a=arguments.length;SF(n+a);for(var o=0;o<a;o++)t[n]=arguments[o],n++;return wF(t,n),n}})});var ux=i((LV,ox)=>{"use strict";ix();var kF=se();ox.exports=kF("Array","push")});var cx=i(($V,sx)=>{"use strict";var IF=U(),_F=ux(),as=Array.prototype;sx.exports=function(e){var r=e.push;return e===as||IF(as,e)&&r===as.push?_F:r}});var fx=i((FV,lx)=>{"use strict";var PF=cx();lx.exports=PF});var vx=i((DV,px)=>{"use strict";var RF=fx();px.exports=RF});var mx=i((BV,dx)=>{"use strict";var AF=vx();dx.exports=AF});var is=i((GV,hx)=>{"use strict";hx.exports=mx()});var Ox=i(()=>{"use strict";var NF=q(),MF=Rt().map,jF=xt(),LF=jF("map");NF({target:"Array",proto:!0,forced:!LF},{map:function(r){return MF(this,r,arguments.length>1?arguments[1]:void 0)}})});var Ix=i((h9,kx)=>{"use strict";Ox();var $F=se();kx.exports=$F("Array","map")});var Px=i((y9,_x)=>{"use strict";var FF=U(),DF=Ix(),us=Array.prototype;_x.exports=function(e){var r=e.map;return e===us||FF(us,e)&&r===us.map?DF:r}});var Ax=i((b9,Rx)=>{"use strict";var BF=Px();Rx.exports=BF});var Mx=i((g9,Nx)=>{"use strict";var GF=Ax();Nx.exports=GF});var Lx=i((q9,jx)=>{"use strict";var UF=Mx();jx.exports=UF});var Fx=i((x9,$x)=>{"use strict";$x.exports=Lx()});var Bx=i((w9,Dx)=>{Dx.exports=Fx()});var Ux=i((S9,Gx)=>{Gx.exports=ot()});var Vx=i((E9,zx)=>{"use strict";var HF=D(),WF=re(),KF=En(),zF=pe(),Hx=TypeError,Wx="Reduce of empty array with no initial value",Kx=function(e){return function(r,t,n,a){var o=WF(r),u=KF(o),c=zF(o);if(HF(t),c===0&&n<2)throw new Hx(Wx);var s=e?c-1:0,l=e?-1:1;if(n<2)for(;;){if(s in u){a=u[s],s+=l;break}if(s+=l,e?s<0:c<=s)throw new Hx(Wx)}for(;e?s>=0:c>s;s+=l)s in u&&(a=t(a,u[s],s,o));return a}};zx.exports={left:Kx(!1),right:Kx(!0)}});var ss=i((T9,Yx)=>{"use strict";var VF=_();Yx.exports=function(e,r){var t=[][e];return!!t&&VF(function(){t.call(null,r||function(){return 1},1)})}});var Qx=i(()=>{"use strict";var YF=q(),JF=Vx().left,QF=ss(),Jx=$r(),XF=$t(),ZF=!XF&&Jx>79&&Jx<83,eD=ZF||!QF("reduce");YF({target:"Array",proto:!0,forced:eD},{reduce:function(r){var t=arguments.length;return JF(this,r,t,t>1?arguments[1]:void 0)}})});var Zx=i((k9,Xx)=>{"use strict";Qx();var rD=se();Xx.exports=rD("Array","reduce")});var rw=i((I9,ew)=>{"use strict";var tD=U(),nD=Zx(),cs=Array.prototype;ew.exports=function(e){var r=e.reduce;return e===cs||tD(cs,e)&&r===cs.reduce?nD:r}});var nw=i((_9,tw)=>{"use strict";var aD=rw();tw.exports=aD});var iw=i((P9,aw)=>{"use strict";var iD=nw();aw.exports=iD});var uw=i((R9,ow)=>{"use strict";var oD=iw();ow.exports=oD});var cw=i((A9,sw)=>{"use strict";sw.exports=uw()});var fw=i((N9,lw)=>{lw.exports=cw()});var dw=i((M9,vw)=>{"use strict";var uD=Ne(),sD=pe(),cD=It(),lD=Y(),fD=Hr(),pw=function(e,r,t,n,a,o,u,c){for(var s=a,l=0,f=u?lD(u,c):!1,v,p;l<n;)l in t&&(v=f?f(t[l],l,r):t[l],o>0&&uD(v)?(p=sD(v),s=pw(e,r,v,p,s,o-1)-1):(cD(s+1),fD(e,s,v)),s++),l++;return s};vw.exports=pw});var mw=i(()=>{"use strict";var pD=q(),vD=dw(),dD=D(),mD=re(),hD=pe(),yD=Wn();pD({target:"Array",proto:!0},{flatMap:function(r){var t=mD(this),n=hD(t),a;return dD(r),a=yD(t,0),vD(a,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),a}})});var hw=i(()=>{"use strict";var bD=Lo();bD("flatMap")});var bw=i((D9,yw)=>{"use strict";mw();hw();var gD=se();yw.exports=gD("Array","flatMap")});var qw=i((B9,gw)=>{"use strict";var qD=U(),xD=bw(),ls=Array.prototype;gw.exports=function(e){var r=e.flatMap;return e===ls||qD(ls,e)&&r===ls.flatMap?xD:r}});var ww=i((G9,xw)=>{"use strict";var wD=qw();xw.exports=wD});var Ew=i((U9,Sw)=>{"use strict";var SD=ww();Sw.exports=SD});var Cw=i((H9,Tw)=>{"use strict";var ED=Ew();Tw.exports=ED});var kw=i((W9,Ow)=>{"use strict";Ow.exports=Cw()});var _w=i((K9,Iw)=>{Iw.exports=kw()});var Rw=i((z9,Pw)=>{"use strict";uo();var TD=se();Pw.exports=TD("Array","concat")});var Nw=i((V9,Aw)=>{"use strict";var CD=U(),OD=Rw(),fs=Array.prototype;Aw.exports=function(e){var r=e.concat;return e===fs||CD(fs,e)&&r===fs.concat?OD:r}});var jw=i((Y9,Mw)=>{"use strict";var kD=Nw();Mw.exports=kD});var $w=i((J9,Lw)=>{"use strict";var ID=jw();Lw.exports=ID});var Dw=i((Q9,Fw)=>{"use strict";var _D=$w();Fw.exports=_D});var Gw=i((X9,Bw)=>{"use strict";Bw.exports=Dw()});var ps=i((Z9,Uw)=>{Uw.exports=Gw()});var Kw=i(()=>{});var Vw=i((w7,zw)=>{"use strict";Kw();jo();var DD=Vr();zw.exports=DD.f("toPrimitive")});var Jw=i((S7,Yw)=>{"use strict";var BD=Vw();Yw.exports=BD});var Xw=i((E7,Qw)=>{"use strict";var GD=Jw();Qw.exports=GD});var eS=i((T7,Zw)=>{"use strict";var UD=Xw();Zw.exports=UD});var tS=i((C7,rS)=>{"use strict";rS.exports=eS()});var fS=i((z7,lS)=>{"use strict";var WD=$(),KD=Te(),zD=R(),VD=zD("match");lS.exports=function(e){var r;return WD(e)&&((r=e[VD])!==void 0?!!r:KD(e)==="RegExp")}});var vS=i((V7,pS)=>{"use strict";var YD=fS(),JD=TypeError;pS.exports=function(e){if(YD(e))throw new JD("The method doesn't accept regular expressions");return e}});var mS=i((Y7,dS)=>{"use strict";var QD=R(),XD=QD("match");dS.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[XD]=!1,"/./"[e](r)}catch{}}return!1}});var bS=i(()=>{"use strict";var ZD=q(),e3=vt(),r3=mt().f,t3=Pi(),hS=Xe(),n3=vS(),a3=fr(),i3=mS(),o3=Z(),u3=e3("".slice),s3=Math.min,yS=i3("startsWith"),c3=!o3&&!yS&&!!function(){var e=r3(String.prototype,"startsWith");return e&&!e.writable}();ZD({target:"String",proto:!0,forced:!c3&&!yS},{startsWith:function(r){var t=hS(a3(this));n3(r);var n=t3(s3(arguments.length>1?arguments[1]:void 0,t.length)),a=hS(r);return u3(t,n,n+a.length)===a}})});var qS=i((X7,gS)=>{"use strict";bS();var l3=se();gS.exports=l3("String","startsWith")});var wS=i((Z7,xS)=>{"use strict";var f3=U(),p3=qS(),hs=String.prototype;xS.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===hs||f3(hs,e)&&r===hs.startsWith?p3:r}});var ES=i((eY,SS)=>{"use strict";var v3=wS();SS.exports=v3});var CS=i((rY,TS)=>{"use strict";var d3=ES();TS.exports=d3});var kS=i((tY,OS)=>{"use strict";var m3=CS();OS.exports=m3});var _S=i((nY,IS)=>{"use strict";IS.exports=kS()});var RS=i((aY,PS)=>{PS.exports=_S()});var AS=i(()=>{"use strict";var h3=q(),y3=Rt().filter,b3=xt(),g3=b3("filter");h3({target:"Array",proto:!0,forced:!g3},{filter:function(r){return y3(this,r,arguments.length>1?arguments[1]:void 0)}})});var MS=i((uY,NS)=>{"use strict";AS();var q3=se();NS.exports=q3("Array","filter")});var LS=i((sY,jS)=>{"use strict";var x3=U(),w3=MS(),ys=Array.prototype;jS.exports=function(e){var r=e.filter;return e===ys||x3(ys,e)&&r===ys.filter?w3:r}});var FS=i((cY,$S)=>{"use strict";var S3=LS();$S.exports=S3});var BS=i((lY,DS)=>{"use strict";var E3=FS();DS.exports=E3});var US=i((fY,GS)=>{"use strict";var T3=BS();GS.exports=T3});var WS=i((pY,HS)=>{"use strict";HS.exports=US()});var zS=i((vY,KS)=>{KS.exports=WS()});var cE=i(()=>{"use strict";var A3=q(),N3=W(),gs=jr(),M3=Du(),nE=Qo(),j3=X(),aE=$(),L3=er(),oE=_(),qs=N3("Reflect","construct"),$3=Object.prototype,F3=[].push,uE=oE(function(){function e(){}return!(qs(function(){},[],e)instanceof e)}),sE=!oE(function(){qs(function(){})}),iE=uE||sE;A3({target:"Reflect",stat:!0,forced:iE,sham:iE},{construct:function(r,t){nE(r),j3(t);var n=arguments.length<3?r:nE(arguments[2]);if(sE&&!uE)return qs(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var a=[null];return gs(F3,a,t),new(gs(M3,r,a))}var o=n.prototype,u=L3(aE(o)?o:$3),c=gs(r,u,t);return aE(c)?c:u}})});var fE=i((zY,lE)=>{"use strict";cE();var D3=V();lE.exports=D3.Reflect.construct});var vE=i((VY,pE)=>{"use strict";var B3=fE();pE.exports=B3});var mE=i((YY,dE)=>{"use strict";var G3=vE();dE.exports=G3});var yE=i((JY,hE)=>{"use strict";var U3=mE();hE.exports=U3});var Ha=i((QY,bE)=>{"use strict";bE.exports=yE()});var qE=i((XY,gE)=>{gE.exports=Ha()});var IE=i((uJ,kE)=>{"use strict";var H3=_();kE.exports=H3(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var RE=i((sJ,PE)=>{"use strict";var W3=_(),K3=$(),z3=Te(),_E=IE(),Wa=Object.isExtensible,V3=W3(function(){Wa(1)});PE.exports=V3||_E?function(r){return!K3(r)||_E&&z3(r)==="ArrayBuffer"?!1:Wa?Wa(r):!0}:Wa});var NE=i((cJ,AE)=>{"use strict";var Y3=_();AE.exports=!Y3(function(){return Object.isExtensible(Object.preventExtensions({}))})});var Os=i((lJ,LE)=>{"use strict";var J3=q(),Q3=N(),X3=zr(),Z3=$(),Es=K(),e4=te().f,ME=Pt(),r4=so(),Ts=RE(),t4=Dr(),n4=NE(),jE=!1,We=t4("meta"),a4=0,Cs=function(e){e4(e,We,{value:{objectID:"O"+a4++,weakData:{}}})},i4=function(e,r){if(!Z3(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!Es(e,We)){if(!Ts(e))return"F";if(!r)return"E";Cs(e)}return e[We].objectID},o4=function(e,r){if(!Es(e,We)){if(!Ts(e))return!0;if(!r)return!1;Cs(e)}return e[We].weakData},u4=function(e){return n4&&jE&&Ts(e)&&!Es(e,We)&&Cs(e),e},s4=function(){c4.enable=function(){},jE=!0;var e=ME.f,r=Q3([].splice),t={};t[We]=1,e(t).length&&(ME.f=function(n){for(var a=e(n),o=0,u=a.length;o<u;o++)if(a[o]===We){r(a,o,1);break}return a},J3({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:r4.f}))},c4=LE.exports={enable:s4,fastKey:i4,getWeakData:o4,onFreeze:u4};X3[We]=!0});var DE=i((fJ,FE)=>{"use strict";var l4=q(),f4=P(),p4=Os(),v4=_(),d4=Ce(),m4=de(),h4=va(),y4=M(),b4=$(),g4=lr(),q4=Le(),x4=te().f,w4=Rt().forEach,S4=H(),$E=Ze(),E4=$E.set,T4=$E.getterFor;FE.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,a=e.indexOf("Weak")!==-1,o=n?"set":"add",u=f4[e],c=u&&u.prototype,s={},l;if(!S4||!y4(u)||!(a||c.forEach&&!v4(function(){new u().entries().next()})))l=t.getConstructor(r,e,n,o),p4.enable();else{l=r(function(p,d){E4(h4(p,f),{type:e,collection:new u}),g4(d)||m4(d,p[o],{that:p,AS_ENTRIES:n})});var f=l.prototype,v=T4(e);w4(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(p){var d=p==="add"||p==="set";p in c&&!(a&&p==="clear")&&d4(f,p,function(h,m){var x=v(this).collection;if(!d&&a&&!b4(h))return p==="get"?void 0:!1;var y=x[p](h===0?0:h,m);return d?this:y})}),a||x4(f,"size",{configurable:!0,get:function(){return v(this).collection.size}})}return q4(l,e,!1,!0),s[e]=l,l4({global:!0,forced:!0},s),a||t.setStrong(l,e,n),l}});var GE=i((pJ,BE)=>{"use strict";var C4=Me();BE.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:C4(e,n,r[n],t);return e}});var YE=i((vJ,VE)=>{"use strict";var UE=er(),O4=zn(),HE=GE(),k4=Y(),I4=va(),_4=lr(),P4=de(),R4=Bn(),Ka=Gn(),A4=Jo(),ln=H(),WE=Os().fastKey,zE=Ze(),KE=zE.set,ks=zE.getterFor;VE.exports={getConstructor:function(e,r,t,n){var a=e(function(l,f){I4(l,o),KE(l,{type:r,index:UE(null),first:null,last:null,size:0}),ln||(l.size=0),_4(f)||P4(f,l[n],{that:l,AS_ENTRIES:t})}),o=a.prototype,u=ks(r),c=function(l,f,v){var p=u(l),d=s(l,f),h,m;return d?d.value=v:(p.last=d={index:m=WE(f,!0),key:f,value:v,previous:h=p.last,next:null,removed:!1},p.first||(p.first=d),h&&(h.next=d),ln?p.size++:l.size++,m!=="F"&&(p.index[m]=d)),l},s=function(l,f){var v=u(l),p=WE(f),d;if(p!=="F")return v.index[p];for(d=v.first;d;d=d.next)if(d.key===f)return d};return HE(o,{clear:function(){for(var f=this,v=u(f),p=v.first;p;)p.removed=!0,p.previous&&(p.previous=p.previous.next=null),p=p.next;v.first=v.last=null,v.index=UE(null),ln?v.size=0:f.size=0},delete:function(l){var f=this,v=u(f),p=s(f,l);if(p){var d=p.next,h=p.previous;delete v.index[p.index],p.removed=!0,h&&(h.next=d),d&&(d.previous=h),v.first===p&&(v.first=d),v.last===p&&(v.last=h),ln?v.size--:f.size--}return!!p},forEach:function(f){for(var v=u(this),p=k4(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:v.first;)for(p(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!s(this,f)}}),HE(o,t?{get:function(f){var v=s(this,f);return v&&v.value},set:function(f,v){return c(this,f===0?0:f,v)}}:{add:function(f){return c(this,f=f===0?0:f,f)}}),ln&&O4(o,"size",{configurable:!0,get:function(){return u(this).size}}),a},setStrong:function(e,r,t){var n=r+" Iterator",a=ks(r),o=ks(n);R4(e,r,function(u,c){KE(this,{type:n,target:u,state:a(u),kind:c,last:null})},function(){for(var u=o(this),c=u.kind,s=u.last;s&&s.removed;)s=s.previous;return!u.target||!(u.last=s=s?s.next:u.state.first)?(u.target=null,Ka(void 0,!0)):Ka(c==="keys"?s.key:c==="values"?s.value:[s.key,s.value],!1)},t?"entries":"values",!t,!0),A4(r)}}});var JE=i(()=>{"use strict";var N4=DE(),M4=YE();N4("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},M4)});var QE=i(()=>{"use strict";JE()});var ZE=i((bJ,XE)=>{"use strict";XE.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,a){return t[e](n,a)}}});var ie=i((gJ,r0)=>{"use strict";var j4=W(),za=ZE(),e0=j4("Map");r0.exports={Map:e0,set:za("set",2),get:za("get",1),has:za("has",1),remove:za("delete",1),proto:e0.prototype}});var Is=i(()=>{"use strict";var L4=q(),$4=N(),F4=D(),D4=fr(),B4=de(),Va=ie(),t0=Z(),G4=_(),n0=Va.Map,U4=Va.has,H4=Va.get,W4=Va.set,K4=$4([].push),z4=t0||G4(function(){return n0.groupBy("ab",function(e){return e}).get("a").length!==1});L4({target:"Map",stat:!0,forced:t0||z4},{groupBy:function(r,t){D4(r),F4(t);var n=new n0,a=0;return B4(r,function(o){var u=t(o,a++);U4(n,u)?K4(H4(n,u),o):W4(n,u,[o])}),n}})});var J=i((wJ,a0)=>{"use strict";var V4=Qe(),Y4=TypeError;a0.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new Y4(V4(e)+" is not a map")}});var Ps=i(()=>{"use strict";var J4=q(),Q4=J(),_s=ie(),X4=Z(),Z4=_s.get,eB=_s.has,rB=_s.set;J4({target:"Map",proto:!0,real:!0,forced:X4},{getOrInsert:function(r,t){return eB(Q4(this),r)?Z4(this,r):(rB(this,r,t),t)}})});var As=i(()=>{"use strict";var tB=q(),nB=D(),aB=J(),Rs=ie(),iB=Z(),oB=Rs.get,uB=Rs.has,sB=Rs.set;tB({target:"Map",proto:!0,real:!0,forced:iB},{getOrInsertComputed:function(r,t){if(aB(this),nB(t),uB(this,r))return oB(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return sB(this,r,n),n}})});var o0=i((OJ,i0)=>{"use strict";xr();QE();Is();Ps();As();_t();yr();var cB=V();i0.exports=cB.Map});var s0=i((kJ,u0)=>{"use strict";var lB=o0();wr();u0.exports=lB});var Ns=i(()=>{"use strict";Ps()});var Ms=i(()=>{"use strict";As()});var c0=i(()=>{"use strict";Is()});var f0=i((MJ,l0)=>{"use strict";var fB=s0();Ns();Ms();c0();l0.exports=fB});var v0=i((jJ,p0)=>{"use strict";var pB=Y(),vB=X(),dB=re(),mB=de();p0.exports=function(e,r,t){return function(a){var o=dB(a),u=arguments.length,c=u>1?arguments[1]:void 0,s=c!==void 0,l=s?pB(c,u>2?arguments[2]:void 0):void 0,f=new e,v=0;return mB(o,function(p){var d=s?l(p,v++):p;t?r(f,vB(d)[0],d[1]):r(f,d)}),f}}});var m0=i(()=>{"use strict";var hB=q(),d0=ie(),yB=v0();hB({target:"Map",stat:!0,forced:!0},{from:yB(d0.Map,d0.set,!0)})});var y0=i((FJ,h0)=>{"use strict";var bB=X();h0.exports=function(e,r,t){return function(){for(var a=new e,o=arguments.length,u=0;u<o;u++){var c=arguments[u];t?r(a,bB(c)[0],c[1]):r(a,c)}return a}}});var g0=i(()=>{"use strict";var gB=q(),b0=ie(),qB=y0();gB({target:"Map",stat:!0,forced:!0},{of:qB(b0.Map,b0.set,!0)})});var x0=i(()=>{"use strict";var xB=q(),wB=G(),SB=de(),EB=M(),q0=D(),TB=ie().Map;xB({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=EB(this)?this:TB,a=new n;q0(t);var o=q0(a.set);return SB(r,function(u){wB(o,a,t(u),u)}),a}})});var w0=i(()=>{"use strict";var CB=q(),OB=J(),kB=ie().remove;CB({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=OB(this),t=!0,n,a=0,o=arguments.length;a<o;a++)n=kB(r,arguments[a]),t=t&&n;return!!t}})});var E0=i(()=>{"use strict";var IB=q(),_B=J(),js=ie(),PB=js.get,RB=js.has,S0=js.set;IB({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=_B(this),a,o;return RB(n,r)?(a=PB(n,r),"update"in t&&(a=t.update(a,r,n),S0(n,r,a)),a):(o=t.insert(r,n),S0(n,r,o),o)}})});var C0=i((VJ,T0)=>{"use strict";var AB=G();T0.exports=function(e,r,t){for(var n=t?e:e.iterator,a=e.next,o,u;!(o=AB(a,n)).done;)if(u=r(o.value),u!==void 0)return u}});var qe=i((YJ,O0)=>{"use strict";var NB=C0();O0.exports=function(e,r,t){return t?NB(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var k0=i(()=>{"use strict";var MB=q(),jB=Y(),LB=J(),$B=qe();MB({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=LB(this),n=jB(r,arguments.length>1?arguments[1]:void 0);return $B(t,function(a,o){if(!n(a,o,t))return!1},!0)!==!1}})});var _0=i(()=>{"use strict";var FB=q(),DB=Y(),BB=J(),I0=ie(),GB=qe(),UB=I0.Map,HB=I0.set;FB({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=BB(this),n=DB(r,arguments.length>1?arguments[1]:void 0),a=new UB;return GB(t,function(o,u){n(o,u,t)&&HB(a,u,o)}),a}})});var P0=i(()=>{"use strict";var WB=q(),KB=Y(),zB=J(),VB=qe();WB({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=zB(this),n=KB(r,arguments.length>1?arguments[1]:void 0),a=VB(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return a&&a.value}})});var R0=i(()=>{"use strict";var YB=q(),JB=Y(),QB=J(),XB=qe();YB({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=QB(this),n=JB(r,arguments.length>1?arguments[1]:void 0),a=XB(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return a&&a.key}})});var N0=i((aQ,A0)=>{"use strict";A0.exports=function(e,r){return e===r||e!==e&&r!==r}});var M0=i(()=>{"use strict";var ZB=q(),e5=N0(),r5=J(),t5=qe();ZB({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return t5(r5(this),function(t){if(e5(t,r))return!0},!0)===!0}})});var j0=i(()=>{"use strict";var n5=q(),a5=J(),i5=qe();n5({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=i5(a5(this),function(n,a){if(n===r)return{key:a}},!0);return t&&t.key}})});var $0=i(()=>{"use strict";var o5=q(),u5=Y(),s5=J(),L0=ie(),c5=qe(),l5=L0.Map,f5=L0.set;o5({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=s5(this),n=u5(r,arguments.length>1?arguments[1]:void 0),a=new l5;return c5(t,function(o,u){f5(a,n(o,u,t),o)}),a}})});var D0=i(()=>{"use strict";var p5=q(),v5=Y(),d5=J(),F0=ie(),m5=qe(),h5=F0.Map,y5=F0.set;p5({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=d5(this),n=v5(r,arguments.length>1?arguments[1]:void 0),a=new h5;return m5(t,function(o,u){y5(a,u,n(o,u,t))}),a}})});var B0=i(()=>{"use strict";var b5=q(),g5=J(),q5=de(),x5=ie().set;b5({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=g5(this),n=arguments.length,a=0;a<n;)q5(arguments[a++],function(o,u){x5(t,o,u)},{AS_ENTRIES:!0});return t}})});var G0=i(()=>{"use strict";var w5=q(),S5=D(),E5=J(),T5=qe(),C5=TypeError;w5({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=E5(this),n=arguments.length<2,a=n?void 0:arguments[1];if(S5(r),T5(t,function(o,u){n?(n=!1,a=o):a=r(a,o,u,t)}),n)throw new C5("Reduce of empty map with no initial value");return a}})});var U0=i(()=>{"use strict";var O5=q(),k5=Y(),I5=J(),_5=qe();O5({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=I5(this),n=k5(r,arguments.length>1?arguments[1]:void 0);return _5(t,function(a,o){if(n(a,o,t))return!0},!0)===!0}})});var W0=i(()=>{"use strict";var P5=q(),H0=D(),R5=J(),Ls=ie(),A5=TypeError,N5=Ls.get,M5=Ls.has,j5=Ls.set;P5({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=R5(this),a=arguments.length;H0(t);var o=M5(n,r);if(!o&&a<3)throw new A5("Updating absent value");var u=o?N5(n,r):H0(a>2?arguments[2]:void 0)(r,n);return j5(n,r,t(u,r,n)),n}})});var Fs=i((xQ,K0)=>{"use strict";var Ya=G(),$s=D(),Ja=M(),L5=X(),$5=TypeError;K0.exports=function(r,t){var n=L5(this),a=$s(n.get),o=$s(n.has),u=$s(n.set),c=arguments.length>2?arguments[2]:void 0,s;if(!Ja(t)&&!Ja(c))throw new $5("At least one callback required");return Ya(o,n,r)?(s=Ya(a,n,r),Ja(t)&&(s=t(s),Ya(u,n,r,s))):Ja(c)&&(s=c(),Ya(u,n,r,s)),s}});var z0=i(()=>{"use strict";var F5=q(),D5=Fs();F5({target:"Map",proto:!0,real:!0,forced:!0},{upsert:D5})});var V0=i(()=>{"use strict";var B5=q(),G5=Fs();B5({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:G5})});var J0=i((CQ,Y0)=>{"use strict";var U5=f0();m0();g0();x0();w0();E0();k0();_0();P0();R0();M0();Ns();Ms();j0();$0();D0();B0();G0();U0();W0();z0();V0();Y0.exports=U5});var X0=i((OQ,Q0)=>{"use strict";Q0.exports=J0()});var eT=i(()=>{"use strict";var H5=q(),W5=vt(),K5=Bi().indexOf,z5=ss(),Ds=W5([].indexOf),Z0=!!Ds&&1/Ds([1],1,-0)<0,V5=Z0||!z5("indexOf");H5({target:"Array",proto:!0,forced:V5},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return Z0?Ds(this,r,t)||0:K5(this,r,t)}})});var tT=i((_Q,rT)=>{"use strict";eT();var Y5=se();rT.exports=Y5("Array","indexOf")});var aT=i((PQ,nT)=>{"use strict";var J5=U(),Q5=tT(),Bs=Array.prototype;nT.exports=function(e){var r=e.indexOf;return e===Bs||J5(Bs,e)&&r===Bs.indexOf?Q5:r}});var oT=i((RQ,iT)=>{"use strict";var X5=aT();iT.exports=X5});var sT=i((AQ,uT)=>{"use strict";var Z5=oT();uT.exports=Z5});var lT=i((NQ,cT)=>{"use strict";var e6=sT();cT.exports=e6});var pT=i((MQ,fT)=>{"use strict";fT.exports=lT()});var IT=i(()=>{"use strict";var o6=q(),u6=re(),kT=jn(),s6=_(),c6=s6(function(){kT(1)});o6({target:"Object",stat:!0,forced:c6},{keys:function(r){return kT(u6(r))}})});var PT=i((DX,_T)=>{"use strict";IT();var l6=V();_T.exports=l6.Object.keys});var AT=i((BX,RT)=>{"use strict";var f6=PT();RT.exports=f6});var MT=i((GX,NT)=>{"use strict";var p6=AT();NT.exports=p6});var LT=i((UX,jT)=>{"use strict";var v6=MT();jT.exports=v6});var FT=i((HX,$T)=>{"use strict";$T.exports=LT()});var BT=i((WX,DT)=>{DT.exports=FT()});var Vs=i((nZ,UT)=>{var zs={yellow:"#ffd400",red:"#ff6b6b",green:"#51cf66",blue:"#339af0",purple:"#9775fa",pink:"#f06595",orange:"#ff922b",teal:"#20c997"},q6=zs.yellow,x6=Object.keys(zs),w6=/^#[0-9a-fA-F]{6}$/;UT.exports={COLOR_PRESETS:zs,DEFAULT_COLOR:q6,PRESET_NAMES:x6,HEX_COLOR_REGEX:w6}});var Ye="";function lc(e){Ye=e.replace(/\/+$/,"")}async function cr(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function fc(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${Ye}/comments?${t}`);return await cr(n,"Failed to fetch comments"),(await n.json()).data}async function ai({uri:e,document:r,quote:t,prefix:n,suffix:a,body:o,author:u,parent:c,color:s}){let l={quote:t,prefix:n,suffix:a,body:o,author:u,parent:c};s&&(l.color=s),r?l.document=r:l.uri=e;let f=await fetch(`${Ye}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});return await cr(f,"Failed to create comment"),f.json()}async function ii(e,{body:r,color:t}){let n={};r!==void 0&&(n.body=r),t!==void 0&&(n.color=t);let a=await fetch(`${Ye}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});return await cr(a,"Failed to update comment"),a.json()}async function pc(e,r){let t=await fetch(`${Ye}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});return await cr(t,"Failed to update comment status"),t.json()}async function vc(e){let r=await fetch(`${Ye}/comments/${e}`,{method:"DELETE"});await cr(r,"Failed to delete comment")}async function dc(e,r,t){let n=await fetch(`${Ye}/comments/${e}/reactions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({emoji:r,author:t})});return await cr(n,"Failed to add reaction"),n.json()}async function mc(e,r,t){let n=await fetch(`${Ye}/comments/${e}/reactions/${encodeURIComponent(r)}?author=${encodeURIComponent(t)}`,{method:"DELETE"});return await cr(n,"Failed to remove reaction"),n.json()}var oF=b(Kr(),1),uF=b(Hn(),1),sF=b(oa(),1),cF=b(ua(),1),lF=b(sa(),1);var Mu=b(ot(),1);function lb(e,r,t,n,a,o,u){try{var c=e[o](u),s=c.value}catch(l){return void t(l)}c.done?r(s):Mu.default.resolve(s).then(n,a)}function Or(e){return function(){var r=this,t=arguments;return new Mu.default(function(n,a){var o=e.apply(r,t);function u(s){lb(o,n,a,u,c,"next",s)}function c(s){lb(o,n,a,u,c,"throw",s)}u(void 0)})}}function Wt(e,r){this.v=e,this.k=r}function ar(e){return new Wt(e,0)}var ju=b(ot(),1),qb=b(Oe(),1),xb=b(Sa(),1);function Ie(e){return function(){return new Kt(e.apply(this,arguments))}}function Kt(e){var r,t;function n(o,u){try{var c=e[o](u),s=c.value,l=s instanceof Wt;ju.default.resolve(l?s.v:s).then(function(f){if(l){var v=o==="return"?"return":"next";if(!s.k||f.done)return n(v,f);f=e[v](f).value}a(c.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){a("throw",f)}}function a(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new ju.default(function(c,s){var l={key:o,arg:u,resolve:c,reject:s,next:null};t?t=t.next=l:(r=t=l,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Kt.prototype[typeof qb.default=="function"&&xb.default||"@@asyncIterator"]=function(){return this},Kt.prototype.next=function(e){return this._invoke("next",e)},Kt.prototype.throw=function(e){return this._invoke("throw",e)},Kt.prototype.return=function(e){return this._invoke("return",e)};var fF=b(le(),1),pF=b(Wq(),1);function fe(e){var r,t=aF(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function aF(e){return"startContainer"in e}function or(e){if(iF(e))return e;var r=e,t=fe(r).createRange();return t.selectNodeContents(r),t}function iF(e){return"startContainer"in e}var nx=b(tx(),1);function ax(e){if((0,nx.default)(e))return e}var yx=b(Oe(),1),bx=b(Ho(),1),gx=b(is(),1);function qx(e,r){var t=e==null?null:typeof yx.default<"u"&&(0,bx.default)(e)||e["@@iterator"];if(t!=null){var n,a,o,u,c=[],s=!0,l=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;s=!1}else for(;!(s=(n=o.call(t)).done)&&((0,gx.default)(c).call(c,n.value),c.length!==r);s=!0);}catch(f){l=!0,a=f}finally{try{if(!s&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(l)throw a}}return c}}var xx=b(Ni(),1),wx=b(oo(),1);function $a(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function os(e,r){if(e){var t;if(typeof e=="string")return $a(e,r);var n=(0,xx.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,wx.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$a(e,r):void 0}}function Sx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ue(e,r){return ax(e)||qx(e,r)||os(e,r)||Sx()}var Ex=b(Oe(),1),Tx=b(Sa(),1),Cx=b(en(),1),an=b(ot(),1);function st(e){var r,t,n,a=2;for(typeof Ex.default<"u"&&(t=Tx.default,n=Cx.default);a--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Fa(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Fa(e){function r(t){if(Object(t)!==t)return an.default.reject(new TypeError(t+" is not an object."));var n=t.done;return an.default.resolve(t.value).then(function(a){return{value:a,done:n}})}return Fa=function(n){this.s=n,this.n=n.next},Fa.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var a=this.s.return;return a===void 0?an.default.resolve({value:n,done:!0}):r(a.apply(this.s,arguments))},throw:function(n){var a=this.s.return;return a===void 0?an.default.reject(n):r(a.apply(this.s,arguments))}},new Fa(e)}var FD=b(le(),1);var AD=b(le(),1),ND=b(Bx(),1),MD=b(Ux(),1),jD=b(fw(),1),LD=b(_w(),1),$D=b(ps(),1);var Hs=b(le(),1);var R3=b(le(),1);var ds=b(le(),1);function on(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function Hw(e,r){return on(e.startChunk,r.startChunk)&&on(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function kr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var vs=b(Yt(),1);var un=b(Oe(),1),Ww=b(en(),1);function He(e){"@babel/helpers - typeof";return He=typeof un.default=="function"&&typeof Ww.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof un.default=="function"&&r.constructor===un.default&&r!==un.default.prototype?"symbol":typeof r},He(e)}var nS=b(tS(),1);function aS(e,r){if(He(e)!="object"||!e)return e;var t=e[nS.default];if(t!==void 0){var n=t.call(e,r||"default");if(He(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Da(e){var r=aS(e,"string");return He(r)=="symbol"?r:r+""}function iS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,vs.default)(e,Da(n.key),n)}}function sn(e,r,t){return r&&iS(e.prototype,r),t&&iS(e,t),(0,vs.default)(e,"prototype",{writable:!1}),e}var oS=b(Yt(),1);function Ir(e,r,t){return(r=Da(r))in e?(0,oS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var uS=b(Kr(),1);var Ba="Iterator exhausted before seek ended.",cn=function(){function e(r){kr(this,e),this.chunker=r,Ir(this,"currentChunkPosition",0),Ir(this,"offsetInChunk",0),this.seekTo(0)}return sn(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,a)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!on(this.currentChunk,n);){var v=this._readToPreviousChunk(),p=Ue(v,2),d=p[0],h=p[1];if(t&&(u=d+u),h===null)throw new RangeError(Ba)}else for(;!on(this.currentChunk,n);){var c=this._readToNextChunk(),s=Ue(c,2),l=s[0],f=s[1];if(t&&(u+=l),f===null)throw new RangeError(Ba)}var m=this.currentChunkPosition+a;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,uS.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var c=this.currentChunkPosition+this.currentChunk.data.length;if(c<=n){var s=this._readToNextChunk(),l=Ue(s,2),f=l[0],v=l[1];if(t&&(u+=f),v===null){if(this.position===n||o)break;throw new RangeError(Ba)}}else{var p=a?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,p)),this.offsetInChunk=p,a&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=a?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var h=this._readToPreviousChunk(),m=Ue(h,2),x=m[0],y=m[1];if(t&&(u=x+u),y===null){if(o)break;throw new RangeError(Ba)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,a=this.chunker.nextChunk();return a!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,a]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function cS(e,r){return ms.apply(this,arguments)}function ms(){return ms=Or(ds.default.mark(function e(r,t){var n,a,o,u,c,s,l,f,v,p,d,h,m,x,y,g,O,k,w,E,S,C,L=arguments;return ds.default.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:n=L.length>2&&L[2]!==void 0?L[2]:{},a=n.minimalContext,o=a===void 0?!1:a,u=n.minimumQuoteLength,c=u===void 0?0:u,s=n.maxWordLength,l=s===void 0?50:s,f=new cn(t()),v=new cn(t()),f.seekToChunk(r.startChunk,r.startIndex),p=f.readToChunk(r.endChunk,r.endIndex),d="",h="",m=function(){return d.length+p.length+h.length},m()<c&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),x=Math.floor((c-m())/2),d=f.read(-x,!1,!0)+d,m()<c&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),y=c-m(),h=h+f.read(y,!1,!0),m()<c&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),g=c-m(),d=f.read(-g,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=Ga(f,l,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+Ga(f,l,!1));case 11:return O={type:"TextQuoteSelector",exact:p,prefix:d,suffix:h},k=Ua(O)(t()),I.next=16,k.next();case 16:if(w=I.sent,!(!w.done&&Hw(w.value,r))){I.next=21;break}return I.next=20,k.next();case 20:w=I.sent;case 21:if(!w.done){I.next=23;break}return I.abrupt("return",O);case 23:if(E=w.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),v.seekToChunk(E.startChunk,E.startIndex-d.length),S=sS(f,v,!0),S!==void 0&&!o&&(S=Ga(f,l,!0)+S),f.seekToChunk(r.endChunk,r.endIndex+h.length),v.seekToChunk(E.endChunk,E.endIndex+h.length),C=sS(f,v,!1),C!==void 0&&!o&&(C=C+Ga(f,l,!1)),!o){I.next=44;break}if(!(S!==void 0&&(C===void 0||S.length<=C.length))){I.next=37;break}d=S+d,I.next=42;break;case 37:if(C===void 0){I.next=41;break}h=h+C,I.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:I.next=46;break;case 44:S!==void 0&&(d=S+d),C!==void 0&&(h=h+C);case 46:I.next=11;break;case 48:case"end":return I.stop()}},e)})),ms.apply(this,arguments)}function sS(e,r,t){for(var n="";;){var a=void 0;try{a=e.read(t?-1:1)}catch{return}n=t?a+n:n+a;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(a!==o)return n}}function Ga(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var a=void 0;try{a=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(HD(a)){e.seekBy(t?1:-1);break}n=t?a+n:n+a}return n}function HD(e){return/^\s+$/.test(e)}var JS=b(Kr(),1),QS=b(Hn(),1),XS=b(oa(),1),ZS=b(ua(),1),eE=b(sa(),1);var bs=b(le(),1),rE=b(RS(),1),tE=b(zS(),1);function VS(e,r){var t;if(typeof XS.default>"u"||(0,ZS.default)(e)==null){if(Array.isArray(e)||(t=C3(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,c;return{s:function(){t=(0,eE.default)(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){u=!0,c=l},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw c}}}}function C3(e,r){var t;if(e){if(typeof e=="string")return YS(e,r);var n=(0,JS.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,QS.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return YS(e,r)}}function YS(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Ua(e){return function(){var r=Ie(bs.default.mark(function n(a){var o,u,c,s,l,f,v,p,d,h,m,x,y,g,O,k,w,E,S,C,L,Se,I,ee,Ee,Q,F;return bs.default.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:o=e.exact,u=e.prefix||"",c=e.suffix||"",s=u+o+c,l=[],f=!0;case 6:v=a.currentChunk,p=v.data,d=[],h=VS(l),T.prev=10,h.s();case 12:if((m=h.n()).done){T.next=27;break}if(x=m.value,y=x.charactersMatched,x.endChunk===void 0&&(g=u.length+o.length-y,g<=p.length&&(x.endChunk=v,x.endIndex=g)),x.startChunk===void 0&&(O=u.length-y,(O<p.length||x.endChunk!==void 0)&&(x.startChunk=v,x.startIndex=O)),k=s.length-y,!(k<=p.length)){T.next=24;break}if(!(0,rE.default)(p).call(p,s.substring(y))){T.next=22;break}return T.next=22,x;case 22:T.next=25;break;case 24:p===s.substring(y,y+p.length)&&(x.charactersMatched+=p.length,d.push(x));case 25:T.next=12;break;case 27:T.next=32;break;case 29:T.prev=29,T.t0=T.catch(10),h.e(T.t0);case 32:return T.prev=32,h.f(),T.finish(32);case 35:if(l=d,!(s.length<=p.length)){T.next=49;break}w=0;case 38:if(!(w<=p.length)){T.next=49;break}if(E=p.indexOf(s,w),E!==-1){T.next=42;break}return T.abrupt("break",49);case 42:if(w=E+1,!(E===0&&s.length===0&&!f)){T.next=45;break}return T.abrupt("continue",38);case 45:return T.next=47,{startChunk:v,startIndex:E+u.length,endChunk:v,endIndex:E+u.length+o.length};case 47:T.next=38;break;case 49:for(S=[],C=Math.max(p.length-s.length+1,0),L=function(Ve){var sc=p[Ve];S=(0,tE.default)(S).call(S,function(bC){return sc===s[Ve-bC]}),sc===s[0]&&S.push(Ve)},Se=C;Se<p.length;Se++)L(Se);I=VS(S);try{for(I.s();!(ee=I.n()).done;)Ee=ee.value,Q=p.length-Ee,F={charactersMatched:Q},Q>=u.length+o.length&&(F.endChunk=v,F.endIndex=Ee+u.length+o.length),(Q>u.length||F.endChunk!==void 0)&&(F.startChunk=v,F.startIndex=Ee+u.length),l.push(F)}catch(Nr){I.e(Nr)}finally{I.f()}f=!1;case 56:if(a.nextChunk()!==null){T.next=6;break}case 57:case"end":return T.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var _3=b(le(),1);var O3=b(Kr(),1),k3=b(ps(),1);var P3=b(le(),1);var pn=b(qE(),1);var wE=b(Ta(),1),SE=b(Yt(),1);var xs=b(Ca(),1),xE=b(Vt(),1);function ur(e,r){var t;return ur=xs.default?(0,xE.default)(t=xs.default).call(t):function(n,a){return n.__proto__=a,n},ur(e,r)}function ws(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,wE.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,SE.default)(e,"prototype",{writable:!1}),r&&ur(e,r)}function EE(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function TE(e,r){if(r&&(He(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return EE(e)}var CE=b(Ca(),1),OE=b(Vt(),1),Ss=b(Ea(),1);function _r(e){var r;return _r=CE.default?(0,OE.default)(r=Ss.default).call(r):function(t){return t.__proto__||(0,Ss.default)(t)},_r(e)}var Us=b(X0(),1),qT=b(Ta(),1);var vT=b(pT(),1);function dT(e){try{var r;return(0,vT.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var hT=b(Ha(),1),yT=b(is(),1),bT=b(Vt(),1);var mT=b(Ha(),1);function Gs(){try{var e=!Boolean.prototype.valueOf.call((0,mT.default)(Boolean,[],function(){}))}catch{}return(Gs=function(){return!!e})()}function gT(e,r,t){if(Gs())return hT.default.apply(null,arguments);var n=[null];(0,yT.default)(n).apply(n,r);var a=new((0,bT.default)(e).apply(e,n));return t&&ur(a,t.prototype),a}function fn(e){var r=typeof Us.default=="function"?new Us.default:void 0;return fn=function(n){if(n===null||!dT(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,a)}function a(){return gT(n,arguments,_r(this).constructor)}return a.prototype=(0,qT.default)(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),ur(a,n)},fn(e)}function ST(e,r){var t=fe(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),a=xT(e.startContainer,e.startOffset),o=Ue(a,2),u=o[0],c=o[1];for(n.currentNode=u;c===u.length&&n.nextNode();)u=n.currentNode,c=0;e.setStart(u,c);var s=xT(e.endContainer,e.endOffset),l=Ue(s,2),f=l[0],v=l[1];for(n.currentNode=f;v===0&&n.previousNode();)f=n.currentNode,v=f.length;return e.setEnd(f,v),e}function xT(e,r){var t;if(wT(e))return[e,r];var n;if(r6(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(wT(n))return[n,0];var a=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=a.createTreeWalker(a,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function wT(e){return e.nodeType===Node.TEXT_NODE}function r6(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function TT(e){var r=t6();return function(){var n=_r(e),a;if(r){var o=_r(this).constructor;a=(0,pn.default)(n,arguments,o)}else a=n.apply(this,arguments);return TE(this,a)}}function t6(){if(typeof Reflect>"u"||!pn.default||pn.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,pn.default)(Boolean,[],function(){})),!0}catch{return!1}}var Qa=function(e){ws(t,e);var r=TT(t);function t(n){return kr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(fn(TypeError)),n6=function(e){ws(t,e);var r=TT(t);function t(n){return kr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(fn(TypeError)),Pr=function(){function e(r){var t=this;if(kr(this,e),Ir(this,"scope",void 0),Ir(this,"iter",void 0),this.scope=or(r),this.iter=fe(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!ET(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Qa}}return sn(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!ET(t))throw new Qa;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new n6;var n=t===this.scope.startContainer?this.scope.startOffset:0,a=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:a,data:t.data.substring(n,a),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=ST(t,this.scope),a=this.nodeToChunk(n.startContainer),o=n.startOffset-a.startOffset,u=this.nodeToChunk(n.endContainer),c=n.endOffset-u.startOffset;return{startChunk:a,startIndex:o,endChunk:u,endIndex:c}}},{key:"chunkRangeToRange",value:function(t){var n=fe(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function ET(e){return e.nodeType===Node.TEXT_NODE}function CT(e,r){return Ws.apply(this,arguments)}function Ws(){return Ws=Or(Hs.default.mark(function e(r,t){var n,a,o,u=arguments;return Hs.default.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},a=or(t??fe(r)),o=new Pr(a),s.next=5,cS(o.rangeToChunkRange(r),function(){return new Pr(a)},n);case 5:return s.abrupt("return",s.sent);case 6:case"end":return s.stop()}},e)})),Ws.apply(this,arguments)}var Ks=b(le(),1);function OT(e){var r=Ua(e);return function(){var t=Ie(Ks.default.mark(function a(o){var u,c,s,l,f,v,p,d;return Ks.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new Pr(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof Qa)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:c=!0,s=!1,m.prev=13,f=st(r(u));case 15:return m.next=17,ar(f.next());case 17:return v=m.sent,c=v.done,m.next=21,ar(v.value);case 21:if(p=m.sent,c){m.next=29;break}return d=p,m.next=26,u.chunkRangeToRange(d);case 26:c=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),s=!0,l=m.t1;case 35:if(m.prev=35,m.prev=36,!(!c&&f.return!=null)){m.next=40;break}return m.next=40,ar(f.return());case 40:if(m.prev=40,!s){m.next=43;break}throw l;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},a,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(a){return t.apply(this,arguments)}return n}()}var a6=b(le(),1);var i6=b(le(),1);var d6=b(BT(),1),m6=b(Kr(),1),h6=b(Hn(),1),y6=b(oa(),1),b6=b(ua(),1),g6=b(sa(),1);async function GT(e,r){let t=await CT(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function vn(e,r){let t=OT({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var me=b(Vs()),dn=b(Vs());function ct(e){if(!e||typeof e!="string")return null;let r=e.trim().toLowerCase();return dn.COLOR_PRESETS[r]?dn.COLOR_PRESETS[r]:dn.HEX_COLOR_REGEX.test(r)?r:null}function Xa(e,r){let t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16);return`rgba(${t}, ${n}, ${a}, ${r})`}var lt="fb-highlight",HT="fb-highlight-active";var Za=new Map,mn=null;function KT(e){mn=e}function hn(e,r,t){let n=ct(t)||me.DEFAULT_COLOR;Za.set(r,n);let a=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let o=WT(e,r,n);a.push(o)}else{let o=E6(e);for(let u=0;u<o.length;u++){let c=o[u],s=document.createRange();c===e.startContainer?(s.setStart(c,e.startOffset),s.setEnd(c,c.textContent.length)):c===e.endContainer?(s.setStart(c,0),s.setEnd(c,e.endOffset)):s.selectNodeContents(c),s.collapsed||a.push(WT(s,r,n))}}return a}function WT(e,r,t){let n=e.commonAncestorContainer;for(;n&&n.nodeType!==Node.ELEMENT_NODE;)n=n.parentNode;let a=n,o=!1,u=null;for(;a;){if(a.tagName==="foreignObject"){o=!1;break}a.tagName==="text"&&a instanceof SVGElement&&(o=!0),a.tagName==="svg"&&(u=a),a=a.parentElement}if(o&&u)return S6(e,r,u,t);let c=document.createElement("mark");c.className=lt,c.dataset.commentId=r,c.style.backgroundColor=Xa(t,.35),c.style.cursor="pointer",c.style.borderRadius="2px",c.addEventListener("click",()=>{mn&&mn(r)});try{e.surroundContents(c)}catch(s){return console.warn("[feedback-layer] Failed to create highlight:",s),null}return c}function S6(e,r,t,n){try{let a=e.getClientRects();if(a.length===0)return null;let o="http://www.w3.org/2000/svg",u=t.getScreenCTM();if(!u)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let c=e.commonAncestorContainer;for(;c&&c.nodeType!==Node.ELEMENT_NODE;)c=c.parentNode;let s=c,l=null;for(;s&&s!==t;){if(s.tagName==="text"){l=s.parentElement;break}s=s.parentElement}let f=l||t,v=u;f!==t&&f.getScreenCTM&&(v=f.getScreenCTM());let p=document.createElementNS(o,"g");p.setAttribute("class",lt),p.setAttribute("data-comment-id",r),p.style.cursor="pointer";for(let y=0;y<a.length;y++){let g=a[y],O=document.createElementNS(o,"rect"),k=t.createSVGPoint();k.x=g.left,k.y=g.top;let w=k.matrixTransform(v.inverse()),E=g.width/v.a,S=g.height/v.d;O.setAttribute("x",w.x),O.setAttribute("y",w.y),O.setAttribute("width",E),O.setAttribute("height",S),O.setAttribute("fill",n),O.setAttribute("fill-opacity","0.35"),O.setAttribute("rx","2"),O.setAttribute("ry","2"),O.style.pointerEvents="none",p.appendChild(O)}f&&f!==t?f.appendChild(p):t.appendChild(p);let d=e.commonAncestorContainer;for(;d&&d.nodeType!==Node.ELEMENT_NODE;)d=d.parentNode;let h=new Set,m=d;for(;m&&m!==t;)m.tagName==="text"&&m instanceof SVGElement&&(h.add(m),m.querySelectorAll("tspan").forEach(g=>h.add(g))),m=m.parentElement;let x=y=>{y.preventDefault(),y.stopPropagation(),mn&&mn(r)};return h.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",x),y.dataset.fbCommentId=r}),p}catch(a){return console.warn("[feedback-layer] Failed to create SVG highlight:",a),null}}function ei(e){Za.delete(e),document.querySelectorAll(`.${lt}[data-comment-id="${e}"]`).forEach(n=>{let a=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)a.removeChild(n);else{for(;n.firstChild;)a.insertBefore(n.firstChild,n);a.removeChild(n),a.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function zT(){Za.clear(),document.querySelectorAll(`.${lt}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function yn(e){document.querySelectorAll(`.${lt}`).forEach(r=>{let t=r.dataset.commentId,n=t===e,a=Za.get(t)||me.DEFAULT_COLOR,o=Xa(a,.55),u=Xa(a,.35);n?r.classList.add(HT):r.classList.remove(HT),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(s=>{s.setAttribute("fill",a),s.setAttribute("fill-opacity",n?"0.55":"0.35")}):r.style.backgroundColor=n?o:u})}function Ys(e){let r=document.querySelector(`.${lt}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function E6(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let a=document.createRange();return a.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,a)<0&&e.compareBoundaryPoints(Range.START_TO_END,a)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function VT(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,a)=>{let o=[`**${a+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let c of u)o.push(`  - **[${c.author}]** (reply): ${c.body}`);return o.join(`
`)}).join(`

`)}function YT(e,r){let t=VT(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(a=>!a.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function sr(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var T6=`
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
`,JT=null,QT=null;function XT(e,r){QT=e,JT=r,C6()}function C6(){let e=document.createElement("style");e.textContent=T6,document.head.appendChild(e)}function ZT(){let e=JT(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let a=document.createElement("button");a.className="hf-modal-close",a.textContent="\xD7",a.addEventListener("click",()=>r.remove()),n.appendChild(a);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",v=>{v.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let c=document.querySelector(QT.contentSelector||"body").innerHTML,s=YT(c,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${s.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${sr(s)}</textarea>
  `;let l=document.createElement("button");l.className="hf-btn hf-btn-primary",l.textContent="Copy Prompt",l.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(s),l.textContent="Copied!"}catch{l.textContent="Copy failed"}setTimeout(()=>l.textContent="Copy Prompt",2e3)}),u.appendChild(l);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function eC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function rC(e,r){return e.length>r?e.slice(0,r)+"...":e}function tC(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var bn=null;function aC(e){bn=document.createElement("div"),bn.className="fb-toast-container",e.appendChild(bn)}function Ke(e,r="success"){if(!bn)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>nC(t)),t.appendChild(o)}bn.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>nC(t),r==="error"?8e3:4e3)}function nC(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}function iC(e,r){return r<=0?0:(e%r+r)%r}var O6=320,sC="feedback-layer-commenter",B=null,oe=null,xe=null,Js=null,cC=null,Qs=null,Xs=null,Zs=null,ec=null,xn=null,rc=null,nc=null,tc=!1,lC=[],fC=new Set,Pe=-1,gn=null,oC=!1;function k6(){oC||(oC=!0,$6())}function ze(){return localStorage.getItem(sC)||""}function pC({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:a,onReaction:o,onColorChange:u,defaultColor:c}){cC=e,Qs=r,Xs=t,Zs=n,ec=a,xn=o,rc=u,nc=c||null,k6(),B=document.createElement("div"),B.className="fb-sidebar fb-sidebar-collapsed",B.setAttribute("role","complementary"),B.setAttribute("aria-label","Feedback sidebar"),B.innerHTML=`
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
               value="${sr(ze())}">
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
  `;let s=document.createElement("button");s.className="fb-sidebar-tab",s.textContent="Feedback",s.addEventListener("click",()=>ft()),document.body.appendChild(s),document.body.appendChild(B),aC(B),oe=B.querySelector(".fb-comment-list"),oe.setAttribute("role","list"),xe=B.querySelector(".fb-form-section");let l=B.querySelector(".fb-name-input");l.addEventListener("input",()=>{localStorage.setItem(sC,l.value.trim())}),B.querySelector(".fb-ai-btn").addEventListener("click",()=>ZT()),B.querySelector(".fb-shortcuts-btn").addEventListener("click",()=>dC()),B.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>ac());let d=B.querySelector(".fb-show-resolved-cb");d.addEventListener("change",()=>{tc=d.checked,Re(lC,fC)}),document.addEventListener("keydown",_6)}function ft(){B.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden"),R6(),oe?.querySelector(".fb-thread .fb-cmt-card")&&ri(0)}function ac(){B.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden"),mC(),Pe=-1,document.body.focus()}function vC(){let e=document.activeElement;if(!e)return!1;let r=e.tagName;return r==="TEXTAREA"||r==="INPUT"||r==="SELECT"||e.isContentEditable}function qn(){return oe?Array.from(oe.querySelectorAll(".fb-thread > .fb-cmt-card:first-child")):[]}function ri(e){let r=qn();if(r.length===0)return;e=iC(e,r.length),Pe=e,oe.querySelectorAll(".fb-cmt-card").forEach(a=>a.classList.remove("fb-cmt-active"));let t=r[e];t.classList.add("fb-cmt-active"),t.scrollIntoView({behavior:"smooth",block:"nearest"});let n=t.closest(".fb-thread");n?.dataset.commentId&&(yn(n.dataset.commentId),Ys(n.dataset.commentId))}function I6(e){if(B.classList.contains("fb-sidebar-collapsed"))return;let r=e.key;if(r==="Escape"){e.preventDefault(),ac();return}if(!vC()){if(r==="Enter"){let t=qn();if(Pe>=0&&Pe<t.length){e.preventDefault();let a=t[Pe].closest(".fb-thread")?.querySelector(".fb-reply-btn");a&&a.click()}return}if(r==="j"){if(e.preventDefault(),qn().length===0)return;let n=Pe<0?0:Pe+1;ri(n);return}if(r==="k"){e.preventDefault();let t=qn();if(t.length===0)return;let n=Pe<0?t.length-1:Pe-1;ri(n);return}if(r==="?"){e.preventDefault(),dC();return}}}function dC(){let e=document.querySelector(".fb-shortcuts-overlay");if(e){e.remove();return}let r=document.createElement("div");r.className="fb-shortcuts-overlay";let t=document.createElement("div");t.className="fb-shortcuts-modal",t.innerHTML=`
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
  `;let n=()=>r.remove();t.querySelector(".fb-shortcuts-close").addEventListener("click",n),r.addEventListener("click",a=>{a.target===r&&n()}),r.addEventListener("keydown",a=>{a.key==="Escape"&&(a.stopPropagation(),n())}),r.appendChild(t),document.body.appendChild(r),t.querySelector(".fb-shortcuts-close").focus()}function _6(e){vC()||e.key==="s"&&(e.preventDefault(),P6())}function P6(){B.classList.contains("fb-sidebar-collapsed")?ft():ac()}function R6(){mC(),gn=I6,document.addEventListener("keydown",gn)}function mC(){gn&&(document.removeEventListener("keydown",gn),gn=null)}function hC(e){if(ft(),!ze()){let u=B.querySelector(".fb-name-input");u.classList.add("fb-name-input-error"),setTimeout(()=>u.classList.remove("fb-name-input-error"),2e3)}Js=e,xe.style.display="";let r=Object.entries(me.COLOR_PRESETS),t=nc||me.DEFAULT_COLOR;xe.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${sr(rC(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-color-picker">
        <label class="fb-color-label">Color</label>
        <div class="fb-color-swatches">
          ${r.map(([u,c])=>`<button type="button" class="fb-color-swatch${c===t?" fb-color-swatch-active":""}" data-color="${c}" title="${u}" style="background:${c};"></button>`).join("")}
        </div>
      </div>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `;let n=t;xe.querySelectorAll(".fb-color-swatch").forEach(u=>{u.addEventListener("click",c=>{c.preventDefault(),xe.querySelectorAll(".fb-color-swatch").forEach(s=>s.classList.remove("fb-color-swatch-active")),u.classList.add("fb-color-swatch-active"),n=u.dataset.color})});let a=xe.querySelector(".fb-form-textarea");a.focus();let o=()=>{if(!ze()){let c=B.querySelector(".fb-name-input");c.focus(),c.style.outline="2px solid var(--remarq-danger)",setTimeout(()=>c.style.outline="",2e3);return}let u=a.value.trim();u&&(cC({comment:u,commenter:ze(),color:n}),xe.style.display="none",Js=null)};xe.querySelector(".fb-submit-btn").addEventListener("click",o),a.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),xe.querySelector(".fb-cancel-btn").addEventListener("click",()=>{xe.style.display="none",Js=null}),xe.scrollIntoView({behavior:"smooth",block:"nearest"})}function Re(e,r=new Set,t=new Map){lC=e,fC=r,Pe=-1,oe.innerHTML="";let{topLevel:n,repliesByParent:a}=eC(e),o=n.slice().sort((l,f)=>{let v=t.get(l.id),p=t.get(f.id);return!v||!p?0:v.compareBoundaryPoints(Range.START_TO_START,p)}),u=o.filter(l=>{let f=r.has(l.id),v=l.status==="closed";return f||v&&tc}),c=tc?u:u.filter(l=>l.status!=="closed");if(o.length===0){oe.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let s=o.filter(l=>!r.has(l.id)&&l.status!=="closed").length;if(c.length===0){s>0?oe.innerHTML=`<div class="fb-empty">
        ${u.length} comment(s) resolved.
        ${s>0?`<br>${s} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:oe.innerHTML=`<div class="fb-empty">All ${o.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let l of c){let f=document.createElement("div");f.className="fb-thread",f.setAttribute("role","listitem"),f.setAttribute("tabindex","0"),f.dataset.commentId=l.id,f.appendChild(uC(l,!1));let v=a.get(l.id)||[];for(let d of v)f.appendChild(uC(d,!0));let p=document.createElement("button");p.className="fb-reply-btn",p.textContent="Reply",p.addEventListener("click",d=>{d.stopPropagation(),j6(l.id,f,p)}),f.appendChild(p),f.addEventListener("focus",()=>{let h=qn().indexOf(f.querySelector(".fb-cmt-card"));h>=0&&ri(h)}),oe.appendChild(f)}}function uC(e,r){let t=e.status==="closed",n=document.createElement("div");n.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":""),n.dataset.id=e.id,n.innerHTML=`
    <div class="fb-cmt-body">${sr(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${sr(e.author)}</span>
      <span class="fb-cmt-time">${tC(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
    <div class="fb-reactions"></div>
  `;let a=n.querySelector(".fb-reactions");if(N6(a,e),!r){let o=ct(e.color)||nc||me.DEFAULT_COLOR,u=document.createElement("div");u.className="fb-card-color-swatches";for(let[c,s]of Object.entries(me.COLOR_PRESETS)){let l=document.createElement("button");l.type="button",l.className="fb-card-color-swatch"+(s===o?" fb-card-color-swatch-active":""),l.dataset.color=s,l.title=c,l.style.background=s,l.addEventListener("click",f=>{f.stopPropagation(),s!==o&&rc&&rc(e.id,s)}),u.appendChild(l)}n.appendChild(u)}return r||(n.addEventListener("click",o=>{o.target.closest(".fb-cmt-delete")||o.target.closest(".fb-cmt-resolve")||o.target.closest(".fb-cmt-edit")||o.target.closest(".fb-reactions")||o.target.closest(".fb-card-color-swatches")||(yn(e.id),Ys(e.id),oe.querySelectorAll(".fb-cmt-card").forEach(u=>u.classList.remove("fb-cmt-active")),n.classList.add("fb-cmt-active"))}),n.querySelector(".fb-cmt-resolve").addEventListener("click",o=>{o.stopPropagation(),Xs&&Xs(e.id,!t)})),n.querySelector(".fb-cmt-edit").addEventListener("click",o=>{o.stopPropagation(),L6(e,n)}),n.querySelector(".fb-cmt-delete").addEventListener("click",o=>{o.stopPropagation(),Qs&&Qs(e.id)}),n}var ic={"\u{1F44D}":"Like","\u2764\uFE0F":"Love","\u{1F440}":"Seen","\u{1F389}":"Celebrate","\u{1F914}":"Question","\u{1F602}":"Funny"},A6=Object.keys(ic);function N6(e,r){let t=r.reactions||[],n=ze();for(let o of t){let u=document.createElement("button");u.className="fb-reaction-badge",n&&o.authors.includes(n)&&u.classList.add("fb-reaction-mine");let s=ic[o.emoji];u.innerHTML=`${o.emoji}<span class="fb-reaction-count">${o.count}</span>`,u.title=(s?s+": ":"")+o.authors.join(", "),u.addEventListener("click",l=>{l.stopPropagation(),xn&&xn(r.id,o.emoji)}),e.appendChild(u)}let a=document.createElement("button");a.className="fb-reaction-add",a.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><circle cx="9" cy="10" r="0.5" fill="currentColor"/><circle cx="15" cy="10" r="0.5" fill="currentColor"/></svg>',a.title="Add reaction",a.addEventListener("click",o=>{o.stopPropagation(),M6(e,r,a)}),e.appendChild(a)}function M6(e,r,t){let n=e.querySelector(".fb-emoji-picker");if(n){n.remove();return}let a=document.createElement("div");a.className="fb-emoji-picker";for(let u of A6){let c=ic[u],s=document.createElement("button");s.className="fb-emoji-option",s.textContent=u,s.title=c,s.addEventListener("click",l=>{l.stopPropagation(),a.remove(),xn&&xn(r.id,u)}),a.appendChild(s)}e.insertBefore(a,t.nextSibling);let o=u=>{!a.contains(u.target)&&u.target!==t&&(a.remove(),document.removeEventListener("click",o,!0))};setTimeout(()=>document.addEventListener("click",o,!0),0)}function j6(e,r,t){ft();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let a=document.createElement("div");a.className="fb-reply-form",a.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!ze()){let s=B.querySelector(".fb-name-input");s.focus(),s.style.outline="2px solid var(--remarq-danger)",setTimeout(()=>s.style.outline="",2e3);return}let c=a.querySelector("textarea").value.trim();c&&(Zs&&Zs({parent_id:e,comment:c,commenter:ze()}),a.remove(),t.style.display="")};a.querySelector(".fb-reply-submit").addEventListener("click",o);let u=a.querySelector("textarea");u.addEventListener("keydown",c=>{c.key==="Enter"&&(c.metaKey||c.ctrlKey)&&(c.preventDefault(),o())}),a.querySelector(".fb-reply-cancel").addEventListener("click",()=>{a.remove(),t.style.display=""}),r.insertBefore(a,t),u.focus()}function L6(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${sr(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let a=t.querySelector("textarea");a.focus(),a.setSelectionRange(a.value.length,a.value.length);let o=()=>{let u=a.value.trim();u&&ec&&ec(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),a.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function yC(e){let r=oe.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(oe.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function $6(){let e=document.createElement("style");e.textContent=`
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

    /* Card-level color swatches (change existing comment color) */
    .fb-card-color-swatches {
      display: flex;
      gap: 4px;
      margin-top: 6px;
    }
    .fb-card-color-swatch {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 2px solid transparent;
      cursor: pointer;
      padding: 0;
      transition: border-color 0.15s, transform 0.1s;
    }
    .fb-card-color-swatch:hover {
      transform: scale(1.2);
    }
    .fb-card-color-swatch-active {
      border-color: var(--remarq-text);
      box-shadow: 0 0 0 1px var(--remarq-shadow);
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
  `,document.head.appendChild(e)}var Ar=null,ti=null,ni=null,uc=null,A=[],Rr=null,we=null,ue=new Set,he=new Map;function F6(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null,theme:e?.dataset.theme||"auto",defaultColor:e?.dataset.defaultColor||null};lc(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{Ar=document.querySelector(r.contentSelector)||document.body,ti=r.documentUri||window.location.origin+window.location.pathname,ni=r.documentId||null,uc=ct(r.defaultColor)||null,document.documentElement.dataset.remarqTheme=r.theme,pC({onSubmit:H6,onDelete:J6,onResolve:W6,onReply:K6,onEdit:z6,onReaction:Y6,onColorChange:V6,defaultColor:uc}),KT(a=>{ft(),yC(a),yn(a)}),G6(),await t(),D6(),XT(r,()=>A)}catch(a){console.error("[feedback-layer] Boot failed:",a)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function D6(){try{A=await fc(ti,ni),ue=await B6(A),Re(A,ue,he)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),Ke(`Failed to load comments: ${e.message}`,"error")}}async function B6(e){zT();let r=new Set;he.clear();for(let t of e)if(!t.parent)try{let n=await vn({exact:t.quote,prefix:t.prefix,suffix:t.suffix},Ar);n&&t.status!=="closed"?(hn(n,t.id,t.color),r.add(t.id),he.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),he.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function G6(){document.addEventListener("mouseup",oc),document.addEventListener("keyup",oc),document.addEventListener("touchend",oc)}function oc(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){wn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){wn();return}if(!Ar.contains(r.commonAncestorContainer)){wn();return}U6(r)},10)}function U6(e){wn();let r=e.getBoundingClientRect();we=document.createElement("button"),we.className="fb-annotate-tooltip",we.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',we.style.top=window.scrollY+r.bottom+8+"px",we.style.left=window.scrollX+r.left+r.width/2-40+"px";let t=async n=>{n.preventDefault(),n.stopPropagation();let a=window.getSelection();if(!a||a.isCollapsed)return;let o=a.getRangeAt(0);try{Rr=await GT(o,Ar),hC(Rr.exact)}catch(u){console.error("[feedback-layer] Failed to create selector:",u)}wn()};we.addEventListener("mousedown",t),we.addEventListener("touchstart",t),document.body.appendChild(we)}function wn(){we&&(we.remove(),we=null)}async function H6({comment:e,commenter:r,color:t}){if(!Rr)return;let n=t||uc||null;try{let a=await ai({uri:ti,document:ni,quote:Rr.exact,prefix:Rr.prefix,suffix:Rr.suffix,body:e,author:r,color:n});A.push(a);let o=await vn({exact:a.quote,prefix:a.prefix,suffix:a.suffix},Ar);o&&(hn(o,a.id,a.color),ue.add(a.id)),Re(A,ue,he),window.getSelection().removeAllRanges()}catch(a){console.error("[feedback-layer] Failed to create comment:",a),Ke(`Failed to save comment: ${a.message}`,"error")}Rr=null}async function W6(e,r){try{let n=await pc(e,r?"closed":"open"),a=A.findIndex(o=>o.id===e);if(a!==-1&&(A[a]=n),r)ei(e);else{let o=n,u=await vn({exact:o.quote,prefix:o.prefix,suffix:o.suffix},Ar);u?(hn(u,o.id,o.color),ue.add(o.id)):ue.delete(o.id)}Re(A,ue,he)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),Ke(`Failed to update comment: ${t.message}`,"error")}}async function K6({parent_id:e,comment:r,commenter:t}){try{let n=await ai({uri:ti,document:ni,body:r,author:t,parent:e});A.push(n),Re(A,ue,he)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),Ke(`Failed to save reply: ${n.message}`,"error")}}async function z6(e,r){try{let t=await ii(e,{body:r}),n=A.findIndex(a=>a.id===e);n!==-1&&(A[n]=t),Re(A,ue,he)}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),Ke(`Failed to update comment: ${t.message}`,"error")}}async function V6(e,r){try{let t=await ii(e,{color:r}),n=A.findIndex(o=>o.id===e);n!==-1&&(A[n]=t),ei(e);let a=t;if(a.status!=="closed"){let o=await vn({exact:a.quote,prefix:a.prefix,suffix:a.suffix},Ar);o&&(hn(o,a.id,a.color),ue.add(a.id),he.set(a.id,o))}Re(A,ue,he)}catch(t){console.error("[feedback-layer] Failed to change color:",t),Ke(`Failed to update color: ${t.message}`,"error")}}async function Y6(e,r){let t=ze();if(t)try{let o=A.find(s=>s.id===e)?.reactions?.find(s=>s.emoji===r)?.authors.includes(t),u;o?u=await mc(e,r,t):u=await dc(e,r,t);let c=A.findIndex(s=>s.id===e);c!==-1&&(A[c]={...A[c],reactions:u.reactions}),Re(A,ue,he)}catch(n){console.error("[feedback-layer] Failed to toggle reaction:",n),Ke(`Failed to update reaction: ${n.message}`,"error")}}async function J6(e){try{await vc(e),ei(e),ue.delete(e),A=A.filter(r=>r.id!==e&&r.parent!==e),Re(A,ue,he)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),Ke(`Failed to delete comment: ${r.message}`,"error")}}try{F6()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
