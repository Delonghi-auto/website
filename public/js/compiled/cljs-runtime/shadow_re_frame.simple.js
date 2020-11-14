goog.provide('shadow_re_frame.simple');
goog.require('cljs.core');
goog.require('re_view.re_frame_simple');
goog.require('reagent.core');
goog.require('shadow_re_frame.welcome');
/**
 * Given a counter id, render it as an interactive widget.
 */
shadow_re_frame.simple.counter = (function shadow_re_frame$simple$counter(id){
var total = re_view.re_frame_simple.get_in.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counters","counters",33475982),id], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button","div.button",-1553026367),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (p1__60552_SHARP_){
p1__60552_SHARP_.preventDefault();

return re_view.re_frame_simple.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counters","counters",33475982),id], null),cljs.core.inc], 0));
})], null),total,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),(((total > (0)))?cljs.core.take.cljs$core$IFn$_invoke$arity$2(total,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(id)):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#888"], null)], null),"click me!"], null))], null);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (db,p__60553){
var vec__60554 = p__60553;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60554,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counter-ids","counter-ids",645938261),cljs.core.shuffle(new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\uD83D\uDC79","\uD83D\uDC7A","\uD83D\uDCA9","\uD83D\uDC7B\uD83D\uDC80\uFE0F","\uD83D\uDC7D","\uD83D\uDC7E","\uD83E\uDD16","\uD83C\uDF83","\uD83D\uDE3A","\uD83D\uDC4F","\uD83D\uDE4F","\uD83D\uDC45","\uD83D\uDC42","\uD83D\uDC43","\uD83D\uDC63","\uD83D\uDC41","\uD83D\uDC40","\uD83D\uDC68\u200D","\uD83D\uDE92","\uD83D\uDC69\u200D\u2708\uFE0F","\uD83D\uDC5E","\uD83D\uDC53","\u2602\uFE0F","\uD83C\uDF88","\uD83D\uDCDC","\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08","\uD83D\uDEA3","\uD83C\uDFC7"], null))], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-counter","new-counter",-1170425146),(function (db,p__60557){
var vec__60558 = p__60557;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60558,(0),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counters","counters",33475982),cljs.core.peek(new cljs.core.Keyword(null,"counter-ids","counter-ids",645938261).cljs$core$IFn$_invoke$arity$1(db))], null),(0)),new cljs.core.Keyword(null,"counter-ids","counter-ids",645938261),cljs.core.pop);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-emoji","add-emoji",-712838389),(function (db,p__60561){
var vec__60562 = p__60561;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60562,(0),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"counter-ids","counter-ids",645938261),cljs.core.conj,cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"sample-input","sample-input",206568548))),new cljs.core.Keyword(null,"sample-input","sample-input",206568548));
}));
shadow_re_frame.simple.counter_ids = (function (){
re_frame.core.reg_sub_raw(new cljs.core.Keyword("shadow-re-frame.simple","counter-ids","shadow-re-frame.simple/counter-ids",-633612203),(function (_,p__60565){
var vec__60566 = p__60565;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60566,(0),null);
return reagent.ratom.make_reaction((function (){
var _STAR_in_query_QMARK__STAR__orig_val__60569 = re_view.re_frame_simple._STAR_in_query_QMARK__STAR_;
var _STAR_in_query_QMARK__STAR__temp_val__60570 = true;
(re_view.re_frame_simple._STAR_in_query_QMARK__STAR_ = _STAR_in_query_QMARK__STAR__temp_val__60570);

try{return cljs.core.keys(re_view.re_frame_simple.get.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"counters","counters",33475982)));
}finally {(re_view.re_frame_simple._STAR_in_query_QMARK__STAR_ = _STAR_in_query_QMARK__STAR__orig_val__60569);
}}));
}));

return (function() { 
var G__60581__delegate = function (args__59957__auto__){
return cljs.core.deref((function (){var G__60571 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow-re-frame.simple","counter-ids","shadow-re-frame.simple/counter-ids",-633612203)], null),args__59957__auto__);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__60571) : re_frame.core.subscribe.call(null,G__60571));
})());
};
var G__60581 = function (var_args){
var args__59957__auto__ = null;
if (arguments.length > 0) {
var G__60582__i = 0, G__60582__a = new Array(arguments.length -  0);
while (G__60582__i < G__60582__a.length) {G__60582__a[G__60582__i] = arguments[G__60582__i + 0]; ++G__60582__i;}
  args__59957__auto__ = new cljs.core.IndexedSeq(G__60582__a,0,null);
} 
return G__60581__delegate.call(this,args__59957__auto__);};
G__60581.cljs$lang$maxFixedArity = 0;
G__60581.cljs$lang$applyTo = (function (arglist__60583){
var args__59957__auto__ = cljs.core.seq(arglist__60583);
return G__60581__delegate(args__59957__auto__);
});
G__60581.cljs$core$IFn$_invoke$arity$variadic = G__60581__delegate;
return G__60581;
})()
;
})()
;
shadow_re_frame.simple.divider = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-large","div.font-large",-1210466111),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2rem 0 1rem"], null)], null),"\u3030\uFE0F\u3030\uFE0F\u3030\uFE0F\u3030\uFE0F\u3030\uFE0F\u3030\uFE0F\u3030\uFE0F"], null);
/**
 * Render the page
 */
shadow_re_frame.simple.root_view = (function shadow_re_frame$simple$root_view(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.root-layout","div.root-layout",-1243177799),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-large","div.font-large",-1210466111),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"1rem 0"], null)], null),"Welcome Dani!"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow_re_frame$simple$root_view_$_iter__60573(s__60574){
return (new cljs.core.LazySeq(null,(function (){
var s__60574__$1 = s__60574;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60574__$1);
if(temp__5735__auto__){
var s__60574__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60574__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60574__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60576 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60575 = (0);
while(true){
if((i__60575 < size__4581__auto__)){
var id = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60575);
cljs.core.chunk_append(b__60576,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shadow_re_frame.simple.counter,id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__60584 = (i__60575 + (1));
i__60575 = G__60584;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60576),shadow_re_frame$simple$root_view_$_iter__60573(cljs.core.chunk_rest(s__60574__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60576),null);
}
} else {
var id = cljs.core.first(s__60574__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shadow_re_frame.simple.counter,id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),shadow_re_frame$simple$root_view_$_iter__60573(cljs.core.rest(s__60574__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(shadow_re_frame.simple.counter_ids());
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button","div.button",-1553026367),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__60577 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-counter","new-counter",-1170425146)], null);
return (re_view.re_frame_simple.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_view.re_frame_simple.dispatch.cljs$core$IFn$_invoke$arity$1(G__60577) : re_view.re_frame_simple.dispatch.call(null,G__60577));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"pink"], null)], null),"Add Counter"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button","div.button",-1553026367),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__60578 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-emoji","add-emoji",-712838389)], null);
return (re_view.re_frame_simple.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_view.re_frame_simple.dispatch.cljs$core$IFn$_invoke$arity$1(G__60578) : re_view.re_frame_simple.dispatch.call(null,G__60578));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"green"], null)], null),"Add Emoji"], null),(function (){var sample_input = re_view.re_frame_simple.get.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sample-input","sample-input",206568548));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-example","div.text-example",-737550581),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2.5rem 0 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),sample_input,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your name",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__60572_SHARP_){
return re_view.re_frame_simple.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sample-input","sample-input",206568548),p1__60572_SHARP_.target.value], 0));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Hello, ",(function (){var or__4185__auto__ = sample_input;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "____";
}
})()], null)], null);
})(),shadow_re_frame.simple.divider], null);
});
shadow_re_frame.simple.render = (function shadow_re_frame$simple$render(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shadow_re_frame.simple.root_view], null),document.getElementById("shadow-re-frame"));
});
shadow_re_frame.simple.init = (function shadow_re_frame$simple$init(){
var G__60579_60585 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null);
(re_view.re_frame_simple.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_view.re_frame_simple.dispatch.cljs$core$IFn$_invoke$arity$1(G__60579_60585) : re_view.re_frame_simple.dispatch.call(null,G__60579_60585));

var G__60580_60586 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-counter","new-counter",-1170425146)], null);
(re_view.re_frame_simple.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_view.re_frame_simple.dispatch.cljs$core$IFn$_invoke$arity$1(G__60580_60586) : re_view.re_frame_simple.dispatch.call(null,G__60580_60586));

return shadow_re_frame.simple.render();
});

//# sourceMappingURL=shadow_re_frame.simple.js.map
