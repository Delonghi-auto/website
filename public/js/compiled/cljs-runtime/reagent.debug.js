goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__51868__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__51868 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51869__i = 0, G__51869__a = new Array(arguments.length -  0);
while (G__51869__i < G__51869__a.length) {G__51869__a[G__51869__i] = arguments[G__51869__i + 0]; ++G__51869__i;}
  args = new cljs.core.IndexedSeq(G__51869__a,0,null);
} 
return G__51868__delegate.call(this,args);};
G__51868.cljs$lang$maxFixedArity = 0;
G__51868.cljs$lang$applyTo = (function (arglist__51870){
var args = cljs.core.seq(arglist__51870);
return G__51868__delegate(args);
});
G__51868.cljs$core$IFn$_invoke$arity$variadic = G__51868__delegate;
return G__51868;
})()
);

(o.error = (function() { 
var G__51871__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__51871 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51872__i = 0, G__51872__a = new Array(arguments.length -  0);
while (G__51872__i < G__51872__a.length) {G__51872__a[G__51872__i] = arguments[G__51872__i + 0]; ++G__51872__i;}
  args = new cljs.core.IndexedSeq(G__51872__a,0,null);
} 
return G__51871__delegate.call(this,args);};
G__51871.cljs$lang$maxFixedArity = 0;
G__51871.cljs$lang$applyTo = (function (arglist__51873){
var args = cljs.core.seq(arglist__51873);
return G__51871__delegate(args);
});
G__51871.cljs$core$IFn$_invoke$arity$variadic = G__51871__delegate;
return G__51871;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
