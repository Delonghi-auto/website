goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__57808 = coll;
var G__57809 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__57808,G__57809) : shadow.dom.lazy_native_coll_seq.call(null,G__57808,G__57809));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__57825 = arguments.length;
switch (G__57825) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__57827 = arguments.length;
switch (G__57827) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__57829 = arguments.length;
switch (G__57829) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__57834 = arguments.length;
switch (G__57834) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__57842 = arguments.length;
switch (G__57842) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__57843 = document;
var G__57844 = shadow.dom.dom_node(el);
return goog.dom.contains(G__57843,G__57844);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__57845 = shadow.dom.dom_node(parent);
var G__57846 = shadow.dom.dom_node(el);
return goog.dom.contains(G__57845,G__57846);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__57847 = shadow.dom.dom_node(el);
var G__57848 = cls;
return goog.dom.classlist.add(G__57847,G__57848);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__57849 = shadow.dom.dom_node(el);
var G__57850 = cls;
return goog.dom.classlist.remove(G__57849,G__57850);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__57860 = arguments.length;
switch (G__57860) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__57861 = shadow.dom.dom_node(el);
var G__57862 = cls;
return goog.dom.classlist.toggle(G__57861,G__57862);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e57863){if((e57863 instanceof Object)){
var e = e57863;
return console.log("didnt support attachEvent",el,e);
} else {
throw e57863;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__57867 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__57868 = null;
var count__57869 = (0);
var i__57870 = (0);
while(true){
if((i__57870 < count__57869)){
var el = chunk__57868.cljs$core$IIndexed$_nth$arity$2(null,i__57870);
var handler_58499__$1 = ((function (seq__57867,chunk__57868,count__57869,i__57870,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__57867,chunk__57868,count__57869,i__57870,el))
;
var G__57879_58500 = el;
var G__57880_58501 = cljs.core.name(ev);
var G__57881_58502 = handler_58499__$1;
shadow.dom.dom_listen(G__57879_58500,G__57880_58501,G__57881_58502);


var G__58503 = seq__57867;
var G__58504 = chunk__57868;
var G__58505 = count__57869;
var G__58506 = (i__57870 + (1));
seq__57867 = G__58503;
chunk__57868 = G__58504;
count__57869 = G__58505;
i__57870 = G__58506;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57867);
if(temp__5735__auto__){
var seq__57867__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57867__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57867__$1);
var G__58507 = cljs.core.chunk_rest(seq__57867__$1);
var G__58508 = c__4609__auto__;
var G__58509 = cljs.core.count(c__4609__auto__);
var G__58510 = (0);
seq__57867 = G__58507;
chunk__57868 = G__58508;
count__57869 = G__58509;
i__57870 = G__58510;
continue;
} else {
var el = cljs.core.first(seq__57867__$1);
var handler_58511__$1 = ((function (seq__57867,chunk__57868,count__57869,i__57870,el,seq__57867__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__57867,chunk__57868,count__57869,i__57870,el,seq__57867__$1,temp__5735__auto__))
;
var G__57885_58512 = el;
var G__57886_58513 = cljs.core.name(ev);
var G__57887_58514 = handler_58511__$1;
shadow.dom.dom_listen(G__57885_58512,G__57886_58513,G__57887_58514);


var G__58515 = cljs.core.next(seq__57867__$1);
var G__58516 = null;
var G__58517 = (0);
var G__58518 = (0);
seq__57867 = G__58515;
chunk__57868 = G__58516;
count__57869 = G__58517;
i__57870 = G__58518;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__57892 = arguments.length;
switch (G__57892) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__57903 = shadow.dom.dom_node(el);
var G__57904 = cljs.core.name(ev);
var G__57905 = handler__$1;
return shadow.dom.dom_listen(G__57903,G__57904,G__57905);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__57909 = shadow.dom.dom_node(el);
var G__57910 = cljs.core.name(ev);
var G__57911 = handler;
return shadow.dom.dom_listen_remove(G__57909,G__57910,G__57911);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__57915 = cljs.core.seq(events);
var chunk__57916 = null;
var count__57917 = (0);
var i__57918 = (0);
while(true){
if((i__57918 < count__57917)){
var vec__57925 = chunk__57916.cljs$core$IIndexed$_nth$arity$2(null,i__57918);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57925,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57925,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58521 = seq__57915;
var G__58522 = chunk__57916;
var G__58523 = count__57917;
var G__58524 = (i__57918 + (1));
seq__57915 = G__58521;
chunk__57916 = G__58522;
count__57917 = G__58523;
i__57918 = G__58524;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57915);
if(temp__5735__auto__){
var seq__57915__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57915__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57915__$1);
var G__58527 = cljs.core.chunk_rest(seq__57915__$1);
var G__58528 = c__4609__auto__;
var G__58529 = cljs.core.count(c__4609__auto__);
var G__58530 = (0);
seq__57915 = G__58527;
chunk__57916 = G__58528;
count__57917 = G__58529;
i__57918 = G__58530;
continue;
} else {
var vec__57929 = cljs.core.first(seq__57915__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57929,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57929,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58531 = cljs.core.next(seq__57915__$1);
var G__58532 = null;
var G__58533 = (0);
var G__58534 = (0);
seq__57915 = G__58531;
chunk__57916 = G__58532;
count__57917 = G__58533;
i__57918 = G__58534;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__57933 = cljs.core.seq(styles);
var chunk__57934 = null;
var count__57935 = (0);
var i__57936 = (0);
while(true){
if((i__57936 < count__57935)){
var vec__57954 = chunk__57934.cljs$core$IIndexed$_nth$arity$2(null,i__57936);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57954,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57954,(1),null);
var G__57958_58536 = dom;
var G__57959_58537 = cljs.core.name(k);
var G__57960_58538 = (((v == null))?"":v);
goog.style.setStyle(G__57958_58536,G__57959_58537,G__57960_58538);


var G__58539 = seq__57933;
var G__58540 = chunk__57934;
var G__58541 = count__57935;
var G__58542 = (i__57936 + (1));
seq__57933 = G__58539;
chunk__57934 = G__58540;
count__57935 = G__58541;
i__57936 = G__58542;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57933);
if(temp__5735__auto__){
var seq__57933__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57933__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57933__$1);
var G__58546 = cljs.core.chunk_rest(seq__57933__$1);
var G__58547 = c__4609__auto__;
var G__58548 = cljs.core.count(c__4609__auto__);
var G__58549 = (0);
seq__57933 = G__58546;
chunk__57934 = G__58547;
count__57935 = G__58548;
i__57936 = G__58549;
continue;
} else {
var vec__57963 = cljs.core.first(seq__57933__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57963,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57963,(1),null);
var G__57967_58551 = dom;
var G__57968_58552 = cljs.core.name(k);
var G__57969_58553 = (((v == null))?"":v);
goog.style.setStyle(G__57967_58551,G__57968_58552,G__57969_58553);


var G__58554 = cljs.core.next(seq__57933__$1);
var G__58555 = null;
var G__58556 = (0);
var G__58557 = (0);
seq__57933 = G__58554;
chunk__57934 = G__58555;
count__57935 = G__58556;
i__57936 = G__58557;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__57976_58558 = key;
var G__57976_58559__$1 = (((G__57976_58558 instanceof cljs.core.Keyword))?G__57976_58558.fqn:null);
switch (G__57976_58559__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_58561 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_58561,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_58561,"aria-");
}
})())){
el.setAttribute(ks_58561,value);
} else {
(el[ks_58561] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__57985 = shadow.dom.dom_node(el);
var G__57986 = cls;
return goog.dom.classlist.contains(G__57985,G__57986);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__57993){
var map__57994 = p__57993;
var map__57994__$1 = (((((!((map__57994 == null))))?(((((map__57994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57994):map__57994);
var props = map__57994__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57994__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__57997 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57997,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57997,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57997,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__58001 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__58001,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__58001;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__58004 = arguments.length;
switch (G__58004) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__58020){
var vec__58022 = p__58020;
var seq__58023 = cljs.core.seq(vec__58022);
var first__58024 = cljs.core.first(seq__58023);
var seq__58023__$1 = cljs.core.next(seq__58023);
var nn = first__58024;
var first__58024__$1 = cljs.core.first(seq__58023__$1);
var seq__58023__$2 = cljs.core.next(seq__58023__$1);
var np = first__58024__$1;
var nc = seq__58023__$2;
var node = vec__58022;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58025 = nn;
var G__58026 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__58025,G__58026) : create_fn.call(null,G__58025,G__58026));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58027 = nn;
var G__58028 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__58027,G__58028) : create_fn.call(null,G__58027,G__58028));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__58029 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58029,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58029,(1),null);
var seq__58032_58575 = cljs.core.seq(node_children);
var chunk__58033_58576 = null;
var count__58034_58577 = (0);
var i__58035_58578 = (0);
while(true){
if((i__58035_58578 < count__58034_58577)){
var child_struct_58579 = chunk__58033_58576.cljs$core$IIndexed$_nth$arity$2(null,i__58035_58578);
var children_58580 = shadow.dom.dom_node(child_struct_58579);
if(cljs.core.seq_QMARK_(children_58580)){
var seq__58062_58581 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58580));
var chunk__58064_58582 = null;
var count__58065_58583 = (0);
var i__58066_58584 = (0);
while(true){
if((i__58066_58584 < count__58065_58583)){
var child_58585 = chunk__58064_58582.cljs$core$IIndexed$_nth$arity$2(null,i__58066_58584);
if(cljs.core.truth_(child_58585)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58585);


var G__58586 = seq__58062_58581;
var G__58587 = chunk__58064_58582;
var G__58588 = count__58065_58583;
var G__58589 = (i__58066_58584 + (1));
seq__58062_58581 = G__58586;
chunk__58064_58582 = G__58587;
count__58065_58583 = G__58588;
i__58066_58584 = G__58589;
continue;
} else {
var G__58590 = seq__58062_58581;
var G__58591 = chunk__58064_58582;
var G__58592 = count__58065_58583;
var G__58593 = (i__58066_58584 + (1));
seq__58062_58581 = G__58590;
chunk__58064_58582 = G__58591;
count__58065_58583 = G__58592;
i__58066_58584 = G__58593;
continue;
}
} else {
var temp__5735__auto___58594 = cljs.core.seq(seq__58062_58581);
if(temp__5735__auto___58594){
var seq__58062_58595__$1 = temp__5735__auto___58594;
if(cljs.core.chunked_seq_QMARK_(seq__58062_58595__$1)){
var c__4609__auto___58596 = cljs.core.chunk_first(seq__58062_58595__$1);
var G__58597 = cljs.core.chunk_rest(seq__58062_58595__$1);
var G__58598 = c__4609__auto___58596;
var G__58599 = cljs.core.count(c__4609__auto___58596);
var G__58600 = (0);
seq__58062_58581 = G__58597;
chunk__58064_58582 = G__58598;
count__58065_58583 = G__58599;
i__58066_58584 = G__58600;
continue;
} else {
var child_58601 = cljs.core.first(seq__58062_58595__$1);
if(cljs.core.truth_(child_58601)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58601);


var G__58602 = cljs.core.next(seq__58062_58595__$1);
var G__58603 = null;
var G__58604 = (0);
var G__58605 = (0);
seq__58062_58581 = G__58602;
chunk__58064_58582 = G__58603;
count__58065_58583 = G__58604;
i__58066_58584 = G__58605;
continue;
} else {
var G__58606 = cljs.core.next(seq__58062_58595__$1);
var G__58607 = null;
var G__58608 = (0);
var G__58609 = (0);
seq__58062_58581 = G__58606;
chunk__58064_58582 = G__58607;
count__58065_58583 = G__58608;
i__58066_58584 = G__58609;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58580);
}


var G__58610 = seq__58032_58575;
var G__58611 = chunk__58033_58576;
var G__58612 = count__58034_58577;
var G__58613 = (i__58035_58578 + (1));
seq__58032_58575 = G__58610;
chunk__58033_58576 = G__58611;
count__58034_58577 = G__58612;
i__58035_58578 = G__58613;
continue;
} else {
var temp__5735__auto___58615 = cljs.core.seq(seq__58032_58575);
if(temp__5735__auto___58615){
var seq__58032_58616__$1 = temp__5735__auto___58615;
if(cljs.core.chunked_seq_QMARK_(seq__58032_58616__$1)){
var c__4609__auto___58617 = cljs.core.chunk_first(seq__58032_58616__$1);
var G__58618 = cljs.core.chunk_rest(seq__58032_58616__$1);
var G__58619 = c__4609__auto___58617;
var G__58620 = cljs.core.count(c__4609__auto___58617);
var G__58621 = (0);
seq__58032_58575 = G__58618;
chunk__58033_58576 = G__58619;
count__58034_58577 = G__58620;
i__58035_58578 = G__58621;
continue;
} else {
var child_struct_58622 = cljs.core.first(seq__58032_58616__$1);
var children_58623 = shadow.dom.dom_node(child_struct_58622);
if(cljs.core.seq_QMARK_(children_58623)){
var seq__58074_58624 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58623));
var chunk__58076_58625 = null;
var count__58077_58626 = (0);
var i__58078_58627 = (0);
while(true){
if((i__58078_58627 < count__58077_58626)){
var child_58628 = chunk__58076_58625.cljs$core$IIndexed$_nth$arity$2(null,i__58078_58627);
if(cljs.core.truth_(child_58628)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58628);


var G__58631 = seq__58074_58624;
var G__58632 = chunk__58076_58625;
var G__58633 = count__58077_58626;
var G__58634 = (i__58078_58627 + (1));
seq__58074_58624 = G__58631;
chunk__58076_58625 = G__58632;
count__58077_58626 = G__58633;
i__58078_58627 = G__58634;
continue;
} else {
var G__58635 = seq__58074_58624;
var G__58636 = chunk__58076_58625;
var G__58637 = count__58077_58626;
var G__58638 = (i__58078_58627 + (1));
seq__58074_58624 = G__58635;
chunk__58076_58625 = G__58636;
count__58077_58626 = G__58637;
i__58078_58627 = G__58638;
continue;
}
} else {
var temp__5735__auto___58640__$1 = cljs.core.seq(seq__58074_58624);
if(temp__5735__auto___58640__$1){
var seq__58074_58641__$1 = temp__5735__auto___58640__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58074_58641__$1)){
var c__4609__auto___58642 = cljs.core.chunk_first(seq__58074_58641__$1);
var G__58644 = cljs.core.chunk_rest(seq__58074_58641__$1);
var G__58645 = c__4609__auto___58642;
var G__58646 = cljs.core.count(c__4609__auto___58642);
var G__58647 = (0);
seq__58074_58624 = G__58644;
chunk__58076_58625 = G__58645;
count__58077_58626 = G__58646;
i__58078_58627 = G__58647;
continue;
} else {
var child_58648 = cljs.core.first(seq__58074_58641__$1);
if(cljs.core.truth_(child_58648)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58648);


var G__58649 = cljs.core.next(seq__58074_58641__$1);
var G__58650 = null;
var G__58651 = (0);
var G__58652 = (0);
seq__58074_58624 = G__58649;
chunk__58076_58625 = G__58650;
count__58077_58626 = G__58651;
i__58078_58627 = G__58652;
continue;
} else {
var G__58654 = cljs.core.next(seq__58074_58641__$1);
var G__58655 = null;
var G__58656 = (0);
var G__58657 = (0);
seq__58074_58624 = G__58654;
chunk__58076_58625 = G__58655;
count__58077_58626 = G__58656;
i__58078_58627 = G__58657;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58623);
}


var G__58658 = cljs.core.next(seq__58032_58616__$1);
var G__58659 = null;
var G__58660 = (0);
var G__58661 = (0);
seq__58032_58575 = G__58658;
chunk__58033_58576 = G__58659;
count__58034_58577 = G__58660;
i__58035_58578 = G__58661;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__58086 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__58086);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__58092 = cljs.core.seq(node);
var chunk__58093 = null;
var count__58094 = (0);
var i__58095 = (0);
while(true){
if((i__58095 < count__58094)){
var n = chunk__58093.cljs$core$IIndexed$_nth$arity$2(null,i__58095);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58664 = seq__58092;
var G__58665 = chunk__58093;
var G__58666 = count__58094;
var G__58667 = (i__58095 + (1));
seq__58092 = G__58664;
chunk__58093 = G__58665;
count__58094 = G__58666;
i__58095 = G__58667;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58092);
if(temp__5735__auto__){
var seq__58092__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58092__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__58092__$1);
var G__58668 = cljs.core.chunk_rest(seq__58092__$1);
var G__58669 = c__4609__auto__;
var G__58670 = cljs.core.count(c__4609__auto__);
var G__58671 = (0);
seq__58092 = G__58668;
chunk__58093 = G__58669;
count__58094 = G__58670;
i__58095 = G__58671;
continue;
} else {
var n = cljs.core.first(seq__58092__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58673 = cljs.core.next(seq__58092__$1);
var G__58674 = null;
var G__58675 = (0);
var G__58676 = (0);
seq__58092 = G__58673;
chunk__58093 = G__58674;
count__58094 = G__58675;
i__58095 = G__58676;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__58100 = shadow.dom.dom_node(new$);
var G__58101 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__58100,G__58101);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__58103 = arguments.length;
switch (G__58103) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__58107 = arguments.length;
switch (G__58107) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__58120 = arguments.length;
switch (G__58120) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58682 = arguments.length;
var i__4790__auto___58683 = (0);
while(true){
if((i__4790__auto___58683 < len__4789__auto___58682)){
args__4795__auto__.push((arguments[i__4790__auto___58683]));

var G__58684 = (i__4790__auto___58683 + (1));
i__4790__auto___58683 = G__58684;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__58133_58685 = cljs.core.seq(nodes);
var chunk__58134_58686 = null;
var count__58135_58687 = (0);
var i__58136_58688 = (0);
while(true){
if((i__58136_58688 < count__58135_58687)){
var node_58689 = chunk__58134_58686.cljs$core$IIndexed$_nth$arity$2(null,i__58136_58688);
fragment.appendChild(shadow.dom._to_dom(node_58689));


var G__58690 = seq__58133_58685;
var G__58691 = chunk__58134_58686;
var G__58692 = count__58135_58687;
var G__58693 = (i__58136_58688 + (1));
seq__58133_58685 = G__58690;
chunk__58134_58686 = G__58691;
count__58135_58687 = G__58692;
i__58136_58688 = G__58693;
continue;
} else {
var temp__5735__auto___58694 = cljs.core.seq(seq__58133_58685);
if(temp__5735__auto___58694){
var seq__58133_58695__$1 = temp__5735__auto___58694;
if(cljs.core.chunked_seq_QMARK_(seq__58133_58695__$1)){
var c__4609__auto___58696 = cljs.core.chunk_first(seq__58133_58695__$1);
var G__58697 = cljs.core.chunk_rest(seq__58133_58695__$1);
var G__58698 = c__4609__auto___58696;
var G__58699 = cljs.core.count(c__4609__auto___58696);
var G__58700 = (0);
seq__58133_58685 = G__58697;
chunk__58134_58686 = G__58698;
count__58135_58687 = G__58699;
i__58136_58688 = G__58700;
continue;
} else {
var node_58702 = cljs.core.first(seq__58133_58695__$1);
fragment.appendChild(shadow.dom._to_dom(node_58702));


var G__58703 = cljs.core.next(seq__58133_58695__$1);
var G__58704 = null;
var G__58705 = (0);
var G__58706 = (0);
seq__58133_58685 = G__58703;
chunk__58134_58686 = G__58704;
count__58135_58687 = G__58705;
i__58136_58688 = G__58706;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq58131){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58131));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__58137_58709 = cljs.core.seq(scripts);
var chunk__58138_58710 = null;
var count__58139_58711 = (0);
var i__58140_58712 = (0);
while(true){
if((i__58140_58712 < count__58139_58711)){
var vec__58149_58714 = chunk__58138_58710.cljs$core$IIndexed$_nth$arity$2(null,i__58140_58712);
var script_tag_58715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58149_58714,(0),null);
var script_body_58716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58149_58714,(1),null);
eval(script_body_58716);


var G__58718 = seq__58137_58709;
var G__58719 = chunk__58138_58710;
var G__58720 = count__58139_58711;
var G__58721 = (i__58140_58712 + (1));
seq__58137_58709 = G__58718;
chunk__58138_58710 = G__58719;
count__58139_58711 = G__58720;
i__58140_58712 = G__58721;
continue;
} else {
var temp__5735__auto___58722 = cljs.core.seq(seq__58137_58709);
if(temp__5735__auto___58722){
var seq__58137_58723__$1 = temp__5735__auto___58722;
if(cljs.core.chunked_seq_QMARK_(seq__58137_58723__$1)){
var c__4609__auto___58725 = cljs.core.chunk_first(seq__58137_58723__$1);
var G__58727 = cljs.core.chunk_rest(seq__58137_58723__$1);
var G__58728 = c__4609__auto___58725;
var G__58729 = cljs.core.count(c__4609__auto___58725);
var G__58730 = (0);
seq__58137_58709 = G__58727;
chunk__58138_58710 = G__58728;
count__58139_58711 = G__58729;
i__58140_58712 = G__58730;
continue;
} else {
var vec__58153_58731 = cljs.core.first(seq__58137_58723__$1);
var script_tag_58732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58153_58731,(0),null);
var script_body_58733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58153_58731,(1),null);
eval(script_body_58733);


var G__58734 = cljs.core.next(seq__58137_58723__$1);
var G__58735 = null;
var G__58736 = (0);
var G__58737 = (0);
seq__58137_58709 = G__58734;
chunk__58138_58710 = G__58735;
count__58139_58711 = G__58736;
i__58140_58712 = G__58737;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__58158){
var vec__58159 = p__58158;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58159,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58159,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__58163 = shadow.dom.dom_node(el);
var G__58164 = cls;
return goog.dom.getAncestorByClass(G__58163,G__58164);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__58166 = arguments.length;
switch (G__58166) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__58167 = shadow.dom.dom_node(el);
var G__58168 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__58167,G__58168);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__58169 = shadow.dom.dom_node(el);
var G__58170 = cljs.core.name(tag);
var G__58171 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__58169,G__58170,G__58171);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__58172 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__58172);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__58173 = shadow.dom.dom_node(dom);
var G__58174 = value;
return goog.dom.forms.setValue(G__58173,G__58174);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__58181 = cljs.core.seq(style_keys);
var chunk__58182 = null;
var count__58183 = (0);
var i__58184 = (0);
while(true){
if((i__58184 < count__58183)){
var it = chunk__58182.cljs$core$IIndexed$_nth$arity$2(null,i__58184);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58745 = seq__58181;
var G__58746 = chunk__58182;
var G__58747 = count__58183;
var G__58748 = (i__58184 + (1));
seq__58181 = G__58745;
chunk__58182 = G__58746;
count__58183 = G__58747;
i__58184 = G__58748;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58181);
if(temp__5735__auto__){
var seq__58181__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58181__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__58181__$1);
var G__58749 = cljs.core.chunk_rest(seq__58181__$1);
var G__58750 = c__4609__auto__;
var G__58751 = cljs.core.count(c__4609__auto__);
var G__58752 = (0);
seq__58181 = G__58749;
chunk__58182 = G__58750;
count__58183 = G__58751;
i__58184 = G__58752;
continue;
} else {
var it = cljs.core.first(seq__58181__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58753 = cljs.core.next(seq__58181__$1);
var G__58754 = null;
var G__58755 = (0);
var G__58756 = (0);
seq__58181 = G__58753;
chunk__58182 = G__58754;
count__58183 = G__58755;
i__58184 = G__58756;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k58186,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__58190 = k58186;
var G__58190__$1 = (((G__58190 instanceof cljs.core.Keyword))?G__58190.fqn:null);
switch (G__58190__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58186,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__58192){
var vec__58193 = p__58192;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58193,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58193,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58185){
var self__ = this;
var G__58185__$1 = this;
return (new cljs.core.RecordIter((0),G__58185__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__58197 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__58197(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58187,other58188){
var self__ = this;
var this58187__$1 = this;
return (((!((other58188 == null)))) && ((this58187__$1.constructor === other58188.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58187__$1.x,other58188.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58187__$1.y,other58188.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58187__$1.__extmap,other58188.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__58185){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__58205 = cljs.core.keyword_identical_QMARK_;
var expr__58206 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__58208 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__58209 = expr__58206;
return (pred__58205.cljs$core$IFn$_invoke$arity$2 ? pred__58205.cljs$core$IFn$_invoke$arity$2(G__58208,G__58209) : pred__58205.call(null,G__58208,G__58209));
})())){
return (new shadow.dom.Coordinate(G__58185,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__58210 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__58211 = expr__58206;
return (pred__58205.cljs$core$IFn$_invoke$arity$2 ? pred__58205.cljs$core$IFn$_invoke$arity$2(G__58210,G__58211) : pred__58205.call(null,G__58210,G__58211));
})())){
return (new shadow.dom.Coordinate(self__.x,G__58185,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__58185),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__58185){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__58185,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__58189){
var extmap__4478__auto__ = (function (){var G__58214 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58189,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__58189)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58214);
} else {
return G__58214;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__58189),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__58189),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__58215 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__58215);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__58216 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__58216);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__58220 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__58220);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k58224,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__58233 = k58224;
var G__58233__$1 = (((G__58233 instanceof cljs.core.Keyword))?G__58233.fqn:null);
switch (G__58233__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58224,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__58234){
var vec__58235 = p__58234;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58235,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58235,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58223){
var self__ = this;
var G__58223__$1 = this;
return (new cljs.core.RecordIter((0),G__58223__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__58240 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__58240(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58225,other58226){
var self__ = this;
var this58225__$1 = this;
return (((!((other58226 == null)))) && ((this58225__$1.constructor === other58226.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58225__$1.w,other58226.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58225__$1.h,other58226.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58225__$1.__extmap,other58226.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__58223){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__58250 = cljs.core.keyword_identical_QMARK_;
var expr__58251 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__58253 = new cljs.core.Keyword(null,"w","w",354169001);
var G__58254 = expr__58251;
return (pred__58250.cljs$core$IFn$_invoke$arity$2 ? pred__58250.cljs$core$IFn$_invoke$arity$2(G__58253,G__58254) : pred__58250.call(null,G__58253,G__58254));
})())){
return (new shadow.dom.Size(G__58223,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__58256 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__58257 = expr__58251;
return (pred__58250.cljs$core$IFn$_invoke$arity$2 ? pred__58250.cljs$core$IFn$_invoke$arity$2(G__58256,G__58257) : pred__58250.call(null,G__58256,G__58257));
})())){
return (new shadow.dom.Size(self__.w,G__58223,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__58223),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__58223){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__58223,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__58228){
var extmap__4478__auto__ = (function (){var G__58259 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58228,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__58228)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58259);
} else {
return G__58259;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__58228),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__58228),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__58261 = shadow.dom.dom_node(el);
return goog.style.getSize(G__58261);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__58761 = (i + (1));
var G__58762 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__58761;
ret = G__58762;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58272){
var vec__58273 = p__58272;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58273,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58273,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__58279 = arguments.length;
switch (G__58279) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__58283_58764 = new_node;
var G__58284_58765 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__58283_58764,G__58284_58765);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__58294_58766 = new_node;
var G__58295_58767 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__58294_58766,G__58295_58767);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__58768 = ps;
var G__58769 = (i + (1));
el__$1 = G__58768;
i = G__58769;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__58309 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__58309);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__58318 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__58318);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__58324 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__58324);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__58331 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58331,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58331,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58331,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__58335_58770 = cljs.core.seq(props);
var chunk__58340_58771 = null;
var count__58341_58772 = (0);
var i__58342_58773 = (0);
while(true){
if((i__58342_58773 < count__58341_58772)){
var vec__58356_58774 = chunk__58340_58771.cljs$core$IIndexed$_nth$arity$2(null,i__58342_58773);
var k_58775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58356_58774,(0),null);
var v_58776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58356_58774,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_58775);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_58775),v_58776);


var G__58777 = seq__58335_58770;
var G__58778 = chunk__58340_58771;
var G__58779 = count__58341_58772;
var G__58780 = (i__58342_58773 + (1));
seq__58335_58770 = G__58777;
chunk__58340_58771 = G__58778;
count__58341_58772 = G__58779;
i__58342_58773 = G__58780;
continue;
} else {
var temp__5735__auto___58781 = cljs.core.seq(seq__58335_58770);
if(temp__5735__auto___58781){
var seq__58335_58782__$1 = temp__5735__auto___58781;
if(cljs.core.chunked_seq_QMARK_(seq__58335_58782__$1)){
var c__4609__auto___58783 = cljs.core.chunk_first(seq__58335_58782__$1);
var G__58784 = cljs.core.chunk_rest(seq__58335_58782__$1);
var G__58785 = c__4609__auto___58783;
var G__58786 = cljs.core.count(c__4609__auto___58783);
var G__58787 = (0);
seq__58335_58770 = G__58784;
chunk__58340_58771 = G__58785;
count__58341_58772 = G__58786;
i__58342_58773 = G__58787;
continue;
} else {
var vec__58359_58788 = cljs.core.first(seq__58335_58782__$1);
var k_58789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58359_58788,(0),null);
var v_58790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58359_58788,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_58789);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_58789),v_58790);


var G__58791 = cljs.core.next(seq__58335_58782__$1);
var G__58792 = null;
var G__58793 = (0);
var G__58794 = (0);
seq__58335_58770 = G__58791;
chunk__58340_58771 = G__58792;
count__58341_58772 = G__58793;
i__58342_58773 = G__58794;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__58370 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58370,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58370,(1),null);
var seq__58373_58795 = cljs.core.seq(node_children);
var chunk__58375_58796 = null;
var count__58376_58797 = (0);
var i__58377_58798 = (0);
while(true){
if((i__58377_58798 < count__58376_58797)){
var child_struct_58799 = chunk__58375_58796.cljs$core$IIndexed$_nth$arity$2(null,i__58377_58798);
if((!((child_struct_58799 == null)))){
if(typeof child_struct_58799 === 'string'){
var text_58800 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_58800),child_struct_58799].join(''));
} else {
var children_58801 = shadow.dom.svg_node(child_struct_58799);
if(cljs.core.seq_QMARK_(children_58801)){
var seq__58410_58802 = cljs.core.seq(children_58801);
var chunk__58412_58803 = null;
var count__58413_58804 = (0);
var i__58414_58805 = (0);
while(true){
if((i__58414_58805 < count__58413_58804)){
var child_58806 = chunk__58412_58803.cljs$core$IIndexed$_nth$arity$2(null,i__58414_58805);
if(cljs.core.truth_(child_58806)){
node.appendChild(child_58806);


var G__58807 = seq__58410_58802;
var G__58808 = chunk__58412_58803;
var G__58809 = count__58413_58804;
var G__58810 = (i__58414_58805 + (1));
seq__58410_58802 = G__58807;
chunk__58412_58803 = G__58808;
count__58413_58804 = G__58809;
i__58414_58805 = G__58810;
continue;
} else {
var G__58811 = seq__58410_58802;
var G__58812 = chunk__58412_58803;
var G__58813 = count__58413_58804;
var G__58814 = (i__58414_58805 + (1));
seq__58410_58802 = G__58811;
chunk__58412_58803 = G__58812;
count__58413_58804 = G__58813;
i__58414_58805 = G__58814;
continue;
}
} else {
var temp__5735__auto___58815 = cljs.core.seq(seq__58410_58802);
if(temp__5735__auto___58815){
var seq__58410_58816__$1 = temp__5735__auto___58815;
if(cljs.core.chunked_seq_QMARK_(seq__58410_58816__$1)){
var c__4609__auto___58817 = cljs.core.chunk_first(seq__58410_58816__$1);
var G__58818 = cljs.core.chunk_rest(seq__58410_58816__$1);
var G__58819 = c__4609__auto___58817;
var G__58820 = cljs.core.count(c__4609__auto___58817);
var G__58821 = (0);
seq__58410_58802 = G__58818;
chunk__58412_58803 = G__58819;
count__58413_58804 = G__58820;
i__58414_58805 = G__58821;
continue;
} else {
var child_58822 = cljs.core.first(seq__58410_58816__$1);
if(cljs.core.truth_(child_58822)){
node.appendChild(child_58822);


var G__58823 = cljs.core.next(seq__58410_58816__$1);
var G__58824 = null;
var G__58825 = (0);
var G__58826 = (0);
seq__58410_58802 = G__58823;
chunk__58412_58803 = G__58824;
count__58413_58804 = G__58825;
i__58414_58805 = G__58826;
continue;
} else {
var G__58827 = cljs.core.next(seq__58410_58816__$1);
var G__58828 = null;
var G__58829 = (0);
var G__58830 = (0);
seq__58410_58802 = G__58827;
chunk__58412_58803 = G__58828;
count__58413_58804 = G__58829;
i__58414_58805 = G__58830;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_58801);
}
}


var G__58831 = seq__58373_58795;
var G__58832 = chunk__58375_58796;
var G__58833 = count__58376_58797;
var G__58834 = (i__58377_58798 + (1));
seq__58373_58795 = G__58831;
chunk__58375_58796 = G__58832;
count__58376_58797 = G__58833;
i__58377_58798 = G__58834;
continue;
} else {
var G__58835 = seq__58373_58795;
var G__58836 = chunk__58375_58796;
var G__58837 = count__58376_58797;
var G__58838 = (i__58377_58798 + (1));
seq__58373_58795 = G__58835;
chunk__58375_58796 = G__58836;
count__58376_58797 = G__58837;
i__58377_58798 = G__58838;
continue;
}
} else {
var temp__5735__auto___58839 = cljs.core.seq(seq__58373_58795);
if(temp__5735__auto___58839){
var seq__58373_58840__$1 = temp__5735__auto___58839;
if(cljs.core.chunked_seq_QMARK_(seq__58373_58840__$1)){
var c__4609__auto___58841 = cljs.core.chunk_first(seq__58373_58840__$1);
var G__58842 = cljs.core.chunk_rest(seq__58373_58840__$1);
var G__58843 = c__4609__auto___58841;
var G__58844 = cljs.core.count(c__4609__auto___58841);
var G__58845 = (0);
seq__58373_58795 = G__58842;
chunk__58375_58796 = G__58843;
count__58376_58797 = G__58844;
i__58377_58798 = G__58845;
continue;
} else {
var child_struct_58846 = cljs.core.first(seq__58373_58840__$1);
if((!((child_struct_58846 == null)))){
if(typeof child_struct_58846 === 'string'){
var text_58847 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_58847),child_struct_58846].join(''));
} else {
var children_58848 = shadow.dom.svg_node(child_struct_58846);
if(cljs.core.seq_QMARK_(children_58848)){
var seq__58416_58849 = cljs.core.seq(children_58848);
var chunk__58418_58850 = null;
var count__58419_58851 = (0);
var i__58420_58852 = (0);
while(true){
if((i__58420_58852 < count__58419_58851)){
var child_58853 = chunk__58418_58850.cljs$core$IIndexed$_nth$arity$2(null,i__58420_58852);
if(cljs.core.truth_(child_58853)){
node.appendChild(child_58853);


var G__58854 = seq__58416_58849;
var G__58855 = chunk__58418_58850;
var G__58856 = count__58419_58851;
var G__58857 = (i__58420_58852 + (1));
seq__58416_58849 = G__58854;
chunk__58418_58850 = G__58855;
count__58419_58851 = G__58856;
i__58420_58852 = G__58857;
continue;
} else {
var G__58858 = seq__58416_58849;
var G__58859 = chunk__58418_58850;
var G__58860 = count__58419_58851;
var G__58861 = (i__58420_58852 + (1));
seq__58416_58849 = G__58858;
chunk__58418_58850 = G__58859;
count__58419_58851 = G__58860;
i__58420_58852 = G__58861;
continue;
}
} else {
var temp__5735__auto___58862__$1 = cljs.core.seq(seq__58416_58849);
if(temp__5735__auto___58862__$1){
var seq__58416_58863__$1 = temp__5735__auto___58862__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58416_58863__$1)){
var c__4609__auto___58864 = cljs.core.chunk_first(seq__58416_58863__$1);
var G__58865 = cljs.core.chunk_rest(seq__58416_58863__$1);
var G__58866 = c__4609__auto___58864;
var G__58867 = cljs.core.count(c__4609__auto___58864);
var G__58868 = (0);
seq__58416_58849 = G__58865;
chunk__58418_58850 = G__58866;
count__58419_58851 = G__58867;
i__58420_58852 = G__58868;
continue;
} else {
var child_58869 = cljs.core.first(seq__58416_58863__$1);
if(cljs.core.truth_(child_58869)){
node.appendChild(child_58869);


var G__58870 = cljs.core.next(seq__58416_58863__$1);
var G__58871 = null;
var G__58872 = (0);
var G__58873 = (0);
seq__58416_58849 = G__58870;
chunk__58418_58850 = G__58871;
count__58419_58851 = G__58872;
i__58420_58852 = G__58873;
continue;
} else {
var G__58874 = cljs.core.next(seq__58416_58863__$1);
var G__58875 = null;
var G__58876 = (0);
var G__58877 = (0);
seq__58416_58849 = G__58874;
chunk__58418_58850 = G__58875;
count__58419_58851 = G__58876;
i__58420_58852 = G__58877;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_58848);
}
}


var G__58878 = cljs.core.next(seq__58373_58840__$1);
var G__58879 = null;
var G__58880 = (0);
var G__58881 = (0);
seq__58373_58795 = G__58878;
chunk__58375_58796 = G__58879;
count__58376_58797 = G__58880;
i__58377_58798 = G__58881;
continue;
} else {
var G__58882 = cljs.core.next(seq__58373_58840__$1);
var G__58883 = null;
var G__58884 = (0);
var G__58885 = (0);
seq__58373_58795 = G__58882;
chunk__58375_58796 = G__58883;
count__58376_58797 = G__58884;
i__58377_58798 = G__58885;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__58422_58886 = shadow.dom._to_svg;
var G__58423_58887 = "string";
var G__58424_58888 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__58422_58886,G__58423_58887,G__58424_58888);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__58425_58889 = shadow.dom._to_svg;
var G__58426_58890 = "null";
var G__58427_58891 = (function (_){
return null;
});
goog.object.set(G__58425_58889,G__58426_58890,G__58427_58891);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58892 = arguments.length;
var i__4790__auto___58893 = (0);
while(true){
if((i__4790__auto___58893 < len__4789__auto___58892)){
args__4795__auto__.push((arguments[i__4790__auto___58893]));

var G__58894 = (i__4790__auto___58893 + (1));
i__4790__auto___58893 = G__58894;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq58428){
var G__58429 = cljs.core.first(seq58428);
var seq58428__$1 = cljs.core.next(seq58428);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58429,seq58428__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__58442 = arguments.length;
switch (G__58442) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__58446_58896 = shadow.dom.dom_node(el);
var G__58447_58897 = cljs.core.name(event);
var G__58448_58898 = event_fn;
shadow.dom.dom_listen(G__58446_58896,G__58447_58897,G__58448_58898);

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__56255__auto___58899 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56256__auto__ = (function (){var switch__56192__auto__ = (function (state_58454){
var state_val_58455 = (state_58454[(1)]);
if((state_val_58455 === (1))){
var state_58454__$1 = state_58454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58454__$1,(2),once_or_cleanup);
} else {
if((state_val_58455 === (2))){
var inst_58451 = (state_58454[(2)]);
var inst_58452 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_58454__$1 = (function (){var statearr_58463 = state_58454;
(statearr_58463[(7)] = inst_58451);

return statearr_58463;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58454__$1,inst_58452);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__56193__auto__ = null;
var shadow$dom$state_machine__56193__auto____0 = (function (){
var statearr_58464 = [null,null,null,null,null,null,null,null];
(statearr_58464[(0)] = shadow$dom$state_machine__56193__auto__);

(statearr_58464[(1)] = (1));

return statearr_58464;
});
var shadow$dom$state_machine__56193__auto____1 = (function (state_58454){
while(true){
var ret_value__56194__auto__ = (function (){try{while(true){
var result__56195__auto__ = switch__56192__auto__(state_58454);
if(cljs.core.keyword_identical_QMARK_(result__56195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56195__auto__;
}
break;
}
}catch (e58465){if((e58465 instanceof Object)){
var ex__56196__auto__ = e58465;
var statearr_58466_58900 = state_58454;
(statearr_58466_58900[(5)] = ex__56196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58465;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58901 = state_58454;
state_58454 = G__58901;
continue;
} else {
return ret_value__56194__auto__;
}
break;
}
});
shadow$dom$state_machine__56193__auto__ = function(state_58454){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__56193__auto____0.call(this);
case 1:
return shadow$dom$state_machine__56193__auto____1.call(this,state_58454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__56193__auto____0;
shadow$dom$state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__56193__auto____1;
return shadow$dom$state_machine__56193__auto__;
})()
})();
var state__56257__auto__ = (function (){var statearr_58467 = f__56256__auto__();
(statearr_58467[(6)] = c__56255__auto___58899);

return statearr_58467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56257__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
