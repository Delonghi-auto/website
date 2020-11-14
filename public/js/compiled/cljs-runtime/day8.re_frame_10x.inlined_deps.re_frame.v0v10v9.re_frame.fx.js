goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.registrar/kinds kind)"));
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,id,handler);
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__47802 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__47803 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__47803);

try{try{var seq__47806 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47807 = null;
var count__47808 = (0);
var i__47809 = (0);
while(true){
if((i__47809 < count__47808)){
var vec__47817 = chunk__47807.cljs$core$IIndexed$_nth$arity$2(null,i__47809);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47817,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47817,(1),null);
var temp__5733__auto___47869 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47869)){
var effect_fn_47870 = temp__5733__auto___47869;
(effect_fn_47870.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47870.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47870.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47871 = seq__47806;
var G__47872 = chunk__47807;
var G__47873 = count__47808;
var G__47874 = (i__47809 + (1));
seq__47806 = G__47871;
chunk__47807 = G__47872;
count__47808 = G__47873;
i__47809 = G__47874;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47806);
if(temp__5735__auto__){
var seq__47806__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47806__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47806__$1);
var G__47876 = cljs.core.chunk_rest(seq__47806__$1);
var G__47877 = c__4609__auto__;
var G__47878 = cljs.core.count(c__4609__auto__);
var G__47879 = (0);
seq__47806 = G__47876;
chunk__47807 = G__47877;
count__47808 = G__47878;
i__47809 = G__47879;
continue;
} else {
var vec__47820 = cljs.core.first(seq__47806__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47820,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47820,(1),null);
var temp__5733__auto___47880 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47880)){
var effect_fn_47881 = temp__5733__auto___47880;
(effect_fn_47881.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47881.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47881.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47884 = cljs.core.next(seq__47806__$1);
var G__47885 = null;
var G__47886 = (0);
var G__47887 = (0);
seq__47806 = G__47884;
chunk__47807 = G__47885;
count__47808 = G__47886;
i__47809 = G__47887;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_()){
var end__47536__auto___47888 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now();
var duration__47537__auto___47889 = (end__47536__auto___47888 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__47537__auto___47889,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.run_tracing_callbacks_BANG_(end__47536__auto___47888);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__47802);
}} else {
var seq__47824 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47825 = null;
var count__47826 = (0);
var i__47827 = (0);
while(true){
if((i__47827 < count__47826)){
var vec__47837 = chunk__47825.cljs$core$IIndexed$_nth$arity$2(null,i__47827);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47837,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47837,(1),null);
var temp__5733__auto___47890 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47890)){
var effect_fn_47891 = temp__5733__auto___47890;
(effect_fn_47891.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47891.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47891.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47892 = seq__47824;
var G__47893 = chunk__47825;
var G__47894 = count__47826;
var G__47895 = (i__47827 + (1));
seq__47824 = G__47892;
chunk__47825 = G__47893;
count__47826 = G__47894;
i__47827 = G__47895;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47824);
if(temp__5735__auto__){
var seq__47824__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47824__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47824__$1);
var G__47896 = cljs.core.chunk_rest(seq__47824__$1);
var G__47897 = c__4609__auto__;
var G__47898 = cljs.core.count(c__4609__auto__);
var G__47899 = (0);
seq__47824 = G__47896;
chunk__47825 = G__47897;
count__47826 = G__47898;
i__47827 = G__47899;
continue;
} else {
var vec__47840 = cljs.core.first(seq__47824__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47840,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47840,(1),null);
var temp__5733__auto___47900 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47900)){
var effect_fn_47902 = temp__5733__auto___47900;
(effect_fn_47902.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47902.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47902.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47903 = cljs.core.next(seq__47824__$1);
var G__47904 = null;
var G__47905 = (0);
var G__47906 = (0);
seq__47824 = G__47903;
chunk__47825 = G__47904;
count__47826 = G__47905;
i__47827 = G__47906;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__47843 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47844 = null;
var count__47845 = (0);
var i__47846 = (0);
while(true){
if((i__47846 < count__47845)){
var map__47851 = chunk__47844.cljs$core$IIndexed$_nth$arity$2(null,i__47846);
var map__47851__$1 = (((((!((map__47851 == null))))?(((((map__47851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47851):map__47851);
var effect = map__47851__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47851__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47851__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.set_timeout_BANG_(((function (seq__47843,chunk__47844,count__47845,i__47846,map__47851,map__47851__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch(dispatch);
});})(seq__47843,chunk__47844,count__47845,i__47846,map__47851,map__47851__$1,effect,ms,dispatch))
,ms);
}


var G__47907 = seq__47843;
var G__47908 = chunk__47844;
var G__47909 = count__47845;
var G__47910 = (i__47846 + (1));
seq__47843 = G__47907;
chunk__47844 = G__47908;
count__47845 = G__47909;
i__47846 = G__47910;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47843);
if(temp__5735__auto__){
var seq__47843__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47843__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47843__$1);
var G__47911 = cljs.core.chunk_rest(seq__47843__$1);
var G__47912 = c__4609__auto__;
var G__47913 = cljs.core.count(c__4609__auto__);
var G__47914 = (0);
seq__47843 = G__47911;
chunk__47844 = G__47912;
count__47845 = G__47913;
i__47846 = G__47914;
continue;
} else {
var map__47854 = cljs.core.first(seq__47843__$1);
var map__47854__$1 = (((((!((map__47854 == null))))?(((((map__47854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47854):map__47854);
var effect = map__47854__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47854__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47854__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.set_timeout_BANG_(((function (seq__47843,chunk__47844,count__47845,i__47846,map__47854,map__47854__$1,effect,ms,dispatch,seq__47843__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch(dispatch);
});})(seq__47843,chunk__47844,count__47845,i__47846,map__47854,map__47854__$1,effect,ms,dispatch,seq__47843__$1,temp__5735__auto__))
,ms);
}


var G__47915 = cljs.core.next(seq__47843__$1);
var G__47916 = null;
var G__47917 = (0);
var G__47918 = (0);
seq__47843 = G__47915;
chunk__47844 = G__47916;
count__47845 = G__47917;
i__47846 = G__47918;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__47858 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47859 = null;
var count__47860 = (0);
var i__47861 = (0);
while(true){
if((i__47861 < count__47860)){
var event = chunk__47859.cljs$core$IIndexed$_nth$arity$2(null,i__47861);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch(event);


var G__47919 = seq__47858;
var G__47920 = chunk__47859;
var G__47921 = count__47860;
var G__47922 = (i__47861 + (1));
seq__47858 = G__47919;
chunk__47859 = G__47920;
count__47860 = G__47921;
i__47861 = G__47922;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47858);
if(temp__5735__auto__){
var seq__47858__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47858__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47858__$1);
var G__47923 = cljs.core.chunk_rest(seq__47858__$1);
var G__47924 = c__4609__auto__;
var G__47925 = cljs.core.count(c__4609__auto__);
var G__47926 = (0);
seq__47858 = G__47923;
chunk__47859 = G__47924;
count__47860 = G__47925;
i__47861 = G__47926;
continue;
} else {
var event = cljs.core.first(seq__47858__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch(event);


var G__47927 = cljs.core.next(seq__47858__$1);
var G__47928 = null;
var G__47929 = (0);
var G__47930 = (0);
seq__47858 = G__47927;
chunk__47859 = G__47928;
count__47860 = G__47929;
i__47861 = G__47930;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__47865 = cljs.core.seq(value);
var chunk__47866 = null;
var count__47867 = (0);
var i__47868 = (0);
while(true){
if((i__47868 < count__47867)){
var event = chunk__47866.cljs$core$IIndexed$_nth$arity$2(null,i__47868);
clear_event(event);


var G__47932 = seq__47865;
var G__47933 = chunk__47866;
var G__47934 = count__47867;
var G__47935 = (i__47868 + (1));
seq__47865 = G__47932;
chunk__47866 = G__47933;
count__47867 = G__47934;
i__47868 = G__47935;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47865);
if(temp__5735__auto__){
var seq__47865__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47865__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47865__$1);
var G__47939 = cljs.core.chunk_rest(seq__47865__$1);
var G__47940 = c__4609__auto__;
var G__47941 = cljs.core.count(c__4609__auto__);
var G__47942 = (0);
seq__47865 = G__47939;
chunk__47866 = G__47940;
count__47867 = G__47941;
i__47868 = G__47942;
continue;
} else {
var event = cljs.core.first(seq__47865__$1);
clear_event(event);


var G__47943 = cljs.core.next(seq__47865__$1);
var G__47944 = null;
var G__47945 = (0);
var G__47946 = (0);
seq__47865 = G__47943;
chunk__47866 = G__47944;
count__47867 = G__47945;
i__47868 = G__47946;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.js.map
