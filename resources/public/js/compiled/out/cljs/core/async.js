// Compiled by ClojureScript 1.7.107 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async26308 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26308 = (function (fn_handler,f,meta26309){
this.fn_handler = fn_handler;
this.f = f;
this.meta26309 = meta26309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26310,meta26309__$1){
var self__ = this;
var _26310__$1 = this;
return (new cljs.core.async.t_cljs$core$async26308(self__.fn_handler,self__.f,meta26309__$1));
});

cljs.core.async.t_cljs$core$async26308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26310){
var self__ = this;
var _26310__$1 = this;
return self__.meta26309;
});

cljs.core.async.t_cljs$core$async26308.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26308.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26308.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta26309","meta26309",-191286366,null)], null);
});

cljs.core.async.t_cljs$core$async26308.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26308";

cljs.core.async.t_cljs$core$async26308.cljs$lang$ctorPrWriter = (function (this__17115__auto__,writer__17116__auto__,opt__17117__auto__){
return cljs.core._write.call(null,writer__17116__auto__,"cljs.core.async/t_cljs$core$async26308");
});

cljs.core.async.__GT_t_cljs$core$async26308 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async26308(fn_handler__$1,f__$1,meta26309){
return (new cljs.core.async.t_cljs$core$async26308(fn_handler__$1,f__$1,meta26309));
});

}

return (new cljs.core.async.t_cljs$core$async26308(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args26313 = [];
var len__17575__auto___26316 = arguments.length;
var i__17576__auto___26317 = (0);
while(true){
if((i__17576__auto___26317 < len__17575__auto___26316)){
args26313.push((arguments[i__17576__auto___26317]));

var G__26318 = (i__17576__auto___26317 + (1));
i__17576__auto___26317 = G__26318;
continue;
} else {
}
break;
}

var G__26315 = args26313.length;
switch (G__26315) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26313.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args26320 = [];
var len__17575__auto___26323 = arguments.length;
var i__17576__auto___26324 = (0);
while(true){
if((i__17576__auto___26324 < len__17575__auto___26323)){
args26320.push((arguments[i__17576__auto___26324]));

var G__26325 = (i__17576__auto___26324 + (1));
i__17576__auto___26324 = G__26325;
continue;
} else {
}
break;
}

var G__26322 = args26320.length;
switch (G__26322) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26320.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26327 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26327);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26327,ret){
return (function (){
return fn1.call(null,val_26327);
});})(val_26327,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args26328 = [];
var len__17575__auto___26331 = arguments.length;
var i__17576__auto___26332 = (0);
while(true){
if((i__17576__auto___26332 < len__17575__auto___26331)){
args26328.push((arguments[i__17576__auto___26332]));

var G__26333 = (i__17576__auto___26332 + (1));
i__17576__auto___26332 = G__26333;
continue;
} else {
}
break;
}

var G__26330 = args26328.length;
switch (G__26330) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26328.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17420__auto___26335 = n;
var x_26336 = (0);
while(true){
if((x_26336 < n__17420__auto___26335)){
(a[x_26336] = (0));

var G__26337 = (x_26336 + (1));
x_26336 = G__26337;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26338 = (i + (1));
i = G__26338;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26342 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26342 = (function (alt_flag,flag,meta26343){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26343 = meta26343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26344,meta26343__$1){
var self__ = this;
var _26344__$1 = this;
return (new cljs.core.async.t_cljs$core$async26342(self__.alt_flag,self__.flag,meta26343__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26342.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26344){
var self__ = this;
var _26344__$1 = this;
return self__.meta26343;
});})(flag))
;

cljs.core.async.t_cljs$core$async26342.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26342.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26342.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26342.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26343","meta26343",98192213,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26342.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26342";

cljs.core.async.t_cljs$core$async26342.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17115__auto__,writer__17116__auto__,opt__17117__auto__){
return cljs.core._write.call(null,writer__17116__auto__,"cljs.core.async/t_cljs$core$async26342");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async26342 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26342(alt_flag__$1,flag__$1,meta26343){
return (new cljs.core.async.t_cljs$core$async26342(alt_flag__$1,flag__$1,meta26343));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26342(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26348 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26348 = (function (alt_handler,flag,cb,meta26349){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26349 = meta26349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26350,meta26349__$1){
var self__ = this;
var _26350__$1 = this;
return (new cljs.core.async.t_cljs$core$async26348(self__.alt_handler,self__.flag,self__.cb,meta26349__$1));
});

cljs.core.async.t_cljs$core$async26348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26350){
var self__ = this;
var _26350__$1 = this;
return self__.meta26349;
});

cljs.core.async.t_cljs$core$async26348.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26348.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26348.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26348.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26349","meta26349",-226815518,null)], null);
});

cljs.core.async.t_cljs$core$async26348.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26348";

cljs.core.async.t_cljs$core$async26348.cljs$lang$ctorPrWriter = (function (this__17115__auto__,writer__17116__auto__,opt__17117__auto__){
return cljs.core._write.call(null,writer__17116__auto__,"cljs.core.async/t_cljs$core$async26348");
});

cljs.core.async.__GT_t_cljs$core$async26348 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26348(alt_handler__$1,flag__$1,cb__$1,meta26349){
return (new cljs.core.async.t_cljs$core$async26348(alt_handler__$1,flag__$1,cb__$1,meta26349));
});

}

return (new cljs.core.async.t_cljs$core$async26348(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26351_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26351_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26352_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26352_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16517__auto__ = wport;
if(cljs.core.truth_(or__16517__auto__)){
return or__16517__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26353 = (i + (1));
i = G__26353;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16517__auto__ = ret;
if(cljs.core.truth_(or__16517__auto__)){
return or__16517__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16505__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16505__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16505__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__17582__auto__ = [];
var len__17575__auto___26359 = arguments.length;
var i__17576__auto___26360 = (0);
while(true){
if((i__17576__auto___26360 < len__17575__auto___26359)){
args__17582__auto__.push((arguments[i__17576__auto___26360]));

var G__26361 = (i__17576__auto___26360 + (1));
i__17576__auto___26360 = G__26361;
continue;
} else {
}
break;
}

var argseq__17583__auto__ = ((((1) < args__17582__auto__.length))?(new cljs.core.IndexedSeq(args__17582__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17583__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26356){
var map__26357 = p__26356;
var map__26357__$1 = ((((!((map__26357 == null)))?((((map__26357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26357):map__26357);
var opts = map__26357__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26354){
var G__26355 = cljs.core.first.call(null,seq26354);
var seq26354__$1 = cljs.core.next.call(null,seq26354);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26355,seq26354__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args26362 = [];
var len__17575__auto___26412 = arguments.length;
var i__17576__auto___26413 = (0);
while(true){
if((i__17576__auto___26413 < len__17575__auto___26412)){
args26362.push((arguments[i__17576__auto___26413]));

var G__26414 = (i__17576__auto___26413 + (1));
i__17576__auto___26413 = G__26414;
continue;
} else {
}
break;
}

var G__26364 = args26362.length;
switch (G__26364) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26362.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20007__auto___26416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___26416){
return (function (){
var f__20008__auto__ = (function (){var switch__19942__auto__ = ((function (c__20007__auto___26416){
return (function (state_26388){
var state_val_26389 = (state_26388[(1)]);
if((state_val_26389 === (7))){
var inst_26384 = (state_26388[(2)]);
var state_26388__$1 = state_26388;
var statearr_26390_26417 = state_26388__$1;
(statearr_26390_26417[(2)] = inst_26384);

(statearr_26390_26417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26389 === (1))){
var state_26388__$1 = state_26388;
var statearr_26391_26418 = state_26388__$1;
(statearr_26391_26418[(2)] = null);

(statearr_26391_26418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26389 === (4))){
var inst_26367 = (state_26388[(7)]);
var inst_26367__$1 = (state_26388[(2)]);
var inst_26368 = (inst_26367__$1 == null);
var state_26388__$1 = (function (){var statearr_26392 = state_26388;
(statearr_26392[(7)] = inst_26367__$1);

return statearr_26392;
})();
if(cljs.core.truth_(inst_26368)){
var statearr_26393_26419 = state_26388__$1;
(statearr_26393_26419[(1)] = (5));

} else {
var statearr_26394_26420 = state_26388__$1;
(statearr_26394_26420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26389 === (13))){
var state_26388__$1 = state_26388;
var statearr_26395_26421 = state_26388__$1;
(statearr_26395_26421[(2)] = null);

(statearr_26395_26421[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26389 === (6))){
var inst_26367 = (state_26388[(7)]);
var state_26388__$1 = state_26388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26388__$1,(11),to,inst_26367);
} else {
if((state_val_26389 === (3))){
var inst_26386 = (state_26388[(2)]);
var state_26388__$1 = state_26388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26388__$1,inst_26386);
} else {
if((state_val_26389 === (12))){
var state_26388__$1 = state_26388;
var statearr_26396_26422 = state_26388__$1;
(statearr_26396_26422[(2)] = null);

(statearr_26396_26422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26389 === (2))){
var state_26388__$1 = state_26388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26388__$1,(4),from);
} else {
if((state_val_26389 === (11))){
var inst_26377 = (state_26388[(2)]);
var state_26388__$1 = state_26388;
if(cljs.core.truth_(inst_26377)){
var statearr_26397_26423 = state_26388__$1;
(statearr_26397_26423[(1)] = (12));

} else {
var statearr_26398_26424 = state_26388__$1;
(statearr_26398_26424[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26389 === (9))){
var state_26388__$1 = state_26388;
var statearr_26399_26425 = state_26388__$1;
(statearr_26399_26425[(2)] = null);

(statearr_26399_26425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26389 === (5))){
var state_26388__$1 = state_26388;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26400_26426 = state_26388__$1;
(statearr_26400_26426[(1)] = (8));

} else {
var statearr_26401_26427 = state_26388__$1;
(statearr_26401_26427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26389 === (14))){
var inst_26382 = (state_26388[(2)]);
var state_26388__$1 = state_26388;
var statearr_26402_26428 = state_26388__$1;
(statearr_26402_26428[(2)] = inst_26382);

(statearr_26402_26428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26389 === (10))){
var inst_26374 = (state_26388[(2)]);
var state_26388__$1 = state_26388;
var statearr_26403_26429 = state_26388__$1;
(statearr_26403_26429[(2)] = inst_26374);

(statearr_26403_26429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26389 === (8))){
var inst_26371 = cljs.core.async.close_BANG_.call(null,to);
var state_26388__$1 = state_26388;
var statearr_26404_26430 = state_26388__$1;
(statearr_26404_26430[(2)] = inst_26371);

(statearr_26404_26430[(1)] = (10));


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
});})(c__20007__auto___26416))
;
return ((function (switch__19942__auto__,c__20007__auto___26416){
return (function() {
var cljs$core$async$state_machine__19943__auto__ = null;
var cljs$core$async$state_machine__19943__auto____0 = (function (){
var statearr_26408 = [null,null,null,null,null,null,null,null];
(statearr_26408[(0)] = cljs$core$async$state_machine__19943__auto__);

(statearr_26408[(1)] = (1));

return statearr_26408;
});
var cljs$core$async$state_machine__19943__auto____1 = (function (state_26388){
while(true){
var ret_value__19944__auto__ = (function (){try{while(true){
var result__19945__auto__ = switch__19942__auto__.call(null,state_26388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19945__auto__;
}
break;
}
}catch (e26409){if((e26409 instanceof Object)){
var ex__19946__auto__ = e26409;
var statearr_26410_26431 = state_26388;
(statearr_26410_26431[(5)] = ex__19946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26432 = state_26388;
state_26388 = G__26432;
continue;
} else {
return ret_value__19944__auto__;
}
break;
}
});
cljs$core$async$state_machine__19943__auto__ = function(state_26388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19943__auto____1.call(this,state_26388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19943__auto____0;
cljs$core$async$state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19943__auto____1;
return cljs$core$async$state_machine__19943__auto__;
})()
;})(switch__19942__auto__,c__20007__auto___26416))
})();
var state__20009__auto__ = (function (){var statearr_26411 = f__20008__auto__.call(null);
(statearr_26411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___26416);

return statearr_26411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___26416))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26616){
var vec__26617 = p__26616;
var v = cljs.core.nth.call(null,vec__26617,(0),null);
var p = cljs.core.nth.call(null,vec__26617,(1),null);
var job = vec__26617;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20007__auto___26799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___26799,res,vec__26617,v,p,job,jobs,results){
return (function (){
var f__20008__auto__ = (function (){var switch__19942__auto__ = ((function (c__20007__auto___26799,res,vec__26617,v,p,job,jobs,results){
return (function (state_26622){
var state_val_26623 = (state_26622[(1)]);
if((state_val_26623 === (1))){
var state_26622__$1 = state_26622;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26622__$1,(2),res,v);
} else {
if((state_val_26623 === (2))){
var inst_26619 = (state_26622[(2)]);
var inst_26620 = cljs.core.async.close_BANG_.call(null,res);
var state_26622__$1 = (function (){var statearr_26624 = state_26622;
(statearr_26624[(7)] = inst_26619);

return statearr_26624;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26622__$1,inst_26620);
} else {
return null;
}
}
});})(c__20007__auto___26799,res,vec__26617,v,p,job,jobs,results))
;
return ((function (switch__19942__auto__,c__20007__auto___26799,res,vec__26617,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____0 = (function (){
var statearr_26628 = [null,null,null,null,null,null,null,null];
(statearr_26628[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__);

(statearr_26628[(1)] = (1));

return statearr_26628;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____1 = (function (state_26622){
while(true){
var ret_value__19944__auto__ = (function (){try{while(true){
var result__19945__auto__ = switch__19942__auto__.call(null,state_26622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19945__auto__;
}
break;
}
}catch (e26629){if((e26629 instanceof Object)){
var ex__19946__auto__ = e26629;
var statearr_26630_26800 = state_26622;
(statearr_26630_26800[(5)] = ex__19946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26801 = state_26622;
state_26622 = G__26801;
continue;
} else {
return ret_value__19944__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__ = function(state_26622){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____1.call(this,state_26622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__;
})()
;})(switch__19942__auto__,c__20007__auto___26799,res,vec__26617,v,p,job,jobs,results))
})();
var state__20009__auto__ = (function (){var statearr_26631 = f__20008__auto__.call(null);
(statearr_26631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___26799);

return statearr_26631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___26799,res,vec__26617,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26632){
var vec__26633 = p__26632;
var v = cljs.core.nth.call(null,vec__26633,(0),null);
var p = cljs.core.nth.call(null,vec__26633,(1),null);
var job = vec__26633;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17420__auto___26802 = n;
var __26803 = (0);
while(true){
if((__26803 < n__17420__auto___26802)){
var G__26634_26804 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26634_26804) {
case "compute":
var c__20007__auto___26806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26803,c__20007__auto___26806,G__26634_26804,n__17420__auto___26802,jobs,results,process,async){
return (function (){
var f__20008__auto__ = (function (){var switch__19942__auto__ = ((function (__26803,c__20007__auto___26806,G__26634_26804,n__17420__auto___26802,jobs,results,process,async){
return (function (state_26647){
var state_val_26648 = (state_26647[(1)]);
if((state_val_26648 === (1))){
var state_26647__$1 = state_26647;
var statearr_26649_26807 = state_26647__$1;
(statearr_26649_26807[(2)] = null);

(statearr_26649_26807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26648 === (2))){
var state_26647__$1 = state_26647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26647__$1,(4),jobs);
} else {
if((state_val_26648 === (3))){
var inst_26645 = (state_26647[(2)]);
var state_26647__$1 = state_26647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26647__$1,inst_26645);
} else {
if((state_val_26648 === (4))){
var inst_26637 = (state_26647[(2)]);
var inst_26638 = process.call(null,inst_26637);
var state_26647__$1 = state_26647;
if(cljs.core.truth_(inst_26638)){
var statearr_26650_26808 = state_26647__$1;
(statearr_26650_26808[(1)] = (5));

} else {
var statearr_26651_26809 = state_26647__$1;
(statearr_26651_26809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26648 === (5))){
var state_26647__$1 = state_26647;
var statearr_26652_26810 = state_26647__$1;
(statearr_26652_26810[(2)] = null);

(statearr_26652_26810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26648 === (6))){
var state_26647__$1 = state_26647;
var statearr_26653_26811 = state_26647__$1;
(statearr_26653_26811[(2)] = null);

(statearr_26653_26811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26648 === (7))){
var inst_26643 = (state_26647[(2)]);
var state_26647__$1 = state_26647;
var statearr_26654_26812 = state_26647__$1;
(statearr_26654_26812[(2)] = inst_26643);

(statearr_26654_26812[(1)] = (3));


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
});})(__26803,c__20007__auto___26806,G__26634_26804,n__17420__auto___26802,jobs,results,process,async))
;
return ((function (__26803,switch__19942__auto__,c__20007__auto___26806,G__26634_26804,n__17420__auto___26802,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____0 = (function (){
var statearr_26658 = [null,null,null,null,null,null,null];
(statearr_26658[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__);

(statearr_26658[(1)] = (1));

return statearr_26658;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____1 = (function (state_26647){
while(true){
var ret_value__19944__auto__ = (function (){try{while(true){
var result__19945__auto__ = switch__19942__auto__.call(null,state_26647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19945__auto__;
}
break;
}
}catch (e26659){if((e26659 instanceof Object)){
var ex__19946__auto__ = e26659;
var statearr_26660_26813 = state_26647;
(statearr_26660_26813[(5)] = ex__19946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26814 = state_26647;
state_26647 = G__26814;
continue;
} else {
return ret_value__19944__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__ = function(state_26647){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____1.call(this,state_26647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__;
})()
;})(__26803,switch__19942__auto__,c__20007__auto___26806,G__26634_26804,n__17420__auto___26802,jobs,results,process,async))
})();
var state__20009__auto__ = (function (){var statearr_26661 = f__20008__auto__.call(null);
(statearr_26661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___26806);

return statearr_26661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(__26803,c__20007__auto___26806,G__26634_26804,n__17420__auto___26802,jobs,results,process,async))
);


break;
case "async":
var c__20007__auto___26815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26803,c__20007__auto___26815,G__26634_26804,n__17420__auto___26802,jobs,results,process,async){
return (function (){
var f__20008__auto__ = (function (){var switch__19942__auto__ = ((function (__26803,c__20007__auto___26815,G__26634_26804,n__17420__auto___26802,jobs,results,process,async){
return (function (state_26674){
var state_val_26675 = (state_26674[(1)]);
if((state_val_26675 === (1))){
var state_26674__$1 = state_26674;
var statearr_26676_26816 = state_26674__$1;
(statearr_26676_26816[(2)] = null);

(statearr_26676_26816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (2))){
var state_26674__$1 = state_26674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26674__$1,(4),jobs);
} else {
if((state_val_26675 === (3))){
var inst_26672 = (state_26674[(2)]);
var state_26674__$1 = state_26674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26674__$1,inst_26672);
} else {
if((state_val_26675 === (4))){
var inst_26664 = (state_26674[(2)]);
var inst_26665 = async.call(null,inst_26664);
var state_26674__$1 = state_26674;
if(cljs.core.truth_(inst_26665)){
var statearr_26677_26817 = state_26674__$1;
(statearr_26677_26817[(1)] = (5));

} else {
var statearr_26678_26818 = state_26674__$1;
(statearr_26678_26818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (5))){
var state_26674__$1 = state_26674;
var statearr_26679_26819 = state_26674__$1;
(statearr_26679_26819[(2)] = null);

(statearr_26679_26819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (6))){
var state_26674__$1 = state_26674;
var statearr_26680_26820 = state_26674__$1;
(statearr_26680_26820[(2)] = null);

(statearr_26680_26820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26675 === (7))){
var inst_26670 = (state_26674[(2)]);
var state_26674__$1 = state_26674;
var statearr_26681_26821 = state_26674__$1;
(statearr_26681_26821[(2)] = inst_26670);

(statearr_26681_26821[(1)] = (3));


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
});})(__26803,c__20007__auto___26815,G__26634_26804,n__17420__auto___26802,jobs,results,process,async))
;
return ((function (__26803,switch__19942__auto__,c__20007__auto___26815,G__26634_26804,n__17420__auto___26802,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____0 = (function (){
var statearr_26685 = [null,null,null,null,null,null,null];
(statearr_26685[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__);

(statearr_26685[(1)] = (1));

return statearr_26685;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____1 = (function (state_26674){
while(true){
var ret_value__19944__auto__ = (function (){try{while(true){
var result__19945__auto__ = switch__19942__auto__.call(null,state_26674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19945__auto__;
}
break;
}
}catch (e26686){if((e26686 instanceof Object)){
var ex__19946__auto__ = e26686;
var statearr_26687_26822 = state_26674;
(statearr_26687_26822[(5)] = ex__19946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26823 = state_26674;
state_26674 = G__26823;
continue;
} else {
return ret_value__19944__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__ = function(state_26674){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____1.call(this,state_26674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__;
})()
;})(__26803,switch__19942__auto__,c__20007__auto___26815,G__26634_26804,n__17420__auto___26802,jobs,results,process,async))
})();
var state__20009__auto__ = (function (){var statearr_26688 = f__20008__auto__.call(null);
(statearr_26688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___26815);

return statearr_26688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(__26803,c__20007__auto___26815,G__26634_26804,n__17420__auto___26802,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26824 = (__26803 + (1));
__26803 = G__26824;
continue;
} else {
}
break;
}

var c__20007__auto___26825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___26825,jobs,results,process,async){
return (function (){
var f__20008__auto__ = (function (){var switch__19942__auto__ = ((function (c__20007__auto___26825,jobs,results,process,async){
return (function (state_26710){
var state_val_26711 = (state_26710[(1)]);
if((state_val_26711 === (1))){
var state_26710__$1 = state_26710;
var statearr_26712_26826 = state_26710__$1;
(statearr_26712_26826[(2)] = null);

(statearr_26712_26826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26711 === (2))){
var state_26710__$1 = state_26710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26710__$1,(4),from);
} else {
if((state_val_26711 === (3))){
var inst_26708 = (state_26710[(2)]);
var state_26710__$1 = state_26710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26710__$1,inst_26708);
} else {
if((state_val_26711 === (4))){
var inst_26691 = (state_26710[(7)]);
var inst_26691__$1 = (state_26710[(2)]);
var inst_26692 = (inst_26691__$1 == null);
var state_26710__$1 = (function (){var statearr_26713 = state_26710;
(statearr_26713[(7)] = inst_26691__$1);

return statearr_26713;
})();
if(cljs.core.truth_(inst_26692)){
var statearr_26714_26827 = state_26710__$1;
(statearr_26714_26827[(1)] = (5));

} else {
var statearr_26715_26828 = state_26710__$1;
(statearr_26715_26828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26711 === (5))){
var inst_26694 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26710__$1 = state_26710;
var statearr_26716_26829 = state_26710__$1;
(statearr_26716_26829[(2)] = inst_26694);

(statearr_26716_26829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26711 === (6))){
var inst_26691 = (state_26710[(7)]);
var inst_26696 = (state_26710[(8)]);
var inst_26696__$1 = cljs.core.async.chan.call(null,(1));
var inst_26697 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26698 = [inst_26691,inst_26696__$1];
var inst_26699 = (new cljs.core.PersistentVector(null,2,(5),inst_26697,inst_26698,null));
var state_26710__$1 = (function (){var statearr_26717 = state_26710;
(statearr_26717[(8)] = inst_26696__$1);

return statearr_26717;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26710__$1,(8),jobs,inst_26699);
} else {
if((state_val_26711 === (7))){
var inst_26706 = (state_26710[(2)]);
var state_26710__$1 = state_26710;
var statearr_26718_26830 = state_26710__$1;
(statearr_26718_26830[(2)] = inst_26706);

(statearr_26718_26830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26711 === (8))){
var inst_26696 = (state_26710[(8)]);
var inst_26701 = (state_26710[(2)]);
var state_26710__$1 = (function (){var statearr_26719 = state_26710;
(statearr_26719[(9)] = inst_26701);

return statearr_26719;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26710__$1,(9),results,inst_26696);
} else {
if((state_val_26711 === (9))){
var inst_26703 = (state_26710[(2)]);
var state_26710__$1 = (function (){var statearr_26720 = state_26710;
(statearr_26720[(10)] = inst_26703);

return statearr_26720;
})();
var statearr_26721_26831 = state_26710__$1;
(statearr_26721_26831[(2)] = null);

(statearr_26721_26831[(1)] = (2));


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
});})(c__20007__auto___26825,jobs,results,process,async))
;
return ((function (switch__19942__auto__,c__20007__auto___26825,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____0 = (function (){
var statearr_26725 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26725[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__);

(statearr_26725[(1)] = (1));

return statearr_26725;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____1 = (function (state_26710){
while(true){
var ret_value__19944__auto__ = (function (){try{while(true){
var result__19945__auto__ = switch__19942__auto__.call(null,state_26710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19945__auto__;
}
break;
}
}catch (e26726){if((e26726 instanceof Object)){
var ex__19946__auto__ = e26726;
var statearr_26727_26832 = state_26710;
(statearr_26727_26832[(5)] = ex__19946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26833 = state_26710;
state_26710 = G__26833;
continue;
} else {
return ret_value__19944__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__ = function(state_26710){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____1.call(this,state_26710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__;
})()
;})(switch__19942__auto__,c__20007__auto___26825,jobs,results,process,async))
})();
var state__20009__auto__ = (function (){var statearr_26728 = f__20008__auto__.call(null);
(statearr_26728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___26825);

return statearr_26728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___26825,jobs,results,process,async))
);


var c__20007__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto__,jobs,results,process,async){
return (function (){
var f__20008__auto__ = (function (){var switch__19942__auto__ = ((function (c__20007__auto__,jobs,results,process,async){
return (function (state_26766){
var state_val_26767 = (state_26766[(1)]);
if((state_val_26767 === (7))){
var inst_26762 = (state_26766[(2)]);
var state_26766__$1 = state_26766;
var statearr_26768_26834 = state_26766__$1;
(statearr_26768_26834[(2)] = inst_26762);

(statearr_26768_26834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (20))){
var state_26766__$1 = state_26766;
var statearr_26769_26835 = state_26766__$1;
(statearr_26769_26835[(2)] = null);

(statearr_26769_26835[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (1))){
var state_26766__$1 = state_26766;
var statearr_26770_26836 = state_26766__$1;
(statearr_26770_26836[(2)] = null);

(statearr_26770_26836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (4))){
var inst_26731 = (state_26766[(7)]);
var inst_26731__$1 = (state_26766[(2)]);
var inst_26732 = (inst_26731__$1 == null);
var state_26766__$1 = (function (){var statearr_26771 = state_26766;
(statearr_26771[(7)] = inst_26731__$1);

return statearr_26771;
})();
if(cljs.core.truth_(inst_26732)){
var statearr_26772_26837 = state_26766__$1;
(statearr_26772_26837[(1)] = (5));

} else {
var statearr_26773_26838 = state_26766__$1;
(statearr_26773_26838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (15))){
var inst_26744 = (state_26766[(8)]);
var state_26766__$1 = state_26766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26766__$1,(18),to,inst_26744);
} else {
if((state_val_26767 === (21))){
var inst_26757 = (state_26766[(2)]);
var state_26766__$1 = state_26766;
var statearr_26774_26839 = state_26766__$1;
(statearr_26774_26839[(2)] = inst_26757);

(statearr_26774_26839[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (13))){
var inst_26759 = (state_26766[(2)]);
var state_26766__$1 = (function (){var statearr_26775 = state_26766;
(statearr_26775[(9)] = inst_26759);

return statearr_26775;
})();
var statearr_26776_26840 = state_26766__$1;
(statearr_26776_26840[(2)] = null);

(statearr_26776_26840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (6))){
var inst_26731 = (state_26766[(7)]);
var state_26766__$1 = state_26766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26766__$1,(11),inst_26731);
} else {
if((state_val_26767 === (17))){
var inst_26752 = (state_26766[(2)]);
var state_26766__$1 = state_26766;
if(cljs.core.truth_(inst_26752)){
var statearr_26777_26841 = state_26766__$1;
(statearr_26777_26841[(1)] = (19));

} else {
var statearr_26778_26842 = state_26766__$1;
(statearr_26778_26842[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (3))){
var inst_26764 = (state_26766[(2)]);
var state_26766__$1 = state_26766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26766__$1,inst_26764);
} else {
if((state_val_26767 === (12))){
var inst_26741 = (state_26766[(10)]);
var state_26766__$1 = state_26766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26766__$1,(14),inst_26741);
} else {
if((state_val_26767 === (2))){
var state_26766__$1 = state_26766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26766__$1,(4),results);
} else {
if((state_val_26767 === (19))){
var state_26766__$1 = state_26766;
var statearr_26779_26843 = state_26766__$1;
(statearr_26779_26843[(2)] = null);

(statearr_26779_26843[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (11))){
var inst_26741 = (state_26766[(2)]);
var state_26766__$1 = (function (){var statearr_26780 = state_26766;
(statearr_26780[(10)] = inst_26741);

return statearr_26780;
})();
var statearr_26781_26844 = state_26766__$1;
(statearr_26781_26844[(2)] = null);

(statearr_26781_26844[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (9))){
var state_26766__$1 = state_26766;
var statearr_26782_26845 = state_26766__$1;
(statearr_26782_26845[(2)] = null);

(statearr_26782_26845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (5))){
var state_26766__$1 = state_26766;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26783_26846 = state_26766__$1;
(statearr_26783_26846[(1)] = (8));

} else {
var statearr_26784_26847 = state_26766__$1;
(statearr_26784_26847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (14))){
var inst_26744 = (state_26766[(8)]);
var inst_26746 = (state_26766[(11)]);
var inst_26744__$1 = (state_26766[(2)]);
var inst_26745 = (inst_26744__$1 == null);
var inst_26746__$1 = cljs.core.not.call(null,inst_26745);
var state_26766__$1 = (function (){var statearr_26785 = state_26766;
(statearr_26785[(8)] = inst_26744__$1);

(statearr_26785[(11)] = inst_26746__$1);

return statearr_26785;
})();
if(inst_26746__$1){
var statearr_26786_26848 = state_26766__$1;
(statearr_26786_26848[(1)] = (15));

} else {
var statearr_26787_26849 = state_26766__$1;
(statearr_26787_26849[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (16))){
var inst_26746 = (state_26766[(11)]);
var state_26766__$1 = state_26766;
var statearr_26788_26850 = state_26766__$1;
(statearr_26788_26850[(2)] = inst_26746);

(statearr_26788_26850[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (10))){
var inst_26738 = (state_26766[(2)]);
var state_26766__$1 = state_26766;
var statearr_26789_26851 = state_26766__$1;
(statearr_26789_26851[(2)] = inst_26738);

(statearr_26789_26851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (18))){
var inst_26749 = (state_26766[(2)]);
var state_26766__$1 = state_26766;
var statearr_26790_26852 = state_26766__$1;
(statearr_26790_26852[(2)] = inst_26749);

(statearr_26790_26852[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26767 === (8))){
var inst_26735 = cljs.core.async.close_BANG_.call(null,to);
var state_26766__$1 = state_26766;
var statearr_26791_26853 = state_26766__$1;
(statearr_26791_26853[(2)] = inst_26735);

(statearr_26791_26853[(1)] = (10));


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
});})(c__20007__auto__,jobs,results,process,async))
;
return ((function (switch__19942__auto__,c__20007__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____0 = (function (){
var statearr_26795 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26795[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__);

(statearr_26795[(1)] = (1));

return statearr_26795;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____1 = (function (state_26766){
while(true){
var ret_value__19944__auto__ = (function (){try{while(true){
var result__19945__auto__ = switch__19942__auto__.call(null,state_26766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19945__auto__;
}
break;
}
}catch (e26796){if((e26796 instanceof Object)){
var ex__19946__auto__ = e26796;
var statearr_26797_26854 = state_26766;
(statearr_26797_26854[(5)] = ex__19946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26855 = state_26766;
state_26766 = G__26855;
continue;
} else {
return ret_value__19944__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__ = function(state_26766){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____1.call(this,state_26766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19943__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19943__auto__;
})()
;})(switch__19942__auto__,c__20007__auto__,jobs,results,process,async))
})();
var state__20009__auto__ = (function (){var statearr_26798 = f__20008__auto__.call(null);
(statearr_26798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto__);

return statearr_26798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto__,jobs,results,process,async))
);

return c__20007__auto__;
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
var args26856 = [];
var len__17575__auto___26859 = arguments.length;
var i__17576__auto___26860 = (0);
while(true){
if((i__17576__auto___26860 < len__17575__auto___26859)){
args26856.push((arguments[i__17576__auto___26860]));

var G__26861 = (i__17576__auto___26860 + (1));
i__17576__auto___26860 = G__26861;
continue;
} else {
}
break;
}

var G__26858 = args26856.length;
switch (G__26858) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26856.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
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
var args26863 = [];
var len__17575__auto___26866 = arguments.length;
var i__17576__auto___26867 = (0);
while(true){
if((i__17576__auto___26867 < len__17575__auto___26866)){
args26863.push((arguments[i__17576__auto___26867]));

var G__26868 = (i__17576__auto___26867 + (1));
i__17576__auto___26867 = G__26868;
continue;
} else {
}
break;
}

var G__26865 = args26863.length;
switch (G__26865) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26863.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
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
var args26870 = [];
var len__17575__auto___26923 = arguments.length;
var i__17576__auto___26924 = (0);
while(true){
if((i__17576__auto___26924 < len__17575__auto___26923)){
args26870.push((arguments[i__17576__auto___26924]));

var G__26925 = (i__17576__auto___26924 + (1));
i__17576__auto___26924 = G__26925;
continue;
} else {
}
break;
}

var G__26872 = args26870.length;
switch (G__26872) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26870.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20007__auto___26927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___26927,tc,fc){
return (function (){
var f__20008__auto__ = (function (){var switch__19942__auto__ = ((function (c__20007__auto___26927,tc,fc){
return (function (state_26898){
var state_val_26899 = (state_26898[(1)]);
if((state_val_26899 === (7))){
var inst_26894 = (state_26898[(2)]);
var state_26898__$1 = state_26898;
var statearr_26900_26928 = state_26898__$1;
(statearr_26900_26928[(2)] = inst_26894);

(statearr_26900_26928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (1))){
var state_26898__$1 = state_26898;
var statearr_26901_26929 = state_26898__$1;
(statearr_26901_26929[(2)] = null);

(statearr_26901_26929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (4))){
var inst_26875 = (state_26898[(7)]);
var inst_26875__$1 = (state_26898[(2)]);
var inst_26876 = (inst_26875__$1 == null);
var state_26898__$1 = (function (){var statearr_26902 = state_26898;
(statearr_26902[(7)] = inst_26875__$1);

return statearr_26902;
})();
if(cljs.core.truth_(inst_26876)){
var statearr_26903_26930 = state_26898__$1;
(statearr_26903_26930[(1)] = (5));

} else {
var statearr_26904_26931 = state_26898__$1;
(statearr_26904_26931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (13))){
var state_26898__$1 = state_26898;
var statearr_26905_26932 = state_26898__$1;
(statearr_26905_26932[(2)] = null);

(statearr_26905_26932[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (6))){
var inst_26875 = (state_26898[(7)]);
var inst_26881 = p.call(null,inst_26875);
var state_26898__$1 = state_26898;
if(cljs.core.truth_(inst_26881)){
var statearr_26906_26933 = state_26898__$1;
(statearr_26906_26933[(1)] = (9));

} else {
var statearr_26907_26934 = state_26898__$1;
(statearr_26907_26934[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (3))){
var inst_26896 = (state_26898[(2)]);
var state_26898__$1 = state_26898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26898__$1,inst_26896);
} else {
if((state_val_26899 === (12))){
var state_26898__$1 = state_26898;
var statearr_26908_26935 = state_26898__$1;
(statearr_26908_26935[(2)] = null);

(statearr_26908_26935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (2))){
var state_26898__$1 = state_26898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26898__$1,(4),ch);
} else {
if((state_val_26899 === (11))){
var inst_26875 = (state_26898[(7)]);
var inst_26885 = (state_26898[(2)]);
var state_26898__$1 = state_26898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26898__$1,(8),inst_26885,inst_26875);
} else {
if((state_val_26899 === (9))){
var state_26898__$1 = state_26898;
var statearr_26909_26936 = state_26898__$1;
(statearr_26909_26936[(2)] = tc);

(statearr_26909_26936[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (5))){
var inst_26878 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26879 = cljs.core.async.close_BANG_.call(null,fc);
var state_26898__$1 = (function (){var statearr_26910 = state_26898;
(statearr_26910[(8)] = inst_26878);

return statearr_26910;
})();
var statearr_26911_26937 = state_26898__$1;
(statearr_26911_26937[(2)] = inst_26879);

(statearr_26911_26937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (14))){
var inst_26892 = (state_26898[(2)]);
var state_26898__$1 = state_26898;
var statearr_26912_26938 = state_26898__$1;
(statearr_26912_26938[(2)] = inst_26892);

(statearr_26912_26938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (10))){
var state_26898__$1 = state_26898;
var statearr_26913_26939 = state_26898__$1;
(statearr_26913_26939[(2)] = fc);

(statearr_26913_26939[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (8))){
var inst_26887 = (state_26898[(2)]);
var state_26898__$1 = state_26898;
if(cljs.core.truth_(inst_26887)){
var statearr_26914_26940 = state_26898__$1;
(statearr_26914_26940[(1)] = (12));

} else {
var statearr_26915_26941 = state_26898__$1;
(statearr_26915_26941[(1)] = (13));

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
});})(c__20007__auto___26927,tc,fc))
;
return ((function (switch__19942__auto__,c__20007__auto___26927,tc,fc){
return (function() {
var cljs$core$async$state_machine__19943__auto__ = null;
var cljs$core$async$state_machine__19943__auto____0 = (function (){
var statearr_26919 = [null,null,null,null,null,null,null,null,null];
(statearr_26919[(0)] = cljs$core$async$state_machine__19943__auto__);

(statearr_26919[(1)] = (1));

return statearr_26919;
});
var cljs$core$async$state_machine__19943__auto____1 = (function (state_26898){
while(true){
var ret_value__19944__auto__ = (function (){try{while(true){
var result__19945__auto__ = switch__19942__auto__.call(null,state_26898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19945__auto__;
}
break;
}
}catch (e26920){if((e26920 instanceof Object)){
var ex__19946__auto__ = e26920;
var statearr_26921_26942 = state_26898;
(statearr_26921_26942[(5)] = ex__19946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26943 = state_26898;
state_26898 = G__26943;
continue;
} else {
return ret_value__19944__auto__;
}
break;
}
});
cljs$core$async$state_machine__19943__auto__ = function(state_26898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19943__auto____1.call(this,state_26898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19943__auto____0;
cljs$core$async$state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19943__auto____1;
return cljs$core$async$state_machine__19943__auto__;
})()
;})(switch__19942__auto__,c__20007__auto___26927,tc,fc))
})();
var state__20009__auto__ = (function (){var statearr_26922 = f__20008__auto__.call(null);
(statearr_26922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___26927);

return statearr_26922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___26927,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20007__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto__){
return (function (){
var f__20008__auto__ = (function (){var switch__19942__auto__ = ((function (c__20007__auto__){
return (function (state_26990){
var state_val_26991 = (state_26990[(1)]);
if((state_val_26991 === (1))){
var inst_26976 = init;
var state_26990__$1 = (function (){var statearr_26992 = state_26990;
(statearr_26992[(7)] = inst_26976);

return statearr_26992;
})();
var statearr_26993_27008 = state_26990__$1;
(statearr_26993_27008[(2)] = null);

(statearr_26993_27008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (2))){
var state_26990__$1 = state_26990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26990__$1,(4),ch);
} else {
if((state_val_26991 === (3))){
var inst_26988 = (state_26990[(2)]);
var state_26990__$1 = state_26990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26990__$1,inst_26988);
} else {
if((state_val_26991 === (4))){
var inst_26979 = (state_26990[(8)]);
var inst_26979__$1 = (state_26990[(2)]);
var inst_26980 = (inst_26979__$1 == null);
var state_26990__$1 = (function (){var statearr_26994 = state_26990;
(statearr_26994[(8)] = inst_26979__$1);

return statearr_26994;
})();
if(cljs.core.truth_(inst_26980)){
var statearr_26995_27009 = state_26990__$1;
(statearr_26995_27009[(1)] = (5));

} else {
var statearr_26996_27010 = state_26990__$1;
(statearr_26996_27010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (5))){
var inst_26976 = (state_26990[(7)]);
var state_26990__$1 = state_26990;
var statearr_26997_27011 = state_26990__$1;
(statearr_26997_27011[(2)] = inst_26976);

(statearr_26997_27011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (6))){
var inst_26976 = (state_26990[(7)]);
var inst_26979 = (state_26990[(8)]);
var inst_26983 = f.call(null,inst_26976,inst_26979);
var inst_26976__$1 = inst_26983;
var state_26990__$1 = (function (){var statearr_26998 = state_26990;
(statearr_26998[(7)] = inst_26976__$1);

return statearr_26998;
})();
var statearr_26999_27012 = state_26990__$1;
(statearr_26999_27012[(2)] = null);

(statearr_26999_27012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (7))){
var inst_26986 = (state_26990[(2)]);
var state_26990__$1 = state_26990;
var statearr_27000_27013 = state_26990__$1;
(statearr_27000_27013[(2)] = inst_26986);

(statearr_27000_27013[(1)] = (3));


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
});})(c__20007__auto__))
;
return ((function (switch__19942__auto__,c__20007__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19943__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19943__auto____0 = (function (){
var statearr_27004 = [null,null,null,null,null,null,null,null,null];
(statearr_27004[(0)] = cljs$core$async$reduce_$_state_machine__19943__auto__);

(statearr_27004[(1)] = (1));

return statearr_27004;
});
var cljs$core$async$reduce_$_state_machine__19943__auto____1 = (function (state_26990){
while(true){
var ret_value__19944__auto__ = (function (){try{while(true){
var result__19945__auto__ = switch__19942__auto__.call(null,state_26990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19945__auto__;
}
break;
}
}catch (e27005){if((e27005 instanceof Object)){
var ex__19946__auto__ = e27005;
var statearr_27006_27014 = state_26990;
(statearr_27006_27014[(5)] = ex__19946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27015 = state_26990;
state_26990 = G__27015;
continue;
} else {
return ret_value__19944__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19943__auto__ = function(state_26990){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19943__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19943__auto____1.call(this,state_26990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19943__auto____0;
cljs$core$async$reduce_$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19943__auto____1;
return cljs$core$async$reduce_$_state_machine__19943__auto__;
})()
;})(switch__19942__auto__,c__20007__auto__))
})();
var state__20009__auto__ = (function (){var statearr_27007 = f__20008__auto__.call(null);
(statearr_27007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto__);

return statearr_27007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto__))
);

return c__20007__auto__;
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
var args27016 = [];
var len__17575__auto___27068 = arguments.length;
var i__17576__auto___27069 = (0);
while(true){
if((i__17576__auto___27069 < len__17575__auto___27068)){
args27016.push((arguments[i__17576__auto___27069]));

var G__27070 = (i__17576__auto___27069 + (1));
i__17576__auto___27069 = G__27070;
continue;
} else {
}
break;
}

var G__27018 = args27016.length;
switch (G__27018) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27016.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20007__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto__){
return (function (){
var f__20008__auto__ = (function (){var switch__19942__auto__ = ((function (c__20007__auto__){
return (function (state_27043){
var state_val_27044 = (state_27043[(1)]);
if((state_val_27044 === (7))){
var inst_27025 = (state_27043[(2)]);
var state_27043__$1 = state_27043;
var statearr_27045_27072 = state_27043__$1;
(statearr_27045_27072[(2)] = inst_27025);

(statearr_27045_27072[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27044 === (1))){
var inst_27019 = cljs.core.seq.call(null,coll);
var inst_27020 = inst_27019;
var state_27043__$1 = (function (){var statearr_27046 = state_27043;
(statearr_27046[(7)] = inst_27020);

return statearr_27046;
})();
var statearr_27047_27073 = state_27043__$1;
(statearr_27047_27073[(2)] = null);

(statearr_27047_27073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27044 === (4))){
var inst_27020 = (state_27043[(7)]);
var inst_27023 = cljs.core.first.call(null,inst_27020);
var state_27043__$1 = state_27043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27043__$1,(7),ch,inst_27023);
} else {
if((state_val_27044 === (13))){
var inst_27037 = (state_27043[(2)]);
var state_27043__$1 = state_27043;
var statearr_27048_27074 = state_27043__$1;
(statearr_27048_27074[(2)] = inst_27037);

(statearr_27048_27074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27044 === (6))){
var inst_27028 = (state_27043[(2)]);
var state_27043__$1 = state_27043;
if(cljs.core.truth_(inst_27028)){
var statearr_27049_27075 = state_27043__$1;
(statearr_27049_27075[(1)] = (8));

} else {
var statearr_27050_27076 = state_27043__$1;
(statearr_27050_27076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27044 === (3))){
var inst_27041 = (state_27043[(2)]);
var state_27043__$1 = state_27043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27043__$1,inst_27041);
} else {
if((state_val_27044 === (12))){
var state_27043__$1 = state_27043;
var statearr_27051_27077 = state_27043__$1;
(statearr_27051_27077[(2)] = null);

(statearr_27051_27077[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27044 === (2))){
var inst_27020 = (state_27043[(7)]);
var state_27043__$1 = state_27043;
if(cljs.core.truth_(inst_27020)){
var statearr_27052_27078 = state_27043__$1;
(statearr_27052_27078[(1)] = (4));

} else {
var statearr_27053_27079 = state_27043__$1;
(statearr_27053_27079[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27044 === (11))){
var inst_27034 = cljs.core.async.close_BANG_.call(null,ch);
var state_27043__$1 = state_27043;
var statearr_27054_27080 = state_27043__$1;
(statearr_27054_27080[(2)] = inst_27034);

(statearr_27054_27080[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27044 === (9))){
var state_27043__$1 = state_27043;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27055_27081 = state_27043__$1;
(statearr_27055_27081[(1)] = (11));

} else {
var statearr_27056_27082 = state_27043__$1;
(statearr_27056_27082[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27044 === (5))){
var inst_27020 = (state_27043[(7)]);
var state_27043__$1 = state_27043;
var statearr_27057_27083 = state_27043__$1;
(statearr_27057_27083[(2)] = inst_27020);

(statearr_27057_27083[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27044 === (10))){
var inst_27039 = (state_27043[(2)]);
var state_27043__$1 = state_27043;
var statearr_27058_27084 = state_27043__$1;
(statearr_27058_27084[(2)] = inst_27039);

(statearr_27058_27084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27044 === (8))){
var inst_27020 = (state_27043[(7)]);
var inst_27030 = cljs.core.next.call(null,inst_27020);
var inst_27020__$1 = inst_27030;
var state_27043__$1 = (function (){var statearr_27059 = state_27043;
(statearr_27059[(7)] = inst_27020__$1);

return statearr_27059;
})();
var statearr_27060_27085 = state_27043__$1;
(statearr_27060_27085[(2)] = null);

(statearr_27060_27085[(1)] = (2));


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
});})(c__20007__auto__))
;
return ((function (switch__19942__auto__,c__20007__auto__){
return (function() {
var cljs$core$async$state_machine__19943__auto__ = null;
var cljs$core$async$state_machine__19943__auto____0 = (function (){
var statearr_27064 = [null,null,null,null,null,null,null,null];
(statearr_27064[(0)] = cljs$core$async$state_machine__19943__auto__);

(statearr_27064[(1)] = (1));

return statearr_27064;
});
var cljs$core$async$state_machine__19943__auto____1 = (function (state_27043){
while(true){
var ret_value__19944__auto__ = (function (){try{while(true){
var result__19945__auto__ = switch__19942__auto__.call(null,state_27043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19945__auto__;
}
break;
}
}catch (e27065){if((e27065 instanceof Object)){
var ex__19946__auto__ = e27065;
var statearr_27066_27086 = state_27043;
(statearr_27066_27086[(5)] = ex__19946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27087 = state_27043;
state_27043 = G__27087;
continue;
} else {
return ret_value__19944__auto__;
}
break;
}
});
cljs$core$async$state_machine__19943__auto__ = function(state_27043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19943__auto____1.call(this,state_27043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19943__auto____0;
cljs$core$async$state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19943__auto____1;
return cljs$core$async$state_machine__19943__auto__;
})()
;})(switch__19942__auto__,c__20007__auto__))
})();
var state__20009__auto__ = (function (){var statearr_27067 = f__20008__auto__.call(null);
(statearr_27067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto__);

return statearr_27067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto__))
);

return c__20007__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17172__auto__ = (((_ == null))?null:_);
var m__17173__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17172__auto__)]);
if(!((m__17173__auto__ == null))){
return m__17173__auto__.call(null,_);
} else {
var m__17173__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17173__auto____$1 == null))){
return m__17173__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17172__auto__ = (((m == null))?null:m);
var m__17173__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17172__auto__)]);
if(!((m__17173__auto__ == null))){
return m__17173__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17173__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17173__auto____$1 == null))){
return m__17173__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17172__auto__ = (((m == null))?null:m);
var m__17173__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17172__auto__)]);
if(!((m__17173__auto__ == null))){
return m__17173__auto__.call(null,m,ch);
} else {
var m__17173__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17173__auto____$1 == null))){
return m__17173__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17172__auto__ = (((m == null))?null:m);
var m__17173__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17172__auto__)]);
if(!((m__17173__auto__ == null))){
return m__17173__auto__.call(null,m);
} else {
var m__17173__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17173__auto____$1 == null))){
return m__17173__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27309 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27309 = (function (mult,ch,cs,meta27310){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27310 = meta27310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27311,meta27310__$1){
var self__ = this;
var _27311__$1 = this;
return (new cljs.core.async.t_cljs$core$async27309(self__.mult,self__.ch,self__.cs,meta27310__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27309.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27311){
var self__ = this;
var _27311__$1 = this;
return self__.meta27310;
});})(cs))
;

cljs.core.async.t_cljs$core$async27309.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27309.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27309.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async27309.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27309.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27309.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27309.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27310","meta27310",1609360658,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27309.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27309.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27309";

cljs.core.async.t_cljs$core$async27309.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17115__auto__,writer__17116__auto__,opt__17117__auto__){
return cljs.core._write.call(null,writer__17116__auto__,"cljs.core.async/t_cljs$core$async27309");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async27309 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27309(mult__$1,ch__$1,cs__$1,meta27310){
return (new cljs.core.async.t_cljs$core$async27309(mult__$1,ch__$1,cs__$1,meta27310));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27309(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20007__auto___27530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___27530,cs,m,dchan,dctr,done){
return (function (){
var f__20008__auto__ = (function (){var switch__19942__auto__ = ((function (c__20007__auto___27530,cs,m,dchan,dctr,done){
return (function (state_27442){
var state_val_27443 = (state_27442[(1)]);
if((state_val_27443 === (7))){
var inst_27438 = (state_27442[(2)]);
var state_27442__$1 = state_27442;
var statearr_27444_27531 = state_27442__$1;
(statearr_27444_27531[(2)] = inst_27438);

(statearr_27444_27531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (20))){
var inst_27343 = (state_27442[(7)]);
var inst_27353 = cljs.core.first.call(null,inst_27343);
var inst_27354 = cljs.core.nth.call(null,inst_27353,(0),null);
var inst_27355 = cljs.core.nth.call(null,inst_27353,(1),null);
var state_27442__$1 = (function (){var statearr_27445 = state_27442;
(statearr_27445[(8)] = inst_27354);

return statearr_27445;
})();
if(cljs.core.truth_(inst_27355)){
var statearr_27446_27532 = state_27442__$1;
(statearr_27446_27532[(1)] = (22));

} else {
var statearr_27447_27533 = state_27442__$1;
(statearr_27447_27533[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (27))){
var inst_27383 = (state_27442[(9)]);
var inst_27390 = (state_27442[(10)]);
var inst_27385 = (state_27442[(11)]);
var inst_27314 = (state_27442[(12)]);
var inst_27390__$1 = cljs.core._nth.call(null,inst_27383,inst_27385);
var inst_27391 = cljs.core.async.put_BANG_.call(null,inst_27390__$1,inst_27314,done);
var state_27442__$1 = (function (){var statearr_27448 = state_27442;
(statearr_27448[(10)] = inst_27390__$1);

return statearr_27448;
})();
if(cljs.core.truth_(inst_27391)){
var statearr_27449_27534 = state_27442__$1;
(statearr_27449_27534[(1)] = (30));

} else {
var statearr_27450_27535 = state_27442__$1;
(statearr_27450_27535[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (1))){
var state_27442__$1 = state_27442;
var statearr_27451_27536 = state_27442__$1;
(statearr_27451_27536[(2)] = null);

(statearr_27451_27536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (24))){
var inst_27343 = (state_27442[(7)]);
var inst_27360 = (state_27442[(2)]);
var inst_27361 = cljs.core.next.call(null,inst_27343);
var inst_27323 = inst_27361;
var inst_27324 = null;
var inst_27325 = (0);
var inst_27326 = (0);
var state_27442__$1 = (function (){var statearr_27452 = state_27442;
(statearr_27452[(13)] = inst_27325);

(statearr_27452[(14)] = inst_27324);

(statearr_27452[(15)] = inst_27326);

(statearr_27452[(16)] = inst_27323);

(statearr_27452[(17)] = inst_27360);

return statearr_27452;
})();
var statearr_27453_27537 = state_27442__$1;
(statearr_27453_27537[(2)] = null);

(statearr_27453_27537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (39))){
var state_27442__$1 = state_27442;
var statearr_27457_27538 = state_27442__$1;
(statearr_27457_27538[(2)] = null);

(statearr_27457_27538[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (4))){
var inst_27314 = (state_27442[(12)]);
var inst_27314__$1 = (state_27442[(2)]);
var inst_27315 = (inst_27314__$1 == null);
var state_27442__$1 = (function (){var statearr_27458 = state_27442;
(statearr_27458[(12)] = inst_27314__$1);

return statearr_27458;
})();
if(cljs.core.truth_(inst_27315)){
var statearr_27459_27539 = state_27442__$1;
(statearr_27459_27539[(1)] = (5));

} else {
var statearr_27460_27540 = state_27442__$1;
(statearr_27460_27540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (15))){
var inst_27325 = (state_27442[(13)]);
var inst_27324 = (state_27442[(14)]);
var inst_27326 = (state_27442[(15)]);
var inst_27323 = (state_27442[(16)]);
var inst_27339 = (state_27442[(2)]);
var inst_27340 = (inst_27326 + (1));
var tmp27454 = inst_27325;
var tmp27455 = inst_27324;
var tmp27456 = inst_27323;
var inst_27323__$1 = tmp27456;
var inst_27324__$1 = tmp27455;
var inst_27325__$1 = tmp27454;
var inst_27326__$1 = inst_27340;
var state_27442__$1 = (function (){var statearr_27461 = state_27442;
(statearr_27461[(13)] = inst_27325__$1);

(statearr_27461[(14)] = inst_27324__$1);

(statearr_27461[(15)] = inst_27326__$1);

(statearr_27461[(16)] = inst_27323__$1);

(statearr_27461[(18)] = inst_27339);

return statearr_27461;
})();
var statearr_27462_27541 = state_27442__$1;
(statearr_27462_27541[(2)] = null);

(statearr_27462_27541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (21))){
var inst_27364 = (state_27442[(2)]);
var state_27442__$1 = state_27442;
var statearr_27466_27542 = state_27442__$1;
(statearr_27466_27542[(2)] = inst_27364);

(statearr_27466_27542[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (31))){
var inst_27390 = (state_27442[(10)]);
var inst_27394 = done.call(null,null);
var inst_27395 = cljs.core.async.untap_STAR_.call(null,m,inst_27390);
var state_27442__$1 = (function (){var statearr_27467 = state_27442;
(statearr_27467[(19)] = inst_27394);

return statearr_27467;
})();
var statearr_27468_27543 = state_27442__$1;
(statearr_27468_27543[(2)] = inst_27395);

(statearr_27468_27543[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (32))){
var inst_27383 = (state_27442[(9)]);
var inst_27384 = (state_27442[(20)]);
var inst_27382 = (state_27442[(21)]);
var inst_27385 = (state_27442[(11)]);
var inst_27397 = (state_27442[(2)]);
var inst_27398 = (inst_27385 + (1));
var tmp27463 = inst_27383;
var tmp27464 = inst_27384;
var tmp27465 = inst_27382;
var inst_27382__$1 = tmp27465;
var inst_27383__$1 = tmp27463;
var inst_27384__$1 = tmp27464;
var inst_27385__$1 = inst_27398;
var state_27442__$1 = (function (){var statearr_27469 = state_27442;
(statearr_27469[(22)] = inst_27397);

(statearr_27469[(9)] = inst_27383__$1);

(statearr_27469[(20)] = inst_27384__$1);

(statearr_27469[(21)] = inst_27382__$1);

(statearr_27469[(11)] = inst_27385__$1);

return statearr_27469;
})();
var statearr_27470_27544 = state_27442__$1;
(statearr_27470_27544[(2)] = null);

(statearr_27470_27544[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (40))){
var inst_27410 = (state_27442[(23)]);
var inst_27414 = done.call(null,null);
var inst_27415 = cljs.core.async.untap_STAR_.call(null,m,inst_27410);
var state_27442__$1 = (function (){var statearr_27471 = state_27442;
(statearr_27471[(24)] = inst_27414);

return statearr_27471;
})();
var statearr_27472_27545 = state_27442__$1;
(statearr_27472_27545[(2)] = inst_27415);

(statearr_27472_27545[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (33))){
var inst_27401 = (state_27442[(25)]);
var inst_27403 = cljs.core.chunked_seq_QMARK_.call(null,inst_27401);
var state_27442__$1 = state_27442;
if(inst_27403){
var statearr_27473_27546 = state_27442__$1;
(statearr_27473_27546[(1)] = (36));

} else {
var statearr_27474_27547 = state_27442__$1;
(statearr_27474_27547[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (13))){
var inst_27333 = (state_27442[(26)]);
var inst_27336 = cljs.core.async.close_BANG_.call(null,inst_27333);
var state_27442__$1 = state_27442;
var statearr_27475_27548 = state_27442__$1;
(statearr_27475_27548[(2)] = inst_27336);

(statearr_27475_27548[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (22))){
var inst_27354 = (state_27442[(8)]);
var inst_27357 = cljs.core.async.close_BANG_.call(null,inst_27354);
var state_27442__$1 = state_27442;
var statearr_27476_27549 = state_27442__$1;
(statearr_27476_27549[(2)] = inst_27357);

(statearr_27476_27549[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (36))){
var inst_27401 = (state_27442[(25)]);
var inst_27405 = cljs.core.chunk_first.call(null,inst_27401);
var inst_27406 = cljs.core.chunk_rest.call(null,inst_27401);
var inst_27407 = cljs.core.count.call(null,inst_27405);
var inst_27382 = inst_27406;
var inst_27383 = inst_27405;
var inst_27384 = inst_27407;
var inst_27385 = (0);
var state_27442__$1 = (function (){var statearr_27477 = state_27442;
(statearr_27477[(9)] = inst_27383);

(statearr_27477[(20)] = inst_27384);

(statearr_27477[(21)] = inst_27382);

(statearr_27477[(11)] = inst_27385);

return statearr_27477;
})();
var statearr_27478_27550 = state_27442__$1;
(statearr_27478_27550[(2)] = null);

(statearr_27478_27550[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (41))){
var inst_27401 = (state_27442[(25)]);
var inst_27417 = (state_27442[(2)]);
var inst_27418 = cljs.core.next.call(null,inst_27401);
var inst_27382 = inst_27418;
var inst_27383 = null;
var inst_27384 = (0);
var inst_27385 = (0);
var state_27442__$1 = (function (){var statearr_27479 = state_27442;
(statearr_27479[(9)] = inst_27383);

(statearr_27479[(20)] = inst_27384);

(statearr_27479[(21)] = inst_27382);

(statearr_27479[(11)] = inst_27385);

(statearr_27479[(27)] = inst_27417);

return statearr_27479;
})();
var statearr_27480_27551 = state_27442__$1;
(statearr_27480_27551[(2)] = null);

(statearr_27480_27551[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (43))){
var state_27442__$1 = state_27442;
var statearr_27481_27552 = state_27442__$1;
(statearr_27481_27552[(2)] = null);

(statearr_27481_27552[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (29))){
var inst_27426 = (state_27442[(2)]);
var state_27442__$1 = state_27442;
var statearr_27482_27553 = state_27442__$1;
(statearr_27482_27553[(2)] = inst_27426);

(statearr_27482_27553[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (44))){
var inst_27435 = (state_27442[(2)]);
var state_27442__$1 = (function (){var statearr_27483 = state_27442;
(statearr_27483[(28)] = inst_27435);

return statearr_27483;
})();
var statearr_27484_27554 = state_27442__$1;
(statearr_27484_27554[(2)] = null);

(statearr_27484_27554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (6))){
var inst_27374 = (state_27442[(29)]);
var inst_27373 = cljs.core.deref.call(null,cs);
var inst_27374__$1 = cljs.core.keys.call(null,inst_27373);
var inst_27375 = cljs.core.count.call(null,inst_27374__$1);
var inst_27376 = cljs.core.reset_BANG_.call(null,dctr,inst_27375);
var inst_27381 = cljs.core.seq.call(null,inst_27374__$1);
var inst_27382 = inst_27381;
var inst_27383 = null;
var inst_27384 = (0);
var inst_27385 = (0);
var state_27442__$1 = (function (){var statearr_27485 = state_27442;
(statearr_27485[(9)] = inst_27383);

(statearr_27485[(29)] = inst_27374__$1);

(statearr_27485[(20)] = inst_27384);

(statearr_27485[(30)] = inst_27376);

(statearr_27485[(21)] = inst_27382);

(statearr_27485[(11)] = inst_27385);

return statearr_27485;
})();
var statearr_27486_27555 = state_27442__$1;
(statearr_27486_27555[(2)] = null);

(statearr_27486_27555[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (28))){
var inst_27382 = (state_27442[(21)]);
var inst_27401 = (state_27442[(25)]);
var inst_27401__$1 = cljs.core.seq.call(null,inst_27382);
var state_27442__$1 = (function (){var statearr_27487 = state_27442;
(statearr_27487[(25)] = inst_27401__$1);

return statearr_27487;
})();
if(inst_27401__$1){
var statearr_27488_27556 = state_27442__$1;
(statearr_27488_27556[(1)] = (33));

} else {
var statearr_27489_27557 = state_27442__$1;
(statearr_27489_27557[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (25))){
var inst_27384 = (state_27442[(20)]);
var inst_27385 = (state_27442[(11)]);
var inst_27387 = (inst_27385 < inst_27384);
var inst_27388 = inst_27387;
var state_27442__$1 = state_27442;
if(cljs.core.truth_(inst_27388)){
var statearr_27490_27558 = state_27442__$1;
(statearr_27490_27558[(1)] = (27));

} else {
var statearr_27491_27559 = state_27442__$1;
(statearr_27491_27559[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (34))){
var state_27442__$1 = state_27442;
var statearr_27492_27560 = state_27442__$1;
(statearr_27492_27560[(2)] = null);

(statearr_27492_27560[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (17))){
var state_27442__$1 = state_27442;
var statearr_27493_27561 = state_27442__$1;
(statearr_27493_27561[(2)] = null);

(statearr_27493_27561[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (3))){
var inst_27440 = (state_27442[(2)]);
var state_27442__$1 = state_27442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27442__$1,inst_27440);
} else {
if((state_val_27443 === (12))){
var inst_27369 = (state_27442[(2)]);
var state_27442__$1 = state_27442;
var statearr_27494_27562 = state_27442__$1;
(statearr_27494_27562[(2)] = inst_27369);

(statearr_27494_27562[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (2))){
var state_27442__$1 = state_27442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27442__$1,(4),ch);
} else {
if((state_val_27443 === (23))){
var state_27442__$1 = state_27442;
var statearr_27495_27563 = state_27442__$1;
(statearr_27495_27563[(2)] = null);

(statearr_27495_27563[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (35))){
var inst_27424 = (state_27442[(2)]);
var state_27442__$1 = state_27442;
var statearr_27496_27564 = state_27442__$1;
(statearr_27496_27564[(2)] = inst_27424);

(statearr_27496_27564[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (19))){
var inst_27343 = (state_27442[(7)]);
var inst_27347 = cljs.core.chunk_first.call(null,inst_27343);
var inst_27348 = cljs.core.chunk_rest.call(null,inst_27343);
var inst_27349 = cljs.core.count.call(null,inst_27347);
var inst_27323 = inst_27348;
var inst_27324 = inst_27347;
var inst_27325 = inst_27349;
var inst_27326 = (0);
var state_27442__$1 = (function (){var statearr_27497 = state_27442;
(statearr_27497[(13)] = inst_27325);

(statearr_27497[(14)] = inst_27324);

(statearr_27497[(15)] = inst_27326);

(statearr_27497[(16)] = inst_27323);

return statearr_27497;
})();
var statearr_27498_27565 = state_27442__$1;
(statearr_27498_27565[(2)] = null);

(statearr_27498_27565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (11))){
var inst_27343 = (state_27442[(7)]);
var inst_27323 = (state_27442[(16)]);
var inst_27343__$1 = cljs.core.seq.call(null,inst_27323);
var state_27442__$1 = (function (){var statearr_27499 = state_27442;
(statearr_27499[(7)] = inst_27343__$1);

return statearr_27499;
})();
if(inst_27343__$1){
var statearr_27500_27566 = state_27442__$1;
(statearr_27500_27566[(1)] = (16));

} else {
var statearr_27501_27567 = state_27442__$1;
(statearr_27501_27567[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (9))){
var inst_27371 = (state_27442[(2)]);
var state_27442__$1 = state_27442;
var statearr_27502_27568 = state_27442__$1;
(statearr_27502_27568[(2)] = inst_27371);

(statearr_27502_27568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (5))){
var inst_27321 = cljs.core.deref.call(null,cs);
var inst_27322 = cljs.core.seq.call(null,inst_27321);
var inst_27323 = inst_27322;
var inst_27324 = null;
var inst_27325 = (0);
var inst_27326 = (0);
var state_27442__$1 = (function (){var statearr_27503 = state_27442;
(statearr_27503[(13)] = inst_27325);

(statearr_27503[(14)] = inst_27324);

(statearr_27503[(15)] = inst_27326);

(statearr_27503[(16)] = inst_27323);

return statearr_27503;
})();
var statearr_27504_27569 = state_27442__$1;
(statearr_27504_27569[(2)] = null);

(statearr_27504_27569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (14))){
var state_27442__$1 = state_27442;
var statearr_27505_27570 = state_27442__$1;
(statearr_27505_27570[(2)] = null);

(statearr_27505_27570[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (45))){
var inst_27432 = (state_27442[(2)]);
var state_27442__$1 = state_27442;
var statearr_27506_27571 = state_27442__$1;
(statearr_27506_27571[(2)] = inst_27432);

(statearr_27506_27571[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (26))){
var inst_27374 = (state_27442[(29)]);
var inst_27428 = (state_27442[(2)]);
var inst_27429 = cljs.core.seq.call(null,inst_27374);
var state_27442__$1 = (function (){var statearr_27507 = state_27442;
(statearr_27507[(31)] = inst_27428);

return statearr_27507;
})();
if(inst_27429){
var statearr_27508_27572 = state_27442__$1;
(statearr_27508_27572[(1)] = (42));

} else {
var statearr_27509_27573 = state_27442__$1;
(statearr_27509_27573[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (16))){
var inst_27343 = (state_27442[(7)]);
var inst_27345 = cljs.core.chunked_seq_QMARK_.call(null,inst_27343);
var state_27442__$1 = state_27442;
if(inst_27345){
var statearr_27510_27574 = state_27442__$1;
(statearr_27510_27574[(1)] = (19));

} else {
var statearr_27511_27575 = state_27442__$1;
(statearr_27511_27575[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (38))){
var inst_27421 = (state_27442[(2)]);
var state_27442__$1 = state_27442;
var statearr_27512_27576 = state_27442__$1;
(statearr_27512_27576[(2)] = inst_27421);

(statearr_27512_27576[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (30))){
var state_27442__$1 = state_27442;
var statearr_27513_27577 = state_27442__$1;
(statearr_27513_27577[(2)] = null);

(statearr_27513_27577[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (10))){
var inst_27324 = (state_27442[(14)]);
var inst_27326 = (state_27442[(15)]);
var inst_27332 = cljs.core._nth.call(null,inst_27324,inst_27326);
var inst_27333 = cljs.core.nth.call(null,inst_27332,(0),null);
var inst_27334 = cljs.core.nth.call(null,inst_27332,(1),null);
var state_27442__$1 = (function (){var statearr_27514 = state_27442;
(statearr_27514[(26)] = inst_27333);

return statearr_27514;
})();
if(cljs.core.truth_(inst_27334)){
var statearr_27515_27578 = state_27442__$1;
(statearr_27515_27578[(1)] = (13));

} else {
var statearr_27516_27579 = state_27442__$1;
(statearr_27516_27579[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (18))){
var inst_27367 = (state_27442[(2)]);
var state_27442__$1 = state_27442;
var statearr_27517_27580 = state_27442__$1;
(statearr_27517_27580[(2)] = inst_27367);

(statearr_27517_27580[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (42))){
var state_27442__$1 = state_27442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27442__$1,(45),dchan);
} else {
if((state_val_27443 === (37))){
var inst_27410 = (state_27442[(23)]);
var inst_27314 = (state_27442[(12)]);
var inst_27401 = (state_27442[(25)]);
var inst_27410__$1 = cljs.core.first.call(null,inst_27401);
var inst_27411 = cljs.core.async.put_BANG_.call(null,inst_27410__$1,inst_27314,done);
var state_27442__$1 = (function (){var statearr_27518 = state_27442;
(statearr_27518[(23)] = inst_27410__$1);

return statearr_27518;
})();
if(cljs.core.truth_(inst_27411)){
var statearr_27519_27581 = state_27442__$1;
(statearr_27519_27581[(1)] = (39));

} else {
var statearr_27520_27582 = state_27442__$1;
(statearr_27520_27582[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (8))){
var inst_27325 = (state_27442[(13)]);
var inst_27326 = (state_27442[(15)]);
var inst_27328 = (inst_27326 < inst_27325);
var inst_27329 = inst_27328;
var state_27442__$1 = state_27442;
if(cljs.core.truth_(inst_27329)){
var statearr_27521_27583 = state_27442__$1;
(statearr_27521_27583[(1)] = (10));

} else {
var statearr_27522_27584 = state_27442__$1;
(statearr_27522_27584[(1)] = (11));

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
});})(c__20007__auto___27530,cs,m,dchan,dctr,done))
;
return ((function (switch__19942__auto__,c__20007__auto___27530,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19943__auto__ = null;
var cljs$core$async$mult_$_state_machine__19943__auto____0 = (function (){
var statearr_27526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27526[(0)] = cljs$core$async$mult_$_state_machine__19943__auto__);

(statearr_27526[(1)] = (1));

return statearr_27526;
});
var cljs$core$async$mult_$_state_machine__19943__auto____1 = (function (state_27442){
while(true){
var ret_value__19944__auto__ = (function (){try{while(true){
var result__19945__auto__ = switch__19942__auto__.call(null,state_27442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19945__auto__;
}
break;
}
}catch (e27527){if((e27527 instanceof Object)){
var ex__19946__auto__ = e27527;
var statearr_27528_27585 = state_27442;
(statearr_27528_27585[(5)] = ex__19946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27586 = state_27442;
state_27442 = G__27586;
continue;
} else {
return ret_value__19944__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19943__auto__ = function(state_27442){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19943__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19943__auto____1.call(this,state_27442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19943__auto____0;
cljs$core$async$mult_$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19943__auto____1;
return cljs$core$async$mult_$_state_machine__19943__auto__;
})()
;})(switch__19942__auto__,c__20007__auto___27530,cs,m,dchan,dctr,done))
})();
var state__20009__auto__ = (function (){var statearr_27529 = f__20008__auto__.call(null);
(statearr_27529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___27530);

return statearr_27529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___27530,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args27587 = [];
var len__17575__auto___27590 = arguments.length;
var i__17576__auto___27591 = (0);
while(true){
if((i__17576__auto___27591 < len__17575__auto___27590)){
args27587.push((arguments[i__17576__auto___27591]));

var G__27592 = (i__17576__auto___27591 + (1));
i__17576__auto___27591 = G__27592;
continue;
} else {
}
break;
}

var G__27589 = args27587.length;
switch (G__27589) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27587.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17172__auto__ = (((m == null))?null:m);
var m__17173__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17172__auto__)]);
if(!((m__17173__auto__ == null))){
return m__17173__auto__.call(null,m,ch);
} else {
var m__17173__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17173__auto____$1 == null))){
return m__17173__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17172__auto__ = (((m == null))?null:m);
var m__17173__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17172__auto__)]);
if(!((m__17173__auto__ == null))){
return m__17173__auto__.call(null,m,ch);
} else {
var m__17173__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17173__auto____$1 == null))){
return m__17173__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17172__auto__ = (((m == null))?null:m);
var m__17173__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17172__auto__)]);
if(!((m__17173__auto__ == null))){
return m__17173__auto__.call(null,m);
} else {
var m__17173__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17173__auto____$1 == null))){
return m__17173__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17172__auto__ = (((m == null))?null:m);
var m__17173__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17172__auto__)]);
if(!((m__17173__auto__ == null))){
return m__17173__auto__.call(null,m,state_map);
} else {
var m__17173__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17173__auto____$1 == null))){
return m__17173__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17172__auto__ = (((m == null))?null:m);
var m__17173__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17172__auto__)]);
if(!((m__17173__auto__ == null))){
return m__17173__auto__.call(null,m,mode);
} else {
var m__17173__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17173__auto____$1 == null))){
return m__17173__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17582__auto__ = [];
var len__17575__auto___27604 = arguments.length;
var i__17576__auto___27605 = (0);
while(true){
if((i__17576__auto___27605 < len__17575__auto___27604)){
args__17582__auto__.push((arguments[i__17576__auto___27605]));

var G__27606 = (i__17576__auto___27605 + (1));
i__17576__auto___27605 = G__27606;
continue;
} else {
}
break;
}

var argseq__17583__auto__ = ((((3) < args__17582__auto__.length))?(new cljs.core.IndexedSeq(args__17582__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17583__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27598){
var map__27599 = p__27598;
var map__27599__$1 = ((((!((map__27599 == null)))?((((map__27599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27599):map__27599);
var opts = map__27599__$1;
var statearr_27601_27607 = state;
(statearr_27601_27607[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__27599,map__27599__$1,opts){
return (function (val){
var statearr_27602_27608 = state;
(statearr_27602_27608[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27599,map__27599__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_27603_27609 = state;
(statearr_27603_27609[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27594){
var G__27595 = cljs.core.first.call(null,seq27594);
var seq27594__$1 = cljs.core.next.call(null,seq27594);
var G__27596 = cljs.core.first.call(null,seq27594__$1);
var seq27594__$2 = cljs.core.next.call(null,seq27594__$1);
var G__27597 = cljs.core.first.call(null,seq27594__$2);
var seq27594__$3 = cljs.core.next.call(null,seq27594__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27595,G__27596,G__27597,seq27594__$3);
});
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27773 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27773 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27774){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27774 = meta27774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27775,meta27774__$1){
var self__ = this;
var _27775__$1 = this;
return (new cljs.core.async.t_cljs$core$async27773(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27774__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27773.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27775){
var self__ = this;
var _27775__$1 = this;
return self__.meta27774;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27773.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27773.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27773.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async27773.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27773.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27773.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27773.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27773.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27773.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27774","meta27774",865721440,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27773.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27773.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27773";

cljs.core.async.t_cljs$core$async27773.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17115__auto__,writer__17116__auto__,opt__17117__auto__){
return cljs.core._write.call(null,writer__17116__auto__,"cljs.core.async/t_cljs$core$async27773");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async27773 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27773(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27774){
return (new cljs.core.async.t_cljs$core$async27773(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27774));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27773(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20007__auto___27936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___27936,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20008__auto__ = (function (){var switch__19942__auto__ = ((function (c__20007__auto___27936,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27873){
var state_val_27874 = (state_27873[(1)]);
if((state_val_27874 === (7))){
var inst_27791 = (state_27873[(2)]);
var state_27873__$1 = state_27873;
var statearr_27875_27937 = state_27873__$1;
(statearr_27875_27937[(2)] = inst_27791);

(statearr_27875_27937[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (20))){
var inst_27803 = (state_27873[(7)]);
var state_27873__$1 = state_27873;
var statearr_27876_27938 = state_27873__$1;
(statearr_27876_27938[(2)] = inst_27803);

(statearr_27876_27938[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (27))){
var state_27873__$1 = state_27873;
var statearr_27877_27939 = state_27873__$1;
(statearr_27877_27939[(2)] = null);

(statearr_27877_27939[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (1))){
var inst_27779 = (state_27873[(8)]);
var inst_27779__$1 = calc_state.call(null);
var inst_27781 = (inst_27779__$1 == null);
var inst_27782 = cljs.core.not.call(null,inst_27781);
var state_27873__$1 = (function (){var statearr_27878 = state_27873;
(statearr_27878[(8)] = inst_27779__$1);

return statearr_27878;
})();
if(inst_27782){
var statearr_27879_27940 = state_27873__$1;
(statearr_27879_27940[(1)] = (2));

} else {
var statearr_27880_27941 = state_27873__$1;
(statearr_27880_27941[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (24))){
var inst_27847 = (state_27873[(9)]);
var inst_27826 = (state_27873[(10)]);
var inst_27833 = (state_27873[(11)]);
var inst_27847__$1 = inst_27826.call(null,inst_27833);
var state_27873__$1 = (function (){var statearr_27881 = state_27873;
(statearr_27881[(9)] = inst_27847__$1);

return statearr_27881;
})();
if(cljs.core.truth_(inst_27847__$1)){
var statearr_27882_27942 = state_27873__$1;
(statearr_27882_27942[(1)] = (29));

} else {
var statearr_27883_27943 = state_27873__$1;
(statearr_27883_27943[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (4))){
var inst_27794 = (state_27873[(2)]);
var state_27873__$1 = state_27873;
if(cljs.core.truth_(inst_27794)){
var statearr_27884_27944 = state_27873__$1;
(statearr_27884_27944[(1)] = (8));

} else {
var statearr_27885_27945 = state_27873__$1;
(statearr_27885_27945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (15))){
var inst_27820 = (state_27873[(2)]);
var state_27873__$1 = state_27873;
if(cljs.core.truth_(inst_27820)){
var statearr_27886_27946 = state_27873__$1;
(statearr_27886_27946[(1)] = (19));

} else {
var statearr_27887_27947 = state_27873__$1;
(statearr_27887_27947[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (21))){
var inst_27825 = (state_27873[(12)]);
var inst_27825__$1 = (state_27873[(2)]);
var inst_27826 = cljs.core.get.call(null,inst_27825__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27827 = cljs.core.get.call(null,inst_27825__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27828 = cljs.core.get.call(null,inst_27825__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27873__$1 = (function (){var statearr_27888 = state_27873;
(statearr_27888[(10)] = inst_27826);

(statearr_27888[(12)] = inst_27825__$1);

(statearr_27888[(13)] = inst_27827);

return statearr_27888;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27873__$1,(22),inst_27828);
} else {
if((state_val_27874 === (31))){
var inst_27855 = (state_27873[(2)]);
var state_27873__$1 = state_27873;
if(cljs.core.truth_(inst_27855)){
var statearr_27889_27948 = state_27873__$1;
(statearr_27889_27948[(1)] = (32));

} else {
var statearr_27890_27949 = state_27873__$1;
(statearr_27890_27949[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (32))){
var inst_27832 = (state_27873[(14)]);
var state_27873__$1 = state_27873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27873__$1,(35),out,inst_27832);
} else {
if((state_val_27874 === (33))){
var inst_27825 = (state_27873[(12)]);
var inst_27803 = inst_27825;
var state_27873__$1 = (function (){var statearr_27891 = state_27873;
(statearr_27891[(7)] = inst_27803);

return statearr_27891;
})();
var statearr_27892_27950 = state_27873__$1;
(statearr_27892_27950[(2)] = null);

(statearr_27892_27950[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (13))){
var inst_27803 = (state_27873[(7)]);
var inst_27810 = inst_27803.cljs$lang$protocol_mask$partition0$;
var inst_27811 = (inst_27810 & (64));
var inst_27812 = inst_27803.cljs$core$ISeq$;
var inst_27813 = (inst_27811) || (inst_27812);
var state_27873__$1 = state_27873;
if(cljs.core.truth_(inst_27813)){
var statearr_27893_27951 = state_27873__$1;
(statearr_27893_27951[(1)] = (16));

} else {
var statearr_27894_27952 = state_27873__$1;
(statearr_27894_27952[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (22))){
var inst_27832 = (state_27873[(14)]);
var inst_27833 = (state_27873[(11)]);
var inst_27831 = (state_27873[(2)]);
var inst_27832__$1 = cljs.core.nth.call(null,inst_27831,(0),null);
var inst_27833__$1 = cljs.core.nth.call(null,inst_27831,(1),null);
var inst_27834 = (inst_27832__$1 == null);
var inst_27835 = cljs.core._EQ_.call(null,inst_27833__$1,change);
var inst_27836 = (inst_27834) || (inst_27835);
var state_27873__$1 = (function (){var statearr_27895 = state_27873;
(statearr_27895[(14)] = inst_27832__$1);

(statearr_27895[(11)] = inst_27833__$1);

return statearr_27895;
})();
if(cljs.core.truth_(inst_27836)){
var statearr_27896_27953 = state_27873__$1;
(statearr_27896_27953[(1)] = (23));

} else {
var statearr_27897_27954 = state_27873__$1;
(statearr_27897_27954[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (36))){
var inst_27825 = (state_27873[(12)]);
var inst_27803 = inst_27825;
var state_27873__$1 = (function (){var statearr_27898 = state_27873;
(statearr_27898[(7)] = inst_27803);

return statearr_27898;
})();
var statearr_27899_27955 = state_27873__$1;
(statearr_27899_27955[(2)] = null);

(statearr_27899_27955[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (29))){
var inst_27847 = (state_27873[(9)]);
var state_27873__$1 = state_27873;
var statearr_27900_27956 = state_27873__$1;
(statearr_27900_27956[(2)] = inst_27847);

(statearr_27900_27956[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (6))){
var state_27873__$1 = state_27873;
var statearr_27901_27957 = state_27873__$1;
(statearr_27901_27957[(2)] = false);

(statearr_27901_27957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (28))){
var inst_27843 = (state_27873[(2)]);
var inst_27844 = calc_state.call(null);
var inst_27803 = inst_27844;
var state_27873__$1 = (function (){var statearr_27902 = state_27873;
(statearr_27902[(7)] = inst_27803);

(statearr_27902[(15)] = inst_27843);

return statearr_27902;
})();
var statearr_27903_27958 = state_27873__$1;
(statearr_27903_27958[(2)] = null);

(statearr_27903_27958[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (25))){
var inst_27869 = (state_27873[(2)]);
var state_27873__$1 = state_27873;
var statearr_27904_27959 = state_27873__$1;
(statearr_27904_27959[(2)] = inst_27869);

(statearr_27904_27959[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (34))){
var inst_27867 = (state_27873[(2)]);
var state_27873__$1 = state_27873;
var statearr_27905_27960 = state_27873__$1;
(statearr_27905_27960[(2)] = inst_27867);

(statearr_27905_27960[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (17))){
var state_27873__$1 = state_27873;
var statearr_27906_27961 = state_27873__$1;
(statearr_27906_27961[(2)] = false);

(statearr_27906_27961[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (3))){
var state_27873__$1 = state_27873;
var statearr_27907_27962 = state_27873__$1;
(statearr_27907_27962[(2)] = false);

(statearr_27907_27962[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (12))){
var inst_27871 = (state_27873[(2)]);
var state_27873__$1 = state_27873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27873__$1,inst_27871);
} else {
if((state_val_27874 === (2))){
var inst_27779 = (state_27873[(8)]);
var inst_27784 = inst_27779.cljs$lang$protocol_mask$partition0$;
var inst_27785 = (inst_27784 & (64));
var inst_27786 = inst_27779.cljs$core$ISeq$;
var inst_27787 = (inst_27785) || (inst_27786);
var state_27873__$1 = state_27873;
if(cljs.core.truth_(inst_27787)){
var statearr_27908_27963 = state_27873__$1;
(statearr_27908_27963[(1)] = (5));

} else {
var statearr_27909_27964 = state_27873__$1;
(statearr_27909_27964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (23))){
var inst_27832 = (state_27873[(14)]);
var inst_27838 = (inst_27832 == null);
var state_27873__$1 = state_27873;
if(cljs.core.truth_(inst_27838)){
var statearr_27910_27965 = state_27873__$1;
(statearr_27910_27965[(1)] = (26));

} else {
var statearr_27911_27966 = state_27873__$1;
(statearr_27911_27966[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (35))){
var inst_27858 = (state_27873[(2)]);
var state_27873__$1 = state_27873;
if(cljs.core.truth_(inst_27858)){
var statearr_27912_27967 = state_27873__$1;
(statearr_27912_27967[(1)] = (36));

} else {
var statearr_27913_27968 = state_27873__$1;
(statearr_27913_27968[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (19))){
var inst_27803 = (state_27873[(7)]);
var inst_27822 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27803);
var state_27873__$1 = state_27873;
var statearr_27914_27969 = state_27873__$1;
(statearr_27914_27969[(2)] = inst_27822);

(statearr_27914_27969[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (11))){
var inst_27803 = (state_27873[(7)]);
var inst_27807 = (inst_27803 == null);
var inst_27808 = cljs.core.not.call(null,inst_27807);
var state_27873__$1 = state_27873;
if(inst_27808){
var statearr_27915_27970 = state_27873__$1;
(statearr_27915_27970[(1)] = (13));

} else {
var statearr_27916_27971 = state_27873__$1;
(statearr_27916_27971[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (9))){
var inst_27779 = (state_27873[(8)]);
var state_27873__$1 = state_27873;
var statearr_27917_27972 = state_27873__$1;
(statearr_27917_27972[(2)] = inst_27779);

(statearr_27917_27972[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (5))){
var state_27873__$1 = state_27873;
var statearr_27918_27973 = state_27873__$1;
(statearr_27918_27973[(2)] = true);

(statearr_27918_27973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (14))){
var state_27873__$1 = state_27873;
var statearr_27919_27974 = state_27873__$1;
(statearr_27919_27974[(2)] = false);

(statearr_27919_27974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (26))){
var inst_27833 = (state_27873[(11)]);
var inst_27840 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27833);
var state_27873__$1 = state_27873;
var statearr_27920_27975 = state_27873__$1;
(statearr_27920_27975[(2)] = inst_27840);

(statearr_27920_27975[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (16))){
var state_27873__$1 = state_27873;
var statearr_27921_27976 = state_27873__$1;
(statearr_27921_27976[(2)] = true);

(statearr_27921_27976[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (38))){
var inst_27863 = (state_27873[(2)]);
var state_27873__$1 = state_27873;
var statearr_27922_27977 = state_27873__$1;
(statearr_27922_27977[(2)] = inst_27863);

(statearr_27922_27977[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (30))){
var inst_27826 = (state_27873[(10)]);
var inst_27833 = (state_27873[(11)]);
var inst_27827 = (state_27873[(13)]);
var inst_27850 = cljs.core.empty_QMARK_.call(null,inst_27826);
var inst_27851 = inst_27827.call(null,inst_27833);
var inst_27852 = cljs.core.not.call(null,inst_27851);
var inst_27853 = (inst_27850) && (inst_27852);
var state_27873__$1 = state_27873;
var statearr_27923_27978 = state_27873__$1;
(statearr_27923_27978[(2)] = inst_27853);

(statearr_27923_27978[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (10))){
var inst_27779 = (state_27873[(8)]);
var inst_27799 = (state_27873[(2)]);
var inst_27800 = cljs.core.get.call(null,inst_27799,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27801 = cljs.core.get.call(null,inst_27799,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27802 = cljs.core.get.call(null,inst_27799,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27803 = inst_27779;
var state_27873__$1 = (function (){var statearr_27924 = state_27873;
(statearr_27924[(16)] = inst_27802);

(statearr_27924[(17)] = inst_27800);

(statearr_27924[(7)] = inst_27803);

(statearr_27924[(18)] = inst_27801);

return statearr_27924;
})();
var statearr_27925_27979 = state_27873__$1;
(statearr_27925_27979[(2)] = null);

(statearr_27925_27979[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (18))){
var inst_27817 = (state_27873[(2)]);
var state_27873__$1 = state_27873;
var statearr_27926_27980 = state_27873__$1;
(statearr_27926_27980[(2)] = inst_27817);

(statearr_27926_27980[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (37))){
var state_27873__$1 = state_27873;
var statearr_27927_27981 = state_27873__$1;
(statearr_27927_27981[(2)] = null);

(statearr_27927_27981[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (8))){
var inst_27779 = (state_27873[(8)]);
var inst_27796 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27779);
var state_27873__$1 = state_27873;
var statearr_27928_27982 = state_27873__$1;
(statearr_27928_27982[(2)] = inst_27796);

(statearr_27928_27982[(1)] = (10));


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
});})(c__20007__auto___27936,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19942__auto__,c__20007__auto___27936,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19943__auto__ = null;
var cljs$core$async$mix_$_state_machine__19943__auto____0 = (function (){
var statearr_27932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27932[(0)] = cljs$core$async$mix_$_state_machine__19943__auto__);

(statearr_27932[(1)] = (1));

return statearr_27932;
});
var cljs$core$async$mix_$_state_machine__19943__auto____1 = (function (state_27873){
while(true){
var ret_value__19944__auto__ = (function (){try{while(true){
var result__19945__auto__ = switch__19942__auto__.call(null,state_27873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19945__auto__;
}
break;
}
}catch (e27933){if((e27933 instanceof Object)){
var ex__19946__auto__ = e27933;
var statearr_27934_27983 = state_27873;
(statearr_27934_27983[(5)] = ex__19946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27984 = state_27873;
state_27873 = G__27984;
continue;
} else {
return ret_value__19944__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19943__auto__ = function(state_27873){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19943__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19943__auto____1.call(this,state_27873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19943__auto____0;
cljs$core$async$mix_$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19943__auto____1;
return cljs$core$async$mix_$_state_machine__19943__auto__;
})()
;})(switch__19942__auto__,c__20007__auto___27936,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20009__auto__ = (function (){var statearr_27935 = f__20008__auto__.call(null);
(statearr_27935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___27936);

return statearr_27935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___27936,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17172__auto__ = (((p == null))?null:p);
var m__17173__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17172__auto__)]);
if(!((m__17173__auto__ == null))){
return m__17173__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17173__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17173__auto____$1 == null))){
return m__17173__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17172__auto__ = (((p == null))?null:p);
var m__17173__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17172__auto__)]);
if(!((m__17173__auto__ == null))){
return m__17173__auto__.call(null,p,v,ch);
} else {
var m__17173__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17173__auto____$1 == null))){
return m__17173__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args27985 = [];
var len__17575__auto___27988 = arguments.length;
var i__17576__auto___27989 = (0);
while(true){
if((i__17576__auto___27989 < len__17575__auto___27988)){
args27985.push((arguments[i__17576__auto___27989]));

var G__27990 = (i__17576__auto___27989 + (1));
i__17576__auto___27989 = G__27990;
continue;
} else {
}
break;
}

var G__27987 = args27985.length;
switch (G__27987) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27985.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17172__auto__ = (((p == null))?null:p);
var m__17173__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17172__auto__)]);
if(!((m__17173__auto__ == null))){
return m__17173__auto__.call(null,p);
} else {
var m__17173__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17173__auto____$1 == null))){
return m__17173__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17172__auto__ = (((p == null))?null:p);
var m__17173__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17172__auto__)]);
if(!((m__17173__auto__ == null))){
return m__17173__auto__.call(null,p,v);
} else {
var m__17173__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17173__auto____$1 == null))){
return m__17173__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

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
var args27993 = [];
var len__17575__auto___28118 = arguments.length;
var i__17576__auto___28119 = (0);
while(true){
if((i__17576__auto___28119 < len__17575__auto___28118)){
args27993.push((arguments[i__17576__auto___28119]));

var G__28120 = (i__17576__auto___28119 + (1));
i__17576__auto___28119 = G__28120;
continue;
} else {
}
break;
}

var G__27995 = args27993.length;
switch (G__27995) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27993.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16517__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16517__auto__)){
return or__16517__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16517__auto__,mults){
return (function (p1__27992_SHARP_){
if(cljs.core.truth_(p1__27992_SHARP_.call(null,topic))){
return p1__27992_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27992_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16517__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27996 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27996 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27997){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27997 = meta27997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27998,meta27997__$1){
var self__ = this;
var _27998__$1 = this;
return (new cljs.core.async.t_cljs$core$async27996(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27997__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27996.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27998){
var self__ = this;
var _27998__$1 = this;
return self__.meta27997;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27996.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27996.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27996.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async27996.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27996.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27996.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27996.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27996.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27997","meta27997",-2043377991,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27996.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27996";

cljs.core.async.t_cljs$core$async27996.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17115__auto__,writer__17116__auto__,opt__17117__auto__){
return cljs.core._write.call(null,writer__17116__auto__,"cljs.core.async/t_cljs$core$async27996");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async27996 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27996(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27997){
return (new cljs.core.async.t_cljs$core$async27996(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27997));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27996(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20007__auto___28122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___28122,mults,ensure_mult,p){
return (function (){
var f__20008__auto__ = (function (){var switch__19942__auto__ = ((function (c__20007__auto___28122,mults,ensure_mult,p){
return (function (state_28070){
var state_val_28071 = (state_28070[(1)]);
if((state_val_28071 === (7))){
var inst_28066 = (state_28070[(2)]);
var state_28070__$1 = state_28070;
var statearr_28072_28123 = state_28070__$1;
(statearr_28072_28123[(2)] = inst_28066);

(statearr_28072_28123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28071 === (20))){
var state_28070__$1 = state_28070;
var statearr_28073_28124 = state_28070__$1;
(statearr_28073_28124[(2)] = null);

(statearr_28073_28124[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28071 === (1))){
var state_28070__$1 = state_28070;
var statearr_28074_28125 = state_28070__$1;
(statearr_28074_28125[(2)] = null);

(statearr_28074_28125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28071 === (24))){
var inst_28049 = (state_28070[(7)]);
var inst_28058 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28049);
var state_28070__$1 = state_28070;
var statearr_28075_28126 = state_28070__$1;
(statearr_28075_28126[(2)] = inst_28058);

(statearr_28075_28126[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28071 === (4))){
var inst_28001 = (state_28070[(8)]);
var inst_28001__$1 = (state_28070[(2)]);
var inst_28002 = (inst_28001__$1 == null);
var state_28070__$1 = (function (){var statearr_28076 = state_28070;
(statearr_28076[(8)] = inst_28001__$1);

return statearr_28076;
})();
if(cljs.core.truth_(inst_28002)){
var statearr_28077_28127 = state_28070__$1;
(statearr_28077_28127[(1)] = (5));

} else {
var statearr_28078_28128 = state_28070__$1;
(statearr_28078_28128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28071 === (15))){
var inst_28043 = (state_28070[(2)]);
var state_28070__$1 = state_28070;
var statearr_28079_28129 = state_28070__$1;
(statearr_28079_28129[(2)] = inst_28043);

(statearr_28079_28129[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28071 === (21))){
var inst_28063 = (state_28070[(2)]);
var state_28070__$1 = (function (){var statearr_28080 = state_28070;
(statearr_28080[(9)] = inst_28063);

return statearr_28080;
})();
var statearr_28081_28130 = state_28070__$1;
(statearr_28081_28130[(2)] = null);

(statearr_28081_28130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28071 === (13))){
var inst_28025 = (state_28070[(10)]);
var inst_28027 = cljs.core.chunked_seq_QMARK_.call(null,inst_28025);
var state_28070__$1 = state_28070;
if(inst_28027){
var statearr_28082_28131 = state_28070__$1;
(statearr_28082_28131[(1)] = (16));

} else {
var statearr_28083_28132 = state_28070__$1;
(statearr_28083_28132[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28071 === (22))){
var inst_28055 = (state_28070[(2)]);
var state_28070__$1 = state_28070;
if(cljs.core.truth_(inst_28055)){
var statearr_28084_28133 = state_28070__$1;
(statearr_28084_28133[(1)] = (23));

} else {
var statearr_28085_28134 = state_28070__$1;
(statearr_28085_28134[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28071 === (6))){
var inst_28051 = (state_28070[(11)]);
var inst_28001 = (state_28070[(8)]);
var inst_28049 = (state_28070[(7)]);
var inst_28049__$1 = topic_fn.call(null,inst_28001);
var inst_28050 = cljs.core.deref.call(null,mults);
var inst_28051__$1 = cljs.core.get.call(null,inst_28050,inst_28049__$1);
var state_28070__$1 = (function (){var statearr_28086 = state_28070;
(statearr_28086[(11)] = inst_28051__$1);

(statearr_28086[(7)] = inst_28049__$1);

return statearr_28086;
})();
if(cljs.core.truth_(inst_28051__$1)){
var statearr_28087_28135 = state_28070__$1;
(statearr_28087_28135[(1)] = (19));

} else {
var statearr_28088_28136 = state_28070__$1;
(statearr_28088_28136[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28071 === (25))){
var inst_28060 = (state_28070[(2)]);
var state_28070__$1 = state_28070;
var statearr_28089_28137 = state_28070__$1;
(statearr_28089_28137[(2)] = inst_28060);

(statearr_28089_28137[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28071 === (17))){
var inst_28025 = (state_28070[(10)]);
var inst_28034 = cljs.core.first.call(null,inst_28025);
var inst_28035 = cljs.core.async.muxch_STAR_.call(null,inst_28034);
var inst_28036 = cljs.core.async.close_BANG_.call(null,inst_28035);
var inst_28037 = cljs.core.next.call(null,inst_28025);
var inst_28011 = inst_28037;
var inst_28012 = null;
var inst_28013 = (0);
var inst_28014 = (0);
var state_28070__$1 = (function (){var statearr_28090 = state_28070;
(statearr_28090[(12)] = inst_28011);

(statearr_28090[(13)] = inst_28036);

(statearr_28090[(14)] = inst_28014);

(statearr_28090[(15)] = inst_28013);

(statearr_28090[(16)] = inst_28012);

return statearr_28090;
})();
var statearr_28091_28138 = state_28070__$1;
(statearr_28091_28138[(2)] = null);

(statearr_28091_28138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28071 === (3))){
var inst_28068 = (state_28070[(2)]);
var state_28070__$1 = state_28070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28070__$1,inst_28068);
} else {
if((state_val_28071 === (12))){
var inst_28045 = (state_28070[(2)]);
var state_28070__$1 = state_28070;
var statearr_28092_28139 = state_28070__$1;
(statearr_28092_28139[(2)] = inst_28045);

(statearr_28092_28139[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28071 === (2))){
var state_28070__$1 = state_28070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28070__$1,(4),ch);
} else {
if((state_val_28071 === (23))){
var state_28070__$1 = state_28070;
var statearr_28093_28140 = state_28070__$1;
(statearr_28093_28140[(2)] = null);

(statearr_28093_28140[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28071 === (19))){
var inst_28051 = (state_28070[(11)]);
var inst_28001 = (state_28070[(8)]);
var inst_28053 = cljs.core.async.muxch_STAR_.call(null,inst_28051);
var state_28070__$1 = state_28070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28070__$1,(22),inst_28053,inst_28001);
} else {
if((state_val_28071 === (11))){
var inst_28025 = (state_28070[(10)]);
var inst_28011 = (state_28070[(12)]);
var inst_28025__$1 = cljs.core.seq.call(null,inst_28011);
var state_28070__$1 = (function (){var statearr_28094 = state_28070;
(statearr_28094[(10)] = inst_28025__$1);

return statearr_28094;
})();
if(inst_28025__$1){
var statearr_28095_28141 = state_28070__$1;
(statearr_28095_28141[(1)] = (13));

} else {
var statearr_28096_28142 = state_28070__$1;
(statearr_28096_28142[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28071 === (9))){
var inst_28047 = (state_28070[(2)]);
var state_28070__$1 = state_28070;
var statearr_28097_28143 = state_28070__$1;
(statearr_28097_28143[(2)] = inst_28047);

(statearr_28097_28143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28071 === (5))){
var inst_28008 = cljs.core.deref.call(null,mults);
var inst_28009 = cljs.core.vals.call(null,inst_28008);
var inst_28010 = cljs.core.seq.call(null,inst_28009);
var inst_28011 = inst_28010;
var inst_28012 = null;
var inst_28013 = (0);
var inst_28014 = (0);
var state_28070__$1 = (function (){var statearr_28098 = state_28070;
(statearr_28098[(12)] = inst_28011);

(statearr_28098[(14)] = inst_28014);

(statearr_28098[(15)] = inst_28013);

(statearr_28098[(16)] = inst_28012);

return statearr_28098;
})();
var statearr_28099_28144 = state_28070__$1;
(statearr_28099_28144[(2)] = null);

(statearr_28099_28144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28071 === (14))){
var state_28070__$1 = state_28070;
var statearr_28103_28145 = state_28070__$1;
(statearr_28103_28145[(2)] = null);

(statearr_28103_28145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28071 === (16))){
var inst_28025 = (state_28070[(10)]);
var inst_28029 = cljs.core.chunk_first.call(null,inst_28025);
var inst_28030 = cljs.core.chunk_rest.call(null,inst_28025);
var inst_28031 = cljs.core.count.call(null,inst_28029);
var inst_28011 = inst_28030;
var inst_28012 = inst_28029;
var inst_28013 = inst_28031;
var inst_28014 = (0);
var state_28070__$1 = (function (){var statearr_28104 = state_28070;
(statearr_28104[(12)] = inst_28011);

(statearr_28104[(14)] = inst_28014);

(statearr_28104[(15)] = inst_28013);

(statearr_28104[(16)] = inst_28012);

return statearr_28104;
})();
var statearr_28105_28146 = state_28070__$1;
(statearr_28105_28146[(2)] = null);

(statearr_28105_28146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28071 === (10))){
var inst_28011 = (state_28070[(12)]);
var inst_28014 = (state_28070[(14)]);
var inst_28013 = (state_28070[(15)]);
var inst_28012 = (state_28070[(16)]);
var inst_28019 = cljs.core._nth.call(null,inst_28012,inst_28014);
var inst_28020 = cljs.core.async.muxch_STAR_.call(null,inst_28019);
var inst_28021 = cljs.core.async.close_BANG_.call(null,inst_28020);
var inst_28022 = (inst_28014 + (1));
var tmp28100 = inst_28011;
var tmp28101 = inst_28013;
var tmp28102 = inst_28012;
var inst_28011__$1 = tmp28100;
var inst_28012__$1 = tmp28102;
var inst_28013__$1 = tmp28101;
var inst_28014__$1 = inst_28022;
var state_28070__$1 = (function (){var statearr_28106 = state_28070;
(statearr_28106[(12)] = inst_28011__$1);

(statearr_28106[(17)] = inst_28021);

(statearr_28106[(14)] = inst_28014__$1);

(statearr_28106[(15)] = inst_28013__$1);

(statearr_28106[(16)] = inst_28012__$1);

return statearr_28106;
})();
var statearr_28107_28147 = state_28070__$1;
(statearr_28107_28147[(2)] = null);

(statearr_28107_28147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28071 === (18))){
var inst_28040 = (state_28070[(2)]);
var state_28070__$1 = state_28070;
var statearr_28108_28148 = state_28070__$1;
(statearr_28108_28148[(2)] = inst_28040);

(statearr_28108_28148[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28071 === (8))){
var inst_28014 = (state_28070[(14)]);
var inst_28013 = (state_28070[(15)]);
var inst_28016 = (inst_28014 < inst_28013);
var inst_28017 = inst_28016;
var state_28070__$1 = state_28070;
if(cljs.core.truth_(inst_28017)){
var statearr_28109_28149 = state_28070__$1;
(statearr_28109_28149[(1)] = (10));

} else {
var statearr_28110_28150 = state_28070__$1;
(statearr_28110_28150[(1)] = (11));

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
});})(c__20007__auto___28122,mults,ensure_mult,p))
;
return ((function (switch__19942__auto__,c__20007__auto___28122,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19943__auto__ = null;
var cljs$core$async$state_machine__19943__auto____0 = (function (){
var statearr_28114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28114[(0)] = cljs$core$async$state_machine__19943__auto__);

(statearr_28114[(1)] = (1));

return statearr_28114;
});
var cljs$core$async$state_machine__19943__auto____1 = (function (state_28070){
while(true){
var ret_value__19944__auto__ = (function (){try{while(true){
var result__19945__auto__ = switch__19942__auto__.call(null,state_28070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19945__auto__;
}
break;
}
}catch (e28115){if((e28115 instanceof Object)){
var ex__19946__auto__ = e28115;
var statearr_28116_28151 = state_28070;
(statearr_28116_28151[(5)] = ex__19946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28152 = state_28070;
state_28070 = G__28152;
continue;
} else {
return ret_value__19944__auto__;
}
break;
}
});
cljs$core$async$state_machine__19943__auto__ = function(state_28070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19943__auto____1.call(this,state_28070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19943__auto____0;
cljs$core$async$state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19943__auto____1;
return cljs$core$async$state_machine__19943__auto__;
})()
;})(switch__19942__auto__,c__20007__auto___28122,mults,ensure_mult,p))
})();
var state__20009__auto__ = (function (){var statearr_28117 = f__20008__auto__.call(null);
(statearr_28117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___28122);

return statearr_28117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___28122,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args28153 = [];
var len__17575__auto___28156 = arguments.length;
var i__17576__auto___28157 = (0);
while(true){
if((i__17576__auto___28157 < len__17575__auto___28156)){
args28153.push((arguments[i__17576__auto___28157]));

var G__28158 = (i__17576__auto___28157 + (1));
i__17576__auto___28157 = G__28158;
continue;
} else {
}
break;
}

var G__28155 = args28153.length;
switch (G__28155) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28153.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args28160 = [];
var len__17575__auto___28163 = arguments.length;
var i__17576__auto___28164 = (0);
while(true){
if((i__17576__auto___28164 < len__17575__auto___28163)){
args28160.push((arguments[i__17576__auto___28164]));

var G__28165 = (i__17576__auto___28164 + (1));
i__17576__auto___28164 = G__28165;
continue;
} else {
}
break;
}

var G__28162 = args28160.length;
switch (G__28162) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28160.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
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
var args28167 = [];
var len__17575__auto___28238 = arguments.length;
var i__17576__auto___28239 = (0);
while(true){
if((i__17576__auto___28239 < len__17575__auto___28238)){
args28167.push((arguments[i__17576__auto___28239]));

var G__28240 = (i__17576__auto___28239 + (1));
i__17576__auto___28239 = G__28240;
continue;
} else {
}
break;
}

var G__28169 = args28167.length;
switch (G__28169) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28167.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20007__auto___28242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___28242,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20008__auto__ = (function (){var switch__19942__auto__ = ((function (c__20007__auto___28242,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28208){
var state_val_28209 = (state_28208[(1)]);
if((state_val_28209 === (7))){
var state_28208__$1 = state_28208;
var statearr_28210_28243 = state_28208__$1;
(statearr_28210_28243[(2)] = null);

(statearr_28210_28243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (1))){
var state_28208__$1 = state_28208;
var statearr_28211_28244 = state_28208__$1;
(statearr_28211_28244[(2)] = null);

(statearr_28211_28244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (4))){
var inst_28172 = (state_28208[(7)]);
var inst_28174 = (inst_28172 < cnt);
var state_28208__$1 = state_28208;
if(cljs.core.truth_(inst_28174)){
var statearr_28212_28245 = state_28208__$1;
(statearr_28212_28245[(1)] = (6));

} else {
var statearr_28213_28246 = state_28208__$1;
(statearr_28213_28246[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (15))){
var inst_28204 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28214_28247 = state_28208__$1;
(statearr_28214_28247[(2)] = inst_28204);

(statearr_28214_28247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (13))){
var inst_28197 = cljs.core.async.close_BANG_.call(null,out);
var state_28208__$1 = state_28208;
var statearr_28215_28248 = state_28208__$1;
(statearr_28215_28248[(2)] = inst_28197);

(statearr_28215_28248[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (6))){
var state_28208__$1 = state_28208;
var statearr_28216_28249 = state_28208__$1;
(statearr_28216_28249[(2)] = null);

(statearr_28216_28249[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (3))){
var inst_28206 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28208__$1,inst_28206);
} else {
if((state_val_28209 === (12))){
var inst_28194 = (state_28208[(8)]);
var inst_28194__$1 = (state_28208[(2)]);
var inst_28195 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28194__$1);
var state_28208__$1 = (function (){var statearr_28217 = state_28208;
(statearr_28217[(8)] = inst_28194__$1);

return statearr_28217;
})();
if(cljs.core.truth_(inst_28195)){
var statearr_28218_28250 = state_28208__$1;
(statearr_28218_28250[(1)] = (13));

} else {
var statearr_28219_28251 = state_28208__$1;
(statearr_28219_28251[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (2))){
var inst_28171 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28172 = (0);
var state_28208__$1 = (function (){var statearr_28220 = state_28208;
(statearr_28220[(7)] = inst_28172);

(statearr_28220[(9)] = inst_28171);

return statearr_28220;
})();
var statearr_28221_28252 = state_28208__$1;
(statearr_28221_28252[(2)] = null);

(statearr_28221_28252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (11))){
var inst_28172 = (state_28208[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28208,(10),Object,null,(9));
var inst_28181 = chs__$1.call(null,inst_28172);
var inst_28182 = done.call(null,inst_28172);
var inst_28183 = cljs.core.async.take_BANG_.call(null,inst_28181,inst_28182);
var state_28208__$1 = state_28208;
var statearr_28222_28253 = state_28208__$1;
(statearr_28222_28253[(2)] = inst_28183);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28208__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (9))){
var inst_28172 = (state_28208[(7)]);
var inst_28185 = (state_28208[(2)]);
var inst_28186 = (inst_28172 + (1));
var inst_28172__$1 = inst_28186;
var state_28208__$1 = (function (){var statearr_28223 = state_28208;
(statearr_28223[(10)] = inst_28185);

(statearr_28223[(7)] = inst_28172__$1);

return statearr_28223;
})();
var statearr_28224_28254 = state_28208__$1;
(statearr_28224_28254[(2)] = null);

(statearr_28224_28254[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (5))){
var inst_28192 = (state_28208[(2)]);
var state_28208__$1 = (function (){var statearr_28225 = state_28208;
(statearr_28225[(11)] = inst_28192);

return statearr_28225;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28208__$1,(12),dchan);
} else {
if((state_val_28209 === (14))){
var inst_28194 = (state_28208[(8)]);
var inst_28199 = cljs.core.apply.call(null,f,inst_28194);
var state_28208__$1 = state_28208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28208__$1,(16),out,inst_28199);
} else {
if((state_val_28209 === (16))){
var inst_28201 = (state_28208[(2)]);
var state_28208__$1 = (function (){var statearr_28226 = state_28208;
(statearr_28226[(12)] = inst_28201);

return statearr_28226;
})();
var statearr_28227_28255 = state_28208__$1;
(statearr_28227_28255[(2)] = null);

(statearr_28227_28255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (10))){
var inst_28176 = (state_28208[(2)]);
var inst_28177 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28208__$1 = (function (){var statearr_28228 = state_28208;
(statearr_28228[(13)] = inst_28176);

return statearr_28228;
})();
var statearr_28229_28256 = state_28208__$1;
(statearr_28229_28256[(2)] = inst_28177);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28208__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (8))){
var inst_28190 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28230_28257 = state_28208__$1;
(statearr_28230_28257[(2)] = inst_28190);

(statearr_28230_28257[(1)] = (5));


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
});})(c__20007__auto___28242,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19942__auto__,c__20007__auto___28242,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19943__auto__ = null;
var cljs$core$async$state_machine__19943__auto____0 = (function (){
var statearr_28234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28234[(0)] = cljs$core$async$state_machine__19943__auto__);

(statearr_28234[(1)] = (1));

return statearr_28234;
});
var cljs$core$async$state_machine__19943__auto____1 = (function (state_28208){
while(true){
var ret_value__19944__auto__ = (function (){try{while(true){
var result__19945__auto__ = switch__19942__auto__.call(null,state_28208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19945__auto__;
}
break;
}
}catch (e28235){if((e28235 instanceof Object)){
var ex__19946__auto__ = e28235;
var statearr_28236_28258 = state_28208;
(statearr_28236_28258[(5)] = ex__19946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28259 = state_28208;
state_28208 = G__28259;
continue;
} else {
return ret_value__19944__auto__;
}
break;
}
});
cljs$core$async$state_machine__19943__auto__ = function(state_28208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19943__auto____1.call(this,state_28208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19943__auto____0;
cljs$core$async$state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19943__auto____1;
return cljs$core$async$state_machine__19943__auto__;
})()
;})(switch__19942__auto__,c__20007__auto___28242,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20009__auto__ = (function (){var statearr_28237 = f__20008__auto__.call(null);
(statearr_28237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___28242);

return statearr_28237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___28242,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args28261 = [];
var len__17575__auto___28317 = arguments.length;
var i__17576__auto___28318 = (0);
while(true){
if((i__17576__auto___28318 < len__17575__auto___28317)){
args28261.push((arguments[i__17576__auto___28318]));

var G__28319 = (i__17576__auto___28318 + (1));
i__17576__auto___28318 = G__28319;
continue;
} else {
}
break;
}

var G__28263 = args28261.length;
switch (G__28263) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28261.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20007__auto___28321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___28321,out){
return (function (){
var f__20008__auto__ = (function (){var switch__19942__auto__ = ((function (c__20007__auto___28321,out){
return (function (state_28293){
var state_val_28294 = (state_28293[(1)]);
if((state_val_28294 === (7))){
var inst_28273 = (state_28293[(7)]);
var inst_28272 = (state_28293[(8)]);
var inst_28272__$1 = (state_28293[(2)]);
var inst_28273__$1 = cljs.core.nth.call(null,inst_28272__$1,(0),null);
var inst_28274 = cljs.core.nth.call(null,inst_28272__$1,(1),null);
var inst_28275 = (inst_28273__$1 == null);
var state_28293__$1 = (function (){var statearr_28295 = state_28293;
(statearr_28295[(7)] = inst_28273__$1);

(statearr_28295[(8)] = inst_28272__$1);

(statearr_28295[(9)] = inst_28274);

return statearr_28295;
})();
if(cljs.core.truth_(inst_28275)){
var statearr_28296_28322 = state_28293__$1;
(statearr_28296_28322[(1)] = (8));

} else {
var statearr_28297_28323 = state_28293__$1;
(statearr_28297_28323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (1))){
var inst_28264 = cljs.core.vec.call(null,chs);
var inst_28265 = inst_28264;
var state_28293__$1 = (function (){var statearr_28298 = state_28293;
(statearr_28298[(10)] = inst_28265);

return statearr_28298;
})();
var statearr_28299_28324 = state_28293__$1;
(statearr_28299_28324[(2)] = null);

(statearr_28299_28324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (4))){
var inst_28265 = (state_28293[(10)]);
var state_28293__$1 = state_28293;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28293__$1,(7),inst_28265);
} else {
if((state_val_28294 === (6))){
var inst_28289 = (state_28293[(2)]);
var state_28293__$1 = state_28293;
var statearr_28300_28325 = state_28293__$1;
(statearr_28300_28325[(2)] = inst_28289);

(statearr_28300_28325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (3))){
var inst_28291 = (state_28293[(2)]);
var state_28293__$1 = state_28293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28293__$1,inst_28291);
} else {
if((state_val_28294 === (2))){
var inst_28265 = (state_28293[(10)]);
var inst_28267 = cljs.core.count.call(null,inst_28265);
var inst_28268 = (inst_28267 > (0));
var state_28293__$1 = state_28293;
if(cljs.core.truth_(inst_28268)){
var statearr_28302_28326 = state_28293__$1;
(statearr_28302_28326[(1)] = (4));

} else {
var statearr_28303_28327 = state_28293__$1;
(statearr_28303_28327[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (11))){
var inst_28265 = (state_28293[(10)]);
var inst_28282 = (state_28293[(2)]);
var tmp28301 = inst_28265;
var inst_28265__$1 = tmp28301;
var state_28293__$1 = (function (){var statearr_28304 = state_28293;
(statearr_28304[(10)] = inst_28265__$1);

(statearr_28304[(11)] = inst_28282);

return statearr_28304;
})();
var statearr_28305_28328 = state_28293__$1;
(statearr_28305_28328[(2)] = null);

(statearr_28305_28328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (9))){
var inst_28273 = (state_28293[(7)]);
var state_28293__$1 = state_28293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28293__$1,(11),out,inst_28273);
} else {
if((state_val_28294 === (5))){
var inst_28287 = cljs.core.async.close_BANG_.call(null,out);
var state_28293__$1 = state_28293;
var statearr_28306_28329 = state_28293__$1;
(statearr_28306_28329[(2)] = inst_28287);

(statearr_28306_28329[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (10))){
var inst_28285 = (state_28293[(2)]);
var state_28293__$1 = state_28293;
var statearr_28307_28330 = state_28293__$1;
(statearr_28307_28330[(2)] = inst_28285);

(statearr_28307_28330[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (8))){
var inst_28273 = (state_28293[(7)]);
var inst_28265 = (state_28293[(10)]);
var inst_28272 = (state_28293[(8)]);
var inst_28274 = (state_28293[(9)]);
var inst_28277 = (function (){var cs = inst_28265;
var vec__28270 = inst_28272;
var v = inst_28273;
var c = inst_28274;
return ((function (cs,vec__28270,v,c,inst_28273,inst_28265,inst_28272,inst_28274,state_val_28294,c__20007__auto___28321,out){
return (function (p1__28260_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28260_SHARP_);
});
;})(cs,vec__28270,v,c,inst_28273,inst_28265,inst_28272,inst_28274,state_val_28294,c__20007__auto___28321,out))
})();
var inst_28278 = cljs.core.filterv.call(null,inst_28277,inst_28265);
var inst_28265__$1 = inst_28278;
var state_28293__$1 = (function (){var statearr_28308 = state_28293;
(statearr_28308[(10)] = inst_28265__$1);

return statearr_28308;
})();
var statearr_28309_28331 = state_28293__$1;
(statearr_28309_28331[(2)] = null);

(statearr_28309_28331[(1)] = (2));


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
});})(c__20007__auto___28321,out))
;
return ((function (switch__19942__auto__,c__20007__auto___28321,out){
return (function() {
var cljs$core$async$state_machine__19943__auto__ = null;
var cljs$core$async$state_machine__19943__auto____0 = (function (){
var statearr_28313 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28313[(0)] = cljs$core$async$state_machine__19943__auto__);

(statearr_28313[(1)] = (1));

return statearr_28313;
});
var cljs$core$async$state_machine__19943__auto____1 = (function (state_28293){
while(true){
var ret_value__19944__auto__ = (function (){try{while(true){
var result__19945__auto__ = switch__19942__auto__.call(null,state_28293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19945__auto__;
}
break;
}
}catch (e28314){if((e28314 instanceof Object)){
var ex__19946__auto__ = e28314;
var statearr_28315_28332 = state_28293;
(statearr_28315_28332[(5)] = ex__19946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28333 = state_28293;
state_28293 = G__28333;
continue;
} else {
return ret_value__19944__auto__;
}
break;
}
});
cljs$core$async$state_machine__19943__auto__ = function(state_28293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19943__auto____1.call(this,state_28293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19943__auto____0;
cljs$core$async$state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19943__auto____1;
return cljs$core$async$state_machine__19943__auto__;
})()
;})(switch__19942__auto__,c__20007__auto___28321,out))
})();
var state__20009__auto__ = (function (){var statearr_28316 = f__20008__auto__.call(null);
(statearr_28316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___28321);

return statearr_28316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___28321,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args28334 = [];
var len__17575__auto___28383 = arguments.length;
var i__17576__auto___28384 = (0);
while(true){
if((i__17576__auto___28384 < len__17575__auto___28383)){
args28334.push((arguments[i__17576__auto___28384]));

var G__28385 = (i__17576__auto___28384 + (1));
i__17576__auto___28384 = G__28385;
continue;
} else {
}
break;
}

var G__28336 = args28334.length;
switch (G__28336) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28334.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20007__auto___28387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___28387,out){
return (function (){
var f__20008__auto__ = (function (){var switch__19942__auto__ = ((function (c__20007__auto___28387,out){
return (function (state_28360){
var state_val_28361 = (state_28360[(1)]);
if((state_val_28361 === (7))){
var inst_28342 = (state_28360[(7)]);
var inst_28342__$1 = (state_28360[(2)]);
var inst_28343 = (inst_28342__$1 == null);
var inst_28344 = cljs.core.not.call(null,inst_28343);
var state_28360__$1 = (function (){var statearr_28362 = state_28360;
(statearr_28362[(7)] = inst_28342__$1);

return statearr_28362;
})();
if(inst_28344){
var statearr_28363_28388 = state_28360__$1;
(statearr_28363_28388[(1)] = (8));

} else {
var statearr_28364_28389 = state_28360__$1;
(statearr_28364_28389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (1))){
var inst_28337 = (0);
var state_28360__$1 = (function (){var statearr_28365 = state_28360;
(statearr_28365[(8)] = inst_28337);

return statearr_28365;
})();
var statearr_28366_28390 = state_28360__$1;
(statearr_28366_28390[(2)] = null);

(statearr_28366_28390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (4))){
var state_28360__$1 = state_28360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28360__$1,(7),ch);
} else {
if((state_val_28361 === (6))){
var inst_28355 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
var statearr_28367_28391 = state_28360__$1;
(statearr_28367_28391[(2)] = inst_28355);

(statearr_28367_28391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (3))){
var inst_28357 = (state_28360[(2)]);
var inst_28358 = cljs.core.async.close_BANG_.call(null,out);
var state_28360__$1 = (function (){var statearr_28368 = state_28360;
(statearr_28368[(9)] = inst_28357);

return statearr_28368;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28360__$1,inst_28358);
} else {
if((state_val_28361 === (2))){
var inst_28337 = (state_28360[(8)]);
var inst_28339 = (inst_28337 < n);
var state_28360__$1 = state_28360;
if(cljs.core.truth_(inst_28339)){
var statearr_28369_28392 = state_28360__$1;
(statearr_28369_28392[(1)] = (4));

} else {
var statearr_28370_28393 = state_28360__$1;
(statearr_28370_28393[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (11))){
var inst_28337 = (state_28360[(8)]);
var inst_28347 = (state_28360[(2)]);
var inst_28348 = (inst_28337 + (1));
var inst_28337__$1 = inst_28348;
var state_28360__$1 = (function (){var statearr_28371 = state_28360;
(statearr_28371[(10)] = inst_28347);

(statearr_28371[(8)] = inst_28337__$1);

return statearr_28371;
})();
var statearr_28372_28394 = state_28360__$1;
(statearr_28372_28394[(2)] = null);

(statearr_28372_28394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (9))){
var state_28360__$1 = state_28360;
var statearr_28373_28395 = state_28360__$1;
(statearr_28373_28395[(2)] = null);

(statearr_28373_28395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (5))){
var state_28360__$1 = state_28360;
var statearr_28374_28396 = state_28360__$1;
(statearr_28374_28396[(2)] = null);

(statearr_28374_28396[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (10))){
var inst_28352 = (state_28360[(2)]);
var state_28360__$1 = state_28360;
var statearr_28375_28397 = state_28360__$1;
(statearr_28375_28397[(2)] = inst_28352);

(statearr_28375_28397[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28361 === (8))){
var inst_28342 = (state_28360[(7)]);
var state_28360__$1 = state_28360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28360__$1,(11),out,inst_28342);
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
});})(c__20007__auto___28387,out))
;
return ((function (switch__19942__auto__,c__20007__auto___28387,out){
return (function() {
var cljs$core$async$state_machine__19943__auto__ = null;
var cljs$core$async$state_machine__19943__auto____0 = (function (){
var statearr_28379 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28379[(0)] = cljs$core$async$state_machine__19943__auto__);

(statearr_28379[(1)] = (1));

return statearr_28379;
});
var cljs$core$async$state_machine__19943__auto____1 = (function (state_28360){
while(true){
var ret_value__19944__auto__ = (function (){try{while(true){
var result__19945__auto__ = switch__19942__auto__.call(null,state_28360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19945__auto__;
}
break;
}
}catch (e28380){if((e28380 instanceof Object)){
var ex__19946__auto__ = e28380;
var statearr_28381_28398 = state_28360;
(statearr_28381_28398[(5)] = ex__19946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28399 = state_28360;
state_28360 = G__28399;
continue;
} else {
return ret_value__19944__auto__;
}
break;
}
});
cljs$core$async$state_machine__19943__auto__ = function(state_28360){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19943__auto____1.call(this,state_28360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19943__auto____0;
cljs$core$async$state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19943__auto____1;
return cljs$core$async$state_machine__19943__auto__;
})()
;})(switch__19942__auto__,c__20007__auto___28387,out))
})();
var state__20009__auto__ = (function (){var statearr_28382 = f__20008__auto__.call(null);
(statearr_28382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___28387);

return statearr_28382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___28387,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28407 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28407 = (function (map_LT_,f,ch,meta28408){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28408 = meta28408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28409,meta28408__$1){
var self__ = this;
var _28409__$1 = this;
return (new cljs.core.async.t_cljs$core$async28407(self__.map_LT_,self__.f,self__.ch,meta28408__$1));
});

cljs.core.async.t_cljs$core$async28407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28409){
var self__ = this;
var _28409__$1 = this;
return self__.meta28408;
});

cljs.core.async.t_cljs$core$async28407.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28407.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28407.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28407.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28407.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28410 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28410 = (function (map_LT_,f,ch,meta28408,_,fn1,meta28411){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28408 = meta28408;
this._ = _;
this.fn1 = fn1;
this.meta28411 = meta28411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28412,meta28411__$1){
var self__ = this;
var _28412__$1 = this;
return (new cljs.core.async.t_cljs$core$async28410(self__.map_LT_,self__.f,self__.ch,self__.meta28408,self__._,self__.fn1,meta28411__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28410.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28412){
var self__ = this;
var _28412__$1 = this;
return self__.meta28411;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28410.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28410.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28410.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28400_SHARP_){
return f1.call(null,(((p1__28400_SHARP_ == null))?null:self__.f.call(null,p1__28400_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28410.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28408","meta28408",1732673954,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28407","cljs.core.async/t_cljs$core$async28407",-210506028,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28411","meta28411",-1257281328,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28410.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28410";

cljs.core.async.t_cljs$core$async28410.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17115__auto__,writer__17116__auto__,opt__17117__auto__){
return cljs.core._write.call(null,writer__17116__auto__,"cljs.core.async/t_cljs$core$async28410");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async28410 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28410(map_LT___$1,f__$1,ch__$1,meta28408__$1,___$2,fn1__$1,meta28411){
return (new cljs.core.async.t_cljs$core$async28410(map_LT___$1,f__$1,ch__$1,meta28408__$1,___$2,fn1__$1,meta28411));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28410(self__.map_LT_,self__.f,self__.ch,self__.meta28408,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16505__auto__ = ret;
if(cljs.core.truth_(and__16505__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16505__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28407.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28407.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28408","meta28408",1732673954,null)], null);
});

cljs.core.async.t_cljs$core$async28407.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28407.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28407";

cljs.core.async.t_cljs$core$async28407.cljs$lang$ctorPrWriter = (function (this__17115__auto__,writer__17116__auto__,opt__17117__auto__){
return cljs.core._write.call(null,writer__17116__auto__,"cljs.core.async/t_cljs$core$async28407");
});

cljs.core.async.__GT_t_cljs$core$async28407 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28407(map_LT___$1,f__$1,ch__$1,meta28408){
return (new cljs.core.async.t_cljs$core$async28407(map_LT___$1,f__$1,ch__$1,meta28408));
});

}

return (new cljs.core.async.t_cljs$core$async28407(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28416 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28416 = (function (map_GT_,f,ch,meta28417){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28417 = meta28417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28418,meta28417__$1){
var self__ = this;
var _28418__$1 = this;
return (new cljs.core.async.t_cljs$core$async28416(self__.map_GT_,self__.f,self__.ch,meta28417__$1));
});

cljs.core.async.t_cljs$core$async28416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28418){
var self__ = this;
var _28418__$1 = this;
return self__.meta28417;
});

cljs.core.async.t_cljs$core$async28416.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28416.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28416.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28416.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28416.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28416.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28416.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28417","meta28417",1848851101,null)], null);
});

cljs.core.async.t_cljs$core$async28416.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28416.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28416";

cljs.core.async.t_cljs$core$async28416.cljs$lang$ctorPrWriter = (function (this__17115__auto__,writer__17116__auto__,opt__17117__auto__){
return cljs.core._write.call(null,writer__17116__auto__,"cljs.core.async/t_cljs$core$async28416");
});

cljs.core.async.__GT_t_cljs$core$async28416 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28416(map_GT___$1,f__$1,ch__$1,meta28417){
return (new cljs.core.async.t_cljs$core$async28416(map_GT___$1,f__$1,ch__$1,meta28417));
});

}

return (new cljs.core.async.t_cljs$core$async28416(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28422 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28422 = (function (filter_GT_,p,ch,meta28423){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28423 = meta28423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28424,meta28423__$1){
var self__ = this;
var _28424__$1 = this;
return (new cljs.core.async.t_cljs$core$async28422(self__.filter_GT_,self__.p,self__.ch,meta28423__$1));
});

cljs.core.async.t_cljs$core$async28422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28424){
var self__ = this;
var _28424__$1 = this;
return self__.meta28423;
});

cljs.core.async.t_cljs$core$async28422.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28422.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28422.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28422.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28422.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28422.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28422.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28422.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28423","meta28423",-1729092098,null)], null);
});

cljs.core.async.t_cljs$core$async28422.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28422.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28422";

cljs.core.async.t_cljs$core$async28422.cljs$lang$ctorPrWriter = (function (this__17115__auto__,writer__17116__auto__,opt__17117__auto__){
return cljs.core._write.call(null,writer__17116__auto__,"cljs.core.async/t_cljs$core$async28422");
});

cljs.core.async.__GT_t_cljs$core$async28422 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28422(filter_GT___$1,p__$1,ch__$1,meta28423){
return (new cljs.core.async.t_cljs$core$async28422(filter_GT___$1,p__$1,ch__$1,meta28423));
});

}

return (new cljs.core.async.t_cljs$core$async28422(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args28425 = [];
var len__17575__auto___28469 = arguments.length;
var i__17576__auto___28470 = (0);
while(true){
if((i__17576__auto___28470 < len__17575__auto___28469)){
args28425.push((arguments[i__17576__auto___28470]));

var G__28471 = (i__17576__auto___28470 + (1));
i__17576__auto___28470 = G__28471;
continue;
} else {
}
break;
}

var G__28427 = args28425.length;
switch (G__28427) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28425.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20007__auto___28473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___28473,out){
return (function (){
var f__20008__auto__ = (function (){var switch__19942__auto__ = ((function (c__20007__auto___28473,out){
return (function (state_28448){
var state_val_28449 = (state_28448[(1)]);
if((state_val_28449 === (7))){
var inst_28444 = (state_28448[(2)]);
var state_28448__$1 = state_28448;
var statearr_28450_28474 = state_28448__$1;
(statearr_28450_28474[(2)] = inst_28444);

(statearr_28450_28474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28449 === (1))){
var state_28448__$1 = state_28448;
var statearr_28451_28475 = state_28448__$1;
(statearr_28451_28475[(2)] = null);

(statearr_28451_28475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28449 === (4))){
var inst_28430 = (state_28448[(7)]);
var inst_28430__$1 = (state_28448[(2)]);
var inst_28431 = (inst_28430__$1 == null);
var state_28448__$1 = (function (){var statearr_28452 = state_28448;
(statearr_28452[(7)] = inst_28430__$1);

return statearr_28452;
})();
if(cljs.core.truth_(inst_28431)){
var statearr_28453_28476 = state_28448__$1;
(statearr_28453_28476[(1)] = (5));

} else {
var statearr_28454_28477 = state_28448__$1;
(statearr_28454_28477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28449 === (6))){
var inst_28430 = (state_28448[(7)]);
var inst_28435 = p.call(null,inst_28430);
var state_28448__$1 = state_28448;
if(cljs.core.truth_(inst_28435)){
var statearr_28455_28478 = state_28448__$1;
(statearr_28455_28478[(1)] = (8));

} else {
var statearr_28456_28479 = state_28448__$1;
(statearr_28456_28479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28449 === (3))){
var inst_28446 = (state_28448[(2)]);
var state_28448__$1 = state_28448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28448__$1,inst_28446);
} else {
if((state_val_28449 === (2))){
var state_28448__$1 = state_28448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28448__$1,(4),ch);
} else {
if((state_val_28449 === (11))){
var inst_28438 = (state_28448[(2)]);
var state_28448__$1 = state_28448;
var statearr_28457_28480 = state_28448__$1;
(statearr_28457_28480[(2)] = inst_28438);

(statearr_28457_28480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28449 === (9))){
var state_28448__$1 = state_28448;
var statearr_28458_28481 = state_28448__$1;
(statearr_28458_28481[(2)] = null);

(statearr_28458_28481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28449 === (5))){
var inst_28433 = cljs.core.async.close_BANG_.call(null,out);
var state_28448__$1 = state_28448;
var statearr_28459_28482 = state_28448__$1;
(statearr_28459_28482[(2)] = inst_28433);

(statearr_28459_28482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28449 === (10))){
var inst_28441 = (state_28448[(2)]);
var state_28448__$1 = (function (){var statearr_28460 = state_28448;
(statearr_28460[(8)] = inst_28441);

return statearr_28460;
})();
var statearr_28461_28483 = state_28448__$1;
(statearr_28461_28483[(2)] = null);

(statearr_28461_28483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28449 === (8))){
var inst_28430 = (state_28448[(7)]);
var state_28448__$1 = state_28448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28448__$1,(11),out,inst_28430);
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
});})(c__20007__auto___28473,out))
;
return ((function (switch__19942__auto__,c__20007__auto___28473,out){
return (function() {
var cljs$core$async$state_machine__19943__auto__ = null;
var cljs$core$async$state_machine__19943__auto____0 = (function (){
var statearr_28465 = [null,null,null,null,null,null,null,null,null];
(statearr_28465[(0)] = cljs$core$async$state_machine__19943__auto__);

(statearr_28465[(1)] = (1));

return statearr_28465;
});
var cljs$core$async$state_machine__19943__auto____1 = (function (state_28448){
while(true){
var ret_value__19944__auto__ = (function (){try{while(true){
var result__19945__auto__ = switch__19942__auto__.call(null,state_28448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19945__auto__;
}
break;
}
}catch (e28466){if((e28466 instanceof Object)){
var ex__19946__auto__ = e28466;
var statearr_28467_28484 = state_28448;
(statearr_28467_28484[(5)] = ex__19946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28485 = state_28448;
state_28448 = G__28485;
continue;
} else {
return ret_value__19944__auto__;
}
break;
}
});
cljs$core$async$state_machine__19943__auto__ = function(state_28448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19943__auto____1.call(this,state_28448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19943__auto____0;
cljs$core$async$state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19943__auto____1;
return cljs$core$async$state_machine__19943__auto__;
})()
;})(switch__19942__auto__,c__20007__auto___28473,out))
})();
var state__20009__auto__ = (function (){var statearr_28468 = f__20008__auto__.call(null);
(statearr_28468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___28473);

return statearr_28468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___28473,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args28486 = [];
var len__17575__auto___28489 = arguments.length;
var i__17576__auto___28490 = (0);
while(true){
if((i__17576__auto___28490 < len__17575__auto___28489)){
args28486.push((arguments[i__17576__auto___28490]));

var G__28491 = (i__17576__auto___28490 + (1));
i__17576__auto___28490 = G__28491;
continue;
} else {
}
break;
}

var G__28488 = args28486.length;
switch (G__28488) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28486.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20007__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto__){
return (function (){
var f__20008__auto__ = (function (){var switch__19942__auto__ = ((function (c__20007__auto__){
return (function (state_28658){
var state_val_28659 = (state_28658[(1)]);
if((state_val_28659 === (7))){
var inst_28654 = (state_28658[(2)]);
var state_28658__$1 = state_28658;
var statearr_28660_28701 = state_28658__$1;
(statearr_28660_28701[(2)] = inst_28654);

(statearr_28660_28701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28659 === (20))){
var inst_28624 = (state_28658[(7)]);
var inst_28635 = (state_28658[(2)]);
var inst_28636 = cljs.core.next.call(null,inst_28624);
var inst_28610 = inst_28636;
var inst_28611 = null;
var inst_28612 = (0);
var inst_28613 = (0);
var state_28658__$1 = (function (){var statearr_28661 = state_28658;
(statearr_28661[(8)] = inst_28611);

(statearr_28661[(9)] = inst_28635);

(statearr_28661[(10)] = inst_28612);

(statearr_28661[(11)] = inst_28610);

(statearr_28661[(12)] = inst_28613);

return statearr_28661;
})();
var statearr_28662_28702 = state_28658__$1;
(statearr_28662_28702[(2)] = null);

(statearr_28662_28702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28659 === (1))){
var state_28658__$1 = state_28658;
var statearr_28663_28703 = state_28658__$1;
(statearr_28663_28703[(2)] = null);

(statearr_28663_28703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28659 === (4))){
var inst_28599 = (state_28658[(13)]);
var inst_28599__$1 = (state_28658[(2)]);
var inst_28600 = (inst_28599__$1 == null);
var state_28658__$1 = (function (){var statearr_28664 = state_28658;
(statearr_28664[(13)] = inst_28599__$1);

return statearr_28664;
})();
if(cljs.core.truth_(inst_28600)){
var statearr_28665_28704 = state_28658__$1;
(statearr_28665_28704[(1)] = (5));

} else {
var statearr_28666_28705 = state_28658__$1;
(statearr_28666_28705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28659 === (15))){
var state_28658__$1 = state_28658;
var statearr_28670_28706 = state_28658__$1;
(statearr_28670_28706[(2)] = null);

(statearr_28670_28706[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28659 === (21))){
var state_28658__$1 = state_28658;
var statearr_28671_28707 = state_28658__$1;
(statearr_28671_28707[(2)] = null);

(statearr_28671_28707[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28659 === (13))){
var inst_28611 = (state_28658[(8)]);
var inst_28612 = (state_28658[(10)]);
var inst_28610 = (state_28658[(11)]);
var inst_28613 = (state_28658[(12)]);
var inst_28620 = (state_28658[(2)]);
var inst_28621 = (inst_28613 + (1));
var tmp28667 = inst_28611;
var tmp28668 = inst_28612;
var tmp28669 = inst_28610;
var inst_28610__$1 = tmp28669;
var inst_28611__$1 = tmp28667;
var inst_28612__$1 = tmp28668;
var inst_28613__$1 = inst_28621;
var state_28658__$1 = (function (){var statearr_28672 = state_28658;
(statearr_28672[(8)] = inst_28611__$1);

(statearr_28672[(14)] = inst_28620);

(statearr_28672[(10)] = inst_28612__$1);

(statearr_28672[(11)] = inst_28610__$1);

(statearr_28672[(12)] = inst_28613__$1);

return statearr_28672;
})();
var statearr_28673_28708 = state_28658__$1;
(statearr_28673_28708[(2)] = null);

(statearr_28673_28708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28659 === (22))){
var state_28658__$1 = state_28658;
var statearr_28674_28709 = state_28658__$1;
(statearr_28674_28709[(2)] = null);

(statearr_28674_28709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28659 === (6))){
var inst_28599 = (state_28658[(13)]);
var inst_28608 = f.call(null,inst_28599);
var inst_28609 = cljs.core.seq.call(null,inst_28608);
var inst_28610 = inst_28609;
var inst_28611 = null;
var inst_28612 = (0);
var inst_28613 = (0);
var state_28658__$1 = (function (){var statearr_28675 = state_28658;
(statearr_28675[(8)] = inst_28611);

(statearr_28675[(10)] = inst_28612);

(statearr_28675[(11)] = inst_28610);

(statearr_28675[(12)] = inst_28613);

return statearr_28675;
})();
var statearr_28676_28710 = state_28658__$1;
(statearr_28676_28710[(2)] = null);

(statearr_28676_28710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28659 === (17))){
var inst_28624 = (state_28658[(7)]);
var inst_28628 = cljs.core.chunk_first.call(null,inst_28624);
var inst_28629 = cljs.core.chunk_rest.call(null,inst_28624);
var inst_28630 = cljs.core.count.call(null,inst_28628);
var inst_28610 = inst_28629;
var inst_28611 = inst_28628;
var inst_28612 = inst_28630;
var inst_28613 = (0);
var state_28658__$1 = (function (){var statearr_28677 = state_28658;
(statearr_28677[(8)] = inst_28611);

(statearr_28677[(10)] = inst_28612);

(statearr_28677[(11)] = inst_28610);

(statearr_28677[(12)] = inst_28613);

return statearr_28677;
})();
var statearr_28678_28711 = state_28658__$1;
(statearr_28678_28711[(2)] = null);

(statearr_28678_28711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28659 === (3))){
var inst_28656 = (state_28658[(2)]);
var state_28658__$1 = state_28658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28658__$1,inst_28656);
} else {
if((state_val_28659 === (12))){
var inst_28644 = (state_28658[(2)]);
var state_28658__$1 = state_28658;
var statearr_28679_28712 = state_28658__$1;
(statearr_28679_28712[(2)] = inst_28644);

(statearr_28679_28712[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28659 === (2))){
var state_28658__$1 = state_28658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28658__$1,(4),in$);
} else {
if((state_val_28659 === (23))){
var inst_28652 = (state_28658[(2)]);
var state_28658__$1 = state_28658;
var statearr_28680_28713 = state_28658__$1;
(statearr_28680_28713[(2)] = inst_28652);

(statearr_28680_28713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28659 === (19))){
var inst_28639 = (state_28658[(2)]);
var state_28658__$1 = state_28658;
var statearr_28681_28714 = state_28658__$1;
(statearr_28681_28714[(2)] = inst_28639);

(statearr_28681_28714[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28659 === (11))){
var inst_28610 = (state_28658[(11)]);
var inst_28624 = (state_28658[(7)]);
var inst_28624__$1 = cljs.core.seq.call(null,inst_28610);
var state_28658__$1 = (function (){var statearr_28682 = state_28658;
(statearr_28682[(7)] = inst_28624__$1);

return statearr_28682;
})();
if(inst_28624__$1){
var statearr_28683_28715 = state_28658__$1;
(statearr_28683_28715[(1)] = (14));

} else {
var statearr_28684_28716 = state_28658__$1;
(statearr_28684_28716[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28659 === (9))){
var inst_28646 = (state_28658[(2)]);
var inst_28647 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28658__$1 = (function (){var statearr_28685 = state_28658;
(statearr_28685[(15)] = inst_28646);

return statearr_28685;
})();
if(cljs.core.truth_(inst_28647)){
var statearr_28686_28717 = state_28658__$1;
(statearr_28686_28717[(1)] = (21));

} else {
var statearr_28687_28718 = state_28658__$1;
(statearr_28687_28718[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28659 === (5))){
var inst_28602 = cljs.core.async.close_BANG_.call(null,out);
var state_28658__$1 = state_28658;
var statearr_28688_28719 = state_28658__$1;
(statearr_28688_28719[(2)] = inst_28602);

(statearr_28688_28719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28659 === (14))){
var inst_28624 = (state_28658[(7)]);
var inst_28626 = cljs.core.chunked_seq_QMARK_.call(null,inst_28624);
var state_28658__$1 = state_28658;
if(inst_28626){
var statearr_28689_28720 = state_28658__$1;
(statearr_28689_28720[(1)] = (17));

} else {
var statearr_28690_28721 = state_28658__$1;
(statearr_28690_28721[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28659 === (16))){
var inst_28642 = (state_28658[(2)]);
var state_28658__$1 = state_28658;
var statearr_28691_28722 = state_28658__$1;
(statearr_28691_28722[(2)] = inst_28642);

(statearr_28691_28722[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28659 === (10))){
var inst_28611 = (state_28658[(8)]);
var inst_28613 = (state_28658[(12)]);
var inst_28618 = cljs.core._nth.call(null,inst_28611,inst_28613);
var state_28658__$1 = state_28658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28658__$1,(13),out,inst_28618);
} else {
if((state_val_28659 === (18))){
var inst_28624 = (state_28658[(7)]);
var inst_28633 = cljs.core.first.call(null,inst_28624);
var state_28658__$1 = state_28658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28658__$1,(20),out,inst_28633);
} else {
if((state_val_28659 === (8))){
var inst_28612 = (state_28658[(10)]);
var inst_28613 = (state_28658[(12)]);
var inst_28615 = (inst_28613 < inst_28612);
var inst_28616 = inst_28615;
var state_28658__$1 = state_28658;
if(cljs.core.truth_(inst_28616)){
var statearr_28692_28723 = state_28658__$1;
(statearr_28692_28723[(1)] = (10));

} else {
var statearr_28693_28724 = state_28658__$1;
(statearr_28693_28724[(1)] = (11));

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
});})(c__20007__auto__))
;
return ((function (switch__19942__auto__,c__20007__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19943__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19943__auto____0 = (function (){
var statearr_28697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28697[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19943__auto__);

(statearr_28697[(1)] = (1));

return statearr_28697;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19943__auto____1 = (function (state_28658){
while(true){
var ret_value__19944__auto__ = (function (){try{while(true){
var result__19945__auto__ = switch__19942__auto__.call(null,state_28658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19945__auto__;
}
break;
}
}catch (e28698){if((e28698 instanceof Object)){
var ex__19946__auto__ = e28698;
var statearr_28699_28725 = state_28658;
(statearr_28699_28725[(5)] = ex__19946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28726 = state_28658;
state_28658 = G__28726;
continue;
} else {
return ret_value__19944__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19943__auto__ = function(state_28658){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19943__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19943__auto____1.call(this,state_28658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19943__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19943__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19943__auto__;
})()
;})(switch__19942__auto__,c__20007__auto__))
})();
var state__20009__auto__ = (function (){var statearr_28700 = f__20008__auto__.call(null);
(statearr_28700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto__);

return statearr_28700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto__))
);

return c__20007__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args28727 = [];
var len__17575__auto___28730 = arguments.length;
var i__17576__auto___28731 = (0);
while(true){
if((i__17576__auto___28731 < len__17575__auto___28730)){
args28727.push((arguments[i__17576__auto___28731]));

var G__28732 = (i__17576__auto___28731 + (1));
i__17576__auto___28731 = G__28732;
continue;
} else {
}
break;
}

var G__28729 = args28727.length;
switch (G__28729) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28727.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args28734 = [];
var len__17575__auto___28737 = arguments.length;
var i__17576__auto___28738 = (0);
while(true){
if((i__17576__auto___28738 < len__17575__auto___28737)){
args28734.push((arguments[i__17576__auto___28738]));

var G__28739 = (i__17576__auto___28738 + (1));
i__17576__auto___28738 = G__28739;
continue;
} else {
}
break;
}

var G__28736 = args28734.length;
switch (G__28736) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28734.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args28741 = [];
var len__17575__auto___28792 = arguments.length;
var i__17576__auto___28793 = (0);
while(true){
if((i__17576__auto___28793 < len__17575__auto___28792)){
args28741.push((arguments[i__17576__auto___28793]));

var G__28794 = (i__17576__auto___28793 + (1));
i__17576__auto___28793 = G__28794;
continue;
} else {
}
break;
}

var G__28743 = args28741.length;
switch (G__28743) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28741.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20007__auto___28796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___28796,out){
return (function (){
var f__20008__auto__ = (function (){var switch__19942__auto__ = ((function (c__20007__auto___28796,out){
return (function (state_28767){
var state_val_28768 = (state_28767[(1)]);
if((state_val_28768 === (7))){
var inst_28762 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
var statearr_28769_28797 = state_28767__$1;
(statearr_28769_28797[(2)] = inst_28762);

(statearr_28769_28797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (1))){
var inst_28744 = null;
var state_28767__$1 = (function (){var statearr_28770 = state_28767;
(statearr_28770[(7)] = inst_28744);

return statearr_28770;
})();
var statearr_28771_28798 = state_28767__$1;
(statearr_28771_28798[(2)] = null);

(statearr_28771_28798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (4))){
var inst_28747 = (state_28767[(8)]);
var inst_28747__$1 = (state_28767[(2)]);
var inst_28748 = (inst_28747__$1 == null);
var inst_28749 = cljs.core.not.call(null,inst_28748);
var state_28767__$1 = (function (){var statearr_28772 = state_28767;
(statearr_28772[(8)] = inst_28747__$1);

return statearr_28772;
})();
if(inst_28749){
var statearr_28773_28799 = state_28767__$1;
(statearr_28773_28799[(1)] = (5));

} else {
var statearr_28774_28800 = state_28767__$1;
(statearr_28774_28800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (6))){
var state_28767__$1 = state_28767;
var statearr_28775_28801 = state_28767__$1;
(statearr_28775_28801[(2)] = null);

(statearr_28775_28801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (3))){
var inst_28764 = (state_28767[(2)]);
var inst_28765 = cljs.core.async.close_BANG_.call(null,out);
var state_28767__$1 = (function (){var statearr_28776 = state_28767;
(statearr_28776[(9)] = inst_28764);

return statearr_28776;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28767__$1,inst_28765);
} else {
if((state_val_28768 === (2))){
var state_28767__$1 = state_28767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28767__$1,(4),ch);
} else {
if((state_val_28768 === (11))){
var inst_28747 = (state_28767[(8)]);
var inst_28756 = (state_28767[(2)]);
var inst_28744 = inst_28747;
var state_28767__$1 = (function (){var statearr_28777 = state_28767;
(statearr_28777[(10)] = inst_28756);

(statearr_28777[(7)] = inst_28744);

return statearr_28777;
})();
var statearr_28778_28802 = state_28767__$1;
(statearr_28778_28802[(2)] = null);

(statearr_28778_28802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (9))){
var inst_28747 = (state_28767[(8)]);
var state_28767__$1 = state_28767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28767__$1,(11),out,inst_28747);
} else {
if((state_val_28768 === (5))){
var inst_28744 = (state_28767[(7)]);
var inst_28747 = (state_28767[(8)]);
var inst_28751 = cljs.core._EQ_.call(null,inst_28747,inst_28744);
var state_28767__$1 = state_28767;
if(inst_28751){
var statearr_28780_28803 = state_28767__$1;
(statearr_28780_28803[(1)] = (8));

} else {
var statearr_28781_28804 = state_28767__$1;
(statearr_28781_28804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (10))){
var inst_28759 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
var statearr_28782_28805 = state_28767__$1;
(statearr_28782_28805[(2)] = inst_28759);

(statearr_28782_28805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (8))){
var inst_28744 = (state_28767[(7)]);
var tmp28779 = inst_28744;
var inst_28744__$1 = tmp28779;
var state_28767__$1 = (function (){var statearr_28783 = state_28767;
(statearr_28783[(7)] = inst_28744__$1);

return statearr_28783;
})();
var statearr_28784_28806 = state_28767__$1;
(statearr_28784_28806[(2)] = null);

(statearr_28784_28806[(1)] = (2));


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
});})(c__20007__auto___28796,out))
;
return ((function (switch__19942__auto__,c__20007__auto___28796,out){
return (function() {
var cljs$core$async$state_machine__19943__auto__ = null;
var cljs$core$async$state_machine__19943__auto____0 = (function (){
var statearr_28788 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28788[(0)] = cljs$core$async$state_machine__19943__auto__);

(statearr_28788[(1)] = (1));

return statearr_28788;
});
var cljs$core$async$state_machine__19943__auto____1 = (function (state_28767){
while(true){
var ret_value__19944__auto__ = (function (){try{while(true){
var result__19945__auto__ = switch__19942__auto__.call(null,state_28767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19945__auto__;
}
break;
}
}catch (e28789){if((e28789 instanceof Object)){
var ex__19946__auto__ = e28789;
var statearr_28790_28807 = state_28767;
(statearr_28790_28807[(5)] = ex__19946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28808 = state_28767;
state_28767 = G__28808;
continue;
} else {
return ret_value__19944__auto__;
}
break;
}
});
cljs$core$async$state_machine__19943__auto__ = function(state_28767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19943__auto____1.call(this,state_28767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19943__auto____0;
cljs$core$async$state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19943__auto____1;
return cljs$core$async$state_machine__19943__auto__;
})()
;})(switch__19942__auto__,c__20007__auto___28796,out))
})();
var state__20009__auto__ = (function (){var statearr_28791 = f__20008__auto__.call(null);
(statearr_28791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___28796);

return statearr_28791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___28796,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args28809 = [];
var len__17575__auto___28879 = arguments.length;
var i__17576__auto___28880 = (0);
while(true){
if((i__17576__auto___28880 < len__17575__auto___28879)){
args28809.push((arguments[i__17576__auto___28880]));

var G__28881 = (i__17576__auto___28880 + (1));
i__17576__auto___28880 = G__28881;
continue;
} else {
}
break;
}

var G__28811 = args28809.length;
switch (G__28811) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28809.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20007__auto___28883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___28883,out){
return (function (){
var f__20008__auto__ = (function (){var switch__19942__auto__ = ((function (c__20007__auto___28883,out){
return (function (state_28849){
var state_val_28850 = (state_28849[(1)]);
if((state_val_28850 === (7))){
var inst_28845 = (state_28849[(2)]);
var state_28849__$1 = state_28849;
var statearr_28851_28884 = state_28849__$1;
(statearr_28851_28884[(2)] = inst_28845);

(statearr_28851_28884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (1))){
var inst_28812 = (new Array(n));
var inst_28813 = inst_28812;
var inst_28814 = (0);
var state_28849__$1 = (function (){var statearr_28852 = state_28849;
(statearr_28852[(7)] = inst_28813);

(statearr_28852[(8)] = inst_28814);

return statearr_28852;
})();
var statearr_28853_28885 = state_28849__$1;
(statearr_28853_28885[(2)] = null);

(statearr_28853_28885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (4))){
var inst_28817 = (state_28849[(9)]);
var inst_28817__$1 = (state_28849[(2)]);
var inst_28818 = (inst_28817__$1 == null);
var inst_28819 = cljs.core.not.call(null,inst_28818);
var state_28849__$1 = (function (){var statearr_28854 = state_28849;
(statearr_28854[(9)] = inst_28817__$1);

return statearr_28854;
})();
if(inst_28819){
var statearr_28855_28886 = state_28849__$1;
(statearr_28855_28886[(1)] = (5));

} else {
var statearr_28856_28887 = state_28849__$1;
(statearr_28856_28887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (15))){
var inst_28839 = (state_28849[(2)]);
var state_28849__$1 = state_28849;
var statearr_28857_28888 = state_28849__$1;
(statearr_28857_28888[(2)] = inst_28839);

(statearr_28857_28888[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (13))){
var state_28849__$1 = state_28849;
var statearr_28858_28889 = state_28849__$1;
(statearr_28858_28889[(2)] = null);

(statearr_28858_28889[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (6))){
var inst_28814 = (state_28849[(8)]);
var inst_28835 = (inst_28814 > (0));
var state_28849__$1 = state_28849;
if(cljs.core.truth_(inst_28835)){
var statearr_28859_28890 = state_28849__$1;
(statearr_28859_28890[(1)] = (12));

} else {
var statearr_28860_28891 = state_28849__$1;
(statearr_28860_28891[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (3))){
var inst_28847 = (state_28849[(2)]);
var state_28849__$1 = state_28849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28849__$1,inst_28847);
} else {
if((state_val_28850 === (12))){
var inst_28813 = (state_28849[(7)]);
var inst_28837 = cljs.core.vec.call(null,inst_28813);
var state_28849__$1 = state_28849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28849__$1,(15),out,inst_28837);
} else {
if((state_val_28850 === (2))){
var state_28849__$1 = state_28849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28849__$1,(4),ch);
} else {
if((state_val_28850 === (11))){
var inst_28829 = (state_28849[(2)]);
var inst_28830 = (new Array(n));
var inst_28813 = inst_28830;
var inst_28814 = (0);
var state_28849__$1 = (function (){var statearr_28861 = state_28849;
(statearr_28861[(7)] = inst_28813);

(statearr_28861[(8)] = inst_28814);

(statearr_28861[(10)] = inst_28829);

return statearr_28861;
})();
var statearr_28862_28892 = state_28849__$1;
(statearr_28862_28892[(2)] = null);

(statearr_28862_28892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (9))){
var inst_28813 = (state_28849[(7)]);
var inst_28827 = cljs.core.vec.call(null,inst_28813);
var state_28849__$1 = state_28849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28849__$1,(11),out,inst_28827);
} else {
if((state_val_28850 === (5))){
var inst_28813 = (state_28849[(7)]);
var inst_28822 = (state_28849[(11)]);
var inst_28814 = (state_28849[(8)]);
var inst_28817 = (state_28849[(9)]);
var inst_28821 = (inst_28813[inst_28814] = inst_28817);
var inst_28822__$1 = (inst_28814 + (1));
var inst_28823 = (inst_28822__$1 < n);
var state_28849__$1 = (function (){var statearr_28863 = state_28849;
(statearr_28863[(11)] = inst_28822__$1);

(statearr_28863[(12)] = inst_28821);

return statearr_28863;
})();
if(cljs.core.truth_(inst_28823)){
var statearr_28864_28893 = state_28849__$1;
(statearr_28864_28893[(1)] = (8));

} else {
var statearr_28865_28894 = state_28849__$1;
(statearr_28865_28894[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (14))){
var inst_28842 = (state_28849[(2)]);
var inst_28843 = cljs.core.async.close_BANG_.call(null,out);
var state_28849__$1 = (function (){var statearr_28867 = state_28849;
(statearr_28867[(13)] = inst_28842);

return statearr_28867;
})();
var statearr_28868_28895 = state_28849__$1;
(statearr_28868_28895[(2)] = inst_28843);

(statearr_28868_28895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (10))){
var inst_28833 = (state_28849[(2)]);
var state_28849__$1 = state_28849;
var statearr_28869_28896 = state_28849__$1;
(statearr_28869_28896[(2)] = inst_28833);

(statearr_28869_28896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (8))){
var inst_28813 = (state_28849[(7)]);
var inst_28822 = (state_28849[(11)]);
var tmp28866 = inst_28813;
var inst_28813__$1 = tmp28866;
var inst_28814 = inst_28822;
var state_28849__$1 = (function (){var statearr_28870 = state_28849;
(statearr_28870[(7)] = inst_28813__$1);

(statearr_28870[(8)] = inst_28814);

return statearr_28870;
})();
var statearr_28871_28897 = state_28849__$1;
(statearr_28871_28897[(2)] = null);

(statearr_28871_28897[(1)] = (2));


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
});})(c__20007__auto___28883,out))
;
return ((function (switch__19942__auto__,c__20007__auto___28883,out){
return (function() {
var cljs$core$async$state_machine__19943__auto__ = null;
var cljs$core$async$state_machine__19943__auto____0 = (function (){
var statearr_28875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28875[(0)] = cljs$core$async$state_machine__19943__auto__);

(statearr_28875[(1)] = (1));

return statearr_28875;
});
var cljs$core$async$state_machine__19943__auto____1 = (function (state_28849){
while(true){
var ret_value__19944__auto__ = (function (){try{while(true){
var result__19945__auto__ = switch__19942__auto__.call(null,state_28849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19945__auto__;
}
break;
}
}catch (e28876){if((e28876 instanceof Object)){
var ex__19946__auto__ = e28876;
var statearr_28877_28898 = state_28849;
(statearr_28877_28898[(5)] = ex__19946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28899 = state_28849;
state_28849 = G__28899;
continue;
} else {
return ret_value__19944__auto__;
}
break;
}
});
cljs$core$async$state_machine__19943__auto__ = function(state_28849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19943__auto____1.call(this,state_28849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19943__auto____0;
cljs$core$async$state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19943__auto____1;
return cljs$core$async$state_machine__19943__auto__;
})()
;})(switch__19942__auto__,c__20007__auto___28883,out))
})();
var state__20009__auto__ = (function (){var statearr_28878 = f__20008__auto__.call(null);
(statearr_28878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___28883);

return statearr_28878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___28883,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args28900 = [];
var len__17575__auto___28974 = arguments.length;
var i__17576__auto___28975 = (0);
while(true){
if((i__17576__auto___28975 < len__17575__auto___28974)){
args28900.push((arguments[i__17576__auto___28975]));

var G__28976 = (i__17576__auto___28975 + (1));
i__17576__auto___28975 = G__28976;
continue;
} else {
}
break;
}

var G__28902 = args28900.length;
switch (G__28902) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28900.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20007__auto___28978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___28978,out){
return (function (){
var f__20008__auto__ = (function (){var switch__19942__auto__ = ((function (c__20007__auto___28978,out){
return (function (state_28944){
var state_val_28945 = (state_28944[(1)]);
if((state_val_28945 === (7))){
var inst_28940 = (state_28944[(2)]);
var state_28944__$1 = state_28944;
var statearr_28946_28979 = state_28944__$1;
(statearr_28946_28979[(2)] = inst_28940);

(statearr_28946_28979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (1))){
var inst_28903 = [];
var inst_28904 = inst_28903;
var inst_28905 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28944__$1 = (function (){var statearr_28947 = state_28944;
(statearr_28947[(7)] = inst_28904);

(statearr_28947[(8)] = inst_28905);

return statearr_28947;
})();
var statearr_28948_28980 = state_28944__$1;
(statearr_28948_28980[(2)] = null);

(statearr_28948_28980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (4))){
var inst_28908 = (state_28944[(9)]);
var inst_28908__$1 = (state_28944[(2)]);
var inst_28909 = (inst_28908__$1 == null);
var inst_28910 = cljs.core.not.call(null,inst_28909);
var state_28944__$1 = (function (){var statearr_28949 = state_28944;
(statearr_28949[(9)] = inst_28908__$1);

return statearr_28949;
})();
if(inst_28910){
var statearr_28950_28981 = state_28944__$1;
(statearr_28950_28981[(1)] = (5));

} else {
var statearr_28951_28982 = state_28944__$1;
(statearr_28951_28982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (15))){
var inst_28934 = (state_28944[(2)]);
var state_28944__$1 = state_28944;
var statearr_28952_28983 = state_28944__$1;
(statearr_28952_28983[(2)] = inst_28934);

(statearr_28952_28983[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (13))){
var state_28944__$1 = state_28944;
var statearr_28953_28984 = state_28944__$1;
(statearr_28953_28984[(2)] = null);

(statearr_28953_28984[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (6))){
var inst_28904 = (state_28944[(7)]);
var inst_28929 = inst_28904.length;
var inst_28930 = (inst_28929 > (0));
var state_28944__$1 = state_28944;
if(cljs.core.truth_(inst_28930)){
var statearr_28954_28985 = state_28944__$1;
(statearr_28954_28985[(1)] = (12));

} else {
var statearr_28955_28986 = state_28944__$1;
(statearr_28955_28986[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (3))){
var inst_28942 = (state_28944[(2)]);
var state_28944__$1 = state_28944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28944__$1,inst_28942);
} else {
if((state_val_28945 === (12))){
var inst_28904 = (state_28944[(7)]);
var inst_28932 = cljs.core.vec.call(null,inst_28904);
var state_28944__$1 = state_28944;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28944__$1,(15),out,inst_28932);
} else {
if((state_val_28945 === (2))){
var state_28944__$1 = state_28944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28944__$1,(4),ch);
} else {
if((state_val_28945 === (11))){
var inst_28908 = (state_28944[(9)]);
var inst_28912 = (state_28944[(10)]);
var inst_28922 = (state_28944[(2)]);
var inst_28923 = [];
var inst_28924 = inst_28923.push(inst_28908);
var inst_28904 = inst_28923;
var inst_28905 = inst_28912;
var state_28944__$1 = (function (){var statearr_28956 = state_28944;
(statearr_28956[(7)] = inst_28904);

(statearr_28956[(8)] = inst_28905);

(statearr_28956[(11)] = inst_28924);

(statearr_28956[(12)] = inst_28922);

return statearr_28956;
})();
var statearr_28957_28987 = state_28944__$1;
(statearr_28957_28987[(2)] = null);

(statearr_28957_28987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (9))){
var inst_28904 = (state_28944[(7)]);
var inst_28920 = cljs.core.vec.call(null,inst_28904);
var state_28944__$1 = state_28944;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28944__$1,(11),out,inst_28920);
} else {
if((state_val_28945 === (5))){
var inst_28908 = (state_28944[(9)]);
var inst_28905 = (state_28944[(8)]);
var inst_28912 = (state_28944[(10)]);
var inst_28912__$1 = f.call(null,inst_28908);
var inst_28913 = cljs.core._EQ_.call(null,inst_28912__$1,inst_28905);
var inst_28914 = cljs.core.keyword_identical_QMARK_.call(null,inst_28905,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28915 = (inst_28913) || (inst_28914);
var state_28944__$1 = (function (){var statearr_28958 = state_28944;
(statearr_28958[(10)] = inst_28912__$1);

return statearr_28958;
})();
if(cljs.core.truth_(inst_28915)){
var statearr_28959_28988 = state_28944__$1;
(statearr_28959_28988[(1)] = (8));

} else {
var statearr_28960_28989 = state_28944__$1;
(statearr_28960_28989[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (14))){
var inst_28937 = (state_28944[(2)]);
var inst_28938 = cljs.core.async.close_BANG_.call(null,out);
var state_28944__$1 = (function (){var statearr_28962 = state_28944;
(statearr_28962[(13)] = inst_28937);

return statearr_28962;
})();
var statearr_28963_28990 = state_28944__$1;
(statearr_28963_28990[(2)] = inst_28938);

(statearr_28963_28990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (10))){
var inst_28927 = (state_28944[(2)]);
var state_28944__$1 = state_28944;
var statearr_28964_28991 = state_28944__$1;
(statearr_28964_28991[(2)] = inst_28927);

(statearr_28964_28991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (8))){
var inst_28908 = (state_28944[(9)]);
var inst_28904 = (state_28944[(7)]);
var inst_28912 = (state_28944[(10)]);
var inst_28917 = inst_28904.push(inst_28908);
var tmp28961 = inst_28904;
var inst_28904__$1 = tmp28961;
var inst_28905 = inst_28912;
var state_28944__$1 = (function (){var statearr_28965 = state_28944;
(statearr_28965[(7)] = inst_28904__$1);

(statearr_28965[(8)] = inst_28905);

(statearr_28965[(14)] = inst_28917);

return statearr_28965;
})();
var statearr_28966_28992 = state_28944__$1;
(statearr_28966_28992[(2)] = null);

(statearr_28966_28992[(1)] = (2));


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
});})(c__20007__auto___28978,out))
;
return ((function (switch__19942__auto__,c__20007__auto___28978,out){
return (function() {
var cljs$core$async$state_machine__19943__auto__ = null;
var cljs$core$async$state_machine__19943__auto____0 = (function (){
var statearr_28970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28970[(0)] = cljs$core$async$state_machine__19943__auto__);

(statearr_28970[(1)] = (1));

return statearr_28970;
});
var cljs$core$async$state_machine__19943__auto____1 = (function (state_28944){
while(true){
var ret_value__19944__auto__ = (function (){try{while(true){
var result__19945__auto__ = switch__19942__auto__.call(null,state_28944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19945__auto__;
}
break;
}
}catch (e28971){if((e28971 instanceof Object)){
var ex__19946__auto__ = e28971;
var statearr_28972_28993 = state_28944;
(statearr_28972_28993[(5)] = ex__19946__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28994 = state_28944;
state_28944 = G__28994;
continue;
} else {
return ret_value__19944__auto__;
}
break;
}
});
cljs$core$async$state_machine__19943__auto__ = function(state_28944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19943__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19943__auto____1.call(this,state_28944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19943__auto____0;
cljs$core$async$state_machine__19943__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19943__auto____1;
return cljs$core$async$state_machine__19943__auto__;
})()
;})(switch__19942__auto__,c__20007__auto___28978,out))
})();
var state__20009__auto__ = (function (){var statearr_28973 = f__20008__auto__.call(null);
(statearr_28973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___28978);

return statearr_28973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___28978,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1441453640960