(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,gO='com.allen_sauer.gwt.dragdrop.client.',hO='com.allen_sauer.gwt.dragdrop.client.drop.',iO='com.allen_sauer.gwt.dragdrop.client.util.',jO='com.allen_sauer.gwt.dragdrop.client.util.impl.',kO='com.google.gwt.core.client.',lO='com.google.gwt.lang.',mO='com.google.gwt.user.client.',nO='com.google.gwt.user.client.impl.',oO='com.google.gwt.user.client.ui.',pO='com.google.gwt.user.client.ui.impl.',qO='java.io.',rO='java.lang.',sO='java.util.',tO='pl.balon.gwt.diagrams.client.common.bezier.',uO='pl.balon.gwt.diagrams.client.connection.',vO='pl.balon.gwt.diagrams.client.connection.calculator.',wO='pl.balon.gwt.diagrams.client.connection.data.',xO='pl.balon.gwt.diagrams.client.connector.',yO='pl.balon.gwt.diagramsexample.client.',zO='pl.balon.gwt.diagramsexample.client.examples.';function fO(){}
function oG(a){return this===a;}
function pG(){return yH(this);}
function qG(){return this.tN+'@'+this.hC();}
function mG(){}
_=mG.prototype={};_.eQ=oG;_.hC=pG;_.tS=qG;_.toString=function(){return this.tS();};_.tN=rO+'Object';_.tI=1;function zL(b,a){b.d=a;return b;}
function yL(){}
_=yL.prototype=new mG();_.tN=sO+'EventObject';_.tI=3;_.d=null;function ob(c,b,a){zL(c,b);c.c=a;return c;}
function qb(){var a;a=this.c!==null?'dropTarget='+gg(this.c):'[cancelled]';return 'DragEndEvent('+a+', source='+gg(this.d)+')';}
function nb(){}
_=nb.prototype=new yL();_.tS=qb;_.tN=gO+'DragEndEvent';_.tI=4;_.c=null;function o(c,b,a,d,e){ob(c,b,a);c.a=d;c.b=e;return c;}
function q(){return 'AbsolutePositionDragEndEvent(x='+this.a+', y='+this.b+')';}
function n(){}
_=n.prototype=new nb();_.tS=q;_.tN=gO+'AbsolutePositionDragEndEvent';_.tI=5;_.a=0;_.b=0;function v(){v=fO;db=xM(new BL());}
function s(a){a.j=y(a);}
function t(c,b,a){v();s(c);c.h=b!==null?b:cz();c.g=c.Fb(c.h,a);F(c,c.g);c.o=tc(new rc(),c);return c;}
function u(b,a){if(b.i===null){b.i=yb(new xb());}sK(b.i,a);}
function w(c,a,b){rB(a,'dragdrop-dragging');}
function x(b,a){pc(b.j,b.h,a);if(b.i!==null){Bb(b.i,a);}lB(a,'dragdrop-dragging');}
function y(a){return kc(new dc());}
function z(b,c){var a;a=nc(b.j,c,b.h);return a!==null?a:b.g;}
function A(a,b){{B(a,b,b);}}
function B(c,b,a){xc(c.o,b,a);lB(b,'dragdrop-draggable');lB(a,'dragdrop-handle');EM(db,b,a);}
function C(b,a){if(b.i!==null){Ab(b.i,a);}}
function D(c,a,b){if(c.i!==null){Cb(c.i,a,b);}}
function E(b,a){if(b.i!==null){Db(b.i,a);}}
function F(b,a){lc(b.j,a);}
function ab(b,a){if(ri(b.m,2)){oq(qi(b.m,2),a,b.n.a,b.n.d);}else if(ri(b.m,3)){mw(qi(b.m,3),a,b.k);}else if(ri(b.m,4)){jC(qi(b.m,4),a,b.k);}else if(ri(b.m,5)){kt(qi(b.m,5),a,b.k);}else if(ri(b.m,6)){qi(b.m,6).ed(a);}else{throw tG(new rG(),'Unable to handle initialDraggableParent '+jh(b.m));}}
function bb(b,a){if(b.l!==null&&gH(b.l)!=0){Fl(a.lb(),'margin',b.l);}}
function cb(b,a){b.m=a.p;if(ri(b.m,2)){b.n=lg(new kg(),a,b.m);}else if(ri(b.m,3)){b.k=ur(qi(b.m,3),a);}else if(ri(b.m,4)){b.k=ur(qi(b.m,4),a);}else if(ri(b.m,5)){b.k=ur(qi(b.m,5),a);}else if(ri(b.m,6)){}else{throw tG(new rG(),"Unable to handle 'initialDraggableParent instanceof "+jh(b.m)+"'; Please create your own DragController and override saveDraggableLocationAndStyle() and restoreDraggableLocation()");}b.l=nl(a.lb(),'margin');if(b.l!==null&&gH(b.l)!=0){Fl(a.lb(),'margin','0px');}}
function eb(a){A(this,a);}
function fb(b,a){return re(new qe(),b,a);}
function r(){}
_=r.prototype=new mG();_.Db=eb;_.Fb=fb;_.tN=gO+'AbstractDragController';_.tI=6;_.g=null;_.h=null;_.i=null;_.k=0;_.l=null;_.m=null;_.n=null;_.o=null;var db;function hb(b,a){b.b=a;return b;}
function jb(a){if(a.c==0){return;}uc(a.b,a.d,a.e);a.a=wH()-a.c;a.c=0;}
function kb(a,b,c){a.d=b;a.e=c;if(a.c==0){a.c=wH();}if(a.a>80){gm(a);}else{jb(a);}}
function lb(){jb(this);}
function gb(){}
_=gb.prototype=new mG();_.db=lb;_.tN=gO+'DeferredMoveCommand';_.tI=7;_.a=0;_.b=null;_.c=0;_.d=0;_.e=0;function tb(a){}
function ub(a){}
function vb(a){}
function wb(a){}
function rb(){}
_=rb.prototype=new mG();_.hc=tb;_.ic=ub;_.uc=vb;_.vc=wb;_.tN=gO+'DragHandlerAdapter';_.tI=8;function gI(d,a,b){var c;while(a.yb()){c=a.ac();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function iI(a){throw dI(new bI(),'add');}
function jI(b){var a;a=gI(this,this.Ab(),b);return a!==null;}
function kI(){var a,b,c;c=xG(new wG());a=null;yG(c,'[');b=this.Ab();while(b.yb()){if(a!==null){yG(c,a);}else{a=', ';}yG(c,tH(b.ac()));}yG(c,']');return CG(c);}
function fI(){}
_=fI.prototype=new mG();_.s=iI;_.C=jI;_.tS=kI;_.tN=sO+'AbstractCollection';_.tI=9;function zI(b,a){throw mF(new kF(),'Index: '+a+', Size: '+b.b);}
function AI(a){return nI(new mI(),a);}
function BI(a){return wI(new vI(),a);}
function CI(b,a){throw dI(new bI(),'add');}
function DI(a){this.r(this.gd(),a);return true;}
function EI(e){var a,b,c,d,f;if(e===this){return true;}if(!ri(e,31)){return false;}f=qi(e,31);if(this.gd()!=f.gd()){return false;}c=AI(this);d=f.Ab();while(pI(c)){a=qI(c);b=qI(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function FI(){var a,b,c,d;c=1;a=31;b=AI(this);while(pI(b)){d=qI(b);c=31*c+(d===null?0:d.hC());}return c;}
function aJ(){return AI(this);}
function bJ(a){throw dI(new bI(),'remove');}
function lI(){}
_=lI.prototype=new fI();_.r=CI;_.s=DI;_.eQ=EI;_.hC=FI;_.Ab=aJ;_.Dc=bJ;_.tN=sO+'AbstractList';_.tI=10;function pK(a){{tK(a);}}
function qK(a){pK(a);return a;}
function sK(b,a){iL(b.a,b.b++,a);return true;}
function rK(d,a){var b,c;c=a.Ab();b=c.yb();while(c.yb()){iL(d.a,d.b++,c.ac());}return b;}
function uK(a){tK(a);}
function tK(a){a.a=zh();a.b=0;}
function wK(b,a){return yK(b,a)!=(-1);}
function xK(b,a){if(a<0||a>=b.b){zI(b,a);}return eL(b.a,a);}
function yK(b,a){return zK(b,a,0);}
function zK(c,b,a){if(a<0){zI(c,a);}for(;a<c.b;++a){if(dL(b,eL(c.a,a))){return a;}}return (-1);}
function AK(a){return a.b==0;}
function BK(c,a){var b;b=xK(c,a);gL(c.a,a,1);--c.b;return b;}
function CK(c,b){var a;a=yK(c,b);if(a==(-1)){return false;}BK(c,a);return true;}
function DK(d,a,b){var c;c=xK(d,a);iL(d.a,a,b);return c;}
function EK(c,a){var b;if(a.a<c.b){a=fi(a,c.b);}for(b=0;b<c.b;++b){mi(a,b,eL(c.a,b));}if(a.a>c.b){mi(a,c.b,null);}return a;}
function aL(a,b){if(a<0||a>this.b){zI(this,a);}FK(this.a,a,b);++this.b;}
function bL(a){return sK(this,a);}
function FK(a,b,c){a.splice(b,0,c);}
function cL(a){return wK(this,a);}
function dL(a,b){return a===b||a!==null&&a.eQ(b);}
function fL(a){return xK(this,a);}
function eL(a,b){return a[b];}
function hL(a){return BK(this,a);}
function gL(a,c,b){a.splice(c,b);}
function iL(a,b,c){a[b]=c;}
function jL(){return this.b;}
function oK(){}
_=oK.prototype=new lI();_.r=aL;_.s=bL;_.C=cL;_.wb=fL;_.Dc=hL;_.gd=jL;_.tN=sO+'ArrayList';_.tI=11;_.a=null;_.b=0;function yb(a){qK(a);return a;}
function Ab(d,a){var b,c;for(c=AI(d);pI(c);){b=qi(qI(c),7);b.hc(a);}}
function Bb(e,d){var a,b,c;a=ac(new Fb(),d);for(c=AI(e);pI(c);){b=qi(qI(c),7);b.ic(a);}}
function Cb(f,e,a){var b,c,d;b=ob(new nb(),e,a);for(d=AI(f);pI(d);){c=qi(qI(d),7);c.uc(b);}}
function Db(e,d){var a,b,c;a=ac(new Fb(),d);for(c=AI(e);pI(c);){b=qi(qI(c),7);b.vc(a);}}
function xb(){}
_=xb.prototype=new oK();_.tN=gO+'DragHandlerCollection';_.tI=12;function ac(b,a){zL(b,a);return b;}
function cc(){return 'DragStartEvent(source='+gg(this.d)+')';}
function Fb(){}
_=Fb.prototype=new yL();_.tS=cc;_.tN=gO+'DragStartEvent';_.tI=13;function jc(a){a.a=qK(new oK());}
function kc(a){jc(a);return a;}
function lc(b,a){sK(b.a,a);}
function nc(g,h,a){var b,c,d,e,f,i,j,k;i=ig(new hg(),h,null);j=ef(i);e=null;c=2147483647;for(d=0;d<g.b.a;d++){b=g.b[d];f=b.b;if(hf(f,i)){k=df(f,j);if(k<=c){if(e===null|| !zf(hc(b).lb(),hc(e).lb())){c=k;e=b;}}}}return e===null?null:e.a;}
function oc(a){return AI(a.a);}
function pc(h,b,d){var a,c,e,f,g;a=ig(new hg(),b,null);g=qK(new oK());for(f=oc(h);pI(f);){e=qi(qI(f),8);c=fc(new ec(),e);if(!zf(d.lb(),hc(c).lb())){if(hf(c.b,a)){sK(g,c);}}}h.b=qi(EK(g,li('[Lcom.allen_sauer.gwt.dragdrop.client.DropControllerCollection$Candidate;',173,10,[])),9);oL(h.b);}
function dc(){}
_=dc.prototype=new mG();_.tN=gO+'DropControllerCollection';_.tI=14;_.b=null;function fc(c,a){var b;c.a=a;b=a.kb();if(!b.zb()){throw iF(new gF(),'Unattached drop target. You must call DragController#unregisterDropController for all drop targets not attached to the DOM.');}c.b=ig(new hg(),b,null);return c;}
function hc(a){return a.a.kb();}
function ic(a){var b;b=qi(a,10);return zf(hc(this).lb(),hc(b).lb())?1:(-1);}
function ec(){}
_=ec.prototype=new mG();_.v=ic;_.tN=gO+'DropControllerCollection$Candidate';_.tI=15;_.a=null;_.b=null;function sc(a){a.d=hb(new gb(),a);a.f=xM(new BL());}
function tc(b,a){sc(b);b.e=a;b.a=a.h;return b;}
function uc(e,f,g){var a,b,c,d;c=lg(new kg(),e.b,e.a);a=c.a+e.p+f-e.j;b=c.d+e.q+g-e.k;if(e.c){a=zF(0,AF(a,e.l));b=zF(0,AF(b,e.m));}Af(e.o.lb(),a,b);d=z(e.e,e.o);if(e.i!==d){if(e.i!==null){e.i.mc(e.g,e.e);}e.i=d;if(e.i!==null){e.i.kc(e.o,e.g,e.e);}}if(e.i!==null){e.i.tc(e.o,e.g,e.e);}}
function vc(b){var a;sl(b.b.lb());b.h=false;if(b.i!==null){b.i.mc(b.g,b.e);}b.i=null;bd(b.e,b.g,null);a=ob(new nb(),b.g,null);C(b.e,a);}
function xc(c,b,a){if(a!==null){bx(a,c);EM(c.f,a,b);}else{throw tG(new rG(),'dragHandle must implement SourcesMouseEvents to be draggable');}}
function yc(f){var a,c,d,e;f.g=qi(DM(f.f,f.b),14);try{E(f.e,f.g);}catch(a){a=Bi(a);if(ri(a,12)){a;return;}else throw a;}cd(f.e,f.g);f.o=f.e.f;f.l=Ef(f.a.lb())-f.o.rb();f.m=Df(f.a.lb())-f.o.qb();e=lg(new kg(),f.b,f.a);c=lg(new kg(),f.o,f.a);f.p=c.a-e.a;f.q=c.d-e.d;xl(f.b.lb());f.h=true;try{uc(f,f.j,f.k);}catch(a){a=Bi(a);if(ri(a,11)){d=a;vc(f);throw d;}else throw a;}}
function zc(b,c,d){var a;this.b=b;a=vk((bk(),pk));if(a!=1&&a!=(-1)){return;}this.n=true;if(this.h){return;}al((bk(),pk));cg();this.j=c;this.k=d;}
function Ac(a){}
function Bc(a){}
function Cc(d,e,f){var a,c;if(!this.h){if(this.n){yc(this);}if(!this.h){return;}}al((bk(),pk));try{kb(this.d,e,f);}catch(a){a=Bi(a);if(ri(a,11)){c=a;vc(this);throw c;}else throw a;}}
function Dc(g,h,i){var a,a,d,e,f;d=vk((bk(),pk));if(d!=1&&d!=(-1)){return;}this.n=false;if(!this.h){return;}try{sl(this.b.lb());uc(this,h,i);this.h=false;if(this.i===null){vc(this);return;}try{D(this.e,this.g,this.i.kb());}catch(a){a=Bi(a);if(ri(a,12)){a;vc(this);return;}else throw a;}try{this.i.wc(this.o,this.g,this.e);}catch(a){a=Bi(a);if(ri(a,13)){a;vc(this);return;}else throw a;}bd(this.e,this.g,this.i.kb());e=this.i.jc(this.o,this.g,this.e);C(this.e,e);}catch(a){a=Bi(a);if(ri(a,11)){f=a;vc(this);throw f;}else throw a;}finally{this.i=null;}}
function rc(){}
_=rc.prototype=new mG();_.oc=zc;_.pc=Ac;_.qc=Bc;_.rc=Cc;_.sc=Dc;_.tN=gO+'MouseDragHandler';_.tI=16;_.a=null;_.b=null;_.c=false;_.e=null;_.g=null;_.h=false;_.i=null;_.j=0;_.k=0;_.l=0;_.m=0;_.n=false;_.o=null;_.p=0;_.q=0;function ad(){ad=fO;v();}
function Fc(c,b,a){ad();t(c,b,a);return c;}
function bd(c,a,b){w(c,a,b);if(c.c!==null){c.c=null;if(c.e!==null){DC(c.e);c.e=null;}else{if(b===null){ab(c,a);}}bb(c,a);DC(c.f);c.f=null;}}
function cd(d,a){var b,c;x(d,a);d.c=a;d.e=d.Eb(a);cb(d,a);c=lg(new kg(),a,d.h);d.f=nz(new gz());lB(d.f,'dragdrop-movable-panel');if(d.e===null){uB(d.f,a.rb(),a.qb());}oq(d.h,d.f,c.a,c.d);b=d.e!==null?d.e:d.c;d.f.ed(b);}
function dd(b,a){b.d=a;}
function ed(a){var b;if(this.d){b=ov(new st(),'this is a Drag Proxy');lB(b,'dragdrop-proxy');uB(b,this.c.rb(),this.c.qb());return b;}else{return null;}}
function Ec(){}
_=Ec.prototype=new r();_.Eb=ed;_.tN=gO+'PickupDragController';_.tI=17;_.c=null;_.d=false;_.e=null;_.f=null;function DH(){DH=fO;FH=ki('[Ljava.lang.StackTraceElement;',[175],[36],[0],null);}
function AH(a){a.c=FH;}
function BH(a){DH();AH(a);return a;}
function CH(b,a){DH();AH(b);b.b=a;return b;}
function EH(c){var a,b;a=jh(c);b=c.b;if(b!==null){return a+': '+b;}else{return a;}}
function aI(){return EH(this);}
function zH(){}
_=zH.prototype=new mG();_.tS=aI;_.tN=rO+'Throwable';_.tI=18;_.a=null;_.b=null;var FH;function cF(){cF=fO;DH();}
function aF(a){cF();BH(a);return a;}
function bF(b,a){cF();CH(b,a);return b;}
function FE(){}
_=FE.prototype=new zH();_.tN=rO+'Exception';_.tI=19;function hd(){hd=fO;cF();}
function gd(a){hd();aF(a);return a;}
function fd(){}
_=fd.prototype=new FE();_.tN=gO+'VetoDragException';_.tI=20;function yd(b,a){b.g=a;lB(a,b.jb());return b;}
function Ad(d,c,b,a){rB(d.g,'dragdrop-dropTarget-engage dragdrop-engage');return d.Cb(c,b,a);}
function Bd(d,c,b,a){lB(d.g,'dragdrop-dropTarget-engage dragdrop-engage');}
function Cd(c,b,a){rB(c.g,'dragdrop-dropTarget-engage dragdrop-engage');}
function Dd(){return this.g;}
function Ed(c,b,a){return ob(new nb(),b,this.g);}
function Fd(c,b,a){return Ad(this,c,b,a);}
function ae(c,b,a){Bd(this,c,b,a);}
function be(b,a){Cd(this,b,a);}
function ce(c,b,a){}
function de(c,b,a){}
function xd(){}
_=xd.prototype=new mG();_.kb=Dd;_.Cb=Ed;_.jc=Fd;_.kc=ae;_.mc=be;_.tc=ce;_.wc=de;_.tN=hO+'AbstractDropController';_.tI=21;_.g=null;function ge(){ge=fO;me=Fw(new Dw(),'x');}
function fe(b,a){ge();yd(b,a);return b;}
function he(f,e){var a,b,c,d;d=nz(new gz());lB(d,'dragdrop-positioner');oq(cz(),d,(-500),(-500));d.ed(me);a=nz(new gz());c=e.rb()-Ff(d);b=e.qb()-ag(d);uB(a,c,b);d.ed(a);return d;}
function ie(e,d,b,a){var c;c=Ad(e,d,b,a);le(e);return c;}
function je(d,c,b,a){Bd(d,c,b,a);d.f=he(d,b);}
function ke(c,b,a){Cd(c,b,a);le(c);}
function le(a){if(a.f!==null){DC(a.f);}}
function ne(c,b,a){return ie(this,c,b,a);}
function oe(c,b,a){je(this,c,b,a);}
function pe(b,a){ke(this,b,a);}
function ee(){}
_=ee.prototype=new xd();_.jc=ne;_.kc=oe;_.mc=pe;_.tN=hO+'AbstractPositioningDropController';_.tI=22;_.f=null;var me;function kd(){kd=fO;ge();}
function jd(b,a){kd();fe(b,a);b.d=ze(new ye(),a);return b;}
function ld(d,c,a,e){var b;b=d.gb(c,a,e);if(b!==null){oq(d.d.b,e,b.a,b.d);}}
function md(e,d,b,a){var c;oq(e.d.b,b,e.c.a,e.c.d);c=ie(e,d,b,a);e.e=null;return c;}
function nd(c,b,a){ke(c,b,a);De(c.d,null);c.e=null;}
function od(d,c,b,a){ld(d,c,b,d.f);}
function pd(b,a,d){var c;c=ig(new hg(),b,this.d.a);if(this.e===null){this.e=lg(new kg(),b,this.d.b);}else{rg(this.e,b);}ng(this.e,0,0,Ce(this.d)-gf(c),Be(this.d)-ff(c));return this.e;}
function qd(){return 'dragdrop-dropTarget dragdrop-absolute-positioning-drop-target';}
function rd(e,b,a){var c,d;c=this.g;d=lg(new kg(),b,c);return o(new n(),b,c,d.a,d.d);}
function sd(c,b,a){return md(this,c,b,a);}
function td(c,b,a){je(this,c,b,a);De(this.d,a.h);}
function ud(b,a){nd(this,b,a);}
function vd(c,b,a){od(this,c,b,a);}
function wd(c,b,a){this.c=this.gb(c,b,b);if(this.c===null){throw Fe(new Ee());}}
function id(){}
_=id.prototype=new ee();_.gb=pd;_.jb=qd;_.Cb=rd;_.jc=sd;_.kc=td;_.mc=ud;_.tc=vd;_.wc=wd;_.tN=hO+'AbsolutePositionDropController';_.tI=23;_.c=null;_.d=null;_.e=null;function se(){se=fO;kd();}
function re(c,b,a){se();jd(c,b);c.a=a;return c;}
function te(b,a,d){var c;if(this.a){c=ig(new hg(),b,this.d.a);if(this.b===null){this.b=lg(new kg(),b,this.d.b);}else{rg(this.b,b);}ng(this.b,0,0,Ce(this.d)-gf(c),Be(this.d)-ff(c));return this.b;}else{return null;}}
function ue(){return 'dragdrop-boundary';}
function ve(d,c,a){var b;b=md(this,d,c,a);this.b=null;return b;}
function we(b,a){nd(this,b,a);this.b=null;}
function qe(){}
_=qe.prototype=new id();_.gb=te;_.jb=ue;_.jc=ve;_.mc=we;_.tN=hO+'BoundaryDropController';_.tI=24;_.a=false;_.b=null;function ze(b,a){b.b=a;return b;}
function Be(a){return Df(a.b.lb());}
function Ce(a){return Ef(a.b.lb());}
function De(b,a){b.a=a;}
function ye(){}
_=ye.prototype=new mG();_.tN=hO+'DropTargetInfo';_.tI=25;_.a=null;_.b=null;function af(){af=fO;cF();}
function Fe(a){af();aF(a);return a;}
function Ee(){}
_=Ee.prototype=new FE();_.tN=hO+'VetoDropException';_.tI=26;function df(b,a){var c,d;c=zF(b.b-a.a,a.a-b.c);d=zF(b.d-a.b,a.b-b.a);return zF(c,d);}
function ef(a){return tf(new sf(),a.b+ui(gf(a)/2),a.d+ui(ff(a)/2));}
function ff(a){return a.a-a.d;}
function gf(a){return a.c-a.b;}
function hf(b,a){if(b.c<a.b||b.b>a.c||b.a<a.d||b.d>a.a){return false;}return true;}
function jf(b,a){b.a=a;}
function kf(b,a){b.b=a;}
function lf(b,a){b.c=a;}
function mf(a,b){a.d=b;}
function nf(){return '[ ('+this.b+', '+this.d+') - ('+this.c+', '+this.a+') ]';}
function bf(){}
_=bf.prototype=new mG();_.tS=nf;_.tN=iO+'AbstractArea';_.tI=27;_.a=0;_.b=0;_.c=0;_.d=0;function qf(){return '('+this.pb()+', '+this.tb()+')';}
function of(){}
_=of.prototype=new mG();_.tS=qf;_.tN=iO+'AbstractLocation';_.tI=28;function tf(b,a,c){b.a=a;b.b=c;return b;}
function vf(){return this.a;}
function wf(){return this.b;}
function sf(){}
_=sf.prototype=new of();_.pb=vf;_.tb=wf;_.tN=iO+'CoordinateLocation';_.tI=29;_.a=0;_.b=0;function yf(){yf=fO;{bg=new xg();}}
function zf(b,a){yf();return Ag(bg,b,a);}
function Af(a,b,c){yf();a.style.left=b+'px';a.style.top=c+'px';}
function Bf(a){yf();return Dg(bg,a);}
function Cf(a){yf();return Eg(bg,a);}
function Df(a){yf();return Fg(bg,a);}
function Ef(a){yf();return ah(bg,a);}
function Ff(a){yf();return dh(bg,a);}
function ag(a){yf();return eh(bg,a);}
function cg(){yf();bh(bg);}
var bg=null;function gg(a){var b;b=jh(a);return iH(b,fH(b,46)+1);}
function ig(e,g,c){var a,b,d,f;b=nB(g);f=oB(g);if(c!==null){b-=nB(c);b-=Bf(c.lb());f-=oB(c);f-=Cf(c.lb());}d=b+g.rb();a=f+g.qb();kf(e,b);mf(e,f);lf(e,d);jf(e,a);return e;}
function hg(){}
_=hg.prototype=new bf();_.tN=iO+'WidgetArea';_.tI=30;function lg(b,c,a){pg(b,c);og(b,a);qg(b);return b;}
function ng(e,c,d,a,b){e.a=zF(c,AF(e.a,a));e.d=zF(d,AF(e.d,b));}
function og(b,a){if(a===null||a===cz()){b.b=0;b.c=0;}else{b.b=nB(a)+Bf(a.lb());b.c=oB(a)+Cf(a.lb());}}
function pg(a,b){if(b===null){a.e=0;a.f=0;}else{a.e=nB(b);a.f=oB(b);}}
function qg(a){a.a=a.e-a.b;a.d=a.f-a.c;}
function rg(a,b){pg(a,b);qg(a);}
function sg(){return this.a;}
function tg(){return this.d;}
function ug(){return '('+this.a+', '+this.d+')';}
function kg(){}
_=kg.prototype=new of();_.pb=sg;_.tb=tg;_.tS=ug;_.tN=iO+'WidgetLocation';_.tI=31;_.a=0;_.b=0;_.c=0;_.d=0;_.e=0;_.f=0;function dh(a,b){return b.rb()-ah(a,b.lb());}
function eh(a,b){return b.qb()-Fg(a,b.lb());}
function vg(){}
_=vg.prototype=new mG();_.tN=jO+'DOMUtilImpl';_.tI=32;function Dg(e,d){try{var c=$doc.defaultView.getComputedStyle(d,null);var b=c.getPropertyValue('border-left-width');return b.indexOf('px')== -1?0:parseInt(b.substr(0,b.length-2));}catch(a){throw new Error('getBorderLeft exception:\n'+a);}}
function Eg(e,d){try{var c=$doc.defaultView.getComputedStyle(d,null);var b=c.getPropertyValue('border-top-width');return b.indexOf('px')== -1?0:parseInt(b.substr(0,b.length-2));}catch(a){throw new Error('getBorderTop: '+a);}}
function Fg(c,b){try{return b.clientHeight;}catch(a){throw new Error('getClientHeight exception:\n'+a);}}
function ah(c,b){try{return b.clientWidth;}catch(a){throw new Error('getClientWidth exception:\n'+a);}}
function bh(b){try{$wnd.getSelection().removeAllRanges();}catch(a){throw new Error('unselect exception:\n'+a);}}
function Bg(){}
_=Bg.prototype=new vg();_.tN=jO+'DOMUtilImplStandard';_.tI=33;function Ag(c,b,a){return !(!(b.compareDocumentPosition(a)&16));}
function wg(){}
_=wg.prototype=new Bg();_.tN=jO+'DOMUtilImplMozilla';_.tI=34;function xg(){}
_=xg.prototype=new wg();_.tN=jO+'DOMUtilImplMozillaOld';_.tI=35;function jh(a){return a==null?null:a.tN;}
function lh(a){kh=a;}
var kh=null;function oh(a){return a==null?0:a.$H?a.$H:(a.$H=qh());}
function ph(a){return a==null?0:a.$H?a.$H:(a.$H=qh());}
function qh(){return ++rh;}
var rh=0;function uG(){uG=fO;cF();}
function sG(a){uG();aF(a);return a;}
function tG(b,a){uG();bF(b,a);return b;}
function rG(){}
_=rG.prototype=new FE();_.tN=rO+'RuntimeException';_.tI=36;function uh(){uh=fO;uG();}
function th(c,b,a){uh();tG(c,'JavaScript '+b+' exception: '+a);return c;}
function sh(){}
_=sh.prototype=new rG();_.tN=kO+'JavaScriptException';_.tI=37;function xh(b,a){if(!ri(a,15)){return false;}return Bh(b,qi(a,15));}
function yh(a){return oh(a);}
function zh(){return [];}
function Ah(){return {};}
function Ch(a){return xh(this,a);}
function Bh(a,b){return a===b;}
function Dh(){return yh(this);}
function Fh(){return Eh(this);}
function Eh(a){if(a.toString)return a.toString();return '[object]';}
function vh(){}
_=vh.prototype=new mG();_.eQ=Ch;_.hC=Dh;_.tS=Fh;_.tN=kO+'JavaScriptObject';_.tI=38;function bi(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function di(a,b,c){return a[b]=c;}
function fi(a,b){return ei(a,b);}
function ei(a,b){return bi(new ai(),b,a.tI,a.b,a.tN);}
function gi(b,a){return b[a];}
function ii(b,a){return b[a];}
function hi(a){return a.length;}
function ki(e,d,c,b,a){return ji(e,d,c,b,0,hi(b),a);}
function ji(j,i,g,c,e,a,b){var d,f,h;if((f=gi(c,e))<0){throw DF(new CF());}h=bi(new ai(),f,gi(i,e),gi(g,e),j);++e;if(e<a){j=iH(j,1);for(d=0;d<f;++d){di(h,d,ji(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){di(h,d,b);}}return h;}
function li(f,e,c,g){var a,b,d;b=hi(g);d=bi(new ai(),b,e,c,f);for(a=0;a<b;++a){di(d,a,ii(g,a));}return d;}
function mi(a,b,c){if(c!==null&&a.b!=0&& !ri(c,a.b)){throw kE(new jE());}return di(a,b,c);}
function ai(){}
_=ai.prototype=new mG();_.tN=lO+'Array';_.tI=39;function pi(b,a){return !(!(b&&xi[b][a]));}
function qi(b,a){if(b!=null)pi(b.tI,a)||wi();return b;}
function ri(b,a){return b!=null&&pi(b.tI,a);}
function si(a){return a&65535;}
function ti(a){return ~(~a);}
function ui(a){if(a>(pF(),qF))return pF(),qF;if(a<(pF(),rF))return pF(),rF;return a>=0?Math.floor(a):Math.ceil(a);}
function wi(){throw AE(new zE());}
function vi(a){if(a!==null){throw AE(new zE());}return a;}
function yi(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var xi;function Bi(a){if(ri(a,16)){return a;}return th(new sh(),Di(a),Ci(a));}
function Ci(a){return a.message;}
function Di(a){return a.name;}
function aj(){aj=fO;uG();}
function Fi(b,a){aj();sG(b);return b;}
function Ei(){}
_=Ei.prototype=new rG();_.tN=mO+'CommandCanceledException';_.tI=42;function vj(a){a.a=dj(new cj(),a);a.b=qK(new oK());a.d=hj(new gj(),a);a.f=lj(new kj(),a);}
function wj(a){vj(a);return a;}
function yj(c){var a,b,d;a=nj(c.f);qj(c.f);b=null;if(ri(a,17)){b=Fi(new Ei(),qi(a,17));}else{}if(b!==null){d=kh;if(d!==null){rS(d,b);}}Bj(c,false);Aj(c);}
function zj(e,d){var a,b,c,f;f=false;try{Bj(e,true);rj(e.f,e.b.b);gn(e.a,10000);while(oj(e.f)){b=pj(e.f);c=true;try{if(b===null){return;}if(ri(b,17)){a=qi(b,17);a.db();}else{}}finally{f=sj(e.f);if(f){return;}if(c){qj(e.f);}}if(Ej(wH(),d)){return;}}}finally{if(!f){cn(e.a);Bj(e,false);Aj(e);}}}
function Aj(a){if(!AK(a.b)&& !a.e&& !a.c){Cj(a,true);gn(a.d,1);}}
function Bj(b,a){b.c=a;}
function Cj(b,a){b.e=a;}
function Dj(b,a){sK(b.b,a);Aj(b);}
function Ej(a,b){return yF(a-b)>=100;}
function bj(){}
_=bj.prototype=new mG();_.tN=mO+'CommandExecutor';_.tI=43;_.c=false;_.e=false;function dn(){dn=fO;nn=qK(new oK());{mn();}}
function bn(a){dn();return a;}
function cn(a){if(a.b){hn(a.c);}else{jn(a.c);}CK(nn,a);}
function en(e,d){var a,c;try{fn(e);}catch(a){a=Bi(a);if(ri(a,16)){c=a;rS(d,c);}else throw a;}}
function fn(a){if(!a.b){CK(nn,a);}a.Fc();}
function gn(b,a){if(a<=0){throw eF(new dF(),'must be positive');}cn(b);b.b=false;b.c=kn(b,a);sK(nn,b);}
function hn(a){dn();$wnd.clearInterval(a);}
function jn(a){dn();$wnd.clearTimeout(a);}
function kn(b,a){dn();return $wnd.setTimeout(function(){b.eb();},a);}
function ln(){var a;a=kh;if(a!==null){en(this,a);}else{fn(this);}}
function mn(){dn();rn(new Dm());}
function Cm(){}
_=Cm.prototype=new mG();_.eb=ln;_.tN=mO+'Timer';_.tI=44;_.b=false;_.c=0;var nn;function ej(){ej=fO;dn();}
function dj(b,a){ej();b.a=a;bn(b);return b;}
function fj(){if(!this.a.c){return;}yj(this.a);}
function cj(){}
_=cj.prototype=new Cm();_.Fc=fj;_.tN=mO+'CommandExecutor$1';_.tI=45;function ij(){ij=fO;dn();}
function hj(b,a){ij();b.a=a;bn(b);return b;}
function jj(){Cj(this.a,false);zj(this.a,wH());}
function gj(){}
_=gj.prototype=new Cm();_.Fc=jj;_.tN=mO+'CommandExecutor$2';_.tI=46;function lj(b,a){b.d=a;return b;}
function nj(a){return xK(a.d.b,a.b);}
function oj(a){return a.c<a.a;}
function pj(b){var a;b.b=b.c;a=xK(b.d.b,b.c++);if(b.c>=b.a){b.c=0;}return a;}
function qj(a){BK(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0;}}a.b=(-1);}
function rj(b,a){b.a=a;}
function sj(a){return a.b==(-1);}
function tj(){return oj(this);}
function uj(){return pj(this);}
function kj(){}
_=kj.prototype=new mG();_.yb=tj;_.ac=uj;_.tN=mO+'CommandExecutor$CircularIterator';_.tI=47;_.a=0;_.b=(-1);_.c=0;function bk(){bk=fO;wl=qK(new oK());{ol=new go();oo(ol);}}
function ck(a){bk();sK(wl,a);}
function dk(b,a){bk();cp(ol,b,a);}
function ek(a,b){bk();return lo(ol,a,b);}
function fk(){bk();return ep(ol,'A');}
function gk(){bk();return ep(ol,'div');}
function hk(a){bk();return ep(ol,a);}
function ik(a){bk();return wo(ol,a);}
function jk(){bk();return ep(ol,'label');}
function kk(){bk();return ep(ol,'span');}
function lk(){bk();return ep(ol,'tbody');}
function mk(){bk();return ep(ol,'td');}
function nk(){bk();return ep(ol,'tr');}
function ok(){bk();return ep(ol,'table');}
function sk(b,a,d){bk();var c;c=kh;if(c!==null){qk(b,a,d,c);}else{rk(b,a,d);}}
function qk(e,d,g,f){bk();var a,c;try{rk(e,d,g);}catch(a){a=Bi(a);if(ri(a,16)){c=a;rS(f,c);}else throw a;}}
function rk(b,a,c){bk();var d;if(a===vl){if(Fk(b)==8192){vl=null;}}d=pk;pk=b;try{c.ec(b);}finally{pk=d;}}
function tk(b,a){bk();fp(ol,b,a);}
function uk(a){bk();return gp(ol,a);}
function vk(a){bk();return mo(ol,a);}
function wk(a){bk();return hp(ol,a);}
function xk(a){bk();return ip(ol,a);}
function yk(a){bk();return jp(ol,a);}
function zk(a){bk();return xo(ol,a);}
function Ak(a){bk();return kp(ol,a);}
function Bk(a){bk();return lp(ol,a);}
function Ck(a){bk();return mp(ol,a);}
function Dk(a){bk();return yo(ol,a);}
function Ek(a){bk();return zo(ol,a);}
function Fk(a){bk();return np(ol,a);}
function al(a){bk();Ao(ol,a);}
function bl(a){bk();return Bo(ol,a);}
function cl(a){bk();return io(ol,a);}
function dl(a){bk();return jo(ol,a);}
function el(b,a){bk();return op(ol,b,a);}
function fl(a){bk();return pp(ol,a);}
function il(a,b){bk();return sp(ol,a,b);}
function gl(a,b){bk();return qp(ol,a,b);}
function hl(a,b){bk();return rp(ol,a,b);}
function jl(a){bk();return tp(ol,a);}
function kl(a){bk();return Co(ol,a);}
function ll(a){bk();return up(ol,a);}
function ml(a){bk();return Do(ol,a);}
function nl(b,a){bk();return vp(ol,b,a);}
function pl(c,a,b){bk();Fo(ol,c,a,b);}
function ql(b,a){bk();return po(ol,b,a);}
function rl(a){bk();var b,c;c=true;if(wl.b>0){b=qi(xK(wl,wl.b-1),18);if(!(c=b.lc(a))){tk(a,true);al(a);}}return c;}
function sl(a){bk();if(vl!==null&&ek(a,vl)){vl=null;}qo(ol,a);}
function tl(b,a){bk();wp(ol,b,a);}
function ul(a){bk();CK(wl,a);}
function xl(a){bk();vl=a;ap(ol,a);}
function yl(b,a,c){bk();xp(ol,b,a,c);}
function Bl(a,b,c){bk();Ap(ol,a,b,c);}
function zl(a,b,c){bk();yp(ol,a,b,c);}
function Al(a,b,c){bk();zp(ol,a,b,c);}
function Cl(a,b){bk();Bp(ol,a,b);}
function Dl(a,b){bk();Cp(ol,a,b);}
function El(a,b){bk();Dp(ol,a,b);}
function Fl(b,a,c){bk();Ep(ol,b,a,c);}
function am(a,b){bk();so(ol,a,b);}
function bm(a){bk();return to(ol,a);}
function cm(){bk();return Fp(ol);}
function dm(){bk();return aq(ol);}
var pk=null,ol=null,vl=null,wl;function fm(){fm=fO;hm=wj(new bj());}
function gm(a){fm();if(a===null){throw aG(new FF(),'cmd can not be null');}Dj(hm,a);}
var hm;function km(a){if(ri(a,19)){return ek(this,qi(a,19));}return xh(yi(this,im),a);}
function lm(){return yh(yi(this,im));}
function mm(){return bm(this);}
function im(){}
_=im.prototype=new vh();_.eQ=km;_.hC=lm;_.tS=mm;_.tN=mO+'Element';_.tI=48;function rm(a){return xh(yi(this,nm),a);}
function sm(){return yh(yi(this,nm));}
function tm(){return bl(this);}
function nm(){}
_=nm.prototype=new vh();_.eQ=rm;_.hC=sm;_.tS=tm;_.tN=mO+'Event';_.tI=49;function vm(){vm=fO;ym=qK(new oK());{zm=new dq();if(!iq(zm)){zm=null;}}}
function wm(e,d){vm();var a,c;try{xm(e);}catch(a){a=Bi(a);if(ri(a,16)){c=a;rS(d,c);}else throw a;}}
function xm(a){vm();var b,c;for(b=AI(ym);pI(b);){c=vi(qI(b));null.kd();}}
function Am(a){vm();if(zm!==null){fq(zm,a);}}
function Bm(b){vm();var a;a=kh;if(a!==null){wm(b,a);}else{xm(b);}}
var ym,zm=null;function Fm(){while((dn(),nn).b>0){cn(qi(xK((dn(),nn),0),20));}}
function an(){return null;}
function Dm(){}
_=Dm.prototype=new mG();_.zc=Fm;_.Ac=an;_.tN=mO+'Timer$1';_.tI=50;function qn(){qn=fO;sn=qK(new oK());co=qK(new oK());{Dn();}}
function rn(a){qn();sK(sn,a);}
function tn(d){qn();var a,c;try{un();}catch(a){a=Bi(a);if(ri(a,16)){c=a;rS(d,c);}else throw a;}}
function un(){qn();var a,b;for(a=AI(sn);pI(a);){b=qi(qI(a),21);b.zc();}}
function vn(d){qn();var a,c;try{return wn();}catch(a){a=Bi(a);if(ri(a,16)){c=a;rS(d,c);return null;}else throw a;}}
function wn(){qn();var a,b,c,d;d=null;for(a=AI(sn);pI(a);){b=qi(qI(a),21);c=b.Ac();{d=c;}}return d;}
function xn(d){qn();var a,c;try{yn();}catch(a){a=Bi(a);if(ri(a,16)){c=a;rS(d,c);}else throw a;}}
function yn(){qn();var a,b;for(a=AI(co);pI(a);){b=vi(qI(a));null.kd();}}
function zn(){qn();return cm();}
function An(){qn();return dm();}
function Bn(){qn();return $doc.documentElement.scrollLeft||$doc.body.scrollLeft;}
function Cn(){qn();return $doc.documentElement.scrollTop||$doc.body.scrollTop;}
function Dn(){qn();__gwt_initHandlers(function(){ao();},function(){return Fn();},function(){En();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function En(){qn();var a;a=kh;if(a!==null){tn(a);}else{un();}}
function Fn(){qn();var a;a=kh;if(a!==null){return vn(a);}else{return wn();}}
function ao(){qn();var a;a=kh;if(a!==null){xn(a);}else{yn();}}
function bo(c,b,a){qn();$wnd.open(c,b,a);}
var sn,co;function cp(c,b,a){b.appendChild(a);}
function ep(b,a){return $doc.createElement(a);}
function fp(c,b,a){b.cancelBubble=a;}
function gp(b,a){return !(!a.altKey);}
function hp(b,a){return a.clientX|| -1;}
function ip(b,a){return a.clientY|| -1;}
function jp(b,a){return !(!a.ctrlKey);}
function kp(b,a){return a.which||(a.keyCode|| -1);}
function lp(b,a){return !(!a.metaKey);}
function mp(b,a){return !(!a.shiftKey);}
function np(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function op(d,b,a){var c=b.getAttribute(a);return c==null?null:c;}
function pp(c,b){var a=$doc.getElementById(b);return a||null;}
function sp(d,a,b){var c=a[b];return c==null?null:String(c);}
function qp(c,a,b){return !(!a[b]);}
function rp(d,a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function tp(b,a){return a.__eventBits||0;}
function up(d,b){var c='',a=b.firstChild;while(a){if(a.nodeType==1){c+=d.nb(a);}else if(a.nodeValue){c+=a.nodeValue;}a=a.nextSibling;}return c;}
function vp(d,b,a){var c=b.style[a];return c==null?null:c;}
function wp(c,b,a){b.removeChild(a);}
function xp(c,b,a,d){b.setAttribute(a,d);}
function Ap(c,a,b,d){a[b]=d;}
function yp(c,a,b,d){a[b]=d;}
function zp(c,a,b,d){a[b]=d;}
function Bp(c,a,b){a.__listener=b;}
function Cp(c,a,b){if(!b){b='';}a.innerHTML=b;}
function Dp(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function Ep(c,b,a,d){b.style[a]=d;}
function Fp(a){return $doc.body.clientHeight;}
function aq(a){return $doc.body.clientWidth;}
function bq(a){return up(this,a);}
function eo(){}
_=eo.prototype=new mG();_.nb=bq;_.tN=nO+'DOMImpl';_.tI=51;function wo(c,b){var a=$doc.createElement('INPUT');a.type='radio';a.name=b;return a;}
function xo(b,a){return a.relatedTarget?a.relatedTarget:null;}
function yo(b,a){return a.target||null;}
function zo(b,a){return a.relatedTarget||null;}
function Ao(b,a){a.preventDefault();}
function Bo(b,a){return a.toString();}
function Co(c,b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a||null;}
function Do(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function Eo(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){sk(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!rl(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)sk(b,a,c);};$wnd.__captureElem=null;}
function Fo(f,e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break;}++c;}b=b.nextSibling;}e.insertBefore(g,a);}
function ap(b,a){$wnd.__captureElem=a;}
function bp(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function uo(){}
_=uo.prototype=new eo();_.tN=nO+'DOMImplStandard';_.tI=52;function lo(c,a,b){if(!a&& !b){return true;}else if(!a|| !b){return false;}return a.isSameNode(b);}
function mo(c,b){var a=b.button;if(a==0){return 1;}else if(a==1){return 4;}return a|| -1;}
function oo(a){Eo(a);no(a);}
function no(d){$wnd.addEventListener('mouseout',function(b){var a=$wnd.__captureElem;if(a&& !b.relatedTarget){if('html'==b.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c);}}},true);$wnd.addEventListener('DOMMouseScroll',$wnd.__dispatchCapturedMouseEvent,true);}
function po(d,c,b){while(b){if(c.isSameNode(b)){return true;}try{b=b.parentNode;}catch(a){return false;}if(b&&b.nodeType!=1){b=null;}}return false;}
function qo(b,a){if(a.isSameNode($wnd.__captureElem)){$wnd.__captureElem=null;}}
function so(c,b,a){bp(c,b,a);ro(c,b,a);}
function ro(c,b,a){if(a&131072){b.addEventListener('DOMMouseScroll',$wnd.__dispatchEvent,false);}}
function to(d,a){var b=a.cloneNode(true);var c=$doc.createElement('DIV');c.appendChild(b);outer=c.innerHTML;b.innerHTML='';return outer;}
function fo(){}
_=fo.prototype=new uo();_.tN=nO+'DOMImplMozilla';_.tI=53;function io(e,a){var d=$doc.defaultView.getComputedStyle(a,null);var b=$doc.getBoxObjectFor(a).x-Math.round(d.getPropertyCSSValue('border-left-width').getFloatValue(CSSPrimitiveValue.CSS_PX));var c=a.parentNode;while(c){if(c.scrollLeft>0){b-=c.scrollLeft;}c=c.parentNode;}return b+$doc.body.scrollLeft+$doc.documentElement.scrollLeft;}
function jo(d,a){var c=$doc.defaultView.getComputedStyle(a,null);var e=$doc.getBoxObjectFor(a).y-Math.round(c.getPropertyCSSValue('border-top-width').getFloatValue(CSSPrimitiveValue.CSS_PX));var b=a.parentNode;while(b){if(b.scrollTop>0){e-=b.scrollTop;}b=b.parentNode;}return e+$doc.body.scrollTop+$doc.documentElement.scrollTop;}
function go(){}
_=go.prototype=new fo();_.tN=nO+'DOMImplMozillaOld';_.tI=54;function kq(a){Bm(a);}
function cq(){}
_=cq.prototype=new mG();_.tN=nO+'HistoryImpl';_.tI=55;function iq(d){$wnd.__gwt_historyToken='';var c=$wnd.location.hash;if(c.length>0)$wnd.__gwt_historyToken=c.substring(1);$wnd.__checkHistory=function(){var b='',a=$wnd.location.hash;if(a.length>0)b=a.substring(1);if(b!=$wnd.__gwt_historyToken){$wnd.__gwt_historyToken=b;kq(b);}$wnd.setTimeout('__checkHistory()',250);};$wnd.__checkHistory();return true;}
function gq(){}
_=gq.prototype=new cq();_.tN=nO+'HistoryImplStandard';_.tI=56;function fq(d,a){if(a==null||a.length==0){var c=$wnd.location.href;var b=c.indexOf('#');if(b!= -1)c=c.substring(0,b);$wnd.location=c+'#';}else{$wnd.location.hash=encodeURIComponent(a);}}
function dq(){}
_=dq.prototype=new gq();_.tN=nO+'HistoryImplMozilla';_.tI=57;function lB(b,a){EB(b.sb(),a,true);}
function nB(a){return cl(a.lb());}
function oB(a){return dl(a.lb());}
function pB(a){return hl(a.q,'offsetHeight');}
function qB(a){return hl(a.q,'offsetWidth');}
function rB(b,a){EB(b.sb(),a,false);}
function sB(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function tB(b,a){if(b.q!==null){sB(b,b.q,a);}b.q=a;}
function uB(b,c,a){if(c>=0){b.fd(c+'px');}if(a>=0){b.bd(a+'px');}}
function vB(b,a){DB(b.sb(),a);}
function wB(b,a){am(b.lb(),a|jl(b.lb()));}
function xB(){return this.q;}
function yB(){return pB(this);}
function zB(){return qB(this);}
function AB(){return this.q;}
function BB(a){return il(a,'className');}
function CB(a){Fl(this.q,'height',a);}
function DB(a,b){Bl(a,'className',b);}
function EB(c,j,a){var b,d,e,f,g,h,i;if(c===null){throw tG(new rG(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}j=kH(j);if(gH(j)==0){throw eF(new dF(),'Style names cannot be empty');}i=BB(c);e=dH(i,j);while(e!=(-1)){if(e==0||FG(i,e-1)==32){f=e+gH(j);g=gH(i);if(f==g||f<g&&FG(i,f)==32){break;}}e=eH(i,j,e+1);}if(a){if(e==(-1)){if(gH(i)>0){i+=' ';}Bl(c,'className',i+j);}}else{if(e!=(-1)){b=kH(jH(i,0,e));d=kH(iH(i,e+gH(j)));if(gH(b)==0){h=d;}else if(gH(d)==0){h=b;}else{h=b+' '+d;}Bl(c,'className',h);}}}
function FB(a,b){a.style.display=b?'':'none';}
function aC(a){FB(this.q,a);}
function bC(a){Fl(this.q,'width',a);}
function cC(){if(this.q===null){return '(null handle)';}return bm(this.q);}
function kB(){}
_=kB.prototype=new mG();_.lb=xB;_.qb=yB;_.rb=zB;_.sb=AB;_.bd=CB;_.dd=aC;_.fd=bC;_.tS=cC;_.tN=oO+'UIObject';_.tI=58;_.q=null;function CC(a){if(!a.zb()){throw iF(new gF(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.yc();}finally{a.bb();Cl(a.lb(),null);a.o=false;}}
function DC(a){if(ri(a.p,26)){qi(a.p,26).Ec(a);}else if(a.p!==null){throw iF(new gF(),"This widget's parent does not implement HasWidgets");}}
function EC(b,a){if(b.zb()){Cl(b.lb(),null);}tB(b,a);if(b.zb()){Cl(a,b);}}
function FC(c,b){var a;a=c.p;if(b===null){if(a!==null&&a.zb()){c.gc();}c.p=null;}else{if(a!==null){throw iF(new gF(),'Cannot set a new parent without first clearing the old parent');}c.p=b;if(b.zb()){c.cc();}}}
function aD(){}
function bD(){}
function cD(){return this.o;}
function dD(){if(this.zb()){throw iF(new gF(),"Should only call onAttach when the widget is detached from the browser's document");}this.o=true;Cl(this.lb(),this);this.ab();this.nc();}
function eD(a){}
function fD(){CC(this);}
function gD(){}
function hD(){}
function iD(a){EC(this,a);}
function lC(){}
_=lC.prototype=new kB();_.ab=aD;_.bb=bD;_.zb=cD;_.cc=dD;_.ec=eD;_.gc=fD;_.nc=gD;_.yc=hD;_.ad=iD;_.tN=oO+'Widget';_.tI=59;_.o=false;_.p=null;function tx(b,a){FC(a,b);}
function vx(b,a){FC(a,null);}
function wx(){var a,b;for(b=this.Ab();b.yb();){a=qi(b.ac(),14);a.cc();}}
function xx(){var a,b;for(b=this.Ab();b.yb();){a=qi(b.ac(),14);a.gc();}}
function yx(){}
function zx(){}
function sx(){}
_=sx.prototype=new lC();_.ab=wx;_.bb=xx;_.nc=yx;_.yc=zx;_.tN=oO+'Panel';_.tI=60;function nr(a){a.f=sC(new mC(),a);}
function or(a){nr(a);return a;}
function pr(c,a,b){DC(a);tC(c.f,a);dk(b,a.lb());tx(c,a);}
function qr(d,b,a){var c;sr(d,a);if(b.p===d){c=ur(d,b);if(c<a){a--;}}return a;}
function rr(b,a){if(a<0||a>=b.f.b){throw lF(new kF());}}
function sr(b,a){if(a<0||a>b.f.b){throw lF(new kF());}}
function vr(b,a){return vC(b.f,a);}
function ur(b,a){return wC(b.f,a);}
function wr(e,b,c,a,d){a=qr(e,b,a);DC(b);xC(e.f,b,a);if(d){pl(c,b.lb(),a);}else{dk(c,b.lb());}tx(e,b);}
function xr(a){return yC(a.f);}
function yr(b,c){var a;if(c.p!==b){return false;}vx(b,c);a=c.lb();tl(ml(a),a);AC(b.f,c);return true;}
function zr(){return xr(this);}
function Ar(a){return yr(this,a);}
function mr(){}
_=mr.prototype=new sx();_.Ab=zr;_.Ec=Ar;_.tN=oO+'ComplexPanel';_.tI=61;function mq(a){or(a);a.ad(gk());Fl(a.lb(),'position','relative');Fl(a.lb(),'overflow','hidden');return a;}
function nq(a,b){pr(a,b,a.lb());}
function oq(b,d,a,c){DC(d);rq(b,d,a,c);nq(b,d);}
function qq(b,c){var a;a=yr(b,c);if(a){sq(c.lb());}return a;}
function rq(c,e,b,d){var a;a=e.lb();if(b==(-1)&&d==(-1)){sq(a);}else{Fl(a,'position','absolute');Fl(a,'left',b+'px');Fl(a,'top',d+'px');}}
function sq(a){Fl(a,'left','');Fl(a,'top','');Fl(a,'position','');}
function tq(a){return qq(this,a);}
function lq(){}
_=lq.prototype=new mr();_.Ec=tq;_.tN=oO+'AbsolutePanel';_.tI=62;function ot(){ot=fO;sD(),uD;}
function mt(b,a){sD(),uD;pt(b,a);return b;}
function nt(b,a){if(b.c===null){b.c=ir(new hr());}sK(b.c,a);}
function pt(b,a){EC(b,a);wB(b,7041);}
function qt(a){switch(Fk(a)){case 1:if(this.c!==null){kr(this.c,this);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function rt(a){pt(this,a);}
function lt(){}
_=lt.prototype=new lC();_.ec=qt;_.ad=rt;_.tN=oO+'FocusWidget';_.tI=63;_.c=null;function wq(){wq=fO;sD(),uD;}
function vq(b,a){sD(),uD;mt(b,a);return b;}
function uq(){}
_=uq.prototype=new lt();_.tN=oO+'ButtonBase';_.tI=64;function yq(a){or(a);a.e=ok();a.d=lk();dk(a.e,a.d);a.ad(a.e);return a;}
function Aq(c,d,a){var b;b=ml(d.lb());Bl(b,'height',a);}
function Bq(c,b,a){Bl(b,'align',a.a);}
function Cq(c,b,a){Fl(b,'verticalAlign',a.a);}
function Dq(b,c,d){var a;a=ml(c.lb());Bl(a,'width',d);}
function xq(){}
_=xq.prototype=new mr();_.tN=oO+'CellPanel';_.tI=65;_.d=null;_.e=null;function ar(){ar=fO;sD(),uD;}
function Fq(b,a){var c;sD(),uD;vq(b,kk());b.a=a;b.b=jk();am(b.a,jl(b.lb()));am(b.lb(),0);dk(b.lb(),b.a);dk(b.lb(),b.b);c='check'+ ++gr;Bl(b.a,'id',c);Bl(b.b,'htmlFor',c);return b;}
function br(b){var a;a=b.zb()?'checked':'defaultChecked';return gl(b.a,a);}
function cr(b,a){zl(b.a,'checked',a);zl(b.a,'defaultChecked',a);}
function dr(b,a){El(b.b,a);}
function er(){Cl(this.a,this);}
function fr(){Cl(this.a,null);cr(this,br(this));}
function Eq(){}
_=Eq.prototype=new uq();_.nc=er;_.yc=fr;_.tN=oO+'CheckBox';_.tI=66;_.a=null;_.b=null;var gr=0;function ir(a){qK(a);return a;}
function kr(d,c){var a,b;for(a=AI(d);pI(a);){b=qi(qI(a),22);b.fc(c);}}
function hr(){}
_=hr.prototype=new oK();_.tN=oO+'ClickListenerCollection';_.tI=67;function Dr(a,b){if(a.d!==null){throw iF(new gF(),'Composite.initWidget() may only be called once.');}DC(b);a.ad(b.lb());a.d=b;FC(b,a);}
function Er(){if(this.d===null){throw iF(new gF(),'initWidget() was never called in '+jh(this));}return this.q;}
function Fr(){if(this.d!==null){return this.d.zb();}return false;}
function as(){this.d.cc();this.nc();}
function bs(){try{this.yc();}finally{this.d.gc();}}
function Br(){}
_=Br.prototype=new lC();_.lb=Er;_.zb=Fr;_.cc=as;_.gc=bs;_.tN=oO+'Composite';_.tI=68;_.d=null;function ds(a){or(a);a.ad(gk());return a;}
function fs(b,c){var a;a=c.lb();Fl(a,'width','100%');Fl(a,'height','100%');c.dd(false);}
function gs(b,c,a){wr(b,c,b.lb(),a,true);fs(b,c);}
function hs(b,c){var a;a=yr(b,c);if(a){is(b,c);if(b.b===c){b.b=null;}}return a;}
function is(a,b){Fl(b.lb(),'width','');Fl(b.lb(),'height','');b.dd(true);}
function js(b,a){rr(b,a);if(b.b!==null){b.b.dd(false);}b.b=vr(b,a);b.b.dd(true);}
function ks(a){return hs(this,a);}
function cs(){}
_=cs.prototype=new mr();_.Ec=ks;_.tN=oO+'DeckPanel';_.tI=69;_.b=null;function nz(a){oz(a,gk());return a;}
function oz(b,a){b.ad(a);return b;}
function pz(a,b){if(a.n!==null){throw iF(new gF(),'SimplePanel can only contain one child widget');}a.ed(b);}
function rz(a,b){if(b===a.n){return;}if(b!==null){DC(b);}if(a.n!==null){a.Ec(a.n);}a.n=b;if(b!==null){dk(a.hb(),a.n.lb());tx(a,b);}}
function sz(){return this.lb();}
function tz(){return jz(new hz(),this);}
function uz(a){if(this.n!==a){return false;}vx(this,a);tl(this.hb(),a.lb());this.n=null;return true;}
function vz(a){rz(this,a);}
function gz(){}
_=gz.prototype=new sx();_.hb=sz;_.Ab=tz;_.Ec=uz;_.ed=vz;_.tN=oO+'SimplePanel';_.tI=70;_.n=null;function ay(){ay=fO;py=BD(new wD());}
function Bx(a){ay();oz(a,DD(py));gy(a,0,0);return a;}
function Cx(b,a){ay();Bx(b);b.g=a;return b;}
function Dx(c,a,b){ay();Cx(c,a);c.k=b;return c;}
function Ex(b,a){if(a.blur){a.blur();}}
function Fx(c){var a,b,d;a=c.l;if(!a){hy(c,false);ky(c);}b=ui((An()-cy(c))/2);d=ui((zn()-by(c))/2);gy(c,Bn()+b,Cn()+d);if(!a){hy(c,true);}}
function by(a){return pB(a);}
function cy(a){return qB(a);}
function dy(b,a){if(!b.l){return;}b.l=false;qq(cz(),b);b.lb();}
function ey(a){var b;b=a.n;if(b!==null){if(a.h!==null){b.bd(a.h);}if(a.i!==null){b.fd(a.i);}}}
function fy(e,b){var a,c,d,f;d=Dk(b);c=ql(e.lb(),d);f=Fk(b);switch(f){case 128:{a=(si(Ak(b)),Cw(b),true);return a&&(c|| !e.k);}case 512:{a=(si(Ak(b)),Cw(b),true);return a&&(c|| !e.k);}case 256:{a=(si(Ak(b)),Cw(b),true);return a&&(c|| !e.k);}case 4:case 8:case 64:case 1:case 2:{if((bk(),vl)!==null){return true;}if(!c&&e.g&&f==4){dy(e,true);return true;}break;}case 2048:{if(e.k&& !c&&d!==null){Ex(e,d);return false;}}}return !e.k||c;}
function gy(c,b,d){var a;if(b<0){b=0;}if(d<0){d=0;}c.j=b;c.m=d;a=c.lb();Fl(a,'left',b+'px');Fl(a,'top',d+'px');}
function hy(a,b){Fl(a.lb(),'visibility',b?'visible':'hidden');a.lb();}
function iy(a,b){rz(a,b);ey(a);}
function jy(a,b){a.i=b;ey(a);if(gH(b)==0){a.i=null;}}
function ky(a){if(a.l){return;}a.l=true;ck(a);Fl(a.lb(),'position','absolute');if(a.m!=(-1)){gy(a,a.j,a.m);}nq(cz(),a);a.lb();}
function ly(){return ED(py,this.lb());}
function my(){return by(this);}
function ny(){return cy(this);}
function oy(){return ED(py,this.lb());}
function qy(){ul(this);CC(this);}
function ry(a){return fy(this,a);}
function sy(a){this.h=a;ey(this);if(gH(a)==0){this.h=null;}}
function ty(a){hy(this,a);}
function uy(a){iy(this,a);}
function vy(a){jy(this,a);}
function Ax(){}
_=Ax.prototype=new gz();_.hb=ly;_.qb=my;_.rb=ny;_.sb=oy;_.gc=qy;_.lc=ry;_.bd=sy;_.dd=ty;_.ed=uy;_.fd=vy;_.tN=oO+'PopupPanel';_.tI=71;_.g=false;_.h=null;_.i=null;_.j=(-1);_.k=false;_.l=false;_.m=(-1);var py;function ps(){ps=fO;ay();}
function ms(a){a.a=nv(new st());a.f=Es(new As());}
function ns(b,a){ps();os(b,a,true);return b;}
function os(c,a,b){ps();Dx(c,a,b);ms(c);jv(c.f,0,0,c.a);c.f.bd('100%');ev(c.f,0);gv(c.f,0);hv(c.f,0);cu(c.f.b,1,0,'100%');fu(c.f.b,1,0,'100%');bu(c.f.b,1,0,(yv(),zv),(aw(),cw));iy(c,c.f);vB(c,'gwt-DialogBox');vB(c.a,'Caption');bx(c.a,c);return c;}
function qs(b,a){rv(b.a,a);}
function rs(a){if(Fk(a)==4){if(ql(this.a.lb(),Dk(a))){al(a);}}return fy(this,a);}
function ss(a,b,c){this.e=true;xl(this.a.lb());this.c=b;this.d=c;}
function ts(a){}
function us(a){}
function vs(c,d,e){var a,b;if(this.e){a=d+nB(this);b=e+oB(this);gy(this,a-this.c,b-this.d);}}
function ws(a,b,c){this.e=false;sl(this.a.lb());}
function xs(a){if(this.b!==a){return false;}dv(this.f,a);return true;}
function ys(a){if(this.b!==null){dv(this.f,this.b);}if(a!==null){jv(this.f,1,0,a);}this.b=a;}
function zs(a){jy(this,a);this.f.fd('100%');}
function ls(){}
_=ls.prototype=new Ax();_.lc=rs;_.oc=ss;_.pc=ts;_.qc=us;_.rc=vs;_.sc=ws;_.Ec=xs;_.ed=ys;_.fd=zs;_.tN=oO+'DialogBox';_.tI=72;_.b=null;_.c=0;_.d=0;_.e=false;function zu(a){a.e=pu(new ku());}
function Au(a){zu(a);a.d=ok();a.a=lk();dk(a.d,a.a);a.ad(a.d);wB(a,1);return a;}
function Bu(c,a){var b;b=bt(c);if(a>=b||a<0){throw mF(new kF(),'Row index: '+a+', Row size: '+b);}}
function Cu(e,c,b,a){var d;d=au(e.b,c,b);cv(e,d,a);return d;}
function Eu(c,b,a){return b.rows[a].cells.length;}
function Fu(a){return av(a,a.a);}
function av(b,a){return a.rows.length;}
function bv(b,a){var c;if(a!=bt(b)){Bu(b,a);}c=nk();pl(b.a,c,a);return a;}
function cv(d,c,a){var b,e;b=kl(c);e=null;if(b!==null){e=ru(d.e,b);}if(e!==null){dv(d,e);return true;}else{if(a){Dl(c,'');}return false;}}
function dv(b,c){var a;if(c.p!==b){return false;}vx(b,c);a=c.lb();tl(ml(a),a);uu(b.e,a);return true;}
function ev(a,b){Bl(a.d,'border',''+b);}
function fv(b,a){b.b=a;}
function gv(b,a){Al(b.d,'cellPadding',a);}
function hv(b,a){Al(b.d,'cellSpacing',a);}
function iv(b,a){b.c=a;ju(b.c);}
function jv(d,b,a,e){var c;dt(d,b,a);if(e!==null){DC(e);c=Cu(d,b,a,true);su(d.e,e);dk(c,e.lb());tx(d,e);}}
function kv(){return vu(this.e);}
function lv(a){switch(Fk(a)){case 1:{break;}default:}}
function mv(a){return dv(this,a);}
function tt(){}
_=tt.prototype=new sx();_.Ab=kv;_.ec=lv;_.Ec=mv;_.tN=oO+'HTMLTable';_.tI=73;_.a=null;_.b=null;_.c=null;_.d=null;function Es(a){Au(a);fv(a,Cs(new Bs(),a));iv(a,hu(new gu(),a));return a;}
function at(b,a){Bu(b,a);return Eu(b,b.a,a);}
function bt(a){return Fu(a);}
function ct(b,a){return bv(b,a);}
function dt(e,d,b){var a,c;et(e,d);if(b<0){throw mF(new kF(),'Cannot create a column with a negative index: '+b);}a=at(e,d);c=b+1-a;if(c>0){ft(e.a,d,c);}}
function et(d,b){var a,c;if(b<0){throw mF(new kF(),'Cannot create a row with a negative index: '+b);}c=bt(d);for(a=c;a<=b;a++){ct(d,a);}}
function ft(f,d,c){var e=f.rows[d];for(var b=0;b<c;b++){var a=$doc.createElement('td');e.appendChild(a);}}
function As(){}
_=As.prototype=new tt();_.tN=oO+'FlexTable';_.tI=74;function Dt(b,a){b.a=a;return b;}
function Ft(e,d,c,a){var b=d.rows[c].cells[a];return b==null?null:b;}
function au(c,b,a){return Ft(c,c.a.a,b,a);}
function bu(d,c,a,b,e){du(d,c,a,b);eu(d,c,a,e);}
function cu(e,d,a,c){var b;dt(e.a,d,a);b=Ft(e,e.a.a,d,a);Bl(b,'height',c);}
function du(e,d,b,a){var c;dt(e.a,d,b);c=Ft(e,e.a.a,d,b);Bl(c,'align',a.a);}
function eu(d,c,b,a){dt(d.a,c,b);Fl(Ft(d,d.a.a,c,b),'verticalAlign',a.a);}
function fu(c,b,a,d){dt(c.a,b,a);Bl(Ft(c,c.a.a,b,a),'width',d);}
function Ct(){}
_=Ct.prototype=new mG();_.tN=oO+'HTMLTable$CellFormatter';_.tI=75;function Cs(b,a){Dt(b,a);return b;}
function Bs(){}
_=Bs.prototype=new Ct();_.tN=oO+'FlexTable$FlexCellFormatter';_.tI=76;function ht(a){or(a);a.ad(gk());return a;}
function it(a,b){pr(a,b,a.lb());}
function kt(b,c,a){wr(b,c,b.lb(),a,true);}
function gt(){}
_=gt.prototype=new mr();_.tN=oO+'FlowPanel';_.tI=77;function Ew(a){a.ad(gk());wB(a,131197);vB(a,'gwt-Label');return a;}
function Fw(b,a){Ew(b);fx(b,a);return b;}
function ax(b,a){if(b.b===null){b.b=ir(new hr());}sK(b.b,a);}
function bx(b,a){if(b.c===null){b.c=jx(new ix());}sK(b.c,a);}
function dx(a){return ll(a.lb());}
function ex(b,a){switch(Fk(a)){case 1:if(b.b!==null){kr(b.b,b);}break;case 4:case 8:case 64:case 16:case 32:if(b.c!==null){nx(b.c,b,a);}break;case 131072:break;}}
function fx(b,a){El(b.lb(),a);}
function gx(a,b){Fl(a.lb(),'whiteSpace',b?'normal':'nowrap');}
function hx(a){ex(this,a);}
function Dw(){}
_=Dw.prototype=new lC();_.ec=hx;_.tN=oO+'Label';_.tI=78;_.b=null;_.c=null;function nv(a){Ew(a);a.ad(gk());wB(a,125);vB(a,'gwt-HTML');return a;}
function ov(b,a){nv(b);rv(b,a);return b;}
function pv(b,a,c){ov(b,a);gx(b,c);return b;}
function rv(b,a){Dl(b.lb(),a);}
function st(){}
_=st.prototype=new Dw();_.tN=oO+'HTML';_.tI=79;function vt(a){{yt(a);}}
function wt(b,a){b.b=a;vt(b);return b;}
function yt(a){while(++a.a<a.b.b.b){if(xK(a.b.b,a.a)!==null){return;}}}
function zt(a){return a.a<a.b.b.b;}
function At(){return zt(this);}
function Bt(){var a;if(!zt(this)){throw bO(new aO());}a=xK(this.b.b,this.a);yt(this);return a;}
function ut(){}
_=ut.prototype=new mG();_.yb=At;_.ac=Bt;_.tN=oO+'HTMLTable$1';_.tI=80;_.a=(-1);function hu(b,a){b.b=a;return b;}
function ju(a){if(a.a===null){a.a=hk('colgroup');pl(a.b.d,a.a,0);dk(a.a,hk('col'));}}
function gu(){}
_=gu.prototype=new mG();_.tN=oO+'HTMLTable$ColumnFormatter';_.tI=81;_.a=null;function ou(a){a.b=qK(new oK());}
function pu(a){ou(a);return a;}
function ru(c,a){var b;b=xu(a);if(b<0){return null;}return qi(xK(c.b,b),14);}
function su(b,c){var a;if(b.a===null){a=b.b.b;sK(b.b,c);}else{a=b.a.a;DK(b.b,a,c);b.a=b.a.b;}yu(c.lb(),a);}
function tu(c,a,b){wu(a);DK(c.b,b,null);c.a=mu(new lu(),b,c.a);}
function uu(c,a){var b;b=xu(a);tu(c,a,b);}
function vu(a){return wt(new ut(),a);}
function wu(a){a['__widgetID']=null;}
function xu(a){var b=a['__widgetID'];return b==null?-1:b;}
function yu(a,b){a['__widgetID']=b;}
function ku(){}
_=ku.prototype=new mG();_.tN=oO+'HTMLTable$WidgetMapper';_.tI=82;_.a=null;function mu(c,a,b){c.a=a;c.b=b;return c;}
function lu(){}
_=lu.prototype=new mG();_.tN=oO+'HTMLTable$WidgetMapper$FreeNode';_.tI=83;_.a=0;_.b=null;function yv(){yv=fO;zv=wv(new vv(),'center');Av=wv(new vv(),'left');wv(new vv(),'right');}
var zv,Av;function wv(b,a){b.a=a;return b;}
function vv(){}
_=vv.prototype=new mG();_.tN=oO+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.tI=84;_.a=null;function aw(){aw=fO;bw=Ev(new Dv(),'bottom');cw=Ev(new Dv(),'middle');dw=Ev(new Dv(),'top');}
var bw,cw,dw;function Ev(a,b){a.a=b;return a;}
function Dv(){}
_=Dv.prototype=new mG();_.tN=oO+'HasVerticalAlignment$VerticalAlignmentConstant';_.tI=85;_.a=null;function hw(a){a.a=(yv(),Av);a.c=(aw(),dw);}
function iw(a){yq(a);hw(a);a.b=nk();dk(a.d,a.b);Bl(a.e,'cellSpacing','0');Bl(a.e,'cellPadding','0');return a;}
function jw(b,c){var a;a=lw(b);dk(b.b,a);pr(b,c,a);}
function lw(b){var a;a=mk();Bq(b,a,b.a);Cq(b,a,b.c);return a;}
function mw(c,d,a){var b;sr(c,a);b=lw(c);pl(c.b,b,a);wr(c,d,b,a,false);}
function nw(c,d){var a,b;b=ml(d.lb());a=yr(c,d);if(a){tl(c.b,b);}return a;}
function ow(b,a){b.c=a;}
function pw(a){return nw(this,a);}
function gw(){}
_=gw.prototype=new xq();_.Ec=pw;_.tN=oO+'HorizontalPanel';_.tI=86;_.b=null;function rw(a){a.ad(gk());dk(a.lb(),a.a=fk());wB(a,1);vB(a,'gwt-Hyperlink');return a;}
function sw(c,b,a){rw(c);xw(c,b);ww(c,a);return c;}
function tw(b,a){if(b.b===null){b.b=ir(new hr());}sK(b.b,a);}
function vw(a){return ll(a.a);}
function ww(b,a){b.c=a;Bl(b.a,'href','#'+a);}
function xw(b,a){El(b.a,a);}
function yw(a){if(Fk(a)==1){if(this.b!==null){kr(this.b,this);}Am(this.c);al(a);}}
function qw(){}
_=qw.prototype=new lC();_.ec=yw;_.tN=oO+'Hyperlink';_.tI=87;_.a=null;_.b=null;_.c=null;function Cw(a){return (Ck(a)?1:0)|(Bk(a)?8:0)|(yk(a)?2:0)|(uk(a)?4:0);}
function jx(a){qK(a);return a;}
function lx(d,c,e,f){var a,b;for(a=AI(d);pI(a);){b=qi(qI(a),23);b.oc(c,e,f);}}
function mx(d,c){var a,b;for(a=AI(d);pI(a);){b=qi(qI(a),23);b.pc(c);}}
function nx(e,c,a){var b,d,f,g,h;d=c.lb();g=wk(a)-cl(d)+hl(d,'scrollLeft')+Bn();h=xk(a)-dl(d)+hl(d,'scrollTop')+Cn();switch(Fk(a)){case 4:lx(e,c,g,h);break;case 8:qx(e,c,g,h);break;case 64:px(e,c,g,h);break;case 16:b=zk(a);if(!ql(d,b)){mx(e,c);}break;case 32:f=Ek(a);if(!ql(d,f)){ox(e,c);}break;}}
function ox(d,c){var a,b;for(a=AI(d);pI(a);){b=qi(qI(a),23);b.qc(c);}}
function px(d,c,e,f){var a,b;for(a=AI(d);pI(a);){b=qi(qI(a),23);b.rc(c,e,f);}}
function qx(d,c,e,f){var a,b;for(a=AI(d);pI(a);){b=qi(qI(a),23);b.sc(c,e,f);}}
function ix(){}
_=ix.prototype=new oK();_.tN=oO+'MouseListenerCollection';_.tI=88;function zy(){zy=fO;sD(),uD;}
function xy(b,a){sD(),uD;Fq(b,ik(a));vB(b,'gwt-RadioButton');return b;}
function yy(c,b,a){sD(),uD;xy(c,b);dr(c,a);return c;}
function wy(){}
_=wy.prototype=new Eq();_.tN=oO+'RadioButton';_.tI=89;function az(){az=fO;fz=xM(new BL());}
function Fy(b,a){az();mq(b);if(a===null){a=bz();}b.ad(a);b.cc();return b;}
function cz(){az();return dz(null);}
function dz(c){az();var a,b;b=qi(DM(fz,c),24);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=fl(c))){return null;}}if(fz.c==0){ez();}EM(fz,c,b=Fy(new Ay(),a));return b;}
function bz(){az();return $doc.body;}
function ez(){az();rn(new By());}
function Ay(){}
_=Ay.prototype=new lq();_.tN=oO+'RootPanel';_.tI=90;var fz;function Dy(){var a,b;for(b=uJ(cK((az(),fz)));BJ(b);){a=qi(CJ(b),24);if(a.zb()){a.gc();}}}
function Ey(){return null;}
function By(){}
_=By.prototype=new mG();_.zc=Dy;_.Ac=Ey;_.tN=oO+'RootPanel$1';_.tI=91;function iz(a){a.a=a.b.n!==null;}
function jz(b,a){b.b=a;iz(b);return b;}
function lz(){return this.a;}
function mz(){if(!this.a||this.b.n===null){throw bO(new aO());}this.a=false;return this.b.n;}
function hz(){}
_=hz.prototype=new mG();_.yb=lz;_.ac=mz;_.tN=oO+'SimplePanel$1';_.tI=92;function Fz(a){a.a=iw(new gw());}
function aA(c){var a,b;Fz(c);Dr(c,c.a);wB(c,1);vB(c,'gwt-TabBar');ow(c.a,(aw(),bw));a=pv(new st(),'&nbsp;',true);b=pv(new st(),'&nbsp;',true);vB(a,'gwt-TabBarFirst');vB(b,'gwt-TabBarRest');a.bd('100%');b.bd('100%');jw(c.a,a);jw(c.a,b);a.bd('100%');Aq(c.a,a,'100%');Dq(c.a,b,'100%');return c;}
function bA(b,a){if(b.c===null){b.c=mA(new lA());}sK(b.c,a);}
function cA(b,a){if(a<0||a>fA(b)){throw lF(new kF());}}
function dA(b,a){if(a<(-1)||a>=fA(b)){throw lF(new kF());}}
function fA(a){return a.a.f.b-2;}
function gA(e,d,a,b){var c;cA(e,b);if(a){c=ov(new st(),d);}else{c=Fw(new Dw(),d);}gx(c,false);ax(c,e);vB(c,'gwt-TabBarItem');mw(e.a,c,b+1);}
function hA(b,a){var c;dA(b,a);c=vr(b.a,a+1);if(c===b.b){b.b=null;}nw(b.a,c);}
function iA(b,a){dA(b,a);if(b.c!==null){if(!oA(b.c,b,a)){return false;}}jA(b,b.b,false);if(a==(-1)){b.b=null;return true;}b.b=vr(b.a,a+1);jA(b,b.b,true);if(b.c!==null){pA(b.c,b,a);}return true;}
function jA(c,a,b){if(a!==null){if(b){lB(a,'gwt-TabBarItem-selected');}else{rB(a,'gwt-TabBarItem-selected');}}}
function kA(b){var a;for(a=1;a<this.a.f.b-1;++a){if(vr(this.a,a)===b){iA(this,a-1);return;}}}
function Ez(){}
_=Ez.prototype=new Br();_.fc=kA;_.tN=oO+'TabBar';_.tI=93;_.b=null;_.c=null;function mA(a){qK(a);return a;}
function oA(e,c,d){var a,b;for(a=AI(e);pI(a);){b=qi(qI(a),25);if(!b.dc(c,d)){return false;}}return true;}
function pA(e,c,d){var a,b;for(a=AI(e);pI(a);){b=qi(qI(a),25);b.xc(c,d);}}
function lA(){}
_=lA.prototype=new oK();_.tN=oO+'TabListenerCollection';_.tI=94;function DA(a){a.b=zA(new yA());a.a=tA(new sA(),a.b);}
function EA(b){var a;DA(b);a=fC(new dC());gC(a,b.b);gC(a,b.a);Aq(a,b.a,'100%');b.b.fd('100%');bA(b.b,b);Dr(b,a);vB(b,'gwt-TabPanel');vB(b.a,'gwt-TabPanelBottom');return b;}
function aB(b,c,a){dB(b,c,a,b.a.f.b);}
function FA(b,a){if(b.c===null){b.c=mA(new lA());}sK(b.c,a);}
function cB(b,a){return vr(b.a,a);}
function eB(d,e,c,a,b){vA(d.a,e,c,a,b);}
function dB(c,d,b,a){eB(c,d,b,false,a);}
function fB(b,a){iA(b.b,a);}
function gB(){return xr(this.a);}
function hB(a,b){if(this.c!==null){return oA(this.c,this,b);}return true;}
function iB(a,b){js(this.a,b);if(this.c!==null){pA(this.c,this,b);}}
function jB(a){return wA(this.a,a);}
function rA(){}
_=rA.prototype=new Br();_.Ab=gB;_.dc=hB;_.xc=iB;_.Ec=jB;_.tN=oO+'TabPanel';_.tI=95;_.c=null;function tA(b,a){ds(b);b.a=a;return b;}
function vA(e,f,d,a,b){var c;c=ur(e,f);if(c!=(-1)){wA(e,f);if(c<b){b--;}}BA(e.a,d,a,b);gs(e,f,b);}
function wA(b,c){var a;a=ur(b,c);if(a!=(-1)){CA(b.a,a);return hs(b,c);}return false;}
function xA(a){return wA(this,a);}
function sA(){}
_=sA.prototype=new cs();_.Ec=xA;_.tN=oO+'TabPanel$TabbedDeckPanel';_.tI=96;_.a=null;function zA(a){aA(a);return a;}
function BA(d,c,a,b){gA(d,c,a,b);}
function CA(b,a){hA(b,a);}
function yA(){}
_=yA.prototype=new Ez();_.tN=oO+'TabPanel$UnmodifiableTabBar';_.tI=97;function eC(a){a.a=(yv(),Av);a.b=(aw(),dw);}
function fC(a){yq(a);eC(a);Bl(a.e,'cellSpacing','0');Bl(a.e,'cellPadding','0');return a;}
function gC(b,d){var a,c;c=nk();a=iC(b);dk(c,a);dk(b.d,c);pr(b,d,a);}
function iC(b){var a;a=mk();Bq(b,a,b.a);Cq(b,a,b.b);return a;}
function jC(c,e,a){var b,d;sr(c,a);d=nk();b=iC(c);dk(d,b);pl(c.d,d,a);wr(c,e,b,a,false);}
function kC(c){var a,b;b=ml(c.lb());a=yr(this,c);if(a){tl(this.d,ml(b));}return a;}
function dC(){}
_=dC.prototype=new xq();_.Ec=kC;_.tN=oO+'VerticalPanel';_.tI=98;function sC(b,a){b.a=ki('[Lcom.google.gwt.user.client.ui.Widget;',[176],[14],[4],null);return b;}
function tC(a,b){xC(a,b,a.b);}
function vC(b,a){if(a<0||a>=b.b){throw lF(new kF());}return b.a[a];}
function wC(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function xC(d,e,a){var b,c;if(a<0||a>d.b){throw lF(new kF());}if(d.b==d.a.a){c=ki('[Lcom.google.gwt.user.client.ui.Widget;',[176],[14],[d.a.a*2],null);for(b=0;b<d.a.a;++b){mi(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){mi(d.a,b,d.a[b-1]);}mi(d.a,a,e);}
function yC(a){return oC(new nC(),a);}
function zC(c,b){var a;if(b<0||b>=c.b){throw lF(new kF());}--c.b;for(a=b;a<c.b;++a){mi(c.a,a,c.a[a+1]);}mi(c.a,c.b,null);}
function AC(b,c){var a;a=wC(b,c);if(a==(-1)){throw bO(new aO());}zC(b,a);}
function mC(){}
_=mC.prototype=new mG();_.tN=oO+'WidgetCollection';_.tI=99;_.a=null;_.b=0;function oC(b,a){b.b=a;return b;}
function qC(){return this.a<this.b.b-1;}
function rC(){if(this.a>=this.b.b){throw bO(new aO());}return this.b.a[++this.a];}
function nC(){}
_=nC.prototype=new mG();_.yb=qC;_.ac=rC;_.tN=oO+'WidgetCollection$WidgetIterator';_.tI=100;_.a=(-1);function sD(){sD=fO;tD=mD(new kD());uD=tD!==null?rD(new jD()):tD;}
function rD(a){sD();return a;}
function jD(){}
_=jD.prototype=new mG();_.tN=pO+'FocusImpl';_.tI=101;var tD,uD;function nD(){nD=fO;sD();}
function lD(a){oD(a);pD(a);qD(a);}
function mD(a){nD();rD(a);lD(a);return a;}
function oD(b){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a);}};}
function pD(b){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a);}};}
function qD(a){return function(){this.firstChild.focus();};}
function kD(){}
_=kD.prototype=new jD();_.tN=pO+'FocusImplOld';_.tI=102;function vD(){}
_=vD.prototype=new mG();_.tN=pO+'PopupImpl';_.tI=103;function CD(){CD=fO;FD=aE();}
function BD(a){CD();return a;}
function DD(b){var a;a=gk();if(FD){Dl(a,'<div><\/div>');gm(yD(new xD(),b,a));}return a;}
function ED(b,a){return FD?kl(a):a;}
function aE(){CD();if(navigator.userAgent.indexOf('Macintosh')!= -1){return true;}return false;}
function wD(){}
_=wD.prototype=new vD();_.tN=pO+'PopupImplMozilla';_.tI=104;var FD;function yD(b,a,c){b.a=c;return b;}
function AD(){Fl(this.a,'overflow','auto');}
function xD(){}
_=xD.prototype=new mG();_.db=AD;_.tN=pO+'PopupImplMozilla$1';_.tI=105;function fE(){}
_=fE.prototype=new mG();_.tN=qO+'OutputStream';_.tI=106;function dE(){}
_=dE.prototype=new fE();_.tN=qO+'FilterOutputStream';_.tI=107;function hE(){}
_=hE.prototype=new dE();_.tN=qO+'PrintStream';_.tI=108;function lE(){lE=fO;uG();}
function kE(a){lE();sG(a);return a;}
function jE(){}
_=jE.prototype=new rG();_.tN=rO+'ArrayStoreException';_.tI=109;function oE(){oE=fO;pE=nE(new mE(),false);qE=nE(new mE(),true);}
function nE(a,b){oE();a.a=b;return a;}
function rE(a){return ri(a,30)&&qi(a,30).a==this.a;}
function sE(){var a,b;b=1231;a=1237;return this.a?1231:1237;}
function tE(){return this.a?'true':'false';}
function uE(a){oE();return a?qE:pE;}
function mE(){}
_=mE.prototype=new mG();_.eQ=rE;_.hC=sE;_.tS=tE;_.tN=rO+'Boolean';_.tI=110;_.a=false;var pE,qE;function yE(a,b){if(b<2||b>36){return (-1);}if(a>=48&&a<48+AF(b,10)){return a-48;}if(a>=97&&a<b+97-10){return a-97+10;}if(a>=65&&a<b+65-10){return a-65+10;}return (-1);}
function CE(){CE=fO;uG();}
function AE(a){CE();sG(a);return a;}
function BE(b,a){CE();tG(b,a);return b;}
function zE(){}
_=zE.prototype=new rG();_.tN=rO+'ClassCastException';_.tI=111;function fF(){fF=fO;uG();}
function eF(b,a){fF();tG(b,a);return b;}
function dF(){}
_=dF.prototype=new rG();_.tN=rO+'IllegalArgumentException';_.tI=112;function jF(){jF=fO;uG();}
function hF(a){jF();sG(a);return a;}
function iF(b,a){jF();tG(b,a);return b;}
function gF(){}
_=gF.prototype=new rG();_.tN=rO+'IllegalStateException';_.tI=113;function nF(){nF=fO;uG();}
function lF(a){nF();sG(a);return a;}
function mF(b,a){nF();tG(b,a);return b;}
function kF(){}
_=kF.prototype=new rG();_.tN=rO+'IndexOutOfBoundsException';_.tI=114;function gG(){gG=fO;{lG();}}
function hG(a){gG();return isNaN(a);}
function iG(e,d,c,h){gG();var a,b,f,g;if(e===null){throw eG(new dG(),'Unable to parse null');}b=gH(e);f=b>0&&FG(e,0)==45?1:0;for(a=f;a<b;a++){if(yE(FG(e,a),d)==(-1)){throw eG(new dG(),'Could not parse '+e+' in radix '+d);}}g=jG(e,d);if(hG(g)){throw eG(new dG(),'Unable to parse '+e);}else if(g<c||g>h){throw eG(new dG(),'The string '+e+' exceeds the range for the requested data type');}return g;}
function jG(b,a){gG();return parseInt(b,a);}
function lG(){gG();kG=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var kG=null;function pF(){pF=fO;gG();}
function sF(a){pF();return tF(a,10);}
function tF(b,a){pF();return ti(iG(b,a,(-2147483648),2147483647));}
function uF(a){pF();return sH(a);}
var qF=2147483647,rF=(-2147483648);function xF(a){return a<0?-a:a;}
function yF(a){return a<0?-a:a;}
function zF(a,b){return a>b?a:b;}
function AF(a,b){return a<b?a:b;}
function BF(a){return Math.sqrt(a);}
function EF(){EF=fO;uG();}
function DF(a){EF();sG(a);return a;}
function CF(){}
_=CF.prototype=new rG();_.tN=rO+'NegativeArraySizeException';_.tI=115;function bG(){bG=fO;uG();}
function aG(b,a){bG();tG(b,a);return b;}
function FF(){}
_=FF.prototype=new rG();_.tN=rO+'NullPointerException';_.tI=116;function fG(){fG=fO;fF();}
function eG(b,a){fG();eF(b,a);return b;}
function dG(){}
_=dG.prototype=new dF();_.tN=rO+'NumberFormatException';_.tI=117;function FG(b,a){return b.charCodeAt(a);}
function bH(f,c){var a,b,d,e,g,h;h=gH(f);e=gH(c);b=AF(h,e);for(a=0;a<b;a++){g=FG(f,a);d=FG(c,a);if(g!=d){return g-d;}}return h-e;}
function cH(b,a){if(!ri(a,1))return false;return lH(b,a);}
function dH(b,a){return b.indexOf(a);}
function eH(c,b,a){return c.indexOf(b,a);}
function fH(b,a){return b.lastIndexOf(String.fromCharCode(a));}
function gH(a){return a.length;}
function hH(c,a,b){b=mH(b);return c.replace(RegExp(a,'g'),b);}
function iH(b,a){return b.substr(a,b.length-a);}
function jH(c,a,b){return c.substr(a,b-a);}
function kH(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function lH(a,b){return String(a)==b;}
function mH(b){var a;a=0;while(0<=(a=eH(b,'\\',a))){if(FG(b,a+1)==36){b=jH(b,0,a)+'$'+iH(b,++a);}else{b=jH(b,0,a)+iH(b,++a);}}return b;}
function nH(a){if(ri(a,1)){return bH(this,qi(a,1));}else{throw BE(new zE(),'Cannot compare '+a+" with String '"+this+"'");}}
function oH(a){return cH(this,a);}
function qH(){var a=pH;if(!a){a=pH={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function rH(){return this;}
function sH(a){return ''+a;}
function tH(a){return a!==null?a.tS():'null';}
_=String.prototype;_.v=nH;_.eQ=oH;_.hC=qH;_.tS=rH;_.tN=rO+'String';_.tI=2;var pH=null;function xG(a){zG(a);return a;}
function yG(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function zG(a){AG(a,'');}
function AG(b,a){b.js=[a];b.length=a.length;}
function CG(a){a.bc();return a.js[0];}
function DG(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function EG(){return CG(this);}
function wG(){}
_=wG.prototype=new mG();_.bc=DG;_.tS=EG;_.tN=rO+'StringBuffer';_.tI=118;function vH(){vH=fO;xH=new hE();}
function wH(){vH();return new Date().getTime();}
function yH(a){vH();return ph(a);}
var xH;function eI(){eI=fO;uG();}
function cI(a){eI();sG(a);return a;}
function dI(b,a){eI();tG(b,a);return b;}
function bI(){}
_=bI.prototype=new rG();_.tN=rO+'UnsupportedOperationException';_.tI=119;function nI(b,a){b.c=a;return b;}
function pI(a){return a.a<a.c.gd();}
function qI(a){if(!pI(a)){throw bO(new aO());}return a.c.wb(a.b=a.a++);}
function rI(a){if(a.b<0){throw hF(new gF());}a.c.Dc(a.b);a.a=a.b;a.b=(-1);}
function sI(){return pI(this);}
function tI(){return qI(this);}
function uI(){rI(this);}
function mI(){}
_=mI.prototype=new mG();_.yb=sI;_.ac=tI;_.Cc=uI;_.tN=sO+'AbstractList$IteratorImpl';_.tI=120;_.a=0;_.b=(-1);function wI(b,a){nI(b,a);return b;}
function vI(){}
_=vI.prototype=new mI();_.tN=sO+'AbstractList$ListIteratorImpl';_.tI=121;function aK(f,d,e){var a,b,c;for(b=sM(f.cb());kM(b);){a=lM(b);c=a.ob();if(d===null?c===null:d.eQ(c)){if(e){mM(b);}return a;}}return null;}
function bK(b){var a;a=b.cb();return eJ(new dJ(),b,a);}
function cK(b){var a;a=CM(b);return sJ(new rJ(),b,a);}
function dK(a){return aK(this,a,false)!==null;}
function eK(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!ri(d,32)){return false;}f=qi(d,32);c=bK(this);e=f.Bb();if(!lK(c,e)){return false;}for(a=gJ(c);nJ(a);){b=oJ(a);h=this.xb(b);g=f.xb(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function fK(b){var a;a=aK(this,b,false);return a===null?null:a.ub();}
function gK(){var a,b,c;b=0;for(c=sM(this.cb());kM(c);){a=lM(c);b+=a.hC();}return b;}
function hK(){return bK(this);}
function iK(){var a,b,c,d;d='{';a=false;for(c=sM(this.cb());kM(c);){b=lM(c);if(a){d+=', ';}else{a=true;}d+=tH(b.ob());d+='=';d+=tH(b.ub());}return d+'}';}
function cJ(){}
_=cJ.prototype=new mG();_.B=dK;_.eQ=eK;_.xb=fK;_.hC=gK;_.Bb=hK;_.tS=iK;_.tN=sO+'AbstractMap';_.tI=122;function lK(e,b){var a,c,d;if(b===e){return true;}if(!ri(b,33)){return false;}c=qi(b,33);if(c.gd()!=e.gd()){return false;}for(a=c.Ab();a.yb();){d=a.ac();if(!e.C(d)){return false;}}return true;}
function mK(a){return lK(this,a);}
function nK(){var a,b,c;a=0;for(b=this.Ab();b.yb();){c=b.ac();if(c!==null){a+=c.hC();}}return a;}
function jK(){}
_=jK.prototype=new fI();_.eQ=mK;_.hC=nK;_.tN=sO+'AbstractSet';_.tI=123;function eJ(b,a,c){b.a=a;b.b=c;return b;}
function gJ(b){var a;a=sM(b.b);return lJ(new kJ(),b,a);}
function hJ(a){return this.a.B(a);}
function iJ(){return gJ(this);}
function jJ(){return this.b.a.c;}
function dJ(){}
_=dJ.prototype=new jK();_.C=hJ;_.Ab=iJ;_.gd=jJ;_.tN=sO+'AbstractMap$1';_.tI=124;function lJ(b,a,c){b.a=c;return b;}
function nJ(a){return a.a.yb();}
function oJ(b){var a;a=b.a.ac();return a.ob();}
function pJ(){return nJ(this);}
function qJ(){return oJ(this);}
function kJ(){}
_=kJ.prototype=new mG();_.yb=pJ;_.ac=qJ;_.tN=sO+'AbstractMap$2';_.tI=125;function sJ(b,a,c){b.a=a;b.b=c;return b;}
function uJ(b){var a;a=sM(b.b);return zJ(new yJ(),b,a);}
function vJ(a){return BM(this.a,a);}
function wJ(){return uJ(this);}
function xJ(){return this.b.a.c;}
function rJ(){}
_=rJ.prototype=new fI();_.C=vJ;_.Ab=wJ;_.gd=xJ;_.tN=sO+'AbstractMap$3';_.tI=126;function zJ(b,a,c){b.a=c;return b;}
function BJ(a){return a.a.yb();}
function CJ(a){var b;b=a.a.ac().ub();return b;}
function DJ(){return BJ(this);}
function EJ(){return CJ(this);}
function yJ(){}
_=yJ.prototype=new mG();_.yb=DJ;_.ac=EJ;_.tN=sO+'AbstractMap$4';_.tI=127;function mL(b){var a,c;a=qK(new oK());for(c=0;c<b.a;c++){sK(a,b[c]);}return a;}
function nL(d,h,e){if(h==0){return;}var i=new Array();for(var g=0;g<h;++g){i[g]=d[g];}if(e!=null){var f=function(a,b){var c=e.w(a,b);return c;};i.sort(f);}else{i.sort();}for(g=0;g<h;++g){d[g]=i[g];}}
function oL(a){nL(a,a.a,(vL(),wL));}
function vL(){vL=fO;wL=new sL();}
var wL;function uL(a,b){return qi(a,38).v(b);}
function sL(){}
_=sL.prototype=new mG();_.w=uL;_.tN=sO+'Comparators$1';_.tI=128;function zM(){zM=fO;aN=gN();}
function wM(a){{yM(a);}}
function xM(a){zM();wM(a);return a;}
function yM(a){a.a=zh();a.d=Ah();a.b=yi(aN,vh);a.c=0;}
function AM(b,a){if(ri(a,1)){return kN(b.d,qi(a,1))!==aN;}else if(a===null){return b.b!==aN;}else{return jN(b.a,a,a.hC())!==aN;}}
function BM(a,b){if(a.b!==aN&&iN(a.b,b)){return true;}else if(fN(a.d,b)){return true;}else if(dN(a.a,b)){return true;}return false;}
function CM(a){return pM(new gM(),a);}
function DM(c,a){var b;if(ri(a,1)){b=kN(c.d,qi(a,1));}else if(a===null){b=c.b;}else{b=jN(c.a,a,a.hC());}return b===aN?null:b;}
function EM(c,a,d){var b;if(ri(a,1)){b=nN(c.d,qi(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=mN(c.a,a,d,a.hC());}if(b===aN){++c.c;return null;}else{return b;}}
function FM(c,a){var b;if(ri(a,1)){b=pN(c.d,qi(a,1));}else if(a===null){b=c.b;c.b=yi(aN,vh);}else{b=oN(c.a,a,a.hC());}if(b===aN){return null;}else{--c.c;return b;}}
function bN(e,c){zM();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.s(a[f]);}}}}
function cN(d,a){zM();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=FL(c.substring(1),e);a.s(b);}}}
function dN(f,h){zM();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.ub();if(iN(h,d)){return true;}}}}return false;}
function eN(a){return AM(this,a);}
function fN(c,d){zM();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(iN(d,a)){return true;}}}return false;}
function gN(){zM();}
function hN(){return CM(this);}
function iN(a,b){zM();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function lN(a){return DM(this,a);}
function jN(f,h,e){zM();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.ob();if(iN(h,d)){return c.ub();}}}}
function kN(b,a){zM();return b[':'+a];}
function mN(f,h,j,e){zM();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.ob();if(iN(h,d)){var i=c.ub();c.cd(j);return i;}}}else{a=f[e]=[];}var c=FL(h,j);a.push(c);}
function nN(c,a,d){zM();a=':'+a;var b=c[a];c[a]=d;return b;}
function oN(f,h,e){zM();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.ob();if(iN(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.ub();}}}}
function pN(c,a){zM();a=':'+a;var b=c[a];delete c[a];return b;}
function BL(){}
_=BL.prototype=new cJ();_.B=eN;_.cb=hN;_.xb=lN;_.tN=sO+'HashMap';_.tI=129;_.a=null;_.b=null;_.c=0;_.d=null;var aN;function DL(b,a,c){b.a=a;b.b=c;return b;}
function FL(a,b){return DL(new CL(),a,b);}
function aM(b){var a;if(ri(b,39)){a=qi(b,39);if(iN(this.a,a.ob())&&iN(this.b,a.ub())){return true;}}return false;}
function bM(){return this.a;}
function cM(){return this.b;}
function dM(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function eM(a){var b;b=this.b;this.b=a;return b;}
function fM(){return this.a+'='+this.b;}
function CL(){}
_=CL.prototype=new mG();_.eQ=aM;_.ob=bM;_.ub=cM;_.hC=dM;_.cd=eM;_.tS=fM;_.tN=sO+'HashMap$EntryImpl';_.tI=130;_.a=null;_.b=null;function pM(b,a){b.a=a;return b;}
function rM(d,c){var a,b,e;if(ri(c,39)){a=qi(c,39);b=a.ob();if(AM(d.a,b)){e=DM(d.a,b);return iN(a.ub(),e);}}return false;}
function sM(a){return iM(new hM(),a.a);}
function tM(a){return rM(this,a);}
function uM(){return sM(this);}
function vM(){return this.a.c;}
function gM(){}
_=gM.prototype=new jK();_.C=tM;_.Ab=uM;_.gd=vM;_.tN=sO+'HashMap$EntrySet';_.tI=131;function iM(c,b){var a;c.c=b;a=qK(new oK());if(c.c.b!==(zM(),aN)){sK(a,DL(new CL(),null,c.c.b));}cN(c.c.d,a);bN(c.c.a,a);c.a=AI(a);return c;}
function kM(a){return pI(a.a);}
function lM(a){return a.b=qi(qI(a.a),39);}
function mM(a){if(a.b===null){throw iF(new gF(),'Must call next() before remove().');}else{rI(a.a);FM(a.c,a.b.ob());a.b=null;}}
function nM(){return kM(this);}
function oM(){return lM(this);}
function hM(){}
_=hM.prototype=new mG();_.yb=nM;_.ac=oM;_.tN=sO+'HashMap$EntrySetIterator';_.tI=132;_.a=null;_.b=null;function rN(a){a.a=xM(new BL());return a;}
function sN(c,a){var b;b=EM(c.a,a,uE(true));return b===null;}
function uN(a){return gJ(bK(a.a));}
function vN(b,a){return FM(b.a,a)!==null;}
function wN(a){return sN(this,a);}
function xN(a){return AM(this.a,a);}
function yN(){return uN(this);}
function zN(){return this.a.c;}
function AN(){return bK(this.a).tS();}
function qN(){}
_=qN.prototype=new jK();_.s=wN;_.C=xN;_.Ab=yN;_.gd=zN;_.tS=AN;_.tN=sO+'HashSet';_.tI=133;_.a=null;function cO(){cO=fO;uG();}
function bO(a){cO();sG(a);return a;}
function aO(){}
_=aO.prototype=new rG();_.tN=sO+'NoSuchElementException';_.tI=134;function AO(){}
_=AO.prototype=new mG();_.tN=tO+'BezierCurve';_.tI=135;function CO(a){{bP(a);}}
function DO(a){CO(a);return a;}
function aP(i,d,e,a,b){var c,f,g,h,j;h=aR(new FQ(),AF(d.a,e.a),AF(d.b,e.b));j=xF(d.a-e.a);c=xF(d.b-e.b);g=zF(j,c);g=zF(g,xF(d.a-a.a));g=zF(g,xF(d.b-a.b));g=zF(g,xF(e.a-b.a));g=zF(g,xF(e.b-b.b));f=aR(new FQ(),h.a-g,h.b-g);Fl(i.a,'left',uF(f.a));Fl(i.a,'top',uF(f.b));yl(i.a,'width',uF(j+g*2));yl(i.a,'height',uF(c+g*2));Fl(i.a,'width',uF(j+g*2));Fl(i.a,'height',uF(c+g*2));FO(i,dR(d,fR(f)),dR(e,fR(f)),dR(a,fR(f)),dR(b,fR(f)),cP(i.a,'color'));}
function FO(h,f,g,a,b,d){var c=h.a;var e=c.getContext('2d');e.beginPath();e.moveTo(f.a,f.b);e.strokeStyle=d;e.bezierCurveTo(a.a,a.b,b.a,b.b,g.a,g.b);e.stroke();}
function bP(b){var a;b.a=hk('canvas');a=el(b.a,'class');yl(b.a,'class',a+' gwt-diagrams-canvas');}
function cP(b,a){if($doc.defaultView&&$doc.defaultView.getComputedStyle){return $doc.defaultView.getComputedStyle(b,'').getPropertyValue(a);}else{return null;}}
function BO(){}
_=BO.prototype=new AO();_.tN=tO+'BezierCurveCanvas';_.tI=136;_.a=null;function fP(a){a.c=qK(new oK());}
function gP(c,d){var a,b;fP(c);rK(c.c,d);mP(c,c.D());for(b=AI(c.c);pI(b);){a=qi(qI(b),35);a.z(c);}return c;}
function hP(a,b){gP(a,mL(b));return a;}
function jP(a){return a.b.u(a.c);}
function kP(c,a){var b;b=yK(c.c,a);if(b>(-1)){CK(c.c,a);kR(a,c);}}
function lP(c){var a,b;for(b=BI(c.c);b.yb();){a=qi(b.ac(),35);b.Cc();a.F(c);}DC(c);}
function mP(b,a){b.b=a;}
function nP(a){a.id(jP(a));}
function oP(){lP(this);}
function pP(){nP(this);}
function eP(){}
_=eP.prototype=new lC();_.Cc=oP;_.hd=pP;_.tN=uO+'AbstractConnection';_.tI=137;_.b=null;function rP(a){a.a=DO(new BO());}
function tP(a,b){hP(a,b);rP(a);if(b.a!=2){throw eF(new dF(),'Need exactly two connectors to connect');}a.ad(a.a.a);lB(a,'gwt-diagrams-connection');return a;}
function sP(c,a,b){tP(c,li('[Lpl.balon.gwt.diagrams.client.connector.Connector;',172,35,[a,b]));return c;}
function vP(){return new hQ();}
function wP(){return this.a.a;}
function xP(){lP(this);}
function yP(b){var a;if(!ri(b,40)){throw eF(new dF(),'Expected BezierConnectionData');}a=qi(b,40);if(a.b.b!=2){throw eF(new dF(),'Expected two connection points');}if(a.a.b!=2){throw eF(new dF(),'Expected two control points');}aP(this.a,qi(xK(a.b,0),37),qi(xK(a.b,1),37),qi(xK(a.a,0),37),qi(xK(a.a,1),37));}
function qP(){}
_=qP.prototype=new eP();_.D=vP;_.lb=wP;_.Cc=xP;_.id=yP;_.tN=uO+'BezierTwoEndedConnection';_.tI=138;function BP(a){a.a=qK(new oK());}
function DP(a,b){hP(a,b);BP(a);if(b.a!=2){throw eF(new dF(),'Need exactly two connectors to connect');}a.ad(gk());lB(a,'gwt-diagrams-connection');return a;}
function CP(c,a,b){DP(c,li('[Lpl.balon.gwt.diagrams.client.connector.Connector;',172,35,[a,b]));return c;}
function FP(d,a){var b,c;for(c=d.a.b;c<a;c++){b=gk();sK(d.a,yi(b,im));dk(d.lb(),b);Dl(b,'&nbsp;');}while(d.a.b>a){b=qi(xK(d.a,0),19);CK(d.a,yi(b,im));tl(d.lb(),b);}}
function aQ(){return new mQ();}
function bQ(a){var b,c,d,e,f;if(a.b.b<=1){throw eF(new dF(),'Too few connection points');}FP(this,a.b.b-1);for(d=0;d<this.a.b;d++){b=qi(xK(this.a,d),19);e=qi(xK(a.b,d),37);c=qi(xK(a.b,d+1),37);f='gwt-diagrams-line';yl(b,'style','');Bl(b,'className',f);Fl(b,'height','1');Fl(b,'width','1');if(e.a==c.a){f+=' gwt-diagrams-line-vertical';Fl(b,'height',uF(xF(e.b-c.b)));}else if(e.b==c.b){Fl(b,'width',uF(xF(e.a-c.a)));f+=' gwt-diagrams-line-horizontal';}Fl(b,'left',uF(AF(e.a,c.a)));Fl(b,'top',uF(AF(e.b,c.b)));Bl(b,'className',f);}}
function AP(){}
_=AP.prototype=new eP();_.D=aQ;_.id=bQ;_.tN=uO+'RectilinearTwoEndedConnection';_.tI=139;function dQ(c,a,b){sP(c,a,b);return c;}
function fQ(){return new sQ();}
function gQ(a){if(a.b.b!=2){throw eF(new dF(),'Expected two connection points');}aP(this.a,qi(xK(a.b,0),37),qi(xK(a.b,1),37),qi(xK(a.b,1),37),qi(xK(a.b,0),37));}
function cQ(){}
_=cQ.prototype=new qP();_.D=fQ;_.id=gQ;_.tN=uO+'StraightTwoEndedConnection';_.tI=140;function jQ(j,d,e){var a,b,c,f,g,h,i;f=d.ib();g=e.ib();c=ki('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[171],[34],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=cR(d.fb(f[h]),e.fb(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function kQ(e){var a,b,c,d,f,g,h,i;if(e.b!=2){throw eF(new dF(),'Unsupported connectors count');}c=qi(xK(e,0),35);d=qi(xK(e,1),35);f=jQ(this,c,d);h=c.Bc(f[0]);i=d.Bc(f[1]);a=eR(h,f[0],50);b=eR(i,f[1],50);g=yQ(new vQ(),li('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',177,37,[h,i]),li('[Lpl.balon.gwt.diagrams.client.connection.data.Point;',177,37,[a,b]));return g;}
function hQ(){}
_=hQ.prototype=new mG();_.u=kQ;_.tN=vO+'BezierConnectionCalculator';_.tI=141;function nQ(e,a,c,d,b){if(b){if(c==0&&d>0){return a!==(vR(),yR);}if(c==1&&d>0){return a!==(vR(),zR);}if(c==0&&d<0){return a!==(vR(),zR);}if(c==1&&d<0){return a!==(vR(),yR);}}else{if(c==0&&d>0){return a!==(vR(),AR);}if(c==1&&d>0){return a!==(vR(),xR);}if(c==0&&d<0){return a!==(vR(),xR);}if(c==1&&d<0){return a!==(vR(),AR);}}return false;}
function pQ(j,d,e){var a,b,c,f,g,h,i;f=d.ib();g=e.ib();c=ki('[Lpl.balon.gwt.diagrams.client.connector.Direction;',[171],[34],[2],null);b=1.7976931348623157E308;for(h=0;h<f.a;h++){for(i=0;i<g.a;i++){a=cR(d.fb(f[h]),e.fb(g[i]));if(a<b){b=a;c[0]=f[h];c[1]=g[i];}}}return c;}
function qQ(e,a,c,d,b){if(b){if(c==0&&d>0){return a===(vR(),zR);}if(c==1&&d>0){return a===(vR(),yR);}if(c==0&&d<0){return a===(vR(),yR);}if(c==1&&d<0){return a===(vR(),zR);}}else{if(c==0&&d>0){return a===(vR(),xR);}if(c==1&&d>0){return a===(vR(),AR);}if(c==0&&d<0){return a===(vR(),AR);}if(c==1&&d<0){return a===(vR(),xR);}}return false;}
function rQ(c){var a,b,d,e,f,g,h,i,j,k,l,m;if(c.b!=2){throw eF(new dF(),'Unsupported connectors count');}a=qi(xK(c,0),35);b=qi(xK(c,1),35);d=CQ(new AQ());e=pQ(this,a,b);i=a.Bc(e[0]);j=eR(i,e[0],10);k=b.Bc(e[1]);l=eR(k,e[1],10);f=l.a-j.a;m=l.b-j.b;g=null;h=null;if(qQ(this,e[0],0,f,true)&&qQ(this,e[1],1,f,true)){g=eR(j,e[0],xF(ui(f/2)));h=aR(new FQ(),g.a,l.b);}else if(qQ(this,e[0],0,m,false)&&qQ(this,e[1],1,m,false)){g=eR(j,e[0],xF(ui(m/2)));h=aR(new FQ(),l.a,g.b);}else if(qQ(this,e[0],0,f,true)&&qQ(this,e[1],1,m,false)){g=eR(j,e[0],xF(f));h=eR(l,e[1],xF(m));}else if(qQ(this,e[0],0,m,false)&&qQ(this,e[1],1,f,true)){g=eR(j,e[0],xF(m));h=eR(l,e[1],xF(f));}else if(qQ(this,e[0],0,f,true)&&nQ(this,e[1],1,f,true)){g=eR(j,e[0],xF(ui(f/2)));h=aR(new FQ(),g.a,l.b);}else if(nQ(this,e[0],0,f,true)&&qQ(this,e[1],1,f,true)){h=eR(l,e[1],xF(ui(f/2)));g=aR(new FQ(),h.a,j.b);}else if(qQ(this,e[0],0,m,false)&&nQ(this,e[1],1,m,false)){g=eR(j,e[0],xF(ui(m/2)));h=aR(new FQ(),l.a,g.b);}else if(nQ(this,e[0],0,m,false)&&qQ(this,e[1],1,m,false)){h=eR(l,e[1],xF(ui(m/2)));g=aR(new FQ(),j.a,h.b);}else if(nQ(this,e[0],0,f,true)&&nQ(this,e[1],1,f,true)){g=eR(j,(vR(),zR),ui(f/2));h=aR(new FQ(),g.a,l.b);}else if(nQ(this,e[0],0,m,false)&&nQ(this,e[1],1,m,false)){g=eR(j,(vR(),xR),ui(m/2));h=aR(new FQ(),l.a,g.b);}else if(nQ(this,e[0],0,f,true)&&nQ(this,e[1],1,m,false)){g=eR(j,(vR(),zR),f);}else if(nQ(this,e[0],0,m,false)&&nQ(this,e[1],1,f,true)){g=eR(j,(vR(),xR),m);}sK(d.b,i);sK(d.b,j);if(g!==null){sK(d.b,g);}if(h!==null){sK(d.b,h);}sK(d.b,l);sK(d.b,k);return d;}
function mQ(){}
_=mQ.prototype=new mG();_.u=rQ;_.tN=vO+'FullRectilinearTwoEndedCalculator';_.tI=142;function uQ(e){var a,b,c,d,f,g,h,i,j,k;if(e.b!=2){throw eF(new dF(),'Unsupported connectors count');}a=qi(xK(e,0),35);b=qi(xK(e,1),35);f=CQ(new AQ());c=aR(new FQ(),a.pb()+ui(a.vb()/2),a.tb()+ui(a.mb()/2));d=aR(new FQ(),b.pb()+ui(b.vb()/2),b.tb()+ui(b.mb()/2));g=aR(new FQ(),d.a-c.a,d.b-c.b);i=g.a>=0?(-1):1;k=g.b>=0?(-1):1;j=ui(a.mb()/2);h=g.b!=0?ui(j*g.a/xF(g.b)):2147483647;j*= -k;if(xF(h)>ui(a.vb()/2)){h=ui(a.vb()/2);j=g.a!=0?ui(h*g.b/xF(g.a)):2147483647;h*= -i;}sK(f.b,aR(new FQ(),c.a+h,c.b+j));j=ui(b.mb()/2);h=g.b!=0?ui(j*g.a/xF(g.b)):2147483647;j*=k;h= -h;if(xF(h)>ui(b.vb()/2)){h=ui(b.vb()/2);j=g.a!=0?ui(h*g.b/xF(g.a)):2147483647;h*=i;j= -j;}sK(f.b,aR(new FQ(),d.a+h,d.b+j));return f;}
function sQ(){}
_=sQ.prototype=new mG();_.u=uQ;_.tN=vO+'StraightCenterConnectionDataCalculator';_.tI=143;function BQ(a){a.b=qK(new oK());}
function CQ(a){BQ(a);return a;}
function DQ(b,a){BQ(b);rK(b.b,a);return b;}
function AQ(){}
_=AQ.prototype=new mG();_.tN=wO+'ConnectionData';_.tI=144;function wQ(a){a.a=qK(new oK());}
function xQ(c,b,a){DQ(c,b);wQ(c);rK(c.a,a);return c;}
function yQ(c,b,a){xQ(c,mL(b),mL(a));return c;}
function vQ(){}
_=vQ.prototype=new AQ();_.tN=wO+'BezierConnectionData';_.tI=145;function aR(b,a,c){b.a=a;b.b=c;return b;}
function cR(b,a){return BF((b.a-a.a)*(b.a-a.a)+(b.b-a.b)*(b.b-a.b));}
function eR(c,a,b){if(a===(vR(),xR)){return aR(new FQ(),c.a,c.b+b);}else if(a===(vR(),AR)){return aR(new FQ(),c.a,c.b-b);}else if(a===(vR(),yR)){return aR(new FQ(),c.a-b,c.b);}else if(a===(vR(),zR)){return aR(new FQ(),c.a+b,c.b);}else{throw hF(new gF());}}
function dR(a,b){return aR(new FQ(),a.a+b.a,a.b+b.b);}
function fR(a){return aR(new FQ(),-a.a,-a.b);}
function FQ(){}
_=FQ.prototype=new mG();_.tN=wO+'Point';_.tI=146;_.a=0;_.b=0;function hR(a){a.c=rN(new qN());}
function iR(a){hR(a);return a;}
function kR(b,a){if(vN(b.c,a)){kP(a,b);}}
function lR(b,a){return eR(aR(new FQ(),b.pb()+ui(b.vb()/2),b.tb()+ui(b.mb()/2)),a,wR(a)?ui(b.vb()/2):ui(b.mb()/2));}
function mR(c){var a,b;for(b=uN(c.c);nJ(b);){a=qi(oJ(b),41);a.hd();}}
function nR(a){sN(this.c,a);}
function oR(a){kR(this,a);}
function pR(a){return lR(this,a);}
function qR(){return BR();}
function rR(a){return lR(this,a);}
function gR(){}
_=gR.prototype=new mG();_.z=nR;_.F=oR;_.fb=pR;_.ib=qR;_.Bc=rR;_.tN=xO+'AbstractConnector';_.tI=147;function vR(){vR=fO;AR=uR(new tR(),'UP');xR=uR(new tR(),'DOWN');yR=uR(new tR(),'LEFT');zR=uR(new tR(),'RIGHT');}
function uR(b,a){vR();b.a=a;return b;}
function wR(a){return a===yR||a===zR;}
function BR(){vR();return li('[Lpl.balon.gwt.diagrams.client.connector.Direction;',171,34,[AR,xR,yR,zR]);}
function CR(){return this.a;}
function tR(){}
_=tR.prototype=new mG();_.tS=CR;_.tN=xO+'Direction';_.tI=148;_.a=null;var xR,yR,zR,AR;function dS(){dS=fO;nS=xM(new BL());}
function cS(a,b){dS();iR(a);a.b=b;return a;}
function eS(a){FM(nS,a.b);a.b=null;}
function fS(){if(this.b===null){throw iF(new gF(),'Wrapped object is null.');}return this.b.qb();}
function gS(){var a,b;if(this.b===null){throw iF(new gF(),'Wrapped object is null.');}a=0;b=ml(this.b.lb());while(b!==null){if(cH('relative',nl(b,'position'))){a=cl(b);break;}b=ml(b);}return nB(this.b)-a;}
function hS(){var a,b;if(this.b===null){throw iF(new gF(),'Wrapped object is null.');}a=0;b=ml(this.b.lb());while(b!==null){if(cH('relative',nl(b,'position'))){a=dl(b);break;}b=ml(b);}return oB(this.b)-a;}
function iS(){if(this.b===null){throw iF(new gF(),'Wrapped object is null.');}return this.b.rb();}
function jS(a){dS();return qi(DM(nS,a),42);}
function kS(a){dS();if(AM(nS,a)){eS(jS(a));}}
function lS(b){dS();var a;if(AM(nS,b)){return qi(DM(nS,b),42);}else{a=cS(new DR(),b);EM(nS,b,a);return a;}}
function mS(c,b){dS();var a;if(AM(nS,c)){return qi(DM(nS,c),42);}else{a=FR(new ER(),c,b);EM(nS,c,a);return a;}}
function DR(){}
_=DR.prototype=new gR();_.mb=fS;_.pb=gS;_.tb=hS;_.vb=iS;_.tN=xO+'UIObjectConnector';_.tI=149;_.b=null;var nS;function aS(){aS=fO;dS();}
function FR(b,a,c){aS();b.a=c;cS(b,a);return b;}
function bS(){return this.a;}
function ER(){}
_=ER.prototype=new DR();_.ib=bS;_.tN=xO+'UIObjectConnector$1';_.tI=150;function xS(e,a){a=a.replace(/[\[]/,'\\[').replace(/[\]]/,'\\]');var c='[\\?&]'+a+'=([^&#]*)';var b=new RegExp(c);var d=b.exec($wnd.location.href);if(d==null)return '';else return d[1];}
function yS(a){lh(new pS());gm(tS(new sS(),a));}
function oS(){}
_=oS.prototype=new mG();_.tN=yO+'BaseExamplesEntryPoint';_.tI=151;function rS(e,f){var a,b,c,d;d='Uncaught exception: ';while(f!==null){c=f.c;d+=EH(f)+'\n';for(b=0;b<c.a;b++){d+='    at '+c[b]+'\n';}f=f.a;if(f!==null){d+='Caused by: ';}}a=ns(new ls(),true);Fl(a.lb(),'backgroundColor','#ABCDEF');vH(),xH;d=hH(d,' ','&nbsp;');qs(a,'<pre>'+d+'<\/pre>');Fx(a);}
function pS(){}
_=pS.prototype=new mG();_.tN=yO+'BaseExamplesEntryPoint$1';_.tI=152;function tS(b,a){b.a=a;return b;}
function vS(){aT(this.a);}
function sS(){}
_=sS.prototype=new mG();_.db=vS;_.tN=yO+'BaseExamplesEntryPoint$2';_.tI=153;function aT(c){var a,b;b=EA(new rA());nq(dz('tabs'),b);aB(b,oV(new nV()),'Rectilinear');aB(b,bU(new aU()),'Bezier');aB(b,sV(new rV()),'Straight');aB(b,BU(new eU()),'Diagram builder');aB(b,jV(new iV()),'Multi');FA(b,BS(new AS(),c,b));a=xS(c,'tab');if(a===null||cH('',a)){a='0';}fB(b,sF(a));}
function zS(){}
_=zS.prototype=new oS();_.tN=yO+'GwtDiagramsExample';_.tI=154;function BS(b,a,c){b.a=c;return b;}
function DS(a,b){return true;}
function ES(b,c){var a;a=qi(cB(this.a,c),43);yT(a);}
function AS(){}
_=AS.prototype=new mG();_.dc=DS;_.xc=ES;_.tN=yO+'GwtDiagramsExample$1';_.tI=155;function CT(a){a.i=mq(new lq());}
function DT(a){var b;nz(a);CT(a);lB(a,'gwt-diagrams-example');b=fC(new dC());pz(a,b);gC(b,a.i);gC(b,FT(a,xT(a)));return a;}
function FT(e,d){var a,b,c;a=ht(new gt());lB(a,'gwt-diagrams-sources-panel');for(b=AI(d);pI(b);){c=qi(qI(b),14);it(a,c);}return a;}
function BT(){}
_=BT.prototype=new gz();_.tN=zO+'AbstractExample';_.tI=156;function qT(a){a.g=qK(new oK());}
function rT(a){DT(a);qT(a);a.h=vT(a);Fl(a.i.lb(),'width','450px');Fl(a.i.lb(),'height','350px');a.E();return a;}
function sT(b,a){nq(b.i,a);sK(b.g,a);}
function uT(e,d,c,f,a){var b;b=Fw(new Dw(),d);lB(b,'example-connector');oq(e.i,b,c,f);fT(e.h,b);if(a!==null){return mS(b,li('[Lpl.balon.gwt.diagrams.client.connector.Direction;',171,34,[a]));}return lS(b);}
function vT(b){var a;a=dT(new cT(),b.i,true,b);return a;}
function wT(b,a){CK(b.g,a);}
function xT(f){var a,b,c,d,e;e=qK(new oK());b=fH(jh(f),46);a=iH(jh(f),b+1);sK(e,sw(new qw(),a+'.java',''));sK(e,sw(new qw(),'AbstractExample.java',''));sK(e,sw(new qw(),'AbstractConnectionsExample.java',''));for(d=AI(e);pI(d);){c=qi(qI(d),44);lB(c,'gwt-diagrams-source-link');tw(c,nT(new mT(),f,c));}return e;}
function yT(c){var a,b;for(b=AI(c.g);pI(b);){a=qi(qI(b),41);a.hd();}}
function zT(a){sT(this,a);}
function AT(){var a,b,c,d,e,f,g,h;a=uT(this,'all',50,50,null);b=uT(this,'all',100,100,null);this.A(a,b);c=uT(this,'up',250,50,(vR(),AR));d=uT(this,'down',300,100,(vR(),xR));this.A(c,d);e=uT(this,'left',50,200,(vR(),yR));f=uT(this,'right',100,250,(vR(),zR));this.A(e,f);g=uT(this,'left',250,200,(vR(),yR));h=uT(this,'left',300,250,(vR(),yR));this.A(g,h);}
function bT(){}
_=bT.prototype=new BT();_.t=zT;_.E=AT;_.tN=zO+'AbstractConnectionsExample';_.tI=157;_.h=null;function eT(){eT=fO;ad();}
function dT(d,a,b,c){eT();Fc(d,a,b);return d;}
function fT(a,b){A(a,b);Fl(b.lb(),'position','absolute');Fl(b.lb(),'zIndex','100');}
function gT(a){fT(this,a);}
function hT(b,a){return jT(new iT(),b,a,this);}
function cT(){}
_=cT.prototype=new Ec();_.Db=gT;_.Fb=hT;_.tN=zO+'AbstractConnectionsExample$1';_.tI=158;function kT(){kT=fO;se();}
function jT(d,a,b,c){kT();re(d,a,b);return d;}
function lT(d,c,b){var a;od(this,d,c,b);a=jS(c);if(a!==null){mR(a);}}
function iT(){}
_=iT.prototype=new qe();_.tc=lT;_.tN=zO+'AbstractConnectionsExample$2';_.tI=159;function nT(b,a,c){b.a=c;return b;}
function pT(a){bo('../source/'+vw(this.a),'','');}
function mT(){}
_=mT.prototype=new mG();_.fc=pT;_.tN=zO+'AbstractConnectionsExample$3';_.tI=160;function bU(a){rT(a);return a;}
function dU(a,b){this.t(sP(new qP(),a,b));}
function aU(){}
_=aU.prototype=new bT();_.A=dU;_.tN=zO+'BezierExample';_.tI=161;function AU(a){a.c=qK(new oK());}
function BU(a){rT(a);AU(a);return a;}
function CU(b,a){sT(b,a);nP(a);}
function EU(c,a,b){if(cH('rectilinear',c.d)){CU(c,CP(new AP(),a,b));}else if(cH('bezier',c.d)){CU(c,sP(new qP(),a,b));}else if(cH('straight',c.d)){CU(c,dQ(new cQ(),a,b));}}
function FU(e,d,c){var a,b;b=sU(new rU(),dx(d),e);uB(b,d.rb(),d.qb());lB(b,'example-connector');oq(c,b,nB(d)-nB(c),oB(d)-oB(c));fT(e.h,b);a=null;if(cH('T',dx(b))){a=(vR(),AR);}else if(cH('L',dx(b))){a=(vR(),yR);}else if(cH('B',dx(b))){a=(vR(),xR);}else if(cH('R',dx(b))){a=(vR(),zR);}if(a!==null){return mS(b,li('[Lpl.balon.gwt.diagrams.client.connector.Direction;',171,34,[a]));}return lS(b);}
function aV(c,a){var b;b=Fw(new Dw(),a);lB(b,'helpEntry');jw(c.a,b);}
function bV(d,c,a){var b;b=yy(new wy(),'style',c);lB(b,'style-option');cr(b,a);if(a){eV(d,c);}jw(d.e,b);nt(b,oU(new nU(),d,c));return b;}
function cV(d,a,c){var b;b=Fw(new Dw(),a);vB(b,'toolbox-node');lB(b,c);jw(d.e,b);d.f.Db(b);return b;}
function dV(d,e){var a,b,c,f;if(AK(d.c)){lB(e,'selected-connector');b=jS(e).c;for(c=uN(b);nJ(c);){a=qi(oJ(c),41);a.Cc();wT(d,a);}sK(d.c,e);}else if(wK(d.c,e)){rB(e,'selected-connector');CK(d.c,e);}else if(d.c.b==1){f=qi(xK(d.c,0),14);rB(e,'selected-connector');rB(f,'selected-connector');b=jS(e).c;for(c=uN(b);nJ(c);){a=qi(oJ(c),41);a.Cc();wT(d,a);}EU(d,jS(f),jS(e));uK(d.c);}}
function eV(b,a){b.d=a;}
function fV(a){CU(this,a);}
function gV(a,b){EU(this,a,b);}
function hV(){var a,b,c;a=Fc(new Ec(),this.i,true);b=jd(new id(),this.i);this.f=xU(new vU(),b,a,this);this.e=iw(new gw());vB(this.e,'toolbox');this.b=mq(new lq());this.a=iw(new gw());vB(this.a,'helpPanel');c=fC(new dC());vB(c,'builder');gC(c,this.a);gC(c,this.e);gC(c,this.b);nq(this.i,c);cV(this,'A','all');cV(this,'L','left');cV(this,'R','right');cV(this,'T','top');cV(this,'B','bottom');bV(this,'rectilinear',true);bV(this,'bezier',false);bV(this,'straight',false);aV(this,'drag&drop from toolbar to add');aV(this,'CTRL+click to select/connect');aV(this,'DEL to delete selected');ck(kU(new jU(),this));}
function eU(){}
_=eU.prototype=new bT();_.t=fV;_.A=gV;_.E=hV;_.tN=zO+'DiagramBuilderExample';_.tI=162;_.a=null;_.b=null;_.d=null;_.e=null;_.f=null;function gU(b,a,c){b.a=a;b.b=c;return b;}
function iU(a){var b,c,d;b=a.d;d=qi(DM(this.a.a,b),14);c=this.b.g;FU(this.a.b,qi(d,45),c);throw gd(new fd());}
function fU(){}
_=fU.prototype=new rb();_.uc=iU;_.tN=zO+'DiagramBuilderExample$1';_.tI=163;function kU(b,a){b.a=a;return b;}
function mU(a){var b,c;if(128==Fk(a)&&46==Ak(a)&& !AK(this.a.c)){for(b=BI(this.a.c);pI(b);){c=qi(qI(b),14);kS(c);rI(b);DC(c);}return false;}return true;}
function jU(){}
_=jU.prototype=new mG();_.lc=mU;_.tN=zO+'DiagramBuilderExample$2';_.tI=164;function oU(b,a,c){b.a=a;b.b=c;return b;}
function qU(a){eV(this.a,this.b);}
function nU(){}
_=nU.prototype=new mG();_.fc=qU;_.tN=zO+'DiagramBuilderExample$3';_.tI=165;function sU(c,a,b){c.a=b;Fw(c,a);return c;}
function uU(a){if(Fk(a)==1&&yk(a)){dV(this.a,this);}ex(this,a);}
function rU(){}
_=rU.prototype=new Dw();_.ec=uU;_.tN=zO+'DiagramBuilderExample$4';_.tI=166;function yU(){yU=fO;ad();}
function wU(a){a.a=xM(new BL());}
function xU(d,a,b,c){yU();d.b=c;Fc(d,d.b.i,false);wU(d);dd(d,true);F(d,a);u(d,gU(new fU(),d,a));return d;}
function zU(a){var b,c;b=qi(a,45);c=Fw(new Dw(),dx(b));lB(c,'dragdrop-proxy');lB(c,'toolbox-node-proxy');uB(c,b.rb(),b.qb());EM(this.a,b,c);return c;}
function vU(){}
_=vU.prototype=new Ec();_.Eb=zU;_.tN=zO+'DiagramBuilderExample$ToolboxDragController';_.tI=167;function jV(a){rT(a);return a;}
function lV(a,b){throw cI(new bI());}
function mV(){var a,b,c,d,e,f,g;e=uT(this,'X',50,100,null);f=uT(this,'Y',150,50,null);g=uT(this,'Z',250,25,null);c=uT(this,'U',125,125,null);d=uT(this,'W',250,100,null);this.t(CP(new AP(),e,f));this.t(CP(new AP(),f,g));this.t(CP(new AP(),f,c));this.t(CP(new AP(),c,d));a=uT(this,'A',50,200,null);b=uT(this,'B',150,250,null);this.t(CP(new AP(),a,b));this.t(sP(new qP(),a,b));this.t(dQ(new cQ(),a,b));}
function iV(){}
_=iV.prototype=new bT();_.A=lV;_.E=mV;_.tN=zO+'MultiConnectionsExample';_.tI=168;function oV(a){rT(a);return a;}
function qV(a,b){this.t(CP(new AP(),a,b));}
function nV(){}
_=nV.prototype=new bT();_.A=qV;_.tN=zO+'RectilinearExample';_.tI=169;function sV(a){rT(a);return a;}
function uV(c,a,b){c.t(dQ(new cQ(),a,b));}
function vV(a,b){uV(this,a,b);}
function wV(){var a,b;a=uT(this,'connector 1',50,50,(vR(),AR));b=uT(this,'connector 2',200,200,(vR(),xR));uV(this,a,b);}
function rV(){}
_=rV.prototype=new bT();_.A=vV;_.E=wV;_.tN=zO+'StraightConnectionsExample';_.tI=170;function cE(){yS(new zS());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{cE();}catch(a){b(d);}else{cE();}}
var xi=[{},{27:1},{1:1,27:1,38:1},{27:1},{27:1},{27:1},{27:1},{17:1,27:1},{7:1,27:1},{27:1},{27:1,31:1},{27:1,31:1},{27:1,31:1},{27:1},{27:1},{10:1,27:1,38:1},{23:1,27:1},{27:1},{16:1,27:1},{16:1,27:1},{12:1,16:1,27:1},{8:1,27:1},{8:1,27:1},{8:1,27:1},{8:1,27:1},{27:1},{13:1,16:1,27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{15:1,27:1},{27:1},{27:1},{27:1},{11:1,16:1,27:1},{27:1},{20:1,27:1},{20:1,27:1},{20:1,27:1},{27:1},{15:1,19:1,27:1},{15:1,27:1},{21:1,27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1,28:1},{14:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{2:1,14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1},{27:1,31:1},{14:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{6:1,14:1,26:1,27:1,28:1,29:1},{6:1,14:1,18:1,26:1,27:1,28:1,29:1},{6:1,14:1,18:1,23:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{27:1},{27:1},{5:1,14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1,45:1},{14:1,27:1,28:1,29:1,45:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{3:1,14:1,26:1,27:1,28:1,29:1},{14:1,27:1,28:1,29:1,44:1},{27:1,31:1},{14:1,27:1,28:1,29:1},{2:1,14:1,24:1,26:1,27:1,28:1,29:1},{21:1,27:1},{27:1},{14:1,22:1,27:1,28:1,29:1},{27:1,31:1},{14:1,25:1,26:1,27:1,28:1,29:1},{14:1,26:1,27:1,28:1,29:1},{14:1,22:1,27:1,28:1,29:1},{4:1,14:1,26:1,27:1,28:1,29:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{17:1,27:1},{27:1},{27:1},{27:1},{11:1,16:1,27:1},{27:1,30:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{11:1,16:1,27:1},{27:1},{11:1,16:1,27:1},{27:1},{27:1},{27:1,32:1},{27:1,33:1},{27:1,33:1},{27:1},{27:1},{27:1},{27:1},{27:1,32:1},{27:1,39:1},{27:1,33:1},{27:1},{27:1,33:1},{11:1,16:1,27:1},{27:1},{27:1},{14:1,27:1,28:1,29:1,41:1},{14:1,27:1,28:1,29:1,41:1},{14:1,27:1,28:1,29:1,41:1},{14:1,27:1,28:1,29:1,41:1},{27:1},{27:1},{27:1},{27:1},{27:1,40:1},{27:1,37:1},{27:1,35:1},{27:1,34:1},{27:1,35:1,42:1},{27:1,35:1,42:1},{27:1},{27:1},{17:1,27:1},{27:1},{25:1,27:1},{6:1,14:1,26:1,27:1,28:1,29:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{27:1},{8:1,27:1},{22:1,27:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{7:1,27:1},{18:1,27:1},{22:1,27:1},{14:1,27:1,28:1,29:1,45:1},{27:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{6:1,14:1,26:1,27:1,28:1,29:1,43:1},{27:1},{27:1},{9:1,27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1},{27:1}];if (pl_balon_gwt_diagramsexample_GwtDiagramsExample) {  var __gwt_initHandlers = pl_balon_gwt_diagramsexample_GwtDiagramsExample.__gwt_initHandlers;  pl_balon_gwt_diagramsexample_GwtDiagramsExample.onScriptLoad(gwtOnLoad);}})();