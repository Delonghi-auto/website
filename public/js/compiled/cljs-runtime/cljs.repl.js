goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__54492){
var map__54493 = p__54492;
var map__54493__$1 = (((((!((map__54493 == null))))?(((((map__54493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54493):map__54493);
var m = map__54493__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54493__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54493__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__54495_54596 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54496_54597 = null;
var count__54497_54598 = (0);
var i__54498_54599 = (0);
while(true){
if((i__54498_54599 < count__54497_54598)){
var f_54600 = chunk__54496_54597.cljs$core$IIndexed$_nth$arity$2(null,i__54498_54599);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54600], 0));


var G__54601 = seq__54495_54596;
var G__54602 = chunk__54496_54597;
var G__54603 = count__54497_54598;
var G__54604 = (i__54498_54599 + (1));
seq__54495_54596 = G__54601;
chunk__54496_54597 = G__54602;
count__54497_54598 = G__54603;
i__54498_54599 = G__54604;
continue;
} else {
var temp__5735__auto___54605 = cljs.core.seq(seq__54495_54596);
if(temp__5735__auto___54605){
var seq__54495_54606__$1 = temp__5735__auto___54605;
if(cljs.core.chunked_seq_QMARK_(seq__54495_54606__$1)){
var c__4609__auto___54607 = cljs.core.chunk_first(seq__54495_54606__$1);
var G__54608 = cljs.core.chunk_rest(seq__54495_54606__$1);
var G__54609 = c__4609__auto___54607;
var G__54610 = cljs.core.count(c__4609__auto___54607);
var G__54611 = (0);
seq__54495_54596 = G__54608;
chunk__54496_54597 = G__54609;
count__54497_54598 = G__54610;
i__54498_54599 = G__54611;
continue;
} else {
var f_54612 = cljs.core.first(seq__54495_54606__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54612], 0));


var G__54613 = cljs.core.next(seq__54495_54606__$1);
var G__54614 = null;
var G__54615 = (0);
var G__54616 = (0);
seq__54495_54596 = G__54613;
chunk__54496_54597 = G__54614;
count__54497_54598 = G__54615;
i__54498_54599 = G__54616;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_54617 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_54617], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_54617)))?cljs.core.second(arglists_54617):arglists_54617)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__54499_54618 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54500_54619 = null;
var count__54501_54620 = (0);
var i__54502_54621 = (0);
while(true){
if((i__54502_54621 < count__54501_54620)){
var vec__54513_54622 = chunk__54500_54619.cljs$core$IIndexed$_nth$arity$2(null,i__54502_54621);
var name_54623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54513_54622,(0),null);
var map__54516_54624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54513_54622,(1),null);
var map__54516_54625__$1 = (((((!((map__54516_54624 == null))))?(((((map__54516_54624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54516_54624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54516_54624):map__54516_54624);
var doc_54626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54516_54625__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54516_54625__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54623], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54627], 0));

if(cljs.core.truth_(doc_54626)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54626], 0));
} else {
}


var G__54628 = seq__54499_54618;
var G__54629 = chunk__54500_54619;
var G__54630 = count__54501_54620;
var G__54631 = (i__54502_54621 + (1));
seq__54499_54618 = G__54628;
chunk__54500_54619 = G__54629;
count__54501_54620 = G__54630;
i__54502_54621 = G__54631;
continue;
} else {
var temp__5735__auto___54632 = cljs.core.seq(seq__54499_54618);
if(temp__5735__auto___54632){
var seq__54499_54633__$1 = temp__5735__auto___54632;
if(cljs.core.chunked_seq_QMARK_(seq__54499_54633__$1)){
var c__4609__auto___54634 = cljs.core.chunk_first(seq__54499_54633__$1);
var G__54635 = cljs.core.chunk_rest(seq__54499_54633__$1);
var G__54636 = c__4609__auto___54634;
var G__54637 = cljs.core.count(c__4609__auto___54634);
var G__54638 = (0);
seq__54499_54618 = G__54635;
chunk__54500_54619 = G__54636;
count__54501_54620 = G__54637;
i__54502_54621 = G__54638;
continue;
} else {
var vec__54518_54639 = cljs.core.first(seq__54499_54633__$1);
var name_54640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54518_54639,(0),null);
var map__54521_54641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54518_54639,(1),null);
var map__54521_54642__$1 = (((((!((map__54521_54641 == null))))?(((((map__54521_54641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54521_54641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54521_54641):map__54521_54641);
var doc_54643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54521_54642__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54521_54642__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54640], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54644], 0));

if(cljs.core.truth_(doc_54643)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54643], 0));
} else {
}


var G__54645 = cljs.core.next(seq__54499_54633__$1);
var G__54646 = null;
var G__54647 = (0);
var G__54648 = (0);
seq__54499_54618 = G__54645;
chunk__54500_54619 = G__54646;
count__54501_54620 = G__54647;
i__54502_54621 = G__54648;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__54523 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__54524 = null;
var count__54525 = (0);
var i__54526 = (0);
while(true){
if((i__54526 < count__54525)){
var role = chunk__54524.cljs$core$IIndexed$_nth$arity$2(null,i__54526);
var temp__5735__auto___54649__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___54649__$1)){
var spec_54650 = temp__5735__auto___54649__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54650)], 0));
} else {
}


var G__54651 = seq__54523;
var G__54652 = chunk__54524;
var G__54653 = count__54525;
var G__54654 = (i__54526 + (1));
seq__54523 = G__54651;
chunk__54524 = G__54652;
count__54525 = G__54653;
i__54526 = G__54654;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__54523);
if(temp__5735__auto____$1){
var seq__54523__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__54523__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__54523__$1);
var G__54655 = cljs.core.chunk_rest(seq__54523__$1);
var G__54656 = c__4609__auto__;
var G__54657 = cljs.core.count(c__4609__auto__);
var G__54658 = (0);
seq__54523 = G__54655;
chunk__54524 = G__54656;
count__54525 = G__54657;
i__54526 = G__54658;
continue;
} else {
var role = cljs.core.first(seq__54523__$1);
var temp__5735__auto___54659__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___54659__$2)){
var spec_54660 = temp__5735__auto___54659__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54660)], 0));
} else {
}


var G__54661 = cljs.core.next(seq__54523__$1);
var G__54662 = null;
var G__54663 = (0);
var G__54664 = (0);
seq__54523 = G__54661;
chunk__54524 = G__54662;
count__54525 = G__54663;
i__54526 = G__54664;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__54665 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__54666 = cljs.core.ex_cause(t);
via = G__54665;
t = G__54666;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__54529 = datafied_throwable;
var map__54529__$1 = (((((!((map__54529 == null))))?(((((map__54529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54529):map__54529);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54529__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54529__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54529__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__54530 = cljs.core.last(via);
var map__54530__$1 = (((((!((map__54530 == null))))?(((((map__54530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54530):map__54530);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54530__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54530__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54530__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__54531 = data;
var map__54531__$1 = (((((!((map__54531 == null))))?(((((map__54531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54531):map__54531);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54531__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54531__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54531__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__54532 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__54532__$1 = (((((!((map__54532 == null))))?(((((map__54532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54532):map__54532);
var top_data = map__54532__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54532__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__54537 = phase;
var G__54537__$1 = (((G__54537 instanceof cljs.core.Keyword))?G__54537.fqn:null);
switch (G__54537__$1) {
case "read-source":
var map__54538 = data;
var map__54538__$1 = (((((!((map__54538 == null))))?(((((map__54538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54538):map__54538);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54538__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54538__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__54540 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__54540__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54540,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__54540);
var G__54540__$2 = (cljs.core.truth_((function (){var fexpr__54541 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54541.cljs$core$IFn$_invoke$arity$1 ? fexpr__54541.cljs$core$IFn$_invoke$arity$1(source) : fexpr__54541.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54540__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__54540__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54540__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__54540__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__54542 = top_data;
var G__54542__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54542,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__54542);
var G__54542__$2 = (cljs.core.truth_((function (){var fexpr__54543 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54543.cljs$core$IFn$_invoke$arity$1 ? fexpr__54543.cljs$core$IFn$_invoke$arity$1(source) : fexpr__54543.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54542__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__54542__$1);
var G__54542__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54542__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__54542__$2);
var G__54542__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54542__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__54542__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54542__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__54542__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__54544 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54544,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54544,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54544,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54544,(3),null);
var G__54547 = top_data;
var G__54547__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54547,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__54547);
var G__54547__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54547__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__54547__$1);
var G__54547__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54547__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__54547__$2);
var G__54547__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54547__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__54547__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54547__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__54547__$4;
}

break;
case "execution":
var vec__54548 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54548,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54548,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54548,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54548,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54528_SHARP_){
var or__4185__auto__ = (p1__54528_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__54552 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54552.cljs$core$IFn$_invoke$arity$1 ? fexpr__54552.cljs$core$IFn$_invoke$arity$1(p1__54528_SHARP_) : fexpr__54552.call(null,p1__54528_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__54553 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__54553__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54553,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__54553);
var G__54553__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54553__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__54553__$1);
var G__54553__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54553__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__54553__$2);
var G__54553__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54553__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__54553__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54553__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__54553__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54537__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__54556){
var map__54557 = p__54556;
var map__54557__$1 = (((((!((map__54557 == null))))?(((((map__54557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54557):map__54557);
var triage_data = map__54557__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54557__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54557__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54557__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54557__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54557__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54557__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54557__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54557__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__54559 = phase;
var G__54559__$1 = (((G__54559 instanceof cljs.core.Keyword))?G__54559.fqn:null);
switch (G__54559__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__54560 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__54561 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54562 = loc;
var G__54563 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54564_54669 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54565_54670 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54566_54671 = true;
var _STAR_print_fn_STAR__temp_val__54567_54672 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54566_54671);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54567_54672);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54554_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54554_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54565_54670);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54564_54669);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54560,G__54561,G__54562,G__54563) : format.call(null,G__54560,G__54561,G__54562,G__54563));

break;
case "macroexpansion":
var G__54568 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__54569 = cause_type;
var G__54570 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54571 = loc;
var G__54572 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54568,G__54569,G__54570,G__54571,G__54572) : format.call(null,G__54568,G__54569,G__54570,G__54571,G__54572));

break;
case "compile-syntax-check":
var G__54573 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__54574 = cause_type;
var G__54575 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54576 = loc;
var G__54577 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54573,G__54574,G__54575,G__54576,G__54577) : format.call(null,G__54573,G__54574,G__54575,G__54576,G__54577));

break;
case "compilation":
var G__54578 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__54579 = cause_type;
var G__54580 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54581 = loc;
var G__54582 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54578,G__54579,G__54580,G__54581,G__54582) : format.call(null,G__54578,G__54579,G__54580,G__54581,G__54582));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__54583 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__54584 = symbol;
var G__54585 = loc;
var G__54586 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54587_54673 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54588_54674 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54589_54675 = true;
var _STAR_print_fn_STAR__temp_val__54590_54676 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54589_54675);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54590_54676);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54555_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54555_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54588_54674);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54587_54673);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54583,G__54584,G__54585,G__54586) : format.call(null,G__54583,G__54584,G__54585,G__54586));
} else {
var G__54591 = "Execution error%s at %s(%s).\n%s\n";
var G__54592 = cause_type;
var G__54593 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54594 = loc;
var G__54595 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54591,G__54592,G__54593,G__54594,G__54595) : format.call(null,G__54591,G__54592,G__54593,G__54594,G__54595));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54559__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
