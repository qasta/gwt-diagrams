(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,wJ='com.allen_sauer.gwt.dragdrop.client.',xJ='com.allen_sauer.gwt.dragdrop.client.drop.',yJ='com.allen_sauer.gwt.dragdrop.client.util.',zJ='com.allen_sauer.gwt.dragdrop.client.util.impl.',AJ='com.google.gwt.core.client.',BJ='com.google.gwt.lang.',CJ='com.google.gwt.user.client.',DJ='com.google.gwt.user.client.impl.',EJ='com.google.gwt.user.client.ui.',FJ='com.google.gwt.user.client.ui.impl.',aK='java.io.',bK='java.lang.',cK='java.util.',dK='pl.balon.gwt.diagrams.client.common.bezier.',eK='pl.balon.gwt.diagrams.client.connection.',fK='pl.balon.gwt.diagrams.client.connection.calculator.',gK='pl.balon.gwt.diagrams.client.connection.data.',hK='pl.balon.gwt.diagrams.client.connector.',iK='pl.balon.gwt.diagramsexample.client.',jK='pl.balon.gwt.diagramsexample.client.examples.';function vJ(){}
function iC(a){return this===a;}
function jC(){return sD(this);}
function kC(){return this.tN+'@'+this.hC();}
function gC(){}
_=gC.prototype={};_.eQ=iC;_.hC=jC;_.tS=kC;_.toString=function(){return this.tS();};_.tN=bK+'Object';_.tI=1;function lH(b,a){b.d=a;return b;}
function kH(){}
_=kH.prototype=new gC();_.tN=cK+'EventObject';_.tI=3;_.d=null;function ib(c,b,a){lH(c,b);c.c=a;return c;}
function kb(){var a;a=this.c!==null?'dropTarget='+jf(this.c):'[cancelled]';return 'DragEndEvent('+a+', source='+jf(this.d)+')';}
function hb(){}
_=hb.prototype=new kH();_.tS=kb;_.tN=wJ+'DragEndEvent';_.tI=4;_.c=null;function o(c,b,a,d,e){ib(c,b,a);c.a=d;c.b=e;return c;}
function q(){return 'AbsolutePositionDragEndEvent(x='+this.a+', y='+this.b+')';}
function n(){}
_=n.prototype=new hb();_.tS=q;_.tN=wJ+'AbsolutePositionDragEndEvent';_.tI=5;_.a=0;_.b=0;function u(){u=vJ;F=jI(new nH());}
function s(a){a.g=x(a);}
function t(c,b,a){u();s(c);c.f=b!==null?b:zv();c.e=eO(c,c.f,a);B(c,c.e);c.l=Cb(new Ab(),c);return c;}
function v(c,a,b){gy(a,'dragdrop-dragging');}
function w(b,a){yb(b.g,b.f,a);ay(a,'dragdrop-dragging');}
function x(a){return tb(new lb());}
function y(b,c){var a;a=wb(b.g,c,b.f);return a!==null?a:b.e;}
function z(a,b){{A(a,b,b);}}
function A(c,b,a){ac(c.l,b,a);ay(b,'dragdrop-draggable');ay(a,'dragdrop-handle');qI(F,b,a);}
function B(b,a){ub(b.g,a);}
function C(b,a){if(rh(b.j,2)){jo(qh(b.j,2),a,b.k.a,b.k.d);}else if(rh(b.j,3)){st(qh(b.j,3),a,b.h);}else if(rh(b.j,4)){Ey(qh(b.j,4),a,b.h);}else if(rh(b.j,5)){zq(qh(b.j,5),a,b.h);}else if(rh(b.j,6)){qh(b.j,6).vc(a);}else{throw nC(new lC(),'Unable to handle initialDraggableParent '+jg(b.j));}}
function D(b,a){if(b.i!==null&&aD(b.i)!=0){xk(a.gb(),'margin',b.i);}}
function E(b,a){b.j=a.p;if(rh(b.j,2)){b.k=of(new nf(),a,b.j);}else if(rh(b.j,3)){b.h=dp(qh(b.j,3),a);}else if(rh(b.j,4)){b.h=dp(qh(b.j,4),a);}else if(rh(b.j,5)){b.h=dp(qh(b.j,5),a);}else if(rh(b.j,6)){}else{throw nC(new lC(),"Unable to handle 'initialDraggableParent instanceof "+jg(b.j)+"'; Please create your own DragController and override saveDraggableLocationAndStyle() and restoreDraggableLocation()");}b.i=gk(a.gb(),'margin');if(b.i!==null&&aD(b.i)!=0){xk(a.gb(),'margin','0px');}}
function r(){}
_=r.prototype=new gC();_.tN=wJ+'AbstractDragController';_.tI=6;_.e=null;_.f=null;_.h=0;_.i=null;_.j=null;_.k=null;_.l=null;var F;function bb(b,a){b.b=a;return b;}
function db(a){if(a.c==0){return;}Db(a.b,a.d,a.e);a.a=qD()-a.c;a.c=0;}
function eb(a,b,c){a.d=b;a.e=c;if(a.c==0){a.c=qD();}if(a.a>80){Ek(a);}else{db(a);}}
function fb(){db(this);}
function ab(){}
_=ab.prototype=new gC();_.F=fb;_.tN=wJ+'DeferredMoveCommand';_.tI=7;_.a=0;_.b=null;_.c=0;_.d=0;_.e=0;function sb(a){a.a=eG(new cG());}
function tb(a){sb(a);return a;}
function ub(b,a){gG(b.a,a);}
function wb(g,h,a){var b,c,d,e,f,i,j,k;i=lf(new kf(),h,null);j=he(i);e=null;c=2147483647;for(d=0;d<g.b.a;d++){b=g.b[d];f=b.c;if(le(f,i)){k=ge(f,j);if(k<=c){if(e===null|| !jk(pb(b).gb(),pb(e).gb())){c=k;e=b;}}}}return e===null?null:e.a;}
function xb(a){return pE(a.a);}
function yb(h,b,d){var a,c,e,f,g;a=lf(new kf(),b,null);g=eG(new cG());for(f=xb(h);iE(f);){e=qh(jE(f),7);c=nb(new mb(),e);if(!jk(d.gb(),pb(c).gb())){if(le(c.c,a)){gG(g,c);}}}h.b=qh(qG(g,lh('[Lcom.allen_sauer.gwt.dragdrop.client.DropControllerCollection$Candidate;',149,9,[])),8);aH(h.b);}
function lb(){}
_=lb.prototype=new gC();_.tN=wJ+'DropControllerCollection';_.tI=8;_.b=null;function nb(c,a){var b;c.a=a;b=a.fb();if(!b.tb()){throw dB(new bB(),'Unattached drop target; please call dragController#unregisterDropController');}c.c=lf(new kf(),b,null);return c;}
function pb(a){return a.a.fb();}
function qb(a){if(a.b===null){a.b=kB(new jB(),je(a.c));}return a.b;}
function rb(a){var b;b=qh(a,9);return mB(qb(this),qb(b));}
function mb(){}
_=mb.prototype=new gC();_.u=rb;_.tN=wJ+'DropControllerCollection$Candidate';_.tI=9;_.a=null;_.b=null;_.c=null;function Bb(a){a.c=bb(new ab(),a);a.e=jI(new nH());}
function Cb(b,a){Bb(b);b.d=a;b.a=a.f;return b;}
function Db(e,f,g){var a,b,c,d;c=of(new nf(),e.b,e.a);a=c.a+e.m+f-e.i;b=c.d+e.n+g-e.j;Ce(e.l.gb(),a,b);d=y(e.d,e.l);if(e.h!==d){if(e.h!==null){e.h.bc(e.f,e.d);}e.h=d;if(e.h!==null){e.h.Fb(e.l,e.f,e.d);}}if(e.h!==null){e.h.ic(e.l,e.f,e.d);}}
function Eb(b){var a;lk(b.b.gb());b.g=false;if(b.h!==null){b.h.bc(b.f,b.d);}b.h=null;kc(b.d,b.f,null);a=ib(new hb(),b.f,null);}
function ac(c,b,a){if(a!==null){Et(a,c);qI(c.e,a,b);}else{throw nC(new lC(),'dragHandle must implement SourcesMouseEvents to be draggable');}}
function bc(f,g){var a,c,d,e;f.b=g;f.f=qh(pI(f.e,f.b),12);lc(f.d,f.f);f.l=f.d.d;e=of(new nf(),f.b,f.a);c=of(new nf(),f.l,f.a);f.m=c.a-e.a;f.n=c.d-e.d;qk(f.b.gb());f.g=true;try{Db(f,f.i,f.j);}catch(a){a=Ah(a);if(rh(a,10)){d=a;Eb(f);throw d;}else throw a;}}
function cc(b,c,d){var a;a=qj((aj(),kj));if(a!=1&&a!=(-1)){return;}this.k=true;if(this.g){return;}Bj((aj(),kj));ef();this.i=c;this.j=d;}
function dc(a){}
function ec(a){}
function fc(d,e,f){var a,c;if(!this.g){if(this.k){bc(this,d);}if(!this.g){return;}}Bj((aj(),kj));try{eb(this.c,e,f);}catch(a){a=Ah(a);if(rh(a,10)){c=a;Eb(this);throw c;}else throw a;}}
function gc(g,h,i){var a,a,d,e,f;d=qj((aj(),kj));if(d!=1&&d!=(-1)){return;}this.k=false;if(!this.g){return;}try{lk(this.b.gb());Db(this,h,i);this.g=false;if(this.h===null){Eb(this);return;}{this.h.fb();}try{this.h.jc(this.l,this.f,this.d);}catch(a){a=Ah(a);if(rh(a,11)){a;Eb(this);return;}else throw a;}kc(this.d,this.f,this.h.fb());e=this.h.Eb(this.l,this.f,this.d);}catch(a){a=Ah(a);if(rh(a,10)){f=a;Eb(this);throw f;}else throw a;}finally{this.h=null;}}
function Ab(){}
_=Ab.prototype=new gC();_.dc=cc;_.ec=dc;_.fc=ec;_.gc=fc;_.hc=gc;_.tN=wJ+'MouseDragHandler';_.tI=10;_.a=null;_.b=null;_.d=null;_.f=null;_.g=false;_.h=null;_.i=0;_.j=0;_.k=false;_.l=null;_.m=0;_.n=0;function jc(){jc=vJ;u();}
function ic(c,b,a){jc();t(c,b,a);return c;}
function kc(c,a,b){v(c,a,b);if(c.a!==null){c.a=null;if(c.c!==null){sz(c.c);c.c=null;}else{if(b===null){C(c,a);}}D(c,a);sz(c.d);c.d=null;}}
function lc(d,a){var b,c;w(d,a);d.a=a;d.c=mc(d,a);E(d,a);c=of(new nf(),a,d.f);d.d=ew(new Dv());ay(d.d,'dragdrop-movable-panel');if(d.c===null){jy(d.d,a.lb(),a.kb());}jo(d.f,d.d,c.a,c.d);b=d.c!==null?d.c:d.a;d.d.vc(b);}
function mc(c,a){var b;if(c.b){b=ws(new Aq(),'this is a Drag Proxy');ay(b,'dragdrop-proxy');jy(b,c.a.lb(),c.a.kb());return b;}else{return null;}}
function hc(){}
_=hc.prototype=new r();_.tN=wJ+'PickupDragController';_.tI=11;_.a=null;_.b=false;_.c=null;_.d=null;function Cc(b,a){b.g=a;ay(a,'dragdrop-boundary');return b;}
function Ec(d,c,b,a){gy(d.g,'dragdrop-dropTarget-engage dragdrop-engage');return d.wb(c,b,a);}
function Fc(d,c,b,a){ay(d.g,'dragdrop-dropTarget-engage dragdrop-engage');}
function ad(c,b,a){gy(c.g,'dragdrop-dropTarget-engage dragdrop-engage');}
function bd(){return this.g;}
function cd(c,b,a){return ib(new hb(),b,this.g);}
function dd(c,b,a){return Ec(this,c,b,a);}
function ed(c,b,a){Fc(this,c,b,a);}
function fd(b,a){ad(this,b,a);}
function gd(c,b,a){}
function hd(c,b,a){}
function Bc(){}
_=Bc.prototype=new gC();_.fb=bd;_.wb=cd;_.Eb=dd;_.Fb=ed;_.bc=fd;_.ic=gd;_.jc=hd;_.tN=xJ+'AbstractDropController';_.tI=12;_.g=null;function kd(){kd=vJ;qd=Ct(new At(),'x');}
function jd(b,a){kd();Cc(b,a);return b;}
function ld(f,e){var a,b,c,d;d=ew(new Dv());ay(d,'dragdrop-positioner');jo(zv(),d,(-500),(-500));d.vc(qd);a=ew(new Dv());c=e.lb()-bf(d);b=e.kb()-cf(d);jy(a,c,b);d.vc(a);return d;}
function md(e,d,b,a){var c;c=Ec(e,d,b,a);pd(e);return c;}
function nd(d,c,b,a){Fc(d,c,b,a);d.f=ld(d,b);}
function od(c,b,a){ad(c,b,a);pd(c);}
function pd(a){if(a.f!==null){sz(a.f);}}
function rd(c,b,a){return md(this,c,b,a);}
function sd(c,b,a){nd(this,c,b,a);}
function td(b,a){od(this,b,a);}
function id(){}
_=id.prototype=new Bc();_.Eb=rd;_.Fb=sd;_.bc=td;_.tN=xJ+'AbstractPositioningDropController';_.tI=13;_.f=null;var qd;function pc(){pc=vJ;kd();}
function oc(b,a){pc();jd(b,a);b.d=Cd(new Bd(),a);return b;}
function qc(d,c,a,e){var b;b=d.cb(c,a,e);if(b!==null){jo(d.d.b,e,b.a,b.d);}}
function rc(e,d,b,a){var c;jo(e.d.b,b,e.c.a,e.c.d);c=md(e,d,b,a);e.e=null;return c;}
function sc(c,b,a){od(c,b,a);ae(c.d,null);c.e=null;}
function tc(d,c,b,a){qc(d,c,b,d.f);}
function uc(b,a,d){var c;c=lf(new kf(),b,this.d.a);if(this.e===null){this.e=of(new nf(),b,this.d.b);}else{uf(this.e,b);}qf(this.e,0,0,Fd(this.d)-ke(c),Ed(this.d)-ie(c));return this.e;}
function vc(e,b,a){var c,d;c=this.g;d=of(new nf(),b,c);return o(new n(),b,c,d.a,d.d);}
function wc(c,b,a){return rc(this,c,b,a);}
function xc(c,b,a){nd(this,c,b,a);ae(this.d,a.f);}
function yc(b,a){sc(this,b,a);}
function zc(c,b,a){tc(this,c,b,a);}
function Ac(c,b,a){this.c=this.cb(c,b,b);if(this.c===null){throw ce(new be());}}
function nc(){}
_=nc.prototype=new id();_.cb=uc;_.wb=vc;_.Eb=wc;_.Fb=xc;_.bc=yc;_.ic=zc;_.jc=Ac;_.tN=xJ+'AbsolutePositionDropController';_.tI=14;_.c=null;_.d=null;_.e=null;function wd(){wd=vJ;pc();}
function vd(c,b,a){wd();oc(c,b);c.a=a;return c;}
function xd(b,a,d){var c;if(this.a){c=lf(new kf(),b,this.d.a);if(this.b===null){this.b=of(new nf(),b,this.d.b);}else{uf(this.b,b);}qf(this.b,0,0,Fd(this.d)-ke(c),Ed(this.d)-ie(c));return this.b;}else{return null;}}
function yd(d,c,a){var b;b=rc(this,d,c,a);this.b=null;return b;}
function zd(b,a){sc(this,b,a);this.b=null;}
function ud(){}
_=ud.prototype=new nc();_.cb=xd;_.Eb=yd;_.bc=zd;_.tN=xJ+'BoundaryDropController';_.tI=15;_.a=false;_.b=null;function Cd(b,a){b.b=a;return b;}
function Ed(a){return Fe(a.b.gb());}
function Fd(a){return af(a.b.gb());}
function ae(b,a){b.a=a;}
function Bd(){}
_=Bd.prototype=new gC();_.tN=xJ+'DropTargetInfo';_.tI=16;_.a=null;_.b=null;function xD(){xD=vJ;zD=kh('[Ljava.lang.StackTraceElement;',[147],[35],[0],null);}
function uD(a){a.c=zD;}
function vD(a){xD();uD(a);return a;}
function wD(b,a){xD();uD(b);b.b=a;return b;}
function yD(c){var a,b;a=jg(c);b=c.b;if(b!==null){return a+': '+b;}else{return a;}}
function AD(){return yD(this);}
function tD(){}
_=tD.prototype=new gC();_.tS=AD;_.tN=bK+'Throwable';_.tI=17;_.a=null;_.b=null;var zD;function DA(){DA=vJ;xD();}
function BA(a){DA();vD(a);return a;}
function CA(b,a){DA();wD(b,a);return b;}
function AA(){}
_=AA.prototype=new tD();_.tN=bK+'Exception';_.tI=18;function de(){de=vJ;DA();}
function ce(a){de();BA(a);return a;}
function be(){}
_=be.prototype=new AA();_.tN=xJ+'VetoDropException';_.tI=19;function ge(b,a){var c,d;c=yB(b.b-a.a,a.a-b.c);d=yB(b.d-a.b,a.b-b.a);return yB(c,d);}
function he(a){return we(new ve(),a.b+th(ke(a)/2),a.d+th(ie(a)/2));}
function ie(a){return a.a-a.d;}
function je(a){return ke(a)*ie(a);}
function ke(a){return a.c-a.b;}
function le(b,a){if(b.c<a.b||b.b>a.c||b.a<a.d||b.d>a.a){return false;}return true;}
function me(b,a){b.a=a;}
function ne(b,a){b.b=a;}
function oe(b,a){b.c=a;}
function pe(a,b){a.d=b;}
function qe(){return '[ ('+this.b+', '+this.d+') - ('+this.c+', '+this.a+') ]';}
function ee(){}
_=ee.prototype=new gC();_.tS=qe;_.tN=yJ+'AbstractArea';_.tI=20;_.a=0;_.b=0;_.c=0;_.d=0;function te(){return '('+this.jb()+', '+this.nb()+')';}
function re(){}
_=re.prototype=new gC();_.tS=te;_.tN=yJ+'AbstractLocation';_.tI=21;function we(b,a,c){b.a=a;b.b=c;return b;}
function ye(){return this.a;}
function ze(){return this.b;}
function ve(){}
_=ve.prototype=new re();_.jb=ye;_.nb=ze;_.tN=yJ+'CoordinateLocation';_.tI=22;_.a=0;_.b=0;function Be(){Be=vJ;{df=new zf();}}
function Ce(a,b,c){Be();a.style.left=b+'px';a.style.top=c+'px';}
function De(a){Be();return Df(df,a);}
function Ee(a){Be();return Ef(df,a);}
function Fe(a){Be();return Ff(df,a);}
function af(a){Be();return ag(df,a);}
function bf(a){Be();return dg(df,a);}
function cf(a){Be();return eg(df,a);}
function ef(){Be();bg(df);}
var df=null;function jf(a){var b;b=jg(a);return cD(b,FC(b,46)+1);}
function lf(e,g,c){var a,b,d,f;b=cy(g);f=dy(g);if(c!==null){b-=cy(c);b-=De(c.gb());f-=dy(c);f-=Ee(c.gb());}d=b+g.lb();a=f+g.kb();ne(e,b);pe(e,f);oe(e,d);me(e,a);return e;}
function kf(){}
_=kf.prototype=new ee();_.tN=yJ+'WidgetArea';_.tI=23;function of(b,c,a){sf(b,c);rf(b,a);tf(b);return b;}
function qf(e,c,d,a,b){e.a=yB(c,zB(e.a,a));e.d=yB(d,zB(e.d,b));}
function rf(b,a){if(a===null||a===zv()){b.b=0;b.c=0;}else{b.b=cy(a)+De(a.gb());b.c=dy(a)+Ee(a.gb());}}
function sf(a,b){if(b===null){a.e=0;a.f=0;}else{a.e=cy(b);a.f=dy(b);}}
function tf(a){a.a=a.e-a.b;a.d=a.f-a.c;}
function uf(a,b){sf(a,b);tf(a);}
function vf(){return this.a;}
function wf(){return this.d;}
function xf(){return '('+this.a+', '+this.d+')';}
function nf(){}
_=nf.prototype=new re();_.jb=vf;_.nb=wf;_.tS=xf;_.tN=yJ+'WidgetLocation';_.tI=24;_.a=0;_.b=0;_.c=0;_.d=0;_.e=0;_.f=0;function dg(a,b){return b.lb()-ag(a,b.gb());}
function eg(a,b){return b.kb()-Ff(a,b.gb());}
function yf(){}
_=yf.prototype=new gC();_.tN=zJ+'DOMUtilImpl';_.tI=25;function Df(e,d){try{var c=$doc.defaultView.getComputedStyle(d,null);var b=c.getPropertyValue('border-left-width');return b.indexOf('px')== -1?0:parseInt(b.substr(0,b.length-2));}catch(a){throw new Error('getBorderLeft exception:\n'+a);}}
function Ef(e,d){try{var c=$doc.defaultView.getComputedStyle(d,null);var b=c.getPropertyValue('border-top-width');return b.indexOf('px')== -1?0:parseInt(b.substr(0,b.length-2));}catch(a){throw new Error('getBorderTop: '+a);}}
function Ff(c,b){try{return b.clientHeight;}catch(a){throw new Error('getClientHeight exception:\n'+a);}}
function ag(c,b){try{return b.clientWidth;}catch(a){throw new Error('getClientWidth exception:\n'+a);}}
function bg(b){try{$wnd.getSelection().removeAllRanges();}catch(a){throw new Error('unselect exception:\n'+a);}}
function Bf(){}
_=Bf.prototype=new yf();_.tN=zJ+'DOMUtilImplStandard';_.tI=26;function zf(){}
_=zf.prototype=new Bf();_.tN=zJ+'DOMUtilImplOpera';_.tI=27;function jg(a){return a==null?null:a.tN;}
function lg(a){kg=a;}
var kg=null;function og(a){return a==null?0:a.$H?a.$H:(a.$H=qg());}
function pg(a){return a==null?0:a.$H?a.$H:(a.$H=qg());}
function qg(){return ++rg;}
var rg=0;function oC(){oC=vJ;DA();}
function mC(a){oC();BA(a);return a;}
function nC(b,a){oC();CA(b,a);return b;}
function lC(){}
_=lC.prototype=new AA();_.tN=bK+'RuntimeException';_.tI=28;function ug(){ug=vJ;oC();}
function tg(c,b,a){ug();nC(c,'JavaScript '+b+' exception: '+a);return c;}
function sg(){}
_=sg.prototype=new lC();_.tN=AJ+'JavaScriptException';_.tI=29;function xg(b,a){if(!rh(a,13)){return false;}return Bg(b,qh(a,13));}
function yg(a){return og(a);}
function zg(){return [];}
function Ag(){return {};}
function Cg(a){return xg(this,a);}
function Bg(a,b){return a===b;}
function Dg(){return yg(this);}
function Fg(){return Eg(this);}
function Eg(a){if(a.toString)return a.toString();return '[object]';}
function vg(){}
_=vg.prototype=new gC();_.eQ=Cg;_.hC=Dg;_.tS=Fg;_.tN=AJ+'JavaScriptObject';_.tI=30;function bh(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function dh(a,b,c){return a[b]=c;}
function fh(a,b){return eh(a,b);}
function eh(a,b){return bh(new ah(),b,a.tI,a.b,a.tN);}
function gh(b,a){return b[a];}
function ih(b,a){return b[a];}
function hh(a){return a.length;}
function kh(e,d,c,b,a){return jh(e,d,c,b,0,hh(b),a);}
function jh(j,i,g,c,e,a,b){var d,f,h;if((f=gh(c,e))<0){throw CB(new BB());}h=bh(new ah(),f,gh(i,e),gh(g,e),j);++e;if(e<a){j=cD(j,1);for(d=0;d<f;++d){dh(h,d,jh(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){dh(h,d,b);}}return h;}
function lh(f,e,c,g){var a,b,d;b=hh(g);d=bh(new ah(),b,e,c,f);for(a=0;a<b;++a){dh(d,a,ih(g,a));}return d;}
function mh(a,b,c){if(c!==null&&a.b!=0&& !rh(c,a.b)){throw iA(new hA());}return dh(a,b,c);}
function ah(){}
_=ah.prototype=new gC();_.tN=BJ+'Array';_.tI=31;function ph(b,a){return !(!(b&&wh[b][a]));}
function qh(b,a){if(b!=null)ph(b.tI,a)||vh();return b;}
function rh(b,a){return b!=null&&ph(b.tI,a);}
function sh(a){return a&65535;}
function th(a){if(a>(lB(),nB))return lB(),nB;if(a<(lB(),oB))return lB(),oB;return a>=0?Math.floor(a):Math.ceil(a);}
function vh(){throw vA(new uA());}
function uh(a){if(a!==null){throw vA(new uA());}return a;}
function xh(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var wh;function Ah(a){if(rh(a,14)){return a;}return tg(new sg(),Ch(a),Bh(a));}
function Bh(a){return a.message;}
function Ch(a){return a.name;}
function Fh(){Fh=vJ;oC();}
function Eh(b,a){Fh();mC(b);return b;}
function Dh(){}
_=Dh.prototype=new lC();_.tN=CJ+'CommandCanceledException';_.tI=34;function ui(a){a.a=ci(new bi(),a);a.b=eG(new cG());a.d=gi(new fi(),a);a.f=ki(new ji(),a);}
function vi(a){ui(a);return a;}
function xi(c){var a,b,d;a=mi(c.f);pi(c.f);b=null;if(rh(a,15)){b=Eh(new Dh(),qh(a,15));}else{}if(b!==null){d=kg;if(d!==null){qN(d,b);}}Ai(c,false);zi(c);}
function yi(e,d){var a,b,c,f;f=false;try{Ai(e,true);qi(e.f,e.b.b);wl(e.a,10000);while(ni(e.f)){b=oi(e.f);c=true;try{if(b===null){return;}if(rh(b,15)){a=qh(b,15);a.F();}else{}}finally{f=ri(e.f);if(f){return;}if(c){pi(e.f);}}if(Di(qD(),d)){return;}}}finally{if(!f){sl(e.a);Ai(e,false);zi(e);}}}
function zi(a){if(!mG(a.b)&& !a.e&& !a.c){Bi(a,true);wl(a.d,1);}}
function Ai(b,a){b.c=a;}
function Bi(b,a){b.e=a;}
function Ci(b,a){gG(b.b,a);zi(b);}
function Di(a,b){return xB(a-b)>=100;}
function ai(){}
_=ai.prototype=new gC();_.tN=CJ+'CommandExecutor';_.tI=35;_.c=false;_.e=false;function tl(){tl=vJ;Cl=eG(new cG());{Bl();}}
function rl(a){tl();return a;}
function sl(a){if(a.b){xl(a.c);}else{yl(a.c);}oG(Cl,a);}
function ul(e,d){var a,c;try{vl(e);}catch(a){a=Ah(a);if(rh(a,14)){c=a;qN(d,c);}else throw a;}}
function vl(a){if(!a.b){oG(Cl,a);}a.rc();}
function wl(b,a){if(a<=0){throw FA(new EA(),'must be positive');}sl(b);b.b=false;b.c=zl(b,a);gG(Cl,b);}
function xl(a){tl();$wnd.clearInterval(a);}
function yl(a){tl();$wnd.clearTimeout(a);}
function zl(b,a){tl();return $wnd.setTimeout(function(){b.ab();},a);}
function Al(){var a;a=kg;if(a!==null){ul(this,a);}else{vl(this);}}
function Bl(){tl();am(new nl());}
function ml(){}
_=ml.prototype=new gC();_.ab=Al;_.tN=CJ+'Timer';_.tI=36;_.b=false;_.c=0;var Cl;function di(){di=vJ;tl();}
function ci(b,a){di();b.a=a;rl(b);return b;}
function ei(){if(!this.a.c){return;}xi(this.a);}
function bi(){}
_=bi.prototype=new ml();_.rc=ei;_.tN=CJ+'CommandExecutor$1';_.tI=37;function hi(){hi=vJ;tl();}
function gi(b,a){hi();b.a=a;rl(b);return b;}
function ii(){Bi(this.a,false);yi(this.a,qD());}
function fi(){}
_=fi.prototype=new ml();_.rc=ii;_.tN=CJ+'CommandExecutor$2';_.tI=38;function ki(b,a){b.d=a;return b;}
function mi(a){return jG(a.d.b,a.b);}
function ni(a){return a.c<a.a;}
function oi(b){var a;b.b=b.c;a=jG(b.d.b,b.c++);if(b.c>=b.a){b.c=0;}return a;}
function pi(a){nG(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0;}}a.b=(-1);}
function qi(b,a){b.a=a;}
function ri(a){return a.b==(-1);}
function si(){return ni(this);}
function ti(){return oi(this);}
function ji(){}
_=ji.prototype=new gC();_.sb=si;_.xb=ti;_.tN=CJ+'CommandExecutor$CircularIterator';_.tI=39;_.a=0;_.b=(-1);_.c=0;function aj(){aj=vJ;pk=eG(new cG());{hk=new sm();bn(hk);}}
function bj(a){aj();gG(pk,a);}
function cj(b,a){aj();hn(hk,b,a);}
function dj(a,b){aj();return zm(hk,a,b);}
function ej(){aj();return kn(hk,'div');}
function fj(a){aj();return kn(hk,a);}
function gj(){aj();return kn(hk,'tbody');}
function hj(){aj();return kn(hk,'td');}
function ij(){aj();return kn(hk,'tr');}
function jj(){aj();return kn(hk,'table');}
function nj(b,a,d){aj();var c;c=kg;if(c!==null){lj(b,a,d,c);}else{mj(b,a,d);}}
function lj(e,d,g,f){aj();var a,c;try{mj(e,d,g);}catch(a){a=Ah(a);if(rh(a,14)){c=a;qN(f,c);}else throw a;}}
function mj(b,a,c){aj();var d;if(a===ok){if(Aj(b)==8192){ok=null;}}d=kj;kj=b;try{c.Bb(b);}finally{kj=d;}}
function oj(b,a){aj();ln(hk,b,a);}
function pj(a){aj();return mn(hk,a);}
function qj(a){aj();return um(hk,a);}
function rj(a){aj();return nn(hk,a);}
function sj(a){aj();return on(hk,a);}
function tj(a){aj();return pn(hk,a);}
function uj(a){aj();return Am(hk,a);}
function vj(a){aj();return qn(hk,a);}
function wj(a){aj();return rn(hk,a);}
function xj(a){aj();return sn(hk,a);}
function yj(a){aj();return Bm(hk,a);}
function zj(a){aj();return Cm(hk,a);}
function Aj(a){aj();return tn(hk,a);}
function Bj(a){aj();Dm(hk,a);}
function Cj(a){aj();return Em(hk,a);}
function Dj(a){aj();return vm(hk,a);}
function Ej(a){aj();return wm(hk,a);}
function Fj(b,a){aj();return un(hk,b,a);}
function ak(a){aj();return vn(hk,a);}
function ck(a,b){aj();return xn(hk,a,b);}
function bk(a,b){aj();return wn(hk,a,b);}
function dk(a){aj();return yn(hk,a);}
function ek(a){aj();return Fm(hk,a);}
function fk(a){aj();return an(hk,a);}
function gk(b,a){aj();return zn(hk,b,a);}
function ik(c,a,b){aj();cn(hk,c,a,b);}
function jk(b,a){aj();return dn(hk,b,a);}
function kk(a){aj();var b,c;c=true;if(pk.b>0){b=qh(jG(pk,pk.b-1),16);if(!(c=b.ac(a))){oj(a,true);Bj(a);}}return c;}
function lk(a){aj();if(ok!==null&&dj(a,ok)){ok=null;}en(hk,a);}
function mk(b,a){aj();An(hk,b,a);}
function nk(a){aj();oG(pk,a);}
function qk(a){aj();ok=a;fn(hk,a);}
function rk(b,a,c){aj();Bn(hk,b,a,c);}
function tk(a,b,c){aj();Dn(hk,a,b,c);}
function sk(a,b,c){aj();Cn(hk,a,b,c);}
function uk(a,b){aj();En(hk,a,b);}
function vk(a,b){aj();Fn(hk,a,b);}
function wk(a,b){aj();ao(hk,a,b);}
function xk(b,a,c){aj();bo(hk,b,a,c);}
function yk(a,b){aj();gn(hk,a,b);}
function zk(a){aj();return co(hk,a);}
function Ak(){aj();return eo(hk);}
function Bk(){aj();return fo(hk);}
var kj=null,hk=null,ok=null,pk;function Dk(){Dk=vJ;Fk=vi(new ai());}
function Ek(a){Dk();if(a===null){throw FB(new EB(),'cmd can not be null');}Ci(Fk,a);}
var Fk;function cl(a){if(rh(a,17)){return dj(this,qh(a,17));}return xg(xh(this,al),a);}
function dl(){return yg(xh(this,al));}
function el(){return zk(this);}
function al(){}
_=al.prototype=new vg();_.eQ=cl;_.hC=dl;_.tS=el;_.tN=CJ+'Element';_.tI=40;function jl(a){return xg(xh(this,fl),a);}
function kl(){return yg(xh(this,fl));}
function ll(){return Cj(this);}
function fl(){}
_=fl.prototype=new vg();_.eQ=jl;_.hC=kl;_.tS=ll;_.tN=CJ+'Event';_.tI=41;function pl(){while((tl(),Cl).b>0){sl(qh(jG((tl(),Cl),0),18));}}
function ql(){return null;}
function nl(){}
_=nl.prototype=new gC();_.mc=pl;_.nc=ql;_.tN=CJ+'Timer$1';_.tI=42;function Fl(){Fl=vJ;bm=eG(new cG());qm=eG(new cG());{mm();}}
function am(a){Fl();gG(bm,a);}
function cm(d){Fl();var a,c;try{dm();}catch(a){a=Ah(a);if(rh(a,14)){c=a;qN(d,c);}else throw a;}}
function dm(){Fl();var a,b;for(a=pE(bm);iE(a);){b=qh(jE(a),19);b.mc();}}
function em(d){Fl();var a,c;try{return fm();}catch(a){a=Ah(a);if(rh(a,14)){c=a;qN(d,c);return null;}else throw a;}}
function fm(){Fl();var a,b,c,d;d=null;for(a=pE(bm);iE(a);){b=qh(jE(a),19);c=b.nc();{d=c;}}return d;}
function gm(d){Fl();var a,c;try{hm();}catch(a){a=Ah(a);if(rh(a,14)){c=a;qN(d,c);}else throw a;}}
function hm(){Fl();var a,b;for(a=pE(qm);iE(a);){b=uh(jE(a));null.Cc();}}
function im(){Fl();return Ak();}
function jm(){Fl();return Bk();}
function km(){Fl();return $doc.documentElement.scrollLeft||$doc.body.scrollLeft;}
function lm(){Fl();return $doc.documentElement.scrollTop||$doc.body.scrollTop;}
function mm(){Fl();__gwt_initHandlers(function(){pm();},function(){return om();},function(){nm();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function nm(){Fl();var a;a=kg;if(a!==null){cm(a);}else{dm();}}
function om(){Fl();var a;a=kg;if(a!==null){return em(a);}else{return fm();}}
function pm(){Fl();var a;a=kg;if(a!==null){gm(a);}else{hm();}}
var bm,qm;function hn(c,b,a){b.appendChild(a);}
function kn(b,a){return $doc.createElement(a);}
function ln(c,b,a){b.cancelBubble=a;}
function mn(b,a){return !(!a.altKey);}
function nn(b,a){return a.clientX|| -1;}
function on(b,a){return a.clientY|| -1;}
function pn(b,a){return !(!a.ctrlKey);}
function qn(b,a){return a.which||(a.keyCode|| -1);}
function rn(b,a){return !(!a.metaKey);}
function sn(b,a){return !(!a.shiftKey);}
function tn(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function un(d,b,a){var c=b.getAttribute(a);return c==null?null:c;}
function vn(c,b){var a=$doc.getElementById(b);return a||null;}
function xn(d,a,b){var c=a[b];return c==null?null:String(c);}
function wn(d,a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function yn(b,a){return a.__eventBits||0;}
function zn(d,b,a){var c=b.style[a];return c==null?null:c;}
function An(c,b,a){b.removeChild(a);}
function Bn(c,b,a,d){b.setAttribute(a,d);}
function Dn(c,a,b,d){a[b]=d;}
function Cn(c,a,b,d){a[b]=d;}
function En(c,a,b){a.__listener=b;}
function Fn(c,a,b){if(!b){b='';}a.innerHTML=b;}
function ao(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function bo(c,b,a,d){b.style[a]=d;}
function co(b,a){return a.outerHTML;}
function eo(a){return $doc.body.clientHeight;}
function fo(a){return $doc.body.clientWidth;}
function rm(){}
_=rm.prototype=new gC();_.tN=DJ+'DOMImpl';_.tI=43;function zm(c,a,b){return a==b;}
function Am(b,a){return a.relatedTarget?a.relatedTarget:null;}
function Bm(b,a){return a.target||null;}
function Cm(b,a){return a.relatedTarget||null;}
function Dm(b,a){a.preventDefault();}
function Em(b,a){return a.toString();}
function Fm(c,b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a||null;}
function an(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function bn(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){nj(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!kk(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)nj(b,a,c);};$wnd.__captureElem=null;}
function cn(f,e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break;}++c;}b=b.nextSibling;}e.insertBefore(g,a);}
function dn(c,b,a){while(a){if(b==a){return true;}a=a.parentNode;if(a&&a.nodeType!=1){a=null;}}return false;}
function en(b,a){if(a==$wnd.__captureElem)$wnd.__captureElem=null;}
function fn(b,a){$wnd.__captureElem=a;}
function gn(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function xm(){}
_=xm.prototype=new rm();_.tN=DJ+'DOMImplStandard';_.tI=44;function um(c,b){var a=b.button;if(a==0){return 1;}else{return a|| -1;}}
function vm(d,b){var c=0;var a=b.parentNode;while(a!=$doc.body){if(a.tagName!='TR'&&a.tagName!='TBODY'){c-=a.scrollLeft;}a=a.parentNode;}while(b){c+=b.offsetLeft;b=b.offsetParent;}return c;}
function wm(c,b){var d=0;var a=b.parentNode;while(a!=$doc.body){if(a.tagName!='TR'&&a.tagName!='TBODY'){d-=a.scrollTop;}a=a.parentNode;}while(b){d+=b.offsetTop;b=b.offsetParent;}return d;}
function sm(){}
_=sm.prototype=new xm();_.tN=DJ+'DOMImplOpera';_.tI=45;function ay(b,a){ty(b.mb(),a,true);}
function cy(a){return Dj(a.gb());}
function dy(a){return Ej(a.gb());}
function ey(a){return bk(a.q,'offsetHeight');}
function fy(a){return bk(a.q,'offsetWidth');}
function gy(b,a){ty(b.mb(),a,false);}
function hy(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function iy(b,a){if(b.q!==null){hy(b,b.q,a);}b.q=a;}
function jy(b,c,a){if(c>=0){b.wc(c+'px');}if(a>=0){b.sc(a+'px');}}
function ky(b,a){sy(b.mb(),a);}
function ly(b,a){yk(b.gb(),a|dk(b.gb()));}
function my(){return this.q;}
function ny(){return ey(this);}
function oy(){return fy(this);}
function py(){return this.q;}
function qy(a){return ck(a,'className');}
function ry(a){xk(this.q,'height',a);}
function sy(a,b){tk(a,'className',b);}
function ty(c,j,a){var b,d,e,f,g,h,i;if(c===null){throw nC(new lC(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}j=eD(j);if(aD(j)==0){throw FA(new EA(),'Style names cannot be empty');}i=qy(c);e=DC(i,j);while(e!=(-1)){if(e==0||zC(i,e-1)==32){f=e+aD(j);g=aD(i);if(f==g||f<g&&zC(i,f)==32){break;}}e=EC(i,j,e+1);}if(a){if(e==(-1)){if(aD(i)>0){i+=' ';}tk(c,'className',i+j);}}else{if(e!=(-1)){b=eD(dD(i,0,e));d=eD(cD(i,e+aD(j)));if(aD(b)==0){h=d;}else if(aD(d)==0){h=b;}else{h=b+' '+d;}tk(c,'className',h);}}}
function uy(a,b){a.style.display=b?'':'none';}
function vy(a){uy(this.q,a);}
function wy(a){xk(this.q,'width',a);}
function xy(){if(this.q===null){return '(null handle)';}return zk(this.q);}
function Fx(){}
_=Fx.prototype=new gC();_.gb=my;_.kb=ny;_.lb=oy;_.mb=py;_.sc=ry;_.uc=vy;_.wc=wy;_.tS=xy;_.tN=EJ+'UIObject';_.tI=46;_.q=null;function rz(a){if(!a.tb()){throw dB(new bB(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.lc();}finally{a.D();uk(a.gb(),null);a.o=false;}}
function sz(a){if(rh(a.p,24)){qh(a.p,24).qc(a);}else if(a.p!==null){throw dB(new bB(),"This widget's parent does not implement HasWidgets");}}
function tz(b,a){if(b.tb()){uk(b.gb(),null);}iy(b,a);if(b.tb()){uk(a,b);}}
function uz(c,b){var a;a=c.p;if(b===null){if(a!==null&&a.tb()){c.Db();}c.p=null;}else{if(a!==null){throw dB(new bB(),'Cannot set a new parent without first clearing the old parent');}c.p=b;if(b.tb()){c.zb();}}}
function vz(){}
function wz(){}
function xz(){return this.o;}
function yz(){if(this.tb()){throw dB(new bB(),"Should only call onAttach when the widget is detached from the browser's document");}this.o=true;uk(this.gb(),this);this.C();this.cc();}
function zz(a){}
function Az(){rz(this);}
function Bz(){}
function Cz(){}
function az(){}
_=az.prototype=new Fx();_.C=vz;_.D=wz;_.tb=xz;_.zb=yz;_.Bb=zz;_.Db=Az;_.cc=Bz;_.lc=Cz;_.tN=EJ+'Widget';_.tI=47;_.o=false;_.p=null;function ou(b,a){uz(a,b);}
function qu(b,a){uz(a,null);}
function ru(){var a,b;for(b=this.ub();b.sb();){a=qh(b.xb(),12);a.zb();}}
function su(){var a,b;for(b=this.ub();b.sb();){a=qh(b.xb(),12);a.Db();}}
function tu(){}
function uu(){}
function nu(){}
_=nu.prototype=new az();_.C=ru;_.D=su;_.cc=tu;_.lc=uu;_.tN=EJ+'Panel';_.tI=48;function Co(a){a.f=hz(new bz(),a);}
function Do(a){Co(a);return a;}
function Eo(c,a,b){sz(a);iz(c.f,a);cj(b,a.gb());ou(c,a);}
function Fo(d,b,a){var c;bp(d,a);if(b.p===d){c=dp(d,b);if(c<a){a--;}}return a;}
function ap(b,a){if(a<0||a>=b.f.b){throw gB(new fB());}}
function bp(b,a){if(a<0||a>b.f.b){throw gB(new fB());}}
function ep(b,a){return kz(b.f,a);}
function dp(b,a){return lz(b.f,a);}
function fp(e,b,c,a,d){a=Fo(e,b,a);sz(b);mz(e.f,b,a);if(d){ik(c,b.gb(),a);}else{cj(c,b.gb());}ou(e,b);}
function gp(a){return nz(a.f);}
function hp(b,c){var a;if(c.p!==b){return false;}qu(b,c);a=c.gb();mk(fk(a),a);pz(b.f,c);return true;}
function ip(){return gp(this);}
function jp(a){return hp(this,a);}
function Bo(){}
_=Bo.prototype=new nu();_.ub=ip;_.qc=jp;_.tN=EJ+'ComplexPanel';_.tI=49;function ho(a){Do(a);tz(a,ej());xk(a.gb(),'position','relative');xk(a.gb(),'overflow','hidden');return a;}
function io(a,b){Eo(a,b,a.gb());}
function jo(b,d,a,c){sz(d);mo(b,d,a,c);io(b,d);}
function lo(b,c){var a;a=hp(b,c);if(a){no(c.gb());}return a;}
function mo(c,e,b,d){var a;a=e.gb();if(b==(-1)&&d==(-1)){no(a);}else{xk(a,'position','absolute');xk(a,'left',b+'px');xk(a,'top',d+'px');}}
function no(a){xk(a,'left','');xk(a,'top','');xk(a,'position','');}
function oo(a){return lo(this,a);}
function go(){}
_=go.prototype=new Bo();_.qc=oo;_.tN=EJ+'AbsolutePanel';_.tI=50;function qo(a){Do(a);a.e=jj();a.d=gj();cj(a.e,a.d);tz(a,a.e);return a;}
function so(c,d,a){var b;b=fk(d.gb());tk(b,'height',a);}
function to(c,b,a){tk(b,'align',a.a);}
function uo(c,b,a){xk(b,'verticalAlign',a.a);}
function vo(b,c,d){var a;a=fk(c.gb());tk(a,'width',d);}
function po(){}
_=po.prototype=new Bo();_.tN=EJ+'CellPanel';_.tI=51;_.d=null;_.e=null;function FD(d,a,b){var c;while(a.sb()){c=a.xb();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function bE(a){throw CD(new BD(),'add');}
function cE(b){var a;a=FD(this,this.ub(),b);return a!==null;}
function dE(){var a,b,c;c=rC(new qC());a=null;sC(c,'[');b=this.ub();while(b.sb()){if(a!==null){sC(c,a);}else{a=', ';}sC(c,nD(b.xb()));}sC(c,']');return wC(c);}
function ED(){}
_=ED.prototype=new gC();_.s=bE;_.z=cE;_.tS=dE;_.tN=cK+'AbstractCollection';_.tI=52;function oE(b,a){throw hB(new fB(),'Index: '+a+', Size: '+b.b);}
function pE(a){return gE(new fE(),a);}
function qE(b,a){throw CD(new BD(),'add');}
function rE(a){this.r(this.xc(),a);return true;}
function sE(e){var a,b,c,d,f;if(e===this){return true;}if(!rh(e,30)){return false;}f=qh(e,30);if(this.xc()!=f.xc()){return false;}c=pE(this);d=f.ub();while(iE(c)){a=jE(c);b=jE(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function tE(){var a,b,c,d;c=1;a=31;b=pE(this);while(iE(b)){d=jE(b);c=31*c+(d===null?0:d.hC());}return c;}
function uE(){return pE(this);}
function vE(a){throw CD(new BD(),'remove');}
function eE(){}
_=eE.prototype=new ED();_.r=qE;_.s=rE;_.eQ=sE;_.hC=tE;_.ub=uE;_.pc=vE;_.tN=cK+'AbstractList';_.tI=53;function dG(a){{hG(a);}}
function eG(a){dG(a);return a;}
function gG(b,a){AG(b.a,b.b++,a);return true;}
function fG(d,a){var b,c;c=a.ub();b=c.sb();while(c.sb()){AG(d.a,d.b++,c.xb());}return b;}
function hG(a){a.a=zg();a.b=0;}
function jG(b,a){if(a<0||a>=b.b){oE(b,a);}return wG(b.a,a);}
function kG(b,a){return lG(b,a,0);}
function lG(c,b,a){if(a<0){oE(c,a);}for(;a<c.b;++a){if(vG(b,wG(c.a,a))){return a;}}return (-1);}
function mG(a){return a.b==0;}
function nG(c,a){var b;b=jG(c,a);yG(c.a,a,1);--c.b;return b;}
function oG(c,b){var a;a=kG(c,b);if(a==(-1)){return false;}nG(c,a);return true;}
function pG(d,a,b){var c;c=jG(d,a);AG(d.a,a,b);return c;}
function qG(c,a){var b;if(a.a<c.b){a=fh(a,c.b);}for(b=0;b<c.b;++b){mh(a,b,wG(c.a,b));}if(a.a>c.b){mh(a,c.b,null);}return a;}
function sG(a,b){if(a<0||a>this.b){oE(this,a);}rG(this.a,a,b);++this.b;}
function tG(a){return gG(this,a);}
function rG(a,b,c){a.splice(b,0,c);}
function uG(a){return kG(this,a)!=(-1);}
function vG(a,b){return a===b||a!==null&&a.eQ(b);}
function xG(a){return jG(this,a);}
function wG(a,b){return a[b];}
function zG(a){return nG(this,a);}
function yG(a,c,b){a.splice(c,b);}
function AG(a,b,c){a[b]=c;}
function BG(){return this.b;}
function cG(){}
_=cG.prototype=new eE();_.r=sG;_.s=tG;_.z=uG;_.qb=xG;_.pc=zG;_.xc=BG;_.tN=cK+'ArrayList';_.tI=54;_.a=null;_.b=0;function xo(a){eG(a);return a;}
function zo(d,c){var a,b;for(a=pE(d);iE(a);){b=qh(jE(a),20);b.Cb(c);}}
function wo(){}
_=wo.prototype=new cG();_.tN=EJ+'ClickListenerCollection';_.tI=55;function mp(a,b){if(a.d!==null){throw dB(new bB(),'Composite.initWidget() may only be called once.');}sz(b);tz(a,b.gb());a.d=b;uz(b,a);}
function np(){if(this.d===null){throw dB(new bB(),'initWidget() was never called in '+jg(this));}return this.q;}
function op(){if(this.d!==null){return this.d.tb();}return false;}
function pp(){this.d.zb();this.cc();}
function qp(){try{this.lc();}finally{this.d.Db();}}
function kp(){}
_=kp.prototype=new az();_.gb=np;_.tb=op;_.zb=pp;_.Db=qp;_.tN=EJ+'Composite';_.tI=56;_.d=null;function sp(a){Do(a);tz(a,ej());return a;}
function up(b,c){var a;a=c.gb();xk(a,'width','100%');xk(a,'height','100%');c.uc(false);}
function vp(b,c,a){fp(b,c,b.gb(),a,true);up(b,c);}
function wp(b,c){var a;a=hp(b,c);if(a){xp(b,c);if(b.b===c){b.b=null;}}return a;}
function xp(a,b){xk(b.gb(),'width','');xk(b.gb(),'height','');b.uc(true);}
function yp(b,a){ap(b,a);if(b.b!==null){b.b.uc(false);}b.b=ep(b,a);b.b.uc(true);}
function zp(a){return wp(this,a);}
function rp(){}
_=rp.prototype=new Bo();_.qc=zp;_.tN=EJ+'DeckPanel';_.tI=57;_.b=null;function ew(a){fw(a,ej());return a;}
function fw(b,a){tz(b,a);return b;}
function gw(a,b){if(a.n!==null){throw dB(new bB(),'SimplePanel can only contain one child widget');}a.vc(b);}
function iw(a,b){if(b===a.n){return;}if(b!==null){sz(b);}if(a.n!==null){a.qc(a.n);}a.n=b;if(b!==null){cj(a.db(),a.n.gb());ou(a,b);}}
function jw(){return this.gb();}
function kw(){return aw(new Ev(),this);}
function lw(a){if(this.n!==a){return false;}qu(this,a);mk(this.db(),a.gb());this.n=null;return true;}
function mw(a){iw(this,a);}
function Dv(){}
_=Dv.prototype=new nu();_.db=jw;_.ub=kw;_.qc=lw;_.vc=mw;_.tN=EJ+'SimplePanel';_.tI=58;_.n=null;function Bu(){Bu=vJ;kv=new Dz();}
function wu(a){Bu();fw(a,Fz(kv));bv(a,0,0);return a;}
function xu(b,a){Bu();wu(b);b.g=a;return b;}
function yu(c,a,b){Bu();xu(c,a);c.k=b;return c;}
function zu(b,a){if(a.blur){a.blur();}}
function Au(c){var a,b,d;a=c.l;if(!a){cv(c,false);fv(c);}b=th((jm()-Du(c))/2);d=th((im()-Cu(c))/2);bv(c,km()+b,lm()+d);if(!a){cv(c,true);}}
function Cu(a){return ey(a);}
function Du(a){return fy(a);}
function Eu(b,a){if(!b.l){return;}b.l=false;lo(zv(),b);b.gb();}
function Fu(a){var b;b=a.n;if(b!==null){if(a.h!==null){b.sc(a.h);}if(a.i!==null){b.wc(a.i);}}}
function av(e,b){var a,c,d,f;d=yj(b);c=jk(e.gb(),d);f=Aj(b);switch(f){case 128:{a=(sh(vj(b)),zt(b),true);return a&&(c|| !e.k);}case 512:{a=(sh(vj(b)),zt(b),true);return a&&(c|| !e.k);}case 256:{a=(sh(vj(b)),zt(b),true);return a&&(c|| !e.k);}case 4:case 8:case 64:case 1:case 2:{if((aj(),ok)!==null){return true;}if(!c&&e.g&&f==4){Eu(e,true);return true;}break;}case 2048:{if(e.k&& !c&&d!==null){zu(e,d);return false;}}}return !e.k||c;}
function bv(c,b,d){var a;if(b<0){b=0;}if(d<0){d=0;}c.j=b;c.m=d;a=c.gb();xk(a,'left',b+'px');xk(a,'top',d+'px');}
function cv(a,b){xk(a.gb(),'visibility',b?'visible':'hidden');a.gb();}
function dv(a,b){iw(a,b);Fu(a);}
function ev(a,b){a.i=b;Fu(a);if(aD(b)==0){a.i=null;}}
function fv(a){if(a.l){return;}a.l=true;bj(a);xk(a.gb(),'position','absolute');if(a.m!=(-1)){bv(a,a.j,a.m);}io(zv(),a);a.gb();}
function gv(){return this.gb();}
function hv(){return Cu(this);}
function iv(){return Du(this);}
function jv(){return this.gb();}
function lv(){nk(this);rz(this);}
function mv(a){return av(this,a);}
function nv(a){this.h=a;Fu(this);if(aD(a)==0){this.h=null;}}
function ov(a){cv(this,a);}
function pv(a){dv(this,a);}
function qv(a){ev(this,a);}
function vu(){}
_=vu.prototype=new Dv();_.db=gv;_.kb=hv;_.lb=iv;_.mb=jv;_.Db=lv;_.ac=mv;_.sc=nv;_.uc=ov;_.vc=pv;_.wc=qv;_.tN=EJ+'PopupPanel';_.tI=59;_.g=false;_.h=null;_.i=null;_.j=(-1);_.k=false;_.l=false;_.m=(-1);var kv;function Ep(){Ep=vJ;Bu();}
function Bp(a){a.a=vs(new Aq());a.f=nq(new jq());}
function Cp(b,a){Ep();Dp(b,a,true);return b;}
function Dp(c,a,b){Ep();yu(c,a,b);Bp(c);rs(c.f,0,0,c.a);c.f.sc('100%');ms(c.f,0);os(c.f,0);ps(c.f,0);kr(c.f.b,1,0,'100%');nr(c.f.b,1,0,'100%');jr(c.f.b,1,0,(Fs(),at),(gt(),it));dv(c,c.f);ky(c,'gwt-DialogBox');ky(c.a,'Caption');Et(c.a,c);return c;}
function Fp(b,a){zs(b.a,a);}
function aq(a){if(Aj(a)==4){if(jk(this.a.gb(),yj(a))){Bj(a);}}return av(this,a);}
function bq(a,b,c){this.e=true;qk(this.a.gb());this.c=b;this.d=c;}
function cq(a){}
function dq(a){}
function eq(c,d,e){var a,b;if(this.e){a=d+cy(this);b=e+dy(this);bv(this,a-this.c,b-this.d);}}
function fq(a,b,c){this.e=false;lk(this.a.gb());}
function gq(a){if(this.b!==a){return false;}ls(this.f,a);return true;}
function hq(a){if(this.b!==null){ls(this.f,this.b);}if(a!==null){rs(this.f,1,0,a);}this.b=a;}
function iq(a){ev(this,a);this.f.wc('100%');}
function Ap(){}
_=Ap.prototype=new vu();_.ac=aq;_.dc=bq;_.ec=cq;_.fc=dq;_.gc=eq;_.hc=fq;_.qc=gq;_.vc=hq;_.wc=iq;_.tN=EJ+'DialogBox';_.tI=60;_.b=null;_.c=0;_.d=0;_.e=false;function bs(a){a.e=xr(new sr());}
function cs(a){bs(a);a.d=jj();a.a=gj();cj(a.d,a.a);tz(a,a.d);ly(a,1);return a;}
function ds(c,a){var b;b=qq(c);if(a>=b||a<0){throw hB(new fB(),'Row index: '+a+', Row size: '+b);}}
function es(e,c,b,a){var d;d=ir(e.b,c,b);ks(e,d,a);return d;}
function gs(c,b,a){return b.rows[a].cells.length;}
function hs(a){return is(a,a.a);}
function is(b,a){return a.rows.length;}
function js(b,a){var c;if(a!=qq(b)){ds(b,a);}c=ij();ik(b.a,c,a);return a;}
function ks(d,c,a){var b,e;b=ek(c);e=null;if(b!==null){e=zr(d.e,b);}if(e!==null){ls(d,e);return true;}else{if(a){vk(c,'');}return false;}}
function ls(b,c){var a;if(c.p!==b){return false;}qu(b,c);a=c.gb();mk(fk(a),a);Cr(b.e,a);return true;}
function ms(a,b){tk(a.d,'border',''+b);}
function ns(b,a){b.b=a;}
function os(b,a){sk(b.d,'cellPadding',a);}
function ps(b,a){sk(b.d,'cellSpacing',a);}
function qs(b,a){b.c=a;rr(b.c);}
function rs(d,b,a,e){var c;sq(d,b,a);if(e!==null){sz(e);c=es(d,b,a,true);Ar(d.e,e);cj(c,e.gb());ou(d,e);}}
function ss(){return Dr(this.e);}
function ts(a){switch(Aj(a)){case 1:{break;}default:}}
function us(a){return ls(this,a);}
function Bq(){}
_=Bq.prototype=new nu();_.ub=ss;_.Bb=ts;_.qc=us;_.tN=EJ+'HTMLTable';_.tI=61;_.a=null;_.b=null;_.c=null;_.d=null;function nq(a){cs(a);ns(a,lq(new kq(),a));qs(a,pr(new or(),a));return a;}
function pq(b,a){ds(b,a);return gs(b,b.a,a);}
function qq(a){return hs(a);}
function rq(b,a){return js(b,a);}
function sq(e,d,b){var a,c;tq(e,d);if(b<0){throw hB(new fB(),'Cannot create a column with a negative index: '+b);}a=pq(e,d);c=b+1-a;if(c>0){uq(e.a,d,c);}}
function tq(d,b){var a,c;if(b<0){throw hB(new fB(),'Cannot create a row with a negative index: '+b);}c=qq(d);for(a=c;a<=b;a++){rq(d,a);}}
function uq(f,d,c){var e=f.rows[d];for(var b=0;b<c;b++){var a=$doc.createElement('td');e.appendChild(a);}}
function jq(){}
_=jq.prototype=new Bq();_.tN=EJ+'FlexTable';_.tI=62;function fr(b,a){b.a=a;return b;}
function hr(e,d,c,a){var b=d.rows[c].cells[a];return b==null?null:b;}
function ir(c,b,a){return hr(c,c.a.a,b,a);}
function jr(d,c,a,b,e){lr(d,c,a,b);mr(d,c,a,e);}
function kr(e,d,a,c){var b;sq(e.a,d,a);b=hr(e,e.a.a,d,a);tk(b,'height',c);}
function lr(e,d,b,a){var c;sq(e.a,d,b);c=hr(e,e.a.a,d,b);tk(c,'align',a.a);}
function mr(d,c,b,a){sq(d.a,c,b);xk(hr(d,d.a.a,c,b),'verticalAlign',a.a);}
function nr(c,b,a,d){sq(c.a,b,a);tk(hr(c,c.a.a,b,a),'width',d);}
function er(){}
_=er.prototype=new gC();_.tN=EJ+'HTMLTable$CellFormatter';_.tI=63;function lq(b,a){fr(b,a);return b;}
function kq(){}
_=kq.prototype=new er();_.tN=EJ+'FlexTable$FlexCellFormatter';_.tI=64;function wq(a){Do(a);tz(a,ej());return a;}
function xq(a,b){Eo(a,b,a.gb());}
function zq(b,c,a){fp(b,c,b.gb(),a,true);}
function vq(){}
_=vq.prototype=new Bo();_.tN=EJ+'FlowPanel';_.tI=65;function Bt(a){tz(a,ej());ly(a,131197);ky(a,'gwt-Label');return a;}
function Ct(b,a){Bt(b);au(b,a);return b;}
function Dt(b,a){if(b.a===null){b.a=xo(new wo());}gG(b.a,a);}
function Et(b,a){if(b.b===null){b.b=eu(new du());}gG(b.b,a);}
function au(b,a){wk(b.gb(),a);}
function bu(a,b){xk(a.gb(),'whiteSpace',b?'normal':'nowrap');}
function cu(a){switch(Aj(a)){case 1:if(this.a!==null){zo(this.a,this);}break;case 4:case 8:case 64:case 16:case 32:if(this.b!==null){iu(this.b,this,a);}break;case 131072:break;}}
function At(){}
_=At.prototype=new az();_.Bb=cu;_.tN=EJ+'Label';_.tI=66;_.a=null;_.b=null;function vs(a){Bt(a);tz(a,ej());ly(a,125);ky(a,'gwt-HTML');return a;}
function ws(b,a){vs(b);zs(b,a);return b;}
function xs(b,a,c){ws(b,a);bu(b,c);return b;}
function zs(b,a){vk(b.gb(),a);}
function Aq(){}
_=Aq.prototype=new At();_.tN=EJ+'HTML';_.tI=67;function Dq(a){{ar(a);}}
function Eq(b,a){b.b=a;Dq(b);return b;}
function ar(a){while(++a.a<a.b.b.b){if(jG(a.b.b,a.a)!==null){return;}}}
function br(a){return a.a<a.b.b.b;}
function cr(){return br(this);}
function dr(){var a;if(!br(this)){throw rJ(new qJ());}a=jG(this.b.b,this.a);ar(this);return a;}
function Cq(){}
_=Cq.prototype=new gC();_.sb=cr;_.xb=dr;_.tN=EJ+'HTMLTable$1';_.tI=68;_.a=(-1);function pr(b,a){b.b=a;return b;}
function rr(a){if(a.a===null){a.a=fj('colgroup');ik(a.b.d,a.a,0);cj(a.a,fj('col'));}}
function or(){}
_=or.prototype=new gC();_.tN=EJ+'HTMLTable$ColumnFormatter';_.tI=69;_.a=null;function wr(a){a.b=eG(new cG());}
function xr(a){wr(a);return a;}
function zr(c,a){var b;b=Fr(a);if(b<0){return null;}return qh(jG(c.b,b),12);}
function Ar(b,c){var a;if(b.a===null){a=b.b.b;gG(b.b,c);}else{a=b.a.a;pG(b.b,a,c);b.a=b.a.b;}as(c.gb(),a);}
function Br(c,a,b){Er(a);pG(c.b,b,null);c.a=ur(new tr(),b,c.a);}
function Cr(c,a){var b;b=Fr(a);Br(c,a,b);}
function Dr(a){return Eq(new Cq(),a);}
function Er(a){a['__widgetID']=null;}
function Fr(a){var b=a['__widgetID'];return b==null?-1:b;}
function as(a,b){a['__widgetID']=b;}
function sr(){}
_=sr.prototype=new gC();_.tN=EJ+'HTMLTable$WidgetMapper';_.tI=70;_.a=null;function ur(c,a,b){c.a=a;c.b=b;return c;}
function tr(){}
_=tr.prototype=new gC();_.tN=EJ+'HTMLTable$WidgetMapper$FreeNode';_.tI=71;_.a=0;_.b=null;function Fs(){Fs=vJ;at=Ds(new Cs(),'center');bt=Ds(new Cs(),'left');Ds(new Cs(),'right');}
var at,bt;function Ds(b,a){b.a=a;return b;}
function Cs(){}
_=Cs.prototype=new gC();_.tN=EJ+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=72;_.a=null;function gt(){gt=vJ;ht=et(new dt(),'bottom');it=et(new dt(),'middle');jt=et(new dt(),'top');}
var ht,it,jt;function et(a,b){a.a=b;return a;}
function dt(){}
_=dt.prototype=new gC();_.tN=EJ+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=73;_.a=null;function nt(a){a.a=(Fs(),bt);a.c=(gt(),jt);}
function ot(a){qo(a);nt(a);a.b=ij();cj(a.d,a.b);tk(a.e,'cellSpacing','0');tk(a.e,'cellPadding','0');return a;}
function pt(b,c){var a;a=rt(b);cj(b.b,a);Eo(b,c,a);}
function rt(b){var a;a=hj();to(b,a,b.a);uo(b,a,b.c);return a;}
function st(c,d,a){var b;bp(c,a);b=rt(c);ik(c.b,b,a);fp(c,d,b,a,false);}
function tt(c,d){var a,b;b=fk(d.gb());a=hp(c,d);if(a){mk(c.b,b);}return a;}
function ut(b,a){b.c=a;}
function vt(a){return tt(this,a);}
function mt(){}
_=mt.prototype=new po();_.qc=vt;_.tN=EJ+'HorizontalPanel';_.tI=74;_.b=null;function zt(a){return (xj(a)?1:0)|(wj(a)?8:0)|(tj(a)?2:0)|(pj(a)?4:0);}
function eu(a){eG(a);return a;}
function gu(d,c,e,f){var a,b;for(a=pE(d);iE(a);){b=qh(jE(a),21);b.dc(c,e,f);}}
function hu(d,c){var a,b;for(a=pE(d);iE(a);){b=qh(jE(a),21);b.ec(c);}}
function iu(e,c,a){var b,d,f,g,h;d=c.gb();g=rj(a)-Dj(d)+bk(d,'scrollLeft')+km();h=sj(a)-Ej(d)+bk(d,'scrollTop')+lm();switch(Aj(a)){case 4:gu(e,c,g,h);break;case 8:lu(e,c,g,h);break;case 64:ku(e,c,g,h);break;case 16:b=uj(a);if(!jk(d,b)){hu(e,c);}break;case 32:f=zj(a);if(!jk(d,f)){ju(e,c);}break;}}
function ju(d,c){var a,b;for(a=pE(d);iE(a);){b=qh(jE(a),21);b.fc(c);}}
function ku(d,c,e,f){var a,b;for(a=pE(d);iE(a);){b=qh(jE(a),21);b.gc(c,e,f);}}
function lu(d,c,e,f){var a,b;for(a=pE(d);iE(a);){b=qh(jE(a),21);b.hc(c,e,f);}}
function du(){}
_=du.prototype=new cG();_.tN=EJ+'MouseListenerCollection';_.tI=75;function xv(){xv=vJ;Cv=jI(new nH());}
function wv(b,a){xv();ho(b);if(a===null){a=yv();}tz(b,a);b.zb();return b;}
function zv(){xv();return Av(null);}
function Av(c){xv();var a,b;b=qh(pI(Cv,c),22);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=ak(c))){return null;}}if(Cv.c==0){Bv();}qI(Cv,c,b=wv(new rv(),a));return b;}
function yv(){xv();return $doc.body;}
function Bv(){xv();am(new sv());}
function rv(){}
_=rv.prototype=new go();_.tN=EJ+'RootPanel';_.tI=76;var Cv;function uv(){var a,b;for(b=iF(wF((xv(),Cv)));pF(b);){a=qh(qF(b),22);if(a.tb()){a.Db();}}}
function vv(){return null;}
function sv(){}
_=sv.prototype=new gC();_.mc=uv;_.nc=vv;_.tN=EJ+'RootPanel$1';_.tI=77;function Fv(a){a.a=a.b.n!==null;}
function aw(b,a){b.b=a;Fv(b);return b;}
function cw(){return this.a;}
function dw(){if(!this.a||this.b.n===null){throw rJ(new qJ());}this.a=false;return this.b.n;}
function Ev(){}
_=Ev.prototype=new gC();_.sb=cw;_.xb=dw;_.tN=EJ+'SimplePanel$1';_.tI=78;function uw(a){a.a=ot(new mt());}
function vw(c){var a,b;uw(c);mp(c,c.a);ly(c,1);ky(c,'gwt-TabBar');ut(c.a,(gt(),ht));a=xs(new Aq(),'&nbsp;',true);b=xs(new Aq(),'&nbsp;',true);ky(a,'gwt-TabBarFirst');ky(b,'gwt-TabBarRest');a.sc('100%');b.sc('100%');pt(c.a,a);pt(c.a,b);a.sc('100%');so(c.a,a,'100%');vo(c.a,b,'100%');return c;}
function ww(b,a){if(b.c===null){b.c=bx(new ax());}gG(b.c,a);}
function xw(b,a){if(a<0||a>Aw(b)){throw gB(new fB());}}
function yw(b,a){if(a<(-1)||a>=Aw(b)){throw gB(new fB());}}
function Aw(a){return a.a.f.b-2;}
function Bw(e,d,a,b){var c;xw(e,b);if(a){c=ws(new Aq(),d);}else{c=Ct(new At(),d);}bu(c,false);Dt(c,e);ky(c,'gwt-TabBarItem');st(e.a,c,b+1);}
function Cw(b,a){var c;yw(b,a);c=ep(b.a,a+1);if(c===b.b){b.b=null;}tt(b.a,c);}
function Dw(b,a){yw(b,a);if(b.c!==null){if(!dx(b.c,b,a)){return false;}}Ew(b,b.b,false);if(a==(-1)){b.b=null;return true;}b.b=ep(b.a,a+1);Ew(b,b.b,true);if(b.c!==null){ex(b.c,b,a);}return true;}
function Ew(c,a,b){if(a!==null){if(b){ay(a,'gwt-TabBarItem-selected');}else{gy(a,'gwt-TabBarItem-selected');}}}
function Fw(b){var a;for(a=1;a<this.a.f.b-1;++a){if(ep(this.a,a)===b){Dw(this,a-1);return;}}}
function tw(){}
_=tw.prototype=new kp();_.Cb=Fw;_.tN=EJ+'TabBar';_.tI=79;_.b=null;_.c=null;function bx(a){eG(a);return a;}
function dx(e,c,d){var a,b;for(a=pE(e);iE(a);){b=qh(jE(a),23);if(!b.Ab(c,d)){return false;}}return true;}
function ex(e,c,d){var a,b;for(a=pE(e);iE(a);){b=qh(jE(a),23);b.kc(c,d);}}
function ax(){}
_=ax.prototype=new cG();_.tN=EJ+'TabListenerCollection';_.tI=80;function sx(a){a.b=ox(new nx());a.a=ix(new hx(),a.b);}
function tx(b){var a;sx(b);a=Ay(new yy());By(a,b.b);By(a,b.a);so(a,b.a,'100%');b.b.wc('100%');ww(b.b,b);mp(b,a);ky(b,'gwt-TabPanel');ky(b.a,'gwt-TabPanelBottom');return b;}
function vx(b,c,a){yx(b,c,a,b.a.f.b);}
function ux(b,a){if(b.c===null){b.c=bx(new ax());}gG(b.c,a);}
function xx(b,a){return ep(b.a,a);}
function zx(d,e,c,a,b){kx(d.a,e,c,a,b);}
function yx(c,d,b,a){zx(c,d,b,false,a);}
function Ax(b,a){Dw(b.b,a);}
function Bx(){return gp(this.a);}
function Cx(a,b){if(this.c!==null){return dx(this.c,this,b);}return true;}
function Dx(a,b){yp(this.a,b);if(this.c!==null){ex(this.c,this,b);}}
function Ex(a){return lx(this.a,a);}
function gx(){}
_=gx.prototype=new kp();_.ub=Bx;_.Ab=Cx;_.kc=Dx;_.qc=Ex;_.tN=EJ+'TabPanel';_.tI=81;_.c=null;function ix(b,a){sp(b);b.a=a;return b;}
function kx(e,f,d,a,b){var c;c=dp(e,f);if(c!=(-1)){lx(e,f);if(c<b){b--;}}qx(e.a,d,a,b);vp(e,f,b);}
function lx(b,c){var a;a=dp(b,c);if(a!=(-1)){rx(b.a,a);return wp(b,c);}return false;}
function mx(a){return lx(this,a);}
function hx(){}
_=hx.prototype=new rp();_.qc=mx;_.tN=EJ+'TabPanel$TabbedDeckPanel';_.tI=82;_.a=null;function ox(a){vw(a);return a;}
function qx(d,c,a,b){Bw(d,c,a,b);}
function rx(b,a){Cw(b,a);}
function nx(){}
_=nx.prototype=new tw();_.tN=EJ+'TabPanel$UnmodifiableTabBar';_.tI=83;function zy(a){a.a=(Fs(),bt);a.b=(gt(),jt);}
function Ay(a){qo(a);zy(a);tk(a.e,'cellSpacing','0');tk(a.e,'cellPadding','0');return a;}
function By(b,d){var a,c;c=ij();a=Dy(b);cj(c,a);cj(b.d,c);Eo(b,d,a);}
function Dy(b){var a;a=hj();to(b,a,b.a);uo(b,a,b.b);return a;}
function Ey(c,e,a){var b,d;bp(c,a);d=ij();b=Dy(c);cj(d,b);ik(c.d,d,a);fp(c,e,b,a,false);}
function Fy(c){var a,b;b=fk(c.gb());a=hp(this,c);if(a){mk(this.d,fk(b));}return a;}
function yy(){}
_=yy.prototype=new po();_.qc=Fy;_.tN=EJ+'VerticalPanel';_.tI=84;function hz(b,a){b.a=kh('[Lcom.google.gwt.user.client.ui.Widget;',[150],[12],[4],null);return b;}
function iz(a,b){mz(a,b,a.b);}
function kz(b,a){if(a<0||a>=b.b){throw gB(new fB());}return b.a[a];}
function lz(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function mz(d,e,a){var b,c;if(a<0||a>d.b){throw gB(new fB());}if(d.b==d.a.a){c=kh('[Lcom.google.gwt.user.client.ui.Widget;',[150],[12],[d.a.a*2],null);for(b=0;b<d.a.a;++b){mh(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){mh(d.a,b,d.a[b-1]);}mh(d.a,a,e);}
function nz(a){return dz(new cz(),a);}
function oz(c,b){var a;if(b<0||b>=c.b){throw gB(new fB());}--c.b;for(a=b;a<c.b;++a){mh(c.a,a,c.a[a+1]);}mh(c.a,c.b,null);}
function pz(b,c){var a;a=lz(b,c);if(a==(-1)){throw rJ(new qJ());}oz(b,a);}
function bz(){}
_=bz.prototype=new gC();_.tN=EJ+'WidgetCollection';_.tI=85;_.a=null;_.b=0;function dz(b,a){b.b=a;return b;}
function fz(){return this.a<this.b.b-1;}
function gz(){if(this.a>=this.b.b){throw rJ(new qJ());}return this.b.a[++this.a];}
function cz(){}
_=cz.prototype=new gC();_.sb=fz;_.xb=gz;_.tN=EJ+'WidgetCollection$WidgetIterator';_.tI=86;_.a=(-1);function Fz(a){return ej();}
function Dz(){}
_=Dz.prototype=new gC();_.tN=FJ+'PopupImpl';_.tI=87;function dA(){}
_=dA.prototype=new gC();_.tN=aK+'OutputStream';_.tI=88;function bA(){}
_=bA.prototype=new dA();_.tN=aK+'FilterOutputStream';_.tI=89;function fA(){}
_=fA.prototype=new bA();_.tN=aK+'PrintStream';_.tI=90;function jA(){jA=vJ;oC();}
function iA(a){jA();mC(a);return a;}
function hA(){}
_=hA.prototype=new lC();_.tN=bK+'ArrayStoreException';_.tI=91;function mA(){mA=vJ;nA=lA(new kA(),false);oA=lA(new kA(),true);}
function lA(a,b){mA();a.a=b;return a;}
function pA(a){return rh(a,28)&&qh(a,28).a==this.a;}
function qA(){var a,b;b=1231;a=1237;return this.a?1231:1237;}
function rA(){return this.a?'true':'false';}
function sA(a){mA();return a?oA:nA;}
function kA(){}
_=kA.prototype=new gC();_.eQ=pA;_.hC=qA;_.tS=rA;_.tN=bK+'Boolean';_.tI=92;_.a=false;var nA,oA;function xA(){xA=vJ;oC();}
function vA(a){xA();mC(a);return a;}
function wA(b,a){xA();nC(b,a);return b;}
function uA(){}
_=uA.prototype=new lC();_.tN=bK+'ClassCastException';_.tI=93;function aB(){aB=vJ;oC();}
function FA(b,a){aB();nC(b,a);return b;}
function EA(){}
_=EA.prototype=new lC();_.tN=bK+'IllegalArgumentException';_.tI=94;function eB(){eB=vJ;oC();}
function cB(a){eB();mC(a);return a;}
function dB(b,a){eB();nC(b,a);return b;}
function bB(){}
_=bB.prototype=new lC();_.tN=bK+'IllegalStateException';_.tI=95;function iB(){iB=vJ;oC();}
function gB(a){iB();mC(a);return a;}
function hB(b,a){iB();nC(b,a);return b;}
function fB(){}
_=fB.prototype=new lC();_.tN=bK+'IndexOutOfBoundsException';_.tI=96;function dC(){dC=vJ;{fC();}}
function cC(a){dC();return a;}
function fC(){dC();eC=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
function bC(){}
_=bC.prototype=new gC();_.tN=bK+'Number';_.tI=97;var eC=null;function lB(){lB=vJ;dC();}
function kB(a,b){lB();cC(a);a.a=b;return a;}
function mB(b,a){if(b.a<a.a){return (-1);}else if(b.a>a.a){return 1;}else{return 0;}}
function pB(a){return mB(this,qh(a,29));}
function qB(a){return rh(a,29)&&qh(a,29).a==this.a;}
function rB(){return this.a;}
function tB(a){lB();return mD(a);}
function sB(){return tB(this.a);}
function jB(){}
_=jB.prototype=new bC();_.u=pB;_.eQ=qB;_.hC=rB;_.tS=sB;_.tN=bK+'Integer';_.tI=98;_.a=0;var nB=2147483647,oB=(-2147483648);function wB(a){return a<0?-a:a;}
function xB(a){return a<0?-a:a;}
function yB(a,b){return a>b?a:b;}
function zB(a,b){return a<b?a:b;}
function AB(a){return Math.sqrt(a);}
function DB(){DB=vJ;oC();}
function CB(a){DB();mC(a);return a;}
function BB(){}
_=BB.prototype=new lC();_.tN=bK+'NegativeArraySizeException';_.tI=99;function aC(){aC=vJ;oC();}
function FB(b,a){aC();nC(b,a);return b;}
function EB(){}
_=EB.prototype=new lC();_.tN=bK+'NullPointerException';_.tI=100;function zC(b,a){return b.charCodeAt(a);}
function BC(f,c){var a,b,d,e,g,h;h=aD(f);e=aD(c);b=zB(h,e);for(a=0;a<b;a++){g=zC(f,a);d=zC(c,a);if(g!=d){return g-d;}}return h-e;}
function CC(b,a){if(!rh(a,1))return false;return fD(b,a);}
function DC(b,a){return b.indexOf(a);}
function EC(c,b,a){return c.indexOf(b,a);}
function FC(b,a){return b.lastIndexOf(String.fromCharCode(a));}
function aD(a){return a.length;}
function bD(c,a,b){b=gD(b);return c.replace(RegExp(a,'g'),b);}
function cD(b,a){return b.substr(a,b.length-a);}
function dD(c,a,b){return c.substr(a,b-a);}
function eD(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function fD(a,b){return String(a)==b;}
function gD(b){var a;a=0;while(0<=(a=EC(b,'\\',a))){if(zC(b,a+1)==36){b=dD(b,0,a)+'$'+cD(b,++a);}else{b=dD(b,0,a)+cD(b,++a);}}return b;}
function hD(a){if(rh(a,1)){return BC(this,qh(a,1));}else{throw wA(new uA(),'Cannot compare '+a+" with String '"+this+"'");}}
function iD(a){return CC(this,a);}
function kD(){var a=jD;if(!a){a=jD={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function lD(){return this;}
function mD(a){return ''+a;}
function nD(a){return a!==null?a.tS():'null';}
_=String.prototype;_.u=hD;_.eQ=iD;_.hC=kD;_.tS=lD;_.tN=bK+'String';_.tI=2;var jD=null;function rC(a){tC(a);return a;}
function sC(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function tC(a){uC(a,'');}
function uC(b,a){b.js=[a];b.length=a.length;}
function wC(a){a.yb();return a.js[0];}
function xC(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function yC(){return wC(this);}
function qC(){}
_=qC.prototype=new gC();_.yb=xC;_.tS=yC;_.tN=bK+'StringBuffer';_.tI=101;function pD(){pD=vJ;rD=new fA();}
function qD(){pD();return new Date().getTime();}
function sD(a){pD();return pg(a);}
var rD;function DD(){DD=vJ;oC();}
function CD(b,a){DD();nC(b,a);return b;}
function BD(){}
_=BD.prototype=new lC();_.tN=bK+'UnsupportedOperationException';_.tI=102;function gE(b,a){b.c=a;return b;}
function iE(a){return a.a<a.c.xc();}
function jE(a){if(!iE(a)){throw rJ(new qJ());}return a.c.qb(a.b=a.a++);}
function kE(a){if(a.b<0){throw cB(new bB());}a.c.pc(a.b);a.a=a.b;a.b=(-1);}
function lE(){return iE(this);}
function mE(){return jE(this);}
function fE(){}
_=fE.prototype=new gC();_.sb=lE;_.xb=mE;_.tN=cK+'AbstractList$IteratorImpl';_.tI=103;_.a=0;_.b=(-1);function uF(f,d,e){var a,b,c;for(b=eI(f.E());CH(b);){a=DH(b);c=a.ib();if(d===null?c===null:d.eQ(c)){if(e){EH(b);}return a;}}return null;}
function vF(b){var a;a=b.E();return yE(new xE(),b,a);}
function wF(b){var a;a=oI(b);return gF(new fF(),b,a);}
function xF(a){return uF(this,a,false)!==null;}
function yF(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!rh(d,31)){return false;}f=qh(d,31);c=vF(this);e=f.vb();if(!FF(c,e)){return false;}for(a=AE(c);bF(a);){b=cF(a);h=this.rb(b);g=f.rb(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function zF(b){var a;a=uF(this,b,false);return a===null?null:a.ob();}
function AF(){var a,b,c;b=0;for(c=eI(this.E());CH(c);){a=DH(c);b+=a.hC();}return b;}
function BF(){return vF(this);}
function CF(){var a,b,c,d;d='{';a=false;for(c=eI(this.E());CH(c);){b=DH(c);if(a){d+=', ';}else{a=true;}d+=nD(b.ib());d+='=';d+=nD(b.ob());}return d+'}';}
function wE(){}
_=wE.prototype=new gC();_.y=xF;_.eQ=yF;_.rb=zF;_.hC=AF;_.vb=BF;_.tS=CF;_.tN=cK+'AbstractMap';_.tI=104;function FF(e,b){var a,c,d;if(b===e){return true;}if(!rh(b,32)){return false;}c=qh(b,32);if(c.xc()!=e.xc()){return false;}for(a=c.ub();a.sb();){d=a.xb();if(!e.z(d)){return false;}}return true;}
function aG(a){return FF(this,a);}
function bG(){var a,b,c;a=0;for(b=this.ub();b.sb();){c=b.xb();if(c!==null){a+=c.hC();}}return a;}
function DF(){}
_=DF.prototype=new ED();_.eQ=aG;_.hC=bG;_.tN=cK+'AbstractSet';_.tI=105;function yE(b,a,c){b.a=a;b.b=c;return b;}
function AE(b){var a;a=eI(b.b);return FE(new EE(),b,a);}
function BE(a){return this.a.y(a);}
function CE(){return AE(this);}
function DE(){return this.b.a.c;}
function xE(){}
_=xE.prototype=new DF();_.z=BE;_.ub=CE;_.xc=DE;_.tN=cK+'AbstractMap$1';_.tI=106;function FE(b,a,c){b.a=c;return b;}
function bF(a){return a.a.sb();}
function cF(b){var a;a=b.a.xb();return a.ib();}
function dF(){return bF(this);}
function eF(){return cF(this);}
function EE(){}
_=EE.prototype=new gC();_.sb=dF;_.xb=eF;_.tN=cK+'AbstractMap$2';_.tI=107;function gF(b,a,c){b.a=a;b.b=c;return b;}
function iF(b){var a;a=eI(b.b);return nF(new mF(),b,a);}
function jF(a){return nI(this.a,a);}
function kF(){return iF(this);}
function lF(){return this.b.a.c;}
function fF(){}
_=fF.prototype=new ED();_.z=jF;_.ub=kF;_.xc=lF;_.tN=cK+'AbstractMap$3';_.tI=108;function nF(b,a,c){b.a=c;return b;}
function pF(a){return a.a.sb();}
function qF(a){var b;b=a.a.xb().ob();return b;}
function rF(){return pF(this);}
function sF(){return qF(this);}
function mF(){}
_=mF.prototype=new gC();_.sb=rF;_.xb=sF;_.tN=cK+'AbstractMap$4';_.tI=109;function EG(b){var a,c;a=eG(new cG());for(c=0;c<b.a;c++){gG(a,b[c]);}return a;}
function FG(d,h,e){if(h==0){return;}var i=new Array();for(var g=0;g<h;++g){i[g]=d[g];}if(e!=null){var f=function(a,b){var c=e.v(a,b);return c;};i.sort(f);}else{i.sort();}for(g=0;g<h;++g){d[g]=i[g];}}
function aH(a){FG(a,a.a,(hH(),iH));}
function hH(){hH=vJ;iH=new eH();}
var iH;function gH(a,b){return qh(a,37).u(b);}
function eH(){}
_=eH.prototype=new gC();_.v=gH;_.tN=cK+'Comparators$1';_.tI=110;function lI(){lI=vJ;sI=yI();}
function iI(a){{kI(a);}}
function jI(a){lI();iI(a);return a;}
function kI(a){a.a=zg();a.d=Ag();a.b=xh(sI,vg);a.c=0;}
function mI(b,a){if(rh(a,1)){return CI(b.d,qh(a,1))!==sI;}else if(a===null){return b.b!==sI;}else{return BI(b.a,a,a.hC())!==sI;}}
function nI(a,b){if(a.b!==sI&&AI(a.b,b)){return true;}else if(xI(a.d,b)){return true;}else if(vI(a.a,b)){return true;}return false;}
function oI(a){return bI(new yH(),a);}
function pI(c,a){var b;if(rh(a,1)){b=CI(c.d,qh(a,1));}else if(a===null){b=c.b;}else{b=BI(c.a,a,a.hC());}return b===sI?null:b;}
function qI(c,a,d){var b;if(rh(a,1)){b=FI(c.d,qh(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=EI(c.a,a,d,a.hC());}if(b===sI){++c.c;return null;}else{return b;}}
function rI(c,a){var b;if(rh(a,1)){b=bJ(c.d,qh(a,1));}else if(a===null){b=c.b;c.b=xh(sI,vg);}else{b=aJ(c.a,a,a.hC());}if(b===sI){return null;}else{--c.c;return b;}}
function tI(e,c){lI();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.s(a[f]);}}}}
function uI(d,a){lI();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=rH(c.substring(1),e);a.s(b);}}}
function vI(f,h){lI();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.ob();if(AI(h,d)){return true;}}}}return false;}
function wI(a){return mI(this,a);}
function xI(c,d){lI();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(AI(d,a)){return true;}}}return false;}
function yI(){lI();}
function zI(){return oI(this);}
function AI(a,b){lI();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function DI(a){return pI(this,a);}
function BI(f,h,e){lI();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.ib();if(AI(h,d)){return c.ob();}}}}
function CI(b,a){lI();return b[':'+a];}
function EI(f,h,j,e){lI();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.ib();if(AI(h,d)){var i=c.ob();c.tc(j);return i;}}}else{a=f[e]=[];}var c=rH(h,j);a.push(c);}
function FI(c,a,d){lI();a=':'+a;var b=c[a];c[a]=d;return b;}
function aJ(f,h,e){lI();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.ib();if(AI(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.ob();}}}}
function bJ(c,a){lI();a=':'+a;var b=c[a];delete c[a];return b;}
function nH(){}
_=nH.prototype=new wE();_.y=wI;_.E=zI;_.rb=DI;_.tN=cK+'HashMap';_.tI=111;_.a=null;_.b=null;_.c=0;_.d=null;var sI;function pH(b,a,c){b.a=a;b.b=c;return b;}
function rH(a,b){return pH(new oH(),a,b);}
function sH(b){var a;if(rh(b,38)){a=qh(b,38);if(AI(this.a,a.ib())&&AI(this.b,a.ob())){return true;}}return false;}
function tH(){return this.a;}
function uH(){return this.b;}
function vH(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function wH(a){var b;b=this.b;this.b=a;return b;}
function xH(){return this.a+'='+this.b;}
function oH(){}
_=oH.prototype=new gC();_.eQ=sH;_.ib=tH;_.ob=uH;_.hC=vH;_.tc=wH;_.tS=xH;_.tN=cK+'HashMap$EntryImpl';_.tI=112;_.a=null;_.b=null;function bI(b,a){b.a=a;return b;}
function dI(d,c){var a,b,e;if(rh(c,38)){a=qh(c,38);b=a.ib();if(mI(d.a,b)){e=pI(d.a,b);return AI(a.ob(),e);}}return false;}
function eI(a){return AH(new zH(),a.a);}
function fI(a){return dI(this,a);}
function gI(){return eI(this);}
function hI(){return this.a.c;}
function yH(){}
_=yH.prototype=new DF();_.z=fI;_.ub=gI;_.xc=hI;_.tN=cK+'HashMap$EntrySet';_.tI=113;function AH(c,b){var a;c.c=b;a=eG(new cG());if(c.c.b!==(lI(),sI)){gG(a,pH(new oH(),null,c.c.b));}uI(c.c.d,a);tI(c.c.a,a);c.a=pE(a);return c;}
function CH(a){return iE(a.a);}
function DH(a){return a.b=qh(jE(a.a),38);}
function EH(a){if(a.b===null){throw dB(new bB(),'Must call next() before remove().');}else{kE(a.a);rI(a.c,a.b.ib());a.b=null;}}
function FH(){return CH(this);}
function aI(){return DH(this);}
function zH(){}
_=zH.prototype=new gC();_.sb=FH;_.xb=aI;_.tN=cK+'HashMap$EntrySetIterator';_.tI=114;_.a=null;_.b=null;function dJ(a){a.a=jI(new nH());return a;}
function eJ(c,a){var b;b=qI(c.a,a,sA(true));return b===null;}
function gJ(a){return AE(vF(a.a));}
function hJ(a){return eJ(this,a);}
function iJ(a){return mI(this.a,a);}
function jJ(){return gJ(this);}
function kJ(){return this.a.c;}
function lJ(){return vF(this.a).tS();}
function cJ(){}
_=cJ.prototype=new DF();_.s=hJ;_.z=iJ;_.ub=jJ;_.xc=kJ;_.tS=lJ;_.tN=cK+'HashSet';_.tI=115;_.a=null;function sJ(){sJ=vJ;oC();}
function rJ(a){sJ();mC(a);return a;}
function qJ(){}
_=qJ.prototype=new lC();_.tN=cK+'NoSuchElementException';_.tI=116;function kK(){}
_=kK.prototype=new gC();_.tN=dK+'BezierCurve';_.tI=117;function mK(b){var a;b.a=fj('canvas');{a=Fj(b.a,'class');rk(b.a,'class',a+' gwt-diagrams-canvas');}}
function nK(a){mK(a);return a;}
function qK(i,d,e,a,b){var c,f,g,h,j;h=fM(new eM(),zB(d.a,e.a),zB(d.b,e.b));j=wB(d.a-e.a);c=wB(d.b-e.b);g=yB(j,c);g=yB(g,wB(d.a-a.a));g=yB(g,wB(d.b-a.b));g=yB(g,wB(e.a-b.a));g=yB(g,wB(e.b-b.b));f=fM(new eM(),h.a-g,h.b-g);xk(i.a,'left',tB(f.a));xk(i.a,'top',tB(f.b));rk(i.a,'width',tB(j+g*2));rk(i.a,'height',tB(c+g*2));pK(i,iM(d,kM(f)),iM(e,kM(f)),iM(a,kM(f)),iM(b,kM(f)),rK(i.a,'color'));}
function pK(h,f,g,a,b,d){var c=h.a;var e=c.getContext('2d');e.beginPath();e.moveTo(f.a,f.b);e.strokeStyle=d;e.bezierCurveTo(a.a,a.b,b.a,b.b,g.a,g.b);e.stroke();}
function rK(b,a){if($doc.defaultView&&$doc.defaultView.getComputedStyle){return $doc.defaultView.getComputedStyle(b,'').getPropertyValue(a);}else{return null;}}
function lK(){}
_=lK.prototype=new kK();_.tN=dK+'BezierCurveCanvas';_.tI=118;function uK(a){a.c=eG(new cG());}
function vK(c,d){var a,b;uK(c);fG(c.c,d);zK(c,c.A());for(b=pE(c.c);iE(b);){a=qh(jE(b),33);a.w(c);}return c;}
function wK(a,b){vK(a,EG(b));return a;}
function yK(a){return a.b.t(a.c);}
function zK(b,a){b.b=a;}
function AK(a){a.Ac(yK(a));}
function BK(){AK(this);}
function tK(){}
_=tK.prototype=new az();_.zc=BK;_.tN=eK+'AbstractConnection';_.tI=119;_.b=null;function DK(a){a.a=nK(new lK());}
function FK(a,b){wK(a,b);DK(a);if(b.a!=2){throw FA(new EA(),'Need exactly two connectors to connect');}tz(a,a.a.a);ay(a,'gwt-diagrams-connection');return a;}
function EK(c,a,b){FK(c,lh('[Lpl.balon.gwt.diagrams.client.connector.Connector;',144,33,[a,b]));return c;}
function bL(){return new mL();}
function cL(b){var a;if(!rh(b,39)){throw FA(new EA(),'Expected BezierConnectionData');}a=qh(b,39);if(a.b.b!=2){throw FA(new EA(),'Expected two connection points');}if(a.a.b!=2){throw FA(new EA(),'Expected two control points');}qK(this.a,qh(jG(a.b,0),36),qh(jG(a.b,1),36),qh(jG(a.a,0),36),qh(jG(a.a,1),36));}
function CK(){}
_=CK.prototype=new tK();_.A=bL;_.Ac=cL;_.tN=eK+'BezierTwoEndedConnection';_.tI=120;function fL(a){a.a=eG(new cG());}
function hL(a,b){wK(a,b);fL(a);if(b.a!=2){throw FA(new EA(),'Need exactly two connectors to connect');}tz(a,ej());ay(a,'gwt-diagrams-connection');AK(a);return a;}
function gL(c,a,b){hL(c,lh('[Lpl.balon.gwt.diagrams.client.connector.Connector;',144,33,[a,b]));return c;}
function jL(d,a){var b,c;for(c=d.a.b;c<a;c++){b=ej();gG(d.a,xh(b,al));cj(d.gb(),b);vk(b,'&nbsp;');}while(d.a.b>a){b=qh(jG(d.a,0),17);oG(d.a,xh(b,al));mk(d.gb(),b);}}
function kL(){return new rL();}
function lL(a){var b,c,d,e,f;if(a.b.b<=1){throw FA(new EA(),'Too few connection points');}jL(this,a.b.b-1);for(d=0;d<this.a.b;d++){b=qh(jG(this.a,d),17);e=qh(jG(a.b,d),36);c=qh(jG(a.b,d+1),36);f='gwt-diagrams-line';rk(b,'style','');tk(b,'className',f);xk(b,'height','1');xk(b,'width','1');if(e.a==c.a){f+=' gwt-diagrams-line-vertical';xk(b,'height',tB(wB(e.b-c.b)));}else if(e.b==c.b){xk(b,'width',tB(wB(e.a-c.a)));f+=' gwt-diagrams-line-horizontal';}else{throw dB(new bB(),'Illegal state for right angeled connection');}xk(b,'left',tB(zB(e.a,c.a)));xk(b,'top',tB(zB(e.b,c.b)));tk(b,'className',f);}}
function eL(){}
_=eL.prototype=new tK();_.A=kL;_.Ac=lL;_.tN=eK+'RectilinearTwoEndedConnection';_.tI=121;function oL(j,d,e){var a,b,c,f,g,h,i;f=d.eb();g=e.eb();c=kh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[146],[34],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=hM(d.bb(f[h]),e.bb(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function pL(e){var a,b,c,d,f,g,h,i;if(e.b!=2){throw FA(new EA(),'Unsupported connectors count');}c=qh(jG(e,0),33);d=qh(jG(e,1),33);f=oL(this,c,d);h=c.oc(f[0]);i=d.oc(f[1]);a=jM(h,f[0],50);b=jM(i,f[1],50);g=DL(new AL(),lh('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',148,36,[h,i]),lh('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',148,36,[a,b]));return g;}
function mL(){}
_=mL.prototype=new gC();_.t=pL;_.tN=fK+'BezierConnectionCalculator';_.tI=122;function sL(e,a,c,d,b){if(b){if(c==0&&d>0){return a!==(xM(),AM);}if(c==1&&d>0){return a!==(xM(),BM);}if(c==0&&d<0){return a!==(xM(),BM);}if(c==1&&d<0){return a!==(xM(),AM);}}else{if(c==0&&d>0){return a!==(xM(),CM);}if(c==1&&d>0){return a!==(xM(),zM);}if(c==0&&d<0){return a!==(xM(),zM);}if(c==1&&d<0){return a!==(xM(),CM);}}return false;}
function uL(j,d,e){var a,b,c,f,g,h,i;f=d.eb();g=e.eb();c=kh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[146],[34],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=hM(d.bb(f[h]),e.bb(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function vL(e,a,c,d,b){if(b){if(c==0&&d>0){return a===(xM(),BM);}if(c==1&&d>0){return a===(xM(),AM);}if(c==0&&d<0){return a===(xM(),AM);}if(c==1&&d<0){return a===(xM(),BM);}}else{if(c==0&&d>0){return a===(xM(),zM);}if(c==1&&d>0){return a===(xM(),CM);}if(c==0&&d<0){return a===(xM(),CM);}if(c==1&&d<0){return a===(xM(),zM);}}return false;}
function wL(c){var a,b,d,e,f,g,h,i,j,k,l,m;if(c.b!=2){throw FA(new EA(),'Unsupported connectors count');}a=qh(jG(c,0),33);b=qh(jG(c,1),33);d=bM(new FL());e=uL(this,a,b);i=a.oc(e[0]);j=jM(i,e[0],10);k=b.oc(e[1]);l=jM(k,e[1],10);f=l.a-j.a;m=l.b-j.b;g=null;h=null;if(vL(this,e[0],0,f,true)&&vL(this,e[1],1,f,true)){g=jM(j,e[0],wB(th(f/2)));h=fM(new eM(),g.a,l.b);}else if(vL(this,e[0],0,m,false)&&vL(this,e[1],1,m,false)){g=jM(j,e[0],wB(th(m/2)));h=fM(new eM(),l.a,g.b);}else if(vL(this,e[0],0,f,true)&&vL(this,e[1],1,m,false)){g=jM(j,e[0],wB(f));h=jM(l,e[1],wB(m));}else if(vL(this,e[0],0,m,false)&&vL(this,e[1],1,f,true)){g=jM(j,e[0],wB(m));h=jM(l,e[1],wB(f));}else if(vL(this,e[0],0,f,true)&&sL(this,e[1],1,f,true)){g=jM(j,e[0],wB(th(f/2)));h=fM(new eM(),g.a,l.b);}else if(sL(this,e[0],0,f,true)&&vL(this,e[1],1,f,true)){g=jM(j,e[0],wB(th(f/2)));h=fM(new eM(),g.a,l.b);}else if(vL(this,e[0],0,m,false)&&sL(this,e[1],1,m,false)){g=jM(j,e[0],wB(th(m/2)));h=fM(new eM(),l.a,g.b);}else if(sL(this,e[0],0,m,false)&&vL(this,e[1],1,m,false)){g=jM(j,e[0],wB(th(m/2)));h=fM(new eM(),l.a,g.b);}else if(sL(this,e[0],0,f,true)&&sL(this,e[1],1,f,true)){g=jM(j,(xM(),BM),th(f/2));h=fM(new eM(),g.a,l.b);}else if(sL(this,e[0],0,m,false)&&sL(this,e[1],1,m,false)){g=jM(j,(xM(),zM),th(m/2));h=fM(new eM(),l.a,g.b);}else{}gG(d.b,i);gG(d.b,j);if(g!==null){gG(d.b,g);}if(h!==null){gG(d.b,h);}gG(d.b,l);gG(d.b,k);return d;}
function rL(){}
_=rL.prototype=new gC();_.t=wL;_.tN=fK+'FullRectilinearTwoEndedCalculator';_.tI=123;function zL(c){var a,b,d;if(c.b!=2){throw FA(new EA(),'Unsupported connectors count');}a=qh(jG(c,0),33);b=qh(jG(c,1),33);d=bM(new FL());gG(d.b,fM(new eM(),a.jb()+th(a.pb()/2),a.nb()+th(a.hb()/2)));gG(d.b,fM(new eM(),a.jb()+th(a.pb()/2),b.nb()+th(b.hb()/2)));gG(d.b,fM(new eM(),b.jb()+th(b.pb()/2),b.nb()+th(b.hb()/2)));return d;}
function xL(){}
_=xL.prototype=new gC();_.t=zL;_.tN=fK+'SimpleRectilinearTwoEndedCalculator';_.tI=124;function aM(a){a.b=eG(new cG());}
function bM(a){aM(a);return a;}
function cM(b,a){aM(b);fG(b.b,a);return b;}
function FL(){}
_=FL.prototype=new gC();_.tN=gK+'ConnectionData';_.tI=125;function BL(a){a.a=eG(new cG());}
function CL(c,b,a){cM(c,b);BL(c);fG(c.a,a);return c;}
function DL(c,b,a){CL(c,EG(b),EG(a));return c;}
function AL(){}
_=AL.prototype=new FL();_.tN=gK+'BezierConnectionData';_.tI=126;function fM(b,a,c){b.a=a;b.b=c;return b;}
function hM(b,a){return AB((b.a-a.a)*(b.a-a.a)+(b.b-a.b)*(b.b-a.b));}
function jM(c,a,b){if(a===(xM(),zM)){return fM(new eM(),c.a,c.b+b);}else if(a===(xM(),CM)){return fM(new eM(),c.a,c.b-b);}else if(a===(xM(),AM)){return fM(new eM(),c.a-b,c.b);}else if(a===(xM(),BM)){return fM(new eM(),c.a+b,c.b);}else{throw cB(new bB());}}
function iM(a,b){return fM(new eM(),a.a+b.a,a.b+b.b);}
function kM(a){return fM(new eM(),-a.a,-a.b);}
function eM(){}
_=eM.prototype=new gC();_.tN=gK+'Point';_.tI=127;_.a=0;_.b=0;function mM(a){a.c=dJ(new cJ());}
function nM(a){mM(a);return a;}
function pM(c){var a,b;for(b=gJ(c.c);bF(b);){a=qh(cF(b),40);a.zc();}}
function qM(a){eJ(this.c,a);}
function rM(a){if(a===(xM(),CM)){return fM(new eM(),this.jb()+th(this.pb()/2),this.nb());}else if(a===(xM(),zM)){return fM(new eM(),this.jb()+th(this.pb()/2),this.nb()+this.hb());}else if(a===(xM(),AM)){return fM(new eM(),this.jb(),this.nb()+th(this.hb()/2));}else if(a===(xM(),BM)){return fM(new eM(),this.jb()+this.pb(),this.nb()+th(this.hb()/2));}throw dB(new bB(),'Imposible '+a);}
function sM(){return DM();}
function tM(a){return jM(fM(new eM(),this.jb()+th(this.pb()/2),this.nb()+th(this.hb()/2)),a,yM(a)?th(this.pb()/2):th(this.hb()/2));}
function lM(){}
_=lM.prototype=new gC();_.w=qM;_.bb=rM;_.eb=sM;_.oc=tM;_.tN=hK+'AbstractConnector';_.tI=128;function xM(){xM=vJ;CM=wM(new vM(),'UP');zM=wM(new vM(),'DOWN');AM=wM(new vM(),'LEFT');BM=wM(new vM(),'RIGHT');}
function wM(b,a){xM();return b;}
function yM(a){return a===AM||a===BM;}
function DM(){xM();return lh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',146,34,[CM,zM,AM,BM]);}
function vM(){}
_=vM.prototype=new gC();_.tN=hK+'Direction';_.tI=129;var zM,AM,BM,CM;function eN(){eN=vJ;mN=jI(new nH());}
function dN(a,b){eN();nM(a);a.b=b;return a;}
function fN(){return this.b.kb();}
function gN(){var a,b;a=0;b=fk(this.b.gb());while(b!==null){if(CC('relative',gk(b,'position'))){a=Dj(b);break;}b=fk(b);}return cy(this.b)-a;}
function hN(){var a,b;a=0;b=fk(this.b.gb());while(b!==null){if(CC('relative',gk(b,'position'))){a=Ej(b);break;}b=fk(b);}return dy(this.b)-a;}
function iN(){return this.b.lb();}
function jN(a){eN();return qh(pI(mN,a),41);}
function kN(b){eN();var a;if(mI(mN,b)){return qh(pI(mN,b),41);}else{a=dN(new EM(),b);qI(mN,b,a);return a;}}
function lN(c,b){eN();var a;if(mI(mN,c)){return qh(pI(mN,c),41);}else{a=aN(new FM(),c,b);qI(mN,c,a);return a;}}
function EM(){}
_=EM.prototype=new lM();_.hb=fN;_.jb=gN;_.nb=hN;_.pb=iN;_.tN=hK+'UIObjectConnector';_.tI=130;_.b=null;var mN;function bN(){bN=vJ;eN();}
function aN(b,a,c){bN();b.a=c;dN(b,a);return b;}
function cN(){return this.a;}
function FM(){}
_=FM.prototype=new EM();_.eb=cN;_.tN=hK+'UIObjectConnector$1';_.tI=131;function wN(a){lg(new oN());Ek(sN(new rN(),a));}
function nN(){}
_=nN.prototype=new gC();_.tN=iK+'ExamplesEntryPoint';_.tI=132;function qN(e,f){var a,b,c,d;d='Uncaught exception: ';while(f!==null){c=f.c;d+=yD(f)+'\n';for(b=0;b<c.a;b++){d+='    at '+c[b]+'\n';}f=f.a;if(f!==null){d+='Caused by: ';}}a=Cp(new Ap(),true);xk(a.gb(),'backgroundColor','#ABCDEF');pD(),rD;d=bD(d,' ','&nbsp;');Fp(a,'<pre>'+d+'<\/pre>');Au(a);}
function oN(){}
_=oN.prototype=new gC();_.tN=iK+'ExamplesEntryPoint$1';_.tI=133;function sN(b,a){b.a=a;return b;}
function uN(){EN(this.a);}
function rN(){}
_=rN.prototype=new gC();_.F=uN;_.tN=iK+'ExamplesEntryPoint$2';_.tI=134;function EN(b){var a;a=tx(new gx());io(Av('tabs'),a);vx(a,CO(new BO()),'Rectilinear');vx(a,xO(new wO()),'Bezier');vx(a,bP(new aP()),'Simple rect.');ux(a,zN(new yN(),b,a));Ax(a,0);}
function xN(){}
_=xN.prototype=new nN();_.tN=iK+'GwtDiagramsExample';_.tI=135;function zN(b,a,c){b.a=c;return b;}
function BN(a,b){return true;}
function CN(b,c){var a;a=qh(xx(this.a,c),42);pO(a);}
function yN(){}
_=yN.prototype=new gC();_.Ab=BN;_.kc=CN;_.tN=iK+'GwtDiagramsExample$1';_.tI=136;function sO(a){a.c=ho(new go());}
function tO(a){var b;ew(a);sO(a);ay(a,'gwt-diagrams-example');b=Ay(new yy());gw(a,b);By(b,a.c);By(b,vO(a,a.yc()));return a;}
function vO(e,d){var a,b,c;a=wq(new vq());for(b=pE(d);iE(b);){c=qh(jE(b),12);xq(a,c);}return a;}
function rO(){}
_=rO.prototype=new Dv();_.tN=jK+'AbstractExample';_.tI=137;function jO(a){a.a=eG(new cG());}
function kO(a){tO(a);jO(a);a.b=oO(a);xk(a.c.gb(),'width','450px');xk(a.c.gb(),'height','350px');a.B();return a;}
function lO(b,a){io(b.c,a);gG(b.a,a);}
function nO(e,d,c,f,a){var b;b=Ct(new At(),d);ay(b,'example-connector');jo(e.c,b,c,f);dO(e.b,b);if(a!==null){return lN(b,lh('[Lpl.balon.gwt.diagrams.client.connector.Direction;',146,34,[a]));}return kN(b);}
function oO(b){var a;a=bO(new aO(),b.c,true,b);return a;}
function pO(c){var a,b;for(b=pE(c.a);iE(b);){a=qh(jE(b),40);a.zc();}}
function qO(){var a,b,c,d,e,f,g,h;a=nO(this,'all',50,50,null);b=nO(this,'all',100,100,null);this.x(a,b);c=nO(this,'up',250,50,(xM(),CM));d=nO(this,'down',300,100,(xM(),zM));this.x(c,d);e=nO(this,'left',50,200,(xM(),AM));f=nO(this,'right',100,250,(xM(),BM));this.x(e,f);g=nO(this,'left',250,200,(xM(),AM));h=nO(this,'left',300,250,(xM(),AM));this.x(g,h);}
function FN(){}
_=FN.prototype=new rO();_.B=qO;_.tN=jK+'AbstractConnectionsExample';_.tI=138;_.b=null;function cO(){cO=vJ;jc();}
function bO(d,a,b,c){cO();ic(d,a,b);return d;}
function dO(a,b){z(a,b);xk(b.gb(),'position','absolute');xk(b.gb(),'zIndex','100');}
function eO(c,b,a){return gO(new fO(),b,a,c);}
function aO(){}
_=aO.prototype=new hc();_.tN=jK+'AbstractConnectionsExample$1';_.tI=139;function hO(){hO=vJ;wd();}
function gO(d,a,b,c){hO();vd(d,a,b);return d;}
function iO(d,c,b){var a;tc(this,d,c,b);a=jN(c);if(a!==null){pM(a);}}
function fO(){}
_=fO.prototype=new ud();_.ic=iO;_.tN=jK+'AbstractConnectionsExample$2';_.tI=140;function xO(a){kO(a);return a;}
function zO(a,b){lO(this,EK(new CK(),a,b));}
function AO(){return eG(new cG());}
function wO(){}
_=wO.prototype=new FN();_.x=zO;_.yc=AO;_.tN=jK+'BezierExample';_.tI=141;function CO(a){kO(a);return a;}
function EO(a,b){lO(this,gL(new eL(),a,b));}
function FO(){return eG(new cG());}
function BO(){}
_=BO.prototype=new FN();_.x=EO;_.yc=FO;_.tN=jK+'RectilinearExample';_.tI=142;function bP(a){kO(a);return a;}
function dP(d,a,b){var c;c=gL(new eL(),a,b);zK(c,new xL());lO(d,c);}
function eP(a,b){dP(this,a,b);}
function fP(){var a,b;a=nO(this,'connector 1',50,50,(xM(),CM));b=nO(this,'connector 2',200,200,(xM(),zM));dP(this,a,b);}
function gP(){return eG(new cG());}
function aP(){}
_=aP.prototype=new FN();_.x=eP;_.B=fP;_.yc=gP;_.tN=jK+'SimpleRectilinearExample';_.tI=143;function aA(){wN(new xN());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{aA();}catch(a){b(d);}else{aA();}}
var wh=[{},{25:1},{1:1,25:1,37:1},{25:1},{25:1},{25:1},{25:1},{15:1,25:1},{25:1},{9:1,25:1,37:1},{21:1,25:1},{25:1},{7:1,25:1},{7:1,25:1},{7:1,25:1},{7:1,25:1},{25:1},{14:1,25:1},{14:1,25:1},{11:1,14:1,25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{13:1,25:1},{25:1},{25:1},{25:1},{10:1,14:1,25:1},{25:1},{18:1,25:1},{18:1,25:1},{18:1,25:1},{25:1},{13:1,17:1,25:1},{13:1,25:1},{19:1,25:1},{25:1},{25:1},{25:1},{25:1,26:1},{12:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{2:1,12:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{25:1},{25:1,30:1},{25:1,30:1},{25:1,30:1},{12:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{6:1,12:1,24:1,25:1,26:1,27:1},{6:1,12:1,16:1,24:1,25:1,26:1,27:1},{6:1,12:1,16:1,21:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{25:1},{25:1},{5:1,12:1,24:1,25:1,26:1,27:1},{12:1,25:1,26:1,27:1},{12:1,25:1,26:1,27:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{3:1,12:1,24:1,25:1,26:1,27:1},{25:1,30:1},{2:1,12:1,22:1,24:1,25:1,26:1,27:1},{19:1,25:1},{25:1},{12:1,20:1,25:1,26:1,27:1},{25:1,30:1},{12:1,23:1,24:1,25:1,26:1,27:1},{12:1,24:1,25:1,26:1,27:1},{12:1,20:1,25:1,26:1,27:1},{4:1,12:1,24:1,25:1,26:1,27:1},{25:1},{25:1},{25:1},{25:1},{25:1},{25:1},{10:1,14:1,25:1},{25:1,28:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{25:1},{25:1,29:1,37:1},{10:1,14:1,25:1},{10:1,14:1,25:1},{25:1},{10:1,14:1,25:1},{25:1},{25:1,31:1},{25:1,32:1},{25:1,32:1},{25:1},{25:1},{25:1},{25:1},{25:1,31:1},{25:1,38:1},{25:1,32:1},{25:1},{25:1,32:1},{10:1,14:1,25:1},{25:1},{25:1},{12:1,25:1,26:1,27:1,40:1},{12:1,25:1,26:1,27:1,40:1},{12:1,25:1,26:1,27:1,40:1},{25:1},{25:1},{25:1},{25:1},{25:1,39:1},{25:1,36:1},{25:1,33:1},{25:1,34:1},{25:1,33:1,41:1},{25:1,33:1,41:1},{25:1},{25:1},{15:1,25:1},{25:1},{23:1,25:1},{6:1,12:1,24:1,25:1,26:1,27:1},{6:1,12:1,24:1,25:1,26:1,27:1,42:1},{25:1},{7:1,25:1},{6:1,12:1,24:1,25:1,26:1,27:1,42:1},{6:1,12:1,24:1,25:1,26:1,27:1,42:1},{6:1,12:1,24:1,25:1,26:1,27:1,42:1},{25:1},{25:1},{25:1},{25:1},{25:1},{8:1,25:1},{25:1},{25:1},{25:1},{25:1}];if (pl_balon_gwt_diagramsexample_GwtDiagramsExample) {  var __gwt_initHandlers = pl_balon_gwt_diagramsexample_GwtDiagramsExample.__gwt_initHandlers;  pl_balon_gwt_diagramsexample_GwtDiagramsExample.onScriptLoad(gwtOnLoad);}})();