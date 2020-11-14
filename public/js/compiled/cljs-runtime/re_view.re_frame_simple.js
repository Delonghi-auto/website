goog.provide('re_view.re_frame_simple');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_frame.db');
goog.require('reagent.ratom');
var G__59978_60095 = new cljs.core.Keyword(null,"get","get",1683182755);
var G__59979_60096 = (function (db,p__59981){
var vec__59982 = p__59981;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59982,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59982,(1),null);
var not_found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59982,(2),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(db,key,not_found);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__59978_60095,G__59979_60096) : re_frame.core.reg_sub.call(null,G__59978_60095,G__59979_60096));
var G__59985_60097 = new cljs.core.Keyword(null,"get-in","get-in",688791704);
var G__59986_60098 = (function (p__59988){
var vec__59989 = p__59988;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59989,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59989,(1),null);
if((cljs.core.count(path) <= (1))){
return re_frame.db.app_db;
} else {
var G__59992 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-in","get-in",688791704),cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(path)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__59992) : re_frame.core.subscribe.call(null,G__59992));
}
});
var G__59987_60099 = (function (parent,p__59995){
var vec__59996 = p__59995;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59996,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59996,(1),null);
if(cljs.core.empty_QMARK_(path)){
return parent;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(parent,cljs.core.last(path));
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__59985_60097,G__59986_60098,G__59987_60099) : re_frame.core.reg_sub.call(null,G__59985_60097,G__59986_60098,G__59987_60099));
var G__59999_60100 = new cljs.core.Keyword(null,"identity","identity",1647396035);
var G__60000_60101 = (function (db,p__60002){
var vec__60003 = p__60002;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60003,(0),null);
return db;
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__59999_60100,G__60000_60101) : re_frame.core.reg_sub.call(null,G__59999_60100,G__60000_60101));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),(function (db,p__60015){
var vec__60017 = p__60015;
var seq__60018 = cljs.core.seq(vec__60017);
var first__60019 = cljs.core.first(seq__60018);
var seq__60018__$1 = cljs.core.next(seq__60018);
var _ = first__60019;
var first__60019__$1 = cljs.core.first(seq__60018__$1);
var seq__60018__$2 = cljs.core.next(seq__60018__$1);
var key = first__60019__$1;
var first__60019__$2 = cljs.core.first(seq__60018__$2);
var seq__60018__$3 = cljs.core.next(seq__60018__$2);
var f = first__60019__$2;
var args = seq__60018__$3;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,db,key,f,args);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-in","update-in",1208918828),(function (db,p__60032){
var vec__60033 = p__60032;
var seq__60034 = cljs.core.seq(vec__60033);
var first__60035 = cljs.core.first(seq__60034);
var seq__60034__$1 = cljs.core.next(seq__60034);
var _ = first__60035;
var first__60035__$1 = cljs.core.first(seq__60034__$1);
var seq__60034__$2 = cljs.core.next(seq__60034__$1);
var path = first__60035__$1;
var first__60035__$2 = cljs.core.first(seq__60034__$2);
var seq__60034__$3 = cljs.core.next(seq__60034__$2);
var f = first__60035__$2;
var args = seq__60034__$3;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,db,path,f,args);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"assoc","assoc",430908853),(function (db,p__60037){
var vec__60039 = p__60037;
var seq__60040 = cljs.core.seq(vec__60039);
var first__60041 = cljs.core.first(seq__60040);
var seq__60040__$1 = cljs.core.next(seq__60040);
var _ = first__60041;
var keyvals = seq__60040__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,db,keyvals);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),(function (db,p__60042){
var vec__60043 = p__60042;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60043,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60043,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60043,(2),null);
return cljs.core.assoc_in(db,path,value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"swap","swap",228675637),(function (db,p__60046){
var vec__60047 = p__60046;
var seq__60048 = cljs.core.seq(vec__60047);
var first__60049 = cljs.core.first(seq__60048);
var seq__60048__$1 = cljs.core.next(seq__60048);
var _ = first__60049;
var args = seq__60048__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,db,args);
}));
re_view.re_frame_simple._STAR_in_query_QMARK__STAR_ = false;
/**
 * Read a value from db by `key`, not-found or nil if value not present.
 */
re_view.re_frame_simple.get = (function re_view$re_frame_simple$get(var_args){
var G__60051 = arguments.length;
switch (G__60051) {
case 1:
return re_view.re_frame_simple.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_view.re_frame_simple.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_view.re_frame_simple.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
if(re_view.re_frame_simple._STAR_in_query_QMARK__STAR_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.db.app_db),key);
} else {
return cljs.core.deref((function (){var G__60052 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1683182755),key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__60052) : re_frame.core.subscribe.call(null,G__60052));
})());
}
}));

(re_view.re_frame_simple.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
if(re_view.re_frame_simple._STAR_in_query_QMARK__STAR_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(re_frame.db.app_db),key,not_found);
} else {
return cljs.core.deref((function (){var G__60053 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1683182755),key,not_found], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__60053) : re_frame.core.subscribe.call(null,G__60053));
})());
}
}));

(re_view.re_frame_simple.get.cljs$lang$maxFixedArity = 2);

/**
 * Read a value from db by `path`, not-found or nil if value not present.
 */
re_view.re_frame_simple.get_in = (function re_view$re_frame_simple$get_in(var_args){
var G__60058 = arguments.length;
switch (G__60058) {
case 1:
return re_view.re_frame_simple.get_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_view.re_frame_simple.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_view.re_frame_simple.get_in.cljs$core$IFn$_invoke$arity$1 = (function (path){
if(re_view.re_frame_simple._STAR_in_query_QMARK__STAR_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.db.app_db),path);
} else {
return cljs.core.deref((function (){var G__60062 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-in","get-in",688791704),path], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__60062) : re_frame.core.subscribe.call(null,G__60062));
})());
}
}));

(re_view.re_frame_simple.get_in.cljs$core$IFn$_invoke$arity$2 = (function (path,not_found){
if(re_view.re_frame_simple._STAR_in_query_QMARK__STAR_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(re_frame.db.app_db),path,not_found);
} else {
return cljs.core.deref((function (){var G__60063 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-in","get-in",688791704),path,not_found], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__60063) : re_frame.core.subscribe.call(null,G__60063));
})());
}
}));

(re_view.re_frame_simple.get_in.cljs$lang$maxFixedArity = 2);

/**
 * Return current value of db
 */
re_view.re_frame_simple.identity = (function re_view$re_frame_simple$identity(){
if(re_view.re_frame_simple._STAR_in_query_QMARK__STAR_){
return cljs.core.deref(re_frame.db.app_db);
} else {
return cljs.core.deref((function (){var G__60064 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"identity","identity",1647396035)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__60064) : re_frame.core.subscribe.call(null,G__60064));
})());
}
});
/**
 * Applies update to db with args
 */
re_view.re_frame_simple.update_BANG_ = (function re_view$re_frame_simple$update_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___60107 = arguments.length;
var i__4790__auto___60108 = (0);
while(true){
if((i__4790__auto___60108 < len__4789__auto___60107)){
args__4795__auto__.push((arguments[i__4790__auto___60108]));

var G__60109 = (i__4790__auto___60108 + (1));
i__4790__auto___60108 = G__60109;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return re_view.re_frame_simple.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(re_view.re_frame_simple.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__60069 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396)], null),args);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60069) : re_frame.core.dispatch.call(null,G__60069));
}));

(re_view.re_frame_simple.update_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_view.re_frame_simple.update_BANG_.cljs$lang$applyTo = (function (seq60068){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60068));
}));

/**
 * Applies update-in to db with args
 */
re_view.re_frame_simple.update_in_BANG_ = (function re_view$re_frame_simple$update_in_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___60110 = arguments.length;
var i__4790__auto___60111 = (0);
while(true){
if((i__4790__auto___60111 < len__4789__auto___60110)){
args__4795__auto__.push((arguments[i__4790__auto___60111]));

var G__60112 = (i__4790__auto___60111 + (1));
i__4790__auto___60111 = G__60112;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return re_view.re_frame_simple.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(re_view.re_frame_simple.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__60072 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-in","update-in",1208918828)], null),args);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60072) : re_frame.core.dispatch.call(null,G__60072));
}));

(re_view.re_frame_simple.update_in_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_view.re_frame_simple.update_in_BANG_.cljs$lang$applyTo = (function (seq60071){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60071));
}));

/**
 * Applies assoc to db with args
 */
re_view.re_frame_simple.assoc_BANG_ = (function re_view$re_frame_simple$assoc_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___60113 = arguments.length;
var i__4790__auto___60114 = (0);
while(true){
if((i__4790__auto___60114 < len__4789__auto___60113)){
args__4795__auto__.push((arguments[i__4790__auto___60114]));

var G__60115 = (i__4790__auto___60114 + (1));
i__4790__auto___60114 = G__60115;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return re_view.re_frame_simple.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(re_view.re_frame_simple.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__60083 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc","assoc",430908853)], null),args);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60083) : re_frame.core.dispatch.call(null,G__60083));
}));

(re_view.re_frame_simple.assoc_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_view.re_frame_simple.assoc_BANG_.cljs$lang$applyTo = (function (seq60082){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60082));
}));

/**
 * Applies assoc-in to db with args
 */
re_view.re_frame_simple.assoc_in_BANG_ = (function re_view$re_frame_simple$assoc_in_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___60116 = arguments.length;
var i__4790__auto___60122 = (0);
while(true){
if((i__4790__auto___60122 < len__4789__auto___60116)){
args__4795__auto__.push((arguments[i__4790__auto___60122]));

var G__60123 = (i__4790__auto___60122 + (1));
i__4790__auto___60122 = G__60123;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return re_view.re_frame_simple.assoc_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(re_view.re_frame_simple.assoc_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__60085 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270)], null),args);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60085) : re_frame.core.dispatch.call(null,G__60085));
}));

(re_view.re_frame_simple.assoc_in_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_view.re_frame_simple.assoc_in_BANG_.cljs$lang$applyTo = (function (seq60084){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60084));
}));

/**
 * Applies swap! to db with args.
 */
re_view.re_frame_simple.swap_BANG_ = (function re_view$re_frame_simple$swap_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___60124 = arguments.length;
var i__4790__auto___60125 = (0);
while(true){
if((i__4790__auto___60125 < len__4789__auto___60124)){
args__4795__auto__.push((arguments[i__4790__auto___60125]));

var G__60135 = (i__4790__auto___60125 + (1));
i__4790__auto___60125 = G__60135;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return re_view.re_frame_simple.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(re_view.re_frame_simple.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__60087 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swap","swap",228675637)], null),args);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60087) : re_frame.core.dispatch.call(null,G__60087));
}));

(re_view.re_frame_simple.swap_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_view.re_frame_simple.swap_BANG_.cljs$lang$applyTo = (function (seq60086){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60086));
}));

/**
 * Dispatch a re-frame event.
 */
re_view.re_frame_simple.dispatch = re_frame.core.dispatch;
/**
 * Synchronous version of `dispatch`
 */
re_view.re_frame_simple.dispatch_sync = re_frame.core.dispatch_sync;

//# sourceMappingURL=re_view.re_frame_simple.js.map
