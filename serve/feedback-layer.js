var FeedbackLayer=(()=>{var xO=Object.create;var oc=Object.defineProperty;var SO=Object.getOwnPropertyDescriptor;var wO=Object.getOwnPropertyNames;var TO=Object.getPrototypeOf,EO=Object.prototype.hasOwnProperty;var i=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var CO=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of wO(r))!EO.call(e,a)&&a!==t&&oc(e,a,{get:()=>r[a],enumerable:!(n=SO(r,a))||n.enumerable});return e};var q=(e,r,t)=>(t=e!=null?xO(TO(e)):{},CO(r||!e||!e.__esModule?oc(t,"default",{value:e,enumerable:!0}):t,e));var P=i((YG,mc)=>{"use strict";mc.exports=function(e){try{return!!e()}catch{return!0}}});var $r=i((JG,hc)=>{"use strict";var OO=P();hc.exports=!OO(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var N=i((QG,bc)=>{"use strict";var yc=$r(),gc=Function.prototype,ni=gc.call,kO=yc&&gc.bind.bind(ni,ni);bc.exports=yc?kO:function(e){return function(){return ni.apply(e,arguments)}}});var U=i((XG,qc)=>{"use strict";var IO=N();qc.exports=IO({}.isPrototypeOf)});var R=i((ai,xc)=>{"use strict";var vt=function(e){return e&&e.Math===Math&&e};xc.exports=vt(typeof globalThis=="object"&&globalThis)||vt(typeof window=="object"&&window)||vt(typeof self=="object"&&self)||vt(typeof global=="object"&&global)||vt(typeof ai=="object"&&ai)||function(){return this}()||Function("return this")()});var Lr=i((ZG,Ec)=>{"use strict";var _O=$r(),Tc=Function.prototype,Sc=Tc.apply,wc=Tc.call;Ec.exports=typeof Reflect=="object"&&Reflect.apply||(_O?wc.bind(Sc):function(){return wc.apply(Sc,arguments)})});var Ee=i((e6,Oc)=>{"use strict";var Cc=N(),PO=Cc({}.toString),RO=Cc("".slice);Oc.exports=function(e){return RO(PO(e),8,-1)}});var dt=i((r6,kc)=>{"use strict";var AO=Ee(),NO=N();kc.exports=function(e){if(AO(e)==="Function")return NO(e)}});var M=i((t6,Ic)=>{"use strict";var ii=typeof document=="object"&&document.all;Ic.exports=typeof ii>"u"&&ii!==void 0?function(e){return typeof e=="function"||e===ii}:function(e){return typeof e=="function"}});var H=i((n6,_c)=>{"use strict";var MO=P();_c.exports=!MO(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var G=i((a6,Pc)=>{"use strict";var jO=$r(),qn=Function.prototype.call;Pc.exports=jO?qn.bind(qn):function(){return qn.apply(qn,arguments)}});var oi=i(Nc=>{"use strict";var Rc={}.propertyIsEnumerable,Ac=Object.getOwnPropertyDescriptor,$O=Ac&&!Rc.call({1:2},1);Nc.f=$O?function(r){var t=Ac(this,r);return!!t&&t.enumerable}:Rc});var Qe=i((o6,Mc)=>{"use strict";Mc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var xn=i((u6,jc)=>{"use strict";var LO=N(),FO=P(),DO=Ee(),ui=Object,BO=LO("".split);jc.exports=FO(function(){return!ui("z").propertyIsEnumerable(0)})?function(e){return DO(e)==="String"?BO(e,""):ui(e)}:ui});var lr=i((s6,$c)=>{"use strict";$c.exports=function(e){return e==null}});var fr=i((c6,Lc)=>{"use strict";var GO=lr(),UO=TypeError;Lc.exports=function(e){if(GO(e))throw new UO("Can't call method on "+e);return e}});var Ne=i((l6,Fc)=>{"use strict";var HO=xn(),KO=fr();Fc.exports=function(e){return HO(KO(e))}});var L=i((f6,Dc)=>{"use strict";var WO=M();Dc.exports=function(e){return typeof e=="object"?e!==null:WO(e)}});var Y=i((p6,Bc)=>{"use strict";Bc.exports={}});var K=i((v6,Uc)=>{"use strict";var si=Y(),ci=R(),zO=M(),Gc=function(e){return zO(e)?e:void 0};Uc.exports=function(e,r){return arguments.length<2?Gc(si[e])||Gc(ci[e]):si[e]&&si[e][r]||ci[e]&&ci[e][r]}});var Fr=i((d6,Wc)=>{"use strict";var VO=R(),Hc=VO.navigator,Kc=Hc&&Hc.userAgent;Wc.exports=Kc?String(Kc):""});var Dr=i((m6,Xc)=>{"use strict";var Qc=R(),li=Fr(),zc=Qc.process,Vc=Qc.Deno,Yc=zc&&zc.versions||Vc&&Vc.version,Jc=Yc&&Yc.v8,ge,Sn;Jc&&(ge=Jc.split("."),Sn=ge[0]>0&&ge[0]<4?1:+(ge[0]+ge[1]));!Sn&&li&&(ge=li.match(/Edge\/(\d+)/),(!ge||ge[1]>=74)&&(ge=li.match(/Chrome\/(\d+)/),ge&&(Sn=+ge[1])));Xc.exports=Sn});var pr=i((h6,el)=>{"use strict";var Zc=Dr(),YO=P(),JO=R(),QO=JO.String;el.exports=!!Object.getOwnPropertySymbols&&!YO(function(){var e=Symbol("symbol detection");return!QO(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Zc&&Zc<41})});var fi=i((y6,rl)=>{"use strict";var XO=pr();rl.exports=XO&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Br=i((g6,tl)=>{"use strict";var ZO=K(),e0=M(),r0=U(),t0=fi(),n0=Object;tl.exports=t0?function(e){return typeof e=="symbol"}:function(e){var r=ZO("Symbol");return e0(r)&&r0(r.prototype,n0(e))}});var Xe=i((b6,nl)=>{"use strict";var a0=String;nl.exports=function(e){try{return a0(e)}catch{return"Object"}}});var D=i((q6,al)=>{"use strict";var i0=M(),o0=Xe(),u0=TypeError;al.exports=function(e){if(i0(e))return e;throw new u0(o0(e)+" is not a function")}});var wn=i((x6,il)=>{"use strict";var s0=D(),c0=lr();il.exports=function(e,r){var t=e[r];return c0(t)?void 0:s0(t)}});var ul=i((S6,ol)=>{"use strict";var pi=G(),vi=M(),di=L(),l0=TypeError;ol.exports=function(e,r){var t,n;if(r==="string"&&vi(t=e.toString)&&!di(n=pi(t,e))||vi(t=e.valueOf)&&!di(n=pi(t,e))||r!=="string"&&vi(t=e.toString)&&!di(n=pi(t,e)))return n;throw new l0("Can't convert object to primitive value")}});var ee=i((w6,sl)=>{"use strict";sl.exports=!0});var fl=i((T6,ll)=>{"use strict";var cl=R(),f0=Object.defineProperty;ll.exports=function(e,r){try{f0(cl,e,{value:r,configurable:!0,writable:!0})}catch{cl[e]=r}return r}});var mt=i((E6,dl)=>{"use strict";var p0=ee(),v0=R(),d0=fl(),pl="__core-js_shared__",vl=dl.exports=v0[pl]||d0(pl,{});(vl.versions||(vl.versions=[])).push({version:"3.48.0",mode:p0?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var vr=i((C6,hl)=>{"use strict";var ml=mt();hl.exports=function(e,r){return ml[e]||(ml[e]=r||{})}});var ne=i((O6,yl)=>{"use strict";var m0=fr(),h0=Object;yl.exports=function(e){return h0(m0(e))}});var W=i((k6,gl)=>{"use strict";var y0=N(),g0=ne(),b0=y0({}.hasOwnProperty);gl.exports=Object.hasOwn||function(r,t){return b0(g0(r),t)}});var Gr=i((I6,bl)=>{"use strict";var q0=N(),x0=0,S0=Math.random(),w0=q0(1.1.toString);bl.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+w0(++x0+S0,36)}});var A=i((_6,xl)=>{"use strict";var T0=R(),E0=vr(),ql=W(),C0=Gr(),O0=pr(),k0=fi(),Ur=T0.Symbol,mi=E0("wks"),I0=k0?Ur.for||Ur:Ur&&Ur.withoutSetter||C0;xl.exports=function(e){return ql(mi,e)||(mi[e]=O0&&ql(Ur,e)?Ur[e]:I0("Symbol."+e)),mi[e]}});var El=i((P6,Tl)=>{"use strict";var _0=G(),Sl=L(),wl=Br(),P0=wn(),R0=ul(),A0=A(),N0=TypeError,M0=A0("toPrimitive");Tl.exports=function(e,r){if(!Sl(e)||wl(e))return e;var t=P0(e,M0),n;if(t){if(r===void 0&&(r="default"),n=_0(t,e,r),!Sl(n)||wl(n))return n;throw new N0("Can't convert object to primitive value")}return r===void 0&&(r="number"),R0(e,r)}});var Tn=i((R6,Cl)=>{"use strict";var j0=El(),$0=Br();Cl.exports=function(e){var r=j0(e,"string");return $0(r)?r:r+""}});var En=i((A6,kl)=>{"use strict";var L0=R(),Ol=L(),hi=L0.document,F0=Ol(hi)&&Ol(hi.createElement);kl.exports=function(e){return F0?hi.createElement(e):{}}});var yi=i((N6,Il)=>{"use strict";var D0=H(),B0=P(),G0=En();Il.exports=!D0&&!B0(function(){return Object.defineProperty(G0("div"),"a",{get:function(){return 7}}).a!==7})});var ht=i(Pl=>{"use strict";var U0=H(),H0=G(),K0=oi(),W0=Qe(),z0=Ne(),V0=Tn(),Y0=W(),J0=yi(),_l=Object.getOwnPropertyDescriptor;Pl.f=U0?_l:function(r,t){if(r=z0(r),t=V0(t),J0)try{return _l(r,t)}catch{}if(Y0(r,t))return W0(!H0(K0.f,r,t),r[t])}});var gi=i((j6,Rl)=>{"use strict";var Q0=P(),X0=M(),Z0=/#|\.prototype\./,yt=function(e,r){var t=r1[e1(e)];return t===n1?!0:t===t1?!1:X0(r)?Q0(r):!!r},e1=yt.normalize=function(e){return String(e).replace(Z0,".").toLowerCase()},r1=yt.data={},t1=yt.NATIVE="N",n1=yt.POLYFILL="P";Rl.exports=yt});var J=i(($6,Nl)=>{"use strict";var Al=dt(),a1=D(),i1=$r(),o1=Al(Al.bind);Nl.exports=function(e,r){return a1(e),r===void 0?e:i1?o1(e,r):function(){return e.apply(r,arguments)}}});var bi=i((L6,Ml)=>{"use strict";var u1=H(),s1=P();Ml.exports=u1&&s1(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var Z=i((F6,jl)=>{"use strict";var c1=L(),l1=String,f1=TypeError;jl.exports=function(e){if(c1(e))return e;throw new f1(l1(e)+" is not an object")}});var ae=i(Ll=>{"use strict";var p1=H(),v1=yi(),d1=bi(),Cn=Z(),$l=Tn(),m1=TypeError,qi=Object.defineProperty,h1=Object.getOwnPropertyDescriptor,xi="enumerable",Si="configurable",wi="writable";Ll.f=p1?d1?function(r,t,n){if(Cn(r),t=$l(t),Cn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&wi in n&&!n[wi]){var a=h1(r,t);a&&a[wi]&&(r[t]=n.value,n={configurable:Si in n?n[Si]:a[Si],enumerable:xi in n?n[xi]:a[xi],writable:!1})}return qi(r,t,n)}:qi:function(r,t,n){if(Cn(r),t=$l(t),Cn(n),v1)try{return qi(r,t,n)}catch{}if("get"in n||"set"in n)throw new m1("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var Ce=i((B6,Fl)=>{"use strict";var y1=H(),g1=ae(),b1=Qe();Fl.exports=y1?function(e,r,t){return g1.f(e,r,b1(1,t))}:function(e,r,t){return e[r]=t,e}});var x=i((G6,Bl)=>{"use strict";var gt=R(),q1=Lr(),x1=dt(),S1=M(),w1=ht().f,T1=gi(),Hr=Y(),E1=J(),Kr=Ce(),Dl=W();mt();var C1=function(e){var r=function(t,n,a){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,a)}return q1(e,this,arguments)};return r.prototype=e.prototype,r};Bl.exports=function(e,r){var t=e.target,n=e.global,a=e.stat,o=e.proto,u=n?gt:a?gt[t]:gt[t]&&gt[t].prototype,c=n?Hr:Hr[t]||Kr(Hr,t,{})[t],s=c.prototype,l,f,v,p,d,h,m,y,g;for(p in r)l=T1(n?p:t+(a?".":"#")+p,e.forced),f=!l&&u&&Dl(u,p),h=c[p],f&&(e.dontCallGetSet?(g=w1(u,p),m=g&&g.value):m=u[p]),d=f&&m?m:r[p],!(!l&&!o&&typeof h==typeof d)&&(e.bind&&f?y=E1(d,gt):e.wrap&&f?y=C1(d):o&&S1(d)?y=x1(d):y=d,(e.sham||d&&d.sham||h&&h.sham)&&Kr(y,"sham",!0),Kr(c,p,y),o&&(v=t+"Prototype",Dl(Hr,v)||Kr(Hr,v,{}),Kr(Hr[v],p,d),e.real&&s&&(l||!s[p])&&Kr(s,p,d)))}});var Me=i((U6,Gl)=>{"use strict";var O1=Ee();Gl.exports=Array.isArray||function(r){return O1(r)==="Array"}});var On=i((H6,Hl)=>{"use strict";var k1=A(),I1=k1("toStringTag"),Ul={};Ul[I1]="z";Hl.exports=String(Ul)==="[object z]"});var bt=i((K6,Kl)=>{"use strict";var _1=On(),P1=M(),kn=Ee(),R1=A(),A1=R1("toStringTag"),N1=Object,M1=kn(function(){return arguments}())==="Arguments",j1=function(e,r){try{return e[r]}catch{}};Kl.exports=_1?kn:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=j1(r=N1(e),A1))=="string"?t:M1?kn(r):(n=kn(r))==="Object"&&P1(r.callee)?"Arguments":n}});var Ei=i((W6,Wl)=>{"use strict";var $1=N(),L1=M(),Ti=mt(),F1=$1(Function.toString);L1(Ti.inspectSource)||(Ti.inspectSource=function(e){return F1(e)});Wl.exports=Ti.inspectSource});var xt=i((z6,Ql)=>{"use strict";var D1=N(),B1=P(),zl=M(),G1=bt(),U1=K(),H1=Ei(),Vl=function(){},Yl=U1("Reflect","construct"),Ci=/^\s*(?:class|function)\b/,K1=D1(Ci.exec),W1=!Ci.test(Vl),qt=function(r){if(!zl(r))return!1;try{return Yl(Vl,[],r),!0}catch{return!1}},Jl=function(r){if(!zl(r))return!1;switch(G1(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return W1||!!K1(Ci,H1(r))}catch{return!0}};Jl.sham=!0;Ql.exports=!Yl||B1(function(){var e;return qt(qt.call)||!qt(Object)||!qt(function(){e=!0})||e})?Jl:qt});var Zl=i((V6,Xl)=>{"use strict";var z1=Math.ceil,V1=Math.floor;Xl.exports=Math.trunc||function(r){var t=+r;return(t>0?V1:z1)(t)}});var In=i((Y6,ef)=>{"use strict";var Y1=Zl();ef.exports=function(e){var r=+e;return r!==r||r===0?0:Y1(r)}});var Oi=i((J6,rf)=>{"use strict";var J1=In(),Q1=Math.max,X1=Math.min;rf.exports=function(e,r){var t=J1(e);return t<0?Q1(t+r,0):X1(t,r)}});var ki=i((Q6,tf)=>{"use strict";var Z1=In(),ek=Math.min;tf.exports=function(e){var r=Z1(e);return r>0?ek(r,9007199254740991):0}});var de=i((X6,nf)=>{"use strict";var rk=ki();nf.exports=function(e){return rk(e.length)}});var Wr=i((Z6,af)=>{"use strict";var tk=H(),nk=ae(),ak=Qe();af.exports=function(e,r,t){tk?nk.f(e,r,ak(0,t)):e[r]=t}});var zr=i((e8,of)=>{"use strict";var ik=H(),ok=Me(),uk=TypeError,sk=Object.getOwnPropertyDescriptor,ck=ik&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();of.exports=ck?function(e,r){if(ok(e)&&!sk(e,"length").writable)throw new uk("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var St=i((r8,uf)=>{"use strict";var lk=P(),fk=A(),pk=Dr(),vk=fk("species");uf.exports=function(e){return pk>=51||!lk(function(){var r=[],t=r.constructor={};return t[vk]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var dr=i((t8,sf)=>{"use strict";var dk=N();sf.exports=dk([].slice)});var ff=i(()=>{"use strict";var mk=x(),cf=Me(),hk=xt(),yk=L(),lf=Oi(),gk=de(),bk=Ne(),qk=Wr(),xk=zr(),Sk=A(),wk=St(),Tk=dr(),Ek=wk("slice"),Ck=Sk("species"),Ii=Array,Ok=Math.max;mk({target:"Array",proto:!0,forced:!Ek},{slice:function(r,t){var n=bk(this),a=gk(n),o=lf(r,a),u=lf(t===void 0?a:t,a),c,s,l;if(cf(n)&&(c=n.constructor,hk(c)&&(c===Ii||cf(c.prototype))?c=void 0:yk(c)&&(c=c[Ck],c===null&&(c=void 0)),c===Ii||c===void 0))return Tk(n,o,u);for(s=new(c===void 0?Ii:c)(Ok(u-o,0)),l=0;o<u;o++,l++)o in n&&qk(s,l,n[o]);return xk(s,l),s}})});var le=i((i8,pf)=>{"use strict";var kk=R(),Ik=Y();pf.exports=function(e,r){var t=Ik[e+"Prototype"],n=t&&t[r];if(n)return n;var a=kk[e],o=a&&a.prototype;return o&&o[r]}});var df=i((o8,vf)=>{"use strict";ff();var _k=le();vf.exports=_k("Array","slice")});var hf=i((u8,mf)=>{"use strict";var Pk=U(),Rk=df(),_i=Array.prototype;mf.exports=function(e){var r=e.slice;return e===_i||Pk(_i,e)&&r===_i.slice?Rk:r}});var gf=i((s8,yf)=>{"use strict";var Ak=hf();yf.exports=Ak});var qf=i((c8,bf)=>{"use strict";var Nk=gf();bf.exports=Nk});var Sf=i((l8,xf)=>{"use strict";var Mk=qf();xf.exports=Mk});var Pi=i((f8,wf)=>{"use strict";wf.exports=Sf()});var Vr=i((p8,Tf)=>{Tf.exports=Pi()});var Ze=i((v8,Ef)=>{"use strict";var jk=bt(),$k=String;Ef.exports=function(e){if(jk(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return $k(e)}});var If=i((d8,kf)=>{"use strict";var Ri=N(),Lk=In(),Fk=Ze(),Dk=fr(),Bk=Ri("".charAt),Cf=Ri("".charCodeAt),Gk=Ri("".slice),Of=function(e){return function(r,t){var n=Fk(Dk(r)),a=Lk(t),o=n.length,u,c;return a<0||a>=o?e?"":void 0:(u=Cf(n,a),u<55296||u>56319||a+1===o||(c=Cf(n,a+1))<56320||c>57343?e?Bk(n,a):u:e?Gk(n,a,a+2):(u-55296<<10)+(c-56320)+65536)}};kf.exports={codeAt:Of(!1),charAt:Of(!0)}});var Rf=i((m8,Pf)=>{"use strict";var Uk=R(),Hk=M(),_f=Uk.WeakMap;Pf.exports=Hk(_f)&&/native code/.test(String(_f))});var wt=i((h8,Nf)=>{"use strict";var Kk=vr(),Wk=Gr(),Af=Kk("keys");Nf.exports=function(e){return Af[e]||(Af[e]=Wk(e))}});var Yr=i((y8,Mf)=>{"use strict";Mf.exports={}});var er=i((g8,Lf)=>{"use strict";var zk=Rf(),$f=R(),Vk=L(),Yk=Ce(),Ai=W(),Ni=mt(),Jk=wt(),Qk=Yr(),jf="Object already initialized",Mi=$f.TypeError,Xk=$f.WeakMap,_n,Tt,Pn,Zk=function(e){return Pn(e)?Tt(e):_n(e,{})},eI=function(e){return function(r){var t;if(!Vk(r)||(t=Tt(r)).type!==e)throw new Mi("Incompatible receiver, "+e+" required");return t}};zk||Ni.state?(be=Ni.state||(Ni.state=new Xk),be.get=be.get,be.has=be.has,be.set=be.set,_n=function(e,r){if(be.has(e))throw new Mi(jf);return r.facade=e,be.set(e,r),r},Tt=function(e){return be.get(e)||{}},Pn=function(e){return be.has(e)}):(mr=Jk("state"),Qk[mr]=!0,_n=function(e,r){if(Ai(e,mr))throw new Mi(jf);return r.facade=e,Yk(e,mr,r),r},Tt=function(e){return Ai(e,mr)?e[mr]:{}},Pn=function(e){return Ai(e,mr)});var be,mr;Lf.exports={set:_n,get:Tt,has:Pn,enforce:Zk,getterFor:eI}});var Bf=i((b8,Df)=>{"use strict";var ji=H(),rI=W(),Ff=Function.prototype,tI=ji&&Object.getOwnPropertyDescriptor,$i=rI(Ff,"name"),nI=$i&&function(){}.name==="something",aI=$i&&(!ji||ji&&tI(Ff,"name").configurable);Df.exports={EXISTS:$i,PROPER:nI,CONFIGURABLE:aI}});var Li=i((q8,Uf)=>{"use strict";var iI=Ne(),oI=Oi(),uI=de(),Gf=function(e){return function(r,t,n){var a=iI(r),o=uI(a);if(o===0)return!e&&-1;var u=oI(n,o),c;if(e&&t!==t){for(;o>u;)if(c=a[u++],c!==c)return!0}else for(;o>u;u++)if((e||u in a)&&a[u]===t)return e||u||0;return!e&&-1}};Uf.exports={includes:Gf(!0),indexOf:Gf(!1)}});var Di=i((x8,Kf)=>{"use strict";var sI=N(),Fi=W(),cI=Ne(),lI=Li().indexOf,fI=Yr(),Hf=sI([].push);Kf.exports=function(e,r){var t=cI(e),n=0,a=[],o;for(o in t)!Fi(fI,o)&&Fi(t,o)&&Hf(a,o);for(;r.length>n;)Fi(t,o=r[n++])&&(~lI(a,o)||Hf(a,o));return a}});var Rn=i((S8,Wf)=>{"use strict";Wf.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var An=i((w8,zf)=>{"use strict";var pI=Di(),vI=Rn();zf.exports=Object.keys||function(r){return pI(r,vI)}});var Bi=i(Vf=>{"use strict";var dI=H(),mI=bi(),hI=ae(),yI=Z(),gI=Ne(),bI=An();Vf.f=dI&&!mI?Object.defineProperties:function(r,t){yI(r);for(var n=gI(t),a=bI(t),o=a.length,u=0,c;o>u;)hI.f(r,c=a[u++],n[c]);return r}});var Gi=i((E8,Yf)=>{"use strict";var qI=K();Yf.exports=qI("document","documentElement")});var rr=i((C8,tp)=>{"use strict";var xI=Z(),SI=Bi(),Jf=Rn(),wI=Yr(),TI=Gi(),EI=En(),CI=wt(),Qf=">",Xf="<",Hi="prototype",Ki="script",ep=CI("IE_PROTO"),Ui=function(){},rp=function(e){return Xf+Ki+Qf+e+Xf+"/"+Ki+Qf},Zf=function(e){e.write(rp("")),e.close();var r=e.parentWindow.Object;return e=null,r},OI=function(){var e=EI("iframe"),r="java"+Ki+":",t;return e.style.display="none",TI.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(rp("document.F=Object")),t.close(),t.F},Nn,Mn=function(){try{Nn=new ActiveXObject("htmlfile")}catch{}Mn=typeof document<"u"?document.domain&&Nn?Zf(Nn):OI():Zf(Nn);for(var e=Jf.length;e--;)delete Mn[Hi][Jf[e]];return Mn()};wI[ep]=!0;tp.exports=Object.create||function(r,t){var n;return r!==null?(Ui[Hi]=xI(r),n=new Ui,Ui[Hi]=null,n[ep]=r):n=Mn(),t===void 0?n:SI.f(n,t)}});var Wi=i((O8,np)=>{"use strict";var kI=P();np.exports=!kI(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var Et=i((k8,ip)=>{"use strict";var II=W(),_I=M(),PI=ne(),RI=wt(),AI=Wi(),ap=RI("IE_PROTO"),zi=Object,NI=zi.prototype;ip.exports=AI?zi.getPrototypeOf:function(e){var r=PI(e);if(II(r,ap))return r[ap];var t=r.constructor;return _I(t)&&r instanceof t?t.prototype:r instanceof zi?NI:null}});var je=i((I8,op)=>{"use strict";var MI=Ce();op.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:MI(e,r,t),e}});var Qi=i((_8,cp)=>{"use strict";var jI=P(),$I=M(),LI=L(),FI=rr(),up=Et(),DI=je(),BI=A(),GI=ee(),Ji=BI("iterator"),sp=!1,$e,Vi,Yi;[].keys&&(Yi=[].keys(),"next"in Yi?(Vi=up(up(Yi)),Vi!==Object.prototype&&($e=Vi)):sp=!0);var UI=!LI($e)||jI(function(){var e={};return $e[Ji].call(e)!==e});UI?$e={}:GI&&($e=FI($e));$I($e[Ji])||DI($e,Ji,function(){return this});cp.exports={IteratorPrototype:$e,BUGGY_SAFARI_ITERATORS:sp}});var fp=i((P8,lp)=>{"use strict";var HI=On(),KI=bt();lp.exports=HI?{}.toString:function(){return"[object "+KI(this)+"]"}});var Le=i((R8,vp)=>{"use strict";var WI=On(),zI=ae().f,VI=Ce(),YI=W(),JI=fp(),QI=A(),pp=QI("toStringTag");vp.exports=function(e,r,t,n){var a=t?e:e&&e.prototype;a&&(YI(a,pp)||zI(a,pp,{configurable:!0,value:r}),n&&!WI&&VI(a,"toString",JI))}});var hr=i((A8,dp)=>{"use strict";dp.exports={}});var hp=i((N8,mp)=>{"use strict";var XI=Qi().IteratorPrototype,ZI=rr(),e_=Qe(),r_=Le(),t_=hr(),n_=function(){return this};mp.exports=function(e,r,t,n){var a=r+" Iterator";return e.prototype=ZI(XI,{next:e_(+!n,t)}),r_(e,a,!1,!0),t_[a]=n_,e}});var gp=i((M8,yp)=>{"use strict";var a_=N(),i_=D();yp.exports=function(e,r,t){try{return a_(i_(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var qp=i((j8,bp)=>{"use strict";var o_=L();bp.exports=function(e){return o_(e)||e===null}});var Sp=i(($8,xp)=>{"use strict";var u_=qp(),s_=String,c_=TypeError;xp.exports=function(e){if(u_(e))return e;throw new c_("Can't set "+s_(e)+" as a prototype")}});var Ct=i((L8,wp)=>{"use strict";var l_=gp(),f_=L(),p_=fr(),v_=Sp();wp.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=l_(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(a,o){return p_(a),v_(o),f_(a)&&(e?t(a,o):a.__proto__=o),a}}():void 0)});var Ln=i((F8,Ap)=>{"use strict";var d_=x(),m_=G(),jn=ee(),Pp=Bf(),h_=M(),y_=hp(),Tp=Et(),Ep=Ct(),g_=Le(),b_=Ce(),Xi=je(),q_=A(),Cp=hr(),Rp=Qi(),x_=Pp.PROPER,S_=Pp.CONFIGURABLE,Op=Rp.IteratorPrototype,$n=Rp.BUGGY_SAFARI_ITERATORS,Ot=q_("iterator"),kp="keys",kt="values",Ip="entries",_p=function(){return this};Ap.exports=function(e,r,t,n,a,o,u){y_(t,r,n);var c=function(g){if(g===a&&p)return p;if(!$n&&g&&g in f)return f[g];switch(g){case kp:return function(){return new t(this,g)};case kt:return function(){return new t(this,g)};case Ip:return function(){return new t(this,g)}}return function(){return new t(this)}},s=r+" Iterator",l=!1,f=e.prototype,v=f[Ot]||f["@@iterator"]||a&&f[a],p=!$n&&v||c(a),d=r==="Array"&&f.entries||v,h,m,y;if(d&&(h=Tp(d.call(new e)),h!==Object.prototype&&h.next&&(!jn&&Tp(h)!==Op&&(Ep?Ep(h,Op):h_(h[Ot])||Xi(h,Ot,_p)),g_(h,s,!0,!0),jn&&(Cp[s]=_p))),x_&&a===kt&&v&&v.name!==kt&&(!jn&&S_?b_(f,"name",kt):(l=!0,p=function(){return m_(v,this)})),a)if(m={values:c(kt),keys:o?p:c(kp),entries:c(Ip)},u)for(y in m)($n||l||!(y in f))&&Xi(f,y,m[y]);else d_({target:r,proto:!0,forced:$n||l},m);return(!jn||u)&&f[Ot]!==p&&Xi(f,Ot,p,{name:a}),Cp[r]=p,m}});var Fn=i((D8,Np)=>{"use strict";Np.exports=function(e,r){return{value:e,done:r}}});var yr=i(()=>{"use strict";var w_=If().charAt,T_=Ze(),jp=er(),E_=Ln(),Mp=Fn(),$p="String Iterator",C_=jp.set,O_=jp.getterFor($p);E_(String,"String",function(e){C_(this,{type:$p,string:T_(e),index:0})},function(){var r=O_(this),t=r.string,n=r.index,a;return n>=t.length?Mp(void 0,!0):(a=w_(t,n),r.index+=a.length,Mp(a,!1))})});var Zi=i((U8,Fp)=>{"use strict";var k_=G(),Lp=Z(),I_=wn();Fp.exports=function(e,r,t){var n,a;Lp(e);try{if(n=I_(e,"return"),!n){if(r==="throw")throw t;return t}n=k_(n,e)}catch(o){a=!0,n=o}if(r==="throw")throw t;if(a)throw n;return Lp(n),t}});var Bp=i((H8,Dp)=>{"use strict";var __=Z(),P_=Zi();Dp.exports=function(e,r,t,n){try{return n?r(__(t)[0],t[1]):r(t)}catch(a){P_(e,"throw",a)}}});var eo=i((K8,Gp)=>{"use strict";var R_=A(),A_=hr(),N_=R_("iterator"),M_=Array.prototype;Gp.exports=function(e){return e!==void 0&&(A_.Array===e||M_[N_]===e)}});var It=i((W8,Hp)=>{"use strict";var j_=bt(),Up=wn(),$_=lr(),L_=hr(),F_=A(),D_=F_("iterator");Hp.exports=function(e){if(!$_(e))return Up(e,D_)||Up(e,"@@iterator")||L_[j_(e)]}});var Dn=i((z8,Kp)=>{"use strict";var B_=G(),G_=D(),U_=Z(),H_=Xe(),K_=It(),W_=TypeError;Kp.exports=function(e,r){var t=arguments.length<2?K_(e):r;if(G_(t))return U_(B_(t,e));throw new W_(H_(e)+" is not iterable")}});var Yp=i((V8,Vp)=>{"use strict";var z_=J(),V_=G(),Y_=ne(),J_=Bp(),Q_=eo(),X_=xt(),Z_=de(),Wp=Wr(),eP=zr(),rP=Dn(),tP=It(),zp=Array;Vp.exports=function(r){var t=Y_(r),n=X_(this),a=arguments.length,o=a>1?arguments[1]:void 0,u=o!==void 0;u&&(o=z_(o,a>2?arguments[2]:void 0));var c=tP(t),s=0,l,f,v,p,d,h;if(c&&!(this===zp&&Q_(c)))for(f=n?new this:[],p=rP(t,c),d=p.next;!(v=V_(d,p)).done;s++)h=u?J_(p,o,[v.value,s],!0):v.value,Wp(f,s,h);else for(l=Z_(t),f=n?new this(l):zp(l);l>s;s++)h=u?o(t[s],s):t[s],Wp(f,s,h);return eP(f,s),f}});var to=i((Y8,Zp)=>{"use strict";var nP=A(),Qp=nP("iterator"),Xp=!1;try{Jp=0,ro={next:function(){return{done:!!Jp++}},return:function(){Xp=!0}},ro[Qp]=function(){return this},Array.from(ro,function(){throw 2})}catch{}var Jp,ro;Zp.exports=function(e,r){try{if(!r&&!Xp)return!1}catch{return!1}var t=!1;try{var n={};n[Qp]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var ev=i(()=>{"use strict";var aP=x(),iP=Yp(),oP=to(),uP=!oP(function(e){Array.from(e)});aP({target:"Array",stat:!0,forced:uP},{from:iP})});var tv=i((X8,rv)=>{"use strict";yr();ev();var sP=Y();rv.exports=sP.Array.from});var av=i((Z8,nv)=>{"use strict";var cP=tv();nv.exports=cP});var ov=i((eU,iv)=>{"use strict";var lP=av();iv.exports=lP});var sv=i((rU,uv)=>{"use strict";var fP=ov();uv.exports=fP});var no=i((tU,cv)=>{"use strict";cv.exports=sv()});var Bn=i((nU,lv)=>{lv.exports=no()});var _t=i((aU,fv)=>{"use strict";var pP=TypeError,vP=9007199254740991;fv.exports=function(e){if(e>vP)throw pP("Maximum allowed index exceeded");return e}});var mv=i((iU,dv)=>{"use strict";var pv=Me(),dP=xt(),mP=L(),hP=A(),yP=hP("species"),vv=Array;dv.exports=function(e){var r;return pv(e)&&(r=e.constructor,dP(r)&&(r===vv||pv(r.prototype))?r=void 0:mP(r)&&(r=r[yP],r===null&&(r=void 0))),r===void 0?vv:r}});var Gn=i((oU,hv)=>{"use strict";var gP=mv();hv.exports=function(e,r){return new(gP(e))(r===0?0:r)}});var ao=i(()=>{"use strict";var bP=x(),qP=P(),xP=Me(),SP=L(),wP=ne(),TP=de(),yv=_t(),gv=Wr(),EP=zr(),CP=Gn(),OP=St(),kP=A(),IP=Dr(),bv=kP("isConcatSpreadable"),_P=IP>=51||!qP(function(){var e=[];return e[bv]=!1,e.concat()[0]!==e}),PP=function(e){if(!SP(e))return!1;var r=e[bv];return r!==void 0?!!r:xP(e)},RP=!_P||!OP("concat");bP({target:"Array",proto:!0,arity:1,forced:RP},{concat:function(r){var t=wP(this),n=CP(t,0),a=0,o,u,c,s,l;for(o=-1,c=arguments.length;o<c;o++)if(l=o===-1?t:arguments[o],PP(l))for(s=TP(l),yv(a+s),u=0;u<s;u++,a++)u in l&&gv(n,a,l[u]);else yv(a+1),gv(n,a++,l);return EP(n,a),n}})});var Pt=i(()=>{});var Rt=i(qv=>{"use strict";var AP=Di(),NP=Rn(),MP=NP.concat("length","prototype");qv.f=Object.getOwnPropertyNames||function(r){return AP(r,MP)}});var io=i((pU,wv)=>{"use strict";var jP=Ee(),$P=Ne(),xv=Rt().f,LP=dr(),Sv=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],FP=function(e){try{return xv(e)}catch{return LP(Sv)}};wv.exports.f=function(r){return Sv&&jP(r)==="Window"?FP(r):xv($P(r))}});var Un=i(Tv=>{"use strict";Tv.f=Object.getOwnPropertySymbols});var Hn=i((dU,Ev)=>{"use strict";var DP=ae();Ev.exports=function(e,r,t){return DP.f(e,r,t)}});var Jr=i(Cv=>{"use strict";var BP=A();Cv.f=BP});var j=i((hU,kv)=>{"use strict";var Ov=Y(),GP=W(),UP=Jr(),HP=ae().f;kv.exports=function(e){var r=Ov.Symbol||(Ov.Symbol={});GP(r,e)||HP(r,e,{value:UP.f(e)})}});var oo=i((yU,Iv)=>{"use strict";var KP=G(),WP=K(),zP=A(),VP=je();Iv.exports=function(){var e=WP("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=zP("toPrimitive");r&&!r[n]&&VP(r,n,function(a){return KP(t,this)},{arity:1})}});var At=i((gU,Pv)=>{"use strict";var YP=J(),JP=xn(),QP=ne(),XP=de(),_v=Gn(),uo=Wr(),tr=function(e){var r=e===1,t=e===2,n=e===3,a=e===4,o=e===6,u=e===7,c=e===5||o;return function(s,l,f){for(var v=QP(s),p=JP(v),d=XP(p),h=YP(l,f),m=0,y=0,g=r?_v(s,d):t||u?_v(s,0):void 0,b,k;d>m;m++)if((c||m in p)&&(b=p[m],k=h(b,m,v),e))if(r)uo(g,m,k);else if(k)switch(e){case 3:return!0;case 5:return b;case 6:return m;case 2:uo(g,y++,b)}else switch(e){case 4:return!1;case 7:uo(g,y++,b)}return o?-1:n||a?a:g}};Pv.exports={forEach:tr(0),map:tr(1),filter:tr(2),some:tr(3),every:tr(4),find:tr(5),findIndex:tr(6),filterReject:tr(7)}});var Vv=i(()=>{"use strict";var Kn=x(),jt=R(),yo=G(),ZP=N(),eR=ee(),Qr=H(),Xr=pr(),rR=P(),z=W(),tR=U(),fo=Z(),Wn=Ne(),go=Tn(),nR=Ze(),po=Qe(),Zr=rr(),Nv=An(),aR=Rt(),Mv=io(),iR=Un(),jv=ht(),$v=ae(),oR=Bi(),Lv=oi(),so=je(),uR=Hn(),bo=vr(),sR=wt(),Fv=Yr(),Rv=Gr(),cR=A(),lR=Jr(),fR=j(),pR=oo(),vR=Le(),Dv=er(),zn=At().forEach,ie=sR("hidden"),Vn="Symbol",Mt="prototype",dR=Dv.set,Av=Dv.getterFor(Vn),me=Object[Mt],gr=jt.Symbol,Nt=gr&&gr[Mt],mR=jt.RangeError,hR=jt.TypeError,co=jt.QObject,Bv=jv.f,br=$v.f,Gv=Mv.f,yR=Lv.f,Uv=ZP([].push),Fe=bo("symbols"),$t=bo("op-symbols"),gR=bo("wks"),vo=!co||!co[Mt]||!co[Mt].findChild,Hv=function(e,r,t){var n=Bv(me,r);n&&delete me[r],br(e,r,t),n&&e!==me&&br(me,r,n)},mo=Qr&&rR(function(){return Zr(br({},"a",{get:function(){return br(this,"a",{value:7}).a}})).a!==7})?Hv:br,lo=function(e,r){var t=Fe[e]=Zr(Nt);return dR(t,{type:Vn,tag:e,description:r}),Qr||(t.description=r),t},Yn=function(r,t,n){r===me&&Yn($t,t,n),fo(r);var a=go(t);return fo(n),z(Fe,a)?(n.enumerable?(z(r,ie)&&r[ie][a]&&(r[ie][a]=!1),n=Zr(n,{enumerable:po(0,!1)})):(z(r,ie)||br(r,ie,po(1,Zr(null))),r[ie][a]=!0),mo(r,a,n)):br(r,a,n)},qo=function(r,t){fo(r);var n=Wn(t),a=Nv(n).concat(zv(n));return zn(a,function(o){(!Qr||yo(ho,n,o))&&Yn(r,o,n[o])}),r},bR=function(r,t){return t===void 0?Zr(r):qo(Zr(r),t)},ho=function(r){var t=go(r),n=yo(yR,this,t);return this===me&&z(Fe,t)&&!z($t,t)?!1:n||!z(this,t)||!z(Fe,t)||z(this,ie)&&this[ie][t]?n:!0},Kv=function(r,t){var n=Wn(r),a=go(t);if(!(n===me&&z(Fe,a)&&!z($t,a))){var o=Bv(n,a);return o&&z(Fe,a)&&!(z(n,ie)&&n[ie][a])&&(o.enumerable=!0),o}},Wv=function(r){var t=Gv(Wn(r)),n=[];return zn(t,function(a){!z(Fe,a)&&!z(Fv,a)&&Uv(n,a)}),n},zv=function(e){var r=e===me,t=Gv(r?$t:Wn(e)),n=[];return zn(t,function(a){z(Fe,a)&&(!r||z(me,a))&&Uv(n,Fe[a])}),n};Xr||(gr=function(){if(tR(Nt,this))throw new hR("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:nR(arguments[0]),t=Rv(r),n=function(a){var o=this===void 0?jt:this;o===me&&yo(n,$t,a),z(o,ie)&&z(o[ie],t)&&(o[ie][t]=!1);var u=po(1,a);try{mo(o,t,u)}catch(c){if(!(c instanceof mR))throw c;Hv(o,t,u)}};return Qr&&vo&&mo(me,t,{configurable:!0,set:n}),lo(t,r)},Nt=gr[Mt],so(Nt,"toString",function(){return Av(this).tag}),so(gr,"withoutSetter",function(e){return lo(Rv(e),e)}),Lv.f=ho,$v.f=Yn,oR.f=qo,jv.f=Kv,aR.f=Mv.f=Wv,iR.f=zv,lR.f=function(e){return lo(cR(e),e)},Qr&&(uR(Nt,"description",{configurable:!0,get:function(){return Av(this).description}}),eR||so(me,"propertyIsEnumerable",ho,{unsafe:!0})));Kn({global:!0,constructor:!0,wrap:!0,forced:!Xr,sham:!Xr},{Symbol:gr});zn(Nv(gR),function(e){fR(e)});Kn({target:Vn,stat:!0,forced:!Xr},{useSetter:function(){vo=!0},useSimple:function(){vo=!1}});Kn({target:"Object",stat:!0,forced:!Xr,sham:!Qr},{create:bR,defineProperty:Yn,defineProperties:qo,getOwnPropertyDescriptor:Kv});Kn({target:"Object",stat:!0,forced:!Xr},{getOwnPropertyNames:Wv});pR();vR(gr,Vn);Fv[ie]=!0});var xo=i((xU,Yv)=>{"use strict";var qR=pr();Yv.exports=qR&&!!Symbol.for&&!!Symbol.keyFor});var Qv=i(()=>{"use strict";var xR=x(),SR=K(),wR=W(),TR=Ze(),Jv=vr(),ER=xo(),So=Jv("string-to-symbol-registry"),CR=Jv("symbol-to-string-registry");xR({target:"Symbol",stat:!0,forced:!ER},{for:function(e){var r=TR(e);if(wR(So,r))return So[r];var t=SR("Symbol")(r);return So[r]=t,CR[t]=r,t}})});var Zv=i(()=>{"use strict";var OR=x(),kR=W(),IR=Br(),_R=Xe(),PR=vr(),RR=xo(),Xv=PR("symbol-to-string-registry");OR({target:"Symbol",stat:!0,forced:!RR},{keyFor:function(r){if(!IR(r))throw new TypeError(_R(r)+" is not a symbol");if(kR(Xv,r))return Xv[r]}})});var rd=i((CU,ed)=>{"use strict";var AR=L(),NR=er().get;ed.exports=function(r){if(!AR(r))return!1;var t=NR(r);return!!t&&t.type==="RawJSON"}});var od=i((OU,id)=>{"use strict";var wo=N(),MR=W(),Jn=SyntaxError,jR=parseInt,$R=String.fromCharCode,LR=wo("".charAt),td=wo("".slice),nd=wo(/./.exec),ad={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},FR=/^[\da-f]{4}$/i,DR=/^[\u0000-\u001F]$/;id.exports=function(e,r){for(var t=!0,n="";r<e.length;){var a=LR(e,r);if(a==="\\"){var o=td(e,r,r+2);if(MR(ad,o))n+=ad[o],r+=2;else if(o==="\\u"){r+=2;var u=td(e,r,r+4);if(!nd(FR,u))throw new Jn("Bad Unicode escape at: "+r);n+=$R(jR(u,16)),r+=4}else throw new Jn('Unknown escape sequence: "'+o+'"')}else if(a==='"'){t=!1,r++;break}else{if(nd(DR,a))throw new Jn("Bad control character in string literal at: "+r);n+=a,r++}}if(t)throw new Jn("Unterminated string at: "+r);return{value:n,end:r}}});var sd=i((kU,ud)=>{"use strict";var BR=P();ud.exports=!BR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var Sd=i(()=>{"use strict";var GR=x(),hd=K(),UR=Lr(),yd=G(),qr=N(),gd=P(),cd=Me(),Xn=M(),HR=rd(),ld=Br(),fd=Ee(),KR=Ze(),WR=dr(),zR=od(),VR=Gr(),YR=pr(),To=sd(),bd=String,nr=hd("JSON","stringify"),Qn=qr(/./.exec),Co=qr("".charAt),JR=qr("".charCodeAt),QR=qr("".replace),Eo=qr("".slice),Oo=qr([].push),XR=qr(1.1.toString),ZR=/[\uD800-\uDFFF]/g,pd=/^[\uD800-\uDBFF]$/,vd=/^[\uDC00-\uDFFF]$/,ko=VR(),dd=ko.length,qd=!YR||gd(function(){var e=hd("Symbol")("stringify detection");return nr([e])!=="[null]"||nr({a:e})!=="{}"||nr(Object(e))!=="{}"}),md=gd(function(){return nr("\uDF06\uD834")!=='"\\udf06\\ud834"'||nr("\uDEAD")!=='"\\udead"'}),eA=qd?function(e,r){var t=WR(arguments),n=xd(r);if(!(!Xn(n)&&(e===void 0||ld(e))))return t[1]=function(a,o){if(Xn(n)&&(o=yd(n,this,bd(a),o)),!ld(o))return o},UR(nr,null,t)}:nr,rA=function(e,r,t){var n=Co(t,r-1),a=Co(t,r+1);return Qn(pd,e)&&!Qn(vd,a)||Qn(vd,e)&&!Qn(pd,n)?"\\u"+XR(JR(e,0),16):e},xd=function(e){if(Xn(e))return e;if(cd(e)){for(var r=e.length,t=[],n=0;n<r;n++){var a=e[n];typeof a=="string"?Oo(t,a):(typeof a=="number"||fd(a)==="Number"||fd(a)==="String")&&Oo(t,KR(a))}var o=t.length,u=!0;return function(c,s){if(u)return u=!1,s;if(cd(this))return s;for(var l=0;l<o;l++)if(t[l]===c)return s}}};nr&&GR({target:"JSON",stat:!0,arity:3,forced:qd||md||!To},{stringify:function(r,t,n){var a=xd(t),o=[],u=eA(r,function(d,h){var m=Xn(a)?yd(a,this,bd(d),h):h;return!To&&HR(m)?ko+(Oo(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(md&&(u=QR(u,ZR,rA)),To))return u;for(var c="",s=u.length,l=0;l<s;l++){var f=Co(u,l);if(f==='"'){var v=zR(u,++l).end-1,p=Eo(u,l,v);c+=Eo(p,0,dd)===ko?o[Eo(p,dd)]:'"'+p+'"',l=v}else c+=f}return c}})});var Td=i(()=>{"use strict";var tA=x(),nA=pr(),aA=P(),wd=Un(),iA=ne(),oA=!nA||aA(function(){wd.f(1)});tA({target:"Object",stat:!0,forced:oA},{getOwnPropertySymbols:function(r){var t=wd.f;return t?t(iA(r)):[]}})});var Ed=i(()=>{"use strict";Vv();Qv();Zv();Sd();Td()});var Io=i(()=>{"use strict";var uA=j();uA("asyncDispose")});var _o=i(()=>{"use strict";var sA=j();sA("asyncIterator")});var Cd=i(()=>{});var Po=i(()=>{"use strict";var cA=j();cA("dispose")});var Od=i(()=>{"use strict";var lA=j();lA("hasInstance")});var kd=i(()=>{"use strict";var fA=j();fA("isConcatSpreadable")});var Ro=i(()=>{"use strict";var pA=j();pA("iterator")});var Id=i(()=>{"use strict";var vA=j();vA("match")});var _d=i(()=>{"use strict";var dA=j();dA("matchAll")});var Pd=i(()=>{"use strict";var mA=j();mA("replace")});var Rd=i(()=>{"use strict";var hA=j();hA("search")});var Ad=i(()=>{"use strict";var yA=j();yA("species")});var Nd=i(()=>{"use strict";var gA=j();gA("split")});var Ao=i(()=>{"use strict";var bA=j(),qA=oo();bA("toPrimitive");qA()});var Md=i(()=>{"use strict";var xA=K(),SA=j(),wA=Le();SA("toStringTag");wA(xA("Symbol"),"Symbol")});var jd=i(()=>{"use strict";var TA=j();TA("unscopables")});var $d=i(()=>{"use strict";var EA=R(),CA=Le();CA(EA.JSON,"JSON",!0)});var Ld=i(()=>{});var Fd=i(()=>{});var Bd=i((bH,Dd)=>{"use strict";ao();Pt();Ed();Io();_o();Cd();Po();Od();kd();Ro();Id();_d();Pd();Rd();Ad();Nd();Ao();Md();jd();$d();Ld();Fd();var OA=Y();Dd.exports=OA.Symbol});var No=i((qH,Gd)=>{"use strict";Gd.exports=function(){}});var xr=i((xH,zd)=>{"use strict";var kA=Ne(),Mo=No(),Ud=hr(),Kd=er(),IA=ae().f,_A=Ln(),Zn=Fn(),PA=ee(),RA=H(),Wd="Array Iterator",AA=Kd.set,NA=Kd.getterFor(Wd);zd.exports=_A(Array,"Array",function(e,r){AA(this,{type:Wd,target:kA(e),index:0,kind:r})},function(){var e=NA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,Zn(void 0,!0);switch(e.kind){case"keys":return Zn(t,!1);case"values":return Zn(r[t],!1)}return Zn([t,r[t]],!1)},"values");var Hd=Ud.Arguments=Ud.Array;Mo("keys");Mo("values");Mo("entries");if(!PA&&RA&&Hd.name!=="values")try{IA(Hd,"name",{value:"values"})}catch{}});var Yd=i((SH,Vd)=>{"use strict";Vd.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var Sr=i(()=>{"use strict";xr();var MA=Yd(),jA=R(),$A=Le(),Jd=hr();for(ea in MA)$A(jA[ea],ea),Jd[ea]=Jd.Array;var ea});var Xd=i((EH,Qd)=>{"use strict";var LA=Bd();Sr();Qd.exports=LA});var rm=i(()=>{"use strict";var FA=A(),DA=ae().f,Zd=FA("metadata"),em=Function.prototype;em[Zd]===void 0&&DA(em,Zd,{value:null})});var tm=i(()=>{"use strict";Io()});var nm=i(()=>{"use strict";Po()});var am=i(()=>{"use strict";var BA=j();BA("metadata")});var om=i((NH,im)=>{"use strict";var GA=Xd();rm();tm();nm();am();im.exports=GA});var $o=i((MH,um)=>{"use strict";var UA=K(),HA=N(),jo=UA("Symbol"),KA=jo.keyFor,WA=HA(jo.prototype.valueOf);um.exports=jo.isRegisteredSymbol||function(r){try{return KA(WA(r))!==void 0}catch{return!1}}});var sm=i(()=>{"use strict";var zA=x(),VA=$o();zA({target:"Symbol",stat:!0},{isRegisteredSymbol:VA})});var Do=i((LH,dm)=>{"use strict";var YA=vr(),pm=K(),JA=N(),QA=Br(),XA=A(),ta=pm("Symbol"),cm=ta.isWellKnownSymbol,vm=pm("Object","getOwnPropertyNames"),ZA=JA(ta.prototype.valueOf),lm=YA("wks");for(ra=0,Lo=vm(ta),fm=Lo.length;ra<fm;ra++)try{Fo=Lo[ra],QA(ta[Fo])&&XA(Fo)}catch{}var Fo,ra,Lo,fm;dm.exports=function(r){if(cm&&cm(r))return!0;try{for(var t=ZA(r),n=0,a=vm(lm),o=a.length;n<o;n++)if(lm[a[n]]==t)return!0}catch{}return!1}});var mm=i(()=>{"use strict";var e2=x(),r2=Do();e2({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:r2})});var hm=i(()=>{"use strict";var t2=j();t2("customMatcher")});var ym=i(()=>{"use strict";var n2=j();n2("observable")});var gm=i(()=>{"use strict";var a2=x(),i2=$o();a2({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:i2})});var bm=i(()=>{"use strict";var o2=x(),u2=Do();o2({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:u2})});var qm=i(()=>{"use strict";var s2=j();s2("matcher")});var xm=i(()=>{"use strict";var c2=j();c2("metadataKey")});var Sm=i(()=>{"use strict";var l2=j();l2("patternMatch")});var wm=i(()=>{"use strict";var f2=j();f2("replaceAll")});var Em=i((nK,Tm)=>{"use strict";var p2=om();sm();mm();hm();ym();gm();bm();qm();xm();Sm();wm();Tm.exports=p2});var Oe=i((aK,Cm)=>{"use strict";Cm.exports=Em()});var na=i((iK,Om)=>{Om.exports=Oe()});var Im=i((oK,km)=>{"use strict";xr();yr();var v2=It();km.exports=v2});var Pm=i((uK,_m)=>{"use strict";var d2=Im();Sr();_m.exports=d2});var Am=i((sK,Rm)=>{"use strict";var m2=Pm();Rm.exports=m2});var Mm=i((cK,Nm)=>{"use strict";var h2=Am();Nm.exports=h2});var Bo=i((lK,jm)=>{"use strict";jm.exports=Mm()});var aa=i((fK,$m)=>{$m.exports=Bo()});var Fm=i((pK,Lm)=>{"use strict";xr();yr();var y2=Dn();Lm.exports=y2});var Bm=i((vK,Dm)=>{"use strict";var g2=Fm();Sr();Dm.exports=g2});var Um=i((dK,Gm)=>{"use strict";var b2=Bm();Gm.exports=b2});var Km=i((mK,Hm)=>{"use strict";var q2=Um();Hm.exports=q2});var zm=i((hK,Wm)=>{"use strict";Wm.exports=Km()});var ia=i((yK,Vm)=>{Vm.exports=zm()});var Jm=i((gK,Ym)=>{"use strict";var x2=K(),S2=N(),w2=Rt(),T2=Un(),E2=Z(),C2=S2([].concat);Ym.exports=x2("Reflect","ownKeys")||function(r){var t=w2.f(E2(r)),n=T2.f;return n?C2(t,n(r)):t}});var Zm=i((bK,Xm)=>{"use strict";var Qm=W(),O2=Jm(),k2=ht(),I2=ae();Xm.exports=function(e,r,t){for(var n=O2(r),a=I2.f,o=k2.f,u=0;u<n.length;u++){var c=n[u];!Qm(e,c)&&!(t&&Qm(t,c))&&a(e,c,o(r,c))}}});var rh=i((qK,eh)=>{"use strict";var _2=L(),P2=Ce();eh.exports=function(e,r){_2(r)&&"cause"in r&&P2(e,"cause",r.cause)}});var ih=i((xK,ah)=>{"use strict";var R2=N(),th=Error,A2=R2("".replace),N2=function(e){return String(new th(e).stack)}("zxcasd"),nh=/\n\s*at [^:]*:[^\n]*/,M2=nh.test(N2);ah.exports=function(e,r){if(M2&&typeof e=="string"&&!th.prepareStackTrace)for(;r--;)e=A2(e,nh,"");return e}});var uh=i((SK,oh)=>{"use strict";var j2=P(),$2=Qe();oh.exports=!j2(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",$2(1,7)),e.stack!==7):!0})});var lh=i((wK,ch)=>{"use strict";var L2=Ce(),F2=ih(),D2=uh(),sh=Error.captureStackTrace;ch.exports=function(e,r,t,n){D2&&(sh?sh(e,r):L2(e,"stack",F2(t,n)))}});var he=i((TK,dh)=>{"use strict";var B2=J(),G2=G(),U2=Z(),H2=Xe(),K2=eo(),W2=de(),fh=U(),z2=Dn(),V2=It(),ph=Zi(),Y2=TypeError,oa=function(e,r){this.stopped=e,this.result=r},vh=oa.prototype;dh.exports=function(e,r,t){var n=t&&t.that,a=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),c=!!(t&&t.INTERRUPTED),s=B2(r,n),l,f,v,p,d,h,m,y=function(b){return l&&ph(l,"normal"),new oa(!0,b)},g=function(b){return a?(U2(b),c?s(b[0],b[1],y):s(b[0],b[1])):c?s(b,y):s(b)};if(o)l=e.iterator;else if(u)l=e;else{if(f=V2(e),!f)throw new Y2(H2(e)+" is not iterable");if(K2(f)){for(v=0,p=W2(e);p>v;v++)if(d=g(e[v]),d&&fh(vh,d))return d;return new oa(!1)}l=z2(e,f)}for(h=o?e.next:l.next;!(m=G2(h,l)).done;){try{d=g(m.value)}catch(b){ph(l,"throw",b)}if(typeof d=="object"&&d&&fh(vh,d))return d}return new oa(!1)}});var hh=i((EK,mh)=>{"use strict";var J2=Ze();mh.exports=function(e,r){return e===void 0?arguments.length<2?"":r:J2(e)}});var gh=i(()=>{"use strict";var Q2=x(),X2=U(),Z2=Et(),ua=Ct(),eN=Zm(),yh=rr(),Go=Ce(),Uo=Qe(),rN=rh(),tN=lh(),nN=he(),aN=hh(),iN=A(),oN=iN("toStringTag"),sa=Error,uN=[].push,et=function(r,t){var n=X2(Ho,this),a;ua?a=ua(new sa,n?Z2(this):Ho):(a=n?this:yh(Ho),Go(a,oN,"Error")),t!==void 0&&Go(a,"message",aN(t)),tN(a,et,a.stack,1),arguments.length>2&&rN(a,arguments[2]);var o=[];return nN(r,uN,{that:o}),Go(a,"errors",o),a};ua?ua(et,sa):eN(et,sa,{name:!0});var Ho=et.prototype=yh(sa.prototype,{constructor:Uo(1,et),message:Uo(1,""),name:Uo(1,"AggregateError")});Q2({global:!0,constructor:!0,arity:2},{AggregateError:et})});var Ko=i(()=>{"use strict";gh()});var Wo=i((_K,bh)=>{"use strict";var Lt=R(),sN=Fr(),cN=Ee(),ca=function(e){return sN.slice(0,e.length)===e};bh.exports=function(){return ca("Bun/")?"BUN":ca("Cloudflare-Workers")?"CLOUDFLARE":ca("Deno/")?"DENO":ca("Node.js/")?"NODE":Lt.Bun&&typeof Bun.version=="string"?"BUN":Lt.Deno&&typeof Deno.version=="object"?"DENO":cN(Lt.process)==="process"?"NODE":Lt.window&&Lt.document?"BROWSER":"REST"}()});var Ft=i((PK,qh)=>{"use strict";var lN=Wo();qh.exports=lN==="NODE"});var zo=i((RK,Sh)=>{"use strict";var fN=K(),pN=Hn(),vN=A(),dN=H(),xh=vN("species");Sh.exports=function(e){var r=fN(e);dN&&r&&!r[xh]&&pN(r,xh,{configurable:!0,get:function(){return this}})}});var la=i((AK,wh)=>{"use strict";var mN=U(),hN=TypeError;wh.exports=function(e,r){if(mN(r,e))return e;throw new hN("Incorrect invocation")}});var Vo=i((NK,Th)=>{"use strict";var yN=xt(),gN=Xe(),bN=TypeError;Th.exports=function(e){if(yN(e))return e;throw new bN(gN(e)+" is not a constructor")}});var Yo=i((MK,Ch)=>{"use strict";var Eh=Z(),qN=Vo(),xN=lr(),SN=A(),wN=SN("species");Ch.exports=function(e,r){var t=Eh(e).constructor,n;return t===void 0||xN(n=Eh(t)[wN])?r:qN(n)}});var kh=i((jK,Oh)=>{"use strict";var TN=TypeError;Oh.exports=function(e,r){if(e<r)throw new TN("Not enough arguments");return e}});var Jo=i(($K,Ih)=>{"use strict";var EN=Fr();Ih.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(EN)});var iu=i((LK,Lh)=>{"use strict";var fe=R(),CN=Lr(),ON=J(),_h=M(),kN=W(),$h=P(),Ph=Gi(),IN=dr(),Rh=En(),_N=kh(),PN=Jo(),RN=Ft(),tu=fe.setImmediate,nu=fe.clearImmediate,AN=fe.process,Qo=fe.Dispatch,NN=fe.Function,Ah=fe.MessageChannel,MN=fe.String,Xo=0,Dt={},Nh="onreadystatechange",Bt,wr,Zo,eu;$h(function(){Bt=fe.location});var au=function(e){if(kN(Dt,e)){var r=Dt[e];delete Dt[e],r()}},ru=function(e){return function(){au(e)}},Mh=function(e){au(e.data)},jh=function(e){fe.postMessage(MN(e),Bt.protocol+"//"+Bt.host)};(!tu||!nu)&&(tu=function(r){_N(arguments.length,1);var t=_h(r)?r:NN(r),n=IN(arguments,1);return Dt[++Xo]=function(){CN(t,void 0,n)},wr(Xo),Xo},nu=function(r){delete Dt[r]},RN?wr=function(e){AN.nextTick(ru(e))}:Qo&&Qo.now?wr=function(e){Qo.now(ru(e))}:Ah&&!PN?(Zo=new Ah,eu=Zo.port2,Zo.port1.onmessage=Mh,wr=ON(eu.postMessage,eu)):fe.addEventListener&&_h(fe.postMessage)&&!fe.importScripts&&Bt&&Bt.protocol!=="file:"&&!$h(jh)?(wr=jh,fe.addEventListener("message",Mh,!1)):Nh in Rh("script")?wr=function(e){Ph.appendChild(Rh("script"))[Nh]=function(){Ph.removeChild(this),au(e)}}:wr=function(e){setTimeout(ru(e),0)});Lh.exports={set:tu,clear:nu}});var Bh=i((FK,Dh)=>{"use strict";var Fh=R(),jN=H(),$N=Object.getOwnPropertyDescriptor;Dh.exports=function(e){if(!jN)return Fh[e];var r=$N(Fh,e);return r&&r.value}});var ou=i((DK,Uh)=>{"use strict";var Gh=function(){this.head=null,this.tail=null};Gh.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Uh.exports=Gh});var Kh=i((BK,Hh)=>{"use strict";var LN=Fr();Hh.exports=/ipad|iphone|ipod/i.test(LN)&&typeof Pebble<"u"});var zh=i((GK,Wh)=>{"use strict";var FN=Fr();Wh.exports=/web0s(?!.*chrome)/i.test(FN)});var ey=i((UK,Zh)=>{"use strict";var tt=R(),DN=Bh(),Vh=J(),uu=iu().set,BN=ou(),GN=Jo(),UN=Kh(),HN=zh(),su=Ft(),Yh=tt.MutationObserver||tt.WebKitMutationObserver,Jh=tt.document,Qh=tt.process,fa=tt.Promise,fu=DN("queueMicrotask"),rt,cu,lu,pa,Xh;fu||(Gt=new BN,Ut=function(){var e,r;for(su&&(e=Qh.domain)&&e.exit();r=Gt.get();)try{r()}catch(t){throw Gt.head&&rt(),t}e&&e.enter()},!GN&&!su&&!HN&&Yh&&Jh?(cu=!0,lu=Jh.createTextNode(""),new Yh(Ut).observe(lu,{characterData:!0}),rt=function(){lu.data=cu=!cu}):!UN&&fa&&fa.resolve?(pa=fa.resolve(void 0),pa.constructor=fa,Xh=Vh(pa.then,pa),rt=function(){Xh(Ut)}):su?rt=function(){Qh.nextTick(Ut)}:(uu=Vh(uu,tt),rt=function(){uu(Ut)}),fu=function(e){Gt.head||rt(),Gt.add(e)});var Gt,Ut;Zh.exports=fu});var ty=i((HK,ry)=>{"use strict";ry.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var Tr=i((KK,ny)=>{"use strict";ny.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var Er=i((WK,ay)=>{"use strict";var KN=R();ay.exports=KN.Promise});var nt=i((zK,sy)=>{"use strict";var WN=R(),Ht=Er(),zN=M(),VN=gi(),YN=Ei(),JN=A(),iy=Wo(),QN=ee(),pu=Dr(),oy=Ht&&Ht.prototype,XN=JN("species"),vu=!1,uy=zN(WN.PromiseRejectionEvent),ZN=VN("Promise",function(){var e=YN(Ht),r=e!==String(Ht);if(!r&&pu===66||QN&&!(oy.catch&&oy.finally))return!0;if(!pu||pu<51||!/native code/.test(e)){var t=new Ht(function(o){o(1)}),n=function(o){o(function(){},function(){})},a=t.constructor={};if(a[XN]=n,vu=t.then(function(){})instanceof n,!vu)return!0}return!r&&(iy==="BROWSER"||iy==="DENO")&&!uy});sy.exports={CONSTRUCTOR:ZN,REJECTION_EVENT:uy,SUBCLASSING:vu}});var ke=i((VK,ly)=>{"use strict";var cy=D(),eM=TypeError,rM=function(e){var r,t;this.promise=new e(function(n,a){if(r!==void 0||t!==void 0)throw new eM("Bad Promise constructor");r=n,t=a}),this.resolve=cy(r),this.reject=cy(t)};ly.exports.f=function(e){return new rM(e)}});var _y=i(()=>{"use strict";var tM=x(),nM=ee(),ha=Ft(),ar=R(),aM=Y(),ut=G(),fy=je(),py=Ct(),iM=Le(),oM=zo(),uM=D(),ma=M(),sM=L(),cM=la(),lM=Yo(),yy=iu().set,gu=ey(),fM=ty(),pM=Tr(),vM=ou(),gy=er(),ya=Er(),bu=nt(),by=ke(),ga="Promise",qy=bu.CONSTRUCTOR,dM=bu.REJECTION_EVENT,mM=bu.SUBCLASSING,du=gy.getterFor(ga),hM=gy.set,at=ya&&ya.prototype,Cr=ya,va=at,xy=ar.TypeError,mu=ar.document,qu=ar.process,hu=by.f,yM=hu,gM=!!(mu&&mu.createEvent&&ar.dispatchEvent),Sy="unhandledrejection",bM="rejectionhandled",vy=0,wy=1,qM=2,xu=1,Ty=2,da,dy,Ey,my,Cy=function(e){var r;return sM(e)&&ma(r=e.then)?r:!1},Oy=function(e,r){var t=r.value,n=r.state===wy,a=n?e.ok:e.fail,o=e.resolve,u=e.reject,c=e.domain,s,l,f;try{a?(n||(r.rejection===Ty&&SM(r),r.rejection=xu),a===!0?s=t:(c&&c.enter(),s=a(t),c&&(c.exit(),f=!0)),s===e.promise?u(new xy("Promise-chain cycle")):(l=Cy(s))?ut(l,s,o,u):o(s)):u(t)}catch(v){c&&!f&&c.exit(),u(v)}},ky=function(e,r){e.notified||(e.notified=!0,gu(function(){for(var t=e.reactions,n;n=t.get();)Oy(n,e);e.notified=!1,r&&!e.rejection&&xM(e)}))},Iy=function(e,r,t){var n,a;gM?(n=mu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),ar.dispatchEvent(n)):n={promise:r,reason:t},!dM&&(a=ar["on"+e])?a(n):e===Sy&&fM("Unhandled promise rejection",t)},xM=function(e){ut(yy,ar,function(){var r=e.facade,t=e.value,n=hy(e),a;if(n&&(a=pM(function(){ha?qu.emit("unhandledRejection",t,r):Iy(Sy,r,t)}),e.rejection=ha||hy(e)?Ty:xu,a.error))throw a.value})},hy=function(e){return e.rejection!==xu&&!e.parent},SM=function(e){ut(yy,ar,function(){var r=e.facade;ha?qu.emit("rejectionHandled",r):Iy(bM,r,e.value)})},it=function(e,r,t){return function(n){e(r,n,t)}},ot=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=qM,ky(e,!0))},yu=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new xy("Promise can't be resolved itself");var n=Cy(r);n?gu(function(){var a={done:!1};try{ut(n,r,it(yu,a,e),it(ot,a,e))}catch(o){ot(a,o,e)}}):(e.value=r,e.state=wy,ky(e,!1))}catch(a){ot({done:!1},a,e)}}};if(qy&&(Cr=function(r){cM(this,va),uM(r),ut(da,this);var t=du(this);try{r(it(yu,t),it(ot,t))}catch(n){ot(t,n)}},va=Cr.prototype,da=function(r){hM(this,{type:ga,done:!1,notified:!1,parent:!1,reactions:new vM,rejection:!1,state:vy,value:null})},da.prototype=fy(va,"then",function(r,t){var n=du(this),a=hu(lM(this,Cr));return n.parent=!0,a.ok=ma(r)?r:!0,a.fail=ma(t)&&t,a.domain=ha?qu.domain:void 0,n.state===vy?n.reactions.add(a):gu(function(){Oy(a,n)}),a.promise}),dy=function(){var e=new da,r=du(e);this.promise=e,this.resolve=it(yu,r),this.reject=it(ot,r)},by.f=hu=function(e){return e===Cr||e===Ey?new dy(e):yM(e)},!nM&&ma(ya)&&at!==Object.prototype)){my=at.then,mM||fy(at,"then",function(r,t){var n=this;return new Cr(function(a,o){ut(my,n,a,o)}).then(r,t)},{unsafe:!0});try{delete at.constructor}catch{}py&&py(at,va)}tM({global:!0,constructor:!0,wrap:!0,forced:qy},{Promise:Cr});Ey=aM.Promise;iM(Cr,ga,!1,!0);oM(ga)});var Kt=i((QK,Py)=>{"use strict";var wM=Er(),TM=to(),EM=nt().CONSTRUCTOR;Py.exports=EM||!TM(function(e){wM.all(e).then(void 0,function(){})})});var Ry=i(()=>{"use strict";var CM=x(),OM=G(),kM=D(),IM=ke(),_M=Tr(),PM=he(),RM=Kt();CM({target:"Promise",stat:!0,forced:RM},{all:function(r){var t=this,n=IM.f(t),a=n.resolve,o=n.reject,u=_M(function(){var c=kM(t.resolve),s=[],l=0,f=1;PM(r,function(v){var p=l++,d=!1;f++,OM(c,t,v).then(function(h){d||(d=!0,s[p]=h,--f||a(s))},o)}),--f||a(s)});return u.error&&o(u.value),n.promise}})});var Ny=i(()=>{"use strict";var AM=x(),NM=ee(),MM=nt().CONSTRUCTOR,wu=Er(),jM=K(),$M=M(),LM=je(),Ay=wu&&wu.prototype;AM({target:"Promise",proto:!0,forced:MM,real:!0},{catch:function(e){return this.then(void 0,e)}});!NM&&$M(wu)&&(Su=jM("Promise").prototype.catch,Ay.catch!==Su&&LM(Ay,"catch",Su,{unsafe:!0}));var Su});var My=i(()=>{"use strict";var FM=x(),DM=G(),BM=D(),GM=ke(),UM=Tr(),HM=he(),KM=Kt();FM({target:"Promise",stat:!0,forced:KM},{race:function(r){var t=this,n=GM.f(t),a=n.reject,o=UM(function(){var u=BM(t.resolve);HM(r,function(c){DM(u,t,c).then(n.resolve,a)})});return o.error&&a(o.value),n.promise}})});var jy=i(()=>{"use strict";var WM=x(),zM=ke(),VM=nt().CONSTRUCTOR;WM({target:"Promise",stat:!0,forced:VM},{reject:function(r){var t=zM.f(this),n=t.reject;return n(r),t.promise}})});var Tu=i((oW,$y)=>{"use strict";var YM=Z(),JM=L(),QM=ke();$y.exports=function(e,r){if(YM(e),JM(r)&&r.constructor===e)return r;var t=QM.f(e),n=t.resolve;return n(r),t.promise}});var Dy=i(()=>{"use strict";var XM=x(),ZM=K(),Ly=ee(),ej=Er(),Fy=nt().CONSTRUCTOR,rj=Tu(),tj=ZM("Promise"),nj=Ly&&!Fy;XM({target:"Promise",stat:!0,forced:Ly||Fy},{resolve:function(r){return rj(nj&&this===tj?ej:this,r)}})});var By=i(()=>{"use strict";_y();Ry();Ny();My();jy();Dy()});var Eu=i(()=>{"use strict";var aj=x(),ij=G(),oj=D(),uj=ke(),sj=Tr(),cj=he(),lj=Kt();aj({target:"Promise",stat:!0,forced:lj},{allSettled:function(r){var t=this,n=uj.f(t),a=n.resolve,o=n.reject,u=sj(function(){var c=oj(t.resolve),s=[],l=0,f=1;cj(r,function(v){var p=l++,d=!1;f++,ij(c,t,v).then(function(h){d||(d=!0,s[p]={status:"fulfilled",value:h},--f||a(s))},function(h){d||(d=!0,s[p]={status:"rejected",reason:h},--f||a(s))})}),--f||a(s)});return u.error&&o(u.value),n.promise}})});var Cu=i(()=>{"use strict";var fj=x(),pj=G(),vj=D(),dj=K(),mj=ke(),hj=Tr(),yj=he(),gj=Kt(),Gy="No one promise resolved";fj({target:"Promise",stat:!0,forced:gj},{any:function(r){var t=this,n=dj("AggregateError"),a=mj.f(t),o=a.resolve,u=a.reject,c=hj(function(){var s=vj(t.resolve),l=[],f=0,v=1,p=!1;yj(r,function(d){var h=f++,m=!1;v++,pj(s,t,d).then(function(y){m||p||(p=!0,o(y))},function(y){m||p||(m=!0,l[h]=y,--v||u(new n(l,Gy)))})}),--v||u(new n(l,Gy))});return c.error&&u(c.value),a.promise}})});var ku=i(()=>{"use strict";var bj=x(),qj=R(),xj=Lr(),Sj=dr(),wj=ke(),Tj=D(),Hy=Tr(),Ou=qj.Promise,Uy=!1,Ej=!Ou||!Ou.try||Hy(function(){Ou.try(function(e){Uy=e===8},8)}).error||!Uy;bj({target:"Promise",stat:!0,forced:Ej},{try:function(e){var r=arguments.length>1?Sj(arguments,1):[],t=wj.f(this),n=Hy(function(){return xj(Tj(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var Iu=i(()=>{"use strict";var Cj=x(),Oj=ke();Cj({target:"Promise",stat:!0},{withResolvers:function(){var r=Oj.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var Vy=i(()=>{"use strict";var kj=x(),Ij=ee(),ba=Er(),_j=P(),Wy=K(),zy=M(),Pj=Yo(),Ky=Tu(),Rj=je(),Pu=ba&&ba.prototype,Aj=!!ba&&_j(function(){Pu.finally.call({then:function(){}},function(){})});kj({target:"Promise",proto:!0,real:!0,forced:Aj},{finally:function(e){var r=Pj(this,Wy("Promise")),t=zy(e);return this.then(t?function(n){return Ky(r,e()).then(function(){return n})}:e,t?function(n){return Ky(r,e()).then(function(){throw n})}:e)}});!Ij&&zy(ba)&&(_u=Wy("Promise").prototype.finally,Pu.finally!==_u&&Rj(Pu,"finally",_u,{unsafe:!0}));var _u});var Jy=i((xW,Yy)=>{"use strict";Ko();xr();Pt();By();Eu();Cu();ku();Iu();Vy();yr();var Nj=Y();Yy.exports=Nj.Promise});var Xy=i((SW,Qy)=>{"use strict";var Mj=Jy();Sr();Qy.exports=Mj});var Zy=i(()=>{"use strict";ku()});var eg=i(()=>{"use strict";Iu()});var tg=i((OW,rg)=>{"use strict";var jj=Xy();Zy();eg();rg.exports=jj});var ng=i(()=>{"use strict";Ko()});var ag=i(()=>{"use strict";Eu()});var ig=i(()=>{"use strict";Cu()});var ug=i((NW,og)=>{"use strict";var $j=tg();ng();ag();ig();og.exports=$j});var st=i((MW,sg)=>{"use strict";sg.exports=ug()});var fg=i((DW,lg)=>{"use strict";_o();var Lj=Jr();lg.exports=Lj.f("asyncIterator")});var vg=i((BW,pg)=>{"use strict";var Fj=fg();pg.exports=Fj});var mg=i((GW,dg)=>{"use strict";var Dj=vg();dg.exports=Dj});var yg=i((UW,hg)=>{"use strict";var Bj=mg();hg.exports=Bj});var qa=i((HW,gg)=>{"use strict";gg.exports=yg()});var Sg=i(()=>{"use strict";var Gj=x(),Uj=P(),Hj=ne(),xg=Et(),Kj=Wi(),Wj=Uj(function(){xg(1)});Gj({target:"Object",stat:!0,forced:Wj,sham:!Kj},{getPrototypeOf:function(r){return xg(Hj(r))}})});var Tg=i((YW,wg)=>{"use strict";Sg();var zj=Y();wg.exports=zj.Object.getPrototypeOf});var Cg=i((JW,Eg)=>{"use strict";var Vj=Tg();Eg.exports=Vj});var kg=i((QW,Og)=>{"use strict";var Yj=Cg();Og.exports=Yj});var _g=i((XW,Ig)=>{"use strict";var Jj=kg();Ig.exports=Jj});var xa=i((ZW,Pg)=>{"use strict";Pg.exports=_g()});var Ag=i(()=>{"use strict";var Qj=x(),Xj=N(),Zj=Me(),e$=Xj([].reverse),Rg=[1,2];Qj({target:"Array",proto:!0,forced:String(Rg)===String(Rg.reverse())},{reverse:function(){return Zj(this)&&(this.length=this.length),e$(this)}})});var Mg=i((tz,Ng)=>{"use strict";Ag();var r$=le();Ng.exports=r$("Array","reverse")});var $g=i((nz,jg)=>{"use strict";var t$=U(),n$=Mg(),Nu=Array.prototype;jg.exports=function(e){var r=e.reverse;return e===Nu||t$(Nu,e)&&r===Nu.reverse?n$:r}});var Fg=i((az,Lg)=>{"use strict";var a$=$g();Lg.exports=a$});var Bg=i((iz,Dg)=>{"use strict";var i$=Fg();Dg.exports=i$});var Ug=i((oz,Gg)=>{"use strict";var o$=Bg();Gg.exports=o$});var Kg=i((uz,Hg)=>{"use strict";Hg.exports=Ug()});var Mu=i((sz,Vt)=>{function u$(e,r){this.v=e,this.k=r}Vt.exports=u$,Vt.exports.__esModule=!0,Vt.exports.default=Vt.exports});var Wg=i(()=>{"use strict";var s$=x(),c$=H(),l$=rr();s$({target:"Object",stat:!0,sham:!c$},{create:l$})});var Vg=i((fz,zg)=>{"use strict";Wg();var f$=Y(),p$=f$.Object;zg.exports=function(r,t){return p$.create(r,t)}});var Jg=i((pz,Yg)=>{"use strict";var v$=Vg();Yg.exports=v$});var Xg=i((vz,Qg)=>{"use strict";var d$=Jg();Qg.exports=d$});var eb=i((dz,Zg)=>{"use strict";var m$=Xg();Zg.exports=m$});var Sa=i((mz,rb)=>{"use strict";rb.exports=eb()});var $u=i((hz,ib)=>{"use strict";var nb=N(),h$=D(),y$=L(),g$=W(),tb=dr(),b$=$r(),ab=Function,q$=nb([].concat),x$=nb([].join),ju={},S$=function(e,r,t){if(!g$(ju,r)){for(var n=[],a=0;a<r;a++)n[a]="a["+a+"]";ju[r]=ab("C,a","return new C("+x$(n,",")+")")}return ju[r](e,t)};ib.exports=b$?ab.bind:function(r){var t=h$(this),n=t.prototype,a=tb(arguments,1),o=function(){var c=q$(a,tb(arguments));return this instanceof o?S$(t,c.length,c):t.apply(r,c)};return y$(n)&&(o.prototype=n),o}});var ub=i(()=>{"use strict";var w$=x(),ob=$u();w$({target:"Function",proto:!0,forced:Function.bind!==ob},{bind:ob})});var cb=i((bz,sb)=>{"use strict";ub();var T$=le();sb.exports=T$("Function","bind")});var fb=i((qz,lb)=>{"use strict";var E$=U(),C$=cb(),Lu=Function.prototype;lb.exports=function(e){var r=e.bind;return e===Lu||E$(Lu,e)&&r===Lu.bind?C$:r}});var vb=i((xz,pb)=>{"use strict";var O$=fb();pb.exports=O$});var mb=i((Sz,db)=>{"use strict";var k$=vb();db.exports=k$});var yb=i((wz,hb)=>{"use strict";var I$=mb();hb.exports=I$});var Yt=i((Tz,gb)=>{"use strict";gb.exports=yb()});var bb=i(()=>{"use strict";var _$=x(),P$=Ct();_$({target:"Object",stat:!0},{setPrototypeOf:P$})});var xb=i((Oz,qb)=>{"use strict";bb();var R$=Y();qb.exports=R$.Object.setPrototypeOf});var wb=i((kz,Sb)=>{"use strict";var A$=xb();Sb.exports=A$});var Eb=i((Iz,Tb)=>{"use strict";var N$=wb();Tb.exports=N$});var Ob=i((_z,Cb)=>{"use strict";var M$=Eb();Cb.exports=M$});var wa=i((Pz,kb)=>{"use strict";kb.exports=Ob()});var _b=i(()=>{"use strict";var j$=x(),$$=H(),Ib=ae().f;j$({target:"Object",stat:!0,forced:Object.defineProperty!==Ib,sham:!$$},{defineProperty:Ib})});var Ab=i((Nz,Rb)=>{"use strict";_b();var L$=Y(),Pb=L$.Object,F$=Rb.exports=function(r,t,n){return Pb.defineProperty(r,t,n)};Pb.defineProperty.sham&&(F$.sham=!0)});var Mb=i((Mz,Nb)=>{"use strict";var D$=Ab();Nb.exports=D$});var $b=i((jz,jb)=>{"use strict";var B$=Mb();jb.exports=B$});var Fb=i(($z,Lb)=>{"use strict";var G$=$b();Lb.exports=G$});var Jt=i((Lz,Db)=>{"use strict";Db.exports=Fb()});var Fu=i((Fz,De)=>{var U$=Jt();function Ta(e,r,t,n){var a=U$;try{a({},"",{})}catch{a=0}De.exports=Ta=function(u,c,s,l){function f(v,p){Ta(u,v,function(d){return this._invoke(v,p,d)})}c?a?a(u,c,{value:s,enumerable:!l,configurable:!l,writable:!l}):u[c]=s:(f("next",0),f("throw",1),f("return",2))},De.exports.__esModule=!0,De.exports.default=De.exports,Ta(e,r,t,n)}De.exports=Ta,De.exports.__esModule=!0,De.exports.default=De.exports});var Bu=i((Dz,Be)=>{var Bb=Oe(),Du=Sa(),H$=Yt(),K$=xa(),Gb=wa(),_e=Fu();function Ub(){var e,r,t=typeof Bb=="function"?Bb:{},n=t.iterator||"@@iterator",a=t.toStringTag||"@@toStringTag";function o(d,h,m,y){var g=h&&h.prototype instanceof c?h:c,b=Du(g.prototype);return _e(b,"_invoke",function(k,E,S){var T,w,O,$=0,we=S||[],_=!1,te={p:0,n:0,v:e,a:Te,f:H$(Te).call(Te,e,4),d:function(F,ye){return T=F,w=0,O=e,te.n=ye,u}};function Te(X,F){for(w=X,O=F,r=0;!_&&$&&!ye&&r<we.length;r++){var ye,C=we[r],jr=te.p,Ve=C[2];X>3?(ye=Ve===F)&&(O=C[(w=C[4])?5:(w=3,3)],C[4]=C[5]=e):C[0]<=jr&&((ye=X<2&&jr<C[1])?(w=0,te.v=F,te.n=C[1]):jr<Ve&&(ye=X<3||C[0]>F||F>Ve)&&(C[4]=X,C[5]=F,te.n=Ve,w=0))}if(ye||X>1)return u;throw _=!0,F}return function(X,F,ye){if($>1)throw TypeError("Generator is already running");for(_&&F===1&&Te(F,ye),w=F,O=ye;(r=w<2?e:O)||!_;){T||(w?w<3?(w>1&&(te.n=-1),Te(w,O)):te.n=O:te.v=O);try{if($=2,T){if(w||(X="next"),r=T[X]){if(!(r=r.call(T,O)))throw TypeError("iterator result is not an object");if(!r.done)return r;O=r.value,w<2&&(w=0)}else w===1&&(r=T.return)&&r.call(T),w<2&&(O=TypeError("The iterator does not provide a '"+X+"' method"),w=1);T=e}else if((r=(_=te.n<0)?O:k.call(E,te))!==u)break}catch(C){T=e,w=1,O=C}finally{$=1}}return{value:r,done:_}}}(d,m,y),!0),b}var u={};function c(){}function s(){}function l(){}r=K$;var f=[][n]?r(r([][n]())):(_e(r={},n,function(){return this}),r),v=l.prototype=c.prototype=Du(f);function p(d){return Gb?Gb(d,l):(d.__proto__=l,_e(d,a,"GeneratorFunction")),d.prototype=Du(v),d}return s.prototype=l,_e(v,"constructor",l),_e(l,"constructor",s),s.displayName="GeneratorFunction",_e(l,a,"GeneratorFunction"),_e(v),_e(v,a,"Generator"),_e(v,n,function(){return this}),_e(v,"toString",function(){return"[object Generator]"}),(Be.exports=Ub=function(){return{w:o,m:p}},Be.exports.__esModule=!0,Be.exports.default=Be.exports)()}Be.exports=Ub,Be.exports.__esModule=!0,Be.exports.default=Be.exports});var Hu=i((Bz,Qt)=>{var W$=Oe(),z$=qa(),V$=Mu(),Gu=Fu();function Uu(e,r){function t(a,o,u,c){try{var s=e[a](o),l=s.value;return l instanceof V$?r.resolve(l.v).then(function(f){t("next",f,u,c)},function(f){t("throw",f,u,c)}):r.resolve(l).then(function(f){s.value=f,u(s)},function(f){return t("throw",f,u,c)})}catch(f){c(f)}}var n;this.next||(Gu(Uu.prototype),Gu(Uu.prototype,typeof W$=="function"&&z$||"@asyncIterator",function(){return this})),Gu(this,"_invoke",function(a,o,u){function c(){return new r(function(s,l){t(a,u,s,l)})}return n=n?n.then(c,c):c()},!0)}Qt.exports=Uu,Qt.exports.__esModule=!0,Qt.exports.default=Qt.exports});var Ku=i((Gz,Xt)=>{var Y$=st(),J$=Bu(),Q$=Hu();function X$(e,r,t,n,a){return new Q$(J$().w(e,r,t,n),a||Y$)}Xt.exports=X$,Xt.exports.__esModule=!0,Xt.exports.default=Xt.exports});var Hb=i((Uz,Zt)=>{var Z$=Ku();function eL(e,r,t,n,a){var o=Z$(e,r,t,n,a);return o.next().then(function(u){return u.done?u.value:o.next()})}Zt.exports=eL,Zt.exports.__esModule=!0,Zt.exports.default=Zt.exports});var zb=i((Hz,Wb)=>{"use strict";var Kb=Xe(),rL=TypeError;Wb.exports=function(e,r){if(!delete e[r])throw new rL("Cannot delete property "+Kb(r)+" of "+Kb(e))}});var Vb=i(()=>{"use strict";var tL=x(),nL=ne(),aL=de(),iL=zr(),oL=zb(),uL=_t(),sL=[].unshift(0)!==1,cL=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},lL=sL||!cL();tL({target:"Array",proto:!0,arity:1,forced:lL},{unshift:function(r){var t=nL(this),n=aL(t),a=arguments.length;if(a){uL(n+a);for(var o=n;o--;){var u=o+a;o in t?t[u]=t[o]:oL(t,u)}for(var c=0;c<a;c++)t[c]=arguments[c]}return iL(t,n+a)}})});var Jb=i((zz,Yb)=>{"use strict";Vb();var fL=le();Yb.exports=fL("Array","unshift")});var Xb=i((Vz,Qb)=>{"use strict";var pL=U(),vL=Jb(),Wu=Array.prototype;Qb.exports=function(e){var r=e.unshift;return e===Wu||pL(Wu,e)&&r===Wu.unshift?vL:r}});var eq=i((Yz,Zb)=>{"use strict";var dL=Xb();Zb.exports=dL});var tq=i((Jz,rq)=>{"use strict";var mL=eq();rq.exports=mL});var aq=i((Qz,nq)=>{"use strict";var hL=tq();nq.exports=hL});var oq=i((Xz,iq)=>{"use strict";iq.exports=aq()});var uq=i((Zz,en)=>{var yL=oq();function gL(e){var r=Object(e),t=[];for(var n in r)yL(t).call(t,n);return function a(){for(;t.length;)if((n=t.pop())in r)return a.value=n,a.done=!1,a;return a.done=!0,a}}en.exports=gL,en.exports.__esModule=!0,en.exports.default=en.exports});var cq=i((eV,sq)=>{"use strict";xr();Pt();yr();Ro();var bL=Jr();sq.exports=bL.f("iterator")});var fq=i((rV,lq)=>{"use strict";var qL=cq();Sr();lq.exports=qL});var vq=i((tV,pq)=>{"use strict";var xL=fq();pq.exports=xL});var mq=i((nV,dq)=>{"use strict";var SL=vq();dq.exports=SL});var rn=i((aV,hq)=>{"use strict";hq.exports=mq()});var yq=i((iV,Ge)=>{var Ea=Oe(),wL=rn();function zu(e){"@babel/helpers - typeof";return Ge.exports=zu=typeof Ea=="function"&&typeof wL=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Ea=="function"&&r.constructor===Ea&&r!==Ea.prototype?"symbol":typeof r},Ge.exports.__esModule=!0,Ge.exports.default=Ge.exports,zu(e)}Ge.exports=zu,Ge.exports.__esModule=!0,Ge.exports.default=Ge.exports});var gq=i((oV,tn)=>{var TL=yq().default,EL=Oe(),CL=rn();function OL(e){if(e!=null){var r=e[typeof EL=="function"&&CL||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(TL(e)+" is not iterable")}tn.exports=OL,tn.exports.__esModule=!0,tn.exports.default=tn.exports});var xq=i((uV,Ue)=>{var bq=xa(),kL=Kg(),IL=Mu(),_L=Bu(),PL=Hb(),RL=Ku(),AL=Hu(),NL=uq(),qq=gq();function Vu(){"use strict";var e=_L(),r=e.m(Vu),t=(bq?bq(r):r.__proto__).constructor;function n(u){var c=typeof u=="function"&&u.constructor;return!!c&&(c===t||(c.displayName||c.name)==="GeneratorFunction")}var a={throw:1,return:2,break:3,continue:3};function o(u){var c,s;return function(l){c||(c={stop:function(){return s(l.a,2)},catch:function(){return l.v},abrupt:function(v,p){return s(l.a,a[v],p)},delegateYield:function(v,p,d){return c.resultName=p,s(l.d,qq(v),d)},finish:function(v){return s(l.f,v)}},s=function(v,p,d){l.p=c.prev,l.n=c.next;try{return v(p,d)}finally{c.next=l.n}}),c.resultName&&(c[c.resultName]=l.v,c.resultName=void 0),c.sent=l.v,c.next=l.n;try{return u.call(this,c)}finally{l.p=c.prev,l.n=c.next}}}return(Ue.exports=Vu=function(){return{wrap:function(s,l,f,v){return e.w(o(s),l,f,v&&kL(v).call(v))},isGeneratorFunction:n,mark:e.m,awrap:function(s,l){return new IL(s,l)},AsyncIterator:AL,async:function(s,l,f,v,p){return(n(l)?RL:PL)(o(s),l,f,v,p)},keys:NL,values:qq}},Ue.exports.__esModule=!0,Ue.exports.default=Ue.exports)()}Ue.exports=Vu,Ue.exports.__esModule=!0,Ue.exports.default=Ue.exports});var pe=i((sV,Sq)=>{var Ca=xq()();Sq.exports=Ca;try{regeneratorRuntime=Ca}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=Ca:Function("r","regeneratorRuntime = r")(Ca)}});var Yu=i((ka,Tq)=>{"use strict";Object.defineProperty(ka,"__esModule",{value:!0});var Oa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wq=function(){function e(r,t){var n=[],a=!0,o=!1,u=void 0;try{for(var c=r[Symbol.iterator](),s;!(a=(s=c.next()).done)&&(n.push(s.value),!(t&&n.length===t));a=!0);}catch(l){o=!0,u=l}finally{try{!a&&c.return&&c.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();ka.default=ML;function ML(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(a){return a.type==="tag"||a.type==="script"||a.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var a=this.attribs,o=Object.keys(a),u=o.reduce(function(c,s,l){return c[l]={name:s,value:a[s]},c},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var a=[];return or(this.childTags,function(o){(o.name===n||n==="*")&&a.push(o)}),a}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var a=n.trim().replace(/\s+/g," ").split(" "),o=[];return or([this],function(u){var c=u.attribs.class;c&&a.every(function(s){return c.indexOf(s)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var a=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=jL(n),u=o.shift(),c=o.length;return u(this).filter(function(s){for(var l=0;l<c;){if(s=o[l](s,a),!s)return!1;l+=1}return!0})}),t.contains||(t.contains=function(n){var a=!1;return or([this],function(o,u){o===n&&(a=!0,u())}),a}),!0}function jL(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,a=r.split(":"),o=wq(a,2),u=o[0],c=o[1],s=null,l=null;if(function(){switch(!0){case/>/.test(u):l=function(S){return function(T){return T(S.parent)&&S.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");s=function(S){var T=S.attribs.class;return T&&h.every(function(w){return T.indexOf(w)>-1})},l=function(S,T){return n?S.getElementsByClassName(h.join(" ")):typeof S=="function"?S(s):nn(S,T,s)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),y=wq(m,2),g=y[0],b=y[1];s=function(S){var T=Object.keys(S.attribs).indexOf(g)>-1;return!!(T&&(!b||S.attribs[g]===b))},l=function(S,T){if(n){var w=function(){var O=[];return or([S],function($){s($)&&O.push($)}),{v:O}}();if((typeof w>"u"?"undefined":Oa(w))==="object")return w.v}return typeof S=="function"?S(s):nn(S,T,s)};break;case/^#/.test(u):var k=u.substr(1);s=function(S){return S.attribs.id===k},l=function(S,T){if(n){var w=function(){var O=[];return or([S],function($,we){s($)&&(O.push($),we())}),{v:O}}();if((typeof w>"u"?"undefined":Oa(w))==="object")return w.v}return typeof S=="function"?S(s):nn(S,T,s)};break;case/\*/.test(u):s=function(S){return!0},l=function(S,T){if(n){var w=function(){var O=[];return or([S],function($){return O.push($)}),{v:O}}();if((typeof w>"u"?"undefined":Oa(w))==="object")return w.v}return typeof S=="function"?S(s):nn(S,T,s)};break;default:s=function(S){return S.name===u},l=function(S,T){if(n){var w=function(){var O=[];return or([S],function($){s($)&&O.push($)}),{v:O}}();if((typeof w>"u"?"undefined":Oa(w))==="object")return w.v}return typeof S=="function"?S(s):nn(S,T,s)}}}(),!c)return l;var f=c.match(/-(child|type)\((\d+)\)$/),v=f[1],p=parseInt(f[2],10)-1,d=function(m){if(m){var y=m.parent.childTags;v==="type"&&(y=y.filter(s));var g=y.findIndex(function(b){return b===m});if(g===p)return!0}return!1};return function(m){var y=l(m);return n?y.reduce(function(g,b){return d(b)&&g.push(b),g},[]):d(y)&&y}})}function or(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&or(t.childTags,r)})}function nn(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}Tq.exports=ka.default});var _a=i(Ia=>{"use strict";Object.defineProperty(Ia,"__esModule",{value:!0});Ia.convertNodeList=$L;Ia.escapeValue=LL;function $L(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function LL(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var Nq=i((Pa,Aq)=>{"use strict";Object.defineProperty(Pa,"__esModule",{value:!0});Pa.default=FL;var kq=_a(),Eq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function FL(e,r){var t=r.root,n=t===void 0?document:t,a=r.skip,o=a===void 0?null:a,u=r.priority,c=u===void 0?["id","class","href","src"]:u,s=r.ignore,l=s===void 0?{}:s,f=[],v=e,p=f.length,d=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(g){return typeof g!="function"?function(b){return b===g}:g}),m=function(b){return o&&h.some(function(k){return k(b)})};for(Object.keys(l).forEach(function(g){g==="class"&&(d=!0);var b=l[g];typeof b!="function"&&(typeof b=="number"&&(b=b.toString()),typeof b=="string"&&(b=new RegExp((0,kq.escapeValue)(b).replace(/\\/g,"\\\\"))),typeof b=="boolean"&&(b=b?/(?:)/:/.^/),l[g]=function(k,E){return b.test(E)})}),d&&function(){var g=l.attribute;l.attribute=function(b,k,E){return l.class(k)||g&&g(b,k,E)}}();v!==n;){if(m(v)!==!0){if(Cq(c,v,l,f,n)||Oq(v,l,f,n))break;Cq(c,v,l,f),f.length===p&&Oq(v,l,f),f.length===p&&DL(c,v,l,f)}v=v.parentNode,p=f.length}if(v===n){var y=Pq(c,v,l);f.unshift(y)}return f.join(" ")}function Cq(e,r,t,n){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=Iq(e,r,t);if(o){var u=a.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function Iq(e,r,t){for(var n=r.attributes,a=Object.keys(n).sort(function(m,y){var g=e.indexOf(n[m].name),b=e.indexOf(n[y].name);return b===-1?g===-1?0:-1:g-b}),o=0,u=a.length;o<u;o++){var c=a[o],s=n[c],l=s.name,f=(0,kq.escapeValue)(s.value),v=t[l]||t.attribute,p=Eq[l]||Eq.attribute;if(!Rq(v,l,f,p)){var d="["+l+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(l==="id"&&(d="#"+f),l==="class")){var h=f.trim().replace(/\s+/g,".");d="."+h}return d}}return null}function Oq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,a=_q(e,r);if(a){var o=n.getElementsByTagName(a);if(o.length===1)return t.unshift(a),!0}return!1}function _q(e,r){var t=e.tagName.toLowerCase();return Rq(r.tag,null,t)?null:t}function DL(e,r,t,n){for(var a=r.parentNode,o=a.childTags||a.children,u=0,c=o.length;u<c;u++){var s=o[u];if(s===r){var l=Pq(e,s,t);if(!l)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,s,t,l);var f="> "+l+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function Pq(e,r,t){var n=Iq(e,r,t);return n||(n=_q(r,t)),n}function Rq(e,r,t,n){if(!t)return!0;var a=e||n;return a?a(r,t,n):!1}Aq.exports=Pa.default});var Ju=i((Aa,Mq)=>{"use strict";Object.defineProperty(Aa,"__esModule",{value:!0});Aa.default=KL;var BL=Yu(),GL=HL(BL),UL=_a();function HL(e){return e&&e.__esModule?e:{default:e}}function KL(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,UL.convertNodeList)(r):[r]),!r.length||r.some(function(v){return v.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,GL.default)(r[0],t),a=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(a.length<2)return Ra("",e,"",r);for(var o=[a.pop()];a.length>1;){var u=a.pop(),c=a.join(" "),s=o.join(" "),l=c+" "+s,f=document.querySelectorAll(l);f.length!==r.length&&o.unshift(Ra(c,u,s,r))}return o.unshift(a[0]),a=o,a[0]=Ra("",a[0],a.slice(1).join(" "),r),a[a.length-1]=Ra(a.slice(0,-1).join(" "),a[a.length-1],"",r),n&&delete global.document,a.join(" ").replace(/>/g,"> ").trim()}function Ra(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var a=r.replace(/=.*$/,"]"),o=""+e+a+t,u=document.querySelectorAll(o);if(ct(u,n))r=a;else for(var c=document.querySelectorAll(""+e+a),s=function(){var E=c[l];if(n.some(function(T){return E.contains(T)})){var S=E.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),ct(u,n)&&(r=S),"break"}},l=0,f=c.length;l<f;l++){var o,u,v=s();if(v==="break")break}}if(/>/.test(r)){var p=r.replace(/>/,""),o=""+e+p+t,u=document.querySelectorAll(o);ct(u,n)&&(r=p)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);ct(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(k){return"."+k}).sort(function(k,E){return k.length-E.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);ct(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var y=document.querySelectorAll(""+e+r),g=function(){var E=y[l];if(n.some(function(T){return E.contains(T)})){var S=E.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),ct(u,n)&&(r=S),"break"}},l=0,f=y.length;l<f;l++){var o,u,b=g();if(b==="break")break}}return r}function ct(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var a=0;a<t;a++)if(e[a]===n)return!0;return!1})}Mq.exports=Aa.default});var Qu=i(Na=>{"use strict";Object.defineProperty(Na,"__esModule",{value:!0});Na.getCommonAncestor=WL;Na.getCommonProperties=zL;function WL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,a=[];e.forEach(function(v,p){for(var d=[];v!==n;)v=v.parentNode,d.unshift(v);a[p]=d}),a.sort(function(v,p){return v.length-p.length});for(var o=a.shift(),u=null,c=function(){var p=o[s],d=a.some(function(h){return!h.some(function(m){return m===p})});if(d)return"break";u=p},s=0,l=o.length;s<l;s++){var f=c();if(f==="break")break}return u}function zL(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,a=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(s){return u.some(function(l){return l===s})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(a!==void 0&&function(){var s=t.attributes,l=Object.keys(s).reduce(function(p,d){var h=s[d],m=h.name;return h&&m!=="class"&&(p[m]=h.value),p},{}),f=Object.keys(l),v=Object.keys(a);f.length?v.length?(a=v.reduce(function(p,d){var h=a[d];return h===l[d]&&(p[d]=h),p},{}),Object.keys(a).length?r.attributes=a:delete r.attributes):r.attributes=l:delete r.attributes}(),o!==void 0){var c=t.tagName.toLowerCase();o?c!==o&&delete r.tag:r.tag=c}}),r}});var Bq=i(an=>{"use strict";Object.defineProperty(an,"__esModule",{value:!0});var VL=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};an.getSingleSelector=Zu;an.getMultiSelector=Dq;an.default=eF;var YL=Yu(),$q=Xu(YL),JL=Nq(),QL=Xu(JL),XL=Ju(),Lq=Xu(XL),jq=_a(),Fq=Qu();function Xu(e){return e&&e.__esModule?e:{default:e}}function Zu(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":VL(e))+'")');var t=(0,$q.default)(e,r),n=(0,QL.default)(e,r),a=(0,Lq.default)(n,e,r);return t&&delete global.document,a}function Dq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,jq.convertNodeList)(e)),e.some(function(l){return l.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,$q.default)(e[0],r),n=(0,Fq.getCommonAncestor)(e,r),a=Zu(n,r),o=ZL(e),u=o[0],c=(0,Lq.default)(a+" "+u,e,r),s=(0,jq.convertNodeList)(document.querySelectorAll(c));return e.every(function(l){return s.some(function(f){return f===l})})?(t&&delete global.document,c):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function ZL(e){var r=(0,Fq.getCommonProperties)(e),t=r.classes,n=r.attributes,a=r.tag,o=[];if(a&&o.push(a),t){var u=t.map(function(s){return"."+s}).join("");o.push(u)}if(n){var c=Object.keys(n).reduce(function(s,l){return s.push("["+l+'="'+n[l]+'"]'),s},[]).join("");o.push(c)}return o.length,[o.join("")]}function eF(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?Dq(e,r):Zu(e,r)}});var Hq=i(oe=>{"use strict";Object.defineProperty(oe,"__esModule",{value:!0});oe.default=oe.common=oe.optimize=oe.getMultiSelector=oe.getSingleSelector=oe.select=void 0;var es=Bq();Object.defineProperty(oe,"getSingleSelector",{enumerable:!0,get:function(){return es.getSingleSelector}});Object.defineProperty(oe,"getMultiSelector",{enumerable:!0,get:function(){return es.getMultiSelector}});var Gq=Uq(es),rF=Ju(),tF=Uq(rF),nF=Qu(),aF=iF(nF);function iF(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Uq(e){return e&&e.__esModule?e:{default:e}}oe.select=Gq.default;oe.optimize=tF.default;oe.common=aF;oe.default=Gq.default});var Kq=i(()=>{"use strict";var mF=x(),hF=Me();mF({target:"Array",stat:!0},{isArray:hF})});var zq=i((EV,Wq)=>{"use strict";Kq();var yF=Y();Wq.exports=yF.Array.isArray});var Yq=i((CV,Vq)=>{"use strict";var gF=zq();Vq.exports=gF});var Qq=i((OV,Jq)=>{"use strict";var bF=Yq();Jq.exports=bF});var Zq=i((kV,Xq)=>{"use strict";var qF=Qq();Xq.exports=qF});var rx=i((IV,ex)=>{"use strict";ex.exports=Zq()});var ax=i(()=>{"use strict";var xF=x(),SF=ne(),wF=de(),TF=zr(),EF=_t(),CF=P(),OF=CF(function(){return[].push.call({length:4294967296},1)!==4294967297}),kF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},IF=OF||!kF();xF({target:"Array",proto:!0,arity:1,forced:IF},{push:function(r){var t=SF(this),n=wF(t),a=arguments.length;EF(n+a);for(var o=0;o<a;o++)t[n]=arguments[o],n++;return TF(t,n),n}})});var ox=i((AV,ix)=>{"use strict";ax();var _F=le();ix.exports=_F("Array","push")});var sx=i((NV,ux)=>{"use strict";var PF=U(),RF=ox(),rs=Array.prototype;ux.exports=function(e){var r=e.push;return e===rs||PF(rs,e)&&r===rs.push?RF:r}});var lx=i((MV,cx)=>{"use strict";var AF=sx();cx.exports=AF});var px=i((jV,fx)=>{"use strict";var NF=lx();fx.exports=NF});var dx=i(($V,vx)=>{"use strict";var MF=px();vx.exports=MF});var ts=i((LV,mx)=>{"use strict";mx.exports=dx()});var Cx=i(()=>{"use strict";var jF=x(),$F=At().map,LF=St(),FF=LF("map");jF({target:"Array",proto:!0,forced:!FF},{map:function(r){return $F(this,r,arguments.length>1?arguments[1]:void 0)}})});var kx=i((p7,Ox)=>{"use strict";Cx();var DF=le();Ox.exports=DF("Array","map")});var _x=i((v7,Ix)=>{"use strict";var BF=U(),GF=kx(),as=Array.prototype;Ix.exports=function(e){var r=e.map;return e===as||BF(as,e)&&r===as.map?GF:r}});var Rx=i((d7,Px)=>{"use strict";var UF=_x();Px.exports=UF});var Nx=i((m7,Ax)=>{"use strict";var HF=Rx();Ax.exports=HF});var jx=i((h7,Mx)=>{"use strict";var KF=Nx();Mx.exports=KF});var Lx=i((y7,$x)=>{"use strict";$x.exports=jx()});var Dx=i((g7,Fx)=>{Fx.exports=Lx()});var Gx=i((b7,Bx)=>{Bx.exports=st()});var zx=i((q7,Wx)=>{"use strict";var WF=D(),zF=ne(),VF=xn(),YF=de(),Ux=TypeError,Hx="Reduce of empty array with no initial value",Kx=function(e){return function(r,t,n,a){var o=zF(r),u=VF(o),c=YF(o);if(WF(t),c===0&&n<2)throw new Ux(Hx);var s=e?c-1:0,l=e?-1:1;if(n<2)for(;;){if(s in u){a=u[s],s+=l;break}if(s+=l,e?s<0:c<=s)throw new Ux(Hx)}for(;e?s>=0:c>s;s+=l)s in u&&(a=t(a,u[s],s,o));return a}};Wx.exports={left:Kx(!1),right:Kx(!0)}});var is=i((x7,Vx)=>{"use strict";var JF=P();Vx.exports=function(e,r){var t=[][e];return!!t&&JF(function(){t.call(null,r||function(){return 1},1)})}});var Jx=i(()=>{"use strict";var QF=x(),XF=zx().left,ZF=is(),Yx=Dr(),eD=Ft(),rD=!eD&&Yx>79&&Yx<83,tD=rD||!ZF("reduce");QF({target:"Array",proto:!0,forced:tD},{reduce:function(r){var t=arguments.length;return XF(this,r,t,t>1?arguments[1]:void 0)}})});var Xx=i((T7,Qx)=>{"use strict";Jx();var nD=le();Qx.exports=nD("Array","reduce")});var eS=i((E7,Zx)=>{"use strict";var aD=U(),iD=Xx(),os=Array.prototype;Zx.exports=function(e){var r=e.reduce;return e===os||aD(os,e)&&r===os.reduce?iD:r}});var tS=i((C7,rS)=>{"use strict";var oD=eS();rS.exports=oD});var aS=i((O7,nS)=>{"use strict";var uD=tS();nS.exports=uD});var oS=i((k7,iS)=>{"use strict";var sD=aS();iS.exports=sD});var sS=i((I7,uS)=>{"use strict";uS.exports=oS()});var lS=i((_7,cS)=>{cS.exports=sS()});var vS=i((P7,pS)=>{"use strict";var cD=Me(),lD=de(),fD=_t(),pD=J(),vD=Wr(),fS=function(e,r,t,n,a,o,u,c){for(var s=a,l=0,f=u?pD(u,c):!1,v,p;l<n;)l in t&&(v=f?f(t[l],l,r):t[l],o>0&&cD(v)?(p=lD(v),s=fS(e,r,v,p,s,o-1)-1):(fD(s+1),vD(e,s,v)),s++),l++;return s};pS.exports=fS});var dS=i(()=>{"use strict";var dD=x(),mD=vS(),hD=D(),yD=ne(),gD=de(),bD=Gn();dD({target:"Array",proto:!0},{flatMap:function(r){var t=yD(this),n=gD(t),a;return hD(r),a=bD(t,0),mD(a,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),a}})});var mS=i(()=>{"use strict";var qD=No();qD("flatMap")});var yS=i((j7,hS)=>{"use strict";dS();mS();var xD=le();hS.exports=xD("Array","flatMap")});var bS=i(($7,gS)=>{"use strict";var SD=U(),wD=yS(),us=Array.prototype;gS.exports=function(e){var r=e.flatMap;return e===us||SD(us,e)&&r===us.flatMap?wD:r}});var xS=i((L7,qS)=>{"use strict";var TD=bS();qS.exports=TD});var wS=i((F7,SS)=>{"use strict";var ED=xS();SS.exports=ED});var ES=i((D7,TS)=>{"use strict";var CD=wS();TS.exports=CD});var OS=i((B7,CS)=>{"use strict";CS.exports=ES()});var IS=i((G7,kS)=>{kS.exports=OS()});var PS=i((U7,_S)=>{"use strict";ao();var OD=le();_S.exports=OD("Array","concat")});var AS=i((H7,RS)=>{"use strict";var kD=U(),ID=PS(),ss=Array.prototype;RS.exports=function(e){var r=e.concat;return e===ss||kD(ss,e)&&r===ss.concat?ID:r}});var MS=i((K7,NS)=>{"use strict";var _D=AS();NS.exports=_D});var $S=i((W7,jS)=>{"use strict";var PD=MS();jS.exports=PD});var FS=i((z7,LS)=>{"use strict";var RD=$S();LS.exports=RD});var BS=i((V7,DS)=>{"use strict";DS.exports=FS()});var cs=i((Y7,GS)=>{GS.exports=BS()});var KS=i(()=>{});var zS=i((g9,WS)=>{"use strict";KS();Ao();var GD=Jr();WS.exports=GD.f("toPrimitive")});var YS=i((b9,VS)=>{"use strict";var UD=zS();VS.exports=UD});var QS=i((q9,JS)=>{"use strict";var HD=YS();JS.exports=HD});var ZS=i((x9,XS)=>{"use strict";var KD=QS();XS.exports=KD});var rw=i((S9,ew)=>{"use strict";ew.exports=ZS()});var lw=i((U9,cw)=>{"use strict";var zD=L(),VD=Ee(),YD=A(),JD=YD("match");cw.exports=function(e){var r;return zD(e)&&((r=e[JD])!==void 0?!!r:VD(e)==="RegExp")}});var pw=i((H9,fw)=>{"use strict";var QD=lw(),XD=TypeError;fw.exports=function(e){if(QD(e))throw new XD("The method doesn't accept regular expressions");return e}});var dw=i((K9,vw)=>{"use strict";var ZD=A(),e3=ZD("match");vw.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[e3]=!1,"/./"[e](r)}catch{}}return!1}});var yw=i(()=>{"use strict";var r3=x(),t3=dt(),n3=ht().f,a3=ki(),mw=Ze(),i3=pw(),o3=fr(),u3=dw(),s3=ee(),c3=t3("".slice),l3=Math.min,hw=u3("startsWith"),f3=!s3&&!hw&&!!function(){var e=n3(String.prototype,"startsWith");return e&&!e.writable}();r3({target:"String",proto:!0,forced:!f3&&!hw},{startsWith:function(r){var t=mw(o3(this));i3(r);var n=a3(l3(arguments.length>1?arguments[1]:void 0,t.length)),a=mw(r);return c3(t,n,n+a.length)===a}})});var bw=i((V9,gw)=>{"use strict";yw();var p3=le();gw.exports=p3("String","startsWith")});var xw=i((Y9,qw)=>{"use strict";var v3=U(),d3=bw(),vs=String.prototype;qw.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===vs||v3(vs,e)&&r===vs.startsWith?d3:r}});var ww=i((J9,Sw)=>{"use strict";var m3=xw();Sw.exports=m3});var Ew=i((Q9,Tw)=>{"use strict";var h3=ww();Tw.exports=h3});var Ow=i((X9,Cw)=>{"use strict";var y3=Ew();Cw.exports=y3});var Iw=i((Z9,kw)=>{"use strict";kw.exports=Ow()});var Pw=i((eY,_w)=>{_w.exports=Iw()});var Rw=i(()=>{"use strict";var g3=x(),b3=At().filter,q3=St(),x3=q3("filter");g3({target:"Array",proto:!0,forced:!x3},{filter:function(r){return b3(this,r,arguments.length>1?arguments[1]:void 0)}})});var Nw=i((nY,Aw)=>{"use strict";Rw();var S3=le();Aw.exports=S3("Array","filter")});var jw=i((aY,Mw)=>{"use strict";var w3=U(),T3=Nw(),ds=Array.prototype;Mw.exports=function(e){var r=e.filter;return e===ds||w3(ds,e)&&r===ds.filter?T3:r}});var Lw=i((iY,$w)=>{"use strict";var E3=jw();$w.exports=E3});var Dw=i((oY,Fw)=>{"use strict";var C3=Lw();Fw.exports=C3});var Gw=i((uY,Bw)=>{"use strict";var O3=Dw();Bw.exports=O3});var Hw=i((sY,Uw)=>{"use strict";Uw.exports=Gw()});var Ww=i((cY,Kw)=>{Kw.exports=Hw()});var sT=i(()=>{"use strict";var M3=x(),j3=K(),hs=Lr(),$3=$u(),tT=Vo(),L3=Z(),nT=L(),F3=rr(),iT=P(),ys=j3("Reflect","construct"),D3=Object.prototype,B3=[].push,oT=iT(function(){function e(){}return!(ys(function(){},[],e)instanceof e)}),uT=!iT(function(){ys(function(){})}),aT=oT||uT;M3({target:"Reflect",stat:!0,forced:aT,sham:aT},{construct:function(r,t){tT(r),L3(t);var n=arguments.length<3?r:tT(arguments[2]);if(uT&&!oT)return ys(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var a=[null];return hs(B3,a,t),new(hs($3,r,a))}var o=n.prototype,u=F3(nT(o)?o:D3),c=hs(r,u,t);return nT(c)?c:u}})});var lT=i((UY,cT)=>{"use strict";sT();var G3=Y();cT.exports=G3.Reflect.construct});var pT=i((HY,fT)=>{"use strict";var U3=lT();fT.exports=U3});var dT=i((KY,vT)=>{"use strict";var H3=pT();vT.exports=H3});var hT=i((WY,mT)=>{"use strict";var K3=dT();mT.exports=K3});var Ba=i((zY,yT)=>{"use strict";yT.exports=hT()});var bT=i((VY,gT)=>{gT.exports=Ba()});var kT=i((nJ,OT)=>{"use strict";var W3=P();OT.exports=W3(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var PT=i((aJ,_T)=>{"use strict";var z3=P(),V3=L(),Y3=Ee(),IT=kT(),Ga=Object.isExtensible,J3=z3(function(){Ga(1)});_T.exports=J3||IT?function(r){return!V3(r)||IT&&Y3(r)==="ArrayBuffer"?!1:Ga?Ga(r):!0}:Ga});var AT=i((iJ,RT)=>{"use strict";var Q3=P();RT.exports=!Q3(function(){return Object.isExtensible(Object.preventExtensions({}))})});var Ts=i((oJ,jT)=>{"use strict";var X3=x(),Z3=N(),e4=Yr(),r4=L(),xs=W(),t4=ae().f,NT=Rt(),n4=io(),Ss=PT(),a4=Gr(),i4=AT(),MT=!1,We=a4("meta"),o4=0,ws=function(e){t4(e,We,{value:{objectID:"O"+o4++,weakData:{}}})},u4=function(e,r){if(!r4(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!xs(e,We)){if(!Ss(e))return"F";if(!r)return"E";ws(e)}return e[We].objectID},s4=function(e,r){if(!xs(e,We)){if(!Ss(e))return!0;if(!r)return!1;ws(e)}return e[We].weakData},c4=function(e){return i4&&MT&&Ss(e)&&!xs(e,We)&&ws(e),e},l4=function(){f4.enable=function(){},MT=!0;var e=NT.f,r=Z3([].splice),t={};t[We]=1,e(t).length&&(NT.f=function(n){for(var a=e(n),o=0,u=a.length;o<u;o++)if(a[o]===We){r(a,o,1);break}return a},X3({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:n4.f}))},f4=jT.exports={enable:l4,fastKey:u4,getWeakData:s4,onFreeze:c4};e4[We]=!0});var FT=i((uJ,LT)=>{"use strict";var p4=x(),v4=R(),d4=Ts(),m4=P(),h4=Ce(),y4=he(),g4=la(),b4=M(),q4=L(),x4=lr(),S4=Le(),w4=ae().f,T4=At().forEach,E4=H(),$T=er(),C4=$T.set,O4=$T.getterFor;LT.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,a=e.indexOf("Weak")!==-1,o=n?"set":"add",u=v4[e],c=u&&u.prototype,s={},l;if(!E4||!b4(u)||!(a||c.forEach&&!m4(function(){new u().entries().next()})))l=t.getConstructor(r,e,n,o),d4.enable();else{l=r(function(p,d){C4(g4(p,f),{type:e,collection:new u}),x4(d)||y4(d,p[o],{that:p,AS_ENTRIES:n})});var f=l.prototype,v=O4(e);T4(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(p){var d=p==="add"||p==="set";p in c&&!(a&&p==="clear")&&h4(f,p,function(h,m){var y=v(this).collection;if(!d&&a&&!q4(h))return p==="get"?void 0:!1;var g=y[p](h===0?0:h,m);return d?this:g})}),a||w4(f,"size",{configurable:!0,get:function(){return v(this).collection.size}})}return S4(l,e,!1,!0),s[e]=l,p4({global:!0,forced:!0},s),a||t.setStrong(l,e,n),l}});var BT=i((sJ,DT)=>{"use strict";var k4=je();DT.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:k4(e,n,r[n],t);return e}});var VT=i((cJ,zT)=>{"use strict";var GT=rr(),I4=Hn(),UT=BT(),_4=J(),P4=la(),R4=lr(),A4=he(),N4=Ln(),Ua=Fn(),M4=zo(),fn=H(),HT=Ts().fastKey,WT=er(),KT=WT.set,Es=WT.getterFor;zT.exports={getConstructor:function(e,r,t,n){var a=e(function(l,f){P4(l,o),KT(l,{type:r,index:GT(null),first:null,last:null,size:0}),fn||(l.size=0),R4(f)||A4(f,l[n],{that:l,AS_ENTRIES:t})}),o=a.prototype,u=Es(r),c=function(l,f,v){var p=u(l),d=s(l,f),h,m;return d?d.value=v:(p.last=d={index:m=HT(f,!0),key:f,value:v,previous:h=p.last,next:null,removed:!1},p.first||(p.first=d),h&&(h.next=d),fn?p.size++:l.size++,m!=="F"&&(p.index[m]=d)),l},s=function(l,f){var v=u(l),p=HT(f),d;if(p!=="F")return v.index[p];for(d=v.first;d;d=d.next)if(d.key===f)return d};return UT(o,{clear:function(){for(var f=this,v=u(f),p=v.first;p;)p.removed=!0,p.previous&&(p.previous=p.previous.next=null),p=p.next;v.first=v.last=null,v.index=GT(null),fn?v.size=0:f.size=0},delete:function(l){var f=this,v=u(f),p=s(f,l);if(p){var d=p.next,h=p.previous;delete v.index[p.index],p.removed=!0,h&&(h.next=d),d&&(d.previous=h),v.first===p&&(v.first=d),v.last===p&&(v.last=h),fn?v.size--:f.size--}return!!p},forEach:function(f){for(var v=u(this),p=_4(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:v.first;)for(p(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!s(this,f)}}),UT(o,t?{get:function(f){var v=s(this,f);return v&&v.value},set:function(f,v){return c(this,f===0?0:f,v)}}:{add:function(f){return c(this,f=f===0?0:f,f)}}),fn&&I4(o,"size",{configurable:!0,get:function(){return u(this).size}}),a},setStrong:function(e,r,t){var n=r+" Iterator",a=Es(r),o=Es(n);N4(e,r,function(u,c){KT(this,{type:n,target:u,state:a(u),kind:c,last:null})},function(){for(var u=o(this),c=u.kind,s=u.last;s&&s.removed;)s=s.previous;return!u.target||!(u.last=s=s?s.next:u.state.first)?(u.target=null,Ua(void 0,!0)):Ua(c==="keys"?s.key:c==="values"?s.value:[s.key,s.value],!1)},t?"entries":"values",!t,!0),M4(r)}}});var YT=i(()=>{"use strict";var j4=FT(),$4=VT();j4("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},$4)});var JT=i(()=>{"use strict";YT()});var XT=i((dJ,QT)=>{"use strict";QT.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,a){return t[e](n,a)}}});var ue=i((mJ,eE)=>{"use strict";var L4=K(),Ha=XT(),ZT=L4("Map");eE.exports={Map:ZT,set:Ha("set",2),get:Ha("get",1),has:Ha("has",1),remove:Ha("delete",1),proto:ZT.prototype}});var Cs=i(()=>{"use strict";var F4=x(),D4=N(),B4=D(),G4=fr(),U4=he(),Ka=ue(),rE=ee(),H4=P(),tE=Ka.Map,K4=Ka.has,W4=Ka.get,z4=Ka.set,V4=D4([].push),Y4=rE||H4(function(){return tE.groupBy("ab",function(e){return e}).get("a").length!==1});F4({target:"Map",stat:!0,forced:rE||Y4},{groupBy:function(r,t){G4(r),B4(t);var n=new tE,a=0;return U4(r,function(o){var u=t(o,a++);K4(n,u)?V4(W4(n,u),o):z4(n,u,[o])}),n}})});var Q=i((gJ,nE)=>{"use strict";var J4=Xe(),Q4=TypeError;nE.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new Q4(J4(e)+" is not a map")}});var ks=i(()=>{"use strict";var X4=x(),Z4=Q(),Os=ue(),eB=ee(),rB=Os.get,tB=Os.has,nB=Os.set;X4({target:"Map",proto:!0,real:!0,forced:eB},{getOrInsert:function(r,t){return tB(Z4(this),r)?rB(this,r):(nB(this,r,t),t)}})});var _s=i(()=>{"use strict";var aB=x(),iB=D(),oB=Q(),Is=ue(),uB=ee(),sB=Is.get,cB=Is.has,lB=Is.set;aB({target:"Map",proto:!0,real:!0,forced:uB},{getOrInsertComputed:function(r,t){if(oB(this),iB(t),cB(this,r))return sB(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return lB(this,r,n),n}})});var iE=i((wJ,aE)=>{"use strict";xr();JT();Cs();ks();_s();Pt();yr();var fB=Y();aE.exports=fB.Map});var uE=i((TJ,oE)=>{"use strict";var pB=iE();Sr();oE.exports=pB});var Ps=i(()=>{"use strict";ks()});var Rs=i(()=>{"use strict";_s()});var sE=i(()=>{"use strict";Cs()});var lE=i((PJ,cE)=>{"use strict";var vB=uE();Ps();Rs();sE();cE.exports=vB});var pE=i((RJ,fE)=>{"use strict";var dB=J(),mB=Z(),hB=ne(),yB=he();fE.exports=function(e,r,t){return function(a){var o=hB(a),u=arguments.length,c=u>1?arguments[1]:void 0,s=c!==void 0,l=s?dB(c,u>2?arguments[2]:void 0):void 0,f=new e,v=0;return yB(o,function(p){var d=s?l(p,v++):p;t?r(f,mB(d)[0],d[1]):r(f,d)}),f}}});var dE=i(()=>{"use strict";var gB=x(),vE=ue(),bB=pE();gB({target:"Map",stat:!0,forced:!0},{from:bB(vE.Map,vE.set,!0)})});var hE=i((MJ,mE)=>{"use strict";var qB=Z();mE.exports=function(e,r,t){return function(){for(var a=new e,o=arguments.length,u=0;u<o;u++){var c=arguments[u];t?r(a,qB(c)[0],c[1]):r(a,c)}return a}}});var gE=i(()=>{"use strict";var xB=x(),yE=ue(),SB=hE();xB({target:"Map",stat:!0,forced:!0},{of:SB(yE.Map,yE.set,!0)})});var qE=i(()=>{"use strict";var wB=x(),TB=G(),EB=he(),CB=M(),bE=D(),OB=ue().Map;wB({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=CB(this)?this:OB,a=new n;bE(t);var o=bE(a.set);return EB(r,function(u){TB(o,a,t(u),u)}),a}})});var xE=i(()=>{"use strict";var kB=x(),IB=Q(),_B=ue().remove;kB({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=IB(this),t=!0,n,a=0,o=arguments.length;a<o;a++)n=_B(r,arguments[a]),t=t&&n;return!!t}})});var wE=i(()=>{"use strict";var PB=x(),RB=Q(),As=ue(),AB=As.get,NB=As.has,SE=As.set;PB({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=RB(this),a,o;return NB(n,r)?(a=AB(n,r),"update"in t&&(a=t.update(a,r,n),SE(n,r,a)),a):(o=t.insert(r,n),SE(n,r,o),o)}})});var EE=i((HJ,TE)=>{"use strict";var MB=G();TE.exports=function(e,r,t){for(var n=t?e:e.iterator,a=e.next,o,u;!(o=MB(a,n)).done;)if(u=r(o.value),u!==void 0)return u}});var qe=i((KJ,CE)=>{"use strict";var jB=EE();CE.exports=function(e,r,t){return t?jB(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var OE=i(()=>{"use strict";var $B=x(),LB=J(),FB=Q(),DB=qe();$B({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=FB(this),n=LB(r,arguments.length>1?arguments[1]:void 0);return DB(t,function(a,o){if(!n(a,o,t))return!1},!0)!==!1}})});var IE=i(()=>{"use strict";var BB=x(),GB=J(),UB=Q(),kE=ue(),HB=qe(),KB=kE.Map,WB=kE.set;BB({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=UB(this),n=GB(r,arguments.length>1?arguments[1]:void 0),a=new KB;return HB(t,function(o,u){n(o,u,t)&&WB(a,u,o)}),a}})});var _E=i(()=>{"use strict";var zB=x(),VB=J(),YB=Q(),JB=qe();zB({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=YB(this),n=VB(r,arguments.length>1?arguments[1]:void 0),a=JB(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return a&&a.value}})});var PE=i(()=>{"use strict";var QB=x(),XB=J(),ZB=Q(),e5=qe();QB({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=ZB(this),n=XB(r,arguments.length>1?arguments[1]:void 0),a=e5(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return a&&a.key}})});var AE=i((eQ,RE)=>{"use strict";RE.exports=function(e,r){return e===r||e!==e&&r!==r}});var NE=i(()=>{"use strict";var r5=x(),t5=AE(),n5=Q(),a5=qe();r5({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return a5(n5(this),function(t){if(t5(t,r))return!0},!0)===!0}})});var ME=i(()=>{"use strict";var i5=x(),o5=Q(),u5=qe();i5({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=u5(o5(this),function(n,a){if(n===r)return{key:a}},!0);return t&&t.key}})});var $E=i(()=>{"use strict";var s5=x(),c5=J(),l5=Q(),jE=ue(),f5=qe(),p5=jE.Map,v5=jE.set;s5({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=l5(this),n=c5(r,arguments.length>1?arguments[1]:void 0),a=new p5;return f5(t,function(o,u){v5(a,n(o,u,t),o)}),a}})});var FE=i(()=>{"use strict";var d5=x(),m5=J(),h5=Q(),LE=ue(),y5=qe(),g5=LE.Map,b5=LE.set;d5({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=h5(this),n=m5(r,arguments.length>1?arguments[1]:void 0),a=new g5;return y5(t,function(o,u){b5(a,u,n(o,u,t))}),a}})});var DE=i(()=>{"use strict";var q5=x(),x5=Q(),S5=he(),w5=ue().set;q5({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=x5(this),n=arguments.length,a=0;a<n;)S5(arguments[a++],function(o,u){w5(t,o,u)},{AS_ENTRIES:!0});return t}})});var BE=i(()=>{"use strict";var T5=x(),E5=D(),C5=Q(),O5=qe(),k5=TypeError;T5({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=C5(this),n=arguments.length<2,a=n?void 0:arguments[1];if(E5(r),O5(t,function(o,u){n?(n=!1,a=o):a=r(a,o,u,t)}),n)throw new k5("Reduce of empty map with no initial value");return a}})});var GE=i(()=>{"use strict";var I5=x(),_5=J(),P5=Q(),R5=qe();I5({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=P5(this),n=_5(r,arguments.length>1?arguments[1]:void 0);return R5(t,function(a,o){if(n(a,o,t))return!0},!0)===!0}})});var HE=i(()=>{"use strict";var A5=x(),UE=D(),N5=Q(),Ns=ue(),M5=TypeError,j5=Ns.get,$5=Ns.has,L5=Ns.set;A5({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=N5(this),a=arguments.length;UE(t);var o=$5(n,r);if(!o&&a<3)throw new M5("Updating absent value");var u=o?j5(n,r):UE(a>2?arguments[2]:void 0)(r,n);return L5(n,r,t(u,r,n)),n}})});var js=i((yQ,KE)=>{"use strict";var Wa=G(),Ms=D(),za=M(),F5=Z(),D5=TypeError;KE.exports=function(r,t){var n=F5(this),a=Ms(n.get),o=Ms(n.has),u=Ms(n.set),c=arguments.length>2?arguments[2]:void 0,s;if(!za(t)&&!za(c))throw new D5("At least one callback required");return Wa(o,n,r)?(s=Wa(a,n,r),za(t)&&(s=t(s),Wa(u,n,r,s))):za(c)&&(s=c(),Wa(u,n,r,s)),s}});var WE=i(()=>{"use strict";var B5=x(),G5=js();B5({target:"Map",proto:!0,real:!0,forced:!0},{upsert:G5})});var zE=i(()=>{"use strict";var U5=x(),H5=js();U5({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:H5})});var YE=i((SQ,VE)=>{"use strict";var K5=lE();dE();gE();qE();xE();wE();OE();IE();_E();PE();NE();Ps();Rs();ME();$E();FE();DE();BE();GE();HE();WE();zE();VE.exports=K5});var QE=i((wQ,JE)=>{"use strict";JE.exports=YE()});var ZE=i(()=>{"use strict";var W5=x(),z5=dt(),V5=Li().indexOf,Y5=is(),$s=z5([].indexOf),XE=!!$s&&1/$s([1],1,-0)<0,J5=XE||!Y5("indexOf");W5({target:"Array",proto:!0,forced:J5},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return XE?$s(this,r,t)||0:V5(this,r,t)}})});var rC=i((CQ,eC)=>{"use strict";ZE();var Q5=le();eC.exports=Q5("Array","indexOf")});var nC=i((OQ,tC)=>{"use strict";var X5=U(),Z5=rC(),Ls=Array.prototype;tC.exports=function(e){var r=e.indexOf;return e===Ls||X5(Ls,e)&&r===Ls.indexOf?Z5:r}});var iC=i((kQ,aC)=>{"use strict";var eG=nC();aC.exports=eG});var uC=i((IQ,oC)=>{"use strict";var rG=iC();oC.exports=rG});var cC=i((_Q,sC)=>{"use strict";var tG=uC();sC.exports=tG});var fC=i((PQ,lC)=>{"use strict";lC.exports=cC()});var kC=i(()=>{"use strict";var sG=x(),cG=ne(),OC=An(),lG=P(),fG=lG(function(){OC(1)});sG({target:"Object",stat:!0,forced:fG},{keys:function(r){return OC(cG(r))}})});var _C=i((jX,IC)=>{"use strict";kC();var pG=Y();IC.exports=pG.Object.keys});var RC=i(($X,PC)=>{"use strict";var vG=_C();PC.exports=vG});var NC=i((LX,AC)=>{"use strict";var dG=RC();AC.exports=dG});var jC=i((FX,MC)=>{"use strict";var mG=NC();MC.exports=mG});var LC=i((DX,$C)=>{"use strict";$C.exports=jC()});var DC=i((BX,FC)=>{FC.exports=LC()});var Ae="",ei="";function uc(e){Ae=e.replace(/\/+$/,"")}function sc(e){ei=e}function Ye(){return ei?{Authorization:`Bearer ${ei}`}:{}}async function Je(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function ri(e,r,{search:t,author:n,viewer:a}={}){let o=[];r?o.push(`document=${encodeURIComponent(r)}`):e&&o.push(`uri=${encodeURIComponent(e)}`),t&&o.push(`search=${encodeURIComponent(t)}`),n&&o.push(`author=${encodeURIComponent(n)}`),a&&o.push(`viewer=${encodeURIComponent(a)}`);let u=await fetch(`${Ae}/comments?${o.join("&")}`,{headers:Ye()});return await Je(u,"Failed to fetch comments"),(await u.json()).data}async function ti({uri:e,document:r,quote:t,prefix:n,suffix:a,body:o,author:u,parent:c,visibility:s}){let l={quote:t,prefix:n,suffix:a,body:o,author:u,parent:c};s&&(l.visibility=s),r?l.document=r:l.uri=e;let f=await fetch(`${Ae}/comments`,{method:"POST",headers:{"Content-Type":"application/json",...Ye()},body:JSON.stringify(l)});return await Je(f,"Failed to create comment"),f.json()}async function cc(e,r){let t={};r.body!==void 0&&(t.body=r.body),r.visibility!==void 0&&(t.visibility=r.visibility);let n=await fetch(`${Ae}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...Ye()},body:JSON.stringify(t)});return await Je(n,"Failed to update comment"),n.json()}async function lc(e,r){let t=await fetch(`${Ae}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...Ye()},body:JSON.stringify({status:r})});return await Je(t,"Failed to update comment status"),t.json()}async function fc(e){let r=await fetch(`${Ae}/comments/${e}`,{method:"DELETE",headers:Ye()});await Je(r,"Failed to delete comment")}async function pc(e){let r=await fetch(`${Ae}/comments/reorder`,{method:"POST",headers:{"Content-Type":"application/json",...Ye()},body:JSON.stringify({order:e.map(t=>({id:t.id,sort_order:t.sortOrder}))})});return await Je(r,"Failed to reorder comments"),r.json()}async function vc(e,r,t){let n=await fetch(`${Ae}/comments/${e}/reactions`,{method:"POST",headers:{"Content-Type":"application/json",...Ye()},body:JSON.stringify({emoji:r,author:t})});return await Je(n,"Failed to add reaction"),n.json()}async function dc(e,r,t){let n=await fetch(`${Ae}/comments/${e}/reactions/${encodeURIComponent(r)}?author=${encodeURIComponent(t)}`,{method:"DELETE",headers:Ye()});return await Je(n,"Failed to remove reaction"),n.json()}var sF=q(Vr(),1),cF=q(Bn(),1),lF=q(na(),1),fF=q(aa(),1),pF=q(ia(),1);var Ru=q(st(),1);function cg(e,r,t,n,a,o,u){try{var c=e[o](u),s=c.value}catch(l){return void t(l)}c.done?r(s):Ru.default.resolve(s).then(n,a)}function Or(e){return function(){var r=this,t=arguments;return new Ru.default(function(n,a){var o=e.apply(r,t);function u(s){cg(o,n,a,u,c,"next",s)}function c(s){cg(o,n,a,u,c,"throw",s)}u(void 0)})}}function Wt(e,r){this.v=e,this.k=r}function ir(e){return new Wt(e,0)}var Au=q(st(),1),bg=q(Oe(),1),qg=q(qa(),1);function Ie(e){return function(){return new zt(e.apply(this,arguments))}}function zt(e){var r,t;function n(o,u){try{var c=e[o](u),s=c.value,l=s instanceof Wt;Au.default.resolve(l?s.v:s).then(function(f){if(l){var v=o==="return"?"return":"next";if(!s.k||f.done)return n(v,f);f=e[v](f).value}a(c.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){a("throw",f)}}function a(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new Au.default(function(c,s){var l={key:o,arg:u,resolve:c,reject:s,next:null};t?t=t.next=l:(r=t=l,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}zt.prototype[typeof bg.default=="function"&&qg.default||"@@asyncIterator"]=function(){return this},zt.prototype.next=function(e){return this._invoke("next",e)},zt.prototype.throw=function(e){return this._invoke("throw",e)},zt.prototype.return=function(e){return this._invoke("return",e)};var vF=q(pe(),1),dF=q(Hq(),1);function ve(e){var r,t=oF(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function oF(e){return"startContainer"in e}function ur(e){if(uF(e))return e;var r=e,t=ve(r).createRange();return t.selectNodeContents(r),t}function uF(e){return"startContainer"in e}var tx=q(rx(),1);function nx(e){if((0,tx.default)(e))return e}var hx=q(Oe(),1),yx=q(Bo(),1),gx=q(ts(),1);function bx(e,r){var t=e==null?null:typeof hx.default<"u"&&(0,yx.default)(e)||e["@@iterator"];if(t!=null){var n,a,o,u,c=[],s=!0,l=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;s=!1}else for(;!(s=(n=o.call(t)).done)&&((0,gx.default)(c).call(c,n.value),c.length!==r);s=!0);}catch(f){l=!0,a=f}finally{try{if(!s&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(l)throw a}}return c}}var qx=q(Pi(),1),xx=q(no(),1);function Ma(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function ns(e,r){if(e){var t;if(typeof e=="string")return Ma(e,r);var n=(0,qx.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,xx.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ma(e,r):void 0}}function Sx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function He(e,r){return nx(e)||bx(e,r)||ns(e,r)||Sx()}var wx=q(Oe(),1),Tx=q(qa(),1),Ex=q(rn(),1),on=q(st(),1);function lt(e){var r,t,n,a=2;for(typeof wx.default<"u"&&(t=Tx.default,n=Ex.default);a--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new ja(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function ja(e){function r(t){if(Object(t)!==t)return on.default.reject(new TypeError(t+" is not an object."));var n=t.done;return on.default.resolve(t.value).then(function(a){return{value:a,done:n}})}return ja=function(n){this.s=n,this.n=n.next},ja.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var a=this.s.return;return a===void 0?on.default.resolve({value:n,done:!0}):r(a.apply(this.s,arguments))},throw:function(n){var a=this.s.return;return a===void 0?on.default.reject(n):r(a.apply(this.s,arguments))}},new ja(e)}var BD=q(pe(),1);var MD=q(pe(),1),jD=q(Dx(),1),$D=q(Gx(),1),LD=q(lS(),1),FD=q(IS(),1),DD=q(cs(),1);var Bs=q(pe(),1);var N3=q(pe(),1);var fs=q(pe(),1);function un(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function US(e,r){return un(e.startChunk,r.startChunk)&&un(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function kr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var ls=q(Jt(),1);var sn=q(Oe(),1),HS=q(rn(),1);function Ke(e){"@babel/helpers - typeof";return Ke=typeof sn.default=="function"&&typeof HS.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof sn.default=="function"&&r.constructor===sn.default&&r!==sn.default.prototype?"symbol":typeof r},Ke(e)}var tw=q(rw(),1);function nw(e,r){if(Ke(e)!="object"||!e)return e;var t=e[tw.default];if(t!==void 0){var n=t.call(e,r||"default");if(Ke(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function $a(e){var r=nw(e,"string");return Ke(r)=="symbol"?r:r+""}function aw(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,ls.default)(e,$a(n.key),n)}}function cn(e,r,t){return r&&aw(e.prototype,r),t&&aw(e,t),(0,ls.default)(e,"prototype",{writable:!1}),e}var iw=q(Jt(),1);function Ir(e,r,t){return(r=$a(r))in e?(0,iw.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var ow=q(Vr(),1);var La="Iterator exhausted before seek ended.",ln=function(){function e(r){kr(this,e),this.chunker=r,Ir(this,"currentChunkPosition",0),Ir(this,"offsetInChunk",0),this.seekTo(0)}return cn(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,a)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!un(this.currentChunk,n);){var v=this._readToPreviousChunk(),p=He(v,2),d=p[0],h=p[1];if(t&&(u=d+u),h===null)throw new RangeError(La)}else for(;!un(this.currentChunk,n);){var c=this._readToNextChunk(),s=He(c,2),l=s[0],f=s[1];if(t&&(u+=l),f===null)throw new RangeError(La)}var m=this.currentChunkPosition+a;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,ow.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var c=this.currentChunkPosition+this.currentChunk.data.length;if(c<=n){var s=this._readToNextChunk(),l=He(s,2),f=l[0],v=l[1];if(t&&(u+=f),v===null){if(this.position===n||o)break;throw new RangeError(La)}}else{var p=a?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,p)),this.offsetInChunk=p,a&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=a?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var h=this._readToPreviousChunk(),m=He(h,2),y=m[0],g=m[1];if(t&&(u=y+u),g===null){if(o)break;throw new RangeError(La)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,a=this.chunker.nextChunk();return a!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,a]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function sw(e,r){return ps.apply(this,arguments)}function ps(){return ps=Or(fs.default.mark(function e(r,t){var n,a,o,u,c,s,l,f,v,p,d,h,m,y,g,b,k,E,S,T,w,O,$=arguments;return fs.default.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:n=$.length>2&&$[2]!==void 0?$[2]:{},a=n.minimalContext,o=a===void 0?!1:a,u=n.minimumQuoteLength,c=u===void 0?0:u,s=n.maxWordLength,l=s===void 0?50:s,f=new ln(t()),v=new ln(t()),f.seekToChunk(r.startChunk,r.startIndex),p=f.readToChunk(r.endChunk,r.endIndex),d="",h="",m=function(){return d.length+p.length+h.length},m()<c&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),y=Math.floor((c-m())/2),d=f.read(-y,!1,!0)+d,m()<c&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),g=c-m(),h=h+f.read(g,!1,!0),m()<c&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),b=c-m(),d=f.read(-b,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=Fa(f,l,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+Fa(f,l,!1));case 11:return k={type:"TextQuoteSelector",exact:p,prefix:d,suffix:h},E=Da(k)(t()),_.next=16,E.next();case 16:if(S=_.sent,!(!S.done&&US(S.value,r))){_.next=21;break}return _.next=20,E.next();case 20:S=_.sent;case 21:if(!S.done){_.next=23;break}return _.abrupt("return",k);case 23:if(T=S.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),v.seekToChunk(T.startChunk,T.startIndex-d.length),w=uw(f,v,!0),w!==void 0&&!o&&(w=Fa(f,l,!0)+w),f.seekToChunk(r.endChunk,r.endIndex+h.length),v.seekToChunk(T.endChunk,T.endIndex+h.length),O=uw(f,v,!1),O!==void 0&&!o&&(O=O+Fa(f,l,!1)),!o){_.next=44;break}if(!(w!==void 0&&(O===void 0||w.length<=O.length))){_.next=37;break}d=w+d,_.next=42;break;case 37:if(O===void 0){_.next=41;break}h=h+O,_.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:_.next=46;break;case 44:w!==void 0&&(d=w+d),O!==void 0&&(h=h+O);case 46:_.next=11;break;case 48:case"end":return _.stop()}},e)})),ps.apply(this,arguments)}function uw(e,r,t){for(var n="";;){var a=void 0;try{a=e.read(t?-1:1)}catch{return}n=t?a+n:n+a;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(a!==o)return n}}function Fa(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var a=void 0;try{a=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(WD(a)){e.seekBy(t?1:-1);break}n=t?a+n:n+a}return n}function WD(e){return/^\s+$/.test(e)}var Yw=q(Vr(),1),Jw=q(Bn(),1),Qw=q(na(),1),Xw=q(aa(),1),Zw=q(ia(),1);var ms=q(pe(),1),eT=q(Pw(),1),rT=q(Ww(),1);function zw(e,r){var t;if(typeof Qw.default>"u"||(0,Xw.default)(e)==null){if(Array.isArray(e)||(t=k3(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,c;return{s:function(){t=(0,Zw.default)(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){u=!0,c=l},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw c}}}}function k3(e,r){var t;if(e){if(typeof e=="string")return Vw(e,r);var n=(0,Yw.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,Jw.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Vw(e,r)}}function Vw(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Da(e){return function(){var r=Ie(ms.default.mark(function n(a){var o,u,c,s,l,f,v,p,d,h,m,y,g,b,k,E,S,T,w,O,$,we,_,te,Te,X,F;return ms.default.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:o=e.exact,u=e.prefix||"",c=e.suffix||"",s=u+o+c,l=[],f=!0;case 6:v=a.currentChunk,p=v.data,d=[],h=zw(l),C.prev=10,h.s();case 12:if((m=h.n()).done){C.next=27;break}if(y=m.value,g=y.charactersMatched,y.endChunk===void 0&&(b=u.length+o.length-g,b<=p.length&&(y.endChunk=v,y.endIndex=b)),y.startChunk===void 0&&(k=u.length-g,(k<p.length||y.endChunk!==void 0)&&(y.startChunk=v,y.startIndex=k)),E=s.length-g,!(E<=p.length)){C.next=24;break}if(!(0,eT.default)(p).call(p,s.substring(g))){C.next=22;break}return C.next=22,y;case 22:C.next=25;break;case 24:p===s.substring(g,g+p.length)&&(y.charactersMatched+=p.length,d.push(y));case 25:C.next=12;break;case 27:C.next=32;break;case 29:C.prev=29,C.t0=C.catch(10),h.e(C.t0);case 32:return C.prev=32,h.f(),C.finish(32);case 35:if(l=d,!(s.length<=p.length)){C.next=49;break}S=0;case 38:if(!(S<=p.length)){C.next=49;break}if(T=p.indexOf(s,S),T!==-1){C.next=42;break}return C.abrupt("break",49);case 42:if(S=T+1,!(T===0&&s.length===0&&!f)){C.next=45;break}return C.abrupt("continue",38);case 45:return C.next=47,{startChunk:v,startIndex:T+u.length,endChunk:v,endIndex:T+u.length+o.length};case 47:C.next=38;break;case 49:for(w=[],O=Math.max(p.length-s.length+1,0),$=function(Ve){var ic=p[Ve];w=(0,rT.default)(w).call(w,function(qO){return ic===s[Ve-qO]}),ic===s[0]&&w.push(Ve)},we=O;we<p.length;we++)$(we);_=zw(w);try{for(_.s();!(te=_.n()).done;)Te=te.value,X=p.length-Te,F={charactersMatched:X},X>=u.length+o.length&&(F.endChunk=v,F.endIndex=Te+u.length+o.length),(X>u.length||F.endChunk!==void 0)&&(F.startChunk=v,F.startIndex=Te+u.length),l.push(F)}catch(jr){_.e(jr)}finally{_.f()}f=!1;case 56:if(a.nextChunk()!==null){C.next=6;break}case 57:case"end":return C.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var R3=q(pe(),1);var I3=q(Vr(),1),_3=q(cs(),1);var A3=q(pe(),1);var vn=q(bT(),1);var xT=q(Sa(),1),ST=q(Jt(),1);var gs=q(wa(),1),qT=q(Yt(),1);function sr(e,r){var t;return sr=gs.default?(0,qT.default)(t=gs.default).call(t):function(n,a){return n.__proto__=a,n},sr(e,r)}function bs(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,xT.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,ST.default)(e,"prototype",{writable:!1}),r&&sr(e,r)}function wT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function TT(e,r){if(r&&(Ke(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return wT(e)}var ET=q(wa(),1),CT=q(Yt(),1),qs=q(xa(),1);function _r(e){var r;return _r=ET.default?(0,CT.default)(r=qs.default).call(r):function(t){return t.__proto__||(0,qs.default)(t)},_r(e)}var Ds=q(QE(),1),bC=q(Sa(),1);var pC=q(fC(),1);function vC(e){try{var r;return(0,pC.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var mC=q(Ba(),1),hC=q(ts(),1),yC=q(Yt(),1);var dC=q(Ba(),1);function Fs(){try{var e=!Boolean.prototype.valueOf.call((0,dC.default)(Boolean,[],function(){}))}catch{}return(Fs=function(){return!!e})()}function gC(e,r,t){if(Fs())return mC.default.apply(null,arguments);var n=[null];(0,hC.default)(n).apply(n,r);var a=new((0,yC.default)(e).apply(e,n));return t&&sr(a,t.prototype),a}function pn(e){var r=typeof Ds.default=="function"?new Ds.default:void 0;return pn=function(n){if(n===null||!vC(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,a)}function a(){return gC(n,arguments,_r(this).constructor)}return a.prototype=(0,bC.default)(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),sr(a,n)},pn(e)}function SC(e,r){var t=ve(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),a=qC(e.startContainer,e.startOffset),o=He(a,2),u=o[0],c=o[1];for(n.currentNode=u;c===u.length&&n.nextNode();)u=n.currentNode,c=0;e.setStart(u,c);var s=qC(e.endContainer,e.endOffset),l=He(s,2),f=l[0],v=l[1];for(n.currentNode=f;v===0&&n.previousNode();)f=n.currentNode,v=f.length;return e.setEnd(f,v),e}function qC(e,r){var t;if(xC(e))return[e,r];var n;if(nG(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(xC(n))return[n,0];var a=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=a.createTreeWalker(a,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function xC(e){return e.nodeType===Node.TEXT_NODE}function nG(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function TC(e){var r=aG();return function(){var n=_r(e),a;if(r){var o=_r(this).constructor;a=(0,vn.default)(n,arguments,o)}else a=n.apply(this,arguments);return TT(this,a)}}function aG(){if(typeof Reflect>"u"||!vn.default||vn.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,vn.default)(Boolean,[],function(){})),!0}catch{return!1}}var Va=function(e){bs(t,e);var r=TC(t);function t(n){return kr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(pn(TypeError)),iG=function(e){bs(t,e);var r=TC(t);function t(n){return kr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(pn(TypeError)),Pr=function(){function e(r){var t=this;if(kr(this,e),Ir(this,"scope",void 0),Ir(this,"iter",void 0),this.scope=ur(r),this.iter=ve(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!wC(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Va}}return cn(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!wC(t))throw new Va;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new iG;var n=t===this.scope.startContainer?this.scope.startOffset:0,a=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:a,data:t.data.substring(n,a),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=SC(t,this.scope),a=this.nodeToChunk(n.startContainer),o=n.startOffset-a.startOffset,u=this.nodeToChunk(n.endContainer),c=n.endOffset-u.startOffset;return{startChunk:a,startIndex:o,endChunk:u,endIndex:c}}},{key:"chunkRangeToRange",value:function(t){var n=ve(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function wC(e){return e.nodeType===Node.TEXT_NODE}function EC(e,r){return Gs.apply(this,arguments)}function Gs(){return Gs=Or(Bs.default.mark(function e(r,t){var n,a,o,u=arguments;return Bs.default.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},a=ur(t??ve(r)),o=new Pr(a),s.next=5,sw(o.rangeToChunkRange(r),function(){return new Pr(a)},n);case 5:return s.abrupt("return",s.sent);case 6:case"end":return s.stop()}},e)})),Gs.apply(this,arguments)}var Us=q(pe(),1);function CC(e){var r=Da(e);return function(){var t=Ie(Us.default.mark(function a(o){var u,c,s,l,f,v,p,d;return Us.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new Pr(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof Va)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:c=!0,s=!1,m.prev=13,f=lt(r(u));case 15:return m.next=17,ir(f.next());case 17:return v=m.sent,c=v.done,m.next=21,ir(v.value);case 21:if(p=m.sent,c){m.next=29;break}return d=p,m.next=26,u.chunkRangeToRange(d);case 26:c=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),s=!0,l=m.t1;case 35:if(m.prev=35,m.prev=36,!(!c&&f.return!=null)){m.next=40;break}return m.next=40,ir(f.return());case 40:if(m.prev=40,!s){m.next=43;break}throw l;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},a,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(a){return t.apply(this,arguments)}return n}()}var oG=q(pe(),1);var uG=q(pe(),1);var hG=q(DC(),1),yG=q(Vr(),1),gG=q(Bn(),1),bG=q(na(),1),qG=q(aa(),1),xG=q(ia(),1);async function BC(e,r){let t=await EC(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function Ya(e,r){let t=CC({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var Rr="fb-highlight",Hs="fb-highlight-active";var SG="fb-highlight-private",dn=null;function UC(e){dn=e}function Ja(e,r,{isPrivate:t}={}){let n=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let a=GC(e,r,t);n.push(a)}else{let a=TG(e);for(let o=0;o<a.length;o++){let u=a[o],c=document.createRange();u===e.startContainer?(c.setStart(u,e.startOffset),c.setEnd(u,u.textContent.length)):u===e.endContainer?(c.setStart(u,0),c.setEnd(u,e.endOffset)):c.selectNodeContents(u),c.collapsed||n.push(GC(c,r,t))}}return n}function GC(e,r,t){let n=e.commonAncestorContainer;for(;n&&n.nodeType!==Node.ELEMENT_NODE;)n=n.parentNode;let a=n,o=!1,u=null;for(;a;){if(a.tagName==="foreignObject"){o=!1;break}a.tagName==="text"&&a instanceof SVGElement&&(o=!0),a.tagName==="svg"&&(u=a),a=a.parentElement}if(o&&u)return wG(e,r,u);let c=document.createElement("mark");c.className=Rr+(t?` ${SG}`:""),c.dataset.commentId=r,c.addEventListener("click",()=>{dn&&dn(r)});try{e.surroundContents(c)}catch(s){return console.warn("[feedback-layer] Failed to create highlight:",s),null}return c}function wG(e,r,t){try{let n=e.getClientRects();if(n.length===0)return null;let a="http://www.w3.org/2000/svg",o=t.getScreenCTM();if(!o)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let u=e.commonAncestorContainer;for(;u&&u.nodeType!==Node.ELEMENT_NODE;)u=u.parentNode;let c=u,s=null;for(;c&&c!==t;){if(c.tagName==="text"){s=c.parentElement;break}c=c.parentElement}let l=s||t,f=o;l!==t&&l.getScreenCTM&&(f=l.getScreenCTM());let v=document.createElementNS(a,"g");v.setAttribute("class",Rr),v.setAttribute("data-comment-id",r),v.style.cursor="pointer";for(let y=0;y<n.length;y++){let g=n[y],b=document.createElementNS(a,"rect"),k=t.createSVGPoint();k.x=g.left,k.y=g.top;let E=k.matrixTransform(f.inverse()),S=g.width/f.a,T=g.height/f.d;b.setAttribute("x",E.x),b.setAttribute("y",E.y),b.setAttribute("width",S),b.setAttribute("height",T),b.setAttribute("rx","2"),b.setAttribute("ry","2"),b.style.pointerEvents="none",v.appendChild(b)}l&&l!==t?l.appendChild(v):t.appendChild(v);let p=e.commonAncestorContainer;for(;p&&p.nodeType!==Node.ELEMENT_NODE;)p=p.parentNode;let d=new Set,h=p;for(;h&&h!==t;)h.tagName==="text"&&h instanceof SVGElement&&(d.add(h),h.querySelectorAll("tspan").forEach(g=>d.add(g))),h=h.parentElement;let m=y=>{y.preventDefault(),y.stopPropagation(),dn&&dn(r)};return d.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",m),y.dataset.fbCommentId=r}),v}catch(n){return console.warn("[feedback-layer] Failed to create SVG highlight:",n),null}}function Ks(e){document.querySelectorAll(`.${Rr}[data-comment-id="${e}"]`).forEach(n=>{let a=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)a.removeChild(n);else{for(;n.firstChild;)a.insertBefore(n.firstChild,n);a.removeChild(n),a.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function HC(){document.querySelectorAll(`.${Rr}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function Qa(e){document.querySelectorAll(`.${Rr}`).forEach(r=>{r.dataset.commentId===e?r.classList.add(Hs):r.classList.remove(Hs)})}function KC(e){let r=document.querySelector(`.${Rr}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function Ws(e){let r="rgba(255, 212, 0, 0.12)",t="rgba(255, 212, 0, 0.35)";document.querySelectorAll(`.${Rr}`).forEach(n=>{let a=n.dataset.commentId,o=e.has(a);n.classList.contains(Hs)||(n.tagName==="g"||n instanceof SVGElement?n.querySelectorAll("rect").forEach(c=>{c.setAttribute("fill-opacity",o?"0.12":"0.35")}):n.style.backgroundColor=o?r:t)})}function TG(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let a=document.createRange();return a.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,a)<0&&e.compareBoundaryPoints(Range.START_TO_END,a)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function WC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,a)=>{let o=[`**${a+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let c of u)o.push(`  - **[${c.author}]** (reply): ${c.body}`);return o.join(`
`)}).join(`

`)}function zC(e,r){let t=WC(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(a=>!a.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function cr(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var EG=`
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
`,VC=null,YC=null;function JC(e,r){YC=e,VC=r,CG()}function CG(){let e=document.createElement("style");e.textContent=EG,document.head.appendChild(e)}function QC(){let e=VC(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let a=document.createElement("button");a.className="hf-modal-close",a.textContent="\xD7",a.addEventListener("click",()=>r.remove()),n.appendChild(a);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",v=>{v.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let c=document.querySelector(YC.contentSelector||"body").innerHTML,s=zC(c,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${s.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${cr(s)}</textarea>
  `;let l=document.createElement("button");l.className="hf-btn hf-btn-primary",l.textContent="Copy Prompt",l.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(s),l.textContent="Copied!"}catch{l.textContent="Copy failed"}setTimeout(()=>l.textContent="Copy Prompt",2e3)}),u.appendChild(l);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function XC(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function ZC(e,r){return e.length>r?e.slice(0,r)+"...":e}function eO(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var mn=null;function tO(e){mn=document.createElement("div"),mn.className="fb-toast-container",e.appendChild(mn)}function ze(e,r="success"){if(!mn)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>rO(t)),t.appendChild(o)}mn.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>rO(t),r==="error"?8e3:4e3)}function rO(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}function nO(e,r){let t;return(...n)=>{clearTimeout(t),t=setTimeout(()=>e(...n),r)}}function aO(e,r,t){if(r===t)return[];if(r<0||r>=e.length)return[];if(t<0||t>=e.length)return[];let n=e.map(o=>o.id),[a]=n.splice(r,1);return n.splice(t,0,a),n.map((o,u)=>({id:o,sortOrder:u}))}var OG=320,uO="feedback-layer-commenter",B=null,Re=null,Pe=null,zs=null,sO=null,Ys=null,Js=null,Qs=null,Xs=null,Vs=null,yn=null,hn=null,Zs=!1,ft="document",Xa=null,cO=[],lO=new Set,fO=null,iO=!1;function xe(){return localStorage.getItem(uO)||""}function pO({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:a,onSearch:o,onReaction:u,onReorder:c}){sO=e,Ys=r,Js=t,Qs=n,Xs=a,Vs=o,yn=u,hn=c,rc(),B=document.createElement("div"),B.className="fb-sidebar fb-sidebar-collapsed",B.innerHTML=`
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
  `,document.body.appendChild(B),tO(B),Re=B.querySelector(".fb-comment-list"),Pe=B.querySelector(".fb-form-section");let s=B.querySelector(".fb-name-input");s.addEventListener("input",()=>{localStorage.setItem(uO,s.value.trim())}),B.querySelector(".fb-ai-btn").addEventListener("click",()=>QC()),B.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>kG());let v=B.querySelector(".fb-show-resolved-cb");v.addEventListener("change",()=>{Zs=v.checked,se(cO,lO,new Map,fO)}),B.querySelector(".fb-sort-toggle").addEventListener("click",()=>{ec(ft==="document"?"custom":"document"),hn&&hn(null)});let d=B.querySelector(".fb-search-input"),h=B.querySelector(".fb-author-filter"),m=()=>{Vs&&Vs(d.value.trim(),h.value)};d.addEventListener("input",nO(m,300)),h.addEventListener("change",m)}function vO(){return ft}function ec(e){ft=e;let r=B?.querySelector(".fb-sort-toggle");r&&(r.querySelector(".fb-sort-icon").textContent=e==="custom"?"\u{1F522}":"\u{1F4CD}",r.querySelector(".fb-sort-label").textContent=e==="custom"?"Custom order":"Doc order",r.classList.toggle("fb-sort-toggle-active",e==="custom"))}function dO(e){let r=document.createElement("button");r.className="fb-sidebar-tab",r.textContent="Feedback",r.addEventListener("click",()=>e()),document.body.appendChild(r)}function gn(){B.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden")}function kG(){B.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden")}function mO(e){if(gn(),!xe()){let a=B.querySelector(".fb-name-input");a.classList.add("fb-name-input-error"),setTimeout(()=>a.classList.remove("fb-name-input-error"),2e3)}zs=e,Pe.style.display="",Pe.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${cr(ZC(e,120))}"</div>
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
  `;let r=Pe.querySelector(".fb-form-textarea");r.focus();let t=Pe.querySelector(".fb-visibility-toggle");t.addEventListener("click",a=>{a.preventDefault();let u=t.dataset.visibility==="public"?"private":"public";t.dataset.visibility=u,t.classList.toggle("fb-visibility-private",u==="private"),t.title=u==="private"?"Private (only you)":"Public (everyone)"});let n=()=>{if(!xe()){let u=B.querySelector(".fb-name-input");u.focus(),u.classList.add("fb-name-input-error"),setTimeout(()=>u.classList.remove("fb-name-input-error"),2e3);return}let a=r.value.trim();if(!a)return;let o=t.dataset.visibility;sO({comment:a,commenter:xe(),visibility:o}),Pe.style.display="none",zs=null};Pe.querySelector(".fb-submit-btn").addEventListener("click",n),r.addEventListener("keydown",a=>{a.key==="Enter"&&(a.metaKey||a.ctrlKey)&&(a.preventDefault(),n())}),Pe.querySelector(".fb-cancel-btn").addEventListener("click",()=>{Pe.style.display="none",zs=null}),Pe.scrollIntoView({behavior:"smooth",block:"nearest"})}function hO(e){let r=B.querySelector(".fb-author-filter"),t=r.value;r.innerHTML='<option value="">All authors</option>';for(let n of e.sort()){let a=document.createElement("option");a.value=n,a.textContent=n,r.appendChild(a)}e.includes(t)&&(r.value=t)}function se(e,r=new Set,t=new Map,n=null){cO=e,lO=r,fO=n,Re.innerHTML="";let{topLevel:a,repliesByParent:o}=XC(e),u;ft==="custom"?u=a.slice().sort((f,v)=>{let p=f.sort_order!=null?f.sort_order:1/0,d=v.sort_order!=null?v.sort_order:1/0;return p!==d?p-d:new Date(f.created_at)-new Date(v.created_at)}):u=a.slice().sort((f,v)=>{let p=t.get(f.id),d=t.get(v.id);return!p||!d?0:p.compareBoundaryPoints(Range.START_TO_START,d)});let c=u.filter(f=>{let v=r.has(f.id),p=f.status==="closed";return v||p&&Zs}),s=Zs?c:c.filter(f=>f.status!=="closed");if(u.length===0){Re.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let l=u.filter(f=>!r.has(f.id)&&f.status!=="closed").length;if(s.length===0){l>0?Re.innerHTML=`<div class="fb-empty">
        ${c.length} comment(s) resolved.
        ${l>0?`<br>${l} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:Re.innerHTML=`<div class="fb-empty">All ${u.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let f=0;f<s.length;f++){let v=s[f],p=document.createElement("div");p.className="fb-thread",p.dataset.commentId=v.id,p.dataset.index=f;let d=o.get(v.id)||[];n!==null&&(n.has(v.id)||d.some(y=>n.has(y.id))||p.classList.add("fb-thread-dimmed")),ft==="custom"&&(p.draggable=!0,p.addEventListener("dragstart",m=>{Xa=v.id,p.classList.add("fb-thread-dragging"),m.dataTransfer.effectAllowed="move",m.dataTransfer.setData("text/plain",v.id)}),p.addEventListener("dragend",()=>{Xa=null,p.classList.remove("fb-thread-dragging"),Re.querySelectorAll(".fb-thread-drop-above, .fb-thread-drop-below").forEach(m=>{m.classList.remove("fb-thread-drop-above","fb-thread-drop-below")})}),p.addEventListener("dragover",m=>{if(m.preventDefault(),m.dataTransfer.dropEffect="move",!Xa||Xa===v.id)return;let y=p.getBoundingClientRect(),g=y.top+y.height/2;p.classList.remove("fb-thread-drop-above","fb-thread-drop-below"),m.clientY<g?p.classList.add("fb-thread-drop-above"):p.classList.add("fb-thread-drop-below")}),p.addEventListener("dragleave",()=>{p.classList.remove("fb-thread-drop-above","fb-thread-drop-below")}),p.addEventListener("drop",m=>{m.preventDefault(),p.classList.remove("fb-thread-drop-above","fb-thread-drop-below");let y=m.dataTransfer.getData("text/plain");if(!y||y===v.id)return;let g=s.findIndex(T=>T.id===y),b=p.getBoundingClientRect(),k=b.top+b.height/2,E=parseInt(p.dataset.index,10);if(m.clientY>=k&&g<E||m.clientY<k&&g>E||(m.clientY>=k?E=Math.min(E+1,s.length-1):E=Math.max(E-1,0)),g===E)return;let S=aO(s,g,E);hn&&S.length>0&&hn(S)})),p.appendChild(oO(v,!1));for(let m of d)p.appendChild(oO(m,!0));let h=document.createElement("button");h.className="fb-reply-btn",h.textContent="Reply",h.addEventListener("click",m=>{m.stopPropagation(),RG(v.id,p,h)}),p.appendChild(h),Re.appendChild(p)}}function oO(e,r){let t=e.status==="closed",n=e.visibility==="private",a=document.createElement("div");a.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":"")+(n?" fb-cmt-private":""),a.dataset.id=e.id;let o=ft==="custom"&&!r?'<span class="fb-drag-handle" title="Drag to reorder">&#x2630;</span>':"",u=n?'<span class="fb-cmt-private-badge" title="Private annotation">&#x1F512;</span>':"";a.innerHTML=`
    ${o}
    <div class="fb-cmt-body">${cr(e.body)}</div>
    <div class="fb-cmt-meta">
      ${u}
      <span class="fb-cmt-author">${cr(e.author)}</span>
      <span class="fb-cmt-time">${eO(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
    <div class="fb-reactions"></div>
  `;let c=a.querySelector(".fb-reactions");return _G(c,e),r||(a.addEventListener("click",s=>{s.target.closest(".fb-cmt-delete")||s.target.closest(".fb-cmt-resolve")||s.target.closest(".fb-cmt-edit")||s.target.closest(".fb-reactions")||s.target.closest(".fb-drag-handle")||(Qa(e.id),KC(e.id),Re.querySelectorAll(".fb-cmt-card").forEach(l=>l.classList.remove("fb-cmt-active")),a.classList.add("fb-cmt-active"))}),a.querySelector(".fb-cmt-resolve").addEventListener("click",s=>{s.stopPropagation(),Js&&Js(e.id,!t)})),a.querySelector(".fb-cmt-edit").addEventListener("click",s=>{s.stopPropagation(),AG(e,a)}),a.querySelector(".fb-cmt-delete").addEventListener("click",s=>{s.stopPropagation(),Ys&&Ys(e.id)}),a}var IG=["\u{1F44D}","\u2764\uFE0F","\u{1F440}","\u{1F389}","\u{1F914}","\u{1F602}"];function _G(e,r){let t=r.reactions||[],n=xe();for(let o of t){let u=document.createElement("button");u.className="fb-reaction-badge",n&&o.authors.includes(n)&&u.classList.add("fb-reaction-mine"),u.textContent=`${o.emoji} ${o.count}`,u.title=o.authors.join(", "),u.addEventListener("click",c=>{c.stopPropagation(),yn&&yn(r.id,o.emoji)}),e.appendChild(u)}let a=document.createElement("button");a.className="fb-reaction-add",a.textContent="+",a.title="Add reaction",a.addEventListener("click",o=>{o.stopPropagation(),PG(e,r,a)}),e.appendChild(a)}function PG(e,r,t){let n=e.querySelector(".fb-emoji-picker");if(n){n.remove();return}let a=document.createElement("div");a.className="fb-emoji-picker";for(let u of IG){let c=document.createElement("button");c.className="fb-emoji-option",c.textContent=u,c.addEventListener("click",s=>{s.stopPropagation(),a.remove(),yn&&yn(r.id,u)}),a.appendChild(c)}e.insertBefore(a,t.nextSibling);let o=u=>{!a.contains(u.target)&&u.target!==t&&(a.remove(),document.removeEventListener("click",o,!0))};setTimeout(()=>document.addEventListener("click",o,!0),0)}function RG(e,r,t){gn();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let a=document.createElement("div");a.className="fb-reply-form",a.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!xe()){let s=B.querySelector(".fb-name-input");s.focus(),s.classList.add("fb-name-input-error"),setTimeout(()=>s.classList.remove("fb-name-input-error"),2e3);return}let c=a.querySelector("textarea").value.trim();c&&(Qs&&Qs({parent_id:e,comment:c,commenter:xe()}),a.remove(),t.style.display="")};a.querySelector(".fb-reply-submit").addEventListener("click",o);let u=a.querySelector("textarea");u.addEventListener("keydown",c=>{c.key==="Enter"&&(c.metaKey||c.ctrlKey)&&(c.preventDefault(),o())}),a.querySelector(".fb-reply-cancel").addEventListener("click",()=>{a.remove(),t.style.display=""}),r.insertBefore(a,t),u.focus()}function AG(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${cr(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let a=t.querySelector("textarea");a.focus(),a.setSelectionRange(a.value.length,a.value.length);let o=()=>{let u=a.value.trim();u&&Xs&&Xs(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),a.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function yO(e){let r=Re.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(Re.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function rc(){iO||(iO=!0,NG())}function NG(){let e=document.createElement("style");e.textContent=`
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
      width: ${OG}px;
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
  `,document.head.appendChild(e)}var pt=null,Nr=null,Mr=null,I=[],Ar=null,Se=null,V=new Set,re=new Map,nc=!1,ce=null,gO="remarq-sort-mode-";function MG(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null,theme:e?.dataset.theme||"auto",apiKey:e?.dataset.apiKey||null};uc(r.apiUrl),r.apiKey&&sc(r.apiKey);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{pt=document.querySelector(r.contentSelector)||document.body,Nr=r.documentUri||window.location.origin+window.location.pathname,Mr=r.documentId||null,document.documentElement.dataset.remarqTheme=r.theme,rc(),dO(()=>{ac(),gn()});let a=Mr||Nr;localStorage.getItem(gO+a)==="custom"&&ec("custom"),UC(u=>{ac(),gn(),yO(u),Qa(u)}),$G(),await t(),bO(),JC(r,()=>I)}catch(a){console.error("[feedback-layer] Boot failed:",a)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}function ac(){nc||(pO({onSubmit:DG,onDelete:WG,onResolve:BG,onReply:GG,onEdit:UG,onSearch:FG,onReaction:HG,onReorder:KG}),I.length>0&&se(I,V,re,ce),nc=!0)}async function bO(){try{let e=xe()||void 0;I=await ri(Nr,Mr,{viewer:e}),V=await jG(I),Za(),nc&&se(I,V,re,ce)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),ze(`Failed to load comments: ${e.message}`,"error")}}function Za(){let e=[...new Set(I.map(r=>r.author))];hO(e)}async function jG(e){HC();let r=new Set;re.clear();for(let t of e)if(!t.parent)try{let n=await Ya({exact:t.quote,prefix:t.prefix,suffix:t.suffix},pt);n&&t.status!=="closed"?(Ja(n,t.id,{isPrivate:t.visibility==="private"}),r.add(t.id),re.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),re.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function $G(){document.addEventListener("mouseup",tc),document.addEventListener("keyup",tc),document.addEventListener("touchend",tc)}function tc(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){bn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){bn();return}if(!pt.contains(r.commonAncestorContainer)){bn();return}LG(r)},10)}function LG(e){bn();let r=e.getBoundingClientRect();Se=document.createElement("button"),Se.className="fb-annotate-tooltip",Se.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',Se.style.top=window.scrollY+r.bottom+8+"px",Se.style.left=window.scrollX+r.left+r.width/2-40+"px";let t=async n=>{n.preventDefault(),n.stopPropagation();let a=window.getSelection();if(!a||a.isCollapsed)return;let o=a.getRangeAt(0);try{ac(),Ar=await BC(o,pt),mO(Ar.exact)}catch(u){console.error("[feedback-layer] Failed to create selector:",u)}bn()};Se.addEventListener("mousedown",t),Se.addEventListener("touchstart",t),document.body.appendChild(Se)}function bn(){Se&&(Se.remove(),Se=null)}async function FG(e,r){if(!e&&!r){ce=null,se(I,V,re,null),Ws(new Set);return}try{let t=xe()||void 0,n=await ri(Nr,Mr,{search:e,author:r,viewer:t});ce=new Set(n.map(o=>o.id)),se(I,V,re,ce);let a=new Set;for(let o of I)!o.parent&&V.has(o.id)&&!ce.has(o.id)&&a.add(o.id);Ws(a)}catch(t){console.error("[feedback-layer] Search failed:",t)}}async function DG({comment:e,commenter:r,visibility:t}){if(Ar){try{let n=await ti({uri:Nr,document:Mr,quote:Ar.exact,prefix:Ar.prefix,suffix:Ar.suffix,body:e,author:r,visibility:t});I.push(n);let a=await Ya({exact:n.quote,prefix:n.prefix,suffix:n.suffix},pt);a&&(Ja(a,n.id,{isPrivate:n.visibility==="private"}),V.add(n.id)),Za(),se(I,V,re,ce),window.getSelection().removeAllRanges()}catch(n){console.error("[feedback-layer] Failed to create comment:",n),ze(`Failed to save comment: ${n.message}`,"error")}Ar=null}}async function BG(e,r){try{let n=await lc(e,r?"closed":"open"),a=I.findIndex(o=>o.id===e);if(a!==-1&&(I[a]=n),r)Ks(e);else{let o=n,u=await Ya({exact:o.quote,prefix:o.prefix,suffix:o.suffix},pt);u?(Ja(u,o.id,{isPrivate:o.visibility==="private"}),V.add(o.id)):V.delete(o.id)}se(I,V,re,ce)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),ze(`Failed to update comment: ${t.message}`,"error")}}async function GG({parent_id:e,comment:r,commenter:t}){try{let n=await ti({uri:Nr,document:Mr,body:r,author:t,parent:e});I.push(n),Za(),se(I,V,re,ce)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),ze(`Failed to save reply: ${n.message}`,"error")}}async function UG(e,r){try{let t=await cc(e,{body:r}),n=I.findIndex(a=>a.id===e);n!==-1&&(I[n]=t),se(I,V,re,ce)}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),ze(`Failed to update comment: ${t.message}`,"error")}}async function HG(e,r){let t=xe();if(t)try{let o=I.find(s=>s.id===e)?.reactions?.find(s=>s.emoji===r)?.authors.includes(t),u;o?u=await dc(e,r,t):u=await vc(e,r,t);let c=I.findIndex(s=>s.id===e);c!==-1&&(I[c]={...I[c],reactions:u.reactions}),se(I,V,re,ce)}catch(n){console.error("[feedback-layer] Failed to toggle reaction:",n),ze(`Failed to update reaction: ${n.message}`,"error")}}async function KG(e){let r=Mr||Nr;if(e===null){localStorage.setItem(gO+r,vO()),se(I,V,re,ce);return}for(let t of e){let n=I.findIndex(a=>a.id===t.id);n!==-1&&(I[n]={...I[n],sort_order:t.sortOrder})}se(I,V,re,ce);try{await pc(e)}catch(t){console.error("[feedback-layer] Failed to reorder comments:",t),ze(`Failed to reorder: ${t.message}`,"error"),bO()}}async function WG(e){try{await fc(e),Ks(e),V.delete(e),I=I.filter(r=>r.id!==e&&r.parent!==e),Za(),se(I,V,re,ce)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),ze(`Failed to delete comment: ${r.message}`,"error")}}try{MG()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
