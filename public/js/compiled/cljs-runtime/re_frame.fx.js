goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__52828 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52829 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52829);

try{try{var seq__52830 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52831 = null;
var count__52832 = (0);
var i__52833 = (0);
while(true){
if((i__52833 < count__52832)){
var vec__52840 = chunk__52831.cljs$core$IIndexed$_nth$arity$2(null,i__52833);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52840,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52840,(1),null);
var temp__5733__auto___52891 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52891)){
var effect_fn_52892 = temp__5733__auto___52891;
(effect_fn_52892.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52892.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52892.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52893 = seq__52830;
var G__52894 = chunk__52831;
var G__52895 = count__52832;
var G__52896 = (i__52833 + (1));
seq__52830 = G__52893;
chunk__52831 = G__52894;
count__52832 = G__52895;
i__52833 = G__52896;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52830);
if(temp__5735__auto__){
var seq__52830__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52830__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52830__$1);
var G__52897 = cljs.core.chunk_rest(seq__52830__$1);
var G__52898 = c__4609__auto__;
var G__52899 = cljs.core.count(c__4609__auto__);
var G__52900 = (0);
seq__52830 = G__52897;
chunk__52831 = G__52898;
count__52832 = G__52899;
i__52833 = G__52900;
continue;
} else {
var vec__52844 = cljs.core.first(seq__52830__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52844,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52844,(1),null);
var temp__5733__auto___52901 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52901)){
var effect_fn_52902 = temp__5733__auto___52901;
(effect_fn_52902.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52902.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52902.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52903 = cljs.core.next(seq__52830__$1);
var G__52904 = null;
var G__52905 = (0);
var G__52906 = (0);
seq__52830 = G__52903;
chunk__52831 = G__52904;
count__52832 = G__52905;
i__52833 = G__52906;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__52564__auto___52915 = re_frame.interop.now();
var duration__52565__auto___52916 = (end__52564__auto___52915 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52565__auto___52916,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__52564__auto___52915);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52828);
}} else {
var seq__52847 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52848 = null;
var count__52849 = (0);
var i__52850 = (0);
while(true){
if((i__52850 < count__52849)){
var vec__52857 = chunk__52848.cljs$core$IIndexed$_nth$arity$2(null,i__52850);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52857,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52857,(1),null);
var temp__5733__auto___52917 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52917)){
var effect_fn_52918 = temp__5733__auto___52917;
(effect_fn_52918.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52918.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52918.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52919 = seq__52847;
var G__52920 = chunk__52848;
var G__52921 = count__52849;
var G__52922 = (i__52850 + (1));
seq__52847 = G__52919;
chunk__52848 = G__52920;
count__52849 = G__52921;
i__52850 = G__52922;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52847);
if(temp__5735__auto__){
var seq__52847__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52847__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52847__$1);
var G__52923 = cljs.core.chunk_rest(seq__52847__$1);
var G__52924 = c__4609__auto__;
var G__52925 = cljs.core.count(c__4609__auto__);
var G__52926 = (0);
seq__52847 = G__52923;
chunk__52848 = G__52924;
count__52849 = G__52925;
i__52850 = G__52926;
continue;
} else {
var vec__52860 = cljs.core.first(seq__52847__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52860,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52860,(1),null);
var temp__5733__auto___52927 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52927)){
var effect_fn_52928 = temp__5733__auto___52927;
(effect_fn_52928.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52928.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52928.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52929 = cljs.core.next(seq__52847__$1);
var G__52930 = null;
var G__52931 = (0);
var G__52932 = (0);
seq__52847 = G__52929;
chunk__52848 = G__52930;
count__52849 = G__52931;
i__52850 = G__52932;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__52863 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52864 = null;
var count__52865 = (0);
var i__52866 = (0);
while(true){
if((i__52866 < count__52865)){
var map__52872 = chunk__52864.cljs$core$IIndexed$_nth$arity$2(null,i__52866);
var map__52872__$1 = (((((!((map__52872 == null))))?(((((map__52872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52872):map__52872);
var effect = map__52872__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52872__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52872__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52863,chunk__52864,count__52865,i__52866,map__52872,map__52872__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52863,chunk__52864,count__52865,i__52866,map__52872,map__52872__$1,effect,ms,dispatch))
,ms);
}


var G__52933 = seq__52863;
var G__52934 = chunk__52864;
var G__52935 = count__52865;
var G__52936 = (i__52866 + (1));
seq__52863 = G__52933;
chunk__52864 = G__52934;
count__52865 = G__52935;
i__52866 = G__52936;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52863);
if(temp__5735__auto__){
var seq__52863__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52863__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52863__$1);
var G__52937 = cljs.core.chunk_rest(seq__52863__$1);
var G__52938 = c__4609__auto__;
var G__52939 = cljs.core.count(c__4609__auto__);
var G__52940 = (0);
seq__52863 = G__52937;
chunk__52864 = G__52938;
count__52865 = G__52939;
i__52866 = G__52940;
continue;
} else {
var map__52874 = cljs.core.first(seq__52863__$1);
var map__52874__$1 = (((((!((map__52874 == null))))?(((((map__52874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52874):map__52874);
var effect = map__52874__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52874__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52874__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52863,chunk__52864,count__52865,i__52866,map__52874,map__52874__$1,effect,ms,dispatch,seq__52863__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52863,chunk__52864,count__52865,i__52866,map__52874,map__52874__$1,effect,ms,dispatch,seq__52863__$1,temp__5735__auto__))
,ms);
}


var G__52941 = cljs.core.next(seq__52863__$1);
var G__52942 = null;
var G__52943 = (0);
var G__52944 = (0);
seq__52863 = G__52941;
chunk__52864 = G__52942;
count__52865 = G__52943;
i__52866 = G__52944;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__52876 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52877 = null;
var count__52878 = (0);
var i__52879 = (0);
while(true){
if((i__52879 < count__52878)){
var event = chunk__52877.cljs$core$IIndexed$_nth$arity$2(null,i__52879);
re_frame.router.dispatch(event);


var G__52945 = seq__52876;
var G__52946 = chunk__52877;
var G__52947 = count__52878;
var G__52948 = (i__52879 + (1));
seq__52876 = G__52945;
chunk__52877 = G__52946;
count__52878 = G__52947;
i__52879 = G__52948;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52876);
if(temp__5735__auto__){
var seq__52876__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52876__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52876__$1);
var G__52949 = cljs.core.chunk_rest(seq__52876__$1);
var G__52950 = c__4609__auto__;
var G__52951 = cljs.core.count(c__4609__auto__);
var G__52952 = (0);
seq__52876 = G__52949;
chunk__52877 = G__52950;
count__52878 = G__52951;
i__52879 = G__52952;
continue;
} else {
var event = cljs.core.first(seq__52876__$1);
re_frame.router.dispatch(event);


var G__52953 = cljs.core.next(seq__52876__$1);
var G__52954 = null;
var G__52955 = (0);
var G__52956 = (0);
seq__52876 = G__52953;
chunk__52877 = G__52954;
count__52878 = G__52955;
i__52879 = G__52956;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__52883 = cljs.core.seq(value);
var chunk__52884 = null;
var count__52885 = (0);
var i__52886 = (0);
while(true){
if((i__52886 < count__52885)){
var event = chunk__52884.cljs$core$IIndexed$_nth$arity$2(null,i__52886);
clear_event(event);


var G__52957 = seq__52883;
var G__52958 = chunk__52884;
var G__52959 = count__52885;
var G__52960 = (i__52886 + (1));
seq__52883 = G__52957;
chunk__52884 = G__52958;
count__52885 = G__52959;
i__52886 = G__52960;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52883);
if(temp__5735__auto__){
var seq__52883__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52883__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52883__$1);
var G__52961 = cljs.core.chunk_rest(seq__52883__$1);
var G__52962 = c__4609__auto__;
var G__52963 = cljs.core.count(c__4609__auto__);
var G__52964 = (0);
seq__52883 = G__52961;
chunk__52884 = G__52962;
count__52885 = G__52963;
i__52886 = G__52964;
continue;
} else {
var event = cljs.core.first(seq__52883__$1);
clear_event(event);


var G__52965 = cljs.core.next(seq__52883__$1);
var G__52966 = null;
var G__52967 = (0);
var G__52968 = (0);
seq__52883 = G__52965;
chunk__52884 = G__52966;
count__52885 = G__52967;
i__52886 = G__52968;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
