var FeedbackLayer=(()=>{var aC=Object.create;var Vs=Object.defineProperty;var oC=Object.getOwnPropertyDescriptor;var uC=Object.getOwnPropertyNames;var sC=Object.getPrototypeOf,cC=Object.prototype.hasOwnProperty;var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var lC=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of uC(r))!cC.call(e,i)&&i!==t&&Vs(e,i,{get:()=>r[i],enumerable:!(n=oC(r,i))||n.enumerable});return e};var b=(e,r,t)=>(t=e!=null?aC(sC(e)):{},lC(r||!e||!e.__esModule?Vs(t,"default",{value:e,enumerable:!0}):t,e));var P=a((RG,tc)=>{"use strict";tc.exports=function(e){try{return!!e()}catch{return!0}}});var Nr=a((AG,nc)=>{"use strict";var fC=P();nc.exports=!fC(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var A=a((NG,oc)=>{"use strict";var ic=Nr(),ac=Function.prototype,Qi=ac.call,pC=ic&&ac.bind.bind(Qi,Qi);oc.exports=ic?pC:function(e){return function(){return Qi.apply(e,arguments)}}});var U=a((MG,uc)=>{"use strict";var vC=A();uc.exports=vC({}.isPrototypeOf)});var _=a((Xi,sc)=>{"use strict";var lt=function(e){return e&&e.Math===Math&&e};sc.exports=lt(typeof globalThis=="object"&&globalThis)||lt(typeof window=="object"&&window)||lt(typeof self=="object"&&self)||lt(typeof global=="object"&&global)||lt(typeof Xi=="object"&&Xi)||function(){return this}()||Function("return this")()});var Mr=a((jG,pc)=>{"use strict";var dC=Nr(),fc=Function.prototype,cc=fc.apply,lc=fc.call;pc.exports=typeof Reflect=="object"&&Reflect.apply||(dC?lc.bind(cc):function(){return lc.apply(cc,arguments)})});var we=a(($G,dc)=>{"use strict";var vc=A(),hC=vc({}.toString),mC=vc("".slice);dc.exports=function(e){return mC(hC(e),8,-1)}});var ft=a((LG,hc)=>{"use strict";var yC=we(),bC=A();hc.exports=function(e){if(yC(e)==="Function")return bC(e)}});var N=a((FG,mc)=>{"use strict";var Zi=typeof document=="object"&&document.all;mc.exports=typeof Zi>"u"&&Zi!==void 0?function(e){return typeof e=="function"||e===Zi}:function(e){return typeof e=="function"}});var W=a((DG,yc)=>{"use strict";var gC=P();yc.exports=!gC(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var B=a((BG,bc)=>{"use strict";var qC=Nr(),yn=Function.prototype.call;bc.exports=qC?yn.bind(yn):function(){return yn.apply(yn,arguments)}});var ea=a(xc=>{"use strict";var gc={}.propertyIsEnumerable,qc=Object.getOwnPropertyDescriptor,xC=qc&&!gc.call({1:2},1);xc.f=xC?function(r){var t=qc(this,r);return!!t&&t.enumerable}:gc});var Ye=a((UG,Sc)=>{"use strict";Sc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var bn=a((WG,wc)=>{"use strict";var SC=A(),wC=P(),TC=we(),ra=Object,EC=SC("".split);wc.exports=wC(function(){return!ra("z").propertyIsEnumerable(0)})?function(e){return TC(e)==="String"?EC(e,""):ra(e)}:ra});var lr=a((HG,Tc)=>{"use strict";Tc.exports=function(e){return e==null}});var fr=a((KG,Ec)=>{"use strict";var OC=lr(),CC=TypeError;Ec.exports=function(e){if(OC(e))throw new CC("Can't call method on "+e);return e}});var _e=a((zG,Oc)=>{"use strict";var kC=bn(),IC=fr();Oc.exports=function(e){return kC(IC(e))}});var $=a((VG,Cc)=>{"use strict";var PC=N();Cc.exports=function(e){return typeof e=="object"?e!==null:PC(e)}});var V=a((YG,kc)=>{"use strict";kc.exports={}});var H=a((JG,Pc)=>{"use strict";var ta=V(),na=_(),_C=N(),Ic=function(e){return _C(e)?e:void 0};Pc.exports=function(e,r){return arguments.length<2?Ic(ta[e])||Ic(na[e]):ta[e]&&ta[e][r]||na[e]&&na[e][r]}});var jr=a((QG,Ac)=>{"use strict";var RC=_(),_c=RC.navigator,Rc=_c&&_c.userAgent;Ac.exports=Rc?String(Rc):""});var $r=a((XG,Fc)=>{"use strict";var Lc=_(),ia=jr(),Nc=Lc.process,Mc=Lc.Deno,jc=Nc&&Nc.versions||Mc&&Mc.version,$c=jc&&jc.v8,be,gn;$c&&(be=$c.split("."),gn=be[0]>0&&be[0]<4?1:+(be[0]+be[1]));!gn&&ia&&(be=ia.match(/Edge\/(\d+)/),(!be||be[1]>=74)&&(be=ia.match(/Chrome\/(\d+)/),be&&(gn=+be[1])));Fc.exports=gn});var pr=a((ZG,Bc)=>{"use strict";var Dc=$r(),AC=P(),NC=_(),MC=NC.String;Bc.exports=!!Object.getOwnPropertySymbols&&!AC(function(){var e=Symbol("symbol detection");return!MC(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Dc&&Dc<41})});var aa=a((e6,Gc)=>{"use strict";var jC=pr();Gc.exports=jC&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Lr=a((r6,Uc)=>{"use strict";var $C=H(),LC=N(),FC=U(),DC=aa(),BC=Object;Uc.exports=DC?function(e){return typeof e=="symbol"}:function(e){var r=$C("Symbol");return LC(r)&&FC(r.prototype,BC(e))}});var Je=a((t6,Wc)=>{"use strict";var GC=String;Wc.exports=function(e){try{return GC(e)}catch{return"Object"}}});var D=a((n6,Hc)=>{"use strict";var UC=N(),WC=Je(),HC=TypeError;Hc.exports=function(e){if(UC(e))return e;throw new HC(WC(e)+" is not a function")}});var qn=a((i6,Kc)=>{"use strict";var KC=D(),zC=lr();Kc.exports=function(e,r){var t=e[r];return zC(t)?void 0:KC(t)}});var Vc=a((a6,zc)=>{"use strict";var oa=B(),ua=N(),sa=$(),VC=TypeError;zc.exports=function(e,r){var t,n;if(r==="string"&&ua(t=e.toString)&&!sa(n=oa(t,e))||ua(t=e.valueOf)&&!sa(n=oa(t,e))||r!=="string"&&ua(t=e.toString)&&!sa(n=oa(t,e)))return n;throw new VC("Can't convert object to primitive value")}});var Z=a((o6,Yc)=>{"use strict";Yc.exports=!0});var Xc=a((u6,Qc)=>{"use strict";var Jc=_(),YC=Object.defineProperty;Qc.exports=function(e,r){try{YC(Jc,e,{value:r,configurable:!0,writable:!0})}catch{Jc[e]=r}return r}});var pt=a((s6,rl)=>{"use strict";var JC=Z(),QC=_(),XC=Xc(),Zc="__core-js_shared__",el=rl.exports=QC[Zc]||XC(Zc,{});(el.versions||(el.versions=[])).push({version:"3.48.0",mode:JC?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var vr=a((c6,nl)=>{"use strict";var tl=pt();nl.exports=function(e,r){return tl[e]||(tl[e]=r||{})}});var re=a((l6,il)=>{"use strict";var ZC=fr(),e0=Object;il.exports=function(e){return e0(ZC(e))}});var K=a((f6,al)=>{"use strict";var r0=A(),t0=re(),n0=r0({}.hasOwnProperty);al.exports=Object.hasOwn||function(r,t){return n0(t0(r),t)}});var Fr=a((p6,ol)=>{"use strict";var i0=A(),a0=0,o0=Math.random(),u0=i0(1.1.toString);ol.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+u0(++a0+o0,36)}});var R=a((v6,sl)=>{"use strict";var s0=_(),c0=vr(),ul=K(),l0=Fr(),f0=pr(),p0=aa(),Dr=s0.Symbol,ca=c0("wks"),v0=p0?Dr.for||Dr:Dr&&Dr.withoutSetter||l0;sl.exports=function(e){return ul(ca,e)||(ca[e]=f0&&ul(Dr,e)?Dr[e]:v0("Symbol."+e)),ca[e]}});var pl=a((d6,fl)=>{"use strict";var d0=B(),cl=$(),ll=Lr(),h0=qn(),m0=Vc(),y0=R(),b0=TypeError,g0=y0("toPrimitive");fl.exports=function(e,r){if(!cl(e)||ll(e))return e;var t=h0(e,g0),n;if(t){if(r===void 0&&(r="default"),n=d0(t,e,r),!cl(n)||ll(n))return n;throw new b0("Can't convert object to primitive value")}return r===void 0&&(r="number"),m0(e,r)}});var xn=a((h6,vl)=>{"use strict";var q0=pl(),x0=Lr();vl.exports=function(e){var r=q0(e,"string");return x0(r)?r:r+""}});var Sn=a((m6,hl)=>{"use strict";var S0=_(),dl=$(),la=S0.document,w0=dl(la)&&dl(la.createElement);hl.exports=function(e){return w0?la.createElement(e):{}}});var fa=a((y6,ml)=>{"use strict";var T0=W(),E0=P(),O0=Sn();ml.exports=!T0&&!E0(function(){return Object.defineProperty(O0("div"),"a",{get:function(){return 7}}).a!==7})});var vt=a(bl=>{"use strict";var C0=W(),k0=B(),I0=ea(),P0=Ye(),_0=_e(),R0=xn(),A0=K(),N0=fa(),yl=Object.getOwnPropertyDescriptor;bl.f=C0?yl:function(r,t){if(r=_0(r),t=R0(t),N0)try{return yl(r,t)}catch{}if(A0(r,t))return P0(!k0(I0.f,r,t),r[t])}});var pa=a((g6,gl)=>{"use strict";var M0=P(),j0=N(),$0=/#|\.prototype\./,dt=function(e,r){var t=F0[L0(e)];return t===B0?!0:t===D0?!1:j0(r)?M0(r):!!r},L0=dt.normalize=function(e){return String(e).replace($0,".").toLowerCase()},F0=dt.data={},D0=dt.NATIVE="N",B0=dt.POLYFILL="P";gl.exports=dt});var Y=a((q6,xl)=>{"use strict";var ql=ft(),G0=D(),U0=Nr(),W0=ql(ql.bind);xl.exports=function(e,r){return G0(e),r===void 0?e:U0?W0(e,r):function(){return e.apply(r,arguments)}}});var va=a((x6,Sl)=>{"use strict";var H0=W(),K0=P();Sl.exports=H0&&K0(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var X=a((S6,wl)=>{"use strict";var z0=$(),V0=String,Y0=TypeError;wl.exports=function(e){if(z0(e))return e;throw new Y0(V0(e)+" is not an object")}});var te=a(El=>{"use strict";var J0=W(),Q0=fa(),X0=va(),wn=X(),Tl=xn(),Z0=TypeError,da=Object.defineProperty,ek=Object.getOwnPropertyDescriptor,ha="enumerable",ma="configurable",ya="writable";El.f=J0?X0?function(r,t,n){if(wn(r),t=Tl(t),wn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&ya in n&&!n[ya]){var i=ek(r,t);i&&i[ya]&&(r[t]=n.value,n={configurable:ma in n?n[ma]:i[ma],enumerable:ha in n?n[ha]:i[ha],writable:!1})}return da(r,t,n)}:da:function(r,t,n){if(wn(r),t=Tl(t),wn(n),Q0)try{return da(r,t,n)}catch{}if("get"in n||"set"in n)throw new Z0("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var Te=a((T6,Ol)=>{"use strict";var rk=W(),tk=te(),nk=Ye();Ol.exports=rk?function(e,r,t){return tk.f(e,r,nk(1,t))}:function(e,r,t){return e[r]=t,e}});var x=a((E6,kl)=>{"use strict";var ht=_(),ik=Mr(),ak=ft(),ok=N(),uk=vt().f,sk=pa(),Br=V(),ck=Y(),Gr=Te(),Cl=K();pt();var lk=function(e){var r=function(t,n,i){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return ik(e,this,arguments)};return r.prototype=e.prototype,r};kl.exports=function(e,r){var t=e.target,n=e.global,i=e.stat,o=e.proto,u=n?ht:i?ht[t]:ht[t]&&ht[t].prototype,c=n?Br:Br[t]||Gr(Br,t,{})[t],s=c.prototype,l,f,p,v,d,m,h,y,q;for(v in r)l=sk(n?v:t+(i?".":"#")+v,e.forced),f=!l&&u&&Cl(u,v),m=c[v],f&&(e.dontCallGetSet?(q=uk(u,v),h=q&&q.value):h=u[v]),d=f&&h?h:r[v],!(!l&&!o&&typeof m==typeof d)&&(e.bind&&f?y=ck(d,ht):e.wrap&&f?y=lk(d):o&&ok(d)?y=ak(d):y=d,(e.sham||d&&d.sham||m&&m.sham)&&Gr(y,"sham",!0),Gr(c,v,y),o&&(p=t+"Prototype",Cl(Br,p)||Gr(Br,p,{}),Gr(Br[p],v,d),e.real&&s&&(l||!s[v])&&Gr(s,v,d)))}});var Re=a((O6,Il)=>{"use strict";var fk=we();Il.exports=Array.isArray||function(r){return fk(r)==="Array"}});var Tn=a((C6,_l)=>{"use strict";var pk=R(),vk=pk("toStringTag"),Pl={};Pl[vk]="z";_l.exports=String(Pl)==="[object z]"});var mt=a((k6,Rl)=>{"use strict";var dk=Tn(),hk=N(),En=we(),mk=R(),yk=mk("toStringTag"),bk=Object,gk=En(function(){return arguments}())==="Arguments",qk=function(e,r){try{return e[r]}catch{}};Rl.exports=dk?En:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=qk(r=bk(e),yk))=="string"?t:gk?En(r):(n=En(r))==="Object"&&hk(r.callee)?"Arguments":n}});var ga=a((I6,Al)=>{"use strict";var xk=A(),Sk=N(),ba=pt(),wk=xk(Function.toString);Sk(ba.inspectSource)||(ba.inspectSource=function(e){return wk(e)});Al.exports=ba.inspectSource});var bt=a((P6,Ll)=>{"use strict";var Tk=A(),Ek=P(),Nl=N(),Ok=mt(),Ck=H(),kk=ga(),Ml=function(){},jl=Ck("Reflect","construct"),qa=/^\s*(?:class|function)\b/,Ik=Tk(qa.exec),Pk=!qa.test(Ml),yt=function(r){if(!Nl(r))return!1;try{return jl(Ml,[],r),!0}catch{return!1}},$l=function(r){if(!Nl(r))return!1;switch(Ok(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Pk||!!Ik(qa,kk(r))}catch{return!0}};$l.sham=!0;Ll.exports=!jl||Ek(function(){var e;return yt(yt.call)||!yt(Object)||!yt(function(){e=!0})||e})?$l:yt});var Dl=a((_6,Fl)=>{"use strict";var _k=Math.ceil,Rk=Math.floor;Fl.exports=Math.trunc||function(r){var t=+r;return(t>0?Rk:_k)(t)}});var On=a((R6,Bl)=>{"use strict";var Ak=Dl();Bl.exports=function(e){var r=+e;return r!==r||r===0?0:Ak(r)}});var xa=a((A6,Gl)=>{"use strict";var Nk=On(),Mk=Math.max,jk=Math.min;Gl.exports=function(e,r){var t=Nk(e);return t<0?Mk(t+r,0):jk(t,r)}});var Sa=a((N6,Ul)=>{"use strict";var $k=On(),Lk=Math.min;Ul.exports=function(e){var r=$k(e);return r>0?Lk(r,9007199254740991):0}});var fe=a((M6,Wl)=>{"use strict";var Fk=Sa();Wl.exports=function(e){return Fk(e.length)}});var Ur=a((j6,Hl)=>{"use strict";var Dk=W(),Bk=te(),Gk=Ye();Hl.exports=function(e,r,t){Dk?Bk.f(e,r,Gk(0,t)):e[r]=t}});var Wr=a(($6,Kl)=>{"use strict";var Uk=W(),Wk=Re(),Hk=TypeError,Kk=Object.getOwnPropertyDescriptor,zk=Uk&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();Kl.exports=zk?function(e,r){if(Wk(e)&&!Kk(e,"length").writable)throw new Hk("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var gt=a((L6,zl)=>{"use strict";var Vk=P(),Yk=R(),Jk=$r(),Qk=Yk("species");zl.exports=function(e){return Jk>=51||!Vk(function(){var r=[],t=r.constructor={};return t[Qk]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var dr=a((F6,Vl)=>{"use strict";var Xk=A();Vl.exports=Xk([].slice)});var Ql=a(()=>{"use strict";var Zk=x(),Yl=Re(),e1=bt(),r1=$(),Jl=xa(),t1=fe(),n1=_e(),i1=Ur(),a1=Wr(),o1=R(),u1=gt(),s1=dr(),c1=u1("slice"),l1=o1("species"),wa=Array,f1=Math.max;Zk({target:"Array",proto:!0,forced:!c1},{slice:function(r,t){var n=n1(this),i=t1(n),o=Jl(r,i),u=Jl(t===void 0?i:t,i),c,s,l;if(Yl(n)&&(c=n.constructor,e1(c)&&(c===wa||Yl(c.prototype))?c=void 0:r1(c)&&(c=c[l1],c===null&&(c=void 0)),c===wa||c===void 0))return s1(n,o,u);for(s=new(c===void 0?wa:c)(f1(u-o,0)),l=0;o<u;o++,l++)o in n&&i1(s,l,n[o]);return a1(s,l),s}})});var oe=a((G6,Xl)=>{"use strict";var p1=_(),v1=V();Xl.exports=function(e,r){var t=v1[e+"Prototype"],n=t&&t[r];if(n)return n;var i=p1[e],o=i&&i.prototype;return o&&o[r]}});var ef=a((U6,Zl)=>{"use strict";Ql();var d1=oe();Zl.exports=d1("Array","slice")});var tf=a((W6,rf)=>{"use strict";var h1=U(),m1=ef(),Ta=Array.prototype;rf.exports=function(e){var r=e.slice;return e===Ta||h1(Ta,e)&&r===Ta.slice?m1:r}});var af=a((H6,nf)=>{"use strict";var y1=tf();nf.exports=y1});var uf=a((K6,of)=>{"use strict";var b1=af();of.exports=b1});var cf=a((z6,sf)=>{"use strict";var g1=uf();sf.exports=g1});var Ea=a((V6,lf)=>{"use strict";lf.exports=cf()});var Hr=a((Y6,ff)=>{ff.exports=Ea()});var Qe=a((J6,pf)=>{"use strict";var q1=mt(),x1=String;pf.exports=function(e){if(q1(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return x1(e)}});var mf=a((Q6,hf)=>{"use strict";var Oa=A(),S1=On(),w1=Qe(),T1=fr(),E1=Oa("".charAt),vf=Oa("".charCodeAt),O1=Oa("".slice),df=function(e){return function(r,t){var n=w1(T1(r)),i=S1(t),o=n.length,u,c;return i<0||i>=o?e?"":void 0:(u=vf(n,i),u<55296||u>56319||i+1===o||(c=vf(n,i+1))<56320||c>57343?e?E1(n,i):u:e?O1(n,i,i+2):(u-55296<<10)+(c-56320)+65536)}};hf.exports={codeAt:df(!1),charAt:df(!0)}});var gf=a((X6,bf)=>{"use strict";var C1=_(),k1=N(),yf=C1.WeakMap;bf.exports=k1(yf)&&/native code/.test(String(yf))});var qt=a((Z6,xf)=>{"use strict";var I1=vr(),P1=Fr(),qf=I1("keys");xf.exports=function(e){return qf[e]||(qf[e]=P1(e))}});var Kr=a((e5,Sf)=>{"use strict";Sf.exports={}});var Xe=a((r5,Ef)=>{"use strict";var _1=gf(),Tf=_(),R1=$(),A1=Te(),Ca=K(),ka=pt(),N1=qt(),M1=Kr(),wf="Object already initialized",Ia=Tf.TypeError,j1=Tf.WeakMap,Cn,xt,kn,$1=function(e){return kn(e)?xt(e):Cn(e,{})},L1=function(e){return function(r){var t;if(!R1(r)||(t=xt(r)).type!==e)throw new Ia("Incompatible receiver, "+e+" required");return t}};_1||ka.state?(ge=ka.state||(ka.state=new j1),ge.get=ge.get,ge.has=ge.has,ge.set=ge.set,Cn=function(e,r){if(ge.has(e))throw new Ia(wf);return r.facade=e,ge.set(e,r),r},xt=function(e){return ge.get(e)||{}},kn=function(e){return ge.has(e)}):(hr=N1("state"),M1[hr]=!0,Cn=function(e,r){if(Ca(e,hr))throw new Ia(wf);return r.facade=e,A1(e,hr,r),r},xt=function(e){return Ca(e,hr)?e[hr]:{}},kn=function(e){return Ca(e,hr)});var ge,hr;Ef.exports={set:Cn,get:xt,has:kn,enforce:$1,getterFor:L1}});var kf=a((t5,Cf)=>{"use strict";var Pa=W(),F1=K(),Of=Function.prototype,D1=Pa&&Object.getOwnPropertyDescriptor,_a=F1(Of,"name"),B1=_a&&function(){}.name==="something",G1=_a&&(!Pa||Pa&&D1(Of,"name").configurable);Cf.exports={EXISTS:_a,PROPER:B1,CONFIGURABLE:G1}});var Ra=a((n5,Pf)=>{"use strict";var U1=_e(),W1=xa(),H1=fe(),If=function(e){return function(r,t,n){var i=U1(r),o=H1(i);if(o===0)return!e&&-1;var u=W1(n,o),c;if(e&&t!==t){for(;o>u;)if(c=i[u++],c!==c)return!0}else for(;o>u;u++)if((e||u in i)&&i[u]===t)return e||u||0;return!e&&-1}};Pf.exports={includes:If(!0),indexOf:If(!1)}});var Na=a((i5,Rf)=>{"use strict";var K1=A(),Aa=K(),z1=_e(),V1=Ra().indexOf,Y1=Kr(),_f=K1([].push);Rf.exports=function(e,r){var t=z1(e),n=0,i=[],o;for(o in t)!Aa(Y1,o)&&Aa(t,o)&&_f(i,o);for(;r.length>n;)Aa(t,o=r[n++])&&(~V1(i,o)||_f(i,o));return i}});var In=a((a5,Af)=>{"use strict";Af.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var Pn=a((o5,Nf)=>{"use strict";var J1=Na(),Q1=In();Nf.exports=Object.keys||function(r){return J1(r,Q1)}});var Ma=a(Mf=>{"use strict";var X1=W(),Z1=va(),eI=te(),rI=X(),tI=_e(),nI=Pn();Mf.f=X1&&!Z1?Object.defineProperties:function(r,t){rI(r);for(var n=tI(t),i=nI(t),o=i.length,u=0,c;o>u;)eI.f(r,c=i[u++],n[c]);return r}});var ja=a((s5,jf)=>{"use strict";var iI=H();jf.exports=iI("document","documentElement")});var Ze=a((c5,Uf)=>{"use strict";var aI=X(),oI=Ma(),$f=In(),uI=Kr(),sI=ja(),cI=Sn(),lI=qt(),Lf=">",Ff="<",La="prototype",Fa="script",Bf=lI("IE_PROTO"),$a=function(){},Gf=function(e){return Ff+Fa+Lf+e+Ff+"/"+Fa+Lf},Df=function(e){e.write(Gf("")),e.close();var r=e.parentWindow.Object;return e=null,r},fI=function(){var e=cI("iframe"),r="java"+Fa+":",t;return e.style.display="none",sI.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(Gf("document.F=Object")),t.close(),t.F},_n,Rn=function(){try{_n=new ActiveXObject("htmlfile")}catch{}Rn=typeof document<"u"?document.domain&&_n?Df(_n):fI():Df(_n);for(var e=$f.length;e--;)delete Rn[La][$f[e]];return Rn()};uI[Bf]=!0;Uf.exports=Object.create||function(r,t){var n;return r!==null?($a[La]=aI(r),n=new $a,$a[La]=null,n[Bf]=r):n=Rn(),t===void 0?n:oI.f(n,t)}});var Da=a((l5,Wf)=>{"use strict";var pI=P();Wf.exports=!pI(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var St=a((f5,Kf)=>{"use strict";var vI=K(),dI=N(),hI=re(),mI=qt(),yI=Da(),Hf=mI("IE_PROTO"),Ba=Object,bI=Ba.prototype;Kf.exports=yI?Ba.getPrototypeOf:function(e){var r=hI(e);if(vI(r,Hf))return r[Hf];var t=r.constructor;return dI(t)&&r instanceof t?t.prototype:r instanceof Ba?bI:null}});var Ae=a((p5,zf)=>{"use strict";var gI=Te();zf.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:gI(e,r,t),e}});var Ha=a((v5,Jf)=>{"use strict";var qI=P(),xI=N(),SI=$(),wI=Ze(),Vf=St(),TI=Ae(),EI=R(),OI=Z(),Wa=EI("iterator"),Yf=!1,Ne,Ga,Ua;[].keys&&(Ua=[].keys(),"next"in Ua?(Ga=Vf(Vf(Ua)),Ga!==Object.prototype&&(Ne=Ga)):Yf=!0);var CI=!SI(Ne)||qI(function(){var e={};return Ne[Wa].call(e)!==e});CI?Ne={}:OI&&(Ne=wI(Ne));xI(Ne[Wa])||TI(Ne,Wa,function(){return this});Jf.exports={IteratorPrototype:Ne,BUGGY_SAFARI_ITERATORS:Yf}});var Xf=a((d5,Qf)=>{"use strict";var kI=Tn(),II=mt();Qf.exports=kI?{}.toString:function(){return"[object "+II(this)+"]"}});var Me=a((h5,ep)=>{"use strict";var PI=Tn(),_I=te().f,RI=Te(),AI=K(),NI=Xf(),MI=R(),Zf=MI("toStringTag");ep.exports=function(e,r,t,n){var i=t?e:e&&e.prototype;i&&(AI(i,Zf)||_I(i,Zf,{configurable:!0,value:r}),n&&!PI&&RI(i,"toString",NI))}});var mr=a((m5,rp)=>{"use strict";rp.exports={}});var np=a((y5,tp)=>{"use strict";var jI=Ha().IteratorPrototype,$I=Ze(),LI=Ye(),FI=Me(),DI=mr(),BI=function(){return this};tp.exports=function(e,r,t,n){var i=r+" Iterator";return e.prototype=$I(jI,{next:LI(+!n,t)}),FI(e,i,!1,!0),DI[i]=BI,e}});var ap=a((b5,ip)=>{"use strict";var GI=A(),UI=D();ip.exports=function(e,r,t){try{return GI(UI(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var up=a((g5,op)=>{"use strict";var WI=$();op.exports=function(e){return WI(e)||e===null}});var cp=a((q5,sp)=>{"use strict";var HI=up(),KI=String,zI=TypeError;sp.exports=function(e){if(HI(e))return e;throw new zI("Can't set "+KI(e)+" as a prototype")}});var wt=a((x5,lp)=>{"use strict";var VI=ap(),YI=$(),JI=fr(),QI=cp();lp.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=VI(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(i,o){return JI(i),QI(o),YI(i)&&(e?t(i,o):i.__proto__=o),i}}():void 0)});var Mn=a((S5,qp)=>{"use strict";var XI=x(),ZI=B(),An=Z(),bp=kf(),eP=N(),rP=np(),fp=St(),pp=wt(),tP=Me(),nP=Te(),Ka=Ae(),iP=R(),vp=mr(),gp=Ha(),aP=bp.PROPER,oP=bp.CONFIGURABLE,dp=gp.IteratorPrototype,Nn=gp.BUGGY_SAFARI_ITERATORS,Tt=iP("iterator"),hp="keys",Et="values",mp="entries",yp=function(){return this};qp.exports=function(e,r,t,n,i,o,u){rP(t,r,n);var c=function(q){if(q===i&&v)return v;if(!Nn&&q&&q in f)return f[q];switch(q){case hp:return function(){return new t(this,q)};case Et:return function(){return new t(this,q)};case mp:return function(){return new t(this,q)}}return function(){return new t(this)}},s=r+" Iterator",l=!1,f=e.prototype,p=f[Tt]||f["@@iterator"]||i&&f[i],v=!Nn&&p||c(i),d=r==="Array"&&f.entries||p,m,h,y;if(d&&(m=fp(d.call(new e)),m!==Object.prototype&&m.next&&(!An&&fp(m)!==dp&&(pp?pp(m,dp):eP(m[Tt])||Ka(m,Tt,yp)),tP(m,s,!0,!0),An&&(vp[s]=yp))),aP&&i===Et&&p&&p.name!==Et&&(!An&&oP?nP(f,"name",Et):(l=!0,v=function(){return ZI(p,this)})),i)if(h={values:c(Et),keys:o?v:c(hp),entries:c(mp)},u)for(y in h)(Nn||l||!(y in f))&&Ka(f,y,h[y]);else XI({target:r,proto:!0,forced:Nn||l},h);return(!An||u)&&f[Tt]!==v&&Ka(f,Tt,v,{name:i}),vp[r]=v,h}});var jn=a((w5,xp)=>{"use strict";xp.exports=function(e,r){return{value:e,done:r}}});var yr=a(()=>{"use strict";var uP=mf().charAt,sP=Qe(),wp=Xe(),cP=Mn(),Sp=jn(),Tp="String Iterator",lP=wp.set,fP=wp.getterFor(Tp);cP(String,"String",function(e){lP(this,{type:Tp,string:sP(e),index:0})},function(){var r=fP(this),t=r.string,n=r.index,i;return n>=t.length?Sp(void 0,!0):(i=uP(t,n),r.index+=i.length,Sp(i,!1))})});var za=a((O5,Op)=>{"use strict";var pP=B(),Ep=X(),vP=qn();Op.exports=function(e,r,t){var n,i;Ep(e);try{if(n=vP(e,"return"),!n){if(r==="throw")throw t;return t}n=pP(n,e)}catch(o){i=!0,n=o}if(r==="throw")throw t;if(i)throw n;return Ep(n),t}});var kp=a((C5,Cp)=>{"use strict";var dP=X(),hP=za();Cp.exports=function(e,r,t,n){try{return n?r(dP(t)[0],t[1]):r(t)}catch(i){hP(e,"throw",i)}}});var Va=a((k5,Ip)=>{"use strict";var mP=R(),yP=mr(),bP=mP("iterator"),gP=Array.prototype;Ip.exports=function(e){return e!==void 0&&(yP.Array===e||gP[bP]===e)}});var Ot=a((I5,_p)=>{"use strict";var qP=mt(),Pp=qn(),xP=lr(),SP=mr(),wP=R(),TP=wP("iterator");_p.exports=function(e){if(!xP(e))return Pp(e,TP)||Pp(e,"@@iterator")||SP[qP(e)]}});var $n=a((P5,Rp)=>{"use strict";var EP=B(),OP=D(),CP=X(),kP=Je(),IP=Ot(),PP=TypeError;Rp.exports=function(e,r){var t=arguments.length<2?IP(e):r;if(OP(t))return CP(EP(t,e));throw new PP(kP(e)+" is not iterable")}});var jp=a((_5,Mp)=>{"use strict";var _P=Y(),RP=B(),AP=re(),NP=kp(),MP=Va(),jP=bt(),$P=fe(),Ap=Ur(),LP=Wr(),FP=$n(),DP=Ot(),Np=Array;Mp.exports=function(r){var t=AP(r),n=jP(this),i=arguments.length,o=i>1?arguments[1]:void 0,u=o!==void 0;u&&(o=_P(o,i>2?arguments[2]:void 0));var c=DP(t),s=0,l,f,p,v,d,m;if(c&&!(this===Np&&MP(c)))for(f=n?new this:[],v=FP(t,c),d=v.next;!(p=RP(d,v)).done;s++)m=u?NP(v,o,[p.value,s],!0):p.value,Ap(f,s,m);else for(l=$P(t),f=n?new this(l):Np(l);l>s;s++)m=u?o(t[s],s):t[s],Ap(f,s,m);return LP(f,s),f}});var Ja=a((R5,Dp)=>{"use strict";var BP=R(),Lp=BP("iterator"),Fp=!1;try{$p=0,Ya={next:function(){return{done:!!$p++}},return:function(){Fp=!0}},Ya[Lp]=function(){return this},Array.from(Ya,function(){throw 2})}catch{}var $p,Ya;Dp.exports=function(e,r){try{if(!r&&!Fp)return!1}catch{return!1}var t=!1;try{var n={};n[Lp]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var Bp=a(()=>{"use strict";var GP=x(),UP=jp(),WP=Ja(),HP=!WP(function(e){Array.from(e)});GP({target:"Array",stat:!0,forced:HP},{from:UP})});var Up=a((M5,Gp)=>{"use strict";yr();Bp();var KP=V();Gp.exports=KP.Array.from});var Hp=a((j5,Wp)=>{"use strict";var zP=Up();Wp.exports=zP});var zp=a(($5,Kp)=>{"use strict";var VP=Hp();Kp.exports=VP});var Yp=a((L5,Vp)=>{"use strict";var YP=zp();Vp.exports=YP});var Qa=a((F5,Jp)=>{"use strict";Jp.exports=Yp()});var Ln=a((D5,Qp)=>{Qp.exports=Qa()});var Ct=a((B5,Xp)=>{"use strict";var JP=TypeError,QP=9007199254740991;Xp.exports=function(e){if(e>QP)throw JP("Maximum allowed index exceeded");return e}});var tv=a((G5,rv)=>{"use strict";var Zp=Re(),XP=bt(),ZP=$(),e_=R(),r_=e_("species"),ev=Array;rv.exports=function(e){var r;return Zp(e)&&(r=e.constructor,XP(r)&&(r===ev||Zp(r.prototype))?r=void 0:ZP(r)&&(r=r[r_],r===null&&(r=void 0))),r===void 0?ev:r}});var Fn=a((U5,nv)=>{"use strict";var t_=tv();nv.exports=function(e,r){return new(t_(e))(r===0?0:r)}});var Xa=a(()=>{"use strict";var n_=x(),i_=P(),a_=Re(),o_=$(),u_=re(),s_=fe(),iv=Ct(),av=Ur(),c_=Wr(),l_=Fn(),f_=gt(),p_=R(),v_=$r(),ov=p_("isConcatSpreadable"),d_=v_>=51||!i_(function(){var e=[];return e[ov]=!1,e.concat()[0]!==e}),h_=function(e){if(!o_(e))return!1;var r=e[ov];return r!==void 0?!!r:a_(e)},m_=!d_||!f_("concat");n_({target:"Array",proto:!0,arity:1,forced:m_},{concat:function(r){var t=u_(this),n=l_(t,0),i=0,o,u,c,s,l;for(o=-1,c=arguments.length;o<c;o++)if(l=o===-1?t:arguments[o],h_(l))for(s=s_(l),iv(i+s),u=0;u<s;u++,i++)u in l&&av(n,i,l[u]);else iv(i+1),av(n,i++,l);return c_(n,i),n}})});var kt=a(()=>{});var It=a(uv=>{"use strict";var y_=Na(),b_=In(),g_=b_.concat("length","prototype");uv.f=Object.getOwnPropertyNames||function(r){return y_(r,g_)}});var Za=a((Y5,lv)=>{"use strict";var q_=we(),x_=_e(),sv=It().f,S_=dr(),cv=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],w_=function(e){try{return sv(e)}catch{return S_(cv)}};lv.exports.f=function(r){return cv&&q_(r)==="Window"?w_(r):sv(x_(r))}});var Dn=a(fv=>{"use strict";fv.f=Object.getOwnPropertySymbols});var Bn=a((Q5,pv)=>{"use strict";var T_=te();pv.exports=function(e,r,t){return T_.f(e,r,t)}});var zr=a(vv=>{"use strict";var E_=R();vv.f=E_});var M=a((Z5,hv)=>{"use strict";var dv=V(),O_=K(),C_=zr(),k_=te().f;hv.exports=function(e){var r=dv.Symbol||(dv.Symbol={});O_(r,e)||k_(r,e,{value:C_.f(e)})}});var eo=a((eU,mv)=>{"use strict";var I_=B(),P_=H(),__=R(),R_=Ae();mv.exports=function(){var e=P_("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=__("toPrimitive");r&&!r[n]&&R_(r,n,function(i){return I_(t,this)},{arity:1})}});var Pt=a((rU,bv)=>{"use strict";var A_=Y(),N_=bn(),M_=re(),j_=fe(),yv=Fn(),ro=Ur(),er=function(e){var r=e===1,t=e===2,n=e===3,i=e===4,o=e===6,u=e===7,c=e===5||o;return function(s,l,f){for(var p=M_(s),v=N_(p),d=j_(v),m=A_(l,f),h=0,y=0,q=r?yv(s,d):t||u?yv(s,0):void 0,g,k;d>h;h++)if((c||h in v)&&(g=v[h],k=m(g,h,p),e))if(r)ro(q,h,k);else if(k)switch(e){case 3:return!0;case 5:return g;case 6:return h;case 2:ro(q,y++,g)}else switch(e){case 4:return!1;case 7:ro(q,y++,g)}return o?-1:n||i?i:q}};bv.exports={forEach:er(0),map:er(1),filter:er(2),some:er(3),every:er(4),find:er(5),findIndex:er(6),filterReject:er(7)}});var Mv=a(()=>{"use strict";var Gn=x(),At=_(),lo=B(),$_=A(),L_=Z(),Vr=W(),Yr=pr(),F_=P(),z=K(),D_=U(),ao=X(),Un=_e(),fo=xn(),B_=Qe(),oo=Ye(),Jr=Ze(),xv=Pn(),G_=It(),Sv=Za(),U_=Dn(),wv=vt(),Tv=te(),W_=Ma(),Ev=ea(),to=Ae(),H_=Bn(),po=vr(),K_=qt(),Ov=Kr(),gv=Fr(),z_=R(),V_=zr(),Y_=M(),J_=eo(),Q_=Me(),Cv=Xe(),Wn=Pt().forEach,ne=K_("hidden"),Hn="Symbol",Rt="prototype",X_=Cv.set,qv=Cv.getterFor(Hn),pe=Object[Rt],br=At.Symbol,_t=br&&br[Rt],Z_=At.RangeError,eR=At.TypeError,no=At.QObject,kv=wv.f,gr=Tv.f,Iv=Sv.f,rR=Ev.f,Pv=$_([].push),je=po("symbols"),Nt=po("op-symbols"),tR=po("wks"),uo=!no||!no[Rt]||!no[Rt].findChild,_v=function(e,r,t){var n=kv(pe,r);n&&delete pe[r],gr(e,r,t),n&&e!==pe&&gr(pe,r,n)},so=Vr&&F_(function(){return Jr(gr({},"a",{get:function(){return gr(this,"a",{value:7}).a}})).a!==7})?_v:gr,io=function(e,r){var t=je[e]=Jr(_t);return X_(t,{type:Hn,tag:e,description:r}),Vr||(t.description=r),t},Kn=function(r,t,n){r===pe&&Kn(Nt,t,n),ao(r);var i=fo(t);return ao(n),z(je,i)?(n.enumerable?(z(r,ne)&&r[ne][i]&&(r[ne][i]=!1),n=Jr(n,{enumerable:oo(0,!1)})):(z(r,ne)||gr(r,ne,oo(1,Jr(null))),r[ne][i]=!0),so(r,i,n)):gr(r,i,n)},vo=function(r,t){ao(r);var n=Un(t),i=xv(n).concat(Nv(n));return Wn(i,function(o){(!Vr||lo(co,n,o))&&Kn(r,o,n[o])}),r},nR=function(r,t){return t===void 0?Jr(r):vo(Jr(r),t)},co=function(r){var t=fo(r),n=lo(rR,this,t);return this===pe&&z(je,t)&&!z(Nt,t)?!1:n||!z(this,t)||!z(je,t)||z(this,ne)&&this[ne][t]?n:!0},Rv=function(r,t){var n=Un(r),i=fo(t);if(!(n===pe&&z(je,i)&&!z(Nt,i))){var o=kv(n,i);return o&&z(je,i)&&!(z(n,ne)&&n[ne][i])&&(o.enumerable=!0),o}},Av=function(r){var t=Iv(Un(r)),n=[];return Wn(t,function(i){!z(je,i)&&!z(Ov,i)&&Pv(n,i)}),n},Nv=function(e){var r=e===pe,t=Iv(r?Nt:Un(e)),n=[];return Wn(t,function(i){z(je,i)&&(!r||z(pe,i))&&Pv(n,je[i])}),n};Yr||(br=function(){if(D_(_t,this))throw new eR("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:B_(arguments[0]),t=gv(r),n=function(i){var o=this===void 0?At:this;o===pe&&lo(n,Nt,i),z(o,ne)&&z(o[ne],t)&&(o[ne][t]=!1);var u=oo(1,i);try{so(o,t,u)}catch(c){if(!(c instanceof Z_))throw c;_v(o,t,u)}};return Vr&&uo&&so(pe,t,{configurable:!0,set:n}),io(t,r)},_t=br[Rt],to(_t,"toString",function(){return qv(this).tag}),to(br,"withoutSetter",function(e){return io(gv(e),e)}),Ev.f=co,Tv.f=Kn,W_.f=vo,wv.f=Rv,G_.f=Sv.f=Av,U_.f=Nv,V_.f=function(e){return io(z_(e),e)},Vr&&(H_(_t,"description",{configurable:!0,get:function(){return qv(this).description}}),L_||to(pe,"propertyIsEnumerable",co,{unsafe:!0})));Gn({global:!0,constructor:!0,wrap:!0,forced:!Yr,sham:!Yr},{Symbol:br});Wn(xv(tR),function(e){Y_(e)});Gn({target:Hn,stat:!0,forced:!Yr},{useSetter:function(){uo=!0},useSimple:function(){uo=!1}});Gn({target:"Object",stat:!0,forced:!Yr,sham:!Vr},{create:nR,defineProperty:Kn,defineProperties:vo,getOwnPropertyDescriptor:Rv});Gn({target:"Object",stat:!0,forced:!Yr},{getOwnPropertyNames:Av});J_();Q_(br,Hn);Ov[ne]=!0});var ho=a((iU,jv)=>{"use strict";var iR=pr();jv.exports=iR&&!!Symbol.for&&!!Symbol.keyFor});var Lv=a(()=>{"use strict";var aR=x(),oR=H(),uR=K(),sR=Qe(),$v=vr(),cR=ho(),mo=$v("string-to-symbol-registry"),lR=$v("symbol-to-string-registry");aR({target:"Symbol",stat:!0,forced:!cR},{for:function(e){var r=sR(e);if(uR(mo,r))return mo[r];var t=oR("Symbol")(r);return mo[r]=t,lR[t]=r,t}})});var Dv=a(()=>{"use strict";var fR=x(),pR=K(),vR=Lr(),dR=Je(),hR=vr(),mR=ho(),Fv=hR("symbol-to-string-registry");fR({target:"Symbol",stat:!0,forced:!mR},{keyFor:function(r){if(!vR(r))throw new TypeError(dR(r)+" is not a symbol");if(pR(Fv,r))return Fv[r]}})});var Gv=a((cU,Bv)=>{"use strict";var yR=$(),bR=Xe().get;Bv.exports=function(r){if(!yR(r))return!1;var t=bR(r);return!!t&&t.type==="RawJSON"}});var zv=a((lU,Kv)=>{"use strict";var yo=A(),gR=K(),zn=SyntaxError,qR=parseInt,xR=String.fromCharCode,SR=yo("".charAt),Uv=yo("".slice),Wv=yo(/./.exec),Hv={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},wR=/^[\da-f]{4}$/i,TR=/^[\u0000-\u001F]$/;Kv.exports=function(e,r){for(var t=!0,n="";r<e.length;){var i=SR(e,r);if(i==="\\"){var o=Uv(e,r,r+2);if(gR(Hv,o))n+=Hv[o],r+=2;else if(o==="\\u"){r+=2;var u=Uv(e,r,r+4);if(!Wv(wR,u))throw new zn("Bad Unicode escape at: "+r);n+=xR(qR(u,16)),r+=4}else throw new zn('Unknown escape sequence: "'+o+'"')}else if(i==='"'){t=!1,r++;break}else{if(Wv(TR,i))throw new zn("Bad control character in string literal at: "+r);n+=i,r++}}if(t)throw new zn("Unterminated string at: "+r);return{value:n,end:r}}});var Yv=a((fU,Vv)=>{"use strict";var ER=P();Vv.exports=!ER(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var cd=a(()=>{"use strict";var OR=x(),nd=H(),CR=Mr(),id=B(),qr=A(),ad=P(),Jv=Re(),Yn=N(),kR=Gv(),Qv=Lr(),Xv=we(),IR=Qe(),PR=dr(),_R=zv(),RR=Fr(),AR=pr(),bo=Yv(),od=String,rr=nd("JSON","stringify"),Vn=qr(/./.exec),qo=qr("".charAt),NR=qr("".charCodeAt),MR=qr("".replace),go=qr("".slice),xo=qr([].push),jR=qr(1.1.toString),$R=/[\uD800-\uDFFF]/g,Zv=/^[\uD800-\uDBFF]$/,ed=/^[\uDC00-\uDFFF]$/,So=RR(),rd=So.length,ud=!AR||ad(function(){var e=nd("Symbol")("stringify detection");return rr([e])!=="[null]"||rr({a:e})!=="{}"||rr(Object(e))!=="{}"}),td=ad(function(){return rr("\uDF06\uD834")!=='"\\udf06\\ud834"'||rr("\uDEAD")!=='"\\udead"'}),LR=ud?function(e,r){var t=PR(arguments),n=sd(r);if(!(!Yn(n)&&(e===void 0||Qv(e))))return t[1]=function(i,o){if(Yn(n)&&(o=id(n,this,od(i),o)),!Qv(o))return o},CR(rr,null,t)}:rr,FR=function(e,r,t){var n=qo(t,r-1),i=qo(t,r+1);return Vn(Zv,e)&&!Vn(ed,i)||Vn(ed,e)&&!Vn(Zv,n)?"\\u"+jR(NR(e,0),16):e},sd=function(e){if(Yn(e))return e;if(Jv(e)){for(var r=e.length,t=[],n=0;n<r;n++){var i=e[n];typeof i=="string"?xo(t,i):(typeof i=="number"||Xv(i)==="Number"||Xv(i)==="String")&&xo(t,IR(i))}var o=t.length,u=!0;return function(c,s){if(u)return u=!1,s;if(Jv(this))return s;for(var l=0;l<o;l++)if(t[l]===c)return s}}};rr&&OR({target:"JSON",stat:!0,arity:3,forced:ud||td||!bo},{stringify:function(r,t,n){var i=sd(t),o=[],u=LR(r,function(d,m){var h=Yn(i)?id(i,this,od(d),m):m;return!bo&&kR(h)?So+(xo(o,h.rawJSON)-1):h},n);if(typeof u!="string"||(td&&(u=MR(u,$R,FR)),bo))return u;for(var c="",s=u.length,l=0;l<s;l++){var f=qo(u,l);if(f==='"'){var p=_R(u,++l).end-1,v=go(u,l,p);c+=go(v,0,rd)===So?o[go(v,rd)]:'"'+v+'"',l=p}else c+=f}return c}})});var fd=a(()=>{"use strict";var DR=x(),BR=pr(),GR=P(),ld=Dn(),UR=re(),WR=!BR||GR(function(){ld.f(1)});DR({target:"Object",stat:!0,forced:WR},{getOwnPropertySymbols:function(r){var t=ld.f;return t?t(UR(r)):[]}})});var pd=a(()=>{"use strict";Mv();Lv();Dv();cd();fd()});var wo=a(()=>{"use strict";var HR=M();HR("asyncDispose")});var To=a(()=>{"use strict";var KR=M();KR("asyncIterator")});var vd=a(()=>{});var Eo=a(()=>{"use strict";var zR=M();zR("dispose")});var dd=a(()=>{"use strict";var VR=M();VR("hasInstance")});var hd=a(()=>{"use strict";var YR=M();YR("isConcatSpreadable")});var Oo=a(()=>{"use strict";var JR=M();JR("iterator")});var md=a(()=>{"use strict";var QR=M();QR("match")});var yd=a(()=>{"use strict";var XR=M();XR("matchAll")});var bd=a(()=>{"use strict";var ZR=M();ZR("replace")});var gd=a(()=>{"use strict";var eA=M();eA("search")});var qd=a(()=>{"use strict";var rA=M();rA("species")});var xd=a(()=>{"use strict";var tA=M();tA("split")});var Co=a(()=>{"use strict";var nA=M(),iA=eo();nA("toPrimitive");iA()});var Sd=a(()=>{"use strict";var aA=H(),oA=M(),uA=Me();oA("toStringTag");uA(aA("Symbol"),"Symbol")});var wd=a(()=>{"use strict";var sA=M();sA("unscopables")});var Td=a(()=>{"use strict";var cA=_(),lA=Me();lA(cA.JSON,"JSON",!0)});var Ed=a(()=>{});var Od=a(()=>{});var kd=a((tW,Cd)=>{"use strict";Xa();kt();pd();wo();To();vd();Eo();dd();hd();Oo();md();yd();bd();gd();qd();xd();Co();Sd();wd();Td();Ed();Od();var fA=V();Cd.exports=fA.Symbol});var ko=a((nW,Id)=>{"use strict";Id.exports=function(){}});var xr=a((iW,Nd)=>{"use strict";var pA=_e(),Io=ko(),Pd=mr(),Rd=Xe(),vA=te().f,dA=Mn(),Jn=jn(),hA=Z(),mA=W(),Ad="Array Iterator",yA=Rd.set,bA=Rd.getterFor(Ad);Nd.exports=dA(Array,"Array",function(e,r){yA(this,{type:Ad,target:pA(e),index:0,kind:r})},function(){var e=bA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,Jn(void 0,!0);switch(e.kind){case"keys":return Jn(t,!1);case"values":return Jn(r[t],!1)}return Jn([t,r[t]],!1)},"values");var _d=Pd.Arguments=Pd.Array;Io("keys");Io("values");Io("entries");if(!hA&&mA&&_d.name!=="values")try{vA(_d,"name",{value:"values"})}catch{}});var jd=a((aW,Md)=>{"use strict";Md.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var Sr=a(()=>{"use strict";xr();var gA=jd(),qA=_(),xA=Me(),$d=mr();for(Qn in gA)xA(qA[Qn],Qn),$d[Qn]=$d.Array;var Qn});var Fd=a((sW,Ld)=>{"use strict";var SA=kd();Sr();Ld.exports=SA});var Gd=a(()=>{"use strict";var wA=R(),TA=te().f,Dd=wA("metadata"),Bd=Function.prototype;Bd[Dd]===void 0&&TA(Bd,Dd,{value:null})});var Ud=a(()=>{"use strict";wo()});var Wd=a(()=>{"use strict";Eo()});var Hd=a(()=>{"use strict";var EA=M();EA("metadata")});var zd=a((yW,Kd)=>{"use strict";var OA=Fd();Gd();Ud();Wd();Hd();Kd.exports=OA});var _o=a((bW,Vd)=>{"use strict";var CA=H(),kA=A(),Po=CA("Symbol"),IA=Po.keyFor,PA=kA(Po.prototype.valueOf);Vd.exports=Po.isRegisteredSymbol||function(r){try{return IA(PA(r))!==void 0}catch{return!1}}});var Yd=a(()=>{"use strict";var _A=x(),RA=_o();_A({target:"Symbol",stat:!0},{isRegisteredSymbol:RA})});var No=a((xW,rh)=>{"use strict";var AA=vr(),Zd=H(),NA=A(),MA=Lr(),jA=R(),Zn=Zd("Symbol"),Jd=Zn.isWellKnownSymbol,eh=Zd("Object","getOwnPropertyNames"),$A=NA(Zn.prototype.valueOf),Qd=AA("wks");for(Xn=0,Ro=eh(Zn),Xd=Ro.length;Xn<Xd;Xn++)try{Ao=Ro[Xn],MA(Zn[Ao])&&jA(Ao)}catch{}var Ao,Xn,Ro,Xd;rh.exports=function(r){if(Jd&&Jd(r))return!0;try{for(var t=$A(r),n=0,i=eh(Qd),o=i.length;n<o;n++)if(Qd[i[n]]==t)return!0}catch{}return!1}});var th=a(()=>{"use strict";var LA=x(),FA=No();LA({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:FA})});var nh=a(()=>{"use strict";var DA=M();DA("customMatcher")});var ih=a(()=>{"use strict";var BA=M();BA("observable")});var ah=a(()=>{"use strict";var GA=x(),UA=_o();GA({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:UA})});var oh=a(()=>{"use strict";var WA=x(),HA=No();WA({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:HA})});var uh=a(()=>{"use strict";var KA=M();KA("matcher")});var sh=a(()=>{"use strict";var zA=M();zA("metadataKey")});var ch=a(()=>{"use strict";var VA=M();VA("patternMatch")});var lh=a(()=>{"use strict";var YA=M();YA("replaceAll")});var ph=a((DW,fh)=>{"use strict";var JA=zd();Yd();th();nh();ih();ah();oh();uh();sh();ch();lh();fh.exports=JA});var Ee=a((BW,vh)=>{"use strict";vh.exports=ph()});var ei=a((GW,dh)=>{dh.exports=Ee()});var mh=a((UW,hh)=>{"use strict";xr();yr();var QA=Ot();hh.exports=QA});var bh=a((WW,yh)=>{"use strict";var XA=mh();Sr();yh.exports=XA});var qh=a((HW,gh)=>{"use strict";var ZA=bh();gh.exports=ZA});var Sh=a((KW,xh)=>{"use strict";var e2=qh();xh.exports=e2});var Mo=a((zW,wh)=>{"use strict";wh.exports=Sh()});var ri=a((VW,Th)=>{Th.exports=Mo()});var Oh=a((YW,Eh)=>{"use strict";xr();yr();var r2=$n();Eh.exports=r2});var kh=a((JW,Ch)=>{"use strict";var t2=Oh();Sr();Ch.exports=t2});var Ph=a((QW,Ih)=>{"use strict";var n2=kh();Ih.exports=n2});var Rh=a((XW,_h)=>{"use strict";var i2=Ph();_h.exports=i2});var Nh=a((ZW,Ah)=>{"use strict";Ah.exports=Rh()});var ti=a((eH,Mh)=>{Mh.exports=Nh()});var $h=a((rH,jh)=>{"use strict";var a2=H(),o2=A(),u2=It(),s2=Dn(),c2=X(),l2=o2([].concat);jh.exports=a2("Reflect","ownKeys")||function(r){var t=u2.f(c2(r)),n=s2.f;return n?l2(t,n(r)):t}});var Dh=a((tH,Fh)=>{"use strict";var Lh=K(),f2=$h(),p2=vt(),v2=te();Fh.exports=function(e,r,t){for(var n=f2(r),i=v2.f,o=p2.f,u=0;u<n.length;u++){var c=n[u];!Lh(e,c)&&!(t&&Lh(t,c))&&i(e,c,o(r,c))}}});var Gh=a((nH,Bh)=>{"use strict";var d2=$(),h2=Te();Bh.exports=function(e,r){d2(r)&&"cause"in r&&h2(e,"cause",r.cause)}});var Kh=a((iH,Hh)=>{"use strict";var m2=A(),Uh=Error,y2=m2("".replace),b2=function(e){return String(new Uh(e).stack)}("zxcasd"),Wh=/\n\s*at [^:]*:[^\n]*/,g2=Wh.test(b2);Hh.exports=function(e,r){if(g2&&typeof e=="string"&&!Uh.prepareStackTrace)for(;r--;)e=y2(e,Wh,"");return e}});var Vh=a((aH,zh)=>{"use strict";var q2=P(),x2=Ye();zh.exports=!q2(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",x2(1,7)),e.stack!==7):!0})});var Qh=a((oH,Jh)=>{"use strict";var S2=Te(),w2=Kh(),T2=Vh(),Yh=Error.captureStackTrace;Jh.exports=function(e,r,t,n){T2&&(Yh?Yh(e,r):S2(e,"stack",w2(t,n)))}});var ve=a((uH,rm)=>{"use strict";var E2=Y(),O2=B(),C2=X(),k2=Je(),I2=Va(),P2=fe(),Xh=U(),_2=$n(),R2=Ot(),Zh=za(),A2=TypeError,ni=function(e,r){this.stopped=e,this.result=r},em=ni.prototype;rm.exports=function(e,r,t){var n=t&&t.that,i=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),c=!!(t&&t.INTERRUPTED),s=E2(r,n),l,f,p,v,d,m,h,y=function(g){return l&&Zh(l,"normal"),new ni(!0,g)},q=function(g){return i?(C2(g),c?s(g[0],g[1],y):s(g[0],g[1])):c?s(g,y):s(g)};if(o)l=e.iterator;else if(u)l=e;else{if(f=R2(e),!f)throw new A2(k2(e)+" is not iterable");if(I2(f)){for(p=0,v=P2(e);v>p;p++)if(d=q(e[p]),d&&Xh(em,d))return d;return new ni(!1)}l=_2(e,f)}for(m=o?e.next:l.next;!(h=O2(m,l)).done;){try{d=q(h.value)}catch(g){Zh(l,"throw",g)}if(typeof d=="object"&&d&&Xh(em,d))return d}return new ni(!1)}});var nm=a((sH,tm)=>{"use strict";var N2=Qe();tm.exports=function(e,r){return e===void 0?arguments.length<2?"":r:N2(e)}});var am=a(()=>{"use strict";var M2=x(),j2=U(),$2=St(),ii=wt(),L2=Dh(),im=Ze(),jo=Te(),$o=Ye(),F2=Gh(),D2=Qh(),B2=ve(),G2=nm(),U2=R(),W2=U2("toStringTag"),ai=Error,H2=[].push,Qr=function(r,t){var n=j2(Lo,this),i;ii?i=ii(new ai,n?$2(this):Lo):(i=n?this:im(Lo),jo(i,W2,"Error")),t!==void 0&&jo(i,"message",G2(t)),D2(i,Qr,i.stack,1),arguments.length>2&&F2(i,arguments[2]);var o=[];return B2(r,H2,{that:o}),jo(i,"errors",o),i};ii?ii(Qr,ai):L2(Qr,ai,{name:!0});var Lo=Qr.prototype=im(ai.prototype,{constructor:$o(1,Qr),message:$o(1,""),name:$o(1,"AggregateError")});M2({global:!0,constructor:!0,arity:2},{AggregateError:Qr})});var Fo=a(()=>{"use strict";am()});var Do=a((vH,om)=>{"use strict";var Mt=_(),K2=jr(),z2=we(),oi=function(e){return K2.slice(0,e.length)===e};om.exports=function(){return oi("Bun/")?"BUN":oi("Cloudflare-Workers")?"CLOUDFLARE":oi("Deno/")?"DENO":oi("Node.js/")?"NODE":Mt.Bun&&typeof Bun.version=="string"?"BUN":Mt.Deno&&typeof Deno.version=="object"?"DENO":z2(Mt.process)==="process"?"NODE":Mt.window&&Mt.document?"BROWSER":"REST"}()});var jt=a((dH,um)=>{"use strict";var V2=Do();um.exports=V2==="NODE"});var Bo=a((hH,cm)=>{"use strict";var Y2=H(),J2=Bn(),Q2=R(),X2=W(),sm=Q2("species");cm.exports=function(e){var r=Y2(e);X2&&r&&!r[sm]&&J2(r,sm,{configurable:!0,get:function(){return this}})}});var ui=a((mH,lm)=>{"use strict";var Z2=U(),eN=TypeError;lm.exports=function(e,r){if(Z2(r,e))return e;throw new eN("Incorrect invocation")}});var Go=a((yH,fm)=>{"use strict";var rN=bt(),tN=Je(),nN=TypeError;fm.exports=function(e){if(rN(e))return e;throw new nN(tN(e)+" is not a constructor")}});var Uo=a((bH,vm)=>{"use strict";var pm=X(),iN=Go(),aN=lr(),oN=R(),uN=oN("species");vm.exports=function(e,r){var t=pm(e).constructor,n;return t===void 0||aN(n=pm(t)[uN])?r:iN(n)}});var hm=a((gH,dm)=>{"use strict";var sN=TypeError;dm.exports=function(e,r){if(e<r)throw new sN("Not enough arguments");return e}});var Wo=a((qH,mm)=>{"use strict";var cN=jr();mm.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(cN)});var Zo=a((xH,Em)=>{"use strict";var ue=_(),lN=Mr(),fN=Y(),ym=N(),pN=K(),Tm=P(),bm=ja(),vN=dr(),gm=Sn(),dN=hm(),hN=Wo(),mN=jt(),Jo=ue.setImmediate,Qo=ue.clearImmediate,yN=ue.process,Ho=ue.Dispatch,bN=ue.Function,qm=ue.MessageChannel,gN=ue.String,Ko=0,$t={},xm="onreadystatechange",Lt,wr,zo,Vo;Tm(function(){Lt=ue.location});var Xo=function(e){if(pN($t,e)){var r=$t[e];delete $t[e],r()}},Yo=function(e){return function(){Xo(e)}},Sm=function(e){Xo(e.data)},wm=function(e){ue.postMessage(gN(e),Lt.protocol+"//"+Lt.host)};(!Jo||!Qo)&&(Jo=function(r){dN(arguments.length,1);var t=ym(r)?r:bN(r),n=vN(arguments,1);return $t[++Ko]=function(){lN(t,void 0,n)},wr(Ko),Ko},Qo=function(r){delete $t[r]},mN?wr=function(e){yN.nextTick(Yo(e))}:Ho&&Ho.now?wr=function(e){Ho.now(Yo(e))}:qm&&!hN?(zo=new qm,Vo=zo.port2,zo.port1.onmessage=Sm,wr=fN(Vo.postMessage,Vo)):ue.addEventListener&&ym(ue.postMessage)&&!ue.importScripts&&Lt&&Lt.protocol!=="file:"&&!Tm(wm)?(wr=wm,ue.addEventListener("message",Sm,!1)):xm in gm("script")?wr=function(e){bm.appendChild(gm("script"))[xm]=function(){bm.removeChild(this),Xo(e)}}:wr=function(e){setTimeout(Yo(e),0)});Em.exports={set:Jo,clear:Qo}});var km=a((SH,Cm)=>{"use strict";var Om=_(),qN=W(),xN=Object.getOwnPropertyDescriptor;Cm.exports=function(e){if(!qN)return Om[e];var r=xN(Om,e);return r&&r.value}});var eu=a((wH,Pm)=>{"use strict";var Im=function(){this.head=null,this.tail=null};Im.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Pm.exports=Im});var Rm=a((TH,_m)=>{"use strict";var SN=jr();_m.exports=/ipad|iphone|ipod/i.test(SN)&&typeof Pebble<"u"});var Nm=a((EH,Am)=>{"use strict";var wN=jr();Am.exports=/web0s(?!.*chrome)/i.test(wN)});var Bm=a((OH,Dm)=>{"use strict";var Zr=_(),TN=km(),Mm=Y(),ru=Zo().set,EN=eu(),ON=Wo(),CN=Rm(),kN=Nm(),tu=jt(),jm=Zr.MutationObserver||Zr.WebKitMutationObserver,$m=Zr.document,Lm=Zr.process,si=Zr.Promise,au=TN("queueMicrotask"),Xr,nu,iu,ci,Fm;au||(Ft=new EN,Dt=function(){var e,r;for(tu&&(e=Lm.domain)&&e.exit();r=Ft.get();)try{r()}catch(t){throw Ft.head&&Xr(),t}e&&e.enter()},!ON&&!tu&&!kN&&jm&&$m?(nu=!0,iu=$m.createTextNode(""),new jm(Dt).observe(iu,{characterData:!0}),Xr=function(){iu.data=nu=!nu}):!CN&&si&&si.resolve?(ci=si.resolve(void 0),ci.constructor=si,Fm=Mm(ci.then,ci),Xr=function(){Fm(Dt)}):tu?Xr=function(){Lm.nextTick(Dt)}:(ru=Mm(ru,Zr),Xr=function(){ru(Dt)}),au=function(e){Ft.head||Xr(),Ft.add(e)});var Ft,Dt;Dm.exports=au});var Um=a((CH,Gm)=>{"use strict";Gm.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var Tr=a((kH,Wm)=>{"use strict";Wm.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var Er=a((IH,Hm)=>{"use strict";var IN=_();Hm.exports=IN.Promise});var et=a((PH,Ym)=>{"use strict";var PN=_(),Bt=Er(),_N=N(),RN=pa(),AN=ga(),NN=R(),Km=Do(),MN=Z(),ou=$r(),zm=Bt&&Bt.prototype,jN=NN("species"),uu=!1,Vm=_N(PN.PromiseRejectionEvent),$N=RN("Promise",function(){var e=AN(Bt),r=e!==String(Bt);if(!r&&ou===66||MN&&!(zm.catch&&zm.finally))return!0;if(!ou||ou<51||!/native code/.test(e)){var t=new Bt(function(o){o(1)}),n=function(o){o(function(){},function(){})},i=t.constructor={};if(i[jN]=n,uu=t.then(function(){})instanceof n,!uu)return!0}return!r&&(Km==="BROWSER"||Km==="DENO")&&!Vm});Ym.exports={CONSTRUCTOR:$N,REJECTION_EVENT:Vm,SUBCLASSING:uu}});var Oe=a((_H,Qm)=>{"use strict";var Jm=D(),LN=TypeError,FN=function(e){var r,t;this.promise=new e(function(n,i){if(r!==void 0||t!==void 0)throw new LN("Bad Promise constructor");r=n,t=i}),this.resolve=Jm(r),this.reject=Jm(t)};Qm.exports.f=function(e){return new FN(e)}});var yy=a(()=>{"use strict";var DN=x(),BN=Z(),vi=jt(),tr=_(),GN=V(),it=B(),Xm=Ae(),Zm=wt(),UN=Me(),WN=Bo(),HN=D(),pi=N(),KN=$(),zN=ui(),VN=Uo(),iy=Zo().set,pu=Bm(),YN=Um(),JN=Tr(),QN=eu(),ay=Xe(),di=Er(),vu=et(),oy=Oe(),hi="Promise",uy=vu.CONSTRUCTOR,XN=vu.REJECTION_EVENT,ZN=vu.SUBCLASSING,su=ay.getterFor(hi),eM=ay.set,rt=di&&di.prototype,Or=di,li=rt,sy=tr.TypeError,cu=tr.document,du=tr.process,lu=oy.f,rM=lu,tM=!!(cu&&cu.createEvent&&tr.dispatchEvent),cy="unhandledrejection",nM="rejectionhandled",ey=0,ly=1,iM=2,hu=1,fy=2,fi,ry,py,ty,vy=function(e){var r;return KN(e)&&pi(r=e.then)?r:!1},dy=function(e,r){var t=r.value,n=r.state===ly,i=n?e.ok:e.fail,o=e.resolve,u=e.reject,c=e.domain,s,l,f;try{i?(n||(r.rejection===fy&&oM(r),r.rejection=hu),i===!0?s=t:(c&&c.enter(),s=i(t),c&&(c.exit(),f=!0)),s===e.promise?u(new sy("Promise-chain cycle")):(l=vy(s))?it(l,s,o,u):o(s)):u(t)}catch(p){c&&!f&&c.exit(),u(p)}},hy=function(e,r){e.notified||(e.notified=!0,pu(function(){for(var t=e.reactions,n;n=t.get();)dy(n,e);e.notified=!1,r&&!e.rejection&&aM(e)}))},my=function(e,r,t){var n,i;tM?(n=cu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),tr.dispatchEvent(n)):n={promise:r,reason:t},!XN&&(i=tr["on"+e])?i(n):e===cy&&YN("Unhandled promise rejection",t)},aM=function(e){it(iy,tr,function(){var r=e.facade,t=e.value,n=ny(e),i;if(n&&(i=JN(function(){vi?du.emit("unhandledRejection",t,r):my(cy,r,t)}),e.rejection=vi||ny(e)?fy:hu,i.error))throw i.value})},ny=function(e){return e.rejection!==hu&&!e.parent},oM=function(e){it(iy,tr,function(){var r=e.facade;vi?du.emit("rejectionHandled",r):my(nM,r,e.value)})},tt=function(e,r,t){return function(n){e(r,n,t)}},nt=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=iM,hy(e,!0))},fu=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new sy("Promise can't be resolved itself");var n=vy(r);n?pu(function(){var i={done:!1};try{it(n,r,tt(fu,i,e),tt(nt,i,e))}catch(o){nt(i,o,e)}}):(e.value=r,e.state=ly,hy(e,!1))}catch(i){nt({done:!1},i,e)}}};if(uy&&(Or=function(r){zN(this,li),HN(r),it(fi,this);var t=su(this);try{r(tt(fu,t),tt(nt,t))}catch(n){nt(t,n)}},li=Or.prototype,fi=function(r){eM(this,{type:hi,done:!1,notified:!1,parent:!1,reactions:new QN,rejection:!1,state:ey,value:null})},fi.prototype=Xm(li,"then",function(r,t){var n=su(this),i=lu(VN(this,Or));return n.parent=!0,i.ok=pi(r)?r:!0,i.fail=pi(t)&&t,i.domain=vi?du.domain:void 0,n.state===ey?n.reactions.add(i):pu(function(){dy(i,n)}),i.promise}),ry=function(){var e=new fi,r=su(e);this.promise=e,this.resolve=tt(fu,r),this.reject=tt(nt,r)},oy.f=lu=function(e){return e===Or||e===py?new ry(e):rM(e)},!BN&&pi(di)&&rt!==Object.prototype)){ty=rt.then,ZN||Xm(rt,"then",function(r,t){var n=this;return new Or(function(i,o){it(ty,n,i,o)}).then(r,t)},{unsafe:!0});try{delete rt.constructor}catch{}Zm&&Zm(rt,li)}DN({global:!0,constructor:!0,wrap:!0,forced:uy},{Promise:Or});py=GN.Promise;UN(Or,hi,!1,!0);WN(hi)});var Gt=a((NH,by)=>{"use strict";var uM=Er(),sM=Ja(),cM=et().CONSTRUCTOR;by.exports=cM||!sM(function(e){uM.all(e).then(void 0,function(){})})});var gy=a(()=>{"use strict";var lM=x(),fM=B(),pM=D(),vM=Oe(),dM=Tr(),hM=ve(),mM=Gt();lM({target:"Promise",stat:!0,forced:mM},{all:function(r){var t=this,n=vM.f(t),i=n.resolve,o=n.reject,u=dM(function(){var c=pM(t.resolve),s=[],l=0,f=1;hM(r,function(p){var v=l++,d=!1;f++,fM(c,t,p).then(function(m){d||(d=!0,s[v]=m,--f||i(s))},o)}),--f||i(s)});return u.error&&o(u.value),n.promise}})});var xy=a(()=>{"use strict";var yM=x(),bM=Z(),gM=et().CONSTRUCTOR,yu=Er(),qM=H(),xM=N(),SM=Ae(),qy=yu&&yu.prototype;yM({target:"Promise",proto:!0,forced:gM,real:!0},{catch:function(e){return this.then(void 0,e)}});!bM&&xM(yu)&&(mu=qM("Promise").prototype.catch,qy.catch!==mu&&SM(qy,"catch",mu,{unsafe:!0}));var mu});var Sy=a(()=>{"use strict";var wM=x(),TM=B(),EM=D(),OM=Oe(),CM=Tr(),kM=ve(),IM=Gt();wM({target:"Promise",stat:!0,forced:IM},{race:function(r){var t=this,n=OM.f(t),i=n.reject,o=CM(function(){var u=EM(t.resolve);kM(r,function(c){TM(u,t,c).then(n.resolve,i)})});return o.error&&i(o.value),n.promise}})});var wy=a(()=>{"use strict";var PM=x(),_M=Oe(),RM=et().CONSTRUCTOR;PM({target:"Promise",stat:!0,forced:RM},{reject:function(r){var t=_M.f(this),n=t.reject;return n(r),t.promise}})});var bu=a((UH,Ty)=>{"use strict";var AM=X(),NM=$(),MM=Oe();Ty.exports=function(e,r){if(AM(e),NM(r)&&r.constructor===e)return r;var t=MM.f(e),n=t.resolve;return n(r),t.promise}});var Cy=a(()=>{"use strict";var jM=x(),$M=H(),Ey=Z(),LM=Er(),Oy=et().CONSTRUCTOR,FM=bu(),DM=$M("Promise"),BM=Ey&&!Oy;jM({target:"Promise",stat:!0,forced:Ey||Oy},{resolve:function(r){return FM(BM&&this===DM?LM:this,r)}})});var ky=a(()=>{"use strict";yy();gy();xy();Sy();wy();Cy()});var gu=a(()=>{"use strict";var GM=x(),UM=B(),WM=D(),HM=Oe(),KM=Tr(),zM=ve(),VM=Gt();GM({target:"Promise",stat:!0,forced:VM},{allSettled:function(r){var t=this,n=HM.f(t),i=n.resolve,o=n.reject,u=KM(function(){var c=WM(t.resolve),s=[],l=0,f=1;zM(r,function(p){var v=l++,d=!1;f++,UM(c,t,p).then(function(m){d||(d=!0,s[v]={status:"fulfilled",value:m},--f||i(s))},function(m){d||(d=!0,s[v]={status:"rejected",reason:m},--f||i(s))})}),--f||i(s)});return u.error&&o(u.value),n.promise}})});var qu=a(()=>{"use strict";var YM=x(),JM=B(),QM=D(),XM=H(),ZM=Oe(),ej=Tr(),rj=ve(),tj=Gt(),Iy="No one promise resolved";YM({target:"Promise",stat:!0,forced:tj},{any:function(r){var t=this,n=XM("AggregateError"),i=ZM.f(t),o=i.resolve,u=i.reject,c=ej(function(){var s=QM(t.resolve),l=[],f=0,p=1,v=!1;rj(r,function(d){var m=f++,h=!1;p++,JM(s,t,d).then(function(y){h||v||(v=!0,o(y))},function(y){h||v||(h=!0,l[m]=y,--p||u(new n(l,Iy)))})}),--p||u(new n(l,Iy))});return c.error&&u(c.value),i.promise}})});var Su=a(()=>{"use strict";var nj=x(),ij=_(),aj=Mr(),oj=dr(),uj=Oe(),sj=D(),_y=Tr(),xu=ij.Promise,Py=!1,cj=!xu||!xu.try||_y(function(){xu.try(function(e){Py=e===8},8)}).error||!Py;nj({target:"Promise",stat:!0,forced:cj},{try:function(e){var r=arguments.length>1?oj(arguments,1):[],t=uj.f(this),n=_y(function(){return aj(sj(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var wu=a(()=>{"use strict";var lj=x(),fj=Oe();lj({target:"Promise",stat:!0},{withResolvers:function(){var r=fj.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var My=a(()=>{"use strict";var pj=x(),vj=Z(),mi=Er(),dj=P(),Ay=H(),Ny=N(),hj=Uo(),Ry=bu(),mj=Ae(),Eu=mi&&mi.prototype,yj=!!mi&&dj(function(){Eu.finally.call({then:function(){}},function(){})});pj({target:"Promise",proto:!0,real:!0,forced:yj},{finally:function(e){var r=hj(this,Ay("Promise")),t=Ny(e);return this.then(t?function(n){return Ry(r,e()).then(function(){return n})}:e,t?function(n){return Ry(r,e()).then(function(){throw n})}:e)}});!vj&&Ny(mi)&&(Tu=Ay("Promise").prototype.finally,Eu.finally!==Tu&&mj(Eu,"finally",Tu,{unsafe:!0}));var Tu});var $y=a((iK,jy)=>{"use strict";Fo();xr();kt();ky();gu();qu();Su();wu();My();yr();var bj=V();jy.exports=bj.Promise});var Fy=a((aK,Ly)=>{"use strict";var gj=$y();Sr();Ly.exports=gj});var Dy=a(()=>{"use strict";Su()});var By=a(()=>{"use strict";wu()});var Uy=a((lK,Gy)=>{"use strict";var qj=Fy();Dy();By();Gy.exports=qj});var Wy=a(()=>{"use strict";Fo()});var Hy=a(()=>{"use strict";gu()});var Ky=a(()=>{"use strict";qu()});var Vy=a((yK,zy)=>{"use strict";var xj=Uy();Wy();Hy();Ky();zy.exports=xj});var at=a((bK,Yy)=>{"use strict";Yy.exports=Vy()});var Xy=a((wK,Qy)=>{"use strict";To();var Sj=zr();Qy.exports=Sj.f("asyncIterator")});var eb=a((TK,Zy)=>{"use strict";var wj=Xy();Zy.exports=wj});var tb=a((EK,rb)=>{"use strict";var Tj=eb();rb.exports=Tj});var ib=a((OK,nb)=>{"use strict";var Ej=tb();nb.exports=Ej});var yi=a((CK,ab)=>{"use strict";ab.exports=ib()});var cb=a(()=>{"use strict";var Oj=x(),Cj=P(),kj=re(),sb=St(),Ij=Da(),Pj=Cj(function(){sb(1)});Oj({target:"Object",stat:!0,forced:Pj,sham:!Ij},{getPrototypeOf:function(r){return sb(kj(r))}})});var fb=a((RK,lb)=>{"use strict";cb();var _j=V();lb.exports=_j.Object.getPrototypeOf});var vb=a((AK,pb)=>{"use strict";var Rj=fb();pb.exports=Rj});var hb=a((NK,db)=>{"use strict";var Aj=vb();db.exports=Aj});var yb=a((MK,mb)=>{"use strict";var Nj=hb();mb.exports=Nj});var bi=a((jK,bb)=>{"use strict";bb.exports=yb()});var qb=a(()=>{"use strict";var Mj=x(),jj=A(),$j=Re(),Lj=jj([].reverse),gb=[1,2];Mj({target:"Array",proto:!0,forced:String(gb)===String(gb.reverse())},{reverse:function(){return $j(this)&&(this.length=this.length),Lj(this)}})});var Sb=a((FK,xb)=>{"use strict";qb();var Fj=oe();xb.exports=Fj("Array","reverse")});var Tb=a((DK,wb)=>{"use strict";var Dj=U(),Bj=Sb(),ku=Array.prototype;wb.exports=function(e){var r=e.reverse;return e===ku||Dj(ku,e)&&r===ku.reverse?Bj:r}});var Ob=a((BK,Eb)=>{"use strict";var Gj=Tb();Eb.exports=Gj});var kb=a((GK,Cb)=>{"use strict";var Uj=Ob();Cb.exports=Uj});var Pb=a((UK,Ib)=>{"use strict";var Wj=kb();Ib.exports=Wj});var Rb=a((WK,_b)=>{"use strict";_b.exports=Pb()});var Iu=a((HK,Ht)=>{function Hj(e,r){this.v=e,this.k=r}Ht.exports=Hj,Ht.exports.__esModule=!0,Ht.exports.default=Ht.exports});var Ab=a(()=>{"use strict";var Kj=x(),zj=W(),Vj=Ze();Kj({target:"Object",stat:!0,sham:!zj},{create:Vj})});var Mb=a((VK,Nb)=>{"use strict";Ab();var Yj=V(),Jj=Yj.Object;Nb.exports=function(r,t){return Jj.create(r,t)}});var $b=a((YK,jb)=>{"use strict";var Qj=Mb();jb.exports=Qj});var Fb=a((JK,Lb)=>{"use strict";var Xj=$b();Lb.exports=Xj});var Bb=a((QK,Db)=>{"use strict";var Zj=Fb();Db.exports=Zj});var gi=a((XK,Gb)=>{"use strict";Gb.exports=Bb()});var _u=a((ZK,Kb)=>{"use strict";var Wb=A(),e$=D(),r$=$(),t$=K(),Ub=dr(),n$=Nr(),Hb=Function,i$=Wb([].concat),a$=Wb([].join),Pu={},o$=function(e,r,t){if(!t$(Pu,r)){for(var n=[],i=0;i<r;i++)n[i]="a["+i+"]";Pu[r]=Hb("C,a","return new C("+a$(n,",")+")")}return Pu[r](e,t)};Kb.exports=n$?Hb.bind:function(r){var t=e$(this),n=t.prototype,i=Ub(arguments,1),o=function(){var c=i$(i,Ub(arguments));return this instanceof o?o$(t,c.length,c):t.apply(r,c)};return r$(n)&&(o.prototype=n),o}});var Vb=a(()=>{"use strict";var u$=x(),zb=_u();u$({target:"Function",proto:!0,forced:Function.bind!==zb},{bind:zb})});var Jb=a((tz,Yb)=>{"use strict";Vb();var s$=oe();Yb.exports=s$("Function","bind")});var Xb=a((nz,Qb)=>{"use strict";var c$=U(),l$=Jb(),Ru=Function.prototype;Qb.exports=function(e){var r=e.bind;return e===Ru||c$(Ru,e)&&r===Ru.bind?l$:r}});var eg=a((iz,Zb)=>{"use strict";var f$=Xb();Zb.exports=f$});var tg=a((az,rg)=>{"use strict";var p$=eg();rg.exports=p$});var ig=a((oz,ng)=>{"use strict";var v$=tg();ng.exports=v$});var Kt=a((uz,ag)=>{"use strict";ag.exports=ig()});var og=a(()=>{"use strict";var d$=x(),h$=wt();d$({target:"Object",stat:!0},{setPrototypeOf:h$})});var sg=a((lz,ug)=>{"use strict";og();var m$=V();ug.exports=m$.Object.setPrototypeOf});var lg=a((fz,cg)=>{"use strict";var y$=sg();cg.exports=y$});var pg=a((pz,fg)=>{"use strict";var b$=lg();fg.exports=b$});var dg=a((vz,vg)=>{"use strict";var g$=pg();vg.exports=g$});var qi=a((dz,hg)=>{"use strict";hg.exports=dg()});var yg=a(()=>{"use strict";var q$=x(),x$=W(),mg=te().f;q$({target:"Object",stat:!0,forced:Object.defineProperty!==mg,sham:!x$},{defineProperty:mg})});var qg=a((yz,gg)=>{"use strict";yg();var S$=V(),bg=S$.Object,w$=gg.exports=function(r,t,n){return bg.defineProperty(r,t,n)};bg.defineProperty.sham&&(w$.sham=!0)});var Sg=a((bz,xg)=>{"use strict";var T$=qg();xg.exports=T$});var Tg=a((gz,wg)=>{"use strict";var E$=Sg();wg.exports=E$});var Og=a((qz,Eg)=>{"use strict";var O$=Tg();Eg.exports=O$});var zt=a((xz,Cg)=>{"use strict";Cg.exports=Og()});var Au=a((Sz,$e)=>{var C$=zt();function xi(e,r,t,n){var i=C$;try{i({},"",{})}catch{i=0}$e.exports=xi=function(u,c,s,l){function f(p,v){xi(u,p,function(d){return this._invoke(p,v,d)})}c?i?i(u,c,{value:s,enumerable:!l,configurable:!l,writable:!l}):u[c]=s:(f("next",0),f("throw",1),f("return",2))},$e.exports.__esModule=!0,$e.exports.default=$e.exports,xi(e,r,t,n)}$e.exports=xi,$e.exports.__esModule=!0,$e.exports.default=$e.exports});var Mu=a((wz,Le)=>{var kg=Ee(),Nu=gi(),k$=Kt(),I$=bi(),Ig=qi(),ke=Au();function Pg(){var e,r,t=typeof kg=="function"?kg:{},n=t.iterator||"@@iterator",i=t.toStringTag||"@@toStringTag";function o(d,m,h,y){var q=m&&m.prototype instanceof c?m:c,g=Nu(q.prototype);return ke(g,"_invoke",function(k,C,S){var T,w,O,j=0,xe=S||[],I=!1,ee={p:0,n:0,v:e,a:Se,f:k$(Se).call(Se,e,4),d:function(F,ye){return T=F,w=0,O=e,ee.n=ye,u}};function Se(Q,F){for(w=Q,O=F,r=0;!I&&j&&!ye&&r<xe.length;r++){var ye,E=xe[r],Ar=ee.p,ze=E[2];Q>3?(ye=ze===F)&&(O=E[(w=E[4])?5:(w=3,3)],E[4]=E[5]=e):E[0]<=Ar&&((ye=Q<2&&Ar<E[1])?(w=0,ee.v=F,ee.n=E[1]):Ar<ze&&(ye=Q<3||E[0]>F||F>ze)&&(E[4]=Q,E[5]=F,ee.n=ze,w=0))}if(ye||Q>1)return u;throw I=!0,F}return function(Q,F,ye){if(j>1)throw TypeError("Generator is already running");for(I&&F===1&&Se(F,ye),w=F,O=ye;(r=w<2?e:O)||!I;){T||(w?w<3?(w>1&&(ee.n=-1),Se(w,O)):ee.n=O:ee.v=O);try{if(j=2,T){if(w||(Q="next"),r=T[Q]){if(!(r=r.call(T,O)))throw TypeError("iterator result is not an object");if(!r.done)return r;O=r.value,w<2&&(w=0)}else w===1&&(r=T.return)&&r.call(T),w<2&&(O=TypeError("The iterator does not provide a '"+Q+"' method"),w=1);T=e}else if((r=(I=ee.n<0)?O:k.call(C,ee))!==u)break}catch(E){T=e,w=1,O=E}finally{j=1}}return{value:r,done:I}}}(d,h,y),!0),g}var u={};function c(){}function s(){}function l(){}r=I$;var f=[][n]?r(r([][n]())):(ke(r={},n,function(){return this}),r),p=l.prototype=c.prototype=Nu(f);function v(d){return Ig?Ig(d,l):(d.__proto__=l,ke(d,i,"GeneratorFunction")),d.prototype=Nu(p),d}return s.prototype=l,ke(p,"constructor",l),ke(l,"constructor",s),s.displayName="GeneratorFunction",ke(l,i,"GeneratorFunction"),ke(p),ke(p,i,"Generator"),ke(p,n,function(){return this}),ke(p,"toString",function(){return"[object Generator]"}),(Le.exports=Pg=function(){return{w:o,m:v}},Le.exports.__esModule=!0,Le.exports.default=Le.exports)()}Le.exports=Pg,Le.exports.__esModule=!0,Le.exports.default=Le.exports});var Lu=a((Tz,Vt)=>{var P$=Ee(),_$=yi(),R$=Iu(),ju=Au();function $u(e,r){function t(i,o,u,c){try{var s=e[i](o),l=s.value;return l instanceof R$?r.resolve(l.v).then(function(f){t("next",f,u,c)},function(f){t("throw",f,u,c)}):r.resolve(l).then(function(f){s.value=f,u(s)},function(f){return t("throw",f,u,c)})}catch(f){c(f)}}var n;this.next||(ju($u.prototype),ju($u.prototype,typeof P$=="function"&&_$||"@asyncIterator",function(){return this})),ju(this,"_invoke",function(i,o,u){function c(){return new r(function(s,l){t(i,u,s,l)})}return n=n?n.then(c,c):c()},!0)}Vt.exports=$u,Vt.exports.__esModule=!0,Vt.exports.default=Vt.exports});var Fu=a((Ez,Yt)=>{var A$=at(),N$=Mu(),M$=Lu();function j$(e,r,t,n,i){return new M$(N$().w(e,r,t,n),i||A$)}Yt.exports=j$,Yt.exports.__esModule=!0,Yt.exports.default=Yt.exports});var _g=a((Oz,Jt)=>{var $$=Fu();function L$(e,r,t,n,i){var o=$$(e,r,t,n,i);return o.next().then(function(u){return u.done?u.value:o.next()})}Jt.exports=L$,Jt.exports.__esModule=!0,Jt.exports.default=Jt.exports});var Ng=a((Cz,Ag)=>{"use strict";var Rg=Je(),F$=TypeError;Ag.exports=function(e,r){if(!delete e[r])throw new F$("Cannot delete property "+Rg(r)+" of "+Rg(e))}});var Mg=a(()=>{"use strict";var D$=x(),B$=re(),G$=fe(),U$=Wr(),W$=Ng(),H$=Ct(),K$=[].unshift(0)!==1,z$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},V$=K$||!z$();D$({target:"Array",proto:!0,arity:1,forced:V$},{unshift:function(r){var t=B$(this),n=G$(t),i=arguments.length;if(i){H$(n+i);for(var o=n;o--;){var u=o+i;o in t?t[u]=t[o]:W$(t,u)}for(var c=0;c<i;c++)t[c]=arguments[c]}return U$(t,n+i)}})});var $g=a((Pz,jg)=>{"use strict";Mg();var Y$=oe();jg.exports=Y$("Array","unshift")});var Fg=a((_z,Lg)=>{"use strict";var J$=U(),Q$=$g(),Du=Array.prototype;Lg.exports=function(e){var r=e.unshift;return e===Du||J$(Du,e)&&r===Du.unshift?Q$:r}});var Bg=a((Rz,Dg)=>{"use strict";var X$=Fg();Dg.exports=X$});var Ug=a((Az,Gg)=>{"use strict";var Z$=Bg();Gg.exports=Z$});var Hg=a((Nz,Wg)=>{"use strict";var eL=Ug();Wg.exports=eL});var zg=a((Mz,Kg)=>{"use strict";Kg.exports=Hg()});var Vg=a((jz,Qt)=>{var rL=zg();function tL(e){var r=Object(e),t=[];for(var n in r)rL(t).call(t,n);return function i(){for(;t.length;)if((n=t.pop())in r)return i.value=n,i.done=!1,i;return i.done=!0,i}}Qt.exports=tL,Qt.exports.__esModule=!0,Qt.exports.default=Qt.exports});var Jg=a(($z,Yg)=>{"use strict";xr();kt();yr();Oo();var nL=zr();Yg.exports=nL.f("iterator")});var Xg=a((Lz,Qg)=>{"use strict";var iL=Jg();Sr();Qg.exports=iL});var eq=a((Fz,Zg)=>{"use strict";var aL=Xg();Zg.exports=aL});var tq=a((Dz,rq)=>{"use strict";var oL=eq();rq.exports=oL});var Xt=a((Bz,nq)=>{"use strict";nq.exports=tq()});var iq=a((Gz,Fe)=>{var Si=Ee(),uL=Xt();function Bu(e){"@babel/helpers - typeof";return Fe.exports=Bu=typeof Si=="function"&&typeof uL=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Si=="function"&&r.constructor===Si&&r!==Si.prototype?"symbol":typeof r},Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports,Bu(e)}Fe.exports=Bu,Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports});var aq=a((Uz,Zt)=>{var sL=iq().default,cL=Ee(),lL=Xt();function fL(e){if(e!=null){var r=e[typeof cL=="function"&&lL||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(sL(e)+" is not iterable")}Zt.exports=fL,Zt.exports.__esModule=!0,Zt.exports.default=Zt.exports});var sq=a((Wz,De)=>{var oq=bi(),pL=Rb(),vL=Iu(),dL=Mu(),hL=_g(),mL=Fu(),yL=Lu(),bL=Vg(),uq=aq();function Gu(){"use strict";var e=dL(),r=e.m(Gu),t=(oq?oq(r):r.__proto__).constructor;function n(u){var c=typeof u=="function"&&u.constructor;return!!c&&(c===t||(c.displayName||c.name)==="GeneratorFunction")}var i={throw:1,return:2,break:3,continue:3};function o(u){var c,s;return function(l){c||(c={stop:function(){return s(l.a,2)},catch:function(){return l.v},abrupt:function(p,v){return s(l.a,i[p],v)},delegateYield:function(p,v,d){return c.resultName=v,s(l.d,uq(p),d)},finish:function(p){return s(l.f,p)}},s=function(p,v,d){l.p=c.prev,l.n=c.next;try{return p(v,d)}finally{c.next=l.n}}),c.resultName&&(c[c.resultName]=l.v,c.resultName=void 0),c.sent=l.v,c.next=l.n;try{return u.call(this,c)}finally{l.p=c.prev,l.n=c.next}}}return(De.exports=Gu=function(){return{wrap:function(s,l,f,p){return e.w(o(s),l,f,p&&pL(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(s,l){return new vL(s,l)},AsyncIterator:yL,async:function(s,l,f,p,v){return(n(l)?mL:hL)(o(s),l,f,p,v)},keys:bL,values:uq}},De.exports.__esModule=!0,De.exports.default=De.exports)()}De.exports=Gu,De.exports.__esModule=!0,De.exports.default=De.exports});var se=a((Hz,cq)=>{var wi=sq()();cq.exports=wi;try{regeneratorRuntime=wi}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=wi:Function("r","regeneratorRuntime = r")(wi)}});var Uu=a((Ei,fq)=>{"use strict";Object.defineProperty(Ei,"__esModule",{value:!0});var Ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},lq=function(){function e(r,t){var n=[],i=!0,o=!1,u=void 0;try{for(var c=r[Symbol.iterator](),s;!(i=(s=c.next()).done)&&(n.push(s.value),!(t&&n.length===t));i=!0);}catch(l){o=!0,u=l}finally{try{!i&&c.return&&c.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Ei.default=gL;function gL(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(i){return i.type==="tag"||i.type==="script"||i.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var i=this.attribs,o=Object.keys(i),u=o.reduce(function(c,s,l){return c[l]={name:s,value:i[s]},c},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var i=[];return ir(this.childTags,function(o){(o.name===n||n==="*")&&i.push(o)}),i}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var i=n.trim().replace(/\s+/g," ").split(" "),o=[];return ir([this],function(u){var c=u.attribs.class;c&&i.every(function(s){return c.indexOf(s)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var i=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=qL(n),u=o.shift(),c=o.length;return u(this).filter(function(s){for(var l=0;l<c;){if(s=o[l](s,i),!s)return!1;l+=1}return!0})}),t.contains||(t.contains=function(n){var i=!1;return ir([this],function(o,u){o===n&&(i=!0,u())}),i}),!0}function qL(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,i=r.split(":"),o=lq(i,2),u=o[0],c=o[1],s=null,l=null;if(function(){switch(!0){case/>/.test(u):l=function(S){return function(T){return T(S.parent)&&S.parent}};break;case/^\./.test(u):var m=u.substr(1).split(".");s=function(S){var T=S.attribs.class;return T&&m.every(function(w){return T.indexOf(w)>-1})},l=function(S,T){return n?S.getElementsByClassName(m.join(" ")):typeof S=="function"?S(s):en(S,T,s)};break;case/^\[/.test(u):var h=u.replace(/\[|\]|"/g,"").split("="),y=lq(h,2),q=y[0],g=y[1];s=function(S){var T=Object.keys(S.attribs).indexOf(q)>-1;return!!(T&&(!g||S.attribs[q]===g))},l=function(S,T){if(n){var w=function(){var O=[];return ir([S],function(j){s(j)&&O.push(j)}),{v:O}}();if((typeof w>"u"?"undefined":Ti(w))==="object")return w.v}return typeof S=="function"?S(s):en(S,T,s)};break;case/^#/.test(u):var k=u.substr(1);s=function(S){return S.attribs.id===k},l=function(S,T){if(n){var w=function(){var O=[];return ir([S],function(j,xe){s(j)&&(O.push(j),xe())}),{v:O}}();if((typeof w>"u"?"undefined":Ti(w))==="object")return w.v}return typeof S=="function"?S(s):en(S,T,s)};break;case/\*/.test(u):s=function(S){return!0},l=function(S,T){if(n){var w=function(){var O=[];return ir([S],function(j){return O.push(j)}),{v:O}}();if((typeof w>"u"?"undefined":Ti(w))==="object")return w.v}return typeof S=="function"?S(s):en(S,T,s)};break;default:s=function(S){return S.name===u},l=function(S,T){if(n){var w=function(){var O=[];return ir([S],function(j){s(j)&&O.push(j)}),{v:O}}();if((typeof w>"u"?"undefined":Ti(w))==="object")return w.v}return typeof S=="function"?S(s):en(S,T,s)}}}(),!c)return l;var f=c.match(/-(child|type)\((\d+)\)$/),p=f[1],v=parseInt(f[2],10)-1,d=function(h){if(h){var y=h.parent.childTags;p==="type"&&(y=y.filter(s));var q=y.findIndex(function(g){return g===h});if(q===v)return!0}return!1};return function(h){var y=l(h);return n?y.reduce(function(q,g){return d(g)&&q.push(g),q},[]):d(y)&&y}})}function ir(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&ir(t.childTags,r)})}function en(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}fq.exports=Ei.default});var Ci=a(Oi=>{"use strict";Object.defineProperty(Oi,"__esModule",{value:!0});Oi.convertNodeList=xL;Oi.escapeValue=SL;function xL(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function SL(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var xq=a((ki,qq)=>{"use strict";Object.defineProperty(ki,"__esModule",{value:!0});ki.default=wL;var hq=Ci(),pq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function wL(e,r){var t=r.root,n=t===void 0?document:t,i=r.skip,o=i===void 0?null:i,u=r.priority,c=u===void 0?["id","class","href","src"]:u,s=r.ignore,l=s===void 0?{}:s,f=[],p=e,v=f.length,d=!1,m=o&&(Array.isArray(o)?o:[o]).map(function(q){return typeof q!="function"?function(g){return g===q}:q}),h=function(g){return o&&m.some(function(k){return k(g)})};for(Object.keys(l).forEach(function(q){q==="class"&&(d=!0);var g=l[q];typeof g!="function"&&(typeof g=="number"&&(g=g.toString()),typeof g=="string"&&(g=new RegExp((0,hq.escapeValue)(g).replace(/\\/g,"\\\\"))),typeof g=="boolean"&&(g=g?/(?:)/:/.^/),l[q]=function(k,C){return g.test(C)})}),d&&function(){var q=l.attribute;l.attribute=function(g,k,C){return l.class(k)||q&&q(g,k,C)}}();p!==n;){if(h(p)!==!0){if(vq(c,p,l,f,n)||dq(p,l,f,n))break;vq(c,p,l,f),f.length===v&&dq(p,l,f),f.length===v&&TL(c,p,l,f)}p=p.parentNode,v=f.length}if(p===n){var y=bq(c,p,l);f.unshift(y)}return f.join(" ")}function vq(e,r,t,n){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=mq(e,r,t);if(o){var u=i.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function mq(e,r,t){for(var n=r.attributes,i=Object.keys(n).sort(function(h,y){var q=e.indexOf(n[h].name),g=e.indexOf(n[y].name);return g===-1?q===-1?0:-1:q-g}),o=0,u=i.length;o<u;o++){var c=i[o],s=n[c],l=s.name,f=(0,hq.escapeValue)(s.value),p=t[l]||t.attribute,v=pq[l]||pq.attribute;if(!gq(p,l,f,v)){var d="["+l+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(l==="id"&&(d="#"+f),l==="class")){var m=f.trim().replace(/\s+/g,".");d="."+m}return d}}return null}function dq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,i=yq(e,r);if(i){var o=n.getElementsByTagName(i);if(o.length===1)return t.unshift(i),!0}return!1}function yq(e,r){var t=e.tagName.toLowerCase();return gq(r.tag,null,t)?null:t}function TL(e,r,t,n){for(var i=r.parentNode,o=i.childTags||i.children,u=0,c=o.length;u<c;u++){var s=o[u];if(s===r){var l=bq(e,s,t);if(!l)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,s,t,l);var f="> "+l+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function bq(e,r,t){var n=mq(e,r,t);return n||(n=yq(r,t)),n}function gq(e,r,t,n){if(!t)return!0;var i=e||n;return i?i(r,t,n):!1}qq.exports=ki.default});var Wu=a((Pi,Sq)=>{"use strict";Object.defineProperty(Pi,"__esModule",{value:!0});Pi.default=IL;var EL=Uu(),OL=kL(EL),CL=Ci();function kL(e){return e&&e.__esModule?e:{default:e}}function IL(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,CL.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,OL.default)(r[0],t),i=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(i.length<2)return Ii("",e,"",r);for(var o=[i.pop()];i.length>1;){var u=i.pop(),c=i.join(" "),s=o.join(" "),l=c+" "+s,f=document.querySelectorAll(l);f.length!==r.length&&o.unshift(Ii(c,u,s,r))}return o.unshift(i[0]),i=o,i[0]=Ii("",i[0],i.slice(1).join(" "),r),i[i.length-1]=Ii(i.slice(0,-1).join(" "),i[i.length-1],"",r),n&&delete global.document,i.join(" ").replace(/>/g,"> ").trim()}function Ii(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var i=r.replace(/=.*$/,"]"),o=""+e+i+t,u=document.querySelectorAll(o);if(ot(u,n))r=i;else for(var c=document.querySelectorAll(""+e+i),s=function(){var C=c[l];if(n.some(function(T){return C.contains(T)})){var S=C.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),ot(u,n)&&(r=S),"break"}},l=0,f=c.length;l<f;l++){var o,u,p=s();if(p==="break")break}}if(/>/.test(r)){var v=r.replace(/>/,""),o=""+e+v+t,u=document.querySelectorAll(o);ot(u,n)&&(r=v)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);ot(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var m=r.trim().split(".").slice(1).map(function(k){return"."+k}).sort(function(k,C){return k.length-C.length});m.length;){var h=r.replace(m.shift(),"").trim(),o=(""+e+h+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);ot(u,n)&&(r=h)}if(m=r&&r.match(/\./g),m&&m.length>2)for(var y=document.querySelectorAll(""+e+r),q=function(){var C=y[l];if(n.some(function(T){return C.contains(T)})){var S=C.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),ot(u,n)&&(r=S),"break"}},l=0,f=y.length;l<f;l++){var o,u,g=q();if(g==="break")break}}return r}function ot(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var i=0;i<t;i++)if(e[i]===n)return!0;return!1})}Sq.exports=Pi.default});var Hu=a(_i=>{"use strict";Object.defineProperty(_i,"__esModule",{value:!0});_i.getCommonAncestor=PL;_i.getCommonProperties=_L;function PL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,i=[];e.forEach(function(p,v){for(var d=[];p!==n;)p=p.parentNode,d.unshift(p);i[v]=d}),i.sort(function(p,v){return p.length-v.length});for(var o=i.shift(),u=null,c=function(){var v=o[s],d=i.some(function(m){return!m.some(function(h){return h===v})});if(d)return"break";u=v},s=0,l=o.length;s<l;s++){var f=c();if(f==="break")break}return u}function _L(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,i=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(s){return u.some(function(l){return l===s})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(i!==void 0&&function(){var s=t.attributes,l=Object.keys(s).reduce(function(v,d){var m=s[d],h=m.name;return m&&h!=="class"&&(v[h]=m.value),v},{}),f=Object.keys(l),p=Object.keys(i);f.length?p.length?(i=p.reduce(function(v,d){var m=i[d];return m===l[d]&&(v[d]=m),v},{}),Object.keys(i).length?r.attributes=i:delete r.attributes):r.attributes=l:delete r.attributes}(),o!==void 0){var c=t.tagName.toLowerCase();o?c!==o&&delete r.tag:r.tag=c}}),r}});var kq=a(rn=>{"use strict";Object.defineProperty(rn,"__esModule",{value:!0});var RL=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};rn.getSingleSelector=zu;rn.getMultiSelector=Cq;rn.default=LL;var AL=Uu(),Tq=Ku(AL),NL=xq(),ML=Ku(NL),jL=Wu(),Eq=Ku(jL),wq=Ci(),Oq=Hu();function Ku(e){return e&&e.__esModule?e:{default:e}}function zu(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":RL(e))+'")');var t=(0,Tq.default)(e,r),n=(0,ML.default)(e,r),i=(0,Eq.default)(n,e,r);return t&&delete global.document,i}function Cq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,wq.convertNodeList)(e)),e.some(function(l){return l.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,Tq.default)(e[0],r),n=(0,Oq.getCommonAncestor)(e,r),i=zu(n,r),o=$L(e),u=o[0],c=(0,Eq.default)(i+" "+u,e,r),s=(0,wq.convertNodeList)(document.querySelectorAll(c));return e.every(function(l){return s.some(function(f){return f===l})})?(t&&delete global.document,c):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function $L(e){var r=(0,Oq.getCommonProperties)(e),t=r.classes,n=r.attributes,i=r.tag,o=[];if(i&&o.push(i),t){var u=t.map(function(s){return"."+s}).join("");o.push(u)}if(n){var c=Object.keys(n).reduce(function(s,l){return s.push("["+l+'="'+n[l]+'"]'),s},[]).join("");o.push(c)}return o.length,[o.join("")]}function LL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?Cq(e,r):zu(e,r)}});var _q=a(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.default=ie.common=ie.optimize=ie.getMultiSelector=ie.getSingleSelector=ie.select=void 0;var Vu=kq();Object.defineProperty(ie,"getSingleSelector",{enumerable:!0,get:function(){return Vu.getSingleSelector}});Object.defineProperty(ie,"getMultiSelector",{enumerable:!0,get:function(){return Vu.getMultiSelector}});var Iq=Pq(Vu),FL=Wu(),DL=Pq(FL),BL=Hu(),GL=UL(BL);function UL(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Pq(e){return e&&e.__esModule?e:{default:e}}ie.select=Iq.default;ie.optimize=DL.default;ie.common=GL;ie.default=Iq.default});var Rq=a(()=>{"use strict";var ZL=x(),eF=Re();ZL({target:"Array",stat:!0},{isArray:eF})});var Nq=a((sV,Aq)=>{"use strict";Rq();var rF=V();Aq.exports=rF.Array.isArray});var jq=a((cV,Mq)=>{"use strict";var tF=Nq();Mq.exports=tF});var Lq=a((lV,$q)=>{"use strict";var nF=jq();$q.exports=nF});var Dq=a((fV,Fq)=>{"use strict";var iF=Lq();Fq.exports=iF});var Gq=a((pV,Bq)=>{"use strict";Bq.exports=Dq()});var Hq=a(()=>{"use strict";var aF=x(),oF=re(),uF=fe(),sF=Wr(),cF=Ct(),lF=P(),fF=lF(function(){return[].push.call({length:4294967296},1)!==4294967297}),pF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},vF=fF||!pF();aF({target:"Array",proto:!0,arity:1,forced:vF},{push:function(r){var t=oF(this),n=uF(t),i=arguments.length;cF(n+i);for(var o=0;o<i;o++)t[n]=arguments[o],n++;return sF(t,n),n}})});var zq=a((mV,Kq)=>{"use strict";Hq();var dF=oe();Kq.exports=dF("Array","push")});var Yq=a((yV,Vq)=>{"use strict";var hF=U(),mF=zq(),Yu=Array.prototype;Vq.exports=function(e){var r=e.push;return e===Yu||hF(Yu,e)&&r===Yu.push?mF:r}});var Qq=a((bV,Jq)=>{"use strict";var yF=Yq();Jq.exports=yF});var Zq=a((gV,Xq)=>{"use strict";var bF=Qq();Xq.exports=bF});var rx=a((qV,ex)=>{"use strict";var gF=Zq();ex.exports=gF});var Ju=a((xV,tx)=>{"use strict";tx.exports=rx()});var vx=a(()=>{"use strict";var qF=x(),xF=Pt().map,SF=gt(),wF=SF("map");qF({target:"Array",proto:!0,forced:!wF},{map:function(r){return xF(this,r,arguments.length>1?arguments[1]:void 0)}})});var hx=a((YV,dx)=>{"use strict";vx();var TF=oe();dx.exports=TF("Array","map")});var yx=a((JV,mx)=>{"use strict";var EF=U(),OF=hx(),Xu=Array.prototype;mx.exports=function(e){var r=e.map;return e===Xu||EF(Xu,e)&&r===Xu.map?OF:r}});var gx=a((QV,bx)=>{"use strict";var CF=yx();bx.exports=CF});var xx=a((XV,qx)=>{"use strict";var kF=gx();qx.exports=kF});var wx=a((ZV,Sx)=>{"use strict";var IF=xx();Sx.exports=IF});var Ex=a((e7,Tx)=>{"use strict";Tx.exports=wx()});var Cx=a((r7,Ox)=>{Ox.exports=Ex()});var Ix=a((t7,kx)=>{kx.exports=at()});var Nx=a((n7,Ax)=>{"use strict";var PF=D(),_F=re(),RF=bn(),AF=fe(),Px=TypeError,_x="Reduce of empty array with no initial value",Rx=function(e){return function(r,t,n,i){var o=_F(r),u=RF(o),c=AF(o);if(PF(t),c===0&&n<2)throw new Px(_x);var s=e?c-1:0,l=e?-1:1;if(n<2)for(;;){if(s in u){i=u[s],s+=l;break}if(s+=l,e?s<0:c<=s)throw new Px(_x)}for(;e?s>=0:c>s;s+=l)s in u&&(i=t(i,u[s],s,o));return i}};Ax.exports={left:Rx(!1),right:Rx(!0)}});var Zu=a((i7,Mx)=>{"use strict";var NF=P();Mx.exports=function(e,r){var t=[][e];return!!t&&NF(function(){t.call(null,r||function(){return 1},1)})}});var $x=a(()=>{"use strict";var MF=x(),jF=Nx().left,$F=Zu(),jx=$r(),LF=jt(),FF=!LF&&jx>79&&jx<83,DF=FF||!$F("reduce");MF({target:"Array",proto:!0,forced:DF},{reduce:function(r){var t=arguments.length;return jF(this,r,t,t>1?arguments[1]:void 0)}})});var Fx=a((u7,Lx)=>{"use strict";$x();var BF=oe();Lx.exports=BF("Array","reduce")});var Bx=a((s7,Dx)=>{"use strict";var GF=U(),UF=Fx(),es=Array.prototype;Dx.exports=function(e){var r=e.reduce;return e===es||GF(es,e)&&r===es.reduce?UF:r}});var Ux=a((c7,Gx)=>{"use strict";var WF=Bx();Gx.exports=WF});var Hx=a((l7,Wx)=>{"use strict";var HF=Ux();Wx.exports=HF});var zx=a((f7,Kx)=>{"use strict";var KF=Hx();Kx.exports=KF});var Yx=a((p7,Vx)=>{"use strict";Vx.exports=zx()});var Qx=a((v7,Jx)=>{Jx.exports=Yx()});var eS=a((d7,Zx)=>{"use strict";var zF=Re(),VF=fe(),YF=Ct(),JF=Y(),QF=Ur(),Xx=function(e,r,t,n,i,o,u,c){for(var s=i,l=0,f=u?JF(u,c):!1,p,v;l<n;)l in t&&(p=f?f(t[l],l,r):t[l],o>0&&zF(p)?(v=VF(p),s=Xx(e,r,p,v,s,o-1)-1):(YF(s+1),QF(e,s,p)),s++),l++;return s};Zx.exports=Xx});var rS=a(()=>{"use strict";var XF=x(),ZF=eS(),eD=D(),rD=re(),tD=fe(),nD=Fn();XF({target:"Array",proto:!0},{flatMap:function(r){var t=rD(this),n=tD(t),i;return eD(r),i=nD(t,0),ZF(i,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),i}})});var tS=a(()=>{"use strict";var iD=ko();iD("flatMap")});var iS=a((g7,nS)=>{"use strict";rS();tS();var aD=oe();nS.exports=aD("Array","flatMap")});var oS=a((q7,aS)=>{"use strict";var oD=U(),uD=iS(),rs=Array.prototype;aS.exports=function(e){var r=e.flatMap;return e===rs||oD(rs,e)&&r===rs.flatMap?uD:r}});var sS=a((x7,uS)=>{"use strict";var sD=oS();uS.exports=sD});var lS=a((S7,cS)=>{"use strict";var cD=sS();cS.exports=cD});var pS=a((w7,fS)=>{"use strict";var lD=lS();fS.exports=lD});var dS=a((T7,vS)=>{"use strict";vS.exports=pS()});var mS=a((E7,hS)=>{hS.exports=dS()});var bS=a((O7,yS)=>{"use strict";Xa();var fD=oe();yS.exports=fD("Array","concat")});var qS=a((C7,gS)=>{"use strict";var pD=U(),vD=bS(),ts=Array.prototype;gS.exports=function(e){var r=e.concat;return e===ts||pD(ts,e)&&r===ts.concat?vD:r}});var SS=a((k7,xS)=>{"use strict";var dD=qS();xS.exports=dD});var TS=a((I7,wS)=>{"use strict";var hD=SS();wS.exports=hD});var OS=a((P7,ES)=>{"use strict";var mD=TS();ES.exports=mD});var kS=a((_7,CS)=>{"use strict";CS.exports=OS()});var ns=a((R7,IS)=>{IS.exports=kS()});var RS=a(()=>{});var NS=a((r9,AS)=>{"use strict";RS();Co();var OD=zr();AS.exports=OD.f("toPrimitive")});var jS=a((t9,MS)=>{"use strict";var CD=NS();MS.exports=CD});var LS=a((n9,$S)=>{"use strict";var kD=jS();$S.exports=kD});var DS=a((i9,FS)=>{"use strict";var ID=LS();FS.exports=ID});var GS=a((a9,BS)=>{"use strict";BS.exports=DS()});var QS=a((O9,JS)=>{"use strict";var _D=$(),RD=we(),AD=R(),ND=AD("match");JS.exports=function(e){var r;return _D(e)&&((r=e[ND])!==void 0?!!r:RD(e)==="RegExp")}});var ZS=a((C9,XS)=>{"use strict";var MD=QS(),jD=TypeError;XS.exports=function(e){if(MD(e))throw new jD("The method doesn't accept regular expressions");return e}});var rw=a((k9,ew)=>{"use strict";var $D=R(),LD=$D("match");ew.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[LD]=!1,"/./"[e](r)}catch{}}return!1}});var iw=a(()=>{"use strict";var FD=x(),DD=ft(),BD=vt().f,GD=Sa(),tw=Qe(),UD=ZS(),WD=fr(),HD=rw(),KD=Z(),zD=DD("".slice),VD=Math.min,nw=HD("startsWith"),YD=!KD&&!nw&&!!function(){var e=BD(String.prototype,"startsWith");return e&&!e.writable}();FD({target:"String",proto:!0,forced:!YD&&!nw},{startsWith:function(r){var t=tw(WD(this));UD(r);var n=GD(VD(arguments.length>1?arguments[1]:void 0,t.length)),i=tw(r);return zD(t,n,n+i.length)===i}})});var ow=a((_9,aw)=>{"use strict";iw();var JD=oe();aw.exports=JD("String","startsWith")});var sw=a((R9,uw)=>{"use strict";var QD=U(),XD=ow(),us=String.prototype;uw.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===us||QD(us,e)&&r===us.startsWith?XD:r}});var lw=a((A9,cw)=>{"use strict";var ZD=sw();cw.exports=ZD});var pw=a((N9,fw)=>{"use strict";var e3=lw();fw.exports=e3});var dw=a((M9,vw)=>{"use strict";var r3=pw();vw.exports=r3});var mw=a((j9,hw)=>{"use strict";hw.exports=dw()});var bw=a(($9,yw)=>{yw.exports=mw()});var gw=a(()=>{"use strict";var t3=x(),n3=Pt().filter,i3=gt(),a3=i3("filter");t3({target:"Array",proto:!0,forced:!a3},{filter:function(r){return n3(this,r,arguments.length>1?arguments[1]:void 0)}})});var xw=a((D9,qw)=>{"use strict";gw();var o3=oe();qw.exports=o3("Array","filter")});var ww=a((B9,Sw)=>{"use strict";var u3=U(),s3=xw(),ss=Array.prototype;Sw.exports=function(e){var r=e.filter;return e===ss||u3(ss,e)&&r===ss.filter?s3:r}});var Ew=a((G9,Tw)=>{"use strict";var c3=ww();Tw.exports=c3});var Cw=a((U9,Ow)=>{"use strict";var l3=Ew();Ow.exports=l3});var Iw=a((W9,kw)=>{"use strict";var f3=Cw();kw.exports=f3});var _w=a((H9,Pw)=>{"use strict";Pw.exports=Iw()});var Aw=a((K9,Rw)=>{Rw.exports=_w()});var Yw=a(()=>{"use strict";var g3=x(),q3=H(),ls=Mr(),x3=_u(),Uw=Go(),S3=X(),Ww=$(),w3=Ze(),Kw=P(),fs=q3("Reflect","construct"),T3=Object.prototype,E3=[].push,zw=Kw(function(){function e(){}return!(fs(function(){},[],e)instanceof e)}),Vw=!Kw(function(){fs(function(){})}),Hw=zw||Vw;g3({target:"Reflect",stat:!0,forced:Hw,sham:Hw},{construct:function(r,t){Uw(r),S3(t);var n=arguments.length<3?r:Uw(arguments[2]);if(Vw&&!zw)return fs(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var i=[null];return ls(E3,i,t),new(ls(x3,r,i))}var o=n.prototype,u=w3(Ww(o)?o:T3),c=ls(r,u,t);return Ww(c)?c:u}})});var Qw=a((OY,Jw)=>{"use strict";Yw();var O3=V();Jw.exports=O3.Reflect.construct});var Zw=a((CY,Xw)=>{"use strict";var C3=Qw();Xw.exports=C3});var rT=a((kY,eT)=>{"use strict";var k3=Zw();eT.exports=k3});var nT=a((IY,tT)=>{"use strict";var I3=rT();tT.exports=I3});var Li=a((PY,iT)=>{"use strict";iT.exports=nT()});var oT=a((_Y,aT)=>{aT.exports=Li()});var hT=a((DY,dT)=>{"use strict";var P3=P();dT.exports=P3(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var bT=a((BY,yT)=>{"use strict";var _3=P(),R3=$(),A3=we(),mT=hT(),Fi=Object.isExtensible,N3=_3(function(){Fi(1)});yT.exports=N3||mT?function(r){return!R3(r)||mT&&A3(r)==="ArrayBuffer"?!1:Fi?Fi(r):!0}:Fi});var qT=a((GY,gT)=>{"use strict";var M3=P();gT.exports=!M3(function(){return Object.isExtensible(Object.preventExtensions({}))})});var bs=a((UY,wT)=>{"use strict";var j3=x(),$3=A(),L3=Kr(),F3=$(),hs=K(),D3=te().f,xT=It(),B3=Za(),ms=bT(),G3=Fr(),U3=qT(),ST=!1,Ue=G3("meta"),W3=0,ys=function(e){D3(e,Ue,{value:{objectID:"O"+W3++,weakData:{}}})},H3=function(e,r){if(!F3(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!hs(e,Ue)){if(!ms(e))return"F";if(!r)return"E";ys(e)}return e[Ue].objectID},K3=function(e,r){if(!hs(e,Ue)){if(!ms(e))return!0;if(!r)return!1;ys(e)}return e[Ue].weakData},z3=function(e){return U3&&ST&&ms(e)&&!hs(e,Ue)&&ys(e),e},V3=function(){Y3.enable=function(){},ST=!0;var e=xT.f,r=$3([].splice),t={};t[Ue]=1,e(t).length&&(xT.f=function(n){for(var i=e(n),o=0,u=i.length;o<u;o++)if(i[o]===Ue){r(i,o,1);break}return i},j3({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:B3.f}))},Y3=wT.exports={enable:V3,fastKey:H3,getWeakData:K3,onFreeze:z3};L3[Ue]=!0});var OT=a((WY,ET)=>{"use strict";var J3=x(),Q3=_(),X3=bs(),Z3=P(),e4=Te(),r4=ve(),t4=ui(),n4=N(),i4=$(),a4=lr(),o4=Me(),u4=te().f,s4=Pt().forEach,c4=W(),TT=Xe(),l4=TT.set,f4=TT.getterFor;ET.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,i=e.indexOf("Weak")!==-1,o=n?"set":"add",u=Q3[e],c=u&&u.prototype,s={},l;if(!c4||!n4(u)||!(i||c.forEach&&!Z3(function(){new u().entries().next()})))l=t.getConstructor(r,e,n,o),X3.enable();else{l=r(function(v,d){l4(t4(v,f),{type:e,collection:new u}),a4(d)||r4(d,v[o],{that:v,AS_ENTRIES:n})});var f=l.prototype,p=f4(e);s4(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(v){var d=v==="add"||v==="set";v in c&&!(i&&v==="clear")&&e4(f,v,function(m,h){var y=p(this).collection;if(!d&&i&&!i4(m))return v==="get"?void 0:!1;var q=y[v](m===0?0:m,h);return d?this:q})}),i||u4(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return o4(l,e,!1,!0),s[e]=l,J3({global:!0,forced:!0},s),i||t.setStrong(l,e,n),l}});var kT=a((HY,CT)=>{"use strict";var p4=Ae();CT.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:p4(e,n,r[n],t);return e}});var MT=a((KY,NT)=>{"use strict";var IT=Ze(),v4=Bn(),PT=kT(),d4=Y(),h4=ui(),m4=lr(),y4=ve(),b4=Mn(),Di=jn(),g4=Bo(),sn=W(),_T=bs().fastKey,AT=Xe(),RT=AT.set,gs=AT.getterFor;NT.exports={getConstructor:function(e,r,t,n){var i=e(function(l,f){h4(l,o),RT(l,{type:r,index:IT(null),first:null,last:null,size:0}),sn||(l.size=0),m4(f)||y4(f,l[n],{that:l,AS_ENTRIES:t})}),o=i.prototype,u=gs(r),c=function(l,f,p){var v=u(l),d=s(l,f),m,h;return d?d.value=p:(v.last=d={index:h=_T(f,!0),key:f,value:p,previous:m=v.last,next:null,removed:!1},v.first||(v.first=d),m&&(m.next=d),sn?v.size++:l.size++,h!=="F"&&(v.index[h]=d)),l},s=function(l,f){var p=u(l),v=_T(f),d;if(v!=="F")return p.index[v];for(d=p.first;d;d=d.next)if(d.key===f)return d};return PT(o,{clear:function(){for(var f=this,p=u(f),v=p.first;v;)v.removed=!0,v.previous&&(v.previous=v.previous.next=null),v=v.next;p.first=p.last=null,p.index=IT(null),sn?p.size=0:f.size=0},delete:function(l){var f=this,p=u(f),v=s(f,l);if(v){var d=v.next,m=v.previous;delete p.index[v.index],v.removed=!0,m&&(m.next=d),d&&(d.previous=m),p.first===v&&(p.first=d),p.last===v&&(p.last=m),sn?p.size--:f.size--}return!!v},forEach:function(f){for(var p=u(this),v=d4(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:p.first;)for(v(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!s(this,f)}}),PT(o,t?{get:function(f){var p=s(this,f);return p&&p.value},set:function(f,p){return c(this,f===0?0:f,p)}}:{add:function(f){return c(this,f=f===0?0:f,f)}}),sn&&v4(o,"size",{configurable:!0,get:function(){return u(this).size}}),i},setStrong:function(e,r,t){var n=r+" Iterator",i=gs(r),o=gs(n);b4(e,r,function(u,c){RT(this,{type:n,target:u,state:i(u),kind:c,last:null})},function(){for(var u=o(this),c=u.kind,s=u.last;s&&s.removed;)s=s.previous;return!u.target||!(u.last=s=s?s.next:u.state.first)?(u.target=null,Di(void 0,!0)):Di(c==="keys"?s.key:c==="values"?s.value:[s.key,s.value],!1)},t?"entries":"values",!t,!0),g4(r)}}});var jT=a(()=>{"use strict";var q4=OT(),x4=MT();q4("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},x4)});var $T=a(()=>{"use strict";jT()});var FT=a((QY,LT)=>{"use strict";LT.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,i){return t[e](n,i)}}});var ae=a((XY,BT)=>{"use strict";var S4=H(),Bi=FT(),DT=S4("Map");BT.exports={Map:DT,set:Bi("set",2),get:Bi("get",1),has:Bi("has",1),remove:Bi("delete",1),proto:DT.prototype}});var qs=a(()=>{"use strict";var w4=x(),T4=A(),E4=D(),O4=fr(),C4=ve(),Gi=ae(),GT=Z(),k4=P(),UT=Gi.Map,I4=Gi.has,P4=Gi.get,_4=Gi.set,R4=T4([].push),A4=GT||k4(function(){return UT.groupBy("ab",function(e){return e}).get("a").length!==1});w4({target:"Map",stat:!0,forced:GT||A4},{groupBy:function(r,t){O4(r),E4(t);var n=new UT,i=0;return C4(r,function(o){var u=t(o,i++);I4(n,u)?R4(P4(n,u),o):_4(n,u,[o])}),n}})});var J=a((rJ,WT)=>{"use strict";var N4=Je(),M4=TypeError;WT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new M4(N4(e)+" is not a map")}});var Ss=a(()=>{"use strict";var j4=x(),$4=J(),xs=ae(),L4=Z(),F4=xs.get,D4=xs.has,B4=xs.set;j4({target:"Map",proto:!0,real:!0,forced:L4},{getOrInsert:function(r,t){return D4($4(this),r)?F4(this,r):(B4(this,r,t),t)}})});var Ts=a(()=>{"use strict";var G4=x(),U4=D(),W4=J(),ws=ae(),H4=Z(),K4=ws.get,z4=ws.has,V4=ws.set;G4({target:"Map",proto:!0,real:!0,forced:H4},{getOrInsertComputed:function(r,t){if(W4(this),U4(t),z4(this,r))return K4(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return V4(this,r,n),n}})});var KT=a((oJ,HT)=>{"use strict";xr();$T();qs();Ss();Ts();kt();yr();var Y4=V();HT.exports=Y4.Map});var VT=a((uJ,zT)=>{"use strict";var J4=KT();Sr();zT.exports=J4});var Es=a(()=>{"use strict";Ss()});var Os=a(()=>{"use strict";Ts()});var YT=a(()=>{"use strict";qs()});var QT=a((dJ,JT)=>{"use strict";var Q4=VT();Es();Os();YT();JT.exports=Q4});var ZT=a((hJ,XT)=>{"use strict";var X4=Y(),Z4=X(),eB=re(),rB=ve();XT.exports=function(e,r,t){return function(i){var o=eB(i),u=arguments.length,c=u>1?arguments[1]:void 0,s=c!==void 0,l=s?X4(c,u>2?arguments[2]:void 0):void 0,f=new e,p=0;return rB(o,function(v){var d=s?l(v,p++):v;t?r(f,Z4(d)[0],d[1]):r(f,d)}),f}}});var rE=a(()=>{"use strict";var tB=x(),eE=ae(),nB=ZT();tB({target:"Map",stat:!0,forced:!0},{from:nB(eE.Map,eE.set,!0)})});var nE=a((bJ,tE)=>{"use strict";var iB=X();tE.exports=function(e,r,t){return function(){for(var i=new e,o=arguments.length,u=0;u<o;u++){var c=arguments[u];t?r(i,iB(c)[0],c[1]):r(i,c)}return i}}});var aE=a(()=>{"use strict";var aB=x(),iE=ae(),oB=nE();aB({target:"Map",stat:!0,forced:!0},{of:oB(iE.Map,iE.set,!0)})});var uE=a(()=>{"use strict";var uB=x(),sB=B(),cB=ve(),lB=N(),oE=D(),fB=ae().Map;uB({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=lB(this)?this:fB,i=new n;oE(t);var o=oE(i.set);return cB(r,function(u){sB(o,i,t(u),u)}),i}})});var sE=a(()=>{"use strict";var pB=x(),vB=J(),dB=ae().remove;pB({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=vB(this),t=!0,n,i=0,o=arguments.length;i<o;i++)n=dB(r,arguments[i]),t=t&&n;return!!t}})});var lE=a(()=>{"use strict";var hB=x(),mB=J(),Cs=ae(),yB=Cs.get,bB=Cs.has,cE=Cs.set;hB({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=mB(this),i,o;return bB(n,r)?(i=yB(n,r),"update"in t&&(i=t.update(i,r,n),cE(n,r,i)),i):(o=t.insert(r,n),cE(n,r,o),o)}})});var pE=a((CJ,fE)=>{"use strict";var gB=B();fE.exports=function(e,r,t){for(var n=t?e:e.iterator,i=e.next,o,u;!(o=gB(i,n)).done;)if(u=r(o.value),u!==void 0)return u}});var qe=a((kJ,vE)=>{"use strict";var qB=pE();vE.exports=function(e,r,t){return t?qB(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var dE=a(()=>{"use strict";var xB=x(),SB=Y(),wB=J(),TB=qe();xB({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=wB(this),n=SB(r,arguments.length>1?arguments[1]:void 0);return TB(t,function(i,o){if(!n(i,o,t))return!1},!0)!==!1}})});var mE=a(()=>{"use strict";var EB=x(),OB=Y(),CB=J(),hE=ae(),kB=qe(),IB=hE.Map,PB=hE.set;EB({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=CB(this),n=OB(r,arguments.length>1?arguments[1]:void 0),i=new IB;return kB(t,function(o,u){n(o,u,t)&&PB(i,u,o)}),i}})});var yE=a(()=>{"use strict";var _B=x(),RB=Y(),AB=J(),NB=qe();_B({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=AB(this),n=RB(r,arguments.length>1?arguments[1]:void 0),i=NB(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return i&&i.value}})});var bE=a(()=>{"use strict";var MB=x(),jB=Y(),$B=J(),LB=qe();MB({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=$B(this),n=jB(r,arguments.length>1?arguments[1]:void 0),i=LB(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return i&&i.key}})});var qE=a(($J,gE)=>{"use strict";gE.exports=function(e,r){return e===r||e!==e&&r!==r}});var xE=a(()=>{"use strict";var FB=x(),DB=qE(),BB=J(),GB=qe();FB({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return GB(BB(this),function(t){if(DB(t,r))return!0},!0)===!0}})});var SE=a(()=>{"use strict";var UB=x(),WB=J(),HB=qe();UB({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=HB(WB(this),function(n,i){if(n===r)return{key:i}},!0);return t&&t.key}})});var TE=a(()=>{"use strict";var KB=x(),zB=Y(),VB=J(),wE=ae(),YB=qe(),JB=wE.Map,QB=wE.set;KB({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=VB(this),n=zB(r,arguments.length>1?arguments[1]:void 0),i=new JB;return YB(t,function(o,u){QB(i,n(o,u,t),o)}),i}})});var OE=a(()=>{"use strict";var XB=x(),ZB=Y(),e8=J(),EE=ae(),r8=qe(),t8=EE.Map,n8=EE.set;XB({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=e8(this),n=ZB(r,arguments.length>1?arguments[1]:void 0),i=new t8;return r8(t,function(o,u){n8(i,u,n(o,u,t))}),i}})});var CE=a(()=>{"use strict";var i8=x(),a8=J(),o8=ve(),u8=ae().set;i8({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=a8(this),n=arguments.length,i=0;i<n;)o8(arguments[i++],function(o,u){u8(t,o,u)},{AS_ENTRIES:!0});return t}})});var kE=a(()=>{"use strict";var s8=x(),c8=D(),l8=J(),f8=qe(),p8=TypeError;s8({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=l8(this),n=arguments.length<2,i=n?void 0:arguments[1];if(c8(r),f8(t,function(o,u){n?(n=!1,i=o):i=r(i,o,u,t)}),n)throw new p8("Reduce of empty map with no initial value");return i}})});var IE=a(()=>{"use strict";var v8=x(),d8=Y(),h8=J(),m8=qe();v8({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=h8(this),n=d8(r,arguments.length>1?arguments[1]:void 0);return m8(t,function(i,o){if(n(i,o,t))return!0},!0)===!0}})});var _E=a(()=>{"use strict";var y8=x(),PE=D(),b8=J(),ks=ae(),g8=TypeError,q8=ks.get,x8=ks.has,S8=ks.set;y8({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=b8(this),i=arguments.length;PE(t);var o=x8(n,r);if(!o&&i<3)throw new g8("Updating absent value");var u=o?q8(n,r):PE(i>2?arguments[2]:void 0)(r,n);return S8(n,r,t(u,r,n)),n}})});var Ps=a((eQ,RE)=>{"use strict";var Ui=B(),Is=D(),Wi=N(),w8=X(),T8=TypeError;RE.exports=function(r,t){var n=w8(this),i=Is(n.get),o=Is(n.has),u=Is(n.set),c=arguments.length>2?arguments[2]:void 0,s;if(!Wi(t)&&!Wi(c))throw new T8("At least one callback required");return Ui(o,n,r)?(s=Ui(i,n,r),Wi(t)&&(s=t(s),Ui(u,n,r,s))):Wi(c)&&(s=c(),Ui(u,n,r,s)),s}});var AE=a(()=>{"use strict";var E8=x(),O8=Ps();E8({target:"Map",proto:!0,real:!0,forced:!0},{upsert:O8})});var NE=a(()=>{"use strict";var C8=x(),k8=Ps();C8({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:k8})});var jE=a((aQ,ME)=>{"use strict";var I8=QT();rE();aE();uE();sE();lE();dE();mE();yE();bE();xE();Es();Os();SE();TE();OE();CE();kE();IE();_E();AE();NE();ME.exports=I8});var LE=a((oQ,$E)=>{"use strict";$E.exports=jE()});var DE=a(()=>{"use strict";var P8=x(),_8=ft(),R8=Ra().indexOf,A8=Zu(),_s=_8([].indexOf),FE=!!_s&&1/_s([1],1,-0)<0,N8=FE||!A8("indexOf");P8({target:"Array",proto:!0,forced:N8},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return FE?_s(this,r,t)||0:R8(this,r,t)}})});var GE=a((cQ,BE)=>{"use strict";DE();var M8=oe();BE.exports=M8("Array","indexOf")});var WE=a((lQ,UE)=>{"use strict";var j8=U(),$8=GE(),Rs=Array.prototype;UE.exports=function(e){var r=e.indexOf;return e===Rs||j8(Rs,e)&&r===Rs.indexOf?$8:r}});var KE=a((fQ,HE)=>{"use strict";var L8=WE();HE.exports=L8});var VE=a((pQ,zE)=>{"use strict";var F8=KE();zE.exports=F8});var JE=a((vQ,YE)=>{"use strict";var D8=VE();YE.exports=D8});var XE=a((dQ,QE)=>{"use strict";QE.exports=JE()});var hO=a(()=>{"use strict";var K8=x(),z8=re(),dO=Pn(),V8=P(),Y8=V8(function(){dO(1)});K8({target:"Object",stat:!0,forced:Y8},{keys:function(r){return dO(z8(r))}})});var yO=a((gX,mO)=>{"use strict";hO();var J8=V();mO.exports=J8.Object.keys});var gO=a((qX,bO)=>{"use strict";var Q8=yO();bO.exports=Q8});var xO=a((xX,qO)=>{"use strict";var X8=gO();qO.exports=X8});var wO=a((SX,SO)=>{"use strict";var Z8=xO();SO.exports=Z8});var EO=a((wX,TO)=>{"use strict";TO.exports=wO()});var CO=a((TX,OO)=>{OO.exports=EO()});var Ve="";function Ys(e){Ve=e.replace(/\/+$/,"")}async function cr(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function Js(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${Ve}/comments?${t}`);return await cr(n,"Failed to fetch comments"),(await n.json()).data}async function Ji({uri:e,document:r,quote:t,prefix:n,suffix:i,body:o,author:u,parent:c}){let s={quote:t,prefix:n,suffix:i,body:o,author:u,parent:c};r?s.document=r:s.uri=e;let l=await fetch(`${Ve}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});return await cr(l,"Failed to create comment"),l.json()}async function Qs(e,{body:r}){let t=await fetch(`${Ve}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:r})});return await cr(t,"Failed to update comment"),t.json()}async function Xs(e,r){let t=await fetch(`${Ve}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});return await cr(t,"Failed to update comment status"),t.json()}async function Zs(e){let r=await fetch(`${Ve}/comments/${e}`,{method:"DELETE"});await cr(r,"Failed to delete comment")}async function ec(e,r,t){let n=await fetch(`${Ve}/comments/${e}/reactions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({emoji:r,author:t})});return await cr(n,"Failed to add reaction"),n.json()}async function rc(e,r,t){let n=await fetch(`${Ve}/comments/${e}/reactions/${encodeURIComponent(r)}?author=${encodeURIComponent(t)}`,{method:"DELETE"});return await cr(n,"Failed to remove reaction"),n.json()}var KL=b(Hr(),1),zL=b(Ln(),1),VL=b(ei(),1),YL=b(ri(),1),JL=b(ti(),1);var Ou=b(at(),1);function Jy(e,r,t,n,i,o,u){try{var c=e[o](u),s=c.value}catch(l){return void t(l)}c.done?r(s):Ou.default.resolve(s).then(n,i)}function Cr(e){return function(){var r=this,t=arguments;return new Ou.default(function(n,i){var o=e.apply(r,t);function u(s){Jy(o,n,i,u,c,"next",s)}function c(s){Jy(o,n,i,u,c,"throw",s)}u(void 0)})}}function Ut(e,r){this.v=e,this.k=r}function nr(e){return new Ut(e,0)}var Cu=b(at(),1),ob=b(Ee(),1),ub=b(yi(),1);function Ce(e){return function(){return new Wt(e.apply(this,arguments))}}function Wt(e){var r,t;function n(o,u){try{var c=e[o](u),s=c.value,l=s instanceof Ut;Cu.default.resolve(l?s.v:s).then(function(f){if(l){var p=o==="return"?"return":"next";if(!s.k||f.done)return n(p,f);f=e[p](f).value}i(c.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){i("throw",f)}}function i(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new Cu.default(function(c,s){var l={key:o,arg:u,resolve:c,reject:s,next:null};t?t=t.next=l:(r=t=l,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Wt.prototype[typeof ob.default=="function"&&ub.default||"@@asyncIterator"]=function(){return this},Wt.prototype.next=function(e){return this._invoke("next",e)},Wt.prototype.throw=function(e){return this._invoke("throw",e)},Wt.prototype.return=function(e){return this._invoke("return",e)};var QL=b(se(),1),XL=b(_q(),1);function ce(e){var r,t=WL(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function WL(e){return"startContainer"in e}function ar(e){if(HL(e))return e;var r=e,t=ce(r).createRange();return t.selectNodeContents(r),t}function HL(e){return"startContainer"in e}var Uq=b(Gq(),1);function Wq(e){if((0,Uq.default)(e))return e}var nx=b(Ee(),1),ix=b(Mo(),1),ax=b(Ju(),1);function ox(e,r){var t=e==null?null:typeof nx.default<"u"&&(0,ix.default)(e)||e["@@iterator"];if(t!=null){var n,i,o,u,c=[],s=!0,l=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;s=!1}else for(;!(s=(n=o.call(t)).done)&&((0,ax.default)(c).call(c,n.value),c.length!==r);s=!0);}catch(f){l=!0,i=f}finally{try{if(!s&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(l)throw i}}return c}}var ux=b(Ea(),1),sx=b(Qa(),1);function Ri(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function Qu(e,r){if(e){var t;if(typeof e=="string")return Ri(e,r);var n=(0,ux.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,sx.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ri(e,r):void 0}}function cx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Be(e,r){return Wq(e)||ox(e,r)||Qu(e,r)||cx()}var lx=b(Ee(),1),fx=b(yi(),1),px=b(Xt(),1),tn=b(at(),1);function ut(e){var r,t,n,i=2;for(typeof lx.default<"u"&&(t=fx.default,n=px.default);i--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Ai(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Ai(e){function r(t){if(Object(t)!==t)return tn.default.reject(new TypeError(t+" is not an object."));var n=t.done;return tn.default.resolve(t.value).then(function(i){return{value:i,done:n}})}return Ai=function(n){this.s=n,this.n=n.next},Ai.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var i=this.s.return;return i===void 0?tn.default.resolve({value:n,done:!0}):r(i.apply(this.s,arguments))},throw:function(n){var i=this.s.return;return i===void 0?tn.default.reject(n):r(i.apply(this.s,arguments))}},new Ai(e)}var ED=b(se(),1);var gD=b(se(),1),qD=b(Cx(),1),xD=b(Ix(),1),SD=b(Qx(),1),wD=b(mS(),1),TD=b(ns(),1);var Ms=b(se(),1);var b3=b(se(),1);var as=b(se(),1);function nn(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function PS(e,r){return nn(e.startChunk,r.startChunk)&&nn(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function kr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var is=b(zt(),1);var an=b(Ee(),1),_S=b(Xt(),1);function Ge(e){"@babel/helpers - typeof";return Ge=typeof an.default=="function"&&typeof _S.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof an.default=="function"&&r.constructor===an.default&&r!==an.default.prototype?"symbol":typeof r},Ge(e)}var US=b(GS(),1);function WS(e,r){if(Ge(e)!="object"||!e)return e;var t=e[US.default];if(t!==void 0){var n=t.call(e,r||"default");if(Ge(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Ni(e){var r=WS(e,"string");return Ge(r)=="symbol"?r:r+""}function HS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,is.default)(e,Ni(n.key),n)}}function on(e,r,t){return r&&HS(e.prototype,r),t&&HS(e,t),(0,is.default)(e,"prototype",{writable:!1}),e}var KS=b(zt(),1);function Ir(e,r,t){return(r=Ni(r))in e?(0,KS.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var zS=b(Hr(),1);var Mi="Iterator exhausted before seek ended.",un=function(){function e(r){kr(this,e),this.chunker=r,Ir(this,"currentChunkPosition",0),Ir(this,"offsetInChunk",0),this.seekTo(0)}return on(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,i)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!nn(this.currentChunk,n);){var p=this._readToPreviousChunk(),v=Be(p,2),d=v[0],m=v[1];if(t&&(u=d+u),m===null)throw new RangeError(Mi)}else for(;!nn(this.currentChunk,n);){var c=this._readToNextChunk(),s=Be(c,2),l=s[0],f=s[1];if(t&&(u+=l),f===null)throw new RangeError(Mi)}var h=this.currentChunkPosition+i;if(!t)this.seekTo(h);else return h>=this.position?u+=this.readTo(h):h>=o?(this.seekTo(h),u=(0,zS.default)(u).call(u,0,h-o)):(this.seekTo(o),u=this.readTo(h)),u}},{key:"_readOrSeekTo",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var c=this.currentChunkPosition+this.currentChunk.data.length;if(c<=n){var s=this._readToNextChunk(),l=Be(s,2),f=l[0],p=l[1];if(t&&(u+=f),p===null){if(this.position===n||o)break;throw new RangeError(Mi)}}else{var v=i?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,v)),this.offsetInChunk=v,i&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=i?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var m=this._readToPreviousChunk(),h=Be(m,2),y=h[0],q=h[1];if(t&&(u=y+u),q===null){if(o)break;throw new RangeError(Mi)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,i=this.chunker.nextChunk();return i!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,i]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function YS(e,r){return os.apply(this,arguments)}function os(){return os=Cr(as.default.mark(function e(r,t){var n,i,o,u,c,s,l,f,p,v,d,m,h,y,q,g,k,C,S,T,w,O,j=arguments;return as.default.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:n=j.length>2&&j[2]!==void 0?j[2]:{},i=n.minimalContext,o=i===void 0?!1:i,u=n.minimumQuoteLength,c=u===void 0?0:u,s=n.maxWordLength,l=s===void 0?50:s,f=new un(t()),p=new un(t()),f.seekToChunk(r.startChunk,r.startIndex),v=f.readToChunk(r.endChunk,r.endIndex),d="",m="",h=function(){return d.length+v.length+m.length},h()<c&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),y=Math.floor((c-h())/2),d=f.read(-y,!1,!0)+d,h()<c&&(f.seekToChunk(r.endChunk,r.endIndex+m.length),q=c-h(),m=m+f.read(q,!1,!0),h()<c&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),g=c-h(),d=f.read(-g,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=ji(f,l,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+m.length),m=m+ji(f,l,!1));case 11:return k={type:"TextQuoteSelector",exact:v,prefix:d,suffix:m},C=$i(k)(t()),I.next=16,C.next();case 16:if(S=I.sent,!(!S.done&&PS(S.value,r))){I.next=21;break}return I.next=20,C.next();case 20:S=I.sent;case 21:if(!S.done){I.next=23;break}return I.abrupt("return",k);case 23:if(T=S.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),p.seekToChunk(T.startChunk,T.startIndex-d.length),w=VS(f,p,!0),w!==void 0&&!o&&(w=ji(f,l,!0)+w),f.seekToChunk(r.endChunk,r.endIndex+m.length),p.seekToChunk(T.endChunk,T.endIndex+m.length),O=VS(f,p,!1),O!==void 0&&!o&&(O=O+ji(f,l,!1)),!o){I.next=44;break}if(!(w!==void 0&&(O===void 0||w.length<=O.length))){I.next=37;break}d=w+d,I.next=42;break;case 37:if(O===void 0){I.next=41;break}m=m+O,I.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:I.next=46;break;case 44:w!==void 0&&(d=w+d),O!==void 0&&(m=m+O);case 46:I.next=11;break;case 48:case"end":return I.stop()}},e)})),os.apply(this,arguments)}function VS(e,r,t){for(var n="";;){var i=void 0;try{i=e.read(t?-1:1)}catch{return}n=t?i+n:n+i;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(i!==o)return n}}function ji(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var i=void 0;try{i=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(PD(i)){e.seekBy(t?1:-1);break}n=t?i+n:n+i}return n}function PD(e){return/^\s+$/.test(e)}var jw=b(Hr(),1),$w=b(Ln(),1),Lw=b(ei(),1),Fw=b(ri(),1),Dw=b(ti(),1);var cs=b(se(),1),Bw=b(bw(),1),Gw=b(Aw(),1);function Nw(e,r){var t;if(typeof Lw.default>"u"||(0,Fw.default)(e)==null){if(Array.isArray(e)||(t=p3(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,c;return{s:function(){t=(0,Dw.default)(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){u=!0,c=l},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw c}}}}function p3(e,r){var t;if(e){if(typeof e=="string")return Mw(e,r);var n=(0,jw.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,$w.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mw(e,r)}}function Mw(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function $i(e){return function(){var r=Ce(cs.default.mark(function n(i){var o,u,c,s,l,f,p,v,d,m,h,y,q,g,k,C,S,T,w,O,j,xe,I,ee,Se,Q,F;return cs.default.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:o=e.exact,u=e.prefix||"",c=e.suffix||"",s=u+o+c,l=[],f=!0;case 6:p=i.currentChunk,v=p.data,d=[],m=Nw(l),E.prev=10,m.s();case 12:if((h=m.n()).done){E.next=27;break}if(y=h.value,q=y.charactersMatched,y.endChunk===void 0&&(g=u.length+o.length-q,g<=v.length&&(y.endChunk=p,y.endIndex=g)),y.startChunk===void 0&&(k=u.length-q,(k<v.length||y.endChunk!==void 0)&&(y.startChunk=p,y.startIndex=k)),C=s.length-q,!(C<=v.length)){E.next=24;break}if(!(0,Bw.default)(v).call(v,s.substring(q))){E.next=22;break}return E.next=22,y;case 22:E.next=25;break;case 24:v===s.substring(q,q+v.length)&&(y.charactersMatched+=v.length,d.push(y));case 25:E.next=12;break;case 27:E.next=32;break;case 29:E.prev=29,E.t0=E.catch(10),m.e(E.t0);case 32:return E.prev=32,m.f(),E.finish(32);case 35:if(l=d,!(s.length<=v.length)){E.next=49;break}S=0;case 38:if(!(S<=v.length)){E.next=49;break}if(T=v.indexOf(s,S),T!==-1){E.next=42;break}return E.abrupt("break",49);case 42:if(S=T+1,!(T===0&&s.length===0&&!f)){E.next=45;break}return E.abrupt("continue",38);case 45:return E.next=47,{startChunk:p,startIndex:T+u.length,endChunk:p,endIndex:T+u.length+o.length};case 47:E.next=38;break;case 49:for(w=[],O=Math.max(v.length-s.length+1,0),j=function(ze){var zs=v[ze];w=(0,Gw.default)(w).call(w,function(iC){return zs===s[ze-iC]}),zs===s[0]&&w.push(ze)},xe=O;xe<v.length;xe++)j(xe);I=Nw(w);try{for(I.s();!(ee=I.n()).done;)Se=ee.value,Q=v.length-Se,F={charactersMatched:Q},Q>=u.length+o.length&&(F.endChunk=p,F.endIndex=Se+u.length+o.length),(Q>u.length||F.endChunk!==void 0)&&(F.startChunk=p,F.startIndex=Se+u.length),l.push(F)}catch(Ar){I.e(Ar)}finally{I.f()}f=!1;case 56:if(i.nextChunk()!==null){E.next=6;break}case 57:case"end":return E.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var m3=b(se(),1);var v3=b(Hr(),1),d3=b(ns(),1);var y3=b(se(),1);var ln=b(oT(),1);var sT=b(gi(),1),cT=b(zt(),1);var ps=b(qi(),1),uT=b(Kt(),1);function or(e,r){var t;return or=ps.default?(0,uT.default)(t=ps.default).call(t):function(n,i){return n.__proto__=i,n},or(e,r)}function vs(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,sT.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,cT.default)(e,"prototype",{writable:!1}),r&&or(e,r)}function lT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function fT(e,r){if(r&&(Ge(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return lT(e)}var pT=b(qi(),1),vT=b(Kt(),1),ds=b(bi(),1);function Pr(e){var r;return Pr=pT.default?(0,vT.default)(r=ds.default).call(r):function(t){return t.__proto__||(0,ds.default)(t)},Pr(e)}var Ns=b(LE(),1),oO=b(gi(),1);var ZE=b(XE(),1);function eO(e){try{var r;return(0,ZE.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var tO=b(Li(),1),nO=b(Ju(),1),iO=b(Kt(),1);var rO=b(Li(),1);function As(){try{var e=!Boolean.prototype.valueOf.call((0,rO.default)(Boolean,[],function(){}))}catch{}return(As=function(){return!!e})()}function aO(e,r,t){if(As())return tO.default.apply(null,arguments);var n=[null];(0,nO.default)(n).apply(n,r);var i=new((0,iO.default)(e).apply(e,n));return t&&or(i,t.prototype),i}function cn(e){var r=typeof Ns.default=="function"?new Ns.default:void 0;return cn=function(n){if(n===null||!eO(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,i)}function i(){return aO(n,arguments,Pr(this).constructor)}return i.prototype=(0,oO.default)(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),or(i,n)},cn(e)}function cO(e,r){var t=ce(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i=uO(e.startContainer,e.startOffset),o=Be(i,2),u=o[0],c=o[1];for(n.currentNode=u;c===u.length&&n.nextNode();)u=n.currentNode,c=0;e.setStart(u,c);var s=uO(e.endContainer,e.endOffset),l=Be(s,2),f=l[0],p=l[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function uO(e,r){var t;if(sO(e))return[e,r];var n;if(B8(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(sO(n))return[n,0];var i=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=i.createTreeWalker(i,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function sO(e){return e.nodeType===Node.TEXT_NODE}function B8(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function fO(e){var r=G8();return function(){var n=Pr(e),i;if(r){var o=Pr(this).constructor;i=(0,ln.default)(n,arguments,o)}else i=n.apply(this,arguments);return fT(this,i)}}function G8(){if(typeof Reflect>"u"||!ln.default||ln.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,ln.default)(Boolean,[],function(){})),!0}catch{return!1}}var Hi=function(e){vs(t,e);var r=fO(t);function t(n){return kr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(cn(TypeError)),U8=function(e){vs(t,e);var r=fO(t);function t(n){return kr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(cn(TypeError)),_r=function(){function e(r){var t=this;if(kr(this,e),Ir(this,"scope",void 0),Ir(this,"iter",void 0),this.scope=ar(r),this.iter=ce(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!lO(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Hi}}return on(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!lO(t))throw new Hi;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new U8;var n=t===this.scope.startContainer?this.scope.startOffset:0,i=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:i,data:t.data.substring(n,i),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=cO(t,this.scope),i=this.nodeToChunk(n.startContainer),o=n.startOffset-i.startOffset,u=this.nodeToChunk(n.endContainer),c=n.endOffset-u.startOffset;return{startChunk:i,startIndex:o,endChunk:u,endIndex:c}}},{key:"chunkRangeToRange",value:function(t){var n=ce(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function lO(e){return e.nodeType===Node.TEXT_NODE}function pO(e,r){return js.apply(this,arguments)}function js(){return js=Cr(Ms.default.mark(function e(r,t){var n,i,o,u=arguments;return Ms.default.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},i=ar(t??ce(r)),o=new _r(i),s.next=5,YS(o.rangeToChunkRange(r),function(){return new _r(i)},n);case 5:return s.abrupt("return",s.sent);case 6:case"end":return s.stop()}},e)})),js.apply(this,arguments)}var $s=b(se(),1);function vO(e){var r=$i(e);return function(){var t=Ce($s.default.mark(function i(o){var u,c,s,l,f,p,v,d;return $s.default.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:h.prev=0,u=new _r(o),h.next=11;break;case 4:if(h.prev=4,h.t0=h.catch(0),!(h.t0 instanceof Hi)){h.next=10;break}return h.abrupt("return");case 10:throw h.t0;case 11:c=!0,s=!1,h.prev=13,f=ut(r(u));case 15:return h.next=17,nr(f.next());case 17:return p=h.sent,c=p.done,h.next=21,nr(p.value);case 21:if(v=h.sent,c){h.next=29;break}return d=v,h.next=26,u.chunkRangeToRange(d);case 26:c=!0,h.next=15;break;case 29:h.next=35;break;case 31:h.prev=31,h.t1=h.catch(13),s=!0,l=h.t1;case 35:if(h.prev=35,h.prev=36,!(!c&&f.return!=null)){h.next=40;break}return h.next=40,nr(f.return());case 40:if(h.prev=40,!s){h.next=43;break}throw l;case 43:return h.finish(40);case 44:return h.finish(35);case 45:case"end":return h.stop()}},i,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(i){return t.apply(this,arguments)}return n}()}var W8=b(se(),1);var H8=b(se(),1);var eG=b(CO(),1),rG=b(Hr(),1),tG=b(Ln(),1),nG=b(ei(),1),iG=b(ri(),1),aG=b(ti(),1);async function kO(e,r){let t=await pO(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function Ki(e,r){let t=vO({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var st="fb-highlight",IO="fb-highlight-active";var fn=null;function _O(e){fn=e}function zi(e,r){let t=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let n=PO(e,r);t.push(n)}else{let n=uG(e);for(let i=0;i<n.length;i++){let o=n[i],u=document.createRange();o===e.startContainer?(u.setStart(o,e.startOffset),u.setEnd(o,o.textContent.length)):o===e.endContainer?(u.setStart(o,0),u.setEnd(o,e.endOffset)):u.selectNodeContents(o),u.collapsed||t.push(PO(u,r))}}return t}function PO(e,r){let t=e.commonAncestorContainer;for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;let n=t,i=!1,o=null;for(;n;){if(n.tagName==="foreignObject"){i=!1;break}n.tagName==="text"&&n instanceof SVGElement&&(i=!0),n.tagName==="svg"&&(o=n),n=n.parentElement}if(i&&o)return oG(e,r,o);let u=document.createElement("mark");u.className=st,u.dataset.commentId=r,u.style.backgroundColor="rgba(255, 212, 0, 0.35)",u.style.cursor="pointer",u.style.borderRadius="2px",u.addEventListener("click",()=>{fn&&fn(r)});try{e.surroundContents(u)}catch(c){return console.warn("[feedback-layer] Failed to create highlight:",c),null}return u}function oG(e,r,t){try{let n=e.getClientRects();if(n.length===0)return null;let i="http://www.w3.org/2000/svg",o=t.getScreenCTM();if(!o)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let u=e.commonAncestorContainer;for(;u&&u.nodeType!==Node.ELEMENT_NODE;)u=u.parentNode;let c=u,s=null;for(;c&&c!==t;){if(c.tagName==="text"){s=c.parentElement;break}c=c.parentElement}let l=s||t,f=o;l!==t&&l.getScreenCTM&&(f=l.getScreenCTM());let p=document.createElementNS(i,"g");p.setAttribute("class",st),p.setAttribute("data-comment-id",r),p.style.cursor="pointer";for(let y=0;y<n.length;y++){let q=n[y],g=document.createElementNS(i,"rect"),k=t.createSVGPoint();k.x=q.left,k.y=q.top;let C=k.matrixTransform(f.inverse()),S=q.width/f.a,T=q.height/f.d;g.setAttribute("x",C.x),g.setAttribute("y",C.y),g.setAttribute("width",S),g.setAttribute("height",T),g.setAttribute("fill","#ffd400"),g.setAttribute("fill-opacity","0.35"),g.setAttribute("rx","2"),g.setAttribute("ry","2"),g.style.pointerEvents="none",p.appendChild(g)}l&&l!==t?l.appendChild(p):t.appendChild(p);let v=e.commonAncestorContainer;for(;v&&v.nodeType!==Node.ELEMENT_NODE;)v=v.parentNode;let d=new Set,m=v;for(;m&&m!==t;)m.tagName==="text"&&m instanceof SVGElement&&(d.add(m),m.querySelectorAll("tspan").forEach(q=>d.add(q))),m=m.parentElement;let h=y=>{y.preventDefault(),y.stopPropagation(),fn&&fn(r)};return d.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",h),y.dataset.fbCommentId=r}),p}catch(n){return console.warn("[feedback-layer] Failed to create SVG highlight:",n),null}}function Ls(e){document.querySelectorAll(`.${st}[data-comment-id="${e}"]`).forEach(n=>{let i=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)i.removeChild(n);else{for(;n.firstChild;)i.insertBefore(n.firstChild,n);i.removeChild(n),i.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function RO(){document.querySelectorAll(`.${st}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function pn(e){document.querySelectorAll(`.${st}`).forEach(r=>{let t=r.dataset.commentId===e,n="rgba(255, 180, 0, 0.55)",i="rgba(255, 212, 0, 0.35)";t?r.classList.add(IO):r.classList.remove(IO),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(u=>{u.setAttribute("fill",t?n:i)}):r.style.backgroundColor=t?n:i})}function Fs(e){let r=document.querySelector(`.${st}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function uG(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let i=document.createRange();return i.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,i)<0&&e.compareBoundaryPoints(Range.START_TO_END,i)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function AO(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,i)=>{let o=[`**${i+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let c of u)o.push(`  - **[${c.author}]** (reply): ${c.body}`);return o.join(`
`)}).join(`

`)}function NO(e,r){let t=AO(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(i=>!i.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function ur(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var sG=`
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
    background: white;
    border-radius: 12px;
    width: 90%;
    max-width: 800px;
    max-height: 85vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }

  .hf-modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    border-bottom: 1px solid #e5e7eb;
  }

  .hf-modal-header h2 {
    margin: 0;
    font-size: 18px;
    color: #1f2937;
  }

  .hf-modal-close {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #6b7280;
    padding: 0 4px;
  }

  .hf-modal-body {
    padding: 20px;
    overflow-y: auto;
    flex: 1;
  }

  .hf-modal-footer {
    padding: 12px 20px;
    border-top: 1px solid #e5e7eb;
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
    background: #7c3aed;
    color: white;
  }
  .hf-btn-primary:hover { background: #6d28d9; }

  .hf-btn-secondary {
    background: #f3f4f6;
    color: #374151;
  }
  .hf-btn-secondary:hover { background: #e5e7eb; }

  .hf-prompt-area {
    width: 100%;
    min-height: 300px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    padding: 12px;
    font-family: "SF Mono", Monaco, "Cascadia Code", monospace;
    font-size: 12px;
    resize: vertical;
    box-sizing: border-box;
  }

  .hf-status {
    padding: 12px;
    border-radius: 6px;
    margin-bottom: 12px;
    font-size: 14px;
  }

  .hf-status-info { background: #eff6ff; color: #1e40af; }
  .hf-status-success { background: #f0fdf4; color: #166534; }
  .hf-status-error { background: #fef2f2; color: #991b1b; }
`,MO=null,jO=null;function $O(e,r){jO=e,MO=r,cG()}function cG(){let e=document.createElement("style");e.textContent=sG,document.head.appendChild(e)}function LO(){let e=MO(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let i=document.createElement("button");i.className="hf-modal-close",i.textContent="\xD7",i.addEventListener("click",()=>r.remove()),n.appendChild(i);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",p=>{p.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let c=document.querySelector(jO.contentSelector||"body").innerHTML,s=NO(c,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${s.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${ur(s)}</textarea>
  `;let l=document.createElement("button");l.className="hf-btn hf-btn-primary",l.textContent="Copy Prompt",l.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(s),l.textContent="Copied!"}catch{l.textContent="Copy failed"}setTimeout(()=>l.textContent="Copy Prompt",2e3)}),u.appendChild(l);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function FO(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function DO(e,r){return e.length>r?e.slice(0,r)+"...":e}function BO(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var vn=null;function UO(e){vn=document.createElement("div"),vn.className="fb-toast-container",e.appendChild(vn)}function sr(e,r="success"){if(!vn)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>GO(t)),t.appendChild(o)}vn.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>GO(t),r==="error"?8e3:4e3)}function GO(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}var lG=320,zO="feedback-layer-commenter",G=null,he=null,We=null,Ds=null,VO=null,Bs=null,Gs=null,Us=null,Ws=null,dn=null,Hs=!1,YO=[],JO=new Set;function He(){return localStorage.getItem(zO)||""}function QO({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:i,onReaction:o}){VO=e,Bs=r,Gs=t,Us=n,Ws=i,dn=o,bG(),G=document.createElement("div"),G.className="fb-sidebar fb-sidebar-collapsed",G.innerHTML=`
    <div class="fb-sidebar-header">
      <strong>Feedback</strong>
      <div class="fb-sidebar-header-actions">
        <button class="fb-ai-btn" title="Send feedback to Claude">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"/></svg>
        </button>
        <button class="fb-hotkey-help-btn" title="Keyboard shortcuts (?)">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M8 16h8"/></svg>
        </button>
        <button class="fb-sidebar-toggle" title="Close sidebar">&times;</button>
      </div>
    </div>
    <div class="fb-sidebar-content">
      <div class="fb-name-section">
        <label class="fb-label">Your name</label>
        <input type="text" class="fb-name-input" placeholder="Enter your name..."
               value="${ur(He())}">
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
  `;let u=document.createElement("button");u.className="fb-sidebar-tab",u.textContent="Feedback",u.addEventListener("click",()=>hn()),document.body.appendChild(u),document.body.appendChild(G),UO(G),he=G.querySelector(".fb-comment-list"),We=G.querySelector(".fb-form-section");let c=G.querySelector(".fb-name-input");c.addEventListener("input",()=>{localStorage.setItem(zO,c.value.trim())}),G.querySelector(".fb-ai-btn").addEventListener("click",()=>LO()),G.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>eC());let f=G.querySelector(".fb-show-resolved-cb");f.addEventListener("change",()=>{Hs=f.checked,Ke(YO,JO)}),G.querySelector(".fb-hotkey-help-btn").addEventListener("click",()=>XO()),le=document.createElement("div"),le.className="fb-help-overlay",le.style.display="none",le.innerHTML=`
    <div class="fb-help-modal">
      <div class="fb-help-header">
        <strong>Keyboard Shortcuts</strong>
        <button class="fb-help-close">&times;</button>
      </div>
      <table class="fb-help-table">
        <tr><td><kbd>J</kbd></td><td>Next comment thread</td></tr>
        <tr><td><kbd>K</kbd></td><td>Previous comment thread</td></tr>
        <tr><td><kbd>Enter</kbd></td><td>Reply to selected thread</td></tr>
        <tr><td><kbd>Escape</kbd></td><td>Close sidebar</td></tr>
        <tr><td><kbd>?</kbd></td><td>Toggle this help</td></tr>
      </table>
    </div>
  `,G.appendChild(le),le.querySelector(".fb-help-close").addEventListener("click",()=>{le.style.display="none"}),document.addEventListener("keydown",pG)}var le=null,de=-1;function fG(){let e=document.activeElement;if(!e)return!1;let r=e.tagName.toLowerCase();return r==="input"||r==="textarea"||r==="select"||e.isContentEditable}function WO(){return G&&!G.classList.contains("fb-sidebar-collapsed")}function XO(){le&&(le.style.display=le.style.display==="none"?"flex":"none")}function ZO(){return he?Array.from(he.querySelectorAll(".fb-thread > .fb-cmt-card:first-child")):[]}function HO(e){let r=ZO();if(r.length===0)return;de<0?de=e===1?0:r.length-1:(de+=e,de>=r.length&&(de=0),de<0&&(de=r.length-1));let t=r[de],n=t.dataset.id;he.querySelectorAll(".fb-cmt-card").forEach(i=>i.classList.remove("fb-cmt-active")),t.classList.add("fb-cmt-active"),t.scrollIntoView({behavior:"smooth",block:"nearest"}),n&&(pn(n),Fs(n))}function pG(e){if(e.key==="Escape"&&WO()){if(le&&le.style.display!=="none"){le.style.display="none";return}eC();return}if(!fG()&&WO())switch(e.key){case"j":e.preventDefault(),HO(1);break;case"k":e.preventDefault(),HO(-1);break;case"?":e.preventDefault(),XO();break;case"Enter":{let r=ZO();if(de>=0&&de<r.length){let n=r[de].closest(".fb-thread")?.querySelector(".fb-reply-btn");n&&(e.preventDefault(),n.click())}break}}}function hn(){G.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden")}function eC(){G.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden"),de=-1}function rC(e){if(hn(),!He()){let n=G.querySelector(".fb-name-input");n.style.outline="2px solid #ef4444",setTimeout(()=>n.style.outline="",2e3)}Ds=e,We.style.display="",We.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${ur(DO(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `;let r=We.querySelector(".fb-form-textarea");r.focus();let t=()=>{if(!He()){let i=G.querySelector(".fb-name-input");i.focus(),i.style.outline="2px solid #ef4444",setTimeout(()=>i.style.outline="",2e3);return}let n=r.value.trim();n&&(VO({comment:n,commenter:He()}),We.style.display="none",Ds=null)};We.querySelector(".fb-submit-btn").addEventListener("click",t),r.addEventListener("keydown",n=>{n.key==="Enter"&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),t())}),We.querySelector(".fb-cancel-btn").addEventListener("click",()=>{We.style.display="none",Ds=null}),We.scrollIntoView({behavior:"smooth",block:"nearest"})}function Ke(e,r=new Set,t=new Map){YO=e,JO=r,he.innerHTML="";let{topLevel:n,repliesByParent:i}=FO(e),o=n.slice().sort((l,f)=>{let p=t.get(l.id),v=t.get(f.id);return!p||!v?0:p.compareBoundaryPoints(Range.START_TO_START,v)}),u=o.filter(l=>{let f=r.has(l.id),p=l.status==="closed";return f||p&&Hs}),c=Hs?u:u.filter(l=>l.status!=="closed");if(o.length===0){he.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let s=o.filter(l=>!r.has(l.id)&&l.status!=="closed").length;if(c.length===0){s>0?he.innerHTML=`<div class="fb-empty">
        ${u.length} comment(s) resolved.
        ${s>0?`<br>${s} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:he.innerHTML=`<div class="fb-empty">All ${o.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let l of c){let f=document.createElement("div");f.className="fb-thread",f.appendChild(KO(l,!1));let p=i.get(l.id)||[];for(let d of p)f.appendChild(KO(d,!0));let v=document.createElement("button");v.className="fb-reply-btn",v.textContent="Reply",v.addEventListener("click",d=>{d.stopPropagation(),mG(l.id,f,v)}),f.appendChild(v),he.appendChild(f)}}function KO(e,r){let t=e.status==="closed",n=document.createElement("div");n.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":""),n.dataset.id=e.id,n.innerHTML=`
    <div class="fb-cmt-body">${ur(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${ur(e.author)}</span>
      <span class="fb-cmt-time">${BO(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
    <div class="fb-reactions"></div>
  `;let i=n.querySelector(".fb-reactions");return dG(i,e),r||(n.addEventListener("click",o=>{o.target.closest(".fb-cmt-delete")||o.target.closest(".fb-cmt-resolve")||o.target.closest(".fb-cmt-edit")||o.target.closest(".fb-reactions")||(pn(e.id),Fs(e.id),he.querySelectorAll(".fb-cmt-card").forEach(u=>u.classList.remove("fb-cmt-active")),n.classList.add("fb-cmt-active"))}),n.querySelector(".fb-cmt-resolve").addEventListener("click",o=>{o.stopPropagation(),Gs&&Gs(e.id,!t)})),n.querySelector(".fb-cmt-edit").addEventListener("click",o=>{o.stopPropagation(),yG(e,n)}),n.querySelector(".fb-cmt-delete").addEventListener("click",o=>{o.stopPropagation(),Bs&&Bs(e.id)}),n}var Ks={"\u{1F44D}":"Like","\u2764\uFE0F":"Love","\u{1F440}":"Seen","\u{1F389}":"Celebrate","\u{1F914}":"Question","\u{1F602}":"Funny"},vG=Object.keys(Ks);function dG(e,r){let t=r.reactions||[],n=He();for(let o of t){let u=document.createElement("button");u.className="fb-reaction-badge",n&&o.authors.includes(n)&&u.classList.add("fb-reaction-mine");let s=Ks[o.emoji];u.innerHTML=`${o.emoji}<span class="fb-reaction-count">${o.count}</span>`,u.title=(s?s+": ":"")+o.authors.join(", "),u.addEventListener("click",l=>{l.stopPropagation(),dn&&dn(r.id,o.emoji)}),e.appendChild(u)}let i=document.createElement("button");i.className="fb-reaction-add",i.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><circle cx="9" cy="10" r="0.5" fill="currentColor"/><circle cx="15" cy="10" r="0.5" fill="currentColor"/></svg>',i.title="Add reaction",i.addEventListener("click",o=>{o.stopPropagation(),hG(e,r,i)}),e.appendChild(i)}function hG(e,r,t){let n=e.querySelector(".fb-emoji-picker");if(n){n.remove();return}let i=document.createElement("div");i.className="fb-emoji-picker";for(let u of vG){let c=Ks[u],s=document.createElement("button");s.className="fb-emoji-option",s.textContent=u,s.title=c,s.addEventListener("click",l=>{l.stopPropagation(),i.remove(),dn&&dn(r.id,u)}),i.appendChild(s)}e.insertBefore(i,t.nextSibling);let o=u=>{!i.contains(u.target)&&u.target!==t&&(i.remove(),document.removeEventListener("click",o,!0))};setTimeout(()=>document.addEventListener("click",o,!0),0)}function mG(e,r,t){hn();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let i=document.createElement("div");i.className="fb-reply-form",i.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!He()){let s=G.querySelector(".fb-name-input");s.focus(),s.style.outline="2px solid #ef4444",setTimeout(()=>s.style.outline="",2e3);return}let c=i.querySelector("textarea").value.trim();c&&(Us&&Us({parent_id:e,comment:c,commenter:He()}),i.remove(),t.style.display="")};i.querySelector(".fb-reply-submit").addEventListener("click",o);let u=i.querySelector("textarea");u.addEventListener("keydown",c=>{c.key==="Enter"&&(c.metaKey||c.ctrlKey)&&(c.preventDefault(),o())}),i.querySelector(".fb-reply-cancel").addEventListener("click",()=>{i.remove(),t.style.display=""}),r.insertBefore(i,t),u.focus()}function yG(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${ur(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let i=t.querySelector("textarea");i.focus(),i.setSelectionRange(i.value.length,i.value.length);let o=()=>{let u=i.value.trim();u&&Ws&&Ws(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),i.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function tC(e){let r=he.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(he.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function bG(){let e=document.createElement("style");e.textContent=`
    .fb-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: ${lG}px;
      height: 100vh;
      background: #fafafa;
      border-left: 1px solid #e0e0e0;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 14px;
      color: #333;
      transition: transform 0.25s ease;
      box-shadow: -2px 0 8px rgba(0,0,0,0.08);
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
      background: #7c3aed;
      color: white;
      border: none;
      border-radius: 6px 6px 0 0;
      padding: 6px 16px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      box-shadow: -2px 0 6px rgba(0,0,0,0.15);
      transition: opacity 0.2s;
    }
    .fb-sidebar-tab:hover {
      background: #6d28d9;
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
      border-bottom: 1px solid #e0e0e0;
      background: #fff;
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
      color: #7c3aed;
      padding: 4px;
      line-height: 1;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .fb-ai-btn:hover {
      background: #f3f0ff;
    }
    .fb-hotkey-help-btn {
      background: none;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      padding: 4px 6px;
      cursor: pointer;
      color: #666;
      display: flex;
      align-items: center;
    }
    .fb-hotkey-help-btn:hover {
      background: #f3f0ff;
    }
    .fb-help-overlay {
      display: none;
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.4);
      z-index: 1000;
      align-items: center;
      justify-content: center;
    }
    .fb-help-modal {
      background: #fff;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 8px 30px rgba(0,0,0,0.2);
      max-width: 280px;
      width: 90%;
    }
    .fb-help-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }
    .fb-help-close {
      background: none;
      border: none;
      font-size: 18px;
      cursor: pointer;
      color: #666;
    }
    .fb-help-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 13px;
    }
    .fb-help-table td {
      padding: 6px 8px;
      border-bottom: 1px solid #f0f0f0;
    }
    .fb-help-table td:first-child {
      width: 80px;
    }
    .fb-help-table kbd {
      background: #f3f4f6;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      padding: 2px 6px;
      font-family: monospace;
      font-size: 12px;
    }
    .fb-sidebar-toggle {
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: #666;
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
      color: #666;
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .fb-name-input {
      width: 100%;
      padding: 8px 10px;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      font-size: 14px;
      box-sizing: border-box;
    }
    .fb-name-input:focus {
      outline: none;
      border-color: #7c3aed;
      box-shadow: 0 0 0 2px rgba(124,58,237,0.15);
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
      color: #999;
      font-size: 13px;
      text-align: center;
      padding: 24px 12px;
    }
    .fb-cmt-card {
      background: #fff;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 10px 12px;
      cursor: pointer;
      transition: border-color 0.15s;
    }
    .fb-cmt-card:hover {
      border-color: #c4b5fd;
    }
    .fb-cmt-active {
      border-color: #7c3aed;
      box-shadow: 0 0 0 2px rgba(124,58,237,0.12);
    }
    .fb-cmt-quote {
      font-size: 12px;
      color: #888;
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
      color: #999;
    }
    .fb-cmt-author {
      font-weight: 600;
      color: #7c3aed;
    }
    .fb-cmt-resolve {
      background: none;
      border: none;
      color: #aaa;
      cursor: pointer;
      font-size: 14px;
      padding: 0 2px;
      line-height: 1;
      margin-left: auto;
    }
    .fb-cmt-resolve:hover {
      color: #16a34a;
    }
    .fb-cmt-edit {
      background: none;
      border: none;
      color: #aaa;
      cursor: pointer;
      font-size: 14px;
      padding: 0 2px;
      line-height: 1;
    }
    .fb-cmt-edit:hover {
      color: #7c3aed;
    }
    .fb-cmt-delete {
      background: none;
      border: none;
      color: #ccc;
      cursor: pointer;
      font-size: 16px;
      padding: 0 2px;
      line-height: 1;
    }
    .fb-cmt-delete:hover {
      color: #ef4444;
    }
    .fb-cmt-closed {
      opacity: 0.5;
      border-left: 3px solid #16a34a;
    }
    .fb-cmt-closed .fb-cmt-body {
      text-decoration: line-through;
    }
    .fb-cmt-closed .fb-cmt-resolve {
      color: #16a34a;
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
      color: #888;
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
      border-left: 2px solid #e5e7eb;
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
      color: #7c3aed;
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
      background: #fff;
      border: 1px solid #d1d5db;
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
      background: #fff;
      border: 2px solid #7c3aed;
      border-radius: 8px;
      padding: 12px;
    }
    .fb-form-quote {
      font-size: 12px;
      color: #888;
      font-style: italic;
      margin-bottom: 8px;
    }
    .fb-form-textarea {
      width: 100%;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      padding: 8px 10px;
      font-size: 13px;
      font-family: inherit;
      resize: vertical;
      box-sizing: border-box;
    }
    .fb-form-textarea:focus {
      outline: none;
      border-color: #7c3aed;
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
      background: #7c3aed;
      color: white;
    }
    .fb-btn-primary:hover { background: #6d28d9; }
    .fb-btn-cancel {
      background: #f3f4f6;
      color: #555;
    }
    .fb-btn-cancel:hover { background: #e5e7eb; }

    /* Annotate tooltip (appears on text selection) */
    .fb-annotate-tooltip {
      position: absolute;
      z-index: 10001;
      background: #7c3aed;
      color: white;
      border: none;
      border-radius: 18px;
      padding: 8px 16px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      box-shadow: 0 4px 12px rgba(124, 58, 237, 0.4), 0 2px 4px rgba(0,0,0,0.1);
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
      bottom: -6px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 8px solid #7c3aed;
      filter: drop-shadow(0 2px 2px rgba(0,0,0,0.1));
    }
    .fb-annotate-tooltip:hover {
      background: #6d28d9;
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(124, 58, 237, 0.5), 0 2px 6px rgba(0,0,0,0.15);
    }
    .fb-annotate-tooltip:hover::after {
      border-top-color: #6d28d9;
    }
    @keyframes fb-tooltip-appear {
      from {
        opacity: 0;
        transform: translateY(-4px);
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
  `,document.head.appendChild(e)}var ct=null,Vi=null,Yi=null,L=[],Rr=null,Ie=null,me=new Set,Pe=new Map;function gG(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null};Ys(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{ct=document.querySelector(r.contentSelector)||document.body,Vi=r.documentUri||window.location.origin+window.location.pathname,Yi=r.documentId||null,QO({onSubmit:TG,onDelete:IG,onResolve:EG,onReply:OG,onEdit:CG,onReaction:kG}),_O(i=>{hn(),tC(i),pn(i)}),SG(),await t(),qG(),$O(r,()=>L)}catch(i){console.error("[feedback-layer] Boot failed:",i)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function qG(){try{L=await Js(Vi,Yi),me=await xG(L),Ke(L,me,Pe)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),sr(`Failed to load comments: ${e.message}`,"error")}}async function xG(e){RO();let r=new Set;Pe.clear();for(let t of e)if(!t.parent)try{let n=await Ki({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ct);n&&t.status!=="closed"?(zi(n,t.id),r.add(t.id),Pe.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),Pe.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function SG(){document.addEventListener("mouseup",nC),document.addEventListener("keyup",nC)}function nC(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){mn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){mn();return}if(!ct.contains(r.commonAncestorContainer)){mn();return}wG(r)},10)}function wG(e){mn();let r=e.getBoundingClientRect();Ie=document.createElement("button"),Ie.className="fb-annotate-tooltip",Ie.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',Ie.style.top=window.scrollY+r.top-36+"px",Ie.style.left=window.scrollX+r.left+r.width/2-40+"px",Ie.addEventListener("mousedown",async t=>{t.preventDefault(),t.stopPropagation();let n=window.getSelection();if(!n||n.isCollapsed)return;let i=n.getRangeAt(0);try{Rr=await kO(i,ct),rC(Rr.exact)}catch(o){console.error("[feedback-layer] Failed to create selector:",o)}mn()}),document.body.appendChild(Ie)}function mn(){Ie&&(Ie.remove(),Ie=null)}async function TG({comment:e,commenter:r}){if(Rr){try{let t=await Ji({uri:Vi,document:Yi,quote:Rr.exact,prefix:Rr.prefix,suffix:Rr.suffix,body:e,author:r});L.push(t);let n=await Ki({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ct);n&&(zi(n,t.id),me.add(t.id)),Ke(L,me,Pe),window.getSelection().removeAllRanges()}catch(t){console.error("[feedback-layer] Failed to create comment:",t),sr(`Failed to save comment: ${t.message}`,"error")}Rr=null}}async function EG(e,r){try{let n=await Xs(e,r?"closed":"open"),i=L.findIndex(o=>o.id===e);if(i!==-1&&(L[i]=n),r)Ls(e);else{let o=n,u=await Ki({exact:o.quote,prefix:o.prefix,suffix:o.suffix},ct);u?(zi(u,o.id),me.add(o.id)):me.delete(o.id)}Ke(L,me,Pe)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),sr(`Failed to update comment: ${t.message}`,"error")}}async function OG({parent_id:e,comment:r,commenter:t}){try{let n=await Ji({uri:Vi,document:Yi,body:r,author:t,parent:e});L.push(n),Ke(L,me,Pe)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),sr(`Failed to save reply: ${n.message}`,"error")}}async function CG(e,r){try{let t=await Qs(e,{body:r}),n=L.findIndex(i=>i.id===e);n!==-1&&(L[n]=t),Ke(L,me,Pe)}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),sr(`Failed to update comment: ${t.message}`,"error")}}async function kG(e,r){let t=He();if(t)try{let o=L.find(s=>s.id===e)?.reactions?.find(s=>s.emoji===r)?.authors.includes(t),u;o?u=await rc(e,r,t):u=await ec(e,r,t);let c=L.findIndex(s=>s.id===e);c!==-1&&(L[c]={...L[c],reactions:u.reactions}),Ke(L,me,Pe)}catch(n){console.error("[feedback-layer] Failed to toggle reaction:",n),sr(`Failed to update reaction: ${n.message}`,"error")}}async function IG(e){try{await Zs(e),Ls(e),me.delete(e),L=L.filter(r=>r.id!==e&&r.parent!==e),Ke(L,me,Pe)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),sr(`Failed to delete comment: ${r.message}`,"error")}}try{gG()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
