var FeedbackLayer=(()=>{var lO=Object.create;var Zs=Object.defineProperty;var fO=Object.getOwnPropertyDescriptor;var pO=Object.getOwnPropertyNames;var vO=Object.getPrototypeOf,dO=Object.prototype.hasOwnProperty;var i=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var mO=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of pO(r))!dO.call(e,a)&&a!==t&&Zs(e,a,{get:()=>r[a],enumerable:!(n=fO(r,a))||n.enumerable});return e};var b=(e,r,t)=>(t=e!=null?lO(vO(e)):{},mO(r||!e||!e.__esModule?Zs(t,"default",{value:e,enumerable:!0}):t,e));var P=i((BG,uc)=>{"use strict";uc.exports=function(e){try{return!!e()}catch{return!0}}});var Ar=i((GG,sc)=>{"use strict";var hO=P();sc.exports=!hO(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var N=i((UG,fc)=>{"use strict";var cc=Ar(),lc=Function.prototype,ei=lc.call,yO=cc&&lc.bind.bind(ei,ei);fc.exports=cc?yO:function(e){return function(){return ei.apply(e,arguments)}}});var U=i((WG,pc)=>{"use strict";var bO=N();pc.exports=bO({}.isPrototypeOf)});var R=i((ri,vc)=>{"use strict";var lt=function(e){return e&&e.Math===Math&&e};vc.exports=lt(typeof globalThis=="object"&&globalThis)||lt(typeof window=="object"&&window)||lt(typeof self=="object"&&self)||lt(typeof global=="object"&&global)||lt(typeof ri=="object"&&ri)||function(){return this}()||Function("return this")()});var Nr=i((HG,yc)=>{"use strict";var gO=Ar(),hc=Function.prototype,dc=hc.apply,mc=hc.call;yc.exports=typeof Reflect=="object"&&Reflect.apply||(gO?mc.bind(dc):function(){return mc.apply(dc,arguments)})});var Te=i((KG,gc)=>{"use strict";var bc=N(),qO=bc({}.toString),xO=bc("".slice);gc.exports=function(e){return xO(qO(e),8,-1)}});var ft=i((zG,qc)=>{"use strict";var wO=Te(),SO=N();qc.exports=function(e){if(wO(e)==="Function")return SO(e)}});var M=i((VG,xc)=>{"use strict";var ti=typeof document=="object"&&document.all;xc.exports=typeof ti>"u"&&ti!==void 0?function(e){return typeof e=="function"||e===ti}:function(e){return typeof e=="function"}});var W=i((YG,wc)=>{"use strict";var TO=P();wc.exports=!TO(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var G=i((JG,Sc)=>{"use strict";var EO=Ar(),gn=Function.prototype.call;Sc.exports=EO?gn.bind(gn):function(){return gn.apply(gn,arguments)}});var ni=i(Oc=>{"use strict";var Tc={}.propertyIsEnumerable,Ec=Object.getOwnPropertyDescriptor,OO=Ec&&!Tc.call({1:2},1);Oc.f=OO?function(r){var t=Ec(this,r);return!!t&&t.enumerable}:Tc});var Ve=i((XG,Cc)=>{"use strict";Cc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var qn=i((ZG,kc)=>{"use strict";var CO=N(),kO=P(),IO=Te(),ai=Object,_O=CO("".split);kc.exports=kO(function(){return!ai("z").propertyIsEnumerable(0)})?function(e){return IO(e)==="String"?_O(e,""):ai(e)}:ai});var cr=i((e6,Ic)=>{"use strict";Ic.exports=function(e){return e==null}});var lr=i((r6,_c)=>{"use strict";var PO=cr(),RO=TypeError;_c.exports=function(e){if(PO(e))throw new RO("Can't call method on "+e);return e}});var Pe=i((t6,Pc)=>{"use strict";var AO=qn(),NO=lr();Pc.exports=function(e){return AO(NO(e))}});var $=i((n6,Rc)=>{"use strict";var MO=M();Rc.exports=function(e){return typeof e=="object"?e!==null:MO(e)}});var Y=i((a6,Ac)=>{"use strict";Ac.exports={}});var H=i((i6,Mc)=>{"use strict";var ii=Y(),oi=R(),jO=M(),Nc=function(e){return jO(e)?e:void 0};Mc.exports=function(e,r){return arguments.length<2?Nc(ii[e])||Nc(oi[e]):ii[e]&&ii[e][r]||oi[e]&&oi[e][r]}});var Mr=i((o6,$c)=>{"use strict";var LO=R(),jc=LO.navigator,Lc=jc&&jc.userAgent;$c.exports=Lc?String(Lc):""});var jr=i((u6,Wc)=>{"use strict";var Uc=R(),ui=Mr(),Fc=Uc.process,Dc=Uc.Deno,Bc=Fc&&Fc.versions||Dc&&Dc.version,Gc=Bc&&Bc.v8,be,xn;Gc&&(be=Gc.split("."),xn=be[0]>0&&be[0]<4?1:+(be[0]+be[1]));!xn&&ui&&(be=ui.match(/Edge\/(\d+)/),(!be||be[1]>=74)&&(be=ui.match(/Chrome\/(\d+)/),be&&(xn=+be[1])));Wc.exports=xn});var fr=i((s6,Kc)=>{"use strict";var Hc=jr(),$O=P(),FO=R(),DO=FO.String;Kc.exports=!!Object.getOwnPropertySymbols&&!$O(function(){var e=Symbol("symbol detection");return!DO(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Hc&&Hc<41})});var si=i((c6,zc)=>{"use strict";var BO=fr();zc.exports=BO&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Lr=i((l6,Vc)=>{"use strict";var GO=H(),UO=M(),WO=U(),HO=si(),KO=Object;Vc.exports=HO?function(e){return typeof e=="symbol"}:function(e){var r=GO("Symbol");return UO(r)&&WO(r.prototype,KO(e))}});var Ye=i((f6,Yc)=>{"use strict";var zO=String;Yc.exports=function(e){try{return zO(e)}catch{return"Object"}}});var D=i((p6,Jc)=>{"use strict";var VO=M(),YO=Ye(),JO=TypeError;Jc.exports=function(e){if(VO(e))return e;throw new JO(YO(e)+" is not a function")}});var wn=i((v6,Qc)=>{"use strict";var QO=D(),XO=cr();Qc.exports=function(e,r){var t=e[r];return XO(t)?void 0:QO(t)}});var Zc=i((d6,Xc)=>{"use strict";var ci=G(),li=M(),fi=$(),ZO=TypeError;Xc.exports=function(e,r){var t,n;if(r==="string"&&li(t=e.toString)&&!fi(n=ci(t,e))||li(t=e.valueOf)&&!fi(n=ci(t,e))||r!=="string"&&li(t=e.toString)&&!fi(n=ci(t,e)))return n;throw new ZO("Can't convert object to primitive value")}});var ee=i((m6,el)=>{"use strict";el.exports=!0});var nl=i((h6,tl)=>{"use strict";var rl=R(),eC=Object.defineProperty;tl.exports=function(e,r){try{eC(rl,e,{value:r,configurable:!0,writable:!0})}catch{rl[e]=r}return r}});var pt=i((y6,ol)=>{"use strict";var rC=ee(),tC=R(),nC=nl(),al="__core-js_shared__",il=ol.exports=tC[al]||nC(al,{});(il.versions||(il.versions=[])).push({version:"3.48.0",mode:rC?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var pr=i((b6,sl)=>{"use strict";var ul=pt();sl.exports=function(e,r){return ul[e]||(ul[e]=r||{})}});var te=i((g6,cl)=>{"use strict";var aC=lr(),iC=Object;cl.exports=function(e){return iC(aC(e))}});var K=i((q6,ll)=>{"use strict";var oC=N(),uC=te(),sC=oC({}.hasOwnProperty);ll.exports=Object.hasOwn||function(r,t){return sC(uC(r),t)}});var $r=i((x6,fl)=>{"use strict";var cC=N(),lC=0,fC=Math.random(),pC=cC(1.1.toString);fl.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+pC(++lC+fC,36)}});var A=i((w6,vl)=>{"use strict";var vC=R(),dC=pr(),pl=K(),mC=$r(),hC=fr(),yC=si(),Fr=vC.Symbol,pi=dC("wks"),bC=yC?Fr.for||Fr:Fr&&Fr.withoutSetter||mC;vl.exports=function(e){return pl(pi,e)||(pi[e]=hC&&pl(Fr,e)?Fr[e]:bC("Symbol."+e)),pi[e]}});var yl=i((S6,hl)=>{"use strict";var gC=G(),dl=$(),ml=Lr(),qC=wn(),xC=Zc(),wC=A(),SC=TypeError,TC=wC("toPrimitive");hl.exports=function(e,r){if(!dl(e)||ml(e))return e;var t=qC(e,TC),n;if(t){if(r===void 0&&(r="default"),n=gC(t,e,r),!dl(n)||ml(n))return n;throw new SC("Can't convert object to primitive value")}return r===void 0&&(r="number"),xC(e,r)}});var Sn=i((T6,bl)=>{"use strict";var EC=yl(),OC=Lr();bl.exports=function(e){var r=EC(e,"string");return OC(r)?r:r+""}});var Tn=i((E6,ql)=>{"use strict";var CC=R(),gl=$(),vi=CC.document,kC=gl(vi)&&gl(vi.createElement);ql.exports=function(e){return kC?vi.createElement(e):{}}});var di=i((O6,xl)=>{"use strict";var IC=W(),_C=P(),PC=Tn();xl.exports=!IC&&!_C(function(){return Object.defineProperty(PC("div"),"a",{get:function(){return 7}}).a!==7})});var vt=i(Sl=>{"use strict";var RC=W(),AC=G(),NC=ni(),MC=Ve(),jC=Pe(),LC=Sn(),$C=K(),FC=di(),wl=Object.getOwnPropertyDescriptor;Sl.f=RC?wl:function(r,t){if(r=jC(r),t=LC(t),FC)try{return wl(r,t)}catch{}if($C(r,t))return MC(!AC(NC.f,r,t),r[t])}});var mi=i((k6,Tl)=>{"use strict";var DC=P(),BC=M(),GC=/#|\.prototype\./,dt=function(e,r){var t=WC[UC(e)];return t===KC?!0:t===HC?!1:BC(r)?DC(r):!!r},UC=dt.normalize=function(e){return String(e).replace(GC,".").toLowerCase()},WC=dt.data={},HC=dt.NATIVE="N",KC=dt.POLYFILL="P";Tl.exports=dt});var J=i((I6,Ol)=>{"use strict";var El=ft(),zC=D(),VC=Ar(),YC=El(El.bind);Ol.exports=function(e,r){return zC(e),r===void 0?e:VC?YC(e,r):function(){return e.apply(r,arguments)}}});var hi=i((_6,Cl)=>{"use strict";var JC=W(),QC=P();Cl.exports=JC&&QC(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var Z=i((P6,kl)=>{"use strict";var XC=$(),ZC=String,ek=TypeError;kl.exports=function(e){if(XC(e))return e;throw new ek(ZC(e)+" is not an object")}});var ne=i(_l=>{"use strict";var rk=W(),tk=di(),nk=hi(),En=Z(),Il=Sn(),ak=TypeError,yi=Object.defineProperty,ik=Object.getOwnPropertyDescriptor,bi="enumerable",gi="configurable",qi="writable";_l.f=rk?nk?function(r,t,n){if(En(r),t=Il(t),En(n),typeof r=="function"&&t==="prototype"&&"value"in n&&qi in n&&!n[qi]){var a=ik(r,t);a&&a[qi]&&(r[t]=n.value,n={configurable:gi in n?n[gi]:a[gi],enumerable:bi in n?n[bi]:a[bi],writable:!1})}return yi(r,t,n)}:yi:function(r,t,n){if(En(r),t=Il(t),En(n),tk)try{return yi(r,t,n)}catch{}if("get"in n||"set"in n)throw new ak("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var Ee=i((A6,Pl)=>{"use strict";var ok=W(),uk=ne(),sk=Ve();Pl.exports=ok?function(e,r,t){return uk.f(e,r,sk(1,t))}:function(e,r,t){return e[r]=t,e}});var x=i((N6,Al)=>{"use strict";var mt=R(),ck=Nr(),lk=ft(),fk=M(),pk=vt().f,vk=mi(),Dr=Y(),dk=J(),Br=Ee(),Rl=K();pt();var mk=function(e){var r=function(t,n,a){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,a)}return ck(e,this,arguments)};return r.prototype=e.prototype,r};Al.exports=function(e,r){var t=e.target,n=e.global,a=e.stat,o=e.proto,u=n?mt:a?mt[t]:mt[t]&&mt[t].prototype,c=n?Dr:Dr[t]||Br(Dr,t,{})[t],s=c.prototype,l,f,p,v,d,h,m,y,g;for(v in r)l=vk(n?v:t+(a?".":"#")+v,e.forced),f=!l&&u&&Rl(u,v),h=c[v],f&&(e.dontCallGetSet?(g=pk(u,v),m=g&&g.value):m=u[v]),d=f&&m?m:r[v],!(!l&&!o&&typeof h==typeof d)&&(e.bind&&f?y=dk(d,mt):e.wrap&&f?y=mk(d):o&&fk(d)?y=lk(d):y=d,(e.sham||d&&d.sham||h&&h.sham)&&Br(y,"sham",!0),Br(c,v,y),o&&(p=t+"Prototype",Rl(Dr,p)||Br(Dr,p,{}),Br(Dr[p],v,d),e.real&&s&&(l||!s[v])&&Br(s,v,d)))}});var Re=i((M6,Nl)=>{"use strict";var hk=Te();Nl.exports=Array.isArray||function(r){return hk(r)==="Array"}});var On=i((j6,jl)=>{"use strict";var yk=A(),bk=yk("toStringTag"),Ml={};Ml[bk]="z";jl.exports=String(Ml)==="[object z]"});var ht=i((L6,Ll)=>{"use strict";var gk=On(),qk=M(),Cn=Te(),xk=A(),wk=xk("toStringTag"),Sk=Object,Tk=Cn(function(){return arguments}())==="Arguments",Ek=function(e,r){try{return e[r]}catch{}};Ll.exports=gk?Cn:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=Ek(r=Sk(e),wk))=="string"?t:Tk?Cn(r):(n=Cn(r))==="Object"&&qk(r.callee)?"Arguments":n}});var wi=i(($6,$l)=>{"use strict";var Ok=N(),Ck=M(),xi=pt(),kk=Ok(Function.toString);Ck(xi.inspectSource)||(xi.inspectSource=function(e){return kk(e)});$l.exports=xi.inspectSource});var bt=i((F6,Ul)=>{"use strict";var Ik=N(),_k=P(),Fl=M(),Pk=ht(),Rk=H(),Ak=wi(),Dl=function(){},Bl=Rk("Reflect","construct"),Si=/^\s*(?:class|function)\b/,Nk=Ik(Si.exec),Mk=!Si.test(Dl),yt=function(r){if(!Fl(r))return!1;try{return Bl(Dl,[],r),!0}catch{return!1}},Gl=function(r){if(!Fl(r))return!1;switch(Pk(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Mk||!!Nk(Si,Ak(r))}catch{return!0}};Gl.sham=!0;Ul.exports=!Bl||_k(function(){var e;return yt(yt.call)||!yt(Object)||!yt(function(){e=!0})||e})?Gl:yt});var Hl=i((D6,Wl)=>{"use strict";var jk=Math.ceil,Lk=Math.floor;Wl.exports=Math.trunc||function(r){var t=+r;return(t>0?Lk:jk)(t)}});var kn=i((B6,Kl)=>{"use strict";var $k=Hl();Kl.exports=function(e){var r=+e;return r!==r||r===0?0:$k(r)}});var Ti=i((G6,zl)=>{"use strict";var Fk=kn(),Dk=Math.max,Bk=Math.min;zl.exports=function(e,r){var t=Fk(e);return t<0?Dk(t+r,0):Bk(t,r)}});var Ei=i((U6,Vl)=>{"use strict";var Gk=kn(),Uk=Math.min;Vl.exports=function(e){var r=Gk(e);return r>0?Uk(r,9007199254740991):0}});var ve=i((W6,Yl)=>{"use strict";var Wk=Ei();Yl.exports=function(e){return Wk(e.length)}});var Gr=i((H6,Jl)=>{"use strict";var Hk=W(),Kk=ne(),zk=Ve();Jl.exports=function(e,r,t){Hk?Kk.f(e,r,zk(0,t)):e[r]=t}});var Ur=i((K6,Ql)=>{"use strict";var Vk=W(),Yk=Re(),Jk=TypeError,Qk=Object.getOwnPropertyDescriptor,Xk=Vk&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();Ql.exports=Xk?function(e,r){if(Yk(e)&&!Qk(e,"length").writable)throw new Jk("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var gt=i((z6,Xl)=>{"use strict";var Zk=P(),e1=A(),r1=jr(),t1=e1("species");Xl.exports=function(e){return r1>=51||!Zk(function(){var r=[],t=r.constructor={};return t[t1]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var vr=i((V6,Zl)=>{"use strict";var n1=N();Zl.exports=n1([].slice)});var tf=i(()=>{"use strict";var a1=x(),ef=Re(),i1=bt(),o1=$(),rf=Ti(),u1=ve(),s1=Pe(),c1=Gr(),l1=Ur(),f1=A(),p1=gt(),v1=vr(),d1=p1("slice"),m1=f1("species"),Oi=Array,h1=Math.max;a1({target:"Array",proto:!0,forced:!d1},{slice:function(r,t){var n=s1(this),a=u1(n),o=rf(r,a),u=rf(t===void 0?a:t,a),c,s,l;if(ef(n)&&(c=n.constructor,i1(c)&&(c===Oi||ef(c.prototype))?c=void 0:o1(c)&&(c=c[m1],c===null&&(c=void 0)),c===Oi||c===void 0))return v1(n,o,u);for(s=new(c===void 0?Oi:c)(h1(u-o,0)),l=0;o<u;o++,l++)o in n&&c1(s,l,n[o]);return l1(s,l),s}})});var se=i((Q6,nf)=>{"use strict";var y1=R(),b1=Y();nf.exports=function(e,r){var t=b1[e+"Prototype"],n=t&&t[r];if(n)return n;var a=y1[e],o=a&&a.prototype;return o&&o[r]}});var of=i((X6,af)=>{"use strict";tf();var g1=se();af.exports=g1("Array","slice")});var sf=i((Z6,uf)=>{"use strict";var q1=U(),x1=of(),Ci=Array.prototype;uf.exports=function(e){var r=e.slice;return e===Ci||q1(Ci,e)&&r===Ci.slice?x1:r}});var lf=i((e8,cf)=>{"use strict";var w1=sf();cf.exports=w1});var pf=i((r8,ff)=>{"use strict";var S1=lf();ff.exports=S1});var df=i((t8,vf)=>{"use strict";var T1=pf();vf.exports=T1});var ki=i((n8,mf)=>{"use strict";mf.exports=df()});var Wr=i((a8,hf)=>{hf.exports=ki()});var Je=i((i8,yf)=>{"use strict";var E1=ht(),O1=String;yf.exports=function(e){if(E1(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return O1(e)}});var xf=i((o8,qf)=>{"use strict";var Ii=N(),C1=kn(),k1=Je(),I1=lr(),_1=Ii("".charAt),bf=Ii("".charCodeAt),P1=Ii("".slice),gf=function(e){return function(r,t){var n=k1(I1(r)),a=C1(t),o=n.length,u,c;return a<0||a>=o?e?"":void 0:(u=bf(n,a),u<55296||u>56319||a+1===o||(c=bf(n,a+1))<56320||c>57343?e?_1(n,a):u:e?P1(n,a,a+2):(u-55296<<10)+(c-56320)+65536)}};qf.exports={codeAt:gf(!1),charAt:gf(!0)}});var Tf=i((u8,Sf)=>{"use strict";var R1=R(),A1=M(),wf=R1.WeakMap;Sf.exports=A1(wf)&&/native code/.test(String(wf))});var qt=i((s8,Of)=>{"use strict";var N1=pr(),M1=$r(),Ef=N1("keys");Of.exports=function(e){return Ef[e]||(Ef[e]=M1(e))}});var Hr=i((c8,Cf)=>{"use strict";Cf.exports={}});var Qe=i((l8,_f)=>{"use strict";var j1=Tf(),If=R(),L1=$(),$1=Ee(),_i=K(),Pi=pt(),F1=qt(),D1=Hr(),kf="Object already initialized",Ri=If.TypeError,B1=If.WeakMap,In,xt,_n,G1=function(e){return _n(e)?xt(e):In(e,{})},U1=function(e){return function(r){var t;if(!L1(r)||(t=xt(r)).type!==e)throw new Ri("Incompatible receiver, "+e+" required");return t}};j1||Pi.state?(ge=Pi.state||(Pi.state=new B1),ge.get=ge.get,ge.has=ge.has,ge.set=ge.set,In=function(e,r){if(ge.has(e))throw new Ri(kf);return r.facade=e,ge.set(e,r),r},xt=function(e){return ge.get(e)||{}},_n=function(e){return ge.has(e)}):(dr=F1("state"),D1[dr]=!0,In=function(e,r){if(_i(e,dr))throw new Ri(kf);return r.facade=e,$1(e,dr,r),r},xt=function(e){return _i(e,dr)?e[dr]:{}},_n=function(e){return _i(e,dr)});var ge,dr;_f.exports={set:In,get:xt,has:_n,enforce:G1,getterFor:U1}});var Af=i((f8,Rf)=>{"use strict";var Ai=W(),W1=K(),Pf=Function.prototype,H1=Ai&&Object.getOwnPropertyDescriptor,Ni=W1(Pf,"name"),K1=Ni&&function(){}.name==="something",z1=Ni&&(!Ai||Ai&&H1(Pf,"name").configurable);Rf.exports={EXISTS:Ni,PROPER:K1,CONFIGURABLE:z1}});var Mi=i((p8,Mf)=>{"use strict";var V1=Pe(),Y1=Ti(),J1=ve(),Nf=function(e){return function(r,t,n){var a=V1(r),o=J1(a);if(o===0)return!e&&-1;var u=Y1(n,o),c;if(e&&t!==t){for(;o>u;)if(c=a[u++],c!==c)return!0}else for(;o>u;u++)if((e||u in a)&&a[u]===t)return e||u||0;return!e&&-1}};Mf.exports={includes:Nf(!0),indexOf:Nf(!1)}});var Li=i((v8,Lf)=>{"use strict";var Q1=N(),ji=K(),X1=Pe(),Z1=Mi().indexOf,eI=Hr(),jf=Q1([].push);Lf.exports=function(e,r){var t=X1(e),n=0,a=[],o;for(o in t)!ji(eI,o)&&ji(t,o)&&jf(a,o);for(;r.length>n;)ji(t,o=r[n++])&&(~Z1(a,o)||jf(a,o));return a}});var Pn=i((d8,$f)=>{"use strict";$f.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var Rn=i((m8,Ff)=>{"use strict";var rI=Li(),tI=Pn();Ff.exports=Object.keys||function(r){return rI(r,tI)}});var $i=i(Df=>{"use strict";var nI=W(),aI=hi(),iI=ne(),oI=Z(),uI=Pe(),sI=Rn();Df.f=nI&&!aI?Object.defineProperties:function(r,t){oI(r);for(var n=uI(t),a=sI(t),o=a.length,u=0,c;o>u;)iI.f(r,c=a[u++],n[c]);return r}});var Fi=i((y8,Bf)=>{"use strict";var cI=H();Bf.exports=cI("document","documentElement")});var Xe=i((b8,Vf)=>{"use strict";var lI=Z(),fI=$i(),Gf=Pn(),pI=Hr(),vI=Fi(),dI=Tn(),mI=qt(),Uf=">",Wf="<",Bi="prototype",Gi="script",Kf=mI("IE_PROTO"),Di=function(){},zf=function(e){return Wf+Gi+Uf+e+Wf+"/"+Gi+Uf},Hf=function(e){e.write(zf("")),e.close();var r=e.parentWindow.Object;return e=null,r},hI=function(){var e=dI("iframe"),r="java"+Gi+":",t;return e.style.display="none",vI.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(zf("document.F=Object")),t.close(),t.F},An,Nn=function(){try{An=new ActiveXObject("htmlfile")}catch{}Nn=typeof document<"u"?document.domain&&An?Hf(An):hI():Hf(An);for(var e=Gf.length;e--;)delete Nn[Bi][Gf[e]];return Nn()};pI[Kf]=!0;Vf.exports=Object.create||function(r,t){var n;return r!==null?(Di[Bi]=lI(r),n=new Di,Di[Bi]=null,n[Kf]=r):n=Nn(),t===void 0?n:fI.f(n,t)}});var Ui=i((g8,Yf)=>{"use strict";var yI=P();Yf.exports=!yI(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var wt=i((q8,Qf)=>{"use strict";var bI=K(),gI=M(),qI=te(),xI=qt(),wI=Ui(),Jf=xI("IE_PROTO"),Wi=Object,SI=Wi.prototype;Qf.exports=wI?Wi.getPrototypeOf:function(e){var r=qI(e);if(bI(r,Jf))return r[Jf];var t=r.constructor;return gI(t)&&r instanceof t?t.prototype:r instanceof Wi?SI:null}});var Ae=i((x8,Xf)=>{"use strict";var TI=Ee();Xf.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:TI(e,r,t),e}});var Vi=i((w8,rp)=>{"use strict";var EI=P(),OI=M(),CI=$(),kI=Xe(),Zf=wt(),II=Ae(),_I=A(),PI=ee(),zi=_I("iterator"),ep=!1,Ne,Hi,Ki;[].keys&&(Ki=[].keys(),"next"in Ki?(Hi=Zf(Zf(Ki)),Hi!==Object.prototype&&(Ne=Hi)):ep=!0);var RI=!CI(Ne)||EI(function(){var e={};return Ne[zi].call(e)!==e});RI?Ne={}:PI&&(Ne=kI(Ne));OI(Ne[zi])||II(Ne,zi,function(){return this});rp.exports={IteratorPrototype:Ne,BUGGY_SAFARI_ITERATORS:ep}});var np=i((S8,tp)=>{"use strict";var AI=On(),NI=ht();tp.exports=AI?{}.toString:function(){return"[object "+NI(this)+"]"}});var Me=i((T8,ip)=>{"use strict";var MI=On(),jI=ne().f,LI=Ee(),$I=K(),FI=np(),DI=A(),ap=DI("toStringTag");ip.exports=function(e,r,t,n){var a=t?e:e&&e.prototype;a&&($I(a,ap)||jI(a,ap,{configurable:!0,value:r}),n&&!MI&&LI(a,"toString",FI))}});var mr=i((E8,op)=>{"use strict";op.exports={}});var sp=i((O8,up)=>{"use strict";var BI=Vi().IteratorPrototype,GI=Xe(),UI=Ve(),WI=Me(),HI=mr(),KI=function(){return this};up.exports=function(e,r,t,n){var a=r+" Iterator";return e.prototype=GI(BI,{next:UI(+!n,t)}),WI(e,a,!1,!0),HI[a]=KI,e}});var lp=i((C8,cp)=>{"use strict";var zI=N(),VI=D();cp.exports=function(e,r,t){try{return zI(VI(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var pp=i((k8,fp)=>{"use strict";var YI=$();fp.exports=function(e){return YI(e)||e===null}});var dp=i((I8,vp)=>{"use strict";var JI=pp(),QI=String,XI=TypeError;vp.exports=function(e){if(JI(e))return e;throw new XI("Can't set "+QI(e)+" as a prototype")}});var St=i((_8,mp)=>{"use strict";var ZI=lp(),e_=$(),r_=lr(),t_=dp();mp.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=ZI(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(a,o){return r_(a),t_(o),e_(a)&&(e?t(a,o):a.__proto__=o),a}}():void 0)});var Ln=i((P8,Ep)=>{"use strict";var n_=x(),a_=G(),Mn=ee(),Sp=Af(),i_=M(),o_=sp(),hp=wt(),yp=St(),u_=Me(),s_=Ee(),Yi=Ae(),c_=A(),bp=mr(),Tp=Vi(),l_=Sp.PROPER,f_=Sp.CONFIGURABLE,gp=Tp.IteratorPrototype,jn=Tp.BUGGY_SAFARI_ITERATORS,Tt=c_("iterator"),qp="keys",Et="values",xp="entries",wp=function(){return this};Ep.exports=function(e,r,t,n,a,o,u){o_(t,r,n);var c=function(g){if(g===a&&v)return v;if(!jn&&g&&g in f)return f[g];switch(g){case qp:return function(){return new t(this,g)};case Et:return function(){return new t(this,g)};case xp:return function(){return new t(this,g)}}return function(){return new t(this)}},s=r+" Iterator",l=!1,f=e.prototype,p=f[Tt]||f["@@iterator"]||a&&f[a],v=!jn&&p||c(a),d=r==="Array"&&f.entries||p,h,m,y;if(d&&(h=hp(d.call(new e)),h!==Object.prototype&&h.next&&(!Mn&&hp(h)!==gp&&(yp?yp(h,gp):i_(h[Tt])||Yi(h,Tt,wp)),u_(h,s,!0,!0),Mn&&(bp[s]=wp))),l_&&a===Et&&p&&p.name!==Et&&(!Mn&&f_?s_(f,"name",Et):(l=!0,v=function(){return a_(p,this)})),a)if(m={values:c(Et),keys:o?v:c(qp),entries:c(xp)},u)for(y in m)(jn||l||!(y in f))&&Yi(f,y,m[y]);else n_({target:r,proto:!0,forced:jn||l},m);return(!Mn||u)&&f[Tt]!==v&&Yi(f,Tt,v,{name:a}),bp[r]=v,m}});var $n=i((R8,Op)=>{"use strict";Op.exports=function(e,r){return{value:e,done:r}}});var hr=i(()=>{"use strict";var p_=xf().charAt,v_=Je(),kp=Qe(),d_=Ln(),Cp=$n(),Ip="String Iterator",m_=kp.set,h_=kp.getterFor(Ip);d_(String,"String",function(e){m_(this,{type:Ip,string:v_(e),index:0})},function(){var r=h_(this),t=r.string,n=r.index,a;return n>=t.length?Cp(void 0,!0):(a=p_(t,n),r.index+=a.length,Cp(a,!1))})});var Ji=i((M8,Pp)=>{"use strict";var y_=G(),_p=Z(),b_=wn();Pp.exports=function(e,r,t){var n,a;_p(e);try{if(n=b_(e,"return"),!n){if(r==="throw")throw t;return t}n=y_(n,e)}catch(o){a=!0,n=o}if(r==="throw")throw t;if(a)throw n;return _p(n),t}});var Ap=i((j8,Rp)=>{"use strict";var g_=Z(),q_=Ji();Rp.exports=function(e,r,t,n){try{return n?r(g_(t)[0],t[1]):r(t)}catch(a){q_(e,"throw",a)}}});var Qi=i((L8,Np)=>{"use strict";var x_=A(),w_=mr(),S_=x_("iterator"),T_=Array.prototype;Np.exports=function(e){return e!==void 0&&(w_.Array===e||T_[S_]===e)}});var Ot=i(($8,jp)=>{"use strict";var E_=ht(),Mp=wn(),O_=cr(),C_=mr(),k_=A(),I_=k_("iterator");jp.exports=function(e){if(!O_(e))return Mp(e,I_)||Mp(e,"@@iterator")||C_[E_(e)]}});var Fn=i((F8,Lp)=>{"use strict";var __=G(),P_=D(),R_=Z(),A_=Ye(),N_=Ot(),M_=TypeError;Lp.exports=function(e,r){var t=arguments.length<2?N_(e):r;if(P_(t))return R_(__(t,e));throw new M_(A_(e)+" is not iterable")}});var Bp=i((D8,Dp)=>{"use strict";var j_=J(),L_=G(),$_=te(),F_=Ap(),D_=Qi(),B_=bt(),G_=ve(),$p=Gr(),U_=Ur(),W_=Fn(),H_=Ot(),Fp=Array;Dp.exports=function(r){var t=$_(r),n=B_(this),a=arguments.length,o=a>1?arguments[1]:void 0,u=o!==void 0;u&&(o=j_(o,a>2?arguments[2]:void 0));var c=H_(t),s=0,l,f,p,v,d,h;if(c&&!(this===Fp&&D_(c)))for(f=n?new this:[],v=W_(t,c),d=v.next;!(p=L_(d,v)).done;s++)h=u?F_(v,o,[p.value,s],!0):p.value,$p(f,s,h);else for(l=G_(t),f=n?new this(l):Fp(l);l>s;s++)h=u?o(t[s],s):t[s],$p(f,s,h);return U_(f,s),f}});var Zi=i((B8,Hp)=>{"use strict";var K_=A(),Up=K_("iterator"),Wp=!1;try{Gp=0,Xi={next:function(){return{done:!!Gp++}},return:function(){Wp=!0}},Xi[Up]=function(){return this},Array.from(Xi,function(){throw 2})}catch{}var Gp,Xi;Hp.exports=function(e,r){try{if(!r&&!Wp)return!1}catch{return!1}var t=!1;try{var n={};n[Up]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var Kp=i(()=>{"use strict";var z_=x(),V_=Bp(),Y_=Zi(),J_=!Y_(function(e){Array.from(e)});z_({target:"Array",stat:!0,forced:J_},{from:V_})});var Vp=i((W8,zp)=>{"use strict";hr();Kp();var Q_=Y();zp.exports=Q_.Array.from});var Jp=i((H8,Yp)=>{"use strict";var X_=Vp();Yp.exports=X_});var Xp=i((K8,Qp)=>{"use strict";var Z_=Jp();Qp.exports=Z_});var ev=i((z8,Zp)=>{"use strict";var eP=Xp();Zp.exports=eP});var eo=i((V8,rv)=>{"use strict";rv.exports=ev()});var Dn=i((Y8,tv)=>{tv.exports=eo()});var Ct=i((J8,nv)=>{"use strict";var rP=TypeError,tP=9007199254740991;nv.exports=function(e){if(e>tP)throw rP("Maximum allowed index exceeded");return e}});var uv=i((Q8,ov)=>{"use strict";var av=Re(),nP=bt(),aP=$(),iP=A(),oP=iP("species"),iv=Array;ov.exports=function(e){var r;return av(e)&&(r=e.constructor,nP(r)&&(r===iv||av(r.prototype))?r=void 0:aP(r)&&(r=r[oP],r===null&&(r=void 0))),r===void 0?iv:r}});var Bn=i((X8,sv)=>{"use strict";var uP=uv();sv.exports=function(e,r){return new(uP(e))(r===0?0:r)}});var ro=i(()=>{"use strict";var sP=x(),cP=P(),lP=Re(),fP=$(),pP=te(),vP=ve(),cv=Ct(),lv=Gr(),dP=Ur(),mP=Bn(),hP=gt(),yP=A(),bP=jr(),fv=yP("isConcatSpreadable"),gP=bP>=51||!cP(function(){var e=[];return e[fv]=!1,e.concat()[0]!==e}),qP=function(e){if(!fP(e))return!1;var r=e[fv];return r!==void 0?!!r:lP(e)},xP=!gP||!hP("concat");sP({target:"Array",proto:!0,arity:1,forced:xP},{concat:function(r){var t=pP(this),n=mP(t,0),a=0,o,u,c,s,l;for(o=-1,c=arguments.length;o<c;o++)if(l=o===-1?t:arguments[o],qP(l))for(s=vP(l),cv(a+s),u=0;u<s;u++,a++)u in l&&lv(n,a,l[u]);else cv(a+1),lv(n,a++,l);return dP(n,a),n}})});var kt=i(()=>{});var It=i(pv=>{"use strict";var wP=Li(),SP=Pn(),TP=SP.concat("length","prototype");pv.f=Object.getOwnPropertyNames||function(r){return wP(r,TP)}});var to=i((aU,mv)=>{"use strict";var EP=Te(),OP=Pe(),vv=It().f,CP=vr(),dv=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],kP=function(e){try{return vv(e)}catch{return CP(dv)}};mv.exports.f=function(r){return dv&&EP(r)==="Window"?kP(r):vv(OP(r))}});var Gn=i(hv=>{"use strict";hv.f=Object.getOwnPropertySymbols});var Un=i((oU,yv)=>{"use strict";var IP=ne();yv.exports=function(e,r,t){return IP.f(e,r,t)}});var Kr=i(bv=>{"use strict";var _P=A();bv.f=_P});var j=i((sU,qv)=>{"use strict";var gv=Y(),PP=K(),RP=Kr(),AP=ne().f;qv.exports=function(e){var r=gv.Symbol||(gv.Symbol={});PP(r,e)||AP(r,e,{value:RP.f(e)})}});var no=i((cU,xv)=>{"use strict";var NP=G(),MP=H(),jP=A(),LP=Ae();xv.exports=function(){var e=MP("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=jP("toPrimitive");r&&!r[n]&&LP(r,n,function(a){return NP(t,this)},{arity:1})}});var _t=i((lU,Sv)=>{"use strict";var $P=J(),FP=qn(),DP=te(),BP=ve(),wv=Bn(),ao=Gr(),Ze=function(e){var r=e===1,t=e===2,n=e===3,a=e===4,o=e===6,u=e===7,c=e===5||o;return function(s,l,f){for(var p=DP(s),v=FP(p),d=BP(v),h=$P(l,f),m=0,y=0,g=r?wv(s,d):t||u?wv(s,0):void 0,q,I;d>m;m++)if((c||m in v)&&(q=v[m],I=h(q,m,p),e))if(r)ao(g,m,I);else if(I)switch(e){case 3:return!0;case 5:return q;case 6:return m;case 2:ao(g,y++,q)}else switch(e){case 4:return!1;case 7:ao(g,y++,q)}return o?-1:n||a?a:g}};Sv.exports={forEach:Ze(0),map:Ze(1),filter:Ze(2),some:Ze(3),every:Ze(4),find:Ze(5),findIndex:Ze(6),filterReject:Ze(7)}});var Dv=i(()=>{"use strict";var Wn=x(),At=R(),vo=G(),GP=N(),UP=ee(),zr=W(),Vr=fr(),WP=P(),z=K(),HP=U(),so=Z(),Hn=Pe(),mo=Sn(),KP=Je(),co=Ve(),Yr=Xe(),Ov=Rn(),zP=It(),Cv=to(),VP=Gn(),kv=vt(),Iv=ne(),YP=$i(),_v=ni(),io=Ae(),JP=Un(),ho=pr(),QP=qt(),Pv=Hr(),Tv=$r(),XP=A(),ZP=Kr(),eR=j(),rR=no(),tR=Me(),Rv=Qe(),Kn=_t().forEach,ae=QP("hidden"),zn="Symbol",Rt="prototype",nR=Rv.set,Ev=Rv.getterFor(zn),de=Object[Rt],yr=At.Symbol,Pt=yr&&yr[Rt],aR=At.RangeError,iR=At.TypeError,oo=At.QObject,Av=kv.f,br=Iv.f,Nv=Cv.f,oR=_v.f,Mv=GP([].push),je=ho("symbols"),Nt=ho("op-symbols"),uR=ho("wks"),lo=!oo||!oo[Rt]||!oo[Rt].findChild,jv=function(e,r,t){var n=Av(de,r);n&&delete de[r],br(e,r,t),n&&e!==de&&br(de,r,n)},fo=zr&&WP(function(){return Yr(br({},"a",{get:function(){return br(this,"a",{value:7}).a}})).a!==7})?jv:br,uo=function(e,r){var t=je[e]=Yr(Pt);return nR(t,{type:zn,tag:e,description:r}),zr||(t.description=r),t},Vn=function(r,t,n){r===de&&Vn(Nt,t,n),so(r);var a=mo(t);return so(n),z(je,a)?(n.enumerable?(z(r,ae)&&r[ae][a]&&(r[ae][a]=!1),n=Yr(n,{enumerable:co(0,!1)})):(z(r,ae)||br(r,ae,co(1,Yr(null))),r[ae][a]=!0),fo(r,a,n)):br(r,a,n)},yo=function(r,t){so(r);var n=Hn(t),a=Ov(n).concat(Fv(n));return Kn(a,function(o){(!zr||vo(po,n,o))&&Vn(r,o,n[o])}),r},sR=function(r,t){return t===void 0?Yr(r):yo(Yr(r),t)},po=function(r){var t=mo(r),n=vo(oR,this,t);return this===de&&z(je,t)&&!z(Nt,t)?!1:n||!z(this,t)||!z(je,t)||z(this,ae)&&this[ae][t]?n:!0},Lv=function(r,t){var n=Hn(r),a=mo(t);if(!(n===de&&z(je,a)&&!z(Nt,a))){var o=Av(n,a);return o&&z(je,a)&&!(z(n,ae)&&n[ae][a])&&(o.enumerable=!0),o}},$v=function(r){var t=Nv(Hn(r)),n=[];return Kn(t,function(a){!z(je,a)&&!z(Pv,a)&&Mv(n,a)}),n},Fv=function(e){var r=e===de,t=Nv(r?Nt:Hn(e)),n=[];return Kn(t,function(a){z(je,a)&&(!r||z(de,a))&&Mv(n,je[a])}),n};Vr||(yr=function(){if(HP(Pt,this))throw new iR("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:KP(arguments[0]),t=Tv(r),n=function(a){var o=this===void 0?At:this;o===de&&vo(n,Nt,a),z(o,ae)&&z(o[ae],t)&&(o[ae][t]=!1);var u=co(1,a);try{fo(o,t,u)}catch(c){if(!(c instanceof aR))throw c;jv(o,t,u)}};return zr&&lo&&fo(de,t,{configurable:!0,set:n}),uo(t,r)},Pt=yr[Rt],io(Pt,"toString",function(){return Ev(this).tag}),io(yr,"withoutSetter",function(e){return uo(Tv(e),e)}),_v.f=po,Iv.f=Vn,YP.f=yo,kv.f=Lv,zP.f=Cv.f=$v,VP.f=Fv,ZP.f=function(e){return uo(XP(e),e)},zr&&(JP(Pt,"description",{configurable:!0,get:function(){return Ev(this).description}}),UP||io(de,"propertyIsEnumerable",po,{unsafe:!0})));Wn({global:!0,constructor:!0,wrap:!0,forced:!Vr,sham:!Vr},{Symbol:yr});Kn(Ov(uR),function(e){eR(e)});Wn({target:zn,stat:!0,forced:!Vr},{useSetter:function(){lo=!0},useSimple:function(){lo=!1}});Wn({target:"Object",stat:!0,forced:!Vr,sham:!zr},{create:sR,defineProperty:Vn,defineProperties:yo,getOwnPropertyDescriptor:Lv});Wn({target:"Object",stat:!0,forced:!Vr},{getOwnPropertyNames:$v});rR();tR(yr,zn);Pv[ae]=!0});var bo=i((vU,Bv)=>{"use strict";var cR=fr();Bv.exports=cR&&!!Symbol.for&&!!Symbol.keyFor});var Uv=i(()=>{"use strict";var lR=x(),fR=H(),pR=K(),vR=Je(),Gv=pr(),dR=bo(),go=Gv("string-to-symbol-registry"),mR=Gv("symbol-to-string-registry");lR({target:"Symbol",stat:!0,forced:!dR},{for:function(e){var r=vR(e);if(pR(go,r))return go[r];var t=fR("Symbol")(r);return go[r]=t,mR[t]=r,t}})});var Hv=i(()=>{"use strict";var hR=x(),yR=K(),bR=Lr(),gR=Ye(),qR=pr(),xR=bo(),Wv=qR("symbol-to-string-registry");hR({target:"Symbol",stat:!0,forced:!xR},{keyFor:function(r){if(!bR(r))throw new TypeError(gR(r)+" is not a symbol");if(yR(Wv,r))return Wv[r]}})});var zv=i((bU,Kv)=>{"use strict";var wR=$(),SR=Qe().get;Kv.exports=function(r){if(!wR(r))return!1;var t=SR(r);return!!t&&t.type==="RawJSON"}});var Xv=i((gU,Qv)=>{"use strict";var qo=N(),TR=K(),Yn=SyntaxError,ER=parseInt,OR=String.fromCharCode,CR=qo("".charAt),Vv=qo("".slice),Yv=qo(/./.exec),Jv={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},kR=/^[\da-f]{4}$/i,IR=/^[\u0000-\u001F]$/;Qv.exports=function(e,r){for(var t=!0,n="";r<e.length;){var a=CR(e,r);if(a==="\\"){var o=Vv(e,r,r+2);if(TR(Jv,o))n+=Jv[o],r+=2;else if(o==="\\u"){r+=2;var u=Vv(e,r,r+4);if(!Yv(kR,u))throw new Yn("Bad Unicode escape at: "+r);n+=OR(ER(u,16)),r+=4}else throw new Yn('Unknown escape sequence: "'+o+'"')}else if(a==='"'){t=!1,r++;break}else{if(Yv(IR,a))throw new Yn("Bad control character in string literal at: "+r);n+=a,r++}}if(t)throw new Yn("Unterminated string at: "+r);return{value:n,end:r}}});var ed=i((qU,Zv)=>{"use strict";var _R=P();Zv.exports=!_R(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var dd=i(()=>{"use strict";var PR=x(),sd=H(),RR=Nr(),cd=G(),gr=N(),ld=P(),rd=Re(),Qn=M(),AR=zv(),td=Lr(),nd=Te(),NR=Je(),MR=vr(),jR=Xv(),LR=$r(),$R=fr(),xo=ed(),fd=String,er=sd("JSON","stringify"),Jn=gr(/./.exec),So=gr("".charAt),FR=gr("".charCodeAt),DR=gr("".replace),wo=gr("".slice),To=gr([].push),BR=gr(1.1.toString),GR=/[\uD800-\uDFFF]/g,ad=/^[\uD800-\uDBFF]$/,id=/^[\uDC00-\uDFFF]$/,Eo=LR(),od=Eo.length,pd=!$R||ld(function(){var e=sd("Symbol")("stringify detection");return er([e])!=="[null]"||er({a:e})!=="{}"||er(Object(e))!=="{}"}),ud=ld(function(){return er("\uDF06\uD834")!=='"\\udf06\\ud834"'||er("\uDEAD")!=='"\\udead"'}),UR=pd?function(e,r){var t=MR(arguments),n=vd(r);if(!(!Qn(n)&&(e===void 0||td(e))))return t[1]=function(a,o){if(Qn(n)&&(o=cd(n,this,fd(a),o)),!td(o))return o},RR(er,null,t)}:er,WR=function(e,r,t){var n=So(t,r-1),a=So(t,r+1);return Jn(ad,e)&&!Jn(id,a)||Jn(id,e)&&!Jn(ad,n)?"\\u"+BR(FR(e,0),16):e},vd=function(e){if(Qn(e))return e;if(rd(e)){for(var r=e.length,t=[],n=0;n<r;n++){var a=e[n];typeof a=="string"?To(t,a):(typeof a=="number"||nd(a)==="Number"||nd(a)==="String")&&To(t,NR(a))}var o=t.length,u=!0;return function(c,s){if(u)return u=!1,s;if(rd(this))return s;for(var l=0;l<o;l++)if(t[l]===c)return s}}};er&&PR({target:"JSON",stat:!0,arity:3,forced:pd||ud||!xo},{stringify:function(r,t,n){var a=vd(t),o=[],u=UR(r,function(d,h){var m=Qn(a)?cd(a,this,fd(d),h):h;return!xo&&AR(m)?Eo+(To(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(ud&&(u=DR(u,GR,WR)),xo))return u;for(var c="",s=u.length,l=0;l<s;l++){var f=So(u,l);if(f==='"'){var p=jR(u,++l).end-1,v=wo(u,l,p);c+=wo(v,0,od)===Eo?o[wo(v,od)]:'"'+v+'"',l=p}else c+=f}return c}})});var hd=i(()=>{"use strict";var HR=x(),KR=fr(),zR=P(),md=Gn(),VR=te(),YR=!KR||zR(function(){md.f(1)});HR({target:"Object",stat:!0,forced:YR},{getOwnPropertySymbols:function(r){var t=md.f;return t?t(VR(r)):[]}})});var yd=i(()=>{"use strict";Dv();Uv();Hv();dd();hd()});var Oo=i(()=>{"use strict";var JR=j();JR("asyncDispose")});var Co=i(()=>{"use strict";var QR=j();QR("asyncIterator")});var bd=i(()=>{});var ko=i(()=>{"use strict";var XR=j();XR("dispose")});var gd=i(()=>{"use strict";var ZR=j();ZR("hasInstance")});var qd=i(()=>{"use strict";var eA=j();eA("isConcatSpreadable")});var Io=i(()=>{"use strict";var rA=j();rA("iterator")});var xd=i(()=>{"use strict";var tA=j();tA("match")});var wd=i(()=>{"use strict";var nA=j();nA("matchAll")});var Sd=i(()=>{"use strict";var aA=j();aA("replace")});var Td=i(()=>{"use strict";var iA=j();iA("search")});var Ed=i(()=>{"use strict";var oA=j();oA("species")});var Od=i(()=>{"use strict";var uA=j();uA("split")});var _o=i(()=>{"use strict";var sA=j(),cA=no();sA("toPrimitive");cA()});var Cd=i(()=>{"use strict";var lA=H(),fA=j(),pA=Me();fA("toStringTag");pA(lA("Symbol"),"Symbol")});var kd=i(()=>{"use strict";var vA=j();vA("unscopables")});var Id=i(()=>{"use strict";var dA=R(),mA=Me();mA(dA.JSON,"JSON",!0)});var _d=i(()=>{});var Pd=i(()=>{});var Ad=i((fW,Rd)=>{"use strict";ro();kt();yd();Oo();Co();bd();ko();gd();qd();Io();xd();wd();Sd();Td();Ed();Od();_o();Cd();kd();Id();_d();Pd();var hA=Y();Rd.exports=hA.Symbol});var Po=i((pW,Nd)=>{"use strict";Nd.exports=function(){}});var qr=i((vW,Fd)=>{"use strict";var yA=Pe(),Ro=Po(),Md=mr(),Ld=Qe(),bA=ne().f,gA=Ln(),Xn=$n(),qA=ee(),xA=W(),$d="Array Iterator",wA=Ld.set,SA=Ld.getterFor($d);Fd.exports=gA(Array,"Array",function(e,r){wA(this,{type:$d,target:yA(e),index:0,kind:r})},function(){var e=SA(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,Xn(void 0,!0);switch(e.kind){case"keys":return Xn(t,!1);case"values":return Xn(r[t],!1)}return Xn([t,r[t]],!1)},"values");var jd=Md.Arguments=Md.Array;Ro("keys");Ro("values");Ro("entries");if(!qA&&xA&&jd.name!=="values")try{bA(jd,"name",{value:"values"})}catch{}});var Bd=i((dW,Dd)=>{"use strict";Dd.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var xr=i(()=>{"use strict";qr();var TA=Bd(),EA=R(),OA=Me(),Gd=mr();for(Zn in TA)OA(EA[Zn],Zn),Gd[Zn]=Gd.Array;var Zn});var Wd=i((yW,Ud)=>{"use strict";var CA=Ad();xr();Ud.exports=CA});var zd=i(()=>{"use strict";var kA=A(),IA=ne().f,Hd=kA("metadata"),Kd=Function.prototype;Kd[Hd]===void 0&&IA(Kd,Hd,{value:null})});var Vd=i(()=>{"use strict";Oo()});var Yd=i(()=>{"use strict";ko()});var Jd=i(()=>{"use strict";var _A=j();_A("metadata")});var Xd=i((OW,Qd)=>{"use strict";var PA=Wd();zd();Vd();Yd();Jd();Qd.exports=PA});var No=i((CW,Zd)=>{"use strict";var RA=H(),AA=N(),Ao=RA("Symbol"),NA=Ao.keyFor,MA=AA(Ao.prototype.valueOf);Zd.exports=Ao.isRegisteredSymbol||function(r){try{return NA(MA(r))!==void 0}catch{return!1}}});var em=i(()=>{"use strict";var jA=x(),LA=No();jA({target:"Symbol",stat:!0},{isRegisteredSymbol:LA})});var Lo=i((_W,om)=>{"use strict";var $A=pr(),am=H(),FA=N(),DA=Lr(),BA=A(),ra=am("Symbol"),rm=ra.isWellKnownSymbol,im=am("Object","getOwnPropertyNames"),GA=FA(ra.prototype.valueOf),tm=$A("wks");for(ea=0,Mo=im(ra),nm=Mo.length;ea<nm;ea++)try{jo=Mo[ea],DA(ra[jo])&&BA(jo)}catch{}var jo,ea,Mo,nm;om.exports=function(r){if(rm&&rm(r))return!0;try{for(var t=GA(r),n=0,a=im(tm),o=a.length;n<o;n++)if(tm[a[n]]==t)return!0}catch{}return!1}});var um=i(()=>{"use strict";var UA=x(),WA=Lo();UA({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:WA})});var sm=i(()=>{"use strict";var HA=j();HA("customMatcher")});var cm=i(()=>{"use strict";var KA=j();KA("observable")});var lm=i(()=>{"use strict";var zA=x(),VA=No();zA({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:VA})});var fm=i(()=>{"use strict";var YA=x(),JA=Lo();YA({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:JA})});var pm=i(()=>{"use strict";var QA=j();QA("matcher")});var vm=i(()=>{"use strict";var XA=j();XA("metadataKey")});var dm=i(()=>{"use strict";var ZA=j();ZA("patternMatch")});var mm=i(()=>{"use strict";var e2=j();e2("replaceAll")});var ym=i((YW,hm)=>{"use strict";var r2=Xd();em();um();sm();cm();lm();fm();pm();vm();dm();mm();hm.exports=r2});var Oe=i((JW,bm)=>{"use strict";bm.exports=ym()});var ta=i((QW,gm)=>{gm.exports=Oe()});var xm=i((XW,qm)=>{"use strict";qr();hr();var t2=Ot();qm.exports=t2});var Sm=i((ZW,wm)=>{"use strict";var n2=xm();xr();wm.exports=n2});var Em=i((eH,Tm)=>{"use strict";var a2=Sm();Tm.exports=a2});var Cm=i((rH,Om)=>{"use strict";var i2=Em();Om.exports=i2});var $o=i((tH,km)=>{"use strict";km.exports=Cm()});var na=i((nH,Im)=>{Im.exports=$o()});var Pm=i((aH,_m)=>{"use strict";qr();hr();var o2=Fn();_m.exports=o2});var Am=i((iH,Rm)=>{"use strict";var u2=Pm();xr();Rm.exports=u2});var Mm=i((oH,Nm)=>{"use strict";var s2=Am();Nm.exports=s2});var Lm=i((uH,jm)=>{"use strict";var c2=Mm();jm.exports=c2});var Fm=i((sH,$m)=>{"use strict";$m.exports=Lm()});var aa=i((cH,Dm)=>{Dm.exports=Fm()});var Gm=i((lH,Bm)=>{"use strict";var l2=H(),f2=N(),p2=It(),v2=Gn(),d2=Z(),m2=f2([].concat);Bm.exports=l2("Reflect","ownKeys")||function(r){var t=p2.f(d2(r)),n=v2.f;return n?m2(t,n(r)):t}});var Hm=i((fH,Wm)=>{"use strict";var Um=K(),h2=Gm(),y2=vt(),b2=ne();Wm.exports=function(e,r,t){for(var n=h2(r),a=b2.f,o=y2.f,u=0;u<n.length;u++){var c=n[u];!Um(e,c)&&!(t&&Um(t,c))&&a(e,c,o(r,c))}}});var zm=i((pH,Km)=>{"use strict";var g2=$(),q2=Ee();Km.exports=function(e,r){g2(r)&&"cause"in r&&q2(e,"cause",r.cause)}});var Qm=i((vH,Jm)=>{"use strict";var x2=N(),Vm=Error,w2=x2("".replace),S2=function(e){return String(new Vm(e).stack)}("zxcasd"),Ym=/\n\s*at [^:]*:[^\n]*/,T2=Ym.test(S2);Jm.exports=function(e,r){if(T2&&typeof e=="string"&&!Vm.prepareStackTrace)for(;r--;)e=w2(e,Ym,"");return e}});var Zm=i((dH,Xm)=>{"use strict";var E2=P(),O2=Ve();Xm.exports=!E2(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",O2(1,7)),e.stack!==7):!0})});var th=i((mH,rh)=>{"use strict";var C2=Ee(),k2=Qm(),I2=Zm(),eh=Error.captureStackTrace;rh.exports=function(e,r,t,n){I2&&(eh?eh(e,r):C2(e,"stack",k2(t,n)))}});var me=i((hH,oh)=>{"use strict";var _2=J(),P2=G(),R2=Z(),A2=Ye(),N2=Qi(),M2=ve(),nh=U(),j2=Fn(),L2=Ot(),ah=Ji(),$2=TypeError,ia=function(e,r){this.stopped=e,this.result=r},ih=ia.prototype;oh.exports=function(e,r,t){var n=t&&t.that,a=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),c=!!(t&&t.INTERRUPTED),s=_2(r,n),l,f,p,v,d,h,m,y=function(q){return l&&ah(l,"normal"),new ia(!0,q)},g=function(q){return a?(R2(q),c?s(q[0],q[1],y):s(q[0],q[1])):c?s(q,y):s(q)};if(o)l=e.iterator;else if(u)l=e;else{if(f=L2(e),!f)throw new $2(A2(e)+" is not iterable");if(N2(f)){for(p=0,v=M2(e);v>p;p++)if(d=g(e[p]),d&&nh(ih,d))return d;return new ia(!1)}l=j2(e,f)}for(h=o?e.next:l.next;!(m=P2(h,l)).done;){try{d=g(m.value)}catch(q){ah(l,"throw",q)}if(typeof d=="object"&&d&&nh(ih,d))return d}return new ia(!1)}});var sh=i((yH,uh)=>{"use strict";var F2=Je();uh.exports=function(e,r){return e===void 0?arguments.length<2?"":r:F2(e)}});var lh=i(()=>{"use strict";var D2=x(),B2=U(),G2=wt(),oa=St(),U2=Hm(),ch=Xe(),Fo=Ee(),Do=Ve(),W2=zm(),H2=th(),K2=me(),z2=sh(),V2=A(),Y2=V2("toStringTag"),ua=Error,J2=[].push,Jr=function(r,t){var n=B2(Bo,this),a;oa?a=oa(new ua,n?G2(this):Bo):(a=n?this:ch(Bo),Fo(a,Y2,"Error")),t!==void 0&&Fo(a,"message",z2(t)),H2(a,Jr,a.stack,1),arguments.length>2&&W2(a,arguments[2]);var o=[];return K2(r,J2,{that:o}),Fo(a,"errors",o),a};oa?oa(Jr,ua):U2(Jr,ua,{name:!0});var Bo=Jr.prototype=ch(ua.prototype,{constructor:Do(1,Jr),message:Do(1,""),name:Do(1,"AggregateError")});D2({global:!0,constructor:!0,arity:2},{AggregateError:Jr})});var Go=i(()=>{"use strict";lh()});var Uo=i((wH,fh)=>{"use strict";var Mt=R(),Q2=Mr(),X2=Te(),sa=function(e){return Q2.slice(0,e.length)===e};fh.exports=function(){return sa("Bun/")?"BUN":sa("Cloudflare-Workers")?"CLOUDFLARE":sa("Deno/")?"DENO":sa("Node.js/")?"NODE":Mt.Bun&&typeof Bun.version=="string"?"BUN":Mt.Deno&&typeof Deno.version=="object"?"DENO":X2(Mt.process)==="process"?"NODE":Mt.window&&Mt.document?"BROWSER":"REST"}()});var jt=i((SH,ph)=>{"use strict";var Z2=Uo();ph.exports=Z2==="NODE"});var Wo=i((TH,dh)=>{"use strict";var eN=H(),rN=Un(),tN=A(),nN=W(),vh=tN("species");dh.exports=function(e){var r=eN(e);nN&&r&&!r[vh]&&rN(r,vh,{configurable:!0,get:function(){return this}})}});var ca=i((EH,mh)=>{"use strict";var aN=U(),iN=TypeError;mh.exports=function(e,r){if(aN(r,e))return e;throw new iN("Incorrect invocation")}});var Ho=i((OH,hh)=>{"use strict";var oN=bt(),uN=Ye(),sN=TypeError;hh.exports=function(e){if(oN(e))return e;throw new sN(uN(e)+" is not a constructor")}});var Ko=i((CH,bh)=>{"use strict";var yh=Z(),cN=Ho(),lN=cr(),fN=A(),pN=fN("species");bh.exports=function(e,r){var t=yh(e).constructor,n;return t===void 0||lN(n=yh(t)[pN])?r:cN(n)}});var qh=i((kH,gh)=>{"use strict";var vN=TypeError;gh.exports=function(e,r){if(e<r)throw new vN("Not enough arguments");return e}});var zo=i((IH,xh)=>{"use strict";var dN=Mr();xh.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(dN)});var tu=i((_H,_h)=>{"use strict";var ce=R(),mN=Nr(),hN=J(),wh=M(),yN=K(),Ih=P(),Sh=Fi(),bN=vr(),Th=Tn(),gN=qh(),qN=zo(),xN=jt(),Zo=ce.setImmediate,eu=ce.clearImmediate,wN=ce.process,Vo=ce.Dispatch,SN=ce.Function,Eh=ce.MessageChannel,TN=ce.String,Yo=0,Lt={},Oh="onreadystatechange",$t,wr,Jo,Qo;Ih(function(){$t=ce.location});var ru=function(e){if(yN(Lt,e)){var r=Lt[e];delete Lt[e],r()}},Xo=function(e){return function(){ru(e)}},Ch=function(e){ru(e.data)},kh=function(e){ce.postMessage(TN(e),$t.protocol+"//"+$t.host)};(!Zo||!eu)&&(Zo=function(r){gN(arguments.length,1);var t=wh(r)?r:SN(r),n=bN(arguments,1);return Lt[++Yo]=function(){mN(t,void 0,n)},wr(Yo),Yo},eu=function(r){delete Lt[r]},xN?wr=function(e){wN.nextTick(Xo(e))}:Vo&&Vo.now?wr=function(e){Vo.now(Xo(e))}:Eh&&!qN?(Jo=new Eh,Qo=Jo.port2,Jo.port1.onmessage=Ch,wr=hN(Qo.postMessage,Qo)):ce.addEventListener&&wh(ce.postMessage)&&!ce.importScripts&&$t&&$t.protocol!=="file:"&&!Ih(kh)?(wr=kh,ce.addEventListener("message",Ch,!1)):Oh in Th("script")?wr=function(e){Sh.appendChild(Th("script"))[Oh]=function(){Sh.removeChild(this),ru(e)}}:wr=function(e){setTimeout(Xo(e),0)});_h.exports={set:Zo,clear:eu}});var Ah=i((PH,Rh)=>{"use strict";var Ph=R(),EN=W(),ON=Object.getOwnPropertyDescriptor;Rh.exports=function(e){if(!EN)return Ph[e];var r=ON(Ph,e);return r&&r.value}});var nu=i((RH,Mh)=>{"use strict";var Nh=function(){this.head=null,this.tail=null};Nh.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Mh.exports=Nh});var Lh=i((AH,jh)=>{"use strict";var CN=Mr();jh.exports=/ipad|iphone|ipod/i.test(CN)&&typeof Pebble<"u"});var Fh=i((NH,$h)=>{"use strict";var kN=Mr();$h.exports=/web0s(?!.*chrome)/i.test(kN)});var Kh=i((MH,Hh)=>{"use strict";var Xr=R(),IN=Ah(),Dh=J(),au=tu().set,_N=nu(),PN=zo(),RN=Lh(),AN=Fh(),iu=jt(),Bh=Xr.MutationObserver||Xr.WebKitMutationObserver,Gh=Xr.document,Uh=Xr.process,la=Xr.Promise,su=IN("queueMicrotask"),Qr,ou,uu,fa,Wh;su||(Ft=new _N,Dt=function(){var e,r;for(iu&&(e=Uh.domain)&&e.exit();r=Ft.get();)try{r()}catch(t){throw Ft.head&&Qr(),t}e&&e.enter()},!PN&&!iu&&!AN&&Bh&&Gh?(ou=!0,uu=Gh.createTextNode(""),new Bh(Dt).observe(uu,{characterData:!0}),Qr=function(){uu.data=ou=!ou}):!RN&&la&&la.resolve?(fa=la.resolve(void 0),fa.constructor=la,Wh=Dh(fa.then,fa),Qr=function(){Wh(Dt)}):iu?Qr=function(){Uh.nextTick(Dt)}:(au=Dh(au,Xr),Qr=function(){au(Dt)}),su=function(e){Ft.head||Qr(),Ft.add(e)});var Ft,Dt;Hh.exports=su});var Vh=i((jH,zh)=>{"use strict";zh.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var Sr=i((LH,Yh)=>{"use strict";Yh.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var Tr=i(($H,Jh)=>{"use strict";var NN=R();Jh.exports=NN.Promise});var Zr=i((FH,ey)=>{"use strict";var MN=R(),Bt=Tr(),jN=M(),LN=mi(),$N=wi(),FN=A(),Qh=Uo(),DN=ee(),cu=jr(),Xh=Bt&&Bt.prototype,BN=FN("species"),lu=!1,Zh=jN(MN.PromiseRejectionEvent),GN=LN("Promise",function(){var e=$N(Bt),r=e!==String(Bt);if(!r&&cu===66||DN&&!(Xh.catch&&Xh.finally))return!0;if(!cu||cu<51||!/native code/.test(e)){var t=new Bt(function(o){o(1)}),n=function(o){o(function(){},function(){})},a=t.constructor={};if(a[BN]=n,lu=t.then(function(){})instanceof n,!lu)return!0}return!r&&(Qh==="BROWSER"||Qh==="DENO")&&!Zh});ey.exports={CONSTRUCTOR:GN,REJECTION_EVENT:Zh,SUBCLASSING:lu}});var Ce=i((DH,ty)=>{"use strict";var ry=D(),UN=TypeError,WN=function(e){var r,t;this.promise=new e(function(n,a){if(r!==void 0||t!==void 0)throw new UN("Bad Promise constructor");r=n,t=a}),this.resolve=ry(r),this.reject=ry(t)};ty.exports.f=function(e){return new WN(e)}});var wy=i(()=>{"use strict";var HN=x(),KN=ee(),ma=jt(),rr=R(),zN=Y(),nt=G(),ny=Ae(),ay=St(),VN=Me(),YN=Wo(),JN=D(),da=M(),QN=$(),XN=ca(),ZN=Ko(),cy=tu().set,mu=Kh(),eM=Vh(),rM=Sr(),tM=nu(),ly=Qe(),ha=Tr(),hu=Zr(),fy=Ce(),ya="Promise",py=hu.CONSTRUCTOR,nM=hu.REJECTION_EVENT,aM=hu.SUBCLASSING,fu=ly.getterFor(ya),iM=ly.set,et=ha&&ha.prototype,Er=ha,pa=et,vy=rr.TypeError,pu=rr.document,yu=rr.process,vu=fy.f,oM=vu,uM=!!(pu&&pu.createEvent&&rr.dispatchEvent),dy="unhandledrejection",sM="rejectionhandled",iy=0,my=1,cM=2,bu=1,hy=2,va,oy,yy,uy,by=function(e){var r;return QN(e)&&da(r=e.then)?r:!1},gy=function(e,r){var t=r.value,n=r.state===my,a=n?e.ok:e.fail,o=e.resolve,u=e.reject,c=e.domain,s,l,f;try{a?(n||(r.rejection===hy&&fM(r),r.rejection=bu),a===!0?s=t:(c&&c.enter(),s=a(t),c&&(c.exit(),f=!0)),s===e.promise?u(new vy("Promise-chain cycle")):(l=by(s))?nt(l,s,o,u):o(s)):u(t)}catch(p){c&&!f&&c.exit(),u(p)}},qy=function(e,r){e.notified||(e.notified=!0,mu(function(){for(var t=e.reactions,n;n=t.get();)gy(n,e);e.notified=!1,r&&!e.rejection&&lM(e)}))},xy=function(e,r,t){var n,a;uM?(n=pu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),rr.dispatchEvent(n)):n={promise:r,reason:t},!nM&&(a=rr["on"+e])?a(n):e===dy&&eM("Unhandled promise rejection",t)},lM=function(e){nt(cy,rr,function(){var r=e.facade,t=e.value,n=sy(e),a;if(n&&(a=rM(function(){ma?yu.emit("unhandledRejection",t,r):xy(dy,r,t)}),e.rejection=ma||sy(e)?hy:bu,a.error))throw a.value})},sy=function(e){return e.rejection!==bu&&!e.parent},fM=function(e){nt(cy,rr,function(){var r=e.facade;ma?yu.emit("rejectionHandled",r):xy(sM,r,e.value)})},rt=function(e,r,t){return function(n){e(r,n,t)}},tt=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=cM,qy(e,!0))},du=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new vy("Promise can't be resolved itself");var n=by(r);n?mu(function(){var a={done:!1};try{nt(n,r,rt(du,a,e),rt(tt,a,e))}catch(o){tt(a,o,e)}}):(e.value=r,e.state=my,qy(e,!1))}catch(a){tt({done:!1},a,e)}}};if(py&&(Er=function(r){XN(this,pa),JN(r),nt(va,this);var t=fu(this);try{r(rt(du,t),rt(tt,t))}catch(n){tt(t,n)}},pa=Er.prototype,va=function(r){iM(this,{type:ya,done:!1,notified:!1,parent:!1,reactions:new tM,rejection:!1,state:iy,value:null})},va.prototype=ny(pa,"then",function(r,t){var n=fu(this),a=vu(ZN(this,Er));return n.parent=!0,a.ok=da(r)?r:!0,a.fail=da(t)&&t,a.domain=ma?yu.domain:void 0,n.state===iy?n.reactions.add(a):mu(function(){gy(a,n)}),a.promise}),oy=function(){var e=new va,r=fu(e);this.promise=e,this.resolve=rt(du,r),this.reject=rt(tt,r)},fy.f=vu=function(e){return e===Er||e===yy?new oy(e):oM(e)},!KN&&da(ha)&&et!==Object.prototype)){uy=et.then,aM||ny(et,"then",function(r,t){var n=this;return new Er(function(a,o){nt(uy,n,a,o)}).then(r,t)},{unsafe:!0});try{delete et.constructor}catch{}ay&&ay(et,pa)}HN({global:!0,constructor:!0,wrap:!0,forced:py},{Promise:Er});yy=zN.Promise;VN(Er,ya,!1,!0);YN(ya)});var Gt=i((UH,Sy)=>{"use strict";var pM=Tr(),vM=Zi(),dM=Zr().CONSTRUCTOR;Sy.exports=dM||!vM(function(e){pM.all(e).then(void 0,function(){})})});var Ty=i(()=>{"use strict";var mM=x(),hM=G(),yM=D(),bM=Ce(),gM=Sr(),qM=me(),xM=Gt();mM({target:"Promise",stat:!0,forced:xM},{all:function(r){var t=this,n=bM.f(t),a=n.resolve,o=n.reject,u=gM(function(){var c=yM(t.resolve),s=[],l=0,f=1;qM(r,function(p){var v=l++,d=!1;f++,hM(c,t,p).then(function(h){d||(d=!0,s[v]=h,--f||a(s))},o)}),--f||a(s)});return u.error&&o(u.value),n.promise}})});var Oy=i(()=>{"use strict";var wM=x(),SM=ee(),TM=Zr().CONSTRUCTOR,qu=Tr(),EM=H(),OM=M(),CM=Ae(),Ey=qu&&qu.prototype;wM({target:"Promise",proto:!0,forced:TM,real:!0},{catch:function(e){return this.then(void 0,e)}});!SM&&OM(qu)&&(gu=EM("Promise").prototype.catch,Ey.catch!==gu&&CM(Ey,"catch",gu,{unsafe:!0}));var gu});var Cy=i(()=>{"use strict";var kM=x(),IM=G(),_M=D(),PM=Ce(),RM=Sr(),AM=me(),NM=Gt();kM({target:"Promise",stat:!0,forced:NM},{race:function(r){var t=this,n=PM.f(t),a=n.reject,o=RM(function(){var u=_M(t.resolve);AM(r,function(c){IM(u,t,c).then(n.resolve,a)})});return o.error&&a(o.value),n.promise}})});var ky=i(()=>{"use strict";var MM=x(),jM=Ce(),LM=Zr().CONSTRUCTOR;MM({target:"Promise",stat:!0,forced:LM},{reject:function(r){var t=jM.f(this),n=t.reject;return n(r),t.promise}})});var xu=i((XH,Iy)=>{"use strict";var $M=Z(),FM=$(),DM=Ce();Iy.exports=function(e,r){if($M(e),FM(r)&&r.constructor===e)return r;var t=DM.f(e),n=t.resolve;return n(r),t.promise}});var Ry=i(()=>{"use strict";var BM=x(),GM=H(),_y=ee(),UM=Tr(),Py=Zr().CONSTRUCTOR,WM=xu(),HM=GM("Promise"),KM=_y&&!Py;BM({target:"Promise",stat:!0,forced:_y||Py},{resolve:function(r){return WM(KM&&this===HM?UM:this,r)}})});var Ay=i(()=>{"use strict";wy();Ty();Oy();Cy();ky();Ry()});var wu=i(()=>{"use strict";var zM=x(),VM=G(),YM=D(),JM=Ce(),QM=Sr(),XM=me(),ZM=Gt();zM({target:"Promise",stat:!0,forced:ZM},{allSettled:function(r){var t=this,n=JM.f(t),a=n.resolve,o=n.reject,u=QM(function(){var c=YM(t.resolve),s=[],l=0,f=1;XM(r,function(p){var v=l++,d=!1;f++,VM(c,t,p).then(function(h){d||(d=!0,s[v]={status:"fulfilled",value:h},--f||a(s))},function(h){d||(d=!0,s[v]={status:"rejected",reason:h},--f||a(s))})}),--f||a(s)});return u.error&&o(u.value),n.promise}})});var Su=i(()=>{"use strict";var ej=x(),rj=G(),tj=D(),nj=H(),aj=Ce(),ij=Sr(),oj=me(),uj=Gt(),Ny="No one promise resolved";ej({target:"Promise",stat:!0,forced:uj},{any:function(r){var t=this,n=nj("AggregateError"),a=aj.f(t),o=a.resolve,u=a.reject,c=ij(function(){var s=tj(t.resolve),l=[],f=0,p=1,v=!1;oj(r,function(d){var h=f++,m=!1;p++,rj(s,t,d).then(function(y){m||v||(v=!0,o(y))},function(y){m||v||(m=!0,l[h]=y,--p||u(new n(l,Ny)))})}),--p||u(new n(l,Ny))});return c.error&&u(c.value),a.promise}})});var Eu=i(()=>{"use strict";var sj=x(),cj=R(),lj=Nr(),fj=vr(),pj=Ce(),vj=D(),jy=Sr(),Tu=cj.Promise,My=!1,dj=!Tu||!Tu.try||jy(function(){Tu.try(function(e){My=e===8},8)}).error||!My;sj({target:"Promise",stat:!0,forced:dj},{try:function(e){var r=arguments.length>1?fj(arguments,1):[],t=pj.f(this),n=jy(function(){return lj(vj(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var Ou=i(()=>{"use strict";var mj=x(),hj=Ce();mj({target:"Promise",stat:!0},{withResolvers:function(){var r=hj.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var Dy=i(()=>{"use strict";var yj=x(),bj=ee(),ba=Tr(),gj=P(),$y=H(),Fy=M(),qj=Ko(),Ly=xu(),xj=Ae(),ku=ba&&ba.prototype,wj=!!ba&&gj(function(){ku.finally.call({then:function(){}},function(){})});yj({target:"Promise",proto:!0,real:!0,forced:wj},{finally:function(e){var r=qj(this,$y("Promise")),t=Fy(e);return this.then(t?function(n){return Ly(r,e()).then(function(){return n})}:e,t?function(n){return Ly(r,e()).then(function(){throw n})}:e)}});!bj&&Fy(ba)&&(Cu=$y("Promise").prototype.finally,ku.finally!==Cu&&xj(ku,"finally",Cu,{unsafe:!0}));var Cu});var Gy=i((vK,By)=>{"use strict";Go();qr();kt();Ay();wu();Su();Eu();Ou();Dy();hr();var Sj=Y();By.exports=Sj.Promise});var Wy=i((dK,Uy)=>{"use strict";var Tj=Gy();xr();Uy.exports=Tj});var Hy=i(()=>{"use strict";Eu()});var Ky=i(()=>{"use strict";Ou()});var Vy=i((gK,zy)=>{"use strict";var Ej=Wy();Hy();Ky();zy.exports=Ej});var Yy=i(()=>{"use strict";Go()});var Jy=i(()=>{"use strict";wu()});var Qy=i(()=>{"use strict";Su()});var Zy=i((OK,Xy)=>{"use strict";var Oj=Vy();Yy();Jy();Qy();Xy.exports=Oj});var at=i((CK,eb)=>{"use strict";eb.exports=Zy()});var nb=i((RK,tb)=>{"use strict";Co();var Cj=Kr();tb.exports=Cj.f("asyncIterator")});var ib=i((AK,ab)=>{"use strict";var kj=nb();ab.exports=kj});var ub=i((NK,ob)=>{"use strict";var Ij=ib();ob.exports=Ij});var cb=i((MK,sb)=>{"use strict";var _j=ub();sb.exports=_j});var ga=i((jK,lb)=>{"use strict";lb.exports=cb()});var db=i(()=>{"use strict";var Pj=x(),Rj=P(),Aj=te(),vb=wt(),Nj=Ui(),Mj=Rj(function(){vb(1)});Pj({target:"Object",stat:!0,forced:Mj,sham:!Nj},{getPrototypeOf:function(r){return vb(Aj(r))}})});var hb=i((BK,mb)=>{"use strict";db();var jj=Y();mb.exports=jj.Object.getPrototypeOf});var bb=i((GK,yb)=>{"use strict";var Lj=hb();yb.exports=Lj});var qb=i((UK,gb)=>{"use strict";var $j=bb();gb.exports=$j});var wb=i((WK,xb)=>{"use strict";var Fj=qb();xb.exports=Fj});var qa=i((HK,Sb)=>{"use strict";Sb.exports=wb()});var Eb=i(()=>{"use strict";var Dj=x(),Bj=N(),Gj=Re(),Uj=Bj([].reverse),Tb=[1,2];Dj({target:"Array",proto:!0,forced:String(Tb)===String(Tb.reverse())},{reverse:function(){return Gj(this)&&(this.length=this.length),Uj(this)}})});var Cb=i((VK,Ob)=>{"use strict";Eb();var Wj=se();Ob.exports=Wj("Array","reverse")});var Ib=i((YK,kb)=>{"use strict";var Hj=U(),Kj=Cb(),Pu=Array.prototype;kb.exports=function(e){var r=e.reverse;return e===Pu||Hj(Pu,e)&&r===Pu.reverse?Kj:r}});var Pb=i((JK,_b)=>{"use strict";var zj=Ib();_b.exports=zj});var Ab=i((QK,Rb)=>{"use strict";var Vj=Pb();Rb.exports=Vj});var Mb=i((XK,Nb)=>{"use strict";var Yj=Ab();Nb.exports=Yj});var Lb=i((ZK,jb)=>{"use strict";jb.exports=Mb()});var Ru=i((ez,Ht)=>{function Jj(e,r){this.v=e,this.k=r}Ht.exports=Jj,Ht.exports.__esModule=!0,Ht.exports.default=Ht.exports});var $b=i(()=>{"use strict";var Qj=x(),Xj=W(),Zj=Xe();Qj({target:"Object",stat:!0,sham:!Xj},{create:Zj})});var Db=i((nz,Fb)=>{"use strict";$b();var eL=Y(),rL=eL.Object;Fb.exports=function(r,t){return rL.create(r,t)}});var Gb=i((az,Bb)=>{"use strict";var tL=Db();Bb.exports=tL});var Wb=i((iz,Ub)=>{"use strict";var nL=Gb();Ub.exports=nL});var Kb=i((oz,Hb)=>{"use strict";var aL=Wb();Hb.exports=aL});var xa=i((uz,zb)=>{"use strict";zb.exports=Kb()});var Nu=i((sz,Qb)=>{"use strict";var Yb=N(),iL=D(),oL=$(),uL=K(),Vb=vr(),sL=Ar(),Jb=Function,cL=Yb([].concat),lL=Yb([].join),Au={},fL=function(e,r,t){if(!uL(Au,r)){for(var n=[],a=0;a<r;a++)n[a]="a["+a+"]";Au[r]=Jb("C,a","return new C("+lL(n,",")+")")}return Au[r](e,t)};Qb.exports=sL?Jb.bind:function(r){var t=iL(this),n=t.prototype,a=Vb(arguments,1),o=function(){var c=cL(a,Vb(arguments));return this instanceof o?fL(t,c.length,c):t.apply(r,c)};return oL(n)&&(o.prototype=n),o}});var Zb=i(()=>{"use strict";var pL=x(),Xb=Nu();pL({target:"Function",proto:!0,forced:Function.bind!==Xb},{bind:Xb})});var rg=i((fz,eg)=>{"use strict";Zb();var vL=se();eg.exports=vL("Function","bind")});var ng=i((pz,tg)=>{"use strict";var dL=U(),mL=rg(),Mu=Function.prototype;tg.exports=function(e){var r=e.bind;return e===Mu||dL(Mu,e)&&r===Mu.bind?mL:r}});var ig=i((vz,ag)=>{"use strict";var hL=ng();ag.exports=hL});var ug=i((dz,og)=>{"use strict";var yL=ig();og.exports=yL});var cg=i((mz,sg)=>{"use strict";var bL=ug();sg.exports=bL});var Kt=i((hz,lg)=>{"use strict";lg.exports=cg()});var fg=i(()=>{"use strict";var gL=x(),qL=St();gL({target:"Object",stat:!0},{setPrototypeOf:qL})});var vg=i((gz,pg)=>{"use strict";fg();var xL=Y();pg.exports=xL.Object.setPrototypeOf});var mg=i((qz,dg)=>{"use strict";var wL=vg();dg.exports=wL});var yg=i((xz,hg)=>{"use strict";var SL=mg();hg.exports=SL});var gg=i((wz,bg)=>{"use strict";var TL=yg();bg.exports=TL});var wa=i((Sz,qg)=>{"use strict";qg.exports=gg()});var wg=i(()=>{"use strict";var EL=x(),OL=W(),xg=ne().f;EL({target:"Object",stat:!0,forced:Object.defineProperty!==xg,sham:!OL},{defineProperty:xg})});var Eg=i((Oz,Tg)=>{"use strict";wg();var CL=Y(),Sg=CL.Object,kL=Tg.exports=function(r,t,n){return Sg.defineProperty(r,t,n)};Sg.defineProperty.sham&&(kL.sham=!0)});var Cg=i((Cz,Og)=>{"use strict";var IL=Eg();Og.exports=IL});var Ig=i((kz,kg)=>{"use strict";var _L=Cg();kg.exports=_L});var Pg=i((Iz,_g)=>{"use strict";var PL=Ig();_g.exports=PL});var zt=i((_z,Rg)=>{"use strict";Rg.exports=Pg()});var ju=i((Pz,Le)=>{var RL=zt();function Sa(e,r,t,n){var a=RL;try{a({},"",{})}catch{a=0}Le.exports=Sa=function(u,c,s,l){function f(p,v){Sa(u,p,function(d){return this._invoke(p,v,d)})}c?a?a(u,c,{value:s,enumerable:!l,configurable:!l,writable:!l}):u[c]=s:(f("next",0),f("throw",1),f("return",2))},Le.exports.__esModule=!0,Le.exports.default=Le.exports,Sa(e,r,t,n)}Le.exports=Sa,Le.exports.__esModule=!0,Le.exports.default=Le.exports});var $u=i((Rz,$e)=>{var Ag=Oe(),Lu=xa(),AL=Kt(),NL=qa(),Ng=wa(),Ie=ju();function Mg(){var e,r,t=typeof Ag=="function"?Ag:{},n=t.iterator||"@@iterator",a=t.toStringTag||"@@toStringTag";function o(d,h,m,y){var g=h&&h.prototype instanceof c?h:c,q=Lu(g.prototype);return Ie(q,"_invoke",function(I,k,w){var T,S,O,L=0,we=w||[],_=!1,re={p:0,n:0,v:e,a:Se,f:AL(Se).call(Se,e,4),d:function(F,ye){return T=F,S=0,O=e,re.n=ye,u}};function Se(X,F){for(S=X,O=F,r=0;!_&&L&&!ye&&r<we.length;r++){var ye,E=we[r],Rr=re.p,Ke=E[2];X>3?(ye=Ke===F)&&(O=E[(S=E[4])?5:(S=3,3)],E[4]=E[5]=e):E[0]<=Rr&&((ye=X<2&&Rr<E[1])?(S=0,re.v=F,re.n=E[1]):Rr<Ke&&(ye=X<3||E[0]>F||F>Ke)&&(E[4]=X,E[5]=F,re.n=Ke,S=0))}if(ye||X>1)return u;throw _=!0,F}return function(X,F,ye){if(L>1)throw TypeError("Generator is already running");for(_&&F===1&&Se(F,ye),S=F,O=ye;(r=S<2?e:O)||!_;){T||(S?S<3?(S>1&&(re.n=-1),Se(S,O)):re.n=O:re.v=O);try{if(L=2,T){if(S||(X="next"),r=T[X]){if(!(r=r.call(T,O)))throw TypeError("iterator result is not an object");if(!r.done)return r;O=r.value,S<2&&(S=0)}else S===1&&(r=T.return)&&r.call(T),S<2&&(O=TypeError("The iterator does not provide a '"+X+"' method"),S=1);T=e}else if((r=(_=re.n<0)?O:I.call(k,re))!==u)break}catch(E){T=e,S=1,O=E}finally{L=1}}return{value:r,done:_}}}(d,m,y),!0),q}var u={};function c(){}function s(){}function l(){}r=NL;var f=[][n]?r(r([][n]())):(Ie(r={},n,function(){return this}),r),p=l.prototype=c.prototype=Lu(f);function v(d){return Ng?Ng(d,l):(d.__proto__=l,Ie(d,a,"GeneratorFunction")),d.prototype=Lu(p),d}return s.prototype=l,Ie(p,"constructor",l),Ie(l,"constructor",s),s.displayName="GeneratorFunction",Ie(l,a,"GeneratorFunction"),Ie(p),Ie(p,a,"Generator"),Ie(p,n,function(){return this}),Ie(p,"toString",function(){return"[object Generator]"}),($e.exports=Mg=function(){return{w:o,m:v}},$e.exports.__esModule=!0,$e.exports.default=$e.exports)()}$e.exports=Mg,$e.exports.__esModule=!0,$e.exports.default=$e.exports});var Bu=i((Az,Vt)=>{var ML=Oe(),jL=ga(),LL=Ru(),Fu=ju();function Du(e,r){function t(a,o,u,c){try{var s=e[a](o),l=s.value;return l instanceof LL?r.resolve(l.v).then(function(f){t("next",f,u,c)},function(f){t("throw",f,u,c)}):r.resolve(l).then(function(f){s.value=f,u(s)},function(f){return t("throw",f,u,c)})}catch(f){c(f)}}var n;this.next||(Fu(Du.prototype),Fu(Du.prototype,typeof ML=="function"&&jL||"@asyncIterator",function(){return this})),Fu(this,"_invoke",function(a,o,u){function c(){return new r(function(s,l){t(a,u,s,l)})}return n=n?n.then(c,c):c()},!0)}Vt.exports=Du,Vt.exports.__esModule=!0,Vt.exports.default=Vt.exports});var Gu=i((Nz,Yt)=>{var $L=at(),FL=$u(),DL=Bu();function BL(e,r,t,n,a){return new DL(FL().w(e,r,t,n),a||$L)}Yt.exports=BL,Yt.exports.__esModule=!0,Yt.exports.default=Yt.exports});var jg=i((Mz,Jt)=>{var GL=Gu();function UL(e,r,t,n,a){var o=GL(e,r,t,n,a);return o.next().then(function(u){return u.done?u.value:o.next()})}Jt.exports=UL,Jt.exports.__esModule=!0,Jt.exports.default=Jt.exports});var Fg=i((jz,$g)=>{"use strict";var Lg=Ye(),WL=TypeError;$g.exports=function(e,r){if(!delete e[r])throw new WL("Cannot delete property "+Lg(r)+" of "+Lg(e))}});var Dg=i(()=>{"use strict";var HL=x(),KL=te(),zL=ve(),VL=Ur(),YL=Fg(),JL=Ct(),QL=[].unshift(0)!==1,XL=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},ZL=QL||!XL();HL({target:"Array",proto:!0,arity:1,forced:ZL},{unshift:function(r){var t=KL(this),n=zL(t),a=arguments.length;if(a){JL(n+a);for(var o=n;o--;){var u=o+a;o in t?t[u]=t[o]:YL(t,u)}for(var c=0;c<a;c++)t[c]=arguments[c]}return VL(t,n+a)}})});var Gg=i((Fz,Bg)=>{"use strict";Dg();var e$=se();Bg.exports=e$("Array","unshift")});var Wg=i((Dz,Ug)=>{"use strict";var r$=U(),t$=Gg(),Uu=Array.prototype;Ug.exports=function(e){var r=e.unshift;return e===Uu||r$(Uu,e)&&r===Uu.unshift?t$:r}});var Kg=i((Bz,Hg)=>{"use strict";var n$=Wg();Hg.exports=n$});var Vg=i((Gz,zg)=>{"use strict";var a$=Kg();zg.exports=a$});var Jg=i((Uz,Yg)=>{"use strict";var i$=Vg();Yg.exports=i$});var Xg=i((Wz,Qg)=>{"use strict";Qg.exports=Jg()});var Zg=i((Hz,Qt)=>{var o$=Xg();function u$(e){var r=Object(e),t=[];for(var n in r)o$(t).call(t,n);return function a(){for(;t.length;)if((n=t.pop())in r)return a.value=n,a.done=!1,a;return a.done=!0,a}}Qt.exports=u$,Qt.exports.__esModule=!0,Qt.exports.default=Qt.exports});var rq=i((Kz,eq)=>{"use strict";qr();kt();hr();Io();var s$=Kr();eq.exports=s$.f("iterator")});var nq=i((zz,tq)=>{"use strict";var c$=rq();xr();tq.exports=c$});var iq=i((Vz,aq)=>{"use strict";var l$=nq();aq.exports=l$});var uq=i((Yz,oq)=>{"use strict";var f$=iq();oq.exports=f$});var Xt=i((Jz,sq)=>{"use strict";sq.exports=uq()});var cq=i((Qz,Fe)=>{var Ta=Oe(),p$=Xt();function Wu(e){"@babel/helpers - typeof";return Fe.exports=Wu=typeof Ta=="function"&&typeof p$=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Ta=="function"&&r.constructor===Ta&&r!==Ta.prototype?"symbol":typeof r},Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports,Wu(e)}Fe.exports=Wu,Fe.exports.__esModule=!0,Fe.exports.default=Fe.exports});var lq=i((Xz,Zt)=>{var v$=cq().default,d$=Oe(),m$=Xt();function h$(e){if(e!=null){var r=e[typeof d$=="function"&&m$||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(v$(e)+" is not iterable")}Zt.exports=h$,Zt.exports.__esModule=!0,Zt.exports.default=Zt.exports});var vq=i((Zz,De)=>{var fq=qa(),y$=Lb(),b$=Ru(),g$=$u(),q$=jg(),x$=Gu(),w$=Bu(),S$=Zg(),pq=lq();function Hu(){"use strict";var e=g$(),r=e.m(Hu),t=(fq?fq(r):r.__proto__).constructor;function n(u){var c=typeof u=="function"&&u.constructor;return!!c&&(c===t||(c.displayName||c.name)==="GeneratorFunction")}var a={throw:1,return:2,break:3,continue:3};function o(u){var c,s;return function(l){c||(c={stop:function(){return s(l.a,2)},catch:function(){return l.v},abrupt:function(p,v){return s(l.a,a[p],v)},delegateYield:function(p,v,d){return c.resultName=v,s(l.d,pq(p),d)},finish:function(p){return s(l.f,p)}},s=function(p,v,d){l.p=c.prev,l.n=c.next;try{return p(v,d)}finally{c.next=l.n}}),c.resultName&&(c[c.resultName]=l.v,c.resultName=void 0),c.sent=l.v,c.next=l.n;try{return u.call(this,c)}finally{l.p=c.prev,l.n=c.next}}}return(De.exports=Hu=function(){return{wrap:function(s,l,f,p){return e.w(o(s),l,f,p&&y$(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(s,l){return new b$(s,l)},AsyncIterator:w$,async:function(s,l,f,p,v){return(n(l)?x$:q$)(o(s),l,f,p,v)},keys:S$,values:pq}},De.exports.__esModule=!0,De.exports.default=De.exports)()}De.exports=Hu,De.exports.__esModule=!0,De.exports.default=De.exports});var le=i((eV,dq)=>{var Ea=vq()();dq.exports=Ea;try{regeneratorRuntime=Ea}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=Ea:Function("r","regeneratorRuntime = r")(Ea)}});var Ku=i((Ca,hq)=>{"use strict";Object.defineProperty(Ca,"__esModule",{value:!0});var Oa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},mq=function(){function e(r,t){var n=[],a=!0,o=!1,u=void 0;try{for(var c=r[Symbol.iterator](),s;!(a=(s=c.next()).done)&&(n.push(s.value),!(t&&n.length===t));a=!0);}catch(l){o=!0,u=l}finally{try{!a&&c.return&&c.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Ca.default=T$;function T$(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(a){return a.type==="tag"||a.type==="script"||a.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var a=this.attribs,o=Object.keys(a),u=o.reduce(function(c,s,l){return c[l]={name:s,value:a[s]},c},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var a=[];return nr(this.childTags,function(o){(o.name===n||n==="*")&&a.push(o)}),a}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var a=n.trim().replace(/\s+/g," ").split(" "),o=[];return nr([this],function(u){var c=u.attribs.class;c&&a.every(function(s){return c.indexOf(s)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var a=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=E$(n),u=o.shift(),c=o.length;return u(this).filter(function(s){for(var l=0;l<c;){if(s=o[l](s,a),!s)return!1;l+=1}return!0})}),t.contains||(t.contains=function(n){var a=!1;return nr([this],function(o,u){o===n&&(a=!0,u())}),a}),!0}function E$(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,a=r.split(":"),o=mq(a,2),u=o[0],c=o[1],s=null,l=null;if(function(){switch(!0){case/>/.test(u):l=function(w){return function(T){return T(w.parent)&&w.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");s=function(w){var T=w.attribs.class;return T&&h.every(function(S){return T.indexOf(S)>-1})},l=function(w,T){return n?w.getElementsByClassName(h.join(" ")):typeof w=="function"?w(s):en(w,T,s)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),y=mq(m,2),g=y[0],q=y[1];s=function(w){var T=Object.keys(w.attribs).indexOf(g)>-1;return!!(T&&(!q||w.attribs[g]===q))},l=function(w,T){if(n){var S=function(){var O=[];return nr([w],function(L){s(L)&&O.push(L)}),{v:O}}();if((typeof S>"u"?"undefined":Oa(S))==="object")return S.v}return typeof w=="function"?w(s):en(w,T,s)};break;case/^#/.test(u):var I=u.substr(1);s=function(w){return w.attribs.id===I},l=function(w,T){if(n){var S=function(){var O=[];return nr([w],function(L,we){s(L)&&(O.push(L),we())}),{v:O}}();if((typeof S>"u"?"undefined":Oa(S))==="object")return S.v}return typeof w=="function"?w(s):en(w,T,s)};break;case/\*/.test(u):s=function(w){return!0},l=function(w,T){if(n){var S=function(){var O=[];return nr([w],function(L){return O.push(L)}),{v:O}}();if((typeof S>"u"?"undefined":Oa(S))==="object")return S.v}return typeof w=="function"?w(s):en(w,T,s)};break;default:s=function(w){return w.name===u},l=function(w,T){if(n){var S=function(){var O=[];return nr([w],function(L){s(L)&&O.push(L)}),{v:O}}();if((typeof S>"u"?"undefined":Oa(S))==="object")return S.v}return typeof w=="function"?w(s):en(w,T,s)}}}(),!c)return l;var f=c.match(/-(child|type)\((\d+)\)$/),p=f[1],v=parseInt(f[2],10)-1,d=function(m){if(m){var y=m.parent.childTags;p==="type"&&(y=y.filter(s));var g=y.findIndex(function(q){return q===m});if(g===v)return!0}return!1};return function(m){var y=l(m);return n?y.reduce(function(g,q){return d(q)&&g.push(q),g},[]):d(y)&&y}})}function nr(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&nr(t.childTags,r)})}function en(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}hq.exports=Ca.default});var Ia=i(ka=>{"use strict";Object.defineProperty(ka,"__esModule",{value:!0});ka.convertNodeList=O$;ka.escapeValue=C$;function O$(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function C$(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var Oq=i((_a,Eq)=>{"use strict";Object.defineProperty(_a,"__esModule",{value:!0});_a.default=k$;var qq=Ia(),yq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function k$(e,r){var t=r.root,n=t===void 0?document:t,a=r.skip,o=a===void 0?null:a,u=r.priority,c=u===void 0?["id","class","href","src"]:u,s=r.ignore,l=s===void 0?{}:s,f=[],p=e,v=f.length,d=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(g){return typeof g!="function"?function(q){return q===g}:g}),m=function(q){return o&&h.some(function(I){return I(q)})};for(Object.keys(l).forEach(function(g){g==="class"&&(d=!0);var q=l[g];typeof q!="function"&&(typeof q=="number"&&(q=q.toString()),typeof q=="string"&&(q=new RegExp((0,qq.escapeValue)(q).replace(/\\/g,"\\\\"))),typeof q=="boolean"&&(q=q?/(?:)/:/.^/),l[g]=function(I,k){return q.test(k)})}),d&&function(){var g=l.attribute;l.attribute=function(q,I,k){return l.class(I)||g&&g(q,I,k)}}();p!==n;){if(m(p)!==!0){if(bq(c,p,l,f,n)||gq(p,l,f,n))break;bq(c,p,l,f),f.length===v&&gq(p,l,f),f.length===v&&I$(c,p,l,f)}p=p.parentNode,v=f.length}if(p===n){var y=Sq(c,p,l);f.unshift(y)}return f.join(" ")}function bq(e,r,t,n){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=xq(e,r,t);if(o){var u=a.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function xq(e,r,t){for(var n=r.attributes,a=Object.keys(n).sort(function(m,y){var g=e.indexOf(n[m].name),q=e.indexOf(n[y].name);return q===-1?g===-1?0:-1:g-q}),o=0,u=a.length;o<u;o++){var c=a[o],s=n[c],l=s.name,f=(0,qq.escapeValue)(s.value),p=t[l]||t.attribute,v=yq[l]||yq.attribute;if(!Tq(p,l,f,v)){var d="["+l+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(l==="id"&&(d="#"+f),l==="class")){var h=f.trim().replace(/\s+/g,".");d="."+h}return d}}return null}function gq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,a=wq(e,r);if(a){var o=n.getElementsByTagName(a);if(o.length===1)return t.unshift(a),!0}return!1}function wq(e,r){var t=e.tagName.toLowerCase();return Tq(r.tag,null,t)?null:t}function I$(e,r,t,n){for(var a=r.parentNode,o=a.childTags||a.children,u=0,c=o.length;u<c;u++){var s=o[u];if(s===r){var l=Sq(e,s,t);if(!l)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,s,t,l);var f="> "+l+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function Sq(e,r,t){var n=xq(e,r,t);return n||(n=wq(r,t)),n}function Tq(e,r,t,n){if(!t)return!0;var a=e||n;return a?a(r,t,n):!1}Eq.exports=_a.default});var zu=i((Ra,Cq)=>{"use strict";Object.defineProperty(Ra,"__esModule",{value:!0});Ra.default=N$;var _$=Ku(),P$=A$(_$),R$=Ia();function A$(e){return e&&e.__esModule?e:{default:e}}function N$(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,R$.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,P$.default)(r[0],t),a=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(a.length<2)return Pa("",e,"",r);for(var o=[a.pop()];a.length>1;){var u=a.pop(),c=a.join(" "),s=o.join(" "),l=c+" "+s,f=document.querySelectorAll(l);f.length!==r.length&&o.unshift(Pa(c,u,s,r))}return o.unshift(a[0]),a=o,a[0]=Pa("",a[0],a.slice(1).join(" "),r),a[a.length-1]=Pa(a.slice(0,-1).join(" "),a[a.length-1],"",r),n&&delete global.document,a.join(" ").replace(/>/g,"> ").trim()}function Pa(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var a=r.replace(/=.*$/,"]"),o=""+e+a+t,u=document.querySelectorAll(o);if(it(u,n))r=a;else for(var c=document.querySelectorAll(""+e+a),s=function(){var k=c[l];if(n.some(function(T){return k.contains(T)})){var w=k.tagName.toLowerCase();return o=""+e+w+t,u=document.querySelectorAll(o),it(u,n)&&(r=w),"break"}},l=0,f=c.length;l<f;l++){var o,u,p=s();if(p==="break")break}}if(/>/.test(r)){var v=r.replace(/>/,""),o=""+e+v+t,u=document.querySelectorAll(o);it(u,n)&&(r=v)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);it(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(I){return"."+I}).sort(function(I,k){return I.length-k.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);it(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var y=document.querySelectorAll(""+e+r),g=function(){var k=y[l];if(n.some(function(T){return k.contains(T)})){var w=k.tagName.toLowerCase();return o=""+e+w+t,u=document.querySelectorAll(o),it(u,n)&&(r=w),"break"}},l=0,f=y.length;l<f;l++){var o,u,q=g();if(q==="break")break}}return r}function it(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var a=0;a<t;a++)if(e[a]===n)return!0;return!1})}Cq.exports=Ra.default});var Vu=i(Aa=>{"use strict";Object.defineProperty(Aa,"__esModule",{value:!0});Aa.getCommonAncestor=M$;Aa.getCommonProperties=j$;function M$(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,a=[];e.forEach(function(p,v){for(var d=[];p!==n;)p=p.parentNode,d.unshift(p);a[v]=d}),a.sort(function(p,v){return p.length-v.length});for(var o=a.shift(),u=null,c=function(){var v=o[s],d=a.some(function(h){return!h.some(function(m){return m===v})});if(d)return"break";u=v},s=0,l=o.length;s<l;s++){var f=c();if(f==="break")break}return u}function j$(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,a=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(s){return u.some(function(l){return l===s})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(a!==void 0&&function(){var s=t.attributes,l=Object.keys(s).reduce(function(v,d){var h=s[d],m=h.name;return h&&m!=="class"&&(v[m]=h.value),v},{}),f=Object.keys(l),p=Object.keys(a);f.length?p.length?(a=p.reduce(function(v,d){var h=a[d];return h===l[d]&&(v[d]=h),v},{}),Object.keys(a).length?r.attributes=a:delete r.attributes):r.attributes=l:delete r.attributes}(),o!==void 0){var c=t.tagName.toLowerCase();o?c!==o&&delete r.tag:r.tag=c}}),r}});var Aq=i(rn=>{"use strict";Object.defineProperty(rn,"__esModule",{value:!0});var L$=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};rn.getSingleSelector=Ju;rn.getMultiSelector=Rq;rn.default=U$;var $$=Ku(),Iq=Yu($$),F$=Oq(),D$=Yu(F$),B$=zu(),_q=Yu(B$),kq=Ia(),Pq=Vu();function Yu(e){return e&&e.__esModule?e:{default:e}}function Ju(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":L$(e))+'")');var t=(0,Iq.default)(e,r),n=(0,D$.default)(e,r),a=(0,_q.default)(n,e,r);return t&&delete global.document,a}function Rq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,kq.convertNodeList)(e)),e.some(function(l){return l.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,Iq.default)(e[0],r),n=(0,Pq.getCommonAncestor)(e,r),a=Ju(n,r),o=G$(e),u=o[0],c=(0,_q.default)(a+" "+u,e,r),s=(0,kq.convertNodeList)(document.querySelectorAll(c));return e.every(function(l){return s.some(function(f){return f===l})})?(t&&delete global.document,c):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function G$(e){var r=(0,Pq.getCommonProperties)(e),t=r.classes,n=r.attributes,a=r.tag,o=[];if(a&&o.push(a),t){var u=t.map(function(s){return"."+s}).join("");o.push(u)}if(n){var c=Object.keys(n).reduce(function(s,l){return s.push("["+l+'="'+n[l]+'"]'),s},[]).join("");o.push(c)}return o.length,[o.join("")]}function U$(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?Rq(e,r):Ju(e,r)}});var jq=i(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.default=ie.common=ie.optimize=ie.getMultiSelector=ie.getSingleSelector=ie.select=void 0;var Qu=Aq();Object.defineProperty(ie,"getSingleSelector",{enumerable:!0,get:function(){return Qu.getSingleSelector}});Object.defineProperty(ie,"getMultiSelector",{enumerable:!0,get:function(){return Qu.getMultiSelector}});var Nq=Mq(Qu),W$=zu(),H$=Mq(W$),K$=Vu(),z$=V$(K$);function V$(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Mq(e){return e&&e.__esModule?e:{default:e}}ie.select=Nq.default;ie.optimize=H$.default;ie.common=z$;ie.default=Nq.default});var Lq=i(()=>{"use strict";var aF=x(),iF=Re();aF({target:"Array",stat:!0},{isArray:iF})});var Fq=i((yV,$q)=>{"use strict";Lq();var oF=Y();$q.exports=oF.Array.isArray});var Bq=i((bV,Dq)=>{"use strict";var uF=Fq();Dq.exports=uF});var Uq=i((gV,Gq)=>{"use strict";var sF=Bq();Gq.exports=sF});var Hq=i((qV,Wq)=>{"use strict";var cF=Uq();Wq.exports=cF});var zq=i((xV,Kq)=>{"use strict";Kq.exports=Hq()});var Jq=i(()=>{"use strict";var lF=x(),fF=te(),pF=ve(),vF=Ur(),dF=Ct(),mF=P(),hF=mF(function(){return[].push.call({length:4294967296},1)!==4294967297}),yF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},bF=hF||!yF();lF({target:"Array",proto:!0,arity:1,forced:bF},{push:function(r){var t=fF(this),n=pF(t),a=arguments.length;dF(n+a);for(var o=0;o<a;o++)t[n]=arguments[o],n++;return vF(t,n),n}})});var Xq=i((EV,Qq)=>{"use strict";Jq();var gF=se();Qq.exports=gF("Array","push")});var ex=i((OV,Zq)=>{"use strict";var qF=U(),xF=Xq(),Xu=Array.prototype;Zq.exports=function(e){var r=e.push;return e===Xu||qF(Xu,e)&&r===Xu.push?xF:r}});var tx=i((CV,rx)=>{"use strict";var wF=ex();rx.exports=wF});var ax=i((kV,nx)=>{"use strict";var SF=tx();nx.exports=SF});var ox=i((IV,ix)=>{"use strict";var TF=ax();ix.exports=TF});var Zu=i((_V,ux)=>{"use strict";ux.exports=ox()});var bx=i(()=>{"use strict";var EF=x(),OF=_t().map,CF=gt(),kF=CF("map");EF({target:"Array",proto:!0,forced:!kF},{map:function(r){return OF(this,r,arguments.length>1?arguments[1]:void 0)}})});var qx=i((a7,gx)=>{"use strict";bx();var IF=se();gx.exports=IF("Array","map")});var wx=i((i7,xx)=>{"use strict";var _F=U(),PF=qx(),rs=Array.prototype;xx.exports=function(e){var r=e.map;return e===rs||_F(rs,e)&&r===rs.map?PF:r}});var Tx=i((o7,Sx)=>{"use strict";var RF=wx();Sx.exports=RF});var Ox=i((u7,Ex)=>{"use strict";var AF=Tx();Ex.exports=AF});var kx=i((s7,Cx)=>{"use strict";var NF=Ox();Cx.exports=NF});var _x=i((c7,Ix)=>{"use strict";Ix.exports=kx()});var Rx=i((l7,Px)=>{Px.exports=_x()});var Nx=i((f7,Ax)=>{Ax.exports=at()});var Fx=i((p7,$x)=>{"use strict";var MF=D(),jF=te(),LF=qn(),$F=ve(),Mx=TypeError,jx="Reduce of empty array with no initial value",Lx=function(e){return function(r,t,n,a){var o=jF(r),u=LF(o),c=$F(o);if(MF(t),c===0&&n<2)throw new Mx(jx);var s=e?c-1:0,l=e?-1:1;if(n<2)for(;;){if(s in u){a=u[s],s+=l;break}if(s+=l,e?s<0:c<=s)throw new Mx(jx)}for(;e?s>=0:c>s;s+=l)s in u&&(a=t(a,u[s],s,o));return a}};$x.exports={left:Lx(!1),right:Lx(!0)}});var ts=i((v7,Dx)=>{"use strict";var FF=P();Dx.exports=function(e,r){var t=[][e];return!!t&&FF(function(){t.call(null,r||function(){return 1},1)})}});var Gx=i(()=>{"use strict";var DF=x(),BF=Fx().left,GF=ts(),Bx=jr(),UF=jt(),WF=!UF&&Bx>79&&Bx<83,HF=WF||!GF("reduce");DF({target:"Array",proto:!0,forced:HF},{reduce:function(r){var t=arguments.length;return BF(this,r,t,t>1?arguments[1]:void 0)}})});var Wx=i((h7,Ux)=>{"use strict";Gx();var KF=se();Ux.exports=KF("Array","reduce")});var Kx=i((y7,Hx)=>{"use strict";var zF=U(),VF=Wx(),ns=Array.prototype;Hx.exports=function(e){var r=e.reduce;return e===ns||zF(ns,e)&&r===ns.reduce?VF:r}});var Vx=i((b7,zx)=>{"use strict";var YF=Kx();zx.exports=YF});var Jx=i((g7,Yx)=>{"use strict";var JF=Vx();Yx.exports=JF});var Xx=i((q7,Qx)=>{"use strict";var QF=Jx();Qx.exports=QF});var ew=i((x7,Zx)=>{"use strict";Zx.exports=Xx()});var tw=i((w7,rw)=>{rw.exports=ew()});var iw=i((S7,aw)=>{"use strict";var XF=Re(),ZF=ve(),eD=Ct(),rD=J(),tD=Gr(),nw=function(e,r,t,n,a,o,u,c){for(var s=a,l=0,f=u?rD(u,c):!1,p,v;l<n;)l in t&&(p=f?f(t[l],l,r):t[l],o>0&&XF(p)?(v=ZF(p),s=nw(e,r,p,v,s,o-1)-1):(eD(s+1),tD(e,s,p)),s++),l++;return s};aw.exports=nw});var ow=i(()=>{"use strict";var nD=x(),aD=iw(),iD=D(),oD=te(),uD=ve(),sD=Bn();nD({target:"Array",proto:!0},{flatMap:function(r){var t=oD(this),n=uD(t),a;return iD(r),a=sD(t,0),aD(a,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),a}})});var uw=i(()=>{"use strict";var cD=Po();cD("flatMap")});var cw=i((k7,sw)=>{"use strict";ow();uw();var lD=se();sw.exports=lD("Array","flatMap")});var fw=i((I7,lw)=>{"use strict";var fD=U(),pD=cw(),as=Array.prototype;lw.exports=function(e){var r=e.flatMap;return e===as||fD(as,e)&&r===as.flatMap?pD:r}});var vw=i((_7,pw)=>{"use strict";var vD=fw();pw.exports=vD});var mw=i((P7,dw)=>{"use strict";var dD=vw();dw.exports=dD});var yw=i((R7,hw)=>{"use strict";var mD=mw();hw.exports=mD});var gw=i((A7,bw)=>{"use strict";bw.exports=yw()});var xw=i((N7,qw)=>{qw.exports=gw()});var Sw=i((M7,ww)=>{"use strict";ro();var hD=se();ww.exports=hD("Array","concat")});var Ew=i((j7,Tw)=>{"use strict";var yD=U(),bD=Sw(),is=Array.prototype;Tw.exports=function(e){var r=e.concat;return e===is||yD(is,e)&&r===is.concat?bD:r}});var Cw=i((L7,Ow)=>{"use strict";var gD=Ew();Ow.exports=gD});var Iw=i(($7,kw)=>{"use strict";var qD=Cw();kw.exports=qD});var Pw=i((F7,_w)=>{"use strict";var xD=Iw();_w.exports=xD});var Aw=i((D7,Rw)=>{"use strict";Rw.exports=Pw()});var os=i((B7,Nw)=>{Nw.exports=Aw()});var Lw=i(()=>{});var Fw=i((l9,$w)=>{"use strict";Lw();_o();var PD=Kr();$w.exports=PD.f("toPrimitive")});var Bw=i((f9,Dw)=>{"use strict";var RD=Fw();Dw.exports=RD});var Uw=i((p9,Gw)=>{"use strict";var AD=Bw();Gw.exports=AD});var Hw=i((v9,Ww)=>{"use strict";var ND=Uw();Ww.exports=ND});var zw=i((d9,Kw)=>{"use strict";Kw.exports=Hw()});var tS=i((M9,rS)=>{"use strict";var jD=$(),LD=Te(),$D=A(),FD=$D("match");rS.exports=function(e){var r;return jD(e)&&((r=e[FD])!==void 0?!!r:LD(e)==="RegExp")}});var aS=i((j9,nS)=>{"use strict";var DD=tS(),BD=TypeError;nS.exports=function(e){if(DD(e))throw new BD("The method doesn't accept regular expressions");return e}});var oS=i((L9,iS)=>{"use strict";var GD=A(),UD=GD("match");iS.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[UD]=!1,"/./"[e](r)}catch{}}return!1}});var cS=i(()=>{"use strict";var WD=x(),HD=ft(),KD=vt().f,zD=Ei(),uS=Je(),VD=aS(),YD=lr(),JD=oS(),QD=ee(),XD=HD("".slice),ZD=Math.min,sS=JD("startsWith"),e3=!QD&&!sS&&!!function(){var e=KD(String.prototype,"startsWith");return e&&!e.writable}();WD({target:"String",proto:!0,forced:!e3&&!sS},{startsWith:function(r){var t=uS(YD(this));VD(r);var n=zD(ZD(arguments.length>1?arguments[1]:void 0,t.length)),a=uS(r);return XD(t,n,n+a.length)===a}})});var fS=i((D9,lS)=>{"use strict";cS();var r3=se();lS.exports=r3("String","startsWith")});var vS=i((B9,pS)=>{"use strict";var t3=U(),n3=fS(),ls=String.prototype;pS.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===ls||t3(ls,e)&&r===ls.startsWith?n3:r}});var mS=i((G9,dS)=>{"use strict";var a3=vS();dS.exports=a3});var yS=i((U9,hS)=>{"use strict";var i3=mS();hS.exports=i3});var gS=i((W9,bS)=>{"use strict";var o3=yS();bS.exports=o3});var xS=i((H9,qS)=>{"use strict";qS.exports=gS()});var SS=i((K9,wS)=>{wS.exports=xS()});var TS=i(()=>{"use strict";var u3=x(),s3=_t().filter,c3=gt(),l3=c3("filter");u3({target:"Array",proto:!0,forced:!l3},{filter:function(r){return s3(this,r,arguments.length>1?arguments[1]:void 0)}})});var OS=i((Y9,ES)=>{"use strict";TS();var f3=se();ES.exports=f3("Array","filter")});var kS=i((J9,CS)=>{"use strict";var p3=U(),v3=OS(),fs=Array.prototype;CS.exports=function(e){var r=e.filter;return e===fs||p3(fs,e)&&r===fs.filter?v3:r}});var _S=i((Q9,IS)=>{"use strict";var d3=kS();IS.exports=d3});var RS=i((X9,PS)=>{"use strict";var m3=_S();PS.exports=m3});var NS=i((Z9,AS)=>{"use strict";var h3=RS();AS.exports=h3});var jS=i((eY,MS)=>{"use strict";MS.exports=NS()});var $S=i((rY,LS)=>{LS.exports=jS()});var eT=i(()=>{"use strict";var T3=x(),E3=H(),vs=Nr(),O3=Nu(),VS=Ho(),C3=Z(),YS=$(),k3=Xe(),QS=P(),ds=E3("Reflect","construct"),I3=Object.prototype,_3=[].push,XS=QS(function(){function e(){}return!(ds(function(){},[],e)instanceof e)}),ZS=!QS(function(){ds(function(){})}),JS=XS||ZS;T3({target:"Reflect",stat:!0,forced:JS,sham:JS},{construct:function(r,t){VS(r),C3(t);var n=arguments.length<3?r:VS(arguments[2]);if(ZS&&!XS)return ds(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var a=[null];return vs(_3,a,t),new(vs(O3,r,a))}var o=n.prototype,u=k3(YS(o)?o:I3),c=vs(r,u,t);return YS(c)?c:u}})});var tT=i((MY,rT)=>{"use strict";eT();var P3=Y();rT.exports=P3.Reflect.construct});var aT=i((jY,nT)=>{"use strict";var R3=tT();nT.exports=R3});var oT=i((LY,iT)=>{"use strict";var A3=aT();iT.exports=A3});var sT=i(($Y,uT)=>{"use strict";var N3=oT();uT.exports=N3});var Da=i((FY,cT)=>{"use strict";cT.exports=sT()});var fT=i((DY,lT)=>{lT.exports=Da()});var qT=i((YY,gT)=>{"use strict";var M3=P();gT.exports=M3(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var ST=i((JY,wT)=>{"use strict";var j3=P(),L3=$(),$3=Te(),xT=qT(),Ba=Object.isExtensible,F3=j3(function(){Ba(1)});wT.exports=F3||xT?function(r){return!L3(r)||xT&&$3(r)==="ArrayBuffer"?!1:Ba?Ba(r):!0}:Ba});var ET=i((QY,TT)=>{"use strict";var D3=P();TT.exports=!D3(function(){return Object.isExtensible(Object.preventExtensions({}))})});var xs=i((XY,kT)=>{"use strict";var B3=x(),G3=N(),U3=Hr(),W3=$(),bs=K(),H3=ne().f,OT=It(),K3=to(),gs=ST(),z3=$r(),V3=ET(),CT=!1,Ue=z3("meta"),Y3=0,qs=function(e){H3(e,Ue,{value:{objectID:"O"+Y3++,weakData:{}}})},J3=function(e,r){if(!W3(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!bs(e,Ue)){if(!gs(e))return"F";if(!r)return"E";qs(e)}return e[Ue].objectID},Q3=function(e,r){if(!bs(e,Ue)){if(!gs(e))return!0;if(!r)return!1;qs(e)}return e[Ue].weakData},X3=function(e){return V3&&CT&&gs(e)&&!bs(e,Ue)&&qs(e),e},Z3=function(){e4.enable=function(){},CT=!0;var e=OT.f,r=G3([].splice),t={};t[Ue]=1,e(t).length&&(OT.f=function(n){for(var a=e(n),o=0,u=a.length;o<u;o++)if(a[o]===Ue){r(a,o,1);break}return a},B3({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:K3.f}))},e4=kT.exports={enable:Z3,fastKey:J3,getWeakData:Q3,onFreeze:X3};U3[Ue]=!0});var PT=i((ZY,_T)=>{"use strict";var r4=x(),t4=R(),n4=xs(),a4=P(),i4=Ee(),o4=me(),u4=ca(),s4=M(),c4=$(),l4=cr(),f4=Me(),p4=ne().f,v4=_t().forEach,d4=W(),IT=Qe(),m4=IT.set,h4=IT.getterFor;_T.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,a=e.indexOf("Weak")!==-1,o=n?"set":"add",u=t4[e],c=u&&u.prototype,s={},l;if(!d4||!s4(u)||!(a||c.forEach&&!a4(function(){new u().entries().next()})))l=t.getConstructor(r,e,n,o),n4.enable();else{l=r(function(v,d){m4(u4(v,f),{type:e,collection:new u}),l4(d)||o4(d,v[o],{that:v,AS_ENTRIES:n})});var f=l.prototype,p=h4(e);v4(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(v){var d=v==="add"||v==="set";v in c&&!(a&&v==="clear")&&i4(f,v,function(h,m){var y=p(this).collection;if(!d&&a&&!c4(h))return v==="get"?void 0:!1;var g=y[v](h===0?0:h,m);return d?this:g})}),a||p4(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return f4(l,e,!1,!0),s[e]=l,r4({global:!0,forced:!0},s),a||t.setStrong(l,e,n),l}});var AT=i((eJ,RT)=>{"use strict";var y4=Ae();RT.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:y4(e,n,r[n],t);return e}});var DT=i((rJ,FT)=>{"use strict";var NT=Xe(),b4=Un(),MT=AT(),g4=J(),q4=ca(),x4=cr(),w4=me(),S4=Ln(),Ga=$n(),T4=Wo(),sn=W(),jT=xs().fastKey,$T=Qe(),LT=$T.set,ws=$T.getterFor;FT.exports={getConstructor:function(e,r,t,n){var a=e(function(l,f){q4(l,o),LT(l,{type:r,index:NT(null),first:null,last:null,size:0}),sn||(l.size=0),x4(f)||w4(f,l[n],{that:l,AS_ENTRIES:t})}),o=a.prototype,u=ws(r),c=function(l,f,p){var v=u(l),d=s(l,f),h,m;return d?d.value=p:(v.last=d={index:m=jT(f,!0),key:f,value:p,previous:h=v.last,next:null,removed:!1},v.first||(v.first=d),h&&(h.next=d),sn?v.size++:l.size++,m!=="F"&&(v.index[m]=d)),l},s=function(l,f){var p=u(l),v=jT(f),d;if(v!=="F")return p.index[v];for(d=p.first;d;d=d.next)if(d.key===f)return d};return MT(o,{clear:function(){for(var f=this,p=u(f),v=p.first;v;)v.removed=!0,v.previous&&(v.previous=v.previous.next=null),v=v.next;p.first=p.last=null,p.index=NT(null),sn?p.size=0:f.size=0},delete:function(l){var f=this,p=u(f),v=s(f,l);if(v){var d=v.next,h=v.previous;delete p.index[v.index],v.removed=!0,h&&(h.next=d),d&&(d.previous=h),p.first===v&&(p.first=d),p.last===v&&(p.last=h),sn?p.size--:f.size--}return!!v},forEach:function(f){for(var p=u(this),v=g4(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:p.first;)for(v(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!s(this,f)}}),MT(o,t?{get:function(f){var p=s(this,f);return p&&p.value},set:function(f,p){return c(this,f===0?0:f,p)}}:{add:function(f){return c(this,f=f===0?0:f,f)}}),sn&&b4(o,"size",{configurable:!0,get:function(){return u(this).size}}),a},setStrong:function(e,r,t){var n=r+" Iterator",a=ws(r),o=ws(n);S4(e,r,function(u,c){LT(this,{type:n,target:u,state:a(u),kind:c,last:null})},function(){for(var u=o(this),c=u.kind,s=u.last;s&&s.removed;)s=s.previous;return!u.target||!(u.last=s=s?s.next:u.state.first)?(u.target=null,Ga(void 0,!0)):Ga(c==="keys"?s.key:c==="values"?s.value:[s.key,s.value],!1)},t?"entries":"values",!t,!0),T4(r)}}});var BT=i(()=>{"use strict";var E4=PT(),O4=DT();E4("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},O4)});var GT=i(()=>{"use strict";BT()});var WT=i((oJ,UT)=>{"use strict";UT.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,a){return t[e](n,a)}}});var oe=i((uJ,KT)=>{"use strict";var C4=H(),Ua=WT(),HT=C4("Map");KT.exports={Map:HT,set:Ua("set",2),get:Ua("get",1),has:Ua("has",1),remove:Ua("delete",1),proto:HT.prototype}});var Ss=i(()=>{"use strict";var k4=x(),I4=N(),_4=D(),P4=lr(),R4=me(),Wa=oe(),zT=ee(),A4=P(),VT=Wa.Map,N4=Wa.has,M4=Wa.get,j4=Wa.set,L4=I4([].push),$4=zT||A4(function(){return VT.groupBy("ab",function(e){return e}).get("a").length!==1});k4({target:"Map",stat:!0,forced:zT||$4},{groupBy:function(r,t){P4(r),_4(t);var n=new VT,a=0;return R4(r,function(o){var u=t(o,a++);N4(n,u)?L4(M4(n,u),o):j4(n,u,[o])}),n}})});var Q=i((lJ,YT)=>{"use strict";var F4=Ye(),D4=TypeError;YT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new D4(F4(e)+" is not a map")}});var Es=i(()=>{"use strict";var B4=x(),G4=Q(),Ts=oe(),U4=ee(),W4=Ts.get,H4=Ts.has,K4=Ts.set;B4({target:"Map",proto:!0,real:!0,forced:U4},{getOrInsert:function(r,t){return H4(G4(this),r)?W4(this,r):(K4(this,r,t),t)}})});var Cs=i(()=>{"use strict";var z4=x(),V4=D(),Y4=Q(),Os=oe(),J4=ee(),Q4=Os.get,X4=Os.has,Z4=Os.set;z4({target:"Map",proto:!0,real:!0,forced:J4},{getOrInsertComputed:function(r,t){if(Y4(this),V4(t),X4(this,r))return Q4(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return Z4(this,r,n),n}})});var QT=i((mJ,JT)=>{"use strict";qr();GT();Ss();Es();Cs();kt();hr();var eB=Y();JT.exports=eB.Map});var ZT=i((hJ,XT)=>{"use strict";var rB=QT();xr();XT.exports=rB});var ks=i(()=>{"use strict";Es()});var Is=i(()=>{"use strict";Cs()});var e0=i(()=>{"use strict";Ss()});var t0=i((SJ,r0)=>{"use strict";var tB=ZT();ks();Is();e0();r0.exports=tB});var a0=i((TJ,n0)=>{"use strict";var nB=J(),aB=Z(),iB=te(),oB=me();n0.exports=function(e,r,t){return function(a){var o=iB(a),u=arguments.length,c=u>1?arguments[1]:void 0,s=c!==void 0,l=s?nB(c,u>2?arguments[2]:void 0):void 0,f=new e,p=0;return oB(o,function(v){var d=s?l(v,p++):v;t?r(f,aB(d)[0],d[1]):r(f,d)}),f}}});var o0=i(()=>{"use strict";var uB=x(),i0=oe(),sB=a0();uB({target:"Map",stat:!0,forced:!0},{from:sB(i0.Map,i0.set,!0)})});var s0=i((CJ,u0)=>{"use strict";var cB=Z();u0.exports=function(e,r,t){return function(){for(var a=new e,o=arguments.length,u=0;u<o;u++){var c=arguments[u];t?r(a,cB(c)[0],c[1]):r(a,c)}return a}}});var l0=i(()=>{"use strict";var lB=x(),c0=oe(),fB=s0();lB({target:"Map",stat:!0,forced:!0},{of:fB(c0.Map,c0.set,!0)})});var p0=i(()=>{"use strict";var pB=x(),vB=G(),dB=me(),mB=M(),f0=D(),hB=oe().Map;pB({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=mB(this)?this:hB,a=new n;f0(t);var o=f0(a.set);return dB(r,function(u){vB(o,a,t(u),u)}),a}})});var v0=i(()=>{"use strict";var yB=x(),bB=Q(),gB=oe().remove;yB({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=bB(this),t=!0,n,a=0,o=arguments.length;a<o;a++)n=gB(r,arguments[a]),t=t&&n;return!!t}})});var m0=i(()=>{"use strict";var qB=x(),xB=Q(),_s=oe(),wB=_s.get,SB=_s.has,d0=_s.set;qB({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=xB(this),a,o;return SB(n,r)?(a=wB(n,r),"update"in t&&(a=t.update(a,r,n),d0(n,r,a)),a):(o=t.insert(r,n),d0(n,r,o),o)}})});var y0=i((jJ,h0)=>{"use strict";var TB=G();h0.exports=function(e,r,t){for(var n=t?e:e.iterator,a=e.next,o,u;!(o=TB(a,n)).done;)if(u=r(o.value),u!==void 0)return u}});var qe=i((LJ,b0)=>{"use strict";var EB=y0();b0.exports=function(e,r,t){return t?EB(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var g0=i(()=>{"use strict";var OB=x(),CB=J(),kB=Q(),IB=qe();OB({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=kB(this),n=CB(r,arguments.length>1?arguments[1]:void 0);return IB(t,function(a,o){if(!n(a,o,t))return!1},!0)!==!1}})});var x0=i(()=>{"use strict";var _B=x(),PB=J(),RB=Q(),q0=oe(),AB=qe(),NB=q0.Map,MB=q0.set;_B({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=RB(this),n=PB(r,arguments.length>1?arguments[1]:void 0),a=new NB;return AB(t,function(o,u){n(o,u,t)&&MB(a,u,o)}),a}})});var w0=i(()=>{"use strict";var jB=x(),LB=J(),$B=Q(),FB=qe();jB({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=$B(this),n=LB(r,arguments.length>1?arguments[1]:void 0),a=FB(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return a&&a.value}})});var S0=i(()=>{"use strict";var DB=x(),BB=J(),GB=Q(),UB=qe();DB({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=GB(this),n=BB(r,arguments.length>1?arguments[1]:void 0),a=UB(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return a&&a.key}})});var E0=i((KJ,T0)=>{"use strict";T0.exports=function(e,r){return e===r||e!==e&&r!==r}});var O0=i(()=>{"use strict";var WB=x(),HB=E0(),KB=Q(),zB=qe();WB({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return zB(KB(this),function(t){if(HB(t,r))return!0},!0)===!0}})});var C0=i(()=>{"use strict";var VB=x(),YB=Q(),JB=qe();VB({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=JB(YB(this),function(n,a){if(n===r)return{key:a}},!0);return t&&t.key}})});var I0=i(()=>{"use strict";var QB=x(),XB=J(),ZB=Q(),k0=oe(),e5=qe(),r5=k0.Map,t5=k0.set;QB({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=ZB(this),n=XB(r,arguments.length>1?arguments[1]:void 0),a=new r5;return e5(t,function(o,u){t5(a,n(o,u,t),o)}),a}})});var P0=i(()=>{"use strict";var n5=x(),a5=J(),i5=Q(),_0=oe(),o5=qe(),u5=_0.Map,s5=_0.set;n5({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=i5(this),n=a5(r,arguments.length>1?arguments[1]:void 0),a=new u5;return o5(t,function(o,u){s5(a,u,n(o,u,t))}),a}})});var R0=i(()=>{"use strict";var c5=x(),l5=Q(),f5=me(),p5=oe().set;c5({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=l5(this),n=arguments.length,a=0;a<n;)f5(arguments[a++],function(o,u){p5(t,o,u)},{AS_ENTRIES:!0});return t}})});var A0=i(()=>{"use strict";var v5=x(),d5=D(),m5=Q(),h5=qe(),y5=TypeError;v5({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=m5(this),n=arguments.length<2,a=n?void 0:arguments[1];if(d5(r),h5(t,function(o,u){n?(n=!1,a=o):a=r(a,o,u,t)}),n)throw new y5("Reduce of empty map with no initial value");return a}})});var N0=i(()=>{"use strict";var b5=x(),g5=J(),q5=Q(),x5=qe();b5({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=q5(this),n=g5(r,arguments.length>1?arguments[1]:void 0);return x5(t,function(a,o){if(n(a,o,t))return!0},!0)===!0}})});var j0=i(()=>{"use strict";var w5=x(),M0=D(),S5=Q(),Ps=oe(),T5=TypeError,E5=Ps.get,O5=Ps.has,C5=Ps.set;w5({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=S5(this),a=arguments.length;M0(t);var o=O5(n,r);if(!o&&a<3)throw new T5("Updating absent value");var u=o?E5(n,r):M0(a>2?arguments[2]:void 0)(r,n);return C5(n,r,t(u,r,n)),n}})});var As=i((cQ,L0)=>{"use strict";var Ha=G(),Rs=D(),Ka=M(),k5=Z(),I5=TypeError;L0.exports=function(r,t){var n=k5(this),a=Rs(n.get),o=Rs(n.has),u=Rs(n.set),c=arguments.length>2?arguments[2]:void 0,s;if(!Ka(t)&&!Ka(c))throw new I5("At least one callback required");return Ha(o,n,r)?(s=Ha(a,n,r),Ka(t)&&(s=t(s),Ha(u,n,r,s))):Ka(c)&&(s=c(),Ha(u,n,r,s)),s}});var $0=i(()=>{"use strict";var _5=x(),P5=As();_5({target:"Map",proto:!0,real:!0,forced:!0},{upsert:P5})});var F0=i(()=>{"use strict";var R5=x(),A5=As();R5({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:A5})});var B0=i((dQ,D0)=>{"use strict";var N5=t0();o0();l0();p0();v0();m0();g0();x0();w0();S0();O0();ks();Is();C0();I0();P0();R0();A0();N0();j0();$0();F0();D0.exports=N5});var U0=i((mQ,G0)=>{"use strict";G0.exports=B0()});var H0=i(()=>{"use strict";var M5=x(),j5=ft(),L5=Mi().indexOf,$5=ts(),Ns=j5([].indexOf),W0=!!Ns&&1/Ns([1],1,-0)<0,F5=W0||!$5("indexOf");M5({target:"Array",proto:!0,forced:F5},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return W0?Ns(this,r,t)||0:L5(this,r,t)}})});var z0=i((bQ,K0)=>{"use strict";H0();var D5=se();K0.exports=D5("Array","indexOf")});var Y0=i((gQ,V0)=>{"use strict";var B5=U(),G5=z0(),Ms=Array.prototype;V0.exports=function(e){var r=e.indexOf;return e===Ms||B5(Ms,e)&&r===Ms.indexOf?G5:r}});var Q0=i((qQ,J0)=>{"use strict";var U5=Y0();J0.exports=U5});var Z0=i((xQ,X0)=>{"use strict";var W5=Q0();X0.exports=W5});var rE=i((wQ,eE)=>{"use strict";var H5=Z0();eE.exports=H5});var nE=i((SQ,tE)=>{"use strict";tE.exports=rE()});var qE=i(()=>{"use strict";var Q5=x(),X5=te(),gE=Rn(),Z5=P(),eG=Z5(function(){gE(1)});Q5({target:"Object",stat:!0,forced:eG},{keys:function(r){return gE(X5(r))}})});var wE=i((kX,xE)=>{"use strict";qE();var rG=Y();xE.exports=rG.Object.keys});var TE=i((IX,SE)=>{"use strict";var tG=wE();SE.exports=tG});var OE=i((_X,EE)=>{"use strict";var nG=TE();EE.exports=nG});var kE=i((PX,CE)=>{"use strict";var aG=OE();CE.exports=aG});var _E=i((RX,IE)=>{"use strict";IE.exports=kE()});var RE=i((AX,PE)=>{PE.exports=_E()});var ze="";function ec(e){ze=e.replace(/\/+$/,"")}async function sr(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function rc(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${ze}/comments?${t}`);return await sr(n,"Failed to fetch comments"),(await n.json()).data}async function Za({uri:e,document:r,quote:t,prefix:n,suffix:a,body:o,author:u,parent:c}){let s={quote:t,prefix:n,suffix:a,body:o,author:u,parent:c};r?s.document=r:s.uri=e;let l=await fetch(`${ze}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});return await sr(l,"Failed to create comment"),l.json()}async function tc(e,{body:r}){let t=await fetch(`${ze}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:r})});return await sr(t,"Failed to update comment"),t.json()}async function nc(e,r){let t=await fetch(`${ze}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});return await sr(t,"Failed to update comment status"),t.json()}async function ac(e){let r=await fetch(`${ze}/comments/${e}`,{method:"DELETE"});await sr(r,"Failed to delete comment")}async function ic(e,r,t){let n=await fetch(`${ze}/comments/${e}/reactions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({emoji:r,author:t})});return await sr(n,"Failed to add reaction"),n.json()}async function oc(e,r,t){let n=await fetch(`${ze}/comments/${e}/reactions/${encodeURIComponent(r)}?author=${encodeURIComponent(t)}`,{method:"DELETE"});return await sr(n,"Failed to remove reaction"),n.json()}var Q$=b(Wr(),1),X$=b(Dn(),1),Z$=b(ta(),1),eF=b(na(),1),rF=b(aa(),1);var Iu=b(at(),1);function rb(e,r,t,n,a,o,u){try{var c=e[o](u),s=c.value}catch(l){return void t(l)}c.done?r(s):Iu.default.resolve(s).then(n,a)}function Or(e){return function(){var r=this,t=arguments;return new Iu.default(function(n,a){var o=e.apply(r,t);function u(s){rb(o,n,a,u,c,"next",s)}function c(s){rb(o,n,a,u,c,"throw",s)}u(void 0)})}}function Ut(e,r){this.v=e,this.k=r}function tr(e){return new Ut(e,0)}var _u=b(at(),1),fb=b(Oe(),1),pb=b(ga(),1);function ke(e){return function(){return new Wt(e.apply(this,arguments))}}function Wt(e){var r,t;function n(o,u){try{var c=e[o](u),s=c.value,l=s instanceof Ut;_u.default.resolve(l?s.v:s).then(function(f){if(l){var p=o==="return"?"return":"next";if(!s.k||f.done)return n(p,f);f=e[p](f).value}a(c.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){a("throw",f)}}function a(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new _u.default(function(c,s){var l={key:o,arg:u,resolve:c,reject:s,next:null};t?t=t.next=l:(r=t=l,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Wt.prototype[typeof fb.default=="function"&&pb.default||"@@asyncIterator"]=function(){return this},Wt.prototype.next=function(e){return this._invoke("next",e)},Wt.prototype.throw=function(e){return this._invoke("throw",e)},Wt.prototype.return=function(e){return this._invoke("return",e)};var tF=b(le(),1),nF=b(jq(),1);function fe(e){var r,t=Y$(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function Y$(e){return"startContainer"in e}function ar(e){if(J$(e))return e;var r=e,t=fe(r).createRange();return t.selectNodeContents(r),t}function J$(e){return"startContainer"in e}var Vq=b(zq(),1);function Yq(e){if((0,Vq.default)(e))return e}var sx=b(Oe(),1),cx=b($o(),1),lx=b(Zu(),1);function fx(e,r){var t=e==null?null:typeof sx.default<"u"&&(0,cx.default)(e)||e["@@iterator"];if(t!=null){var n,a,o,u,c=[],s=!0,l=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;s=!1}else for(;!(s=(n=o.call(t)).done)&&((0,lx.default)(c).call(c,n.value),c.length!==r);s=!0);}catch(f){l=!0,a=f}finally{try{if(!s&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(l)throw a}}return c}}var px=b(ki(),1),vx=b(eo(),1);function Na(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function es(e,r){if(e){var t;if(typeof e=="string")return Na(e,r);var n=(0,px.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,vx.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Na(e,r):void 0}}function dx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Be(e,r){return Yq(e)||fx(e,r)||es(e,r)||dx()}var mx=b(Oe(),1),hx=b(ga(),1),yx=b(Xt(),1),tn=b(at(),1);function ot(e){var r,t,n,a=2;for(typeof mx.default<"u"&&(t=hx.default,n=yx.default);a--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Ma(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Ma(e){function r(t){if(Object(t)!==t)return tn.default.reject(new TypeError(t+" is not an object."));var n=t.done;return tn.default.resolve(t.value).then(function(a){return{value:a,done:n}})}return Ma=function(n){this.s=n,this.n=n.next},Ma.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var a=this.s.return;return a===void 0?tn.default.resolve({value:n,done:!0}):r(a.apply(this.s,arguments))},throw:function(n){var a=this.s.return;return a===void 0?tn.default.reject(n):r(a.apply(this.s,arguments))}},new Ma(e)}var _D=b(le(),1);var TD=b(le(),1),ED=b(Rx(),1),OD=b(Nx(),1),CD=b(tw(),1),kD=b(xw(),1),ID=b(os(),1);var $s=b(le(),1);var S3=b(le(),1);var ss=b(le(),1);function nn(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function Mw(e,r){return nn(e.startChunk,r.startChunk)&&nn(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function Cr(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var us=b(zt(),1);var an=b(Oe(),1),jw=b(Xt(),1);function Ge(e){"@babel/helpers - typeof";return Ge=typeof an.default=="function"&&typeof jw.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof an.default=="function"&&r.constructor===an.default&&r!==an.default.prototype?"symbol":typeof r},Ge(e)}var Vw=b(zw(),1);function Yw(e,r){if(Ge(e)!="object"||!e)return e;var t=e[Vw.default];if(t!==void 0){var n=t.call(e,r||"default");if(Ge(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function ja(e){var r=Yw(e,"string");return Ge(r)=="symbol"?r:r+""}function Jw(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,us.default)(e,ja(n.key),n)}}function on(e,r,t){return r&&Jw(e.prototype,r),t&&Jw(e,t),(0,us.default)(e,"prototype",{writable:!1}),e}var Qw=b(zt(),1);function kr(e,r,t){return(r=ja(r))in e?(0,Qw.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var Xw=b(Wr(),1);var La="Iterator exhausted before seek ended.",un=function(){function e(r){Cr(this,e),this.chunker=r,kr(this,"currentChunkPosition",0),kr(this,"offsetInChunk",0),this.seekTo(0)}return on(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,a)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!nn(this.currentChunk,n);){var p=this._readToPreviousChunk(),v=Be(p,2),d=v[0],h=v[1];if(t&&(u=d+u),h===null)throw new RangeError(La)}else for(;!nn(this.currentChunk,n);){var c=this._readToNextChunk(),s=Be(c,2),l=s[0],f=s[1];if(t&&(u+=l),f===null)throw new RangeError(La)}var m=this.currentChunkPosition+a;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,Xw.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var c=this.currentChunkPosition+this.currentChunk.data.length;if(c<=n){var s=this._readToNextChunk(),l=Be(s,2),f=l[0],p=l[1];if(t&&(u+=f),p===null){if(this.position===n||o)break;throw new RangeError(La)}}else{var v=a?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,v)),this.offsetInChunk=v,a&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=a?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var h=this._readToPreviousChunk(),m=Be(h,2),y=m[0],g=m[1];if(t&&(u=y+u),g===null){if(o)break;throw new RangeError(La)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,a=this.chunker.nextChunk();return a!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,a]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function eS(e,r){return cs.apply(this,arguments)}function cs(){return cs=Or(ss.default.mark(function e(r,t){var n,a,o,u,c,s,l,f,p,v,d,h,m,y,g,q,I,k,w,T,S,O,L=arguments;return ss.default.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:n=L.length>2&&L[2]!==void 0?L[2]:{},a=n.minimalContext,o=a===void 0?!1:a,u=n.minimumQuoteLength,c=u===void 0?0:u,s=n.maxWordLength,l=s===void 0?50:s,f=new un(t()),p=new un(t()),f.seekToChunk(r.startChunk,r.startIndex),v=f.readToChunk(r.endChunk,r.endIndex),d="",h="",m=function(){return d.length+v.length+h.length},m()<c&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),y=Math.floor((c-m())/2),d=f.read(-y,!1,!0)+d,m()<c&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),g=c-m(),h=h+f.read(g,!1,!0),m()<c&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),q=c-m(),d=f.read(-q,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=$a(f,l,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+$a(f,l,!1));case 11:return I={type:"TextQuoteSelector",exact:v,prefix:d,suffix:h},k=Fa(I)(t()),_.next=16,k.next();case 16:if(w=_.sent,!(!w.done&&Mw(w.value,r))){_.next=21;break}return _.next=20,k.next();case 20:w=_.sent;case 21:if(!w.done){_.next=23;break}return _.abrupt("return",I);case 23:if(T=w.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),p.seekToChunk(T.startChunk,T.startIndex-d.length),S=Zw(f,p,!0),S!==void 0&&!o&&(S=$a(f,l,!0)+S),f.seekToChunk(r.endChunk,r.endIndex+h.length),p.seekToChunk(T.endChunk,T.endIndex+h.length),O=Zw(f,p,!1),O!==void 0&&!o&&(O=O+$a(f,l,!1)),!o){_.next=44;break}if(!(S!==void 0&&(O===void 0||S.length<=O.length))){_.next=37;break}d=S+d,_.next=42;break;case 37:if(O===void 0){_.next=41;break}h=h+O,_.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:_.next=46;break;case 44:S!==void 0&&(d=S+d),O!==void 0&&(h=h+O);case 46:_.next=11;break;case 48:case"end":return _.stop()}},e)})),cs.apply(this,arguments)}function Zw(e,r,t){for(var n="";;){var a=void 0;try{a=e.read(t?-1:1)}catch{return}n=t?a+n:n+a;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(a!==o)return n}}function $a(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var a=void 0;try{a=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(MD(a)){e.seekBy(t?1:-1);break}n=t?a+n:n+a}return n}function MD(e){return/^\s+$/.test(e)}var BS=b(Wr(),1),GS=b(Dn(),1),US=b(ta(),1),WS=b(na(),1),HS=b(aa(),1);var ps=b(le(),1),KS=b(SS(),1),zS=b($S(),1);function FS(e,r){var t;if(typeof US.default>"u"||(0,WS.default)(e)==null){if(Array.isArray(e)||(t=y3(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,c;return{s:function(){t=(0,HS.default)(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){u=!0,c=l},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw c}}}}function y3(e,r){var t;if(e){if(typeof e=="string")return DS(e,r);var n=(0,BS.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,GS.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return DS(e,r)}}function DS(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Fa(e){return function(){var r=ke(ps.default.mark(function n(a){var o,u,c,s,l,f,p,v,d,h,m,y,g,q,I,k,w,T,S,O,L,we,_,re,Se,X,F;return ps.default.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:o=e.exact,u=e.prefix||"",c=e.suffix||"",s=u+o+c,l=[],f=!0;case 6:p=a.currentChunk,v=p.data,d=[],h=FS(l),E.prev=10,h.s();case 12:if((m=h.n()).done){E.next=27;break}if(y=m.value,g=y.charactersMatched,y.endChunk===void 0&&(q=u.length+o.length-g,q<=v.length&&(y.endChunk=p,y.endIndex=q)),y.startChunk===void 0&&(I=u.length-g,(I<v.length||y.endChunk!==void 0)&&(y.startChunk=p,y.startIndex=I)),k=s.length-g,!(k<=v.length)){E.next=24;break}if(!(0,KS.default)(v).call(v,s.substring(g))){E.next=22;break}return E.next=22,y;case 22:E.next=25;break;case 24:v===s.substring(g,g+v.length)&&(y.charactersMatched+=v.length,d.push(y));case 25:E.next=12;break;case 27:E.next=32;break;case 29:E.prev=29,E.t0=E.catch(10),h.e(E.t0);case 32:return E.prev=32,h.f(),E.finish(32);case 35:if(l=d,!(s.length<=v.length)){E.next=49;break}w=0;case 38:if(!(w<=v.length)){E.next=49;break}if(T=v.indexOf(s,w),T!==-1){E.next=42;break}return E.abrupt("break",49);case 42:if(w=T+1,!(T===0&&s.length===0&&!f)){E.next=45;break}return E.abrupt("continue",38);case 45:return E.next=47,{startChunk:p,startIndex:T+u.length,endChunk:p,endIndex:T+u.length+o.length};case 47:E.next=38;break;case 49:for(S=[],O=Math.max(v.length-s.length+1,0),L=function(Ke){var Xs=v[Ke];S=(0,zS.default)(S).call(S,function(cO){return Xs===s[Ke-cO]}),Xs===s[0]&&S.push(Ke)},we=O;we<v.length;we++)L(we);_=FS(S);try{for(_.s();!(re=_.n()).done;)Se=re.value,X=v.length-Se,F={charactersMatched:X},X>=u.length+o.length&&(F.endChunk=p,F.endIndex=Se+u.length+o.length),(X>u.length||F.endChunk!==void 0)&&(F.startChunk=p,F.startIndex=Se+u.length),l.push(F)}catch(Rr){_.e(Rr)}finally{_.f()}f=!1;case 56:if(a.nextChunk()!==null){E.next=6;break}case 57:case"end":return E.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var x3=b(le(),1);var b3=b(Wr(),1),g3=b(os(),1);var w3=b(le(),1);var ln=b(fT(),1);var vT=b(xa(),1),dT=b(zt(),1);var ms=b(wa(),1),pT=b(Kt(),1);function ir(e,r){var t;return ir=ms.default?(0,pT.default)(t=ms.default).call(t):function(n,a){return n.__proto__=a,n},ir(e,r)}function hs(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,vT.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,dT.default)(e,"prototype",{writable:!1}),r&&ir(e,r)}function mT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function hT(e,r){if(r&&(Ge(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return mT(e)}var yT=b(wa(),1),bT=b(Kt(),1),ys=b(qa(),1);function Ir(e){var r;return Ir=yT.default?(0,bT.default)(r=ys.default).call(r):function(t){return t.__proto__||(0,ys.default)(t)},Ir(e)}var Ls=b(U0(),1),fE=b(xa(),1);var aE=b(nE(),1);function iE(e){try{var r;return(0,aE.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var uE=b(Da(),1),sE=b(Zu(),1),cE=b(Kt(),1);var oE=b(Da(),1);function js(){try{var e=!Boolean.prototype.valueOf.call((0,oE.default)(Boolean,[],function(){}))}catch{}return(js=function(){return!!e})()}function lE(e,r,t){if(js())return uE.default.apply(null,arguments);var n=[null];(0,sE.default)(n).apply(n,r);var a=new((0,cE.default)(e).apply(e,n));return t&&ir(a,t.prototype),a}function cn(e){var r=typeof Ls.default=="function"?new Ls.default:void 0;return cn=function(n){if(n===null||!iE(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,a)}function a(){return lE(n,arguments,Ir(this).constructor)}return a.prototype=(0,fE.default)(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),ir(a,n)},cn(e)}function dE(e,r){var t=fe(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),a=pE(e.startContainer,e.startOffset),o=Be(a,2),u=o[0],c=o[1];for(n.currentNode=u;c===u.length&&n.nextNode();)u=n.currentNode,c=0;e.setStart(u,c);var s=pE(e.endContainer,e.endOffset),l=Be(s,2),f=l[0],p=l[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function pE(e,r){var t;if(vE(e))return[e,r];var n;if(K5(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(vE(n))return[n,0];var a=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=a.createTreeWalker(a,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function vE(e){return e.nodeType===Node.TEXT_NODE}function K5(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function hE(e){var r=z5();return function(){var n=Ir(e),a;if(r){var o=Ir(this).constructor;a=(0,ln.default)(n,arguments,o)}else a=n.apply(this,arguments);return hT(this,a)}}function z5(){if(typeof Reflect>"u"||!ln.default||ln.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,ln.default)(Boolean,[],function(){})),!0}catch{return!1}}var za=function(e){hs(t,e);var r=hE(t);function t(n){return Cr(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(cn(TypeError)),V5=function(e){hs(t,e);var r=hE(t);function t(n){return Cr(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(cn(TypeError)),_r=function(){function e(r){var t=this;if(Cr(this,e),kr(this,"scope",void 0),kr(this,"iter",void 0),this.scope=ar(r),this.iter=fe(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!mE(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new za}}return on(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!mE(t))throw new za;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new V5;var n=t===this.scope.startContainer?this.scope.startOffset:0,a=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:a,data:t.data.substring(n,a),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=dE(t,this.scope),a=this.nodeToChunk(n.startContainer),o=n.startOffset-a.startOffset,u=this.nodeToChunk(n.endContainer),c=n.endOffset-u.startOffset;return{startChunk:a,startIndex:o,endChunk:u,endIndex:c}}},{key:"chunkRangeToRange",value:function(t){var n=fe(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function mE(e){return e.nodeType===Node.TEXT_NODE}function yE(e,r){return Fs.apply(this,arguments)}function Fs(){return Fs=Or($s.default.mark(function e(r,t){var n,a,o,u=arguments;return $s.default.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},a=ar(t??fe(r)),o=new _r(a),s.next=5,eS(o.rangeToChunkRange(r),function(){return new _r(a)},n);case 5:return s.abrupt("return",s.sent);case 6:case"end":return s.stop()}},e)})),Fs.apply(this,arguments)}var Ds=b(le(),1);function bE(e){var r=Fa(e);return function(){var t=ke(Ds.default.mark(function a(o){var u,c,s,l,f,p,v,d;return Ds.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new _r(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof za)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:c=!0,s=!1,m.prev=13,f=ot(r(u));case 15:return m.next=17,tr(f.next());case 17:return p=m.sent,c=p.done,m.next=21,tr(p.value);case 21:if(v=m.sent,c){m.next=29;break}return d=v,m.next=26,u.chunkRangeToRange(d);case 26:c=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),s=!0,l=m.t1;case 35:if(m.prev=35,m.prev=36,!(!c&&f.return!=null)){m.next=40;break}return m.next=40,tr(f.return());case 40:if(m.prev=40,!s){m.next=43;break}throw l;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},a,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(a){return t.apply(this,arguments)}return n}()}var Y5=b(le(),1);var J5=b(le(),1);var iG=b(RE(),1),oG=b(Wr(),1),uG=b(Dn(),1),sG=b(ta(),1),cG=b(na(),1),lG=b(aa(),1);async function AE(e,r){let t=await yE(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function Va(e,r){let t=bE({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var ut="fb-highlight",NE="fb-highlight-active";var fn=null;function jE(e){fn=e}function Ya(e,r){let t=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let n=ME(e,r);t.push(n)}else{let n=pG(e);for(let a=0;a<n.length;a++){let o=n[a],u=document.createRange();o===e.startContainer?(u.setStart(o,e.startOffset),u.setEnd(o,o.textContent.length)):o===e.endContainer?(u.setStart(o,0),u.setEnd(o,e.endOffset)):u.selectNodeContents(o),u.collapsed||t.push(ME(u,r))}}return t}function ME(e,r){let t=e.commonAncestorContainer;for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;let n=t,a=!1,o=null;for(;n;){if(n.tagName==="foreignObject"){a=!1;break}n.tagName==="text"&&n instanceof SVGElement&&(a=!0),n.tagName==="svg"&&(o=n),n=n.parentElement}if(a&&o)return fG(e,r,o);let u=document.createElement("mark");u.className=ut,u.dataset.commentId=r,u.addEventListener("click",()=>{fn&&fn(r)});try{e.surroundContents(u)}catch(c){return console.warn("[feedback-layer] Failed to create highlight:",c),null}return u}function fG(e,r,t){try{let n=e.getClientRects();if(n.length===0)return null;let a="http://www.w3.org/2000/svg",o=t.getScreenCTM();if(!o)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let u=e.commonAncestorContainer;for(;u&&u.nodeType!==Node.ELEMENT_NODE;)u=u.parentNode;let c=u,s=null;for(;c&&c!==t;){if(c.tagName==="text"){s=c.parentElement;break}c=c.parentElement}let l=s||t,f=o;l!==t&&l.getScreenCTM&&(f=l.getScreenCTM());let p=document.createElementNS(a,"g");p.setAttribute("class",ut),p.setAttribute("data-comment-id",r),p.style.cursor="pointer";for(let y=0;y<n.length;y++){let g=n[y],q=document.createElementNS(a,"rect"),I=t.createSVGPoint();I.x=g.left,I.y=g.top;let k=I.matrixTransform(f.inverse()),w=g.width/f.a,T=g.height/f.d;q.setAttribute("x",k.x),q.setAttribute("y",k.y),q.setAttribute("width",w),q.setAttribute("height",T),q.setAttribute("rx","2"),q.setAttribute("ry","2"),q.style.pointerEvents="none",p.appendChild(q)}l&&l!==t?l.appendChild(p):t.appendChild(p);let v=e.commonAncestorContainer;for(;v&&v.nodeType!==Node.ELEMENT_NODE;)v=v.parentNode;let d=new Set,h=v;for(;h&&h!==t;)h.tagName==="text"&&h instanceof SVGElement&&(d.add(h),h.querySelectorAll("tspan").forEach(g=>d.add(g))),h=h.parentElement;let m=y=>{y.preventDefault(),y.stopPropagation(),fn&&fn(r)};return d.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",m),y.dataset.fbCommentId=r}),p}catch(n){return console.warn("[feedback-layer] Failed to create SVG highlight:",n),null}}function Ja(e){document.querySelectorAll(`.${ut}[data-comment-id="${e}"]`).forEach(n=>{let a=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)a.removeChild(n);else{for(;n.firstChild;)a.insertBefore(n.firstChild,n);a.removeChild(n),a.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function LE(){document.querySelectorAll(`.${ut}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function pn(e){document.querySelectorAll(`.${ut}`).forEach(r=>{r.dataset.commentId===e?r.classList.add(NE):r.classList.remove(NE)})}function Bs(e){let r=document.querySelector(`.${ut}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function pG(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let a=document.createRange();return a.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,a)<0&&e.compareBoundaryPoints(Range.START_TO_END,a)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function $E(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,a)=>{let o=[`**${a+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let c of u)o.push(`  - **[${c.author}]** (reply): ${c.body}`);return o.join(`
`)}).join(`

`)}function FE(e,r){let t=$E(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(a=>!a.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function or(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var vG=`
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
`,DE=null,BE=null;function GE(e,r){BE=e,DE=r,dG()}function dG(){let e=document.createElement("style");e.textContent=vG,document.head.appendChild(e)}function UE(){let e=DE(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let a=document.createElement("button");a.className="hf-modal-close",a.textContent="\xD7",a.addEventListener("click",()=>r.remove()),n.appendChild(a);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",p=>{p.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let c=document.querySelector(BE.contentSelector||"body").innerHTML,s=FE(c,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${s.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${or(s)}</textarea>
  `;let l=document.createElement("button");l.className="hf-btn hf-btn-primary",l.textContent="Copy Prompt",l.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(s),l.textContent="Copied!"}catch{l.textContent="Copy failed"}setTimeout(()=>l.textContent="Copy Prompt",2e3)}),u.appendChild(l);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function WE(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function HE(e,r){return e.length>r?e.slice(0,r)+"...":e}function KE(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var vn=null;function VE(e){vn=document.createElement("div"),vn.className="fb-toast-container",e.appendChild(vn)}function ur(e,r="success"){if(!vn)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>zE(t)),t.appendChild(o)}vn.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>zE(t),r==="error"?8e3:4e3)}function zE(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}function YE(e,r){return r<=0?0:(e%r+r)%r}var mG=320,XE="feedback-layer-commenter",B=null,ue=null,We=null,Gs=null,ZE=null,Us=null,Ws=null,Hs=null,Ks=null,hn=null,zs=!1,eO=[],rO=new Set,_e=-1,dn=null,JE=!1;function hG(){JE||(JE=!0,OG())}function He(){return localStorage.getItem(XE)||""}function tO({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:a,onReaction:o}){ZE=e,Us=r,Ws=t,Hs=n,Ks=a,hn=o,hG(),B=document.createElement("div"),B.className="fb-sidebar fb-sidebar-collapsed",B.setAttribute("role","complementary"),B.setAttribute("aria-label","Feedback sidebar"),B.innerHTML=`
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
  `;let u=document.createElement("button");u.className="fb-sidebar-tab",u.textContent="Feedback",u.addEventListener("click",()=>st()),document.body.appendChild(u),document.body.appendChild(B),VE(B),ue=B.querySelector(".fb-comment-list"),ue.setAttribute("role","list"),We=B.querySelector(".fb-form-section");let c=B.querySelector(".fb-name-input");c.addEventListener("input",()=>{localStorage.setItem(XE,c.value.trim())}),B.querySelector(".fb-ai-btn").addEventListener("click",()=>UE()),B.querySelector(".fb-shortcuts-btn").addEventListener("click",()=>aO()),B.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>Vs());let p=B.querySelector(".fb-show-resolved-cb");p.addEventListener("change",()=>{zs=p.checked,he(eO,rO)}),document.addEventListener("keydown",bG)}function st(){B.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden"),qG(),ue?.querySelector(".fb-thread .fb-cmt-card")&&Qa(0)}function Vs(){B.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden"),iO(),_e=-1,document.body.focus()}function nO(){let e=document.activeElement;if(!e)return!1;let r=e.tagName;return r==="TEXTAREA"||r==="INPUT"||r==="SELECT"||e.isContentEditable}function mn(){return ue?Array.from(ue.querySelectorAll(".fb-thread > .fb-cmt-card:first-child")):[]}function Qa(e){let r=mn();if(r.length===0)return;e=YE(e,r.length),_e=e,ue.querySelectorAll(".fb-cmt-card").forEach(a=>a.classList.remove("fb-cmt-active"));let t=r[e];t.classList.add("fb-cmt-active"),t.scrollIntoView({behavior:"smooth",block:"nearest"});let n=t.closest(".fb-thread");n?.dataset.commentId&&(pn(n.dataset.commentId),Bs(n.dataset.commentId))}function yG(e){if(B.classList.contains("fb-sidebar-collapsed"))return;let r=e.key;if(r==="Escape"){e.preventDefault(),Vs();return}if(!nO()){if(r==="Enter"){let t=mn();if(_e>=0&&_e<t.length){e.preventDefault();let a=t[_e].closest(".fb-thread")?.querySelector(".fb-reply-btn");a&&a.click()}return}if(r==="j"){if(e.preventDefault(),mn().length===0)return;let n=_e<0?0:_e+1;Qa(n);return}if(r==="k"){e.preventDefault();let t=mn();if(t.length===0)return;let n=_e<0?t.length-1:_e-1;Qa(n);return}if(r==="?"){e.preventDefault(),aO();return}}}function aO(){let e=document.querySelector(".fb-shortcuts-overlay");if(e){e.remove();return}let r=document.createElement("div");r.className="fb-shortcuts-overlay";let t=document.createElement("div");t.className="fb-shortcuts-modal",t.innerHTML=`
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
  `;let n=()=>r.remove();t.querySelector(".fb-shortcuts-close").addEventListener("click",n),r.addEventListener("click",a=>{a.target===r&&n()}),r.addEventListener("keydown",a=>{a.key==="Escape"&&(a.stopPropagation(),n())}),r.appendChild(t),document.body.appendChild(r),t.querySelector(".fb-shortcuts-close").focus()}function bG(e){nO()||e.key==="s"&&(e.preventDefault(),gG())}function gG(){B.classList.contains("fb-sidebar-collapsed")?st():Vs()}function qG(){iO(),dn=yG,document.addEventListener("keydown",dn)}function iO(){dn&&(document.removeEventListener("keydown",dn),dn=null)}function oO(e){if(st(),!He()){let n=B.querySelector(".fb-name-input");n.classList.add("fb-name-input-error"),setTimeout(()=>n.classList.remove("fb-name-input-error"),2e3)}Gs=e,We.style.display="",We.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${or(HE(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `;let r=We.querySelector(".fb-form-textarea");r.focus();let t=()=>{if(!He()){let a=B.querySelector(".fb-name-input");a.focus(),a.style.outline="2px solid var(--remarq-danger)",setTimeout(()=>a.style.outline="",2e3);return}let n=r.value.trim();n&&(ZE({comment:n,commenter:He()}),We.style.display="none",Gs=null)};We.querySelector(".fb-submit-btn").addEventListener("click",t),r.addEventListener("keydown",n=>{n.key==="Enter"&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),t())}),We.querySelector(".fb-cancel-btn").addEventListener("click",()=>{We.style.display="none",Gs=null}),We.scrollIntoView({behavior:"smooth",block:"nearest"})}function he(e,r=new Set,t=new Map){eO=e,rO=r,_e=-1,ue.innerHTML="";let{topLevel:n,repliesByParent:a}=WE(e),o=n.slice().sort((l,f)=>{let p=t.get(l.id),v=t.get(f.id);return!p||!v?0:p.compareBoundaryPoints(Range.START_TO_START,v)}),u=o.filter(l=>{let f=r.has(l.id),p=l.status==="closed";return f||p&&zs}),c=zs?u:u.filter(l=>l.status!=="closed");if(o.length===0){ue.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let s=o.filter(l=>!r.has(l.id)&&l.status!=="closed").length;if(c.length===0){s>0?ue.innerHTML=`<div class="fb-empty">
        ${u.length} comment(s) resolved.
        ${s>0?`<br>${s} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:ue.innerHTML=`<div class="fb-empty">All ${o.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let l of c){let f=document.createElement("div");f.className="fb-thread",f.setAttribute("role","listitem"),f.setAttribute("tabindex","0"),f.dataset.commentId=l.id,f.appendChild(QE(l,!1));let p=a.get(l.id)||[];for(let d of p)f.appendChild(QE(d,!0));let v=document.createElement("button");v.className="fb-reply-btn",v.textContent="Reply",v.addEventListener("click",d=>{d.stopPropagation(),TG(l.id,f,v)}),f.appendChild(v),f.addEventListener("focus",()=>{let h=mn().indexOf(f.querySelector(".fb-cmt-card"));h>=0&&Qa(h)}),ue.appendChild(f)}}function QE(e,r){let t=e.status==="closed",n=document.createElement("div");n.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":""),n.dataset.id=e.id,n.innerHTML=`
    <div class="fb-cmt-body">${or(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${or(e.author)}</span>
      <span class="fb-cmt-time">${KE(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
    <div class="fb-reactions"></div>
  `;let a=n.querySelector(".fb-reactions");return wG(a,e),r||(n.addEventListener("click",o=>{o.target.closest(".fb-cmt-delete")||o.target.closest(".fb-cmt-resolve")||o.target.closest(".fb-cmt-edit")||o.target.closest(".fb-reactions")||(pn(e.id),Bs(e.id),ue.querySelectorAll(".fb-cmt-card").forEach(u=>u.classList.remove("fb-cmt-active")),n.classList.add("fb-cmt-active"))}),n.querySelector(".fb-cmt-resolve").addEventListener("click",o=>{o.stopPropagation(),Ws&&Ws(e.id,!t)})),n.querySelector(".fb-cmt-edit").addEventListener("click",o=>{o.stopPropagation(),EG(e,n)}),n.querySelector(".fb-cmt-delete").addEventListener("click",o=>{o.stopPropagation(),Us&&Us(e.id)}),n}var Ys={"\u{1F44D}":"Like","\u2764\uFE0F":"Love","\u{1F440}":"Seen","\u{1F389}":"Celebrate","\u{1F914}":"Question","\u{1F602}":"Funny"},xG=Object.keys(Ys);function wG(e,r){let t=r.reactions||[],n=He();for(let o of t){let u=document.createElement("button");u.className="fb-reaction-badge",n&&o.authors.includes(n)&&u.classList.add("fb-reaction-mine");let s=Ys[o.emoji];u.innerHTML=`${o.emoji}<span class="fb-reaction-count">${o.count}</span>`,u.title=(s?s+": ":"")+o.authors.join(", "),u.addEventListener("click",l=>{l.stopPropagation(),hn&&hn(r.id,o.emoji)}),e.appendChild(u)}let a=document.createElement("button");a.className="fb-reaction-add",a.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><circle cx="9" cy="10" r="0.5" fill="currentColor"/><circle cx="15" cy="10" r="0.5" fill="currentColor"/></svg>',a.title="Add reaction",a.addEventListener("click",o=>{o.stopPropagation(),SG(e,r,a)}),e.appendChild(a)}function SG(e,r,t){let n=e.querySelector(".fb-emoji-picker");if(n){n.remove();return}let a=document.createElement("div");a.className="fb-emoji-picker";for(let u of xG){let c=Ys[u],s=document.createElement("button");s.className="fb-emoji-option",s.textContent=u,s.title=c,s.addEventListener("click",l=>{l.stopPropagation(),a.remove(),hn&&hn(r.id,u)}),a.appendChild(s)}e.insertBefore(a,t.nextSibling);let o=u=>{!a.contains(u.target)&&u.target!==t&&(a.remove(),document.removeEventListener("click",o,!0))};setTimeout(()=>document.addEventListener("click",o,!0),0)}function TG(e,r,t){st();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let a=document.createElement("div");a.className="fb-reply-form",a.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!He()){let s=B.querySelector(".fb-name-input");s.focus(),s.style.outline="2px solid var(--remarq-danger)",setTimeout(()=>s.style.outline="",2e3);return}let c=a.querySelector("textarea").value.trim();c&&(Hs&&Hs({parent_id:e,comment:c,commenter:He()}),a.remove(),t.style.display="")};a.querySelector(".fb-reply-submit").addEventListener("click",o);let u=a.querySelector("textarea");u.addEventListener("keydown",c=>{c.key==="Enter"&&(c.metaKey||c.ctrlKey)&&(c.preventDefault(),o())}),a.querySelector(".fb-reply-cancel").addEventListener("click",()=>{a.remove(),t.style.display=""}),r.insertBefore(a,t),u.focus()}function EG(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${or(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let a=t.querySelector("textarea");a.focus(),a.setSelectionRange(a.value.length,a.value.length);let o=()=>{let u=a.value.trim();u&&Ks&&Ks(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),a.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function uO(e){let r=ue.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(ue.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function OG(){let e=document.createElement("style");e.textContent=`
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
      width: ${mG}px;
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
  `,document.head.appendChild(e)}function CG(e){return e.replace(/\/+$/,"").replace(/^http/,"ws")+"/ws"}function sO({apiBaseUrl:e,documentId:r,onEvent:t}){let n=CG(e),a=null,o=1e3,u=null,c=!1;function s(){if(!c){try{a=new WebSocket(n)}catch{l();return}a.onopen=()=>{o=1e3,a.send(JSON.stringify({type:"subscribe",documentId:r}))},a.onmessage=f=>{try{let p=JSON.parse(f.data);t(p)}catch{}},a.onclose=()=>{c||l()},a.onerror=()=>{}}}function l(){c||(u=setTimeout(()=>{s()},o),o=Math.min(o*2,3e4))}return s(),{close(){c=!0,clearTimeout(u),a&&(a.onclose=null,a.close())}}}var ct=null,Xa=null,bn=null,C=[],Pr=null,xe=null,V=new Set,pe=new Map;function kG(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null,theme:e?.dataset.theme||"auto"};ec(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{if(ct=document.querySelector(r.contentSelector)||document.body,Xa=r.documentUri||window.location.origin+window.location.pathname,bn=r.documentId||null,document.documentElement.dataset.remarqTheme=r.theme,tO({onSubmit:RG,onDelete:$G,onResolve:AG,onReply:NG,onEdit:MG,onReaction:jG}),jE(a=>{st(),uO(a),pn(a)}),_G(),await t(),await IG(),r.apiUrl){let a=bn||(C.length>0?C[0].document:null);a&&sO({apiBaseUrl:r.apiUrl,documentId:a,onEvent:LG})}GE(r,()=>C)}catch(a){console.error("[feedback-layer] Boot failed:",a)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function IG(){try{C=await rc(Xa,bn),V=await Qs(C),he(C,V,pe)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),ur(`Failed to load comments: ${e.message}`,"error")}}async function Qs(e){LE();let r=new Set;pe.clear();for(let t of e)if(!t.parent)try{let n=await Va({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ct);n&&t.status!=="closed"?(Ya(n,t.id),r.add(t.id),pe.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),pe.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function _G(){document.addEventListener("mouseup",Js),document.addEventListener("keyup",Js),document.addEventListener("touchend",Js)}function Js(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){yn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){yn();return}if(!ct.contains(r.commonAncestorContainer)){yn();return}PG(r)},10)}function PG(e){yn();let r=e.getBoundingClientRect();xe=document.createElement("button"),xe.className="fb-annotate-tooltip",xe.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',xe.style.top=window.scrollY+r.bottom+8+"px",xe.style.left=window.scrollX+r.left+r.width/2-40+"px";let t=async n=>{n.preventDefault(),n.stopPropagation();let a=window.getSelection();if(!a||a.isCollapsed)return;let o=a.getRangeAt(0);try{Pr=await AE(o,ct),oO(Pr.exact)}catch(u){console.error("[feedback-layer] Failed to create selector:",u)}yn()};xe.addEventListener("mousedown",t),xe.addEventListener("touchstart",t),document.body.appendChild(xe)}function yn(){xe&&(xe.remove(),xe=null)}async function RG({comment:e,commenter:r}){if(Pr){try{let t=await Za({uri:Xa,document:bn,quote:Pr.exact,prefix:Pr.prefix,suffix:Pr.suffix,body:e,author:r});C.push(t);let n=await Va({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ct);n&&(Ya(n,t.id),V.add(t.id)),he(C,V,pe),window.getSelection().removeAllRanges()}catch(t){console.error("[feedback-layer] Failed to create comment:",t),ur(`Failed to save comment: ${t.message}`,"error")}Pr=null}}async function AG(e,r){try{let n=await nc(e,r?"closed":"open"),a=C.findIndex(o=>o.id===e);if(a!==-1&&(C[a]=n),r)Ja(e);else{let o=n,u=await Va({exact:o.quote,prefix:o.prefix,suffix:o.suffix},ct);u?(Ya(u,o.id),V.add(o.id)):V.delete(o.id)}he(C,V,pe)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),ur(`Failed to update comment: ${t.message}`,"error")}}async function NG({parent_id:e,comment:r,commenter:t}){try{let n=await Za({uri:Xa,document:bn,body:r,author:t,parent:e});C.push(n),he(C,V,pe)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),ur(`Failed to save reply: ${n.message}`,"error")}}async function MG(e,r){try{let t=await tc(e,{body:r}),n=C.findIndex(a=>a.id===e);n!==-1&&(C[n]=t),he(C,V,pe)}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),ur(`Failed to update comment: ${t.message}`,"error")}}async function jG(e,r){let t=He();if(t)try{let o=C.find(s=>s.id===e)?.reactions?.find(s=>s.emoji===r)?.authors.includes(t),u;o?u=await oc(e,r,t):u=await ic(e,r,t);let c=C.findIndex(s=>s.id===e);c!==-1&&(C[c]={...C[c],reactions:u.reactions}),he(C,V,pe)}catch(n){console.error("[feedback-layer] Failed to toggle reaction:",n),ur(`Failed to update reaction: ${n.message}`,"error")}}function LG(e){let{type:r,comment:t}=e;if(t){if(r==="comment:created"){if(C.some(n=>n.id===t.id))return;C.push(t),Qs(C).then(n=>{V=n,he(C,V,pe)})}else if(r==="comment:updated"){let n=C.findIndex(a=>a.id===t.id);if(n===-1)return;C[n]=t,Qs(C).then(a=>{V=a,he(C,V,pe)})}else if(r==="comment:deleted"){if(!C.some(a=>a.id===t.id))return;Ja(t.id),V.delete(t.id),C=C.filter(a=>a.id!==t.id&&a.parent!==t.id),he(C,V,pe)}}}async function $G(e){try{await ac(e),Ja(e),V.delete(e),C=C.filter(r=>r.id!==e&&r.parent!==e),he(C,V,pe)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),ur(`Failed to delete comment: ${r.message}`,"error")}}try{kG()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
