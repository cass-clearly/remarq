var FeedbackLayer=(()=>{var sO=Object.create;var Xs=Object.defineProperty;var cO=Object.getOwnPropertyDescriptor;var lO=Object.getOwnPropertyNames;var fO=Object.getPrototypeOf,pO=Object.prototype.hasOwnProperty;var i=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var vO=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of lO(r))!pO.call(e,a)&&a!==t&&Xs(e,a,{get:()=>r[a],enumerable:!(n=cO(r,a))||n.enumerable});return e};var b=(e,r,t)=>(t=e!=null?sO(fO(e)):{},vO(r||!e||!e.__esModule?Xs(t,"default",{value:e,enumerable:!0}):t,e));var _=i(($8,oc)=>{"use strict";oc.exports=function(e){try{return!!e()}catch{return!0}}});var Ar=i((F8,uc)=>{"use strict";var dO=_();uc.exports=!dO(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var A=i((D8,lc)=>{"use strict";var sc=Ar(),cc=Function.prototype,Za=cc.call,mO=sc&&cc.bind.bind(Za,Za);lc.exports=sc?mO:function(e){return function(){return Za.apply(e,arguments)}}});var U=i((B8,fc)=>{"use strict";var hO=A();fc.exports=hO({}.isPrototypeOf)});var P=i((ei,pc)=>{"use strict";var lt=function(e){return e&&e.Math===Math&&e};pc.exports=lt(typeof globalThis=="object"&&globalThis)||lt(typeof window=="object"&&window)||lt(typeof self=="object"&&self)||lt(typeof global=="object"&&global)||lt(typeof ei=="object"&&ei)||function(){return this}()||Function("return this")()});var Nr=i((G8,hc)=>{"use strict";var yO=Ar(),mc=Function.prototype,vc=mc.apply,dc=mc.call;hc.exports=typeof Reflect=="object"&&Reflect.apply||(yO?dc.bind(vc):function(){return dc.apply(vc,arguments)})});var Se=i((U8,bc)=>{"use strict";var yc=A(),bO=yc({}.toString),gO=yc("".slice);bc.exports=function(e){return gO(bO(e),8,-1)}});var ft=i((H8,gc)=>{"use strict";var qO=Se(),xO=A();gc.exports=function(e){if(qO(e)==="Function")return xO(e)}});var N=i((W8,qc)=>{"use strict";var ri=typeof document=="object"&&document.all;qc.exports=typeof ri>"u"&&ri!==void 0?function(e){return typeof e=="function"||e===ri}:function(e){return typeof e=="function"}});var H=i((K8,xc)=>{"use strict";var SO=_();xc.exports=!SO(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var G=i((z8,Sc)=>{"use strict";var wO=Ar(),bn=Function.prototype.call;Sc.exports=wO?bn.bind(bn):function(){return bn.apply(bn,arguments)}});var ti=i(Ec=>{"use strict";var wc={}.propertyIsEnumerable,Tc=Object.getOwnPropertyDescriptor,TO=Tc&&!wc.call({1:2},1);Ec.f=TO?function(r){var t=Tc(this,r);return!!t&&t.enumerable}:wc});var Ve=i((Y8,Oc)=>{"use strict";Oc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var gn=i((J8,Cc)=>{"use strict";var EO=A(),OO=_(),CO=Se(),ni=Object,kO=EO("".split);Cc.exports=OO(function(){return!ni("z").propertyIsEnumerable(0)})?function(e){return CO(e)==="String"?kO(e,""):ni(e)}:ni});var cr=i((Q8,kc)=>{"use strict";kc.exports=function(e){return e==null}});var lr=i((X8,Ic)=>{"use strict";var IO=cr(),_O=TypeError;Ic.exports=function(e){if(IO(e))throw new _O("Can't call method on "+e);return e}});var _e=i((Z8,_c)=>{"use strict";var PO=gn(),RO=lr();_c.exports=function(e){return PO(RO(e))}});var L=i((e5,Pc)=>{"use strict";var AO=N();Pc.exports=function(e){return typeof e=="object"?e!==null:AO(e)}});var V=i((r5,Rc)=>{"use strict";Rc.exports={}});var W=i((t5,Nc)=>{"use strict";var ai=V(),ii=P(),NO=N(),Ac=function(e){return NO(e)?e:void 0};Nc.exports=function(e,r){return arguments.length<2?Ac(ai[e])||Ac(ii[e]):ai[e]&&ai[e][r]||ii[e]&&ii[e][r]}});var Mr=i((n5,Lc)=>{"use strict";var MO=P(),Mc=MO.navigator,jc=Mc&&Mc.userAgent;Lc.exports=jc?String(jc):""});var jr=i((a5,Uc)=>{"use strict";var Gc=P(),oi=Mr(),$c=Gc.process,Fc=Gc.Deno,Dc=$c&&$c.versions||Fc&&Fc.version,Bc=Dc&&Dc.v8,he,qn;Bc&&(he=Bc.split("."),qn=he[0]>0&&he[0]<4?1:+(he[0]+he[1]));!qn&&oi&&(he=oi.match(/Edge\/(\d+)/),(!he||he[1]>=74)&&(he=oi.match(/Chrome\/(\d+)/),he&&(qn=+he[1])));Uc.exports=qn});var fr=i((i5,Wc)=>{"use strict";var Hc=jr(),jO=_(),LO=P(),$O=LO.String;Wc.exports=!!Object.getOwnPropertySymbols&&!jO(function(){var e=Symbol("symbol detection");return!$O(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Hc&&Hc<41})});var ui=i((o5,Kc)=>{"use strict";var FO=fr();Kc.exports=FO&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Lr=i((u5,zc)=>{"use strict";var DO=W(),BO=N(),GO=U(),UO=ui(),HO=Object;zc.exports=UO?function(e){return typeof e=="symbol"}:function(e){var r=DO("Symbol");return BO(r)&&GO(r.prototype,HO(e))}});var Ye=i((s5,Vc)=>{"use strict";var WO=String;Vc.exports=function(e){try{return WO(e)}catch{return"Object"}}});var D=i((c5,Yc)=>{"use strict";var KO=N(),zO=Ye(),VO=TypeError;Yc.exports=function(e){if(KO(e))return e;throw new VO(zO(e)+" is not a function")}});var xn=i((l5,Jc)=>{"use strict";var YO=D(),JO=cr();Jc.exports=function(e,r){var t=e[r];return JO(t)?void 0:YO(t)}});var Xc=i((f5,Qc)=>{"use strict";var si=G(),ci=N(),li=L(),QO=TypeError;Qc.exports=function(e,r){var t,n;if(r==="string"&&ci(t=e.toString)&&!li(n=si(t,e))||ci(t=e.valueOf)&&!li(n=si(t,e))||r!=="string"&&ci(t=e.toString)&&!li(n=si(t,e)))return n;throw new QO("Can't convert object to primitive value")}});var Z=i((p5,Zc)=>{"use strict";Zc.exports=!0});var tl=i((v5,rl)=>{"use strict";var el=P(),XO=Object.defineProperty;rl.exports=function(e,r){try{XO(el,e,{value:r,configurable:!0,writable:!0})}catch{el[e]=r}return r}});var pt=i((d5,il)=>{"use strict";var ZO=Z(),eC=P(),rC=tl(),nl="__core-js_shared__",al=il.exports=eC[nl]||rC(nl,{});(al.versions||(al.versions=[])).push({version:"3.48.0",mode:ZO?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var pr=i((m5,ul)=>{"use strict";var ol=pt();ul.exports=function(e,r){return ol[e]||(ol[e]=r||{})}});var re=i((h5,sl)=>{"use strict";var tC=lr(),nC=Object;sl.exports=function(e){return nC(tC(e))}});var K=i((y5,cl)=>{"use strict";var aC=A(),iC=re(),oC=aC({}.hasOwnProperty);cl.exports=Object.hasOwn||function(r,t){return oC(iC(r),t)}});var $r=i((b5,ll)=>{"use strict";var uC=A(),sC=0,cC=Math.random(),lC=uC(1.1.toString);ll.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+lC(++sC+cC,36)}});var R=i((g5,pl)=>{"use strict";var fC=P(),pC=pr(),fl=K(),vC=$r(),dC=fr(),mC=ui(),Fr=fC.Symbol,fi=pC("wks"),hC=mC?Fr.for||Fr:Fr&&Fr.withoutSetter||vC;pl.exports=function(e){return fl(fi,e)||(fi[e]=dC&&fl(Fr,e)?Fr[e]:hC("Symbol."+e)),fi[e]}});var hl=i((q5,ml)=>{"use strict";var yC=G(),vl=L(),dl=Lr(),bC=xn(),gC=Xc(),qC=R(),xC=TypeError,SC=qC("toPrimitive");ml.exports=function(e,r){if(!vl(e)||dl(e))return e;var t=bC(e,SC),n;if(t){if(r===void 0&&(r="default"),n=yC(t,e,r),!vl(n)||dl(n))return n;throw new xC("Can't convert object to primitive value")}return r===void 0&&(r="number"),gC(e,r)}});var Sn=i((x5,yl)=>{"use strict";var wC=hl(),TC=Lr();yl.exports=function(e){var r=wC(e,"string");return TC(r)?r:r+""}});var wn=i((S5,gl)=>{"use strict";var EC=P(),bl=L(),pi=EC.document,OC=bl(pi)&&bl(pi.createElement);gl.exports=function(e){return OC?pi.createElement(e):{}}});var vi=i((w5,ql)=>{"use strict";var CC=H(),kC=_(),IC=wn();ql.exports=!CC&&!kC(function(){return Object.defineProperty(IC("div"),"a",{get:function(){return 7}}).a!==7})});var vt=i(Sl=>{"use strict";var _C=H(),PC=G(),RC=ti(),AC=Ve(),NC=_e(),MC=Sn(),jC=K(),LC=vi(),xl=Object.getOwnPropertyDescriptor;Sl.f=_C?xl:function(r,t){if(r=NC(r),t=MC(t),LC)try{return xl(r,t)}catch{}if(jC(r,t))return AC(!PC(RC.f,r,t),r[t])}});var di=i((E5,wl)=>{"use strict";var $C=_(),FC=N(),DC=/#|\.prototype\./,dt=function(e,r){var t=GC[BC(e)];return t===HC?!0:t===UC?!1:FC(r)?$C(r):!!r},BC=dt.normalize=function(e){return String(e).replace(DC,".").toLowerCase()},GC=dt.data={},UC=dt.NATIVE="N",HC=dt.POLYFILL="P";wl.exports=dt});var Y=i((O5,El)=>{"use strict";var Tl=ft(),WC=D(),KC=Ar(),zC=Tl(Tl.bind);El.exports=function(e,r){return WC(e),r===void 0?e:KC?zC(e,r):function(){return e.apply(r,arguments)}}});var mi=i((C5,Ol)=>{"use strict";var VC=H(),YC=_();Ol.exports=VC&&YC(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var X=i((k5,Cl)=>{"use strict";var JC=L(),QC=String,XC=TypeError;Cl.exports=function(e){if(JC(e))return e;throw new XC(QC(e)+" is not an object")}});var te=i(Il=>{"use strict";var ZC=H(),ek=vi(),rk=mi(),Tn=X(),kl=Sn(),tk=TypeError,hi=Object.defineProperty,nk=Object.getOwnPropertyDescriptor,yi="enumerable",bi="configurable",gi="writable";Il.f=ZC?rk?function(r,t,n){if(Tn(r),t=kl(t),Tn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&gi in n&&!n[gi]){var a=nk(r,t);a&&a[gi]&&(r[t]=n.value,n={configurable:bi in n?n[bi]:a[bi],enumerable:yi in n?n[yi]:a[yi],writable:!1})}return hi(r,t,n)}:hi:function(r,t,n){if(Tn(r),t=kl(t),Tn(n),ek)try{return hi(r,t,n)}catch{}if("get"in n||"set"in n)throw new tk("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var we=i((_5,_l)=>{"use strict";var ak=H(),ik=te(),ok=Ve();_l.exports=ak?function(e,r,t){return ik.f(e,r,ok(1,t))}:function(e,r,t){return e[r]=t,e}});var x=i((P5,Rl)=>{"use strict";var mt=P(),uk=Nr(),sk=ft(),ck=N(),lk=vt().f,fk=di(),Dr=V(),pk=Y(),Br=we(),Pl=K();pt();var vk=function(e){var r=function(t,n,a){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,a)}return uk(e,this,arguments)};return r.prototype=e.prototype,r};Rl.exports=function(e,r){var t=e.target,n=e.global,a=e.stat,o=e.proto,u=n?mt:a?mt[t]:mt[t]&&mt[t].prototype,l=n?Dr:Dr[t]||Br(Dr,t,{})[t],s=l.prototype,c,f,p,v,d,h,m,y,g;for(v in r)c=fk(n?v:t+(a?".":"#")+v,e.forced),f=!c&&u&&Pl(u,v),h=l[v],f&&(e.dontCallGetSet?(g=lk(u,v),m=g&&g.value):m=u[v]),d=f&&m?m:r[v],!(!c&&!o&&typeof h==typeof d)&&(e.bind&&f?y=pk(d,mt):e.wrap&&f?y=vk(d):o&&ck(d)?y=sk(d):y=d,(e.sham||d&&d.sham||h&&h.sham)&&Br(y,"sham",!0),Br(l,v,y),o&&(p=t+"Prototype",Pl(Dr,p)||Br(Dr,p,{}),Br(Dr[p],v,d),e.real&&s&&(c||!s[v])&&Br(s,v,d)))}});var Pe=i((R5,Al)=>{"use strict";var dk=Se();Al.exports=Array.isArray||function(r){return dk(r)==="Array"}});var En=i((A5,Ml)=>{"use strict";var mk=R(),hk=mk("toStringTag"),Nl={};Nl[hk]="z";Ml.exports=String(Nl)==="[object z]"});var ht=i((N5,jl)=>{"use strict";var yk=En(),bk=N(),On=Se(),gk=R(),qk=gk("toStringTag"),xk=Object,Sk=On(function(){return arguments}())==="Arguments",wk=function(e,r){try{return e[r]}catch{}};jl.exports=yk?On:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=wk(r=xk(e),qk))=="string"?t:Sk?On(r):(n=On(r))==="Object"&&bk(r.callee)?"Arguments":n}});var xi=i((M5,Ll)=>{"use strict";var Tk=A(),Ek=N(),qi=pt(),Ok=Tk(Function.toString);Ek(qi.inspectSource)||(qi.inspectSource=function(e){return Ok(e)});Ll.exports=qi.inspectSource});var bt=i((j5,Gl)=>{"use strict";var Ck=A(),kk=_(),$l=N(),Ik=ht(),_k=W(),Pk=xi(),Fl=function(){},Dl=_k("Reflect","construct"),Si=/^\s*(?:class|function)\b/,Rk=Ck(Si.exec),Ak=!Si.test(Fl),yt=function(r){if(!$l(r))return!1;try{return Dl(Fl,[],r),!0}catch{return!1}},Bl=function(r){if(!$l(r))return!1;switch(Ik(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Ak||!!Rk(Si,Pk(r))}catch{return!0}};Bl.sham=!0;Gl.exports=!Dl||kk(function(){var e;return yt(yt.call)||!yt(Object)||!yt(function(){e=!0})||e})?Bl:yt});var Hl=i((L5,Ul)=>{"use strict";var Nk=Math.ceil,Mk=Math.floor;Ul.exports=Math.trunc||function(r){var t=+r;return(t>0?Mk:Nk)(t)}});var Cn=i(($5,Wl)=>{"use strict";var jk=Hl();Wl.exports=function(e){var r=+e;return r!==r||r===0?0:jk(r)}});var wi=i((F5,Kl)=>{"use strict";var Lk=Cn(),$k=Math.max,Fk=Math.min;Kl.exports=function(e,r){var t=Lk(e);return t<0?$k(t+r,0):Fk(t,r)}});var Ti=i((D5,zl)=>{"use strict";var Dk=Cn(),Bk=Math.min;zl.exports=function(e){var r=Dk(e);return r>0?Bk(r,9007199254740991):0}});var fe=i((B5,Vl)=>{"use strict";var Gk=Ti();Vl.exports=function(e){return Gk(e.length)}});var Gr=i((G5,Yl)=>{"use strict";var Uk=H(),Hk=te(),Wk=Ve();Yl.exports=function(e,r,t){Uk?Hk.f(e,r,Wk(0,t)):e[r]=t}});var Ur=i((U5,Jl)=>{"use strict";var Kk=H(),zk=Pe(),Vk=TypeError,Yk=Object.getOwnPropertyDescriptor,Jk=Kk&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();Jl.exports=Jk?function(e,r){if(zk(e)&&!Yk(e,"length").writable)throw new Vk("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var gt=i((H5,Ql)=>{"use strict";var Qk=_(),Xk=R(),Zk=jr(),e1=Xk("species");Ql.exports=function(e){return Zk>=51||!Qk(function(){var r=[],t=r.constructor={};return t[e1]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var vr=i((W5,Xl)=>{"use strict";var r1=A();Xl.exports=r1([].slice)});var rf=i(()=>{"use strict";var t1=x(),Zl=Pe(),n1=bt(),a1=L(),ef=wi(),i1=fe(),o1=_e(),u1=Gr(),s1=Ur(),c1=R(),l1=gt(),f1=vr(),p1=l1("slice"),v1=c1("species"),Ei=Array,d1=Math.max;t1({target:"Array",proto:!0,forced:!p1},{slice:function(r,t){var n=o1(this),a=i1(n),o=ef(r,a),u=ef(t===void 0?a:t,a),l,s,c;if(Zl(n)&&(l=n.constructor,n1(l)&&(l===Ei||Zl(l.prototype))?l=void 0:a1(l)&&(l=l[v1],l===null&&(l=void 0)),l===Ei||l===void 0))return f1(n,o,u);for(s=new(l===void 0?Ei:l)(d1(u-o,0)),c=0;o<u;o++,c++)o in n&&u1(s,c,n[o]);return s1(s,c),s}})});var ue=i((V5,tf)=>{"use strict";var m1=P(),h1=V();tf.exports=function(e,r){var t=h1[e+"Prototype"],n=t&&t[r];if(n)return n;var a=m1[e],o=a&&a.prototype;return o&&o[r]}});var af=i((Y5,nf)=>{"use strict";rf();var y1=ue();nf.exports=y1("Array","slice")});var uf=i((J5,of)=>{"use strict";var b1=U(),g1=af(),Oi=Array.prototype;of.exports=function(e){var r=e.slice;return e===Oi||b1(Oi,e)&&r===Oi.slice?g1:r}});var cf=i((Q5,sf)=>{"use strict";var q1=uf();sf.exports=q1});var ff=i((X5,lf)=>{"use strict";var x1=cf();lf.exports=x1});var vf=i((Z5,pf)=>{"use strict";var S1=ff();pf.exports=S1});var Ci=i((eG,df)=>{"use strict";df.exports=vf()});var Hr=i((rG,mf)=>{mf.exports=Ci()});var Je=i((tG,hf)=>{"use strict";var w1=ht(),T1=String;hf.exports=function(e){if(w1(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return T1(e)}});var qf=i((nG,gf)=>{"use strict";var ki=A(),E1=Cn(),O1=Je(),C1=lr(),k1=ki("".charAt),yf=ki("".charCodeAt),I1=ki("".slice),bf=function(e){return function(r,t){var n=O1(C1(r)),a=E1(t),o=n.length,u,l;return a<0||a>=o?e?"":void 0:(u=yf(n,a),u<55296||u>56319||a+1===o||(l=yf(n,a+1))<56320||l>57343?e?k1(n,a):u:e?I1(n,a,a+2):(u-55296<<10)+(l-56320)+65536)}};gf.exports={codeAt:bf(!1),charAt:bf(!0)}});var wf=i((aG,Sf)=>{"use strict";var _1=P(),P1=N(),xf=_1.WeakMap;Sf.exports=P1(xf)&&/native code/.test(String(xf))});var qt=i((iG,Ef)=>{"use strict";var R1=pr(),A1=$r(),Tf=R1("keys");Ef.exports=function(e){return Tf[e]||(Tf[e]=A1(e))}});var Wr=i((oG,Of)=>{"use strict";Of.exports={}});var Qe=i((uG,If)=>{"use strict";var N1=wf(),kf=P(),M1=L(),j1=we(),Ii=K(),_i=pt(),L1=qt(),$1=Wr(),Cf="Object already initialized",Pi=kf.TypeError,F1=kf.WeakMap,kn,xt,In,D1=function(e){return In(e)?xt(e):kn(e,{})},B1=function(e){return function(r){var t;if(!M1(r)||(t=xt(r)).type!==e)throw new Pi("Incompatible receiver, "+e+" required");return t}};N1||_i.state?(ye=_i.state||(_i.state=new F1),ye.get=ye.get,ye.has=ye.has,ye.set=ye.set,kn=function(e,r){if(ye.has(e))throw new Pi(Cf);return r.facade=e,ye.set(e,r),r},xt=function(e){return ye.get(e)||{}},In=function(e){return ye.has(e)}):(dr=L1("state"),$1[dr]=!0,kn=function(e,r){if(Ii(e,dr))throw new Pi(Cf);return r.facade=e,j1(e,dr,r),r},xt=function(e){return Ii(e,dr)?e[dr]:{}},In=function(e){return Ii(e,dr)});var ye,dr;If.exports={set:kn,get:xt,has:In,enforce:D1,getterFor:B1}});var Rf=i((sG,Pf)=>{"use strict";var Ri=H(),G1=K(),_f=Function.prototype,U1=Ri&&Object.getOwnPropertyDescriptor,Ai=G1(_f,"name"),H1=Ai&&function(){}.name==="something",W1=Ai&&(!Ri||Ri&&U1(_f,"name").configurable);Pf.exports={EXISTS:Ai,PROPER:H1,CONFIGURABLE:W1}});var Ni=i((cG,Nf)=>{"use strict";var K1=_e(),z1=wi(),V1=fe(),Af=function(e){return function(r,t,n){var a=K1(r),o=V1(a);if(o===0)return!e&&-1;var u=z1(n,o),l;if(e&&t!==t){for(;o>u;)if(l=a[u++],l!==l)return!0}else for(;o>u;u++)if((e||u in a)&&a[u]===t)return e||u||0;return!e&&-1}};Nf.exports={includes:Af(!0),indexOf:Af(!1)}});var ji=i((lG,jf)=>{"use strict";var Y1=A(),Mi=K(),J1=_e(),Q1=Ni().indexOf,X1=Wr(),Mf=Y1([].push);jf.exports=function(e,r){var t=J1(e),n=0,a=[],o;for(o in t)!Mi(X1,o)&&Mi(t,o)&&Mf(a,o);for(;r.length>n;)Mi(t,o=r[n++])&&(~Q1(a,o)||Mf(a,o));return a}});var _n=i((fG,Lf)=>{"use strict";Lf.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var Pn=i((pG,$f)=>{"use strict";var Z1=ji(),eI=_n();$f.exports=Object.keys||function(r){return Z1(r,eI)}});var Li=i(Ff=>{"use strict";var rI=H(),tI=mi(),nI=te(),aI=X(),iI=_e(),oI=Pn();Ff.f=rI&&!tI?Object.defineProperties:function(r,t){aI(r);for(var n=iI(t),a=oI(t),o=a.length,u=0,l;o>u;)nI.f(r,l=a[u++],n[l]);return r}});var $i=i((dG,Df)=>{"use strict";var uI=W();Df.exports=uI("document","documentElement")});var Xe=i((mG,zf)=>{"use strict";var sI=X(),cI=Li(),Bf=_n(),lI=Wr(),fI=$i(),pI=wn(),vI=qt(),Gf=">",Uf="<",Di="prototype",Bi="script",Wf=vI("IE_PROTO"),Fi=function(){},Kf=function(e){return Uf+Bi+Gf+e+Uf+"/"+Bi+Gf},Hf=function(e){e.write(Kf("")),e.close();var r=e.parentWindow.Object;return e=null,r},dI=function(){var e=pI("iframe"),r="java"+Bi+":",t;return e.style.display="none",fI.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(Kf("document.F=Object")),t.close(),t.F},Rn,An=function(){try{Rn=new ActiveXObject("htmlfile")}catch{}An=typeof document<"u"?document.domain&&Rn?Hf(Rn):dI():Hf(Rn);for(var e=Bf.length;e--;)delete An[Di][Bf[e]];return An()};lI[Wf]=!0;zf.exports=Object.create||function(r,t){var n;return r!==null?(Fi[Di]=sI(r),n=new Fi,Fi[Di]=null,n[Wf]=r):n=An(),t===void 0?n:cI.f(n,t)}});var Gi=i((hG,Vf)=>{"use strict";var mI=_();Vf.exports=!mI(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var St=i((yG,Jf)=>{"use strict";var hI=K(),yI=N(),bI=re(),gI=qt(),qI=Gi(),Yf=gI("IE_PROTO"),Ui=Object,xI=Ui.prototype;Jf.exports=qI?Ui.getPrototypeOf:function(e){var r=bI(e);if(hI(r,Yf))return r[Yf];var t=r.constructor;return yI(t)&&r instanceof t?t.prototype:r instanceof Ui?xI:null}});var Re=i((bG,Qf)=>{"use strict";var SI=we();Qf.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:SI(e,r,t),e}});var zi=i((gG,ep)=>{"use strict";var wI=_(),TI=N(),EI=L(),OI=Xe(),Xf=St(),CI=Re(),kI=R(),II=Z(),Ki=kI("iterator"),Zf=!1,Ae,Hi,Wi;[].keys&&(Wi=[].keys(),"next"in Wi?(Hi=Xf(Xf(Wi)),Hi!==Object.prototype&&(Ae=Hi)):Zf=!0);var _I=!EI(Ae)||wI(function(){var e={};return Ae[Ki].call(e)!==e});_I?Ae={}:II&&(Ae=OI(Ae));TI(Ae[Ki])||CI(Ae,Ki,function(){return this});ep.exports={IteratorPrototype:Ae,BUGGY_SAFARI_ITERATORS:Zf}});var tp=i((qG,rp)=>{"use strict";var PI=En(),RI=ht();rp.exports=PI?{}.toString:function(){return"[object "+RI(this)+"]"}});var Ne=i((xG,ap)=>{"use strict";var AI=En(),NI=te().f,MI=we(),jI=K(),LI=tp(),$I=R(),np=$I("toStringTag");ap.exports=function(e,r,t,n){var a=t?e:e&&e.prototype;a&&(jI(a,np)||NI(a,np,{configurable:!0,value:r}),n&&!AI&&MI(a,"toString",LI))}});var mr=i((SG,ip)=>{"use strict";ip.exports={}});var up=i((wG,op)=>{"use strict";var FI=zi().IteratorPrototype,DI=Xe(),BI=Ve(),GI=Ne(),UI=mr(),HI=function(){return this};op.exports=function(e,r,t,n){var a=r+" Iterator";return e.prototype=DI(FI,{next:BI(+!n,t)}),GI(e,a,!1,!0),UI[a]=HI,e}});var cp=i((TG,sp)=>{"use strict";var WI=A(),KI=D();sp.exports=function(e,r,t){try{return WI(KI(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var fp=i((EG,lp)=>{"use strict";var zI=L();lp.exports=function(e){return zI(e)||e===null}});var vp=i((OG,pp)=>{"use strict";var VI=fp(),YI=String,JI=TypeError;pp.exports=function(e){if(VI(e))return e;throw new JI("Can't set "+YI(e)+" as a prototype")}});var wt=i((CG,dp)=>{"use strict";var QI=cp(),XI=L(),ZI=lr(),e_=vp();dp.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=QI(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(a,o){return ZI(a),e_(o),XI(a)&&(e?t(a,o):a.__proto__=o),a}}():void 0)});var jn=i((kG,Tp)=>{"use strict";var r_=x(),t_=G(),Nn=Z(),Sp=Rf(),n_=N(),a_=up(),mp=St(),hp=wt(),i_=Ne(),o_=we(),Vi=Re(),u_=R(),yp=mr(),wp=zi(),s_=Sp.PROPER,c_=Sp.CONFIGURABLE,bp=wp.IteratorPrototype,Mn=wp.BUGGY_SAFARI_ITERATORS,Tt=u_("iterator"),gp="keys",Et="values",qp="entries",xp=function(){return this};Tp.exports=function(e,r,t,n,a,o,u){a_(t,r,n);var l=function(g){if(g===a&&v)return v;if(!Mn&&g&&g in f)return f[g];switch(g){case gp:return function(){return new t(this,g)};case Et:return function(){return new t(this,g)};case qp:return function(){return new t(this,g)}}return function(){return new t(this)}},s=r+" Iterator",c=!1,f=e.prototype,p=f[Tt]||f["@@iterator"]||a&&f[a],v=!Mn&&p||l(a),d=r==="Array"&&f.entries||p,h,m,y;if(d&&(h=mp(d.call(new e)),h!==Object.prototype&&h.next&&(!Nn&&mp(h)!==bp&&(hp?hp(h,bp):n_(h[Tt])||Vi(h,Tt,xp)),i_(h,s,!0,!0),Nn&&(yp[s]=xp))),s_&&a===Et&&p&&p.name!==Et&&(!Nn&&c_?o_(f,"name",Et):(c=!0,v=function(){return t_(p,this)})),a)if(m={values:l(Et),keys:o?v:l(gp),entries:l(qp)},u)for(y in m)(Mn||c||!(y in f))&&Vi(f,y,m[y]);else r_({target:r,proto:!0,forced:Mn||c},m);return(!Nn||u)&&f[Tt]!==v&&Vi(f,Tt,v,{name:a}),yp[r]=v,m}});var Ln=i((IG,Ep)=>{"use strict";Ep.exports=function(e,r){return{value:e,done:r}}});var hr=i(()=>{"use strict";var l_=qf().charAt,f_=Je(),Cp=Qe(),p_=jn(),Op=Ln(),kp="String Iterator",v_=Cp.set,d_=Cp.getterFor(kp);p_(String,"String",function(e){v_(this,{type:kp,string:f_(e),index:0})},function(){var r=d_(this),t=r.string,n=r.index,a;return n>=t.length?Op(void 0,!0):(a=l_(t,n),r.index+=a.length,Op(a,!1))})});var Yi=i((RG,_p)=>{"use strict";var m_=G(),Ip=X(),h_=xn();_p.exports=function(e,r,t){var n,a;Ip(e);try{if(n=h_(e,"return"),!n){if(r==="throw")throw t;return t}n=m_(n,e)}catch(o){a=!0,n=o}if(r==="throw")throw t;if(a)throw n;return Ip(n),t}});var Rp=i((AG,Pp)=>{"use strict";var y_=X(),b_=Yi();Pp.exports=function(e,r,t,n){try{return n?r(y_(t)[0],t[1]):r(t)}catch(a){b_(e,"throw",a)}}});var Ji=i((NG,Ap)=>{"use strict";var g_=R(),q_=mr(),x_=g_("iterator"),S_=Array.prototype;Ap.exports=function(e){return e!==void 0&&(q_.Array===e||S_[x_]===e)}});var Ot=i((MG,Mp)=>{"use strict";var w_=ht(),Np=xn(),T_=cr(),E_=mr(),O_=R(),C_=O_("iterator");Mp.exports=function(e){if(!T_(e))return Np(e,C_)||Np(e,"@@iterator")||E_[w_(e)]}});var $n=i((jG,jp)=>{"use strict";var k_=G(),I_=D(),__=X(),P_=Ye(),R_=Ot(),A_=TypeError;jp.exports=function(e,r){var t=arguments.length<2?R_(e):r;if(I_(t))return __(k_(t,e));throw new A_(P_(e)+" is not iterable")}});var Dp=i((LG,Fp)=>{"use strict";var N_=Y(),M_=G(),j_=re(),L_=Rp(),$_=Ji(),F_=bt(),D_=fe(),Lp=Gr(),B_=Ur(),G_=$n(),U_=Ot(),$p=Array;Fp.exports=function(r){var t=j_(r),n=F_(this),a=arguments.length,o=a>1?arguments[1]:void 0,u=o!==void 0;u&&(o=N_(o,a>2?arguments[2]:void 0));var l=U_(t),s=0,c,f,p,v,d,h;if(l&&!(this===$p&&$_(l)))for(f=n?new this:[],v=G_(t,l),d=v.next;!(p=M_(d,v)).done;s++)h=u?L_(v,o,[p.value,s],!0):p.value,Lp(f,s,h);else for(c=D_(t),f=n?new this(c):$p(c);c>s;s++)h=u?o(t[s],s):t[s],Lp(f,s,h);return B_(f,s),f}});var Xi=i(($G,Hp)=>{"use strict";var H_=R(),Gp=H_("iterator"),Up=!1;try{Bp=0,Qi={next:function(){return{done:!!Bp++}},return:function(){Up=!0}},Qi[Gp]=function(){return this},Array.from(Qi,function(){throw 2})}catch{}var Bp,Qi;Hp.exports=function(e,r){try{if(!r&&!Up)return!1}catch{return!1}var t=!1;try{var n={};n[Gp]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var Wp=i(()=>{"use strict";var W_=x(),K_=Dp(),z_=Xi(),V_=!z_(function(e){Array.from(e)});W_({target:"Array",stat:!0,forced:V_},{from:K_})});var zp=i((BG,Kp)=>{"use strict";hr();Wp();var Y_=V();Kp.exports=Y_.Array.from});var Yp=i((GG,Vp)=>{"use strict";var J_=zp();Vp.exports=J_});var Qp=i((UG,Jp)=>{"use strict";var Q_=Yp();Jp.exports=Q_});var Zp=i((HG,Xp)=>{"use strict";var X_=Qp();Xp.exports=X_});var Zi=i((WG,ev)=>{"use strict";ev.exports=Zp()});var Fn=i((KG,rv)=>{rv.exports=Zi()});var Ct=i((zG,tv)=>{"use strict";var Z_=TypeError,eP=9007199254740991;tv.exports=function(e){if(e>eP)throw Z_("Maximum allowed index exceeded");return e}});var ov=i((VG,iv)=>{"use strict";var nv=Pe(),rP=bt(),tP=L(),nP=R(),aP=nP("species"),av=Array;iv.exports=function(e){var r;return nv(e)&&(r=e.constructor,rP(r)&&(r===av||nv(r.prototype))?r=void 0:tP(r)&&(r=r[aP],r===null&&(r=void 0))),r===void 0?av:r}});var Dn=i((YG,uv)=>{"use strict";var iP=ov();uv.exports=function(e,r){return new(iP(e))(r===0?0:r)}});var eo=i(()=>{"use strict";var oP=x(),uP=_(),sP=Pe(),cP=L(),lP=re(),fP=fe(),sv=Ct(),cv=Gr(),pP=Ur(),vP=Dn(),dP=gt(),mP=R(),hP=jr(),lv=mP("isConcatSpreadable"),yP=hP>=51||!uP(function(){var e=[];return e[lv]=!1,e.concat()[0]!==e}),bP=function(e){if(!cP(e))return!1;var r=e[lv];return r!==void 0?!!r:sP(e)},gP=!yP||!dP("concat");oP({target:"Array",proto:!0,arity:1,forced:gP},{concat:function(r){var t=lP(this),n=vP(t,0),a=0,o,u,l,s,c;for(o=-1,l=arguments.length;o<l;o++)if(c=o===-1?t:arguments[o],bP(c))for(s=fP(c),sv(a+s),u=0;u<s;u++,a++)u in c&&cv(n,a,c[u]);else sv(a+1),cv(n,a++,c);return pP(n,a),n}})});var kt=i(()=>{});var It=i(fv=>{"use strict";var qP=ji(),xP=_n(),SP=xP.concat("length","prototype");fv.f=Object.getOwnPropertyNames||function(r){return qP(r,SP)}});var ro=i((rU,dv)=>{"use strict";var wP=Se(),TP=_e(),pv=It().f,EP=vr(),vv=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],OP=function(e){try{return pv(e)}catch{return EP(vv)}};dv.exports.f=function(r){return vv&&wP(r)==="Window"?OP(r):pv(TP(r))}});var Bn=i(mv=>{"use strict";mv.f=Object.getOwnPropertySymbols});var Gn=i((nU,hv)=>{"use strict";var CP=te();hv.exports=function(e,r,t){return CP.f(e,r,t)}});var Kr=i(yv=>{"use strict";var kP=R();yv.f=kP});var M=i((iU,gv)=>{"use strict";var bv=V(),IP=K(),_P=Kr(),PP=te().f;gv.exports=function(e){var r=bv.Symbol||(bv.Symbol={});IP(r,e)||PP(r,e,{value:_P.f(e)})}});var to=i((oU,qv)=>{"use strict";var RP=G(),AP=W(),NP=R(),MP=Re();qv.exports=function(){var e=AP("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=NP("toPrimitive");r&&!r[n]&&MP(r,n,function(a){return RP(t,this)},{arity:1})}});var _t=i((uU,Sv)=>{"use strict";var jP=Y(),LP=gn(),$P=re(),FP=fe(),xv=Dn(),no=Gr(),Ze=function(e){var r=e===1,t=e===2,n=e===3,a=e===4,o=e===6,u=e===7,l=e===5||o;return function(s,c,f){for(var p=$P(s),v=LP(p),d=FP(v),h=jP(c,f),m=0,y=0,g=r?xv(s,d):t||u?xv(s,0):void 0,q,k;d>m;m++)if((l||m in v)&&(q=v[m],k=h(q,m,p),e))if(r)no(g,m,k);else if(k)switch(e){case 3:return!0;case 5:return q;case 6:return m;case 2:no(g,y++,q)}else switch(e){case 4:return!1;case 7:no(g,y++,q)}return o?-1:n||a?a:g}};Sv.exports={forEach:Ze(0),map:Ze(1),filter:Ze(2),some:Ze(3),every:Ze(4),find:Ze(5),findIndex:Ze(6),filterReject:Ze(7)}});var Fv=i(()=>{"use strict";var Un=x(),At=P(),po=G(),DP=A(),BP=Z(),zr=H(),Vr=fr(),GP=_(),z=K(),UP=U(),uo=X(),Hn=_e(),vo=Sn(),HP=Je(),so=Ve(),Yr=Xe(),Ev=Pn(),WP=It(),Ov=ro(),KP=Bn(),Cv=vt(),kv=te(),zP=Li(),Iv=ti(),ao=Re(),VP=Gn(),mo=pr(),YP=qt(),_v=Wr(),wv=$r(),JP=R(),QP=Kr(),XP=M(),ZP=to(),eR=Ne(),Pv=Qe(),Wn=_t().forEach,ne=YP("hidden"),Kn="Symbol",Rt="prototype",rR=Pv.set,Tv=Pv.getterFor(Kn),pe=Object[Rt],yr=At.Symbol,Pt=yr&&yr[Rt],tR=At.RangeError,nR=At.TypeError,io=At.QObject,Rv=Cv.f,br=kv.f,Av=Ov.f,aR=Iv.f,Nv=DP([].push),Me=mo("symbols"),Nt=mo("op-symbols"),iR=mo("wks"),co=!io||!io[Rt]||!io[Rt].findChild,Mv=function(e,r,t){var n=Rv(pe,r);n&&delete pe[r],br(e,r,t),n&&e!==pe&&br(pe,r,n)},lo=zr&&GP(function(){return Yr(br({},"a",{get:function(){return br(this,"a",{value:7}).a}})).a!==7})?Mv:br,oo=function(e,r){var t=Me[e]=Yr(Pt);return rR(t,{type:Kn,tag:e,description:r}),zr||(t.description=r),t},zn=function(r,t,n){r===pe&&zn(Nt,t,n),uo(r);var a=vo(t);return uo(n),z(Me,a)?(n.enumerable?(z(r,ne)&&r[ne][a]&&(r[ne][a]=!1),n=Yr(n,{enumerable:so(0,!1)})):(z(r,ne)||br(r,ne,so(1,Yr(null))),r[ne][a]=!0),lo(r,a,n)):br(r,a,n)},ho=function(r,t){uo(r);var n=Hn(t),a=Ev(n).concat($v(n));return Wn(a,function(o){(!zr||po(fo,n,o))&&zn(r,o,n[o])}),r},oR=function(r,t){return t===void 0?Yr(r):ho(Yr(r),t)},fo=function(r){var t=vo(r),n=po(aR,this,t);return this===pe&&z(Me,t)&&!z(Nt,t)?!1:n||!z(this,t)||!z(Me,t)||z(this,ne)&&this[ne][t]?n:!0},jv=function(r,t){var n=Hn(r),a=vo(t);if(!(n===pe&&z(Me,a)&&!z(Nt,a))){var o=Rv(n,a);return o&&z(Me,a)&&!(z(n,ne)&&n[ne][a])&&(o.enumerable=!0),o}},Lv=function(r){var t=Av(Hn(r)),n=[];return Wn(t,function(a){!z(Me,a)&&!z(_v,a)&&Nv(n,a)}),n},$v=function(e){var r=e===pe,t=Av(r?Nt:Hn(e)),n=[];return Wn(t,function(a){z(Me,a)&&(!r||z(pe,a))&&Nv(n,Me[a])}),n};Vr||(yr=function(){if(UP(Pt,this))throw new nR("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:HP(arguments[0]),t=wv(r),n=function(a){var o=this===void 0?At:this;o===pe&&po(n,Nt,a),z(o,ne)&&z(o[ne],t)&&(o[ne][t]=!1);var u=so(1,a);try{lo(o,t,u)}catch(l){if(!(l instanceof tR))throw l;Mv(o,t,u)}};return zr&&co&&lo(pe,t,{configurable:!0,set:n}),oo(t,r)},Pt=yr[Rt],ao(Pt,"toString",function(){return Tv(this).tag}),ao(yr,"withoutSetter",function(e){return oo(wv(e),e)}),Iv.f=fo,kv.f=zn,zP.f=ho,Cv.f=jv,WP.f=Ov.f=Lv,KP.f=$v,QP.f=function(e){return oo(JP(e),e)},zr&&(VP(Pt,"description",{configurable:!0,get:function(){return Tv(this).description}}),BP||ao(pe,"propertyIsEnumerable",fo,{unsafe:!0})));Un({global:!0,constructor:!0,wrap:!0,forced:!Vr,sham:!Vr},{Symbol:yr});Wn(Ev(iR),function(e){XP(e)});Un({target:Kn,stat:!0,forced:!Vr},{useSetter:function(){co=!0},useSimple:function(){co=!1}});Un({target:"Object",stat:!0,forced:!Vr,sham:!zr},{create:oR,defineProperty:zn,defineProperties:ho,getOwnPropertyDescriptor:jv});Un({target:"Object",stat:!0,forced:!Vr},{getOwnPropertyNames:Lv});ZP();eR(yr,Kn);_v[ne]=!0});var yo=i((lU,Dv)=>{"use strict";var uR=fr();Dv.exports=uR&&!!Symbol.for&&!!Symbol.keyFor});var Gv=i(()=>{"use strict";var sR=x(),cR=W(),lR=K(),fR=Je(),Bv=pr(),pR=yo(),bo=Bv("string-to-symbol-registry"),vR=Bv("symbol-to-string-registry");sR({target:"Symbol",stat:!0,forced:!pR},{for:function(e){var r=fR(e);if(lR(bo,r))return bo[r];var t=cR("Symbol")(r);return bo[r]=t,vR[t]=r,t}})});var Hv=i(()=>{"use strict";var dR=x(),mR=K(),hR=Lr(),yR=Ye(),bR=pr(),gR=yo(),Uv=bR("symbol-to-string-registry");dR({target:"Symbol",stat:!0,forced:!gR},{keyFor:function(r){if(!hR(r))throw new TypeError(yR(r)+" is not a symbol");if(mR(Uv,r))return Uv[r]}})});var Kv=i((mU,Wv)=>{"use strict";var qR=L(),xR=Qe().get;Wv.exports=function(r){if(!qR(r))return!1;var t=xR(r);return!!t&&t.type==="RawJSON"}});var Qv=i((hU,Jv)=>{"use strict";var go=A(),SR=K(),Vn=SyntaxError,wR=parseInt,TR=String.fromCharCode,ER=go("".charAt),zv=go("".slice),Vv=go(/./.exec),Yv={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},OR=/^[\da-f]{4}$/i,CR=/^[\u0000-\u001F]$/;Jv.exports=function(e,r){for(var t=!0,n="";r<e.length;){var a=ER(e,r);if(a==="\\"){var o=zv(e,r,r+2);if(SR(Yv,o))n+=Yv[o],r+=2;else if(o==="\\u"){r+=2;var u=zv(e,r,r+4);if(!Vv(OR,u))throw new Vn("Bad Unicode escape at: "+r);n+=TR(wR(u,16)),r+=4}else throw new Vn('Unknown escape sequence: "'+o+'"')}else if(a==='"'){t=!1,r++;break}else{if(Vv(CR,a))throw new Vn("Bad control character in string literal at: "+r);n+=a,r++}}if(t)throw new Vn("Unterminated string at: "+r);return{value:n,end:r}}});var Zv=i((yU,Xv)=>{"use strict";var kR=_();Xv.exports=!kR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var vd=i(()=>{"use strict";var IR=x(),ud=W(),_R=Nr(),sd=G(),gr=A(),cd=_(),ed=Pe(),Jn=N(),PR=Kv(),rd=Lr(),td=Se(),RR=Je(),AR=vr(),NR=Qv(),MR=$r(),jR=fr(),qo=Zv(),ld=String,er=ud("JSON","stringify"),Yn=gr(/./.exec),So=gr("".charAt),LR=gr("".charCodeAt),$R=gr("".replace),xo=gr("".slice),wo=gr([].push),FR=gr(1.1.toString),DR=/[\uD800-\uDFFF]/g,nd=/^[\uD800-\uDBFF]$/,ad=/^[\uDC00-\uDFFF]$/,To=MR(),id=To.length,fd=!jR||cd(function(){var e=ud("Symbol")("stringify detection");return er([e])!=="[null]"||er({a:e})!=="{}"||er(Object(e))!=="{}"}),od=cd(function(){return er("\uDF06\uD834")!=='"\\udf06\\ud834"'||er("\uDEAD")!=='"\\udead"'}),BR=fd?function(e,r){var t=AR(arguments),n=pd(r);if(!(!Jn(n)&&(e===void 0||rd(e))))return t[1]=function(a,o){if(Jn(n)&&(o=sd(n,this,ld(a),o)),!rd(o))return o},_R(er,null,t)}:er,GR=function(e,r,t){var n=So(t,r-1),a=So(t,r+1);return Yn(nd,e)&&!Yn(ad,a)||Yn(ad,e)&&!Yn(nd,n)?"\\u"+FR(LR(e,0),16):e},pd=function(e){if(Jn(e))return e;if(ed(e)){for(var r=e.length,t=[],n=0;n<r;n++){var a=e[n];typeof a=="string"?wo(t,a):(typeof a=="number"||td(a)==="Number"||td(a)==="String")&&wo(t,RR(a))}var o=t.length,u=!0;return function(l,s){if(u)return u=!1,s;if(ed(this))return s;for(var c=0;c<o;c++)if(t[c]===l)return s}}};er&&IR({target:"JSON",stat:!0,arity:3,forced:fd||od||!qo},{stringify:function(r,t,n){var a=pd(t),o=[],u=BR(r,function(d,h){var m=Jn(a)?sd(a,this,ld(d),h):h;return!qo&&PR(m)?To+(wo(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(od&&(u=$R(u,DR,GR)),qo))return u;for(var l="",s=u.length,c=0;c<s;c++){var f=So(u,c);if(f==='"'){var p=NR(u,++c).end-1,v=xo(u,c,p);l+=xo(v,0,id)===To?o[xo(v,id)]:'"'+v+'"',c=p}else l+=f}return l}})});var md=i(()=>{"use strict";var UR=x(),HR=fr(),WR=_(),dd=Bn(),KR=re(),zR=!HR||WR(function(){dd.f(1)});UR({target:"Object",stat:!0,forced:zR},{getOwnPropertySymbols:function(r){var t=dd.f;return t?t(KR(r)):[]}})});var hd=i(()=>{"use strict";Fv();Gv();Hv();vd();md()});var Eo=i(()=>{"use strict";var VR=M();VR("asyncDispose")});var Oo=i(()=>{"use strict";var YR=M();YR("asyncIterator")});var yd=i(()=>{});var Co=i(()=>{"use strict";var JR=M();JR("dispose")});var bd=i(()=>{"use strict";var QR=M();QR("hasInstance")});var gd=i(()=>{"use strict";var XR=M();XR("isConcatSpreadable")});var ko=i(()=>{"use strict";var ZR=M();ZR("iterator")});var qd=i(()=>{"use strict";var eA=M();eA("match")});var xd=i(()=>{"use strict";var rA=M();rA("matchAll")});var Sd=i(()=>{"use strict";var tA=M();tA("replace")});var wd=i(()=>{"use strict";var nA=M();nA("search")});var Td=i(()=>{"use strict";var aA=M();aA("species")});var Ed=i(()=>{"use strict";var iA=M();iA("split")});var Io=i(()=>{"use strict";var oA=M(),uA=to();oA("toPrimitive");uA()});var Od=i(()=>{"use strict";var sA=W(),cA=M(),lA=Ne();cA("toStringTag");lA(sA("Symbol"),"Symbol")});var Cd=i(()=>{"use strict";var fA=M();fA("unscopables")});var kd=i(()=>{"use strict";var pA=P(),vA=Ne();vA(pA.JSON,"JSON",!0)});var Id=i(()=>{});var _d=i(()=>{});var Rd=i((sH,Pd)=>{"use strict";eo();kt();hd();Eo();Oo();yd();Co();bd();gd();ko();qd();xd();Sd();wd();Td();Ed();Io();Od();Cd();kd();Id();_d();var dA=V();Pd.exports=dA.Symbol});var _o=i((cH,Ad)=>{"use strict";Ad.exports=function(){}});var qr=i((lH,$d)=>{"use strict";var mA=_e(),Po=_o(),Nd=mr(),jd=Qe(),hA=te().f,yA=jn(),Qn=Ln(),bA=Z(),gA=H(),Ld="Array Iterator",qA=jd.set,xA=jd.getterFor(Ld);$d.exports=yA(Array,"Array",function(e,r){qA(this,{type:Ld,target:mA(e),index:0,kind:r})},function(){var e=xA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,Qn(void 0,!0);switch(e.kind){case"keys":return Qn(t,!1);case"values":return Qn(r[t],!1)}return Qn([t,r[t]],!1)},"values");var Md=Nd.Arguments=Nd.Array;Po("keys");Po("values");Po("entries");if(!bA&&gA&&Md.name!=="values")try{hA(Md,"name",{value:"values"})}catch{}});var Dd=i((fH,Fd)=>{"use strict";Fd.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var xr=i(()=>{"use strict";qr();var SA=Dd(),wA=P(),TA=Ne(),Bd=mr();for(Xn in SA)TA(wA[Xn],Xn),Bd[Xn]=Bd.Array;var Xn});var Ud=i((dH,Gd)=>{"use strict";var EA=Rd();xr();Gd.exports=EA});var Kd=i(()=>{"use strict";var OA=R(),CA=te().f,Hd=OA("metadata"),Wd=Function.prototype;Wd[Hd]===void 0&&CA(Wd,Hd,{value:null})});var zd=i(()=>{"use strict";Eo()});var Vd=i(()=>{"use strict";Co()});var Yd=i(()=>{"use strict";var kA=M();kA("metadata")});var Qd=i((wH,Jd)=>{"use strict";var IA=Ud();Kd();zd();Vd();Yd();Jd.exports=IA});var Ao=i((TH,Xd)=>{"use strict";var _A=W(),PA=A(),Ro=_A("Symbol"),RA=Ro.keyFor,AA=PA(Ro.prototype.valueOf);Xd.exports=Ro.isRegisteredSymbol||function(r){try{return RA(AA(r))!==void 0}catch{return!1}}});var Zd=i(()=>{"use strict";var NA=x(),MA=Ao();NA({target:"Symbol",stat:!0},{isRegisteredSymbol:MA})});var jo=i((CH,im)=>{"use strict";var jA=pr(),nm=W(),LA=A(),$A=Lr(),FA=R(),ea=nm("Symbol"),em=ea.isWellKnownSymbol,am=nm("Object","getOwnPropertyNames"),DA=LA(ea.prototype.valueOf),rm=jA("wks");for(Zn=0,No=am(ea),tm=No.length;Zn<tm;Zn++)try{Mo=No[Zn],$A(ea[Mo])&&FA(Mo)}catch{}var Mo,Zn,No,tm;im.exports=function(r){if(em&&em(r))return!0;try{for(var t=DA(r),n=0,a=am(rm),o=a.length;n<o;n++)if(rm[a[n]]==t)return!0}catch{}return!1}});var om=i(()=>{"use strict";var BA=x(),GA=jo();BA({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:GA})});var um=i(()=>{"use strict";var UA=M();UA("customMatcher")});var sm=i(()=>{"use strict";var HA=M();HA("observable")});var cm=i(()=>{"use strict";var WA=x(),KA=Ao();WA({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:KA})});var lm=i(()=>{"use strict";var zA=x(),VA=jo();zA({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:VA})});var fm=i(()=>{"use strict";var YA=M();YA("matcher")});var pm=i(()=>{"use strict";var JA=M();JA("metadataKey")});var vm=i(()=>{"use strict";var QA=M();QA("patternMatch")});var dm=i(()=>{"use strict";var XA=M();XA("replaceAll")});var hm=i((KH,mm)=>{"use strict";var ZA=Qd();Zd();om();um();sm();cm();lm();fm();pm();vm();dm();mm.exports=ZA});var Te=i((zH,ym)=>{"use strict";ym.exports=hm()});var ra=i((VH,bm)=>{bm.exports=Te()});var qm=i((YH,gm)=>{"use strict";qr();hr();var e2=Ot();gm.exports=e2});var Sm=i((JH,xm)=>{"use strict";var r2=qm();xr();xm.exports=r2});var Tm=i((QH,wm)=>{"use strict";var t2=Sm();wm.exports=t2});var Om=i((XH,Em)=>{"use strict";var n2=Tm();Em.exports=n2});var Lo=i((ZH,Cm)=>{"use strict";Cm.exports=Om()});var ta=i((eW,km)=>{km.exports=Lo()});var _m=i((rW,Im)=>{"use strict";qr();hr();var a2=$n();Im.exports=a2});var Rm=i((tW,Pm)=>{"use strict";var i2=_m();xr();Pm.exports=i2});var Nm=i((nW,Am)=>{"use strict";var o2=Rm();Am.exports=o2});var jm=i((aW,Mm)=>{"use strict";var u2=Nm();Mm.exports=u2});var $m=i((iW,Lm)=>{"use strict";Lm.exports=jm()});var na=i((oW,Fm)=>{Fm.exports=$m()});var Bm=i((uW,Dm)=>{"use strict";var s2=W(),c2=A(),l2=It(),f2=Bn(),p2=X(),v2=c2([].concat);Dm.exports=s2("Reflect","ownKeys")||function(r){var t=l2.f(p2(r)),n=f2.f;return n?v2(t,n(r)):t}});var Hm=i((sW,Um)=>{"use strict";var Gm=K(),d2=Bm(),m2=vt(),h2=te();Um.exports=function(e,r,t){for(var n=d2(r),a=h2.f,o=m2.f,u=0;u<n.length;u++){var l=n[u];!Gm(e,l)&&!(t&&Gm(t,l))&&a(e,l,o(r,l))}}});var Km=i((cW,Wm)=>{"use strict";var y2=L(),b2=we();Wm.exports=function(e,r){y2(r)&&"cause"in r&&b2(e,"cause",r.cause)}});var Jm=i((lW,Ym)=>{"use strict";var g2=A(),zm=Error,q2=g2("".replace),x2=function(e){return String(new zm(e).stack)}("zxcasd"),Vm=/\n\s*at [^:]*:[^\n]*/,S2=Vm.test(x2);Ym.exports=function(e,r){if(S2&&typeof e=="string"&&!zm.prepareStackTrace)for(;r--;)e=q2(e,Vm,"");return e}});var Xm=i((fW,Qm)=>{"use strict";var w2=_(),T2=Ve();Qm.exports=!w2(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",T2(1,7)),e.stack!==7):!0})});var rh=i((pW,eh)=>{"use strict";var E2=we(),O2=Jm(),C2=Xm(),Zm=Error.captureStackTrace;eh.exports=function(e,r,t,n){C2&&(Zm?Zm(e,r):E2(e,"stack",O2(t,n)))}});var ve=i((vW,ih)=>{"use strict";var k2=Y(),I2=G(),_2=X(),P2=Ye(),R2=Ji(),A2=fe(),th=U(),N2=$n(),M2=Ot(),nh=Yi(),j2=TypeError,aa=function(e,r){this.stopped=e,this.result=r},ah=aa.prototype;ih.exports=function(e,r,t){var n=t&&t.that,a=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),l=!!(t&&t.INTERRUPTED),s=k2(r,n),c,f,p,v,d,h,m,y=function(q){return c&&nh(c,"normal"),new aa(!0,q)},g=function(q){return a?(_2(q),l?s(q[0],q[1],y):s(q[0],q[1])):l?s(q,y):s(q)};if(o)c=e.iterator;else if(u)c=e;else{if(f=M2(e),!f)throw new j2(P2(e)+" is not iterable");if(R2(f)){for(p=0,v=A2(e);v>p;p++)if(d=g(e[p]),d&&th(ah,d))return d;return new aa(!1)}c=N2(e,f)}for(h=o?e.next:c.next;!(m=I2(h,c)).done;){try{d=g(m.value)}catch(q){nh(c,"throw",q)}if(typeof d=="object"&&d&&th(ah,d))return d}return new aa(!1)}});var uh=i((dW,oh)=>{"use strict";var L2=Je();oh.exports=function(e,r){return e===void 0?arguments.length<2?"":r:L2(e)}});var ch=i(()=>{"use strict";var $2=x(),F2=U(),D2=St(),ia=wt(),B2=Hm(),sh=Xe(),$o=we(),Fo=Ve(),G2=Km(),U2=rh(),H2=ve(),W2=uh(),K2=R(),z2=K2("toStringTag"),oa=Error,V2=[].push,Jr=function(r,t){var n=F2(Do,this),a;ia?a=ia(new oa,n?D2(this):Do):(a=n?this:sh(Do),$o(a,z2,"Error")),t!==void 0&&$o(a,"message",W2(t)),U2(a,Jr,a.stack,1),arguments.length>2&&G2(a,arguments[2]);var o=[];return H2(r,V2,{that:o}),$o(a,"errors",o),a};ia?ia(Jr,oa):B2(Jr,oa,{name:!0});var Do=Jr.prototype=sh(oa.prototype,{constructor:Fo(1,Jr),message:Fo(1,""),name:Fo(1,"AggregateError")});$2({global:!0,constructor:!0,arity:2},{AggregateError:Jr})});var Bo=i(()=>{"use strict";ch()});var Go=i((gW,lh)=>{"use strict";var Mt=P(),Y2=Mr(),J2=Se(),ua=function(e){return Y2.slice(0,e.length)===e};lh.exports=function(){return ua("Bun/")?"BUN":ua("Cloudflare-Workers")?"CLOUDFLARE":ua("Deno/")?"DENO":ua("Node.js/")?"NODE":Mt.Bun&&typeof Bun.version=="string"?"BUN":Mt.Deno&&typeof Deno.version=="object"?"DENO":J2(Mt.process)==="process"?"NODE":Mt.window&&Mt.document?"BROWSER":"REST"}()});var jt=i((qW,fh)=>{"use strict";var Q2=Go();fh.exports=Q2==="NODE"});var Uo=i((xW,vh)=>{"use strict";var X2=W(),Z2=Gn(),eN=R(),rN=H(),ph=eN("species");vh.exports=function(e){var r=X2(e);rN&&r&&!r[ph]&&Z2(r,ph,{configurable:!0,get:function(){return this}})}});var sa=i((SW,dh)=>{"use strict";var tN=U(),nN=TypeError;dh.exports=function(e,r){if(tN(r,e))return e;throw new nN("Incorrect invocation")}});var Ho=i((wW,mh)=>{"use strict";var aN=bt(),iN=Ye(),oN=TypeError;mh.exports=function(e){if(aN(e))return e;throw new oN(iN(e)+" is not a constructor")}});var Wo=i((TW,yh)=>{"use strict";var hh=X(),uN=Ho(),sN=cr(),cN=R(),lN=cN("species");yh.exports=function(e,r){var t=hh(e).constructor,n;return t===void 0||sN(n=hh(t)[lN])?r:uN(n)}});var gh=i((EW,bh)=>{"use strict";var fN=TypeError;bh.exports=function(e,r){if(e<r)throw new fN("Not enough arguments");return e}});var Ko=i((OW,qh)=>{"use strict";var pN=Mr();qh.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(pN)});var ru=i((CW,Ih)=>{"use strict";var se=P(),vN=Nr(),dN=Y(),xh=N(),mN=K(),kh=_(),Sh=$i(),hN=vr(),wh=wn(),yN=gh(),bN=Ko(),gN=jt(),Xo=se.setImmediate,Zo=se.clearImmediate,qN=se.process,zo=se.Dispatch,xN=se.Function,Th=se.MessageChannel,SN=se.String,Vo=0,Lt={},Eh="onreadystatechange",$t,Sr,Yo,Jo;kh(function(){$t=se.location});var eu=function(e){if(mN(Lt,e)){var r=Lt[e];delete Lt[e],r()}},Qo=function(e){return function(){eu(e)}},Oh=function(e){eu(e.data)},Ch=function(e){se.postMessage(SN(e),$t.protocol+"//"+$t.host)};(!Xo||!Zo)&&(Xo=function(r){yN(arguments.length,1);var t=xh(r)?r:xN(r),n=hN(arguments,1);return Lt[++Vo]=function(){vN(t,void 0,n)},Sr(Vo),Vo},Zo=function(r){delete Lt[r]},gN?Sr=function(e){qN.nextTick(Qo(e))}:zo&&zo.now?Sr=function(e){zo.now(Qo(e))}:Th&&!bN?(Yo=new Th,Jo=Yo.port2,Yo.port1.onmessage=Oh,Sr=dN(Jo.postMessage,Jo)):se.addEventListener&&xh(se.postMessage)&&!se.importScripts&&$t&&$t.protocol!=="file:"&&!kh(Ch)?(Sr=Ch,se.addEventListener("message",Oh,!1)):Eh in wh("script")?Sr=function(e){Sh.appendChild(wh("script"))[Eh]=function(){Sh.removeChild(this),eu(e)}}:Sr=function(e){setTimeout(Qo(e),0)});Ih.exports={set:Xo,clear:Zo}});var Rh=i((kW,Ph)=>{"use strict";var _h=P(),wN=H(),TN=Object.getOwnPropertyDescriptor;Ph.exports=function(e){if(!wN)return _h[e];var r=TN(_h,e);return r&&r.value}});var tu=i((IW,Nh)=>{"use strict";var Ah=function(){this.head=null,this.tail=null};Ah.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Nh.exports=Ah});var jh=i((_W,Mh)=>{"use strict";var EN=Mr();Mh.exports=/ipad|iphone|ipod/i.test(EN)&&typeof Pebble<"u"});var $h=i((PW,Lh)=>{"use strict";var ON=Mr();Lh.exports=/web0s(?!.*chrome)/i.test(ON)});var Wh=i((RW,Hh)=>{"use strict";var Xr=P(),CN=Rh(),Fh=Y(),nu=ru().set,kN=tu(),IN=Ko(),_N=jh(),PN=$h(),au=jt(),Dh=Xr.MutationObserver||Xr.WebKitMutationObserver,Bh=Xr.document,Gh=Xr.process,ca=Xr.Promise,uu=CN("queueMicrotask"),Qr,iu,ou,la,Uh;uu||(Ft=new kN,Dt=function(){var e,r;for(au&&(e=Gh.domain)&&e.exit();r=Ft.get();)try{r()}catch(t){throw Ft.head&&Qr(),t}e&&e.enter()},!IN&&!au&&!PN&&Dh&&Bh?(iu=!0,ou=Bh.createTextNode(""),new Dh(Dt).observe(ou,{characterData:!0}),Qr=function(){ou.data=iu=!iu}):!_N&&ca&&ca.resolve?(la=ca.resolve(void 0),la.constructor=ca,Uh=Fh(la.then,la),Qr=function(){Uh(Dt)}):au?Qr=function(){Gh.nextTick(Dt)}:(nu=Fh(nu,Xr),Qr=function(){nu(Dt)}),uu=function(e){Ft.head||Qr(),Ft.add(e)});var Ft,Dt;Hh.exports=uu});var zh=i((AW,Kh)=>{"use strict";Kh.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var wr=i((NW,Vh)=>{"use strict";Vh.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var Tr=i((MW,Yh)=>{"use strict";var RN=P();Yh.exports=RN.Promise});var Zr=i((jW,Zh)=>{"use strict";var AN=P(),Bt=Tr(),NN=N(),MN=di(),jN=xi(),LN=R(),Jh=Go(),$N=Z(),su=jr(),Qh=Bt&&Bt.prototype,FN=LN("species"),cu=!1,Xh=NN(AN.PromiseRejectionEvent),DN=MN("Promise",function(){var e=jN(Bt),r=e!==String(Bt);if(!r&&su===66||$N&&!(Qh.catch&&Qh.finally))return!0;if(!su||su<51||!/native code/.test(e)){var t=new Bt(function(o){o(1)}),n=function(o){o(function(){},function(){})},a=t.constructor={};if(a[FN]=n,cu=t.then(function(){})instanceof n,!cu)return!0}return!r&&(Jh==="BROWSER"||Jh==="DENO")&&!Xh});Zh.exports={CONSTRUCTOR:DN,REJECTION_EVENT:Xh,SUBCLASSING:cu}});var Ee=i((LW,ry)=>{"use strict";var ey=D(),BN=TypeError,GN=function(e){var r,t;this.promise=new e(function(n,a){if(r!==void 0||t!==void 0)throw new BN("Bad Promise constructor");r=n,t=a}),this.resolve=ey(r),this.reject=ey(t)};ry.exports.f=function(e){return new GN(e)}});var xy=i(()=>{"use strict";var UN=x(),HN=Z(),da=jt(),rr=P(),WN=V(),nt=G(),ty=Re(),ny=wt(),KN=Ne(),zN=Uo(),VN=D(),va=N(),YN=L(),JN=sa(),QN=Wo(),sy=ru().set,du=Wh(),XN=zh(),ZN=wr(),eM=tu(),cy=Qe(),ma=Tr(),mu=Zr(),ly=Ee(),ha="Promise",fy=mu.CONSTRUCTOR,rM=mu.REJECTION_EVENT,tM=mu.SUBCLASSING,lu=cy.getterFor(ha),nM=cy.set,et=ma&&ma.prototype,Er=ma,fa=et,py=rr.TypeError,fu=rr.document,hu=rr.process,pu=ly.f,aM=pu,iM=!!(fu&&fu.createEvent&&rr.dispatchEvent),vy="unhandledrejection",oM="rejectionhandled",ay=0,dy=1,uM=2,yu=1,my=2,pa,iy,hy,oy,yy=function(e){var r;return YN(e)&&va(r=e.then)?r:!1},by=function(e,r){var t=r.value,n=r.state===dy,a=n?e.ok:e.fail,o=e.resolve,u=e.reject,l=e.domain,s,c,f;try{a?(n||(r.rejection===my&&cM(r),r.rejection=yu),a===!0?s=t:(l&&l.enter(),s=a(t),l&&(l.exit(),f=!0)),s===e.promise?u(new py("Promise-chain cycle")):(c=yy(s))?nt(c,s,o,u):o(s)):u(t)}catch(p){l&&!f&&l.exit(),u(p)}},gy=function(e,r){e.notified||(e.notified=!0,du(function(){for(var t=e.reactions,n;n=t.get();)by(n,e);e.notified=!1,r&&!e.rejection&&sM(e)}))},qy=function(e,r,t){var n,a;iM?(n=fu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),rr.dispatchEvent(n)):n={promise:r,reason:t},!rM&&(a=rr["on"+e])?a(n):e===vy&&XN("Unhandled promise rejection",t)},sM=function(e){nt(sy,rr,function(){var r=e.facade,t=e.value,n=uy(e),a;if(n&&(a=ZN(function(){da?hu.emit("unhandledRejection",t,r):qy(vy,r,t)}),e.rejection=da||uy(e)?my:yu,a.error))throw a.value})},uy=function(e){return e.rejection!==yu&&!e.parent},cM=function(e){nt(sy,rr,function(){var r=e.facade;da?hu.emit("rejectionHandled",r):qy(oM,r,e.value)})},rt=function(e,r,t){return function(n){e(r,n,t)}},tt=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=uM,gy(e,!0))},vu=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new py("Promise can't be resolved itself");var n=yy(r);n?du(function(){var a={done:!1};try{nt(n,r,rt(vu,a,e),rt(tt,a,e))}catch(o){tt(a,o,e)}}):(e.value=r,e.state=dy,gy(e,!1))}catch(a){tt({done:!1},a,e)}}};if(fy&&(Er=function(r){JN(this,fa),VN(r),nt(pa,this);var t=lu(this);try{r(rt(vu,t),rt(tt,t))}catch(n){tt(t,n)}},fa=Er.prototype,pa=function(r){nM(this,{type:ha,done:!1,notified:!1,parent:!1,reactions:new eM,rejection:!1,state:ay,value:null})},pa.prototype=ty(fa,"then",function(r,t){var n=lu(this),a=pu(QN(this,Er));return n.parent=!0,a.ok=va(r)?r:!0,a.fail=va(t)&&t,a.domain=da?hu.domain:void 0,n.state===ay?n.reactions.add(a):du(function(){by(a,n)}),a.promise}),iy=function(){var e=new pa,r=lu(e);this.promise=e,this.resolve=rt(vu,r),this.reject=rt(tt,r)},ly.f=pu=function(e){return e===Er||e===hy?new iy(e):aM(e)},!HN&&va(ma)&&et!==Object.prototype)){oy=et.then,tM||ty(et,"then",function(r,t){var n=this;return new Er(function(a,o){nt(oy,n,a,o)}).then(r,t)},{unsafe:!0});try{delete et.constructor}catch{}ny&&ny(et,fa)}UN({global:!0,constructor:!0,wrap:!0,forced:fy},{Promise:Er});hy=WN.Promise;KN(Er,ha,!1,!0);zN(ha)});var Gt=i((DW,Sy)=>{"use strict";var lM=Tr(),fM=Xi(),pM=Zr().CONSTRUCTOR;Sy.exports=pM||!fM(function(e){lM.all(e).then(void 0,function(){})})});var wy=i(()=>{"use strict";var vM=x(),dM=G(),mM=D(),hM=Ee(),yM=wr(),bM=ve(),gM=Gt();vM({target:"Promise",stat:!0,forced:gM},{all:function(r){var t=this,n=hM.f(t),a=n.resolve,o=n.reject,u=yM(function(){var l=mM(t.resolve),s=[],c=0,f=1;bM(r,function(p){var v=c++,d=!1;f++,dM(l,t,p).then(function(h){d||(d=!0,s[v]=h,--f||a(s))},o)}),--f||a(s)});return u.error&&o(u.value),n.promise}})});var Ey=i(()=>{"use strict";var qM=x(),xM=Z(),SM=Zr().CONSTRUCTOR,gu=Tr(),wM=W(),TM=N(),EM=Re(),Ty=gu&&gu.prototype;qM({target:"Promise",proto:!0,forced:SM,real:!0},{catch:function(e){return this.then(void 0,e)}});!xM&&TM(gu)&&(bu=wM("Promise").prototype.catch,Ty.catch!==bu&&EM(Ty,"catch",bu,{unsafe:!0}));var bu});var Oy=i(()=>{"use strict";var OM=x(),CM=G(),kM=D(),IM=Ee(),_M=wr(),PM=ve(),RM=Gt();OM({target:"Promise",stat:!0,forced:RM},{race:function(r){var t=this,n=IM.f(t),a=n.reject,o=_M(function(){var u=kM(t.resolve);PM(r,function(l){CM(u,t,l).then(n.resolve,a)})});return o.error&&a(o.value),n.promise}})});var Cy=i(()=>{"use strict";var AM=x(),NM=Ee(),MM=Zr().CONSTRUCTOR;AM({target:"Promise",stat:!0,forced:MM},{reject:function(r){var t=NM.f(this),n=t.reject;return n(r),t.promise}})});var qu=i((YW,ky)=>{"use strict";var jM=X(),LM=L(),$M=Ee();ky.exports=function(e,r){if(jM(e),LM(r)&&r.constructor===e)return r;var t=$M.f(e),n=t.resolve;return n(r),t.promise}});var Py=i(()=>{"use strict";var FM=x(),DM=W(),Iy=Z(),BM=Tr(),_y=Zr().CONSTRUCTOR,GM=qu(),UM=DM("Promise"),HM=Iy&&!_y;FM({target:"Promise",stat:!0,forced:Iy||_y},{resolve:function(r){return GM(HM&&this===UM?BM:this,r)}})});var Ry=i(()=>{"use strict";xy();wy();Ey();Oy();Cy();Py()});var xu=i(()=>{"use strict";var WM=x(),KM=G(),zM=D(),VM=Ee(),YM=wr(),JM=ve(),QM=Gt();WM({target:"Promise",stat:!0,forced:QM},{allSettled:function(r){var t=this,n=VM.f(t),a=n.resolve,o=n.reject,u=YM(function(){var l=zM(t.resolve),s=[],c=0,f=1;JM(r,function(p){var v=c++,d=!1;f++,KM(l,t,p).then(function(h){d||(d=!0,s[v]={status:"fulfilled",value:h},--f||a(s))},function(h){d||(d=!0,s[v]={status:"rejected",reason:h},--f||a(s))})}),--f||a(s)});return u.error&&o(u.value),n.promise}})});var Su=i(()=>{"use strict";var XM=x(),ZM=G(),ej=D(),rj=W(),tj=Ee(),nj=wr(),aj=ve(),ij=Gt(),Ay="No one promise resolved";XM({target:"Promise",stat:!0,forced:ij},{any:function(r){var t=this,n=rj("AggregateError"),a=tj.f(t),o=a.resolve,u=a.reject,l=nj(function(){var s=ej(t.resolve),c=[],f=0,p=1,v=!1;aj(r,function(d){var h=f++,m=!1;p++,ZM(s,t,d).then(function(y){m||v||(v=!0,o(y))},function(y){m||v||(m=!0,c[h]=y,--p||u(new n(c,Ay)))})}),--p||u(new n(c,Ay))});return l.error&&u(l.value),a.promise}})});var Tu=i(()=>{"use strict";var oj=x(),uj=P(),sj=Nr(),cj=vr(),lj=Ee(),fj=D(),My=wr(),wu=uj.Promise,Ny=!1,pj=!wu||!wu.try||My(function(){wu.try(function(e){Ny=e===8},8)}).error||!Ny;oj({target:"Promise",stat:!0,forced:pj},{try:function(e){var r=arguments.length>1?cj(arguments,1):[],t=lj.f(this),n=My(function(){return sj(fj(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var Eu=i(()=>{"use strict";var vj=x(),dj=Ee();vj({target:"Promise",stat:!0},{withResolvers:function(){var r=dj.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var Fy=i(()=>{"use strict";var mj=x(),hj=Z(),ya=Tr(),yj=_(),Ly=W(),$y=N(),bj=Wo(),jy=qu(),gj=Re(),Cu=ya&&ya.prototype,qj=!!ya&&yj(function(){Cu.finally.call({then:function(){}},function(){})});mj({target:"Promise",proto:!0,real:!0,forced:qj},{finally:function(e){var r=bj(this,Ly("Promise")),t=$y(e);return this.then(t?function(n){return jy(r,e()).then(function(){return n})}:e,t?function(n){return jy(r,e()).then(function(){throw n})}:e)}});!hj&&$y(ya)&&(Ou=Ly("Promise").prototype.finally,Cu.finally!==Ou&&gj(Cu,"finally",Ou,{unsafe:!0}));var Ou});var By=i((lK,Dy)=>{"use strict";Bo();qr();kt();Ry();xu();Su();Tu();Eu();Fy();hr();var xj=V();Dy.exports=xj.Promise});var Uy=i((fK,Gy)=>{"use strict";var Sj=By();xr();Gy.exports=Sj});var Hy=i(()=>{"use strict";Tu()});var Wy=i(()=>{"use strict";Eu()});var zy=i((hK,Ky)=>{"use strict";var wj=Uy();Hy();Wy();Ky.exports=wj});var Vy=i(()=>{"use strict";Bo()});var Yy=i(()=>{"use strict";xu()});var Jy=i(()=>{"use strict";Su()});var Xy=i((wK,Qy)=>{"use strict";var Tj=zy();Vy();Yy();Jy();Qy.exports=Tj});var at=i((TK,Zy)=>{"use strict";Zy.exports=Xy()});var tb=i((IK,rb)=>{"use strict";Oo();var Ej=Kr();rb.exports=Ej.f("asyncIterator")});var ab=i((_K,nb)=>{"use strict";var Oj=tb();nb.exports=Oj});var ob=i((PK,ib)=>{"use strict";var Cj=ab();ib.exports=Cj});var sb=i((RK,ub)=>{"use strict";var kj=ob();ub.exports=kj});var ba=i((AK,cb)=>{"use strict";cb.exports=sb()});var vb=i(()=>{"use strict";var Ij=x(),_j=_(),Pj=re(),pb=St(),Rj=Gi(),Aj=_j(function(){pb(1)});Ij({target:"Object",stat:!0,forced:Aj,sham:!Rj},{getPrototypeOf:function(r){return pb(Pj(r))}})});var mb=i(($K,db)=>{"use strict";vb();var Nj=V();db.exports=Nj.Object.getPrototypeOf});var yb=i((FK,hb)=>{"use strict";var Mj=mb();hb.exports=Mj});var gb=i((DK,bb)=>{"use strict";var jj=yb();bb.exports=jj});var xb=i((BK,qb)=>{"use strict";var Lj=gb();qb.exports=Lj});var ga=i((GK,Sb)=>{"use strict";Sb.exports=xb()});var Tb=i(()=>{"use strict";var $j=x(),Fj=A(),Dj=Pe(),Bj=Fj([].reverse),wb=[1,2];$j({target:"Array",proto:!0,forced:String(wb)===String(wb.reverse())},{reverse:function(){return Dj(this)&&(this.length=this.length),Bj(this)}})});var Ob=i((WK,Eb)=>{"use strict";Tb();var Gj=ue();Eb.exports=Gj("Array","reverse")});var kb=i((KK,Cb)=>{"use strict";var Uj=U(),Hj=Ob(),_u=Array.prototype;Cb.exports=function(e){var r=e.reverse;return e===_u||Uj(_u,e)&&r===_u.reverse?Hj:r}});var _b=i((zK,Ib)=>{"use strict";var Wj=kb();Ib.exports=Wj});var Rb=i((VK,Pb)=>{"use strict";var Kj=_b();Pb.exports=Kj});var Nb=i((YK,Ab)=>{"use strict";var zj=Rb();Ab.exports=zj});var jb=i((JK,Mb)=>{"use strict";Mb.exports=Nb()});var Pu=i((QK,Wt)=>{function Vj(e,r){this.v=e,this.k=r}Wt.exports=Vj,Wt.exports.__esModule=!0,Wt.exports.default=Wt.exports});var Lb=i(()=>{"use strict";var Yj=x(),Jj=H(),Qj=Xe();Yj({target:"Object",stat:!0,sham:!Jj},{create:Qj})});var Fb=i((ez,$b)=>{"use strict";Lb();var Xj=V(),Zj=Xj.Object;$b.exports=function(r,t){return Zj.create(r,t)}});var Bb=i((rz,Db)=>{"use strict";var eL=Fb();Db.exports=eL});var Ub=i((tz,Gb)=>{"use strict";var rL=Bb();Gb.exports=rL});var Wb=i((nz,Hb)=>{"use strict";var tL=Ub();Hb.exports=tL});var qa=i((az,Kb)=>{"use strict";Kb.exports=Wb()});var Au=i((iz,Jb)=>{"use strict";var Vb=A(),nL=D(),aL=L(),iL=K(),zb=vr(),oL=Ar(),Yb=Function,uL=Vb([].concat),sL=Vb([].join),Ru={},cL=function(e,r,t){if(!iL(Ru,r)){for(var n=[],a=0;a<r;a++)n[a]="a["+a+"]";Ru[r]=Yb("C,a","return new C("+sL(n,",")+")")}return Ru[r](e,t)};Jb.exports=oL?Yb.bind:function(r){var t=nL(this),n=t.prototype,a=zb(arguments,1),o=function(){var l=uL(a,zb(arguments));return this instanceof o?cL(t,l.length,l):t.apply(r,l)};return aL(n)&&(o.prototype=n),o}});var Xb=i(()=>{"use strict";var lL=x(),Qb=Au();lL({target:"Function",proto:!0,forced:Function.bind!==Qb},{bind:Qb})});var eg=i((sz,Zb)=>{"use strict";Xb();var fL=ue();Zb.exports=fL("Function","bind")});var tg=i((cz,rg)=>{"use strict";var pL=U(),vL=eg(),Nu=Function.prototype;rg.exports=function(e){var r=e.bind;return e===Nu||pL(Nu,e)&&r===Nu.bind?vL:r}});var ag=i((lz,ng)=>{"use strict";var dL=tg();ng.exports=dL});var og=i((fz,ig)=>{"use strict";var mL=ag();ig.exports=mL});var sg=i((pz,ug)=>{"use strict";var hL=og();ug.exports=hL});var Kt=i((vz,cg)=>{"use strict";cg.exports=sg()});var lg=i(()=>{"use strict";var yL=x(),bL=wt();yL({target:"Object",stat:!0},{setPrototypeOf:bL})});var pg=i((hz,fg)=>{"use strict";lg();var gL=V();fg.exports=gL.Object.setPrototypeOf});var dg=i((yz,vg)=>{"use strict";var qL=pg();vg.exports=qL});var hg=i((bz,mg)=>{"use strict";var xL=dg();mg.exports=xL});var bg=i((gz,yg)=>{"use strict";var SL=hg();yg.exports=SL});var xa=i((qz,gg)=>{"use strict";gg.exports=bg()});var xg=i(()=>{"use strict";var wL=x(),TL=H(),qg=te().f;wL({target:"Object",stat:!0,forced:Object.defineProperty!==qg,sham:!TL},{defineProperty:qg})});var Tg=i((wz,wg)=>{"use strict";xg();var EL=V(),Sg=EL.Object,OL=wg.exports=function(r,t,n){return Sg.defineProperty(r,t,n)};Sg.defineProperty.sham&&(OL.sham=!0)});var Og=i((Tz,Eg)=>{"use strict";var CL=Tg();Eg.exports=CL});var kg=i((Ez,Cg)=>{"use strict";var kL=Og();Cg.exports=kL});var _g=i((Oz,Ig)=>{"use strict";var IL=kg();Ig.exports=IL});var zt=i((Cz,Pg)=>{"use strict";Pg.exports=_g()});var Mu=i((kz,je)=>{var _L=zt();function Sa(e,r,t,n){var a=_L;try{a({},"",{})}catch{a=0}je.exports=Sa=function(u,l,s,c){function f(p,v){Sa(u,p,function(d){return this._invoke(p,v,d)})}l?a?a(u,l,{value:s,enumerable:!c,configurable:!c,writable:!c}):u[l]=s:(f("next",0),f("throw",1),f("return",2))},je.exports.__esModule=!0,je.exports.default=je.exports,Sa(e,r,t,n)}je.exports=Sa,je.exports.__esModule=!0,je.exports.default=je.exports});var Lu=i((Iz,Le)=>{var Rg=Te(),ju=qa(),PL=Kt(),RL=ga(),Ag=xa(),Ce=Mu();function Ng(){var e,r,t=typeof Rg=="function"?Rg:{},n=t.iterator||"@@iterator",a=t.toStringTag||"@@toStringTag";function o(d,h,m,y){var g=h&&h.prototype instanceof l?h:l,q=ju(g.prototype);return Ce(q,"_invoke",function(k,C,S){var T,w,O,j=0,qe=S||[],I=!1,ee={p:0,n:0,v:e,a:xe,f:PL(xe).call(xe,e,4),d:function(F,me){return T=F,w=0,O=e,ee.n=me,u}};function xe(Q,F){for(w=Q,O=F,r=0;!I&&j&&!me&&r<qe.length;r++){var me,E=qe[r],Rr=ee.p,Ke=E[2];Q>3?(me=Ke===F)&&(O=E[(w=E[4])?5:(w=3,3)],E[4]=E[5]=e):E[0]<=Rr&&((me=Q<2&&Rr<E[1])?(w=0,ee.v=F,ee.n=E[1]):Rr<Ke&&(me=Q<3||E[0]>F||F>Ke)&&(E[4]=Q,E[5]=F,ee.n=Ke,w=0))}if(me||Q>1)return u;throw I=!0,F}return function(Q,F,me){if(j>1)throw TypeError("Generator is already running");for(I&&F===1&&xe(F,me),w=F,O=me;(r=w<2?e:O)||!I;){T||(w?w<3?(w>1&&(ee.n=-1),xe(w,O)):ee.n=O:ee.v=O);try{if(j=2,T){if(w||(Q="next"),r=T[Q]){if(!(r=r.call(T,O)))throw TypeError("iterator result is not an object");if(!r.done)return r;O=r.value,w<2&&(w=0)}else w===1&&(r=T.return)&&r.call(T),w<2&&(O=TypeError("The iterator does not provide a '"+Q+"' method"),w=1);T=e}else if((r=(I=ee.n<0)?O:k.call(C,ee))!==u)break}catch(E){T=e,w=1,O=E}finally{j=1}}return{value:r,done:I}}}(d,m,y),!0),q}var u={};function l(){}function s(){}function c(){}r=RL;var f=[][n]?r(r([][n]())):(Ce(r={},n,function(){return this}),r),p=c.prototype=l.prototype=ju(f);function v(d){return Ag?Ag(d,c):(d.__proto__=c,Ce(d,a,"GeneratorFunction")),d.prototype=ju(p),d}return s.prototype=c,Ce(p,"constructor",c),Ce(c,"constructor",s),s.displayName="GeneratorFunction",Ce(c,a,"GeneratorFunction"),Ce(p),Ce(p,a,"Generator"),Ce(p,n,function(){return this}),Ce(p,"toString",function(){return"[object Generator]"}),(Le.exports=Ng=function(){return{w:o,m:v}},Le.exports.__esModule=!0,Le.exports.default=Le.exports)()}Le.exports=Ng,Le.exports.__esModule=!0,Le.exports.default=Le.exports});var Du=i((_z,Vt)=>{var AL=Te(),NL=ba(),ML=Pu(),$u=Mu();function Fu(e,r){function t(a,o,u,l){try{var s=e[a](o),c=s.value;return c instanceof ML?r.resolve(c.v).then(function(f){t("next",f,u,l)},function(f){t("throw",f,u,l)}):r.resolve(c).then(function(f){s.value=f,u(s)},function(f){return t("throw",f,u,l)})}catch(f){l(f)}}var n;this.next||($u(Fu.prototype),$u(Fu.prototype,typeof AL=="function"&&NL||"@asyncIterator",function(){return this})),$u(this,"_invoke",function(a,o,u){function l(){return new r(function(s,c){t(a,u,s,c)})}return n=n?n.then(l,l):l()},!0)}Vt.exports=Fu,Vt.exports.__esModule=!0,Vt.exports.default=Vt.exports});var Bu=i((Pz,Yt)=>{var jL=at(),LL=Lu(),$L=Du();function FL(e,r,t,n,a){return new $L(LL().w(e,r,t,n),a||jL)}Yt.exports=FL,Yt.exports.__esModule=!0,Yt.exports.default=Yt.exports});var Mg=i((Rz,Jt)=>{var DL=Bu();function BL(e,r,t,n,a){var o=DL(e,r,t,n,a);return o.next().then(function(u){return u.done?u.value:o.next()})}Jt.exports=BL,Jt.exports.__esModule=!0,Jt.exports.default=Jt.exports});var $g=i((Az,Lg)=>{"use strict";var jg=Ye(),GL=TypeError;Lg.exports=function(e,r){if(!delete e[r])throw new GL("Cannot delete property "+jg(r)+" of "+jg(e))}});var Fg=i(()=>{"use strict";var UL=x(),HL=re(),WL=fe(),KL=Ur(),zL=$g(),VL=Ct(),YL=[].unshift(0)!==1,JL=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},QL=YL||!JL();UL({target:"Array",proto:!0,arity:1,forced:QL},{unshift:function(r){var t=HL(this),n=WL(t),a=arguments.length;if(a){VL(n+a);for(var o=n;o--;){var u=o+a;o in t?t[u]=t[o]:zL(t,u)}for(var l=0;l<a;l++)t[l]=arguments[l]}return KL(t,n+a)}})});var Bg=i((jz,Dg)=>{"use strict";Fg();var XL=ue();Dg.exports=XL("Array","unshift")});var Ug=i((Lz,Gg)=>{"use strict";var ZL=U(),e$=Bg(),Gu=Array.prototype;Gg.exports=function(e){var r=e.unshift;return e===Gu||ZL(Gu,e)&&r===Gu.unshift?e$:r}});var Wg=i(($z,Hg)=>{"use strict";var r$=Ug();Hg.exports=r$});var zg=i((Fz,Kg)=>{"use strict";var t$=Wg();Kg.exports=t$});var Yg=i((Dz,Vg)=>{"use strict";var n$=zg();Vg.exports=n$});var Qg=i((Bz,Jg)=>{"use strict";Jg.exports=Yg()});var Xg=i((Gz,Qt)=>{var a$=Qg();function i$(e){var r=Object(e),t=[];for(var n in r)a$(t).call(t,n);return function a(){for(;t.length;)if((n=t.pop())in r)return a.value=n,a.done=!1,a;return a.done=!0,a}}Qt.exports=i$,Qt.exports.__esModule=!0,Qt.exports.default=Qt.exports});var eq=i((Uz,Zg)=>{"use strict";qr();kt();hr();ko();var o$=Kr();Zg.exports=o$.f("iterator")});var tq=i((Hz,rq)=>{"use strict";var u$=eq();xr();rq.exports=u$});var aq=i((Wz,nq)=>{"use strict";var s$=tq();nq.exports=s$});var oq=i((Kz,iq)=>{"use strict";var c$=aq();iq.exports=c$});var Xt=i((zz,uq)=>{"use strict";uq.exports=oq()});var sq=i((Vz,$e)=>{var wa=Te(),l$=Xt();function Uu(e){"@babel/helpers - typeof";return $e.exports=Uu=typeof wa=="function"&&typeof l$=="symbol"?function(r){return typeof r}:function(r){return r&&typeof wa=="function"&&r.constructor===wa&&r!==wa.prototype?"symbol":typeof r},$e.exports.__esModule=!0,$e.exports.default=$e.exports,Uu(e)}$e.exports=Uu,$e.exports.__esModule=!0,$e.exports.default=$e.exports});var cq=i((Yz,Zt)=>{var f$=sq().default,p$=Te(),v$=Xt();function d$(e){if(e!=null){var r=e[typeof p$=="function"&&v$||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(f$(e)+" is not iterable")}Zt.exports=d$,Zt.exports.__esModule=!0,Zt.exports.default=Zt.exports});var pq=i((Jz,Fe)=>{var lq=ga(),m$=jb(),h$=Pu(),y$=Lu(),b$=Mg(),g$=Bu(),q$=Du(),x$=Xg(),fq=cq();function Hu(){"use strict";var e=y$(),r=e.m(Hu),t=(lq?lq(r):r.__proto__).constructor;function n(u){var l=typeof u=="function"&&u.constructor;return!!l&&(l===t||(l.displayName||l.name)==="GeneratorFunction")}var a={throw:1,return:2,break:3,continue:3};function o(u){var l,s;return function(c){l||(l={stop:function(){return s(c.a,2)},catch:function(){return c.v},abrupt:function(p,v){return s(c.a,a[p],v)},delegateYield:function(p,v,d){return l.resultName=v,s(c.d,fq(p),d)},finish:function(p){return s(c.f,p)}},s=function(p,v,d){c.p=l.prev,c.n=l.next;try{return p(v,d)}finally{l.next=c.n}}),l.resultName&&(l[l.resultName]=c.v,l.resultName=void 0),l.sent=c.v,l.next=c.n;try{return u.call(this,l)}finally{c.p=l.prev,c.n=l.next}}}return(Fe.exports=Hu=function(){return{wrap:function(s,c,f,p){return e.w(o(s),c,f,p&&m$(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(s,c){return new h$(s,c)},AsyncIterator:q$,async:function(s,c,f,p,v){return(n(c)?g$:b$)(o(s),c,f,p,v)},keys:x$,values:fq}},Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports)()}Fe.exports=Hu,Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports});var ce=i((Qz,vq)=>{var Ta=pq()();vq.exports=Ta;try{regeneratorRuntime=Ta}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=Ta:Function("r","regeneratorRuntime = r")(Ta)}});var Wu=i((Oa,mq)=>{"use strict";Object.defineProperty(Oa,"__esModule",{value:!0});var Ea=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},dq=function(){function e(r,t){var n=[],a=!0,o=!1,u=void 0;try{for(var l=r[Symbol.iterator](),s;!(a=(s=l.next()).done)&&(n.push(s.value),!(t&&n.length===t));a=!0);}catch(c){o=!0,u=c}finally{try{!a&&l.return&&l.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Oa.default=S$;function S$(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(a){return a.type==="tag"||a.type==="script"||a.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var a=this.attribs,o=Object.keys(a),u=o.reduce(function(l,s,c){return l[c]={name:s,value:a[s]},l},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var a=[];return nr(this.childTags,function(o){(o.name===n||n==="*")&&a.push(o)}),a}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var a=n.trim().replace(/\s+/g," ").split(" "),o=[];return nr([this],function(u){var l=u.attribs.class;l&&a.every(function(s){return l.indexOf(s)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var a=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=w$(n),u=o.shift(),l=o.length;return u(this).filter(function(s){for(var c=0;c<l;){if(s=o[c](s,a),!s)return!1;c+=1}return!0})}),t.contains||(t.contains=function(n){var a=!1;return nr([this],function(o,u){o===n&&(a=!0,u())}),a}),!0}function w$(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,a=r.split(":"),o=dq(a,2),u=o[0],l=o[1],s=null,c=null;if(function(){switch(!0){case/>/.test(u):c=function(S){return function(T){return T(S.parent)&&S.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");s=function(S){var T=S.attribs.class;return T&&h.every(function(w){return T.indexOf(w)>-1})},c=function(S,T){return n?S.getElementsByClassName(h.join(" ")):typeof S=="function"?S(s):en(S,T,s)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),y=dq(m,2),g=y[0],q=y[1];s=function(S){var T=Object.keys(S.attribs).indexOf(g)>-1;return!!(T&&(!q||S.attribs[g]===q))},c=function(S,T){if(n){var w=function(){var O=[];return nr([S],function(j){s(j)&&O.push(j)}),{v:O}}();if((typeof w>"u"?"undefined":Ea(w))==="object")return w.v}return typeof S=="function"?S(s):en(S,T,s)};break;case/^#/.test(u):var k=u.substr(1);s=function(S){return S.attribs.id===k},c=function(S,T){if(n){var w=function(){var O=[];return nr([S],function(j,qe){s(j)&&(O.push(j),qe())}),{v:O}}();if((typeof w>"u"?"undefined":Ea(w))==="object")return w.v}return typeof S=="function"?S(s):en(S,T,s)};break;case/\*/.test(u):s=function(S){return!0},c=function(S,T){if(n){var w=function(){var O=[];return nr([S],function(j){return O.push(j)}),{v:O}}();if((typeof w>"u"?"undefined":Ea(w))==="object")return w.v}return typeof S=="function"?S(s):en(S,T,s)};break;default:s=function(S){return S.name===u},c=function(S,T){if(n){var w=function(){var O=[];return nr([S],function(j){s(j)&&O.push(j)}),{v:O}}();if((typeof w>"u"?"undefined":Ea(w))==="object")return w.v}return typeof S=="function"?S(s):en(S,T,s)}}}(),!l)return c;var f=l.match(/-(child|type)\((\d+)\)$/),p=f[1],v=parseInt(f[2],10)-1,d=function(m){if(m){var y=m.parent.childTags;p==="type"&&(y=y.filter(s));var g=y.findIndex(function(q){return q===m});if(g===v)return!0}return!1};return function(m){var y=c(m);return n?y.reduce(function(g,q){return d(q)&&g.push(q),g},[]):d(y)&&y}})}function nr(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&nr(t.childTags,r)})}function en(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}mq.exports=Oa.default});var ka=i(Ca=>{"use strict";Object.defineProperty(Ca,"__esModule",{value:!0});Ca.convertNodeList=T$;Ca.escapeValue=E$;function T$(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function E$(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var Eq=i((Ia,Tq)=>{"use strict";Object.defineProperty(Ia,"__esModule",{value:!0});Ia.default=O$;var gq=ka(),hq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function O$(e,r){var t=r.root,n=t===void 0?document:t,a=r.skip,o=a===void 0?null:a,u=r.priority,l=u===void 0?["id","class","href","src"]:u,s=r.ignore,c=s===void 0?{}:s,f=[],p=e,v=f.length,d=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(g){return typeof g!="function"?function(q){return q===g}:g}),m=function(q){return o&&h.some(function(k){return k(q)})};for(Object.keys(c).forEach(function(g){g==="class"&&(d=!0);var q=c[g];typeof q!="function"&&(typeof q=="number"&&(q=q.toString()),typeof q=="string"&&(q=new RegExp((0,gq.escapeValue)(q).replace(/\\/g,"\\\\"))),typeof q=="boolean"&&(q=q?/(?:)/:/.^/),c[g]=function(k,C){return q.test(C)})}),d&&function(){var g=c.attribute;c.attribute=function(q,k,C){return c.class(k)||g&&g(q,k,C)}}();p!==n;){if(m(p)!==!0){if(yq(l,p,c,f,n)||bq(p,c,f,n))break;yq(l,p,c,f),f.length===v&&bq(p,c,f),f.length===v&&C$(l,p,c,f)}p=p.parentNode,v=f.length}if(p===n){var y=Sq(l,p,c);f.unshift(y)}return f.join(" ")}function yq(e,r,t,n){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=qq(e,r,t);if(o){var u=a.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function qq(e,r,t){for(var n=r.attributes,a=Object.keys(n).sort(function(m,y){var g=e.indexOf(n[m].name),q=e.indexOf(n[y].name);return q===-1?g===-1?0:-1:g-q}),o=0,u=a.length;o<u;o++){var l=a[o],s=n[l],c=s.name,f=(0,gq.escapeValue)(s.value),p=t[c]||t.attribute,v=hq[c]||hq.attribute;if(!wq(p,c,f,v)){var d="["+c+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(c==="id"&&(d="#"+f),c==="class")){var h=f.trim().replace(/\s+/g,".");d="."+h}return d}}return null}function bq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,a=xq(e,r);if(a){var o=n.getElementsByTagName(a);if(o.length===1)return t.unshift(a),!0}return!1}function xq(e,r){var t=e.tagName.toLowerCase();return wq(r.tag,null,t)?null:t}function C$(e,r,t,n){for(var a=r.parentNode,o=a.childTags||a.children,u=0,l=o.length;u<l;u++){var s=o[u];if(s===r){var c=Sq(e,s,t);if(!c)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,s,t,c);var f="> "+c+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function Sq(e,r,t){var n=qq(e,r,t);return n||(n=xq(r,t)),n}function wq(e,r,t,n){if(!t)return!0;var a=e||n;return a?a(r,t,n):!1}Tq.exports=Ia.default});var Ku=i((Pa,Oq)=>{"use strict";Object.defineProperty(Pa,"__esModule",{value:!0});Pa.default=R$;var k$=Wu(),I$=P$(k$),_$=ka();function P$(e){return e&&e.__esModule?e:{default:e}}function R$(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,_$.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,I$.default)(r[0],t),a=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(a.length<2)return _a("",e,"",r);for(var o=[a.pop()];a.length>1;){var u=a.pop(),l=a.join(" "),s=o.join(" "),c=l+" "+s,f=document.querySelectorAll(c);f.length!==r.length&&o.unshift(_a(l,u,s,r))}return o.unshift(a[0]),a=o,a[0]=_a("",a[0],a.slice(1).join(" "),r),a[a.length-1]=_a(a.slice(0,-1).join(" "),a[a.length-1],"",r),n&&delete global.document,a.join(" ").replace(/>/g,"> ").trim()}function _a(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var a=r.replace(/=.*$/,"]"),o=""+e+a+t,u=document.querySelectorAll(o);if(it(u,n))r=a;else for(var l=document.querySelectorAll(""+e+a),s=function(){var C=l[c];if(n.some(function(T){return C.contains(T)})){var S=C.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),it(u,n)&&(r=S),"break"}},c=0,f=l.length;c<f;c++){var o,u,p=s();if(p==="break")break}}if(/>/.test(r)){var v=r.replace(/>/,""),o=""+e+v+t,u=document.querySelectorAll(o);it(u,n)&&(r=v)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);it(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(k){return"."+k}).sort(function(k,C){return k.length-C.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);it(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var y=document.querySelectorAll(""+e+r),g=function(){var C=y[c];if(n.some(function(T){return C.contains(T)})){var S=C.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),it(u,n)&&(r=S),"break"}},c=0,f=y.length;c<f;c++){var o,u,q=g();if(q==="break")break}}return r}function it(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var a=0;a<t;a++)if(e[a]===n)return!0;return!1})}Oq.exports=Pa.default});var zu=i(Ra=>{"use strict";Object.defineProperty(Ra,"__esModule",{value:!0});Ra.getCommonAncestor=A$;Ra.getCommonProperties=N$;function A$(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,a=[];e.forEach(function(p,v){for(var d=[];p!==n;)p=p.parentNode,d.unshift(p);a[v]=d}),a.sort(function(p,v){return p.length-v.length});for(var o=a.shift(),u=null,l=function(){var v=o[s],d=a.some(function(h){return!h.some(function(m){return m===v})});if(d)return"break";u=v},s=0,c=o.length;s<c;s++){var f=l();if(f==="break")break}return u}function N$(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,a=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(s){return u.some(function(c){return c===s})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(a!==void 0&&function(){var s=t.attributes,c=Object.keys(s).reduce(function(v,d){var h=s[d],m=h.name;return h&&m!=="class"&&(v[m]=h.value),v},{}),f=Object.keys(c),p=Object.keys(a);f.length?p.length?(a=p.reduce(function(v,d){var h=a[d];return h===c[d]&&(v[d]=h),v},{}),Object.keys(a).length?r.attributes=a:delete r.attributes):r.attributes=c:delete r.attributes}(),o!==void 0){var l=t.tagName.toLowerCase();o?l!==o&&delete r.tag:r.tag=l}}),r}});var Rq=i(rn=>{"use strict";Object.defineProperty(rn,"__esModule",{value:!0});var M$=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};rn.getSingleSelector=Yu;rn.getMultiSelector=Pq;rn.default=B$;var j$=Wu(),kq=Vu(j$),L$=Eq(),$$=Vu(L$),F$=Ku(),Iq=Vu(F$),Cq=ka(),_q=zu();function Vu(e){return e&&e.__esModule?e:{default:e}}function Yu(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":M$(e))+'")');var t=(0,kq.default)(e,r),n=(0,$$.default)(e,r),a=(0,Iq.default)(n,e,r);return t&&delete global.document,a}function Pq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,Cq.convertNodeList)(e)),e.some(function(c){return c.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,kq.default)(e[0],r),n=(0,_q.getCommonAncestor)(e,r),a=Yu(n,r),o=D$(e),u=o[0],l=(0,Iq.default)(a+" "+u,e,r),s=(0,Cq.convertNodeList)(document.querySelectorAll(l));return e.every(function(c){return s.some(function(f){return f===c})})?(t&&delete global.document,l):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function D$(e){var r=(0,_q.getCommonProperties)(e),t=r.classes,n=r.attributes,a=r.tag,o=[];if(a&&o.push(a),t){var u=t.map(function(s){return"."+s}).join("");o.push(u)}if(n){var l=Object.keys(n).reduce(function(s,c){return s.push("["+c+'="'+n[c]+'"]'),s},[]).join("");o.push(l)}return o.length,[o.join("")]}function B$(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?Pq(e,r):Yu(e,r)}});var Mq=i(ae=>{"use strict";Object.defineProperty(ae,"__esModule",{value:!0});ae.default=ae.common=ae.optimize=ae.getMultiSelector=ae.getSingleSelector=ae.select=void 0;var Ju=Rq();Object.defineProperty(ae,"getSingleSelector",{enumerable:!0,get:function(){return Ju.getSingleSelector}});Object.defineProperty(ae,"getMultiSelector",{enumerable:!0,get:function(){return Ju.getMultiSelector}});var Aq=Nq(Ju),G$=Ku(),U$=Nq(G$),H$=zu(),W$=K$(H$);function K$(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Nq(e){return e&&e.__esModule?e:{default:e}}ae.select=Aq.default;ae.optimize=U$.default;ae.common=W$;ae.default=Aq.default});var jq=i(()=>{"use strict";var tF=x(),nF=Pe();tF({target:"Array",stat:!0},{isArray:nF})});var $q=i((dV,Lq)=>{"use strict";jq();var aF=V();Lq.exports=aF.Array.isArray});var Dq=i((mV,Fq)=>{"use strict";var iF=$q();Fq.exports=iF});var Gq=i((hV,Bq)=>{"use strict";var oF=Dq();Bq.exports=oF});var Hq=i((yV,Uq)=>{"use strict";var uF=Gq();Uq.exports=uF});var Kq=i((bV,Wq)=>{"use strict";Wq.exports=Hq()});var Yq=i(()=>{"use strict";var sF=x(),cF=re(),lF=fe(),fF=Ur(),pF=Ct(),vF=_(),dF=vF(function(){return[].push.call({length:4294967296},1)!==4294967297}),mF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},hF=dF||!mF();sF({target:"Array",proto:!0,arity:1,forced:hF},{push:function(r){var t=cF(this),n=lF(t),a=arguments.length;pF(n+a);for(var o=0;o<a;o++)t[n]=arguments[o],n++;return fF(t,n),n}})});var Qq=i((SV,Jq)=>{"use strict";Yq();var yF=ue();Jq.exports=yF("Array","push")});var Zq=i((wV,Xq)=>{"use strict";var bF=U(),gF=Qq(),Qu=Array.prototype;Xq.exports=function(e){var r=e.push;return e===Qu||bF(Qu,e)&&r===Qu.push?gF:r}});var rx=i((TV,ex)=>{"use strict";var qF=Zq();ex.exports=qF});var nx=i((EV,tx)=>{"use strict";var xF=rx();tx.exports=xF});var ix=i((OV,ax)=>{"use strict";var SF=nx();ax.exports=SF});var Xu=i((CV,ox)=>{"use strict";ox.exports=ix()});var yx=i(()=>{"use strict";var wF=x(),TF=_t().map,EF=gt(),OF=EF("map");wF({target:"Array",proto:!0,forced:!OF},{map:function(r){return TF(this,r,arguments.length>1?arguments[1]:void 0)}})});var gx=i((r7,bx)=>{"use strict";yx();var CF=ue();bx.exports=CF("Array","map")});var xx=i((t7,qx)=>{"use strict";var kF=U(),IF=gx(),es=Array.prototype;qx.exports=function(e){var r=e.map;return e===es||kF(es,e)&&r===es.map?IF:r}});var wx=i((n7,Sx)=>{"use strict";var _F=xx();Sx.exports=_F});var Ex=i((a7,Tx)=>{"use strict";var PF=wx();Tx.exports=PF});var Cx=i((i7,Ox)=>{"use strict";var RF=Ex();Ox.exports=RF});var Ix=i((o7,kx)=>{"use strict";kx.exports=Cx()});var Px=i((u7,_x)=>{_x.exports=Ix()});var Ax=i((s7,Rx)=>{Rx.exports=at()});var $x=i((c7,Lx)=>{"use strict";var AF=D(),NF=re(),MF=gn(),jF=fe(),Nx=TypeError,Mx="Reduce of empty array with no initial value",jx=function(e){return function(r,t,n,a){var o=NF(r),u=MF(o),l=jF(o);if(AF(t),l===0&&n<2)throw new Nx(Mx);var s=e?l-1:0,c=e?-1:1;if(n<2)for(;;){if(s in u){a=u[s],s+=c;break}if(s+=c,e?s<0:l<=s)throw new Nx(Mx)}for(;e?s>=0:l>s;s+=c)s in u&&(a=t(a,u[s],s,o));return a}};Lx.exports={left:jx(!1),right:jx(!0)}});var rs=i((l7,Fx)=>{"use strict";var LF=_();Fx.exports=function(e,r){var t=[][e];return!!t&&LF(function(){t.call(null,r||function(){return 1},1)})}});var Bx=i(()=>{"use strict";var $F=x(),FF=$x().left,DF=rs(),Dx=jr(),BF=jt(),GF=!BF&&Dx>79&&Dx<83,UF=GF||!DF("reduce");$F({target:"Array",proto:!0,forced:UF},{reduce:function(r){var t=arguments.length;return FF(this,r,t,t>1?arguments[1]:void 0)}})});var Ux=i((v7,Gx)=>{"use strict";Bx();var HF=ue();Gx.exports=HF("Array","reduce")});var Wx=i((d7,Hx)=>{"use strict";var WF=U(),KF=Ux(),ts=Array.prototype;Hx.exports=function(e){var r=e.reduce;return e===ts||WF(ts,e)&&r===ts.reduce?KF:r}});var zx=i((m7,Kx)=>{"use strict";var zF=Wx();Kx.exports=zF});var Yx=i((h7,Vx)=>{"use strict";var VF=zx();Vx.exports=VF});var Qx=i((y7,Jx)=>{"use strict";var YF=Yx();Jx.exports=YF});var Zx=i((b7,Xx)=>{"use strict";Xx.exports=Qx()});var rS=i((g7,eS)=>{eS.exports=Zx()});var aS=i((q7,nS)=>{"use strict";var JF=Pe(),QF=fe(),XF=Ct(),ZF=Y(),eD=Gr(),tS=function(e,r,t,n,a,o,u,l){for(var s=a,c=0,f=u?ZF(u,l):!1,p,v;c<n;)c in t&&(p=f?f(t[c],c,r):t[c],o>0&&JF(p)?(v=QF(p),s=tS(e,r,p,v,s,o-1)-1):(XF(s+1),eD(e,s,p)),s++),c++;return s};nS.exports=tS});var iS=i(()=>{"use strict";var rD=x(),tD=aS(),nD=D(),aD=re(),iD=fe(),oD=Dn();rD({target:"Array",proto:!0},{flatMap:function(r){var t=aD(this),n=iD(t),a;return nD(r),a=oD(t,0),tD(a,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),a}})});var oS=i(()=>{"use strict";var uD=_o();uD("flatMap")});var sS=i((E7,uS)=>{"use strict";iS();oS();var sD=ue();uS.exports=sD("Array","flatMap")});var lS=i((O7,cS)=>{"use strict";var cD=U(),lD=sS(),ns=Array.prototype;cS.exports=function(e){var r=e.flatMap;return e===ns||cD(ns,e)&&r===ns.flatMap?lD:r}});var pS=i((C7,fS)=>{"use strict";var fD=lS();fS.exports=fD});var dS=i((k7,vS)=>{"use strict";var pD=pS();vS.exports=pD});var hS=i((I7,mS)=>{"use strict";var vD=dS();mS.exports=vD});var bS=i((_7,yS)=>{"use strict";yS.exports=hS()});var qS=i((P7,gS)=>{gS.exports=bS()});var SS=i((R7,xS)=>{"use strict";eo();var dD=ue();xS.exports=dD("Array","concat")});var TS=i((A7,wS)=>{"use strict";var mD=U(),hD=SS(),as=Array.prototype;wS.exports=function(e){var r=e.concat;return e===as||mD(as,e)&&r===as.concat?hD:r}});var OS=i((N7,ES)=>{"use strict";var yD=TS();ES.exports=yD});var kS=i((M7,CS)=>{"use strict";var bD=OS();CS.exports=bD});var _S=i((j7,IS)=>{"use strict";var gD=kS();IS.exports=gD});var RS=i((L7,PS)=>{"use strict";PS.exports=_S()});var is=i(($7,AS)=>{AS.exports=RS()});var jS=i(()=>{});var $S=i((u9,LS)=>{"use strict";jS();Io();var ID=Kr();LS.exports=ID.f("toPrimitive")});var DS=i((s9,FS)=>{"use strict";var _D=$S();FS.exports=_D});var GS=i((c9,BS)=>{"use strict";var PD=DS();BS.exports=PD});var HS=i((l9,US)=>{"use strict";var RD=GS();US.exports=RD});var KS=i((f9,WS)=>{"use strict";WS.exports=HS()});var rw=i((R9,ew)=>{"use strict";var ND=L(),MD=Se(),jD=R(),LD=jD("match");ew.exports=function(e){var r;return ND(e)&&((r=e[LD])!==void 0?!!r:MD(e)==="RegExp")}});var nw=i((A9,tw)=>{"use strict";var $D=rw(),FD=TypeError;tw.exports=function(e){if($D(e))throw new FD("The method doesn't accept regular expressions");return e}});var iw=i((N9,aw)=>{"use strict";var DD=R(),BD=DD("match");aw.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[BD]=!1,"/./"[e](r)}catch{}}return!1}});var sw=i(()=>{"use strict";var GD=x(),UD=ft(),HD=vt().f,WD=Ti(),ow=Je(),KD=nw(),zD=lr(),VD=iw(),YD=Z(),JD=UD("".slice),QD=Math.min,uw=VD("startsWith"),XD=!YD&&!uw&&!!function(){var e=HD(String.prototype,"startsWith");return e&&!e.writable}();GD({target:"String",proto:!0,forced:!XD&&!uw},{startsWith:function(r){var t=ow(zD(this));KD(r);var n=WD(QD(arguments.length>1?arguments[1]:void 0,t.length)),a=ow(r);return JD(t,n,n+a.length)===a}})});var lw=i((L9,cw)=>{"use strict";sw();var ZD=ue();cw.exports=ZD("String","startsWith")});var pw=i(($9,fw)=>{"use strict";var e4=U(),r4=lw(),cs=String.prototype;fw.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===cs||e4(cs,e)&&r===cs.startsWith?r4:r}});var dw=i((F9,vw)=>{"use strict";var t4=pw();vw.exports=t4});var hw=i((D9,mw)=>{"use strict";var n4=dw();mw.exports=n4});var bw=i((B9,yw)=>{"use strict";var a4=hw();yw.exports=a4});var qw=i((G9,gw)=>{"use strict";gw.exports=bw()});var Sw=i((U9,xw)=>{xw.exports=qw()});var ww=i(()=>{"use strict";var i4=x(),o4=_t().filter,u4=gt(),s4=u4("filter");i4({target:"Array",proto:!0,forced:!s4},{filter:function(r){return o4(this,r,arguments.length>1?arguments[1]:void 0)}})});var Ew=i((K9,Tw)=>{"use strict";ww();var c4=ue();Tw.exports=c4("Array","filter")});var Cw=i((z9,Ow)=>{"use strict";var l4=U(),f4=Ew(),ls=Array.prototype;Ow.exports=function(e){var r=e.filter;return e===ls||l4(ls,e)&&r===ls.filter?f4:r}});var Iw=i((V9,kw)=>{"use strict";var p4=Cw();kw.exports=p4});var Pw=i((Y9,_w)=>{"use strict";var v4=Iw();_w.exports=v4});var Aw=i((J9,Rw)=>{"use strict";var d4=Pw();Rw.exports=d4});var Mw=i((Q9,Nw)=>{"use strict";Nw.exports=Aw()});var Lw=i((X9,jw)=>{jw.exports=Mw()});var Zw=i(()=>{"use strict";var S4=x(),w4=W(),ps=Nr(),T4=Au(),zw=Ho(),E4=X(),Vw=L(),O4=Xe(),Jw=_(),vs=w4("Reflect","construct"),C4=Object.prototype,k4=[].push,Qw=Jw(function(){function e(){}return!(vs(function(){},[],e)instanceof e)}),Xw=!Jw(function(){vs(function(){})}),Yw=Qw||Xw;S4({target:"Reflect",stat:!0,forced:Yw,sham:Yw},{construct:function(r,t){zw(r),E4(t);var n=arguments.length<3?r:zw(arguments[2]);if(Xw&&!Qw)return vs(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var a=[null];return ps(k4,a,t),new(ps(T4,r,a))}var o=n.prototype,u=O4(Vw(o)?o:C4),l=ps(r,u,t);return Vw(l)?l:u}})});var rT=i((RY,eT)=>{"use strict";Zw();var I4=V();eT.exports=I4.Reflect.construct});var nT=i((AY,tT)=>{"use strict";var _4=rT();tT.exports=_4});var iT=i((NY,aT)=>{"use strict";var P4=nT();aT.exports=P4});var uT=i((MY,oT)=>{"use strict";var R4=iT();oT.exports=R4});var Fa=i((jY,sT)=>{"use strict";sT.exports=uT()});var lT=i((LY,cT)=>{cT.exports=Fa()});var gT=i((KY,bT)=>{"use strict";var A4=_();bT.exports=A4(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var ST=i((zY,xT)=>{"use strict";var N4=_(),M4=L(),j4=Se(),qT=gT(),Da=Object.isExtensible,L4=N4(function(){Da(1)});xT.exports=L4||qT?function(r){return!M4(r)||qT&&j4(r)==="ArrayBuffer"?!1:Da?Da(r):!0}:Da});var TT=i((VY,wT)=>{"use strict";var $4=_();wT.exports=!$4(function(){return Object.isExtensible(Object.preventExtensions({}))})});var qs=i((YY,CT)=>{"use strict";var F4=x(),D4=A(),B4=Wr(),G4=L(),ys=K(),U4=te().f,ET=It(),H4=ro(),bs=ST(),W4=$r(),K4=TT(),OT=!1,Ge=W4("meta"),z4=0,gs=function(e){U4(e,Ge,{value:{objectID:"O"+z4++,weakData:{}}})},V4=function(e,r){if(!G4(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!ys(e,Ge)){if(!bs(e))return"F";if(!r)return"E";gs(e)}return e[Ge].objectID},Y4=function(e,r){if(!ys(e,Ge)){if(!bs(e))return!0;if(!r)return!1;gs(e)}return e[Ge].weakData},J4=function(e){return K4&&OT&&bs(e)&&!ys(e,Ge)&&gs(e),e},Q4=function(){X4.enable=function(){},OT=!0;var e=ET.f,r=D4([].splice),t={};t[Ge]=1,e(t).length&&(ET.f=function(n){for(var a=e(n),o=0,u=a.length;o<u;o++)if(a[o]===Ge){r(a,o,1);break}return a},F4({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:H4.f}))},X4=CT.exports={enable:Q4,fastKey:V4,getWeakData:Y4,onFreeze:J4};B4[Ge]=!0});var _T=i((JY,IT)=>{"use strict";var Z4=x(),e3=P(),r3=qs(),t3=_(),n3=we(),a3=ve(),i3=sa(),o3=N(),u3=L(),s3=cr(),c3=Ne(),l3=te().f,f3=_t().forEach,p3=H(),kT=Qe(),v3=kT.set,d3=kT.getterFor;IT.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,a=e.indexOf("Weak")!==-1,o=n?"set":"add",u=e3[e],l=u&&u.prototype,s={},c;if(!p3||!o3(u)||!(a||l.forEach&&!t3(function(){new u().entries().next()})))c=t.getConstructor(r,e,n,o),r3.enable();else{c=r(function(v,d){v3(i3(v,f),{type:e,collection:new u}),s3(d)||a3(d,v[o],{that:v,AS_ENTRIES:n})});var f=c.prototype,p=d3(e);f3(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(v){var d=v==="add"||v==="set";v in l&&!(a&&v==="clear")&&n3(f,v,function(h,m){var y=p(this).collection;if(!d&&a&&!u3(h))return v==="get"?void 0:!1;var g=y[v](h===0?0:h,m);return d?this:g})}),a||l3(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return c3(c,e,!1,!0),s[e]=c,Z4({global:!0,forced:!0},s),a||t.setStrong(c,e,n),c}});var RT=i((QY,PT)=>{"use strict";var m3=Re();PT.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:m3(e,n,r[n],t);return e}});var FT=i((XY,$T)=>{"use strict";var AT=Xe(),h3=Gn(),NT=RT(),y3=Y(),b3=sa(),g3=cr(),q3=ve(),x3=jn(),Ba=Ln(),S3=Uo(),sn=H(),MT=qs().fastKey,LT=Qe(),jT=LT.set,xs=LT.getterFor;$T.exports={getConstructor:function(e,r,t,n){var a=e(function(c,f){b3(c,o),jT(c,{type:r,index:AT(null),first:null,last:null,size:0}),sn||(c.size=0),g3(f)||q3(f,c[n],{that:c,AS_ENTRIES:t})}),o=a.prototype,u=xs(r),l=function(c,f,p){var v=u(c),d=s(c,f),h,m;return d?d.value=p:(v.last=d={index:m=MT(f,!0),key:f,value:p,previous:h=v.last,next:null,removed:!1},v.first||(v.first=d),h&&(h.next=d),sn?v.size++:c.size++,m!=="F"&&(v.index[m]=d)),c},s=function(c,f){var p=u(c),v=MT(f),d;if(v!=="F")return p.index[v];for(d=p.first;d;d=d.next)if(d.key===f)return d};return NT(o,{clear:function(){for(var f=this,p=u(f),v=p.first;v;)v.removed=!0,v.previous&&(v.previous=v.previous.next=null),v=v.next;p.first=p.last=null,p.index=AT(null),sn?p.size=0:f.size=0},delete:function(c){var f=this,p=u(f),v=s(f,c);if(v){var d=v.next,h=v.previous;delete p.index[v.index],v.removed=!0,h&&(h.next=d),d&&(d.previous=h),p.first===v&&(p.first=d),p.last===v&&(p.last=h),sn?p.size--:f.size--}return!!v},forEach:function(f){for(var p=u(this),v=y3(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:p.first;)for(v(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!s(this,f)}}),NT(o,t?{get:function(f){var p=s(this,f);return p&&p.value},set:function(f,p){return l(this,f===0?0:f,p)}}:{add:function(f){return l(this,f=f===0?0:f,f)}}),sn&&h3(o,"size",{configurable:!0,get:function(){return u(this).size}}),a},setStrong:function(e,r,t){var n=r+" Iterator",a=xs(r),o=xs(n);x3(e,r,function(u,l){jT(this,{type:n,target:u,state:a(u),kind:l,last:null})},function(){for(var u=o(this),l=u.kind,s=u.last;s&&s.removed;)s=s.previous;return!u.target||!(u.last=s=s?s.next:u.state.first)?(u.target=null,Ba(void 0,!0)):Ba(l==="keys"?s.key:l==="values"?s.value:[s.key,s.value],!1)},t?"entries":"values",!t,!0),S3(r)}}});var DT=i(()=>{"use strict";var w3=_T(),T3=FT();w3("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},T3)});var BT=i(()=>{"use strict";DT()});var UT=i((nJ,GT)=>{"use strict";GT.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,a){return t[e](n,a)}}});var ie=i((aJ,WT)=>{"use strict";var E3=W(),Ga=UT(),HT=E3("Map");WT.exports={Map:HT,set:Ga("set",2),get:Ga("get",1),has:Ga("has",1),remove:Ga("delete",1),proto:HT.prototype}});var Ss=i(()=>{"use strict";var O3=x(),C3=A(),k3=D(),I3=lr(),_3=ve(),Ua=ie(),KT=Z(),P3=_(),zT=Ua.Map,R3=Ua.has,A3=Ua.get,N3=Ua.set,M3=C3([].push),j3=KT||P3(function(){return zT.groupBy("ab",function(e){return e}).get("a").length!==1});O3({target:"Map",stat:!0,forced:KT||j3},{groupBy:function(r,t){I3(r),k3(t);var n=new zT,a=0;return _3(r,function(o){var u=t(o,a++);R3(n,u)?M3(A3(n,u),o):N3(n,u,[o])}),n}})});var J=i((uJ,VT)=>{"use strict";var L3=Ye(),$3=TypeError;VT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new $3(L3(e)+" is not a map")}});var Ts=i(()=>{"use strict";var F3=x(),D3=J(),ws=ie(),B3=Z(),G3=ws.get,U3=ws.has,H3=ws.set;F3({target:"Map",proto:!0,real:!0,forced:B3},{getOrInsert:function(r,t){return U3(D3(this),r)?G3(this,r):(H3(this,r,t),t)}})});var Os=i(()=>{"use strict";var W3=x(),K3=D(),z3=J(),Es=ie(),V3=Z(),Y3=Es.get,J3=Es.has,Q3=Es.set;W3({target:"Map",proto:!0,real:!0,forced:V3},{getOrInsertComputed:function(r,t){if(z3(this),K3(t),J3(this,r))return Y3(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return Q3(this,r,n),n}})});var JT=i((pJ,YT)=>{"use strict";qr();BT();Ss();Ts();Os();kt();hr();var X3=V();YT.exports=X3.Map});var XT=i((vJ,QT)=>{"use strict";var Z3=JT();xr();QT.exports=Z3});var Cs=i(()=>{"use strict";Ts()});var ks=i(()=>{"use strict";Os()});var ZT=i(()=>{"use strict";Ss()});var r0=i((qJ,e0)=>{"use strict";var eB=XT();Cs();ks();ZT();e0.exports=eB});var n0=i((xJ,t0)=>{"use strict";var rB=Y(),tB=X(),nB=re(),aB=ve();t0.exports=function(e,r,t){return function(a){var o=nB(a),u=arguments.length,l=u>1?arguments[1]:void 0,s=l!==void 0,c=s?rB(l,u>2?arguments[2]:void 0):void 0,f=new e,p=0;return aB(o,function(v){var d=s?c(v,p++):v;t?r(f,tB(d)[0],d[1]):r(f,d)}),f}}});var i0=i(()=>{"use strict";var iB=x(),a0=ie(),oB=n0();iB({target:"Map",stat:!0,forced:!0},{from:oB(a0.Map,a0.set,!0)})});var u0=i((TJ,o0)=>{"use strict";var uB=X();o0.exports=function(e,r,t){return function(){for(var a=new e,o=arguments.length,u=0;u<o;u++){var l=arguments[u];t?r(a,uB(l)[0],l[1]):r(a,l)}return a}}});var c0=i(()=>{"use strict";var sB=x(),s0=ie(),cB=u0();sB({target:"Map",stat:!0,forced:!0},{of:cB(s0.Map,s0.set,!0)})});var f0=i(()=>{"use strict";var lB=x(),fB=G(),pB=ve(),vB=N(),l0=D(),dB=ie().Map;lB({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=vB(this)?this:dB,a=new n;l0(t);var o=l0(a.set);return pB(r,function(u){fB(o,a,t(u),u)}),a}})});var p0=i(()=>{"use strict";var mB=x(),hB=J(),yB=ie().remove;mB({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=hB(this),t=!0,n,a=0,o=arguments.length;a<o;a++)n=yB(r,arguments[a]),t=t&&n;return!!t}})});var d0=i(()=>{"use strict";var bB=x(),gB=J(),Is=ie(),qB=Is.get,xB=Is.has,v0=Is.set;bB({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=gB(this),a,o;return xB(n,r)?(a=qB(n,r),"update"in t&&(a=t.update(a,r,n),v0(n,r,a)),a):(o=t.insert(r,n),v0(n,r,o),o)}})});var h0=i((AJ,m0)=>{"use strict";var SB=G();m0.exports=function(e,r,t){for(var n=t?e:e.iterator,a=e.next,o,u;!(o=SB(a,n)).done;)if(u=r(o.value),u!==void 0)return u}});var be=i((NJ,y0)=>{"use strict";var wB=h0();y0.exports=function(e,r,t){return t?wB(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var b0=i(()=>{"use strict";var TB=x(),EB=Y(),OB=J(),CB=be();TB({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=OB(this),n=EB(r,arguments.length>1?arguments[1]:void 0);return CB(t,function(a,o){if(!n(a,o,t))return!1},!0)!==!1}})});var q0=i(()=>{"use strict";var kB=x(),IB=Y(),_B=J(),g0=ie(),PB=be(),RB=g0.Map,AB=g0.set;kB({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=_B(this),n=IB(r,arguments.length>1?arguments[1]:void 0),a=new RB;return PB(t,function(o,u){n(o,u,t)&&AB(a,u,o)}),a}})});var x0=i(()=>{"use strict";var NB=x(),MB=Y(),jB=J(),LB=be();NB({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=jB(this),n=MB(r,arguments.length>1?arguments[1]:void 0),a=LB(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return a&&a.value}})});var S0=i(()=>{"use strict";var $B=x(),FB=Y(),DB=J(),BB=be();$B({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=DB(this),n=FB(r,arguments.length>1?arguments[1]:void 0),a=BB(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return a&&a.key}})});var T0=i((UJ,w0)=>{"use strict";w0.exports=function(e,r){return e===r||e!==e&&r!==r}});var E0=i(()=>{"use strict";var GB=x(),UB=T0(),HB=J(),WB=be();GB({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return WB(HB(this),function(t){if(UB(t,r))return!0},!0)===!0}})});var O0=i(()=>{"use strict";var KB=x(),zB=J(),VB=be();KB({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=VB(zB(this),function(n,a){if(n===r)return{key:a}},!0);return t&&t.key}})});var k0=i(()=>{"use strict";var YB=x(),JB=Y(),QB=J(),C0=ie(),XB=be(),ZB=C0.Map,e6=C0.set;YB({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=QB(this),n=JB(r,arguments.length>1?arguments[1]:void 0),a=new ZB;return XB(t,function(o,u){e6(a,n(o,u,t),o)}),a}})});var _0=i(()=>{"use strict";var r6=x(),t6=Y(),n6=J(),I0=ie(),a6=be(),i6=I0.Map,o6=I0.set;r6({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=n6(this),n=t6(r,arguments.length>1?arguments[1]:void 0),a=new i6;return a6(t,function(o,u){o6(a,u,n(o,u,t))}),a}})});var P0=i(()=>{"use strict";var u6=x(),s6=J(),c6=ve(),l6=ie().set;u6({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=s6(this),n=arguments.length,a=0;a<n;)c6(arguments[a++],function(o,u){l6(t,o,u)},{AS_ENTRIES:!0});return t}})});var R0=i(()=>{"use strict";var f6=x(),p6=D(),v6=J(),d6=be(),m6=TypeError;f6({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=v6(this),n=arguments.length<2,a=n?void 0:arguments[1];if(p6(r),d6(t,function(o,u){n?(n=!1,a=o):a=r(a,o,u,t)}),n)throw new m6("Reduce of empty map with no initial value");return a}})});var A0=i(()=>{"use strict";var h6=x(),y6=Y(),b6=J(),g6=be();h6({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=b6(this),n=y6(r,arguments.length>1?arguments[1]:void 0);return g6(t,function(a,o){if(n(a,o,t))return!0},!0)===!0}})});var M0=i(()=>{"use strict";var q6=x(),N0=D(),x6=J(),_s=ie(),S6=TypeError,w6=_s.get,T6=_s.has,E6=_s.set;q6({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=x6(this),a=arguments.length;N0(t);var o=T6(n,r);if(!o&&a<3)throw new S6("Updating absent value");var u=o?w6(n,r):N0(a>2?arguments[2]:void 0)(r,n);return E6(n,r,t(u,r,n)),n}})});var Rs=i((oQ,j0)=>{"use strict";var Ha=G(),Ps=D(),Wa=N(),O6=X(),C6=TypeError;j0.exports=function(r,t){var n=O6(this),a=Ps(n.get),o=Ps(n.has),u=Ps(n.set),l=arguments.length>2?arguments[2]:void 0,s;if(!Wa(t)&&!Wa(l))throw new C6("At least one callback required");return Ha(o,n,r)?(s=Ha(a,n,r),Wa(t)&&(s=t(s),Ha(u,n,r,s))):Wa(l)&&(s=l(),Ha(u,n,r,s)),s}});var L0=i(()=>{"use strict";var k6=x(),I6=Rs();k6({target:"Map",proto:!0,real:!0,forced:!0},{upsert:I6})});var $0=i(()=>{"use strict";var _6=x(),P6=Rs();_6({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:P6})});var D0=i((fQ,F0)=>{"use strict";var R6=r0();i0();c0();f0();p0();d0();b0();q0();x0();S0();E0();Cs();ks();O0();k0();_0();P0();R0();A0();M0();L0();$0();F0.exports=R6});var G0=i((pQ,B0)=>{"use strict";B0.exports=D0()});var H0=i(()=>{"use strict";var A6=x(),N6=ft(),M6=Ni().indexOf,j6=rs(),As=N6([].indexOf),U0=!!As&&1/As([1],1,-0)<0,L6=U0||!j6("indexOf");A6({target:"Array",proto:!0,forced:L6},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return U0?As(this,r,t)||0:M6(this,r,t)}})});var K0=i((mQ,W0)=>{"use strict";H0();var $6=ue();W0.exports=$6("Array","indexOf")});var V0=i((hQ,z0)=>{"use strict";var F6=U(),D6=K0(),Ns=Array.prototype;z0.exports=function(e){var r=e.indexOf;return e===Ns||F6(Ns,e)&&r===Ns.indexOf?D6:r}});var J0=i((yQ,Y0)=>{"use strict";var B6=V0();Y0.exports=B6});var X0=i((bQ,Q0)=>{"use strict";var G6=J0();Q0.exports=G6});var eE=i((gQ,Z0)=>{"use strict";var U6=X0();Z0.exports=U6});var tE=i((qQ,rE)=>{"use strict";rE.exports=eE()});var gE=i(()=>{"use strict";var Y6=x(),J6=re(),bE=Pn(),Q6=_(),X6=Q6(function(){bE(1)});Y6({target:"Object",stat:!0,forced:X6},{keys:function(r){return bE(J6(r))}})});var xE=i((EX,qE)=>{"use strict";gE();var Z6=V();qE.exports=Z6.Object.keys});var wE=i((OX,SE)=>{"use strict";var e8=xE();SE.exports=e8});var EE=i((CX,TE)=>{"use strict";var r8=wE();TE.exports=r8});var CE=i((kX,OE)=>{"use strict";var t8=EE();OE.exports=t8});var IE=i((IX,kE)=>{"use strict";kE.exports=CE()});var PE=i((_X,_E)=>{_E.exports=IE()});var ze="";function Zs(e){ze=e.replace(/\/+$/,"")}async function sr(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function ec(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${ze}/comments?${t}`);return await sr(n,"Failed to fetch comments"),(await n.json()).data}async function Xa({uri:e,document:r,quote:t,prefix:n,suffix:a,body:o,author:u,parent:l}){let s={quote:t,prefix:n,suffix:a,body:o,author:u,parent:l};r?s.document=r:s.uri=e;let c=await fetch(`${ze}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});return await sr(c,"Failed to create comment"),c.json()}async function rc(e,{body:r}){let t=await fetch(`${ze}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:r})});return await sr(t,"Failed to update comment"),t.json()}async function tc(e,r){let t=await fetch(`${ze}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});return await sr(t,"Failed to update comment status"),t.json()}async function nc(e){let r=await fetch(`${ze}/comments/${e}`,{method:"DELETE"});await sr(r,"Failed to delete comment")}async function ac(e,r,t){let n=await fetch(`${ze}/comments/${e}/reactions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({emoji:r,author:t})});return await sr(n,"Failed to add reaction"),n.json()}async function ic(e,r,t){let n=await fetch(`${ze}/comments/${e}/reactions/${encodeURIComponent(r)}?author=${encodeURIComponent(t)}`,{method:"DELETE"});return await sr(n,"Failed to remove reaction"),n.json()}var Y$=b(Hr(),1),J$=b(Fn(),1),Q$=b(ra(),1),X$=b(ta(),1),Z$=b(na(),1);var ku=b(at(),1);function eb(e,r,t,n,a,o,u){try{var l=e[o](u),s=l.value}catch(c){return void t(c)}l.done?r(s):ku.default.resolve(s).then(n,a)}function Or(e){return function(){var r=this,t=arguments;return new ku.default(function(n,a){var o=e.apply(r,t);function u(s){eb(o,n,a,u,l,"next",s)}function l(s){eb(o,n,a,u,l,"throw",s)}u(void 0)})}}function Ut(e,r){this.v=e,this.k=r}function tr(e){return new Ut(e,0)}var Iu=b(at(),1),lb=b(Te(),1),fb=b(ba(),1);function Oe(e){return function(){return new Ht(e.apply(this,arguments))}}function Ht(e){var r,t;function n(o,u){try{var l=e[o](u),s=l.value,c=s instanceof Ut;Iu.default.resolve(c?s.v:s).then(function(f){if(c){var p=o==="return"?"return":"next";if(!s.k||f.done)return n(p,f);f=e[p](f).value}a(l.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){a("throw",f)}}function a(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new Iu.default(function(l,s){var c={key:o,arg:u,resolve:l,reject:s,next:null};t?t=t.next=c:(r=t=c,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Ht.prototype[typeof lb.default=="function"&&fb.default||"@@asyncIterator"]=function(){return this},Ht.prototype.next=function(e){return this._invoke("next",e)},Ht.prototype.throw=function(e){return this._invoke("throw",e)},Ht.prototype.return=function(e){return this._invoke("return",e)};var eF=b(ce(),1),rF=b(Mq(),1);function le(e){var r,t=z$(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function z$(e){return"startContainer"in e}function ar(e){if(V$(e))return e;var r=e,t=le(r).createRange();return t.selectNodeContents(r),t}function V$(e){return"startContainer"in e}var zq=b(Kq(),1);function Vq(e){if((0,zq.default)(e))return e}var ux=b(Te(),1),sx=b(Lo(),1),cx=b(Xu(),1);function lx(e,r){var t=e==null?null:typeof ux.default<"u"&&(0,sx.default)(e)||e["@@iterator"];if(t!=null){var n,a,o,u,l=[],s=!0,c=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;s=!1}else for(;!(s=(n=o.call(t)).done)&&((0,cx.default)(l).call(l,n.value),l.length!==r);s=!0);}catch(f){c=!0,a=f}finally{try{if(!s&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(c)throw a}}return l}}var fx=b(Ci(),1),px=b(Zi(),1);function Aa(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function Zu(e,r){if(e){var t;if(typeof e=="string")return Aa(e,r);var n=(0,fx.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,px.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Aa(e,r):void 0}}function vx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function De(e,r){return Vq(e)||lx(e,r)||Zu(e,r)||vx()}var dx=b(Te(),1),mx=b(ba(),1),hx=b(Xt(),1),tn=b(at(),1);function ot(e){var r,t,n,a=2;for(typeof dx.default<"u"&&(t=mx.default,n=hx.default);a--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Na(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Na(e){function r(t){if(Object(t)!==t)return tn.default.reject(new TypeError(t+" is not an object."));var n=t.done;return tn.default.resolve(t.value).then(function(a){return{value:a,done:n}})}return Na=function(n){this.s=n,this.n=n.next},Na.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var a=this.s.return;return a===void 0?tn.default.resolve({value:n,done:!0}):r(a.apply(this.s,arguments))},throw:function(n){var a=this.s.return;return a===void 0?tn.default.reject(n):r(a.apply(this.s,arguments))}},new Na(e)}var kD=b(ce(),1);var SD=b(ce(),1),wD=b(Px(),1),TD=b(Ax(),1),ED=b(rS(),1),OD=b(qS(),1),CD=b(is(),1);var Ls=b(ce(),1);var x4=b(ce(),1);var us=b(ce(),1);function nn(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function NS(e,r){return nn(e.startChunk,r.startChunk)&&nn(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function Cr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var os=b(zt(),1);var an=b(Te(),1),MS=b(Xt(),1);function Be(e){"@babel/helpers - typeof";return Be=typeof an.default=="function"&&typeof MS.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof an.default=="function"&&r.constructor===an.default&&r!==an.default.prototype?"symbol":typeof r},Be(e)}var zS=b(KS(),1);function VS(e,r){if(Be(e)!="object"||!e)return e;var t=e[zS.default];if(t!==void 0){var n=t.call(e,r||"default");if(Be(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Ma(e){var r=VS(e,"string");return Be(r)=="symbol"?r:r+""}function YS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,os.default)(e,Ma(n.key),n)}}function on(e,r,t){return r&&YS(e.prototype,r),t&&YS(e,t),(0,os.default)(e,"prototype",{writable:!1}),e}var JS=b(zt(),1);function kr(e,r,t){return(r=Ma(r))in e?(0,JS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var QS=b(Hr(),1);var ja="Iterator exhausted before seek ended.",un=function(){function e(r){Cr(this,e),this.chunker=r,kr(this,"currentChunkPosition",0),kr(this,"offsetInChunk",0),this.seekTo(0)}return on(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,a)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!nn(this.currentChunk,n);){var p=this._readToPreviousChunk(),v=De(p,2),d=v[0],h=v[1];if(t&&(u=d+u),h===null)throw new RangeError(ja)}else for(;!nn(this.currentChunk,n);){var l=this._readToNextChunk(),s=De(l,2),c=s[0],f=s[1];if(t&&(u+=c),f===null)throw new RangeError(ja)}var m=this.currentChunkPosition+a;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,QS.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var l=this.currentChunkPosition+this.currentChunk.data.length;if(l<=n){var s=this._readToNextChunk(),c=De(s,2),f=c[0],p=c[1];if(t&&(u+=f),p===null){if(this.position===n||o)break;throw new RangeError(ja)}}else{var v=a?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,v)),this.offsetInChunk=v,a&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=a?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var h=this._readToPreviousChunk(),m=De(h,2),y=m[0],g=m[1];if(t&&(u=y+u),g===null){if(o)break;throw new RangeError(ja)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,a=this.chunker.nextChunk();return a!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,a]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function ZS(e,r){return ss.apply(this,arguments)}function ss(){return ss=Or(us.default.mark(function e(r,t){var n,a,o,u,l,s,c,f,p,v,d,h,m,y,g,q,k,C,S,T,w,O,j=arguments;return us.default.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:n=j.length>2&&j[2]!==void 0?j[2]:{},a=n.minimalContext,o=a===void 0?!1:a,u=n.minimumQuoteLength,l=u===void 0?0:u,s=n.maxWordLength,c=s===void 0?50:s,f=new un(t()),p=new un(t()),f.seekToChunk(r.startChunk,r.startIndex),v=f.readToChunk(r.endChunk,r.endIndex),d="",h="",m=function(){return d.length+v.length+h.length},m()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),y=Math.floor((l-m())/2),d=f.read(-y,!1,!0)+d,m()<l&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),g=l-m(),h=h+f.read(g,!1,!0),m()<l&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),q=l-m(),d=f.read(-q,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=La(f,c,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+La(f,c,!1));case 11:return k={type:"TextQuoteSelector",exact:v,prefix:d,suffix:h},C=$a(k)(t()),I.next=16,C.next();case 16:if(S=I.sent,!(!S.done&&NS(S.value,r))){I.next=21;break}return I.next=20,C.next();case 20:S=I.sent;case 21:if(!S.done){I.next=23;break}return I.abrupt("return",k);case 23:if(T=S.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),p.seekToChunk(T.startChunk,T.startIndex-d.length),w=XS(f,p,!0),w!==void 0&&!o&&(w=La(f,c,!0)+w),f.seekToChunk(r.endChunk,r.endIndex+h.length),p.seekToChunk(T.endChunk,T.endIndex+h.length),O=XS(f,p,!1),O!==void 0&&!o&&(O=O+La(f,c,!1)),!o){I.next=44;break}if(!(w!==void 0&&(O===void 0||w.length<=O.length))){I.next=37;break}d=w+d,I.next=42;break;case 37:if(O===void 0){I.next=41;break}h=h+O,I.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:I.next=46;break;case 44:w!==void 0&&(d=w+d),O!==void 0&&(h=h+O);case 46:I.next=11;break;case 48:case"end":return I.stop()}},e)})),ss.apply(this,arguments)}function XS(e,r,t){for(var n="";;){var a=void 0;try{a=e.read(t?-1:1)}catch{return}n=t?a+n:n+a;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(a!==o)return n}}function La(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var a=void 0;try{a=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(AD(a)){e.seekBy(t?1:-1);break}n=t?a+n:n+a}return n}function AD(e){return/^\s+$/.test(e)}var Dw=b(Hr(),1),Bw=b(Fn(),1),Gw=b(ra(),1),Uw=b(ta(),1),Hw=b(na(),1);var fs=b(ce(),1),Ww=b(Sw(),1),Kw=b(Lw(),1);function $w(e,r){var t;if(typeof Gw.default>"u"||(0,Uw.default)(e)==null){if(Array.isArray(e)||(t=m4(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(c){throw c},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,l;return{s:function(){t=(0,Hw.default)(e)},n:function(){var c=t.next();return o=c.done,c},e:function(c){u=!0,l=c},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw l}}}}function m4(e,r){var t;if(e){if(typeof e=="string")return Fw(e,r);var n=(0,Dw.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,Bw.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fw(e,r)}}function Fw(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function $a(e){return function(){var r=Oe(fs.default.mark(function n(a){var o,u,l,s,c,f,p,v,d,h,m,y,g,q,k,C,S,T,w,O,j,qe,I,ee,xe,Q,F;return fs.default.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:o=e.exact,u=e.prefix||"",l=e.suffix||"",s=u+o+l,c=[],f=!0;case 6:p=a.currentChunk,v=p.data,d=[],h=$w(c),E.prev=10,h.s();case 12:if((m=h.n()).done){E.next=27;break}if(y=m.value,g=y.charactersMatched,y.endChunk===void 0&&(q=u.length+o.length-g,q<=v.length&&(y.endChunk=p,y.endIndex=q)),y.startChunk===void 0&&(k=u.length-g,(k<v.length||y.endChunk!==void 0)&&(y.startChunk=p,y.startIndex=k)),C=s.length-g,!(C<=v.length)){E.next=24;break}if(!(0,Ww.default)(v).call(v,s.substring(g))){E.next=22;break}return E.next=22,y;case 22:E.next=25;break;case 24:v===s.substring(g,g+v.length)&&(y.charactersMatched+=v.length,d.push(y));case 25:E.next=12;break;case 27:E.next=32;break;case 29:E.prev=29,E.t0=E.catch(10),h.e(E.t0);case 32:return E.prev=32,h.f(),E.finish(32);case 35:if(c=d,!(s.length<=v.length)){E.next=49;break}S=0;case 38:if(!(S<=v.length)){E.next=49;break}if(T=v.indexOf(s,S),T!==-1){E.next=42;break}return E.abrupt("break",49);case 42:if(S=T+1,!(T===0&&s.length===0&&!f)){E.next=45;break}return E.abrupt("continue",38);case 45:return E.next=47,{startChunk:p,startIndex:T+u.length,endChunk:p,endIndex:T+u.length+o.length};case 47:E.next=38;break;case 49:for(w=[],O=Math.max(v.length-s.length+1,0),j=function(Ke){var Qs=v[Ke];w=(0,Kw.default)(w).call(w,function(uO){return Qs===s[Ke-uO]}),Qs===s[0]&&w.push(Ke)},qe=O;qe<v.length;qe++)j(qe);I=$w(w);try{for(I.s();!(ee=I.n()).done;)xe=ee.value,Q=v.length-xe,F={charactersMatched:Q},Q>=u.length+o.length&&(F.endChunk=p,F.endIndex=xe+u.length+o.length),(Q>u.length||F.endChunk!==void 0)&&(F.startChunk=p,F.startIndex=xe+u.length),c.push(F)}catch(Rr){I.e(Rr)}finally{I.f()}f=!1;case 56:if(a.nextChunk()!==null){E.next=6;break}case 57:case"end":return E.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var g4=b(ce(),1);var h4=b(Hr(),1),y4=b(is(),1);var q4=b(ce(),1);var ln=b(lT(),1);var pT=b(qa(),1),vT=b(zt(),1);var ds=b(xa(),1),fT=b(Kt(),1);function ir(e,r){var t;return ir=ds.default?(0,fT.default)(t=ds.default).call(t):function(n,a){return n.__proto__=a,n},ir(e,r)}function ms(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,pT.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,vT.default)(e,"prototype",{writable:!1}),r&&ir(e,r)}function dT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function mT(e,r){if(r&&(Be(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return dT(e)}var hT=b(xa(),1),yT=b(Kt(),1),hs=b(ga(),1);function Ir(e){var r;return Ir=hT.default?(0,yT.default)(r=hs.default).call(r):function(t){return t.__proto__||(0,hs.default)(t)},Ir(e)}var js=b(G0(),1),lE=b(qa(),1);var nE=b(tE(),1);function aE(e){try{var r;return(0,nE.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var oE=b(Fa(),1),uE=b(Xu(),1),sE=b(Kt(),1);var iE=b(Fa(),1);function Ms(){try{var e=!Boolean.prototype.valueOf.call((0,iE.default)(Boolean,[],function(){}))}catch{}return(Ms=function(){return!!e})()}function cE(e,r,t){if(Ms())return oE.default.apply(null,arguments);var n=[null];(0,uE.default)(n).apply(n,r);var a=new((0,sE.default)(e).apply(e,n));return t&&ir(a,t.prototype),a}function cn(e){var r=typeof js.default=="function"?new js.default:void 0;return cn=function(n){if(n===null||!aE(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,a)}function a(){return cE(n,arguments,Ir(this).constructor)}return a.prototype=(0,lE.default)(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),ir(a,n)},cn(e)}function vE(e,r){var t=le(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),a=fE(e.startContainer,e.startOffset),o=De(a,2),u=o[0],l=o[1];for(n.currentNode=u;l===u.length&&n.nextNode();)u=n.currentNode,l=0;e.setStart(u,l);var s=fE(e.endContainer,e.endOffset),c=De(s,2),f=c[0],p=c[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function fE(e,r){var t;if(pE(e))return[e,r];var n;if(H6(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(pE(n))return[n,0];var a=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=a.createTreeWalker(a,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function pE(e){return e.nodeType===Node.TEXT_NODE}function H6(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function mE(e){var r=W6();return function(){var n=Ir(e),a;if(r){var o=Ir(this).constructor;a=(0,ln.default)(n,arguments,o)}else a=n.apply(this,arguments);return mT(this,a)}}function W6(){if(typeof Reflect>"u"||!ln.default||ln.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,ln.default)(Boolean,[],function(){})),!0}catch{return!1}}var Ka=function(e){ms(t,e);var r=mE(t);function t(n){return Cr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(cn(TypeError)),K6=function(e){ms(t,e);var r=mE(t);function t(n){return Cr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(cn(TypeError)),_r=function(){function e(r){var t=this;if(Cr(this,e),kr(this,"scope",void 0),kr(this,"iter",void 0),this.scope=ar(r),this.iter=le(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!dE(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Ka}}return on(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!dE(t))throw new Ka;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new K6;var n=t===this.scope.startContainer?this.scope.startOffset:0,a=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:a,data:t.data.substring(n,a),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=vE(t,this.scope),a=this.nodeToChunk(n.startContainer),o=n.startOffset-a.startOffset,u=this.nodeToChunk(n.endContainer),l=n.endOffset-u.startOffset;return{startChunk:a,startIndex:o,endChunk:u,endIndex:l}}},{key:"chunkRangeToRange",value:function(t){var n=le(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function dE(e){return e.nodeType===Node.TEXT_NODE}function hE(e,r){return $s.apply(this,arguments)}function $s(){return $s=Or(Ls.default.mark(function e(r,t){var n,a,o,u=arguments;return Ls.default.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},a=ar(t??le(r)),o=new _r(a),s.next=5,ZS(o.rangeToChunkRange(r),function(){return new _r(a)},n);case 5:return s.abrupt("return",s.sent);case 6:case"end":return s.stop()}},e)})),$s.apply(this,arguments)}var Fs=b(ce(),1);function yE(e){var r=$a(e);return function(){var t=Oe(Fs.default.mark(function a(o){var u,l,s,c,f,p,v,d;return Fs.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new _r(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof Ka)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:l=!0,s=!1,m.prev=13,f=ot(r(u));case 15:return m.next=17,tr(f.next());case 17:return p=m.sent,l=p.done,m.next=21,tr(p.value);case 21:if(v=m.sent,l){m.next=29;break}return d=v,m.next=26,u.chunkRangeToRange(d);case 26:l=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),s=!0,c=m.t1;case 35:if(m.prev=35,m.prev=36,!(!l&&f.return!=null)){m.next=40;break}return m.next=40,tr(f.return());case 40:if(m.prev=40,!s){m.next=43;break}throw c;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},a,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(a){return t.apply(this,arguments)}return n}()}var z6=b(ce(),1);var V6=b(ce(),1);var n8=b(PE(),1),a8=b(Hr(),1),i8=b(Fn(),1),o8=b(ra(),1),u8=b(ta(),1),s8=b(na(),1);async function RE(e,r){let t=await hE(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function za(e,r){let t=yE({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var ut="fb-highlight",AE="fb-highlight-active";var fn=null;function ME(e){fn=e}function Va(e,r){let t=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let n=NE(e,r);t.push(n)}else{let n=l8(e);for(let a=0;a<n.length;a++){let o=n[a],u=document.createRange();o===e.startContainer?(u.setStart(o,e.startOffset),u.setEnd(o,o.textContent.length)):o===e.endContainer?(u.setStart(o,0),u.setEnd(o,e.endOffset)):u.selectNodeContents(o),u.collapsed||t.push(NE(u,r))}}return t}function NE(e,r){let t=e.commonAncestorContainer;for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;let n=t,a=!1,o=null;for(;n;){if(n.tagName==="foreignObject"){a=!1;break}n.tagName==="text"&&n instanceof SVGElement&&(a=!0),n.tagName==="svg"&&(o=n),n=n.parentElement}if(a&&o)return c8(e,r,o);let u=document.createElement("mark");u.className=ut,u.dataset.commentId=r,u.addEventListener("click",()=>{fn&&fn(r)});try{e.surroundContents(u)}catch(l){return console.warn("[feedback-layer] Failed to create highlight:",l),null}return u}function c8(e,r,t){try{let n=e.getClientRects();if(n.length===0)return null;let a="http://www.w3.org/2000/svg",o=t.getScreenCTM();if(!o)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let u=e.commonAncestorContainer;for(;u&&u.nodeType!==Node.ELEMENT_NODE;)u=u.parentNode;let l=u,s=null;for(;l&&l!==t;){if(l.tagName==="text"){s=l.parentElement;break}l=l.parentElement}let c=s||t,f=o;c!==t&&c.getScreenCTM&&(f=c.getScreenCTM());let p=document.createElementNS(a,"g");p.setAttribute("class",ut),p.setAttribute("data-comment-id",r),p.style.cursor="pointer";for(let y=0;y<n.length;y++){let g=n[y],q=document.createElementNS(a,"rect"),k=t.createSVGPoint();k.x=g.left,k.y=g.top;let C=k.matrixTransform(f.inverse()),S=g.width/f.a,T=g.height/f.d;q.setAttribute("x",C.x),q.setAttribute("y",C.y),q.setAttribute("width",S),q.setAttribute("height",T),q.setAttribute("rx","2"),q.setAttribute("ry","2"),q.style.pointerEvents="none",p.appendChild(q)}c&&c!==t?c.appendChild(p):t.appendChild(p);let v=e.commonAncestorContainer;for(;v&&v.nodeType!==Node.ELEMENT_NODE;)v=v.parentNode;let d=new Set,h=v;for(;h&&h!==t;)h.tagName==="text"&&h instanceof SVGElement&&(d.add(h),h.querySelectorAll("tspan").forEach(g=>d.add(g))),h=h.parentElement;let m=y=>{y.preventDefault(),y.stopPropagation(),fn&&fn(r)};return d.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",m),y.dataset.fbCommentId=r}),p}catch(n){return console.warn("[feedback-layer] Failed to create SVG highlight:",n),null}}function Ds(e){document.querySelectorAll(`.${ut}[data-comment-id="${e}"]`).forEach(n=>{let a=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)a.removeChild(n);else{for(;n.firstChild;)a.insertBefore(n.firstChild,n);a.removeChild(n),a.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function jE(){document.querySelectorAll(`.${ut}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function pn(e){document.querySelectorAll(`.${ut}`).forEach(r=>{r.dataset.commentId===e?r.classList.add(AE):r.classList.remove(AE)})}function Bs(e){let r=document.querySelector(`.${ut}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function l8(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let a=document.createRange();return a.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,a)<0&&e.compareBoundaryPoints(Range.START_TO_END,a)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function LE(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,a)=>{let o=[`**${a+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let l of u)o.push(`  - **[${l.author}]** (reply): ${l.body}`);return o.join(`
`)}).join(`

`)}function $E(e,r){let t=LE(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(a=>!a.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function or(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var f8=`
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
`,FE=null,DE=null;function BE(e,r){DE=e,FE=r,p8()}function p8(){let e=document.createElement("style");e.textContent=f8,document.head.appendChild(e)}function GE(){let e=FE(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let a=document.createElement("button");a.className="hf-modal-close",a.textContent="\xD7",a.addEventListener("click",()=>r.remove()),n.appendChild(a);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",p=>{p.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let l=document.querySelector(DE.contentSelector||"body").innerHTML,s=$E(l,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${s.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${or(s)}</textarea>
  `;let c=document.createElement("button");c.className="hf-btn hf-btn-primary",c.textContent="Copy Prompt",c.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(s),c.textContent="Copied!"}catch{c.textContent="Copy failed"}setTimeout(()=>c.textContent="Copy Prompt",2e3)}),u.appendChild(c);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function UE(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function HE(e,r){return e.length>r?e.slice(0,r)+"...":e}function WE(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var vn=null;function zE(e){vn=document.createElement("div"),vn.className="fb-toast-container",e.appendChild(vn)}function ur(e,r="success"){if(!vn)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>KE(t)),t.appendChild(o)}vn.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>KE(t),r==="error"?8e3:4e3)}function KE(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}function VE(e,r){return r<=0?0:(e%r+r)%r}var v8=320,QE="feedback-layer-commenter",B=null,oe=null,Ue=null,Gs=null,XE=null,Us=null,Hs=null,Ws=null,Ks=null,hn=null,zs=!1,ZE=[],eO=new Set,ke=-1,dn=null,YE=!1;function d8(){YE||(YE=!0,T8())}function He(){return localStorage.getItem(QE)||""}function rO({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:a,onReaction:o}){XE=e,Us=r,Hs=t,Ws=n,Ks=a,hn=o,d8(),B=document.createElement("div"),B.className="fb-sidebar fb-sidebar-collapsed",B.setAttribute("role","complementary"),B.setAttribute("aria-label","Feedback sidebar"),B.innerHTML=`
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
               value="${or(He())}">
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
  `;let u=document.createElement("button");u.className="fb-sidebar-tab",u.textContent="Feedback",u.addEventListener("click",()=>st()),document.body.appendChild(u),document.body.appendChild(B),zE(B),oe=B.querySelector(".fb-comment-list"),oe.setAttribute("role","list"),Ue=B.querySelector(".fb-form-section");let l=B.querySelector(".fb-name-input");l.addEventListener("input",()=>{localStorage.setItem(QE,l.value.trim())}),B.querySelector(".fb-ai-btn").addEventListener("click",()=>GE()),B.querySelector(".fb-shortcuts-btn").addEventListener("click",()=>nO()),B.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>Vs());let p=B.querySelector(".fb-show-resolved-cb");p.addEventListener("change",()=>{zs=p.checked,We(ZE,eO)}),document.addEventListener("keydown",h8)}function st(){B.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden"),b8(),oe?.querySelector(".fb-thread .fb-cmt-card")&&Ya(0)}function Vs(){B.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden"),aO(),ke=-1,document.body.focus()}function tO(){let e=document.activeElement;if(!e)return!1;let r=e.tagName;return r==="TEXTAREA"||r==="INPUT"||r==="SELECT"||e.isContentEditable}function mn(){return oe?Array.from(oe.querySelectorAll(".fb-thread > .fb-cmt-card:first-child")):[]}function Ya(e){let r=mn();if(r.length===0)return;e=VE(e,r.length),ke=e,oe.querySelectorAll(".fb-cmt-card").forEach(a=>a.classList.remove("fb-cmt-active"));let t=r[e];t.classList.add("fb-cmt-active"),t.scrollIntoView({behavior:"smooth",block:"nearest"});let n=t.closest(".fb-thread");n?.dataset.commentId&&(pn(n.dataset.commentId),Bs(n.dataset.commentId))}function m8(e){if(B.classList.contains("fb-sidebar-collapsed"))return;let r=e.key;if(r==="Escape"){e.preventDefault(),Vs();return}if(!tO()){if(r==="Enter"){let t=mn();if(ke>=0&&ke<t.length){e.preventDefault();let a=t[ke].closest(".fb-thread")?.querySelector(".fb-reply-btn");a&&a.click()}return}if(r==="j"){if(e.preventDefault(),mn().length===0)return;let n=ke<0?0:ke+1;Ya(n);return}if(r==="k"){e.preventDefault();let t=mn();if(t.length===0)return;let n=ke<0?t.length-1:ke-1;Ya(n);return}if(r==="?"){e.preventDefault(),nO();return}}}function nO(){let e=document.querySelector(".fb-shortcuts-overlay");if(e){e.remove();return}let r=document.createElement("div");r.className="fb-shortcuts-overlay";let t=document.createElement("div");t.className="fb-shortcuts-modal",t.innerHTML=`
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
  `;let n=()=>r.remove();t.querySelector(".fb-shortcuts-close").addEventListener("click",n),r.addEventListener("click",a=>{a.target===r&&n()}),r.addEventListener("keydown",a=>{a.key==="Escape"&&(a.stopPropagation(),n())}),r.appendChild(t),document.body.appendChild(r),t.querySelector(".fb-shortcuts-close").focus()}function h8(e){tO()||e.key==="s"&&(e.preventDefault(),y8())}function y8(){B.classList.contains("fb-sidebar-collapsed")?st():Vs()}function b8(){aO(),dn=m8,document.addEventListener("keydown",dn)}function aO(){dn&&(document.removeEventListener("keydown",dn),dn=null)}function iO(e){if(st(),!He()){let n=B.querySelector(".fb-name-input");n.classList.add("fb-name-input-error"),setTimeout(()=>n.classList.remove("fb-name-input-error"),2e3)}Gs=e,Ue.style.display="",Ue.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${or(HE(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `;let r=Ue.querySelector(".fb-form-textarea");r.focus();let t=()=>{if(!He()){let a=B.querySelector(".fb-name-input");a.focus(),a.style.outline="2px solid #ef4444",setTimeout(()=>a.style.outline="",2e3);return}let n=r.value.trim();n&&(XE({comment:n,commenter:He()}),Ue.style.display="none",Gs=null)};Ue.querySelector(".fb-submit-btn").addEventListener("click",t),r.addEventListener("keydown",n=>{n.key==="Enter"&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),t())}),Ue.querySelector(".fb-cancel-btn").addEventListener("click",()=>{Ue.style.display="none",Gs=null}),Ue.scrollIntoView({behavior:"smooth",block:"nearest"})}function We(e,r=new Set,t=new Map){ZE=e,eO=r,ke=-1,oe.innerHTML="";let{topLevel:n,repliesByParent:a}=UE(e),o=n.slice().sort((c,f)=>{let p=t.get(c.id),v=t.get(f.id);return!p||!v?0:p.compareBoundaryPoints(Range.START_TO_START,v)}),u=o.filter(c=>{let f=r.has(c.id),p=c.status==="closed";return f||p&&zs}),l=zs?u:u.filter(c=>c.status!=="closed");if(o.length===0){oe.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let s=o.filter(c=>!r.has(c.id)&&c.status!=="closed").length;if(l.length===0){s>0?oe.innerHTML=`<div class="fb-empty">
        ${u.length} comment(s) resolved.
        ${s>0?`<br>${s} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:oe.innerHTML=`<div class="fb-empty">All ${o.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let c of l){let f=document.createElement("div");f.className="fb-thread",f.setAttribute("role","listitem"),f.setAttribute("tabindex","0"),f.dataset.commentId=c.id,f.appendChild(JE(c,!1));let p=a.get(c.id)||[];for(let d of p)f.appendChild(JE(d,!0));let v=document.createElement("button");v.className="fb-reply-btn",v.textContent="Reply",v.addEventListener("click",d=>{d.stopPropagation(),S8(c.id,f,v)}),f.appendChild(v),f.addEventListener("focus",()=>{let h=mn().indexOf(f.querySelector(".fb-cmt-card"));h>=0&&Ya(h)}),oe.appendChild(f)}}function JE(e,r){let t=e.status==="closed",n=document.createElement("div");n.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":""),n.dataset.id=e.id,n.innerHTML=`
    <div class="fb-cmt-body">${or(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${or(e.author)}</span>
      <span class="fb-cmt-time">${WE(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
    <div class="fb-reactions"></div>
  `;let a=n.querySelector(".fb-reactions");return q8(a,e),r||(n.addEventListener("click",o=>{o.target.closest(".fb-cmt-delete")||o.target.closest(".fb-cmt-resolve")||o.target.closest(".fb-cmt-edit")||o.target.closest(".fb-reactions")||(pn(e.id),Bs(e.id),oe.querySelectorAll(".fb-cmt-card").forEach(u=>u.classList.remove("fb-cmt-active")),n.classList.add("fb-cmt-active"))}),n.querySelector(".fb-cmt-resolve").addEventListener("click",o=>{o.stopPropagation(),Hs&&Hs(e.id,!t)})),n.querySelector(".fb-cmt-edit").addEventListener("click",o=>{o.stopPropagation(),w8(e,n)}),n.querySelector(".fb-cmt-delete").addEventListener("click",o=>{o.stopPropagation(),Us&&Us(e.id)}),n}var Ys={"\u{1F44D}":"Like","\u2764\uFE0F":"Love","\u{1F440}":"Seen","\u{1F389}":"Celebrate","\u{1F914}":"Question","\u{1F602}":"Funny"},g8=Object.keys(Ys);function q8(e,r){let t=r.reactions||[],n=He();for(let o of t){let u=document.createElement("button");u.className="fb-reaction-badge",n&&o.authors.includes(n)&&u.classList.add("fb-reaction-mine");let s=Ys[o.emoji];u.innerHTML=`${o.emoji}<span class="fb-reaction-count">${o.count}</span>`,u.title=(s?s+": ":"")+o.authors.join(", "),u.addEventListener("click",c=>{c.stopPropagation(),hn&&hn(r.id,o.emoji)}),e.appendChild(u)}let a=document.createElement("button");a.className="fb-reaction-add",a.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><circle cx="9" cy="10" r="0.5" fill="currentColor"/><circle cx="15" cy="10" r="0.5" fill="currentColor"/></svg>',a.title="Add reaction",a.addEventListener("click",o=>{o.stopPropagation(),x8(e,r,a)}),e.appendChild(a)}function x8(e,r,t){let n=e.querySelector(".fb-emoji-picker");if(n){n.remove();return}let a=document.createElement("div");a.className="fb-emoji-picker";for(let u of g8){let l=Ys[u],s=document.createElement("button");s.className="fb-emoji-option",s.textContent=u,s.title=l,s.addEventListener("click",c=>{c.stopPropagation(),a.remove(),hn&&hn(r.id,u)}),a.appendChild(s)}e.insertBefore(a,t.nextSibling);let o=u=>{!a.contains(u.target)&&u.target!==t&&(a.remove(),document.removeEventListener("click",o,!0))};setTimeout(()=>document.addEventListener("click",o,!0),0)}function S8(e,r,t){st();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let a=document.createElement("div");a.className="fb-reply-form",a.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!He()){let s=B.querySelector(".fb-name-input");s.focus(),s.style.outline="2px solid #ef4444",setTimeout(()=>s.style.outline="",2e3);return}let l=a.querySelector("textarea").value.trim();l&&(Ws&&Ws({parent_id:e,comment:l,commenter:He()}),a.remove(),t.style.display="")};a.querySelector(".fb-reply-submit").addEventListener("click",o);let u=a.querySelector("textarea");u.addEventListener("keydown",l=>{l.key==="Enter"&&(l.metaKey||l.ctrlKey)&&(l.preventDefault(),o())}),a.querySelector(".fb-reply-cancel").addEventListener("click",()=>{a.remove(),t.style.display=""}),r.insertBefore(a,t),u.focus()}function w8(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${or(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let a=t.querySelector("textarea");a.focus(),a.setSelectionRange(a.value.length,a.value.length);let o=()=>{let u=a.value.trim();u&&Ks&&Ks(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),a.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function oO(e){let r=oe.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(oe.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function T8(){let e=document.createElement("style");e.textContent=`
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
      width: ${v8}px;
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
  `,document.head.appendChild(e)}var ct=null,Ja=null,Qa=null,$=[],Pr=null,ge=null,de=new Set,Ie=new Map;function E8(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null,theme:e?.dataset.theme||"auto"};Zs(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{ct=document.querySelector(r.contentSelector)||document.body,Ja=r.documentUri||window.location.origin+window.location.pathname,Qa=r.documentId||null,document.documentElement.dataset.remarqTheme=r.theme,rO({onSubmit:_8,onDelete:M8,onResolve:P8,onReply:R8,onEdit:A8,onReaction:N8}),ME(a=>{st(),oO(a),pn(a)}),k8(),await t(),O8(),BE(r,()=>$)}catch(a){console.error("[feedback-layer] Boot failed:",a)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function O8(){try{$=await ec(Ja,Qa),de=await C8($),We($,de,Ie)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),ur(`Failed to load comments: ${e.message}`,"error")}}async function C8(e){jE();let r=new Set;Ie.clear();for(let t of e)if(!t.parent)try{let n=await za({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ct);n&&t.status!=="closed"?(Va(n,t.id),r.add(t.id),Ie.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),Ie.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function k8(){document.addEventListener("mouseup",Js),document.addEventListener("keyup",Js),document.addEventListener("touchend",Js)}function Js(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){yn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){yn();return}if(!ct.contains(r.commonAncestorContainer)){yn();return}I8(r)},10)}function I8(e){yn();let r=e.getBoundingClientRect();ge=document.createElement("button"),ge.className="fb-annotate-tooltip",ge.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',ge.style.top=window.scrollY+r.bottom+8+"px",ge.style.left=window.scrollX+r.left+r.width/2-40+"px";let t=async n=>{n.preventDefault(),n.stopPropagation();let a=window.getSelection();if(!a||a.isCollapsed)return;let o=a.getRangeAt(0);try{Pr=await RE(o,ct),iO(Pr.exact)}catch(u){console.error("[feedback-layer] Failed to create selector:",u)}yn()};ge.addEventListener("mousedown",t),ge.addEventListener("touchstart",t),document.body.appendChild(ge)}function yn(){ge&&(ge.remove(),ge=null)}async function _8({comment:e,commenter:r}){if(Pr){try{let t=await Xa({uri:Ja,document:Qa,quote:Pr.exact,prefix:Pr.prefix,suffix:Pr.suffix,body:e,author:r});$.push(t);let n=await za({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ct);n&&(Va(n,t.id),de.add(t.id)),We($,de,Ie),window.getSelection().removeAllRanges()}catch(t){console.error("[feedback-layer] Failed to create comment:",t),ur(`Failed to save comment: ${t.message}`,"error")}Pr=null}}async function P8(e,r){try{let n=await tc(e,r?"closed":"open"),a=$.findIndex(o=>o.id===e);if(a!==-1&&($[a]=n),r)Ds(e);else{let o=n,u=await za({exact:o.quote,prefix:o.prefix,suffix:o.suffix},ct);u?(Va(u,o.id),de.add(o.id)):de.delete(o.id)}We($,de,Ie)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),ur(`Failed to update comment: ${t.message}`,"error")}}async function R8({parent_id:e,comment:r,commenter:t}){try{let n=await Xa({uri:Ja,document:Qa,body:r,author:t,parent:e});$.push(n),We($,de,Ie)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),ur(`Failed to save reply: ${n.message}`,"error")}}async function A8(e,r){try{let t=await rc(e,{body:r}),n=$.findIndex(a=>a.id===e);n!==-1&&($[n]=t),We($,de,Ie)}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),ur(`Failed to update comment: ${t.message}`,"error")}}async function N8(e,r){let t=He();if(t)try{let o=$.find(s=>s.id===e)?.reactions?.find(s=>s.emoji===r)?.authors.includes(t),u;o?u=await ic(e,r,t):u=await ac(e,r,t);let l=$.findIndex(s=>s.id===e);l!==-1&&($[l]={...$[l],reactions:u.reactions}),We($,de,Ie)}catch(n){console.error("[feedback-layer] Failed to toggle reaction:",n),ur(`Failed to update reaction: ${n.message}`,"error")}}async function M8(e){try{await nc(e),Ds(e),de.delete(e),$=$.filter(r=>r.id!==e&&r.parent!==e),We($,de,Ie)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),ur(`Failed to delete comment: ${r.message}`,"error")}}try{E8()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
