(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,iL='com.allen_sauer.gwt.dragdrop.client.',jL='com.allen_sauer.gwt.dragdrop.client.drop.',kL='com.allen_sauer.gwt.dragdrop.client.util.',lL='com.allen_sauer.gwt.dragdrop.client.util.impl.',mL='com.google.gwt.core.client.',nL='com.google.gwt.lang.',oL='com.google.gwt.user.client.',pL='com.google.gwt.user.client.impl.',qL='com.google.gwt.user.client.ui.',rL='com.google.gwt.user.client.ui.impl.',sL='java.io.',tL='java.lang.',uL='java.util.',vL='pl.balon.gwt.diagrams.client.common.bezier.',wL='pl.balon.gwt.diagrams.client.connection.',xL='pl.balon.gwt.diagrams.client.connection.calculator.',yL='pl.balon.gwt.diagrams.client.connection.data.',zL='pl.balon.gwt.diagrams.client.connector.',AL='pl.balon.gwt.diagramsexample.client.',BL='pl.balon.gwt.diagramsexample.client.examples.';function hL(){}
function AD(a){return this===a;}
function BD(){return eF(this);}
function CD(){return this.tN+'@'+this.hC();}
function yD(){}
_=yD.prototype={};_.eQ=AD;_.hC=BD;_.tS=CD;_.toString=function(){return this.tS();};_.tN=tL+'Object';_.tI=1;function DI(b,a){b.d=a;return b;}
function CI(){}
_=CI.prototype=new yD();_.tN=uL+'EventObject';_.tI=3;_.d=null;function ib(c,b,a){DI(c,b);c.c=a;return c;}
function kb(){var a;a=this.c!==null?'dropTarget='+hf(this.c):'[cancelled]';return 'DragEndEvent('+a+', source='+hf(this.d)+')';}
function hb(){}
_=hb.prototype=new CI();_.tS=kb;_.tN=iL+'DragEndEvent';_.tI=4;_.c=null;function o(c,b,a,d,e){ib(c,b,a);c.a=d;c.b=e;return c;}
function q(){return 'AbsolutePositionDragEndEvent(x='+this.a+', y='+this.b+')';}
function n(){}
_=n.prototype=new hb();_.tS=q;_.tN=iL+'AbsolutePositionDragEndEvent';_.tI=5;_.a=0;_.b=0;function u(){u=hL;F=BJ(new FI());}
function s(a){a.g=x(a);}
function t(c,b,a){u();s(c);c.f=b!==null?b:Dw();c.e=zP(c,c.f,a);B(c,c.e);c.l=Bb(new zb(),c);return c;}
function v(c,a,b){kz(a,'dragdrop-dragging');}
function w(b,a){xb(b.g,b.f,a);ez(a,'dragdrop-dragging');}
function x(a){return sb(new lb());}
function y(b,c){var a;a=vb(b.g,c,b.f);return a!==null?a:b.e;}
function z(a,b){{A(a,b,b);}}
function A(c,b,a){Fb(c.l,b,a);ez(b,'dragdrop-draggable');ez(a,'dragdrop-handle');cK(F,b,a);}
function B(b,a){tb(b.g,a);}
function C(b,a){if(rh(b.j,2)){ep(qh(b.j,2),a,b.k.a,b.k.d);}else if(rh(b.j,3)){nu(qh(b.j,3),a,b.h);}else if(rh(b.j,4)){cA(qh(b.j,4),a,b.h);}else if(rh(b.j,5)){ur(qh(b.j,5),a,b.h);}else if(rh(b.j,6)){qh(b.j,6).wc(a);}else{throw FD(new DD(),'Unable to handle initialDraggableParent '+jg(b.j));}}
function D(b,a){if(b.i!==null&&sE(b.i)!=0){Ak(a.gb(),'margin',b.i);}}
function E(b,a){b.j=a.p;if(rh(b.j,2)){b.k=nf(new mf(),a,b.j);}else if(rh(b.j,3)){b.h=Ep(qh(b.j,3),a);}else if(rh(b.j,4)){b.h=Ep(qh(b.j,4),a);}else if(rh(b.j,5)){b.h=Ep(qh(b.j,5),a);}else if(rh(b.j,6)){}else{throw FD(new DD(),"Unable to handle 'initialDraggableParent instanceof "+jg(b.j)+"'; Please create your own DragController and override saveDraggableLocationAndStyle() and restoreDraggableLocation()");}b.i=jk(a.gb(),'margin');if(b.i!==null&&sE(b.i)!=0){Ak(a.gb(),'margin','0px');}}
function r(){}
_=r.prototype=new yD();_.tN=iL+'AbstractDragController';_.tI=6;_.e=null;_.f=null;_.h=0;_.i=null;_.j=null;_.k=null;_.l=null;var F;function bb(b,a){b.b=a;return b;}
function db(a){if(a.c==0){return;}Cb(a.b,a.d,a.e);a.a=cF()-a.c;a.c=0;}
function eb(a,b,c){a.d=b;a.e=c;if(a.c==0){a.c=cF();}if(a.a>80){bl(a);}else{db(a);}}
function fb(){db(this);}
function ab(){}
_=ab.prototype=new yD();_.F=fb;_.tN=iL+'DeferredMoveCommand';_.tI=7;_.a=0;_.b=null;_.c=0;_.d=0;_.e=0;function rb(a){a.a=wH(new uH());}
function sb(a){rb(a);return a;}
function tb(b,a){yH(b.a,a);}
function vb(g,h,a){var b,c,d,e,f,i,j,k;i=kf(new jf(),h,null);j=ge(i);e=null;c=2147483647;for(d=0;d<g.b.a;d++){b=g.b[d];f=b.b;if(je(f,i)){k=fe(f,j);if(k<=c){if(e===null|| !Ae(pb(b).gb(),pb(e).gb())){c=k;e=b;}}}}return e===null?null:e.a;}
function wb(a){return bG(a.a);}
function xb(h,b,d){var a,c,e,f,g;a=kf(new jf(),b,null);g=wH(new uH());for(f=wb(h);AF(f);){e=qh(BF(f),7);c=nb(new mb(),e);if(!Ae(d.gb(),pb(c).gb())){if(je(c.b,a)){yH(g,c);}}}h.b=qh(cI(g,lh('[Lcom.allen_sauer.gwt.dragdrop.client.DropControllerCollection$Candidate;',156,9,[])),8);sI(h.b);}
function lb(){}
_=lb.prototype=new yD();_.tN=iL+'DropControllerCollection';_.tI=8;_.b=null;function nb(c,a){var b;c.a=a;b=a.fb();if(!b.ub()){throw uC(new sC(),'Unattached drop target. You must call DragController#unregisterDropController for all drop targets not attached to the DOM.');}c.b=kf(new jf(),b,null);return c;}
function pb(a){return a.a.fb();}
function qb(a){var b;b=qh(a,9);return Ae(pb(this).gb(),pb(b).gb())?1:(-1);}
function mb(){}
_=mb.prototype=new yD();_.u=qb;_.tN=iL+'DropControllerCollection$Candidate';_.tI=9;_.a=null;_.b=null;function Ab(a){a.d=bb(new ab(),a);a.f=BJ(new FI());}
function Bb(b,a){Ab(b);b.e=a;b.a=a.f;return b;}
function Cb(e,f,g){var a,b,c,d;c=nf(new mf(),e.b,e.a);a=c.a+e.p+f-e.j;b=c.d+e.q+g-e.k;if(e.c){a=fD(0,gD(a,e.l));b=fD(0,gD(b,e.m));}Be(e.o.gb(),a,b);d=y(e.e,e.o);if(e.i!==d){if(e.i!==null){e.i.cc(e.g,e.e);}e.i=d;if(e.i!==null){e.i.ac(e.o,e.g,e.e);}}if(e.i!==null){e.i.jc(e.o,e.g,e.e);}}
function Db(b){var a;ok(b.b.gb());b.h=false;if(b.i!==null){b.i.cc(b.g,b.e);}b.i=null;jc(b.e,b.g,null);a=ib(new hb(),b.g,null);}
function Fb(c,b,a){if(a!==null){cv(a,c);cK(c.f,a,b);}else{throw FD(new DD(),'dragHandle must implement SourcesMouseEvents to be draggable');}}
function ac(f){var a,c,d,e;f.g=qh(bK(f.f,f.b),12);kc(f.e,f.g);f.o=f.e.d;f.l=Fe(f.a.gb())-f.o.mb();f.m=Ee(f.a.gb())-f.o.lb();e=nf(new mf(),f.b,f.a);c=nf(new mf(),f.o,f.a);f.p=c.a-e.a;f.q=c.d-e.d;tk(f.b.gb());f.h=true;try{Cb(f,f.j,f.k);}catch(a){a=Bh(a);if(rh(a,10)){d=a;Db(f);throw d;}else throw a;}}
function bc(b,c,d){var a;this.b=b;a=sj((bj(),mj));if(a!=1&&a!=(-1)){return;}this.n=true;if(this.h){return;}Dj((bj(),mj));df();this.j=c;this.k=d;}
function cc(a){}
function dc(a){}
function ec(d,e,f){var a,c;if(!this.h){if(this.n){ac(this);}if(!this.h){return;}}Dj((bj(),mj));try{eb(this.d,e,f);}catch(a){a=Bh(a);if(rh(a,10)){c=a;Db(this);throw c;}else throw a;}}
function fc(g,h,i){var a,a,d,e,f;d=sj((bj(),mj));if(d!=1&&d!=(-1)){return;}this.n=false;if(!this.h){return;}try{ok(this.b.gb());Cb(this,h,i);this.h=false;if(this.i===null){Db(this);return;}{this.i.fb();}try{this.i.kc(this.o,this.g,this.e);}catch(a){a=Bh(a);if(rh(a,11)){a;Db(this);return;}else throw a;}jc(this.e,this.g,this.i.fb());e=this.i.Fb(this.o,this.g,this.e);}catch(a){a=Bh(a);if(rh(a,10)){f=a;Db(this);throw f;}else throw a;}finally{this.i=null;}}
function zb(){}
_=zb.prototype=new yD();_.ec=bc;_.fc=cc;_.gc=dc;_.hc=ec;_.ic=fc;_.tN=iL+'MouseDragHandler';_.tI=10;_.a=null;_.b=null;_.c=false;_.e=null;_.g=null;_.h=false;_.i=null;_.j=0;_.k=0;_.l=0;_.m=0;_.n=false;_.o=null;_.p=0;_.q=0;function ic(){ic=hL;u();}
function hc(c,b,a){ic();t(c,b,a);return c;}
function jc(c,a,b){v(c,a,b);if(c.a!==null){c.a=null;if(c.c!==null){wA(c.c);c.c=null;}else{if(b===null){C(c,a);}}D(c,a);wA(c.d);c.d=null;}}
function kc(d,a){var b,c;w(d,a);d.a=a;d.c=lc(d,a);E(d,a);c=nf(new mf(),a,d.f);d.d=ix(new bx());ez(d.d,'dragdrop-movable-panel');if(d.c===null){nz(d.d,a.mb(),a.lb());}ep(d.f,d.d,c.a,c.d);b=d.c!==null?d.c:d.a;d.d.wc(b);}
function lc(c,a){var b;if(c.b){b=rt(new vr(),'this is a Drag Proxy');ez(b,'dragdrop-proxy');nz(b,c.a.mb(),c.a.lb());return b;}else{return null;}}
function gc(){}
_=gc.prototype=new r();_.tN=iL+'PickupDragController';_.tI=11;_.a=null;_.b=false;_.c=null;_.d=null;function Bc(b,a){b.g=a;ez(a,'dragdrop-boundary');return b;}
function Dc(d,c,b,a){kz(d.g,'dragdrop-dropTarget-engage dragdrop-engage');return d.xb(c,b,a);}
function Ec(d,c,b,a){ez(d.g,'dragdrop-dropTarget-engage dragdrop-engage');}
function Fc(c,b,a){kz(c.g,'dragdrop-dropTarget-engage dragdrop-engage');}
function ad(){return this.g;}
function bd(c,b,a){return ib(new hb(),b,this.g);}
function cd(c,b,a){return Dc(this,c,b,a);}
function dd(c,b,a){Ec(this,c,b,a);}
function ed(b,a){Fc(this,b,a);}
function fd(c,b,a){}
function gd(c,b,a){}
function Ac(){}
_=Ac.prototype=new yD();_.fb=ad;_.xb=bd;_.Fb=cd;_.ac=dd;_.cc=ed;_.jc=fd;_.kc=gd;_.tN=jL+'AbstractDropController';_.tI=12;_.g=null;function jd(){jd=hL;pd=av(new Eu(),'x');}
function id(b,a){jd();Bc(b,a);return b;}
function kd(f,e){var a,b,c,d;d=ix(new bx());ez(d,'dragdrop-positioner');ep(Dw(),d,(-500),(-500));d.wc(pd);a=ix(new bx());c=e.mb()-af(d);b=e.lb()-bf(d);nz(a,c,b);d.wc(a);return d;}
function ld(e,d,b,a){var c;c=Dc(e,d,b,a);od(e);return c;}
function md(d,c,b,a){Ec(d,c,b,a);d.f=kd(d,b);}
function nd(c,b,a){Fc(c,b,a);od(c);}
function od(a){if(a.f!==null){wA(a.f);}}
function qd(c,b,a){return ld(this,c,b,a);}
function rd(c,b,a){md(this,c,b,a);}
function sd(b,a){nd(this,b,a);}
function hd(){}
_=hd.prototype=new Ac();_.Fb=qd;_.ac=rd;_.cc=sd;_.tN=jL+'AbstractPositioningDropController';_.tI=13;_.f=null;var pd;function oc(){oc=hL;jd();}
function nc(b,a){oc();id(b,a);b.d=Bd(new Ad(),a);return b;}
function pc(d,c,a,e){var b;b=d.cb(c,a,e);if(b!==null){ep(d.d.b,e,b.a,b.d);}}
function qc(e,d,b,a){var c;ep(e.d.b,b,e.c.a,e.c.d);c=ld(e,d,b,a);e.e=null;return c;}
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
_=mc.prototype=new hd();_.cb=tc;_.xb=uc;_.Fb=vc;_.ac=wc;_.cc=xc;_.jc=yc;_.kc=zc;_.tN=jL+'AbsolutePositionDropController';_.tI=14;_.c=null;_.d=null;_.e=null;function vd(){vd=hL;oc();}
function ud(c,b,a){vd();nc(c,b);c.a=a;return c;}
function wd(b,a,d){var c;if(this.a){c=kf(new jf(),b,this.d.a);if(this.b===null){this.b=nf(new mf(),b,this.d.b);}else{tf(this.b,b);}pf(this.b,0,0,Ed(this.d)-ie(c),Dd(this.d)-he(c));return this.b;}else{return null;}}
function xd(d,c,a){var b;b=qc(this,d,c,a);this.b=null;return b;}
function yd(b,a){rc(this,b,a);this.b=null;}
function td(){}
_=td.prototype=new mc();_.cb=wd;_.Fb=xd;_.cc=yd;_.tN=jL+'BoundaryDropController';_.tI=15;_.a=false;_.b=null;function Bd(b,a){b.b=a;return b;}
function Dd(a){return Ee(a.b.gb());}
function Ed(a){return Fe(a.b.gb());}
function Fd(b,a){b.a=a;}
function Ad(){}
_=Ad.prototype=new yD();_.tN=jL+'DropTargetInfo';_.tI=16;_.a=null;_.b=null;function jF(){jF=hL;lF=kh('[Ljava.lang.StackTraceElement;',[151],[33],[0],null);}
function gF(a){a.c=lF;}
function hF(a){jF();gF(a);return a;}
function iF(b,a){jF();gF(b);b.b=a;return b;}
function kF(c){var a,b;a=jg(c);b=c.b;if(b!==null){return a+': '+b;}else{return a;}}
function mF(){return kF(this);}
function fF(){}
_=fF.prototype=new yD();_.tS=mF;_.tN=tL+'Throwable';_.tI=17;_.a=null;_.b=null;var lF;function oC(){oC=hL;jF();}
function mC(a){oC();hF(a);return a;}
function nC(b,a){oC();iF(b,a);return b;}
function lC(){}
_=lC.prototype=new fF();_.tN=tL+'Exception';_.tI=18;function ce(){ce=hL;oC();}
function be(a){ce();mC(a);return a;}
function ae(){}
_=ae.prototype=new lC();_.tN=jL+'VetoDropException';_.tI=19;function fe(b,a){var c,d;c=fD(b.b-a.a,a.a-b.c);d=fD(b.d-a.b,a.b-b.a);return fD(c,d);}
function ge(a){return ue(new te(),a.b+uh(ie(a)/2),a.d+uh(he(a)/2));}
function he(a){return a.a-a.d;}
function ie(a){return a.c-a.b;}
function je(b,a){if(b.c<a.b||b.b>a.c||b.a<a.d||b.d>a.a){return false;}return true;}
function ke(b,a){b.a=a;}
function le(b,a){b.b=a;}
function me(b,a){b.c=a;}
function ne(a,b){a.d=b;}
function oe(){return '[ ('+this.b+', '+this.d+') - ('+this.c+', '+this.a+') ]';}
function de(){}
_=de.prototype=new yD();_.tS=oe;_.tN=kL+'AbstractArea';_.tI=20;_.a=0;_.b=0;_.c=0;_.d=0;function re(){return '('+this.kb()+', '+this.ob()+')';}
function pe(){}
_=pe.prototype=new yD();_.tS=re;_.tN=kL+'AbstractLocation';_.tI=21;function ue(b,a,c){b.a=a;b.b=c;return b;}
function we(){return this.a;}
function xe(){return this.b;}
function te(){}
_=te.prototype=new pe();_.kb=we;_.ob=xe;_.tN=kL+'CoordinateLocation';_.tI=22;_.a=0;_.b=0;function ze(){ze=hL;{cf=new yf();}}
function Ae(b,a){ze();return Af(cf,b,a);}
function Be(a,b,c){ze();a.style.left=b+'px';a.style.top=c+'px';}
function Ce(a){ze();return Df(cf,a);}
function De(a){ze();return Ef(cf,a);}
function Ee(a){ze();return Ff(cf,a);}
function Fe(a){ze();return ag(cf,a);}
function af(a){ze();return dg(cf,a);}
function bf(a){ze();return eg(cf,a);}
function df(){ze();bg(cf);}
var cf=null;function hf(a){var b;b=jg(a);return uE(b,rE(b,46)+1);}
function kf(e,g,c){var a,b,d,f;b=gz(g);f=hz(g);if(c!==null){b-=gz(c);b-=Ce(c.gb());f-=hz(c);f-=De(c.gb());}d=b+g.mb();a=f+g.lb();le(e,b);ne(e,f);me(e,d);ke(e,a);return e;}
function jf(){}
_=jf.prototype=new de();_.tN=kL+'WidgetArea';_.tI=23;function nf(b,c,a){rf(b,c);qf(b,a);sf(b);return b;}
function pf(e,c,d,a,b){e.a=fD(c,gD(e.a,a));e.d=fD(d,gD(e.d,b));}
function qf(b,a){if(a===null||a===Dw()){b.b=0;b.c=0;}else{b.b=gz(a)+Ce(a.gb());b.c=hz(a)+De(a.gb());}}
function rf(a,b){if(b===null){a.e=0;a.f=0;}else{a.e=gz(b);a.f=hz(b);}}
function sf(a){a.a=a.e-a.b;a.d=a.f-a.c;}
function tf(a,b){rf(a,b);sf(a);}
function uf(){return this.a;}
function vf(){return this.d;}
function wf(){return '('+this.a+', '+this.d+')';}
function mf(){}
_=mf.prototype=new pe();_.kb=uf;_.ob=vf;_.tS=wf;_.tN=kL+'WidgetLocation';_.tI=24;_.a=0;_.b=0;_.c=0;_.d=0;_.e=0;_.f=0;function dg(a,b){return b.mb()-ag(a,b.gb());}
function eg(a,b){return b.lb()-Ff(a,b.gb());}
function xf(){}
_=xf.prototype=new yD();_.tN=lL+'DOMUtilImpl';_.tI=25;function Df(e,d){try{var c=$doc.defaultView.getComputedStyle(d,null);var b=c.getPropertyValue('border-left-width');return b.indexOf('px')== -1?0:parseInt(b.substr(0,b.length-2));}catch(a){throw new Error('getBorderLeft exception:\n'+a);}}
function Ef(e,d){try{var c=$doc.defaultView.getComputedStyle(d,null);var b=c.getPropertyValue('border-top-width');return b.indexOf('px')== -1?0:parseInt(b.substr(0,b.length-2));}catch(a){throw new Error('getBorderTop: '+a);}}
function Ff(c,b){try{return b.clientHeight;}catch(a){throw new Error('getClientHeight exception:\n'+a);}}
function ag(c,b){try{return b.clientWidth;}catch(a){throw new Error('getClientWidth exception:\n'+a);}}
function bg(b){try{$wnd.getSelection().removeAllRanges();}catch(a){throw new Error('unselect exception:\n'+a);}}
function Bf(){}
_=Bf.prototype=new xf();_.tN=lL+'DOMUtilImplStandard';_.tI=26;function Af(c,b,a){return !(!(b.compareDocumentPosition(a)&16));}
function yf(){}
_=yf.prototype=new Bf();_.tN=lL+'DOMUtilImplMozilla';_.tI=27;function jg(a){return a==null?null:a.tN;}
function lg(a){kg=a;}
var kg=null;function og(a){return a==null?0:a.$H?a.$H:(a.$H=qg());}
function pg(a){return a==null?0:a.$H?a.$H:(a.$H=qg());}
function qg(){return ++rg;}
var rg=0;function aE(){aE=hL;oC();}
function ED(a){aE();mC(a);return a;}
function FD(b,a){aE();nC(b,a);return b;}
function DD(){}
_=DD.prototype=new lC();_.tN=tL+'RuntimeException';_.tI=28;function ug(){ug=hL;aE();}
function tg(c,b,a){ug();FD(c,'JavaScript '+b+' exception: '+a);return c;}
function sg(){}
_=sg.prototype=new DD();_.tN=mL+'JavaScriptException';_.tI=29;function xg(b,a){if(!rh(a,13)){return false;}return Bg(b,qh(a,13));}
function yg(a){return og(a);}
function zg(){return [];}
function Ag(){return {};}
function Cg(a){return xg(this,a);}
function Bg(a,b){return a===b;}
function Dg(){return yg(this);}
function Fg(){return Eg(this);}
function Eg(a){if(a.toString)return a.toString();return '[object]';}
function vg(){}
_=vg.prototype=new yD();_.eQ=Cg;_.hC=Dg;_.tS=Fg;_.tN=mL+'JavaScriptObject';_.tI=30;function bh(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function dh(a,b,c){return a[b]=c;}
function fh(a,b){return eh(a,b);}
function eh(a,b){return bh(new ah(),b,a.tI,a.b,a.tN);}
function gh(b,a){return b[a];}
function ih(b,a){return b[a];}
function hh(a){return a.length;}
function kh(e,d,c,b,a){return jh(e,d,c,b,0,hh(b),a);}
function jh(j,i,g,c,e,a,b){var d,f,h;if((f=gh(c,e))<0){throw jD(new iD());}h=bh(new ah(),f,gh(i,e),gh(g,e),j);++e;if(e<a){j=uE(j,1);for(d=0;d<f;++d){dh(h,d,jh(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){dh(h,d,b);}}return h;}
function lh(f,e,c,g){var a,b,d;b=hh(g);d=bh(new ah(),b,e,c,f);for(a=0;a<b;++a){dh(d,a,ih(g,a));}return d;}
function mh(a,b,c){if(c!==null&&a.b!=0&& !rh(c,a.b)){throw wB(new vB());}return dh(a,b,c);}
function ah(){}
_=ah.prototype=new yD();_.tN=nL+'Array';_.tI=31;function ph(b,a){return !(!(b&&xh[b][a]));}
function qh(b,a){if(b!=null)ph(b.tI,a)||wh();return b;}
function rh(b,a){return b!=null&&ph(b.tI,a);}
function sh(a){return a&65535;}
function th(a){return ~(~a);}
function uh(a){if(a>(BC(),CC))return BC(),CC;if(a<(BC(),DC))return BC(),DC;return a>=0?Math.floor(a):Math.ceil(a);}
function wh(){throw gC(new fC());}
function vh(a){if(a!==null){throw gC(new fC());}return a;}
function yh(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var xh;function Bh(a){if(rh(a,14)){return a;}return tg(new sg(),Dh(a),Ch(a));}
function Ch(a){return a.message;}
function Dh(a){return a.name;}
function ai(){ai=hL;aE();}
function Fh(b,a){ai();ED(b);return b;}
function Eh(){}
_=Eh.prototype=new DD();_.tN=oL+'CommandCanceledException';_.tI=34;function vi(a){a.a=di(new ci(),a);a.b=wH(new uH());a.d=hi(new gi(),a);a.f=li(new ki(),a);}
function wi(a){vi(a);return a;}
function yi(c){var a,b,d;a=ni(c.f);qi(c.f);b=null;if(rh(a,15)){b=Fh(new Eh(),qh(a,15));}else{}if(b!==null){d=kg;if(d!==null){eP(d,b);}}Bi(c,false);Ai(c);}
function zi(e,d){var a,b,c,f;f=false;try{Bi(e,true);ri(e.f,e.b.b);bm(e.a,10000);while(oi(e.f)){b=pi(e.f);c=true;try{if(b===null){return;}if(rh(b,15)){a=qh(b,15);a.F();}else{}}finally{f=si(e.f);if(f){return;}if(c){qi(e.f);}}if(Ei(cF(),d)){return;}}}finally{if(!f){Dl(e.a);Bi(e,false);Ai(e);}}}
function Ai(a){if(!EH(a.b)&& !a.e&& !a.c){Ci(a,true);bm(a.d,1);}}
function Bi(b,a){b.c=a;}
function Ci(b,a){b.e=a;}
function Di(b,a){yH(b.b,a);Ai(b);}
function Ei(a,b){return eD(a-b)>=100;}
function bi(){}
_=bi.prototype=new yD();_.tN=oL+'CommandExecutor';_.tI=35;_.c=false;_.e=false;function El(){El=hL;hm=wH(new uH());{gm();}}
function Cl(a){El();return a;}
function Dl(a){if(a.b){cm(a.c);}else{dm(a.c);}aI(hm,a);}
function Fl(e,d){var a,c;try{am(e);}catch(a){a=Bh(a);if(rh(a,14)){c=a;eP(d,c);}else throw a;}}
function am(a){if(!a.b){aI(hm,a);}a.sc();}
function bm(b,a){if(a<=0){throw qC(new pC(),'must be positive');}Dl(b);b.b=false;b.c=em(b,a);yH(hm,b);}
function cm(a){El();$wnd.clearInterval(a);}
function dm(a){El();$wnd.clearTimeout(a);}
function em(b,a){El();return $wnd.setTimeout(function(){b.ab();},a);}
function fm(){var a;a=kg;if(a!==null){Fl(this,a);}else{am(this);}}
function gm(){El();lm(new yl());}
function xl(){}
_=xl.prototype=new yD();_.ab=fm;_.tN=oL+'Timer';_.tI=36;_.b=false;_.c=0;var hm;function ei(){ei=hL;El();}
function di(b,a){ei();b.a=a;Cl(b);return b;}
function fi(){if(!this.a.c){return;}yi(this.a);}
function ci(){}
_=ci.prototype=new xl();_.sc=fi;_.tN=oL+'CommandExecutor$1';_.tI=37;function ii(){ii=hL;El();}
function hi(b,a){ii();b.a=a;Cl(b);return b;}
function ji(){Ci(this.a,false);zi(this.a,cF());}
function gi(){}
_=gi.prototype=new xl();_.sc=ji;_.tN=oL+'CommandExecutor$2';_.tI=38;function li(b,a){b.d=a;return b;}
function ni(a){return BH(a.d.b,a.b);}
function oi(a){return a.c<a.a;}
function pi(b){var a;b.b=b.c;a=BH(b.d.b,b.c++);if(b.c>=b.a){b.c=0;}return a;}
function qi(a){FH(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0;}}a.b=(-1);}
function ri(b,a){b.a=a;}
function si(a){return a.b==(-1);}
function ti(){return oi(this);}
function ui(){return pi(this);}
function ki(){}
_=ki.prototype=new yD();_.tb=ti;_.yb=ui;_.tN=oL+'CommandExecutor$CircularIterator';_.tI=39;_.a=0;_.b=(-1);_.c=0;function bj(){bj=hL;sk=wH(new uH());{kk=new Em();fn(kk);}}
function cj(a){bj();yH(sk,a);}
function dj(b,a){bj();zn(kk,b,a);}
function ej(a,b){bj();return an(kk,a,b);}
function fj(){bj();return Bn(kk,'A');}
function gj(){bj();return Bn(kk,'div');}
function hj(a){bj();return Bn(kk,a);}
function ij(){bj();return Bn(kk,'tbody');}
function jj(){bj();return Bn(kk,'td');}
function kj(){bj();return Bn(kk,'tr');}
function lj(){bj();return Bn(kk,'table');}
function pj(b,a,d){bj();var c;c=kg;if(c!==null){nj(b,a,d,c);}else{oj(b,a,d);}}
function nj(e,d,g,f){bj();var a,c;try{oj(e,d,g);}catch(a){a=Bh(a);if(rh(a,14)){c=a;eP(f,c);}else throw a;}}
function oj(b,a,c){bj();var d;if(a===rk){if(Cj(b)==8192){rk=null;}}d=mj;mj=b;try{c.Cb(b);}finally{mj=d;}}
function qj(b,a){bj();Cn(kk,b,a);}
function rj(a){bj();return Dn(kk,a);}
function sj(a){bj();return bn(kk,a);}
function tj(a){bj();return En(kk,a);}
function uj(a){bj();return Fn(kk,a);}
function vj(a){bj();return ao(kk,a);}
function wj(a){bj();return on(kk,a);}
function xj(a){bj();return bo(kk,a);}
function yj(a){bj();return co(kk,a);}
function zj(a){bj();return eo(kk,a);}
function Aj(a){bj();return pn(kk,a);}
function Bj(a){bj();return qn(kk,a);}
function Cj(a){bj();return fo(kk,a);}
function Dj(a){bj();rn(kk,a);}
function Ej(a){bj();return sn(kk,a);}
function Fj(a){bj();return cn(kk,a);}
function ak(a){bj();return dn(kk,a);}
function bk(b,a){bj();return go(kk,b,a);}
function ck(a){bj();return ho(kk,a);}
function ek(a,b){bj();return jo(kk,a,b);}
function dk(a,b){bj();return io(kk,a,b);}
function fk(a){bj();return ko(kk,a);}
function gk(a){bj();return tn(kk,a);}
function hk(a){bj();return lo(kk,a);}
function ik(a){bj();return un(kk,a);}
function jk(b,a){bj();return mo(kk,b,a);}
function lk(c,a,b){bj();wn(kk,c,a,b);}
function mk(b,a){bj();return gn(kk,b,a);}
function nk(a){bj();var b,c;c=true;if(sk.b>0){b=qh(BH(sk,sk.b-1),16);if(!(c=b.bc(a))){qj(a,true);Dj(a);}}return c;}
function ok(a){bj();if(rk!==null&&ej(a,rk)){rk=null;}hn(kk,a);}
function pk(b,a){bj();no(kk,b,a);}
function qk(a){bj();aI(sk,a);}
function tk(a){bj();rk=a;xn(kk,a);}
function uk(b,a,c){bj();oo(kk,b,a,c);}
function wk(a,b,c){bj();qo(kk,a,b,c);}
function vk(a,b,c){bj();po(kk,a,b,c);}
function xk(a,b){bj();ro(kk,a,b);}
function yk(a,b){bj();so(kk,a,b);}
function zk(a,b){bj();to(kk,a,b);}
function Ak(b,a,c){bj();uo(kk,b,a,c);}
function Bk(a,b){bj();kn(kk,a,b);}
function Ck(a){bj();return ln(kk,a);}
function Dk(){bj();return vo(kk);}
function Ek(){bj();return wo(kk);}
var mj=null,kk=null,rk=null,sk;function al(){al=hL;cl=wi(new bi());}
function bl(a){al();if(a===null){throw mD(new lD(),'cmd can not be null');}Di(cl,a);}
var cl;function fl(a){if(rh(a,17)){return ej(this,qh(a,17));}return xg(yh(this,dl),a);}
function gl(){return yg(yh(this,dl));}
function hl(){return Ck(this);}
function dl(){}
_=dl.prototype=new vg();_.eQ=fl;_.hC=gl;_.tS=hl;_.tN=oL+'Element';_.tI=40;function ml(a){return xg(yh(this,il),a);}
function nl(){return yg(yh(this,il));}
function ol(){return Ej(this);}
function il(){}
_=il.prototype=new vg();_.eQ=ml;_.hC=nl;_.tS=ol;_.tN=oL+'Event';_.tI=41;function ql(){ql=hL;tl=wH(new uH());{ul=new zo();if(!Eo(ul)){ul=null;}}}
function rl(e,d){ql();var a,c;try{sl(e);}catch(a){a=Bh(a);if(rh(a,14)){c=a;eP(d,c);}else throw a;}}
function sl(a){ql();var b,c;for(b=bG(tl);AF(b);){c=vh(BF(b));null.Cc();}}
function vl(a){ql();if(ul!==null){Bo(ul,a);}}
function wl(b){ql();var a;a=kg;if(a!==null){rl(b,a);}else{sl(b);}}
var tl,ul=null;function Al(){while((El(),hm).b>0){Dl(qh(BH((El(),hm),0),18));}}
function Bl(){return null;}
function yl(){}
_=yl.prototype=new yD();_.nc=Al;_.oc=Bl;_.tN=oL+'Timer$1';_.tI=42;function km(){km=hL;mm=wH(new uH());Cm=wH(new uH());{xm();}}
function lm(a){km();yH(mm,a);}
function nm(d){km();var a,c;try{om();}catch(a){a=Bh(a);if(rh(a,14)){c=a;eP(d,c);}else throw a;}}
function om(){km();var a,b;for(a=bG(mm);AF(a);){b=qh(BF(a),19);b.nc();}}
function pm(d){km();var a,c;try{return qm();}catch(a){a=Bh(a);if(rh(a,14)){c=a;eP(d,c);return null;}else throw a;}}
function qm(){km();var a,b,c,d;d=null;for(a=bG(mm);AF(a);){b=qh(BF(a),19);c=b.oc();{d=c;}}return d;}
function rm(d){km();var a,c;try{sm();}catch(a){a=Bh(a);if(rh(a,14)){c=a;eP(d,c);}else throw a;}}
function sm(){km();var a,b;for(a=bG(Cm);AF(a);){b=vh(BF(a));null.Cc();}}
function tm(){km();return Dk();}
function um(){km();return Ek();}
function vm(){km();return $doc.documentElement.scrollLeft||$doc.body.scrollLeft;}
function wm(){km();return $doc.documentElement.scrollTop||$doc.body.scrollTop;}
function xm(){km();__gwt_initHandlers(function(){Am();},function(){return zm();},function(){ym();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function ym(){km();var a;a=kg;if(a!==null){nm(a);}else{om();}}
function zm(){km();var a;a=kg;if(a!==null){return pm(a);}else{return qm();}}
function Am(){km();var a;a=kg;if(a!==null){rm(a);}else{sm();}}
function Bm(c,b,a){km();$wnd.open(c,b,a);}
var mm,Cm;function zn(c,b,a){b.appendChild(a);}
function Bn(b,a){return $doc.createElement(a);}
function Cn(c,b,a){b.cancelBubble=a;}
function Dn(b,a){return !(!a.altKey);}
function En(b,a){return a.clientX|| -1;}
function Fn(b,a){return a.clientY|| -1;}
function ao(b,a){return !(!a.ctrlKey);}
function bo(b,a){return a.which||(a.keyCode|| -1);}
function co(b,a){return !(!a.metaKey);}
function eo(b,a){return !(!a.shiftKey);}
function fo(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function go(d,b,a){var c=b.getAttribute(a);return c==null?null:c;}
function ho(c,b){var a=$doc.getElementById(b);return a||null;}
function jo(d,a,b){var c=a[b];return c==null?null:String(c);}
function io(d,a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function ko(b,a){return a.__eventBits||0;}
function lo(d,b){var c='',a=b.firstChild;while(a){if(a.nodeType==1){c+=d.ib(a);}else if(a.nodeValue){c+=a.nodeValue;}a=a.nextSibling;}return c;}
function mo(d,b,a){var c=b.style[a];return c==null?null:c;}
function no(c,b,a){b.removeChild(a);}
function oo(c,b,a,d){b.setAttribute(a,d);}
function qo(c,a,b,d){a[b]=d;}
function po(c,a,b,d){a[b]=d;}
function ro(c,a,b){a.__listener=b;}
function so(c,a,b){if(!b){b='';}a.innerHTML=b;}
function to(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function uo(c,b,a,d){b.style[a]=d;}
function vo(a){return $doc.body.clientHeight;}
function wo(a){return $doc.body.clientWidth;}
function xo(a){return lo(this,a);}
function Dm(){}
_=Dm.prototype=new yD();_.ib=xo;_.tN=pL+'DOMImpl';_.tI=43;function on(b,a){return a.relatedTarget?a.relatedTarget:null;}
function pn(b,a){return a.target||null;}
function qn(b,a){return a.relatedTarget||null;}
function rn(b,a){a.preventDefault();}
function sn(b,a){return a.toString();}
function tn(c,b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a||null;}
function un(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function vn(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){pj(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!nk(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)pj(b,a,c);};$wnd.__captureElem=null;}
function wn(f,e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break;}++c;}b=b.nextSibling;}e.insertBefore(g,a);}
function xn(b,a){$wnd.__captureElem=a;}
function yn(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function mn(){}
_=mn.prototype=new Dm();_.tN=pL+'DOMImplStandard';_.tI=44;function an(c,a,b){if(!a&& !b){return true;}else if(!a|| !b){return false;}return a.isSameNode(b);}
function bn(c,b){var a=b.button;if(a==0){return 1;}else if(a==1){return 4;}return a|| -1;}
function cn(b,a){return $doc.getBoxObjectFor(a).screenX-$doc.getBoxObjectFor($doc.documentElement).screenX;}
function dn(b,a){return $doc.getBoxObjectFor(a).screenY-$doc.getBoxObjectFor($doc.documentElement).screenY;}
function fn(a){vn(a);en(a);}
function en(d){$wnd.addEventListener('mouseout',function(b){var a=$wnd.__captureElem;if(a&& !b.relatedTarget){if('html'==b.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c);}}},true);$wnd.addEventListener('DOMMouseScroll',$wnd.__dispatchCapturedMouseEvent,true);}
function gn(d,c,b){while(b){if(c.isSameNode(b)){return true;}try{b=b.parentNode;}catch(a){return false;}if(b&&b.nodeType!=1){b=null;}}return false;}
function hn(b,a){if(a.isSameNode($wnd.__captureElem)){$wnd.__captureElem=null;}}
function kn(c,b,a){yn(c,b,a);jn(c,b,a);}
function jn(c,b,a){if(a&131072){b.addEventListener('DOMMouseScroll',$wnd.__dispatchEvent,false);}}
function ln(d,a){var b=a.cloneNode(true);var c=$doc.createElement('DIV');c.appendChild(b);outer=c.innerHTML;b.innerHTML='';return outer;}
function Em(){}
_=Em.prototype=new mn();_.tN=pL+'DOMImplMozilla';_.tI=45;function ap(a){wl(a);}
function yo(){}
_=yo.prototype=new yD();_.tN=pL+'HistoryImpl';_.tI=46;function Eo(d){$wnd.__gwt_historyToken='';var c=$wnd.location.hash;if(c.length>0)$wnd.__gwt_historyToken=c.substring(1);$wnd.__checkHistory=function(){var b='',a=$wnd.location.hash;if(a.length>0)b=a.substring(1);if(b!=$wnd.__gwt_historyToken){$wnd.__gwt_historyToken=b;ap(b);}$wnd.setTimeout('__checkHistory()',250);};$wnd.__checkHistory();return true;}
function Co(){}
_=Co.prototype=new yo();_.tN=pL+'HistoryImplStandard';_.tI=47;function Bo(d,a){if(a==null||a.length==0){var c=$wnd.location.href;var b=c.indexOf('#');if(b!= -1)c=c.substring(0,b);$wnd.location=c+'#';}else{$wnd.location.hash=encodeURIComponent(a);}}
function zo(){}
_=zo.prototype=new Co();_.tN=pL+'HistoryImplMozilla';_.tI=48;function ez(b,a){xz(b.nb(),a,true);}
function gz(a){return Fj(a.gb());}
function hz(a){return ak(a.gb());}
function iz(a){return dk(a.q,'offsetHeight');}
function jz(a){return dk(a.q,'offsetWidth');}
function kz(b,a){xz(b.nb(),a,false);}
function lz(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function mz(b,a){if(b.q!==null){lz(b,b.q,a);}b.q=a;}
function nz(b,c,a){if(c>=0){b.xc(c+'px');}if(a>=0){b.tc(a+'px');}}
function oz(b,a){wz(b.nb(),a);}
function pz(b,a){Bk(b.gb(),a|fk(b.gb()));}
function qz(){return this.q;}
function rz(){return iz(this);}
function sz(){return jz(this);}
function tz(){return this.q;}
function uz(a){return ek(a,'className');}
function vz(a){Ak(this.q,'height',a);}
function wz(a,b){wk(a,'className',b);}
function xz(c,j,a){var b,d,e,f,g,h,i;if(c===null){throw FD(new DD(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}j=wE(j);if(sE(j)==0){throw qC(new pC(),'Style names cannot be empty');}i=uz(c);e=pE(i,j);while(e!=(-1)){if(e==0||lE(i,e-1)==32){f=e+sE(j);g=sE(i);if(f==g||f<g&&lE(i,f)==32){break;}}e=qE(i,j,e+1);}if(a){if(e==(-1)){if(sE(i)>0){i+=' ';}wk(c,'className',i+j);}}else{if(e!=(-1)){b=wE(vE(i,0,e));d=wE(uE(i,e+sE(j)));if(sE(b)==0){h=d;}else if(sE(d)==0){h=b;}else{h=b+' '+d;}wk(c,'className',h);}}}
function yz(a,b){a.style.display=b?'':'none';}
function zz(a){yz(this.q,a);}
function Az(a){Ak(this.q,'width',a);}
function Bz(){if(this.q===null){return '(null handle)';}return Ck(this.q);}
function dz(){}
_=dz.prototype=new yD();_.gb=qz;_.lb=rz;_.mb=sz;_.nb=tz;_.tc=vz;_.vc=zz;_.xc=Az;_.tS=Bz;_.tN=qL+'UIObject';_.tI=49;_.q=null;function vA(a){if(!a.ub()){throw uC(new sC(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.mc();}finally{a.D();xk(a.gb(),null);a.o=false;}}
function wA(a){if(rh(a.p,24)){qh(a.p,24).rc(a);}else if(a.p!==null){throw uC(new sC(),"This widget's parent does not implement HasWidgets");}}
function xA(b,a){if(b.ub()){xk(b.gb(),null);}mz(b,a);if(b.ub()){xk(a,b);}}
function yA(c,b){var a;a=c.p;if(b===null){if(a!==null&&a.ub()){c.Eb();}c.p=null;}else{if(a!==null){throw uC(new sC(),'Cannot set a new parent without first clearing the old parent');}c.p=b;if(b.ub()){c.Ab();}}}
function zA(){}
function AA(){}
function BA(){return this.o;}
function CA(){if(this.ub()){throw uC(new sC(),"Should only call onAttach when the widget is detached from the browser's document");}this.o=true;xk(this.gb(),this);this.C();this.dc();}
function DA(a){}
function EA(){vA(this);}
function FA(){}
function aB(){}
function eA(){}
_=eA.prototype=new dz();_.C=zA;_.D=AA;_.ub=BA;_.Ab=CA;_.Cb=DA;_.Eb=EA;_.dc=FA;_.mc=aB;_.tN=qL+'Widget';_.tI=50;_.o=false;_.p=null;function sv(b,a){yA(a,b);}
function uv(b,a){yA(a,null);}
function vv(){var a,b;for(b=this.vb();b.tb();){a=qh(b.yb(),12);a.Ab();}}
function wv(){var a,b;for(b=this.vb();b.tb();){a=qh(b.yb(),12);a.Eb();}}
function xv(){}
function yv(){}
function rv(){}
_=rv.prototype=new eA();_.C=vv;_.D=wv;_.dc=xv;_.mc=yv;_.tN=qL+'Panel';_.tI=51;function xp(a){a.f=lA(new fA(),a);}
function yp(a){xp(a);return a;}
function zp(c,a,b){wA(a);mA(c.f,a);dj(b,a.gb());sv(c,a);}
function Ap(d,b,a){var c;Cp(d,a);if(b.p===d){c=Ep(d,b);if(c<a){a--;}}return a;}
function Bp(b,a){if(a<0||a>=b.f.b){throw xC(new wC());}}
function Cp(b,a){if(a<0||a>b.f.b){throw xC(new wC());}}
function Fp(b,a){return oA(b.f,a);}
function Ep(b,a){return pA(b.f,a);}
function aq(e,b,c,a,d){a=Ap(e,b,a);wA(b);qA(e.f,b,a);if(d){lk(c,b.gb(),a);}else{dj(c,b.gb());}sv(e,b);}
function bq(a){return rA(a.f);}
function cq(b,c){var a;if(c.p!==b){return false;}uv(b,c);a=c.gb();pk(ik(a),a);tA(b.f,c);return true;}
function dq(){return bq(this);}
function eq(a){return cq(this,a);}
function wp(){}
_=wp.prototype=new rv();_.vb=dq;_.rc=eq;_.tN=qL+'ComplexPanel';_.tI=52;function cp(a){yp(a);xA(a,gj());Ak(a.gb(),'position','relative');Ak(a.gb(),'overflow','hidden');return a;}
function dp(a,b){zp(a,b,a.gb());}
function ep(b,d,a,c){wA(d);hp(b,d,a,c);dp(b,d);}
function gp(b,c){var a;a=cq(b,c);if(a){ip(c.gb());}return a;}
function hp(c,e,b,d){var a;a=e.gb();if(b==(-1)&&d==(-1)){ip(a);}else{Ak(a,'position','absolute');Ak(a,'left',b+'px');Ak(a,'top',d+'px');}}
function ip(a){Ak(a,'left','');Ak(a,'top','');Ak(a,'position','');}
function jp(a){return gp(this,a);}
function bp(){}
_=bp.prototype=new wp();_.rc=jp;_.tN=qL+'AbsolutePanel';_.tI=53;function lp(a){yp(a);a.e=lj();a.d=ij();dj(a.e,a.d);xA(a,a.e);return a;}
function np(c,d,a){var b;b=ik(d.gb());wk(b,'height',a);}
function op(c,b,a){wk(b,'align',a.a);}
function pp(c,b,a){Ak(b,'verticalAlign',a.a);}
function qp(b,c,d){var a;a=ik(c.gb());wk(a,'width',d);}
function kp(){}
_=kp.prototype=new wp();_.tN=qL+'CellPanel';_.tI=54;_.d=null;_.e=null;function rF(d,a,b){var c;while(a.tb()){c=a.yb();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function tF(a){throw oF(new nF(),'add');}
function uF(b){var a;a=rF(this,this.vb(),b);return a!==null;}
function vF(){var a,b,c;c=dE(new cE());a=null;eE(c,'[');b=this.vb();while(b.tb()){if(a!==null){eE(c,a);}else{a=', ';}eE(c,FE(b.yb()));}eE(c,']');return iE(c);}
function qF(){}
_=qF.prototype=new yD();_.s=tF;_.z=uF;_.tS=vF;_.tN=uL+'AbstractCollection';_.tI=55;function aG(b,a){throw yC(new wC(),'Index: '+a+', Size: '+b.b);}
function bG(a){return yF(new xF(),a);}
function cG(b,a){throw oF(new nF(),'add');}
function dG(a){this.r(this.yc(),a);return true;}
function eG(e){var a,b,c,d,f;if(e===this){return true;}if(!rh(e,29)){return false;}f=qh(e,29);if(this.yc()!=f.yc()){return false;}c=bG(this);d=f.vb();while(AF(c)){a=BF(c);b=BF(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function fG(){var a,b,c,d;c=1;a=31;b=bG(this);while(AF(b)){d=BF(b);c=31*c+(d===null?0:d.hC());}return c;}
function gG(){return bG(this);}
function hG(a){throw oF(new nF(),'remove');}
function wF(){}
_=wF.prototype=new qF();_.r=cG;_.s=dG;_.eQ=eG;_.hC=fG;_.vb=gG;_.qc=hG;_.tN=uL+'AbstractList';_.tI=56;function vH(a){{zH(a);}}
function wH(a){vH(a);return a;}
function yH(b,a){mI(b.a,b.b++,a);return true;}
function xH(d,a){var b,c;c=a.vb();b=c.tb();while(c.tb()){mI(d.a,d.b++,c.yb());}return b;}
function zH(a){a.a=zg();a.b=0;}
function BH(b,a){if(a<0||a>=b.b){aG(b,a);}return iI(b.a,a);}
function CH(b,a){return DH(b,a,0);}
function DH(c,b,a){if(a<0){aG(c,a);}for(;a<c.b;++a){if(hI(b,iI(c.a,a))){return a;}}return (-1);}
function EH(a){return a.b==0;}
function FH(c,a){var b;b=BH(c,a);kI(c.a,a,1);--c.b;return b;}
function aI(c,b){var a;a=CH(c,b);if(a==(-1)){return false;}FH(c,a);return true;}
function bI(d,a,b){var c;c=BH(d,a);mI(d.a,a,b);return c;}
function cI(c,a){var b;if(a.a<c.b){a=fh(a,c.b);}for(b=0;b<c.b;++b){mh(a,b,iI(c.a,b));}if(a.a>c.b){mh(a,c.b,null);}return a;}
function eI(a,b){if(a<0||a>this.b){aG(this,a);}dI(this.a,a,b);++this.b;}
function fI(a){return yH(this,a);}
function dI(a,b,c){a.splice(b,0,c);}
function gI(a){return CH(this,a)!=(-1);}
function hI(a,b){return a===b||a!==null&&a.eQ(b);}
function jI(a){return BH(this,a);}
function iI(a,b){return a[b];}
function lI(a){return FH(this,a);}
function kI(a,c,b){a.splice(c,b);}
function mI(a,b,c){a[b]=c;}
function nI(){return this.b;}
function uH(){}
_=uH.prototype=new wF();_.r=eI;_.s=fI;_.z=gI;_.rb=jI;_.qc=lI;_.yc=nI;_.tN=uL+'ArrayList';_.tI=57;_.a=null;_.b=0;function sp(a){wH(a);return a;}
function up(d,c){var a,b;for(a=bG(d);AF(a);){b=qh(BF(a),20);b.Db(c);}}
function rp(){}
_=rp.prototype=new uH();_.tN=qL+'ClickListenerCollection';_.tI=58;function hq(a,b){if(a.d!==null){throw uC(new sC(),'Composite.initWidget() may only be called once.');}wA(b);xA(a,b.gb());a.d=b;yA(b,a);}
function iq(){if(this.d===null){throw uC(new sC(),'initWidget() was never called in '+jg(this));}return this.q;}
function jq(){if(this.d!==null){return this.d.ub();}return false;}
function kq(){this.d.Ab();this.dc();}
function lq(){try{this.mc();}finally{this.d.Eb();}}
function fq(){}
_=fq.prototype=new eA();_.gb=iq;_.ub=jq;_.Ab=kq;_.Eb=lq;_.tN=qL+'Composite';_.tI=59;_.d=null;function nq(a){yp(a);xA(a,gj());return a;}
function pq(b,c){var a;a=c.gb();Ak(a,'width','100%');Ak(a,'height','100%');c.vc(false);}
function qq(b,c,a){aq(b,c,b.gb(),a,true);pq(b,c);}
function rq(b,c){var a;a=cq(b,c);if(a){sq(b,c);if(b.b===c){b.b=null;}}return a;}
function sq(a,b){Ak(b.gb(),'width','');Ak(b.gb(),'height','');b.vc(true);}
function tq(b,a){Bp(b,a);if(b.b!==null){b.b.vc(false);}b.b=Fp(b,a);b.b.vc(true);}
function uq(a){return rq(this,a);}
function mq(){}
_=mq.prototype=new wp();_.rc=uq;_.tN=qL+'DeckPanel';_.tI=60;_.b=null;function ix(a){jx(a,gj());return a;}
function jx(b,a){xA(b,a);return b;}
function kx(a,b){if(a.n!==null){throw uC(new sC(),'SimplePanel can only contain one child widget');}a.wc(b);}
function mx(a,b){if(b===a.n){return;}if(b!==null){wA(b);}if(a.n!==null){a.rc(a.n);}a.n=b;if(b!==null){dj(a.db(),a.n.gb());sv(a,b);}}
function nx(){return this.gb();}
function ox(){return ex(new cx(),this);}
function px(a){if(this.n!==a){return false;}uv(this,a);pk(this.db(),a.gb());this.n=null;return true;}
function qx(a){mx(this,a);}
function bx(){}
_=bx.prototype=new rv();_.db=nx;_.vb=ox;_.rc=px;_.wc=qx;_.tN=qL+'SimplePanel';_.tI=61;_.n=null;function Fv(){Fv=hL;ow=hB(new cB());}
function Av(a){Fv();jx(a,jB(ow));fw(a,0,0);return a;}
function Bv(b,a){Fv();Av(b);b.g=a;return b;}
function Cv(c,a,b){Fv();Bv(c,a);c.k=b;return c;}
function Dv(b,a){if(a.blur){a.blur();}}
function Ev(c){var a,b,d;a=c.l;if(!a){gw(c,false);jw(c);}b=uh((um()-bw(c))/2);d=uh((tm()-aw(c))/2);fw(c,vm()+b,wm()+d);if(!a){gw(c,true);}}
function aw(a){return iz(a);}
function bw(a){return jz(a);}
function cw(b,a){if(!b.l){return;}b.l=false;gp(Dw(),b);b.gb();}
function dw(a){var b;b=a.n;if(b!==null){if(a.h!==null){b.tc(a.h);}if(a.i!==null){b.xc(a.i);}}}
function ew(e,b){var a,c,d,f;d=Aj(b);c=mk(e.gb(),d);f=Cj(b);switch(f){case 128:{a=(sh(xj(b)),Du(b),true);return a&&(c|| !e.k);}case 512:{a=(sh(xj(b)),Du(b),true);return a&&(c|| !e.k);}case 256:{a=(sh(xj(b)),Du(b),true);return a&&(c|| !e.k);}case 4:case 8:case 64:case 1:case 2:{if((bj(),rk)!==null){return true;}if(!c&&e.g&&f==4){cw(e,true);return true;}break;}case 2048:{if(e.k&& !c&&d!==null){Dv(e,d);return false;}}}return !e.k||c;}
function fw(c,b,d){var a;if(b<0){b=0;}if(d<0){d=0;}c.j=b;c.m=d;a=c.gb();Ak(a,'left',b+'px');Ak(a,'top',d+'px');}
function gw(a,b){Ak(a.gb(),'visibility',b?'visible':'hidden');a.gb();}
function hw(a,b){mx(a,b);dw(a);}
function iw(a,b){a.i=b;dw(a);if(sE(b)==0){a.i=null;}}
function jw(a){if(a.l){return;}a.l=true;cj(a);Ak(a.gb(),'position','absolute');if(a.m!=(-1)){fw(a,a.j,a.m);}dp(Dw(),a);a.gb();}
function kw(){return kB(ow,this.gb());}
function lw(){return aw(this);}
function mw(){return bw(this);}
function nw(){return kB(ow,this.gb());}
function pw(){qk(this);vA(this);}
function qw(a){return ew(this,a);}
function rw(a){this.h=a;dw(this);if(sE(a)==0){this.h=null;}}
function sw(a){gw(this,a);}
function tw(a){hw(this,a);}
function uw(a){iw(this,a);}
function zv(){}
_=zv.prototype=new bx();_.db=kw;_.lb=lw;_.mb=mw;_.nb=nw;_.Eb=pw;_.bc=qw;_.tc=rw;_.vc=sw;_.wc=tw;_.xc=uw;_.tN=qL+'PopupPanel';_.tI=62;_.g=false;_.h=null;_.i=null;_.j=(-1);_.k=false;_.l=false;_.m=(-1);var ow;function zq(){zq=hL;Fv();}
function wq(a){a.a=qt(new vr());a.f=ir(new er());}
function xq(b,a){zq();yq(b,a,true);return b;}
function yq(c,a,b){zq();Cv(c,a,b);wq(c);mt(c.f,0,0,c.a);c.f.tc('100%');ht(c.f,0);jt(c.f,0);kt(c.f,0);fs(c.f.b,1,0,'100%');is(c.f.b,1,0,'100%');es(c.f.b,1,0,(At(),Bt),(bu(),du));hw(c,c.f);oz(c,'gwt-DialogBox');oz(c.a,'Caption');cv(c.a,c);return c;}
function Aq(b,a){ut(b.a,a);}
function Bq(a){if(Cj(a)==4){if(mk(this.a.gb(),Aj(a))){Dj(a);}}return ew(this,a);}
function Cq(a,b,c){this.e=true;tk(this.a.gb());this.c=b;this.d=c;}
function Dq(a){}
function Eq(a){}
function Fq(c,d,e){var a,b;if(this.e){a=d+gz(this);b=e+hz(this);fw(this,a-this.c,b-this.d);}}
function ar(a,b,c){this.e=false;ok(this.a.gb());}
function br(a){if(this.b!==a){return false;}gt(this.f,a);return true;}
function cr(a){if(this.b!==null){gt(this.f,this.b);}if(a!==null){mt(this.f,1,0,a);}this.b=a;}
function dr(a){iw(this,a);this.f.xc('100%');}
function vq(){}
_=vq.prototype=new zv();_.bc=Bq;_.ec=Cq;_.fc=Dq;_.gc=Eq;_.hc=Fq;_.ic=ar;_.rc=br;_.wc=cr;_.xc=dr;_.tN=qL+'DialogBox';_.tI=63;_.b=null;_.c=0;_.d=0;_.e=false;function Cs(a){a.e=ss(new ns());}
function Ds(a){Cs(a);a.d=lj();a.a=ij();dj(a.d,a.a);xA(a,a.d);pz(a,1);return a;}
function Es(c,a){var b;b=lr(c);if(a>=b||a<0){throw yC(new wC(),'Row index: '+a+', Row size: '+b);}}
function Fs(e,c,b,a){var d;d=ds(e.b,c,b);ft(e,d,a);return d;}
function bt(c,b,a){return b.rows[a].cells.length;}
function ct(a){return dt(a,a.a);}
function dt(b,a){return a.rows.length;}
function et(b,a){var c;if(a!=lr(b)){Es(b,a);}c=kj();lk(b.a,c,a);return a;}
function ft(d,c,a){var b,e;b=gk(c);e=null;if(b!==null){e=us(d.e,b);}if(e!==null){gt(d,e);return true;}else{if(a){yk(c,'');}return false;}}
function gt(b,c){var a;if(c.p!==b){return false;}uv(b,c);a=c.gb();pk(ik(a),a);xs(b.e,a);return true;}
function ht(a,b){wk(a.d,'border',''+b);}
function it(b,a){b.b=a;}
function jt(b,a){vk(b.d,'cellPadding',a);}
function kt(b,a){vk(b.d,'cellSpacing',a);}
function lt(b,a){b.c=a;ms(b.c);}
function mt(d,b,a,e){var c;nr(d,b,a);if(e!==null){wA(e);c=Fs(d,b,a,true);vs(d.e,e);dj(c,e.gb());sv(d,e);}}
function nt(){return ys(this.e);}
function ot(a){switch(Cj(a)){case 1:{break;}default:}}
function pt(a){return gt(this,a);}
function wr(){}
_=wr.prototype=new rv();_.vb=nt;_.Cb=ot;_.rc=pt;_.tN=qL+'HTMLTable';_.tI=64;_.a=null;_.b=null;_.c=null;_.d=null;function ir(a){Ds(a);it(a,gr(new fr(),a));lt(a,ks(new js(),a));return a;}
function kr(b,a){Es(b,a);return bt(b,b.a,a);}
function lr(a){return ct(a);}
function mr(b,a){return et(b,a);}
function nr(e,d,b){var a,c;or(e,d);if(b<0){throw yC(new wC(),'Cannot create a column with a negative index: '+b);}a=kr(e,d);c=b+1-a;if(c>0){pr(e.a,d,c);}}
function or(d,b){var a,c;if(b<0){throw yC(new wC(),'Cannot create a row with a negative index: '+b);}c=lr(d);for(a=c;a<=b;a++){mr(d,a);}}
function pr(f,d,c){var e=f.rows[d];for(var b=0;b<c;b++){var a=$doc.createElement('td');e.appendChild(a);}}
function er(){}
_=er.prototype=new wr();_.tN=qL+'FlexTable';_.tI=65;function as(b,a){b.a=a;return b;}
function cs(e,d,c,a){var b=d.rows[c].cells[a];return b==null?null:b;}
function ds(c,b,a){return cs(c,c.a.a,b,a);}
function es(d,c,a,b,e){gs(d,c,a,b);hs(d,c,a,e);}
function fs(e,d,a,c){var b;nr(e.a,d,a);b=cs(e,e.a.a,d,a);wk(b,'height',c);}
function gs(e,d,b,a){var c;nr(e.a,d,b);c=cs(e,e.a.a,d,b);wk(c,'align',a.a);}
function hs(d,c,b,a){nr(d.a,c,b);Ak(cs(d,d.a.a,c,b),'verticalAlign',a.a);}
function is(c,b,a,d){nr(c.a,b,a);wk(cs(c,c.a.a,b,a),'width',d);}
function Fr(){}
_=Fr.prototype=new yD();_.tN=qL+'HTMLTable$CellFormatter';_.tI=66;function gr(b,a){as(b,a);return b;}
function fr(){}
_=fr.prototype=new Fr();_.tN=qL+'FlexTable$FlexCellFormatter';_.tI=67;function rr(a){yp(a);xA(a,gj());return a;}
function sr(a,b){zp(a,b,a.gb());}
function ur(b,c,a){aq(b,c,b.gb(),a,true);}
function qr(){}
_=qr.prototype=new wp();_.tN=qL+'FlowPanel';_.tI=68;function Fu(a){xA(a,gj());pz(a,131197);oz(a,'gwt-Label');return a;}
function av(b,a){Fu(b);ev(b,a);return b;}
function bv(b,a){if(b.a===null){b.a=sp(new rp());}yH(b.a,a);}
function cv(b,a){if(b.b===null){b.b=iv(new hv());}yH(b.b,a);}
function ev(b,a){zk(b.gb(),a);}
function fv(a,b){Ak(a.gb(),'whiteSpace',b?'normal':'nowrap');}
function gv(a){switch(Cj(a)){case 1:if(this.a!==null){up(this.a,this);}break;case 4:case 8:case 64:case 16:case 32:if(this.b!==null){mv(this.b,this,a);}break;case 131072:break;}}
function Eu(){}
_=Eu.prototype=new eA();_.Cb=gv;_.tN=qL+'Label';_.tI=69;_.a=null;_.b=null;function qt(a){Fu(a);xA(a,gj());pz(a,125);oz(a,'gwt-HTML');return a;}
function rt(b,a){qt(b);ut(b,a);return b;}
function st(b,a,c){rt(b,a);fv(b,c);return b;}
function ut(b,a){yk(b.gb(),a);}
function vr(){}
_=vr.prototype=new Eu();_.tN=qL+'HTML';_.tI=70;function yr(a){{Br(a);}}
function zr(b,a){b.b=a;yr(b);return b;}
function Br(a){while(++a.a<a.b.b.b){if(BH(a.b.b,a.a)!==null){return;}}}
function Cr(a){return a.a<a.b.b.b;}
function Dr(){return Cr(this);}
function Er(){var a;if(!Cr(this)){throw dL(new cL());}a=BH(this.b.b,this.a);Br(this);return a;}
function xr(){}
_=xr.prototype=new yD();_.tb=Dr;_.yb=Er;_.tN=qL+'HTMLTable$1';_.tI=71;_.a=(-1);function ks(b,a){b.b=a;return b;}
function ms(a){if(a.a===null){a.a=hj('colgroup');lk(a.b.d,a.a,0);dj(a.a,hj('col'));}}
function js(){}
_=js.prototype=new yD();_.tN=qL+'HTMLTable$ColumnFormatter';_.tI=72;_.a=null;function rs(a){a.b=wH(new uH());}
function ss(a){rs(a);return a;}
function us(c,a){var b;b=As(a);if(b<0){return null;}return qh(BH(c.b,b),12);}
function vs(b,c){var a;if(b.a===null){a=b.b.b;yH(b.b,c);}else{a=b.a.a;bI(b.b,a,c);b.a=b.a.b;}Bs(c.gb(),a);}
function ws(c,a,b){zs(a);bI(c.b,b,null);c.a=ps(new os(),b,c.a);}
function xs(c,a){var b;b=As(a);ws(c,a,b);}
function ys(a){return zr(new xr(),a);}
function zs(a){a['__widgetID']=null;}
function As(a){var b=a['__widgetID'];return b==null?-1:b;}
function Bs(a,b){a['__widgetID']=b;}
function ns(){}
_=ns.prototype=new yD();_.tN=qL+'HTMLTable$WidgetMapper';_.tI=73;_.a=null;function ps(c,a,b){c.a=a;c.b=b;return c;}
function os(){}
_=os.prototype=new yD();_.tN=qL+'HTMLTable$WidgetMapper$FreeNode';_.tI=74;_.a=0;_.b=null;function At(){At=hL;Bt=yt(new xt(),'center');Ct=yt(new xt(),'left');yt(new xt(),'right');}
var Bt,Ct;function yt(b,a){b.a=a;return b;}
function xt(){}
_=xt.prototype=new yD();_.tN=qL+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=75;_.a=null;function bu(){bu=hL;cu=Ft(new Et(),'bottom');du=Ft(new Et(),'middle');eu=Ft(new Et(),'top');}
var cu,du,eu;function Ft(a,b){a.a=b;return a;}
function Et(){}
_=Et.prototype=new yD();_.tN=qL+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=76;_.a=null;function iu(a){a.a=(At(),Ct);a.c=(bu(),eu);}
function ju(a){lp(a);iu(a);a.b=kj();dj(a.d,a.b);wk(a.e,'cellSpacing','0');wk(a.e,'cellPadding','0');return a;}
function ku(b,c){var a;a=mu(b);dj(b.b,a);zp(b,c,a);}
function mu(b){var a;a=jj();op(b,a,b.a);pp(b,a,b.c);return a;}
function nu(c,d,a){var b;Cp(c,a);b=mu(c);lk(c.b,b,a);aq(c,d,b,a,false);}
function ou(c,d){var a,b;b=ik(d.gb());a=cq(c,d);if(a){pk(c.b,b);}return a;}
function pu(b,a){b.c=a;}
function qu(a){return ou(this,a);}
function hu(){}
_=hu.prototype=new kp();_.rc=qu;_.tN=qL+'HorizontalPanel';_.tI=77;_.b=null;function su(a){xA(a,gj());dj(a.gb(),a.a=fj());pz(a,1);oz(a,'gwt-Hyperlink');return a;}
function tu(c,b,a){su(c);yu(c,b);xu(c,a);return c;}
function uu(b,a){if(b.b===null){b.b=sp(new rp());}yH(b.b,a);}
function wu(a){return hk(a.a);}
function xu(b,a){b.c=a;wk(b.a,'href','#'+a);}
function yu(b,a){zk(b.a,a);}
function zu(a){if(Cj(a)==1){if(this.b!==null){up(this.b,this);}vl(this.c);Dj(a);}}
function ru(){}
_=ru.prototype=new eA();_.Cb=zu;_.tN=qL+'Hyperlink';_.tI=78;_.a=null;_.b=null;_.c=null;function Du(a){return (zj(a)?1:0)|(yj(a)?8:0)|(vj(a)?2:0)|(rj(a)?4:0);}
function iv(a){wH(a);return a;}
function kv(d,c,e,f){var a,b;for(a=bG(d);AF(a);){b=qh(BF(a),21);b.ec(c,e,f);}}
function lv(d,c){var a,b;for(a=bG(d);AF(a);){b=qh(BF(a),21);b.fc(c);}}
function mv(e,c,a){var b,d,f,g,h;d=c.gb();g=tj(a)-Fj(d)+dk(d,'scrollLeft')+vm();h=uj(a)-ak(d)+dk(d,'scrollTop')+wm();switch(Cj(a)){case 4:kv(e,c,g,h);break;case 8:pv(e,c,g,h);break;case 64:ov(e,c,g,h);break;case 16:b=wj(a);if(!mk(d,b)){lv(e,c);}break;case 32:f=Bj(a);if(!mk(d,f)){nv(e,c);}break;}}
function nv(d,c){var a,b;for(a=bG(d);AF(a);){b=qh(BF(a),21);b.gc(c);}}
function ov(d,c,e,f){var a,b;for(a=bG(d);AF(a);){b=qh(BF(a),21);b.hc(c,e,f);}}
function pv(d,c,e,f){var a,b;for(a=bG(d);AF(a);){b=qh(BF(a),21);b.ic(c,e,f);}}
function hv(){}
_=hv.prototype=new uH();_.tN=qL+'MouseListenerCollection';_.tI=79;function Bw(){Bw=hL;ax=BJ(new FI());}
function Aw(b,a){Bw();cp(b);if(a===null){a=Cw();}xA(b,a);b.Ab();return b;}
function Dw(){Bw();return Ew(null);}
function Ew(c){Bw();var a,b;b=qh(bK(ax,c),22);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=ck(c))){return null;}}if(ax.c==0){Fw();}cK(ax,c,b=Aw(new vw(),a));return b;}
function Cw(){Bw();return $doc.body;}
function Fw(){Bw();lm(new ww());}
function vw(){}
_=vw.prototype=new bp();_.tN=qL+'RootPanel';_.tI=80;var ax;function yw(){var a,b;for(b=AG(iH((Bw(),ax)));bH(b);){a=qh(cH(b),22);if(a.ub()){a.Eb();}}}
function zw(){return null;}
function ww(){}
_=ww.prototype=new yD();_.nc=yw;_.oc=zw;_.tN=qL+'RootPanel$1';_.tI=81;function dx(a){a.a=a.b.n!==null;}
function ex(b,a){b.b=a;dx(b);return b;}
function gx(){return this.a;}
function hx(){if(!this.a||this.b.n===null){throw dL(new cL());}this.a=false;return this.b.n;}
function cx(){}
_=cx.prototype=new yD();_.tb=gx;_.yb=hx;_.tN=qL+'SimplePanel$1';_.tI=82;function yx(a){a.a=ju(new hu());}
function zx(c){var a,b;yx(c);hq(c,c.a);pz(c,1);oz(c,'gwt-TabBar');pu(c.a,(bu(),cu));a=st(new vr(),'&nbsp;',true);b=st(new vr(),'&nbsp;',true);oz(a,'gwt-TabBarFirst');oz(b,'gwt-TabBarRest');a.tc('100%');b.tc('100%');ku(c.a,a);ku(c.a,b);a.tc('100%');np(c.a,a,'100%');qp(c.a,b,'100%');return c;}
function Ax(b,a){if(b.c===null){b.c=fy(new ey());}yH(b.c,a);}
function Bx(b,a){if(a<0||a>Ex(b)){throw xC(new wC());}}
function Cx(b,a){if(a<(-1)||a>=Ex(b)){throw xC(new wC());}}
function Ex(a){return a.a.f.b-2;}
function Fx(e,d,a,b){var c;Bx(e,b);if(a){c=rt(new vr(),d);}else{c=av(new Eu(),d);}fv(c,false);bv(c,e);oz(c,'gwt-TabBarItem');nu(e.a,c,b+1);}
function ay(b,a){var c;Cx(b,a);c=Fp(b.a,a+1);if(c===b.b){b.b=null;}ou(b.a,c);}
function by(b,a){Cx(b,a);if(b.c!==null){if(!hy(b.c,b,a)){return false;}}cy(b,b.b,false);if(a==(-1)){b.b=null;return true;}b.b=Fp(b.a,a+1);cy(b,b.b,true);if(b.c!==null){iy(b.c,b,a);}return true;}
function cy(c,a,b){if(a!==null){if(b){ez(a,'gwt-TabBarItem-selected');}else{kz(a,'gwt-TabBarItem-selected');}}}
function dy(b){var a;for(a=1;a<this.a.f.b-1;++a){if(Fp(this.a,a)===b){by(this,a-1);return;}}}
function xx(){}
_=xx.prototype=new fq();_.Db=dy;_.tN=qL+'TabBar';_.tI=83;_.b=null;_.c=null;function fy(a){wH(a);return a;}
function hy(e,c,d){var a,b;for(a=bG(e);AF(a);){b=qh(BF(a),23);if(!b.Bb(c,d)){return false;}}return true;}
function iy(e,c,d){var a,b;for(a=bG(e);AF(a);){b=qh(BF(a),23);b.lc(c,d);}}
function ey(){}
_=ey.prototype=new uH();_.tN=qL+'TabListenerCollection';_.tI=84;function wy(a){a.b=sy(new ry());a.a=my(new ly(),a.b);}
function xy(b){var a;wy(b);a=Ez(new Cz());Fz(a,b.b);Fz(a,b.a);np(a,b.a,'100%');b.b.xc('100%');Ax(b.b,b);hq(b,a);oz(b,'gwt-TabPanel');oz(b.a,'gwt-TabPanelBottom');return b;}
function zy(b,c,a){Cy(b,c,a,b.a.f.b);}
function yy(b,a){if(b.c===null){b.c=fy(new ey());}yH(b.c,a);}
function By(b,a){return Fp(b.a,a);}
function Dy(d,e,c,a,b){oy(d.a,e,c,a,b);}
function Cy(c,d,b,a){Dy(c,d,b,false,a);}
function Ey(b,a){by(b.b,a);}
function Fy(){return bq(this.a);}
function az(a,b){if(this.c!==null){return hy(this.c,this,b);}return true;}
function bz(a,b){tq(this.a,b);if(this.c!==null){iy(this.c,this,b);}}
function cz(a){return py(this.a,a);}
function ky(){}
_=ky.prototype=new fq();_.vb=Fy;_.Bb=az;_.lc=bz;_.rc=cz;_.tN=qL+'TabPanel';_.tI=85;_.c=null;function my(b,a){nq(b);b.a=a;return b;}
function oy(e,f,d,a,b){var c;c=Ep(e,f);if(c!=(-1)){py(e,f);if(c<b){b--;}}uy(e.a,d,a,b);qq(e,f,b);}
function py(b,c){var a;a=Ep(b,c);if(a!=(-1)){vy(b.a,a);return rq(b,c);}return false;}
function qy(a){return py(this,a);}
function ly(){}
_=ly.prototype=new mq();_.rc=qy;_.tN=qL+'TabPanel$TabbedDeckPanel';_.tI=86;_.a=null;function sy(a){zx(a);return a;}
function uy(d,c,a,b){Fx(d,c,a,b);}
function vy(b,a){ay(b,a);}
function ry(){}
_=ry.prototype=new xx();_.tN=qL+'TabPanel$UnmodifiableTabBar';_.tI=87;function Dz(a){a.a=(At(),Ct);a.b=(bu(),eu);}
function Ez(a){lp(a);Dz(a);wk(a.e,'cellSpacing','0');wk(a.e,'cellPadding','0');return a;}
function Fz(b,d){var a,c;c=kj();a=bA(b);dj(c,a);dj(b.d,c);zp(b,d,a);}
function bA(b){var a;a=jj();op(b,a,b.a);pp(b,a,b.b);return a;}
function cA(c,e,a){var b,d;Cp(c,a);d=kj();b=bA(c);dj(d,b);lk(c.d,d,a);aq(c,e,b,a,false);}
function dA(c){var a,b;b=ik(c.gb());a=cq(this,c);if(a){pk(this.d,ik(b));}return a;}
function Cz(){}
_=Cz.prototype=new kp();_.rc=dA;_.tN=qL+'VerticalPanel';_.tI=88;function lA(b,a){b.a=kh('[Lcom.google.gwt.user.client.ui.Widget;',[154],[12],[4],null);return b;}
function mA(a,b){qA(a,b,a.b);}
function oA(b,a){if(a<0||a>=b.b){throw xC(new wC());}return b.a[a];}
function pA(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function qA(d,e,a){var b,c;if(a<0||a>d.b){throw xC(new wC());}if(d.b==d.a.a){c=kh('[Lcom.google.gwt.user.client.ui.Widget;',[154],[12],[d.a.a*2],null);for(b=0;b<d.a.a;++b){mh(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){mh(d.a,b,d.a[b-1]);}mh(d.a,a,e);}
function rA(a){return hA(new gA(),a);}
function sA(c,b){var a;if(b<0||b>=c.b){throw xC(new wC());}--c.b;for(a=b;a<c.b;++a){mh(c.a,a,c.a[a+1]);}mh(c.a,c.b,null);}
function tA(b,c){var a;a=pA(b,c);if(a==(-1)){throw dL(new cL());}sA(b,a);}
function fA(){}
_=fA.prototype=new yD();_.tN=qL+'WidgetCollection';_.tI=89;_.a=null;_.b=0;function hA(b,a){b.b=a;return b;}
function jA(){return this.a<this.b.b-1;}
function kA(){if(this.a>=this.b.b){throw dL(new cL());}return this.b.a[++this.a];}
function gA(){}
_=gA.prototype=new yD();_.tb=jA;_.yb=kA;_.tN=qL+'WidgetCollection$WidgetIterator';_.tI=90;_.a=(-1);function bB(){}
_=bB.prototype=new yD();_.tN=rL+'PopupImpl';_.tI=91;function iB(){iB=hL;lB=mB();}
function hB(a){iB();return a;}
function jB(b){var a;a=gj();if(lB){yk(a,'<div><\/div>');bl(eB(new dB(),b,a));}return a;}
function kB(b,a){return lB?gk(a):a;}
function mB(){iB();if(navigator.userAgent.indexOf('Macintosh')!= -1){return true;}return false;}
function cB(){}
_=cB.prototype=new bB();_.tN=rL+'PopupImplMozilla';_.tI=92;var lB;function eB(b,a,c){b.a=c;return b;}
function gB(){Ak(this.a,'overflow','auto');}
function dB(){}
_=dB.prototype=new yD();_.F=gB;_.tN=rL+'PopupImplMozilla$1';_.tI=93;function rB(){}
_=rB.prototype=new yD();_.tN=sL+'OutputStream';_.tI=94;function pB(){}
_=pB.prototype=new rB();_.tN=sL+'FilterOutputStream';_.tI=95;function tB(){}
_=tB.prototype=new pB();_.tN=sL+'PrintStream';_.tI=96;function xB(){xB=hL;aE();}
function wB(a){xB();ED(a);return a;}
function vB(){}
_=vB.prototype=new DD();_.tN=tL+'ArrayStoreException';_.tI=97;function AB(){AB=hL;BB=zB(new yB(),false);CB=zB(new yB(),true);}
function zB(a,b){AB();a.a=b;return a;}
function DB(a){return rh(a,28)&&qh(a,28).a==this.a;}
function EB(){var a,b;b=1231;a=1237;return this.a?1231:1237;}
function FB(){return this.a?'true':'false';}
function aC(a){AB();return a?CB:BB;}
function yB(){}
_=yB.prototype=new yD();_.eQ=DB;_.hC=EB;_.tS=FB;_.tN=tL+'Boolean';_.tI=98;_.a=false;var BB,CB;function eC(a,b){if(b<2||b>36){return (-1);}if(a>=48&&a<48+gD(b,10)){return a-48;}if(a>=97&&a<b+97-10){return a-97+10;}if(a>=65&&a<b+65-10){return a-65+10;}return (-1);}
function iC(){iC=hL;aE();}
function gC(a){iC();ED(a);return a;}
function hC(b,a){iC();FD(b,a);return b;}
function fC(){}
_=fC.prototype=new DD();_.tN=tL+'ClassCastException';_.tI=99;function rC(){rC=hL;aE();}
function qC(b,a){rC();FD(b,a);return b;}
function pC(){}
_=pC.prototype=new DD();_.tN=tL+'IllegalArgumentException';_.tI=100;function vC(){vC=hL;aE();}
function tC(a){vC();ED(a);return a;}
function uC(b,a){vC();FD(b,a);return b;}
function sC(){}
_=sC.prototype=new DD();_.tN=tL+'IllegalStateException';_.tI=101;function zC(){zC=hL;aE();}
function xC(a){zC();ED(a);return a;}
function yC(b,a){zC();FD(b,a);return b;}
function wC(){}
_=wC.prototype=new DD();_.tN=tL+'IndexOutOfBoundsException';_.tI=102;function sD(){sD=hL;{xD();}}
function tD(a){sD();return isNaN(a);}
function uD(e,d,c,h){sD();var a,b,f,g;if(e===null){throw qD(new pD(),'Unable to parse null');}b=sE(e);f=b>0&&lE(e,0)==45?1:0;for(a=f;a<b;a++){if(eC(lE(e,a),d)==(-1)){throw qD(new pD(),'Could not parse '+e+' in radix '+d);}}g=vD(e,d);if(tD(g)){throw qD(new pD(),'Unable to parse '+e);}else if(g<c||g>h){throw qD(new pD(),'The string '+e+' exceeds the range for the requested data type');}return g;}
function vD(b,a){sD();return parseInt(b,a);}
function xD(){sD();wD=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var wD=null;function BC(){BC=hL;sD();}
function EC(a){BC();return FC(a,10);}
function FC(b,a){BC();return th(uD(b,a,(-2147483648),2147483647));}
function aD(a){BC();return EE(a);}
var CC=2147483647,DC=(-2147483648);function dD(a){return a<0?-a:a;}
function eD(a){return a<0?-a:a;}
function fD(a,b){return a>b?a:b;}
function gD(a,b){return a<b?a:b;}
function hD(a){return Math.sqrt(a);}
function kD(){kD=hL;aE();}
function jD(a){kD();ED(a);return a;}
function iD(){}
_=iD.prototype=new DD();_.tN=tL+'NegativeArraySizeException';_.tI=103;function nD(){nD=hL;aE();}
function mD(b,a){nD();FD(b,a);return b;}
function lD(){}
_=lD.prototype=new DD();_.tN=tL+'NullPointerException';_.tI=104;function rD(){rD=hL;rC();}
function qD(b,a){rD();qC(b,a);return b;}
function pD(){}
_=pD.prototype=new pC();_.tN=tL+'NumberFormatException';_.tI=105;function lE(b,a){return b.charCodeAt(a);}
function nE(f,c){var a,b,d,e,g,h;h=sE(f);e=sE(c);b=gD(h,e);for(a=0;a<b;a++){g=lE(f,a);d=lE(c,a);if(g!=d){return g-d;}}return h-e;}
function oE(b,a){if(!rh(a,1))return false;return xE(b,a);}
function pE(b,a){return b.indexOf(a);}
function qE(c,b,a){return c.indexOf(b,a);}
function rE(b,a){return b.lastIndexOf(String.fromCharCode(a));}
function sE(a){return a.length;}
function tE(c,a,b){b=yE(b);return c.replace(RegExp(a,'g'),b);}
function uE(b,a){return b.substr(a,b.length-a);}
function vE(c,a,b){return c.substr(a,b-a);}
function wE(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function xE(a,b){return String(a)==b;}
function yE(b){var a;a=0;while(0<=(a=qE(b,'\\',a))){if(lE(b,a+1)==36){b=vE(b,0,a)+'$'+uE(b,++a);}else{b=vE(b,0,a)+uE(b,++a);}}return b;}
function zE(a){if(rh(a,1)){return nE(this,qh(a,1));}else{throw hC(new fC(),'Cannot compare '+a+" with String '"+this+"'");}}
function AE(a){return oE(this,a);}
function CE(){var a=BE;if(!a){a=BE={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function DE(){return this;}
function EE(a){return ''+a;}
function FE(a){return a!==null?a.tS():'null';}
_=String.prototype;_.u=zE;_.eQ=AE;_.hC=CE;_.tS=DE;_.tN=tL+'String';_.tI=2;var BE=null;function dE(a){fE(a);return a;}
function eE(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function fE(a){gE(a,'');}
function gE(b,a){b.js=[a];b.length=a.length;}
function iE(a){a.zb();return a.js[0];}
function jE(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function kE(){return iE(this);}
function cE(){}
_=cE.prototype=new yD();_.zb=jE;_.tS=kE;_.tN=tL+'StringBuffer';_.tI=106;function bF(){bF=hL;dF=new tB();}
function cF(){bF();return new Date().getTime();}
function eF(a){bF();return pg(a);}
var dF;function pF(){pF=hL;aE();}
function oF(b,a){pF();FD(b,a);return b;}
function nF(){}
_=nF.prototype=new DD();_.tN=tL+'UnsupportedOperationException';_.tI=107;function yF(b,a){b.c=a;return b;}
function AF(a){return a.a<a.c.yc();}
function BF(a){if(!AF(a)){throw dL(new cL());}return a.c.rb(a.b=a.a++);}
function CF(a){if(a.b<0){throw tC(new sC());}a.c.qc(a.b);a.a=a.b;a.b=(-1);}
function DF(){return AF(this);}
function EF(){return BF(this);}
function xF(){}
_=xF.prototype=new yD();_.tb=DF;_.yb=EF;_.tN=uL+'AbstractList$IteratorImpl';_.tI=108;_.a=0;_.b=(-1);function gH(f,d,e){var a,b,c;for(b=wJ(f.E());oJ(b);){a=pJ(b);c=a.jb();if(d===null?c===null:d.eQ(c)){if(e){qJ(b);}return a;}}return null;}
function hH(b){var a;a=b.E();return kG(new jG(),b,a);}
function iH(b){var a;a=aK(b);return yG(new xG(),b,a);}
function jH(a){return gH(this,a,false)!==null;}
function kH(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!rh(d,30)){return false;}f=qh(d,30);c=hH(this);e=f.wb();if(!rH(c,e)){return false;}for(a=mG(c);tG(a);){b=uG(a);h=this.sb(b);g=f.sb(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function lH(b){var a;a=gH(this,b,false);return a===null?null:a.pb();}
function mH(){var a,b,c;b=0;for(c=wJ(this.E());oJ(c);){a=pJ(c);b+=a.hC();}return b;}
function nH(){return hH(this);}
function oH(){var a,b,c,d;d='{';a=false;for(c=wJ(this.E());oJ(c);){b=pJ(c);if(a){d+=', ';}else{a=true;}d+=FE(b.jb());d+='=';d+=FE(b.pb());}return d+'}';}
function iG(){}
_=iG.prototype=new yD();_.y=jH;_.eQ=kH;_.sb=lH;_.hC=mH;_.wb=nH;_.tS=oH;_.tN=uL+'AbstractMap';_.tI=109;function rH(e,b){var a,c,d;if(b===e){return true;}if(!rh(b,31)){return false;}c=qh(b,31);if(c.yc()!=e.yc()){return false;}for(a=c.vb();a.tb();){d=a.yb();if(!e.z(d)){return false;}}return true;}
function sH(a){return rH(this,a);}
function tH(){var a,b,c;a=0;for(b=this.vb();b.tb();){c=b.yb();if(c!==null){a+=c.hC();}}return a;}
function pH(){}
_=pH.prototype=new qF();_.eQ=sH;_.hC=tH;_.tN=uL+'AbstractSet';_.tI=110;function kG(b,a,c){b.a=a;b.b=c;return b;}
function mG(b){var a;a=wJ(b.b);return rG(new qG(),b,a);}
function nG(a){return this.a.y(a);}
function oG(){return mG(this);}
function pG(){return this.b.a.c;}
function jG(){}
_=jG.prototype=new pH();_.z=nG;_.vb=oG;_.yc=pG;_.tN=uL+'AbstractMap$1';_.tI=111;function rG(b,a,c){b.a=c;return b;}
function tG(a){return a.a.tb();}
function uG(b){var a;a=b.a.yb();return a.jb();}
function vG(){return tG(this);}
function wG(){return uG(this);}
function qG(){}
_=qG.prototype=new yD();_.tb=vG;_.yb=wG;_.tN=uL+'AbstractMap$2';_.tI=112;function yG(b,a,c){b.a=a;b.b=c;return b;}
function AG(b){var a;a=wJ(b.b);return FG(new EG(),b,a);}
function BG(a){return FJ(this.a,a);}
function CG(){return AG(this);}
function DG(){return this.b.a.c;}
function xG(){}
_=xG.prototype=new qF();_.z=BG;_.vb=CG;_.yc=DG;_.tN=uL+'AbstractMap$3';_.tI=113;function FG(b,a,c){b.a=c;return b;}
function bH(a){return a.a.tb();}
function cH(a){var b;b=a.a.yb().pb();return b;}
function dH(){return bH(this);}
function eH(){return cH(this);}
function EG(){}
_=EG.prototype=new yD();_.tb=dH;_.yb=eH;_.tN=uL+'AbstractMap$4';_.tI=114;function qI(b){var a,c;a=wH(new uH());for(c=0;c<b.a;c++){yH(a,b[c]);}return a;}
function rI(d,h,e){if(h==0){return;}var i=new Array();for(var g=0;g<h;++g){i[g]=d[g];}if(e!=null){var f=function(a,b){var c=e.v(a,b);return c;};i.sort(f);}else{i.sort();}for(g=0;g<h;++g){d[g]=i[g];}}
function sI(a){rI(a,a.a,(zI(),AI));}
function zI(){zI=hL;AI=new wI();}
var AI;function yI(a,b){return qh(a,36).u(b);}
function wI(){}
_=wI.prototype=new yD();_.v=yI;_.tN=uL+'Comparators$1';_.tI=115;function DJ(){DJ=hL;eK=kK();}
function AJ(a){{CJ(a);}}
function BJ(a){DJ();AJ(a);return a;}
function CJ(a){a.a=zg();a.d=Ag();a.b=yh(eK,vg);a.c=0;}
function EJ(b,a){if(rh(a,1)){return oK(b.d,qh(a,1))!==eK;}else if(a===null){return b.b!==eK;}else{return nK(b.a,a,a.hC())!==eK;}}
function FJ(a,b){if(a.b!==eK&&mK(a.b,b)){return true;}else if(jK(a.d,b)){return true;}else if(hK(a.a,b)){return true;}return false;}
function aK(a){return tJ(new kJ(),a);}
function bK(c,a){var b;if(rh(a,1)){b=oK(c.d,qh(a,1));}else if(a===null){b=c.b;}else{b=nK(c.a,a,a.hC());}return b===eK?null:b;}
function cK(c,a,d){var b;if(rh(a,1)){b=rK(c.d,qh(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=qK(c.a,a,d,a.hC());}if(b===eK){++c.c;return null;}else{return b;}}
function dK(c,a){var b;if(rh(a,1)){b=tK(c.d,qh(a,1));}else if(a===null){b=c.b;c.b=yh(eK,vg);}else{b=sK(c.a,a,a.hC());}if(b===eK){return null;}else{--c.c;return b;}}
function fK(e,c){DJ();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.s(a[f]);}}}}
function gK(d,a){DJ();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=dJ(c.substring(1),e);a.s(b);}}}
function hK(f,h){DJ();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.pb();if(mK(h,d)){return true;}}}}return false;}
function iK(a){return EJ(this,a);}
function jK(c,d){DJ();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(mK(d,a)){return true;}}}return false;}
function kK(){DJ();}
function lK(){return aK(this);}
function mK(a,b){DJ();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function pK(a){return bK(this,a);}
function nK(f,h,e){DJ();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.jb();if(mK(h,d)){return c.pb();}}}}
function oK(b,a){DJ();return b[':'+a];}
function qK(f,h,j,e){DJ();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.jb();if(mK(h,d)){var i=c.pb();c.uc(j);return i;}}}else{a=f[e]=[];}var c=dJ(h,j);a.push(c);}
function rK(c,a,d){DJ();a=':'+a;var b=c[a];c[a]=d;return b;}
function sK(f,h,e){DJ();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.jb();if(mK(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.pb();}}}}
function tK(c,a){DJ();a=':'+a;var b=c[a];delete c[a];return b;}
function FI(){}
_=FI.prototype=new iG();_.y=iK;_.E=lK;_.sb=pK;_.tN=uL+'HashMap';_.tI=116;_.a=null;_.b=null;_.c=0;_.d=null;var eK;function bJ(b,a,c){b.a=a;b.b=c;return b;}
function dJ(a,b){return bJ(new aJ(),a,b);}
function eJ(b){var a;if(rh(b,37)){a=qh(b,37);if(mK(this.a,a.jb())&&mK(this.b,a.pb())){return true;}}return false;}
function fJ(){return this.a;}
function gJ(){return this.b;}
function hJ(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function iJ(a){var b;b=this.b;this.b=a;return b;}
function jJ(){return this.a+'='+this.b;}
function aJ(){}
_=aJ.prototype=new yD();_.eQ=eJ;_.jb=fJ;_.pb=gJ;_.hC=hJ;_.uc=iJ;_.tS=jJ;_.tN=uL+'HashMap$EntryImpl';_.tI=117;_.a=null;_.b=null;function tJ(b,a){b.a=a;return b;}
function vJ(d,c){var a,b,e;if(rh(c,37)){a=qh(c,37);b=a.jb();if(EJ(d.a,b)){e=bK(d.a,b);return mK(a.pb(),e);}}return false;}
function wJ(a){return mJ(new lJ(),a.a);}
function xJ(a){return vJ(this,a);}
function yJ(){return wJ(this);}
function zJ(){return this.a.c;}
function kJ(){}
_=kJ.prototype=new pH();_.z=xJ;_.vb=yJ;_.yc=zJ;_.tN=uL+'HashMap$EntrySet';_.tI=118;function mJ(c,b){var a;c.c=b;a=wH(new uH());if(c.c.b!==(DJ(),eK)){yH(a,bJ(new aJ(),null,c.c.b));}gK(c.c.d,a);fK(c.c.a,a);c.a=bG(a);return c;}
function oJ(a){return AF(a.a);}
function pJ(a){return a.b=qh(BF(a.a),37);}
function qJ(a){if(a.b===null){throw uC(new sC(),'Must call next() before remove().');}else{CF(a.a);dK(a.c,a.b.jb());a.b=null;}}
function rJ(){return oJ(this);}
function sJ(){return pJ(this);}
function lJ(){}
_=lJ.prototype=new yD();_.tb=rJ;_.yb=sJ;_.tN=uL+'HashMap$EntrySetIterator';_.tI=119;_.a=null;_.b=null;function vK(a){a.a=BJ(new FI());return a;}
function wK(c,a){var b;b=cK(c.a,a,aC(true));return b===null;}
function yK(a){return mG(hH(a.a));}
function zK(a){return wK(this,a);}
function AK(a){return EJ(this.a,a);}
function BK(){return yK(this);}
function CK(){return this.a.c;}
function DK(){return hH(this.a).tS();}
function uK(){}
_=uK.prototype=new pH();_.s=zK;_.z=AK;_.vb=BK;_.yc=CK;_.tS=DK;_.tN=uL+'HashSet';_.tI=120;_.a=null;function eL(){eL=hL;aE();}
function dL(a){eL();ED(a);return a;}
function cL(){}
_=cL.prototype=new DD();_.tN=uL+'NoSuchElementException';_.tI=121;function CL(){}
_=CL.prototype=new yD();_.tN=vL+'BezierCurve';_.tI=122;function EL(a){{dM(a);}}
function FL(a){EL(a);return a;}
function cM(i,d,e,a,b){var c,f,g,h,j;h=xN(new wN(),gD(d.a,e.a),gD(d.b,e.b));j=dD(d.a-e.a);c=dD(d.b-e.b);g=fD(j,c);g=fD(g,dD(d.a-a.a));g=fD(g,dD(d.b-a.b));g=fD(g,dD(e.a-b.a));g=fD(g,dD(e.b-b.b));f=xN(new wN(),h.a-g,h.b-g);Ak(i.a,'left',aD(f.a));Ak(i.a,'top',aD(f.b));uk(i.a,'width',aD(j+g*2));uk(i.a,'height',aD(c+g*2));Ak(i.a,'width',aD(j+g*2));Ak(i.a,'height',aD(c+g*2));bM(i,AN(d,CN(f)),AN(e,CN(f)),AN(a,CN(f)),AN(b,CN(f)),eM(i.a,'color'));}
function bM(h,f,g,a,b,d){var c=h.a;var e=c.getContext('2d');e.beginPath();e.moveTo(f.a,f.b);e.strokeStyle=d;e.bezierCurveTo(a.a,a.b,b.a,b.b,g.a,g.b);e.stroke();}
function dM(b){var a;b.a=hj('canvas');a=bk(b.a,'class');uk(b.a,'class',a+' gwt-diagrams-canvas');}
function eM(b,a){if($doc.defaultView&&$doc.defaultView.getComputedStyle){return $doc.defaultView.getComputedStyle(b,'').getPropertyValue(a);}else{return null;}}
function DL(){}
_=DL.prototype=new CL();_.tN=vL+'BezierCurveCanvas';_.tI=123;_.a=null;function hM(a){a.c=wH(new uH());}
function iM(c,d){var a,b;hM(c);xH(c.c,d);mM(c,c.A());for(b=bG(c.c);AF(b);){a=qh(BF(b),32);a.w(c);}return c;}
function jM(a,b){iM(a,qI(b));return a;}
function lM(a){return a.b.t(a.c);}
function mM(b,a){b.b=a;}
function nM(){this.Ac(lM(this));}
function gM(){}
_=gM.prototype=new eA();_.zc=nM;_.tN=wL+'AbstractConnection';_.tI=124;_.b=null;function pM(a){a.a=FL(new DL());}
function rM(a,b){jM(a,b);pM(a);if(b.a!=2){throw qC(new pC(),'Need exactly two connectors to connect');}xA(a,a.a.a);ez(a,'gwt-diagrams-connection');return a;}
function qM(c,a,b){rM(c,lh('[Lpl.balon.gwt.diagrams.client.connector.Connector;',150,32,[a,b]));return c;}
function tM(){return new EM();}
function uM(b){var a;if(!rh(b,38)){throw qC(new pC(),'Expected BezierConnectionData');}a=qh(b,38);if(a.b.b!=2){throw qC(new pC(),'Expected two connection points');}if(a.a.b!=2){throw qC(new pC(),'Expected two control points');}cM(this.a,qh(BH(a.b,0),35),qh(BH(a.b,1),35),qh(BH(a.a,0),35),qh(BH(a.a,1),35));}
function oM(){}
_=oM.prototype=new gM();_.A=tM;_.Ac=uM;_.tN=wL+'BezierTwoEndedConnection';_.tI=125;function xM(a){a.a=wH(new uH());}
function zM(a,b){jM(a,b);xM(a);if(b.a!=2){throw qC(new pC(),'Need exactly two connectors to connect');}xA(a,gj());ez(a,'gwt-diagrams-connection');return a;}
function yM(c,a,b){zM(c,lh('[Lpl.balon.gwt.diagrams.client.connector.Connector;',150,32,[a,b]));return c;}
function BM(d,a){var b,c;for(c=d.a.b;c<a;c++){b=gj();yH(d.a,yh(b,dl));dj(d.gb(),b);yk(b,'&nbsp;');}while(d.a.b>a){b=qh(BH(d.a,0),17);aI(d.a,yh(b,dl));pk(d.gb(),b);}}
function CM(){return new dN();}
function DM(a){var b,c,d,e,f;if(a.b.b<=1){throw qC(new pC(),'Too few connection points');}BM(this,a.b.b-1);for(d=0;d<this.a.b;d++){b=qh(BH(this.a,d),17);e=qh(BH(a.b,d),35);c=qh(BH(a.b,d+1),35);f='gwt-diagrams-line';uk(b,'style','');wk(b,'className',f);Ak(b,'height','1');Ak(b,'width','1');if(e.a==c.a){f+=' gwt-diagrams-line-vertical';Ak(b,'height',aD(dD(e.b-c.b)));}else if(e.b==c.b){Ak(b,'width',aD(dD(e.a-c.a)));f+=' gwt-diagrams-line-horizontal';}Ak(b,'left',aD(gD(e.a,c.a)));Ak(b,'top',aD(gD(e.b,c.b)));wk(b,'className',f);}}
function wM(){}
_=wM.prototype=new gM();_.A=CM;_.Ac=DM;_.tN=wL+'RectilinearTwoEndedConnection';_.tI=126;function aN(j,d,e){var a,b,c,f,g,h,i;f=d.eb();g=e.eb();c=kh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[152],[34],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=zN(d.bb(f[h]),e.bb(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function bN(e){var a,b,c,d,f,g,h,i;if(e.b!=2){throw qC(new pC(),'Unsupported connectors count');}c=qh(BH(e,0),32);d=qh(BH(e,1),32);f=aN(this,c,d);h=c.pc(f[0]);i=d.pc(f[1]);a=BN(h,f[0],50);b=BN(i,f[1],50);g=pN(new mN(),lh('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',155,35,[h,i]),lh('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',155,35,[a,b]));return g;}
function EM(){}
_=EM.prototype=new yD();_.t=bN;_.tN=xL+'BezierConnectionCalculator';_.tI=127;function eN(e,a,c,d,b){if(b){if(c==0&&d>0){return a!==(kO(),nO);}if(c==1&&d>0){return a!==(kO(),oO);}if(c==0&&d<0){return a!==(kO(),oO);}if(c==1&&d<0){return a!==(kO(),nO);}}else{if(c==0&&d>0){return a!==(kO(),pO);}if(c==1&&d>0){return a!==(kO(),mO);}if(c==0&&d<0){return a!==(kO(),mO);}if(c==1&&d<0){return a!==(kO(),pO);}}return false;}
function gN(j,d,e){var a,b,c,f,g,h,i;f=d.eb();g=e.eb();c=kh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[152],[34],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=zN(d.bb(f[h]),e.bb(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function hN(e,a,c,d,b){if(b){if(c==0&&d>0){return a===(kO(),oO);}if(c==1&&d>0){return a===(kO(),nO);}if(c==0&&d<0){return a===(kO(),nO);}if(c==1&&d<0){return a===(kO(),oO);}}else{if(c==0&&d>0){return a===(kO(),mO);}if(c==1&&d>0){return a===(kO(),pO);}if(c==0&&d<0){return a===(kO(),pO);}if(c==1&&d<0){return a===(kO(),mO);}}return false;}
function iN(c){var a,b,d,e,f,g,h,i,j,k,l,m;if(c.b!=2){throw qC(new pC(),'Unsupported connectors count');}a=qh(BH(c,0),32);b=qh(BH(c,1),32);d=tN(new rN());e=gN(this,a,b);i=a.pc(e[0]);j=BN(i,e[0],10);k=b.pc(e[1]);l=BN(k,e[1],10);f=l.a-j.a;m=l.b-j.b;g=null;h=null;if(hN(this,e[0],0,f,true)&&hN(this,e[1],1,f,true)){g=BN(j,e[0],dD(uh(f/2)));h=xN(new wN(),g.a,l.b);}else if(hN(this,e[0],0,m,false)&&hN(this,e[1],1,m,false)){g=BN(j,e[0],dD(uh(m/2)));h=xN(new wN(),l.a,g.b);}else if(hN(this,e[0],0,f,true)&&hN(this,e[1],1,m,false)){g=BN(j,e[0],dD(f));h=BN(l,e[1],dD(m));}else if(hN(this,e[0],0,m,false)&&hN(this,e[1],1,f,true)){g=BN(j,e[0],dD(m));h=BN(l,e[1],dD(f));}else if(hN(this,e[0],0,f,true)&&eN(this,e[1],1,f,true)){g=BN(j,e[0],dD(uh(f/2)));h=xN(new wN(),g.a,l.b);}else if(eN(this,e[0],0,f,true)&&hN(this,e[1],1,f,true)){g=BN(j,e[0],dD(uh(f/2)));h=xN(new wN(),g.a,l.b);}else if(hN(this,e[0],0,m,false)&&eN(this,e[1],1,m,false)){g=BN(j,e[0],dD(uh(m/2)));h=xN(new wN(),l.a,g.b);}else if(eN(this,e[0],0,m,false)&&hN(this,e[1],1,m,false)){g=BN(j,e[0],dD(uh(m/2)));h=xN(new wN(),l.a,g.b);}else if(eN(this,e[0],0,f,true)&&eN(this,e[1],1,f,true)){g=BN(j,(kO(),oO),uh(f/2));h=xN(new wN(),g.a,l.b);}else if(eN(this,e[0],0,m,false)&&eN(this,e[1],1,m,false)){g=BN(j,(kO(),mO),uh(m/2));h=xN(new wN(),l.a,g.b);}yH(d.b,i);yH(d.b,j);if(g!==null){yH(d.b,g);}if(h!==null){yH(d.b,h);}yH(d.b,l);yH(d.b,k);return d;}
function dN(){}
_=dN.prototype=new yD();_.t=iN;_.tN=xL+'FullRectilinearTwoEndedCalculator';_.tI=128;function lN(c){var a,b,d;if(c.b!=2){throw qC(new pC(),'Unsupported connectors count');}a=qh(BH(c,0),32);b=qh(BH(c,1),32);d=tN(new rN());yH(d.b,xN(new wN(),a.kb()+uh(a.qb()/2),a.ob()+uh(a.hb()/2)));yH(d.b,xN(new wN(),a.kb()+uh(a.qb()/2),b.ob()+uh(b.hb()/2)));yH(d.b,xN(new wN(),b.kb()+uh(b.qb()/2),b.ob()+uh(b.hb()/2)));return d;}
function jN(){}
_=jN.prototype=new yD();_.t=lN;_.tN=xL+'SimpleRectilinearTwoEndedCalculator';_.tI=129;function sN(a){a.b=wH(new uH());}
function tN(a){sN(a);return a;}
function uN(b,a){sN(b);xH(b.b,a);return b;}
function rN(){}
_=rN.prototype=new yD();_.tN=yL+'ConnectionData';_.tI=130;function nN(a){a.a=wH(new uH());}
function oN(c,b,a){uN(c,b);nN(c);xH(c.a,a);return c;}
function pN(c,b,a){oN(c,qI(b),qI(a));return c;}
function mN(){}
_=mN.prototype=new rN();_.tN=yL+'BezierConnectionData';_.tI=131;function xN(b,a,c){b.a=a;b.b=c;return b;}
function zN(b,a){return hD((b.a-a.a)*(b.a-a.a)+(b.b-a.b)*(b.b-a.b));}
function BN(c,a,b){if(a===(kO(),mO)){return xN(new wN(),c.a,c.b+b);}else if(a===(kO(),pO)){return xN(new wN(),c.a,c.b-b);}else if(a===(kO(),nO)){return xN(new wN(),c.a-b,c.b);}else if(a===(kO(),oO)){return xN(new wN(),c.a+b,c.b);}else{throw tC(new sC());}}
function AN(a,b){return xN(new wN(),a.a+b.a,a.b+b.b);}
function CN(a){return xN(new wN(),-a.a,-a.b);}
function wN(){}
_=wN.prototype=new yD();_.tN=yL+'Point';_.tI=132;_.a=0;_.b=0;function EN(a){a.c=vK(new uK());}
function FN(a){EN(a);return a;}
function bO(b,a){return BN(xN(new wN(),b.kb()+uh(b.qb()/2),b.ob()+uh(b.hb()/2)),a,lO(a)?uh(b.qb()/2):uh(b.hb()/2));}
function cO(c){var a,b;for(b=yK(c.c);tG(b);){a=qh(uG(b),39);a.zc();}}
function dO(a){wK(this.c,a);}
function eO(a){return bO(this,a);}
function fO(){return qO();}
function gO(a){return bO(this,a);}
function DN(){}
_=DN.prototype=new yD();_.w=dO;_.bb=eO;_.eb=fO;_.pc=gO;_.tN=zL+'AbstractConnector';_.tI=133;function kO(){kO=hL;pO=jO(new iO(),'UP');mO=jO(new iO(),'DOWN');nO=jO(new iO(),'LEFT');oO=jO(new iO(),'RIGHT');}
function jO(b,a){kO();b.a=a;return b;}
function lO(a){return a===nO||a===oO;}
function qO(){kO();return lh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',152,34,[pO,mO,nO,oO]);}
function rO(){return this.a;}
function iO(){}
_=iO.prototype=new yD();_.tS=rO;_.tN=zL+'Direction';_.tI=134;_.a=null;var mO,nO,oO,pO;function yO(){yO=hL;aP=BJ(new FI());}
function xO(a,b){yO();FN(a);a.b=b;return a;}
function zO(){return this.b.lb();}
function AO(){var a,b;a=0;b=ik(this.b.gb());while(b!==null){if(oE('relative',jk(b,'position'))){a=Fj(b);break;}b=ik(b);}return gz(this.b)-a;}
function BO(){var a,b;a=0;b=ik(this.b.gb());while(b!==null){if(oE('relative',jk(b,'position'))){a=ak(b);break;}b=ik(b);}return hz(this.b)-a;}
function CO(){return this.b.mb();}
function DO(a){yO();return qh(bK(aP,a),40);}
function EO(b){yO();var a;if(EJ(aP,b)){return qh(bK(aP,b),40);}else{a=xO(new sO(),b);cK(aP,b,a);return a;}}
function FO(c,b){yO();var a;if(EJ(aP,c)){return qh(bK(aP,c),40);}else{a=uO(new tO(),c,b);cK(aP,c,a);return a;}}
function sO(){}
_=sO.prototype=new DN();_.hb=zO;_.kb=AO;_.ob=BO;_.qb=CO;_.tN=zL+'UIObjectConnector';_.tI=135;_.b=null;var aP;function vO(){vO=hL;yO();}
function uO(b,a,c){vO();b.a=c;xO(b,a);return b;}
function wO(){return this.a;}
function tO(){}
_=tO.prototype=new sO();_.eb=wO;_.tN=zL+'UIObjectConnector$1';_.tI=136;function kP(e,a){a=a.replace(/[\[]/,'\\[').replace(/[\]]/,'\\]');var c='[\\?&]'+a+'=([^&#]*)';var b=new RegExp(c);var d=b.exec($wnd.location.href);if(d==null)return '';else return d[1];}
function lP(a){lg(new cP());bl(gP(new fP(),a));}
function bP(){}
_=bP.prototype=new yD();_.tN=AL+'BaseExamplesEntryPoint';_.tI=137;function eP(e,f){var a,b,c,d;d='Uncaught exception: ';while(f!==null){c=f.c;d+=kF(f)+'\n';for(b=0;b<c.a;b++){d+='    at '+c[b]+'\n';}f=f.a;if(f!==null){d+='Caused by: ';}}a=xq(new vq(),true);Ak(a.gb(),'backgroundColor','#ABCDEF');bF(),dF;d=tE(d,' ','&nbsp;');Aq(a,'<pre>'+d+'<\/pre>');Ev(a);}
function cP(){}
_=cP.prototype=new yD();_.tN=AL+'BaseExamplesEntryPoint$1';_.tI=138;function gP(b,a){b.a=a;return b;}
function iP(){tP(this.a);}
function fP(){}
_=fP.prototype=new yD();_.F=iP;_.tN=AL+'BaseExamplesEntryPoint$2';_.tI=139;function tP(c){var a,b;b=xy(new ky());dp(Ew('tabs'),b);zy(b,vQ(new uQ()),'Rectilinear');zy(b,rQ(new qQ()),'Bezier');zy(b,zQ(new yQ()),'Simple rect.');yy(b,oP(new nP(),c,b));a=kP(c,'tab');if(a===null||oE('',a)){a='0';}Ey(b,EC(a));}
function mP(){}
_=mP.prototype=new bP();_.tN=AL+'GwtDiagramsExample';_.tI=140;function oP(b,a,c){b.a=c;return b;}
function qP(a,b){return true;}
function rP(b,c){var a;a=qh(By(this.a,c),41);jQ(a);}
function nP(){}
_=nP.prototype=new yD();_.Bb=qP;_.lc=rP;_.tN=AL+'GwtDiagramsExample$1';_.tI=141;function mQ(a){a.c=cp(new bp());}
function nQ(a){var b;ix(a);mQ(a);ez(a,'gwt-diagrams-example');b=Ez(new Cz());kx(a,b);Fz(b,a.c);Fz(b,pQ(a,iQ(a)));return a;}
function pQ(e,d){var a,b,c;a=rr(new qr());ez(a,'gwt-diagrams-sources-panel');for(b=bG(d);AF(b);){c=qh(BF(b),12);sr(a,c);}return a;}
function lQ(){}
_=lQ.prototype=new bx();_.tN=BL+'AbstractExample';_.tI=142;function cQ(a){a.a=wH(new uH());}
function dQ(a){nQ(a);cQ(a);a.b=hQ(a);Ak(a.c.gb(),'width','450px');Ak(a.c.gb(),'height','350px');a.B();return a;}
function eQ(b,a){dp(b.c,a);yH(b.a,a);}
function gQ(e,d,c,f,a){var b;b=av(new Eu(),d);ez(b,'example-connector');ep(e.c,b,c,f);yP(e.b,b);if(a!==null){return FO(b,lh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',152,34,[a]));}return EO(b);}
function hQ(b){var a;a=wP(new vP(),b.c,true,b);return a;}
function iQ(f){var a,b,c,d,e;e=wH(new uH());b=rE(jg(f),46);a=uE(jg(f),b+1);yH(e,tu(new ru(),a+'.java',''));yH(e,tu(new ru(),'AbstractExample.java',''));yH(e,tu(new ru(),'AbstractConnectionsExample.java',''));for(d=bG(e);AF(d);){c=qh(BF(d),42);ez(c,'gwt-diagrams-source-link');uu(c,FP(new EP(),f,c));}return e;}
function jQ(c){var a,b;for(b=bG(c.a);AF(b);){a=qh(BF(b),39);a.zc();}}
function kQ(){var a,b,c,d,e,f,g,h;a=gQ(this,'all',50,50,null);b=gQ(this,'all',100,100,null);this.x(a,b);c=gQ(this,'up',250,50,(kO(),pO));d=gQ(this,'down',300,100,(kO(),mO));this.x(c,d);e=gQ(this,'left',50,200,(kO(),nO));f=gQ(this,'right',100,250,(kO(),oO));this.x(e,f);g=gQ(this,'left',250,200,(kO(),nO));h=gQ(this,'left',300,250,(kO(),nO));this.x(g,h);}
function uP(){}
_=uP.prototype=new lQ();_.B=kQ;_.tN=BL+'AbstractConnectionsExample';_.tI=143;_.b=null;function xP(){xP=hL;ic();}
function wP(d,a,b,c){xP();hc(d,a,b);return d;}
function yP(a,b){z(a,b);Ak(b.gb(),'position','absolute');Ak(b.gb(),'zIndex','100');}
function zP(c,b,a){return BP(new AP(),b,a,c);}
function vP(){}
_=vP.prototype=new gc();_.tN=BL+'AbstractConnectionsExample$1';_.tI=144;function CP(){CP=hL;vd();}
function BP(d,a,b,c){CP();ud(d,a,b);return d;}
function DP(d,c,b){var a;sc(this,d,c,b);a=DO(c);if(a!==null){cO(a);}}
function AP(){}
_=AP.prototype=new td();_.jc=DP;_.tN=BL+'AbstractConnectionsExample$2';_.tI=145;function FP(b,a,c){b.a=c;return b;}
function bQ(a){Bm('../source/'+wu(this.a),'','');}
function EP(){}
_=EP.prototype=new yD();_.Db=bQ;_.tN=BL+'AbstractConnectionsExample$3';_.tI=146;function rQ(a){dQ(a);return a;}
function tQ(a,b){eQ(this,qM(new oM(),a,b));}
function qQ(){}
_=qQ.prototype=new uP();_.x=tQ;_.tN=BL+'BezierExample';_.tI=147;function vQ(a){dQ(a);return a;}
function xQ(a,b){eQ(this,yM(new wM(),a,b));}
function uQ(){}
_=uQ.prototype=new uP();_.x=xQ;_.tN=BL+'RectilinearExample';_.tI=148;function zQ(a){dQ(a);return a;}
function BQ(d,a,b){var c;c=yM(new wM(),a,b);mM(c,new jN());eQ(d,c);}
function CQ(a,b){BQ(this,a,b);}
function DQ(){var a,b;a=gQ(this,'connector 1',50,50,(kO(),pO));b=gQ(this,'connector 2',200,200,(kO(),mO));BQ(this,a,b);}
function yQ(){}
_=yQ.prototype=new uP();_.x=CQ;_.B=DQ;_.tN=BL+'SimpleRectilinearExample';_.tI=149;function oB(){lP(new mP());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{oB();}catch(a){b(d);}else{oB();}}
var xh=[{},{25:1},{1:1,25:1,36:1},{25:1},{25:1},{25:1},{25:1},{15:1,25:1},{25:1},{9:1,25:1,36:1},{21:1,25:1},{25:1},{7:1,25:1},{7:1,25:1},{7:1,25:1},{7:1,25:1},{25:1},{14:1,25:1},{14:1,25:1},{11:1,14:1,25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{13:1,25:1},{25:1},{25:1},{25:1},{10:1,14:1,25:1},{25:1},{18:1,25:1},{18:1,25:1},{18:1,25:1},{25:1},{13:1,17:1,25:1},{13:1,25:1},{19:1,25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1,26:1},{12:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{2:1,12:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{25:1},{25:1,29:1},{25:1,29:1},{25:1,29:1},{12:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{6:1,12:1,24:1,25:1,26:1,27:1},{6:1,12:1,16:1,24:1,25:1,26:1,27:1},{6:1,12:1,16:1,21:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{25:1},{25:1},{5:1,12:1,24:1,25:1,26:1,27:1},{12:1,25:1,26:1,27:1},{12:1,25:1,26:1,27:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{3:1,12:1,24:1,25:1,26:1,27:1},{12:1,25:1,26:1,27:1,42:1},{25:1,29:1},{2:1,12:1,22:1,24:1,25:1,26:1,27:1},{19:1,25:1},{25:1},{12:1,20:1,25:1,26:1,27:1},{25:1,29:1},{12:1,23:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{12:1,20:1,25:1,26:1,27:1},{4:1,12:1,24:1,25:1,26:1,27:1},{25:1},{25:1},{25:1},{25:1},{15:1,25:1},{25:1},{25:1},{25:1},{10:1,14:1,25:1},{25:1,28:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{25:1},{10:1,14:1,25:1},{25:1},{25:1,30:1},{25:1,31:1},{25:1,31:1},{25:1},{25:1},{25:1},{25:1},{25:1,30:1},{25:1,37:1},{25:1,31:1},{25:1},{25:1,31:1},{10:1,14:1,25:1},{25:1},{25:1},{12:1,25:1,26:1,27:1,39:1},{12:1,25:1,26:1,27:1,39:1},{12:1,25:1,26:1,27:1,39:1},{25:1},{25:1},{25:1},{25:1},{25:1,38:1},{25:1,35:1},{25:1,32:1},{25:1,34:1},{25:1,32:1,40:1},{25:1,32:1,40:1},{25:1},{25:1},{15:1,25:1},{25:1},{23:1,25:1},{6:1,12:1,24:1,25:1,26:1,27:1},{6:1,12:1,24:1,25:1,26:1,27:1,41:1},{25:1},{7:1,25:1},{20:1,25:1},{6:1,12:1,24:1,25:1,26:1,27:1,41:1},{6:1,12:1,24:1,25:1,26:1,27:1,41:1},{6:1,12:1,24:1,25:1,26:1,27:1,41:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{8:1,25:1},{25:1},{25:1},{25:1}];if (pl_balon_gwt_diagramsexample_GwtDiagramsExample) {  var __gwt_initHandlers = pl_balon_gwt_diagramsexample_GwtDiagramsExample.__gwt_initHandlers;  pl_balon_gwt_diagramsexample_GwtDiagramsExample.onScriptLoad(gwtOnLoad);}})();