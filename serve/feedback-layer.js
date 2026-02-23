var FeedbackLayer=(()=>{var XO=Object.create;var Hs=Object.defineProperty;var ZO=Object.getOwnPropertyDescriptor;var eE=Object.getOwnPropertyNames;var rE=Object.getPrototypeOf,tE=Object.prototype.hasOwnProperty;var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var nE=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of eE(r))!tE.call(e,i)&&i!==t&&Hs(e,i,{get:()=>r[i],enumerable:!(n=ZO(r,i))||n.enumerable});return e};var g=(e,r,t)=>(t=e!=null?XO(rE(e)):{},nE(r||!e||!e.__esModule?Hs(t,"default",{value:e,enumerable:!0}):t,e));var P=a((T8,Zs)=>{"use strict";Zs.exports=function(e){try{return!!e()}catch{return!0}}});var Rr=a((C8,ec)=>{"use strict";var iE=P();ec.exports=!iE(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")})});var A=a((O8,nc)=>{"use strict";var rc=Rr(),tc=Function.prototype,Yi=tc.call,aE=rc&&tc.bind.bind(Yi,Yi);nc.exports=rc?aE:function(e){return function(){return Yi.apply(e,arguments)}}});var G=a((E8,ic)=>{"use strict";var oE=A();ic.exports=oE({}.isPrototypeOf)});var _=a((Ji,ac)=>{"use strict";var st=function(e){return e&&e.Math===Math&&e};ac.exports=st(typeof globalThis=="object"&&globalThis)||st(typeof window=="object"&&window)||st(typeof self=="object"&&self)||st(typeof global=="object"&&global)||st(typeof Ji=="object"&&Ji)||function(){return this}()||Function("return this")()});var Ar=a((k8,cc)=>{"use strict";var uE=Rr(),sc=Function.prototype,oc=sc.apply,uc=sc.call;cc.exports=typeof Reflect=="object"&&Reflect.apply||(uE?uc.bind(oc):function(){return uc.apply(oc,arguments)})});var qe=a((I8,fc)=>{"use strict";var lc=A(),sE=lc({}.toString),cE=lc("".slice);fc.exports=function(e){return cE(sE(e),8,-1)}});var ct=a((P8,pc)=>{"use strict";var lE=qe(),fE=A();pc.exports=function(e){if(lE(e)==="Function")return fE(e)}});var N=a((_8,vc)=>{"use strict";var Qi=typeof document=="object"&&document.all;vc.exports=typeof Qi>"u"&&Qi!==void 0?function(e){return typeof e=="function"||e===Qi}:function(e){return typeof e=="function"}});var U=a((R8,dc)=>{"use strict";var pE=P();dc.exports=!pE(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var B=a((A8,mc)=>{"use strict";var vE=Rr(),dn=Function.prototype.call;mc.exports=vE?dn.bind(dn):function(){return dn.apply(dn,arguments)}});var Xi=a(gc=>{"use strict";var hc={}.propertyIsEnumerable,yc=Object.getOwnPropertyDescriptor,dE=yc&&!hc.call({1:2},1);gc.f=dE?function(r){var t=yc(this,r);return!!t&&t.enumerable}:hc});var ze=a((M8,bc)=>{"use strict";bc.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var mn=a((j8,qc)=>{"use strict";var mE=A(),hE=P(),yE=qe(),Zi=Object,gE=mE("".split);qc.exports=hE(function(){return!Zi("z").propertyIsEnumerable(0)})?function(e){return yE(e)==="String"?gE(e,""):Zi(e)}:Zi});var sr=a(($8,xc)=>{"use strict";xc.exports=function(e){return e==null}});var cr=a((L8,Sc)=>{"use strict";var bE=sr(),qE=TypeError;Sc.exports=function(e){if(bE(e))throw new qE("Can't call method on "+e);return e}});var ke=a((F8,wc)=>{"use strict";var xE=mn(),SE=cr();wc.exports=function(e){return xE(SE(e))}});var $=a((D8,Tc)=>{"use strict";var wE=N();Tc.exports=function(e){return typeof e=="object"?e!==null:wE(e)}});var z=a((B8,Cc)=>{"use strict";Cc.exports={}});var W=a((G8,Ec)=>{"use strict";var ea=z(),ra=_(),TE=N(),Oc=function(e){return TE(e)?e:void 0};Ec.exports=function(e,r){return arguments.length<2?Oc(ea[e])||Oc(ra[e]):ea[e]&&ea[e][r]||ra[e]&&ra[e][r]}});var Nr=a((U8,Pc)=>{"use strict";var CE=_(),kc=CE.navigator,Ic=kc&&kc.userAgent;Pc.exports=Ic?String(Ic):""});var Mr=a((W8,jc)=>{"use strict";var Mc=_(),ta=Nr(),_c=Mc.process,Rc=Mc.Deno,Ac=_c&&_c.versions||Rc&&Rc.version,Nc=Ac&&Ac.v8,me,hn;Nc&&(me=Nc.split("."),hn=me[0]>0&&me[0]<4?1:+(me[0]+me[1]));!hn&&ta&&(me=ta.match(/Edge\/(\d+)/),(!me||me[1]>=74)&&(me=ta.match(/Chrome\/(\d+)/),me&&(hn=+me[1])));jc.exports=hn});var lr=a((H8,Lc)=>{"use strict";var $c=Mr(),OE=P(),EE=_(),kE=EE.String;Lc.exports=!!Object.getOwnPropertySymbols&&!OE(function(){var e=Symbol("symbol detection");return!kE(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&$c&&$c<41})});var na=a((K8,Fc)=>{"use strict";var IE=lr();Fc.exports=IE&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var jr=a((z8,Dc)=>{"use strict";var PE=W(),_E=N(),RE=G(),AE=na(),NE=Object;Dc.exports=AE?function(e){return typeof e=="symbol"}:function(e){var r=PE("Symbol");return _E(r)&&RE(r.prototype,NE(e))}});var Ve=a((V8,Bc)=>{"use strict";var ME=String;Bc.exports=function(e){try{return ME(e)}catch{return"Object"}}});var D=a((Y8,Gc)=>{"use strict";var jE=N(),$E=Ve(),LE=TypeError;Gc.exports=function(e){if(jE(e))return e;throw new LE($E(e)+" is not a function")}});var yn=a((J8,Uc)=>{"use strict";var FE=D(),DE=sr();Uc.exports=function(e,r){var t=e[r];return DE(t)?void 0:FE(t)}});var Hc=a((Q8,Wc)=>{"use strict";var ia=B(),aa=N(),oa=$(),BE=TypeError;Wc.exports=function(e,r){var t,n;if(r==="string"&&aa(t=e.toString)&&!oa(n=ia(t,e))||aa(t=e.valueOf)&&!oa(n=ia(t,e))||r!=="string"&&aa(t=e.toString)&&!oa(n=ia(t,e)))return n;throw new BE("Can't convert object to primitive value")}});var Z=a((X8,Kc)=>{"use strict";Kc.exports=!0});var Yc=a((Z8,Vc)=>{"use strict";var zc=_(),GE=Object.defineProperty;Vc.exports=function(e,r){try{GE(zc,e,{value:r,configurable:!0,writable:!0})}catch{zc[e]=r}return r}});var lt=a((eG,Xc)=>{"use strict";var UE=Z(),WE=_(),HE=Yc(),Jc="__core-js_shared__",Qc=Xc.exports=WE[Jc]||HE(Jc,{});(Qc.versions||(Qc.versions=[])).push({version:"3.48.0",mode:UE?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var fr=a((rG,el)=>{"use strict";var Zc=lt();el.exports=function(e,r){return Zc[e]||(Zc[e]=r||{})}});var re=a((tG,rl)=>{"use strict";var KE=cr(),zE=Object;rl.exports=function(e){return zE(KE(e))}});var H=a((nG,tl)=>{"use strict";var VE=A(),YE=re(),JE=VE({}.hasOwnProperty);tl.exports=Object.hasOwn||function(r,t){return JE(YE(r),t)}});var $r=a((iG,nl)=>{"use strict";var QE=A(),XE=0,ZE=Math.random(),e0=QE(1.1.toString);nl.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+e0(++XE+ZE,36)}});var R=a((aG,al)=>{"use strict";var r0=_(),t0=fr(),il=H(),n0=$r(),i0=lr(),a0=na(),Lr=r0.Symbol,ua=t0("wks"),o0=a0?Lr.for||Lr:Lr&&Lr.withoutSetter||n0;al.exports=function(e){return il(ua,e)||(ua[e]=i0&&il(Lr,e)?Lr[e]:o0("Symbol."+e)),ua[e]}});var cl=a((oG,sl)=>{"use strict";var u0=B(),ol=$(),ul=jr(),s0=yn(),c0=Hc(),l0=R(),f0=TypeError,p0=l0("toPrimitive");sl.exports=function(e,r){if(!ol(e)||ul(e))return e;var t=s0(e,p0),n;if(t){if(r===void 0&&(r="default"),n=u0(t,e,r),!ol(n)||ul(n))return n;throw new f0("Can't convert object to primitive value")}return r===void 0&&(r="number"),c0(e,r)}});var gn=a((uG,ll)=>{"use strict";var v0=cl(),d0=jr();ll.exports=function(e){var r=v0(e,"string");return d0(r)?r:r+""}});var bn=a((sG,pl)=>{"use strict";var m0=_(),fl=$(),sa=m0.document,h0=fl(sa)&&fl(sa.createElement);pl.exports=function(e){return h0?sa.createElement(e):{}}});var ca=a((cG,vl)=>{"use strict";var y0=U(),g0=P(),b0=bn();vl.exports=!y0&&!g0(function(){return Object.defineProperty(b0("div"),"a",{get:function(){return 7}}).a!==7})});var ft=a(ml=>{"use strict";var q0=U(),x0=B(),S0=Xi(),w0=ze(),T0=ke(),C0=gn(),O0=H(),E0=ca(),dl=Object.getOwnPropertyDescriptor;ml.f=q0?dl:function(r,t){if(r=T0(r),t=C0(t),E0)try{return dl(r,t)}catch{}if(O0(r,t))return w0(!x0(S0.f,r,t),r[t])}});var la=a((fG,hl)=>{"use strict";var k0=P(),I0=N(),P0=/#|\.prototype\./,pt=function(e,r){var t=R0[_0(e)];return t===N0?!0:t===A0?!1:I0(r)?k0(r):!!r},_0=pt.normalize=function(e){return String(e).replace(P0,".").toLowerCase()},R0=pt.data={},A0=pt.NATIVE="N",N0=pt.POLYFILL="P";hl.exports=pt});var V=a((pG,gl)=>{"use strict";var yl=ct(),M0=D(),j0=Rr(),$0=yl(yl.bind);gl.exports=function(e,r){return M0(e),r===void 0?e:j0?$0(e,r):function(){return e.apply(r,arguments)}}});var fa=a((vG,bl)=>{"use strict";var L0=U(),F0=P();bl.exports=L0&&F0(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var Q=a((dG,ql)=>{"use strict";var D0=$(),B0=String,G0=TypeError;ql.exports=function(e){if(D0(e))return e;throw new G0(B0(e)+" is not an object")}});var te=a(Sl=>{"use strict";var U0=U(),W0=ca(),H0=fa(),qn=Q(),xl=gn(),K0=TypeError,pa=Object.defineProperty,z0=Object.getOwnPropertyDescriptor,va="enumerable",da="configurable",ma="writable";Sl.f=U0?H0?function(r,t,n){if(qn(r),t=xl(t),qn(n),typeof r=="function"&&t==="prototype"&&"value"in n&&ma in n&&!n[ma]){var i=z0(r,t);i&&i[ma]&&(r[t]=n.value,n={configurable:da in n?n[da]:i[da],enumerable:va in n?n[va]:i[va],writable:!1})}return pa(r,t,n)}:pa:function(r,t,n){if(qn(r),t=xl(t),qn(n),W0)try{return pa(r,t,n)}catch{}if("get"in n||"set"in n)throw new K0("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var xe=a((hG,wl)=>{"use strict";var V0=U(),Y0=te(),J0=ze();wl.exports=V0?function(e,r,t){return Y0.f(e,r,J0(1,t))}:function(e,r,t){return e[r]=t,e}});var x=a((yG,Cl)=>{"use strict";var vt=_(),Q0=Ar(),X0=ct(),Z0=N(),e1=ft().f,r1=la(),Fr=z(),t1=V(),Dr=xe(),Tl=H();lt();var n1=function(e){var r=function(t,n,i){if(this instanceof r){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return Q0(e,this,arguments)};return r.prototype=e.prototype,r};Cl.exports=function(e,r){var t=e.target,n=e.global,i=e.stat,o=e.proto,u=n?vt:i?vt[t]:vt[t]&&vt[t].prototype,c=n?Fr:Fr[t]||Dr(Fr,t,{})[t],s=c.prototype,l,f,p,v,d,h,m,y,q;for(v in r)l=r1(n?v:t+(i?".":"#")+v,e.forced),f=!l&&u&&Tl(u,v),h=c[v],f&&(e.dontCallGetSet?(q=e1(u,v),m=q&&q.value):m=u[v]),d=f&&m?m:r[v],!(!l&&!o&&typeof h==typeof d)&&(e.bind&&f?y=t1(d,vt):e.wrap&&f?y=n1(d):o&&Z0(d)?y=X0(d):y=d,(e.sham||d&&d.sham||h&&h.sham)&&Dr(y,"sham",!0),Dr(c,v,y),o&&(p=t+"Prototype",Tl(Fr,p)||Dr(Fr,p,{}),Dr(Fr[p],v,d),e.real&&s&&(l||!s[v])&&Dr(s,v,d)))}});var Ie=a((gG,Ol)=>{"use strict";var i1=qe();Ol.exports=Array.isArray||function(r){return i1(r)==="Array"}});var xn=a((bG,kl)=>{"use strict";var a1=R(),o1=a1("toStringTag"),El={};El[o1]="z";kl.exports=String(El)==="[object z]"});var dt=a((qG,Il)=>{"use strict";var u1=xn(),s1=N(),Sn=qe(),c1=R(),l1=c1("toStringTag"),f1=Object,p1=Sn(function(){return arguments}())==="Arguments",v1=function(e,r){try{return e[r]}catch{}};Il.exports=u1?Sn:function(e){var r,t,n;return e===void 0?"Undefined":e===null?"Null":typeof(t=v1(r=f1(e),l1))=="string"?t:p1?Sn(r):(n=Sn(r))==="Object"&&s1(r.callee)?"Arguments":n}});var ya=a((xG,Pl)=>{"use strict";var d1=A(),m1=N(),ha=lt(),h1=d1(Function.toString);m1(ha.inspectSource)||(ha.inspectSource=function(e){return h1(e)});Pl.exports=ha.inspectSource});var ht=a((SG,Ml)=>{"use strict";var y1=A(),g1=P(),_l=N(),b1=dt(),q1=W(),x1=ya(),Rl=function(){},Al=q1("Reflect","construct"),ga=/^\s*(?:class|function)\b/,S1=y1(ga.exec),w1=!ga.test(Rl),mt=function(r){if(!_l(r))return!1;try{return Al(Rl,[],r),!0}catch{return!1}},Nl=function(r){if(!_l(r))return!1;switch(b1(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return w1||!!S1(ga,x1(r))}catch{return!0}};Nl.sham=!0;Ml.exports=!Al||g1(function(){var e;return mt(mt.call)||!mt(Object)||!mt(function(){e=!0})||e})?Nl:mt});var $l=a((wG,jl)=>{"use strict";var T1=Math.ceil,C1=Math.floor;jl.exports=Math.trunc||function(r){var t=+r;return(t>0?C1:T1)(t)}});var wn=a((TG,Ll)=>{"use strict";var O1=$l();Ll.exports=function(e){var r=+e;return r!==r||r===0?0:O1(r)}});var ba=a((CG,Fl)=>{"use strict";var E1=wn(),k1=Math.max,I1=Math.min;Fl.exports=function(e,r){var t=E1(e);return t<0?k1(t+r,0):I1(t,r)}});var qa=a((OG,Dl)=>{"use strict";var P1=wn(),_1=Math.min;Dl.exports=function(e){var r=P1(e);return r>0?_1(r,9007199254740991):0}});var le=a((EG,Bl)=>{"use strict";var R1=qa();Bl.exports=function(e){return R1(e.length)}});var Br=a((kG,Gl)=>{"use strict";var A1=U(),N1=te(),M1=ze();Gl.exports=function(e,r,t){A1?N1.f(e,r,M1(0,t)):e[r]=t}});var Gr=a((IG,Ul)=>{"use strict";var j1=U(),$1=Ie(),L1=TypeError,F1=Object.getOwnPropertyDescriptor,D1=j1&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();Ul.exports=D1?function(e,r){if($1(e)&&!F1(e,"length").writable)throw new L1("Cannot set read only .length");return e.length=r}:function(e,r){return e.length=r}});var yt=a((PG,Wl)=>{"use strict";var B1=P(),G1=R(),U1=Mr(),W1=G1("species");Wl.exports=function(e){return U1>=51||!B1(function(){var r=[],t=r.constructor={};return t[W1]=function(){return{foo:1}},r[e](Boolean).foo!==1})}});var pr=a((_G,Hl)=>{"use strict";var H1=A();Hl.exports=H1([].slice)});var Vl=a(()=>{"use strict";var K1=x(),Kl=Ie(),z1=ht(),V1=$(),zl=ba(),Y1=le(),J1=ke(),Q1=Br(),X1=Gr(),Z1=R(),ek=yt(),rk=pr(),tk=ek("slice"),nk=Z1("species"),xa=Array,ik=Math.max;K1({target:"Array",proto:!0,forced:!tk},{slice:function(r,t){var n=J1(this),i=Y1(n),o=zl(r,i),u=zl(t===void 0?i:t,i),c,s,l;if(Kl(n)&&(c=n.constructor,z1(c)&&(c===xa||Kl(c.prototype))?c=void 0:V1(c)&&(c=c[nk],c===null&&(c=void 0)),c===xa||c===void 0))return rk(n,o,u);for(s=new(c===void 0?xa:c)(ik(u-o,0)),l=0;o<u;o++,l++)o in n&&Q1(s,l,n[o]);return X1(s,l),s}})});var oe=a((NG,Yl)=>{"use strict";var ak=_(),ok=z();Yl.exports=function(e,r){var t=ok[e+"Prototype"],n=t&&t[r];if(n)return n;var i=ak[e],o=i&&i.prototype;return o&&o[r]}});var Ql=a((MG,Jl)=>{"use strict";Vl();var uk=oe();Jl.exports=uk("Array","slice")});var Zl=a((jG,Xl)=>{"use strict";var sk=G(),ck=Ql(),Sa=Array.prototype;Xl.exports=function(e){var r=e.slice;return e===Sa||sk(Sa,e)&&r===Sa.slice?ck:r}});var rf=a(($G,ef)=>{"use strict";var lk=Zl();ef.exports=lk});var nf=a((LG,tf)=>{"use strict";var fk=rf();tf.exports=fk});var of=a((FG,af)=>{"use strict";var pk=nf();af.exports=pk});var wa=a((DG,uf)=>{"use strict";uf.exports=of()});var Ur=a((BG,sf)=>{sf.exports=wa()});var Ye=a((GG,cf)=>{"use strict";var vk=dt(),dk=String;cf.exports=function(e){if(vk(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return dk(e)}});var vf=a((UG,pf)=>{"use strict";var Ta=A(),mk=wn(),hk=Ye(),yk=cr(),gk=Ta("".charAt),lf=Ta("".charCodeAt),bk=Ta("".slice),ff=function(e){return function(r,t){var n=hk(yk(r)),i=mk(t),o=n.length,u,c;return i<0||i>=o?e?"":void 0:(u=lf(n,i),u<55296||u>56319||i+1===o||(c=lf(n,i+1))<56320||c>57343?e?gk(n,i):u:e?bk(n,i,i+2):(u-55296<<10)+(c-56320)+65536)}};pf.exports={codeAt:ff(!1),charAt:ff(!0)}});var hf=a((WG,mf)=>{"use strict";var qk=_(),xk=N(),df=qk.WeakMap;mf.exports=xk(df)&&/native code/.test(String(df))});var gt=a((HG,gf)=>{"use strict";var Sk=fr(),wk=$r(),yf=Sk("keys");gf.exports=function(e){return yf[e]||(yf[e]=wk(e))}});var Wr=a((KG,bf)=>{"use strict";bf.exports={}});var Je=a((zG,Sf)=>{"use strict";var Tk=hf(),xf=_(),Ck=$(),Ok=xe(),Ca=H(),Oa=lt(),Ek=gt(),kk=Wr(),qf="Object already initialized",Ea=xf.TypeError,Ik=xf.WeakMap,Tn,bt,Cn,Pk=function(e){return Cn(e)?bt(e):Tn(e,{})},_k=function(e){return function(r){var t;if(!Ck(r)||(t=bt(r)).type!==e)throw new Ea("Incompatible receiver, "+e+" required");return t}};Tk||Oa.state?(he=Oa.state||(Oa.state=new Ik),he.get=he.get,he.has=he.has,he.set=he.set,Tn=function(e,r){if(he.has(e))throw new Ea(qf);return r.facade=e,he.set(e,r),r},bt=function(e){return he.get(e)||{}},Cn=function(e){return he.has(e)}):(vr=Ek("state"),kk[vr]=!0,Tn=function(e,r){if(Ca(e,vr))throw new Ea(qf);return r.facade=e,Ok(e,vr,r),r},bt=function(e){return Ca(e,vr)?e[vr]:{}},Cn=function(e){return Ca(e,vr)});var he,vr;Sf.exports={set:Tn,get:bt,has:Cn,enforce:Pk,getterFor:_k}});var Cf=a((VG,Tf)=>{"use strict";var ka=U(),Rk=H(),wf=Function.prototype,Ak=ka&&Object.getOwnPropertyDescriptor,Ia=Rk(wf,"name"),Nk=Ia&&function(){}.name==="something",Mk=Ia&&(!ka||ka&&Ak(wf,"name").configurable);Tf.exports={EXISTS:Ia,PROPER:Nk,CONFIGURABLE:Mk}});var Pa=a((YG,Ef)=>{"use strict";var jk=ke(),$k=ba(),Lk=le(),Of=function(e){return function(r,t,n){var i=jk(r),o=Lk(i);if(o===0)return!e&&-1;var u=$k(n,o),c;if(e&&t!==t){for(;o>u;)if(c=i[u++],c!==c)return!0}else for(;o>u;u++)if((e||u in i)&&i[u]===t)return e||u||0;return!e&&-1}};Ef.exports={includes:Of(!0),indexOf:Of(!1)}});var Ra=a((JG,If)=>{"use strict";var Fk=A(),_a=H(),Dk=ke(),Bk=Pa().indexOf,Gk=Wr(),kf=Fk([].push);If.exports=function(e,r){var t=Dk(e),n=0,i=[],o;for(o in t)!_a(Gk,o)&&_a(t,o)&&kf(i,o);for(;r.length>n;)_a(t,o=r[n++])&&(~Bk(i,o)||kf(i,o));return i}});var On=a((QG,Pf)=>{"use strict";Pf.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var En=a((XG,_f)=>{"use strict";var Uk=Ra(),Wk=On();_f.exports=Object.keys||function(r){return Uk(r,Wk)}});var Aa=a(Rf=>{"use strict";var Hk=U(),Kk=fa(),zk=te(),Vk=Q(),Yk=ke(),Jk=En();Rf.f=Hk&&!Kk?Object.defineProperties:function(r,t){Vk(r);for(var n=Yk(t),i=Jk(t),o=i.length,u=0,c;o>u;)zk.f(r,c=i[u++],n[c]);return r}});var Na=a((e6,Af)=>{"use strict";var Qk=W();Af.exports=Qk("document","documentElement")});var Qe=a((r6,Df)=>{"use strict";var Xk=Q(),Zk=Aa(),Nf=On(),eI=Wr(),rI=Na(),tI=bn(),nI=gt(),Mf=">",jf="<",ja="prototype",$a="script",Lf=nI("IE_PROTO"),Ma=function(){},Ff=function(e){return jf+$a+Mf+e+jf+"/"+$a+Mf},$f=function(e){e.write(Ff("")),e.close();var r=e.parentWindow.Object;return e=null,r},iI=function(){var e=tI("iframe"),r="java"+$a+":",t;return e.style.display="none",rI.appendChild(e),e.src=String(r),t=e.contentWindow.document,t.open(),t.write(Ff("document.F=Object")),t.close(),t.F},kn,In=function(){try{kn=new ActiveXObject("htmlfile")}catch{}In=typeof document<"u"?document.domain&&kn?$f(kn):iI():$f(kn);for(var e=Nf.length;e--;)delete In[ja][Nf[e]];return In()};eI[Lf]=!0;Df.exports=Object.create||function(r,t){var n;return r!==null?(Ma[ja]=Xk(r),n=new Ma,Ma[ja]=null,n[Lf]=r):n=In(),t===void 0?n:Zk.f(n,t)}});var La=a((t6,Bf)=>{"use strict";var aI=P();Bf.exports=!aI(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})});var qt=a((n6,Uf)=>{"use strict";var oI=H(),uI=N(),sI=re(),cI=gt(),lI=La(),Gf=cI("IE_PROTO"),Fa=Object,fI=Fa.prototype;Uf.exports=lI?Fa.getPrototypeOf:function(e){var r=sI(e);if(oI(r,Gf))return r[Gf];var t=r.constructor;return uI(t)&&r instanceof t?t.prototype:r instanceof Fa?fI:null}});var Pe=a((i6,Wf)=>{"use strict";var pI=xe();Wf.exports=function(e,r,t,n){return n&&n.enumerable?e[r]=t:pI(e,r,t),e}});var Ua=a((a6,zf)=>{"use strict";var vI=P(),dI=N(),mI=$(),hI=Qe(),Hf=qt(),yI=Pe(),gI=R(),bI=Z(),Ga=gI("iterator"),Kf=!1,_e,Da,Ba;[].keys&&(Ba=[].keys(),"next"in Ba?(Da=Hf(Hf(Ba)),Da!==Object.prototype&&(_e=Da)):Kf=!0);var qI=!mI(_e)||vI(function(){var e={};return _e[Ga].call(e)!==e});qI?_e={}:bI&&(_e=hI(_e));dI(_e[Ga])||yI(_e,Ga,function(){return this});zf.exports={IteratorPrototype:_e,BUGGY_SAFARI_ITERATORS:Kf}});var Yf=a((o6,Vf)=>{"use strict";var xI=xn(),SI=dt();Vf.exports=xI?{}.toString:function(){return"[object "+SI(this)+"]"}});var Re=a((u6,Qf)=>{"use strict";var wI=xn(),TI=te().f,CI=xe(),OI=H(),EI=Yf(),kI=R(),Jf=kI("toStringTag");Qf.exports=function(e,r,t,n){var i=t?e:e&&e.prototype;i&&(OI(i,Jf)||TI(i,Jf,{configurable:!0,value:r}),n&&!wI&&CI(i,"toString",EI))}});var dr=a((s6,Xf)=>{"use strict";Xf.exports={}});var ep=a((c6,Zf)=>{"use strict";var II=Ua().IteratorPrototype,PI=Qe(),_I=ze(),RI=Re(),AI=dr(),NI=function(){return this};Zf.exports=function(e,r,t,n){var i=r+" Iterator";return e.prototype=PI(II,{next:_I(+!n,t)}),RI(e,i,!1,!0),AI[i]=NI,e}});var tp=a((l6,rp)=>{"use strict";var MI=A(),jI=D();rp.exports=function(e,r,t){try{return MI(jI(Object.getOwnPropertyDescriptor(e,r)[t]))}catch{}}});var ip=a((f6,np)=>{"use strict";var $I=$();np.exports=function(e){return $I(e)||e===null}});var op=a((p6,ap)=>{"use strict";var LI=ip(),FI=String,DI=TypeError;ap.exports=function(e){if(LI(e))return e;throw new DI("Can't set "+FI(e)+" as a prototype")}});var xt=a((v6,up)=>{"use strict";var BI=tp(),GI=$(),UI=cr(),WI=op();up.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e=!1,r={},t;try{t=BI(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch{}return function(i,o){return UI(i),WI(o),GI(i)&&(e?t(i,o):i.__proto__=o),i}}():void 0)});var Rn=a((d6,yp)=>{"use strict";var HI=x(),KI=B(),Pn=Z(),mp=Cf(),zI=N(),VI=ep(),sp=qt(),cp=xt(),YI=Re(),JI=xe(),Wa=Pe(),QI=R(),lp=dr(),hp=Ua(),XI=mp.PROPER,ZI=mp.CONFIGURABLE,fp=hp.IteratorPrototype,_n=hp.BUGGY_SAFARI_ITERATORS,St=QI("iterator"),pp="keys",wt="values",vp="entries",dp=function(){return this};yp.exports=function(e,r,t,n,i,o,u){VI(t,r,n);var c=function(q){if(q===i&&v)return v;if(!_n&&q&&q in f)return f[q];switch(q){case pp:return function(){return new t(this,q)};case wt:return function(){return new t(this,q)};case vp:return function(){return new t(this,q)}}return function(){return new t(this)}},s=r+" Iterator",l=!1,f=e.prototype,p=f[St]||f["@@iterator"]||i&&f[i],v=!_n&&p||c(i),d=r==="Array"&&f.entries||p,h,m,y;if(d&&(h=sp(d.call(new e)),h!==Object.prototype&&h.next&&(!Pn&&sp(h)!==fp&&(cp?cp(h,fp):zI(h[St])||Wa(h,St,dp)),YI(h,s,!0,!0),Pn&&(lp[s]=dp))),XI&&i===wt&&p&&p.name!==wt&&(!Pn&&ZI?JI(f,"name",wt):(l=!0,v=function(){return KI(p,this)})),i)if(m={values:c(wt),keys:o?v:c(pp),entries:c(vp)},u)for(y in m)(_n||l||!(y in f))&&Wa(f,y,m[y]);else HI({target:r,proto:!0,forced:_n||l},m);return(!Pn||u)&&f[St]!==v&&Wa(f,St,v,{name:i}),lp[r]=v,m}});var An=a((m6,gp)=>{"use strict";gp.exports=function(e,r){return{value:e,done:r}}});var mr=a(()=>{"use strict";var eP=vf().charAt,rP=Ye(),qp=Je(),tP=Rn(),bp=An(),xp="String Iterator",nP=qp.set,iP=qp.getterFor(xp);tP(String,"String",function(e){nP(this,{type:xp,string:rP(e),index:0})},function(){var r=iP(this),t=r.string,n=r.index,i;return n>=t.length?bp(void 0,!0):(i=eP(t,n),r.index+=i.length,bp(i,!1))})});var Ha=a((g6,wp)=>{"use strict";var aP=B(),Sp=Q(),oP=yn();wp.exports=function(e,r,t){var n,i;Sp(e);try{if(n=oP(e,"return"),!n){if(r==="throw")throw t;return t}n=aP(n,e)}catch(o){i=!0,n=o}if(r==="throw")throw t;if(i)throw n;return Sp(n),t}});var Cp=a((b6,Tp)=>{"use strict";var uP=Q(),sP=Ha();Tp.exports=function(e,r,t,n){try{return n?r(uP(t)[0],t[1]):r(t)}catch(i){sP(e,"throw",i)}}});var Ka=a((q6,Op)=>{"use strict";var cP=R(),lP=dr(),fP=cP("iterator"),pP=Array.prototype;Op.exports=function(e){return e!==void 0&&(lP.Array===e||pP[fP]===e)}});var Tt=a((x6,kp)=>{"use strict";var vP=dt(),Ep=yn(),dP=sr(),mP=dr(),hP=R(),yP=hP("iterator");kp.exports=function(e){if(!dP(e))return Ep(e,yP)||Ep(e,"@@iterator")||mP[vP(e)]}});var Nn=a((S6,Ip)=>{"use strict";var gP=B(),bP=D(),qP=Q(),xP=Ve(),SP=Tt(),wP=TypeError;Ip.exports=function(e,r){var t=arguments.length<2?SP(e):r;if(bP(t))return qP(gP(t,e));throw new wP(xP(e)+" is not iterable")}});var Ap=a((w6,Rp)=>{"use strict";var TP=V(),CP=B(),OP=re(),EP=Cp(),kP=Ka(),IP=ht(),PP=le(),Pp=Br(),_P=Gr(),RP=Nn(),AP=Tt(),_p=Array;Rp.exports=function(r){var t=OP(r),n=IP(this),i=arguments.length,o=i>1?arguments[1]:void 0,u=o!==void 0;u&&(o=TP(o,i>2?arguments[2]:void 0));var c=AP(t),s=0,l,f,p,v,d,h;if(c&&!(this===_p&&kP(c)))for(f=n?new this:[],v=RP(t,c),d=v.next;!(p=CP(d,v)).done;s++)h=u?EP(v,o,[p.value,s],!0):p.value,Pp(f,s,h);else for(l=PP(t),f=n?new this(l):_p(l);l>s;s++)h=u?o(t[s],s):t[s],Pp(f,s,h);return _P(f,s),f}});var Va=a((T6,$p)=>{"use strict";var NP=R(),Mp=NP("iterator"),jp=!1;try{Np=0,za={next:function(){return{done:!!Np++}},return:function(){jp=!0}},za[Mp]=function(){return this},Array.from(za,function(){throw 2})}catch{}var Np,za;$p.exports=function(e,r){try{if(!r&&!jp)return!1}catch{return!1}var t=!1;try{var n={};n[Mp]=function(){return{next:function(){return{done:t=!0}}}},e(n)}catch{}return t}});var Lp=a(()=>{"use strict";var MP=x(),jP=Ap(),$P=Va(),LP=!$P(function(e){Array.from(e)});MP({target:"Array",stat:!0,forced:LP},{from:jP})});var Dp=a((E6,Fp)=>{"use strict";mr();Lp();var FP=z();Fp.exports=FP.Array.from});var Gp=a((k6,Bp)=>{"use strict";var DP=Dp();Bp.exports=DP});var Wp=a((I6,Up)=>{"use strict";var BP=Gp();Up.exports=BP});var Kp=a((P6,Hp)=>{"use strict";var GP=Wp();Hp.exports=GP});var Ya=a((_6,zp)=>{"use strict";zp.exports=Kp()});var Mn=a((R6,Vp)=>{Vp.exports=Ya()});var Ct=a((A6,Yp)=>{"use strict";var UP=TypeError,WP=9007199254740991;Yp.exports=function(e){if(e>WP)throw UP("Maximum allowed index exceeded");return e}});var Zp=a((N6,Xp)=>{"use strict";var Jp=Ie(),HP=ht(),KP=$(),zP=R(),VP=zP("species"),Qp=Array;Xp.exports=function(e){var r;return Jp(e)&&(r=e.constructor,HP(r)&&(r===Qp||Jp(r.prototype))?r=void 0:KP(r)&&(r=r[VP],r===null&&(r=void 0))),r===void 0?Qp:r}});var jn=a((M6,ev)=>{"use strict";var YP=Zp();ev.exports=function(e,r){return new(YP(e))(r===0?0:r)}});var Ja=a(()=>{"use strict";var JP=x(),QP=P(),XP=Ie(),ZP=$(),e_=re(),r_=le(),rv=Ct(),tv=Br(),t_=Gr(),n_=jn(),i_=yt(),a_=R(),o_=Mr(),nv=a_("isConcatSpreadable"),u_=o_>=51||!QP(function(){var e=[];return e[nv]=!1,e.concat()[0]!==e}),s_=function(e){if(!ZP(e))return!1;var r=e[nv];return r!==void 0?!!r:XP(e)},c_=!u_||!i_("concat");JP({target:"Array",proto:!0,arity:1,forced:c_},{concat:function(r){var t=e_(this),n=n_(t,0),i=0,o,u,c,s,l;for(o=-1,c=arguments.length;o<c;o++)if(l=o===-1?t:arguments[o],s_(l))for(s=r_(l),rv(i+s),u=0;u<s;u++,i++)u in l&&tv(n,i,l[u]);else rv(i+1),tv(n,i++,l);return t_(n,i),n}})});var Ot=a(()=>{});var Et=a(iv=>{"use strict";var l_=Ra(),f_=On(),p_=f_.concat("length","prototype");iv.f=Object.getOwnPropertyNames||function(r){return l_(r,p_)}});var Qa=a((B6,uv)=>{"use strict";var v_=qe(),d_=ke(),av=Et().f,m_=pr(),ov=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],h_=function(e){try{return av(e)}catch{return m_(ov)}};uv.exports.f=function(r){return ov&&v_(r)==="Window"?h_(r):av(d_(r))}});var $n=a(sv=>{"use strict";sv.f=Object.getOwnPropertySymbols});var Ln=a((U6,cv)=>{"use strict";var y_=te();cv.exports=function(e,r,t){return y_.f(e,r,t)}});var Hr=a(lv=>{"use strict";var g_=R();lv.f=g_});var M=a((H6,pv)=>{"use strict";var fv=z(),b_=H(),q_=Hr(),x_=te().f;pv.exports=function(e){var r=fv.Symbol||(fv.Symbol={});b_(r,e)||x_(r,e,{value:q_.f(e)})}});var Xa=a((K6,vv)=>{"use strict";var S_=B(),w_=W(),T_=R(),C_=Pe();vv.exports=function(){var e=w_("Symbol"),r=e&&e.prototype,t=r&&r.valueOf,n=T_("toPrimitive");r&&!r[n]&&C_(r,n,function(i){return S_(t,this)},{arity:1})}});var kt=a((z6,mv)=>{"use strict";var O_=V(),E_=mn(),k_=re(),I_=le(),dv=jn(),Za=Br(),Xe=function(e){var r=e===1,t=e===2,n=e===3,i=e===4,o=e===6,u=e===7,c=e===5||o;return function(s,l,f){for(var p=k_(s),v=E_(p),d=I_(v),h=O_(l,f),m=0,y=0,q=r?dv(s,d):t||u?dv(s,0):void 0,b,k;d>m;m++)if((c||m in v)&&(b=v[m],k=h(b,m,p),e))if(r)Za(q,m,k);else if(k)switch(e){case 3:return!0;case 5:return b;case 6:return m;case 2:Za(q,y++,b)}else switch(e){case 4:return!1;case 7:Za(q,y++,b)}return o?-1:n||i?i:q}};mv.exports={forEach:Xe(0),map:Xe(1),filter:Xe(2),some:Xe(3),every:Xe(4),find:Xe(5),findIndex:Xe(6),filterReject:Xe(7)}});var Rv=a(()=>{"use strict";var Fn=x(),_t=_(),so=B(),P_=A(),__=Z(),Kr=U(),zr=lr(),R_=P(),K=H(),A_=G(),no=Q(),Dn=ke(),co=gn(),N_=Ye(),io=ze(),Vr=Qe(),gv=En(),M_=Et(),bv=Qa(),j_=$n(),qv=ft(),xv=te(),$_=Aa(),Sv=Xi(),eo=Pe(),L_=Ln(),lo=fr(),F_=gt(),wv=Wr(),hv=$r(),D_=R(),B_=Hr(),G_=M(),U_=Xa(),W_=Re(),Tv=Je(),Bn=kt().forEach,ne=F_("hidden"),Gn="Symbol",Pt="prototype",H_=Tv.set,yv=Tv.getterFor(Gn),fe=Object[Pt],hr=_t.Symbol,It=hr&&hr[Pt],K_=_t.RangeError,z_=_t.TypeError,ro=_t.QObject,Cv=qv.f,yr=xv.f,Ov=bv.f,V_=Sv.f,Ev=P_([].push),Ae=lo("symbols"),Rt=lo("op-symbols"),Y_=lo("wks"),ao=!ro||!ro[Pt]||!ro[Pt].findChild,kv=function(e,r,t){var n=Cv(fe,r);n&&delete fe[r],yr(e,r,t),n&&e!==fe&&yr(fe,r,n)},oo=Kr&&R_(function(){return Vr(yr({},"a",{get:function(){return yr(this,"a",{value:7}).a}})).a!==7})?kv:yr,to=function(e,r){var t=Ae[e]=Vr(It);return H_(t,{type:Gn,tag:e,description:r}),Kr||(t.description=r),t},Un=function(r,t,n){r===fe&&Un(Rt,t,n),no(r);var i=co(t);return no(n),K(Ae,i)?(n.enumerable?(K(r,ne)&&r[ne][i]&&(r[ne][i]=!1),n=Vr(n,{enumerable:io(0,!1)})):(K(r,ne)||yr(r,ne,io(1,Vr(null))),r[ne][i]=!0),oo(r,i,n)):yr(r,i,n)},fo=function(r,t){no(r);var n=Dn(t),i=gv(n).concat(_v(n));return Bn(i,function(o){(!Kr||so(uo,n,o))&&Un(r,o,n[o])}),r},J_=function(r,t){return t===void 0?Vr(r):fo(Vr(r),t)},uo=function(r){var t=co(r),n=so(V_,this,t);return this===fe&&K(Ae,t)&&!K(Rt,t)?!1:n||!K(this,t)||!K(Ae,t)||K(this,ne)&&this[ne][t]?n:!0},Iv=function(r,t){var n=Dn(r),i=co(t);if(!(n===fe&&K(Ae,i)&&!K(Rt,i))){var o=Cv(n,i);return o&&K(Ae,i)&&!(K(n,ne)&&n[ne][i])&&(o.enumerable=!0),o}},Pv=function(r){var t=Ov(Dn(r)),n=[];return Bn(t,function(i){!K(Ae,i)&&!K(wv,i)&&Ev(n,i)}),n},_v=function(e){var r=e===fe,t=Ov(r?Rt:Dn(e)),n=[];return Bn(t,function(i){K(Ae,i)&&(!r||K(fe,i))&&Ev(n,Ae[i])}),n};zr||(hr=function(){if(A_(It,this))throw new z_("Symbol is not a constructor");var r=!arguments.length||arguments[0]===void 0?void 0:N_(arguments[0]),t=hv(r),n=function(i){var o=this===void 0?_t:this;o===fe&&so(n,Rt,i),K(o,ne)&&K(o[ne],t)&&(o[ne][t]=!1);var u=io(1,i);try{oo(o,t,u)}catch(c){if(!(c instanceof K_))throw c;kv(o,t,u)}};return Kr&&ao&&oo(fe,t,{configurable:!0,set:n}),to(t,r)},It=hr[Pt],eo(It,"toString",function(){return yv(this).tag}),eo(hr,"withoutSetter",function(e){return to(hv(e),e)}),Sv.f=uo,xv.f=Un,$_.f=fo,qv.f=Iv,M_.f=bv.f=Pv,j_.f=_v,B_.f=function(e){return to(D_(e),e)},Kr&&(L_(It,"description",{configurable:!0,get:function(){return yv(this).description}}),__||eo(fe,"propertyIsEnumerable",uo,{unsafe:!0})));Fn({global:!0,constructor:!0,wrap:!0,forced:!zr,sham:!zr},{Symbol:hr});Bn(gv(Y_),function(e){G_(e)});Fn({target:Gn,stat:!0,forced:!zr},{useSetter:function(){ao=!0},useSimple:function(){ao=!1}});Fn({target:"Object",stat:!0,forced:!zr,sham:!Kr},{create:J_,defineProperty:Un,defineProperties:fo,getOwnPropertyDescriptor:Iv});Fn({target:"Object",stat:!0,forced:!zr},{getOwnPropertyNames:Pv});U_();W_(hr,Gn);wv[ne]=!0});var po=a((J6,Av)=>{"use strict";var Q_=lr();Av.exports=Q_&&!!Symbol.for&&!!Symbol.keyFor});var Mv=a(()=>{"use strict";var X_=x(),Z_=W(),eR=H(),rR=Ye(),Nv=fr(),tR=po(),vo=Nv("string-to-symbol-registry"),nR=Nv("symbol-to-string-registry");X_({target:"Symbol",stat:!0,forced:!tR},{for:function(e){var r=rR(e);if(eR(vo,r))return vo[r];var t=Z_("Symbol")(r);return vo[r]=t,nR[t]=r,t}})});var $v=a(()=>{"use strict";var iR=x(),aR=H(),oR=jr(),uR=Ve(),sR=fr(),cR=po(),jv=sR("symbol-to-string-registry");iR({target:"Symbol",stat:!0,forced:!cR},{keyFor:function(r){if(!oR(r))throw new TypeError(uR(r)+" is not a symbol");if(aR(jv,r))return jv[r]}})});var Fv=a((rU,Lv)=>{"use strict";var lR=$(),fR=Je().get;Lv.exports=function(r){if(!lR(r))return!1;var t=fR(r);return!!t&&t.type==="RawJSON"}});var Wv=a((tU,Uv)=>{"use strict";var mo=A(),pR=H(),Wn=SyntaxError,vR=parseInt,dR=String.fromCharCode,mR=mo("".charAt),Dv=mo("".slice),Bv=mo(/./.exec),Gv={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"},hR=/^[\da-f]{4}$/i,yR=/^[\u0000-\u001F]$/;Uv.exports=function(e,r){for(var t=!0,n="";r<e.length;){var i=mR(e,r);if(i==="\\"){var o=Dv(e,r,r+2);if(pR(Gv,o))n+=Gv[o],r+=2;else if(o==="\\u"){r+=2;var u=Dv(e,r,r+4);if(!Bv(hR,u))throw new Wn("Bad Unicode escape at: "+r);n+=dR(vR(u,16)),r+=4}else throw new Wn('Unknown escape sequence: "'+o+'"')}else if(i==='"'){t=!1,r++;break}else{if(Bv(yR,i))throw new Wn("Bad control character in string literal at: "+r);n+=i,r++}}if(t)throw new Wn("Unterminated string at: "+r);return{value:n,end:r}}});var Kv=a((nU,Hv)=>{"use strict";var gR=P();Hv.exports=!gR(function(){var e="9007199254740993",r=JSON.rawJSON(e);return!JSON.isRawJSON(r)||JSON.stringify(r)!==e})});var od=a(()=>{"use strict";var bR=x(),ed=W(),qR=Ar(),rd=B(),gr=A(),td=P(),zv=Ie(),Kn=N(),xR=Fv(),Vv=jr(),Yv=qe(),SR=Ye(),wR=pr(),TR=Wv(),CR=$r(),OR=lr(),ho=Kv(),nd=String,Ze=ed("JSON","stringify"),Hn=gr(/./.exec),go=gr("".charAt),ER=gr("".charCodeAt),kR=gr("".replace),yo=gr("".slice),bo=gr([].push),IR=gr(1.1.toString),PR=/[\uD800-\uDFFF]/g,Jv=/^[\uD800-\uDBFF]$/,Qv=/^[\uDC00-\uDFFF]$/,qo=CR(),Xv=qo.length,id=!OR||td(function(){var e=ed("Symbol")("stringify detection");return Ze([e])!=="[null]"||Ze({a:e})!=="{}"||Ze(Object(e))!=="{}"}),Zv=td(function(){return Ze("\uDF06\uD834")!=='"\\udf06\\ud834"'||Ze("\uDEAD")!=='"\\udead"'}),_R=id?function(e,r){var t=wR(arguments),n=ad(r);if(!(!Kn(n)&&(e===void 0||Vv(e))))return t[1]=function(i,o){if(Kn(n)&&(o=rd(n,this,nd(i),o)),!Vv(o))return o},qR(Ze,null,t)}:Ze,RR=function(e,r,t){var n=go(t,r-1),i=go(t,r+1);return Hn(Jv,e)&&!Hn(Qv,i)||Hn(Qv,e)&&!Hn(Jv,n)?"\\u"+IR(ER(e,0),16):e},ad=function(e){if(Kn(e))return e;if(zv(e)){for(var r=e.length,t=[],n=0;n<r;n++){var i=e[n];typeof i=="string"?bo(t,i):(typeof i=="number"||Yv(i)==="Number"||Yv(i)==="String")&&bo(t,SR(i))}var o=t.length,u=!0;return function(c,s){if(u)return u=!1,s;if(zv(this))return s;for(var l=0;l<o;l++)if(t[l]===c)return s}}};Ze&&bR({target:"JSON",stat:!0,arity:3,forced:id||Zv||!ho},{stringify:function(r,t,n){var i=ad(t),o=[],u=_R(r,function(d,h){var m=Kn(i)?rd(i,this,nd(d),h):h;return!ho&&xR(m)?qo+(bo(o,m.rawJSON)-1):m},n);if(typeof u!="string"||(Zv&&(u=kR(u,PR,RR)),ho))return u;for(var c="",s=u.length,l=0;l<s;l++){var f=go(u,l);if(f==='"'){var p=TR(u,++l).end-1,v=yo(u,l,p);c+=yo(v,0,Xv)===qo?o[yo(v,Xv)]:'"'+v+'"',l=p}else c+=f}return c}})});var sd=a(()=>{"use strict";var AR=x(),NR=lr(),MR=P(),ud=$n(),jR=re(),$R=!NR||MR(function(){ud.f(1)});AR({target:"Object",stat:!0,forced:$R},{getOwnPropertySymbols:function(r){var t=ud.f;return t?t(jR(r)):[]}})});var cd=a(()=>{"use strict";Rv();Mv();$v();od();sd()});var xo=a(()=>{"use strict";var LR=M();LR("asyncDispose")});var So=a(()=>{"use strict";var FR=M();FR("asyncIterator")});var ld=a(()=>{});var wo=a(()=>{"use strict";var DR=M();DR("dispose")});var fd=a(()=>{"use strict";var BR=M();BR("hasInstance")});var pd=a(()=>{"use strict";var GR=M();GR("isConcatSpreadable")});var To=a(()=>{"use strict";var UR=M();UR("iterator")});var vd=a(()=>{"use strict";var WR=M();WR("match")});var dd=a(()=>{"use strict";var HR=M();HR("matchAll")});var md=a(()=>{"use strict";var KR=M();KR("replace")});var hd=a(()=>{"use strict";var zR=M();zR("search")});var yd=a(()=>{"use strict";var VR=M();VR("species")});var gd=a(()=>{"use strict";var YR=M();YR("split")});var Co=a(()=>{"use strict";var JR=M(),QR=Xa();JR("toPrimitive");QR()});var bd=a(()=>{"use strict";var XR=W(),ZR=M(),e2=Re();ZR("toStringTag");e2(XR("Symbol"),"Symbol")});var qd=a(()=>{"use strict";var r2=M();r2("unscopables")});var xd=a(()=>{"use strict";var t2=_(),n2=Re();n2(t2.JSON,"JSON",!0)});var Sd=a(()=>{});var wd=a(()=>{});var Cd=a((VU,Td)=>{"use strict";Ja();Ot();cd();xo();So();ld();wo();fd();pd();To();vd();dd();md();hd();yd();gd();Co();bd();qd();xd();Sd();wd();var i2=z();Td.exports=i2.Symbol});var Oo=a((YU,Od)=>{"use strict";Od.exports=function(){}});var br=a((JU,_d)=>{"use strict";var a2=ke(),Eo=Oo(),Ed=dr(),Id=Je(),o2=te().f,u2=Rn(),zn=An(),s2=Z(),c2=U(),Pd="Array Iterator",l2=Id.set,f2=Id.getterFor(Pd);_d.exports=u2(Array,"Array",function(e,r){l2(this,{type:Pd,target:a2(e),index:0,kind:r})},function(){var e=f2(this),r=e.target,t=e.index++;if(!r||t>=r.length)return e.target=null,zn(void 0,!0);switch(e.kind){case"keys":return zn(t,!1);case"values":return zn(r[t],!1)}return zn([t,r[t]],!1)},"values");var kd=Ed.Arguments=Ed.Array;Eo("keys");Eo("values");Eo("entries");if(!s2&&c2&&kd.name!=="values")try{o2(kd,"name",{value:"values"})}catch{}});var Ad=a((QU,Rd)=>{"use strict";Rd.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var qr=a(()=>{"use strict";br();var p2=Ad(),v2=_(),d2=Re(),Nd=dr();for(Vn in p2)d2(v2[Vn],Vn),Nd[Vn]=Nd.Array;var Vn});var jd=a((eW,Md)=>{"use strict";var m2=Cd();qr();Md.exports=m2});var Fd=a(()=>{"use strict";var h2=R(),y2=te().f,$d=h2("metadata"),Ld=Function.prototype;Ld[$d]===void 0&&y2(Ld,$d,{value:null})});var Dd=a(()=>{"use strict";xo()});var Bd=a(()=>{"use strict";wo()});var Gd=a(()=>{"use strict";var g2=M();g2("metadata")});var Wd=a((cW,Ud)=>{"use strict";var b2=jd();Fd();Dd();Bd();Gd();Ud.exports=b2});var Io=a((lW,Hd)=>{"use strict";var q2=W(),x2=A(),ko=q2("Symbol"),S2=ko.keyFor,w2=x2(ko.prototype.valueOf);Hd.exports=ko.isRegisteredSymbol||function(r){try{return S2(w2(r))!==void 0}catch{return!1}}});var Kd=a(()=>{"use strict";var T2=x(),C2=Io();T2({target:"Symbol",stat:!0},{isRegisteredSymbol:C2})});var Ro=a((vW,Xd)=>{"use strict";var O2=fr(),Jd=W(),E2=A(),k2=jr(),I2=R(),Jn=Jd("Symbol"),zd=Jn.isWellKnownSymbol,Qd=Jd("Object","getOwnPropertyNames"),P2=E2(Jn.prototype.valueOf),Vd=O2("wks");for(Yn=0,Po=Qd(Jn),Yd=Po.length;Yn<Yd;Yn++)try{_o=Po[Yn],k2(Jn[_o])&&I2(_o)}catch{}var _o,Yn,Po,Yd;Xd.exports=function(r){if(zd&&zd(r))return!0;try{for(var t=P2(r),n=0,i=Qd(Vd),o=i.length;n<o;n++)if(Vd[i[n]]==t)return!0}catch{}return!1}});var Zd=a(()=>{"use strict";var _2=x(),R2=Ro();_2({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:R2})});var em=a(()=>{"use strict";var A2=M();A2("customMatcher")});var rm=a(()=>{"use strict";var N2=M();N2("observable")});var tm=a(()=>{"use strict";var M2=x(),j2=Io();M2({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:j2})});var nm=a(()=>{"use strict";var $2=x(),L2=Ro();$2({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:L2})});var im=a(()=>{"use strict";var F2=M();F2("matcher")});var am=a(()=>{"use strict";var D2=M();D2("metadataKey")});var om=a(()=>{"use strict";var B2=M();B2("patternMatch")});var um=a(()=>{"use strict";var G2=M();G2("replaceAll")});var cm=a((RW,sm)=>{"use strict";var U2=Wd();Kd();Zd();em();rm();tm();nm();im();am();om();um();sm.exports=U2});var Se=a((AW,lm)=>{"use strict";lm.exports=cm()});var Qn=a((NW,fm)=>{fm.exports=Se()});var vm=a((MW,pm)=>{"use strict";br();mr();var W2=Tt();pm.exports=W2});var mm=a((jW,dm)=>{"use strict";var H2=vm();qr();dm.exports=H2});var ym=a(($W,hm)=>{"use strict";var K2=mm();hm.exports=K2});var bm=a((LW,gm)=>{"use strict";var z2=ym();gm.exports=z2});var Ao=a((FW,qm)=>{"use strict";qm.exports=bm()});var Xn=a((DW,xm)=>{xm.exports=Ao()});var wm=a((BW,Sm)=>{"use strict";br();mr();var V2=Nn();Sm.exports=V2});var Cm=a((GW,Tm)=>{"use strict";var Y2=wm();qr();Tm.exports=Y2});var Em=a((UW,Om)=>{"use strict";var J2=Cm();Om.exports=J2});var Im=a((WW,km)=>{"use strict";var Q2=Em();km.exports=Q2});var _m=a((HW,Pm)=>{"use strict";Pm.exports=Im()});var Zn=a((KW,Rm)=>{Rm.exports=_m()});var Nm=a((zW,Am)=>{"use strict";var X2=W(),Z2=A(),eA=Et(),rA=$n(),tA=Q(),nA=Z2([].concat);Am.exports=X2("Reflect","ownKeys")||function(r){var t=eA.f(tA(r)),n=rA.f;return n?nA(t,n(r)):t}});var $m=a((VW,jm)=>{"use strict";var Mm=H(),iA=Nm(),aA=ft(),oA=te();jm.exports=function(e,r,t){for(var n=iA(r),i=oA.f,o=aA.f,u=0;u<n.length;u++){var c=n[u];!Mm(e,c)&&!(t&&Mm(t,c))&&i(e,c,o(r,c))}}});var Fm=a((YW,Lm)=>{"use strict";var uA=$(),sA=xe();Lm.exports=function(e,r){uA(r)&&"cause"in r&&sA(e,"cause",r.cause)}});var Um=a((JW,Gm)=>{"use strict";var cA=A(),Dm=Error,lA=cA("".replace),fA=function(e){return String(new Dm(e).stack)}("zxcasd"),Bm=/\n\s*at [^:]*:[^\n]*/,pA=Bm.test(fA);Gm.exports=function(e,r){if(pA&&typeof e=="string"&&!Dm.prepareStackTrace)for(;r--;)e=lA(e,Bm,"");return e}});var Hm=a((QW,Wm)=>{"use strict";var vA=P(),dA=ze();Wm.exports=!vA(function(){var e=new Error("a");return"stack"in e?(Object.defineProperty(e,"stack",dA(1,7)),e.stack!==7):!0})});var Vm=a((XW,zm)=>{"use strict";var mA=xe(),hA=Um(),yA=Hm(),Km=Error.captureStackTrace;zm.exports=function(e,r,t,n){yA&&(Km?Km(e,r):mA(e,"stack",hA(t,n)))}});var pe=a((ZW,Xm)=>{"use strict";var gA=V(),bA=B(),qA=Q(),xA=Ve(),SA=Ka(),wA=le(),Ym=G(),TA=Nn(),CA=Tt(),Jm=Ha(),OA=TypeError,ei=function(e,r){this.stopped=e,this.result=r},Qm=ei.prototype;Xm.exports=function(e,r,t){var n=t&&t.that,i=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),c=!!(t&&t.INTERRUPTED),s=gA(r,n),l,f,p,v,d,h,m,y=function(b){return l&&Jm(l,"normal"),new ei(!0,b)},q=function(b){return i?(qA(b),c?s(b[0],b[1],y):s(b[0],b[1])):c?s(b,y):s(b)};if(o)l=e.iterator;else if(u)l=e;else{if(f=CA(e),!f)throw new OA(xA(e)+" is not iterable");if(SA(f)){for(p=0,v=wA(e);v>p;p++)if(d=q(e[p]),d&&Ym(Qm,d))return d;return new ei(!1)}l=TA(e,f)}for(h=o?e.next:l.next;!(m=bA(h,l)).done;){try{d=q(m.value)}catch(b){Jm(l,"throw",b)}if(typeof d=="object"&&d&&Ym(Qm,d))return d}return new ei(!1)}});var eh=a((eH,Zm)=>{"use strict";var EA=Ye();Zm.exports=function(e,r){return e===void 0?arguments.length<2?"":r:EA(e)}});var th=a(()=>{"use strict";var kA=x(),IA=G(),PA=qt(),ri=xt(),_A=$m(),rh=Qe(),No=xe(),Mo=ze(),RA=Fm(),AA=Vm(),NA=pe(),MA=eh(),jA=R(),$A=jA("toStringTag"),ti=Error,LA=[].push,Yr=function(r,t){var n=IA(jo,this),i;ri?i=ri(new ti,n?PA(this):jo):(i=n?this:rh(jo),No(i,$A,"Error")),t!==void 0&&No(i,"message",MA(t)),AA(i,Yr,i.stack,1),arguments.length>2&&RA(i,arguments[2]);var o=[];return NA(r,LA,{that:o}),No(i,"errors",o),i};ri?ri(Yr,ti):_A(Yr,ti,{name:!0});var jo=Yr.prototype=rh(ti.prototype,{constructor:Mo(1,Yr),message:Mo(1,""),name:Mo(1,"AggregateError")});kA({global:!0,constructor:!0,arity:2},{AggregateError:Yr})});var $o=a(()=>{"use strict";th()});var Lo=a((aH,nh)=>{"use strict";var At=_(),FA=Nr(),DA=qe(),ni=function(e){return FA.slice(0,e.length)===e};nh.exports=function(){return ni("Bun/")?"BUN":ni("Cloudflare-Workers")?"CLOUDFLARE":ni("Deno/")?"DENO":ni("Node.js/")?"NODE":At.Bun&&typeof Bun.version=="string"?"BUN":At.Deno&&typeof Deno.version=="object"?"DENO":DA(At.process)==="process"?"NODE":At.window&&At.document?"BROWSER":"REST"}()});var Nt=a((oH,ih)=>{"use strict";var BA=Lo();ih.exports=BA==="NODE"});var Fo=a((uH,oh)=>{"use strict";var GA=W(),UA=Ln(),WA=R(),HA=U(),ah=WA("species");oh.exports=function(e){var r=GA(e);HA&&r&&!r[ah]&&UA(r,ah,{configurable:!0,get:function(){return this}})}});var ii=a((sH,uh)=>{"use strict";var KA=G(),zA=TypeError;uh.exports=function(e,r){if(KA(r,e))return e;throw new zA("Incorrect invocation")}});var Do=a((cH,sh)=>{"use strict";var VA=ht(),YA=Ve(),JA=TypeError;sh.exports=function(e){if(VA(e))return e;throw new JA(YA(e)+" is not a constructor")}});var Bo=a((lH,lh)=>{"use strict";var ch=Q(),QA=Do(),XA=sr(),ZA=R(),eN=ZA("species");lh.exports=function(e,r){var t=ch(e).constructor,n;return t===void 0||XA(n=ch(t)[eN])?r:QA(n)}});var ph=a((fH,fh)=>{"use strict";var rN=TypeError;fh.exports=function(e,r){if(e<r)throw new rN("Not enough arguments");return e}});var Go=a((pH,vh)=>{"use strict";var tN=Nr();vh.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(tN)});var Qo=a((vH,Sh)=>{"use strict";var ue=_(),nN=Ar(),iN=V(),dh=N(),aN=H(),xh=P(),mh=Na(),oN=pr(),hh=bn(),uN=ph(),sN=Go(),cN=Nt(),Vo=ue.setImmediate,Yo=ue.clearImmediate,lN=ue.process,Uo=ue.Dispatch,fN=ue.Function,yh=ue.MessageChannel,pN=ue.String,Wo=0,Mt={},gh="onreadystatechange",jt,xr,Ho,Ko;xh(function(){jt=ue.location});var Jo=function(e){if(aN(Mt,e)){var r=Mt[e];delete Mt[e],r()}},zo=function(e){return function(){Jo(e)}},bh=function(e){Jo(e.data)},qh=function(e){ue.postMessage(pN(e),jt.protocol+"//"+jt.host)};(!Vo||!Yo)&&(Vo=function(r){uN(arguments.length,1);var t=dh(r)?r:fN(r),n=oN(arguments,1);return Mt[++Wo]=function(){nN(t,void 0,n)},xr(Wo),Wo},Yo=function(r){delete Mt[r]},cN?xr=function(e){lN.nextTick(zo(e))}:Uo&&Uo.now?xr=function(e){Uo.now(zo(e))}:yh&&!sN?(Ho=new yh,Ko=Ho.port2,Ho.port1.onmessage=bh,xr=iN(Ko.postMessage,Ko)):ue.addEventListener&&dh(ue.postMessage)&&!ue.importScripts&&jt&&jt.protocol!=="file:"&&!xh(qh)?(xr=qh,ue.addEventListener("message",bh,!1)):gh in hh("script")?xr=function(e){mh.appendChild(hh("script"))[gh]=function(){mh.removeChild(this),Jo(e)}}:xr=function(e){setTimeout(zo(e),0)});Sh.exports={set:Vo,clear:Yo}});var Ch=a((dH,Th)=>{"use strict";var wh=_(),vN=U(),dN=Object.getOwnPropertyDescriptor;Th.exports=function(e){if(!vN)return wh[e];var r=dN(wh,e);return r&&r.value}});var Xo=a((mH,Eh)=>{"use strict";var Oh=function(){this.head=null,this.tail=null};Oh.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;return r===null&&(this.tail=null),e.item}}};Eh.exports=Oh});var Ih=a((hH,kh)=>{"use strict";var mN=Nr();kh.exports=/ipad|iphone|ipod/i.test(mN)&&typeof Pebble<"u"});var _h=a((yH,Ph)=>{"use strict";var hN=Nr();Ph.exports=/web0s(?!.*chrome)/i.test(hN)});var Lh=a((gH,$h)=>{"use strict";var Qr=_(),yN=Ch(),Rh=V(),Zo=Qo().set,gN=Xo(),bN=Go(),qN=Ih(),xN=_h(),eu=Nt(),Ah=Qr.MutationObserver||Qr.WebKitMutationObserver,Nh=Qr.document,Mh=Qr.process,ai=Qr.Promise,nu=yN("queueMicrotask"),Jr,ru,tu,oi,jh;nu||($t=new gN,Lt=function(){var e,r;for(eu&&(e=Mh.domain)&&e.exit();r=$t.get();)try{r()}catch(t){throw $t.head&&Jr(),t}e&&e.enter()},!bN&&!eu&&!xN&&Ah&&Nh?(ru=!0,tu=Nh.createTextNode(""),new Ah(Lt).observe(tu,{characterData:!0}),Jr=function(){tu.data=ru=!ru}):!qN&&ai&&ai.resolve?(oi=ai.resolve(void 0),oi.constructor=ai,jh=Rh(oi.then,oi),Jr=function(){jh(Lt)}):eu?Jr=function(){Mh.nextTick(Lt)}:(Zo=Rh(Zo,Qr),Jr=function(){Zo(Lt)}),nu=function(e){$t.head||Jr(),$t.add(e)});var $t,Lt;$h.exports=nu});var Dh=a((bH,Fh)=>{"use strict";Fh.exports=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch{}}});var Sr=a((qH,Bh)=>{"use strict";Bh.exports=function(e){try{return{error:!1,value:e()}}catch(r){return{error:!0,value:r}}}});var wr=a((xH,Gh)=>{"use strict";var SN=_();Gh.exports=SN.Promise});var Xr=a((SH,Kh)=>{"use strict";var wN=_(),Ft=wr(),TN=N(),CN=la(),ON=ya(),EN=R(),Uh=Lo(),kN=Z(),iu=Mr(),Wh=Ft&&Ft.prototype,IN=EN("species"),au=!1,Hh=TN(wN.PromiseRejectionEvent),PN=CN("Promise",function(){var e=ON(Ft),r=e!==String(Ft);if(!r&&iu===66||kN&&!(Wh.catch&&Wh.finally))return!0;if(!iu||iu<51||!/native code/.test(e)){var t=new Ft(function(o){o(1)}),n=function(o){o(function(){},function(){})},i=t.constructor={};if(i[IN]=n,au=t.then(function(){})instanceof n,!au)return!0}return!r&&(Uh==="BROWSER"||Uh==="DENO")&&!Hh});Kh.exports={CONSTRUCTOR:PN,REJECTION_EVENT:Hh,SUBCLASSING:au}});var we=a((wH,Vh)=>{"use strict";var zh=D(),_N=TypeError,RN=function(e){var r,t;this.promise=new e(function(n,i){if(r!==void 0||t!==void 0)throw new _N("Bad Promise constructor");r=n,t=i}),this.resolve=zh(r),this.reject=zh(t)};Vh.exports.f=function(e){return new RN(e)}});var dy=a(()=>{"use strict";var AN=x(),NN=Z(),li=Nt(),er=_(),MN=z(),tt=B(),Yh=Pe(),Jh=xt(),jN=Re(),$N=Fo(),LN=D(),ci=N(),FN=$(),DN=ii(),BN=Bo(),ry=Qo().set,lu=Lh(),GN=Dh(),UN=Sr(),WN=Xo(),ty=Je(),fi=wr(),fu=Xr(),ny=we(),pi="Promise",iy=fu.CONSTRUCTOR,HN=fu.REJECTION_EVENT,KN=fu.SUBCLASSING,ou=ty.getterFor(pi),zN=ty.set,Zr=fi&&fi.prototype,Tr=fi,ui=Zr,ay=er.TypeError,uu=er.document,pu=er.process,su=ny.f,VN=su,YN=!!(uu&&uu.createEvent&&er.dispatchEvent),oy="unhandledrejection",JN="rejectionhandled",Qh=0,uy=1,QN=2,vu=1,sy=2,si,Xh,cy,Zh,ly=function(e){var r;return FN(e)&&ci(r=e.then)?r:!1},fy=function(e,r){var t=r.value,n=r.state===uy,i=n?e.ok:e.fail,o=e.resolve,u=e.reject,c=e.domain,s,l,f;try{i?(n||(r.rejection===sy&&ZN(r),r.rejection=vu),i===!0?s=t:(c&&c.enter(),s=i(t),c&&(c.exit(),f=!0)),s===e.promise?u(new ay("Promise-chain cycle")):(l=ly(s))?tt(l,s,o,u):o(s)):u(t)}catch(p){c&&!f&&c.exit(),u(p)}},py=function(e,r){e.notified||(e.notified=!0,lu(function(){for(var t=e.reactions,n;n=t.get();)fy(n,e);e.notified=!1,r&&!e.rejection&&XN(e)}))},vy=function(e,r,t){var n,i;YN?(n=uu.createEvent("Event"),n.promise=r,n.reason=t,n.initEvent(e,!1,!0),er.dispatchEvent(n)):n={promise:r,reason:t},!HN&&(i=er["on"+e])?i(n):e===oy&&GN("Unhandled promise rejection",t)},XN=function(e){tt(ry,er,function(){var r=e.facade,t=e.value,n=ey(e),i;if(n&&(i=UN(function(){li?pu.emit("unhandledRejection",t,r):vy(oy,r,t)}),e.rejection=li||ey(e)?sy:vu,i.error))throw i.value})},ey=function(e){return e.rejection!==vu&&!e.parent},ZN=function(e){tt(ry,er,function(){var r=e.facade;li?pu.emit("rejectionHandled",r):vy(JN,r,e.value)})},et=function(e,r,t){return function(n){e(r,n,t)}},rt=function(e,r,t){e.done||(e.done=!0,t&&(e=t),e.value=r,e.state=QN,py(e,!0))},cu=function(e,r,t){if(!e.done){e.done=!0,t&&(e=t);try{if(e.facade===r)throw new ay("Promise can't be resolved itself");var n=ly(r);n?lu(function(){var i={done:!1};try{tt(n,r,et(cu,i,e),et(rt,i,e))}catch(o){rt(i,o,e)}}):(e.value=r,e.state=uy,py(e,!1))}catch(i){rt({done:!1},i,e)}}};if(iy&&(Tr=function(r){DN(this,ui),LN(r),tt(si,this);var t=ou(this);try{r(et(cu,t),et(rt,t))}catch(n){rt(t,n)}},ui=Tr.prototype,si=function(r){zN(this,{type:pi,done:!1,notified:!1,parent:!1,reactions:new WN,rejection:!1,state:Qh,value:null})},si.prototype=Yh(ui,"then",function(r,t){var n=ou(this),i=su(BN(this,Tr));return n.parent=!0,i.ok=ci(r)?r:!0,i.fail=ci(t)&&t,i.domain=li?pu.domain:void 0,n.state===Qh?n.reactions.add(i):lu(function(){fy(i,n)}),i.promise}),Xh=function(){var e=new si,r=ou(e);this.promise=e,this.resolve=et(cu,r),this.reject=et(rt,r)},ny.f=su=function(e){return e===Tr||e===cy?new Xh(e):VN(e)},!NN&&ci(fi)&&Zr!==Object.prototype)){Zh=Zr.then,KN||Yh(Zr,"then",function(r,t){var n=this;return new Tr(function(i,o){tt(Zh,n,i,o)}).then(r,t)},{unsafe:!0});try{delete Zr.constructor}catch{}Jh&&Jh(Zr,ui)}AN({global:!0,constructor:!0,wrap:!0,forced:iy},{Promise:Tr});cy=MN.Promise;jN(Tr,pi,!1,!0);$N(pi)});var Dt=a((OH,my)=>{"use strict";var eM=wr(),rM=Va(),tM=Xr().CONSTRUCTOR;my.exports=tM||!rM(function(e){eM.all(e).then(void 0,function(){})})});var hy=a(()=>{"use strict";var nM=x(),iM=B(),aM=D(),oM=we(),uM=Sr(),sM=pe(),cM=Dt();nM({target:"Promise",stat:!0,forced:cM},{all:function(r){var t=this,n=oM.f(t),i=n.resolve,o=n.reject,u=uM(function(){var c=aM(t.resolve),s=[],l=0,f=1;sM(r,function(p){var v=l++,d=!1;f++,iM(c,t,p).then(function(h){d||(d=!0,s[v]=h,--f||i(s))},o)}),--f||i(s)});return u.error&&o(u.value),n.promise}})});var gy=a(()=>{"use strict";var lM=x(),fM=Z(),pM=Xr().CONSTRUCTOR,mu=wr(),vM=W(),dM=N(),mM=Pe(),yy=mu&&mu.prototype;lM({target:"Promise",proto:!0,forced:pM,real:!0},{catch:function(e){return this.then(void 0,e)}});!fM&&dM(mu)&&(du=vM("Promise").prototype.catch,yy.catch!==du&&mM(yy,"catch",du,{unsafe:!0}));var du});var by=a(()=>{"use strict";var hM=x(),yM=B(),gM=D(),bM=we(),qM=Sr(),xM=pe(),SM=Dt();hM({target:"Promise",stat:!0,forced:SM},{race:function(r){var t=this,n=bM.f(t),i=n.reject,o=qM(function(){var u=gM(t.resolve);xM(r,function(c){yM(u,t,c).then(n.resolve,i)})});return o.error&&i(o.value),n.promise}})});var qy=a(()=>{"use strict";var wM=x(),TM=we(),CM=Xr().CONSTRUCTOR;wM({target:"Promise",stat:!0,forced:CM},{reject:function(r){var t=TM.f(this),n=t.reject;return n(r),t.promise}})});var hu=a((MH,xy)=>{"use strict";var OM=Q(),EM=$(),kM=we();xy.exports=function(e,r){if(OM(e),EM(r)&&r.constructor===e)return r;var t=kM.f(e),n=t.resolve;return n(r),t.promise}});var Ty=a(()=>{"use strict";var IM=x(),PM=W(),Sy=Z(),_M=wr(),wy=Xr().CONSTRUCTOR,RM=hu(),AM=PM("Promise"),NM=Sy&&!wy;IM({target:"Promise",stat:!0,forced:Sy||wy},{resolve:function(r){return RM(NM&&this===AM?_M:this,r)}})});var Cy=a(()=>{"use strict";dy();hy();gy();by();qy();Ty()});var yu=a(()=>{"use strict";var MM=x(),jM=B(),$M=D(),LM=we(),FM=Sr(),DM=pe(),BM=Dt();MM({target:"Promise",stat:!0,forced:BM},{allSettled:function(r){var t=this,n=LM.f(t),i=n.resolve,o=n.reject,u=FM(function(){var c=$M(t.resolve),s=[],l=0,f=1;DM(r,function(p){var v=l++,d=!1;f++,jM(c,t,p).then(function(h){d||(d=!0,s[v]={status:"fulfilled",value:h},--f||i(s))},function(h){d||(d=!0,s[v]={status:"rejected",reason:h},--f||i(s))})}),--f||i(s)});return u.error&&o(u.value),n.promise}})});var gu=a(()=>{"use strict";var GM=x(),UM=B(),WM=D(),HM=W(),KM=we(),zM=Sr(),VM=pe(),YM=Dt(),Oy="No one promise resolved";GM({target:"Promise",stat:!0,forced:YM},{any:function(r){var t=this,n=HM("AggregateError"),i=KM.f(t),o=i.resolve,u=i.reject,c=zM(function(){var s=WM(t.resolve),l=[],f=0,p=1,v=!1;VM(r,function(d){var h=f++,m=!1;p++,UM(s,t,d).then(function(y){m||v||(v=!0,o(y))},function(y){m||v||(m=!0,l[h]=y,--p||u(new n(l,Oy)))})}),--p||u(new n(l,Oy))});return c.error&&u(c.value),i.promise}})});var qu=a(()=>{"use strict";var JM=x(),QM=_(),XM=Ar(),ZM=pr(),ej=we(),rj=D(),ky=Sr(),bu=QM.Promise,Ey=!1,tj=!bu||!bu.try||ky(function(){bu.try(function(e){Ey=e===8},8)}).error||!Ey;JM({target:"Promise",stat:!0,forced:tj},{try:function(e){var r=arguments.length>1?ZM(arguments,1):[],t=ej.f(this),n=ky(function(){return XM(rj(e),void 0,r)});return(n.error?t.reject:t.resolve)(n.value),t.promise}})});var xu=a(()=>{"use strict";var nj=x(),ij=we();nj({target:"Promise",stat:!0},{withResolvers:function(){var r=ij.f(this);return{promise:r.promise,resolve:r.resolve,reject:r.reject}}})});var Ry=a(()=>{"use strict";var aj=x(),oj=Z(),vi=wr(),uj=P(),Py=W(),_y=N(),sj=Bo(),Iy=hu(),cj=Pe(),wu=vi&&vi.prototype,lj=!!vi&&uj(function(){wu.finally.call({then:function(){}},function(){})});aj({target:"Promise",proto:!0,real:!0,forced:lj},{finally:function(e){var r=sj(this,Py("Promise")),t=_y(e);return this.then(t?function(n){return Iy(r,e()).then(function(){return n})}:e,t?function(n){return Iy(r,e()).then(function(){throw n})}:e)}});!oj&&_y(vi)&&(Su=Py("Promise").prototype.finally,wu.finally!==Su&&cj(wu,"finally",Su,{unsafe:!0}));var Su});var Ny=a((JH,Ay)=>{"use strict";$o();br();Ot();Cy();yu();gu();qu();xu();Ry();mr();var fj=z();Ay.exports=fj.Promise});var jy=a((QH,My)=>{"use strict";var pj=Ny();qr();My.exports=pj});var $y=a(()=>{"use strict";qu()});var Ly=a(()=>{"use strict";xu()});var Dy=a((tK,Fy)=>{"use strict";var vj=jy();$y();Ly();Fy.exports=vj});var By=a(()=>{"use strict";$o()});var Gy=a(()=>{"use strict";yu()});var Uy=a(()=>{"use strict";gu()});var Hy=a((cK,Wy)=>{"use strict";var dj=Dy();By();Gy();Uy();Wy.exports=dj});var nt=a((lK,Ky)=>{"use strict";Ky.exports=Hy()});var Yy=a((mK,Vy)=>{"use strict";So();var mj=Hr();Vy.exports=mj.f("asyncIterator")});var Qy=a((hK,Jy)=>{"use strict";var hj=Yy();Jy.exports=hj});var Zy=a((yK,Xy)=>{"use strict";var yj=Qy();Xy.exports=yj});var rg=a((gK,eg)=>{"use strict";var gj=Zy();eg.exports=gj});var di=a((bK,tg)=>{"use strict";tg.exports=rg()});var og=a(()=>{"use strict";var bj=x(),qj=P(),xj=re(),ag=qt(),Sj=La(),wj=qj(function(){ag(1)});bj({target:"Object",stat:!0,forced:wj,sham:!Sj},{getPrototypeOf:function(r){return ag(xj(r))}})});var sg=a((TK,ug)=>{"use strict";og();var Tj=z();ug.exports=Tj.Object.getPrototypeOf});var lg=a((CK,cg)=>{"use strict";var Cj=sg();cg.exports=Cj});var pg=a((OK,fg)=>{"use strict";var Oj=lg();fg.exports=Oj});var dg=a((EK,vg)=>{"use strict";var Ej=pg();vg.exports=Ej});var mi=a((kK,mg)=>{"use strict";mg.exports=dg()});var yg=a(()=>{"use strict";var kj=x(),Ij=A(),Pj=Ie(),_j=Ij([].reverse),hg=[1,2];kj({target:"Array",proto:!0,forced:String(hg)===String(hg.reverse())},{reverse:function(){return Pj(this)&&(this.length=this.length),_j(this)}})});var bg=a((_K,gg)=>{"use strict";yg();var Rj=oe();gg.exports=Rj("Array","reverse")});var xg=a((RK,qg)=>{"use strict";var Aj=G(),Nj=bg(),Ou=Array.prototype;qg.exports=function(e){var r=e.reverse;return e===Ou||Aj(Ou,e)&&r===Ou.reverse?Nj:r}});var wg=a((AK,Sg)=>{"use strict";var Mj=xg();Sg.exports=Mj});var Cg=a((NK,Tg)=>{"use strict";var jj=wg();Tg.exports=jj});var Eg=a((MK,Og)=>{"use strict";var $j=Cg();Og.exports=$j});var Ig=a((jK,kg)=>{"use strict";kg.exports=Eg()});var Eu=a(($K,Ut)=>{function Lj(e,r){this.v=e,this.k=r}Ut.exports=Lj,Ut.exports.__esModule=!0,Ut.exports.default=Ut.exports});var Pg=a(()=>{"use strict";var Fj=x(),Dj=U(),Bj=Qe();Fj({target:"Object",stat:!0,sham:!Dj},{create:Bj})});var Rg=a((DK,_g)=>{"use strict";Pg();var Gj=z(),Uj=Gj.Object;_g.exports=function(r,t){return Uj.create(r,t)}});var Ng=a((BK,Ag)=>{"use strict";var Wj=Rg();Ag.exports=Wj});var jg=a((GK,Mg)=>{"use strict";var Hj=Ng();Mg.exports=Hj});var Lg=a((UK,$g)=>{"use strict";var Kj=jg();$g.exports=Kj});var hi=a((WK,Fg)=>{"use strict";Fg.exports=Lg()});var Iu=a((HK,Ug)=>{"use strict";var Bg=A(),zj=D(),Vj=$(),Yj=H(),Dg=pr(),Jj=Rr(),Gg=Function,Qj=Bg([].concat),Xj=Bg([].join),ku={},Zj=function(e,r,t){if(!Yj(ku,r)){for(var n=[],i=0;i<r;i++)n[i]="a["+i+"]";ku[r]=Gg("C,a","return new C("+Xj(n,",")+")")}return ku[r](e,t)};Ug.exports=Jj?Gg.bind:function(r){var t=zj(this),n=t.prototype,i=Dg(arguments,1),o=function(){var c=Qj(i,Dg(arguments));return this instanceof o?Zj(t,c.length,c):t.apply(r,c)};return Vj(n)&&(o.prototype=n),o}});var Hg=a(()=>{"use strict";var e$=x(),Wg=Iu();e$({target:"Function",proto:!0,forced:Function.bind!==Wg},{bind:Wg})});var zg=a((VK,Kg)=>{"use strict";Hg();var r$=oe();Kg.exports=r$("Function","bind")});var Yg=a((YK,Vg)=>{"use strict";var t$=G(),n$=zg(),Pu=Function.prototype;Vg.exports=function(e){var r=e.bind;return e===Pu||t$(Pu,e)&&r===Pu.bind?n$:r}});var Qg=a((JK,Jg)=>{"use strict";var i$=Yg();Jg.exports=i$});var Zg=a((QK,Xg)=>{"use strict";var a$=Qg();Xg.exports=a$});var rb=a((XK,eb)=>{"use strict";var o$=Zg();eb.exports=o$});var Wt=a((ZK,tb)=>{"use strict";tb.exports=rb()});var nb=a(()=>{"use strict";var u$=x(),s$=xt();u$({target:"Object",stat:!0},{setPrototypeOf:s$})});var ab=a((t7,ib)=>{"use strict";nb();var c$=z();ib.exports=c$.Object.setPrototypeOf});var ub=a((n7,ob)=>{"use strict";var l$=ab();ob.exports=l$});var cb=a((i7,sb)=>{"use strict";var f$=ub();sb.exports=f$});var fb=a((a7,lb)=>{"use strict";var p$=cb();lb.exports=p$});var yi=a((o7,pb)=>{"use strict";pb.exports=fb()});var db=a(()=>{"use strict";var v$=x(),d$=U(),vb=te().f;v$({target:"Object",stat:!0,forced:Object.defineProperty!==vb,sham:!d$},{defineProperty:vb})});var yb=a((c7,hb)=>{"use strict";db();var m$=z(),mb=m$.Object,h$=hb.exports=function(r,t,n){return mb.defineProperty(r,t,n)};mb.defineProperty.sham&&(h$.sham=!0)});var bb=a((l7,gb)=>{"use strict";var y$=yb();gb.exports=y$});var xb=a((f7,qb)=>{"use strict";var g$=bb();qb.exports=g$});var wb=a((p7,Sb)=>{"use strict";var b$=xb();Sb.exports=b$});var Ht=a((v7,Tb)=>{"use strict";Tb.exports=wb()});var _u=a((d7,Ne)=>{var q$=Ht();function gi(e,r,t,n){var i=q$;try{i({},"",{})}catch{i=0}Ne.exports=gi=function(u,c,s,l){function f(p,v){gi(u,p,function(d){return this._invoke(p,v,d)})}c?i?i(u,c,{value:s,enumerable:!l,configurable:!l,writable:!l}):u[c]=s:(f("next",0),f("throw",1),f("return",2))},Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports,gi(e,r,t,n)}Ne.exports=gi,Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports});var Au=a((m7,Me)=>{var Cb=Se(),Ru=hi(),x$=Wt(),S$=mi(),Ob=yi(),Ce=_u();function Eb(){var e,r,t=typeof Cb=="function"?Cb:{},n=t.iterator||"@@iterator",i=t.toStringTag||"@@toStringTag";function o(d,h,m,y){var q=h&&h.prototype instanceof c?h:c,b=Ru(q.prototype);return Ce(b,"_invoke",function(k,E,S){var T,w,O,j=0,ge=S||[],I=!1,ee={p:0,n:0,v:e,a:be,f:x$(be).call(be,e,4),d:function(F,de){return T=F,w=0,O=e,ee.n=de,u}};function be(J,F){for(w=J,O=F,r=0;!I&&j&&!de&&r<ge.length;r++){var de,C=ge[r],_r=ee.p,He=C[2];J>3?(de=He===F)&&(O=C[(w=C[4])?5:(w=3,3)],C[4]=C[5]=e):C[0]<=_r&&((de=J<2&&_r<C[1])?(w=0,ee.v=F,ee.n=C[1]):_r<He&&(de=J<3||C[0]>F||F>He)&&(C[4]=J,C[5]=F,ee.n=He,w=0))}if(de||J>1)return u;throw I=!0,F}return function(J,F,de){if(j>1)throw TypeError("Generator is already running");for(I&&F===1&&be(F,de),w=F,O=de;(r=w<2?e:O)||!I;){T||(w?w<3?(w>1&&(ee.n=-1),be(w,O)):ee.n=O:ee.v=O);try{if(j=2,T){if(w||(J="next"),r=T[J]){if(!(r=r.call(T,O)))throw TypeError("iterator result is not an object");if(!r.done)return r;O=r.value,w<2&&(w=0)}else w===1&&(r=T.return)&&r.call(T),w<2&&(O=TypeError("The iterator does not provide a '"+J+"' method"),w=1);T=e}else if((r=(I=ee.n<0)?O:k.call(E,ee))!==u)break}catch(C){T=e,w=1,O=C}finally{j=1}}return{value:r,done:I}}}(d,m,y),!0),b}var u={};function c(){}function s(){}function l(){}r=S$;var f=[][n]?r(r([][n]())):(Ce(r={},n,function(){return this}),r),p=l.prototype=c.prototype=Ru(f);function v(d){return Ob?Ob(d,l):(d.__proto__=l,Ce(d,i,"GeneratorFunction")),d.prototype=Ru(p),d}return s.prototype=l,Ce(p,"constructor",l),Ce(l,"constructor",s),s.displayName="GeneratorFunction",Ce(l,i,"GeneratorFunction"),Ce(p),Ce(p,i,"Generator"),Ce(p,n,function(){return this}),Ce(p,"toString",function(){return"[object Generator]"}),(Me.exports=Eb=function(){return{w:o,m:v}},Me.exports.__esModule=!0,Me.exports.default=Me.exports)()}Me.exports=Eb,Me.exports.__esModule=!0,Me.exports.default=Me.exports});var ju=a((h7,Kt)=>{var w$=Se(),T$=di(),C$=Eu(),Nu=_u();function Mu(e,r){function t(i,o,u,c){try{var s=e[i](o),l=s.value;return l instanceof C$?r.resolve(l.v).then(function(f){t("next",f,u,c)},function(f){t("throw",f,u,c)}):r.resolve(l).then(function(f){s.value=f,u(s)},function(f){return t("throw",f,u,c)})}catch(f){c(f)}}var n;this.next||(Nu(Mu.prototype),Nu(Mu.prototype,typeof w$=="function"&&T$||"@asyncIterator",function(){return this})),Nu(this,"_invoke",function(i,o,u){function c(){return new r(function(s,l){t(i,u,s,l)})}return n=n?n.then(c,c):c()},!0)}Kt.exports=Mu,Kt.exports.__esModule=!0,Kt.exports.default=Kt.exports});var $u=a((y7,zt)=>{var O$=nt(),E$=Au(),k$=ju();function I$(e,r,t,n,i){return new k$(E$().w(e,r,t,n),i||O$)}zt.exports=I$,zt.exports.__esModule=!0,zt.exports.default=zt.exports});var kb=a((g7,Vt)=>{var P$=$u();function _$(e,r,t,n,i){var o=P$(e,r,t,n,i);return o.next().then(function(u){return u.done?u.value:o.next()})}Vt.exports=_$,Vt.exports.__esModule=!0,Vt.exports.default=Vt.exports});var _b=a((b7,Pb)=>{"use strict";var Ib=Ve(),R$=TypeError;Pb.exports=function(e,r){if(!delete e[r])throw new R$("Cannot delete property "+Ib(r)+" of "+Ib(e))}});var Rb=a(()=>{"use strict";var A$=x(),N$=re(),M$=le(),j$=Gr(),$$=_b(),L$=Ct(),F$=[].unshift(0)!==1,D$=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},B$=F$||!D$();A$({target:"Array",proto:!0,arity:1,forced:B$},{unshift:function(r){var t=N$(this),n=M$(t),i=arguments.length;if(i){L$(n+i);for(var o=n;o--;){var u=o+i;o in t?t[u]=t[o]:$$(t,u)}for(var c=0;c<i;c++)t[c]=arguments[c]}return j$(t,n+i)}})});var Nb=a((S7,Ab)=>{"use strict";Rb();var G$=oe();Ab.exports=G$("Array","unshift")});var jb=a((w7,Mb)=>{"use strict";var U$=G(),W$=Nb(),Lu=Array.prototype;Mb.exports=function(e){var r=e.unshift;return e===Lu||U$(Lu,e)&&r===Lu.unshift?W$:r}});var Lb=a((T7,$b)=>{"use strict";var H$=jb();$b.exports=H$});var Db=a((C7,Fb)=>{"use strict";var K$=Lb();Fb.exports=K$});var Gb=a((O7,Bb)=>{"use strict";var z$=Db();Bb.exports=z$});var Wb=a((E7,Ub)=>{"use strict";Ub.exports=Gb()});var Hb=a((k7,Yt)=>{var V$=Wb();function Y$(e){var r=Object(e),t=[];for(var n in r)V$(t).call(t,n);return function i(){for(;t.length;)if((n=t.pop())in r)return i.value=n,i.done=!1,i;return i.done=!0,i}}Yt.exports=Y$,Yt.exports.__esModule=!0,Yt.exports.default=Yt.exports});var zb=a((I7,Kb)=>{"use strict";br();Ot();mr();To();var J$=Hr();Kb.exports=J$.f("iterator")});var Yb=a((P7,Vb)=>{"use strict";var Q$=zb();qr();Vb.exports=Q$});var Qb=a((_7,Jb)=>{"use strict";var X$=Yb();Jb.exports=X$});var Zb=a((R7,Xb)=>{"use strict";var Z$=Qb();Xb.exports=Z$});var Jt=a((A7,eq)=>{"use strict";eq.exports=Zb()});var rq=a((N7,je)=>{var bi=Se(),eL=Jt();function Fu(e){"@babel/helpers - typeof";return je.exports=Fu=typeof bi=="function"&&typeof eL=="symbol"?function(r){return typeof r}:function(r){return r&&typeof bi=="function"&&r.constructor===bi&&r!==bi.prototype?"symbol":typeof r},je.exports.__esModule=!0,je.exports.default=je.exports,Fu(e)}je.exports=Fu,je.exports.__esModule=!0,je.exports.default=je.exports});var tq=a((M7,Qt)=>{var rL=rq().default,tL=Se(),nL=Jt();function iL(e){if(e!=null){var r=e[typeof tL=="function"&&nL||"@@iterator"],t=0;if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length))return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}throw new TypeError(rL(e)+" is not iterable")}Qt.exports=iL,Qt.exports.__esModule=!0,Qt.exports.default=Qt.exports});var aq=a((j7,$e)=>{var nq=mi(),aL=Ig(),oL=Eu(),uL=Au(),sL=kb(),cL=$u(),lL=ju(),fL=Hb(),iq=tq();function Du(){"use strict";var e=uL(),r=e.m(Du),t=(nq?nq(r):r.__proto__).constructor;function n(u){var c=typeof u=="function"&&u.constructor;return!!c&&(c===t||(c.displayName||c.name)==="GeneratorFunction")}var i={throw:1,return:2,break:3,continue:3};function o(u){var c,s;return function(l){c||(c={stop:function(){return s(l.a,2)},catch:function(){return l.v},abrupt:function(p,v){return s(l.a,i[p],v)},delegateYield:function(p,v,d){return c.resultName=v,s(l.d,iq(p),d)},finish:function(p){return s(l.f,p)}},s=function(p,v,d){l.p=c.prev,l.n=c.next;try{return p(v,d)}finally{c.next=l.n}}),c.resultName&&(c[c.resultName]=l.v,c.resultName=void 0),c.sent=l.v,c.next=l.n;try{return u.call(this,c)}finally{l.p=c.prev,l.n=c.next}}}return($e.exports=Du=function(){return{wrap:function(s,l,f,p){return e.w(o(s),l,f,p&&aL(p).call(p))},isGeneratorFunction:n,mark:e.m,awrap:function(s,l){return new oL(s,l)},AsyncIterator:lL,async:function(s,l,f,p,v){return(n(l)?cL:sL)(o(s),l,f,p,v)},keys:fL,values:iq}},$e.exports.__esModule=!0,$e.exports.default=$e.exports)()}$e.exports=Du,$e.exports.__esModule=!0,$e.exports.default=$e.exports});var se=a(($7,oq)=>{var qi=aq()();oq.exports=qi;try{regeneratorRuntime=qi}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=qi:Function("r","regeneratorRuntime = r")(qi)}});var Bu=a((Si,sq)=>{"use strict";Object.defineProperty(Si,"__esModule",{value:!0});var xi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},uq=function(){function e(r,t){var n=[],i=!0,o=!1,u=void 0;try{for(var c=r[Symbol.iterator](),s;!(i=(s=c.next()).done)&&(n.push(s.value),!(t&&n.length===t));i=!0);}catch(l){o=!0,u=l}finally{try{!i&&c.return&&c.return()}finally{if(o)throw u}}return n}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Si.default=pL;function pL(e,r){if(global.document)return!1;global.document=r.context||function(){for(var n=e;n.parent;)n=n.parent;return n}();var t=Object.getPrototypeOf(global.document);return Object.getOwnPropertyDescriptor(t,"childTags")||Object.defineProperty(t,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(i){return i.type==="tag"||i.type==="script"||i.type==="style"})}}),Object.getOwnPropertyDescriptor(t,"attributes")||Object.defineProperty(t,"attributes",{enumerable:!0,get:function(){var i=this.attribs,o=Object.keys(i),u=o.reduce(function(c,s,l){return c[l]={name:s,value:i[s]},c},{});return Object.defineProperty(u,"length",{enumerable:!1,configurable:!1,value:o.length}),u}}),t.getAttribute||(t.getAttribute=function(n){return this.attribs[n]||null}),t.getElementsByTagName||(t.getElementsByTagName=function(n){var i=[];return tr(this.childTags,function(o){(o.name===n||n==="*")&&i.push(o)}),i}),t.getElementsByClassName||(t.getElementsByClassName=function(n){var i=n.trim().replace(/\s+/g," ").split(" "),o=[];return tr([this],function(u){var c=u.attribs.class;c&&i.every(function(s){return c.indexOf(s)>-1})&&o.push(u)}),o}),t.querySelectorAll||(t.querySelectorAll=function(n){var i=this;n=n.replace(/(>)(\S)/g,"$1 $2").trim();var o=vL(n),u=o.shift(),c=o.length;return u(this).filter(function(s){for(var l=0;l<c;){if(s=o[l](s,i),!s)return!1;l+=1}return!0})}),t.contains||(t.contains=function(n){var i=!1;return tr([this],function(o,u){o===n&&(i=!0,u())}),i}),!0}function vL(e){return e.split(" ").reverse().map(function(r,t){var n=t===0,i=r.split(":"),o=uq(i,2),u=o[0],c=o[1],s=null,l=null;if(function(){switch(!0){case/>/.test(u):l=function(S){return function(T){return T(S.parent)&&S.parent}};break;case/^\./.test(u):var h=u.substr(1).split(".");s=function(S){var T=S.attribs.class;return T&&h.every(function(w){return T.indexOf(w)>-1})},l=function(S,T){return n?S.getElementsByClassName(h.join(" ")):typeof S=="function"?S(s):Xt(S,T,s)};break;case/^\[/.test(u):var m=u.replace(/\[|\]|"/g,"").split("="),y=uq(m,2),q=y[0],b=y[1];s=function(S){var T=Object.keys(S.attribs).indexOf(q)>-1;return!!(T&&(!b||S.attribs[q]===b))},l=function(S,T){if(n){var w=function(){var O=[];return tr([S],function(j){s(j)&&O.push(j)}),{v:O}}();if((typeof w>"u"?"undefined":xi(w))==="object")return w.v}return typeof S=="function"?S(s):Xt(S,T,s)};break;case/^#/.test(u):var k=u.substr(1);s=function(S){return S.attribs.id===k},l=function(S,T){if(n){var w=function(){var O=[];return tr([S],function(j,ge){s(j)&&(O.push(j),ge())}),{v:O}}();if((typeof w>"u"?"undefined":xi(w))==="object")return w.v}return typeof S=="function"?S(s):Xt(S,T,s)};break;case/\*/.test(u):s=function(S){return!0},l=function(S,T){if(n){var w=function(){var O=[];return tr([S],function(j){return O.push(j)}),{v:O}}();if((typeof w>"u"?"undefined":xi(w))==="object")return w.v}return typeof S=="function"?S(s):Xt(S,T,s)};break;default:s=function(S){return S.name===u},l=function(S,T){if(n){var w=function(){var O=[];return tr([S],function(j){s(j)&&O.push(j)}),{v:O}}();if((typeof w>"u"?"undefined":xi(w))==="object")return w.v}return typeof S=="function"?S(s):Xt(S,T,s)}}}(),!c)return l;var f=c.match(/-(child|type)\((\d+)\)$/),p=f[1],v=parseInt(f[2],10)-1,d=function(m){if(m){var y=m.parent.childTags;p==="type"&&(y=y.filter(s));var q=y.findIndex(function(b){return b===m});if(q===v)return!0}return!1};return function(m){var y=l(m);return n?y.reduce(function(q,b){return d(b)&&q.push(b),q},[]):d(y)&&y}})}function tr(e,r){e.forEach(function(t){var n=!0;r(t,function(){return n=!1}),t.childTags&&n&&tr(t.childTags,r)})}function Xt(e,r,t){for(;e.parent;){if(e=e.parent,t(e))return e;if(e===r)break}return null}sq.exports=Si.default});var Ti=a(wi=>{"use strict";Object.defineProperty(wi,"__esModule",{value:!0});wi.convertNodeList=dL;wi.escapeValue=mL;function dL(e){for(var r=e.length,t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t}function mL(e){return e&&e.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g,"\\$&").replace(/\n/g,"A")}});var gq=a((Ci,yq)=>{"use strict";Object.defineProperty(Ci,"__esModule",{value:!0});Ci.default=hL;var pq=Ti(),cq={attribute:function(r){return["style","data-reactid","data-react-checksum"].indexOf(r)>-1}};function hL(e,r){var t=r.root,n=t===void 0?document:t,i=r.skip,o=i===void 0?null:i,u=r.priority,c=u===void 0?["id","class","href","src"]:u,s=r.ignore,l=s===void 0?{}:s,f=[],p=e,v=f.length,d=!1,h=o&&(Array.isArray(o)?o:[o]).map(function(q){return typeof q!="function"?function(b){return b===q}:q}),m=function(b){return o&&h.some(function(k){return k(b)})};for(Object.keys(l).forEach(function(q){q==="class"&&(d=!0);var b=l[q];typeof b!="function"&&(typeof b=="number"&&(b=b.toString()),typeof b=="string"&&(b=new RegExp((0,pq.escapeValue)(b).replace(/\\/g,"\\\\"))),typeof b=="boolean"&&(b=b?/(?:)/:/.^/),l[q]=function(k,E){return b.test(E)})}),d&&function(){var q=l.attribute;l.attribute=function(b,k,E){return l.class(k)||q&&q(b,k,E)}}();p!==n;){if(m(p)!==!0){if(lq(c,p,l,f,n)||fq(p,l,f,n))break;lq(c,p,l,f),f.length===v&&fq(p,l,f),f.length===v&&yL(c,p,l,f)}p=p.parentNode,v=f.length}if(p===n){var y=mq(c,p,l);f.unshift(y)}return f.join(" ")}function lq(e,r,t,n){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:r.parentNode,o=vq(e,r,t);if(o){var u=i.querySelectorAll(o);if(u.length===1)return n.unshift(o),!0}return!1}function vq(e,r,t){for(var n=r.attributes,i=Object.keys(n).sort(function(m,y){var q=e.indexOf(n[m].name),b=e.indexOf(n[y].name);return b===-1?q===-1?0:-1:q-b}),o=0,u=i.length;o<u;o++){var c=i[o],s=n[c],l=s.name,f=(0,pq.escapeValue)(s.value),p=t[l]||t.attribute,v=cq[l]||cq.attribute;if(!hq(p,l,f,v)){var d="["+l+'="'+f+'"]';if(/\b\d/.test(f)===!1&&(l==="id"&&(d="#"+f),l==="class")){var h=f.trim().replace(/\s+/g,".");d="."+h}return d}}return null}function fq(e,r,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e.parentNode,i=dq(e,r);if(i){var o=n.getElementsByTagName(i);if(o.length===1)return t.unshift(i),!0}return!1}function dq(e,r){var t=e.tagName.toLowerCase();return hq(r.tag,null,t)?null:t}function yL(e,r,t,n){for(var i=r.parentNode,o=i.childTags||i.children,u=0,c=o.length;u<c;u++){var s=o[u];if(s===r){var l=mq(e,s,t);if(!l)return console.warn(`
          Element couldn't be matched through strict ignore pattern!
        `,s,t,l);var f="> "+l+":nth-child("+(u+1)+")";return n.unshift(f),!0}}return!1}function mq(e,r,t){var n=vq(e,r,t);return n||(n=dq(r,t)),n}function hq(e,r,t,n){if(!t)return!0;var i=e||n;return i?i(r,t,n):!1}yq.exports=Ci.default});var Gu=a((Ei,bq)=>{"use strict";Object.defineProperty(Ei,"__esModule",{value:!0});Ei.default=SL;var gL=Bu(),bL=xL(gL),qL=Ti();function xL(e){return e&&e.__esModule?e:{default:e}}function SL(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(r)||(r=r.length?(0,qL.convertNodeList)(r):[r]),!r.length||r.some(function(p){return p.nodeType!==1}))throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');var n=(0,bL.default)(r[0],t),i=e.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(i.length<2)return Oi("",e,"",r);for(var o=[i.pop()];i.length>1;){var u=i.pop(),c=i.join(" "),s=o.join(" "),l=c+" "+s,f=document.querySelectorAll(l);f.length!==r.length&&o.unshift(Oi(c,u,s,r))}return o.unshift(i[0]),i=o,i[0]=Oi("",i[0],i.slice(1).join(" "),r),i[i.length-1]=Oi(i.slice(0,-1).join(" "),i[i.length-1],"",r),n&&delete global.document,i.join(" ").replace(/>/g,"> ").trim()}function Oi(e,r,t,n){if(e.length&&(e=e+" "),t.length&&(t=" "+t),/\[*\]/.test(r)){var i=r.replace(/=.*$/,"]"),o=""+e+i+t,u=document.querySelectorAll(o);if(it(u,n))r=i;else for(var c=document.querySelectorAll(""+e+i),s=function(){var E=c[l];if(n.some(function(T){return E.contains(T)})){var S=E.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),it(u,n)&&(r=S),"break"}},l=0,f=c.length;l<f;l++){var o,u,p=s();if(p==="break")break}}if(/>/.test(r)){var v=r.replace(/>/,""),o=""+e+v+t,u=document.querySelectorAll(o);it(u,n)&&(r=v)}if(/:nth-child/.test(r)){var d=r.replace(/nth-child/g,"nth-of-type"),o=""+e+d+t,u=document.querySelectorAll(o);it(u,n)&&(r=d)}if(/\.\S+\.\S+/.test(r)){for(var h=r.trim().split(".").slice(1).map(function(k){return"."+k}).sort(function(k,E){return k.length-E.length});h.length;){var m=r.replace(h.shift(),"").trim(),o=(""+e+m+t).trim();if(!o.length||o.charAt(0)===">"||o.charAt(o.length-1)===">")break;var u=document.querySelectorAll(o);it(u,n)&&(r=m)}if(h=r&&r.match(/\./g),h&&h.length>2)for(var y=document.querySelectorAll(""+e+r),q=function(){var E=y[l];if(n.some(function(T){return E.contains(T)})){var S=E.tagName.toLowerCase();return o=""+e+S+t,u=document.querySelectorAll(o),it(u,n)&&(r=S),"break"}},l=0,f=y.length;l<f;l++){var o,u,b=q();if(b==="break")break}}return r}function it(e,r){var t=e.length;return t===r.length&&r.every(function(n){for(var i=0;i<t;i++)if(e[i]===n)return!0;return!1})}bq.exports=Ei.default});var Uu=a(ki=>{"use strict";Object.defineProperty(ki,"__esModule",{value:!0});ki.getCommonAncestor=wL;ki.getCommonProperties=TL;function wL(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.root,n=t===void 0?document:t,i=[];e.forEach(function(p,v){for(var d=[];p!==n;)p=p.parentNode,d.unshift(p);i[v]=d}),i.sort(function(p,v){return p.length-v.length});for(var o=i.shift(),u=null,c=function(){var v=o[s],d=i.some(function(h){return!h.some(function(m){return m===v})});if(d)return"break";u=v},s=0,l=o.length;s<l;s++){var f=c();if(f==="break")break}return u}function TL(e){var r={classes:[],attributes:{},tag:null};return e.forEach(function(t){var n=r.classes,i=r.attributes,o=r.tag;if(n!==void 0){var u=t.getAttribute("class");u?(u=u.trim().split(" "),n.length?(n=n.filter(function(s){return u.some(function(l){return l===s})}),n.length?r.classes=n:delete r.classes):r.classes=u):delete r.classes}if(i!==void 0&&function(){var s=t.attributes,l=Object.keys(s).reduce(function(v,d){var h=s[d],m=h.name;return h&&m!=="class"&&(v[m]=h.value),v},{}),f=Object.keys(l),p=Object.keys(i);f.length?p.length?(i=p.reduce(function(v,d){var h=i[d];return h===l[d]&&(v[d]=h),v},{}),Object.keys(i).length?r.attributes=i:delete r.attributes):r.attributes=l:delete r.attributes}(),o!==void 0){var c=t.tagName.toLowerCase();o?c!==o&&delete r.tag:r.tag=c}}),r}});var Cq=a(Zt=>{"use strict";Object.defineProperty(Zt,"__esModule",{value:!0});var CL=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Zt.getSingleSelector=Hu;Zt.getMultiSelector=Tq;Zt.default=_L;var OL=Bu(),xq=Wu(OL),EL=gq(),kL=Wu(EL),IL=Gu(),Sq=Wu(IL),qq=Ti(),wq=Uu();function Wu(e){return e&&e.__esModule?e:{default:e}}function Hu(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e.nodeType===3&&(e=e.parentNode),e.nodeType!==1)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+(typeof e>"u"?"undefined":CL(e))+'")');var t=(0,xq.default)(e,r),n=(0,kL.default)(e,r),i=(0,Sq.default)(n,e,r);return t&&delete global.document,i}function Tq(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Array.isArray(e)||(e=(0,qq.convertNodeList)(e)),e.some(function(l){return l.nodeType!==1}))throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");var t=(0,xq.default)(e[0],r),n=(0,wq.getCommonAncestor)(e,r),i=Hu(n,r),o=PL(e),u=o[0],c=(0,Sq.default)(i+" "+u,e,r),s=(0,qq.convertNodeList)(document.querySelectorAll(c));return e.every(function(l){return s.some(function(f){return f===l})})?(t&&delete global.document,c):console.warn(`
      The selected elements can't be efficiently mapped.
      Its probably best to use multiple single selectors instead!
    `,e)}function PL(e){var r=(0,wq.getCommonProperties)(e),t=r.classes,n=r.attributes,i=r.tag,o=[];if(i&&o.push(i),t){var u=t.map(function(s){return"."+s}).join("");o.push(u)}if(n){var c=Object.keys(n).reduce(function(s,l){return s.push("["+l+'="'+n[l]+'"]'),s},[]).join("");o.push(c)}return o.length,[o.join("")]}function _L(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.length&&!e.name?Tq(e,r):Hu(e,r)}});var kq=a(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.default=ie.common=ie.optimize=ie.getMultiSelector=ie.getSingleSelector=ie.select=void 0;var Ku=Cq();Object.defineProperty(ie,"getSingleSelector",{enumerable:!0,get:function(){return Ku.getSingleSelector}});Object.defineProperty(ie,"getMultiSelector",{enumerable:!0,get:function(){return Ku.getMultiSelector}});var Oq=Eq(Ku),RL=Gu(),AL=Eq(RL),NL=Uu(),ML=jL(NL);function jL(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function Eq(e){return e&&e.__esModule?e:{default:e}}ie.select=Oq.default;ie.optimize=AL.default;ie.common=ML;ie.default=Oq.default});var Iq=a(()=>{"use strict";var KL=x(),zL=Ie();KL({target:"Array",stat:!0},{isArray:zL})});var _q=a((ez,Pq)=>{"use strict";Iq();var VL=z();Pq.exports=VL.Array.isArray});var Aq=a((rz,Rq)=>{"use strict";var YL=_q();Rq.exports=YL});var Mq=a((tz,Nq)=>{"use strict";var JL=Aq();Nq.exports=JL});var $q=a((nz,jq)=>{"use strict";var QL=Mq();jq.exports=QL});var Fq=a((iz,Lq)=>{"use strict";Lq.exports=$q()});var Gq=a(()=>{"use strict";var XL=x(),ZL=re(),eF=le(),rF=Gr(),tF=Ct(),nF=P(),iF=nF(function(){return[].push.call({length:4294967296},1)!==4294967297}),aF=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},oF=iF||!aF();XL({target:"Array",proto:!0,arity:1,forced:oF},{push:function(r){var t=ZL(this),n=eF(t),i=arguments.length;tF(n+i);for(var o=0;o<i;o++)t[n]=arguments[o],n++;return rF(t,n),n}})});var Wq=a((sz,Uq)=>{"use strict";Gq();var uF=oe();Uq.exports=uF("Array","push")});var Kq=a((cz,Hq)=>{"use strict";var sF=G(),cF=Wq(),zu=Array.prototype;Hq.exports=function(e){var r=e.push;return e===zu||sF(zu,e)&&r===zu.push?cF:r}});var Vq=a((lz,zq)=>{"use strict";var lF=Kq();zq.exports=lF});var Jq=a((fz,Yq)=>{"use strict";var fF=Vq();Yq.exports=fF});var Xq=a((pz,Qq)=>{"use strict";var pF=Jq();Qq.exports=pF});var Vu=a((vz,Zq)=>{"use strict";Zq.exports=Xq()});var lx=a(()=>{"use strict";var vF=x(),dF=kt().map,mF=yt(),hF=mF("map");vF({target:"Array",proto:!0,forced:!hF},{map:function(r){return dF(this,r,arguments.length>1?arguments[1]:void 0)}})});var px=a((Bz,fx)=>{"use strict";lx();var yF=oe();fx.exports=yF("Array","map")});var dx=a((Gz,vx)=>{"use strict";var gF=G(),bF=px(),Ju=Array.prototype;vx.exports=function(e){var r=e.map;return e===Ju||gF(Ju,e)&&r===Ju.map?bF:r}});var hx=a((Uz,mx)=>{"use strict";var qF=dx();mx.exports=qF});var gx=a((Wz,yx)=>{"use strict";var xF=hx();yx.exports=xF});var qx=a((Hz,bx)=>{"use strict";var SF=gx();bx.exports=SF});var Sx=a((Kz,xx)=>{"use strict";xx.exports=qx()});var Tx=a((zz,wx)=>{wx.exports=Sx()});var Ox=a((Vz,Cx)=>{Cx.exports=nt()});var _x=a((Yz,Px)=>{"use strict";var wF=D(),TF=re(),CF=mn(),OF=le(),Ex=TypeError,kx="Reduce of empty array with no initial value",Ix=function(e){return function(r,t,n,i){var o=TF(r),u=CF(o),c=OF(o);if(wF(t),c===0&&n<2)throw new Ex(kx);var s=e?c-1:0,l=e?-1:1;if(n<2)for(;;){if(s in u){i=u[s],s+=l;break}if(s+=l,e?s<0:c<=s)throw new Ex(kx)}for(;e?s>=0:c>s;s+=l)s in u&&(i=t(i,u[s],s,o));return i}};Px.exports={left:Ix(!1),right:Ix(!0)}});var Qu=a((Jz,Rx)=>{"use strict";var EF=P();Rx.exports=function(e,r){var t=[][e];return!!t&&EF(function(){t.call(null,r||function(){return 1},1)})}});var Nx=a(()=>{"use strict";var kF=x(),IF=_x().left,PF=Qu(),Ax=Mr(),_F=Nt(),RF=!_F&&Ax>79&&Ax<83,AF=RF||!PF("reduce");kF({target:"Array",proto:!0,forced:AF},{reduce:function(r){var t=arguments.length;return IF(this,r,t,t>1?arguments[1]:void 0)}})});var jx=a((Zz,Mx)=>{"use strict";Nx();var NF=oe();Mx.exports=NF("Array","reduce")});var Lx=a((eV,$x)=>{"use strict";var MF=G(),jF=jx(),Xu=Array.prototype;$x.exports=function(e){var r=e.reduce;return e===Xu||MF(Xu,e)&&r===Xu.reduce?jF:r}});var Dx=a((rV,Fx)=>{"use strict";var $F=Lx();Fx.exports=$F});var Gx=a((tV,Bx)=>{"use strict";var LF=Dx();Bx.exports=LF});var Wx=a((nV,Ux)=>{"use strict";var FF=Gx();Ux.exports=FF});var Kx=a((iV,Hx)=>{"use strict";Hx.exports=Wx()});var Vx=a((aV,zx)=>{zx.exports=Kx()});var Qx=a((oV,Jx)=>{"use strict";var DF=Ie(),BF=le(),GF=Ct(),UF=V(),WF=Br(),Yx=function(e,r,t,n,i,o,u,c){for(var s=i,l=0,f=u?UF(u,c):!1,p,v;l<n;)l in t&&(p=f?f(t[l],l,r):t[l],o>0&&DF(p)?(v=BF(p),s=Yx(e,r,p,v,s,o-1)-1):(GF(s+1),WF(e,s,p)),s++),l++;return s};Jx.exports=Yx});var Xx=a(()=>{"use strict";var HF=x(),KF=Qx(),zF=D(),VF=re(),YF=le(),JF=jn();HF({target:"Array",proto:!0},{flatMap:function(r){var t=VF(this),n=YF(t),i;return zF(r),i=JF(t,0),KF(i,t,t,n,0,1,r,arguments.length>1?arguments[1]:void 0),i}})});var Zx=a(()=>{"use strict";var QF=Oo();QF("flatMap")});var rS=a((fV,eS)=>{"use strict";Xx();Zx();var XF=oe();eS.exports=XF("Array","flatMap")});var nS=a((pV,tS)=>{"use strict";var ZF=G(),eD=rS(),Zu=Array.prototype;tS.exports=function(e){var r=e.flatMap;return e===Zu||ZF(Zu,e)&&r===Zu.flatMap?eD:r}});var aS=a((vV,iS)=>{"use strict";var rD=nS();iS.exports=rD});var uS=a((dV,oS)=>{"use strict";var tD=aS();oS.exports=tD});var cS=a((mV,sS)=>{"use strict";var nD=uS();sS.exports=nD});var fS=a((hV,lS)=>{"use strict";lS.exports=cS()});var vS=a((yV,pS)=>{pS.exports=fS()});var mS=a((gV,dS)=>{"use strict";Ja();var iD=oe();dS.exports=iD("Array","concat")});var yS=a((bV,hS)=>{"use strict";var aD=G(),oD=mS(),es=Array.prototype;hS.exports=function(e){var r=e.concat;return e===es||aD(es,e)&&r===es.concat?oD:r}});var bS=a((qV,gS)=>{"use strict";var uD=yS();gS.exports=uD});var xS=a((xV,qS)=>{"use strict";var sD=bS();qS.exports=sD});var wS=a((SV,SS)=>{"use strict";var cD=xS();SS.exports=cD});var CS=a((wV,TS)=>{"use strict";TS.exports=wS()});var rs=a((TV,OS)=>{OS.exports=CS()});var IS=a(()=>{});var _S=a((zV,PS)=>{"use strict";IS();Co();var bD=Hr();PS.exports=bD.f("toPrimitive")});var AS=a((VV,RS)=>{"use strict";var qD=_S();RS.exports=qD});var MS=a((YV,NS)=>{"use strict";var xD=AS();NS.exports=xD});var $S=a((JV,jS)=>{"use strict";var SD=MS();jS.exports=SD});var FS=a((QV,LS)=>{"use strict";LS.exports=$S()});var VS=a((g9,zS)=>{"use strict";var TD=$(),CD=qe(),OD=R(),ED=OD("match");zS.exports=function(e){var r;return TD(e)&&((r=e[ED])!==void 0?!!r:CD(e)==="RegExp")}});var JS=a((b9,YS)=>{"use strict";var kD=VS(),ID=TypeError;YS.exports=function(e){if(kD(e))throw new ID("The method doesn't accept regular expressions");return e}});var XS=a((q9,QS)=>{"use strict";var PD=R(),_D=PD("match");QS.exports=function(e){var r=/./;try{"/./"[e](r)}catch{try{return r[_D]=!1,"/./"[e](r)}catch{}}return!1}});var rw=a(()=>{"use strict";var RD=x(),AD=ct(),ND=ft().f,MD=qa(),ZS=Ye(),jD=JS(),$D=cr(),LD=XS(),FD=Z(),DD=AD("".slice),BD=Math.min,ew=LD("startsWith"),GD=!FD&&!ew&&!!function(){var e=ND(String.prototype,"startsWith");return e&&!e.writable}();RD({target:"String",proto:!0,forced:!GD&&!ew},{startsWith:function(r){var t=ZS($D(this));jD(r);var n=MD(BD(arguments.length>1?arguments[1]:void 0,t.length)),i=ZS(r);return DD(t,n,n+i.length)===i}})});var nw=a((w9,tw)=>{"use strict";rw();var UD=oe();tw.exports=UD("String","startsWith")});var aw=a((T9,iw)=>{"use strict";var WD=G(),HD=nw(),as=String.prototype;iw.exports=function(e){var r=e.startsWith;return typeof e=="string"||e===as||WD(as,e)&&r===as.startsWith?HD:r}});var uw=a((C9,ow)=>{"use strict";var KD=aw();ow.exports=KD});var cw=a((O9,sw)=>{"use strict";var zD=uw();sw.exports=zD});var fw=a((E9,lw)=>{"use strict";var VD=cw();lw.exports=VD});var vw=a((k9,pw)=>{"use strict";pw.exports=fw()});var mw=a((I9,dw)=>{dw.exports=vw()});var hw=a(()=>{"use strict";var YD=x(),JD=kt().filter,QD=yt(),XD=QD("filter");YD({target:"Array",proto:!0,forced:!XD},{filter:function(r){return JD(this,r,arguments.length>1?arguments[1]:void 0)}})});var gw=a((R9,yw)=>{"use strict";hw();var ZD=oe();yw.exports=ZD("Array","filter")});var qw=a((A9,bw)=>{"use strict";var e4=G(),r4=gw(),os=Array.prototype;bw.exports=function(e){var r=e.filter;return e===os||e4(os,e)&&r===os.filter?r4:r}});var Sw=a((N9,xw)=>{"use strict";var t4=qw();xw.exports=t4});var Tw=a((M9,ww)=>{"use strict";var n4=Sw();ww.exports=n4});var Ow=a((j9,Cw)=>{"use strict";var i4=Tw();Cw.exports=i4});var kw=a(($9,Ew)=>{"use strict";Ew.exports=Ow()});var Pw=a((L9,Iw)=>{Iw.exports=kw()});var Kw=a(()=>{"use strict";var p4=x(),v4=W(),ss=Ar(),d4=Iu(),Dw=Do(),m4=Q(),Bw=$(),h4=Qe(),Uw=P(),cs=v4("Reflect","construct"),y4=Object.prototype,g4=[].push,Ww=Uw(function(){function e(){}return!(cs(function(){},[],e)instanceof e)}),Hw=!Uw(function(){cs(function(){})}),Gw=Ww||Hw;p4({target:"Reflect",stat:!0,forced:Gw,sham:Gw},{construct:function(r,t){Dw(r),m4(t);var n=arguments.length<3?r:Dw(arguments[2]);if(Hw&&!Ww)return cs(r,t,n);if(r===n){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var i=[null];return ss(g4,i,t),new(ss(d4,r,i))}var o=n.prototype,u=h4(Bw(o)?o:y4),c=ss(r,u,t);return Bw(c)?c:u}})});var Vw=a((gY,zw)=>{"use strict";Kw();var b4=z();zw.exports=b4.Reflect.construct});var Jw=a((bY,Yw)=>{"use strict";var q4=Vw();Yw.exports=q4});var Xw=a((qY,Qw)=>{"use strict";var x4=Jw();Qw.exports=x4});var eT=a((xY,Zw)=>{"use strict";var S4=Xw();Zw.exports=S4});var Mi=a((SY,rT)=>{"use strict";rT.exports=eT()});var nT=a((wY,tT)=>{tT.exports=Mi()});var pT=a((RY,fT)=>{"use strict";var w4=P();fT.exports=w4(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}})});var mT=a((AY,dT)=>{"use strict";var T4=P(),C4=$(),O4=qe(),vT=pT(),ji=Object.isExtensible,E4=T4(function(){ji(1)});dT.exports=E4||vT?function(r){return!C4(r)||vT&&O4(r)==="ArrayBuffer"?!1:ji?ji(r):!0}:ji});var yT=a((NY,hT)=>{"use strict";var k4=P();hT.exports=!k4(function(){return Object.isExtensible(Object.preventExtensions({}))})});var hs=a((MY,qT)=>{"use strict";var I4=x(),P4=A(),_4=Wr(),R4=$(),vs=H(),A4=te().f,gT=Et(),N4=Qa(),ds=mT(),M4=$r(),j4=yT(),bT=!1,De=M4("meta"),$4=0,ms=function(e){A4(e,De,{value:{objectID:"O"+$4++,weakData:{}}})},L4=function(e,r){if(!R4(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!vs(e,De)){if(!ds(e))return"F";if(!r)return"E";ms(e)}return e[De].objectID},F4=function(e,r){if(!vs(e,De)){if(!ds(e))return!0;if(!r)return!1;ms(e)}return e[De].weakData},D4=function(e){return j4&&bT&&ds(e)&&!vs(e,De)&&ms(e),e},B4=function(){G4.enable=function(){},bT=!0;var e=gT.f,r=P4([].splice),t={};t[De]=1,e(t).length&&(gT.f=function(n){for(var i=e(n),o=0,u=i.length;o<u;o++)if(i[o]===De){r(i,o,1);break}return i},I4({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:N4.f}))},G4=qT.exports={enable:B4,fastKey:L4,getWeakData:F4,onFreeze:D4};_4[De]=!0});var wT=a((jY,ST)=>{"use strict";var U4=x(),W4=_(),H4=hs(),K4=P(),z4=xe(),V4=pe(),Y4=ii(),J4=N(),Q4=$(),X4=sr(),Z4=Re(),e3=te().f,r3=kt().forEach,t3=U(),xT=Je(),n3=xT.set,i3=xT.getterFor;ST.exports=function(e,r,t){var n=e.indexOf("Map")!==-1,i=e.indexOf("Weak")!==-1,o=n?"set":"add",u=W4[e],c=u&&u.prototype,s={},l;if(!t3||!J4(u)||!(i||c.forEach&&!K4(function(){new u().entries().next()})))l=t.getConstructor(r,e,n,o),H4.enable();else{l=r(function(v,d){n3(Y4(v,f),{type:e,collection:new u}),X4(d)||V4(d,v[o],{that:v,AS_ENTRIES:n})});var f=l.prototype,p=i3(e);r3(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(v){var d=v==="add"||v==="set";v in c&&!(i&&v==="clear")&&z4(f,v,function(h,m){var y=p(this).collection;if(!d&&i&&!Q4(h))return v==="get"?void 0:!1;var q=y[v](h===0?0:h,m);return d?this:q})}),i||e3(f,"size",{configurable:!0,get:function(){return p(this).collection.size}})}return Z4(l,e,!1,!0),s[e]=l,U4({global:!0,forced:!0},s),i||t.setStrong(l,e,n),l}});var CT=a(($Y,TT)=>{"use strict";var a3=Pe();TT.exports=function(e,r,t){for(var n in r)t&&t.unsafe&&e[n]?e[n]=r[n]:a3(e,n,r[n],t);return e}});var RT=a((LY,_T)=>{"use strict";var OT=Qe(),o3=Ln(),ET=CT(),u3=V(),s3=ii(),c3=sr(),l3=pe(),f3=Rn(),$i=An(),p3=Fo(),on=U(),kT=hs().fastKey,PT=Je(),IT=PT.set,ys=PT.getterFor;_T.exports={getConstructor:function(e,r,t,n){var i=e(function(l,f){s3(l,o),IT(l,{type:r,index:OT(null),first:null,last:null,size:0}),on||(l.size=0),c3(f)||l3(f,l[n],{that:l,AS_ENTRIES:t})}),o=i.prototype,u=ys(r),c=function(l,f,p){var v=u(l),d=s(l,f),h,m;return d?d.value=p:(v.last=d={index:m=kT(f,!0),key:f,value:p,previous:h=v.last,next:null,removed:!1},v.first||(v.first=d),h&&(h.next=d),on?v.size++:l.size++,m!=="F"&&(v.index[m]=d)),l},s=function(l,f){var p=u(l),v=kT(f),d;if(v!=="F")return p.index[v];for(d=p.first;d;d=d.next)if(d.key===f)return d};return ET(o,{clear:function(){for(var f=this,p=u(f),v=p.first;v;)v.removed=!0,v.previous&&(v.previous=v.previous.next=null),v=v.next;p.first=p.last=null,p.index=OT(null),on?p.size=0:f.size=0},delete:function(l){var f=this,p=u(f),v=s(f,l);if(v){var d=v.next,h=v.previous;delete p.index[v.index],v.removed=!0,h&&(h.next=d),d&&(d.previous=h),p.first===v&&(p.first=d),p.last===v&&(p.last=h),on?p.size--:f.size--}return!!v},forEach:function(f){for(var p=u(this),v=u3(f,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:p.first;)for(v(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(f){return!!s(this,f)}}),ET(o,t?{get:function(f){var p=s(this,f);return p&&p.value},set:function(f,p){return c(this,f===0?0:f,p)}}:{add:function(f){return c(this,f=f===0?0:f,f)}}),on&&o3(o,"size",{configurable:!0,get:function(){return u(this).size}}),i},setStrong:function(e,r,t){var n=r+" Iterator",i=ys(r),o=ys(n);f3(e,r,function(u,c){IT(this,{type:n,target:u,state:i(u),kind:c,last:null})},function(){for(var u=o(this),c=u.kind,s=u.last;s&&s.removed;)s=s.previous;return!u.target||!(u.last=s=s?s.next:u.state.first)?(u.target=null,$i(void 0,!0)):$i(c==="keys"?s.key:c==="values"?s.value:[s.key,s.value],!1)},t?"entries":"values",!t,!0),p3(r)}}});var AT=a(()=>{"use strict";var v3=wT(),d3=RT();v3("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},d3)});var NT=a(()=>{"use strict";AT()});var jT=a((UY,MT)=>{"use strict";MT.exports=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,i){return t[e](n,i)}}});var ae=a((WY,LT)=>{"use strict";var m3=W(),Li=jT(),$T=m3("Map");LT.exports={Map:$T,set:Li("set",2),get:Li("get",1),has:Li("has",1),remove:Li("delete",1),proto:$T.prototype}});var gs=a(()=>{"use strict";var h3=x(),y3=A(),g3=D(),b3=cr(),q3=pe(),Fi=ae(),FT=Z(),x3=P(),DT=Fi.Map,S3=Fi.has,w3=Fi.get,T3=Fi.set,C3=y3([].push),O3=FT||x3(function(){return DT.groupBy("ab",function(e){return e}).get("a").length!==1});h3({target:"Map",stat:!0,forced:FT||O3},{groupBy:function(r,t){b3(r),g3(t);var n=new DT,i=0;return q3(r,function(o){var u=t(o,i++);S3(n,u)?C3(w3(n,u),o):T3(n,u,[o])}),n}})});var Y=a((zY,BT)=>{"use strict";var E3=Ve(),k3=TypeError;BT.exports=function(e){if(typeof e=="object"&&"size"in e&&"has"in e&&"get"in e&&"set"in e&&"delete"in e&&"entries"in e)return e;throw new k3(E3(e)+" is not a map")}});var qs=a(()=>{"use strict";var I3=x(),P3=Y(),bs=ae(),_3=Z(),R3=bs.get,A3=bs.has,N3=bs.set;I3({target:"Map",proto:!0,real:!0,forced:_3},{getOrInsert:function(r,t){return A3(P3(this),r)?R3(this,r):(N3(this,r,t),t)}})});var Ss=a(()=>{"use strict";var M3=x(),j3=D(),$3=Y(),xs=ae(),L3=Z(),F3=xs.get,D3=xs.has,B3=xs.set;M3({target:"Map",proto:!0,real:!0,forced:L3},{getOrInsertComputed:function(r,t){if($3(this),j3(t),D3(this,r))return F3(this,r);r===0&&1/r===-1/0&&(r=0);var n=t(r);return B3(this,r,n),n}})});var UT=a((XY,GT)=>{"use strict";br();NT();gs();qs();Ss();Ot();mr();var G3=z();GT.exports=G3.Map});var HT=a((ZY,WT)=>{"use strict";var U3=UT();qr();WT.exports=U3});var ws=a(()=>{"use strict";qs()});var Ts=a(()=>{"use strict";Ss()});var KT=a(()=>{"use strict";gs()});var VT=a((oJ,zT)=>{"use strict";var W3=HT();ws();Ts();KT();zT.exports=W3});var JT=a((uJ,YT)=>{"use strict";var H3=V(),K3=Q(),z3=re(),V3=pe();YT.exports=function(e,r,t){return function(i){var o=z3(i),u=arguments.length,c=u>1?arguments[1]:void 0,s=c!==void 0,l=s?H3(c,u>2?arguments[2]:void 0):void 0,f=new e,p=0;return V3(o,function(v){var d=s?l(v,p++):v;t?r(f,K3(d)[0],d[1]):r(f,d)}),f}}});var XT=a(()=>{"use strict";var Y3=x(),QT=ae(),J3=JT();Y3({target:"Map",stat:!0,forced:!0},{from:J3(QT.Map,QT.set,!0)})});var eC=a((lJ,ZT)=>{"use strict";var Q3=Q();ZT.exports=function(e,r,t){return function(){for(var i=new e,o=arguments.length,u=0;u<o;u++){var c=arguments[u];t?r(i,Q3(c)[0],c[1]):r(i,c)}return i}}});var tC=a(()=>{"use strict";var X3=x(),rC=ae(),Z3=eC();X3({target:"Map",stat:!0,forced:!0},{of:Z3(rC.Map,rC.set,!0)})});var iC=a(()=>{"use strict";var eB=x(),rB=B(),tB=pe(),nB=N(),nC=D(),iB=ae().Map;eB({target:"Map",stat:!0,forced:!0},{keyBy:function(r,t){var n=nB(this)?this:iB,i=new n;nC(t);var o=nC(i.set);return tB(r,function(u){rB(o,i,t(u),u)}),i}})});var aC=a(()=>{"use strict";var aB=x(),oB=Y(),uB=ae().remove;aB({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var r=oB(this),t=!0,n,i=0,o=arguments.length;i<o;i++)n=uB(r,arguments[i]),t=t&&n;return!!t}})});var uC=a(()=>{"use strict";var sB=x(),cB=Y(),Cs=ae(),lB=Cs.get,fB=Cs.has,oC=Cs.set;sB({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(r,t){var n=cB(this),i,o;return fB(n,r)?(i=lB(n,r),"update"in t&&(i=t.update(i,r,n),oC(n,r,i)),i):(o=t.insert(r,n),oC(n,r,o),o)}})});var cC=a((bJ,sC)=>{"use strict";var pB=B();sC.exports=function(e,r,t){for(var n=t?e:e.iterator,i=e.next,o,u;!(o=pB(i,n)).done;)if(u=r(o.value),u!==void 0)return u}});var ye=a((qJ,lC)=>{"use strict";var vB=cC();lC.exports=function(e,r,t){return t?vB(e.entries(),function(n){return r(n[1],n[0])},!0):e.forEach(r)}});var fC=a(()=>{"use strict";var dB=x(),mB=V(),hB=Y(),yB=ye();dB({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var t=hB(this),n=mB(r,arguments.length>1?arguments[1]:void 0);return yB(t,function(i,o){if(!n(i,o,t))return!1},!0)!==!1}})});var vC=a(()=>{"use strict";var gB=x(),bB=V(),qB=Y(),pC=ae(),xB=ye(),SB=pC.Map,wB=pC.set;gB({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var t=qB(this),n=bB(r,arguments.length>1?arguments[1]:void 0),i=new SB;return xB(t,function(o,u){n(o,u,t)&&wB(i,u,o)}),i}})});var dC=a(()=>{"use strict";var TB=x(),CB=V(),OB=Y(),EB=ye();TB({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var t=OB(this),n=CB(r,arguments.length>1?arguments[1]:void 0),i=EB(t,function(o,u){if(n(o,u,t))return{value:o}},!0);return i&&i.value}})});var mC=a(()=>{"use strict";var kB=x(),IB=V(),PB=Y(),_B=ye();kB({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var t=PB(this),n=IB(r,arguments.length>1?arguments[1]:void 0),i=_B(t,function(o,u){if(n(o,u,t))return{key:u}},!0);return i&&i.key}})});var yC=a((IJ,hC)=>{"use strict";hC.exports=function(e,r){return e===r||e!==e&&r!==r}});var gC=a(()=>{"use strict";var RB=x(),AB=yC(),NB=Y(),MB=ye();RB({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(r){return MB(NB(this),function(t){if(AB(t,r))return!0},!0)===!0}})});var bC=a(()=>{"use strict";var jB=x(),$B=Y(),LB=ye();jB({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(r){var t=LB($B(this),function(n,i){if(n===r)return{key:i}},!0);return t&&t.key}})});var xC=a(()=>{"use strict";var FB=x(),DB=V(),BB=Y(),qC=ae(),GB=ye(),UB=qC.Map,WB=qC.set;FB({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var t=BB(this),n=DB(r,arguments.length>1?arguments[1]:void 0),i=new UB;return GB(t,function(o,u){WB(i,n(o,u,t),o)}),i}})});var wC=a(()=>{"use strict";var HB=x(),KB=V(),zB=Y(),SC=ae(),VB=ye(),YB=SC.Map,JB=SC.set;HB({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var t=zB(this),n=KB(r,arguments.length>1?arguments[1]:void 0),i=new YB;return VB(t,function(o,u){JB(i,u,n(o,u,t))}),i}})});var TC=a(()=>{"use strict";var QB=x(),XB=Y(),ZB=pe(),e5=ae().set;QB({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(r){for(var t=XB(this),n=arguments.length,i=0;i<n;)ZB(arguments[i++],function(o,u){e5(t,o,u)},{AS_ENTRIES:!0});return t}})});var CC=a(()=>{"use strict";var r5=x(),t5=D(),n5=Y(),i5=ye(),a5=TypeError;r5({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var t=n5(this),n=arguments.length<2,i=n?void 0:arguments[1];if(t5(r),i5(t,function(o,u){n?(n=!1,i=o):i=r(i,o,u,t)}),n)throw new a5("Reduce of empty map with no initial value");return i}})});var OC=a(()=>{"use strict";var o5=x(),u5=V(),s5=Y(),c5=ye();o5({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var t=s5(this),n=u5(r,arguments.length>1?arguments[1]:void 0);return c5(t,function(i,o){if(n(i,o,t))return!0},!0)===!0}})});var kC=a(()=>{"use strict";var l5=x(),EC=D(),f5=Y(),Os=ae(),p5=TypeError,v5=Os.get,d5=Os.has,m5=Os.set;l5({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,t){var n=f5(this),i=arguments.length;EC(t);var o=d5(n,r);if(!o&&i<3)throw new p5("Updating absent value");var u=o?v5(n,r):EC(i>2?arguments[2]:void 0)(r,n);return m5(n,r,t(u,r,n)),n}})});var ks=a((KJ,IC)=>{"use strict";var Di=B(),Es=D(),Bi=N(),h5=Q(),y5=TypeError;IC.exports=function(r,t){var n=h5(this),i=Es(n.get),o=Es(n.has),u=Es(n.set),c=arguments.length>2?arguments[2]:void 0,s;if(!Bi(t)&&!Bi(c))throw new y5("At least one callback required");return Di(o,n,r)?(s=Di(i,n,r),Bi(t)&&(s=t(s),Di(u,n,r,s))):Bi(c)&&(s=c(),Di(u,n,r,s)),s}});var PC=a(()=>{"use strict";var g5=x(),b5=ks();g5({target:"Map",proto:!0,real:!0,forced:!0},{upsert:b5})});var _C=a(()=>{"use strict";var q5=x(),x5=ks();q5({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:x5})});var AC=a((QJ,RC)=>{"use strict";var S5=VT();XT();tC();iC();aC();uC();fC();vC();dC();mC();gC();ws();Ts();bC();xC();wC();TC();CC();OC();kC();PC();_C();RC.exports=S5});var MC=a((XJ,NC)=>{"use strict";NC.exports=AC()});var $C=a(()=>{"use strict";var w5=x(),T5=ct(),C5=Pa().indexOf,O5=Qu(),Is=T5([].indexOf),jC=!!Is&&1/Is([1],1,-0)<0,E5=jC||!O5("indexOf");w5({target:"Array",proto:!0,forced:E5},{indexOf:function(r){var t=arguments.length>1?arguments[1]:void 0;return jC?Is(this,r,t)||0:C5(this,r,t)}})});var FC=a((rQ,LC)=>{"use strict";$C();var k5=oe();LC.exports=k5("Array","indexOf")});var BC=a((tQ,DC)=>{"use strict";var I5=G(),P5=FC(),Ps=Array.prototype;DC.exports=function(e){var r=e.indexOf;return e===Ps||I5(Ps,e)&&r===Ps.indexOf?P5:r}});var UC=a((nQ,GC)=>{"use strict";var _5=BC();GC.exports=_5});var HC=a((iQ,WC)=>{"use strict";var R5=UC();WC.exports=R5});var zC=a((aQ,KC)=>{"use strict";var A5=HC();KC.exports=A5});var YC=a((oQ,VC)=>{"use strict";VC.exports=zC()});var pO=a(()=>{"use strict";var F5=x(),D5=re(),fO=En(),B5=P(),G5=B5(function(){fO(1)});F5({target:"Object",stat:!0,forced:G5},{keys:function(r){return fO(D5(r))}})});var dO=a((fX,vO)=>{"use strict";pO();var U5=z();vO.exports=U5.Object.keys});var hO=a((pX,mO)=>{"use strict";var W5=dO();mO.exports=W5});var gO=a((vX,yO)=>{"use strict";var H5=hO();yO.exports=H5});var qO=a((dX,bO)=>{"use strict";var K5=gO();bO.exports=K5});var SO=a((mX,xO)=>{"use strict";xO.exports=qO()});var TO=a((hX,wO)=>{wO.exports=SO()});var Ke="";function Ks(e){Ke=e.replace(/\/+$/,"")}async function ur(e,r){if(e.ok)return;let t=await e.json().catch(()=>({error:{message:e.statusText}}));throw new Error(t.error?.message||`${r}: ${e.status}`)}async function zs(e,r){let t=r?`document=${encodeURIComponent(r)}`:`uri=${encodeURIComponent(e)}`,n=await fetch(`${Ke}/comments?${t}`);return await ur(n,"Failed to fetch comments"),(await n.json()).data}async function Vi({uri:e,document:r,quote:t,prefix:n,suffix:i,body:o,author:u,parent:c}){let s={quote:t,prefix:n,suffix:i,body:o,author:u,parent:c};r?s.document=r:s.uri=e;let l=await fetch(`${Ke}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});return await ur(l,"Failed to create comment"),l.json()}async function Vs(e,{body:r}){let t=await fetch(`${Ke}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:r})});return await ur(t,"Failed to update comment"),t.json()}async function Ys(e,r){let t=await fetch(`${Ke}/comments/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:r})});return await ur(t,"Failed to update comment status"),t.json()}async function Js(e){let r=await fetch(`${Ke}/comments/${e}`,{method:"DELETE"});await ur(r,"Failed to delete comment")}async function Qs(e,r,t){let n=await fetch(`${Ke}/comments/${e}/reactions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({emoji:r,author:t})});return await ur(n,"Failed to add reaction"),n.json()}async function Xs(e,r,t){let n=await fetch(`${Ke}/comments/${e}/reactions/${encodeURIComponent(r)}?author=${encodeURIComponent(t)}`,{method:"DELETE"});return await ur(n,"Failed to remove reaction"),n.json()}var FL=g(Ur(),1),DL=g(Mn(),1),BL=g(Qn(),1),GL=g(Xn(),1),UL=g(Zn(),1);var Tu=g(nt(),1);function zy(e,r,t,n,i,o,u){try{var c=e[o](u),s=c.value}catch(l){return void t(l)}c.done?r(s):Tu.default.resolve(s).then(n,i)}function Cr(e){return function(){var r=this,t=arguments;return new Tu.default(function(n,i){var o=e.apply(r,t);function u(s){zy(o,n,i,u,c,"next",s)}function c(s){zy(o,n,i,u,c,"throw",s)}u(void 0)})}}function Bt(e,r){this.v=e,this.k=r}function rr(e){return new Bt(e,0)}var Cu=g(nt(),1),ng=g(Se(),1),ig=g(di(),1);function Te(e){return function(){return new Gt(e.apply(this,arguments))}}function Gt(e){var r,t;function n(o,u){try{var c=e[o](u),s=c.value,l=s instanceof Bt;Cu.default.resolve(l?s.v:s).then(function(f){if(l){var p=o==="return"?"return":"next";if(!s.k||f.done)return n(p,f);f=e[p](f).value}i(c.done?"return":"normal",f)},function(f){n("throw",f)})}catch(f){i("throw",f)}}function i(o,u){switch(o){case"return":r.resolve({value:u,done:!0});break;case"throw":r.reject(u);break;default:r.resolve({value:u,done:!1})}(r=r.next)?n(r.key,r.arg):t=null}this._invoke=function(o,u){return new Cu.default(function(c,s){var l={key:o,arg:u,resolve:c,reject:s,next:null};t?t=t.next=l:(r=t=l,n(o,u))})},typeof e.return!="function"&&(this.return=void 0)}Gt.prototype[typeof ng.default=="function"&&ig.default||"@@asyncIterator"]=function(){return this},Gt.prototype.next=function(e){return this._invoke("next",e)},Gt.prototype.throw=function(e){return this._invoke("throw",e)},Gt.prototype.return=function(e){return this._invoke("return",e)};var WL=g(se(),1),HL=g(kq(),1);function ce(e){var r,t=$L(e)?e.startContainer:e;return(r=t.ownerDocument)!==null&&r!==void 0?r:t}function $L(e){return"startContainer"in e}function nr(e){if(LL(e))return e;var r=e,t=ce(r).createRange();return t.selectNodeContents(r),t}function LL(e){return"startContainer"in e}var Dq=g(Fq(),1);function Bq(e){if((0,Dq.default)(e))return e}var ex=g(Se(),1),rx=g(Ao(),1),tx=g(Vu(),1);function nx(e,r){var t=e==null?null:typeof ex.default<"u"&&(0,rx.default)(e)||e["@@iterator"];if(t!=null){var n,i,o,u,c=[],s=!0,l=!1;try{if(o=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;s=!1}else for(;!(s=(n=o.call(t)).done)&&((0,tx.default)(c).call(c,n.value),c.length!==r);s=!0);}catch(f){l=!0,i=f}finally{try{if(!s&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(l)throw i}}return c}}var ix=g(wa(),1),ax=g(Ya(),1);function Ii(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function Yu(e,r){if(e){var t;if(typeof e=="string")return Ii(e,r);var n=(0,ix.default)(t={}.toString.call(e)).call(t,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?(0,ax.default)(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ii(e,r):void 0}}function ox(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Le(e,r){return Bq(e)||nx(e,r)||Yu(e,r)||ox()}var ux=g(Se(),1),sx=g(di(),1),cx=g(Jt(),1),en=g(nt(),1);function at(e){var r,t,n,i=2;for(typeof ux.default<"u"&&(t=sx.default,n=cx.default);i--;){if(t&&(r=e[t])!=null)return r.call(e);if(n&&(r=e[n])!=null)return new Pi(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function Pi(e){function r(t){if(Object(t)!==t)return en.default.reject(new TypeError(t+" is not an object."));var n=t.done;return en.default.resolve(t.value).then(function(i){return{value:i,done:n}})}return Pi=function(n){this.s=n,this.n=n.next},Pi.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(n){var i=this.s.return;return i===void 0?en.default.resolve({value:n,done:!0}):r(i.apply(this.s,arguments))},throw:function(n){var i=this.s.return;return i===void 0?en.default.reject(n):r(i.apply(this.s,arguments))}},new Pi(e)}var gD=g(se(),1);var pD=g(se(),1),vD=g(Tx(),1),dD=g(Ox(),1),mD=g(Vx(),1),hD=g(vS(),1),yD=g(rs(),1);var As=g(se(),1);var f4=g(se(),1);var ns=g(se(),1);function rn(e,r){return e.equals?e.equals(r):r.equals?r.equals(e):e===r}function ES(e,r){return rn(e.startChunk,r.startChunk)&&rn(e.endChunk,r.endChunk)&&e.startIndex===r.startIndex&&e.endIndex===r.endIndex}function Or(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var ts=g(Ht(),1);var tn=g(Se(),1),kS=g(Jt(),1);function Fe(e){"@babel/helpers - typeof";return Fe=typeof tn.default=="function"&&typeof kS.default=="symbol"?function(r){return typeof r}:function(r){return r&&typeof tn.default=="function"&&r.constructor===tn.default&&r!==tn.default.prototype?"symbol":typeof r},Fe(e)}var DS=g(FS(),1);function BS(e,r){if(Fe(e)!="object"||!e)return e;var t=e[DS.default];if(t!==void 0){var n=t.call(e,r||"default");if(Fe(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function _i(e){var r=BS(e,"string");return Fe(r)=="symbol"?r:r+""}function GS(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,ts.default)(e,_i(n.key),n)}}function nn(e,r,t){return r&&GS(e.prototype,r),t&&GS(e,t),(0,ts.default)(e,"prototype",{writable:!1}),e}var US=g(Ht(),1);function Er(e,r,t){return(r=_i(r))in e?(0,US.default)(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var WS=g(Ur(),1);var Ri="Iterator exhausted before seek ended.",an=function(){function e(r){Or(this,e),this.chunker=r,Er(this,"currentChunkPosition",0),Er(this,"offsetInChunk",0),this.seekTo(0)}return nn(e,[{key:"currentChunk",get:function(){return this.chunker.currentChunk}},{key:"position",get:function(){return this.currentChunkPosition+this.offsetInChunk}},{key:"read",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return this._readOrSeekTo(!0,this.position+t,n,i)}},{key:"readTo",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this._readOrSeekTo(!0,t,n)}},{key:"seekBy",value:function(t){this.seekTo(this.position+t)}},{key:"seekTo",value:function(t){this._readOrSeekTo(!1,t)}},{key:"seekToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this._readOrSeekToChunk(!1,t,n)}},{key:"readToChunk",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._readOrSeekToChunk(!0,t,n)}},{key:"_readOrSeekToChunk",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=this.position,u="";if(this.chunker.precedesCurrentChunk(n))for(;!rn(this.currentChunk,n);){var p=this._readToPreviousChunk(),v=Le(p,2),d=v[0],h=v[1];if(t&&(u=d+u),h===null)throw new RangeError(Ri)}else for(;!rn(this.currentChunk,n);){var c=this._readToNextChunk(),s=Le(c,2),l=s[0],f=s[1];if(t&&(u+=l),f===null)throw new RangeError(Ri)}var m=this.currentChunkPosition+i;if(!t)this.seekTo(m);else return m>=this.position?u+=this.readTo(m):m>=o?(this.seekTo(m),u=(0,WS.default)(u).call(u,0,m-o)):(this.seekTo(o),u=this.readTo(m)),u}},{key:"_readOrSeekTo",value:function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u="";if(this.position<=n)for(;;){var c=this.currentChunkPosition+this.currentChunk.data.length;if(c<=n){var s=this._readToNextChunk(),l=Le(s,2),f=l[0],p=l[1];if(t&&(u+=f),p===null){if(this.position===n||o)break;throw new RangeError(Ri)}}else{var v=i?this.currentChunk.data.length:n-this.currentChunkPosition;t&&(u+=this.currentChunk.data.substring(this.offsetInChunk,v)),this.offsetInChunk=v,i&&this.seekBy(0);break}}else for(;this.position>n;)if(this.currentChunkPosition<=n){var d=i?0:n-this.currentChunkPosition;t&&(u=this.currentChunk.data.substring(d,this.offsetInChunk)+u),this.offsetInChunk=d;break}else{var h=this._readToPreviousChunk(),m=Le(h,2),y=m[0],q=m[1];if(t&&(u=y+u),q===null){if(o)break;throw new RangeError(Ri)}}if(t)return u}},{key:"_readToNextChunk",value:function(){var t=this.currentChunk.data.substring(this.offsetInChunk),n=this.currentChunk.data.length,i=this.chunker.nextChunk();return i!==null?(this.currentChunkPosition+=n,this.offsetInChunk=0):this.offsetInChunk=n,[t,i]}},{key:"_readToPreviousChunk",value:function(){var t=this.currentChunk.data.substring(0,this.offsetInChunk),n=this.chunker.previousChunk();return n!==null?(this.currentChunkPosition-=this.currentChunk.data.length,this.offsetInChunk=this.currentChunk.data.length):this.offsetInChunk=0,[t,n]}}]),e}();function KS(e,r){return is.apply(this,arguments)}function is(){return is=Cr(ns.default.mark(function e(r,t){var n,i,o,u,c,s,l,f,p,v,d,h,m,y,q,b,k,E,S,T,w,O,j=arguments;return ns.default.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:n=j.length>2&&j[2]!==void 0?j[2]:{},i=n.minimalContext,o=i===void 0?!1:i,u=n.minimumQuoteLength,c=u===void 0?0:u,s=n.maxWordLength,l=s===void 0?50:s,f=new an(t()),p=new an(t()),f.seekToChunk(r.startChunk,r.startIndex),v=f.readToChunk(r.endChunk,r.endIndex),d="",h="",m=function(){return d.length+v.length+h.length},m()<c&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),y=Math.floor((c-m())/2),d=f.read(-y,!1,!0)+d,m()<c&&(f.seekToChunk(r.endChunk,r.endIndex+h.length),q=c-m(),h=h+f.read(q,!1,!0),m()<c&&(f.seekToChunk(r.startChunk,r.startIndex-d.length),b=c-m(),d=f.read(-b,!1,!0)+d))),o||(f.seekToChunk(r.startChunk,r.startIndex-d.length),d=Ai(f,l,!0)+d,f.seekToChunk(r.endChunk,r.endIndex+h.length),h=h+Ai(f,l,!1));case 11:return k={type:"TextQuoteSelector",exact:v,prefix:d,suffix:h},E=Ni(k)(t()),I.next=16,E.next();case 16:if(S=I.sent,!(!S.done&&ES(S.value,r))){I.next=21;break}return I.next=20,E.next();case 20:S=I.sent;case 21:if(!S.done){I.next=23;break}return I.abrupt("return",k);case 23:if(T=S.value,f.seekToChunk(r.startChunk,r.startIndex-d.length),p.seekToChunk(T.startChunk,T.startIndex-d.length),w=HS(f,p,!0),w!==void 0&&!o&&(w=Ai(f,l,!0)+w),f.seekToChunk(r.endChunk,r.endIndex+h.length),p.seekToChunk(T.endChunk,T.endIndex+h.length),O=HS(f,p,!1),O!==void 0&&!o&&(O=O+Ai(f,l,!1)),!o){I.next=44;break}if(!(w!==void 0&&(O===void 0||w.length<=O.length))){I.next=37;break}d=w+d,I.next=42;break;case 37:if(O===void 0){I.next=41;break}h=h+O,I.next=42;break;case 41:throw new Error("Target cannot be disambiguated; how could that have happened\u203D");case 42:I.next=46;break;case 44:w!==void 0&&(d=w+d),O!==void 0&&(h=h+O);case 46:I.next=11;break;case 48:case"end":return I.stop()}},e)})),is.apply(this,arguments)}function HS(e,r,t){for(var n="";;){var i=void 0;try{i=e.read(t?-1:1)}catch{return}n=t?i+n:n+i;var o=void 0;try{o=r.read(t?-1:1)}catch(u){if(!(u instanceof RangeError))throw u}if(i!==o)return n}}function Ai(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n="";n.length<r;){var i=void 0;try{i=e.read(t?-1:1)}catch(o){if(!(o instanceof RangeError))throw o;break}if(wD(i)){e.seekBy(t?1:-1);break}n=t?i+n:n+i}return n}function wD(e){return/^\s+$/.test(e)}var Aw=g(Ur(),1),Nw=g(Mn(),1),Mw=g(Qn(),1),jw=g(Xn(),1),$w=g(Zn(),1);var us=g(se(),1),Lw=g(mw(),1),Fw=g(Pw(),1);function _w(e,r){var t;if(typeof Mw.default>"u"||(0,jw.default)(e)==null){if(Array.isArray(e)||(t=a4(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,u=!1,c;return{s:function(){t=(0,$w.default)(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){u=!0,c=l},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(u)throw c}}}}function a4(e,r){var t;if(e){if(typeof e=="string")return Rw(e,r);var n=(0,Aw.default)(t=Object.prototype.toString.call(e)).call(t,8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return(0,Nw.default)(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rw(e,r)}}function Rw(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Ni(e){return function(){var r=Te(us.default.mark(function n(i){var o,u,c,s,l,f,p,v,d,h,m,y,q,b,k,E,S,T,w,O,j,ge,I,ee,be,J,F;return us.default.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:o=e.exact,u=e.prefix||"",c=e.suffix||"",s=u+o+c,l=[],f=!0;case 6:p=i.currentChunk,v=p.data,d=[],h=_w(l),C.prev=10,h.s();case 12:if((m=h.n()).done){C.next=27;break}if(y=m.value,q=y.charactersMatched,y.endChunk===void 0&&(b=u.length+o.length-q,b<=v.length&&(y.endChunk=p,y.endIndex=b)),y.startChunk===void 0&&(k=u.length-q,(k<v.length||y.endChunk!==void 0)&&(y.startChunk=p,y.startIndex=k)),E=s.length-q,!(E<=v.length)){C.next=24;break}if(!(0,Lw.default)(v).call(v,s.substring(q))){C.next=22;break}return C.next=22,y;case 22:C.next=25;break;case 24:v===s.substring(q,q+v.length)&&(y.charactersMatched+=v.length,d.push(y));case 25:C.next=12;break;case 27:C.next=32;break;case 29:C.prev=29,C.t0=C.catch(10),h.e(C.t0);case 32:return C.prev=32,h.f(),C.finish(32);case 35:if(l=d,!(s.length<=v.length)){C.next=49;break}S=0;case 38:if(!(S<=v.length)){C.next=49;break}if(T=v.indexOf(s,S),T!==-1){C.next=42;break}return C.abrupt("break",49);case 42:if(S=T+1,!(T===0&&s.length===0&&!f)){C.next=45;break}return C.abrupt("continue",38);case 45:return C.next=47,{startChunk:p,startIndex:T+u.length,endChunk:p,endIndex:T+u.length+o.length};case 47:C.next=38;break;case 49:for(w=[],O=Math.max(v.length-s.length+1,0),j=function(He){var Ws=v[He];w=(0,Fw.default)(w).call(w,function(QO){return Ws===s[He-QO]}),Ws===s[0]&&w.push(He)},ge=O;ge<v.length;ge++)j(ge);I=_w(w);try{for(I.s();!(ee=I.n()).done;)be=ee.value,J=v.length-be,F={charactersMatched:J},J>=u.length+o.length&&(F.endChunk=p,F.endIndex=be+u.length+o.length),(J>u.length||F.endChunk!==void 0)&&(F.startChunk=p,F.startIndex=be+u.length),l.push(F)}catch(_r){I.e(_r)}finally{I.f()}f=!1;case 56:if(i.nextChunk()!==null){C.next=6;break}case 57:case"end":return C.stop()}},n,null,[[10,29,32,35]])}));function t(n){return r.apply(this,arguments)}return t}()}var c4=g(se(),1);var o4=g(Ur(),1),u4=g(rs(),1);var l4=g(se(),1);var sn=g(nT(),1);var aT=g(hi(),1),oT=g(Ht(),1);var ls=g(yi(),1),iT=g(Wt(),1);function ir(e,r){var t;return ir=ls.default?(0,iT.default)(t=ls.default).call(t):function(n,i){return n.__proto__=i,n},ir(e,r)}function fs(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=(0,aT.default)(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),(0,oT.default)(e,"prototype",{writable:!1}),r&&ir(e,r)}function uT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function sT(e,r){if(r&&(Fe(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return uT(e)}var cT=g(yi(),1),lT=g(Wt(),1),ps=g(mi(),1);function kr(e){var r;return kr=cT.default?(0,lT.default)(r=ps.default).call(r):function(t){return t.__proto__||(0,ps.default)(t)},kr(e)}var Rs=g(MC(),1),nO=g(hi(),1);var JC=g(YC(),1);function QC(e){try{var r;return(0,JC.default)(r=Function.toString.call(e)).call(r,"[native code]")!==-1}catch{return typeof e=="function"}}var ZC=g(Mi(),1),eO=g(Vu(),1),rO=g(Wt(),1);var XC=g(Mi(),1);function _s(){try{var e=!Boolean.prototype.valueOf.call((0,XC.default)(Boolean,[],function(){}))}catch{}return(_s=function(){return!!e})()}function tO(e,r,t){if(_s())return ZC.default.apply(null,arguments);var n=[null];(0,eO.default)(n).apply(n,r);var i=new((0,rO.default)(e).apply(e,n));return t&&ir(i,t.prototype),i}function un(e){var r=typeof Rs.default=="function"?new Rs.default:void 0;return un=function(n){if(n===null||!QC(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,i)}function i(){return tO(n,arguments,kr(this).constructor)}return i.prototype=(0,nO.default)(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),ir(i,n)},un(e)}function oO(e,r){var t=ce(e),n=t.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:function(d){return!r||r.intersectsNode(d)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i=iO(e.startContainer,e.startOffset),o=Le(i,2),u=o[0],c=o[1];for(n.currentNode=u;c===u.length&&n.nextNode();)u=n.currentNode,c=0;e.setStart(u,c);var s=iO(e.endContainer,e.endOffset),l=Le(s,2),f=l[0],p=l[1];for(n.currentNode=f;p===0&&n.previousNode();)f=n.currentNode,p=f.length;return e.setEnd(f,p),e}function iO(e,r){var t;if(aO(e))return[e,r];var n;if(N5(e))n=e;else if(r<e.childNodes.length)n=e.childNodes[r];else{for(n=e;n.nextSibling===null;){if(n.parentNode===null)throw new Error("not implemented");n=n.parentNode}n=n.nextSibling}if(aO(n))return[n,0];var i=(t=e.ownerDocument)!==null&&t!==void 0?t:e,o=i.createTreeWalker(i,NodeFilter.SHOW_TEXT);if(o.currentNode=n,o.nextNode()!==null)return[o.currentNode,0];if(o.previousNode()!==null)return[o.currentNode,o.currentNode.length];throw new Error("Document contains no text nodes.")}function aO(e){return e.nodeType===Node.TEXT_NODE}function N5(e){return e.nodeType===Node.PROCESSING_INSTRUCTION_NODE||e.nodeType===Node.COMMENT_NODE||e.nodeType===Node.TEXT_NODE}function sO(e){var r=M5();return function(){var n=kr(e),i;if(r){var o=kr(this).constructor;i=(0,sn.default)(n,arguments,o)}else i=n.apply(this,arguments);return sT(this,i)}}function M5(){if(typeof Reflect>"u"||!sn.default||sn.default.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call((0,sn.default)(Boolean,[],function(){})),!0}catch{return!1}}var Gi=function(e){fs(t,e);var r=sO(t);function t(n){return Or(this,t),r.call(this,n||"Scope contains no text nodes.")}return t}(un(TypeError)),j5=function(e){fs(t,e);var r=sO(t);function t(n){return Or(this,t),r.call(this,n||"Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.")}return t}(un(TypeError)),Ir=function(){function e(r){var t=this;if(Or(this,e),Er(this,"scope",void 0),Er(this,"iter",void 0),this.scope=nr(r),this.iter=ce(r).createNodeIterator(this.scope.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:function(o){return t.scope.intersectsNode(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),this.iter.nextNode(),!uO(this.iter.referenceNode)){var n=this.iter.nextNode();if(n===null)throw new Gi}}return nn(e,[{key:"currentChunk",get:function(){var t=this.iter.referenceNode;if(!uO(t))throw new Gi;return this.nodeToChunk(t)}},{key:"nodeToChunk",value:function(t){if(!this.scope.intersectsNode(t))throw new j5;var n=t===this.scope.startContainer?this.scope.startOffset:0,i=t===this.scope.endContainer?this.scope.endOffset:t.length;return{node:t,startOffset:n,endOffset:i,data:t.data.substring(n,i),equals:function(u){return u.node===this.node&&u.startOffset===this.startOffset&&u.endOffset===this.endOffset}}}},{key:"rangeToChunkRange",value:function(t){t=t.cloneRange(),t.compareBoundaryPoints(Range.START_TO_START,this.scope)===-1&&t.setStart(this.scope.startContainer,this.scope.startOffset),t.compareBoundaryPoints(Range.END_TO_END,this.scope)===1&&t.setEnd(this.scope.endContainer,this.scope.endOffset);var n=oO(t,this.scope),i=this.nodeToChunk(n.startContainer),o=n.startOffset-i.startOffset,u=this.nodeToChunk(n.endContainer),c=n.endOffset-u.startOffset;return{startChunk:i,startIndex:o,endChunk:u,endIndex:c}}},{key:"chunkRangeToRange",value:function(t){var n=ce(this.scope).createRange();return n.setStart(t.startChunk.node,t.startIndex+t.startChunk.startOffset),n.setEnd(t.endChunk.node,t.endIndex+t.endChunk.startOffset),n}},{key:"nextChunk",value:function(){return this.iter.pointerBeforeReferenceNode&&this.iter.nextNode(),this.iter.nextNode()?this.currentChunk:null}},{key:"previousChunk",value:function(){return this.iter.pointerBeforeReferenceNode||this.iter.previousNode(),this.iter.previousNode()?this.currentChunk:null}},{key:"precedesCurrentChunk",value:function(t){return this.currentChunk===null?!1:!!(this.currentChunk.node.compareDocumentPosition(t.node)&Node.DOCUMENT_POSITION_PRECEDING)}}]),e}();function uO(e){return e.nodeType===Node.TEXT_NODE}function cO(e,r){return Ns.apply(this,arguments)}function Ns(){return Ns=Cr(As.default.mark(function e(r,t){var n,i,o,u=arguments;return As.default.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return n=u.length>2&&u[2]!==void 0?u[2]:{},i=nr(t??ce(r)),o=new Ir(i),s.next=5,KS(o.rangeToChunkRange(r),function(){return new Ir(i)},n);case 5:return s.abrupt("return",s.sent);case 6:case"end":return s.stop()}},e)})),Ns.apply(this,arguments)}var Ms=g(se(),1);function lO(e){var r=Ni(e);return function(){var t=Te(Ms.default.mark(function i(o){var u,c,s,l,f,p,v,d;return Ms.default.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:m.prev=0,u=new Ir(o),m.next=11;break;case 4:if(m.prev=4,m.t0=m.catch(0),!(m.t0 instanceof Gi)){m.next=10;break}return m.abrupt("return");case 10:throw m.t0;case 11:c=!0,s=!1,m.prev=13,f=at(r(u));case 15:return m.next=17,rr(f.next());case 17:return p=m.sent,c=p.done,m.next=21,rr(p.value);case 21:if(v=m.sent,c){m.next=29;break}return d=v,m.next=26,u.chunkRangeToRange(d);case 26:c=!0,m.next=15;break;case 29:m.next=35;break;case 31:m.prev=31,m.t1=m.catch(13),s=!0,l=m.t1;case 35:if(m.prev=35,m.prev=36,!(!c&&f.return!=null)){m.next=40;break}return m.next=40,rr(f.return());case 40:if(m.prev=40,!s){m.next=43;break}throw l;case 43:return m.finish(40);case 44:return m.finish(35);case 45:case"end":return m.stop()}},i,null,[[0,4],[13,31,35,45],[36,,40,44]])}));function n(i){return t.apply(this,arguments)}return n}()}var $5=g(se(),1);var L5=g(se(),1);var z5=g(TO(),1),V5=g(Ur(),1),Y5=g(Mn(),1),J5=g(Qn(),1),Q5=g(Xn(),1),X5=g(Zn(),1);async function CO(e,r){let t=await cO(e,r);return{exact:t.exact,prefix:t.prefix||"",suffix:t.suffix||""}}async function Ui(e,r){let t=lO({type:"TextQuoteSelector",exact:e.exact,prefix:e.prefix||void 0,suffix:e.suffix||void 0});for await(let n of t(r))return n;return null}var ot="fb-highlight",OO="fb-highlight-active";var cn=null;function kO(e){cn=e}function Wi(e,r){let t=[];if(e.startContainer===e.endContainer&&e.startContainer.nodeType===Node.TEXT_NODE){let n=EO(e,r);t.push(n)}else{let n=e8(e);for(let i=0;i<n.length;i++){let o=n[i],u=document.createRange();o===e.startContainer?(u.setStart(o,e.startOffset),u.setEnd(o,o.textContent.length)):o===e.endContainer?(u.setStart(o,0),u.setEnd(o,e.endOffset)):u.selectNodeContents(o),u.collapsed||t.push(EO(u,r))}}return t}function EO(e,r){let t=e.commonAncestorContainer;for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;let n=t,i=!1,o=null;for(;n;){if(n.tagName==="foreignObject"){i=!1;break}n.tagName==="text"&&n instanceof SVGElement&&(i=!0),n.tagName==="svg"&&(o=n),n=n.parentElement}if(i&&o)return Z5(e,r,o);let u=document.createElement("mark");u.className=ot,u.dataset.commentId=r,u.style.backgroundColor="rgba(255, 212, 0, 0.35)",u.style.cursor="pointer",u.style.borderRadius="2px",u.addEventListener("click",()=>{cn&&cn(r)});try{e.surroundContents(u)}catch(c){return console.warn("[feedback-layer] Failed to create highlight:",c),null}return u}function Z5(e,r,t){try{let n=e.getClientRects();if(n.length===0)return null;let i="http://www.w3.org/2000/svg",o=t.getScreenCTM();if(!o)return console.warn("[feedback-layer] Could not get SVG transformation matrix"),null;let u=e.commonAncestorContainer;for(;u&&u.nodeType!==Node.ELEMENT_NODE;)u=u.parentNode;let c=u,s=null;for(;c&&c!==t;){if(c.tagName==="text"){s=c.parentElement;break}c=c.parentElement}let l=s||t,f=o;l!==t&&l.getScreenCTM&&(f=l.getScreenCTM());let p=document.createElementNS(i,"g");p.setAttribute("class",ot),p.setAttribute("data-comment-id",r),p.style.cursor="pointer";for(let y=0;y<n.length;y++){let q=n[y],b=document.createElementNS(i,"rect"),k=t.createSVGPoint();k.x=q.left,k.y=q.top;let E=k.matrixTransform(f.inverse()),S=q.width/f.a,T=q.height/f.d;b.setAttribute("x",E.x),b.setAttribute("y",E.y),b.setAttribute("width",S),b.setAttribute("height",T),b.setAttribute("fill","#ffd400"),b.setAttribute("fill-opacity","0.35"),b.setAttribute("rx","2"),b.setAttribute("ry","2"),b.style.pointerEvents="none",p.appendChild(b)}l&&l!==t?l.appendChild(p):t.appendChild(p);let v=e.commonAncestorContainer;for(;v&&v.nodeType!==Node.ELEMENT_NODE;)v=v.parentNode;let d=new Set,h=v;for(;h&&h!==t;)h.tagName==="text"&&h instanceof SVGElement&&(d.add(h),h.querySelectorAll("tspan").forEach(q=>d.add(q))),h=h.parentElement;let m=y=>{y.preventDefault(),y.stopPropagation(),cn&&cn(r)};return d.forEach(y=>{y.style.cursor="pointer",y.addEventListener("click",m),y.dataset.fbCommentId=r}),p}catch(n){return console.warn("[feedback-layer] Failed to create SVG highlight:",n),null}}function js(e){document.querySelectorAll(`.${ot}[data-comment-id="${e}"]`).forEach(n=>{let i=n.parentNode;if(n.tagName==="g"||n instanceof SVGElement)i.removeChild(n);else{for(;n.firstChild;)i.insertBefore(n.firstChild,n);i.removeChild(n),i.normalize()}}),document.querySelectorAll(`[data-fb-comment-id="${e}"]`).forEach(n=>{delete n.dataset.fbCommentId,n.style.cursor=""})}function IO(){document.querySelectorAll(`.${ot}`).forEach(r=>{let t=r.parentNode;if(r.tagName==="g"||r instanceof SVGElement)t.removeChild(r);else{for(;r.firstChild;)t.insertBefore(r.firstChild,r);t.removeChild(r),t.normalize()}})}function Hi(e){document.querySelectorAll(`.${ot}`).forEach(r=>{let t=r.dataset.commentId===e,n="rgba(255, 180, 0, 0.55)",i="rgba(255, 212, 0, 0.35)";t?r.classList.add(OO):r.classList.remove(OO),r.tagName==="g"||r instanceof SVGElement?r.querySelectorAll("rect").forEach(u=>{u.setAttribute("fill",t?n:i)}):r.style.backgroundColor=t?n:i})}function PO(e){let r=document.querySelector(`.${ot}[data-comment-id="${e}"]`);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}function e8(e){let r=[],t=document.createTreeWalker(e.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode(n){let i=document.createRange();return i.selectNodeContents(n),e.compareBoundaryPoints(Range.END_TO_START,i)<0&&e.compareBoundaryPoints(Range.START_TO_END,i)>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(;t.nextNode();)r.push(t.currentNode);return r}function _O(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return r.length===0?"_No comments found._":r.map((n,i)=>{let o=[`**${i+1}. [${n.author}]**`];n.quote&&o.push(`Highlighted text: "${n.quote}"`),n.body&&o.push(`Comment: ${n.body}`);let u=t.get(n.id)||[];for(let c of u)o.push(`  - **[${c.author}]** (reply): ${c.body}`);return o.join(`
`)}).join(`

`)}function RO(e,r){let t=_O(r);return`You are a document editor. Below is an HTML document and feedback from ${r.filter(i=>!i.parent).length} reviewer comment(s) (with replies). Revise the document to address the feedback.

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
[numbered list matching feedback numbers, explaining what you changed]`}function ar(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var r8=`
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
`,AO=null,NO=null;function MO(e,r){NO=e,AO=r,t8()}function t8(){let e=document.createElement("style");e.textContent=r8,document.head.appendChild(e)}function jO(){let e=AO(),r=document.createElement("div");r.className="hf-overlay";let t=document.createElement("div");t.className="hf-modal";let n=document.createElement("div");n.className="hf-modal-header",n.innerHTML="<h2>Send Feedback to Claude</h2>";let i=document.createElement("button");i.className="hf-modal-close",i.textContent="\xD7",i.addEventListener("click",()=>r.remove()),n.appendChild(i);let o=document.createElement("div");o.className="hf-modal-body";let u=document.createElement("div");if(u.className="hf-modal-footer",t.append(n,o,u),r.appendChild(t),r.addEventListener("click",p=>{p.target===r&&r.remove()}),document.body.appendChild(r),e.length===0){o.innerHTML='<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>';return}let c=document.querySelector(NO.contentSelector||"body").innerHTML,s=RO(c,e);o.innerHTML=`
    <div class="hf-status hf-status-success">
      ${e.length} comment(s) found &mdash; prompt ready (${s.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${ar(s)}</textarea>
  `;let l=document.createElement("button");l.className="hf-btn hf-btn-primary",l.textContent="Copy Prompt",l.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(s),l.textContent="Copied!"}catch{l.textContent="Copy failed"}setTimeout(()=>l.textContent="Copy Prompt",2e3)}),u.appendChild(l);let f=document.createElement("button");f.className="hf-btn hf-btn-secondary",f.textContent="Close",f.addEventListener("click",()=>r.remove()),u.appendChild(f)}function $O(e){let r=[],t=new Map;for(let n of e)n.parent?(t.has(n.parent)||t.set(n.parent,[]),t.get(n.parent).push(n)):r.push(n);return{topLevel:r,repliesByParent:t}}function LO(e,r){return e.length>r?e.slice(0,r)+"...":e}function FO(e){let r=Date.now()-new Date(e).getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}var ln=null;function BO(e){ln=document.createElement("div"),ln.className="fb-toast-container",e.appendChild(ln)}function or(e,r="success"){if(!ln)return;let t=document.createElement("div");t.className=`fb-toast fb-toast-${r}`;let n=document.createElement("span");if(n.textContent=e,t.appendChild(n),r==="error"){let o=document.createElement("button");o.className="fb-toast-dismiss",o.innerHTML="&times;",o.addEventListener("click",()=>DO(t)),t.appendChild(o)}ln.appendChild(t),requestAnimationFrame(()=>{t.classList.add("fb-toast-visible")}),setTimeout(()=>DO(t),r==="error"?8e3:4e3)}function DO(e){e.classList.remove("fb-toast-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>{e.parentNode&&e.remove()},300)}var n8=320,UO="feedback-layer-commenter",X=null,Ge=null,Be=null,$s=null,WO=null,Ls=null,Fs=null,Ds=null,Bs=null,fn=null,Gs=!1,HO=[],KO=new Set;function Ue(){return localStorage.getItem(UO)||""}function zO({onSubmit:e,onDelete:r,onResolve:t,onReply:n,onEdit:i,onReaction:o}){WO=e,Ls=r,Fs=t,Ds=n,Bs=i,fn=o,l8(),X=document.createElement("div"),X.className="fb-sidebar fb-sidebar-collapsed",X.innerHTML=`
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
               value="${ar(Ue())}">
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
  `;let u=document.createElement("button");u.className="fb-sidebar-tab",u.textContent="Feedback",u.addEventListener("click",()=>pn()),document.body.appendChild(u),document.body.appendChild(X),BO(X),Ge=X.querySelector(".fb-comment-list"),Be=X.querySelector(".fb-form-section");let c=X.querySelector(".fb-name-input");c.addEventListener("input",()=>{localStorage.setItem(UO,c.value.trim())}),X.querySelector(".fb-ai-btn").addEventListener("click",()=>jO()),X.querySelector(".fb-sidebar-toggle").addEventListener("click",()=>i8());let f=X.querySelector(".fb-show-resolved-cb");f.addEventListener("change",()=>{Gs=f.checked,We(HO,KO)})}function pn(){X.classList.remove("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden")}function i8(){X.classList.add("fb-sidebar-collapsed"),document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden")}function VO(e){if(pn(),!Ue()){let n=X.querySelector(".fb-name-input");n.style.outline="2px solid #ef4444",setTimeout(()=>n.style.outline="",2e3)}$s=e,Be.style.display="",Be.innerHTML=`
    <div class="fb-form-card">
      <div class="fb-form-quote">"${ar(LO(e,120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
      </div>
    </div>
  `;let r=Be.querySelector(".fb-form-textarea");r.focus();let t=()=>{if(!Ue()){let i=X.querySelector(".fb-name-input");i.focus(),i.style.outline="2px solid #ef4444",setTimeout(()=>i.style.outline="",2e3);return}let n=r.value.trim();n&&(WO({comment:n,commenter:Ue()}),Be.style.display="none",$s=null)};Be.querySelector(".fb-submit-btn").addEventListener("click",t),r.addEventListener("keydown",n=>{n.key==="Enter"&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),t())}),Be.querySelector(".fb-cancel-btn").addEventListener("click",()=>{Be.style.display="none",$s=null}),Be.scrollIntoView({behavior:"smooth",block:"nearest"})}function We(e,r=new Set,t=new Map){HO=e,KO=r,Ge.innerHTML="";let{topLevel:n,repliesByParent:i}=$O(e),o=n.slice().sort((l,f)=>{let p=t.get(l.id),v=t.get(f.id);return!p||!v?0:p.compareBoundaryPoints(Range.START_TO_START,v)}),u=o.filter(l=>{let f=r.has(l.id),p=l.status==="closed";return f||p&&Gs}),c=Gs?u:u.filter(l=>l.status!=="closed");if(o.length===0){Ge.innerHTML='<div class="fb-empty">No comments yet. Select text to add one.</div>';return}let s=o.filter(l=>!r.has(l.id)&&l.status!=="closed").length;if(c.length===0){s>0?Ge.innerHTML=`<div class="fb-empty">
        ${u.length} comment(s) resolved.
        ${s>0?`<br>${s} comment(s) not shown because their quoted text no longer exists in the document.`:""}
        <br>Check "Show closed" to see resolved comments.
      </div>`:Ge.innerHTML=`<div class="fb-empty">All ${o.length} comment(s) resolved. Check "Show closed" to see them.</div>`;return}for(let l of c){let f=document.createElement("div");f.className="fb-thread",f.appendChild(GO(l,!1));let p=i.get(l.id)||[];for(let d of p)f.appendChild(GO(d,!0));let v=document.createElement("button");v.className="fb-reply-btn",v.textContent="Reply",v.addEventListener("click",d=>{d.stopPropagation(),s8(l.id,f,v)}),f.appendChild(v),Ge.appendChild(f)}}function GO(e,r){let t=e.status==="closed",n=document.createElement("div");n.className="fb-cmt-card"+(t?" fb-cmt-closed":"")+(r?" fb-cmt-reply":""),n.dataset.id=e.id,n.innerHTML=`
    <div class="fb-cmt-body">${ar(e.body)}</div>
    <div class="fb-cmt-meta">
      <span class="fb-cmt-author">${ar(e.author)}</span>
      <span class="fb-cmt-time">${FO(e.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${r?"":`<button class="fb-cmt-resolve" title="${t?"Reopen":"Resolve"}">${t?"&#x21a9;":"&#x2713;"}</button>`}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
    <div class="fb-reactions"></div>
  `;let i=n.querySelector(".fb-reactions");return o8(i,e),r||(n.addEventListener("click",o=>{o.target.closest(".fb-cmt-delete")||o.target.closest(".fb-cmt-resolve")||o.target.closest(".fb-cmt-edit")||o.target.closest(".fb-reactions")||(Hi(e.id),PO(e.id),Ge.querySelectorAll(".fb-cmt-card").forEach(u=>u.classList.remove("fb-cmt-active")),n.classList.add("fb-cmt-active"))}),n.querySelector(".fb-cmt-resolve").addEventListener("click",o=>{o.stopPropagation(),Fs&&Fs(e.id,!t)})),n.querySelector(".fb-cmt-edit").addEventListener("click",o=>{o.stopPropagation(),c8(e,n)}),n.querySelector(".fb-cmt-delete").addEventListener("click",o=>{o.stopPropagation(),Ls&&Ls(e.id)}),n}var Us={"\u{1F44D}":{label:"Like",svg:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 22V11l-5 0v11h5zm2-11l3.5-7a2 2 0 0 1 2-1.5c.8 0 1.5.7 1.5 1.5v5h4.5a2 2 0 0 1 2 2.2l-1.3 7a2 2 0 0 1-2 1.8H9z"/></svg>'},"\u2764\uFE0F":{label:"Love",svg:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.3l7.8-7.8 1-1.1a5.5 5.5 0 0 0 0-7.8z"/></svg>'},"\u{1F440}":{label:"Seen",svg:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>'},"\u{1F389}":{label:"Celebrate",svg:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'},"\u{1F914}":{label:"Question",svg:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r="0.5" fill="currentColor"/></svg>'},"\u{1F602}":{label:"Funny",svg:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>'}},a8=Object.keys(Us);function o8(e,r){let t=r.reactions||[],n=Ue();for(let o of t){let u=document.createElement("button");u.className="fb-reaction-badge",n&&o.authors.includes(n)&&u.classList.add("fb-reaction-mine");let s=Us[o.emoji];u.innerHTML=`${s?s.svg:o.emoji}<span class="fb-reaction-count">${o.count}</span>`,u.title=(s?s.label+": ":"")+o.authors.join(", "),u.addEventListener("click",l=>{l.stopPropagation(),fn&&fn(r.id,o.emoji)}),e.appendChild(u)}let i=document.createElement("button");i.className="fb-reaction-add",i.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><circle cx="9" cy="10" r="0.5" fill="currentColor"/><circle cx="15" cy="10" r="0.5" fill="currentColor"/></svg>',i.title="Add reaction",i.addEventListener("click",o=>{o.stopPropagation(),u8(e,r,i)}),e.appendChild(i)}function u8(e,r,t){let n=e.querySelector(".fb-emoji-picker");if(n){n.remove();return}let i=document.createElement("div");i.className="fb-emoji-picker";for(let u of a8){let c=Us[u],s=document.createElement("button");s.className="fb-emoji-option",s.innerHTML=c.svg,s.title=c.label,s.addEventListener("click",l=>{l.stopPropagation(),i.remove(),fn&&fn(r.id,u)}),i.appendChild(s)}e.insertBefore(i,t.nextSibling);let o=u=>{!i.contains(u.target)&&u.target!==t&&(i.remove(),document.removeEventListener("click",o,!0))};setTimeout(()=>document.addEventListener("click",o,!0),0)}function s8(e,r,t){pn();let n=r.querySelector(".fb-reply-form");if(n){n.remove(),t.style.display="";return}t.style.display="none";let i=document.createElement("div");i.className="fb-reply-form",i.innerHTML=`
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;let o=()=>{if(!Ue()){let s=X.querySelector(".fb-name-input");s.focus(),s.style.outline="2px solid #ef4444",setTimeout(()=>s.style.outline="",2e3);return}let c=i.querySelector("textarea").value.trim();c&&(Ds&&Ds({parent_id:e,comment:c,commenter:Ue()}),i.remove(),t.style.display="")};i.querySelector(".fb-reply-submit").addEventListener("click",o);let u=i.querySelector("textarea");u.addEventListener("keydown",c=>{c.key==="Enter"&&(c.metaKey||c.ctrlKey)&&(c.preventDefault(),o())}),i.querySelector(".fb-reply-cancel").addEventListener("click",()=>{i.remove(),t.style.display=""}),r.insertBefore(i,t),u.focus()}function c8(e,r){let t=r.querySelector(".fb-cmt-body"),n=e.body;t.innerHTML=`
    <textarea class="fb-form-textarea" rows="3">${ar(n)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;let i=t.querySelector("textarea");i.focus(),i.setSelectionRange(i.value.length,i.value.length);let o=()=>{let u=i.value.trim();u&&Bs&&Bs(e.id,u)};t.querySelector(".fb-edit-save").addEventListener("click",o),i.addEventListener("keydown",u=>{u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&(u.preventDefault(),o())}),t.querySelector(".fb-edit-cancel").addEventListener("click",()=>{t.textContent=n})}function YO(e){let r=Ge.querySelector(`.fb-cmt-card[data-id="${e}"]`);r&&(Ge.querySelectorAll(".fb-cmt-card").forEach(t=>t.classList.remove("fb-cmt-active")),r.classList.add("fb-cmt-active"),r.scrollIntoView({behavior:"smooth",block:"nearest"}))}function l8(){let e=document.createElement("style");e.textContent=`
    .fb-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: ${n8}px;
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
  `,document.head.appendChild(e)}var ut=null,Ki=null,zi=null,L=[],Pr=null,Oe=null,ve=new Set,Ee=new Map;function f8(){let e=document.currentScript||document.querySelector('script[src*="feedback-layer"]'),r={apiUrl:e?.dataset.apiUrl||"",contentSelector:e?.dataset.contentSelector||"body",documentUri:e?.dataset.documentUri||null,documentId:e?.dataset.documentId||null,proxyUrl:e?.dataset.proxyUrl||null,model:e?.dataset.model||null};Ks(r.apiUrl);async function t(){if(!(typeof window.mermaid>"u"||document.querySelectorAll(".mermaid").length===0)){console.log("[feedback-layer] Waiting for Mermaid to finish rendering...");try{await window.mermaid.run(),console.log("[feedback-layer] Mermaid rendering complete")}catch(o){console.warn("[feedback-layer] Error waiting for Mermaid:",o)}}}let n=async()=>{try{ut=document.querySelector(r.contentSelector)||document.body,Ki=r.documentUri||window.location.origin+window.location.pathname,zi=r.documentId||null,zO({onSubmit:h8,onDelete:x8,onResolve:y8,onReply:g8,onEdit:b8,onReaction:q8}),kO(i=>{pn(),YO(i),Hi(i)}),d8(),await t(),p8(),MO(r,()=>L)}catch(i){console.error("[feedback-layer] Boot failed:",i)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}async function p8(){try{L=await zs(Ki,zi),ve=await v8(L),We(L,ve,Ee)}catch(e){console.error("[feedback-layer] Failed to load comments:",e),or(`Failed to load comments: ${e.message}`,"error")}}async function v8(e){IO();let r=new Set;Ee.clear();for(let t of e)if(!t.parent)try{let n=await Ui({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ut);n&&t.status!=="closed"?(Wi(n,t.id),r.add(t.id),Ee.set(t.id,n)):n&&t.status==="closed"&&(r.add(t.id),Ee.set(t.id,n))}catch(n){console.warn(`[feedback-layer] Could not anchor comment ${t.id}:`,n)}return r}function d8(){document.addEventListener("mouseup",JO),document.addEventListener("keyup",JO)}function JO(){setTimeout(()=>{let e=window.getSelection();if(!e||e.isCollapsed||!e.rangeCount){vn();return}let r=e.getRangeAt(0),t=r.toString().trim();if(!t||t.length<3){vn();return}if(!ut.contains(r.commonAncestorContainer)){vn();return}m8(r)},10)}function m8(e){vn();let r=e.getBoundingClientRect();Oe=document.createElement("button"),Oe.className="fb-annotate-tooltip",Oe.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment',Oe.style.top=window.scrollY+r.top-36+"px",Oe.style.left=window.scrollX+r.left+r.width/2-40+"px",Oe.addEventListener("mousedown",async t=>{t.preventDefault(),t.stopPropagation();let n=window.getSelection();if(!n||n.isCollapsed)return;let i=n.getRangeAt(0);try{Pr=await CO(i,ut),VO(Pr.exact)}catch(o){console.error("[feedback-layer] Failed to create selector:",o)}vn()}),document.body.appendChild(Oe)}function vn(){Oe&&(Oe.remove(),Oe=null)}async function h8({comment:e,commenter:r}){if(Pr){try{let t=await Vi({uri:Ki,document:zi,quote:Pr.exact,prefix:Pr.prefix,suffix:Pr.suffix,body:e,author:r});L.push(t);let n=await Ui({exact:t.quote,prefix:t.prefix,suffix:t.suffix},ut);n&&(Wi(n,t.id),ve.add(t.id)),We(L,ve,Ee),window.getSelection().removeAllRanges()}catch(t){console.error("[feedback-layer] Failed to create comment:",t),or(`Failed to save comment: ${t.message}`,"error")}Pr=null}}async function y8(e,r){try{let n=await Ys(e,r?"closed":"open"),i=L.findIndex(o=>o.id===e);if(i!==-1&&(L[i]=n),r)js(e);else{let o=n,u=await Ui({exact:o.quote,prefix:o.prefix,suffix:o.suffix},ut);u?(Wi(u,o.id),ve.add(o.id)):ve.delete(o.id)}We(L,ve,Ee)}catch(t){console.error("[feedback-layer] Failed to resolve comment:",t),or(`Failed to update comment: ${t.message}`,"error")}}async function g8({parent_id:e,comment:r,commenter:t}){try{let n=await Vi({uri:Ki,document:zi,body:r,author:t,parent:e});L.push(n),We(L,ve,Ee)}catch(n){console.error("[feedback-layer] Failed to create reply:",n),or(`Failed to save reply: ${n.message}`,"error")}}async function b8(e,r){try{let t=await Vs(e,{body:r}),n=L.findIndex(i=>i.id===e);n!==-1&&(L[n]=t),We(L,ve,Ee)}catch(t){console.error("[feedback-layer] Failed to edit comment:",t),or(`Failed to update comment: ${t.message}`,"error")}}async function q8(e,r){let t=Ue();if(t)try{let o=L.find(s=>s.id===e)?.reactions?.find(s=>s.emoji===r)?.authors.includes(t),u;o?u=await Xs(e,r,t):u=await Qs(e,r,t);let c=L.findIndex(s=>s.id===e);c!==-1&&(L[c]={...L[c],reactions:u.reactions}),We(L,ve,Ee)}catch(n){console.error("[feedback-layer] Failed to toggle reaction:",n),or(`Failed to update reaction: ${n.message}`,"error")}}async function x8(e){try{await Js(e),js(e),ve.delete(e),L=L.filter(r=>r.id!==e&&r.parent!==e),We(L,ve,Ee)}catch(r){console.error("[feedback-layer] Failed to delete comment:",r),or(`Failed to delete comment: ${r.message}`,"error")}}try{f8()}catch(e){console.error("[feedback-layer] Init failed:",e)}})();
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
