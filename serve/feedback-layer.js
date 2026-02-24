var FeedbackLayer=(()=>{var bC=Object.create;var sc=Object.defineProperty;var gC=Object.getOwnPropertyDescriptor;var qC=Object.getOwnPropertyNames;var xC=Object.getPrototypeOf,wC=Object.prototype.hasOwnProperty;var i=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var SC=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of qC(r))!wC.call(e,a)&&a!==t&&sc(e,a,{get:()=>r[a],enumerable:!(n=gC(r,a))||n.enumerable});return e};var b=(e,r,t)=>(t=e!=null?bC(xC(e)):{},SC(r||!e||!e.__esModule?sc(t,"default",{value:e,enumerable:!0}):t,e));var _=i((Z6,mc)=>{"use strict";mc.exports=function(e){try{return!!e()}catch{return!0}}});var Mr=i((eG,hc)=>{"use strict";var EC=_();hc.exports=!EC(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var N=i((rG,gc)=>{"use strict";var yc=Mr(),bc=Function.prototype,oi=bc.call,TC=yc&&bc.bind.bind(oi,oi);gc.exports=yc?TC:function(e){return function(){return oi.apply(e,arguments)}}});var U=i((tG,qc)=>{"use strict";var CC=N();qc.exports=CC({}.isPrototypeOf)});var P=i((ui,xc)=>{"use strict";var dt=function(e){return e&&e.Math===Math&&e};xc.exports=dt(typeof globalThis=="object"&&globalThis)||dt(typeof window=="object"&&window)||dt(typeof self=="object"&&self)||dt(typeof global=="object"&&global)||dt(typeof ui=="object"&&ui)||function(){return this}()||Function("return this")()});var jr=i((nG,Tc)=>{"use strict";var OC=Mr(),Ec=Function.prototype,wc=Ec.apply,Sc=Ec.call;Tc.exports=typeof Reflect=="object"&&Reflect.apply||(OC?Sc.bind(wc):function(){return Sc.apply(wc,arguments)})});var Te=i((aG,Oc)=>{"use strict";var Cc=N(),kC=Cc({}.toString),IC=Cc("".slice);Oc.exports=function(e){return IC(kC(e),8,-1)}});var mt=i((iG,kc)=>{"use strict";var _C=Te(),PC=N();kc.exports=function(e){if(_C(e)==="Function")return PC(e)}});var M=i((oG,Ic)=>{"use strict";var si=typeof document=="object"&&document.all;Ic.exports=typeof si>"u"&&si!==void 0?function(e){return typeof e=="function"||e===si}:function(e){return typeof e=="function"}});var H=i((uG,_c)=>{"use strict";var RC=_();_c.exports=!RC(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var G=i((sG,Pc)=>{"use strict";var AC=Mr(),En=Function.prototype.call;Pc.exports=AC?En.bind(En):function(){return En.apply(En,arguments)}});var ci=i(Nc=>{"use strict";var Rc={}.propertyIsEnumerable,Ac=Object.getOwnPropertyDescriptor,NC=Ac&&!Rc.call({1:2},1);Nc.f=NC?function(r){var t=Ac(this,r);return!!t&&t.enumerable}:Rc});var Je=i((lG,Mc)=>{"use strict";Mc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var Tn=i((fG,jc)=>{"use strict";var MC=N(),jC=_(),LC=Te(),li=Object,$C=MC("".split);jc.exports=jC(function(){return!li("z").propertyIsEnumerable(0)})?function(e){return LC(e)==="String"?$C(e,""):li(e)}:li});var fr=i((pG,Lc)=>{"use strict";Lc.exports=function(e){return e==null}});var pr=i((vG,$c)=>{"use strict";var FC=fr(),DC=TypeError;$c.exports=function(e){if(FC(e))throw new DC("Can't call method on "+e);return e}});var Ae=i((dG,Fc)=>{"use strict";var BC=Tn(),GC=pr();Fc.exports=function(e){return BC(GC(e))}});var $=i((mG,Dc)=>{"use strict";var UC=M();Dc.exports=function(e){return typeof e=="object"?e!==null:UC(e)}});var V=i((hG,Bc)=>{"use strict";Bc.exports={}});var W=i((yG,Uc)=>{"use strict";var fi=V(),pi=P(),HC=M(),Gc=function(e){return HC(e)?e:void 0};Uc.exports=function(e,r){return arguments.length<2?Gc(fi[e])||Gc(pi[e]):fi[e]&&fi[e][r]||pi[e]&&pi[e][r]}});var Lr=i((bG,Kc)=>{"use strict";var WC=P(),Hc=WC.navigator,Wc=Hc&&Hc.userAgent;Kc.exports=Wc?String(Wc):""});var $r=i((gG,Xc)=>{"use strict";var Qc=P(),vi=Lr(),zc=Qc.process,Vc=Qc.Deno,Yc=zc&&zc.versions||Vc&&Vc.version,Jc=Yc&&Yc.v8,be,Cn;Jc&&(be=Jc.split("."),Cn=be[0]>0&&be[0]<4?1:+(be[0]+be[1]));!Cn&&vi&&(be=vi.match(/Edge\/(\d+)/),(!be||be[1]>=74)&&(be=vi.match(/Chrome\/(\d+)/),be&&(Cn=+be[1])));Xc.exports=Cn});var vr=i((qG,el)=>{"use strict";var Zc=$r(),KC=_(),zC=P(),VC=zC.String;el.exports=!!Object.getOwnPropertySymbols&&!KC(function(){var e=Symbol("symbol detection");return!VC(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Zc&&Zc<41})});var di=i((xG,rl)=>{"use strict";var YC=vr();rl.exports=YC&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Fr=i((wG,tl)=>{"use strict";var JC=W(),QC=M(),XC=U(),ZC=di(),eO=Object;tl.exports=ZC?function(e){return typeof e=="symbol"}:function(e){var r=JC("Symbol");return QC(r)&&XC(r.prototype,eO(e))}});var Qe=i((SG,nl)=>{"use strict";var rO=String;nl.exports=function(e){try{return rO(e)}catch{return"Object"}}});var D=i((EG,al)=>{"use strict";var tO=M(),nO=Qe(),aO=TypeError;al.exports=function(e){if(tO(e))return e;throw new aO(nO(e)+" is not a function")}});var On=i((TG,il)=>{"use strict";var iO=D(),oO=fr();il.exports=function(e,r){var t=e[r];return oO(t)?void 0:iO(t)}});var ul=i((CG,ol)=>{"use strict";var mi=G(),hi=M(),yi=$(),uO=TypeError;ol.exports=function(e,r){var t,n;if(r==="string"&&hi(t=e.toString)&&!yi(n=mi(t,e))||hi(t=e.valueOf)&&!yi(n=mi(t,e))||r!=="string"&&hi(t=e.toString)&&!yi(n=mi(t,e)))return n;throw new uO("Can't convert object to primitive value")}});var Z=i((OG,sl)=>{"use strict";sl.exports=!0});var fl=i((kG,ll)=>{"use strict";var cl=P(),sO=Object.defineProperty;ll.exports=function(e,r){try{sO(cl,e,{value:r,configurable:!0,writable:!0})}catch{cl[e]=r}return r}});var ht=i((IG,dl)=>{"use strict";var cO=Z(),lO=P(),fO=fl(),pl="__core-js_shared__",vl=dl.exports=lO[pl]||fO(pl,{});(vl.versions||(vl.versions=[])).push({version:"3.48.0",mode:cO?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var dr=i((_G,hl)=>{"use strict";var ml=ht();hl.exports=function(e,r){return ml[e]||(ml[e]=r||{})}});var te=i((PG,yl)=>{"use strict";var pO=pr(),vO=Object;yl.exports=function(e){return vO(pO(e))}});var K=i((RG,bl)=>{"use strict";var dO=N(),mO=te(),hO=dO({}.hasOwnProperty);bl.exports=Object.hasOwn||function(r,t){return hO(mO(r),t)}});var Dr=i((AG,gl)=>{"use strict";var yO=N(),bO=0,gO=Math.random(),qO=yO(1.1.toString);gl.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+qO(++bO+gO,36)}});var R=i((NG,xl)=>{"use strict";var xO=P(),wO=dr(),ql=K(),SO=Dr(),EO=vr(),TO=di(),Br=xO.Symbol,bi=wO("wks"),CO=TO?Br.for||Br:Br&&Br.withoutSetter||SO;xl.exports=function(e){return ql(bi,e)||(bi[e]=EO&&ql(Br,e)?Br[e]:CO("Symbol."+e)),bi[e]}});var Tl=i((MG,El)=>{"use strict";var OO=G(),wl=$(),Sl=Fr(),kO=On(),IO=ul(),_O=R(),PO=TypeError,RO=_O("toPrimitive");El.exports=function(e,r){if(!wl(e)||Sl(e))return e;var t=kO(e,RO),n;if(t){if(r===void 0&&(r="default"),n=OO(t,e,r),!wl(n)||Sl(n))return n;throw new PO("Can't convert object to primitive value")}return r===void 0&&(r="number"),IO(e,r)}});var kn=i((jG,Cl)=>{"use strict";var AO=Tl(),NO=Fr();Cl.exports=function(e){var r=AO(e,"string");return NO(r)?r:r+""}});var In=i((LG,kl)=>{"use strict";var MO=P(),Ol=$(),gi=MO.document,jO=Ol(gi)&&Ol(gi.createElement);kl.exports=function(e){return jO?gi.createElement(e):{}}});var qi=i(($G,Il)=>{"use strict";var LO=H(),$O=_(),FO=In();Il.exports=!LO&&!$O(function(){return Object.defineProperty(FO("div"),"a",{get:function(){return 7}}).a!==7})});var yt=i(Pl=>{"use strict";var DO=H(),BO=G(),GO=ci(),UO=Je(),HO=Ae(),WO=kn(),KO=K(),zO=qi(),_l=Object.getOwnPropertyDescriptor;Pl.f=DO?_l:function(r,t){if(r=HO(r),t=WO(t),zO)try{return _l(r,t)}catch{}if(KO(r,t))return UO(!BO(GO.f,r,t),r[t])}});var xi=i((DG,Rl)=>{"use strict";var VO=_(),YO=M(),JO=/#|\.prototype\./,bt=function(e,r){var t=XO[QO(e)];return t===ek?!0:t===ZO?!1:YO(r)?VO(r):!!r},QO=bt.normalize=function(e){return String(e).replace(JO,".").toLowerCase()},XO=bt.data={},ZO=bt.NATIVE="N",ek=bt.POLYFILL="P";Rl.exports=bt});var Y=i((BG,Nl)=>{"use strict";var Al=mt(),rk=D(),tk=Mr(),nk=Al(Al.bind);Nl.exports=function(e,r){return rk(e),r===void 0?e:tk?nk(e,r):function(){return e.apply(r,arguments)}}});var wi=i((GG,Ml)=>{"use strict";var ak=H(),ik=_();Ml.exports=ak&&ik(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var X=i((UG,jl)=>{"use strict";var ok=$(),uk=String,sk=TypeError;jl.exports=function(e){if(ok(e))return e;throw new sk(uk(e)+" is not an object")}});var ne=i($l=>{"use strict";var ck=H(),lk=qi(),fk=wi(),_n=X(),Ll=kn(),pk=TypeError,Si=Object.defineProperty,vk=Object.getOwnPropertyDescriptor,Ei="enumerable",Ti="configurable",Ci="writable";$l.f=ck?fk?function(r,t,n){if(_n(r),t=Ll(t),_n(n),typeof r=="function"&&t==="prototype"&&"value"in n&&Ci in n&&!n[Ci]){var a=vk(r,t);a&&a[Ci]&&(r[t]=n.value,n={configurable:Ti in n?n[Ti]:a[Ti],enumerable:Ei in n?n[Ei]:a[Ei],writable:!1})}return Si(r,t,n)}:Si:function(r,t,n){if(_n(r),t=Ll(t),_n(n),lk)try{return Si(r,t,n)}catch{}if("get"in n||"set"in n)throw new pk("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var Ce=i((WG,Fl)=>{"use strict";var dk=H(),mk=ne(),hk=Je();Fl.exports=dk?function(e,r,t){return mk.f(e,r,hk(1,t))}:function(e,r,t){return e[r]=t,e}});var q=i((KG,Bl)=>{"use strict";var gt=P(),yk=jr(),bk=mt(),gk=M(),qk=yt().f,xk=xi(),Gr=V(),wk=Y(),Ur=Ce(),Dl=K();ht();var Sk=function(e){var r=function(t,n,a){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,a)}return yk(e,this,arguments)};return r.prototype=e.prototype,r};Bl.exports=function(e,r){var t=e.target,n=e.global,a=e.stat,o=e.proto,u=n?gt:a?gt[t]:gt[t]&&gt[t].prototype,c=n?Gr:Gr[t]||Ur(Gr,t,{})[t],s=c.prototype,l,f,p,v,d,h,m,x,y;for(v in r)l=xk(n?v:t+(a?".":"#")+v,e.forced),f=!l&&u&&Dl(u,v),h=c[v],f&&(e.dontCallGetSet?(y=qk(u,v),m=y&&y.value):m=u[v]),d=f&&m?m:r[v],!(!l&&!o&&typeof h==typeof d)&&(e.bind&&f?x=wk(d,gt):e.wrap&&f?x=Sk(d):o&&gk(d)?x=bk(d):x=d,(e.sham||d&&d.sham||h&&h.sham)&&Ur(x,"sham",!0),Ur(c,v,x),o&&(p=t+"Prototype",Dl(Gr,p)||Ur(Gr,p,{}),Ur(Gr[p],v,d),e.real&&s&&(l||!s[v])&&Ur(s,v,d)))}});var Ne=i((zG,Gl)=>{"use strict";var Ek=Te();Gl.exports=Array.isArray||function(r){return Ek(r)==="Array"}});var Pn=i((VG,Hl)=>{"use strict";var Tk=R(),Ck=Tk("toStringTag"),Ul={};Ul[Ck]="z";Hl.exports=String(Ul)==="[object z]"});var qt=i((YG,Wl)=>{"use strict";var Ok=Pn(),kk=M(),Rn=Te(),Ik=R(),_k=Ik("toStringTag"),Pk=Object,Rk=Rn(function(){return arguments}())==="Arguments",Ak=function(e,r){try{return e[r]}catch{}};Wl.exports=Ok?Rn:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=Ak(r=Pk(e),_k))=="string"?t:Rk?Rn(r):(n=Rn(r))==="Object"&&kk(r.callee)?"Arguments":n}});var ki=i((JG,Kl)=>{"use strict";var Nk=N(),Mk=M(),Oi=ht(),jk=Nk(Function.toString);Mk(Oi.inspectSource)||(Oi.inspectSource=function(e){return jk(e)});Kl.exports=Oi.inspectSource});var wt=i((QG,Ql)=>{"use strict";var Lk=N(),$k=_(),zl=M(),Fk=qt(),Dk=W(),Bk=ki(),Vl=function(){},Yl=Dk("Reflect","construct"),Ii=/^\s*(?:class|function)\b/,Gk=Lk(Ii.exec),Uk=!Ii.test(Vl),xt=function(r){if(!zl(r))return!1;try{return Yl(Vl,[],r),!0}catch{return!1}},Jl=function(r){if(!zl(r))return!1;switch(Fk(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Uk||!!Gk(Ii,Bk(r))}catch{return!0}};Jl.sham=!0;Ql.exports=!Yl||$k(function(){var e;return xt(xt.call)||!xt(Object)||!xt(function(){e=!0})||e})?Jl:xt});var Zl=i((XG,Xl)=>{"use strict";var Hk=Math.ceil,Wk=Math.floor;Xl.exports=Math.trunc||function(r){var t=+r;return(t>0?Wk:Hk)(t)}});var An=i((ZG,ef)=>{"use strict";var Kk=Zl();ef.exports=function(e){var r=+e;return r!==r||r===0?0:Kk(r)}});var _i=i((e8,rf)=>{"use strict";var zk=An(),Vk=Math.max,Yk=Math.min;rf.exports=function(e,r){var t=zk(e);return t<0?Vk(t+r,0):Yk(t,r)}});var Pi=i((r8,tf)=>{"use strict";var Jk=An(),Qk=Math.min;tf.exports=function(e){var r=Jk(e);return r>0?Qk(r,9007199254740991):0}});var ve=i((t8,nf)=>{"use strict";var Xk=Pi();nf.exports=function(e){return Xk(e.length)}});var Hr=i((n8,af)=>{"use strict";var Zk=H(),e1=ne(),r1=Je();af.exports=function(e,r,t){Zk?e1.f(e,r,r1(0,t)):e[r]=t}});var Wr=i((a8,of)=>{"use strict";var t1=H(),n1=Ne(),a1=TypeError,i1=Object.getOwnPropertyDescriptor,o1=t1&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();of.exports=o1?function(e,r){if(n1(e)&&!i1(e,"length").writable)throw new a1("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var St=i((i8,uf)=>{"use strict";var u1=_(),s1=R(),c1=$r(),l1=s1("species");uf.exports=function(e){return c1>=51||!u1(function(){var r=[],t=r.constructor={};return t[l1]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var mr=i((o8,sf)=>{"use strict";var f1=N();sf.exports=f1([].slice)});var ff=i(()=>{"use strict";var p1=q(),cf=Ne(),v1=wt(),d1=$(),lf=_i(),m1=ve(),h1=Ae(),y1=Hr(),b1=Wr(),g1=R(),q1=St(),x1=mr(),w1=q1("slice"),S1=g1("species"),Ri=Array,E1=Math.max;p1({target:"Array",proto:!0,forced:!w1},{slice:function(r,t){var n=h1(this),a=m1(n),o=lf(r,a),u=lf(t===void 0?a:t,a),c,s,l;if(cf(n)&&(c=n.constructor,v1(c)&&(c===Ri||cf(c.prototype))?c=void 0:d1(c)&&(c=c[S1],c===null&&(c=void 0)),c===Ri||c===void 0))return x1(n,o,u);for(s=new(c===void 0?Ri:c)(E1(u-o,0)),l=0;o<u;o++,l++)o in n&&y1(s,l,n[o]);return b1(s,l),s}})});var se=i((c8,pf)=>{"use strict";var T1=P(),C1=V();pf.exports=function(e,r){var t=C1[e+"Prototype"],n=t&&t[r];if(n)return n;var a=T1[e],o=a&&a.prototype;return o&&o[r]}});var df=i((l8,vf)=>{"use strict";ff();var O1=se();vf.exports=O1("Array","slice")});var hf=i((f8,mf)=>{"use strict";var k1=U(),I1=df(),Ai=Array.prototype;mf.exports=function(e){var r=e.slice;return e===Ai||k1(Ai,e)&&r===Ai.slice?I1:r}});var bf=i((p8,yf)=>{"use strict";var _1=hf();yf.exports=_1});var qf=i((v8,gf)=>{"use strict";var P1=bf();gf.exports=P1});var wf=i((d8,xf)=>{"use strict";var R1=qf();xf.exports=R1});var Ni=i((m8,Sf)=>{"use strict";Sf.exports=wf()});var Kr=i((h8,Ef)=>{Ef.exports=Ni()});var Xe=i((y8,Tf)=>{"use strict";var A1=qt(),N1=String;Tf.exports=function(e){if(A1(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return N1(e)}});var If=i((b8,kf)=>{"use strict";var Mi=N(),M1=An(),j1=Xe(),L1=pr(),$1=Mi("".charAt),Cf=Mi("".charCodeAt),F1=Mi("".slice),Of=function(e){return function(r,t){var n=j1(L1(r)),a=M1(t),o=n.length,u,c;return a<0||a>=o?e?"":void 0:(u=Cf(n,a),u<55296||u>56319||a+1===o||(c=Cf(n,a+1))<56320||c>57343?e?$1(n,a):u:e?F1(n,a,a+2):(u-55296<<10)+(c-56320)+65536)}};kf.exports={codeAt:Of(!1),charAt:Of(!0)}});var Rf=i((g8,Pf)=>{"use strict";var D1=P(),B1=M(),_f=D1.WeakMap;Pf.exports=B1(_f)&&/native code/.test(String(_f))});var Et=i((q8,Nf)=>{"use strict";var G1=dr(),U1=Dr(),Af=G1("keys");Nf.exports=function(e){return Af[e]||(Af[e]=U1(e))}});var zr=i((x8,Mf)=>{"use strict";Mf.exports={}});var Ze=i((w8,$f)=>{"use strict";var H1=Rf(),Lf=P(),W1=$(),K1=Ce(),ji=K(),Li=ht(),z1=Et(),V1=zr(),jf="Object already initialized",$i=Lf.TypeError,Y1=Lf.WeakMap,Nn,Tt,Mn,J1=function(e){return Mn(e)?Tt(e):Nn(e,{})},Q1=function(e){return function(r){var t;if(!W1(r)||(t=Tt(r)).type!==e)throw new $i("Incompatible receiver, "+e+" required");return t}};H1||Li.state?(ge=Li.state||(Li.state=new Y1),ge.get=ge.get,ge.has=ge.has,ge.set=ge.set,Nn=function(e,r){if(ge.has(e))throw new $i(jf);return r.facade=e,ge.set(e,r),r},Tt=function(e){return ge.get(e)||{}},Mn=function(e){return ge.has(e)}):(hr=z1("state"),V1[hr]=!0,Nn=function(e,r){if(ji(e,hr))throw new $i(jf);return r.facade=e,K1(e,hr,r),r},Tt=function(e){return ji(e,hr)?e[hr]:{}},Mn=function(e){return ji(e,hr)});var ge,hr;$f.exports={set:Nn,get:Tt,has:Mn,enforce:J1,getterFor:Q1}});var Bf=i((S8,Df)=>{"use strict";var Fi=H(),X1=K(),Ff=Function.prototype,Z1=Fi&&Object.getOwnPropertyDescriptor,Di=X1(Ff,"name"),eI=Di&&function(){}.name==="something",rI=Di&&(!Fi||Fi&&Z1(Ff,"name").configurable);Df.exports={EXISTS:Di,PROPER:eI,CONFIGURABLE:rI}});var Bi=i((E8,Uf)=>{"use strict";var tI=Ae(),nI=_i(),aI=ve(),Gf=function(e){return function(r,t,n){var a=tI(r),o=aI(a);if(o===0)return!e&&-1;var u=nI(n,o),c;if(e&&t!==t){for(;o>u;)if(c=a[u++],c!==c)return!0}else for(;o>u;u++)if((e||u in a)&&a[u]===t)return e||u||0;return!e&&-1}};Uf.exports={includes:Gf(!0),indexOf:Gf(!1)}});var Ui=i((T8,Wf)=>{"use strict";var iI=N(),Gi=K(),oI=Ae(),uI=Bi().indexOf,sI=zr(),Hf=iI([].push);Wf.exports=function(e,r){var t=oI(e),n=0,a=[],o;for(o in t)!Gi(sI,o)&&Gi(t,o)&&Hf(a,o);for(;r.length>n;)Gi(t,o=r[n++])&&(~uI(a,o)||Hf(a,o));return a}});var jn=i((C8,Kf)=>{"use strict";Kf.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var Ln=i((O8,zf)=>{"use strict";var cI=Ui(),lI=jn();zf.exports=Object.keys||function(r){return cI(r,lI)}});var Hi=i(Vf=>{"use strict";var fI=H(),pI=wi(),vI=ne(),dI=X(),mI=Ae(),hI=Ln();Vf.f=fI&&!pI?Object.defineProperties:function(r,t){dI(r);for(var n=mI(t),a=hI(t),o=a.length,u=0,c;o>u;)vI.f(r,c=a[u++],n[c]);return r}});var Wi=i((I8,Yf)=>{"use strict";var yI=W();Yf.exports=yI("document","documentElement")});var er=i((_8,tp)=>{"use strict";var bI=X(),gI=Hi(),Jf=jn(),qI=zr(),xI=Wi(),wI=In(),SI=Et(),Qf=">",Xf="<",zi="prototype",Vi="script",ep=SI("IE_PROTO"),Ki=function(){},rp=function(e){return Xf+Vi+Qf+e+Xf+"/"+Vi+Qf},Zf=function(e){e.write(rp("")),e.close();var r=e.parentWindow.Object;return e=null,r},EI=function(){var e=wI("iframe"),r="java"+Vi+":",t;return e.style.display="none",xI.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(rp("document.F=Object")),t.close(),t.F},$n,Fn=function(){try{$n=new ActiveXObject("htmlfile")}catch{}Fn=typeof document<"u"?document.domain&&$n?Zf($n):EI():Zf($n);for(var e=Jf.length;e--;)delete Fn[zi][Jf[e]];return Fn()};qI[ep]=!0;tp.exports=Object.create||function(r,t){var n;return r!==null?(Ki[zi]=bI(r),n=new Ki,Ki[zi]=null,n[ep]=r):n=Fn(),t===void 0?n:gI.f(n,t)}});var Yi=i((P8,np)=>{"use strict";var TI=_();np.exports=!TI(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var Ct=i((R8,ip)=>{"use strict";var CI=K(),OI=M(),kI=te(),II=Et(),_I=Yi(),ap=II("IE_PROTO"),Ji=Object,PI=Ji.prototype;ip.exports=_I?Ji.getPrototypeOf:function(e){var r=kI(e);if(CI(r,ap))return r[ap];var t=r.constructor;return OI(t)&&r instanceof t?t.prototype:r instanceof Ji?PI:null}});var Me=i((A8,op)=>{"use strict";var RI=Ce();op.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:RI(e,r,t),e}});var eo=i((N8,cp)=>{"use strict";var AI=_(),NI=M(),MI=$(),jI=er(),up=Ct(),LI=Me(),$I=R(),FI=Z(),Zi=$I("iterator"),sp=!1,je,Qi,Xi;[].keys&&(Xi=[].keys(),"next"in Xi?(Qi=up(up(Xi)),Qi!==Object.prototype&&(je=Qi)):sp=!0);var DI=!MI(je)||AI(function(){var e={};return je[Zi].call(e)!==e});DI?je={}:FI&&(je=jI(je));NI(je[Zi])||LI(je,Zi,function(){return this});cp.exports={IteratorPrototype:je,BUGGY_SAFARI_ITERATORS:sp}});var fp=i((M8,lp)=>{"use strict";var BI=Pn(),GI=qt();lp.exports=BI?{}.toString:function(){return"[object "+GI(this)+"]"}});var Le=i((j8,vp)=>{"use strict";var UI=Pn(),HI=ne().f,WI=Ce(),KI=K(),zI=fp(),VI=R(),pp=VI("toStringTag");vp.exports=function(e,r,t,n){var a=t?e:e&&e.prototype;a&&(KI(a,pp)||HI(a,pp,{configurable:!0,value:r}),n&&!UI&&WI(a,"toString",zI))}});var yr=i((L8,dp)=>{"use strict";dp.exports={}});var hp=i(($8,mp)=>{"use strict";var YI=eo().IteratorPrototype,JI=er(),QI=Je(),XI=Le(),ZI=yr(),e_=function(){return this};mp.exports=function(e,r,t,n){var a=r+" Iterator";return e.prototype=JI(YI,{next:QI(+!n,t)}),XI(e,a,!1,!0),ZI[a]=e_,e}});var bp=i((F8,yp)=>{"use strict";var r_=N(),t_=D();yp.exports=function(e,r,t){try{return r_(t_(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var qp=i((D8,gp)=>{"use strict";var n_=$();gp.exports=function(e){return n_(e)||e===null}});var wp=i((B8,xp)=>{"use strict";var a_=qp(),i_=String,o_=TypeError;xp.exports=function(e){if(a_(e))return e;throw new o_("Can't set "+i_(e)+" as a prototype")}});var Ot=i((G8,Sp)=>{"use strict";var u_=bp(),s_=$(),c_=pr(),l_=wp();Sp.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=u_(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(a,o){return c_(a),l_(o),s_(a)&&(e?t(a,o):a.__proto__=o),a}}():void 0)});var Gn=i((U8,Ap)=>{"use strict";var f_=q(),p_=G(),Dn=Z(),Pp=Bf(),v_=M(),d_=hp(),Ep=Ct(),Tp=Ot(),m_=Le(),h_=Ce(),ro=Me(),y_=R(),Cp=yr(),Rp=eo(),b_=Pp.PROPER,g_=Pp.CONFIGURABLE,Op=Rp.IteratorPrototype,Bn=Rp.BUGGY_SAFARI_ITERATORS,kt=y_("iterator"),kp="keys",It="values",Ip="entries",_p=function(){return this};Ap.exports=function(e,r,t,n,a,o,u){d_(t,r,n);var c=function(y){if(y===a&&v)return v;if(!Bn&&y&&y in f)return f[y];switch(y){case kp:return function(){return new t(this,y)};case It:return function(){return new t(this,y)};case Ip:return function(){return new t(this,y)}}return function(){return new t(this)}},s=r+" Iterator",l=!1,f=e.prototype,p=f[kt]||f["@@iterator"]||a&&f[a],v=!Bn&&p||c(a),d=r==="Array"&&f.entries||p,h,m,x;if(d&&(h=Ep(d.call(new e)),h!==Object.prototype&&h.next&&(!Dn&&Ep(h)!==Op&&(Tp?Tp(h,Op):v_(h[kt])||ro(h,kt,_p)),m_(h,s,!0,!0),Dn&&(Cp[s]=_p))),b_&&a===It&&p&&p.name!==It&&(!Dn&&g_?h_(f,"name",It):(l=!0,v=function(){return p_(p,this)})),a)if(m={values:c(It),keys:o?v:c(kp),entries:c(Ip)},u)for(x in m)(Bn||l||!(x in f))&&ro(f,x,m[x]);else f_({target:r,proto:!0,forced:Bn||l},m);return(!Dn||u)&&f[kt]!==v&&ro(f,kt,v,{name:a}),Cp[r]=v,m}});var Un=i((H8,Np)=>{"use strict";Np.exports=function(e,r){return{value:e,done:r}}});var br=i(()=>{"use strict";var q_=If().charAt,x_=Xe(),jp=Ze(),w_=Gn(),Mp=Un(),Lp="String Iterator",S_=jp.set,E_=jp.getterFor(Lp);w_(String,"String",function(e){S_(this,{type:Lp,string:x_(e),index:0})},function(){var r=E_(this),t=r.string,n=r.index,a;return n>=t.length?Mp(void 0,!0):(a=q_(t,n),r.index+=a.length,Mp(a,!1))})});var to=i((z8,Fp)=>{"use strict";var T_=G(),$p=X(),C_=On();Fp.exports=function(e,r,t){var n,a;$p(e);try{if(n=C_(e,"return"),!n){if(r==="throw")throw t;return t}n=T_(n,e)}catch(o){a=!0,n=o}if(r==="throw")throw t;if(a)throw n;return $p(n),t}});var Bp=i((V8,Dp)=>{"use strict";var O_=X(),k_=to();Dp.exports=function(e,r,t,n){try{return n?r(O_(t)[0],t[1]):r(t)}catch(a){k_(e,"throw",a)}}});var no=i((Y8,Gp)=>{"use strict";var I_=R(),__=yr(),P_=I_("iterator"),R_=Array.prototype;Gp.exports=function(e){return e!==void 0&&(__.Array===e||R_[P_]===e)}});var _t=i((J8,Hp)=>{"use strict";var A_=qt(),Up=On(),N_=fr(),M_=yr(),j_=R(),L_=j_("iterator");Hp.exports=function(e){if(!N_(e))return Up(e,L_)||Up(e,"@@iterator")||M_[A_(e)]}});var Hn=i((Q8,Wp)=>{"use strict";var $_=G(),F_=D(),D_=X(),B_=Qe(),G_=_t(),U_=TypeError;Wp.exports=function(e,r){var t=arguments.length<2?G_(e):r;if(F_(t))return D_($_(t,e));throw new U_(B_(e)+" is not iterable")}});var Yp=i((X8,Vp)=>{"use strict";var H_=Y(),W_=G(),K_=te(),z_=Bp(),V_=no(),Y_=wt(),J_=ve(),Kp=Hr(),Q_=Wr(),X_=Hn(),Z_=_t(),zp=Array;Vp.exports=function(r){var t=K_(r),n=Y_(this),a=arguments.length,o=a>1?arguments[1]:void 0,u=o!==void 0;u&&(o=H_(o,a>2?arguments[2]:void 0));var c=Z_(t),s=0,l,f,p,v,d,h;if(c&&!(this===zp&&V_(c)))for(f=n?new this:[],v=X_(t,c),d=v.next;!(p=W_(d,v)).done;s++)h=u?z_(v,o,[p.value,s],!0):p.value,Kp(f,s,h);else for(l=J_(t),f=n?new this(l):zp(l);l>s;s++)h=u?o(t[s],s):t[s],Kp(f,s,h);return Q_(f,s),f}});var io=i((Z8,Zp)=>{"use strict";var eP=R(),Qp=eP("iterator"),Xp=!1;try{Jp=0,ao={next:function(){return{done:!!Jp++}},return:function(){Xp=!0}},ao[Qp]=function(){return this},Array.from(ao,function(){throw 2})}catch{}var Jp,ao;Zp.exports=function(e,r){try{if(!r&&!Xp)return!1}catch{return!1}var t=!1;try{var n={};n[Qp]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var ev=i(()=>{"use strict";var rP=q(),tP=Yp(),nP=io(),aP=!nP(function(e){Array.from(e)});rP({target:"Array",stat:!0,forced:aP},{from:tP})});var tv=i((tU,rv)=>{"use strict";br();ev();var iP=V();rv.exports=iP.Array.from});var av=i((nU,nv)=>{"use strict";var oP=tv();nv.exports=oP});var ov=i((aU,iv)=>{"use strict";var uP=av();iv.exports=uP});var sv=i((iU,uv)=>{"use strict";var sP=ov();uv.exports=sP});var oo=i((oU,cv)=>{"use strict";cv.exports=sv()});var Wn=i((uU,lv)=>{lv.exports=oo()});var Pt=i((sU,fv)=>{"use strict";var cP=TypeError,lP=9007199254740991;fv.exports=function(e){if(e>lP)throw cP("Maximum allowed index exceeded");return e}});var mv=i((cU,dv)=>{"use strict";var pv=Ne(),fP=wt(),pP=$(),vP=R(),dP=vP("species"),vv=Array;dv.exports=function(e){var r;return pv(e)&&(r=e.constructor,fP(r)&&(r===vv||pv(r.prototype))?r=void 0:pP(r)&&(r=r[dP],r===null&&(r=void 0))),r===void 0?vv:r}});var Kn=i((lU,hv)=>{"use strict";var mP=mv();hv.exports=function(e,r){return new(mP(e))(r===0?0:r)}});var uo=i(()=>{"use strict";var hP=q(),yP=_(),bP=Ne(),gP=$(),qP=te(),xP=ve(),yv=Pt(),bv=Hr(),wP=Wr(),SP=Kn(),EP=St(),TP=R(),CP=$r(),gv=TP("isConcatSpreadable"),OP=CP>=51||!yP(function(){var e=[];return e[gv]=!1,e.concat()[0]!==e}),kP=function(e){if(!gP(e))return!1;var r=e[gv];return r!==void 0?!!r:bP(e)},IP=!OP||!EP("concat");hP({target:"Array",proto:!0,arity:1,forced:IP},{concat:function(r){var t=qP(this),n=SP(t,0),a=0,o,u,c,s,l;for(o=-1,c=arguments.length;o<c;o++)if(l=o===-1?t:arguments[o],kP(l))for(s=xP(l),yv(a+s),u=0;u<s;u++,a++)u in l&&bv(n,a,l[u]);else yv(a+1),bv(n,a++,l);return wP(n,a),n}})});var Rt=i(()=>{});var At=i(qv=>{"use strict";var _P=Ui(),PP=jn(),RP=PP.concat("length","prototype");qv.f=Object.getOwnPropertyNames||function(r){return _P(r,RP)}});var so=i((hU,Sv)=>{"use strict";var AP=Te(),NP=Ae(),xv=At().f,MP=mr(),wv=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],jP=function(e){try{return xv(e)}catch{return MP(wv)}};Sv.exports.f=function(r){return wv&&AP(r)==="Window"?jP(r):xv(NP(r))}});var zn=i(Ev=>{"use strict";Ev.f=Object.getOwnPropertySymbols});var Vn=i((bU,Tv)=>{"use strict";var LP=ne();Tv.exports=function(e,r,t){return LP.f(e,r,t)}});var Vr=i(Cv=>{"use strict";var $P=R();Cv.f=$P});var j=i((qU,kv)=>{"use strict";var Ov=V(),FP=K(),DP=Vr(),BP=ne().f;kv.exports=function(e){var r=Ov.Symbol||(Ov.Symbol={});FP(r,e)||BP(r,e,{value:DP.f(e)})}});var co=i((xU,Iv)=>{"use strict";var GP=G(),UP=W(),HP=R(),WP=Me();Iv.exports=function(){var e=UP("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=HP("toPrimitive");r&&!r[n]&&WP(r,n,function(a){return GP(t,this)},{arity:1})}});var Nt=i((wU,Pv)=>{"use strict";var KP=Y(),zP=Tn(),VP=te(),YP=ve(),_v=Kn(),lo=Hr(),rr=function(e){var r=e===1,t=e===2,n=e===3,a=e===4,o=e===6,u=e===7,c=e===5||o;return function(s,l,f){for(var p=VP(s),v=zP(p),d=YP(v),h=KP(l,f),m=0,x=0,y=r?_v(s,d):t||u?_v(s,0):void 0,g,O;d>m;m++)if((c||m in v)&&(g=v[m],O=h(g,m,p),e))if(r)lo(y,m,O);else if(O)switch(e){case 3:return!0;case 5:return g;case 6:return m;case 2:lo(y,x++,g)}else switch(e){case 4:return!1;case 7:lo(y,x++,g)}return o?-1:n||a?a:y}};Pv.exports={forEach:rr(0),map:rr(1),filter:rr(2),some:rr(3),every:rr(4),find:rr(5),findIndex:rr(6),filterReject:rr(7)}});var Vv=i(()=>{"use strict";var Yn=q(),Lt=P(),qo=G(),JP=N(),QP=Z(),Yr=H(),Jr=vr(),XP=_(),z=K(),ZP=U(),mo=X(),Jn=Ae(),xo=kn(),eR=Xe(),ho=Je(),Qr=er(),Nv=Ln(),rR=At(),Mv=so(),tR=zn(),jv=yt(),Lv=ne(),nR=Hi(),$v=ci(),fo=Me(),aR=Vn(),wo=dr(),iR=Et(),Fv=zr(),Rv=Dr(),oR=R(),uR=Vr(),sR=j(),cR=co(),lR=Le(),Dv=Ze(),Qn=Nt().forEach,ae=iR("hidden"),Xn="Symbol",jt="prototype",fR=Dv.set,Av=Dv.getterFor(Xn),de=Object[jt],gr=Lt.Symbol,Mt=gr&&gr[jt],pR=Lt.RangeError,vR=Lt.TypeError,po=Lt.QObject,Bv=jv.f,qr=Lv.f,Gv=Mv.f,dR=$v.f,Uv=JP([].push),$e=wo("symbols"),$t=wo("op-symbols"),mR=wo("wks"),yo=!po||!po[jt]||!po[jt].findChild,Hv=function(e,r,t){var n=Bv(de,r);n&&delete de[r],qr(e,r,t),n&&e!==de&&qr(de,r,n)},bo=Yr&&XP(function(){return Qr(qr({},"a",{get:function(){return qr(this,"a",{value:7}).a}})).a!==7})?Hv:qr,vo=function(e,r){var t=$e[e]=Qr(Mt);return fR(t,{type:Xn,tag:e,description:r}),Yr||(t.description=r),t},Zn=function(r,t,n){r===de&&Zn($t,t,n),mo(r);var a=xo(t);return mo(n),z($e,a)?(n.enumerable?(z(r,ae)&&r[ae][a]&&(r[ae][a]=!1),n=Qr(n,{enumerable:ho(0,!1)})):(z(r,ae)||qr(r,ae,ho(1,Qr(null))),r[ae][a]=!0),bo(r,a,n)):qr(r,a,n)},So=function(r,t){mo(r);var n=Jn(t),a=Nv(n).concat(zv(n));return Qn(a,function(o){(!Yr||qo(go,n,o))&&Zn(r,o,n[o])}),r},hR=function(r,t){return t===void 0?Qr(r):So(Qr(r),t)},go=function(r){var t=xo(r),n=qo(dR,this,t);return this===de&&z($e,t)&&!z($t,t)?!1:n||!z(this,t)||!z($e,t)||z(this,ae)&&this[ae][t]?n:!0},Wv=function(r,t){var n=Jn(r),a=xo(t);if(!(n===de&&z($e,a)&&!z($t,a))){var o=Bv(n,a);return o&&z($e,a)&&!(z(n,ae)&&n[ae][a])&&(o.enumerable=!0),o}},Kv=function(r){var t=Gv(Jn(r)),n=[];return Qn(t,function(a){!z($e,a)&&!z(Fv,a)&&Uv(n,a)}),n},zv=function(e){var r=e===de,t=Gv(r?$t:Jn(e)),n=[];return Qn(t,function(a){z($e,a)&&(!r||z(de,a))&&Uv(n,$e[a])}),n};Jr||(gr=function(){if(ZP(Mt,this))throw new vR("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:eR(arguments[0]),t=Rv(r),n=function(a){var o=this===void 0?Lt:this;o===de&&qo(n,$t,a),z(o,ae)&&z(o[ae],t)&&(o[ae][t]=!1);var u=ho(1,a);try{bo(o,t,u)}catch(c){if(!(c instanceof pR))throw c;Hv(o,t,u)}};return Yr&&yo&&bo(de,t,{configurable:!0,set:n}),vo(t,r)},Mt=gr[jt],fo(Mt,"toString",function(){return Av(this).tag}),fo(gr,"withoutSetter",function(e){return vo(Rv(e),e)}),$v.f=go,Lv.f=Zn,nR.f=So,jv.f=Wv,rR.f=Mv.f=Kv,tR.f=zv,uR.f=function(e){return vo(oR(e),e)},Yr&&(aR(Mt,"description",{configurable:!0,get:function(){return Av(this).description}}),QP||fo(de,"propertyIsEnumerable",go,{unsafe:!0})));Yn({global:!0,constructor:!0,wrap:!0,forced:!Jr,sham:!Jr},{Symbol:gr});Qn(Nv(mR),function(e){sR(e)});Yn({target:Xn,stat:!0,forced:!Jr},{useSetter:function(){yo=!0},useSimple:function(){yo=!1}});Yn({target:"Object",stat:!0,forced:!Jr,sham:!Yr},{create:hR,defineProperty:Zn,defineProperties:So,getOwnPropertyDescriptor:Wv});Yn({target:"Object",stat:!0,forced:!Jr},{getOwnPropertyNames:Kv});cR();lR(gr,Xn);Fv[ae]=!0});var Eo=i((TU,Yv)=>{"use strict";var yR=vr();Yv.exports=yR&&!!Symbol.for&&!!Symbol.keyFor});var Qv=i(()=>{"use strict";var bR=q(),gR=W(),qR=K(),xR=Xe(),Jv=dr(),wR=Eo(),To=Jv("string-to-symbol-registry"),SR=Jv("symbol-to-string-registry");bR({target:"Symbol",stat:!0,forced:!wR},{for:function(e){var r=xR(e);if(qR(To,r))return To[r];var t=gR("Symbol")(r);return To[r]=t,SR[t]=r,t}})});var Zv=i(()=>{"use strict";var ER=q(),TR=K(),CR=Fr(),OR=Qe(),kR=dr(),IR=Eo(),Xv=kR("symbol-to-string-registry");ER({target:"Symbol",stat:!0,forced:!IR},{keyFor:function(r){if(!CR(r))throw new TypeError(OR(r)+" is not a symbol");if(TR(Xv,r))return Xv[r]}})});var rd=i((_U,ed)=>{"use strict";var _R=$(),PR=Ze().get;ed.exports=function(r){if(!_R(r))return!1;var t=PR(r);return!!t&&t.type==="RawJSON"}});var od=i((PU,id)=>{"use strict";var Co=N(),RR=K(),ea=SyntaxError,AR=parseInt,NR=String.fromCharCode,MR=Co("".charAt),td=Co("".slice),nd=Co(/./.exec),ad={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},jR=/^[\da-f]{4}$/i,LR=/^[\u0000-\u001F]$/;id.exports=function(e,r){for(var t=!0,n="";r<e.length;){var a=MR(e,r);if(a==="\\"){var o=td(e,r,r+2);if(RR(ad,o))n+=ad[o],r+=2;else if(o==="\\u"){r+=2;var u=td(e,r,r+4);if(!nd(jR,u))throw new ea("Bad Unicode escape at: "+r);n+=NR(AR(u,16)),r+=4}else throw new ea('Unknown escape sequence: "'+o+'"')}else if(a==='"'){t=!1,r++;break}else{if(nd(LR,a))throw new ea("Bad control character in string literal at: "+r);n+=a,r++}}if(t)throw new ea("Unterminated string at: "+r);return{value:n,end:r}}});var sd=i((RU,ud)=>{"use strict";var $R=_();ud.exports=!$R(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var wd=i(()=>{"use strict";var FR=q(),hd=W(),DR=jr(),yd=G(),xr=N(),bd=_(),cd=Ne(),ta=M(),BR=rd(),ld=Fr(),fd=Te(),GR=Xe(),UR=mr(),HR=od(),WR=Dr(),KR=vr(),Oo=sd(),gd=String,tr=hd("JSON","stringify"),ra=xr(/./.exec),Io=xr("".charAt),zR=xr("".charCodeAt),VR=xr("".replace),ko=xr("".slice),_o=xr([].push),YR=xr(1.1.toString),JR=/[\uD800-\uDFFF]/g,pd=/^[\uD800-\uDBFF]$/,vd=/^[\uDC00-\uDFFF]$/,Po=WR(),dd=Po.length,qd=!KR||bd(function(){var e=hd("Symbol")("stringify detection");return tr([e])!=="[null]"||tr({a:e})!=="{}"||tr(Object(e))!=="{}"}),md=bd(function(){return tr("\uDF06\uD834")!=='"\\udf06\\ud834"'||tr("\uDEAD")!=='"\\udead"'}),QR=qd?function(e,r){var t=UR(arguments),n=xd(r);if(!(!ta(n)&&(e===void 0||ld(e))))return t[1]=function(a,o){if(ta(n)&&(o=yd(n,this,gd(a),o)),!ld(o))return o},DR(tr,null,t)}:tr,XR=function(e,r,t){var n=Io(t,r-1),a=Io(t,r+1);return ra(pd,e)&&!ra(vd,a)||ra(vd,e)&&!ra(pd,n)?"\\u"+YR(zR(e,0),16):e},xd=function(e){if(ta(e))return e;if(cd(e)){for(var r=e.length,t=[],n=0;n<r;n++){var a=e[n];typeof a=="string"?_o(t,a):(typeof a=="number"||fd(a)==="Number"||fd(a)==="String")&&_o(t,GR(a))}var o=t.length,u=!0;return function(c,s){if(u)return u=!1,s;if(cd(this))return s;for(var l=0;l<o;l++)if(t[l]===c)return s}}};tr&&FR({target:"JSON",stat:!0,arity:3,forced:qd||md||!Oo},{stringify:function(r,t,n){var a=xd(t),o=[],u=QR(r,function(d,h){var m=ta(a)?yd(a,this,gd(d),h):h;return!Oo&&BR(m)?Po+(_o(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(md&&(u=VR(u,JR,XR)),Oo))return u;for(var c="",s=u.length,l=0;l<s;l++){var f=Io(u,l);if(f==='"'){var p=HR(u,++l).end-1,v=ko(u,l,p);c+=ko(v,0,dd)===Po?o[ko(v,dd)]:'"'+v+'"',l=p}else c+=f}return c}})});var Ed=i(()=>{"use strict";var ZR=q(),eA=vr(),rA=_(),Sd=zn(),tA=te(),nA=!eA||rA(function(){Sd.f(1)});ZR({target:"Object",stat:!0,forced:nA},{getOwnPropertySymbols:function(r){var t=Sd.f;return t?t(tA(r)):[]}})});var Td=i(()=>{"use strict";Vv();Qv();Zv();wd();Ed()});var Ro=i(()=>{"use strict";var aA=j();aA("asyncDispose")});var Ao=i(()=>{"use strict";var iA=j();iA("asyncIterator")});var Cd=i(()=>{});var No=i(()=>{"use strict";var oA=j();oA("dispose")});var Od=i(()=>{"use strict";var uA=j();uA("hasInstance")});var kd=i(()=>{"use strict";var sA=j();sA("isConcatSpreadable")});var Mo=i(()=>{"use strict";var cA=j();cA("iterator")});var Id=i(()=>{"use strict";var lA=j();lA("match")});var _d=i(()=>{"use strict";var fA=j();fA("matchAll")});var Pd=i(()=>{"use strict";var pA=j();pA("replace")});var Rd=i(()=>{"use strict";var vA=j();vA("search")});var Ad=i(()=>{"use strict";var dA=j();dA("species")});var Nd=i(()=>{"use strict";var mA=j();mA("split")});var jo=i(()=>{"use strict";var hA=j(),yA=co();hA("toPrimitive");yA()});var Md=i(()=>{"use strict";var bA=W(),gA=j(),qA=Le();gA("toStringTag");qA(bA("Symbol"),"Symbol")});var jd=i(()=>{"use strict";var xA=j();xA("unscopables")});var Ld=i(()=>{"use strict";var wA=P(),SA=Le();SA(wA.JSON,"JSON",!0)});var $d=i(()=>{});var Fd=i(()=>{});var Bd=i((SH,Dd)=>{"use strict";uo();Rt();Td();Ro();Ao();Cd();No();Od();kd();Mo();Id();_d();Pd();Rd();Ad();Nd();jo();Md();jd();Ld();$d();Fd();var EA=V();Dd.exports=EA.Symbol});var Lo=i((EH,Gd)=>{"use strict";Gd.exports=function(){}});var wr=i((TH,zd)=>{"use strict";var TA=Ae(),$o=Lo(),Ud=yr(),Wd=Ze(),CA=ne().f,OA=Gn(),na=Un(),kA=Z(),IA=H(),Kd="Array Iterator",_A=Wd.set,PA=Wd.getterFor(Kd);zd.exports=OA(Array,"Array",function(e,r){_A(this,{type:Kd,target:TA(e),index:0,kind:r})},function(){var e=PA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,na(void 0,!0);switch(e.kind){case"keys":return na(t,!1);case"values":return na(r[t],!1)}return na([t,r[t]],!1)},"values");var Hd=Ud.Arguments=Ud.Array;$o("keys");$o("values");$o("entries");if(!kA&&IA&&Hd.name!=="values")try{CA(Hd,"name",{value:"values"})}catch{}});var Yd=i((CH,Vd)=>{"use strict";Vd.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var Sr=i(()=>{"use strict";wr();var RA=Yd(),AA=P(),NA=Le(),Jd=yr();for(aa in RA)NA(AA[aa],aa),Jd[aa]=Jd.Array;var aa});var Xd=i((IH,Qd)=>{"use strict";var MA=Bd();Sr();Qd.exports=MA});var rm=i(()=>{"use strict";var jA=R(),LA=ne().f,Zd=jA("metadata"),em=Function.prototype;em[Zd]===void 0&&LA(em,Zd,{value:null})});var tm=i(()=>{"use strict";Ro()});var nm=i(()=>{"use strict";No()});var am=i(()=>{"use strict";var $A=j();$A("metadata")});var om=i(($H,im)=>{"use strict";var FA=Xd();rm();tm();nm();am();im.exports=FA});var Do=i((FH,um)=>{"use strict";var DA=W(),BA=N(),Fo=DA("Symbol"),GA=Fo.keyFor,UA=BA(Fo.prototype.valueOf);um.exports=Fo.isRegisteredSymbol||function(r){try{return GA(UA(r))!==void 0}catch{return!1}}});var sm=i(()=>{"use strict";var HA=q(),WA=Do();HA({target:"Symbol",stat:!0},{isRegisteredSymbol:WA})});var Uo=i((GH,dm)=>{"use strict";var KA=dr(),pm=W(),zA=N(),VA=Fr(),YA=R(),oa=pm("Symbol"),cm=oa.isWellKnownSymbol,vm=pm("Object","getOwnPropertyNames"),JA=zA(oa.prototype.valueOf),lm=KA("wks");for(ia=0,Bo=vm(oa),fm=Bo.length;ia<fm;ia++)try{Go=Bo[ia],VA(oa[Go])&&YA(Go)}catch{}var Go,ia,Bo,fm;dm.exports=function(r){if(cm&&cm(r))return!0;try{for(var t=JA(r),n=0,a=vm(lm),o=a.length;n<o;n++)if(lm[a[n]]==t)return!0}catch{}return!1}});var mm=i(()=>{"use strict";var QA=q(),XA=Uo();QA({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:XA})});var hm=i(()=>{"use strict";var ZA=j();ZA("customMatcher")});var ym=i(()=>{"use strict";var e2=j();e2("observable")});var bm=i(()=>{"use strict";var r2=q(),t2=Do();r2({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:t2})});var gm=i(()=>{"use strict";var n2=q(),a2=Uo();n2({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:a2})});var qm=i(()=>{"use strict";var i2=j();i2("matcher")});var xm=i(()=>{"use strict";var o2=j();o2("metadataKey")});var wm=i(()=>{"use strict";var u2=j();u2("patternMatch")});var Sm=i(()=>{"use strict";var s2=j();s2("replaceAll")});var Tm=i((uW,Em)=>{"use strict";var c2=om();sm();mm();hm();ym();bm();gm();qm();xm();wm();Sm();Em.exports=c2});var Oe=i((sW,Cm)=>{"use strict";Cm.exports=Tm()});var ua=i((cW,Om)=>{Om.exports=Oe()});var Im=i((lW,km)=>{"use strict";wr();br();var l2=_t();km.exports=l2});var Pm=i((fW,_m)=>{"use strict";var f2=Im();Sr();_m.exports=f2});var Am=i((pW,Rm)=>{"use strict";var p2=Pm();Rm.exports=p2});var Mm=i((vW,Nm)=>{"use strict";var v2=Am();Nm.exports=v2});var Ho=i((dW,jm)=>{"use strict";jm.exports=Mm()});var sa=i((mW,Lm)=>{Lm.exports=Ho()});var Fm=i((hW,$m)=>{"use strict";wr();br();var d2=Hn();$m.exports=d2});var Bm=i((yW,Dm)=>{"use strict";var m2=Fm();Sr();Dm.exports=m2});var Um=i((bW,Gm)=>{"use strict";var h2=Bm();Gm.exports=h2});var Wm=i((gW,Hm)=>{"use strict";var y2=Um();Hm.exports=y2});var zm=i((qW,Km)=>{"use strict";Km.exports=Wm()});var ca=i((xW,Vm)=>{Vm.exports=zm()});var Jm=i((wW,Ym)=>{"use strict";var b2=W(),g2=N(),q2=At(),x2=zn(),w2=X(),S2=g2([].concat);Ym.exports=b2("Reflect","ownKeys")||function(r){var t=q2.f(w2(r)),n=x2.f;return n?S2(t,n(r)):t}});var Zm=i((SW,Xm)=>{"use strict";var Qm=K(),E2=Jm(),T2=yt(),C2=ne();Xm.exports=function(e,r,t){for(var n=E2(r),a=C2.f,o=T2.f,u=0;u<n.length;u++){var c=n[u];!Qm(e,c)&&!(t&&Qm(t,c))&&a(e,c,o(r,c))}}});var rh=i((EW,eh)=>{"use strict";var O2=$(),k2=Ce();eh.exports=function(e,r){O2(r)&&"cause"in r&&k2(e,"cause",r.cause)}});var ih=i((TW,ah)=>{"use strict";var I2=N(),th=Error,_2=I2("".replace),P2=function(e){return String(new th(e).stack)}("zxcasd"),nh=/\n\s*at [^:]*:[^\n]*/,R2=nh.test(P2);ah.exports=function(e,r){if(R2&&typeof e=="string"&&!th.prepareStackTrace)for(;r--;)e=_2(e,nh,"");return e}});var uh=i((CW,oh)=>{"use strict";var A2=_(),N2=Je();oh.exports=!A2(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",N2(1,7)),e.stack!==7):!0})});var lh=i((OW,ch)=>{"use strict";var M2=Ce(),j2=ih(),L2=uh(),sh=Error.captureStackTrace;ch.exports=function(e,r,t,n){L2&&(sh?sh(e,r):M2(e,"stack",j2(t,n)))}});var me=i((kW,dh)=>{"use strict";var $2=Y(),F2=G(),D2=X(),B2=Qe(),G2=no(),U2=ve(),fh=U(),H2=Hn(),W2=_t(),ph=to(),K2=TypeError,la=function(e,r){this.stopped=e,this.result=r},vh=la.prototype;dh.exports=function(e,r,t){var n=t&&t.that,a=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),c=!!(t&&t.INTERRUPTED),s=$2(r,n),l,f,p,v,d,h,m,x=function(g){return l&&ph(l,"normal"),new la(!0,g)},y=function(g){return a?(D2(g),c?s(g[0],g[1],x):s(g[0],g[1])):c?s(g,x):s(g)};if(o)l=e.iterator;else if(u)l=e;else{if(f=W2(e),!f)throw new K2(B2(e)+" is not iterable");if(G2(f)){for(p=0,v=U2(e);v>p;p++)if(d=y(e[p]),d&&fh(vh,d))return d;return new la(!1)}l=H2(e,f)}for(h=o?e.next:l.next;!(m=F2(h,l)).done;){try{d=y(m.value)}catch(g){ph(l,"throw",g)}if(typeof d=="object"&&d&&fh(vh,d))return d}return new la(!1)}});var hh=i((IW,mh)=>{"use strict";var z2=Xe();mh.exports=function(e,r){return e===void 0?arguments.length<2?"":r:z2(e)}});var bh=i(()=>{"use strict";var V2=q(),Y2=U(),J2=Ct(),fa=Ot(),Q2=Zm(),yh=er(),Wo=Ce(),Ko=Je(),X2=rh(),Z2=lh(),eN=me(),rN=hh(),tN=R(),nN=tN("toStringTag"),pa=Error,aN=[].push,Xr=function(r,t){var n=Y2(zo,this),a;fa?a=fa(new pa,n?J2(this):zo):(a=n?this:yh(zo),Wo(a,nN,"Error")),t!==void 0&&Wo(a,"message",rN(t)),Z2(a,Xr,a.stack,1),arguments.length>2&&X2(a,arguments[2]);var o=[];return eN(r,aN,{that:o}),Wo(a,"errors",o),a};fa?fa(Xr,pa):Q2(Xr,pa,{name:!0});var zo=Xr.prototype=yh(pa.prototype,{constructor:Ko(1,Xr),message:Ko(1,""),name:Ko(1,"AggregateError")});V2({global:!0,constructor:!0,arity:2},{AggregateError:Xr})});var Vo=i(()=>{"use strict";bh()});var Yo=i((NW,gh)=>{"use strict";var Ft=P(),iN=Lr(),oN=Te(),va=function(e){return iN.slice(0,e.length)===e};gh.exports=function(){return va("Bun/")?"BUN":va("Cloudflare-Workers")?"CLOUDFLARE":va("Deno/")?"DENO":va("Node.js/")?"NODE":Ft.Bun&&typeof Bun.version=="string"?"BUN":Ft.Deno&&typeof Deno.version=="object"?"DENO":oN(Ft.process)==="process"?"NODE":Ft.window&&Ft.document?"BROWSER":"REST"}()});var Dt=i((MW,qh)=>{"use strict";var uN=Yo();qh.exports=uN==="NODE"});var Jo=i((jW,wh)=>{"use strict";var sN=W(),cN=Vn(),lN=R(),fN=H(),xh=lN("species");wh.exports=function(e){var r=sN(e);fN&&r&&!r[xh]&&cN(r,xh,{configurable:!0,get:function(){return this}})}});var da=i((LW,Sh)=>{"use strict";var pN=U(),vN=TypeError;Sh.exports=function(e,r){if(pN(r,e))return e;throw new vN("Incorrect invocation")}});var Qo=i(($W,Eh)=>{"use strict";var dN=wt(),mN=Qe(),hN=TypeError;Eh.exports=function(e){if(dN(e))return e;throw new hN(mN(e)+" is not a constructor")}});var Xo=i((FW,Ch)=>{"use strict";var Th=X(),yN=Qo(),bN=fr(),gN=R(),qN=gN("species");Ch.exports=function(e,r){var t=Th(e).constructor,n;return t===void 0||bN(n=Th(t)[qN])?r:yN(n)}});var kh=i((DW,Oh)=>{"use strict";var xN=TypeError;Oh.exports=function(e,r){if(e<r)throw new xN("Not enough arguments");return e}});var Zo=i((BW,Ih)=>{"use strict";var wN=Lr();Ih.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(wN)});var su=i((GW,$h)=>{"use strict";var ce=P(),SN=jr(),EN=Y(),_h=M(),TN=K(),Lh=_(),Ph=Wi(),CN=mr(),Rh=In(),ON=kh(),kN=Zo(),IN=Dt(),iu=ce.setImmediate,ou=ce.clearImmediate,_N=ce.process,eu=ce.Dispatch,PN=ce.Function,Ah=ce.MessageChannel,RN=ce.String,ru=0,Bt={},Nh="onreadystatechange",Gt,Er,tu,nu;Lh(function(){Gt=ce.location});var uu=function(e){if(TN(Bt,e)){var r=Bt[e];delete Bt[e],r()}},au=function(e){return function(){uu(e)}},Mh=function(e){uu(e.data)},jh=function(e){ce.postMessage(RN(e),Gt.protocol+"//"+Gt.host)};(!iu||!ou)&&(iu=function(r){ON(arguments.length,1);var t=_h(r)?r:PN(r),n=CN(arguments,1);return Bt[++ru]=function(){SN(t,void 0,n)},Er(ru),ru},ou=function(r){delete Bt[r]},IN?Er=function(e){_N.nextTick(au(e))}:eu&&eu.now?Er=function(e){eu.now(au(e))}:Ah&&!kN?(tu=new Ah,nu=tu.port2,tu.port1.onmessage=Mh,Er=EN(nu.postMessage,nu)):ce.addEventListener&&_h(ce.postMessage)&&!ce.importScripts&&Gt&&Gt.protocol!=="file:"&&!Lh(jh)?(Er=jh,ce.addEventListener("message",Mh,!1)):Nh in Rh("script")?Er=function(e){Ph.appendChild(Rh("script"))[Nh]=function(){Ph.removeChild(this),uu(e)}}:Er=function(e){setTimeout(au(e),0)});$h.exports={set:iu,clear:ou}});var Bh=i((UW,Dh)=>{"use strict";var Fh=P(),AN=H(),NN=Object.getOwnPropertyDescriptor;Dh.exports=function(e){if(!AN)return Fh[e];var r=NN(Fh,e);return r&&r.value}});var cu=i((HW,Uh)=>{"use strict";var Gh=function(){this.head=null,this.tail=null};Gh.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Uh.exports=Gh});var Wh=i((WW,Hh)=>{"use strict";var MN=Lr();Hh.exports=/ipad|iphone|ipod/i.test(MN)&&typeof Pebble<"u"});var zh=i((KW,Kh)=>{"use strict";var jN=Lr();Kh.exports=/web0s(?!.*chrome)/i.test(jN)});var ey=i((zW,Zh)=>{"use strict";var et=P(),LN=Bh(),Vh=Y(),lu=su().set,$N=cu(),FN=Zo(),DN=Wh(),BN=zh(),fu=Dt(),Yh=et.MutationObserver||et.WebKitMutationObserver,Jh=et.document,Qh=et.process,ma=et.Promise,du=LN("queueMicrotask"),Zr,pu,vu,ha,Xh;du||(Ut=new $N,Ht=function(){var e,r;for(fu&&(e=Qh.domain)&&e.exit();r=Ut.get();)try{r()}catch(t){throw Ut.head&&Zr(),t}e&&e.enter()},!FN&&!fu&&!BN&&Yh&&Jh?(pu=!0,vu=Jh.createTextNode(""),new Yh(Ht).observe(vu,{characterData:!0}),Zr=function(){vu.data=pu=!pu}):!DN&&ma&&ma.resolve?(ha=ma.resolve(void 0),ha.constructor=ma,Xh=Vh(ha.then,ha),Zr=function(){Xh(Ht)}):fu?Zr=function(){Qh.nextTick(Ht)}:(lu=Vh(lu,et),Zr=function(){lu(Ht)}),du=function(e){Ut.head||Zr(),Ut.add(e)});var Ut,Ht;Zh.exports=du});var ty=i((VW,ry)=>{"use strict";ry.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var Tr=i((YW,ny)=>{"use strict";ny.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var Cr=i((JW,ay)=>{"use strict";var GN=P();ay.exports=GN.Promise});var rt=i((QW,sy)=>{"use strict";var UN=P(),Wt=Cr(),HN=M(),WN=xi(),KN=ki(),zN=R(),iy=Yo(),VN=Z(),mu=$r(),oy=Wt&&Wt.prototype,YN=zN("species"),hu=!1,uy=HN(UN.PromiseRejectionEvent),JN=WN("Promise",function(){var e=KN(Wt),r=e!==String(Wt);if(!r&&mu===66||VN&&!(oy.catch&&oy.finally))return!0;if(!mu||mu<51||!/native code/.test(e)){var t=new Wt(function(o){o(1)}),n=function(o){o(function(){},function(){})},a=t.constructor={};if(a[YN]=n,hu=t.then(function(){})instanceof n,!hu)return!0}return!r&&(iy==="BROWSER"||iy==="DENO")&&!uy});sy.exports={CONSTRUCTOR:JN,REJECTION_EVENT:uy,SUBCLASSING:hu}});var ke=i((XW,ly)=>{"use strict";var cy=D(),QN=TypeError,XN=function(e){var r,t;this.promise=new e(function(n,a){if(r!==void 0||t!==void 0)throw new QN("Bad Promise constructor");r=n,t=a}),this.resolve=cy(r),this.reject=cy(t)};ly.exports.f=function(e){return new XN(e)}});var _y=i(()=>{"use strict";var ZN=q(),eM=Z(),qa=Dt(),nr=P(),rM=V(),it=G(),fy=Me(),py=Ot(),tM=Le(),nM=Jo(),aM=D(),ga=M(),iM=$(),oM=da(),uM=Xo(),yy=su().set,xu=ey(),sM=ty(),cM=Tr(),lM=cu(),by=Ze(),xa=Cr(),wu=rt(),gy=ke(),wa="Promise",qy=wu.CONSTRUCTOR,fM=wu.REJECTION_EVENT,pM=wu.SUBCLASSING,yu=by.getterFor(wa),vM=by.set,tt=xa&&xa.prototype,Or=xa,ya=tt,xy=nr.TypeError,bu=nr.document,Su=nr.process,gu=gy.f,dM=gu,mM=!!(bu&&bu.createEvent&&nr.dispatchEvent),wy="unhandledrejection",hM="rejectionhandled",vy=0,Sy=1,yM=2,Eu=1,Ey=2,ba,dy,Ty,my,Cy=function(e){var r;return iM(e)&&ga(r=e.then)?r:!1},Oy=function(e,r){var t=r.value,n=r.state===Sy,a=n?e.ok:e.fail,o=e.resolve,u=e.reject,c=e.domain,s,l,f;try{a?(n||(r.rejection===Ey&&gM(r),r.rejection=Eu),a===!0?s=t:(c&&c.enter(),s=a(t),c&&(c.exit(),f=!0)),s===e.promise?u(new xy("Promise-chain cycle")):(l=Cy(s))?it(l,s,o,u):o(s)):u(t)}catch(p){c&&!f&&c.exit(),u(p)}},ky=function(e,r){e.notified||(e.notified=!0,xu(function(){for(var t=e.reactions,n;n=t.get();)Oy(n,e);e.notified=!1,r&&!e.rejection&&bM(e)}))},Iy=function(e,r,t){var n,a;mM?(n=bu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),nr.dispatchEvent(n)):n={promise:r,reason:t},!fM&&(a=nr["on"+e])?a(n):e===wy&&sM("Unhandled promise rejection",t)},bM=function(e){it(yy,nr,function(){var r=e.facade,t=e.value,n=hy(e),a;if(n&&(a=cM(function(){qa?Su.emit("unhandledRejection",t,r):Iy(wy,r,t)}),e.rejection=qa||hy(e)?Ey:Eu,a.error))throw a.value})},hy=function(e){return e.rejection!==Eu&&!e.parent},gM=function(e){it(yy,nr,function(){var r=e.facade;qa?Su.emit("rejectionHandled",r):Iy(hM,r,e.value)})},nt=function(e,r,t){return function(n){e(r,n,t)}},at=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=yM,ky(e,!0))},qu=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new xy("Promise can't be resolved itself");var n=Cy(r);n?xu(function(){var a={done:!1};try{it(n,r,nt(qu,a,e),nt(at,a,e))}catch(o){at(a,o,e)}}):(e.value=r,e.state=Sy,ky(e,!1))}catch(a){at({done:!1},a,e)}}};if(qy&&(Or=function(r){oM(this,ya),aM(r),it(ba,this);var t=yu(this);try{r(nt(qu,t),nt(at,t))}catch(n){at(t,n)}},ya=Or.prototype,ba=function(r){vM(this,{type:wa,done:!1,notified:!1,parent:!1,reactions:new lM,rejection:!1,state:vy,value:null})},ba.prototype=fy(ya,"then",function(r,t){var n=yu(this),a=gu(uM(this,Or));return n.parent=!0,a.ok=ga(r)?r:!0,a.fail=ga(t)&&t,a.domain=qa?Su.domain:void 0,n.state===vy?n.reactions.add(a):xu(function(){Oy(a,n)}),a.promise}),dy=function(){var e=new ba,r=yu(e);this.promise=e,this.resolve=nt(qu,r),this.reject=nt(at,r)},gy.f=gu=function(e){return e===Or||e===Ty?new dy(e):dM(e)},!eM&&ga(xa)&&tt!==Object.prototype)){my=tt.then,pM||fy(tt,"then",function(r,t){var n=this;return new Or(function(a,o){it(my,n,a,o)}).then(r,t)},{unsafe:!0});try{delete tt.constructor}catch{}py&&py(tt,ya)}ZN({global:!0,constructor:!0,wrap:!0,forced:qy},{Promise:Or});Ty=rM.Promise;tM(Or,wa,!1,!0);nM(wa)});var Kt=i((rK,Py)=>{"use strict";var qM=Cr(),xM=io(),wM=rt().CONSTRUCTOR;Py.exports=wM||!xM(function(e){qM.all(e).then(void 0,function(){})})});var Ry=i(()=>{"use strict";var SM=q(),EM=G(),TM=D(),CM=ke(),OM=Tr(),kM=me(),IM=Kt();SM({target:"Promise",stat:!0,forced:IM},{all:function(r){var t=this,n=CM.f(t),a=n.resolve,o=n.reject,u=OM(function(){var c=TM(t.resolve),s=[],l=0,f=1;kM(r,function(p){var v=l++,d=!1;f++,EM(c,t,p).then(function(h){d||(d=!0,s[v]=h,--f||a(s))},o)}),--f||a(s)});return u.error&&o(u.value),n.promise}})});var Ny=i(()=>{"use strict";var _M=q(),PM=Z(),RM=rt().CONSTRUCTOR,Cu=Cr(),AM=W(),NM=M(),MM=Me(),Ay=Cu&&Cu.prototype;_M({target:"Promise",proto:!0,forced:RM,real:!0},{catch:function(e){return this.then(void 0,e)}});!PM&&NM(Cu)&&(Tu=AM("Promise").prototype.catch,Ay.catch!==Tu&&MM(Ay,"catch",Tu,{unsafe:!0}));var Tu});var My=i(()=>{"use strict";var jM=q(),LM=G(),$M=D(),FM=ke(),DM=Tr(),BM=me(),GM=Kt();jM({target:"Promise",stat:!0,forced:GM},{race:function(r){var t=this,n=FM.f(t),a=n.reject,o=DM(function(){var u=$M(t.resolve);BM(r,function(c){LM(u,t,c).then(n.resolve,a)})});return o.error&&a(o.value),n.promise}})});var jy=i(()=>{"use strict";var UM=q(),HM=ke(),WM=rt().CONSTRUCTOR;UM({target:"Promise",stat:!0,forced:WM},{reject:function(r){var t=HM.f(this),n=t.reject;return n(r),t.promise}})});var Ou=i((lK,Ly)=>{"use strict";var KM=X(),zM=$(),VM=ke();Ly.exports=function(e,r){if(KM(e),zM(r)&&r.constructor===e)return r;var t=VM.f(e),n=t.resolve;return n(r),t.promise}});var Dy=i(()=>{"use strict";var YM=q(),JM=W(),$y=Z(),QM=Cr(),Fy=rt().CONSTRUCTOR,XM=Ou(),ZM=JM("Promise"),ej=$y&&!Fy;YM({target:"Promise",stat:!0,forced:$y||Fy},{resolve:function(r){return XM(ej&&this===ZM?QM:this,r)}})});var By=i(()=>{"use strict";_y();Ry();Ny();My();jy();Dy()});var ku=i(()=>{"use strict";var rj=q(),tj=G(),nj=D(),aj=ke(),ij=Tr(),oj=me(),uj=Kt();rj({target:"Promise",stat:!0,forced:uj},{allSettled:function(r){var t=this,n=aj.f(t),a=n.resolve,o=n.reject,u=ij(function(){var c=nj(t.resolve),s=[],l=0,f=1;oj(r,function(p){var v=l++,d=!1;f++,tj(c,t,p).then(function(h){d||(d=!0,s[v]={status:"fulfilled",value:h},--f||a(s))},function(h){d||(d=!0,s[v]={status:"rejected",reason:h},--f||a(s))})}),--f||a(s)});return u.error&&o(u.value),n.promise}})});var Iu=i(()=>{"use strict";var sj=q(),cj=G(),lj=D(),fj=W(),pj=ke(),vj=Tr(),dj=me(),mj=Kt(),Gy="No one promise resolved";sj({target:"Promise",stat:!0,forced:mj},{any:function(r){var t=this,n=fj("AggregateError"),a=pj.f(t),o=a.resolve,u=a.reject,c=vj(function(){var s=lj(t.resolve),l=[],f=0,p=1,v=!1;dj(r,function(d){var h=f++,m=!1;p++,cj(s,t,d).then(function(x){m||v||(v=!0,o(x))},function(x){m||v||(m=!0,l[h]=x,--p||u(new n(l,Gy)))})}),--p||u(new n(l,Gy))});return c.error&&u(c.value),a.promise}})});var Pu=i(()=>{"use strict";var hj=q(),yj=P(),bj=jr(),gj=mr(),qj=ke(),xj=D(),Hy=Tr(),_u=yj.Promise,Uy=!1,wj=!_u||!_u.try||Hy(function(){_u.try(function(e){Uy=e===8},8)}).error||!Uy;hj({target:"Promise",stat:!0,forced:wj},{try:function(e){var r=arguments.length>1?gj(arguments,1):[],t=qj.f(this),n=Hy(function(){return bj(xj(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var Ru=i(()=>{"use strict";var Sj=q(),Ej=ke();Sj({target:"Promise",stat:!0},{withResolvers:function(){var r=Ej.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var Vy=i(()=>{"use strict";var Tj=q(),Cj=Z(),Sa=Cr(),Oj=_(),Ky=W(),zy=M(),kj=Xo(),Wy=Ou(),Ij=Me(),Nu=Sa&&Sa.prototype,_j=!!Sa&&Oj(function(){Nu.finally.call({then:function(){}},function(){})});Tj({target:"Promise",proto:!0,real:!0,forced:_j},{finally:function(e){var r=kj(this,Ky("Promise")),t=zy(e);return this.then(t?function(n){return Wy(r,e()).then(function(){return n})}:e,t?function(n){return Wy(r,e()).then(function(){throw n})}:e)}});!Cj&&zy(Sa)&&(Au=Ky("Promise").prototype.finally,Nu.finally!==Au&&Ij(Nu,"finally",Au,{unsafe:!0}));var Au});var Jy=i((TK,Yy)=>{"use strict";Vo();wr();Rt();By();ku();Iu();Pu();Ru();Vy();br();var Pj=V();Yy.exports=Pj.Promise});var Xy=i((CK,Qy)=>{"use strict";var Rj=Jy();Sr();Qy.exports=Rj});var Zy=i(()=>{"use strict";Pu()});var eb=i(()=>{"use strict";Ru()});var tb=i((PK,rb)=>{"use strict";var Aj=Xy();Zy();eb();rb.exports=Aj});var nb=i(()=>{"use strict";Vo()});var ab=i(()=>{"use strict";ku()});var ib=i(()=>{"use strict";Iu()});var ub=i(($K,ob)=>{"use strict";var Nj=tb();nb();ab();ib();ob.exports=Nj});var ot=i((FK,sb)=>{"use strict";sb.exports=ub()});var fb=i((HK,lb)=>{"use strict";Ao();var Mj=Vr();lb.exports=Mj.f("asyncIterator")});var vb=i((WK,pb)=>{"use strict";var jj=fb();pb.exports=jj});var mb=i((KK,db)=>{"use strict";var Lj=vb();db.exports=Lj});var yb=i((zK,hb)=>{"use strict";var $j=mb();hb.exports=$j});var Ea=i((VK,bb)=>{"use strict";bb.exports=yb()});var wb=i(()=>{"use strict";var Fj=q(),Dj=_(),Bj=te(),xb=Ct(),Gj=Yi(),Uj=Dj(function(){xb(1)});Fj({target:"Object",stat:!0,forced:Uj,sham:!Gj},{getPrototypeOf:function(r){return xb(Bj(r))}})});var Eb=i((ZK,Sb)=>{"use strict";wb();var Hj=V();Sb.exports=Hj.Object.getPrototypeOf});var Cb=i((ez,Tb)=>{"use strict";var Wj=Eb();Tb.exports=Wj});var kb=i((rz,Ob)=>{"use strict";var Kj=Cb();Ob.exports=Kj});var _b=i((tz,Ib)=>{"use strict";var zj=kb();Ib.exports=zj});var Ta=i((nz,Pb)=>{"use strict";Pb.exports=_b()});var Ab=i(()=>{"use strict";var Vj=q(),Yj=N(),Jj=Ne(),Qj=Yj([].reverse),Rb=[1,2];Vj({target:"Array",proto:!0,forced:String(Rb)===String(Rb.reverse())},{reverse:function(){return Jj(this)&&(this.length=this.length),Qj(this)}})});var Mb=i((oz,Nb)=>{"use strict";Ab();var Xj=se();Nb.exports=Xj("Array","reverse")});var Lb=i((uz,jb)=>{"use strict";var Zj=U(),eL=Mb(),Lu=Array.prototype;jb.exports=function(e){var r=e.reverse;return e===Lu||Zj(Lu,e)&&r===Lu.reverse?eL:r}});var Fb=i((sz,$b)=>{"use strict";var rL=Lb();$b.exports=rL});var Bb=i((cz,Db)=>{"use strict";var tL=Fb();Db.exports=tL});var Ub=i((lz,Gb)=>{"use strict";var nL=Bb();Gb.exports=nL});var Wb=i((fz,Hb)=>{"use strict";Hb.exports=Ub()});var $u=i((pz,Yt)=>{function aL(e,r){this.v=e,this.k=r}Yt.exports=aL,Yt.exports.__esModule=!0,Yt.exports.default=Yt.exports});var Kb=i(()=>{"use strict";var iL=q(),oL=H(),uL=er();iL({target:"Object",stat:!0,sham:!oL},{create:uL})});var Vb=i((mz,zb)=>{"use strict";Kb();var sL=V(),cL=sL.Object;zb.exports=function(r,t){return cL.create(r,t)}});var Jb=i((hz,Yb)=>{"use strict";var lL=Vb();Yb.exports=lL});var Xb=i((yz,Qb)=>{"use strict";var fL=Jb();Qb.exports=fL});var eg=i((bz,Zb)=>{"use strict";var pL=Xb();Zb.exports=pL});var Ca=i((gz,rg)=>{"use strict";rg.exports=eg()});var Du=i((qz,ig)=>{"use strict";var ng=N(),vL=D(),dL=$(),mL=K(),tg=mr(),hL=Mr(),ag=Function,yL=ng([].concat),bL=ng([].join),Fu={},gL=function(e,r,t){if(!mL(Fu,r)){for(var n=[],a=0;a<r;a++)n[a]="a["+a+"]";Fu[r]=ag("C,a","return new C("+bL(n,",")+")")}return Fu[r](e,t)};ig.exports=hL?ag.bind:function(r){var t=vL(this),n=t.prototype,a=tg(arguments,1),o=function(){var c=yL(a,tg(arguments));return this instanceof o?gL(t,c.length,c):t.apply(r,c)};return dL(n)&&(o.prototype=n),o}});var ug=i(()=>{"use strict";var qL=q(),og=Du();qL({target:"Function",proto:!0,forced:Function.bind!==og},{bind:og})});var cg=i((Sz,sg)=>{"use strict";ug();var xL=se();sg.exports=xL("Function","bind")});var fg=i((Ez,lg)=>{"use strict";var wL=U(),SL=cg(),Bu=Function.prototype;lg.exports=function(e){var r=e.bind;return e===Bu||wL(Bu,e)&&r===Bu.bind?SL:r}});var vg=i((Tz,pg)=>{"use strict";var EL=fg();pg.exports=EL});var mg=i((Cz,dg)=>{"use strict";var TL=vg();dg.exports=TL});var yg=i((Oz,hg)=>{"use strict";var CL=mg();hg.exports=CL});var Jt=i((kz,bg)=>{"use strict";bg.exports=yg()});var gg=i(()=>{"use strict";var OL=q(),kL=Ot();OL({target:"Object",stat:!0},{setPrototypeOf:kL})});var xg=i((Pz,qg)=>{"use strict";gg();var IL=V();qg.exports=IL.Object.setPrototypeOf});var Sg=i((Rz,wg)=>{"use strict";var _L=xg();wg.exports=_L});var Tg=i((Az,Eg)=>{"use strict";var PL=Sg();Eg.exports=PL});var Og=i((Nz,Cg)=>{"use strict";var RL=Tg();Cg.exports=RL});var Oa=i((Mz,kg)=>{"use strict";kg.exports=Og()});var _g=i(()=>{"use strict";var AL=q(),NL=H(),Ig=ne().f;AL({target:"Object",stat:!0,forced:Object.defineProperty!==Ig,sham:!NL},{defineProperty:Ig})});var Ag=i(($z,Rg)=>{"use strict";_g();var ML=V(),Pg=ML.Object,jL=Rg.exports=function(r,t,n){return Pg.defineProperty(r,t,n)};Pg.defineProperty.sham&&(jL.sham=!0)});var Mg=i((Fz,Ng)=>{"use strict";var LL=Ag();Ng.exports=LL});var Lg=i((Dz,jg)=>{"use strict";var $L=Mg();jg.exports=$L});var Fg=i((Bz,$g)=>{"use strict";var FL=Lg();$g.exports=FL});var Qt=i((Gz,Dg)=>{"use strict";Dg.exports=Fg()});var Gu=i((Uz,Fe)=>{var DL=Qt();function ka(e,r,t,n){var a=DL;try{a({},"",{})}catch{a=0}Fe.exports=ka=function(u,c,s,l){function f(p,v){ka(u,p,function(d){return this._invoke(p,v,d)})}c?a?a(u,c,{value:s,enumerable:!l,configurable:!l,writable:!l}):u[c]=s:(f("next",0),f("throw",1),f("return",2))},Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports,ka(e,r,t,n)}Fe.exports=ka,Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports});var Hu=i((Hz,De)=>{var Bg=Oe(),Uu=Ca(),BL=Jt(),GL=Ta(),Gg=Oa(),_e=Gu();function Ug(){var e,r,t=typeof Bg=="function"?Bg:{},n=t.iterator||"@@iterator",a=t.toStringTag||"@@toStringTag";function o(d,h,m,x){var y=h&&h.prototype instanceof c?h:c,g=Uu(y.prototype);return _e(g,"_invoke",function(O,k,w){var E,S,C,L=0,Se=w||[],I=!1,re={p:0,n:0,v:e,a:Ee,f:BL(Ee).call(Ee,e,4),d:function(F,ye){return E=F,S=0,C=e,re.n=ye,u}};function Ee(Q,F){for(S=Q,C=F,r=0;!I&&L&&!ye&&r<Se.length;r++){var ye,T=Se[r],Nr=re.p,Ve=T[2];Q>3?(ye=Ve===F)&&(C=T[(S=T[4])?5:(S=3,3)],T[4]=T[5]=e):T[0]<=Nr&&((ye=Q<2&&Nr<T[1])?(S=0,re.v=F,re.n=T[1]):Nr<Ve&&(ye=Q<3||T[0]>F||F>Ve)&&(T[4]=Q,T[5]=F,re.n=Ve,S=0))}if(ye||Q>1)return u;throw I=!0,F}return function(Q,F,ye){if(L>1)throw TypeError("Generator is already running");for(I&&F===1&&Ee(F,ye),S=F,C=ye;(r=S<2?e:C)||!I;){E||(S?S<3?(S>1&&(re.n=-1),Ee(S,C)):re.n=C:re.v=C);try{if(L=2,E){if(S||(Q="next"),r=E[Q]){if(!(r=r.call(E,C)))throw TypeError("iterator result is not an object");if(!r.done)return r;C=r.value,S<2&&(S=0)}else S===1&&(r=E.return)&&r.call(E),S<2&&(C=TypeError("The iterator does not provide a '"+Q+"' method"),S=1);E=e}else if((r=(I=re.n<0)?C:O.call(k,re))!==u)break}catch(T){E=e,S=1,C=T}finally{L=1}}return{value:r,done:I}}}(d,m,x),!0),g}var u={};function c(){}function s(){}function l(){}r=GL;var f=[][n]?r(r([][n]())):(_e(r={},n,function(){return this}),r),p=l.prototype=c.prototype=Uu(f);function v(d){return Gg?Gg(d,l):(d.__proto__=l,_e(d,a,"GeneratorFunction")),d.prototype=Uu(p),d}return s.prototype=l,_e(p,"constructor",l),_e(l,"constructor",s),s.displayName="GeneratorFunction",_e(l,a,"GeneratorFunction"),_e(p),_e(p,a,"Generator"),_e(p,n,function(){return this}),_e(p,"toString",function(){return"[object Generator]"}),(De.exports=Ug=function(){return{w:o,m:v}},De.exports.__esModule=!0,De.exports.default=De.exports)()}De.exports=Ug,De.exports.__esModule=!0,De.exports.default=De.exports});var zu=i((Wz,Xt)=>{var UL=Oe(),HL=Ea(),WL=$u(),Wu=Gu();function Ku(e,r){function t(a,o,u,c){try{var s=e[a](o),l=s.value;return l instanceof WL?r.resolve(l.v).then(function(f){t("next",f,u,c)},function(f){t("throw",f,u,c)}):r.resolve(l).then(function(f){s.value=f,u(s)},function(f){return t("throw",f,u,c)})}catch(f){c(f)}}var n;this.next||(Wu(Ku.prototype),Wu(Ku.prototype,typeof UL=="function"&&HL||"@asyncIterator",function(){return this})),Wu(this,"_invoke",function(a,o,u){function c(){return new r(function(s,l){t(a,u,s,l)})}return n=n?n.then(c,c):c()},!0)}Xt.exports=Ku,Xt.exports.__esModule=!0,Xt.exports.default=Xt.exports});var Vu=i((Kz,Zt)=>{var KL=ot(),zL=Hu(),VL=zu();function YL(e,r,t,n,a){return new VL(zL().w(e,r,t,n),a||KL)}Zt.exports=YL,Zt.exports.__esModule=!0,Zt.exports.default=Zt.exports});var Hg=i((zz,en)=>{var JL=Vu();function QL(e,r,t,n,a){var o=JL(e,r,t,n,a);return o.next().then(function(u){return u.done?u.value:o.next()})}en.exports=QL,en.exports.__esModule=!0,en.exports.default=en.exports});var zg=i((Vz,Kg)=>{"use strict";var Wg=Qe(),XL=TypeError;Kg.exports=function(e,r){if(!delete e[r])throw new XL("Cannot delete property "+Wg(r)+" of "+Wg(e))}});var Vg=i(()=>{"use strict";var ZL=q(),e$=te(),r$=ve(),t$=Wr(),n$=zg(),a$=Pt(),i$=[].unshift(0)!==1,o$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},u$=i$||!o$();ZL({target:"Array",proto:!0,arity:1,forced:u$},{unshift:function(r){var t=e$(this),n=r$(t),a=arguments.length;if(a){a$(n+a);for(var o=n;o--;){var u=o+a;o in t?t[u]=t[o]:n$(t,u)}for(var c=0;c<a;c++)t[c]=arguments[c]}return t$(t,n+a)}})});var Jg=i((Qz,Yg)=>{"use strict";Vg();var s$=se();Yg.exports=s$("Array","unshift")});var Xg=i((Xz,Qg)=>{"use strict";var c$=U(),l$=Jg(),Yu=Array.prototype;Qg.exports=function(e){var r=e.unshift;return e===Yu||c$(Yu,e)&&r===Yu.unshift?l$:r}});var eq=i((Zz,Zg)=>{"use strict";var f$=Xg();Zg.exports=f$});var tq=i((eV,rq)=>{"use strict";var p$=eq();rq.exports=p$});var aq=i((rV,nq)=>{"use strict";var v$=tq();nq.exports=v$});var oq=i((tV,iq)=>{"use strict";iq.exports=aq()});var uq=i((nV,rn)=>{var d$=oq();function m$(e){var r=Object(e),t=[];for(var n in r)d$(t).call(t,n);return function a(){for(;t.length;)if((n=t.pop())in r)return a.value=n,a.done=!1,a;return a.done=!0,a}}rn.exports=m$,rn.exports.__esModule=!0,rn.exports.default=rn.exports});var cq=i((aV,sq)=>{"use strict";wr();Rt();br();Mo();var h$=Vr();sq.exports=h$.f("iterator")});var fq=i((iV,lq)=>{"use strict";var y$=cq();Sr();lq.exports=y$});var vq=i((oV,pq)=>{"use strict";var b$=fq();pq.exports=b$});var mq=i((uV,dq)=>{"use strict";var g$=vq();dq.exports=g$});var tn=i((sV,hq)=>{"use strict";hq.exports=mq()});var yq=i((cV,Be)=>{var Ia=Oe(),q$=tn();function Ju(e){"@babel/helpers - typeof";return Be.exports=Ju=typeof Ia=="function"&&typeof q$=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Ia=="function"&&r.constructor===Ia&&r!==Ia.prototype?"symbol":typeof r},Be.exports.__esModule=!0,Be.exports.default=Be.exports,Ju(e)}Be.exports=Ju,Be.exports.__esModule=!0,Be.exports.default=Be.exports});var bq=i((lV,nn)=>{var x$=yq().default,w$=Oe(),S$=tn();function E$(e){if(e!=null){var r=e[typeof w$=="function"&&S$||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(x$(e)+" is not iterable")}nn.exports=E$,nn.exports.__esModule=!0,nn.exports.default=nn.exports});var xq=i((fV,Ge)=>{var gq=Ta(),T$=Wb(),C$=$u(),O$=Hu(),k$=Hg(),I$=Vu(),_$=zu(),P$=uq(),qq=bq();function Qu(){"use strict";var e=O$(),r=e.m(Qu),t=(gq?gq(r):r.__proto__).constructor;function n(u){var c=typeof u=="function"&&u.constructor;return!!c&&(c===t||(c.displayName||c.name)==="GeneratorFunction")}var a={throw:1,return:2,break:3,continue:3};function o(u){var c,s;return function(l){c||(c={stop:function(){return s(l.a,2)},catch:function(){return l.v},abrupt:function(p,v){return s(l.a,a[p],v)},delegateYield:function(p,v,d){return c.resultName=v,s(l.d,qq(p),d)},finish:function(p){return s(l.f,p)}},s=function(p,v,d){l.p=c.prev,l.n=c.next;try{return p(v,d)}finally{c.next=l.n}}),c.resultName&&(c[c.resultName]=l.v,c.resultName=void 0),c.sent=l.v,c.next=l.n;try{return u.call(this,c)}finally{l.p=c.prev,l.n=c.next}}}return(Ge.exports=Qu=function(){return{wrap:function(s,l,f,p){return e.w(o(s),l,f,p&&T$(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(s,l){return new C$(s,l)},AsyncIterator:_$,async:function(s,l,f,p,v){return(n(l)?I$:k$)(o(s),l,f,p,v)},keys:P$,values:qq}},Ge.exports.__esModule=!0,Ge.exports.default=Ge.exports)()}Ge.exports=Qu,Ge.exports.__esModule=!0,Ge.exports.default=Ge.exports});var le=i((pV,wq)=>{var _a=xq()();wq.exports=_a;try{regeneratorRuntime=_a}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=_a:Function("r","regeneratorRuntime = r")(_a)}});var Xu=i((Ra,Eq)=>{"use strict";Object.defineProperty(Ra,"__esModule",{value:!0});var Pa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Sq=function(){function e(r,t){var n=[],a=!0,o=!1,u=void 0;try{for(var c=r[Symbol.iterator](),s;!(a=(s=c.next()).done)&&(n.push(s.value),!(t&&n.length===t));a=!0);}catch(l){o=!0,u=l}finally{try{!a&&c.return&&c.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Ra.default=R$;function R$(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(a){return a.type==="tag"||a.type==="script"||a.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var a=this.attribs,o=Object.keys(a),u=o.reduce(function(c,s,l){return c[l]={name:s,value:a[s]},c},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var a=[];return ir(this.childTags,function(o){(o.name===n||n==="*")&&a.push(o)}),a}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var a=n.trim().replace(/\s+/g," ").split(" "),o=[];return ir([this],function(u){var c=u.attribs.class;c&&a.every(function(s){return c.indexOf(s)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var a=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=A$(n),u=o.shift(),c=o.length;return u(this).filter(function(s){for(var l=0;l<c;){if(s=o[l](s,a),!s)return!1;l+=1}return!0})}),t.contains||(t.contains=function(n){var a=!1;return ir([this],function(o,u){o===n&&(a=!0,u())}),a}),!0}function A$(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,a=r.split(":"),o=Sq(a,2),u=o[0],c=o[1],s=null,l=null;if(function(){switch(!0){case/>/.test(u):l=function(w){return function(E){return E(w.parent)&&w.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");s=function(w){var E=w.attribs.class;return E&&h.every(function(S){return E.indexOf(S)>-1})},l=function(w,E){return n?w.getElementsByClassName(h.join(" ")):typeof w=="function"?w(s):an(w,E,s)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),x=Sq(m,2),y=x[0],g=x[1];s=function(w){var E=Object.keys(w.attribs).indexOf(y)>-1;return!!(E&&(!g||w.attribs[y]===g))},l=function(w,E){if(n){var S=function(){var C=[];return ir([w],function(L){s(L)&&C.push(L)}),{v:C}}();if((typeof S>"u"?"undefined":Pa(S))==="object")return S.v}return typeof w=="function"?w(s):an(w,E,s)};break;case/^#/.test(u):var O=u.substr(1);s=function(w){return w.attribs.id===O},l=function(w,E){if(n){var S=function(){var C=[];return ir([w],function(L,Se){s(L)&&(C.push(L),Se())}),{v:C}}();if((typeof S>"u"?"undefined":Pa(S))==="object")return S.v}return typeof w=="function"?w(s):an(w,E,s)};break;case/\*/.test(u):s=function(w){return!0},l=function(w,E){if(n){var S=function(){var C=[];return ir([w],function(L){return C.push(L)}),{v:C}}();if((typeof S>"u"?"undefined":Pa(S))==="object")return S.v}return typeof w=="function"?w(s):an(w,E,s)};break;default:s=function(w){return w.name===u},l=function(w,E){if(n){var S=function(){var C=[];return ir([w],function(L){s(L)&&C.push(L)}),{v:C}}();if((typeof S>"u"?"undefined":Pa(S))==="object")return S.v}return typeof w=="function"?w(s):an(w,E,s)}}}(),!c)return l;var f=c.match(/-(child|type)\((\d+)\)$/),p=f[1],v=parseInt(f[2],10)-1,d=function(m){if(m){var x=m.parent.childTags;p==="type"&&(x=x.filter(s));var y=x.findIndex(function(g){return g===m});if(y===v)return!0}return!1};return function(m){var x=l(m);return n?x.reduce(function(y,g){return d(g)&&y.push(g),y},[]):d(x)&&x}})}function ir(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&ir(t.childTags,r)})}function an(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}Eq.exports=Ra.default});var Na=i(Aa=>{"use strict";Object.defineProperty(Aa,"__esModule",{value:!0});Aa.convertNodeList=N$;Aa.escapeValue=M$;function N$(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function M$(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var Nq=i((Ma,Aq)=>{"use strict";Object.defineProperty(Ma,"__esModule",{value:!0});Ma.default=j$;var kq=Na(),Tq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function j$(e,r){var t=r.root,n=t===void 0?document:t,a=r.skip,o=a===void 0?null:a,u=r.priority,c=u===void 0?["id","class","href","src"]:u,s=r.ignore,l=s===void 0?{}:s,f=[],p=e,v=f.length,d=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(y){return typeof y!="function"?function(g){return g===y}:y}),m=function(g){return o&&h.some(function(O){return O(g)})};for(Object.keys(l).forEach(function(y){y==="class"&&(d=!0);var g=l[y];typeof g!="function"&&(typeof g=="number"&&(g=g.toString()),typeof g=="string"&&(g=new RegExp((0,kq.escapeValue)(g).replace(/\\/g,"\\\\"))),typeof g=="boolean"&&(g=g?/(?:)/:/.^/),l[y]=function(O,k){return g.test(k)})}),d&&function(){var y=l.attribute;l.attribute=function(g,O,k){return l.class(O)||y&&y(g,O,k)}}();p!==n;){if(m(p)!==!0){if(Cq(c,p,l,f,n)||Oq(p,l,f,n))break;Cq(c,p,l,f),f.length===v&&Oq(p,l,f),f.length===v&&L$(c,p,l,f)}p=p.parentNode,v=f.length}if(p===n){var x=Pq(c,p,l);f.unshift(x)}return f.join(" ")}function Cq(e,r,t,n){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=Iq(e,r,t);if(o){var u=a.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function Iq(e,r,t){for(var n=r.attributes,a=Object.keys(n).sort(function(m,x){var y=e.indexOf(n[m].name),g=e.indexOf(n[x].name);return g===-1?y===-1?0:-1:y-g}),o=0,u=a.length;o<u;o++){var c=a[o],s=n[c],l=s.name,f=(0,kq.escapeValue)(s.value),p=t[l]||t.attribute,v=Tq[l]||Tq.attribute;if(!Rq(p,l,f,v)){var d="["+l+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(l==="id"&&(d="#"+f),l==="class")){var h=f.trim().replace(/\s+/g,".");d="."+h}return d}}return null}function Oq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,a=_q(e,r);if(a){var o=n.getElementsByTagName(a);if(o.length===1)return t.unshift(a),!0}return!1}function _q(e,r){var t=e.tagName.toLowerCase();return Rq(r.tag,null,t)?null:t}function L$(e,r,t,n){for(var a=r.parentNode,o=a.childTags||a.children,u=0,c=o.length;u<c;u++){var s=o[u];if(s===r){var l=Pq(e,s,t);if(!l)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,s,t,l);var f="> "+l+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function Pq(e,r,t){var n=Iq(e,r,t);return n||(n=_q(r,t)),n}function Rq(e,r,t,n){if(!t)return!0;var a=e||n;return a?a(r,t,n):!1}Aq.exports=Ma.default});var Zu=i((La,Mq)=>{"use strict";Object.defineProperty(La,"__esModule",{value:!0});La.default=G$;var $$=Xu(),F$=B$($$),D$=Na();function B$(e){return e&&e.__esModule?e:{default:e}}function G$(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,D$.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,F$.default)(r[0],t),a=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(a.length<2)return ja("",e,"",r);for(var o=[a.pop()];a.length>1;){var u=a.pop(),c=a.join(" "),s=o.join(" "),l=c+" "+s,f=document.querySelectorAll(l);f.length!==r.length&&o.unshift(ja(c,u,s,r))}return o.unshift(a[0]),a=o,a[0]=ja("",a[0],a.slice(1).join(" "),r),a[a.length-1]=ja(a.slice(0,-1).join(" "),a[a.length-1],"",r),n&&delete global.document,a.join(" ").replace(/>/g,"> ").trim()}function ja(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var a=r.replace(/=.*$/,"]"),o=""+e+a+t,u=document.querySelectorAll(o);if(ut(u,n))r=a;else for(var c=document.querySelectorAll(""+e+a),s=function(){var k=c[l];if(n.some(function(E){return k.contains(E)})){var w=k.tagName.toLowerCase();return o=""+e+w+t,u=document.querySelectorAll(o),ut(u,n)&&(r=w),"break"}},l=0,f=c.length;l<f;l++){var o,u,p=s();if(p==="break")break}}if(/>/.test(r)){var v=r.replace(/>/,""),o=""+e+v+t,u=document.querySelectorAll(o);ut(u,n)&&(r=v)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);ut(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(O){return"."+O}).sort(function(O,k){return O.length-k.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);ut(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var x=document.querySelectorAll(""+e+r),y=function(){var k=x[l];if(n.some(function(E){return k.contains(E)})){var w=k.tagName.toLowerCase();return o=""+e+w+t,u=document.querySelectorAll(o),ut(u,n)&&(r=w),"break"}},l=0,f=x.length;l<f;l++){var o,u,g=y();if(g==="break")break}}return r}function ut(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var a=0;a<t;a++)if(e[a]===n)return!0;return!1})}Mq.exports=La.default});var es=i($a=>{"use strict";Object.defineProperty($a,"__esModule",{value:!0});$a.getCommonAncestor=U$;$a.getCommonProperties=H$;function U$(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,a=[];e.forEach(function(p,v){for(var d=[];p!==n;)p=p.parentNode,d.unshift(p);a[v]=d}),a.sort(function(p,v){return p.length-v.length});for(var o=a.shift(),u=null,c=function(){var v=o[s],d=a.some(function(h){return!h.some(function(m){return m===v})});if(d)return"break";u=v},s=0,l=o.length;s<l;s++){var f=c();if(f==="break")break}return u}function H$(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,a=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(s){return u.some(function(l){return l===s})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(a!==void 0&&function(){var s=t.attributes,l=Object.keys(s).reduce(function(v,d){var h=s[d],m=h.name;return h&&m!=="class"&&(v[m]=h.value),v},{}),f=Object.keys(l),p=Object.keys(a);f.length?p.length?(a=p.reduce(function(v,d){var h=a[d];return h===l[d]&&(v[d]=h),v},{}),Object.keys(a).length?r.attributes=a:delete r.attributes):r.attributes=l:delete r.attributes}(),o!==void 0){var c=t.tagName.toLowerCase();o?c!==o&&delete r.tag:r.tag=c}}),r}});var Bq=i(on=>{"use strict";Object.defineProperty(on,"__esModule",{value:!0});var W$=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};on.getSingleSelector=ts;on.getMultiSelector=Dq;on.default=Q$;var K$=Xu(),Lq=rs(K$),z$=Nq(),V$=rs(z$),Y$=Zu(),$q=rs(Y$),jq=Na(),Fq=es();function rs(e){return e&&e.__esModule?e:{default:e}}function ts(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":W$(e))+'")');var t=(0,Lq.default)(e,r),n=(0,V$.default)(e,r),a=(0,$q.default)(n,e,r);return t&&delete global.document,a}function Dq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,jq.convertNodeList)(e)),e.some(function(l){return l.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,Lq.default)(e[0],r),n=(0,Fq.getCommonAncestor)(e,r),a=ts(n,r),o=J$(e),u=o[0],c=(0,$q.default)(a+" "+u,e,r),s=(0,jq.convertNodeList)(document.querySelectorAll(c));return e.every(function(l){return s.some(function(f){return f===l})})?(t&&delete global.document,c):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function J$(e){var r=(0,Fq.getCommonProperties)(e),t=r.classes,n=r.attributes,a=r.tag,o=[];if(a&&o.push(a),t){var u=t.map(function(s){return"."+s}).join("");o.push(u)}if(n){var c=Object.keys(n).reduce(function(s,l){return s.push("["+l+'="'+n[l]+'"]'),s},[]).join("");o.push(c)}return o.length,[o.join("")]}function Q$(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?Dq(e,r):ts(e,r)}});var Hq=i(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.default=ie.common=ie.optimize=ie.getMultiSelector=ie.getSingleSelector=ie.select=void 0;var ns=Bq();Object.defineProperty(ie,"getSingleSelector",{enumerable:!0,get:function(){return ns.getSingleSelector}});Object.defineProperty(ie,"getMultiSelector",{enumerable:!0,get:function(){return ns.getMultiSelector}});var Gq=Uq(ns),X$=Zu(),Z$=Uq(X$),eF=es(),rF=tF(eF);function tF(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Uq(e){return e&&e.__esModule?e:{default:e}}ie.select=Gq.default;ie.optimize=Z$.default;ie.common=rF;ie.default=Gq.default});var Wq=i(()=>{"use strict";var pF=q(),vF=Ne();pF({target:"Array",stat:!0},{isArray:vF})});var zq=i((IV,Kq)=>{"use strict";Wq();var dF=V();Kq.exports=dF.Array.isArray});var Yq=i((_V,Vq)=>{"use strict";var mF=zq();Vq.exports=mF});var Qq=i((PV,Jq)=>{"use strict";var hF=Yq();Jq.exports=hF});var Zq=i((RV,Xq)=>{"use strict";var yF=Qq();Xq.exports=yF});var rx=i((AV,ex)=>{"use strict";ex.exports=Zq()});var ax=i(()=>{"use strict";var bF=q(),gF=te(),qF=ve(),xF=Wr(),wF=Pt(),SF=_(),EF=SF(function(){return[].push.call({length:4294967296},1)!==4294967297}),TF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},CF=EF||!TF();bF({target:"Array",proto:!0,arity:1,forced:CF},{push:function(r){var t=gF(this),n=qF(t),a=arguments.length;wF(n+a);for(var o=0;o<a;o++)t[n]=arguments[o],n++;return xF(t,n),n}})});var ox=i((LV,ix)=>{"use strict";ax();var OF=se();ix.exports=OF("Array","push")});var sx=i(($V,ux)=>{"use strict";var kF=U(),IF=ox(),as=Array.prototype;ux.exports=function(e){var r=e.push;return e===as||kF(as,e)&&r===as.push?IF:r}});var lx=i((FV,cx)=>{"use strict";var _F=sx();cx.exports=_F});var px=i((DV,fx)=>{"use strict";var PF=lx();fx.exports=PF});var dx=i((BV,vx)=>{"use strict";var RF=px();vx.exports=RF});var is=i((GV,mx)=>{"use strict";mx.exports=dx()});var Cx=i(()=>{"use strict";var AF=q(),NF=Nt().map,MF=St(),jF=MF("map");AF({target:"Array",proto:!0,forced:!jF},{map:function(r){return NF(this,r,arguments.length>1?arguments[1]:void 0)}})});var kx=i((h9,Ox)=>{"use strict";Cx();var LF=se();Ox.exports=LF("Array","map")});var _x=i((y9,Ix)=>{"use strict";var $F=U(),FF=kx(),us=Array.prototype;Ix.exports=function(e){var r=e.map;return e===us||$F(us,e)&&r===us.map?FF:r}});var Rx=i((b9,Px)=>{"use strict";var DF=_x();Px.exports=DF});var Nx=i((g9,Ax)=>{"use strict";var BF=Rx();Ax.exports=BF});var jx=i((q9,Mx)=>{"use strict";var GF=Nx();Mx.exports=GF});var $x=i((x9,Lx)=>{"use strict";Lx.exports=jx()});var Dx=i((w9,Fx)=>{Fx.exports=$x()});var Gx=i((S9,Bx)=>{Bx.exports=ot()});var zx=i((E9,Kx)=>{"use strict";var UF=D(),HF=te(),WF=Tn(),KF=ve(),Ux=TypeError,Hx="Reduce of empty array with no initial value",Wx=function(e){return function(r,t,n,a){var o=HF(r),u=WF(o),c=KF(o);if(UF(t),c===0&&n<2)throw new Ux(Hx);var s=e?c-1:0,l=e?-1:1;if(n<2)for(;;){if(s in u){a=u[s],s+=l;break}if(s+=l,e?s<0:c<=s)throw new Ux(Hx)}for(;e?s>=0:c>s;s+=l)s in u&&(a=t(a,u[s],s,o));return a}};Kx.exports={left:Wx(!1),right:Wx(!0)}});var ss=i((T9,Vx)=>{"use strict";var zF=_();Vx.exports=function(e,r){var t=[][e];return!!t&&zF(function(){t.call(null,r||function(){return 1},1)})}});var Jx=i(()=>{"use strict";var VF=q(),YF=zx().left,JF=ss(),Yx=$r(),QF=Dt(),XF=!QF&&Yx>79&&Yx<83,ZF=XF||!JF("reduce");VF({target:"Array",proto:!0,forced:ZF},{reduce:function(r){var t=arguments.length;return YF(this,r,t,t>1?arguments[1]:void 0)}})});var Xx=i((k9,Qx)=>{"use strict";Jx();var eD=se();Qx.exports=eD("Array","reduce")});var ew=i((I9,Zx)=>{"use strict";var rD=U(),tD=Xx(),cs=Array.prototype;Zx.exports=function(e){var r=e.reduce;return e===cs||rD(cs,e)&&r===cs.reduce?tD:r}});var tw=i((_9,rw)=>{"use strict";var nD=ew();rw.exports=nD});var aw=i((P9,nw)=>{"use strict";var aD=tw();nw.exports=aD});var ow=i((R9,iw)=>{"use strict";var iD=aw();iw.exports=iD});var sw=i((A9,uw)=>{"use strict";uw.exports=ow()});var lw=i((N9,cw)=>{cw.exports=sw()});var vw=i((M9,pw)=>{"use strict";var oD=Ne(),uD=ve(),sD=Pt(),cD=Y(),lD=Hr(),fw=function(e,r,t,n,a,o,u,c){for(var s=a,l=0,f=u?cD(u,c):!1,p,v;l<n;)l in t&&(p=f?f(t[l],l,r):t[l],o>0&&oD(p)?(v=uD(p),s=fw(e,r,p,v,s,o-1)-1):(sD(s+1),lD(e,s,p)),s++),l++;return s};pw.exports=fw});var dw=i(()=>{"use strict";var fD=q(),pD=vw(),vD=D(),dD=te(),mD=ve(),hD=Kn();fD({target:"Array",proto:!0},{flatMap:function(r){var t=dD(this),n=mD(t),a;return vD(r),a=hD(t,0),pD(a,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),a}})});var mw=i(()=>{"use strict";var yD=Lo();yD("flatMap")});var yw=i((D9,hw)=>{"use strict";dw();mw();var bD=se();hw.exports=bD("Array","flatMap")});var gw=i((B9,bw)=>{"use strict";var gD=U(),qD=yw(),ls=Array.prototype;bw.exports=function(e){var r=e.flatMap;return e===ls||gD(ls,e)&&r===ls.flatMap?qD:r}});var xw=i((G9,qw)=>{"use strict";var xD=gw();qw.exports=xD});var Sw=i((U9,ww)=>{"use strict";var wD=xw();ww.exports=wD});var Tw=i((H9,Ew)=>{"use strict";var SD=Sw();Ew.exports=SD});var Ow=i((W9,Cw)=>{"use strict";Cw.exports=Tw()});var Iw=i((K9,kw)=>{kw.exports=Ow()});var Pw=i((z9,_w)=>{"use strict";uo();var ED=se();_w.exports=ED("Array","concat")});var Aw=i((V9,Rw)=>{"use strict";var TD=U(),CD=Pw(),fs=Array.prototype;Rw.exports=function(e){var r=e.concat;return e===fs||TD(fs,e)&&r===fs.concat?CD:r}});var Mw=i((Y9,Nw)=>{"use strict";var OD=Aw();Nw.exports=OD});var Lw=i((J9,jw)=>{"use strict";var kD=Mw();jw.exports=kD});var Fw=i((Q9,$w)=>{"use strict";var ID=Lw();$w.exports=ID});var Bw=i((X9,Dw)=>{"use strict";Dw.exports=Fw()});var ps=i((Z9,Gw)=>{Gw.exports=Bw()});var Ww=i(()=>{});var zw=i((w7,Kw)=>{"use strict";Ww();jo();var FD=Vr();Kw.exports=FD.f("toPrimitive")});var Yw=i((S7,Vw)=>{"use strict";var DD=zw();Vw.exports=DD});var Qw=i((E7,Jw)=>{"use strict";var BD=Yw();Jw.exports=BD});var Zw=i((T7,Xw)=>{"use strict";var GD=Qw();Xw.exports=GD});var rS=i((C7,eS)=>{"use strict";eS.exports=Zw()});var lS=i((z7,cS)=>{"use strict";var HD=$(),WD=Te(),KD=R(),zD=KD("match");cS.exports=function(e){var r;return HD(e)&&((r=e[zD])!==void 0?!!r:WD(e)==="RegExp")}});var pS=i((V7,fS)=>{"use strict";var VD=lS(),YD=TypeError;fS.exports=function(e){if(VD(e))throw new YD("The method doesn't accept regular expressions");return e}});var dS=i((Y7,vS)=>{"use strict";var JD=R(),QD=JD("match");vS.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[QD]=!1,"/./"[e](r)}catch{}}return!1}});var yS=i(()=>{"use strict";var XD=q(),ZD=mt(),e3=yt().f,r3=Pi(),mS=Xe(),t3=pS(),n3=pr(),a3=dS(),i3=Z(),o3=ZD("".slice),u3=Math.min,hS=a3("startsWith"),s3=!i3&&!hS&&!!function(){var e=e3(String.prototype,"startsWith");return e&&!e.writable}();XD({target:"String",proto:!0,forced:!s3&&!hS},{startsWith:function(r){var t=mS(n3(this));t3(r);var n=r3(u3(arguments.length>1?arguments[1]:void 0,t.length)),a=mS(r);return o3(t,n,n+a.length)===a}})});var gS=i((X7,bS)=>{"use strict";yS();var c3=se();bS.exports=c3("String","startsWith")});var xS=i((Z7,qS)=>{"use strict";var l3=U(),f3=gS(),hs=String.prototype;qS.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===hs||l3(hs,e)&&r===hs.startsWith?f3:r}});var SS=i((eY,wS)=>{"use strict";var p3=xS();wS.exports=p3});var TS=i((rY,ES)=>{"use strict";var v3=SS();ES.exports=v3});var OS=i((tY,CS)=>{"use strict";var d3=TS();CS.exports=d3});var IS=i((nY,kS)=>{"use strict";kS.exports=OS()});var PS=i((aY,_S)=>{_S.exports=IS()});var RS=i(()=>{"use strict";var m3=q(),h3=Nt().filter,y3=St(),b3=y3("filter");m3({target:"Array",proto:!0,forced:!b3},{filter:function(r){return h3(this,r,arguments.length>1?arguments[1]:void 0)}})});var NS=i((uY,AS)=>{"use strict";RS();var g3=se();AS.exports=g3("Array","filter")});var jS=i((sY,MS)=>{"use strict";var q3=U(),x3=NS(),ys=Array.prototype;MS.exports=function(e){var r=e.filter;return e===ys||q3(ys,e)&&r===ys.filter?x3:r}});var $S=i((cY,LS)=>{"use strict";var w3=jS();LS.exports=w3});var DS=i((lY,FS)=>{"use strict";var S3=$S();FS.exports=S3});var GS=i((fY,BS)=>{"use strict";var E3=DS();BS.exports=E3});var HS=i((pY,US)=>{"use strict";US.exports=GS()});var KS=i((vY,WS)=>{WS.exports=HS()});var sE=i(()=>{"use strict";var R3=q(),A3=W(),gs=jr(),N3=Du(),tE=Qo(),M3=X(),nE=$(),j3=er(),iE=_(),qs=A3("Reflect","construct"),L3=Object.prototype,$3=[].push,oE=iE(function(){function e(){}return!(qs(function(){},[],e)instanceof e)}),uE=!iE(function(){qs(function(){})}),aE=oE||uE;R3({target:"Reflect",stat:!0,forced:aE,sham:aE},{construct:function(r,t){tE(r),M3(t);var n=arguments.length<3?r:tE(arguments[2]);if(uE&&!oE)return qs(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var a=[null];return gs($3,a,t),new(gs(N3,r,a))}var o=n.prototype,u=j3(nE(o)?o:L3),c=gs(r,u,t);return nE(c)?c:u}})});var lE=i((zY,cE)=>{"use strict";sE();var F3=V();cE.exports=F3.Reflect.construct});var pE=i((VY,fE)=>{"use strict";var D3=lE();fE.exports=D3});var dE=i((YY,vE)=>{"use strict";var B3=pE();vE.exports=B3});var hE=i((JY,mE)=>{"use strict";var G3=dE();mE.exports=G3});var Wa=i((QY,yE)=>{"use strict";yE.exports=hE()});var gE=i((XY,bE)=>{bE.exports=Wa()});var kE=i((uJ,OE)=>{"use strict";var U3=_();OE.exports=U3(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var PE=i((sJ,_E)=>{"use strict";var H3=_(),W3=$(),K3=Te(),IE=kE(),Ka=Object.isExtensible,z3=H3(function(){Ka(1)});_E.exports=z3||IE?function(r){return!W3(r)||IE&&K3(r)==="ArrayBuffer"?!1:Ka?Ka(r):!0}:Ka});var AE=i((cJ,RE)=>{"use strict";var V3=_();RE.exports=!V3(function(){return Object.isExtensible(Object.preventExtensions({}))})});var Os=i((lJ,jE)=>{"use strict";var Y3=q(),J3=N(),Q3=zr(),X3=$(),Es=K(),Z3=ne().f,NE=At(),e4=so(),Ts=PE(),r4=Dr(),t4=AE(),ME=!1,We=r4("meta"),n4=0,Cs=function(e){Z3(e,We,{value:{objectID:"O"+n4++,weakData:{}}})},a4=function(e,r){if(!X3(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!Es(e,We)){if(!Ts(e))return"F";if(!r)return"E";Cs(e)}return e[We].objectID},i4=function(e,r){if(!Es(e,We)){if(!Ts(e))return!0;if(!r)return!1;Cs(e)}return e[We].weakData},o4=function(e){return t4&&ME&&Ts(e)&&!Es(e,We)&&Cs(e),e},u4=function(){s4.enable=function(){},ME=!0;var e=NE.f,r=J3([].splice),t={};t[We]=1,e(t).length&&(NE.f=function(n){for(var a=e(n),o=0,u=a.length;o<u;o++)if(a[o]===We){r(a,o,1);break}return a},Y3({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:e4.f}))},s4=jE.exports={enable:u4,fastKey:a4,getWeakData:i4,onFreeze:o4};Q3[We]=!0});var FE=i((fJ,$E)=>{"use strict";var c4=q(),l4=P(),f4=Os(),p4=_(),v4=Ce(),d4=me(),m4=da(),h4=M(),y4=$(),b4=fr(),g4=Le(),q4=ne().f,x4=Nt().forEach,w4=H(),LE=Ze(),S4=LE.set,E4=LE.getterFor;$E.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,a=e.indexOf("Weak")!==-1,o=n?"set":"add",u=l4[e],c=u&&u.prototype,s={},l;if(!w4||!h4(u)||!(a||c.forEach&&!p4(function(){new u().entries().next()})))l=t.getConstructor(r,e,n,o),f4.enable();else{l=r(function(v,d){S4(m4(v,f),{type:e,collection:new u}),b4(d)||d4(d,v[o],{that:v,AS_ENTRIES:n})});var f=l.prototype,p=E4(e);x4(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(v){var d=v==="add"||v==="set";v in c&&!(a&&v==="clear")&&v4(f,v,function(h,m){var x=p(this).collection;if(!d&&a&&!y4(h))return v==="get"?void 0:!1;var y=x[v](h===0?0:h,m);return d?this:y})}),a||q4(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return g4(l,e,!1,!0),s[e]=l,c4({global:!0,forced:!0},s),a||t.setStrong(l,e,n),l}});var BE=i((pJ,DE)=>{"use strict";var T4=Me();DE.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:T4(e,n,r[n],t);return e}});var VE=i((vJ,zE)=>{"use strict";var GE=er(),C4=Vn(),UE=BE(),O4=Y(),k4=da(),I4=fr(),_4=me(),P4=Gn(),za=Un(),R4=Jo(),pn=H(),HE=Os().fastKey,KE=Ze(),WE=KE.set,ks=KE.getterFor;zE.exports={getConstructor:function(e,r,t,n){var a=e(function(l,f){k4(l,o),WE(l,{type:r,index:GE(null),first:null,last:null,size:0}),pn||(l.size=0),I4(f)||_4(f,l[n],{that:l,AS_ENTRIES:t})}),o=a.prototype,u=ks(r),c=function(l,f,p){var v=u(l),d=s(l,f),h,m;return d?d.value=p:(v.last=d={index:m=HE(f,!0),key:f,value:p,previous:h=v.last,next:null,removed:!1},v.first||(v.first=d),h&&(h.next=d),pn?v.size++:l.size++,m!=="F"&&(v.index[m]=d)),l},s=function(l,f){var p=u(l),v=HE(f),d;if(v!=="F")return p.index[v];for(d=p.first;d;d=d.next)if(d.key===f)return d};return UE(o,{clear:function(){for(var f=this,p=u(f),v=p.first;v;)v.removed=!0,v.previous&&(v.previous=v.previous.next=null),v=v.next;p.first=p.last=null,p.index=GE(null),pn?p.size=0:f.size=0},delete:function(l){var f=this,p=u(f),v=s(f,l);if(v){var d=v.next,h=v.previous;delete p.index[v.index],v.removed=!0,h&&(h.next=d),d&&(d.previous=h),p.first===v&&(p.first=d),p.last===v&&(p.last=h),pn?p.size--:f.size--}return!!v},forEach:function(f){for(var p=u(this),v=O4(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:p.first;)for(v(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!s(this,f)}}),UE(o,t?{get:function(f){var p=s(this,f);return p&&p.value},set:function(f,p){return c(this,f===0?0:f,p)}}:{add:function(f){return c(this,f=f===0?0:f,f)}}),pn&&C4(o,"size",{configurable:!0,get:function(){return u(this).size}}),a},setStrong:function(e,r,t){var n=r+" Iterator",a=ks(r),o=ks(n);P4(e,r,function(u,c){WE(this,{type:n,target:u,state:a(u),kind:c,last:null})},function(){for(var u=o(this),c=u.kind,s=u.last;s&&s.removed;)s=s.previous;return!u.target||!(u.last=s=s?s.next:u.state.first)?(u.target=null,za(void 0,!0)):za(c==="keys"?s.key:c==="values"?s.value:[s.key,s.value],!1)},t?"entries":"values",!t,!0),R4(r)}}});var YE=i(()=>{"use strict";var A4=FE(),N4=VE();A4("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},N4)});var JE=i(()=>{"use strict";YE()});var XE=i((bJ,QE)=>{"use strict";QE.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,a){return t[e](n,a)}}});var oe=i((gJ,eT)=>{"use strict";var M4=W(),Va=XE(),ZE=M4("Map");eT.exports={Map:ZE,set:Va("set",2),get:Va("get",1),has:Va("has",1),remove:Va("delete",1),proto:ZE.prototype}});var Is=i(()=>{"use strict";var j4=q(),L4=N(),$4=D(),F4=pr(),D4=me(),Ya=oe(),rT=Z(),B4=_(),tT=Ya.Map,G4=Ya.has,U4=Ya.get,H4=Ya.set,W4=L4([].push),K4=rT||B4(function(){return tT.groupBy("ab",function(e){return e}).get("a").length!==1});j4({target:"Map",stat:!0,forced:rT||K4},{groupBy:function(r,t){F4(r),$4(t);var n=new tT,a=0;return D4(r,function(o){var u=t(o,a++);G4(n,u)?W4(U4(n,u),o):H4(n,u,[o])}),n}})});var J=i((wJ,nT)=>{"use strict";var z4=Qe(),V4=TypeError;nT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new V4(z4(e)+" is not a map")}});var Ps=i(()=>{"use strict";var Y4=q(),J4=J(),_s=oe(),Q4=Z(),X4=_s.get,Z4=_s.has,eB=_s.set;Y4({target:"Map",proto:!0,real:!0,forced:Q4},{getOrInsert:function(r,t){return Z4(J4(this),r)?X4(this,r):(eB(this,r,t),t)}})});var As=i(()=>{"use strict";var rB=q(),tB=D(),nB=J(),Rs=oe(),aB=Z(),iB=Rs.get,oB=Rs.has,uB=Rs.set;rB({target:"Map",proto:!0,real:!0,forced:aB},{getOrInsertComputed:function(r,t){if(nB(this),tB(t),oB(this,r))return iB(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return uB(this,r,n),n}})});var iT=i((OJ,aT)=>{"use strict";wr();JE();Is();Ps();As();Rt();br();var sB=V();aT.exports=sB.Map});var uT=i((kJ,oT)=>{"use strict";var cB=iT();Sr();oT.exports=cB});var Ns=i(()=>{"use strict";Ps()});var Ms=i(()=>{"use strict";As()});var sT=i(()=>{"use strict";Is()});var lT=i((MJ,cT)=>{"use strict";var lB=uT();Ns();Ms();sT();cT.exports=lB});var pT=i((jJ,fT)=>{"use strict";var fB=Y(),pB=X(),vB=te(),dB=me();fT.exports=function(e,r,t){return function(a){var o=vB(a),u=arguments.length,c=u>1?arguments[1]:void 0,s=c!==void 0,l=s?fB(c,u>2?arguments[2]:void 0):void 0,f=new e,p=0;return dB(o,function(v){var d=s?l(v,p++):v;t?r(f,pB(d)[0],d[1]):r(f,d)}),f}}});var dT=i(()=>{"use strict";var mB=q(),vT=oe(),hB=pT();mB({target:"Map",stat:!0,forced:!0},{from:hB(vT.Map,vT.set,!0)})});var hT=i((FJ,mT)=>{"use strict";var yB=X();mT.exports=function(e,r,t){return function(){for(var a=new e,o=arguments.length,u=0;u<o;u++){var c=arguments[u];t?r(a,yB(c)[0],c[1]):r(a,c)}return a}}});var bT=i(()=>{"use strict";var bB=q(),yT=oe(),gB=hT();bB({target:"Map",stat:!0,forced:!0},{of:gB(yT.Map,yT.set,!0)})});var qT=i(()=>{"use strict";var qB=q(),xB=G(),wB=me(),SB=M(),gT=D(),EB=oe().Map;qB({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=SB(this)?this:EB,a=new n;gT(t);var o=gT(a.set);return wB(r,function(u){xB(o,a,t(u),u)}),a}})});var xT=i(()=>{"use strict";var TB=q(),CB=J(),OB=oe().remove;TB({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=CB(this),t=!0,n,a=0,o=arguments.length;a<o;a++)n=OB(r,arguments[a]),t=t&&n;return!!t}})});var ST=i(()=>{"use strict";var kB=q(),IB=J(),js=oe(),_B=js.get,PB=js.has,wT=js.set;kB({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=IB(this),a,o;return PB(n,r)?(a=_B(n,r),"update"in t&&(a=t.update(a,r,n),wT(n,r,a)),a):(o=t.insert(r,n),wT(n,r,o),o)}})});var TT=i((VJ,ET)=>{"use strict";var RB=G();ET.exports=function(e,r,t){for(var n=t?e:e.iterator,a=e.next,o,u;!(o=RB(a,n)).done;)if(u=r(o.value),u!==void 0)return u}});var qe=i((YJ,CT)=>{"use strict";var AB=TT();CT.exports=function(e,r,t){return t?AB(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var OT=i(()=>{"use strict";var NB=q(),MB=Y(),jB=J(),LB=qe();NB({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=jB(this),n=MB(r,arguments.length>1?arguments[1]:void 0);return LB(t,function(a,o){if(!n(a,o,t))return!1},!0)!==!1}})});var IT=i(()=>{"use strict";var $B=q(),FB=Y(),DB=J(),kT=oe(),BB=qe(),GB=kT.Map,UB=kT.set;$B({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=DB(this),n=FB(r,arguments.length>1?arguments[1]:void 0),a=new GB;return BB(t,function(o,u){n(o,u,t)&&UB(a,u,o)}),a}})});var _T=i(()=>{"use strict";var HB=q(),WB=Y(),KB=J(),zB=qe();HB({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=KB(this),n=WB(r,arguments.length>1?arguments[1]:void 0),a=zB(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return a&&a.value}})});var PT=i(()=>{"use strict";var VB=q(),YB=Y(),JB=J(),QB=qe();VB({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=JB(this),n=YB(r,arguments.length>1?arguments[1]:void 0),a=QB(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return a&&a.key}})});var AT=i((aQ,RT)=>{"use strict";RT.exports=function(e,r){return e===r||e!==e&&r!==r}});var NT=i(()=>{"use strict";var XB=q(),ZB=AT(),e5=J(),r5=qe();XB({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return r5(e5(this),function(t){if(ZB(t,r))return!0},!0)===!0}})});var MT=i(()=>{"use strict";var t5=q(),n5=J(),a5=qe();t5({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=a5(n5(this),function(n,a){if(n===r)return{key:a}},!0);return t&&t.key}})});var LT=i(()=>{"use strict";var i5=q(),o5=Y(),u5=J(),jT=oe(),s5=qe(),c5=jT.Map,l5=jT.set;i5({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=u5(this),n=o5(r,arguments.length>1?arguments[1]:void 0),a=new c5;return s5(t,function(o,u){l5(a,n(o,u,t),o)}),a}})});var FT=i(()=>{"use strict";var f5=q(),p5=Y(),v5=J(),$T=oe(),d5=qe(),m5=$T.Map,h5=$T.set;f5({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=v5(this),n=p5(r,arguments.length>1?arguments[1]:void 0),a=new m5;return d5(t,function(o,u){h5(a,u,n(o,u,t))}),a}})});var DT=i(()=>{"use strict";var y5=q(),b5=J(),g5=me(),q5=oe().set;y5({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=b5(this),n=arguments.length,a=0;a<n;)g5(arguments[a++],function(o,u){q5(t,o,u)},{AS_ENTRIES:!0});return t}})});var BT=i(()=>{"use strict";var x5=q(),w5=D(),S5=J(),E5=qe(),T5=TypeError;x5({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=S5(this),n=arguments.length<2,a=n?void 0:arguments[1];if(w5(r),E5(t,function(o,u){n?(n=!1,a=o):a=r(a,o,u,t)}),n)throw new T5("Reduce of empty map with no initial value");return a}})});var GT=i(()=>{"use strict";var C5=q(),O5=Y(),k5=J(),I5=qe();C5({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=k5(this),n=O5(r,arguments.length>1?arguments[1]:void 0);return I5(t,function(a,o){if(n(a,o,t))return!0},!0)===!0}})});var HT=i(()=>{"use strict";var _5=q(),UT=D(),P5=J(),Ls=oe(),R5=TypeError,A5=Ls.get,N5=Ls.has,M5=Ls.set;_5({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=P5(this),a=arguments.length;UT(t);var o=N5(n,r);if(!o&&a<3)throw new R5("Updating absent value");var u=o?A5(n,r):UT(a>2?arguments[2]:void 0)(r,n);return M5(n,r,t(u,r,n)),n}})});var Fs=i((xQ,WT)=>{"use strict";var Ja=G(),$s=D(),Qa=M(),j5=X(),L5=TypeError;WT.exports=function(r,t){var n=j5(this),a=$s(n.get),o=$s(n.has),u=$s(n.set),c=arguments.length>2?arguments[2]:void 0,s;if(!Qa(t)&&!Qa(c))throw new L5("At least one callback required");return Ja(o,n,r)?(s=Ja(a,n,r),Qa(t)&&(s=t(s),Ja(u,n,r,s))):Qa(c)&&(s=c(),Ja(u,n,r,s)),s}});var KT=i(()=>{"use strict";var $5=q(),F5=Fs();$5({target:"Map",proto:!0,real:!0,forced:!0},{upsert:F5})});var zT=i(()=>{"use strict";var D5=q(),B5=Fs();D5({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:B5})});var YT=i((CQ,VT)=>{"use strict";var G5=lT();dT();bT();qT();xT();ST();OT();IT();_T();PT();NT();Ns();Ms();MT();LT();FT();DT();BT();GT();HT();KT();zT();VT.exports=G5});var QT=i((OQ,JT)=>{"use strict";JT.exports=YT()});var ZT=i(()=>{"use strict";var U5=q(),H5=mt(),W5=Bi().indexOf,K5=ss(),Ds=H5([].indexOf),XT=!!Ds&&1/Ds([1],1,-0)<0,z5=XT||!K5("indexOf");U5({target:"Array",proto:!0,forced:z5},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return XT?Ds(this,r,t)||0:W5(this,r,t)}})});var r0=i((_Q,e0)=>{"use strict";ZT();var V5=se();e0.exports=V5("Array","indexOf")});var n0=i((PQ,t0)=>{"use strict";var Y5=U(),J5=r0(),Bs=Array.prototype;t0.exports=function(e){var r=e.indexOf;return e===Bs||Y5(Bs,e)&&r===Bs.indexOf?J5:r}});var i0=i((RQ,a0)=>{"use strict";var Q5=n0();a0.exports=Q5});var u0=i((AQ,o0)=>{"use strict";var X5=i0();o0.exports=X5});var c0=i((NQ,s0)=>{"use strict";var Z5=u0();s0.exports=Z5});var f0=i((MQ,l0)=>{"use strict";l0.exports=c0()});var k0=i(()=>{"use strict";var i6=q(),o6=te(),O0=Ln(),u6=_(),s6=u6(function(){O0(1)});i6({target:"Object",stat:!0,forced:s6},{keys:function(r){return O0(o6(r))}})});var _0=i((DX,I0)=>{"use strict";k0();var c6=V();I0.exports=c6.Object.keys});var R0=i((BX,P0)=>{"use strict";var l6=_0();P0.exports=l6});var N0=i((GX,A0)=>{"use strict";var f6=R0();A0.exports=f6});var j0=i((UX,M0)=>{"use strict";var p6=N0();M0.exports=p6});var $0=i((HX,L0)=>{"use strict";L0.exports=j0()});var D0=i((WX,F0)=>{F0.exports=$0()});var Vs=i((nZ,G0)=>{var zs={yellow:"#ffd400",red:"#ff6b6b",green:"#51cf66",blue:"#339af0",purple:"#9775fa",pink:"#f06595",orange:"#ff922b",teal:"#20c997"},g6=zs.yellow,q6=Object.keys(zs),x6=/^#[0-9a-fA-F]{6}$/;G0.exports={COLOR_PRESETS:zs,DEFAULT_COLOR:g6,PRESET_NAMES:q6,HEX_COLOR_REGEX:x6}});var Ye="";function cc(e){Ye=e.replace(/\/+$/,"")}async function lr(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function lc(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${Ye}/comments?${t}`);return await lr(n,"Failed to fetch comments"),(await n.json()).data}async function ai({uri:e,document:r,quote:t,prefix:n,suffix:a,body:o,author:u,parent:c,color:s}){let l={quote:t,prefix:n,suffix:a,body:o,author:u,parent:c};s&&(l.color=s),r?l.document=r:l.uri=e;let f=await fetch(`${Ye}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});return await lr(f,"Failed to create comment"),f.json()}async function ii(e,{body:r,color:t}){let n={};r!==void 0&&(n.body=r),t!==void 0&&(n.color=t);let a=await fetch(`${Ye}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});return await lr(a,"Failed to update comment"),a.json()}async function fc(e,r){let t=await fetch(`${Ye}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});return await lr(t,"Failed to update comment status"),t.json()}async function pc(e){let r=await fetch(`${Ye}/comments/${e}`,{method:"DELETE"});await lr(r,"Failed to delete comment")}async function vc(e,r,t){let n=await fetch(`${Ye}/comments/${e}/reactions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({emoji:r,author:t})});return await lr(n,"Failed to add reaction"),n.json()}async function dc(e,r,t){let n=await fetch(`${Ye}/comments/${e}/reactions/${encodeURIComponent(r)}?author=${encodeURIComponent(t)}`,{method:"DELETE"});return await lr(n,"Failed to remove reaction"),n.json()}var iF=b(Kr(),1),oF=b(Wn(),1),uF=b(ua(),1),sF=b(sa(),1),cF=b(ca(),1);var Mu=b(ot(),1);function cb(e,r,t,n,a,o,u){try{var c=e[o](u),s=c.value}catch(l){return void t(l)}c.done?r(s):Mu.default.resolve(s).then(n,a)}function kr(e){return function(){var r=this,t=arguments;return new Mu.default(function(n,a){var o=e.apply(r,t);function u(s){cb(o,n,a,u,c,"next",s)}function c(s){cb(o,n,a,u,c,"throw",s)}u(void 0)})}}function zt(e,r){this.v=e,this.k=r}function ar(e){return new zt(e,0)}var ju=b(ot(),1),gb=b(Oe(),1),qb=b(Ea(),1);function Ie(e){return function(){return new Vt(e.apply(this,arguments))}}function Vt(e){var r,t;function n(o,u){try{var c=e[o](u),s=c.value,l=s instanceof zt;ju.default.resolve(l?s.v:s).then(function(f){if(l){var p=o==="return"?"return":"next";if(!s.k||f.done)return n(p,f);f=e[p](f).value}a(c.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){a("throw",f)}}function a(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new ju.default(function(c,s){var l={key:o,arg:u,resolve:c,reject:s,next:null};t?t=t.next=l:(r=t=l,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Vt.prototype[typeof gb.default=="function"&&qb.default||"@@asyncIterator"]=function(){return this},Vt.prototype.next=function(e){return this._invoke("next",e)},Vt.prototype.throw=function(e){return this._invoke("throw",e)},Vt.prototype.return=function(e){return this._invoke("return",e)};var lF=b(le(),1),fF=b(Hq(),1);function fe(e){var r,t=nF(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function nF(e){return"startContainer"in e}function or(e){if(aF(e))return e;var r=e,t=fe(r).createRange();return t.selectNodeContents(r),t}function aF(e){return"startContainer"in e}var tx=b(rx(),1);function nx(e){if((0,tx.default)(e))return e}var hx=b(Oe(),1),yx=b(Ho(),1),bx=b(is(),1);function gx(e,r){var t=e==null?null:typeof hx.default<"u"&&(0,yx.default)(e)||e["@@iterator"];if(t!=null){var n,a,o,u,c=[],s=!0,l=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;s=!1}else for(;!(s=(n=o.call(t)).done)&&((0,bx.default)(c).call(c,n.value),c.length!==r);s=!0);}catch(f){l=!0,a=f}finally{try{if(!s&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(l)throw a}}return c}}var qx=b(Ni(),1),xx=b(oo(),1);function Fa(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function os(e,r){if(e){var t;if(typeof e=="string")return Fa(e,r);var n=(0,qx.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,xx.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Fa(e,r):void 0}}function wx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ue(e,r){return nx(e)||gx(e,r)||os(e,r)||wx()}var Sx=b(Oe(),1),Ex=b(Ea(),1),Tx=b(tn(),1),un=b(ot(),1);function st(e){var r,t,n,a=2;for(typeof Sx.default<"u"&&(t=Ex.default,n=Tx.default);a--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Da(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Da(e){function r(t){if(Object(t)!==t)return un.default.reject(new TypeError(t+" is not an object."));var n=t.done;return un.default.resolve(t.value).then(function(a){return{value:a,done:n}})}return Da=function(n){this.s=n,this.n=n.next},Da.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var a=this.s.return;return a===void 0?un.default.resolve({value:n,done:!0}):r(a.apply(this.s,arguments))},throw:function(n){var a=this.s.return;return a===void 0?un.default.reject(n):r(a.apply(this.s,arguments))}},new Da(e)}var $D=b(le(),1);var RD=b(le(),1),AD=b(Dx(),1),ND=b(Gx(),1),MD=b(lw(),1),jD=b(Iw(),1),LD=b(ps(),1);var Hs=b(le(),1);var P3=b(le(),1);var ds=b(le(),1);function sn(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function Uw(e,r){return sn(e.startChunk,r.startChunk)&&sn(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function Ir(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var vs=b(Qt(),1);var cn=b(Oe(),1),Hw=b(tn(),1);function He(e){"@babel/helpers - typeof";return He=typeof cn.default=="function"&&typeof Hw.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof cn.default=="function"&&r.constructor===cn.default&&r!==cn.default.prototype?"symbol":typeof r},He(e)}var tS=b(rS(),1);function nS(e,r){if(He(e)!="object"||!e)return e;var t=e[tS.default];if(t!==void 0){var n=t.call(e,r||"default");if(He(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Ba(e){var r=nS(e,"string");return He(r)=="symbol"?r:r+""}function aS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,vs.default)(e,Ba(n.key),n)}}function ln(e,r,t){return r&&aS(e.prototype,r),t&&aS(e,t),(0,vs.default)(e,"prototype",{writable:!1}),e}var iS=b(Qt(),1);function _r(e,r,t){return(r=Ba(r))in e?(0,iS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var oS=b(Kr(),1);var Ga="Iterator exhausted before seek ended.",fn=function(){function e(r){Ir(this,e),this.chunker=r,_r(this,"currentChunkPosition",0),_r(this,"offsetInChunk",0),this.seekTo(0)}return ln(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,a)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!sn(this.currentChunk,n);){var p=this._readToPreviousChunk(),v=Ue(p,2),d=v[0],h=v[1];if(t&&(u=d+u),h===null)throw new RangeError(Ga)}else for(;!sn(this.currentChunk,n);){var c=this._readToNextChunk(),s=Ue(c,2),l=s[0],f=s[1];if(t&&(u+=l),f===null)throw new RangeError(Ga)}var m=this.currentChunkPosition+a;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,oS.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var c=this.currentChunkPosition+this.currentChunk.data.length;if(c<=n){var s=this._readToNextChunk(),l=Ue(s,2),f=l[0],p=l[1];if(t&&(u+=f),p===null){if(this.position===n||o)break;throw new RangeError(Ga)}}else{var v=a?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,v)),this.offsetInChunk=v,a&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=a?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var h=this._readToPreviousChunk(),m=Ue(h,2),x=m[0],y=m[1];if(t&&(u=x+u),y===null){if(o)break;throw new RangeError(Ga)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,a=this.chunker.nextChunk();return a!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,a]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function sS(e,r){return ms.apply(this,arguments)}function ms(){return ms=kr(ds.default.mark(function e(r,t){var n,a,o,u,c,s,l,f,p,v,d,h,m,x,y,g,O,k,w,E,S,C,L=arguments;return ds.default.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:n=L.length>2&&L[2]!==void 0?L[2]:{},a=n.minimalContext,o=a===void 0?!1:a,u=n.minimumQuoteLength,c=u===void 0?0:u,s=n.maxWordLength,l=s===void 0?50:s,f=new fn(t()),p=new fn(t()),f.seekToChunk(r.startChunk,r.startIndex),v=f.readToChunk(r.endChunk,r.endIndex),d="",h="",m=function(){return d.length+v.length+h.length},m()<c&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),x=Math.floor((c-m())/2),d=f.read(-x,!1,!0)+d,m()<c&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),y=c-m(),h=h+f.read(y,!1,!0),m()<c&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),g=c-m(),d=f.read(-g,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=Ua(f,l,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+Ua(f,l,!1));case 11:return O={type:"TextQuoteSelector",exact:v,prefix:d,suffix:h},k=Ha(O)(t()),I.next=16,k.next();case 16:if(w=I.sent,!(!w.done&&Uw(w.value,r))){I.next=21;break}return I.next=20,k.next();case 20:w=I.sent;case 21:if(!w.done){I.next=23;break}return I.abrupt("return",O);case 23:if(E=w.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),p.seekToChunk(E.startChunk,E.startIndex-d.length),S=uS(f,p,!0),S!==void 0&&!o&&(S=Ua(f,l,!0)+S),f.seekToChunk(r.endChunk,r.endIndex+h.length),p.seekToChunk(E.endChunk,E.endIndex+h.length),C=uS(f,p,!1),C!==void 0&&!o&&(C=C+Ua(f,l,!1)),!o){I.next=44;break}if(!(S!==void 0&&(C===void 0||S.length<=C.length))){I.next=37;break}d=S+d,I.next=42;break;case 37:if(C===void 0){I.next=41;break}h=h+C,I.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:I.next=46;break;case 44:S!==void 0&&(d=S+d),C!==void 0&&(h=h+C);case 46:I.next=11;break;case 48:case"end":return I.stop()}},e)})),ms.apply(this,arguments)}function uS(e,r,t){for(var n="";;){var a=void 0;try{a=e.read(t?-1:1)}catch{return}n=t?a+n:n+a;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(a!==o)return n}}function Ua(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var a=void 0;try{a=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(UD(a)){e.seekBy(t?1:-1);break}n=t?a+n:n+a}return n}function UD(e){return/^\s+$/.test(e)}var YS=b(Kr(),1),JS=b(Wn(),1),QS=b(ua(),1),XS=b(sa(),1),ZS=b(ca(),1);var bs=b(le(),1),eE=b(PS(),1),rE=b(KS(),1);function zS(e,r){var t;if(typeof QS.default>"u"||(0,XS.default)(e)==null){if(Array.isArray(e)||(t=T3(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,c;return{s:function(){t=(0,ZS.default)(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){u=!0,c=l},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw c}}}}function T3(e,r){var t;if(e){if(typeof e=="string")return VS(e,r);var n=(0,YS.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,JS.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return VS(e,r)}}function VS(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Ha(e){return function(){var r=Ie(bs.default.mark(function n(a){var o,u,c,s,l,f,p,v,d,h,m,x,y,g,O,k,w,E,S,C,L,Se,I,re,Ee,Q,F;return bs.default.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:o=e.exact,u=e.prefix||"",c=e.suffix||"",s=u+o+c,l=[],f=!0;case 6:p=a.currentChunk,v=p.data,d=[],h=zS(l),T.prev=10,h.s();case 12:if((m=h.n()).done){T.next=27;break}if(x=m.value,y=x.charactersMatched,x.endChunk===void 0&&(g=u.length+o.length-y,g<=v.length&&(x.endChunk=p,x.endIndex=g)),x.startChunk===void 0&&(O=u.length-y,(O<v.length||x.endChunk!==void 0)&&(x.startChunk=p,x.startIndex=O)),k=s.length-y,!(k<=v.length)){T.next=24;break}if(!(0,eE.default)(v).call(v,s.substring(y))){T.next=22;break}return T.next=22,x;case 22:T.next=25;break;case 24:v===s.substring(y,y+v.length)&&(x.charactersMatched+=v.length,d.push(x));case 25:T.next=12;break;case 27:T.next=32;break;case 29:T.prev=29,T.t0=T.catch(10),h.e(T.t0);case 32:return T.prev=32,h.f(),T.finish(32);case 35:if(l=d,!(s.length<=v.length)){T.next=49;break}w=0;case 38:if(!(w<=v.length)){T.next=49;break}if(E=v.indexOf(s,w),E!==-1){T.next=42;break}return T.abrupt("break",49);case 42:if(w=E+1,!(E===0&&s.length===0&&!f)){T.next=45;break}return T.abrupt("continue",38);case 45:return T.next=47,{startChunk:p,startIndex:E+u.length,endChunk:p,endIndex:E+u.length+o.length};case 47:T.next=38;break;case 49:for(S=[],C=Math.max(v.length-s.length+1,0),L=function(Ve){var uc=v[Ve];S=(0,rE.default)(S).call(S,function(yC){return uc===s[Ve-yC]}),uc===s[0]&&S.push(Ve)},Se=C;Se<v.length;Se++)L(Se);I=zS(S);try{for(I.s();!(re=I.n()).done;)Ee=re.value,Q=v.length-Ee,F={charactersMatched:Q},Q>=u.length+o.length&&(F.endChunk=p,F.endIndex=Ee+u.length+o.length),(Q>u.length||F.endChunk!==void 0)&&(F.startChunk=p,F.startIndex=Ee+u.length),l.push(F)}catch(Nr){I.e(Nr)}finally{I.f()}f=!1;case 56:if(a.nextChunk()!==null){T.next=6;break}case 57:case"end":return T.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var I3=b(le(),1);var C3=b(Kr(),1),O3=b(ps(),1);var _3=b(le(),1);var dn=b(gE(),1);var xE=b(Ca(),1),wE=b(Qt(),1);var xs=b(Oa(),1),qE=b(Jt(),1);function ur(e,r){var t;return ur=xs.default?(0,qE.default)(t=xs.default).call(t):function(n,a){return n.__proto__=a,n},ur(e,r)}function ws(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,xE.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,wE.default)(e,"prototype",{writable:!1}),r&&ur(e,r)}function SE(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function EE(e,r){if(r&&(He(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return SE(e)}var TE=b(Oa(),1),CE=b(Jt(),1),Ss=b(Ta(),1);function Pr(e){var r;return Pr=TE.default?(0,CE.default)(r=Ss.default).call(r):function(t){return t.__proto__||(0,Ss.default)(t)},Pr(e)}var Us=b(QT(),1),g0=b(Ca(),1);var p0=b(f0(),1);function v0(e){try{var r;return(0,p0.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var m0=b(Wa(),1),h0=b(is(),1),y0=b(Jt(),1);var d0=b(Wa(),1);function Gs(){try{var e=!Boolean.prototype.valueOf.call((0,d0.default)(Boolean,[],function(){}))}catch{}return(Gs=function(){return!!e})()}function b0(e,r,t){if(Gs())return m0.default.apply(null,arguments);var n=[null];(0,h0.default)(n).apply(n,r);var a=new((0,y0.default)(e).apply(e,n));return t&&ur(a,t.prototype),a}function vn(e){var r=typeof Us.default=="function"?new Us.default:void 0;return vn=function(n){if(n===null||!v0(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,a)}function a(){return b0(n,arguments,Pr(this).constructor)}return a.prototype=(0,g0.default)(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),ur(a,n)},vn(e)}function w0(e,r){var t=fe(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),a=q0(e.startContainer,e.startOffset),o=Ue(a,2),u=o[0],c=o[1];for(n.currentNode=u;c===u.length&&n.nextNode();)u=n.currentNode,c=0;e.setStart(u,c);var s=q0(e.endContainer,e.endOffset),l=Ue(s,2),f=l[0],p=l[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function q0(e,r){var t;if(x0(e))return[e,r];var n;if(e6(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(x0(n))return[n,0];var a=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=a.createTreeWalker(a,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function x0(e){return e.nodeType===Node.TEXT_NODE}function e6(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function E0(e){var r=r6();return function(){var n=Pr(e),a;if(r){var o=Pr(this).constructor;a=(0,dn.default)(n,arguments,o)}else a=n.apply(this,arguments);return EE(this,a)}}function r6(){if(typeof Reflect>"u"||!dn.default||dn.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,dn.default)(Boolean,[],function(){})),!0}catch{return!1}}var Xa=function(e){ws(t,e);var r=E0(t);function t(n){return Ir(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(vn(TypeError)),t6=function(e){ws(t,e);var r=E0(t);function t(n){return Ir(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(vn(TypeError)),Rr=function(){function e(r){var t=this;if(Ir(this,e),_r(this,"scope",void 0),_r(this,"iter",void 0),this.scope=or(r),this.iter=fe(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!S0(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Xa}}return ln(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!S0(t))throw new Xa;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new t6;var n=t===this.scope.startContainer?this.scope.startOffset:0,a=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:a,data:t.data.substring(n,a),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=w0(t,this.scope),a=this.nodeToChunk(n.startContainer),o=n.startOffset-a.startOffset,u=this.nodeToChunk(n.endContainer),c=n.endOffset-u.startOffset;return{startChunk:a,startIndex:o,endChunk:u,endIndex:c}}},{key:"chunkRangeToRange",value:function(t){var n=fe(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function S0(e){return e.nodeType===Node.TEXT_NODE}function T0(e,r){return Ws.apply(this,arguments)}function Ws(){return Ws=kr(Hs.default.mark(function e(r,t){var n,a,o,u=arguments;return Hs.default.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},a=or(t??fe(r)),o=new Rr(a),s.next=5,sS(o.rangeToChunkRange(r),function(){return new Rr(a)},n);case 5:return s.abrupt("return",s.sent);case 6:case"end":return s.stop()}},e)})),Ws.apply(this,arguments)}var Ks=b(le(),1);function C0(e){var r=Ha(e);return function(){var t=Ie(Ks.default.mark(function a(o){var u,c,s,l,f,p,v,d;return Ks.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new Rr(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof Xa)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:c=!0,s=!1,m.prev=13,f=st(r(u));case 15:return m.next=17,ar(f.next());case 17:return p=m.sent,c=p.done,m.next=21,ar(p.value);case 21:if(v=m.sent,c){m.next=29;break}return d=v,m.next=26,u.chunkRangeToRange(d);case 26:c=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),s=!0,l=m.t1;case 35:if(m.prev=35,m.prev=36,!(!c&&f.return!=null)){m.next=40;break}return m.next=40,ar(f.return());case 40:if(m.prev=40,!s){m.next=43;break}throw l;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},a,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(a){return t.apply(this,arguments)}return n}()}var n6=b(le(),1);var a6=b(le(),1);var v6=b(D0(),1),d6=b(Kr(),1),m6=b(Wn(),1),h6=b(ua(),1),y6=b(sa(),1),b6=b(ca(),1);async function B0(e,r){let t=await T0(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function ct(e,r){let t=C0({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var he=b(Vs()),mn=b(Vs());function lt(e){if(!e||typeof e!="string")return null;let r=e.trim().toLowerCase();return mn.COLOR_PRESETS[r]?mn.COLOR_PRESETS[r]:mn.HEX_COLOR_REGEX.test(r)?r:null}function Za(e,r){let t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16);return`rgba(${t}, ${n}, ${a}, ${r})`}var ft="fb-highlight",U0="fb-highlight-active";var ei=new Map,hn=null;function W0(e){hn=e}function pt(e,r,t){let n=lt(t)||he.DEFAULT_COLOR;ei.set(r,n);let a=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let o=H0(e,r,n);a.push(o)}else{let o=S6(e);for(let u=0;u<o.length;u++){let c=o[u],s=document.createRange();c===e.startContainer?(s.setStart(c,e.startOffset),s.setEnd(c,c.textContent.length)):c===e.endContainer?(s.setStart(c,0),s.setEnd(c,e.endOffset)):s.selectNodeContents(c),s.collapsed||a.push(H0(s,r,n))}}return a}function H0(e,r,t){let n=e.commonAncestorContainer;for(;n&&n.nodeType!==Node.ELEMENT_NODE;)n=n.parentNode;let a=n,o=!1,u=null;for(;a;){if(a.tagName==="foreignObject"){o=!1;break}a.tagName==="text"&&a instanceof SVGElement&&(o=!0),a.tagName==="svg"&&(u=a),a=a.parentElement}if(o&&u)return w6(e,r,u,t);let c=document.createElement("mark");c.className=ft,c.dataset.commentId=r,c.style.backgroundColor=Za(t,.35),c.style.cursor="pointer",c.style.borderRadius="2px",c.addEventListener("click",()=>{hn&&hn(r)});try{e.surroundContents(c)}catch(s){return console.warn("[feedback-layer] Failed to create highlight:",s),null}return c}function w6(e,r,t,n){try{let a=e.getClientRects();if(a.length===0)return null;let o="http://www.w3.org/2000/svg",u=t.getScreenCTM();if(!u)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let c=e.commonAncestorContainer;for(;c&&c.nodeType!==Node.ELEMENT_NODE;)c=c.parentNode;let s=c,l=null;for(;s&&s!==t;){if(s.tagName==="text"){l=s.parentElement;break}s=s.parentElement}let f=l||t,p=u;f!==t&&f.getScreenCTM&&(p=f.getScreenCTM());let v=document.createElementNS(o,"g");v.setAttribute("class",ft),v.setAttribute("data-comment-id",r),v.style.cursor="pointer";for(let y=0;y<a.length;y++){let g=a[y],O=document.createElementNS(o,"rect"),k=t.createSVGPoint();k.x=g.left,k.y=g.top;let w=k.matrixTransform(p.inverse()),E=g.width/p.a,S=g.height/p.d;O.setAttribute("x",w.x),O.setAttribute("y",w.y),O.setAttribute("width",E),O.setAttribute("height",S),O.setAttribute("fill",n),O.setAttribute("fill-opacity","0.35"),O.setAttribute("rx","2"),O.setAttribute("ry","2"),O.style.pointerEvents="none",v.appendChild(O)}f&&f!==t?f.appendChild(v):t.appendChild(v);let d=e.commonAncestorContainer;for(;d&&d.nodeType!==Node.ELEMENT_NODE;)d=d.parentNode;let h=new Set,m=d;for(;m&&m!==t;)m.tagName==="text"&&m instanceof SVGElement&&(h.add(m),m.querySelectorAll("tspan").forEach(g=>h.add(g))),m=m.parentElement;let x=y=>{y.preventDefault(),y.stopPropagation(),hn&&hn(r)};return h.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",x),y.dataset.fbCommentId=r}),v}catch(a){return console.warn("[feedback-layer] Failed to create SVG highlight:",a),null}}function yn(e){ei.delete(e),document.querySelectorAll(`.${ft}[data-comment-id="${e}"]`).forEach(n=>{let a=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)a.removeChild(n);else{for(;n.firstChild;)a.insertBefore(n.firstChild,n);a.removeChild(n),a.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function K0(){ei.clear(),document.querySelectorAll(`.${ft}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function bn(e){document.querySelectorAll(`.${ft}`).forEach(r=>{let t=r.dataset.commentId,n=t===e,a=ei.get(t)||he.DEFAULT_COLOR,o=Za(a,.55),u=Za(a,.35);n?r.classList.add(U0):r.classList.remove(U0),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(s=>{s.setAttribute("fill",a),s.setAttribute("fill-opacity",n?"0.55":"0.35")}):r.style.backgroundColor=n?o:u})}function Ys(e){let r=document.querySelector(`.${ft}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function S6(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let a=document.createRange();return a.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,a)<0&&e.compareBoundaryPoints(Range.START_TO_END,a)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function z0(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,a)=>{let o=[`**${a+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let c of u)o.push(`  - **[${c.author}]** (reply): ${c.body}`);return o.join(`
`)}).join(`

`)}function V0(e,r){let t=z0(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(a=>!a.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function sr(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var E6=`
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
`,Y0=null,J0=null;function Q0(e,r){J0=e,Y0=r,T6()}function T6(){let e=document.createElement("style");e.textContent=E6,document.head.appendChild(e)}function X0(){let e=Y0(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let a=document.createElement("button");a.className="hf-modal-close",a.textContent="\xD7",a.addEventListener("click",()=>r.remove()),n.appendChild(a);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",p=>{p.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let c=document.querySelector(J0.contentSelector||"body").innerHTML,s=V0(c,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${s.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${sr(s)}</textarea>
  `;let l=document.createElement("button");l.className="hf-btn hf-btn-primary",l.textContent="Copy Prompt",l.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(s),l.textContent="Copied!"}catch{l.textContent="Copy failed"}setTimeout(()=>l.textContent="Copy Prompt",2e3)}),u.appendChild(l);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function Z0(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function eC(e,r){return e.length>r?e.slice(0,r)+"...":e}function rC(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var gn=null;function nC(e){gn=document.createElement("div"),gn.className="fb-toast-container",e.appendChild(gn)}function Ke(e,r="success"){if(!gn)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>tC(t)),t.appendChild(o)}gn.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>tC(t),r==="error"?8e3:4e3)}function tC(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}function aC(e,r){return r<=0?0:(e%r+r)%r}var C6=320,uC="feedback-layer-commenter",B=null,ue=null,xe=null,Js=null,sC=null,Qs=null,Xs=null,Zs=null,ec=null,wn=null,O6=null,tc=null,rc=!1,cC=[],lC=new Set,Pe=-1,qn=null,iC=!1;function k6(){iC||(iC=!0,$6())}function ze(){return localStorage.getItem(uC)||""}function fC({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:a,onReaction:o,onColorChange:u,defaultColor:c}){sC=e,Qs=r,Xs=t,Zs=n,ec=a,wn=o,O6=u,tc=c||null,k6(),B=document.createElement("div"),B.className="fb-sidebar fb-sidebar-collapsed",B.setAttribute("role","complementary"),B.setAttribute("aria-label","Feedback sidebar"),B.innerHTML=`
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
  `;let s=document.createElement("button");s.className="fb-sidebar-tab",s.textContent="Feedback",s.addEventListener("click",()=>vt()),document.body.appendChild(s),document.body.appendChild(B),nC(B),ue=B.querySelector(".fb-comment-list"),ue.setAttribute("role","list"),xe=B.querySelector(".fb-form-section");let l=B.querySelector(".fb-name-input");l.addEventListener("input",()=>{localStorage.setItem(uC,l.value.trim())}),B.querySelector(".fb-ai-btn").addEventListener("click",()=>X0()),B.querySelector(".fb-shortcuts-btn").addEventListener("click",()=>vC()),B.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>nc());let d=B.querySelector(".fb-show-resolved-cb");d.addEventListener("change",()=>{rc=d.checked,Re(cC,lC)}),document.addEventListener("keydown",_6)}function vt(){B.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden"),R6(),ue?.querySelector(".fb-thread .fb-cmt-card")&&ri(0)}function nc(){B.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden"),dC(),Pe=-1,document.body.focus()}function pC(){let e=document.activeElement;if(!e)return!1;let r=e.tagName;return r==="TEXTAREA"||r==="INPUT"||r==="SELECT"||e.isContentEditable}function xn(){return ue?Array.from(ue.querySelectorAll(".fb-thread > .fb-cmt-card:first-child")):[]}function ri(e){let r=xn();if(r.length===0)return;e=aC(e,r.length),Pe=e,ue.querySelectorAll(".fb-cmt-card").forEach(a=>a.classList.remove("fb-cmt-active"));let t=r[e];t.classList.add("fb-cmt-active"),t.scrollIntoView({behavior:"smooth",block:"nearest"});let n=t.closest(".fb-thread");n?.dataset.commentId&&(bn(n.dataset.commentId),Ys(n.dataset.commentId))}function I6(e){if(B.classList.contains("fb-sidebar-collapsed"))return;let r=e.key;if(r==="Escape"){e.preventDefault(),nc();return}if(!pC()){if(r==="Enter"){let t=xn();if(Pe>=0&&Pe<t.length){e.preventDefault();let a=t[Pe].closest(".fb-thread")?.querySelector(".fb-reply-btn");a&&a.click()}return}if(r==="j"){if(e.preventDefault(),xn().length===0)return;let n=Pe<0?0:Pe+1;ri(n);return}if(r==="k"){e.preventDefault();let t=xn();if(t.length===0)return;let n=Pe<0?t.length-1:Pe-1;ri(n);return}if(r==="?"){e.preventDefault(),vC();return}}}function vC(){let e=document.querySelector(".fb-shortcuts-overlay");if(e){e.remove();return}let r=document.createElement("div");r.className="fb-shortcuts-overlay";let t=document.createElement("div");t.className="fb-shortcuts-modal",t.innerHTML=`
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
  `;let n=()=>r.remove();t.querySelector(".fb-shortcuts-close").addEventListener("click",n),r.addEventListener("click",a=>{a.target===r&&n()}),r.addEventListener("keydown",a=>{a.key==="Escape"&&(a.stopPropagation(),n())}),r.appendChild(t),document.body.appendChild(r),t.querySelector(".fb-shortcuts-close").focus()}function _6(e){pC()||e.key==="s"&&(e.preventDefault(),P6())}function P6(){B.classList.contains("fb-sidebar-collapsed")?vt():nc()}function R6(){dC(),qn=I6,document.addEventListener("keydown",qn)}function dC(){qn&&(document.removeEventListener("keydown",qn),qn=null)}function mC(e){if(vt(),!ze()){let u=B.querySelector(".fb-name-input");u.classList.add("fb-name-input-error"),setTimeout(()=>u.classList.remove("fb-name-input-error"),2e3)}Js=e,xe.style.display="";let r=Object.entries(he.COLOR_PRESETS),t=tc||he.DEFAULT_COLOR;xe.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${sr(eC(e,120))}"</div>
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
  `;let n=t;xe.querySelectorAll(".fb-color-swatch").forEach(u=>{u.addEventListener("click",c=>{c.preventDefault(),xe.querySelectorAll(".fb-color-swatch").forEach(s=>s.classList.remove("fb-color-swatch-active")),u.classList.add("fb-color-swatch-active"),n=u.dataset.color})});let a=xe.querySelector(".fb-form-textarea");a.focus();let o=()=>{if(!ze()){let c=B.querySelector(".fb-name-input");c.focus(),c.style.outline="2px solid var(--remarq-danger)",setTimeout(()=>c.style.outline="",2e3);return}let u=a.value.trim();u&&(sC({comment:u,commenter:ze(),color:n}),xe.style.display="none",Js=null)};xe.querySelector(".fb-submit-btn").addEventListener("click",o),a.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),xe.querySelector(".fb-cancel-btn").addEventListener("click",()=>{xe.style.display="none",Js=null}),xe.scrollIntoView({behavior:"smooth",block:"nearest"})}function Re(e,r=new Set,t=new Map){cC=e,lC=r,Pe=-1,ue.innerHTML="";let{topLevel:n,repliesByParent:a}=Z0(e),o=n.slice().sort((l,f)=>{let p=t.get(l.id),v=t.get(f.id);return!p||!v?0:p.compareBoundaryPoints(Range.START_TO_START,v)}),u=o.filter(l=>{let f=r.has(l.id),p=l.status==="closed";return f||p&&rc}),c=rc?u:u.filter(l=>l.status!=="closed");if(o.length===0){ue.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let s=o.filter(l=>!r.has(l.id)&&l.status!=="closed").length;if(c.length===0){s>0?ue.innerHTML=`<div class="fb-empty">
        ${u.length} comment(s) resolved.
        ${s>0?`<br>${s} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:ue.innerHTML=`<div class="fb-empty">All ${o.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let l of c){let f=document.createElement("div");f.className="fb-thread",f.setAttribute("role","listitem"),f.setAttribute("tabindex","0"),f.dataset.commentId=l.id,f.appendChild(oC(l,!1));let p=a.get(l.id)||[];for(let d of p)f.appendChild(oC(d,!0));let v=document.createElement("button");v.className="fb-reply-btn",v.textContent="Reply",v.addEventListener("click",d=>{d.stopPropagation(),j6(l.id,f,v)}),f.appendChild(v),f.addEventListener("focus",()=>{let h=xn().indexOf(f.querySelector(".fb-cmt-card"));h>=0&&ri(h)}),ue.appendChild(f)}}function oC(e,r){let t=e.status==="closed",n=document.createElement("div");n.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":""),n.dataset.id=e.id,n.innerHTML=`
    <div class="fb-cmt-body">${sr(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${sr(e.author)}</span>
      <span class="fb-cmt-time">${rC(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
    <div class="fb-reactions"></div>
  `;let a=n.querySelector(".fb-reactions");return N6(a,e),r||(n.addEventListener("click",o=>{o.target.closest(".fb-cmt-delete")||o.target.closest(".fb-cmt-resolve")||o.target.closest(".fb-cmt-edit")||o.target.closest(".fb-reactions")||(bn(e.id),Ys(e.id),ue.querySelectorAll(".fb-cmt-card").forEach(u=>u.classList.remove("fb-cmt-active")),n.classList.add("fb-cmt-active"))}),n.querySelector(".fb-cmt-resolve").addEventListener("click",o=>{o.stopPropagation(),Xs&&Xs(e.id,!t)})),n.querySelector(".fb-cmt-edit").addEventListener("click",o=>{o.stopPropagation(),L6(e,n)}),n.querySelector(".fb-cmt-delete").addEventListener("click",o=>{o.stopPropagation(),Qs&&Qs(e.id)}),n}var ac={"\u{1F44D}":"Like","\u2764\uFE0F":"Love","\u{1F440}":"Seen","\u{1F389}":"Celebrate","\u{1F914}":"Question","\u{1F602}":"Funny"},A6=Object.keys(ac);function N6(e,r){let t=r.reactions||[],n=ze();for(let o of t){let u=document.createElement("button");u.className="fb-reaction-badge",n&&o.authors.includes(n)&&u.classList.add("fb-reaction-mine");let s=ac[o.emoji];u.innerHTML=`${o.emoji}<span class="fb-reaction-count">${o.count}</span>`,u.title=(s?s+": ":"")+o.authors.join(", "),u.addEventListener("click",l=>{l.stopPropagation(),wn&&wn(r.id,o.emoji)}),e.appendChild(u)}let a=document.createElement("button");a.className="fb-reaction-add",a.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><circle cx="9" cy="10" r="0.5" fill="currentColor"/><circle cx="15" cy="10" r="0.5" fill="currentColor"/></svg>',a.title="Add reaction",a.addEventListener("click",o=>{o.stopPropagation(),M6(e,r,a)}),e.appendChild(a)}function M6(e,r,t){let n=e.querySelector(".fb-emoji-picker");if(n){n.remove();return}let a=document.createElement("div");a.className="fb-emoji-picker";for(let u of A6){let c=ac[u],s=document.createElement("button");s.className="fb-emoji-option",s.textContent=u,s.title=c,s.addEventListener("click",l=>{l.stopPropagation(),a.remove(),wn&&wn(r.id,u)}),a.appendChild(s)}e.insertBefore(a,t.nextSibling);let o=u=>{!a.contains(u.target)&&u.target!==t&&(a.remove(),document.removeEventListener("click",o,!0))};setTimeout(()=>document.addEventListener("click",o,!0),0)}function j6(e,r,t){vt();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let a=document.createElement("div");a.className="fb-reply-form",a.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!ze()){let s=B.querySelector(".fb-name-input");s.focus(),s.style.outline="2px solid var(--remarq-danger)",setTimeout(()=>s.style.outline="",2e3);return}let c=a.querySelector("textarea").value.trim();c&&(Zs&&Zs({parent_id:e,comment:c,commenter:ze()}),a.remove(),t.style.display="")};a.querySelector(".fb-reply-submit").addEventListener("click",o);let u=a.querySelector("textarea");u.addEventListener("keydown",c=>{c.key==="Enter"&&(c.metaKey||c.ctrlKey)&&(c.preventDefault(),o())}),a.querySelector(".fb-reply-cancel").addEventListener("click",()=>{a.remove(),t.style.display=""}),r.insertBefore(a,t),u.focus()}function L6(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body,a=!e.parent_id,o=lt(e.color)||tc||he.DEFAULT_COLOR,u=Object.entries(he.COLOR_PRESETS);t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${sr(n)}</textarea>
    ${a?`<div class="fb-color-picker">
      <label class="fb-color-label">Color</label>
      <div class="fb-color-swatches">
        ${u.map(([f,p])=>`<button type="button" class="fb-color-swatch${p===o?" fb-color-swatch-active":""}" data-color="${p}" title="${f}" style="background:${p};"></button>`).join("")}
      </div>
    </div>`:""}
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let c=o;t.querySelectorAll(".fb-color-swatch").forEach(f=>{f.addEventListener("click",p=>{p.preventDefault(),p.stopPropagation(),t.querySelectorAll(".fb-color-swatch").forEach(v=>v.classList.remove("fb-color-swatch-active")),f.classList.add("fb-color-swatch-active"),c=f.dataset.color})});let s=t.querySelector("textarea");s.focus(),s.setSelectionRange(s.value.length,s.value.length);let l=()=>{let f=s.value.trim();if(!f)return;let p=a&&c!==o;ec&&ec(e.id,f,p?c:void 0)};t.querySelector(".fb-edit-save").addEventListener("click",l),s.addEventListener("keydown",f=>{f.key==="Enter"&&(f.metaKey||f.ctrlKey)&&(f.preventDefault(),l())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function hC(e){let r=ue.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(ue.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function $6(){let e=document.createElement("style");e.textContent=`
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
  `,document.head.appendChild(e)}var cr=null,ti=null,ni=null,oc=null,A=[],Ar=null,we=null,ee=new Set,pe=new Map;function F6(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null,theme:e?.dataset.theme||"auto",defaultColor:e?.dataset.defaultColor||null};cc(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{cr=document.querySelector(r.contentSelector)||document.body,ti=r.documentUri||window.location.origin+window.location.pathname,ni=r.documentId||null,oc=lt(r.defaultColor)||null,document.documentElement.dataset.remarqTheme=r.theme,fC({onSubmit:H6,onDelete:J6,onResolve:W6,onReply:K6,onEdit:z6,onReaction:Y6,onColorChange:V6,defaultColor:oc}),W0(a=>{vt(),hC(a),bn(a)}),G6(),await t(),D6(),Q0(r,()=>A)}catch(a){console.error("[feedback-layer] Boot failed:",a)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function D6(){try{A=await lc(ti,ni),ee=await B6(A),Re(A,ee,pe)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),Ke(`Failed to load comments: ${e.message}`,"error")}}async function B6(e){K0();let r=new Set;pe.clear();for(let t of e)if(!t.parent)try{let n=await ct({exact:t.quote,prefix:t.prefix,suffix:t.suffix},cr);n&&t.status!=="closed"?(pt(n,t.id,t.color),r.add(t.id),pe.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),pe.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function G6(){document.addEventListener("mouseup",ic),document.addEventListener("keyup",ic),document.addEventListener("touchend",ic)}function ic(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){Sn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){Sn();return}if(!cr.contains(r.commonAncestorContainer)){Sn();return}U6(r)},10)}function U6(e){Sn();let r=e.getBoundingClientRect();we=document.createElement("button"),we.className="fb-annotate-tooltip",we.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',we.style.top=window.scrollY+r.bottom+8+"px",we.style.left=window.scrollX+r.left+r.width/2-40+"px";let t=async n=>{n.preventDefault(),n.stopPropagation();let a=window.getSelection();if(!a||a.isCollapsed)return;let o=a.getRangeAt(0);try{Ar=await B0(o,cr),mC(Ar.exact)}catch(u){console.error("[feedback-layer] Failed to create selector:",u)}Sn()};we.addEventListener("mousedown",t),we.addEventListener("touchstart",t),document.body.appendChild(we)}function Sn(){we&&(we.remove(),we=null)}async function H6({comment:e,commenter:r,color:t}){if(!Ar)return;let n=t||oc||null;try{let a=await ai({uri:ti,document:ni,quote:Ar.exact,prefix:Ar.prefix,suffix:Ar.suffix,body:e,author:r,color:n});A.push(a);let o=await ct({exact:a.quote,prefix:a.prefix,suffix:a.suffix},cr);o&&(pt(o,a.id,a.color),ee.add(a.id)),Re(A,ee,pe),window.getSelection().removeAllRanges()}catch(a){console.error("[feedback-layer] Failed to create comment:",a),Ke(`Failed to save comment: ${a.message}`,"error")}Ar=null}async function W6(e,r){try{let n=await fc(e,r?"closed":"open"),a=A.findIndex(o=>o.id===e);if(a!==-1&&(A[a]=n),r)yn(e);else{let o=n,u=await ct({exact:o.quote,prefix:o.prefix,suffix:o.suffix},cr);u?(pt(u,o.id,o.color),ee.add(o.id)):ee.delete(o.id)}Re(A,ee,pe)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),Ke(`Failed to update comment: ${t.message}`,"error")}}async function K6({parent_id:e,comment:r,commenter:t}){try{let n=await ai({uri:ti,document:ni,body:r,author:t,parent:e});A.push(n),Re(A,ee,pe)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),Ke(`Failed to save reply: ${n.message}`,"error")}}async function z6(e,r,t){try{let n={body:r};t!==void 0&&(n.color=t);let a=await ii(e,n),o=A.findIndex(u=>u.id===e);if(o!==-1&&(A[o]=a),t!==void 0){yn(e);let u=a;if(u.status!=="closed"){let c=await ct({exact:u.quote,prefix:u.prefix,suffix:u.suffix},cr);c&&(pt(c,u.id,u.color),ee.add(u.id),pe.set(u.id,c))}}Re(A,ee,pe)}catch(n){console.error("[feedback-layer] Failed to edit comment:",n),Ke(`Failed to update comment: ${n.message}`,"error")}}async function V6(e,r){try{let t=await ii(e,{color:r}),n=A.findIndex(o=>o.id===e);n!==-1&&(A[n]=t),yn(e);let a=t;if(a.status!=="closed"){let o=await ct({exact:a.quote,prefix:a.prefix,suffix:a.suffix},cr);o&&(pt(o,a.id,a.color),ee.add(a.id),pe.set(a.id,o))}Re(A,ee,pe)}catch(t){console.error("[feedback-layer] Failed to change color:",t),Ke(`Failed to update color: ${t.message}`,"error")}}async function Y6(e,r){let t=ze();if(t)try{let o=A.find(s=>s.id===e)?.reactions?.find(s=>s.emoji===r)?.authors.includes(t),u;o?u=await dc(e,r,t):u=await vc(e,r,t);let c=A.findIndex(s=>s.id===e);c!==-1&&(A[c]={...A[c],reactions:u.reactions}),Re(A,ee,pe)}catch(n){console.error("[feedback-layer] Failed to toggle reaction:",n),Ke(`Failed to update reaction: ${n.message}`,"error")}}async function J6(e){try{await pc(e),yn(e),ee.delete(e),A=A.filter(r=>r.id!==e&&r.parent!==e),Re(A,ee,pe)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),Ke(`Failed to delete comment: ${r.message}`,"error")}}try{F6()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
