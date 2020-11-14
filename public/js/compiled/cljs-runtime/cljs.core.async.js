goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__56318 = arguments.length;
switch (G__56318) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56319 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56319 = (function (f,blockable,meta56320){
this.f = f;
this.blockable = blockable;
this.meta56320 = meta56320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56321,meta56320__$1){
var self__ = this;
var _56321__$1 = this;
return (new cljs.core.async.t_cljs$core$async56319(self__.f,self__.blockable,meta56320__$1));
}));

(cljs.core.async.t_cljs$core$async56319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56321){
var self__ = this;
var _56321__$1 = this;
return self__.meta56320;
}));

(cljs.core.async.t_cljs$core$async56319.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56319.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56319.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async56319.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async56319.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta56320","meta56320",657956361,null)], null);
}));

(cljs.core.async.t_cljs$core$async56319.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56319.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56319");

(cljs.core.async.t_cljs$core$async56319.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async56319");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56319.
 */
cljs.core.async.__GT_t_cljs$core$async56319 = (function cljs$core$async$__GT_t_cljs$core$async56319(f__$1,blockable__$1,meta56320){
return (new cljs.core.async.t_cljs$core$async56319(f__$1,blockable__$1,meta56320));
});

}

return (new cljs.core.async.t_cljs$core$async56319(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__56326 = arguments.length;
switch (G__56326) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__56328 = arguments.length;
switch (G__56328) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__56330 = arguments.length;
switch (G__56330) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_57765 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_57765) : fn1.call(null,val_57765));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_57765) : fn1.call(null,val_57765));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__56332 = arguments.length;
switch (G__56332) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___57772 = n;
var x_57773 = (0);
while(true){
if((x_57773 < n__4666__auto___57772)){
(a[x_57773] = x_57773);

var G__57774 = (x_57773 + (1));
x_57773 = G__57774;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56333 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56333 = (function (flag,meta56334){
this.flag = flag;
this.meta56334 = meta56334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56335,meta56334__$1){
var self__ = this;
var _56335__$1 = this;
return (new cljs.core.async.t_cljs$core$async56333(self__.flag,meta56334__$1));
}));

(cljs.core.async.t_cljs$core$async56333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56335){
var self__ = this;
var _56335__$1 = this;
return self__.meta56334;
}));

(cljs.core.async.t_cljs$core$async56333.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56333.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async56333.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56333.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async56333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta56334","meta56334",-265749824,null)], null);
}));

(cljs.core.async.t_cljs$core$async56333.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56333");

(cljs.core.async.t_cljs$core$async56333.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async56333");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56333.
 */
cljs.core.async.__GT_t_cljs$core$async56333 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async56333(flag__$1,meta56334){
return (new cljs.core.async.t_cljs$core$async56333(flag__$1,meta56334));
});

}

return (new cljs.core.async.t_cljs$core$async56333(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56336 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56336 = (function (flag,cb,meta56337){
this.flag = flag;
this.cb = cb;
this.meta56337 = meta56337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56338,meta56337__$1){
var self__ = this;
var _56338__$1 = this;
return (new cljs.core.async.t_cljs$core$async56336(self__.flag,self__.cb,meta56337__$1));
}));

(cljs.core.async.t_cljs$core$async56336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56338){
var self__ = this;
var _56338__$1 = this;
return self__.meta56337;
}));

(cljs.core.async.t_cljs$core$async56336.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56336.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async56336.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56336.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async56336.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta56337","meta56337",557635791,null)], null);
}));

(cljs.core.async.t_cljs$core$async56336.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56336.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56336");

(cljs.core.async.t_cljs$core$async56336.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async56336");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56336.
 */
cljs.core.async.__GT_t_cljs$core$async56336 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async56336(flag__$1,cb__$1,meta56337){
return (new cljs.core.async.t_cljs$core$async56336(flag__$1,cb__$1,meta56337));
});

}

return (new cljs.core.async.t_cljs$core$async56336(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56339_SHARP_){
var G__56341 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56339_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__56341) : fret.call(null,G__56341));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56340_SHARP_){
var G__56342 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56340_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__56342) : fret.call(null,G__56342));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__57778 = (i + (1));
i = G__57778;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___57781 = arguments.length;
var i__4790__auto___57782 = (0);
while(true){
if((i__4790__auto___57782 < len__4789__auto___57781)){
args__4795__auto__.push((arguments[i__4790__auto___57782]));

var G__57783 = (i__4790__auto___57782 + (1));
i__4790__auto___57782 = G__57783;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__56345){
var map__56346 = p__56345;
var map__56346__$1 = (((((!((map__56346 == null))))?(((((map__56346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56346):map__56346);
var opts = map__56346__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq56343){
var G__56344 = cljs.core.first(seq56343);
var seq56343__$1 = cljs.core.next(seq56343);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56344,seq56343__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__56349 = arguments.length;
switch (G__56349) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__56255__auto___57787 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56256__auto__ = (function (){var switch__56192__auto__ = (function (state_56373){
var state_val_56374 = (state_56373[(1)]);
if((state_val_56374 === (7))){
var inst_56369 = (state_56373[(2)]);
var state_56373__$1 = state_56373;
var statearr_56375_57788 = state_56373__$1;
(statearr_56375_57788[(2)] = inst_56369);

(statearr_56375_57788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56374 === (1))){
var state_56373__$1 = state_56373;
var statearr_56376_57789 = state_56373__$1;
(statearr_56376_57789[(2)] = null);

(statearr_56376_57789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56374 === (4))){
var inst_56352 = (state_56373[(7)]);
var inst_56352__$1 = (state_56373[(2)]);
var inst_56353 = (inst_56352__$1 == null);
var state_56373__$1 = (function (){var statearr_56377 = state_56373;
(statearr_56377[(7)] = inst_56352__$1);

return statearr_56377;
})();
if(cljs.core.truth_(inst_56353)){
var statearr_56378_57791 = state_56373__$1;
(statearr_56378_57791[(1)] = (5));

} else {
var statearr_56379_57793 = state_56373__$1;
(statearr_56379_57793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56374 === (13))){
var state_56373__$1 = state_56373;
var statearr_56380_57794 = state_56373__$1;
(statearr_56380_57794[(2)] = null);

(statearr_56380_57794[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56374 === (6))){
var inst_56352 = (state_56373[(7)]);
var state_56373__$1 = state_56373;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56373__$1,(11),to,inst_56352);
} else {
if((state_val_56374 === (3))){
var inst_56371 = (state_56373[(2)]);
var state_56373__$1 = state_56373;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56373__$1,inst_56371);
} else {
if((state_val_56374 === (12))){
var state_56373__$1 = state_56373;
var statearr_56381_57795 = state_56373__$1;
(statearr_56381_57795[(2)] = null);

(statearr_56381_57795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56374 === (2))){
var state_56373__$1 = state_56373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56373__$1,(4),from);
} else {
if((state_val_56374 === (11))){
var inst_56362 = (state_56373[(2)]);
var state_56373__$1 = state_56373;
if(cljs.core.truth_(inst_56362)){
var statearr_56382_57796 = state_56373__$1;
(statearr_56382_57796[(1)] = (12));

} else {
var statearr_56383_57797 = state_56373__$1;
(statearr_56383_57797[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56374 === (9))){
var state_56373__$1 = state_56373;
var statearr_56384_57798 = state_56373__$1;
(statearr_56384_57798[(2)] = null);

(statearr_56384_57798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56374 === (5))){
var state_56373__$1 = state_56373;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56385_57799 = state_56373__$1;
(statearr_56385_57799[(1)] = (8));

} else {
var statearr_56386_57800 = state_56373__$1;
(statearr_56386_57800[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56374 === (14))){
var inst_56367 = (state_56373[(2)]);
var state_56373__$1 = state_56373;
var statearr_56387_57801 = state_56373__$1;
(statearr_56387_57801[(2)] = inst_56367);

(statearr_56387_57801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56374 === (10))){
var inst_56359 = (state_56373[(2)]);
var state_56373__$1 = state_56373;
var statearr_56388_57802 = state_56373__$1;
(statearr_56388_57802[(2)] = inst_56359);

(statearr_56388_57802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56374 === (8))){
var inst_56356 = cljs.core.async.close_BANG_(to);
var state_56373__$1 = state_56373;
var statearr_56389_57803 = state_56373__$1;
(statearr_56389_57803[(2)] = inst_56356);

(statearr_56389_57803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56193__auto__ = null;
var cljs$core$async$state_machine__56193__auto____0 = (function (){
var statearr_56390 = [null,null,null,null,null,null,null,null];
(statearr_56390[(0)] = cljs$core$async$state_machine__56193__auto__);

(statearr_56390[(1)] = (1));

return statearr_56390;
});
var cljs$core$async$state_machine__56193__auto____1 = (function (state_56373){
while(true){
var ret_value__56194__auto__ = (function (){try{while(true){
var result__56195__auto__ = switch__56192__auto__(state_56373);
if(cljs.core.keyword_identical_QMARK_(result__56195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56195__auto__;
}
break;
}
}catch (e56391){if((e56391 instanceof Object)){
var ex__56196__auto__ = e56391;
var statearr_56392_57804 = state_56373;
(statearr_56392_57804[(5)] = ex__56196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56391;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57805 = state_56373;
state_56373 = G__57805;
continue;
} else {
return ret_value__56194__auto__;
}
break;
}
});
cljs$core$async$state_machine__56193__auto__ = function(state_56373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56193__auto____1.call(this,state_56373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56193__auto____0;
cljs$core$async$state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56193__auto____1;
return cljs$core$async$state_machine__56193__auto__;
})()
})();
var state__56257__auto__ = (function (){var statearr_56393 = f__56256__auto__();
(statearr_56393[(6)] = c__56255__auto___57787);

return statearr_56393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56257__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__56394){
var vec__56395 = p__56394;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56395,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56395,(1),null);
var job = vec__56395;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__56255__auto___57806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56256__auto__ = (function (){var switch__56192__auto__ = (function (state_56402){
var state_val_56403 = (state_56402[(1)]);
if((state_val_56403 === (1))){
var state_56402__$1 = state_56402;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56402__$1,(2),res,v);
} else {
if((state_val_56403 === (2))){
var inst_56399 = (state_56402[(2)]);
var inst_56400 = cljs.core.async.close_BANG_(res);
var state_56402__$1 = (function (){var statearr_56404 = state_56402;
(statearr_56404[(7)] = inst_56399);

return statearr_56404;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56402__$1,inst_56400);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____0 = (function (){
var statearr_56405 = [null,null,null,null,null,null,null,null];
(statearr_56405[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__);

(statearr_56405[(1)] = (1));

return statearr_56405;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____1 = (function (state_56402){
while(true){
var ret_value__56194__auto__ = (function (){try{while(true){
var result__56195__auto__ = switch__56192__auto__(state_56402);
if(cljs.core.keyword_identical_QMARK_(result__56195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56195__auto__;
}
break;
}
}catch (e56406){if((e56406 instanceof Object)){
var ex__56196__auto__ = e56406;
var statearr_56407_57807 = state_56402;
(statearr_56407_57807[(5)] = ex__56196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56406;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57810 = state_56402;
state_56402 = G__57810;
continue;
} else {
return ret_value__56194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__ = function(state_56402){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____1.call(this,state_56402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__;
})()
})();
var state__56257__auto__ = (function (){var statearr_56408 = f__56256__auto__();
(statearr_56408[(6)] = c__56255__auto___57806);

return statearr_56408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56257__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__56409){
var vec__56410 = p__56409;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56410,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56410,(1),null);
var job = vec__56410;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___57811 = n;
var __57812 = (0);
while(true){
if((__57812 < n__4666__auto___57811)){
var G__56413_57813 = type;
var G__56413_57814__$1 = (((G__56413_57813 instanceof cljs.core.Keyword))?G__56413_57813.fqn:null);
switch (G__56413_57814__$1) {
case "compute":
var c__56255__auto___57816 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__57812,c__56255__auto___57816,G__56413_57813,G__56413_57814__$1,n__4666__auto___57811,jobs,results,process,async){
return (function (){
var f__56256__auto__ = (function (){var switch__56192__auto__ = ((function (__57812,c__56255__auto___57816,G__56413_57813,G__56413_57814__$1,n__4666__auto___57811,jobs,results,process,async){
return (function (state_56426){
var state_val_56427 = (state_56426[(1)]);
if((state_val_56427 === (1))){
var state_56426__$1 = state_56426;
var statearr_56428_57817 = state_56426__$1;
(statearr_56428_57817[(2)] = null);

(statearr_56428_57817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56427 === (2))){
var state_56426__$1 = state_56426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56426__$1,(4),jobs);
} else {
if((state_val_56427 === (3))){
var inst_56424 = (state_56426[(2)]);
var state_56426__$1 = state_56426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56426__$1,inst_56424);
} else {
if((state_val_56427 === (4))){
var inst_56416 = (state_56426[(2)]);
var inst_56417 = process(inst_56416);
var state_56426__$1 = state_56426;
if(cljs.core.truth_(inst_56417)){
var statearr_56429_57819 = state_56426__$1;
(statearr_56429_57819[(1)] = (5));

} else {
var statearr_56430_57820 = state_56426__$1;
(statearr_56430_57820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56427 === (5))){
var state_56426__$1 = state_56426;
var statearr_56431_57821 = state_56426__$1;
(statearr_56431_57821[(2)] = null);

(statearr_56431_57821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56427 === (6))){
var state_56426__$1 = state_56426;
var statearr_56432_57822 = state_56426__$1;
(statearr_56432_57822[(2)] = null);

(statearr_56432_57822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56427 === (7))){
var inst_56422 = (state_56426[(2)]);
var state_56426__$1 = state_56426;
var statearr_56433_57823 = state_56426__$1;
(statearr_56433_57823[(2)] = inst_56422);

(statearr_56433_57823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__57812,c__56255__auto___57816,G__56413_57813,G__56413_57814__$1,n__4666__auto___57811,jobs,results,process,async))
;
return ((function (__57812,switch__56192__auto__,c__56255__auto___57816,G__56413_57813,G__56413_57814__$1,n__4666__auto___57811,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____0 = (function (){
var statearr_56434 = [null,null,null,null,null,null,null];
(statearr_56434[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__);

(statearr_56434[(1)] = (1));

return statearr_56434;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____1 = (function (state_56426){
while(true){
var ret_value__56194__auto__ = (function (){try{while(true){
var result__56195__auto__ = switch__56192__auto__(state_56426);
if(cljs.core.keyword_identical_QMARK_(result__56195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56195__auto__;
}
break;
}
}catch (e56435){if((e56435 instanceof Object)){
var ex__56196__auto__ = e56435;
var statearr_56436_57830 = state_56426;
(statearr_56436_57830[(5)] = ex__56196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56435;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57831 = state_56426;
state_56426 = G__57831;
continue;
} else {
return ret_value__56194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__ = function(state_56426){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____1.call(this,state_56426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__;
})()
;})(__57812,switch__56192__auto__,c__56255__auto___57816,G__56413_57813,G__56413_57814__$1,n__4666__auto___57811,jobs,results,process,async))
})();
var state__56257__auto__ = (function (){var statearr_56437 = f__56256__auto__();
(statearr_56437[(6)] = c__56255__auto___57816);

return statearr_56437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56257__auto__);
});})(__57812,c__56255__auto___57816,G__56413_57813,G__56413_57814__$1,n__4666__auto___57811,jobs,results,process,async))
);


break;
case "async":
var c__56255__auto___57833 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__57812,c__56255__auto___57833,G__56413_57813,G__56413_57814__$1,n__4666__auto___57811,jobs,results,process,async){
return (function (){
var f__56256__auto__ = (function (){var switch__56192__auto__ = ((function (__57812,c__56255__auto___57833,G__56413_57813,G__56413_57814__$1,n__4666__auto___57811,jobs,results,process,async){
return (function (state_56450){
var state_val_56451 = (state_56450[(1)]);
if((state_val_56451 === (1))){
var state_56450__$1 = state_56450;
var statearr_56452_57835 = state_56450__$1;
(statearr_56452_57835[(2)] = null);

(statearr_56452_57835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56451 === (2))){
var state_56450__$1 = state_56450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56450__$1,(4),jobs);
} else {
if((state_val_56451 === (3))){
var inst_56448 = (state_56450[(2)]);
var state_56450__$1 = state_56450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56450__$1,inst_56448);
} else {
if((state_val_56451 === (4))){
var inst_56440 = (state_56450[(2)]);
var inst_56441 = async(inst_56440);
var state_56450__$1 = state_56450;
if(cljs.core.truth_(inst_56441)){
var statearr_56453_57836 = state_56450__$1;
(statearr_56453_57836[(1)] = (5));

} else {
var statearr_56454_57837 = state_56450__$1;
(statearr_56454_57837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56451 === (5))){
var state_56450__$1 = state_56450;
var statearr_56455_57838 = state_56450__$1;
(statearr_56455_57838[(2)] = null);

(statearr_56455_57838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56451 === (6))){
var state_56450__$1 = state_56450;
var statearr_56456_57839 = state_56450__$1;
(statearr_56456_57839[(2)] = null);

(statearr_56456_57839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56451 === (7))){
var inst_56446 = (state_56450[(2)]);
var state_56450__$1 = state_56450;
var statearr_56457_57840 = state_56450__$1;
(statearr_56457_57840[(2)] = inst_56446);

(statearr_56457_57840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__57812,c__56255__auto___57833,G__56413_57813,G__56413_57814__$1,n__4666__auto___57811,jobs,results,process,async))
;
return ((function (__57812,switch__56192__auto__,c__56255__auto___57833,G__56413_57813,G__56413_57814__$1,n__4666__auto___57811,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____0 = (function (){
var statearr_56458 = [null,null,null,null,null,null,null];
(statearr_56458[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__);

(statearr_56458[(1)] = (1));

return statearr_56458;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____1 = (function (state_56450){
while(true){
var ret_value__56194__auto__ = (function (){try{while(true){
var result__56195__auto__ = switch__56192__auto__(state_56450);
if(cljs.core.keyword_identical_QMARK_(result__56195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56195__auto__;
}
break;
}
}catch (e56459){if((e56459 instanceof Object)){
var ex__56196__auto__ = e56459;
var statearr_56460_57851 = state_56450;
(statearr_56460_57851[(5)] = ex__56196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56459;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57853 = state_56450;
state_56450 = G__57853;
continue;
} else {
return ret_value__56194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__ = function(state_56450){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____1.call(this,state_56450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__;
})()
;})(__57812,switch__56192__auto__,c__56255__auto___57833,G__56413_57813,G__56413_57814__$1,n__4666__auto___57811,jobs,results,process,async))
})();
var state__56257__auto__ = (function (){var statearr_56461 = f__56256__auto__();
(statearr_56461[(6)] = c__56255__auto___57833);

return statearr_56461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56257__auto__);
});})(__57812,c__56255__auto___57833,G__56413_57813,G__56413_57814__$1,n__4666__auto___57811,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56413_57814__$1)].join('')));

}

var G__57854 = (__57812 + (1));
__57812 = G__57854;
continue;
} else {
}
break;
}

var c__56255__auto___57855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56256__auto__ = (function (){var switch__56192__auto__ = (function (state_56483){
var state_val_56484 = (state_56483[(1)]);
if((state_val_56484 === (7))){
var inst_56479 = (state_56483[(2)]);
var state_56483__$1 = state_56483;
var statearr_56485_57856 = state_56483__$1;
(statearr_56485_57856[(2)] = inst_56479);

(statearr_56485_57856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56484 === (1))){
var state_56483__$1 = state_56483;
var statearr_56486_57857 = state_56483__$1;
(statearr_56486_57857[(2)] = null);

(statearr_56486_57857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56484 === (4))){
var inst_56464 = (state_56483[(7)]);
var inst_56464__$1 = (state_56483[(2)]);
var inst_56465 = (inst_56464__$1 == null);
var state_56483__$1 = (function (){var statearr_56487 = state_56483;
(statearr_56487[(7)] = inst_56464__$1);

return statearr_56487;
})();
if(cljs.core.truth_(inst_56465)){
var statearr_56488_57858 = state_56483__$1;
(statearr_56488_57858[(1)] = (5));

} else {
var statearr_56489_57859 = state_56483__$1;
(statearr_56489_57859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56484 === (6))){
var inst_56469 = (state_56483[(8)]);
var inst_56464 = (state_56483[(7)]);
var inst_56469__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_56470 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56471 = [inst_56464,inst_56469__$1];
var inst_56472 = (new cljs.core.PersistentVector(null,2,(5),inst_56470,inst_56471,null));
var state_56483__$1 = (function (){var statearr_56490 = state_56483;
(statearr_56490[(8)] = inst_56469__$1);

return statearr_56490;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56483__$1,(8),jobs,inst_56472);
} else {
if((state_val_56484 === (3))){
var inst_56481 = (state_56483[(2)]);
var state_56483__$1 = state_56483;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56483__$1,inst_56481);
} else {
if((state_val_56484 === (2))){
var state_56483__$1 = state_56483;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56483__$1,(4),from);
} else {
if((state_val_56484 === (9))){
var inst_56476 = (state_56483[(2)]);
var state_56483__$1 = (function (){var statearr_56491 = state_56483;
(statearr_56491[(9)] = inst_56476);

return statearr_56491;
})();
var statearr_56492_57864 = state_56483__$1;
(statearr_56492_57864[(2)] = null);

(statearr_56492_57864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56484 === (5))){
var inst_56467 = cljs.core.async.close_BANG_(jobs);
var state_56483__$1 = state_56483;
var statearr_56493_57865 = state_56483__$1;
(statearr_56493_57865[(2)] = inst_56467);

(statearr_56493_57865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56484 === (8))){
var inst_56469 = (state_56483[(8)]);
var inst_56474 = (state_56483[(2)]);
var state_56483__$1 = (function (){var statearr_56494 = state_56483;
(statearr_56494[(10)] = inst_56474);

return statearr_56494;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56483__$1,(9),results,inst_56469);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____0 = (function (){
var statearr_56495 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56495[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__);

(statearr_56495[(1)] = (1));

return statearr_56495;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____1 = (function (state_56483){
while(true){
var ret_value__56194__auto__ = (function (){try{while(true){
var result__56195__auto__ = switch__56192__auto__(state_56483);
if(cljs.core.keyword_identical_QMARK_(result__56195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56195__auto__;
}
break;
}
}catch (e56496){if((e56496 instanceof Object)){
var ex__56196__auto__ = e56496;
var statearr_56497_57866 = state_56483;
(statearr_56497_57866[(5)] = ex__56196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56496;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57874 = state_56483;
state_56483 = G__57874;
continue;
} else {
return ret_value__56194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__ = function(state_56483){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____1.call(this,state_56483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__;
})()
})();
var state__56257__auto__ = (function (){var statearr_56498 = f__56256__auto__();
(statearr_56498[(6)] = c__56255__auto___57855);

return statearr_56498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56257__auto__);
}));


var c__56255__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56256__auto__ = (function (){var switch__56192__auto__ = (function (state_56536){
var state_val_56537 = (state_56536[(1)]);
if((state_val_56537 === (7))){
var inst_56532 = (state_56536[(2)]);
var state_56536__$1 = state_56536;
var statearr_56538_57875 = state_56536__$1;
(statearr_56538_57875[(2)] = inst_56532);

(statearr_56538_57875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56537 === (20))){
var state_56536__$1 = state_56536;
var statearr_56539_57882 = state_56536__$1;
(statearr_56539_57882[(2)] = null);

(statearr_56539_57882[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56537 === (1))){
var state_56536__$1 = state_56536;
var statearr_56540_57883 = state_56536__$1;
(statearr_56540_57883[(2)] = null);

(statearr_56540_57883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56537 === (4))){
var inst_56501 = (state_56536[(7)]);
var inst_56501__$1 = (state_56536[(2)]);
var inst_56502 = (inst_56501__$1 == null);
var state_56536__$1 = (function (){var statearr_56541 = state_56536;
(statearr_56541[(7)] = inst_56501__$1);

return statearr_56541;
})();
if(cljs.core.truth_(inst_56502)){
var statearr_56542_57884 = state_56536__$1;
(statearr_56542_57884[(1)] = (5));

} else {
var statearr_56543_57888 = state_56536__$1;
(statearr_56543_57888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56537 === (15))){
var inst_56514 = (state_56536[(8)]);
var state_56536__$1 = state_56536;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56536__$1,(18),to,inst_56514);
} else {
if((state_val_56537 === (21))){
var inst_56527 = (state_56536[(2)]);
var state_56536__$1 = state_56536;
var statearr_56544_57889 = state_56536__$1;
(statearr_56544_57889[(2)] = inst_56527);

(statearr_56544_57889[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56537 === (13))){
var inst_56529 = (state_56536[(2)]);
var state_56536__$1 = (function (){var statearr_56545 = state_56536;
(statearr_56545[(9)] = inst_56529);

return statearr_56545;
})();
var statearr_56546_57891 = state_56536__$1;
(statearr_56546_57891[(2)] = null);

(statearr_56546_57891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56537 === (6))){
var inst_56501 = (state_56536[(7)]);
var state_56536__$1 = state_56536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56536__$1,(11),inst_56501);
} else {
if((state_val_56537 === (17))){
var inst_56522 = (state_56536[(2)]);
var state_56536__$1 = state_56536;
if(cljs.core.truth_(inst_56522)){
var statearr_56547_57893 = state_56536__$1;
(statearr_56547_57893[(1)] = (19));

} else {
var statearr_56548_57894 = state_56536__$1;
(statearr_56548_57894[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56537 === (3))){
var inst_56534 = (state_56536[(2)]);
var state_56536__$1 = state_56536;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56536__$1,inst_56534);
} else {
if((state_val_56537 === (12))){
var inst_56511 = (state_56536[(10)]);
var state_56536__$1 = state_56536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56536__$1,(14),inst_56511);
} else {
if((state_val_56537 === (2))){
var state_56536__$1 = state_56536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56536__$1,(4),results);
} else {
if((state_val_56537 === (19))){
var state_56536__$1 = state_56536;
var statearr_56549_57895 = state_56536__$1;
(statearr_56549_57895[(2)] = null);

(statearr_56549_57895[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56537 === (11))){
var inst_56511 = (state_56536[(2)]);
var state_56536__$1 = (function (){var statearr_56550 = state_56536;
(statearr_56550[(10)] = inst_56511);

return statearr_56550;
})();
var statearr_56551_57896 = state_56536__$1;
(statearr_56551_57896[(2)] = null);

(statearr_56551_57896[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56537 === (9))){
var state_56536__$1 = state_56536;
var statearr_56552_57897 = state_56536__$1;
(statearr_56552_57897[(2)] = null);

(statearr_56552_57897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56537 === (5))){
var state_56536__$1 = state_56536;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56553_57898 = state_56536__$1;
(statearr_56553_57898[(1)] = (8));

} else {
var statearr_56554_57899 = state_56536__$1;
(statearr_56554_57899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56537 === (14))){
var inst_56514 = (state_56536[(8)]);
var inst_56514__$1 = (state_56536[(2)]);
var inst_56515 = (inst_56514__$1 == null);
var inst_56516 = cljs.core.not(inst_56515);
var state_56536__$1 = (function (){var statearr_56555 = state_56536;
(statearr_56555[(8)] = inst_56514__$1);

return statearr_56555;
})();
if(inst_56516){
var statearr_56556_57900 = state_56536__$1;
(statearr_56556_57900[(1)] = (15));

} else {
var statearr_56557_57901 = state_56536__$1;
(statearr_56557_57901[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56537 === (16))){
var state_56536__$1 = state_56536;
var statearr_56558_57902 = state_56536__$1;
(statearr_56558_57902[(2)] = false);

(statearr_56558_57902[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56537 === (10))){
var inst_56508 = (state_56536[(2)]);
var state_56536__$1 = state_56536;
var statearr_56559_57906 = state_56536__$1;
(statearr_56559_57906[(2)] = inst_56508);

(statearr_56559_57906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56537 === (18))){
var inst_56519 = (state_56536[(2)]);
var state_56536__$1 = state_56536;
var statearr_56560_57907 = state_56536__$1;
(statearr_56560_57907[(2)] = inst_56519);

(statearr_56560_57907[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56537 === (8))){
var inst_56505 = cljs.core.async.close_BANG_(to);
var state_56536__$1 = state_56536;
var statearr_56561_57908 = state_56536__$1;
(statearr_56561_57908[(2)] = inst_56505);

(statearr_56561_57908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____0 = (function (){
var statearr_56562 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56562[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__);

(statearr_56562[(1)] = (1));

return statearr_56562;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____1 = (function (state_56536){
while(true){
var ret_value__56194__auto__ = (function (){try{while(true){
var result__56195__auto__ = switch__56192__auto__(state_56536);
if(cljs.core.keyword_identical_QMARK_(result__56195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56195__auto__;
}
break;
}
}catch (e56563){if((e56563 instanceof Object)){
var ex__56196__auto__ = e56563;
var statearr_56564_57912 = state_56536;
(statearr_56564_57912[(5)] = ex__56196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56563;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57913 = state_56536;
state_56536 = G__57913;
continue;
} else {
return ret_value__56194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__ = function(state_56536){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____1.call(this,state_56536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56193__auto__;
})()
})();
var state__56257__auto__ = (function (){var statearr_56565 = f__56256__auto__();
(statearr_56565[(6)] = c__56255__auto__);

return statearr_56565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56257__auto__);
}));

return c__56255__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__56567 = arguments.length;
switch (G__56567) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__56569 = arguments.length;
switch (G__56569) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__56571 = arguments.length;
switch (G__56571) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__56255__auto___57943 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56256__auto__ = (function (){var switch__56192__auto__ = (function (state_56597){
var state_val_56598 = (state_56597[(1)]);
if((state_val_56598 === (7))){
var inst_56593 = (state_56597[(2)]);
var state_56597__$1 = state_56597;
var statearr_56599_57944 = state_56597__$1;
(statearr_56599_57944[(2)] = inst_56593);

(statearr_56599_57944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56598 === (1))){
var state_56597__$1 = state_56597;
var statearr_56600_57945 = state_56597__$1;
(statearr_56600_57945[(2)] = null);

(statearr_56600_57945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56598 === (4))){
var inst_56574 = (state_56597[(7)]);
var inst_56574__$1 = (state_56597[(2)]);
var inst_56575 = (inst_56574__$1 == null);
var state_56597__$1 = (function (){var statearr_56601 = state_56597;
(statearr_56601[(7)] = inst_56574__$1);

return statearr_56601;
})();
if(cljs.core.truth_(inst_56575)){
var statearr_56602_57952 = state_56597__$1;
(statearr_56602_57952[(1)] = (5));

} else {
var statearr_56603_57953 = state_56597__$1;
(statearr_56603_57953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56598 === (13))){
var state_56597__$1 = state_56597;
var statearr_56604_57957 = state_56597__$1;
(statearr_56604_57957[(2)] = null);

(statearr_56604_57957[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56598 === (6))){
var inst_56574 = (state_56597[(7)]);
var inst_56580 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_56574) : p.call(null,inst_56574));
var state_56597__$1 = state_56597;
if(cljs.core.truth_(inst_56580)){
var statearr_56605_57961 = state_56597__$1;
(statearr_56605_57961[(1)] = (9));

} else {
var statearr_56606_57962 = state_56597__$1;
(statearr_56606_57962[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56598 === (3))){
var inst_56595 = (state_56597[(2)]);
var state_56597__$1 = state_56597;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56597__$1,inst_56595);
} else {
if((state_val_56598 === (12))){
var state_56597__$1 = state_56597;
var statearr_56607_57966 = state_56597__$1;
(statearr_56607_57966[(2)] = null);

(statearr_56607_57966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56598 === (2))){
var state_56597__$1 = state_56597;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56597__$1,(4),ch);
} else {
if((state_val_56598 === (11))){
var inst_56574 = (state_56597[(7)]);
var inst_56584 = (state_56597[(2)]);
var state_56597__$1 = state_56597;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56597__$1,(8),inst_56584,inst_56574);
} else {
if((state_val_56598 === (9))){
var state_56597__$1 = state_56597;
var statearr_56608_57970 = state_56597__$1;
(statearr_56608_57970[(2)] = tc);

(statearr_56608_57970[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56598 === (5))){
var inst_56577 = cljs.core.async.close_BANG_(tc);
var inst_56578 = cljs.core.async.close_BANG_(fc);
var state_56597__$1 = (function (){var statearr_56609 = state_56597;
(statearr_56609[(8)] = inst_56577);

return statearr_56609;
})();
var statearr_56610_57971 = state_56597__$1;
(statearr_56610_57971[(2)] = inst_56578);

(statearr_56610_57971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56598 === (14))){
var inst_56591 = (state_56597[(2)]);
var state_56597__$1 = state_56597;
var statearr_56611_57972 = state_56597__$1;
(statearr_56611_57972[(2)] = inst_56591);

(statearr_56611_57972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56598 === (10))){
var state_56597__$1 = state_56597;
var statearr_56612_57973 = state_56597__$1;
(statearr_56612_57973[(2)] = fc);

(statearr_56612_57973[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56598 === (8))){
var inst_56586 = (state_56597[(2)]);
var state_56597__$1 = state_56597;
if(cljs.core.truth_(inst_56586)){
var statearr_56613_57974 = state_56597__$1;
(statearr_56613_57974[(1)] = (12));

} else {
var statearr_56614_57975 = state_56597__$1;
(statearr_56614_57975[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56193__auto__ = null;
var cljs$core$async$state_machine__56193__auto____0 = (function (){
var statearr_56615 = [null,null,null,null,null,null,null,null,null];
(statearr_56615[(0)] = cljs$core$async$state_machine__56193__auto__);

(statearr_56615[(1)] = (1));

return statearr_56615;
});
var cljs$core$async$state_machine__56193__auto____1 = (function (state_56597){
while(true){
var ret_value__56194__auto__ = (function (){try{while(true){
var result__56195__auto__ = switch__56192__auto__(state_56597);
if(cljs.core.keyword_identical_QMARK_(result__56195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56195__auto__;
}
break;
}
}catch (e56616){if((e56616 instanceof Object)){
var ex__56196__auto__ = e56616;
var statearr_56617_57977 = state_56597;
(statearr_56617_57977[(5)] = ex__56196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56616;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57978 = state_56597;
state_56597 = G__57978;
continue;
} else {
return ret_value__56194__auto__;
}
break;
}
});
cljs$core$async$state_machine__56193__auto__ = function(state_56597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56193__auto____1.call(this,state_56597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56193__auto____0;
cljs$core$async$state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56193__auto____1;
return cljs$core$async$state_machine__56193__auto__;
})()
})();
var state__56257__auto__ = (function (){var statearr_56618 = f__56256__auto__();
(statearr_56618[(6)] = c__56255__auto___57943);

return statearr_56618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56257__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__56255__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56256__auto__ = (function (){var switch__56192__auto__ = (function (state_56639){
var state_val_56640 = (state_56639[(1)]);
if((state_val_56640 === (7))){
var inst_56635 = (state_56639[(2)]);
var state_56639__$1 = state_56639;
var statearr_56641_57979 = state_56639__$1;
(statearr_56641_57979[(2)] = inst_56635);

(statearr_56641_57979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56640 === (1))){
var inst_56619 = init;
var state_56639__$1 = (function (){var statearr_56642 = state_56639;
(statearr_56642[(7)] = inst_56619);

return statearr_56642;
})();
var statearr_56643_57980 = state_56639__$1;
(statearr_56643_57980[(2)] = null);

(statearr_56643_57980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56640 === (4))){
var inst_56622 = (state_56639[(8)]);
var inst_56622__$1 = (state_56639[(2)]);
var inst_56623 = (inst_56622__$1 == null);
var state_56639__$1 = (function (){var statearr_56644 = state_56639;
(statearr_56644[(8)] = inst_56622__$1);

return statearr_56644;
})();
if(cljs.core.truth_(inst_56623)){
var statearr_56645_57981 = state_56639__$1;
(statearr_56645_57981[(1)] = (5));

} else {
var statearr_56646_57982 = state_56639__$1;
(statearr_56646_57982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56640 === (6))){
var inst_56619 = (state_56639[(7)]);
var inst_56622 = (state_56639[(8)]);
var inst_56626 = (state_56639[(9)]);
var inst_56626__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_56619,inst_56622) : f.call(null,inst_56619,inst_56622));
var inst_56627 = cljs.core.reduced_QMARK_(inst_56626__$1);
var state_56639__$1 = (function (){var statearr_56647 = state_56639;
(statearr_56647[(9)] = inst_56626__$1);

return statearr_56647;
})();
if(inst_56627){
var statearr_56648_57983 = state_56639__$1;
(statearr_56648_57983[(1)] = (8));

} else {
var statearr_56649_57984 = state_56639__$1;
(statearr_56649_57984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56640 === (3))){
var inst_56637 = (state_56639[(2)]);
var state_56639__$1 = state_56639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56639__$1,inst_56637);
} else {
if((state_val_56640 === (2))){
var state_56639__$1 = state_56639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56639__$1,(4),ch);
} else {
if((state_val_56640 === (9))){
var inst_56626 = (state_56639[(9)]);
var inst_56619 = inst_56626;
var state_56639__$1 = (function (){var statearr_56650 = state_56639;
(statearr_56650[(7)] = inst_56619);

return statearr_56650;
})();
var statearr_56651_57987 = state_56639__$1;
(statearr_56651_57987[(2)] = null);

(statearr_56651_57987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56640 === (5))){
var inst_56619 = (state_56639[(7)]);
var state_56639__$1 = state_56639;
var statearr_56652_57988 = state_56639__$1;
(statearr_56652_57988[(2)] = inst_56619);

(statearr_56652_57988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56640 === (10))){
var inst_56633 = (state_56639[(2)]);
var state_56639__$1 = state_56639;
var statearr_56653_57989 = state_56639__$1;
(statearr_56653_57989[(2)] = inst_56633);

(statearr_56653_57989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56640 === (8))){
var inst_56626 = (state_56639[(9)]);
var inst_56629 = cljs.core.deref(inst_56626);
var state_56639__$1 = state_56639;
var statearr_56654_57990 = state_56639__$1;
(statearr_56654_57990[(2)] = inst_56629);

(statearr_56654_57990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__56193__auto__ = null;
var cljs$core$async$reduce_$_state_machine__56193__auto____0 = (function (){
var statearr_56655 = [null,null,null,null,null,null,null,null,null,null];
(statearr_56655[(0)] = cljs$core$async$reduce_$_state_machine__56193__auto__);

(statearr_56655[(1)] = (1));

return statearr_56655;
});
var cljs$core$async$reduce_$_state_machine__56193__auto____1 = (function (state_56639){
while(true){
var ret_value__56194__auto__ = (function (){try{while(true){
var result__56195__auto__ = switch__56192__auto__(state_56639);
if(cljs.core.keyword_identical_QMARK_(result__56195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56195__auto__;
}
break;
}
}catch (e56656){if((e56656 instanceof Object)){
var ex__56196__auto__ = e56656;
var statearr_56657_57991 = state_56639;
(statearr_56657_57991[(5)] = ex__56196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56656;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57992 = state_56639;
state_56639 = G__57992;
continue;
} else {
return ret_value__56194__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__56193__auto__ = function(state_56639){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__56193__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__56193__auto____1.call(this,state_56639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__56193__auto____0;
cljs$core$async$reduce_$_state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__56193__auto____1;
return cljs$core$async$reduce_$_state_machine__56193__auto__;
})()
})();
var state__56257__auto__ = (function (){var statearr_56658 = f__56256__auto__();
(statearr_56658[(6)] = c__56255__auto__);

return statearr_56658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56257__auto__);
}));

return c__56255__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__56255__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56256__auto__ = (function (){var switch__56192__auto__ = (function (state_56664){
var state_val_56665 = (state_56664[(1)]);
if((state_val_56665 === (1))){
var inst_56659 = cljs.core.async.reduce(f__$1,init,ch);
var state_56664__$1 = state_56664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56664__$1,(2),inst_56659);
} else {
if((state_val_56665 === (2))){
var inst_56661 = (state_56664[(2)]);
var inst_56662 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_56661) : f__$1.call(null,inst_56661));
var state_56664__$1 = state_56664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56664__$1,inst_56662);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__56193__auto__ = null;
var cljs$core$async$transduce_$_state_machine__56193__auto____0 = (function (){
var statearr_56666 = [null,null,null,null,null,null,null];
(statearr_56666[(0)] = cljs$core$async$transduce_$_state_machine__56193__auto__);

(statearr_56666[(1)] = (1));

return statearr_56666;
});
var cljs$core$async$transduce_$_state_machine__56193__auto____1 = (function (state_56664){
while(true){
var ret_value__56194__auto__ = (function (){try{while(true){
var result__56195__auto__ = switch__56192__auto__(state_56664);
if(cljs.core.keyword_identical_QMARK_(result__56195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56195__auto__;
}
break;
}
}catch (e56667){if((e56667 instanceof Object)){
var ex__56196__auto__ = e56667;
var statearr_56668_57996 = state_56664;
(statearr_56668_57996[(5)] = ex__56196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56667;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58000 = state_56664;
state_56664 = G__58000;
continue;
} else {
return ret_value__56194__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__56193__auto__ = function(state_56664){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__56193__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__56193__auto____1.call(this,state_56664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__56193__auto____0;
cljs$core$async$transduce_$_state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__56193__auto____1;
return cljs$core$async$transduce_$_state_machine__56193__auto__;
})()
})();
var state__56257__auto__ = (function (){var statearr_56669 = f__56256__auto__();
(statearr_56669[(6)] = c__56255__auto__);

return statearr_56669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56257__auto__);
}));

return c__56255__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__56671 = arguments.length;
switch (G__56671) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__56255__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56256__auto__ = (function (){var switch__56192__auto__ = (function (state_56696){
var state_val_56697 = (state_56696[(1)]);
if((state_val_56697 === (7))){
var inst_56678 = (state_56696[(2)]);
var state_56696__$1 = state_56696;
var statearr_56698_58005 = state_56696__$1;
(statearr_56698_58005[(2)] = inst_56678);

(statearr_56698_58005[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (1))){
var inst_56672 = cljs.core.seq(coll);
var inst_56673 = inst_56672;
var state_56696__$1 = (function (){var statearr_56699 = state_56696;
(statearr_56699[(7)] = inst_56673);

return statearr_56699;
})();
var statearr_56700_58006 = state_56696__$1;
(statearr_56700_58006[(2)] = null);

(statearr_56700_58006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (4))){
var inst_56673 = (state_56696[(7)]);
var inst_56676 = cljs.core.first(inst_56673);
var state_56696__$1 = state_56696;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56696__$1,(7),ch,inst_56676);
} else {
if((state_val_56697 === (13))){
var inst_56690 = (state_56696[(2)]);
var state_56696__$1 = state_56696;
var statearr_56701_58007 = state_56696__$1;
(statearr_56701_58007[(2)] = inst_56690);

(statearr_56701_58007[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (6))){
var inst_56681 = (state_56696[(2)]);
var state_56696__$1 = state_56696;
if(cljs.core.truth_(inst_56681)){
var statearr_56702_58008 = state_56696__$1;
(statearr_56702_58008[(1)] = (8));

} else {
var statearr_56703_58009 = state_56696__$1;
(statearr_56703_58009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (3))){
var inst_56694 = (state_56696[(2)]);
var state_56696__$1 = state_56696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56696__$1,inst_56694);
} else {
if((state_val_56697 === (12))){
var state_56696__$1 = state_56696;
var statearr_56704_58010 = state_56696__$1;
(statearr_56704_58010[(2)] = null);

(statearr_56704_58010[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (2))){
var inst_56673 = (state_56696[(7)]);
var state_56696__$1 = state_56696;
if(cljs.core.truth_(inst_56673)){
var statearr_56705_58011 = state_56696__$1;
(statearr_56705_58011[(1)] = (4));

} else {
var statearr_56706_58012 = state_56696__$1;
(statearr_56706_58012[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (11))){
var inst_56687 = cljs.core.async.close_BANG_(ch);
var state_56696__$1 = state_56696;
var statearr_56707_58013 = state_56696__$1;
(statearr_56707_58013[(2)] = inst_56687);

(statearr_56707_58013[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (9))){
var state_56696__$1 = state_56696;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56708_58014 = state_56696__$1;
(statearr_56708_58014[(1)] = (11));

} else {
var statearr_56709_58015 = state_56696__$1;
(statearr_56709_58015[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (5))){
var inst_56673 = (state_56696[(7)]);
var state_56696__$1 = state_56696;
var statearr_56710_58016 = state_56696__$1;
(statearr_56710_58016[(2)] = inst_56673);

(statearr_56710_58016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (10))){
var inst_56692 = (state_56696[(2)]);
var state_56696__$1 = state_56696;
var statearr_56711_58017 = state_56696__$1;
(statearr_56711_58017[(2)] = inst_56692);

(statearr_56711_58017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (8))){
var inst_56673 = (state_56696[(7)]);
var inst_56683 = cljs.core.next(inst_56673);
var inst_56673__$1 = inst_56683;
var state_56696__$1 = (function (){var statearr_56712 = state_56696;
(statearr_56712[(7)] = inst_56673__$1);

return statearr_56712;
})();
var statearr_56713_58018 = state_56696__$1;
(statearr_56713_58018[(2)] = null);

(statearr_56713_58018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56193__auto__ = null;
var cljs$core$async$state_machine__56193__auto____0 = (function (){
var statearr_56714 = [null,null,null,null,null,null,null,null];
(statearr_56714[(0)] = cljs$core$async$state_machine__56193__auto__);

(statearr_56714[(1)] = (1));

return statearr_56714;
});
var cljs$core$async$state_machine__56193__auto____1 = (function (state_56696){
while(true){
var ret_value__56194__auto__ = (function (){try{while(true){
var result__56195__auto__ = switch__56192__auto__(state_56696);
if(cljs.core.keyword_identical_QMARK_(result__56195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56195__auto__;
}
break;
}
}catch (e56715){if((e56715 instanceof Object)){
var ex__56196__auto__ = e56715;
var statearr_56716_58019 = state_56696;
(statearr_56716_58019[(5)] = ex__56196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56715;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58021 = state_56696;
state_56696 = G__58021;
continue;
} else {
return ret_value__56194__auto__;
}
break;
}
});
cljs$core$async$state_machine__56193__auto__ = function(state_56696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56193__auto____1.call(this,state_56696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56193__auto____0;
cljs$core$async$state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56193__auto____1;
return cljs$core$async$state_machine__56193__auto__;
})()
})();
var state__56257__auto__ = (function (){var statearr_56717 = f__56256__auto__();
(statearr_56717[(6)] = c__56255__auto__);

return statearr_56717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56257__auto__);
}));

return c__56255__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56718 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56718 = (function (ch,cs,meta56719){
this.ch = ch;
this.cs = cs;
this.meta56719 = meta56719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56720,meta56719__$1){
var self__ = this;
var _56720__$1 = this;
return (new cljs.core.async.t_cljs$core$async56718(self__.ch,self__.cs,meta56719__$1));
}));

(cljs.core.async.t_cljs$core$async56718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56720){
var self__ = this;
var _56720__$1 = this;
return self__.meta56719;
}));

(cljs.core.async.t_cljs$core$async56718.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56718.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async56718.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56718.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async56718.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async56718.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async56718.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta56719","meta56719",-2116156457,null)], null);
}));

(cljs.core.async.t_cljs$core$async56718.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56718");

(cljs.core.async.t_cljs$core$async56718.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async56718");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56718.
 */
cljs.core.async.__GT_t_cljs$core$async56718 = (function cljs$core$async$mult_$___GT_t_cljs$core$async56718(ch__$1,cs__$1,meta56719){
return (new cljs.core.async.t_cljs$core$async56718(ch__$1,cs__$1,meta56719));
});

}

return (new cljs.core.async.t_cljs$core$async56718(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__56255__auto___58042 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56256__auto__ = (function (){var switch__56192__auto__ = (function (state_56855){
var state_val_56856 = (state_56855[(1)]);
if((state_val_56856 === (7))){
var inst_56851 = (state_56855[(2)]);
var state_56855__$1 = state_56855;
var statearr_56857_58043 = state_56855__$1;
(statearr_56857_58043[(2)] = inst_56851);

(statearr_56857_58043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (20))){
var inst_56754 = (state_56855[(7)]);
var inst_56766 = cljs.core.first(inst_56754);
var inst_56767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56766,(0),null);
var inst_56768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56766,(1),null);
var state_56855__$1 = (function (){var statearr_56858 = state_56855;
(statearr_56858[(8)] = inst_56767);

return statearr_56858;
})();
if(cljs.core.truth_(inst_56768)){
var statearr_56859_58044 = state_56855__$1;
(statearr_56859_58044[(1)] = (22));

} else {
var statearr_56860_58045 = state_56855__$1;
(statearr_56860_58045[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (27))){
var inst_56803 = (state_56855[(9)]);
var inst_56798 = (state_56855[(10)]);
var inst_56723 = (state_56855[(11)]);
var inst_56796 = (state_56855[(12)]);
var inst_56803__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_56796,inst_56798);
var inst_56804 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_56803__$1,inst_56723,done);
var state_56855__$1 = (function (){var statearr_56861 = state_56855;
(statearr_56861[(9)] = inst_56803__$1);

return statearr_56861;
})();
if(cljs.core.truth_(inst_56804)){
var statearr_56862_58046 = state_56855__$1;
(statearr_56862_58046[(1)] = (30));

} else {
var statearr_56863_58047 = state_56855__$1;
(statearr_56863_58047[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (1))){
var state_56855__$1 = state_56855;
var statearr_56864_58048 = state_56855__$1;
(statearr_56864_58048[(2)] = null);

(statearr_56864_58048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (24))){
var inst_56754 = (state_56855[(7)]);
var inst_56773 = (state_56855[(2)]);
var inst_56774 = cljs.core.next(inst_56754);
var inst_56732 = inst_56774;
var inst_56733 = null;
var inst_56734 = (0);
var inst_56735 = (0);
var state_56855__$1 = (function (){var statearr_56865 = state_56855;
(statearr_56865[(13)] = inst_56773);

(statearr_56865[(14)] = inst_56734);

(statearr_56865[(15)] = inst_56732);

(statearr_56865[(16)] = inst_56735);

(statearr_56865[(17)] = inst_56733);

return statearr_56865;
})();
var statearr_56866_58055 = state_56855__$1;
(statearr_56866_58055[(2)] = null);

(statearr_56866_58055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (39))){
var state_56855__$1 = state_56855;
var statearr_56870_58056 = state_56855__$1;
(statearr_56870_58056[(2)] = null);

(statearr_56870_58056[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (4))){
var inst_56723 = (state_56855[(11)]);
var inst_56723__$1 = (state_56855[(2)]);
var inst_56724 = (inst_56723__$1 == null);
var state_56855__$1 = (function (){var statearr_56871 = state_56855;
(statearr_56871[(11)] = inst_56723__$1);

return statearr_56871;
})();
if(cljs.core.truth_(inst_56724)){
var statearr_56872_58057 = state_56855__$1;
(statearr_56872_58057[(1)] = (5));

} else {
var statearr_56873_58058 = state_56855__$1;
(statearr_56873_58058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (15))){
var inst_56734 = (state_56855[(14)]);
var inst_56732 = (state_56855[(15)]);
var inst_56735 = (state_56855[(16)]);
var inst_56733 = (state_56855[(17)]);
var inst_56750 = (state_56855[(2)]);
var inst_56751 = (inst_56735 + (1));
var tmp56867 = inst_56734;
var tmp56868 = inst_56732;
var tmp56869 = inst_56733;
var inst_56732__$1 = tmp56868;
var inst_56733__$1 = tmp56869;
var inst_56734__$1 = tmp56867;
var inst_56735__$1 = inst_56751;
var state_56855__$1 = (function (){var statearr_56874 = state_56855;
(statearr_56874[(14)] = inst_56734__$1);

(statearr_56874[(15)] = inst_56732__$1);

(statearr_56874[(18)] = inst_56750);

(statearr_56874[(16)] = inst_56735__$1);

(statearr_56874[(17)] = inst_56733__$1);

return statearr_56874;
})();
var statearr_56875_58059 = state_56855__$1;
(statearr_56875_58059[(2)] = null);

(statearr_56875_58059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (21))){
var inst_56777 = (state_56855[(2)]);
var state_56855__$1 = state_56855;
var statearr_56879_58060 = state_56855__$1;
(statearr_56879_58060[(2)] = inst_56777);

(statearr_56879_58060[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (31))){
var inst_56803 = (state_56855[(9)]);
var inst_56807 = done(null);
var inst_56808 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_56803);
var state_56855__$1 = (function (){var statearr_56880 = state_56855;
(statearr_56880[(19)] = inst_56807);

return statearr_56880;
})();
var statearr_56881_58061 = state_56855__$1;
(statearr_56881_58061[(2)] = inst_56808);

(statearr_56881_58061[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (32))){
var inst_56797 = (state_56855[(20)]);
var inst_56795 = (state_56855[(21)]);
var inst_56798 = (state_56855[(10)]);
var inst_56796 = (state_56855[(12)]);
var inst_56810 = (state_56855[(2)]);
var inst_56811 = (inst_56798 + (1));
var tmp56876 = inst_56797;
var tmp56877 = inst_56795;
var tmp56878 = inst_56796;
var inst_56795__$1 = tmp56877;
var inst_56796__$1 = tmp56878;
var inst_56797__$1 = tmp56876;
var inst_56798__$1 = inst_56811;
var state_56855__$1 = (function (){var statearr_56882 = state_56855;
(statearr_56882[(20)] = inst_56797__$1);

(statearr_56882[(21)] = inst_56795__$1);

(statearr_56882[(22)] = inst_56810);

(statearr_56882[(10)] = inst_56798__$1);

(statearr_56882[(12)] = inst_56796__$1);

return statearr_56882;
})();
var statearr_56883_58068 = state_56855__$1;
(statearr_56883_58068[(2)] = null);

(statearr_56883_58068[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (40))){
var inst_56823 = (state_56855[(23)]);
var inst_56827 = done(null);
var inst_56828 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_56823);
var state_56855__$1 = (function (){var statearr_56884 = state_56855;
(statearr_56884[(24)] = inst_56827);

return statearr_56884;
})();
var statearr_56885_58069 = state_56855__$1;
(statearr_56885_58069[(2)] = inst_56828);

(statearr_56885_58069[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (33))){
var inst_56814 = (state_56855[(25)]);
var inst_56816 = cljs.core.chunked_seq_QMARK_(inst_56814);
var state_56855__$1 = state_56855;
if(inst_56816){
var statearr_56886_58070 = state_56855__$1;
(statearr_56886_58070[(1)] = (36));

} else {
var statearr_56887_58071 = state_56855__$1;
(statearr_56887_58071[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (13))){
var inst_56744 = (state_56855[(26)]);
var inst_56747 = cljs.core.async.close_BANG_(inst_56744);
var state_56855__$1 = state_56855;
var statearr_56888_58072 = state_56855__$1;
(statearr_56888_58072[(2)] = inst_56747);

(statearr_56888_58072[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (22))){
var inst_56767 = (state_56855[(8)]);
var inst_56770 = cljs.core.async.close_BANG_(inst_56767);
var state_56855__$1 = state_56855;
var statearr_56889_58073 = state_56855__$1;
(statearr_56889_58073[(2)] = inst_56770);

(statearr_56889_58073[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (36))){
var inst_56814 = (state_56855[(25)]);
var inst_56818 = cljs.core.chunk_first(inst_56814);
var inst_56819 = cljs.core.chunk_rest(inst_56814);
var inst_56820 = cljs.core.count(inst_56818);
var inst_56795 = inst_56819;
var inst_56796 = inst_56818;
var inst_56797 = inst_56820;
var inst_56798 = (0);
var state_56855__$1 = (function (){var statearr_56890 = state_56855;
(statearr_56890[(20)] = inst_56797);

(statearr_56890[(21)] = inst_56795);

(statearr_56890[(10)] = inst_56798);

(statearr_56890[(12)] = inst_56796);

return statearr_56890;
})();
var statearr_56891_58080 = state_56855__$1;
(statearr_56891_58080[(2)] = null);

(statearr_56891_58080[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (41))){
var inst_56814 = (state_56855[(25)]);
var inst_56830 = (state_56855[(2)]);
var inst_56831 = cljs.core.next(inst_56814);
var inst_56795 = inst_56831;
var inst_56796 = null;
var inst_56797 = (0);
var inst_56798 = (0);
var state_56855__$1 = (function (){var statearr_56892 = state_56855;
(statearr_56892[(20)] = inst_56797);

(statearr_56892[(21)] = inst_56795);

(statearr_56892[(10)] = inst_56798);

(statearr_56892[(12)] = inst_56796);

(statearr_56892[(27)] = inst_56830);

return statearr_56892;
})();
var statearr_56893_58081 = state_56855__$1;
(statearr_56893_58081[(2)] = null);

(statearr_56893_58081[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (43))){
var state_56855__$1 = state_56855;
var statearr_56894_58082 = state_56855__$1;
(statearr_56894_58082[(2)] = null);

(statearr_56894_58082[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (29))){
var inst_56839 = (state_56855[(2)]);
var state_56855__$1 = state_56855;
var statearr_56895_58083 = state_56855__$1;
(statearr_56895_58083[(2)] = inst_56839);

(statearr_56895_58083[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (44))){
var inst_56848 = (state_56855[(2)]);
var state_56855__$1 = (function (){var statearr_56896 = state_56855;
(statearr_56896[(28)] = inst_56848);

return statearr_56896;
})();
var statearr_56897_58084 = state_56855__$1;
(statearr_56897_58084[(2)] = null);

(statearr_56897_58084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (6))){
var inst_56787 = (state_56855[(29)]);
var inst_56786 = cljs.core.deref(cs);
var inst_56787__$1 = cljs.core.keys(inst_56786);
var inst_56788 = cljs.core.count(inst_56787__$1);
var inst_56789 = cljs.core.reset_BANG_(dctr,inst_56788);
var inst_56794 = cljs.core.seq(inst_56787__$1);
var inst_56795 = inst_56794;
var inst_56796 = null;
var inst_56797 = (0);
var inst_56798 = (0);
var state_56855__$1 = (function (){var statearr_56898 = state_56855;
(statearr_56898[(20)] = inst_56797);

(statearr_56898[(21)] = inst_56795);

(statearr_56898[(10)] = inst_56798);

(statearr_56898[(12)] = inst_56796);

(statearr_56898[(30)] = inst_56789);

(statearr_56898[(29)] = inst_56787__$1);

return statearr_56898;
})();
var statearr_56899_58085 = state_56855__$1;
(statearr_56899_58085[(2)] = null);

(statearr_56899_58085[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (28))){
var inst_56795 = (state_56855[(21)]);
var inst_56814 = (state_56855[(25)]);
var inst_56814__$1 = cljs.core.seq(inst_56795);
var state_56855__$1 = (function (){var statearr_56900 = state_56855;
(statearr_56900[(25)] = inst_56814__$1);

return statearr_56900;
})();
if(inst_56814__$1){
var statearr_56901_58087 = state_56855__$1;
(statearr_56901_58087[(1)] = (33));

} else {
var statearr_56902_58088 = state_56855__$1;
(statearr_56902_58088[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (25))){
var inst_56797 = (state_56855[(20)]);
var inst_56798 = (state_56855[(10)]);
var inst_56800 = (inst_56798 < inst_56797);
var inst_56801 = inst_56800;
var state_56855__$1 = state_56855;
if(cljs.core.truth_(inst_56801)){
var statearr_56903_58090 = state_56855__$1;
(statearr_56903_58090[(1)] = (27));

} else {
var statearr_56904_58091 = state_56855__$1;
(statearr_56904_58091[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (34))){
var state_56855__$1 = state_56855;
var statearr_56905_58096 = state_56855__$1;
(statearr_56905_58096[(2)] = null);

(statearr_56905_58096[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (17))){
var state_56855__$1 = state_56855;
var statearr_56906_58097 = state_56855__$1;
(statearr_56906_58097[(2)] = null);

(statearr_56906_58097[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (3))){
var inst_56853 = (state_56855[(2)]);
var state_56855__$1 = state_56855;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56855__$1,inst_56853);
} else {
if((state_val_56856 === (12))){
var inst_56782 = (state_56855[(2)]);
var state_56855__$1 = state_56855;
var statearr_56907_58098 = state_56855__$1;
(statearr_56907_58098[(2)] = inst_56782);

(statearr_56907_58098[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (2))){
var state_56855__$1 = state_56855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56855__$1,(4),ch);
} else {
if((state_val_56856 === (23))){
var state_56855__$1 = state_56855;
var statearr_56908_58099 = state_56855__$1;
(statearr_56908_58099[(2)] = null);

(statearr_56908_58099[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (35))){
var inst_56837 = (state_56855[(2)]);
var state_56855__$1 = state_56855;
var statearr_56909_58104 = state_56855__$1;
(statearr_56909_58104[(2)] = inst_56837);

(statearr_56909_58104[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (19))){
var inst_56754 = (state_56855[(7)]);
var inst_56758 = cljs.core.chunk_first(inst_56754);
var inst_56759 = cljs.core.chunk_rest(inst_56754);
var inst_56760 = cljs.core.count(inst_56758);
var inst_56732 = inst_56759;
var inst_56733 = inst_56758;
var inst_56734 = inst_56760;
var inst_56735 = (0);
var state_56855__$1 = (function (){var statearr_56910 = state_56855;
(statearr_56910[(14)] = inst_56734);

(statearr_56910[(15)] = inst_56732);

(statearr_56910[(16)] = inst_56735);

(statearr_56910[(17)] = inst_56733);

return statearr_56910;
})();
var statearr_56911_58105 = state_56855__$1;
(statearr_56911_58105[(2)] = null);

(statearr_56911_58105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (11))){
var inst_56732 = (state_56855[(15)]);
var inst_56754 = (state_56855[(7)]);
var inst_56754__$1 = cljs.core.seq(inst_56732);
var state_56855__$1 = (function (){var statearr_56912 = state_56855;
(statearr_56912[(7)] = inst_56754__$1);

return statearr_56912;
})();
if(inst_56754__$1){
var statearr_56913_58108 = state_56855__$1;
(statearr_56913_58108[(1)] = (16));

} else {
var statearr_56914_58109 = state_56855__$1;
(statearr_56914_58109[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (9))){
var inst_56784 = (state_56855[(2)]);
var state_56855__$1 = state_56855;
var statearr_56915_58110 = state_56855__$1;
(statearr_56915_58110[(2)] = inst_56784);

(statearr_56915_58110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (5))){
var inst_56730 = cljs.core.deref(cs);
var inst_56731 = cljs.core.seq(inst_56730);
var inst_56732 = inst_56731;
var inst_56733 = null;
var inst_56734 = (0);
var inst_56735 = (0);
var state_56855__$1 = (function (){var statearr_56916 = state_56855;
(statearr_56916[(14)] = inst_56734);

(statearr_56916[(15)] = inst_56732);

(statearr_56916[(16)] = inst_56735);

(statearr_56916[(17)] = inst_56733);

return statearr_56916;
})();
var statearr_56917_58111 = state_56855__$1;
(statearr_56917_58111[(2)] = null);

(statearr_56917_58111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (14))){
var state_56855__$1 = state_56855;
var statearr_56918_58112 = state_56855__$1;
(statearr_56918_58112[(2)] = null);

(statearr_56918_58112[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (45))){
var inst_56845 = (state_56855[(2)]);
var state_56855__$1 = state_56855;
var statearr_56919_58113 = state_56855__$1;
(statearr_56919_58113[(2)] = inst_56845);

(statearr_56919_58113[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (26))){
var inst_56787 = (state_56855[(29)]);
var inst_56841 = (state_56855[(2)]);
var inst_56842 = cljs.core.seq(inst_56787);
var state_56855__$1 = (function (){var statearr_56920 = state_56855;
(statearr_56920[(31)] = inst_56841);

return statearr_56920;
})();
if(inst_56842){
var statearr_56921_58114 = state_56855__$1;
(statearr_56921_58114[(1)] = (42));

} else {
var statearr_56922_58115 = state_56855__$1;
(statearr_56922_58115[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (16))){
var inst_56754 = (state_56855[(7)]);
var inst_56756 = cljs.core.chunked_seq_QMARK_(inst_56754);
var state_56855__$1 = state_56855;
if(inst_56756){
var statearr_56923_58116 = state_56855__$1;
(statearr_56923_58116[(1)] = (19));

} else {
var statearr_56924_58117 = state_56855__$1;
(statearr_56924_58117[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (38))){
var inst_56834 = (state_56855[(2)]);
var state_56855__$1 = state_56855;
var statearr_56925_58119 = state_56855__$1;
(statearr_56925_58119[(2)] = inst_56834);

(statearr_56925_58119[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (30))){
var state_56855__$1 = state_56855;
var statearr_56926_58121 = state_56855__$1;
(statearr_56926_58121[(2)] = null);

(statearr_56926_58121[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (10))){
var inst_56735 = (state_56855[(16)]);
var inst_56733 = (state_56855[(17)]);
var inst_56743 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_56733,inst_56735);
var inst_56744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56743,(0),null);
var inst_56745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56743,(1),null);
var state_56855__$1 = (function (){var statearr_56927 = state_56855;
(statearr_56927[(26)] = inst_56744);

return statearr_56927;
})();
if(cljs.core.truth_(inst_56745)){
var statearr_56928_58122 = state_56855__$1;
(statearr_56928_58122[(1)] = (13));

} else {
var statearr_56929_58123 = state_56855__$1;
(statearr_56929_58123[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (18))){
var inst_56780 = (state_56855[(2)]);
var state_56855__$1 = state_56855;
var statearr_56930_58124 = state_56855__$1;
(statearr_56930_58124[(2)] = inst_56780);

(statearr_56930_58124[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (42))){
var state_56855__$1 = state_56855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56855__$1,(45),dchan);
} else {
if((state_val_56856 === (37))){
var inst_56823 = (state_56855[(23)]);
var inst_56723 = (state_56855[(11)]);
var inst_56814 = (state_56855[(25)]);
var inst_56823__$1 = cljs.core.first(inst_56814);
var inst_56824 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_56823__$1,inst_56723,done);
var state_56855__$1 = (function (){var statearr_56931 = state_56855;
(statearr_56931[(23)] = inst_56823__$1);

return statearr_56931;
})();
if(cljs.core.truth_(inst_56824)){
var statearr_56932_58125 = state_56855__$1;
(statearr_56932_58125[(1)] = (39));

} else {
var statearr_56933_58126 = state_56855__$1;
(statearr_56933_58126[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56856 === (8))){
var inst_56734 = (state_56855[(14)]);
var inst_56735 = (state_56855[(16)]);
var inst_56737 = (inst_56735 < inst_56734);
var inst_56738 = inst_56737;
var state_56855__$1 = state_56855;
if(cljs.core.truth_(inst_56738)){
var statearr_56934_58127 = state_56855__$1;
(statearr_56934_58127[(1)] = (10));

} else {
var statearr_56935_58128 = state_56855__$1;
(statearr_56935_58128[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__56193__auto__ = null;
var cljs$core$async$mult_$_state_machine__56193__auto____0 = (function (){
var statearr_56936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56936[(0)] = cljs$core$async$mult_$_state_machine__56193__auto__);

(statearr_56936[(1)] = (1));

return statearr_56936;
});
var cljs$core$async$mult_$_state_machine__56193__auto____1 = (function (state_56855){
while(true){
var ret_value__56194__auto__ = (function (){try{while(true){
var result__56195__auto__ = switch__56192__auto__(state_56855);
if(cljs.core.keyword_identical_QMARK_(result__56195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56195__auto__;
}
break;
}
}catch (e56937){if((e56937 instanceof Object)){
var ex__56196__auto__ = e56937;
var statearr_56938_58129 = state_56855;
(statearr_56938_58129[(5)] = ex__56196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56937;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58130 = state_56855;
state_56855 = G__58130;
continue;
} else {
return ret_value__56194__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__56193__auto__ = function(state_56855){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__56193__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__56193__auto____1.call(this,state_56855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__56193__auto____0;
cljs$core$async$mult_$_state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__56193__auto____1;
return cljs$core$async$mult_$_state_machine__56193__auto__;
})()
})();
var state__56257__auto__ = (function (){var statearr_56939 = f__56256__auto__();
(statearr_56939[(6)] = c__56255__auto___58042);

return statearr_56939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56257__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__56941 = arguments.length;
switch (G__56941) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58147 = arguments.length;
var i__4790__auto___58148 = (0);
while(true){
if((i__4790__auto___58148 < len__4789__auto___58147)){
args__4795__auto__.push((arguments[i__4790__auto___58148]));

var G__58152 = (i__4790__auto___58148 + (1));
i__4790__auto___58148 = G__58152;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__56946){
var map__56947 = p__56946;
var map__56947__$1 = (((((!((map__56947 == null))))?(((((map__56947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56947):map__56947);
var opts = map__56947__$1;
var statearr_56949_58156 = state;
(statearr_56949_58156[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_56950_58157 = state;
(statearr_56950_58157[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_56951_58162 = state;
(statearr_56951_58162[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq56942){
var G__56943 = cljs.core.first(seq56942);
var seq56942__$1 = cljs.core.next(seq56942);
var G__56944 = cljs.core.first(seq56942__$1);
var seq56942__$2 = cljs.core.next(seq56942__$1);
var G__56945 = cljs.core.first(seq56942__$2);
var seq56942__$3 = cljs.core.next(seq56942__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56943,G__56944,G__56945,seq56942__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56952 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56952 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta56953){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta56953 = meta56953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56954,meta56953__$1){
var self__ = this;
var _56954__$1 = this;
return (new cljs.core.async.t_cljs$core$async56952(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta56953__$1));
}));

(cljs.core.async.t_cljs$core$async56952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56954){
var self__ = this;
var _56954__$1 = this;
return self__.meta56953;
}));

(cljs.core.async.t_cljs$core$async56952.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56952.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async56952.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56952.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56952.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56952.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56952.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56952.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56952.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta56953","meta56953",388169367,null)], null);
}));

(cljs.core.async.t_cljs$core$async56952.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56952.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56952");

(cljs.core.async.t_cljs$core$async56952.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async56952");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56952.
 */
cljs.core.async.__GT_t_cljs$core$async56952 = (function cljs$core$async$mix_$___GT_t_cljs$core$async56952(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta56953){
return (new cljs.core.async.t_cljs$core$async56952(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta56953));
});

}

return (new cljs.core.async.t_cljs$core$async56952(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__56255__auto___58175 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56256__auto__ = (function (){var switch__56192__auto__ = (function (state_57056){
var state_val_57057 = (state_57056[(1)]);
if((state_val_57057 === (7))){
var inst_56971 = (state_57056[(2)]);
var state_57056__$1 = state_57056;
var statearr_57058_58176 = state_57056__$1;
(statearr_57058_58176[(2)] = inst_56971);

(statearr_57058_58176[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (20))){
var inst_56983 = (state_57056[(7)]);
var state_57056__$1 = state_57056;
var statearr_57059_58177 = state_57056__$1;
(statearr_57059_58177[(2)] = inst_56983);

(statearr_57059_58177[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (27))){
var state_57056__$1 = state_57056;
var statearr_57060_58178 = state_57056__$1;
(statearr_57060_58178[(2)] = null);

(statearr_57060_58178[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (1))){
var inst_56958 = (state_57056[(8)]);
var inst_56958__$1 = calc_state();
var inst_56960 = (inst_56958__$1 == null);
var inst_56961 = cljs.core.not(inst_56960);
var state_57056__$1 = (function (){var statearr_57061 = state_57056;
(statearr_57061[(8)] = inst_56958__$1);

return statearr_57061;
})();
if(inst_56961){
var statearr_57062_58179 = state_57056__$1;
(statearr_57062_58179[(1)] = (2));

} else {
var statearr_57063_58180 = state_57056__$1;
(statearr_57063_58180[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (24))){
var inst_57016 = (state_57056[(9)]);
var inst_57030 = (state_57056[(10)]);
var inst_57007 = (state_57056[(11)]);
var inst_57030__$1 = (inst_57007.cljs$core$IFn$_invoke$arity$1 ? inst_57007.cljs$core$IFn$_invoke$arity$1(inst_57016) : inst_57007.call(null,inst_57016));
var state_57056__$1 = (function (){var statearr_57064 = state_57056;
(statearr_57064[(10)] = inst_57030__$1);

return statearr_57064;
})();
if(cljs.core.truth_(inst_57030__$1)){
var statearr_57065_58191 = state_57056__$1;
(statearr_57065_58191[(1)] = (29));

} else {
var statearr_57066_58196 = state_57056__$1;
(statearr_57066_58196[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (4))){
var inst_56974 = (state_57056[(2)]);
var state_57056__$1 = state_57056;
if(cljs.core.truth_(inst_56974)){
var statearr_57067_58198 = state_57056__$1;
(statearr_57067_58198[(1)] = (8));

} else {
var statearr_57068_58199 = state_57056__$1;
(statearr_57068_58199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (15))){
var inst_57001 = (state_57056[(2)]);
var state_57056__$1 = state_57056;
if(cljs.core.truth_(inst_57001)){
var statearr_57069_58200 = state_57056__$1;
(statearr_57069_58200[(1)] = (19));

} else {
var statearr_57070_58201 = state_57056__$1;
(statearr_57070_58201[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (21))){
var inst_57006 = (state_57056[(12)]);
var inst_57006__$1 = (state_57056[(2)]);
var inst_57007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57006__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57006__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57006__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_57056__$1 = (function (){var statearr_57071 = state_57056;
(statearr_57071[(12)] = inst_57006__$1);

(statearr_57071[(13)] = inst_57008);

(statearr_57071[(11)] = inst_57007);

return statearr_57071;
})();
return cljs.core.async.ioc_alts_BANG_(state_57056__$1,(22),inst_57009);
} else {
if((state_val_57057 === (31))){
var inst_57038 = (state_57056[(2)]);
var state_57056__$1 = state_57056;
if(cljs.core.truth_(inst_57038)){
var statearr_57072_58202 = state_57056__$1;
(statearr_57072_58202[(1)] = (32));

} else {
var statearr_57073_58203 = state_57056__$1;
(statearr_57073_58203[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (32))){
var inst_57015 = (state_57056[(14)]);
var state_57056__$1 = state_57056;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57056__$1,(35),out,inst_57015);
} else {
if((state_val_57057 === (33))){
var inst_57006 = (state_57056[(12)]);
var inst_56983 = inst_57006;
var state_57056__$1 = (function (){var statearr_57074 = state_57056;
(statearr_57074[(7)] = inst_56983);

return statearr_57074;
})();
var statearr_57075_58204 = state_57056__$1;
(statearr_57075_58204[(2)] = null);

(statearr_57075_58204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (13))){
var inst_56983 = (state_57056[(7)]);
var inst_56990 = inst_56983.cljs$lang$protocol_mask$partition0$;
var inst_56991 = (inst_56990 & (64));
var inst_56992 = inst_56983.cljs$core$ISeq$;
var inst_56993 = (cljs.core.PROTOCOL_SENTINEL === inst_56992);
var inst_56994 = ((inst_56991) || (inst_56993));
var state_57056__$1 = state_57056;
if(cljs.core.truth_(inst_56994)){
var statearr_57076_58212 = state_57056__$1;
(statearr_57076_58212[(1)] = (16));

} else {
var statearr_57077_58213 = state_57056__$1;
(statearr_57077_58213[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (22))){
var inst_57016 = (state_57056[(9)]);
var inst_57015 = (state_57056[(14)]);
var inst_57014 = (state_57056[(2)]);
var inst_57015__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57014,(0),null);
var inst_57016__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57014,(1),null);
var inst_57017 = (inst_57015__$1 == null);
var inst_57018 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57016__$1,change);
var inst_57019 = ((inst_57017) || (inst_57018));
var state_57056__$1 = (function (){var statearr_57078 = state_57056;
(statearr_57078[(9)] = inst_57016__$1);

(statearr_57078[(14)] = inst_57015__$1);

return statearr_57078;
})();
if(cljs.core.truth_(inst_57019)){
var statearr_57079_58217 = state_57056__$1;
(statearr_57079_58217[(1)] = (23));

} else {
var statearr_57080_58218 = state_57056__$1;
(statearr_57080_58218[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (36))){
var inst_57006 = (state_57056[(12)]);
var inst_56983 = inst_57006;
var state_57056__$1 = (function (){var statearr_57081 = state_57056;
(statearr_57081[(7)] = inst_56983);

return statearr_57081;
})();
var statearr_57082_58219 = state_57056__$1;
(statearr_57082_58219[(2)] = null);

(statearr_57082_58219[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (29))){
var inst_57030 = (state_57056[(10)]);
var state_57056__$1 = state_57056;
var statearr_57083_58221 = state_57056__$1;
(statearr_57083_58221[(2)] = inst_57030);

(statearr_57083_58221[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (6))){
var state_57056__$1 = state_57056;
var statearr_57084_58222 = state_57056__$1;
(statearr_57084_58222[(2)] = false);

(statearr_57084_58222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (28))){
var inst_57026 = (state_57056[(2)]);
var inst_57027 = calc_state();
var inst_56983 = inst_57027;
var state_57056__$1 = (function (){var statearr_57085 = state_57056;
(statearr_57085[(15)] = inst_57026);

(statearr_57085[(7)] = inst_56983);

return statearr_57085;
})();
var statearr_57086_58227 = state_57056__$1;
(statearr_57086_58227[(2)] = null);

(statearr_57086_58227[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (25))){
var inst_57052 = (state_57056[(2)]);
var state_57056__$1 = state_57056;
var statearr_57087_58229 = state_57056__$1;
(statearr_57087_58229[(2)] = inst_57052);

(statearr_57087_58229[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (34))){
var inst_57050 = (state_57056[(2)]);
var state_57056__$1 = state_57056;
var statearr_57088_58230 = state_57056__$1;
(statearr_57088_58230[(2)] = inst_57050);

(statearr_57088_58230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (17))){
var state_57056__$1 = state_57056;
var statearr_57089_58231 = state_57056__$1;
(statearr_57089_58231[(2)] = false);

(statearr_57089_58231[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (3))){
var state_57056__$1 = state_57056;
var statearr_57090_58232 = state_57056__$1;
(statearr_57090_58232[(2)] = false);

(statearr_57090_58232[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (12))){
var inst_57054 = (state_57056[(2)]);
var state_57056__$1 = state_57056;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57056__$1,inst_57054);
} else {
if((state_val_57057 === (2))){
var inst_56958 = (state_57056[(8)]);
var inst_56963 = inst_56958.cljs$lang$protocol_mask$partition0$;
var inst_56964 = (inst_56963 & (64));
var inst_56965 = inst_56958.cljs$core$ISeq$;
var inst_56966 = (cljs.core.PROTOCOL_SENTINEL === inst_56965);
var inst_56967 = ((inst_56964) || (inst_56966));
var state_57056__$1 = state_57056;
if(cljs.core.truth_(inst_56967)){
var statearr_57091_58238 = state_57056__$1;
(statearr_57091_58238[(1)] = (5));

} else {
var statearr_57092_58239 = state_57056__$1;
(statearr_57092_58239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (23))){
var inst_57015 = (state_57056[(14)]);
var inst_57021 = (inst_57015 == null);
var state_57056__$1 = state_57056;
if(cljs.core.truth_(inst_57021)){
var statearr_57093_58241 = state_57056__$1;
(statearr_57093_58241[(1)] = (26));

} else {
var statearr_57094_58242 = state_57056__$1;
(statearr_57094_58242[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (35))){
var inst_57041 = (state_57056[(2)]);
var state_57056__$1 = state_57056;
if(cljs.core.truth_(inst_57041)){
var statearr_57095_58243 = state_57056__$1;
(statearr_57095_58243[(1)] = (36));

} else {
var statearr_57096_58244 = state_57056__$1;
(statearr_57096_58244[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (19))){
var inst_56983 = (state_57056[(7)]);
var inst_57003 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_56983);
var state_57056__$1 = state_57056;
var statearr_57097_58245 = state_57056__$1;
(statearr_57097_58245[(2)] = inst_57003);

(statearr_57097_58245[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (11))){
var inst_56983 = (state_57056[(7)]);
var inst_56987 = (inst_56983 == null);
var inst_56988 = cljs.core.not(inst_56987);
var state_57056__$1 = state_57056;
if(inst_56988){
var statearr_57098_58246 = state_57056__$1;
(statearr_57098_58246[(1)] = (13));

} else {
var statearr_57099_58247 = state_57056__$1;
(statearr_57099_58247[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (9))){
var inst_56958 = (state_57056[(8)]);
var state_57056__$1 = state_57056;
var statearr_57100_58248 = state_57056__$1;
(statearr_57100_58248[(2)] = inst_56958);

(statearr_57100_58248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (5))){
var state_57056__$1 = state_57056;
var statearr_57101_58249 = state_57056__$1;
(statearr_57101_58249[(2)] = true);

(statearr_57101_58249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (14))){
var state_57056__$1 = state_57056;
var statearr_57102_58255 = state_57056__$1;
(statearr_57102_58255[(2)] = false);

(statearr_57102_58255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (26))){
var inst_57016 = (state_57056[(9)]);
var inst_57023 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_57016);
var state_57056__$1 = state_57056;
var statearr_57103_58258 = state_57056__$1;
(statearr_57103_58258[(2)] = inst_57023);

(statearr_57103_58258[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (16))){
var state_57056__$1 = state_57056;
var statearr_57104_58260 = state_57056__$1;
(statearr_57104_58260[(2)] = true);

(statearr_57104_58260[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (38))){
var inst_57046 = (state_57056[(2)]);
var state_57056__$1 = state_57056;
var statearr_57105_58262 = state_57056__$1;
(statearr_57105_58262[(2)] = inst_57046);

(statearr_57105_58262[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (30))){
var inst_57016 = (state_57056[(9)]);
var inst_57008 = (state_57056[(13)]);
var inst_57007 = (state_57056[(11)]);
var inst_57033 = cljs.core.empty_QMARK_(inst_57007);
var inst_57034 = (inst_57008.cljs$core$IFn$_invoke$arity$1 ? inst_57008.cljs$core$IFn$_invoke$arity$1(inst_57016) : inst_57008.call(null,inst_57016));
var inst_57035 = cljs.core.not(inst_57034);
var inst_57036 = ((inst_57033) && (inst_57035));
var state_57056__$1 = state_57056;
var statearr_57106_58263 = state_57056__$1;
(statearr_57106_58263[(2)] = inst_57036);

(statearr_57106_58263[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (10))){
var inst_56958 = (state_57056[(8)]);
var inst_56979 = (state_57056[(2)]);
var inst_56980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56979,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_56981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56979,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_56982 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56979,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_56983 = inst_56958;
var state_57056__$1 = (function (){var statearr_57107 = state_57056;
(statearr_57107[(16)] = inst_56981);

(statearr_57107[(17)] = inst_56980);

(statearr_57107[(7)] = inst_56983);

(statearr_57107[(18)] = inst_56982);

return statearr_57107;
})();
var statearr_57108_58264 = state_57056__$1;
(statearr_57108_58264[(2)] = null);

(statearr_57108_58264[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (18))){
var inst_56998 = (state_57056[(2)]);
var state_57056__$1 = state_57056;
var statearr_57109_58265 = state_57056__$1;
(statearr_57109_58265[(2)] = inst_56998);

(statearr_57109_58265[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (37))){
var state_57056__$1 = state_57056;
var statearr_57110_58266 = state_57056__$1;
(statearr_57110_58266[(2)] = null);

(statearr_57110_58266[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57057 === (8))){
var inst_56958 = (state_57056[(8)]);
var inst_56976 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_56958);
var state_57056__$1 = state_57056;
var statearr_57111_58267 = state_57056__$1;
(statearr_57111_58267[(2)] = inst_56976);

(statearr_57111_58267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__56193__auto__ = null;
var cljs$core$async$mix_$_state_machine__56193__auto____0 = (function (){
var statearr_57112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57112[(0)] = cljs$core$async$mix_$_state_machine__56193__auto__);

(statearr_57112[(1)] = (1));

return statearr_57112;
});
var cljs$core$async$mix_$_state_machine__56193__auto____1 = (function (state_57056){
while(true){
var ret_value__56194__auto__ = (function (){try{while(true){
var result__56195__auto__ = switch__56192__auto__(state_57056);
if(cljs.core.keyword_identical_QMARK_(result__56195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56195__auto__;
}
break;
}
}catch (e57113){if((e57113 instanceof Object)){
var ex__56196__auto__ = e57113;
var statearr_57114_58276 = state_57056;
(statearr_57114_58276[(5)] = ex__56196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57113;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58277 = state_57056;
state_57056 = G__58277;
continue;
} else {
return ret_value__56194__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__56193__auto__ = function(state_57056){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__56193__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__56193__auto____1.call(this,state_57056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__56193__auto____0;
cljs$core$async$mix_$_state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__56193__auto____1;
return cljs$core$async$mix_$_state_machine__56193__auto__;
})()
})();
var state__56257__auto__ = (function (){var statearr_57115 = f__56256__auto__();
(statearr_57115[(6)] = c__56255__auto___58175);

return statearr_57115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56257__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__57117 = arguments.length;
switch (G__57117) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__57120 = arguments.length;
switch (G__57120) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__57118_SHARP_){
if(cljs.core.truth_((p1__57118_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__57118_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__57118_SHARP_.call(null,topic)))){
return p1__57118_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__57118_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57121 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57121 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta57122){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta57122 = meta57122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57123,meta57122__$1){
var self__ = this;
var _57123__$1 = this;
return (new cljs.core.async.t_cljs$core$async57121(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta57122__$1));
}));

(cljs.core.async.t_cljs$core$async57121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57123){
var self__ = this;
var _57123__$1 = this;
return self__.meta57122;
}));

(cljs.core.async.t_cljs$core$async57121.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57121.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async57121.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57121.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async57121.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async57121.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async57121.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async57121.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta57122","meta57122",-1472985828,null)], null);
}));

(cljs.core.async.t_cljs$core$async57121.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57121");

(cljs.core.async.t_cljs$core$async57121.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async57121");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57121.
 */
cljs.core.async.__GT_t_cljs$core$async57121 = (function cljs$core$async$__GT_t_cljs$core$async57121(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta57122){
return (new cljs.core.async.t_cljs$core$async57121(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta57122));
});

}

return (new cljs.core.async.t_cljs$core$async57121(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__56255__auto___58282 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56256__auto__ = (function (){var switch__56192__auto__ = (function (state_57195){
var state_val_57196 = (state_57195[(1)]);
if((state_val_57196 === (7))){
var inst_57191 = (state_57195[(2)]);
var state_57195__$1 = state_57195;
var statearr_57197_58285 = state_57195__$1;
(statearr_57197_58285[(2)] = inst_57191);

(statearr_57197_58285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57196 === (20))){
var state_57195__$1 = state_57195;
var statearr_57198_58286 = state_57195__$1;
(statearr_57198_58286[(2)] = null);

(statearr_57198_58286[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57196 === (1))){
var state_57195__$1 = state_57195;
var statearr_57199_58287 = state_57195__$1;
(statearr_57199_58287[(2)] = null);

(statearr_57199_58287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57196 === (24))){
var inst_57174 = (state_57195[(7)]);
var inst_57183 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_57174);
var state_57195__$1 = state_57195;
var statearr_57200_58288 = state_57195__$1;
(statearr_57200_58288[(2)] = inst_57183);

(statearr_57200_58288[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57196 === (4))){
var inst_57126 = (state_57195[(8)]);
var inst_57126__$1 = (state_57195[(2)]);
var inst_57127 = (inst_57126__$1 == null);
var state_57195__$1 = (function (){var statearr_57201 = state_57195;
(statearr_57201[(8)] = inst_57126__$1);

return statearr_57201;
})();
if(cljs.core.truth_(inst_57127)){
var statearr_57202_58289 = state_57195__$1;
(statearr_57202_58289[(1)] = (5));

} else {
var statearr_57203_58290 = state_57195__$1;
(statearr_57203_58290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57196 === (15))){
var inst_57168 = (state_57195[(2)]);
var state_57195__$1 = state_57195;
var statearr_57204_58291 = state_57195__$1;
(statearr_57204_58291[(2)] = inst_57168);

(statearr_57204_58291[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57196 === (21))){
var inst_57188 = (state_57195[(2)]);
var state_57195__$1 = (function (){var statearr_57205 = state_57195;
(statearr_57205[(9)] = inst_57188);

return statearr_57205;
})();
var statearr_57206_58292 = state_57195__$1;
(statearr_57206_58292[(2)] = null);

(statearr_57206_58292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57196 === (13))){
var inst_57150 = (state_57195[(10)]);
var inst_57152 = cljs.core.chunked_seq_QMARK_(inst_57150);
var state_57195__$1 = state_57195;
if(inst_57152){
var statearr_57207_58293 = state_57195__$1;
(statearr_57207_58293[(1)] = (16));

} else {
var statearr_57208_58296 = state_57195__$1;
(statearr_57208_58296[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57196 === (22))){
var inst_57180 = (state_57195[(2)]);
var state_57195__$1 = state_57195;
if(cljs.core.truth_(inst_57180)){
var statearr_57209_58297 = state_57195__$1;
(statearr_57209_58297[(1)] = (23));

} else {
var statearr_57210_58298 = state_57195__$1;
(statearr_57210_58298[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57196 === (6))){
var inst_57126 = (state_57195[(8)]);
var inst_57174 = (state_57195[(7)]);
var inst_57176 = (state_57195[(11)]);
var inst_57174__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_57126) : topic_fn.call(null,inst_57126));
var inst_57175 = cljs.core.deref(mults);
var inst_57176__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57175,inst_57174__$1);
var state_57195__$1 = (function (){var statearr_57211 = state_57195;
(statearr_57211[(7)] = inst_57174__$1);

(statearr_57211[(11)] = inst_57176__$1);

return statearr_57211;
})();
if(cljs.core.truth_(inst_57176__$1)){
var statearr_57212_58299 = state_57195__$1;
(statearr_57212_58299[(1)] = (19));

} else {
var statearr_57213_58300 = state_57195__$1;
(statearr_57213_58300[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57196 === (25))){
var inst_57185 = (state_57195[(2)]);
var state_57195__$1 = state_57195;
var statearr_57214_58301 = state_57195__$1;
(statearr_57214_58301[(2)] = inst_57185);

(statearr_57214_58301[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57196 === (17))){
var inst_57150 = (state_57195[(10)]);
var inst_57159 = cljs.core.first(inst_57150);
var inst_57160 = cljs.core.async.muxch_STAR_(inst_57159);
var inst_57161 = cljs.core.async.close_BANG_(inst_57160);
var inst_57162 = cljs.core.next(inst_57150);
var inst_57136 = inst_57162;
var inst_57137 = null;
var inst_57138 = (0);
var inst_57139 = (0);
var state_57195__$1 = (function (){var statearr_57215 = state_57195;
(statearr_57215[(12)] = inst_57139);

(statearr_57215[(13)] = inst_57138);

(statearr_57215[(14)] = inst_57161);

(statearr_57215[(15)] = inst_57137);

(statearr_57215[(16)] = inst_57136);

return statearr_57215;
})();
var statearr_57216_58302 = state_57195__$1;
(statearr_57216_58302[(2)] = null);

(statearr_57216_58302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57196 === (3))){
var inst_57193 = (state_57195[(2)]);
var state_57195__$1 = state_57195;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57195__$1,inst_57193);
} else {
if((state_val_57196 === (12))){
var inst_57170 = (state_57195[(2)]);
var state_57195__$1 = state_57195;
var statearr_57217_58303 = state_57195__$1;
(statearr_57217_58303[(2)] = inst_57170);

(statearr_57217_58303[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57196 === (2))){
var state_57195__$1 = state_57195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57195__$1,(4),ch);
} else {
if((state_val_57196 === (23))){
var state_57195__$1 = state_57195;
var statearr_57218_58304 = state_57195__$1;
(statearr_57218_58304[(2)] = null);

(statearr_57218_58304[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57196 === (19))){
var inst_57126 = (state_57195[(8)]);
var inst_57176 = (state_57195[(11)]);
var inst_57178 = cljs.core.async.muxch_STAR_(inst_57176);
var state_57195__$1 = state_57195;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57195__$1,(22),inst_57178,inst_57126);
} else {
if((state_val_57196 === (11))){
var inst_57150 = (state_57195[(10)]);
var inst_57136 = (state_57195[(16)]);
var inst_57150__$1 = cljs.core.seq(inst_57136);
var state_57195__$1 = (function (){var statearr_57219 = state_57195;
(statearr_57219[(10)] = inst_57150__$1);

return statearr_57219;
})();
if(inst_57150__$1){
var statearr_57220_58305 = state_57195__$1;
(statearr_57220_58305[(1)] = (13));

} else {
var statearr_57221_58306 = state_57195__$1;
(statearr_57221_58306[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57196 === (9))){
var inst_57172 = (state_57195[(2)]);
var state_57195__$1 = state_57195;
var statearr_57222_58307 = state_57195__$1;
(statearr_57222_58307[(2)] = inst_57172);

(statearr_57222_58307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57196 === (5))){
var inst_57133 = cljs.core.deref(mults);
var inst_57134 = cljs.core.vals(inst_57133);
var inst_57135 = cljs.core.seq(inst_57134);
var inst_57136 = inst_57135;
var inst_57137 = null;
var inst_57138 = (0);
var inst_57139 = (0);
var state_57195__$1 = (function (){var statearr_57223 = state_57195;
(statearr_57223[(12)] = inst_57139);

(statearr_57223[(13)] = inst_57138);

(statearr_57223[(15)] = inst_57137);

(statearr_57223[(16)] = inst_57136);

return statearr_57223;
})();
var statearr_57224_58308 = state_57195__$1;
(statearr_57224_58308[(2)] = null);

(statearr_57224_58308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57196 === (14))){
var state_57195__$1 = state_57195;
var statearr_57228_58310 = state_57195__$1;
(statearr_57228_58310[(2)] = null);

(statearr_57228_58310[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57196 === (16))){
var inst_57150 = (state_57195[(10)]);
var inst_57154 = cljs.core.chunk_first(inst_57150);
var inst_57155 = cljs.core.chunk_rest(inst_57150);
var inst_57156 = cljs.core.count(inst_57154);
var inst_57136 = inst_57155;
var inst_57137 = inst_57154;
var inst_57138 = inst_57156;
var inst_57139 = (0);
var state_57195__$1 = (function (){var statearr_57229 = state_57195;
(statearr_57229[(12)] = inst_57139);

(statearr_57229[(13)] = inst_57138);

(statearr_57229[(15)] = inst_57137);

(statearr_57229[(16)] = inst_57136);

return statearr_57229;
})();
var statearr_57230_58311 = state_57195__$1;
(statearr_57230_58311[(2)] = null);

(statearr_57230_58311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57196 === (10))){
var inst_57139 = (state_57195[(12)]);
var inst_57138 = (state_57195[(13)]);
var inst_57137 = (state_57195[(15)]);
var inst_57136 = (state_57195[(16)]);
var inst_57144 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_57137,inst_57139);
var inst_57145 = cljs.core.async.muxch_STAR_(inst_57144);
var inst_57146 = cljs.core.async.close_BANG_(inst_57145);
var inst_57147 = (inst_57139 + (1));
var tmp57225 = inst_57138;
var tmp57226 = inst_57137;
var tmp57227 = inst_57136;
var inst_57136__$1 = tmp57227;
var inst_57137__$1 = tmp57226;
var inst_57138__$1 = tmp57225;
var inst_57139__$1 = inst_57147;
var state_57195__$1 = (function (){var statearr_57231 = state_57195;
(statearr_57231[(12)] = inst_57139__$1);

(statearr_57231[(13)] = inst_57138__$1);

(statearr_57231[(17)] = inst_57146);

(statearr_57231[(15)] = inst_57137__$1);

(statearr_57231[(16)] = inst_57136__$1);

return statearr_57231;
})();
var statearr_57232_58312 = state_57195__$1;
(statearr_57232_58312[(2)] = null);

(statearr_57232_58312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57196 === (18))){
var inst_57165 = (state_57195[(2)]);
var state_57195__$1 = state_57195;
var statearr_57233_58313 = state_57195__$1;
(statearr_57233_58313[(2)] = inst_57165);

(statearr_57233_58313[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57196 === (8))){
var inst_57139 = (state_57195[(12)]);
var inst_57138 = (state_57195[(13)]);
var inst_57141 = (inst_57139 < inst_57138);
var inst_57142 = inst_57141;
var state_57195__$1 = state_57195;
if(cljs.core.truth_(inst_57142)){
var statearr_57234_58314 = state_57195__$1;
(statearr_57234_58314[(1)] = (10));

} else {
var statearr_57235_58315 = state_57195__$1;
(statearr_57235_58315[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56193__auto__ = null;
var cljs$core$async$state_machine__56193__auto____0 = (function (){
var statearr_57236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57236[(0)] = cljs$core$async$state_machine__56193__auto__);

(statearr_57236[(1)] = (1));

return statearr_57236;
});
var cljs$core$async$state_machine__56193__auto____1 = (function (state_57195){
while(true){
var ret_value__56194__auto__ = (function (){try{while(true){
var result__56195__auto__ = switch__56192__auto__(state_57195);
if(cljs.core.keyword_identical_QMARK_(result__56195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56195__auto__;
}
break;
}
}catch (e57237){if((e57237 instanceof Object)){
var ex__56196__auto__ = e57237;
var statearr_57238_58316 = state_57195;
(statearr_57238_58316[(5)] = ex__56196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57237;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58317 = state_57195;
state_57195 = G__58317;
continue;
} else {
return ret_value__56194__auto__;
}
break;
}
});
cljs$core$async$state_machine__56193__auto__ = function(state_57195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56193__auto____1.call(this,state_57195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56193__auto____0;
cljs$core$async$state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56193__auto____1;
return cljs$core$async$state_machine__56193__auto__;
})()
})();
var state__56257__auto__ = (function (){var statearr_57239 = f__56256__auto__();
(statearr_57239[(6)] = c__56255__auto___58282);

return statearr_57239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56257__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__57241 = arguments.length;
switch (G__57241) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__57243 = arguments.length;
switch (G__57243) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__57245 = arguments.length;
switch (G__57245) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__56255__auto___58322 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56256__auto__ = (function (){var switch__56192__auto__ = (function (state_57284){
var state_val_57285 = (state_57284[(1)]);
if((state_val_57285 === (7))){
var state_57284__$1 = state_57284;
var statearr_57286_58323 = state_57284__$1;
(statearr_57286_58323[(2)] = null);

(statearr_57286_58323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (1))){
var state_57284__$1 = state_57284;
var statearr_57287_58325 = state_57284__$1;
(statearr_57287_58325[(2)] = null);

(statearr_57287_58325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (4))){
var inst_57248 = (state_57284[(7)]);
var inst_57250 = (inst_57248 < cnt);
var state_57284__$1 = state_57284;
if(cljs.core.truth_(inst_57250)){
var statearr_57288_58326 = state_57284__$1;
(statearr_57288_58326[(1)] = (6));

} else {
var statearr_57289_58327 = state_57284__$1;
(statearr_57289_58327[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (15))){
var inst_57280 = (state_57284[(2)]);
var state_57284__$1 = state_57284;
var statearr_57290_58328 = state_57284__$1;
(statearr_57290_58328[(2)] = inst_57280);

(statearr_57290_58328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (13))){
var inst_57273 = cljs.core.async.close_BANG_(out);
var state_57284__$1 = state_57284;
var statearr_57291_58329 = state_57284__$1;
(statearr_57291_58329[(2)] = inst_57273);

(statearr_57291_58329[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (6))){
var state_57284__$1 = state_57284;
var statearr_57292_58330 = state_57284__$1;
(statearr_57292_58330[(2)] = null);

(statearr_57292_58330[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (3))){
var inst_57282 = (state_57284[(2)]);
var state_57284__$1 = state_57284;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57284__$1,inst_57282);
} else {
if((state_val_57285 === (12))){
var inst_57270 = (state_57284[(8)]);
var inst_57270__$1 = (state_57284[(2)]);
var inst_57271 = cljs.core.some(cljs.core.nil_QMARK_,inst_57270__$1);
var state_57284__$1 = (function (){var statearr_57293 = state_57284;
(statearr_57293[(8)] = inst_57270__$1);

return statearr_57293;
})();
if(cljs.core.truth_(inst_57271)){
var statearr_57294_58334 = state_57284__$1;
(statearr_57294_58334[(1)] = (13));

} else {
var statearr_57295_58336 = state_57284__$1;
(statearr_57295_58336[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (2))){
var inst_57247 = cljs.core.reset_BANG_(dctr,cnt);
var inst_57248 = (0);
var state_57284__$1 = (function (){var statearr_57296 = state_57284;
(statearr_57296[(9)] = inst_57247);

(statearr_57296[(7)] = inst_57248);

return statearr_57296;
})();
var statearr_57297_58337 = state_57284__$1;
(statearr_57297_58337[(2)] = null);

(statearr_57297_58337[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (11))){
var inst_57248 = (state_57284[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_57284,(10),Object,null,(9));
var inst_57257 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_57248) : chs__$1.call(null,inst_57248));
var inst_57258 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_57248) : done.call(null,inst_57248));
var inst_57259 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_57257,inst_57258);
var state_57284__$1 = state_57284;
var statearr_57298_58338 = state_57284__$1;
(statearr_57298_58338[(2)] = inst_57259);


cljs.core.async.impl.ioc_helpers.process_exception(state_57284__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (9))){
var inst_57248 = (state_57284[(7)]);
var inst_57261 = (state_57284[(2)]);
var inst_57262 = (inst_57248 + (1));
var inst_57248__$1 = inst_57262;
var state_57284__$1 = (function (){var statearr_57299 = state_57284;
(statearr_57299[(10)] = inst_57261);

(statearr_57299[(7)] = inst_57248__$1);

return statearr_57299;
})();
var statearr_57300_58339 = state_57284__$1;
(statearr_57300_58339[(2)] = null);

(statearr_57300_58339[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (5))){
var inst_57268 = (state_57284[(2)]);
var state_57284__$1 = (function (){var statearr_57301 = state_57284;
(statearr_57301[(11)] = inst_57268);

return statearr_57301;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57284__$1,(12),dchan);
} else {
if((state_val_57285 === (14))){
var inst_57270 = (state_57284[(8)]);
var inst_57275 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_57270);
var state_57284__$1 = state_57284;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57284__$1,(16),out,inst_57275);
} else {
if((state_val_57285 === (16))){
var inst_57277 = (state_57284[(2)]);
var state_57284__$1 = (function (){var statearr_57302 = state_57284;
(statearr_57302[(12)] = inst_57277);

return statearr_57302;
})();
var statearr_57303_58346 = state_57284__$1;
(statearr_57303_58346[(2)] = null);

(statearr_57303_58346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (10))){
var inst_57252 = (state_57284[(2)]);
var inst_57253 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_57284__$1 = (function (){var statearr_57304 = state_57284;
(statearr_57304[(13)] = inst_57252);

return statearr_57304;
})();
var statearr_57305_58347 = state_57284__$1;
(statearr_57305_58347[(2)] = inst_57253);


cljs.core.async.impl.ioc_helpers.process_exception(state_57284__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57285 === (8))){
var inst_57266 = (state_57284[(2)]);
var state_57284__$1 = state_57284;
var statearr_57306_58348 = state_57284__$1;
(statearr_57306_58348[(2)] = inst_57266);

(statearr_57306_58348[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56193__auto__ = null;
var cljs$core$async$state_machine__56193__auto____0 = (function (){
var statearr_57307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57307[(0)] = cljs$core$async$state_machine__56193__auto__);

(statearr_57307[(1)] = (1));

return statearr_57307;
});
var cljs$core$async$state_machine__56193__auto____1 = (function (state_57284){
while(true){
var ret_value__56194__auto__ = (function (){try{while(true){
var result__56195__auto__ = switch__56192__auto__(state_57284);
if(cljs.core.keyword_identical_QMARK_(result__56195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56195__auto__;
}
break;
}
}catch (e57308){if((e57308 instanceof Object)){
var ex__56196__auto__ = e57308;
var statearr_57309_58349 = state_57284;
(statearr_57309_58349[(5)] = ex__56196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57308;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58350 = state_57284;
state_57284 = G__58350;
continue;
} else {
return ret_value__56194__auto__;
}
break;
}
});
cljs$core$async$state_machine__56193__auto__ = function(state_57284){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56193__auto____1.call(this,state_57284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56193__auto____0;
cljs$core$async$state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56193__auto____1;
return cljs$core$async$state_machine__56193__auto__;
})()
})();
var state__56257__auto__ = (function (){var statearr_57310 = f__56256__auto__();
(statearr_57310[(6)] = c__56255__auto___58322);

return statearr_57310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56257__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__57313 = arguments.length;
switch (G__57313) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56255__auto___58352 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56256__auto__ = (function (){var switch__56192__auto__ = (function (state_57345){
var state_val_57346 = (state_57345[(1)]);
if((state_val_57346 === (7))){
var inst_57325 = (state_57345[(7)]);
var inst_57324 = (state_57345[(8)]);
var inst_57324__$1 = (state_57345[(2)]);
var inst_57325__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57324__$1,(0),null);
var inst_57326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57324__$1,(1),null);
var inst_57327 = (inst_57325__$1 == null);
var state_57345__$1 = (function (){var statearr_57347 = state_57345;
(statearr_57347[(9)] = inst_57326);

(statearr_57347[(7)] = inst_57325__$1);

(statearr_57347[(8)] = inst_57324__$1);

return statearr_57347;
})();
if(cljs.core.truth_(inst_57327)){
var statearr_57348_58362 = state_57345__$1;
(statearr_57348_58362[(1)] = (8));

} else {
var statearr_57349_58363 = state_57345__$1;
(statearr_57349_58363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57346 === (1))){
var inst_57314 = cljs.core.vec(chs);
var inst_57315 = inst_57314;
var state_57345__$1 = (function (){var statearr_57350 = state_57345;
(statearr_57350[(10)] = inst_57315);

return statearr_57350;
})();
var statearr_57351_58364 = state_57345__$1;
(statearr_57351_58364[(2)] = null);

(statearr_57351_58364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57346 === (4))){
var inst_57315 = (state_57345[(10)]);
var state_57345__$1 = state_57345;
return cljs.core.async.ioc_alts_BANG_(state_57345__$1,(7),inst_57315);
} else {
if((state_val_57346 === (6))){
var inst_57341 = (state_57345[(2)]);
var state_57345__$1 = state_57345;
var statearr_57352_58365 = state_57345__$1;
(statearr_57352_58365[(2)] = inst_57341);

(statearr_57352_58365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57346 === (3))){
var inst_57343 = (state_57345[(2)]);
var state_57345__$1 = state_57345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57345__$1,inst_57343);
} else {
if((state_val_57346 === (2))){
var inst_57315 = (state_57345[(10)]);
var inst_57317 = cljs.core.count(inst_57315);
var inst_57318 = (inst_57317 > (0));
var state_57345__$1 = state_57345;
if(cljs.core.truth_(inst_57318)){
var statearr_57354_58366 = state_57345__$1;
(statearr_57354_58366[(1)] = (4));

} else {
var statearr_57355_58367 = state_57345__$1;
(statearr_57355_58367[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57346 === (11))){
var inst_57315 = (state_57345[(10)]);
var inst_57334 = (state_57345[(2)]);
var tmp57353 = inst_57315;
var inst_57315__$1 = tmp57353;
var state_57345__$1 = (function (){var statearr_57356 = state_57345;
(statearr_57356[(11)] = inst_57334);

(statearr_57356[(10)] = inst_57315__$1);

return statearr_57356;
})();
var statearr_57357_58368 = state_57345__$1;
(statearr_57357_58368[(2)] = null);

(statearr_57357_58368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57346 === (9))){
var inst_57325 = (state_57345[(7)]);
var state_57345__$1 = state_57345;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57345__$1,(11),out,inst_57325);
} else {
if((state_val_57346 === (5))){
var inst_57339 = cljs.core.async.close_BANG_(out);
var state_57345__$1 = state_57345;
var statearr_57358_58385 = state_57345__$1;
(statearr_57358_58385[(2)] = inst_57339);

(statearr_57358_58385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57346 === (10))){
var inst_57337 = (state_57345[(2)]);
var state_57345__$1 = state_57345;
var statearr_57359_58386 = state_57345__$1;
(statearr_57359_58386[(2)] = inst_57337);

(statearr_57359_58386[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57346 === (8))){
var inst_57326 = (state_57345[(9)]);
var inst_57325 = (state_57345[(7)]);
var inst_57324 = (state_57345[(8)]);
var inst_57315 = (state_57345[(10)]);
var inst_57329 = (function (){var cs = inst_57315;
var vec__57320 = inst_57324;
var v = inst_57325;
var c = inst_57326;
return (function (p1__57311_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__57311_SHARP_);
});
})();
var inst_57330 = cljs.core.filterv(inst_57329,inst_57315);
var inst_57315__$1 = inst_57330;
var state_57345__$1 = (function (){var statearr_57360 = state_57345;
(statearr_57360[(10)] = inst_57315__$1);

return statearr_57360;
})();
var statearr_57361_58387 = state_57345__$1;
(statearr_57361_58387[(2)] = null);

(statearr_57361_58387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56193__auto__ = null;
var cljs$core$async$state_machine__56193__auto____0 = (function (){
var statearr_57362 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57362[(0)] = cljs$core$async$state_machine__56193__auto__);

(statearr_57362[(1)] = (1));

return statearr_57362;
});
var cljs$core$async$state_machine__56193__auto____1 = (function (state_57345){
while(true){
var ret_value__56194__auto__ = (function (){try{while(true){
var result__56195__auto__ = switch__56192__auto__(state_57345);
if(cljs.core.keyword_identical_QMARK_(result__56195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56195__auto__;
}
break;
}
}catch (e57363){if((e57363 instanceof Object)){
var ex__56196__auto__ = e57363;
var statearr_57364_58388 = state_57345;
(statearr_57364_58388[(5)] = ex__56196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57363;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58389 = state_57345;
state_57345 = G__58389;
continue;
} else {
return ret_value__56194__auto__;
}
break;
}
});
cljs$core$async$state_machine__56193__auto__ = function(state_57345){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56193__auto____1.call(this,state_57345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56193__auto____0;
cljs$core$async$state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56193__auto____1;
return cljs$core$async$state_machine__56193__auto__;
})()
})();
var state__56257__auto__ = (function (){var statearr_57365 = f__56256__auto__();
(statearr_57365[(6)] = c__56255__auto___58352);

return statearr_57365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56257__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__57367 = arguments.length;
switch (G__57367) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56255__auto___58397 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56256__auto__ = (function (){var switch__56192__auto__ = (function (state_57391){
var state_val_57392 = (state_57391[(1)]);
if((state_val_57392 === (7))){
var inst_57373 = (state_57391[(7)]);
var inst_57373__$1 = (state_57391[(2)]);
var inst_57374 = (inst_57373__$1 == null);
var inst_57375 = cljs.core.not(inst_57374);
var state_57391__$1 = (function (){var statearr_57393 = state_57391;
(statearr_57393[(7)] = inst_57373__$1);

return statearr_57393;
})();
if(inst_57375){
var statearr_57394_58398 = state_57391__$1;
(statearr_57394_58398[(1)] = (8));

} else {
var statearr_57395_58399 = state_57391__$1;
(statearr_57395_58399[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57392 === (1))){
var inst_57368 = (0);
var state_57391__$1 = (function (){var statearr_57396 = state_57391;
(statearr_57396[(8)] = inst_57368);

return statearr_57396;
})();
var statearr_57397_58400 = state_57391__$1;
(statearr_57397_58400[(2)] = null);

(statearr_57397_58400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57392 === (4))){
var state_57391__$1 = state_57391;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57391__$1,(7),ch);
} else {
if((state_val_57392 === (6))){
var inst_57386 = (state_57391[(2)]);
var state_57391__$1 = state_57391;
var statearr_57398_58401 = state_57391__$1;
(statearr_57398_58401[(2)] = inst_57386);

(statearr_57398_58401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57392 === (3))){
var inst_57388 = (state_57391[(2)]);
var inst_57389 = cljs.core.async.close_BANG_(out);
var state_57391__$1 = (function (){var statearr_57399 = state_57391;
(statearr_57399[(9)] = inst_57388);

return statearr_57399;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57391__$1,inst_57389);
} else {
if((state_val_57392 === (2))){
var inst_57368 = (state_57391[(8)]);
var inst_57370 = (inst_57368 < n);
var state_57391__$1 = state_57391;
if(cljs.core.truth_(inst_57370)){
var statearr_57400_58402 = state_57391__$1;
(statearr_57400_58402[(1)] = (4));

} else {
var statearr_57401_58403 = state_57391__$1;
(statearr_57401_58403[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57392 === (11))){
var inst_57368 = (state_57391[(8)]);
var inst_57378 = (state_57391[(2)]);
var inst_57379 = (inst_57368 + (1));
var inst_57368__$1 = inst_57379;
var state_57391__$1 = (function (){var statearr_57402 = state_57391;
(statearr_57402[(10)] = inst_57378);

(statearr_57402[(8)] = inst_57368__$1);

return statearr_57402;
})();
var statearr_57403_58404 = state_57391__$1;
(statearr_57403_58404[(2)] = null);

(statearr_57403_58404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57392 === (9))){
var state_57391__$1 = state_57391;
var statearr_57404_58405 = state_57391__$1;
(statearr_57404_58405[(2)] = null);

(statearr_57404_58405[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57392 === (5))){
var state_57391__$1 = state_57391;
var statearr_57405_58406 = state_57391__$1;
(statearr_57405_58406[(2)] = null);

(statearr_57405_58406[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57392 === (10))){
var inst_57383 = (state_57391[(2)]);
var state_57391__$1 = state_57391;
var statearr_57406_58407 = state_57391__$1;
(statearr_57406_58407[(2)] = inst_57383);

(statearr_57406_58407[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57392 === (8))){
var inst_57373 = (state_57391[(7)]);
var state_57391__$1 = state_57391;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57391__$1,(11),out,inst_57373);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56193__auto__ = null;
var cljs$core$async$state_machine__56193__auto____0 = (function (){
var statearr_57407 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57407[(0)] = cljs$core$async$state_machine__56193__auto__);

(statearr_57407[(1)] = (1));

return statearr_57407;
});
var cljs$core$async$state_machine__56193__auto____1 = (function (state_57391){
while(true){
var ret_value__56194__auto__ = (function (){try{while(true){
var result__56195__auto__ = switch__56192__auto__(state_57391);
if(cljs.core.keyword_identical_QMARK_(result__56195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56195__auto__;
}
break;
}
}catch (e57408){if((e57408 instanceof Object)){
var ex__56196__auto__ = e57408;
var statearr_57409_58408 = state_57391;
(statearr_57409_58408[(5)] = ex__56196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57408;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58409 = state_57391;
state_57391 = G__58409;
continue;
} else {
return ret_value__56194__auto__;
}
break;
}
});
cljs$core$async$state_machine__56193__auto__ = function(state_57391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56193__auto____1.call(this,state_57391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56193__auto____0;
cljs$core$async$state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56193__auto____1;
return cljs$core$async$state_machine__56193__auto__;
})()
})();
var state__56257__auto__ = (function (){var statearr_57410 = f__56256__auto__();
(statearr_57410[(6)] = c__56255__auto___58397);

return statearr_57410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56257__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57412 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57412 = (function (f,ch,meta57413){
this.f = f;
this.ch = ch;
this.meta57413 = meta57413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57414,meta57413__$1){
var self__ = this;
var _57414__$1 = this;
return (new cljs.core.async.t_cljs$core$async57412(self__.f,self__.ch,meta57413__$1));
}));

(cljs.core.async.t_cljs$core$async57412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57414){
var self__ = this;
var _57414__$1 = this;
return self__.meta57413;
}));

(cljs.core.async.t_cljs$core$async57412.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57412.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57412.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57412.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57412.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57415 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57415 = (function (f,ch,meta57413,_,fn1,meta57416){
this.f = f;
this.ch = ch;
this.meta57413 = meta57413;
this._ = _;
this.fn1 = fn1;
this.meta57416 = meta57416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57417,meta57416__$1){
var self__ = this;
var _57417__$1 = this;
return (new cljs.core.async.t_cljs$core$async57415(self__.f,self__.ch,self__.meta57413,self__._,self__.fn1,meta57416__$1));
}));

(cljs.core.async.t_cljs$core$async57415.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57417){
var self__ = this;
var _57417__$1 = this;
return self__.meta57416;
}));

(cljs.core.async.t_cljs$core$async57415.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57415.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async57415.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async57415.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__57411_SHARP_){
var G__57418 = (((p1__57411_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__57411_SHARP_) : self__.f.call(null,p1__57411_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__57418) : f1.call(null,G__57418));
});
}));

(cljs.core.async.t_cljs$core$async57415.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57413","meta57413",1798359829,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async57412","cljs.core.async/t_cljs$core$async57412",1086967040,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta57416","meta57416",-873169090,null)], null);
}));

(cljs.core.async.t_cljs$core$async57415.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57415.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57415");

(cljs.core.async.t_cljs$core$async57415.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async57415");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57415.
 */
cljs.core.async.__GT_t_cljs$core$async57415 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async57415(f__$1,ch__$1,meta57413__$1,___$2,fn1__$1,meta57416){
return (new cljs.core.async.t_cljs$core$async57415(f__$1,ch__$1,meta57413__$1,___$2,fn1__$1,meta57416));
});

}

return (new cljs.core.async.t_cljs$core$async57415(self__.f,self__.ch,self__.meta57413,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__57419 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__57419) : self__.f.call(null,G__57419));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async57412.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57412.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async57412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57413","meta57413",1798359829,null)], null);
}));

(cljs.core.async.t_cljs$core$async57412.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57412.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57412");

(cljs.core.async.t_cljs$core$async57412.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async57412");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57412.
 */
cljs.core.async.__GT_t_cljs$core$async57412 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async57412(f__$1,ch__$1,meta57413){
return (new cljs.core.async.t_cljs$core$async57412(f__$1,ch__$1,meta57413));
});

}

return (new cljs.core.async.t_cljs$core$async57412(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57420 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57420 = (function (f,ch,meta57421){
this.f = f;
this.ch = ch;
this.meta57421 = meta57421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57422,meta57421__$1){
var self__ = this;
var _57422__$1 = this;
return (new cljs.core.async.t_cljs$core$async57420(self__.f,self__.ch,meta57421__$1));
}));

(cljs.core.async.t_cljs$core$async57420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57422){
var self__ = this;
var _57422__$1 = this;
return self__.meta57421;
}));

(cljs.core.async.t_cljs$core$async57420.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57420.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57420.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57420.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async57420.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57420.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async57420.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57421","meta57421",-1727130899,null)], null);
}));

(cljs.core.async.t_cljs$core$async57420.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57420");

(cljs.core.async.t_cljs$core$async57420.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async57420");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57420.
 */
cljs.core.async.__GT_t_cljs$core$async57420 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async57420(f__$1,ch__$1,meta57421){
return (new cljs.core.async.t_cljs$core$async57420(f__$1,ch__$1,meta57421));
});

}

return (new cljs.core.async.t_cljs$core$async57420(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57423 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57423 = (function (p,ch,meta57424){
this.p = p;
this.ch = ch;
this.meta57424 = meta57424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57425,meta57424__$1){
var self__ = this;
var _57425__$1 = this;
return (new cljs.core.async.t_cljs$core$async57423(self__.p,self__.ch,meta57424__$1));
}));

(cljs.core.async.t_cljs$core$async57423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57425){
var self__ = this;
var _57425__$1 = this;
return self__.meta57424;
}));

(cljs.core.async.t_cljs$core$async57423.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57423.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57423.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57423.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57423.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async57423.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57423.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async57423.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57424","meta57424",1959929770,null)], null);
}));

(cljs.core.async.t_cljs$core$async57423.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57423");

(cljs.core.async.t_cljs$core$async57423.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async57423");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57423.
 */
cljs.core.async.__GT_t_cljs$core$async57423 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async57423(p__$1,ch__$1,meta57424){
return (new cljs.core.async.t_cljs$core$async57423(p__$1,ch__$1,meta57424));
});

}

return (new cljs.core.async.t_cljs$core$async57423(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__57427 = arguments.length;
switch (G__57427) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56255__auto___58431 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56256__auto__ = (function (){var switch__56192__auto__ = (function (state_57448){
var state_val_57449 = (state_57448[(1)]);
if((state_val_57449 === (7))){
var inst_57444 = (state_57448[(2)]);
var state_57448__$1 = state_57448;
var statearr_57450_58432 = state_57448__$1;
(statearr_57450_58432[(2)] = inst_57444);

(statearr_57450_58432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57449 === (1))){
var state_57448__$1 = state_57448;
var statearr_57451_58433 = state_57448__$1;
(statearr_57451_58433[(2)] = null);

(statearr_57451_58433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57449 === (4))){
var inst_57430 = (state_57448[(7)]);
var inst_57430__$1 = (state_57448[(2)]);
var inst_57431 = (inst_57430__$1 == null);
var state_57448__$1 = (function (){var statearr_57452 = state_57448;
(statearr_57452[(7)] = inst_57430__$1);

return statearr_57452;
})();
if(cljs.core.truth_(inst_57431)){
var statearr_57453_58434 = state_57448__$1;
(statearr_57453_58434[(1)] = (5));

} else {
var statearr_57454_58435 = state_57448__$1;
(statearr_57454_58435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57449 === (6))){
var inst_57430 = (state_57448[(7)]);
var inst_57435 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_57430) : p.call(null,inst_57430));
var state_57448__$1 = state_57448;
if(cljs.core.truth_(inst_57435)){
var statearr_57455_58436 = state_57448__$1;
(statearr_57455_58436[(1)] = (8));

} else {
var statearr_57456_58437 = state_57448__$1;
(statearr_57456_58437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57449 === (3))){
var inst_57446 = (state_57448[(2)]);
var state_57448__$1 = state_57448;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57448__$1,inst_57446);
} else {
if((state_val_57449 === (2))){
var state_57448__$1 = state_57448;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57448__$1,(4),ch);
} else {
if((state_val_57449 === (11))){
var inst_57438 = (state_57448[(2)]);
var state_57448__$1 = state_57448;
var statearr_57457_58438 = state_57448__$1;
(statearr_57457_58438[(2)] = inst_57438);

(statearr_57457_58438[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57449 === (9))){
var state_57448__$1 = state_57448;
var statearr_57458_58440 = state_57448__$1;
(statearr_57458_58440[(2)] = null);

(statearr_57458_58440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57449 === (5))){
var inst_57433 = cljs.core.async.close_BANG_(out);
var state_57448__$1 = state_57448;
var statearr_57459_58441 = state_57448__$1;
(statearr_57459_58441[(2)] = inst_57433);

(statearr_57459_58441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57449 === (10))){
var inst_57441 = (state_57448[(2)]);
var state_57448__$1 = (function (){var statearr_57460 = state_57448;
(statearr_57460[(8)] = inst_57441);

return statearr_57460;
})();
var statearr_57461_58443 = state_57448__$1;
(statearr_57461_58443[(2)] = null);

(statearr_57461_58443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57449 === (8))){
var inst_57430 = (state_57448[(7)]);
var state_57448__$1 = state_57448;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57448__$1,(11),out,inst_57430);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56193__auto__ = null;
var cljs$core$async$state_machine__56193__auto____0 = (function (){
var statearr_57462 = [null,null,null,null,null,null,null,null,null];
(statearr_57462[(0)] = cljs$core$async$state_machine__56193__auto__);

(statearr_57462[(1)] = (1));

return statearr_57462;
});
var cljs$core$async$state_machine__56193__auto____1 = (function (state_57448){
while(true){
var ret_value__56194__auto__ = (function (){try{while(true){
var result__56195__auto__ = switch__56192__auto__(state_57448);
if(cljs.core.keyword_identical_QMARK_(result__56195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56195__auto__;
}
break;
}
}catch (e57463){if((e57463 instanceof Object)){
var ex__56196__auto__ = e57463;
var statearr_57464_58444 = state_57448;
(statearr_57464_58444[(5)] = ex__56196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57463;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58445 = state_57448;
state_57448 = G__58445;
continue;
} else {
return ret_value__56194__auto__;
}
break;
}
});
cljs$core$async$state_machine__56193__auto__ = function(state_57448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56193__auto____1.call(this,state_57448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56193__auto____0;
cljs$core$async$state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56193__auto____1;
return cljs$core$async$state_machine__56193__auto__;
})()
})();
var state__56257__auto__ = (function (){var statearr_57465 = f__56256__auto__();
(statearr_57465[(6)] = c__56255__auto___58431);

return statearr_57465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56257__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__57467 = arguments.length;
switch (G__57467) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__56255__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56256__auto__ = (function (){var switch__56192__auto__ = (function (state_57529){
var state_val_57530 = (state_57529[(1)]);
if((state_val_57530 === (7))){
var inst_57525 = (state_57529[(2)]);
var state_57529__$1 = state_57529;
var statearr_57531_58456 = state_57529__$1;
(statearr_57531_58456[(2)] = inst_57525);

(statearr_57531_58456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57530 === (20))){
var inst_57495 = (state_57529[(7)]);
var inst_57506 = (state_57529[(2)]);
var inst_57507 = cljs.core.next(inst_57495);
var inst_57481 = inst_57507;
var inst_57482 = null;
var inst_57483 = (0);
var inst_57484 = (0);
var state_57529__$1 = (function (){var statearr_57532 = state_57529;
(statearr_57532[(8)] = inst_57506);

(statearr_57532[(9)] = inst_57481);

(statearr_57532[(10)] = inst_57484);

(statearr_57532[(11)] = inst_57482);

(statearr_57532[(12)] = inst_57483);

return statearr_57532;
})();
var statearr_57533_58457 = state_57529__$1;
(statearr_57533_58457[(2)] = null);

(statearr_57533_58457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57530 === (1))){
var state_57529__$1 = state_57529;
var statearr_57534_58458 = state_57529__$1;
(statearr_57534_58458[(2)] = null);

(statearr_57534_58458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57530 === (4))){
var inst_57470 = (state_57529[(13)]);
var inst_57470__$1 = (state_57529[(2)]);
var inst_57471 = (inst_57470__$1 == null);
var state_57529__$1 = (function (){var statearr_57535 = state_57529;
(statearr_57535[(13)] = inst_57470__$1);

return statearr_57535;
})();
if(cljs.core.truth_(inst_57471)){
var statearr_57536_58459 = state_57529__$1;
(statearr_57536_58459[(1)] = (5));

} else {
var statearr_57537_58460 = state_57529__$1;
(statearr_57537_58460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57530 === (15))){
var state_57529__$1 = state_57529;
var statearr_57541_58461 = state_57529__$1;
(statearr_57541_58461[(2)] = null);

(statearr_57541_58461[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57530 === (21))){
var state_57529__$1 = state_57529;
var statearr_57542_58462 = state_57529__$1;
(statearr_57542_58462[(2)] = null);

(statearr_57542_58462[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57530 === (13))){
var inst_57481 = (state_57529[(9)]);
var inst_57484 = (state_57529[(10)]);
var inst_57482 = (state_57529[(11)]);
var inst_57483 = (state_57529[(12)]);
var inst_57491 = (state_57529[(2)]);
var inst_57492 = (inst_57484 + (1));
var tmp57538 = inst_57481;
var tmp57539 = inst_57482;
var tmp57540 = inst_57483;
var inst_57481__$1 = tmp57538;
var inst_57482__$1 = tmp57539;
var inst_57483__$1 = tmp57540;
var inst_57484__$1 = inst_57492;
var state_57529__$1 = (function (){var statearr_57543 = state_57529;
(statearr_57543[(9)] = inst_57481__$1);

(statearr_57543[(10)] = inst_57484__$1);

(statearr_57543[(14)] = inst_57491);

(statearr_57543[(11)] = inst_57482__$1);

(statearr_57543[(12)] = inst_57483__$1);

return statearr_57543;
})();
var statearr_57544_58468 = state_57529__$1;
(statearr_57544_58468[(2)] = null);

(statearr_57544_58468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57530 === (22))){
var state_57529__$1 = state_57529;
var statearr_57545_58469 = state_57529__$1;
(statearr_57545_58469[(2)] = null);

(statearr_57545_58469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57530 === (6))){
var inst_57470 = (state_57529[(13)]);
var inst_57479 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_57470) : f.call(null,inst_57470));
var inst_57480 = cljs.core.seq(inst_57479);
var inst_57481 = inst_57480;
var inst_57482 = null;
var inst_57483 = (0);
var inst_57484 = (0);
var state_57529__$1 = (function (){var statearr_57546 = state_57529;
(statearr_57546[(9)] = inst_57481);

(statearr_57546[(10)] = inst_57484);

(statearr_57546[(11)] = inst_57482);

(statearr_57546[(12)] = inst_57483);

return statearr_57546;
})();
var statearr_57547_58470 = state_57529__$1;
(statearr_57547_58470[(2)] = null);

(statearr_57547_58470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57530 === (17))){
var inst_57495 = (state_57529[(7)]);
var inst_57499 = cljs.core.chunk_first(inst_57495);
var inst_57500 = cljs.core.chunk_rest(inst_57495);
var inst_57501 = cljs.core.count(inst_57499);
var inst_57481 = inst_57500;
var inst_57482 = inst_57499;
var inst_57483 = inst_57501;
var inst_57484 = (0);
var state_57529__$1 = (function (){var statearr_57548 = state_57529;
(statearr_57548[(9)] = inst_57481);

(statearr_57548[(10)] = inst_57484);

(statearr_57548[(11)] = inst_57482);

(statearr_57548[(12)] = inst_57483);

return statearr_57548;
})();
var statearr_57549_58471 = state_57529__$1;
(statearr_57549_58471[(2)] = null);

(statearr_57549_58471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57530 === (3))){
var inst_57527 = (state_57529[(2)]);
var state_57529__$1 = state_57529;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57529__$1,inst_57527);
} else {
if((state_val_57530 === (12))){
var inst_57515 = (state_57529[(2)]);
var state_57529__$1 = state_57529;
var statearr_57550_58472 = state_57529__$1;
(statearr_57550_58472[(2)] = inst_57515);

(statearr_57550_58472[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57530 === (2))){
var state_57529__$1 = state_57529;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57529__$1,(4),in$);
} else {
if((state_val_57530 === (23))){
var inst_57523 = (state_57529[(2)]);
var state_57529__$1 = state_57529;
var statearr_57551_58473 = state_57529__$1;
(statearr_57551_58473[(2)] = inst_57523);

(statearr_57551_58473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57530 === (19))){
var inst_57510 = (state_57529[(2)]);
var state_57529__$1 = state_57529;
var statearr_57552_58474 = state_57529__$1;
(statearr_57552_58474[(2)] = inst_57510);

(statearr_57552_58474[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57530 === (11))){
var inst_57481 = (state_57529[(9)]);
var inst_57495 = (state_57529[(7)]);
var inst_57495__$1 = cljs.core.seq(inst_57481);
var state_57529__$1 = (function (){var statearr_57553 = state_57529;
(statearr_57553[(7)] = inst_57495__$1);

return statearr_57553;
})();
if(inst_57495__$1){
var statearr_57554_58475 = state_57529__$1;
(statearr_57554_58475[(1)] = (14));

} else {
var statearr_57555_58476 = state_57529__$1;
(statearr_57555_58476[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57530 === (9))){
var inst_57517 = (state_57529[(2)]);
var inst_57518 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_57529__$1 = (function (){var statearr_57556 = state_57529;
(statearr_57556[(15)] = inst_57517);

return statearr_57556;
})();
if(cljs.core.truth_(inst_57518)){
var statearr_57557_58477 = state_57529__$1;
(statearr_57557_58477[(1)] = (21));

} else {
var statearr_57558_58478 = state_57529__$1;
(statearr_57558_58478[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57530 === (5))){
var inst_57473 = cljs.core.async.close_BANG_(out);
var state_57529__$1 = state_57529;
var statearr_57559_58479 = state_57529__$1;
(statearr_57559_58479[(2)] = inst_57473);

(statearr_57559_58479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57530 === (14))){
var inst_57495 = (state_57529[(7)]);
var inst_57497 = cljs.core.chunked_seq_QMARK_(inst_57495);
var state_57529__$1 = state_57529;
if(inst_57497){
var statearr_57560_58480 = state_57529__$1;
(statearr_57560_58480[(1)] = (17));

} else {
var statearr_57561_58481 = state_57529__$1;
(statearr_57561_58481[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57530 === (16))){
var inst_57513 = (state_57529[(2)]);
var state_57529__$1 = state_57529;
var statearr_57562_58482 = state_57529__$1;
(statearr_57562_58482[(2)] = inst_57513);

(statearr_57562_58482[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57530 === (10))){
var inst_57484 = (state_57529[(10)]);
var inst_57482 = (state_57529[(11)]);
var inst_57489 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_57482,inst_57484);
var state_57529__$1 = state_57529;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57529__$1,(13),out,inst_57489);
} else {
if((state_val_57530 === (18))){
var inst_57495 = (state_57529[(7)]);
var inst_57504 = cljs.core.first(inst_57495);
var state_57529__$1 = state_57529;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57529__$1,(20),out,inst_57504);
} else {
if((state_val_57530 === (8))){
var inst_57484 = (state_57529[(10)]);
var inst_57483 = (state_57529[(12)]);
var inst_57486 = (inst_57484 < inst_57483);
var inst_57487 = inst_57486;
var state_57529__$1 = state_57529;
if(cljs.core.truth_(inst_57487)){
var statearr_57563_58483 = state_57529__$1;
(statearr_57563_58483[(1)] = (10));

} else {
var statearr_57564_58484 = state_57529__$1;
(statearr_57564_58484[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__56193__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__56193__auto____0 = (function (){
var statearr_57565 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57565[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__56193__auto__);

(statearr_57565[(1)] = (1));

return statearr_57565;
});
var cljs$core$async$mapcat_STAR__$_state_machine__56193__auto____1 = (function (state_57529){
while(true){
var ret_value__56194__auto__ = (function (){try{while(true){
var result__56195__auto__ = switch__56192__auto__(state_57529);
if(cljs.core.keyword_identical_QMARK_(result__56195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56195__auto__;
}
break;
}
}catch (e57566){if((e57566 instanceof Object)){
var ex__56196__auto__ = e57566;
var statearr_57567_58490 = state_57529;
(statearr_57567_58490[(5)] = ex__56196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57566;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58491 = state_57529;
state_57529 = G__58491;
continue;
} else {
return ret_value__56194__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__56193__auto__ = function(state_57529){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__56193__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__56193__auto____1.call(this,state_57529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__56193__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__56193__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__56193__auto__;
})()
})();
var state__56257__auto__ = (function (){var statearr_57568 = f__56256__auto__();
(statearr_57568[(6)] = c__56255__auto__);

return statearr_57568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56257__auto__);
}));

return c__56255__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__57570 = arguments.length;
switch (G__57570) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__57572 = arguments.length;
switch (G__57572) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__57574 = arguments.length;
switch (G__57574) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56255__auto___58496 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56256__auto__ = (function (){var switch__56192__auto__ = (function (state_57598){
var state_val_57599 = (state_57598[(1)]);
if((state_val_57599 === (7))){
var inst_57593 = (state_57598[(2)]);
var state_57598__$1 = state_57598;
var statearr_57600_58497 = state_57598__$1;
(statearr_57600_58497[(2)] = inst_57593);

(statearr_57600_58497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57599 === (1))){
var inst_57575 = null;
var state_57598__$1 = (function (){var statearr_57601 = state_57598;
(statearr_57601[(7)] = inst_57575);

return statearr_57601;
})();
var statearr_57602_58498 = state_57598__$1;
(statearr_57602_58498[(2)] = null);

(statearr_57602_58498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57599 === (4))){
var inst_57578 = (state_57598[(8)]);
var inst_57578__$1 = (state_57598[(2)]);
var inst_57579 = (inst_57578__$1 == null);
var inst_57580 = cljs.core.not(inst_57579);
var state_57598__$1 = (function (){var statearr_57603 = state_57598;
(statearr_57603[(8)] = inst_57578__$1);

return statearr_57603;
})();
if(inst_57580){
var statearr_57604_58520 = state_57598__$1;
(statearr_57604_58520[(1)] = (5));

} else {
var statearr_57605_58525 = state_57598__$1;
(statearr_57605_58525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57599 === (6))){
var state_57598__$1 = state_57598;
var statearr_57606_58526 = state_57598__$1;
(statearr_57606_58526[(2)] = null);

(statearr_57606_58526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57599 === (3))){
var inst_57595 = (state_57598[(2)]);
var inst_57596 = cljs.core.async.close_BANG_(out);
var state_57598__$1 = (function (){var statearr_57607 = state_57598;
(statearr_57607[(9)] = inst_57595);

return statearr_57607;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57598__$1,inst_57596);
} else {
if((state_val_57599 === (2))){
var state_57598__$1 = state_57598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57598__$1,(4),ch);
} else {
if((state_val_57599 === (11))){
var inst_57578 = (state_57598[(8)]);
var inst_57587 = (state_57598[(2)]);
var inst_57575 = inst_57578;
var state_57598__$1 = (function (){var statearr_57608 = state_57598;
(statearr_57608[(7)] = inst_57575);

(statearr_57608[(10)] = inst_57587);

return statearr_57608;
})();
var statearr_57609_58535 = state_57598__$1;
(statearr_57609_58535[(2)] = null);

(statearr_57609_58535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57599 === (9))){
var inst_57578 = (state_57598[(8)]);
var state_57598__$1 = state_57598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57598__$1,(11),out,inst_57578);
} else {
if((state_val_57599 === (5))){
var inst_57575 = (state_57598[(7)]);
var inst_57578 = (state_57598[(8)]);
var inst_57582 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57578,inst_57575);
var state_57598__$1 = state_57598;
if(inst_57582){
var statearr_57611_58543 = state_57598__$1;
(statearr_57611_58543[(1)] = (8));

} else {
var statearr_57612_58544 = state_57598__$1;
(statearr_57612_58544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57599 === (10))){
var inst_57590 = (state_57598[(2)]);
var state_57598__$1 = state_57598;
var statearr_57613_58545 = state_57598__$1;
(statearr_57613_58545[(2)] = inst_57590);

(statearr_57613_58545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57599 === (8))){
var inst_57575 = (state_57598[(7)]);
var tmp57610 = inst_57575;
var inst_57575__$1 = tmp57610;
var state_57598__$1 = (function (){var statearr_57614 = state_57598;
(statearr_57614[(7)] = inst_57575__$1);

return statearr_57614;
})();
var statearr_57615_58550 = state_57598__$1;
(statearr_57615_58550[(2)] = null);

(statearr_57615_58550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56193__auto__ = null;
var cljs$core$async$state_machine__56193__auto____0 = (function (){
var statearr_57616 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57616[(0)] = cljs$core$async$state_machine__56193__auto__);

(statearr_57616[(1)] = (1));

return statearr_57616;
});
var cljs$core$async$state_machine__56193__auto____1 = (function (state_57598){
while(true){
var ret_value__56194__auto__ = (function (){try{while(true){
var result__56195__auto__ = switch__56192__auto__(state_57598);
if(cljs.core.keyword_identical_QMARK_(result__56195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56195__auto__;
}
break;
}
}catch (e57617){if((e57617 instanceof Object)){
var ex__56196__auto__ = e57617;
var statearr_57618_58562 = state_57598;
(statearr_57618_58562[(5)] = ex__56196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57617;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58563 = state_57598;
state_57598 = G__58563;
continue;
} else {
return ret_value__56194__auto__;
}
break;
}
});
cljs$core$async$state_machine__56193__auto__ = function(state_57598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56193__auto____1.call(this,state_57598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56193__auto____0;
cljs$core$async$state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56193__auto____1;
return cljs$core$async$state_machine__56193__auto__;
})()
})();
var state__56257__auto__ = (function (){var statearr_57619 = f__56256__auto__();
(statearr_57619[(6)] = c__56255__auto___58496);

return statearr_57619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56257__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__57621 = arguments.length;
switch (G__57621) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56255__auto___58565 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56256__auto__ = (function (){var switch__56192__auto__ = (function (state_57659){
var state_val_57660 = (state_57659[(1)]);
if((state_val_57660 === (7))){
var inst_57655 = (state_57659[(2)]);
var state_57659__$1 = state_57659;
var statearr_57661_58566 = state_57659__$1;
(statearr_57661_58566[(2)] = inst_57655);

(statearr_57661_58566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57660 === (1))){
var inst_57622 = (new Array(n));
var inst_57623 = inst_57622;
var inst_57624 = (0);
var state_57659__$1 = (function (){var statearr_57662 = state_57659;
(statearr_57662[(7)] = inst_57624);

(statearr_57662[(8)] = inst_57623);

return statearr_57662;
})();
var statearr_57663_58568 = state_57659__$1;
(statearr_57663_58568[(2)] = null);

(statearr_57663_58568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57660 === (4))){
var inst_57627 = (state_57659[(9)]);
var inst_57627__$1 = (state_57659[(2)]);
var inst_57628 = (inst_57627__$1 == null);
var inst_57629 = cljs.core.not(inst_57628);
var state_57659__$1 = (function (){var statearr_57664 = state_57659;
(statearr_57664[(9)] = inst_57627__$1);

return statearr_57664;
})();
if(inst_57629){
var statearr_57665_58569 = state_57659__$1;
(statearr_57665_58569[(1)] = (5));

} else {
var statearr_57666_58570 = state_57659__$1;
(statearr_57666_58570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57660 === (15))){
var inst_57649 = (state_57659[(2)]);
var state_57659__$1 = state_57659;
var statearr_57667_58571 = state_57659__$1;
(statearr_57667_58571[(2)] = inst_57649);

(statearr_57667_58571[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57660 === (13))){
var state_57659__$1 = state_57659;
var statearr_57668_58572 = state_57659__$1;
(statearr_57668_58572[(2)] = null);

(statearr_57668_58572[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57660 === (6))){
var inst_57624 = (state_57659[(7)]);
var inst_57645 = (inst_57624 > (0));
var state_57659__$1 = state_57659;
if(cljs.core.truth_(inst_57645)){
var statearr_57669_58573 = state_57659__$1;
(statearr_57669_58573[(1)] = (12));

} else {
var statearr_57670_58574 = state_57659__$1;
(statearr_57670_58574[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57660 === (3))){
var inst_57657 = (state_57659[(2)]);
var state_57659__$1 = state_57659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57659__$1,inst_57657);
} else {
if((state_val_57660 === (12))){
var inst_57623 = (state_57659[(8)]);
var inst_57647 = cljs.core.vec(inst_57623);
var state_57659__$1 = state_57659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57659__$1,(15),out,inst_57647);
} else {
if((state_val_57660 === (2))){
var state_57659__$1 = state_57659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57659__$1,(4),ch);
} else {
if((state_val_57660 === (11))){
var inst_57639 = (state_57659[(2)]);
var inst_57640 = (new Array(n));
var inst_57623 = inst_57640;
var inst_57624 = (0);
var state_57659__$1 = (function (){var statearr_57671 = state_57659;
(statearr_57671[(7)] = inst_57624);

(statearr_57671[(8)] = inst_57623);

(statearr_57671[(10)] = inst_57639);

return statearr_57671;
})();
var statearr_57672_58614 = state_57659__$1;
(statearr_57672_58614[(2)] = null);

(statearr_57672_58614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57660 === (9))){
var inst_57623 = (state_57659[(8)]);
var inst_57637 = cljs.core.vec(inst_57623);
var state_57659__$1 = state_57659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57659__$1,(11),out,inst_57637);
} else {
if((state_val_57660 === (5))){
var inst_57632 = (state_57659[(11)]);
var inst_57624 = (state_57659[(7)]);
var inst_57627 = (state_57659[(9)]);
var inst_57623 = (state_57659[(8)]);
var inst_57631 = (inst_57623[inst_57624] = inst_57627);
var inst_57632__$1 = (inst_57624 + (1));
var inst_57633 = (inst_57632__$1 < n);
var state_57659__$1 = (function (){var statearr_57673 = state_57659;
(statearr_57673[(11)] = inst_57632__$1);

(statearr_57673[(12)] = inst_57631);

return statearr_57673;
})();
if(cljs.core.truth_(inst_57633)){
var statearr_57674_58629 = state_57659__$1;
(statearr_57674_58629[(1)] = (8));

} else {
var statearr_57675_58630 = state_57659__$1;
(statearr_57675_58630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57660 === (14))){
var inst_57652 = (state_57659[(2)]);
var inst_57653 = cljs.core.async.close_BANG_(out);
var state_57659__$1 = (function (){var statearr_57677 = state_57659;
(statearr_57677[(13)] = inst_57652);

return statearr_57677;
})();
var statearr_57678_58639 = state_57659__$1;
(statearr_57678_58639[(2)] = inst_57653);

(statearr_57678_58639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57660 === (10))){
var inst_57643 = (state_57659[(2)]);
var state_57659__$1 = state_57659;
var statearr_57679_58643 = state_57659__$1;
(statearr_57679_58643[(2)] = inst_57643);

(statearr_57679_58643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57660 === (8))){
var inst_57632 = (state_57659[(11)]);
var inst_57623 = (state_57659[(8)]);
var tmp57676 = inst_57623;
var inst_57623__$1 = tmp57676;
var inst_57624 = inst_57632;
var state_57659__$1 = (function (){var statearr_57680 = state_57659;
(statearr_57680[(7)] = inst_57624);

(statearr_57680[(8)] = inst_57623__$1);

return statearr_57680;
})();
var statearr_57681_58653 = state_57659__$1;
(statearr_57681_58653[(2)] = null);

(statearr_57681_58653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56193__auto__ = null;
var cljs$core$async$state_machine__56193__auto____0 = (function (){
var statearr_57682 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57682[(0)] = cljs$core$async$state_machine__56193__auto__);

(statearr_57682[(1)] = (1));

return statearr_57682;
});
var cljs$core$async$state_machine__56193__auto____1 = (function (state_57659){
while(true){
var ret_value__56194__auto__ = (function (){try{while(true){
var result__56195__auto__ = switch__56192__auto__(state_57659);
if(cljs.core.keyword_identical_QMARK_(result__56195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56195__auto__;
}
break;
}
}catch (e57683){if((e57683 instanceof Object)){
var ex__56196__auto__ = e57683;
var statearr_57684_58662 = state_57659;
(statearr_57684_58662[(5)] = ex__56196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57683;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58663 = state_57659;
state_57659 = G__58663;
continue;
} else {
return ret_value__56194__auto__;
}
break;
}
});
cljs$core$async$state_machine__56193__auto__ = function(state_57659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56193__auto____1.call(this,state_57659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56193__auto____0;
cljs$core$async$state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56193__auto____1;
return cljs$core$async$state_machine__56193__auto__;
})()
})();
var state__56257__auto__ = (function (){var statearr_57685 = f__56256__auto__();
(statearr_57685[(6)] = c__56255__auto___58565);

return statearr_57685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56257__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__57687 = arguments.length;
switch (G__57687) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56255__auto___58677 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56256__auto__ = (function (){var switch__56192__auto__ = (function (state_57729){
var state_val_57730 = (state_57729[(1)]);
if((state_val_57730 === (7))){
var inst_57725 = (state_57729[(2)]);
var state_57729__$1 = state_57729;
var statearr_57731_58680 = state_57729__$1;
(statearr_57731_58680[(2)] = inst_57725);

(statearr_57731_58680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (1))){
var inst_57688 = [];
var inst_57689 = inst_57688;
var inst_57690 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_57729__$1 = (function (){var statearr_57732 = state_57729;
(statearr_57732[(7)] = inst_57689);

(statearr_57732[(8)] = inst_57690);

return statearr_57732;
})();
var statearr_57733_58701 = state_57729__$1;
(statearr_57733_58701[(2)] = null);

(statearr_57733_58701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (4))){
var inst_57693 = (state_57729[(9)]);
var inst_57693__$1 = (state_57729[(2)]);
var inst_57694 = (inst_57693__$1 == null);
var inst_57695 = cljs.core.not(inst_57694);
var state_57729__$1 = (function (){var statearr_57734 = state_57729;
(statearr_57734[(9)] = inst_57693__$1);

return statearr_57734;
})();
if(inst_57695){
var statearr_57735_58707 = state_57729__$1;
(statearr_57735_58707[(1)] = (5));

} else {
var statearr_57736_58708 = state_57729__$1;
(statearr_57736_58708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (15))){
var inst_57719 = (state_57729[(2)]);
var state_57729__$1 = state_57729;
var statearr_57737_58713 = state_57729__$1;
(statearr_57737_58713[(2)] = inst_57719);

(statearr_57737_58713[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (13))){
var state_57729__$1 = state_57729;
var statearr_57738_58717 = state_57729__$1;
(statearr_57738_58717[(2)] = null);

(statearr_57738_58717[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (6))){
var inst_57689 = (state_57729[(7)]);
var inst_57714 = inst_57689.length;
var inst_57715 = (inst_57714 > (0));
var state_57729__$1 = state_57729;
if(cljs.core.truth_(inst_57715)){
var statearr_57739_58724 = state_57729__$1;
(statearr_57739_58724[(1)] = (12));

} else {
var statearr_57740_58726 = state_57729__$1;
(statearr_57740_58726[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (3))){
var inst_57727 = (state_57729[(2)]);
var state_57729__$1 = state_57729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57729__$1,inst_57727);
} else {
if((state_val_57730 === (12))){
var inst_57689 = (state_57729[(7)]);
var inst_57717 = cljs.core.vec(inst_57689);
var state_57729__$1 = state_57729;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57729__$1,(15),out,inst_57717);
} else {
if((state_val_57730 === (2))){
var state_57729__$1 = state_57729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57729__$1,(4),ch);
} else {
if((state_val_57730 === (11))){
var inst_57697 = (state_57729[(10)]);
var inst_57693 = (state_57729[(9)]);
var inst_57707 = (state_57729[(2)]);
var inst_57708 = [];
var inst_57709 = inst_57708.push(inst_57693);
var inst_57689 = inst_57708;
var inst_57690 = inst_57697;
var state_57729__$1 = (function (){var statearr_57741 = state_57729;
(statearr_57741[(11)] = inst_57709);

(statearr_57741[(7)] = inst_57689);

(statearr_57741[(12)] = inst_57707);

(statearr_57741[(8)] = inst_57690);

return statearr_57741;
})();
var statearr_57742_58738 = state_57729__$1;
(statearr_57742_58738[(2)] = null);

(statearr_57742_58738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (9))){
var inst_57689 = (state_57729[(7)]);
var inst_57705 = cljs.core.vec(inst_57689);
var state_57729__$1 = state_57729;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57729__$1,(11),out,inst_57705);
} else {
if((state_val_57730 === (5))){
var inst_57697 = (state_57729[(10)]);
var inst_57693 = (state_57729[(9)]);
var inst_57690 = (state_57729[(8)]);
var inst_57697__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_57693) : f.call(null,inst_57693));
var inst_57698 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57697__$1,inst_57690);
var inst_57699 = cljs.core.keyword_identical_QMARK_(inst_57690,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_57700 = ((inst_57698) || (inst_57699));
var state_57729__$1 = (function (){var statearr_57743 = state_57729;
(statearr_57743[(10)] = inst_57697__$1);

return statearr_57743;
})();
if(cljs.core.truth_(inst_57700)){
var statearr_57744_58739 = state_57729__$1;
(statearr_57744_58739[(1)] = (8));

} else {
var statearr_57745_58740 = state_57729__$1;
(statearr_57745_58740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (14))){
var inst_57722 = (state_57729[(2)]);
var inst_57723 = cljs.core.async.close_BANG_(out);
var state_57729__$1 = (function (){var statearr_57747 = state_57729;
(statearr_57747[(13)] = inst_57722);

return statearr_57747;
})();
var statearr_57748_58742 = state_57729__$1;
(statearr_57748_58742[(2)] = inst_57723);

(statearr_57748_58742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (10))){
var inst_57712 = (state_57729[(2)]);
var state_57729__$1 = state_57729;
var statearr_57749_58743 = state_57729__$1;
(statearr_57749_58743[(2)] = inst_57712);

(statearr_57749_58743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (8))){
var inst_57697 = (state_57729[(10)]);
var inst_57689 = (state_57729[(7)]);
var inst_57693 = (state_57729[(9)]);
var inst_57702 = inst_57689.push(inst_57693);
var tmp57746 = inst_57689;
var inst_57689__$1 = tmp57746;
var inst_57690 = inst_57697;
var state_57729__$1 = (function (){var statearr_57750 = state_57729;
(statearr_57750[(14)] = inst_57702);

(statearr_57750[(7)] = inst_57689__$1);

(statearr_57750[(8)] = inst_57690);

return statearr_57750;
})();
var statearr_57751_58744 = state_57729__$1;
(statearr_57751_58744[(2)] = null);

(statearr_57751_58744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56193__auto__ = null;
var cljs$core$async$state_machine__56193__auto____0 = (function (){
var statearr_57752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57752[(0)] = cljs$core$async$state_machine__56193__auto__);

(statearr_57752[(1)] = (1));

return statearr_57752;
});
var cljs$core$async$state_machine__56193__auto____1 = (function (state_57729){
while(true){
var ret_value__56194__auto__ = (function (){try{while(true){
var result__56195__auto__ = switch__56192__auto__(state_57729);
if(cljs.core.keyword_identical_QMARK_(result__56195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56195__auto__;
}
break;
}
}catch (e57753){if((e57753 instanceof Object)){
var ex__56196__auto__ = e57753;
var statearr_57754_58758 = state_57729;
(statearr_57754_58758[(5)] = ex__56196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57753;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58759 = state_57729;
state_57729 = G__58759;
continue;
} else {
return ret_value__56194__auto__;
}
break;
}
});
cljs$core$async$state_machine__56193__auto__ = function(state_57729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56193__auto____1.call(this,state_57729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56193__auto____0;
cljs$core$async$state_machine__56193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56193__auto____1;
return cljs$core$async$state_machine__56193__auto__;
})()
})();
var state__56257__auto__ = (function (){var statearr_57755 = f__56256__auto__();
(statearr_57755[(6)] = c__56255__auto___58677);

return statearr_57755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56257__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
