(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,jL='com.allen_sauer.gwt.dragdrop.client.',kL='com.allen_sauer.gwt.dragdrop.client.drop.',lL='com.allen_sauer.gwt.dragdrop.client.util.',mL='com.allen_sauer.gwt.dragdrop.client.util.impl.',nL='com.google.gwt.core.client.',oL='com.google.gwt.lang.',pL='com.google.gwt.user.client.',qL='com.google.gwt.user.client.impl.',rL='com.google.gwt.user.client.ui.',sL='com.google.gwt.user.client.ui.impl.',tL='java.io.',uL='java.lang.',vL='java.util.',wL='pl.balon.gwt.diagrams.client.common.bezier.',xL='pl.balon.gwt.diagrams.client.connection.',yL='pl.balon.gwt.diagrams.client.connection.calculator.',zL='pl.balon.gwt.diagrams.client.connection.data.',AL='pl.balon.gwt.diagrams.client.connector.',BL='pl.balon.gwt.diagramsexample.client.',CL='pl.balon.gwt.diagramsexample.client.examples.';function iL(){}
function BD(a){return this===a;}
function CD(){return fF(this);}
function DD(){return this.tN+'@'+this.hC();}
function zD(){}
_=zD.prototype={};_.eQ=BD;_.hC=CD;_.tS=DD;_.toString=function(){return this.tS();};_.tN=uL+'Object';_.tI=1;function EI(b,a){b.d=a;return b;}
function DI(){}
_=DI.prototype=new zD();_.tN=vL+'EventObject';_.tI=3;_.d=null;function ib(c,b,a){EI(c,b);c.c=a;return c;}
function kb(){var a;a=this.c!==null?'dropTarget='+hf(this.c):'[cancelled]';return 'DragEndEvent('+a+', source='+hf(this.d)+')';}
function hb(){}
_=hb.prototype=new DI();_.tS=kb;_.tN=jL+'DragEndEvent';_.tI=4;_.c=null;function o(c,b,a,d,e){ib(c,b,a);c.a=d;c.b=e;return c;}
function q(){return 'AbsolutePositionDragEndEvent(x='+this.a+', y='+this.b+')';}
function n(){}
_=n.prototype=new hb();_.tS=q;_.tN=jL+'AbsolutePositionDragEndEvent';_.tI=5;_.a=0;_.b=0;function u(){u=iL;F=CJ(new aJ());}
function s(a){a.g=x(a);}
function t(c,b,a){u();s(c);c.f=b!==null?b:dx();c.e=aQ(c,c.f,a);B(c,c.e);c.l=Bb(new zb(),c);return c;}
function v(c,a,b){qz(a,'dragdrop-dragging');}
function w(b,a){xb(b.g,b.f,a);kz(a,'dragdrop-dragging');}
function x(a){return sb(new lb());}
function y(b,c){var a;a=vb(b.g,c,b.f);return a!==null?a:b.e;}
function z(a,b){{A(a,b,b);}}
function A(c,b,a){Fb(c.l,b,a);kz(b,'dragdrop-draggable');kz(a,'dragdrop-handle');dK(F,b,a);}
function B(b,a){tb(b.g,a);}
function C(b,a){if(ph(b.j,2)){kp(oh(b.j,2),a,b.k.a,b.k.d);}else if(ph(b.j,3)){tu(oh(b.j,3),a,b.h);}else if(ph(b.j,4)){iA(oh(b.j,4),a,b.h);}else if(ph(b.j,5)){Ar(oh(b.j,5),a,b.h);}else if(ph(b.j,6)){oh(b.j,6).wc(a);}else{throw aE(new ED(),'Unable to handle initialDraggableParent '+hg(b.j));}}
function D(b,a){if(b.i!==null&&tE(b.i)!=0){yk(a.gb(),'margin',b.i);}}
function E(b,a){b.j=a.p;if(ph(b.j,2)){b.k=nf(new mf(),a,b.j);}else if(ph(b.j,3)){b.h=eq(oh(b.j,3),a);}else if(ph(b.j,4)){b.h=eq(oh(b.j,4),a);}else if(ph(b.j,5)){b.h=eq(oh(b.j,5),a);}else if(ph(b.j,6)){}else{throw aE(new ED(),"Unable to handle 'initialDraggableParent instanceof "+hg(b.j)+"'; Please create your own DragController and override saveDraggableLocationAndStyle() and restoreDraggableLocation()");}b.i=hk(a.gb(),'margin');if(b.i!==null&&tE(b.i)!=0){yk(a.gb(),'margin','0px');}}
function r(){}
_=r.prototype=new zD();_.tN=jL+'AbstractDragController';_.tI=6;_.e=null;_.f=null;_.h=0;_.i=null;_.j=null;_.k=null;_.l=null;var F;function bb(b,a){b.b=a;return b;}
function db(a){if(a.c==0){return;}Cb(a.b,a.d,a.e);a.a=dF()-a.c;a.c=0;}
function eb(a,b,c){a.d=b;a.e=c;if(a.c==0){a.c=dF();}if(a.a>80){Fk(a);}else{db(a);}}
function fb(){db(this);}
function ab(){}
_=ab.prototype=new zD();_.F=fb;_.tN=jL+'DeferredMoveCommand';_.tI=7;_.a=0;_.b=null;_.c=0;_.d=0;_.e=0;function rb(a){a.a=xH(new vH());}
function sb(a){rb(a);return a;}
function tb(b,a){zH(b.a,a);}
function vb(g,h,a){var b,c,d,e,f,i,j,k;i=kf(new jf(),h,null);j=ge(i);e=null;c=2147483647;for(d=0;d<g.b.a;d++){b=g.b[d];f=b.b;if(je(f,i)){k=fe(f,j);if(k<=c){if(e===null|| !Ae(pb(b).gb(),pb(e).gb())){c=k;e=b;}}}}return e===null?null:e.a;}
function wb(a){return cG(a.a);}
function xb(h,b,d){var a,c,e,f,g;a=kf(new jf(),b,null);g=xH(new vH());for(f=wb(h);BF(f);){e=oh(CF(f),7);c=nb(new mb(),e);if(!Ae(d.gb(),pb(c).gb())){if(je(c.b,a)){zH(g,c);}}}h.b=oh(dI(g,jh('[Lcom.allen_sauer.gwt.dragdrop.client.DropControllerCollection$Candidate;',154,9,[])),8);tI(h.b);}
function lb(){}
_=lb.prototype=new zD();_.tN=jL+'DropControllerCollection';_.tI=8;_.b=null;function nb(c,a){var b;c.a=a;b=a.fb();if(!b.tb()){throw vC(new tC(),'Unattached drop target. You must call DragController#unregisterDropController for all drop targets not attached to the DOM.');}c.b=kf(new jf(),b,null);return c;}
function pb(a){return a.a.fb();}
function qb(a){var b;b=oh(a,9);return Ae(pb(this).gb(),pb(b).gb())?1:(-1);}
function mb(){}
_=mb.prototype=new zD();_.u=qb;_.tN=jL+'DropControllerCollection$Candidate';_.tI=9;_.a=null;_.b=null;function Ab(a){a.d=bb(new ab(),a);a.f=CJ(new aJ());}
function Bb(b,a){Ab(b);b.e=a;b.a=a.f;return b;}
function Cb(e,f,g){var a,b,c,d;c=nf(new mf(),e.b,e.a);a=c.a+e.p+f-e.j;b=c.d+e.q+g-e.k;if(e.c){a=gD(0,hD(a,e.l));b=gD(0,hD(b,e.m));}Be(e.o.gb(),a,b);d=y(e.e,e.o);if(e.i!==d){if(e.i!==null){e.i.cc(e.g,e.e);}e.i=d;if(e.i!==null){e.i.ac(e.o,e.g,e.e);}}if(e.i!==null){e.i.jc(e.o,e.g,e.e);}}
function Db(b){var a;mk(b.b.gb());b.h=false;if(b.i!==null){b.i.cc(b.g,b.e);}b.i=null;jc(b.e,b.g,null);a=ib(new hb(),b.g,null);}
function Fb(c,b,a){if(a!==null){iv(a,c);dK(c.f,a,b);}else{throw aE(new ED(),'dragHandle must implement SourcesMouseEvents to be draggable');}}
function ac(f){var a,c,d,e;f.g=oh(cK(f.f,f.b),12);kc(f.e,f.g);f.o=f.e.d;f.l=Fe(f.a.gb())-f.o.lb();f.m=Ee(f.a.gb())-f.o.kb();e=nf(new mf(),f.b,f.a);c=nf(new mf(),f.o,f.a);f.p=c.a-e.a;f.q=c.d-e.d;rk(f.b.gb());f.h=true;try{Cb(f,f.j,f.k);}catch(a){a=zh(a);if(ph(a,10)){d=a;Db(f);throw d;}else throw a;}}
function bc(b,c,d){var a;this.b=b;a=qj((Fi(),kj));if(a!=1&&a!=(-1)){return;}this.n=true;if(this.h){return;}Bj((Fi(),kj));df();this.j=c;this.k=d;}
function cc(a){}
function dc(a){}
function ec(d,e,f){var a,c;if(!this.h){if(this.n){ac(this);}if(!this.h){return;}}Bj((Fi(),kj));try{eb(this.d,e,f);}catch(a){a=zh(a);if(ph(a,10)){c=a;Db(this);throw c;}else throw a;}}
function fc(g,h,i){var a,a,d,e,f;d=qj((Fi(),kj));if(d!=1&&d!=(-1)){return;}this.n=false;if(!this.h){return;}try{mk(this.b.gb());Cb(this,h,i);this.h=false;if(this.i===null){Db(this);return;}{this.i.fb();}try{this.i.kc(this.o,this.g,this.e);}catch(a){a=zh(a);if(ph(a,11)){a;Db(this);return;}else throw a;}jc(this.e,this.g,this.i.fb());e=this.i.Fb(this.o,this.g,this.e);}catch(a){a=zh(a);if(ph(a,10)){f=a;Db(this);throw f;}else throw a;}finally{this.i=null;}}
function zb(){}
_=zb.prototype=new zD();_.ec=bc;_.fc=cc;_.gc=dc;_.hc=ec;_.ic=fc;_.tN=jL+'MouseDragHandler';_.tI=10;_.a=null;_.b=null;_.c=false;_.e=null;_.g=null;_.h=false;_.i=null;_.j=0;_.k=0;_.l=0;_.m=0;_.n=false;_.o=null;_.p=0;_.q=0;function ic(){ic=iL;u();}
function hc(c,b,a){ic();t(c,b,a);return c;}
function jc(c,a,b){v(c,a,b);if(c.a!==null){c.a=null;if(c.c!==null){CA(c.c);c.c=null;}else{if(b===null){C(c,a);}}D(c,a);CA(c.d);c.d=null;}}
function kc(d,a){var b,c;w(d,a);d.a=a;d.c=lc(d,a);E(d,a);c=nf(new mf(),a,d.f);d.d=ox(new hx());kz(d.d,'dragdrop-movable-panel');if(d.c===null){tz(d.d,a.lb(),a.kb());}kp(d.f,d.d,c.a,c.d);b=d.c!==null?d.c:d.a;d.d.wc(b);}
function lc(c,a){var b;if(c.b){b=xt(new Br(),'this is a Drag Proxy');kz(b,'dragdrop-proxy');tz(b,c.a.lb(),c.a.kb());return b;}else{return null;}}
function gc(){}
_=gc.prototype=new r();_.tN=jL+'PickupDragController';_.tI=11;_.a=null;_.b=false;_.c=null;_.d=null;function Bc(b,a){b.g=a;kz(a,'dragdrop-boundary');return b;}
function Dc(d,c,b,a){qz(d.g,'dragdrop-dropTarget-engage dragdrop-engage');return d.wb(c,b,a);}
function Ec(d,c,b,a){kz(d.g,'dragdrop-dropTarget-engage dragdrop-engage');}
function Fc(c,b,a){qz(c.g,'dragdrop-dropTarget-engage dragdrop-engage');}
function ad(){return this.g;}
function bd(c,b,a){return ib(new hb(),b,this.g);}
function cd(c,b,a){return Dc(this,c,b,a);}
function dd(c,b,a){Ec(this,c,b,a);}
function ed(b,a){Fc(this,b,a);}
function fd(c,b,a){}
function gd(c,b,a){}
function Ac(){}
_=Ac.prototype=new zD();_.fb=ad;_.wb=bd;_.Fb=cd;_.ac=dd;_.cc=ed;_.jc=fd;_.kc=gd;_.tN=kL+'AbstractDropController';_.tI=12;_.g=null;function jd(){jd=iL;pd=gv(new ev(),'x');}
function id(b,a){jd();Bc(b,a);return b;}
function kd(f,e){var a,b,c,d;d=ox(new hx());kz(d,'dragdrop-positioner');kp(dx(),d,(-500),(-500));d.wc(pd);a=ox(new hx());c=e.lb()-af(d);b=e.kb()-bf(d);tz(a,c,b);d.wc(a);return d;}
function ld(e,d,b,a){var c;c=Dc(e,d,b,a);od(e);return c;}
function md(d,c,b,a){Ec(d,c,b,a);d.f=kd(d,b);}
function nd(c,b,a){Fc(c,b,a);od(c);}
function od(a){if(a.f!==null){CA(a.f);}}
function qd(c,b,a){return ld(this,c,b,a);}
function rd(c,b,a){md(this,c,b,a);}
function sd(b,a){nd(this,b,a);}
function hd(){}
_=hd.prototype=new Ac();_.Fb=qd;_.ac=rd;_.cc=sd;_.tN=kL+'AbstractPositioningDropController';_.tI=13;_.f=null;var pd;function oc(){oc=iL;jd();}
function nc(b,a){oc();id(b,a);b.d=Bd(new Ad(),a);return b;}
function pc(d,c,a,e){var b;b=d.cb(c,a,e);if(b!==null){kp(d.d.b,e,b.a,b.d);}}
function qc(e,d,b,a){var c;kp(e.d.b,b,e.c.a,e.c.d);c=ld(e,d,b,a);e.e=null;return c;}
function rc(c,b,a){nd(c,b,a);Fd(c.d,null);c.e=null;}
function sc(d,c,b,a){pc(d,c,b,d.f);}
function tc(b,a,d){var c;c=kf(new jf(),b,this.d.a);if(this.e===null){this.e=nf(new mf(),b,this.d.b);}else{tf(this.e,b);}pf(this.e,0,0,Ed(this.d)-ie(c),Dd(this.d)-he(c));return this.e;}
function uc(e,b,a){var c,d;c=this.g;d=nf(new mf(),b,c);return o(new n(),b,c,d.a,d.d);}
function vc(c,b,a){return qc(this,c,b,a);}
function wc(c,b,a){md(this,c,b,a);Fd(this.d,a.f);}
function xc(b,a){rc(this,b,a);}
function yc(c,b,a){sc(this,c,b,a);}
function zc(c,b,a){this.c=this.cb(c,b,b);if(this.c===null){throw be(new ae());}}
function mc(){}
_=mc.prototype=new hd();_.cb=tc;_.wb=uc;_.Fb=vc;_.ac=wc;_.cc=xc;_.jc=yc;_.kc=zc;_.tN=kL+'AbsolutePositionDropController';_.tI=14;_.c=null;_.d=null;_.e=null;function vd(){vd=iL;oc();}
function ud(c,b,a){vd();nc(c,b);c.a=a;return c;}
function wd(b,a,d){var c;if(this.a){c=kf(new jf(),b,this.d.a);if(this.b===null){this.b=nf(new mf(),b,this.d.b);}else{tf(this.b,b);}pf(this.b,0,0,Ed(this.d)-ie(c),Dd(this.d)-he(c));return this.b;}else{return null;}}
function xd(d,c,a){var b;b=qc(this,d,c,a);this.b=null;return b;}
function yd(b,a){rc(this,b,a);this.b=null;}
function td(){}
_=td.prototype=new mc();_.cb=wd;_.Fb=xd;_.cc=yd;_.tN=kL+'BoundaryDropController';_.tI=15;_.a=false;_.b=null;function Bd(b,a){b.b=a;return b;}
function Dd(a){return Ee(a.b.gb());}
function Ed(a){return Fe(a.b.gb());}
function Fd(b,a){b.a=a;}
function Ad(){}
_=Ad.prototype=new zD();_.tN=kL+'DropTargetInfo';_.tI=16;_.a=null;_.b=null;function kF(){kF=iL;mF=ih('[Ljava.lang.StackTraceElement;',[151],[34],[0],null);}
function hF(a){a.c=mF;}
function iF(a){kF();hF(a);return a;}
function jF(b,a){kF();hF(b);b.b=a;return b;}
function lF(c){var a,b;a=hg(c);b=c.b;if(b!==null){return a+': '+b;}else{return a;}}
function nF(){return lF(this);}
function gF(){}
_=gF.prototype=new zD();_.tS=nF;_.tN=uL+'Throwable';_.tI=17;_.a=null;_.b=null;var mF;function pC(){pC=iL;kF();}
function nC(a){pC();iF(a);return a;}
function oC(b,a){pC();jF(b,a);return b;}
function mC(){}
_=mC.prototype=new gF();_.tN=uL+'Exception';_.tI=18;function ce(){ce=iL;pC();}
function be(a){ce();nC(a);return a;}
function ae(){}
_=ae.prototype=new mC();_.tN=kL+'VetoDropException';_.tI=19;function fe(b,a){var c,d;c=gD(b.b-a.a,a.a-b.c);d=gD(b.d-a.b,a.b-b.a);return gD(c,d);}
function ge(a){return ue(new te(),a.b+sh(ie(a)/2),a.d+sh(he(a)/2));}
function he(a){return a.a-a.d;}
function ie(a){return a.c-a.b;}
function je(b,a){if(b.c<a.b||b.b>a.c||b.a<a.d||b.d>a.a){return false;}return true;}
function ke(b,a){b.a=a;}
function le(b,a){b.b=a;}
function me(b,a){b.c=a;}
function ne(a,b){a.d=b;}
function oe(){return '[ ('+this.b+', '+this.d+') - ('+this.c+', '+this.a+') ]';}
function de(){}
_=de.prototype=new zD();_.tS=oe;_.tN=lL+'AbstractArea';_.tI=20;_.a=0;_.b=0;_.c=0;_.d=0;function re(){return '('+this.jb()+', '+this.nb()+')';}
function pe(){}
_=pe.prototype=new zD();_.tS=re;_.tN=lL+'AbstractLocation';_.tI=21;function ue(b,a,c){b.a=a;b.b=c;return b;}
function we(){return this.a;}
function xe(){return this.b;}
function te(){}
_=te.prototype=new pe();_.jb=we;_.nb=xe;_.tN=lL+'CoordinateLocation';_.tI=22;_.a=0;_.b=0;function ze(){ze=iL;{cf=new yf();}}
function Ae(b,a){ze();return bg(cf,b,a);}
function Be(a,b,c){ze();a.style.left=b+'px';a.style.top=c+'px';}
function Ce(a){ze();return Af(cf,a);}
function De(a){ze();return Bf(cf,a);}
function Ee(a){ze();return Cf(cf,a);}
function Fe(a){ze();return Df(cf,a);}
function af(a){ze();return Ef(cf,a);}
function bf(a){ze();return cg(cf,a);}
function df(){ze();Ff(cf);}
var cf=null;function hf(a){var b;b=hg(a);return vE(b,sE(b,46)+1);}
function kf(e,g,c){var a,b,d,f;b=mz(g);f=nz(g);if(c!==null){b-=mz(c);b-=Ce(c.gb());f-=nz(c);f-=De(c.gb());}d=b+g.lb();a=f+g.kb();le(e,b);ne(e,f);me(e,d);ke(e,a);return e;}
function jf(){}
_=jf.prototype=new de();_.tN=lL+'WidgetArea';_.tI=23;function nf(b,c,a){rf(b,c);qf(b,a);sf(b);return b;}
function pf(e,c,d,a,b){e.a=gD(c,hD(e.a,a));e.d=gD(d,hD(e.d,b));}
function qf(b,a){if(a===null||a===dx()){b.b=0;b.c=0;}else{b.b=mz(a)+Ce(a.gb());b.c=nz(a)+De(a.gb());}}
function rf(a,b){if(b===null){a.e=0;a.f=0;}else{a.e=mz(b);a.f=nz(b);}}
function sf(a){a.a=a.e-a.b;a.d=a.f-a.c;}
function tf(a,b){rf(a,b);sf(a);}
function uf(){return this.a;}
function vf(){return this.d;}
function wf(){return '('+this.a+', '+this.d+')';}
function mf(){}
_=mf.prototype=new pe();_.jb=uf;_.nb=vf;_.tS=wf;_.tN=lL+'WidgetLocation';_.tI=24;_.a=0;_.b=0;_.c=0;_.d=0;_.e=0;_.f=0;function bg(c,b,a){return b.contains(a);}
function cg(a,b){return b.kb()-Cf(a,b.gb());}
function xf(){}
_=xf.prototype=new zD();_.tN=mL+'DOMUtilImpl';_.tI=25;function Af(b,a){return a.clientLeft;}
function Bf(b,a){return a.clientTop;}
function Cf(b,a){return a.clientHeight;}
function Df(b,a){return a.clientWidth;}
function Ef(a,b){return b.lb()-Df(a,b.gb());}
function Ff(a){$doc.selection.empty();}
function yf(){}
_=yf.prototype=new xf();_.tN=mL+'DOMUtilImplIE6';_.tI=26;function hg(a){return a==null?null:a.tN;}
function jg(a){ig=a;}
var ig=null;function mg(a){return a==null?0:a.$H?a.$H:(a.$H=og());}
function ng(a){return a==null?0:a.$H?a.$H:(a.$H=og());}
function og(){return ++pg;}
var pg=0;function bE(){bE=iL;pC();}
function FD(a){bE();nC(a);return a;}
function aE(b,a){bE();oC(b,a);return b;}
function ED(){}
_=ED.prototype=new mC();_.tN=uL+'RuntimeException';_.tI=27;function sg(){sg=iL;bE();}
function rg(c,b,a){sg();aE(c,'JavaScript '+b+' exception: '+a);return c;}
function qg(){}
_=qg.prototype=new ED();_.tN=nL+'JavaScriptException';_.tI=28;function vg(b,a){if(!ph(a,13)){return false;}return zg(b,oh(a,13));}
function wg(a){return mg(a);}
function xg(){return [];}
function yg(){return {};}
function Ag(a){return vg(this,a);}
function zg(a,b){return a===b;}
function Bg(){return wg(this);}
function Dg(){return Cg(this);}
function Cg(a){if(a.toString)return a.toString();return '[object]';}
function tg(){}
_=tg.prototype=new zD();_.eQ=Ag;_.hC=Bg;_.tS=Dg;_.tN=nL+'JavaScriptObject';_.tI=29;function Fg(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function bh(a,b,c){return a[b]=c;}
function dh(a,b){return ch(a,b);}
function ch(a,b){return Fg(new Eg(),b,a.tI,a.b,a.tN);}
function eh(b,a){return b[a];}
function gh(b,a){return b[a];}
function fh(a){return a.length;}
function ih(e,d,c,b,a){return hh(e,d,c,b,0,fh(b),a);}
function hh(j,i,g,c,e,a,b){var d,f,h;if((f=eh(c,e))<0){throw kD(new jD());}h=Fg(new Eg(),f,eh(i,e),eh(g,e),j);++e;if(e<a){j=vE(j,1);for(d=0;d<f;++d){bh(h,d,hh(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){bh(h,d,b);}}return h;}
function jh(f,e,c,g){var a,b,d;b=fh(g);d=Fg(new Eg(),b,e,c,f);for(a=0;a<b;++a){bh(d,a,gh(g,a));}return d;}
function kh(a,b,c){if(c!==null&&a.b!=0&& !ph(c,a.b)){throw xB(new wB());}return bh(a,b,c);}
function Eg(){}
_=Eg.prototype=new zD();_.tN=oL+'Array';_.tI=30;function nh(b,a){return !(!(b&&vh[b][a]));}
function oh(b,a){if(b!=null)nh(b.tI,a)||uh();return b;}
function ph(b,a){return b!=null&&nh(b.tI,a);}
function qh(a){return a&65535;}
function rh(a){return ~(~a);}
function sh(a){if(a>(CC(),DC))return CC(),DC;if(a<(CC(),EC))return CC(),EC;return a>=0?Math.floor(a):Math.ceil(a);}
function uh(){throw hC(new gC());}
function th(a){if(a!==null){throw hC(new gC());}return a;}
function wh(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var vh;function zh(a){if(ph(a,14)){return a;}return rg(new qg(),Bh(a),Ah(a));}
function Ah(a){return a.message;}
function Bh(a){return a.name;}
function Eh(){Eh=iL;bE();}
function Dh(b,a){Eh();FD(b);return b;}
function Ch(){}
_=Ch.prototype=new ED();_.tN=pL+'CommandCanceledException';_.tI=33;function ti(a){a.a=bi(new ai(),a);a.b=xH(new vH());a.d=fi(new ei(),a);a.f=ji(new ii(),a);}
function ui(a){ti(a);return a;}
function wi(c){var a,b,d;a=li(c.f);oi(c.f);b=null;if(ph(a,15)){b=Dh(new Ch(),oh(a,15));}else{}if(b!==null){d=ig;if(d!==null){lP(d,b);}}zi(c,false);yi(c);}
function xi(e,d){var a,b,c,f;f=false;try{zi(e,true);pi(e.f,e.b.b);Fl(e.a,10000);while(mi(e.f)){b=ni(e.f);c=true;try{if(b===null){return;}if(ph(b,15)){a=oh(b,15);a.F();}else{}}finally{f=qi(e.f);if(f){return;}if(c){oi(e.f);}}if(Ci(dF(),d)){return;}}}finally{if(!f){Bl(e.a);zi(e,false);yi(e);}}}
function yi(a){if(!FH(a.b)&& !a.e&& !a.c){Ai(a,true);Fl(a.d,1);}}
function zi(b,a){b.c=a;}
function Ai(b,a){b.e=a;}
function Bi(b,a){zH(b.b,a);yi(b);}
function Ci(a,b){return fD(a-b)>=100;}
function Fh(){}
_=Fh.prototype=new zD();_.tN=pL+'CommandExecutor';_.tI=34;_.c=false;_.e=false;function Cl(){Cl=iL;fm=xH(new vH());{em();}}
function Al(a){Cl();return a;}
function Bl(a){if(a.b){am(a.c);}else{bm(a.c);}bI(fm,a);}
function Dl(e,d){var a,c;try{El(e);}catch(a){a=zh(a);if(ph(a,14)){c=a;lP(d,c);}else throw a;}}
function El(a){if(!a.b){bI(fm,a);}a.sc();}
function Fl(b,a){if(a<=0){throw rC(new qC(),'must be positive');}Bl(b);b.b=false;b.c=cm(b,a);zH(fm,b);}
function am(a){Cl();$wnd.clearInterval(a);}
function bm(a){Cl();$wnd.clearTimeout(a);}
function cm(b,a){Cl();return $wnd.setTimeout(function(){b.ab();},a);}
function dm(){var a;a=ig;if(a!==null){Dl(this,a);}else{El(this);}}
function em(){Cl();jm(new wl());}
function vl(){}
_=vl.prototype=new zD();_.ab=dm;_.tN=pL+'Timer';_.tI=35;_.b=false;_.c=0;var fm;function ci(){ci=iL;Cl();}
function bi(b,a){ci();b.a=a;Al(b);return b;}
function di(){if(!this.a.c){return;}wi(this.a);}
function ai(){}
_=ai.prototype=new vl();_.sc=di;_.tN=pL+'CommandExecutor$1';_.tI=36;function gi(){gi=iL;Cl();}
function fi(b,a){gi();b.a=a;Al(b);return b;}
function hi(){Ai(this.a,false);xi(this.a,dF());}
function ei(){}
_=ei.prototype=new vl();_.sc=hi;_.tN=pL+'CommandExecutor$2';_.tI=37;function ji(b,a){b.d=a;return b;}
function li(a){return CH(a.d.b,a.b);}
function mi(a){return a.c<a.a;}
function ni(b){var a;b.b=b.c;a=CH(b.d.b,b.c++);if(b.c>=b.a){b.c=0;}return a;}
function oi(a){aI(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0;}}a.b=(-1);}
function pi(b,a){b.a=a;}
function qi(a){return a.b==(-1);}
function ri(){return mi(this);}
function si(){return ni(this);}
function ii(){}
_=ii.prototype=new zD();_.sb=ri;_.yb=si;_.tN=pL+'CommandExecutor$CircularIterator';_.tI=38;_.a=0;_.b=(-1);_.c=0;function Fi(){Fi=iL;qk=xH(new vH());{ik=new Cm();mn(ik);}}
function aj(a){Fi();zH(qk,a);}
function bj(b,a){Fi();wn(ik,b,a);}
function cj(a,b){Fi();return Em(ik,a,b);}
function dj(){Fi();return yn(ik,'A');}
function ej(){Fi();return yn(ik,'div');}
function fj(a){Fi();return yn(ik,a);}
function gj(){Fi();return yn(ik,'tbody');}
function hj(){Fi();return yn(ik,'td');}
function ij(){Fi();return yn(ik,'tr');}
function jj(){Fi();return yn(ik,'table');}
function nj(b,a,d){Fi();var c;c=ig;if(c!==null){lj(b,a,d,c);}else{mj(b,a,d);}}
function lj(e,d,g,f){Fi();var a,c;try{mj(e,d,g);}catch(a){a=zh(a);if(ph(a,14)){c=a;lP(f,c);}else throw a;}}
function mj(b,a,c){Fi();var d;if(a===pk){if(Aj(b)==8192){pk=null;}}d=kj;kj=b;try{c.Cb(b);}finally{kj=d;}}
function oj(b,a){Fi();zn(ik,b,a);}
function pj(a){Fi();return An(ik,a);}
function qj(a){Fi();return Bn(ik,a);}
function rj(a){Fi();return Fm(ik,a);}
function sj(a){Fi();return an(ik,a);}
function tj(a){Fi();return Cn(ik,a);}
function uj(a){Fi();return bn(ik,a);}
function vj(a){Fi();return Dn(ik,a);}
function wj(a){Fi();return En(ik,a);}
function xj(a){Fi();return Fn(ik,a);}
function yj(a){Fi();return cn(ik,a);}
function zj(a){Fi();return dn(ik,a);}
function Aj(a){Fi();return ao(ik,a);}
function Bj(a){Fi();en(ik,a);}
function Cj(a){Fi();return fn(ik,a);}
function Dj(a){Fi();return gn(ik,a);}
function Ej(a){Fi();return hn(ik,a);}
function Fj(a){Fi();return bo(ik,a);}
function bk(a,b){Fi();return eo(ik,a,b);}
function ak(a,b){Fi();return co(ik,a,b);}
function ck(a){Fi();return fo(ik,a);}
function dk(a){Fi();return jn(ik,a);}
function ek(a){Fi();return go(ik,a);}
function fk(a){Fi();return kn(ik,a);}
function gk(a){Fi();return ln(ik,a);}
function hk(b,a){Fi();return ho(ik,b,a);}
function jk(c,a,b){Fi();nn(ik,c,a,b);}
function kk(b,a){Fi();return on(ik,b,a);}
function lk(a){Fi();var b,c;c=true;if(qk.b>0){b=oh(CH(qk,qk.b-1),16);if(!(c=b.bc(a))){oj(a,true);Bj(a);}}return c;}
function mk(a){Fi();if(pk!==null&&cj(a,pk)){pk=null;}pn(ik,a);}
function nk(b,a){Fi();io(ik,b,a);}
function ok(a){Fi();bI(qk,a);}
function rk(a){Fi();pk=a;qn(ik,a);}
function sk(b,a,c){Fi();jo(ik,b,a,c);}
function uk(a,b,c){Fi();lo(ik,a,b,c);}
function tk(a,b,c){Fi();ko(ik,a,b,c);}
function vk(a,b){Fi();mo(ik,a,b);}
function wk(a,b){Fi();no(ik,a,b);}
function xk(a,b){Fi();rn(ik,a,b);}
function yk(b,a,c){Fi();oo(ik,b,a,c);}
function zk(a,b){Fi();sn(ik,a,b);}
function Ak(a){Fi();return po(ik,a);}
function Bk(){Fi();return qo(ik);}
function Ck(){Fi();return ro(ik);}
var kj=null,ik=null,pk=null,qk;function Ek(){Ek=iL;al=ui(new Fh());}
function Fk(a){Ek();if(a===null){throw nD(new mD(),'cmd can not be null');}Bi(al,a);}
var al;function dl(a){if(ph(a,17)){return cj(this,oh(a,17));}return vg(wh(this,bl),a);}
function el(){return wg(wh(this,bl));}
function fl(){return Ak(this);}
function bl(){}
_=bl.prototype=new tg();_.eQ=dl;_.hC=el;_.tS=fl;_.tN=pL+'Element';_.tI=39;function kl(a){return vg(wh(this,gl),a);}
function ll(){return wg(wh(this,gl));}
function ml(){return Cj(this);}
function gl(){}
_=gl.prototype=new tg();_.eQ=kl;_.hC=ll;_.tS=ml;_.tN=pL+'Event';_.tI=40;function ol(){ol=iL;rl=xH(new vH());{sl=new zo();if(!Do(sl)){sl=null;}}}
function pl(e,d){ol();var a,c;try{ql(e);}catch(a){a=zh(a);if(ph(a,14)){c=a;lP(d,c);}else throw a;}}
function ql(a){ol();var b,c;for(b=cG(rl);BF(b);){c=th(CF(b));null.Cc();}}
function tl(a){ol();if(sl!==null){wo(sl,a);}}
function ul(b){ol();var a;a=ig;if(a!==null){pl(b,a);}else{ql(b);}}
var rl,sl=null;function yl(){while((Cl(),fm).b>0){Bl(oh(CH((Cl(),fm),0),18));}}
function zl(){return null;}
function wl(){}
_=wl.prototype=new zD();_.nc=yl;_.oc=zl;_.tN=pL+'Timer$1';_.tI=41;function im(){im=iL;km=xH(new vH());Am=xH(new vH());{vm();}}
function jm(a){im();zH(km,a);}
function lm(d){im();var a,c;try{mm();}catch(a){a=zh(a);if(ph(a,14)){c=a;lP(d,c);}else throw a;}}
function mm(){im();var a,b;for(a=cG(km);BF(a);){b=oh(CF(a),19);b.nc();}}
function nm(d){im();var a,c;try{return om();}catch(a){a=zh(a);if(ph(a,14)){c=a;lP(d,c);return null;}else throw a;}}
function om(){im();var a,b,c,d;d=null;for(a=cG(km);BF(a);){b=oh(CF(a),19);c=b.oc();{d=c;}}return d;}
function pm(d){im();var a,c;try{qm();}catch(a){a=zh(a);if(ph(a,14)){c=a;lP(d,c);}else throw a;}}
function qm(){im();var a,b;for(a=cG(Am);BF(a);){b=th(CF(a));null.Cc();}}
function rm(){im();return Bk();}
function sm(){im();return Ck();}
function tm(){im();return $doc.documentElement.scrollLeft||$doc.body.scrollLeft;}
function um(){im();return $doc.documentElement.scrollTop||$doc.body.scrollTop;}
function vm(){im();__gwt_initHandlers(function(){ym();},function(){return xm();},function(){wm();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function wm(){im();var a;a=ig;if(a!==null){lm(a);}else{mm();}}
function xm(){im();var a;a=ig;if(a!==null){return nm(a);}else{return om();}}
function ym(){im();var a;a=ig;if(a!==null){pm(a);}else{qm();}}
function zm(c,b,a){im();$wnd.open(c,b,a);}
var km,Am;function wn(c,b,a){b.appendChild(a);}
function yn(b,a){return $doc.createElement(a);}
function zn(c,b,a){b.cancelBubble=a;}
function An(b,a){return !(!a.altKey);}
function Bn(b,a){return a.button|| -1;}
function Cn(b,a){return !(!a.ctrlKey);}
function Dn(b,a){return a.which||(a.keyCode|| -1);}
function En(b,a){return !(!a.metaKey);}
function Fn(b,a){return !(!a.shiftKey);}
function ao(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function bo(c,b){var a=$doc.getElementById(b);return a||null;}
function eo(d,a,b){var c=a[b];return c==null?null:String(c);}
function co(d,a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function fo(b,a){return a.__eventBits||0;}
function go(c,a){var b=a.innerHTML;return b==null?null:b;}
function ho(d,b,a){var c=b.style[a];return c==null?null:c;}
function io(c,b,a){b.removeChild(a);}
function jo(c,b,a,d){b.setAttribute(a,d);}
function lo(c,a,b,d){a[b]=d;}
function ko(c,a,b,d){a[b]=d;}
function mo(c,a,b){a.__listener=b;}
function no(c,a,b){if(!b){b='';}a.innerHTML=b;}
function oo(c,b,a,d){b.style[a]=d;}
function po(b,a){return a.outerHTML;}
function qo(a){return $doc.body.clientHeight;}
function ro(a){return $doc.body.clientWidth;}
function Bm(){}
_=Bm.prototype=new zD();_.tN=qL+'DOMImpl';_.tI=42;function Em(c,a,b){if(!a&& !b)return true;else if(!a|| !b)return false;return a.uniqueID==b.uniqueID;}
function Fm(b,a){return a.clientX-un();}
function an(b,a){return a.clientY-vn();}
function bn(b,a){return a.fromElement?a.fromElement:null;}
function cn(b,a){return a.srcElement||null;}
function dn(b,a){return a.toElement||null;}
function en(b,a){a.returnValue=false;}
function fn(b,a){if(a.toString)return a.toString();return '[object Event]';}
function gn(c,a){var b=$doc.documentElement.scrollLeft||$doc.body.scrollLeft;return a.getBoundingClientRect().left+b-un();}
function hn(c,a){var b=$doc.documentElement.scrollTop||$doc.body.scrollTop;return a.getBoundingClientRect().top+b-vn();}
function jn(c,b){var a=b.firstChild;return a||null;}
function kn(c,a){var b=a.innerText;return b==null?null:b;}
function ln(c,a){var b=a.parentElement;return b||null;}
function mn(d){try{$doc.execCommand('BackgroundImageCache',false,true);}catch(a){}$wnd.__dispatchEvent=function(){var c=tn;tn=this;if($wnd.event.returnValue==null){$wnd.event.returnValue=true;if(!lk($wnd.event)){tn=c;return;}}var b,a=this;while(a&& !(b=a.__listener))a=a.parentElement;if(b)nj($wnd.event,a,b);tn=c;};$wnd.__dispatchDblClickEvent=function(){var a=$doc.createEventObject();this.fireEvent('onclick',a);if(this.__eventBits&2)$wnd.__dispatchEvent.call(this);};$doc.body.onclick=$doc.body.onmousedown=$doc.body.onmouseup=$doc.body.onmousemove=$doc.body.onmousewheel=$doc.body.onkeydown=$doc.body.onkeypress=$doc.body.onkeyup=$doc.body.onfocus=$doc.body.onblur=$doc.body.ondblclick=$wnd.__dispatchEvent;}
function nn(d,c,a,b){if(b>=c.children.length)c.appendChild(a);else c.insertBefore(a,c.children[b]);}
function on(c,b,a){while(a){if(b.uniqueID==a.uniqueID)return true;a=a.parentElement;}return false;}
function pn(b,a){a.releaseCapture();}
function qn(b,a){a.setCapture();}
function rn(c,a,b){if(!b)b='';a.innerText=b;}
function sn(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&(1|2)?$wnd.__dispatchDblClickEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function un(){return $doc.documentElement.clientLeft||$doc.body.clientLeft;}
function vn(){return $doc.documentElement.clientTop||$doc.body.clientTop;}
function Cm(){}
_=Cm.prototype=new Bm();_.tN=qL+'DOMImplIE6';_.tI=43;var tn=null;function ep(a){return $wnd.__gwt_historyToken;}
function fp(a,b){$wnd.__gwt_historyToken=b;}
function gp(a){ul(a);}
function so(){}
_=so.prototype=new zD();_.tN=qL+'HistoryImpl';_.tI=44;function vo(a){var b;a.a=xo();if(a.a===null){return false;}Co(a);b=yo(a.a);if(b!==null){fp(a,Bo(a,b));}else{Fo(a,a.a,ep(a),true);}Eo(a);return true;}
function wo(b,a){b.xb(b.a,a,false);}
function xo(){var a=$doc.getElementById('__gwt_historyFrame');return a||null;}
function yo(b){var c=null;if(b.contentWindow){var a=b.contentWindow.document;c=a.getElementById('__gwt_historyToken')||null;}return c;}
function to(){}
_=to.prototype=new so();_.tN=qL+'HistoryImplFrame';_.tI=45;_.a=null;function Bo(a,b){return b.innerText;}
function Do(a){if(!vo(a)){return false;}bp();return true;}
function Co(c){var b=$wnd.location.hash;if(b.length>0){try{$wnd.__gwt_historyToken=decodeURIComponent(b.substring(1));}catch(a){$wnd.location.hash='';$wnd.__gwt_historyToken='';}return;}$wnd.__gwt_historyToken='';}
function Eo(b){$wnd.__gwt_onHistoryLoad=function(a){if(a!=$wnd.__gwt_historyToken){$wnd.__gwt_historyToken=a;$wnd.location.hash=encodeURIComponent(a);gp(a);}};}
function Fo(e,c,d,b){d=ap(d||'');if(b||$wnd.__gwt_historyToken!=d){var a=c.contentWindow.document;a.open();a.write('<html><body onload="if(parent.__gwt_onHistoryLoad)parent.__gwt_onHistoryLoad(__gwt_historyToken.innerText)"><div id="__gwt_historyToken">'+d+'<\/div><\/body><\/html>');a.close();}}
function ap(b){var a;a=ej();xk(a,b);return ek(a);}
function bp(){var d=function(){var b=$wnd.location.hash;if(b.length>0){var c='';try{c=decodeURIComponent(b.substring(1));}catch(a){$wnd.location.reload();}if($wnd.__gwt_historyToken&&c!=$wnd.__gwt_historyToken){$wnd.location.reload();}}$wnd.setTimeout(d,250);};d();}
function cp(b,c,a){Fo(this,b,c,a);}
function zo(){}
_=zo.prototype=new to();_.xb=cp;_.tN=qL+'HistoryImplIE6';_.tI=46;function kz(b,a){Dz(b.mb(),a,true);}
function mz(a){return Dj(a.gb());}
function nz(a){return Ej(a.gb());}
function oz(a){return ak(a.q,'offsetHeight');}
function pz(a){return ak(a.q,'offsetWidth');}
function qz(b,a){Dz(b.mb(),a,false);}
function rz(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function sz(b,a){if(b.q!==null){rz(b,b.q,a);}b.q=a;}
function tz(b,c,a){if(c>=0){b.xc(c+'px');}if(a>=0){b.tc(a+'px');}}
function uz(b,a){Cz(b.mb(),a);}
function vz(b,a){zk(b.gb(),a|ck(b.gb()));}
function wz(){return this.q;}
function xz(){return oz(this);}
function yz(){return pz(this);}
function zz(){return this.q;}
function Az(a){return bk(a,'className');}
function Bz(a){yk(this.q,'height',a);}
function Cz(a,b){uk(a,'className',b);}
function Dz(c,j,a){var b,d,e,f,g,h,i;if(c===null){throw aE(new ED(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}j=xE(j);if(tE(j)==0){throw rC(new qC(),'Style names cannot be empty');}i=Az(c);e=qE(i,j);while(e!=(-1)){if(e==0||mE(i,e-1)==32){f=e+tE(j);g=tE(i);if(f==g||f<g&&mE(i,f)==32){break;}}e=rE(i,j,e+1);}if(a){if(e==(-1)){if(tE(i)>0){i+=' ';}uk(c,'className',i+j);}}else{if(e!=(-1)){b=xE(wE(i,0,e));d=xE(vE(i,e+tE(j)));if(tE(b)==0){h=d;}else if(tE(d)==0){h=b;}else{h=b+' '+d;}uk(c,'className',h);}}}
function Ez(a,b){a.style.display=b?'':'none';}
function Fz(a){Ez(this.q,a);}
function aA(a){yk(this.q,'width',a);}
function bA(){if(this.q===null){return '(null handle)';}return Ak(this.q);}
function jz(){}
_=jz.prototype=new zD();_.gb=wz;_.kb=xz;_.lb=yz;_.mb=zz;_.tc=Bz;_.vc=Fz;_.xc=aA;_.tS=bA;_.tN=rL+'UIObject';_.tI=47;_.q=null;function BA(a){if(!a.tb()){throw vC(new tC(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.mc();}finally{a.D();vk(a.gb(),null);a.o=false;}}
function CA(a){if(ph(a.p,24)){oh(a.p,24).rc(a);}else if(a.p!==null){throw vC(new tC(),"This widget's parent does not implement HasWidgets");}}
function DA(b,a){if(b.tb()){vk(b.gb(),null);}sz(b,a);if(b.tb()){vk(a,b);}}
function EA(c,b){var a;a=c.p;if(b===null){if(a!==null&&a.tb()){c.Eb();}c.p=null;}else{if(a!==null){throw vC(new tC(),'Cannot set a new parent without first clearing the old parent');}c.p=b;if(b.tb()){c.Ab();}}}
function FA(){}
function aB(){}
function bB(){return this.o;}
function cB(){if(this.tb()){throw vC(new tC(),"Should only call onAttach when the widget is detached from the browser's document");}this.o=true;vk(this.gb(),this);this.C();this.dc();}
function dB(a){}
function eB(){BA(this);}
function fB(){}
function gB(){}
function kA(){}
_=kA.prototype=new jz();_.C=FA;_.D=aB;_.tb=bB;_.Ab=cB;_.Cb=dB;_.Eb=eB;_.dc=fB;_.mc=gB;_.tN=rL+'Widget';_.tI=48;_.o=false;_.p=null;function yv(b,a){EA(a,b);}
function Av(b,a){EA(a,null);}
function Bv(){var a,b;for(b=this.ub();b.sb();){a=oh(b.yb(),12);a.Ab();}}
function Cv(){var a,b;for(b=this.ub();b.sb();){a=oh(b.yb(),12);a.Eb();}}
function Dv(){}
function Ev(){}
function xv(){}
_=xv.prototype=new kA();_.C=Bv;_.D=Cv;_.dc=Dv;_.mc=Ev;_.tN=rL+'Panel';_.tI=49;function Dp(a){a.f=rA(new lA(),a);}
function Ep(a){Dp(a);return a;}
function Fp(c,a,b){CA(a);sA(c.f,a);bj(b,a.gb());yv(c,a);}
function aq(d,b,a){var c;cq(d,a);if(b.p===d){c=eq(d,b);if(c<a){a--;}}return a;}
function bq(b,a){if(a<0||a>=b.f.b){throw yC(new xC());}}
function cq(b,a){if(a<0||a>b.f.b){throw yC(new xC());}}
function fq(b,a){return uA(b.f,a);}
function eq(b,a){return vA(b.f,a);}
function gq(e,b,c,a,d){a=aq(e,b,a);CA(b);wA(e.f,b,a);if(d){jk(c,b.gb(),a);}else{bj(c,b.gb());}yv(e,b);}
function hq(a){return xA(a.f);}
function iq(b,c){var a;if(c.p!==b){return false;}Av(b,c);a=c.gb();nk(gk(a),a);zA(b.f,c);return true;}
function jq(){return hq(this);}
function kq(a){return iq(this,a);}
function Cp(){}
_=Cp.prototype=new xv();_.ub=jq;_.rc=kq;_.tN=rL+'ComplexPanel';_.tI=50;function ip(a){Ep(a);DA(a,ej());yk(a.gb(),'position','relative');yk(a.gb(),'overflow','hidden');return a;}
function jp(a,b){Fp(a,b,a.gb());}
function kp(b,d,a,c){CA(d);np(b,d,a,c);jp(b,d);}
function mp(b,c){var a;a=iq(b,c);if(a){op(c.gb());}return a;}
function np(c,e,b,d){var a;a=e.gb();if(b==(-1)&&d==(-1)){op(a);}else{yk(a,'position','absolute');yk(a,'left',b+'px');yk(a,'top',d+'px');}}
function op(a){yk(a,'left','');yk(a,'top','');yk(a,'position','');}
function pp(a){return mp(this,a);}
function hp(){}
_=hp.prototype=new Cp();_.rc=pp;_.tN=rL+'AbsolutePanel';_.tI=51;function rp(a){Ep(a);a.e=jj();a.d=gj();bj(a.e,a.d);DA(a,a.e);return a;}
function tp(c,d,a){var b;b=gk(d.gb());uk(b,'height',a);}
function up(c,b,a){uk(b,'align',a.a);}
function vp(c,b,a){yk(b,'verticalAlign',a.a);}
function wp(b,c,d){var a;a=gk(c.gb());uk(a,'width',d);}
function qp(){}
_=qp.prototype=new Cp();_.tN=rL+'CellPanel';_.tI=52;_.d=null;_.e=null;function sF(d,a,b){var c;while(a.sb()){c=a.yb();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function uF(a){throw pF(new oF(),'add');}
function vF(b){var a;a=sF(this,this.ub(),b);return a!==null;}
function wF(){var a,b,c;c=eE(new dE());a=null;fE(c,'[');b=this.ub();while(b.sb()){if(a!==null){fE(c,a);}else{a=', ';}fE(c,aF(b.yb()));}fE(c,']');return jE(c);}
function rF(){}
_=rF.prototype=new zD();_.s=uF;_.z=vF;_.tS=wF;_.tN=vL+'AbstractCollection';_.tI=53;function bG(b,a){throw zC(new xC(),'Index: '+a+', Size: '+b.b);}
function cG(a){return zF(new yF(),a);}
function dG(b,a){throw pF(new oF(),'add');}
function eG(a){this.r(this.yc(),a);return true;}
function fG(e){var a,b,c,d,f;if(e===this){return true;}if(!ph(e,29)){return false;}f=oh(e,29);if(this.yc()!=f.yc()){return false;}c=cG(this);d=f.ub();while(BF(c)){a=CF(c);b=CF(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function gG(){var a,b,c,d;c=1;a=31;b=cG(this);while(BF(b)){d=CF(b);c=31*c+(d===null?0:d.hC());}return c;}
function hG(){return cG(this);}
function iG(a){throw pF(new oF(),'remove');}
function xF(){}
_=xF.prototype=new rF();_.r=dG;_.s=eG;_.eQ=fG;_.hC=gG;_.ub=hG;_.qc=iG;_.tN=vL+'AbstractList';_.tI=54;function wH(a){{AH(a);}}
function xH(a){wH(a);return a;}
function zH(b,a){nI(b.a,b.b++,a);return true;}
function yH(d,a){var b,c;c=cG(a);b=c.sb();while(c.sb()){nI(d.a,d.b++,c.yb());}return b;}
function AH(a){a.a=xg();a.b=0;}
function CH(b,a){if(a<0||a>=b.b){bG(b,a);}return jI(b.a,a);}
function DH(b,a){return EH(b,a,0);}
function EH(c,b,a){if(a<0){bG(c,a);}for(;a<c.b;++a){if(iI(b,jI(c.a,a))){return a;}}return (-1);}
function FH(a){return a.b==0;}
function aI(c,a){var b;b=CH(c,a);lI(c.a,a,1);--c.b;return b;}
function bI(c,b){var a;a=DH(c,b);if(a==(-1)){return false;}aI(c,a);return true;}
function cI(d,a,b){var c;c=CH(d,a);nI(d.a,a,b);return c;}
function dI(c,a){var b;if(a.a<c.b){a=dh(a,c.b);}for(b=0;b<c.b;++b){kh(a,b,jI(c.a,b));}if(a.a>c.b){kh(a,c.b,null);}return a;}
function fI(a,b){if(a<0||a>this.b){bG(this,a);}eI(this.a,a,b);++this.b;}
function gI(a){return zH(this,a);}
function eI(a,b,c){a.splice(b,0,c);}
function hI(a){return DH(this,a)!=(-1);}
function iI(a,b){return a===b||a!==null&&a.eQ(b);}
function kI(a){return CH(this,a);}
function jI(a,b){return a[b];}
function mI(a){return aI(this,a);}
function lI(a,c,b){a.splice(c,b);}
function nI(a,b,c){a[b]=c;}
function oI(){return this.b;}
function vH(){}
_=vH.prototype=new xF();_.r=fI;_.s=gI;_.z=hI;_.qb=kI;_.qc=mI;_.yc=oI;_.tN=vL+'ArrayList';_.tI=55;_.a=null;_.b=0;function yp(a){xH(a);return a;}
function Ap(d,c){var a,b;for(a=cG(d);BF(a);){b=oh(CF(a),20);b.Db(c);}}
function xp(){}
_=xp.prototype=new vH();_.tN=rL+'ClickListenerCollection';_.tI=56;function nq(a,b){if(a.d!==null){throw vC(new tC(),'Composite.initWidget() may only be called once.');}CA(b);DA(a,b.gb());a.d=b;EA(b,a);}
function oq(){if(this.d===null){throw vC(new tC(),'initWidget() was never called in '+hg(this));}return this.q;}
function pq(){if(this.d!==null){return this.d.tb();}return false;}
function qq(){this.d.Ab();this.dc();}
function rq(){try{this.mc();}finally{this.d.Eb();}}
function lq(){}
_=lq.prototype=new kA();_.gb=oq;_.tb=pq;_.Ab=qq;_.Eb=rq;_.tN=rL+'Composite';_.tI=57;_.d=null;function tq(a){Ep(a);DA(a,ej());return a;}
function vq(b,c){var a;a=c.gb();yk(a,'width','100%');yk(a,'height','100%');c.vc(false);}
function wq(b,c,a){gq(b,c,b.gb(),a,true);vq(b,c);}
function xq(b,c){var a;a=iq(b,c);if(a){yq(b,c);if(b.b===c){b.b=null;}}return a;}
function yq(a,b){yk(b.gb(),'width','');yk(b.gb(),'height','');b.vc(true);}
function zq(b,a){bq(b,a);if(b.b!==null){b.b.vc(false);}b.b=fq(b,a);b.b.vc(true);}
function Aq(a){return xq(this,a);}
function sq(){}
_=sq.prototype=new Cp();_.rc=Aq;_.tN=rL+'DeckPanel';_.tI=58;_.b=null;function ox(a){px(a,ej());return a;}
function px(b,a){DA(b,a);return b;}
function qx(a,b){if(a.n!==null){throw vC(new tC(),'SimplePanel can only contain one child widget');}a.wc(b);}
function sx(a,b){if(b===a.n){return;}if(b!==null){CA(b);}if(a.n!==null){a.rc(a.n);}a.n=b;if(b!==null){bj(a.db(),a.n.gb());yv(a,b);}}
function tx(){return this.gb();}
function ux(){return kx(new ix(),this);}
function vx(a){if(this.n!==a){return false;}Av(this,a);nk(this.db(),a.gb());this.n=null;return true;}
function wx(a){sx(this,a);}
function hx(){}
_=hx.prototype=new xv();_.db=tx;_.ub=ux;_.rc=vx;_.wc=wx;_.tN=rL+'SimplePanel';_.tI=59;_.n=null;function fw(){fw=iL;uw=new iB();}
function aw(a){fw();px(a,oB(uw));lw(a,0,0);return a;}
function bw(b,a){fw();aw(b);b.g=a;return b;}
function cw(c,a,b){fw();bw(c,a);c.k=b;return c;}
function dw(b,a){if(a.blur){a.blur();}}
function ew(c){var a,b,d;a=c.l;if(!a){mw(c,false);pw(c);}b=sh((sm()-hw(c))/2);d=sh((rm()-gw(c))/2);lw(c,tm()+b,um()+d);if(!a){mw(c,true);}}
function gw(a){return oz(a);}
function hw(a){return pz(a);}
function iw(b,a){if(!b.l){return;}b.l=false;mp(dx(),b);kB(uw,b.gb());}
function jw(a){var b;b=a.n;if(b!==null){if(a.h!==null){b.tc(a.h);}if(a.i!==null){b.xc(a.i);}}}
function kw(e,b){var a,c,d,f;d=yj(b);c=kk(e.gb(),d);f=Aj(b);switch(f){case 128:{a=(qh(vj(b)),dv(b),true);return a&&(c|| !e.k);}case 512:{a=(qh(vj(b)),dv(b),true);return a&&(c|| !e.k);}case 256:{a=(qh(vj(b)),dv(b),true);return a&&(c|| !e.k);}case 4:case 8:case 64:case 1:case 2:{if((Fi(),pk)!==null){return true;}if(!c&&e.g&&f==4){iw(e,true);return true;}break;}case 2048:{if(e.k&& !c&&d!==null){dw(e,d);return false;}}}return !e.k||c;}
function lw(c,b,d){var a;if(b<0){b=0;}if(d<0){d=0;}c.j=b;c.m=d;a=c.gb();yk(a,'left',b+'px');yk(a,'top',d+'px');}
function mw(a,b){yk(a.gb(),'visibility',b?'visible':'hidden');mB(uw,a.gb(),b);}
function nw(a,b){sx(a,b);jw(a);}
function ow(a,b){a.i=b;jw(a);if(tE(b)==0){a.i=null;}}
function pw(a){if(a.l){return;}a.l=true;aj(a);yk(a.gb(),'position','absolute');if(a.m!=(-1)){lw(a,a.j,a.m);}jp(dx(),a);lB(uw,a.gb());}
function qw(){return this.gb();}
function rw(){return gw(this);}
function sw(){return hw(this);}
function tw(){return this.gb();}
function vw(){ok(this);BA(this);}
function ww(a){return kw(this,a);}
function xw(a){this.h=a;jw(this);if(tE(a)==0){this.h=null;}}
function yw(a){mw(this,a);}
function zw(a){nw(this,a);}
function Aw(a){ow(this,a);}
function Fv(){}
_=Fv.prototype=new hx();_.db=qw;_.kb=rw;_.lb=sw;_.mb=tw;_.Eb=vw;_.bc=ww;_.tc=xw;_.vc=yw;_.wc=zw;_.xc=Aw;_.tN=rL+'PopupPanel';_.tI=60;_.g=false;_.h=null;_.i=null;_.j=(-1);_.k=false;_.l=false;_.m=(-1);var uw;function Fq(){Fq=iL;fw();}
function Cq(a){a.a=wt(new Br());a.f=or(new kr());}
function Dq(b,a){Fq();Eq(b,a,true);return b;}
function Eq(c,a,b){Fq();cw(c,a,b);Cq(c);st(c.f,0,0,c.a);c.f.tc('100%');nt(c.f,0);pt(c.f,0);qt(c.f,0);ls(c.f.b,1,0,'100%');os(c.f.b,1,0,'100%');ks(c.f.b,1,0,(au(),bu),(hu(),ju));nw(c,c.f);uz(c,'gwt-DialogBox');uz(c.a,'Caption');iv(c.a,c);return c;}
function ar(b,a){At(b.a,a);}
function br(a){if(Aj(a)==4){if(kk(this.a.gb(),yj(a))){Bj(a);}}return kw(this,a);}
function cr(a,b,c){this.e=true;rk(this.a.gb());this.c=b;this.d=c;}
function dr(a){}
function er(a){}
function fr(c,d,e){var a,b;if(this.e){a=d+mz(this);b=e+nz(this);lw(this,a-this.c,b-this.d);}}
function gr(a,b,c){this.e=false;mk(this.a.gb());}
function hr(a){if(this.b!==a){return false;}mt(this.f,a);return true;}
function ir(a){if(this.b!==null){mt(this.f,this.b);}if(a!==null){st(this.f,1,0,a);}this.b=a;}
function jr(a){ow(this,a);this.f.xc('100%');}
function Bq(){}
_=Bq.prototype=new Fv();_.bc=br;_.ec=cr;_.fc=dr;_.gc=er;_.hc=fr;_.ic=gr;_.rc=hr;_.wc=ir;_.xc=jr;_.tN=rL+'DialogBox';_.tI=61;_.b=null;_.c=0;_.d=0;_.e=false;function ct(a){a.e=ys(new ts());}
function dt(a){ct(a);a.d=jj();a.a=gj();bj(a.d,a.a);DA(a,a.d);vz(a,1);return a;}
function et(c,a){var b;b=rr(c);if(a>=b||a<0){throw zC(new xC(),'Row index: '+a+', Row size: '+b);}}
function ft(e,c,b,a){var d;d=js(e.b,c,b);lt(e,d,a);return d;}
function ht(c,b,a){return b.rows[a].cells.length;}
function it(a){return jt(a,a.a);}
function jt(b,a){return a.rows.length;}
function kt(b,a){var c;if(a!=rr(b)){et(b,a);}c=ij();jk(b.a,c,a);return a;}
function lt(d,c,a){var b,e;b=dk(c);e=null;if(b!==null){e=As(d.e,b);}if(e!==null){mt(d,e);return true;}else{if(a){wk(c,'');}return false;}}
function mt(b,c){var a;if(c.p!==b){return false;}Av(b,c);a=c.gb();nk(gk(a),a);Ds(b.e,a);return true;}
function nt(a,b){uk(a.d,'border',''+b);}
function ot(b,a){b.b=a;}
function pt(b,a){tk(b.d,'cellPadding',a);}
function qt(b,a){tk(b.d,'cellSpacing',a);}
function rt(b,a){b.c=a;ss(b.c);}
function st(d,b,a,e){var c;tr(d,b,a);if(e!==null){CA(e);c=ft(d,b,a,true);Bs(d.e,e);bj(c,e.gb());yv(d,e);}}
function tt(){return Es(this.e);}
function ut(a){switch(Aj(a)){case 1:{break;}default:}}
function vt(a){return mt(this,a);}
function Cr(){}
_=Cr.prototype=new xv();_.ub=tt;_.Cb=ut;_.rc=vt;_.tN=rL+'HTMLTable';_.tI=62;_.a=null;_.b=null;_.c=null;_.d=null;function or(a){dt(a);ot(a,mr(new lr(),a));rt(a,qs(new ps(),a));return a;}
function qr(b,a){et(b,a);return ht(b,b.a,a);}
function rr(a){return it(a);}
function sr(b,a){return kt(b,a);}
function tr(e,d,b){var a,c;ur(e,d);if(b<0){throw zC(new xC(),'Cannot create a column with a negative index: '+b);}a=qr(e,d);c=b+1-a;if(c>0){vr(e.a,d,c);}}
function ur(d,b){var a,c;if(b<0){throw zC(new xC(),'Cannot create a row with a negative index: '+b);}c=rr(d);for(a=c;a<=b;a++){sr(d,a);}}
function vr(f,d,c){var e=f.rows[d];for(var b=0;b<c;b++){var a=$doc.createElement('td');e.appendChild(a);}}
function kr(){}
_=kr.prototype=new Cr();_.tN=rL+'FlexTable';_.tI=63;function gs(b,a){b.a=a;return b;}
function is(e,d,c,a){var b=d.rows[c].cells[a];return b==null?null:b;}
function js(c,b,a){return is(c,c.a.a,b,a);}
function ks(d,c,a,b,e){ms(d,c,a,b);ns(d,c,a,e);}
function ls(e,d,a,c){var b;tr(e.a,d,a);b=is(e,e.a.a,d,a);uk(b,'height',c);}
function ms(e,d,b,a){var c;tr(e.a,d,b);c=is(e,e.a.a,d,b);uk(c,'align',a.a);}
function ns(d,c,b,a){tr(d.a,c,b);yk(is(d,d.a.a,c,b),'verticalAlign',a.a);}
function os(c,b,a,d){tr(c.a,b,a);uk(is(c,c.a.a,b,a),'width',d);}
function fs(){}
_=fs.prototype=new zD();_.tN=rL+'HTMLTable$CellFormatter';_.tI=64;function mr(b,a){gs(b,a);return b;}
function lr(){}
_=lr.prototype=new fs();_.tN=rL+'FlexTable$FlexCellFormatter';_.tI=65;function xr(a){Ep(a);DA(a,ej());return a;}
function yr(a,b){Fp(a,b,a.gb());}
function Ar(b,c,a){gq(b,c,b.gb(),a,true);}
function wr(){}
_=wr.prototype=new Cp();_.tN=rL+'FlowPanel';_.tI=66;function fv(a){DA(a,ej());vz(a,131197);uz(a,'gwt-Label');return a;}
function gv(b,a){fv(b);kv(b,a);return b;}
function hv(b,a){if(b.a===null){b.a=yp(new xp());}zH(b.a,a);}
function iv(b,a){if(b.b===null){b.b=ov(new nv());}zH(b.b,a);}
function kv(b,a){xk(b.gb(),a);}
function lv(a,b){yk(a.gb(),'whiteSpace',b?'normal':'nowrap');}
function mv(a){switch(Aj(a)){case 1:if(this.a!==null){Ap(this.a,this);}break;case 4:case 8:case 64:case 16:case 32:if(this.b!==null){sv(this.b,this,a);}break;case 131072:break;}}
function ev(){}
_=ev.prototype=new kA();_.Cb=mv;_.tN=rL+'Label';_.tI=67;_.a=null;_.b=null;function wt(a){fv(a);DA(a,ej());vz(a,125);uz(a,'gwt-HTML');return a;}
function xt(b,a){wt(b);At(b,a);return b;}
function yt(b,a,c){xt(b,a);lv(b,c);return b;}
function At(b,a){wk(b.gb(),a);}
function Br(){}
_=Br.prototype=new ev();_.tN=rL+'HTML';_.tI=68;function Er(a){{bs(a);}}
function Fr(b,a){b.b=a;Er(b);return b;}
function bs(a){while(++a.a<a.b.b.b){if(CH(a.b.b,a.a)!==null){return;}}}
function cs(a){return a.a<a.b.b.b;}
function ds(){return cs(this);}
function es(){var a;if(!cs(this)){throw eL(new dL());}a=CH(this.b.b,this.a);bs(this);return a;}
function Dr(){}
_=Dr.prototype=new zD();_.sb=ds;_.yb=es;_.tN=rL+'HTMLTable$1';_.tI=69;_.a=(-1);function qs(b,a){b.b=a;return b;}
function ss(a){if(a.a===null){a.a=fj('colgroup');jk(a.b.d,a.a,0);bj(a.a,fj('col'));}}
function ps(){}
_=ps.prototype=new zD();_.tN=rL+'HTMLTable$ColumnFormatter';_.tI=70;_.a=null;function xs(a){a.b=xH(new vH());}
function ys(a){xs(a);return a;}
function As(c,a){var b;b=at(a);if(b<0){return null;}return oh(CH(c.b,b),12);}
function Bs(b,c){var a;if(b.a===null){a=b.b.b;zH(b.b,c);}else{a=b.a.a;cI(b.b,a,c);b.a=b.a.b;}bt(c.gb(),a);}
function Cs(c,a,b){Fs(a);cI(c.b,b,null);c.a=vs(new us(),b,c.a);}
function Ds(c,a){var b;b=at(a);Cs(c,a,b);}
function Es(a){return Fr(new Dr(),a);}
function Fs(a){a['__widgetID']=null;}
function at(a){var b=a['__widgetID'];return b==null?-1:b;}
function bt(a,b){a['__widgetID']=b;}
function ts(){}
_=ts.prototype=new zD();_.tN=rL+'HTMLTable$WidgetMapper';_.tI=71;_.a=null;function vs(c,a,b){c.a=a;c.b=b;return c;}
function us(){}
_=us.prototype=new zD();_.tN=rL+'HTMLTable$WidgetMapper$FreeNode';_.tI=72;_.a=0;_.b=null;function au(){au=iL;bu=Et(new Dt(),'center');cu=Et(new Dt(),'left');Et(new Dt(),'right');}
var bu,cu;function Et(b,a){b.a=a;return b;}
function Dt(){}
_=Dt.prototype=new zD();_.tN=rL+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=73;_.a=null;function hu(){hu=iL;iu=fu(new eu(),'bottom');ju=fu(new eu(),'middle');ku=fu(new eu(),'top');}
var iu,ju,ku;function fu(a,b){a.a=b;return a;}
function eu(){}
_=eu.prototype=new zD();_.tN=rL+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=74;_.a=null;function ou(a){a.a=(au(),cu);a.c=(hu(),ku);}
function pu(a){rp(a);ou(a);a.b=ij();bj(a.d,a.b);uk(a.e,'cellSpacing','0');uk(a.e,'cellPadding','0');return a;}
function qu(b,c){var a;a=su(b);bj(b.b,a);Fp(b,c,a);}
function su(b){var a;a=hj();up(b,a,b.a);vp(b,a,b.c);return a;}
function tu(c,d,a){var b;cq(c,a);b=su(c);jk(c.b,b,a);gq(c,d,b,a,false);}
function uu(c,d){var a,b;b=gk(d.gb());a=iq(c,d);if(a){nk(c.b,b);}return a;}
function vu(b,a){b.c=a;}
function wu(a){return uu(this,a);}
function nu(){}
_=nu.prototype=new qp();_.rc=wu;_.tN=rL+'HorizontalPanel';_.tI=75;_.b=null;function yu(a){DA(a,ej());bj(a.gb(),a.a=dj());vz(a,1);uz(a,'gwt-Hyperlink');return a;}
function zu(c,b,a){yu(c);Eu(c,b);Du(c,a);return c;}
function Au(b,a){if(b.b===null){b.b=yp(new xp());}zH(b.b,a);}
function Cu(a){return fk(a.a);}
function Du(b,a){b.c=a;uk(b.a,'href','#'+a);}
function Eu(b,a){xk(b.a,a);}
function Fu(a){if(Aj(a)==1){if(this.b!==null){Ap(this.b,this);}tl(this.c);Bj(a);}}
function xu(){}
_=xu.prototype=new kA();_.Cb=Fu;_.tN=rL+'Hyperlink';_.tI=76;_.a=null;_.b=null;_.c=null;function dv(a){return (xj(a)?1:0)|(wj(a)?8:0)|(tj(a)?2:0)|(pj(a)?4:0);}
function ov(a){xH(a);return a;}
function qv(d,c,e,f){var a,b;for(a=cG(d);BF(a);){b=oh(CF(a),21);b.ec(c,e,f);}}
function rv(d,c){var a,b;for(a=cG(d);BF(a);){b=oh(CF(a),21);b.fc(c);}}
function sv(e,c,a){var b,d,f,g,h;d=c.gb();g=rj(a)-Dj(d)+ak(d,'scrollLeft')+tm();h=sj(a)-Ej(d)+ak(d,'scrollTop')+um();switch(Aj(a)){case 4:qv(e,c,g,h);break;case 8:vv(e,c,g,h);break;case 64:uv(e,c,g,h);break;case 16:b=uj(a);if(!kk(d,b)){rv(e,c);}break;case 32:f=zj(a);if(!kk(d,f)){tv(e,c);}break;}}
function tv(d,c){var a,b;for(a=cG(d);BF(a);){b=oh(CF(a),21);b.gc(c);}}
function uv(d,c,e,f){var a,b;for(a=cG(d);BF(a);){b=oh(CF(a),21);b.hc(c,e,f);}}
function vv(d,c,e,f){var a,b;for(a=cG(d);BF(a);){b=oh(CF(a),21);b.ic(c,e,f);}}
function nv(){}
_=nv.prototype=new vH();_.tN=rL+'MouseListenerCollection';_.tI=77;function bx(){bx=iL;gx=CJ(new aJ());}
function ax(b,a){bx();ip(b);if(a===null){a=cx();}DA(b,a);b.Ab();return b;}
function dx(){bx();return ex(null);}
function ex(c){bx();var a,b;b=oh(cK(gx,c),22);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=Fj(c))){return null;}}if(gx.c==0){fx();}dK(gx,c,b=ax(new Bw(),a));return b;}
function cx(){bx();return $doc.body;}
function fx(){bx();jm(new Cw());}
function Bw(){}
_=Bw.prototype=new hp();_.tN=rL+'RootPanel';_.tI=78;var gx;function Ew(){var a,b;for(b=BG(jH((bx(),gx)));cH(b);){a=oh(dH(b),22);if(a.tb()){a.Eb();}}}
function Fw(){return null;}
function Cw(){}
_=Cw.prototype=new zD();_.nc=Ew;_.oc=Fw;_.tN=rL+'RootPanel$1';_.tI=79;function jx(a){a.a=a.b.n!==null;}
function kx(b,a){b.b=a;jx(b);return b;}
function mx(){return this.a;}
function nx(){if(!this.a||this.b.n===null){throw eL(new dL());}this.a=false;return this.b.n;}
function ix(){}
_=ix.prototype=new zD();_.sb=mx;_.yb=nx;_.tN=rL+'SimplePanel$1';_.tI=80;function Ex(a){a.a=pu(new nu());}
function Fx(c){var a,b;Ex(c);nq(c,c.a);vz(c,1);uz(c,'gwt-TabBar');vu(c.a,(hu(),iu));a=yt(new Br(),'&nbsp;',true);b=yt(new Br(),'&nbsp;',true);uz(a,'gwt-TabBarFirst');uz(b,'gwt-TabBarRest');a.tc('100%');b.tc('100%');qu(c.a,a);qu(c.a,b);a.tc('100%');tp(c.a,a,'100%');wp(c.a,b,'100%');return c;}
function ay(b,a){if(b.c===null){b.c=ly(new ky());}zH(b.c,a);}
function by(b,a){if(a<0||a>ey(b)){throw yC(new xC());}}
function cy(b,a){if(a<(-1)||a>=ey(b)){throw yC(new xC());}}
function ey(a){return a.a.f.b-2;}
function fy(e,d,a,b){var c;by(e,b);if(a){c=xt(new Br(),d);}else{c=gv(new ev(),d);}lv(c,false);hv(c,e);uz(c,'gwt-TabBarItem');tu(e.a,c,b+1);}
function gy(b,a){var c;cy(b,a);c=fq(b.a,a+1);if(c===b.b){b.b=null;}uu(b.a,c);}
function hy(b,a){cy(b,a);if(b.c!==null){if(!ny(b.c,b,a)){return false;}}iy(b,b.b,false);if(a==(-1)){b.b=null;return true;}b.b=fq(b.a,a+1);iy(b,b.b,true);if(b.c!==null){oy(b.c,b,a);}return true;}
function iy(c,a,b){if(a!==null){if(b){kz(a,'gwt-TabBarItem-selected');}else{qz(a,'gwt-TabBarItem-selected');}}}
function jy(b){var a;for(a=1;a<this.a.f.b-1;++a){if(fq(this.a,a)===b){hy(this,a-1);return;}}}
function Dx(){}
_=Dx.prototype=new lq();_.Db=jy;_.tN=rL+'TabBar';_.tI=81;_.b=null;_.c=null;function ly(a){xH(a);return a;}
function ny(e,c,d){var a,b;for(a=cG(e);BF(a);){b=oh(CF(a),23);if(!b.Bb(c,d)){return false;}}return true;}
function oy(e,c,d){var a,b;for(a=cG(e);BF(a);){b=oh(CF(a),23);b.lc(c,d);}}
function ky(){}
_=ky.prototype=new vH();_.tN=rL+'TabListenerCollection';_.tI=82;function Cy(a){a.b=yy(new xy());a.a=sy(new ry(),a.b);}
function Dy(b){var a;Cy(b);a=eA(new cA());fA(a,b.b);fA(a,b.a);tp(a,b.a,'100%');b.b.xc('100%');ay(b.b,b);nq(b,a);uz(b,'gwt-TabPanel');uz(b.a,'gwt-TabPanelBottom');return b;}
function Fy(b,c,a){cz(b,c,a,b.a.f.b);}
function Ey(b,a){if(b.c===null){b.c=ly(new ky());}zH(b.c,a);}
function bz(b,a){return fq(b.a,a);}
function dz(d,e,c,a,b){uy(d.a,e,c,a,b);}
function cz(c,d,b,a){dz(c,d,b,false,a);}
function ez(b,a){hy(b.b,a);}
function fz(){return hq(this.a);}
function gz(a,b){if(this.c!==null){return ny(this.c,this,b);}return true;}
function hz(a,b){zq(this.a,b);if(this.c!==null){oy(this.c,this,b);}}
function iz(a){return vy(this.a,a);}
function qy(){}
_=qy.prototype=new lq();_.ub=fz;_.Bb=gz;_.lc=hz;_.rc=iz;_.tN=rL+'TabPanel';_.tI=83;_.c=null;function sy(b,a){tq(b);b.a=a;return b;}
function uy(e,f,d,a,b){var c;c=eq(e,f);if(c!=(-1)){vy(e,f);if(c<b){b--;}}Ay(e.a,d,a,b);wq(e,f,b);}
function vy(b,c){var a;a=eq(b,c);if(a!=(-1)){By(b.a,a);return xq(b,c);}return false;}
function wy(a){return vy(this,a);}
function ry(){}
_=ry.prototype=new sq();_.rc=wy;_.tN=rL+'TabPanel$TabbedDeckPanel';_.tI=84;_.a=null;function yy(a){Fx(a);return a;}
function Ay(d,c,a,b){fy(d,c,a,b);}
function By(b,a){gy(b,a);}
function xy(){}
_=xy.prototype=new Dx();_.tN=rL+'TabPanel$UnmodifiableTabBar';_.tI=85;function dA(a){a.a=(au(),cu);a.b=(hu(),ku);}
function eA(a){rp(a);dA(a);uk(a.e,'cellSpacing','0');uk(a.e,'cellPadding','0');return a;}
function fA(b,d){var a,c;c=ij();a=hA(b);bj(c,a);bj(b.d,c);Fp(b,d,a);}
function hA(b){var a;a=hj();up(b,a,b.a);vp(b,a,b.b);return a;}
function iA(c,e,a){var b,d;cq(c,a);d=ij();b=hA(c);bj(d,b);jk(c.d,d,a);gq(c,e,b,a,false);}
function jA(c){var a,b;b=gk(c.gb());a=iq(this,c);if(a){nk(this.d,gk(b));}return a;}
function cA(){}
_=cA.prototype=new qp();_.rc=jA;_.tN=rL+'VerticalPanel';_.tI=86;function rA(b,a){b.a=ih('[Lcom.google.gwt.user.client.ui.Widget;',[153],[12],[4],null);return b;}
function sA(a,b){wA(a,b,a.b);}
function uA(b,a){if(a<0||a>=b.b){throw yC(new xC());}return b.a[a];}
function vA(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function wA(d,e,a){var b,c;if(a<0||a>d.b){throw yC(new xC());}if(d.b==d.a.a){c=ih('[Lcom.google.gwt.user.client.ui.Widget;',[153],[12],[d.a.a*2],null);for(b=0;b<d.a.a;++b){kh(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){kh(d.a,b,d.a[b-1]);}kh(d.a,a,e);}
function xA(a){return nA(new mA(),a);}
function yA(c,b){var a;if(b<0||b>=c.b){throw yC(new xC());}--c.b;for(a=b;a<c.b;++a){kh(c.a,a,c.a[a+1]);}kh(c.a,c.b,null);}
function zA(b,c){var a;a=vA(b,c);if(a==(-1)){throw eL(new dL());}yA(b,a);}
function lA(){}
_=lA.prototype=new zD();_.tN=rL+'WidgetCollection';_.tI=87;_.a=null;_.b=0;function nA(b,a){b.b=a;return b;}
function pA(){return this.a<this.b.b-1;}
function qA(){if(this.a>=this.b.b){throw eL(new dL());}return this.b.a[++this.a];}
function mA(){}
_=mA.prototype=new zD();_.sb=pA;_.yb=qA;_.tN=rL+'WidgetCollection$WidgetIterator';_.tI=88;_.a=(-1);function oB(a){return ej();}
function hB(){}
_=hB.prototype=new zD();_.tN=sL+'PopupImpl';_.tI=89;function kB(c,b){var a=b.__frame;a.parentElement.removeChild(a);b.__frame=null;a.__popup=null;}
function lB(d,b){var a=$doc.createElement('iframe');a.src="javascript:''";a.scrolling='no';a.frameBorder=0;b.__frame=a;a.__popup=b;var c=a.style;c.position='absolute';c.filter='alpha(opacity=0)';c.visibility=b.style.visibility;c.left=b.offsetLeft;c.top=b.offsetTop;c.width=b.offsetWidth;c.height=b.offsetHeight;c.setExpression('left','this.__popup.offsetLeft');c.setExpression('top','this.__popup.offsetTop');c.setExpression('width','this.__popup.offsetWidth');c.setExpression('height','this.__popup.offsetHeight');b.parentElement.insertBefore(a,b);}
function mB(b,a,c){if(a.__frame){a.__frame.style.visibility=c?'visible':'hidden';}}
function iB(){}
_=iB.prototype=new hB();_.tN=sL+'PopupImplIE6';_.tI=90;function sB(){}
_=sB.prototype=new zD();_.tN=tL+'OutputStream';_.tI=91;function qB(){}
_=qB.prototype=new sB();_.tN=tL+'FilterOutputStream';_.tI=92;function uB(){}
_=uB.prototype=new qB();_.tN=tL+'PrintStream';_.tI=93;function yB(){yB=iL;bE();}
function xB(a){yB();FD(a);return a;}
function wB(){}
_=wB.prototype=new ED();_.tN=uL+'ArrayStoreException';_.tI=94;function BB(){BB=iL;CB=AB(new zB(),false);DB=AB(new zB(),true);}
function AB(a,b){BB();a.a=b;return a;}
function EB(a){return ph(a,28)&&oh(a,28).a==this.a;}
function FB(){var a,b;b=1231;a=1237;return this.a?1231:1237;}
function aC(){return this.a?'true':'false';}
function bC(a){BB();return a?DB:CB;}
function zB(){}
_=zB.prototype=new zD();_.eQ=EB;_.hC=FB;_.tS=aC;_.tN=uL+'Boolean';_.tI=95;_.a=false;var CB,DB;function fC(a,b){if(b<2||b>36){return (-1);}if(a>=48&&a<48+hD(b,10)){return a-48;}if(a>=97&&a<b+97-10){return a-97+10;}if(a>=65&&a<b+65-10){return a-65+10;}return (-1);}
function jC(){jC=iL;bE();}
function hC(a){jC();FD(a);return a;}
function iC(b,a){jC();aE(b,a);return b;}
function gC(){}
_=gC.prototype=new ED();_.tN=uL+'ClassCastException';_.tI=96;function sC(){sC=iL;bE();}
function rC(b,a){sC();aE(b,a);return b;}
function qC(){}
_=qC.prototype=new ED();_.tN=uL+'IllegalArgumentException';_.tI=97;function wC(){wC=iL;bE();}
function uC(a){wC();FD(a);return a;}
function vC(b,a){wC();aE(b,a);return b;}
function tC(){}
_=tC.prototype=new ED();_.tN=uL+'IllegalStateException';_.tI=98;function AC(){AC=iL;bE();}
function yC(a){AC();FD(a);return a;}
function zC(b,a){AC();aE(b,a);return b;}
function xC(){}
_=xC.prototype=new ED();_.tN=uL+'IndexOutOfBoundsException';_.tI=99;function tD(){tD=iL;{yD();}}
function uD(a){tD();return isNaN(a);}
function vD(e,d,c,h){tD();var a,b,f,g;if(e===null){throw rD(new qD(),'Unable to parse null');}b=tE(e);f=b>0&&mE(e,0)==45?1:0;for(a=f;a<b;a++){if(fC(mE(e,a),d)==(-1)){throw rD(new qD(),'Could not parse '+e+' in radix '+d);}}g=wD(e,d);if(uD(g)){throw rD(new qD(),'Unable to parse '+e);}else if(g<c||g>h){throw rD(new qD(),'The string '+e+' exceeds the range for the requested data type');}return g;}
function wD(b,a){tD();return parseInt(b,a);}
function yD(){tD();xD=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var xD=null;function CC(){CC=iL;tD();}
function FC(a){CC();return aD(a,10);}
function aD(b,a){CC();return rh(vD(b,a,(-2147483648),2147483647));}
function bD(a){CC();return FE(a);}
var DC=2147483647,EC=(-2147483648);function eD(a){return a<0?-a:a;}
function fD(a){return a<0?-a:a;}
function gD(a,b){return a>b?a:b;}
function hD(a,b){return a<b?a:b;}
function iD(a){return Math.sqrt(a);}
function lD(){lD=iL;bE();}
function kD(a){lD();FD(a);return a;}
function jD(){}
_=jD.prototype=new ED();_.tN=uL+'NegativeArraySizeException';_.tI=100;function oD(){oD=iL;bE();}
function nD(b,a){oD();aE(b,a);return b;}
function mD(){}
_=mD.prototype=new ED();_.tN=uL+'NullPointerException';_.tI=101;function sD(){sD=iL;sC();}
function rD(b,a){sD();rC(b,a);return b;}
function qD(){}
_=qD.prototype=new qC();_.tN=uL+'NumberFormatException';_.tI=102;function mE(b,a){return b.charCodeAt(a);}
function oE(f,c){var a,b,d,e,g,h;h=tE(f);e=tE(c);b=hD(h,e);for(a=0;a<b;a++){g=mE(f,a);d=mE(c,a);if(g!=d){return g-d;}}return h-e;}
function pE(b,a){if(!ph(a,1))return false;return yE(b,a);}
function qE(b,a){return b.indexOf(a);}
function rE(c,b,a){return c.indexOf(b,a);}
function sE(b,a){return b.lastIndexOf(String.fromCharCode(a));}
function tE(a){return a.length;}
function uE(c,a,b){b=zE(b);return c.replace(RegExp(a,'g'),b);}
function vE(b,a){return b.substr(a,b.length-a);}
function wE(c,a,b){return c.substr(a,b-a);}
function xE(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function yE(a,b){return String(a)==b;}
function zE(b){var a;a=0;while(0<=(a=rE(b,'\\',a))){if(mE(b,a+1)==36){b=wE(b,0,a)+'$'+vE(b,++a);}else{b=wE(b,0,a)+vE(b,++a);}}return b;}
function AE(a){if(ph(a,1)){return oE(this,oh(a,1));}else{throw iC(new gC(),'Cannot compare '+a+" with String '"+this+"'");}}
function BE(a){return pE(this,a);}
function DE(){var a=CE;if(!a){a=CE={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function EE(){return this;}
function FE(a){return ''+a;}
function aF(a){return a!==null?a.tS():'null';}
_=String.prototype;_.u=AE;_.eQ=BE;_.hC=DE;_.tS=EE;_.tN=uL+'String';_.tI=2;var CE=null;function eE(a){gE(a);return a;}
function fE(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function gE(a){hE(a,'');}
function hE(b,a){b.js=[a];b.length=a.length;}
function jE(a){a.zb();return a.js[0];}
function kE(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function lE(){return jE(this);}
function dE(){}
_=dE.prototype=new zD();_.zb=kE;_.tS=lE;_.tN=uL+'StringBuffer';_.tI=103;function cF(){cF=iL;eF=new uB();}
function dF(){cF();return new Date().getTime();}
function fF(a){cF();return ng(a);}
var eF;function qF(){qF=iL;bE();}
function pF(b,a){qF();aE(b,a);return b;}
function oF(){}
_=oF.prototype=new ED();_.tN=uL+'UnsupportedOperationException';_.tI=104;function zF(b,a){b.c=a;return b;}
function BF(a){return a.a<a.c.yc();}
function CF(a){if(!BF(a)){throw eL(new dL());}return a.c.qb(a.b=a.a++);}
function DF(a){if(a.b<0){throw uC(new tC());}a.c.qc(a.b);a.a=a.b;a.b=(-1);}
function EF(){return BF(this);}
function FF(){return CF(this);}
function yF(){}
_=yF.prototype=new zD();_.sb=EF;_.yb=FF;_.tN=vL+'AbstractList$IteratorImpl';_.tI=105;_.a=0;_.b=(-1);function hH(f,d,e){var a,b,c;for(b=xJ(f.E());pJ(b);){a=qJ(b);c=a.ib();if(d===null?c===null:d.eQ(c)){if(e){rJ(b);}return a;}}return null;}
function iH(b){var a;a=b.E();return lG(new kG(),b,a);}
function jH(b){var a;a=bK(b);return zG(new yG(),b,a);}
function kH(a){return hH(this,a,false)!==null;}
function lH(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!ph(d,30)){return false;}f=oh(d,30);c=iH(this);e=f.vb();if(!sH(c,e)){return false;}for(a=nG(c);uG(a);){b=vG(a);h=this.rb(b);g=f.rb(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function mH(b){var a;a=hH(this,b,false);return a===null?null:a.ob();}
function nH(){var a,b,c;b=0;for(c=xJ(this.E());pJ(c);){a=qJ(c);b+=a.hC();}return b;}
function oH(){return iH(this);}
function pH(){var a,b,c,d;d='{';a=false;for(c=xJ(this.E());pJ(c);){b=qJ(c);if(a){d+=', ';}else{a=true;}d+=aF(b.ib());d+='=';d+=aF(b.ob());}return d+'}';}
function jG(){}
_=jG.prototype=new zD();_.y=kH;_.eQ=lH;_.rb=mH;_.hC=nH;_.vb=oH;_.tS=pH;_.tN=vL+'AbstractMap';_.tI=106;function sH(e,b){var a,c,d;if(b===e){return true;}if(!ph(b,31)){return false;}c=oh(b,31);if(c.yc()!=e.yc()){return false;}for(a=c.ub();a.sb();){d=a.yb();if(!e.z(d)){return false;}}return true;}
function tH(a){return sH(this,a);}
function uH(){var a,b,c;a=0;for(b=this.ub();b.sb();){c=b.yb();if(c!==null){a+=c.hC();}}return a;}
function qH(){}
_=qH.prototype=new rF();_.eQ=tH;_.hC=uH;_.tN=vL+'AbstractSet';_.tI=107;function lG(b,a,c){b.a=a;b.b=c;return b;}
function nG(b){var a;a=xJ(b.b);return sG(new rG(),b,a);}
function oG(a){return this.a.y(a);}
function pG(){return nG(this);}
function qG(){return this.b.a.c;}
function kG(){}
_=kG.prototype=new qH();_.z=oG;_.ub=pG;_.yc=qG;_.tN=vL+'AbstractMap$1';_.tI=108;function sG(b,a,c){b.a=c;return b;}
function uG(a){return pJ(a.a);}
function vG(b){var a;a=qJ(b.a);return a.ib();}
function wG(){return uG(this);}
function xG(){return vG(this);}
function rG(){}
_=rG.prototype=new zD();_.sb=wG;_.yb=xG;_.tN=vL+'AbstractMap$2';_.tI=109;function zG(b,a,c){b.a=a;b.b=c;return b;}
function BG(b){var a;a=xJ(b.b);return aH(new FG(),b,a);}
function CG(a){return aK(this.a,a);}
function DG(){return BG(this);}
function EG(){return this.b.a.c;}
function yG(){}
_=yG.prototype=new rF();_.z=CG;_.ub=DG;_.yc=EG;_.tN=vL+'AbstractMap$3';_.tI=110;function aH(b,a,c){b.a=c;return b;}
function cH(a){return pJ(a.a);}
function dH(a){var b;b=qJ(a.a).ob();return b;}
function eH(){return cH(this);}
function fH(){return dH(this);}
function FG(){}
_=FG.prototype=new zD();_.sb=eH;_.yb=fH;_.tN=vL+'AbstractMap$4';_.tI=111;function rI(b){var a,c;a=xH(new vH());for(c=0;c<b.a;c++){zH(a,b[c]);}return a;}
function sI(d,h,e){if(h==0){return;}var i=new Array();for(var g=0;g<h;++g){i[g]=d[g];}if(e!=null){var f=function(a,b){var c=e.v(a,b);return c;};i.sort(f);}else{i.sort();}for(g=0;g<h;++g){d[g]=i[g];}}
function tI(a){sI(a,a.a,(AI(),BI));}
function AI(){AI=iL;BI=new xI();}
var BI;function zI(a,b){return oh(a,36).u(b);}
function xI(){}
_=xI.prototype=new zD();_.v=zI;_.tN=vL+'Comparators$1';_.tI=112;function EJ(){EJ=iL;fK=lK();}
function BJ(a){{DJ(a);}}
function CJ(a){EJ();BJ(a);return a;}
function DJ(a){a.a=xg();a.d=yg();a.b=wh(fK,tg);a.c=0;}
function FJ(b,a){if(ph(a,1)){return pK(b.d,oh(a,1))!==fK;}else if(a===null){return b.b!==fK;}else{return oK(b.a,a,a.hC())!==fK;}}
function aK(a,b){if(a.b!==fK&&nK(a.b,b)){return true;}else if(kK(a.d,b)){return true;}else if(iK(a.a,b)){return true;}return false;}
function bK(a){return uJ(new lJ(),a);}
function cK(c,a){var b;if(ph(a,1)){b=pK(c.d,oh(a,1));}else if(a===null){b=c.b;}else{b=oK(c.a,a,a.hC());}return b===fK?null:b;}
function dK(c,a,d){var b;if(ph(a,1)){b=sK(c.d,oh(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=rK(c.a,a,d,a.hC());}if(b===fK){++c.c;return null;}else{return b;}}
function eK(c,a){var b;if(ph(a,1)){b=uK(c.d,oh(a,1));}else if(a===null){b=c.b;c.b=wh(fK,tg);}else{b=tK(c.a,a,a.hC());}if(b===fK){return null;}else{--c.c;return b;}}
function gK(e,c){EJ();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.s(a[f]);}}}}
function hK(d,a){EJ();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=eJ(c.substring(1),e);a.s(b);}}}
function iK(f,h){EJ();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.ob();if(nK(h,d)){return true;}}}}return false;}
function jK(a){return FJ(this,a);}
function kK(c,d){EJ();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(nK(d,a)){return true;}}}return false;}
function lK(){EJ();}
function mK(){return bK(this);}
function nK(a,b){EJ();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function qK(a){return cK(this,a);}
function oK(f,h,e){EJ();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.ib();if(nK(h,d)){return c.ob();}}}}
function pK(b,a){EJ();return b[':'+a];}
function rK(f,h,j,e){EJ();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.ib();if(nK(h,d)){var i=c.ob();c.uc(j);return i;}}}else{a=f[e]=[];}var c=eJ(h,j);a.push(c);}
function sK(c,a,d){EJ();a=':'+a;var b=c[a];c[a]=d;return b;}
function tK(f,h,e){EJ();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.ib();if(nK(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.ob();}}}}
function uK(c,a){EJ();a=':'+a;var b=c[a];delete c[a];return b;}
function aJ(){}
_=aJ.prototype=new jG();_.y=jK;_.E=mK;_.rb=qK;_.tN=vL+'HashMap';_.tI=113;_.a=null;_.b=null;_.c=0;_.d=null;var fK;function cJ(b,a,c){b.a=a;b.b=c;return b;}
function eJ(a,b){return cJ(new bJ(),a,b);}
function fJ(b){var a;if(ph(b,37)){a=oh(b,37);if(nK(this.a,a.ib())&&nK(this.b,a.ob())){return true;}}return false;}
function gJ(){return this.a;}
function hJ(){return this.b;}
function iJ(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function jJ(a){var b;b=this.b;this.b=a;return b;}
function kJ(){return this.a+'='+this.b;}
function bJ(){}
_=bJ.prototype=new zD();_.eQ=fJ;_.ib=gJ;_.ob=hJ;_.hC=iJ;_.uc=jJ;_.tS=kJ;_.tN=vL+'HashMap$EntryImpl';_.tI=114;_.a=null;_.b=null;function uJ(b,a){b.a=a;return b;}
function wJ(d,c){var a,b,e;if(ph(c,37)){a=oh(c,37);b=a.ib();if(FJ(d.a,b)){e=cK(d.a,b);return nK(a.ob(),e);}}return false;}
function xJ(a){return nJ(new mJ(),a.a);}
function yJ(a){return wJ(this,a);}
function zJ(){return xJ(this);}
function AJ(){return this.a.c;}
function lJ(){}
_=lJ.prototype=new qH();_.z=yJ;_.ub=zJ;_.yc=AJ;_.tN=vL+'HashMap$EntrySet';_.tI=115;function nJ(c,b){var a;c.c=b;a=xH(new vH());if(c.c.b!==(EJ(),fK)){zH(a,cJ(new bJ(),null,c.c.b));}hK(c.c.d,a);gK(c.c.a,a);c.a=cG(a);return c;}
function pJ(a){return BF(a.a);}
function qJ(a){return a.b=oh(CF(a.a),37);}
function rJ(a){if(a.b===null){throw vC(new tC(),'Must call next() before remove().');}else{DF(a.a);eK(a.c,a.b.ib());a.b=null;}}
function sJ(){return pJ(this);}
function tJ(){return qJ(this);}
function mJ(){}
_=mJ.prototype=new zD();_.sb=sJ;_.yb=tJ;_.tN=vL+'HashMap$EntrySetIterator';_.tI=116;_.a=null;_.b=null;function wK(a){a.a=CJ(new aJ());return a;}
function xK(c,a){var b;b=dK(c.a,a,bC(true));return b===null;}
function zK(a){return nG(iH(a.a));}
function AK(a){return xK(this,a);}
function BK(a){return FJ(this.a,a);}
function CK(){return zK(this);}
function DK(){return this.a.c;}
function EK(){return iH(this.a).tS();}
function vK(){}
_=vK.prototype=new qH();_.s=AK;_.z=BK;_.ub=CK;_.yc=DK;_.tS=EK;_.tN=vL+'HashSet';_.tI=117;_.a=null;function fL(){fL=iL;bE();}
function eL(a){fL();FD(a);return a;}
function dL(){}
_=dL.prototype=new ED();_.tN=vL+'NoSuchElementException';_.tI=118;function DL(){}
_=DL.prototype=new zD();_.tN=wL+'BezierCurve';_.tI=119;function FL(a){a.b=ej();a.c=a.b;a.d=ej();{if(!fM){fM=eM(a);}a.f=fj('g_vml_:group');a.e=fj('g_vml_:curve');bj(a.f,a.e);sk(a.f,'class','gwt-diagrams-vml-group');sk(a.e,'class','gwt-diagrams-vml-curve');bj(dx().gb(),a.f);bj(dx().gb(),a.d);uk(a.d,'className','gwt-diagrams-vml-curve');sk(a.e,'strokecolor',gM(a.d,'color'));sk(a.e,'strokeweight',gM(a.d,'width'));sk(a.e,'filled','false');yk(a.f,'width','100px');yk(a.f,'height','100px');yk(a.f,'position','absolute');sk(a.f,'coordsize','100,100');}}
function aM(a){FL(a);return a;}
function dM(f,c,d,a,b){var e;if(!f.a){bj(gk(f.b),f.f);f.c=f.f;f.a=true;}sk(f.e,'strokecolor',gM(f.d,'color'));sk(f.e,'strokeweight',gM(f.d,'width'));e=EN(new DN(),hD(c.a,d.a),hD(c.b,d.b));yk(f.f,'left',bD(e.a));yk(f.f,'top',bD(e.b));cM(f,bO(c,dO(e)),bO(d,dO(e)),bO(a,dO(e)),bO(b,dO(e)));}
function cM(e,c,d,a,b){sk(e.e,'from',c.a+','+c.b);sk(e.e,'to',d.a+','+d.b);sk(e.e,'control1',a.a+','+a.b);sk(e.e,'control2',b.a+','+b.b);}
function eM(b){if(!$doc.namespaces['g_vml_']){$doc.namespaces.add('g_vml_','urn:schemas-microsoft-com:vml');}var a=$doc.createStyleSheet();a.cssText='g_vml_\\:*{behavior:url(#default#VML)}';return true;}
function gM(b,a){if(b.currentStyle){return b.currentStyle[a];}else{return null;}}
function EL(){}
_=EL.prototype=new DL();_.tN=wL+'BezierCurveVml';_.tI=120;_.a=false;_.e=null;_.f=null;var fM=false;function jM(a){a.c=xH(new vH());}
function kM(c,d){var a,b;jM(c);yH(c.c,d);oM(c,c.A());for(b=cG(c.c);BF(b);){a=oh(CF(b),35);a.w(c);}return c;}
function lM(a,b){kM(a,rI(b));return a;}
function nM(a){return a.b.t(a.c);}
function oM(b,a){b.b=a;}
function pM(){this.Ac(nM(this));}
function iM(){}
_=iM.prototype=new kA();_.zc=pM;_.tN=xL+'AbstractConnection';_.tI=121;_.b=null;function rM(a){a.a=aM(new EL());}
function tM(a,b){lM(a,b);rM(a);if(b.a!=2){throw rC(new qC(),'Need exactly two connectors to connect');}DA(a,a.a.c);kz(a,'gwt-diagrams-connection');return a;}
function sM(c,a,b){tM(c,jh('[Lpl.balon.gwt.diagrams.client.connector.Connector;',152,35,[a,b]));return c;}
function vM(){return new fN();}
function wM(b){var a;if(!ph(b,38)){throw rC(new qC(),'Expected BezierConnectionData');}a=oh(b,38);if(a.b.b!=2){throw rC(new qC(),'Expected two connection points');}if(a.a.b!=2){throw rC(new qC(),'Expected two control points');}dM(this.a,oh(CH(a.b,0),32),oh(CH(a.b,1),32),oh(CH(a.a,0),32),oh(CH(a.a,1),32));}
function qM(){}
_=qM.prototype=new iM();_.A=vM;_.Ac=wM;_.tN=xL+'BezierTwoEndedConnection';_.tI=122;function zM(a){a.a=xH(new vH());}
function BM(a,b){lM(a,b);zM(a);if(b.a!=2){throw rC(new qC(),'Need exactly two connectors to connect');}DA(a,ej());kz(a,'gwt-diagrams-connection');return a;}
function AM(c,a,b){BM(c,jh('[Lpl.balon.gwt.diagrams.client.connector.Connector;',152,35,[a,b]));return c;}
function DM(d,a){var b,c;for(c=d.a.b;c<a;c++){b=ej();zH(d.a,wh(b,bl));bj(d.gb(),b);wk(b,'&nbsp;');}while(d.a.b>a){b=oh(CH(d.a,0),17);bI(d.a,wh(b,bl));nk(d.gb(),b);}}
function EM(){return new kN();}
function FM(a){var b,c,d,e,f;if(a.b.b<=1){throw rC(new qC(),'Too few connection points');}DM(this,a.b.b-1);for(d=0;d<this.a.b;d++){b=oh(CH(this.a,d),17);e=oh(CH(a.b,d),32);c=oh(CH(a.b,d+1),32);f='gwt-diagrams-line';sk(b,'style','');uk(b,'className',f);yk(b,'height','1');yk(b,'width','1');if(e.a==c.a){f+=' gwt-diagrams-line-vertical';yk(b,'height',bD(eD(e.b-c.b)));}else if(e.b==c.b){yk(b,'width',bD(eD(e.a-c.a)));f+=' gwt-diagrams-line-horizontal';}yk(b,'left',bD(hD(e.a,c.a)));yk(b,'top',bD(hD(e.b,c.b)));uk(b,'className',f);}}
function yM(){}
_=yM.prototype=new iM();_.A=EM;_.Ac=FM;_.tN=xL+'RectilinearTwoEndedConnection';_.tI=123;function bN(c,a,b){sM(c,a,b);return c;}
function dN(){return new qN();}
function eN(a){if(a.b.b!=2){throw rC(new qC(),'Expected two connection points');}dM(this.a,oh(CH(a.b,0),32),oh(CH(a.b,1),32),oh(CH(a.b,1),32),oh(CH(a.b,0),32));}
function aN(){}
_=aN.prototype=new qM();_.A=dN;_.Ac=eN;_.tN=xL+'StraightTwoEndedConnection';_.tI=124;function hN(j,d,e){var a,b,c,f,g,h,i;f=d.eb();g=e.eb();c=ih('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[149],[33],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=aO(d.bb(f[h]),e.bb(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function iN(e){var a,b,c,d,f,g,h,i;if(e.b!=2){throw rC(new qC(),'Unsupported connectors count');}c=oh(CH(e,0),35);d=oh(CH(e,1),35);f=hN(this,c,d);h=c.pc(f[0]);i=d.pc(f[1]);a=cO(h,f[0],50);b=cO(i,f[1],50);g=wN(new tN(),jh('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',148,32,[h,i]),jh('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',148,32,[a,b]));return g;}
function fN(){}
_=fN.prototype=new zD();_.t=iN;_.tN=yL+'BezierConnectionCalculator';_.tI=125;function lN(e,a,c,d,b){if(b){if(c==0&&d>0){return a!==(rO(),uO);}if(c==1&&d>0){return a!==(rO(),vO);}if(c==0&&d<0){return a!==(rO(),vO);}if(c==1&&d<0){return a!==(rO(),uO);}}else{if(c==0&&d>0){return a!==(rO(),wO);}if(c==1&&d>0){return a!==(rO(),tO);}if(c==0&&d<0){return a!==(rO(),tO);}if(c==1&&d<0){return a!==(rO(),wO);}}return false;}
function nN(j,d,e){var a,b,c,f,g,h,i;f=d.eb();g=e.eb();c=ih('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[149],[33],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=aO(d.bb(f[h]),e.bb(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function oN(e,a,c,d,b){if(b){if(c==0&&d>0){return a===(rO(),vO);}if(c==1&&d>0){return a===(rO(),uO);}if(c==0&&d<0){return a===(rO(),uO);}if(c==1&&d<0){return a===(rO(),vO);}}else{if(c==0&&d>0){return a===(rO(),tO);}if(c==1&&d>0){return a===(rO(),wO);}if(c==0&&d<0){return a===(rO(),wO);}if(c==1&&d<0){return a===(rO(),tO);}}return false;}
function pN(c){var a,b,d,e,f,g,h,i,j,k,l,m;if(c.b!=2){throw rC(new qC(),'Unsupported connectors count');}a=oh(CH(c,0),35);b=oh(CH(c,1),35);d=AN(new yN());e=nN(this,a,b);i=a.pc(e[0]);j=cO(i,e[0],10);k=b.pc(e[1]);l=cO(k,e[1],10);f=l.a-j.a;m=l.b-j.b;g=null;h=null;if(oN(this,e[0],0,f,true)&&oN(this,e[1],1,f,true)){g=cO(j,e[0],eD(sh(f/2)));h=EN(new DN(),g.a,l.b);}else if(oN(this,e[0],0,m,false)&&oN(this,e[1],1,m,false)){g=cO(j,e[0],eD(sh(m/2)));h=EN(new DN(),l.a,g.b);}else if(oN(this,e[0],0,f,true)&&oN(this,e[1],1,m,false)){g=cO(j,e[0],eD(f));h=cO(l,e[1],eD(m));}else if(oN(this,e[0],0,m,false)&&oN(this,e[1],1,f,true)){g=cO(j,e[0],eD(m));h=cO(l,e[1],eD(f));}else if(oN(this,e[0],0,f,true)&&lN(this,e[1],1,f,true)){g=cO(j,e[0],eD(sh(f/2)));h=EN(new DN(),g.a,l.b);}else if(lN(this,e[0],0,f,true)&&oN(this,e[1],1,f,true)){g=cO(j,e[0],eD(sh(f/2)));h=EN(new DN(),g.a,l.b);}else if(oN(this,e[0],0,m,false)&&lN(this,e[1],1,m,false)){g=cO(j,e[0],eD(sh(m/2)));h=EN(new DN(),l.a,g.b);}else if(lN(this,e[0],0,m,false)&&oN(this,e[1],1,m,false)){g=cO(j,e[0],eD(sh(m/2)));h=EN(new DN(),l.a,g.b);}else if(lN(this,e[0],0,f,true)&&lN(this,e[1],1,f,true)){g=cO(j,(rO(),vO),sh(f/2));h=EN(new DN(),g.a,l.b);}else if(lN(this,e[0],0,m,false)&&lN(this,e[1],1,m,false)){g=cO(j,(rO(),tO),sh(m/2));h=EN(new DN(),l.a,g.b);}zH(d.b,i);zH(d.b,j);if(g!==null){zH(d.b,g);}if(h!==null){zH(d.b,h);}zH(d.b,l);zH(d.b,k);return d;}
function kN(){}
_=kN.prototype=new zD();_.t=pN;_.tN=yL+'FullRectilinearTwoEndedCalculator';_.tI=126;function sN(e){var a,b,c,d,f,g,h,i,j,k;if(e.b!=2){throw rC(new qC(),'Unsupported connectors count');}a=oh(CH(e,0),35);b=oh(CH(e,1),35);f=AN(new yN());c=EN(new DN(),a.jb()+sh(a.pb()/2),a.nb()+sh(a.hb()/2));d=EN(new DN(),b.jb()+sh(b.pb()/2),b.nb()+sh(b.hb()/2));g=EN(new DN(),d.a-c.a,d.b-c.b);i=g.a>=0?(-1):1;k=g.b>=0?(-1):1;j=sh(a.hb()/2);h=g.b!=0?sh(j*g.a/eD(g.b)):2147483647;j*= -k;if(eD(h)>sh(a.pb()/2)){h=sh(a.pb()/2);j=g.a!=0?sh(h*g.b/eD(g.a)):2147483647;h*= -i;}zH(f.b,EN(new DN(),c.a+h,c.b+j));j=sh(b.hb()/2);h=g.b!=0?sh(j*g.a/eD(g.b)):2147483647;j*=k;h= -h;if(eD(h)>sh(b.pb()/2)){h=sh(b.pb()/2);j=g.a!=0?sh(h*g.b/eD(g.a)):2147483647;h*=i;j= -j;}zH(f.b,EN(new DN(),d.a+h,d.b+j));return f;}
function qN(){}
_=qN.prototype=new zD();_.t=sN;_.tN=yL+'StraightCenterConnectionDataCalculator';_.tI=127;function zN(a){a.b=xH(new vH());}
function AN(a){zN(a);return a;}
function BN(b,a){zN(b);yH(b.b,a);return b;}
function yN(){}
_=yN.prototype=new zD();_.tN=zL+'ConnectionData';_.tI=128;function uN(a){a.a=xH(new vH());}
function vN(c,b,a){BN(c,b);uN(c);yH(c.a,a);return c;}
function wN(c,b,a){vN(c,rI(b),rI(a));return c;}
function tN(){}
_=tN.prototype=new yN();_.tN=zL+'BezierConnectionData';_.tI=129;function EN(b,a,c){b.a=a;b.b=c;return b;}
function aO(b,a){return iD((b.a-a.a)*(b.a-a.a)+(b.b-a.b)*(b.b-a.b));}
function cO(c,a,b){if(a===(rO(),tO)){return EN(new DN(),c.a,c.b+b);}else if(a===(rO(),wO)){return EN(new DN(),c.a,c.b-b);}else if(a===(rO(),uO)){return EN(new DN(),c.a-b,c.b);}else if(a===(rO(),vO)){return EN(new DN(),c.a+b,c.b);}else{throw uC(new tC());}}
function bO(a,b){return EN(new DN(),a.a+b.a,a.b+b.b);}
function dO(a){return EN(new DN(),-a.a,-a.b);}
function DN(){}
_=DN.prototype=new zD();_.tN=zL+'Point';_.tI=130;_.a=0;_.b=0;function fO(a){a.c=wK(new vK());}
function gO(a){fO(a);return a;}
function iO(b,a){return cO(EN(new DN(),b.jb()+sh(b.pb()/2),b.nb()+sh(b.hb()/2)),a,sO(a)?sh(b.pb()/2):sh(b.hb()/2));}
function jO(c){var a,b;for(b=zK(c.c);uG(b);){a=oh(vG(b),39);a.zc();}}
function kO(a){xK(this.c,a);}
function lO(a){return iO(this,a);}
function mO(){return xO();}
function nO(a){return iO(this,a);}
function eO(){}
_=eO.prototype=new zD();_.w=kO;_.bb=lO;_.eb=mO;_.pc=nO;_.tN=AL+'AbstractConnector';_.tI=131;function rO(){rO=iL;wO=qO(new pO(),'UP');tO=qO(new pO(),'DOWN');uO=qO(new pO(),'LEFT');vO=qO(new pO(),'RIGHT');}
function qO(b,a){rO();b.a=a;return b;}
function sO(a){return a===uO||a===vO;}
function xO(){rO();return jh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',149,33,[wO,tO,uO,vO]);}
function yO(){return this.a;}
function pO(){}
_=pO.prototype=new zD();_.tS=yO;_.tN=AL+'Direction';_.tI=132;_.a=null;var tO,uO,vO,wO;function FO(){FO=iL;hP=CJ(new aJ());}
function EO(a,b){FO();gO(a);a.b=b;return a;}
function aP(){return this.b.kb();}
function bP(){var a,b;a=0;b=gk(this.b.gb());while(b!==null){if(pE('relative',hk(b,'position'))){a=Dj(b);break;}b=gk(b);}return mz(this.b)-a;}
function cP(){var a,b;a=0;b=gk(this.b.gb());while(b!==null){if(pE('relative',hk(b,'position'))){a=Ej(b);break;}b=gk(b);}return nz(this.b)-a;}
function dP(){return this.b.lb();}
function eP(a){FO();return oh(cK(hP,a),40);}
function fP(b){FO();var a;if(FJ(hP,b)){return oh(cK(hP,b),40);}else{a=EO(new zO(),b);dK(hP,b,a);return a;}}
function gP(c,b){FO();var a;if(FJ(hP,c)){return oh(cK(hP,c),40);}else{a=BO(new AO(),c,b);dK(hP,c,a);return a;}}
function zO(){}
_=zO.prototype=new eO();_.hb=aP;_.jb=bP;_.nb=cP;_.pb=dP;_.tN=AL+'UIObjectConnector';_.tI=133;_.b=null;var hP;function CO(){CO=iL;FO();}
function BO(b,a,c){CO();b.a=c;EO(b,a);return b;}
function DO(){return this.a;}
function AO(){}
_=AO.prototype=new zO();_.eb=DO;_.tN=AL+'UIObjectConnector$1';_.tI=134;function rP(e,a){a=a.replace(/[\[]/,'\\[').replace(/[\]]/,'\\]');var c='[\\?&]'+a+'=([^&#]*)';var b=new RegExp(c);var d=b.exec($wnd.location.href);if(d==null)return '';else return d[1];}
function sP(a){jg(new jP());Fk(nP(new mP(),a));}
function iP(){}
_=iP.prototype=new zD();_.tN=BL+'BaseExamplesEntryPoint';_.tI=135;function lP(e,f){var a,b,c,d;d='Uncaught exception: ';while(f!==null){c=f.c;d+=lF(f)+'\n';for(b=0;b<c.a;b++){d+='    at '+c[b]+'\n';}f=f.a;if(f!==null){d+='Caused by: ';}}a=Dq(new Bq(),true);yk(a.gb(),'backgroundColor','#ABCDEF');cF(),eF;d=uE(d,' ','&nbsp;');ar(a,'<pre>'+d+'<\/pre>');ew(a);}
function jP(){}
_=jP.prototype=new zD();_.tN=BL+'BaseExamplesEntryPoint$1';_.tI=136;function nP(b,a){b.a=a;return b;}
function pP(){AP(this.a);}
function mP(){}
_=mP.prototype=new zD();_.F=pP;_.tN=BL+'BaseExamplesEntryPoint$2';_.tI=137;function AP(c){var a,b;b=Dy(new qy());jp(ex('tabs'),b);Fy(b,CQ(new BQ()),'Rectilinear');Fy(b,yQ(new xQ()),'Bezier');Fy(b,aR(new FQ()),'Straight');Ey(b,vP(new uP(),c,b));a=rP(c,'tab');if(a===null||pE('',a)){a='0';}ez(b,FC(a));}
function tP(){}
_=tP.prototype=new iP();_.tN=BL+'GwtDiagramsExample';_.tI=138;function vP(b,a,c){b.a=c;return b;}
function xP(a,b){return true;}
function yP(b,c){var a;a=oh(bz(this.a,c),41);qQ(a);}
function uP(){}
_=uP.prototype=new zD();_.Bb=xP;_.lc=yP;_.tN=BL+'GwtDiagramsExample$1';_.tI=139;function tQ(a){a.c=ip(new hp());}
function uQ(a){var b;ox(a);tQ(a);kz(a,'gwt-diagrams-example');b=eA(new cA());qx(a,b);fA(b,a.c);fA(b,wQ(a,pQ(a)));return a;}
function wQ(e,d){var a,b,c;a=xr(new wr());kz(a,'gwt-diagrams-sources-panel');for(b=cG(d);BF(b);){c=oh(CF(b),12);yr(a,c);}return a;}
function sQ(){}
_=sQ.prototype=new hx();_.tN=CL+'AbstractExample';_.tI=140;function jQ(a){a.a=xH(new vH());}
function kQ(a){uQ(a);jQ(a);a.b=oQ(a);yk(a.c.gb(),'width','450px');yk(a.c.gb(),'height','350px');a.B();return a;}
function lQ(b,a){jp(b.c,a);zH(b.a,a);}
function nQ(e,d,c,f,a){var b;b=gv(new ev(),d);kz(b,'example-connector');kp(e.c,b,c,f);FP(e.b,b);if(a!==null){return gP(b,jh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',149,33,[a]));}return fP(b);}
function oQ(b){var a;a=DP(new CP(),b.c,true,b);return a;}
function pQ(f){var a,b,c,d,e;e=xH(new vH());b=sE(hg(f),46);a=vE(hg(f),b+1);zH(e,zu(new xu(),a+'.java',''));zH(e,zu(new xu(),'AbstractExample.java',''));zH(e,zu(new xu(),'AbstractConnectionsExample.java',''));for(d=cG(e);BF(d);){c=oh(CF(d),42);kz(c,'gwt-diagrams-source-link');Au(c,gQ(new fQ(),f,c));}return e;}
function qQ(c){var a,b;for(b=cG(c.a);BF(b);){a=oh(CF(b),39);a.zc();}}
function rQ(){var a,b,c,d,e,f,g,h;a=nQ(this,'all',50,50,null);b=nQ(this,'all',100,100,null);this.x(a,b);c=nQ(this,'up',250,50,(rO(),wO));d=nQ(this,'down',300,100,(rO(),tO));this.x(c,d);e=nQ(this,'left',50,200,(rO(),uO));f=nQ(this,'right',100,250,(rO(),vO));this.x(e,f);g=nQ(this,'left',250,200,(rO(),uO));h=nQ(this,'left',300,250,(rO(),uO));this.x(g,h);}
function BP(){}
_=BP.prototype=new sQ();_.B=rQ;_.tN=CL+'AbstractConnectionsExample';_.tI=141;_.b=null;function EP(){EP=iL;ic();}
function DP(d,a,b,c){EP();hc(d,a,b);return d;}
function FP(a,b){z(a,b);yk(b.gb(),'position','absolute');yk(b.gb(),'zIndex','100');}
function aQ(c,b,a){return cQ(new bQ(),b,a,c);}
function CP(){}
_=CP.prototype=new gc();_.tN=CL+'AbstractConnectionsExample$1';_.tI=142;function dQ(){dQ=iL;vd();}
function cQ(d,a,b,c){dQ();ud(d,a,b);return d;}
function eQ(d,c,b){var a;sc(this,d,c,b);a=eP(c);if(a!==null){jO(a);}}
function bQ(){}
_=bQ.prototype=new td();_.jc=eQ;_.tN=CL+'AbstractConnectionsExample$2';_.tI=143;function gQ(b,a,c){b.a=c;return b;}
function iQ(a){zm('../source/'+Cu(this.a),'','');}
function fQ(){}
_=fQ.prototype=new zD();_.Db=iQ;_.tN=CL+'AbstractConnectionsExample$3';_.tI=144;function yQ(a){kQ(a);return a;}
function AQ(a,b){lQ(this,sM(new qM(),a,b));}
function xQ(){}
_=xQ.prototype=new BP();_.x=AQ;_.tN=CL+'BezierExample';_.tI=145;function CQ(a){kQ(a);return a;}
function EQ(a,b){lQ(this,AM(new yM(),a,b));}
function BQ(){}
_=BQ.prototype=new BP();_.x=EQ;_.tN=CL+'RectilinearExample';_.tI=146;function aR(a){kQ(a);return a;}
function cR(c,a,b){lQ(c,bN(new aN(),a,b));}
function dR(a,b){cR(this,a,b);}
function eR(){var a,b;a=nQ(this,'connector 1',50,50,(rO(),wO));b=nQ(this,'connector 2',200,200,(rO(),tO));cR(this,a,b);}
function FQ(){}
_=FQ.prototype=new BP();_.x=dR;_.B=eR;_.tN=CL+'StraightConnectionsExample';_.tI=147;function pB(){sP(new tP());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{pB();}catch(a){b(d);}else{pB();}}
var vh=[{},{25:1},{1:1,25:1,36:1},{25:1},{25:1},{25:1},{25:1},{15:1,25:1},{25:1},{9:1,25:1,36:1},{21:1,25:1},{25:1},{7:1,25:1},{7:1,25:1},{7:1,25:1},{7:1,25:1},{25:1},{14:1,25:1},{14:1,25:1},{11:1,14:1,25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{13:1,25:1},{25:1},{25:1},{25:1},{10:1,14:1,25:1},{25:1},{18:1,25:1},{18:1,25:1},{18:1,25:1},{25:1},{13:1,17:1,25:1},{13:1,25:1},{19:1,25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1,26:1},{12:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{2:1,12:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{25:1},{25:1,29:1},{25:1,29:1},{25:1,29:1},{12:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{6:1,12:1,24:1,25:1,26:1,27:1},{6:1,12:1,16:1,24:1,25:1,26:1,27:1},{6:1,12:1,16:1,21:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{25:1},{25:1},{5:1,12:1,24:1,25:1,26:1,27:1},{12:1,25:1,26:1,27:1},{12:1,25:1,26:1,27:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{3:1,12:1,24:1,25:1,26:1,27:1},{12:1,25:1,26:1,27:1,42:1},{25:1,29:1},{2:1,12:1,22:1,24:1,25:1,26:1,27:1},{19:1,25:1},{25:1},{12:1,20:1,25:1,26:1,27:1},{25:1,29:1},{12:1,23:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{12:1,20:1,25:1,26:1,27:1},{4:1,12:1,24:1,25:1,26:1,27:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{10:1,14:1,25:1},{25:1,28:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{25:1},{10:1,14:1,25:1},{25:1},{25:1,30:1},{25:1,31:1},{25:1,31:1},{25:1},{25:1},{25:1},{25:1},{25:1,30:1},{25:1,37:1},{25:1,31:1},{25:1},{25:1,31:1},{10:1,14:1,25:1},{25:1},{25:1},{12:1,25:1,26:1,27:1,39:1},{12:1,25:1,26:1,27:1,39:1},{12:1,25:1,26:1,27:1,39:1},{12:1,25:1,26:1,27:1,39:1},{25:1},{25:1},{25:1},{25:1},{25:1,38:1},{25:1,32:1},{25:1,35:1},{25:1,33:1},{25:1,35:1,40:1},{25:1,35:1,40:1},{25:1},{25:1},{15:1,25:1},{25:1},{23:1,25:1},{6:1,12:1,24:1,25:1,26:1,27:1},{6:1,12:1,24:1,25:1,26:1,27:1,41:1},{25:1},{7:1,25:1},{20:1,25:1},{6:1,12:1,24:1,25:1,26:1,27:1,41:1},{6:1,12:1,24:1,25:1,26:1,27:1,41:1},{6:1,12:1,24:1,25:1,26:1,27:1,41:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{8:1,25:1},{25:1},{25:1},{25:1}];if (pl_balon_gwt_diagramsexample_GwtDiagramsExample) {  var __gwt_initHandlers = pl_balon_gwt_diagramsexample_GwtDiagramsExample.__gwt_initHandlers;  pl_balon_gwt_diagramsexample_GwtDiagramsExample.onScriptLoad(gwtOnLoad);}})();