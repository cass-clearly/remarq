var FeedbackLayer=(()=>{var mC=Object.create;var ac=Object.defineProperty;var hC=Object.getOwnPropertyDescriptor;var yC=Object.getOwnPropertyNames;var bC=Object.getPrototypeOf,gC=Object.prototype.hasOwnProperty;var i=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var qC=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of yC(r))!gC.call(e,a)&&a!==t&&ac(e,a,{get:()=>r[a],enumerable:!(n=hC(r,a))||n.enumerable});return e};var b=(e,r,t)=>(t=e!=null?mC(bC(e)):{},qC(r||!e||!e.__esModule?ac(t,"default",{value:e,enumerable:!0}):t,e));var _=i((K6,pc)=>{"use strict";pc.exports=function(e){try{return!!e()}catch{return!0}}});var Ar=i((z6,vc)=>{"use strict";var xC=_();vc.exports=!xC(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var A=i((V6,hc)=>{"use strict";var dc=Ar(),mc=Function.prototype,ai=mc.call,wC=dc&&mc.bind.bind(ai,ai);hc.exports=dc?wC:function(e){return function(){return ai.apply(e,arguments)}}});var U=i((Y6,yc)=>{"use strict";var SC=A();yc.exports=SC({}.isPrototypeOf)});var P=i((ii,bc)=>{"use strict";var lt=function(e){return e&&e.Math===Math&&e};bc.exports=lt(typeof globalThis=="object"&&globalThis)||lt(typeof window=="object"&&window)||lt(typeof self=="object"&&self)||lt(typeof global=="object"&&global)||lt(typeof ii=="object"&&ii)||function(){return this}()||Function("return this")()});var Nr=i((J6,wc)=>{"use strict";var TC=Ar(),xc=Function.prototype,gc=xc.apply,qc=xc.call;wc.exports=typeof Reflect=="object"&&Reflect.apply||(TC?qc.bind(gc):function(){return qc.apply(gc,arguments)})});var Se=i((Q6,Tc)=>{"use strict";var Sc=A(),EC=Sc({}.toString),CC=Sc("".slice);Tc.exports=function(e){return CC(EC(e),8,-1)}});var ft=i((X6,Ec)=>{"use strict";var OC=Se(),kC=A();Ec.exports=function(e){if(OC(e)==="Function")return kC(e)}});var N=i((Z6,Cc)=>{"use strict";var oi=typeof document=="object"&&document.all;Cc.exports=typeof oi>"u"&&oi!==void 0?function(e){return typeof e=="function"||e===oi}:function(e){return typeof e=="function"}});var H=i((e8,Oc)=>{"use strict";var IC=_();Oc.exports=!IC(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var G=i((r8,kc)=>{"use strict";var _C=Ar(),gn=Function.prototype.call;kc.exports=_C?gn.bind(gn):function(){return gn.apply(gn,arguments)}});var ui=i(Pc=>{"use strict";var Ic={}.propertyIsEnumerable,_c=Object.getOwnPropertyDescriptor,PC=_c&&!Ic.call({1:2},1);Pc.f=PC?function(r){var t=_c(this,r);return!!t&&t.enumerable}:Ic});var Ve=i((n8,Rc)=>{"use strict";Rc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var qn=i((a8,Ac)=>{"use strict";var RC=A(),AC=_(),NC=Se(),si=Object,MC=RC("".split);Ac.exports=AC(function(){return!si("z").propertyIsEnumerable(0)})?function(e){return NC(e)==="String"?MC(e,""):si(e)}:si});var cr=i((i8,Nc)=>{"use strict";Nc.exports=function(e){return e==null}});var lr=i((o8,Mc)=>{"use strict";var jC=cr(),LC=TypeError;Mc.exports=function(e){if(jC(e))throw new LC("Can't call method on "+e);return e}});var Pe=i((u8,jc)=>{"use strict";var $C=qn(),FC=lr();jc.exports=function(e){return $C(FC(e))}});var L=i((s8,Lc)=>{"use strict";var DC=N();Lc.exports=function(e){return typeof e=="object"?e!==null:DC(e)}});var V=i((c8,$c)=>{"use strict";$c.exports={}});var W=i((l8,Dc)=>{"use strict";var ci=V(),li=P(),BC=N(),Fc=function(e){return BC(e)?e:void 0};Dc.exports=function(e,r){return arguments.length<2?Fc(ci[e])||Fc(li[e]):ci[e]&&ci[e][r]||li[e]&&li[e][r]}});var Mr=i((f8,Uc)=>{"use strict";var GC=P(),Bc=GC.navigator,Gc=Bc&&Bc.userAgent;Uc.exports=Gc?String(Gc):""});var jr=i((p8,Yc)=>{"use strict";var Vc=P(),fi=Mr(),Hc=Vc.process,Wc=Vc.Deno,Kc=Hc&&Hc.versions||Wc&&Wc.version,zc=Kc&&Kc.v8,he,xn;zc&&(he=zc.split("."),xn=he[0]>0&&he[0]<4?1:+(he[0]+he[1]));!xn&&fi&&(he=fi.match(/Edge\/(\d+)/),(!he||he[1]>=74)&&(he=fi.match(/Chrome\/(\d+)/),he&&(xn=+he[1])));Yc.exports=xn});var fr=i((v8,Qc)=>{"use strict";var Jc=jr(),UC=_(),HC=P(),WC=HC.String;Qc.exports=!!Object.getOwnPropertySymbols&&!UC(function(){var e=Symbol("symbol detection");return!WC(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Jc&&Jc<41})});var pi=i((d8,Xc)=>{"use strict";var KC=fr();Xc.exports=KC&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Lr=i((m8,Zc)=>{"use strict";var zC=W(),VC=N(),YC=U(),JC=pi(),QC=Object;Zc.exports=JC?function(e){return typeof e=="symbol"}:function(e){var r=zC("Symbol");return VC(r)&&YC(r.prototype,QC(e))}});var Ye=i((h8,el)=>{"use strict";var XC=String;el.exports=function(e){try{return XC(e)}catch{return"Object"}}});var D=i((y8,rl)=>{"use strict";var ZC=N(),eO=Ye(),rO=TypeError;rl.exports=function(e){if(ZC(e))return e;throw new rO(eO(e)+" is not a function")}});var wn=i((b8,tl)=>{"use strict";var tO=D(),nO=cr();tl.exports=function(e,r){var t=e[r];return nO(t)?void 0:tO(t)}});var al=i((g8,nl)=>{"use strict";var vi=G(),di=N(),mi=L(),aO=TypeError;nl.exports=function(e,r){var t,n;if(r==="string"&&di(t=e.toString)&&!mi(n=vi(t,e))||di(t=e.valueOf)&&!mi(n=vi(t,e))||r!=="string"&&di(t=e.toString)&&!mi(n=vi(t,e)))return n;throw new aO("Can't convert object to primitive value")}});var Z=i((q8,il)=>{"use strict";il.exports=!0});var sl=i((x8,ul)=>{"use strict";var ol=P(),iO=Object.defineProperty;ul.exports=function(e,r){try{iO(ol,e,{value:r,configurable:!0,writable:!0})}catch{ol[e]=r}return r}});var pt=i((w8,fl)=>{"use strict";var oO=Z(),uO=P(),sO=sl(),cl="__core-js_shared__",ll=fl.exports=uO[cl]||sO(cl,{});(ll.versions||(ll.versions=[])).push({version:"3.48.0",mode:oO?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var pr=i((S8,vl)=>{"use strict";var pl=pt();vl.exports=function(e,r){return pl[e]||(pl[e]=r||{})}});var re=i((T8,dl)=>{"use strict";var cO=lr(),lO=Object;dl.exports=function(e){return lO(cO(e))}});var K=i((E8,ml)=>{"use strict";var fO=A(),pO=re(),vO=fO({}.hasOwnProperty);ml.exports=Object.hasOwn||function(r,t){return vO(pO(r),t)}});var $r=i((C8,hl)=>{"use strict";var dO=A(),mO=0,hO=Math.random(),yO=dO(1.1.toString);hl.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+yO(++mO+hO,36)}});var R=i((O8,bl)=>{"use strict";var bO=P(),gO=pr(),yl=K(),qO=$r(),xO=fr(),wO=pi(),Fr=bO.Symbol,hi=gO("wks"),SO=wO?Fr.for||Fr:Fr&&Fr.withoutSetter||qO;bl.exports=function(e){return yl(hi,e)||(hi[e]=xO&&yl(Fr,e)?Fr[e]:SO("Symbol."+e)),hi[e]}});var wl=i((k8,xl)=>{"use strict";var TO=G(),gl=L(),ql=Lr(),EO=wn(),CO=al(),OO=R(),kO=TypeError,IO=OO("toPrimitive");xl.exports=function(e,r){if(!gl(e)||ql(e))return e;var t=EO(e,IO),n;if(t){if(r===void 0&&(r="default"),n=TO(t,e,r),!gl(n)||ql(n))return n;throw new kO("Can't convert object to primitive value")}return r===void 0&&(r="number"),CO(e,r)}});var Sn=i((I8,Sl)=>{"use strict";var _O=wl(),PO=Lr();Sl.exports=function(e){var r=_O(e,"string");return PO(r)?r:r+""}});var Tn=i((_8,El)=>{"use strict";var RO=P(),Tl=L(),yi=RO.document,AO=Tl(yi)&&Tl(yi.createElement);El.exports=function(e){return AO?yi.createElement(e):{}}});var bi=i((P8,Cl)=>{"use strict";var NO=H(),MO=_(),jO=Tn();Cl.exports=!NO&&!MO(function(){return Object.defineProperty(jO("div"),"a",{get:function(){return 7}}).a!==7})});var vt=i(kl=>{"use strict";var LO=H(),$O=G(),FO=ui(),DO=Ve(),BO=Pe(),GO=Sn(),UO=K(),HO=bi(),Ol=Object.getOwnPropertyDescriptor;kl.f=LO?Ol:function(r,t){if(r=BO(r),t=GO(t),HO)try{return Ol(r,t)}catch{}if(UO(r,t))return DO(!$O(FO.f,r,t),r[t])}});var gi=i((A8,Il)=>{"use strict";var WO=_(),KO=N(),zO=/#|\.prototype\./,dt=function(e,r){var t=YO[VO(e)];return t===QO?!0:t===JO?!1:KO(r)?WO(r):!!r},VO=dt.normalize=function(e){return String(e).replace(zO,".").toLowerCase()},YO=dt.data={},JO=dt.NATIVE="N",QO=dt.POLYFILL="P";Il.exports=dt});var Y=i((N8,Pl)=>{"use strict";var _l=ft(),XO=D(),ZO=Ar(),ek=_l(_l.bind);Pl.exports=function(e,r){return XO(e),r===void 0?e:ZO?ek(e,r):function(){return e.apply(r,arguments)}}});var qi=i((M8,Rl)=>{"use strict";var rk=H(),tk=_();Rl.exports=rk&&tk(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var X=i((j8,Al)=>{"use strict";var nk=L(),ak=String,ik=TypeError;Al.exports=function(e){if(nk(e))return e;throw new ik(ak(e)+" is not an object")}});var te=i(Ml=>{"use strict";var ok=H(),uk=bi(),sk=qi(),En=X(),Nl=Sn(),ck=TypeError,xi=Object.defineProperty,lk=Object.getOwnPropertyDescriptor,wi="enumerable",Si="configurable",Ti="writable";Ml.f=ok?sk?function(r,t,n){if(En(r),t=Nl(t),En(n),typeof r=="function"&&t==="prototype"&&"value"in n&&Ti in n&&!n[Ti]){var a=lk(r,t);a&&a[Ti]&&(r[t]=n.value,n={configurable:Si in n?n[Si]:a[Si],enumerable:wi in n?n[wi]:a[wi],writable:!1})}return xi(r,t,n)}:xi:function(r,t,n){if(En(r),t=Nl(t),En(n),uk)try{return xi(r,t,n)}catch{}if("get"in n||"set"in n)throw new ck("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var Te=i(($8,jl)=>{"use strict";var fk=H(),pk=te(),vk=Ve();jl.exports=fk?function(e,r,t){return pk.f(e,r,vk(1,t))}:function(e,r,t){return e[r]=t,e}});var q=i((F8,$l)=>{"use strict";var mt=P(),dk=Nr(),mk=ft(),hk=N(),yk=vt().f,bk=gi(),Dr=V(),gk=Y(),Br=Te(),Ll=K();pt();var qk=function(e){var r=function(t,n,a){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,a)}return dk(e,this,arguments)};return r.prototype=e.prototype,r};$l.exports=function(e,r){var t=e.target,n=e.global,a=e.stat,o=e.proto,u=n?mt:a?mt[t]:mt[t]&&mt[t].prototype,c=n?Dr:Dr[t]||Br(Dr,t,{})[t],s=c.prototype,l,f,v,p,d,h,m,x,y;for(p in r)l=bk(n?p:t+(a?".":"#")+p,e.forced),f=!l&&u&&Ll(u,p),h=c[p],f&&(e.dontCallGetSet?(y=yk(u,p),m=y&&y.value):m=u[p]),d=f&&m?m:r[p],!(!l&&!o&&typeof h==typeof d)&&(e.bind&&f?x=gk(d,mt):e.wrap&&f?x=qk(d):o&&hk(d)?x=mk(d):x=d,(e.sham||d&&d.sham||h&&h.sham)&&Br(x,"sham",!0),Br(c,p,x),o&&(v=t+"Prototype",Ll(Dr,v)||Br(Dr,v,{}),Br(Dr[v],p,d),e.real&&s&&(l||!s[p])&&Br(s,p,d)))}});var Re=i((D8,Fl)=>{"use strict";var xk=Se();Fl.exports=Array.isArray||function(r){return xk(r)==="Array"}});var Cn=i((B8,Bl)=>{"use strict";var wk=R(),Sk=wk("toStringTag"),Dl={};Dl[Sk]="z";Bl.exports=String(Dl)==="[object z]"});var ht=i((G8,Gl)=>{"use strict";var Tk=Cn(),Ek=N(),On=Se(),Ck=R(),Ok=Ck("toStringTag"),kk=Object,Ik=On(function(){return arguments}())==="Arguments",_k=function(e,r){try{return e[r]}catch{}};Gl.exports=Tk?On:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=_k(r=kk(e),Ok))=="string"?t:Ik?On(r):(n=On(r))==="Object"&&Ek(r.callee)?"Arguments":n}});var Ci=i((U8,Ul)=>{"use strict";var Pk=A(),Rk=N(),Ei=pt(),Ak=Pk(Function.toString);Rk(Ei.inspectSource)||(Ei.inspectSource=function(e){return Ak(e)});Ul.exports=Ei.inspectSource});var bt=i((H8,Vl)=>{"use strict";var Nk=A(),Mk=_(),Hl=N(),jk=ht(),Lk=W(),$k=Ci(),Wl=function(){},Kl=Lk("Reflect","construct"),Oi=/^\s*(?:class|function)\b/,Fk=Nk(Oi.exec),Dk=!Oi.test(Wl),yt=function(r){if(!Hl(r))return!1;try{return Kl(Wl,[],r),!0}catch{return!1}},zl=function(r){if(!Hl(r))return!1;switch(jk(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Dk||!!Fk(Oi,$k(r))}catch{return!0}};zl.sham=!0;Vl.exports=!Kl||Mk(function(){var e;return yt(yt.call)||!yt(Object)||!yt(function(){e=!0})||e})?zl:yt});var Jl=i((W8,Yl)=>{"use strict";var Bk=Math.ceil,Gk=Math.floor;Yl.exports=Math.trunc||function(r){var t=+r;return(t>0?Gk:Bk)(t)}});var kn=i((K8,Ql)=>{"use strict";var Uk=Jl();Ql.exports=function(e){var r=+e;return r!==r||r===0?0:Uk(r)}});var ki=i((z8,Xl)=>{"use strict";var Hk=kn(),Wk=Math.max,Kk=Math.min;Xl.exports=function(e,r){var t=Hk(e);return t<0?Wk(t+r,0):Kk(t,r)}});var Ii=i((V8,Zl)=>{"use strict";var zk=kn(),Vk=Math.min;Zl.exports=function(e){var r=zk(e);return r>0?Vk(r,9007199254740991):0}});var fe=i((Y8,ef)=>{"use strict";var Yk=Ii();ef.exports=function(e){return Yk(e.length)}});var Gr=i((J8,rf)=>{"use strict";var Jk=H(),Qk=te(),Xk=Ve();rf.exports=function(e,r,t){Jk?Qk.f(e,r,Xk(0,t)):e[r]=t}});var Ur=i((Q8,tf)=>{"use strict";var Zk=H(),e1=Re(),r1=TypeError,t1=Object.getOwnPropertyDescriptor,n1=Zk&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();tf.exports=n1?function(e,r){if(e1(e)&&!t1(e,"length").writable)throw new r1("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var gt=i((X8,nf)=>{"use strict";var a1=_(),i1=R(),o1=jr(),u1=i1("species");nf.exports=function(e){return o1>=51||!a1(function(){var r=[],t=r.constructor={};return t[u1]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var vr=i((Z8,af)=>{"use strict";var s1=A();af.exports=s1([].slice)});var sf=i(()=>{"use strict";var c1=q(),of=Re(),l1=bt(),f1=L(),uf=ki(),p1=fe(),v1=Pe(),d1=Gr(),m1=Ur(),h1=R(),y1=gt(),b1=vr(),g1=y1("slice"),q1=h1("species"),_i=Array,x1=Math.max;c1({target:"Array",proto:!0,forced:!g1},{slice:function(r,t){var n=v1(this),a=p1(n),o=uf(r,a),u=uf(t===void 0?a:t,a),c,s,l;if(of(n)&&(c=n.constructor,l1(c)&&(c===_i||of(c.prototype))?c=void 0:f1(c)&&(c=c[q1],c===null&&(c=void 0)),c===_i||c===void 0))return b1(n,o,u);for(s=new(c===void 0?_i:c)(x1(u-o,0)),l=0;o<u;o++,l++)o in n&&d1(s,l,n[o]);return m1(s,l),s}})});var ue=i((tG,cf)=>{"use strict";var w1=P(),S1=V();cf.exports=function(e,r){var t=S1[e+"Prototype"],n=t&&t[r];if(n)return n;var a=w1[e],o=a&&a.prototype;return o&&o[r]}});var ff=i((nG,lf)=>{"use strict";sf();var T1=ue();lf.exports=T1("Array","slice")});var vf=i((aG,pf)=>{"use strict";var E1=U(),C1=ff(),Pi=Array.prototype;pf.exports=function(e){var r=e.slice;return e===Pi||E1(Pi,e)&&r===Pi.slice?C1:r}});var mf=i((iG,df)=>{"use strict";var O1=vf();df.exports=O1});var yf=i((oG,hf)=>{"use strict";var k1=mf();hf.exports=k1});var gf=i((uG,bf)=>{"use strict";var I1=yf();bf.exports=I1});var Ri=i((sG,qf)=>{"use strict";qf.exports=gf()});var Hr=i((cG,xf)=>{xf.exports=Ri()});var Je=i((lG,wf)=>{"use strict";var _1=ht(),P1=String;wf.exports=function(e){if(_1(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return P1(e)}});var Cf=i((fG,Ef)=>{"use strict";var Ai=A(),R1=kn(),A1=Je(),N1=lr(),M1=Ai("".charAt),Sf=Ai("".charCodeAt),j1=Ai("".slice),Tf=function(e){return function(r,t){var n=A1(N1(r)),a=R1(t),o=n.length,u,c;return a<0||a>=o?e?"":void 0:(u=Sf(n,a),u<55296||u>56319||a+1===o||(c=Sf(n,a+1))<56320||c>57343?e?M1(n,a):u:e?j1(n,a,a+2):(u-55296<<10)+(c-56320)+65536)}};Ef.exports={codeAt:Tf(!1),charAt:Tf(!0)}});var If=i((pG,kf)=>{"use strict";var L1=P(),$1=N(),Of=L1.WeakMap;kf.exports=$1(Of)&&/native code/.test(String(Of))});var qt=i((vG,Pf)=>{"use strict";var F1=pr(),D1=$r(),_f=F1("keys");Pf.exports=function(e){return _f[e]||(_f[e]=D1(e))}});var Wr=i((dG,Rf)=>{"use strict";Rf.exports={}});var Qe=i((mG,Mf)=>{"use strict";var B1=If(),Nf=P(),G1=L(),U1=Te(),Ni=K(),Mi=pt(),H1=qt(),W1=Wr(),Af="Object already initialized",ji=Nf.TypeError,K1=Nf.WeakMap,In,xt,_n,z1=function(e){return _n(e)?xt(e):In(e,{})},V1=function(e){return function(r){var t;if(!G1(r)||(t=xt(r)).type!==e)throw new ji("Incompatible receiver, "+e+" required");return t}};B1||Mi.state?(ye=Mi.state||(Mi.state=new K1),ye.get=ye.get,ye.has=ye.has,ye.set=ye.set,In=function(e,r){if(ye.has(e))throw new ji(Af);return r.facade=e,ye.set(e,r),r},xt=function(e){return ye.get(e)||{}},_n=function(e){return ye.has(e)}):(dr=H1("state"),W1[dr]=!0,In=function(e,r){if(Ni(e,dr))throw new ji(Af);return r.facade=e,U1(e,dr,r),r},xt=function(e){return Ni(e,dr)?e[dr]:{}},_n=function(e){return Ni(e,dr)});var ye,dr;Mf.exports={set:In,get:xt,has:_n,enforce:z1,getterFor:V1}});var $f=i((hG,Lf)=>{"use strict";var Li=H(),Y1=K(),jf=Function.prototype,J1=Li&&Object.getOwnPropertyDescriptor,$i=Y1(jf,"name"),Q1=$i&&function(){}.name==="something",X1=$i&&(!Li||Li&&J1(jf,"name").configurable);Lf.exports={EXISTS:$i,PROPER:Q1,CONFIGURABLE:X1}});var Fi=i((yG,Df)=>{"use strict";var Z1=Pe(),eI=ki(),rI=fe(),Ff=function(e){return function(r,t,n){var a=Z1(r),o=rI(a);if(o===0)return!e&&-1;var u=eI(n,o),c;if(e&&t!==t){for(;o>u;)if(c=a[u++],c!==c)return!0}else for(;o>u;u++)if((e||u in a)&&a[u]===t)return e||u||0;return!e&&-1}};Df.exports={includes:Ff(!0),indexOf:Ff(!1)}});var Bi=i((bG,Gf)=>{"use strict";var tI=A(),Di=K(),nI=Pe(),aI=Fi().indexOf,iI=Wr(),Bf=tI([].push);Gf.exports=function(e,r){var t=nI(e),n=0,a=[],o;for(o in t)!Di(iI,o)&&Di(t,o)&&Bf(a,o);for(;r.length>n;)Di(t,o=r[n++])&&(~aI(a,o)||Bf(a,o));return a}});var Pn=i((gG,Uf)=>{"use strict";Uf.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var Rn=i((qG,Hf)=>{"use strict";var oI=Bi(),uI=Pn();Hf.exports=Object.keys||function(r){return oI(r,uI)}});var Gi=i(Wf=>{"use strict";var sI=H(),cI=qi(),lI=te(),fI=X(),pI=Pe(),vI=Rn();Wf.f=sI&&!cI?Object.defineProperties:function(r,t){fI(r);for(var n=pI(t),a=vI(t),o=a.length,u=0,c;o>u;)lI.f(r,c=a[u++],n[c]);return r}});var Ui=i((wG,Kf)=>{"use strict";var dI=W();Kf.exports=dI("document","documentElement")});var Xe=i((SG,Zf)=>{"use strict";var mI=X(),hI=Gi(),zf=Pn(),yI=Wr(),bI=Ui(),gI=Tn(),qI=qt(),Vf=">",Yf="<",Wi="prototype",Ki="script",Qf=qI("IE_PROTO"),Hi=function(){},Xf=function(e){return Yf+Ki+Vf+e+Yf+"/"+Ki+Vf},Jf=function(e){e.write(Xf("")),e.close();var r=e.parentWindow.Object;return e=null,r},xI=function(){var e=gI("iframe"),r="java"+Ki+":",t;return e.style.display="none",bI.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(Xf("document.F=Object")),t.close(),t.F},An,Nn=function(){try{An=new ActiveXObject("htmlfile")}catch{}Nn=typeof document<"u"?document.domain&&An?Jf(An):xI():Jf(An);for(var e=zf.length;e--;)delete Nn[Wi][zf[e]];return Nn()};yI[Qf]=!0;Zf.exports=Object.create||function(r,t){var n;return r!==null?(Hi[Wi]=mI(r),n=new Hi,Hi[Wi]=null,n[Qf]=r):n=Nn(),t===void 0?n:hI.f(n,t)}});var zi=i((TG,ep)=>{"use strict";var wI=_();ep.exports=!wI(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var wt=i((EG,tp)=>{"use strict";var SI=K(),TI=N(),EI=re(),CI=qt(),OI=zi(),rp=CI("IE_PROTO"),Vi=Object,kI=Vi.prototype;tp.exports=OI?Vi.getPrototypeOf:function(e){var r=EI(e);if(SI(r,rp))return r[rp];var t=r.constructor;return TI(t)&&r instanceof t?t.prototype:r instanceof Vi?kI:null}});var Ae=i((CG,np)=>{"use strict";var II=Te();np.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:II(e,r,t),e}});var Xi=i((OG,op)=>{"use strict";var _I=_(),PI=N(),RI=L(),AI=Xe(),ap=wt(),NI=Ae(),MI=R(),jI=Z(),Qi=MI("iterator"),ip=!1,Ne,Yi,Ji;[].keys&&(Ji=[].keys(),"next"in Ji?(Yi=ap(ap(Ji)),Yi!==Object.prototype&&(Ne=Yi)):ip=!0);var LI=!RI(Ne)||_I(function(){var e={};return Ne[Qi].call(e)!==e});LI?Ne={}:jI&&(Ne=AI(Ne));PI(Ne[Qi])||NI(Ne,Qi,function(){return this});op.exports={IteratorPrototype:Ne,BUGGY_SAFARI_ITERATORS:ip}});var sp=i((kG,up)=>{"use strict";var $I=Cn(),FI=ht();up.exports=$I?{}.toString:function(){return"[object "+FI(this)+"]"}});var Me=i((IG,lp)=>{"use strict";var DI=Cn(),BI=te().f,GI=Te(),UI=K(),HI=sp(),WI=R(),cp=WI("toStringTag");lp.exports=function(e,r,t,n){var a=t?e:e&&e.prototype;a&&(UI(a,cp)||BI(a,cp,{configurable:!0,value:r}),n&&!DI&&GI(a,"toString",HI))}});var mr=i((_G,fp)=>{"use strict";fp.exports={}});var vp=i((PG,pp)=>{"use strict";var KI=Xi().IteratorPrototype,zI=Xe(),VI=Ve(),YI=Me(),JI=mr(),QI=function(){return this};pp.exports=function(e,r,t,n){var a=r+" Iterator";return e.prototype=zI(KI,{next:VI(+!n,t)}),YI(e,a,!1,!0),JI[a]=QI,e}});var mp=i((RG,dp)=>{"use strict";var XI=A(),ZI=D();dp.exports=function(e,r,t){try{return XI(ZI(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var yp=i((AG,hp)=>{"use strict";var e_=L();hp.exports=function(e){return e_(e)||e===null}});var gp=i((NG,bp)=>{"use strict";var r_=yp(),t_=String,n_=TypeError;bp.exports=function(e){if(r_(e))return e;throw new n_("Can't set "+t_(e)+" as a prototype")}});var St=i((MG,qp)=>{"use strict";var a_=mp(),i_=L(),o_=lr(),u_=gp();qp.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=a_(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(a,o){return o_(a),u_(o),i_(a)&&(e?t(a,o):a.__proto__=o),a}}():void 0)});var Ln=i((jG,_p)=>{"use strict";var s_=q(),c_=G(),Mn=Z(),kp=$f(),l_=N(),f_=vp(),xp=wt(),wp=St(),p_=Me(),v_=Te(),Zi=Ae(),d_=R(),Sp=mr(),Ip=Xi(),m_=kp.PROPER,h_=kp.CONFIGURABLE,Tp=Ip.IteratorPrototype,jn=Ip.BUGGY_SAFARI_ITERATORS,Tt=d_("iterator"),Ep="keys",Et="values",Cp="entries",Op=function(){return this};_p.exports=function(e,r,t,n,a,o,u){f_(t,r,n);var c=function(y){if(y===a&&p)return p;if(!jn&&y&&y in f)return f[y];switch(y){case Ep:return function(){return new t(this,y)};case Et:return function(){return new t(this,y)};case Cp:return function(){return new t(this,y)}}return function(){return new t(this)}},s=r+" Iterator",l=!1,f=e.prototype,v=f[Tt]||f["@@iterator"]||a&&f[a],p=!jn&&v||c(a),d=r==="Array"&&f.entries||v,h,m,x;if(d&&(h=xp(d.call(new e)),h!==Object.prototype&&h.next&&(!Mn&&xp(h)!==Tp&&(wp?wp(h,Tp):l_(h[Tt])||Zi(h,Tt,Op)),p_(h,s,!0,!0),Mn&&(Sp[s]=Op))),m_&&a===Et&&v&&v.name!==Et&&(!Mn&&h_?v_(f,"name",Et):(l=!0,p=function(){return c_(v,this)})),a)if(m={values:c(Et),keys:o?p:c(Ep),entries:c(Cp)},u)for(x in m)(jn||l||!(x in f))&&Zi(f,x,m[x]);else s_({target:r,proto:!0,forced:jn||l},m);return(!Mn||u)&&f[Tt]!==p&&Zi(f,Tt,p,{name:a}),Sp[r]=p,m}});var $n=i((LG,Pp)=>{"use strict";Pp.exports=function(e,r){return{value:e,done:r}}});var hr=i(()=>{"use strict";var y_=Cf().charAt,b_=Je(),Ap=Qe(),g_=Ln(),Rp=$n(),Np="String Iterator",q_=Ap.set,x_=Ap.getterFor(Np);g_(String,"String",function(e){q_(this,{type:Np,string:b_(e),index:0})},function(){var r=x_(this),t=r.string,n=r.index,a;return n>=t.length?Rp(void 0,!0):(a=y_(t,n),r.index+=a.length,Rp(a,!1))})});var eo=i((DG,jp)=>{"use strict";var w_=G(),Mp=X(),S_=wn();jp.exports=function(e,r,t){var n,a;Mp(e);try{if(n=S_(e,"return"),!n){if(r==="throw")throw t;return t}n=w_(n,e)}catch(o){a=!0,n=o}if(r==="throw")throw t;if(a)throw n;return Mp(n),t}});var $p=i((BG,Lp)=>{"use strict";var T_=X(),E_=eo();Lp.exports=function(e,r,t,n){try{return n?r(T_(t)[0],t[1]):r(t)}catch(a){E_(e,"throw",a)}}});var ro=i((GG,Fp)=>{"use strict";var C_=R(),O_=mr(),k_=C_("iterator"),I_=Array.prototype;Fp.exports=function(e){return e!==void 0&&(O_.Array===e||I_[k_]===e)}});var Ct=i((UG,Bp)=>{"use strict";var __=ht(),Dp=wn(),P_=cr(),R_=mr(),A_=R(),N_=A_("iterator");Bp.exports=function(e){if(!P_(e))return Dp(e,N_)||Dp(e,"@@iterator")||R_[__(e)]}});var Fn=i((HG,Gp)=>{"use strict";var M_=G(),j_=D(),L_=X(),$_=Ye(),F_=Ct(),D_=TypeError;Gp.exports=function(e,r){var t=arguments.length<2?F_(e):r;if(j_(t))return L_(M_(t,e));throw new D_($_(e)+" is not iterable")}});var Kp=i((WG,Wp)=>{"use strict";var B_=Y(),G_=G(),U_=re(),H_=$p(),W_=ro(),K_=bt(),z_=fe(),Up=Gr(),V_=Ur(),Y_=Fn(),J_=Ct(),Hp=Array;Wp.exports=function(r){var t=U_(r),n=K_(this),a=arguments.length,o=a>1?arguments[1]:void 0,u=o!==void 0;u&&(o=B_(o,a>2?arguments[2]:void 0));var c=J_(t),s=0,l,f,v,p,d,h;if(c&&!(this===Hp&&W_(c)))for(f=n?new this:[],p=Y_(t,c),d=p.next;!(v=G_(d,p)).done;s++)h=u?H_(p,o,[v.value,s],!0):v.value,Up(f,s,h);else for(l=z_(t),f=n?new this(l):Hp(l);l>s;s++)h=u?o(t[s],s):t[s],Up(f,s,h);return V_(f,s),f}});var no=i((KG,Jp)=>{"use strict";var Q_=R(),Vp=Q_("iterator"),Yp=!1;try{zp=0,to={next:function(){return{done:!!zp++}},return:function(){Yp=!0}},to[Vp]=function(){return this},Array.from(to,function(){throw 2})}catch{}var zp,to;Jp.exports=function(e,r){try{if(!r&&!Yp)return!1}catch{return!1}var t=!1;try{var n={};n[Vp]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var Qp=i(()=>{"use strict";var X_=q(),Z_=Kp(),eP=no(),rP=!eP(function(e){Array.from(e)});X_({target:"Array",stat:!0,forced:rP},{from:Z_})});var Zp=i((YG,Xp)=>{"use strict";hr();Qp();var tP=V();Xp.exports=tP.Array.from});var rv=i((JG,ev)=>{"use strict";var nP=Zp();ev.exports=nP});var nv=i((QG,tv)=>{"use strict";var aP=rv();tv.exports=aP});var iv=i((XG,av)=>{"use strict";var iP=nv();av.exports=iP});var ao=i((ZG,ov)=>{"use strict";ov.exports=iv()});var Dn=i((eU,uv)=>{uv.exports=ao()});var Ot=i((rU,sv)=>{"use strict";var oP=TypeError,uP=9007199254740991;sv.exports=function(e){if(e>uP)throw oP("Maximum allowed index exceeded");return e}});var pv=i((tU,fv)=>{"use strict";var cv=Re(),sP=bt(),cP=L(),lP=R(),fP=lP("species"),lv=Array;fv.exports=function(e){var r;return cv(e)&&(r=e.constructor,sP(r)&&(r===lv||cv(r.prototype))?r=void 0:cP(r)&&(r=r[fP],r===null&&(r=void 0))),r===void 0?lv:r}});var Bn=i((nU,vv)=>{"use strict";var pP=pv();vv.exports=function(e,r){return new(pP(e))(r===0?0:r)}});var io=i(()=>{"use strict";var vP=q(),dP=_(),mP=Re(),hP=L(),yP=re(),bP=fe(),dv=Ot(),mv=Gr(),gP=Ur(),qP=Bn(),xP=gt(),wP=R(),SP=jr(),hv=wP("isConcatSpreadable"),TP=SP>=51||!dP(function(){var e=[];return e[hv]=!1,e.concat()[0]!==e}),EP=function(e){if(!hP(e))return!1;var r=e[hv];return r!==void 0?!!r:mP(e)},CP=!TP||!xP("concat");vP({target:"Array",proto:!0,arity:1,forced:CP},{concat:function(r){var t=yP(this),n=qP(t,0),a=0,o,u,c,s,l;for(o=-1,c=arguments.length;o<c;o++)if(l=o===-1?t:arguments[o],EP(l))for(s=bP(l),dv(a+s),u=0;u<s;u++,a++)u in l&&mv(n,a,l[u]);else dv(a+1),mv(n,a++,l);return gP(n,a),n}})});var kt=i(()=>{});var It=i(yv=>{"use strict";var OP=Bi(),kP=Pn(),IP=kP.concat("length","prototype");yv.f=Object.getOwnPropertyNames||function(r){return OP(r,IP)}});var oo=i((cU,qv)=>{"use strict";var _P=Se(),PP=Pe(),bv=It().f,RP=vr(),gv=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],AP=function(e){try{return bv(e)}catch{return RP(gv)}};qv.exports.f=function(r){return gv&&_P(r)==="Window"?AP(r):bv(PP(r))}});var Gn=i(xv=>{"use strict";xv.f=Object.getOwnPropertySymbols});var Un=i((fU,wv)=>{"use strict";var NP=te();wv.exports=function(e,r,t){return NP.f(e,r,t)}});var Kr=i(Sv=>{"use strict";var MP=R();Sv.f=MP});var M=i((vU,Ev)=>{"use strict";var Tv=V(),jP=K(),LP=Kr(),$P=te().f;Ev.exports=function(e){var r=Tv.Symbol||(Tv.Symbol={});jP(r,e)||$P(r,e,{value:LP.f(e)})}});var uo=i((dU,Cv)=>{"use strict";var FP=G(),DP=W(),BP=R(),GP=Ae();Cv.exports=function(){var e=DP("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=BP("toPrimitive");r&&!r[n]&&GP(r,n,function(a){return FP(t,this)},{arity:1})}});var _t=i((mU,kv)=>{"use strict";var UP=Y(),HP=qn(),WP=re(),KP=fe(),Ov=Bn(),so=Gr(),Ze=function(e){var r=e===1,t=e===2,n=e===3,a=e===4,o=e===6,u=e===7,c=e===5||o;return function(s,l,f){for(var v=WP(s),p=HP(v),d=KP(p),h=UP(l,f),m=0,x=0,y=r?Ov(s,d):t||u?Ov(s,0):void 0,g,O;d>m;m++)if((c||m in p)&&(g=p[m],O=h(g,m,v),e))if(r)so(y,m,O);else if(O)switch(e){case 3:return!0;case 5:return g;case 6:return m;case 2:so(y,x++,g)}else switch(e){case 4:return!1;case 7:so(y,x++,g)}return o?-1:n||a?a:y}};kv.exports={forEach:Ze(0),map:Ze(1),filter:Ze(2),some:Ze(3),every:Ze(4),find:Ze(5),findIndex:Ze(6),filterReject:Ze(7)}});var Wv=i(()=>{"use strict";var Hn=q(),At=P(),bo=G(),zP=A(),VP=Z(),zr=H(),Vr=fr(),YP=_(),z=K(),JP=U(),po=X(),Wn=Pe(),go=Sn(),QP=Je(),vo=Ve(),Yr=Xe(),Pv=Rn(),XP=It(),Rv=oo(),ZP=Gn(),Av=vt(),Nv=te(),eR=Gi(),Mv=ui(),co=Ae(),rR=Un(),qo=pr(),tR=qt(),jv=Wr(),Iv=$r(),nR=R(),aR=Kr(),iR=M(),oR=uo(),uR=Me(),Lv=Qe(),Kn=_t().forEach,ne=tR("hidden"),zn="Symbol",Rt="prototype",sR=Lv.set,_v=Lv.getterFor(zn),pe=Object[Rt],yr=At.Symbol,Pt=yr&&yr[Rt],cR=At.RangeError,lR=At.TypeError,lo=At.QObject,$v=Av.f,br=Nv.f,Fv=Rv.f,fR=Mv.f,Dv=zP([].push),je=qo("symbols"),Nt=qo("op-symbols"),pR=qo("wks"),mo=!lo||!lo[Rt]||!lo[Rt].findChild,Bv=function(e,r,t){var n=$v(pe,r);n&&delete pe[r],br(e,r,t),n&&e!==pe&&br(pe,r,n)},ho=zr&&YP(function(){return Yr(br({},"a",{get:function(){return br(this,"a",{value:7}).a}})).a!==7})?Bv:br,fo=function(e,r){var t=je[e]=Yr(Pt);return sR(t,{type:zn,tag:e,description:r}),zr||(t.description=r),t},Vn=function(r,t,n){r===pe&&Vn(Nt,t,n),po(r);var a=go(t);return po(n),z(je,a)?(n.enumerable?(z(r,ne)&&r[ne][a]&&(r[ne][a]=!1),n=Yr(n,{enumerable:vo(0,!1)})):(z(r,ne)||br(r,ne,vo(1,Yr(null))),r[ne][a]=!0),ho(r,a,n)):br(r,a,n)},xo=function(r,t){po(r);var n=Wn(t),a=Pv(n).concat(Hv(n));return Kn(a,function(o){(!zr||bo(yo,n,o))&&Vn(r,o,n[o])}),r},vR=function(r,t){return t===void 0?Yr(r):xo(Yr(r),t)},yo=function(r){var t=go(r),n=bo(fR,this,t);return this===pe&&z(je,t)&&!z(Nt,t)?!1:n||!z(this,t)||!z(je,t)||z(this,ne)&&this[ne][t]?n:!0},Gv=function(r,t){var n=Wn(r),a=go(t);if(!(n===pe&&z(je,a)&&!z(Nt,a))){var o=$v(n,a);return o&&z(je,a)&&!(z(n,ne)&&n[ne][a])&&(o.enumerable=!0),o}},Uv=function(r){var t=Fv(Wn(r)),n=[];return Kn(t,function(a){!z(je,a)&&!z(jv,a)&&Dv(n,a)}),n},Hv=function(e){var r=e===pe,t=Fv(r?Nt:Wn(e)),n=[];return Kn(t,function(a){z(je,a)&&(!r||z(pe,a))&&Dv(n,je[a])}),n};Vr||(yr=function(){if(JP(Pt,this))throw new lR("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:QP(arguments[0]),t=Iv(r),n=function(a){var o=this===void 0?At:this;o===pe&&bo(n,Nt,a),z(o,ne)&&z(o[ne],t)&&(o[ne][t]=!1);var u=vo(1,a);try{ho(o,t,u)}catch(c){if(!(c instanceof cR))throw c;Bv(o,t,u)}};return zr&&mo&&ho(pe,t,{configurable:!0,set:n}),fo(t,r)},Pt=yr[Rt],co(Pt,"toString",function(){return _v(this).tag}),co(yr,"withoutSetter",function(e){return fo(Iv(e),e)}),Mv.f=yo,Nv.f=Vn,eR.f=xo,Av.f=Gv,XP.f=Rv.f=Uv,ZP.f=Hv,aR.f=function(e){return fo(nR(e),e)},zr&&(rR(Pt,"description",{configurable:!0,get:function(){return _v(this).description}}),VP||co(pe,"propertyIsEnumerable",yo,{unsafe:!0})));Hn({global:!0,constructor:!0,wrap:!0,forced:!Vr,sham:!Vr},{Symbol:yr});Kn(Pv(pR),function(e){iR(e)});Hn({target:zn,stat:!0,forced:!Vr},{useSetter:function(){mo=!0},useSimple:function(){mo=!1}});Hn({target:"Object",stat:!0,forced:!Vr,sham:!zr},{create:vR,defineProperty:Vn,defineProperties:xo,getOwnPropertyDescriptor:Gv});Hn({target:"Object",stat:!0,forced:!Vr},{getOwnPropertyNames:Uv});oR();uR(yr,zn);jv[ne]=!0});var wo=i((bU,Kv)=>{"use strict";var dR=fr();Kv.exports=dR&&!!Symbol.for&&!!Symbol.keyFor});var Vv=i(()=>{"use strict";var mR=q(),hR=W(),yR=K(),bR=Je(),zv=pr(),gR=wo(),So=zv("string-to-symbol-registry"),qR=zv("symbol-to-string-registry");mR({target:"Symbol",stat:!0,forced:!gR},{for:function(e){var r=bR(e);if(yR(So,r))return So[r];var t=hR("Symbol")(r);return So[r]=t,qR[t]=r,t}})});var Jv=i(()=>{"use strict";var xR=q(),wR=K(),SR=Lr(),TR=Ye(),ER=pr(),CR=wo(),Yv=ER("symbol-to-string-registry");xR({target:"Symbol",stat:!0,forced:!CR},{keyFor:function(r){if(!SR(r))throw new TypeError(TR(r)+" is not a symbol");if(wR(Yv,r))return Yv[r]}})});var Xv=i((SU,Qv)=>{"use strict";var OR=L(),kR=Qe().get;Qv.exports=function(r){if(!OR(r))return!1;var t=kR(r);return!!t&&t.type==="RawJSON"}});var nd=i((TU,td)=>{"use strict";var To=A(),IR=K(),Yn=SyntaxError,_R=parseInt,PR=String.fromCharCode,RR=To("".charAt),Zv=To("".slice),ed=To(/./.exec),rd={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},AR=/^[\da-f]{4}$/i,NR=/^[\u0000-\u001F]$/;td.exports=function(e,r){for(var t=!0,n="";r<e.length;){var a=RR(e,r);if(a==="\\"){var o=Zv(e,r,r+2);if(IR(rd,o))n+=rd[o],r+=2;else if(o==="\\u"){r+=2;var u=Zv(e,r,r+4);if(!ed(AR,u))throw new Yn("Bad Unicode escape at: "+r);n+=PR(_R(u,16)),r+=4}else throw new Yn('Unknown escape sequence: "'+o+'"')}else if(a==='"'){t=!1,r++;break}else{if(ed(NR,a))throw new Yn("Bad control character in string literal at: "+r);n+=a,r++}}if(t)throw new Yn("Unterminated string at: "+r);return{value:n,end:r}}});var id=i((EU,ad)=>{"use strict";var MR=_();ad.exports=!MR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var gd=i(()=>{"use strict";var jR=q(),vd=W(),LR=Nr(),dd=G(),gr=A(),md=_(),od=Re(),Qn=N(),$R=Xv(),ud=Lr(),sd=Se(),FR=Je(),DR=vr(),BR=nd(),GR=$r(),UR=fr(),Eo=id(),hd=String,er=vd("JSON","stringify"),Jn=gr(/./.exec),Oo=gr("".charAt),HR=gr("".charCodeAt),WR=gr("".replace),Co=gr("".slice),ko=gr([].push),KR=gr(1.1.toString),zR=/[\uD800-\uDFFF]/g,cd=/^[\uD800-\uDBFF]$/,ld=/^[\uDC00-\uDFFF]$/,Io=GR(),fd=Io.length,yd=!UR||md(function(){var e=vd("Symbol")("stringify detection");return er([e])!=="[null]"||er({a:e})!=="{}"||er(Object(e))!=="{}"}),pd=md(function(){return er("\uDF06\uD834")!=='"\\udf06\\ud834"'||er("\uDEAD")!=='"\\udead"'}),VR=yd?function(e,r){var t=DR(arguments),n=bd(r);if(!(!Qn(n)&&(e===void 0||ud(e))))return t[1]=function(a,o){if(Qn(n)&&(o=dd(n,this,hd(a),o)),!ud(o))return o},LR(er,null,t)}:er,YR=function(e,r,t){var n=Oo(t,r-1),a=Oo(t,r+1);return Jn(cd,e)&&!Jn(ld,a)||Jn(ld,e)&&!Jn(cd,n)?"\\u"+KR(HR(e,0),16):e},bd=function(e){if(Qn(e))return e;if(od(e)){for(var r=e.length,t=[],n=0;n<r;n++){var a=e[n];typeof a=="string"?ko(t,a):(typeof a=="number"||sd(a)==="Number"||sd(a)==="String")&&ko(t,FR(a))}var o=t.length,u=!0;return function(c,s){if(u)return u=!1,s;if(od(this))return s;for(var l=0;l<o;l++)if(t[l]===c)return s}}};er&&jR({target:"JSON",stat:!0,arity:3,forced:yd||pd||!Eo},{stringify:function(r,t,n){var a=bd(t),o=[],u=VR(r,function(d,h){var m=Qn(a)?dd(a,this,hd(d),h):h;return!Eo&&$R(m)?Io+(ko(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(pd&&(u=WR(u,zR,YR)),Eo))return u;for(var c="",s=u.length,l=0;l<s;l++){var f=Oo(u,l);if(f==='"'){var v=BR(u,++l).end-1,p=Co(u,l,v);c+=Co(p,0,fd)===Io?o[Co(p,fd)]:'"'+p+'"',l=v}else c+=f}return c}})});var xd=i(()=>{"use strict";var JR=q(),QR=fr(),XR=_(),qd=Gn(),ZR=re(),eA=!QR||XR(function(){qd.f(1)});JR({target:"Object",stat:!0,forced:eA},{getOwnPropertySymbols:function(r){var t=qd.f;return t?t(ZR(r)):[]}})});var wd=i(()=>{"use strict";Wv();Vv();Jv();gd();xd()});var _o=i(()=>{"use strict";var rA=M();rA("asyncDispose")});var Po=i(()=>{"use strict";var tA=M();tA("asyncIterator")});var Sd=i(()=>{});var Ro=i(()=>{"use strict";var nA=M();nA("dispose")});var Td=i(()=>{"use strict";var aA=M();aA("hasInstance")});var Ed=i(()=>{"use strict";var iA=M();iA("isConcatSpreadable")});var Ao=i(()=>{"use strict";var oA=M();oA("iterator")});var Cd=i(()=>{"use strict";var uA=M();uA("match")});var Od=i(()=>{"use strict";var sA=M();sA("matchAll")});var kd=i(()=>{"use strict";var cA=M();cA("replace")});var Id=i(()=>{"use strict";var lA=M();lA("search")});var _d=i(()=>{"use strict";var fA=M();fA("species")});var Pd=i(()=>{"use strict";var pA=M();pA("split")});var No=i(()=>{"use strict";var vA=M(),dA=uo();vA("toPrimitive");dA()});var Rd=i(()=>{"use strict";var mA=W(),hA=M(),yA=Me();hA("toStringTag");yA(mA("Symbol"),"Symbol")});var Ad=i(()=>{"use strict";var bA=M();bA("unscopables")});var Nd=i(()=>{"use strict";var gA=P(),qA=Me();qA(gA.JSON,"JSON",!0)});var Md=i(()=>{});var jd=i(()=>{});var $d=i((hH,Ld)=>{"use strict";io();kt();wd();_o();Po();Sd();Ro();Td();Ed();Ao();Cd();Od();kd();Id();_d();Pd();No();Rd();Ad();Nd();Md();jd();var xA=V();Ld.exports=xA.Symbol});var Mo=i((yH,Fd)=>{"use strict";Fd.exports=function(){}});var qr=i((bH,Hd)=>{"use strict";var wA=Pe(),jo=Mo(),Dd=mr(),Gd=Qe(),SA=te().f,TA=Ln(),Xn=$n(),EA=Z(),CA=H(),Ud="Array Iterator",OA=Gd.set,kA=Gd.getterFor(Ud);Hd.exports=TA(Array,"Array",function(e,r){OA(this,{type:Ud,target:wA(e),index:0,kind:r})},function(){var e=kA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,Xn(void 0,!0);switch(e.kind){case"keys":return Xn(t,!1);case"values":return Xn(r[t],!1)}return Xn([t,r[t]],!1)},"values");var Bd=Dd.Arguments=Dd.Array;jo("keys");jo("values");jo("entries");if(!EA&&CA&&Bd.name!=="values")try{SA(Bd,"name",{value:"values"})}catch{}});var Kd=i((gH,Wd)=>{"use strict";Wd.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var xr=i(()=>{"use strict";qr();var IA=Kd(),_A=P(),PA=Me(),zd=mr();for(Zn in IA)PA(_A[Zn],Zn),zd[Zn]=zd.Array;var Zn});var Yd=i((wH,Vd)=>{"use strict";var RA=$d();xr();Vd.exports=RA});var Xd=i(()=>{"use strict";var AA=R(),NA=te().f,Jd=AA("metadata"),Qd=Function.prototype;Qd[Jd]===void 0&&NA(Qd,Jd,{value:null})});var Zd=i(()=>{"use strict";_o()});var em=i(()=>{"use strict";Ro()});var rm=i(()=>{"use strict";var MA=M();MA("metadata")});var nm=i((PH,tm)=>{"use strict";var jA=Yd();Xd();Zd();em();rm();tm.exports=jA});var $o=i((RH,am)=>{"use strict";var LA=W(),$A=A(),Lo=LA("Symbol"),FA=Lo.keyFor,DA=$A(Lo.prototype.valueOf);am.exports=Lo.isRegisteredSymbol||function(r){try{return FA(DA(r))!==void 0}catch{return!1}}});var im=i(()=>{"use strict";var BA=q(),GA=$o();BA({target:"Symbol",stat:!0},{isRegisteredSymbol:GA})});var Bo=i((MH,fm)=>{"use strict";var UA=pr(),cm=W(),HA=A(),WA=Lr(),KA=R(),ra=cm("Symbol"),om=ra.isWellKnownSymbol,lm=cm("Object","getOwnPropertyNames"),zA=HA(ra.prototype.valueOf),um=UA("wks");for(ea=0,Fo=lm(ra),sm=Fo.length;ea<sm;ea++)try{Do=Fo[ea],WA(ra[Do])&&KA(Do)}catch{}var Do,ea,Fo,sm;fm.exports=function(r){if(om&&om(r))return!0;try{for(var t=zA(r),n=0,a=lm(um),o=a.length;n<o;n++)if(um[a[n]]==t)return!0}catch{}return!1}});var pm=i(()=>{"use strict";var VA=q(),YA=Bo();VA({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:YA})});var vm=i(()=>{"use strict";var JA=M();JA("customMatcher")});var dm=i(()=>{"use strict";var QA=M();QA("observable")});var mm=i(()=>{"use strict";var XA=q(),ZA=$o();XA({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:ZA})});var hm=i(()=>{"use strict";var e2=q(),r2=Bo();e2({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:r2})});var ym=i(()=>{"use strict";var t2=M();t2("matcher")});var bm=i(()=>{"use strict";var n2=M();n2("metadataKey")});var gm=i(()=>{"use strict";var a2=M();a2("patternMatch")});var qm=i(()=>{"use strict";var i2=M();i2("replaceAll")});var wm=i((eW,xm)=>{"use strict";var o2=nm();im();pm();vm();dm();mm();hm();ym();bm();gm();qm();xm.exports=o2});var Ee=i((rW,Sm)=>{"use strict";Sm.exports=wm()});var ta=i((tW,Tm)=>{Tm.exports=Ee()});var Cm=i((nW,Em)=>{"use strict";qr();hr();var u2=Ct();Em.exports=u2});var km=i((aW,Om)=>{"use strict";var s2=Cm();xr();Om.exports=s2});var _m=i((iW,Im)=>{"use strict";var c2=km();Im.exports=c2});var Rm=i((oW,Pm)=>{"use strict";var l2=_m();Pm.exports=l2});var Go=i((uW,Am)=>{"use strict";Am.exports=Rm()});var na=i((sW,Nm)=>{Nm.exports=Go()});var jm=i((cW,Mm)=>{"use strict";qr();hr();var f2=Fn();Mm.exports=f2});var $m=i((lW,Lm)=>{"use strict";var p2=jm();xr();Lm.exports=p2});var Dm=i((fW,Fm)=>{"use strict";var v2=$m();Fm.exports=v2});var Gm=i((pW,Bm)=>{"use strict";var d2=Dm();Bm.exports=d2});var Hm=i((vW,Um)=>{"use strict";Um.exports=Gm()});var aa=i((dW,Wm)=>{Wm.exports=Hm()});var zm=i((mW,Km)=>{"use strict";var m2=W(),h2=A(),y2=It(),b2=Gn(),g2=X(),q2=h2([].concat);Km.exports=m2("Reflect","ownKeys")||function(r){var t=y2.f(g2(r)),n=b2.f;return n?q2(t,n(r)):t}});var Jm=i((hW,Ym)=>{"use strict";var Vm=K(),x2=zm(),w2=vt(),S2=te();Ym.exports=function(e,r,t){for(var n=x2(r),a=S2.f,o=w2.f,u=0;u<n.length;u++){var c=n[u];!Vm(e,c)&&!(t&&Vm(t,c))&&a(e,c,o(r,c))}}});var Xm=i((yW,Qm)=>{"use strict";var T2=L(),E2=Te();Qm.exports=function(e,r){T2(r)&&"cause"in r&&E2(e,"cause",r.cause)}});var th=i((bW,rh)=>{"use strict";var C2=A(),Zm=Error,O2=C2("".replace),k2=function(e){return String(new Zm(e).stack)}("zxcasd"),eh=/\n\s*at [^:]*:[^\n]*/,I2=eh.test(k2);rh.exports=function(e,r){if(I2&&typeof e=="string"&&!Zm.prepareStackTrace)for(;r--;)e=O2(e,eh,"");return e}});var ah=i((gW,nh)=>{"use strict";var _2=_(),P2=Ve();nh.exports=!_2(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",P2(1,7)),e.stack!==7):!0})});var uh=i((qW,oh)=>{"use strict";var R2=Te(),A2=th(),N2=ah(),ih=Error.captureStackTrace;oh.exports=function(e,r,t,n){N2&&(ih?ih(e,r):R2(e,"stack",A2(t,n)))}});var ve=i((xW,fh)=>{"use strict";var M2=Y(),j2=G(),L2=X(),$2=Ye(),F2=ro(),D2=fe(),sh=U(),B2=Fn(),G2=Ct(),ch=eo(),U2=TypeError,ia=function(e,r){this.stopped=e,this.result=r},lh=ia.prototype;fh.exports=function(e,r,t){var n=t&&t.that,a=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),c=!!(t&&t.INTERRUPTED),s=M2(r,n),l,f,v,p,d,h,m,x=function(g){return l&&ch(l,"normal"),new ia(!0,g)},y=function(g){return a?(L2(g),c?s(g[0],g[1],x):s(g[0],g[1])):c?s(g,x):s(g)};if(o)l=e.iterator;else if(u)l=e;else{if(f=G2(e),!f)throw new U2($2(e)+" is not iterable");if(F2(f)){for(v=0,p=D2(e);p>v;v++)if(d=y(e[v]),d&&sh(lh,d))return d;return new ia(!1)}l=B2(e,f)}for(h=o?e.next:l.next;!(m=j2(h,l)).done;){try{d=y(m.value)}catch(g){ch(l,"throw",g)}if(typeof d=="object"&&d&&sh(lh,d))return d}return new ia(!1)}});var vh=i((wW,ph)=>{"use strict";var H2=Je();ph.exports=function(e,r){return e===void 0?arguments.length<2?"":r:H2(e)}});var mh=i(()=>{"use strict";var W2=q(),K2=U(),z2=wt(),oa=St(),V2=Jm(),dh=Xe(),Uo=Te(),Ho=Ve(),Y2=Xm(),J2=uh(),Q2=ve(),X2=vh(),Z2=R(),eN=Z2("toStringTag"),ua=Error,rN=[].push,Jr=function(r,t){var n=K2(Wo,this),a;oa?a=oa(new ua,n?z2(this):Wo):(a=n?this:dh(Wo),Uo(a,eN,"Error")),t!==void 0&&Uo(a,"message",X2(t)),J2(a,Jr,a.stack,1),arguments.length>2&&Y2(a,arguments[2]);var o=[];return Q2(r,rN,{that:o}),Uo(a,"errors",o),a};oa?oa(Jr,ua):V2(Jr,ua,{name:!0});var Wo=Jr.prototype=dh(ua.prototype,{constructor:Ho(1,Jr),message:Ho(1,""),name:Ho(1,"AggregateError")});W2({global:!0,constructor:!0,arity:2},{AggregateError:Jr})});var Ko=i(()=>{"use strict";mh()});var zo=i((OW,hh)=>{"use strict";var Mt=P(),tN=Mr(),nN=Se(),sa=function(e){return tN.slice(0,e.length)===e};hh.exports=function(){return sa("Bun/")?"BUN":sa("Cloudflare-Workers")?"CLOUDFLARE":sa("Deno/")?"DENO":sa("Node.js/")?"NODE":Mt.Bun&&typeof Bun.version=="string"?"BUN":Mt.Deno&&typeof Deno.version=="object"?"DENO":nN(Mt.process)==="process"?"NODE":Mt.window&&Mt.document?"BROWSER":"REST"}()});var jt=i((kW,yh)=>{"use strict";var aN=zo();yh.exports=aN==="NODE"});var Vo=i((IW,gh)=>{"use strict";var iN=W(),oN=Un(),uN=R(),sN=H(),bh=uN("species");gh.exports=function(e){var r=iN(e);sN&&r&&!r[bh]&&oN(r,bh,{configurable:!0,get:function(){return this}})}});var ca=i((_W,qh)=>{"use strict";var cN=U(),lN=TypeError;qh.exports=function(e,r){if(cN(r,e))return e;throw new lN("Incorrect invocation")}});var Yo=i((PW,xh)=>{"use strict";var fN=bt(),pN=Ye(),vN=TypeError;xh.exports=function(e){if(fN(e))return e;throw new vN(pN(e)+" is not a constructor")}});var Jo=i((RW,Sh)=>{"use strict";var wh=X(),dN=Yo(),mN=cr(),hN=R(),yN=hN("species");Sh.exports=function(e,r){var t=wh(e).constructor,n;return t===void 0||mN(n=wh(t)[yN])?r:dN(n)}});var Eh=i((AW,Th)=>{"use strict";var bN=TypeError;Th.exports=function(e,r){if(e<r)throw new bN("Not enough arguments");return e}});var Qo=i((NW,Ch)=>{"use strict";var gN=Mr();Ch.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(gN)});var ou=i((MW,Mh)=>{"use strict";var se=P(),qN=Nr(),xN=Y(),Oh=N(),wN=K(),Nh=_(),kh=Ui(),SN=vr(),Ih=Tn(),TN=Eh(),EN=Qo(),CN=jt(),nu=se.setImmediate,au=se.clearImmediate,ON=se.process,Xo=se.Dispatch,kN=se.Function,_h=se.MessageChannel,IN=se.String,Zo=0,Lt={},Ph="onreadystatechange",$t,wr,eu,ru;Nh(function(){$t=se.location});var iu=function(e){if(wN(Lt,e)){var r=Lt[e];delete Lt[e],r()}},tu=function(e){return function(){iu(e)}},Rh=function(e){iu(e.data)},Ah=function(e){se.postMessage(IN(e),$t.protocol+"//"+$t.host)};(!nu||!au)&&(nu=function(r){TN(arguments.length,1);var t=Oh(r)?r:kN(r),n=SN(arguments,1);return Lt[++Zo]=function(){qN(t,void 0,n)},wr(Zo),Zo},au=function(r){delete Lt[r]},CN?wr=function(e){ON.nextTick(tu(e))}:Xo&&Xo.now?wr=function(e){Xo.now(tu(e))}:_h&&!EN?(eu=new _h,ru=eu.port2,eu.port1.onmessage=Rh,wr=xN(ru.postMessage,ru)):se.addEventListener&&Oh(se.postMessage)&&!se.importScripts&&$t&&$t.protocol!=="file:"&&!Nh(Ah)?(wr=Ah,se.addEventListener("message",Rh,!1)):Ph in Ih("script")?wr=function(e){kh.appendChild(Ih("script"))[Ph]=function(){kh.removeChild(this),iu(e)}}:wr=function(e){setTimeout(tu(e),0)});Mh.exports={set:nu,clear:au}});var $h=i((jW,Lh)=>{"use strict";var jh=P(),_N=H(),PN=Object.getOwnPropertyDescriptor;Lh.exports=function(e){if(!_N)return jh[e];var r=PN(jh,e);return r&&r.value}});var uu=i((LW,Dh)=>{"use strict";var Fh=function(){this.head=null,this.tail=null};Fh.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Dh.exports=Fh});var Gh=i(($W,Bh)=>{"use strict";var RN=Mr();Bh.exports=/ipad|iphone|ipod/i.test(RN)&&typeof Pebble<"u"});var Hh=i((FW,Uh)=>{"use strict";var AN=Mr();Uh.exports=/web0s(?!.*chrome)/i.test(AN)});var Qh=i((DW,Jh)=>{"use strict";var Xr=P(),NN=$h(),Wh=Y(),su=ou().set,MN=uu(),jN=Qo(),LN=Gh(),$N=Hh(),cu=jt(),Kh=Xr.MutationObserver||Xr.WebKitMutationObserver,zh=Xr.document,Vh=Xr.process,la=Xr.Promise,pu=NN("queueMicrotask"),Qr,lu,fu,fa,Yh;pu||(Ft=new MN,Dt=function(){var e,r;for(cu&&(e=Vh.domain)&&e.exit();r=Ft.get();)try{r()}catch(t){throw Ft.head&&Qr(),t}e&&e.enter()},!jN&&!cu&&!$N&&Kh&&zh?(lu=!0,fu=zh.createTextNode(""),new Kh(Dt).observe(fu,{characterData:!0}),Qr=function(){fu.data=lu=!lu}):!LN&&la&&la.resolve?(fa=la.resolve(void 0),fa.constructor=la,Yh=Wh(fa.then,fa),Qr=function(){Yh(Dt)}):cu?Qr=function(){Vh.nextTick(Dt)}:(su=Wh(su,Xr),Qr=function(){su(Dt)}),pu=function(e){Ft.head||Qr(),Ft.add(e)});var Ft,Dt;Jh.exports=pu});var Zh=i((BW,Xh)=>{"use strict";Xh.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var Sr=i((GW,ey)=>{"use strict";ey.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var Tr=i((UW,ry)=>{"use strict";var FN=P();ry.exports=FN.Promise});var Zr=i((HW,iy)=>{"use strict";var DN=P(),Bt=Tr(),BN=N(),GN=gi(),UN=Ci(),HN=R(),ty=zo(),WN=Z(),vu=jr(),ny=Bt&&Bt.prototype,KN=HN("species"),du=!1,ay=BN(DN.PromiseRejectionEvent),zN=GN("Promise",function(){var e=UN(Bt),r=e!==String(Bt);if(!r&&vu===66||WN&&!(ny.catch&&ny.finally))return!0;if(!vu||vu<51||!/native code/.test(e)){var t=new Bt(function(o){o(1)}),n=function(o){o(function(){},function(){})},a=t.constructor={};if(a[KN]=n,du=t.then(function(){})instanceof n,!du)return!0}return!r&&(ty==="BROWSER"||ty==="DENO")&&!ay});iy.exports={CONSTRUCTOR:zN,REJECTION_EVENT:ay,SUBCLASSING:du}});var Ce=i((WW,uy)=>{"use strict";var oy=D(),VN=TypeError,YN=function(e){var r,t;this.promise=new e(function(n,a){if(r!==void 0||t!==void 0)throw new VN("Bad Promise constructor");r=n,t=a}),this.resolve=oy(r),this.reject=oy(t)};uy.exports.f=function(e){return new YN(e)}});var Oy=i(()=>{"use strict";var JN=q(),QN=Z(),ma=jt(),rr=P(),XN=V(),nt=G(),sy=Ae(),cy=St(),ZN=Me(),eM=Vo(),rM=D(),da=N(),tM=L(),nM=ca(),aM=Jo(),dy=ou().set,gu=Qh(),iM=Zh(),oM=Sr(),uM=uu(),my=Qe(),ha=Tr(),qu=Zr(),hy=Ce(),ya="Promise",yy=qu.CONSTRUCTOR,sM=qu.REJECTION_EVENT,cM=qu.SUBCLASSING,mu=my.getterFor(ya),lM=my.set,et=ha&&ha.prototype,Er=ha,pa=et,by=rr.TypeError,hu=rr.document,xu=rr.process,yu=hy.f,fM=yu,pM=!!(hu&&hu.createEvent&&rr.dispatchEvent),gy="unhandledrejection",vM="rejectionhandled",ly=0,qy=1,dM=2,wu=1,xy=2,va,fy,wy,py,Sy=function(e){var r;return tM(e)&&da(r=e.then)?r:!1},Ty=function(e,r){var t=r.value,n=r.state===qy,a=n?e.ok:e.fail,o=e.resolve,u=e.reject,c=e.domain,s,l,f;try{a?(n||(r.rejection===xy&&hM(r),r.rejection=wu),a===!0?s=t:(c&&c.enter(),s=a(t),c&&(c.exit(),f=!0)),s===e.promise?u(new by("Promise-chain cycle")):(l=Sy(s))?nt(l,s,o,u):o(s)):u(t)}catch(v){c&&!f&&c.exit(),u(v)}},Ey=function(e,r){e.notified||(e.notified=!0,gu(function(){for(var t=e.reactions,n;n=t.get();)Ty(n,e);e.notified=!1,r&&!e.rejection&&mM(e)}))},Cy=function(e,r,t){var n,a;pM?(n=hu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),rr.dispatchEvent(n)):n={promise:r,reason:t},!sM&&(a=rr["on"+e])?a(n):e===gy&&iM("Unhandled promise rejection",t)},mM=function(e){nt(dy,rr,function(){var r=e.facade,t=e.value,n=vy(e),a;if(n&&(a=oM(function(){ma?xu.emit("unhandledRejection",t,r):Cy(gy,r,t)}),e.rejection=ma||vy(e)?xy:wu,a.error))throw a.value})},vy=function(e){return e.rejection!==wu&&!e.parent},hM=function(e){nt(dy,rr,function(){var r=e.facade;ma?xu.emit("rejectionHandled",r):Cy(vM,r,e.value)})},rt=function(e,r,t){return function(n){e(r,n,t)}},tt=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=dM,Ey(e,!0))},bu=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new by("Promise can't be resolved itself");var n=Sy(r);n?gu(function(){var a={done:!1};try{nt(n,r,rt(bu,a,e),rt(tt,a,e))}catch(o){tt(a,o,e)}}):(e.value=r,e.state=qy,Ey(e,!1))}catch(a){tt({done:!1},a,e)}}};if(yy&&(Er=function(r){nM(this,pa),rM(r),nt(va,this);var t=mu(this);try{r(rt(bu,t),rt(tt,t))}catch(n){tt(t,n)}},pa=Er.prototype,va=function(r){lM(this,{type:ya,done:!1,notified:!1,parent:!1,reactions:new uM,rejection:!1,state:ly,value:null})},va.prototype=sy(pa,"then",function(r,t){var n=mu(this),a=yu(aM(this,Er));return n.parent=!0,a.ok=da(r)?r:!0,a.fail=da(t)&&t,a.domain=ma?xu.domain:void 0,n.state===ly?n.reactions.add(a):gu(function(){Ty(a,n)}),a.promise}),fy=function(){var e=new va,r=mu(e);this.promise=e,this.resolve=rt(bu,r),this.reject=rt(tt,r)},hy.f=yu=function(e){return e===Er||e===wy?new fy(e):fM(e)},!QN&&da(ha)&&et!==Object.prototype)){py=et.then,cM||sy(et,"then",function(r,t){var n=this;return new Er(function(a,o){nt(py,n,a,o)}).then(r,t)},{unsafe:!0});try{delete et.constructor}catch{}cy&&cy(et,pa)}JN({global:!0,constructor:!0,wrap:!0,forced:yy},{Promise:Er});wy=XN.Promise;ZN(Er,ya,!1,!0);eM(ya)});var Gt=i((VW,ky)=>{"use strict";var yM=Tr(),bM=no(),gM=Zr().CONSTRUCTOR;ky.exports=gM||!bM(function(e){yM.all(e).then(void 0,function(){})})});var Iy=i(()=>{"use strict";var qM=q(),xM=G(),wM=D(),SM=Ce(),TM=Sr(),EM=ve(),CM=Gt();qM({target:"Promise",stat:!0,forced:CM},{all:function(r){var t=this,n=SM.f(t),a=n.resolve,o=n.reject,u=TM(function(){var c=wM(t.resolve),s=[],l=0,f=1;EM(r,function(v){var p=l++,d=!1;f++,xM(c,t,v).then(function(h){d||(d=!0,s[p]=h,--f||a(s))},o)}),--f||a(s)});return u.error&&o(u.value),n.promise}})});var Py=i(()=>{"use strict";var OM=q(),kM=Z(),IM=Zr().CONSTRUCTOR,Tu=Tr(),_M=W(),PM=N(),RM=Ae(),_y=Tu&&Tu.prototype;OM({target:"Promise",proto:!0,forced:IM,real:!0},{catch:function(e){return this.then(void 0,e)}});!kM&&PM(Tu)&&(Su=_M("Promise").prototype.catch,_y.catch!==Su&&RM(_y,"catch",Su,{unsafe:!0}));var Su});var Ry=i(()=>{"use strict";var AM=q(),NM=G(),MM=D(),jM=Ce(),LM=Sr(),$M=ve(),FM=Gt();AM({target:"Promise",stat:!0,forced:FM},{race:function(r){var t=this,n=jM.f(t),a=n.reject,o=LM(function(){var u=MM(t.resolve);$M(r,function(c){NM(u,t,c).then(n.resolve,a)})});return o.error&&a(o.value),n.promise}})});var Ay=i(()=>{"use strict";var DM=q(),BM=Ce(),GM=Zr().CONSTRUCTOR;DM({target:"Promise",stat:!0,forced:GM},{reject:function(r){var t=BM.f(this),n=t.reject;return n(r),t.promise}})});var Eu=i((nK,Ny)=>{"use strict";var UM=X(),HM=L(),WM=Ce();Ny.exports=function(e,r){if(UM(e),HM(r)&&r.constructor===e)return r;var t=WM.f(e),n=t.resolve;return n(r),t.promise}});var Ly=i(()=>{"use strict";var KM=q(),zM=W(),My=Z(),VM=Tr(),jy=Zr().CONSTRUCTOR,YM=Eu(),JM=zM("Promise"),QM=My&&!jy;KM({target:"Promise",stat:!0,forced:My||jy},{resolve:function(r){return YM(QM&&this===JM?VM:this,r)}})});var $y=i(()=>{"use strict";Oy();Iy();Py();Ry();Ay();Ly()});var Cu=i(()=>{"use strict";var XM=q(),ZM=G(),ej=D(),rj=Ce(),tj=Sr(),nj=ve(),aj=Gt();XM({target:"Promise",stat:!0,forced:aj},{allSettled:function(r){var t=this,n=rj.f(t),a=n.resolve,o=n.reject,u=tj(function(){var c=ej(t.resolve),s=[],l=0,f=1;nj(r,function(v){var p=l++,d=!1;f++,ZM(c,t,v).then(function(h){d||(d=!0,s[p]={status:"fulfilled",value:h},--f||a(s))},function(h){d||(d=!0,s[p]={status:"rejected",reason:h},--f||a(s))})}),--f||a(s)});return u.error&&o(u.value),n.promise}})});var Ou=i(()=>{"use strict";var ij=q(),oj=G(),uj=D(),sj=W(),cj=Ce(),lj=Sr(),fj=ve(),pj=Gt(),Fy="No one promise resolved";ij({target:"Promise",stat:!0,forced:pj},{any:function(r){var t=this,n=sj("AggregateError"),a=cj.f(t),o=a.resolve,u=a.reject,c=lj(function(){var s=uj(t.resolve),l=[],f=0,v=1,p=!1;fj(r,function(d){var h=f++,m=!1;v++,oj(s,t,d).then(function(x){m||p||(p=!0,o(x))},function(x){m||p||(m=!0,l[h]=x,--v||u(new n(l,Fy)))})}),--v||u(new n(l,Fy))});return c.error&&u(c.value),a.promise}})});var Iu=i(()=>{"use strict";var vj=q(),dj=P(),mj=Nr(),hj=vr(),yj=Ce(),bj=D(),By=Sr(),ku=dj.Promise,Dy=!1,gj=!ku||!ku.try||By(function(){ku.try(function(e){Dy=e===8},8)}).error||!Dy;vj({target:"Promise",stat:!0,forced:gj},{try:function(e){var r=arguments.length>1?hj(arguments,1):[],t=yj.f(this),n=By(function(){return mj(bj(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var _u=i(()=>{"use strict";var qj=q(),xj=Ce();qj({target:"Promise",stat:!0},{withResolvers:function(){var r=xj.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var Wy=i(()=>{"use strict";var wj=q(),Sj=Z(),ba=Tr(),Tj=_(),Uy=W(),Hy=N(),Ej=Jo(),Gy=Eu(),Cj=Ae(),Ru=ba&&ba.prototype,Oj=!!ba&&Tj(function(){Ru.finally.call({then:function(){}},function(){})});wj({target:"Promise",proto:!0,real:!0,forced:Oj},{finally:function(e){var r=Ej(this,Uy("Promise")),t=Hy(e);return this.then(t?function(n){return Gy(r,e()).then(function(){return n})}:e,t?function(n){return Gy(r,e()).then(function(){throw n})}:e)}});!Sj&&Hy(ba)&&(Pu=Uy("Promise").prototype.finally,Ru.finally!==Pu&&Cj(Ru,"finally",Pu,{unsafe:!0}));var Pu});var zy=i((bK,Ky)=>{"use strict";Ko();qr();kt();$y();Cu();Ou();Iu();_u();Wy();hr();var kj=V();Ky.exports=kj.Promise});var Yy=i((gK,Vy)=>{"use strict";var Ij=zy();xr();Vy.exports=Ij});var Jy=i(()=>{"use strict";Iu()});var Qy=i(()=>{"use strict";_u()});var Zy=i((TK,Xy)=>{"use strict";var _j=Yy();Jy();Qy();Xy.exports=_j});var eb=i(()=>{"use strict";Ko()});var rb=i(()=>{"use strict";Cu()});var tb=i(()=>{"use strict";Ou()});var ab=i((PK,nb)=>{"use strict";var Pj=Zy();eb();rb();tb();nb.exports=Pj});var at=i((RK,ib)=>{"use strict";ib.exports=ab()});var sb=i((LK,ub)=>{"use strict";Po();var Rj=Kr();ub.exports=Rj.f("asyncIterator")});var lb=i(($K,cb)=>{"use strict";var Aj=sb();cb.exports=Aj});var pb=i((FK,fb)=>{"use strict";var Nj=lb();fb.exports=Nj});var db=i((DK,vb)=>{"use strict";var Mj=pb();vb.exports=Mj});var ga=i((BK,mb)=>{"use strict";mb.exports=db()});var gb=i(()=>{"use strict";var jj=q(),Lj=_(),$j=re(),bb=wt(),Fj=zi(),Dj=Lj(function(){bb(1)});jj({target:"Object",stat:!0,forced:Dj,sham:!Fj},{getPrototypeOf:function(r){return bb($j(r))}})});var xb=i((KK,qb)=>{"use strict";gb();var Bj=V();qb.exports=Bj.Object.getPrototypeOf});var Sb=i((zK,wb)=>{"use strict";var Gj=xb();wb.exports=Gj});var Eb=i((VK,Tb)=>{"use strict";var Uj=Sb();Tb.exports=Uj});var Ob=i((YK,Cb)=>{"use strict";var Hj=Eb();Cb.exports=Hj});var qa=i((JK,kb)=>{"use strict";kb.exports=Ob()});var _b=i(()=>{"use strict";var Wj=q(),Kj=A(),zj=Re(),Vj=Kj([].reverse),Ib=[1,2];Wj({target:"Array",proto:!0,forced:String(Ib)===String(Ib.reverse())},{reverse:function(){return zj(this)&&(this.length=this.length),Vj(this)}})});var Rb=i((ZK,Pb)=>{"use strict";_b();var Yj=ue();Pb.exports=Yj("Array","reverse")});var Nb=i((ez,Ab)=>{"use strict";var Jj=U(),Qj=Rb(),Mu=Array.prototype;Ab.exports=function(e){var r=e.reverse;return e===Mu||Jj(Mu,e)&&r===Mu.reverse?Qj:r}});var jb=i((rz,Mb)=>{"use strict";var Xj=Nb();Mb.exports=Xj});var $b=i((tz,Lb)=>{"use strict";var Zj=jb();Lb.exports=Zj});var Db=i((nz,Fb)=>{"use strict";var eL=$b();Fb.exports=eL});var Gb=i((az,Bb)=>{"use strict";Bb.exports=Db()});var ju=i((iz,Wt)=>{function rL(e,r){this.v=e,this.k=r}Wt.exports=rL,Wt.exports.__esModule=!0,Wt.exports.default=Wt.exports});var Ub=i(()=>{"use strict";var tL=q(),nL=H(),aL=Xe();tL({target:"Object",stat:!0,sham:!nL},{create:aL})});var Wb=i((sz,Hb)=>{"use strict";Ub();var iL=V(),oL=iL.Object;Hb.exports=function(r,t){return oL.create(r,t)}});var zb=i((cz,Kb)=>{"use strict";var uL=Wb();Kb.exports=uL});var Yb=i((lz,Vb)=>{"use strict";var sL=zb();Vb.exports=sL});var Qb=i((fz,Jb)=>{"use strict";var cL=Yb();Jb.exports=cL});var xa=i((pz,Xb)=>{"use strict";Xb.exports=Qb()});var $u=i((vz,tg)=>{"use strict";var eg=A(),lL=D(),fL=L(),pL=K(),Zb=vr(),vL=Ar(),rg=Function,dL=eg([].concat),mL=eg([].join),Lu={},hL=function(e,r,t){if(!pL(Lu,r)){for(var n=[],a=0;a<r;a++)n[a]="a["+a+"]";Lu[r]=rg("C,a","return new C("+mL(n,",")+")")}return Lu[r](e,t)};tg.exports=vL?rg.bind:function(r){var t=lL(this),n=t.prototype,a=Zb(arguments,1),o=function(){var c=dL(a,Zb(arguments));return this instanceof o?hL(t,c.length,c):t.apply(r,c)};return fL(n)&&(o.prototype=n),o}});var ag=i(()=>{"use strict";var yL=q(),ng=$u();yL({target:"Function",proto:!0,forced:Function.bind!==ng},{bind:ng})});var og=i((hz,ig)=>{"use strict";ag();var bL=ue();ig.exports=bL("Function","bind")});var sg=i((yz,ug)=>{"use strict";var gL=U(),qL=og(),Fu=Function.prototype;ug.exports=function(e){var r=e.bind;return e===Fu||gL(Fu,e)&&r===Fu.bind?qL:r}});var lg=i((bz,cg)=>{"use strict";var xL=sg();cg.exports=xL});var pg=i((gz,fg)=>{"use strict";var wL=lg();fg.exports=wL});var dg=i((qz,vg)=>{"use strict";var SL=pg();vg.exports=SL});var Kt=i((xz,mg)=>{"use strict";mg.exports=dg()});var hg=i(()=>{"use strict";var TL=q(),EL=St();TL({target:"Object",stat:!0},{setPrototypeOf:EL})});var bg=i((Tz,yg)=>{"use strict";hg();var CL=V();yg.exports=CL.Object.setPrototypeOf});var qg=i((Ez,gg)=>{"use strict";var OL=bg();gg.exports=OL});var wg=i((Cz,xg)=>{"use strict";var kL=qg();xg.exports=kL});var Tg=i((Oz,Sg)=>{"use strict";var IL=wg();Sg.exports=IL});var wa=i((kz,Eg)=>{"use strict";Eg.exports=Tg()});var Og=i(()=>{"use strict";var _L=q(),PL=H(),Cg=te().f;_L({target:"Object",stat:!0,forced:Object.defineProperty!==Cg,sham:!PL},{defineProperty:Cg})});var _g=i((Pz,Ig)=>{"use strict";Og();var RL=V(),kg=RL.Object,AL=Ig.exports=function(r,t,n){return kg.defineProperty(r,t,n)};kg.defineProperty.sham&&(AL.sham=!0)});var Rg=i((Rz,Pg)=>{"use strict";var NL=_g();Pg.exports=NL});var Ng=i((Az,Ag)=>{"use strict";var ML=Rg();Ag.exports=ML});var jg=i((Nz,Mg)=>{"use strict";var jL=Ng();Mg.exports=jL});var zt=i((Mz,Lg)=>{"use strict";Lg.exports=jg()});var Du=i((jz,Le)=>{var LL=zt();function Sa(e,r,t,n){var a=LL;try{a({},"",{})}catch{a=0}Le.exports=Sa=function(u,c,s,l){function f(v,p){Sa(u,v,function(d){return this._invoke(v,p,d)})}c?a?a(u,c,{value:s,enumerable:!l,configurable:!l,writable:!l}):u[c]=s:(f("next",0),f("throw",1),f("return",2))},Le.exports.__esModule=!0,Le.exports.default=Le.exports,Sa(e,r,t,n)}Le.exports=Sa,Le.exports.__esModule=!0,Le.exports.default=Le.exports});var Gu=i((Lz,$e)=>{var $g=Ee(),Bu=xa(),$L=Kt(),FL=qa(),Fg=wa(),ke=Du();function Dg(){var e,r,t=typeof $g=="function"?$g:{},n=t.iterator||"@@iterator",a=t.toStringTag||"@@toStringTag";function o(d,h,m,x){var y=h&&h.prototype instanceof c?h:c,g=Bu(y.prototype);return ke(g,"_invoke",function(O,k,w){var T,S,C,j=0,xe=w||[],I=!1,ee={p:0,n:0,v:e,a:we,f:$L(we).call(we,e,4),d:function(F,me){return T=F,S=0,C=e,ee.n=me,u}};function we(Q,F){for(S=Q,C=F,r=0;!I&&j&&!me&&r<xe.length;r++){var me,E=xe[r],Rr=ee.p,Ke=E[2];Q>3?(me=Ke===F)&&(C=E[(S=E[4])?5:(S=3,3)],E[4]=E[5]=e):E[0]<=Rr&&((me=Q<2&&Rr<E[1])?(S=0,ee.v=F,ee.n=E[1]):Rr<Ke&&(me=Q<3||E[0]>F||F>Ke)&&(E[4]=Q,E[5]=F,ee.n=Ke,S=0))}if(me||Q>1)return u;throw I=!0,F}return function(Q,F,me){if(j>1)throw TypeError("Generator is already running");for(I&&F===1&&we(F,me),S=F,C=me;(r=S<2?e:C)||!I;){T||(S?S<3?(S>1&&(ee.n=-1),we(S,C)):ee.n=C:ee.v=C);try{if(j=2,T){if(S||(Q="next"),r=T[Q]){if(!(r=r.call(T,C)))throw TypeError("iterator result is not an object");if(!r.done)return r;C=r.value,S<2&&(S=0)}else S===1&&(r=T.return)&&r.call(T),S<2&&(C=TypeError("The iterator does not provide a '"+Q+"' method"),S=1);T=e}else if((r=(I=ee.n<0)?C:O.call(k,ee))!==u)break}catch(E){T=e,S=1,C=E}finally{j=1}}return{value:r,done:I}}}(d,m,x),!0),g}var u={};function c(){}function s(){}function l(){}r=FL;var f=[][n]?r(r([][n]())):(ke(r={},n,function(){return this}),r),v=l.prototype=c.prototype=Bu(f);function p(d){return Fg?Fg(d,l):(d.__proto__=l,ke(d,a,"GeneratorFunction")),d.prototype=Bu(v),d}return s.prototype=l,ke(v,"constructor",l),ke(l,"constructor",s),s.displayName="GeneratorFunction",ke(l,a,"GeneratorFunction"),ke(v),ke(v,a,"Generator"),ke(v,n,function(){return this}),ke(v,"toString",function(){return"[object Generator]"}),($e.exports=Dg=function(){return{w:o,m:p}},$e.exports.__esModule=!0,$e.exports.default=$e.exports)()}$e.exports=Dg,$e.exports.__esModule=!0,$e.exports.default=$e.exports});var Wu=i(($z,Vt)=>{var DL=Ee(),BL=ga(),GL=ju(),Uu=Du();function Hu(e,r){function t(a,o,u,c){try{var s=e[a](o),l=s.value;return l instanceof GL?r.resolve(l.v).then(function(f){t("next",f,u,c)},function(f){t("throw",f,u,c)}):r.resolve(l).then(function(f){s.value=f,u(s)},function(f){return t("throw",f,u,c)})}catch(f){c(f)}}var n;this.next||(Uu(Hu.prototype),Uu(Hu.prototype,typeof DL=="function"&&BL||"@asyncIterator",function(){return this})),Uu(this,"_invoke",function(a,o,u){function c(){return new r(function(s,l){t(a,u,s,l)})}return n=n?n.then(c,c):c()},!0)}Vt.exports=Hu,Vt.exports.__esModule=!0,Vt.exports.default=Vt.exports});var Ku=i((Fz,Yt)=>{var UL=at(),HL=Gu(),WL=Wu();function KL(e,r,t,n,a){return new WL(HL().w(e,r,t,n),a||UL)}Yt.exports=KL,Yt.exports.__esModule=!0,Yt.exports.default=Yt.exports});var Bg=i((Dz,Jt)=>{var zL=Ku();function VL(e,r,t,n,a){var o=zL(e,r,t,n,a);return o.next().then(function(u){return u.done?u.value:o.next()})}Jt.exports=VL,Jt.exports.__esModule=!0,Jt.exports.default=Jt.exports});var Hg=i((Bz,Ug)=>{"use strict";var Gg=Ye(),YL=TypeError;Ug.exports=function(e,r){if(!delete e[r])throw new YL("Cannot delete property "+Gg(r)+" of "+Gg(e))}});var Wg=i(()=>{"use strict";var JL=q(),QL=re(),XL=fe(),ZL=Ur(),e$=Hg(),r$=Ot(),t$=[].unshift(0)!==1,n$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},a$=t$||!n$();JL({target:"Array",proto:!0,arity:1,forced:a$},{unshift:function(r){var t=QL(this),n=XL(t),a=arguments.length;if(a){r$(n+a);for(var o=n;o--;){var u=o+a;o in t?t[u]=t[o]:e$(t,u)}for(var c=0;c<a;c++)t[c]=arguments[c]}return ZL(t,n+a)}})});var zg=i((Hz,Kg)=>{"use strict";Wg();var i$=ue();Kg.exports=i$("Array","unshift")});var Yg=i((Wz,Vg)=>{"use strict";var o$=U(),u$=zg(),zu=Array.prototype;Vg.exports=function(e){var r=e.unshift;return e===zu||o$(zu,e)&&r===zu.unshift?u$:r}});var Qg=i((Kz,Jg)=>{"use strict";var s$=Yg();Jg.exports=s$});var Zg=i((zz,Xg)=>{"use strict";var c$=Qg();Xg.exports=c$});var rq=i((Vz,eq)=>{"use strict";var l$=Zg();eq.exports=l$});var nq=i((Yz,tq)=>{"use strict";tq.exports=rq()});var aq=i((Jz,Qt)=>{var f$=nq();function p$(e){var r=Object(e),t=[];for(var n in r)f$(t).call(t,n);return function a(){for(;t.length;)if((n=t.pop())in r)return a.value=n,a.done=!1,a;return a.done=!0,a}}Qt.exports=p$,Qt.exports.__esModule=!0,Qt.exports.default=Qt.exports});var oq=i((Qz,iq)=>{"use strict";qr();kt();hr();Ao();var v$=Kr();iq.exports=v$.f("iterator")});var sq=i((Xz,uq)=>{"use strict";var d$=oq();xr();uq.exports=d$});var lq=i((Zz,cq)=>{"use strict";var m$=sq();cq.exports=m$});var pq=i((eV,fq)=>{"use strict";var h$=lq();fq.exports=h$});var Xt=i((rV,vq)=>{"use strict";vq.exports=pq()});var dq=i((tV,Fe)=>{var Ta=Ee(),y$=Xt();function Vu(e){"@babel/helpers - typeof";return Fe.exports=Vu=typeof Ta=="function"&&typeof y$=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Ta=="function"&&r.constructor===Ta&&r!==Ta.prototype?"symbol":typeof r},Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports,Vu(e)}Fe.exports=Vu,Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports});var mq=i((nV,Zt)=>{var b$=dq().default,g$=Ee(),q$=Xt();function x$(e){if(e!=null){var r=e[typeof g$=="function"&&q$||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(b$(e)+" is not iterable")}Zt.exports=x$,Zt.exports.__esModule=!0,Zt.exports.default=Zt.exports});var bq=i((aV,De)=>{var hq=qa(),w$=Gb(),S$=ju(),T$=Gu(),E$=Bg(),C$=Ku(),O$=Wu(),k$=aq(),yq=mq();function Yu(){"use strict";var e=T$(),r=e.m(Yu),t=(hq?hq(r):r.__proto__).constructor;function n(u){var c=typeof u=="function"&&u.constructor;return!!c&&(c===t||(c.displayName||c.name)==="GeneratorFunction")}var a={throw:1,return:2,break:3,continue:3};function o(u){var c,s;return function(l){c||(c={stop:function(){return s(l.a,2)},catch:function(){return l.v},abrupt:function(v,p){return s(l.a,a[v],p)},delegateYield:function(v,p,d){return c.resultName=p,s(l.d,yq(v),d)},finish:function(v){return s(l.f,v)}},s=function(v,p,d){l.p=c.prev,l.n=c.next;try{return v(p,d)}finally{c.next=l.n}}),c.resultName&&(c[c.resultName]=l.v,c.resultName=void 0),c.sent=l.v,c.next=l.n;try{return u.call(this,c)}finally{l.p=c.prev,l.n=c.next}}}return(De.exports=Yu=function(){return{wrap:function(s,l,f,v){return e.w(o(s),l,f,v&&w$(v).call(v))},isGeneratorFunction:n,mark:e.m,awrap:function(s,l){return new S$(s,l)},AsyncIterator:O$,async:function(s,l,f,v,p){return(n(l)?C$:E$)(o(s),l,f,v,p)},keys:k$,values:yq}},De.exports.__esModule=!0,De.exports.default=De.exports)()}De.exports=Yu,De.exports.__esModule=!0,De.exports.default=De.exports});var ce=i((iV,gq)=>{var Ea=bq()();gq.exports=Ea;try{regeneratorRuntime=Ea}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=Ea:Function("r","regeneratorRuntime = r")(Ea)}});var Ju=i((Oa,xq)=>{"use strict";Object.defineProperty(Oa,"__esModule",{value:!0});var Ca=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qq=function(){function e(r,t){var n=[],a=!0,o=!1,u=void 0;try{for(var c=r[Symbol.iterator](),s;!(a=(s=c.next()).done)&&(n.push(s.value),!(t&&n.length===t));a=!0);}catch(l){o=!0,u=l}finally{try{!a&&c.return&&c.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Oa.default=I$;function I$(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(a){return a.type==="tag"||a.type==="script"||a.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var a=this.attribs,o=Object.keys(a),u=o.reduce(function(c,s,l){return c[l]={name:s,value:a[s]},c},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var a=[];return nr(this.childTags,function(o){(o.name===n||n==="*")&&a.push(o)}),a}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var a=n.trim().replace(/\s+/g," ").split(" "),o=[];return nr([this],function(u){var c=u.attribs.class;c&&a.every(function(s){return c.indexOf(s)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var a=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=_$(n),u=o.shift(),c=o.length;return u(this).filter(function(s){for(var l=0;l<c;){if(s=o[l](s,a),!s)return!1;l+=1}return!0})}),t.contains||(t.contains=function(n){var a=!1;return nr([this],function(o,u){o===n&&(a=!0,u())}),a}),!0}function _$(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,a=r.split(":"),o=qq(a,2),u=o[0],c=o[1],s=null,l=null;if(function(){switch(!0){case/>/.test(u):l=function(w){return function(T){return T(w.parent)&&w.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");s=function(w){var T=w.attribs.class;return T&&h.every(function(S){return T.indexOf(S)>-1})},l=function(w,T){return n?w.getElementsByClassName(h.join(" ")):typeof w=="function"?w(s):en(w,T,s)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),x=qq(m,2),y=x[0],g=x[1];s=function(w){var T=Object.keys(w.attribs).indexOf(y)>-1;return!!(T&&(!g||w.attribs[y]===g))},l=function(w,T){if(n){var S=function(){var C=[];return nr([w],function(j){s(j)&&C.push(j)}),{v:C}}();if((typeof S>"u"?"undefined":Ca(S))==="object")return S.v}return typeof w=="function"?w(s):en(w,T,s)};break;case/^#/.test(u):var O=u.substr(1);s=function(w){return w.attribs.id===O},l=function(w,T){if(n){var S=function(){var C=[];return nr([w],function(j,xe){s(j)&&(C.push(j),xe())}),{v:C}}();if((typeof S>"u"?"undefined":Ca(S))==="object")return S.v}return typeof w=="function"?w(s):en(w,T,s)};break;case/\*/.test(u):s=function(w){return!0},l=function(w,T){if(n){var S=function(){var C=[];return nr([w],function(j){return C.push(j)}),{v:C}}();if((typeof S>"u"?"undefined":Ca(S))==="object")return S.v}return typeof w=="function"?w(s):en(w,T,s)};break;default:s=function(w){return w.name===u},l=function(w,T){if(n){var S=function(){var C=[];return nr([w],function(j){s(j)&&C.push(j)}),{v:C}}();if((typeof S>"u"?"undefined":Ca(S))==="object")return S.v}return typeof w=="function"?w(s):en(w,T,s)}}}(),!c)return l;var f=c.match(/-(child|type)\((\d+)\)$/),v=f[1],p=parseInt(f[2],10)-1,d=function(m){if(m){var x=m.parent.childTags;v==="type"&&(x=x.filter(s));var y=x.findIndex(function(g){return g===m});if(y===p)return!0}return!1};return function(m){var x=l(m);return n?x.reduce(function(y,g){return d(g)&&y.push(g),y},[]):d(x)&&x}})}function nr(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&nr(t.childTags,r)})}function en(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}xq.exports=Oa.default});var Ia=i(ka=>{"use strict";Object.defineProperty(ka,"__esModule",{value:!0});ka.convertNodeList=P$;ka.escapeValue=R$;function P$(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function R$(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var Pq=i((_a,_q)=>{"use strict";Object.defineProperty(_a,"__esModule",{value:!0});_a.default=A$;var Eq=Ia(),wq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function A$(e,r){var t=r.root,n=t===void 0?document:t,a=r.skip,o=a===void 0?null:a,u=r.priority,c=u===void 0?["id","class","href","src"]:u,s=r.ignore,l=s===void 0?{}:s,f=[],v=e,p=f.length,d=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(y){return typeof y!="function"?function(g){return g===y}:y}),m=function(g){return o&&h.some(function(O){return O(g)})};for(Object.keys(l).forEach(function(y){y==="class"&&(d=!0);var g=l[y];typeof g!="function"&&(typeof g=="number"&&(g=g.toString()),typeof g=="string"&&(g=new RegExp((0,Eq.escapeValue)(g).replace(/\\/g,"\\\\"))),typeof g=="boolean"&&(g=g?/(?:)/:/.^/),l[y]=function(O,k){return g.test(k)})}),d&&function(){var y=l.attribute;l.attribute=function(g,O,k){return l.class(O)||y&&y(g,O,k)}}();v!==n;){if(m(v)!==!0){if(Sq(c,v,l,f,n)||Tq(v,l,f,n))break;Sq(c,v,l,f),f.length===p&&Tq(v,l,f),f.length===p&&N$(c,v,l,f)}v=v.parentNode,p=f.length}if(v===n){var x=kq(c,v,l);f.unshift(x)}return f.join(" ")}function Sq(e,r,t,n){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=Cq(e,r,t);if(o){var u=a.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function Cq(e,r,t){for(var n=r.attributes,a=Object.keys(n).sort(function(m,x){var y=e.indexOf(n[m].name),g=e.indexOf(n[x].name);return g===-1?y===-1?0:-1:y-g}),o=0,u=a.length;o<u;o++){var c=a[o],s=n[c],l=s.name,f=(0,Eq.escapeValue)(s.value),v=t[l]||t.attribute,p=wq[l]||wq.attribute;if(!Iq(v,l,f,p)){var d="["+l+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(l==="id"&&(d="#"+f),l==="class")){var h=f.trim().replace(/\s+/g,".");d="."+h}return d}}return null}function Tq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,a=Oq(e,r);if(a){var o=n.getElementsByTagName(a);if(o.length===1)return t.unshift(a),!0}return!1}function Oq(e,r){var t=e.tagName.toLowerCase();return Iq(r.tag,null,t)?null:t}function N$(e,r,t,n){for(var a=r.parentNode,o=a.childTags||a.children,u=0,c=o.length;u<c;u++){var s=o[u];if(s===r){var l=kq(e,s,t);if(!l)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,s,t,l);var f="> "+l+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function kq(e,r,t){var n=Cq(e,r,t);return n||(n=Oq(r,t)),n}function Iq(e,r,t,n){if(!t)return!0;var a=e||n;return a?a(r,t,n):!1}_q.exports=_a.default});var Qu=i((Ra,Rq)=>{"use strict";Object.defineProperty(Ra,"__esModule",{value:!0});Ra.default=F$;var M$=Ju(),j$=$$(M$),L$=Ia();function $$(e){return e&&e.__esModule?e:{default:e}}function F$(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,L$.convertNodeList)(r):[r]),!r.length||r.some(function(v){return v.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,j$.default)(r[0],t),a=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(a.length<2)return Pa("",e,"",r);for(var o=[a.pop()];a.length>1;){var u=a.pop(),c=a.join(" "),s=o.join(" "),l=c+" "+s,f=document.querySelectorAll(l);f.length!==r.length&&o.unshift(Pa(c,u,s,r))}return o.unshift(a[0]),a=o,a[0]=Pa("",a[0],a.slice(1).join(" "),r),a[a.length-1]=Pa(a.slice(0,-1).join(" "),a[a.length-1],"",r),n&&delete global.document,a.join(" ").replace(/>/g,"> ").trim()}function Pa(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var a=r.replace(/=.*$/,"]"),o=""+e+a+t,u=document.querySelectorAll(o);if(it(u,n))r=a;else for(var c=document.querySelectorAll(""+e+a),s=function(){var k=c[l];if(n.some(function(T){return k.contains(T)})){var w=k.tagName.toLowerCase();return o=""+e+w+t,u=document.querySelectorAll(o),it(u,n)&&(r=w),"break"}},l=0,f=c.length;l<f;l++){var o,u,v=s();if(v==="break")break}}if(/>/.test(r)){var p=r.replace(/>/,""),o=""+e+p+t,u=document.querySelectorAll(o);it(u,n)&&(r=p)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);it(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(O){return"."+O}).sort(function(O,k){return O.length-k.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);it(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var x=document.querySelectorAll(""+e+r),y=function(){var k=x[l];if(n.some(function(T){return k.contains(T)})){var w=k.tagName.toLowerCase();return o=""+e+w+t,u=document.querySelectorAll(o),it(u,n)&&(r=w),"break"}},l=0,f=x.length;l<f;l++){var o,u,g=y();if(g==="break")break}}return r}function it(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var a=0;a<t;a++)if(e[a]===n)return!0;return!1})}Rq.exports=Ra.default});var Xu=i(Aa=>{"use strict";Object.defineProperty(Aa,"__esModule",{value:!0});Aa.getCommonAncestor=D$;Aa.getCommonProperties=B$;function D$(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,a=[];e.forEach(function(v,p){for(var d=[];v!==n;)v=v.parentNode,d.unshift(v);a[p]=d}),a.sort(function(v,p){return v.length-p.length});for(var o=a.shift(),u=null,c=function(){var p=o[s],d=a.some(function(h){return!h.some(function(m){return m===p})});if(d)return"break";u=p},s=0,l=o.length;s<l;s++){var f=c();if(f==="break")break}return u}function B$(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,a=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(s){return u.some(function(l){return l===s})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(a!==void 0&&function(){var s=t.attributes,l=Object.keys(s).reduce(function(p,d){var h=s[d],m=h.name;return h&&m!=="class"&&(p[m]=h.value),p},{}),f=Object.keys(l),v=Object.keys(a);f.length?v.length?(a=v.reduce(function(p,d){var h=a[d];return h===l[d]&&(p[d]=h),p},{}),Object.keys(a).length?r.attributes=a:delete r.attributes):r.attributes=l:delete r.attributes}(),o!==void 0){var c=t.tagName.toLowerCase();o?c!==o&&delete r.tag:r.tag=c}}),r}});var $q=i(rn=>{"use strict";Object.defineProperty(rn,"__esModule",{value:!0});var G$=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};rn.getSingleSelector=es;rn.getMultiSelector=Lq;rn.default=V$;var U$=Ju(),Nq=Zu(U$),H$=Pq(),W$=Zu(H$),K$=Qu(),Mq=Zu(K$),Aq=Ia(),jq=Xu();function Zu(e){return e&&e.__esModule?e:{default:e}}function es(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":G$(e))+'")');var t=(0,Nq.default)(e,r),n=(0,W$.default)(e,r),a=(0,Mq.default)(n,e,r);return t&&delete global.document,a}function Lq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,Aq.convertNodeList)(e)),e.some(function(l){return l.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,Nq.default)(e[0],r),n=(0,jq.getCommonAncestor)(e,r),a=es(n,r),o=z$(e),u=o[0],c=(0,Mq.default)(a+" "+u,e,r),s=(0,Aq.convertNodeList)(document.querySelectorAll(c));return e.every(function(l){return s.some(function(f){return f===l})})?(t&&delete global.document,c):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function z$(e){var r=(0,jq.getCommonProperties)(e),t=r.classes,n=r.attributes,a=r.tag,o=[];if(a&&o.push(a),t){var u=t.map(function(s){return"."+s}).join("");o.push(u)}if(n){var c=Object.keys(n).reduce(function(s,l){return s.push("["+l+'="'+n[l]+'"]'),s},[]).join("");o.push(c)}return o.length,[o.join("")]}function V$(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?Lq(e,r):es(e,r)}});var Bq=i(ae=>{"use strict";Object.defineProperty(ae,"__esModule",{value:!0});ae.default=ae.common=ae.optimize=ae.getMultiSelector=ae.getSingleSelector=ae.select=void 0;var rs=$q();Object.defineProperty(ae,"getSingleSelector",{enumerable:!0,get:function(){return rs.getSingleSelector}});Object.defineProperty(ae,"getMultiSelector",{enumerable:!0,get:function(){return rs.getMultiSelector}});var Fq=Dq(rs),Y$=Qu(),J$=Dq(Y$),Q$=Xu(),X$=Z$(Q$);function Z$(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Dq(e){return e&&e.__esModule?e:{default:e}}ae.select=Fq.default;ae.optimize=J$.default;ae.common=X$;ae.default=Fq.default});var Gq=i(()=>{"use strict";var cF=q(),lF=Re();cF({target:"Array",stat:!0},{isArray:lF})});var Hq=i((wV,Uq)=>{"use strict";Gq();var fF=V();Uq.exports=fF.Array.isArray});var Kq=i((SV,Wq)=>{"use strict";var pF=Hq();Wq.exports=pF});var Vq=i((TV,zq)=>{"use strict";var vF=Kq();zq.exports=vF});var Jq=i((EV,Yq)=>{"use strict";var dF=Vq();Yq.exports=dF});var Xq=i((CV,Qq)=>{"use strict";Qq.exports=Jq()});var rx=i(()=>{"use strict";var mF=q(),hF=re(),yF=fe(),bF=Ur(),gF=Ot(),qF=_(),xF=qF(function(){return[].push.call({length:4294967296},1)!==4294967297}),wF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},SF=xF||!wF();mF({target:"Array",proto:!0,arity:1,forced:SF},{push:function(r){var t=hF(this),n=yF(t),a=arguments.length;gF(n+a);for(var o=0;o<a;o++)t[n]=arguments[o],n++;return bF(t,n),n}})});var nx=i((_V,tx)=>{"use strict";rx();var TF=ue();tx.exports=TF("Array","push")});var ix=i((PV,ax)=>{"use strict";var EF=U(),CF=nx(),ts=Array.prototype;ax.exports=function(e){var r=e.push;return e===ts||EF(ts,e)&&r===ts.push?CF:r}});var ux=i((RV,ox)=>{"use strict";var OF=ix();ox.exports=OF});var cx=i((AV,sx)=>{"use strict";var kF=ux();sx.exports=kF});var fx=i((NV,lx)=>{"use strict";var IF=cx();lx.exports=IF});var ns=i((MV,px)=>{"use strict";px.exports=fx()});var Sx=i(()=>{"use strict";var _F=q(),PF=_t().map,RF=gt(),AF=RF("map");_F({target:"Array",proto:!0,forced:!AF},{map:function(r){return PF(this,r,arguments.length>1?arguments[1]:void 0)}})});var Ex=i((c9,Tx)=>{"use strict";Sx();var NF=ue();Tx.exports=NF("Array","map")});var Ox=i((l9,Cx)=>{"use strict";var MF=U(),jF=Ex(),is=Array.prototype;Cx.exports=function(e){var r=e.map;return e===is||MF(is,e)&&r===is.map?jF:r}});var Ix=i((f9,kx)=>{"use strict";var LF=Ox();kx.exports=LF});var Px=i((p9,_x)=>{"use strict";var $F=Ix();_x.exports=$F});var Ax=i((v9,Rx)=>{"use strict";var FF=Px();Rx.exports=FF});var Mx=i((d9,Nx)=>{"use strict";Nx.exports=Ax()});var Lx=i((m9,jx)=>{jx.exports=Mx()});var Fx=i((h9,$x)=>{$x.exports=at()});var Hx=i((y9,Ux)=>{"use strict";var DF=D(),BF=re(),GF=qn(),UF=fe(),Dx=TypeError,Bx="Reduce of empty array with no initial value",Gx=function(e){return function(r,t,n,a){var o=BF(r),u=GF(o),c=UF(o);if(DF(t),c===0&&n<2)throw new Dx(Bx);var s=e?c-1:0,l=e?-1:1;if(n<2)for(;;){if(s in u){a=u[s],s+=l;break}if(s+=l,e?s<0:c<=s)throw new Dx(Bx)}for(;e?s>=0:c>s;s+=l)s in u&&(a=t(a,u[s],s,o));return a}};Ux.exports={left:Gx(!1),right:Gx(!0)}});var os=i((b9,Wx)=>{"use strict";var HF=_();Wx.exports=function(e,r){var t=[][e];return!!t&&HF(function(){t.call(null,r||function(){return 1},1)})}});var zx=i(()=>{"use strict";var WF=q(),KF=Hx().left,zF=os(),Kx=jr(),VF=jt(),YF=!VF&&Kx>79&&Kx<83,JF=YF||!zF("reduce");WF({target:"Array",proto:!0,forced:JF},{reduce:function(r){var t=arguments.length;return KF(this,r,t,t>1?arguments[1]:void 0)}})});var Yx=i((x9,Vx)=>{"use strict";zx();var QF=ue();Vx.exports=QF("Array","reduce")});var Qx=i((w9,Jx)=>{"use strict";var XF=U(),ZF=Yx(),us=Array.prototype;Jx.exports=function(e){var r=e.reduce;return e===us||XF(us,e)&&r===us.reduce?ZF:r}});var Zx=i((S9,Xx)=>{"use strict";var eD=Qx();Xx.exports=eD});var rw=i((T9,ew)=>{"use strict";var rD=Zx();ew.exports=rD});var nw=i((E9,tw)=>{"use strict";var tD=rw();tw.exports=tD});var iw=i((C9,aw)=>{"use strict";aw.exports=nw()});var uw=i((O9,ow)=>{ow.exports=iw()});var lw=i((k9,cw)=>{"use strict";var nD=Re(),aD=fe(),iD=Ot(),oD=Y(),uD=Gr(),sw=function(e,r,t,n,a,o,u,c){for(var s=a,l=0,f=u?oD(u,c):!1,v,p;l<n;)l in t&&(v=f?f(t[l],l,r):t[l],o>0&&nD(v)?(p=aD(v),s=sw(e,r,v,p,s,o-1)-1):(iD(s+1),uD(e,s,v)),s++),l++;return s};cw.exports=sw});var fw=i(()=>{"use strict";var sD=q(),cD=lw(),lD=D(),fD=re(),pD=fe(),vD=Bn();sD({target:"Array",proto:!0},{flatMap:function(r){var t=fD(this),n=pD(t),a;return lD(r),a=vD(t,0),cD(a,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),a}})});var pw=i(()=>{"use strict";var dD=Mo();dD("flatMap")});var dw=i((A9,vw)=>{"use strict";fw();pw();var mD=ue();vw.exports=mD("Array","flatMap")});var hw=i((N9,mw)=>{"use strict";var hD=U(),yD=dw(),ss=Array.prototype;mw.exports=function(e){var r=e.flatMap;return e===ss||hD(ss,e)&&r===ss.flatMap?yD:r}});var bw=i((M9,yw)=>{"use strict";var bD=hw();yw.exports=bD});var qw=i((j9,gw)=>{"use strict";var gD=bw();gw.exports=gD});var ww=i((L9,xw)=>{"use strict";var qD=qw();xw.exports=qD});var Tw=i(($9,Sw)=>{"use strict";Sw.exports=ww()});var Cw=i((F9,Ew)=>{Ew.exports=Tw()});var kw=i((D9,Ow)=>{"use strict";io();var xD=ue();Ow.exports=xD("Array","concat")});var _w=i((B9,Iw)=>{"use strict";var wD=U(),SD=kw(),cs=Array.prototype;Iw.exports=function(e){var r=e.concat;return e===cs||wD(cs,e)&&r===cs.concat?SD:r}});var Rw=i((G9,Pw)=>{"use strict";var TD=_w();Pw.exports=TD});var Nw=i((U9,Aw)=>{"use strict";var ED=Rw();Aw.exports=ED});var jw=i((H9,Mw)=>{"use strict";var CD=Nw();Mw.exports=CD});var $w=i((W9,Lw)=>{"use strict";Lw.exports=jw()});var ls=i((K9,Fw)=>{Fw.exports=$w()});var Gw=i(()=>{});var Hw=i((m7,Uw)=>{"use strict";Gw();No();var jD=Kr();Uw.exports=jD.f("toPrimitive")});var Kw=i((h7,Ww)=>{"use strict";var LD=Hw();Ww.exports=LD});var Vw=i((y7,zw)=>{"use strict";var $D=Kw();zw.exports=$D});var Jw=i((b7,Yw)=>{"use strict";var FD=Vw();Yw.exports=FD});var Xw=i((g7,Qw)=>{"use strict";Qw.exports=Jw()});var uS=i((D7,oS)=>{"use strict";var BD=L(),GD=Se(),UD=R(),HD=UD("match");oS.exports=function(e){var r;return BD(e)&&((r=e[HD])!==void 0?!!r:GD(e)==="RegExp")}});var cS=i((B7,sS)=>{"use strict";var WD=uS(),KD=TypeError;sS.exports=function(e){if(WD(e))throw new KD("The method doesn't accept regular expressions");return e}});var fS=i((G7,lS)=>{"use strict";var zD=R(),VD=zD("match");lS.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[VD]=!1,"/./"[e](r)}catch{}}return!1}});var dS=i(()=>{"use strict";var YD=q(),JD=ft(),QD=vt().f,XD=Ii(),pS=Je(),ZD=cS(),e3=lr(),r3=fS(),t3=Z(),n3=JD("".slice),a3=Math.min,vS=r3("startsWith"),i3=!t3&&!vS&&!!function(){var e=QD(String.prototype,"startsWith");return e&&!e.writable}();YD({target:"String",proto:!0,forced:!i3&&!vS},{startsWith:function(r){var t=pS(e3(this));ZD(r);var n=XD(a3(arguments.length>1?arguments[1]:void 0,t.length)),a=pS(r);return n3(t,n,n+a.length)===a}})});var hS=i((W7,mS)=>{"use strict";dS();var o3=ue();mS.exports=o3("String","startsWith")});var bS=i((K7,yS)=>{"use strict";var u3=U(),s3=hS(),ds=String.prototype;yS.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===ds||u3(ds,e)&&r===ds.startsWith?s3:r}});var qS=i((z7,gS)=>{"use strict";var c3=bS();gS.exports=c3});var wS=i((V7,xS)=>{"use strict";var l3=qS();xS.exports=l3});var TS=i((Y7,SS)=>{"use strict";var f3=wS();SS.exports=f3});var CS=i((J7,ES)=>{"use strict";ES.exports=TS()});var kS=i((Q7,OS)=>{OS.exports=CS()});var IS=i(()=>{"use strict";var p3=q(),v3=_t().filter,d3=gt(),m3=d3("filter");p3({target:"Array",proto:!0,forced:!m3},{filter:function(r){return v3(this,r,arguments.length>1?arguments[1]:void 0)}})});var PS=i((eY,_S)=>{"use strict";IS();var h3=ue();_S.exports=h3("Array","filter")});var AS=i((rY,RS)=>{"use strict";var y3=U(),b3=PS(),ms=Array.prototype;RS.exports=function(e){var r=e.filter;return e===ms||y3(ms,e)&&r===ms.filter?b3:r}});var MS=i((tY,NS)=>{"use strict";var g3=AS();NS.exports=g3});var LS=i((nY,jS)=>{"use strict";var q3=MS();jS.exports=q3});var FS=i((aY,$S)=>{"use strict";var x3=LS();$S.exports=x3});var BS=i((iY,DS)=>{"use strict";DS.exports=FS()});var US=i((oY,GS)=>{GS.exports=BS()});var i0=i(()=>{"use strict";var I3=q(),_3=W(),ys=Nr(),P3=$u(),ZS=Yo(),R3=X(),e0=L(),A3=Xe(),t0=_(),bs=_3("Reflect","construct"),N3=Object.prototype,M3=[].push,n0=t0(function(){function e(){}return!(bs(function(){},[],e)instanceof e)}),a0=!t0(function(){bs(function(){})}),r0=n0||a0;I3({target:"Reflect",stat:!0,forced:r0,sham:r0},{construct:function(r,t){ZS(r),R3(t);var n=arguments.length<3?r:ZS(arguments[2]);if(a0&&!n0)return bs(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var a=[null];return ys(M3,a,t),new(ys(P3,r,a))}var o=n.prototype,u=A3(e0(o)?o:N3),c=ys(r,u,t);return e0(c)?c:u}})});var u0=i((DY,o0)=>{"use strict";i0();var j3=V();o0.exports=j3.Reflect.construct});var c0=i((BY,s0)=>{"use strict";var L3=u0();s0.exports=L3});var f0=i((GY,l0)=>{"use strict";var $3=c0();l0.exports=$3});var v0=i((UY,p0)=>{"use strict";var F3=f0();p0.exports=F3});var Da=i((HY,d0)=>{"use strict";d0.exports=v0()});var h0=i((WY,m0)=>{m0.exports=Da()});var E0=i((eJ,T0)=>{"use strict";var D3=_();T0.exports=D3(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var k0=i((rJ,O0)=>{"use strict";var B3=_(),G3=L(),U3=Se(),C0=E0(),Ba=Object.isExtensible,H3=B3(function(){Ba(1)});O0.exports=H3||C0?function(r){return!G3(r)||C0&&U3(r)==="ArrayBuffer"?!1:Ba?Ba(r):!0}:Ba});var _0=i((tJ,I0)=>{"use strict";var W3=_();I0.exports=!W3(function(){return Object.isExtensible(Object.preventExtensions({}))})});var Es=i((nJ,A0)=>{"use strict";var K3=q(),z3=A(),V3=Wr(),Y3=L(),ws=K(),J3=te().f,P0=It(),Q3=oo(),Ss=k0(),X3=$r(),Z3=_0(),R0=!1,Ue=X3("meta"),e4=0,Ts=function(e){J3(e,Ue,{value:{objectID:"O"+e4++,weakData:{}}})},r4=function(e,r){if(!Y3(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!ws(e,Ue)){if(!Ss(e))return"F";if(!r)return"E";Ts(e)}return e[Ue].objectID},t4=function(e,r){if(!ws(e,Ue)){if(!Ss(e))return!0;if(!r)return!1;Ts(e)}return e[Ue].weakData},n4=function(e){return Z3&&R0&&Ss(e)&&!ws(e,Ue)&&Ts(e),e},a4=function(){i4.enable=function(){},R0=!0;var e=P0.f,r=z3([].splice),t={};t[Ue]=1,e(t).length&&(P0.f=function(n){for(var a=e(n),o=0,u=a.length;o<u;o++)if(a[o]===Ue){r(a,o,1);break}return a},K3({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:Q3.f}))},i4=A0.exports={enable:a4,fastKey:r4,getWeakData:t4,onFreeze:n4};V3[Ue]=!0});var j0=i((aJ,M0)=>{"use strict";var o4=q(),u4=P(),s4=Es(),c4=_(),l4=Te(),f4=ve(),p4=ca(),v4=N(),d4=L(),m4=cr(),h4=Me(),y4=te().f,b4=_t().forEach,g4=H(),N0=Qe(),q4=N0.set,x4=N0.getterFor;M0.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,a=e.indexOf("Weak")!==-1,o=n?"set":"add",u=u4[e],c=u&&u.prototype,s={},l;if(!g4||!v4(u)||!(a||c.forEach&&!c4(function(){new u().entries().next()})))l=t.getConstructor(r,e,n,o),s4.enable();else{l=r(function(p,d){q4(p4(p,f),{type:e,collection:new u}),m4(d)||f4(d,p[o],{that:p,AS_ENTRIES:n})});var f=l.prototype,v=x4(e);b4(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(p){var d=p==="add"||p==="set";p in c&&!(a&&p==="clear")&&l4(f,p,function(h,m){var x=v(this).collection;if(!d&&a&&!d4(h))return p==="get"?void 0:!1;var y=x[p](h===0?0:h,m);return d?this:y})}),a||y4(f,"size",{configurable:!0,get:function(){return v(this).collection.size}})}return h4(l,e,!1,!0),s[e]=l,o4({global:!0,forced:!0},s),a||t.setStrong(l,e,n),l}});var $0=i((iJ,L0)=>{"use strict";var w4=Ae();L0.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:w4(e,n,r[n],t);return e}});var W0=i((oJ,H0)=>{"use strict";var F0=Xe(),S4=Un(),D0=$0(),T4=Y(),E4=ca(),C4=cr(),O4=ve(),k4=Ln(),Ga=$n(),I4=Vo(),sn=H(),B0=Es().fastKey,U0=Qe(),G0=U0.set,Cs=U0.getterFor;H0.exports={getConstructor:function(e,r,t,n){var a=e(function(l,f){E4(l,o),G0(l,{type:r,index:F0(null),first:null,last:null,size:0}),sn||(l.size=0),C4(f)||O4(f,l[n],{that:l,AS_ENTRIES:t})}),o=a.prototype,u=Cs(r),c=function(l,f,v){var p=u(l),d=s(l,f),h,m;return d?d.value=v:(p.last=d={index:m=B0(f,!0),key:f,value:v,previous:h=p.last,next:null,removed:!1},p.first||(p.first=d),h&&(h.next=d),sn?p.size++:l.size++,m!=="F"&&(p.index[m]=d)),l},s=function(l,f){var v=u(l),p=B0(f),d;if(p!=="F")return v.index[p];for(d=v.first;d;d=d.next)if(d.key===f)return d};return D0(o,{clear:function(){for(var f=this,v=u(f),p=v.first;p;)p.removed=!0,p.previous&&(p.previous=p.previous.next=null),p=p.next;v.first=v.last=null,v.index=F0(null),sn?v.size=0:f.size=0},delete:function(l){var f=this,v=u(f),p=s(f,l);if(p){var d=p.next,h=p.previous;delete v.index[p.index],p.removed=!0,h&&(h.next=d),d&&(d.previous=h),v.first===p&&(v.first=d),v.last===p&&(v.last=h),sn?v.size--:f.size--}return!!p},forEach:function(f){for(var v=u(this),p=T4(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:v.first;)for(p(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!s(this,f)}}),D0(o,t?{get:function(f){var v=s(this,f);return v&&v.value},set:function(f,v){return c(this,f===0?0:f,v)}}:{add:function(f){return c(this,f=f===0?0:f,f)}}),sn&&S4(o,"size",{configurable:!0,get:function(){return u(this).size}}),a},setStrong:function(e,r,t){var n=r+" Iterator",a=Cs(r),o=Cs(n);k4(e,r,function(u,c){G0(this,{type:n,target:u,state:a(u),kind:c,last:null})},function(){for(var u=o(this),c=u.kind,s=u.last;s&&s.removed;)s=s.previous;return!u.target||!(u.last=s=s?s.next:u.state.first)?(u.target=null,Ga(void 0,!0)):Ga(c==="keys"?s.key:c==="values"?s.value:[s.key,s.value],!1)},t?"entries":"values",!t,!0),I4(r)}}});var K0=i(()=>{"use strict";var _4=j0(),P4=W0();_4("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},P4)});var z0=i(()=>{"use strict";K0()});var Y0=i((fJ,V0)=>{"use strict";V0.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,a){return t[e](n,a)}}});var ie=i((pJ,Q0)=>{"use strict";var R4=W(),Ua=Y0(),J0=R4("Map");Q0.exports={Map:J0,set:Ua("set",2),get:Ua("get",1),has:Ua("has",1),remove:Ua("delete",1),proto:J0.prototype}});var Os=i(()=>{"use strict";var A4=q(),N4=A(),M4=D(),j4=lr(),L4=ve(),Ha=ie(),X0=Z(),$4=_(),Z0=Ha.Map,F4=Ha.has,D4=Ha.get,B4=Ha.set,G4=N4([].push),U4=X0||$4(function(){return Z0.groupBy("ab",function(e){return e}).get("a").length!==1});A4({target:"Map",stat:!0,forced:X0||U4},{groupBy:function(r,t){j4(r),M4(t);var n=new Z0,a=0;return L4(r,function(o){var u=t(o,a++);F4(n,u)?G4(D4(n,u),o):B4(n,u,[o])}),n}})});var J=i((mJ,eT)=>{"use strict";var H4=Ye(),W4=TypeError;eT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new W4(H4(e)+" is not a map")}});var Is=i(()=>{"use strict";var K4=q(),z4=J(),ks=ie(),V4=Z(),Y4=ks.get,J4=ks.has,Q4=ks.set;K4({target:"Map",proto:!0,real:!0,forced:V4},{getOrInsert:function(r,t){return J4(z4(this),r)?Y4(this,r):(Q4(this,r,t),t)}})});var Ps=i(()=>{"use strict";var X4=q(),Z4=D(),eB=J(),_s=ie(),rB=Z(),tB=_s.get,nB=_s.has,aB=_s.set;X4({target:"Map",proto:!0,real:!0,forced:rB},{getOrInsertComputed:function(r,t){if(eB(this),Z4(t),nB(this,r))return tB(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return aB(this,r,n),n}})});var tT=i((qJ,rT)=>{"use strict";qr();z0();Os();Is();Ps();kt();hr();var iB=V();rT.exports=iB.Map});var aT=i((xJ,nT)=>{"use strict";var oB=tT();xr();nT.exports=oB});var Rs=i(()=>{"use strict";Is()});var As=i(()=>{"use strict";Ps()});var iT=i(()=>{"use strict";Os()});var uT=i((kJ,oT)=>{"use strict";var uB=aT();Rs();As();iT();oT.exports=uB});var cT=i((IJ,sT)=>{"use strict";var sB=Y(),cB=X(),lB=re(),fB=ve();sT.exports=function(e,r,t){return function(a){var o=lB(a),u=arguments.length,c=u>1?arguments[1]:void 0,s=c!==void 0,l=s?sB(c,u>2?arguments[2]:void 0):void 0,f=new e,v=0;return fB(o,function(p){var d=s?l(p,v++):p;t?r(f,cB(d)[0],d[1]):r(f,d)}),f}}});var fT=i(()=>{"use strict";var pB=q(),lT=ie(),vB=cT();pB({target:"Map",stat:!0,forced:!0},{from:vB(lT.Map,lT.set,!0)})});var vT=i((RJ,pT)=>{"use strict";var dB=X();pT.exports=function(e,r,t){return function(){for(var a=new e,o=arguments.length,u=0;u<o;u++){var c=arguments[u];t?r(a,dB(c)[0],c[1]):r(a,c)}return a}}});var mT=i(()=>{"use strict";var mB=q(),dT=ie(),hB=vT();mB({target:"Map",stat:!0,forced:!0},{of:hB(dT.Map,dT.set,!0)})});var yT=i(()=>{"use strict";var yB=q(),bB=G(),gB=ve(),qB=N(),hT=D(),xB=ie().Map;yB({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=qB(this)?this:xB,a=new n;hT(t);var o=hT(a.set);return gB(r,function(u){bB(o,a,t(u),u)}),a}})});var bT=i(()=>{"use strict";var wB=q(),SB=J(),TB=ie().remove;wB({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=SB(this),t=!0,n,a=0,o=arguments.length;a<o;a++)n=TB(r,arguments[a]),t=t&&n;return!!t}})});var qT=i(()=>{"use strict";var EB=q(),CB=J(),Ns=ie(),OB=Ns.get,kB=Ns.has,gT=Ns.set;EB({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=CB(this),a,o;return kB(n,r)?(a=OB(n,r),"update"in t&&(a=t.update(a,r,n),gT(n,r,a)),a):(o=t.insert(r,n),gT(n,r,o),o)}})});var wT=i((BJ,xT)=>{"use strict";var IB=G();xT.exports=function(e,r,t){for(var n=t?e:e.iterator,a=e.next,o,u;!(o=IB(a,n)).done;)if(u=r(o.value),u!==void 0)return u}});var be=i((GJ,ST)=>{"use strict";var _B=wT();ST.exports=function(e,r,t){return t?_B(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var TT=i(()=>{"use strict";var PB=q(),RB=Y(),AB=J(),NB=be();PB({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=AB(this),n=RB(r,arguments.length>1?arguments[1]:void 0);return NB(t,function(a,o){if(!n(a,o,t))return!1},!0)!==!1}})});var CT=i(()=>{"use strict";var MB=q(),jB=Y(),LB=J(),ET=ie(),$B=be(),FB=ET.Map,DB=ET.set;MB({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=LB(this),n=jB(r,arguments.length>1?arguments[1]:void 0),a=new FB;return $B(t,function(o,u){n(o,u,t)&&DB(a,u,o)}),a}})});var OT=i(()=>{"use strict";var BB=q(),GB=Y(),UB=J(),HB=be();BB({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=UB(this),n=GB(r,arguments.length>1?arguments[1]:void 0),a=HB(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return a&&a.value}})});var kT=i(()=>{"use strict";var WB=q(),KB=Y(),zB=J(),VB=be();WB({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=zB(this),n=KB(r,arguments.length>1?arguments[1]:void 0),a=VB(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return a&&a.key}})});var _T=i((QJ,IT)=>{"use strict";IT.exports=function(e,r){return e===r||e!==e&&r!==r}});var PT=i(()=>{"use strict";var YB=q(),JB=_T(),QB=J(),XB=be();YB({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return XB(QB(this),function(t){if(JB(t,r))return!0},!0)===!0}})});var RT=i(()=>{"use strict";var ZB=q(),e5=J(),r5=be();ZB({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=r5(e5(this),function(n,a){if(n===r)return{key:a}},!0);return t&&t.key}})});var NT=i(()=>{"use strict";var t5=q(),n5=Y(),a5=J(),AT=ie(),i5=be(),o5=AT.Map,u5=AT.set;t5({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=a5(this),n=n5(r,arguments.length>1?arguments[1]:void 0),a=new o5;return i5(t,function(o,u){u5(a,n(o,u,t),o)}),a}})});var jT=i(()=>{"use strict";var s5=q(),c5=Y(),l5=J(),MT=ie(),f5=be(),p5=MT.Map,v5=MT.set;s5({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=l5(this),n=c5(r,arguments.length>1?arguments[1]:void 0),a=new p5;return f5(t,function(o,u){v5(a,u,n(o,u,t))}),a}})});var LT=i(()=>{"use strict";var d5=q(),m5=J(),h5=ve(),y5=ie().set;d5({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=m5(this),n=arguments.length,a=0;a<n;)h5(arguments[a++],function(o,u){y5(t,o,u)},{AS_ENTRIES:!0});return t}})});var $T=i(()=>{"use strict";var b5=q(),g5=D(),q5=J(),x5=be(),w5=TypeError;b5({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=q5(this),n=arguments.length<2,a=n?void 0:arguments[1];if(g5(r),x5(t,function(o,u){n?(n=!1,a=o):a=r(a,o,u,t)}),n)throw new w5("Reduce of empty map with no initial value");return a}})});var FT=i(()=>{"use strict";var S5=q(),T5=Y(),E5=J(),C5=be();S5({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=E5(this),n=T5(r,arguments.length>1?arguments[1]:void 0);return C5(t,function(a,o){if(n(a,o,t))return!0},!0)===!0}})});var BT=i(()=>{"use strict";var O5=q(),DT=D(),k5=J(),Ms=ie(),I5=TypeError,_5=Ms.get,P5=Ms.has,R5=Ms.set;O5({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=k5(this),a=arguments.length;DT(t);var o=P5(n,r);if(!o&&a<3)throw new I5("Updating absent value");var u=o?_5(n,r):DT(a>2?arguments[2]:void 0)(r,n);return R5(n,r,t(u,r,n)),n}})});var Ls=i((dQ,GT)=>{"use strict";var Wa=G(),js=D(),Ka=N(),A5=X(),N5=TypeError;GT.exports=function(r,t){var n=A5(this),a=js(n.get),o=js(n.has),u=js(n.set),c=arguments.length>2?arguments[2]:void 0,s;if(!Ka(t)&&!Ka(c))throw new N5("At least one callback required");return Wa(o,n,r)?(s=Wa(a,n,r),Ka(t)&&(s=t(s),Wa(u,n,r,s))):Ka(c)&&(s=c(),Wa(u,n,r,s)),s}});var UT=i(()=>{"use strict";var M5=q(),j5=Ls();M5({target:"Map",proto:!0,real:!0,forced:!0},{upsert:j5})});var HT=i(()=>{"use strict";var L5=q(),$5=Ls();L5({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:$5})});var KT=i((gQ,WT)=>{"use strict";var F5=uT();fT();mT();yT();bT();qT();TT();CT();OT();kT();PT();Rs();As();RT();NT();jT();LT();$T();FT();BT();UT();HT();WT.exports=F5});var VT=i((qQ,zT)=>{"use strict";zT.exports=KT()});var JT=i(()=>{"use strict";var D5=q(),B5=ft(),G5=Fi().indexOf,U5=os(),$s=B5([].indexOf),YT=!!$s&&1/$s([1],1,-0)<0,H5=YT||!U5("indexOf");D5({target:"Array",proto:!0,forced:H5},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return YT?$s(this,r,t)||0:G5(this,r,t)}})});var XT=i((SQ,QT)=>{"use strict";JT();var W5=ue();QT.exports=W5("Array","indexOf")});var eE=i((TQ,ZT)=>{"use strict";var K5=U(),z5=XT(),Fs=Array.prototype;ZT.exports=function(e){var r=e.indexOf;return e===Fs||K5(Fs,e)&&r===Fs.indexOf?z5:r}});var tE=i((EQ,rE)=>{"use strict";var V5=eE();rE.exports=V5});var aE=i((CQ,nE)=>{"use strict";var Y5=tE();nE.exports=Y5});var oE=i((OQ,iE)=>{"use strict";var J5=aE();iE.exports=J5});var sE=i((kQ,uE)=>{"use strict";uE.exports=oE()});var EE=i(()=>{"use strict";var t6=q(),n6=re(),TE=Rn(),a6=_(),i6=a6(function(){TE(1)});t6({target:"Object",stat:!0,forced:i6},{keys:function(r){return TE(n6(r))}})});var OE=i((AX,CE)=>{"use strict";EE();var o6=V();CE.exports=o6.Object.keys});var IE=i((NX,kE)=>{"use strict";var u6=OE();kE.exports=u6});var PE=i((MX,_E)=>{"use strict";var s6=IE();_E.exports=s6});var AE=i((jX,RE)=>{"use strict";var c6=PE();RE.exports=c6});var ME=i((LX,NE)=>{"use strict";NE.exports=AE()});var LE=i(($X,jE)=>{jE.exports=ME()});var ze="";function ic(e){ze=e.replace(/\/+$/,"")}async function sr(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function oc(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${ze}/comments?${t}`);return await sr(n,"Failed to fetch comments"),(await n.json()).data}async function ni({uri:e,document:r,quote:t,prefix:n,suffix:a,body:o,author:u,parent:c,color:s}){let l={quote:t,prefix:n,suffix:a,body:o,author:u,parent:c};s&&(l.color=s),r?l.document=r:l.uri=e;let f=await fetch(`${ze}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});return await sr(f,"Failed to create comment"),f.json()}async function uc(e,{body:r}){let t=await fetch(`${ze}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:r})});return await sr(t,"Failed to update comment"),t.json()}async function sc(e,r){let t=await fetch(`${ze}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});return await sr(t,"Failed to update comment status"),t.json()}async function cc(e){let r=await fetch(`${ze}/comments/${e}`,{method:"DELETE"});await sr(r,"Failed to delete comment")}async function lc(e,r,t){let n=await fetch(`${ze}/comments/${e}/reactions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({emoji:r,author:t})});return await sr(n,"Failed to add reaction"),n.json()}async function fc(e,r,t){let n=await fetch(`${ze}/comments/${e}/reactions/${encodeURIComponent(r)}?author=${encodeURIComponent(t)}`,{method:"DELETE"});return await sr(n,"Failed to remove reaction"),n.json()}var tF=b(Hr(),1),nF=b(Dn(),1),aF=b(ta(),1),iF=b(na(),1),oF=b(aa(),1);var Au=b(at(),1);function ob(e,r,t,n,a,o,u){try{var c=e[o](u),s=c.value}catch(l){return void t(l)}c.done?r(s):Au.default.resolve(s).then(n,a)}function Cr(e){return function(){var r=this,t=arguments;return new Au.default(function(n,a){var o=e.apply(r,t);function u(s){ob(o,n,a,u,c,"next",s)}function c(s){ob(o,n,a,u,c,"throw",s)}u(void 0)})}}function Ut(e,r){this.v=e,this.k=r}function tr(e){return new Ut(e,0)}var Nu=b(at(),1),hb=b(Ee(),1),yb=b(ga(),1);function Oe(e){return function(){return new Ht(e.apply(this,arguments))}}function Ht(e){var r,t;function n(o,u){try{var c=e[o](u),s=c.value,l=s instanceof Ut;Nu.default.resolve(l?s.v:s).then(function(f){if(l){var v=o==="return"?"return":"next";if(!s.k||f.done)return n(v,f);f=e[v](f).value}a(c.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){a("throw",f)}}function a(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new Nu.default(function(c,s){var l={key:o,arg:u,resolve:c,reject:s,next:null};t?t=t.next=l:(r=t=l,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Ht.prototype[typeof hb.default=="function"&&yb.default||"@@asyncIterator"]=function(){return this},Ht.prototype.next=function(e){return this._invoke("next",e)},Ht.prototype.throw=function(e){return this._invoke("throw",e)},Ht.prototype.return=function(e){return this._invoke("return",e)};var uF=b(ce(),1),sF=b(Bq(),1);function le(e){var r,t=eF(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function eF(e){return"startContainer"in e}function ar(e){if(rF(e))return e;var r=e,t=le(r).createRange();return t.selectNodeContents(r),t}function rF(e){return"startContainer"in e}var Zq=b(Xq(),1);function ex(e){if((0,Zq.default)(e))return e}var vx=b(Ee(),1),dx=b(Go(),1),mx=b(ns(),1);function hx(e,r){var t=e==null?null:typeof vx.default<"u"&&(0,dx.default)(e)||e["@@iterator"];if(t!=null){var n,a,o,u,c=[],s=!0,l=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;s=!1}else for(;!(s=(n=o.call(t)).done)&&((0,mx.default)(c).call(c,n.value),c.length!==r);s=!0);}catch(f){l=!0,a=f}finally{try{if(!s&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(l)throw a}}return c}}var yx=b(Ri(),1),bx=b(ao(),1);function Na(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function as(e,r){if(e){var t;if(typeof e=="string")return Na(e,r);var n=(0,yx.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,bx.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Na(e,r):void 0}}function gx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Be(e,r){return ex(e)||hx(e,r)||as(e,r)||gx()}var qx=b(Ee(),1),xx=b(ga(),1),wx=b(Xt(),1),tn=b(at(),1);function ot(e){var r,t,n,a=2;for(typeof qx.default<"u"&&(t=xx.default,n=wx.default);a--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Ma(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Ma(e){function r(t){if(Object(t)!==t)return tn.default.reject(new TypeError(t+" is not an object."));var n=t.done;return tn.default.resolve(t.value).then(function(a){return{value:a,done:n}})}return Ma=function(n){this.s=n,this.n=n.next},Ma.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var a=this.s.return;return a===void 0?tn.default.resolve({value:n,done:!0}):r(a.apply(this.s,arguments))},throw:function(n){var a=this.s.return;return a===void 0?tn.default.reject(n):r(a.apply(this.s,arguments))}},new Ma(e)}var MD=b(ce(),1);var ID=b(ce(),1),_D=b(Lx(),1),PD=b(Fx(),1),RD=b(uw(),1),AD=b(Cw(),1),ND=b(ls(),1);var Gs=b(ce(),1);var k3=b(ce(),1);var ps=b(ce(),1);function nn(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function Dw(e,r){return nn(e.startChunk,r.startChunk)&&nn(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function Or(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var fs=b(zt(),1);var an=b(Ee(),1),Bw=b(Xt(),1);function Ge(e){"@babel/helpers - typeof";return Ge=typeof an.default=="function"&&typeof Bw.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof an.default=="function"&&r.constructor===an.default&&r!==an.default.prototype?"symbol":typeof r},Ge(e)}var Zw=b(Xw(),1);function eS(e,r){if(Ge(e)!="object"||!e)return e;var t=e[Zw.default];if(t!==void 0){var n=t.call(e,r||"default");if(Ge(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function ja(e){var r=eS(e,"string");return Ge(r)=="symbol"?r:r+""}function rS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,fs.default)(e,ja(n.key),n)}}function on(e,r,t){return r&&rS(e.prototype,r),t&&rS(e,t),(0,fs.default)(e,"prototype",{writable:!1}),e}var tS=b(zt(),1);function kr(e,r,t){return(r=ja(r))in e?(0,tS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var nS=b(Hr(),1);var La="Iterator exhausted before seek ended.",un=function(){function e(r){Or(this,e),this.chunker=r,kr(this,"currentChunkPosition",0),kr(this,"offsetInChunk",0),this.seekTo(0)}return on(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,a)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!nn(this.currentChunk,n);){var v=this._readToPreviousChunk(),p=Be(v,2),d=p[0],h=p[1];if(t&&(u=d+u),h===null)throw new RangeError(La)}else for(;!nn(this.currentChunk,n);){var c=this._readToNextChunk(),s=Be(c,2),l=s[0],f=s[1];if(t&&(u+=l),f===null)throw new RangeError(La)}var m=this.currentChunkPosition+a;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,nS.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var c=this.currentChunkPosition+this.currentChunk.data.length;if(c<=n){var s=this._readToNextChunk(),l=Be(s,2),f=l[0],v=l[1];if(t&&(u+=f),v===null){if(this.position===n||o)break;throw new RangeError(La)}}else{var p=a?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,p)),this.offsetInChunk=p,a&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=a?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var h=this._readToPreviousChunk(),m=Be(h,2),x=m[0],y=m[1];if(t&&(u=x+u),y===null){if(o)break;throw new RangeError(La)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,a=this.chunker.nextChunk();return a!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,a]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function iS(e,r){return vs.apply(this,arguments)}function vs(){return vs=Cr(ps.default.mark(function e(r,t){var n,a,o,u,c,s,l,f,v,p,d,h,m,x,y,g,O,k,w,T,S,C,j=arguments;return ps.default.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:n=j.length>2&&j[2]!==void 0?j[2]:{},a=n.minimalContext,o=a===void 0?!1:a,u=n.minimumQuoteLength,c=u===void 0?0:u,s=n.maxWordLength,l=s===void 0?50:s,f=new un(t()),v=new un(t()),f.seekToChunk(r.startChunk,r.startIndex),p=f.readToChunk(r.endChunk,r.endIndex),d="",h="",m=function(){return d.length+p.length+h.length},m()<c&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),x=Math.floor((c-m())/2),d=f.read(-x,!1,!0)+d,m()<c&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),y=c-m(),h=h+f.read(y,!1,!0),m()<c&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),g=c-m(),d=f.read(-g,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=$a(f,l,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+$a(f,l,!1));case 11:return O={type:"TextQuoteSelector",exact:p,prefix:d,suffix:h},k=Fa(O)(t()),I.next=16,k.next();case 16:if(w=I.sent,!(!w.done&&Dw(w.value,r))){I.next=21;break}return I.next=20,k.next();case 20:w=I.sent;case 21:if(!w.done){I.next=23;break}return I.abrupt("return",O);case 23:if(T=w.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),v.seekToChunk(T.startChunk,T.startIndex-d.length),S=aS(f,v,!0),S!==void 0&&!o&&(S=$a(f,l,!0)+S),f.seekToChunk(r.endChunk,r.endIndex+h.length),v.seekToChunk(T.endChunk,T.endIndex+h.length),C=aS(f,v,!1),C!==void 0&&!o&&(C=C+$a(f,l,!1)),!o){I.next=44;break}if(!(S!==void 0&&(C===void 0||S.length<=C.length))){I.next=37;break}d=S+d,I.next=42;break;case 37:if(C===void 0){I.next=41;break}h=h+C,I.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:I.next=46;break;case 44:S!==void 0&&(d=S+d),C!==void 0&&(h=h+C);case 46:I.next=11;break;case 48:case"end":return I.stop()}},e)})),vs.apply(this,arguments)}function aS(e,r,t){for(var n="";;){var a=void 0;try{a=e.read(t?-1:1)}catch{return}n=t?a+n:n+a;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(a!==o)return n}}function $a(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var a=void 0;try{a=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(DD(a)){e.seekBy(t?1:-1);break}n=t?a+n:n+a}return n}function DD(e){return/^\s+$/.test(e)}var KS=b(Hr(),1),zS=b(Dn(),1),VS=b(ta(),1),YS=b(na(),1),JS=b(aa(),1);var hs=b(ce(),1),QS=b(kS(),1),XS=b(US(),1);function HS(e,r){var t;if(typeof VS.default>"u"||(0,YS.default)(e)==null){if(Array.isArray(e)||(t=w3(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,c;return{s:function(){t=(0,JS.default)(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){u=!0,c=l},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw c}}}}function w3(e,r){var t;if(e){if(typeof e=="string")return WS(e,r);var n=(0,KS.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,zS.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return WS(e,r)}}function WS(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Fa(e){return function(){var r=Oe(hs.default.mark(function n(a){var o,u,c,s,l,f,v,p,d,h,m,x,y,g,O,k,w,T,S,C,j,xe,I,ee,we,Q,F;return hs.default.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:o=e.exact,u=e.prefix||"",c=e.suffix||"",s=u+o+c,l=[],f=!0;case 6:v=a.currentChunk,p=v.data,d=[],h=HS(l),E.prev=10,h.s();case 12:if((m=h.n()).done){E.next=27;break}if(x=m.value,y=x.charactersMatched,x.endChunk===void 0&&(g=u.length+o.length-y,g<=p.length&&(x.endChunk=v,x.endIndex=g)),x.startChunk===void 0&&(O=u.length-y,(O<p.length||x.endChunk!==void 0)&&(x.startChunk=v,x.startIndex=O)),k=s.length-y,!(k<=p.length)){E.next=24;break}if(!(0,QS.default)(p).call(p,s.substring(y))){E.next=22;break}return E.next=22,x;case 22:E.next=25;break;case 24:p===s.substring(y,y+p.length)&&(x.charactersMatched+=p.length,d.push(x));case 25:E.next=12;break;case 27:E.next=32;break;case 29:E.prev=29,E.t0=E.catch(10),h.e(E.t0);case 32:return E.prev=32,h.f(),E.finish(32);case 35:if(l=d,!(s.length<=p.length)){E.next=49;break}w=0;case 38:if(!(w<=p.length)){E.next=49;break}if(T=p.indexOf(s,w),T!==-1){E.next=42;break}return E.abrupt("break",49);case 42:if(w=T+1,!(T===0&&s.length===0&&!f)){E.next=45;break}return E.abrupt("continue",38);case 45:return E.next=47,{startChunk:v,startIndex:T+u.length,endChunk:v,endIndex:T+u.length+o.length};case 47:E.next=38;break;case 49:for(S=[],C=Math.max(p.length-s.length+1,0),j=function(Ke){var nc=p[Ke];S=(0,XS.default)(S).call(S,function(dC){return nc===s[Ke-dC]}),nc===s[0]&&S.push(Ke)},xe=C;xe<p.length;xe++)j(xe);I=HS(S);try{for(I.s();!(ee=I.n()).done;)we=ee.value,Q=p.length-we,F={charactersMatched:Q},Q>=u.length+o.length&&(F.endChunk=v,F.endIndex=we+u.length+o.length),(Q>u.length||F.endChunk!==void 0)&&(F.startChunk=v,F.startIndex=we+u.length),l.push(F)}catch(Rr){I.e(Rr)}finally{I.f()}f=!1;case 56:if(a.nextChunk()!==null){E.next=6;break}case 57:case"end":return E.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var C3=b(ce(),1);var S3=b(Hr(),1),T3=b(ls(),1);var O3=b(ce(),1);var ln=b(h0(),1);var b0=b(xa(),1),g0=b(zt(),1);var gs=b(wa(),1),y0=b(Kt(),1);function ir(e,r){var t;return ir=gs.default?(0,y0.default)(t=gs.default).call(t):function(n,a){return n.__proto__=a,n},ir(e,r)}function qs(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,b0.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,g0.default)(e,"prototype",{writable:!1}),r&&ir(e,r)}function q0(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x0(e,r){if(r&&(Ge(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return q0(e)}var w0=b(wa(),1),S0=b(Kt(),1),xs=b(qa(),1);function Ir(e){var r;return Ir=w0.default?(0,S0.default)(r=xs.default).call(r):function(t){return t.__proto__||(0,xs.default)(t)},Ir(e)}var Bs=b(VT(),1),hE=b(xa(),1);var cE=b(sE(),1);function lE(e){try{var r;return(0,cE.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var pE=b(Da(),1),vE=b(ns(),1),dE=b(Kt(),1);var fE=b(Da(),1);function Ds(){try{var e=!Boolean.prototype.valueOf.call((0,fE.default)(Boolean,[],function(){}))}catch{}return(Ds=function(){return!!e})()}function mE(e,r,t){if(Ds())return pE.default.apply(null,arguments);var n=[null];(0,vE.default)(n).apply(n,r);var a=new((0,dE.default)(e).apply(e,n));return t&&ir(a,t.prototype),a}function cn(e){var r=typeof Bs.default=="function"?new Bs.default:void 0;return cn=function(n){if(n===null||!lE(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,a)}function a(){return mE(n,arguments,Ir(this).constructor)}return a.prototype=(0,hE.default)(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),ir(a,n)},cn(e)}function gE(e,r){var t=le(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),a=yE(e.startContainer,e.startOffset),o=Be(a,2),u=o[0],c=o[1];for(n.currentNode=u;c===u.length&&n.nextNode();)u=n.currentNode,c=0;e.setStart(u,c);var s=yE(e.endContainer,e.endOffset),l=Be(s,2),f=l[0],v=l[1];for(n.currentNode=f;v===0&&n.previousNode();)f=n.currentNode,v=f.length;return e.setEnd(f,v),e}function yE(e,r){var t;if(bE(e))return[e,r];var n;if(Q5(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(bE(n))return[n,0];var a=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=a.createTreeWalker(a,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function bE(e){return e.nodeType===Node.TEXT_NODE}function Q5(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function xE(e){var r=X5();return function(){var n=Ir(e),a;if(r){var o=Ir(this).constructor;a=(0,ln.default)(n,arguments,o)}else a=n.apply(this,arguments);return x0(this,a)}}function X5(){if(typeof Reflect>"u"||!ln.default||ln.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,ln.default)(Boolean,[],function(){})),!0}catch{return!1}}var za=function(e){qs(t,e);var r=xE(t);function t(n){return Or(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(cn(TypeError)),Z5=function(e){qs(t,e);var r=xE(t);function t(n){return Or(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(cn(TypeError)),_r=function(){function e(r){var t=this;if(Or(this,e),kr(this,"scope",void 0),kr(this,"iter",void 0),this.scope=ar(r),this.iter=le(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!qE(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new za}}return on(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!qE(t))throw new za;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new Z5;var n=t===this.scope.startContainer?this.scope.startOffset:0,a=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:a,data:t.data.substring(n,a),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=gE(t,this.scope),a=this.nodeToChunk(n.startContainer),o=n.startOffset-a.startOffset,u=this.nodeToChunk(n.endContainer),c=n.endOffset-u.startOffset;return{startChunk:a,startIndex:o,endChunk:u,endIndex:c}}},{key:"chunkRangeToRange",value:function(t){var n=le(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function qE(e){return e.nodeType===Node.TEXT_NODE}function wE(e,r){return Us.apply(this,arguments)}function Us(){return Us=Cr(Gs.default.mark(function e(r,t){var n,a,o,u=arguments;return Gs.default.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},a=ar(t??le(r)),o=new _r(a),s.next=5,iS(o.rangeToChunkRange(r),function(){return new _r(a)},n);case 5:return s.abrupt("return",s.sent);case 6:case"end":return s.stop()}},e)})),Us.apply(this,arguments)}var Hs=b(ce(),1);function SE(e){var r=Fa(e);return function(){var t=Oe(Hs.default.mark(function a(o){var u,c,s,l,f,v,p,d;return Hs.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new _r(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof za)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:c=!0,s=!1,m.prev=13,f=ot(r(u));case 15:return m.next=17,tr(f.next());case 17:return v=m.sent,c=v.done,m.next=21,tr(v.value);case 21:if(p=m.sent,c){m.next=29;break}return d=p,m.next=26,u.chunkRangeToRange(d);case 26:c=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),s=!0,l=m.t1;case 35:if(m.prev=35,m.prev=36,!(!c&&f.return!=null)){m.next=40;break}return m.next=40,tr(f.return());case 40:if(m.prev=40,!s){m.next=43;break}throw l;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},a,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(a){return t.apply(this,arguments)}return n}()}var e6=b(ce(),1);var r6=b(ce(),1);var l6=b(LE(),1),f6=b(Hr(),1),p6=b(Dn(),1),v6=b(ta(),1),d6=b(na(),1),m6=b(aa(),1);async function $E(e,r){let t=await wE(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function Va(e,r){let t=SE({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var Ya={yellow:"#ffd400",red:"#ff6b6b",green:"#51cf66",blue:"#339af0",purple:"#9775fa",pink:"#f06595",orange:"#ff922b",teal:"#20c997"},fn="#ffd400",h6=/^#[0-9a-fA-F]{6}$/;function Ja(e){if(!e||typeof e!="string")return null;let r=e.trim().toLowerCase();return Ya[r]?Ya[r]:h6.test(r)?r:null}function Qa(e,r){let t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16);return`rgba(${t}, ${n}, ${a}, ${r})`}var ut="fb-highlight",FE="fb-highlight-active";var Xa=new Map,pn=null;function BE(e){pn=e}function Za(e,r,t){let n=Ja(t)||fn;Xa.set(r,n);let a=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let o=DE(e,r,n);a.push(o)}else{let o=b6(e);for(let u=0;u<o.length;u++){let c=o[u],s=document.createRange();c===e.startContainer?(s.setStart(c,e.startOffset),s.setEnd(c,c.textContent.length)):c===e.endContainer?(s.setStart(c,0),s.setEnd(c,e.endOffset)):s.selectNodeContents(c),s.collapsed||a.push(DE(s,r,n))}}return a}function DE(e,r,t){let n=e.commonAncestorContainer;for(;n&&n.nodeType!==Node.ELEMENT_NODE;)n=n.parentNode;let a=n,o=!1,u=null;for(;a;){if(a.tagName==="foreignObject"){o=!1;break}a.tagName==="text"&&a instanceof SVGElement&&(o=!0),a.tagName==="svg"&&(u=a),a=a.parentElement}if(o&&u)return y6(e,r,u,t);let c=document.createElement("mark");c.className=ut,c.dataset.commentId=r,c.style.backgroundColor=Qa(t,.35),c.style.cursor="pointer",c.style.borderRadius="2px",c.addEventListener("click",()=>{pn&&pn(r)});try{e.surroundContents(c)}catch(s){return console.warn("[feedback-layer] Failed to create highlight:",s),null}return c}function y6(e,r,t,n){try{let a=e.getClientRects();if(a.length===0)return null;let o="http://www.w3.org/2000/svg",u=t.getScreenCTM();if(!u)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let c=e.commonAncestorContainer;for(;c&&c.nodeType!==Node.ELEMENT_NODE;)c=c.parentNode;let s=c,l=null;for(;s&&s!==t;){if(s.tagName==="text"){l=s.parentElement;break}s=s.parentElement}let f=l||t,v=u;f!==t&&f.getScreenCTM&&(v=f.getScreenCTM());let p=document.createElementNS(o,"g");p.setAttribute("class",ut),p.setAttribute("data-comment-id",r),p.style.cursor="pointer";for(let y=0;y<a.length;y++){let g=a[y],O=document.createElementNS(o,"rect"),k=t.createSVGPoint();k.x=g.left,k.y=g.top;let w=k.matrixTransform(v.inverse()),T=g.width/v.a,S=g.height/v.d;O.setAttribute("x",w.x),O.setAttribute("y",w.y),O.setAttribute("width",T),O.setAttribute("height",S),O.setAttribute("fill",n),O.setAttribute("fill-opacity","0.35"),O.setAttribute("rx","2"),O.setAttribute("ry","2"),O.style.pointerEvents="none",p.appendChild(O)}f&&f!==t?f.appendChild(p):t.appendChild(p);let d=e.commonAncestorContainer;for(;d&&d.nodeType!==Node.ELEMENT_NODE;)d=d.parentNode;let h=new Set,m=d;for(;m&&m!==t;)m.tagName==="text"&&m instanceof SVGElement&&(h.add(m),m.querySelectorAll("tspan").forEach(g=>h.add(g))),m=m.parentElement;let x=y=>{y.preventDefault(),y.stopPropagation(),pn&&pn(r)};return h.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",x),y.dataset.fbCommentId=r}),p}catch(a){return console.warn("[feedback-layer] Failed to create SVG highlight:",a),null}}function Ws(e){Xa.delete(e),document.querySelectorAll(`.${ut}[data-comment-id="${e}"]`).forEach(n=>{let a=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)a.removeChild(n);else{for(;n.firstChild;)a.insertBefore(n.firstChild,n);a.removeChild(n),a.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function GE(){Xa.clear(),document.querySelectorAll(`.${ut}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function vn(e){document.querySelectorAll(`.${ut}`).forEach(r=>{let t=r.dataset.commentId,n=t===e,a=Xa.get(t)||fn,o=Qa(a,.55),u=Qa(a,.35);n?r.classList.add(FE):r.classList.remove(FE),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(s=>{s.setAttribute("fill",a),s.setAttribute("fill-opacity",n?"0.55":"0.35")}):r.style.backgroundColor=n?o:u})}function Ks(e){let r=document.querySelector(`.${ut}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function b6(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let a=document.createRange();return a.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,a)<0&&e.compareBoundaryPoints(Range.START_TO_END,a)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function UE(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,a)=>{let o=[`**${a+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let c of u)o.push(`  - **[${c.author}]** (reply): ${c.body}`);return o.join(`
`)}).join(`

`)}function HE(e,r){let t=UE(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(a=>!a.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function or(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var g6=`
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
`,WE=null,KE=null;function zE(e,r){KE=e,WE=r,q6()}function q6(){let e=document.createElement("style");e.textContent=g6,document.head.appendChild(e)}function VE(){let e=WE(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let a=document.createElement("button");a.className="hf-modal-close",a.textContent="\xD7",a.addEventListener("click",()=>r.remove()),n.appendChild(a);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",v=>{v.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let c=document.querySelector(KE.contentSelector||"body").innerHTML,s=HE(c,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${s.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${or(s)}</textarea>
  `;let l=document.createElement("button");l.className="hf-btn hf-btn-primary",l.textContent="Copy Prompt",l.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(s),l.textContent="Copied!"}catch{l.textContent="Copy failed"}setTimeout(()=>l.textContent="Copy Prompt",2e3)}),u.appendChild(l);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function YE(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function JE(e,r){return e.length>r?e.slice(0,r)+"...":e}function QE(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var dn=null;function ZE(e){dn=document.createElement("div"),dn.className="fb-toast-container",e.appendChild(dn)}function ur(e,r="success"){if(!dn)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>XE(t)),t.appendChild(o)}dn.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>XE(t),r==="error"?8e3:4e3)}function XE(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}function eC(e,r){return r<=0?0:(e%r+r)%r}var x6=320,nC="feedback-layer-commenter",B=null,oe=null,ge=null,zs=null,aC=null,Vs=null,Ys=null,Js=null,Qs=null,yn=null,iC=null,Xs=!1,oC=[],uC=new Set,Ie=-1,mn=null,rC=!1;function w6(){rC||(rC=!0,R6())}function He(){return localStorage.getItem(nC)||""}function sC({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:a,onReaction:o,defaultColor:u}){aC=e,Vs=r,Ys=t,Js=n,Qs=a,yn=o,iC=u||null,w6(),B=document.createElement("div"),B.className="fb-sidebar fb-sidebar-collapsed",B.setAttribute("role","complementary"),B.setAttribute("aria-label","Feedback sidebar"),B.innerHTML=`
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
  `;let c=document.createElement("button");c.className="fb-sidebar-tab",c.textContent="Feedback",c.addEventListener("click",()=>st()),document.body.appendChild(c),document.body.appendChild(B),ZE(B),oe=B.querySelector(".fb-comment-list"),oe.setAttribute("role","list"),ge=B.querySelector(".fb-form-section");let s=B.querySelector(".fb-name-input");s.addEventListener("input",()=>{localStorage.setItem(nC,s.value.trim())}),B.querySelector(".fb-ai-btn").addEventListener("click",()=>VE()),B.querySelector(".fb-shortcuts-btn").addEventListener("click",()=>lC()),B.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>Zs());let p=B.querySelector(".fb-show-resolved-cb");p.addEventListener("change",()=>{Xs=p.checked,We(oC,uC)}),document.addEventListener("keydown",T6)}function st(){B.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden"),C6(),oe?.querySelector(".fb-thread .fb-cmt-card")&&ei(0)}function Zs(){B.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden"),fC(),Ie=-1,document.body.focus()}function cC(){let e=document.activeElement;if(!e)return!1;let r=e.tagName;return r==="TEXTAREA"||r==="INPUT"||r==="SELECT"||e.isContentEditable}function hn(){return oe?Array.from(oe.querySelectorAll(".fb-thread > .fb-cmt-card:first-child")):[]}function ei(e){let r=hn();if(r.length===0)return;e=eC(e,r.length),Ie=e,oe.querySelectorAll(".fb-cmt-card").forEach(a=>a.classList.remove("fb-cmt-active"));let t=r[e];t.classList.add("fb-cmt-active"),t.scrollIntoView({behavior:"smooth",block:"nearest"});let n=t.closest(".fb-thread");n?.dataset.commentId&&(vn(n.dataset.commentId),Ks(n.dataset.commentId))}function S6(e){if(B.classList.contains("fb-sidebar-collapsed"))return;let r=e.key;if(r==="Escape"){e.preventDefault(),Zs();return}if(!cC()){if(r==="Enter"){let t=hn();if(Ie>=0&&Ie<t.length){e.preventDefault();let a=t[Ie].closest(".fb-thread")?.querySelector(".fb-reply-btn");a&&a.click()}return}if(r==="j"){if(e.preventDefault(),hn().length===0)return;let n=Ie<0?0:Ie+1;ei(n);return}if(r==="k"){e.preventDefault();let t=hn();if(t.length===0)return;let n=Ie<0?t.length-1:Ie-1;ei(n);return}if(r==="?"){e.preventDefault(),lC();return}}}function lC(){let e=document.querySelector(".fb-shortcuts-overlay");if(e){e.remove();return}let r=document.createElement("div");r.className="fb-shortcuts-overlay";let t=document.createElement("div");t.className="fb-shortcuts-modal",t.innerHTML=`
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
  `;let n=()=>r.remove();t.querySelector(".fb-shortcuts-close").addEventListener("click",n),r.addEventListener("click",a=>{a.target===r&&n()}),r.addEventListener("keydown",a=>{a.key==="Escape"&&(a.stopPropagation(),n())}),r.appendChild(t),document.body.appendChild(r),t.querySelector(".fb-shortcuts-close").focus()}function T6(e){cC()||e.key==="s"&&(e.preventDefault(),E6())}function E6(){B.classList.contains("fb-sidebar-collapsed")?st():Zs()}function C6(){fC(),mn=S6,document.addEventListener("keydown",mn)}function fC(){mn&&(document.removeEventListener("keydown",mn),mn=null)}function pC(e){if(st(),!He()){let u=B.querySelector(".fb-name-input");u.classList.add("fb-name-input-error"),setTimeout(()=>u.classList.remove("fb-name-input-error"),2e3)}zs=e,ge.style.display="";let r=Object.entries(Ya),t=iC||fn;ge.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${or(JE(e,120))}"</div>
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
  `;let n=t;ge.querySelectorAll(".fb-color-swatch").forEach(u=>{u.addEventListener("click",c=>{c.preventDefault(),ge.querySelectorAll(".fb-color-swatch").forEach(s=>s.classList.remove("fb-color-swatch-active")),u.classList.add("fb-color-swatch-active"),n=u.dataset.color})});let a=ge.querySelector(".fb-form-textarea");a.focus();let o=()=>{if(!He()){let c=B.querySelector(".fb-name-input");c.focus(),c.style.outline="2px solid var(--remarq-danger)",setTimeout(()=>c.style.outline="",2e3);return}let u=a.value.trim();u&&(aC({comment:u,commenter:He(),color:n}),ge.style.display="none",zs=null)};ge.querySelector(".fb-submit-btn").addEventListener("click",o),a.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),ge.querySelector(".fb-cancel-btn").addEventListener("click",()=>{ge.style.display="none",zs=null}),ge.scrollIntoView({behavior:"smooth",block:"nearest"})}function We(e,r=new Set,t=new Map){oC=e,uC=r,Ie=-1,oe.innerHTML="";let{topLevel:n,repliesByParent:a}=YE(e),o=n.slice().sort((l,f)=>{let v=t.get(l.id),p=t.get(f.id);return!v||!p?0:v.compareBoundaryPoints(Range.START_TO_START,p)}),u=o.filter(l=>{let f=r.has(l.id),v=l.status==="closed";return f||v&&Xs}),c=Xs?u:u.filter(l=>l.status!=="closed");if(o.length===0){oe.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let s=o.filter(l=>!r.has(l.id)&&l.status!=="closed").length;if(c.length===0){s>0?oe.innerHTML=`<div class="fb-empty">
        ${u.length} comment(s) resolved.
        ${s>0?`<br>${s} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:oe.innerHTML=`<div class="fb-empty">All ${o.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let l of c){let f=document.createElement("div");f.className="fb-thread",f.setAttribute("role","listitem"),f.setAttribute("tabindex","0"),f.dataset.commentId=l.id,f.appendChild(tC(l,!1));let v=a.get(l.id)||[];for(let d of v)f.appendChild(tC(d,!0));let p=document.createElement("button");p.className="fb-reply-btn",p.textContent="Reply",p.addEventListener("click",d=>{d.stopPropagation(),_6(l.id,f,p)}),f.appendChild(p),f.addEventListener("focus",()=>{let h=hn().indexOf(f.querySelector(".fb-cmt-card"));h>=0&&ei(h)}),oe.appendChild(f)}}function tC(e,r){let t=e.status==="closed",n=document.createElement("div");n.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":""),n.dataset.id=e.id,n.innerHTML=`
    <div class="fb-cmt-body">${or(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${or(e.author)}</span>
      <span class="fb-cmt-time">${QE(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
    <div class="fb-reactions"></div>
  `;let a=n.querySelector(".fb-reactions");return k6(a,e),r||(n.addEventListener("click",o=>{o.target.closest(".fb-cmt-delete")||o.target.closest(".fb-cmt-resolve")||o.target.closest(".fb-cmt-edit")||o.target.closest(".fb-reactions")||(vn(e.id),Ks(e.id),oe.querySelectorAll(".fb-cmt-card").forEach(u=>u.classList.remove("fb-cmt-active")),n.classList.add("fb-cmt-active"))}),n.querySelector(".fb-cmt-resolve").addEventListener("click",o=>{o.stopPropagation(),Ys&&Ys(e.id,!t)})),n.querySelector(".fb-cmt-edit").addEventListener("click",o=>{o.stopPropagation(),P6(e,n)}),n.querySelector(".fb-cmt-delete").addEventListener("click",o=>{o.stopPropagation(),Vs&&Vs(e.id)}),n}var ec={"\u{1F44D}":"Like","\u2764\uFE0F":"Love","\u{1F440}":"Seen","\u{1F389}":"Celebrate","\u{1F914}":"Question","\u{1F602}":"Funny"},O6=Object.keys(ec);function k6(e,r){let t=r.reactions||[],n=He();for(let o of t){let u=document.createElement("button");u.className="fb-reaction-badge",n&&o.authors.includes(n)&&u.classList.add("fb-reaction-mine");let s=ec[o.emoji];u.innerHTML=`${o.emoji}<span class="fb-reaction-count">${o.count}</span>`,u.title=(s?s+": ":"")+o.authors.join(", "),u.addEventListener("click",l=>{l.stopPropagation(),yn&&yn(r.id,o.emoji)}),e.appendChild(u)}let a=document.createElement("button");a.className="fb-reaction-add",a.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><circle cx="9" cy="10" r="0.5" fill="currentColor"/><circle cx="15" cy="10" r="0.5" fill="currentColor"/></svg>',a.title="Add reaction",a.addEventListener("click",o=>{o.stopPropagation(),I6(e,r,a)}),e.appendChild(a)}function I6(e,r,t){let n=e.querySelector(".fb-emoji-picker");if(n){n.remove();return}let a=document.createElement("div");a.className="fb-emoji-picker";for(let u of O6){let c=ec[u],s=document.createElement("button");s.className="fb-emoji-option",s.textContent=u,s.title=c,s.addEventListener("click",l=>{l.stopPropagation(),a.remove(),yn&&yn(r.id,u)}),a.appendChild(s)}e.insertBefore(a,t.nextSibling);let o=u=>{!a.contains(u.target)&&u.target!==t&&(a.remove(),document.removeEventListener("click",o,!0))};setTimeout(()=>document.addEventListener("click",o,!0),0)}function _6(e,r,t){st();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let a=document.createElement("div");a.className="fb-reply-form",a.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!He()){let s=B.querySelector(".fb-name-input");s.focus(),s.style.outline="2px solid var(--remarq-danger)",setTimeout(()=>s.style.outline="",2e3);return}let c=a.querySelector("textarea").value.trim();c&&(Js&&Js({parent_id:e,comment:c,commenter:He()}),a.remove(),t.style.display="")};a.querySelector(".fb-reply-submit").addEventListener("click",o);let u=a.querySelector("textarea");u.addEventListener("keydown",c=>{c.key==="Enter"&&(c.metaKey||c.ctrlKey)&&(c.preventDefault(),o())}),a.querySelector(".fb-reply-cancel").addEventListener("click",()=>{a.remove(),t.style.display=""}),r.insertBefore(a,t),u.focus()}function P6(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${or(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let a=t.querySelector("textarea");a.focus(),a.setSelectionRange(a.value.length,a.value.length);let o=()=>{let u=a.value.trim();u&&Qs&&Qs(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),a.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function vC(e){let r=oe.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(oe.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function R6(){let e=document.createElement("style");e.textContent=`
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
      width: ${x6}px;
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
  `,document.head.appendChild(e)}var ct=null,ri=null,ti=null,tc=null,$=[],Pr=null,qe=null,de=new Set,_e=new Map;function A6(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null,theme:e?.dataset.theme||"auto",defaultColor:e?.dataset.defaultColor||null};ic(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{ct=document.querySelector(r.contentSelector)||document.body,ri=r.documentUri||window.location.origin+window.location.pathname,ti=r.documentId||null,tc=Ja(r.defaultColor)||null,document.documentElement.dataset.remarqTheme=r.theme,sC({onSubmit:$6,onDelete:U6,onResolve:F6,onReply:D6,onEdit:B6,onReaction:G6,defaultColor:tc}),BE(a=>{st(),vC(a),vn(a)}),j6(),await t(),N6(),zE(r,()=>$)}catch(a){console.error("[feedback-layer] Boot failed:",a)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function N6(){try{$=await oc(ri,ti),de=await M6($),We($,de,_e)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),ur(`Failed to load comments: ${e.message}`,"error")}}async function M6(e){GE();let r=new Set;_e.clear();for(let t of e)if(!t.parent)try{let n=await Va({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ct);n&&t.status!=="closed"?(Za(n,t.id,t.color),r.add(t.id),_e.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),_e.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function j6(){document.addEventListener("mouseup",rc),document.addEventListener("keyup",rc),document.addEventListener("touchend",rc)}function rc(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){bn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){bn();return}if(!ct.contains(r.commonAncestorContainer)){bn();return}L6(r)},10)}function L6(e){bn();let r=e.getBoundingClientRect();qe=document.createElement("button"),qe.className="fb-annotate-tooltip",qe.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',qe.style.top=window.scrollY+r.bottom+8+"px",qe.style.left=window.scrollX+r.left+r.width/2-40+"px";let t=async n=>{n.preventDefault(),n.stopPropagation();let a=window.getSelection();if(!a||a.isCollapsed)return;let o=a.getRangeAt(0);try{Pr=await $E(o,ct),pC(Pr.exact)}catch(u){console.error("[feedback-layer] Failed to create selector:",u)}bn()};qe.addEventListener("mousedown",t),qe.addEventListener("touchstart",t),document.body.appendChild(qe)}function bn(){qe&&(qe.remove(),qe=null)}async function $6({comment:e,commenter:r,color:t}){if(!Pr)return;let n=t||tc||null;try{let a=await ni({uri:ri,document:ti,quote:Pr.exact,prefix:Pr.prefix,suffix:Pr.suffix,body:e,author:r,color:n});$.push(a);let o=await Va({exact:a.quote,prefix:a.prefix,suffix:a.suffix},ct);o&&(Za(o,a.id,a.color),de.add(a.id)),We($,de,_e),window.getSelection().removeAllRanges()}catch(a){console.error("[feedback-layer] Failed to create comment:",a),ur(`Failed to save comment: ${a.message}`,"error")}Pr=null}async function F6(e,r){try{let n=await sc(e,r?"closed":"open"),a=$.findIndex(o=>o.id===e);if(a!==-1&&($[a]=n),r)Ws(e);else{let o=n,u=await Va({exact:o.quote,prefix:o.prefix,suffix:o.suffix},ct);u?(Za(u,o.id,o.color),de.add(o.id)):de.delete(o.id)}We($,de,_e)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),ur(`Failed to update comment: ${t.message}`,"error")}}async function D6({parent_id:e,comment:r,commenter:t}){try{let n=await ni({uri:ri,document:ti,body:r,author:t,parent:e});$.push(n),We($,de,_e)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),ur(`Failed to save reply: ${n.message}`,"error")}}async function B6(e,r){try{let t=await uc(e,{body:r}),n=$.findIndex(a=>a.id===e);n!==-1&&($[n]=t),We($,de,_e)}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),ur(`Failed to update comment: ${t.message}`,"error")}}async function G6(e,r){let t=He();if(t)try{let o=$.find(s=>s.id===e)?.reactions?.find(s=>s.emoji===r)?.authors.includes(t),u;o?u=await fc(e,r,t):u=await lc(e,r,t);let c=$.findIndex(s=>s.id===e);c!==-1&&($[c]={...$[c],reactions:u.reactions}),We($,de,_e)}catch(n){console.error("[feedback-layer] Failed to toggle reaction:",n),ur(`Failed to update reaction: ${n.message}`,"error")}}async function U6(e){try{await cc(e),Ws(e),de.delete(e),$=$.filter(r=>r.id!==e&&r.parent!==e),We($,de,_e)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),ur(`Failed to delete comment: ${r.message}`,"error")}}try{A6()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
