goog.provide('day8.re_frame_10x.subs');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core');
goog.require('day8.re_frame_10x.metamorphic');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('zprint.core');
var G__53079_53552 = new cljs.core.Keyword("settings","root","settings/root",-1329120290);
var G__53080_53553 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"settings","settings",1556144875));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53079_53552,G__53080_53553) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53079_53552,G__53080_53553));
var G__53081_53554 = new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808);
var G__53082_53555 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53083_53556 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53084_53557 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53081_53554,G__53082_53555,G__53083_53556,G__53084_53557) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53081_53554,G__53082_53555,G__53083_53556,G__53084_53557));
var G__53085_53558 = new cljs.core.Keyword("settings","panel-width%-rounded","settings/panel-width%-rounded",1475049191);
var G__53086_53559 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53087_53560 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808)], null);
var G__53088_53561 = (function (panel_width_PERCENT_,p__53089){
var vec__53090 = p__53089;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53090,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53090,(1),null);
return (((function (){var G__53093 = ((panel_width_PERCENT_ * (100)) / n);
return Math.ceil(G__53093);
})() * n) / 100.0);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53085_53558,G__53086_53559,G__53087_53560,G__53088_53561) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53085_53558,G__53086_53559,G__53087_53560,G__53088_53561));
var G__53094_53562 = new cljs.core.Keyword("settings","window-width","settings/window-width",640332180);
var G__53095_53563 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53096_53564 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53097_53565 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"window-width","window-width",2057825599));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53094_53562,G__53095_53563,G__53096_53564,G__53097_53565) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53094_53562,G__53095_53563,G__53096_53564,G__53097_53565));
var G__53098_53566 = new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629);
var G__53099_53567 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53100_53568 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width","settings/window-width",640332180)], null);
var G__53101_53569 = (function (width,p__53102){
var vec__53103 = p__53102;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53103,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53103,(1),null);
return ((function (){var G__53106 = (width / n);
return Math.ceil(G__53106);
})() * n);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53098_53566,G__53099_53567,G__53100_53568,G__53101_53569) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53098_53566,G__53099_53567,G__53100_53568,G__53101_53569));
var G__53107_53570 = new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945);
var G__53108_53571 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53109_53572 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53110_53573 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53107_53570,G__53108_53571,G__53109_53572,G__53110_53573) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53107_53570,G__53108_53571,G__53109_53572,G__53110_53573));
var G__53111_53574 = new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089);
var G__53112_53575 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53113_53576 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53114_53577 = (function (settings,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878).cljs$core$IFn$_invoke$arity$1(settings))){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53111_53574,G__53112_53575,G__53113_53576,G__53114_53577) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53111_53574,G__53112_53575,G__53113_53576,G__53114_53577));
var G__53115_53580 = new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150);
var G__53116_53581 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53117_53582 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53118_53583 = (function (settings){
return new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53115_53580,G__53116_53581,G__53117_53582,G__53118_53583) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53115_53580,G__53116_53581,G__53117_53582,G__53118_53583));
var G__53119_53584 = new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632);
var G__53120_53585 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53121_53586 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53122_53587 = (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589).cljs$core$IFn$_invoke$arity$1(settings)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53119_53584,G__53120_53585,G__53121_53586,G__53122_53587) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53119_53584,G__53120_53585,G__53121_53586,G__53122_53587));
var G__53123_53589 = new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350);
var G__53124_53590 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53125_53591 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53126_53592 = (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599).cljs$core$IFn$_invoke$arity$1(settings)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53123_53589,G__53124_53590,G__53125_53591,G__53126_53592) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53123_53589,G__53124_53590,G__53125_53591,G__53126_53592));
var G__53127_53593 = new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289);
var G__53128_53594 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53129_53595 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53130_53596 = (function (settings){
return new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53127_53593,G__53128_53594,G__53129_53595,G__53130_53596) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53127_53593,G__53128_53594,G__53129_53595,G__53130_53596));
var G__53131_53597 = new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920);
var G__53132_53598 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53133_53599 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53134_53600 = (function (settings){
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53131_53597,G__53132_53598,G__53133_53599,G__53134_53600) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53131_53597,G__53132_53598,G__53133_53599,G__53134_53600));
var G__53135_53601 = new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889);
var G__53136_53602 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53137_53603 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__53138_53604 = (function (settings){
return new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53135_53601,G__53136_53602,G__53137_53603,G__53138_53604) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53135_53601,G__53136_53602,G__53137_53603,G__53138_53604));
var G__53139_53605 = new cljs.core.Keyword("app-db","root","app-db/root",-1721368731);
var G__53140_53606 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53139_53605,G__53140_53606) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53139_53605,G__53140_53606));
var G__53141_53607 = new cljs.core.Keyword("app-db","current-epoch-app-db-after","app-db/current-epoch-app-db-after",-1412128095);
var G__53142_53608 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53143_53609 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__53144_53610 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53141_53607,G__53142_53608,G__53143_53609,G__53144_53610) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53141_53607,G__53142_53608,G__53143_53609,G__53144_53610));
var G__53145_53611 = new cljs.core.Keyword("app-db","current-epoch-app-db-before","app-db/current-epoch-app-db-before",-615465288);
var G__53146_53612 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53147_53613 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__53148_53614 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53145_53611,G__53146_53612,G__53147_53613,G__53148_53614) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53145_53611,G__53146_53612,G__53147_53613,G__53148_53614));
var G__53150_53615 = new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730);
var G__53151_53616 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53152_53617 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__53153_53618 = (function (app_db_settings,_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53149_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__53149_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__53149_SHARP_));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53150_53615,G__53151_53616,G__53152_53617,G__53153_53618) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53150_53615,G__53151_53616,G__53152_53617,G__53153_53618));
var G__53154_53619 = new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656);
var G__53155_53620 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53156_53621 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__53157_53622 = (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53154_53619,G__53155_53620,G__53156_53621,G__53157_53622) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53154_53619,G__53155_53620,G__53156_53621,G__53157_53622));
var G__53158_53625 = new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845);
var G__53159_53626 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53160_53627 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__53161_53628 = (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53158_53625,G__53159_53626,G__53160_53627,G__53161_53628) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53158_53625,G__53159_53626,G__53160_53627,G__53161_53628));
var G__53162_53629 = new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540);
var G__53163_53630 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53164_53631 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null);
var G__53165_53632 = (function (expansions,p__53166){
var vec__53167 = p__53166;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53167,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53167,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53162_53629,G__53163_53630,G__53164_53631,G__53165_53632) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53162_53629,G__53163_53630,G__53164_53631,G__53165_53632));
var G__53170_53633 = new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371);
var G__53171_53634 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53172_53635 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__53173_53636 = (function (root,_){
return new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415).cljs$core$IFn$_invoke$arity$1(root);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53170_53633,G__53171_53634,G__53172_53635,G__53173_53636) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53170_53633,G__53171_53634,G__53172_53635,G__53173_53636));
var G__53174_53637 = new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946);
var G__53175_53638 = (function (db,_){
return new cljs.core.Keyword(null,"traces","traces",-1301138004).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53174_53637,G__53175_53638) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53174_53637,G__53175_53638));
var G__53176_53639 = new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647);
var G__53177_53640 = (function (db,_){
return new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53176_53639,G__53177_53640) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53176_53639,G__53177_53640));
var G__53178_53644 = new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347);
var G__53179_53645 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53178_53644,G__53179_53645) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53178_53644,G__53179_53645));
var G__53180_53646 = new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191);
var G__53181_53647 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53180_53646,G__53181_53647) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53180_53646,G__53181_53647));
var G__53182_53648 = new cljs.core.Keyword("traces","categories","traces/categories",-821318016);
var G__53183_53649 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53182_53648,G__53183_53649) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53182_53648,G__53183_53649));
var G__53184_53650 = new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523);
var G__53185_53651 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53186_53652 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946)], null);
var G__53187_53653 = (function (traces,_){
return new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641).cljs$core$IFn$_invoke$arity$1(traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53184_53650,G__53185_53651,G__53186_53652,G__53187_53653) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53184_53650,G__53185_53651,G__53186_53652,G__53187_53653));
var G__53188_53654 = new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241);
var G__53189_53655 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53190_53656 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__53191_53657 = (function (traces,_){
return cljs.core.count(traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53188_53654,G__53189_53655,G__53190_53656,G__53191_53657) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53188_53654,G__53189_53655,G__53190_53656,G__53191_53657));
var G__53192_53658 = new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769);
var G__53193_53659 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53194_53660 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__53195_53661 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53196_53662 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null);
var G__53197_53663 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53198_53664 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null);
var G__53199_53665 = (function (p__53200,_){
var vec__53201 = p__53200;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53201,(0),null);
var beginning = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53201,(1),null);
var ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53201,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.utils.utils.id_between_xf(beginning,ending),traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__53192_53658,G__53193_53659,G__53194_53660,G__53195_53661,G__53196_53662,G__53197_53663,G__53198_53664,G__53199_53665) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53192_53658,G__53193_53659,G__53194_53660,G__53195_53661,G__53196_53662,G__53197_53663,G__53198_53664,G__53199_53665));
day8.re_frame_10x.subs.filter_ignored_views = (function day8$re_frame_10x$subs$filter_ignored_views(p__53204,_){
var vec__53205 = p__53204;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53205,(0),null);
var filtered_views = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53205,(1),null);
var munged_ns = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),filtered_views));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (trace){
return ((day8.re_frame_10x.metamorphic.render_QMARK_(trace)) && (cljs.core.contains_QMARK_(munged_ns,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")))));
})),traces);
});
var G__53208_53670 = new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585);
var G__53209_53671 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53210_53672 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53211_53673 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53212_53674 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__53213_53675 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53208_53670,G__53209_53671,G__53210_53672,G__53211_53673,G__53212_53674,G__53213_53675) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53208_53670,G__53209_53671,G__53210_53672,G__53211_53673,G__53212_53674,G__53213_53675));
var G__53214_53676 = new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071);
var G__53215_53677 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53216_53678 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__53217_53679 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53218_53680 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__53219_53681 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53214_53676,G__53215_53677,G__53216_53678,G__53217_53679,G__53218_53680,G__53219_53681) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53214_53676,G__53215_53677,G__53216_53678,G__53217_53679,G__53218_53680,G__53219_53681));
var G__53220_53684 = new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951);
var G__53221_53685 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53222_53686 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647)], null);
var G__53223_53687 = (function (trace_root){
return new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323).cljs$core$IFn$_invoke$arity$1(trace_root);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53220_53684,G__53221_53685,G__53222_53686,G__53223_53687) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53220_53684,G__53221_53685,G__53222_53686,G__53223_53687));
var G__53224_53688 = new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001);
var G__53225_53689 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53224_53688,G__53225_53689) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53224_53688,G__53225_53689));
var G__53226_53690 = new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517);
var G__53227_53691 = (function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53226_53690,G__53227_53691) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53226_53690,G__53227_53691));
var G__53228_53692 = new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072);
var G__53229_53693 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53230_53694 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null);
var G__53231_53695 = (function (snapshot,_){
return cljs.core.contains_QMARK_(snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53228_53692,G__53229_53693,G__53230_53694,G__53231_53695) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53228_53692,G__53229_53693,G__53230_53694,G__53231_53695));
var G__53232_53696 = new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597);
var G__53233_53697 = (function (db,_){
return new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53232_53696,G__53233_53697) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53232_53696,G__53233_53697));
var G__53234_53698 = new cljs.core.Keyword("epochs","all-events-by-id","epochs/all-events-by-id",-1225664812);
var G__53235_53699 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53236_53700 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53237_53701 = (function (epochs,_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.first,cljs.core._GT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"tags","tags",1771418977),day8.re_frame_10x.metamorphic.matched_event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"match-info","match-info",666319879),cljs.core.val], 0))),new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53234_53698,G__53235_53699,G__53236_53700,G__53237_53701) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53234_53698,G__53235_53699,G__53236_53700,G__53237_53701));
var G__53238_53702 = new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281);
var G__53239_53703 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53240_53704 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53241_53705 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53242_53706 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__53243_53707 = (function (p__53244,_){
var vec__53245 = p__53244;
var epochs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53245,(0),null);
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53245,(1),null);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
var match = (((current_id == null))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id < cljs.core.first(match_ids)))?cljs.core.first(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id > cljs.core.last(match_ids)))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs),current_id)
)));
return match;
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53238_53702,G__53239_53703,G__53240_53704,G__53241_53705,G__53242_53706,G__53243_53707) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53238_53702,G__53239_53703,G__53240_53704,G__53241_53705,G__53242_53706,G__53243_53707));
var G__53248_53711 = new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087);
var G__53249_53712 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53250_53713 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__53251_53714 = (function (match_state,_){
return new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53248_53711,G__53249_53712,G__53250_53713,G__53251_53714) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53248_53711,G__53249_53712,G__53250_53713,G__53251_53714));
var G__53252_53715 = new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851);
var G__53253_53716 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53254_53717 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__53255_53718 = (function (match,_){
return day8.re_frame_10x.metamorphic.matched_event(match);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53252_53715,G__53253_53716,G__53254_53717,G__53255_53718) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53252_53715,G__53253_53716,G__53254_53717,G__53255_53718));
var G__53256_53719 = new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104);
var G__53257_53720 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53258_53721 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__53259_53722 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53256_53719,G__53257_53720,G__53258_53721,G__53259_53722) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53256_53719,G__53257_53720,G__53258_53721,G__53259_53722));
var G__53260_53723 = new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531);
var G__53261_53724 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53262_53725 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53263_53726 = (function (epochs,_){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"matches","matches",635497998)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53260_53723,G__53261_53724,G__53262_53725,G__53263_53726) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53260_53723,G__53261_53724,G__53262_53725,G__53263_53726));
var G__53264_53727 = new cljs.core.Keyword("epochs","current-event-index","epochs/current-event-index",-2026503803);
var G__53265_53728 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53266_53729 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53267_53730 = (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53264_53727,G__53265_53728,G__53266_53729,G__53267_53730) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53264_53727,G__53265_53728,G__53266_53729,G__53267_53730));
var G__53268_53735 = new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682);
var G__53269_53736 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53270_53737 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__53271_53738 = (function (epochs,_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(epochs));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53268_53735,G__53269_53736,G__53270_53737,G__53271_53738) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53268_53735,G__53269_53736,G__53270_53737,G__53271_53738));
var G__53272_53739 = new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057);
var G__53273_53740 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53274_53741 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53275_53742 = (function (epochs){
return new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(epochs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53272_53739,G__53273_53740,G__53274_53741,G__53275_53742) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53272_53739,G__53273_53740,G__53274_53741,G__53275_53742));
var G__53276_53743 = new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887);
var G__53277_53744 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53278_53745 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__53279_53746 = (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53276_53743,G__53277_53744,G__53278_53745,G__53279_53746) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53276_53743,G__53277_53744,G__53278_53745,G__53279_53746));
var G__53280_53747 = new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579);
var G__53281_53748 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53282_53749 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__53283_53750 = (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53280_53747,G__53281_53748,G__53282_53749,G__53283_53750) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53280_53747,G__53281_53748,G__53282_53749,G__53283_53750));
var G__53284_53751 = new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335);
var G__53285_53752 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53286_53753 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__53287_53754 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53288_53755 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__53289_53756 = (function (p__53290){
var vec__53291 = p__53290;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53291,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53291,(1),null);
return ((((1) < cljs.core.count(ids))) && ((((current == null)) || ((current > cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ids,(0)))))));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53284_53751,G__53285_53752,G__53286_53753,G__53287_53754,G__53288_53755,G__53289_53756) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53284_53751,G__53285_53752,G__53286_53753,G__53287_53754,G__53288_53755,G__53289_53756));
var G__53294_53757 = new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953);
var G__53295_53758 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53296_53759 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__53297_53760 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53298_53761 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__53299_53762 = (function (p__53300){
var vec__53301 = p__53300;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53301,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53301,(1),null);
return ((((1) < cljs.core.count(ids))) && ((!((current == null)))) && ((current < day8.re_frame_10x.utils.utils.last_in_vec(ids))));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53294_53757,G__53295_53758,G__53296_53759,G__53297_53760,G__53298_53761,G__53299_53762) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53294_53757,G__53295_53758,G__53296_53759,G__53297_53760,G__53298_53761,G__53299_53762));
var G__53304_53763 = new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018);
var G__53305_53764 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53306_53765 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53307_53766 = (function (traces){
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(traces,(0));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_epoch,end_of_epoch);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53304_53763,G__53305_53764,G__53306_53765,G__53307_53766) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53304_53763,G__53305_53764,G__53306_53765,G__53307_53766));
var G__53309_53767 = new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473);
var G__53310_53768 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53311_53769 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53312_53770 = (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__53308_SHARP_){
return ((day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_(p1__53308_SHARP_)) || (day8.re_frame_10x.metamorphic.request_animation_frame_end_QMARK_(p1__53308_SHARP_)));
}),traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53309_53767,G__53310_53768,G__53311_53769,G__53312_53770) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53309_53767,G__53310_53768,G__53311_53769,G__53312_53770));
var G__53313_53771 = new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152);
var G__53314_53772 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53315_53773 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__53316_53774 = (function (frame_traces){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,frame_traces));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53313_53771,G__53314_53772,G__53315_53773,G__53316_53774) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53313_53771,G__53314_53772,G__53315_53773,G__53316_53774));
/**
 * Returns the sum of nums. (+) returns nil (not 0 like in cljs.core).
 */
day8.re_frame_10x.subs._PLUS_nil = (function day8$re_frame_10x$subs$_PLUS_nil(var_args){
var G__53321 = arguments.length;
switch (G__53321) {
case 0:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___53776 = arguments.length;
var i__4790__auto___53777 = (0);
while(true){
if((i__4790__auto___53777 < len__4789__auto___53776)){
args_arr__4810__auto__.push((arguments[i__4790__auto___53777]));

var G__53778 = (i__4790__auto___53777 + (1));
i__4790__auto___53777 = G__53778;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (x + y);
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(x + y),more);
}));

/** @this {Function} */
(day8.re_frame_10x.subs._PLUS_nil.cljs$lang$applyTo = (function (seq53318){
var G__53319 = cljs.core.first(seq53318);
var seq53318__$1 = cljs.core.next(seq53318);
var G__53320 = cljs.core.first(seq53318__$1);
var seq53318__$2 = cljs.core.next(seq53318__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53319,G__53320,seq53318__$2);
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$lang$maxFixedArity = (2));

var G__53322_53782 = new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593);
var G__53323_53783 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53324_53784 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__53325_53785 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53326_53786 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53327_53787 = (function (p__53328,p__53329){
var vec__53330 = p__53328;
var af_start_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53330,(0),null);
var epoch_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53330,(1),null);
var vec__53333 = p__53329;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53333,(0),null);
var frame_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53333,(1),null);
var frame_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),af_start_end);
var vec__53336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_pairs,(frame_number - (1)));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53336,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53336,(1),null);
var af_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.metamorphic.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(end)),epoch_traces);
var total_time = day8.re_frame_10x.metamorphic.elapsed_time(start,end);
var subs_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.subscription_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
var render_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.render_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693),total_time,new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226),subs_time,new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151),render_time,new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573),((total_time - subs_time) - render_time)], null);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53322_53782,G__53323_53783,G__53324_53784,G__53325_53785,G__53326_53786,G__53327_53787) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53322_53782,G__53323_53783,G__53324_53784,G__53325_53785,G__53326_53786,G__53327_53787));
var G__53339_53788 = new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297);
var G__53340_53789 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53341_53790 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__53342_53791 = (function (match){
var map__53343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.Keyword(null,"timing","timing",-1849225195));
var map__53343__$1 = (((((!((map__53343 == null))))?(((((map__53343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53343):map__53343);
var event_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53343__$1,new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188));
var event_handler_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53343__$1,new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644));
var event_dofx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53343__$1,new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716));
var event_run_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53343__$1,new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897));
var remaining_interceptors = ((event_time - event_handler_time) - event_dofx_time);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("timing","event-total","timing/event-total",127009054),event_run_time,new cljs.core.Keyword("timing","event-handler","timing/event-handler",383979787),event_handler_time,new cljs.core.Keyword("timing","event-effects","timing/event-effects",-1312815404),event_dofx_time,new cljs.core.Keyword("timing","event-interceptors","timing/event-interceptors",-113832767),remaining_interceptors,new cljs.core.Keyword("timing","event-misc","timing/event-misc",1534165210),((event_run_time - event_handler_time) - event_dofx_time)], null);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53339_53788,G__53340_53789,G__53341_53790,G__53342_53791) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53339_53788,G__53340_53789,G__53341_53790,G__53342_53791));
var G__53345_53795 = new cljs.core.Keyword("timing","render-time","timing/render-time",-2042272059);
var G__53346_53796 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53347_53797 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53348_53798 = (function (traces){
var start_of_render = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,traces));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_render,end_of_epoch);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53345_53795,G__53346_53796,G__53347_53797,G__53348_53798) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53345_53795,G__53346_53796,G__53347_53797,G__53348_53798));
var G__53349_53799 = new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662);
var G__53350_53800 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53351_53801 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53352_53802 = (function (traces){
return (!(cljs.core.empty_QMARK_(traces)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53349_53799,G__53350_53800,G__53351_53801,G__53352_53802) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53349_53799,G__53350_53800,G__53351_53801,G__53352_53802));
var G__53353_53803 = new cljs.core.Keyword("subs","root","subs/root",-432796018);
var G__53354_53804 = (function (db,_){
return new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53353_53803,G__53354_53804) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53353_53803,G__53354_53804));
var G__53355_53805 = new cljs.core.Keyword("subs","all-sub-traces","subs/all-sub-traces",1860573308);
var G__53356_53806 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53357_53807 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53358_53808 = (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.subscription_QMARK_,traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53355_53805,G__53356_53806,G__53357_53807,G__53358_53808) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53355_53805,G__53356_53806,G__53357_53807,G__53358_53808));
var G__53359_53809 = new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687);
var G__53360_53810 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53361_53811 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53362_53812 = (function (epoch){
return new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092).cljs$core$IFn$_invoke$arity$1(epoch);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53359_53809,G__53360_53810,G__53361_53811,G__53362_53812) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53359_53809,G__53360_53810,G__53361_53811,G__53362_53812));
var G__53363_53813 = new cljs.core.Keyword("subs","sub-state","subs/sub-state",-2134091240);
var G__53364_53814 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53365_53815 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53366_53816 = (function (epochs){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(epochs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53363_53813,G__53364_53814,G__53365_53815,G__53366_53816) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53363_53813,G__53364_53814,G__53365_53815,G__53366_53816));
var G__53367_53817 = new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884);
var G__53368_53818 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53369_53819 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__53370_53820 = (function (match_state){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(match_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53367_53817,G__53368_53818,G__53369_53819,G__53370_53820) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53367_53817,G__53368_53818,G__53369_53819,G__53370_53820));
day8.re_frame_10x.subs.string_BANG_ = cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__53371_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__53371_SHARP_)));
})], null),null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),"null",new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),"null",new cljs.core.Keyword("sub","create","sub/create",-1301317560),"null",new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","order","sub/order",-1254825160),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__53372){
return cljs.core.coll_QMARK_(G__53372);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path","sub/path",-188044288),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__53373){
return cljs.core.map_QMARK_(G__53373);
}),(function (G__53373){
return cljs.core.contains_QMARK_(G__53373,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__53373){
return cljs.core.contains_QMARK_(G__53373,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
}),(function (G__53373){
return cljs.core.contains_QMARK_(G__53373,new cljs.core.Keyword(null,"order","order",-1254677256));
}),(function (G__53373){
return cljs.core.contains_QMARK_(G__53373,new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),(function (G__53373){
return cljs.core.contains_QMARK_(G__53373,new cljs.core.Keyword(null,"path-data","path-data",1441254047));
}),(function (G__53373){
return cljs.core.contains_QMARK_(G__53373,new cljs.core.Keyword(null,"path","path",-188191168));
})], null),(function (G__53373){
return ((cljs.core.map_QMARK_(G__53373)) && (cljs.core.contains_QMARK_(G__53373,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__53373,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))) && (cljs.core.contains_QMARK_(G__53373,new cljs.core.Keyword(null,"order","order",-1254677256))) && (cljs.core.contains_QMARK_(G__53373,new cljs.core.Keyword(null,"layer","layer",-1601820589))) && (cljs.core.contains_QMARK_(G__53373,new cljs.core.Keyword(null,"path-data","path-data",1441254047))) && (cljs.core.contains_QMARK_(G__53373,new cljs.core.Keyword(null,"path","path",-188191168))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"path-data","path-data",1441254047),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"order","order",-1254677256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layer","layer",-1601820589))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path-data","path-data",1441254047))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-subs","subs/view-subs",253084832),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__53374){
return cljs.core.coll_QMARK_(G__53374);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057))], null),null));
day8.re_frame_10x.subs.sub_type_value = (function day8$re_frame_10x$subs$sub_type_value(sub_type){
var G__53375 = sub_type;
var G__53375__$1 = (((G__53375 instanceof cljs.core.Keyword))?G__53375.fqn:null);
switch (G__53375__$1) {
case "sub/create":
return (5);

break;
case "sub/run":
return (4);

break;
case "sub/dispose":
return (3);

break;
case "sub/not-run":
return (2);

break;
default:
return (1);

}
});
/**
 * Calculate a sorting value for a series of subscription trace types.
 */
day8.re_frame_10x.subs.accumulate_sub_value = (function day8$re_frame_10x$subs$accumulate_sub_value(order){
var exp = (3);
var total = (0);
var order__$1 = order;
while(true){
var temp__5733__auto__ = cljs.core.first(order__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var sub_type = temp__5733__auto__;
var G__53822 = (exp - (1));
var G__53823 = (total + (day8.re_frame_10x.subs.sub_type_value(sub_type) * Math.pow((10),exp)));
var G__53824 = cljs.core.rest(order__$1);
exp = G__53822;
total = G__53823;
order__$1 = G__53824;
continue;
} else {
return total;
}
break;
}
});
day8.re_frame_10x.subs.accumulate_sub_value_memoized = cljs.core.memoize(day8.re_frame_10x.subs.accumulate_sub_value);
day8.re_frame_10x.subs.sub_sort_val = (function day8$re_frame_10x$subs$sub_sort_val(order_x,order_y){
return cljs.core.compare(day8.re_frame_10x.subs.accumulate_sub_value_memoized(order_y),day8.re_frame_10x.subs.accumulate_sub_value_memoized(order_x));
});
day8.re_frame_10x.subs.sub_op_type__GT_type = (function day8$re_frame_10x$subs$sub_op_type__GT_type(t){
var G__53378 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(t);
var G__53378__$1 = (((G__53378 instanceof cljs.core.Keyword))?G__53378.fqn:null);
switch (G__53378__$1) {
case "sub/create":
return new cljs.core.Keyword(null,"created","created",-704993748);

break;
case "sub/run":
return new cljs.core.Keyword(null,"re-run","re-run",-1300247905);

break;
case "sub/dispose":
return new cljs.core.Keyword(null,"destroyed","destroyed",-427566535);

break;
default:
return new cljs.core.Keyword(null,"not-run","not-run",-848069371);

}
});
/**
 * Returns sub info prepared for rendering in pods
 */
day8.re_frame_10x.subs.prepare_pod_info = (function day8$re_frame_10x$subs$prepare_pod_info(p__53379,p__53380){
var vec__53385 = p__53379;
var sub_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53385,(0),null);
var sub_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53385,(1),null);
var vec__53388 = p__53380;
var subscription = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53388,(0),null);
var remove_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944)))?(function (me){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val(me)) == null);
}):cljs.core.constantly(false));
var subx = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame_10x.subs.sub_sort_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (me){
var state = cljs.core.val(me);
var subscription__$1 = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(state);
var sub = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(me),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),cljs.core.key(me),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sub_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(subscription__$1),new cljs.core.Keyword(null,"layer","layer",-1601820589)], null)),new cljs.core.Keyword(null,"path-data","path-data",1441254047),subscription__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subscription__$1], 0)),new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451)], null);
}
})(),new cljs.core.Keyword("sub","traits","sub/traits",1778340671),new cljs.core.Keyword("sub","traits","sub/traits",1778340671).cljs$core$IFn$_invoke$arity$1(state)], null);
var sub__$1 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"value","value",305978217)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(state)):sub);
var sub__$2 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub__$1,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677).cljs$core$IFn$_invoke$arity$1(state)):sub__$1);
return sub__$2;
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_fn,sub_state)));
return subx;
});
var G__53391_53826 = new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033);
var G__53392_53827 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53393_53828 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__53394_53829 = (function (sub_state){
return new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164).cljs$core$IFn$_invoke$arity$1(sub_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53391_53826,G__53392_53827,G__53393_53828,G__53394_53829) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53391_53826,G__53392_53827,G__53393_53828,G__53394_53829));
var G__53395_53830 = new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938);
var G__53396_53831 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53397_53832 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__53398_53833 = (function (sub_state){
return new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(sub_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53395_53830,G__53396_53831,G__53397_53832,G__53398_53833) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53395_53830,G__53396_53831,G__53397_53832,G__53398_53833));
var G__53399_53834 = new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944);
var G__53400_53835 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53401_53836 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__53402_53837 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53403_53838 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033)], null);
var G__53404_53839 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53399_53834,G__53400_53835,G__53401_53836,G__53402_53837,G__53403_53838,G__53404_53839) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53399_53834,G__53400_53835,G__53401_53836,G__53402_53837,G__53403_53838,G__53404_53839));
var G__53406_53840 = new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325);
var G__53407_53841 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53408_53842 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__53409_53843 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53410_53844 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938)], null);
var G__53411_53845 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53406_53840,G__53407_53841,G__53408_53842,G__53409_53843,G__53410_53844,G__53411_53845) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53406_53840,G__53407_53841,G__53408_53842,G__53409_53843,G__53410_53844,G__53411_53845));
var G__53412_53846 = new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754);
var G__53413_53847 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53414_53848 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__53415_53849 = (function (root,_){
return new cljs.core.Keyword(null,"filter-str","filter-str",1974484789).cljs$core$IFn$_invoke$arity$1(root);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53412_53846,G__53413_53847,G__53414_53848,G__53415_53849) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53412_53846,G__53413_53847,G__53414_53848,G__53415_53849));
var G__53416_53850 = new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862);
var G__53417_53851 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53418_53852 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__53419_53853 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53420_53854 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704)], null);
var G__53421_53855 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53422_53856 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754)], null);
var G__53423_53857 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53424_53858 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647)], null);
var G__53425_53859 = (function (p__53426){
var vec__53427 = p__53426;
var all_subs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53427,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53427,(1),null);
var filter_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53427,(2),null);
var pins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53427,(3),null);
var compare_fn = (function (s1,s2){
var p1 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
var p2 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s2),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1,p2)){
return cljs.core.compare(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s2));
} else {
return p1;
}
});
var G__53434 = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(compare_fn,all_subs);
var G__53434__$1 = (cljs.core.truth_(ignore_unchanged_l2_QMARK_)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,G__53434):G__53434);
if(cljs.core.truth_(cljs.core.not_empty(filter_str))){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__53439){
var map__53440 = p__53439;
var map__53440__$1 = (((((!((map__53440 == null))))?(((((map__53440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53440):map__53440);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53440__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53440__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var or__4185__auto__ = clojure.string.includes_QMARK_(path,filter_str);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null));
}
}),G__53434__$1);
} else {
return G__53434__$1;
}
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10(G__53416_53850,G__53417_53851,G__53418_53852,G__53419_53853,G__53420_53854,G__53421_53855,G__53422_53856,G__53423_53857,G__53424_53858,G__53425_53859) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53416_53850,G__53417_53851,G__53418_53852,G__53419_53853,G__53420_53854,G__53421_53855,G__53422_53856,G__53423_53857,G__53424_53858,G__53425_53859));
var G__53446_53862 = new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284);
var G__53447_53863 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53448_53864 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862)], null);
var G__53449_53865 = (function (subs,_){
return cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subs], 0)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53446_53862,G__53447_53863,G__53448_53864,G__53449_53865) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53446_53862,G__53447_53863,G__53448_53864,G__53449_53865));
var G__53450_53868 = new cljs.core.Keyword("subs","created-count","subs/created-count",-1738545579);
var G__53451_53869 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53452_53870 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__53453_53871 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53450_53868,G__53451_53869,G__53452_53870,G__53453_53871) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53450_53868,G__53451_53869,G__53452_53870,G__53453_53871));
var G__53454_53872 = new cljs.core.Keyword("subs","re-run-count","subs/re-run-count",603750522);
var G__53455_53873 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53456_53874 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__53457_53875 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53454_53872,G__53455_53873,G__53456_53874,G__53457_53875) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53454_53872,G__53455_53873,G__53456_53874,G__53457_53875));
var G__53458_53876 = new cljs.core.Keyword("subs","destroyed-count","subs/destroyed-count",-218890338);
var G__53459_53877 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53460_53878 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__53461_53879 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53458_53876,G__53459_53877,G__53460_53878,G__53461_53879) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53458_53876,G__53459_53877,G__53460_53878,G__53461_53879));
var G__53462_53880 = new cljs.core.Keyword("subs","not-run-count","subs/not-run-count",-133338676);
var G__53463_53881 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53464_53882 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__53465_53883 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53462_53880,G__53463_53881,G__53464_53882,G__53465_53883) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53462_53880,G__53463_53881,G__53464_53882,G__53465_53883));
var G__53466_53884 = new cljs.core.Keyword("subs","unchanged-l2-subs-count","subs/unchanged-l2-subs-count",-1997261328);
var G__53467_53885 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53468_53886 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__53469_53887 = (function (subs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,subs));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53466_53884,G__53467_53885,G__53468_53886,G__53469_53887) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53466_53884,G__53467_53885,G__53468_53886,G__53469_53887));
var G__53470_53888 = new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704);
var G__53471_53889 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53472_53890 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__53473_53891 = (function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53470_53888,G__53471_53889,G__53472_53890,G__53473_53891) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53470_53888,G__53471_53889,G__53472_53890,G__53473_53891));
var G__53474_53893 = new cljs.core.Keyword("subs","sub-expansions","subs/sub-expansions",-547974030);
var G__53475_53894 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53476_53895 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__53477_53896 = (function (subs,_){
return new cljs.core.Keyword(null,"expansions","expansions",533713877).cljs$core$IFn$_invoke$arity$1(subs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53474_53893,G__53475_53894,G__53476_53895,G__53477_53896) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53474_53893,G__53475_53894,G__53476_53895,G__53477_53896));
var G__53478_53898 = new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647);
var G__53479_53899 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53480_53900 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__53481_53901 = (function (subs,_){
return new cljs.core.Keyword(null,"pinned","pinned",-1216085339).cljs$core$IFn$_invoke$arity$1(subs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53478_53898,G__53479_53899,G__53480_53900,G__53481_53901) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53478_53898,G__53479_53899,G__53480_53900,G__53481_53901));
var G__53482_53902 = new cljs.core.Keyword("code","root","code/root",-432838104);
var G__53483_53903 = (function (db,_){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53482_53902,G__53483_53903) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53482_53902,G__53483_53903));
var G__53484_53904 = new cljs.core.Keyword("code","current-code","code/current-code",17389180);
var G__53485_53905 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53486_53906 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53487_53907 = (function (traces,_){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,trace){
var temp__5739__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null));
if((temp__5739__auto__ == null)){
return null;
} else {
var code = temp__5739__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"trace-id","trace-id",681947249),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)], 0)),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i__$1,code__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(code__$1,new cljs.core.Keyword(null,"id","id",-1388402092),i__$1);
}),code)),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
}
}),traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53484_53904,G__53485_53905,G__53486_53906,G__53487_53907) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53484_53904,G__53485_53905,G__53486_53906,G__53487_53907));
var G__53488_53912 = new cljs.core.Keyword("code","current-form","code/current-form",1888662531);
var G__53489_53913 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53490_53914 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-code","code/current-code",17389180)], null);
var G__53491_53915 = (function (code,_){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first(code));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53488_53912,G__53489_53913,G__53490_53914,G__53491_53915) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53488_53912,G__53489_53913,G__53490_53914,G__53491_53915));
var G__53492_53916 = new cljs.core.Keyword("code","current-zprint-form","code/current-zprint-form",-1297458353);
var G__53493_53917 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53494_53918 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-form","code/current-form",1888662531)], null);
var G__53495_53919 = (function (form,_){
return zprint.core.zprint_str(form);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53492_53916,G__53493_53917,G__53494_53918,G__53495_53919) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53492_53916,G__53493_53917,G__53494_53918,G__53495_53919));
var G__53496_53920 = new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779);
var G__53497_53921 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53498_53922 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__53499_53923 = (function (code,_){
return new cljs.core.Keyword(null,"code-open?","code-open?",1228336744).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53496_53920,G__53497_53921,G__53498_53922,G__53499_53923) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53496_53920,G__53497_53921,G__53498_53922,G__53499_53923));
var G__53500_53924 = new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614);
var G__53501_53925 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53502_53926 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__53503_53927 = (function (code,_){
return new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53500_53924,G__53501_53925,G__53502_53926,G__53503_53927) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53500_53924,G__53501_53925,G__53502_53926,G__53503_53927));
var G__53507_53928 = new cljs.core.Keyword("code","show-all-code?","code/show-all-code?",162236201);
var G__53508_53929 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53509_53930 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__53510_53931 = (function (code,_){
return new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53507_53928,G__53508_53929,G__53509_53930,G__53510_53931) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53507_53928,G__53508_53929,G__53509_53930,G__53510_53931));
var G__53511_53932 = new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495);
var G__53512_53933 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53513_53934 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__53514_53935 = (function (code,_){
return new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53511_53932,G__53512_53933,G__53513_53934,G__53514_53935) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53511_53932,G__53512_53933,G__53513_53934,G__53514_53935));
day8.re_frame_10x.subs.canvas = document.createElement("canvas");
var G__53515_53936 = new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647);
var G__53516_53937 = (function (_,___$1){
var context = day8.re_frame_10x.subs.canvas.getContext("2d");
(context.font = "monospace 1em");

return context.measureText("T").width;
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53515_53936,G__53516_53937) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53515_53936,G__53516_53937));
var G__53517_53938 = new cljs.core.Keyword("code","max-column-width","code/max-column-width",1552872919);
var G__53518_53939 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53519_53940 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629),(100)], null);
var G__53520_53941 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53521_53942 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647)], null);
var G__53522_53943 = (function (p__53525,_){
var vec__53526 = p__53525;
var window_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53526,(0),null);
var char_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53526,(1),null);
var G__53529 = (window_width / char_width);
return Math.ceil(G__53529);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53517_53938,G__53518_53939,G__53519_53940,G__53520_53941,G__53521_53942,G__53522_53943) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53517_53938,G__53518_53939,G__53519_53940,G__53520_53941,G__53521_53942,G__53522_53943));
var G__53530_53946 = new cljs.core.Keyword("component","root","component/root",-1714299688);
var G__53531_53947 = (function (db,_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53530_53946,G__53531_53947) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53530_53946,G__53531_53947));
var G__53532_53948 = new cljs.core.Keyword("component","direction","component/direction",785553634);
var G__53533_53949 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53534_53950 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","root","component/root",-1714299688)], null);
var G__53535_53951 = (function (component,_){
return new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(component);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53532_53948,G__53533_53949,G__53534_53950,G__53535_53951) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53532_53948,G__53533_53949,G__53534_53950,G__53535_53951));
var G__53540_53952 = new cljs.core.Keyword("errors","root","errors/root",-1902924890);
var G__53541_53953 = (function (db,_){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53540_53952,G__53541_53953) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53540_53952,G__53541_53953));
var G__53542_53960 = new cljs.core.Keyword("errors","popup-failed?","errors/popup-failed?",-600155433);
var G__53543_53961 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53544_53962 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","root","errors/root",-1902924890)], null);
var G__53545_53963 = (function (errors,_){
return new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682).cljs$core$IFn$_invoke$arity$1(errors);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53542_53960,G__53543_53961,G__53544_53962,G__53545_53963) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53542_53960,G__53543_53961,G__53544_53962,G__53545_53963));
var G__53550_53964 = new cljs.core.Keyword("history","showing-history?","history/showing-history?",896856376);
var G__53551_53965 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"showing-history?","showing-history?",2100610492)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53550_53964,G__53551_53965) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__53550_53964,G__53551_53965));

//# sourceMappingURL=day8.re_frame_10x.subs.js.map
