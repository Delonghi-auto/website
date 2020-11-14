goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___60104 = arguments.length;
var i__4790__auto___60105 = (0);
while(true){
if((i__4790__auto___60105 < len__4789__auto___60104)){
args__4795__auto__.push((arguments[i__4790__auto___60105]));

var G__60106 = (i__4790__auto___60105 + (1));
i__4790__auto___60105 = G__60106;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq59850){
var G__59851 = cljs.core.first(seq59850);
var seq59850__$1 = cljs.core.next(seq59850);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59851,seq59850__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__59852){
var map__59853 = p__59852;
var map__59853__$1 = (((((!((map__59853 == null))))?(((((map__59853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59853):map__59853);
var src = map__59853__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59853__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59853__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__59855 = cljs.core.seq(sources);
var chunk__59856 = null;
var count__59857 = (0);
var i__59858 = (0);
while(true){
if((i__59858 < count__59857)){
var map__59865 = chunk__59856.cljs$core$IIndexed$_nth$arity$2(null,i__59858);
var map__59865__$1 = (((((!((map__59865 == null))))?(((((map__59865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59865):map__59865);
var src = map__59865__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59865__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59865__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59865__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59865__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e59867){var e_60117 = e59867;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_60117);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_60117.message)].join('')));
}

var G__60118 = seq__59855;
var G__60119 = chunk__59856;
var G__60120 = count__59857;
var G__60121 = (i__59858 + (1));
seq__59855 = G__60118;
chunk__59856 = G__60119;
count__59857 = G__60120;
i__59858 = G__60121;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59855);
if(temp__5735__auto__){
var seq__59855__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59855__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59855__$1);
var G__60126 = cljs.core.chunk_rest(seq__59855__$1);
var G__60127 = c__4609__auto__;
var G__60128 = cljs.core.count(c__4609__auto__);
var G__60129 = (0);
seq__59855 = G__60126;
chunk__59856 = G__60127;
count__59857 = G__60128;
i__59858 = G__60129;
continue;
} else {
var map__59868 = cljs.core.first(seq__59855__$1);
var map__59868__$1 = (((((!((map__59868 == null))))?(((((map__59868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59868):map__59868);
var src = map__59868__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59868__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59868__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59868__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59868__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e59870){var e_60130 = e59870;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_60130);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_60130.message)].join('')));
}

var G__60131 = cljs.core.next(seq__59855__$1);
var G__60132 = null;
var G__60133 = (0);
var G__60134 = (0);
seq__59855 = G__60131;
chunk__59856 = G__60132;
count__59857 = G__60133;
i__59858 = G__60134;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__59871 = cljs.core.seq(js_requires);
var chunk__59872 = null;
var count__59873 = (0);
var i__59874 = (0);
while(true){
if((i__59874 < count__59873)){
var js_ns = chunk__59872.cljs$core$IIndexed$_nth$arity$2(null,i__59874);
var require_str_60136 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_60136);


var G__60137 = seq__59871;
var G__60138 = chunk__59872;
var G__60139 = count__59873;
var G__60140 = (i__59874 + (1));
seq__59871 = G__60137;
chunk__59872 = G__60138;
count__59873 = G__60139;
i__59874 = G__60140;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59871);
if(temp__5735__auto__){
var seq__59871__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59871__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59871__$1);
var G__60141 = cljs.core.chunk_rest(seq__59871__$1);
var G__60142 = c__4609__auto__;
var G__60143 = cljs.core.count(c__4609__auto__);
var G__60144 = (0);
seq__59871 = G__60141;
chunk__59872 = G__60142;
count__59873 = G__60143;
i__59874 = G__60144;
continue;
} else {
var js_ns = cljs.core.first(seq__59871__$1);
var require_str_60145 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_60145);


var G__60146 = cljs.core.next(seq__59871__$1);
var G__60147 = null;
var G__60148 = (0);
var G__60149 = (0);
seq__59871 = G__60146;
chunk__59872 = G__60147;
count__59873 = G__60148;
i__59874 = G__60149;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__59875 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__59875) : callback.call(null,G__59875));
} else {
var G__59876 = shadow.cljs.devtools.client.env.files_url();
var G__59877 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__59878 = "POST";
var G__59879 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__59880 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__59876,G__59877,G__59878,G__59879,G__59880);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__59882){
var map__59883 = p__59882;
var map__59883__$1 = (((((!((map__59883 == null))))?(((((map__59883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59883):map__59883);
var msg = map__59883__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59883__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59883__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__59885 = info;
var map__59885__$1 = (((((!((map__59885 == null))))?(((((map__59885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59885):map__59885);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59885__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59885__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59887(s__59888){
return (new cljs.core.LazySeq(null,(function (){
var s__59888__$1 = s__59888;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59888__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__59893 = cljs.core.first(xs__6292__auto__);
var map__59893__$1 = (((((!((map__59893 == null))))?(((((map__59893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59893):map__59893);
var src = map__59893__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59893__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59893__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__59888__$1,map__59893,map__59893__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59885,map__59885__$1,sources,compiled,map__59883,map__59883__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59887_$_iter__59889(s__59890){
return (new cljs.core.LazySeq(null,((function (s__59888__$1,map__59893,map__59893__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59885,map__59885__$1,sources,compiled,map__59883,map__59883__$1,msg,info,reload_info){
return (function (){
var s__59890__$1 = s__59890;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__59890__$1);
if(temp__5735__auto____$1){
var s__59890__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59890__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59890__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59892 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59891 = (0);
while(true){
if((i__59891 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59891);
cljs.core.chunk_append(b__59892,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__60150 = (i__59891 + (1));
i__59891 = G__60150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59892),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59887_$_iter__59889(cljs.core.chunk_rest(s__59890__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59892),null);
}
} else {
var warning = cljs.core.first(s__59890__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59887_$_iter__59889(cljs.core.rest(s__59890__$2)));
}
} else {
return null;
}
break;
}
});})(s__59888__$1,map__59893,map__59893__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59885,map__59885__$1,sources,compiled,map__59883,map__59883__$1,msg,info,reload_info))
,null,null));
});})(s__59888__$1,map__59893,map__59893__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59885,map__59885__$1,sources,compiled,map__59883,map__59883__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59887(cljs.core.rest(s__59888__$1)));
} else {
var G__60151 = cljs.core.rest(s__59888__$1);
s__59888__$1 = G__60151;
continue;
}
} else {
var G__60152 = cljs.core.rest(s__59888__$1);
s__59888__$1 = G__60152;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__59895_60153 = cljs.core.seq(warnings);
var chunk__59896_60154 = null;
var count__59897_60155 = (0);
var i__59898_60156 = (0);
while(true){
if((i__59898_60156 < count__59897_60155)){
var map__59903_60157 = chunk__59896_60154.cljs$core$IIndexed$_nth$arity$2(null,i__59898_60156);
var map__59903_60158__$1 = (((((!((map__59903_60157 == null))))?(((((map__59903_60157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59903_60157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59903_60157):map__59903_60157);
var w_60159 = map__59903_60158__$1;
var msg_60160__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59903_60158__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_60161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59903_60158__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_60162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59903_60158__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_60163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59903_60158__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_60163)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_60161),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_60162),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_60160__$1)].join(''));


var G__60164 = seq__59895_60153;
var G__60165 = chunk__59896_60154;
var G__60166 = count__59897_60155;
var G__60167 = (i__59898_60156 + (1));
seq__59895_60153 = G__60164;
chunk__59896_60154 = G__60165;
count__59897_60155 = G__60166;
i__59898_60156 = G__60167;
continue;
} else {
var temp__5735__auto___60168 = cljs.core.seq(seq__59895_60153);
if(temp__5735__auto___60168){
var seq__59895_60169__$1 = temp__5735__auto___60168;
if(cljs.core.chunked_seq_QMARK_(seq__59895_60169__$1)){
var c__4609__auto___60170 = cljs.core.chunk_first(seq__59895_60169__$1);
var G__60171 = cljs.core.chunk_rest(seq__59895_60169__$1);
var G__60172 = c__4609__auto___60170;
var G__60173 = cljs.core.count(c__4609__auto___60170);
var G__60174 = (0);
seq__59895_60153 = G__60171;
chunk__59896_60154 = G__60172;
count__59897_60155 = G__60173;
i__59898_60156 = G__60174;
continue;
} else {
var map__59905_60175 = cljs.core.first(seq__59895_60169__$1);
var map__59905_60176__$1 = (((((!((map__59905_60175 == null))))?(((((map__59905_60175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59905_60175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59905_60175):map__59905_60175);
var w_60177 = map__59905_60176__$1;
var msg_60178__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59905_60176__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_60179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59905_60176__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_60180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59905_60176__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_60181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59905_60176__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_60181)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_60179),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_60180),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_60178__$1)].join(''));


var G__60182 = cljs.core.next(seq__59895_60169__$1);
var G__60183 = null;
var G__60184 = (0);
var G__60185 = (0);
seq__59895_60153 = G__60182;
chunk__59896_60154 = G__60183;
count__59897_60155 = G__60184;
i__59898_60156 = G__60185;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__59907){
var map__59908 = p__59907;
var map__59908__$1 = (((((!((map__59908 == null))))?(((((map__59908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59908):map__59908);
var src = map__59908__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59908__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59908__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__59910){
var map__59911 = p__59910;
var map__59911__$1 = (((((!((map__59911 == null))))?(((((map__59911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59911):map__59911);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59911__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__59913){
var map__59914 = p__59913;
var map__59914__$1 = (((((!((map__59914 == null))))?(((((map__59914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59914):map__59914);
var rc = map__59914__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59914__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__59881_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__59881_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__59926){
var map__59927 = p__59926;
var map__59927__$1 = (((((!((map__59927 == null))))?(((((map__59927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59927):map__59927);
var msg = map__59927__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59927__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__59929 = cljs.core.seq(updates);
var chunk__59931 = null;
var count__59932 = (0);
var i__59933 = (0);
while(true){
if((i__59933 < count__59932)){
var path = chunk__59931.cljs$core$IIndexed$_nth$arity$2(null,i__59933);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__60006_60186 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__60009_60187 = null;
var count__60010_60188 = (0);
var i__60011_60189 = (0);
while(true){
if((i__60011_60189 < count__60010_60188)){
var node_60190 = chunk__60009_60187.cljs$core$IIndexed$_nth$arity$2(null,i__60011_60189);
var path_match_60191 = shadow.cljs.devtools.client.browser.match_paths(node_60190.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60191)){
var new_link_60192 = (function (){var G__60020 = node_60190.cloneNode(true);
G__60020.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60191),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60020;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60191], 0));

goog.dom.insertSiblingAfter(new_link_60192,node_60190);

goog.dom.removeNode(node_60190);


var G__60193 = seq__60006_60186;
var G__60194 = chunk__60009_60187;
var G__60195 = count__60010_60188;
var G__60196 = (i__60011_60189 + (1));
seq__60006_60186 = G__60193;
chunk__60009_60187 = G__60194;
count__60010_60188 = G__60195;
i__60011_60189 = G__60196;
continue;
} else {
var G__60197 = seq__60006_60186;
var G__60198 = chunk__60009_60187;
var G__60199 = count__60010_60188;
var G__60200 = (i__60011_60189 + (1));
seq__60006_60186 = G__60197;
chunk__60009_60187 = G__60198;
count__60010_60188 = G__60199;
i__60011_60189 = G__60200;
continue;
}
} else {
var temp__5735__auto___60201 = cljs.core.seq(seq__60006_60186);
if(temp__5735__auto___60201){
var seq__60006_60202__$1 = temp__5735__auto___60201;
if(cljs.core.chunked_seq_QMARK_(seq__60006_60202__$1)){
var c__4609__auto___60203 = cljs.core.chunk_first(seq__60006_60202__$1);
var G__60204 = cljs.core.chunk_rest(seq__60006_60202__$1);
var G__60205 = c__4609__auto___60203;
var G__60206 = cljs.core.count(c__4609__auto___60203);
var G__60207 = (0);
seq__60006_60186 = G__60204;
chunk__60009_60187 = G__60205;
count__60010_60188 = G__60206;
i__60011_60189 = G__60207;
continue;
} else {
var node_60208 = cljs.core.first(seq__60006_60202__$1);
var path_match_60209 = shadow.cljs.devtools.client.browser.match_paths(node_60208.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60209)){
var new_link_60210 = (function (){var G__60021 = node_60208.cloneNode(true);
G__60021.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60209),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60021;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60209], 0));

goog.dom.insertSiblingAfter(new_link_60210,node_60208);

goog.dom.removeNode(node_60208);


var G__60211 = cljs.core.next(seq__60006_60202__$1);
var G__60212 = null;
var G__60213 = (0);
var G__60214 = (0);
seq__60006_60186 = G__60211;
chunk__60009_60187 = G__60212;
count__60010_60188 = G__60213;
i__60011_60189 = G__60214;
continue;
} else {
var G__60215 = cljs.core.next(seq__60006_60202__$1);
var G__60216 = null;
var G__60217 = (0);
var G__60218 = (0);
seq__60006_60186 = G__60215;
chunk__60009_60187 = G__60216;
count__60010_60188 = G__60217;
i__60011_60189 = G__60218;
continue;
}
}
} else {
}
}
break;
}


var G__60219 = seq__59929;
var G__60220 = chunk__59931;
var G__60221 = count__59932;
var G__60222 = (i__59933 + (1));
seq__59929 = G__60219;
chunk__59931 = G__60220;
count__59932 = G__60221;
i__59933 = G__60222;
continue;
} else {
var G__60223 = seq__59929;
var G__60224 = chunk__59931;
var G__60225 = count__59932;
var G__60226 = (i__59933 + (1));
seq__59929 = G__60223;
chunk__59931 = G__60224;
count__59932 = G__60225;
i__59933 = G__60226;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59929);
if(temp__5735__auto__){
var seq__59929__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59929__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59929__$1);
var G__60227 = cljs.core.chunk_rest(seq__59929__$1);
var G__60228 = c__4609__auto__;
var G__60229 = cljs.core.count(c__4609__auto__);
var G__60230 = (0);
seq__59929 = G__60227;
chunk__59931 = G__60228;
count__59932 = G__60229;
i__59933 = G__60230;
continue;
} else {
var path = cljs.core.first(seq__59929__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__60022_60231 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__60025_60232 = null;
var count__60026_60233 = (0);
var i__60027_60234 = (0);
while(true){
if((i__60027_60234 < count__60026_60233)){
var node_60235 = chunk__60025_60232.cljs$core$IIndexed$_nth$arity$2(null,i__60027_60234);
var path_match_60236 = shadow.cljs.devtools.client.browser.match_paths(node_60235.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60236)){
var new_link_60237 = (function (){var G__60036 = node_60235.cloneNode(true);
G__60036.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60236),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60036;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60236], 0));

goog.dom.insertSiblingAfter(new_link_60237,node_60235);

goog.dom.removeNode(node_60235);


var G__60238 = seq__60022_60231;
var G__60239 = chunk__60025_60232;
var G__60240 = count__60026_60233;
var G__60241 = (i__60027_60234 + (1));
seq__60022_60231 = G__60238;
chunk__60025_60232 = G__60239;
count__60026_60233 = G__60240;
i__60027_60234 = G__60241;
continue;
} else {
var G__60242 = seq__60022_60231;
var G__60243 = chunk__60025_60232;
var G__60244 = count__60026_60233;
var G__60245 = (i__60027_60234 + (1));
seq__60022_60231 = G__60242;
chunk__60025_60232 = G__60243;
count__60026_60233 = G__60244;
i__60027_60234 = G__60245;
continue;
}
} else {
var temp__5735__auto___60246__$1 = cljs.core.seq(seq__60022_60231);
if(temp__5735__auto___60246__$1){
var seq__60022_60247__$1 = temp__5735__auto___60246__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60022_60247__$1)){
var c__4609__auto___60248 = cljs.core.chunk_first(seq__60022_60247__$1);
var G__60249 = cljs.core.chunk_rest(seq__60022_60247__$1);
var G__60250 = c__4609__auto___60248;
var G__60251 = cljs.core.count(c__4609__auto___60248);
var G__60252 = (0);
seq__60022_60231 = G__60249;
chunk__60025_60232 = G__60250;
count__60026_60233 = G__60251;
i__60027_60234 = G__60252;
continue;
} else {
var node_60253 = cljs.core.first(seq__60022_60247__$1);
var path_match_60254 = shadow.cljs.devtools.client.browser.match_paths(node_60253.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60254)){
var new_link_60255 = (function (){var G__60038 = node_60253.cloneNode(true);
G__60038.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60254),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60038;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60254], 0));

goog.dom.insertSiblingAfter(new_link_60255,node_60253);

goog.dom.removeNode(node_60253);


var G__60256 = cljs.core.next(seq__60022_60247__$1);
var G__60257 = null;
var G__60258 = (0);
var G__60259 = (0);
seq__60022_60231 = G__60256;
chunk__60025_60232 = G__60257;
count__60026_60233 = G__60258;
i__60027_60234 = G__60259;
continue;
} else {
var G__60260 = cljs.core.next(seq__60022_60247__$1);
var G__60261 = null;
var G__60262 = (0);
var G__60263 = (0);
seq__60022_60231 = G__60260;
chunk__60025_60232 = G__60261;
count__60026_60233 = G__60262;
i__60027_60234 = G__60263;
continue;
}
}
} else {
}
}
break;
}


var G__60264 = cljs.core.next(seq__59929__$1);
var G__60265 = null;
var G__60266 = (0);
var G__60267 = (0);
seq__59929 = G__60264;
chunk__59931 = G__60265;
count__59932 = G__60266;
i__59933 = G__60267;
continue;
} else {
var G__60268 = cljs.core.next(seq__59929__$1);
var G__60269 = null;
var G__60270 = (0);
var G__60271 = (0);
seq__59929 = G__60268;
chunk__59931 = G__60269;
count__59932 = G__60270;
i__59933 = G__60271;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__60054){
var map__60055 = p__60054;
var map__60055__$1 = (((((!((map__60055 == null))))?(((((map__60055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60055):map__60055);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60055__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60055__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__60059,done){
var map__60060 = p__60059;
var map__60060__$1 = (((((!((map__60060 == null))))?(((((map__60060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60060):map__60060);
var msg = map__60060__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60060__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60060__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60060__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60060__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__60065){
var map__60066 = p__60065;
var map__60066__$1 = (((((!((map__60066 == null))))?(((((map__60066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60066):map__60066);
var src = map__60066__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60066__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e60070){var e = e60070;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__60073,done){
var map__60074 = p__60073;
var map__60074__$1 = (((((!((map__60074 == null))))?(((((map__60074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60074):map__60074);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60074__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60074__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__60076){
var map__60077 = p__60076;
var map__60077__$1 = (((((!((map__60077 == null))))?(((((map__60077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60077):map__60077);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60077__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60077__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__60079,done){
var map__60080 = p__60079;
var map__60080__$1 = (((((!((map__60080 == null))))?(((((map__60080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60080):map__60080);
var msg = map__60080__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60080__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__60088_60272 = type;
var G__60088_60273__$1 = (((G__60088_60272 instanceof cljs.core.Keyword))?G__60088_60272.fqn:null);
switch (G__60088_60273__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__60089 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__60090 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__60091 = "POST";
var G__60092 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__60093 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__60089,G__60090,G__60091,G__60092,G__60093);
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e60094){var e = e60094;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___60284 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___60284)){
var s_60285 = temp__5735__auto___60284;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_60285.onclose = (function (e){
return null;
}));

s_60285.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
